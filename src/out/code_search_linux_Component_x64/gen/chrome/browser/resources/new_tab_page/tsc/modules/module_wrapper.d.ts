import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ModuleDescriptor } from './module_descriptor.js';
/** @fileoverview Element that implements the common module UI. */
export interface ModuleInstance {
    element: HTMLElement;
    descriptor: ModuleDescriptor;
    initialized: boolean;
    impressed: boolean;
}
export interface ModuleWrapperElement {
    $: {
        moduleElement: HTMLElement;
        impressionProbe: HTMLElement;
    };
}
export declare class ModuleWrapperElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        module: {
            type: ObjectConstructor;
        };
    };
    accessor module: ModuleInstance | null;
    private eventTracker_;
    disconnectedCallback(): void;
    firstUpdated(): void;
    private initModuleInstance_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-module-wrapper': ModuleWrapperElement;
    }
}
