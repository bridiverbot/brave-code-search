import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import './icons.html.js';
import '/strings.m.js';
import type { CrCheckboxElement } from '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface ReportUnsafeSiteAppElement {
    $: {
        includeScreenshotCheckbox: CrCheckboxElement;
    };
}
export declare class ReportUnsafeSiteAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        pageUrl_: {
            type: StringConstructor;
        };
        includeScreenshot_: {
            type: BooleanConstructor;
        };
        screenshotDataUri_: {
            type: StringConstructor;
        };
        isSendingCsdPing_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor pageUrl_: string;
    protected accessor includeScreenshot_: boolean;
    protected accessor screenshotDataUri_: string;
    protected accessor isSendingCsdPing_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    connectedCallback(): Promise<void>;
    firstUpdated(): void;
    protected onIncludeScreenshotCheckedChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onActionButtonClick_(): Promise<void>;
    protected onCancelButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'report-unsafe-site-app': ReportUnsafeSiteAppElement;
    }
}
