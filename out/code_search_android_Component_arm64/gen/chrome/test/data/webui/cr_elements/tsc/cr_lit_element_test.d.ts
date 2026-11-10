import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
type Constructor<T> = new (...args: any[]) => T;
interface LifecycleCallbackTrackerMixinInterface {
    lifecycleCallbacks: string[];
}
declare const CrDummyLitElementBase: typeof CrLitElement & Constructor<LifecycleCallbackTrackerMixinInterface>;
interface CrDummyLitElement {
    $: {
        foo: HTMLElement;
        bar: HTMLElement;
    };
}
declare class CrDummyLitElement extends CrDummyLitElementBase {
    static get is(): 'cr-dummy-lit';
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare class CrDummyPropertiesWithNotifyElement extends CrLitElement {
    static get is(): 'cr-dummy-properties-with-notify';
    static get properties(): {
        prop1: {
            type: BooleanConstructor;
            notify: boolean;
        };
        prop2: {
            type: BooleanConstructor;
            notify: boolean;
        };
        prop3: {
            type: BooleanConstructor;
        };
        propFour: {
            type: BooleanConstructor;
            notify: boolean;
        };
        prop5: {
            type: BooleanConstructor;
            notify: boolean;
        };
    };
    accessor prop1: boolean;
    accessor prop2: boolean;
    accessor prop3: boolean;
    accessor propFour: boolean;
    accessor prop5: boolean | undefined;
}
declare class CrDummyPropertiesWithReflectElement extends CrLitElement {
    static get is(): 'cr-dummy-properties-with-reflect';
    static get properties(): {
        prop1: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        prop2WithSuffix: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        prop3: {
            type: BooleanConstructor;
        };
        propFour: {
            type: BooleanConstructor;
            reflect: boolean;
        };
    };
    accessor prop1: boolean;
    accessor prop2WithSuffix: boolean;
    accessor prop3: boolean;
    accessor propFour: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        [CrDummyLitElement.is]: CrDummyLitElement;
        [CrDummyPropertiesWithNotifyElement.is]: CrDummyPropertiesWithNotifyElement;
        [CrDummyPropertiesWithReflectElement.is]: CrDummyPropertiesWithReflectElement;
    }
}
export {};
