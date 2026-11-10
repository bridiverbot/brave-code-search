import { RenderType, SideType } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { TimeTicks } from '//resources/mojo/mojo/public/mojom/base/time.mojom-webui.js';
/**
 * Converts a time ticks in milliseconds to TimeTicks.
 * @param timeTicks time ticks in milliseconds
 */
export declare function mojoTimeTicks(timeTicks: number): TimeTicks;
/** Returns promise that resolves when lazy rendering should be started. */
export declare function waitForLazyRender(): Promise<void>;
/** Converts a side type to a string to be used in CSS. */
export declare function sideTypeToClass(sideType: SideType): string;
/** Converts a render type to a string to be used in CSS. */
export declare function renderTypeToClass(renderType: RenderType): string;
/**
 * Records a performance mark using the Web Performance API if it has not
 * already been recorded for the current document. Returns true if the mark was
 * freshly recorded, false if it was previously recorded.
 */
export declare function markOnce(name: string): boolean;
/**
 * Schedules a callback to execute after the browser has completed the style,
 * layout, and paint of the upcoming frame.
 *
 * This serves as an approximation for a post-paint lifecycle callback (there is
 * currently no native `requestPostAnimationFrame` callback in the web
 * platform). `requestAnimationFrame` runs before the next repaint; chaining
 * `setTimeout(0)` ensures the callback executes in the macrotask immediately
 * following the frame's rendering update.
 */
export declare function afterNextPaint(callback: () => void): void;
export declare function stripJavascriptSchemas(text: string): string;
export declare function sanitizeTextForPaste(text: string): string;
export interface AriaNotificationOptions {
    priority: 'normal' | 'high';
}
declare global {
    interface HTMLElement {
        ariaNotify?(message: string, options: AriaNotificationOptions): void;
    }
    interface Document {
        ariaNotify?(message: string, options: AriaNotificationOptions): void;
    }
}
/**
 * Announces a message to screen readers in `element`'s document, using
 * ariaNotify if available, or falling back to cr-a11y-announcer.
 *
 * The notification is posted on the document rather than on `element`.
 * ariaNotify() is silently dropped while its target has no accessibility
 * object, and Blink discards the accessibility objects of every descendant of
 * an element whose pseudo-element gets restyled, recreating them only with the
 * next accessibility tree update. Elements with pseudo-elements, such as the
 * omnibox popup's shadow layer, routinely get restyled in the same task as the
 * announcement, so a notification posted on a descendant would be lost. The
 * document's accessibility object is never discarded.
 */
export declare function announce(element: HTMLElement, message: string): void;
