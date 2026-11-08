/**
 * @fileoverview Typedef to allow augmentation of Data objects sent from C++ to
 * JS for chrome://downloads.
 */
import type { Data } from './downloads.mojom-webui.js';
export interface MojomData extends Data {
    hideDate?: boolean;
}
