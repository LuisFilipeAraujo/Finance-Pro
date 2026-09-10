import { mkdirSync, existsSync, rmSync } from 'node:fs';
import { execSync } from 'node:child_process';

const VERSION = '8.30.1';
const DIR = 'tools/gitleaks';
const EXE = `${DIR}/gitleaks.exe`;
const ZIP = `${DIR}/gitleaks.zip`;
const URL = `https://github.com/gitleaks/gitleaks/releases/download/v${VERSION}/gitleaks_${VERSION}_windows_x64.zip`;

if (existsSync(EXE)) {
  console.log(`gitleaks já está instalado em ${EXE}`);
  process.exit(0);
}

mkdirSync(DIR, { recursive: true });
execSync(`curl -sL -o "${ZIP}" "${URL}"`, { stdio: 'inherit' });
// Usa o Expand-Archive do PowerShell em vez de `tar`/`unzip`: em Git Bash o
// `tar` do PATH costuma ser o do MSYS (sem suporte a zip), então extração
// via `tar -xf` falha silenciosamente dependendo do shell de onde é chamado.
execSync(
  `powershell -NoProfile -Command "Expand-Archive -Path '${ZIP}' -DestinationPath '${DIR}' -Force"`,
  { stdio: 'inherit' }
);
rmSync(ZIP);

console.log(`gitleaks instalado em ${EXE}`);
