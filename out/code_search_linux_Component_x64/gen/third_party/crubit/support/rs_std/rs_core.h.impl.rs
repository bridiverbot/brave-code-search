// Automatically @generated C++ bindings for the following Rust crate:
// core
// Features: always_specialize_generics_in_cpp_api_from_rust

#![no_std]
#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate core;
const _: () = assert!(::core::mem::size_of::<::core::alloc::Layout>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::alloc::Layout>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB2_u6Layout25from_usize_ualign_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    size: usize,
    align: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::alloc::Layout::from_size_align_unchecked(size, align);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB2_u6Layout4sizeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::alloc::Layout,
) -> usize {
    unsafe { ::core::alloc::Layout::size(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB2_u6Layout5alignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::alloc::Layout,
) -> usize {
    unsafe { ::core::alloc::Layout::align(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB2_u6Layout12dangling_uptrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::alloc::Layout,
) -> ::core::ptr::NonNull<u8> {
    unsafe { ::core::alloc::Layout::dangling_ptr(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB2_u6Layout12pad_uto_ualignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::alloc::Layout,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::alloc::Layout::pad_to_align(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs6_uNtNtCsduaz3xaeU7_u4core5alloc6layoutNtB5_u6LayoutNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::alloc::Layout,
    other: &'static ::core::alloc::Layout,
) -> bool {
    unsafe {
        <::core::alloc::Layout as ::core::cmp::PartialEq<::core::alloc::Layout>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core5alloc6layout6LayoutNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::alloc::Layout,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
const _: () = assert!(::core::mem::size_of::<::core::any::TypeId>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::any::TypeId>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtCsduaz3xaeU7_u4core3anyNtB5_u6TypeIdNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::any::TypeId,
    other: &'static ::core::any::TypeId,
) -> bool {
    unsafe {
        <::core::any::TypeId as ::core::cmp::PartialEq<::core::any::TypeId>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core3any6TypeIdNtNtB6_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::any::TypeId,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core3any6TypeIdNtNtB6_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::any::TypeId,
    rhs: &::core::any::TypeId,
) -> i8 {
    <::core::any::TypeId as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::ascii::EscapeDefault>() == 8);
const _: () = assert!(::core::mem::align_of::<::core::ascii::EscapeDefault>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core5ascii13EscapeDefaultNtNtB6_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::ascii::EscapeDefault,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::ascii::EscapeDefault as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core5ascii13EscapeDefaultNtNtB6_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::ascii::EscapeDefault,
    source: &'static ::core::ascii::EscapeDefault,
) -> () {
    unsafe { <::core::ascii::EscapeDefault as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core5ascii14escape_udefault(
    c: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::ascii::escape_default(c);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4char10from_udigitCsh9G4tFjYpDL_u8rust_uout(
    num: u32,
    radix: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::char::from_digit(num, radix);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4char8from_uu32Csh9G4tFjYpDL_u8rust_uout(
    i: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::char::from_u32(i);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4char18from_uu32_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    i: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::char::from_u32_unchecked(i);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::cmp::Ordering>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::cmp::Ordering>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_ueqCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_eq(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_uneCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_ne(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_ultCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_lt(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_ugtCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_gt(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_uleCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_le(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering5is_ugeCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::core::cmp::Ordering::is_ge(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering7reverseCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::cmp::Ordering::reverse(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core3cmpNtB2_u8Ordering4thenCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
    other: *mut ::core::cmp::Ordering,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value = ::core::cmp::Ordering::then(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvMNtCsduaz3xaeU7_u4core3cmpNtB3_u8Ordering9then_uwithQDINtNtNtB5_u3ops8function5FnMutuEp6OutputBr_uEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::cmp::Ordering,
    f: ::crubit_support::bridge::FnRefPayload,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::cmp::Ordering::then_with(__self, move || {
            let __invoker: unsafe extern "C" fn(
                *mut core::ffi::c_void,
                *mut core::ffi::c_void,
            ) -> () = unsafe { ::core::mem::transmute(f.invoker()) };
            let mut __ret_storage = ::core::mem::MaybeUninit::<::core::cmp::Ordering>::uninit();
            unsafe {
                __invoker(f.data(), __ret_storage.as_mut_ptr() as *mut _);
                __ret_storage.assume_init()
            }
        });
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsf_uNtCsduaz3xaeU7_u4core3cmpNtB5_u8OrderingNtB5_u9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::cmp::Ordering,
    other: &'static ::core::cmp::Ordering,
) -> bool {
    unsafe {
        <::core::cmp::Ordering as ::core::cmp::PartialEq<::core::cmp::Ordering>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core3cmp8OrderingNtNtB6_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::cmp::Ordering,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core3cmp8OrderingNtB4_u3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::cmp::Ordering,
    rhs: &::core::cmp::Ordering,
) -> i8 {
    <::core::cmp::Ordering as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::ffi::FromBytesWithNulError>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::ffi::FromBytesWithNulError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsp_uNtNtCsduaz3xaeU7_u4core3ffi5c_ustrNtB5_u21FromBytesWithNulErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::ffi::FromBytesWithNulError,
    other: &'static ::core::ffi::FromBytesWithNulError,
) -> bool {
    unsafe {
        <::core::ffi::FromBytesWithNulError as ::core::cmp::PartialEq<
            ::core::ffi::FromBytesWithNulError,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::core::ffi::VaList>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::ffi::VaList>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3ffi7va_ulist6VaListNtNtNtB8_u3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::ffi::VaList,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3ffi7va_ulist6VaListNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::ffi::VaList<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::ffi::VaList as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3ffi7va_ulist6VaListNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::ffi::VaList<'static>,
    source: &'static ::core::ffi::VaList<'static>,
) -> () {
    unsafe { <::core::ffi::VaList as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::ffi::c_str::Display>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::ffi::c_str::Display>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::ffi::c_void>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::ffi::c_void>() == 1);
const _: () = assert!(::core::mem::size_of::<::core::fmt::Alignment>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::fmt::Alignment>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsF_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9AlignmentNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Alignment,
    other: &'static ::core::fmt::Alignment,
) -> bool {
    unsafe {
        <::core::fmt::Alignment as ::core::cmp::PartialEq<::core::fmt::Alignment>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::fmt::Arguments>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::fmt::Arguments>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs4_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Arguments6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Arguments<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Arguments::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::fmt::DebugList>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::fmt::DebugList>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::fmt::DebugMap>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::fmt::DebugMap>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::fmt::DebugSet>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::fmt::DebugSet>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::fmt::DebugStruct>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::fmt::DebugStruct>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::fmt::DebugTuple>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::fmt::DebugTuple>() == 8);
const _: () = assert!(::core::mem::size_of::<::core::fmt::Formatter>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::fmt::Formatter>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter5flagsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
) -> u32 {
    unsafe { ::core::fmt::Formatter::flags(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter4fill(
    __self: &'static ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::fill(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter5alignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::align(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter5widthCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::width(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter9precisionCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::precision(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter9sign_uplusCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
) -> bool {
    unsafe { ::core::fmt::Formatter::sign_plus(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter10sign_uminusCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
) -> bool {
    unsafe { ::core::fmt::Formatter::sign_minus(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter9alternateCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
) -> bool {
    unsafe { ::core::fmt::Formatter::alternate(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter19sign_uaware_uzero_upadCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::fmt::Formatter<'static>,
) -> bool {
    unsafe { ::core::fmt::Formatter::sign_aware_zero_pad(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter12debug_ustruct(
    __self: &'static mut ::core::fmt::Formatter<'static>,
    name: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let name = name.read();
        let __rs_return_value = ::core::fmt::Formatter::debug_struct(__self, name);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter11debug_utuple(
    __self: &'static mut ::core::fmt::Formatter<'static>,
    name: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let name = name.read();
        let __rs_return_value = ::core::fmt::Formatter::debug_tuple(__self, name);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter10debug_ulist(
    __self: &'static mut ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::debug_list(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter9debug_uset(
    __self: &'static mut ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::debug_set(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsa_uNtCsduaz3xaeU7_u4core3fmtNtB5_u9Formatter9debug_umap(
    __self: &'static mut ::core::fmt::Formatter<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::fmt::Formatter::debug_map(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::hash::SipHasher>() == 72);
const _: () = assert!(::core::mem::align_of::<::core::hash::SipHasher>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4hash3sip9SipHasherNtNtB8_u7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::hash::SipHasher as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4hash3sip9SipHasherNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::hash::SipHasher,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::hash::SipHasher as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4hash3sip9SipHasherNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::hash::SipHasher,
    source: &'static ::core::hash::SipHasher,
) -> () {
    unsafe { <::core::hash::SipHasher as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core4hash3sipNtB2_u9SipHasher3newCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::hash::SipHasher::new();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core4hash3sipNtB2_u9SipHasher13new_uwith_ukeysCsh9G4tFjYpDL_u8rust_uout(
    key0: u64,
    key1: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::hash::SipHasher::new_with_keys(key0, key1);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4hint16assert_uunchecked(
    cond: bool,
) -> () {
    unsafe { ::core::hint::assert_unchecked(cond) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4hint9cold_upath(
) -> () {
    unsafe { ::core::hint::cold_path() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4hint9spin_uloop(
) -> () {
    unsafe { ::core::hint::spin_loop() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtCsduaz3xaeU7_u4core4hint21unreachable_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
) -> ! {
    unsafe { ::core::hint::unreachable_unchecked() }
}
const _: () = assert!(::core::mem::size_of::<::core::net::AddrParseError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::net::AddrParseError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net6parser14AddrParseErrorNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::AddrParseError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::net::AddrParseError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net6parser14AddrParseErrorNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::AddrParseError,
    source: &'static ::core::net::AddrParseError,
) -> () {
    unsafe { <::core::net::AddrParseError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXso_uNtNtCsduaz3xaeU7_u4core3net6parserNtB5_u14AddrParseErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::AddrParseError,
    other: &'static ::core::net::AddrParseError,
) -> bool {
    unsafe {
        <::core::net::AddrParseError as ::core::cmp::PartialEq<::core::net::AddrParseError>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::net::IpAddr>() == 17);
const _: () = assert!(::core::mem::align_of::<::core::net::IpAddr>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNcNtNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddr2V40Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::core::net::IpAddr::V4(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNcNtNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddr2V60Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::core::net::IpAddr::V6(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr14is_uunspecifiedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
) -> bool {
    unsafe { ::core::net::IpAddr::is_unspecified(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr11is_uloopbackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
) -> bool {
    unsafe { ::core::net::IpAddr::is_loopback(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr12is_umulticastCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
) -> bool {
    unsafe { ::core::net::IpAddr::is_multicast(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr7is_uipv4Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
) -> bool {
    unsafe { ::core::net::IpAddr::is_ipv4(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr7is_uipv6Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
) -> bool {
    unsafe { ::core::net::IpAddr::is_ipv6(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddr12to_ucanonicalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::IpAddr::to_canonical(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsG_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddrNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
    other: &'static ::core::net::IpAddr,
) -> bool {
    unsafe {
        <::core::net::IpAddr as ::core::cmp::PartialEq<::core::net::IpAddr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs8_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddrINtNtB9_u3cmp9PartialEqNtB5_u8Ipv4AddrE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
    other: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe {
        <::core::net::IpAddr as ::core::cmp::PartialEq<::core::net::Ipv4Addr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsm_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddrINtNtB9_u3cmp9PartialEqNtB5_u8Ipv6AddrE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
    other: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe {
        <::core::net::IpAddr as ::core::cmp::PartialEq<::core::net::Ipv6Addr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u7convert4FromNtB4_u8Ipv4AddrE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::IpAddr as ::core::convert::From<::core::net::Ipv4Addr>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u7convert4FromNtB4_u8Ipv6AddrE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::IpAddr as ::core::convert::From<::core::net::Ipv6Addr>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u7convert4FromAhj4_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u8; 4],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::IpAddr as ::core::convert::From<[u8; 4]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u7convert4FromAhj10_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u8; 16],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::IpAddr as ::core::convert::From<[u8; 16]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u7convert4FromAtj8_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u16; 8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::IpAddr as ::core::convert::From<[u16; 8]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::IpAddr,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::IpAddr,
    rhs: &::core::net::IpAddr,
) -> i8 {
    <::core::net::IpAddr as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u3cmp10PartialOrdNtB4_u8Ipv4AddrE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::IpAddr,
    rhs: &::core::net::Ipv4Addr,
) -> i8 {
    match <::core::net::IpAddr as ::core::cmp::PartialOrd<::core::net::Ipv4Addr>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr6IpAddrINtNtB8_u3cmp10PartialOrdNtB4_u8Ipv6AddrE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::IpAddr,
    rhs: &::core::net::Ipv6Addr,
) -> i8 {
    match <::core::net::IpAddr as ::core::cmp::PartialOrd<::core::net::Ipv6Addr>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::core::net::Ipv4Addr>() == 4);
const _: () = assert!(::core::mem::align_of::<::core::net::Ipv4Addr>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr3newCsh9G4tFjYpDL_u8rust_uout(
    a: u8,
    b: u8,
    c: u8,
    d: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv4Addr::new(a, b, c, d);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr7to_ubitsCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
) -> u32 {
    unsafe {
        let __self = __self.read();
        ::core::net::Ipv4Addr::to_bits(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr9from_ubitsCsh9G4tFjYpDL_u8rust_uout(
    bits: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv4Addr::from_bits(bits);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr6octetsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv4Addr::octets(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr11from_uoctetsCsh9G4tFjYpDL_u8rust_uout(
    octets: *mut [u8; 4],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let octets = octets.read();
        let __rs_return_value = ::core::net::Ipv4Addr::from_octets(octets);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr14is_uunspecifiedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_unspecified(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr11is_uloopbackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_loopback(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr10is_uprivateCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_private(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr13is_ulink_ulocalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_link_local(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr12is_umulticastCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_multicast(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr12is_ubroadcastCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_broadcast(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr16is_udocumentationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe { ::core::net::Ipv4Addr::is_documentation(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr18to_uipv6_ucompatibleCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv4Addr::to_ipv6_compatible(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs1_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4Addr14to_uipv6_umappedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv4Addr::to_ipv6_mapped(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrINtNtB8_u7convert4IntoNtB4_u6IpAddrE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::net::Ipv4Addr as ::core::convert::Into<::core::net::IpAddr>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrINtNtB8_u7convert4IntomE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
) -> u32 {
    unsafe {
        let __self = __self.read();
        <::core::net::Ipv4Addr as ::core::convert::Into<u32>>::into(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsO_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4AddrNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    other: &'static ::core::net::Ipv4Addr,
) -> bool {
    unsafe {
        <::core::net::Ipv4Addr as ::core::cmp::PartialEq<::core::net::Ipv4Addr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs9_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4AddrINtNtB9_u3cmp9PartialEqNtB5_u6IpAddrE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    other: &'static ::core::net::IpAddr,
) -> bool {
    unsafe {
        <::core::net::Ipv4Addr as ::core::cmp::PartialEq<::core::net::IpAddr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs18_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv4AddrNtNtNtBa_u3ops3bit6BitAnd6bitandCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
    rhs: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::ops::BitAnd<
            ::core::net::Ipv4Addr,
        >>::bitand(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs16_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv4AddrNtNtNtBa_u3ops3bit12BitAndAssign13bitand_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::Ipv4Addr,
    rhs: *mut ::core::net::Ipv4Addr,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::net::Ipv4Addr as ::core::ops::BitAndAssign<::core::net::Ipv4Addr>>::bitand_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1e_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv4AddrNtNtNtBa_u3ops3bit5BitOr5bitorCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
    rhs: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::ops::BitOr<
            ::core::net::Ipv4Addr,
        >>::bitor(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1c_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv4AddrNtNtNtBa_u3ops3bit11BitOrAssign12bitor_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::Ipv4Addr,
    rhs: *mut ::core::net::Ipv4Addr,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::net::Ipv4Addr as ::core::ops::BitOrAssign<::core::net::Ipv4Addr>>::bitor_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsx_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4AddrNtNtNtB9_u3ops3bit3Not3notCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::ops::Not>::not(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrINtNtB8_u7convert4FrommE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::convert::From<u32>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrINtNtB8_u7convert4FromAhj4_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u8; 4],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::Ipv4Addr as ::core::convert::From<[u8; 4]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::Ipv4Addr,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::Ipv4Addr,
    rhs: &::core::net::Ipv4Addr,
) -> i8 {
    <::core::net::Ipv4Addr as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv4AddrINtNtB8_u3cmp10PartialOrdNtB4_u6IpAddrE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::Ipv4Addr,
    rhs: &::core::net::IpAddr,
) -> i8 {
    match <::core::net::Ipv4Addr as ::core::cmp::PartialOrd<::core::net::IpAddr>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::core::net::Ipv6Addr>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::net::Ipv6Addr>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr3newCsh9G4tFjYpDL_u8rust_uout(
    a: u16,
    b: u16,
    c: u16,
    d: u16,
    e: u16,
    f: u16,
    g: u16,
    h: u16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::new(a, b, c, d, e, f, g, h);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr8segmentsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::segments(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr13from_usegmentsCsh9G4tFjYpDL_u8rust_uout(
    segments: *mut [u16; 8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let segments = segments.read();
        let __rs_return_value = ::core::net::Ipv6Addr::from_segments(segments);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr14is_uunspecifiedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe { ::core::net::Ipv6Addr::is_unspecified(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr11is_uloopbackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe { ::core::net::Ipv6Addr::is_loopback(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr15is_uunique_ulocalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe { ::core::net::Ipv6Addr::is_unique_local(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr21is_uunicast_ulink_ulocalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe { ::core::net::Ipv6Addr::is_unicast_link_local(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr12is_umulticastCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe { ::core::net::Ipv6Addr::is_multicast(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr14to_uipv4_umappedCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::to_ipv4_mapped(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr7to_uipv4Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::to_ipv4(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr12to_ucanonicalCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::to_canonical(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr6octetsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::Ipv6Addr::octets(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsi_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6Addr11from_uoctetsCsh9G4tFjYpDL_u8rust_uout(
    octets: *mut [u8; 16],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let octets = octets.read();
        let __rs_return_value = ::core::net::Ipv6Addr::from_octets(octets);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrINtNtB8_u7convert4IntoNtB4_u6IpAddrE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::net::Ipv6Addr as ::core::convert::Into<::core::net::IpAddr>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsU_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6AddrNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    other: &'static ::core::net::Ipv6Addr,
) -> bool {
    unsafe {
        <::core::net::Ipv6Addr as ::core::cmp::PartialEq<::core::net::Ipv6Addr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsl_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6AddrINtNtB9_u3cmp9PartialEqNtB5_u6IpAddrE2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    other: &'static ::core::net::IpAddr,
) -> bool {
    unsafe {
        <::core::net::Ipv6Addr as ::core::cmp::PartialEq<::core::net::IpAddr>>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1k_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv6AddrNtNtNtBa_u3ops3bit6BitAnd6bitandCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv6Addr,
    rhs: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = <::core::net::Ipv6Addr as ::core::ops::BitAnd<
            ::core::net::Ipv6Addr,
        >>::bitand(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1i_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv6AddrNtNtNtBa_u3ops3bit12BitAndAssign13bitand_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::Ipv6Addr,
    rhs: *mut ::core::net::Ipv6Addr,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::net::Ipv6Addr as ::core::ops::BitAndAssign<::core::net::Ipv6Addr>>::bitand_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1q_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv6AddrNtNtNtBa_u3ops3bit5BitOr5bitorCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv6Addr,
    rhs: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = <::core::net::Ipv6Addr as ::core::ops::BitOr<
            ::core::net::Ipv6Addr,
        >>::bitor(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1o_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB6_u8Ipv6AddrNtNtNtBa_u3ops3bit11BitOrAssign12bitor_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::Ipv6Addr,
    rhs: *mut ::core::net::Ipv6Addr,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::net::Ipv6Addr as ::core::ops::BitOrAssign<::core::net::Ipv6Addr>>::bitor_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsz_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6AddrNtNtNtB9_u3ops3bit3Not3notCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::net::Ipv6Addr as ::core::ops::Not>::not(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrINtNtB8_u7convert4FromAhj10_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u8; 16],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::Ipv6Addr as ::core::convert::From<[u8; 16]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrINtNtB8_u7convert4FromAtj8_uE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut [u16; 8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::core::net::Ipv6Addr as ::core::convert::From<[u16; 8]>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::Ipv6Addr,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::Ipv6Addr,
    rhs: &::core::net::Ipv6Addr,
) -> i8 {
    <::core::net::Ipv6Addr as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net7ip_uaddr8Ipv6AddrINtNtB8_u3cmp10PartialOrdNtB4_u6IpAddrE11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::Ipv6Addr,
    rhs: &::core::net::IpAddr,
) -> i8 {
    match <::core::net::Ipv6Addr as ::core::cmp::PartialOrd<::core::net::IpAddr>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::core::net::SocketAddr>() == 32);
const _: () = assert!(::core::mem::align_of::<::core::net::SocketAddr>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNcNtNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddr2V40Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::core::net::SocketAddrV4,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::core::net::SocketAddr::V4(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNcNtNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddr2V60Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::core::net::SocketAddrV6,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::core::net::SocketAddr::V6(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr3newCsh9G4tFjYpDL_u8rust_uout(
    ip: *mut ::core::net::IpAddr,
    port: u16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let ip = ip.read();
        let __rs_return_value = ::core::net::SocketAddr::new(ip, port);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr2ipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::net::SocketAddr::ip(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr6set_uipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddr,
    new_ip: *mut ::core::net::IpAddr,
) -> () {
    unsafe {
        let new_ip = new_ip.read();
        ::core::net::SocketAddr::set_ip(__self, new_ip)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr4portCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
) -> u16 {
    unsafe { ::core::net::SocketAddr::port(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr8set_uportCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddr,
    new_port: u16,
) -> () {
    unsafe { ::core::net::SocketAddr::set_port(__self, new_port) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr7is_uipv4Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
) -> bool {
    unsafe { ::core::net::SocketAddr::is_ipv4(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB2_u10SocketAddr7is_uipv6Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
) -> bool {
    unsafe { ::core::net::SocketAddr::is_ipv6(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXse_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u10SocketAddrNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
    other: &'static ::core::net::SocketAddr,
) -> bool {
    unsafe {
        <::core::net::SocketAddr as ::core::cmp::PartialEq<::core::net::SocketAddr>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddrINtNtB8_u7convert4FromNtB4_u12SocketAddrV4E4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::core::net::SocketAddrV4,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::core::net::SocketAddr as ::core::convert::From<
            ::core::net::SocketAddrV4,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddrINtNtB8_u7convert4FromNtB4_u12SocketAddrV6E4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::core::net::SocketAddrV6,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::core::net::SocketAddr as ::core::convert::From<
            ::core::net::SocketAddrV6,
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddrNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::SocketAddr,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr10SocketAddrNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::SocketAddr,
    rhs: &::core::net::SocketAddr,
) -> i8 {
    <::core::net::SocketAddr as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::net::SocketAddrV4>() == 6);
const _: () = assert!(::core::mem::align_of::<::core::net::SocketAddrV4>() == 2);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB4_u12SocketAddrV43newCsh9G4tFjYpDL_u8rust_uout(
    ip: *mut ::core::net::Ipv4Addr,
    port: u16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let ip = ip.read();
        let __rs_return_value = ::core::net::SocketAddrV4::new(ip, port);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB4_u12SocketAddrV42ipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV4,
) -> &'static ::core::net::Ipv4Addr {
    unsafe { ::core::net::SocketAddrV4::ip(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB4_u12SocketAddrV46set_uipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV4,
    new_ip: *mut ::core::net::Ipv4Addr,
) -> () {
    unsafe {
        let new_ip = new_ip.read();
        ::core::net::SocketAddrV4::set_ip(__self, new_ip)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB4_u12SocketAddrV44portCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV4,
) -> u16 {
    unsafe { ::core::net::SocketAddrV4::port(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB4_u12SocketAddrV48set_uportCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV4,
    new_port: u16,
) -> () {
    unsafe { ::core::net::SocketAddrV4::set_port(__self, new_port) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV4INtNtB8_u7convert4IntoNtB4_u10SocketAddrE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::SocketAddrV4,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::net::SocketAddrV4 as ::core::convert::Into<
            ::core::net::SocketAddr,
        >>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXso_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV4NtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV4,
    other: &'static ::core::net::SocketAddrV4,
) -> bool {
    unsafe {
        <::core::net::SocketAddrV4 as ::core::cmp::PartialEq<::core::net::SocketAddrV4>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV4NtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::SocketAddrV4,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV4NtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::SocketAddrV4,
    rhs: &::core::net::SocketAddrV4,
) -> i8 {
    <::core::net::SocketAddrV4 as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::net::SocketAddrV6>() == 28);
const _: () = assert!(::core::mem::align_of::<::core::net::SocketAddrV6>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV63newCsh9G4tFjYpDL_u8rust_uout(
    ip: *mut ::core::net::Ipv6Addr,
    port: u16,
    flowinfo: u32,
    scope_id: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let ip = ip.read();
        let __rs_return_value = ::core::net::SocketAddrV6::new(ip, port, flowinfo, scope_id);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV62ipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
) -> &'static ::core::net::Ipv6Addr {
    unsafe { ::core::net::SocketAddrV6::ip(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV66set_uipCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV6,
    new_ip: *mut ::core::net::Ipv6Addr,
) -> () {
    unsafe {
        let new_ip = new_ip.read();
        ::core::net::SocketAddrV6::set_ip(__self, new_ip)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV64portCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
) -> u16 {
    unsafe { ::core::net::SocketAddrV6::port(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV68set_uportCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV6,
    new_port: u16,
) -> () {
    unsafe { ::core::net::SocketAddrV6::set_port(__self, new_port) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV68flowinfoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
) -> u32 {
    unsafe { ::core::net::SocketAddrV6::flowinfo(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV612set_uflowinfoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV6,
    new_flowinfo: u32,
) -> () {
    unsafe { ::core::net::SocketAddrV6::set_flowinfo(__self, new_flowinfo) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV68scope_uidCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
) -> u32 {
    unsafe { ::core::net::SocketAddrV6::scope_id(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV612set_uscope_uidCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::net::SocketAddrV6,
    new_scope_id: u32,
) -> () {
    unsafe { ::core::net::SocketAddrV6::set_scope_id(__self, new_scope_id) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV6INtNtB8_u7convert4IntoNtB4_u10SocketAddrE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::net::SocketAddrV6,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::net::SocketAddrV6 as ::core::convert::Into<
            ::core::net::SocketAddr,
        >>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsx_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV6NtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
    other: &'static ::core::net::SocketAddrV6,
) -> bool {
    unsafe {
        <::core::net::SocketAddrV6 as ::core::cmp::PartialEq<::core::net::SocketAddrV6>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV6NtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::net::SocketAddrV6,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3net11socket_uaddr12SocketAddrV6NtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::net::SocketAddrV6,
    rhs: &::core::net::SocketAddrV6,
) -> i8 {
    <::core::net::SocketAddrV6 as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::num::FpCategory>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::num::FpCategory>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsf_uNtCsduaz3xaeU7_u4core3numNtB5_u10FpCategoryNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::FpCategory,
    other: &'static ::core::num::FpCategory,
) -> bool {
    unsafe {
        <::core::num::FpCategory as ::core::cmp::PartialEq<::core::num::FpCategory>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::num::IntErrorKind>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::num::IntErrorKind>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsl_uNtNtCsduaz3xaeU7_u4core3num5errorNtB5_u12IntErrorKindNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::IntErrorKind,
    other: &'static ::core::num::IntErrorKind,
) -> bool {
    unsafe {
        <::core::num::IntErrorKind as ::core::cmp::PartialEq<::core::num::IntErrorKind>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3num5error12IntErrorKindNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::num::IntErrorKind,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
const _: () = assert!(::core::mem::size_of::<::core::num::ParseFloatError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::num::ParseFloatError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3num11float_uparse15ParseFloatErrorNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::ParseFloatError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::num::ParseFloatError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3num11float_uparse15ParseFloatErrorNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::num::ParseFloatError,
    source: &'static ::core::num::ParseFloatError,
) -> () {
    unsafe { <::core::num::ParseFloatError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs6_uNtNtCsduaz3xaeU7_u4core3num11float_uparseNtB5_u15ParseFloatErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::ParseFloatError,
    other: &'static ::core::num::ParseFloatError,
) -> bool {
    unsafe {
        <::core::num::ParseFloatError as ::core::cmp::PartialEq<::core::num::ParseFloatError>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::num::ParseIntError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::num::ParseIntError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3num5error13ParseIntErrorNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::ParseIntError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::num::ParseIntError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3num5error13ParseIntErrorNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::num::ParseIntError,
    source: &'static ::core::num::ParseIntError,
) -> () {
    unsafe { <::core::num::ParseIntError as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs2_uNtNtCsduaz3xaeU7_u4core3num5errorNtB5_u13ParseIntError4kindCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::ParseIntError,
) -> &'static ::core::num::IntErrorKind {
    unsafe { ::core::num::ParseIntError::kind(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsf_uNtNtCsduaz3xaeU7_u4core3num5errorNtB5_u13ParseIntErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::ParseIntError,
    other: &'static ::core::num::ParseIntError,
) -> bool {
    unsafe {
        <::core::num::ParseIntError as ::core::cmp::PartialEq<::core::num::ParseIntError>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::num::TryFromIntError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::num::TryFromIntError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsa_uNtNtCsduaz3xaeU7_u4core3num5errorNtB5_u15TryFromIntErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::num::TryFromIntError,
    other: &'static ::core::num::TryFromIntError,
) -> bool {
    unsafe {
        <::core::num::TryFromIntError as ::core::cmp::PartialEq<::core::num::TryFromIntError>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::panic::Location>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::panic::Location>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs4_uNtNtCsduaz3xaeU7_u4core5panic8locationNtB5_u8Location6callerCsh9G4tFjYpDL_u8rust_uout(
) -> &'static ::core::panic::Location<'static> {
    unsafe { ::core::panic::Location::caller() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs4_uNtNtCsduaz3xaeU7_u4core5panic8locationNtB5_u8Location4fileCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::Location<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::panic::Location::file(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs4_uNtNtCsduaz3xaeU7_u4core5panic8locationNtB5_u8Location4lineCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::Location<'static>,
) -> u32 {
    unsafe { ::core::panic::Location::line(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs4_uNtNtCsduaz3xaeU7_u4core5panic8locationNtB5_u8Location6columnCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::Location<'static>,
) -> u32 {
    unsafe { ::core::panic::Location::column(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXNtNtCsduaz3xaeU7_u4core5panic8locationNtB2_u8LocationNtNtB6_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::Location<'static>,
    other: &'static ::core::panic::Location<'static>,
) -> bool {
    unsafe {
        <::core::panic::Location<'static> as ::core::cmp::PartialEq<
            ::core::panic::Location<'static>,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core5panic8location8LocationNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::panic::Location<'static>,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core5panic8location8LocationNtNtB8_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::panic::Location<'static>,
    rhs: &::core::panic::Location<'static>,
) -> i8 {
    <::core::panic::Location<'static> as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::panic::PanicInfo>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::panic::PanicInfo>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5panic10panic_uinfoNtB2_u9PanicInfo7messageCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::PanicInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::panic::PanicInfo::message(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core5panic10panic_uinfoNtB2_u9PanicInfo8locationCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::PanicInfo<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::panic::PanicInfo::location(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::panic::PanicMessage>() == 8);
const _: () = assert!(::core::mem::align_of::<::core::panic::PanicMessage>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core5panic10panic_uinfoNtB5_u12PanicMessage6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::panic::PanicMessage<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::panic::PanicMessage::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::slice::EscapeAscii>() == 40);
const _: () = assert!(::core::mem::align_of::<::core::slice::EscapeAscii>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core5slice5ascii11EscapeAsciiNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::slice::EscapeAscii<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::slice::EscapeAscii as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core5slice5ascii11EscapeAsciiNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::slice::EscapeAscii<'static>,
    source: &'static ::core::slice::EscapeAscii<'static>,
) -> () {
    unsafe { <::core::slice::EscapeAscii as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::slice::GetDisjointMutError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::slice::GetDisjointMutError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core5slice19GetDisjointMutErrorNtNtB6_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::slice::GetDisjointMutError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::slice::GetDisjointMutError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core5slice19GetDisjointMutErrorNtNtB6_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::slice::GetDisjointMutError,
    source: &'static ::core::slice::GetDisjointMutError,
) -> () {
    unsafe {
        <::core::slice::GetDisjointMutError as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsi_uNtCsduaz3xaeU7_u4core5sliceNtB5_u19GetDisjointMutErrorNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::slice::GetDisjointMutError,
    other: &'static ::core::slice::GetDisjointMutError,
) -> bool {
    unsafe {
        <::core::slice::GetDisjointMutError as ::core::cmp::PartialEq<
            ::core::slice::GetDisjointMutError,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Bytes>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::str::Bytes>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5BytesNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Bytes<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Bytes as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5BytesNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    source: &'static ::core::str::Bytes<'static>,
) -> () {
    unsafe { <::core::str::Bytes as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::CharIndices>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::str::CharIndices>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11CharIndicesNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::CharIndices as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11CharIndicesNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::CharIndices<'static>,
    source: &'static ::core::str::CharIndices<'static>,
) -> () {
    unsafe { <::core::str::CharIndices as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndices6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::str::CharIndices::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndices6offsetCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::CharIndices<'static>,
) -> usize {
    unsafe { ::core::str::CharIndices::offset(__self) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Chars>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::str::Chars>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5CharsNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Chars as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5CharsNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Chars<'static>,
    source: &'static ::core::str::Chars<'static>,
) -> () {
    unsafe { <::core::str::Chars as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs2_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5Chars6as_ustrCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::str::Chars::as_str(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::str::EncodeUtf16>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::str::EncodeUtf16>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11EncodeUtf16NtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EncodeUtf16<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::EncodeUtf16 as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11EncodeUtf16NtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EncodeUtf16<'static>,
    source: &'static ::core::str::EncodeUtf16<'static>,
) -> () {
    unsafe { <::core::str::EncodeUtf16 as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::EscapeDebug>() == 56);
const _: () = assert!(::core::mem::align_of::<::core::str::EscapeDebug>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11EscapeDebugNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeDebug<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::EscapeDebug as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter11EscapeDebugNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeDebug<'static>,
    source: &'static ::core::str::EscapeDebug<'static>,
) -> () {
    unsafe { <::core::str::EscapeDebug as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::EscapeDefault>() == 56);
const _: () = assert!(::core::mem::align_of::<::core::str::EscapeDefault>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter13EscapeDefaultNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeDefault<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::EscapeDefault as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter13EscapeDefaultNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeDefault<'static>,
    source: &'static ::core::str::EscapeDefault<'static>,
) -> () {
    unsafe { <::core::str::EscapeDefault as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::EscapeUnicode>() == 56);
const _: () = assert!(::core::mem::align_of::<::core::str::EscapeUnicode>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter13EscapeUnicodeNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeUnicode<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::EscapeUnicode as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter13EscapeUnicodeNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeUnicode<'static>,
    source: &'static ::core::str::EscapeUnicode<'static>,
) -> () {
    unsafe { <::core::str::EscapeUnicode as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Lines>() == 72);
const _: () = assert!(::core::mem::align_of::<::core::str::Lines>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5LinesNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Lines<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Lines as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter5LinesNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Lines<'static>,
    source: &'static ::core::str::Lines<'static>,
) -> () {
    unsafe { <::core::str::Lines as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::LinesAny>() == 72);
const _: () = assert!(::core::mem::align_of::<::core::str::LinesAny>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter8LinesAnyNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::LinesAny<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::LinesAny as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter8LinesAnyNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::LinesAny<'static>,
    source: &'static ::core::str::LinesAny<'static>,
) -> () {
    unsafe { <::core::str::LinesAny as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::SplitAsciiWhitespace>() == 24);
const _: () = assert!(::core::mem::align_of::<::core::str::SplitAsciiWhitespace>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter20SplitAsciiWhitespaceNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::SplitAsciiWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitAsciiWhitespace as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter20SplitAsciiWhitespaceNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitAsciiWhitespace<'static>,
    source: &'static ::core::str::SplitAsciiWhitespace<'static>,
) -> () {
    unsafe {
        <::core::str::SplitAsciiWhitespace as ::core::clone::Clone>::clone_from(__self, source)
    }
}
const _: () = assert!(::core::mem::size_of::<::core::str::SplitWhitespace>() == 64);
const _: () = assert!(::core::mem::align_of::<::core::str::SplitWhitespace>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter15SplitWhitespaceNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::SplitWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitWhitespace as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str4iter15SplitWhitespaceNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitWhitespace<'static>,
    source: &'static ::core::str::SplitWhitespace<'static>,
) -> () {
    unsafe { <::core::str::SplitWhitespace as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Utf8Chunk>() == 32);
const _: () = assert!(::core::mem::align_of::<::core::str::Utf8Chunk>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str5lossy9Utf8ChunkNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Chunk<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Utf8Chunk as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str5lossy9Utf8ChunkNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Utf8Chunk<'static>,
    source: &'static ::core::str::Utf8Chunk<'static>,
) -> () {
    unsafe { <::core::str::Utf8Chunk as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3str5lossyNtB4_u9Utf8Chunk5validCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Chunk<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::str::Utf8Chunk::valid(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs_uNtNtCsduaz3xaeU7_u4core3str5lossyNtB4_u9Utf8Chunk7invalidCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Chunk<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::str::Utf8Chunk::invalid(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs8_uNtNtCsduaz3xaeU7_u4core3str5lossyNtB5_u9Utf8ChunkNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Chunk<'static>,
    other: &'static ::core::str::Utf8Chunk<'static>,
) -> bool {
    unsafe {
        <::core::str::Utf8Chunk<'static> as ::core::cmp::PartialEq<
            ::core::str::Utf8Chunk<'static>,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Utf8Chunks>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::str::Utf8Chunks>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str5lossy10Utf8ChunksNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Chunks<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Utf8Chunks as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core3str5lossy10Utf8ChunksNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Utf8Chunks<'static>,
    source: &'static ::core::str::Utf8Chunks<'static>,
) -> () {
    unsafe { <::core::str::Utf8Chunks as ::core::clone::Clone>::clone_from(__self, source) }
}
const _: () = assert!(::core::mem::size_of::<::core::str::Utf8Error>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::str::Utf8Error>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3str5errorNtB2_u9Utf8Error11valid_uup_utoCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Error,
) -> usize {
    unsafe { ::core::str::Utf8Error::valid_up_to(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtNtCsduaz3xaeU7_u4core3str5errorNtB2_u9Utf8Error9error_ulenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Error,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::str::Utf8Error::error_len(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs6_uNtNtCsduaz3xaeU7_u4core3str5errorNtB5_u9Utf8ErrorNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Utf8Error,
    other: &'static ::core::str::Utf8Error,
) -> bool {
    unsafe {
        <::core::str::Utf8Error as ::core::cmp::PartialEq<::core::str::Utf8Error>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtNtCsduaz3xaeU7_u4core3str8converts9from_uutf8(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::core::str::from_utf8(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtNtCsduaz3xaeU7_u4core3str8converts19from_uutf8_uuncheckedCsh9G4tFjYpDL_u8rust_uout(
    v: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let v = v.read();
        let __rs_return_value = ::core::str::from_utf8_unchecked(v);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::core::sync::atomic::Ordering>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::sync::atomic::Ordering>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsr_uNtNtCsduaz3xaeU7_u4core4sync6atomicNtB5_u8OrderingNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::sync::atomic::Ordering,
    other: &'static ::core::sync::atomic::Ordering,
) -> bool {
    unsafe {
        <::core::sync::atomic::Ordering as::core::cmp::PartialEq<::core::sync::atomic::Ordering>>::eq(__self,other)
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4sync6atomic8OrderingNtNtB8_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::sync::atomic::Ordering,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtNtCsduaz3xaeU7_u4core4sync6atomic14compiler_ufenceCsh9G4tFjYpDL_u8rust_uout(
    order: *mut ::core::sync::atomic::Ordering,
) -> () {
    unsafe {
        let order = order.read();
        ::core::sync::atomic::compiler_fence(order)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtNtCsduaz3xaeU7_u4core4sync6atomic5fenceCsh9G4tFjYpDL_u8rust_uout(
    order: *mut ::core::sync::atomic::Ordering,
) -> () {
    unsafe {
        let order = order.read();
        ::core::sync::atomic::fence(order)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvNtNtCsduaz3xaeU7_u4core4sync6atomic14spin_uloop_uhintCsh9G4tFjYpDL_u8rust_uout(
) -> () {
    unsafe { ::core::sync::atomic::spin_loop_hint() }
}
const _: () = assert!(::core::mem::size_of::<::core::task::Context>() == 32);
const _: () = assert!(::core::mem::align_of::<::core::task::Context>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u7Context10from_uwakerCsh9G4tFjYpDL_u8rust_uout(
    waker: &'static ::core::task::Waker,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::task::Context::from_waker(waker);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs0_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u7Context5wakerCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::Context<'static>,
) -> &'static ::core::task::Waker {
    unsafe { ::core::task::Context::waker(__self) }
}
const _: () = assert!(::core::mem::size_of::<::core::task::RawWaker>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::task::RawWaker>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsj_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u8RawWakerNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::RawWaker,
    other: &'static ::core::task::RawWaker,
) -> bool {
    unsafe {
        <::core::task::RawWaker as ::core::cmp::PartialEq<::core::task::RawWaker>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::task::RawWakerVTable>() == 32);
const _: () = assert!(::core::mem::align_of::<::core::task::RawWakerVTable>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsm_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u14RawWakerVTableNtNtB9_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::RawWakerVTable,
    other: &'static ::core::task::RawWakerVTable,
) -> bool {
    unsafe {
        <::core::task::RawWakerVTable as ::core::cmp::PartialEq<::core::task::RawWakerVTable>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::size_of::<::core::task::Waker>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::task::Waker>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4task4wake5WakerNtNtNtB8_u3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::task::Waker,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4task4wake5WakerNtNtB8_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::Waker,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::task::Waker as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtNtCsduaz3xaeU7_u4core4task4wake5WakerNtNtB8_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::task::Waker,
    source: &'static ::core::task::Waker,
) -> () {
    unsafe { <::core::task::Waker as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker4wakeCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::task::Waker,
) -> () {
    unsafe {
        let __self = __self.read();
        ::core::task::Waker::wake(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker11wake_uby_urefCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::Waker,
) -> () {
    unsafe { ::core::task::Waker::wake_by_ref(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker9will_uwakeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::Waker,
    other: &'static ::core::task::Waker,
) -> bool {
    unsafe { ::core::task::Waker::will_wake(__self, other) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker8from_urawCsh9G4tFjYpDL_u8rust_uout(
    waker: *mut ::core::task::RawWaker,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let waker = waker.read();
        let __rs_return_value = ::core::task::Waker::from_raw(waker);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker4noopCsh9G4tFjYpDL_u8rust_uout(
) -> &'static ::core::task::Waker {
    unsafe { ::core::task::Waker::noop() }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMs6_uNtNtCsduaz3xaeU7_u4core4task4wakeNtB5_u5Waker6vtableCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::task::Waker,
) -> &'static ::core::task::RawWakerVTable {
    unsafe { ::core::task::Waker::vtable(__self) }
}
const _: () = assert!(::core::mem::size_of::<::core::time::Duration>() == 16);
const _: () = assert!(::core::mem::align_of::<::core::time::Duration>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core4time8DurationNtNtB6_u7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::time::Duration as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration3newCsh9G4tFjYpDL_u8rust_uout(
    secs: u64,
    nanos: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::new(secs, nanos);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration9from_usecsCsh9G4tFjYpDL_u8rust_uout(
    secs: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_secs(secs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11from_umillisCsh9G4tFjYpDL_u8rust_uout(
    millis: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_millis(millis);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11from_umicrosCsh9G4tFjYpDL_u8rust_uout(
    micros: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_micros(micros);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration10from_unanosCsh9G4tFjYpDL_u8rust_uout(
    nanos: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_nanos(nanos);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration10from_uhoursCsh9G4tFjYpDL_u8rust_uout(
    hours: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_hours(hours);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration9from_uminsCsh9G4tFjYpDL_u8rust_uout(
    mins: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_mins(mins);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7is_uzeroCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> bool {
    unsafe { ::core::time::Duration::is_zero(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7as_usecsCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> u64 {
    unsafe { ::core::time::Duration::as_secs(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration13subsec_umillisCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> u32 {
    unsafe { ::core::time::Duration::subsec_millis(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration13subsec_umicrosCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> u32 {
    unsafe { ::core::time::Duration::subsec_micros(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration12subsec_unanosCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> u32 {
    unsafe { ::core::time::Duration::subsec_nanos(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration8abs_udiffCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    other: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value = ::core::time::Duration::abs_diff(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11checked_uaddCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = ::core::time::Duration::checked_add(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration14saturating_uaddCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = ::core::time::Duration::saturating_add(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11checked_usubCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = ::core::time::Duration::checked_sub(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration14saturating_usubCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value = ::core::time::Duration::saturating_sub(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11checked_umulCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::checked_mul(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration14saturating_umulCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::saturating_mul(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11checked_udivCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::checked_div(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11as_usecs_uf64Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> f64 {
    unsafe { ::core::time::Duration::as_secs_f64(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration11as_usecs_uf32Csh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
) -> f32 {
    unsafe { ::core::time::Duration::as_secs_f32(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration13from_usecs_uf64Csh9G4tFjYpDL_u8rust_uout(
    secs: f64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_secs_f64(secs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration13from_usecs_uf32Csh9G4tFjYpDL_u8rust_uout(
    secs: f32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::from_secs_f32(secs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7mul_uf64Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: f64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::mul_f64(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7mul_uf32Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: f32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::mul_f32(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7div_uf64Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: f64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::div_f64(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration7div_uf32Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: f32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::core::time::Duration::div_f32(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration16div_uduration_uf64Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
) -> f64 {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        ::core::time::Duration::div_duration_f64(__self, rhs)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMNtCsduaz3xaeU7_u4core4timeNtB2_u8Duration16div_uduration_uf32Csh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
) -> f32 {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        ::core::time::Duration::div_duration_f32(__self, rhs)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsc_uNtCsduaz3xaeU7_u4core4timeNtB5_u8Duration17try_ufrom_usecs_uf32Csh9G4tFjYpDL_u8rust_uout(
    secs: f32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::try_from_secs_f32(secs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvMsc_uNtCsduaz3xaeU7_u4core4timeNtB5_u8Duration17try_ufrom_usecs_uf64Csh9G4tFjYpDL_u8rust_uout(
    secs: f64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::core::time::Duration::try_from_secs_f64(secs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsh_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
    other: &'static ::core::time::Duration,
) -> bool {
    unsafe {
        <::core::time::Duration as ::core::cmp::PartialEq<::core::time::Duration>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs_uNtCsduaz3xaeU7_u4core4timeNtB4_u8DurationNtNtNtB6_u3ops5arith3Add3addCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value =
            <::core::time::Duration as ::core::ops::Add<::core::time::Duration>>::add(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs0_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationNtNtNtB7_u3ops5arith9AddAssign10add_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::time::Duration as ::core::ops::AddAssign<::core::time::Duration>>::add_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs6_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationINtNtNtB7_u3ops5arith3DivmE3divCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::time::Duration as ::core::ops::Div<u32>>::div(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationINtNtNtB7_u3ops5arith9DivAssignmE10div_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::time::Duration,
    rhs: u32,
) -> () {
    unsafe { <::core::time::Duration as ::core::ops::DivAssign<u32>>::div_assign(__self, rhs) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationINtNtNtB7_u3ops5arith3MulmE3mulCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::core::time::Duration as ::core::ops::Mul<u32>>::mul(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs5_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationINtNtNtB7_u3ops5arith9MulAssignmE10mul_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::time::Duration,
    rhs: u32,
) -> () {
    unsafe { <::core::time::Duration as ::core::ops::MulAssign<u32>>::mul_assign(__self, rhs) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationNtNtNtB7_u3ops5arith3Sub3subCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let rhs = rhs.read();
        let __rs_return_value =
            <::core::time::Duration as ::core::ops::Sub<::core::time::Duration>>::sub(__self, rhs);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs2_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationNtNtNtB7_u3ops5arith9SubAssign10sub_uassignCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::time::Duration,
    rhs: *mut ::core::time::Duration,
) -> () {
    unsafe {
        let rhs = rhs.read();
        <::core::time::Duration as ::core::ops::SubAssign<::core::time::Duration>>::sub_assign(
            __self, rhs,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core4time8DurationNtNtB6_u4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::core::time::Duration,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core4time8DurationNtNtB6_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::core::time::Duration,
    rhs: &::core::time::Duration,
) -> i8 {
    <::core::time::Duration as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::core::time::TryFromFloatSecsError>() == 1);
const _: () = assert!(::core::mem::align_of::<::core::time::TryFromFloatSecsError>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core4time21TryFromFloatSecsErrorNtNtB6_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::TryFromFloatSecsError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::time::TryFromFloatSecsError as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYNtNtCsduaz3xaeU7_u4core4time21TryFromFloatSecsErrorNtNtB6_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::time::TryFromFloatSecsError,
    source: &'static ::core::time::TryFromFloatSecsError,
) -> () {
    unsafe {
        <::core::time::TryFromFloatSecsError as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsq_uNtCsduaz3xaeU7_u4core4timeNtB5_u21TryFromFloatSecsErrorNtNtB7_u3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::TryFromFloatSecsError,
    other: &'static ::core::time::TryFromFloatSecsError,
) -> bool {
    unsafe {
        <::core::time::TryFromFloatSecsError as ::core::cmp::PartialEq<
            ::core::time::TryFromFloatSecsError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsd_uNtCsduaz3xaeU7_u4core3anyNtB5_u6TypeIdNtNtB7_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::any::TypeId,
    other: &'static ::core::any::TypeId,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::any::TypeId as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs0_uNtCsduaz3xaeU7_u4core5asciiNtB5_u13EscapeDefaultNtNtNtNtB7_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::ascii::EscapeDefault,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::ascii::EscapeDefault as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1_uNtCsduaz3xaeU7_u4core5asciiNtB5_u13EscapeDefaultNtNtNtNtB7_u4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::ascii::EscapeDefault,
) -> usize {
    unsafe { <::core::ascii::EscapeDefault as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs_uNtCsduaz3xaeU7_u4core5asciiNtB4_u13EscapeDefaultNtNtNtNtB6_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::ascii::EscapeDefault,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::ascii::EscapeDefault as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs_uNtCsduaz3xaeU7_u4core5asciiNtB4_u13EscapeDefaultNtNtNtNtB6_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::ascii::EscapeDefault,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::ascii::EscapeDefault as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs_uNtCsduaz3xaeU7_u4core5asciiNtB4_u13EscapeDefaultNtNtNtNtB6_u4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::ascii::EscapeDefault,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::core::ascii::EscapeDefault as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs_uNtCsduaz3xaeU7_u4core5asciiNtB4_u13EscapeDefaultNtNtNtNtB6_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::ascii::EscapeDefault,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::ascii::EscapeDefault as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsd_uNtCsduaz3xaeU7_u4core3cmpNtB5_u8OrderingNtB5_u3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::cmp::Ordering,
    other: &'static ::core::cmp::Ordering,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::cmp::Ordering as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1_uNtNtCsduaz3xaeU7_u4core4hash3sipNtB5_u9SipHasherNtB7_u6Hasher5writeCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::hash::SipHasher,
    msg: *mut &'static [u8],
) -> () {
    unsafe {
        let msg = msg.read();
        <::core::hash::SipHasher as ::core::hash::Hasher>::write(__self, msg)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs1_uNtNtCsduaz3xaeU7_u4core4hash3sipNtB5_u9SipHasherNtB7_u6Hasher6finishCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::hash::SipHasher,
) -> u64 {
    unsafe { <::core::hash::SipHasher as ::core::hash::Hasher>::finish(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsJ_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u6IpAddrNtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::IpAddr,
    other: &'static ::core::net::IpAddr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::IpAddr as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsd_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv4AddrNtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv4Addr,
    other: &'static ::core::net::Ipv4Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsq_uNtNtCsduaz3xaeU7_u4core3net7ip_uaddrNtB5_u8Ipv6AddrNtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::Ipv6Addr,
    other: &'static ::core::net::Ipv6Addr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::Ipv6Addr as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsi_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u10SocketAddrNtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddr,
    other: &'static ::core::net::SocketAddr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::SocketAddr as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsp_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV4NtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV4,
    other: &'static ::core::net::SocketAddrV4,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::SocketAddrV4 as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsy_uNtNtCsduaz3xaeU7_u4core3net11socket_uaddrNtB5_u12SocketAddrV6NtNtB9_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::net::SocketAddrV6,
    other: &'static ::core::net::SocketAddrV6,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::net::SocketAddrV6 as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs0_uNtNtCsduaz3xaeU7_u4core5panic8locationNtB5_u8LocationNtNtB9_u3cmp3Ord3cmp(
    __self: &'static ::core::panic::Location<'static>,
    other: &'static ::core::panic::Location<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::panic::Location<'static> as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs4_uNtNtCsduaz3xaeU7_u4core5slice5asciiNtB5_u11EscapeAsciiNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_uback(
    __self: &'static mut ::core::slice::EscapeAscii<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::slice::EscapeAscii<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core5slice5asciiNtB5_u11EscapeAsciiNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::slice::EscapeAscii<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::slice::EscapeAscii<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core5slice5asciiNtB5_u11EscapeAsciiNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::slice::EscapeAscii<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::slice::EscapeAscii<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core5slice5asciiNtB5_u11EscapeAsciiNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::slice::EscapeAscii<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::slice::EscapeAscii<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs8_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs8_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator8nth_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    n: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::DoubleEndedIterator>::nth_back(__self, n);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs8_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits12double_uended19DoubleEndedIterator5rfindQDG_uINtNtNtBa_u3ops8function5FnMutTRL0_uhEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    predicate: ::crubit_support::bridge::FnRefPayload,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::DoubleEndedIterator>::rfind(
                __self,
                move |__arg_0: &u8| {
                    let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, *const u8) -> bool =
                        unsafe { ::core::mem::transmute(predicate.invoker()) };
                    unsafe { __invoker(predicate.data(), __arg_0 as *const _) }
                },
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs9_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits10exact_usize17ExactSizeIterator3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Bytes<'static>,
) -> usize {
    unsafe { <::core::str::Bytes<'static> as ::core::iter::ExactSizeIterator>::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Bytes<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::Bytes<'static>,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::core::str::Bytes<'static> as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::Bytes<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5BytesNtNtNtNtB9_u4iter6traits8iterator8Iterator3nthCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    n: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Bytes<'static> as ::core::iter::Iterator>::nth(__self, n);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits8iterator8Iterator3allQDINtNtNtBa_u3ops8function5FnMutThEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    f: ::crubit_support::bridge::FnRefPayload,
) -> bool {
    unsafe {
        <::core::str::Bytes<'static> as ::core::iter::Iterator>::all(__self, move |__arg_0: u8| {
            let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, u8) -> bool =
                unsafe { ::core::mem::transmute(f.invoker()) };
            unsafe { __invoker(f.data(), __arg_0) }
        })
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits8iterator8Iterator3anyQDINtNtNtBa_u3ops8function5FnMutThEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    f: ::crubit_support::bridge::FnRefPayload,
) -> bool {
    unsafe {
        <::core::str::Bytes<'static> as ::core::iter::Iterator>::any(__self, move |__arg_0: u8| {
            let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, u8) -> bool =
                unsafe { ::core::mem::transmute(f.invoker()) };
            unsafe { __invoker(f.data(), __arg_0) }
        })
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits8iterator8Iterator4findQDG_uINtNtNtBa_u3ops8function5FnMutTRL0_uhEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    predicate: ::crubit_support::bridge::FnRefPayload,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Bytes<'static> as ::core::iter::Iterator>::find(
            __self,
            move |__arg_0: &u8| {
                let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, *const u8) -> bool =
                    unsafe { ::core::mem::transmute(predicate.invoker()) };
                unsafe { __invoker(predicate.data(), __arg_0 as *const _) }
            },
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits8iterator8Iterator8positionQDINtNtNtBa_u3ops8function5FnMutThEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    predicate: ::crubit_support::bridge::FnRefPayload,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Bytes<'static> as ::core::iter::Iterator>::position(
            __self,
            move |__arg_0: u8| {
                let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, u8) -> bool =
                    unsafe { ::core::mem::transmute(predicate.invoker()) };
                unsafe { __invoker(predicate.data(), __arg_0) }
            },
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRINvXs7_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u5BytesNtNtNtNtBa_u4iter6traits8iterator8Iterator9rpositionQDINtNtNtBa_u3ops8function5FnMutThEEp6OutputbEL_uECsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Bytes<'static>,
    predicate: ::crubit_support::bridge::FnRefPayload,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::str::Bytes<'static> as ::core::iter::Iterator>::rposition(
            __self,
            move |__arg_0: u8| {
                let __invoker: unsafe extern "C" fn(*mut core::ffi::c_void, u8) -> bool =
                    unsafe { ::core::mem::transmute(predicate.invoker()) };
                unsafe { __invoker(predicate.data(), __arg_0) }
            },
        );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs4_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndicesNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::CharIndices<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndicesNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::CharIndices<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndicesNtNtNtNtB9_u4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::CharIndices<'static>,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::core::str::CharIndices<'static> as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndicesNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::CharIndices<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs3_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11CharIndicesNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::CharIndices<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::CharIndices<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs0_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5CharsNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Chars<'static> as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXNtNtCsduaz3xaeU7_u4core3str4iterNtB2_u5CharsNtNtNtNtB6_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Chars<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXNtNtCsduaz3xaeU7_u4core3str4iterNtB2_u5CharsNtNtNtNtB6_u4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::Chars<'static>,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::core::str::Chars<'static> as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXNtNtCsduaz3xaeU7_u4core3str4iterNtB2_u5CharsNtNtNtNtB6_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Chars<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXNtNtCsduaz3xaeU7_u4core3str4iterNtB2_u5CharsNtNtNtNtB6_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::Chars<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::Chars<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsO_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11EncodeUtf16NtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EncodeUtf16<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EncodeUtf16<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsO_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11EncodeUtf16NtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EncodeUtf16<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EncodeUtf16<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsO_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u11EncodeUtf16NtNtNtNtB9_u4iter6traits8iterator8Iterator5countCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::EncodeUtf16<'static>,
) -> usize {
    unsafe {
        let __self = __self.read();
        <::core::str::EncodeUtf16<'static> as ::core::iter::Iterator>::count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs21_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u11EscapeDebugNtNtNtNtBa_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeDebug<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeDebug<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs21_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u11EscapeDebugNtNtNtNtBa_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeDebug<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeDebug<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs24_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u13EscapeDefaultNtNtNtNtBa_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeDefault<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeDefault<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs24_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u13EscapeDefaultNtNtNtNtBa_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeDefault<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeDefault<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs27_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u13EscapeUnicodeNtNtNtNtBa_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::EscapeUnicode<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeUnicode<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs27_uNtNtCsduaz3xaeU7_u4core3str4iterNtB6_u13EscapeUnicodeNtNtNtNtBa_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::EscapeUnicode<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::EscapeUnicode<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXst_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5LinesNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Lines<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Lines<'static> as ::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXss_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5LinesNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::Lines<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Lines<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXss_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5LinesNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::Lines<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Lines<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXss_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u5LinesNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::Lines<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::Lines<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsx_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u8LinesAnyNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::LinesAny<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::LinesAny<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsw_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u8LinesAnyNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::LinesAny<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::LinesAny<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsw_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u8LinesAnyNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::LinesAny<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::LinesAny<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsE_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u20SplitAsciiWhitespaceNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitAsciiWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<::core::str::SplitAsciiWhitespace<'static>as::core::iter::DoubleEndedIterator>::next_back(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsD_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u20SplitAsciiWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitAsciiWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitAsciiWhitespace<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsD_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u20SplitAsciiWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::SplitAsciiWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitAsciiWhitespace<'static> as ::core::iter::Iterator>::size_hint(
                __self,
            );
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsD_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u20SplitAsciiWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::SplitAsciiWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::SplitAsciiWhitespace<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsA_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u15SplitWhitespaceNtNtNtNtB9_u4iter6traits12double_uended19DoubleEndedIterator9next_ubackCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitWhitespace<'static> as ::core::iter::DoubleEndedIterator>::next_back(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsz_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u15SplitWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::str::SplitWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitWhitespace<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsz_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u15SplitWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator9size_uhintCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::str::SplitWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::SplitWhitespace<'static> as ::core::iter::Iterator>::size_hint(__self);
        let (__rs_return_value_0, __rs_return_value_1) = __rs_return_value;
        let [__ret_ptr_0, __ret_ptr_1] = *(__ret_ptr as *mut [*mut core::ffi::c_void; 2usize]);
        ::core::ptr::write(__ret_ptr_0 as *mut _, __rs_return_value_0);
        ::core::ptr::write(__ret_ptr_1 as *mut _, __rs_return_value_1);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsz_uNtNtCsduaz3xaeU7_u4core3str4iterNtB5_u15SplitWhitespaceNtNtNtNtB9_u4iter6traits8iterator8Iterator4lastCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::core::str::SplitWhitespace<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::core::str::SplitWhitespace<'static> as ::core::iter::Iterator>::last(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs2_uNtNtCsduaz3xaeU7_u4core3str5lossyNtB5_u10Utf8ChunksNtNtNtNtB9_u4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::core::str::Utf8Chunks<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::core::str::Utf8Chunks<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsk_uNtCsduaz3xaeU7_u4core4timeNtB5_u8DurationNtNtB7_u3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::time::Duration,
    other: &'static ::core::time::Duration,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::core::time::Duration as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs0_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u7ip_uaddr6IpAddrNtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::IpAddr as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs2_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u7ip_uaddr8Ipv4AddrNtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::Ipv4Addr as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs4_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u7ip_uaddr8Ipv6AddrNtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::Ipv6Addr as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXsa_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u11socket_uaddr10SocketAddrNtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::SocketAddr as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs6_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u11socket_uaddr12SocketAddrV4NtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::SocketAddrV4 as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvXs8_uNtNtCsduaz3xaeU7_u4core3net6parserNtNtB7_u11socket_uaddr12SocketAddrV6NtNtNtB9_u3str6traits7FromStr8from_ustr(
    s: *mut &'static str,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let s = s.read();
        let __rs_return_value = <::core::net::SocketAddrV6 as ::core::str::FromStr>::from_str(s);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtB7_u4time8DurationNtBF_u21TryFromFloatSecsErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::core::time::Duration,
        ::core::time::TryFromFloatSecsError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::time::Duration,
            ::core::time::TryFromFloatSecsError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtB7_u4time8DurationNtBF_u21TryFromFloatSecsErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::core::time::Duration,
        ::core::time::TryFromFloatSecsError,
    >,
    source: &'static ::core::result::Result<
        ::core::time::Duration,
        ::core::time::TryFromFloatSecsError,
    >,
) -> () {
    unsafe {
        <core::result::Result<::core::time::Duration,::core::time::TryFromFloatSecsError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYTjcENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <(usize, char) as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::offset_of!((usize, char,), 0) == 0);
const _: () = assert!(::core::mem::offset_of!((usize, char,), 1) == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtNtB7_u3str5lossy9Utf8ChunkENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::option::Option<::core::str::Utf8Chunk<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <core::option::Option<::core::str::Utf8Chunk<'static>> as ::core::clone::Clone>::clone(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6option6OptionNtNtNtB7_u3str5lossy9Utf8ChunkENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::option::Option<::core::str::Utf8Chunk<'static>>,
    source: &'static ::core::option::Option<::core::str::Utf8Chunk<'static>>,
) -> () {
    unsafe {
        <core::option::Option<::core::str::Utf8Chunk<'static>> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr6IpAddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::IpAddr, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::IpAddr,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr6IpAddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::core::net::IpAddr, ::core::net::AddrParseError>,
    source: &'static ::core::result::Result<::core::net::IpAddr, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::IpAddr,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr8Ipv4AddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::Ipv4Addr, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::Ipv4Addr,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr8Ipv4AddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::core::net::Ipv4Addr, ::core::net::AddrParseError>,
    source: &'static ::core::result::Result<::core::net::Ipv4Addr, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::Ipv4Addr,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr8Ipv6AddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::Ipv6Addr, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::Ipv6Addr,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net7ip_uaddr8Ipv6AddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::core::net::Ipv6Addr, ::core::net::AddrParseError>,
    source: &'static ::core::result::Result<::core::net::Ipv6Addr, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::Ipv6Addr,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr10SocketAddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::SocketAddr, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::SocketAddr,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr10SocketAddrNtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::core::net::SocketAddr,
        ::core::net::AddrParseError,
    >,
    source: &'static ::core::result::Result<::core::net::SocketAddr, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::SocketAddr,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr12SocketAddrV4NtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::SocketAddrV4, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::SocketAddrV4,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr12SocketAddrV4NtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::core::net::SocketAddrV4,
        ::core::net::AddrParseError,
    >,
    source: &'static ::core::result::Result<::core::net::SocketAddrV4, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::SocketAddrV4,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr12SocketAddrV6NtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::core::net::SocketAddrV6, ::core::net::AddrParseError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::core::net::SocketAddrV6,
            ::core::net::AddrParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_2889e067fed0af1__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtNtB7_u3net11socket_uaddr12SocketAddrV6NtNtBH_u6parser14AddrParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::core::net::SocketAddrV6,
        ::core::net::AddrParseError,
    >,
    source: &'static ::core::result::Result<::core::net::SocketAddrV6, ::core::net::AddrParseError>,
) -> () {
    unsafe {
        <core::result::Result<::core::net::SocketAddrV6,::core::net::AddrParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
