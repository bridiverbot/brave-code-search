import type { FindShortcutListener } from 'chrome://resources/cr_elements/find_shortcut_manager.js';
import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
type Constructor<T> = new (...args: any[]) => T;
/**
 * Used to determine how to handle find shortcut invocations.
 */
export declare const FindShortcutMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<FindShortcutListener>;
export {};
