import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { File } from '../../file_suggestion.mojom-webui.js';
/**
 * Actions the user can perform within a file suggestion module (Drive,
 * MicrosoftFiles). This enum must match the numbering for NTPFileAction in
 * histogram/enums.xml. These values are persisted to logs. Entries should not
 * be renumbered, removed or reused.
 */
export declare enum FileAction {
    FILE_SUGGESTION_CLICKED = 0,
    SEE_MORE_CLICKED = 1,
    MAX_VALUE = 1
}
export interface FileSuggestionElement {
    $: {
        files: HTMLElement;
    };
}
/**
 * Shared component for file modules, which serve as an inside look to recent
 * activity within a user's Google Drive or Microsoft Sharepoint.
 */
export declare class FileSuggestionElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        files: {
            type: ArrayConstructor;
        };
        moduleName: {
            type: StringConstructor;
        };
        seeMoreUrl: {
            type: StringConstructor;
        };
        seeMoreText: {
            type: StringConstructor;
        };
        seeMoreAriaLabel: {
            type: StringConstructor;
        };
    };
    accessor files: File[];
    accessor moduleName: string;
    accessor seeMoreUrl: string;
    accessor seeMoreText: string;
    accessor seeMoreAriaLabel: string;
    private recordFileAction_;
    protected onFileClick_(e: Event): void;
    protected onSeeMoreClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-file-suggestion': FileSuggestionElement;
    }
}
