import * as mojom from '../settings_helper.mojom-webui.js';
import * as mojomCustomizationSettings from '../customization_settings.mojom-webui.js';
import { OllamaService } from '../ollama.mojom-webui.js';
export * from '../ai_chat.mojom-webui.js';
export * from '../common.mojom-webui.js';
export * from '../settings_helper.mojom-webui.js';
export * from '../customization_settings.mojom-webui.js';
export { OLLAMA_ENDPOINT } from '../ollama.mojom-webui.js';
export interface BraveLeoAssistantBrowserProxy {
    resetLeoData(): void;
    getLeoIconVisibility(): Promise<boolean>;
    toggleLeoIcon(): void;
    getSettingsHelper(): mojom.AIChatSettingsHelperRemote;
    getCallbackRouter(): mojom.SettingsPageCallbackRouter;
    getCustomizationSettingsHandler(): mojomCustomizationSettings.CustomizationSettingsHandlerRemote;
    getCustomizationSettingsCallbackRouter(): mojomCustomizationSettings.CustomizationSettingsUICallbackRouter;
    checkOllamaConnection(): Promise<{
        connected: boolean;
    }>;
}
export declare class BraveLeoAssistantBrowserProxyImpl implements BraveLeoAssistantBrowserProxy {
    settingsHelper: mojom.AIChatSettingsHelperRemote;
    callbackRouter: mojom.SettingsPageCallbackRouter;
    customizationSettingsHandler: mojomCustomizationSettings.CustomizationSettingsHandlerRemote;
    customizationSettingsCallbackRouter: mojomCustomizationSettings.CustomizationSettingsUICallbackRouter;
    ollamaService: ReturnType<typeof OllamaService.getRemote>;
    private constructor();
    static getInstance(): BraveLeoAssistantBrowserProxyImpl;
    getLeoIconVisibility(): Promise<boolean>;
    toggleLeoIcon(): void;
    resetLeoData(): void;
    getSettingsHelper(): mojom.AIChatSettingsHelperRemote;
    getCallbackRouter(): mojom.SettingsPageCallbackRouter;
    getCustomizationSettingsHandler(): mojomCustomizationSettings.CustomizationSettingsHandlerRemote;
    getCustomizationSettingsCallbackRouter(): mojomCustomizationSettings.CustomizationSettingsUICallbackRouter;
    checkOllamaConnection(): Promise<{
        connected: boolean;
    }>;
}
