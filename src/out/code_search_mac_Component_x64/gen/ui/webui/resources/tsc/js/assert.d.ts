/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
export declare function assert<T>(value: T, message?: string): asserts value;
export declare function assertInstanceof<T>(value: unknown, type: {
    new (...args: any[]): T;
}, message?: string): asserts value is T;
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
export declare function assertNotReached(message?: string): never;
/**
 * Statically and dynamically assert that a code should not be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(value: SomeEnum): number {
 *     switch (value) {
 *       case ENUM_FIRST_OF_TWO:
 *         return 1;
 *       case ENUM_LAST_OF_TWO:
 *         return 2;
 *       default:
 *         assertNotReachedCase(value);
 *     }
 *   }
 *
 * Helper function that should be preferred over assertNotReached in switch/case
 * statements referring to enums, because it results in a build time error if the
 * 'case' statements are not exhaustive. At runtime it behaves identically to
 * assertNotReached.
 */
export declare function assertNotReachedCase(_param: never, message?: string): never;
/**
 * Verify |value| is not null or undefined.
 */
export declare function assertNonNull<T>(value: T, message?: string): asserts value is NonNullable<T>;
