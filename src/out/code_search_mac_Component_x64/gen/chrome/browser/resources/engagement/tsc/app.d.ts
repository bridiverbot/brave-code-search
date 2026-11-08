import { CustomElement } from 'chrome://resources/js/custom_element.js';
import type { SiteEngagementDetailsProviderInterface } from './site_engagement_details.mojom-webui.js';
export declare class SiteEngagementAppElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private engagementTableBody;
    private info;
    engagementDetailsProvider: SiteEngagementDetailsProviderInterface;
    private updateInterval;
    private showWebUiPages;
    private sortKey;
    private sortReverse;
    private whenPopulatedResolver;
    connectedCallback(): void;
    /**
     * Creates a single row in the engagement table.
     * @param info The info to create the row from.
     */
    private createRow;
    disableAutoupdate(): void;
    private enableAutoupdate;
    /**
     * Sets the base engagement score when a score input is changed.
     * Resets the length of engagement-bar-cell to match the new score.
     * Also resets the update interval.
     * @param origin The origin of the engagement score to set.
     */
    private handleBaseScoreChange;
    /**
     * Adds a new origin with the given base score.
     * @param originInput The text input containing the origin to add.
     * @param scoreInput The text input containing the score to add.
     */
    private handleAddOrigin;
    /**
     * Show chrome:// and chrome-untrusted:// pages.
     */
    private handleShowWebUiPages;
    /**
     * Remove all rows from the engagement table.
     */
    private clearTable;
    /**
     * Sort the engagement info based on |sortKey| and |sortReverse|.
     */
    private sortInfo;
    /**
     * Regenerates the engagement table from |info|.
     */
    private renderTable;
    /**
     * Retrieve site engagement info and render the engagement table.
     */
    private updateEngagementTable;
    whenPopulatedForTest(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'site-engagement-app': SiteEngagementAppElement;
    }
}
