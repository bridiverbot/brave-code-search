import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getSigninShared} from '/signin_shared.css.js';
import {getCss as getManagedUserProfileNoticeRefreshShared} from './managed_user_profile_notice_refresh_shared.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getSigninShared(),getManagedUserProfileNoticeRefreshShared()], css`:host([is-oidc-dialog]) .title{font-size:24px}main{display:flex;flex-direction:column;margin-inline:auto}#headerContainer{margin-bottom:16px;position:relative;width:100%}:host([revamp-enabled][app-mode='first-run']) #headerContainer{display:flex;height:200px;justify-content:center}:host(:not([revamp-enabled])) #avatarContainer,:host([revamp-enabled][app-mode='profile-picker']) #avatarContainer{margin-inline:auto;position:relative}:host([revamp-enabled][app-mode='first-run']) #avatarContainer{position:absolute;top:40%}#avatarAnimation{pointer-events:none}:host([app-mode='first-run']) .title{font-size:32px}@media screen and ((max-width:1024px) or (max-height:750px)){:host([revamp-enabled][app-mode='first-run']) #headerContainer{height:140px}}`]);
}