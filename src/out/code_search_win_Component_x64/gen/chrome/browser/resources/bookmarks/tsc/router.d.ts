import type { StoreObserver } from 'chrome://resources/js/store.js';
import type { BookmarksPageState } from './types.js';
/**
 * This element is a one way bound interface that routes the page URL to
 * the searchTerm and selectedId. Clients must initialize themselves by
 * reading the router's fields after attach.
 */
export declare class BookmarksRouter implements StoreObserver<BookmarksPageState> {
    private searchTerm_;
    private selectedId_;
    private selectedUrlId_;
    private defaultId_;
    private updateStateTimeout_;
    private tracker_;
    initialize(): void;
    teardown(): void;
    private onQueryParamsChanged_;
    onStateChanged(state: BookmarksPageState): void;
    /**
     * Returns the id to show in the URL for the node with store id `id`.
     *
     * IMPORTANT: chrome://bookmarks/?id=<numeric id> is effectively a public
     * API and must not change. Users bookmark and share these URLs, and
     * automation reads the id from the URL and passes it to the
     * chrome.bookmarks extension API, which uses the same numeric ids. The
     * UUID-based store ids are an implementation detail and must not leak into
     * the URL. This is covered by end-to-end browser tests.
     *
     * Nodes without a numeric id (e.g. the synthetic account/local headings)
     * fall back to their store id.
     */
    private getUrlId_;
    private updateQueryParams_;
}
