import './icons.html.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ContextInfo } from './contextual_tasks_toolbar.mojom-webui.js';
export declare class ContextualTasksFaviconGroupElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contextInfos: {
            type: ArrayConstructor;
        };
        visibleItems_: {
            type: ArrayConstructor;
        };
        remainingCount_: {
            type: NumberConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor contextInfos: ContextInfo[];
    protected accessor visibleItems_: ContextInfo[];
    protected accessor remainingCount_: number;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private onContextInfosChanged_;
    protected getFaviconUrl_(url: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-favicon-group': ContextualTasksFaviconGroupElement;
    }
}
