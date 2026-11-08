/**
 * @fileoverview The 'local-certs-section' component is a section of the
 * Certificate Management UI that shows local modifications to the the users
 * trusted roots for TLS server auth (e.g. roots imported from the platform).
 */
import '/strings.m.js';
import './certificate_manager_icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import type { CrToggleElement } from '//resources/cr_elements/cr_toggle/cr_toggle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { CertManagementMetadata } from './certificate_manager.mojom-webui.js';
import { Page } from './navigation.js';
export interface LocalCertsSectionElement {
    $: {
        importOsCerts: CrToggleElement;
        importOsCertsManagedIcon: HTMLElement;
        viewOsImportedCerts: HTMLElement;
        numSystemCerts: HTMLElement;
    };
}
export declare class LocalCertsSectionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        numPolicyCertsString_: {
            type: StringConstructor;
        };
        numUserCertsString_: {
            type: StringConstructor;
        };
        certManagementMetadata_: {
            type: ObjectConstructor;
        };
        numSystemCertsString_: {
            type: StringConstructor;
        };
    };
    protected accessor numPolicyCertsString_: string;
    protected accessor numUserCertsString_: string;
    protected accessor certManagementMetadata_: CertManagementMetadata | null;
    protected accessor numSystemCertsString_: string;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    private onMetadataRefresh_;
    setFocusToLinkRow(p: Page): void;
    private updateNumCertsStrings_;
    protected onPlatformCertsLinkRowClick_(e: Event): void;
    protected onAdminCertsInstalledLinkRowClick_(e: Event): void;
    protected onUserCertsInstalledLinkRowClick_(e: Event): void;
    protected importOsCertsEnabled_(): boolean;
    protected importOsCertsEnabledManaged_(): boolean;
    protected showViewOsCertsLinkRow_(): boolean;
    protected showCustomSection_(): boolean;
    protected showPolicySection_(): boolean;
    protected showUserSection_(): boolean;
    protected onOsCertsToggleChange_(e: CustomEvent<boolean>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'local-certs-section': LocalCertsSectionElement;
    }
}
