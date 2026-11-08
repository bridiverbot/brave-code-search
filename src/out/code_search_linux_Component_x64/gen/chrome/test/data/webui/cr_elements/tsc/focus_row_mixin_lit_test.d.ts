import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const TestElementBase: typeof CrLitElement & (new (...args: any[]) => import("chrome://resources/cr_elements/focus_row_mixin_lit.js").FocusRowMixinLitInterface);
interface TestFocusRowMixinLitElement {
    $: {
        control: HTMLElement;
        controlTwo: HTMLElement;
    };
}
declare class TestFocusRowMixinLitElement extends TestElementBase {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        showExtraControl: {
            type: BooleanConstructor;
        };
    };
    accessor showExtraControl: boolean;
    focusCallCount: number;
    focus(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'test-focus-row-mixin-lit': TestFocusRowMixinLitElement;
    }
}
export {};
