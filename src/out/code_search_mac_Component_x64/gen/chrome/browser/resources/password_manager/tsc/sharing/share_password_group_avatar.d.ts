import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export interface SharePasswordGroupAvatarElement {
    $: {
        firstImg: HTMLImageElement;
        secondImg: HTMLImageElement;
        thirdImg: HTMLImageElement;
        fourthImg: HTMLImageElement;
        more: HTMLElement;
    };
}
export declare class SharePasswordGroupAvatarElement extends PolymerElement {
    static get is(): string;
    static get template(): HTMLTemplateElement;
    static get properties(): {
        members: ArrayConstructor;
    };
    members: chrome.passwordsPrivate.RecipientInfo[];
    private isMembersCountLessThan_;
    private getProfileImageUrl_;
    private getMoreCount_;
}
declare global {
    interface HTMLElementTagNameMap {
        'share-password-group-avatar': SharePasswordGroupAvatarElement;
    }
}
