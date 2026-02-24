import { GlobalWindow } from "happy-dom";
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

function ensureGlobals(window: GlobalWindow): void {
  if (globalsRegistered) return;
  for (const key of Object.getOwnPropertyNames(window)) {
    if (!(key in globalThis)) {
      try {
        (globalThis as any)[key] = (window as any)[key];
      } catch {}
    }
  }
  globalsRegistered = true;
}

export function audit(html: string, options: AuditOptions = {}): AuditResult {
  const config: ConfigureOptions = {};
  if (options.includeAAA) config.includeAAA = true;
  if (options.componentMode) config.componentMode = true;
  if (options.disabledRules?.length) config.disabledRules = options.disabledRules;
  configureRules(config);

  const window = new GlobalWindow();
  ensureGlobals(window);

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const result = runAudit(doc as unknown as Document);

  // Strip non-serializable element references
  result.violations = result.violations.map(({ element, ...rest }) => rest);

  window.close();
  return result;
}
