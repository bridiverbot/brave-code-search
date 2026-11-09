/**
 * Make all transitions and animations take 0ms. NOTE: this will completely
 * disable webkitTransitionEnd events. If your code relies on them firing, it
 * will break. animationend events should still work.
 */
export declare function disableAnimationsAndTransitions(): void;
