import type { PointF } from '//resources/mojo/ui/gfx/geometry/mojom/geometry.mojom-webui.js';
import type { Word } from './text.mojom-webui.js';
/**
 * Helper function that implements hit testing for words. A hit is used to
 * determine the users intent when their mouse is not on a specific word.
 *
 * @param words The list of words to check for a hit with
 * @param target The point normalized to image coordinates to check for a hit.
 * @return The best hit, null if no matches are found.
 */
export declare function bestHit(words: Word[], target: PointF): Word | null;
