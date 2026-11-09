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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std9backtrace9BacktraceNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::backtrace::Backtrace,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std9backtraceNtB5_u9Backtrace7capture(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::capture();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std9backtraceNtB5_u9Backtrace13force_ucapture(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::force_capture();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std9backtraceNtB5_u9Backtrace8disabledCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::disabled();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std9backtraceNtB5_u9Backtrace6statusCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::backtrace::Backtrace,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::backtrace::Backtrace::status(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std9backtrace9BacktraceNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtCsk7Ax6c5B7dA_u3std9backtraceNtB5_u15BacktraceStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env4ArgsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::Args,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::ArgsOs>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::ArgsOs>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env6ArgsOsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::ArgsOs,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::SplitPaths>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::env::SplitPaths>() == 8);
const _: () = assert!(::core::mem::size_of::<::std::env::VarError>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::env::VarError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtCsk7Ax6c5B7dA_u3std3env8VarError10NotUnicode0Csh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env8VarErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::VarError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env8VarErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::VarError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::VarError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env8VarErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::env::VarError,
    source: &'static ::std::env::VarError,
) -> () {
    unsafe { <::std::env::VarError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsq_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u8VarErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::VarError,
    other: &'static ::std::env::VarError,
) -> bool {
    unsafe {
        <::std::env::VarError as ::core::cmp::PartialEq<::std::env::VarError>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env8VarErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env4VarsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::Vars,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::env::VarsOs>() == 32);
const _: () = assert!(::core::mem::align_of::<::std::env::VarsOs>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std3env6VarsOsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::VarsOs,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env4args(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::args();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env7args_uos(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::args_os();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env11current_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::current_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env11current_uexe(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::current_exe();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env8home_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::home_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env8temp_udir(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::temp_dir();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env4vars(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::env::vars();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std3env7vars_uos(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::ffi::OsString as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::ffi::OsString,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::ffi::OsString as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    source: &'static ::std::ffi::OsString,
) -> () {
    unsafe { <::std::ffi::OsString as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString28from_uencoded_ubytes_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString18into_uencoded_ubytesCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString11into_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::ffi::OsString::with_capacity(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString5clearCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
) -> () {
    unsafe { ::std::ffi::OsString::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString8capacityCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
) -> usize {
    unsafe { ::std::ffi::OsString::capacity(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString7reserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
) -> () {
    unsafe { ::std::ffi::OsString::reserve(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString11try_ureserveCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    additional: usize,
) -> () {
    unsafe { ::std::ffi::OsString::reserve_exact(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString17try_ureserve_uexactCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
) -> () {
    unsafe { ::std::ffi::OsString::shrink_to_fit(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB2_u8OsString9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::ffi::OsString,
    min_capacity: usize,
) -> () {
    unsafe { ::std::ffi::OsString::shrink_to(__self, min_capacity) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB8_u4path7PathBufE4intoCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB5_u8OsStringNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: &'static ::std::ffi::OsString,
) -> bool {
    unsafe {
        <::std::ffi::OsString as ::core::cmp::PartialEq<::std::ffi::OsString>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs9_uNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB5_u8OsStringINtNtCsduaz3xaeU7_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: *mut &'static str,
) -> bool {
    unsafe {
        let other = other.read();
        <::std::ffi::OsString as ::core::cmp::PartialEq<str>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2P_uNtCsk7Ax6c5B7dA_u3std4pathNtNtNtB8_u3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core3cmp9PartialEqNtB6_u7PathBufE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::ffi::OsString,
    other: &'static ::std::path::PathBuf,
) -> bool {
    unsafe {
        <::std::ffi::OsString as ::core::cmp::PartialEq<::std::path::PathBuf>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core7convert4FromNtNtCs4qcdXyRXuHP_u5alloc6string6StringE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core7convert4FromNtNtB8_u4path7PathBufE4fromCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::ffi::OsString,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::ffi::OsString,
    rhs: &::std::ffi::OsString,
) -> i8 {
    <::std::ffi::OsString as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core3cmp10PartialOrdeE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::ffi::OsString,
    rhs: &str,
) -> i8 {
    match <::std::ffi::OsString as ::core::cmp::PartialOrd<str>>::partial_cmp(lhs, rhs) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringINtNtCsduaz3xaeU7_u4core3cmp10PartialOrdNtNtB8_u4path7PathBufE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr7DisplayNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsD_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u10DirBuilder3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirBuilder::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsD_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u10DirBuilder9recursiveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::DirBuilder,
    recursive: bool,
) -> &'static mut ::std::fs::DirBuilder {
    unsafe { ::std::fs::DirBuilder::recursive(__self, recursive) }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::DirEntry>() == 40);
const _: () = assert!(::core::mem::align_of::<::std::fs::DirEntry>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs8DirEntryNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::DirEntry,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsA_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8DirEntry4path(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::path(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsA_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8DirEntry8metadata(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::metadata(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsA_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8DirEntry9file_utype(
    __self: &'static ::std::fs::DirEntry,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::DirEntry::file_type(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsA_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8DirEntry9file_uname(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs4FileNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::File,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File7optionsCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::options();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File8sync_uall(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::sync_all(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File9sync_udata(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::sync_data(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File4lock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File11lock_ushared(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::lock_shared(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File8try_ulock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File15try_ulock_ushared(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_lock_shared(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File6unlock(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::unlock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File7set_ulen(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File8metadata(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::metadata(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File9try_uclone(
    __self: &'static ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::File::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File15set_upermissions(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File9set_utimes(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4File12set_umodifiedCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs9FileTimesNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::FileTimes as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u9FileTimes3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::FileTimes::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u9FileTimes12set_uaccessedCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u9FileTimes12set_umodifiedCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsu_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8FileType6is_udirCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_dir(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsu_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8FileType7is_ufileCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_file(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsu_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8FileType10is_usymlinkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
) -> bool {
    unsafe { ::std::fs::FileType::is_symlink(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsX_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8FileTypeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::FileType,
    other: &'static ::std::fs::FileType,
) -> bool {
    unsafe {
        <::std::fs::FileType as ::core::cmp::PartialEq<::std::fs::FileType>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs8FileTypeNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::fs::FileType,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
const _: () = assert!(::core::mem::size_of::<::std::fs::Metadata>() == 176);
const _: () = assert!(::core::mem::align_of::<::std::fs::Metadata>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs8MetadataNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::Metadata as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs8MetadataNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Metadata,
    source: &'static ::std::fs::Metadata,
) -> () {
    unsafe { <::std::fs::Metadata as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata9file_utypeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::file_type(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata6is_udirCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_dir(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata7is_ufileCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_file(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata10is_usymlinkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> bool {
    unsafe { ::std::fs::Metadata::is_symlink(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
) -> u64 {
    unsafe { ::std::fs::Metadata::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata11permissionsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::permissions(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata8modified(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::modified(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata8accessed(
    __self: &'static ::std::fs::Metadata,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::Metadata::accessed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsm_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u8Metadata7created(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs11OpenOptionsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::OpenOptions,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::OpenOptions as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs11OpenOptionsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    source: &'static ::std::fs::OpenOptions,
) -> () {
    unsafe { <::std::fs::OpenOptions as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::fs::OpenOptions::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions4readCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    read: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::read(__self, read) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions5writeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    write: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::write(__self, write) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions6appendCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    append: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::append(__self, append) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions8truncateCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    truncate: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::truncate(__self, truncate) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions6createCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    create: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::create(__self, create) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsj_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11OpenOptions10create_unewCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::OpenOptions,
    create_new: bool,
) -> &'static mut ::std::fs::OpenOptions {
    unsafe { ::std::fs::OpenOptions::create_new(__self, create_new) }
}
const _: () = assert!(::core::mem::size_of::<::std::fs::Permissions>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::fs::Permissions>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs11PermissionsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Permissions,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::Permissions as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs11PermissionsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Permissions,
    source: &'static ::std::fs::Permissions,
) -> () {
    unsafe { <::std::fs::Permissions as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMst_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11Permissions8readonlyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::Permissions,
) -> bool {
    unsafe { ::std::fs::Permissions::readonly(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMst_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11Permissions12set_ureadonlyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::Permissions,
    readonly: bool,
) -> () {
    unsafe { ::std::fs::Permissions::set_readonly(__self, readonly) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsQ_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u11PermissionsNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs7ReadDirNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::ReadDir,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::fs::TryLockError>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::fs::TryLockError>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs12TryLockErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::fs::TryLockError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std2fs12TryLockErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random13DefaultHasherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::DefaultHasher as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random13DefaultHasherNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::DefaultHasher,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::DefaultHasher as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random13DefaultHasherNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::DefaultHasher,
    source: &'static ::std::hash::DefaultHasher,
) -> () {
    unsafe { <::std::hash::DefaultHasher as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4hash6randomNtB5_u13DefaultHasher3newCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random11RandomStateNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::RandomState as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random11RandomStateNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::RandomState,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::hash::RandomState as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4hash6random11RandomStateNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::RandomState,
    source: &'static ::std::hash::RandomState,
) -> () {
    unsafe { <::std::hash::RandomState as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std4hash6randomNtB2_u11RandomState3newCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorNtNtNtB8_u3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::Error,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsduaz3xaeU7_u4core2io5errorNtB5_u5Error12raw_uos_uerrorCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Error::raw_os_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsduaz3xaeU7_u4core2io5errorNtB5_u5Error4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Error::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtCsk7Ax6c5B7dA_u3std2fs12TryLockErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorINtNtB8_u7convert4FromNtB4_u9ErrorKindE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr8NulErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorINtNtB8_u7convert4FromNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error5ErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error9ErrorKindINtNtB8_u7convert4IntoNtB4_u5ErrorE4intoCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXss_uNtNtCsduaz3xaeU7_u4core2io5errorNtB5_u9ErrorKindNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::ErrorKind,
    other: &'static ::std::io::ErrorKind,
) -> bool {
    unsafe {
        <::std::io::ErrorKind as ::core::cmp::PartialEq<::std::io::ErrorKind>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error9ErrorKindNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error9ErrorKindNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::io::ErrorKind,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsduaz3xaeU7_u4core2io5error9ErrorKindNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::io::ErrorKind,
    rhs: &::std::io::ErrorKind,
) -> i8 {
    <::std::io::ErrorKind as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::io::IoSlice>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::IoSlice>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u7IoSlice3newCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u7IoSlice7advanceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::IoSlice<'static>,
    n: usize,
) -> () {
    unsafe { ::std::io::IoSlice::advance(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u7IoSlice14advance_uslicesCsh9G4tFjYpDL_u8rust_uout(
    bufs: &'static mut &'static mut [::std::io::IoSlice<'static>],
    n: usize,
) -> () {
    unsafe { ::std::io::IoSlice::advance_slices(bufs, n) }
}
const _: () = assert!(::core::mem::size_of::<::std::io::IoSliceMut>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::io::IoSliceMut>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u10IoSliceMut3newCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u10IoSliceMut7advanceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::IoSliceMut<'static>,
    n: usize,
) -> () {
    unsafe { ::std::io::IoSliceMut::advance(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsduaz3xaeU7_u4core2io8io_usliceNtB5_u10IoSliceMut14advance_uslicesCsh9G4tFjYpDL_u8rust_uout(
    bufs: &'static mut &'static mut [::std::io::IoSliceMut<'static>],
    n: usize,
) -> () {
    unsafe { ::std::io::IoSliceMut::advance_slices(bufs, n) }
}
const _: () = assert!(::core::mem::size_of::<::std::io::PipeReader>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::io::PipeReader>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io4pipe10PipeReaderNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::PipeReader,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeReader9try_uclone(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io4pipe10PipeWriterNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::PipeWriter,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs3_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeWriter9try_uclone(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtNtCsduaz3xaeU7_u4core2io4seek8SeekFrom5Start0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::Start(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtNtCsduaz3xaeU7_u4core2io4seek8SeekFrom3End0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::End(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtNtCsduaz3xaeU7_u4core2io4seek8SeekFrom7Current0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::SeekFrom::Current(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtNtCsduaz3xaeU7_u4core2io4seekNtB5_u8SeekFromNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsk_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6Stderr4lock(
    __self: &'static ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stderr::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io5stdio6StderrINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB8_u7process5StdioE4intoCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io5stdio10StderrLockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StderrLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::Stdin>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Stdin>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5Stdin4lock(
    __self: &'static ::std::io::Stdin,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdin::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs1_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5Stdin9read_uline(
    __self: &'static ::std::io::Stdin,
    buf: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdin::read_line(__self, buf);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::std::io::StdinLock>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::StdinLock>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io5stdio9StdinLockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StdinLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::Stdout>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::io::Stdout>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsa_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6Stdout4lock(
    __self: &'static ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::Stdout::lock(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io5stdio6StdoutINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB8_u7process5StdioE4intoCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std2io5stdio10StdoutLockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::StdoutLock,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::io::WriterPanicked>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::io::WriterPanicked>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtNtCs4qcdXyRXuHP_u5alloc2io8buffered9bufwriter14WriterPanickedNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::io::WriterPanicked,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtNtCs4qcdXyRXuHP_u5alloc2io8buffered9bufwriter14WriterPanickedNtNtBa_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std2io4pipe4pipeCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::pipe();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsduaz3xaeU7_u4core2io4util6repeatCsh9G4tFjYpDL_u8rust_uout(
    byte: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::repeat(byte);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std2io5stdio6stderrCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::stderr();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std2io5stdio5stdin(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::io::stdin();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std2io5stdio6stdout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std3netNtB5_u8ShutdownNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3net3tcp11TcpListenerNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::TcpListener,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener10local_uaddr(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener9try_uclone(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener6accept(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::accept(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener8incomingCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::incoming(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener7set_uttl(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener3ttl(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener11set_uonly_uv6(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener7only_uv6(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::only_v6(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener10take_uerror(
    __self: &'static ::std::net::TcpListener,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpListener::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs7_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u11TcpListener15set_unonblocking(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3net3tcp9TcpStreamNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::TcpStream,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream15connect_utimeout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream9peer_uaddr(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::peer_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream10local_uaddr(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream8shutdown(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream9try_uclone(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream16set_uread_utimeout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream17set_uwrite_utimeout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream12read_utimeout(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::read_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream13write_utimeout(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::write_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream4peek(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream11set_unodelay(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream7nodelay(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::nodelay(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream7set_uttl(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream3ttl(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream10take_uerror(
    __self: &'static ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::TcpStream::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB2_u9TcpStream15set_unonblocking(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std3net3udp9UdpSocketNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::net::UdpSocket,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket9recv_ufrom(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket9peek_ufrom(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket9peer_uaddr(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::peer_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket10local_uaddr(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::local_addr(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket9try_uclone(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::try_clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket16set_uread_utimeout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket17set_uwrite_utimeout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket12read_utimeout(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::read_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket13write_utimeout(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::write_timeout(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket13set_ubroadcast(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket9broadcast(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::broadcast(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket21set_umulticast_uloop_uv4(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket17multicast_uloop_uv4(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_loop_v4(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket20set_umulticast_uttl_uv4(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket16multicast_uttl_uv4(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_ttl_v4(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket21set_umulticast_uloop_uv6(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket17multicast_uloop_uv6(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::multicast_loop_v6(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket7set_uttl(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket3ttl(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::ttl(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket17join_umulticast_uv4(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket17join_umulticast_uv6(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket18leave_umulticast_uv4(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket18leave_umulticast_uv6(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket10take_uerror(
    __self: &'static ::std::net::UdpSocket,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::net::UdpSocket::take_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket4send(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket4recv(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket4peek(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std3net3udpNtB2_u9UdpSocket15set_unonblocking(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std5panicNtB2_u13PanicHookInfo14payload_uas_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::panic::PanicHookInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::panic::PanicHookInfo::payload_as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std5panicNtB2_u13PanicHookInfo8locationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::panic::PanicHookInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::panic::PanicHookInfo::location(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std5panic13PanicHookInfoNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std9panicking8set_uhook(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtCsk7Ax6c5B7dA_u3std4path9Component6Prefix0Csh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1Y_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u9ComponentNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path9ComponentNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::Component<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path9ComponentNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Component<'static>,
    rhs: &::std::path::Component<'static>,
) -> i8 {
    <::std::path::Component<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::Components>() == 64);
const _: () = assert!(::core::mem::align_of::<::std::path::Components>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path10ComponentsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Components<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::Components as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path10ComponentsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::Components<'static>,
    source: &'static ::std::path::Components<'static>,
) -> () {
    unsafe { <::std::path::Components as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsl_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u10ComponentsNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path10ComponentsNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Components<'static>,
    rhs: &::std::path::Components<'static>,
) -> i8 {
    <::std::path::Components<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::Display>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::path::Display>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7DisplayNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path4IterNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Iter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::Iter as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path4IterNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::Iter<'static>,
    source: &'static ::std::path::Iter<'static>,
) -> () {
    unsafe { <::std::path::Iter as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::std::path::PathBuf>() == 24);
const _: () = assert!(::core::mem::align_of::<::std::path::PathBuf>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::PathBuf as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::path::PathBuf,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::path::PathBuf as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    source: &'static ::std::path::PathBuf,
) -> () {
    unsafe { <::std::path::PathBuf as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PathBuf::with_capacity(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf3pop(
    __self: &'static mut ::std::path::PathBuf,
) -> bool {
    unsafe { ::std::path::PathBuf::pop(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf16as_umut_uos_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> &'static mut ::std::ffi::OsString {
    unsafe { ::std::path::PathBuf::as_mut_os_string(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf14into_uos_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf11into_ustring(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf8capacityCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
) -> usize {
    unsafe { ::std::path::PathBuf::capacity(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf5clearCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> () {
    unsafe { ::std::path::PathBuf::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf7reserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
) -> () {
    unsafe { ::std::path::PathBuf::reserve(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf11try_ureserveCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    additional: usize,
) -> () {
    unsafe { ::std::path::PathBuf::reserve_exact(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf17try_ureserve_uexactCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
) -> () {
    unsafe { ::std::path::PathBuf::shrink_to_fit(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsr_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBuf9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::path::PathBuf,
    min_capacity: usize,
) -> () {
    unsafe { ::std::path::PathBuf::shrink_to(__self, min_capacity) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtNtB6_u3ffi6os_ustr8OsStringE4intoCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsW_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBufNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::std::path::PathBuf,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::std::path::PathBuf>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsX_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBufINtNtCsduaz3xaeU7_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: *mut &'static str,
) -> bool {
    unsafe {
        let other = other.read();
        <::std::path::PathBuf as ::core::cmp::PartialEq<str>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsZ_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u7PathBufINtNtCsduaz3xaeU7_u4core3cmp9PartialEqNtNtCs4qcdXyRXuHP_u5alloc6string6StringE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::alloc::string::String,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::alloc::string::String>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2O_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u7PathBufINtNtCsduaz3xaeU7_u4core3cmp9PartialEqNtNtNtB8_u3ffi6os_ustr8OsStringE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PathBuf,
    other: &'static ::std::ffi::OsString,
) -> bool {
    unsafe {
        <::std::path::PathBuf as ::core::cmp::PartialEq<::std::ffi::OsString>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufINtNtCsduaz3xaeU7_u4core7convert4FromNtNtNtB6_u3ffi6os_ustr8OsStringE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufINtNtCsduaz3xaeU7_u4core7convert4FromNtNtCs4qcdXyRXuHP_u5alloc6string6StringE4fromCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::PathBuf,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::PathBuf,
    rhs: &::std::path::PathBuf,
) -> i8 {
    <::std::path::PathBuf as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path7PathBufINtNtCsduaz3xaeU7_u4core3cmp10PartialOrdNtNtNtB6_u3ffi6os_ustr8OsStringE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtCsk7Ax6c5B7dA_u3std4path6Prefix12VerbatimDisk0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::Prefix::VerbatimDisk(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNcNtNtNtCsk7Ax6c5B7dA_u3std4path6Prefix4Disk0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::Prefix::Disk(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4pathNtB2_u6Prefix11is_uverbatimCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::Prefix<'static>,
) -> bool {
    unsafe { ::std::path::Prefix::is_verbatim(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1G_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u6PrefixNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path6PrefixNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::Prefix<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path6PrefixNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::Prefix<'static>,
    rhs: &::std::path::Prefix<'static>,
) -> i8 {
    <::std::path::Prefix<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::path::PrefixComponent>() == 56);
const _: () = assert!(::core::mem::align_of::<::std::path::PrefixComponent>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs_uNtCsk7Ax6c5B7dA_u3std4pathNtB4_u15PrefixComponent4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::path::PrefixComponent<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::path::PrefixComponent::kind(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u15PrefixComponentNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path15PrefixComponentNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::path::PrefixComponent<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4path15PrefixComponentNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::path::PrefixComponent<'static>,
    rhs: &::std::path::PrefixComponent<'static>,
) -> i8 {
    <::std::path::PrefixComponent<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std4path12is_useparatorCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5ChildNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Child,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsT_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Child4kill(
    __self: &'static mut ::std::process::Child,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Child::kill(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsT_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Child2idCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Child,
) -> u32 {
    unsafe { ::std::process::Child::id(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsT_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Child4wait(
    __self: &'static mut ::std::process::Child,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Child::wait(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsT_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Child8try_uwait(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process11ChildStderrNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStderr,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::ChildStdin>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ChildStdin>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process10ChildStdinNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStdin,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::ChildStdout>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::process::ChildStdout>() == 4);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process11ChildStdoutNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::ChildStdout,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::process::Command>() == 200);
const _: () = assert!(::core::mem::align_of::<::std::process::Command>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process7CommandNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Command,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command9env_uclear(
    __self: &'static mut ::std::process::Command,
) -> &'static mut ::std::process::Command {
    unsafe { ::std::process::Command::env_clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRINvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u7Command5stdinNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stdin(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRINvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u7Command6stdoutNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stdout(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRINvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u7Command6stderrNtB6_u5StdioECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Command,
    cfg: *mut ::std::process::Stdio,
) -> &'static mut ::std::process::Command {
    unsafe {
        let cfg = cfg.read();
        ::std::process::Command::stderr(__self, cfg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command5spawn(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::spawn(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command6output(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::output(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command6status(
    __self: &'static mut ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::status(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command8get_uargs(
    __self: &'static ::std::process::Command,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Command::get_args(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsi_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u7Command8get_uenvsCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process8ExitCodeNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ExitCode as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1m_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u8ExitCodeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process8ExitCodeINtNtCsduaz3xaeU7_u4core7convert4FromhE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process10ExitStatusNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ExitStatus as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsF_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u10ExitStatus7successCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
) -> bool {
    unsafe { ::std::process::ExitStatus::success(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsF_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u10ExitStatus4codeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::ExitStatus,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::ExitStatus::code(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs14_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u10ExitStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process10ExitStatusNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process6OutputNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Output,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process6OutputNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::Output,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::Output as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process6OutputNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::Output,
    source: &'static ::std::process::Output,
) -> () {
    unsafe { <::std::process::Output as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs10_uNtCsk7Ax6c5B7dA_u3std7processNtB6_u6OutputNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::process::Stdio,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMst_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Stdio5pipedCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::piped();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMst_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Stdio7inheritCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::inherit();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMst_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u5Stdio4nullCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::process::Stdio::null();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u10ChildStdinE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u11ChildStdoutE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u11ChildStderrE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtNtB6_u2fs4FileE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtNtNtB6_u2io5stdio6StdoutE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtNtNtB6_u2io5stdio6StderrE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtNtNtB6_u2io4pipe10PipeWriterE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std7process5StdioINtNtCsduaz3xaeU7_u4core7convert4FromNtNtNtB6_u2io4pipe10PipeReaderE4fromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std7process5abort() -> !
{
    unsafe { ::std::process::abort() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std7process4exit(
    code: i32,
) -> ! {
    unsafe { ::std::process::exit(code) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtCsk7Ax6c5B7dA_u3std7process2id() -> u32
{
    unsafe { ::std::process::id() }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Barrier>() == 40);
const _: () = assert!(::core::mem::align_of::<::std::sync::Barrier>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync7barrierNtB5_u7Barrier3newCsh9G4tFjYpDL_u8rust_uout(
    n: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Barrier::new(n);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync7barrierNtB5_u7Barrier4wait(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs2_uNtNtCsk7Ax6c5B7dA_u3std4sync7barrierNtB5_u17BarrierWaitResult9is_uleaderCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::BarrierWaitResult,
) -> bool {
    unsafe { ::std::sync::BarrierWaitResult::is_leader(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Condvar>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::sync::Condvar>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtNtCsk7Ax6c5B7dA_u3std4sync6poison7condvar7CondvarNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::sync::Condvar as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtNtCsk7Ax6c5B7dA_u3std4sync6poison7condvarNtB2_u7Condvar3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Condvar::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtNtCsk7Ax6c5B7dA_u3std4sync6poison7condvarNtB2_u7Condvar10notify_uone(
    __self: &'static ::std::sync::Condvar,
) -> () {
    unsafe { ::std::sync::Condvar::notify_one(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtNtCsk7Ax6c5B7dA_u3std4sync6poison7condvarNtB2_u7Condvar10notify_uall(
    __self: &'static ::std::sync::Condvar,
) -> () {
    unsafe { ::std::sync::Condvar::notify_all(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::Once>() == 4);
const _: () = assert!(::core::mem::align_of::<::std::sync::Once>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4sync4once4OnceNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::sync::Once as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB5_u4Once3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::sync::Once::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRINvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB6_u4Once9call_uonceQDINtNtNtCsduaz3xaeU7_u4core3ops8function5FnMutuEp6OutputuEL_uECsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRINvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB6_u4Once15call_uonce_uforceQDG_uINtNtNtCsduaz3xaeU7_u4core3ops8function5FnMutTRL0_uNtB6_u9OnceStateEEp6OutputuEL_uECsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB5_u4Once12is_ucompletedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> bool {
    unsafe { ::std::sync::Once::is_completed(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB5_u4Once4waitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> () {
    unsafe { ::std::sync::Once::wait(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs0_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB5_u4Once10wait_uforceCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::Once,
) -> () {
    unsafe { ::std::sync::Once::wait_force(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::OnceState>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::sync::OnceState>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs3_uNtNtCsk7Ax6c5B7dA_u3std4sync4onceNtB5_u9OnceState11is_upoisonedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::OnceState,
) -> bool {
    unsafe { ::std::sync::OnceState::is_poisoned(__self) }
}
const _: () = assert!(::core::mem::size_of::<::std::sync::WaitTimeoutResult>() == 1);
const _: () = assert!(::core::mem::align_of::<::std::sync::WaitTimeoutResult>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4syncNtB2_u17WaitTimeoutResult9timed_uoutCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::sync::WaitTimeoutResult,
) -> bool {
    unsafe { ::std::sync::WaitTimeoutResult::timed_out(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1_uNtCsk7Ax6c5B7dA_u3std4syncNtB5_u17WaitTimeoutResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsU_uNtNtCsk7Ax6c5B7dA_u3std4sync4mpscNtB5_u16RecvTimeoutErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4sync4mpsc16RecvTimeoutErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsN_uNtNtCsk7Ax6c5B7dA_u3std4sync4mpscNtB5_u12TryRecvErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std4sync4mpsc12TryRecvErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread7builder7BuilderNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Builder,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtNtCsk7Ax6c5B7dA_u3std6thread7builderNtB2_u7Builder3newCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread6scoped5ScopeNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Scope,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
const _: () = assert!(::core::mem::size_of::<::std::thread::Thread>() == 8);
const _: () = assert!(::core::mem::align_of::<::std::thread::Thread>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread6thread6ThreadNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::thread::Thread,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread6thread6ThreadNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::thread::Thread as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread6thread6ThreadNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::thread::Thread,
    source: &'static ::std::thread::Thread,
) -> () {
    unsafe { <::std::thread::Thread as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs_uNtNtCsk7Ax6c5B7dA_u3std6thread6threadNtB4_u6Thread6unparkCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
) -> () {
    unsafe { ::std::thread::Thread::unpark(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs_uNtNtCsk7Ax6c5B7dA_u3std6thread6threadNtB4_u6Thread2idCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::thread::Thread,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::Thread::id(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs_uNtNtCsk7Ax6c5B7dA_u3std6thread6threadNtB4_u6Thread4name(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1_uNtNtCsk7Ax6c5B7dA_u3std6thread2idNtB5_u8ThreadIdNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtNtCsk7Ax6c5B7dA_u3std6thread2id8ThreadIdNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::thread::ThreadId,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread7current7current(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::thread::current();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions9panickingCsh9G4tFjYpDL_u8rust_uout(
) -> bool {
    unsafe { ::std::thread::panicking() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions4park(
) -> () {
    unsafe { ::std::thread::park() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions12park_utimeout(
    dur: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let dur = dur.read();
        ::std::thread::park_timeout(dur)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions15park_utimeout_ums(
    ms: u32,
) -> () {
    unsafe { ::std::thread::park_timeout_ms(ms) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions5sleep(
    dur: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let dur = dur.read();
        ::std::thread::sleep(dur)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions8sleep_ums(
    ms: u32,
) -> () {
    unsafe { ::std::thread::sleep_ms(ms) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvNtNtCsk7Ax6c5B7dA_u3std6thread9functions9yield_unow(
) -> () {
    unsafe { ::std::thread::yield_now() }
}
const _: () = assert!(::core::mem::size_of::<::std::time::Instant>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::Instant>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant3now(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::Instant::now();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant14duration_usince(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant22checked_uduration_usince(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant25saturating_uduration_usince(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant7elapsed(
    __self: &'static ::std::time::Instant,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::Instant::elapsed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant11checked_uadd(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMNtCsk7Ax6c5B7dA_u3std4timeNtB2_u7Instant11checked_usub(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsk_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::Instant,
    other: &'static ::std::time::Instant,
) -> bool {
    unsafe {
        <::std::time::Instant as ::core::cmp::PartialEq<::std::time::Instant>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs_uNtCsk7Ax6c5B7dA_u3std4timeNtB4_u7InstantINtNtNtCsduaz3xaeU7_u4core3ops5arith3AddNtNtBN_u4time8DurationE3add(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantINtNtNtCsduaz3xaeU7_u4core3ops5arith9AddAssignNtNtBO_u4time8DurationE10add_uassign(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantINtNtNtCsduaz3xaeU7_u4core3ops5arith3SubNtNtBO_u4time8DurationE3sub(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantNtNtNtCsduaz3xaeU7_u4core3ops5arith3Sub3sub(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantINtNtNtCsduaz3xaeU7_u4core3ops5arith9SubAssignNtNtBO_u4time8DurationE10sub_uassign(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time7InstantNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::time::Instant,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time7InstantNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::time::Instant,
    rhs: &::std::time::Instant,
) -> i8 {
    <::std::time::Instant as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::time::SystemTime>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::SystemTime>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs5_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTime3now(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTime::now();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs5_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTime14duration_usince(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs5_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTime7elapsed(
    __self: &'static ::std::time::SystemTime,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTime::elapsed(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs5_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTime11checked_uadd(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMs5_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTime11checked_usub(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXst_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeINtNtNtCsduaz3xaeU7_u4core3ops5arith3AddNtNtBS_u4time8DurationE3add(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs7_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeINtNtNtCsduaz3xaeU7_u4core3ops5arith9AddAssignNtNtBS_u4time8DurationE10add_uassign(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeINtNtNtCsduaz3xaeU7_u4core3ops5arith3SubNtNtBS_u4time8DurationE3sub(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs9_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeINtNtNtCsduaz3xaeU7_u4core3ops5arith9SubAssignNtNtBS_u4time8DurationE10sub_uassign(
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
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time10SystemTimeNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::std::time::SystemTime,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time10SystemTimeNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::std::time::SystemTime,
    rhs: &::std::time::SystemTime,
) -> i8 {
    <::std::time::SystemTime as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::std::time::SystemTimeError>() == 16);
const _: () = assert!(::core::mem::align_of::<::std::time::SystemTimeError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time15SystemTimeErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time15SystemTimeErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::time::SystemTimeError,
    source: &'static ::std::time::SystemTimeError,
) -> () {
    unsafe { <::std::time::SystemTimeError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvMsb_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u15SystemTimeError8durationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::time::SystemTimeError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::std::time::SystemTimeError::duration(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYNtNtCsk7Ax6c5B7dA_u3std4time15SystemTimeErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsg_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4ArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits12double_uended19DoubleEndedIterator9next_uback(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsf_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4ArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::Args,
) -> usize {
    unsafe { <::std::env::Args as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4ArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::Args,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Args as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4ArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsm_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsl_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::env::ArgsOs,
) -> usize {
    unsafe { <::std::env::ArgsOs as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsk_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::env::ArgsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::ArgsOs as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsk_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsk_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::std::env::ArgsOs,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::std::env::ArgsOs as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsk_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6ArgsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u10SplitPathsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u10SplitPathsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4VarsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::Vars,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::Vars as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u4VarsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhint(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6VarsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::env::VarsOs,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::env::VarsOs as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std3envNtB5_u6VarsOsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhint(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsg_uNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustrNtB5_u8OsStringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsu_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtNtB9_u2fs4FileNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::fs::File,
) -> bool {
    unsafe { <::std::fs::File as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsa_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsa_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsa_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsa_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read14read_uto_ustring(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsc_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCsduaz3xaeU7_u4core2io4seek4Seek4seek(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsc_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCsduaz3xaeU7_u4core2io4seek4Seek15stream_uposition(
    __self: &'static mut ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Seek>::stream_position(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsb_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsb_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsb_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u4FileNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::fs::File,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::File as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsz_uNtCsk7Ax6c5B7dA_u3std2fsNtB5_u7ReadDirNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::std::fs::ReadDir,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::fs::ReadDir as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtNtCsk7Ax6c5B7dA_u3std4hash6randomNtB5_u13DefaultHasherNtNtCsduaz3xaeU7_u4core4hash6Hasher5writeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::hash::DefaultHasher,
    msg: *mut &'static [u8],
) -> () {
    unsafe {
        let msg = msg.read();
        <::std::hash::DefaultHasher as ::core::hash::Hasher>::write(__self, msg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtNtCsk7Ax6c5B7dA_u3std4hash6randomNtB5_u13DefaultHasherNtNtCsduaz3xaeU7_u4core4hash6Hasher6finishCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::hash::DefaultHasher,
) -> u64 {
    unsafe { <::std::hash::DefaultHasher as ::core::hash::Hasher>::finish(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs_uNtNtCsk7Ax6c5B7dA_u3std4hash6randomNtB4_u11RandomStateNtNtCsduaz3xaeU7_u4core4hash11BuildHasher12build_uhasherCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs5_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs5_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs5_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeReaderNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs7_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs7_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::PipeWriter,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::PipeWriter as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs7_uNtNtCsk7Ax6c5B7dA_u3std2io4pipeNtB5_u10PipeWriterNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsz_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stderr,
) -> bool {
    unsafe { <::std::io::Stderr as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::Stderr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stderr as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_uall(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StderrNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_ufmt(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsA_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StderrLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StderrLock<'static>,
) -> bool {
    unsafe { <::std::io::StderrLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXss_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXss_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXss_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::StderrLock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::StderrLock<'static> as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXss_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StderrLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_uall(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsv_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stdin,
) -> bool {
    unsafe { <::std::io::Stdin as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read14read_uto_ustring(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs3_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u5StdinNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read10read_uexact(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io8buf_uread7BufRead8fill_ubuf(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io8buf_uread7BufRead7consumeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::io::StdinLock<'static>,
    n: usize,
) -> () {
    unsafe { <::std::io::StdinLock<'static> as ::std::io::BufRead>::consume(__self, n) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io8buf_uread7BufRead10read_uuntil(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io8buf_uread7BufRead9read_uline(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsw_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StdinLock<'static>,
) -> bool {
    unsafe { <::std::io::StdinLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read14read_uto_ustring(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs6_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u9StdinLockNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read10read_uexact(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsx_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::Stdout,
) -> bool {
    unsafe { <::std::io::Stdout as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::Stdout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::Stdout as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_uall(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXse_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u6StdoutNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_ufmt(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsy_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StdoutLockNtB5_u10IsTerminal11is_uterminalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::io::StdoutLock<'static>,
) -> bool {
    unsafe { <::std::io::StdoutLock<'static> as ::std::io::IsTerminal>::is_terminal(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsi_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsi_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsi_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flush(
    __self: &'static mut ::std::io::StdoutLock<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::io::StdoutLock<'static> as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsi_uNtNtCsk7Ax6c5B7dA_u3std2io5stdioNtB5_u10StdoutLockNtNtNtCsduaz3xaeU7_u4core2io5write5Write9write_uall(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u8IncomingNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB4_u9TcpStreamNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB4_u9TcpStreamNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs0_uNtNtCsk7Ax6c5B7dA_u3std3net3tcpNtB5_u9TcpStreamNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::net::TcpStream,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::net::TcpStream as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs21_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u9ComponentNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u10ComponentsNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsj_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u10ComponentsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits12double_uended19DoubleEndedIterator9next_uback(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsi_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u10ComponentsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs14_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u7PathBufNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs1E_uNtCsk7Ax6c5B7dA_u3std4pathNtB6_u6PrefixNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std4pathNtB5_u15PrefixComponentNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsd_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStderrNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsd_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStderrNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsd_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStderrNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u10ChildStdinNtNtNtCsduaz3xaeU7_u4core2io5write5Write5write(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u10ChildStdinNtNtNtCsduaz3xaeU7_u4core2io5write5Write14write_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs2_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u10ChildStdinNtNtNtCsduaz3xaeU7_u4core2io5write5Write5flushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::std::process::ChildStdin,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::std::process::ChildStdin as ::std::io::Write>::flush(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStdoutNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read4read(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStdoutNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read13read_uvectored(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXs8_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11ChildStdoutNtNtNtCs4qcdXyRXuHP_u5alloc2io4read4Read11read_uto_uend(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsn_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11CommandArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits10exact_usize17ExactSizeIterator3len(
    __self: &'static ::std::process::CommandArgs<'static>,
) -> usize {
    unsafe {
        <::std::process::CommandArgs<'static> as ::core::iter::ExactSizeIterator>::len(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsm_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11CommandArgsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhint(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsp_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11CommandEnvsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::std::process::CommandEnvs<'static>,
) -> usize {
    unsafe {
        <::std::process::CommandEnvs<'static> as ::core::iter::ExactSizeIterator>::len(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXso_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u11CommandEnvsNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsW_uNtCsk7Ax6c5B7dA_u3std7processNtB5_u8ExitCodeNtB5_u11Termination6reportCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsn_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u7InstantNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvXsw_uNtCsk7Ax6c5B7dA_u3std4timeNtB5_u10SystemTimeNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtCsk7Ax6c5B7dA_u3std4path7PathBufENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtCsk7Ax6c5B7dA_u3std4path7PathBufENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultuNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultuNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    source: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
) -> () {
    unsafe {
        <core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::alloc::string::String,::std::ffi::OsString>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
    source: &'static ::core::result::Result<::alloc::string::String, ::std::ffi::OsString>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::std::ffi::OsString>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsk7Ax6c5B7dA_u3std4path7PathBufENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::alloc::string::String,::std::path::PathBuf>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsk7Ax6c5B7dA_u3std4path7PathBufENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
    source: &'static ::core::result::Result<::alloc::string::String, ::std::path::PathBuf>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::std::path::PathBuf>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtB7_u4time8DurationNtNtCsk7Ax6c5B7dA_u3std4time15SystemTimeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtB7_u4time8DurationNtNtCsk7Ax6c5B7dA_u3std4time15SystemTimeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringB3_uENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::std::ffi::OsString, ::std::ffi::OsString) as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtCs4qcdXyRXuHP_u5alloc6string6StringB3_uENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<(::alloc::string::String,::alloc::string::String,)as::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtCs4qcdXyRXuHP_u5alloc6string6StringB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYTNtNtCs4qcdXyRXuHP_u5alloc6string6StringB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionTNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringBE_uEENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::option::Option<(::std::ffi::OsString,::std::ffi::OsString,)>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionTNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringBE_uEENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
    source: &'static ::core::option::Option<(::std::ffi::OsString, ::std::ffi::OsString)>,
) -> () {
    unsafe {
        <core::option::Option<(::std::ffi::OsString,::std::ffi::OsString,)>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionTNtNtCs4qcdXyRXuHP_u5alloc6string6StringBE_uEENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionTNtNtCs4qcdXyRXuHP_u5alloc6string6StringBE_uEENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<(::alloc::string::String, ::alloc::string::String)>,
    source: &'static ::core::option::Option<(::alloc::string::String, ::alloc::string::String)>,
) -> () {
    unsafe {
        <core::option::Option<(::alloc::string::String,::alloc::string::String,)>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtNtCsk7Ax6c5B7dA_u3std3ffi6os_ustr8OsStringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
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
unsafe extern "C" fn __crubit_thunk_ea60ccc10c98a810__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<::alloc::string::String>,
    source: &'static ::core::option::Option<::alloc::string::String>,
) -> () {
    unsafe {
        <core::option::Option<::alloc::string::String> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
