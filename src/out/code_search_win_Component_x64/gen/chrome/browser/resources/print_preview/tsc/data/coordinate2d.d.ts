export declare class Coordinate2d {
    private x_;
    private y_;
    /**
     * Immutable two dimensional point in space. The units of the dimensions are
     * undefined.
     * @param x X-dimension of the point.
     * @param y Y-dimension of the point.
     */
    constructor(x: number, y: number);
    get x(): number;
    get y(): number;
    equals(other: Coordinate2d): boolean;
}
