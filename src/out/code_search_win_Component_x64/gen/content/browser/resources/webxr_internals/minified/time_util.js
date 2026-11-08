// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function formatMojoTime(mojoTime){const windowsEpoch=Date.UTC(1601,0,1,0,0,0,0);const unixEpoch=Date.UTC(1970,0,1,0,0,0,0);const epochDeltaInMs=unixEpoch-windowsEpoch;const timeInMs=Number(mojoTime.internalValue)/1e3;return new Date(timeInMs-epochDeltaInMs).toLocaleString()}export function getCurrentDateTime(){const now=new Date;const formattedDateTime=now.toLocaleString();return formattedDateTime}