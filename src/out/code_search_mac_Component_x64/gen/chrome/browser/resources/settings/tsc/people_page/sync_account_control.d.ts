import type { PropertyValues } from '//resources/lit/v3_0/lit.rollup.js';
import { SettingsSyncAccountControlElement as SettingsSyncAccountControlElementChromium } from './sync_account_control-chromium.js';
declare class SettingsSyncAccountControlElement extends SettingsSyncAccountControlElementChromium {
    static get is(): string;
    willUpdate(changedProperties: PropertyValues<this>): void;
}
export { SettingsSyncAccountControlElement };
export * from './sync_account_control-chromium.js';
