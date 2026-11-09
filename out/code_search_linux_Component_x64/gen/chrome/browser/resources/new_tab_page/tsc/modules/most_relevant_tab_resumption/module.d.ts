import './icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import './page_favicon.js';
import '../icons.html.js';
import '../info_dialog.js';
import '../module_header.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { URLVisit } from '../../url_visit_types.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem, ModuleHeaderElement } from '../module_header.js';
export declare const MAX_URL_VISITS = 5;
export interface MostRelevantTabResumptionModuleElement {
    $: {
        moduleHeader: ModuleHeaderElement;
        urlVisits: HTMLElement;
    };
}
declare const MostRelevantTabResumptionModuleElement_base: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class MostRelevantTabResumptionModuleElement extends MostRelevantTabResumptionModuleElement_base {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /** The type of module width (wide, narrow, ...). */
        format: {
            type: StringConstructor;
            reflect: boolean;
        };
        /** The cluster displayed by this element. */
        urlVisits: {
            type: ArrayConstructor;
        };
        /**
         * To determine whether the favicon service should use the host if
         * the url does not produce a match.
         */
        fallbackToHost_: {
            type: BooleanConstructor;
        };
        /**
         * To determine whether to show the module with the device icon.
         */
        shouldShowDeviceIcon_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
        allowFaviconServerFallback_: {
            type: BooleanConstructor;
        };
    };
    accessor format: string;
    accessor urlVisits: URLVisit[];
    protected accessor fallbackToHost_: boolean;
    protected accessor shouldShowDeviceIcon_: boolean;
    protected accessor showInfoDialog_: boolean;
    protected accessor allowFaviconServerFallback_: boolean;
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
    protected onSeeMoreButtonClick_(): void;
    protected onDismissButtonClick_(e: Event): void;
    protected onUrlVisitClick_(e: Event): void;
    protected computeDomain_(urlVisit: URLVisit): string;
    protected computeIcon_(urlVisit: URLVisit): string;
    protected computeDeviceName_(urlVisit: URLVisit): string | null;
    protected computeShouldShowDeviceName_(urlVisit: URLVisit): boolean;
    protected getVisibleUrlVisits_(): URLVisit[];
    protected onInfoButtonClick_(): void;
    protected onInfoDialogClose_(): void;
    protected getCheckSmallIcon_(): string;
}
export type ModuleElement = MostRelevantTabResumptionModuleElement;
declare global {
    interface HTMLElementTagNameMap {
        'ntp-most-relevant-tab-resumption-module': MostRelevantTabResumptionModuleElement;
    }
}
export declare const mostRelevantTabResumptionDescriptor: ModuleDescriptor;
export {};
