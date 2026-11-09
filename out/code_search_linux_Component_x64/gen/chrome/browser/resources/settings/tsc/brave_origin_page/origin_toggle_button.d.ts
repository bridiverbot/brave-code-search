import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/brave/leo.bundle.js';
import '../settings_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export declare class OriginToggleButtonElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        policyKey: {
            type: StringConstructor;
            reflectToAttribute: boolean;
        };
        inverted: {
            type: BooleanConstructor;
            value: boolean;
        };
        label: StringConstructor;
        subLabel: StringConstructor;
        icon: StringConstructor;
        checked_: {
            type: BooleanConstructor;
            value: boolean;
            observer: string;
        };
    };
    policyKey: string;
    inverted: boolean;
    label: string;
    subLabel: string;
    icon: string;
    checked_: boolean;
    private braveOriginHandler_;
    get checked(): boolean;
    ready(): void;
    loadPolicyValue_(): Promise<void>;
    private onRowClick_;
    private onCheckedChanged_;
    private handleToggleChange_;
}
