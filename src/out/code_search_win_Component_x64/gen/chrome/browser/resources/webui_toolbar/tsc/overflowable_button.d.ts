import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { MenuSourceType } from '//resources/mojo/ui/base/mojom/menu_source_type.mojom-webui.js';
import type { ContextMenuType } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
import type { ResponsiveControl } from './responsive_control.js';
/**
 * Common fields of the state object that the OverflowableButtonMixin makes use
 * of, if available.
 */
export interface OverflowableButtonState {
    /**
     * True if the button is pinned / should be shown if there's space for it, and
     * on the overflow menu if not. Only needed if button may be hidden, so
     * undefined is treated as true. Classes are responsible for hiding themselves
     * if false.
     */
    shouldBeShown?: boolean;
    /**
     * When present and true, the button will not be hidden due to overflow,
     * though if `shouldBeShown` is false, it's assumed to take priority.
     */
    isContextMenuVisible?: boolean;
    /**
     * When present and true, the button will never be hidden due to overflow.
     * If `shouldBeShown` is false, should be undefined or null.
     *
     * Distinct from `isContextMenuVisible`, as that also drives accessibility
     * state, though it is used when showing bubbles, under similar circumstances.
     */
    preventOverflow?: boolean | null;
    /**
     * Ignored if `isContextMenuVisible` is not present. If this field is present,
     * invoking OverflowableButtonMixin.showContextMenuAndPreventOverflow() will
     * cause the class to keep `state.isContextMenuVisible` set to true until the
     * browser process has echoed back the `menuOpenToken` value the
     * OverflowableButtonMixin most recently sent to the browser when its
     * showContextMenuAndPreventOverflow() method was invoked. The
     * OverflowableButtonMixin is expected to be the sole class to manage
     * `menuOpenToken` for a button that uses it.
     */
    menuOpenToken?: number;
}
type Constructor<T> = new (...args: any[]) => T;
export interface OverflowableButton extends ResponsiveControl {
    /**
     * The OverflowableButtonState. Every field in it is optional, so using
     * OverflowableButtonState directly throws an error here.
     */
    state: unknown;
    /**
     * Called by subclasses when should show a left-click menu or bubble. Invokes
     * showContextMenu() on the BrowserProxy, but also adds a `menuOpenToken`, and
     * keeps the OverflowableButton visible until it has been echoed back in an
     * update of `state`.
     */
    showContextMenuAndPreventOverflow(menuType: ContextMenuType, sourceType: MenuSourceType): void;
}
/**
 * A mixin for buttons and controls that, when they do not fit on the toolbar,
 * should have the "overflow-display-none" class added, and should be added to
 * the overflow menu.
 *
 * Implements all methods of ResponsiveControl, so classes using the mixin only
 * need to provide a `state` field and call showContextMenuAndPreventOverflow()
 * when appropriate. See `OverflowableButtonState` above for more details.
 * Subclasses also need to bubble up a `request-layout` event to the app-toolbar
 * if their preferred or minimum size changes, except when `state.shouldBeShown`
 * changes, indicating they've been removed or added to the toolbar.
 *
 * This class is primarily designed to be used in combination with
 * cr-icon-buttons. It expects the CrLitElement to be the ancestor of an
 * element with the id "button". It's that element whose disabled state is
 * checked to determine if the button should be enabled on the overflow menu.
 */
export declare const OverflowableButtonMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<OverflowableButton>;
export {};
