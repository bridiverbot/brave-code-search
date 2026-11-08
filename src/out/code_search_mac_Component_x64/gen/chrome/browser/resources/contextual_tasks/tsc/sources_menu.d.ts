import './icons.html.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '//resources/cr_elements/cr_url_list_item/cr_url_list_item.js';
import type { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import type { ContextInfo } from './contextual_tasks_toolbar.mojom-webui.js';
export interface SourcesMenuElement {
    $: {
        menu: CrActionMenuElement;
    };
}
export declare class SourcesMenuElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("chrome://resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contextInfos: {
            type: ArrayConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor contextInfos: ContextInfo[];
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private toolbarBrowserProxy_;
    private isUnboundedMenuEnabled_;
    showAt(target: HTMLElement): Promise<void>;
    close(): void;
    private getContextInfoFromEvent_;
    protected onTabClick_(e: Event): void;
    protected onFileClick_(e: Event): void;
    protected onImageClick_(e: Event): void;
    protected faviconUrl_(url: string): string;
    protected getHostname_(url: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'contextual-tasks-sources-menu': SourcesMenuElement;
    }
}
