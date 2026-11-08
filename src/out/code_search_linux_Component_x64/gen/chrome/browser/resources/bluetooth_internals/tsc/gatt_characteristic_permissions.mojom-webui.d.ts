import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const GattCharacteristicPermissionsSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GattCharacteristicPermissionsMojoType {
    read: boolean;
    write: boolean;
    readEncrypted: boolean;
    writeEncrypted: boolean;
    readEncryptedAuthenticated: boolean;
    writeEncryptedAuthenticated: boolean;
}
export type GattCharacteristicPermissions = GattCharacteristicPermissionsMojoType;
