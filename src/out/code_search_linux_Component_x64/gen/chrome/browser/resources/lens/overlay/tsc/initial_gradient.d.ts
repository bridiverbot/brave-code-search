import '/strings.m.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface InitialGradientElement {
    $: {
        initialGradientScrim: HTMLElement;
    };
}
export declare class InitialGradientElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        scrimVisible: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
        shouldHideScrim: {
            type: BooleanConstructor;
            value: boolean;
            reflectToAttribute: boolean;
        };
    };
    private scrimVisible;
    private shouldHideScrim;
    setScrimVisible(): void;
    triggerHideScrimAnimation(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'initial-gradient': InitialGradientElement;
    }
}
