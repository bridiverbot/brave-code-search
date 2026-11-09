const HEX_BASE = 16;
// Token component is 64 bits, hex is 4 bits. This gives us a necessary
// string length.
const TOKEN_COMPONENT_STR_LENGTH = 64 / 4;
export class UnguessableTokenConverter {
    // Field accessors for encoding a typemap to a mojo type.
    validate(token) {
        if (token.length !== (2 * TOKEN_COMPONENT_STR_LENGTH)) {
            throw new Error('token is malformed: ' + token);
        }
        if (token !== token.toUpperCase()) {
            throw new Error('token is not uppercase: ' + token);
        }
    }
    high(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(0, TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    low(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    // Converts a mojo type to the typemap.
    convert(view) {
        return (view.high.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0') +
            view.low.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0'))
            .toUpperCase();
    }
}
