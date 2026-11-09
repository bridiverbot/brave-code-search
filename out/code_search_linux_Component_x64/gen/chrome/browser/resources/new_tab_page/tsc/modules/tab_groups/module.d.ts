import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '/strings.m.js';
import '../info_dialog.js';
import '../module_header.js';
import './icons.html.js';
import './icon_container.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { Color } from '../../tab_group_types.mojom-webui.js';
import type { TabGroup } from '../../tab_groups.mojom-webui.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import type { MenuItem } from '../module_header.js';
export declare const MAX_TAB_GROUPS = 4;
export declare const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_PREFIX = "--color-new-tab-page-module-tab-groups-";
export declare const COLOR_NEW_TAB_PAGE_MODULE_TAB_GROUPS_DOT_PREFIX = "--color-new-tab-page-module-tab-groups-dot-";
declare const TabGroupsModuleElementBase: typeof CrLitElement & (new (...args: any[]) => import("//resources/cr_elements/i18n_mixin_lit.js").I18nMixinLitInterface);
export declare function colorIdToString(colorPrefix: string, id: Color): string;
/**
 * The Tab Groups module, which helps users resume journey and discover tab
 * groups.
 */
export declare class TabGroupsModuleElement extends TabGroupsModuleElementBase {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        ariaLabels: {
            type: ObjectConstructor;
        };
        tabGroups: {
            type: ArrayConstructor;
        };
        showInfoDialog: {
            type: BooleanConstructor;
        };
    };
    accessor ariaLabels: Map<string, string>;
    accessor tabGroups: TabGroup[];
    accessor showInfoDialog: boolean;
    showZeroState: boolean;
    private handler_;
    constructor();
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    protected computeDescription_(time: string, device: string | null): string;
    protected computeTabGroupColor_(color: Color): string;
    protected computeTabGroupDotColor_(color: Color): string;
    protected computeTabGroupButtonAriaLabel_(group: TabGroup): Promise<string>;
    protected getMenuItems_(): MenuItem[];
    protected getTabGroups_(): TabGroup[];
    protected onDisableButtonClick_(): void;
    protected onInfoButtonClick_(): void;
    protected onInfoDialogClose_(): void;
    protected onCreateNewTabGroupFromZeroStateClick_(): void;
    protected onCreateNewTabGroupFromSteadyStateClick_(): void;
    private onCreateNewTabGroupClick_;
    protected onTabGroupClick_(e: Event): void;
    protected getLibraryAddIcon_(): string;
    protected getGroupIcon_(): string;
}
export type ModuleElement = TabGroupsModuleElement;
declare global {
    interface HTMLElementTagNameMap {
        'ntp-tab-groups-module': TabGroupsModuleElement;
    }
}
export declare const tabGroupsDescriptor: ModuleDescriptor;
export {};
