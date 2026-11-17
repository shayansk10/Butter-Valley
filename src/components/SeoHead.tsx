import { useEffect } from 'react';
import { COMPANY } from '../data/company';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  category: string;
}

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  productSchema?: ProductSchemaInput;
}

function upsertMeta(selector: string, attrName: 'name' | 'property', attrVal: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function SeoHead({
  title,
  description,
  path,
  image = COMPANY.heroImage,
  breadcrumbs,
  productSchema,
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${path === '/' ? '/' : path}`;
    const absoluteImageUrl = image.startsWith('http') ? image : `${origin}${image}`;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImageUrl);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const schemas: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: COMPANY.name,
        url: origin,
        logo: `${origin}${COMPANY.logo}`,
        email: COMPANY.email,
        slogan: COMPANY.tagline,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Plot No. A-23, Besides MCB SITE Branch, Opposite Rangers Headquarters, Main Auto Bhan Road, Near Fateh Chowk, SITE',
          addressLocality: 'Hyderabad',
          addressRegion: 'Sindh',
          addressCountry: 'PK',
        },
        sameAs: [COMPANY.social.facebook, COMPANY.social.instagram],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: COMPANY.name,
        url: origin,
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${origin}${crumb.path}`,
        })),
      });
    }

    if (productSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productSchema.name,
        description: productSchema.description,
        category: productSchema.category,
        image: productSchema.image.startsWith('http')
          ? productSchema.image
          : `${origin}${productSchema.image}`,
        brand: {
          '@type': 'Brand',
          name: COMPANY.name,
        },
        manufacturer: {
          '@type': 'Organization',
          name: COMPANY.name,
        },
      });
    }

    const scriptId = 'butter-valley-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemas);
  }, [title, description, path, image, breadcrumbs, productSchema]);

  return null;
}
