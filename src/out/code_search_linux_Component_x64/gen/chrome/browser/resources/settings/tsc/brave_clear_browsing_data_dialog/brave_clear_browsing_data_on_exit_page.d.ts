import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import '../controls/settings_checkbox.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
export interface SettingsBraveClearBrowsingDataOnExitPageElement {
    $: {
        checkboxContainer: HTMLElement;
    };
}
declare const SettingsBraveClearBrowsingDataOnExitPageElementBase: typeof PolymerElement & (new (...args: any[]) => import("../base_mixin.js").BaseMixinInterface);
export declare class SettingsBraveClearBrowsingDataOnExitPageElement extends SettingsBraveClearBrowsingDataOnExitPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        isModified_: {
            type: BooleanConstructor;
            value: boolean;
        };
        isChildAccount_: {
            type: BooleanConstructor;
            value(): boolean;
        };
        browsingDataTypeOptionsList_: {
            type: ArrayConstructor;
            value: never[];
        };
        isLeoAssistantAndHistoryAllowed_: {
            type: BooleanConstructor;
            value(): boolean;
        };
    };
    isModified_: boolean;
    private browsingDataTypeOptionsList_;
    private isChildAccount_;
    private isLeoAssistantAndHistoryAllowed_;
    ready(): void;
    getChangedSettings(): {
        key: string;
        value: boolean;
    }[];
    private getPrefValue_;
    /**
     * Sets up the data type options list
     */
    private setUpDataTypeOptionLists_;
    /**
     * Determines if a data type should be included in the lists
     */
    private shouldDataTypeBeIncluded_;
    private updateModified_;
}
export {};
