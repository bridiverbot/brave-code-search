// Automatically @generated C++ bindings for the following Rust crate:
// ift_patcher_rs_1bef5ad5
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::ift_patcher_rs_1bef5ad5::IftApplyStatus>() == 4);
const _: () = assert!(::core::mem::align_of::<::ift_patcher_rs_1bef5ad5::IftApplyStatus>() == 4);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvXs6_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u14IftApplyStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftApplyStatus,
    other: &'static ::ift_patcher_rs_1bef5ad5::IftApplyStatus,
) -> bool {
    unsafe {
        <::ift_patcher_rs_1bef5ad5::IftApplyStatus as ::core::cmp::PartialEq<
            ::ift_patcher_rs_1bef5ad5::IftApplyStatus,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::size_of::<::ift_patcher_rs_1bef5ad5::IftPatcher>() == 224);
const _: () = assert!(::core::mem::align_of::<::ift_patcher_rs_1bef5ad5::IftPatcher>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::ift_patcher_rs_1bef5ad5::IftPatcher as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::ift_patcher_rs_1bef5ad5::IftPatcher,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher6is_uift(
    font_data: *mut &'static [u8],
) -> bool {
    unsafe {
        let font_data = font_data.read();
        ::ift_patcher_rs_1bef5ad5::IftPatcher::is_ift(font_data)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher9font_udataCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftPatcher,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::ift_patcher_rs_1bef5ad5::IftPatcher::font_data(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher30rendered_ufont_urequires_upatches(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftPatcher,
    subset: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
) -> bool {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftPatcher::rendered_font_requires_patches(__self, subset) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher22has_uunrendered_uchangesCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftPatcher,
) -> bool {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftPatcher::has_unrendered_changes(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13mark_urendered(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftPatcher,
) -> () {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftPatcher::mark_rendered(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher15request_upatches(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftPatcher,
    subset: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::ift_patcher_rs_1bef5ad5::IftPatcher::request_patches(__self, subset);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher14add_upatch_udata(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftPatcher,
    patch: *mut &'static str,
    data: *mut &'static [u8],
) -> () {
    unsafe {
        let patch = patch.read();
        let data = data.read();
        ::ift_patcher_rs_1bef5ad5::IftPatcher::add_patch_data(__self, patch, data)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13apply_upatches(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftPatcher,
    subset: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::ift_patcher_rs_1bef5ad5::IftPatcher::apply_patches(__self, subset);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher26has_upending_upatch_urequests(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftPatcher,
) -> bool {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftPatcher::has_pending_patch_requests(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherINtNtCsduaz3xaeU7_u4core7convert4FromRShE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value = <::ift_patcher_rs_1bef5ad5::IftPatcher as ::core::convert::From<
            &'static [u8],
        >>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () =
    assert!(::core::mem::size_of::<::ift_patcher_rs_1bef5ad5::IftSubsetDefinition>() == 152);
const _: () =
    assert!(::core::mem::align_of::<::ift_patcher_rs_1bef5ad5::IftSubsetDefinition>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::ift_patcher_rs_1bef5ad5::IftSubsetDefinition as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::ift_patcher_rs_1bef5ad5::IftSubsetDefinition as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    source: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
) -> () {
    unsafe {
        <::ift_patcher_rs_1bef5ad5::IftSubsetDefinition as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition13add_ucodepoint(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    codepoint: u32,
) -> bool {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition::add_codepoint(__self, codepoint) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition15add_ufeature_utag(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    tag: u32,
) -> bool {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition::add_feature_tag(__self, tag) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition16add_udesign_uspace(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    tag: u32,
    min_val: f64,
    max_val: f64,
) -> bool {
    unsafe {
        ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition::add_design_space(
            __self, tag, min_val, max_val,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5union(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
    other: &'static ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
) -> () {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition::union(__self, other) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5clear(
    __self: &'static mut ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition,
) -> () {
    unsafe { ::ift_patcher_rs_1bef5ad5::IftSubsetDefinition::clear(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::alloc::string::String>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::alloc::string::String> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::alloc::string::String>,
    source: &'static ::alloc::vec::Vec<::alloc::string::String>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::alloc::string::String> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
