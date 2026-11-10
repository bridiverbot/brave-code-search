/**
 * value The value to check.
 * message Additional error message.
 */
export declare function assertTrue(value: boolean, message?: string): asserts value;
/**
 * value The value to check.
 * message Additional error message.
 */
export declare function assertFalse(value: boolean, message?: string): void;
/**
 * value1 The first operand.
 * value2 The second operand.
 * message Additional error message.
 */
export declare function assertGE(value1: number, value2: number, message?: string): void;
/**
 * @param value1 The first operand.
 * @param value2 The second operand.
 * @param message Additional error message.
 */
export declare function assertGT(value1: number, value2: number, message?: string): void;
/**
 * @param expected The expected value.
 * @param actual The actual value.
 * @param message Additional error message.
 */
export declare function assertEquals(expected: any, actual: any, message?: string): void;
export declare function assertDeepEquals(expected: any, actual: any, message?: string): void;
/**
 * @param value1 The first operand.
 * @param value2 The second operand.
 * @param message Additional error message.
 */
export declare function assertLE(value1: number, value2: number, message?: string): void;
/**
 * @param value1 The first operand.
 * @param value2 The second operand.
 * @param message Additional error message.
 */
export declare function assertLT(value1: number, value2: number, message?: string): void;
/**
 * @param expected The expected value.
 * @param actual The actual value.
 * @param tolerance The maximum difference between the values.
 * @param message Additional error message.
 */
export declare function assertNear(expected: number, actual: number, tolerance: number, message?: string): void;
/**
 * @param expected The expected value.
 * @param actual The actual value.
 * @param message Additional error message.
 */
export declare function assertNotEquals(expected: any, actual: any, message?: string): void;
/**
 * @param expected The expected value.
 * @param actual The actual value.
 * @param message Additional error message.
 */
export declare function assertNotDeepEquals(expected: any, actual: any, message?: string): void;
/**
 * @param message Additional error message.
 */
export declare function assertNotReached(message?: string): never;
/**
 * @param expectedOrConstructor The expected Error constructor, partial or
 *     complete error message string, or RegExp to test the error message.
 * @param message Additional error message.
 */
export declare function assertThrows(testFunction: () => void, expectedOrConstructor?: (ErrorConstructor | string | RegExp), message?: string): void;
/**
 * Verifies that the contents of the expected and observed arrays match.
 * expected The expected result.
 * actual The actual result.
 */
export declare function assertArrayEquals(expected: any[], actual: any[]): void;
export declare function assertStringContains(expected: string, contains: string): void;
export declare function assertStringExcludes(expected: string, excludes: string): void;
/**
 * @param value The value to check if strictly equals null (value === null).
 * @param message Optional error message.
 */
export declare function assertNull(value: any, message?: string): void;
export declare function assertNotSameOrderedMembers<T>(set1: T[], set2: T[], message?: string): void;
