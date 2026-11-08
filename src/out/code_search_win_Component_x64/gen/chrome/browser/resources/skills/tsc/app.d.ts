import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_elements/cr_page_selector/cr_page_selector.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import '//resources/cr_elements/cr_drawer/cr_drawer.js';
import './icons.html.js';
import './user_skills_page.js';
import './discover_skills_page.js';
import './error_page.js';
import './sidebar.js';
import type { CrDrawerElement } from '//resources/cr_elements/cr_drawer/cr_drawer.js';
import type { CrToolbarElement } from '//resources/cr_elements/cr_toolbar/cr_toolbar.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { ErrorType } from './error_page.js';
import type { SkillsSidebarElement } from './sidebar.js';
import { Page } from './sidebar.js';
export interface SkillsAppElement {
    $: {
        toolbar: CrToolbarElement;
        drawer: CrDrawerElement;
        drawerMenu: SkillsSidebarElement;
    };
}
export declare class SkillsAppElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selectedPage_: {
            type: StringConstructor;
        };
        narrow_: {
            type: BooleanConstructor;
        };
        isDrawerOpen_: {
            type: BooleanConstructor;
        };
        isSkillsEnabled_: {
            type: BooleanConstructor;
        };
    };
    protected accessor selectedPage_: Page;
    protected accessor narrow_: boolean;
    protected accessor isDrawerOpen_: boolean;
    protected accessor isSkillsEnabled_: boolean;
    private eventTracker_;
    private proxy_;
    private listenerIds_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    protected getErrorType_(): ErrorType | null;
    protected onCrToolbarMenuClick_(): void;
    protected onSearchChanged_(e: CustomEvent<string>): void;
    protected onNarrowChanged_(e: CustomEvent<{
        value: boolean;
    }>): void;
    protected onDrawerClose_(): void;
    protected shouldShowToolbarMenu_(): boolean;
    private onPathChanged_;
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-app': SkillsAppElement;
    }
}
