import '//resources/cr_elements/cr_chip/cr_chip.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_tooltip/cr_tooltip.js';
import './card.js';
import './error_page.js';
import './carousel.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Skill, TopicInfo } from './skill.mojom-webui.js';
import type { BrowseSkillsInitialState } from './skills.mojom-webui.js';
export declare class DiscoverSkillsPageElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        skills_: {
            type: ObjectConstructor;
        };
        searchTerm_: {
            type: StringConstructor;
        };
        selectedCategory_: {
            type: StringConstructor;
        };
        is1PSkillSaving_: {
            type: BooleanConstructor;
        };
        topicHeaders_: {
            type: ObjectConstructor;
        };
    };
    protected accessor skills_: Map<string, Skill[]>;
    protected accessor topicHeaders_: Set<TopicInfo>;
    protected skillsPendingRemoval_: Set<string>;
    protected accessor selectedCategory_: string;
    protected accessor is1PSkillSaving_: boolean;
    protected accessor searchTerm_: string;
    private listenerIds_;
    private proxy_;
    private eventTracker_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onSkillSave_(savedSkill: Skill): void;
    protected shouldDisableSave_(skill: Skill): boolean;
    protected update1PSkills_(state: BrowseSkillsInitialState): void;
    protected getIconForCategory_(category: string): string;
    protected isCategorySelected_(category: string): boolean;
    onSearchChanged(searchTerm: string): void;
    protected filter_(skills: Skill[]): import("./skill.mojom-webui.js").SkillMojoType[];
    protected shouldShowNoSearchResults_(): boolean;
    protected skillsByTopic_(topic: string): Skill[];
    protected getSelectedSkills_(): Skill[];
    protected getAllSkills_(): Skill[];
    protected getOtherCategories_(): string[];
    protected onCategoryClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'discover-skills-page': DiscoverSkillsPageElement;
    }
}
