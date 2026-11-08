/** @fileoverview Test implementation of PluralStringProxy. */
import type { PluralStringProxy } from 'chrome://resources/js/plural_string_proxy.js';
import { TestBrowserProxy } from './test_browser_proxy.js';
/**
 * Test implementation
 */
export declare class TestPluralStringProxy extends TestBrowserProxy implements PluralStringProxy {
    text: string;
    constructor();
    getPluralString(messageName: string, itemCount: number): Promise<string>;
    getPluralStringTupleWithComma(messageName1: string, itemCount1: number, messageName2: string, itemCount2: number): Promise<string>;
    getPluralStringTupleWithPeriods(messageName1: string, itemCount1: number, messageName2: string, itemCount2: number): Promise<string>;
}
