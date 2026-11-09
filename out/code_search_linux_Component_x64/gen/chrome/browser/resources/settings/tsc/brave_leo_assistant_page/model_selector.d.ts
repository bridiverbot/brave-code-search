import 'chrome://resources/brave/leo.bundle.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { ModelWithSubtitle } from './brave_leo_assistant_browser_proxy.js';
export declare class LeoModelSelectorElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedKey: {
            type: StringConstructor;
        };
        models: {
            type: ArrayConstructor;
        };
        isPremiumUser: {
            type: BooleanConstructor;
        };
    };
    accessor selectedKey: string;
    accessor models: ModelWithSubtitle[];
    accessor isPremiumUser: boolean;
    getSelectedEntry(): ModelWithSubtitle | undefined;
    onSelectionChange_(e: {
        value: string;
    }): void;
    shouldShowPremiumLabel_(entry: ModelWithSubtitle): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'leo-model-selector': LeoModelSelectorElement;
    }
}
