// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Returns a keyboard event. This event bubbles and is cancellable.
 *
 * @param type The type of keyboard event (such as 'keyup' or 'keydown').
 * @param keyCode The keyCode for the event.
 * @param modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param key The KeyboardEvent.key value for the event.
 */
function keyboardEventFor(type, keyCode, modifiers = [], key = '') {
    modifiers = modifiers || [];
    if (typeof modifiers === 'string') {
        modifiers = [modifiers];
    }
    return new KeyboardEvent(type, {
        bubbles: true,
        cancelable: true,
        composed: true,
        key,
        keyCode,
        altKey: modifiers.includes('alt'),
        ctrlKey: modifiers.includes('ctrl'),
        metaKey: modifiers.includes('meta'),
        shiftKey: modifiers.includes('shift'),
    });
}
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
export function keyEventOn(target, type, keyCode, modifiers, key) {
    target.dispatchEvent(keyboardEventFor(type, keyCode, modifiers, key));
}
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
export function keyDownOn(target, keyCode, modifiers, key) {
    keyEventOn(target, 'keydown', keyCode, modifiers, key);
}
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
export function keyUpOn(target, keyCode, modifiers, key) {
    keyEventOn(target, 'keyup', keyCode, modifiers, key);
}
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
export function pressAndReleaseKeyOn(target, keyCode, modifiers, key) {
    keyDownOn(target, keyCode, modifiers, key);
    window.setTimeout(function () {
        keyUpOn(target, keyCode, modifiers, key);
    }, 1);
}
/**
 * Simulates a complete 'enter' key press by firing a `keydown` keyboard event,
 * followed by an asynchronous `keyup` event on a specific node.
 */
export function pressEnter(target) {
    pressAndReleaseKeyOn(target, 13);
}
/**
 * Simulates a complete 'space' key press by firing a `keydown` keyboard event,
 * followed by an asynchronous `keyup` event on a specific node.
 */
export function pressSpace(target) {
    pressAndReleaseKeyOn(target, 32);
}
