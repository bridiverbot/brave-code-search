import type { SkColor } from 'chrome://resources/mojo/skia/public/mojom/skcolor.mojom-webui.js';
import type { BackgroundImage } from './new_tab_page.mojom-webui.js';
export declare class BackgroundManager {
    static getInstance(): BackgroundManager;
    static setInstance(newInstance: BackgroundManager): void;
    private backgroundImage_;
    private loadTimeResolver_;
    private url_;
    constructor();
    /**
     * Sets whether the background image should be shown.
     * @param show True, if the background image should be shown.
     */
    setShowBackgroundImage(show: boolean): void;
    /** Sets the background color. */
    setBackgroundColor(color: SkColor): void;
    /** Sets the background image. */
    setBackgroundImage(image: BackgroundImage): void;
    /**
     * Returns promise that resolves with the background image load time.
     *
     * The background image iframe proactively sends the load time as soon as it
     * has loaded. However, this could be before we have installed the message
     * listener in LoadTimeResolver. Therefore, we request the background image
     * iframe to resend the load time in case it has already loaded. With that
     * setup we ensure that the load time is (re)sent _after_ both the NTP top
     * frame and the background image iframe have installed the required message
     * listeners.
     */
    getBackgroundImageLoadTime(): Promise<number>;
}
