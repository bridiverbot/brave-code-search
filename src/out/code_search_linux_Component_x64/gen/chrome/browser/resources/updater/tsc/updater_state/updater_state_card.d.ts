import '../event_list/raw_event_details.js';
import '../icons.html.js';
import '../scope_icon.js';
import '//resources/cr_elements/cr_collapse/cr_collapse.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { Scope } from '../event_history.js';
export declare class UpdaterStateCardElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        scope: {
            type: StringConstructor;
        };
        version: {
            type: StringConstructor;
        };
        inactiveVersions: {
            type: ArrayConstructor;
        };
        lastChecked: {
            type: ObjectConstructor;
        };
        lastStarted: {
            type: ObjectConstructor;
        };
        installPath: {
            type: StringConstructor;
        };
        headingLabel: {
            type: StringConstructor;
        };
        formattedLastChecked: {
            type: StringConstructor;
        };
        formattedLastCheckedRelative: {
            type: StringConstructor;
        };
        formattedLastStarted: {
            type: StringConstructor;
        };
        formattedLastStartedRelative: {
            type: StringConstructor;
        };
    };
    accessor scope: Scope | undefined;
    accessor version: string | undefined;
    accessor inactiveVersions: string[];
    accessor lastChecked: Date | null;
    accessor lastStarted: Date | null;
    accessor installPath: string | undefined;
    protected accessor headingLabel: string;
    protected accessor formattedLastChecked: string;
    protected accessor formattedLastCheckedRelative: string;
    protected accessor formattedLastStarted: string;
    protected accessor formattedLastStartedRelative: string;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private computeHeadingLabel;
    private computeFormattedLastChecked;
    private computeFormattedLastStarted;
    protected onInstallPathClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'updater-state-card': UpdaterStateCardElement;
    }
}
