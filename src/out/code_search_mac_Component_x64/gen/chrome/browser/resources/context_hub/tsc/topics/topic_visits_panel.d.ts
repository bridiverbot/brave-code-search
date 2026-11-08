import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicFeedback, TopicVisit } from '../context_hub.mojom-webui.js';
import type { TopicItem } from './topic_utils.js';
export type RejectedVisitsChangeEvent = CustomEvent<{
    rejectedVisits: TopicFeedback['rejectedVisits'];
}>;
export interface VisitRow extends TopicVisit {
    domain: string;
    time: string;
}
export declare class TopicVisitsPanelElement extends CrLitElement {
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
        visits_: {
            type: ArrayConstructor;
        };
    };
    accessor topic: TopicItem | null;
    accessor feedback: TopicFeedback | null;
    protected accessor visits_: VisitRow[];
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getFavicon_(url: string): string;
    protected isRejected_(visit: TopicVisit): boolean;
    protected getRejectAriaLabel_(visit: VisitRow): string;
    protected onRejectClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-visits-panel': TopicVisitsPanelElement;
    }
}
