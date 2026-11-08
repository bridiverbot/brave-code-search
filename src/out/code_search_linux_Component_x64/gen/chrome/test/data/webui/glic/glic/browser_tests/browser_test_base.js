// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Hot Tip! Generate a tsconfig.json file to get language server support. Run:
// ash/webui/personalization_app/tools/gen_tsconfig.py --root_out_dir out/pc \
//   --gn_target chrome/test/data/webui/glic:build_ts
import { WebClientMode } from '/glic/glic_api/glic_api.js';
import { ObservableValue, Subject } from '/glic/observable.js';
import { TaskQueue } from '/glic/task_queue.js';
import { createGlicHostRegistryOnLoad } from '../api_boot.js';
let maxTimeoutEndTime = performance.now() + 10000;
export const longWaitTimeMs = 120000;
export function getTestName() {
    let testName = new URL(window.location.href).searchParams.get('test');
    if (testName?.startsWith('DISABLED_')) {
        testName = testName.substring('DISABLED_'.length);
    }
    const lastSlashIndex = testName?.lastIndexOf('/');
    if (lastSlashIndex !== -1) {
        testName = testName ? testName.substring(0, lastSlashIndex) : null;
    }
    return testName;
}
export function mapObservable(src, mapping) {
    const result = new Subject();
    src.subscribe((v) => {
        (async () => {
            result.next(await mapping(v));
        })();
    });
    return result;
}
// Creates a queue of promises from an observable.
export class SequencedSubscriber {
    signals = [];
    readIndex = 0;
    writeIndex = 0;
    subscriber;
    // The last value read from `next()`, or undefined if none was read.
    current;
    // A promise that resolves when the observable is completed.
    completed;
    // A promise that resolves when the observable emits an error.
    errorPromise;
    constructor(observable) {
        const completedResolvers = Promise.withResolvers();
        const errorResolvers = Promise.withResolvers();
        this.completed = completedResolvers.promise;
        this.errorPromise = errorResolvers.promise;
        if (observable.subscribeObserver) {
            this.subscriber = observable.subscribeObserver({
                next: this.change.bind(this),
                error: (err) => {
                    this.error(err);
                    errorResolvers.resolve(err);
                },
                complete: completedResolvers.resolve,
            });
        }
        else {
            this.subscriber = observable.subscribe(this.change.bind(this));
        }
    }
    async next() {
        // Wrapping the returned value with `waitFor` improves failure logs
        // on timeout.
        this.current = {
            some: await waitFor(this.getSignal(this.readIndex++).promise),
        };
        return this.current.some;
    }
    /** Returns true if all values have been read. */
    isEmpty() {
        return this.readIndex >= this.writeIndex;
    }
    unsubscribe() {
        this.subscriber.unsubscribe();
    }
    waitForValue(targetValue) {
        return this.waitFor(v => v === targetValue);
    }
    waitForComplete() {
        return waitFor(this.completed, undefined, 'waitForComplete timed out');
    }
    waitForError() {
        return waitFor(this.errorPromise, undefined, 'waitForError timed out');
    }
    // Waits for `condition` to return true.
    // If `condition` throws, `waitFor()` will allow that error to be thrown,
    // failing the test.
    // If `condition` returns an error, or returns false, `waitFor()` will keep
    // trying.
    // On timeout, the last error returned from `condition` is printed to help
    // diagnose test failures.
    async waitFor(condition) {
        let lastValueSaw = undefined;
        let lastError;
        let evalCount = 0;
        if (this.current !== undefined) {
            const conditionResult = await condition(this.current.some);
            evalCount++;
            if (conditionResult instanceof Error) {
                lastError = conditionResult;
            }
            else if (conditionResult) {
                return this.current.some;
            }
            lastValueSaw = { some: this.current.some };
        }
        while (true) {
            let val;
            try {
                val = await this.next();
            }
            catch (e) {
                if (lastValueSaw !== undefined) {
                    let errorSuffix = '';
                    if (lastError) {
                        errorSuffix = `, last evaluation produced an error: ${lastError}`;
                    }
                    console.warn(`waitFor() failed, last value saw ${evalCount} values, last value was ${JSON.stringify(lastValueSaw)}${errorSuffix}`);
                }
                else {
                    console.warn('waitFor() failed, saw no values emitted');
                }
                throw e;
            }
            const conditionResult = await condition(val);
            evalCount++;
            lastError = undefined;
            if (conditionResult instanceof Error) {
                lastError = conditionResult;
            }
            else if (conditionResult) {
                return val;
            }
            lastValueSaw = { some: val };
            console.info(`waitFor saw and ignored ${JSON.stringify(val)}`);
        }
    }
    change(val) {
        this.getSignal(this.writeIndex++).resolve(val);
    }
    error(err) {
        this.getSignal(this.writeIndex++).reject(err);
    }
    getSignal(index) {
        while (this.signals.length <= index) {
            this.signals.push(Promise.withResolvers());
        }
        return this.signals[index];
    }
}
export function observeSequence(observable) {
    return new SequencedSubscriber(observable);
}
// A dummy web client.
export class WebClient {
    host;
    firstOpened = Promise.withResolvers();
    initializedPromise = Promise.withResolvers();
    onNotifyPanelWasClosed = () => { };
    onStopMicrophone = () => { };
    panelOpenState = ObservableValue.withValue(false);
    panelOpenStateKind = ObservableValue.withNoValue();
    panelOpenData = ObservableValue.withNoValue();
    invokeData = ObservableValue.withNoValue();
    onCheckResponsive = () => Promise.resolve();
    async invoke(options) {
        this.invokeData.assignAndSignal(options);
    }
    async initialize(glicBrowserHost) {
        this.host = glicBrowserHost;
        glicBrowserHost.experimentalTriggering?.()
            ?.uploadEncryptedScreenshotRequests?.()
            ?.subscribe((request) => {
            this.lastUploadedScreenshot = request.screenshot;
            request.uploadComplete(this.mockFileToken);
        });
        glicBrowserHost.experimentalTriggering?.()
            ?.confirmationResponses?.()
            ?.subscribe((request) => {
            this.confirmationResponseReceived.resolve(request.response);
            if (this.completeConfirmationResponses) {
                request.onComplete(this.mockConfirmationApplied);
            }
        });
        this.initializedPromise.resolve();
    }
    async notifyPanelWillOpen(panelOpeningData) {
        this.panelOpenState.assignAndSignal(true);
        this.panelOpenStateKind.assignAndSignal(checkDefined(panelOpeningData.panelState?.kind));
        this.panelOpenData.assignAndSignal(panelOpeningData);
        this.firstOpened.resolve();
        const openPanelInfo = {
            startingMode: WebClientMode.TEXT,
        };
        return openPanelInfo;
    }
    async notifyPanelWasClosed() {
        this.onNotifyPanelWasClosed();
        this.panelOpenState.assignAndSignal(false);
    }
    async stopMicrophone() {
        this.onStopMicrophone();
    }
    checkResponsive() {
        return Promise.resolve();
    }
    waitForFirstOpen() {
        return this.firstOpened.promise;
    }
    waitForInitialize() {
        return this.initializedPromise.promise;
    }
    lastUploadedScreenshot = null;
    get lastUploadedScreenshotPayload() {
        return this.lastUploadedScreenshot ?
            new Uint8Array(this.lastUploadedScreenshot.data) :
            null;
    }
    mockFileToken = 'mock-file-token-12345';
    // Resolved with the opaque payload of the first confirmation response
    // received from the browser.
    confirmationResponseReceived = Promise.withResolvers();
    waitForConfirmationResponse() {
        return this.confirmationResponseReceived.promise;
    }
    mockConfirmationApplied = true;
    // When false, the client receives confirmation responses but never calls
    // onComplete(), simulating a client which drops the result.
    completeConfirmationResponses = true;
}
export const glicHostRegistry = Promise.withResolvers();
export class BrowserControl {
    testStepper;
    constructor(testStepper) {
        this.testStepper = testStepper;
    }
    async closeTab(tabId) {
        return this.testStepper.doCommand({ command: 'close-tab', tabId });
    }
    async execJsInTab(tabId, script) {
        return this.testStepper.doCommand({ command: 'exec-js-in-tab', tabId, script });
    }
    async navigateTab(tabId, url) {
        return this.testStepper.doCommand({ command: 'navigate-tab', tabId, url });
    }
    async navigateActiveTab(url) {
        return this.testStepper.doCommand({ command: 'navigate-tab', url });
    }
    async parseActionsResult(resultBuffer) {
        const base64 = (new Uint8Array(resultBuffer)).toBase64();
        return this.testStepper.doCommand({ command: 'parse-actions-result', actionsResult: base64 });
    }
    async makeWaitAction(taskId, durationMs, tabId) {
        const base64 = await this.testStepper.doCommand({ command: 'make-wait-action', taskId, durationMs, tabId });
        return Uint8Array.fromBase64(base64).buffer;
    }
    async makeNavigateAction(taskId, url, tabId) {
        const base64 = await this.testStepper.doCommand({ command: 'make-navigate-action', taskId, url, tabId });
        return Uint8Array.fromBase64(base64).buffer;
    }
    async makeAttemptOtpFillingAction(taskId, nodeId, documentIdentifier, forSignin, otpType, tabId) {
        const base64 = await this.testStepper.doCommand({
            command: 'make-attempt-otp-filling-action',
            taskId,
            tabId,
            nodeId,
            documentIdentifier,
            forSignin,
            otpType,
        });
        return Uint8Array.fromBase64(base64).buffer;
    }
}
export class ApiTestFixtureBase {
    testStepper;
    clientValue;
    testStepLabel;
    testStepCount;
    browserControl;
    // Available only after ExecuteJsTest() is called.
    initData;
    // Test parameters passed to `ExecuteJsTest()`. This is undefined until
    // ExecuteJsTest() is called.
    testParams;
    constructor(testStepper) {
        this.testStepper = testStepper;
        this.browserControl = new BrowserControl(testStepper);
        this.testStepCount = 1;
        this.testStepLabel = `step #${this.testStepCount} (single or first)`;
    }
    // Return to the C++ side, and wait for it to call ContinueJsTest() to
    // continue execution in the JS test. Optionally, pass data to the C++ side.
    async advanceToNextStep(data) {
        this.testStepLabel =
            `in between steps ${this.testStepCount} and ${this.testStepCount + 1}`;
        await this.testStepper.nextStep(data);
        this.testStepCount += 1;
        this.testStepLabel = `step #${this.testStepCount}`;
    }
    // Sets up the web client. This is called when the web contents loads,
    // before `ExecuteJsTest()`.
    async setUpClient() {
        this.setUpWithClient(this.createWebClient());
    }
    async setUpWithClient(client) {
        const registry = await glicHostRegistry.promise;
        this.clientValue = client;
        await registry.registerWebClient(client);
        assertTrue(!!this.clientValue);
    }
    // Performs setup for the test, called after `setUpClient()`.
    async setUpTest() { }
    // Creates the web client. Allows a fixture to use a different implementation.
    createWebClient() {
        return new WebClient();
    }
    get host() {
        const h = this.client.host;
        assertTrue(!!h);
        return h;
    }
    get browser() {
        return this.browserControl;
    }
    get client() {
        assertTrue(!!this.clientValue);
        return this.clientValue;
    }
    getStepLabel() {
        return this.testStepLabel;
    }
    getStepCount() {
        return this.testStepCount;
    }
    getUrl(path) {
        return new URL(path, this.initData.embeddedTestServerUrl).href;
    }
    getHttpsUrl(path) {
        const baseUrl = this.initData?.embeddedHttpsTestServerUrl ??
            this.initData.embeddedTestServerUrl;
        return new URL(path, baseUrl).href;
    }
    getTestUrl(path) {
        return this.getUrl('/test_data/' + path);
    }
    async doBrowserCommand(command) {
        return this.testStepper.doCommand(command);
    }
}
function findTestFixture(testFixtures, testName) {
    for (const fixture of testFixtures) {
        if (Object.getOwnPropertyNames(fixture.prototype).includes(testName)) {
            return fixture;
        }
    }
    return undefined;
}
// Runs a test.
class TestRunner {
    testName;
    testFixtures;
    nextStepPromise = Promise
        .withResolvers();
    continuePromise = Promise.withResolvers();
    fixture;
    testDone;
    testFound = false;
    stepFailures = [];
    // Commands and next-step processing must be done in sequence.
    commandQueue = new TaskQueue();
    constructor(testName, testFixtures) {
        this.testName = testName;
        this.testFixtures = testFixtures;
        console.info(`TestRunner(${testName})`);
    }
    async setUp() {
        let fixtureCtor = findTestFixture(this.testFixtures, this.testName);
        if (!fixtureCtor) {
            // Note: throwing an exception here will not make it to the c++ side.
            // Wait until later to throw an error.
            console.error(`Test case not found: ${this.testName}`);
            this.testName = 'testDoNothing';
            fixtureCtor = findTestFixture(this.testFixtures, this.testName);
        }
        else {
            this.testFound = true;
        }
        this.fixture = (new fixtureCtor(this));
        return await this.fixture.setUpClient();
    }
    recordTestFailure(error) {
        this.stepFailures.push(error);
    }
    // Sets up the test and starts running it.
    async run(maxTimeoutMs, payload, initData) {
        assertTrue(this.testFound, `Test not found: "${this.testName}"`);
        maxTimeoutEndTime = performance.now() + maxTimeoutMs;
        console.info(`Running test ${this.testName} with payload ${JSON.stringify(payload)}`);
        this.fixture.testParams = payload;
        this.fixture.initData = initData;
        await this.fixture.setUpTest();
        this.testDone = this.fixture[this.testName]();
        return this.continueTest();
    }
    // If `run()` or `stepComplete()` returns 'next-step', this function is called
    // to continue running the test.
    stepComplete(payload) {
        console.info(`Continue ${this.testName}`);
        if (payload !== null) {
            this.fixture.testParams = payload;
        }
        this.nextStepPromise = Promise.withResolvers();
        const continueResolve = this.continuePromise.resolve;
        this.continuePromise = Promise.withResolvers();
        continueResolve(payload);
        return this.continueTest();
    }
    async continueTest() {
        try {
            const result = await Promise.race([this.testDone, this.nextStepPromise.promise]);
            if (this.stepFailures.length > 0) {
                // One or more failures occurred during the test but they were not
                // raised as an error. Report the first non-raised failure.
                const e = this.stepFailures[0];
                console.error(`Test ${this.testName} failed at ${this.fixture.getStepLabel()}.\n` +
                    await improveStackTrace(e.stack ?? ''));
                return `Failed at ${this.fixture.getStepLabel()} ` +
                    `due to (captured error): ${e}`;
            }
            if (result && typeof result === 'object') {
                if ('id' in result && result['id'] === 'next-step') {
                    return result;
                }
                if ('command' in result) {
                    return result;
                }
            }
        }
        catch (e) {
            if (e instanceof Error) {
                console.error(`Test ${this.testName} failed at ${this.fixture.getStepLabel()}.\n` +
                    await improveStackTrace(e.stack ?? ''));
            }
            return `Failed at ${this.fixture.getStepLabel()} due to: ${e}`;
        }
        finally {
            this.stepFailures = [];
        }
        return 'pass';
    }
    nextStep(payload) {
        return this.commandQueue.add(async () => {
            console.info(`Waiting to continue to step #${this.fixture.getStepCount() + 1} in test ${this.testName}...`);
            payload = payload ?? {}; // undefined is not serializable to base::Value.
            this.nextStepPromise.resolve({ id: 'next-step', payload });
            return this.continuePromise.promise.then(() => { });
        });
    }
    doCommand(command) {
        return this.commandQueue.add(async () => {
            console.info(`Waiting to continue to command in test ${this.testName}...`);
            this.nextStepPromise.resolve(command);
            return this.continuePromise.promise;
        });
    }
}
// Adds js source lines to the stack trace.
async function improveStackTrace(stack) {
    const outLines = [];
    const contextLines = 2; // Must be >= 1
    let stackLevel = 0;
    for (const line of stack.split('\n')) {
        const m = line.match(/^\s+at.*\((.*):(\d+):(\d+)\)$/);
        if (m) {
            try {
                const [file, lineNo, column] = m.slice(1);
                const response = await fetch(file);
                const text = await response.text();
                const lines = text.split('\n');
                const failureLineNo = Number(lineNo) - 1;
                outLines.push(`[${stackLevel}] ${line.trim()}:`);
                const spacePrefixedIntroLines = lines.slice(failureLineNo - contextLines, failureLineNo)
                    .map((l) => ' |' + l);
                outLines.push(...spacePrefixedIntroLines);
                const lineStr = lines[failureLineNo];
                outLines.push(` ├>${lineStr}`);
                outLines.push(` ├╌${'╌'.repeat(Number(column) - 1)}^`);
                const spacePrefixedOutroLines = lines.slice(failureLineNo + 1, failureLineNo + contextLines + 1)
                    .map((l) => ' |' + l);
                outLines.push(...spacePrefixedOutroLines);
                outLines.push('');
            }
            catch (e) {
                outLines.push(`${line}`);
            }
            stackLevel += 1;
        }
        else {
            outLines.push(line);
        }
    }
    outLines.push('');
    return outLines.join('\n');
}
let testRunner;
export async function testMain(testFixtures) {
    if (getTestName() !== 'testNoBootstrap') {
        console.info('api_test waiting for GlicHostRegistry');
        glicHostRegistry.resolve(await createGlicHostRegistryOnLoad());
    }
    // If no test is selected, load a client that does nothing.
    // This is present because test.html is used as a dummy test client in
    // some tests.
    testRunner = new TestRunner(getTestName() ?? 'testDoNothing', testFixtures);
    await testRunner.setUp();
    window.runApiTest =
        (maxTimeoutMs, payload, initData) => {
            return testRunner.run(maxTimeoutMs, payload, initData);
        };
    window.continueApiTest = (payload) => {
        return testRunner.stepComplete(payload);
    };
}
/** Error type for causing API test failures. */
export class ApiTestError extends Error {
    constructor(message) {
        super(message);
        testRunner.recordTestFailure(this);
    }
}
export function assertTrue(x, message) {
    if (!x) {
        throw new ApiTestError(`assertTrue failed: '${x}' is not true. ${message ?? ''}`);
    }
}
export function assertFalse(x, message) {
    if (x) {
        throw new ApiTestError(`assertFalse failed: '${x}' is not false. ${message ?? ''}`);
    }
}
export function assertDefined(x, message) {
    if (x === undefined) {
        throw new Error(`assertDefined failed. ${message ?? ''}`);
    }
}
export function assertUndefined(x, message) {
    if (x !== undefined) {
        throw new Error(`assertUndefined failed. ${message ?? ''}`);
    }
}
export function assertEquals(a, b, message) {
    if (a !== b) {
        throw new ApiTestError(`assertEquals failed: '${a}' !== '${b}'. ${message ?? ''}`);
    }
}
export function assertNotEquals(a, b, message) {
    if (a === b) {
        throw new ApiTestError(`assertNotEquals failed: '${a}' === '${b}'. ${message ?? ''}`);
    }
}
export function checkDefined(v, message) {
    if (v === undefined) {
        throw new ApiTestError(`checkDefined: value is undefined. ${message ?? ''}`);
    }
    return v;
}
export function sleep(timeoutMs) {
    return new Promise((resolve) => {
        window.setTimeout(resolve, timeoutMs);
    });
}
export function getTimeout(timeoutMs) {
    if (timeoutMs === undefined) {
        return Math.max(0, maxTimeoutEndTime - performance.now());
    }
    return timeoutMs;
}
// Waits for a promise to resolve. If the timeout is reached first, throws an
// exception. Note this is useful because if the test times out in the normal
// way, we do not receive a very useful error.
export async function waitFor(value, timeoutMs, message) {
    const timeoutResult = Symbol();
    const result = await Promise.race([value, sleep(getTimeout(timeoutMs)).then(() => timeoutResult)]);
    if (result === timeoutResult) {
        throw new ApiTestError(`waitFor timed out. ${message ?? ''}`);
    }
    return value;
}
// Run until `condition()` returns a truthy value. Throws an exception if the
// timeout is reached first. Otherwise, this returns the value returned by
// condition.
export async function runUntil(condition, timeoutMs, message) {
    timeoutMs = getTimeout(timeoutMs);
    const sleepMs = getTimeout(timeoutMs) / 20;
    const timeout = performance.now() + timeoutMs;
    while (performance.now() < timeout) {
        const result = await condition();
        if (result) {
            return result;
        }
        await sleep(sleepMs);
    }
    throw new ApiTestError(`runUntil timed out. ${message ?? ''}`);
}
export function readStream(stream) {
    return new Response(stream).bytes();
}
export async function assertRejects(promise, options) {
    return promise.then(() => {
        // The promise should have been rejected.
        throw new ApiTestError('Promise not rejected.');
    }, (e) => {
        assertTrue(e instanceof Error, 'JS test harness does not support non-Error rejection objects');
        const errorMessage = e.message;
        if (options?.withErrorMessage !== undefined) {
            assertEquals(options.withErrorMessage, errorMessage);
        }
        return errorMessage;
    });
}
