import { css } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getSigninShared } from '/signin_shared.css.js';
import { getCss as getManagedUserProfileNoticeRefreshShared } from './managed_user_profile_notice_refresh_shared.css.js';
let instance = null;
export function getCss() {
    return instance || (instance = [...[getSigninShared(), getManagedUserProfileNoticeRefreshShared()], css `:host{display:flex;flex-direction:column;text-align:center}#avatarContainer{margin-bottom:16px;margin-inline:auto;position:relative}`]);
}
