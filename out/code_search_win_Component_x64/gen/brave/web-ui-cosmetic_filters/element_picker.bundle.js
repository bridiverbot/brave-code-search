/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************************************************************************************!*\
  !*** ./components/cosmetic_filters/resources/data/element_picker_chromium.ts + 3 modules ***!
  \*******************************************************************************************/

;// ./components/cosmetic_filters/resources/data/element_picker.ts
// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const NSSVG = 'http://www.w3.org/2000/svg';
let pickerDiv;
let shadowRoot;
let isMobile;
let btnCreateEnabledText;
let btnCreateDisabledText;
let btnShowRulesBoxText;
let btnHideRulesBoxText;
// Both set by `showElementPicker()` before any of the picker UI is created.
let api;
let template;
// When the picker is activated, it eats all pointer events and takes up the
// entire screen. All calls to document.elementFromPoint(..) will return the
// frame. We disable pointer events for the duration of the query to get
// around this.
const elementFromFrameCoords = (x, y) => {
    if (!pickerDiv) {
        return null;
    }
    pickerDiv.style.setProperty('pointer-events', 'none', 'important');
    const elem = document.elementFromPoint(x, y);
    pickerDiv.style.setProperty('pointer-events', 'auto', 'important');
    return elem;
};
var SpecificityFlags;
(function (SpecificityFlags) {
    SpecificityFlags[SpecificityFlags["Id"] = 1] = "Id";
    SpecificityFlags[SpecificityFlags["Hierarchy"] = 2] = "Hierarchy";
    SpecificityFlags[SpecificityFlags["Attributes"] = 4] = "Attributes";
    SpecificityFlags[SpecificityFlags["Class"] = 8] = "Class";
    SpecificityFlags[SpecificityFlags["NthOfType"] = 16] = "NthOfType";
})(SpecificityFlags || (SpecificityFlags = {}));
const mostSpecificMask = 0b11111;
var Selector;
(function (Selector) {
    Selector[Selector["Id"] = 0] = "Id";
    Selector[Selector["Class"] = 1] = "Class";
    Selector[Selector["Attributes"] = 2] = "Attributes";
    Selector[Selector["NthOfType"] = 3] = "NthOfType";
})(Selector || (Selector = {}));
class ElementSelectorBuilder {
    constructor(elem) {
        this.rules = [];
        this.tag = '';
        this.elem = elem;
        this.hasId = false;
    }
    addRule(rule) {
        if (rule.type < Selector.Id || rule.type > Selector.NthOfType) {
            console.log(`Unexpected selector: ${rule.type}`);
            return;
        }
        if (Array.isArray(rule.value) && rule.value.length === 0) {
            return;
        }
        if (rule.type === Selector.Id) {
            this.hasId = true;
        }
        this.rules.push(rule);
    }
    addTag(tag) {
        this.tag = tag;
    }
    size() {
        return this.rules.length;
    }
    toString(mask = mostSpecificMask) {
        let selector = this.tag + '';
        for (const rule of this.rules) {
            if (!(mask & SpecificityFlags.Id) && rule.type === Selector.Id) {
                continue;
            }
            if (!(mask & SpecificityFlags.Class) && rule.type === Selector.Class) {
                continue;
            }
            if (!(mask & SpecificityFlags.Attributes)
                && rule.type === Selector.Attributes) {
                continue;
            }
            if (!(mask & SpecificityFlags.NthOfType)
                && rule.type === Selector.NthOfType) {
                continue;
            }
            if (this.hasId
                && mask & SpecificityFlags.Id
                && rule.type === Selector.Class) {
                continue;
            }
            switch (rule.type) {
                case Selector.Id: {
                    selector += '#' + rule.value;
                    break;
                }
                case Selector.Class: {
                    selector += '.' + rule.value.join('.');
                    break;
                }
                case Selector.Attributes: {
                    for (const attribute of rule.value) {
                        const sourceAttr = this.elem.getAttribute(attribute.attr);
                        let op = '*=';
                        if (attribute.attr === sourceAttr) {
                            op = '=';
                        }
                        else if (attribute.attr.startsWith(sourceAttr)) {
                            op = '^=';
                        }
                        // Escape attribute and its values for CSS selector
                        selector +=
                            `[${CSS.escape(attribute.attr)}${op}`
                                + `"${CSS.escape(attribute.value)}"]`;
                    }
                    break;
                }
                case Selector.NthOfType: {
                    // NOTE: this selector is not valid without calling addTag(..)
                    selector += `:nth-of-type(${rule.value})`;
                    break;
                }
                default: {
                    /* Unreachable */
                }
            }
        }
        return selector;
    }
}
// We search for a CSS selector for the target element. We want the most
// specific identifiers.
const cssSelectorFromElement = (elem) => {
    var _a, _b, _c, _d, _e;
    const builder = new ElementSelectorBuilder(elem);
    // ID
    if (elem.id.length > 0
        // Ensure the escaped ID is unique in the document
        // to avoid ambiguous selectors
        && document.querySelectorAll(`#${CSS.escape(elem.id)}`).length === 1) {
        builder.addRule({
            type: Selector.Id,
            value: CSS.escape(elem.id),
        });
    }
    // Class names
    if (elem.classList.length > 0) {
        builder.addRule({
            type: Selector.Class,
            value: Array.from(elem.classList).map((c) => CSS.escape(c)),
        });
    }
    const tag = CSS.escape(elem.localName);
    // Attributes. Only try these if we have no matches.
    if (builder.size() === 0) {
        const attributes = [];
        switch (tag) {
            case 'a': {
                // Get URL, removing query parameters and hash
                const url = (_a = elem.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.trim().split(/[?#]/)[0];
                if (url !== undefined && url.length > 0) {
                    attributes.push({
                        attr: 'href',
                        value: url,
                    });
                }
                break;
            }
            case 'iframe': {
                const url = (_b = elem.getAttribute('src')) === null || _b === void 0 ? void 0 : _b.trim();
                if (url !== undefined && url.length > 0) {
                    attributes.push({
                        attr: 'src',
                        value: url.slice(0, 256),
                    });
                }
                break;
            }
            case 'img': {
                let data = (_c = elem.getAttribute('src')) === null || _c === void 0 ? void 0 : _c.trim();
                if (data !== undefined && data.length > 0) {
                    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
                    if (data.startsWith('data:')) {
                        data = (_d = data.split(',')[1]) === null || _d === void 0 ? void 0 : _d.slice(0, 256);
                    }
                }
                if (data === undefined || data.length === 0) {
                    const alttext = (_e = elem.getAttribute('alt')) === null || _e === void 0 ? void 0 : _e.trim();
                    if (alttext !== undefined && alttext.length > 0) {
                        attributes.push({
                            attr: 'alt',
                            value: alttext,
                        });
                    }
                }
                else {
                    attributes.push({
                        attr: 'src',
                        value: data,
                    });
                }
                break;
            }
            default: {
                break;
            }
        }
        if (attributes.length > 0) {
            builder.addRule({
                type: Selector.Attributes,
                value: attributes,
            });
        }
    }
    const querySelectorNoExcept = (node, selector) => {
        if (node !== null) {
            try {
                const r = node.querySelectorAll(selector);
                return Array.from(r);
            }
            catch {
                /* Deliberately left empty */
            }
        }
        return [];
    };
    if (builder.size() === 0
        || querySelectorNoExcept(elem.parentElement, builder.toString()).length > 1) {
        builder.addTag(tag);
        if (querySelectorNoExcept(elem.parentElement, builder.toString()).length > 1) {
            let index = 1;
            let sibling = elem.previousElementSibling;
            while (sibling !== null) {
                if (sibling.localName === tag) {
                    index++;
                }
                sibling = sibling.previousElementSibling;
            }
            builder.addRule({
                type: Selector.NthOfType,
                value: index,
            });
        }
    }
    return builder;
};
const elementPickerOnKeydown = (event) => {
    if (event.key === 'Escape') {
        event.stopPropagation();
        event.preventDefault();
        quitElementPicker();
    }
};
const elementPickerViewportChanged = () => {
    recalculateAndSendTargets(null);
};
const quitElementPicker = () => {
    if (pickerDiv !== null) {
        document.documentElement.removeChild(pickerDiv);
    }
    // Tear down element picker listeners
    document.removeEventListener('keydown', elementPickerOnKeydown, true);
    document.removeEventListener('resize', elementPickerViewportChanged);
    document.removeEventListener('scroll', elementPickerViewportChanged);
};
const attachElementPicker = () => {
    // "src" is a web accessible resource since the URI is chrome-extension://.
    // This ensures a malicious page cannot modify the iframe contents.
    pickerDiv = document.createElement('div');
    pickerDiv.id = 'brave-element-picker';
    shadowRoot = pickerDiv.attachShadow({ mode: 'closed' });
    // It's a trusted content so it's safe to use innerHTML.
    // eslint-disable-next-line no-unsanitized/property
    shadowRoot.innerHTML = template;
    const pickerCSSStyle = [
        'background: transparent',
        'border: 0',
        'border-radius: 0',
        'box-shadow: none',
        'color-scheme: light dark',
        'display: block',
        'height: 100lvh',
        'left: 0',
        'margin: 0',
        'max-height: none',
        'max-width: none',
        'opacity: 1',
        'outline: 0',
        'padding: 0',
        'pointer-events: auto',
        'position: fixed',
        'top: 0',
        'visibility: visible',
        'width: 100%',
        'z-index: 2147483647',
        '--dynamic-color-rgb: rgb(0, 0, 0)',
        '',
    ].join(' !important;');
    pickerDiv.setAttribute('style', pickerCSSStyle);
    document.documentElement.appendChild(pickerDiv);
    // Setup listeners to assist element picker
    document.addEventListener('keydown', elementPickerOnKeydown, true);
    window.addEventListener('resize', elementPickerViewportChanged);
    window.addEventListener('scroll', elementPickerViewportChanged);
    return shadowRoot;
};
class Target {
    constructor(elem) {
        this.element = elem;
        this.coord = targetRectFromElement(this.element);
    }
    forceRecalcCoords() {
        this.coord = targetRectFromElement(this.element);
    }
}
class TargetsCollection {
    constructor() {
        this.targets = [];
        this.togglePicker = null;
    }
    reset(elems) {
        this.targets.length = 0;
        elems.forEach((elem) => {
            this.targets.push(new Target(elem));
        });
    }
    forceRecalcCoords() {
        this.targets.forEach((t) => t.forceRecalcCoords());
        // for case when element no longer in the DOM
        this.targets = this.targets.filter((item) => item.coord.height !== 0 && item.coord.width !== 0);
        if (this.targets.length === 0 && this.togglePicker) {
            this.togglePicker(false);
        }
    }
    size() {
        return this.targets.length;
    }
}
const targetRectFromElement = (elem) => {
    const rect = elem.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top,
    };
};
let lastHoveredElem = null;
const targetedElems = new TargetsCollection();
const recalculateAndSendTargets = (elems) => {
    if (elems) {
        targetedElems.reset(elems);
    }
    else {
        targetedElems.forceRecalcCoords();
    }
    highlightElements();
};
const hideByCssSelector = (selector) => {
    const styleId = 'brave-content-picker-style';
    let style = document.getElementById(styleId);
    if (!style) {
        style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
    }
    style.innerText += `${selector} {display: none !important;}`;
};
const onTargetSelected = (selected, index) => {
    var _a;
    if (lastHoveredElem === null) {
        return '';
    }
    let elem = selected;
    const selectorBuilders = [];
    const specificityMasks = [
        0b01101, // No DOM hierarchy, no nth-of-type
        0b11101, // No DOM hierarchy
        0b01011, // No nth-of-type, no attributes
        0b10011, // No attributes, no class names
        0b11111, // All selector rules (default)
    ];
    // Fall back to the default (all selector rules) for an out-of-range index.
    const mask = (_a = specificityMasks[index]) !== null && _a !== void 0 ? _a : 0b11111;
    if (mask & SpecificityFlags.Hierarchy) {
        while (elem !== null && elem !== document.body) {
            selectorBuilders.push(cssSelectorFromElement(elem));
            elem = elem.parentElement;
        }
    }
    else {
        selectorBuilders.push(cssSelectorFromElement(selected));
    }
    // TODO: insert the body if using nth-type-of
    let i = 0;
    for (; i < selectorBuilders.length; i++) {
        const b = selectorBuilders[i];
        if (!b) {
            continue;
        }
        try {
            if ((mask & SpecificityFlags.Id && b.hasId)
                || document.querySelectorAll(b.toString(mask)).length === 1) {
                break;
            }
        }
        catch {
            continue;
        }
    }
    const selector = selectorBuilders
        .slice(0, i + 1)
        .reverse()
        .map((b) => b.toString(mask))
        .join(' > ');
    return selector;
};
const elementPickerHoverCoordsChanged = (x, y) => {
    const elem = elementFromFrameCoords(x, y);
    if (elem instanceof HTMLElement && elem !== lastHoveredElem) {
        recalculateAndSendTargets([elem]);
        lastHoveredElem = elem;
    }
};
const getElementBySelector = (selector) => {
    let elements;
    const nodeList = document.querySelectorAll(selector);
    elements = nodeList.length > 0 ? Array.from(nodeList) : null;
    return elements;
};
const elementPickerUserSelectedTarget = (specificity) => {
    if (lastHoveredElem instanceof HTMLElement) {
        const selector = onTargetSelected(lastHoveredElem, specificity);
        if (selector !== '') {
            try {
                recalculateAndSendTargets(getElementBySelector(selector));
            }
            catch { }
        }
        return {
            isValid: selector !== '',
            selector: selector.trim(),
        };
    }
    return {
        isValid: false,
        selector: '',
    };
};
const elementPickerUserModifiedRule = (selector) => {
    if (selector.length > 0) {
        try {
            recalculateAndSendTargets(Array.from(document.querySelectorAll(selector)));
        }
        catch { }
    }
};
const setShowRulesHiddenBtnState = (showRulesButton, show) => {
    if (!showRulesButton)
        return;
    showRulesButton.textContent = show ? btnHideRulesBoxText : btnShowRulesBoxText;
};
const setMinimizeState = (minimized) => {
    if (!shadowRoot) {
        return;
    }
    const mainSection = shadowRoot.getElementById('main-section');
    if (mainSection) {
        mainSection.classList.toggle('minimized', minimized);
    }
};
function initSlider(element, options = {}) {
    var _a, _b;
    if (!element)
        return;
    const inputElement = element;
    if (!inputElement)
        return;
    const min = parseInt((_a = inputElement.min) !== null && _a !== void 0 ? _a : '1', 10);
    const max = parseInt((_b = inputElement.max) !== null && _b !== void 0 ? _b : '4', 10);
    const initialValue = 4;
    inputElement.tabIndex = 0;
    let currentValue = initialValue;
    const updateSlider = (fireEvent) => {
        const value = parseFloat(inputElement.value);
        const currMin = parseFloat(inputElement.min);
        const currMax = parseFloat(inputElement.max);
        const percentage = ((value - currMin) / (currMax - currMin)) * 100;
        inputElement.style.setProperty('--value', `${percentage}%`);
        currentValue = value;
        if (fireEvent && options.onChange) {
            options.onChange(currentValue);
        }
        return value;
    };
    inputElement.addEventListener('input', () => updateSlider(true));
    // Initial update
    updateSlider(false);
    // Return API for external control
    return {
        getValue: () => currentValue,
        min,
        max,
    };
}
const launchElementPicker = (root) => {
    let hasSelectedTarget = false;
    const btnShowRulesBox = root.getElementById('btn-show-rules-box');
    if (isMobile && btnShowRulesBox) {
        btnShowRulesBox.style.display = 'none';
    }
    if (isMobile) {
        const minimizeButton = root.getElementById('card-header');
        minimizeButton.addEventListener('click', () => {
            setMinimizeState(true);
        });
    }
    else {
        const closeButton = root.getElementById('close-btn');
        closeButton.addEventListener('click', () => {
            quitElementPicker();
        });
        const minimizeButton = root.getElementById('minimize-dlg-btn');
        minimizeButton.addEventListener('click', () => {
            setMinimizeState(true);
        });
    }
    const maximizeButton = root.getElementById('desktop-min-icon-container');
    maximizeButton.addEventListener('click', () => {
        setMinimizeState(false);
    });
    const sliderElement = root.getElementById('custom-slider');
    const slider = initSlider(sliderElement, {
        onChange: () => {
            dispatchSelect();
        },
    });
    // ShadowRoot has no typed event map, so the handler needs a cast here.
    root.addEventListener('keydown', elementPickerOnKeydown, true);
    const svg = root.getElementById('picker-ui');
    if (window.matchMedia('(pointer: fine)').matches
        && window.matchMedia('(hover: hover)').matches) {
        svg.addEventListener('mousemove', (event) => {
            if (!hasSelectedTarget) {
                elementPickerHoverCoordsChanged(event.clientX, event.clientY);
            }
            event.stopPropagation();
        }, true);
    }
    const rulesTextArea = root.querySelector('#rules-box > textarea');
    let textInputTimer = null;
    rulesTextArea.addEventListener('input', () => {
        clearTimeout(textInputTimer);
        textInputTimer = setTimeout(() => {
            const selector = rulesTextArea.value.trim();
            if (selector.length > 0) {
                elementPickerUserModifiedRule(selector);
            }
        }, 700);
    });
    rulesTextArea.addEventListener('focus', () => {
        hasSelectedTarget = true;
        togglePopup(true);
    });
    const section = root.getElementById('main-section');
    const enableButtons = (isDisabled) => {
        const elements = root.querySelectorAll('.button');
        elements.forEach((element) => {
            if (isDisabled) {
                element.classList.add('disabled');
            }
            else {
                element.classList.remove('disabled');
            }
        });
    };
    if (!isMobile) {
        section.classList.add('desktop');
    }
    const togglePopup = (show) => {
        enableButtons(!show);
        if (show) {
            createButton.textContent = btnCreateEnabledText;
        }
        else {
            createButton.textContent = btnCreateDisabledText;
        }
        if (!isMobile) {
            section.style.setProperty('opacity', show ? '1' : '0.2');
        }
    };
    targetedElems.togglePicker = togglePopup;
    if (isMobile) {
        const sc = root.getElementById('slider-container');
        sc.style.display = 'none';
    }
    const setTitleBarColor = (bgcolor) => {
        const section = root.host;
        if (section) {
            const r = (bgcolor >> 16) & 0xff;
            const g = (bgcolor >> 8) & 0xff;
            const b = bgcolor & 0xff;
            section.style.setProperty('--dynamic-color-rgb', `rgb(${r}, ${g}, ${b})`);
        }
    };
    const retrieveTheme = () => {
        api.getElementPickerThemeInfo((_isDarkModeEnabled, bgcolor) => {
            const bgcolorMaskOut = bgcolor & 0xffffff;
            const colorHex = `#${bgcolorMaskOut.toString(16).padStart(6, '0')}`;
            section.style.setProperty('--theme-background-color', colorHex);
            setTitleBarColor(bgcolor);
            dispatchSelect();
        });
    };
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const handleColorSchemeChange = () => {
        retrieveTheme();
    };
    prefersDarkScheme.addEventListener('change', handleColorSchemeChange);
    retrieveTheme();
    const dispatchSelect = () => {
        var _a;
        const { isValid, selector } = elementPickerUserSelectedTarget((_a = slider === null || slider === void 0 ? void 0 : slider.getValue()) !== null && _a !== void 0 ? _a : 4);
        hasSelectedTarget = isValid;
        togglePopup(isValid);
        rulesTextArea.value = selector;
    };
    const oneClickEventHandler = (event) => {
        let elem = null;
        setMinimizeState(false);
        if (event instanceof MouseEvent) {
            elem = elementFromFrameCoords(event.clientX, event.clientY);
        }
        else if (event instanceof TouchEvent) {
            const touch = event.touches[0];
            if (touch) {
                elem = elementFromFrameCoords(touch.clientX, touch.clientY);
            }
        }
        if (elem) {
            recalculateAndSendTargets([elem]);
            lastHoveredElem = elem;
        }
        dispatchSelect();
    };
    svg.addEventListener('click', oneClickEventHandler);
    const createButton = root.getElementById('btn-create');
    createButton.addEventListener('click', () => {
        if (createButton.classList.contains('block-button-disabled')) {
            return;
        }
        const selector = rulesTextArea.value.trim();
        if (selector.length > 0) {
            api.cosmeticFilterCreate(selector);
            hideByCssSelector(selector);
            quitElementPicker();
        }
    });
    const quitButton = root.getElementById('btn-quit');
    quitButton.addEventListener('click', () => {
        quitElementPicker();
    });
    const manageButton = root.getElementById('btn-manage');
    manageButton.addEventListener('click', () => {
        api.cosmeticFilterManage();
    });
    const toggleDisplay = (target, trigger) => {
        if (!target || !trigger) {
            return;
        }
        trigger.addEventListener('click', () => {
            if (target.style.display !== 'block') {
                target.style.display = 'block';
                setShowRulesHiddenBtnState(trigger, true);
            }
            else {
                target.style.display = 'none';
                setShowRulesHiddenBtnState(trigger, false);
            }
        });
    };
    const rulesBox = root.getElementById('rules-box');
    const showRulesButton = root.getElementById('btn-show-rules-box');
    toggleDisplay(rulesBox, showRulesButton);
};
const highlightElements = () => {
    if (!shadowRoot)
        return;
    const svg = shadowRoot.getElementById('picker-ui');
    const svgMask = shadowRoot.getElementById('highlight-mask');
    svg.querySelectorAll('.mask').forEach((el) => el.remove());
    const svgMaskFragment = document.createDocumentFragment();
    const svgFragment = document.createDocumentFragment();
    const createMaskElement = () => {
        const mask = document.createElementNS(NSSVG, 'rect');
        mask.classList.add('mask');
        mask.rx.baseVal.value = 10;
        mask.setAttribute('px', '10px');
        mask.setAttribute('stroke-linejoin', 'round');
        return mask;
    };
    for (const target of targetedElems.targets) {
        // Add the mask to the SVG definition so the dark background is removed
        const mask = createMaskElement();
        mask.x.baseVal.value = target.coord.x;
        mask.y.baseVal.value = target.coord.y;
        mask.width.baseVal.value = target.coord.width;
        mask.height.baseVal.value = target.coord.height;
        mask.rx.baseVal.value = 10;
        svgMaskFragment.appendChild(mask);
        // Use the same element, but add the target class which turns the
        // target rectangle orange
        const targetingArea = mask.cloneNode(false);
        targetingArea.classList.add('target');
        svgFragment.appendChild(targetingArea);
    }
    svgMask.appendChild(svgMaskFragment);
    svg.appendChild(svgFragment);
};
const localizeTextData = (root, btnCrDisText, btnCrEnblText, btnManageText, btnShowRulesText, btnHideRulesText, btnQuitText) => {
    btnCreateDisabledText = btnCrDisText;
    btnCreateEnabledText = btnCrEnblText;
    btnShowRulesBoxText = btnShowRulesText;
    btnHideRulesBoxText = btnHideRulesText;
    const btnCreate = root.getElementById('btn-create');
    if (btnCreate) {
        btnCreate.textContent = btnCreateDisabledText;
    }
    const btnManage = root.getElementById('btn-manage');
    if (btnManage) {
        btnManage.textContent = btnManageText;
    }
    const btnShowRulesBox = root.getElementById('btn-show-rules-box');
    if (btnShowRulesBox) {
        btnShowRulesBox.textContent = btnShowRulesBoxText;
    }
    const btnQuit = root.getElementById('btn-quit');
    if (btnQuit) {
        btnQuit.textContent = btnQuitText;
    }
};
// Opens the element picker, or un-minimizes it if it is already open. The
// platform supplies its own `ElementPickerAPI` since the browser-side
// transport differs between Chromium and WebKit.
//
// `pickerTemplate` is passed in rather than imported because this file is
// bundled by webpack for Chromium and by rollup for iOS, and the two disagree
// on how a cross-directory module path may be spelled. Only the per-platform
// entry points can name the template in a way their own bundler accepts.
const showElementPicker = (platformApi, pickerTemplate) => {
    api = platformApi;
    template = pickerTemplate;
    const active = document.getElementById('brave-element-picker');
    if (active) {
        // Re-opening existing picker
        setMinimizeState(false);
        return;
    }
    const platform = api.getPlatform();
    isMobile = platform === 'android' || platform === 'ios';
    const root = attachElementPicker();
    api.getLocalizedTexts((btnCreateDisabledText, btnCreateEnabledText, btnManageText, btnShowRulesBoxText, btnHideRulesBoxText, btnQuitText) => {
        localizeTextData(root, btnCreateDisabledText, btnCreateEnabledText, btnManageText, btnShowRulesBoxText, btnHideRulesBoxText, btnQuitText);
        launchElementPicker(root);
    });
};

;// ./components/cosmetic_filters/resources/data/element_picker_api_chromium.ts
// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
class ChromiumElementPickerAPI {
    cosmeticFilterCreate(selector) {
        cf_worker.addSiteCosmeticFilter(selector);
    }
    cosmeticFilterManage() {
        cf_worker.manageCustomFilters();
    }
    getElementPickerThemeInfo(callback) {
        cf_worker
            .getElementPickerThemeInfo()
            .then((val) => {
            callback(val.isDarkModeEnabled, val.bgcolor);
        });
    }
    getLocalizedTexts(callback) {
        cf_worker
            .getLocalizedTexts()
            .then((val) => {
            callback(val.btnCreateDisabledText, val.btnCreateEnabledText, val.btnManageText, val.btnShowRulesBoxText, val.btnHideRulesBoxText, val.btnQuitText);
        });
    }
    getPlatform() {
        return cf_worker.getPlatform();
    }
}

;// ./components/cosmetic_filters/resources/data/element_picker_template.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Markup for the element picker's shadow root. Kept as a module so both the
// webpack and rollup builds can consume it without a raw-text loader.
const elementPickerTemplate = /* HTML */ `
<style>
  :host {
    background: transparent;
    color: black;
    font: 14px 'Inter Variable', 'Inter', sans-serif;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
    --text-color: #1b1b1f;
    --dynamic-bg-color: color-mix(in srgb, var(--dynamic-color-rgb), var(--text-color) 10%);
    --dynamic-secondary-btn-bg-color: color-mix(in srgb, var(--dynamic-color-rgb), var(--text-color) 3%);

    --primary: #3E37D4;
    --title-bar: #f0f0f4;
    --block-btn-bg-disabled: #46464a33;
    --block-btn-color-disabled: #21272a80;
    --button-text: white;
    --text-area-bg-color: white;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --text-color: #e3e3e8;

      --primary: #C1C4FF;
      --title-bar: #303034;
      --block-btn-bg-disabled: #ebeef033;
      --block-btn-color-disabled: #ebeef080;
      --button-text: #251491;
      --text-area-bg-color: var(--dynamic-bg-color);
    }
  }

  #rules-box {
    height: 8em;
    margin-bottom: 5px;
    background-color: #fff;
    border-radius: .1em;
    display: none;
  }

  .desktop.minimized>#rules-box {
    display: none !important;
  }

  #rules-box>textarea {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    resize: none;
    border: none;
    padding: 5px;
    overflow: auto;
    overflow-wrap: break-word;
    background-color: var(--text-area-bg-color);
    color: var(--text-color);
  }

  #main-section {
    background-color: var(--theme-background-color);
    border-radius: 16px;
    color-scheme: light only;
    bottom: 4px;
    left: unset;
    right: 4px;
    width: min(360px, calc(100vw - 32px));
    box-sizing: border-box;
    padding-top: 56px;
    padding-right: 16px;
    padding-left: 16px;
    position: fixed;
    opacity: 1;
    height: auto;
  }

  #main-section.minimized.desktop {
    width: 56px;
    padding: 0px;
    height: 56px;
    min-width: auto;
    border-radius: 12px;
    background-color: var(--primary);
  }

  #main-section.minimized:not(.desktop) {
    width: 30px;
    padding: 0px;
    height: 30px;
    margin-inline: auto;
    margin-bottom: 24px;
    margin-right: 24px;
    border-radius: 28px;
    background-color: var(--dynamic-color-rgb);
  }

  #main-section.minimized .card-header {
    display: none;
  }

  #main-section.minimized .minimized-icon {
    display: block;
    height: 18px;
    width: 18px;
    cursor: pointer;
    margin: 6px;
  }

  #main-section.minimized .minimized-icon path {
    fill: var(--primary);
  }

  #main-section.minimized.desktop .minimized-icon {
    height: 25px;
    width: 25px;
    margin: 15px;
  }

  #main-section.minimized.desktop .minimized-icon path {
    fill: var(--dynamic-color-rgb);
  }

  #main-section.minimized.desktop #slider-container,
  #main-section.minimized #buttons {
    display: none;
  }

  @media (orientation: portrait) {
    #main-section:not(.desktop) {
      bottom: 0;
      right: 0;
      left: 0;
      border-radius: 28px 28px 0 0;
      padding-top: 41px;
      border: none;
      width: 100%;
    }
  }

  @media (orientation: landscape) {
    #main-section:not(.desktop) {
      padding-top: 36px;
    }
  }


  .card-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px 16px 0 0;
  }

  .desktop .card-header {
    height: 48px;
    justify-content: right;
    background-color: var(--dynamic-bg-color);
    color: var(--text-color);
  }

  .collapse-button {
    width: 30px;
    height: 30px;
    background-color: var(--dynamic-color-rgb);
    border-radius: 15px;
    margin-bottom: 28px;
    border: 1px solid var(--primary);
  }

  .desktop .collapse-button {
      display: none;
  }

  #title {
    display: none;
  }

  .desktop #title {
    display: block;
    flex-grow: 1;
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
  }

  .desktop #btn-quit,
  .minimize-dlg-btn,
  .close-dlg-btn {
    display: none;
  }

  .desktop .minimize-dlg-btn,
  .desktop .close-dlg-btn {
    display: block;
  }

  .title-control-btn svg {
    width: 25px;
    height: 25px;
    margin-right: 20px;
    cursor: pointer;
    position: unset;
  }

  .minimized-icon {
    display: none;
  }

  #main-section input {
    width: calc(100% - 4px);
  }

  #buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .buttons-line {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-bottom: 16px;
  }

  .button {
    min-height: 36px;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    flex-grow: 1;
    border-width: 0px;
    margin: 3px;
  }

  .block-button {
    background-color: var(--primary);
    color: var(--button-text);
  }

  .block-button.disabled {
    background: var(--block-btn-bg-disabled);
    color: var(--block-btn-color-disabled);
  }

  .secondary-button {
    background-color: var(--dynamic-secondary-btn-bg-color);
    cursor: pointer;
    padding: 4px 6px;
    flex-grow: 1;
    border-width: 0px;
    color: var(--primary);
  }

  .secondary-button-bordered {
    border-width: 1px;
    border-color: #4036d3;
  }

  svg {
    cursor: crosshair;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }

  .collapse-button svg {
    position: static;
  }
  .collapse-button svg path{
    fill: var(--primary);
  }

  #darken {
    fill: rgba(0, 0, 0, 0.5);
  }

  #slider-container {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 4px;
    padding-right: 6px;
  }

  .target {
    stroke: #3d39c8;
    stroke-width: 2px;
    fill: rgba(121, 116, 224, 0.25);
  }

  input[type="range"] {
    appearance: none;
    width: 100%;
    height: 10px;
    background: transparent;
    margin: 10px 0;
    cursor: pointer;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    transition: background-image 0.2s ease-in-out;
    background-image:
        linear-gradient(to right,
            transparent calc(100%/3 - 1px), var(--theme-background-color) calc(100%/3 - 1px), var(--theme-background-color) calc(100%/3 + 1px), transparent calc(100%/3 + 1px),
            transparent calc(200%/3 - 1px), var(--theme-background-color) calc(200%/3 - 1px), var(--theme-background-color) calc(200%/3 + 1px), transparent calc(200%/3 + 1px)
        ),
        linear-gradient(to right, var(--primary) 0%, var(--primary) var(--value, 0%), transparent var(--value, 0%), transparent 100%);
    background-size: 100% 100%, 100% 100%;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-color: var(--dynamic-bg-color);
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid var(--primary);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: var(--primary);
    margin-top: -7px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }
</style>
<svg xmlns="http://www.w3.org/2000/svg" id="picker-ui">
  <defs>
    <mask id="highlight-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white">
      </rect>
    </mask>
  </defs>
  <rect id="darken" x="0" y="0" width="100%" height="100vh" mask="url(#highlight-mask)">
  </rect>
</svg>
<section id="main-section">
  <div id="card-header" class="card-header">
    <div id="title">Block Element</div>
    <div class="collapse-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
        <path fill="currentColor" fill-rule="evenodd" d="M18.4714 20.7634C18.2111 21.0237 17.7889 21.0237 17.5286 20.7634L12.9453 16.1801C12.6849 15.9197 12.6849 15.4976 12.9453 15.2373C13.2056 14.9769 13.6277 14.9769 13.8881 15.2373L18 19.3492L22.1119 15.2373C22.3723 14.9769 22.7944 14.9769 23.0547 15.2373C23.3151 15.4976 23.3151 15.9197 23.0547 16.1801L18.4714 20.7634Z">
      </svg>
    </div>
    <div id="minimize-dlg-btn" class="title-control-btn minimize-dlg-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd"
          d="M10.566 11.357a.8.8 0 0 0 .8-.8V5.12a.8.8 0 0 0-1.6 0v3.515l-5.4-5.4a.8.8 0 0 0-1.132 1.13l5.392 5.392H5.18a.8.8 0 0 0 0 1.6zm2.868 1.286a.8.8 0 0 0-.8.8v5.437a.8.8 0 1 0 1.6 0v-3.515l5.4 5.4a.8.8 0 0 0 1.132-1.13l-5.392-5.392h3.446a.8.8 0 0 0 0-1.6z"
          clip-rule="evenodd">
        </path>
      </svg>
    </div>
    <div id="close-btn" class="title-control-btn close-dlg-btn">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M5.287 5.287a.85.85 0 0 0 0 1.202L10.797 12l-5.51 5.511a.85.85 0 0 0 1.202 1.202L12 13.203l5.51 5.51a.85.85 0 0 0 1.202-1.203L13.202 12l5.51-5.51a.85.85 0 0 0-1.202-1.202L12 10.798 6.489 5.287a.85.85 0 0 0-1.202 0">
        </path>
      </svg>
    </div>
  </div>
  <div id="rules-box">
    <textarea></textarea>
  </div>
  <div>
    <div id="slider-container">
      <input id="custom-slider" class="slider" type="range" min="1" max="4" value="4">
    </div>
    <div id="buttons">
      <div class="buttons-line">
        <button id="btn-create" class="button block-button disabled">Select element you want to
          block</button>
      </div>
      <div class="buttons-line">
        <button id="btn-quit"
          class="button secondary-button disabled secondary-button-bordered">Cancel</button>
        <button id="btn-manage" class="button secondary-button disabled">Manage filters</button>
        <button id="btn-show-rules-box" class="button secondary-button disabled">Show rules</button>
      </div>
    </div>
  </div>
  <div id="desktop-min-icon-container">
    <svg xmlns="http://www.w3.org/2000/svg" class="minimized-icon" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" fill-rule="evenodd"
        d="M4.8 4a.8.8 0 0 0-.8.8v5.437a.8.8 0 0 0 1.6 0V6.722l4.4 4.4a.8.8 0 1 0 1.132-1.13L6.74 5.6h3.446a.8.8 0 0 0 0-1.6zm14.4 16a.8.8 0 0 0 .8-.8v-5.437a.8.8 0 0 0-1.6 0v3.515l-4.4-4.4a.8.8 0 1 0-1.132 1.13L17.26 18.4h-3.446a.8.8 0 0 0 0 1.6z"
        clip-rule="evenodd">
      </path>
    </svg>
  </div>
</section>
`;

;// ./components/cosmetic_filters/resources/data/element_picker_chromium.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.



showElementPicker(new ChromiumElementPickerAPI(), elementPickerTemplate);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbUIsRUFDdkIsR0FBRyxDQUFDLFdBQVcsQ0FDaEI7UUFDSCxDQUFDLENBQ0Y7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sU0FBUyxDQUFDLFdBQVcsRUFBRTtJQUNoQyxDQUFDO0NBQ0Y7OztBQzlERCw2REFBNkQ7QUFDN0Qsc0VBQXNFO0FBQ3RFLDRFQUE0RTtBQUM1RSxzREFBc0Q7QUFFdEQsNEVBQTRFO0FBQzVFLHNFQUFzRTtBQUMvRCxNQUFNLHFCQUFxQixHQUFXLFVBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcVp2RDs7O0FDNVpELDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDtBQUVGO0FBQ29CO0FBQ1A7QUFFakUsaUJBQWlCLENBQUMsSUFBSSx3QkFBd0IsRUFBRSxFQUFFLHFCQUFxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvY29zbWV0aWNfZmlsdGVycy9yZXNvdXJjZXMvZGF0YS9lbGVtZW50X3BpY2tlci50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb3NtZXRpY19maWx0ZXJzL3Jlc291cmNlcy9kYXRhL2VsZW1lbnRfcGlja2VyX2FwaV9jaHJvbWl1bS50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb3NtZXRpY19maWx0ZXJzL3Jlc291cmNlcy9kYXRhL2VsZW1lbnRfcGlja2VyX3RlbXBsYXRlLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2Nvc21ldGljX2ZpbHRlcnMvcmVzb3VyY2VzL2RhdGEvZWxlbWVudF9waWNrZXJfY2hyb21pdW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB0eXBlIHsgRWxlbWVudFBpY2tlckFQSSB9IGZyb20gJy4vZWxlbWVudF9waWNrZXJfYXBpJ1xuXG5jb25zdCBOU1NWRyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcblxubGV0IHBpY2tlckRpdjogSFRNTERpdkVsZW1lbnQgfCBudWxsXG5sZXQgc2hhZG93Um9vdDogU2hhZG93Um9vdCB8IG51bGxcbmxldCBpc01vYmlsZTogYm9vbGVhbiB8IG51bGxcbmxldCBidG5DcmVhdGVFbmFibGVkVGV4dDogc3RyaW5nXG5sZXQgYnRuQ3JlYXRlRGlzYWJsZWRUZXh0OiBzdHJpbmdcbmxldCBidG5TaG93UnVsZXNCb3hUZXh0OiBzdHJpbmdcbmxldCBidG5IaWRlUnVsZXNCb3hUZXh0OiBzdHJpbmdcblxuLy8gQm90aCBzZXQgYnkgYHNob3dFbGVtZW50UGlja2VyKClgIGJlZm9yZSBhbnkgb2YgdGhlIHBpY2tlciBVSSBpcyBjcmVhdGVkLlxubGV0IGFwaTogRWxlbWVudFBpY2tlckFQSVxubGV0IHRlbXBsYXRlOiBzdHJpbmdcblxuLy8gV2hlbiB0aGUgcGlja2VyIGlzIGFjdGl2YXRlZCwgaXQgZWF0cyBhbGwgcG9pbnRlciBldmVudHMgYW5kIHRha2VzIHVwIHRoZVxuLy8gZW50aXJlIHNjcmVlbi4gQWxsIGNhbGxzIHRvIGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoLi4pIHdpbGwgcmV0dXJuIHRoZVxuLy8gZnJhbWUuIFdlIGRpc2FibGUgcG9pbnRlciBldmVudHMgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgcXVlcnkgdG8gZ2V0XG4vLyBhcm91bmQgdGhpcy5cbmNvbnN0IGVsZW1lbnRGcm9tRnJhbWVDb29yZHMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmICghcGlja2VyRGl2KSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBwaWNrZXJEaXYuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnLCAnaW1wb3J0YW50JylcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSlcbiAgcGlja2VyRGl2LnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsICdhdXRvJywgJ2ltcG9ydGFudCcpXG4gIHJldHVybiBlbGVtXG59XG5cbmVudW0gU3BlY2lmaWNpdHlGbGFncyB7XG4gIElkID0gMSA8PCAwLFxuICBIaWVyYXJjaHkgPSAxIDw8IDEsXG4gIEF0dHJpYnV0ZXMgPSAxIDw8IDIsXG4gIENsYXNzID0gMSA8PCAzLFxuICBOdGhPZlR5cGUgPSAxIDw8IDQsXG59XG5cbmNvbnN0IG1vc3RTcGVjaWZpY01hc2sgPSAwYjExMTExXG5cbmVudW0gU2VsZWN0b3Ige1xuICBJZCxcbiAgQ2xhc3MsXG4gIEF0dHJpYnV0ZXMsXG4gIE50aE9mVHlwZSxcbn1cblxuaW50ZXJmYWNlIFJ1bGUge1xuICB0eXBlOiBTZWxlY3RvclxuICB2YWx1ZTogYW55XG59XG5cbmNsYXNzIEVsZW1lbnRTZWxlY3RvckJ1aWxkZXIge1xuICBwdWJsaWMgaGFzSWQ6IGJvb2xlYW5cbiAgcHJpdmF0ZSByZWFkb25seSBlbGVtOiBFbGVtZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgcnVsZXM6IFJ1bGVbXVxuICBwcml2YXRlIHRhZzogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudCkge1xuICAgIHRoaXMucnVsZXMgPSBbXVxuICAgIHRoaXMudGFnID0gJydcbiAgICB0aGlzLmVsZW0gPSBlbGVtXG4gICAgdGhpcy5oYXNJZCA9IGZhbHNlXG4gIH1cblxuICBhZGRSdWxlKHJ1bGU6IFJ1bGUpOiB2b2lkIHtcbiAgICBpZiAocnVsZS50eXBlIDwgU2VsZWN0b3IuSWQgfHwgcnVsZS50eXBlID4gU2VsZWN0b3IuTnRoT2ZUeXBlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgVW5leHBlY3RlZCBzZWxlY3RvcjogJHtydWxlLnR5cGV9YClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShydWxlLnZhbHVlKSAmJiBydWxlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChydWxlLnR5cGUgPT09IFNlbGVjdG9yLklkKSB7XG4gICAgICB0aGlzLmhhc0lkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSlcbiAgfVxuXG4gIGFkZFRhZyh0YWc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudGFnID0gdGFnXG4gIH1cblxuICBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMubGVuZ3RoXG4gIH1cblxuICB0b1N0cmluZyhtYXNrOiBudW1iZXIgPSBtb3N0U3BlY2lmaWNNYXNrKTogc3RyaW5nIHtcbiAgICBsZXQgc2VsZWN0b3IgPSB0aGlzLnRhZyArICcnXG4gICAgZm9yIChjb25zdCBydWxlIG9mIHRoaXMucnVsZXMpIHtcbiAgICAgIGlmICghKG1hc2sgJiBTcGVjaWZpY2l0eUZsYWdzLklkKSAmJiBydWxlLnR5cGUgPT09IFNlbGVjdG9yLklkKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoIShtYXNrICYgU3BlY2lmaWNpdHlGbGFncy5DbGFzcykgJiYgcnVsZS50eXBlID09PSBTZWxlY3Rvci5DbGFzcykge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAhKG1hc2sgJiBTcGVjaWZpY2l0eUZsYWdzLkF0dHJpYnV0ZXMpXG4gICAgICAgICYmIHJ1bGUudHlwZSA9PT0gU2VsZWN0b3IuQXR0cmlidXRlc1xuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICEobWFzayAmIFNwZWNpZmljaXR5RmxhZ3MuTnRoT2ZUeXBlKVxuICAgICAgICAmJiBydWxlLnR5cGUgPT09IFNlbGVjdG9yLk50aE9mVHlwZVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzSWRcbiAgICAgICAgJiYgbWFzayAmIFNwZWNpZmljaXR5RmxhZ3MuSWRcbiAgICAgICAgJiYgcnVsZS50eXBlID09PSBTZWxlY3Rvci5DbGFzc1xuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAocnVsZS50eXBlKSB7XG4gICAgICAgIGNhc2UgU2VsZWN0b3IuSWQ6IHtcbiAgICAgICAgICBzZWxlY3RvciArPSAnIycgKyBydWxlLnZhbHVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNlbGVjdG9yLkNsYXNzOiB7XG4gICAgICAgICAgc2VsZWN0b3IgKz0gJy4nICsgcnVsZS52YWx1ZS5qb2luKCcuJylcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgU2VsZWN0b3IuQXR0cmlidXRlczoge1xuICAgICAgICAgIGZvciAoY29uc3QgYXR0cmlidXRlIG9mIHJ1bGUudmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUF0dHIgPSB0aGlzLmVsZW0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5hdHRyKVxuICAgICAgICAgICAgbGV0IG9wID0gJyo9J1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5hdHRyID09PSBzb3VyY2VBdHRyKSB7XG4gICAgICAgICAgICAgIG9wID0gJz0nXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZS5hdHRyLnN0YXJ0c1dpdGgoc291cmNlQXR0cikpIHtcbiAgICAgICAgICAgICAgb3AgPSAnXj0nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFc2NhcGUgYXR0cmlidXRlIGFuZCBpdHMgdmFsdWVzIGZvciBDU1Mgc2VsZWN0b3JcbiAgICAgICAgICAgIHNlbGVjdG9yICs9XG4gICAgICAgICAgICAgIGBbJHtDU1MuZXNjYXBlKGF0dHJpYnV0ZS5hdHRyKX0ke29wfWBcbiAgICAgICAgICAgICAgKyBgXCIke0NTUy5lc2NhcGUoYXR0cmlidXRlLnZhbHVlKX1cIl1gXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTZWxlY3Rvci5OdGhPZlR5cGU6IHtcbiAgICAgICAgICAvLyBOT1RFOiB0aGlzIHNlbGVjdG9yIGlzIG5vdCB2YWxpZCB3aXRob3V0IGNhbGxpbmcgYWRkVGFnKC4uKVxuICAgICAgICAgIHNlbGVjdG9yICs9IGA6bnRoLW9mLXR5cGUoJHtydWxlLnZhbHVlfSlgXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgLyogVW5yZWFjaGFibGUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3JcbiAgfVxufVxuXG4vLyBXZSBzZWFyY2ggZm9yIGEgQ1NTIHNlbGVjdG9yIGZvciB0aGUgdGFyZ2V0IGVsZW1lbnQuIFdlIHdhbnQgdGhlIG1vc3Rcbi8vIHNwZWNpZmljIGlkZW50aWZpZXJzLlxuY29uc3QgY3NzU2VsZWN0b3JGcm9tRWxlbWVudCA9IChlbGVtOiBFbGVtZW50KTogRWxlbWVudFNlbGVjdG9yQnVpbGRlciA9PiB7XG4gIGNvbnN0IGJ1aWxkZXIgPSBuZXcgRWxlbWVudFNlbGVjdG9yQnVpbGRlcihlbGVtKVxuXG4gIC8vIElEXG4gIGlmIChcbiAgICBlbGVtLmlkLmxlbmd0aCA+IDBcbiAgICAvLyBFbnN1cmUgdGhlIGVzY2FwZWQgSUQgaXMgdW5pcXVlIGluIHRoZSBkb2N1bWVudFxuICAgIC8vIHRvIGF2b2lkIGFtYmlndW91cyBzZWxlY3RvcnNcbiAgICAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtDU1MuZXNjYXBlKGVsZW0uaWQpfWApLmxlbmd0aCA9PT0gMVxuICApIHtcbiAgICBidWlsZGVyLmFkZFJ1bGUoe1xuICAgICAgdHlwZTogU2VsZWN0b3IuSWQsXG4gICAgICB2YWx1ZTogQ1NTLmVzY2FwZShlbGVtLmlkKSxcbiAgICB9KVxuICB9XG5cbiAgLy8gQ2xhc3MgbmFtZXNcbiAgaWYgKGVsZW0uY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBidWlsZGVyLmFkZFJ1bGUoe1xuICAgICAgdHlwZTogU2VsZWN0b3IuQ2xhc3MsXG4gICAgICB2YWx1ZTogQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkubWFwKChjOiBzdHJpbmcpID0+IENTUy5lc2NhcGUoYykpLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCB0YWcgPSBDU1MuZXNjYXBlKGVsZW0ubG9jYWxOYW1lKVxuXG4gIC8vIEF0dHJpYnV0ZXMuIE9ubHkgdHJ5IHRoZXNlIGlmIHdlIGhhdmUgbm8gbWF0Y2hlcy5cbiAgaWYgKGJ1aWxkZXIuc2l6ZSgpID09PSAwKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IFtdXG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgJ2EnOiB7XG4gICAgICAgIC8vIEdldCBVUkwsIHJlbW92aW5nIHF1ZXJ5IHBhcmFtZXRlcnMgYW5kIGhhc2hcbiAgICAgICAgY29uc3QgdXJsID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKT8udHJpbSgpLnNwbGl0KC9bPyNdLylbMF1cbiAgICAgICAgaWYgKHVybCAhPT0gdW5kZWZpbmVkICYmIHVybC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgIGF0dHI6ICdocmVmJyxcbiAgICAgICAgICAgIHZhbHVlOiB1cmwsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnaWZyYW1lJzoge1xuICAgICAgICBjb25zdCB1cmwgPSBlbGVtLmdldEF0dHJpYnV0ZSgnc3JjJyk/LnRyaW0oKVxuICAgICAgICBpZiAodXJsICE9PSB1bmRlZmluZWQgJiYgdXJsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goe1xuICAgICAgICAgICAgYXR0cjogJ3NyYycsXG4gICAgICAgICAgICB2YWx1ZTogdXJsLnNsaWNlKDAsIDI1NiksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnaW1nJzoge1xuICAgICAgICBsZXQgZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdzcmMnKT8udHJpbSgpXG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgICBpZiAoZGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdCgnLCcpWzFdPy5zbGljZSgwLCAyNTYpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zdCBhbHR0ZXh0ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2FsdCcpPy50cmltKClcbiAgICAgICAgICBpZiAoYWx0dGV4dCAhPT0gdW5kZWZpbmVkICYmIGFsdHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgYXR0cjogJ2FsdCcsXG4gICAgICAgICAgICAgIHZhbHVlOiBhbHR0ZXh0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgIGF0dHI6ICdzcmMnLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICBidWlsZGVyLmFkZFJ1bGUoe1xuICAgICAgICB0eXBlOiBTZWxlY3Rvci5BdHRyaWJ1dGVzLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcXVlcnlTZWxlY3Rvck5vRXhjZXB0ID0gKFxuICAgIG5vZGU6IEVsZW1lbnQgfCBudWxsLFxuICAgIHNlbGVjdG9yOiBzdHJpbmcsXG4gICk6IEVsZW1lbnRbXSA9PiB7XG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHIgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHIpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogRGVsaWJlcmF0ZWx5IGxlZnQgZW1wdHkgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdXG4gIH1cblxuICBpZiAoXG4gICAgYnVpbGRlci5zaXplKCkgPT09IDBcbiAgICB8fCBxdWVyeVNlbGVjdG9yTm9FeGNlcHQoZWxlbS5wYXJlbnRFbGVtZW50LCBidWlsZGVyLnRvU3RyaW5nKCkpLmxlbmd0aCA+IDFcbiAgKSB7XG4gICAgYnVpbGRlci5hZGRUYWcodGFnKVxuICAgIGlmIChcbiAgICAgIHF1ZXJ5U2VsZWN0b3JOb0V4Y2VwdChlbGVtLnBhcmVudEVsZW1lbnQsIGJ1aWxkZXIudG9TdHJpbmcoKSkubGVuZ3RoID4gMVxuICAgICkge1xuICAgICAgbGV0IGluZGV4ID0gMVxuICAgICAgbGV0IHNpYmxpbmc6IEVsZW1lbnQgfCBudWxsID0gZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICB3aGlsZSAoc2libGluZyAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoc2libGluZy5sb2NhbE5hbWUgPT09IHRhZykge1xuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgfVxuICAgICAgICBzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICB9XG4gICAgICBidWlsZGVyLmFkZFJ1bGUoe1xuICAgICAgICB0eXBlOiBTZWxlY3Rvci5OdGhPZlR5cGUsXG4gICAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJldHVybiBidWlsZGVyXG59XG5cbmNvbnN0IGVsZW1lbnRQaWNrZXJPbktleWRvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBxdWl0RWxlbWVudFBpY2tlcigpXG4gIH1cbn1cblxuY29uc3QgZWxlbWVudFBpY2tlclZpZXdwb3J0Q2hhbmdlZCA9ICgpID0+IHtcbiAgcmVjYWxjdWxhdGVBbmRTZW5kVGFyZ2V0cyhudWxsKVxufVxuXG5jb25zdCBxdWl0RWxlbWVudFBpY2tlciA9ICgpID0+IHtcbiAgaWYgKHBpY2tlckRpdiAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChwaWNrZXJEaXYpXG4gIH1cblxuICAvLyBUZWFyIGRvd24gZWxlbWVudCBwaWNrZXIgbGlzdGVuZXJzXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlbGVtZW50UGlja2VyT25LZXlkb3duLCB0cnVlKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlbGVtZW50UGlja2VyVmlld3BvcnRDaGFuZ2VkKVxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlbGVtZW50UGlja2VyVmlld3BvcnRDaGFuZ2VkKVxufVxuXG5jb25zdCBhdHRhY2hFbGVtZW50UGlja2VyID0gKCkgPT4ge1xuICAvLyBcInNyY1wiIGlzIGEgd2ViIGFjY2Vzc2libGUgcmVzb3VyY2Ugc2luY2UgdGhlIFVSSSBpcyBjaHJvbWUtZXh0ZW5zaW9uOi8vLlxuICAvLyBUaGlzIGVuc3VyZXMgYSBtYWxpY2lvdXMgcGFnZSBjYW5ub3QgbW9kaWZ5IHRoZSBpZnJhbWUgY29udGVudHMuXG4gIHBpY2tlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHBpY2tlckRpdi5pZCA9ICdicmF2ZS1lbGVtZW50LXBpY2tlcidcbiAgc2hhZG93Um9vdCA9IHBpY2tlckRpdi5hdHRhY2hTaGFkb3coeyBtb2RlOiAnY2xvc2VkJyB9KVxuXG4gIC8vIEl0J3MgYSB0cnVzdGVkIGNvbnRlbnQgc28gaXQncyBzYWZlIHRvIHVzZSBpbm5lckhUTUwuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnNhbml0aXplZC9wcm9wZXJ0eVxuICBzaGFkb3dSb290LmlubmVySFRNTCA9IHRlbXBsYXRlXG5cbiAgY29uc3QgcGlja2VyQ1NTU3R5bGU6IHN0cmluZyA9IFtcbiAgICAnYmFja2dyb3VuZDogdHJhbnNwYXJlbnQnLFxuICAgICdib3JkZXI6IDAnLFxuICAgICdib3JkZXItcmFkaXVzOiAwJyxcbiAgICAnYm94LXNoYWRvdzogbm9uZScsXG4gICAgJ2NvbG9yLXNjaGVtZTogbGlnaHQgZGFyaycsXG4gICAgJ2Rpc3BsYXk6IGJsb2NrJyxcbiAgICAnaGVpZ2h0OiAxMDBsdmgnLFxuICAgICdsZWZ0OiAwJyxcbiAgICAnbWFyZ2luOiAwJyxcbiAgICAnbWF4LWhlaWdodDogbm9uZScsXG4gICAgJ21heC13aWR0aDogbm9uZScsXG4gICAgJ29wYWNpdHk6IDEnLFxuICAgICdvdXRsaW5lOiAwJyxcbiAgICAncGFkZGluZzogMCcsXG4gICAgJ3BvaW50ZXItZXZlbnRzOiBhdXRvJyxcbiAgICAncG9zaXRpb246IGZpeGVkJyxcbiAgICAndG9wOiAwJyxcbiAgICAndmlzaWJpbGl0eTogdmlzaWJsZScsXG4gICAgJ3dpZHRoOiAxMDAlJyxcbiAgICAnei1pbmRleDogMjE0NzQ4MzY0NycsXG4gICAgJy0tZHluYW1pYy1jb2xvci1yZ2I6IHJnYigwLCAwLCAwKScsXG4gICAgJycsXG4gIF0uam9pbignICFpbXBvcnRhbnQ7JylcblxuICBwaWNrZXJEaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsIHBpY2tlckNTU1N0eWxlKVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocGlja2VyRGl2KVxuXG4gIC8vIFNldHVwIGxpc3RlbmVycyB0byBhc3Npc3QgZWxlbWVudCBwaWNrZXJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVsZW1lbnRQaWNrZXJPbktleWRvd24sIHRydWUpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlbGVtZW50UGlja2VyVmlld3BvcnRDaGFuZ2VkKVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZWxlbWVudFBpY2tlclZpZXdwb3J0Q2hhbmdlZClcblxuICByZXR1cm4gc2hhZG93Um9vdFxufVxuXG5pbnRlcmZhY2UgVGFyZ2V0UmVjdCB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgd2lkdGg6IG51bWJlclxuICBoZWlnaHQ6IG51bWJlclxufVxuXG5jbGFzcyBUYXJnZXQge1xuICBlbGVtZW50OiBFbGVtZW50XG4gIGNvb3JkOiBUYXJnZXRSZWN0XG5cbiAgY29uc3RydWN0b3IoZWxlbTogRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1cbiAgICB0aGlzLmNvb3JkID0gdGFyZ2V0UmVjdEZyb21FbGVtZW50KHRoaXMuZWxlbWVudClcbiAgfVxuXG4gIGZvcmNlUmVjYWxjQ29vcmRzKCkge1xuICAgIHRoaXMuY29vcmQgPSB0YXJnZXRSZWN0RnJvbUVsZW1lbnQodGhpcy5lbGVtZW50KVxuICB9XG59XG5cbmNsYXNzIFRhcmdldHNDb2xsZWN0aW9uIHtcbiAgdGFyZ2V0czogVGFyZ2V0W10gPSBbXVxuICB0b2dnbGVQaWNrZXI6ICgodmFsOiBib29sZWFuKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsXG4gIHJlc2V0KGVsZW1zOiBFbGVtZW50W10pIHtcbiAgICB0aGlzLnRhcmdldHMubGVuZ3RoID0gMFxuICAgIGVsZW1zLmZvckVhY2goKGVsZW06IEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQoZWxlbSkpXG4gICAgfSlcbiAgfVxuXG4gIGZvcmNlUmVjYWxjQ29vcmRzKCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0KSA9PiB0LmZvcmNlUmVjYWxjQ29vcmRzKCkpXG4gICAgLy8gZm9yIGNhc2Ugd2hlbiBlbGVtZW50IG5vIGxvbmdlciBpbiB0aGUgRE9NXG4gICAgdGhpcy50YXJnZXRzID0gdGhpcy50YXJnZXRzLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLmNvb3JkLmhlaWdodCAhPT0gMCAmJiBpdGVtLmNvb3JkLndpZHRoICE9PSAwLFxuICAgIClcbiAgICBpZiAodGhpcy50YXJnZXRzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnRvZ2dsZVBpY2tlcikge1xuICAgICAgdGhpcy50b2dnbGVQaWNrZXIoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRzLmxlbmd0aFxuICB9XG59XG5cbmNvbnN0IHRhcmdldFJlY3RGcm9tRWxlbWVudCA9IChlbGVtOiBFbGVtZW50KTogVGFyZ2V0UmVjdCA9PiB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCxcbiAgfVxufVxuXG5sZXQgbGFzdEhvdmVyZWRFbGVtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsXG5jb25zdCB0YXJnZXRlZEVsZW1zID0gbmV3IFRhcmdldHNDb2xsZWN0aW9uKClcblxuY29uc3QgcmVjYWxjdWxhdGVBbmRTZW5kVGFyZ2V0cyA9IChlbGVtczogRWxlbWVudFtdIHwgbnVsbCkgPT4ge1xuICBpZiAoZWxlbXMpIHtcbiAgICB0YXJnZXRlZEVsZW1zLnJlc2V0KGVsZW1zKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldGVkRWxlbXMuZm9yY2VSZWNhbGNDb29yZHMoKVxuICB9XG5cbiAgaGlnaGxpZ2h0RWxlbWVudHMoKVxufVxuXG5jb25zdCBoaWRlQnlDc3NTZWxlY3RvciA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHN0eWxlSWQgPSAnYnJhdmUtY29udGVudC1waWNrZXItc3R5bGUnXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpXG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBzdHlsZS5pZCA9IHN0eWxlSWRcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxuICB9XG4gIHN0eWxlLmlubmVyVGV4dCArPSBgJHtzZWxlY3Rvcn0ge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9YFxufVxuXG5pbnRlcmZhY2UgU2xpZGVyT3B0aW9ucyB7XG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWRcbn1cblxuaW50ZXJmYWNlIFNsaWRlckFQSSB7XG4gIGdldFZhbHVlOiAoKSA9PiBudW1iZXJcbiAgbWluOiBudW1iZXJcbiAgbWF4OiBudW1iZXJcbn1cblxuY29uc3Qgb25UYXJnZXRTZWxlY3RlZCA9IChzZWxlY3RlZDogRWxlbWVudCB8IG51bGwsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBpZiAobGFzdEhvdmVyZWRFbGVtID09PSBudWxsKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBsZXQgZWxlbTogRWxlbWVudCB8IG51bGwgPSBzZWxlY3RlZFxuICBjb25zdCBzZWxlY3RvckJ1aWxkZXJzID0gW11cbiAgY29uc3Qgc3BlY2lmaWNpdHlNYXNrcyA9IFtcbiAgICAwYjAxMTAxLCAvLyBObyBET00gaGllcmFyY2h5LCBubyBudGgtb2YtdHlwZVxuICAgIDBiMTExMDEsIC8vIE5vIERPTSBoaWVyYXJjaHlcbiAgICAwYjAxMDExLCAvLyBObyBudGgtb2YtdHlwZSwgbm8gYXR0cmlidXRlc1xuICAgIDBiMTAwMTEsIC8vIE5vIGF0dHJpYnV0ZXMsIG5vIGNsYXNzIG5hbWVzXG4gICAgMGIxMTExMSwgLy8gQWxsIHNlbGVjdG9yIHJ1bGVzIChkZWZhdWx0KVxuICBdXG4gIC8vIEZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCAoYWxsIHNlbGVjdG9yIHJ1bGVzKSBmb3IgYW4gb3V0LW9mLXJhbmdlIGluZGV4LlxuICBjb25zdCBtYXNrOiBudW1iZXIgPSBzcGVjaWZpY2l0eU1hc2tzW2luZGV4XSA/PyAwYjExMTExXG5cbiAgaWYgKG1hc2sgJiBTcGVjaWZpY2l0eUZsYWdzLkhpZXJhcmNoeSkge1xuICAgIHdoaWxlIChlbGVtICE9PSBudWxsICYmIGVsZW0gIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIHNlbGVjdG9yQnVpbGRlcnMucHVzaChjc3NTZWxlY3RvckZyb21FbGVtZW50KGVsZW0pKVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RvckJ1aWxkZXJzLnB1c2goY3NzU2VsZWN0b3JGcm9tRWxlbWVudChzZWxlY3RlZCEpKVxuICB9XG4gIC8vIFRPRE86IGluc2VydCB0aGUgYm9keSBpZiB1c2luZyBudGgtdHlwZS1vZlxuXG4gIGxldCBpID0gMFxuICBmb3IgKDsgaSA8IHNlbGVjdG9yQnVpbGRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBiID0gc2VsZWN0b3JCdWlsZGVyc1tpXVxuICAgIGlmICghYikge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChcbiAgICAgICAgKG1hc2sgJiBTcGVjaWZpY2l0eUZsYWdzLklkICYmIGIuaGFzSWQpXG4gICAgICAgIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYi50b1N0cmluZyhtYXNrKSkubGVuZ3RoID09PSAxXG4gICAgICApIHtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICB9XG4gIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0b3JCdWlsZGVyc1xuICAgIC5zbGljZSgwLCBpICsgMSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYikgPT4gYi50b1N0cmluZyhtYXNrKSlcbiAgICAuam9pbignID4gJylcbiAgcmV0dXJuIHNlbGVjdG9yXG59XG5cbmNvbnN0IGVsZW1lbnRQaWNrZXJIb3ZlckNvb3Jkc0NoYW5nZWQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgY29uc3QgZWxlbSA9IGVsZW1lbnRGcm9tRnJhbWVDb29yZHMoeCwgeSlcbiAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBlbGVtICE9PSBsYXN0SG92ZXJlZEVsZW0pIHtcbiAgICByZWNhbGN1bGF0ZUFuZFNlbmRUYXJnZXRzKFtlbGVtXSlcbiAgICBsYXN0SG92ZXJlZEVsZW0gPSBlbGVtXG4gIH1cbn1cblxuY29uc3QgZ2V0RWxlbWVudEJ5U2VsZWN0b3IgPSAoc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICBsZXQgZWxlbWVudHM6IEVsZW1lbnRbXSB8IG51bGxcbiAgY29uc3Qgbm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICBlbGVtZW50cyA9IG5vZGVMaXN0Lmxlbmd0aCA+IDAgPyBBcnJheS5mcm9tKG5vZGVMaXN0KSA6IG51bGxcbiAgcmV0dXJuIGVsZW1lbnRzXG59XG5cbmNvbnN0IGVsZW1lbnRQaWNrZXJVc2VyU2VsZWN0ZWRUYXJnZXQgPSAoc3BlY2lmaWNpdHk6IG51bWJlcikgPT4ge1xuICBpZiAobGFzdEhvdmVyZWRFbGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG9uVGFyZ2V0U2VsZWN0ZWQobGFzdEhvdmVyZWRFbGVtLCBzcGVjaWZpY2l0eSlcbiAgICBpZiAoc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZWNhbGN1bGF0ZUFuZFNlbmRUYXJnZXRzKGdldEVsZW1lbnRCeVNlbGVjdG9yKHNlbGVjdG9yKSlcbiAgICAgIH0gY2F0Y2gge31cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVmFsaWQ6IHNlbGVjdG9yICE9PSAnJyxcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3Rvci50cmltKCksXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogZmFsc2UsXG4gICAgc2VsZWN0b3I6ICcnLFxuICB9XG59XG5cbmNvbnN0IGVsZW1lbnRQaWNrZXJVc2VyTW9kaWZpZWRSdWxlID0gKHNlbGVjdG9yOiBzdHJpbmcpID0+IHtcbiAgaWYgKHNlbGVjdG9yLmxlbmd0aCA+IDApIHtcbiAgICB0cnkge1xuICAgICAgcmVjYWxjdWxhdGVBbmRTZW5kVGFyZ2V0cyhBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSlcbiAgICB9IGNhdGNoIHt9XG4gIH1cbn1cblxuY29uc3Qgc2V0U2hvd1J1bGVzSGlkZGVuQnRuU3RhdGUgPSAoXG4gIHNob3dSdWxlc0J1dHRvbjogSFRNTEVsZW1lbnQgfCBudWxsLFxuICBzaG93OiBib29sZWFuLFxuKSA9PiB7XG4gIGlmICghc2hvd1J1bGVzQnV0dG9uKSByZXR1cm5cbiAgc2hvd1J1bGVzQnV0dG9uLnRleHRDb250ZW50ID0gc2hvdyA/IGJ0bkhpZGVSdWxlc0JveFRleHQgOiBidG5TaG93UnVsZXNCb3hUZXh0XG59XG5cbmNvbnN0IHNldE1pbmltaXplU3RhdGUgPSAobWluaW1pemVkOiBib29sZWFuKSA9PiB7XG4gIGlmICghc2hhZG93Um9vdCkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG1haW5TZWN0aW9uID0gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zZWN0aW9uJylcbiAgaWYgKG1haW5TZWN0aW9uKSB7XG4gICAgbWFpblNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnbWluaW1pemVkJywgbWluaW1pemVkKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRTbGlkZXIoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgb3B0aW9uczogU2xpZGVyT3B0aW9ucyA9IHt9LFxuKTogU2xpZGVyQVBJIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFlbGVtZW50KSByZXR1cm5cblxuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBlbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgaWYgKCFpbnB1dEVsZW1lbnQpIHJldHVyblxuXG4gIGNvbnN0IG1pbiA9IHBhcnNlSW50KGlucHV0RWxlbWVudC5taW4gPz8gJzEnLCAxMClcbiAgY29uc3QgbWF4ID0gcGFyc2VJbnQoaW5wdXRFbGVtZW50Lm1heCA/PyAnNCcsIDEwKVxuICBjb25zdCBpbml0aWFsVmFsdWUgPSA0XG5cbiAgaW5wdXRFbGVtZW50LnRhYkluZGV4ID0gMFxuXG4gIGxldCBjdXJyZW50VmFsdWUgPSBpbml0aWFsVmFsdWVcblxuICBjb25zdCB1cGRhdGVTbGlkZXIgPSAoZmlyZUV2ZW50OiBib29sZWFuKTogbnVtYmVyID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoaW5wdXRFbGVtZW50LnZhbHVlKVxuICAgIGNvbnN0IGN1cnJNaW4gPSBwYXJzZUZsb2F0KGlucHV0RWxlbWVudC5taW4pXG4gICAgY29uc3QgY3Vyck1heCA9IHBhcnNlRmxvYXQoaW5wdXRFbGVtZW50Lm1heClcblxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoKHZhbHVlIC0gY3Vyck1pbikgLyAoY3Vyck1heCAtIGN1cnJNaW4pKSAqIDEwMFxuXG4gICAgaW5wdXRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlJywgYCR7cGVyY2VudGFnZX0lYClcblxuICAgIGN1cnJlbnRWYWx1ZSA9IHZhbHVlXG5cbiAgICBpZiAoZmlyZUV2ZW50ICYmIG9wdGlvbnMub25DaGFuZ2UpIHtcbiAgICAgIG9wdGlvbnMub25DaGFuZ2UoY3VycmVudFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHVwZGF0ZVNsaWRlcih0cnVlKSlcblxuICAvLyBJbml0aWFsIHVwZGF0ZVxuICB1cGRhdGVTbGlkZXIoZmFsc2UpXG4gIC8vIFJldHVybiBBUEkgZm9yIGV4dGVybmFsIGNvbnRyb2xcbiAgcmV0dXJuIHtcbiAgICBnZXRWYWx1ZTogKCkgPT4gY3VycmVudFZhbHVlLFxuICAgIG1pbixcbiAgICBtYXgsXG4gIH1cbn1cblxuY29uc3QgbGF1bmNoRWxlbWVudFBpY2tlciA9IChyb290OiBTaGFkb3dSb290KSA9PiB7XG4gIGxldCBoYXNTZWxlY3RlZFRhcmdldCA9IGZhbHNlXG5cbiAgY29uc3QgYnRuU2hvd1J1bGVzQm94ID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXNob3ctcnVsZXMtYm94JylcbiAgaWYgKGlzTW9iaWxlICYmIGJ0blNob3dSdWxlc0JveCkge1xuICAgIGJ0blNob3dSdWxlc0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBjb25zdCBtaW5pbWl6ZUJ1dHRvbiA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtaGVhZGVyJykhXG4gICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZXRNaW5pbWl6ZVN0YXRlKHRydWUpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWJ0bicpIVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcXVpdEVsZW1lbnRQaWNrZXIoKVxuICAgIH0pXG4gICAgY29uc3QgbWluaW1pemVCdXR0b24gPSByb290LmdldEVsZW1lbnRCeUlkKCdtaW5pbWl6ZS1kbGctYnRuJykhXG4gICAgbWluaW1pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZXRNaW5pbWl6ZVN0YXRlKHRydWUpXG4gICAgfSlcbiAgfVxuICBjb25zdCBtYXhpbWl6ZUJ1dHRvbiA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2t0b3AtbWluLWljb24tY29udGFpbmVyJykhXG4gIG1heGltaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNldE1pbmltaXplU3RhdGUoZmFsc2UpXG4gIH0pXG5cbiAgY29uc3Qgc2xpZGVyRWxlbWVudCA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1zbGlkZXInKVxuICBjb25zdCBzbGlkZXIgPSBpbml0U2xpZGVyKHNsaWRlckVsZW1lbnQsIHtcbiAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgZGlzcGF0Y2hTZWxlY3QoKVxuICAgIH0sXG4gIH0pXG5cbiAgLy8gU2hhZG93Um9vdCBoYXMgbm8gdHlwZWQgZXZlbnQgbWFwLCBzbyB0aGUgaGFuZGxlciBuZWVkcyBhIGNhc3QgaGVyZS5cbiAgcm9vdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICdrZXlkb3duJyxcbiAgICBlbGVtZW50UGlja2VyT25LZXlkb3duIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgdHJ1ZSxcbiAgKVxuXG4gIGNvbnN0IHN2ZyA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ3BpY2tlci11aScpIVxuICBpZiAoXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwb2ludGVyOiBmaW5lKScpLm1hdGNoZXNcbiAgICAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKGhvdmVyOiBob3ZlciknKS5tYXRjaGVzXG4gICkge1xuICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFoYXNTZWxlY3RlZFRhcmdldCkge1xuICAgICAgICAgIGVsZW1lbnRQaWNrZXJIb3ZlckNvb3Jkc0NoYW5nZWQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICAgICAgfVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKVxuICB9XG5cbiAgY29uc3QgcnVsZXNUZXh0QXJlYTogSFRNTElucHV0RWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3RvcihcbiAgICAnI3J1bGVzLWJveCA+IHRleHRhcmVhJyxcbiAgKSFcbiAgbGV0IHRleHRJbnB1dFRpbWVyOiBhbnkgPSBudWxsXG4gIHJ1bGVzVGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRleHRJbnB1dFRpbWVyKVxuICAgIHRleHRJbnB1dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHJ1bGVzVGV4dEFyZWEudmFsdWUudHJpbSgpXG4gICAgICBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCkge1xuICAgICAgICBlbGVtZW50UGlja2VyVXNlck1vZGlmaWVkUnVsZShzZWxlY3RvcilcbiAgICAgIH1cbiAgICB9LCA3MDApXG4gIH0pXG4gIHJ1bGVzVGV4dEFyZWEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgaGFzU2VsZWN0ZWRUYXJnZXQgPSB0cnVlXG4gICAgdG9nZ2xlUG9wdXAodHJ1ZSlcbiAgfSlcblxuICBjb25zdCBzZWN0aW9uID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zZWN0aW9uJykhXG4gIGNvbnN0IGVuYWJsZUJ1dHRvbnMgPSAoaXNEaXNhYmxlZDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJylcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpZiAoIWlzTW9iaWxlKSB7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNrdG9wJylcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZVBvcHVwID0gKHNob3c6IGJvb2xlYW4pID0+IHtcbiAgICBlbmFibGVCdXR0b25zKCFzaG93KVxuICAgIGlmIChzaG93KSB7XG4gICAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBidG5DcmVhdGVFbmFibGVkVGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBidG5DcmVhdGVEaXNhYmxlZFRleHRcbiAgICB9XG4gICAgaWYgKCFpc01vYmlsZSkge1xuICAgICAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsIHNob3cgPyAnMScgOiAnMC4yJylcbiAgICB9XG4gIH1cbiAgdGFyZ2V0ZWRFbGVtcy50b2dnbGVQaWNrZXIgPSB0b2dnbGVQb3B1cFxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGNvbnN0IHNjID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLWNvbnRhaW5lcicpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICBzYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbiAgY29uc3Qgc2V0VGl0bGVCYXJDb2xvciA9IChiZ2NvbG9yOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gcm9vdC5ob3N0IGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKHNlY3Rpb24pIHtcbiAgICAgIGNvbnN0IHIgPSAoYmdjb2xvciA+PiAxNikgJiAweGZmXG4gICAgICBjb25zdCBnID0gKGJnY29sb3IgPj4gOCkgJiAweGZmXG4gICAgICBjb25zdCBiID0gYmdjb2xvciAmIDB4ZmZcbiAgICAgIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tZHluYW1pYy1jb2xvci1yZ2InLCBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYClcbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0cmlldmVUaGVtZSA9ICgpID0+IHtcbiAgICBhcGkuZ2V0RWxlbWVudFBpY2tlclRoZW1lSW5mbyhcbiAgICAgIChfaXNEYXJrTW9kZUVuYWJsZWQ6IGJvb2xlYW4sIGJnY29sb3I6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBiZ2NvbG9yTWFza091dCA9IGJnY29sb3IgJiAweGZmZmZmZlxuICAgICAgICBjb25zdCBjb2xvckhleCA9IGAjJHtiZ2NvbG9yTWFza091dC50b1N0cmluZygxNikucGFkU3RhcnQoNiwgJzAnKX1gXG4gICAgICAgIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtYmFja2dyb3VuZC1jb2xvcicsIGNvbG9ySGV4KVxuICAgICAgICBzZXRUaXRsZUJhckNvbG9yKGJnY29sb3IpXG4gICAgICAgIGRpc3BhdGNoU2VsZWN0KClcbiAgICAgIH0sXG4gICAgKVxuICB9XG4gIGNvbnN0IHByZWZlcnNEYXJrU2NoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKVxuICBjb25zdCBoYW5kbGVDb2xvclNjaGVtZUNoYW5nZSA9ICgpID0+IHtcbiAgICByZXRyaWV2ZVRoZW1lKClcbiAgfVxuICBwcmVmZXJzRGFya1NjaGVtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDb2xvclNjaGVtZUNoYW5nZSlcbiAgcmV0cmlldmVUaGVtZSgpXG5cbiAgY29uc3QgZGlzcGF0Y2hTZWxlY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc1ZhbGlkLCBzZWxlY3RvciB9ID0gZWxlbWVudFBpY2tlclVzZXJTZWxlY3RlZFRhcmdldChcbiAgICAgIHNsaWRlcj8uZ2V0VmFsdWUoKSA/PyA0LFxuICAgIClcblxuICAgIGhhc1NlbGVjdGVkVGFyZ2V0ID0gaXNWYWxpZFxuICAgIHRvZ2dsZVBvcHVwKGlzVmFsaWQpXG4gICAgcnVsZXNUZXh0QXJlYS52YWx1ZSA9IHNlbGVjdG9yXG4gIH1cblxuICBjb25zdCBvbmVDbGlja0V2ZW50SGFuZGxlciA9IChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICBsZXQgZWxlbTogRWxlbWVudCB8IG51bGwgPSBudWxsXG5cbiAgICBzZXRNaW5pbWl6ZVN0YXRlKGZhbHNlKVxuXG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xuICAgICAgZWxlbSA9IGVsZW1lbnRGcm9tRnJhbWVDb29yZHMoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdXG4gICAgICBpZiAodG91Y2gpIHtcbiAgICAgICAgZWxlbSA9IGVsZW1lbnRGcm9tRnJhbWVDb29yZHModG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSkge1xuICAgICAgcmVjYWxjdWxhdGVBbmRTZW5kVGFyZ2V0cyhbZWxlbV0pXG4gICAgICBsYXN0SG92ZXJlZEVsZW0gPSBlbGVtIGFzIEhUTUxFbGVtZW50XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hTZWxlY3QoKVxuICB9XG5cbiAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25lQ2xpY2tFdmVudEhhbmRsZXIpXG5cbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLWNyZWF0ZScpIVxuICBjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Jsb2NrLWJ1dHRvbi1kaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBydWxlc1RleHRBcmVhLnZhbHVlLnRyaW0oKVxuICAgIGlmIChzZWxlY3Rvci5sZW5ndGggPiAwKSB7XG4gICAgICBhcGkuY29zbWV0aWNGaWx0ZXJDcmVhdGUoc2VsZWN0b3IpXG4gICAgICBoaWRlQnlDc3NTZWxlY3RvcihzZWxlY3RvcilcbiAgICAgIHF1aXRFbGVtZW50UGlja2VyKClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcXVpdEJ1dHRvbiA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1xdWl0JykhXG4gIHF1aXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcXVpdEVsZW1lbnRQaWNrZXIoKVxuICB9KVxuXG4gIGNvbnN0IG1hbmFnZUJ1dHRvbiA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1tYW5hZ2UnKSFcbiAgbWFuYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFwaS5jb3NtZXRpY0ZpbHRlck1hbmFnZSgpXG4gIH0pXG5cbiAgY29uc3QgdG9nZ2xlRGlzcGxheSA9IChcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICB0cmlnZ2VyOiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICkgPT4ge1xuICAgIGlmICghdGFyZ2V0IHx8ICF0cmlnZ2VyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0YXJnZXQuc3R5bGUuZGlzcGxheSAhPT0gJ2Jsb2NrJykge1xuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgc2V0U2hvd1J1bGVzSGlkZGVuQnRuU3RhdGUodHJpZ2dlciwgdHJ1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIHNldFNob3dSdWxlc0hpZGRlbkJ0blN0YXRlKHRyaWdnZXIsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc3QgcnVsZXNCb3ggPSByb290LmdldEVsZW1lbnRCeUlkKCdydWxlcy1ib3gnKSFcbiAgY29uc3Qgc2hvd1J1bGVzQnV0dG9uID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXNob3ctcnVsZXMtYm94JykhXG4gIHRvZ2dsZURpc3BsYXkocnVsZXNCb3gsIHNob3dSdWxlc0J1dHRvbilcbn1cblxuY29uc3QgaGlnaGxpZ2h0RWxlbWVudHMgPSAoKSA9PiB7XG4gIGlmICghc2hhZG93Um9vdCkgcmV0dXJuXG4gIGNvbnN0IHN2ZyA9IHNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoJ3BpY2tlci11aScpIVxuICBjb25zdCBzdmdNYXNrID0gc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnaGlnaGxpZ2h0LW1hc2snKSFcblxuICBzdmcucXVlcnlTZWxlY3RvckFsbCgnLm1hc2snKS5mb3JFYWNoKChlbCkgPT4gZWwucmVtb3ZlKCkpXG5cbiAgY29uc3Qgc3ZnTWFza0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIGNvbnN0IHN2Z0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cbiAgY29uc3QgY3JlYXRlTWFza0VsZW1lbnQgPSAoKTogU1ZHUmVjdEVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlNTVkcsICdyZWN0JylcbiAgICBtYXNrLmNsYXNzTGlzdC5hZGQoJ21hc2snKVxuICAgIG1hc2sucnguYmFzZVZhbC52YWx1ZSA9IDEwXG4gICAgbWFzay5zZXRBdHRyaWJ1dGUoJ3B4JywgJzEwcHgnKVxuICAgIG1hc2suc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgIHJldHVybiBtYXNrXG4gIH1cblxuICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0YXJnZXRlZEVsZW1zLnRhcmdldHMpIHtcbiAgICAvLyBBZGQgdGhlIG1hc2sgdG8gdGhlIFNWRyBkZWZpbml0aW9uIHNvIHRoZSBkYXJrIGJhY2tncm91bmQgaXMgcmVtb3ZlZFxuICAgIGNvbnN0IG1hc2sgPSBjcmVhdGVNYXNrRWxlbWVudCgpXG4gICAgbWFzay54LmJhc2VWYWwudmFsdWUgPSB0YXJnZXQuY29vcmQueFxuICAgIG1hc2sueS5iYXNlVmFsLnZhbHVlID0gdGFyZ2V0LmNvb3JkLnlcbiAgICBtYXNrLndpZHRoLmJhc2VWYWwudmFsdWUgPSB0YXJnZXQuY29vcmQud2lkdGhcbiAgICBtYXNrLmhlaWdodC5iYXNlVmFsLnZhbHVlID0gdGFyZ2V0LmNvb3JkLmhlaWdodFxuICAgIG1hc2sucnguYmFzZVZhbC52YWx1ZSA9IDEwXG4gICAgc3ZnTWFza0ZyYWdtZW50LmFwcGVuZENoaWxkKG1hc2spXG5cbiAgICAvLyBVc2UgdGhlIHNhbWUgZWxlbWVudCwgYnV0IGFkZCB0aGUgdGFyZ2V0IGNsYXNzIHdoaWNoIHR1cm5zIHRoZVxuICAgIC8vIHRhcmdldCByZWN0YW5nbGUgb3JhbmdlXG4gICAgY29uc3QgdGFyZ2V0aW5nQXJlYSA9IG1hc2suY2xvbmVOb2RlKGZhbHNlKSBhcyBTVkdSZWN0RWxlbWVudFxuICAgIHRhcmdldGluZ0FyZWEuY2xhc3NMaXN0LmFkZCgndGFyZ2V0JylcblxuICAgIHN2Z0ZyYWdtZW50LmFwcGVuZENoaWxkKHRhcmdldGluZ0FyZWEpXG4gIH1cbiAgc3ZnTWFzay5hcHBlbmRDaGlsZChzdmdNYXNrRnJhZ21lbnQpXG4gIHN2Zy5hcHBlbmRDaGlsZChzdmdGcmFnbWVudClcbn1cblxuY29uc3QgbG9jYWxpemVUZXh0RGF0YSA9IChcbiAgcm9vdDogU2hhZG93Um9vdCxcbiAgYnRuQ3JEaXNUZXh0OiBzdHJpbmcsXG4gIGJ0bkNyRW5ibFRleHQ6IHN0cmluZyxcbiAgYnRuTWFuYWdlVGV4dDogc3RyaW5nLFxuICBidG5TaG93UnVsZXNUZXh0OiBzdHJpbmcsXG4gIGJ0bkhpZGVSdWxlc1RleHQ6IHN0cmluZyxcbiAgYnRuUXVpdFRleHQ6IHN0cmluZyxcbikgPT4ge1xuICBidG5DcmVhdGVEaXNhYmxlZFRleHQgPSBidG5DckRpc1RleHRcbiAgYnRuQ3JlYXRlRW5hYmxlZFRleHQgPSBidG5DckVuYmxUZXh0XG4gIGJ0blNob3dSdWxlc0JveFRleHQgPSBidG5TaG93UnVsZXNUZXh0XG4gIGJ0bkhpZGVSdWxlc0JveFRleHQgPSBidG5IaWRlUnVsZXNUZXh0XG4gIGNvbnN0IGJ0bkNyZWF0ZSA9IHJvb3QuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1jcmVhdGUnKVxuICBpZiAoYnRuQ3JlYXRlKSB7XG4gICAgYnRuQ3JlYXRlLnRleHRDb250ZW50ID0gYnRuQ3JlYXRlRGlzYWJsZWRUZXh0XG4gIH1cbiAgY29uc3QgYnRuTWFuYWdlID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLW1hbmFnZScpXG4gIGlmIChidG5NYW5hZ2UpIHtcbiAgICBidG5NYW5hZ2UudGV4dENvbnRlbnQgPSBidG5NYW5hZ2VUZXh0XG4gIH1cbiAgY29uc3QgYnRuU2hvd1J1bGVzQm94ID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXNob3ctcnVsZXMtYm94JylcbiAgaWYgKGJ0blNob3dSdWxlc0JveCkge1xuICAgIGJ0blNob3dSdWxlc0JveC50ZXh0Q29udGVudCA9IGJ0blNob3dSdWxlc0JveFRleHRcbiAgfVxuICBjb25zdCBidG5RdWl0ID0gcm9vdC5nZXRFbGVtZW50QnlJZCgnYnRuLXF1aXQnKVxuICBpZiAoYnRuUXVpdCkge1xuICAgIGJ0blF1aXQudGV4dENvbnRlbnQgPSBidG5RdWl0VGV4dFxuICB9XG59XG5cbi8vIE9wZW5zIHRoZSBlbGVtZW50IHBpY2tlciwgb3IgdW4tbWluaW1pemVzIGl0IGlmIGl0IGlzIGFscmVhZHkgb3Blbi4gVGhlXG4vLyBwbGF0Zm9ybSBzdXBwbGllcyBpdHMgb3duIGBFbGVtZW50UGlja2VyQVBJYCBzaW5jZSB0aGUgYnJvd3Nlci1zaWRlXG4vLyB0cmFuc3BvcnQgZGlmZmVycyBiZXR3ZWVuIENocm9taXVtIGFuZCBXZWJLaXQuXG4vL1xuLy8gYHBpY2tlclRlbXBsYXRlYCBpcyBwYXNzZWQgaW4gcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYmVjYXVzZSB0aGlzIGZpbGUgaXNcbi8vIGJ1bmRsZWQgYnkgd2VicGFjayBmb3IgQ2hyb21pdW0gYW5kIGJ5IHJvbGx1cCBmb3IgaU9TLCBhbmQgdGhlIHR3byBkaXNhZ3JlZVxuLy8gb24gaG93IGEgY3Jvc3MtZGlyZWN0b3J5IG1vZHVsZSBwYXRoIG1heSBiZSBzcGVsbGVkLiBPbmx5IHRoZSBwZXItcGxhdGZvcm1cbi8vIGVudHJ5IHBvaW50cyBjYW4gbmFtZSB0aGUgdGVtcGxhdGUgaW4gYSB3YXkgdGhlaXIgb3duIGJ1bmRsZXIgYWNjZXB0cy5cbmV4cG9ydCBjb25zdCBzaG93RWxlbWVudFBpY2tlciA9IChcbiAgcGxhdGZvcm1BcGk6IEVsZW1lbnRQaWNrZXJBUEksXG4gIHBpY2tlclRlbXBsYXRlOiBzdHJpbmcsXG4pID0+IHtcbiAgYXBpID0gcGxhdGZvcm1BcGlcbiAgdGVtcGxhdGUgPSBwaWNrZXJUZW1wbGF0ZVxuXG4gIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmF2ZS1lbGVtZW50LXBpY2tlcicpXG4gIGlmIChhY3RpdmUpIHtcbiAgICAvLyBSZS1vcGVuaW5nIGV4aXN0aW5nIHBpY2tlclxuICAgIHNldE1pbmltaXplU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBwbGF0Zm9ybSA9IGFwaS5nZXRQbGF0Zm9ybSgpXG4gIGlzTW9iaWxlID0gcGxhdGZvcm0gPT09ICdhbmRyb2lkJyB8fCBwbGF0Zm9ybSA9PT0gJ2lvcydcbiAgY29uc3Qgcm9vdCA9IGF0dGFjaEVsZW1lbnRQaWNrZXIoKVxuICBhcGkuZ2V0TG9jYWxpemVkVGV4dHMoXG4gICAgKFxuICAgICAgYnRuQ3JlYXRlRGlzYWJsZWRUZXh0OiBzdHJpbmcsXG4gICAgICBidG5DcmVhdGVFbmFibGVkVGV4dDogc3RyaW5nLFxuICAgICAgYnRuTWFuYWdlVGV4dDogc3RyaW5nLFxuICAgICAgYnRuU2hvd1J1bGVzQm94VGV4dDogc3RyaW5nLFxuICAgICAgYnRuSGlkZVJ1bGVzQm94VGV4dDogc3RyaW5nLFxuICAgICAgYnRuUXVpdFRleHQ6IHN0cmluZyxcbiAgICApID0+IHtcbiAgICAgIGxvY2FsaXplVGV4dERhdGEoXG4gICAgICAgIHJvb3QsXG4gICAgICAgIGJ0bkNyZWF0ZURpc2FibGVkVGV4dCxcbiAgICAgICAgYnRuQ3JlYXRlRW5hYmxlZFRleHQsXG4gICAgICAgIGJ0bk1hbmFnZVRleHQsXG4gICAgICAgIGJ0blNob3dSdWxlc0JveFRleHQsXG4gICAgICAgIGJ0bkhpZGVSdWxlc0JveFRleHQsXG4gICAgICAgIGJ0blF1aXRUZXh0LFxuICAgICAgKVxuICAgICAgbGF1bmNoRWxlbWVudFBpY2tlcihyb290KVxuICAgIH0sXG4gIClcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMSBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBFbGVtZW50UGlja2VyQVBJIH0gZnJvbSAnLi9lbGVtZW50X3BpY2tlcl9hcGknXG5cbmV4cG9ydCBjbGFzcyBDaHJvbWl1bUVsZW1lbnRQaWNrZXJBUEkgaW1wbGVtZW50cyBFbGVtZW50UGlja2VyQVBJIHtcbiAgY29zbWV0aWNGaWx0ZXJDcmVhdGUoc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGNmX3dvcmtlci5hZGRTaXRlQ29zbWV0aWNGaWx0ZXIoc2VsZWN0b3IpXG4gIH1cblxuICBjb3NtZXRpY0ZpbHRlck1hbmFnZSgpIHtcbiAgICBjZl93b3JrZXIubWFuYWdlQ3VzdG9tRmlsdGVycygpXG4gIH1cblxuICBnZXRFbGVtZW50UGlja2VyVGhlbWVJbmZvKFxuICAgIGNhbGxiYWNrOiAoaXNEYXJrTW9kZUVuYWJsZWQ6IGJvb2xlYW4sIGJnY29sb3I6IG51bWJlcikgPT4gdm9pZCxcbiAgKSB7XG4gICAgY2Zfd29ya2VyXG4gICAgICAuZ2V0RWxlbWVudFBpY2tlclRoZW1lSW5mbygpXG4gICAgICAudGhlbigodmFsOiB7IGlzRGFya01vZGVFbmFibGVkOiBib29sZWFuOyBiZ2NvbG9yOiBudW1iZXIgfSkgPT4ge1xuICAgICAgICBjYWxsYmFjayh2YWwuaXNEYXJrTW9kZUVuYWJsZWQsIHZhbC5iZ2NvbG9yKVxuICAgICAgfSlcbiAgfVxuXG4gIGdldExvY2FsaXplZFRleHRzKFxuICAgIGNhbGxiYWNrOiAoXG4gICAgICBidG5DcmVhdGVEaXNhYmxlZFRleHQ6IHN0cmluZyxcbiAgICAgIGJ0bkNyZWF0ZUVuYWJsZWRUZXh0OiBzdHJpbmcsXG4gICAgICBidG5NYW5hZ2VUZXh0OiBzdHJpbmcsXG4gICAgICBidG5TaG93UnVsZXNCb3hUZXh0OiBzdHJpbmcsXG4gICAgICBidG5IaWRlUnVsZXNCb3hUZXh0OiBzdHJpbmcsXG4gICAgICBidG5RdWl0VGV4dDogc3RyaW5nLFxuICAgICkgPT4gdm9pZCxcbiAgKSB7XG4gICAgY2Zfd29ya2VyXG4gICAgICAuZ2V0TG9jYWxpemVkVGV4dHMoKVxuICAgICAgLnRoZW4oXG4gICAgICAgICh2YWw6IHtcbiAgICAgICAgICBidG5DcmVhdGVEaXNhYmxlZFRleHQ6IHN0cmluZ1xuICAgICAgICAgIGJ0bkNyZWF0ZUVuYWJsZWRUZXh0OiBzdHJpbmdcbiAgICAgICAgICBidG5NYW5hZ2VUZXh0OiBzdHJpbmdcbiAgICAgICAgICBidG5TaG93UnVsZXNCb3hUZXh0OiBzdHJpbmdcbiAgICAgICAgICBidG5IaWRlUnVsZXNCb3hUZXh0OiBzdHJpbmdcbiAgICAgICAgICBidG5RdWl0VGV4dDogc3RyaW5nXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgIHZhbC5idG5DcmVhdGVEaXNhYmxlZFRleHQsXG4gICAgICAgICAgICB2YWwuYnRuQ3JlYXRlRW5hYmxlZFRleHQsXG4gICAgICAgICAgICB2YWwuYnRuTWFuYWdlVGV4dCxcbiAgICAgICAgICAgIHZhbC5idG5TaG93UnVsZXNCb3hUZXh0LFxuICAgICAgICAgICAgdmFsLmJ0bkhpZGVSdWxlc0JveFRleHQsXG4gICAgICAgICAgICB2YWwuYnRuUXVpdFRleHQsXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgKVxuICB9XG5cbiAgZ2V0UGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIGNmX3dvcmtlci5nZXRQbGF0Zm9ybSgpXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBNYXJrdXAgZm9yIHRoZSBlbGVtZW50IHBpY2tlcidzIHNoYWRvdyByb290LiBLZXB0IGFzIGEgbW9kdWxlIHNvIGJvdGggdGhlXG4vLyB3ZWJwYWNrIGFuZCByb2xsdXAgYnVpbGRzIGNhbiBjb25zdW1lIGl0IHdpdGhvdXQgYSByYXctdGV4dCBsb2FkZXIuXG5leHBvcnQgY29uc3QgZWxlbWVudFBpY2tlclRlbXBsYXRlOiBzdHJpbmcgPSAvKiBIVE1MICovIGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250OiAxNHB4ICdJbnRlciBWYXJpYWJsZScsICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC0tdGV4dC1jb2xvcjogIzFiMWIxZjtcbiAgICAtLWR5bmFtaWMtYmctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1keW5hbWljLWNvbG9yLXJnYiksIHZhcigtLXRleHQtY29sb3IpIDEwJSk7XG4gICAgLS1keW5hbWljLXNlY29uZGFyeS1idG4tYmctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1keW5hbWljLWNvbG9yLXJnYiksIHZhcigtLXRleHQtY29sb3IpIDMlKTtcblxuICAgIC0tcHJpbWFyeTogIzNFMzdENDtcbiAgICAtLXRpdGxlLWJhcjogI2YwZjBmNDtcbiAgICAtLWJsb2NrLWJ0bi1iZy1kaXNhYmxlZDogIzQ2NDY0YTMzO1xuICAgIC0tYmxvY2stYnRuLWNvbG9yLWRpc2FibGVkOiAjMjEyNzJhODA7XG4gICAgLS1idXR0b24tdGV4dDogd2hpdGU7XG4gICAgLS10ZXh0LWFyZWEtYmctY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAgIDpob3N0IHtcbiAgICAgIC0tdGV4dC1jb2xvcjogI2UzZTNlODtcblxuICAgICAgLS1wcmltYXJ5OiAjQzFDNEZGO1xuICAgICAgLS10aXRsZS1iYXI6ICMzMDMwMzQ7XG4gICAgICAtLWJsb2NrLWJ0bi1iZy1kaXNhYmxlZDogI2ViZWVmMDMzO1xuICAgICAgLS1ibG9jay1idG4tY29sb3ItZGlzYWJsZWQ6ICNlYmVlZjA4MDtcbiAgICAgIC0tYnV0dG9uLXRleHQ6ICMyNTE0OTE7XG4gICAgICAtLXRleHQtYXJlYS1iZy1jb2xvcjogdmFyKC0tZHluYW1pYy1iZy1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgI3J1bGVzLWJveCB7XG4gICAgaGVpZ2h0OiA4ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogLjFlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRlc2t0b3AubWluaW1pemVkPiNydWxlcy1ib3gge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gICNydWxlcy1ib3g+dGV4dGFyZWEge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1hcmVhLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIH1cblxuICAjbWFpbi1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgb25seTtcbiAgICBib3R0b206IDRweDtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICByaWdodDogNHB4O1xuICAgIHdpZHRoOiBtaW4oMzYwcHgsIGNhbGMoMTAwdncgLSAzMnB4KSk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAjbWFpbi1zZWN0aW9uLm1pbmltaXplZC5kZXNrdG9wIHtcbiAgICB3aWR0aDogNTZweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgI21haW4tc2VjdGlvbi5taW5pbWl6ZWQ6bm90KC5kZXNrdG9wKSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHluYW1pYy1jb2xvci1yZ2IpO1xuICB9XG5cbiAgI21haW4tc2VjdGlvbi5taW5pbWl6ZWQgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI21haW4tc2VjdGlvbi5taW5pbWl6ZWQgLm1pbmltaXplZC1pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogNnB4O1xuICB9XG5cbiAgI21haW4tc2VjdGlvbi5taW5pbWl6ZWQgLm1pbmltaXplZC1pY29uIHBhdGgge1xuICAgIGZpbGw6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgI21haW4tc2VjdGlvbi5taW5pbWl6ZWQuZGVza3RvcCAubWluaW1pemVkLWljb24ge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cblxuICAjbWFpbi1zZWN0aW9uLm1pbmltaXplZC5kZXNrdG9wIC5taW5pbWl6ZWQtaWNvbiBwYXRoIHtcbiAgICBmaWxsOiB2YXIoLS1keW5hbWljLWNvbG9yLXJnYik7XG4gIH1cblxuICAjbWFpbi1zZWN0aW9uLm1pbmltaXplZC5kZXNrdG9wICNzbGlkZXItY29udGFpbmVyLFxuICAjbWFpbi1zZWN0aW9uLm1pbmltaXplZCAjYnV0dG9ucyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgI21haW4tc2VjdGlvbjpub3QoLmRlc2t0b3ApIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHggMjhweCAwIDA7XG4gICAgICBwYWRkaW5nLXRvcDogNDFweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICNtYWluLXNlY3Rpb246bm90KC5kZXNrdG9wKSB7XG4gICAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICB9XG4gIH1cblxuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcbiAgfVxuXG4gIC5kZXNrdG9wIC5jYXJkLWhlYWRlciB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHluYW1pYy1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICB9XG5cbiAgLmNvbGxhcHNlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWR5bmFtaWMtY29sb3ItcmdiKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIH1cblxuICAuZGVza3RvcCAuY29sbGFwc2UtYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuZGVza3RvcCAjdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgfVxuXG4gIC5kZXNrdG9wICNidG4tcXVpdCxcbiAgLm1pbmltaXplLWRsZy1idG4sXG4gIC5jbG9zZS1kbGctYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRlc2t0b3AgLm1pbmltaXplLWRsZy1idG4sXG4gIC5kZXNrdG9wIC5jbG9zZS1kbGctYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50aXRsZS1jb250cm9sLWJ0biBzdmcge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgfVxuXG4gIC5taW5pbWl6ZWQtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNtYWluLXNlY3Rpb24gaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cHgpO1xuICB9XG5cbiAgI2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuYnV0dG9ucy1saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgbWluLWhlaWdodDogMzZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIG1hcmdpbjogM3B4O1xuICB9XG5cbiAgLmJsb2NrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0KTtcbiAgfVxuXG4gIC5ibG9jay1idXR0b24uZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsb2NrLWJ0bi1iZy1kaXNhYmxlZCk7XG4gICAgY29sb3I6IHZhcigtLWJsb2NrLWJ0bi1jb2xvci1kaXNhYmxlZCk7XG4gIH1cblxuICAuc2Vjb25kYXJ5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHluYW1pYy1zZWNvbmRhcnktYnRuLWJnLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNHB4IDZweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG5cbiAgLnNlY29uZGFyeS1idXR0b24tYm9yZGVyZWQge1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzQwMzZkMztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmNvbGxhcHNlLWJ1dHRvbiBzdmcge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLmNvbGxhcHNlLWJ1dHRvbiBzdmcgcGF0aHtcbiAgICBmaWxsOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuXG4gICNkYXJrZW4ge1xuICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuXG4gICNzbGlkZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIH1cblxuICAudGFyZ2V0IHtcbiAgICBzdHJva2U6ICMzZDM5Yzg7XG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgZmlsbDogcmdiYSgxMjEsIDExNiwgMjI0LCAwLjI1KTtcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJyYW5nZVwiXSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgY2FsYygxMDAlLzMgLSAxcHgpLCB2YXIoLS10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yKSBjYWxjKDEwMCUvMyAtIDFweCksIHZhcigtLXRoZW1lLWJhY2tncm91bmQtY29sb3IpIGNhbGMoMTAwJS8zICsgMXB4KSwgdHJhbnNwYXJlbnQgY2FsYygxMDAlLzMgKyAxcHgpLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgY2FsYygyMDAlLzMgLSAxcHgpLCB2YXIoLS10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yKSBjYWxjKDIwMCUvMyAtIDFweCksIHZhcigtLXRoZW1lLWJhY2tncm91bmQtY29sb3IpIGNhbGMoMjAwJS8zICsgMXB4KSwgdHJhbnNwYXJlbnQgY2FsYygyMDAlLzMgKyAxcHgpXG4gICAgICAgICksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tcHJpbWFyeSkgMCUsIHZhcigtLXByaW1hcnkpIHZhcigtLXZhbHVlLCAwJSksIHRyYW5zcGFyZW50IHZhcigtLXZhbHVlLCAwJSksIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlLCAxMDAlIDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWR5bmFtaWMtYmctY29sb3IpO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbjwvc3R5bGU+XG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cInBpY2tlci11aVwiPlxuICA8ZGVmcz5cbiAgICA8bWFzayBpZD1cImhpZ2hsaWdodC1tYXNrXCI+XG4gICAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgPC9yZWN0PlxuICAgIDwvbWFzaz5cbiAgPC9kZWZzPlxuICA8cmVjdCBpZD1cImRhcmtlblwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDB2aFwiIG1hc2s9XCJ1cmwoI2hpZ2hsaWdodC1tYXNrKVwiPlxuICA8L3JlY3Q+XG48L3N2Zz5cbjxzZWN0aW9uIGlkPVwibWFpbi1zZWN0aW9uXCI+XG4gIDxkaXYgaWQ9XCJjYXJkLWhlYWRlclwiIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICA8ZGl2IGlkPVwidGl0bGVcIj5CbG9jayBFbGVtZW50PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlLWJ1dHRvblwiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzNiAzNlwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xOC40NzE0IDIwLjc2MzRDMTguMjExMSAyMS4wMjM3IDE3Ljc4ODkgMjEuMDIzNyAxNy41Mjg2IDIwLjc2MzRMMTIuOTQ1MyAxNi4xODAxQzEyLjY4NDkgMTUuOTE5NyAxMi42ODQ5IDE1LjQ5NzYgMTIuOTQ1MyAxNS4yMzczQzEzLjIwNTYgMTQuOTc2OSAxMy42Mjc3IDE0Ljk3NjkgMTMuODg4MSAxNS4yMzczTDE4IDE5LjM0OTJMMjIuMTExOSAxNS4yMzczQzIyLjM3MjMgMTQuOTc2OSAyMi43OTQ0IDE0Ljk3NjkgMjMuMDU0NyAxNS4yMzczQzIzLjMxNTEgMTUuNDk3NiAyMy4zMTUxIDE1LjkxOTcgMjMuMDU0NyAxNi4xODAxTDE4LjQ3MTQgMjAuNzYzNFpcIj5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtaW5pbWl6ZS1kbGctYnRuXCIgY2xhc3M9XCJ0aXRsZS1jb250cm9sLWJ0biBtaW5pbWl6ZS1kbGctYnRuXCI+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGQ9XCJNMTAuNTY2IDExLjM1N2EuOC44IDAgMCAwIC44LS44VjUuMTJhLjguOCAwIDAgMC0xLjYgMHYzLjUxNWwtNS40LTUuNGEuOC44IDAgMCAwLTEuMTMyIDEuMTNsNS4zOTIgNS4zOTJINS4xOGEuOC44IDAgMCAwIDAgMS42em0yLjg2OCAxLjI4NmEuOC44IDAgMCAwLS44Ljh2NS40MzdhLjguOCAwIDEgMCAxLjYgMHYtMy41MTVsNS40IDUuNGEuOC44IDAgMCAwIDEuMTMyLTEuMTNsLTUuMzkyLTUuMzkyaDMuNDQ2YS44LjggMCAwIDAgMC0xLjZ6XCJcbiAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJjbG9zZS1idG5cIiBjbGFzcz1cInRpdGxlLWNvbnRyb2wtYnRuIGNsb3NlLWRsZy1idG5cIj5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBkPVwiTTUuMjg3IDUuMjg3YS44NS44NSAwIDAgMCAwIDEuMjAyTDEwLjc5NyAxMmwtNS41MSA1LjUxMWEuODUuODUgMCAwIDAgMS4yMDIgMS4yMDJMMTIgMTMuMjAzbDUuNTEgNS41MWEuODUuODUgMCAwIDAgMS4yMDItMS4yMDNMMTMuMjAyIDEybDUuNTEtNS41MWEuODUuODUgMCAwIDAtMS4yMDItMS4yMDJMMTIgMTAuNzk4IDYuNDg5IDUuMjg3YS44NS44NSAwIDAgMC0xLjIwMiAwXCI+XG4gICAgICAgIDwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInJ1bGVzLWJveFwiPlxuICAgIDx0ZXh0YXJlYT48L3RleHRhcmVhPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8ZGl2IGlkPVwic2xpZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGlucHV0IGlkPVwiY3VzdG9tLXNsaWRlclwiIGNsYXNzPVwic2xpZGVyXCIgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjRcIiB2YWx1ZT1cIjRcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwiYnV0dG9uc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtbGluZVwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNyZWF0ZVwiIGNsYXNzPVwiYnV0dG9uIGJsb2NrLWJ1dHRvbiBkaXNhYmxlZFwiPlNlbGVjdCBlbGVtZW50IHlvdSB3YW50IHRvXG4gICAgICAgICAgYmxvY2s8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtbGluZVwiPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXF1aXRcIlxuICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIHNlY29uZGFyeS1idXR0b24gZGlzYWJsZWQgc2Vjb25kYXJ5LWJ1dHRvbi1ib3JkZXJlZFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLW1hbmFnZVwiIGNsYXNzPVwiYnV0dG9uIHNlY29uZGFyeS1idXR0b24gZGlzYWJsZWRcIj5NYW5hZ2UgZmlsdGVyczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXNob3ctcnVsZXMtYm94XCIgY2xhc3M9XCJidXR0b24gc2Vjb25kYXJ5LWJ1dHRvbiBkaXNhYmxlZFwiPlNob3cgcnVsZXM8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cImRlc2t0b3AtbWluLWljb24tY29udGFpbmVyXCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJtaW5pbWl6ZWQtaWNvblwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTQuOCA0YS44LjggMCAwIDAtLjguOHY1LjQzN2EuOC44IDAgMCAwIDEuNiAwVjYuNzIybDQuNCA0LjRhLjguOCAwIDEgMCAxLjEzMi0xLjEzTDYuNzQgNS42aDMuNDQ2YS44LjggMCAwIDAgMC0xLjZ6bTE0LjQgMTZhLjguOCAwIDAgMCAuOC0uOHYtNS40MzdhLjguOCAwIDAgMC0xLjYgMHYzLjUxNWwtNC40LTQuNGEuOC44IDAgMSAwLTEuMTMyIDEuMTNMMTcuMjYgMTguNGgtMy40NDZhLjguOCAwIDAgMCAwIDEuNnpcIlxuICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICA8L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuYFxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IHNob3dFbGVtZW50UGlja2VyIH0gZnJvbSAnLi9lbGVtZW50X3BpY2tlcidcbmltcG9ydCB7IENocm9taXVtRWxlbWVudFBpY2tlckFQSSB9IGZyb20gJy4vZWxlbWVudF9waWNrZXJfYXBpX2Nocm9taXVtJ1xuaW1wb3J0IHsgZWxlbWVudFBpY2tlclRlbXBsYXRlIH0gZnJvbSAnLi9lbGVtZW50X3BpY2tlcl90ZW1wbGF0ZSdcblxuc2hvd0VsZW1lbnRQaWNrZXIobmV3IENocm9taXVtRWxlbWVudFBpY2tlckFQSSgpLCBlbGVtZW50UGlja2VyVGVtcGxhdGUpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=