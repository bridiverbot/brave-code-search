import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { TopicItem } from './topic_utils.js';
export declare class TopicHeroElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        topic: {
            type: ObjectConstructor;
        };
    };
    accessor topic: TopicItem | null;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected getBadgePath_(): string;
    protected getTextIcon_(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'topic-hero': TopicHeroElement;
    }
}
