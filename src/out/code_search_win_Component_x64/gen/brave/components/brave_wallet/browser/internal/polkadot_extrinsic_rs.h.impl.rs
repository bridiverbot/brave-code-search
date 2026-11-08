// Automatically @generated C++ bindings for the following Rust crate:
// polkadot_extrinsic
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () =
    assert!(::core::mem::size_of::<::polkadot_extrinsic::CxxPolkadotChainMetadata>() == 80);
const _: () =
    assert!(::core::mem::align_of::<::polkadot_extrinsic::CxxPolkadotChainMetadata>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvXs9_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u24CxxPolkadotChainMetadataNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    other: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
) -> bool {
    unsafe {
        <::polkadot_extrinsic::CxxPolkadotChainMetadata as ::core::cmp::PartialEq<
            ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        >>::eq(__self, other)
    }
}
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, system_pallet_index)
        == 0
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, balances_pallet_index)
        == 1
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        transaction_payment_pallet_index
    ) == 2
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        transfer_allow_death_call_index
    ) == 3
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        transfer_keep_alive_call_index
    ) == 4
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        transfer_all_call_index
    ) == 5
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, assets_pallet_index)
        == 6
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        assets_transfer_all_call_index
    ) == 7
);
const _: () = assert!(
    ::core::mem::offset_of!(
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        assets_transfer_keep_alive_call_index
    ) == 8
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, has_assets_pallet) == 9
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, ss58_prefix) == 10
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, spec_version) == 12
);
const _: () = assert!(
    ::core::mem::offset_of!(::polkadot_extrinsic::CxxPolkadotChainMetadata, signed_extensions)
        == 16
);
const _: () = assert!(::core::mem::size_of::<::polkadot_extrinsic::SignedExtensions>() == 64);
const _: () = assert!(::core::mem::align_of::<::polkadot_extrinsic::SignedExtensions>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYNtCsglSxyCxUa9Z_u18polkadot_uextrinsic16SignedExtensionsNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::polkadot_extrinsic::SignedExtensions as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvXs4_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u16SignedExtensionsNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::polkadot_extrinsic::SignedExtensions,
    other: &'static ::polkadot_extrinsic::SignedExtensions,
) -> bool {
    unsafe {
        <::polkadot_extrinsic::SignedExtensions as ::core::cmp::PartialEq<
            ::polkadot_extrinsic::SignedExtensions,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::offset_of!(::polkadot_extrinsic::SignedExtensions, bytes) == 0);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24compact_uscale_uencode_uu32(
    x: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::compact_scale_encode_u32(x);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic43generate_uassets_uextrinsic_usignature_upayload(
    chain_metadata: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    sender_nonce: u32,
    send_amount_bytes: &'static [u8; 16],
    transfer_all: bool,
    recipient: &'static [u8; 32],
    asset_id: u32,
    spec_version: u32,
    transaction_version: u32,
    block_number: u32,
    genesis_hash: &'static [u8; 32],
    block_hash: &'static [u8; 32],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::generate_assets_extrinsic_signature_payload(
            chain_metadata,
            sender_nonce,
            send_amount_bytes,
            transfer_all,
            recipient,
            asset_id,
            spec_version,
            transaction_version,
            block_number,
            genesis_hash,
            block_hash,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36generate_uextrinsic_usignature_upayload(
    chain_metadata: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    sender_nonce: u32,
    send_amount_bytes: &'static [u8; 16],
    transfer_all: bool,
    recipient: &'static [u8; 32],
    spec_version: u32,
    transaction_version: u32,
    block_number: u32,
    genesis_hash: &'static [u8; 32],
    block_hash: &'static [u8; 32],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::generate_extrinsic_signature_payload(
            chain_metadata,
            sender_nonce,
            send_amount_bytes,
            transfer_all,
            recipient,
            spec_version,
            transaction_version,
            block_number,
            genesis_hash,
            block_hash,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36make_usigned_uasset_utransfer_uextrinsic(
    chain_metadata: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    sender_pubkey: &'static [u8; 32],
    recipient_pubkey: &'static [u8; 32],
    send_amount_bytes: &'static [u8; 16],
    transfer_all: bool,
    signature: &'static [u8; 64],
    block_number: u32,
    sender_nonce: u32,
    asset_id: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::make_signed_asset_transfer_extrinsic(
            chain_metadata,
            sender_pubkey,
            recipient_pubkey,
            send_amount_bytes,
            transfer_all,
            signature,
            block_number,
            sender_nonce,
            asset_id,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic21make_usigned_uextrinsic(
    chain_metadata: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    sender_pubkey: &'static [u8; 32],
    recipient_pubkey: &'static [u8; 32],
    send_amount_bytes: &'static [u8; 16],
    transfer_all: bool,
    signature: &'static [u8; 64],
    block_number: u32,
    sender_nonce: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::make_signed_extrinsic(
            chain_metadata,
            sender_pubkey,
            recipient_pubkey,
            send_amount_bytes,
            transfer_all,
            signature,
            block_number,
            sender_nonce,
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvNtCsglSxyCxUa9Z_u18polkadot_uextrinsic23polkadot_uchain_umetadata31parse_uchain_umetadata_ufrom_uscale(
    metadata_bytes: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let metadata_bytes = metadata_bytes.read();
        let __rs_return_value =
            ::polkadot_extrinsic::parse_chain_metadata_from_scale(metadata_bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic14parse_ufee_uinfo(
    input: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let input = input.read();
        let __rs_return_value = ::polkadot_extrinsic::parse_fee_info(input);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic22scale_uencode_umortality(
    number: u32,
    period: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::polkadot_extrinsic::scale_encode_mortality(number, period);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic19scale_uencode_ustring(
    value: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = ::polkadot_extrinsic::scale_encode_string(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24was_uextrinsic_usuccessful(
    events: *mut &'static [u8],
    extrinsic_idx: u32,
    sender: &'static [u8; 32],
    chain_metadata: &'static ::polkadot_extrinsic::CxxPolkadotChainMetadata,
    actual_fee: &'static mut [u8; 16],
) -> bool {
    unsafe {
        let events = events.read();
        ::polkadot_extrinsic::was_extrinsic_successful(
            events,
            extrinsic_idx,
            sender,
            chain_metadata,
            actual_fee,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        ::alloc::string::String,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::polkadot_extrinsic::CxxPolkadotChainMetadata,
            ::alloc::string::String,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        ::alloc::string::String,
    >,
    source: &'static ::core::result::Result<
        ::polkadot_extrinsic::CxxPolkadotChainMetadata,
        ::alloc::string::String,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::polkadot_extrinsic::CxxPolkadotChainMetadata,
            ::alloc::string::String,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::alloc::string::String>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<u8>,
            ::alloc::string::String,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::vec::Vec<u8>, ::alloc::string::String>,
    source: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::alloc::string::String>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::vec::Vec<u8>,::alloc::string::String>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
