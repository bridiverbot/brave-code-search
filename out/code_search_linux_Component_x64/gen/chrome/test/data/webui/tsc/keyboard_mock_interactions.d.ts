export type Modifier = 'alt' | 'ctrl' | 'meta' | 'shift';
export type ModifiersParam = Modifier | Modifier[];
/**
 * Fires a keyboard event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param target The node to fire the event on.
 * @param type The type of keyboard event (such as 'keyup' or
 * 'keydown').
 * @param keyCode The keyCode for the event.
 * @param modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param key The KeyboardEvent.key value for the event.
 */
export declare function keyEventOn(target: Element, type: string, keyCode: number, modifiers?: ModifiersParam, key?: string): void;
/**
 * Fires a 'keydown' event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param target The node to fire the event on.
 * @param keyCode The keyCode for the event.
 * @param modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param key The KeyboardEvent.key value for the event.
 */
export declare function keyDownOn(target: Element, keyCode: number, modifiers?: ModifiersParam, key?: string): void;
/**
 * Fires a 'keyup' event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param target The node to fire the event on.
 * @param keyCode The keyCode for the event.
 * @param modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param key The KeyboardEvent.key value for the event.
 */
export declare function keyUpOn(target: Element, keyCode: number, modifiers?: ModifiersParam, key?: string): void;
/**
 * Simulates a complete key press by firing a `keydown` keyboard event, followed
 * by an asynchronous `keyup` event on a specific node.
 *
 * @param target The node to fire the event on.
 * @param keyCode The keyCode for the event.
 * @param modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param key The KeyboardEvent.key value for the event.
 */
export declare function pressAndReleaseKeyOn(target: Element, keyCode: number, modifiers?: ModifiersParam, key?: string): void;
/**
 * Simulates a complete 'enter' key press by firing a `keydown` keyboard event,
 * followed by an asynchronous `keyup` event on a specific node.
 */
export declare function pressEnter(target: Element): void;
/**
 * Simulates a complete 'space' key press by firing a `keydown` keyboard event,
 * followed by an asynchronous `keyup` event on a specific node.
 */
export declare function pressSpace(target: Element): void;
