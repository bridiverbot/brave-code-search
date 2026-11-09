import type { AudioBrowserProxy } from './audio_browser_proxy.js';
import { NotificationType } from './voice_language_conversions.js';
import type { VoiceNatureNaming } from './voice_nature_naming.js';
export interface VoiceDisplayNaming {
    title: string;
    natureNaming: VoiceNatureNaming | null;
}
export interface VoiceDropdownItem extends VoiceDisplayNaming {
    voice: SpeechSynthesisVoice;
    selected: boolean;
    previewInitiated: boolean;
    previewActuallyPlaying: boolean;
    id: string;
}
export interface VoiceDropdownGroup {
    language: string;
    voices: VoiceDropdownItem[];
}
export interface BuildVoiceDropdownGroupsParams {
    availableVoices?: SpeechSynthesisVoice[];
    enabledLangs?: string[];
    selectedVoice?: SpeechSynthesisVoice | null;
    previewVoicePlaying?: SpeechSynthesisVoice | null;
    previewVoiceInitiated?: SpeechSynthesisVoice | null;
    localeToDisplayName?: {
        [lang: string]: string;
    };
}
export interface BuildVoiceDropdownGroupsResult {
    groups: VoiceDropdownGroup[];
    hasSelectedVoice: boolean;
}
export declare function getVoiceTitle(voice?: SpeechSynthesisVoice | null): string;
export declare function getVoiceTitleAndNatureNaming(voice?: SpeechSynthesisVoice | null): VoiceDisplayNaming;
export declare function getVoiceDisplayName(naming: VoiceDisplayNaming): string;
export declare function stringToHtmlTestId(name: string): string;
export declare function voiceQualityRankComparator(item1: {
    voice: SpeechSynthesisVoice;
}, item2: {
    voice: SpeechSynthesisVoice;
}): number;
export declare function isVoicePreviewSpinning(voiceDropdown: VoiceDropdownItem): boolean;
export declare function computeVoiceDropdown(params: BuildVoiceDropdownGroupsParams): BuildVoiceDropdownGroupsResult;
export declare function computeErrorMessages(currentNotifications: {
    [language: string]: NotificationType;
} | undefined, audioBrowserProxy: AudioBrowserProxy): string[];
export declare function computeDownloadingMessages(currentNotifications: {
    [language: string]: NotificationType;
} | undefined, audioBrowserProxy: AudioBrowserProxy): string[];
