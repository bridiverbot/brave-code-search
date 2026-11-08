import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const ContextUploadStatusSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContextUploadStatus {
    MIN_VALUE = 0,
    MAX_VALUE = 8,
    kNotUploaded = 0,
    kProcessing = 1,
    kValidationFailed = 2,
    kUploadStarted = 3,
    kUploadSuccessful = 4,
    kUploadFailed = 5,
    kUploadExpired = 6,
    kProcessingSuggestSignalsReady = 7,
    kUploadReplaced = 8
}
export declare const ContextUploadErrorTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ContextUploadErrorType {
    MIN_VALUE = 0,
    MAX_VALUE = 13,
    kUnknown = 0,
    kBrowserProcessingError = 1,
    kNetworkError = 2,
    kServerError = 3,
    kServerSizeLimitExceeded = 4,
    kAborted = 5,
    kImageProcessingError = 6,
    kBrowserProcessingFileTooLargeError = 7,
    kBrowserProcessingFileEmptyError = 8,
    kBrowserProcessingMaxFilesExceededError = 9,
    kBrowserProcessingUnsupportedFileTypeError = 10,
    kBrowserProcessingFileUploadNotAllowedError = 11,
    kBrowserProcessingMaxImagesExceededError = 12,
    kBrowserProcessingMaxPdfsExceededError = 13
}
export declare const ModelModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ModelMode {
    MIN_VALUE = 0,
    MAX_VALUE = 7,
    kUnspecified = 0,
    kGeminiRegular = 1,
    kGeminiPro = 2,
    kGeminiProAutoroute = 3,
    kGeminiProNoGenUi = 4,
    kGeminiFlashLatest = 5,
    kGeminiProLatest = 6,
    kGeminiPreview = 7
}
export declare const ToolModeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum ToolMode {
    MIN_VALUE = 0,
    MAX_VALUE = 12,
    kUnspecified = 0,
    kDeepSearch = 1,
    kCanvas = 2,
    kGeminiPro = 3,
    kImageGen = 4,
    kDeepBrowse = 5,
    kImageGenSelfie = 6,
    kImageGenUpload = 7,
    kDisableSuggest = 8,
    kAim = 9,
    kAimGenPrompt = 10,
    kAgentTask = 11,
    kSearchMore = 12
}
export declare const InputTypeSpec: {
    $: mojo.internal.MojomType;
};
export declare enum InputType {
    MIN_VALUE = 0,
    MAX_VALUE = 4,
    kUnspecified = 0,
    kLensImage = 1,
    kLensFile = 2,
    kBrowserTab = 3,
    kDrive = 4
}
export declare const AimUrlParamSpec: {
    $: mojo.internal.MojomType;
};
export declare const InputTypeConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const ToolConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const ModelConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const SectionConfigSpec: {
    $: mojo.internal.MojomType;
};
export declare const InputStateSpec: {
    $: mojo.internal.MojomType;
};
export declare interface AimUrlParamMojoType {
    paramKey: string;
    paramValue: string;
}
export type AimUrlParam = AimUrlParamMojoType;
export declare interface InputTypeConfigMojoType {
    inputType: InputType;
    menuLabel: string;
}
export type InputTypeConfig = InputTypeConfigMojoType;
export declare interface ToolConfigMojoType {
    tool: ToolMode;
    disableActiveModelSelection: boolean;
    menuLabel: string;
    chipLabel: string;
    hintText: string;
    aimUrlParams: AimUrlParam[];
    menuTooltip: string;
    icon: number;
}
export type ToolConfig = ToolConfigMojoType;
export declare interface ModelConfigMojoType {
    model: ModelMode;
    icon: number;
    menuLabel: string;
    hintText: string;
    aimUrlParams: AimUrlParam[];
    menuTooltip: string;
}
export type ModelConfig = ModelConfigMojoType;
export declare interface SectionConfigMojoType {
    header: string;
}
export type SectionConfig = SectionConfigMojoType;
export declare interface InputStateMojoType {
    allowedModels: ModelMode[];
    allowedTools: ToolMode[];
    allowedInputTypes: InputType[];
    activeModel: ModelMode;
    activeTool: ToolMode;
    disabledModels: ModelMode[];
    disabledTools: ToolMode[];
    disabledInputTypes: InputType[];
    toolConfigs: ToolConfig[];
    modelConfigs: ModelConfig[];
    inputTypeConfigs: InputTypeConfig[];
    toolsSectionConfig: (SectionConfig | null);
    modelSectionConfig: (SectionConfig | null);
    hintText: string;
    maxInputsByType: {
        [key in InputType]?: number;
    };
    maxTotalInputs: number;
    isCanvasQuerySubmitted: boolean;
    willFulfillInAim: boolean;
}
export type InputState = InputStateMojoType;
