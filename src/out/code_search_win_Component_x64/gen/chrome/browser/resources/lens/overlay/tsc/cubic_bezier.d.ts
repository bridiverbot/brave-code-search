/**
 * This class calculates a cubic bezier easing function with provided parameters
 * to mimic the functionality of the CSS easing function.
 *
 * This implementation is mainly translated from:
 * ui/gfx/geometry/cubic_bezier.h
 */
export declare class CubicBezier {
    private p1;
    private p2;
    private a;
    private b;
    private c;
    private splineSamples;
    constructor(x1: number, y1: number, x2: number, y2: number);
    solveForY(x: number): number;
    solveCurveX(x: number): number;
    sampleCurveX(t: number): number;
    private sampleCurveDerivativeX;
    private sampleCurveY;
    private initCoefficients;
    private initSpline;
    private toFinite;
}
