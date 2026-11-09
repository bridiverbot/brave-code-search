import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { SkColor } from '//resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
export type ColorSelectedEvent = CustomEvent<{
    color: SkColor;
}>;
export declare class SettingsBraveContentContainersBackgroundChipElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        selected: {
            type: BooleanConstructor;
        };
        backgroundColor: {
            type: StringConstructor;
        };
    };
    accessor selected: boolean;
    accessor backgroundColor: string;
    onChipClick_(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'settings-brave-content-containers-background-chip': SettingsBraveContentContainersBackgroundChipElement;
    }
}
