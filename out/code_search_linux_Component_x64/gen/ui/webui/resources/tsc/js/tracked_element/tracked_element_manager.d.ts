/**
 * @fileoverview
 * Allows a WebUI page to report the visibility and bounds of HTML elements to
 * the browser process. This is the frontend counterpart to
 * ui::TrackedElementWebUI.
 *
 * The primary use case is to anchor secondary UIs (e.g. App Menu) to a HTML
 * element in WebUI.
 * TODO(crbug.com/40243115): Use TrackedElementManager in Help Bubbles.
 *
 * ## Change Detection
 *
 * This manager detects element position/visibility changes through:
 * - ResizeObserver: Detects size changes of tracked elements and viewport
 *   resizes (document.body). Note: Does NOT detect pure position changes.
 * - IntersectionObserver: Detects viewport intersection for fixed elements
 * - MutationObserver: Used to detect when tracked elements are moved in the
 *   DOM, or when their 'style' or 'class' attributes change (position changes)
 * - Scroll events: Detects document scrolling (position changes)
 *
 * ### Known Limitations
 *
 * The following changes will NOT be detected:
 * - Style/class attribute changes on parent or ancestor elements
 * - Parent/ancestor elements being moved in the DOM
 * - Direct CSS rule modifications via CSSOM (e.g., modifying
 *   document.styleSheets or adding/removing <style> elements)
 * - Position changes caused by other elements being added/removed nearby
 *
 * Note: Viewport resizes and media query changes triggered by resizing
 * are detected via the document.body ResizeObserver.
 *
 * ## Usage
 *
 * In C++, declare your ui::ElementIdentifier. Make sure it is registered as a
 * known identifier.
 *
 * ```C++
 * DECLARE_ELEMENT_IDENTIFIER_VALUE(kMyElementIdentifier);
 * // TODO(crbug.com/40243115): explain how to register as a known identifier.
 * ```
 *
 * In your WebUI component:
 *
 * 1.  Get the singleton instance of `TrackedElementManager` in your component
 *     class.
 *
 *     ```ts
 *     // in your component class:
 *     private trackedElementManager: TrackedElementManager;
 *
 *     constructor() {
 *       super();
 *       this.trackedElementManager = TrackedElementManager.getInstance();
 *       // ...
 *     }
 *     ```
 *
 * 2.  Call `startTracking()` to begin tracking an element. You probably want
 *     to do this in `connectedCallback()`.
 *
 *     ```ts
 *     override connectedCallback() {
 *       super.connectedCallback();
 *     this.trackedElementManager_.startTracking(
 *         this.$.myElement,
 *         'kMyElementIdentifier',
 *         {...options});
 *     ```
 *
 *     The first parameter is the HTMLElement to track. The second is the
 *     string identifier name that C++ uses. The third is an optional
 *     options object. See `Options` in this file.
 *
 * 3.  Call `stopTracking()` to stop tracking an element.
 *
 *     ```ts
 *     this.trackedElementManager_.stopTracking(this.$.myElement);
 *     ```
 *
 * 4.  To report that the user has activated an element (e.g. by clicking on
 *     it), call `notifyElementActivated()`.
 *
 *     ```ts
 *     this.trackedElementManager_.notifyElementActivated(this.$.myElement);
 *     ```
 *
 * 5.  To report a custom event, call `notifyCustomEvent()`.
 *
 *     ```ts
 *     this.trackedElementManager_.notifyCustomEvent(
 *         this.$.myElement,
 *         'my-custom-event-name');
 *     ```
 */
