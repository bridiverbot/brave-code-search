// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { MemberRole } from 'chrome-untrusted://data-sharing/group_data.mojom-webui.js';
import { toMojomGroupData } from 'chrome-untrusted://data-sharing/mojom_conversion_utils.js';
import { assertDeepEquals } from 'chrome-untrusted://webui-test/chai_assert.js';
suite('MojomConversionUtilsTest', () => {
    test('toMojomGroupData', () => {
        const groupId = 'TEST_GROUP_ID';
        const groupName = 'TEST_GROUP_NAME';
        const avatarUrl = 'http://example.com';
        const displayName = 'TEST_DISPLAY_NAME';
        const gaiaId = 'TEST_GAIA_ID';
        const email = 'test@gmail.com';
        const accessToken = 'testAccessToken';
        const givenName = 'TEST_GIVEN_NAME';
        const formerAvatarUrl = 'http://former.com';
        const formerDisplayName = 'FORMER_DISPLAY_NAME';
        const formerGaiaId = 'FORMER_GAIA_ID';
        const formerEmail = 'former@gmail.com';
        const formerGivenName = 'TEST_FORMER_GIVEN_NAME';
        const groupData = toMojomGroupData({
            groupId: groupId,
            displayName: groupName,
            accessToken,
            members: [{
                    focusObfuscatedGaiaId: gaiaId,
                    displayName,
                    email,
                    role: "invitee" /* DataSharingMemberRoleEnum.INVITEE */,
                    avatarUrl,
                    givenName,
                    createdAtTimeMs: 300,
                    lastUpdatedAtTimeMs: 400,
                }],
            formerMembers: [{
                    focusObfuscatedGaiaId: formerGaiaId,
                    displayName: formerDisplayName,
                    email: formerEmail,
                    role: "former_member" /* DataSharingMemberRoleEnum.FORMER_MEMBER */,
                    avatarUrl: formerAvatarUrl,
                    givenName: formerGivenName,
                    createdAtTimeMs: 100,
                    lastUpdatedAtTimeMs: 200,
                }],
        });
        const expectedGroupData = {
            groupId,
            displayName: groupName,
            accessToken,
            members: [{
                    gaiaId,
                    displayName,
                    email,
                    role: MemberRole.kInvitee,
                    avatarUrl: avatarUrl,
                    givenName,
                    creationTime: new Date(300),
                    lastUpdatedTime: new Date(400),
                }],
            formerMembers: [{
                    gaiaId: formerGaiaId,
                    displayName: formerDisplayName,
                    email: formerEmail,
                    role: MemberRole.kFormerMember,
                    avatarUrl: formerAvatarUrl,
                    givenName: formerGivenName,
                    creationTime: new Date(100),
                    lastUpdatedTime: new Date(200),
                }],
        };
        assertDeepEquals(expectedGroupData, groupData);
    });
});
