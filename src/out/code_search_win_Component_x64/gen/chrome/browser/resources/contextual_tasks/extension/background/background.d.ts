export declare enum HandshakeStatus {
    SUCCESS = 0,
    HOST_ORIGIN_REJECTED = 1,
    FRAME_DETACHED = 2,
    MOJO_REQUEST_FAILED = 3,
    INVALID_DOCUMENT_ID = 4
}
export declare enum PostMessageError {
    UNTRUSTED_ORIGIN = 0,
    UNEXPECTED_DATA_TYPE = 1,
    MESSAGE_TOO_LARGE = 2,
    INVALID_DOCUMENT_ID = 3,
    PROTO_PARSE_FAILED = 4,
    MOJO_PIPE_CLOSED = 5
}
declare global {
    namespace chrome {
        namespace runtime {
            const onConnectExternal: PortEvent;
        }
    }
}
