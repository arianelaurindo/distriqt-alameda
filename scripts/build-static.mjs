import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputRoot = join(process.cwd(), 'dist-static');
const routeRoot = join(outputRoot, 'distriqt-alameda');
const assetsRoot = join(routeRoot, 'assets');

await rm(outputRoot, { recursive: true, force: true });
await mkdir(assetsRoot, { recursive: true });
await cp(join(process.cwd(), 'public'), routeRoot, { recursive: true });
await cp(join(process.cwd(), 'app', 'globals.css'), join(assetsRoot, 'styles.css'));

const pageSource = await readFile(join(process.cwd(), 'app', 'page.tsx'), 'utf8');
const browserSource = `
import React from 'react';
import { createRoot } from 'react-dom/client';
${pageSource
  .replace('import Image from "next/image";', '')
  .replaceAll('<Image ', '<img ')
  .replace('export default function Home()', 'function Home()')}

createRoot(document.getElementById('root')!).render(<Home />);
`;

await build({
  stdin: {
    contents: browserSource,
    loader: 'tsx',
    resolveDir: process.cwd(),
    sourcefile: 'static-entry.tsx',
  },
  bundle: true,
  format: 'iife',
  minify: true,
  outfile: join(assetsRoot, 'app.js'),
  target: ['es2020'],
});

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>ALAMEDA no DISTRITQ | Casas e Townhouses em Alphaville</title>
    <meta name="description" content="Conheça o ALAMEDA, no novo bairro planejado DISTRITQ em Alphaville. Casas e townhouses de 113 a 355 m². Atendimento com Ariane Laurindo." />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://www.casaseapartamentosalphaville.com/distriqt-alameda" />
    <meta property="og:title" content="ALAMEDA no DISTRITQ | Alphaville" />
    <meta property="og:description" content="Casas e townhouses de 113 a 355 m² em um projeto com arquitetura autoral, natureza e clube completo." />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:url" content="https://www.casaseapartamentosalphaville.com/distriqt-alameda" />
    <link rel="icon" href="/distriqt-alameda/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/distriqt-alameda/assets/styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="/distriqt-alameda/assets/app.js"></script>
  </body>
</html>`;

await writeFile(join(routeRoot, 'index.html'), html);
