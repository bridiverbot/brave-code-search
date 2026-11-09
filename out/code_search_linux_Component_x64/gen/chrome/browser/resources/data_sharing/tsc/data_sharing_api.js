// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// 
// 
import { SHAREKIT_SDK_VERSION } from './dummy_data_sharing_sdk.js';
// 
// clang-format on
import '/strings.m.js';
import { loadTimeData } from 'chrome-untrusted://resources/js/load_time_data.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { toMojomGroupData } from './mojom_conversion_utils.js';
let initialized = false;
const dataSharingSdk = window.data_sharing_sdk.buildDataSharingSdk();
const browserProxy = BrowserProxyImpl.getInstance();
dataSharingSdk.setClientVersionAndResetPeopleStore(loadTimeData.getStringF('currentClientVersion'), parseInt(SHAREKIT_SDK_VERSION));
dataSharingSdk.updateClearcut({ enabled: loadTimeData.getBoolean('metricsReportingEnabled') });
browserProxy.callbackRouter.onAccessTokenFetched.addListener(accessToken => {
    dataSharingSdk.setOauthAccessToken({ accessToken });
    if (!initialized) {
        browserProxy.handler.apiInitComplete();
        initialized = true;
    }
});
browserProxy.callbackRouter.readGroupWithToken.addListener(mojomParam => {
    const groupId = mojomParam.groupId;
    const accessToken = mojomParam.accessToken;
    return new Promise((resolve) => {
        dataSharingSdk.readGroup({ groupId }, { accessToken })
            .then(({ result, status }) => {
            const group = status ? undefined : toMojomGroupData(result.groupData);
            resolve({ result: { group, statusCode: status } });
        });
    });
});
browserProxy.callbackRouter.readGroups.addListener(mojomParams => {
    const params = [];
    for (const mojomParam of mojomParams.params) {
        params.push({
            groupId: mojomParam.groupId,
            consistencyToken: mojomParam.consistencyToken,
        });
    }
    return new Promise((resolve) => {
        dataSharingSdk.readGroups({ params }).then(({ result, status }) => {
            const groupData = result?.groupData.map(toMojomGroupData) ?? [];
            resolve({ result: { groups: groupData, statusCode: status } });
        });
    });
});
browserProxy.callbackRouter.leaveGroup.addListener(groupId => {
    return new Promise((resolve) => {
        dataSharingSdk.leaveGroup({ groupId }).then(({ status }) => {
            resolve({ statusCode: status });
        });
    });
});
browserProxy.callbackRouter.deleteGroup.addListener(groupId => {
    return new Promise((resolve) => {
        dataSharingSdk.deleteGroup({ groupId }).then(({ status }) => {
            resolve({ statusCode: status });
        });
    });
});
