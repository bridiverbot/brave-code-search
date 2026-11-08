import './file_thumbnail.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { UnguessableToken } from '//resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-webui.js';
import type { ComposeboxFile } from './common.js';
export declare class ComposeboxFileCarouselElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        files: {
            type: ArrayConstructor;
        };
        enableScrolling: {
            type: BooleanConstructor;
            reflect: boolean;
        };
        gradientTopHidden_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
        gradientBottomHidden_: {
            type: BooleanConstructor;
            reflect: boolean;
            attribute: string;
        };
    };
    accessor files: ComposeboxFile[];
    accessor enableScrolling: boolean;
    private accessor gradientTopHidden_;
    private accessor gradientBottomHidden_;
    private resizeObserver_;
    private mutationObserver_;
    private fileCarouselContainer_;
    getThumbnailElementByUuid(uuid: UnguessableToken): HTMLElement | null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private initializeOrUpdateObservers_;
    private toggleGradient;
    private scrollToBottom;
}
declare global {
    interface HTMLElementTagNameMap {
        'cr-composebox-file-carousel': ComposeboxFileCarouselElement;
    }
}
