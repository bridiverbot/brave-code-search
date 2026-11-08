import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverflowableToolbarActionElement } from './overflowable_toolbar_action_mixin.js';
import type { ResponsiveControl } from './responsive_control.js';
type Constructor<T> = new (...args: any[]) => T;
export interface OverflowableToolbarActionContainer extends ResponsiveControl {
    /**
     * Returns an array containing all current actions within the container. They
     * should be listed from left to right. Actions to the right are given higher
     * priority. When trying to fit actions on the toolbar, if one action won't
     * fit, all lower priority actions within a single
     * OverflowableToolbarActionContainer will also be hidden, though lower
     * priority elements from other ResponsiveControls may still be shown, if they
     * fit.
     *
     * Dividers never contribute menu items to the overflow menu, as it has its
     * own logic to determine divider placement. Dividers split actions into
     * groups, with each divider belonging to the group of actions to its left.
     * A divider is shown whenever any action in its group is shown, and hidden
     * otherwise. The leftmost element may not be a divider, and dividers may not
     * be adjacent to each other, so every divider has at least one action in its
     * group.
     *
     * The return value is cached, and updated() is expected to be invoked
     * whenever the return value changes. During updated() calls, the mixin
     * compares the cached value to the new value, and if the number of actions
     * changes, or any action in the old list is not === to the action in the
     * same position in the new list, a new layout of all responsive controls is
     * queued. This assumes that an element is never converted from a
     * divider to a button, or vice versa, and button elements may have their
     * icons changed, but never have their size changed.
     */
    getActions(): OverflowableToolbarActionElement[];
}
/**
 * A mixin for responsive controls that manage multiple child actions
 * and optional dividers. Each child action will be hidden if it doesn't fit.
 * Actions that don't fit will be added to the overflow menu, if needed.
 * Consumers only need to implement getActions(). All non-divider actions must
 * be of equal size.
 *
 * Does not hide the top-level element when all sub-elements are overflowed.
 * That's currently not needed for any subtype, though could be added, if
 * needed.
 */
export declare const OverflowableToolbarActionContainerMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<OverflowableToolbarActionContainer>;
export {};
