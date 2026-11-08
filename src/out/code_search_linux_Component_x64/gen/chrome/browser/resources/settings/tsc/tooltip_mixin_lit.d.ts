/**
 * @fileoverview Provides common shared tooltip behavior used in various
 * settings pages for Lit components.
 */
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
type Constructor<T> = new (...args: any[]) => T;
export interface TooltipMixinLitInterface {
    showTooltipAtTarget(tooltip: CrTooltipElement, target: Element): void;
}
export declare const TooltipMixinLit: <T extends Constructor<HTMLElement>>(superClass: T) => T & Constructor<TooltipMixinLitInterface>;
export {};
