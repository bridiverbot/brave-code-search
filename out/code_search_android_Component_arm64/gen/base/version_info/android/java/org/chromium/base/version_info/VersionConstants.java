// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

package org.chromium.base.version_info;

import org.chromium.build.annotations.NullMarked;

// Constants shared by Android Chrome and WebView. Chrome specific constants are
// in ChromeVersionConstants.
// Note: PATCH, VERSION_NAME and VERSION_CODE should come from ApkInfo.
@NullMarked
public class VersionConstants {
    public static final String PRODUCT_VERSION = "158.1.101.0";
    @SuppressWarnings({"ComplexBooleanConstant", "IdentityBinaryExpression"})
    public static final boolean IS_OFFICIAL_BUILD = 0 == 1;

    public static final int PRODUCT_MAJOR_VERSION = 158;
    public static final int PRODUCT_BUILD_VERSION = 101;

    public static final int CHANNEL = Channel.DEFAULT;
}
