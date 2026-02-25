// src/inline-css.ts
import { JSDOM } from "jsdom";
async function fetchCSS(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Warning: failed to fetch stylesheet ${url}: ${res.status}`);
      return null;
    }
    return res.text();
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn(`Warning: failed to fetch stylesheet ${url}: ${msg}`);
    return null;
  }
}
async function resolveImports(css, baseURL) {
  const importPattern = /@import\s+(?:url\(\s*['"]?([^'")\s]+)['"]?\s*\)|['"]([^'"]+)['""])\s*([^;]*);/g;
  const replacements = [];
  for (const m of css.matchAll(importPattern)) {
    const importURL = m[1] || m[2];
    if (!importURL)
      continue;
    let resolved;
    try {
      resolved = new URL(importURL, baseURL).href;
    } catch {
      continue;
    }
    const imported = await fetchCSS(resolved);
    if (imported !== null) {
      const mediaQuery = m[3]?.trim();
      const wrapped = mediaQuery ? `@media ${mediaQuery} {
${imported}
}` : imported;
      replacements.push({ match: m[0], replacement: wrapped });
    }
  }
  let result = css;
  for (const { match, replacement } of replacements) {
    result = result.replace(match, replacement);
  }
  return result;
}
async function inlineCSS(html, baseURL) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const links = doc.querySelectorAll('link[rel="stylesheet"][href]');
  if (links.length === 0) {
    dom.window.close();
    return html;
  }
  const tasks = Array.from(links).map(async (link) => {
    const href = link.getAttribute("href");
    if (href.startsWith("data:"))
      return;
    let resolved;
    try {
      resolved = new URL(href, baseURL).href;
    } catch {
      return;
    }
    const css = await fetchCSS(resolved);
    if (css === null)
      return;
    const inlined = await resolveImports(css, resolved);
    const style = doc.createElement("style");
    style.textContent = inlined;
    const media = link.getAttribute("media");
    if (media)
      style.setAttribute("media", media);
    link.replaceWith(style);
  });
  await Promise.all(tasks);
  const result = dom.serialize();
  dom.window.close();
  return result;
}
export {
  inlineCSS
};
