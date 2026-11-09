// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import"/strings.m.js";import"chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js";import{html,render}from"//resources/lit/v3_0/lit.rollup.js";import{addWebUiListener,sendWithPromise}from"chrome://resources/js/cr.js";import{getRequiredElement}from"chrome://resources/js/util.js";function getSigninInfoHtml(infos){return html`
    ${infos.map((item=>html`
      <div class="section">
        <h2>${item.title}</h2>
        <table class="signin-details">
          ${item.data.map((data=>html`
            <tr>
              <td>${data.label}</td>
              <td>${data.status}</td>
              <td ?hidden="${!data.time}">${data.time}</td>
              <td ?hidden="${data.time.length!==0}">&nbsp;</td>
            </tr>
          `))}
        </table>
      </div>
    `))}
  `}function getTokenInfoHtml(infos){return html`
    <h2>Access Token Details By Account</h2>
    ${infos.map((item=>html`
      <div class="tokenSection">
        <h3>${item.title}</h3>
        <table class="signin-details">
          <tr class="header">
            <td>Service</td>
            <td>Requested Scopes</td>
            <td>Request Time</td>
            <td>Request Status</td>
          </tr>
          ${item.data.map((data=>html`
            <tr class="${getClassFromValue(data.status)}">
              <td>${data.service}</td>
              <td>${data.scopes}</td>
              <td>${data.request_time}</td>
              <td style="${data.status.includes("Expired at")?"color: #ffffff; background-color: #ff0000":""}">
                ${data.status}
              </td>
            </tr>
         `))}
        </table>
      </div>
    `))}
  `}function getCookieInfoHtml(cookieAccountsInfo){return html`
    <h2>Accounts in Cookie Jar</h2>
    <div class="cookieSection">
      <table class="signin-details">
        <tr class="header">
          <td>Email Address</td>
          <td>Gaia ID</td>
          <td>Validity</td>
          <td>Sign-in status</td>
          <td>Verification status</td>
        </tr>
        ${cookieAccountsInfo.cookie_info.length===0?html`
          <tr>
            <td colspan="5">No Accounts Present.</td>
          </tr>
        `:cookieAccountsInfo.cookie_info.map((item=>html`
          <tr>
            <td>${item.email}</td>
            <td>${item.gaia_id}</td>
            <td>${item.valid}</td>
            <td>${item.signed_in}</td>
            <td>${item.verified}</td>
          </tr>
        `))}
      </table>
    </div>
  `}function getAccountInfoHtml(infos){return html`
    <h2>Accounts in Token Service</h2>
    <div class="account-section">
      <table class="signin-details">
        <tr class="header">
          <td>Account Id</td>
          <td>Has refresh token</td>
          <td>Has persistent auth error</td>
          <td ?hidden="${infos[0]?.isBound==null}">Is bound to the device</td>
          <td ?hidden="${infos[0]?.mtlsTokenBinding==null}"
              >Is bound to mTLS certificate</td>
        </tr>
        ${infos.length===0?html`
          <tr>
            <td colspan="3">No token in Token Service.</td>
          </tr>
        `:infos.map((item=>html`
          <tr>
            <td>${item.accountId}</td>
            <td>${item.hasRefreshToken}</td>
            <td>${item.hasAuthError}</td>
            <td ?hidden="${item.isBound==null}">${item.isBound}</td>
            <td ?hidden="${item.mtlsTokenBinding==null}"
                >${item.mtlsTokenBinding}</td>
          </tr>
        `))}
      </table>
    </div>
  `}function getRefreshTokenEventsHtml(events){return html`
    <h2>Refresh token events</h2>
    <div class="refresh-token-events-section">
      <table class="signin-details">
        <tr class="header">
          <td>Timestamp</td>
          <td>Accound Id</td>
          <td>Event type</td>
          <td>Source</td>
        </tr>
        ${events.map((event=>html`
          <tr>
            <td>${event.timestamp}</td>
            <td>${event.accountId}</td>
            <td>${event.type}</td>
            <td>${event.source}</td>
          </tr>
        `))}
      </table>
    </div>
  `}function getAccountReconcilorEventsHtml(events){return html`
    <h2>Account reconcilor events</h2>
    <div class="account-reconcilor-events-section">
      <table class="signin-details">
        <tr class="header">
          <td>Timestamp</td>
          <td>Trigger</td>
          <td>Operation</td>
          <td>Result</td>
        </tr>
        ${events.map((event=>html`
          <tr>
            <td>${event.timestamp}</td>
            <td>${event.trigger}</td>
            <td>${event.operation}</td>
            <td>${event.result}</td>
          </tr>
        `))}
      </table>
    </div>
  `}function getBoundSessionInfoHtml(infos){if(!infos){return html``}return html`
    <div id="bound-session-info"">
      <h2>Bound sessions</h2>
      <div>
        <table class="signin-details">
          <tr class="header">
            <td>Session ID</td>
            <td>Domain</td>
            <td>Path</td>
            <td>Expiration time</td>
            <td>Throttling Paused</td>
            <td>Bound Cookie Names</td>
            <td>Refresh URL</td>
          </tr>
          ${infos.map((item=>html`
            <tr>
              <td>${item.sessionID}</td>
              <td>${item.domain}</td>
              <td>${item.path}</td>
              <td style="${item.expirationTime&&item.expirationTime.includes("Expired at")?"color: #ffffff; background-color: #ff0000":""}">
                ${item.expirationTime}
              </td>
              <td>${item.throttlingPaused}</td>
              <td>${item.boundCookieNames}</td>
              <td>${item.refreshUrl}</td>
            </tr>
          `))}
        </table>
      </div>
    </div>
  `}function onOverrideValueChange(accountIndex,capName,e){const select=e.target;const overrideValue=select.value;const accountId=latestSigninInfo.accountCapabilities[accountIndex].accountId;chrome.send("overrideCapability",[accountId,capName,overrideValue])}function getAccountCapabilitiesHtml(infos){if(!infos||infos.length===0){return html`<p>No account capabilities available.</p>`}return html`
    ${infos.map(((item,index)=>{const canOverrideAny=item.capabilities.some((cap=>cap.can_override));return html`
      <div class="account-capabilities-section">
        <h3>Account ID: ${item.accountId}</h3>
        <table class="signin-details">
          <tr class="header">
            <td>Capability Name</td>
            <td>Fetched Value</td>
            <td ?hidden="${!canOverrideAny}">Override</td>
          </tr>
          ${item.capabilities.map((cap=>html`
            <tr>
              <td><a href="http://go/capability-alias/${cap.name.replace("accountcapabilities/","")}">${cap.label}</a></td>
              <td>${cap.value}</td>
              <td ?hidden="${!canOverrideAny}">
                <select ?disabled="${!cap.can_override}"
                        @change="${ev=>onOverrideValueChange(index,cap.name,ev)}">
                  <option value=""
                          ?selected="${cap.override===""}">
                  </option>
                  <option value="True"
                          ?selected="${cap.override==="True"}">
                    True
                  </option>
                  <option value="False"
                          ?selected="${cap.override==="False"}">
                    False
                  </option>
                  <option value="Unknown"
                          ?selected="${cap.override==="Unknown"}">
                    Unknown
                  </option>
                </select>
              </td>
            </tr>
          `))}
        </table>
      </div>
    `}))}
  `}function getClassFromValue(value){if(value==="Successful"){return"ok"}return""}const HASH_SEED=crypto.getRandomValues(new Uint32Array(1))[0];function hashIdentifier(value){if(!value){return""}let h=HASH_SEED;for(let i=0;i<value.length;i++){h=Math.imul(h^value.charCodeAt(i),16777619)}h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return"0x"+((h^h>>>16)&65535).toString(16).padStart(4,"0")}function shouldShowRealIdentifiers(){return getRequiredElement("show-real-identifiers-checkbox").checked}function sanitizeBasicInfoData(data){if(data.isPii){return{...data,status:hashIdentifier(data.status)}}return data}function getDisplaySigninInfo(signinInfo){if(shouldShowRealIdentifiers()){return signinInfo}return{...signinInfo,signin_info:signinInfo.signin_info.map((section=>({...section,data:section.data.map(sanitizeBasicInfoData)}))),token_info:signinInfo.token_info.map((item=>({...item,title:hashIdentifier(item.title)}))),accountInfo:signinInfo.accountInfo.map((item=>({...item,accountId:hashIdentifier(item.accountId)}))),refreshTokenEvents:signinInfo.refreshTokenEvents.map((event=>({...event,accountId:hashIdentifier(event.accountId)}))),accountCapabilities:signinInfo.accountCapabilities.map((item=>({...item,accountId:hashIdentifier(item.accountId)})))}}function getDisplayCookieAccountsInfo(info){if(shouldShowRealIdentifiers()){return info}return{cookie_info:info.cookie_info.map((item=>({...item,email:hashIdentifier(item.email),gaia_id:hashIdentifier(item.gaia_id)})))}}let latestSigninInfo=null;let latestCookieAccountsInfo=null;function refreshSigninInfo(signinInfo){latestSigninInfo=signinInfo;const displaySigninInfo=getDisplaySigninInfo(signinInfo);render(getSigninInfoHtml(displaySigninInfo.signin_info),getRequiredElement("signin-info"));render(getTokenInfoHtml(displaySigninInfo.token_info),getRequiredElement("token-info"));render(getAccountInfoHtml(displaySigninInfo.accountInfo),getRequiredElement("account-info"));render(getRefreshTokenEventsHtml(displaySigninInfo.refreshTokenEvents),getRequiredElement("refresh-token-events"));render(getAccountReconcilorEventsHtml(displaySigninInfo.accountReconcilorEvents),getRequiredElement("account-reconcilor-events"));render(getBoundSessionInfoHtml(displaySigninInfo.boundSessionInfo),getRequiredElement("bound-session-info"));render(getAccountCapabilitiesHtml(displaySigninInfo.accountCapabilities),getRequiredElement("account-capabilities"))}function updateCookieAccounts(info){latestCookieAccountsInfo=info;const displayInfo=getDisplayCookieAccountsInfo(info);render(getCookieInfoHtml(displayInfo),getRequiredElement("cookie-info"))}function downloadSigninInternals(){const data={signinInfo:latestSigninInfo?getDisplaySigninInfo(latestSigninInfo):null,cookieAccountsInfo:latestCookieAccountsInfo?getDisplayCookieAccountsInfo(latestCookieAccountsInfo):null};const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="signin-internals.json";a.click();URL.revokeObjectURL(url)}function onShowRealIdentifiersChange(){if(latestSigninInfo){refreshSigninInfo(latestSigninInfo)}if(latestCookieAccountsInfo){updateCookieAccounts(latestCookieAccountsInfo)}}function onLoad(){getRequiredElement("download-button").addEventListener("click",downloadSigninInternals);getRequiredElement("show-real-identifiers-checkbox").addEventListener("change",onShowRealIdentifiersChange);addWebUiListener("signin-info-changed",refreshSigninInfo);addWebUiListener("update-cookie-accounts",updateCookieAccounts);sendWithPromise("getSigninInfo").then(refreshSigninInfo)}document.addEventListener("DOMContentLoaded",onLoad);