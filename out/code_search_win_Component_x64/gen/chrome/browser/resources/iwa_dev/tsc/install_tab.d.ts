import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * Abstract base class for all tab sub-components in the IWA installation
 * dialog.
 */
export declare abstract class IwaDevInstallTabElement extends CrLitElement {
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    /**
     * Notifies parent component of the tab's current validity state.
     */
    protected notifyValidChanged(): void;
    /**
     * Returns true if the form inputs within the tab are currently valid for
     * submission.
     */
    abstract isValid(): boolean;
    /**
     * Validates and submits the tab form, firing an install request event if
     * valid.
     */
    abstract submit(): void;
}
