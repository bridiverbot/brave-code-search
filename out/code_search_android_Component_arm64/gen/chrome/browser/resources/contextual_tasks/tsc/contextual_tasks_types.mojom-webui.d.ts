import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const TabSelectionModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum TabSelectionMode {
    MIN_VALUE = 0,
    MAX_VALUE = 3,
    kEmbeddingsMatch = 0,
    kMultiSignalScoring = 1,
    kStaticSignalsOnly = 2,
    kStaticSignalsMlModel = 3
}
