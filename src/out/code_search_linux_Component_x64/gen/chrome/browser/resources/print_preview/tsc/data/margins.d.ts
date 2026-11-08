/**
 * Enumeration of the orientations of margins.
 */
export declare enum CustomMarginsOrientation {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left"
}
/**
 * Must be kept in sync with the C++ MarginType enum in
 * printing/print_job_constants.h.
 */
export declare enum MarginsType {
    DEFAULT = 0,
    NO_MARGINS = 1,
    MINIMUM = 2,
    CUSTOM = 3
}
/**
 * Keep in sync with the C++ kSettingMargin... values in
 * printing/print_job_constants.h.
 */
export interface MarginsSetting {
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
}
type MarginsObject = {
    [K in CustomMarginsOrientation]: number;
};
export declare class Margins {
    /**
     * Backing store for the margin values in points. The numbers are stored as
     * integer values, because that is what the C++ `printing::PageMargins` class
     * expects.
     */
    private value_;
    /**
     * Creates a Margins object that holds four margin values in points.
     */
    constructor(top: number, right: number, bottom: number, left: number);
    /**
     * @param orientation Specifies the margin value to get.
     * @return Value of the margin of the given orientation.
     */
    get(orientation: CustomMarginsOrientation): number;
    /**
     * @param orientation Specifies the margin to set.
     * @param value Updated value of the margin in points to modify.
     * @return A new copy of |this| with the modification made to the specified
     *     margin.
     */
    set(orientation: CustomMarginsOrientation, value: number): Margins;
    /**
     * @param other The other margins object to compare against.
     * @return Whether this margins object is equal to another.
     */
    equals(other: Margins | null): boolean;
    /** @return A serialized representation of the margins. */
    serialize(): MarginsObject;
    private clone_;
}
export {};
