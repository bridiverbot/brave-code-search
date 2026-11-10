/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************************************************!*\
  !*** ./components/cosmetic_filters/resources/data/content_cosmetic.ts + 1 modules ***!
  \************************************************************************************/

;// ./components/cosmetic_filters/resources/data/procedural_filters.ts
// Copyright (c) 2024 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
/**
 *
 * src/main.ts
 *
 */
const W = window;
const _asHTMLElement = (node) => {
    return node instanceof HTMLElement ? node : null;
};
const _compileRegEx = (regexText) => {
    const regexParts = regexText.split('/');
    const regexPattern = regexParts[1];
    const regexArgs = regexParts[2];
    const regex = new W.RegExp(regexPattern, regexArgs);
    return regex;
};
// Check to see if the string `value` either
// contains the the string `test` (if `test` does
// not start with `/`) or if the string
// value matches the regex `test`.
// We assume if test isn't a string, its a regex object.
//
// Rules:
//   - if `test` starts with `/` we treat it as a regex
//     literal
//   - if `text` is an empty string, we treat it as
//     matching any case where value is only whitespace
//   - otherwise, check to see if value contains the
//     string `test`
//
// If `exact` is true, then the string case it tested
// for an exact match (the regex case is not affected).
const _testMatches = (test, value, exact = false) => {
    if (test[0] === '/') {
        return value.match(_compileRegEx(test)) !== null;
    }
    if (test === '') {
        return value.trim() === '';
    }
    if (exact) {
        return value === test;
    }
    return value.includes(test);
};
/**
 * Returns the key part of the `key=value` pair and the index of the start of
 * the value part, or just the key with `undefined` if there is no value part
 */
