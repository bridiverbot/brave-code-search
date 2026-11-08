import type { Destination } from './destination.js';
export declare class DestinationMatch {
    private idRegExp_;
    private displayNameRegExp_;
    /**
     * A set of key parameters describing a destination used to determine
     * if two destinations are the same.
     * @param idRegExp Match destination's id.
     * @param displayNameRegExp Match destination's displayName.
     */
    constructor(idRegExp: RegExp | null, displayNameRegExp: RegExp | null);
    match(destination: Destination): boolean;
}
