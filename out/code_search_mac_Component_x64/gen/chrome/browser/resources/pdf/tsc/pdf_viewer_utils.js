// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { getDeepActiveElement } from 'chrome://resources/js/util.js';
import { TextStyle } from './constants.js';
// 
// LINT.IfChange(HighlighterOpacity)
const HIGHLIGHTER_OPACITY = 0.4;
// LINT.ThenChange(//pdf/pdf_ink_brush.cc:HighlighterOpacity)
// 
// 
const SAVE_TO_DRIVE_ACCOUNT_CHOOSER_URL = 'https://accounts.google.com/AccountChooser';
const SAVE_TO_DRIVE_CONSUMER_MANAGE_STORAGE_URL = 'https://one.google.com/storage' +
    '?utm_source=drive' +
    '&utm_medium=desktop' +
    '&utm_campaign=error_dialog_oos';
const SAVE_TO_DRIVE_DASHER_MANAGE_STORAGE_URL = 'https://drive.google.com/drive/quota';
const SAVE_TO_DRIVE_DRIVE_URL = 'https://drive.google.com';
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier.
 * @return Whether the event has the ctrl key modifier.
 */
export function hasCtrlModifier(e) {
    let hasModifier = e.ctrlKey;
    // 
    hasModifier = e.metaKey; // AKA Command.
    // 
    return hasModifier;
}
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier, and only that modifier.
 * @return Whether the event only has the ctrl key modifier.
 */
export function hasCtrlModifierOnly(e) {
    let metaModifier = e.metaKey;
    // 
    metaModifier = e.ctrlKey;
    // 
    return hasCtrlModifier(e) && !e.shiftKey && !e.altKey && !metaModifier;
}
// 
/**
 * Determines if the event matches the platform shortcut for strikethrough.
 * Alt+Shift+5 on non-Mac, and Cmd+Shift+X on Mac.
 */
function isStrikethroughShortcut(e) {
    // 
    return e.metaKey && e.shiftKey && !e.ctrlKey && !e.altKey &&
        e.key.toLowerCase() === 'x';
    // 
    // 
}
/**
 * Returns the `TextStyle` corresponding to the keyboard shortcut event `e`, or
 * `null` if `e` does not match any text style shortcut.
 */
export function getTextStyleForShortcut(e) {
    if (hasCtrlModifierOnly(e)) {
        switch (e.key.toLowerCase()) {
            case 'b':
                return TextStyle.BOLD;
            case 'i':
                return TextStyle.ITALIC;
            case 'u':
                return TextStyle.UNDERLINE;
            default:
                return null;
        }
    }
    return isStrikethroughShortcut(e) ? TextStyle.STRIKETHROUGH : null;
}
// 
/**
 * Whether keydown events should currently be ignored. Events are ignored when
 * an editable element has focus, to allow for proper editing controls.
 * @return Whether keydown events should be ignored.
 */
export function shouldIgnoreKeyEvents() {
    const activeElement = getDeepActiveElement();
    assert(activeElement);
    return activeElement.isContentEditable ||
        (activeElement.tagName === 'INPUT' &&
            activeElement.type !== 'radio') ||
        activeElement.tagName === 'TEXTAREA';
}
// 
/**
 * Blends `colorValue` with highlighter opacity on a white background.
 * @param colorValue The red, green, or blue value of a color.
 * @returns The new respective red, green, or blue value of a color that has
 * been transformed using the highlighter transparency on a white background.
 */
export function blendHighlighterColorValue(colorValue) {
    return Math.round(colorValue * HIGHLIGHTER_OPACITY + 255 * (1 - HIGHLIGHTER_OPACITY));
}
/**
 * @param color The `Color` in RGB values.
 * @returns A hex-coded color string, formatted as '#ffffff'.
 */
export function colorToHex(color) {
    const rgb = [color.r, color.g, color.b]
        .map(value => value.toString(16).padStart(2, '0'))
        .join('');
    return `#${rgb}`;
}
/**
 * @param hex A hex-coded color string, formatted as '#ffffff'.
 * @returns The `Color` in RGB values.
 */
export function hexToColor(hex) {
    assert(/^#[0-9a-f]{6}$/.test(hex));
    return {
        r: Number.parseInt(hex.substring(1, 3), 16),
        g: Number.parseInt(hex.substring(3, 5), 16),
        b: Number.parseInt(hex.substring(5, 7), 16),
    };
}
/**
 * @returns Whether `color1` and `color2` have the same RGB values or not.
 */
export function colorsEqual(color1, color2) {
    return color1.r === color2.r && color1.g === color2.g &&
        color1.b === color2.b;
}
// 
/* Verifies that the array buffer is suitable for the beginning of a PDF.
 *
 * @param buffer The beginning of data for a PDF.
 */
export function verifyPdfHeader(buffer) {
    const MIN_FILE_SIZE = '%PDF1.0'.length;
    // Verify the first bytes to make sure it's a PDF.
    const bufView = new Uint8Array(buffer);
    assert(bufView.length >= MIN_FILE_SIZE);
    assert(String.fromCharCode(bufView[0], bufView[1], bufView[2], bufView[3]) === '%PDF');
}
// 
function getChooserRequiredUrl(accountEmail, redirectUrl) {
    const url = new URL(SAVE_TO_DRIVE_ACCOUNT_CHOOSER_URL);
    url.searchParams.set('Email', accountEmail);
    url.searchParams.set('faa', '1');
    url.searchParams.set('continue', redirectUrl);
    return url.href;
}
export function getSaveToDriveManageStorageUrl(accountEmail, accountIsManaged) {
    const redirectUrl = accountIsManaged ?
        SAVE_TO_DRIVE_DASHER_MANAGE_STORAGE_URL :
        SAVE_TO_DRIVE_CONSUMER_MANAGE_STORAGE_URL;
    return getChooserRequiredUrl(accountEmail, redirectUrl);
}
export function getSaveToDriveOpenInDriveUrl(accountEmail, driveItemId) {
    const url = new URL(SAVE_TO_DRIVE_DRIVE_URL);
    url.searchParams.set('action', 'locate');
    url.searchParams.set('id', driveItemId);
    return getChooserRequiredUrl(accountEmail, url.href);
}
//  enable_pdf_save_to_drive
