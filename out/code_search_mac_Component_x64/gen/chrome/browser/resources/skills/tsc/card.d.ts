import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/cr_tooltip/cr_tooltip.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_auto_img/cr_auto_img.js';
import './icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Skill } from './skill.mojom-webui.js';
import { SkillsManagementAction } from './skill_metrics.mojom-webui.js';
export declare enum CardType {
    USER_SKILL_CARD = "user-skill-card",
    DISCOVER_SKILL_CARD = "discover-skill-card"
}
export interface SkillCardElement {
    $: {
        name: HTMLElement;
        icon: HTMLElement;
    };
}
export declare class SkillCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        skill: {
            type: ObjectConstructor;
        };
        cardType: {
            type: StringConstructor;
        };
        saveDisabled: {
            type: BooleanConstructor;
        };
        hideTooltip: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    accessor skill: Skill;
    accessor cardType: CardType;
    accessor saveDisabled: boolean;
    accessor hideTooltip: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private proxy_;
    protected ariaLabelForSkill_(prefix: string): string;
    protected isDiscoverCard_(): boolean;
    protected getCardBodyText_(): string;
    protected getIllustrationUrl_(): string;
    protected onEditButtonClick_(): void;
    protected onSaveButtonClick_(): void;
    protected onMoreButtonClick_(event: MouseEvent): void;
    protected onCopyButtonClick_(): void;
    protected onDeleteButtonClick_(): void;
    protected logCardAction_(action: SkillsManagementAction): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'skill-card': SkillCardElement;
    }
}
