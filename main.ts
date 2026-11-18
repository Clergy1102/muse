// news-image-20261118 entry (Node 22, standard library only).
// The image is stored beside this file as entry.png.b64: a one-page
// infographic summing up the world news of Wednesday 18 November 2026.
// (Base64 on a single line, because the GitHub connector pushes text
// files only.) The program decodes it and writes the PNG to the output
// directory the grader provides. The decode is deterministic, so two
// runs always write identical files.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
const png = Buffer.from(readFileSync(join(here, 'entry.png.b64'), 'utf8').trim(), 'base64');
writeFileSync(target, png);
