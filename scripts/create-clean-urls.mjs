import { cp, mkdir, readdir } from 'node:fs/promises';
import { basename, dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../dist/client/', import.meta.url));

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtml(path)));
    else if (extname(entry.name) === '.html') files.push(path);
  }

  return files;
}

for (const htmlFile of await collectHtml(publicDir)) {
  const name = basename(htmlFile, '.html');
  if (name === 'index' || name === '404') continue;

  const cleanUrlDirectory = join(dirname(htmlFile), name);
  await mkdir(cleanUrlDirectory, { recursive: true });
  await cp(htmlFile, join(cleanUrlDirectory, 'index.html'));
}

console.log(
  `Clean URLs created in ${relative(process.cwd(), publicDir)}`,
);
