// Automatically @generated C++ bindings for the following Rust crate:
// qr_code
// Features: always_specialize_generics_in_cpp_api_from_rust

#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <array>
#include <bit>
#include <compare>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <functional>
#include <memory>
#include <new>
#include <optional>
#include <ostream>
#include <string_view>
#include <tuple>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/check_no_mutable_aliasing.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/lifetime_annotations.h"
#include "third_party/crubit/support/rs_std/iterator_adapter.h"
#include "third_party/crubit/support/rs_std/option.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/tuple.h"
#include "third_party/crubit/support/rs_std/unit.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace qr_code {
struct QrCodeIterator;
}

namespace qr_code {
struct Version;
}

namespace qr_code::bits {
struct Bits;
struct ExtendedMode;
}  // namespace qr_code::bits

namespace qr_code::canvas {
struct MaskPattern;
struct Module;
}  // namespace qr_code::canvas

namespace qr_code::optimize {
struct Segment;
}

namespace qr_code::structured {
struct SplittedQr;
}

namespace qr_code::types {
struct Mode;
struct QrError;
}  // namespace qr_code::types

namespace qr_code {

//  The color of a module.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=58
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: Color") alignas(1)
    [[clang::trivial_abi]] Color final {
 public:
  // `qr_code::Color` doesn't implement the `Default` trait
  Color() = delete;

  //  The module is light colored.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=60
  static constexpr Color MakeLight();

  //  The module is dark colored.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=62
  static constexpr Color MakeDark();

  // No custom `Drop` impl and no custom "drop glue" required
  ~Color() = default;
  Color(Color&&) = default;
  Color& operator=(Color&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Color(const Color&) = default;
  Color& operator=(const Color&) = default;
  Color(::crubit::UnsafeRelocateTag, Color&& value);

  // Error generating bindings for associated function `qr_code::Color::select`
  // defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=76:
  // No valid non-generic replacement for generic type param `T`

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=57
  bool operator==(::qr_code::Color const& other) const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=86
  ::qr_code::Color operator!() const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=34
  explicit Color(::qr_code::canvas::Module value);

  // AbslHashValue and std::hash support via core::hash::Hash
  template <typename H>
  friend H AbslHashValue(H h, const ::qr_code::Color& self);

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr Color(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  The error correction level. It allows the original information be recovered
//  even if parts of the code is damaged.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=102
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: EcLevel") alignas(1)
    [[clang::trivial_abi]] EcLevel final {
 public:
  // `qr_code::EcLevel` doesn't implement the `Default` trait
  EcLevel() = delete;

  //  Low error correction. Allows up to 7% of wrong blocks.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=104
  static constexpr EcLevel MakeL();

  //  Medium error correction (default). Allows up to 15% of wrong blocks.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=107
  static constexpr EcLevel MakeM();

  //  "Quartile" error correction. Allows up to 25% of wrong blocks.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=110
  static constexpr EcLevel MakeQ();

  //  High error correction. Allows up to 30% of wrong blocks.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=113
  static constexpr EcLevel MakeH();

  // No custom `Drop` impl and no custom "drop glue" required
  ~EcLevel() = default;
  EcLevel(EcLevel&&) = default;
  EcLevel& operator=(EcLevel&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  EcLevel(const EcLevel&) = default;
  EcLevel& operator=(const EcLevel&) = default;
  EcLevel(::crubit::UnsafeRelocateTag, EcLevel&& value);

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=100
  bool operator==(::qr_code::EcLevel const& other) const;

  ::std::strong_ordering operator<=>(const EcLevel& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr EcLevel(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code

namespace qr_code {

//  The encoded QR code symbol.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=62
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: QrCode") alignas(8)
    [[clang::trivial_abi]] QrCode final {
 public:
  // `qr_code::QrCode` doesn't implement the `Default` trait
  QrCode() = delete;

  // Drop::drop
  ~QrCode();

  // Clone::clone
  QrCode(const QrCode&) noexcept;

  // Clone::clone_from
  ::qr_code::QrCode& operator=(const QrCode&) noexcept;

  QrCode(::crubit::UnsafeRelocateTag, QrCode&& value);

  //  Constructs a new QR code which automatically encodes the given data.
  //
  //  This method uses the "medium" error correction level and automatically
  //  chooses the smallest QR code.
  //
  //      use qr_code::QrCode;
  //
  //      let code = QrCode::new(b"Some data").unwrap();
  //
  //  # Errors
  //
  //  Returns error if the QR code cannot be constructed, e.g. when the data
  //  is too long.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=83
  static rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError> new_(
      rs_std::SliceRef<const ::std::uint8_t> data);

  //  Constructs a new QR code which automatically encodes the given data at a
  //  specific error correction level.
  //
  //  This method automatically chooses the smallest QR code.
  //
  //      use qr_code::{QrCode, EcLevel};
  //
  //      let code = QrCode::with_error_correction_level(b"Some data",
  //      EcLevel::H).unwrap();
  //
  //  # Errors
  //
  //  Returns error if the QR code cannot be constructed, e.g. when the data
  //  is too long.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=100
  static rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>
  with_error_correction_level(rs_std::SliceRef<const ::std::uint8_t> data,
                              ::qr_code::EcLevel ec_level);

  //  Constructs a new QR code for the given version and error correction
  //  level.
  //
  //      use qr_code::{QrCode, Version, EcLevel};
  //
  //      let code = QrCode::with_version(b"Some data", Version::Normal(5),
  //      EcLevel::M).unwrap();
  //
  //  This method can also be used to generate Micro QR code.
  //
  //      use qr_code::{QrCode, Version, EcLevel};
  //
  //      let micro_code = QrCode::with_version(b"123", Version::Micro(1),
  //      EcLevel::L).unwrap();
  //
  //  # Errors
  //
  //  Returns error if the QR code cannot be constructed, e.g. when the data
  //  is too long, or when the version and error correction level are
  //  incompatible.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=126
  static rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>
  with_version(rs_std::SliceRef<const ::std::uint8_t> data,
               ::qr_code::Version version, ::qr_code::EcLevel ec_level);

  //  Constructs a new QR code with encoded bits.
  //
  //  Use this method only if there are very special need to manipulate the
  //  raw bits before encoding. Some examples are:
  //
  //  * Encode data using specific character set with ECI
  //  * Use the FNC1 modes
  //  * Avoid the optimal segmentation algorithm
  //
  //  See the `Bits` structure for detail.
  //
  //      #![allow(unused_must_use)]
  //
  //      use qr_code::{QrCode, Version, EcLevel};
  //      use qr_code::bits::Bits;
  //
  //      let mut bits = Bits::new(Version::Normal(1));
  //      bits.push_eci_designator(9);
  //      bits.push_byte_data(b"\\xca\\xfe\\xe4\\xe9\\xea\\xe1\\xf2 QR");
  //      bits.push_terminator(EcLevel::L);
  //      let qrcode = QrCode::with_bits(bits, EcLevel::L);
  //
  //  # Errors
  //
  //  Returns error if the QR code cannot be constructed, e.g. when the bits
  //  are too long, or when the version and error correction level are
  //  incompatible.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=164
  static rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError> with_bits(
      ::qr_code::bits::Bits bits, ::qr_code::EcLevel ec_level);

  //  Gets the version of this QR code.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=181
  ::qr_code::Version version() const;

  //  Gets the error correction level of this QR code.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=186
  ::qr_code::EcLevel error_correction_level() const;

  //  Gets the number of modules per side, i.e. the width of this QR code.
  //
  //  The width here does not contain the quiet zone paddings.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=193
  ::std::uintptr_t width() const;

  //  Gets the maximum number of allowed erratic modules can be introduced
  //  before the data becomes corrupted. Note that errors should not be
  //  introduced to functional modules.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=200
  ::std::uintptr_t max_allowed_errors() const;

  //  Checks whether a module at coordinate (x, y) is a functional module or
  //  not.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=206
  bool is_functional(::std::uintptr_t x, ::std::uintptr_t y) const;

  //  Converts the QR code to a vector of booleans. Each entry represents the
  //  color of the module, with "true" means dark and "false" means light.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=214
  rs_std::Vec<bool> to_vec() const;

  //  Returns an iterator over QR code vector of colors.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=219
  ::qr_code::QrCodeIterator iter() const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  //  Converts the QR code to a vector of colors.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=224
  rs_std::Vec<::qr_code::Color> into_colors() &&;

  //  Render the qr code in a utf-8 string (2x1 pixel per character)
  //  `inverted` toggle the foreground and background color
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/render.rs;l=6
  ::rs::alloc::string::String to_string(bool inverted,
                                        ::std::uint8_t border) const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=232
  ::qr_code::Color const& $(__anon1) operator[](
      ::std::tuple<::std::uintptr_t, ::std::uintptr_t> __param_1)
      const& $(__anon1) CRUBIT_LIFETIME_BOUND;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> content;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> width_;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 4> version_;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 4> ec_level;

 private:
  static void __crubit_field_offset_assertions();
};

//  Iterate over QR code data without consuming the QR code struct
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=239
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: QrCodeIterator") alignas(8)
    [[clang::trivial_abi]] QrCodeIterator final {
 public:
  // `qr_code::QrCodeIterator` doesn't implement the `Default` trait
  QrCodeIterator() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~QrCodeIterator() = default;
  QrCodeIterator(QrCodeIterator&&) = default;
  QrCodeIterator& operator=(QrCodeIterator&&) = default;

  // `qr_code::QrCodeIterator` doesn't implement the `Clone` trait
  QrCodeIterator(const QrCodeIterator&) = delete;
  QrCodeIterator& operator=(const QrCodeIterator&) = delete;
  QrCodeIterator(::crubit::UnsafeRelocateTag, QrCodeIterator&& value);
  template <typename TAdaptedSelf_ = QrCodeIterator>
  inline rs::IteratorAdapter<TAdaptedSelf_*> begin() & {
    return rs::IteratorAdapter<TAdaptedSelf_*>(this);
  }
  inline rs::IteratorEnd end() & { return rs::IteratorEnd(); }

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> qr_code;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> index;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code

namespace qr_code {

// Error generating bindings for type alias `qr_code::QrResult` defined at
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=50:
// crubit.rs/errors/unsupported_type: Generic type parameter `T` is not
// supported without monomorphization

//  In QR code terminology, `Version` means the size of the generated image.
//  Larger version means the size of code is larger, and therefore can carry
//  more information.
//
//  The smallest version is `Version::Normal(1)` of size 21×21, and the largest
//  is `Version::Normal(40)` of size 177×177.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=127
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: Version") alignas(2)
    [[clang::trivial_abi]] Version final {
 public:
  // `qr_code::Version` doesn't implement the `Default` trait
  Version() = delete;

  //  A normal QR code version. The parameter should be between 1 and 40.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=129
  static ::qr_code::Version MakeNormal(::std::int16_t __param_0);

  //  A Micro QR code version. The parameter should be between 1 and 4.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=132
  static ::qr_code::Version MakeMicro(::std::int16_t __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~Version() = default;
  Version(Version&&) = default;
  Version& operator=(Version&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Version(const Version&) = default;
  Version& operator=(const Version&) = default;
  Version(::crubit::UnsafeRelocateTag, Version&& value);

  //  Get the number of "modules" on each size of the QR code, i.e. the width
  //  and height of the code.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=138
  ::std::int16_t width() const;

  // Error generating bindings for associated function `qr_code::Version::fetch`
  // defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=157:
  // No valid non-generic replacement for generic type param `T`

  //  The number of bits needed to encode the mode indicator.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=177
  ::std::uintptr_t mode_bits_count() const;

  //  Checks whether is version refers to a Micro QR code.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=185
  bool is_micro() const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=126
  bool operator==(::qr_code::Version const& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 4> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr Version(PrivateBytesTag, ::std::array<unsigned char, 4> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code

namespace qr_code::bits {

//  The `Bits` structure stores the encoded data for a QR code.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=15
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: bits :: Bits") alignas(8)
    [[clang::trivial_abi]] Bits final {
 public:
  // `qr_code::bits::Bits` doesn't implement the `Default` trait
  Bits() = delete;

  // Drop::drop
  ~Bits();

  // Clone::clone
  Bits(const Bits&) noexcept;

  // Clone::clone_from
  ::qr_code::bits::Bits& operator=(const Bits&) noexcept;

  Bits(::crubit::UnsafeRelocateTag, Bits&& value);

  //  Constructs a new, empty bits structure.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=23
  static ::qr_code::bits::Bits new_(::qr_code::Version version);

  //  Pushes an N-bit big-endian integer to the end of the bits, and check
  //  that the number does not overflow the bits.
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=74
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_number_checked(
      ::std::uintptr_t n, ::std::uintptr_t number);

  //  Convert the bits into a bytes vector.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=90
  rs_std::Vec<::std::uint8_t> into_bytes() &&;

  //  Total number of bits currently pushed.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=95
  ::std::uintptr_t len() const;

  //  Whether there are any bits pushed.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=104
  bool is_empty() const;

  //  The maximum number of bits allowed by the provided QR code version and
  //  error correction level.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::InvalidVersion)` if it is not valid to use the
  //  `ec_level` for the given version (e.g. `Version::Micro(1)` with
  //  `EcLevel::H`).
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=116
  rs_std::Result<::std::uint64_t, ::qr_code::types::QrError> max_len(
      ::qr_code::EcLevel ec_level) const;

  //  Version of the QR code.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=121
  ::qr_code::Version version() const;

  //  Encodes an indicator that the following data are formatted according to
  //  the UCC/EAN Application Identifiers standard.
  //
  //      #![allow(unused_must_use)]
  //
  //      use qr_code::bits::Bits;
  //      use qr_code::types::Version;
  //
  //      let mut bits = Bits::new(Version::Normal(1));
  //      bits.push_fnc1_first_position();
  //      bits.push_numeric_data(b"01049123451234591597033130128");
  //      bits.push_alphanumeric_data(b"%10ABC123");
  //
  //  In QR code, the character `%` is used as the data field separator (0x1D).
  //
  //  # Errors
  //
  //  If the mode is not supported in the provided version, this method
  //  returns `Err(QrError::UnsupportedCharacterSet)`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=699
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>
  push_fnc1_first_position();

  //  Encodes an indicator that the following data are formatted in accordance
  //  with specific industry or application specifications previously agreed
  //  with AIM International.
  //
  //      #![allow(unused_must_use)]
  //
  //      use qr_code::bits::Bits;
  //      use qr_code::types::Version;
  //
  //      let mut bits = Bits::new(Version::Normal(1));
  //      bits.push_fnc1_second_position(37);
  //      bits.push_alphanumeric_data(b"AA1234BBB112");
  //      bits.push_byte_data(b"text text text text\\r");
  //
  //  If the application indicator is a single Latin alphabet (a–z / A–Z),
  //  please pass in its ASCII value + 100:
  //
  //  ```ignore
  //  bits.push_fnc1_second_position(b'A' + 100);
  //  ```
  //
  //  # Errors
  //
  //  If the mode is not supported in the provided version, this method
  //  returns `Err(QrError::UnsupportedCharacterSet)`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=728
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>
  push_fnc1_second_position(::std::uint8_t application_indicator);

  //  Encodes an alphanumeric string to the bits.
  //
  //  The data should only contain the charaters A to Z (excluding lowercase),
  //  0 to 9, space, `$`, `%`, `*`, `+`, `-`, `.`, `/` or `:`.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=481
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>
  push_alphanumeric_data(rs_std::SliceRef<const ::std::uint8_t> data);

  // Error generating bindings for associated function
  // `qr_code::bits::Bits::push_segments` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=919:
  // No valid non-generic replacement for generic type param `I`

  //  Pushes the data the bits, using the optimal encoding.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=940
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_optimal_data(
      rs_std::SliceRef<const ::std::uint8_t> data);

  //  Pushes the ending bits to indicate no more data.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  //  Returns `Err(QrError::InvalidVersion)` if it is not valid to use the
  //  `ec_level` for the given version (e.g. `Version::Micro(1)` with
  //  `EcLevel::H`).
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=799
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_terminator(
      ::qr_code::EcLevel ec_level);

  //  Encodes a numeric string to the bits.
  //
  //  The data should only contain the characters 0 to 9.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=360
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_numeric_data(
      rs_std::SliceRef<const ::std::uint8_t> data);

  //  Encodes Shift JIS double-byte data to the bits.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  //  Returns `Err(QrError::InvalidCharacter)` if the data is not Shift JIS
  //  double-byte data (e.g. if the length of data is not an even number).
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=616
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_kanji_data(
      rs_std::SliceRef<const ::std::uint8_t> data);

  //  Push the mode indicator to the end of the bits.
  //
  //  # Errors
  //
  //  If the mode is not supported in the provided version, this method
  //  returns `Err(QrError::UnsupportedCharacterSet)`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=200
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_mode_indicator(
      ::qr_code::bits::ExtendedMode mode);

  //  Push an ECI (Extended Channel Interpretation) designator to the bits.
  //
  //  An ECI designator is a 6-digit number to specify the character set of
  //  the following binary data. After calling this method, one could call
  //  `.push_byte_data()` or similar methods to insert the actual data, e.g.
  //
  //      #![allow(unused_must_use)]
  //
  //      use qr_code::bits::Bits;
  //      use qr_code::types::Version;
  //
  //      let mut bits = Bits::new(Version::Normal(1));
  //      bits.push_eci_designator(9); // 9 = ISO-8859-7 (Greek).
  //      bits.push_byte_data(b"\\xa1\\xa2\\xa3\\xa4\\xa5"); // ΑΒΓΔΕ
  //
  //
  //  The full list of ECI designator values can be found from
  //  <http://strokescribe.com/en/ECI.html>. Some example values are:
  //
  //  ECI # | Character set
  //  ------|-------------------------------------
  //  3     | ISO-8859-1 (Western European)
  //  20    | Shift JIS (Japanese)
  //  23    | Windows 1252 (Latin 1) (Western European)
  //  25    | UTF-16 Big Endian
  //  26    | UTF-8
  //  28    | Big 5 (Traditional Chinese)
  //  29    | GB-18030 (Simplified Chinese)
  //  30    | EUC-KR (Korean)
  //
  //  # Errors
  //
  //  If the QR code version does not support ECI, this method will return
  //  `Err(QrError::UnsupportedCharacterSet)`.
  //
  //  If the designator is outside of the expected range, this method will
  //  return `Err(QrError::InvalidECIDesignator)`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=266
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_eci_designator(
      ::std::uint32_t eci_designator);

  //  Encodes 8-bit byte data to the bits.
  //
  //  # Errors
  //
  //  Returns `Err(QrError::DataTooLong)` on overflow.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=546
  rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError> push_byte_data(
      rs_std::SliceRef<const ::std::uint8_t> data);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> data;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> bit_offset;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> version_;

 private:
  static void __crubit_field_offset_assertions();
};

//  An "extended" mode indicator, includes all indicators supported by QR code
//  beyond those bearing data.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=176
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: bits :: ExtendedMode") alignas(
    1) [[clang::trivial_abi]] ExtendedMode final {
 public:
  // `qr_code::bits::ExtendedMode` doesn't implement the `Default` trait
  ExtendedMode() = delete;

  //  ECI mode indicator, to introduce an ECI designator.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=178
  static constexpr ExtendedMode MakeEci();

  //  The normal mode to introduce data.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=181
  static ::qr_code::bits::ExtendedMode MakeData(
      ::qr_code::types::Mode __param_0);

  //  FNC-1 mode in the first position.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=184
  static constexpr ExtendedMode MakeFnc1First();

  //  FNC-1 mode in the second position.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=187
  static constexpr ExtendedMode MakeFnc1Second();

  //  Structured append.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=190
  static constexpr ExtendedMode MakeStructuredAppend();

  // No custom `Drop` impl and no custom "drop glue" required
  ~ExtendedMode() = default;
  ExtendedMode(ExtendedMode&&) = default;
  ExtendedMode& operator=(ExtendedMode&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  ExtendedMode(const ExtendedMode&) = default;
  ExtendedMode& operator=(const ExtendedMode&) = default;
  ExtendedMode(::crubit::UnsafeRelocateTag, ExtendedMode&& value);

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr ExtendedMode(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  Automatically determines the minimum version to store the data, and encode
//  the result.
//
//  This method will not consider any Micro QR code versions.
//
//  # Errors
//
//  Returns `Err(QrError::DataTooLong)` if the data is too long to fit even the
//  highest QR code version.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/bits.rs;l=1006
rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError> encode_auto(
    rs_std::SliceRef<const ::std::uint8_t> data, ::qr_code::EcLevel ec_level);

}  // namespace qr_code::bits

namespace qr_code::canvas {

//  `Canvas` is an intermediate helper structure to render error-corrected data
//  into a QR code.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=77
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: canvas :: Canvas") alignas(8)
    [[clang::trivial_abi]] Canvas final {
 public:
  // `qr_code::canvas::Canvas` doesn't implement the `Default` trait
  Canvas() = delete;

  // Drop::drop
  ~Canvas();

  // Clone::clone
  Canvas(const Canvas&) noexcept;

  // Clone::clone_from
  ::qr_code::canvas::Canvas& operator=(const Canvas&) noexcept;

  Canvas(::crubit::UnsafeRelocateTag, Canvas&& value);

  //  Construct a new canvas and apply the best masking that gives the lowest
  //  penalty score.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=2075
  ::qr_code::canvas::Canvas apply_best_mask() const;

  //  Convert the modules into a vector of booleans.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=2091
  [[deprecated("use `into_colors()` instead")]] rs_std::Vec<bool> to_bools()
      const;

  //  Convert the modules into a vector of colors.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=2096
  rs_std::Vec<::qr_code::Color> into_colors() &&;

  //  Applies a mask to the canvas. This method will also draw the format info
  //  patterns.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1608
  void apply_mask(::qr_code::canvas::MaskPattern pattern);

  //  Draws the encoded data and error correction codes to the empty modules.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1453
  void draw_data(rs_std::SliceRef<const ::std::uint8_t> data,
                 rs_std::SliceRef<const ::std::uint8_t> ec);

  //  Draw all functional patterns, before data placement.
  //
  //  All functional patterns (e.g. the finder pattern) *except* the format
  //  info pattern will be filled in. The format info pattern will be filled
  //  with light modules instead. Data bits can then put in the empty modules.
  //  with `.draw_data()`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1028
  void draw_all_functional_patterns();

  //  Constructs a new canvas big enough for a QR code of the given version.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=94
  static ::qr_code::canvas::Canvas new_(::qr_code::Version version,
                                        ::qr_code::EcLevel ec_level);

  //  Obtains a module at the given coordinates. For convenience, negative
  //  coordinates will wrap around.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=132
  ::qr_code::canvas::Module get(::std::int16_t x, ::std::int16_t y) const;

  //  Obtains a mutable module at the given coordinates. For convenience,
  //  negative coordinates will wrap around.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=138
  ::qr_code::canvas::Module& $(__anon1)
          get_mut(::std::int16_t x, ::std::int16_t y) &
      $(__anon1) CRUBIT_LIFETIME_BOUND;

  //  Sets the color of a functional module at the given coordinates. For
  //  convenience, negative coordinates will wrap around.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=145
  void put(::std::int16_t x, ::std::int16_t y, ::qr_code::Color color);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> modules;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 4> version;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 2> width;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 2> ec_level;

 private:
  static void __crubit_field_offset_assertions();
};

//  The mask patterns. Since QR code and Micro QR code do not use the same
//  pattern number, we name them according to their shape instead of the number.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1539
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: canvas :: MaskPattern") alignas(
    1) [[clang::trivial_abi]] MaskPattern final {
 public:
  // `qr_code::canvas::MaskPattern` doesn't implement the `Default` trait
  MaskPattern() = delete;

  //  QR code pattern 000: `(x + y) % 2 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1541
  static constexpr MaskPattern MakeCheckerboard();

  //  QR code pattern 001: `y % 2 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1544
  static constexpr MaskPattern MakeHorizontalLines();

  //  QR code pattern 010: `x % 3 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1547
  static constexpr MaskPattern MakeVerticalLines();

  //  QR code pattern 011: `(x + y) % 3 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1550
  static constexpr MaskPattern MakeDiagonalLines();

  //  QR code pattern 100: `((x/3) + (y/2)) % 2 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1553
  static constexpr MaskPattern MakeLargeCheckerboard();

  //  QR code pattern 101: `(x*y)%2 + (x*y)%3 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1556
  static constexpr MaskPattern MakeFields();

  //  QR code pattern 110: `((x*y)%2 + (x*y)%3) % 2 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1559
  static constexpr MaskPattern MakeDiamonds();

  //  QR code pattern 111: `((x+y)%2 + (x*y)%3) % 2 == 0`.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1562
  static constexpr MaskPattern MakeMeadow();

  // No custom `Drop` impl and no custom "drop glue" required
  ~MaskPattern() = default;
  MaskPattern(MaskPattern&&) = default;
  MaskPattern& operator=(MaskPattern&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  MaskPattern(const MaskPattern&) = default;
  MaskPattern& operator=(const MaskPattern&) = default;
  MaskPattern(::crubit::UnsafeRelocateTag, MaskPattern&& value);

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr MaskPattern(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  The color of a module (pixel) in the QR code.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=22
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: canvas :: Module") alignas(1)
    [[clang::trivial_abi]] Module final {
 public:
  // `qr_code::canvas::Module` doesn't implement the `Default` trait
  Module() = delete;

  //  The module is empty.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=24
  static constexpr Module MakeEmpty();

  //  The module is of functional patterns which cannot be masked, or pixels
  //  which have been masked.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=28
  static ::qr_code::canvas::Module MakeMasked(::qr_code::Color __param_0);

  //  The module is of data and error correction bits before masking.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=31
  static ::qr_code::canvas::Module MakeUnmasked(::qr_code::Color __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~Module() = default;
  Module(Module&&) = default;
  Module& operator=(Module&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Module(const Module&) = default;
  Module& operator=(const Module&) = default;
  Module(::crubit::UnsafeRelocateTag, Module&& value);

  //  Checks whether a module is dark.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=45
  bool is_dark() const;

  //  Apply a mask to the unmasked modules.
  //
  //      use qr_code::canvas::Module;
  //      use qr_code::types::Color;
  //
  //      assert_eq!(Module::Unmasked(Color::Light).mask(true),
  //      Module::Masked(Color::Dark));
  //      assert_eq!(Module::Unmasked(Color::Dark).mask(true),
  //      Module::Masked(Color::Light));
  //      assert_eq!(Module::Unmasked(Color::Light).mask(false),
  //      Module::Masked(Color::Light));
  //      assert_eq!(Module::Masked(Color::Dark).mask(true),
  //      Module::Masked(Color::Dark));
  //      assert_eq!(Module::Masked(Color::Dark).mask(false),
  //      Module::Masked(Color::Dark));
  //
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=60
  ::qr_code::canvas::Module mask(bool should_invert) const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=34
  explicit operator ::qr_code::Color() const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=21
  bool operator==(::qr_code::canvas::Module const& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 2> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr Module(PrivateBytesTag, ::std::array<unsigned char, 2> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  Gets whether the module at the given coordinates represents a functional
//  module.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1039
bool is_functional(::qr_code::Version version, ::std::int16_t width,
                   ::std::int16_t x, ::std::int16_t y);

}  // namespace qr_code::canvas

namespace qr_code::ec {

//  Constructs data and error correction codewords ready to be put in the QR
//  code matrix.
//
//  # Errors
//
//  Returns `Err(QrError::InvalidVersion)` if it is not valid to use the
//   `ec_level` for the given version (e.g. `Version::Micro(1)` with
//  `EcLevel::H`).
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/ec.rs;l=110
rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>
construct_codewords(rs_std::SliceRef<const ::std::uint8_t> rawbits,
                    ::qr_code::Version version, ::qr_code::EcLevel ec_level);

//  Creates the error correction code in N bytes.
//
//  This method only supports computing the error-correction code up to
//  69 bytes. Longer blocks will result in task panic.
//
//  This method treats the data as a polynomial of the form
//  (a\\[0\\] x<sup>m+n</sup> + a\\[1\\] x<sup>m+n-1</sup> + … + a\\[m\\]
//  x<sup>n</sup>) in GF(2<sup>8</sup>), and then computes the polynomial
//  modulus with a generator polynomial of degree N.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/ec.rs;l=19
rs_std::Vec<::std::uint8_t> create_error_correction_code(
    rs_std::SliceRef<const ::std::uint8_t> data, ::std::uintptr_t ec_code_size);

//  Computes the maximum allowed number of erratic modules can be introduced to
//  the QR code, before the data becomes truly corrupted.
//
//  # Errors
//
//  Returns `Err(QrError::InvalidVersion)` if it is not valid to use the
//   `ec_level` for the given version (e.g. `Version::Micro(1)` with
//  `EcLevel::H`).
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/ec.rs;l=191
rs_std::Result<::std::uint64_t, ::qr_code::types::QrError> max_allowed_errors(
    ::qr_code::Version version, ::qr_code::EcLevel ec_level);

}  // namespace qr_code::ec

namespace qr_code::optimize {

//  QR code data parser to classify the input into distinct segments.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=93
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: optimize :: Parser") alignas(8)
    [[clang::trivial_abi]] Parser final {
 public:
  // `qr_code::optimize::Parser` doesn't implement the `Default` trait
  Parser() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~Parser() = default;
  Parser(Parser&&) = default;
  Parser& operator=(Parser&&) = default;

  // `qr_code::optimize::Parser` doesn't implement the `Clone` trait
  Parser(const Parser&) = delete;
  Parser& operator=(const Parser&) = delete;
  Parser(::crubit::UnsafeRelocateTag, Parser&& value);

  //  Creates a new iterator which parse the data into segments that only
  //  contains their exclusive subsets. No optimization is done at this point.
  //
  //      use qr_code::optimize::{Parser, Segment};
  //      use qr_code::types::Mode::{Alphanumeric, Numeric, Byte};
  //
  //      let parse_res = Parser::new(b"ABC123abcd").collect::<Vec<Segment>>();
  //      assert_eq!(parse_res, vec![Segment { mode: Alphanumeric, begin: 0,
  //      end: 3 },
  //                                 Segment { mode: Numeric, begin: 3, end: 6
  //                                 }, Segment { mode: Byte, begin: 6, end: 10
  //                                 }]);
  //
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=112
  static ::qr_code::optimize::Parser new_(
      rs_std::SliceRef<const ::std::uint8_t> data CRUBIT_LIFETIME_BOUND);

  // Error generating bindings for struct `qr_code::optimize::Parser` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=93:
  // qr_code::optimize::Parser<'_> has a field named `begin`, `end`, or
  // `into_iter`, which prevents binding methods for IntoIterator.

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> begin;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 32> ecs_iter;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 1> state;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 7> pending_single_byte;

 private:
  static void __crubit_field_offset_assertions();
};

//  Optimize the segments by combining segments when possible.
//
//  Optimization considers all possible segmentations where each of the input
//  `segments` may have been reencoded into a different mode (and where
//  adjacent, same-mode segments are merged).  The shortest of the considered
//  segmentations is returned.  The implementation uses a shortest-path
//  algorithm that runs in O(N) time and uses additional O(N) memory.
//
//  This function may panic if `segments` do not represent a valid segmentation
//  (e.g. if there are gaps between segments, if the segments overlap, etc.).
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=628
rs_std::Vec<::qr_code::optimize::Segment> optimize_segmentation(
    rs_std::SliceRef<const ::qr_code::optimize::Segment> segments,
    ::qr_code::Version version);

// Error generating bindings for function `qr_code::optimize::total_encoded_len`
// defined at
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=644:
// No valid non-generic replacement for generic type param `I`

}  // namespace qr_code::optimize

namespace qr_code::structured {

//  Error variants regarding structured append
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=12
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: qr_code :: structured :: StructuredQrError") alignas(8)
    [[clang::trivial_abi]] StructuredQrError final {
 public:
  // `qr_code::structured::StructuredQrError` doesn't implement the `Default`
  // trait
  StructuredQrError() = delete;

  //  Structured append mode should contain at least two qrcodes
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=14
  static constexpr StructuredQrError MakeAtLeast2Pieces();

  //  Encoded number of pieces does not match real number of pieces
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=16
  static ::qr_code::structured::StructuredQrError MakeTotalMismatch(
      ::std::uintptr_t __param_0);

  //  Not all the QR codes parts are present
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=18
  static constexpr StructuredQrError MakeMissingParts();

  //  Computed parity byte does not match
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=20
  static constexpr StructuredQrError MakeParity();

  //  QR code data shorter than 5 bytes
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=22
  static constexpr StructuredQrError MakeTooShort();

  //  QR code mode is not structured append
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=24
  static constexpr StructuredQrError MakeStructuredWrongMode();

  //  QR code encoding is not the one supported in structured append
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=26
  static constexpr StructuredQrError MakeStructuredWrongEnc();

  //  QR code sequence number is greater than total
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=28
  static ::qr_code::structured::StructuredQrError MakeSeqGreaterThanTotal(
      ::std::uint8_t __param_0, ::std::uint8_t __param_1);

  //  QR code length mismatch
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=30
  static ::qr_code::structured::StructuredQrError MakeLengthMismatch(
      ::std::uintptr_t __param_0, ::std::uintptr_t __param_1);

  //  Unsupported version
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=32
  static ::qr_code::structured::StructuredQrError MakeUnsupportedVersion(
      ::std::int16_t __param_0);

  //  Maximum supported pieces in structured append is 16
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=34
  static ::qr_code::structured::StructuredQrError MakeSplitMax16(
      ::std::uintptr_t __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~StructuredQrError() = default;
  StructuredQrError(StructuredQrError&&) = default;
  StructuredQrError& operator=(StructuredQrError&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  StructuredQrError(const StructuredQrError&) = default;
  StructuredQrError& operator=(const StructuredQrError&) = default;
  StructuredQrError(::crubit::UnsafeRelocateTag, StructuredQrError&& value);

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=11
  bool operator==(::qr_code::structured::StructuredQrError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const StructuredQrError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os,
                                    const StructuredQrError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 24> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr StructuredQrError(PrivateBytesTag,
                              ::std::array<unsigned char, 24> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  Merge multiple structured QR codes content into the original content
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=56
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>
merge_qrs(rs_std::Vec<rs_std::Vec<::std::uint8_t>> bytes);

}  // namespace qr_code::structured

namespace qr_code::types {

//  The mode indicator, which specifies the character set of the encoded data.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=199
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: types :: Mode") alignas(1)
    [[clang::trivial_abi]] Mode final {
 public:
  // `qr_code::types::Mode` doesn't implement the `Default` trait
  Mode() = delete;

  //  The data contains only characters 0 to 9.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=201
  static constexpr Mode MakeNumeric();

  //  The data contains only uppercase letters (A–Z), numbers (0–9) and a few
  //  punctuations marks (space, `$`, `%`, `*`, `+`, `-`, `.`, `/`, `:`).
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=205
  static constexpr Mode MakeAlphanumeric();

  //  The data contains arbitrary binary data.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=208
  static constexpr Mode MakeByte();

  //  The data contains Shift-JIS-encoded double-byte text.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=211
  static constexpr Mode MakeKanji();

  // No custom `Drop` impl and no custom "drop glue" required
  ~Mode() = default;
  Mode(Mode&&) = default;
  Mode& operator=(Mode&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Mode(const Mode&) = default;
  Mode& operator=(const Mode&) = default;
  Mode(::crubit::UnsafeRelocateTag, Mode&& value);

  //  Computes the number of bits needed to encode the data length.
  //
  //      use qr_code::types::{Version, Mode};
  //
  //      assert_eq!(Mode::Numeric.length_bits_count(Version::Normal(1)), 10);
  //
  //  This method will return `Err(QrError::UnsupportedCharacterSet)` if the
  //  mode is not supported in the given version.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=223
  ::std::uintptr_t length_bits_count(::qr_code::Version version) const;

  //  Computes the number of bits needed to some data of a given raw length.
  //
  //      use qr_code::types::Mode;
  //
  //      assert_eq!(Mode::Numeric.data_bits_count(7), 24);
  //
  //  Note that in Kanji mode, the `raw_data_len` is the number of Kanjis,
  //  i.e. half the total size of bytes.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=261
  ::std::uintptr_t data_bits_count(::std::uintptr_t raw_data_len) const;

  //  Find the lowest common mode which both modes are compatible with.
  //
  //      use qr_code::types::Mode;
  //
  //      let a = Mode::Numeric;
  //      let b = Mode::Kanji;
  //      let c = a.max(b);
  //      assert!(a <= c);
  //      assert!(b <= c);
  //
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=280
  ::qr_code::types::Mode max(::qr_code::types::Mode other) const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=198
  bool operator==(::qr_code::types::Mode const& other) const;

  ::std::partial_ordering operator<=>(
      ::qr_code::types::Mode const& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr Mode(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code::types

namespace qr_code::optimize {

//  A segment of data committed to an encoding mode.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=11
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: optimize :: Segment") alignas(8)
    [[clang::trivial_abi]] Segment final {
 public:
  // Type is not a C++ aggregate: Field `mode` is not default-constructible in
  // C++

  // `qr_code::optimize::Segment` doesn't implement the `Default` trait
  Segment() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~Segment() = default;
  Segment(Segment&&) = default;
  Segment& operator=(Segment&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Segment(const Segment&) = default;
  Segment& operator=(const Segment&) = default;
  Segment(::crubit::UnsafeRelocateTag, Segment&& value);

  //  Compute the number of bits (including the size of the mode indicator and
  //  length bits) when this segment is encoded.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=25
  ::std::uintptr_t encoded_len(::qr_code::Version version) const;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=10
  bool operator==(::qr_code::optimize::Segment const& other) const;

  // Error generating bindings for struct `qr_code::optimize::Segment` defined
  // at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=11:
  // qr_code::optimize::Segment has a field named `begin`, `end`, or
  // `into_iter`, which prevents binding methods for IntoIterator.

  union {
    //  The start index of the segment.
    //
    // Generated from:
    // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=16
    ::std::uintptr_t begin;
  };
  union {
    //  The end index (exclusive) of the segment.
    //
    // Generated from:
    // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=19
    ::std::uintptr_t end;
  };
  union {
    //  The encoding mode of the segment of data.
    //
    // Generated from:
    // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=13
    ::qr_code::types::Mode mode;
  };

 private:
  unsigned char __padding0[7];

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code::optimize

namespace qr_code::types {

//  `QrError` encodes the error encountered when generating a QR code.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=12
struct CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: types :: QrError") alignas(8)
    [[clang::trivial_abi]] QrError final {
 public:
  // `qr_code::types::QrError` doesn't implement the `Default` trait
  QrError() = delete;

  //  The data is too long to encode into a QR code for the given version.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=14
  static constexpr QrError MakeDataTooLong();

  //  The provided version / error correction level combination is invalid.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=17
  static constexpr QrError MakeInvalidVersion();

  //  Some characters in the data cannot be supported by the provided QR code
  //  version.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=21
  static constexpr QrError MakeUnsupportedCharacterSet();

  //  The provided ECI designator is invalid. A valid designator should be
  //  between 0 and 999999.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=25
  static constexpr QrError MakeInvalidEciDesignator();

  //  A character not belonging to the character set is found.
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=28
  static constexpr QrError MakeInvalidCharacter();

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=31
  static ::qr_code::types::QrError MakeStructured(
      ::qr_code::structured::StructuredQrError __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~QrError() = default;
  QrError(QrError&&) = default;
  QrError& operator=(QrError&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  QrError(const QrError&) = default;
  QrError& operator=(const QrError&) = default;
  QrError(::crubit::UnsafeRelocateTag, QrError&& value);

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=11
  bool operator==(::qr_code::types::QrError const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const QrError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os, const QrError& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 24> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr QrError(PrivateBytesTag, ::std::array<unsigned char, 24> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code::types

template <>
struct rs_std::impl<::qr_code::Color, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::Color, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::Color as
  // std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=57:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::EcLevel, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::EcLevel, ::rs::core::cmp::Ord> {
  static constexpr bool kIsImplemented = true;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=100
  static ::rs::core::cmp::Ordering cmp(::qr_code::EcLevel const& self,
                                       ::qr_code::EcLevel const& other);
};

template <>
struct rs_std::impl<::qr_code::EcLevel, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::EcLevel as
  // std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=100:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::QrCode, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::QrCode as
  // std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=61:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::QrCodeIterator, ::rs::core::iter::Iterator> {
  static constexpr bool kIsImplemented = true;
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=252
  using Item CRUBIT_INTERNAL_RUST_TYPE(
      "<qr_code::QrCodeIterator<'a> as :: core :: iter :: Iterator>::Item") =
      bool;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/lib.rs;l=253
  static rs_std::Option<bool> next(::qr_code::QrCodeIterator& self);
};

template <>
struct rs_std::impl<::qr_code::Version, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::Version, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::Version as
  // std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=126:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::canvas::MaskPattern, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<qr_code::canvas::MaskPattern as std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=1538:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::canvas::Module, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::canvas::Module, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::canvas::Module
  // as std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/canvas.rs;l=21:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::optimize::Parser, ::rs::core::iter::Iterator> {
  static constexpr bool kIsImplemented = true;
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=127
  using Item CRUBIT_INTERNAL_RUST_TYPE(
      "<qr_code::optimize::Parser<'a> as :: core :: iter :: Iterator>::Item") =
      ::qr_code::optimize::Segment;

  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=129
  static rs_std::Option<::qr_code::optimize::Segment> next(
      ::qr_code::optimize::Parser& self);
};

template <>
struct rs_std::impl<::qr_code::optimize::Segment, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::optimize::Segment, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<qr_code::optimize::Segment as std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/optimize.rs;l=10:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::structured::StructuredQrError,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::structured::StructuredQrError,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<qr_code::structured::StructuredQrError as std::fmt::Debug>::fmt` defined
  // at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=11:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::structured::StructuredQrError,
                    ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<qr_code::structured::StructuredQrError as std::fmt::Display>::fmt`
  // defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=38:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::types::Mode, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::types::Mode, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::types::Mode as
  // std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=198:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::types::QrError, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::types::QrError, ::rs::core::error::Error> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::qr_code::types::QrError, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::types::QrError
  // as std::fmt::Debug>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=11:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::qr_code::types::QrError, ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<qr_code::types::QrError
  // as std::fmt::Display>::fmt` defined at
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=35:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_std_x00000020_x0000003a_x0000003a_x00000020hash_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    const ::qr_code::Color&);
}
namespace std {
template <>
struct hash<::qr_code::Color> {
  ::std::size_t operator()(const ::qr_code::Color& self) const {
    return static_cast<::std::size_t>(
        __crubit_internal::
            __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
                self));
  }
};
}  // namespace std
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
template <>
struct alignas(1) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < bool >") rs_std::Option<bool>
    : public rs_std::OptionBase<rs_std::Option<bool>, bool> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type = rs_std::OptionBase<rs_std::Option<bool>, bool>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, bool, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, bool, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<bool, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<bool, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint8_t;
  static constexpr tag_type kNoneVal = 2;
  bool* some_ptr() noexcept { return reinterpret_cast<bool*>(storage_); }
  bool const* some_const_ptr() const noexcept {
    return reinterpret_cast<bool const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char storage_[1];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < :: qr_code :: optimize :: Segment >")
    rs_std::Option<::qr_code::optimize::Segment>
    : public rs_std::OptionBase<rs_std::Option<::qr_code::optimize::Segment>,
                                ::qr_code::optimize::Segment> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<::qr_code::optimize::Segment>,
                         ::qr_code::optimize::Segment>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::qr_code::optimize::Segment, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::qr_code::optimize::Segment, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::qr_code::optimize::Segment, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::qr_code::optimize::Segment, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint8_t;
  static constexpr tag_type kNoneVal = 255;
  ::qr_code::optimize::Segment* some_ptr() noexcept {
    return reinterpret_cast<::qr_code::optimize::Segment*>(storage_);
  }
  ::qr_code::optimize::Segment const* some_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::optimize::Segment const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < () , :: qr_code :: types :: QrError >")
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>,
          rs_std::unit_t, ::qr_code::types::QrError> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Result(const Result&) = default;
  Result& operator=(const Result&) = default;
  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>, rs_std::unit_t,
      ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::unit_t, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::unit_t, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 255; }
  rs_std::unit_t* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::unit_t*>(__storage + 0);
  }
  rs_std::unit_t const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::unit_t const*>(__storage + 0);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(255); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < (:: alloc :: vec :: Vec < u8 > , :: alloc :: "
    "vec :: Vec < u8 > ,) , :: qr_code :: types :: QrError >")
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                       rs_std::Vec<::std::uint8_t>>,
                         ::qr_code::types::QrError>,
          rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                        rs_std::Vec<::std::uint8_t>>,
          ::qr_code::types::QrError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<
      rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
      ::qr_code::types::QrError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                   rs_std::Vec<::std::uint8_t>>,
                     ::qr_code::types::QrError>,
      rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
      ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result,
             rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                           rs_std::Vec<::std::uint8_t>>,
             U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result,
             rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                           rs_std::Vec<::std::uint8_t>>,
             U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() != UINT64_C(18446744073709551615);
  }
  rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>*
  ok_ptr() noexcept {
    return reinterpret_cast<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                          rs_std::Vec<::std::uint8_t>>*>(
        __storage);
  }
  rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>> const*
  ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                          rs_std::Vec<::std::uint8_t>> const*>(
        __storage);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[48];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: qr_code :: QrCode , :: qr_code :: types :: "
    "QrError >") rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
          ::qr_code::QrCode, ::qr_code::types::QrError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>& operator=(
      const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
      ::qr_code::QrCode, ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::qr_code::QrCode, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::qr_code::QrCode, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() != UINT64_C(18446744073709551615);
  }
  ::qr_code::QrCode* ok_ptr() noexcept {
    return reinterpret_cast<::qr_code::QrCode*>(__storage);
  }
  ::qr_code::QrCode const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::QrCode const*>(__storage);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020bits_x00000020_x0000003a_x0000003a_x00000020Bits_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020bits_x00000020_x0000003a_x0000003a_x00000020Bits_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: qr_code :: bits :: Bits , :: qr_code :: "
    "types :: QrError >")
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
          ::qr_code::bits::Bits, ::qr_code::types::QrError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>& operator=(
      const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
      ::qr_code::bits::Bits, ::qr_code::types::QrError>;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<Result, ::qr_code::bits::Bits, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<Result, ::qr_code::bits::Bits, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() != UINT64_C(18446744073709551615);
  }
  ::qr_code::bits::Bits* ok_ptr() noexcept {
    return reinterpret_cast<::qr_code::bits::Bits*>(__storage);
  }
  ::qr_code::bits::Bits const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::bits::Bits const*>(__storage);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020structured_x00000020_x0000003a_x0000003a_x00000020SplittedQr_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020structured_x00000020_x0000003a_x0000003a_x00000020SplittedQr_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: qr_code :: structured :: SplittedQr , :: "
    "qr_code :: types :: QrError >")
    rs_std::Result<::qr_code::structured::SplittedQr, ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<::qr_code::structured::SplittedQr,
                         ::qr_code::types::QrError>,
          ::qr_code::structured::SplittedQr, ::qr_code::types::QrError> {
 public:
  // `core::result::Result` doesn't implement the `Clone` trait
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  // C++ move operations are unavailable for this type. See
  // http://crubit.rs/rust/movable_types for an explanation of Rust types that
  // are C++ movable.
  Result(Result&&) = delete;
  rs_std::Result<::qr_code::structured::SplittedQr, ::qr_code::types::QrError>&
  operator=(Result&&) = delete;
  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::qr_code::structured::SplittedQr,
                                        ::qr_code::types::QrError>,
                         ::qr_code::structured::SplittedQr,
                         ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::qr_code::structured::SplittedQr, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::qr_code::structured::SplittedQr, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept {
    return tag() != UINT64_C(18446744073709551615);
  }
  ::qr_code::structured::SplittedQr* ok_ptr() noexcept {
    return reinterpret_cast<::qr_code::structured::SplittedQr*>(__storage);
  }
  ::qr_code::structured::SplittedQr const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::structured::SplittedQr const*>(
        __storage);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < :: qr_code :: QrCode "
    "> , :: qr_code :: types :: QrError >")
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>
    : public rs_std::ResultBase<rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                                               ::qr_code::types::QrError>,
                                rs_std::Vec<::qr_code::QrCode>,
                                ::qr_code::types::QrError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>,
      rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<::qr_code::QrCode>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<::qr_code::QrCode>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  rs_std::Vec<::qr_code::QrCode>* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::Vec<::qr_code::QrCode>*>(__storage + 8);
  }
  rs_std::Vec<::qr_code::QrCode> const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::Vec<::qr_code::QrCode> const*>(__storage +
                                                                   8);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < u8 > , :: qr_code :: "
    "types :: QrError >")
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>
    : public rs_std::ResultBase<rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                               ::qr_code::types::QrError>,
                                rs_std::Vec<::std::uint8_t>,
                                ::qr_code::types::QrError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>,
      rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                rs_std::Vec<::std::uint8_t>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                rs_std::Vec<::std::uint8_t>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  rs_std::Vec<::std::uint8_t>* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::Vec<::std::uint8_t>*>(__storage + 8);
  }
  rs_std::Vec<::std::uint8_t> const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::Vec<::std::uint8_t> const*>(__storage + 8);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage + 8);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage + 8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < usize , :: qr_code :: types :: QrError >")
    rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>
    : public rs_std::ResultBase<
          rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>,
          ::std::uint64_t, ::qr_code::types::QrError> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Result(const Result&) = default;
  Result& operator=(const Result&) = default;
  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>,
      ::std::uint64_t, ::qr_code::types::QrError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint64_t, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint64_t, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 255; }
  ::std::uint64_t* ok_ptr() noexcept {
    return reinterpret_cast<::std::uint64_t*>(__storage + 8);
  }
  ::std::uint64_t const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::std::uint64_t const*>(__storage + 8);
  }
  ::qr_code::types::QrError* err_ptr() noexcept {
    return reinterpret_cast<::qr_code::types::QrError*>(__storage);
  }
  ::qr_code::types::QrError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::qr_code::types::QrError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(255); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < bool >")
    rs_std::Vec<bool> : public rs_std::VecBase<bool> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<bool>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<bool>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<bool>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
template <>
struct alignas(8)
    CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < :: qr_code :: Color >")
        rs_std::Vec<::qr_code::Color>
    : public rs_std::VecBase<::qr_code::Color> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::qr_code::Color>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::qr_code::Color>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::qr_code::Color>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e
template <>
struct alignas(8)
    CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < :: qr_code :: QrCode >")
        rs_std::Vec<::qr_code::QrCode>
    : public rs_std::VecBase<::qr_code::QrCode> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::qr_code::QrCode>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::qr_code::QrCode>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::qr_code::QrCode>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: qr_code :: optimize :: Segment >")
    rs_std::Vec<::qr_code::optimize::Segment>
    : public rs_std::VecBase<::qr_code::optimize::Segment> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::qr_code::optimize::Segment>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::qr_code::optimize::Segment>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::qr_code::optimize::Segment>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: alloc :: vec :: Vec < u8 > >")
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>
    : public rs_std::VecBase<rs_std::Vec<::std::uint8_t>> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<rs_std::Vec<::std::uint8_t>>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<rs_std::Vec<::std::uint8_t>>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<rs_std::Vec<::std::uint8_t>>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < u8 >")
    rs_std::Vec<::std::uint8_t> : public rs_std::VecBase<::std::uint8_t> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::std::uint8_t>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::std::uint8_t>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::std::uint8_t>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

namespace qr_code::structured {

//  Represent a QR code that could be splitted in `total_qr` QR codes
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=156
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: qr_code :: structured :: SplittedQr") alignas(8) [[clang::trivial_abi]]
SplittedQr final {
 public:
  //  Creates a new `SplittedQr` if possible given `bytes` len and max QR code
  //  `version` to use
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=169
  static rs_std::Result<::qr_code::structured::SplittedQr,
                        ::qr_code::types::QrError>
  new_(rs_std::Vec<::std::uint8_t> bytes, ::std::int16_t version);

  //  Creates the sequence of QR codes that merged back would produce
  //  `self.bytes`
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=207
  rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>
  split() const;

  //  QR code content
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=164
  rs_std::Vec<::std::uint8_t> bytes{};
  //  Total QR codes necessary to encode `bytes` with `version` QR codes
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=162
  ::std::uintptr_t total_qr{};
  //  QR code version
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=158
  ::std::int16_t version{};
  //  QR code parity (will be the same in any QR code of the sequence)
  //
  // Generated from:
  // ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/structured.rs;l=160
  ::std::uint8_t parity{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace qr_code::structured

#ifndef _CRUBIT_BINDINGS_FOR__x0000003a_x0000003a_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR__x0000003a_x0000003a_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "(:: alloc :: vec :: Vec < u8 > , :: alloc :: vec :: Vec < u8 > ,)")
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>> {
 public:
  // Default::default
  Tuple();

  // Clone::clone
  Tuple(const Tuple&) noexcept;

  // Clone::clone_from
  ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>&
  operator=(const Tuple&) noexcept;

  Tuple(Tuple&&) noexcept;
  ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>&
  operator=(Tuple&&) noexcept;
  Tuple(::crubit::UnsafeRelocateTag, Tuple&& value);
  Tuple(rs_std::Vec<::std::uint8_t> __field0,
        rs_std::Vec<::std::uint8_t> __field1) noexcept;
  Tuple(std::tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>&&
            tuple) noexcept;
  ~Tuple();
  operator std::tuple<rs_std::Vec<::std::uint8_t>,
                      rs_std::Vec<::std::uint8_t>>() && noexcept;
  template <std::size_t I>
  constexpr decltype(auto) get() & noexcept {
    static_assert(I < 2, "Tuple index out of bounds");
    if constexpr (I == 0) {
      return (this->__field0);
    } else if constexpr (I == 1) {
      return (this->__field1);
    } else {
      CRUBIT_UNREACHABLE();
    }
  }
  template <std::size_t I>
  constexpr decltype(auto) get() const& noexcept {
    static_assert(I < 2, "Tuple index out of bounds");
    if constexpr (I == 0) {
      return (this->__field0);
    } else if constexpr (I == 1) {
      return (this->__field1);
    } else {
      CRUBIT_UNREACHABLE();
    }
  }
  template <std::size_t I>
  constexpr decltype(auto) get() && noexcept {
    static_assert(I < 2, "Tuple index out of bounds");
    if constexpr (I == 0) {
      return std::move(this->__field0);
    } else if constexpr (I == 1) {
      return std::move(this->__field1);
    } else {
      CRUBIT_UNREACHABLE();
    }
  }
  template <std::size_t I>
  constexpr decltype(auto) get() const&& noexcept {
    static_assert(I < 2, "Tuple index out of bounds");
    if constexpr (I == 0) {
      return std::move(this->__field0);
    } else if constexpr (I == 1) {
      return std::move(this->__field1);
    } else {
      CRUBIT_UNREACHABLE();
    }
  }
  union {
    rs_std::Vec<::std::uint8_t> __field0;
  };
  union {
    rs_std::Vec<::std::uint8_t> __field1;
  };

 private:
  static void __crubit_field_offset_assertions();
};
#endif

namespace qr_code::types {

//  The color of a module.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=58
using Color CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: Color") = ::qr_code::Color;
}  // namespace qr_code::types

namespace qr_code {

static_assert(
    sizeof(::qr_code::Color) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::Color) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::Color(::qr_code::Color::MakeLight)() {
  return Color(PrivateBytesTag{}, {0});
}

// `static` constructor
inline constexpr ::qr_code::Color(::qr_code::Color::MakeDark)() {
  return Color(PrivateBytesTag{}, {1});
}
static_assert(::std::is_trivially_destructible_v<::qr_code::Color>);
static_assert(::std::is_trivially_move_constructible_v<::qr_code::Color>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::Color>);
static_assert(::std::is_trivially_copy_constructible_v<::qr_code::Color>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::Color>);
inline ::qr_code::Color::Color(::crubit::UnsafeRelocateTag, Color&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXsg_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Color const&, ::qr_code::Color const&);
}
inline bool(Color::operator==)(::qr_code::Color const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXsg_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtNtCsduaz3xaeU7_u4core3ops3bit3Not3notCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Color*, ::qr_code::Color* __ret_ptr);
}
inline ::qr_code::Color(Color::operator!)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<::qr_code::Color> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u5ColorNtNtNtCsduaz3xaeU7_u4core3ops3bit3Not3notCsh9G4tFjYpDL_u8rust_uout(
          &self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorINtNtCsduaz3xaeU7_u4core7convert4FromNtNtB6_u6canvas6ModuleE4fromCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Module*, ::qr_code::Color* __ret_ptr);
}
inline ::qr_code::Color::Color(::qr_code::canvas::Module value) {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorINtNtCsduaz3xaeU7_u4core7convert4FromNtNtB6_u6canvas6ModuleE4fromCsh9G4tFjYpDL_u8rust_uout(
          &value, this);
}
namespace __crubit_internal {
extern "C" ::std::uint64_t
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Color const&);
}
template <typename H>
inline H AbslHashValue(H h, const ::qr_code::Color& self) {
  return H::combine(
      ::std::move(h),
      __crubit_internal::
          __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorNtNtCsduaz3xaeU7_u4core4hash4Hash4hashCsh9G4tFjYpDL_u8rust_uout(
              self));
}
inline void ::qr_code::Color::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::Color;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace qr_code

namespace qr_code::types {

//  The error correction level. It allows the original information be recovered
//  even if parts of the code is damaged.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=102
using EcLevel CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: EcLevel") =
    ::qr_code::EcLevel;
}  // namespace qr_code::types

namespace qr_code {

static_assert(
    sizeof(::qr_code::EcLevel) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::EcLevel) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::EcLevel(::qr_code::EcLevel::MakeL)() {
  return EcLevel(PrivateBytesTag{}, {0});
}

// `static` constructor
inline constexpr ::qr_code::EcLevel(::qr_code::EcLevel::MakeM)() {
  return EcLevel(PrivateBytesTag{}, {1});
}

// `static` constructor
inline constexpr ::qr_code::EcLevel(::qr_code::EcLevel::MakeQ)() {
  return EcLevel(PrivateBytesTag{}, {2});
}

// `static` constructor
inline constexpr ::qr_code::EcLevel(::qr_code::EcLevel::MakeH)() {
  return EcLevel(PrivateBytesTag{}, {3});
}
static_assert(::std::is_trivially_destructible_v<::qr_code::EcLevel>);
static_assert(::std::is_trivially_move_constructible_v<::qr_code::EcLevel>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::EcLevel>);
static_assert(::std::is_trivially_copy_constructible_v<::qr_code::EcLevel>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::EcLevel>);
inline ::qr_code::EcLevel::EcLevel(::crubit::UnsafeRelocateTag,
                                   EcLevel&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXsm_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::EcLevel const&, ::qr_code::EcLevel const&);
}
inline bool(EcLevel::operator==)(::qr_code::EcLevel const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXsm_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::EcLevel const&, ::qr_code::EcLevel const&);
}
inline ::std::strong_ordering(::qr_code::EcLevel::operator<=>)(
    const EcLevel& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::strong_ordering::less;
    case 0:
      return ::std::strong_ordering::equal;
    case 1:
      return ::std::strong_ordering::greater;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::qr_code::EcLevel::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::EcLevel;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace qr_code

namespace qr_code {

static_assert(
    sizeof(::qr_code::QrCode) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::QrCode) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode&);
}
inline ::qr_code::QrCode::~QrCode() {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode const&, ::qr_code::QrCode* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode&, ::qr_code::QrCode const&);
}
inline ::qr_code::QrCode::QrCode(const QrCode& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::qr_code::QrCode& ::qr_code::QrCode::operator=(
    const QrCode& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::qr_code::QrCode::QrCode(::crubit::UnsafeRelocateTag, QrCode&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode3newRShECsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>(
    QrCode::new_)(rs_std::SliceRef<const ::std::uint8_t> data) {
  crubit::Slot<rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode3newRShECsh9G4tFjYpDL_u8rust_uout(
          &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode27with_uerror_ucorrection_ulevelRShECsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::qr_code::EcLevel*,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>(
    QrCode::with_error_correction_level)(
    rs_std::SliceRef<const ::std::uint8_t> data, ::qr_code::EcLevel ec_level) {
  crubit::Slot<rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode27with_uerror_ucorrection_ulevelRShECsh9G4tFjYpDL_u8rust_uout(
          &data, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode12with_uversionRShECsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::qr_code::Version*,
    ::qr_code::EcLevel*,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>(
    QrCode::with_version)(rs_std::SliceRef<const ::std::uint8_t> data,
                          ::qr_code::Version version,
                          ::qr_code::EcLevel ec_level) {
  crubit::Slot<rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRINvMCsgh4rY7Lrz8V_u7qr_ucodeNtB3_u6QrCode12with_uversionRShECsh9G4tFjYpDL_u8rust_uout(
          &data, &version, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode9with_ubits(
    ::qr_code::bits::Bits*, ::qr_code::EcLevel*,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>(
    QrCode::with_bits)(::qr_code::bits::Bits bits,
                       ::qr_code::EcLevel ec_level) {
  crubit::Slot bits_slot((::std::move(bits)));
  crubit::Slot<rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode9with_ubits(
          bits_slot.Get(), &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode7versionCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode const&, ::qr_code::Version* __ret_ptr);
}
inline ::qr_code::Version(QrCode::version)() const {
  auto&& self = *this;
  crubit::Slot<::qr_code::Version> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode7versionCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode22error_ucorrection_ulevelCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode const&, ::qr_code::EcLevel* __ret_ptr);
}
inline ::qr_code::EcLevel(QrCode::error_correction_level)() const {
  auto&& self = *this;
  crubit::Slot<::qr_code::EcLevel> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode22error_ucorrection_ulevelCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode5widthCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode const&);
}
inline ::std::uintptr_t(QrCode::width)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode5widthCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode18max_uallowed_uerrors(
    ::qr_code::QrCode const&);
}
inline ::std::uintptr_t(QrCode::max_allowed_errors)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode18max_uallowed_uerrors(
          self);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode13is_ufunctional(
    ::qr_code::QrCode const&, ::std::uintptr_t, ::std::uintptr_t);
}
inline bool(QrCode::is_functional)(::std::uintptr_t x,
                                   ::std::uintptr_t y) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode13is_ufunctional(
          self, x, y);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode6to_uvec(
    ::qr_code::QrCode const&, rs_std::Vec<bool>* __ret_ptr);
}
inline rs_std::Vec<bool>(QrCode::to_vec)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<bool>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode6to_uvec(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode4iterCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode const&, ::qr_code::QrCodeIterator* __ret_ptr);
}
inline ::qr_code::QrCodeIterator(QrCode::iter)() const& $(__anon1)
    CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<::qr_code::QrCodeIterator> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode4iterCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode11into_ucolorsCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCode*, rs_std::Vec<::qr_code::Color>* __ret_ptr);
}
inline rs_std::Vec<::qr_code::Color>(QrCode::into_colors)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::qr_code::Color>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMCsgh4rY7Lrz8V_u7qr_ucodeNtB2_u6QrCode11into_ucolorsCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode6renderNtB4_u6QrCode9to_ustring(
    ::qr_code::QrCode const&, bool, ::std::uint8_t,
    ::rs::alloc::string::String* __ret_ptr);
}
inline ::rs::alloc::string::String(QrCode::to_string)(
    bool inverted, ::std::uint8_t border) const {
  auto&& self = *this;
  crubit::Slot<::rs::alloc::string::String> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode6renderNtB4_u6QrCode9to_ustring(
          self, inverted, border, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::qr_code::Color const& $(__anon1)
    __crubit_thunk_bd91af9184cfc96f__uRNvXs_uCsgh4rY7Lrz8V_u7qr_ucodeNtB4_u6QrCodeINtNtNtCsduaz3xaeU7_u4core3ops5index5IndexTjjEE5indexCsh9G4tFjYpDL_u8rust_uout(
        ::qr_code::QrCode const&, void**);
}
inline ::qr_code::Color const& $(__anon1)(QrCode::operator[])(
    ::std::tuple<::std::uintptr_t, ::std::uintptr_t> __param_1)
    const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  auto&& __param_1_0 = ::std::get<0>(__param_1);
  auto&& __param_1_cabi_0 = __param_1_0;
  auto&& __param_1_1 = ::std::get<1>(__param_1);
  auto&& __param_1_cabi_1 = __param_1_1;
  void* __param_1_cabi[] = {&__param_1_cabi_0, &__param_1_cabi_1};
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs_uCsgh4rY7Lrz8V_u7qr_ucodeNtB4_u6QrCodeINtNtNtCsduaz3xaeU7_u4core3ops5index5IndexTjjEE5indexCsh9G4tFjYpDL_u8rust_uout(
          self, __param_1_cabi);
}
inline void ::qr_code::QrCode::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::QrCode;
  static_assert(0 == offsetof(__crubit_assert_type, content));
  static_assert(24 == offsetof(__crubit_assert_type, width_));
  static_assert(32 == offsetof(__crubit_assert_type, version_));
  static_assert(36 == offsetof(__crubit_assert_type, ec_level));
}
static_assert(
    sizeof(::qr_code::QrCodeIterator) == 16,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::QrCodeIterator) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<::qr_code::QrCodeIterator>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::QrCodeIterator>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::QrCodeIterator>);
inline ::qr_code::QrCodeIterator::QrCodeIterator(::crubit::UnsafeRelocateTag,
                                                 QrCodeIterator&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::qr_code::QrCodeIterator::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::QrCodeIterator;
  static_assert(0 == offsetof(__crubit_assert_type, qr_code));
  static_assert(8 == offsetof(__crubit_assert_type, index));
}
}  // namespace qr_code

namespace qr_code::types {

//  In QR code terminology, `Version` means the size of the generated image.
//  Larger version means the size of code is larger, and therefore can carry
//  more information.
//
//  The smallest version is `Version::Normal(1)` of size 21×21, and the largest
//  is `Version::Normal(40)` of size 177×177.
//
// Generated from:
// ../../third_party/rust/chromium_crates_io/vendor/qr_code-v2/src/types.rs;l=127
using Version CRUBIT_INTERNAL_RUST_TYPE(":: qr_code :: Version") =
    ::qr_code::Version;
}  // namespace qr_code::types

namespace qr_code {

static_assert(
    sizeof(::qr_code::Version) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::Version) == 2,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version6Normal0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int16_t, ::qr_code::Version* __ret_ptr);
}
inline ::qr_code::Version(Version::MakeNormal)(::std::int16_t __param_0) {
  crubit::Slot<::qr_code::Version> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version6Normal0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version5Micro0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int16_t, ::qr_code::Version* __ret_ptr);
}
inline ::qr_code::Version(Version::MakeMicro)(::std::int16_t __param_0) {
  crubit::Slot<::qr_code::Version> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7Version5Micro0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<::qr_code::Version>);
static_assert(::std::is_trivially_move_constructible_v<::qr_code::Version>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::Version>);
static_assert(::std::is_trivially_copy_constructible_v<::qr_code::Version>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::Version>);
inline ::qr_code::Version::Version(::crubit::UnsafeRelocateTag,
                                   Version&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" ::std::int16_t
__crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version5widthCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Version*);
}
inline ::std::int16_t(Version::width)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version5widthCsh9G4tFjYpDL_u8rust_uout(
          &self);
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version15mode_ubits_ucount(
    ::qr_code::Version*);
}
inline ::std::uintptr_t(Version::mode_bits_count)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version15mode_ubits_ucount(
          &self);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version8is_umicroCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Version*);
}
inline bool(Version::is_micro)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7Version8is_umicroCsh9G4tFjYpDL_u8rust_uout(
          &self);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXsv_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7VersionNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Version const&, ::qr_code::Version const&);
}
inline bool(Version::operator==)(::qr_code::Version const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXsv_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7VersionNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::qr_code::Version::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::Version;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace qr_code

namespace qr_code::bits {

static_assert(
    sizeof(::qr_code::bits::Bits) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::bits::Bits) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits&);
}
inline ::qr_code::bits::Bits::~Bits() {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits const&, ::qr_code::bits::Bits* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits&, ::qr_code::bits::Bits const&);
}
inline ::qr_code::bits::Bits::Bits(const Bits& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::qr_code::bits::Bits& ::qr_code::bits::Bits::operator=(
    const Bits& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::qr_code::bits::Bits::Bits(::crubit::UnsafeRelocateTag, Bits&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3newCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Version*, ::qr_code::bits::Bits* __ret_ptr);
}
inline ::qr_code::bits::Bits(Bits::new_)(::qr_code::Version version) {
  crubit::Slot<::qr_code::bits::Bits> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3newCsh9G4tFjYpDL_u8rust_uout(
          &version, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits19push_unumber_uchecked(
    ::qr_code::bits::Bits&, ::std::uintptr_t, ::std::uintptr_t,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_number_checked)(::std::uintptr_t n, ::std::uintptr_t number) {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits19push_unumber_uchecked(
          self, n, number, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits*, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(Bits::into_bytes)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits10into_ubytesCsh9G4tFjYpDL_u8rust_uout(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3lenCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits const&);
}
inline ::std::uintptr_t(Bits::len)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits3lenCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits const&);
}
inline bool(Bits::is_empty)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits8is_uemptyCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7max_ulen(
    ::qr_code::bits::Bits const&, ::qr_code::EcLevel*,
    rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>(
    Bits::max_len)(::qr_code::EcLevel ec_level) const {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7max_ulen(
          self, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7versionCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::bits::Bits const&, ::qr_code::Version* __ret_ptr);
}
inline ::qr_code::Version(Bits::version)() const {
  auto&& self = *this;
  crubit::Slot<::qr_code::Version> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB2_u4Bits7versionCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits24push_ufnc1_ufirst_uposition(
    ::qr_code::bits::Bits&,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_fnc1_first_position)() {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits24push_ufnc1_ufirst_uposition(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits25push_ufnc1_usecond_uposition(
    ::qr_code::bits::Bits&, ::std::uint8_t,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_fnc1_second_position)(::std::uint8_t application_indicator) {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits25push_ufnc1_usecond_uposition(
          self, application_indicator, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits22push_ualphanumeric_udata(
    ::qr_code::bits::Bits&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_alphanumeric_data)(rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::bits::Bits&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          data));
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs2_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits22push_ualphanumeric_udata(
          self, &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs7_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_uoptimal_udata(
    ::qr_code::bits::Bits&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_optimal_data)(rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::bits::Bits&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          data));
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs7_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_uoptimal_udata(
          self, &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs6_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_uterminator(
    ::qr_code::bits::Bits&, ::qr_code::EcLevel*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_terminator)(::qr_code::EcLevel ec_level) {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs6_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_uterminator(
          self, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs1_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_unumeric_udata(
    ::qr_code::bits::Bits&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_numeric_data)(rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::bits::Bits&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          data));
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs1_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits17push_unumeric_udata(
          self, &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs4_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_ukanji_udata(
    ::qr_code::bits::Bits&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_kanji_data)(rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::bits::Bits&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          data));
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs4_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits15push_ukanji_udata(
          self, &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB4_u4Bits19push_umode_uindicator(
    ::qr_code::bits::Bits&, ::qr_code::bits::ExtendedMode*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_mode_indicator)(::qr_code::bits::ExtendedMode mode) {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB4_u4Bits19push_umode_uindicator(
          self, &mode, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits19push_ueci_udesignator(
    ::qr_code::bits::Bits&, ::std::uint32_t,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_eci_designator)(::std::uint32_t eci_designator) {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits19push_ueci_udesignator(
          self, eci_designator, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits14push_ubyte_udata(
    ::qr_code::bits::Bits&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>(
    Bits::push_byte_data)(rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::bits::Bits&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          data));
  crubit::Slot<rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode4bitsNtB5_u4Bits14push_ubyte_udata(
          self, &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::qr_code::bits::Bits::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::bits::Bits;
  static_assert(0 == offsetof(__crubit_assert_type, data));
  static_assert(24 == offsetof(__crubit_assert_type, bit_offset));
  static_assert(32 == offsetof(__crubit_assert_type, version_));
}
static_assert(
    sizeof(::qr_code::bits::ExtendedMode) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::bits::ExtendedMode) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::bits::ExtendedMode(
    ::qr_code::bits::ExtendedMode::MakeEci)() {
  return ExtendedMode(PrivateBytesTag{}, {4});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits12ExtendedMode4Data0Csh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::Mode*, ::qr_code::bits::ExtendedMode* __ret_ptr);
}
inline ::qr_code::bits::ExtendedMode(ExtendedMode::MakeData)(
    ::qr_code::types::Mode __param_0) {
  crubit::Slot<::qr_code::bits::ExtendedMode> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits12ExtendedMode4Data0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

// `static` constructor
inline constexpr ::qr_code::bits::ExtendedMode(
    ::qr_code::bits::ExtendedMode::MakeFnc1First)() {
  return ExtendedMode(PrivateBytesTag{}, {6});
}

// `static` constructor
inline constexpr ::qr_code::bits::ExtendedMode(
    ::qr_code::bits::ExtendedMode::MakeFnc1Second)() {
  return ExtendedMode(PrivateBytesTag{}, {7});
}

// `static` constructor
inline constexpr ::qr_code::bits::ExtendedMode(
    ::qr_code::bits::ExtendedMode::MakeStructuredAppend)() {
  return ExtendedMode(PrivateBytesTag{}, {8});
}
static_assert(
    ::std::is_trivially_destructible_v<::qr_code::bits::ExtendedMode>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::bits::ExtendedMode>);
static_assert(
    ::std::is_trivially_move_assignable_v<::qr_code::bits::ExtendedMode>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::qr_code::bits::ExtendedMode>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::qr_code::bits::ExtendedMode>);
inline ::qr_code::bits::ExtendedMode::ExtendedMode(::crubit::UnsafeRelocateTag,
                                                   ExtendedMode&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::qr_code::bits::ExtendedMode::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::bits::ExtendedMode;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode4bits11encode_uauto(
    rs_std::SliceRef<const ::std::uint8_t>*, ::qr_code::EcLevel*,
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>*
        __ret_ptr);
}
inline rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>
encode_auto(rs_std::SliceRef<const ::std::uint8_t> data,
            ::qr_code::EcLevel ec_level) {
  crubit::Slot<rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode4bits11encode_uauto(
          &data, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace qr_code::bits

namespace qr_code::canvas {

static_assert(
    sizeof(::qr_code::canvas::Canvas) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::canvas::Canvas) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Canvas&);
}
inline ::qr_code::canvas::Canvas::~Canvas() {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Canvas const&, ::qr_code::canvas::Canvas* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Canvas&, ::qr_code::canvas::Canvas const&);
}
inline ::qr_code::canvas::Canvas::Canvas(const Canvas& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::qr_code::canvas::Canvas& ::qr_code::canvas::Canvas::operator=(
    const Canvas& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6CanvasNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::qr_code::canvas::Canvas::Canvas(::crubit::UnsafeRelocateTag,
                                         Canvas&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas15apply_ubest_umask(
    ::qr_code::canvas::Canvas const&, ::qr_code::canvas::Canvas* __ret_ptr);
}
inline ::qr_code::canvas::Canvas(Canvas::apply_best_mask)() const {
  auto&& self = *this;
  crubit::Slot<::qr_code::canvas::Canvas> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas15apply_ubest_umask(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas8to_ubools(
    ::qr_code::canvas::Canvas const&, rs_std::Vec<bool>* __ret_ptr);
}
inline rs_std::Vec<bool>(Canvas::to_bools)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<bool>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas8to_ubools(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas11into_ucolors(
    ::qr_code::canvas::Canvas*, rs_std::Vec<::qr_code::Color>* __ret_ptr);
}
inline rs_std::Vec<::qr_code::Color>(Canvas::into_colors)() && {
  auto&& self = *this;
  crubit::Slot self_slot((::std::move(self)));
  crubit::Slot<rs_std::Vec<::qr_code::Color>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMsb_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas11into_ucolors(
          self_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs9_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas10apply_umask(
    ::qr_code::canvas::Canvas&, ::qr_code::canvas::MaskPattern*);
}
inline void(Canvas::apply_mask)(::qr_code::canvas::MaskPattern pattern) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs9_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas10apply_umask(
          self, &pattern);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs8_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas9draw_udata(
    ::qr_code::canvas::Canvas&, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline void(Canvas::draw_data)(rs_std::SliceRef<const ::std::uint8_t> data,
                               rs_std::SliceRef<const ::std::uint8_t> ec) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::qr_code::canvas::Canvas&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>,
                                   rs_std::SliceRef<const ::std::uint8_t>>(data,
                                                                           ec));
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs8_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas9draw_udata(
          self, &data, &ec);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas28draw_uall_ufunctional_upatterns(
    ::qr_code::canvas::Canvas&);
}
inline void(Canvas::draw_all_functional_patterns)() {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs5_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas28draw_uall_ufunctional_upatterns(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3new(
    ::qr_code::Version*, ::qr_code::EcLevel*,
    ::qr_code::canvas::Canvas* __ret_ptr);
}
inline ::qr_code::canvas::Canvas(Canvas::new_)(::qr_code::Version version,
                                               ::qr_code::EcLevel ec_level) {
  crubit::Slot<::qr_code::canvas::Canvas> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3new(
          &version, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3get(
    ::qr_code::canvas::Canvas const&, ::std::int16_t, ::std::int16_t,
    ::qr_code::canvas::Module* __ret_ptr);
}
inline ::qr_code::canvas::Module(Canvas::get)(::std::int16_t x,
                                              ::std::int16_t y) const {
  auto&& self = *this;
  crubit::Slot<::qr_code::canvas::Module> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3get(
          self, x, y, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::qr_code::canvas::Module& $(__anon1)
    __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas7get_umut(
        ::qr_code::canvas::Canvas&, ::std::int16_t, ::std::int16_t);
}
inline ::qr_code::canvas::Module& $(__anon1)(Canvas::get_mut)(
    ::std::int16_t x, ::std::int16_t y) &
    $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas7get_umut(
          self, x, y);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3put(
    ::qr_code::canvas::Canvas&, ::std::int16_t, ::std::int16_t,
    ::qr_code::Color*);
}
inline void(Canvas::put)(::std::int16_t x, ::std::int16_t y,
                         ::qr_code::Color color) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6Canvas3put(
          self, x, y, &color);
}
inline void ::qr_code::canvas::Canvas::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::canvas::Canvas;
  static_assert(0 == offsetof(__crubit_assert_type, modules));
  static_assert(24 == offsetof(__crubit_assert_type, version));
  static_assert(28 == offsetof(__crubit_assert_type, width));
  static_assert(30 == offsetof(__crubit_assert_type, ec_level));
}
static_assert(
    sizeof(::qr_code::canvas::MaskPattern) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::canvas::MaskPattern) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeCheckerboard)() {
  return MaskPattern(PrivateBytesTag{}, {0});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeHorizontalLines)() {
  return MaskPattern(PrivateBytesTag{}, {1});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeVerticalLines)() {
  return MaskPattern(PrivateBytesTag{}, {2});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeDiagonalLines)() {
  return MaskPattern(PrivateBytesTag{}, {3});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeLargeCheckerboard)() {
  return MaskPattern(PrivateBytesTag{}, {4});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeFields)() {
  return MaskPattern(PrivateBytesTag{}, {5});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeDiamonds)() {
  return MaskPattern(PrivateBytesTag{}, {6});
}

// `static` constructor
inline constexpr ::qr_code::canvas::MaskPattern(
    ::qr_code::canvas::MaskPattern::MakeMeadow)() {
  return MaskPattern(PrivateBytesTag{}, {7});
}
static_assert(
    ::std::is_trivially_destructible_v<::qr_code::canvas::MaskPattern>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::canvas::MaskPattern>);
static_assert(
    ::std::is_trivially_move_assignable_v<::qr_code::canvas::MaskPattern>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::qr_code::canvas::MaskPattern>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::qr_code::canvas::MaskPattern>);
inline ::qr_code::canvas::MaskPattern::MaskPattern(::crubit::UnsafeRelocateTag,
                                                   MaskPattern&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::qr_code::canvas::MaskPattern::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::canvas::MaskPattern;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
static_assert(
    sizeof(::qr_code::canvas::Module) == 2,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::canvas::Module) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::canvas::Module(
    ::qr_code::canvas::Module::MakeEmpty)() {
  return Module(PrivateBytesTag{}, {0, 0});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module6Masked0Csh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Color*, ::qr_code::canvas::Module* __ret_ptr);
}
inline ::qr_code::canvas::Module(Module::MakeMasked)(
    ::qr_code::Color __param_0) {
  crubit::Slot<::qr_code::canvas::Module> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module6Masked0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module8Unmasked0Csh9G4tFjYpDL_u8rust_uout(
    ::qr_code::Color*, ::qr_code::canvas::Module* __ret_ptr);
}
inline ::qr_code::canvas::Module(Module::MakeUnmasked)(
    ::qr_code::Color __param_0) {
  crubit::Slot<::qr_code::canvas::Module> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6Module8Unmasked0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<::qr_code::canvas::Module>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::canvas::Module>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::canvas::Module>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::qr_code::canvas::Module>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::canvas::Module>);
inline ::qr_code::canvas::Module::Module(::crubit::UnsafeRelocateTag,
                                         Module&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module7is_udarkCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Module*);
}
inline bool(Module::is_dark)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module7is_udarkCsh9G4tFjYpDL_u8rust_uout(
          &self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module4maskCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Module*, bool, ::qr_code::canvas::Module* __ret_ptr);
}
inline ::qr_code::canvas::Module(Module::mask)(bool should_invert) const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<::qr_code::canvas::Module> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB4_u6Module4maskCsh9G4tFjYpDL_u8rust_uout(
          &self, should_invert, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6ModuleINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB6_u5types5ColorE4intoCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Module*, ::qr_code::Color* __ret_ptr);
}
inline ::qr_code::canvas::Module::operator ::qr_code::Color() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<::qr_code::Color> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode6canvas6ModuleINtNtCsduaz3xaeU7_u4core7convert4IntoNtNtB6_u5types5ColorE4intoCsh9G4tFjYpDL_u8rust_uout(
          &self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXsd_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6ModuleNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::canvas::Module const&, ::qr_code::canvas::Module const&);
}
inline bool(Module::operator==)(::qr_code::canvas::Module const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXsd_uNtCsgh4rY7Lrz8V_u7qr_ucode6canvasNtB5_u6ModuleNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::qr_code::canvas::Module::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::canvas::Module;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode6canvas13is_ufunctional(
    ::qr_code::Version*, ::std::int16_t, ::std::int16_t, ::std::int16_t);
}
inline bool is_functional(::qr_code::Version version, ::std::int16_t width,
                          ::std::int16_t x, ::std::int16_t y) {
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode6canvas13is_ufunctional(
          &version, width, x, y);
}

}  // namespace qr_code::canvas

namespace qr_code::ec {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec19construct_ucodewords(
    rs_std::SliceRef<const ::std::uint8_t>*, ::qr_code::Version*,
    ::qr_code::EcLevel*,
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>
construct_codewords(rs_std::SliceRef<const ::std::uint8_t> rawbits,
                    ::qr_code::Version version, ::qr_code::EcLevel ec_level) {
  crubit::Slot<rs_std::Result<
      rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
      ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec19construct_ucodewords(
          &rawbits, &version, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec28create_uerror_ucorrection_ucode(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uintptr_t,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> create_error_correction_code(
    rs_std::SliceRef<const ::std::uint8_t> data,
    ::std::uintptr_t ec_code_size) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec28create_uerror_ucorrection_ucode(
          &data, ec_code_size, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec18max_uallowed_uerrors(
    ::qr_code::Version*, ::qr_code::EcLevel*,
    rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>
max_allowed_errors(::qr_code::Version version, ::qr_code::EcLevel ec_level) {
  crubit::Slot<rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode2ec18max_uallowed_uerrors(
          &version, &ec_level, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace qr_code::ec

namespace qr_code::optimize {

static_assert(
    sizeof(::qr_code::optimize::Parser) == 48,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::optimize::Parser) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<::qr_code::optimize::Parser>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::optimize::Parser>);
static_assert(
    ::std::is_trivially_move_assignable_v<::qr_code::optimize::Parser>);
inline ::qr_code::optimize::Parser::Parser(::crubit::UnsafeRelocateTag,
                                           Parser&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6Parser3new(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::qr_code::optimize::Parser* __ret_ptr);
}
inline ::qr_code::optimize::Parser(Parser::new_)(
    rs_std::SliceRef<const ::std::uint8_t> data CRUBIT_LIFETIME_BOUND) {
  crubit::Slot<::qr_code::optimize::Parser> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6Parser3new(
          &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::qr_code::optimize::Parser::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::optimize::Parser;
  static_assert(0 == offsetof(__crubit_assert_type, begin));
  static_assert(8 == offsetof(__crubit_assert_type, ecs_iter));
  static_assert(40 == offsetof(__crubit_assert_type, state));
  static_assert(41 == offsetof(__crubit_assert_type, pending_single_byte));
}
static_assert(
    sizeof(::qr_code::optimize::Segment) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::optimize::Segment) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<::qr_code::optimize::Segment>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::optimize::Segment>);
static_assert(
    ::std::is_trivially_move_assignable_v<::qr_code::optimize::Segment>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::qr_code::optimize::Segment>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::qr_code::optimize::Segment>);
inline ::qr_code::optimize::Segment::Segment(::crubit::UnsafeRelocateTag,
                                             Segment&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB2_u7Segment11encoded_ulen(
    ::qr_code::optimize::Segment const&, ::qr_code::Version*);
}
inline ::std::uintptr_t(Segment::encoded_len)(
    ::qr_code::Version version) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB2_u7Segment11encoded_ulen(
          self, &version);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXs4_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u7SegmentNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::optimize::Segment const&, ::qr_code::optimize::Segment const&);
}
inline bool(Segment::operator==)(
    ::qr_code::optimize::Segment const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs4_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u7SegmentNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::qr_code::optimize::Segment::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::optimize::Segment;
  static_assert(0 == offsetof(__crubit_assert_type, begin));
  static_assert(8 == offsetof(__crubit_assert_type, end));
  static_assert(16 == offsetof(__crubit_assert_type, mode));
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode8optimize21optimize_usegmentation(
    rs_std::SliceRef<const ::qr_code::optimize::Segment>*, ::qr_code::Version*,
    rs_std::Vec<::qr_code::optimize::Segment>* __ret_ptr);
}
inline rs_std::Vec<::qr_code::optimize::Segment> optimize_segmentation(
    rs_std::SliceRef<const ::qr_code::optimize::Segment> segments,
    ::qr_code::Version version) {
  crubit::Slot<rs_std::Vec<::qr_code::optimize::Segment>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode8optimize21optimize_usegmentation(
          &segments, &version, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace qr_code::optimize

namespace qr_code::structured {

static_assert(
    sizeof(::qr_code::structured::SplittedQr) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::structured::SplittedQr) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr3new(
    rs_std::Vec<::std::uint8_t>*, ::std::int16_t,
    rs_std::Result<::qr_code::structured::SplittedQr,
                   ::qr_code::types::QrError>* __ret_ptr);
}
inline rs_std::Result<::qr_code::structured::SplittedQr,
                      ::qr_code::types::QrError>(SplittedQr::new_)(
    rs_std::Vec<::std::uint8_t> bytes, ::std::int16_t version) {
  crubit::Slot bytes_slot((::std::move(bytes)));
  crubit::Slot<rs_std::Result<::qr_code::structured::SplittedQr,
                              ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr3new(
          bytes_slot.Get(), version, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr5split(
    ::qr_code::structured::SplittedQr const&,
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                      ::qr_code::types::QrError>(SplittedQr::split)() const {
  auto&& self = *this;
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs0_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u10SplittedQr5split(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::qr_code::structured::SplittedQr::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::qr_code::structured::SplittedQr;
  static_assert(0 == offsetof(__crubit_assert_type, bytes));
  static_assert(24 == offsetof(__crubit_assert_type, total_qr));
  static_assert(32 == offsetof(__crubit_assert_type, version));
  static_assert(34 == offsetof(__crubit_assert_type, parity));
}
static_assert(
    sizeof(::qr_code::structured::StructuredQrError) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::structured::StructuredQrError) == 8,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeAtLeast2Pieces)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError13TotalMismatch0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uintptr_t, ::qr_code::structured::StructuredQrError* __ret_ptr);
}
inline ::qr_code::structured::StructuredQrError(
    StructuredQrError::MakeTotalMismatch)(::std::uintptr_t __param_0) {
  crubit::Slot<::qr_code::structured::StructuredQrError>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError13TotalMismatch0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeMissingParts)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeParity)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeTooShort)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeStructuredWrongMode)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::structured::StructuredQrError(
    ::qr_code::structured::StructuredQrError::MakeStructuredWrongEnc)() {
  return StructuredQrError(
      PrivateBytesTag{},
      {6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError19SeqGreaterThanTotal0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uint8_t, ::std::uint8_t,
    ::qr_code::structured::StructuredQrError* __ret_ptr);
}
inline ::qr_code::structured::StructuredQrError(
    StructuredQrError::MakeSeqGreaterThanTotal)(::std::uint8_t __param_0,
                                                ::std::uint8_t __param_1) {
  crubit::Slot<::qr_code::structured::StructuredQrError>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError19SeqGreaterThanTotal0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __param_1, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError14LengthMismatch0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uintptr_t, ::std::uintptr_t,
    ::qr_code::structured::StructuredQrError* __ret_ptr);
}
inline ::qr_code::structured::StructuredQrError(
    StructuredQrError::MakeLengthMismatch)(::std::uintptr_t __param_0,
                                           ::std::uintptr_t __param_1) {
  crubit::Slot<::qr_code::structured::StructuredQrError>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError14LengthMismatch0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __param_1, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError18UnsupportedVersion0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int16_t, ::qr_code::structured::StructuredQrError* __ret_ptr);
}
inline ::qr_code::structured::StructuredQrError(
    StructuredQrError::MakeUnsupportedVersion)(::std::int16_t __param_0) {
  crubit::Slot<::qr_code::structured::StructuredQrError>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError18UnsupportedVersion0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError10SplitMax160Csh9G4tFjYpDL_u8rust_uout(
    ::std::uintptr_t, ::qr_code::structured::StructuredQrError* __ret_ptr);
}
inline ::qr_code::structured::StructuredQrError(
    StructuredQrError::MakeSplitMax16)(::std::uintptr_t __param_0) {
  crubit::Slot<::qr_code::structured::StructuredQrError>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrError10SplitMax160Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<
              ::qr_code::structured::StructuredQrError>);
static_assert(::std::is_trivially_move_constructible_v<
              ::qr_code::structured::StructuredQrError>);
static_assert(::std::is_trivially_move_assignable_v<
              ::qr_code::structured::StructuredQrError>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::qr_code::structured::StructuredQrError>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::qr_code::structured::StructuredQrError>);
inline ::qr_code::structured::StructuredQrError::StructuredQrError(
    ::crubit::UnsafeRelocateTag, StructuredQrError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXs3_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u17StructuredQrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::structured::StructuredQrError const&,
    ::qr_code::structured::StructuredQrError const&);
}
inline bool(StructuredQrError::operator==)(
    ::qr_code::structured::StructuredQrError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs3_uNtCsgh4rY7Lrz8V_u7qr_ucode10structuredNtB5_u17StructuredQrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode10structured17StructuredQrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::structured::StructuredQrError const&,
    ::rs::alloc::string::String* __ret_ptr);
inline void ::qr_code::structured::StructuredQrError::
    __crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::structured::StructuredQrError;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode10structured9merge_uqrs(
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>*,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>
merge_qrs(rs_std::Vec<rs_std::Vec<::std::uint8_t>> bytes) {
  crubit::Slot bytes_slot((::std::move(bytes)));
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvNtCsgh4rY7Lrz8V_u7qr_ucode10structured9merge_uqrs(
          bytes_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace qr_code::structured

namespace qr_code::types {

static_assert(
    sizeof(::qr_code::types::Mode) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::types::Mode) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::types::Mode(::qr_code::types::Mode::MakeNumeric)() {
  return Mode(PrivateBytesTag{}, {0});
}

// `static` constructor
inline constexpr ::qr_code::types::Mode(
    ::qr_code::types::Mode::MakeAlphanumeric)() {
  return Mode(PrivateBytesTag{}, {1});
}

// `static` constructor
inline constexpr ::qr_code::types::Mode(::qr_code::types::Mode::MakeByte)() {
  return Mode(PrivateBytesTag{}, {2});
}

// `static` constructor
inline constexpr ::qr_code::types::Mode(::qr_code::types::Mode::MakeKanji)() {
  return Mode(PrivateBytesTag{}, {3});
}
static_assert(::std::is_trivially_destructible_v<::qr_code::types::Mode>);
static_assert(::std::is_trivially_move_constructible_v<::qr_code::types::Mode>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::types::Mode>);
static_assert(::std::is_trivially_copy_constructible_v<::qr_code::types::Mode>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::types::Mode>);
inline ::qr_code::types::Mode::Mode(::crubit::UnsafeRelocateTag, Mode&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode17length_ubits_ucount(
    ::qr_code::types::Mode*, ::qr_code::Version*);
}
inline ::std::uintptr_t(Mode::length_bits_count)(
    ::qr_code::Version version) const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode17length_ubits_ucount(
          &self, &version);
}

namespace __crubit_internal {
extern "C" ::std::uintptr_t
__crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode15data_ubits_ucountCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::Mode*, ::std::uintptr_t);
}
inline ::std::uintptr_t(Mode::data_bits_count)(
    ::std::uintptr_t raw_data_len) const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode15data_ubits_ucountCsh9G4tFjYpDL_u8rust_uout(
          &self, raw_data_len);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode3max(
    ::qr_code::types::Mode*, ::qr_code::types::Mode*,
    ::qr_code::types::Mode* __ret_ptr);
}
inline ::qr_code::types::Mode(Mode::max)(::qr_code::types::Mode other) const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<::qr_code::types::Mode> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvMs3_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4Mode3max(
          &self, &other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXsC_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4ModeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::Mode const&, ::qr_code::types::Mode const&);
}
inline bool(Mode::operator==)(::qr_code::types::Mode const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXsC_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u4ModeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types4ModeNtNtCsduaz3xaeU7_u4core3cmp10PartialOrd11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::Mode const&, ::qr_code::types::Mode const&);
}
inline ::std::partial_ordering(::qr_code::types::Mode::operator<=>)(
    ::qr_code::types::Mode const& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types4ModeNtNtCsduaz3xaeU7_u4core3cmp10PartialOrd11partial_ucmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::partial_ordering::less;
    case 0:
      return ::std::partial_ordering::equivalent;
    case 1:
      return ::std::partial_ordering::greater;
    case 2:
      return ::std::partial_ordering::unordered;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::qr_code::types::Mode::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::types::Mode;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
static_assert(
    sizeof(::qr_code::types::QrError) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::qr_code::types::QrError) == 8,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::qr_code::types::QrError(
    ::qr_code::types::QrError::MakeDataTooLong)() {
  return QrError(PrivateBytesTag{}, {11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::types::QrError(
    ::qr_code::types::QrError::MakeInvalidVersion)() {
  return QrError(PrivateBytesTag{}, {12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::types::QrError(
    ::qr_code::types::QrError::MakeUnsupportedCharacterSet)() {
  return QrError(PrivateBytesTag{}, {13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::types::QrError(
    ::qr_code::types::QrError::MakeInvalidEciDesignator)() {
  return QrError(PrivateBytesTag{}, {14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline constexpr ::qr_code::types::QrError(
    ::qr_code::types::QrError::MakeInvalidCharacter)() {
  return QrError(PrivateBytesTag{}, {15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                     0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrError10Structured0Csh9G4tFjYpDL_u8rust_uout(
    ::qr_code::structured::StructuredQrError*,
    ::qr_code::types::QrError* __ret_ptr);
}
inline ::qr_code::types::QrError(QrError::MakeStructured)(
    ::qr_code::structured::StructuredQrError __param_0) {
  crubit::Slot<::qr_code::types::QrError> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNcNtNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrError10Structured0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<::qr_code::types::QrError>);
static_assert(
    ::std::is_trivially_move_constructible_v<::qr_code::types::QrError>);
static_assert(::std::is_trivially_move_assignable_v<::qr_code::types::QrError>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::qr_code::types::QrError>);
static_assert(::std::is_trivially_copy_assignable_v<::qr_code::types::QrError>);
inline ::qr_code::types::QrError::QrError(::crubit::UnsafeRelocateTag,
                                          QrError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_bd91af9184cfc96f__uRNvXs7_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7QrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::QrError const&, ::qr_code::types::QrError const&);
}
inline bool(QrError::operator==)(::qr_code::types::QrError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs7_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7QrErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYNtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::types::QrError const&, ::rs::alloc::string::String* __ret_ptr);
inline void ::qr_code::types::QrError::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::qr_code::types::QrError;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace qr_code::types

#ifndef _CRUBIT_BINDINGS_FOR_IMPL__x0000003a_x0000003a_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL__x0000003a_x0000003a_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>*
        __ret_ptr);
}
inline ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                       rs_std::Vec<::std::uint8_t>>::Tuple() {
  ::__crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                  rs_std::Vec<::std::uint8_t>> const&,
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>&,
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                  rs_std::Vec<::std::uint8_t>> const&);
}
inline ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                       rs_std::Vec<::std::uint8_t>>::Tuple(const Tuple&
                                                               other) noexcept {
  ::__crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                       rs_std::Vec<::std::uint8_t>>& ::
rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>::
operator=(const Tuple& other) noexcept {
  if (this != &other) {
    ::__crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEB3_uENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                       rs_std::Vec<::std::uint8_t>>::Tuple(Tuple&&
                                                               other) noexcept
    : Tuple() {
  *this = ::std::move(other);
}
inline ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                       rs_std::Vec<::std::uint8_t>>& ::
rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
              rs_std::Vec<::std::uint8_t>>::operator=(Tuple&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
inline ::rs_std::
    Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>::Tuple(
        ::crubit::UnsafeRelocateTag, Tuple&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>::
    Tuple(rs_std::Vec<::std::uint8_t> __field0,
          rs_std::Vec<::std::uint8_t> __field1) noexcept {
  std::construct_at(&this->__field0, std::move(__field0));
  std::construct_at(&this->__field1, std::move(__field1));
}
inline rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>::
    Tuple(std::tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>&&
              tuple) noexcept {
  std::construct_at(&this->__field0, std::move(std::get<0>(tuple)));
  std::construct_at(&this->__field1, std::move(std::get<1>(tuple)));
}
inline rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>::
operator std::tuple<rs_std::Vec<::std::uint8_t>,
                    rs_std::Vec<::std::uint8_t>>() && noexcept {
  return std::tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>(
      std::move(this->__field0), std::move(this->__field1));
}
inline rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                     rs_std::Vec<::std::uint8_t>>::~Tuple() {
  std::destroy_at(&this->__field0);
  std::destroy_at(&this->__field1);
}
inline void ::rs_std::Tuple<
    rs_std::Vec<::std::uint8_t>,
    rs_std::Vec<::std::uint8_t>>::__crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>;
  static_assert(0 == offsetof(__crubit_assert_type, __field0));
  static_assert(24 == offsetof(__crubit_assert_type, __field1));
}
#endif

namespace qr_code {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvXss_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::EcLevel const&, ::qr_code::EcLevel const&,
    ::rs::core::cmp::Ordering* __ret_ptr);
}
}  // namespace qr_code
inline ::rs::core::cmp::Ordering
rs_std::impl<::qr_code::EcLevel, ::rs::core::cmp::Ord>::cmp(
    ::qr_code::EcLevel const& self, ::qr_code::EcLevel const& other) {
  crubit::Slot<::rs::core::cmp::Ordering> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  qr_code::__crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXss_uNtCsgh4rY7Lrz8V_u7qr_ucode5typesNtB5_u7EcLevelNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          self, other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace qr_code {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvXs1_uCsgh4rY7Lrz8V_u7qr_ucodeNtB5_u14QrCodeIteratorNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
    ::qr_code::QrCodeIterator&, rs_std::Option<bool>* __ret_ptr);
}
}  // namespace qr_code
inline rs_std::Option<bool>
rs_std::impl<::qr_code::QrCodeIterator, ::rs::core::iter::Iterator>::next(
    ::qr_code::QrCodeIterator& self) {
  crubit::Slot<rs_std::Option<bool>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  qr_code::__crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uCsgh4rY7Lrz8V_u7qr_ucodeNtB5_u14QrCodeIteratorNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4nextCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace qr_code {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6ParserNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
    ::qr_code::optimize::Parser&,
    rs_std::Option<::qr_code::optimize::Segment>* __ret_ptr);
}
}  // namespace qr_code
inline rs_std::Option<::qr_code::optimize::Segment>
rs_std::impl<::qr_code::optimize::Parser, ::rs::core::iter::Iterator>::next(
    ::qr_code::optimize::Parser& self) {
  crubit::Slot<rs_std::Option<::qr_code::optimize::Segment>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  qr_code::__crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvXs1_uNtCsgh4rY7Lrz8V_u7qr_ucode8optimizeNtB5_u6ParserNtNtNtNtCsduaz3xaeU7_u4core4iter6traits8iterator8Iterator4next(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020unit_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>);
inline rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>>);
inline constexpr ::std::uint8_t rs_std::Result<
    rs_std::unit_t, ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>,
           rs_std::unit_t, U>)
inline constexpr rs_std::Result<
    rs_std::unit_t, ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>,
           rs_std::unit_t, U>)
inline constexpr rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>&
rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>&
rs_std::Result<rs_std::unit_t, ::qr_code::types::QrError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::unit_t, ::qr_code::types::QrError>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::unit_t, ::qr_code::types::QrError>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Tuple_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError> const&,
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError>&,
    rs_std::Result<
        rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
        ::qr_code::types::QrError> const&);
}
inline rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>&
rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultTINtNtCs4qcdXyRXuHP_u5alloc3vec3VechEBE_uENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(::crubit::UnsafeRelocateTag,
                                       Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                        rs_std::Vec<::std::uint8_t>>,
                          ::qr_code::types::QrError>,
           rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                         rs_std::Vec<::std::uint8_t>>,
           U>)
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                                        rs_std::Vec<::std::uint8_t>>,
                          ::qr_code::types::QrError>,
           rs_std::Tuple<rs_std::Vec<::std::uint8_t>,
                         rs_std::Vec<::std::uint8_t>>,
           U>)
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>&
rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>&
rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::operator=(rs_std::unexpected<F>&&
                                              err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(::std::in_place_t ip,
                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Tuple<rs_std::Vec<::std::uint8_t>, rs_std::Vec<::std::uint8_t>>,
    ::qr_code::types::QrError>::Result(rs_std::unexpect_t u,
                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError> const&,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>&,
    rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError> const&);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>&
rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeNtNtBF_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::qr_code::QrCode,
                      ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::qr_code::QrCode, ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
           ::qr_code::QrCode, U>)
inline constexpr rs_std::Result<
    ::qr_code::QrCode, ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>,
           ::qr_code::QrCode, U>)
inline constexpr rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>&
rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>&
rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<::qr_code::QrCode, ::qr_code::types::QrError>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020bits_x00000020_x0000003a_x0000003a_x00000020Bits_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020bits_x00000020_x0000003a_x0000003a_x00000020Bits_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError> const&,
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>&,
    rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError> const&);
}
inline rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>&
rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsgh4rY7Lrz8V_u7qr_ucode4bits4BitsNtNtBH_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::qr_code::bits::Bits,
                      ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::qr_code::bits::Bits, ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
           ::qr_code::bits::Bits, U>)
inline constexpr rs_std::Result<
    ::qr_code::bits::Bits, ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>,
           ::qr_code::bits::Bits, U>)
inline constexpr rs_std::Result<::qr_code::bits::Bits,
                                ::qr_code::types::QrError>&
rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    ::qr_code::bits::Bits,
    ::qr_code::types::QrError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::qr_code::bits::Bits,
                                ::qr_code::types::QrError>&
rs_std::Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<::qr_code::bits::Bits, ::qr_code::types::QrError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020structured_x00000020_x0000003a_x0000003a_x00000020SplittedQr_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020structured_x00000020_x0000003a_x0000003a_x00000020SplittedQr_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
inline rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::Result(::crubit::UnsafeRelocateTag,
                                       Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::qr_code::structured::SplittedQr,
                      ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::qr_code::structured::SplittedQr,
               ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::structured::SplittedQr,
                          ::qr_code::types::QrError>,
           ::qr_code::structured::SplittedQr, U>)
inline constexpr rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::qr_code::structured::SplittedQr,
                          ::qr_code::types::QrError>,
           ::qr_code::structured::SplittedQr, U>)
inline constexpr rs_std::Result<::qr_code::structured::SplittedQr,
                                ::qr_code::types::QrError>&
rs_std::Result<::qr_code::structured::SplittedQr,
               ::qr_code::types::QrError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::qr_code::structured::SplittedQr,
                                ::qr_code::types::QrError>&
rs_std::Result<::qr_code::structured::SplittedQr, ::qr_code::types::QrError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::Result(::std::in_place_t ip,
                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::qr_code::structured::SplittedQr,
    ::qr_code::types::QrError>::Result(rs_std::unexpect_t u,
                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                   ::qr_code::types::QrError> const&,
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>&,
    rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                   ::qr_code::types::QrError> const&);
}
inline rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                      ::qr_code::types::QrError>::Result(const Result&
                                                             other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                      ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtB1c_u5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::
    Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::Result(
        ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                      ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Vec<::qr_code::QrCode>,
    ::qr_code::types::QrError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                          ::qr_code::types::QrError>,
           rs_std::Vec<::qr_code::QrCode>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::qr_code::QrCode>,
    ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                          ::qr_code::types::QrError>,
           rs_std::Vec<::qr_code::QrCode>, U>)
inline constexpr rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                                ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
               ::qr_code::types::QrError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    rs_std::Vec<::qr_code::QrCode>,
    ::qr_code::types::QrError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<rs_std::Vec<::qr_code::QrCode>,
                                ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::qr_code::QrCode>, ::qr_code::types::QrError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::qr_code::types::QrError> const&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::qr_code::types::QrError> const&);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::qr_code::types::QrError>::Result(const Result&
                                                             other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsgh4rY7Lrz8V_u7qr_ucode5types7QrErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::qr_code::types::QrError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::qr_code::types::QrError>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::qr_code::types::QrError>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::std::uint8_t>,
               ::qr_code::types::QrError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::qr_code::types::QrError>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::qr_code::types::QrError>&
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::std::uint8_t>, ::qr_code::types::QrError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020types_x00000020_x0000003a_x0000003a_x00000020QrError_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>);
inline rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>>);
inline constexpr ::std::uint8_t rs_std::Result<
    ::std::uint64_t, ::qr_code::types::QrError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>,
           ::std::uint64_t, U>)
inline constexpr rs_std::Result<
    ::std::uint64_t, ::qr_code::types::QrError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>,
           ::std::uint64_t, U>)
inline constexpr rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>&
rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::qr_code::types::QrError, F>)
inline constexpr rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>&
rs_std::Result<::std::uint64_t, ::qr_code::types::QrError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::std::uint64_t, ::qr_code::types::QrError>::Result(::std::in_place_t ip,
                                                        Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::std::uint64_t, ::qr_code::types::QrError>::Result(rs_std::unexpect_t u,
                                                        Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<bool> const&, rs_std::Vec<bool>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<bool>&, rs_std::Vec<bool> const&);
}
inline rs_std::Vec<bool>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<bool>& rs_std::Vec<bool>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecbENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<bool>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<bool>& rs_std::Vec<bool>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<bool>::Vec(::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<bool>::Vec() noexcept : storage_{} { init_empty(); }
inline rs_std::Vec<bool>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020Color_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::Color> const&,
    rs_std::Vec<::qr_code::Color>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::Color>&, rs_std::Vec<::qr_code::Color> const&);
}
inline rs_std::Vec<::qr_code::Color>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::qr_code::Color>& rs_std::Vec<::qr_code::Color>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode5types5ColorENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::Color>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::qr_code::Color>& rs_std::Vec<::qr_code::Color>::operator=(
    Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::Color>::Vec(::crubit::UnsafeRelocateTag,
                                          Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::qr_code::Color>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::qr_code::Color>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020QrCode_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::QrCode> const&,
    rs_std::Vec<::qr_code::QrCode>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::QrCode>&, rs_std::Vec<::qr_code::QrCode> const&);
}
inline rs_std::Vec<::qr_code::QrCode>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::qr_code::QrCode>&
rs_std::Vec<::qr_code::QrCode>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtCsgh4rY7Lrz8V_u7qr_ucode6QrCodeENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::QrCode>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::qr_code::QrCode>&
rs_std::Vec<::qr_code::QrCode>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::QrCode>::Vec(::crubit::UnsafeRelocateTag,
                                           Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::qr_code::QrCode>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::qr_code::QrCode>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::optimize::Segment> const&,
    rs_std::Vec<::qr_code::optimize::Segment>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::qr_code::optimize::Segment>&,
    rs_std::Vec<::qr_code::optimize::Segment> const&);
}
inline rs_std::Vec<::qr_code::optimize::Segment>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::qr_code::optimize::Segment>& rs_std::Vec<
    ::qr_code::optimize::Segment>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsgh4rY7Lrz8V_u7qr_ucode8optimize7SegmentENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::optimize::Segment>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::qr_code::optimize::Segment>&
rs_std::Vec<::qr_code::optimize::Segment>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::qr_code::optimize::Segment>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::qr_code::optimize::Segment>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::qr_code::optimize::Segment>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<rs_std::Vec<::std::uint8_t>> const&,
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>&,
    rs_std::Vec<rs_std::Vec<::std::uint8_t>> const&);
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>&
rs_std::Vec<rs_std::Vec<::std::uint8_t>>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>&
rs_std::Vec<rs_std::Vec<::std::uint8_t>>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_bd91af9184cfc96f__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(::crubit::UnsafeRelocateTag,
                                        Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::std::uint8_t>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::std::uint8_t>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_copy_assignable_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_move_constructible_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_move_assignable_v<rs_std::Option<bool>>);
inline rs_std::Option<bool>::Option(::crubit::UnsafeRelocateTag,
                                    Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<rs_std::Option<bool>>);
inline constexpr ::std::uint8_t rs_std::Option<bool>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Option<bool>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<bool>::Option(::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<bool>, bool, U>)
inline rs_std::Option<bool>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<bool>, bool, U>)
inline rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<bool, Opt>)
inline rs_std::Option<bool>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<bool, Opt>)
inline rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<bool>::Option(::std::in_place_t ip,
                                    Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020qr_ucode_x00000020_x0000003a_x0000003a_x00000020optimize_x00000020_x0000003a_x0000003a_x00000020Segment_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Option<::qr_code::optimize::Segment>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Option<::qr_code::optimize::Segment>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Option<::qr_code::optimize::Segment>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Option<::qr_code::optimize::Segment>>);
inline rs_std::Option<::qr_code::optimize::Segment>::Option(
    ::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Option<::qr_code::optimize::Segment>>);
inline constexpr ::std::uint8_t
rs_std::Option<::qr_code::optimize::Segment>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = storage_[16 + i];
  }
  return ::std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Option<::qr_code::optimize::Segment>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    storage_[16 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<::qr_code::optimize::Segment>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<::qr_code::optimize::Segment>& rs_std::Option<
    ::qr_code::optimize::Segment>::operator=(::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::qr_code::optimize::Segment>,
           ::qr_code::optimize::Segment, U>)
inline rs_std::Option<::qr_code::optimize::Segment>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::qr_code::optimize::Segment>,
           ::qr_code::optimize::Segment, U>)
inline rs_std::Option<::qr_code::optimize::Segment>&
rs_std::Option<::qr_code::optimize::Segment>::operator=(U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::qr_code::optimize::Segment, Opt>)
inline rs_std::Option<::qr_code::optimize::Segment>::Option(
    Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::qr_code::optimize::Segment, Opt>)
inline rs_std::Option<::qr_code::optimize::Segment>&
rs_std::Option<::qr_code::optimize::Segment>::operator=(Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<::qr_code::optimize::Segment>::Option(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#pragma clang diagnostic pop
