// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SEPARATOR=":";export class NodeIdConverter{validateAndSplit(token){const parts=token.split(SEPARATOR);if(parts.length!==2||!parts[0]||!parts[1]){throw new Error(`NodeId token is malformed. "${token}".`)}return parts}id(token){const split=this.validateAndSplit(token);return split[0]}type(token){const split=this.validateAndSplit(token);const typeNum=parseInt(split[1]);return typeNum}convert(view){return`${view.id}${SEPARATOR}${view.type}`}}