/**
 * Simulates a random "wiggle" motion using the supplied frequency. Values are
 * calculated stepwise, progressing the simulation based on the current time.
 *
 * The calculated values are roughly in the range [-1, 1].
 *
 * For more information see
 * https://www.schoolofmotion.com/blog/wiggle-expression.
 */
export declare class Wiggle {
    private readonly waveParams;
    /** Wiggle angular frequency (2πf) */
    private angularFrequency;
    /** The internal position of the simulation that is stepped forward */
    private angularPosition;
    /** Time in seconds of previous calculation */
    private previousTimeSeconds?;
    /** Value of the previous calculated wiggle simulation value. */
    private previousWiggleValue;
    constructor(frequency: number);
    getPreviousWiggleValue(): number;
    setFrequency(frequency: number): void;
    /**
     * Calculates the state of the Wiggle simulation for the current time
     *
     * @param timeSeconds Current simulation time in seconds
     */
    calculateNext(timeSeconds: number): number;
}
