import type { //
WebClientHandlerRemote, //
WebClientInitialState, //
ZeroStateSuggestionsClientInterface, //
ZeroStateSuggestionsOptions as ZeroStateSuggestionsOptionsMojo, //
ZeroStateSuggestionsV2 as ZeroStateSuggestionsV2Mojo } from '../../glic.mojom-webui.js';
import type { //
GlicBrowserHost, //
ObservableValue, //
ZeroStateSuggestionsOptions, //
ZeroStateSuggestionsV2 } from '../../glic_api/glic_api.js';
import { ObservableValue as ObservableValueImpl } from '../../observable.js';
export declare class GlicBrowserHostZeroStateSuggestions implements ZeroStateSuggestionsClientInterface, Partial<GlicBrowserHost> {
    private handler?;
    private clientReceiver?;
    currentZeroStateSuggestionOptions?: ZeroStateSuggestionsOptions;
    currentZeroStateObserver?: ObservableValueImpl<ZeroStateSuggestionsV2>;
    initialize(initialState: WebClientInitialState, handler: WebClientHandlerRemote): void;
    destroySuggestions(): void;
    getZeroStateSuggestions?(options?: ZeroStateSuggestionsOptions): ObservableValue<ZeroStateSuggestionsV2>;
    private zeroStateActiveSubscriptionStateChanged;
    notifyZeroStateSuggestionsChanged(suggestions: ZeroStateSuggestionsV2Mojo, _options: ZeroStateSuggestionsOptionsMojo): void;
}
