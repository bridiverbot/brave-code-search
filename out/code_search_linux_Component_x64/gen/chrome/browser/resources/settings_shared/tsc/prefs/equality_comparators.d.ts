/**
 * Checks whether two values are recursively equal. Only compares serializable
 * data (primitives, serializable arrays and serializable objects).
 * @param val1 Value to compare.
 * @param val2 Value to compare with val1.
 * @return Whether the values are recursively equal.
 */
export declare function deepEqual(val1: unknown, val2: unknown): boolean;
