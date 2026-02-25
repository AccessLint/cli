import { type AuditResult } from "@accesslint/core";
export interface AuditOptions {
    includeAAA?: boolean;
    componentMode?: boolean;
    disabledRules?: string[];
}
/**
 * Returns true if the HTML looks like a fragment/component rather than a full
 * document (i.e. it lacks a doctype or <html> tag).
 */
export declare function isHTMLFragment(html: string): boolean;
export declare function audit(html: string, options?: AuditOptions): AuditResult;
