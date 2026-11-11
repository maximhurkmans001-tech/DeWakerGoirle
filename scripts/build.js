// Bouwt de website in twee delen:
// 1. dist/                  openbare bestanden (homepage, inloggen, privacy, foto's)
// 2. private/portaal.html   het besloten bewonersgedeelte, alleen via de server na inloggen
import { cp, rm, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { build } from "vite";
import { NIEUWSBERICHTEN } from "../src/data/nieuws.js";
import { ACTIVITEITEN } from "../src/data/activiteiten.js";

// 1. Openbare uitvoer: alles uit public/
await rm("dist", { recursive: true, force: true });
await mkdir("dist");
await cp("public", "dist", { recursive: true });

// 2. Bewonersgedeelte bouwen en JavaScript + CSS in één HTML-bestand zetten
const outDir = ".portaal-build";
await build({ logLevel: "warn" });
let html = await readFile(join(outDir, "portaal.html"), "utf8");

for (const m of [...html.matchAll(/<script type="module" crossorigin src="\/([^"]+)"><\/script>/g)]) {
  const code = (await readFile(join(outDir, m[1]), "utf8")).replace(/<\/script/gi, "<\\/script");
  html = html.replace(m[0], () => `<script type="module">${code}</script>`);
}
for (const m of [...html.matchAll(/<link rel="stylesheet" crossorigin href="\/([^"]+)">/g)]) {
  const css = await readFile(join(outDir, m[1]), "utf8");
  html = html.replace(m[0], () => `<style>${css}</style>`);
}
if (/(src|href)="\/assets\//.test(html)) throw new Error("Niet alle portaalbestanden zijn samengevoegd");

await mkdir("private", { recursive: true });
await writeFile(join("private", "portaal.html"), html);
await rm(outDir, { recursive: true, force: true });

// 3. Controle: geen privébestanden of bewonersinhoud in de openbare uitvoer
const files = await readdir("dist", { recursive: true });
if (files.some((p) => /private|portaal|\.jsx|\.env|\.sql/.test(p))) throw new Error("Privébestand in publieke uitvoer");
const kenmerken = [...NIEUWSBERICHTEN.map((b) => b.titel), ...ACTIVITEITEN.map((a) => a.titel)];
for (const f of files.filter((p) => /\.(html|js|css|txt)$/.test(p))) {
  const tekst = await readFile(join("dist", f), "utf8");
  const lek = kenmerken.find((k) => tekst.includes(k));
  if (lek) throw new Error(`Bewonersinhoud in openbare uitvoer: ${f} bevat "${lek}"`);
}
if (!html.includes(NIEUWSBERICHTEN[0].titel)) throw new Error("Bewonersgedeelte mist de nieuwsberichten");

console.log("Openbare uitvoer in dist/. Bewonersgedeelte in private/portaal.html (alleen via de server).");
