// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function formatModuleName(moduleName){if(!moduleName.includes("-")){return moduleName}const withoutPrefix=moduleName.replace(/^\d{3}-/,"");return kebabCaseToCamelCase(withoutPrefix)}function uppercaseFirstLetter(word){return word.replace(/^\w/,(firstLetter=>firstLetter.toUpperCase()))}function kebabCaseToCamelCase(input){return input.split("-").map(uppercaseFirstLetter).join("")}