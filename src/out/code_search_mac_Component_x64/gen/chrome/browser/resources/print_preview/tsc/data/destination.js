// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { stripDiacritics } from 'chrome://resources/js/search_highlight_utils.js';
/**
 * Enumeration of the origin types for destinations.
 */
export var DestinationOrigin;
(function (DestinationOrigin) {
    DestinationOrigin["LOCAL"] = "local";
    // Note: Cookies, device and privet are deprecated, but used to filter any
    // legacy entries in the recent destinations, since we can't guarantee all
    // such recent printers have been overridden.
    DestinationOrigin["COOKIES"] = "cookies";
    DestinationOrigin["PRIVET"] = "privet";
    DestinationOrigin["EXTENSION"] = "extension";
    DestinationOrigin["CROS"] = "chrome_os";
})(DestinationOrigin || (DestinationOrigin = {}));
/**
 * Printer types for capabilities and printer list requests.
 * Must match PrinterType in printing/mojom/print.mojom
 */
export var PrinterType;
(function (PrinterType) {
    PrinterType[PrinterType["EXTENSION_PRINTER"] = 0] = "EXTENSION_PRINTER";
    PrinterType[PrinterType["PDF_PRINTER"] = 1] = "PDF_PRINTER";
    PrinterType[PrinterType["LOCAL_PRINTER"] = 2] = "LOCAL_PRINTER";
})(PrinterType || (PrinterType = {}));
/**
 * Enumeration of color modes used by Chromium.
 */
export var ColorMode;
(function (ColorMode) {
    ColorMode[ColorMode["GRAY"] = 1] = "GRAY";
    ColorMode[ColorMode["COLOR"] = 2] = "COLOR";
})(ColorMode || (ColorMode = {}));
export function isPdfPrinter(id) {
    return id === GooglePromotedDestinationId.SAVE_AS_PDF;
}
/**
 * Creates a |RecentDestination| to represent |destination| in the app
 * state.
 */
export function makeRecentDestination(destination) {
    return {
        id: destination.id,
        origin: destination.origin,
        capabilities: destination.capabilities,
        displayName: destination.displayName || '',
        extensionId: destination.extensionId || '',
        extensionName: destination.extensionName || '',
        icon: destination.icon || '',
    };
}
/**
 * @return key that maps to a destination with the selected |id| and |origin|.
 */
export function createDestinationKey(id, origin) {
    return `${id}/${origin}/`;
}
/**
 * @return A key that maps to a destination with parameters matching
 *     |recentDestination|.
 */
export function createRecentDestinationKey(recentDestination) {
    return createDestinationKey(recentDestination.id, recentDestination.origin);
}
/**
 * List of capability types considered color.
 */
const COLOR_TYPES = ['STANDARD_COLOR', 'CUSTOM_COLOR'];
/**
 * List of capability types considered monochrome.
 */
const MONOCHROME_TYPES = ['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'];
function matchWithDiacritics(candidate, query) {
    const strippedCandidate = stripDiacritics(candidate);
    return !!strippedCandidate.match(query);
}
/**
 * Print destination data object.
 */
