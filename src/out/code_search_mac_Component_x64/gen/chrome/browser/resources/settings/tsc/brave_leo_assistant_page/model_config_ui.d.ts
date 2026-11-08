import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import * as mojom from './brave_leo_assistant_browser_proxy.js';
type LeoInputEvent = {
    value: string;
    valueAsNumber?: number;
};
type LeoToggleEvent = {
    checked: boolean;
};
declare const ModelConfigUIBase: typeof PolymerElement & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface) & (new (...args: any[]) => import("chrome://resources/cr_elements/i18n_mixin.js").I18nMixinInterface);
export declare class ModelConfigUI extends ModelConfigUIBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        label: {
            type: StringConstructor;
        };
        modelRequestName: {
            type: StringConstructor;
        };
        contextSize: {
            type: NumberConstructor;
        };
        modelSystemPrompt: {
            type: StringConstructor;
            value: string;
        };
        promptTokensEstimate: {
            type: NumberConstructor;
            value: number;
        };
        promptTokensEstimateString: {
            type: StringConstructor;
            value: string;
        };
        endpointUrl: {
            type: StringConstructor;
            value: string;
        };
        apiKey: {
            type: StringConstructor;
            value: string;
        };
        isUrlInvalid: {
            type: BooleanConstructor;
            value: boolean;
        };
        shouldShowUnsafeEndpointModal: {
            type: BooleanConstructor;
            value: boolean;
        };
        shouldShowUnsafeEndpointLabel: {
            type: BooleanConstructor;
            value: boolean;
        };
        invalidUrlErrorMessage: {
            type: StringConstructor;
            value: string;
        };
        modelItem: {
            type: ObjectConstructor;
            value: null;
            notify: boolean;
            observer: string;
        };
        isEditing_: {
            type: BooleanConstructor;
            value: boolean;
            readOnly: boolean;
            computed: string;
        };
        buttonLabel_: {
            type: StringConstructor;
            computed: string;
        };
        hasVisionSupport: {
            type: BooleanConstructor;
        };
        supportsTools: {
            type: BooleanConstructor;
        };
    };
    label: string;
    modelRequestName: string;
    contextSize: number;
    modelSystemPrompt: string | null;
    promptTokensEstimate: number;
    promptTokensEstimateString: string;
    endpointUrl: string;
    apiKey: string;
    modelItem: mojom.Model | null;
    isEditing_: boolean;
    buttonLabel_: string;
    isUrlInvalid: boolean;
    shouldShowUnsafeEndpointLabel: boolean;
    isValidAsPrivateEndpoint: boolean;
    shouldShowUnsafeEndpointModal: boolean;
    invalidUrlErrorMessage: string;
    hasVisionSupport: boolean;
    supportsTools: boolean;
    ready(): void;
    handleClick_(): void;
    handleCloseClick_(): void;
    onModelLabelChange_(e: LeoInputEvent): void;
    onModelRequestNameChange_(e: LeoInputEvent): void;
    onModelSystemPromptChange_(e: LeoInputEvent): void;
    onContextSizeChange_(e: LeoInputEvent): void;
    onModelServerEndpointChange_(e: LeoInputEvent): void;
    onModelApiKeyChange_(e: LeoInputEvent): void;
    constructTokenEstimateString_(e?: LeoInputEvent): void;
    onVisionSupportChanged_(e: LeoToggleEvent): void;
    onSupportsToolsChanged_(e: LeoToggleEvent): void;
    private saveEnabled_;
    private checkEndpointValidity_;
    private onModelItemChange_;
    private computeIsEditing_;
    private computeButtonLabel_;
}
export {};
