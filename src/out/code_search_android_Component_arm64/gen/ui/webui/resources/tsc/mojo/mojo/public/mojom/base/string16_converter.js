export class String16Converter {
    data(str) {
        const arr = [];
        for (let i = 0; i < str.length; ++i) {
            arr.push(str.charCodeAt(i));
        }
        return arr;
    }
    convert(view) {
        const data = view.data;
        return this.convertImpl(data);
    }
    // Exported for testing.
    // TODO(crbug.com/448737199): we should not have to expose a separate method
    // just to facilitate testing.
    convertImpl(data) {
        // Taken from chunk size used in goog.crypt.byteArrayToBinaryString in
        // Closure Library. The value is equal to 2^13.
        const CHUNK_SIZE = 8192;
        if (data.length < CHUNK_SIZE) {
            return String.fromCharCode(...data);
        }
        // Convert the array to a string in chunks, to avoid passing too many
        // arguments to String.fromCharCode() at once, which can exceed the max call
        // stack size (c.f. crbug.com/1509792).
        let str = '';
        for (let i = 0; i < data.length; i += CHUNK_SIZE) {
            const chunk = data.slice(i, i + CHUNK_SIZE);
            str += String.fromCharCode(...chunk);
        }
        return str;
    }
}
