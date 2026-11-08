import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon/cr_icon.js';
import 'chrome://resources/cr_elements/icons.html.js';
import './card.js';
import './icons.html.js';
import './error_page.js';
import './skills_empty.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Skill } from './skill.mojom-webui.js';
export declare class UserSkillsPageElement extends CrLitElement {
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
        addSkillButtonDisabled_: {
            type: BooleanConstructor;
        };
        shouldDisableBrowseSkillsPage_: {
            type: BooleanConstructor;
        };
        webuiRoundedIconsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor skills_: Map<string, Skill>;
    protected accessor addSkillButtonDisabled_: boolean;
    protected accessor searchTerm_: string;
    protected accessor shouldDisableBrowseSkillsPage_: boolean;
    protected accessor webuiRoundedIconsEnabled_: boolean;
    private proxy_;
    private listenerIds_;
    private addSkillButtonDisabledTimer_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateSkills_;
    private removeSkill_;
    onSearchChanged(searchTerm: string): void;
    protected filteredSkills_(): Skill[];
    protected shouldShowNoSearchResults_(): boolean;
    protected onExploreButtonClick_(): void;
    protected onAddSkillButtonClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-skills-page': UserSkillsPageElement;
    }
}
