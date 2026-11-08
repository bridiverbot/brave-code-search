// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NativeLayerImpl } from './native_layer.js';
/**
 * Enumeration of buckets that a user can enter while using the destination
 * search widget.
 */
export var DestinationSearchBucket;
(function (DestinationSearchBucket) {
    // Used when the print destination search widget is shown.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_SHOWN"] = 0] = "DESTINATION_SHOWN";
    // Used when the user selects a print destination.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_CLOSED_CHANGED"] = 1] = "DESTINATION_CLOSED_CHANGED";
    // Used when the print destination search widget is closed without selecting
    // a print destination.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_CLOSED_UNCHANGED"] = 2] = "DESTINATION_CLOSED_UNCHANGED";
    // Note: values 3-13 are intentionally unset as these correspond to
    // deprecated values in histograms/enums.xml. These enums are append-only.
    // User clicked on Manage button
    DestinationSearchBucket[DestinationSearchBucket["MANAGE_BUTTON_CLICKED"] = 14] = "MANAGE_BUTTON_CLICKED";
    // Max value.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_SEARCH_MAX_BUCKET"] = 15] = "DESTINATION_SEARCH_MAX_BUCKET";
})(DestinationSearchBucket || (DestinationSearchBucket = {}));
/**
 * Print settings UI usage metrics buckets.
 */
export var PrintSettingsUiBucket;
(function (PrintSettingsUiBucket) {
    // Advanced settings dialog is shown.
    PrintSettingsUiBucket[PrintSettingsUiBucket["ADVANCED_SETTINGS_DIALOG_SHOWN"] = 0] = "ADVANCED_SETTINGS_DIALOG_SHOWN";
    // Advanced settings dialog is closed without saving a selection.
    PrintSettingsUiBucket[PrintSettingsUiBucket["ADVANCED_SETTINGS_DIALOG_CANCELED"] = 1] = "ADVANCED_SETTINGS_DIALOG_CANCELED";
    // 'More/less settings' expanded.
    PrintSettingsUiBucket[PrintSettingsUiBucket["MORE_SETTINGS_CLICKED"] = 2] = "MORE_SETTINGS_CLICKED";
    // 'More/less settings' collapsed.
    PrintSettingsUiBucket[PrintSettingsUiBucket["LESS_SETTINGS_CLICKED"] = 3] = "LESS_SETTINGS_CLICKED";
    // User printed with extra settings expanded.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_WITH_SETTINGS_EXPANDED"] = 4] = "PRINT_WITH_SETTINGS_EXPANDED";
    // User printed with extra settings collapsed.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_WITH_SETTINGS_COLLAPSED"] = 5] = "PRINT_WITH_SETTINGS_COLLAPSED";
    // Max value.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_SETTINGS_UI_MAX_BUCKET"] = 6] = "PRINT_SETTINGS_UI_MAX_BUCKET";
})(PrintSettingsUiBucket || (PrintSettingsUiBucket = {}));
/* A context for recording a value in a specific UMA histogram. */
export class MetricsContext {
    histogram_;
    boundary_;
    nativeLayer_ = NativeLayerImpl.getInstance();
    /**
     * @param histogram The name of the histogram to be recorded in.
     * @param boundary The exclusive maximum value (boundary) for the histogram.
     */
    constructor(histogram, boundary) {
        this.histogram_ = histogram;
        this.boundary_ = boundary;
    }
    /**
     * Record a histogram value in UMA. If specified value is larger than or
     * equal to the boundary, record the value in the largest bucket (boundary - 1).
     * @param bucket Value to record.
     */
    record(bucket) {
        this.nativeLayer_.recordInHistogram(this.histogram_, (bucket >= this.boundary_) ? this.boundary_ - 1 : bucket, this.boundary_);
    }
    /**
     * Print settings UI specific usage statistics context
     */
    static printSettingsUi() {
        return new MetricsContext('PrintPreview.PrintSettingsUi', PrintSettingsUiBucket.PRINT_SETTINGS_UI_MAX_BUCKET);
    }
}
