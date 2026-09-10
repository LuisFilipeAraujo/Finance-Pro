# Finance Pro — Home Page

Landing page inicial do Finance Pro, construída em Next.js (App Router).

## Escopo

Este projeto contém **apenas a Home Page**, como template visual e estrutural
para o produto. Não há dashboard funcional, autenticação, backend, banco de
dados ou integração com IA — todos os dados exibidos (extrato, gráficos,
transações) são mockados e puramente ilustrativos.

## Rodando pela primeira vez

Pré-requisito: Node.js 18.18+ (recomendado 20 LTS ou superior).

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
  layout.jsx      → layout raiz, fontes (Fraunces + IBM Plex Sans), metadata
  page.jsx        → composição da Home a partir dos componentes
  globals.css     → tokens de design (cores, tipografia, espaçamento)
components/
  Navbar.jsx / .module.css
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
símbolo de porcentagem — usado com moderação, como destaque pontual.
Tipografia combina uma serifada (Fraunces) para títulos com um sans técnico
(IBM Plex Sans) para o corpo, refletindo a dualidade orgânico/mecânico da
própria logo (folha + engrenagem).

## Próximos passos (fora do escopo desta task)

Dashboard funcional, autenticação, backend, banco de dados e a camada de IA
mencionada na seção "Inteligência" ficam para tasks futuras.
