import './updater_state_card.js';
import './enterprise_companion_state_card.js';
import '//resources/cr_elements/cr_icon/cr_icon.js';
import '../icons.html.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { FilePath } from '//resources/mojo/mojo/public/mojom/base/file_path.mojom-webui.js';
import type { EnterpriseCompanionState, UpdaterState } from '../updater_ui.mojom-webui.js';
export declare class UpdaterStateElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        userUpdaterState: {
            type: ObjectConstructor;
        };
        systemUpdaterState: {
            type: ObjectConstructor;
        };
        enterpriseCompanionState: {
            type: ObjectConstructor;
        };
        error: {
            type: BooleanConstructor;
        };
    };
    accessor userUpdaterState: UpdaterState | null;
    accessor systemUpdaterState: UpdaterState | null;
    accessor enterpriseCompanionState: EnterpriseCompanionState | null;
    accessor error: boolean;
    connectedCallback(): void;
    protected filePathToString(filePath: FilePath): string;
    protected shouldShowSystemUpdaterState(): this is {
        systemUpdaterState: UpdaterState;
    };
    protected shouldShowUserUpdaterState(): this is {
        userUpdaterState: UpdaterState;
    };
    protected shouldShowEnterpriseCompanionState(): this is {
        enterpriseCompanionState: EnterpriseCompanionState;
    };
    protected shouldShowNoUpdatersFound(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'updater-state': UpdaterStateElement;
    }
}