export class Destination {
    /**
     * ID of the destination.
     */
    id_;
    /**
     * Origin of the destination.
     */
    origin_;
    /**
     * Display name of the destination.
     */
    displayName_;
    /**
     * Print capabilities of the destination.
     */
    capabilities_ = null;
    /**
     * Whether the destination is an enterprise policy controlled printer.
     */
    isEnterprisePrinter_;
    /**
     * Destination location.
     */
    location_ = '';
    /**
     * Printer description.
     */
    description_;
    /**
     * Extension ID for extension managed printers.
     */
    extensionId_;
    /**
     * Extension name for extension managed printers.
     */
    extensionName_;
    type_;
    constructor(id, origin, displayName, params) {
        this.id_ = id;
        this.origin_ = origin;
        this.displayName_ = displayName || '';
        this.isEnterprisePrinter_ = (params && params.isEnterprisePrinter) || false;
        this.description_ = (params && params.description) || '';
        this.extensionId_ = (params && params.extensionId) || '';
        this.extensionName_ = (params && params.extensionName) || '';
        this.location_ = (params && params.location) || '';
        this.type_ = this.computeType_(id, origin);
    }
    computeType_(id, origin) {
        if (isPdfPrinter(id)) {
            return PrinterType.PDF_PRINTER;
        }
        return origin === DestinationOrigin.EXTENSION ?
            PrinterType.EXTENSION_PRINTER :
            PrinterType.LOCAL_PRINTER;
    }
    get type() {
        return this.type_;
    }
    get id() {
        return this.id_;
    }
    get origin() {
        return this.origin_;
    }
    get displayName() {
        return this.displayName_;
    }
    /**
     * @return Whether the destination is an extension managed printer.
     */
    get isExtension() {
        return this.origin_ === DestinationOrigin.EXTENSION;
    }
    /**
     * @return Most relevant string to help user to identify this
     *     destination.
     */
    get hint() {
        return this.location_ || this.extensionName || this.description_;
    }
    /**
     * @return Extension ID associated with the destination. Non-empty
     *     only for extension managed printers.
     */
    get extensionId() {
        return this.extensionId_;
    }
    /**
     * @return Extension name associated with the destination.
     *     Non-empty only for extension managed printers.
     */
    get extensionName() {
        return this.extensionName_;
    }
    /** @return Print capabilities of the destination. */
    get capabilities() {
        return this.capabilities_;
    }
    set capabilities(capabilities) {
        if (capabilities) {
            this.capabilities_ = capabilities;
        }
    }
    /** @return Path to the SVG for the destination's icon. */
    get icon() {
        if (this.id_ === GooglePromotedDestinationId.SAVE_AS_PDF) {
            return 'cr:draft-filled';
        }
        if (this.isEnterprisePrinter) {
            return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
                'print-preview:domain' :
                'print-preview:business-old';
        }
        return loadTimeData.getBoolean('webuiRoundedIconsEnabled') ?
            'print-preview:print-filled' :
            'print-preview:print-old';
    }
    /**
     * @return Properties (besides display name) to match search queries against.
     */
    get extraPropertiesToMatch() {
        return [this.location_, this.description_];
    }
    /**
     * Matches a query against the destination.
     * @param query Query to match against the destination.
     * @return Whether the query matches this destination.
     */
    matches(query) {
        return matchWithDiacritics(this.displayName_, query) ||
            matchWithDiacritics(this.extensionName_, query) ||
            matchWithDiacritics(this.location_, query) ||
            matchWithDiacritics(this.description_, query);
    }
    /**
     * Whether the printer is enterprise policy controlled printer.
     */
    get isEnterprisePrinter() {
        return this.isEnterprisePrinter_;
    }
    copiesCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.copies ?
            this.capabilities.printer.copies :
            null;
    }
    colorCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.color ?
            this.capabilities.printer.color :
            null;
    }
    /** @return Whether the printer supports copies. */
    get hasCopiesCapability() {
        const capability = this.copiesCapability_();
        if (!capability) {
            return false;
        }
        return capability.max ? capability.max > 1 : true;
    }
    /**
     * @return Whether the printer supports both black and white and
     *     color printing.
     */
    get hasColorCapability() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return false;
        }
        let hasColor = false;
        let hasMonochrome = false;
        capability.option.forEach(option => {
            assert(option.type);
            hasColor = hasColor || COLOR_TYPES.includes(option.type);
            hasMonochrome = hasMonochrome || MONOCHROME_TYPES.includes(option.type);
        });
        return hasColor && hasMonochrome;
    }
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Native color model of the destination.
     */
    getNativeColorModel(isColor) {
        // For printers without capability, native color model is ignored.
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        const selected = this.getColor(isColor);
        const mode = parseInt(selected ? selected.vendor_id : '', 10);
        if (isNaN(mode)) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        return mode;
    }
    /**
     * @return The default color option for the destination.
     */
    get defaultColorOption() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        const defaultOptions = capability.option.filter(option => {
            return option.is_default;
        });
        return defaultOptions.length > 0 ? defaultOptions[0] : null;
    }
    /**
     * @return Color option value of the destination with the given binary color
     * value. Returns null if the destination doesn't support such color value.
     */
    getColor(isColor) {
        const typesToLookFor = isColor ? COLOR_TYPES : MONOCHROME_TYPES;
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        for (let i = 0; i < typesToLookFor.length; i++) {
            const matchingOptions = capability.option.filter(option => {
                return option.type === typesToLookFor[i];
            });
            if (matchingOptions.length > 0) {
                return matchingOptions[0];
            }
        }
        return null;
    }
    /**
     * @return Media size value of the destination with the given width and height
     * values. Returns undefined if there is no such media size value.
     */
    getMediaSize(width, height) {
        return this.capabilities?.printer.media_size?.option.find(o => {
            return o.width_microns === width && o.height_microns === height;
        });
    }
    /**
     * @return DPI (Dots per Inch) value of the destination with the given
     * horizontal and vertical resolutions. Returns undefined if there is no such
     * DPI value.
     */
    getDpi(horizontal, vertical) {
        return this.capabilities?.printer.dpi?.option.find(o => {
            return o.horizontal_dpi === horizontal && o.vertical_dpi === vertical;
        });
    }
    /**
     * @return Returns true if the current printing destination supports the given
     * duplex value. Returns false in all other cases.
     */
    supportsDuplex(duplex) {
        const availableDuplexOptions = this.capabilities?.printer.duplex?.option;
        if (!availableDuplexOptions) {
            // There are no duplex capabilities reported by the printer.
            return false;
        }
        return availableDuplexOptions.some(o => {
            return o.type === duplex;
        });
    }
    /** @return A unique identifier for this destination. */
    get key() {
        return `${this.id_}/${this.origin_}/`;
    }
}
/**
 * Enumeration of Google-promoted destination IDs.
 * @enum {string}
 */
export var GooglePromotedDestinationId;
(function (GooglePromotedDestinationId) {
    GooglePromotedDestinationId["SAVE_AS_PDF"] = "Save as PDF";
})(GooglePromotedDestinationId || (GooglePromotedDestinationId = {}));
/* Unique identifier for the Save as PDF destination */
export const PDF_DESTINATION_KEY = `${GooglePromotedDestinationId.SAVE_AS_PDF}/${DestinationOrigin.LOCAL}/`;
