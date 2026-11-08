// Copyright 2025 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertNever } from './transport/messaging.js';
// Ignore FLOATING and DOCKED in the api, as they're just deprecated aliases.
assertNever();
// kUnknown isn't in the public API because this is a closed enum, and will
// not be expanded.
assertNever();
assertNever();
assertNever();
assertNever();
assertNever();
assertNever();
assertNever();
