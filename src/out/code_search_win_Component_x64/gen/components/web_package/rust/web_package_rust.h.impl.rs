// Automatically @generated C++ bindings for the following Rust crate:
// web_package_rust
// Features: always_specialize_generics_in_cpp_api_from_rust

#![no_std]
#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::web_package_rust::BundleHeaderResult>() == 40);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::BundleHeaderResult>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXsl_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18BundleHeaderResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::BundleHeaderResult,
    other: &'static ::web_package_rust::BundleHeaderResult,
) -> bool {
    unsafe {
        <::web_package_rust::BundleHeaderResult as ::core::cmp::PartialEq<
            ::web_package_rust::BundleHeaderResult,
        >>::eq(__self, other)
    }
}
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::BundleHeaderResult, metadata_sections) == 0
);
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::BundleHeaderResult, responses_offset) == 24
);
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::BundleHeaderResult, responses_length) == 32
);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::HeaderEntry>() == 32);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::HeaderEntry>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXsv_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u11HeaderEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::HeaderEntry<'static>,
    other: &'static ::web_package_rust::HeaderEntry<'static>,
) -> bool {
    unsafe {
        <::web_package_rust::HeaderEntry<'static> as ::core::cmp::PartialEq<
            ::web_package_rust::HeaderEntry<'static>,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::HeaderEntry, name) == 0);
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::HeaderEntry, value) == 16);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::MagicAndVersionResult>() == 24);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::MagicAndVersionResult>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXs9_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u21MagicAndVersionResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::MagicAndVersionResult,
    other: &'static ::web_package_rust::MagicAndVersionResult,
) -> bool {
    unsafe {
        <::web_package_rust::MagicAndVersionResult as ::core::cmp::PartialEq<
            ::web_package_rust::MagicAndVersionResult,
        >>::eq(__self, other)
    }
}
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::MagicAndVersionResult, section_lengths_len) == 0
);
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::MagicAndVersionResult, next_read_offset) == 8
);
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::MagicAndVersionResult, next_read_length) == 16
);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::ParseError>() == 24);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::ParseError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXs2_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::ParseError,
    other: &'static ::web_package_rust::ParseError,
) -> bool {
    unsafe {
        <::web_package_rust::ParseError as::core::cmp::PartialEq<::web_package_rust::ParseError>>::eq(__self,other)
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ParseError, is_version_error) == 0);
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::ParseError, message) == 8);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::ParsedIndexEntry>() == 32);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::ParsedIndexEntry>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXsq_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u16ParsedIndexEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::ParsedIndexEntry<'static>,
    other: &'static ::web_package_rust::ParsedIndexEntry<'static>,
) -> bool {
    unsafe {
        <::web_package_rust::ParsedIndexEntry<'static> as ::core::cmp::PartialEq<
            ::web_package_rust::ParsedIndexEntry<'static>,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::ParsedIndexEntry, url) == 0);
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::ParsedIndexEntry, offset) == 16);
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::ParsedIndexEntry, length) == 24);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::ResponseParseResult>() == 64);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::ResponseParseResult>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXsA_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u19ResponseParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::ResponseParseResult<'static>,
    other: &'static ::web_package_rust::ResponseParseResult<'static>,
) -> bool {
    unsafe {
        <::web_package_rust::ResponseParseResult<'static> as ::core::cmp::PartialEq<
            ::web_package_rust::ResponseParseResult<'static>,
        >>::eq(__self, other)
    }
}
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ResponseParseResult, needs_more_data) == 0);
const _: () = assert!(
    ::core::mem::offset_of!(::web_package_rust::ResponseParseResult, required_buffer_size) == 8
);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ResponseParseResult, response_code) == 16);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ResponseParseResult, headers) == 24);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ResponseParseResult, payload_offset) == 48);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::ResponseParseResult, payload_length) == 56);
const _: () = assert!(::core::mem::size_of::<::web_package_rust::SectionOffsetEntry>() == 40);
const _: () = assert!(::core::mem::align_of::<::web_package_rust::SectionOffsetEntry>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvXsg_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18SectionOffsetEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::web_package_rust::SectionOffsetEntry,
    other: &'static ::web_package_rust::SectionOffsetEntry,
) -> bool {
    unsafe {
        <::web_package_rust::SectionOffsetEntry as ::core::cmp::PartialEq<
            ::web_package_rust::SectionOffsetEntry,
        >>::eq(__self, other)
    }
}
const _: () = assert!(::core::mem::offset_of!(::web_package_rust::SectionOffsetEntry, name) == 0);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::SectionOffsetEntry, offset) == 24);
const _: () =
    assert!(::core::mem::offset_of!(::web_package_rust::SectionOffsetEntry, length) == 32);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http12is_udelimiter(
    b: u8,
) -> bool {
    unsafe { ::web_package_rust::http::is_delimiter(b) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http14is_ufield_uvcharCsh9G4tFjYpDL_u8rust_uout(
    b: &'static u8,
) -> bool {
    unsafe { ::web_package_rust::http::is_field_vchar(b) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http13is_utoken_uchar(
    b: u8,
) -> bool {
    unsafe { ::web_package_rust::http::is_token_char(b) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http20is_uvalid_uheader_uname(
    name: *mut &'static [u8],
) -> bool {
    unsafe {
        let name = name.read();
        ::web_package_rust::http::is_valid_header_name(name)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http21is_uvalid_uheader_uvalue(
    val: *mut &'static [u8],
) -> bool {
    unsafe {
        let val = val.read();
        ::web_package_rust::http::is_valid_header_value(val)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_ubundle_uheader(
    data: *mut &'static [u8],
    section_lengths_len: u64,
    current_offset: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value =
            ::web_package_rust::parse_bundle_header(data, section_lengths_len, current_offset);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser22parse_ucritical_usection(
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::web_package_rust::parse_critical_section(data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_uindex_usection(
    data: *mut &'static [u8],
    responses_offset: u64,
    responses_length: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value =
            ::web_package_rust::parse_index_section(data, responses_offset, responses_length);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser23parse_umagic_uand_uversion(
    data: *mut &'static [u8],
    current_offset: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::web_package_rust::parse_magic_and_version(data, current_offset);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_uprimary_usection(
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::web_package_rust::parse_primary_section(data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser14parse_uresponse(
    data: *mut &'static [u8],
    response_offset: u64,
    response_length: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value =
            ::web_package_rust::parse_response(data, response_offset, response_length);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_utrailing_ulengthCsh9G4tFjYpDL_u8rust_uout(
    data: *mut &'static [u8],
    file_length: u64,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::web_package_rust::parse_trailing_length(data, file_length);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::web_package_rust::HeaderEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<::alloc::vec::Vec<::web_package_rust::HeaderEntry<'static>>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::web_package_rust::HeaderEntry<'static>>,
    source: &'static ::alloc::vec::Vec<::web_package_rust::HeaderEntry<'static>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::web_package_rust::HeaderEntry<'static>>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
    source: &'static ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::web_package_rust::SectionOffsetEntry>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<::alloc::vec::Vec<::web_package_rust::SectionOffsetEntry>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::web_package_rust::SectionOffsetEntry>,
    source: &'static ::alloc::vec::Vec<::web_package_rust::SectionOffsetEntry>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::web_package_rust::SectionOffsetEntry>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
        ::web_package_rust::ParseError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
            ::web_package_rust::ParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
        ::web_package_rust::ParseError,
    >,
    source: &'static ::core::result::Result<
        ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
        ::web_package_rust::ParseError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::alloc::vec::Vec<::web_package_rust::ParsedIndexEntry<'static>>,
            ::web_package_rust::ParseError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::web_package_rust::BundleHeaderResult,
        ::web_package_rust::ParseError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::web_package_rust::BundleHeaderResult,
            ::web_package_rust::ParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::web_package_rust::BundleHeaderResult,
        ::web_package_rust::ParseError,
    >,
    source: &'static ::core::result::Result<
        ::web_package_rust::BundleHeaderResult,
        ::web_package_rust::ParseError,
    >,
) -> () {
    unsafe {
        <core::result::Result<::web_package_rust::BundleHeaderResult,::web_package_rust::ParseError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::web_package_rust::ResponseParseResult<'static>,
        ::web_package_rust::ParseError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::web_package_rust::ResponseParseResult<'static>,
            ::web_package_rust::ParseError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::web_package_rust::ResponseParseResult<'static>,
        ::web_package_rust::ParseError,
    >,
    source: &'static ::core::result::Result<
        ::web_package_rust::ResponseParseResult<'static>,
        ::web_package_rust::ParseError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            ::web_package_rust::ResponseParseResult<'static>,
            ::web_package_rust::ParseError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
