import { NotificationType } from './voice_language_conversions.js';
import type { VoiceClientSideStatusCode } from './voice_language_conversions.js';
export interface VoiceNotificationListener {
    notify(type: NotificationType, language?: string): void;
}
export declare class VoiceNotificationManager {
    private listeners_;
    private downloadingLanguages_;
    addListener(listener: VoiceNotificationListener): void;
    removeListener(listener: VoiceNotificationListener): void;
    clear(): void;
    onVoiceStatusChange(language: string, status: VoiceClientSideStatusCode, availableVoices: SpeechSynthesisVoice[], onLine?: boolean): void;
    onCancelDownload(language: string): void;
    onNoEngineConnection(): void;
    static getInstance(): VoiceNotificationManager;
    static setInstance(obj: VoiceNotificationManager): void;
}
