// Automatically @generated C++ bindings for the following Rust crate:
// font_format_1bef5ad5
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::font_format_1bef5ad5::FontFormatFlags>() == 40);
const _: () = assert!(::core::mem::align_of::<::font_format_1bef5ad5::FontFormatFlags>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad515FontFormatFlagsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::font_format_1bef5ad5::FontFormatFlags,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::font_format_1bef5ad5::FontFormatInfo>() == 40);
const _: () = assert!(::core::mem::align_of::<::font_format_1bef5ad5::FontFormatInfo>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::font_format_1bef5ad5::FontFormatInfo as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::font_format_1bef5ad5::FontFormatInfo,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad520get_ufont_uformat_uinfo(
    font_bytes: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let font_bytes = font_bytes.read();
        let __rs_return_value = ::font_format_1bef5ad5::get_font_format_info(font_bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad58is_uavar2Csh9G4tFjYpDL_u8rust_uout(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_avar2(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_ucbdt_ucblc(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_cbdt_cblc(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_ucff2(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_cff2(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv0Csh9G4tFjYpDL_u8rust_uout(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_colrv0(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv1Csh9G4tFjYpDL_u8rust_uout(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_colrv1(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_uebdt_ueblc(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_ebdt_eblc(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_usbix(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_sbix(format_info) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad511is_uvariable(
    format_info: &'static ::font_format_1bef5ad5::FontFormatInfo,
) -> bool {
    unsafe { ::font_format_1bef5ad5::is_variable(format_info) }
}
