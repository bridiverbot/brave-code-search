// Automatically @generated C++ bindings for the following Rust crate:
// signed_web_bundles_rust
// Features: always_specialize_generics_in_cpp_api_from_rust

#![no_std]
#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::signed_web_bundles_rust::IntegrityBlock>() == 72);
const _: () = assert!(::core::mem::align_of::<::signed_web_bundles_rust::IntegrityBlock>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::signed_web_bundles_rust::IntegrityBlock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::IntegrityBlock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::signed_web_bundles_rust::IntegrityBlock as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::signed_web_bundles_rust::IntegrityBlock<'static>,
    source: &'static ::signed_web_bundles_rust::IntegrityBlock<'static>,
) -> () {
    unsafe {
        <::signed_web_bundles_rust::IntegrityBlock as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvXsc_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u14IntegrityBlockNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::IntegrityBlock<'static>,
    other: &'static ::signed_web_bundles_rust::IntegrityBlock<'static>,
) -> bool {
    unsafe {
        <::signed_web_bundles_rust::IntegrityBlock<'static> as ::core::cmp::PartialEq<
            ::signed_web_bundles_rust::IntegrityBlock<'static>,
        >>::eq(__self, other)
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::signed_web_bundles_rust::IntegrityBlock, size) == 0);
const _: () =
    assert!(::core::mem::offset_of!(::signed_web_bundles_rust::IntegrityBlock, web_bundle_id) == 8);
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::IntegrityBlock, attributes_cbor) == 24
);
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::IntegrityBlock, signature_stack) == 48
);
const _: () = assert!(::core::mem::size_of::<::signed_web_bundles_rust::ParseError>() == 32);
const _: () = assert!(::core::mem::align_of::<::signed_web_bundles_rust::ParseError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvXsg_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::ParseError,
    other: &'static ::signed_web_bundles_rust::ParseError,
) -> bool {
    unsafe {
        <::signed_web_bundles_rust::ParseError as ::core::cmp::PartialEq<
            ::signed_web_bundles_rust::ParseError,
        >>::eq(__self, other)
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::signed_web_bundles_rust::ParseError, is_version_error) == 0);
const _: () = assert!(::core::mem::offset_of!(::signed_web_bundles_rust::ParseError, message) == 8);
const _: () = assert!(::core::mem::size_of::<::signed_web_bundles_rust::Sha512Hasher>() == 208);
const _: () = assert!(::core::mem::align_of::<::signed_web_bundles_rust::Sha512Hasher>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier12Sha512HasherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::signed_web_bundles_rust::Sha512Hasher as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher3new(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::signed_web_bundles_rust::Sha512Hasher::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6update(
    __self: &'static mut ::signed_web_bundles_rust::Sha512Hasher,
    chunk: *mut &'static [u8],
) -> () {
    unsafe {
        let chunk = chunk.read();
        ::signed_web_bundles_rust::Sha512Hasher::update(__self, chunk)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6finish(
    __self: *mut ::signed_web_bundles_rust::Sha512Hasher,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::signed_web_bundles_rust::Sha512Hasher::finish(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::size_of::<::signed_web_bundles_rust::SignatureStackEntry>() == 64);
const _: () =
    assert!(::core::mem::align_of::<::signed_web_bundles_rust::SignatureStackEntry>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::signed_web_bundles_rust::SignatureStackEntry,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::SignatureStackEntry<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::signed_web_bundles_rust::SignatureStackEntry as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::signed_web_bundles_rust::SignatureStackEntry<'static>,
    source: &'static ::signed_web_bundles_rust::SignatureStackEntry<'static>,
) -> () {
    unsafe {
        <::signed_web_bundles_rust::SignatureStackEntry as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvXs8_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u19SignatureStackEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::SignatureStackEntry<'static>,
    other: &'static ::signed_web_bundles_rust::SignatureStackEntry<'static>,
) -> bool {
    unsafe {
        <::signed_web_bundles_rust::SignatureStackEntry<'static> as ::core::cmp::PartialEq<
            ::signed_web_bundles_rust::SignatureStackEntry<'static>,
        >>::eq(__self, other)
    }
}
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::SignatureStackEntry, attributes_cbor) == 0
);
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::SignatureStackEntry, signature_type) == 24
);
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::SignatureStackEntry, public_key) == 32
);
const _: () = assert!(
    ::core::mem::offset_of!(::signed_web_bundles_rust::SignatureStackEntry, signature) == 48
);
const _: () = assert!(::core::mem::size_of::<::signed_web_bundles_rust::SignatureType>() == 4);
const _: () = assert!(::core::mem::align_of::<::signed_web_bundles_rust::SignatureType>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvXs4_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u13SignatureTypeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::signed_web_bundles_rust::SignatureType,
    other: &'static ::signed_web_bundles_rust::SignatureType,
) -> bool {
    unsafe {
        <::signed_web_bundles_rust::SignatureType as ::core::cmp::PartialEq<
            ::signed_web_bundles_rust::SignatureType,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier33create_uempty_uintegrity_ublock_ucbor(
    attributes_cbor: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let attributes_cbor = attributes_cbor.read();
        let __rs_return_value =
            ::signed_web_bundles_rust::create_empty_integrity_block_cbor(attributes_cbor);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24create_usignature_upayload(
    unsigned_web_bundle_hash: *mut &'static [u8],
    integrity_block_cbor: *mut &'static [u8],
    attributes_cbor: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let unsigned_web_bundle_hash = unsigned_web_bundle_hash.read();
        let integrity_block_cbor = integrity_block_cbor.read();
        let attributes_cbor = attributes_cbor.read();
        let __rs_return_value = ::signed_web_bundles_rust::create_signature_payload(
            unsigned_web_bundle_hash,
            integrity_block_cbor,
            attributes_cbor,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust15integrity_ublock21parse_uintegrity_ublock(
    input: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let input = input.read();
        let __rs_return_value = ::signed_web_bundles_rust::parse_integrity_block(input);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier27verify_uecdsa_up256_usignature(
    public_key: *mut &'static [u8],
    signature: *mut &'static [u8],
    message: *mut &'static [u8],
) -> bool {
    unsafe {
        let public_key = public_key.read();
        let signature = signature.read();
        let message = message.read();
        ::signed_web_bundles_rust::verify_ecdsa_p256_signature(public_key, signature, message)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24verify_ued25519_usignature(
    public_key: *mut &'static [u8],
    signature: *mut &'static [u8],
    message: *mut &'static [u8],
) -> bool {
    unsafe {
        let public_key = public_key.read();
        let signature = signature.read();
        let message = message.read();
        ::signed_web_bundles_rust::verify_ed25519_signature(public_key, signature, message)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier16verify_usignature(
    signature_type: *mut ::signed_web_bundles_rust::SignatureType,
    public_key: *mut &'static [u8],
    signature: *mut &'static [u8],
    message: *mut &'static [u8],
) -> bool {
    unsafe {
        let signature_type = signature_type.read();
        let public_key = public_key.read();
        let signature = signature.read();
        let message = message.read();
        ::signed_web_bundles_rust::verify_signature(signature_type, public_key, signature, message)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::signed_web_bundles_rust::SignatureStackEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<
            ::signed_web_bundles_rust::SignatureStackEntry<'static>,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::signed_web_bundles_rust::SignatureStackEntry<'static>>,
    source: &'static ::alloc::vec::Vec<::signed_web_bundles_rust::SignatureStackEntry<'static>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::signed_web_bundles_rust::SignatureStackEntry<'static>>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::signed_web_bundles_rust::IntegrityBlock<'static>,
        ::signed_web_bundles_rust::ParseError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::signed_web_bundles_rust::IntegrityBlock<'static>,
            ::signed_web_bundles_rust::ParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::signed_web_bundles_rust::IntegrityBlock<'static>,
        ::signed_web_bundles_rust::ParseError,
    >,
    source: &'static ::core::result::Result<
        ::signed_web_bundles_rust::IntegrityBlock<'static>,
        ::signed_web_bundles_rust::ParseError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::signed_web_bundles_rust::IntegrityBlock<'static>,
            ::signed_web_bundles_rust::ParseError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
