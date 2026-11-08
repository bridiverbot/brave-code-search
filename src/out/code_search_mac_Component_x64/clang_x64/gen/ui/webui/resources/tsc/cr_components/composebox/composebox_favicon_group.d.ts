import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TabInfo } from '//resources/mojo/components/omnibox/browser/searchbox.mojom-webui.js';
export declare class ComposeboxFaviconGroupElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        tabs: {
            type: ArrayConstructor;
        };
        visibleTabs_: {
            type: ArrayConstructor;
        };
        remainingCount_: {
            type: NumberConstructor;
        };
        submittedTabIds: {
            type: ObjectConstructor;
        };
    };
    accessor tabs: TabInfo[];
    accessor submittedTabIds: Set<number>;
    protected accessor visibleTabs_: TabInfo[];
    protected accessor remainingCount_: number;
    private loadedFavicons_;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private getTabUrlStr_;
    private onTabsChanged_;
    protected isTabLoading_(tab: TabInfo): boolean;
    protected getFaviconUrl_(tab: TabInfo | string | {
        url: string;
        tabId?: number;
    }): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'composebox-favicon-group': ComposeboxFaviconGroupElement;
    }
}
