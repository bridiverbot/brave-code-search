export class JsTimeConverter {
    // Encoding
    msec(date) {
        return date.valueOf();
    }
    // Decoding
    convert(view) {
        return new Date(view.msec);
    }
}
