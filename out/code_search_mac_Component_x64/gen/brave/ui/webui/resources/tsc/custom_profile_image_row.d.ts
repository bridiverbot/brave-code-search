import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { CSSResultGroup } from '//resources/lit/v3_0/lit.rollup.js';
export interface BrCustomProfileImageRowElement {
    $: {
        fileInput: HTMLInputElement;
    };
}
/** Shared custom-profile image control with a session-only local preview. */
export declare class BrCustomProfileImageRowElement extends CrLitElement {
    static get is(): string;
    static get styles(): CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        hideTitle: {
            type: BooleanConstructor;
            attribute: string;
            reflect: boolean;
        };
        hasValidationError_: {
            type: BooleanConstructor;
            state: boolean;
        };
        localPreviewUrl_: {
            type: StringConstructor;
            state: boolean;
        };
    };
    accessor hideTitle: boolean;
    protected accessor hasValidationError_: boolean;
    protected accessor localPreviewUrl_: string;
    private uploadAttemptId_;
    protected hasPreview_(): boolean;
    protected actionLabel_(): string;
    protected actionTooltip_(): string;
    disconnectedCallback(): void;
    protected onUploadClick_(): void;
    protected onRemoveClick_(): void;
    protected onFileChange_(event: Event): void;
    private clearLocalPreview_;
    private replaceLocalPreview_;
    private showValidationError_;
    private revokeLocalPreviewUrl_;
}
declare global {
    interface HTMLElementTagNameMap {
        'br-custom-profile-image-row': BrCustomProfileImageRowElement;
    }
}
