function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return 'http://localhost:3000';
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, '');

export const siteName = 'Finance Pro';
export const siteTitle = 'Finance Pro — Clareza para a sua vida financeira';
export const siteDescription =
  'Finance Pro é a plataforma que organiza seus gastos, revela padrões e te ajuda a planejar o futuro financeiro com clareza.';
