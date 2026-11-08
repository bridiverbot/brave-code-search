// Automatically @generated C++ bindings for the following Rust crate:
// std
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::std::backtrace::Backtrace>() == 48);
const _: () = assert!(::core::mem::align_of::<::std::backtrace::Backtrace>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std9backtrace9BacktraceNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::backtrace::Backtrace,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std9backtraceNtB5_u9Backtrace7capture(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::capture();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std9backtraceNtB5_u9Backtrace13force_ucapture(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::force_capture();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std9backtraceNtB5_u9Backtrace8disabledCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::disabled();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std9backtraceNtB5_u9Backtrace6statusCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::backtrace::Backtrace,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::status(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std9backtrace9BacktraceNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::backtrace::Backtrace,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::backtrace::Backtrace as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::backtrace::BacktraceStatus>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::backtrace::BacktraceStatus>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtCs2P3nRL0oqsP_u3std9backtraceNtB5_u15BacktraceStatusNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::backtrace::BacktraceStatus,
    other: &'static ::std::backtrace::BacktraceStatus,
) -> bool {
    unsafe {
        <::std::backtrace::BacktraceStatus as ::core::cmp::PartialEq<
            ::std::backtrace::BacktraceStatus,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::std::env::Args>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::Args>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env4ArgsNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::Args,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::ArgsOs>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::ArgsOs>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env6ArgsOsNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::ArgsOs,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::SplitPaths>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::env::SplitPaths>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::env::VarError>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::env::VarError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtCs2P3nRL0oqsP_u3std3env8VarError10NotUnicode0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::std::env::VarError::NotUnicode(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env8VarErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::VarError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env8VarErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::VarError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::VarError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env8VarErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::env::VarError,
    source: &'static ::std::env::VarError,
) -> () {
    unsafe { <::std::env::VarError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsq_uNtCs2P3nRL0oqsP_u3std3envNtB5_u8VarErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::VarError,
    other: &'static ::std::env::VarError,
) -> bool {
    unsafe {
        <::std::env::VarError as ::core::cmp::PartialEq<::std::env::VarError>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env8VarErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::VarError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::env::VarError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::env::Vars>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::Vars>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env4VarsNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::Vars,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::VarsOs>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::VarsOs>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std3env6VarsOsNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::VarsOs,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env4args(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::args();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env7args_uos(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::args_os();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env11current_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::current_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env11current_uexe(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::current_exe();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env8home_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::home_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env8temp_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::temp_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env4vars(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::vars();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std3env7vars_uos(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::vars_os();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::ffi::OsString>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::ffi::OsString>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::ffi::OsString as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::ffi::OsString,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::ffi::OsString as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    source: &'static ::std::ffi::OsString,
) -> () {
    unsafe { <::std::ffi::OsString as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString28from_uencoded_ubytes_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    bytes: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bytes = bytes.read();
        let __rs_return_value = ::std::ffi::OsString::from_encoded_bytes_unchecked(bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString18into_uencoded_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::std::ffi::OsString::into_encoded_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString11into_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::std::ffi::OsString::into_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::with_capacity(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString5clearCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
) -> () {
    unsafe { ::std::ffi::OsString::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString8capacityCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
) -> usize {
    unsafe { ::std::ffi::OsString::capacity(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString7reserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
) -> () {
    unsafe { ::std::ffi::OsString::reserve(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString11try_ureserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::try_reserve(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
) -> () {
    unsafe { ::std::ffi::OsString::reserve_exact(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString17try_ureserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::try_reserve_exact(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
) -> () {
    unsafe { ::std::ffi::OsString::shrink_to_fit(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB2_u8OsString9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    min_capacity: usize,
) -> () {
    unsafe { ::std::ffi::OsString::shrink_to(__self, min_capacity) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core7convert4IntoNtNtB8_u4path7PathBufE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::ffi::OsString as ::core::convert::Into<::std::path::PathBuf>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB5_u8OsStringNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: &'static ::std::ffi::OsString,
) -> bool {
    unsafe {
        <::std::ffi::OsString as ::core::cmp::PartialEq<::std::ffi::OsString>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs9_uNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB5_u8OsStringINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: *mut &'static str,
) -> bool {
    unsafe {
        let other = other.read();
        <::std::ffi::OsString as ::core::cmp::PartialEq<str>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2P_uNtCs2P3nRL0oqsP_u3std4pathNtNtNtB8_u3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqNtB6_u7PathBufE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: &'static ::std::path::PathBuf,
) -> bool {
    unsafe {
        <::std::ffi::OsString as ::core::cmp::PartialEq<::std::path::PathBuf>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtCsazOrLUIp1qL_u5alloc6string6StringE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::ffi::OsString as ::core::convert::From<::alloc::string::String>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtB8_u4path7PathBufE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::ffi::OsString as ::core::convert::From<::std::path::PathBuf>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::ffi::OsString,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::ffi::OsString,
    rhs: &::std::ffi::OsString,
) -> i8 {
    <::std::ffi::OsString as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core3cmp10PartialOrdeE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::ffi::OsString,
    rhs: &str,
) -> i8 {
    match <::std::ffi::OsString as ::core::cmp::PartialOrd<str>>::partial_cmp(lhs, rhs) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringINtNtCsoHVEWV6jqw_u4core3cmp10PartialOrdNtNtB8_u4path7PathBufE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::ffi::OsString,
    rhs: &::std::path::PathBuf,
) -> i8 {
    match <::std::ffi::OsString as ::core::cmp::PartialOrd<::std::path::PathBuf>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::std::ffi::os_str::Display>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::ffi::os_str::Display>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr7DisplayNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::os_str::Display<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::ffi::os_str::Display as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::DirBuilder>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::fs::DirBuilder>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsD_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u10DirBuilder3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirBuilder::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsD_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u10DirBuilder9recursiveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::DirBuilder,
    recursive: bool,
) -> &'static mut ::std::fs::DirBuilder {
    unsafe { ::std::fs::DirBuilder::recursive(__self, recursive) }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::DirEntry>() == 40);
const _: () = assert!(::core::mem::align_of::<::std::fs::DirEntry>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs8DirEntryNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::DirEntry,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsA_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8DirEntry4path(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::path(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsA_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8DirEntry8metadata(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::metadata(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsA_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8DirEntry9file_utype(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::file_type(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsA_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8DirEntry9file_uname(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::file_name(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::File>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::fs::File>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs4FileNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::File,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File7optionsCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::options();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File8sync_uall(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::sync_all(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File9sync_udata(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::sync_data(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File4lock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File11lock_ushared(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::lock_shared(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File8try_ulock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File15try_ulock_ushared(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_lock_shared(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File6unlock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::unlock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File7set_ulen(
    __self: &'static ::std::fs::File,
    size: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::set_len(__self, size);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File8metadata(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::metadata(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File9try_uclone(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File15set_upermissions(
    __self: &'static ::std::fs::File,
    perm: *mut ::std::fs::Permissions,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let perm = perm.read();
        let __rs_return_value = ::std::fs::File::set_permissions(__self, perm);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File9set_utimes(
    __self: &'static ::std::fs::File,
    times: *mut ::std::fs::FileTimes,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let times = times.read();
        let __rs_return_value = ::std::fs::File::set_times(__self, times);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4File12set_umodifiedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::File,
    time: *mut ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let time = time.read();
        let __rs_return_value = ::std::fs::File::set_modified(__self, time);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::FileTimes>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::fs::FileTimes>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs9FileTimesNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::FileTimes as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u9FileTimes3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::FileTimes::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u9FileTimes12set_uaccessedCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::FileTimes,
    t: *mut ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let t = t.read();
        let __rs_return_value = ::std::fs::FileTimes::set_accessed(__self, t);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u9FileTimes12set_umodifiedCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::FileTimes,
    t: *mut ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let t = t.read();
        let __rs_return_value = ::std::fs::FileTimes::set_modified(__self, t);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::FileType>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::fs::FileType>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsu_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8FileType6is_udirCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_dir(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsu_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8FileType7is_ufileCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_file(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsu_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8FileType10is_usymlinkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_symlink(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsX_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8FileTypeNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
    other: &'static ::std::fs::FileType,
) -> bool {
    unsafe {
        <::std::fs::FileType as ::core::cmp::PartialEq<::std::fs::FileType>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs8FileTypeNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::fs::FileType,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
const _: () = assert!(::core::mem::size_of::<::std::fs::Metadata>() == 176);
const _: () = assert!(::core::mem::align_of::<::std::fs::Metadata>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs8MetadataNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::Metadata as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs8MetadataNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Metadata,
    source: &'static ::std::fs::Metadata,
) -> () {
    unsafe { <::std::fs::Metadata as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata9file_utypeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::file_type(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata6is_udirCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_dir(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata7is_ufileCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_file(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata10is_usymlinkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_symlink(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> u64 {
    unsafe { ::std::fs::Metadata::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata11permissionsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::permissions(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata8modified(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::modified(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata8accessed(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::accessed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsm_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u8Metadata7created(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::created(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::OpenOptions>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::fs::OpenOptions>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs11OpenOptionsNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::OpenOptions,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::OpenOptions as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs11OpenOptionsNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    source: &'static ::std::fs::OpenOptions,
) -> () {
    unsafe { <::std::fs::OpenOptions as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::OpenOptions::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions4readCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    read: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::read(__self, read) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions5writeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    write: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::write(__self, write) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions6appendCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    append: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::append(__self, append) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions8truncateCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    truncate: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::truncate(__self, truncate) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions6createCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    create: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::create(__self, create) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsj_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11OpenOptions10create_unewCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    create_new: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::create_new(__self, create_new) }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::Permissions>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::fs::Permissions>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs11PermissionsNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Permissions,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::Permissions as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs11PermissionsNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Permissions,
    source: &'static ::std::fs::Permissions,
) -> () {
    unsafe { <::std::fs::Permissions as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMst_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11Permissions8readonlyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Permissions,
) -> bool {
    unsafe { ::std::fs::Permissions::readonly(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMst_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11Permissions12set_ureadonlyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Permissions,
    readonly: bool,
) -> () {
    unsafe { ::std::fs::Permissions::set_readonly(__self, readonly) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsQ_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u11PermissionsNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Permissions,
    other: &'static ::std::fs::Permissions,
) -> bool {
    unsafe {
        <::std::fs::Permissions as ::core::cmp::PartialEq<::std::fs::Permissions>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::ReadDir>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::fs::ReadDir>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs7ReadDirNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::ReadDir,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::fs::TryLockError>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::fs::TryLockError>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs12TryLockErrorNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::TryLockError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std2fs12TryLockErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::TryLockError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::fs::TryLockError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::hash::DefaultHasher>() == 72);
const _: () = assert!(::core::mem::align_of::<::std::hash::DefaultHasher>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random13DefaultHasherNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::DefaultHasher as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random13DefaultHasherNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::DefaultHasher,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::DefaultHasher as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random13DefaultHasherNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::DefaultHasher,
    source: &'static ::std::hash::DefaultHasher,
) -> () {
    unsafe { <::std::hash::DefaultHasher as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4hash6randomNtB5_u13DefaultHasher3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::hash::DefaultHasher::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::hash::RandomState>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::hash::RandomState>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random11RandomStateNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::RandomState as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random11RandomStateNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::RandomState,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::RandomState as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4hash6random11RandomStateNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::RandomState,
    source: &'static ::std::hash::RandomState,
) -> () {
    unsafe { <::std::hash::RandomState as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std4hash6randomNtB2_u11RandomState3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::hash::RandomState::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::Error>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Error>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorNtNtNtB8_u3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::Error,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCsoHVEWV6jqw_u4core2io5errorNtB5_u5Error12raw_uos_uerrorCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Error::raw_os_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCsoHVEWV6jqw_u4core2io5errorNtB5_u5Error4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Error::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtCs2P3nRL0oqsP_u3std2fs12TryLockErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::fs::TryLockError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::io::Error as ::core::convert::From<::std::fs::TryLockError>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorINtNtB8_u7convert4FromNtB4_u9ErrorKindE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::io::ErrorKind,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::io::Error as ::core::convert::From<::std::io::ErrorKind>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtNtCsazOrLUIp1qL_u5alloc3ffi5c_ustr8NulErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::ffi::NulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::io::Error as ::core::convert::From<::alloc::ffi::NulError>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::collections::TryReserveError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::std::io::Error as ::core::convert::From<
            ::alloc::collections::TryReserveError,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error5ErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Error as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::ErrorKind>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::io::ErrorKind>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error9ErrorKindINtNtB8_u7convert4IntoNtB4_u5ErrorE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::ErrorKind,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::io::ErrorKind as ::core::convert::Into<::std::io::Error>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXss_uNtNtCsoHVEWV6jqw_u4core2io5errorNtB5_u9ErrorKindNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::ErrorKind,
    other: &'static ::std::io::ErrorKind,
) -> bool {
    unsafe {
        <::std::io::ErrorKind as ::core::cmp::PartialEq<::std::io::ErrorKind>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error9ErrorKindNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::ErrorKind,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::ErrorKind as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error9ErrorKindNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::io::ErrorKind,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCsoHVEWV6jqw_u4core2io5error9ErrorKindNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::io::ErrorKind,
    rhs: &::std::io::ErrorKind,
) -> i8 {
    <::std::io::ErrorKind as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::io::IoSlice>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::IoSlice>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u7IoSlice3newCsh9G4tFjYpDL_u8rust_uout(
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::io::IoSlice::new(buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u7IoSlice7advanceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::IoSlice<'static>,
    n: usize,
) -> () {
    unsafe { ::std::io::IoSlice::advance(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u7IoSlice14advance_uslicesCsh9G4tFjYpDL_u8rust_uout(
    bufs: &'static mut &'static mut [::std::io::IoSlice<'static>],
    n: usize,
) -> () {
    unsafe { ::std::io::IoSlice::advance_slices(bufs, n) }
}
const _: () = assert!(::core::mem::size_of::<::std::io::IoSliceMut>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::IoSliceMut>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u10IoSliceMut3newCsh9G4tFjYpDL_u8rust_uout(
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::io::IoSliceMut::new(buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u10IoSliceMut7advanceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::IoSliceMut<'static>,
    n: usize,
) -> () {
    unsafe { ::std::io::IoSliceMut::advance(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCsoHVEWV6jqw_u4core2io8io_usliceNtB5_u10IoSliceMut14advance_uslicesCsh9G4tFjYpDL_u8rust_uout(
    bufs: &'static mut &'static mut [::std::io::IoSliceMut<'static>],
    n: usize,
) -> () {
    unsafe { ::std::io::IoSliceMut::advance_slices(bufs, n) }
}
const _: () = assert!(::core::mem::size_of::<::std::io::PipeReader>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::io::PipeReader>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io4pipe10PipeReaderNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::PipeReader,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeReader9try_uclone(
    __self: &'static ::std::io::PipeReader,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::PipeReader::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::PipeWriter>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::io::PipeWriter>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io4pipe10PipeWriterNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::PipeWriter,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs3_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeWriter9try_uclone(
    __self: &'static ::std::io::PipeWriter,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::PipeWriter::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::Repeat>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::io::Repeat>() == 1);
const _: () = assert!(::core::mem::size_of::<::std::io::SeekFrom>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::SeekFrom>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtNtCsoHVEWV6jqw_u4core2io4seek8SeekFrom5Start0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::Start(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtNtCsoHVEWV6jqw_u4core2io4seek8SeekFrom3End0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::End(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtNtCsoHVEWV6jqw_u4core2io4seek8SeekFrom7Current0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::Current(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtNtCsoHVEWV6jqw_u4core2io4seekNtB5_u8SeekFromNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::SeekFrom,
    other: &'static ::std::io::SeekFrom,
) -> bool {
    unsafe {
        <::std::io::SeekFrom as ::core::cmp::PartialEq<::std::io::SeekFrom>>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::Stderr>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Stderr>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsk_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6Stderr4lock(
    __self: &'static ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stderr::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io5stdio6StderrINtNtCsoHVEWV6jqw_u4core7convert4IntoNtNtB8_u7process5StdioE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::io::Stderr as ::core::convert::Into<::std::process::Stdio>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::StderrLock>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::StderrLock>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io5stdio10StderrLockNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StderrLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::Stdin>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Stdin>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5Stdin4lock(
    __self: &'static ::std::io::Stdin,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdin::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs1_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5Stdin9read_uline(
    __self: &'static ::std::io::Stdin,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdin::read_line(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::StdinLock>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::StdinLock>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io5stdio9StdinLockNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StdinLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::Stdout>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Stdout>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsa_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6Stdout4lock(
    __self: &'static ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdout::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io5stdio6StdoutINtNtCsoHVEWV6jqw_u4core7convert4IntoNtNtB8_u7process5StdioE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::io::Stdout as ::core::convert::Into<::std::process::Stdio>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::StdoutLock>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::StdoutLock>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std2io5stdio10StdoutLockNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StdoutLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::WriterPanicked>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::io::WriterPanicked>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtNtCsazOrLUIp1qL_u5alloc2io8buffered9bufwriter14WriterPanickedNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::WriterPanicked,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtNtCsazOrLUIp1qL_u5alloc2io8buffered9bufwriter14WriterPanickedNtNtBa_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::WriterPanicked,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::WriterPanicked as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std2io4pipe4pipeCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::pipe();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCsoHVEWV6jqw_u4core2io4util6repeatCsh9G4tFjYpDL_u8rust_uout(
    byte: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::repeat(byte);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std2io5stdio6stderrCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::stderr();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std2io5stdio5stdin(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::stdin();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std2io5stdio6stdout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::stdout();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::net::Incoming>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::net::Incoming>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::net::Shutdown>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::net::Shutdown>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std3netNtB5_u8ShutdownNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::net::Shutdown,
    other: &'static ::std::net::Shutdown,
) -> bool {
    unsafe {
        <::std::net::Shutdown as ::core::cmp::PartialEq<::std::net::Shutdown>>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::std::net::TcpListener>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::net::TcpListener>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3net3tcp11TcpListenerNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::TcpListener,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener10local_uaddr(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener9try_uclone(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener6accept(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::accept(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener8incomingCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::incoming(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener7set_uttl(
    __self: &'static ::std::net::TcpListener,
    ttl: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::set_ttl(__self, ttl);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener3ttl(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener11set_uonly_uv6(
    __self: &'static ::std::net::TcpListener,
    only_v6: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::set_only_v6(__self, only_v6);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener7only_uv6(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::only_v6(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener10take_uerror(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs7_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u11TcpListener15set_unonblocking(
    __self: &'static ::std::net::TcpListener,
    nonblocking: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::set_nonblocking(__self, nonblocking);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::net::TcpStream>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::net::TcpStream>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3net3tcp9TcpStreamNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::TcpStream,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream15connect_utimeout(
    addr: &'static ::core::net::SocketAddr,
    timeout: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let timeout = timeout.read();
        let __rs_return_value = ::std::net::TcpStream::connect_timeout(addr, timeout);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream9peer_uaddr(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::peer_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream10local_uaddr(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream8shutdown(
    __self: &'static ::std::net::TcpStream,
    how: *mut ::std::net::Shutdown,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let how = how.read();
        let __rs_return_value = ::std::net::TcpStream::shutdown(__self, how);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream9try_uclone(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream16set_uread_utimeout(
    __self: &'static ::std::net::TcpStream,
    dur: *mut ::core::option::Option<::core::time::Duration>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let dur = dur.read();
        let __rs_return_value = ::std::net::TcpStream::set_read_timeout(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream17set_uwrite_utimeout(
    __self: &'static ::std::net::TcpStream,
    dur: *mut ::core::option::Option<::core::time::Duration>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let dur = dur.read();
        let __rs_return_value = ::std::net::TcpStream::set_write_timeout(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream12read_utimeout(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::read_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream13write_utimeout(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::write_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream4peek(
    __self: &'static ::std::net::TcpStream,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::TcpStream::peek(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream11set_unodelay(
    __self: &'static ::std::net::TcpStream,
    nodelay: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::set_nodelay(__self, nodelay);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream7nodelay(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::nodelay(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream7set_uttl(
    __self: &'static ::std::net::TcpStream,
    ttl: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::set_ttl(__self, ttl);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream3ttl(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream10take_uerror(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB2_u9TcpStream15set_unonblocking(
    __self: &'static ::std::net::TcpStream,
    nonblocking: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::set_nonblocking(__self, nonblocking);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::net::UdpSocket>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::net::UdpSocket>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std3net3udp9UdpSocketNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::UdpSocket,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket9recv_ufrom(
    __self: &'static ::std::net::UdpSocket,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::UdpSocket::recv_from(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket9peek_ufrom(
    __self: &'static ::std::net::UdpSocket,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::UdpSocket::peek_from(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket9peer_uaddr(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::peer_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket10local_uaddr(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket9try_uclone(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket16set_uread_utimeout(
    __self: &'static ::std::net::UdpSocket,
    dur: *mut ::core::option::Option<::core::time::Duration>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let dur = dur.read();
        let __rs_return_value = ::std::net::UdpSocket::set_read_timeout(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket17set_uwrite_utimeout(
    __self: &'static ::std::net::UdpSocket,
    dur: *mut ::core::option::Option<::core::time::Duration>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let dur = dur.read();
        let __rs_return_value = ::std::net::UdpSocket::set_write_timeout(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket12read_utimeout(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::read_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket13write_utimeout(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::write_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket13set_ubroadcast(
    __self: &'static ::std::net::UdpSocket,
    broadcast: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::set_broadcast(__self, broadcast);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket9broadcast(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::broadcast(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket21set_umulticast_uloop_uv4(
    __self: &'static ::std::net::UdpSocket,
    multicast_loop_v4: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::set_multicast_loop_v4(__self, multicast_loop_v4);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket17multicast_uloop_uv4(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_loop_v4(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket20set_umulticast_uttl_uv4(
    __self: &'static ::std::net::UdpSocket,
    multicast_ttl_v4: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::set_multicast_ttl_v4(__self, multicast_ttl_v4);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket16multicast_uttl_uv4(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_ttl_v4(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket21set_umulticast_uloop_uv6(
    __self: &'static ::std::net::UdpSocket,
    multicast_loop_v6: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::set_multicast_loop_v6(__self, multicast_loop_v6);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket17multicast_uloop_uv6(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_loop_v6(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket7set_uttl(
    __self: &'static ::std::net::UdpSocket,
    ttl: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::set_ttl(__self, ttl);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket3ttl(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket17join_umulticast_uv4(
    __self: &'static ::std::net::UdpSocket,
    multiaddr: &'static ::core::net::Ipv4Addr,
    interface: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::join_multicast_v4(__self, multiaddr, interface);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket17join_umulticast_uv6(
    __self: &'static ::std::net::UdpSocket,
    multiaddr: &'static ::core::net::Ipv6Addr,
    interface: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::join_multicast_v6(__self, multiaddr, interface);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket18leave_umulticast_uv4(
    __self: &'static ::std::net::UdpSocket,
    multiaddr: &'static ::core::net::Ipv4Addr,
    interface: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::leave_multicast_v4(__self, multiaddr, interface);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket18leave_umulticast_uv6(
    __self: &'static ::std::net::UdpSocket,
    multiaddr: &'static ::core::net::Ipv6Addr,
    interface: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::std::net::UdpSocket::leave_multicast_v6(__self, multiaddr, interface);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket10take_uerror(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket4send(
    __self: &'static ::std::net::UdpSocket,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::UdpSocket::send(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket4recv(
    __self: &'static ::std::net::UdpSocket,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::UdpSocket::recv(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket4peek(
    __self: &'static ::std::net::UdpSocket,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = ::std::net::UdpSocket::peek(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std3net3udpNtB2_u9UdpSocket15set_unonblocking(
    __self: &'static ::std::net::UdpSocket,
    nonblocking: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::set_nonblocking(__self, nonblocking);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::panic::PanicHookInfo>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::panic::PanicHookInfo>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std5panicNtB2_u13PanicHookInfo14payload_uas_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::panic::PanicHookInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::panic::PanicHookInfo::payload_as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std5panicNtB2_u13PanicHookInfo8locationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::panic::PanicHookInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::panic::PanicHookInfo::location(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std5panic13PanicHookInfoNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::panic::PanicHookInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::panic::PanicHookInfo as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std9panicking8set_uhook(
    hook: ::crubit_support::bridge::FnPayload,
) -> () {
    unsafe {
        ::std::panic::set_hook(::alloc::boxed::Box::new(
            move |__arg_0: &::std::panic::PanicHookInfo<'_>| {
                let __invoker: unsafe extern "C" fn(
                    *mut core::ffi::c_void,
                    *const ::std::panic::PanicHookInfo<'_>,
                ) -> () = unsafe { ::core::mem::transmute(hook.invoker()) };
                unsafe {
                    __invoker(hook.data(), __arg_0 as *const _);
                }
            },
        ))
    }
}
const _: () = assert!(::core::mem::size_of::<::std::path::Ancestors>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::path::Ancestors>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::path::Component>() == 56);
const _: () = assert!(::core::mem::align_of::<::std::path::Component>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtCs2P3nRL0oqsP_u3std4path9Component6Prefix0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::std::path::PrefixComponent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::std::path::Component::Prefix(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1Y_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u9ComponentNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Component<'static>,
    other: &'static ::std::path::Component<'static>,
) -> bool {
    unsafe {
        <::std::path::Component<'static> as ::core::cmp::PartialEq<
            ::std::path::Component<'static>,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path9ComponentNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::Component<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path9ComponentNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Component<'static>,
    rhs: &::std::path::Component<'static>,
) -> i8 {
    <::std::path::Component<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::Components>() == 64);
const _: () = assert!(::core::mem::align_of::<::std::path::Components>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path10ComponentsNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Components<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::Components as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path10ComponentsNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::Components<'static>,
    source: &'static ::std::path::Components<'static>,
) -> () {
    unsafe { <::std::path::Components as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsl_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u10ComponentsNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Components<'static>,
    other: &'static ::std::path::Components<'static>,
) -> bool {
    unsafe {
        <::std::path::Components<'static> as ::core::cmp::PartialEq<
            ::std::path::Components<'static>,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path10ComponentsNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Components<'static>,
    rhs: &::std::path::Components<'static>,
) -> i8 {
    <::std::path::Components<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::Display>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::path::Display>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7DisplayNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Display<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Display as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::path::Iter>() == 64);
const _: () = assert!(::core::mem::align_of::<::std::path::Iter>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path4IterNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Iter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::Iter as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path4IterNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::Iter<'static>,
    source: &'static ::std::path::Iter<'static>,
) -> () {
    unsafe { <::std::path::Iter as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::std::path::PathBuf>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::path::PathBuf>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::PathBuf as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::path::PathBuf,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::PathBuf as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    source: &'static ::std::path::PathBuf,
) -> () {
    unsafe { <::std::path::PathBuf as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::with_capacity(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf3pop(
    __self: &'static mut ::std::path::PathBuf,
) -> bool {
    unsafe { ::std::path::PathBuf::pop(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf16as_umut_uos_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> &'static mut ::std::ffi::OsString {
    unsafe { ::std::path::PathBuf::as_mut_os_string(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf14into_uos_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::std::path::PathBuf::into_os_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf11into_ustring(
    __self: *mut ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::std::path::PathBuf::into_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf8capacityCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
) -> usize {
    unsafe { ::std::path::PathBuf::capacity(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf5clearCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> () {
    unsafe { ::std::path::PathBuf::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf7reserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
) -> () {
    unsafe { ::std::path::PathBuf::reserve(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf11try_ureserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::try_reserve(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
) -> () {
    unsafe { ::std::path::PathBuf::reserve_exact(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf17try_ureserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::try_reserve_exact(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> () {
    unsafe { ::std::path::PathBuf::shrink_to_fit(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsr_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBuf9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    min_capacity: usize,
) -> () {
    unsafe { ::std::path::PathBuf::shrink_to(__self, min_capacity) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufINtNtCsoHVEWV6jqw_u4core7convert4IntoNtNtNtB6_u3ffi6os_ustr8OsStringE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::path::PathBuf as ::core::convert::Into<::std::ffi::OsString>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsW_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBufNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::std::path::PathBuf,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::std::path::PathBuf>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsX_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBufINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: *mut &'static str,
) -> bool {
    unsafe {
        let other = other.read();
        <::std::path::PathBuf as ::core::cmp::PartialEq<str>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsZ_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u7PathBufINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqNtNtCsazOrLUIp1qL_u5alloc6string6StringE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::alloc::string::String,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::alloc::string::String>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2O_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u7PathBufINtNtCsoHVEWV6jqw_u4core3cmp9PartialEqNtNtNtB8_u3ffi6os_ustr8OsStringE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::std::ffi::OsString,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::std::ffi::OsString>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtNtB6_u3ffi6os_ustr8OsStringE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::path::PathBuf as ::core::convert::From<::std::ffi::OsString>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtCsazOrLUIp1qL_u5alloc6string6StringE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::path::PathBuf as ::core::convert::From<::alloc::string::String>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::PathBuf,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::PathBuf,
    rhs: &::std::path::PathBuf,
) -> i8 {
    <::std::path::PathBuf as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path7PathBufINtNtCsoHVEWV6jqw_u4core3cmp10PartialOrdNtNtNtB6_u3ffi6os_ustr8OsStringE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::PathBuf,
    rhs: &::std::ffi::OsString,
) -> i8 {
    match <::std::path::PathBuf as ::core::cmp::PartialOrd<::std::ffi::OsString>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::std::path::Prefix>() == 40);
const _: () = assert!(::core::mem::align_of::<::std::path::Prefix>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtCs2P3nRL0oqsP_u3std4path6Prefix12VerbatimDisk0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::Prefix::VerbatimDisk(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNcNtNtNtCs2P3nRL0oqsP_u3std4path6Prefix4Disk0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::Prefix::Disk(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4pathNtB2_u6Prefix11is_uverbatimCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Prefix<'static>,
) -> bool {
    unsafe { ::std::path::Prefix::is_verbatim(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1G_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u6PrefixNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Prefix<'static>,
    other: &'static ::std::path::Prefix<'static>,
) -> bool {
    unsafe {
        <::std::path::Prefix<'static> as ::core::cmp::PartialEq<::std::path::Prefix<'static>>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path6PrefixNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::Prefix<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path6PrefixNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Prefix<'static>,
    rhs: &::std::path::Prefix<'static>,
) -> i8 {
    <::std::path::Prefix<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::PrefixComponent>() == 56);
const _: () = assert!(::core::mem::align_of::<::std::path::PrefixComponent>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs_uNtCs2P3nRL0oqsP_u3std4pathNtB4_u15PrefixComponent4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PrefixComponent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PrefixComponent::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u15PrefixComponentNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PrefixComponent<'static>,
    other: &'static ::std::path::PrefixComponent<'static>,
) -> bool {
    unsafe {
        <::std::path::PrefixComponent<'static> as ::core::cmp::PartialEq<
            ::std::path::PrefixComponent<'static>,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path15PrefixComponentNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::PrefixComponent<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4path15PrefixComponentNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::PrefixComponent<'static>,
    rhs: &::std::path::PrefixComponent<'static>,
) -> i8 {
    <::std::path::PrefixComponent<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std4path12is_useparatorCsh9G4tFjYpDL_u8rust_uout(
    c: *mut char,
) -> bool {
    unsafe {
        let c = c.read();
        ::std::path::is_separator(c)
    }
}
const _: () = assert!(::core::mem::size_of::<::std::process::Child>() == 28);
const _: () = assert!(::core::mem::align_of::<::std::process::Child>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5ChildNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Child,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsT_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Child4kill(
    __self: &'static mut ::std::process::Child,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Child::kill(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsT_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Child2idCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Child,
) -> u32 {
    unsafe { ::std::process::Child::id(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsT_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Child4wait(
    __self: &'static mut ::std::process::Child,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Child::wait(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsT_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Child8try_uwait(
    __self: &'static mut ::std::process::Child,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Child::try_wait(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::offset_of!(::std::process::Child, stdin) == 16);
const _: () = assert!(::core::mem::offset_of!(::std::process::Child, stdout) == 20);
const _: () = assert!(::core::mem::offset_of!(::std::process::Child, stderr) == 24);
const _: () = assert!(::core::mem::size_of::<::std::process::ChildStderr>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ChildStderr>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process11ChildStderrNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStderr,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::ChildStdin>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ChildStdin>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process10ChildStdinNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStdin,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::ChildStdout>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ChildStdout>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process11ChildStdoutNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStdout,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::Command>() == 200);
const _: () = assert!(::core::mem::align_of::<::std::process::Command>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process7CommandNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Command,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command9env_uclear(
    __self: &'static mut ::std::process::Command,
) -> &'static mut ::std::process::Command {
    unsafe { ::std::process::Command::env_clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRINvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB6_u7Command5stdinNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stdin(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRINvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB6_u7Command6stdoutNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stdout(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRINvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB6_u7Command6stderrNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stderr(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command5spawn(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::spawn(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command6output(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::output(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command6status(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::status(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command8get_uargs(
    __self: &'static ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::get_args(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsi_uNtCs2P3nRL0oqsP_u3std7processNtB5_u7Command8get_uenvsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::get_envs(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::process::CommandArgs>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::process::CommandArgs>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::process::CommandEnvs>() == 72);
const _: () = assert!(::core::mem::align_of::<::std::process::CommandEnvs>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::process::ExitCode>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::process::ExitCode>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process8ExitCodeNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ExitCode as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1m_uNtCs2P3nRL0oqsP_u3std7processNtB6_u8ExitCodeNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitCode,
    other: &'static ::std::process::ExitCode,
) -> bool {
    unsafe {
        <::std::process::ExitCode as ::core::cmp::PartialEq<::std::process::ExitCode>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process8ExitCodeINtNtCsoHVEWV6jqw_u4core7convert4FromhE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::ExitCode as ::core::convert::From<u8>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::process::ExitStatus>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ExitStatus>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process10ExitStatusNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ExitStatus as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsF_uNtCs2P3nRL0oqsP_u3std7processNtB5_u10ExitStatus7successCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
) -> bool {
    unsafe { ::std::process::ExitStatus::success(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsF_uNtCs2P3nRL0oqsP_u3std7processNtB5_u10ExitStatus4codeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::ExitStatus::code(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs14_uNtCs2P3nRL0oqsP_u3std7processNtB6_u10ExitStatusNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
    other: &'static ::std::process::ExitStatus,
) -> bool {
    unsafe {
        <::std::process::ExitStatus as ::core::cmp::PartialEq<::std::process::ExitStatus>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process10ExitStatusNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::ExitStatus as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::process::Output>() == 56);
const _: () = assert!(::core::mem::align_of::<::std::process::Output>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process6OutputNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Output,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process6OutputNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Output,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::Output as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process6OutputNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Output,
    source: &'static ::std::process::Output,
) -> () {
    unsafe { <::std::process::Output as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs10_uNtCs2P3nRL0oqsP_u3std7processNtB6_u6OutputNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Output,
    other: &'static ::std::process::Output,
) -> bool {
    unsafe {
        <::std::process::Output as ::core::cmp::PartialEq<::std::process::Output>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::offset_of!(::std::process::Output, stdout) == 0);
const _: () = assert!(::core::mem::offset_of!(::std::process::Output, stderr) == 24);
const _: () = assert!(::core::mem::offset_of!(::std::process::Output, status) == 48);
const _: () = assert!(::core::mem::size_of::<::std::process::Stdio>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::process::Stdio>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Stdio,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMst_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Stdio5pipedCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::piped();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMst_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Stdio7inheritCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::inherit();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMst_uNtCs2P3nRL0oqsP_u3std7processNtB5_u5Stdio4nullCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::null();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtB4_u10ChildStdinE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::process::ChildStdin,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::std::process::Stdio as ::core::convert::From<
            ::std::process::ChildStdin,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtB4_u11ChildStdoutE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::process::ChildStdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::std::process::Stdio as ::core::convert::From<
            ::std::process::ChildStdout,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtB4_u11ChildStderrE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::process::ChildStderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::std::process::Stdio as ::core::convert::From<
            ::std::process::ChildStderr,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtB6_u2fs4FileE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::process::Stdio as ::core::convert::From<::std::fs::File>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtNtB6_u2io5stdio6StdoutE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::process::Stdio as ::core::convert::From<::std::io::Stdout>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtNtB6_u2io5stdio6StderrE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::process::Stdio as ::core::convert::From<::std::io::Stderr>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtNtB6_u2io4pipe10PipeWriterE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::io::PipeWriter,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::process::Stdio as ::core::convert::From<::std::io::PipeWriter>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std7process5StdioINtNtCsoHVEWV6jqw_u4core7convert4FromNtNtNtB6_u2io4pipe10PipeReaderE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::std::io::PipeReader,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::std::process::Stdio as ::core::convert::From<::std::io::PipeReader>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std7process5abort() -> !
{
    unsafe { ::std::process::abort() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std7process4exit(
    code: i32,
) -> ! {
    unsafe { ::std::process::exit(code) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtCs2P3nRL0oqsP_u3std7process2id() -> u32
{
    unsafe { ::std::process::id() }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Barrier>() == 40);
const _: () = assert!(::core::mem::align_of::<::std::sync::Barrier>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync7barrierNtB5_u7Barrier3newCsh9G4tFjYpDL_u8rust_uout(
    n: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Barrier::new(n);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync7barrierNtB5_u7Barrier4wait(
    __self: &'static ::std::sync::Barrier,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Barrier::wait(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::BarrierWaitResult>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::sync::BarrierWaitResult>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs2_uNtNtCs2P3nRL0oqsP_u3std4sync7barrierNtB5_u17BarrierWaitResult9is_uleaderCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::BarrierWaitResult,
) -> bool {
    unsafe { ::std::sync::BarrierWaitResult::is_leader(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Condvar>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::sync::Condvar>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtNtCs2P3nRL0oqsP_u3std4sync6poison7condvar7CondvarNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::sync::Condvar as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtNtCs2P3nRL0oqsP_u3std4sync6poison7condvarNtB2_u7Condvar3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Condvar::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtNtCs2P3nRL0oqsP_u3std4sync6poison7condvarNtB2_u7Condvar10notify_uone(
    __self: &'static ::std::sync::Condvar,
) -> () {
    unsafe { ::std::sync::Condvar::notify_one(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtNtCs2P3nRL0oqsP_u3std4sync6poison7condvarNtB2_u7Condvar10notify_uall(
    __self: &'static ::std::sync::Condvar,
) -> () {
    unsafe { ::std::sync::Condvar::notify_all(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Once>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::sync::Once>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4sync4once4OnceNtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::sync::Once as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB5_u4Once3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Once::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRINvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB6_u4Once9call_uonceQDINtNtNtCsoHVEWV6jqw_u4core3ops8function5FnMutuEp6OutputuEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
    f: ::crubit_support::bridge::FnRefPayload,
) -> () {
    unsafe {
        ::std::sync::Once::call_once(__self, move || {
            let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void) -> () =
                unsafe { ::core::mem::transmute(f.invoker()) };
            unsafe {
                __invoker(f.data());
            }
        })
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRINvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB6_u4Once15call_uonce_uforceQDG_uINtNtNtCsoHVEWV6jqw_u4core3ops8function5FnMutTRL0_uNtB6_u9OnceStateEEp6OutputuEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
    f: ::crubit_support::bridge::FnRefPayload,
) -> () {
    unsafe {
        ::std::sync::Once::call_once_force(__self, move |__arg_0: &::std::sync::OnceState| {
            let __invoker: unsafe extern "C" fn(
                *mut core::ffi::c_void,
                *const ::std::sync::OnceState,
            ) -> () = unsafe { ::core::mem::transmute(f.invoker()) };
            unsafe {
                __invoker(f.data(), __arg_0 as *const _);
            }
        })
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB5_u4Once12is_ucompletedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> bool {
    unsafe { ::std::sync::Once::is_completed(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB5_u4Once4waitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> () {
    unsafe { ::std::sync::Once::wait(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs0_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB5_u4Once10wait_uforceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> () {
    unsafe { ::std::sync::Once::wait_force(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::OnceState>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::sync::OnceState>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs3_uNtNtCs2P3nRL0oqsP_u3std4sync4onceNtB5_u9OnceState11is_upoisonedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::OnceState,
) -> bool {
    unsafe { ::std::sync::OnceState::is_poisoned(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::WaitTimeoutResult>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::sync::WaitTimeoutResult>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4syncNtB2_u17WaitTimeoutResult9timed_uoutCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::WaitTimeoutResult,
) -> bool {
    unsafe { ::std::sync::WaitTimeoutResult::timed_out(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1_uNtCs2P3nRL0oqsP_u3std4syncNtB5_u17WaitTimeoutResultNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::WaitTimeoutResult,
    other: &'static ::std::sync::WaitTimeoutResult,
) -> bool {
    unsafe {
        <::std::sync::WaitTimeoutResult as::core::cmp::PartialEq<::std::sync::WaitTimeoutResult>>::eq(__self,other)
    }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::mpsc::RecvTimeoutError>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::sync::mpsc::RecvTimeoutError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsU_uNtNtCs2P3nRL0oqsP_u3std4sync4mpscNtB5_u16RecvTimeoutErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::mpsc::RecvTimeoutError,
    other: &'static ::std::sync::mpsc::RecvTimeoutError,
) -> bool {
    unsafe {
        <::std::sync::mpsc::RecvTimeoutError as ::core::cmp::PartialEq<
            ::std::sync::mpsc::RecvTimeoutError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4sync4mpsc16RecvTimeoutErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::mpsc::RecvTimeoutError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::sync::mpsc::RecvTimeoutError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::mpsc::TryRecvError>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::sync::mpsc::TryRecvError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsN_uNtNtCs2P3nRL0oqsP_u3std4sync4mpscNtB5_u12TryRecvErrorNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::mpsc::TryRecvError,
    other: &'static ::std::sync::mpsc::TryRecvError,
) -> bool {
    unsafe {
        <::std::sync::mpsc::TryRecvError as ::core::cmp::PartialEq<
            ::std::sync::mpsc::TryRecvError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std4sync4mpsc12TryRecvErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::mpsc::TryRecvError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::sync::mpsc::TryRecvError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::thread::Builder>() == 48);
const _: () = assert!(::core::mem::align_of::<::std::thread::Builder>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread7builder7BuilderNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Builder,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtNtCs2P3nRL0oqsP_u3std6thread7builderNtB2_u7Builder3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::Builder::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::thread::Scope>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::thread::Scope>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread6scoped5ScopeNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Scope,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::thread::Thread>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::thread::Thread>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread6thread6ThreadNtNtNtCsoHVEWV6jqw_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Thread,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread6thread6ThreadNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::thread::Thread as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread6thread6ThreadNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::thread::Thread,
    source: &'static ::std::thread::Thread,
) -> () {
    unsafe { <::std::thread::Thread as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs_uNtNtCs2P3nRL0oqsP_u3std6thread6threadNtB4_u6Thread6unparkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
) -> () {
    unsafe { ::std::thread::Thread::unpark(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs_uNtNtCs2P3nRL0oqsP_u3std6thread6threadNtB4_u6Thread2idCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::Thread::id(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs_uNtNtCs2P3nRL0oqsP_u3std6thread6threadNtB4_u6Thread4name(
    __self: &'static ::std::thread::Thread,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::Thread::name(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::thread::ThreadId>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::thread::ThreadId>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1_uNtNtCs2P3nRL0oqsP_u3std6thread2idNtB5_u8ThreadIdNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::ThreadId,
    other: &'static ::std::thread::ThreadId,
) -> bool {
    unsafe {
        <::std::thread::ThreadId as ::core::cmp::PartialEq<::std::thread::ThreadId>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtNtCs2P3nRL0oqsP_u3std6thread2id8ThreadIdNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::thread::ThreadId,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread7current7current(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::current();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions9panickingCsh9G4tFjYpDL_u8rust_uout(
) -> bool {
    unsafe { ::std::thread::panicking() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions4park(
) -> () {
    unsafe { ::std::thread::park() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions12park_utimeout(
    dur: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let dur = dur.read();
        ::std::thread::park_timeout(dur)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions15park_utimeout_ums(
    ms: u32,
) -> () {
    unsafe { ::std::thread::park_timeout_ms(ms) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions5sleep(
    dur: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let dur = dur.read();
        ::std::thread::sleep(dur)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions8sleep_ums(
    ms: u32,
) -> () {
    unsafe { ::std::thread::sleep_ms(ms) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvNtNtCs2P3nRL0oqsP_u3std6thread9functions9yield_unow(
) -> () {
    unsafe { ::std::thread::yield_now() }
}
const _: () = assert!(::core::mem::size_of::<::std::time::Instant>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::Instant>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant3now(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::Instant::now();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant14duration_usince(
    __self: &'static ::std::time::Instant,
    earlier: *mut ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let earlier = earlier.read();
        let __rs_return_value = ::std::time::Instant::duration_since(__self, earlier);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant22checked_uduration_usince(
    __self: &'static ::std::time::Instant,
    earlier: *mut ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let earlier = earlier.read();
        let __rs_return_value = ::std::time::Instant::checked_duration_since(__self, earlier);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant25saturating_uduration_usince(
    __self: &'static ::std::time::Instant,
    earlier: *mut ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let earlier = earlier.read();
        let __rs_return_value = ::std::time::Instant::saturating_duration_since(__self, earlier);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant7elapsed(
    __self: &'static ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::Instant::elapsed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant11checked_uadd(
    __self: &'static ::std::time::Instant,
    duration: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let duration = duration.read();
        let __rs_return_value = ::std::time::Instant::checked_add(__self, duration);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMNtCs2P3nRL0oqsP_u3std4timeNtB2_u7Instant11checked_usub(
    __self: &'static ::std::time::Instant,
    duration: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let duration = duration.read();
        let __rs_return_value = ::std::time::Instant::checked_sub(__self, duration);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsk_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::Instant,
    other: &'static ::std::time::Instant,
) -> bool {
    unsafe {
        <::std::time::Instant as ::core::cmp::PartialEq<::std::time::Instant>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs_uNtCs2P3nRL0oqsP_u3std4timeNtB4_u7InstantINtNtNtCsoHVEWV6jqw_u4core3ops5arith3AddNtNtBN_u4time8DurationE3add(
    __self: *mut ::std::time::Instant,
    other: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value =
            <::std::time::Instant as ::core::ops::Add<::core::time::Duration>>::add(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantINtNtNtCsoHVEWV6jqw_u4core3ops5arith9AddAssignNtNtBO_u4time8DurationE10add_uassign(
    __self: &'static mut ::std::time::Instant,
    other: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let other = other.read();
        <::std::time::Instant as ::core::ops::AddAssign<::core::time::Duration>>::add_assign(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantINtNtNtCsoHVEWV6jqw_u4core3ops5arith3SubNtNtBO_u4time8DurationE3sub(
    __self: *mut ::std::time::Instant,
    other: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value =
            <::std::time::Instant as ::core::ops::Sub<::core::time::Duration>>::sub(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantNtNtNtCsoHVEWV6jqw_u4core3ops5arith3Sub3sub(
    __self: *mut ::std::time::Instant,
    other: *mut ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value =
            <::std::time::Instant as ::core::ops::Sub<::std::time::Instant>>::sub(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantINtNtNtCsoHVEWV6jqw_u4core3ops5arith9SubAssignNtNtBO_u4time8DurationE10sub_uassign(
    __self: &'static mut ::std::time::Instant,
    other: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let other = other.read();
        <::std::time::Instant as ::core::ops::SubAssign<::core::time::Duration>>::sub_assign(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time7InstantNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::time::Instant,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time7InstantNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::time::Instant,
    rhs: &::std::time::Instant,
) -> i8 {
    <::std::time::Instant as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::time::SystemTime>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::SystemTime>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs5_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTime3now(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTime::now();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs5_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTime14duration_usince(
    __self: &'static ::std::time::SystemTime,
    earlier: *mut ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let earlier = earlier.read();
        let __rs_return_value = ::std::time::SystemTime::duration_since(__self, earlier);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs5_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTime7elapsed(
    __self: &'static ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTime::elapsed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs5_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTime11checked_uadd(
    __self: &'static ::std::time::SystemTime,
    duration: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let duration = duration.read();
        let __rs_return_value = ::std::time::SystemTime::checked_add(__self, duration);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMs5_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTime11checked_usub(
    __self: &'static ::std::time::SystemTime,
    duration: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let duration = duration.read();
        let __rs_return_value = ::std::time::SystemTime::checked_sub(__self, duration);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXst_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeNtNtCsoHVEWV6jqw_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTime,
    other: &'static ::std::time::SystemTime,
) -> bool {
    unsafe {
        <::std::time::SystemTime as ::core::cmp::PartialEq<::std::time::SystemTime>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeINtNtNtCsoHVEWV6jqw_u4core3ops5arith3AddNtNtBS_u4time8DurationE3add(
    __self: *mut ::std::time::SystemTime,
    dur: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let dur = dur.read();
        let __rs_return_value =
            <::std::time::SystemTime as ::core::ops::Add<::core::time::Duration>>::add(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs7_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeINtNtNtCsoHVEWV6jqw_u4core3ops5arith9AddAssignNtNtBS_u4time8DurationE10add_uassign(
    __self: &'static mut ::std::time::SystemTime,
    other: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let other = other.read();
        <::std::time::SystemTime as ::core::ops::AddAssign<::core::time::Duration>>::add_assign(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeINtNtNtCsoHVEWV6jqw_u4core3ops5arith3SubNtNtBS_u4time8DurationE3sub(
    __self: *mut ::std::time::SystemTime,
    dur: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let dur = dur.read();
        let __rs_return_value =
            <::std::time::SystemTime as ::core::ops::Sub<::core::time::Duration>>::sub(__self, dur);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs9_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeINtNtNtCsoHVEWV6jqw_u4core3ops5arith9SubAssignNtNtBS_u4time8DurationE10sub_uassign(
    __self: &'static mut ::std::time::SystemTime,
    other: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let other = other.read();
        <::std::time::SystemTime as ::core::ops::SubAssign<::core::time::Duration>>::sub_assign(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time10SystemTimeNtNtCsoHVEWV6jqw_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::time::SystemTime,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time10SystemTimeNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::time::SystemTime,
    rhs: &::std::time::SystemTime,
) -> i8 {
    <::std::time::SystemTime as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::time::SystemTimeError>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::SystemTimeError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time15SystemTimeErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTimeError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::time::SystemTimeError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time15SystemTimeErrorNtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::time::SystemTimeError,
    source: &'static ::std::time::SystemTimeError,
) -> () {
    unsafe { <::std::time::SystemTimeError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvMsb_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u15SystemTimeError8durationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTimeError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTimeError::duration(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYNtNtCs2P3nRL0oqsP_u3std4time15SystemTimeErrorNtNtCsazOrLUIp1qL_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTimeError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::time::SystemTimeError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::offset_of!((::std::io::PipeReader, ::std::io::PipeWriter,), 0) == 0);
const _: () =
    assert!(::core::mem::offset_of!((::std::io::PipeReader, ::std::io::PipeWriter,), 1) == 4);
const _: () =
    assert!(::core::mem::offset_of!((::std::net::TcpStream, ::core::net::SocketAddr,), 0) == 0);
const _: () =
    assert!(::core::mem::offset_of!((::std::net::TcpStream, ::core::net::SocketAddr,), 1) == 4);
const _: () = assert!(::core::mem::offset_of!((usize, ::core::net::SocketAddr,), 0) == 0);
const _: () = assert!(::core::mem::offset_of!((usize, ::core::net::SocketAddr,), 1) == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsg_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4ArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits12double_uended19DoubleEndedIterator9next_uback(
    __self: &'static mut ::std::env::Args,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::env::Args as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsf_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4ArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::Args,
) -> usize {
    unsafe { <::std::env::Args as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4ArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::Args,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Args as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4ArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::Args,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Args as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsm_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::env::ArgsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::env::ArgsOs as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsl_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::ArgsOs,
) -> usize {
    unsafe { <::std::env::ArgsOs as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsk_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::env::ArgsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::ArgsOs as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsk_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::ArgsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::ArgsOs as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsk_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::ArgsOs,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::std::env::ArgsOs as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsk_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6ArgsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::ArgsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::std::env::ArgsOs as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtCs2P3nRL0oqsP_u3std3envNtB5_u10SplitPathsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::SplitPaths<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::env::SplitPaths<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtCs2P3nRL0oqsP_u3std3envNtB5_u10SplitPathsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::SplitPaths<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::env::SplitPaths<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4VarsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::Vars,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Vars as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtCs2P3nRL0oqsP_u3std3envNtB5_u4VarsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhint(
    __self: &'static ::std::env::Vars,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Vars as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6VarsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::VarsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::VarsOs as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std3envNtB5_u6VarsOsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhint(
    __self: &'static ::std::env::VarsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::VarsOs as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsg_uNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustrNtB5_u8OsStringNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: &'static ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::ffi::OsString as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsu_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtNtB9_u2fs4FileNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::File,
) -> bool {
    unsafe { <::std::fs::File as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsa_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::fs::File,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::fs::File as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsa_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::fs::File,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value = <::std::fs::File as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsa_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::fs::File,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsa_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read14read_uto_ustring(
    __self: &'static mut ::std::fs::File,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Read>::read_to_string(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsc_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsoHVEWV6jqw_u4core2io4seek4Seek4seek(
    __self: &'static mut ::std::fs::File,
    pos: *mut ::std::io::SeekFrom,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let pos = pos.read();
        let __rs_return_value = <::std::fs::File as ::std::io::Seek>::seek(__self, pos);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsc_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsoHVEWV6jqw_u4core2io4seek4Seek15stream_uposition(
    __self: &'static mut ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Seek>::stream_position(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsb_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::fs::File,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::fs::File as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsb_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::fs::File,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value = <::std::fs::File as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsb_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u4FileNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsz_uNtCs2P3nRL0oqsP_u3std2fsNtB5_u7ReadDirNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::fs::ReadDir,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::ReadDir as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtNtCs2P3nRL0oqsP_u3std4hash6randomNtB5_u13DefaultHasherNtNtCsoHVEWV6jqw_u4core4hash6Hasher5writeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::DefaultHasher,
    msg: *mut &'static [u8],
) -> () {
    unsafe {
        let msg = msg.read();
        <::std::hash::DefaultHasher as ::core::hash::Hasher>::write(__self, msg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtNtCs2P3nRL0oqsP_u3std4hash6randomNtB5_u13DefaultHasherNtNtCsoHVEWV6jqw_u4core4hash6Hasher6finishCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::DefaultHasher,
) -> u64 {
    unsafe { <::std::hash::DefaultHasher as ::core::hash::Hasher>::finish(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs_uNtNtCs2P3nRL0oqsP_u3std4hash6randomNtB4_u11RandomStateNtNtCsoHVEWV6jqw_u4core4hash11BuildHasher12build_uhasherCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::RandomState,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::hash::RandomState as ::core::hash::BuildHasher>::build_hasher(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs5_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::io::PipeReader,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::PipeReader as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs5_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::io::PipeReader,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::PipeReader as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs5_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::io::PipeReader,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::PipeReader as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs7_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::io::PipeWriter,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::PipeWriter as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs7_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::PipeWriter,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::PipeWriter as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs7_uNtNtCs2P3nRL0oqsP_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::io::PipeWriter,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::PipeWriter as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsz_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stderr,
) -> bool {
    unsafe { <::std::io::Stderr as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::io::Stderr,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stderr as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::io::Stderr,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::Stderr as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stderr as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_uall(
    __self: &'static mut ::std::io::Stderr,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stderr as ::std::io::Write>::write_all(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StderrNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_ufmt(
    __self: &'static mut ::std::io::Stderr,
    args: *mut ::core::fmt::Arguments<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let args = args.read();
        let __rs_return_value = <::std::io::Stderr as ::std::io::Write>::write_fmt(__self, args);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsA_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StderrLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StderrLock<'static>,
) -> bool {
    unsafe { <::std::io::StderrLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXss_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::io::StderrLock<'static>,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StderrLock<'static> as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXss_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::io::StderrLock<'static>,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::StderrLock<'static> as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXss_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::StderrLock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::StderrLock<'static> as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXss_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_uall(
    __self: &'static mut ::std::io::StderrLock<'static>,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StderrLock<'static> as ::std::io::Write>::write_all(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsv_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stdin,
) -> bool {
    unsafe { <::std::io::Stdin as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::io::Stdin,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stdin as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::io::Stdin,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value = <::std::io::Stdin as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::io::Stdin,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stdin as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read14read_uto_ustring(
    __self: &'static mut ::std::io::Stdin,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stdin as ::std::io::Read>::read_to_string(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs3_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u5StdinNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read10read_uexact(
    __self: &'static mut ::std::io::Stdin,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stdin as ::std::io::Read>::read_exact(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io8buf_uread7BufRead8fill_ubuf(
    __self: &'static mut ::std::io::StdinLock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::BufRead>::fill_buf(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io8buf_uread7BufRead7consumeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::StdinLock<'static>,
    n: usize,
) -> () {
    unsafe { <::std::io::StdinLock<'static> as ::std::io::BufRead>::consume(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io8buf_uread7BufRead10read_uuntil(
    __self: &'static mut ::std::io::StdinLock<'static>,
    byte: u8,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::BufRead>::read_until(__self, byte, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io8buf_uread7BufRead9read_uline(
    __self: &'static mut ::std::io::StdinLock<'static>,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::BufRead>::read_line(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsw_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StdinLock<'static>,
) -> bool {
    unsafe { <::std::io::StdinLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::io::StdinLock<'static>,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::io::StdinLock<'static>,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::io::StdinLock<'static>,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read14read_uto_ustring(
    __self: &'static mut ::std::io::StdinLock<'static>,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::Read>::read_to_string(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs6_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u9StdinLockNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read10read_uexact(
    __self: &'static mut ::std::io::StdinLock<'static>,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StdinLock<'static> as ::std::io::Read>::read_exact(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsx_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stdout,
) -> bool {
    unsafe { <::std::io::Stdout as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::io::Stdout,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stdout as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::io::Stdout,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::Stdout as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stdout as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_uall(
    __self: &'static mut ::std::io::Stdout,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::io::Stdout as ::std::io::Write>::write_all(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXse_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u6StdoutNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_ufmt(
    __self: &'static mut ::std::io::Stdout,
    args: *mut ::core::fmt::Arguments<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let args = args.read();
        let __rs_return_value = <::std::io::Stdout as ::std::io::Write>::write_fmt(__self, args);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsy_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StdoutLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StdoutLock<'static>,
) -> bool {
    unsafe { <::std::io::StdoutLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsi_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::io::StdoutLock<'static>,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StdoutLock<'static> as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsi_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::io::StdoutLock<'static>,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::io::StdoutLock<'static> as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsi_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::StdoutLock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::StdoutLock<'static> as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsi_uNtNtCs2P3nRL0oqsP_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsoHVEWV6jqw_u4core2io5write5Write9write_uall(
    __self: &'static mut ::std::io::StdoutLock<'static>,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::io::StdoutLock<'static> as ::std::io::Write>::write_all(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u8IncomingNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::net::Incoming<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::net::Incoming<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB4_u9TcpStreamNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::net::TcpStream,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::net::TcpStream as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB4_u9TcpStreamNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::net::TcpStream,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::net::TcpStream as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::net::TcpStream,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::net::TcpStream as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::net::TcpStream,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::net::TcpStream as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs0_uNtNtCs2P3nRL0oqsP_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::net::TcpStream as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs21_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u9ComponentNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Component<'static>,
    other: &'static ::std::path::Component<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Component<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u10ComponentsNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Components<'static>,
    other: &'static ::std::path::Components<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Components<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsj_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u10ComponentsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits12double_uended19DoubleEndedIterator9next_uback(
    __self: &'static mut ::std::path::Components<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Components<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsi_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u10ComponentsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::path::Components<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Components<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs14_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u7PathBufNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::PathBuf as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs1E_uNtCs2P3nRL0oqsP_u3std4pathNtB6_u6PrefixNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Prefix<'static>,
    other: &'static ::std::path::Prefix<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::Prefix<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std4pathNtB5_u15PrefixComponentNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PrefixComponent<'static>,
    other: &'static ::std::path::PrefixComponent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::path::PrefixComponent<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsd_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStderrNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::process::ChildStderr,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::process::ChildStderr as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsd_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStderrNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::process::ChildStderr,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::process::ChildStderr as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsd_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStderrNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::process::ChildStderr,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::ChildStderr as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std7processNtB5_u10ChildStdinNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5write(
    __self: &'static mut ::std::process::ChildStdin,
    buf: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value =
            <::std::process::ChildStdin as ::std::io::Write>::write(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std7processNtB5_u10ChildStdinNtNtNtCsoHVEWV6jqw_u4core2io5write5Write14write_uvectored(
    __self: &'static mut ::std::process::ChildStdin,
    bufs: *mut &'static [::std::io::IoSlice<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::process::ChildStdin as ::std::io::Write>::write_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs2_uNtCs2P3nRL0oqsP_u3std7processNtB5_u10ChildStdinNtNtNtCsoHVEWV6jqw_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::ChildStdin,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ChildStdin as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStdoutNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read4read(
    __self: &'static mut ::std::process::ChildStdout,
    buf: *mut &'static mut [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let buf = buf.read();
        let __rs_return_value = <::std::process::ChildStdout as ::std::io::Read>::read(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStdoutNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read13read_uvectored(
    __self: &'static mut ::std::process::ChildStdout,
    bufs: *mut &'static mut [::std::io::IoSliceMut<'static>],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bufs = bufs.read();
        let __rs_return_value =
            <::std::process::ChildStdout as ::std::io::Read>::read_vectored(__self, bufs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXs8_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11ChildStdoutNtNtNtCsazOrLUIp1qL_u5alloc2io4read4Read11read_uto_uend(
    __self: &'static mut ::std::process::ChildStdout,
    buf: &'static mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::ChildStdout as ::std::io::Read>::read_to_end(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsn_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11CommandArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits10exact_usize17ExactSizeIterator3len(
    __self: &'static ::std::process::CommandArgs<'static>,
) -> usize {
    unsafe {
        <::std::process::CommandArgs<'static> as ::core::iter::ExactSizeIterator>::len(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsm_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11CommandArgsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhint(
    __self: &'static ::std::process::CommandArgs<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::CommandArgs<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsp_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11CommandEnvsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::CommandEnvs<'static>,
) -> usize {
    unsafe {
        <::std::process::CommandEnvs<'static> as ::core::iter::ExactSizeIterator>::len(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXso_uNtCs2P3nRL0oqsP_u3std7processNtB5_u11CommandEnvsNtNtNtNtCsoHVEWV6jqw_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::CommandEnvs<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::std::process::CommandEnvs<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsW_uNtCs2P3nRL0oqsP_u3std7processNtB5_u8ExitCodeNtB5_u11Termination6reportCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ExitCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::std::process::ExitCode as ::std::process::Termination>::report(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsn_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u7InstantNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::Instant,
    other: &'static ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::time::Instant as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvXsw_uNtCs2P3nRL0oqsP_u3std4timeNtB5_u10SystemTimeNtNtCsoHVEWV6jqw_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTime,
    other: &'static ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::time::SystemTime as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtCs2P3nRL0oqsP_u3std4path7PathBufENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<::std::path::PathBuf>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <core::option::Option<::std::path::PathBuf> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtCs2P3nRL0oqsP_u3std4path7PathBufENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<::std::path::PathBuf>,
    source: &'static ::core::option::Option<::std::path::PathBuf>,
) -> () {
    unsafe {
        <core::option::Option<::std::path::PathBuf> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultuNtNtCsazOrLUIp1qL_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    source: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
) -> () {
    unsafe {
        <core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::alloc::string::String,::std::ffi::OsString>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
    source: &'static ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::std::ffi::OsString>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCs2P3nRL0oqsP_u3std4path7PathBufENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::alloc::string::String,::std::path::PathBuf>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtCsazOrLUIp1qL_u5alloc6string6StringNtNtCs2P3nRL0oqsP_u3std4path7PathBufENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
    source: &'static ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::std::path::PathBuf>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtB7_u4time8DurationNtNtCs2P3nRL0oqsP_u3std4time15SystemTimeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::time::Duration, ::std::time::SystemTimeError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::time::Duration,
            ::std::time::SystemTimeError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6result6ResultNtNtB7_u4time8DurationNtNtCs2P3nRL0oqsP_u3std4time15SystemTimeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::core::time::Duration,
        ::std::time::SystemTimeError,
    >,
    source: &'static ::core::result::Result<::core::time::Duration, ::std::time::SystemTimeError>,
) -> () {
    unsafe {
        <core::result::Result<::core::time::Duration,::std::time::SystemTimeError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsazOrLUIp1qL_u5alloc3vec3VechENtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringB3_uENtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::std::ffi::OsString, ::std::ffi::OsString) as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringB3_uENtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static (::std::ffi::OsString, ::std::ffi::OsString),
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::std::ffi::OsString, ::std::ffi::OsString) as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringB3_uENtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut (::std::ffi::OsString, ::std::ffi::OsString),
    source: &'static (::std::ffi::OsString, ::std::ffi::OsString),
) -> () {
    unsafe {
        <(::std::ffi::OsString, ::std::ffi::OsString) as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
const _: () =
    assert!(::core::mem::offset_of!((::std::ffi::OsString, ::std::ffi::OsString,), 0) == 0);
const _: () =
    assert!(::core::mem::offset_of!((::std::ffi::OsString, ::std::ffi::OsString,), 1) == 24);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtCsazOrLUIp1qL_u5alloc6string6StringB3_uENtNtCsoHVEWV6jqw_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<(::alloc::string::String,::alloc::string::String,)as::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtCsazOrLUIp1qL_u5alloc6string6StringB3_uENtNtCsoHVEWV6jqw_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static (::alloc::string::String, ::alloc::string::String),
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::alloc::string::String, ::alloc::string::String) as ::core::clone::Clone>::clone(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYTNtNtCsazOrLUIp1qL_u5alloc6string6StringB3_uENtNtCsoHVEWV6jqw_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut (::alloc::string::String, ::alloc::string::String),
    source: &'static (::alloc::string::String, ::alloc::string::String),
) -> () {
    unsafe {
        <(::alloc::string::String, ::alloc::string::String) as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
const _: () =
    assert!(::core::mem::offset_of!((::alloc::string::String, ::alloc::string::String,), 0) == 0);
const _: () =
    assert!(::core::mem::offset_of!((::alloc::string::String, ::alloc::string::String,), 1) == 24);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionTNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringBE_uEENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::option::Option<(::std::ffi::OsString,::std::ffi::OsString,)>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionTNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringBE_uEENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
    source: &'static ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
) -> () {
    unsafe {
        <core::option::Option<(::std::ffi::OsString,::std::ffi::OsString,)>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionTNtNtCsazOrLUIp1qL_u5alloc6string6StringBE_uEENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<(::alloc::string::String, ::alloc::string::String)>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::option::Option<(
            ::alloc::string::String,
            ::alloc::string::String,
        )> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionTNtNtCsazOrLUIp1qL_u5alloc6string6StringBE_uEENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<(::alloc::string::String, ::alloc::string::String)>,
    source: &'static ::core::option::Option<(::alloc::string::String, ::alloc::string::String)>,
) -> () {
    unsafe {
        <core::option::Option<(::alloc::string::String,::alloc::string::String,)>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<::std::ffi::OsString>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <core::option::Option<::std::ffi::OsString> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtNtCs2P3nRL0oqsP_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<::std::ffi::OsString>,
    source: &'static ::core::option::Option<::std::ffi::OsString>,
) -> () {
    unsafe {
        <core::option::Option<::std::ffi::OsString> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtCsazOrLUIp1qL_u5alloc6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<::alloc::string::String>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <core::option::Option<::alloc::string::String> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_20e2f82ac4dc0185__uRNvYINtNtCsoHVEWV6jqw_u4core6option6OptionNtNtCsazOrLUIp1qL_u5alloc6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<::alloc::string::String>,
    source: &'static ::core::option::Option<::alloc::string::String>,
) -> () {
    unsafe {
        <core::option::Option<::alloc::string::String> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
