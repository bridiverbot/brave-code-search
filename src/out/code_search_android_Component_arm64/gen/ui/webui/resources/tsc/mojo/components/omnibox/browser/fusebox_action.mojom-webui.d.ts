import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { ModelMode as composeboxQuery_mojom_ModelMode, ToolMode as composeboxQuery_mojom_ToolMode } from '../composebox/composebox_query.mojom-webui.js';
export declare const SuggestInventorySpec: {
    $: mojo.internal.MojomType;
};
export declare enum SuggestInventory {
    MIN_VALUE = 0,
    MAX_VALUE = 15,
    kDefault = 0,
    kTravel = 1,
    kAimTakeover = 2,
    kImageGenTakeover = 3,
    kConversationStarters = 4,
    kAiHpCreateChip = 5,
    kAiHpGetItDoneChip = 6,
    kAiHpSimplifyChip = 7,
    kAiHpIfl = 8,
    kAiHpReservations = 9,
    kBrainstorm = 10,
    kHelpMeLearn = 11,
    kWriteOrEdit = 12,
    kAddFile = 13,
    kAddTab = 14,
    kAimImages = 15
}
export declare const QueryActionOverrideSpec: {
    $: mojo.internal.MojomType;
};
export declare enum QueryActionOverride {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kDefault = 0,
    kPaste = 1,
    kHint = 2
}
export declare const InputSourceSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InputSource {
    MIN_VALUE = 0,
    MAX_VALUE = 6,
    kInputSourceUnspecified = 0,
    kInputSourceGallery = 1,
    kInputSourceCamera = 2,
    kInputSourceFilePicker = 3,
    kInputSourceDrive = 4,
    kInputSourceTabPicker = 5,
    kInputSourceVoice = 6
}
export declare const SearchboxOverrideSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SearchboxOverride {
    MIN_VALUE = 0,
    MAX_VALUE = 2,
    kUnspecified = 0,
    kRealbox = 1,
    kComposebox = 2
}
export declare const SearchboxTutorialSpec: {
    $: mojo.internal.MojomType;
};
export declare enum SearchboxTutorial {
    MIN_VALUE = 0,
    MAX_VALUE = 1,
    kUnspecified = 0,
    kGlowPlusButton = 1
}
export declare const FuseboxActionSpec: {
    $: mojo.internal.MojomType;
};
export declare interface FuseboxActionMojoType {
    preselectedTool: (composeboxQuery_mojom_ToolMode | null);
    preferredInventory: (SuggestInventory | null);
    preselectedModel: (composeboxQuery_mojom_ModelMode | null);
    queryActionOverride: (QueryActionOverride | null);
    preselectedInputSource: (InputSource | null);
    searchboxOverride: (SearchboxOverride | null);
    searchboxTutorial: (SearchboxTutorial | null);
}
export type FuseboxAction = FuseboxActionMojoType;
