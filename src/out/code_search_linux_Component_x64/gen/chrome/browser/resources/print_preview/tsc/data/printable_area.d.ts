import type { Coordinate2d } from './coordinate2d.js';
import type { Size } from './size.js';
export declare class PrintableArea {
    private origin_;
    private size_;
    /**
     * Object describing the printable area of a page in the document.
     * @param origin Top left corner of the printable area of the document.
     * @param size Size of the printable area of the document.
     */
    constructor(origin: Coordinate2d, size: Size);
    get origin(): Coordinate2d;
    get size(): Size;
    equals(other: PrintableArea): boolean;
}
