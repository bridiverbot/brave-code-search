// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './motion_overlay.js';
import { CrLitElement } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import { getCss } from './app.css.js';
import { getHtml } from './app.html.js';
import { sweepMaskReady } from './motion_overlay.js';
// If the worklet fails to load, the overlay still shows, just without the blur
// sweep.
const sweepMaskLoaded = sweepMaskReady.catch(e => console.error(e));
export class IndigoImageReplacementAppElement extends CrLitElement {
    static get is() {
        return 'indigo-image-replacement-app';
    }
    static get styles() {
        return getCss();
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            showOverlay_: { type: Boolean },
            overlayAnimationState_: { type: String },
            imageSrc_: { type: String },
            objectFit_: { type: String },
            showWatermark_: { type: Boolean },
            watermarkEnabledString: { type: String, attribute: 'show-watermark' },
        };
    }
    #showOverlay__accessor_storage = false;
    get showOverlay_() { return this.#showOverlay__accessor_storage; }
    set showOverlay_(value) { this.#showOverlay__accessor_storage = value; }
    #overlayAnimationState__accessor_storage = 'none';
    get overlayAnimationState_() { return this.#overlayAnimationState__accessor_storage; }
    set overlayAnimationState_(value) { this.#overlayAnimationState__accessor_storage = value; }
    #imageSrc__accessor_storage = '';
    get imageSrc_() { return this.#imageSrc__accessor_storage; }
    set imageSrc_(value) { this.#imageSrc__accessor_storage = value; }
    #objectFit__accessor_storage = 'contain';
    get objectFit_() { return this.#objectFit__accessor_storage; }
    set objectFit_(value) { this.#objectFit__accessor_storage = value; }
    #showWatermark__accessor_storage = false;
    get showWatermark_() { return this.#showWatermark__accessor_storage; }
    set showWatermark_(value) { this.#showWatermark__accessor_storage = value; }
    #watermarkEnabledString_accessor_storage = 'false';
    get watermarkEnabledString() { return this.#watermarkEnabledString_accessor_storage; }
    set watermarkEnabledString(value) { this.#watermarkEnabledString_accessor_storage = value; }
    invocationId_;
    isGenerating_ = false;
    entryAnimationResolve_ = null;
    connectedCallback() {
        super.connectedCallback();
        this.initialize_();
    }
    onMotionComplete_() {
        this.showOverlay_ = false;
        this.overlayAnimationState_ = 'none';
    }
    onEntryComplete_() {
        this.entryAnimationResolve_?.();
        this.entryAnimationResolve_ = null;
    }
    async initialize_() {
        await this.loadOriginalImage_();
        requestAnimationFrame(async () => {
            this.invocationId_ = await chrome.indigoPrivate.readyToRender();
            this.loadReplacementImage_();
            chrome.indigoPrivate.onRegenerateStarted.addListener(() => {
                this.loadReplacementImage_();
            }, { instanceId: this.invocationId_ });
        });
    }
    async loadOriginalImage_() {
        const originalImage = await chrome.indigoPrivate.getOriginalImage();
        if (originalImage.objectFit) {
            this.objectFit_ = originalImage.objectFit === 'object-fit-none' ?
                'none' :
                originalImage.objectFit;
        }
        if (originalImage.value instanceof ArrayBuffer) {
            const blob = new Blob([originalImage.value], { type: 'image/webp' });
            this.imageSrc_ = URL.createObjectURL(blob);
            await this.updateComplete;
            await this.$.image.decode();
        }
    }
    async loadReplacementImage_() {
        if (this.isGenerating_) {
            return;
        }
        this.isGenerating_ = true;
        const entryAnimationPromise = new Promise(resolve => {
            this.entryAnimationResolve_ = resolve;
        });
        // The entry's sweep mask needs the paint worklet. Without it, the blur
        // would show unmasked and the sweep couldn't run on the compositor.
        await sweepMaskLoaded;
        this.startAnimation_();
        try {
            const [imageData] = await Promise.all([
                chrome.indigoPrivate.getReplacementImage(),
                entryAnimationPromise,
            ]);
            if (typeof imageData.value === 'string') {
                const img = new Image();
                img.src = imageData.value;
                await img.decode();
                URL.revokeObjectURL(this.imageSrc_);
                this.imageSrc_ = imageData.value;
                this.objectFit_ = this.computeObjectFitForReplacement_(img);
                this.showWatermark_ = this.watermarkEnabledString === 'true';
                await this.updateComplete;
            }
        }
        finally {
            this.entryAnimationResolve_ = null;
            this.isGenerating_ = false;
            this.overlayAnimationState_ = 'exit';
        }
    }
    startAnimation_() {
        this.showOverlay_ = true;
        this.overlayAnimationState_ = 'entry';
    }
    computeObjectFitForReplacement_(image) {
        const { naturalWidth, naturalHeight } = image;
        if (naturalWidth !== naturalHeight) {
            return 'contain';
        }
        const { clientWidth, clientHeight } = document.documentElement;
        if (clientWidth === 0 || clientHeight === 0) {
            return 'contain';
        }
        const aspectRatio = clientWidth / clientHeight;
        return 0.5 <= aspectRatio && aspectRatio <= 1.0 ? 'cover' : 'contain';
    }
}
customElements.define(IndigoImageReplacementAppElement.is, IndigoImageReplacementAppElement);