const _extractKeyFromStr = (text) => {
    const quotedTerminator = '"=';
    const unquotedTerminator = '=';
    const isQuotedCase = text[0] === '"';
    const [terminator, needlePosition] = isQuotedCase
        ? [quotedTerminator, 1]
        : [unquotedTerminator, 0];
    const indexOfTerminator = text.indexOf(terminator, needlePosition);
    if (indexOfTerminator === -1) {
        // No key/value separator found, attempt to extract plain key instead
        let key = text;
        if (isQuotedCase) {
            if (!text.endsWith('"')) {
                throw new Error(`Quoted value '${text}' does not terminate with quote`);
            }
            key = text.slice(1, text.length - 1);
        }
        return [key, undefined];
    }
    const testCaseStr = text.slice(needlePosition, indexOfTerminator);
    const finalNeedlePosition = indexOfTerminator + terminator.length;
    return [testCaseStr, finalNeedlePosition];
};
const _extractValueMatchRuleFromStr = (text, uriEncode = false, needlePosition = 0) => {
    const testCaseStr = _extractValueFromStr(text, uriEncode, needlePosition);
    const testCaseFunc = _testMatches.bind(undefined, testCaseStr);
    return testCaseFunc;
};
const _extractValueFromStr = (text, uriEncode = false, needlePosition = 0) => {
    const isQuotedCase = text[needlePosition] === '"';
    let endIndex;
    if (isQuotedCase) {
        if (text.at(-1) !== '"') {
            throw new Error(`Unable to parse value rule from ${text}. Value rule starts with `
                + '" but doesn\'t end with "');
        }
        needlePosition += 1;
        endIndex = text.length - 1;
    }
    else {
        endIndex = text.length;
    }
    let testCaseStr = text.slice(needlePosition, endIndex);
    if (uriEncode) {
        testCaseStr = testCaseStr.replace(/\P{ASCII}/gu, (c) => encodeURIComponent(c));
    }
    return testCaseStr;
};
// Parse an argument like `"abc"="xyz"` into
// a test for the key, and a test for the value.
// This will return two functions then, that you
// should use for checking the key and values
// in your test case.
//
// const key = ..., value = ...
// const [keyTestFunc, valueTestFunc] = _parseKeyValueMatchArg(arg)
//
// if (keyTestFunc(key))) {
//   // key matches the test condition
// }
const _parseKeyValueMatchRules = (arg) => {
    const [key, needlePos] = _extractKeyFromStr(arg);
    const keyMatchRule = (arg) => _testMatches(key, arg, true);
    let valueMatchRule;
    if (needlePos !== undefined) {
        const value = _extractValueFromStr(arg, false, needlePos);
        valueMatchRule = (arg) => _testMatches(value, arg, true);
    }
    return [keyMatchRule, valueMatchRule];
};
const _parseCSSInstruction = (arg) => {
    const rs = arg.split(':');
    if (rs.length !== 2) {
        throw Error(`Unexpected format for a CSS rule: ${arg}`);
    }
    return [rs[0].trim(), rs[1].trim()];
};
const _allOtherSiblings = (element) => {
    if (!element.parentNode) {
        return [];
    }
    const siblings = Array.from(element.parentNode.children);
    const otherHTMLElements = [];
    for (const sib of siblings) {
        if (sib === element) {
            continue;
        }
        const siblingHTMLElement = _asHTMLElement(sib);
        if (siblingHTMLElement !== null) {
            otherHTMLElements.push(siblingHTMLElement);
        }
    }
    return otherHTMLElements;
};
const _nextSiblingElement = (element) => {
    if (!element.parentNode) {
        return null;
    }
    const siblings = W.Array.from(element.parentNode.children);
    const indexOfElm = siblings.indexOf(element);
    const nextSibling = siblings[indexOfElm + 1];
    if (nextSibling === undefined) {
        return null;
    }
    return _asHTMLElement(nextSibling);
};
const _allChildren = (element) => {
    return W.Array.from(element.children)
        .map((e) => _asHTMLElement(e))
        .filter((e) => e !== null);
};
const _allChildrenRecursive = (element) => {
    return W.Array.from(element.querySelectorAll(':scope *'))
        .map((e) => _asHTMLElement(e))
        .filter((e) => e !== null);
};
const _stripCssOperator = (operator, selector) => {
    if (selector[0] !== operator) {
        throw new Error(`Expected to find ${operator} in initial position of "${selector}`);
    }
    return selector.replace(operator, '').trimStart();
};
// Implementation of ":css-selector" rule
const operatorCssSelector = (selector, element) => {
    const trimmedSelector = selector.trimStart();
    if (trimmedSelector.startsWith('+')) {
        const subOperator = _stripCssOperator('+', trimmedSelector);
        if (subOperator === null) {
            return [];
        }
        const nextSibNode = _nextSiblingElement(element);
        if (nextSibNode === null) {
            return [];
        }
        return nextSibNode.matches(subOperator) ? [nextSibNode] : [];
    }
    else if (trimmedSelector.startsWith('~')) {
        const subOperator = _stripCssOperator('~', trimmedSelector);
        if (subOperator === null) {
            return [];
        }
        const allSiblingNodes = _allOtherSiblings(element);
        return allSiblingNodes.filter((x) => x.matches(subOperator));
    }
    else if (trimmedSelector.startsWith('>')) {
        const subOperator = _stripCssOperator('>', trimmedSelector);
        if (subOperator === null) {
            return [];
        }
        const allChildNodes = _allChildren(element);
        return allChildNodes.filter((x) => x.matches(subOperator));
    }
    else if (selector.startsWith(' ')) {
        return Array.from(element.querySelectorAll(':scope ' + trimmedSelector));
    }
    if (element.matches(selector)) {
        return [element];
    }
    return [];
};
const _hasPlainSelectorCase = (selector, element) => {
    return element.matches(selector) ? [element] : [];
};
const _hasProceduralSelectorCase = (selector, element) => {
    var _a;
    const shouldBeGreedy = ((_a = selector[0]) === null || _a === void 0 ? void 0 : _a.type) !== 'css-selector';
    const initElements = shouldBeGreedy
        ? _allChildrenRecursive(element)
        : [element];
    const matches = compileAndApplyProceduralSelector(selector, initElements);
    return matches.length === 0 ? [] : [element];
};
// Implementation of ":has" rule
const operatorHas = (instruction, element) => {
    if (W.Array.isArray(instruction)) {
        return _hasProceduralSelectorCase(instruction, element);
    }
    else {
        return _hasPlainSelectorCase(instruction, element);
    }
};
// Implementation of ":has-text" rule
const operatorHasText = (instruction, element) => {
    const text = element.innerText;
    const valueTest = _extractValueMatchRuleFromStr(instruction);
    return valueTest(text) ? [element] : [];
};
const _notPlainSelectorCase = (selector, element) => {
    return element.matches(selector) ? [] : [element];
};
const _notProceduralSelectorCase = (selector, element) => {
    const matches = compileAndApplyProceduralSelector(selector, [element]);
    return matches.length === 0 ? [element] : [];
};
// Implementation of ":not" rule
const operatorNot = (instruction, element) => {
    if (Array.isArray(instruction)) {
        return _notProceduralSelectorCase(instruction, element);
    }
    else {
        return _notPlainSelectorCase(instruction, element);
    }
};
// Implementation of ":matches-property" rule
const operatorMatchesProperty = (instruction, element) => {
    const [keyTest, valueTest] = _parseKeyValueMatchRules(instruction);
    for (const [propName, propValue] of Object.entries(element)) {
        if (!keyTest(propName)) {
            continue;
        }
        if (valueTest !== undefined && !valueTest(propValue)) {
            continue;
        }
        return [element];
    }
    return [];
};
// Implementation of ":min-text-length" rule
const operatorMinTextLength = (instruction, element) => {
    const minLength = +instruction;
    if (minLength === W.NaN) {
        throw new Error(`min-text-length: Invalid arg, ${instruction}`);
    }
    return element.innerText.trim().length >= minLength ? [element] : [];
};
// Implementation of ":matches-attr" rule
const operatorMatchesAttr = (instruction, element) => {
    const [keyTest, valueTest] = _parseKeyValueMatchRules(instruction);
    for (const attrName of element.getAttributeNames()) {
        if (!keyTest(attrName)) {
            continue;
        }
        const attrValue = element.getAttribute(attrName);
        if (attrValue === null
            || (valueTest !== undefined && !valueTest(attrValue))) {
            continue;
        }
        return [element];
    }
    return [];
};
// Implementation of ":matches-css-*" rules
const operatorMatchesCSS = (beforeOrAfter, cssInstruction, element) => {
    const [cssKey, expectedVal] = _parseCSSInstruction(cssInstruction);
    const elmStyle = W.getComputedStyle(element, beforeOrAfter);
    const styleValue = elmStyle.getPropertyValue(cssKey);
    if (styleValue === undefined) {
        // We're querying for a style property that doesn't exist, which
        // trivially doesn't match then.
        return [];
    }
    let matched;
    if (expectedVal.startsWith('/') && expectedVal.endsWith('/')) {
        matched = styleValue.match(_compileRegEx(expectedVal)) !== null;
    }
    else {
        matched = expectedVal === styleValue;
    }
    return matched ? [element] : [];
};
// Implementation of ":matches-media" rule
const operatorMatchesMedia = (instruction, element) => {
    return W.matchMedia(instruction).matches ? [element] : [];
};
// Implementation of ":matches-path" rule
const operatorMatchesPath = (instruction, element) => {
    const pathAndQuery = W.location.pathname + W.location.search;
    const matchRule = _extractValueMatchRuleFromStr(instruction, true);
    return matchRule(pathAndQuery) ? [element] : [];
};
const _upwardIntCase = (intNeedle, element) => {
    if (intNeedle < 1 || intNeedle >= 256) {
        throw new Error(`upward: invalid arg, ${intNeedle}`);
    }
    let currentElement = element;
    while (currentElement !== null && intNeedle > 0) {
        currentElement = currentElement.parentNode;
        intNeedle -= 1;
    }
    if (currentElement === null) {
        return [];
    }
    else {
        const htmlElement = _asHTMLElement(currentElement);
        return htmlElement === null ? [] : [htmlElement];
    }
};
const _upwardProceduralSelectorCase = (selector, element) => {
    const childFilter = compileProceduralSelector(selector);
    let needle = element;
    while (needle !== null) {
        const currentElement = _asHTMLElement(needle);
        if (currentElement === null) {
            break;
        }
        const matches = applyCompiledSelector(childFilter, [currentElement]);
        if (matches.length !== 0) {
            return [currentElement];
        }
        needle = currentElement.parentNode;
    }
    return [];
};
const _upwardPlainSelectorCase = (selector, element) => {
    let needle = element;
    while (needle !== null) {
        const currentElement = _asHTMLElement(needle);
        if (currentElement === null) {
            break;
        }
        if (currentElement.matches(selector)) {
            return [currentElement];
        }
        needle = currentElement.parentNode;
    }
    return [];
};
// Implementation of ":upward" rule
const operatorUpward = (instruction, element) => {
    if (W.Number.isInteger(+instruction)) {
        return _upwardIntCase(+instruction, element);
    }
    else if (W.Array.isArray(instruction)) {
        return _upwardProceduralSelectorCase(instruction, element);
    }
    else {
        return _upwardPlainSelectorCase(instruction, element);
    }
};
// Implementation of ":xpath" rule
const operatorXPath = (instruction, element) => {
    const result = W.document.evaluate(instruction, element, null, W.XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const matches = [];
    let currentNode;
    while ((currentNode = result.iterateNext())) {
        const currentElement = _asHTMLElement(currentNode);
        if (currentElement !== null) {
            matches.push(currentElement);
        }
    }
    return matches;
};
const ruleTypeToFuncMap = {
    'contains': operatorHasText,
    'css-selector': operatorCssSelector,
    'has': operatorHas,
    'has-text': operatorHasText,
    'matches-attr': operatorMatchesAttr,
    'matches-css': operatorMatchesCSS.bind(undefined, null),
    'matches-css-after': operatorMatchesCSS.bind(undefined, '::after'),
    'matches-css-before': operatorMatchesCSS.bind(undefined, '::before'),
    'matches-media': operatorMatchesMedia,
    'matches-path': operatorMatchesPath,
    'matches-property': operatorMatchesProperty,
    'min-text-length': operatorMinTextLength,
    'not': operatorNot,
    'upward': operatorUpward,
    'xpath': operatorXPath,
};
const compileProceduralSelector = (operators) => {
    const outputOperatorList = [];
    for (const operator of operators) {
        const anOperatorFunc = ruleTypeToFuncMap[operator.type];
        const args = [operator.arg];
        if (anOperatorFunc === undefined) {
            throw new Error(`Not sure what to do with operator of type ${operator.type}`);
        }
        outputOperatorList.push({
            type: operator.type,
            func: anOperatorFunc.bind(undefined, ...args),
            args,
        });
    }
    return outputOperatorList;
};
// List of operator types that will be either globally true or false
// independent of the passed element. We use this list to optimize
// applying each operator (i.e., we just check the first element, and then
// accept or reject all elements in the consideration set accordingly).
const fastPathOperatorTypes = ['matches-media', 'matches-path'];
const _determineInitNodesAndIndex = (selector, initNodes) => {
    let nodesToConsider = [];
    let index = 0;
    // A couple of special cases to consider.
    //
    // Case one: we're applying the procedural filter on a set of nodes (instead
    // of the entire document)  In this case, we already know which nodes to
    // consider, easy case.
    const firstOperator = selector[0];
    const firstOperatorType = firstOperator.type;
    const firstArg = firstOperator.args[0];
    if (initNodes !== undefined) {
        nodesToConsider = W.Array.from(initNodes);
    }
    else if (firstOperatorType === 'css-selector') {
        const selector = firstArg;
        // Case two: we're considering the entire document, and the first operator
        // is a 'css-selector'. Here, we just special case using querySelectorAll
        // instead of starting with the full set of possible nodes.
        nodesToConsider = W.Array.from(W.document.querySelectorAll(selector));
        index += 1;
    }
    else if (firstOperatorType === 'xpath') {
        const xpath = firstArg;
        nodesToConsider = operatorXPath(xpath, W.document.documentElement);
        index += 1;
    }
    else {
        // Case three: we gotta apply the first operator to the entire document.
        // Yuck but un-avoidable.
        const allNodes = W.Array.from(W.document.all);
        nodesToConsider = allNodes.filter(_asHTMLElement);
    }
    return [index, nodesToConsider];
};
const applyCompiledSelector = (selector, initNodes) => {
    const initState = _determineInitNodesAndIndex(selector, initNodes);
    let [index, nodesToConsider] = initState;
    const numOperators = selector.length;
    for (index; nodesToConsider.length > 0 && index < numOperators; ++index) {
        const operator = selector[index];
        const operatorFunc = operator.func;
        const operatorType = operator.type;
        // Note that we special case the :matches-path case here, since if
        // if it passes for one element, then it will pass for all elements.
        if (fastPathOperatorTypes.includes(operatorType)) {
            const firstNode = nodesToConsider[0];
            if (operatorFunc(firstNode).length === 0) {
                nodesToConsider = [];
            }
            // Note that unless we've taken the if-true branch above, then
            // the nodesToConsider array will still have all the elements
            // it started with.
            continue;
        }
        let newNodesToConsider = [];
        for (const aNode of nodesToConsider) {
            const result = operatorFunc(aNode);
            newNodesToConsider = newNodesToConsider.concat(result);
        }
        nodesToConsider = newNodesToConsider;
    }
    return nodesToConsider;
};
const compileAndApplyProceduralSelector = (selector, initElements) => {
    const compiled = compileProceduralSelector(selector);
    return applyCompiledSelector(compiled, initElements);
};


;// ./components/cosmetic_filters/resources/data/content_cosmetic.ts
// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.
// That script is executed from
// components/cosmetic_filters/content/renderer/cosmetic_filters_js_handler.cc
// several times:
// - for cosmetic filters work with CSS and stylesheet. That work itself
//   could call the script several times.

// Start looking for things to unhide before at most this long after
// the backend script is up and connected (eg backgroundReady = true),
// or sooner if the thread is idle.
const maxTimeMSBeforeStart = 2500;
// The cutoff for text ads.  If something has only text in it, it needs to have
// this many, or more, characters.  Similarly, require it to have a non-trivial
// number of words in it, to look like an actual text ad.
const minAdTextChars = 30;
const minAdTextWords = 5;
const returnToMutationObserverIntervalMs = 10000;
const selectorsPollingIntervalMs = 500;
let selectorsPollingIntervalId;
// The number of potentially new selectors that are processed during the last
// |scoreCalcIntervalMs|.
let currentMutationScore = 0;
// The time frame used to calc |currentMutationScore|.
const scoreCalcIntervalMs = 1000;
// The begin of the time frame to calc |currentMutationScore|.
let currentMutationStartTime = performance.now();
// The next allowed time to call FetchNewClassIdRules() if it's throttled.
let nextFetchNewClassIdRulesCall = 0;
let fetchNewClassIdRulesTimeoutId;
// Generate a random string between [a000000000, zzzzzzzzzz] (base 36)
const generateRandomAttr = () => {
    const min = Number.parseInt('a000000000', 36);
    const max = Number.parseInt('zzzzzzzzzz', 36);
    return Math.floor(Math.random() * (max - min) + min).toString(36);
};
const globalStyleAttr = generateRandomAttr();
const styleAttrMap = new Map();
const queriedIds = new Set();
const queriedClasses = new Set();
const notYetQueriedElements = [];
const classIdWithoutHtmlOrBody = '[id]:not(html):not(body),[class]:not(html):not(body)';
// Each of these get setup once the mutation observer starts running.
let notYetQueriedClasses = [];
let notYetQueriedIds = [];
window.content_cosmetic = window.content_cosmetic || {};
const CC = window.content_cosmetic;
CC.cosmeticStyleSheet = CC.cosmeticStyleSheet || new CSSStyleSheet();
CC.allSelectorsToRules = CC.allSelectorsToRules || new Map();
CC.observingHasStarted = CC.observingHasStarted || false;
// All new selectors go in `firstRunQueue`
CC.firstRunQueue = CC.firstRunQueue || new Set();
// Third party matches go in the second and third queues.
CC.secondRunQueue = CC.secondRunQueue || new Set();
// Once a selector gets in to this queue, it's only evaluated for 1p content one
// more time.
CC.finalRunQueue = CC.finalRunQueue || new Set();
CC.allQueues = CC.allQueues || [
    CC.firstRunQueue,
    CC.secondRunQueue,
    CC.finalRunQueue,
];
CC.numQueues = CC.numQueues || CC.allQueues.length;
CC.alreadyUnhiddenSelectors = CC.alreadyUnhiddenSelectors || new Set();
CC.alreadyKnownFirstPartySubtrees =
    CC.alreadyKnownFirstPartySubtrees || new WeakSet();
CC._hasDelayOcurred = CC._hasDelayOcurred || false;
CC._startCheckingId = CC._startCheckingId || undefined;
CC.firstSelectorsPollingDelayMs = CC.firstSelectorsPollingDelayMs || undefined;
CC.switchToSelectorsPollingThreshold =
    CC.switchToSelectorsPollingThreshold || undefined;
CC.fetchNewClassIdRulesThrottlingMs =
    CC.fetchNewClassIdRulesThrottlingMs || undefined;
/**
 * Provides a new function which can only be scheduled once at a time.
 *
 * @param onIdle function to run when the thread is less busy
 * @param timeout max time to wait. at or after this time the function will be run regardless of thread noise
 */
const idleize = (onIdle, timeout) => {
    let idleId;
    return function WillRunOnIdle() {
        if (idleId !== undefined) {
            return;
        }
        idleId = window.requestIdleCallback(() => {
            idleId = undefined;
            onIdle();
        }, { timeout });
    };
};
const isRelativeUrl = (url) => {
    return (!url.startsWith('//')
        && !url.startsWith('http://')
        && !url.startsWith('https://'));
};
const isElement = (node) => {
    return node.nodeType === 1;
};
const asElement = (node) => {
    return isElement(node) ? node : null;
};
const isHTMLElement = (node) => {
    return 'innerText' in node;
};
// The fetchNewClassIdRules() can be called of each MutationObserver event.
// Under the hood it makes a lot of work: call to C++ => IPC to the browser
// process => request to the rust CS engine and back.
// So limit the number of calls to one per fetchNewClassIdRulesThrottlingMs.
const ShouldThrottleFetchNewClassIdsRules = () => {
    if (CC.fetchNewClassIdRulesThrottlingMs === undefined) {
        return false; // the feature is disabled.
    }
    if (fetchNewClassIdRulesTimeoutId) {
        return true; // The function has already scheduled and called later.
    }
    const now = performance.now();
    const msToWait = nextFetchNewClassIdRulesCall - now;
    if (msToWait > 0) {
        // Schedule the call in |msToWait| ms and return.
        fetchNewClassIdRulesTimeoutId = window.setTimeout(() => {
            fetchNewClassIdRulesTimeoutId = undefined;
            fetchNewClassIdRules();
        }, msToWait);
        return true;
    }
    nextFetchNewClassIdRulesCall = now + CC.fetchNewClassIdRulesThrottlingMs;
    return false;
};
const queueElementIdAndClasses = (element) => {
    const id = element.id;
    if (id && !queriedIds.has(id)) {
        notYetQueriedIds.push(id);
        queriedIds.add(id);
    }
    for (const className of element.classList.values()) {
        if (className && !queriedClasses.has(className)) {
            notYetQueriedClasses.push(className);
            queriedClasses.add(className);
        }
    }
};
const fetchNewClassIdRules = () => {
    for (const elements of notYetQueriedElements) {
        for (const element of elements) {
            queueElementIdAndClasses(element);
        }
    }
    notYetQueriedElements.length = 0;
    if ((!notYetQueriedClasses || notYetQueriedClasses.length === 0)
        && (!notYetQueriedIds || notYetQueriedIds.length === 0)) {
        return;
    }
    // Callback to c++ renderer process
    // @ts-expect-error
    cf_worker.hiddenClassIdSelectors(JSON.stringify({
        classes: notYetQueriedClasses,
        ids: notYetQueriedIds,
    }));
    notYetQueriedClasses = [];
    notYetQueriedIds = [];
};
const useMutationObserver = () => {
    if (selectorsPollingIntervalId) {
        clearInterval(selectorsPollingIntervalId);
        selectorsPollingIntervalId = undefined;
    }
    const observer = new MutationObserver(onMutations);
    const observerConfig = {
        subtree: true,
        childList: true,
        attributeFilter: ['id', 'class'],
    };
    observer.observe(document.documentElement, observerConfig);
};
const usePolling = (observer) => {
    if (observer) {
        observer.disconnect();
        notYetQueriedElements.length = 0;
    }
    const futureTimeMs = window.Date.now() + returnToMutationObserverIntervalMs;
    const queryAttrsFromDocumentBound = queryAttrsFromDocument.bind(undefined, futureTimeMs);
    selectorsPollingIntervalId = window.setInterval(queryAttrsFromDocumentBound, selectorsPollingIntervalMs);
};
const queueAttrsFromMutations = (mutations) => {
    let mutationScore = 0;
    for (const aMutation of mutations) {
        if (aMutation.type === 'attributes') {
            // Since we're filtering for attribute modifications, we can be certain
            // that the targets are always HTMLElements, and never TextNode.
            const changedElm = aMutation.target;
            switch (aMutation.attributeName) {
                case 'class':
                    mutationScore += changedElm.classList.length;
                    for (const aClassName of changedElm.classList.values()) {
                        if (!queriedClasses.has(aClassName)) {
                            notYetQueriedClasses.push(aClassName);
                            queriedClasses.add(aClassName);
                        }
                    }
                    break;
                case 'id':
                    const mutatedId = changedElm.id;
                    mutationScore++;
                    if (!queriedIds.has(mutatedId)) {
                        notYetQueriedIds.push(mutatedId);
                        queriedIds.add(mutatedId);
                    }
                    break;
            }
        }
        else if (aMutation.addedNodes.length > 0) {
            for (const node of aMutation.addedNodes) {
                const element = asElement(node);
                if (!element) {
                    continue;
                }
                notYetQueriedElements.push([element]);
                mutationScore += 1;
                if (element.firstElementChild !== null) {
                    const nodeList = element.querySelectorAll(classIdWithoutHtmlOrBody);
                    notYetQueriedElements.push(nodeList);
                    mutationScore += nodeList.length;
                }
            }
        }
    }
    return mutationScore;
};
const onMutations = (mutations, observer) => {
    var _a;
    // Callback to c++ renderer process
    // @ts-expect-error
    const eventId = (_a = cf_worker.onHandleMutationsBegin) === null || _a === void 0 ? void 0 : _a.call(cf_worker);
    const mutationScore = queueAttrsFromMutations(mutations);
    // Check the conditions to switch to the alternative strategy
    // to get selectors.
    if (CC.switchToSelectorsPollingThreshold !== undefined) {
        const now = performance.now();
        if (now > currentMutationStartTime + scoreCalcIntervalMs) {
            // Start the next time frame.
            currentMutationStartTime = now;
            currentMutationScore = 0;
        }
        currentMutationScore += mutationScore;
        if (currentMutationScore > CC.switchToSelectorsPollingThreshold) {
            usePolling(observer);
        }
    }
    if (!CC.generichide && !ShouldThrottleFetchNewClassIdsRules()) {
        fetchNewClassIdRules();
    }
    if (CC.hasProceduralActions) {
        const addedElements = [];
        mutations.forEach((mutation) => mutation.addedNodes.length !== 0
            && mutation.addedNodes.forEach((n) => {
                if (n.nodeType === Node.ELEMENT_NODE) {
                    addedElements.push(n);
                    const childNodes = n.querySelectorAll('*');
                    childNodes.length !== 0
                        && childNodes.forEach((c) => {
                            c.nodeType === Node.ELEMENT_NODE && addedElements.push(c);
                        });
                }
            }));
        if (addedElements.length !== 0) {
            executeProceduralActions(addedElements);
        }
    }
    if (eventId) {
        // Callback to c++ renderer process
        // @ts-expect-error
        cf_worker.onHandleMutationsEnd(eventId);
    }
};
const isFirstPartyUrl = (url) => {
    if (isRelativeUrl(url)) {
        return true;
    }
    // Callback to c++ renderer process
    // @ts-expect-error
    return cf_worker.isFirstPartyUrl(url);
};
const stripChildTagsFromText = (elm, tagName, text) => {
    const childElms = Array.from(elm.getElementsByTagName(tagName));
    let localText = text;
    for (const anElm of childElms) {
        localText = localText.replaceAll(anElm.innerText, '');
    }
    return localText;
};
/**
 * Used to just call innerText on the root of the subtree, but in some cases
 * this will surprisingly include the text content of script nodes
 * (possibly of nodes that haven't been executed yet?).
 *
 * So instead  * we call innerText on the root, and remove the contents of any
 * script or style nodes.
 *
 * @see https://github.com/brave/brave-browser/issues/9955
 */
const showsSignificantText = (elm) => {
    if (!isHTMLElement(elm)) {
        return false;
    }
    const htmlElm = elm;
    const tagsTextToIgnore = ['script', 'style'];
    let currentText = htmlElm.innerText;
    for (const aTagName of tagsTextToIgnore) {
        currentText = stripChildTagsFromText(htmlElm, aTagName, currentText);
    }
    const trimmedText = currentText.trim();
    if (trimmedText.length < minAdTextChars) {
        return false;
    }
    let wordCount = 0;
    for (const aWord of trimmedText.split(' ')) {
        if (aWord.trim().length === 0) {
            continue;
        }
        wordCount += 1;
    }
    return wordCount >= minAdTextWords;
};
/**
 * Determine whether a subtree should be considered as "first party" content.
 *
 * Uses the following process in making this determination.
 *   - If the subtree contains any first party resources, the subtree is 1p.
 *   - If the subtree contains no remote resources, the subtree is first party.
 *   - Otherwise, its 3rd party.
 *
 * Note that any instances of "url(" or escape characters in style attributes
 * are automatically treated as third-party URLs.  These patterns and special
 * cases were generated from looking at patterns in ads with resources in the
 * style attribute.
 *
 * Similarly, an empty srcdoc attribute is also considered 3p, since many
 * third party ads clear this attribute in practice.
 *
 * Finally, special case some ids we know are used only for third party ads.
 */
const isSubTreeFirstParty = (elm, possibleQueryResult) => {
    let queryResult;
    let isTopLevel;
    if (possibleQueryResult) {
        queryResult = possibleQueryResult;
        isTopLevel = false;
    }
    else {
        queryResult = {
            foundFirstPartyResource: false,
            foundThirdPartyResource: false,
            foundKnownThirdPartyAd: false,
        };
        isTopLevel = true;
    }
    if (elm.getAttribute) {
        if (elm.hasAttribute('id')) {
            const elmId = elm.getAttribute('id');
            if (elmId.startsWith('google_ads_iframe_')
                || elmId.startsWith('div-gpt-ad')
                || elmId.startsWith('adfox_')) {
                queryResult.foundKnownThirdPartyAd = true;
                return false;
            }
        }
        if (elm.hasAttribute('src')) {
            const elmSrc = elm.getAttribute('src');
            const elmSrcIsFirstParty = isFirstPartyUrl(elmSrc);
            if (elmSrcIsFirstParty) {
                queryResult.foundFirstPartyResource = true;
                return true;
            }
            queryResult.foundThirdPartyResource = true;
        }
        if (elm.hasAttribute('style')) {
            const elmStyle = elm.getAttribute('style');
            if (elmStyle.includes('url(') || elmStyle.includes('//')) {
                queryResult.foundThirdPartyResource = true;
            }
        }
        if (elm.hasAttribute('srcdoc')) {
            const elmSrcDoc = elm.getAttribute('srcdoc');
            if (elmSrcDoc.trim() === '') {
                queryResult.foundThirdPartyResource = true;
            }
        }
    }
    if (elm.firstChild) {
        isSubTreeFirstParty(elm.firstChild, queryResult);
        if (queryResult.foundKnownThirdPartyAd) {
            return false;
        }
        if (queryResult.foundFirstPartyResource) {
            return true;
        }
    }
    if (elm.nextSibling) {
        isSubTreeFirstParty(elm.nextSibling, queryResult);
        if (queryResult.foundKnownThirdPartyAd) {
            return false;
        }
        if (queryResult.foundFirstPartyResource) {
            return true;
        }
    }
    if (!isTopLevel) {
        return !queryResult.foundThirdPartyResource;
    }
    if (queryResult.foundThirdPartyResource) {
        return false;
    }
    return true;
};
const unhideSelectors = (selectors) => {
    if (selectors.size === 0) {
        return;
    }
    // Find selectors we have a rule index for
    const rulesToRemove = Array.from(selectors)
        .map((selector) => CC.allSelectorsToRules.get(selector))
        .filter((i) => i !== undefined)
        .sort()
        .reverse();
    // Delete the rules
    let lastIdx = CC.allSelectorsToRules.size - 1;
    for (const ruleIdx of rulesToRemove) {
        // Safe to asset ruleIdx is a number because we've already filtered out
        // any `undefined` instances with the filter call above.
        CC.cosmeticStyleSheet.deleteRule(ruleIdx);
    }
    // Re-sync the indexes
    // TODO: Sync is hard, just re-build by iterating through the StyleSheet rules.
    const ruleLookup = Array.from(CC.allSelectorsToRules.entries());
    let countAtLastHighest = rulesToRemove.length;
    for (let i = lastIdx; i > 0; i--) {
        const [selector, oldIdx] = ruleLookup[i];
        // Is this one we removed?
        if (rulesToRemove.includes(i)) {
            CC.allSelectorsToRules.delete(selector);
            countAtLastHighest--;
            if (countAtLastHighest === 0) {
                break;
            }
            continue;
        }
        if (oldIdx !== i) {
            // Probably out of sync
            console.error('Cosmetic Filters: old index did not match lookup index', {
                selector,
                oldIdx,
                i,
            });
        }
        CC.allSelectorsToRules.set(selector, oldIdx - countAtLastHighest);
    }
};
const pumpIntervalMinMs = 40;
const pumpIntervalMaxMs = 1000;
const maxWorkSize = 60;
let queueIsSleeping = false;
/**
 * Go through each of the 3 queues, only take 50 items from each one
 * 1. Take 50 selectors from the first queue with any items
 * 2. Determine partyness of matched element:
 *   - If any are 3rd party, keep 'hide' rule and check again later in next queue.
 *   - If any are 1st party, remove 'hide' rule and never check selector again.
 * 3. If we're looking at the 3rd queue, don't requeue any selectors.
 */
const pumpCosmeticFilterQueues = () => {
    if (queueIsSleeping) {
        return;
    }
    let didPumpAnything = false;
    // For each "pump", walk through each queue until we find selectors
    // to evaluate. This means that nothing in queue N+1 will be evaluated
    // until queue N is completely empty.
    for (let queueIndex = 0; queueIndex < CC.numQueues; queueIndex += 1) {
        const currentQueue = CC.allQueues[queueIndex];
        const nextQueue = CC.allQueues[queueIndex + 1];
        if (currentQueue.size === 0) {
            continue;
        }
        const currentWorkLoad = Array.from(currentQueue.values()).slice(0, maxWorkSize);
        const comboSelector = currentWorkLoad.join(',');
        const matchingElms = document.querySelectorAll(comboSelector);
        // Will hold selectors identified by _this_ queue pumping, that were
        // newly identified to be matching 1p content.  Will be sent to
        // the background script to do the un-hiding.
        const newlyIdentifiedFirstPartySelectors = new Set();
        for (const aMatchingElm of matchingElms) {
            // Don't recheck elements / subtrees we already know are first party.
            // Once we know something is third party, we never need to evaluate it
            // again.
            if (CC.alreadyKnownFirstPartySubtrees.has(aMatchingElm)) {
                continue;
            }
            const elmSubtreeIsFirstParty = isSubTreeFirstParty(aMatchingElm);
            // If we find that a subtree is third party, then no need to change
            // anything, leave the selector as "hiding" and move on.
            // This element will likely be checked again on the next 'pump'
            // as long as another element from the selector does not match 1st party.
            //
            // Also, if the subtree doesn't have a significant amount of text (e.g.,
            // it just says "Advertisement"), then no need to change anything; it
            // should stay hidden.
            if (!(elmSubtreeIsFirstParty || showsSignificantText(aMatchingElm))) {
                continue;
            }
            // Otherwise, we know that the given subtree was evaluated to be
            // first party, so we need to figure out which selector from the combo
            // selector did the matching.
            for (const selector of currentWorkLoad) {
                if (!aMatchingElm.matches(selector)) {
                    continue;
                }
                // Similarly, if we already know a selector matches 1p content,
                // there is no need to notify the background script again, so
                // we don't need to consider further.
                if (CC.alreadyUnhiddenSelectors.has(selector)) {
                    continue;
                }
                newlyIdentifiedFirstPartySelectors.add(selector);
                CC.alreadyUnhiddenSelectors.add(selector);
            }
            CC.alreadyKnownFirstPartySubtrees.add(aMatchingElm);
        }
        unhideSelectors(newlyIdentifiedFirstPartySelectors);
        for (const aUsedSelector of currentWorkLoad) {
            currentQueue.delete(aUsedSelector);
            // Don't requeue selectors we know identify first party content.
            const selectorMatchedFirstParty = newlyIdentifiedFirstPartySelectors.has(aUsedSelector);
            if (nextQueue && !selectorMatchedFirstParty) {
                nextQueue.add(aUsedSelector);
            }
        }
        didPumpAnything = true;
        // If we did something,  process the next queue, save it for next time.
        break;
    }
    if (didPumpAnything) {
        queueIsSleeping = true;
        window.setTimeout(() => {
            // Set this to false now even though there's a gap in time between now and
            // idle since all other calls to `pumpCosmeticFilterQueuesOnIdle` that occur during this time
            // will be ignored (and nothing else should be calling `pumpCosmeticFilterQueues` straight).
            queueIsSleeping = false;
            pumpCosmeticFilterQueuesOnIdle();
        }, pumpIntervalMinMs);
    }
};
const pumpCosmeticFilterQueuesOnIdle = idleize(pumpCosmeticFilterQueues, pumpIntervalMaxMs);
const queryAttrsFromDocument = (switchToMutationObserverAtTime) => {
    var _a;
    // Callback to c++ renderer process
    // @ts-expect-error
    const eventId = (_a = cf_worker.onQuerySelectorsBegin) === null || _a === void 0 ? void 0 : _a.call(cf_worker);
    if (!CC.generichide) {
        const elmWithClassOrId = document.querySelectorAll(classIdWithoutHtmlOrBody);
        for (const elm of elmWithClassOrId) {
            queueElementIdAndClasses(elm);
        }
        fetchNewClassIdRules();
    }
    if (CC.hasProceduralActions)
        executeProceduralActions();
    if (eventId) {
        // Callback to c++ renderer process
        // @ts-expect-error
        cf_worker.onQuerySelectorsEnd(eventId);
    }
    if (switchToMutationObserverAtTime !== undefined
        && window.Date.now() >= switchToMutationObserverAtTime) {
        useMutationObserver();
    }
};
const startObserving = () => {
    // First queue up any classes and ids that exist before the mutation observer
    // starts running.
    queryAttrsFromDocument();
    // Second, set up a mutation observer to handle any new ids or classes
    // that are added to the document.
    useMutationObserver();
};
const scheduleQueuePump = (hide1pContent, genericHide) => {
    // Three states possible here.  First, the delay has already occurred.  If so,
    // pass through to pumpCosmeticFilterQueues immediately.
    if (CC._hasDelayOcurred) {
        pumpCosmeticFilterQueuesOnIdle();
        return;
    }
    // Second possibility is that we're already waiting for the delay to pass /
    // occur.  In this case, do nothing.
    if (CC._startCheckingId !== undefined) {
        return;
    }
    // Third / final possibility, this is this the first time this has been
    // called, in which case set up a timer and quit
    CC._startCheckingId = window.requestIdleCallback((_) => {
        CC._hasDelayOcurred = true;
        if (!genericHide || CC.hasProceduralActions) {
            if (CC.firstSelectorsPollingDelayMs === undefined) {
                startObserving();
            }
            else {
                window.setTimeout(startObserving, CC.firstSelectorsPollingDelayMs);
            }
        }
        if (!hide1pContent) {
            pumpCosmeticFilterQueuesOnIdle();
        }
    }, { timeout: maxTimeMSBeforeStart });
};
const tryScheduleQueuePump = () => {
    if (!CC.observingHasStarted) {
        CC.observingHasStarted = true;
        scheduleQueuePump(CC.hide1pContent, CC.generichide);
    }
    else {
        scheduleQueuePump(false, false);
    }
};
CC.tryScheduleQueuePump = CC.tryScheduleQueuePump || tryScheduleQueuePump;
tryScheduleQueuePump();
const executeProceduralActions = (added) => {
    // If passed a list of added elements, do not query the entire document
    if (CC.proceduralActionFilters === undefined) {
        return;
    }
    const getStyleAttr = (style) => {
        let styleAttr = styleAttrMap.get(style);
        if (styleAttr === undefined) {
            styleAttr = generateRandomAttr();
            styleAttrMap.set(style, styleAttr);
            const css = `[${globalStyleAttr}][${styleAttr}]{${style}}`;
            // @ts-expect-error
            cf_worker.injectStylesheet(css);
        }
        return styleAttr;
    };
    const performAction = (element, action) => {
        if (action === undefined) {
            const attr = getStyleAttr('display: none !important');
            element.setAttribute(globalStyleAttr, '');
            element.setAttribute(attr, '');
        }
        else if (action.type === 'style') {
            const attr = getStyleAttr(action.arg);
            element.setAttribute(globalStyleAttr, '');
            element.setAttribute(attr, '');
        }
        else if (action.type === 'remove') {
            element.remove();
        }
        else if (action.type === 'remove-attr') {
            // We can remove attributes without checking if they exist
            element.removeAttribute(action.arg);
        }
        else if (action.type === 'remove-class') {
            // Check if the element has any classes to remove because
            // classList.remove(tokens...) always triggers another mutation
            // even if nothing was removed.
            if (element.classList.contains(action.arg)) {
                element.classList.remove(action.arg);
            }
        }
    };
    for (const { selector, action } of CC.proceduralActionFilters) {
        try {
            let matchingElements;
            let startOperator;
            if (selector[0].type === 'css-selector' && added === undefined) {
                matchingElements = document.querySelectorAll(selector[0].arg);
                startOperator = 1;
            }
            else if (added === undefined) {
                matchingElements = document.querySelectorAll('*');
                startOperator = 0;
            }
            else {
                matchingElements = added;
                startOperator = 0;
            }
            if (startOperator === selector.length) {
                // First `css-selector` was already handled, and no more elements remain
                matchingElements.forEach((elem) => performAction(elem, action));
            }
            else {
                const filter = compileProceduralSelector(selector.slice(startOperator));
                applyCompiledSelector(filter, matchingElements).forEach((elem) => performAction(elem, action));
            }
        }
        catch (e) {
            console.error('Failed to apply filter '
                + JSON.stringify(selector)
                + ' '
                + JSON.stringify(action)
                + ': ');
            console.error(e.message);
            console.error(e.stack);
        }
    }
};
if (CC.hasProceduralActions)
    executeProceduralActions();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29zbWV0aWNfZmlsdGVycy9yZXNvdXJjZXMvZGF0YS9wcm9jZWR1cmFsX2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29zbWV0aWNfZmlsdGVycy9yZXNvdXJjZXMvZGF0YS9jb250ZW50X2Nvc21ldGljLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyNCBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vKipcbiAqXG4gKiBzcmMvZGVjbGFyYXRpb25zLmQudHNcbiAqXG4gKi9cblxudHlwZSBDU1NTZWxlY3RvciA9IHN0cmluZ1xudHlwZSBDU1NJbnN0cnVjdGlvbiA9IHN0cmluZ1xudHlwZSBDU1NWYWx1ZSA9IHN0cmluZ1xuXG4vKiogQSBzaW5nbGUgc3RlcCBpbiBhIHByb2NlZHVyYWwgZmlsdGVyLCBlLmcuIGB7IHR5cGU6ICdoYXMtdGV4dCcsIGFyZzogJ0FkJyB9YC4gKi9cbmludGVyZmFjZSBQcm9jZWR1cmFsT3BlcmF0b3Ige1xuICB0eXBlOiBPcGVyYXRvclR5cGVcbiAgYXJnOiBzdHJpbmdcbn1cblxuLyoqIEFuIG9yZGVyZWQgbGlzdCBvZiBvcGVyYXRvcnMsIGVhY2ggbmFycm93aW5nIHRoZSBlbGVtZW50cyBtYXRjaGVkIGJ5IHRoZVxuICogcHJldmlvdXMuICovXG50eXBlIFByb2NlZHVyYWxTZWxlY3RvciA9IFByb2NlZHVyYWxPcGVyYXRvcltdXG50eXBlIE9wZXJhdG9yVHlwZSA9IHN0cmluZ1xudHlwZSBPcGVyYXRvckFyZyA9IENTU1NlbGVjdG9yIHwgUHJvY2VkdXJhbFNlbGVjdG9yIHwgc3RyaW5nXG50eXBlIE9wZXJhdG9yUmVzdWx0ID0gSFRNTEVsZW1lbnRbXVxuXG50eXBlIFVuYm91bmRTdHJpbmdGdW5jID0gKGFyZzogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gT3BlcmF0b3JSZXN1bHRcbnR5cGUgVW5ib3VuZENoaWxkUnVsZU9yU3RyaW5nRnVuYyA9IChcbiAgYXJnOiBzdHJpbmcgfCBQcm9jZWR1cmFsU2VsZWN0b3IsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKSA9PiBPcGVyYXRvclJlc3VsdFxudHlwZSBVbmJvdW5kT3BlcmF0b3JGdW5jID0gVW5ib3VuZFN0cmluZ0Z1bmMgfCBVbmJvdW5kQ2hpbGRSdWxlT3JTdHJpbmdGdW5jXG50eXBlIE9wZXJhdG9yRnVuYyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gT3BlcmF0b3JSZXN1bHRcblxuLyogcG9zdC1wcm9jZXNzZWQgZm9yIGNvbnZlbmllbnQgdXNhZ2UgaW4gSlMgKi9cbmludGVyZmFjZSBDb21waWxlZFByb2NlZHVyYWxPcGVyYXRvciB7XG4gIHR5cGU6IE9wZXJhdG9yVHlwZVxuICBmdW5jOiBPcGVyYXRvckZ1bmNcbiAgYXJnczogT3BlcmF0b3JBcmdbXVxufVxudHlwZSBDb21waWxlZFByb2NlZHVyYWxTZWxlY3RvciA9IENvbXBpbGVkUHJvY2VkdXJhbE9wZXJhdG9yW11cblxudHlwZSBOZWVkbGVQb3NpdGlvbiA9IG51bWJlclxudHlwZSBUZXh0TWF0Y2hSdWxlID0gKHRhcmdldFRleHQ6IHN0cmluZywgZXhhY3Q/OiBib29sZWFuKSA9PiBib29sZWFuXG50eXBlIEtleVZhbHVlTWF0Y2hSdWxlcyA9IFtcbiAga2V5TWF0Y2hSdWxlOiBUZXh0TWF0Y2hSdWxlLFxuICB2YWx1ZU1hdGNoUnVsZTogVGV4dE1hdGNoUnVsZSB8IHVuZGVmaW5lZCxcbl1cblxuLyoqXG4gKlxuICogc3JjL21haW4udHNcbiAqXG4gKi9cblxuY29uc3QgVyA9IHdpbmRvd1xuXG5jb25zdCBfYXNIVE1MRWxlbWVudCA9IChub2RlOiBOb2RlKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG5vZGUgOiBudWxsXG59XG5cbmNvbnN0IF9jb21waWxlUmVnRXggPSAocmVnZXhUZXh0OiBzdHJpbmcpOiBSZWdFeHAgPT4ge1xuICBjb25zdCByZWdleFBhcnRzID0gcmVnZXhUZXh0LnNwbGl0KCcvJylcbiAgY29uc3QgcmVnZXhQYXR0ZXJuID0gcmVnZXhQYXJ0c1sxXSFcbiAgY29uc3QgcmVnZXhBcmdzID0gcmVnZXhQYXJ0c1syXVxuICBjb25zdCByZWdleCA9IG5ldyBXLlJlZ0V4cChyZWdleFBhdHRlcm4sIHJlZ2V4QXJncylcbiAgcmV0dXJuIHJlZ2V4XG59XG5cbi8vIENoZWNrIHRvIHNlZSBpZiB0aGUgc3RyaW5nIGB2YWx1ZWAgZWl0aGVyXG4vLyBjb250YWlucyB0aGUgdGhlIHN0cmluZyBgdGVzdGAgKGlmIGB0ZXN0YCBkb2VzXG4vLyBub3Qgc3RhcnQgd2l0aCBgL2ApIG9yIGlmIHRoZSBzdHJpbmdcbi8vIHZhbHVlIG1hdGNoZXMgdGhlIHJlZ2V4IGB0ZXN0YC5cbi8vIFdlIGFzc3VtZSBpZiB0ZXN0IGlzbid0IGEgc3RyaW5nLCBpdHMgYSByZWdleCBvYmplY3QuXG4vL1xuLy8gUnVsZXM6XG4vLyAgIC0gaWYgYHRlc3RgIHN0YXJ0cyB3aXRoIGAvYCB3ZSB0cmVhdCBpdCBhcyBhIHJlZ2V4XG4vLyAgICAgbGl0ZXJhbFxuLy8gICAtIGlmIGB0ZXh0YCBpcyBhbiBlbXB0eSBzdHJpbmcsIHdlIHRyZWF0IGl0IGFzXG4vLyAgICAgbWF0Y2hpbmcgYW55IGNhc2Ugd2hlcmUgdmFsdWUgaXMgb25seSB3aGl0ZXNwYWNlXG4vLyAgIC0gb3RoZXJ3aXNlLCBjaGVjayB0byBzZWUgaWYgdmFsdWUgY29udGFpbnMgdGhlXG4vLyAgICAgc3RyaW5nIGB0ZXN0YFxuLy9cbi8vIElmIGBleGFjdGAgaXMgdHJ1ZSwgdGhlbiB0aGUgc3RyaW5nIGNhc2UgaXQgdGVzdGVkXG4vLyBmb3IgYW4gZXhhY3QgbWF0Y2ggKHRoZSByZWdleCBjYXNlIGlzIG5vdCBhZmZlY3RlZCkuXG5jb25zdCBfdGVzdE1hdGNoZXMgPSAoXG4gIHRlc3Q6IHN0cmluZyxcbiAgdmFsdWU6IHN0cmluZyxcbiAgZXhhY3Q6IGJvb2xlYW4gPSBmYWxzZSxcbik6IGJvb2xlYW4gPT4ge1xuICBpZiAodGVzdFswXSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hdGNoKF9jb21waWxlUmVnRXgodGVzdCkpICE9PSBudWxsXG4gIH1cbiAgaWYgKHRlc3QgPT09ICcnKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKSA9PT0gJydcbiAgfVxuICBpZiAoZXhhY3QpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHRlc3RcbiAgfVxuICByZXR1cm4gdmFsdWUuaW5jbHVkZXModGVzdClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBrZXkgcGFydCBvZiB0aGUgYGtleT12YWx1ZWAgcGFpciBhbmQgdGhlIGluZGV4IG9mIHRoZSBzdGFydCBvZlxuICogdGhlIHZhbHVlIHBhcnQsIG9yIGp1c3QgdGhlIGtleSB3aXRoIGB1bmRlZmluZWRgIGlmIHRoZXJlIGlzIG5vIHZhbHVlIHBhcnRcbiAqL1xuY29uc3QgX2V4dHJhY3RLZXlGcm9tU3RyID0gKHRleHQ6IHN0cmluZyk6IFtzdHJpbmcsIG51bWJlcj9dID0+IHtcbiAgY29uc3QgcXVvdGVkVGVybWluYXRvciA9ICdcIj0nXG4gIGNvbnN0IHVucXVvdGVkVGVybWluYXRvciA9ICc9J1xuICBjb25zdCBpc1F1b3RlZENhc2UgPSB0ZXh0WzBdID09PSAnXCInXG5cbiAgY29uc3QgW3Rlcm1pbmF0b3IsIG5lZWRsZVBvc2l0aW9uXSA9IGlzUXVvdGVkQ2FzZVxuICAgID8gW3F1b3RlZFRlcm1pbmF0b3IsIDFdXG4gICAgOiBbdW5xdW90ZWRUZXJtaW5hdG9yLCAwXVxuXG4gIGNvbnN0IGluZGV4T2ZUZXJtaW5hdG9yID0gdGV4dC5pbmRleE9mKHRlcm1pbmF0b3IsIG5lZWRsZVBvc2l0aW9uKVxuICBpZiAoaW5kZXhPZlRlcm1pbmF0b3IgPT09IC0xKSB7XG4gICAgLy8gTm8ga2V5L3ZhbHVlIHNlcGFyYXRvciBmb3VuZCwgYXR0ZW1wdCB0byBleHRyYWN0IHBsYWluIGtleSBpbnN0ZWFkXG4gICAgbGV0IGtleSA9IHRleHRcbiAgICBpZiAoaXNRdW90ZWRDYXNlKSB7XG4gICAgICBpZiAoIXRleHQuZW5kc1dpdGgoJ1wiJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdW90ZWQgdmFsdWUgJyR7dGV4dH0nIGRvZXMgbm90IHRlcm1pbmF0ZSB3aXRoIHF1b3RlYClcbiAgICAgIH1cbiAgICAgIGtleSA9IHRleHQuc2xpY2UoMSwgdGV4dC5sZW5ndGggLSAxKVxuICAgIH1cbiAgICByZXR1cm4gW2tleSwgdW5kZWZpbmVkXVxuICB9XG5cbiAgY29uc3QgdGVzdENhc2VTdHIgPSB0ZXh0LnNsaWNlKG5lZWRsZVBvc2l0aW9uLCBpbmRleE9mVGVybWluYXRvcilcbiAgY29uc3QgZmluYWxOZWVkbGVQb3NpdGlvbiA9IGluZGV4T2ZUZXJtaW5hdG9yICsgdGVybWluYXRvci5sZW5ndGhcblxuICByZXR1cm4gW3Rlc3RDYXNlU3RyLCBmaW5hbE5lZWRsZVBvc2l0aW9uXVxufVxuXG5jb25zdCBfZXh0cmFjdFZhbHVlTWF0Y2hSdWxlRnJvbVN0ciA9IChcbiAgdGV4dDogc3RyaW5nLFxuICB1cmlFbmNvZGUgPSBmYWxzZSxcbiAgbmVlZGxlUG9zaXRpb24gPSAwLFxuKTogVGV4dE1hdGNoUnVsZSA9PiB7XG4gIGNvbnN0IHRlc3RDYXNlU3RyID0gX2V4dHJhY3RWYWx1ZUZyb21TdHIodGV4dCwgdXJpRW5jb2RlLCBuZWVkbGVQb3NpdGlvbilcbiAgY29uc3QgdGVzdENhc2VGdW5jID0gX3Rlc3RNYXRjaGVzLmJpbmQodW5kZWZpbmVkLCB0ZXN0Q2FzZVN0cilcbiAgcmV0dXJuIHRlc3RDYXNlRnVuY1xufVxuXG5jb25zdCBfZXh0cmFjdFZhbHVlRnJvbVN0ciA9IChcbiAgdGV4dDogc3RyaW5nLFxuICB1cmlFbmNvZGUgPSBmYWxzZSxcbiAgbmVlZGxlUG9zaXRpb24gPSAwLFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNRdW90ZWRDYXNlID0gdGV4dFtuZWVkbGVQb3NpdGlvbl0gPT09ICdcIidcbiAgbGV0IGVuZEluZGV4OiBudW1iZXJcblxuICBpZiAoaXNRdW90ZWRDYXNlKSB7XG4gICAgaWYgKHRleHQuYXQoLTEpICE9PSAnXCInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbmFibGUgdG8gcGFyc2UgdmFsdWUgcnVsZSBmcm9tICR7dGV4dH0uIFZhbHVlIHJ1bGUgc3RhcnRzIHdpdGggYFxuICAgICAgICAgICsgJ1wiIGJ1dCBkb2VzblxcJ3QgZW5kIHdpdGggXCInLFxuICAgICAgKVxuICAgIH1cbiAgICBuZWVkbGVQb3NpdGlvbiArPSAxXG4gICAgZW5kSW5kZXggPSB0ZXh0Lmxlbmd0aCAtIDFcbiAgfSBlbHNlIHtcbiAgICBlbmRJbmRleCA9IHRleHQubGVuZ3RoXG4gIH1cblxuICBsZXQgdGVzdENhc2VTdHIgPSB0ZXh0LnNsaWNlKG5lZWRsZVBvc2l0aW9uLCBlbmRJbmRleClcbiAgaWYgKHVyaUVuY29kZSkge1xuICAgIHRlc3RDYXNlU3RyID0gdGVzdENhc2VTdHIucmVwbGFjZSgvXFxQe0FTQ0lJfS9ndSwgKGMpID0+XG4gICAgICBlbmNvZGVVUklDb21wb25lbnQoYyksXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHRlc3RDYXNlU3RyXG59XG5cbi8vIFBhcnNlIGFuIGFyZ3VtZW50IGxpa2UgYFwiYWJjXCI9XCJ4eXpcImAgaW50b1xuLy8gYSB0ZXN0IGZvciB0aGUga2V5LCBhbmQgYSB0ZXN0IGZvciB0aGUgdmFsdWUuXG4vLyBUaGlzIHdpbGwgcmV0dXJuIHR3byBmdW5jdGlvbnMgdGhlbiwgdGhhdCB5b3Vcbi8vIHNob3VsZCB1c2UgZm9yIGNoZWNraW5nIHRoZSBrZXkgYW5kIHZhbHVlc1xuLy8gaW4geW91ciB0ZXN0IGNhc2UuXG4vL1xuLy8gY29uc3Qga2V5ID0gLi4uLCB2YWx1ZSA9IC4uLlxuLy8gY29uc3QgW2tleVRlc3RGdW5jLCB2YWx1ZVRlc3RGdW5jXSA9IF9wYXJzZUtleVZhbHVlTWF0Y2hBcmcoYXJnKVxuLy9cbi8vIGlmIChrZXlUZXN0RnVuYyhrZXkpKSkge1xuLy8gICAvLyBrZXkgbWF0Y2hlcyB0aGUgdGVzdCBjb25kaXRpb25cbi8vIH1cbmNvbnN0IF9wYXJzZUtleVZhbHVlTWF0Y2hSdWxlcyA9IChhcmc6IHN0cmluZyk6IEtleVZhbHVlTWF0Y2hSdWxlcyA9PiB7XG4gIGNvbnN0IFtrZXksIG5lZWRsZVBvc10gPSBfZXh0cmFjdEtleUZyb21TdHIoYXJnKVxuICBjb25zdCBrZXlNYXRjaFJ1bGUgPSAoYXJnOiBzdHJpbmcpID0+IF90ZXN0TWF0Y2hlcyhrZXksIGFyZywgdHJ1ZSlcbiAgbGV0IHZhbHVlTWF0Y2hSdWxlOiBUZXh0TWF0Y2hSdWxlIHwgdW5kZWZpbmVkXG4gIGlmIChuZWVkbGVQb3MgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHZhbHVlID0gX2V4dHJhY3RWYWx1ZUZyb21TdHIoYXJnLCBmYWxzZSwgbmVlZGxlUG9zKVxuICAgIHZhbHVlTWF0Y2hSdWxlID0gKGFyZzogc3RyaW5nKSA9PiBfdGVzdE1hdGNoZXModmFsdWUsIGFyZywgdHJ1ZSlcbiAgfVxuICByZXR1cm4gW2tleU1hdGNoUnVsZSwgdmFsdWVNYXRjaFJ1bGVdXG59XG5cbmNvbnN0IF9wYXJzZUNTU0luc3RydWN0aW9uID0gKGFyZzogc3RyaW5nKTogW0NTU0luc3RydWN0aW9uLCBDU1NWYWx1ZV0gPT4ge1xuICBjb25zdCBycyA9IGFyZy5zcGxpdCgnOicpXG4gIGlmIChycy5sZW5ndGggIT09IDIpIHtcbiAgICB0aHJvdyBFcnJvcihgVW5leHBlY3RlZCBmb3JtYXQgZm9yIGEgQ1NTIHJ1bGU6ICR7YXJnfWApXG4gIH1cbiAgcmV0dXJuIFtyc1swXSEudHJpbSgpLCByc1sxXSEudHJpbSgpXVxufVxuXG5jb25zdCBfYWxsT3RoZXJTaWJsaW5ncyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50W10gPT4ge1xuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGNvbnN0IHNpYmxpbmdzID0gQXJyYXkuZnJvbShlbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4pXG4gIGNvbnN0IG90aGVySFRNTEVsZW1lbnRzID0gW11cbiAgZm9yIChjb25zdCBzaWIgb2Ygc2libGluZ3MpIHtcbiAgICBpZiAoc2liID09PSBlbGVtZW50KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBzaWJsaW5nSFRNTEVsZW1lbnQgPSBfYXNIVE1MRWxlbWVudChzaWIpXG4gICAgaWYgKHNpYmxpbmdIVE1MRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgb3RoZXJIVE1MRWxlbWVudHMucHVzaChzaWJsaW5nSFRNTEVsZW1lbnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBvdGhlckhUTUxFbGVtZW50c1xufVxuXG5jb25zdCBfbmV4dFNpYmxpbmdFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHNpYmxpbmdzID0gVy5BcnJheS5mcm9tKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgY29uc3QgaW5kZXhPZkVsbSA9IHNpYmxpbmdzLmluZGV4T2YoZWxlbWVudClcbiAgY29uc3QgbmV4dFNpYmxpbmcgPSBzaWJsaW5nc1tpbmRleE9mRWxtICsgMV1cbiAgaWYgKG5leHRTaWJsaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHJldHVybiBfYXNIVE1MRWxlbWVudChuZXh0U2libGluZylcbn1cblxuY29uc3QgX2FsbENoaWxkcmVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG4gIHJldHVybiBXLkFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbilcbiAgICAubWFwKChlKSA9PiBfYXNIVE1MRWxlbWVudChlKSlcbiAgICAuZmlsdGVyKChlKSA9PiBlICE9PSBudWxsKVxufVxuXG5jb25zdCBfYWxsQ2hpbGRyZW5SZWN1cnNpdmUgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgcmV0dXJuIFcuQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJzpzY29wZSAqJykpXG4gICAgLm1hcCgoZSkgPT4gX2FzSFRNTEVsZW1lbnQoZSkpXG4gICAgLmZpbHRlcigoZSkgPT4gZSAhPT0gbnVsbClcbn1cblxuY29uc3QgX3N0cmlwQ3NzT3BlcmF0b3IgPSAob3BlcmF0b3I6IHN0cmluZywgc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICBpZiAoc2VsZWN0b3JbMF0gIT09IG9wZXJhdG9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEV4cGVjdGVkIHRvIGZpbmQgJHtvcGVyYXRvcn0gaW4gaW5pdGlhbCBwb3NpdGlvbiBvZiBcIiR7c2VsZWN0b3J9YCxcbiAgICApXG4gIH1cbiAgcmV0dXJuIHNlbGVjdG9yLnJlcGxhY2Uob3BlcmF0b3IsICcnKS50cmltU3RhcnQoKVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjpjc3Mtc2VsZWN0b3JcIiBydWxlXG5jb25zdCBvcGVyYXRvckNzc1NlbGVjdG9yID0gKFxuICBzZWxlY3RvcjogQ1NTU2VsZWN0b3IsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogT3BlcmF0b3JSZXN1bHQgPT4ge1xuICBjb25zdCB0cmltbWVkU2VsZWN0b3IgPSBzZWxlY3Rvci50cmltU3RhcnQoKVxuICBpZiAodHJpbW1lZFNlbGVjdG9yLnN0YXJ0c1dpdGgoJysnKSkge1xuICAgIGNvbnN0IHN1Yk9wZXJhdG9yID0gX3N0cmlwQ3NzT3BlcmF0b3IoJysnLCB0cmltbWVkU2VsZWN0b3IpXG4gICAgaWYgKHN1Yk9wZXJhdG9yID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3QgbmV4dFNpYk5vZGUgPSBfbmV4dFNpYmxpbmdFbGVtZW50KGVsZW1lbnQpXG4gICAgaWYgKG5leHRTaWJOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIG5leHRTaWJOb2RlLm1hdGNoZXMoc3ViT3BlcmF0b3IpID8gW25leHRTaWJOb2RlXSA6IFtdXG4gIH0gZWxzZSBpZiAodHJpbW1lZFNlbGVjdG9yLnN0YXJ0c1dpdGgoJ34nKSkge1xuICAgIGNvbnN0IHN1Yk9wZXJhdG9yID0gX3N0cmlwQ3NzT3BlcmF0b3IoJ34nLCB0cmltbWVkU2VsZWN0b3IpXG4gICAgaWYgKHN1Yk9wZXJhdG9yID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgY29uc3QgYWxsU2libGluZ05vZGVzID0gX2FsbE90aGVyU2libGluZ3MoZWxlbWVudClcbiAgICByZXR1cm4gYWxsU2libGluZ05vZGVzLmZpbHRlcigoeCkgPT4geC5tYXRjaGVzKHN1Yk9wZXJhdG9yKSlcbiAgfSBlbHNlIGlmICh0cmltbWVkU2VsZWN0b3Iuc3RhcnRzV2l0aCgnPicpKSB7XG4gICAgY29uc3Qgc3ViT3BlcmF0b3IgPSBfc3RyaXBDc3NPcGVyYXRvcignPicsIHRyaW1tZWRTZWxlY3RvcilcbiAgICBpZiAoc3ViT3BlcmF0b3IgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cbiAgICBjb25zdCBhbGxDaGlsZE5vZGVzID0gX2FsbENoaWxkcmVuKGVsZW1lbnQpXG4gICAgcmV0dXJuIGFsbENoaWxkTm9kZXMuZmlsdGVyKCh4KSA9PiB4Lm1hdGNoZXMoc3ViT3BlcmF0b3IpKVxuICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN0YXJ0c1dpdGgoJyAnKSkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOnNjb3BlICcgKyB0cmltbWVkU2VsZWN0b3IpKVxuICB9XG5cbiAgaWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICByZXR1cm4gW2VsZW1lbnRdXG4gIH1cbiAgcmV0dXJuIFtdXG59XG5cbmNvbnN0IF9oYXNQbGFpblNlbGVjdG9yQ2FzZSA9IChcbiAgc2VsZWN0b3I6IENTU1NlbGVjdG9yLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikgPyBbZWxlbWVudF0gOiBbXVxufVxuXG5jb25zdCBfaGFzUHJvY2VkdXJhbFNlbGVjdG9yQ2FzZSA9IChcbiAgc2VsZWN0b3I6IFByb2NlZHVyYWxTZWxlY3RvcixcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBPcGVyYXRvclJlc3VsdCA9PiB7XG4gIGNvbnN0IHNob3VsZEJlR3JlZWR5ID0gc2VsZWN0b3JbMF0/LnR5cGUgIT09ICdjc3Mtc2VsZWN0b3InXG4gIGNvbnN0IGluaXRFbGVtZW50cyA9IHNob3VsZEJlR3JlZWR5XG4gICAgPyBfYWxsQ2hpbGRyZW5SZWN1cnNpdmUoZWxlbWVudClcbiAgICA6IFtlbGVtZW50XVxuICBjb25zdCBtYXRjaGVzID0gY29tcGlsZUFuZEFwcGx5UHJvY2VkdXJhbFNlbGVjdG9yKHNlbGVjdG9yLCBpbml0RWxlbWVudHMpXG4gIHJldHVybiBtYXRjaGVzLmxlbmd0aCA9PT0gMCA/IFtdIDogW2VsZW1lbnRdXG59XG5cbi8vIEltcGxlbWVudGF0aW9uIG9mIFwiOmhhc1wiIHJ1bGVcbmNvbnN0IG9wZXJhdG9ySGFzID0gKFxuICBpbnN0cnVjdGlvbjogQ1NTU2VsZWN0b3IgfCBQcm9jZWR1cmFsU2VsZWN0b3IsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogT3BlcmF0b3JSZXN1bHQgPT4ge1xuICBpZiAoVy5BcnJheS5pc0FycmF5KGluc3RydWN0aW9uKSkge1xuICAgIHJldHVybiBfaGFzUHJvY2VkdXJhbFNlbGVjdG9yQ2FzZShpbnN0cnVjdGlvbiwgZWxlbWVudClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gX2hhc1BsYWluU2VsZWN0b3JDYXNlKGluc3RydWN0aW9uLCBlbGVtZW50KVxuICB9XG59XG5cbi8vIEltcGxlbWVudGF0aW9uIG9mIFwiOmhhcy10ZXh0XCIgcnVsZVxuY29uc3Qgb3BlcmF0b3JIYXNUZXh0ID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgY29uc3QgdGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0XG4gIGNvbnN0IHZhbHVlVGVzdCA9IF9leHRyYWN0VmFsdWVNYXRjaFJ1bGVGcm9tU3RyKGluc3RydWN0aW9uKVxuICByZXR1cm4gdmFsdWVUZXN0KHRleHQpID8gW2VsZW1lbnRdIDogW11cbn1cblxuY29uc3QgX25vdFBsYWluU2VsZWN0b3JDYXNlID0gKFxuICBzZWxlY3RvcjogQ1NTU2VsZWN0b3IsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogT3BlcmF0b3JSZXN1bHQgPT4ge1xuICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSA/IFtdIDogW2VsZW1lbnRdXG59XG5cbmNvbnN0IF9ub3RQcm9jZWR1cmFsU2VsZWN0b3JDYXNlID0gKFxuICBzZWxlY3RvcjogUHJvY2VkdXJhbFNlbGVjdG9yLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgY29uc3QgbWF0Y2hlcyA9IGNvbXBpbGVBbmRBcHBseVByb2NlZHVyYWxTZWxlY3RvcihzZWxlY3RvciwgW2VsZW1lbnRdKVxuICByZXR1cm4gbWF0Y2hlcy5sZW5ndGggPT09IDAgPyBbZWxlbWVudF0gOiBbXVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjpub3RcIiBydWxlXG5jb25zdCBvcGVyYXRvck5vdCA9IChcbiAgaW5zdHJ1Y3Rpb246IENTU1NlbGVjdG9yIHwgUHJvY2VkdXJhbFNlbGVjdG9yLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5zdHJ1Y3Rpb24pKSB7XG4gICAgcmV0dXJuIF9ub3RQcm9jZWR1cmFsU2VsZWN0b3JDYXNlKGluc3RydWN0aW9uLCBlbGVtZW50KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBfbm90UGxhaW5TZWxlY3RvckNhc2UoaW5zdHJ1Y3Rpb24sIGVsZW1lbnQpXG4gIH1cbn1cblxuLy8gSW1wbGVtZW50YXRpb24gb2YgXCI6bWF0Y2hlcy1wcm9wZXJ0eVwiIHJ1bGVcbmNvbnN0IG9wZXJhdG9yTWF0Y2hlc1Byb3BlcnR5ID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgY29uc3QgW2tleVRlc3QsIHZhbHVlVGVzdF0gPSBfcGFyc2VLZXlWYWx1ZU1hdGNoUnVsZXMoaW5zdHJ1Y3Rpb24pXG4gIGZvciAoY29uc3QgW3Byb3BOYW1lLCBwcm9wVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVsZW1lbnQpKSB7XG4gICAgaWYgKCFrZXlUZXN0KHByb3BOYW1lKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKHZhbHVlVGVzdCAhPT0gdW5kZWZpbmVkICYmICF2YWx1ZVRlc3QocHJvcFZhbHVlKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgcmV0dXJuIFtlbGVtZW50XVxuICB9XG4gIHJldHVybiBbXVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjptaW4tdGV4dC1sZW5ndGhcIiBydWxlXG5jb25zdCBvcGVyYXRvck1pblRleHRMZW5ndGggPSAoXG4gIGluc3RydWN0aW9uOiBzdHJpbmcsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogT3BlcmF0b3JSZXN1bHQgPT4ge1xuICBjb25zdCBtaW5MZW5ndGggPSAraW5zdHJ1Y3Rpb25cbiAgaWYgKG1pbkxlbmd0aCA9PT0gVy5OYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYG1pbi10ZXh0LWxlbmd0aDogSW52YWxpZCBhcmcsICR7aW5zdHJ1Y3Rpb259YClcbiAgfVxuICByZXR1cm4gZWxlbWVudC5pbm5lclRleHQudHJpbSgpLmxlbmd0aCA+PSBtaW5MZW5ndGggPyBbZWxlbWVudF0gOiBbXVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjptYXRjaGVzLWF0dHJcIiBydWxlXG5jb25zdCBvcGVyYXRvck1hdGNoZXNBdHRyID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgY29uc3QgW2tleVRlc3QsIHZhbHVlVGVzdF0gPSBfcGFyc2VLZXlWYWx1ZU1hdGNoUnVsZXMoaW5zdHJ1Y3Rpb24pXG4gIGZvciAoY29uc3QgYXR0ck5hbWUgb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGVOYW1lcygpKSB7XG4gICAgaWYgKCFrZXlUZXN0KGF0dHJOYW1lKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3QgYXR0clZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgaWYgKFxuICAgICAgYXR0clZhbHVlID09PSBudWxsXG4gICAgICB8fCAodmFsdWVUZXN0ICE9PSB1bmRlZmluZWQgJiYgIXZhbHVlVGVzdChhdHRyVmFsdWUpKVxuICAgICkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgcmV0dXJuIFtlbGVtZW50XVxuICB9XG4gIHJldHVybiBbXVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjptYXRjaGVzLWNzcy0qXCIgcnVsZXNcbmNvbnN0IG9wZXJhdG9yTWF0Y2hlc0NTUyA9IChcbiAgYmVmb3JlT3JBZnRlcjogc3RyaW5nIHwgbnVsbCxcbiAgY3NzSW5zdHJ1Y3Rpb246IHN0cmluZyxcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBPcGVyYXRvclJlc3VsdCA9PiB7XG4gIGNvbnN0IFtjc3NLZXksIGV4cGVjdGVkVmFsXSA9IF9wYXJzZUNTU0luc3RydWN0aW9uKGNzc0luc3RydWN0aW9uKVxuICBjb25zdCBlbG1TdHlsZSA9IFcuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBiZWZvcmVPckFmdGVyKVxuICBjb25zdCBzdHlsZVZhbHVlID0gZWxtU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShjc3NLZXkpXG4gIGlmIChzdHlsZVZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBXZSdyZSBxdWVyeWluZyBmb3IgYSBzdHlsZSBwcm9wZXJ0eSB0aGF0IGRvZXNuJ3QgZXhpc3QsIHdoaWNoXG4gICAgLy8gdHJpdmlhbGx5IGRvZXNuJ3QgbWF0Y2ggdGhlbi5cbiAgICByZXR1cm4gW11cbiAgfVxuICBsZXQgbWF0Y2hlZFxuICBpZiAoZXhwZWN0ZWRWYWwuc3RhcnRzV2l0aCgnLycpICYmIGV4cGVjdGVkVmFsLmVuZHNXaXRoKCcvJykpIHtcbiAgICBtYXRjaGVkID0gc3R5bGVWYWx1ZS5tYXRjaChfY29tcGlsZVJlZ0V4KGV4cGVjdGVkVmFsKSkgIT09IG51bGxcbiAgfSBlbHNlIHtcbiAgICBtYXRjaGVkID0gZXhwZWN0ZWRWYWwgPT09IHN0eWxlVmFsdWVcbiAgfVxuICByZXR1cm4gbWF0Y2hlZCA/IFtlbGVtZW50XSA6IFtdXG59XG5cbi8vIEltcGxlbWVudGF0aW9uIG9mIFwiOm1hdGNoZXMtbWVkaWFcIiBydWxlXG5jb25zdCBvcGVyYXRvck1hdGNoZXNNZWRpYSA9IChcbiAgaW5zdHJ1Y3Rpb246IHN0cmluZyxcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBPcGVyYXRvclJlc3VsdCA9PiB7XG4gIHJldHVybiBXLm1hdGNoTWVkaWEoaW5zdHJ1Y3Rpb24pLm1hdGNoZXMgPyBbZWxlbWVudF0gOiBbXVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvbiBvZiBcIjptYXRjaGVzLXBhdGhcIiBydWxlXG5jb25zdCBvcGVyYXRvck1hdGNoZXNQYXRoID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgY29uc3QgcGF0aEFuZFF1ZXJ5ID0gVy5sb2NhdGlvbi5wYXRobmFtZSArIFcubG9jYXRpb24uc2VhcmNoXG4gIGNvbnN0IG1hdGNoUnVsZSA9IF9leHRyYWN0VmFsdWVNYXRjaFJ1bGVGcm9tU3RyKGluc3RydWN0aW9uLCB0cnVlKVxuICByZXR1cm4gbWF0Y2hSdWxlKHBhdGhBbmRRdWVyeSkgPyBbZWxlbWVudF0gOiBbXVxufVxuXG5jb25zdCBfdXB3YXJkSW50Q2FzZSA9IChcbiAgaW50TmVlZGxlOiBOZWVkbGVQb3NpdGlvbixcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBPcGVyYXRvclJlc3VsdCA9PiB7XG4gIGlmIChpbnROZWVkbGUgPCAxIHx8IGludE5lZWRsZSA+PSAyNTYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVwd2FyZDogaW52YWxpZCBhcmcsICR7aW50TmVlZGxlfWApXG4gIH1cbiAgbGV0IGN1cnJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCB8IFBhcmVudE5vZGUgfCBudWxsID0gZWxlbWVudFxuICB3aGlsZSAoY3VycmVudEVsZW1lbnQgIT09IG51bGwgJiYgaW50TmVlZGxlID4gMCkge1xuICAgIGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEVsZW1lbnQucGFyZW50Tm9kZVxuICAgIGludE5lZWRsZSAtPSAxXG4gIH1cbiAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaHRtbEVsZW1lbnQgPSBfYXNIVE1MRWxlbWVudChjdXJyZW50RWxlbWVudClcbiAgICByZXR1cm4gaHRtbEVsZW1lbnQgPT09IG51bGwgPyBbXSA6IFtodG1sRWxlbWVudF1cbiAgfVxufVxuXG5jb25zdCBfdXB3YXJkUHJvY2VkdXJhbFNlbGVjdG9yQ2FzZSA9IChcbiAgc2VsZWN0b3I6IFByb2NlZHVyYWxTZWxlY3RvcixcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBPcGVyYXRvclJlc3VsdCA9PiB7XG4gIGNvbnN0IGNoaWxkRmlsdGVyID0gY29tcGlsZVByb2NlZHVyYWxTZWxlY3RvcihzZWxlY3RvcilcbiAgbGV0IG5lZWRsZTogUGFyZW50Tm9kZSB8IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnRcbiAgd2hpbGUgKG5lZWRsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gX2FzSFRNTEVsZW1lbnQobmVlZGxlKVxuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlcyA9IGFwcGx5Q29tcGlsZWRTZWxlY3RvcihjaGlsZEZpbHRlciwgW2N1cnJlbnRFbGVtZW50XSlcbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybiBbY3VycmVudEVsZW1lbnRdXG4gICAgfVxuICAgIG5lZWRsZSA9IGN1cnJlbnRFbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuICByZXR1cm4gW11cbn1cblxuY29uc3QgX3Vwd2FyZFBsYWluU2VsZWN0b3JDYXNlID0gKFxuICBzZWxlY3RvcjogQ1NTU2VsZWN0b3IsXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogT3BlcmF0b3JSZXN1bHQgPT4ge1xuICBsZXQgbmVlZGxlOiBQYXJlbnROb2RlIHwgSFRNTERvY3VtZW50IHwgbnVsbCA9IGVsZW1lbnRcbiAgd2hpbGUgKG5lZWRsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gX2FzSFRNTEVsZW1lbnQobmVlZGxlKVxuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gW2N1cnJlbnRFbGVtZW50XVxuICAgIH1cbiAgICBuZWVkbGUgPSBjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlXG4gIH1cbiAgcmV0dXJuIFtdXG59XG5cbi8vIEltcGxlbWVudGF0aW9uIG9mIFwiOnVwd2FyZFwiIHJ1bGVcbmNvbnN0IG9wZXJhdG9yVXB3YXJkID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nIHwgUHJvY2VkdXJhbFNlbGVjdG9yLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IE9wZXJhdG9yUmVzdWx0ID0+IHtcbiAgaWYgKFcuTnVtYmVyLmlzSW50ZWdlcigraW5zdHJ1Y3Rpb24pKSB7XG4gICAgcmV0dXJuIF91cHdhcmRJbnRDYXNlKCtpbnN0cnVjdGlvbiwgZWxlbWVudClcbiAgfSBlbHNlIGlmIChXLkFycmF5LmlzQXJyYXkoaW5zdHJ1Y3Rpb24pKSB7XG4gICAgcmV0dXJuIF91cHdhcmRQcm9jZWR1cmFsU2VsZWN0b3JDYXNlKGluc3RydWN0aW9uLCBlbGVtZW50KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBfdXB3YXJkUGxhaW5TZWxlY3RvckNhc2UoaW5zdHJ1Y3Rpb24sIGVsZW1lbnQpXG4gIH1cbn1cblxuLy8gSW1wbGVtZW50YXRpb24gb2YgXCI6eHBhdGhcIiBydWxlXG5jb25zdCBvcGVyYXRvclhQYXRoID0gKFxuICBpbnN0cnVjdGlvbjogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbik6IEhUTUxFbGVtZW50W10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBXLmRvY3VtZW50LmV2YWx1YXRlKFxuICAgIGluc3RydWN0aW9uLFxuICAgIGVsZW1lbnQsXG4gICAgbnVsbCxcbiAgICBXLlhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX0lURVJBVE9SX1RZUEUsXG4gICAgbnVsbCxcbiAgKVxuICBjb25zdCBtYXRjaGVzOiBIVE1MRWxlbWVudFtdID0gW11cbiAgbGV0IGN1cnJlbnROb2RlOiBOb2RlIHwgbnVsbFxuICB3aGlsZSAoKGN1cnJlbnROb2RlID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCkpKSB7XG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBfYXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSlcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIG1hdGNoZXMucHVzaChjdXJyZW50RWxlbWVudClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXNcbn1cblxuY29uc3QgcnVsZVR5cGVUb0Z1bmNNYXA6IFJlY29yZDxPcGVyYXRvclR5cGUsIFVuYm91bmRPcGVyYXRvckZ1bmM+ID0ge1xuICAnY29udGFpbnMnOiBvcGVyYXRvckhhc1RleHQsXG4gICdjc3Mtc2VsZWN0b3InOiBvcGVyYXRvckNzc1NlbGVjdG9yLFxuICAnaGFzJzogb3BlcmF0b3JIYXMsXG4gICdoYXMtdGV4dCc6IG9wZXJhdG9ySGFzVGV4dCxcbiAgJ21hdGNoZXMtYXR0cic6IG9wZXJhdG9yTWF0Y2hlc0F0dHIsXG4gICdtYXRjaGVzLWNzcyc6IG9wZXJhdG9yTWF0Y2hlc0NTUy5iaW5kKHVuZGVmaW5lZCwgbnVsbCksXG4gICdtYXRjaGVzLWNzcy1hZnRlcic6IG9wZXJhdG9yTWF0Y2hlc0NTUy5iaW5kKHVuZGVmaW5lZCwgJzo6YWZ0ZXInKSxcbiAgJ21hdGNoZXMtY3NzLWJlZm9yZSc6IG9wZXJhdG9yTWF0Y2hlc0NTUy5iaW5kKHVuZGVmaW5lZCwgJzo6YmVmb3JlJyksXG4gICdtYXRjaGVzLW1lZGlhJzogb3BlcmF0b3JNYXRjaGVzTWVkaWEsXG4gICdtYXRjaGVzLXBhdGgnOiBvcGVyYXRvck1hdGNoZXNQYXRoLFxuICAnbWF0Y2hlcy1wcm9wZXJ0eSc6IG9wZXJhdG9yTWF0Y2hlc1Byb3BlcnR5LFxuICAnbWluLXRleHQtbGVuZ3RoJzogb3BlcmF0b3JNaW5UZXh0TGVuZ3RoLFxuICAnbm90Jzogb3BlcmF0b3JOb3QsXG4gICd1cHdhcmQnOiBvcGVyYXRvclVwd2FyZCxcbiAgJ3hwYXRoJzogb3BlcmF0b3JYUGF0aCxcbn1cblxuY29uc3QgY29tcGlsZVByb2NlZHVyYWxTZWxlY3RvciA9IChcbiAgb3BlcmF0b3JzOiBQcm9jZWR1cmFsU2VsZWN0b3IsXG4pOiBDb21waWxlZFByb2NlZHVyYWxTZWxlY3RvciA9PiB7XG4gIGNvbnN0IG91dHB1dE9wZXJhdG9yTGlzdCA9IFtdXG4gIGZvciAoY29uc3Qgb3BlcmF0b3Igb2Ygb3BlcmF0b3JzKSB7XG4gICAgY29uc3QgYW5PcGVyYXRvckZ1bmMgPSBydWxlVHlwZVRvRnVuY01hcFtvcGVyYXRvci50eXBlXVxuICAgIGNvbnN0IGFyZ3MgPSBbb3BlcmF0b3IuYXJnXVxuICAgIGlmIChhbk9wZXJhdG9yRnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOb3Qgc3VyZSB3aGF0IHRvIGRvIHdpdGggb3BlcmF0b3Igb2YgdHlwZSAke29wZXJhdG9yLnR5cGV9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBvdXRwdXRPcGVyYXRvckxpc3QucHVzaCh7XG4gICAgICB0eXBlOiBvcGVyYXRvci50eXBlLFxuICAgICAgZnVuYzogYW5PcGVyYXRvckZ1bmMuYmluZCh1bmRlZmluZWQsIC4uLmFyZ3MpLFxuICAgICAgYXJncyxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dE9wZXJhdG9yTGlzdFxufVxuXG4vLyBMaXN0IG9mIG9wZXJhdG9yIHR5cGVzIHRoYXQgd2lsbCBiZSBlaXRoZXIgZ2xvYmFsbHkgdHJ1ZSBvciBmYWxzZVxuLy8gaW5kZXBlbmRlbnQgb2YgdGhlIHBhc3NlZCBlbGVtZW50LiBXZSB1c2UgdGhpcyBsaXN0IHRvIG9wdGltaXplXG4vLyBhcHBseWluZyBlYWNoIG9wZXJhdG9yIChpLmUuLCB3ZSBqdXN0IGNoZWNrIHRoZSBmaXJzdCBlbGVtZW50LCBhbmQgdGhlblxuLy8gYWNjZXB0IG9yIHJlamVjdCBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbnNpZGVyYXRpb24gc2V0IGFjY29yZGluZ2x5KS5cbmNvbnN0IGZhc3RQYXRoT3BlcmF0b3JUeXBlczogT3BlcmF0b3JUeXBlW10gPSBbJ21hdGNoZXMtbWVkaWEnLCAnbWF0Y2hlcy1wYXRoJ11cblxuY29uc3QgX2RldGVybWluZUluaXROb2Rlc0FuZEluZGV4ID0gKFxuICBzZWxlY3RvcjogQ29tcGlsZWRQcm9jZWR1cmFsU2VsZWN0b3IsXG4gIGluaXROb2Rlcz86IEhUTUxFbGVtZW50W10sXG4pOiBbbnVtYmVyLCBIVE1MRWxlbWVudFtdXSA9PiB7XG4gIGxldCBub2Rlc1RvQ29uc2lkZXI6IEhUTUxFbGVtZW50W10gPSBbXVxuICBsZXQgaW5kZXggPSAwXG5cbiAgLy8gQSBjb3VwbGUgb2Ygc3BlY2lhbCBjYXNlcyB0byBjb25zaWRlci5cbiAgLy9cbiAgLy8gQ2FzZSBvbmU6IHdlJ3JlIGFwcGx5aW5nIHRoZSBwcm9jZWR1cmFsIGZpbHRlciBvbiBhIHNldCBvZiBub2RlcyAoaW5zdGVhZFxuICAvLyBvZiB0aGUgZW50aXJlIGRvY3VtZW50KSAgSW4gdGhpcyBjYXNlLCB3ZSBhbHJlYWR5IGtub3cgd2hpY2ggbm9kZXMgdG9cbiAgLy8gY29uc2lkZXIsIGVhc3kgY2FzZS5cbiAgY29uc3QgZmlyc3RPcGVyYXRvciA9IHNlbGVjdG9yWzBdIVxuICBjb25zdCBmaXJzdE9wZXJhdG9yVHlwZSA9IGZpcnN0T3BlcmF0b3IudHlwZVxuICBjb25zdCBmaXJzdEFyZyA9IGZpcnN0T3BlcmF0b3IuYXJnc1swXVxuXG4gIGlmIChpbml0Tm9kZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIG5vZGVzVG9Db25zaWRlciA9IFcuQXJyYXkuZnJvbShpbml0Tm9kZXMpXG4gIH0gZWxzZSBpZiAoZmlyc3RPcGVyYXRvclR5cGUgPT09ICdjc3Mtc2VsZWN0b3InKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBmaXJzdEFyZyBhcyBDU1NTZWxlY3RvclxuICAgIC8vIENhc2UgdHdvOiB3ZSdyZSBjb25zaWRlcmluZyB0aGUgZW50aXJlIGRvY3VtZW50LCBhbmQgdGhlIGZpcnN0IG9wZXJhdG9yXG4gICAgLy8gaXMgYSAnY3NzLXNlbGVjdG9yJy4gSGVyZSwgd2UganVzdCBzcGVjaWFsIGNhc2UgdXNpbmcgcXVlcnlTZWxlY3RvckFsbFxuICAgIC8vIGluc3RlYWQgb2Ygc3RhcnRpbmcgd2l0aCB0aGUgZnVsbCBzZXQgb2YgcG9zc2libGUgbm9kZXMuXG4gICAgbm9kZXNUb0NvbnNpZGVyID0gVy5BcnJheS5mcm9tKFcuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgaW5kZXggKz0gMVxuICB9IGVsc2UgaWYgKGZpcnN0T3BlcmF0b3JUeXBlID09PSAneHBhdGgnKSB7XG4gICAgY29uc3QgeHBhdGggPSBmaXJzdEFyZyBhcyBzdHJpbmdcbiAgICBub2Rlc1RvQ29uc2lkZXIgPSBvcGVyYXRvclhQYXRoKHhwYXRoLCBXLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICBpbmRleCArPSAxXG4gIH0gZWxzZSB7XG4gICAgLy8gQ2FzZSB0aHJlZTogd2UgZ290dGEgYXBwbHkgdGhlIGZpcnN0IG9wZXJhdG9yIHRvIHRoZSBlbnRpcmUgZG9jdW1lbnQuXG4gICAgLy8gWXVjayBidXQgdW4tYXZvaWRhYmxlLlxuICAgIGNvbnN0IGFsbE5vZGVzID0gVy5BcnJheS5mcm9tKFcuZG9jdW1lbnQuYWxsKVxuICAgIG5vZGVzVG9Db25zaWRlciA9IGFsbE5vZGVzLmZpbHRlcihfYXNIVE1MRWxlbWVudCkgYXMgSFRNTEVsZW1lbnRbXVxuICB9XG4gIHJldHVybiBbaW5kZXgsIG5vZGVzVG9Db25zaWRlcl1cbn1cblxuY29uc3QgYXBwbHlDb21waWxlZFNlbGVjdG9yID0gKFxuICBzZWxlY3RvcjogQ29tcGlsZWRQcm9jZWR1cmFsU2VsZWN0b3IsXG4gIGluaXROb2Rlcz86IEhUTUxFbGVtZW50W10sXG4pOiBIVE1MRWxlbWVudFtdID0+IHtcbiAgY29uc3QgaW5pdFN0YXRlID0gX2RldGVybWluZUluaXROb2Rlc0FuZEluZGV4KHNlbGVjdG9yLCBpbml0Tm9kZXMpXG4gIGxldCBbaW5kZXgsIG5vZGVzVG9Db25zaWRlcl0gPSBpbml0U3RhdGVcbiAgY29uc3QgbnVtT3BlcmF0b3JzID0gc2VsZWN0b3IubGVuZ3RoXG4gIGZvciAoaW5kZXg7IG5vZGVzVG9Db25zaWRlci5sZW5ndGggPiAwICYmIGluZGV4IDwgbnVtT3BlcmF0b3JzOyArK2luZGV4KSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBzZWxlY3RvcltpbmRleF0hXG4gICAgY29uc3Qgb3BlcmF0b3JGdW5jID0gb3BlcmF0b3IuZnVuY1xuICAgIGNvbnN0IG9wZXJhdG9yVHlwZSA9IG9wZXJhdG9yLnR5cGVcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBzcGVjaWFsIGNhc2UgdGhlIDptYXRjaGVzLXBhdGggY2FzZSBoZXJlLCBzaW5jZSBpZlxuICAgIC8vIGlmIGl0IHBhc3NlcyBmb3Igb25lIGVsZW1lbnQsIHRoZW4gaXQgd2lsbCBwYXNzIGZvciBhbGwgZWxlbWVudHMuXG4gICAgaWYgKGZhc3RQYXRoT3BlcmF0b3JUeXBlcy5pbmNsdWRlcyhvcGVyYXRvclR5cGUpKSB7XG4gICAgICBjb25zdCBmaXJzdE5vZGUgPSBub2Rlc1RvQ29uc2lkZXJbMF0hXG4gICAgICBpZiAob3BlcmF0b3JGdW5jKGZpcnN0Tm9kZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG5vZGVzVG9Db25zaWRlciA9IFtdXG4gICAgICB9XG4gICAgICAvLyBOb3RlIHRoYXQgdW5sZXNzIHdlJ3ZlIHRha2VuIHRoZSBpZi10cnVlIGJyYW5jaCBhYm92ZSwgdGhlblxuICAgICAgLy8gdGhlIG5vZGVzVG9Db25zaWRlciBhcnJheSB3aWxsIHN0aWxsIGhhdmUgYWxsIHRoZSBlbGVtZW50c1xuICAgICAgLy8gaXQgc3RhcnRlZCB3aXRoLlxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBsZXQgbmV3Tm9kZXNUb0NvbnNpZGVyOiBIVE1MRWxlbWVudFtdID0gW11cbiAgICBmb3IgKGNvbnN0IGFOb2RlIG9mIG5vZGVzVG9Db25zaWRlcikge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3BlcmF0b3JGdW5jKGFOb2RlKVxuICAgICAgbmV3Tm9kZXNUb0NvbnNpZGVyID0gbmV3Tm9kZXNUb0NvbnNpZGVyLmNvbmNhdChyZXN1bHQpXG4gICAgfVxuICAgIG5vZGVzVG9Db25zaWRlciA9IG5ld05vZGVzVG9Db25zaWRlclxuICB9XG5cbiAgcmV0dXJuIG5vZGVzVG9Db25zaWRlclxufVxuXG5jb25zdCBjb21waWxlQW5kQXBwbHlQcm9jZWR1cmFsU2VsZWN0b3IgPSAoXG4gIHNlbGVjdG9yOiBQcm9jZWR1cmFsU2VsZWN0b3IsXG4gIGluaXRFbGVtZW50czogSFRNTEVsZW1lbnRbXSxcbik6IEhUTUxFbGVtZW50W10gPT4ge1xuICBjb25zdCBjb21waWxlZCA9IGNvbXBpbGVQcm9jZWR1cmFsU2VsZWN0b3Ioc2VsZWN0b3IpXG4gIHJldHVybiBhcHBseUNvbXBpbGVkU2VsZWN0b3IoY29tcGlsZWQsIGluaXRFbGVtZW50cylcbn1cblxuZXhwb3J0IHtcbiAgYXBwbHlDb21waWxlZFNlbGVjdG9yLFxuICBjb21waWxlUHJvY2VkdXJhbFNlbGVjdG9yLFxuICBjb21waWxlQW5kQXBwbHlQcm9jZWR1cmFsU2VsZWN0b3IsXG59XG5cbmV4cG9ydCB0eXBlIHsgUHJvY2VkdXJhbE9wZXJhdG9yLCBQcm9jZWR1cmFsU2VsZWN0b3IgfVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8geW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbi8vIFRoYXQgc2NyaXB0IGlzIGV4ZWN1dGVkIGZyb21cbi8vIGNvbXBvbmVudHMvY29zbWV0aWNfZmlsdGVycy9jb250ZW50L3JlbmRlcmVyL2Nvc21ldGljX2ZpbHRlcnNfanNfaGFuZGxlci5jY1xuLy8gc2V2ZXJhbCB0aW1lczpcbi8vIC0gZm9yIGNvc21ldGljIGZpbHRlcnMgd29yayB3aXRoIENTUyBhbmQgc3R5bGVzaGVldC4gVGhhdCB3b3JrIGl0c2VsZlxuLy8gICBjb3VsZCBjYWxsIHRoZSBzY3JpcHQgc2V2ZXJhbCB0aW1lcy5cblxuaW1wb3J0IHtcbiAgYXBwbHlDb21waWxlZFNlbGVjdG9yLFxuICBjb21waWxlUHJvY2VkdXJhbFNlbGVjdG9yLFxufSBmcm9tICcuL3Byb2NlZHVyYWxfZmlsdGVycydcbmltcG9ydCB0eXBlIHsgUHJvY2VkdXJhbFNlbGVjdG9yIH0gZnJvbSAnLi9wcm9jZWR1cmFsX2ZpbHRlcnMnXG5cbnR5cGUgU3R5bGVBY3Rpb24gPSB7XG4gIHR5cGU6ICdzdHlsZSdcbiAgYXJnOiBzdHJpbmdcbn1cbnR5cGUgUmVtb3ZlQWN0aW9uID0ge1xuICB0eXBlOiAncmVtb3ZlJ1xufVxudHlwZSBSZW1vdmVBdHRyQWN0aW9uID0ge1xuICB0eXBlOiAncmVtb3ZlLWF0dHInXG4gIGFyZzogc3RyaW5nXG59XG50eXBlIFJlbW92ZUNsYXNzQWN0aW9uID0ge1xuICB0eXBlOiAncmVtb3ZlLWNsYXNzJ1xuICBhcmc6IHN0cmluZ1xufVxuXG50eXBlIENvc21ldGljRmlsdGVyQWN0aW9uID1cbiAgfCBTdHlsZUFjdGlvblxuICB8IFJlbW92ZUFjdGlvblxuICB8IFJlbW92ZUF0dHJBY3Rpb25cbiAgfCBSZW1vdmVDbGFzc0FjdGlvblxuXG50eXBlIFByb2NlZHVyYWxBY3Rpb25GaWx0ZXIgPSB7XG4gIHNlbGVjdG9yOiBQcm9jZWR1cmFsU2VsZWN0b3JcbiAgYWN0aW9uPzogQ29zbWV0aWNGaWx0ZXJBY3Rpb25cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjb250ZW50X2Nvc21ldGljOiB7XG4gICAgICBjb3NtZXRpY1N0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXRcbiAgICAgIGFsbFNlbGVjdG9yc1RvUnVsZXM6IE1hcDxzdHJpbmcsIG51bWJlcj5cbiAgICAgIG9ic2VydmluZ0hhc1N0YXJ0ZWQ6IGJvb2xlYW5cbiAgICAgIGhpZGUxcENvbnRlbnQ6IGJvb2xlYW5cbiAgICAgIGdlbmVyaWNoaWRlOiBib29sZWFuXG4gICAgICBmaXJzdFJ1blF1ZXVlOiBTZXQ8c3RyaW5nPlxuICAgICAgc2Vjb25kUnVuUXVldWU6IFNldDxzdHJpbmc+XG4gICAgICBmaW5hbFJ1blF1ZXVlOiBTZXQ8c3RyaW5nPlxuICAgICAgYWxsUXVldWVzOiBTZXQ8c3RyaW5nPltdXG4gICAgICBudW1RdWV1ZXM6IGFueVxuICAgICAgYWxyZWFkeVVuaGlkZGVuU2VsZWN0b3JzOiBTZXQ8c3RyaW5nPlxuICAgICAgYWxyZWFkeUtub3duRmlyc3RQYXJ0eVN1YnRyZWVzOiBXZWFrU2V0PGFueT5cbiAgICAgIF9oYXNEZWxheU9jdXJyZWQ6IGJvb2xlYW5cbiAgICAgIF9zdGFydENoZWNraW5nSWQ6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgZmlyc3RTZWxlY3RvcnNQb2xsaW5nRGVsYXlNczogbnVtYmVyIHwgdW5kZWZpbmVkXG4gICAgICBzd2l0Y2hUb1NlbGVjdG9yc1BvbGxpbmdUaHJlc2hvbGQ6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgZmV0Y2hOZXdDbGFzc0lkUnVsZXNUaHJvdHRsaW5nTXM6IG51bWJlciB8IHVuZGVmaW5lZFxuICAgICAgdHJ5U2NoZWR1bGVRdWV1ZVB1bXA6ICgpID0+IHZvaWRcbiAgICAgIHByb2NlZHVyYWxBY3Rpb25GaWx0ZXJzPzogUHJvY2VkdXJhbEFjdGlvbkZpbHRlcltdXG4gICAgICBoYXNQcm9jZWR1cmFsQWN0aW9uczogYm9vbGVhblxuICAgIH1cbiAgfVxufVxuXG4vLyBTdGFydCBsb29raW5nIGZvciB0aGluZ3MgdG8gdW5oaWRlIGJlZm9yZSBhdCBtb3N0IHRoaXMgbG9uZyBhZnRlclxuLy8gdGhlIGJhY2tlbmQgc2NyaXB0IGlzIHVwIGFuZCBjb25uZWN0ZWQgKGVnIGJhY2tncm91bmRSZWFkeSA9IHRydWUpLFxuLy8gb3Igc29vbmVyIGlmIHRoZSB0aHJlYWQgaXMgaWRsZS5cbmNvbnN0IG1heFRpbWVNU0JlZm9yZVN0YXJ0ID0gMjUwMFxuXG4vLyBUaGUgY3V0b2ZmIGZvciB0ZXh0IGFkcy4gIElmIHNvbWV0aGluZyBoYXMgb25seSB0ZXh0IGluIGl0LCBpdCBuZWVkcyB0byBoYXZlXG4vLyB0aGlzIG1hbnksIG9yIG1vcmUsIGNoYXJhY3RlcnMuICBTaW1pbGFybHksIHJlcXVpcmUgaXQgdG8gaGF2ZSBhIG5vbi10cml2aWFsXG4vLyBudW1iZXIgb2Ygd29yZHMgaW4gaXQsIHRvIGxvb2sgbGlrZSBhbiBhY3R1YWwgdGV4dCBhZC5cbmNvbnN0IG1pbkFkVGV4dENoYXJzID0gMzBcbmNvbnN0IG1pbkFkVGV4dFdvcmRzID0gNVxuXG5jb25zdCByZXR1cm5Ub011dGF0aW9uT2JzZXJ2ZXJJbnRlcnZhbE1zID0gMTAwMDBcblxuY29uc3Qgc2VsZWN0b3JzUG9sbGluZ0ludGVydmFsTXMgPSA1MDBcbmxldCBzZWxlY3RvcnNQb2xsaW5nSW50ZXJ2YWxJZDogbnVtYmVyIHwgdW5kZWZpbmVkXG5cbi8vIFRoZSBudW1iZXIgb2YgcG90ZW50aWFsbHkgbmV3IHNlbGVjdG9ycyB0aGF0IGFyZSBwcm9jZXNzZWQgZHVyaW5nIHRoZSBsYXN0XG4vLyB8c2NvcmVDYWxjSW50ZXJ2YWxNc3wuXG5sZXQgY3VycmVudE11dGF0aW9uU2NvcmUgPSAwXG4vLyBUaGUgdGltZSBmcmFtZSB1c2VkIHRvIGNhbGMgfGN1cnJlbnRNdXRhdGlvblNjb3JlfC5cbmNvbnN0IHNjb3JlQ2FsY0ludGVydmFsTXMgPSAxMDAwXG4vLyBUaGUgYmVnaW4gb2YgdGhlIHRpbWUgZnJhbWUgdG8gY2FsYyB8Y3VycmVudE11dGF0aW9uU2NvcmV8LlxubGV0IGN1cnJlbnRNdXRhdGlvblN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXG5cbi8vIFRoZSBuZXh0IGFsbG93ZWQgdGltZSB0byBjYWxsIEZldGNoTmV3Q2xhc3NJZFJ1bGVzKCkgaWYgaXQncyB0aHJvdHRsZWQuXG5sZXQgbmV4dEZldGNoTmV3Q2xhc3NJZFJ1bGVzQ2FsbCA9IDBcbmxldCBmZXRjaE5ld0NsYXNzSWRSdWxlc1RpbWVvdXRJZDogbnVtYmVyIHwgdW5kZWZpbmVkXG5cbi8vIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZyBiZXR3ZWVuIFthMDAwMDAwMDAwLCB6enp6enp6enp6XSAoYmFzZSAzNilcbmNvbnN0IGdlbmVyYXRlUmFuZG9tQXR0ciA9ICgpID0+IHtcbiAgY29uc3QgbWluID0gTnVtYmVyLnBhcnNlSW50KCdhMDAwMDAwMDAwJywgMzYpXG4gIGNvbnN0IG1heCA9IE51bWJlci5wYXJzZUludCgnenp6enp6enp6eicsIDM2KVxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pLnRvU3RyaW5nKDM2KVxufVxuXG5jb25zdCBnbG9iYWxTdHlsZUF0dHIgPSBnZW5lcmF0ZVJhbmRvbUF0dHIoKVxuY29uc3Qgc3R5bGVBdHRyTWFwID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKVxuXG5jb25zdCBxdWVyaWVkSWRzID0gbmV3IFNldDxzdHJpbmc+KClcbmNvbnN0IHF1ZXJpZWRDbGFzc2VzID0gbmV3IFNldDxzdHJpbmc+KClcblxuY29uc3Qgbm90WWV0UXVlcmllZEVsZW1lbnRzOiBBcnJheTxFbGVtZW50W10gfCBOb2RlTGlzdE9mPEVsZW1lbnQ+PiA9IFtdXG5cbmNvbnN0IGNsYXNzSWRXaXRob3V0SHRtbE9yQm9keSA9XG4gICdbaWRdOm5vdChodG1sKTpub3QoYm9keSksW2NsYXNzXTpub3QoaHRtbCk6bm90KGJvZHkpJ1xuXG4vLyBFYWNoIG9mIHRoZXNlIGdldCBzZXR1cCBvbmNlIHRoZSBtdXRhdGlvbiBvYnNlcnZlciBzdGFydHMgcnVubmluZy5cbmxldCBub3RZZXRRdWVyaWVkQ2xhc3Nlczogc3RyaW5nW10gPSBbXVxubGV0IG5vdFlldFF1ZXJpZWRJZHM6IHN0cmluZ1tdID0gW11cblxud2luZG93LmNvbnRlbnRfY29zbWV0aWMgPSB3aW5kb3cuY29udGVudF9jb3NtZXRpYyB8fCB7fVxuY29uc3QgQ0MgPSB3aW5kb3cuY29udGVudF9jb3NtZXRpY1xuXG5DQy5jb3NtZXRpY1N0eWxlU2hlZXQgPSBDQy5jb3NtZXRpY1N0eWxlU2hlZXQgfHwgbmV3IENTU1N0eWxlU2hlZXQoKVxuQ0MuYWxsU2VsZWN0b3JzVG9SdWxlcyA9IENDLmFsbFNlbGVjdG9yc1RvUnVsZXMgfHwgbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKVxuQ0Mub2JzZXJ2aW5nSGFzU3RhcnRlZCA9IENDLm9ic2VydmluZ0hhc1N0YXJ0ZWQgfHwgZmFsc2Vcbi8vIEFsbCBuZXcgc2VsZWN0b3JzIGdvIGluIGBmaXJzdFJ1blF1ZXVlYFxuQ0MuZmlyc3RSdW5RdWV1ZSA9IENDLmZpcnN0UnVuUXVldWUgfHwgbmV3IFNldDxzdHJpbmc+KClcbi8vIFRoaXJkIHBhcnR5IG1hdGNoZXMgZ28gaW4gdGhlIHNlY29uZCBhbmQgdGhpcmQgcXVldWVzLlxuQ0Muc2Vjb25kUnVuUXVldWUgPSBDQy5zZWNvbmRSdW5RdWV1ZSB8fCBuZXcgU2V0PHN0cmluZz4oKVxuLy8gT25jZSBhIHNlbGVjdG9yIGdldHMgaW4gdG8gdGhpcyBxdWV1ZSwgaXQncyBvbmx5IGV2YWx1YXRlZCBmb3IgMXAgY29udGVudCBvbmVcbi8vIG1vcmUgdGltZS5cbkNDLmZpbmFsUnVuUXVldWUgPSBDQy5maW5hbFJ1blF1ZXVlIHx8IG5ldyBTZXQ8c3RyaW5nPigpXG5DQy5hbGxRdWV1ZXMgPSBDQy5hbGxRdWV1ZXMgfHwgW1xuICBDQy5maXJzdFJ1blF1ZXVlLFxuICBDQy5zZWNvbmRSdW5RdWV1ZSxcbiAgQ0MuZmluYWxSdW5RdWV1ZSxcbl1cbkNDLm51bVF1ZXVlcyA9IENDLm51bVF1ZXVlcyB8fCBDQy5hbGxRdWV1ZXMubGVuZ3RoXG5DQy5hbHJlYWR5VW5oaWRkZW5TZWxlY3RvcnMgPSBDQy5hbHJlYWR5VW5oaWRkZW5TZWxlY3RvcnMgfHwgbmV3IFNldDxzdHJpbmc+KClcbkNDLmFscmVhZHlLbm93bkZpcnN0UGFydHlTdWJ0cmVlcyA9XG4gIENDLmFscmVhZHlLbm93bkZpcnN0UGFydHlTdWJ0cmVlcyB8fCBuZXcgV2Vha1NldCgpXG5DQy5faGFzRGVsYXlPY3VycmVkID0gQ0MuX2hhc0RlbGF5T2N1cnJlZCB8fCBmYWxzZVxuQ0MuX3N0YXJ0Q2hlY2tpbmdJZCA9IENDLl9zdGFydENoZWNraW5nSWQgfHwgdW5kZWZpbmVkXG5cbkNDLmZpcnN0U2VsZWN0b3JzUG9sbGluZ0RlbGF5TXMgPSBDQy5maXJzdFNlbGVjdG9yc1BvbGxpbmdEZWxheU1zIHx8IHVuZGVmaW5lZFxuQ0Muc3dpdGNoVG9TZWxlY3RvcnNQb2xsaW5nVGhyZXNob2xkID1cbiAgQ0Muc3dpdGNoVG9TZWxlY3RvcnNQb2xsaW5nVGhyZXNob2xkIHx8IHVuZGVmaW5lZFxuQ0MuZmV0Y2hOZXdDbGFzc0lkUnVsZXNUaHJvdHRsaW5nTXMgPVxuICBDQy5mZXRjaE5ld0NsYXNzSWRSdWxlc1Rocm90dGxpbmdNcyB8fCB1bmRlZmluZWRcblxuLyoqXG4gKiBQcm92aWRlcyBhIG5ldyBmdW5jdGlvbiB3aGljaCBjYW4gb25seSBiZSBzY2hlZHVsZWQgb25jZSBhdCBhIHRpbWUuXG4gKlxuICogQHBhcmFtIG9uSWRsZSBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdGhyZWFkIGlzIGxlc3MgYnVzeVxuICogQHBhcmFtIHRpbWVvdXQgbWF4IHRpbWUgdG8gd2FpdC4gYXQgb3IgYWZ0ZXIgdGhpcyB0aW1lIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHJ1biByZWdhcmRsZXNzIG9mIHRocmVhZCBub2lzZVxuICovXG5jb25zdCBpZGxlaXplID0gKG9uSWRsZTogRnVuY3Rpb24sIHRpbWVvdXQ6IG51bWJlcikgPT4ge1xuICBsZXQgaWRsZUlkOiBudW1iZXIgfCB1bmRlZmluZWRcbiAgcmV0dXJuIGZ1bmN0aW9uIFdpbGxSdW5PbklkbGUoKSB7XG4gICAgaWYgKGlkbGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWRsZUlkID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlkbGVJZCA9IHVuZGVmaW5lZFxuICAgICAgICBvbklkbGUoKVxuICAgICAgfSxcbiAgICAgIHsgdGltZW91dCB9LFxuICAgIClcbiAgfVxufVxuXG5jb25zdCBpc1JlbGF0aXZlVXJsID0gKHVybDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiAoXG4gICAgIXVybC5zdGFydHNXaXRoKCcvLycpXG4gICAgJiYgIXVybC5zdGFydHNXaXRoKCdodHRwOi8vJylcbiAgICAmJiAhdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJylcbiAgKVxufVxuXG5jb25zdCBpc0VsZW1lbnQgPSAobm9kZTogTm9kZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gMVxufVxuXG5jb25zdCBhc0VsZW1lbnQgPSAobm9kZTogTm9kZSk6IEVsZW1lbnQgfCBudWxsID0+IHtcbiAgcmV0dXJuIGlzRWxlbWVudChub2RlKSA/IChub2RlIGFzIEVsZW1lbnQpIDogbnVsbFxufVxuXG5jb25zdCBpc0hUTUxFbGVtZW50ID0gKG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuICdpbm5lclRleHQnIGluIG5vZGVcbn1cblxuLy8gVGhlIGZldGNoTmV3Q2xhc3NJZFJ1bGVzKCkgY2FuIGJlIGNhbGxlZCBvZiBlYWNoIE11dGF0aW9uT2JzZXJ2ZXIgZXZlbnQuXG4vLyBVbmRlciB0aGUgaG9vZCBpdCBtYWtlcyBhIGxvdCBvZiB3b3JrOiBjYWxsIHRvIEMrKyA9PiBJUEMgdG8gdGhlIGJyb3dzZXJcbi8vIHByb2Nlc3MgPT4gcmVxdWVzdCB0byB0aGUgcnVzdCBDUyBlbmdpbmUgYW5kIGJhY2suXG4vLyBTbyBsaW1pdCB0aGUgbnVtYmVyIG9mIGNhbGxzIHRvIG9uZSBwZXIgZmV0Y2hOZXdDbGFzc0lkUnVsZXNUaHJvdHRsaW5nTXMuXG5jb25zdCBTaG91bGRUaHJvdHRsZUZldGNoTmV3Q2xhc3NJZHNSdWxlcyA9ICgpOiBib29sZWFuID0+IHtcbiAgaWYgKENDLmZldGNoTmV3Q2xhc3NJZFJ1bGVzVGhyb3R0bGluZ01zID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2UgLy8gdGhlIGZlYXR1cmUgaXMgZGlzYWJsZWQuXG4gIH1cblxuICBpZiAoZmV0Y2hOZXdDbGFzc0lkUnVsZXNUaW1lb3V0SWQpIHtcbiAgICByZXR1cm4gdHJ1ZSAvLyBUaGUgZnVuY3Rpb24gaGFzIGFscmVhZHkgc2NoZWR1bGVkIGFuZCBjYWxsZWQgbGF0ZXIuXG4gIH1cblxuICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKVxuICBjb25zdCBtc1RvV2FpdCA9IG5leHRGZXRjaE5ld0NsYXNzSWRSdWxlc0NhbGwgLSBub3dcbiAgaWYgKG1zVG9XYWl0ID4gMCkge1xuICAgIC8vIFNjaGVkdWxlIHRoZSBjYWxsIGluIHxtc1RvV2FpdHwgbXMgYW5kIHJldHVybi5cbiAgICBmZXRjaE5ld0NsYXNzSWRSdWxlc1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZldGNoTmV3Q2xhc3NJZFJ1bGVzVGltZW91dElkID0gdW5kZWZpbmVkXG4gICAgICBmZXRjaE5ld0NsYXNzSWRSdWxlcygpXG4gICAgfSwgbXNUb1dhaXQpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5leHRGZXRjaE5ld0NsYXNzSWRSdWxlc0NhbGwgPSBub3cgKyBDQy5mZXRjaE5ld0NsYXNzSWRSdWxlc1Rocm90dGxpbmdNc1xuICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgcXVldWVFbGVtZW50SWRBbmRDbGFzc2VzID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaWQgPSBlbGVtZW50LmlkXG4gIGlmIChpZCAmJiAhcXVlcmllZElkcy5oYXMoaWQpKSB7XG4gICAgbm90WWV0UXVlcmllZElkcy5wdXNoKGlkKVxuICAgIHF1ZXJpZWRJZHMuYWRkKGlkKVxuICB9XG4gIGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlcygpKSB7XG4gICAgaWYgKGNsYXNzTmFtZSAmJiAhcXVlcmllZENsYXNzZXMuaGFzKGNsYXNzTmFtZSkpIHtcbiAgICAgIG5vdFlldFF1ZXJpZWRDbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICAgICAgcXVlcmllZENsYXNzZXMuYWRkKGNsYXNzTmFtZSlcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZmV0Y2hOZXdDbGFzc0lkUnVsZXMgPSAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudHMgb2Ygbm90WWV0UXVlcmllZEVsZW1lbnRzKSB7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICBxdWV1ZUVsZW1lbnRJZEFuZENsYXNzZXMoZWxlbWVudClcbiAgICB9XG4gIH1cbiAgbm90WWV0UXVlcmllZEVsZW1lbnRzLmxlbmd0aCA9IDBcbiAgaWYgKFxuICAgICghbm90WWV0UXVlcmllZENsYXNzZXMgfHwgbm90WWV0UXVlcmllZENsYXNzZXMubGVuZ3RoID09PSAwKVxuICAgICYmICghbm90WWV0UXVlcmllZElkcyB8fCBub3RZZXRRdWVyaWVkSWRzLmxlbmd0aCA9PT0gMClcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gQ2FsbGJhY2sgdG8gYysrIHJlbmRlcmVyIHByb2Nlc3NcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBjZl93b3JrZXIuaGlkZGVuQ2xhc3NJZFNlbGVjdG9ycyhcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjbGFzc2VzOiBub3RZZXRRdWVyaWVkQ2xhc3NlcyxcbiAgICAgIGlkczogbm90WWV0UXVlcmllZElkcyxcbiAgICB9KSxcbiAgKVxuICBub3RZZXRRdWVyaWVkQ2xhc3NlcyA9IFtdXG4gIG5vdFlldFF1ZXJpZWRJZHMgPSBbXVxufVxuXG5jb25zdCB1c2VNdXRhdGlvbk9ic2VydmVyID0gKCkgPT4ge1xuICBpZiAoc2VsZWN0b3JzUG9sbGluZ0ludGVydmFsSWQpIHtcbiAgICBjbGVhckludGVydmFsKHNlbGVjdG9yc1BvbGxpbmdJbnRlcnZhbElkKVxuICAgIHNlbGVjdG9yc1BvbGxpbmdJbnRlcnZhbElkID0gdW5kZWZpbmVkXG4gIH1cblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9uTXV0YXRpb25zIGFzIE11dGF0aW9uQ2FsbGJhY2spXG4gIGNvbnN0IG9ic2VydmVyQ29uZmlnID0ge1xuICAgIHN1YnRyZWU6IHRydWUsXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogWydpZCcsICdjbGFzcyddLFxuICB9XG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBvYnNlcnZlckNvbmZpZylcbn1cblxuY29uc3QgdXNlUG9sbGluZyA9IChvYnNlcnZlcj86IE11dGF0aW9uT2JzZXJ2ZXIpID0+IHtcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgbm90WWV0UXVlcmllZEVsZW1lbnRzLmxlbmd0aCA9IDBcbiAgfVxuXG4gIGNvbnN0IGZ1dHVyZVRpbWVNcyA9IHdpbmRvdy5EYXRlLm5vdygpICsgcmV0dXJuVG9NdXRhdGlvbk9ic2VydmVySW50ZXJ2YWxNc1xuICBjb25zdCBxdWVyeUF0dHJzRnJvbURvY3VtZW50Qm91bmQgPSBxdWVyeUF0dHJzRnJvbURvY3VtZW50LmJpbmQoXG4gICAgdW5kZWZpbmVkLFxuICAgIGZ1dHVyZVRpbWVNcyxcbiAgKVxuXG4gIHNlbGVjdG9yc1BvbGxpbmdJbnRlcnZhbElkID0gd2luZG93LnNldEludGVydmFsKFxuICAgIHF1ZXJ5QXR0cnNGcm9tRG9jdW1lbnRCb3VuZCxcbiAgICBzZWxlY3RvcnNQb2xsaW5nSW50ZXJ2YWxNcyxcbiAgKVxufVxuXG5jb25zdCBxdWV1ZUF0dHJzRnJvbU11dGF0aW9ucyA9IChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pOiBudW1iZXIgPT4ge1xuICBsZXQgbXV0YXRpb25TY29yZSA9IDBcbiAgZm9yIChjb25zdCBhTXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgaWYgKGFNdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgIC8vIFNpbmNlIHdlJ3JlIGZpbHRlcmluZyBmb3IgYXR0cmlidXRlIG1vZGlmaWNhdGlvbnMsIHdlIGNhbiBiZSBjZXJ0YWluXG4gICAgICAvLyB0aGF0IHRoZSB0YXJnZXRzIGFyZSBhbHdheXMgSFRNTEVsZW1lbnRzLCBhbmQgbmV2ZXIgVGV4dE5vZGUuXG4gICAgICBjb25zdCBjaGFuZ2VkRWxtID0gYU11dGF0aW9uLnRhcmdldCBhcyBFbGVtZW50XG4gICAgICBzd2l0Y2ggKGFNdXRhdGlvbi5hdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgICBtdXRhdGlvblNjb3JlICs9IGNoYW5nZWRFbG0uY2xhc3NMaXN0Lmxlbmd0aFxuICAgICAgICAgIGZvciAoY29uc3QgYUNsYXNzTmFtZSBvZiBjaGFuZ2VkRWxtLmNsYXNzTGlzdC52YWx1ZXMoKSkge1xuICAgICAgICAgICAgaWYgKCFxdWVyaWVkQ2xhc3Nlcy5oYXMoYUNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgbm90WWV0UXVlcmllZENsYXNzZXMucHVzaChhQ2xhc3NOYW1lKVxuICAgICAgICAgICAgICBxdWVyaWVkQ2xhc3Nlcy5hZGQoYUNsYXNzTmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgY29uc3QgbXV0YXRlZElkID0gY2hhbmdlZEVsbS5pZFxuICAgICAgICAgIG11dGF0aW9uU2NvcmUrK1xuICAgICAgICAgIGlmICghcXVlcmllZElkcy5oYXMobXV0YXRlZElkKSkge1xuICAgICAgICAgICAgbm90WWV0UXVlcmllZElkcy5wdXNoKG11dGF0ZWRJZClcbiAgICAgICAgICAgIHF1ZXJpZWRJZHMuYWRkKG11dGF0ZWRJZClcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFNdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhTXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gYXNFbGVtZW50KG5vZGUpXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgICAgbm90WWV0UXVlcmllZEVsZW1lbnRzLnB1c2goW2VsZW1lbnRdKVxuICAgICAgICBtdXRhdGlvblNjb3JlICs9IDFcbiAgICAgICAgaWYgKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc0lkV2l0aG91dEh0bWxPckJvZHkpXG4gICAgICAgICAgbm90WWV0UXVlcmllZEVsZW1lbnRzLnB1c2gobm9kZUxpc3QpXG4gICAgICAgICAgbXV0YXRpb25TY29yZSArPSBub2RlTGlzdC5sZW5ndGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbXV0YXRpb25TY29yZVxufVxuXG5jb25zdCBvbk11dGF0aW9ucyA9IChcbiAgbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLFxuICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcixcbikgPT4ge1xuICAvLyBDYWxsYmFjayB0byBjKysgcmVuZGVyZXIgcHJvY2Vzc1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGNvbnN0IGV2ZW50SWQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IGNmX3dvcmtlci5vbkhhbmRsZU11dGF0aW9uc0JlZ2luPy4oKVxuICBjb25zdCBtdXRhdGlvblNjb3JlID0gcXVldWVBdHRyc0Zyb21NdXRhdGlvbnMobXV0YXRpb25zKVxuXG4gIC8vIENoZWNrIHRoZSBjb25kaXRpb25zIHRvIHN3aXRjaCB0byB0aGUgYWx0ZXJuYXRpdmUgc3RyYXRlZ3lcbiAgLy8gdG8gZ2V0IHNlbGVjdG9ycy5cbiAgaWYgKENDLnN3aXRjaFRvU2VsZWN0b3JzUG9sbGluZ1RocmVzaG9sZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KClcblxuICAgIGlmIChub3cgPiBjdXJyZW50TXV0YXRpb25TdGFydFRpbWUgKyBzY29yZUNhbGNJbnRlcnZhbE1zKSB7XG4gICAgICAvLyBTdGFydCB0aGUgbmV4dCB0aW1lIGZyYW1lLlxuICAgICAgY3VycmVudE11dGF0aW9uU3RhcnRUaW1lID0gbm93XG4gICAgICBjdXJyZW50TXV0YXRpb25TY29yZSA9IDBcbiAgICB9XG5cbiAgICBjdXJyZW50TXV0YXRpb25TY29yZSArPSBtdXRhdGlvblNjb3JlXG4gICAgaWYgKGN1cnJlbnRNdXRhdGlvblNjb3JlID4gQ0Muc3dpdGNoVG9TZWxlY3RvcnNQb2xsaW5nVGhyZXNob2xkKSB7XG4gICAgICB1c2VQb2xsaW5nKG9ic2VydmVyKVxuICAgIH1cbiAgfVxuXG4gIGlmICghQ0MuZ2VuZXJpY2hpZGUgJiYgIVNob3VsZFRocm90dGxlRmV0Y2hOZXdDbGFzc0lkc1J1bGVzKCkpIHtcbiAgICBmZXRjaE5ld0NsYXNzSWRSdWxlcygpXG4gIH1cblxuICBpZiAoQ0MuaGFzUHJvY2VkdXJhbEFjdGlvbnMpIHtcbiAgICBjb25zdCBhZGRlZEVsZW1lbnRzOiBFbGVtZW50W10gPSBbXVxuICAgIG11dGF0aW9ucy5mb3JFYWNoKFxuICAgICAgKG11dGF0aW9uKSA9PlxuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAmJiBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICBpZiAobi5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIGFkZGVkRWxlbWVudHMucHVzaChuIGFzIEVsZW1lbnQpXG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gKG4gYXMgRWxlbWVudCkucXVlcnlTZWxlY3RvckFsbCgnKicpXG4gICAgICAgICAgICBjaGlsZE5vZGVzLmxlbmd0aCAhPT0gMFxuICAgICAgICAgICAgICAmJiBjaGlsZE5vZGVzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgICAgICAgICBjLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJiBhZGRlZEVsZW1lbnRzLnB1c2goYylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgIClcbiAgICBpZiAoYWRkZWRFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIGV4ZWN1dGVQcm9jZWR1cmFsQWN0aW9ucyhhZGRlZEVsZW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIGlmIChldmVudElkKSB7XG4gICAgLy8gQ2FsbGJhY2sgdG8gYysrIHJlbmRlcmVyIHByb2Nlc3NcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY2Zfd29ya2VyLm9uSGFuZGxlTXV0YXRpb25zRW5kKGV2ZW50SWQpXG4gIH1cbn1cblxuY29uc3QgaXNGaXJzdFBhcnR5VXJsID0gKHVybDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmIChpc1JlbGF0aXZlVXJsKHVybCkpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdG8gYysrIHJlbmRlcmVyIHByb2Nlc3NcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICByZXR1cm4gY2Zfd29ya2VyLmlzRmlyc3RQYXJ0eVVybCh1cmwpXG59XG5cbmNvbnN0IHN0cmlwQ2hpbGRUYWdzRnJvbVRleHQgPSAoXG4gIGVsbTogSFRNTEVsZW1lbnQsXG4gIHRhZ05hbWU6IHN0cmluZyxcbiAgdGV4dDogc3RyaW5nLFxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgY2hpbGRFbG1zID0gQXJyYXkuZnJvbShcbiAgICBlbG0uZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICkgYXMgSFRNTEVsZW1lbnRbXVxuICBsZXQgbG9jYWxUZXh0ID0gdGV4dFxuICBmb3IgKGNvbnN0IGFuRWxtIG9mIGNoaWxkRWxtcykge1xuICAgIGxvY2FsVGV4dCA9IGxvY2FsVGV4dC5yZXBsYWNlQWxsKGFuRWxtLmlubmVyVGV4dCwgJycpXG4gIH1cbiAgcmV0dXJuIGxvY2FsVGV4dFxufVxuXG4vKipcbiAqIFVzZWQgdG8ganVzdCBjYWxsIGlubmVyVGV4dCBvbiB0aGUgcm9vdCBvZiB0aGUgc3VidHJlZSwgYnV0IGluIHNvbWUgY2FzZXNcbiAqIHRoaXMgd2lsbCBzdXJwcmlzaW5nbHkgaW5jbHVkZSB0aGUgdGV4dCBjb250ZW50IG9mIHNjcmlwdCBub2Rlc1xuICogKHBvc3NpYmx5IG9mIG5vZGVzIHRoYXQgaGF2ZW4ndCBiZWVuIGV4ZWN1dGVkIHlldD8pLlxuICpcbiAqIFNvIGluc3RlYWQgICogd2UgY2FsbCBpbm5lclRleHQgb24gdGhlIHJvb3QsIGFuZCByZW1vdmUgdGhlIGNvbnRlbnRzIG9mIGFueVxuICogc2NyaXB0IG9yIHN0eWxlIG5vZGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JyYXZlL2JyYXZlLWJyb3dzZXIvaXNzdWVzLzk5NTVcbiAqL1xuY29uc3Qgc2hvd3NTaWduaWZpY2FudFRleHQgPSAoZWxtOiBFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbG0pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBodG1sRWxtID0gZWxtIGFzIEhUTUxFbGVtZW50XG4gIGNvbnN0IHRhZ3NUZXh0VG9JZ25vcmUgPSBbJ3NjcmlwdCcsICdzdHlsZSddXG5cbiAgbGV0IGN1cnJlbnRUZXh0ID0gaHRtbEVsbS5pbm5lclRleHRcbiAgZm9yIChjb25zdCBhVGFnTmFtZSBvZiB0YWdzVGV4dFRvSWdub3JlKSB7XG4gICAgY3VycmVudFRleHQgPSBzdHJpcENoaWxkVGFnc0Zyb21UZXh0KGh0bWxFbG0sIGFUYWdOYW1lLCBjdXJyZW50VGV4dClcbiAgfVxuXG4gIGNvbnN0IHRyaW1tZWRUZXh0ID0gY3VycmVudFRleHQudHJpbSgpXG4gIGlmICh0cmltbWVkVGV4dC5sZW5ndGggPCBtaW5BZFRleHRDaGFycykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgbGV0IHdvcmRDb3VudCA9IDBcbiAgZm9yIChjb25zdCBhV29yZCBvZiB0cmltbWVkVGV4dC5zcGxpdCgnICcpKSB7XG4gICAgaWYgKGFXb3JkLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHdvcmRDb3VudCArPSAxXG4gIH1cblxuICByZXR1cm4gd29yZENvdW50ID49IG1pbkFkVGV4dFdvcmRzXG59XG5cbmludGVyZmFjZSBJc0ZpcnN0UGFydHlRdWVyeVJlc3VsdCB7XG4gIGZvdW5kRmlyc3RQYXJ0eVJlc291cmNlOiBib29sZWFuXG4gIGZvdW5kVGhpcmRQYXJ0eVJlc291cmNlOiBib29sZWFuXG4gIGZvdW5kS25vd25UaGlyZFBhcnR5QWQ6IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciBhIHN1YnRyZWUgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgXCJmaXJzdCBwYXJ0eVwiIGNvbnRlbnQuXG4gKlxuICogVXNlcyB0aGUgZm9sbG93aW5nIHByb2Nlc3MgaW4gbWFraW5nIHRoaXMgZGV0ZXJtaW5hdGlvbi5cbiAqICAgLSBJZiB0aGUgc3VidHJlZSBjb250YWlucyBhbnkgZmlyc3QgcGFydHkgcmVzb3VyY2VzLCB0aGUgc3VidHJlZSBpcyAxcC5cbiAqICAgLSBJZiB0aGUgc3VidHJlZSBjb250YWlucyBubyByZW1vdGUgcmVzb3VyY2VzLCB0aGUgc3VidHJlZSBpcyBmaXJzdCBwYXJ0eS5cbiAqICAgLSBPdGhlcndpc2UsIGl0cyAzcmQgcGFydHkuXG4gKlxuICogTm90ZSB0aGF0IGFueSBpbnN0YW5jZXMgb2YgXCJ1cmwoXCIgb3IgZXNjYXBlIGNoYXJhY3RlcnMgaW4gc3R5bGUgYXR0cmlidXRlc1xuICogYXJlIGF1dG9tYXRpY2FsbHkgdHJlYXRlZCBhcyB0aGlyZC1wYXJ0eSBVUkxzLiAgVGhlc2UgcGF0dGVybnMgYW5kIHNwZWNpYWxcbiAqIGNhc2VzIHdlcmUgZ2VuZXJhdGVkIGZyb20gbG9va2luZyBhdCBwYXR0ZXJucyBpbiBhZHMgd2l0aCByZXNvdXJjZXMgaW4gdGhlXG4gKiBzdHlsZSBhdHRyaWJ1dGUuXG4gKlxuICogU2ltaWxhcmx5LCBhbiBlbXB0eSBzcmNkb2MgYXR0cmlidXRlIGlzIGFsc28gY29uc2lkZXJlZCAzcCwgc2luY2UgbWFueVxuICogdGhpcmQgcGFydHkgYWRzIGNsZWFyIHRoaXMgYXR0cmlidXRlIGluIHByYWN0aWNlLlxuICpcbiAqIEZpbmFsbHksIHNwZWNpYWwgY2FzZSBzb21lIGlkcyB3ZSBrbm93IGFyZSB1c2VkIG9ubHkgZm9yIHRoaXJkIHBhcnR5IGFkcy5cbiAqL1xuY29uc3QgaXNTdWJUcmVlRmlyc3RQYXJ0eSA9IChcbiAgZWxtOiBFbGVtZW50LFxuICBwb3NzaWJsZVF1ZXJ5UmVzdWx0PzogSXNGaXJzdFBhcnR5UXVlcnlSZXN1bHQsXG4pOiBib29sZWFuID0+IHtcbiAgbGV0IHF1ZXJ5UmVzdWx0OiBJc0ZpcnN0UGFydHlRdWVyeVJlc3VsdFxuICBsZXQgaXNUb3BMZXZlbDogYm9vbGVhblxuXG4gIGlmIChwb3NzaWJsZVF1ZXJ5UmVzdWx0KSB7XG4gICAgcXVlcnlSZXN1bHQgPSBwb3NzaWJsZVF1ZXJ5UmVzdWx0XG4gICAgaXNUb3BMZXZlbCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcXVlcnlSZXN1bHQgPSB7XG4gICAgICBmb3VuZEZpcnN0UGFydHlSZXNvdXJjZTogZmFsc2UsXG4gICAgICBmb3VuZFRoaXJkUGFydHlSZXNvdXJjZTogZmFsc2UsXG4gICAgICBmb3VuZEtub3duVGhpcmRQYXJ0eUFkOiBmYWxzZSxcbiAgICB9XG4gICAgaXNUb3BMZXZlbCA9IHRydWVcbiAgfVxuXG4gIGlmIChlbG0uZ2V0QXR0cmlidXRlKSB7XG4gICAgaWYgKGVsbS5oYXNBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgIGNvbnN0IGVsbUlkID0gZWxtLmdldEF0dHJpYnV0ZSgnaWQnKSFcbiAgICAgIGlmIChcbiAgICAgICAgZWxtSWQuc3RhcnRzV2l0aCgnZ29vZ2xlX2Fkc19pZnJhbWVfJylcbiAgICAgICAgfHwgZWxtSWQuc3RhcnRzV2l0aCgnZGl2LWdwdC1hZCcpXG4gICAgICAgIHx8IGVsbUlkLnN0YXJ0c1dpdGgoJ2FkZm94XycpXG4gICAgICApIHtcbiAgICAgICAgcXVlcnlSZXN1bHQuZm91bmRLbm93blRoaXJkUGFydHlBZCA9IHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsbS5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG4gICAgICBjb25zdCBlbG1TcmMgPSBlbG0uZ2V0QXR0cmlidXRlKCdzcmMnKSFcbiAgICAgIGNvbnN0IGVsbVNyY0lzRmlyc3RQYXJ0eSA9IGlzRmlyc3RQYXJ0eVVybChlbG1TcmMpXG4gICAgICBpZiAoZWxtU3JjSXNGaXJzdFBhcnR5KSB7XG4gICAgICAgIHF1ZXJ5UmVzdWx0LmZvdW5kRmlyc3RQYXJ0eVJlc291cmNlID0gdHJ1ZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcXVlcnlSZXN1bHQuZm91bmRUaGlyZFBhcnR5UmVzb3VyY2UgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGVsbS5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpIHtcbiAgICAgIGNvbnN0IGVsbVN0eWxlID0gZWxtLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSFcbiAgICAgIGlmIChlbG1TdHlsZS5pbmNsdWRlcygndXJsKCcpIHx8IGVsbVN0eWxlLmluY2x1ZGVzKCcvLycpKSB7XG4gICAgICAgIHF1ZXJ5UmVzdWx0LmZvdW5kVGhpcmRQYXJ0eVJlc291cmNlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbG0uaGFzQXR0cmlidXRlKCdzcmNkb2MnKSkge1xuICAgICAgY29uc3QgZWxtU3JjRG9jID0gZWxtLmdldEF0dHJpYnV0ZSgnc3JjZG9jJykhXG4gICAgICBpZiAoZWxtU3JjRG9jLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcXVlcnlSZXN1bHQuZm91bmRUaGlyZFBhcnR5UmVzb3VyY2UgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgaXNTdWJUcmVlRmlyc3RQYXJ0eShlbG0uZmlyc3RDaGlsZCBhcyBFbGVtZW50LCBxdWVyeVJlc3VsdClcbiAgICBpZiAocXVlcnlSZXN1bHQuZm91bmRLbm93blRoaXJkUGFydHlBZCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChxdWVyeVJlc3VsdC5mb3VuZEZpcnN0UGFydHlSZXNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAoZWxtLm5leHRTaWJsaW5nKSB7XG4gICAgaXNTdWJUcmVlRmlyc3RQYXJ0eShlbG0ubmV4dFNpYmxpbmcgYXMgRWxlbWVudCwgcXVlcnlSZXN1bHQpXG4gICAgaWYgKHF1ZXJ5UmVzdWx0LmZvdW5kS25vd25UaGlyZFBhcnR5QWQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAocXVlcnlSZXN1bHQuZm91bmRGaXJzdFBhcnR5UmVzb3VyY2UpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKCFpc1RvcExldmVsKSB7XG4gICAgcmV0dXJuICFxdWVyeVJlc3VsdC5mb3VuZFRoaXJkUGFydHlSZXNvdXJjZVxuICB9XG5cbiAgaWYgKHF1ZXJ5UmVzdWx0LmZvdW5kVGhpcmRQYXJ0eVJlc291cmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuY29uc3QgdW5oaWRlU2VsZWN0b3JzID0gKHNlbGVjdG9yczogU2V0PHN0cmluZz4pID0+IHtcbiAgaWYgKHNlbGVjdG9ycy5zaXplID09PSAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gRmluZCBzZWxlY3RvcnMgd2UgaGF2ZSBhIHJ1bGUgaW5kZXggZm9yXG4gIGNvbnN0IHJ1bGVzVG9SZW1vdmUgPSBBcnJheS5mcm9tKHNlbGVjdG9ycylcbiAgICAubWFwKChzZWxlY3RvcikgPT4gQ0MuYWxsU2VsZWN0b3JzVG9SdWxlcy5nZXQoc2VsZWN0b3IpKVxuICAgIC5maWx0ZXIoKGkpID0+IGkgIT09IHVuZGVmaW5lZClcbiAgICAuc29ydCgpXG4gICAgLnJldmVyc2UoKVxuICAvLyBEZWxldGUgdGhlIHJ1bGVzXG4gIGxldCBsYXN0SWR4OiBudW1iZXIgPSBDQy5hbGxTZWxlY3RvcnNUb1J1bGVzLnNpemUgLSAxXG4gIGZvciAoY29uc3QgcnVsZUlkeCBvZiBydWxlc1RvUmVtb3ZlKSB7XG4gICAgLy8gU2FmZSB0byBhc3NldCBydWxlSWR4IGlzIGEgbnVtYmVyIGJlY2F1c2Ugd2UndmUgYWxyZWFkeSBmaWx0ZXJlZCBvdXRcbiAgICAvLyBhbnkgYHVuZGVmaW5lZGAgaW5zdGFuY2VzIHdpdGggdGhlIGZpbHRlciBjYWxsIGFib3ZlLlxuICAgIENDLmNvc21ldGljU3R5bGVTaGVldC5kZWxldGVSdWxlKHJ1bGVJZHgpXG4gIH1cbiAgLy8gUmUtc3luYyB0aGUgaW5kZXhlc1xuICAvLyBUT0RPOiBTeW5jIGlzIGhhcmQsIGp1c3QgcmUtYnVpbGQgYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIFN0eWxlU2hlZXQgcnVsZXMuXG4gIGNvbnN0IHJ1bGVMb29rdXAgPSBBcnJheS5mcm9tKENDLmFsbFNlbGVjdG9yc1RvUnVsZXMuZW50cmllcygpKVxuICBsZXQgY291bnRBdExhc3RIaWdoZXN0ID0gcnVsZXNUb1JlbW92ZS5sZW5ndGhcbiAgZm9yIChsZXQgaSA9IGxhc3RJZHg7IGkgPiAwOyBpLS0pIHtcbiAgICBjb25zdCBbc2VsZWN0b3IsIG9sZElkeF0gPSBydWxlTG9va3VwW2ldXG4gICAgLy8gSXMgdGhpcyBvbmUgd2UgcmVtb3ZlZD9cbiAgICBpZiAocnVsZXNUb1JlbW92ZS5pbmNsdWRlcyhpKSkge1xuICAgICAgQ0MuYWxsU2VsZWN0b3JzVG9SdWxlcy5kZWxldGUoc2VsZWN0b3IpXG4gICAgICBjb3VudEF0TGFzdEhpZ2hlc3QtLVxuICAgICAgaWYgKGNvdW50QXRMYXN0SGlnaGVzdCA9PT0gMCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY29udGludWVcbiAgICB9XG4gICAgaWYgKG9sZElkeCAhPT0gaSkge1xuICAgICAgLy8gUHJvYmFibHkgb3V0IG9mIHN5bmNcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvc21ldGljIEZpbHRlcnM6IG9sZCBpbmRleCBkaWQgbm90IG1hdGNoIGxvb2t1cCBpbmRleCcsIHtcbiAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgIG9sZElkeCxcbiAgICAgICAgaSxcbiAgICAgIH0pXG4gICAgfVxuICAgIENDLmFsbFNlbGVjdG9yc1RvUnVsZXMuc2V0KHNlbGVjdG9yLCBvbGRJZHggLSBjb3VudEF0TGFzdEhpZ2hlc3QpXG4gIH1cbn1cblxuY29uc3QgcHVtcEludGVydmFsTWluTXMgPSA0MFxuY29uc3QgcHVtcEludGVydmFsTWF4TXMgPSAxMDAwXG5jb25zdCBtYXhXb3JrU2l6ZSA9IDYwXG5sZXQgcXVldWVJc1NsZWVwaW5nID0gZmFsc2VcblxuLyoqXG4gKiBHbyB0aHJvdWdoIGVhY2ggb2YgdGhlIDMgcXVldWVzLCBvbmx5IHRha2UgNTAgaXRlbXMgZnJvbSBlYWNoIG9uZVxuICogMS4gVGFrZSA1MCBzZWxlY3RvcnMgZnJvbSB0aGUgZmlyc3QgcXVldWUgd2l0aCBhbnkgaXRlbXNcbiAqIDIuIERldGVybWluZSBwYXJ0eW5lc3Mgb2YgbWF0Y2hlZCBlbGVtZW50OlxuICogICAtIElmIGFueSBhcmUgM3JkIHBhcnR5LCBrZWVwICdoaWRlJyBydWxlIGFuZCBjaGVjayBhZ2FpbiBsYXRlciBpbiBuZXh0IHF1ZXVlLlxuICogICAtIElmIGFueSBhcmUgMXN0IHBhcnR5LCByZW1vdmUgJ2hpZGUnIHJ1bGUgYW5kIG5ldmVyIGNoZWNrIHNlbGVjdG9yIGFnYWluLlxuICogMy4gSWYgd2UncmUgbG9va2luZyBhdCB0aGUgM3JkIHF1ZXVlLCBkb24ndCByZXF1ZXVlIGFueSBzZWxlY3RvcnMuXG4gKi9cbmNvbnN0IHB1bXBDb3NtZXRpY0ZpbHRlclF1ZXVlcyA9ICgpID0+IHtcbiAgaWYgKHF1ZXVlSXNTbGVlcGluZykge1xuICAgIHJldHVyblxuICB9XG5cbiAgbGV0IGRpZFB1bXBBbnl0aGluZyA9IGZhbHNlXG4gIC8vIEZvciBlYWNoIFwicHVtcFwiLCB3YWxrIHRocm91Z2ggZWFjaCBxdWV1ZSB1bnRpbCB3ZSBmaW5kIHNlbGVjdG9yc1xuICAvLyB0byBldmFsdWF0ZS4gVGhpcyBtZWFucyB0aGF0IG5vdGhpbmcgaW4gcXVldWUgTisxIHdpbGwgYmUgZXZhbHVhdGVkXG4gIC8vIHVudGlsIHF1ZXVlIE4gaXMgY29tcGxldGVseSBlbXB0eS5cbiAgZm9yIChsZXQgcXVldWVJbmRleCA9IDA7IHF1ZXVlSW5kZXggPCBDQy5udW1RdWV1ZXM7IHF1ZXVlSW5kZXggKz0gMSkge1xuICAgIGNvbnN0IGN1cnJlbnRRdWV1ZSA9IENDLmFsbFF1ZXVlc1txdWV1ZUluZGV4XVxuICAgIGNvbnN0IG5leHRRdWV1ZSA9IENDLmFsbFF1ZXVlc1txdWV1ZUluZGV4ICsgMV1cbiAgICBpZiAoY3VycmVudFF1ZXVlLnNpemUgPT09IDApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFdvcmtMb2FkID0gQXJyYXkuZnJvbShjdXJyZW50UXVldWUudmFsdWVzKCkpLnNsaWNlKFxuICAgICAgMCxcbiAgICAgIG1heFdvcmtTaXplLFxuICAgIClcbiAgICBjb25zdCBjb21ib1NlbGVjdG9yID0gY3VycmVudFdvcmtMb2FkLmpvaW4oJywnKVxuICAgIGNvbnN0IG1hdGNoaW5nRWxtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29tYm9TZWxlY3RvcilcbiAgICAvLyBXaWxsIGhvbGQgc2VsZWN0b3JzIGlkZW50aWZpZWQgYnkgX3RoaXNfIHF1ZXVlIHB1bXBpbmcsIHRoYXQgd2VyZVxuICAgIC8vIG5ld2x5IGlkZW50aWZpZWQgdG8gYmUgbWF0Y2hpbmcgMXAgY29udGVudC4gIFdpbGwgYmUgc2VudCB0b1xuICAgIC8vIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCB0byBkbyB0aGUgdW4taGlkaW5nLlxuICAgIGNvbnN0IG5ld2x5SWRlbnRpZmllZEZpcnN0UGFydHlTZWxlY3RvcnMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXG4gICAgZm9yIChjb25zdCBhTWF0Y2hpbmdFbG0gb2YgbWF0Y2hpbmdFbG1zKSB7XG4gICAgICAvLyBEb24ndCByZWNoZWNrIGVsZW1lbnRzIC8gc3VidHJlZXMgd2UgYWxyZWFkeSBrbm93IGFyZSBmaXJzdCBwYXJ0eS5cbiAgICAgIC8vIE9uY2Ugd2Uga25vdyBzb21ldGhpbmcgaXMgdGhpcmQgcGFydHksIHdlIG5ldmVyIG5lZWQgdG8gZXZhbHVhdGUgaXRcbiAgICAgIC8vIGFnYWluLlxuICAgICAgaWYgKENDLmFscmVhZHlLbm93bkZpcnN0UGFydHlTdWJ0cmVlcy5oYXMoYU1hdGNoaW5nRWxtKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbG1TdWJ0cmVlSXNGaXJzdFBhcnR5ID0gaXNTdWJUcmVlRmlyc3RQYXJ0eShhTWF0Y2hpbmdFbG0pXG4gICAgICAvLyBJZiB3ZSBmaW5kIHRoYXQgYSBzdWJ0cmVlIGlzIHRoaXJkIHBhcnR5LCB0aGVuIG5vIG5lZWQgdG8gY2hhbmdlXG4gICAgICAvLyBhbnl0aGluZywgbGVhdmUgdGhlIHNlbGVjdG9yIGFzIFwiaGlkaW5nXCIgYW5kIG1vdmUgb24uXG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2lsbCBsaWtlbHkgYmUgY2hlY2tlZCBhZ2FpbiBvbiB0aGUgbmV4dCAncHVtcCdcbiAgICAgIC8vIGFzIGxvbmcgYXMgYW5vdGhlciBlbGVtZW50IGZyb20gdGhlIHNlbGVjdG9yIGRvZXMgbm90IG1hdGNoIDFzdCBwYXJ0eS5cbiAgICAgIC8vXG4gICAgICAvLyBBbHNvLCBpZiB0aGUgc3VidHJlZSBkb2Vzbid0IGhhdmUgYSBzaWduaWZpY2FudCBhbW91bnQgb2YgdGV4dCAoZS5nLixcbiAgICAgIC8vIGl0IGp1c3Qgc2F5cyBcIkFkdmVydGlzZW1lbnRcIiksIHRoZW4gbm8gbmVlZCB0byBjaGFuZ2UgYW55dGhpbmc7IGl0XG4gICAgICAvLyBzaG91bGQgc3RheSBoaWRkZW4uXG4gICAgICBpZiAoIShlbG1TdWJ0cmVlSXNGaXJzdFBhcnR5IHx8IHNob3dzU2lnbmlmaWNhbnRUZXh0KGFNYXRjaGluZ0VsbSkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgd2Uga25vdyB0aGF0IHRoZSBnaXZlbiBzdWJ0cmVlIHdhcyBldmFsdWF0ZWQgdG8gYmVcbiAgICAgIC8vIGZpcnN0IHBhcnR5LCBzbyB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgd2hpY2ggc2VsZWN0b3IgZnJvbSB0aGUgY29tYm9cbiAgICAgIC8vIHNlbGVjdG9yIGRpZCB0aGUgbWF0Y2hpbmcuXG4gICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIGN1cnJlbnRXb3JrTG9hZCkge1xuICAgICAgICBpZiAoIWFNYXRjaGluZ0VsbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW1pbGFybHksIGlmIHdlIGFscmVhZHkga25vdyBhIHNlbGVjdG9yIG1hdGNoZXMgMXAgY29udGVudCxcbiAgICAgICAgLy8gdGhlcmUgaXMgbm8gbmVlZCB0byBub3RpZnkgdGhlIGJhY2tncm91bmQgc2NyaXB0IGFnYWluLCBzb1xuICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGNvbnNpZGVyIGZ1cnRoZXIuXG4gICAgICAgIGlmIChDQy5hbHJlYWR5VW5oaWRkZW5TZWxlY3RvcnMuaGFzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBuZXdseUlkZW50aWZpZWRGaXJzdFBhcnR5U2VsZWN0b3JzLmFkZChzZWxlY3RvcilcbiAgICAgICAgQ0MuYWxyZWFkeVVuaGlkZGVuU2VsZWN0b3JzLmFkZChzZWxlY3RvcilcbiAgICAgIH1cbiAgICAgIENDLmFscmVhZHlLbm93bkZpcnN0UGFydHlTdWJ0cmVlcy5hZGQoYU1hdGNoaW5nRWxtKVxuICAgIH1cblxuICAgIHVuaGlkZVNlbGVjdG9ycyhuZXdseUlkZW50aWZpZWRGaXJzdFBhcnR5U2VsZWN0b3JzKVxuXG4gICAgZm9yIChjb25zdCBhVXNlZFNlbGVjdG9yIG9mIGN1cnJlbnRXb3JrTG9hZCkge1xuICAgICAgY3VycmVudFF1ZXVlLmRlbGV0ZShhVXNlZFNlbGVjdG9yKVxuICAgICAgLy8gRG9uJ3QgcmVxdWV1ZSBzZWxlY3RvcnMgd2Uga25vdyBpZGVudGlmeSBmaXJzdCBwYXJ0eSBjb250ZW50LlxuICAgICAgY29uc3Qgc2VsZWN0b3JNYXRjaGVkRmlyc3RQYXJ0eSA9XG4gICAgICAgIG5ld2x5SWRlbnRpZmllZEZpcnN0UGFydHlTZWxlY3RvcnMuaGFzKGFVc2VkU2VsZWN0b3IpXG4gICAgICBpZiAobmV4dFF1ZXVlICYmICFzZWxlY3Rvck1hdGNoZWRGaXJzdFBhcnR5KSB7XG4gICAgICAgIG5leHRRdWV1ZS5hZGQoYVVzZWRTZWxlY3RvcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaWRQdW1wQW55dGhpbmcgPSB0cnVlXG4gICAgLy8gSWYgd2UgZGlkIHNvbWV0aGluZywgIHByb2Nlc3MgdGhlIG5leHQgcXVldWUsIHNhdmUgaXQgZm9yIG5leHQgdGltZS5cbiAgICBicmVha1xuICB9XG5cbiAgaWYgKGRpZFB1bXBBbnl0aGluZykge1xuICAgIHF1ZXVlSXNTbGVlcGluZyA9IHRydWVcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBTZXQgdGhpcyB0byBmYWxzZSBub3cgZXZlbiB0aG91Z2ggdGhlcmUncyBhIGdhcCBpbiB0aW1lIGJldHdlZW4gbm93IGFuZFxuICAgICAgLy8gaWRsZSBzaW5jZSBhbGwgb3RoZXIgY2FsbHMgdG8gYHB1bXBDb3NtZXRpY0ZpbHRlclF1ZXVlc09uSWRsZWAgdGhhdCBvY2N1ciBkdXJpbmcgdGhpcyB0aW1lXG4gICAgICAvLyB3aWxsIGJlIGlnbm9yZWQgKGFuZCBub3RoaW5nIGVsc2Ugc2hvdWxkIGJlIGNhbGxpbmcgYHB1bXBDb3NtZXRpY0ZpbHRlclF1ZXVlc2Agc3RyYWlnaHQpLlxuICAgICAgcXVldWVJc1NsZWVwaW5nID0gZmFsc2VcbiAgICAgIHB1bXBDb3NtZXRpY0ZpbHRlclF1ZXVlc09uSWRsZSgpXG4gICAgfSwgcHVtcEludGVydmFsTWluTXMpXG4gIH1cbn1cblxuY29uc3QgcHVtcENvc21ldGljRmlsdGVyUXVldWVzT25JZGxlID0gaWRsZWl6ZShcbiAgcHVtcENvc21ldGljRmlsdGVyUXVldWVzLFxuICBwdW1wSW50ZXJ2YWxNYXhNcyxcbilcblxuY29uc3QgcXVlcnlBdHRyc0Zyb21Eb2N1bWVudCA9IChzd2l0Y2hUb011dGF0aW9uT2JzZXJ2ZXJBdFRpbWU/OiBudW1iZXIpID0+IHtcbiAgLy8gQ2FsbGJhY2sgdG8gYysrIHJlbmRlcmVyIHByb2Nlc3NcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBjb25zdCBldmVudElkOiBudW1iZXIgfCB1bmRlZmluZWQgPSBjZl93b3JrZXIub25RdWVyeVNlbGVjdG9yc0JlZ2luPy4oKVxuXG4gIGlmICghQ0MuZ2VuZXJpY2hpZGUpIHtcbiAgICBjb25zdCBlbG1XaXRoQ2xhc3NPcklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc0lkV2l0aG91dEh0bWxPckJvZHkpXG4gICAgZm9yIChjb25zdCBlbG0gb2YgZWxtV2l0aENsYXNzT3JJZCkge1xuICAgICAgcXVldWVFbGVtZW50SWRBbmRDbGFzc2VzKGVsbSlcbiAgICB9XG5cbiAgICBmZXRjaE5ld0NsYXNzSWRSdWxlcygpXG4gIH1cblxuICBpZiAoQ0MuaGFzUHJvY2VkdXJhbEFjdGlvbnMpIGV4ZWN1dGVQcm9jZWR1cmFsQWN0aW9ucygpXG5cbiAgaWYgKGV2ZW50SWQpIHtcbiAgICAvLyBDYWxsYmFjayB0byBjKysgcmVuZGVyZXIgcHJvY2Vzc1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjZl93b3JrZXIub25RdWVyeVNlbGVjdG9yc0VuZChldmVudElkKVxuICB9XG5cbiAgaWYgKFxuICAgIHN3aXRjaFRvTXV0YXRpb25PYnNlcnZlckF0VGltZSAhPT0gdW5kZWZpbmVkXG4gICAgJiYgd2luZG93LkRhdGUubm93KCkgPj0gc3dpdGNoVG9NdXRhdGlvbk9ic2VydmVyQXRUaW1lXG4gICkge1xuICAgIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKVxuICB9XG59XG5cbmNvbnN0IHN0YXJ0T2JzZXJ2aW5nID0gKCkgPT4ge1xuICAvLyBGaXJzdCBxdWV1ZSB1cCBhbnkgY2xhc3NlcyBhbmQgaWRzIHRoYXQgZXhpc3QgYmVmb3JlIHRoZSBtdXRhdGlvbiBvYnNlcnZlclxuICAvLyBzdGFydHMgcnVubmluZy5cbiAgcXVlcnlBdHRyc0Zyb21Eb2N1bWVudCgpXG5cbiAgLy8gU2Vjb25kLCBzZXQgdXAgYSBtdXRhdGlvbiBvYnNlcnZlciB0byBoYW5kbGUgYW55IG5ldyBpZHMgb3IgY2xhc3Nlc1xuICAvLyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgZG9jdW1lbnQuXG4gIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKVxufVxuXG5jb25zdCBzY2hlZHVsZVF1ZXVlUHVtcCA9IChoaWRlMXBDb250ZW50OiBib29sZWFuLCBnZW5lcmljSGlkZTogYm9vbGVhbikgPT4ge1xuICAvLyBUaHJlZSBzdGF0ZXMgcG9zc2libGUgaGVyZS4gIEZpcnN0LCB0aGUgZGVsYXkgaGFzIGFscmVhZHkgb2NjdXJyZWQuICBJZiBzbyxcbiAgLy8gcGFzcyB0aHJvdWdoIHRvIHB1bXBDb3NtZXRpY0ZpbHRlclF1ZXVlcyBpbW1lZGlhdGVseS5cbiAgaWYgKENDLl9oYXNEZWxheU9jdXJyZWQpIHtcbiAgICBwdW1wQ29zbWV0aWNGaWx0ZXJRdWV1ZXNPbklkbGUoKVxuICAgIHJldHVyblxuICB9XG4gIC8vIFNlY29uZCBwb3NzaWJpbGl0eSBpcyB0aGF0IHdlJ3JlIGFscmVhZHkgd2FpdGluZyBmb3IgdGhlIGRlbGF5IHRvIHBhc3MgL1xuICAvLyBvY2N1ci4gIEluIHRoaXMgY2FzZSwgZG8gbm90aGluZy5cbiAgaWYgKENDLl9zdGFydENoZWNraW5nSWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVyblxuICB9XG4gIC8vIFRoaXJkIC8gZmluYWwgcG9zc2liaWxpdHksIHRoaXMgaXMgdGhpcyB0aGUgZmlyc3QgdGltZSB0aGlzIGhhcyBiZWVuXG4gIC8vIGNhbGxlZCwgaW4gd2hpY2ggY2FzZSBzZXQgdXAgYSB0aW1lciBhbmQgcXVpdFxuICBDQy5fc3RhcnRDaGVja2luZ0lkID0gd2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soXG4gICAgKF8pID0+IHtcbiAgICAgIENDLl9oYXNEZWxheU9jdXJyZWQgPSB0cnVlXG4gICAgICBpZiAoIWdlbmVyaWNIaWRlIHx8IENDLmhhc1Byb2NlZHVyYWxBY3Rpb25zKSB7XG4gICAgICAgIGlmIChDQy5maXJzdFNlbGVjdG9yc1BvbGxpbmdEZWxheU1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGFydE9ic2VydmluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc3RhcnRPYnNlcnZpbmcsIENDLmZpcnN0U2VsZWN0b3JzUG9sbGluZ0RlbGF5TXMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaGlkZTFwQ29udGVudCkge1xuICAgICAgICBwdW1wQ29zbWV0aWNGaWx0ZXJRdWV1ZXNPbklkbGUoKVxuICAgICAgfVxuICAgIH0sXG4gICAgeyB0aW1lb3V0OiBtYXhUaW1lTVNCZWZvcmVTdGFydCB9LFxuICApXG59XG5cbmNvbnN0IHRyeVNjaGVkdWxlUXVldWVQdW1wID0gKCkgPT4ge1xuICBpZiAoIUNDLm9ic2VydmluZ0hhc1N0YXJ0ZWQpIHtcbiAgICBDQy5vYnNlcnZpbmdIYXNTdGFydGVkID0gdHJ1ZVxuICAgIHNjaGVkdWxlUXVldWVQdW1wKENDLmhpZGUxcENvbnRlbnQsIENDLmdlbmVyaWNoaWRlKVxuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlUXVldWVQdW1wKGZhbHNlLCBmYWxzZSlcbiAgfVxufVxuXG5DQy50cnlTY2hlZHVsZVF1ZXVlUHVtcCA9IENDLnRyeVNjaGVkdWxlUXVldWVQdW1wIHx8IHRyeVNjaGVkdWxlUXVldWVQdW1wXG5cbnRyeVNjaGVkdWxlUXVldWVQdW1wKClcblxuY29uc3QgZXhlY3V0ZVByb2NlZHVyYWxBY3Rpb25zID0gKGFkZGVkPzogRWxlbWVudFtdKSA9PiB7XG4gIC8vIElmIHBhc3NlZCBhIGxpc3Qgb2YgYWRkZWQgZWxlbWVudHMsIGRvIG5vdCBxdWVyeSB0aGUgZW50aXJlIGRvY3VtZW50XG4gIGlmIChDQy5wcm9jZWR1cmFsQWN0aW9uRmlsdGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBnZXRTdHlsZUF0dHIgPSAoc3R5bGU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgbGV0IHN0eWxlQXR0ciA9IHN0eWxlQXR0ck1hcC5nZXQoc3R5bGUpXG4gICAgaWYgKHN0eWxlQXR0ciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZUF0dHIgPSBnZW5lcmF0ZVJhbmRvbUF0dHIoKVxuICAgICAgc3R5bGVBdHRyTWFwLnNldChzdHlsZSwgc3R5bGVBdHRyKVxuICAgICAgY29uc3QgY3NzID0gYFske2dsb2JhbFN0eWxlQXR0cn1dWyR7c3R5bGVBdHRyfV17JHtzdHlsZX19YFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgY2Zfd29ya2VyLmluamVjdFN0eWxlc2hlZXQoY3NzKVxuICAgIH1cbiAgICByZXR1cm4gc3R5bGVBdHRyXG4gIH1cblxuICBjb25zdCBwZXJmb3JtQWN0aW9uID0gKGVsZW1lbnQ6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICBpZiAoYWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSBnZXRTdHlsZUF0dHIoJ2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShnbG9iYWxTdHlsZUF0dHIsICcnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgJycpXG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3N0eWxlJykge1xuICAgICAgY29uc3QgYXR0ciA9IGdldFN0eWxlQXR0cihhY3Rpb24uYXJnKVxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZ2xvYmFsU3R5bGVBdHRyLCAnJylcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsICcnKVxuICAgIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdyZW1vdmUnKSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gJ3JlbW92ZS1hdHRyJykge1xuICAgICAgLy8gV2UgY2FuIHJlbW92ZSBhdHRyaWJ1dGVzIHdpdGhvdXQgY2hlY2tpbmcgaWYgdGhleSBleGlzdFxuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYWN0aW9uLmFyZylcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSAncmVtb3ZlLWNsYXNzJykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGVsZW1lbnQgaGFzIGFueSBjbGFzc2VzIHRvIHJlbW92ZSBiZWNhdXNlXG4gICAgICAvLyBjbGFzc0xpc3QucmVtb3ZlKHRva2Vucy4uLikgYWx3YXlzIHRyaWdnZXJzIGFub3RoZXIgbXV0YXRpb25cbiAgICAgIC8vIGV2ZW4gaWYgbm90aGluZyB3YXMgcmVtb3ZlZC5cbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhhY3Rpb24uYXJnKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYWN0aW9uLmFyZylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yIChjb25zdCB7IHNlbGVjdG9yLCBhY3Rpb24gfSBvZiBDQy5wcm9jZWR1cmFsQWN0aW9uRmlsdGVycykge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbWF0Y2hpbmdFbGVtZW50czogRWxlbWVudFtdIHwgTm9kZUxpc3RPZjxhbnk+XG4gICAgICBsZXQgc3RhcnRPcGVyYXRvcjogbnVtYmVyXG5cbiAgICAgIGlmIChzZWxlY3RvclswXS50eXBlID09PSAnY3NzLXNlbGVjdG9yJyAmJiBhZGRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hdGNoaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yWzBdLmFyZylcbiAgICAgICAgc3RhcnRPcGVyYXRvciA9IDFcbiAgICAgIH0gZWxzZSBpZiAoYWRkZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpXG4gICAgICAgIHN0YXJ0T3BlcmF0b3IgPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaGluZ0VsZW1lbnRzID0gYWRkZWRcbiAgICAgICAgc3RhcnRPcGVyYXRvciA9IDBcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0T3BlcmF0b3IgPT09IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgICAvLyBGaXJzdCBgY3NzLXNlbGVjdG9yYCB3YXMgYWxyZWFkeSBoYW5kbGVkLCBhbmQgbm8gbW9yZSBlbGVtZW50cyByZW1haW5cbiAgICAgICAgbWF0Y2hpbmdFbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiBwZXJmb3JtQWN0aW9uKGVsZW0sIGFjdGlvbikpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSBjb21waWxlUHJvY2VkdXJhbFNlbGVjdG9yKHNlbGVjdG9yLnNsaWNlKHN0YXJ0T3BlcmF0b3IpKVxuICAgICAgICBhcHBseUNvbXBpbGVkU2VsZWN0b3IoXG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG1hdGNoaW5nRWxlbWVudHMgYXMgSFRNTEVsZW1lbnRbXSxcbiAgICAgICAgKS5mb3JFYWNoKChlbGVtKSA9PiBwZXJmb3JtQWN0aW9uKGVsZW0sIGFjdGlvbikpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ0ZhaWxlZCB0byBhcHBseSBmaWx0ZXIgJ1xuICAgICAgICAgICsgSlNPTi5zdHJpbmdpZnkoc2VsZWN0b3IpXG4gICAgICAgICAgKyAnICdcbiAgICAgICAgICArIEpTT04uc3RyaW5naWZ5KGFjdGlvbilcbiAgICAgICAgICArICc6ICcsXG4gICAgICApXG4gICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcbiAgICB9XG4gIH1cbn1cblxuaWYgKENDLmhhc1Byb2NlZHVyYWxBY3Rpb25zKSBleGVjdXRlUHJvY2VkdXJhbEFjdGlvbnMoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9