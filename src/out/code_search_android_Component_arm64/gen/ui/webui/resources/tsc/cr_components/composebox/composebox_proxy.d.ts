import { PageCallbackRouter as SearchboxPageCallbackRouter, PageHandlerRemote as SearchboxPageHandlerRemote } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import type { AutocompleteMatch } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
import { PageHandlerRemote } from './composebox.mojom-webui.js';
export declare function createAutocompleteMatch(config?: Partial<AutocompleteMatch>): AutocompleteMatch;
export interface ComposeboxProxy {
    handler: PageHandlerRemote;
    searchboxHandler: SearchboxPageHandlerRemote;
    searchboxCallbackRouter: SearchboxPageCallbackRouter;
}
export declare class ComposeboxProxyImpl implements ComposeboxProxy {
    handler: PageHandlerRemote;
    searchboxHandler: SearchboxPageHandlerRemote;
    searchboxCallbackRouter: SearchboxPageCallbackRouter;
    constructor(handler: PageHandlerRemote, searchboxHandler: SearchboxPageHandlerRemote, searchboxCallbackRouter: SearchboxPageCallbackRouter);
    static getInstance(): ComposeboxProxyImpl;
    static setInstance(newInstance: ComposeboxProxy): void;
}
