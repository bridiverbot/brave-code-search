/**
 * Observes an HTML attribute and fires a promise when it matches a given
 * value.
 */
export declare function whenAttributeIs(target: HTMLElement, attributeName: string, attributeValue: any): Promise<void>;
/**
 * Observes an HTML element and fires a promise when the check function is
 * satisfied.
 */
export declare function whenCheck(target: HTMLElement, check: () => boolean): Promise<void>;
/**
 * Converts an event occurrence to a promise.
 * @return A promise firing once the event occurs.
 */
export declare function eventToPromise<K extends keyof HTMLElementEventMap>(eventType: K, target: HTMLElement): Promise<HTMLElementEventMap[K]>;
export declare function eventToPromise<K extends keyof WindowEventMap>(eventType: K, target: Window): Promise<WindowEventMap[K]>;
export declare function eventToPromise<E extends Event = Event>(eventType: string, target: Element | EventTarget | Window): Promise<E>;
/**
 * Returns whether or not the element specified is visible.
 */
export declare function isVisible(element: Element | null): boolean;
/**
 * Searches the DOM of the parentEl element for a child matching the provided
 * selector then checks the visibility of the child.
 */
export declare function isChildVisible(parentEl: Element, selector: string, checkLightDom?: boolean): boolean;
/**
 * Queries |selector| on |element|'s shadow root and returns the resulting
 * element if there is any.
 */
export declare function $$<E extends HTMLElement = HTMLElement>(element: HTMLElement, selector: string): E | null;
/**
 * Returns whether the |element|'s style |property| matches the expected value.
 */
export declare function hasStyle(element: Element, property: string, expected: string): boolean;
/**
 * Helper method to locally add a breakpoint to a test and automatically pause
 * execution once it is hit, allowing further debugging via the DevTools, like
 * stepping through the code.
 *
 * Note: DO NOT commit such calls into the repository.
 *
 * Specifically in order to use it, follow the steps below:
 *
 *  1) Add an `await launchDebugger();` statement right before the line of
 *     interest.
 *  2) [Optional] Change test() to test.only() to only run the relevant test
 *     case.
 *  3) Launch the test with all of the following command line flags
 *     --enable-pixel-output-in-tests
 *     --ui-test-action-timeout=1000000
 *     --auto-open-devtools-for-tabs
 *     --gtest_filter=MyTest.Foo
 *
 *     Once the test launches, you should see a DevTools window, with the code
 *     paused at the 'debugger;' statement below.
 *  4) Click the "Step out" icon in the DevTools Sources panel to step out of
 *     this helper function and into the actual test code of interest. Continue
 *     debugging as needed.
 *
 *  Note that the timeout is necessary because 'debugger;' statements are a
 *  no-op if DevTools is not open, and opening DevTools with the
 *  --auto-open-devtools-for-tabs flag takes a bit of time. The default value
 *  seems to work for most tests, but can be overridden with a larger value if
 *  more time is needed in your environment.
 */
export declare function launchDebugger(timeout?: number): Promise<void>;
/**
 * When dealing with CrLitElement instances, prefer this over using the
 * `updateComplete` Promise, since it guarantees that microtasks queued by all
 * other Lit elements have executed, as well as any updates that would be
 * triggered by those updates, and so on.
 */
export declare function microtasksFinished(): Promise<void>;
