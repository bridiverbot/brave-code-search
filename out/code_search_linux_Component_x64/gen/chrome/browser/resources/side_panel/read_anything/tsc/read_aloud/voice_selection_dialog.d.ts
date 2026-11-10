import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '../app/icons.html.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import type { CrRadioGroupElement } from '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { CrLitElement, nothing } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { NotificationType } from './voice_language_conversions.js';
import type { VoiceDropdownGroup, VoiceDropdownItem } from './voice_menu_display.js';
import type { VoiceNotificationListener } from './voice_notification_manager.js';
export interface VoiceSelectionDialogElement {
    $: {
        voiceSelectionDialog: CrDialogElement;
        voiceRadioGroup: CrRadioGroupElement;
    };
}
export declare class VoiceSelectionDialogElement extends CrLitElement implements VoiceNotificationListener {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedVoice: {
            type: ObjectConstructor;
        };
        availableVoices: {
            type: ArrayConstructor;
        };
        enabledLangs: {
            type: ArrayConstructor;
        };
        previewVoicePlaying: {
            type: ObjectConstructor;
        };
        candidateVoice_: {
            type: ObjectConstructor;
        };
        previewVoiceInitiated_: {
            type: ObjectConstructor;
        };
        currentNotifications_: {
            type: ObjectConstructor;
        };
        localeToDisplayName: {
            type: ObjectConstructor;
        };
    };
    accessor selectedVoice: SpeechSynthesisVoice | null;
    accessor localeToDisplayName: {
        [lang: string]: string;
    };
    accessor enabledLangs: string[];
    accessor availableVoices: SpeechSynthesisVoice[];
    accessor previewVoicePlaying: SpeechSynthesisVoice | null;
    protected accessor candidateVoice_: SpeechSynthesisVoice | null;
    protected accessor previewVoiceInitiated_: SpeechSynthesisVoice | null;
    protected accessor currentNotifications_: {
        [language: string]: NotificationType;
    };
    protected errorMessages_: string[];
    protected downloadingMessages_: string[];
    protected voiceGroups_: VoiceDropdownGroup[];
    private audioBrowserProxy_;
    private notificationManager_;
    private previewTimer_;
    private previewRequestId_;
    private previewPendingVoice_;
    private hasSelectedVoice_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    notify(type: NotificationType, language?: string): void;
    close(): void;
    protected onCancelButtonClick_(): void;
    protected onDialogCancel_(): void;
    protected onDialogClose_(): void;
    protected onKeydown_(e: KeyboardEvent): void;
    private computeVoiceDropdown_;
    private computeErrorMessages_;
    private computeDownloadingMessages_;
    protected previewButtonTabIndex_(voiceItem: VoiceDropdownItem, isFirstVoice: boolean): number;
    protected onVoiceRadioGroupSelectedChanged_(e: CustomEvent<{
        value: string;
    }>): void;
    protected onVoicePreviewClick_(e: Event): void;
    private clearPreviewTimeout_;
    private stopActivePreview_;
    protected onSaveClick_(): void;
    protected previewLabel_(previewPlaying: boolean): string;
    protected hideSpinner_(voiceDropdown: VoiceDropdownItem): boolean;
    protected voiceDisplayName_(voiceItem: VoiceDropdownItem): string;
    protected voiceLang_(voiceItem: VoiceDropdownItem): string | typeof nothing;
    protected voiceLabel_(voiceName: string): string;
    protected previewIcon_(previewInitiated: boolean): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'voice-selection-dialog': VoiceSelectionDialogElement;
    }
}
