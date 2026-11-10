import type { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import type { OverflowMenuItem } from '/shared/toolbar_ui_api.mojom-webui.js';
import type { ResponsiveControl } from './responsive_control.js';
type Constructor<T> = new (...args: any[]) => T;
export declare class CollapsibleLabelButton extends EventTarget implements ResponsiveControl {
    collapsed: boolean;
    shouldBeShown(): boolean;
    setToMinWidth(): void;
    setToPreferredWidth(): void;
    expandUpToPreferredWidth(): void;
    controlsToAddToOverflowMenu(): OverflowMenuItem[];
    protected hasLabel_(): boolean;
    protected shouldShowLabel_(): boolean;
}
/**
 * A mixin for toolbar chip buttons (such as the Glic button and App Menu
 * button) that collapse their text label down to an icon-only button when
 * toolbar space is constrained, without ever disappearing into the overflow
 * menu.
 *
 * Expects the host CrLitElement to contain a `#button` child (typically a
 * `<toolbar-chip-button id="button">`). Subclasses should override
 * `hasLabel_()` (and `shouldBeShown()` if the button can be hidden) and
 * dispatch a `request-layout` event when their label or visibility state
 * changes.
 */
export declare const CollapsibleLabelButtonMixin: <T extends Constructor<CrLitElement>>(superClass: T) => T & Constructor<CollapsibleLabelButton>;
export {};
