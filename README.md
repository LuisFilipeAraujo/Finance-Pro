# Finance Pro — Home Page

Landing page inicial do Finance Pro, construída em Next.js (App Router).

## Escopo

Este projeto contém a **Home Page** e uma **lista de espera**. Não há
dashboard funcional, autenticação, banco de dados ou integração com IA — os
dados exibidos (extrato, gráficos, transações) são mockados e puramente
ilustrativos. Rotas como `/login`, `/sobre`, `/contato`, `/termos` e
`/privacidade` são placeholders (`noindex`) até terem conteúdo real.

### Lista de espera

O formulário da seção "Comece" (`#comecar`) usa uma Server Action
(`app/actions/waitlist.js`) que grava os e-mails em `data/waitlist.jsonl`
(gitignored — é dado pessoal). Isso funciona em dev e em um servidor Node
tradicional, mas **não em hosts serverless** como a Vercel (filesystem
somente leitura): antes de publicar lá, troque `lib/waitlist.js` por um banco
de dados.

### Variáveis de ambiente

Veja `.env.example`. `NEXT_PUBLIC_SITE_URL` define a URL usada em Open Graph,
canonical, sitemap e robots (padrão: `http://localhost:3000`).

## Rodando pela primeira vez

Pré-requisito: Node.js 20.9+ (recomendado 24 LTS, a mesma versão usada no CI).

```bash
# 1. instalar dependências
npm install

# 2. baixar o gitleaks (necessário uma vez por máquina — usado pelo
#    pre-commit hook que bloqueia commits com segredos/tokens/API keys)
npm run setup:gitleaks

# 3. subir o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

O passo 2 instala o hook via `husky` (já configurado no `prepare` do
`package.json`, roda automaticamente no `npm install`) e baixa o binário do
gitleaks para `tools/gitleaks/` (gitignored). Sem isso, o próximo `git commit`
vai falhar avisando que o gitleaks não foi encontrado — só rodar o comando do
passo 2 e commitar de novo.

## Outros comandos

```bash
npm run build   # build de produção
npm run start   # servidor de produção (após o build)
npm run lint    # lint
```

## Estrutura

```
app/
  layout.jsx      → layout raiz, fontes (Fraunces + IBM Plex Sans), metadata/SEO
  page.jsx        → composição da Home a partir dos componentes
  globals.css     → tokens de design (cores, tipografia, espaçamento), foco, skip link
  actions/        → Server Actions (lista de espera)
  icon.png, apple-icon.png, opengraph-image.jsx, twitter-image.jsx,
  sitemap.js, robots.js → favicon, cards de compartilhamento e SEO
  login/, sobre/, contato/, termos/, privacidade/ → páginas placeholder
lib/
  site.js         → URL, nome e descrição do site
  waitlist.js     → armazenamento da lista de espera
components/
  Navbar.jsx / .module.css  (+ MobileMenu.jsx, menu hambúrguer abaixo de 860px)
  WaitlistForm.jsx / .module.css
  ComingSoon.jsx / .module.css  → layout das páginas placeholder
  Hero.jsx / .module.css
  Benefits.jsx / .module.css
  ProductShowcase.jsx / .module.css
  AIHighlight.jsx / .module.css
  FinalCTA.jsx / .module.css
  Footer.jsx / .module.css
public/
  logo.png        → logo fornecida do Finance Pro
```

## Identidade visual

A paleta parte da logo: verde floresta (`#1b6b4a`) e verde-folha (`#2e8b5f`)
do escudo/folha, grafite (`#3d4448`) da engrenagem, e laranja (`#e8821e`) do
símbolo de porcentagem — usado com moderação, como destaque pontual. O laranja
puro tem contraste insuficiente sobre fundo claro (2,6:1); para texto em fundo
claro use `--color-ember-strong` (5:1).
Tipografia combina uma serifada (Fraunces) para títulos com um sans técnico
(IBM Plex Sans) para o corpo, refletindo a dualidade orgânico/mecânico da
própria logo (folha + engrenagem).

## Próximos passos (fora do escopo desta task)

Dashboard funcional, autenticação, backend, banco de dados e a camada de IA
mencionada na seção "Inteligência" ficam para tasks futuras.
