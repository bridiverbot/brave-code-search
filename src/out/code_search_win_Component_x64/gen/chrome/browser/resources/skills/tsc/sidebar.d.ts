import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
interface MenuItem {
    icon: string;
    name: string;
    page: Page;
}
export declare enum Page {
    USER_SKILLS = "yourSkills",
    DISCOVER_SKILLS = "browse"
}
export declare class SkillsSidebarElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedPage: {
            type: StringConstructor;
        };
        menuItems: {
            type: ArrayConstructor;
        };
    };
    accessor menuItems: MenuItem[];
    protected accessor selectedPage: Page;
    protected onIronActivate_(e: CustomEvent<{
        item: HTMLAnchorElement;
    }>): void;
    protected onMenuItemClick_(e: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-sidebar': SkillsSidebarElement;
    }
}
export {};
