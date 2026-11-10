// Automatically @generated C++ bindings for the following Rust crate:
// athm_ffi_2b5bb122
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::AthmStatus>() == 1);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::AthmStatus>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvXsd_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u10AthmStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::AthmStatus,
    other: &'static ::athm_ffi_2b5bb122::AthmStatus,
) -> bool {
    unsafe {
        <::athm_ffi_2b5bb122::AthmStatus as ::core::cmp::PartialEq<
            ::athm_ffi_2b5bb122::AthmStatus,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::PrivacyPassAthmClient>() == 264);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::PrivacyPassAthmClient>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::PrivacyPassAthmClient as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
    source: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
) -> () {
    unsafe {
        <::athm_ffi_2b5bb122::PrivacyPassAthmClient as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient7try_unew(
    public_key: *mut &'static [u8],
    public_key_proof: *mut &'static [u8],
    num_buckets: u8,
    deployment_id: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let public_key = public_key.read();
        let public_key_proof = public_key_proof.read();
        let deployment_id = deployment_id.read();
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassAthmClient::try_new(
            public_key,
            public_key_proof,
            num_buckets,
            deployment_id,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient3new(
    issuer: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassAthmClient::new(issuer);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient15new_utoken_ustate(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassAthmClient::new_token_state(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::PrivacyPassAthmIssuer>() == 424);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::PrivacyPassAthmIssuer>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::PrivacyPassAthmIssuer as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    source: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
) -> () {
    unsafe {
        <::athm_ffi_2b5bb122::PrivacyPassAthmIssuer as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer7try_unew(
    num_buckets: u8,
    deployment_id: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let deployment_id = deployment_id.read();
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::try_new(num_buckets, deployment_id);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer16public_ukey_ubytes(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::public_key_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22public_ukey_uproof_ubytes(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::public_key_proof_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer11issue_ubatch(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    batch: *mut ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
    hidden_metadata: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let batch = batch.read();
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::issue_batch(__self, batch, hidden_metadata);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22issue_ubatch_ufrom_ubytes(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    request_body: *mut &'static [u8],
    hidden_metadata: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let request_body = request_body.read();
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::issue_batch_from_bytes(
            __self,
            request_body,
            hidden_metadata,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer17verify_uwire_utoken(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
    wire_token: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let wire_token = wire_token.read();
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer::verify_wire_token(__self, wire_token);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::athm_ffi_2b5bb122::PrivacyPassAthmIssuer, params) == 0);
const _: () = assert!(
    ::core::mem::offset_of!(::athm_ffi_2b5bb122::PrivacyPassAthmIssuer, public_key_proof) == 256
);
const _: () =
    assert!(::core::mem::offset_of!(::athm_ffi_2b5bb122::PrivacyPassAthmIssuer, public_key) == 320);
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::PrivacyPassBatchClient>() == 312);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::PrivacyPassBatchClient>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::PrivacyPassBatchClient as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
    source: &'static ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
) -> () {
    unsafe {
        <::athm_ffi_2b5bb122::PrivacyPassBatchClient as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient7try_unew(
    public_key: *mut &'static [u8],
    public_key_proof: *mut &'static [u8],
    num_buckets: u8,
    deployment_id: *mut &'static [u8],
    version: u32,
    batch_size: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let public_key = public_key.read();
        let public_key_proof = public_key_proof.read();
        let deployment_id = deployment_id.read();
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassBatchClient::try_new(
            public_key,
            public_key_proof,
            num_buckets,
            deployment_id,
            version,
            batch_size,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient12request_ubodyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::athm_ffi_2b5bb122::PrivacyPassBatchClient::request_body(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient8finalize(
    __self: &'static mut ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
    response_body: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let response_body = response_body.read();
        let __rs_return_value =
            ::athm_ffi_2b5bb122::PrivacyPassBatchClient::finalize(__self, response_body);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::TokenRequestInboundBatch>() == 32);
const _: () =
    assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::TokenRequestInboundBatch>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::TokenRequestInboundBatch as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
    source: &'static ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
) -> () {
    unsafe {
        <::athm_ffi_2b5bb122::TokenRequestInboundBatch as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB2_u24TokenRequestInboundBatch10from_ubytes(
    input: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let input = input.read();
        let __rs_return_value = ::athm_ffi_2b5bb122::TokenRequestInboundBatch::from_bytes(input);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::athm_ffi_2b5bb122::TokenRequestInboundBatch, requests) == 0);
const _: () =
    assert!(::core::mem::offset_of!(::athm_ffi_2b5bb122::TokenRequestInboundBatch, version) == 24);
const _: () = assert!(
    ::core::mem::offset_of!(::athm_ffi_2b5bb122::TokenRequestInboundBatch, truncated_key_id) == 28
);
const _: () =
    assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::TokenResponseInboundBatch>() == 24);
const _: () =
    assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::TokenResponseInboundBatch>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::TokenResponseInboundBatch as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
    source: &'static ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
) -> () {
    unsafe {
        <::athm_ffi_2b5bb122::TokenResponseInboundBatch as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB4_u25TokenResponseInboundBatch10from_ubytes(
    input: *mut &'static [u8],
    client: &'static ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let input = input.read();
        let __rs_return_value =
            ::athm_ffi_2b5bb122::TokenResponseInboundBatch::from_bytes(input, client);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(
    ::core::mem::offset_of!(::athm_ffi_2b5bb122::TokenResponseInboundBatch, responses) == 0
);
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::TokenState>() == 97);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::TokenState>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::TokenState,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::athm_ffi_2b5bb122::TokenState as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::athm_ffi_2b5bb122::TokenState,
    source: &'static ::athm_ffi_2b5bb122::TokenState,
) -> () {
    unsafe { <::athm_ffi_2b5bb122::TokenState as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::offset_of!(::athm_ffi_2b5bb122::TokenState, request) == 64);
const _: () = assert!(::core::mem::size_of::<::athm_ffi_2b5bb122::UnframeError>() == 1);
const _: () = assert!(::core::mem::align_of::<::athm_ffi_2b5bb122::UnframeError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvXs6_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u12UnframeErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::athm_ffi_2b5bb122::UnframeError,
    other: &'static ::athm_ffi_2b5bb122::UnframeError,
) -> bool {
    unsafe {
        <::athm_ffi_2b5bb122::UnframeError as ::core::cmp::PartialEq<
            ::athm_ffi_2b5bb122::UnframeError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassAthmClient,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassAthmIssuer,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::athm_ffi_2b5bb122::PrivacyPassBatchClient,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
            ::athm_ffi_2b5bb122::UnframeError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::athm_ffi_2b5bb122::TokenRequestInboundBatch,
            ::athm_ffi_2b5bb122::UnframeError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
            ::athm_ffi_2b5bb122::UnframeError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
        ::athm_ffi_2b5bb122::UnframeError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::athm_ffi_2b5bb122::TokenResponseInboundBatch,
            ::athm_ffi_2b5bb122::UnframeError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenState,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::athm_ffi_2b5bb122::TokenState,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenState,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<
        ::athm_ffi_2b5bb122::TokenState,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
) -> () {
    unsafe {
        <core::result::Result<::athm_ffi_2b5bb122::TokenState,::athm_ffi_2b5bb122::AthmStatus>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<
        ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::athm_ffi_2b5bb122::AthmStatus>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<u8>,
            ::athm_ffi_2b5bb122::AthmStatus,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::vec::Vec<u8>,
        ::athm_ffi_2b5bb122::AthmStatus,
    >,
    source: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::athm_ffi_2b5bb122::AthmStatus>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::vec::Vec<u8>,::athm_ffi_2b5bb122::AthmStatus>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::alloc::vec::Vec<u8>> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
    source: &'static ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::alloc::vec::Vec<u8>> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
