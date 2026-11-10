import 'chrome://resources/cr_elements/cr_grid/cr_grid.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '/strings.m.js';
import '../module_header.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { FooDataItem } from '../../foo.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem } from '../module_header.js';
export interface ModuleElement {
    $: {
        tiles: HTMLElement;
    };
}
declare const ModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
/**
 * A dummy module, which serves as an example and a helper to build out the NTP
 * module framework.
 */
export declare class ModuleElement extends ModuleElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tiles: {
            type: ArrayConstructor;
        };
        title: {
            type: StringConstructor;
        };
    };
    accessor tiles: FooDataItem[];
    accessor title: string;
    protected getMenuItems_(): MenuItem[];
    protected onDisableButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-dummy-module': ModuleElement;
    }
}
export declare const dummyV2Descriptor: ModuleDescriptor;
export {};
