import './grouped_action_menu.js';
import '../read_aloud/accent_menu.js';
import '../read_aloud/voice_selection_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ShowAtConfigPrefs } from '../content/read_anything_types.js';
import type { GroupedActionMenuElement } from './grouped_action_menu.js';
import type { MenuGroup, ToolbarMenu } from './menu_util.js';
export interface AudioMenuElement {
    $: {
        menu: GroupedActionMenuElement;
    };
}
declare const AudioMenuElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface);
export declare class AudioMenuElement extends AudioMenuElementBase implements ToolbarMenu {
    static get is(): string;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        highlightGranularity: {
            type: NumberConstructor;
        };
        selectedVoice: {
            type: ObjectConstructor;
        };
        previewVoicePlaying: {
            type: ObjectConstructor;
        };
        showVoiceSelectionDialog_: {
            type: BooleanConstructor;
        };
        nonModal: {
            type: BooleanConstructor;
        };
        groups_: {
            type: ArrayConstructor;
        };
        enabledLangs: {
            type: ArrayConstructor;
        };
        availableVoices: {
            type: ArrayConstructor;
        };
        localeToDisplayName: {
            type: ObjectConstructor;
        };
        selectedLang: {
            type: StringConstructor;
        };
        showAccentMenuDialog_: {
            type: BooleanConstructor;
        };
    };
    accessor highlightGranularity: number;
    accessor nonModal: boolean;
    accessor enabledLangs: string[];
    accessor availableVoices: SpeechSynthesisVoice[];
    accessor localeToDisplayName: {
        [lang: string]: string;
    };
    accessor previewVoicePlaying: SpeechSynthesisVoice | null;
    accessor selectedLang: string;
    accessor selectedVoice: SpeechSynthesisVoice | null;
    protected accessor showAccentMenuDialog_: boolean;
    protected accessor showVoiceSelectionDialog_: boolean;
    private audioBrowserProxy_;
    private highlightOptions_;
    protected accessor groups_: Array<MenuGroup<number | string>>;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeGroups_;
    open(anchor: HTMLElement, showAtConfig?: ShowAtConfigPrefs): void;
    close(): void;
    protected onOpenAccentMenu_(): void;
    protected onAccentMenuClose_(event: CustomEvent<void>): void;
    protected onOpenVoiceSelectionDialog_(): void;
    protected onVoiceSelectionDialogClose_(event: CustomEvent<void>): void;
    private focusMenuItem_;
}
declare global {
    interface HTMLElementTagNameMap {
        'audio-menu': AudioMenuElement;
    }
}
export {};
