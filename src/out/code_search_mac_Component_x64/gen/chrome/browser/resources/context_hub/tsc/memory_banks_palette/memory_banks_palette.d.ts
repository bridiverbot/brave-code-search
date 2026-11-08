import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_search_field/cr_search_field.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/icons.html.js';
import '../icons.html.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { MemoryBankEntry, MemoryBankFileAttachment } from '../context_hub.mojom-webui.js';
export interface DisplayItem {
    id: string;
    type: 'collection' | 'tag' | 'memory';
    title: string;
    snippet: string;
    collection: string;
    tags: string[];
    url: string;
    relativeTime?: string;
    entries: MemoryBankEntry[];
}
export declare class MemoryBanksPaletteElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        entries: {
            type: ArrayConstructor;
        };
        collections: {
            type: ArrayConstructor;
        };
        tags: {
            type: ArrayConstructor;
        };
        displayedItems: {
            type: ArrayConstructor;
        };
        searchQuery: {
            type: StringConstructor;
        };
        filterType: {
            type: StringConstructor;
        };
        attachedFilesMap: {
            type: ObjectConstructor;
        };
        expandedIndex: {
            type: NumberConstructor;
        };
        toastMessage: {
            type: StringConstructor;
        };
        toastSubtitle: {
            type: StringConstructor;
        };
        toastDuration: {
            type: NumberConstructor;
        };
        toastIsError: {
            type: BooleanConstructor;
        };
    };
    accessor entries: MemoryBankEntry[];
    accessor collections: string[];
    accessor tags: string[];
    accessor displayedItems: DisplayItem[];
    accessor searchQuery: string;
    accessor filterType: 'all' | 'collections' | 'tags' | 'memories';
    accessor attachedFilesMap: Map<string, MemoryBankFileAttachment>;
    accessor expandedIndex: number;
    accessor toastMessage: string;
    accessor toastSubtitle: string;
    accessor toastDuration: number;
    accessor toastIsError: boolean;
    private isClipboardOperationPending;
    private listenerIds;
    private sortedCollections;
    private sortedTags;
    private sortedEntries;
    private entriesByCollection;
    private entriesByTag;
    private rtf;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private fetchData;
    private fetchCollectionsAndTags;
    private parsePaletteSearchQuery;
    private formatRelativeTime;
    private updateCachedEntryStructures;
    private computeDisplayedItems;
    protected onFilterAllClick(): void;
    protected onFilterCollectionsClick(): void;
    protected onFilterTagsClick(): void;
    protected onFilterMemoriesClick(): void;
    private getItemFromEvent;
    protected onCopyClick(e: Event): void;
    protected onAttachClick(e: Event): void;
    protected isHttpOrHttpsUrl(urlStr: string): boolean;
    protected onOpenSourceClick(e: Event): Promise<void>;
    protected onTogglePreviewClick(e: Event): void;
    protected shouldShowPreviewToggle(snippet: string): boolean;
    protected onSearchChanged(e: CustomEvent<string>): void;
    protected onCloseClick(): void;
    protected onSettingsClick(): Promise<void>;
    protected isItemAttached(id: string): boolean;
    protected getPasteShortcut(): string;
    protected getEmptyStateTitle(): string;
    protected getEmptyStateSubtitle(): string;
    protected getHostname(urlStr: string): string;
    private showToastNotification;
    private copyItem;
    private buildFileAttachment;
    private attachItem;
    private clearAllAttachments;
    private syncAttachmentsToClipboard;
    private showAttachmentSuccessToast;
}
declare global {
    interface HTMLElementTagNameMap {
        'memory-banks-palette': MemoryBanksPaletteElement;
    }
}
