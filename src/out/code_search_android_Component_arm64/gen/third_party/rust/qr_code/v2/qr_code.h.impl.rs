// Automatically @generated C++ bindings for the following Rust crate:
// qr_code
// Features: always_specialize_generics_in_cpp_api_from_rust

#![allow(unused_unsafe, deprecated, non_snake_case, unreachable_code)]
#![allow(improper_ctypes_definitions)]
#![deny(warnings)]

extern crate alloc;
extern crate core;
const _: () = assert!(::core::mem::size_of::<::qr_code::Color>() == 1);
const _: () = assert!(::core::mem::align_of::<::qr_code::Color>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXsg_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::Color,
    other: &'static ::qr_code::Color,
) -> bool {
    unsafe { <::qr_code::Color as ::core::cmp::PartialEq<::qr_code::Color>>::eq(__self, other) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtNtCsduaz3xaeU7_u4core3ops3bit3Not3notCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::Color,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = <::qr_code::Color as ::core::ops::Not>::not(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorINtNtCsduaz3xaeU7_u4core7convert4FromNtNtB6_u6canvas6ModuleE4fromCsh9G4tFjYpDL_u8rust_uout(
    value: *mut ::qr_code::canvas::Module,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let value = value.read();
        let __rs_return_value =
            <::qr_code::Color as ::core::convert::From<::qr_code::canvas::Module>>::from(value);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    self_: &::qr_code::Color,
) -> u64 {
    ::crubit_support::hash::hash_u64(self_)
}
const _: () = assert!(::core::mem::size_of::<::qr_code::EcLevel>() == 1);
const _: () = assert!(::core::mem::align_of::<::qr_code::EcLevel>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXsm_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::EcLevel,
    other: &'static ::qr_code::EcLevel,
) -> bool {
    unsafe { <::qr_code::EcLevel as ::core::cmp::PartialEq<::qr_code::EcLevel>>::eq(__self, other) }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::qr_code::EcLevel,
    rhs: &::qr_code::EcLevel,
) -> i8 {
    <::qr_code::EcLevel as ::core::cmp::Ord>::cmp(lhs, rhs) as i8
}
const _: () = assert!(::core::mem::size_of::<::qr_code::QrCode>() == 40);
const _: () = assert!(::core::mem::align_of::<::qr_code::QrCode>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::QrCode,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::qr_code::QrCode as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::qr_code::QrCode,
    source: &'static ::qr_code::QrCode,
) -> () {
    unsafe { <::qr_code::QrCode as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode3newRShECsh9G4tFjYpDL_u8rust_uout(
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::QrCode::new(data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode27with_uerror_ucorrection_ulevelRShECsh9G4tFjYpDL_u8rust_uout(
    data: *mut &'static [u8],
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::QrCode::with_error_correction_level(data, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode12with_uversionRShECsh9G4tFjYpDL_u8rust_uout(
    data: *mut &'static [u8],
    version: *mut ::qr_code::Version,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let version = version.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::QrCode::with_version(data, version, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode9with_ubits(
    bits: *mut ::qr_code::bits::Bits,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bits = bits.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::QrCode::with_bits(bits, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode7versionCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::QrCode::version(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode22error_ucorrection_ulevelCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::QrCode::error_correction_level(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode5widthCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
) -> usize {
    unsafe { ::qr_code::QrCode::width(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode18max_uallowed_uerrors(
    __self: &'static ::qr_code::QrCode,
) -> usize {
    unsafe { ::qr_code::QrCode::max_allowed_errors(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode13is_ufunctional(
    __self: &'static ::qr_code::QrCode,
    x: usize,
    y: usize,
) -> bool {
    unsafe { ::qr_code::QrCode::is_functional(__self, x, y) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode6to_uvec(
    __self: &'static ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::QrCode::to_vec(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode4iterCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::QrCode::iter(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode11into_ucolorsCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::QrCode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::qr_code::QrCode::into_colors(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode6renderNtB4_u6QrCode9to_ustring(
    __self: &'static ::qr_code::QrCode,
    inverted: bool,
    border: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::QrCode::to_string(__self, inverted, border);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs_uCsgh4rY7Lrz8V_u7qr_ucodeNtB4_u6QrCodeINtNtNtCsduaz3xaeU7_u4core3ops5index5IndexTjjEE5indexCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::QrCode,
    __param_1: *const [*const core::ffi::c_void; 2usize],
) -> &'static ::qr_code::Color {
    unsafe {
        let __param_1 = (
            {
                let __param_1_0: usize = ((*__param_1)[0usize] as *const usize).read();
                __param_1_0
            },
            {
                let __param_1_1: usize = ((*__param_1)[1usize] as *const usize).read();
                __param_1_1
            },
        );
        <::qr_code::QrCode as ::core::ops::Index<(usize, usize)>>::index(__self, __param_1)
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::QrCodeIterator>() == 16);
const _: () = assert!(::core::mem::align_of::<::qr_code::QrCodeIterator>() == 8);
const _: () = assert!(::core::mem::size_of::<::qr_code::Version>() == 4);
const _: () = assert!(::core::mem::align_of::<::qr_code::Version>() == 2);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version6Normal0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::Version::Normal(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version5Micro0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::Version::Micro(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version5widthCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::Version,
) -> i16 {
    unsafe {
        let __self = __self.read();
        ::qr_code::Version::width(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version15mode_ubits_ucount(
    __self: *mut ::qr_code::Version,
) -> usize {
    unsafe {
        let __self = __self.read();
        ::qr_code::Version::mode_bits_count(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version8is_umicroCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::Version,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::qr_code::Version::is_micro(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXsv_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7VersionNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::Version,
    other: &'static ::qr_code::Version,
) -> bool {
    unsafe { <::qr_code::Version as ::core::cmp::PartialEq<::qr_code::Version>>::eq(__self, other) }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::bits::Bits>() == 40);
const _: () = assert!(::core::mem::align_of::<::qr_code::bits::Bits>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::bits::Bits,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::bits::Bits,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::qr_code::bits::Bits as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::qr_code::bits::Bits,
    source: &'static ::qr_code::bits::Bits,
) -> () {
    unsafe { <::qr_code::bits::Bits as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3newCsh9G4tFjYpDL_u8rust_uout(
    version: *mut ::qr_code::Version,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let version = version.read();
        let __rs_return_value = ::qr_code::bits::Bits::new(version);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits19push_unumber_uchecked(
    __self: &'static mut ::qr_code::bits::Bits,
    n: usize,
    number: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::bits::Bits::push_number_checked(__self, n, number);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::bits::Bits,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::qr_code::bits::Bits::into_bytes(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3lenCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::bits::Bits,
) -> usize {
    unsafe { ::qr_code::bits::Bits::len(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::bits::Bits,
) -> bool {
    unsafe { ::qr_code::bits::Bits::is_empty(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7max_ulen(
    __self: &'static ::qr_code::bits::Bits,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::bits::Bits::max_len(__self, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7versionCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::bits::Bits,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::bits::Bits::version(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits24push_ufnc1_ufirst_uposition(
    __self: &'static mut ::qr_code::bits::Bits,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::bits::Bits::push_fnc1_first_position(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits25push_ufnc1_usecond_uposition(
    __self: &'static mut ::qr_code::bits::Bits,
    application_indicator: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::qr_code::bits::Bits::push_fnc1_second_position(__self, application_indicator);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits22push_ualphanumeric_udata(
    __self: &'static mut ::qr_code::bits::Bits,
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_alphanumeric_data(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs7_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_uoptimal_udata(
    __self: &'static mut ::qr_code::bits::Bits,
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_optimal_data(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs6_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_uterminator(
    __self: &'static mut ::qr_code::bits::Bits,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_terminator(__self, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs1_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_unumeric_udata(
    __self: &'static mut ::qr_code::bits::Bits,
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_numeric_data(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs4_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_ukanji_udata(
    __self: &'static mut ::qr_code::bits::Bits,
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_kanji_data(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB4_u4Bits19push_umode_uindicator(
    __self: &'static mut ::qr_code::bits::Bits,
    mode: *mut ::qr_code::bits::ExtendedMode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let mode = mode.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_mode_indicator(__self, mode);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits19push_ueci_udesignator(
    __self: &'static mut ::qr_code::bits::Bits,
    eci_designator: u32,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::bits::Bits::push_eci_designator(__self, eci_designator);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits14push_ubyte_udata(
    __self: &'static mut ::qr_code::bits::Bits,
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::bits::Bits::push_byte_data(__self, data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::bits::ExtendedMode>() == 1);
const _: () = assert!(::core::mem::align_of::<::qr_code::bits::ExtendedMode>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits12ExtendedMode4Data0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::qr_code::types::Mode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::qr_code::bits::ExtendedMode::Data(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode4bits11encode_uauto(
    data: *mut &'static [u8],
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::bits::encode_auto(data, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::canvas::Canvas>() == 32);
const _: () = assert!(::core::mem::align_of::<::qr_code::canvas::Canvas>() == 8);
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::canvas::Canvas,
) {
    unsafe { ::core::ptr::drop_in_place(__self) };
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::canvas::Canvas,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::qr_code::canvas::Canvas as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::qr_code::canvas::Canvas,
    source: &'static ::qr_code::canvas::Canvas,
) -> () {
    unsafe { <::qr_code::canvas::Canvas as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas15apply_ubest_umask(
    __self: &'static ::qr_code::canvas::Canvas,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::canvas::Canvas::apply_best_mask(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas8to_ubools(
    __self: &'static ::qr_code::canvas::Canvas,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::canvas::Canvas::to_bools(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas11into_ucolors(
    __self: *mut ::qr_code::canvas::Canvas,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::qr_code::canvas::Canvas::into_colors(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs9_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas10apply_umask(
    __self: &'static mut ::qr_code::canvas::Canvas,
    pattern: *mut ::qr_code::canvas::MaskPattern,
) -> () {
    unsafe {
        let pattern = pattern.read();
        ::qr_code::canvas::Canvas::apply_mask(__self, pattern)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs8_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas9draw_udata(
    __self: &'static mut ::qr_code::canvas::Canvas,
    data: *mut &'static [u8],
    ec: *mut &'static [u8],
) -> () {
    unsafe {
        let data = data.read();
        let ec = ec.read();
        ::qr_code::canvas::Canvas::draw_data(__self, data, ec)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas28draw_uall_ufunctional_upatterns(
    __self: &'static mut ::qr_code::canvas::Canvas,
) -> () {
    unsafe { ::qr_code::canvas::Canvas::draw_all_functional_patterns(__self) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3new(
    version: *mut ::qr_code::Version,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let version = version.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::canvas::Canvas::new(version, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3get(
    __self: &'static ::qr_code::canvas::Canvas,
    x: i16,
    y: i16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::canvas::Canvas::get(__self, x, y);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas7get_umut(
    __self: &'static mut ::qr_code::canvas::Canvas,
    x: i16,
    y: i16,
) -> &'static mut ::qr_code::canvas::Module {
    unsafe { ::qr_code::canvas::Canvas::get_mut(__self, x, y) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3put(
    __self: &'static mut ::qr_code::canvas::Canvas,
    x: i16,
    y: i16,
    color: *mut ::qr_code::Color,
) -> () {
    unsafe {
        let color = color.read();
        ::qr_code::canvas::Canvas::put(__self, x, y, color)
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::canvas::MaskPattern>() == 1);
const _: () = assert!(::core::mem::align_of::<::qr_code::canvas::MaskPattern>() == 1);
const _: () = assert!(::core::mem::size_of::<::qr_code::canvas::Module>() == 2);
const _: () = assert!(::core::mem::align_of::<::qr_code::canvas::Module>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module6Masked0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::qr_code::Color,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::qr_code::canvas::Module::Masked(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module8Unmasked0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::qr_code::Color,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::qr_code::canvas::Module::Unmasked(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module7is_udarkCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::canvas::Module,
) -> bool {
    unsafe {
        let __self = __self.read();
        ::qr_code::canvas::Module::is_dark(__self)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module4maskCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::canvas::Module,
    should_invert: bool,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value = ::qr_code::canvas::Module::mask(__self, should_invert);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6ModuleINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB6_u5types5ColorE4intoCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::canvas::Module,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let __rs_return_value =
            <::qr_code::canvas::Module as ::core::convert::Into<::qr_code::Color>>::into(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXsd_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6ModuleNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::canvas::Module,
    other: &'static ::qr_code::canvas::Module,
) -> bool {
    unsafe {
        <::qr_code::canvas::Module as ::core::cmp::PartialEq<::qr_code::canvas::Module>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode6canvas13is_ufunctional(
    version: *mut ::qr_code::Version,
    width: i16,
    x: i16,
    y: i16,
) -> bool {
    unsafe {
        let version = version.read();
        ::qr_code::canvas::is_functional(version, width, x, y)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec19construct_ucodewords(
    rawbits: *mut &'static [u8],
    version: *mut ::qr_code::Version,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let rawbits = rawbits.read();
        let version = version.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::ec::construct_codewords(rawbits, version, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec28create_uerror_ucorrection_ucode(
    data: *mut &'static [u8],
    ec_code_size: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::ec::create_error_correction_code(data, ec_code_size);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec18max_uallowed_uerrors(
    version: *mut ::qr_code::Version,
    ec_level: *mut ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let version = version.read();
        let ec_level = ec_level.read();
        let __rs_return_value = ::qr_code::ec::max_allowed_errors(version, ec_level);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::optimize::Parser>() == 48);
const _: () = assert!(::core::mem::align_of::<::qr_code::optimize::Parser>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6Parser3new(
    data: *mut &'static [u8],
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let data = data.read();
        let __rs_return_value = ::qr_code::optimize::Parser::new(data);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::optimize::Segment>() == 24);
const _: () = assert!(::core::mem::align_of::<::qr_code::optimize::Segment>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB2_u7Segment11encoded_ulen(
    __self: &'static ::qr_code::optimize::Segment,
    version: *mut ::qr_code::Version,
) -> usize {
    unsafe {
        let version = version.read();
        ::qr_code::optimize::Segment::encoded_len(__self, version)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs4_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u7SegmentNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::optimize::Segment,
    other: &'static ::qr_code::optimize::Segment,
) -> bool {
    unsafe {
        <::qr_code::optimize::Segment as ::core::cmp::PartialEq<::qr_code::optimize::Segment>>::eq(
            __self, other,
        )
    }
}
const _: () = assert!(::core::mem::offset_of!(::qr_code::optimize::Segment, begin) == 0);
const _: () = assert!(::core::mem::offset_of!(::qr_code::optimize::Segment, end) == 8);
const _: () = assert!(::core::mem::offset_of!(::qr_code::optimize::Segment, mode) == 16);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode8optimize21optimize_usegmentation(
    segments: *mut &'static [::qr_code::optimize::Segment],
    version: *mut ::qr_code::Version,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let segments = segments.read();
        let version = version.read();
        let __rs_return_value = ::qr_code::optimize::optimize_segmentation(segments, version);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::structured::SplittedQr>() == 40);
const _: () = assert!(::core::mem::align_of::<::qr_code::structured::SplittedQr>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr3new(
    bytes: *mut ::alloc::vec::Vec<u8>,
    version: i16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bytes = bytes.read();
        let __rs_return_value = ::qr_code::structured::SplittedQr::new(bytes, version);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr5split(
    __self: &'static ::qr_code::structured::SplittedQr,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::structured::SplittedQr::split(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::offset_of!(::qr_code::structured::SplittedQr, bytes) == 0);
const _: () = assert!(::core::mem::offset_of!(::qr_code::structured::SplittedQr, total_qr) == 24);
const _: () = assert!(::core::mem::offset_of!(::qr_code::structured::SplittedQr, version) == 32);
const _: () = assert!(::core::mem::offset_of!(::qr_code::structured::SplittedQr, parity) == 34);
const _: () = assert!(::core::mem::size_of::<::qr_code::structured::StructuredQrError>() == 24);
const _: () = assert!(::core::mem::align_of::<::qr_code::structured::StructuredQrError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError13TotalMismatch0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::structured::StructuredQrError::TotalMismatch(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError19SeqGreaterThanTotal0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: u8,
    __param_1: u8,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::qr_code::structured::StructuredQrError::SeqGreaterThanTotal(__param_0, __param_1);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError14LengthMismatch0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: usize,
    __param_1: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::qr_code::structured::StructuredQrError::LengthMismatch(__param_0, __param_1);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError18UnsupportedVersion0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: i16,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            ::qr_code::structured::StructuredQrError::UnsupportedVersion(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError10SplitMax160Csh9G4tFjYpDL_u8rust_uout(
    __param_0: usize,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = ::qr_code::structured::StructuredQrError::SplitMax16(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs3_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u17StructuredQrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::structured::StructuredQrError,
    other: &'static ::qr_code::structured::StructuredQrError,
) -> bool {
    unsafe {
        <::qr_code::structured::StructuredQrError as ::core::cmp::PartialEq<
            ::qr_code::structured::StructuredQrError,
        >>::eq(__self, other)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::structured::StructuredQrError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::qr_code::structured::StructuredQrError as ::alloc::string::ToString>::to_string(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode10structured9merge_uqrs(
    bytes: *mut ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let bytes = bytes.read();
        let __rs_return_value = ::qr_code::structured::merge_qrs(bytes);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::types::Mode>() == 1);
const _: () = assert!(::core::mem::align_of::<::qr_code::types::Mode>() == 1);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode17length_ubits_ucount(
    __self: *mut ::qr_code::types::Mode,
    version: *mut ::qr_code::Version,
) -> usize {
    unsafe {
        let __self = __self.read();
        let version = version.read();
        ::qr_code::types::Mode::length_bits_count(__self, version)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode15data_ubits_ucountCsh9G4tFjYpDL_u8rust_uout(
    __self: *mut ::qr_code::types::Mode,
    raw_data_len: usize,
) -> usize {
    unsafe {
        let __self = __self.read();
        ::qr_code::types::Mode::data_bits_count(__self, raw_data_len)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode3max(
    __self: *mut ::qr_code::types::Mode,
    other: *mut ::qr_code::types::Mode,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __self = __self.read();
        let other = other.read();
        let __rs_return_value = ::qr_code::types::Mode::max(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXsC_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4ModeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::types::Mode,
    other: &'static ::qr_code::types::Mode,
) -> bool {
    unsafe {
        <::qr_code::types::Mode as ::core::cmp::PartialEq<::qr_code::types::Mode>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types4ModeNtNtCsduaz3xaeU7_u4core3cmp10PartialOrd11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    lhs: &::qr_code::types::Mode,
    rhs: &::qr_code::types::Mode,
) -> i8 {
    match <::qr_code::types::Mode as ::core::cmp::PartialOrd<::qr_code::types::Mode>>::partial_cmp(
        lhs, rhs,
    ) {
        ::core::option::Option::Some(ordering) => ordering as i8,
        ::core::option::Option::None => 2,
    }
}
const _: () = assert!(::core::mem::size_of::<::qr_code::types::QrError>() == 24);
const _: () = assert!(::core::mem::align_of::<::qr_code::types::QrError>() == 8);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrError10Structured0Csh9G4tFjYpDL_u8rust_uout(
    __param_0: *mut ::qr_code::structured::StructuredQrError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __param_0 = __param_0.read();
        let __rs_return_value = ::qr_code::types::QrError::Structured(__param_0);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs7_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7QrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::types::QrError,
    other: &'static ::qr_code::types::QrError,
) -> bool {
    unsafe {
        <::qr_code::types::QrError as ::core::cmp::PartialEq<::qr_code::types::QrError>>::eq(
            __self, other,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::types::QrError,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::qr_code::types::QrError as ::alloc::string::ToString>::to_string(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>) as ::core::default::Default>::default();
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <(::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>) as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
    source: &'static (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
) -> () {
    unsafe {
        <(::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>) as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
const _: () =
    assert!(::core::mem::offset_of!((::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>,), 0) == 0);
const _: () =
    assert!(::core::mem::offset_of!((::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>,), 1) == 24);
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXss_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::qr_code::EcLevel,
    other: &'static ::qr_code::EcLevel,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::qr_code::EcLevel as ::core::cmp::Ord>::cmp(__self, other);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uCsgh4rY7Lrz8V_u7qr_ucodeNtB5_u14QrCodeIteratorNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::qr_code::QrCodeIterator<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::qr_code::QrCodeIterator<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6ParserNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    __self: &'static mut ::qr_code::optimize::Parser<'static>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::qr_code::optimize::Parser<'static> as ::core::iter::Iterator>::next(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
        ::qr_code::types::QrError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
            ::qr_code::types::QrError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
        ::qr_code::types::QrError,
    >,
    source: &'static ::core::result::Result<
        (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
        ::qr_code::types::QrError,
    >,
) -> () {
    unsafe {
        <core::result::Result<
            (::alloc::vec::Vec<u8>, ::alloc::vec::Vec<u8>),
            ::qr_code::types::QrError,
        > as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value=<core::result::Result<::qr_code::QrCode,::qr_code::types::QrError>as::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
    source: &'static ::core::result::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
) -> () {
    unsafe {
        <core::result::Result<::qr_code::QrCode,::qr_code::types::QrError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::qr_code::bits::Bits,
            ::qr_code::types::QrError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
    source: &'static ::core::result::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
) -> () {
    unsafe {
        <core::result::Result<::qr_code::bits::Bits,::qr_code::types::QrError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<
        ::alloc::vec::Vec<::qr_code::QrCode>,
        ::qr_code::types::QrError,
    >,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<::qr_code::QrCode>,
            ::qr_code::types::QrError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<
        ::alloc::vec::Vec<::qr_code::QrCode>,
        ::qr_code::types::QrError,
    >,
    source: &'static ::core::result::Result<
        ::alloc::vec::Vec<::qr_code::QrCode>,
        ::qr_code::types::QrError,
    >,
) -> () {
    unsafe {
        <core::result::Result<::alloc::vec::Vec<::qr_code::QrCode>,::qr_code::types::QrError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::qr_code::types::QrError>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <core::result::Result<
            ::alloc::vec::Vec<u8>,
            ::qr_code::types::QrError,
        > as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::core::result::Result<::alloc::vec::Vec<u8>, ::qr_code::types::QrError>,
    source: &'static ::core::result::Result<::alloc::vec::Vec<u8>, ::qr_code::types::QrError>,
) -> () {
    unsafe {
        <core::result::Result<::alloc::vec::Vec<u8>,::qr_code::types::QrError>as::core::clone::Clone>::clone_from(__self,source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<bool>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<bool> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<bool>,
    source: &'static ::alloc::vec::Vec<bool>,
) -> () {
    unsafe { <::alloc::vec::Vec<bool> as ::core::clone::Clone>::clone_from(__self, source) }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::qr_code::Color>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::qr_code::Color> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::qr_code::Color>,
    source: &'static ::alloc::vec::Vec<::qr_code::Color>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::qr_code::Color> as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::qr_code::QrCode>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::qr_code::QrCode> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::qr_code::QrCode>,
    source: &'static ::alloc::vec::Vec<::qr_code::QrCode>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::qr_code::QrCode> as ::core::clone::Clone>::clone_from(__self, source)
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::qr_code::optimize::Segment>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::qr_code::optimize::Segment> as ::core::clone::Clone>::clone(
                __self,
            );
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::qr_code::optimize::Segment>,
    source: &'static ::alloc::vec::Vec<::qr_code::optimize::Segment>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::qr_code::optimize::Segment> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value =
            <::alloc::vec::Vec<::alloc::vec::Vec<u8>> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
    source: &'static ::alloc::vec::Vec<::alloc::vec::Vec<u8>>,
) -> () {
    unsafe {
        <::alloc::vec::Vec<::alloc::vec::Vec<u8>> as ::core::clone::Clone>::clone_from(
            __self, source,
        )
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static ::alloc::vec::Vec<u8>,
    __ret_ptr: *mut core::ffi::c_void,
) -> () {
    unsafe {
        let __rs_return_value = <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone(__self);
        ::core::ptr::write(__ret_ptr as *mut _, __rs_return_value);
    }
}
#[unsafe(no_mangle)]
unsafe extern "C" fn __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    __self: &'static mut ::alloc::vec::Vec<u8>,
    source: &'static ::alloc::vec::Vec<u8>,
) -> () {
    unsafe { <::alloc::vec::Vec<u8> as ::core::clone::Clone>::clone_from(__self, source) }
}
