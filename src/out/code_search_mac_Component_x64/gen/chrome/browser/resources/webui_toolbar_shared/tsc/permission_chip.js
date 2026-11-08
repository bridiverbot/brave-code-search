// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_icon/cr_icon.js';
import './icons.js';
import { TrackedElementManager } from '//resources/js/tracked_element/tracked_element_manager.js';
import { ensureTransitionEndEvent } from '//resources/js/util.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { HelpBubbleMixinLit } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin_lit.js';
import { AnimationTracker } from './animation_tracker.js';
import { getCss } from './permission_chip.css.js';
import { getHtml } from './permission_chip.html.js';
import { LhsChipIdentifier, PermissionAction, PermissionChipTheme, PermissionPromptStyle } from './toolbar_ui_api_data_model.mojom-webui.js';
const BUTTON_LEFT = 0;
const PermissionChipElementBase = HelpBubbleMixinLit(CrLitElement);
export class PermissionChipElement extends PermissionChipElementBase {
    static get is() {
        return 'permission-chip';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            delegate: { type: Object },
            chipState: { type: Object },
            hasDivider: { type: Boolean, attribute: 'has-divider', reflect: true },
            isFullyCollapsed_: { type: Boolean },
        };
    }
    #delegate_accessor_storage = null;
    get delegate() { return this.#delegate_accessor_storage; }
    set delegate(value) { this.#delegate_accessor_storage = value; }
    #chipState_accessor_storage = null;
    get chipState() { return this.#chipState_accessor_storage; }
    set chipState(value) { this.#chipState_accessor_storage = value; }
    #hasDivider_accessor_storage = false;
    get hasDivider() { return this.#hasDivider_accessor_storage; }
    set hasDivider(value) { this.#hasDivider_accessor_storage = value; }
    #isFullyCollapsed__accessor_storage = true;
    get isFullyCollapsed_() { return this.#isFullyCollapsed__accessor_storage; }
    set isFullyCollapsed_(value) { this.#isFullyCollapsed__accessor_storage = value; }
    isTracking_ = false;
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.isTracking_) {
            this.isTracking_ = false;
            // The HelpBubbleMixin's disconnected callback will unregister the
            // bubbles.
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('chipState')) {
            this.updateColors_();
            this.onChipStateChanged_();
            this.updateTracking_();
        }
    }
    onChipStateChanged_() {
        if (!this.chipState || !this.chipState.isVisible) {
            this.isFullyCollapsed_ = true;
            return;
        }
        if (this.chipState.isFullyCollapsed === this.isFullyCollapsed_) {
            return;
        }
        this.isFullyCollapsed_ = this.chipState.isFullyCollapsed;
        const isCollapsed = this.isFullyCollapsed_;
        // In Native Views, animation state transitions are perfectly
        // synchronized. In WebUI, the state change updates the DOM, which
        // triggers a CSS transition. We must wait for this transition to
        // complete before telling C++ the animation is over. If we fire this
        // Mojo IPC synchronously, C++ will instantly hide the element and
        // kill the animation prematurely.
        const fireIpc = () => {
            if (isCollapsed) {
                this.delegate?.onChipCollapseAnimationEnded(this.getIdentifier_());
            }
            else {
                this.delegate?.onChipExpandAnimationEnded(this.getIdentifier_());
            }
        };
        // When animations are disabled (e.g. prefers-reduced-motion), Native Views
        // (AnimatingLayoutManager) transitions state synchronously. We purposely
        // fire the IPC immediately here (without waiting for DOM updates or CSS
        // transitions) to enforce correct timeline parity with the backend and
        // prevent race conditions.
        if (!AnimationTracker.showAnimations) {
            fireIpc();
            return;
        }
        const messageEl = this.$.message;
        messageEl.addEventListener('transitionend', fireIpc, { once: true });
        // Fallback in case there is no CSS transition (e.g., hidden
        // element) or the tab is backgrounded, which might delay or
        // suppress transitionend. `ensureTransitionEndEvent` fetches the
        // duration from the CSS.
        ensureTransitionEndEvent(messageEl);
    }
    // Dynamically start/stop tracking based on visibility. Since the chips are
    // permanently in the DOM to support exit animations, tracking them in
    // connectedCallback would register them immediately upon connection. This
    // occurs before the WebUI receives its initial sync state from C++, sending
    // Mojo messages prematurely and breaking unit tests (like Sync Enabled)
    // that assert 0 tracked elements before sync.
    updateTracking_() {
        const id = this.id === 'request-chip' ?
            'PermissionChipView::kPermissionRequestChipElementId' :
            'PermissionChipView::kIndicatorChipElementId';
        const shouldTrack = !!(this.chipState && this.chipState.isVisible);
        if (shouldTrack && !this.isTracking_) {
            this.registerHelpBubble(id, this, {
                onHighlightChanged: (highlighted) => {
                    // Manually toggle the DOM attribute to bypass Lit's asynchronous
                    // update batching, ensuring the style updates synchronously.
                    // TODO(crbug.com/502598627): Re-evaluate how big the visual flash
                    // problem is, and whether we really need to manually toggle it or
                    // if we can use a reflected Lit property.
                    this.toggleAttribute('anchor-highlighted', highlighted);
                },
            });
            this.isTracking_ = true;
        }
        else if (!shouldTrack && this.isTracking_) {
            this.unregisterHelpBubble(id);
            this.isTracking_ = false;
        }
    }
    getIdentifier_() {
        return this.id === 'request-chip' ? LhsChipIdentifier.kPermissionRequest :
            LhsChipIdentifier.kPermissionIndicator;
    }
    onPointerenter_() {
        this.delegate?.onChipPointerEntered(this.getIdentifier_());
    }
    onPointerleave_() {
        this.delegate?.onChipPointerExited(this.getIdentifier_());
    }
    onPointercancel_() {
        this.onPointerleave_();
    }
    onPointerdown_(e) {
        if (e.button !== BUTTON_LEFT) {
            return;
        }
        this.delegate?.onChipMousePressed(this.getIdentifier_());
    }
    onClick_(e) {
        if (!this.chipState) {
            return;
        }
        TrackedElementManager.getInstance().notifyElementActivated(this);
        // Note:'click' event dispatches using PointerEvents. Keyboard clicks
        // (Enter/Space) also dispatch PointerEvents, but they have an empty
        // pointerType (""). We only want to suppress true pointer interactions
        // (mouse, touch, pen).
        this.delegate?.onChipClicked(this.getIdentifier_(), e.pointerType !== '', this.chipState.stateToken);
    }
    // Computes the foreground and background colors for the chip based on its
    // logical state (theme, user decision, prompt style).
    // Replicating this logic in TypeScript instead of passing explicit colors
    // over Mojo is the standard WebUI approach. It preserves the separation of
    // concerns: C++ dictates the logical state, and WebUI CSS handles the actual
    // color resolution (automatically managing light/dark mode variations).
    // This logic must strictly mirror the Native Views implementation found in:
    // - PermissionChipView::GetForegroundColor()
    // - PermissionChipView::GetBackgroundColor()
    updateColors_() {
        if (!this.chipState) {
            return;
        }
        let bgColor = 'var(--color-omnibox-chip-background)';
        let fgColor = 'var(--color-omnibox-chip-foreground-normal-visibility)';
        switch (this.chipState.theme) {
            case PermissionChipTheme.kActivityIndicator:
            case PermissionChipTheme.kInUseActivityIndicator:
                bgColor =
                    'var(--color-omnibox-chip-in-use-activity-indicator-background)';
                fgColor =
                    'var(--color-omnibox-chip-in-use-activity-indicator-foreground)';
                break;
            case PermissionChipTheme.kBlockedActivityIndicator:
                bgColor =
                    'var(--color-omnibox-chip-blocked-activity-indicator-background)';
                fgColor =
                    'var(--color-omnibox-chip-blocked-activity-indicator-foreground)';
                break;
            case PermissionChipTheme.kOnSystemBlockedActivityIndicator:
                bgColor = 'var(--color-omnibox-chip-' +
                    'on-system-blocked-activity-indicator-background)';
                fgColor = 'var(--color-omnibox-chip-' +
                    'on-system-blocked-activity-indicator-foreground)';
                break;
            case PermissionChipTheme.kLowVisibility:
                fgColor = 'var(--color-omnibox-chip-foreground-low-visibility)';
                break;
            case PermissionChipTheme.kNormalVisibility:
            default:
                break;
        }
        // Apply native fallback color logic for foreground text and icon.
        // This logic only applies if the theme isn't one of the special indicators.
        // (In native, GetForegroundColor() returns early for the indicators above).
        if (this.chipState.theme === PermissionChipTheme.kNormalVisibility ||
            this.chipState.theme === PermissionChipTheme.kLowVisibility) {
            if (this.chipState.promptStyle === PermissionPromptStyle.kQuietChip) {
                fgColor = 'var(--color-omnibox-chip-foreground-low-visibility)';
            }
            switch (this.chipState.userDecision) {
                case PermissionAction.kGranted:
                case PermissionAction.kGrantedOnce:
                    fgColor = 'var(--color-omnibox-chip-foreground-normal-visibility)';
                    break;
                case PermissionAction.kDenied:
                case PermissionAction.kDismissed:
                case PermissionAction.kIgnored:
                case PermissionAction.kRevoked:
                    fgColor = 'var(--color-omnibox-chip-foreground-low-visibility)';
                    break;
                default:
                    break;
            }
            if (this.chipState.shouldShowBlockedIcon) {
                fgColor = 'var(--color-omnibox-chip-foreground-low-visibility)';
            }
        }
        this.style.setProperty('--chip-bg-color', bgColor);
        this.style.setProperty('--chip-fg-color', fgColor);
    }
    getIconName_() {
        if (!this.chipState || !this.chipState.iconName) {
            return '';
        }
        let iconName = '';
        switch (this.chipState.iconName) {
            case 'kLocationOnIcon':
            case 'kLocationOnChromeRefreshOldIcon':
                iconName = 'location_on';
                break;
            case 'kLocationOffIcon':
            case 'kLocationOffChromeRefreshOldIcon':
                iconName = 'location_off';
                break;
            case 'kVideocamIcon':
            case 'kVideocamChromeRefreshOldIcon':
                iconName = 'videocam';
                break;
            case 'kVideocamOffIcon':
            case 'kVideocamOffChromeRefreshOldIcon':
                iconName = 'videocam_off';
                break;
            case 'kMicIcon':
            case 'kMicChromeRefreshOldIcon':
                iconName = 'mic';
                break;
            case 'kMicOffIcon':
            case 'kMicOffChromeRefreshOldIcon':
                iconName = 'mic_off';
                break;
            case 'kNotificationsIcon':
            case 'kNotificationsChromeRefreshOldIcon':
                iconName = 'notifications';
                break;
            case 'kNotificationsOffIcon':
            case 'kNotificationsOffChromeRefreshOldIcon':
                iconName = 'notifications_off';
                break;
            default:
                break;
        }
        return iconName ? `webui-toolbar-shared:${iconName}` : '';
    }
}
customElements.define(PermissionChipElement.is, PermissionChipElement);
