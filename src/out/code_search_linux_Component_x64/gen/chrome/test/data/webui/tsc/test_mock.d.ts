type Constructor<T> = new (...args: any[]) => T;
type PromiseFunction<T, K extends keyof T> = T[K] extends (...args: any[]) => Promise<any> ? K : never;
/**
 * A base class for all test mocks to inherit from. Provides helper
 * methods for allowing tests to track when a method was called.
 *
 * Must pass a base class T for the mock.
 */
export declare class TestMock<T> {
    private resolverMap_;
    /**
     * @param methodNames Names of all methods whose calls need to be tracked.
     */
    private constructor();
    /**
     * Creates a |TestMock|, which has mock functions for all functions of
     * class |clazz|.
     */
    static fromClass<T>(clazz: Constructor<T>): (T & TestMock<T>);
    /**
     * Creates a mock implementation for each method name. These mocks allow tests
     * to either set a result when the mock is called using
     * |setResultFor(methodName)|, or set a result mapper function that will be
     * invoked when a method is called using |setResultMapperFor(methodName)|.
     */
    private mockMethods_;
    /**
     * Called by subclasses when a tracked method is called from the code that
     * is being tested.
     * @param args Arguments to be forwarded to the testing code, useful for
     *     checking whether the proxy method was called with the expected
     *     arguments.
     * @return If set the result registered via |setResult[Mapper]For|.
     */
    methodCalled(methodName: keyof T, ...args: any[]): any;
    /**
     * @return A promise that is resolved when the given method is called.
     */
    whenCalled(methodName: keyof T): Promise<any>;
    /**
     * Resets the PromiseResolver associated with the given method.
     */
    resetResolver(methodName: keyof T): void;
    /**
     * Resets all PromiseResolvers.
     */
    reset(): void;
    /**
     * Get number of times method is called.
     */
    getCallCount(methodName: keyof T): number;
    /**
     * Returns the arguments of calls made to |method|.
     */
    getArgs(methodName: keyof T): any[];
    /**
     * Sets a function |resultMapper| that is called with the original arguments
     * passed to method named |methodName|. This allows a test to return a unique
     * object each method invovation or have the returned value be different based
     * on the arguments.
     */
    setResultMapperFor(methodName: keyof T, resultMapper: Function): void;
    /**
     * Sets the return value of a method.
     */
    setResultFor(methodName: keyof T, value: any): void;
    /**
     * Sets the return value of a method to be a Promise that resolves with
     * |value|.
     */
    setPromiseResolveFor<K extends keyof T>(methodName: K & PromiseFunction<T, K>, value?: any): void;
    /**
     * Sets the return value of a method to be a Promise that rejects with
     * |value|.
     */
    setPromiseRejectFor<K extends keyof T>(methodName: K & PromiseFunction<T, K>, value?: any): void;
    /**
     * Try to give programmers help with mistyped methodNames.
     */
    private getMethodData_;
    /**
     * Creates a new |MethodData| for |methodName|.
     */
    private createMethodData_;
}
export {};
