// src/audit.ts
import { JSDOM, VirtualConsole } from "jsdom";
import {
  runAudit,
  configureRules
} from "@accesslint/core";
function isHTMLFragment(html) {
  const prefix = html.slice(0, 1000);
  return !(/<!doctype\s/i.test(prefix) || /<html[\s>]/i.test(prefix));
}
var globalsRegistered = false;
function ensureGlobals(window) {
  if (globalsRegistered)
    return;
  for (const key of Object.getOwnPropertyNames(window)) {
    if (key in globalThis)
      continue;
    const desc = Object.getOwnPropertyDescriptor(window, key);
    if (!desc || typeof desc.value !== "function")
      continue;
    try {
      globalThis[key] = desc.value;
    } catch {}
  }
  globalsRegistered = true;
}
function audit(html, options = {}) {
  const config = {};
  if (options.includeAAA)
    config.includeAAA = true;
  if (options.componentMode)
    config.componentMode = true;
  if (options.disabledRules?.length)
    config.disabledRules = options.disabledRules;
  configureRules(config);
  const virtualConsole = new VirtualConsole;
  const dom = new JSDOM(html, { pretendToBeVisual: true, virtualConsole });
  ensureGlobals(dom.window);
  const result = runAudit(dom.window.document);
  result.violations = result.violations.map(({ element: _el, ...rest }) => rest);
  dom.window.close();
  return result;
}
export {
  isHTMLFragment,
  audit
};
