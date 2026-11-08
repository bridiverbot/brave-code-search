export declare class Size {
    private width_;
    private height_;
    /**
     * Immutable two-dimensional size.
     */
    constructor(width: number, height: number);
    get width(): number;
    get height(): number;
    equals(other: Size): boolean;
}
