import '../controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../settings_page/settings_section.js';
import './tab_discard/exception_list.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ExceptionListElement } from './tab_discard/exception_list.js';
export declare const DISCARD_RING_PREF = "performance_tuning.discard_ring_treatment.enabled";
export declare const PERFORMANCE_INTERVENTION_NOTIFICATION_PREF = "performance_tuning.intervention_notification.enabled";
declare const SettingsPerformancePageElementBase: typeof CrLitElement & (new (...args: any[]) => import("/shared/settings/prefs2/pref_service_observer_mixin_lit.js").PrefServiceObserverMixinLitInterface) & (new (...args: any[]) => import("//resources/cr_components/help_bubble/help_bubble_mixin_interface.js").HelpBubbleMixinInterface);
export interface SettingsPerformancePageElement {
    $: {
        exceptionList: ExceptionListElement;
    };
}
export declare class SettingsPerformancePageElement extends SettingsPerformancePageElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup[];
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private metricsProxy_;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onDiscardRingChange_(): void;
    protected onDiscardRingTreatmentSubLabelLinkClicked_(): void;
    protected onPerformanceInterventionSubLabelLinkClicked_(): void;
    protected onTabHoverPreviewCardLinkClick_(): void;
    protected onPerformanceInterventionToggleButtonChange_(): void;
    protected showSendFeedbackButton_(): boolean;
    protected onSendFeedback_(_e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-performance-page': SettingsPerformancePageElement;
    }
}
export { SettingsPerformancePageElement as PerformancePageElement };
