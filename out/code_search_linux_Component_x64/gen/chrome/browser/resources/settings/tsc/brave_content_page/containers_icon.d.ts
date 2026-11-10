import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { Icon } from '../containers.mojom-webui.js';
export type IconSelectedEvent = CustomEvent<{
    icon: Icon;
}>;
export declare class SettingsBraveContentContainersIconElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        icon: {
            type: NumberConstructor;
        };
        backgroundColor: {
            type: StringConstructor;
        };
        selected: {
            type: BooleanConstructor;
        };
    };
    accessor icon: Icon;
    protected getLeo(): string;
    accessor backgroundColor: string;
    accessor selected: boolean;
    handleIconClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-containers-icon': SettingsBraveContentContainersIconElement;
    }
}
