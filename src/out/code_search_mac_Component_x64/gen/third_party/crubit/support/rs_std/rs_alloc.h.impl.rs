// Automatically @generated C++ bindings for the following Rust crate:
// alloc
// Features: always_specialize_generics_in_cpp_api_from_rust

#![no_std]
#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc5alloc5allocCsh9G4tFjYpDL_u8rust_uout(
    layout: *mut ::core::alloc::Layout,
) -> *mut u8 {
    unsafe {
        let layout = layout.read();
        ::alloc::alloc::alloc(layout)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc5alloc12alloc_uzeroedCsh9G4tFjYpDL_u8rust_uout(
    layout: *mut ::core::alloc::Layout,
) -> *mut u8 {
    unsafe {
        let layout = layout.read();
        ::alloc::alloc::alloc_zeroed(layout)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc5alloc7deallocCsh9G4tFjYpDL_u8rust_uout(
    ptr: *mut u8,
    layout: *mut ::core::alloc::Layout,
) -> () {
    unsafe {
        let layout = layout.read();
        ::alloc::alloc::dealloc(ptr, layout)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc5alloc18handle_ualloc_uerror(
    layout: *mut ::core::alloc::Layout,
) -> ! {
    unsafe {
        let layout = layout.read();
        ::alloc::alloc::handle_alloc_error(layout)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc5alloc7reallocCsh9G4tFjYpDL_u8rust_uout(
    ptr: *mut u8,
    layout: *mut ::core::alloc::Layout,
    new_size: usize,
) -> *mut u8 {
    unsafe {
        let layout = layout.read();
        ::alloc::alloc::realloc(ptr, layout, new_size)
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::collections::TryReserveError>() == 16);
const _: () = assert!(::core::mem::align_of::<::alloc::collections::TryReserveError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::collections::TryReserveError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::collections::TryReserveError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::collections::TryReserveError,
    source: &'static ::alloc::collections::TryReserveError,
) -> () {
    unsafe {
        <::alloc::collections::TryReserveError as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs6_uNtCs4qcdXyRXuHP_u5alloc11collectionsNtB5_u15TryReserveErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::collections::TryReserveError,
    other: &'static ::alloc::collections::TryReserveError,
) -> bool {
    unsafe {
        <::alloc::collections::TryReserveError as ::core::cmp::PartialEq<
            ::alloc::collections::TryReserveError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorNtNtB6_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::collections::TryReserveError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::collections::TryReserveError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::ffi::CString>() == 16);
const _: () = assert!(::core::mem::align_of::<::alloc::ffi::CString>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::ffi::CString as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::CString,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::ffi::CString as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::ffi::CString,
    source: &'static ::alloc::ffi::CString,
) -> () {
    unsafe { <::alloc::ffi::CString as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRINvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u7CString3newINtNtB9_u3vec3VechEECsh9G4tFjYpDL_u8rust_uout(
    t: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let t = t.read();
        let __rs_return_value = ::alloc::ffi::CString::new(t);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString18from_uvec_uunchecked(
    v: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::ffi::CString::from_vec_unchecked(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString8from_uraw(
    ptr: *mut i8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::ffi::CString::from_raw(ptr);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString8into_urawCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::CString,
) -> *mut i8 {
    unsafe {
        let __self = __self.read();
        ::alloc::ffi::CString::into_raw(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString11into_ustring(
    __self: *mut ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::CString::into_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString10into_ubytes(
    __self: *mut ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::CString::into_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString19into_ubytes_uwith_unul(
    __self: *mut ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::CString::into_bytes_with_nul(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::ffi::CString::as_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString17as_ubytes_uwith_unulCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::ffi::CString::as_bytes_with_nul(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString27from_uvec_uwith_unul_uunchecked(
    v: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::ffi::CString::from_vec_with_nul_unchecked(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB4_u7CString17from_uvec_uwith_unul(
    v: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::ffi::CString::from_vec_with_nul(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringINtNtCsduaz3xaeU7_u4core7convert4IntoINtNtB8_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::alloc::ffi::CString as ::core::convert::Into<::alloc::vec::Vec<u8>>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsN_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::CString,
    other: &'static ::alloc::ffi::CString,
) -> bool {
    unsafe {
        <::alloc::ffi::CString as ::core::cmp::PartialEq<::alloc::ffi::CString>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::alloc::ffi::CString,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::alloc::ffi::CString,
    rhs: &::alloc::ffi::CString,
) -> i8 {
    <::alloc::ffi::CString as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::alloc::ffi::FromVecWithNulError>() == 40);
const _: () = assert!(::core::mem::align_of::<::alloc::ffi::FromVecWithNulError>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::FromVecWithNulError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::FromVecWithNulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::ffi::FromVecWithNulError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::ffi::FromVecWithNulError,
    source: &'static ::alloc::ffi::FromVecWithNulError,
) -> () {
    unsafe {
        <::alloc::ffi::FromVecWithNulError as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::FromVecWithNulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::ffi::FromVecWithNulError::as_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB2_u19FromVecWithNulError10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::FromVecWithNulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::FromVecWithNulError::into_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs15_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB6_u19FromVecWithNulErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::FromVecWithNulError,
    other: &'static ::alloc::ffi::FromVecWithNulError,
) -> bool {
    unsafe {
        <::alloc::ffi::FromVecWithNulError as ::core::cmp::PartialEq<
            ::alloc::ffi::FromVecWithNulError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr19FromVecWithNulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::FromVecWithNulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::ffi::FromVecWithNulError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::ffi::IntoStringError>() == 32);
const _: () = assert!(::core::mem::align_of::<::alloc::ffi::IntoStringError>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr15IntoStringErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::IntoStringError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::IntoStringError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::ffi::IntoStringError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr15IntoStringErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::ffi::IntoStringError,
    source: &'static ::alloc::ffi::IntoStringError,
) -> () {
    unsafe { <::alloc::ffi::IntoStringError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMsu_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u15IntoStringError12into_ucstringCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::IntoStringError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::IntoStringError::into_cstring(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMsu_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u15IntoStringError10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::IntoStringError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::ffi::IntoStringError::utf8_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1a_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB6_u15IntoStringErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::IntoStringError,
    other: &'static ::alloc::ffi::IntoStringError,
) -> bool {
    unsafe {
        <::alloc::ffi::IntoStringError as ::core::cmp::PartialEq<::alloc::ffi::IntoStringError>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr15IntoStringErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::IntoStringError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::ffi::IntoStringError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::ffi::NulError>() == 32);
const _: () = assert!(::core::mem::align_of::<::alloc::ffi::NulError>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr8NulErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::NulError,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr8NulErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::NulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::ffi::NulError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr8NulErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::ffi::NulError,
    source: &'static ::alloc::ffi::NulError,
) -> () {
    unsafe { <::alloc::ffi::NulError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMsr_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u8NulError12nul_upositionCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::NulError,
) -> usize {
    unsafe { ::alloc::ffi::NulError::nul_position(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMsr_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u8NulError8into_uvecCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::ffi::NulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::ffi::NulError::into_vec(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsV_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u8NulErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::NulError,
    other: &'static ::alloc::ffi::NulError,
) -> bool {
    unsafe {
        <::alloc::ffi::NulError as ::core::cmp::PartialEq<::alloc::ffi::NulError>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr8NulErrorNtNtB8_u6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::NulError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::ffi::NulError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvNtCs4qcdXyRXuHP_u5alloc3fmt6formatCsh9G4tFjYpDL_u8rust_uout(
    args: *mut ::core::fmt::Arguments<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let args = args.read();
        let __rs_return_value = ::alloc::fmt::format(args);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::string::Drain>() == 40);
const _: () = assert!(::core::mem::align_of::<::alloc::string::Drain>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string5DrainNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::Drain,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs19_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u5Drain6as_ustr(
    __self: &'static ::alloc::string::Drain<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::Drain::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::string::FromUtf16Error>() == 1);
const _: () = assert!(::core::mem::align_of::<::alloc::string::FromUtf16Error>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string14FromUtf16ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf16Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::FromUtf16Error as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::string::FromUtf8Error>() == 40);
const _: () = assert!(::core::mem::align_of::<::alloc::string::FromUtf8Error>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string13FromUtf8ErrorNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::FromUtf8Error,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string13FromUtf8ErrorNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::FromUtf8Error as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string13FromUtf8ErrorNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::FromUtf8Error,
    source: &'static ::alloc::string::FromUtf8Error,
) -> () {
    unsafe { <::alloc::string::FromUtf8Error as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtCs4qcdXyRXuHP_u5alloc6stringNtB4_u13FromUtf8Error8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::FromUtf8Error::as_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtCs4qcdXyRXuHP_u5alloc6stringNtB4_u13FromUtf8Error15into_uutf8_ulossy(
    __self: *mut ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::string::FromUtf8Error::into_utf8_lossy(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtCs4qcdXyRXuHP_u5alloc6stringNtB4_u13FromUtf8Error10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::string::FromUtf8Error::into_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMs_uNtCs4qcdXyRXuHP_u5alloc6stringNtB4_u13FromUtf8Error10utf8_uerrorCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::FromUtf8Error::utf8_error(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1o_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u13FromUtf8ErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf8Error,
    other: &'static ::alloc::string::FromUtf8Error,
) -> bool {
    unsafe {
        <::alloc::string::FromUtf8Error as::core::cmp::PartialEq<::alloc::string::FromUtf8Error>>::eq(__self,other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string13FromUtf8ErrorNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::FromUtf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::FromUtf8Error as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::alloc::string::String>() == 24);
const _: () = assert!(::core::mem::align_of::<::alloc::string::String>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::string::String as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::String,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::string::String as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    source: &'static ::alloc::string::String,
) -> () {
    unsafe { <::alloc::string::String as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String13with_ucapacityCsh9G4tFjYpDL_u8rust_uout(
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::with_capacity(capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String9from_uutf8Csh9G4tFjYpDL_u8rust_uout(
    vec: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let vec = vec.read();
        let __rs_return_value = ::alloc::string::String::from_utf8(vec);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String21from_uutf8_ulossy_uowned(
    v: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf8_lossy_owned(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String10from_uutf16(
    v: *mut &'static [u16],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String16from_uutf16_ulossyCsh9G4tFjYpDL_u8rust_uout(
    v: *mut &'static [u16],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16_lossy(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String12from_uutf16le(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16le(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String18from_uutf16le_ulossy(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16le_lossy(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String12from_uutf16be(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16be(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String18from_uutf16be_ulossy(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::alloc::string::String::from_utf16be_lossy(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String14into_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::string::String::into_raw_parts(__self);
        let (__rs_return_value_0, __rs_return_value_1, __rs_return_value_2) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1, __ret_ptr_2] =
            *(__ret_ptr as *mut [*mut core::ffi::c_void; 3usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
        ::core::ptr::write(__ret_ptr_2 as *mut _, __rs_return_value_2);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String14from_uraw_upartsCsh9G4tFjYpDL_u8rust_uout(
    buf: *mut u8,
    length: usize,
    capacity: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::from_raw_parts(buf, length, capacity);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String19from_uutf8_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    bytes: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bytes = bytes.read();
        let __rs_return_value = ::alloc::string::String::from_utf8_unchecked(bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::alloc::string::String::into_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String8push_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    string: *mut &'static str,
) -> () {
    unsafe {
        let string = string.read();
        ::alloc::string::String::push_str(__self, string)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String8capacityCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
) -> usize {
    unsafe { ::alloc::string::String::capacity(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String7reserveCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    additional: usize,
) -> () {
    unsafe { ::alloc::string::String::reserve(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String13reserve_uexactCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    additional: usize,
) -> () {
    unsafe { ::alloc::string::String::reserve_exact(__self, additional) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String11try_ureserve(
    __self: &'static mut ::alloc::string::String,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::try_reserve(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String17try_ureserve_uexact(
    __self: &'static mut ::alloc::string::String,
    additional: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::try_reserve_exact(__self, additional);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String13shrink_uto_ufitCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
) -> () {
    unsafe { ::alloc::string::String::shrink_to_fit(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String9shrink_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    min_capacity: usize,
) -> () {
    unsafe { ::alloc::string::String::shrink_to(__self, min_capacity) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String4pushCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    ch: *mut char,
) -> () {
    unsafe {
        let ch = ch.read();
        ::alloc::string::String::push(__self, ch)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String8as_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::as_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String8truncateCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    new_len: usize,
) -> () {
    unsafe { ::alloc::string::String::truncate(__self, new_len) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String3popCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::pop(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String6removeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    idx: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::remove(__self, idx);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRINvMNtCs4qcdXyRXuHP_u5alloc6stringNtB3_u6String6retainQDINtNtNtCsduaz3xaeU7_u4core3ops8function5FnMutTcEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    f: ::crubit_support::bridge::FnRefPayload,
) -> () {
    unsafe {
        ::alloc::string::String::retain(__self, move |__arg_0: char| {
            let mut __arg_0 = ::core::mem::ManuallyDrop::new(__arg_0);
            let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, *mut char) -> bool =
                unsafe { ::core::mem::transmute(f.invoker()) };
            unsafe { __invoker(f.data(), &mut *__arg_0 as *mut _) }
        })
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String6insertCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    idx: usize,
    ch: *mut char,
) -> () {
    unsafe {
        let ch = ch.read();
        ::alloc::string::String::insert(__self, idx, ch)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String10insert_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    idx: usize,
    string: *mut &'static str,
) -> () {
    unsafe {
        let string = string.read();
        ::alloc::string::String::insert_str(__self, idx, string)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String10as_umut_uvecCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
) -> &'static mut ::alloc::vec::Vec<u8> {
    unsafe { ::alloc::string::String::as_mut_vec(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
) -> usize {
    unsafe { ::alloc::string::String::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
) -> bool {
    unsafe { ::alloc::string::String::is_empty(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String9split_uoffCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    at: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::alloc::string::String::split_off(__self, at);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvMNtCs4qcdXyRXuHP_u5alloc6stringNtB2_u6String5clearCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
) -> () {
    unsafe { ::alloc::string::String::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringINtNtCsduaz3xaeU7_u4core7convert4IntoINtNtB6_u3vec3VechEE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::alloc::string::String as ::core::convert::Into<::alloc::vec::Vec<u8>>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1h_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u6StringNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    other: &'static ::alloc::string::String,
) -> bool {
    unsafe {
        <::alloc::string::String as ::core::cmp::PartialEq<::alloc::string::String>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1w_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u6StringINtNtCsduaz3xaeU7_u4core3cmp9PartialEqeE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    other: *mut &'static str,
) -> bool {
    unsafe {
        let other = other.read();
        <::alloc::string::String as ::core::cmp::PartialEq<str>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXst_uNtCs4qcdXyRXuHP_u5alloc6stringNtB5_u6StringINtNtNtCsduaz3xaeU7_u4core3ops5arith3AddReE3addCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::String,
    other: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value =
            <::alloc::string::String as ::core::ops::Add<&'static str>>::add(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsu_uNtCs4qcdXyRXuHP_u5alloc6stringNtB5_u6StringINtNtNtCsduaz3xaeU7_u4core3ops5arith9AddAssignReE10add_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::String,
    other: *mut &'static str,
) -> () {
    unsafe {
        let other = other.read();
        <::alloc::string::String as ::core::ops::AddAssign<&'static str>>::add_assign(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringINtNtCsduaz3xaeU7_u4core7convert4FromReE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::alloc::string::String as ::core::convert::From<&'static str>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringINtNtCsduaz3xaeU7_u4core7convert4FromcE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut char,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::alloc::string::String as ::core::convert::From<char>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtB4_u8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::String as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::alloc::string::String,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::alloc::string::String,
    rhs: &::alloc::string::String,
) -> i8 {
    <::alloc::string::String as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsQ_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::ffi::CString,
    other: &'static ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::ffi::CString as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsc_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtB5_u7CStringNtNtNtCsduaz3xaeU7_u4core3str6traits7FromStr8from_ustrCsh9G4tFjYpDL_u8rust_uout(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::alloc::ffi::CString as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1d_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u5DrainNtNtNtNtCsduaz3xaeU7_u4core4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::Drain<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::Drain<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1c_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u5DrainNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::string::Drain<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::Drain<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1c_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u5DrainNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator9size_uhint(
    __self: &'static ::alloc::string::Drain<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::string::Drain<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1c_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u5DrainNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::alloc::string::Drain<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::alloc::string::Drain<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXs1k_uNtCs4qcdXyRXuHP_u5alloc6stringNtB6_u6StringNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::string::String,
    other: &'static ::alloc::string::String,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::string::String as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsY_uNtCs4qcdXyRXuHP_u5alloc6stringNtB5_u6StringINtNtCsduaz3xaeU7_u4core7convert7TryFromINtNtB7_u3vec3VechEE8try_ufrom(
    bytes: *mut ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bytes = bytes.read();
        let __rs_return_value = <::alloc::string::String as ::core::convert::TryFrom<
            ::alloc::vec::Vec<u8>,
        >>::try_from(bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvXsd_uNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustrNtNtB9_u6string6StringINtNtCsduaz3xaeU7_u4core7convert7TryFromNtB5_u7CStringE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::alloc::ffi::CString,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::alloc::string::String as ::core::convert::TryFrom<
            ::alloc::ffi::CString,
        >>::try_from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultuNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultuNtNtCs4qcdXyRXuHP_u5alloc11collections15TryReserveErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<(), ::alloc::collections::TryReserveError>,
    source: &'static ::core::result::Result<(), ::alloc::collections::TryReserveError>,
) -> () {
    unsafe {
        <core::result::Result<(),::alloc::collections::TryReserveError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::alloc::ffi::CString,
        ::alloc::ffi::FromVecWithNulError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::ffi::CString,
            ::alloc::ffi::FromVecWithNulError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtBF_u19FromVecWithNulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::ffi::CString,
        ::alloc::ffi::FromVecWithNulError,
    >,
    source: &'static ::core::result::Result<
        ::alloc::ffi::CString,
        ::alloc::ffi::FromVecWithNulError,
    >,
) -> () {
    unsafe {
        <core::result::Result<::alloc::ffi::CString,::alloc::ffi::FromVecWithNulError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::ffi::CString, ::alloc::ffi::NulError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::alloc::ffi::CString,::alloc::ffi::NulError>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtCs4qcdXyRXuHP_u5alloc3ffi5c_ustr7CStringNtBF_u8NulErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::ffi::CString, ::alloc::ffi::NulError>,
    source: &'static ::core::result::Result<::alloc::ffi::CString, ::alloc::ffi::NulError>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::ffi::CString,::alloc::ffi::NulError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::string::String, ::alloc::ffi::IntoStringError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::string::String,
            ::alloc::ffi::IntoStringError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtNtNtBH_u3ffi5c_ustr15IntoStringErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::string::String,
        ::alloc::ffi::IntoStringError,
    >,
    source: &'static ::core::result::Result<::alloc::string::String, ::alloc::ffi::IntoStringError>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::alloc::ffi::IntoStringError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::alloc::string::String,
        ::alloc::string::FromUtf8Error,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::string::String,
            ::alloc::string::FromUtf8Error,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_338312975706eb8f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs4qcdXyRXuHP_u5alloc6string6StringNtBF_u13FromUtf8ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::string::String,
        ::alloc::string::FromUtf8Error,
    >,
    source: &'static ::core::result::Result<
        ::alloc::string::String,
        ::alloc::string::FromUtf8Error,
    >,
) -> () {
    unsafe {
        <core::result::Result<::alloc::string::String,::alloc::string::FromUtf8Error>as::core::clone::Clone>::clone_from(__self,source)
    }
}
