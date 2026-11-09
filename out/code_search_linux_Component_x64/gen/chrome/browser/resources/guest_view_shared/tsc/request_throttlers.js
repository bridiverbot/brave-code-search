// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class OnBeforeSendHeadersParams {
    types;
    includeSubFrameRequests;
    addHeaders;
    constructor(
    // Types get validated when creating the SlimWebViewGuest.
    types, includeSubFrameRequests, addHeaders) {
        this.types = types;
        this.includeSubFrameRequests = includeSubFrameRequests;
        this.addHeaders = addHeaders;
    }
    toValue() {
        return {
            dictionaryValue: {
                storage: {
                    resourceTypes: {
                        listValue: {
                            storage: this.types.map((type) => {
                                return {
                                    stringValue: type,
                                };
                            }),
                        },
                    },
                    includeSubFrameRequests: {
                        boolValue: this.includeSubFrameRequests,
                    },
                    addHeaders: {
                        listValue: {
                            storage: this.addHeaders.map((header) => {
                                return {
                                    dictionaryValue: {
                                        storage: {
                                            name: { stringValue: header.name },
                                            value: { stringValue: header.value },
                                        },
                                    },
                                };
                            }),
                        },
                    },
                },
            },
        };
    }
}
export class OriginCheckParams {
    types;
    allowedOrigins;
    constructor(types, allowedOrigins) {
        this.types = types;
        this.allowedOrigins = allowedOrigins;
    }
    toValue() {
        return {
            dictionaryValue: {
                storage: {
                    resourceTypes: {
                        listValue: {
                            storage: this.types.map((type) => {
                                return {
                                    stringValue: type,
                                };
                            }),
                        },
                    },
                    allowedOrigins: {
                        listValue: {
                            storage: this.allowedOrigins.map((origin) => {
                                return {
                                    stringValue: origin,
                                };
                            }),
                        },
                    },
                },
            },
        };
    }
}
