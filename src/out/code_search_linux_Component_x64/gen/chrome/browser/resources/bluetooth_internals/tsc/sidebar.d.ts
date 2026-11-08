import type { PageManagerObserver } from './page_manager.js';
interface SidebarItem {
    pageName: string;
    text: string;
}
/**
 * A side menu that lists the currently navigable pages.
 */
export declare class Sidebar implements PageManagerObserver {
    private sidebarDiv_;
    private sidebarContent_;
    private sidebarList_;
    private overlayDiv_;
    /** @param sidebarDiv The div corresponding to the sidebar. */
    constructor(sidebarDiv: HTMLElement);
    /**
     * Adds a new list item to the sidebar using the given |item|.
     */
    addItem(item: SidebarItem): void;
    /**
     * Closes the sidebar. Only applies to layouts with window width <= 600px.
     */
    close(): void;
    /**
     * Opens the sidebar. Only applies to layouts with window width <= 600px.
     */
    open(): void;
    /**
     * Removes a sidebar item where |pageName| matches the item's pageName.
     */
    removeItem(pageName: string): void;
    /**
     * Called when a page is navigated to.
     * @param path The path of the page being visited.
     */
    updateHistory(path: string): void;
    updateTitle(_title: string): void;
    /**
     * Switches the page based on which sidebar list button was clicked.
     */
    private onItemClick_;
}
export {};
