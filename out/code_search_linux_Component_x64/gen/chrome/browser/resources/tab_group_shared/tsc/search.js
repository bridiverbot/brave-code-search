// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
import { search as upstreamSearch } from './search-chromium.js';
let context = null;
export function setSemanticOpenTabsContext(ctx) {
    context = ctx;
}
export async function search(input, records, options) {
    const result = await upstreamSearch(input, records, options);
    if (!input || !context ||
        records !== context.getOpenTabsRecords()) {
        return result;
    }
    return result.concat(context.getSemanticExtras(input, result));
}
