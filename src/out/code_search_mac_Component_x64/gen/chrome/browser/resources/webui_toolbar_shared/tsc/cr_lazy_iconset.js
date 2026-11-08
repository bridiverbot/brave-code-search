// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { IconsetMap } from '//resources/cr_elements/cr_icon/iconset_map.js';
import { assert } from '//resources/js/assert.js';
const APPLIED_ICON_CLASS = 'cr-iconset-svg-icon_';
export class CrLazyIconset {
    name;
    size;
    parsedIcons_ = new Map();
    lazyIcons_ = new Map();
    constructor(name, size = 24) {
        this.name = name;
        this.size = size;
        IconsetMap.getInstance().set(this.name, this);
    }
    registerIcons(iconsMap) {
        for (const [id, callback] of Object.entries(iconsMap)) {
            assert(!this.lazyIcons_.has(id));
            this.lazyIcons_.set(id, callback);
        }
    }
    applyIcon(element, iconName) {
        this.removeIcon(element);
        const svg = this.cloneIcon_(iconName);
        if (svg) {
            svg.classList.add(APPLIED_ICON_CLASS);
            element.shadowRoot.insertBefore(svg, element.shadowRoot.childNodes[0]);
            return svg;
        }
        return null;
    }
    createIcon(iconName) {
        return this.cloneIcon_(iconName);
    }
    removeIcon(element) {
        const oldSvg = element.shadowRoot.querySelector(`.${APPLIED_ICON_CLASS}`);
        if (oldSvg) {
            oldSvg.remove();
        }
    }
    cloneIcon_(id) {
        let sourceSvg = null;
        if (this.parsedIcons_.has(id)) {
            sourceSvg = this.parsedIcons_.get(id);
        }
        else if (this.lazyIcons_.has(id)) {
            const callback = this.lazyIcons_.get(id);
            assert(callback, id);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = callback();
            const svgElement = tempDiv.firstElementChild;
            assert(svgElement, id);
            sourceSvg = svgElement.firstElementChild;
            this.parsedIcons_.set(id, sourceSvg);
            this.lazyIcons_.delete(id);
        }
        assert(sourceSvg, id);
        const svgClone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const content = sourceSvg.cloneNode(true);
        content.removeAttribute('id');
        const contentViewBox = content.getAttribute('viewBox');
        if (contentViewBox) {
            svgClone.setAttribute('viewBox', contentViewBox);
        }
        svgClone.style.display = 'block';
        svgClone.style.height = '100%';
        svgClone.style.width = '100%';
        svgClone.style.pointerEvents = 'none';
        svgClone.appendChild(content);
        return svgClone;
    }
}
