/**
 * Base class for pages that can be shown and hidden by PageManager. Each Page
 * is like a node in a forest, corresponding to a particular div. At any
 * point, one root Page is visible, and any visible Page can show a child Page
 * as an overlay. The host of the root Page(s) should provide a container div
 * for each nested level to enforce the stack order of overlays.
 */
export declare class Page extends EventTarget {
    name: string;
    title: string;
    pageDivName: string;
    pageDiv: HTMLElement & {
        page: Page | null;
    };
    tab: HTMLElement | null;
    lastFocusedElement: HTMLElement | null;
    hash: string;
    /** The parent page of this page; or null for root pages. */
    parentPage: Page | null;
    /**
     * The section on the parent page that is associated with this page. Can be
     * null.
     */
    associatedSection: Element | null;
    /**
     * An array of controls that are associated with this page. The first control
     * should be located on a root page.
     */
    associatedControls: Element[] | null;
    /**
     * @param name Page name.
     * @param title Page title, used for history.
     * @param pageDivName ID of the div corresponding to the page.
     */
    constructor(name: string, title: string, pageDivName: string);
    /**
     * Initializes page content.
     */
    initializePage(): void;
    /**
     * Called by the PageManager when this.hash changes while the page is
     * already visible. This is analogous to the hashchange DOM event.
     */
    didChangeHash(): void;
    /**
     * Sets focus on the first focusable element. Override for a custom focus
     * strategy.
     */
    focus(): void;
    /**
     * Updates the hash of the current page. If the page is topmost, the history
     * state is updated.
     * @param hash The new hash value. Like location.hash, this should include the
     *     leading '#' if not empty.
     */
    setHash(hash: string): void;
    /**
     * Called after the page has been shown.
     */
    didShowPage(): void;
    /**
     * Called before the page will be hidden, e.g., when a different root page
     * will be shown.
     */
    willHidePage(): void;
    /**
     * Called after the overlay has been closed.
     */
    didClosePage(): void;
    /**
     * Gets page visibility state.
     */
    get visible(): boolean;
    /**
     * Sets page visibility.
     */
    set visible(visible: boolean);
}
