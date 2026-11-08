export declare class TestBrowserProxy {
    private resolverMap_;
    /**
     * @param methodNames Names of all methods whose calls need to be tracked.
     */
    constructor(methodNames?: string[]);
    /**
     * Called by subclasses when a tracked method is called from the code that
     * is being tested.
     * @param args Arguments to be forwarded to the testing code, useful for
     *     checking whether the proxy method was called with the expected
     *     arguments.
     */
    methodCalled(methodName: string, ...args: any[]): void;
    /**
     * @return A promise that is resolved when the given method is called.
     */
    whenCalled(methodName: string): Promise<any>;
    /**
     * Resets the PromiseResolver associated with the given method.
     */
    resetResolver(methodName: string): void;
    /**
     * Resets all PromiseResolvers.
     */
    reset(): void;
    /**
     * Get number of times method is called.
     */
    getCallCount(methodName: string): number;
    /**
     * Returns the arguments of calls made to |method|.
     */
    getArgs(methodName: string): any[];
    /**
     * Try to give programmers help with mistyped methodNames.
     */
    private getMethodData_;
    /**
     * Creates a new |MethodData| for |methodName|.
     */
    private createMethodData_;
}
