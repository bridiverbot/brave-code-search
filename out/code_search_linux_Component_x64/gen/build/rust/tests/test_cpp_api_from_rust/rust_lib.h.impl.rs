// Automatically @generated C++ bindings for the following Rust crate:
// rust_lib_1dc874e1
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e128create_uduration_ufrom_usecondsCsh9G4tFjYpDL_u8rust_uout(
    seconds: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::rust_lib_1dc874e1::create_duration_from_seconds(seconds);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e117create_umultiplierCsh9G4tFjYpDL_u8rust_uout(
    x: i32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::rust_lib_1dc874e1::create_multiplier(x);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e123get_uascii_uchar_uor_upanic(
    code: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::rust_lib_1dc874e1::get_ascii_char_or_panic(code);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e121mul_utwo_uints_uvia_urustCsh9G4tFjYpDL_u8rust_uout(
    x: i32,
    y: i32,
) -> i32 {
    unsafe { ::rust_lib_1dc874e1::mul_two_ints_via_rust(x, y) }
}
