import { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
import { PrefServiceObserverMixinInterface } from '/shared/settings/prefs2/pref_service_observer_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
declare const SettingBraveWeb3DomainsPageElementBase: {
    new (): PolymerElement & PrefServiceObserverMixinInterface;
};
export declare class SettingBraveWeb3DomainsPageElement extends SettingBraveWeb3DomainsPageElementBase {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        resolveMethod_: ArrayConstructor;
        ensOffchainResolveMethod_: ArrayConstructor;
        showEnsOffchainLookupRow_: BooleanConstructor;
    };
    private browserProxy_;
    resolveMethod_: DropdownMenuOptionList;
    ensOffchainResolveMethod_: DropdownMenuOptionList;
    showEnsOffchainLookupRow_: boolean;
    connectedCallback(): void;
    ready(): void;
}
export {};
