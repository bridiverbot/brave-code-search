/**
 * @fileoverview The 'certificate-entry' component is for showing a summary
 * of a certificate in a row on screen.
 *
 * This component is used in the new Certificate Management UI in
 * ./certificate_manager.ts.
 */
import '/strings.m.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import type { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { CertificateSource } from './certificate_manager.mojom-webui.js';
import type { ActionResult } from './certificate_manager.mojom-webui.js';
export interface CertificateEntryElement {
    $: {
        certhash: CrInputElement;
        copy: HTMLElement;
        view: HTMLElement;
        delete: HTMLElement;
    };
}
declare global {
    interface HTMLElementEventMap {
        'hash-copied': CustomEvent<void>;
        'delete-result': CustomEvent<ActionResult | null>;
    }
}
declare const CertificateEntryElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare class CertificateEntryElement extends CertificateEntryElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        certSource: {
            type: NumberConstructor;
        };
        sha256hashHex: {
            type: StringConstructor;
        };
        displayName: {
            type: StringConstructor;
        };
        isDeletable: {
            type: BooleanConstructor;
        };
        showEditIcon: {
            type: BooleanConstructor;
        };
    };
    accessor certSource: CertificateSource;
    accessor sha256hashHex: string;
    accessor displayName: string;
    accessor isDeletable: boolean;
    accessor showEditIcon: boolean;
    protected certDetailsIconClass_(): string;
    protected onViewClick_(): void;
    protected onDeleteClick_(): void;
    protected onCopyClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'certificate-entry': CertificateEntryElement;
    }
}
export {};
