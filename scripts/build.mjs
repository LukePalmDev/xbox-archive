import * as esbuild from "esbuild";
import { mkdirSync, readFileSync, rmSync, cpSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outfile = resolve(root, "tweaks.js");

const jsxOptions = {
  loader: "jsx",
  jsx: "transform",
  target: "es2018",
  charset: "utf8",
};

const panel = await esbuild.transform(
  readFileSync(resolve(root, "tweaks-panel.jsx"), "utf8"),
  jsxOptions
);
const tweaks = await esbuild.transform(
  readFileSync(resolve(root, "tweaks.jsx"), "utf8"),
  jsxOptions
);

// One scope so the panel's function declarations are visible to tweaks.jsx,
// with production React bundled in (no CDN, no in-browser JSX compiler).
const source = `
  import * as React from "react";
  import * as ReactDOM from "react-dom/client";
  ${panel.code}
  ${tweaks.code}
`;

await esbuild.build({
  stdin: {
    contents: source,
    loader: "js",
    resolveDir: root,
    sourcefile: "tweaks-entry.js",
  },
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  target: ["es2018"],
  outfile,
  legalComments: "none",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  banner: {
    js: "/* Precompiled by scripts/build.mjs with production React. */",
  },
});

const bundled = readFileSync(outfile, "utf8");
const forbidden = [
  "babel.min.js",
  "react.development.js",
  "react-dom.development.js",
  "Download the React DevTools",
  "You are running React in development mode",
];
const found = forbidden.filter((needle) => bundled.includes(needle));
if (found.length) {
  throw new Error(`production bundle contains forbidden text: ${found.join(", ")}`);
}

const bytes = statSync(outfile).size;
if (bytes > 220_000) {
  throw new Error(`tweaks.js is ${bytes} bytes; expected the production React build`);
}

const site = resolve(root, "_site");
rmSync(site, { recursive: true, force: true });
mkdirSync(resolve(site, "images"), { recursive: true });
for (const file of [
  "index.html",
  "styles.css",
  "app.js",
  "data.js",
  "404.html",
  "CNAME",
  ".nojekyll",
  "tweaks.js",
  "tweaks.jsx",
  "tweaks-panel.jsx",
]) {
  cpSync(resolve(root, file), resolve(site, file));
}
cpSync(resolve(root, "images"), resolve(site, "images"), { recursive: true });

console.log(`built ${outfile} (${bytes} bytes) and ${site}`);
