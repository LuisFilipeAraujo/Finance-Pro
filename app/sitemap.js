import { siteUrl } from '../lib/site';

// Placeholder pages (login, legal, etc.) are noindex until they have real content.
export default function sitemap() {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
