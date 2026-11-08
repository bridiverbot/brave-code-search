import { DropdownMenuOptionList } from '../controls/settings_dropdown_menu.js';
export interface BraveWeb3DomainsBrowserProxy {
    getDecentralizedDnsResolveMethodList(): Promise<DropdownMenuOptionList>;
    getEnsOffchainResolveMethodList(): Promise<DropdownMenuOptionList>;
}
export declare class BraveWeb3DomainsBrowserProxyImpl implements BraveWeb3DomainsBrowserProxy {
    getDecentralizedDnsResolveMethodList(): Promise<DropdownMenuOptionList>;
    getEnsOffchainResolveMethodList(): Promise<DropdownMenuOptionList>;
    static getInstance(): BraveWeb3DomainsBrowserProxy;
}
