import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
type Constructor<T> = new (...args: any[]) => T;
export interface OverflowableToolbarActionMixinInterface {
    /**
     * Whether the action should never be hidden due to overflow. Ignored for
     * dividers, whose visibility is determined by the container. See
     * OverflowableToolbarActionContainer.getActions() for details.
     */
    preventOverflow: boolean;
    /**
     * Whether or not the element is a divider. This is not a reactive property,
     * and is expected to never change after construction. Divider subclasses
     * should override it with a class field initialized to true.
     */
    isDivider: boolean;
    /**
     * Returns the OverflowMenuItem corresponding to the action to display on the
     * overflow menu when overflowed, or null if the action should just be hidden
     * when overflowed, without being added to the overflow menu. Will not be
     * invoked for dividers, which are assumed not to ever appear on the overflow
     * menu, even if hidden due to overflow.
     */
    getOverflowMenuItem(): OverflowMenuItem | null;
}
export type OverflowableToolbarActionElement = CrLitElement & OverflowableToolbarActionMixinInterface;
/**
 * A mixin for actions contained within an OverflowableToolbarActionContainer.
 * Actions are hidden if they cannot be entirely fit on the toolbar.
 *
 * Each action must either be a divider or a button. Button actions must
 * override getOverflowMenuItem(), and may return a non-null value if they
 * should be added to the overflow menu when overflowed.
 *
 * Requests a new layout whenever `preventOverflow` changes, as that can
 * affect which controls should be overflowed.
 */
export declare const OverflowableToolbarActionMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<OverflowableToolbarActionMixinInterface>;
export {};
