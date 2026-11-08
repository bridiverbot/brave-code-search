import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
export declare const GattCharacteristicPropertiesSpec: {
    $: mojo.internal.MojomType;
};
export declare interface GattCharacteristicPropertiesMojoType {
    broadcast: boolean;
    read: boolean;
    writeWithoutResponse: boolean;
    write: boolean;
    notify: boolean;
    indicate: boolean;
    authenticatedSignedWrites: boolean;
    extendedProperties: boolean;
    reliableWrite: boolean;
    writableAuxiliaries: boolean;
    readEncrypted: boolean;
    writeEncrypted: boolean;
    readEncryptedAuthenticated: boolean;
    writeEncryptedAuthenticated: boolean;
}
export type GattCharacteristicProperties = GattCharacteristicPropertiesMojoType;
