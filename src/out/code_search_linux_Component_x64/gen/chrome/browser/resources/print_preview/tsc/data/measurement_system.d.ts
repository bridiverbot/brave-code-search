/**
 * Enumeration of measurement unit types.
 */
export declare enum MeasurementSystemUnitType {
    METRIC = 0,// millimeters
    IMPERIAL = 1
}
export declare class MeasurementSystem {
    /**
     * The thousands delimiter to use when displaying numbers.
     */
    private thousandsDelimiter_;
    /**
     * The decimal delimiter to use when displaying numbers.
     */
    private decimalDelimiter_;
    /**
     * The measurement system preferences based on the unit type.
     */
    private measurementSystemPrefs_;
    /**
     * Measurement system of the print preview. Used to parse and serialize
     * point measurements into the system's local units (e.g. millimeters,
     * inches).
     * @param thousandsDelimiter Delimiter between thousands digits.
     * @param decimalDelimiter Delimiter between integers and decimals.
     * @param unitType Measurement unit type of the system.
     */
    constructor(thousandsDelimiter: string, decimalDelimiter: string, unitType: MeasurementSystemUnitType);
    get unitSymbol(): string;
    get thousandsDelimiter(): string;
    get decimalDelimiter(): string;
    /**
     * Rounds a value in the local system's units to the appropriate precision.
     */
    roundValue(value: number): number;
    /**
     * @param pts Value in points to convert to local units.
     * @return Value in local units.
     */
    convertFromPoints(pts: number): number;
    /**
     * @param localUnits Value in local units to convert to points.
     * @return Value in points.
     */
    convertToPoints(localUnits: number): number;
}
