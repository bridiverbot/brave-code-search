import type { PluralStringProxy } from '//resources/js/plural_string_proxy.js';
/**
 * PluralStringProxy backed by the plural_string.mojom.PluralStringProvider
 * interface. Unlike PluralStringProxyImpl this does not rely on chrome.send, so
 * it also works in non-WebUI hosts such as extension pages.
 *
 * Used by the shared searchbox and composebox components. Every host that
 * renders components using this (e.g. the composebox contextual action menu or
 * entrypoint button) must bind plural_string.mojom.PluralStringProvider;
 * requesting an unbound interface terminates the renderer. Tests that render
 * such components on a host without the binding should install a fake via
 * `MojoPluralStringProxy.setInstance()`.
 */
export declare class MojoPluralStringProxy implements PluralStringProxy {
    private remote_;
    getPluralString(messageName: string, itemCount: number): Promise<string>;
    getPluralStringTupleWithComma(): Promise<string>;
    getPluralStringTupleWithPeriods(): Promise<string>;
    static getInstance(): PluralStringProxy;
    static setInstance(obj: PluralStringProxy): void;
}
