import type { Rect } from '../post_message_handler.js';
/**
 * Returns a clip path for the thread frame to clip out the portion of the
 * composebox that is NOT covered by any AIM elements. The function finds the
 * difference between the composebox bounds and the occluders, resulting in only
 * the part of the composebox page that is clickable to the user.
 *
 * @param composeboxBounds The bounds of the composebox relative to the
 *     viewport.
 * @param occluders The bounds of the occluders relative to the viewport.
 * @param padding An additional buffer in pixels to add to the bounds of each
 *     occluder.
 * @return The clip path for the thread frame the cuts out a hold in the
 *     threadframe where the composebox is.
 */
export declare function getNonOccludedClipPath(composeboxBounds: Rect | null, occluders: Rect[], padding: number, viewWidth: number, viewHeight: number, borderRadius?: number): string;
