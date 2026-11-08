// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ZeroStateSuggestionsClientReceiver, ZeroStateSuggestionsHandlerRemote } from '../../glic.mojom-webui.js';
import { ObservableValue as ObservableValueImpl } from '../../observable.js';
import { zeroStateSuggestionsToClient } from '../conversions.js';
import { maybeWrapWithLogging } from '../mojo_logging.js';
export class GlicBrowserHostZeroStateSuggestions {
    handler;
    clientReceiver;
    currentZeroStateSuggestionOptions;
    currentZeroStateObserver;
    initialize(initialState, handler) {
        if (!initialState.enableZeroStateSuggestions || !handler) {
            this.getZeroStateSuggestions = undefined;
            return;
        }
        this.handler = maybeWrapWithLogging(new ZeroStateSuggestionsHandlerRemote(), { prefix: 'ZeroStateSuggestionsHandler' });
        handler.createZeroStateSuggestionsHandler(this.handler.$.bindNewPipeAndPassReceiver());
    }
    destroySuggestions() {
        if (this.handler) {
            this.handler.$.close();
            this.handler = undefined;
        }
        if (this.clientReceiver) {
            this.clientReceiver.$.close();
            this.clientReceiver = undefined;
        }
    }
    getZeroStateSuggestions(options) {
        options = options ?? {
            isFirstRun: false,
            supportedTools: [],
        };
        this.currentZeroStateSuggestionOptions = options;
        this.currentZeroStateObserver =
            ObservableValueImpl.withNoValue(this.zeroStateActiveSubscriptionStateChanged.bind(this, options));
        return this.currentZeroStateObserver;
    }
    async zeroStateActiveSubscriptionStateChanged(options, hasActiveSubscription) {
        if (options !== this.currentZeroStateSuggestionOptions) {
            // Don't send out of date updates.
            return;
        }
        if (!this.handler) {
            return;
        }
        this.clientReceiver?.$.close();
        this.clientReceiver = undefined;
        let clientRemote = null;
        if (hasActiveSubscription) {
            this.clientReceiver = new ZeroStateSuggestionsClientReceiver(this);
            clientRemote = this.clientReceiver.$.bindNewPipeAndPassRemote();
        }
        const mojoOptions = {
            isFirstRun: options.isFirstRun ?? false,
            supportedTools: options.supportedTools ?? [],
        };
        const response = await this.handler.getZeroStateSuggestionsAndSubscribe(clientRemote, mojoOptions);
        if (response.zeroStateSuggestions) {
            this.currentZeroStateObserver?.assignAndSignal(zeroStateSuggestionsToClient(response.zeroStateSuggestions));
        }
    }
    notifyZeroStateSuggestionsChanged(suggestions, _options) {
        this.currentZeroStateObserver?.assignAndSignal(zeroStateSuggestionsToClient(suggestions));
    }
}
