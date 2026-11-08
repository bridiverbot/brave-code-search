import './content_setting_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { ContentSettingImageState } from '/shared/toolbar_ui_api_data_model.mojom-webui.js';
export declare class ContentSettingsIconsElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        contentSettingImageStates: {
            type: ArrayConstructor;
        };
    };
    accessor contentSettingImageStates: ContentSettingImageState[];
}
declare global {
    interface HTMLElementTagNameMap {
        'content-settings-icons': ContentSettingsIconsElement;
    }
}
