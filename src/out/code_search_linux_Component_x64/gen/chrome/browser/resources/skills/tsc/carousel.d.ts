import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '//resources/cr_elements/icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
export interface SkillsCarouselElement {
    $: {
        carouselContainer: HTMLElement;
        itemsSlot: HTMLSlotElement;
        prevButton: HTMLElement;
        nextButton: HTMLElement;
    };
}
export declare class SkillsCarouselElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    private scroll_;
    protected onPrevClick_(): void;
    protected onNextClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-carousel': SkillsCarouselElement;
    }
}
