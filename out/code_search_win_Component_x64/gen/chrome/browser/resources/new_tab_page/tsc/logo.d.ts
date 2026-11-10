import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import './doodle_icons.html.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { Doodle, DoodleShareChannel, ImageDoodle, Theme } from './new_tab_page.mojom-webui.js';
export declare class LogoElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        /**
         * If true displays the Google logo single-colored.
         */
        singleColored: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        /**
         * Used to determine if we should display a dark mode doodle.
         */
        theme: {
            type: ObjectConstructor;
        };
        loaded_: {
            type: BooleanConstructor;
        };
        doodle_: {
            type: ObjectConstructor;
        };
        imageDoodle_: {
            type: ObjectConstructor;
        };
        showLogo_: {
            type: BooleanConstructor;
        };
        showDoodle_: {
            type: BooleanConstructor;
        };
        doodleBoxed_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        showTightDoodleBoxing_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        useGoogleLogo26_: {
            reflect: boolean;
            type: BooleanConstructor;
        };
        imageUrl_: {
            type: StringConstructor;
        };
        showAnimation_: {
            type: BooleanConstructor;
        };
        showShareDialog_: {
            type: BooleanConstructor;
        };
        imageDoodleTabIndex_: {
            type: NumberConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor singleColored: boolean;
    accessor theme: Theme | null;
    private accessor loaded_;
    protected accessor doodle_: Doodle | null;
    protected accessor imageDoodle_: ImageDoodle | null;
    protected accessor showLogo_: boolean;
    protected accessor showDoodle_: boolean;
    private accessor doodleBoxed_;
    protected accessor showTightDoodleBoxing_: boolean;
    protected accessor useGoogleLogo26_: boolean;
    protected accessor imageUrl_: string;
    protected accessor showAnimation_: boolean;
    protected accessor showShareDialog_: boolean;
    protected accessor imageDoodleTabIndex_: number;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private pageHandler_;
    private imageClickParams_;
    private interactionLogUrl_;
    private shareId_;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private onImageDoodleChange_;
    private computeImageDoodle_;
    private computeShowLogo_;
    private computeShowDoodle_;
    /**
     * @returns The NTP's background color or null if the NTP does not have
     * a single background color, e.g. when a background image is set.
     */
    private computeBackgroundColor_;
    private computeDoodleBoxed_;
    /**
     * Called when a simple or animated doodle was clicked. Starts animation if
     * clicking preview image of animated doodle. Otherwise, opens
     * doodle-associated URL in new tab/window.
     */
    protected onImageClick_(): void;
    protected onImageLoad_(): void;
    private logImageRendered_;
    protected onImageKeydown_(e: KeyboardEvent): void;
    protected onShare_(e: CustomEvent<DoodleShareChannel>): void;
    private computeImageUrl_;
    private computeShowAnimation_;
    protected onShareButtonClick_(e: Event): Promise<void>;
    protected onShareDialogClose_(): void;
    private computeImageDoodleTabIndex_;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-logo': LogoElement;
    }
}
