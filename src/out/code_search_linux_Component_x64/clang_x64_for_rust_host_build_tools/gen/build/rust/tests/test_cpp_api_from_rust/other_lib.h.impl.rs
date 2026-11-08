// Automatically @generated C++ bindings for the following Rust crate:
// other_lib_1dc874e1
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::other_lib_1dc874e1::Multiplier>() == 4);
const _: () = assert!(::core::mem::align_of::<::other_lib_1dc874e1::Multiplier>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3newCsh9G4tFjYpDL_u8rust_uout(
    i: i32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::other_lib_1dc874e1::Multiplier::new(i);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3mulCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::other_lib_1dc874e1::Multiplier,
    other: i32,
) -> i32 {
    unsafe { ::other_lib_1dc874e1::Multiplier::mul(__self, other) }
}
