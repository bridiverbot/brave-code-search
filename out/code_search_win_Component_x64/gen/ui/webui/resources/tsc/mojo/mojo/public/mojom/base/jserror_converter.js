export class JsErrorConverter {
    // Encoding
    name(e) {
        return e.name || null;
    }
    cause(e) {
        return e.cause || null;
    }
    message(e) {
        return e.message || 'unknown error has occured';
    }
    // Decoding
    convert(view) {
        const error = new Error(view.message || '', {
            cause: view.cause,
        });
        if (view.name) {
            error.name = view.name;
        }
        return error;
    }
}
