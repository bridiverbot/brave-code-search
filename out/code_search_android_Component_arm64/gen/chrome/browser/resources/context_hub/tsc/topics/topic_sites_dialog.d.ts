import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import type { CrDialogElement } from '//resources/cr_elements/cr_dialog/cr_dialog.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback, TopicVisit } from '../context_hub.mojom-webui.js';
import type { TopicItem } from './topic_utils.js';
export interface TopicSitesDialogElement {
    $: {
        dialog: CrDialogElement;
    };
}
export interface DialogSite extends TopicVisit {
    domain: string;
    visitTimes: Array<TopicVisit['visitTime']>;
}
export declare class TopicSitesDialogElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topic: {
            type: ObjectConstructor;
        };
        feedback: {
            type: ObjectConstructor;
        };
        feedbackEnabled_: {
            type: BooleanConstructor;
        };
        sites_: {
            type: ArrayConstructor;
        };
    };
    accessor topic: TopicItem | null;
    accessor feedback: TopicFeedback | null;
    protected accessor feedbackEnabled_: boolean;
    protected accessor sites_: DialogSite[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    showModal(): void;
    close(): void;
    protected getFavicon_(url: string): string;
    protected onSiteClick_(e: Event): void;
    protected isRejected_(site: DialogSite): boolean;
    protected getRejectAriaLabel_(site: DialogSite): string;
    protected onRejectClick_(e: Event): void;
    protected onOpenAllTabsClick_(): void;
    protected onOkClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-sites-dialog': TopicSitesDialogElement;
    }
}
