import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const LifecycleUnitStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LifecycleUnitState {
    MIN_VALUE = 0,
    MAX_VALUE = 5,
    ACTIVE = 0,
    FROZEN = 3,
    DISCARDED = 5
}
export declare const LifecycleUnitLoadingStateSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LifecycleUnitLoadingState {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    UNLOADED = 0,
    LOADING = 1,
    LOADED = 2
}
export declare const LifecycleUnitDiscardReasonSpec: {
    $: mojo.internal.MojomType;
};
export declare enum LifecycleUnitDiscardReason {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    EXTERNAL = 0,
    URGENT = 1,
    PROACTIVE = 2,
    SUGGESTED = 3,
    FROZEN_WITH_GROWING_MEMORY = 4
}
