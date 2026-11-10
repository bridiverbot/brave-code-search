/**
 * @fileoverview Logic common to components that support a help bubble.
 *
 * A component implementing this mixin should call
 * registerHelpBubble() to associate specific element identifiers
 * referenced  in an IPH or Tutorials journey with the ids of the HTML elements
 * that journey cares about (typically, points for help bubbles to anchor to).
 *
 * Multiple components in the same WebUI may have this mixin. Each mixin will
 * receive ALL help bubble-related messages from its associated WebUIController
 * and determines if any given message is relevant. This is done by checking
 * against registered identifier.
 *
 * See README.md for more information.
 */
import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { HelpBubbleMixinInterface } from './help_bubble_mixin_interface.js';
type Constructor<T> = new (...args: any[]) => T;
/**
 * See HelpBubbleMixinInterface for documentation.
 */
export declare const HelpBubbleMixinLit: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<HelpBubbleMixinInterface>;
export {};
