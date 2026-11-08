import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
declare const DataExportDoneElementBase: typeof CrLitElement & (new (...args: any[]) => import("./support_tool_page_mixin_lit.js").SupportToolPageMixinLitInterface);
export declare class DataExportDoneElement extends DataExportDoneElementBase {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        path_: {
            type: StringConstructor;
        };
    };
    protected accessor path_: string;
    private browserProxy_;
    protected onFilePathClick_(): void;
    setPath(path: string): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-export-done': DataExportDoneElement;
    }
}
export {};
