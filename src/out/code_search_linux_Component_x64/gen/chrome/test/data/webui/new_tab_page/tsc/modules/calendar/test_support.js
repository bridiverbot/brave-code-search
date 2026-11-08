// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Microseconds between windows and unix epoch.
const kWindowsToUnixEpochOffset = 11644473600000000n;
export function toTime(time) {
    return {
        internalValue: BigInt(time.valueOf()) * 1000n + kWindowsToUnixEpochOffset,
    };
}
export function createAttachments(num, overrides) {
    const attachments = [];
    for (let i = 0; i < num; i++) {
        attachments.push(Object.assign({
            title: `Attachment ${i}`,
            iconUrl: `https://foo.com/attachment${i}`,
            resourceUrl: `https://foo.com/attachmet${i}`,
        }, overrides));
    }
    return attachments;
}
export function createEvent(index, overrides) {
    return Object.assign({
        title: `Test Event ${index}`,
        startTime: { internalValue: 1230000000000n * BigInt(index) },
        endTime: { internalValue: 1230000000000n * BigInt(index) },
        url: `https://foo.com/${index}`,
        location: `Location ${index}`,
        attachments: createAttachments(3),
        conferenceUrl: `https://foo.com/conference${index}`,
        isAccepted: true,
        hasOtherAttendee: true,
    }, overrides);
}
export function createEvents(num) {
    const events = [];
    for (let i = 0; i < num; i++) {
        events.push(createEvent(i));
    }
    return events;
}
