/**
 * @fileoverview Provides common shared tooltip behavior used in various
 * settings pages.
 */
import type { CrTooltipElement } from 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
export interface TooltipMixinInterface {
    showTooltipAtTarget(tooltip: CrTooltipElement, target: Element): void;
}
export declare const TooltipMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<TooltipMixinInterface>;
export {};
