// Automatically @generated C++ bindings for the following Rust crate:
// cbor
// Features: always_specialize_generics_in_cpp_api_from_rust

#![no_std]
#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::cbor::CborEvent>() == 24);
const _: () = assert!(::core::mem::align_of::<::cbor::CborEvent>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent3Int0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::Int(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent6String0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::CborEvent::String(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::CborEvent::InvalidUtf8(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesStart0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::BytesStart(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesChunk0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::CborEvent::BytesChunk(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10ArrayStart0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::ArrayStart(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent8MapStart0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::MapStart(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent7Boolean0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::Boolean(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent13NeedsMoreData0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::CborEvent::NeedsMoreData(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::CborEvent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::CborEvent as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::cbor::CborEvent<'static>,
    source: &'static ::cbor::CborEvent<'static>,
) -> () {
    unsafe { <::cbor::CborEvent as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u9CborEventNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::CborEvent<'static>,
    other: &'static ::cbor::CborEvent<'static>,
) -> bool {
    unsafe {
        <::cbor::CborEvent<'static> as ::core::cmp::PartialEq<::cbor::CborEvent<'static>>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::cbor::Config>() == 16);
const _: () = assert!(::core::mem::align_of::<::cbor::Config>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader6ConfigNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Config as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::offset_of!(::cbor::Config, allow_invalid_utf8) == 0);
const _: () = assert!(::core::mem::offset_of!(::cbor::Config, max_nesting_level) == 8);
const _: () = assert!(::core::mem::size_of::<::cbor::Decoder>() == 56);
const _: () = assert!(::core::mem::align_of::<::cbor::Decoder>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Decoder as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::cbor::Decoder,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder19read_ucomplete_uvalue(
    __self: &'static mut ::cbor::Decoder,
    data: &'static mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Decoder::read_complete_value(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder24read_ucomplete_ubytestring(
    __self: &'static mut ::cbor::Decoder,
    data: &'static mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Decoder::read_complete_bytestring(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder10next_uevent(
    __self: &'static mut ::cbor::Decoder,
    data: &'static mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Decoder::next_event(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Decoder::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11with_uconfigCsh9G4tFjYpDL_u8rust_uout(
    config: *mut ::cbor::Config,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let config = config.read();
        let __rs_return_value = ::cbor::Decoder::with_config(config);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11is_ucompleteCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Decoder,
) -> bool {
    unsafe { ::cbor::Decoder::is_complete(__self) }
}
const _: () = assert!(::core::mem::size_of::<::cbor::Error>() == 4);
const _: () = assert!(::core::mem::align_of::<::cbor::Error>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6readerNtB2_u5Error6to_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::cbor::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::cbor::Error::to_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsf_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u5ErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Error,
    other: &'static ::cbor::Error,
) -> bool {
    unsafe { <::cbor::Error as ::core::cmp::PartialEq<::cbor::Error>>::eq(__self, other) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader5ErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Error as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::cbor::Map>() == 24);
const _: () = assert!(::core::mem::align_of::<::cbor::Map>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Map as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::cbor::Map,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Map<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Map as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::cbor::Map<'static>,
    source: &'static ::cbor::Map<'static>,
) -> () {
    unsafe { <::cbor::Map as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Map::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map25from_usorted_uvec_uunchecked(
    vec: *mut ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let vec = vec.read();
        let __rs_return_value = ::cbor::Map::from_sorted_vec_unchecked(vec);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3get(
    __self: &'static ::cbor::Map<'static>,
    key: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Map::get(__self, key);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsv_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3MapNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Map<'static>,
    other: &'static ::cbor::Map<'static>,
) -> bool {
    unsafe {
        <::cbor::Map<'static> as ::core::cmp::PartialEq<::cbor::Map<'static>>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapINtNtCsduaz3xaeU7_u4core7convert4FromINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtB4_u8MapEntryEE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::cbor::Map as ::core::convert::From<
            ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::cbor::MapEntry>() == 56);
const _: () = assert!(::core::mem::align_of::<::cbor::MapEntry>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u8MapEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapEntry<'static>,
    other: &'static ::cbor::MapEntry<'static>,
) -> bool {
    unsafe {
        <::cbor::MapEntry<'static> as ::core::cmp::PartialEq<::cbor::MapEntry<'static>>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::offset_of!(::cbor::MapEntry, key) == 0);
const _: () = assert!(::core::mem::offset_of!(::cbor::MapEntry, value) == 24);
const _: () = assert!(::core::mem::size_of::<::cbor::MapKey>() == 24);
const _: () = assert!(::core::mem::align_of::<::cbor::MapKey>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::MapKey as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey3Int0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::Int(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::MapKey::Bytestring(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey6String0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::MapKey::String(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::MapKey::InvalidUtf8(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey6as_uintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::as_int(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::as_bytestring(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey9as_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::as_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::MapKey::as_invalid_utf8(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyINtNtCsduaz3xaeU7_u4core7convert4IntoNtB4_u5ValueE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::cbor::MapKey as ::core::convert::Into<::cbor::Value<'static>>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXs8_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eq(
    __self: &'static ::cbor::MapKey<'static>,
    other: &'static ::cbor::MapKey<'static>,
) -> bool {
    unsafe {
        <::cbor::MapKey<'static> as ::core::cmp::PartialEq<::cbor::MapKey<'static>>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::cbor::MapKey<'static>,
    rhs: &::cbor::MapKey<'static>,
) -> i8 {
    <::cbor::MapKey<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::cbor::MapKeyKind>() == 4);
const _: () = assert!(::core::mem::align_of::<::cbor::MapKeyKind>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsD_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKeyKind,
    other: &'static ::cbor::MapKeyKind,
) -> bool {
    unsafe { <::cbor::MapKeyKind as ::core::cmp::PartialEq<::cbor::MapKeyKind>>::eq(__self, other) }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::cbor::MapKeyKind,
    rhs: &::cbor::MapKeyKind,
) -> i8 {
    <::cbor::MapKeyKind as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::cbor::ParseResult>() == 40);
const _: () = assert!(::core::mem::align_of::<::cbor::ParseResult>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsm_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u11ParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::ParseResult<'static>,
    other: &'static ::cbor::ParseResult<'static>,
) -> bool {
    unsafe {
        <::cbor::ParseResult<'static> as ::core::cmp::PartialEq<::cbor::ParseResult<'static>>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::offset_of!(::cbor::ParseResult, value) == 0);
const _: () = assert!(::core::mem::offset_of!(::cbor::ParseResult, bytes_consumed) == 32);
const _: () = assert!(::core::mem::size_of::<::cbor::Value>() == 32);
const _: () = assert!(::core::mem::align_of::<::cbor::Value>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Value as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Int0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::Int(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::Value::Bytestring(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value6String0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::Value::String(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value5Array0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::alloc::vec::Vec<::cbor::Value<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::Value::Array(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Map0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::cbor::Map<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::Value::Map(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value7Boolean0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::Boolean(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::cbor::Value::InvalidUtf8(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::cbor::Value,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::Value as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::cbor::Value<'static>,
    source: &'static ::cbor::Value<'static>,
) -> () {
    unsafe { <::cbor::Value as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8to_ubytes(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::to_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value12append_ubytes(
    __self: &'static ::cbor::Value<'static>,
    out: &'static mut ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { ::cbor::Value::append_bytes(__self, out) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value6as_uintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_int(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value7as_uboolCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_bool(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_bytestring(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value9as_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_invalid_utf8(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8as_uarrayCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::as_array(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value11map_uentriesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::Value::map_entries(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsl_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u5ValueNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::Value<'static>,
    other: &'static ::cbor::Value<'static>,
) -> bool {
    unsafe {
        <::cbor::Value<'static> as ::core::cmp::PartialEq<::cbor::Value<'static>>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u6MapKeyE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::cbor::Value as ::core::convert::From<::cbor::MapKey<'static>>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::cbor::ValueKind>() == 4);
const _: () = assert!(::core::mem::align_of::<::cbor::ValueKind>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsh_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u9ValueKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::ValueKind,
    other: &'static ::cbor::ValueKind,
) -> bool {
    unsafe { <::cbor::ValueKind as ::core::cmp::PartialEq<::cbor::ValueKind>>::eq(__self, other) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6reader17parse_uwith_uconfig(
    input: *mut &'static [u8],
    config: *mut ::cbor::Config,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let input = input.read();
        let config = config.read();
        let __rs_return_value = ::cbor::parse_with_config(input, config);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uentry(
    vec: &'static mut ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
    entry: *mut ::cbor::MapEntry<'static>,
) -> () {
    unsafe {
        let entry = entry.read();
        ::cbor::vec_push_entry(vec, entry)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uvalue(
    vec: &'static mut ::alloc::vec::Vec<::cbor::Value<'static>>,
    value: *mut ::cbor::Value<'static>,
) -> () {
    unsafe {
        let value = value.read();
        ::cbor::vec_push_value(vec, value)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values25vec_uwith_ucapacity_uentries(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::vec_with_capacity_entries(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values24vec_uwith_ucapacity_uvalues(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::vec_with_capacity_values(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6writer5write(
    val: &'static ::cbor::Value<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::cbor::write(val);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsb_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmp(
    __self: &'static ::cbor::MapKey<'static>,
    other: &'static ::cbor::MapKey<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::MapKey<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXsG_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::cbor::MapKeyKind,
    other: &'static ::cbor::MapKeyKind,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::cbor::MapKeyKind as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::cbor::MapEntry<'static>> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
    source: &'static ::alloc::vec::Vec<::cbor::MapEntry<'static>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::cbor::MapEntry<'static>> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::cbor::Value<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::cbor::Value<'static>> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::cbor::Value<'static>>,
    source: &'static ::alloc::vec::Vec<::cbor::Value<'static>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::cbor::Value<'static>> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvXs5_uNtCscLqNMIJ1276_u4cbor6readerNtNtB7_u6values5ValueINtNtCsduaz3xaeU7_u4core7convert7TryFromNtB5_u9CborEventE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
    event: *mut ::cbor::CborEvent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let event = event.read();
        let __rs_return_value = <::cbor::Value<'static> as ::core::convert::TryFrom<
            ::cbor::CborEvent<'static>,
        >>::try_from(event);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::cbor::CborEvent<'static>, ::cbor::Error>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::cbor::CborEvent<'static>,::cbor::Error>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::cbor::CborEvent<'static>, ::cbor::Error>,
    source: &'static ::core::result::Result<::cbor::CborEvent<'static>, ::cbor::Error>,
) -> () {
    unsafe {
        <core::result::Result<::cbor::CborEvent<'static>,::cbor::Error>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::cbor::ParseResult<'static>, ::cbor::Error>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::cbor::ParseResult<'static>,::cbor::Error>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::cbor::ParseResult<'static>, ::cbor::Error>,
    source: &'static ::core::result::Result<::cbor::ParseResult<'static>, ::cbor::Error>,
) -> () {
    unsafe {
        <core::result::Result<::cbor::ParseResult<'static>,::cbor::Error>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::cbor::Value<'static>, ::cbor::Error>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::cbor::Value<'static>,::cbor::Error>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::cbor::Value<'static>, ::cbor::Error>,
    source: &'static ::core::result::Result<::cbor::Value<'static>, ::cbor::Error>,
) -> () {
    unsafe {
        <core::result::Result<::cbor::Value<'static>,::cbor::Error>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::cbor::Value<'static>, ::cbor::CborEvent<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::cbor::Value<'static>,
            ::cbor::CborEvent<'static>,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::cbor::Value<'static>, ::cbor::CborEvent<'static>>,
    source: &'static ::core::result::Result<::cbor::Value<'static>, ::cbor::CborEvent<'static>>,
) -> () {
    unsafe {
        <core::result::Result<::cbor::Value<'static>,::cbor::CborEvent<'static>>as::core::clone::Clone>::clone_from(__self,source)
    }
}
