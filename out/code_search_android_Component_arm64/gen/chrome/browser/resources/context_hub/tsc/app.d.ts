import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import '//resources/cr_elements/icons.html.js';
import './icons.html.js';
import './memory_bank_chat/memory_bank_chat.js';
import './memory_banks/memory_banks.js';
import './record_replay/record_replay.js';
import './smart_search/smart_search.js';
import './tab_groups/tab_groups.js';
import './taskbox/ai_taskbox.js';
import './topics/topics_view.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export type ViewType = 'launchpad' | 'memory-banks' | 'tab-groups' | 'memory-bank-chat' | 'topics' | 'jumpstart' | 'record-replay';
export declare class ContextHubAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        currentView_: {
            type: StringConstructor;
        };
    };
    protected accessor currentView_: ViewType;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onHashChange_;
    protected onSelectedChanged_(e: CustomEvent<{
        value: ViewType;
    }>): void;
    protected onSelectorClick_(e: MouseEvent): void;
    protected getCurrentViewElement_(): string | TrustedHTML;
}
declare global {
    interface HTMLElementTagNameMap {
        'context-hub-app': ContextHubAppElement;
    }
}
