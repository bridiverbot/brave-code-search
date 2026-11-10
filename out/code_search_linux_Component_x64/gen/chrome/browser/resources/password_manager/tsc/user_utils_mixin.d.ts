import type { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerActionableError } from './password_manager.mojom-webui.js';
type Constructor<T> = new (...args: any[]) => T;
/**
 * This mixin bundles functionality related to syncing, sign in status and
 * account storage.
 */
export declare const UserUtilMixin: <T extends Constructor<PolymerElement>>(superClass: T) => T & Constructor<UserUtilMixinInterface>;
export interface UserUtilMixinInterface {
    isAccountStoreUser: boolean;
    isSyncingPasswords: boolean;
    actionableError: PasswordManagerActionableError | null;
    accountEmail: string;
    avatarImage: string;
    isTrustedVaultKeyNeeded(): boolean;
    executeIfTrustedVaultUnlocked(action: () => void): void;
}
export {};
