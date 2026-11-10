import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class IconContainerElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        faviconUrls: {
            type: ArrayConstructor;
        };
        totalTabCount: {
            type: NumberConstructor;
        };
    };
    accessor faviconUrls: string[];
    accessor totalTabCount: number;
    protected getOverflowCount(): number;
    protected getFaviconCells(): string[];
    protected getEmptyCells(): null[];
    protected shouldShowOverflow(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'ntp-icon-container': IconContainerElement;
    }
}
