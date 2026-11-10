import type { HelpBubbleElement } from './help_bubble.js';
import type { BrowserProxy, HelpBubbleParams } from './help_bubble.mojom-webui.js';
import type { HelpBubbleOptions, Trackable } from './help_bubble_controller.js';
/**
 * Internal implementation for help bubble mixins. See HelpBubbleMixinInterface
 * for documentation for public methods.
 */
export declare class HelpBubbleMixinCommon {
    private helpBubbleProxy_;
    private host_;
    private isConnected_;
    /**
     * A map from the name of the native identifier used in the tutorial or
     * IPH definition to the target element's HTML ID.
     *
     * Example entry:
     *   "kHeightenSecuritySettingsElementId" => "toggleSecureMode"
     */
    private helpBubbleControllerById_;
    private helpBubbleListenerIds_;
    private helpBubbleDismissedEventTracker_;
    constructor(proxy: BrowserProxy, host: HTMLElement);
    private get controllers();
    onConnected(): void;
    onDisconnected(): void;
    registerHelpBubble(nativeId: string, trackable: Trackable, options?: HelpBubbleOptions): boolean;
    unregisterHelpBubble(nativeId: string): void;
    private observeControllerAnchor_;
    private unobserveControllerAnchor_;
    isHelpBubbleShowing(): boolean;
    isHelpBubbleShowingForTesting(target: string | HTMLElement): boolean;
    getHelpBubbleForTesting(target: string | HTMLElement): HelpBubbleElement | null;
    private static matchesAnchor_;
    private filterControllersForTesting_;
    getSortedAnchorStatusesForTesting(): Array<[string, boolean]>;
    canShowHelpBubble(anchorId: string): boolean;
    showHelpBubble(params: HelpBubbleParams): void;
    hideHelpBubble(nativeId: string): boolean;
    notifyHelpBubbleAnchorActivated(nativeId: string): boolean;
    notifyHelpBubbleAnchorCustomEvent(nativeId: string, customEvent: string): boolean;
    /**
     * This event is emitted by the TrackedElementManager
     */
    private onAnchorVisibilityChanged_;
    /**
     * This event is emitted by the mojo router
     */
    private onShowHelpBubble_;
    /**
     * This event is emitted by the mojo router
     */
    private onToggleHelpBubbleFocusForAccessibility_;
    /**
     * This event is emitted by the mojo router
     */
    private onHideHelpBubble_;
    /**
     * This event is emitted by the mojo router.
     */
    private onExternalHelpBubbleUpdated_;
    /**
     * This event is emitted by the help-bubble component
     */
    private onHelpBubbleDismissed_;
    /**
     * This event is emitted by the help-bubble component
     */
    private onHelpBubbleTimedOut_;
}
