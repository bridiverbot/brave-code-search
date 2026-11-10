import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import './composebox_tab_favicon.js';
import './icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { ComposeboxFile } from './common.js';
export declare class ComposeboxFileThumbnailElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        file: {
            type: ObjectConstructor;
        };
        isAndroid_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        isUploading_: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        tabFaviconChipsToCoinsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor file: ComposeboxFile;
    getIsUploadingForTesting(): boolean;
    protected lensSendRawFileMediaTypesEnabled_: boolean;
    protected accessor tabFaviconChipsToCoinsEnabled_: boolean;
    protected accessor isAndroid_: boolean;
    protected accessor isUploading_: boolean;
    protected shouldUsePdfIcon_(): boolean;
    protected isVideo_(): boolean;
    protected isImage_(): boolean;
    protected isSupportedVideo_(): boolean;
    protected hasVisualThumbnail_(): boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    protected onRemoveButtonClick_(): void;
    protected getDeleteFileButtonTitle_(): string;
    protected getFormattedUrl_(): string | null;
    /**
     * Formats filenames longer than `MAX_DISPLAY_LENGTH` by inserting an ellipsis
     * (`...`) in the middle of the base filename so that short extensions
     * (e.g. `.pdf`, `.docx`) are preserved at the end of the string.
     *
     * For files without an extension or with long extensions (e.g. `.gitignore`),
     * the original filename is returned untouched to rely on CSS truncation.
     */
    protected getFormattedFileName_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-file-thumbnail': ComposeboxFileThumbnailElement;
    }
}
