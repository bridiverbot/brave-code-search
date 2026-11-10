import { CustomElement } from '//resources/js/custom_element.js';
export declare class DiagnoseInfoTableElement extends CustomElement {
    static get is(): string;
    static get template(): string | TrustedHTML;
    private tableTitle_;
    private tableHead_;
    private tableBody_;
    private tableFooter_;
    private lastTableEntries_;
    constructor();
    hideTable(): void;
    visible(): boolean;
    updateTable(tableName: string, entries: Array<Record<string, string>>, footer?: string | undefined): void;
    outputTable(): Record<string, Array<Record<string, string>>>;
}
declare global {
    interface HTMLElementTagNameMap {
        'diagnose-info-table': DiagnoseInfoTableElement;
    }
}
