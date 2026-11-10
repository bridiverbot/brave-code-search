import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { BrowsingDataHandling } from './managed_user_profile_notice_browser_proxy.js';
export declare class ManagedUserProfileNoticeDataHandlingElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        title: {
            type: StringConstructor;
        };
        separateDataChoiceTitle: {
            type: StringConstructor;
        };
        separateDataChoiceDetails: {
            type: StringConstructor;
        };
        mergeDataChoiceTitle: {
            type: StringConstructor;
        };
        mergeDataChoiceDetails: {
            type: StringConstructor;
        };
        selectedDataHandling: {
            type: StringConstructor;
            notify: boolean;
        };
    };
    accessor title: string;
    accessor separateDataChoiceTitle: string;
    accessor separateDataChoiceDetails: string;
    accessor mergeDataChoiceTitle: string;
    accessor mergeDataChoiceDetails: string;
    accessor selectedDataHandling: BrowsingDataHandling | undefined;
    firstUpdated(): void;
    protected onSelectedChanged_(e: CustomEvent<{
        value: BrowsingDataHandling;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'managed-user-profile-notice-data-handling': ManagedUserProfileNoticeDataHandlingElement;
    }
}
