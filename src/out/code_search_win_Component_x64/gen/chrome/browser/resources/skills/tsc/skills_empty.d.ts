import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export declare class SkillsEmptyElement extends CrLitElement {
    static get is(): string;
    render(): import("chrome://resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'skills-empty': SkillsEmptyElement;
    }
}
