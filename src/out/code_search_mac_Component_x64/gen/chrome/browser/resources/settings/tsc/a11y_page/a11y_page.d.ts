/**
 * @fileoverview
 * 'settings-a11y-page' is the small section of advanced settings with
 * a link to the web store accessibility page on most platforms, and
 * a subpage with lots of other settings on Chrome OS.
 */
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_toggle_button.js';
import '../settings_page/settings_section.js';
import '../controls/settings_dropdown_menu.js';
import type { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import { PageColors } from '../page_colors.mojom-webui.js';
import './ax_annotations_section.js';
import './live_caption.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
/**
 * Must be kept in sync with the C++ enum of the same name in
 * chrome/browser/ui/toasts/toast_metrics.h.
 */
export declare enum ToastAlertLevel {
    ALL = 0,
    ACTIONABLE = 1,
    COUNT = 1
}
declare const SettingsA11yPageElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/web_ui_listener_mixin_lit.js").WebUiListenerMixinLitInterface) & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("../settings_page/settings_view_mixin_lit.js").SettingsViewMixinLitInterface);
export interface SettingsA11yPageElement {
    $: {
        toastToggle: SettingsToggleButtonElement;
    };
}
export declare class SettingsA11yPageElement extends SettingsA11yPageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        enableLiveCaption_: {
            type: BooleanConstructor;
        };
        numericUncheckedToastAlertValues_: {
            type: ArrayConstructor;
        };
        showPageColors_: {
            type: BooleanConstructor;
        };
        requestedA11yPageColorsPref_: {
            type: ObjectConstructor;
        };
        pageColorsOptions_: {
            type: ArrayConstructor;
        };
        /**
         * Indicate whether a screen reader is enabled. Also, determine whether
         * to show accessibility labels settings.
         */
        hasScreenReader_: {
            type: BooleanConstructor;
        };
        /**
         * Whether to show the AxTreeFixing subpage.
         */
        showAxTreeFixingSection_: {
            type: BooleanConstructor;
        };
        /**
         * Whether to show the AxAnnotations subpage.
         */
        showAxAnnotationsSection_: {
            type: BooleanConstructor;
        };
    };
    private browserProxy_;
    protected accessor enableLiveCaption_: boolean;
    protected accessor numericUncheckedToastAlertValues_: ToastAlertLevel[];
    protected accessor showPageColors_: boolean;
    protected accessor requestedA11yPageColorsPref_: chrome.settingsPrivate.PrefObject<PageColors> | undefined;
    protected accessor pageColorsOptions_: DropdownMenuOptionList;
    protected accessor hasScreenReader_: boolean;
    protected accessor showAxTreeFixingSection_: boolean;
    protected accessor showAxAnnotationsSection_: boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected onA11yCaretBrowsingChange_(event: Event): void;
    protected onA11yImageLabelsChange_(event: Event): void;
    /**
     * Return whether to show the AxAnnotations subpage based on:
     *    1. If any annotation's feature flag is enabled.
     *    2. Whether a screen reader is enabled.
     * Note: on ChromeOS, the AxAnnotations subpage is shown on a different
     * settings page; i.e. Settings > Accessibility > Text-to-Speech.
     */
    private computeShowAxAnnotationsSection_;
    protected onCaptionsClick_(): void;
    protected onFocusHighlightSettingsBooleanControlChange_(event: Event): void;
    /** private */
    protected onMoreFeaturesLinkClick_(): void;
    protected onMacTrackpadGesturesLinkClick_(): void;
    protected onToastAlertLevelChange_(): void;
    protected isPageColorsThemeSelected_(): boolean;
    getAssociatedControlFor(childViewId: string): HTMLElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-a11y-page': SettingsA11yPageElement;
    }
}
export {};
