/**
 * @fileoverview The 'certificate-manager' component is a newer way for
 * showing and managing TLS certificates. This is tied to the Chrome Root Store
 * and Chrome Cert Management Enterprise policies launch.
 */
import '/strings.m.js';
import './certificate_list.js';
import './certificate_confirmation_dialog.js';
import './certificate_info_dialog.js';
import './certificate_password_dialog.js';
import './certificate_subpage.js';
import './certificate_manager_icons.html.js';
import './crs_section.js';
import './local_certs_section.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import type { CrPageSelectorElement } from '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import type { CrToastElement } from '//resources/cr_elements/cr_toast/cr_toast.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CertificateListElement } from './certificate_list.js';
import type { ActionResult } from './certificate_manager.mojom-webui.js';
import type { CertificateSubpageElement, SubpageCertificateList } from './certificate_subpage.js';
import type { CrsSectionElement } from './crs_section.js';
import type { LocalCertsSectionElement } from './local_certs_section.js';
import type { Route } from './navigation.js';
import { Page } from './navigation.js';
declare const CertificateManagerElementBase: typeof CrLitElement & (new (...args: any[]) => import("./navigation.js").RouteObserverMixinInterface);
export interface CertificateManagerElement {
    $: {
        toolbar: HTMLElement;
        main: CrPageSelectorElement;
        provisionedClientCerts: CertificateListElement;
        toast: CrToastElement;
        viewOsImportedClientCerts: HTMLElement;
        localMenuItem: HTMLElement;
        clientMenuItem: HTMLElement;
        crsMenuItem: HTMLElement;
        localCertSection: LocalCertsSectionElement;
        clientCertSection: HTMLElement;
        crsCertSection: CrsSectionElement;
        adminCertsSection: CertificateSubpageElement;
        userCertsSection: CertificateSubpageElement;
        platformCertsSection: CertificateSubpageElement;
        platformClientCertsSection: CertificateSubpageElement;
        scrollableShadow: HTMLElement;
    };
}
export declare class CertificateManagerElement extends CertificateManagerElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedPage_: {
            type: StringConstructor;
        };
        clientPlatformSubpageLists_: {
            type: ArrayConstructor;
        };
        enterpriseSubpageLists_: {
            type: ArrayConstructor;
        };
        platformSubpageLists_: {
            type: ArrayConstructor;
        };
        userSubpageLists_: {
            type: ArrayConstructor;
        };
        toastMessage_: {
            type: StringConstructor;
        };
        showInfoDialog_: {
            type: BooleanConstructor;
        };
        infoDialogTitle_: {
            type: StringConstructor;
        };
        infoDialogMessage_: {
            type: StringConstructor;
        };
        showPasswordDialog_: {
            type: BooleanConstructor;
        };
        confirmationDialogTitle_: {
            type: StringConstructor;
        };
        confirmationDialogMessage_: {
            type: StringConstructor;
        };
        showConfirmationDialog_: {
            type: BooleanConstructor;
        };
        showSearch_: {
            type: BooleanConstructor;
        };
        numPlatformClientCertsString_: {
            type: StringConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor selectedPage_: Page;
    protected accessor userSubpageLists_: SubpageCertificateList[];
    protected accessor toastMessage_: string;
    protected accessor showInfoDialog_: boolean;
    protected accessor infoDialogTitle_: string;
    protected accessor infoDialogMessage_: string;
    protected accessor showPasswordDialog_: boolean;
    protected accessor showConfirmationDialog_: boolean;
    protected accessor showSearch_: boolean;
    protected accessor confirmationDialogTitle_: string;
    protected accessor confirmationDialogMessage_: string;
    protected accessor clientPlatformSubpageLists_: SubpageCertificateList[];
    protected accessor enterpriseSubpageLists_: SubpageCertificateList[];
    protected accessor platformSubpageLists_: SubpageCertificateList[];
    protected accessor numPlatformClientCertsString_: string;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private passwordEntryResolver_;
    private confirmationDialogResolver_;
    connectedCallback(): void;
    firstUpdated(): void;
    private onTriggerReload_;
    private getClientCertCount_;
    private onAskForImportPassword_;
    protected onPasswordDialogClose_(): void;
    private onAskForConfirmation_;
    protected onConfirmationDialogClose_(): void;
    protected onHashCopied_(): void;
    protected onMenuItemClick_(e: MouseEvent): void;
    currentRouteChanged(route: Route, oldRoute: Route): Promise<void>;
    protected onMenuIronActivate_(e: CustomEvent<{
        item: HTMLElement;
    }>): void;
    protected getSelectedTopLevelHref_(): string;
    protected generateHrefForPage_(p: Page): string;
    protected onClientPlatformCertsLinkRowClick_(e: Event): void;
    protected onImportResult_(e: CustomEvent<ActionResult | null>): void;
    protected onDeleteResult_(e: CustomEvent<ActionResult | null>): void;
    protected onInfoDialogClose_(): void;
    private addThemedColors_;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-manager': CertificateManagerElement;
    }
}
export {};
