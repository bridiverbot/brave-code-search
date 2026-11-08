import '/strings.m.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { IssueDetails } from './browser_proxy.js';
declare const IssueDetailsElementBase: typeof CrLitElement & (new (...args: any[]) => import("./support_tool_page_mixin_lit.js").SupportToolPageMixinLitInterface);
export declare class IssueDetailsElement extends IssueDetailsElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        caseId_: {
            type: StringConstructor;
        };
        emails_: {
            type: ArrayConstructor;
        };
        issueDescription_: {
            type: StringConstructor;
        };
        selectedEmail_: {
            type: StringConstructor;
        };
    };
    protected accessor caseId_: string;
    protected accessor emails_: string[];
    protected accessor issueDescription_: string;
    protected accessor selectedEmail_: string;
    private browserProxy_;
    connectedCallback(): void;
    getIssueDetails(): IssueDetails;
    protected onSelectedEmailChange_(e: Event): void;
    protected onIssueDescriptionInput_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'issue-details': IssueDetailsElement;
    }
}
export {};
