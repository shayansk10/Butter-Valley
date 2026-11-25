import os, re, subprocess, json

SRC_DIRS = ["src", "index.html"]
PUBLIC_DIR = "public"
OPT_DIR = "public/assets/opt"

refs = set()
pattern = re.compile(r"/assets/aistudio/[A-Za-z0-9_.-]+")
for root_item in SRC_DIRS:
  if os.path.isfile(root_item):
    with open(root_item, "r", encoding="utf-8") as fh:
      refs.update(pattern.findall(fh.read()))
  else:
    for dp, _, fns in os.walk(root_item):
      for fn in fns:
        if fn.endswith((".ts", ".tsx", ".css", ".html")) :
          with open(os.path.join(dp, fn), "r", encoding="utf-8") as fh:
            refs.update(pattern.findall(fh.read()))

refs = sorted(refs)
print(f"Found {len(refs)} active image assets.")

manifest = {}

for web_path in refs:
  fs_path = os.path.join(PUBLIC_DIR, web_path.lstrip("/"))
  if not os.path.exists(fs_path):
    print(f"Warning: original {fs_path} not found")
    continue
  info = subprocess.check_output(["identify", "-format", "%w %h", fs_path]).decode().strip()
  w, h = map(int, info.split())
  stem = os.path.splitext(os.path.basename(web_path))[0]

  # Find all webp and avif in OPT_DIR for this stem
  webp_variants = []
  avif_variants = []

  for fn in sorted(os.listdir(OPT_DIR)):
    if fn.startswith(stem + "-") and fn.endswith(".webp"):
        # extract width
        m = re.search(r"-(\d+)w\.webp$", fn)
        if m:
            tw = int(m.group(1))
            webp_variants.append({"width": tw, "src": f"/assets/opt/{fn}"})
    elif fn.startswith(stem + "-") and fn.endswith(".avif"):
        m = re.search(r"-(\d+)w\.avif$", fn)
        if m:
            tw = int(m.group(1))
            avif_variants.append({"width": tw, "src": f"/assets/opt/{fn}"})

  webp_variants.sort(key=lambda x: x["width"])
  avif_variants.sort(key=lambda x: x["width"])

  entry = {
      "width": w,
      "height": h,
      "webp": webp_variants,
  }
  if avif_variants:
      entry["avif"] = avif_variants

  manifest[web_path] = entry

ts_lines = [
  "export interface ImageVariant {",
  "  readonly width: number;",
  "  readonly src: string;",
  "}",
  "",
  "export interface ImageManifestEntry {",
  "  readonly width: number;",
  "  readonly height: number;",
  "  readonly webp: readonly ImageVariant[];",
  "  readonly avif?: readonly ImageVariant[];",
  "}",
  "",
  "export const IMAGE_MANIFEST: Record<string, ImageManifestEntry> = " + json.dumps(manifest, indent=2) + ";",
  "",
]

os.makedirs("src/data", exist_ok=True)
with open("src/data/imageManifest.ts", "w", encoding="utf-8") as fh:
  fh.write("\n".join(ts_lines))

print(f"Successfully generated src/data/imageManifest.ts with {len(manifest)} entries.")
