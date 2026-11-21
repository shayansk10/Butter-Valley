import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const portFlagIndex = process.argv.indexOf('--port');
const cliPort =
  portFlagIndex !== -1 && process.argv[portFlagIndex + 1]
    ? Number(process.argv[portFlagIndex + 1])
    : undefined;

const PORT = cliPort || Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  app.set('trust proxy', 1);

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'butter-valley-web' });
  });

  if (!isProduction) {
    const viteReady = (async () => {
      const { createServer: createViteServer } = await import('vite');
      return createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
    })();

    app.use(async (req, res, next) => {
      try {
        const vite = await viteReady;
        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath, { index: false }));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Butter Valley server listening on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start Butter Valley server:', err);
  process.exit(1);
});
