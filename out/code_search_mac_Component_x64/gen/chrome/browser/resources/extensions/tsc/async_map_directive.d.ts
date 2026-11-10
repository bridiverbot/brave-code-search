import type { TemplateResult } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export interface AsyncMapDirectiveFn {
    <T>(items: T[], template: (item: T) => TemplateResult, initialCount: number): unknown;
}
export declare const asyncMap: AsyncMapDirectiveFn;
