# Finance Pro — Agent Instructions

## Comandos

- `npm install` — instalar dependências
- `npm run dev` — servidor de desenvolvimento (`localhost:3000`)
- `npm run build` — build de produção
- `npm run start` — servidor de produção (após build)
- `npm run lint` — lint
- `npm run setup:gitleaks` — baixa o binário do gitleaks (necessário uma vez por máquina, para o pre-commit hook funcionar)

## Segredos e credenciais

- Nunca commitar tokens, chaves de API, senhas ou strings de conexão — nem em código, nem em arquivos de config, nem em exemplos "temporários".
- Variáveis sensíveis vão em `.env.local` (já ignorado pelo git via `.env*.local`). Nunca criar `.env` com valores reais versionado.
- Se precisar documentar quais variáveis de ambiente existem, use um `.env.example` com chaves vazias/placeholder, nunca com valores reais.
- Antes de `git add -A` ou commits amplos, revisar `git status`/`git diff` em busca de credenciais que possam ter entrado em arquivos não óbvios (logs, fixtures, configs).
- Se encontrar um segredo já commitado, avisar o usuário antes de tentar removê-lo do histórico — não é uma operação simples de reverter.
- Há um pre-commit hook (husky + gitleaks) que bloqueia automaticamente commits contendo segredos detectáveis (API keys, tokens, chaves privadas, etc). Se ele barrar um commit, não contornar com `--no-verify` — investigar o achado.
