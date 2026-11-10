import '//resources/cr_elements/cr_icon/cr_icon.js';
import '//resources/cr_components/cr_lottie/cr_lottie.js';
import './fingerprint_icons.html.js';
import type { CrLottieElement } from '//resources/cr_components/cr_lottie/cr_lottie.js';
import type { CrIconElement } from '//resources/cr_elements/cr_icon/cr_icon.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
/**
 * The dark-mode fingerprint icon displayed temporarily each time a user scans
 * their fingerprint and persistently once the enrollment process is complete.
 */
export declare const FINGERPRINT_SCANNED_ICON_DARK: string;
/**
 * The light-mode fingerprint icon displayed temporarily each time a user scans
 * their fingerprint and persistently once the enrollment process is complete.
 */
export declare const FINGERPRINT_SCANNED_ICON_LIGHT: string;
export declare const FINGERPRINT_CHECK_DARK_URL: string;
export declare const FINGERPRINT_CHECK_LIGHT_URL: string;
/**
 * The dark-mode color of the progress circle background: Google Grey 700.
 */
export declare const PROGRESS_CIRCLE_BACKGROUND_COLOR_DARK: string;
/**
 * The light-mode color of the progress circle background: Google Grey 200.
 */
export declare const PROGRESS_CIRCLE_BACKGROUND_COLOR_LIGHT: string;
/**
 * The dark-mode color of the setup progress arc: Google Blue 400.
 */
export declare const PROGRESS_CIRCLE_FILL_COLOR_DARK: string;
/**
 * The light-mode color of the setup progress arc: Google Blue 500.
 */
export declare const PROGRESS_CIRCLE_FILL_COLOR_LIGHT: string;
export interface FingerprintProgressArcElement {
    $: {
        canvas: HTMLCanvasElement;
        fingerprintScanned: CrIconElement;
        scanningAnimation: CrLottieElement;
    };
}
export declare class FingerprintProgressArcElement extends CrLitElement {
    static get is(): string;
    static get styles(): import("//resources/lit/v3_0/lit.rollup.js").CSSResultGroup;
    render(): import("//resources/lit/v3_0/lit.rollup.js").TemplateResult<1>;
    static get properties(): {
        circleRadius: {
            type: NumberConstructor;
        };
        autoplay: {
            type: BooleanConstructor;
        };
        scale_: {
            type: NumberConstructor;
        };
        isComplete_: {
            type: BooleanConstructor;
        };
    };
    accessor circleRadius: number;
    accessor autoplay: boolean;
    private accessor scale_;
    private accessor isComplete_;
    private isDarkModeActive_;
    private eventTracker_;
    private progressAnimationIntervalId_;
    private progressPercentDrawn_;
    private updateTimerId_;
    /**
     * Updates the current state to account for whether dark mode is enabled.
     */
    private onDarkModeChanged_;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Reset the element to initial state, when the enrollment just starts.
     */
    reset(): void;
    /**
     * Animates the progress circle. Animates an arc that starts at the top of
     * the circle to prevPercentComplete, to an arc that starts at the top of the
     * circle to currPercentComplete.
     * @param prevPercentComplete The previous progress indicates the start angle
     *     of the arc we want to draw.
     * @param currPercentComplete The current progress indicates the end angle of
     *    the arc we want to draw.
     * @param isComplete Indicate whether enrollment is complete.
     */
    setProgress(prevPercentComplete: number, currPercentComplete: number, isComplete: boolean): void;
    /**
     * Controls the animation based on the value of |shouldPlay|.
     * @param shouldPlay Will play the animation if true else pauses it.
     */
    setPlay(shouldPlay: boolean): void;
    isComplete(): boolean;
    /**
     * Draws an arc on the canvas element around the center with radius
     * |circleRadius|.
     * @param startAngle The start angle of the arc we want to draw.
     * @param endAngle The end angle of the arc we want to draw.
     * @param color The color of the arc we want to draw. The string is
     *     in the format rgba(r',g',b',a'). r', g', b' are values from [0-255]
     *     and a' is a value from [0-1].
     */
    private drawArc_;
    /**
     * Draws a circle on the canvas element around the center with radius
     * |circleRadius|. The first |currentPercent| of the circle, starting at the
     * top, is drawn with |PROGRESS_CIRCLE_FILL_COLOR|; the remainder of the
     * circle is drawn |PROGRESS_CIRCLE_BACKGROUND_COLOR|.
     * @param currentPercent A value from [0-100] indicating the
     *     percentage of progress to display.
     */
    private drawProgressCircle_;
    /**
     * Updates the lottie animation taking into account the current state and
     * whether dark mode is enabled.
     */
    private updateAnimationAsset_;
    /**
     * Updates the fingerprint-scanned icon based on whether dark mode is enabled.
     */
    private updateIconAsset_;
    private cancelAnimations_;
    /**
     * Show animation for enrollment completion.
     */
    private animateScanComplete_;
    /**
     * Show animation for enrollment in progress.
     */
    private animateScanProgress_;
    /**
     * Clear the canvas of any renderings.
     */
    private clearCanvas_;
    /**
     * Update the size and position of the animation images.
     */
    private updateImages_;
    /**
     * Resize the icon based on the scale and place it in the center of the
     * fingerprint progress circle.
     */
    private resizeAndCenterIcon_;
    /**
     * Resize the check mark based on the scale and place it in the bottom-right
     * corner of the fingerprint progress circle.
     */
    private resizeCheckMark_;
}
declare global {
    interface HTMLElementTagNameMap {
        'fingerprint-progress-arc': FingerprintProgressArcElement;
    }
}