import type { RectF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import type { TrackedElementIdentifier } from '//resources/mojo/ui/webui/resources/js/tracked_element/tracked_element.mojom-webui.js';
/**
 * Event type triggered when a tracked element's visibility changes.
 */
export declare const TRACKED_ELEMENT_VISIBILITY_CHANGED_EVENT = "tracked-element-visibility-changed";
/**
 * Provides the current state of a tracked element.
 */
export interface TrackedElement {
    element: HTMLElement;
    visible: boolean;
    bounds: RectF;
}
/**
 * Event type when an element's visibility changes; used when observing all
 * elements with a particular native ID.
 */
export type TrackedElementVisibilityChangedEvent = CustomEvent<TrackedElement>;
/**
 * Callback when observing visibility changes on a specific element.
 */
export type TrackedElementVisibilityChangedCallback = (update: TrackedElement) => void;
/**
 * Callback when an element's highlight state changes.
 */
export type HighlightChangedCallback = (highlighted: boolean, element: HTMLElement) => void;
/**
 * Options for `TrackedElementManager.startTracking()`.
 */
export interface Options {
    /**
     * If set, explicitly specifies a secondary ID for the element.
     */
    secondaryId?: string;
    /**
     * Padding added to the element bounds.
     * These values are clamped in the range [0, 20].
     */
    paddingTop?: number;
    paddingLeft?: number;
    paddingBottom?: number;
    paddingRight?: number;
    /**
     * Set this to true if the element is fixed positioned.
     * By default, this class detects tracked elements when they are rendered
     * within the document. This breaks with fix-positioned elements since they
     * are not in the regular flow of the document but they are always visible.
     */
    fixed?: boolean;
    /**
     * If this is set, this element will be marked as supporting anchor
     * highlighting, and the method will be invoked when the highlight state
     * (initially false) changes.
     */
    onHighlightChanged?: (highlighted: boolean) => void;
}
declare global {
    interface Window {
        _trackedElementManager: TrackedElementManager | undefined;
    }
}
export declare class TrackedElementManager {
    static getInstance(): TrackedElementManager;
    static setInstance(instance: TrackedElementManager | undefined): void;
    private trackedElementHandler_;
    private trackedElements_;
    private fixedElementObserver_;
    private resizeObserver_;
    private attributeMutationObserver_;
    private documentMutationObserver_;
    private debouncedUpdateAllBoundsCallback_;
    private constructor();
    static getElementId(element: HTMLElement): TrackedElementIdentifier | undefined;
    private getDataForElement_;
    private getDataForId_;
    getElementFor(element: HTMLElement): TrackedElement | undefined;
    getElementWithId(id: TrackedElementIdentifier, visibleOnly?: boolean): TrackedElement | undefined;
    getAllElementsWithNativeId(nativeIdentifier: string, visibleOnly?: boolean): TrackedElement[];
    private static idToString_;
    reset(): void;
    /**
     * Starts tracking an element.
     * A visibility update event will be sent immediately.
     *
     * @param element The element to track.
     * @param nativeId The ElementIdentifier name that C++ uses.
     * @param options Optional options. See `Options` in this file.
     * @param onVisibilityChanged Optional callback for visibility changes for
     *     `element`.
     *
     * Note that `onVisibilityChanged` will only receive updates for `element` and
     * an initial visibility callback will be sent. Contrast this with adding a
     * listener to the result of calling `getVisibilityEventTarget(nativeId)`,
     * which will receive all future events for elements with `nativeId` (and only
     * future events).
     */
    startTracking(element: HTMLElement, nativeId: string, options?: Options, onVisibilityChanged?: TrackedElementVisibilityChangedCallback): void;
    /**
     * Gets the event target for visibility for a native id. Listeners will only
     * receive events of type `TrackedElementVisibilityChangedEvent`.
     *
     * @param nativeId the native id.
     *
     * @returns the event target
     */
    getVisibilityEventTarget(nativeId: string): EventTarget;
    /**
     * Stops tracking an element.
     * A visibility event with `visible: false` will be sent immediately.
     *
     * @param element The element to stop tracking.
     */
    stopTracking(element: HTMLElement): void;
    notifyElementActivated(element: HTMLElement): void;
    notifyCustomEvent(element: HTMLElement, customEventName: string): void;
    private onElementVisibilityChanged_;
    private updateAllBounds_;
    private getElementBounds_;
    private onElementHighlightChanged_;
    private waitUntilNotDisabled_;
    private findInteractiveElement_;
    private clickElement_;
    private focusElement_;
    private selectTab_;
    private selectDropdownItem_;
    private static elementToIdentifier_;
    private enterText_;
    private enterTextIntoInput_;
    private confirm_;
}
