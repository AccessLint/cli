import { JSDOM, VirtualConsole } from "jsdom";
import {
  runAudit,
  configureRules,
  type AuditResult,
  type ConfigureOptions,
} from "@accesslint/core";

export interface AuditOptions {
  includeAAA?: boolean;
  componentMode?: boolean;
  disabledRules?: string[];
}

let globalsRegistered = false;

function ensureGlobals(window: typeof globalThis): void {
  if (globalsRegistered) return;
  for (const key of Object.getOwnPropertyNames(window)) {
    if (key in globalThis) continue;
    const desc = Object.getOwnPropertyDescriptor(window, key);
    if (!desc || typeof desc.value !== "function") continue;
    try {
      (globalThis as any)[key] = desc.value;
    } catch {}
  }
  globalsRegistered = true;
}

export function audit(html: string, options: AuditOptions = {}): AuditResult {
  const config: ConfigureOptions = {};
  if (options.includeAAA) config.includeAAA = true;
  if (options.componentMode) config.componentMode = true;
  if (options.disabledRules?.length) config.disabledRules = options.disabledRules;
  configureRules(config);

  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM(html, { pretendToBeVisual: true, virtualConsole });
  ensureGlobals(dom.window as unknown as typeof globalThis);

  const result = runAudit(dom.window.document as unknown as Document);

  // Strip non-serializable element references
  result.violations = result.violations.map(({ element, ...rest }) => rest);

  dom.window.close();
  return result;
}
