import '/strings.m.js';
import 'chrome://resources/js/action_link.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './policy_conflict.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Conflict, Policy } from './policy.mojom-webui.js';
export interface PolicyUiModel extends Policy {
    link?: string;
    isExtension?: boolean;
    status?: string;
}
export interface ConflictItem {
    conflict: Conflict;
    label: string;
    className: string;
}
export declare class PolicyRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        policy: {
            type: ObjectConstructor;
        };
        expanded: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor policy: PolicyUiModel | null;
    accessor expanded: boolean;
    protected get unset(): boolean;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected getShowMoreLessLabel(): string;
    protected getLearnMoreTooltip(): string;
    protected getCopyLabel(): string;
    protected getScopeText(): string;
    protected getLevelText(): string;
    protected getSourceText(): string;
    protected getTruncatedValue(): string;
    protected getFormattedValue(): string;
    protected getMessagesText(): string;
    private computeStatusText;
    protected get conflictItems(): ConflictItem[];
    protected onCopyClick(e: Event): void;
    protected onToggleExpandedClick(): void;
    protected getOpenInNewIconSrc(): string;
    protected getCopyIconSrc(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'policy-row': PolicyRowElement;
    }
}
