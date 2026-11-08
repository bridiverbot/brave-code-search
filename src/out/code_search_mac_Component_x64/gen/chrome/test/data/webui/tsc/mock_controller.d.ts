/**
 * Create a mock function that records function calls and validates against
 * expectations.
 */
export declare class MockMethod {
    /** List of signatures for function calls. */
    private calls_;
    /** List of expected call signatures. */
    private expectations_;
    /** Value returned from call to function. */
    returnValue: any | undefined;
    /** List of arguments for callback function. */
    callbackData: any[][];
    /** Name of the function being replaced. */
    functionName: string | null;
    constructor();
    /**
     * Adds an expected call signature.
     * @param args Expected arguments for the function call.
     */
    addExpectation(...args: any[]): void;
    /**
     * Adds a call signature.
     */
    recordCall(args: any[]): void;
    get calls(): any[][];
    /**
     * Verifies that the function is called the expected number of times and with
     * the correct signature for each call.
     */
    verifyMock(): void;
    /**
     * Verifies that the observed function arguments match expectations.
     * Override if strict equality is not required.
     * @param index Canonical index of the function call. Unused in the
     *     base implementation, but provides context that may be useful for
     *     overrides.
     * @param expected The expected arguments.
     * @param observed The observed arguments.
     */
    validateCall(_index: number, expected: any[], observed: any[]): void;
    /**
     * Test if arg is a function.
     * @param arg The argument to test.
     * @return True if arg is not function type.
     */
    private notFunction_;
}
/**
 * Controller for mocking methods. Tracks calls to mocked methods and verifies
 * that call signatures match expectations.
 */
export declare class MockController {
    /**
     * Original functions implementations, which are restored when |reset| is
     * called.
     */
    private overrides_;
    /** List of registered mocks. */
    private mocks_;
    /**
     * Creates a mock function.
     * @param parent Optional parent object for the function.
     * @param functionName Optional name of the function being
     *     mocked. If the parent and function name are both provided, the
     *     mock is automatically substituted for the original and replaced on
     *     reset.
     */
    createFunctionMock(parent?: {
        [key: string]: any;
    }, functionName?: string): MockMethod;
    /**
     * Validates all mocked methods. An exception is thrown if the
     * expected and actual calls to a mocked function to not align.
     */
    verifyMocks(): void;
    /**
     * Discard mocks reestoring default behavior.
     */
    reset(): void;
}
