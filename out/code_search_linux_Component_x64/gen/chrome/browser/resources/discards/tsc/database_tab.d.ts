import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import type { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { SiteDataDatabaseSize, SiteDataEntry, SiteDataFeature } from './site_data.mojom-webui.js';
export interface DatabaseTabElement {
    $: {
        addOriginInput: CrInputElement;
    };
}
declare const DatabaseTabElementBase: typeof CrLitElement & (new (...args: any[]) => import("./sorted_table_mixin_lit.js").SortedTableMixinLitInterface);
export declare class DatabaseTabElement extends DatabaseTabElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * List of database rows.
         */
        rows_: {
            type: ArrayConstructor;
        };
        /**
         * The database size response.
         */
        size_: {
            type: ObjectConstructor;
        };
        /**
         * An origin that can be added to requestedOrigins_ by onAddOriginClick_.
         */
        newOrigin_: {
            type: StringConstructor;
        };
    };
    protected accessor rows_: SiteDataEntry[] | null;
    protected accessor size_: SiteDataDatabaseSize;
    protected accessor newOrigin_: string;
    private updateTableTimer_;
    private updateSizesTimer_;
    private requestedOrigins_;
    private siteDataProvider_;
    sortKey: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Issues a request for the data and renders on response.
     */
    private updateDbRows_;
    /**
     * Adds the current new origin to requested origins and starts an update.
     */
    private addNewOrigin_;
    /**
     * An on-click handler that adds the current new origin to requested
     * origins.
     */
    protected onAddOriginClick_(): Promise<void>;
    /**
     * A key-down handler that adds the current new origin to requested origins.
     */
    protected onOriginKeydown_(e: KeyboardEvent): void;
    /** Issues a request for the database sizes and renders on response. */
    private updateDbSizes_;
    /**
     * Returns a sort function to compare site data entries based on the provided
     * sort key and a boolean reverse flag.
     * @param sortKey The sort key for the  returned function.
     * @param sortReverse True if sorting is reversed.
     * @return A comparison function that compares two site data entries, returns
     *     negative number if a < b, 0 if a === b, and a positive
     *     number if a > b.
     */
    private computeSortFunction_;
    /**
     * Returns sorted site data entries, sorted by the current sort key.
     */
    protected getSortedRows_(): SiteDataEntry[];
    /**
     * @param origin A potentially valid origin string.
     * @return Whether the origin is valid.
     */
    protected isValidOrigin_(origin: string): boolean;
    /**
     * @param origin A potentially valid origin string.
     * @return Whether the origin is valid or empty.
     */
    protected isEmptyOrValidOrigin_(origin: string): boolean;
    /**
     * @param value The value to convert.
     * @return A display string representing value.
     */
    protected boolToString_(value: boolean): string;
    /**
     * @param time Time in seconds since epoch.
     * @return A user-friendly string explaining how long ago time
     *     occurred.
     */
    protected lastUseToString_(time: number): string;
    /**
     * @param feature The feature in question.
     * @return A human-readable string representing the feature.
     */
    protected featureToString_(feature: SiteDataFeature | null): string;
    /**
     * @param item The item to retrieve a load time estimate for.
     * @param propertyName Name of the load time estimate to retrieve.
     * @return The requested load time estimate or 'N/A' if
     *     unavailable.
     */
    protected getLoadTimeEstimate_(item: SiteDataEntry, propertyName: string): string;
    /**
     * @param value A value in units of kilobytes, or -1 indicating not
     *     available.
     * @return A human readable string representing value.
     */
    protected kilobytesToString_(value: number): string;
    /**
     * @param value A numeric value or -1, indicating not available.
     * @return A human readable string representing value.
     */
    protected optionalIntegerToString_(value: number): string;
    protected onNewOriginValueChanged_(e: CustomEvent<{
        value: string;
    }>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'database-tab': DatabaseTabElement;
    }
}
export {};
