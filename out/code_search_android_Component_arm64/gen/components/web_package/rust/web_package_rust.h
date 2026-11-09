// Automatically @generated C++ bindings for the following Rust crate:
// web_package_rust
// Features: always_specialize_generics_in_cpp_api_from_rust

#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <bit>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <memory>
#include <new>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/str_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace web_package::rust {
struct BundleHeaderResult;
struct ResponseParseResult;
}  // namespace web_package::rust

namespace web_package::rust {
static constexpr rs_std::StrRef CRITICAL_SECTION = rs_std::StrRef("critical");
}

namespace web_package::rust {

//  A single HTTP header field, as raw bytes: `field-value` admits `obs-text`
//  (`%x80-FF`), which RFC 9110 Section 5.5 directs recipients to treat as
//  opaque data.
//
//  https://www.rfc-editor.org/rfc/rfc9110.html#section-5.5
//
// Generated from: ../../components/web_package/rust/types.rs;l=64
struct CRUBIT_INTERNAL_RUST_TYPE(":: web_package_rust :: HeaderEntry") alignas(
    8) [[clang::trivial_abi]] HeaderEntry final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=63
  bool operator==(::web_package::rust::HeaderEntry const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=65
  rs_std::SliceRef<const ::std::uint8_t> name{};
  // Generated from: ../../components/web_package/rust/types.rs;l=66
  rs_std::SliceRef<const ::std::uint8_t> value{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

namespace web_package::rust {
static constexpr rs_std::StrRef INDEX_SECTION = rs_std::StrRef("index");
static constexpr ::std::uint64_t INITIAL_BUFFER_SIZE_FOR_RESPONSE = 4096;
static constexpr ::std::uint64_t INITIAL_BUNDLE_HEADER_BUFFER_SIZE = 24;
static constexpr ::std::uint64_t MAX_METADATA_SECTION_SIZE = UINT64_C(1048576);
}  // namespace web_package::rust

namespace web_package::rust {

// Generated from: ../../components/web_package/rust/types.rs;l=27
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: web_package_rust :: MagicAndVersionResult") alignas(8)
    [[clang::trivial_abi]] MagicAndVersionResult final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=26
  bool operator==(
      ::web_package::rust::MagicAndVersionResult const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=28
  ::std::uint64_t section_lengths_len{};
  // Generated from: ../../components/web_package/rust/types.rs;l=29
  ::std::uint64_t next_read_offset{};
  // Generated from: ../../components/web_package/rust/types.rs;l=30
  ::std::uint64_t next_read_length{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

namespace web_package::rust {
static constexpr rs_std::StrRef PRIMARY_SECTION = rs_std::StrRef("primary");
}

namespace web_package::rust {

// Generated from: ../../components/web_package/rust/types.rs;l=10
struct CRUBIT_INTERNAL_RUST_TYPE(":: web_package_rust :: ParseError") alignas(8)
    [[clang::trivial_abi]] ParseError final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=9
  bool operator==(::web_package::rust::ParseError const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=11
  bool is_version_error{};
  // Generated from: ../../components/web_package/rust/types.rs;l=12
  rs_std::StrRef message{};

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from: ../../components/web_package/rust/types.rs;l=51
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: web_package_rust :: ParsedIndexEntry") alignas(8) [[clang::trivial_abi]]
ParsedIndexEntry final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=50
  bool operator==(::web_package::rust::ParsedIndexEntry const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=52
  rs_std::StrRef url{};
  // Generated from: ../../components/web_package/rust/types.rs;l=53
  ::std::uint64_t offset{};
  // Generated from: ../../components/web_package/rust/types.rs;l=54
  ::std::uint64_t length{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

namespace web_package::rust {
static constexpr rs_std::StrRef RESPONSES_SECTION = rs_std::StrRef("responses");
}

namespace web_package::rust {

// Generated from: ../../components/web_package/rust/types.rs;l=35
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: web_package_rust :: SectionOffsetEntry") alignas(8)
    [[clang::trivial_abi]] SectionOffsetEntry final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=34
  bool operator==(::web_package::rust::SectionOffsetEntry const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=36
  ::rs::alloc::string::String name{};
  // Generated from: ../../components/web_package/rust/types.rs;l=37
  ::std::uint64_t offset{};
  // Generated from: ../../components/web_package/rust/types.rs;l=38
  ::std::uint64_t length{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

namespace web_package::rust {
static constexpr ::std::uintptr_t TRAILING_LENGTH_NUM_BYTES = 8;
}

namespace web_package::rust::http {

// Error generating bindings for constant `web_package_rust::http::DELIMITERS`
// defined at ../../components/web_package/rust/http.rs;l=28: const of type
// `&'static [u8]` cannot be generated as only scalars, string references, and
// simple aggregate types are supported.

static constexpr ::std::uint8_t HTAB = 9;
static constexpr ::std::uint8_t SP = 32;

//  Returns true if `b` is an HTTP delimiter per RFC 9110 Section 5.6.2:
//
//  https://www.rfc-editor.org/rfc/rfc9110.html#section-5.6.2
//
//  delimiters = DQUOTE and "(),/:;<=>?@[\\]{}"
//
// Generated from: ../../components/web_package/rust/http.rs;l=52
bool is_delimiter(::std::uint8_t b);

//  Checks whether a byte is a valid `field-vchar` per RFC 9110 Section 5.5:
//
//  https://www.rfc-editor.org/rfc/rfc9110.html#section-5.5
//
//  field-vchar    = VCHAR / obs-text
//  obs-text       = %x80-FF
//
// Generated from: ../../components/web_package/rust/http.rs;l=100
bool is_field_vchar(::std::uint8_t const& b);

//  Checks whether a byte is a valid HTTP token character (`tchar`) per RFC 9110
//  Section 5.6.2:
//
//  https://www.rfc-editor.org/rfc/rfc9110.html#section-5.6.2
//
//  token          = 1*tchar
//
//  tchar          = "!" / "#" / "$" / "%" / "&" / "'" / "*"
//                 / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
//                 / DIGIT / ALPHA
//                 ; any VCHAR, except delimiters
//
//  delimiters     = DQUOTE and "(),/:;<=>?@[\\]{}"
//
// Generated from: ../../components/web_package/rust/http.rs;l=69
bool is_token_char(::std::uint8_t b);

//  Validates that an HTTP field name conforms to RFC 9110 Section 5.1 and
//  RFC 9113 Section 8.2.1 rules.
//
//  https://www.rfc-editor.org/rfc/rfc9110.html#section-5.1
//  https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1
//
//  Per RFC 9110 Section 5.1
//  (https://www.rfc-editor.org/rfc/rfc9110.html#section-5.1): `field-name =
//  token`, where `token = 1*tchar`.
//
//  Per RFC 9113 Section 8.2.1
//  (https://www.rfc-editor.org/rfc/rfc9113.html#section-8.2.1): "An
//  implementation that validates fields according to the definitions in
//  Sections 5.1 and 5.5 of [HTTP] only needs an additional check that field
//  names do not include uppercase characters."
//
// Generated from: ../../components/web_package/rust/http.rs;l=90
bool is_valid_header_name(rs_std::SliceRef<const ::std::uint8_t> name);

// Generated from: ../../components/web_package/rust/http.rs;l=130
bool is_valid_header_value(rs_std::SliceRef<const ::std::uint8_t> val);

}  // namespace web_package::rust::http

namespace web_package::rust {

//  Parses the `section-lengths` payload and the `sections` array header,
//  validating sections and computing their offsets.
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#name-bundle-sections
//
//  CDDL structure:
//  ```text
//  section-lengths = [* (section-name: tstr, length: uint) ]
//  sections: [* any ]
//  ```
//
//  Validates:
//  1. Section lengths array has an even number of elements (`[name, length,
//     ...]`).
//  2. `sections` array count in CBOR matches exactly the number of sections
//     specified in `section-lengths`: "The sections array contains the
//     sections' content. The length of this array MUST be exactly half the
//     length of the section-lengths array, and parsers MUST NOT load any data
//     if that is not the case."
//  3. Section names are not duplicated.
//  4. Section offsets do not experience integer overflow.
//  5. The "responses" section is the last section in `section-lengths`: "The
//     'responses' section MUST appear after the other three sections defined
//     here, and parsers MUST NOT load any data if that is not the case."
//
// Generated from: ../../components/web_package/rust/parser.rs;l=326
rs_std::Result<::web_package::rust::BundleHeaderResult,
               ::web_package::rust::ParseError>
parse_bundle_header(rs_std::SliceRef<const ::std::uint8_t> data,
                    ::std::uint64_t section_lengths_len,
                    ::std::uint64_t current_offset);

//  Parses and validates the `critical` metadata section.
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#critical-section
//
//    critical = [*tstr]
//
//  "If the client has not implemented a section named by one of the items in
//  this list, the client MUST fail to parse the bundle as a whole."
//
// Generated from: ../../components/web_package/rust/parser.rs;l=425
rs_std::Result<bool, ::web_package::rust::ParseError> parse_critical_section(
    rs_std::SliceRef<const ::std::uint8_t> data);

//  Parses the `index` metadata section, returning entries with absolute
//  payload offsets into the responses section.
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#name-the-index-section
//
//  The index section has the following structure:
//    index = {* whatwg-url => [ location-in-responses ] }
//    location-in-responses = (offset: uint, length: uint)
//
// Generated from: ../../components/web_package/rust/parser.rs;l=390
rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
               ::web_package::rust::ParseError>
parse_index_section(rs_std::SliceRef<const ::std::uint8_t> data,
                    ::std::uint64_t responses_offset,
                    ::std::uint64_t responses_length);

//  Parses the initial header of the Web Bundle (top-level array header,
//  magic bytes, version bytes, and section-lengths byte string header).
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#name-top-level-structure
//
//  Top-level CDDL structure:
//  ```text
//  webbundle = [
//     magic: h'F0 9F 8C 90 F0 9F 93 A6',
//     version: bytes .size 4,
//     section-lengths: bytes .cbor section-lengths,
//     sections: [* any ],
//     length: bytes .size 8,  ; Big-endian number of bytes in the bundle.
//  ]
//  ```
//
//  Validates:
//  1. Array size byte is `0x85` (Array of 5 items; `0x86` is also tolerated
//     temporarily to surface a specific deprecation message for `b1` bundles).
//  2. Magic byte string matches `F0 9F 8C 90 F0 9F 93 A6` ("🌐📦").
//  3. Version byte string is `b2\\0\\0`.
//  4. Section-lengths byte string length is less than 8192 bytes.
//
// Generated from: ../../components/web_package/rust/parser.rs;l=164
rs_std::Result<::web_package::rust::MagicAndVersionResult,
               ::web_package::rust::ParseError>
parse_magic_and_version(rs_std::SliceRef<const ::std::uint8_t> data,
                        ::std::uint64_t current_offset);

//  Parses the `primary` metadata section, returning the primary URL string.
//
//  https://github.com/WICG/webpackage/blob/main/extensions/primary-section.md
//
//    primary = whatwg-url
//
// Generated from: ../../components/web_package/rust/parser.rs;l=442
rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>
parse_primary_section(
    rs_std::SliceRef<const ::std::uint8_t> data CRUBIT_LIFETIME_BOUND);

//  Parses a response from the responses section, checking buffer adequacy,
//  extracting and validating HTTP headers, and computing payload boundaries.
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#name-responses
//
//  CDDL structure:
//  ```text
//  responses = [*response]
//  response = [headers: bstr .cbor headers, payload: bstr]
//  headers = {* bstr => bstr}
//  ```
//
//  Validates:
//  1. Array size of response is exactly 2 (headers byte string, payload byte
//     string).
//  2. Header byte string length is less than 512KB (524,288 bytes): "The length
//     of the headers byte string in a response MUST be less than 524288
//     (512*1024) bytes, and recipients MUST fail to load a response with longer
//     headers"
//  3. Verifies if the provided buffer contains enough data for the headers and
//     the CBOR header of the payload. If insufficient, returns
//     `ResponseParseResult::needs_more`.
//  4. Headers map contains exactly one `:status` pseudo-header consisting of 3
//     ASCII digits: "Each response's headers MUST include a :status
//     pseudo-header with exactly 3 ASCII decimal digits and MUST NOT include
//     any other pseudo-headers."
//  5. Validates header field names and values (per RFC 9110, RFC 9112, and RFC
//     9113; see `http.rs`).
//  6. Non-empty payload requires a `content-type` header: "If a response's
//     payload is not empty, its headers MUST include a Content-Type header
//     (Section 8.3 of RFC 9110,
//     https://www.rfc-editor.org/rfc/rfc9110.html#section-8.3)."
//  7. Consumed header bytes + payload length equals `response_length`.
//
// Generated from: ../../components/web_package/rust/parser.rs;l=507
rs_std::Result<::web_package::rust::ResponseParseResult,
               ::web_package::rust::ParseError>
parse_response(rs_std::SliceRef<const ::std::uint8_t> data,
               ::std::uint64_t response_offset,
               ::std::uint64_t response_length);

//  Parses the 8-byte big-endian trailing length field at the end of a bundle
//  and returns the bundle's start offset within the file.
//
//  `data` must contain exactly 8 bytes corresponding to the trailing length.
//  Passing a slice of any length other than 8 will result in an error.
//
//  https://www.ietf.org/archive/id/draft-ietf-wpack-bundled-responses-01.html#name-trailing-length
//
//  "Recipients loading the bundle in a random-access context SHOULD start by
//  reading the last 8 bytes and seeking backwards by that many bytes to find
//  the start of the bundle, instead of assuming that the start of the file
//  is also the start of the bundle. This allows the bundle to be appended to
//  another format such as a generic self-extracting executable."
//
// Generated from: ../../components/web_package/rust/parser.rs;l=130
rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>
parse_trailing_length(rs_std::SliceRef<const ::std::uint8_t> data,
                      ::std::uint64_t file_length);

}  // namespace web_package::rust

template <>
struct rs_std::impl<::web_package::rust::BundleHeaderResult,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::BundleHeaderResult,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::BundleHeaderResult as core::fmt::Debug>::fmt` defined
  // at ../../components/web_package/rust/types.rs;l=42: Error formatting
  // function return type `core::result::Result<(), core::fmt::Error>`: Failed
  // to format type for the definition of `core::fmt::Error`: Zero-sized types
  // (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::HeaderEntry, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::HeaderEntry, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::HeaderEntry<'a> as core::fmt::Debug>::fmt` defined at
  // ../../components/web_package/rust/types.rs;l=63: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::MagicAndVersionResult,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::MagicAndVersionResult,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::MagicAndVersionResult as core::fmt::Debug>::fmt`
  // defined at ../../components/web_package/rust/types.rs;l=26: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::ParseError, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::ParseError, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::ParseError as core::fmt::Debug>::fmt` defined at
  // ../../components/web_package/rust/types.rs;l=9: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::ParsedIndexEntry,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::ParsedIndexEntry,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::ParsedIndexEntry<'a> as core::fmt::Debug>::fmt` defined
  // at ../../components/web_package/rust/types.rs;l=50: Error formatting
  // function return type `core::result::Result<(), core::fmt::Error>`: Failed
  // to format type for the definition of `core::fmt::Error`: Zero-sized types
  // (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::ResponseParseResult,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::ResponseParseResult,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::ResponseParseResult<'a> as core::fmt::Debug>::fmt`
  // defined at ../../components/web_package/rust/types.rs;l=70: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::rust::SectionOffsetEntry,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::rust::SectionOffsetEntry,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<web_package_rust::SectionOffsetEntry as core::fmt::Debug>::fmt` defined
  // at ../../components/web_package/rust/types.rs;l=34: Error formatting
  // function return type `core::result::Result<(), core::fmt::Error>`: Failed
  // to format type for the definition of `core::fmt::Error`: Zero-sized types
  // (ZSTs) are not supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020HeaderEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020HeaderEntry_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: web_package_rust :: HeaderEntry < 'static > >")
    rs_std::Vec<::web_package::rust::HeaderEntry>
    : public rs_std::VecBase<::web_package::rust::HeaderEntry> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::web_package::rust::HeaderEntry>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::web_package::rust::HeaderEntry>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::web_package::rust::HeaderEntry>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

namespace web_package::rust {

// Generated from: ../../components/web_package/rust/types.rs;l=71
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: web_package_rust :: ResponseParseResult") alignas(8)
    [[clang::trivial_abi]] ResponseParseResult final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=70
  bool operator==(::web_package::rust::ResponseParseResult const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=72
  bool needs_more_data{};
  // Generated from: ../../components/web_package/rust/types.rs;l=73
  ::std::uint64_t required_buffer_size{};
  // Generated from: ../../components/web_package/rust/types.rs;l=74
  ::std::int32_t response_code{};
  // Generated from: ../../components/web_package/rust/types.rs;l=75
  rs_std::Vec<::web_package::rust::HeaderEntry> headers{};
  // Generated from: ../../components/web_package/rust/types.rs;l=76
  ::std::uint64_t payload_offset{};
  // Generated from: ../../components/web_package/rust/types.rs;l=77
  ::std::uint64_t payload_length{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: web_package_rust :: ParsedIndexEntry < "
    "'static > >") rs_std::Vec<::web_package::rust::ParsedIndexEntry>
    : public rs_std::VecBase<::web_package::rust::ParsedIndexEntry> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::web_package::rust::ParsedIndexEntry>& operator=(
      const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::web_package::rust::ParsedIndexEntry>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::web_package::rust::ParsedIndexEntry>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SectionOffsetEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SectionOffsetEntry_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: web_package_rust :: SectionOffsetEntry >")
    rs_std::Vec<::web_package::rust::SectionOffsetEntry>
    : public rs_std::VecBase<::web_package::rust::SectionOffsetEntry> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::web_package::rust::SectionOffsetEntry>& operator=(
      const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::web_package::rust::SectionOffsetEntry>& operator=(
      Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::web_package::rust::SectionOffsetEntry>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

namespace web_package::rust {

// Generated from: ../../components/web_package/rust/types.rs;l=43
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: web_package_rust :: BundleHeaderResult") alignas(8)
    [[clang::trivial_abi]] BundleHeaderResult final {
 public:
  // Generated from: ../../components/web_package/rust/types.rs;l=42
  bool operator==(::web_package::rust::BundleHeaderResult const& other) const;

  // Generated from: ../../components/web_package/rust/types.rs;l=44
  rs_std::Vec<::web_package::rust::SectionOffsetEntry> metadata_sections{};
  // Generated from: ../../components/web_package/rust/types.rs;l=45
  ::std::uint64_t responses_offset{};
  // Generated from: ../../components/web_package/rust/types.rs;l=46
  ::std::uint64_t responses_length{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::rust

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < & 'static str , :: web_package_rust :: "
    "ParseError >")
    rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>,
          rs_std::StrRef, ::web_package::rust::ParseError> {
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
      rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>,
      rs_std::StrRef, ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::StrRef, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, rs_std::StrRef, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 2; }
  rs_std::StrRef* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::StrRef*>(__storage + 8);
  }
  rs_std::StrRef const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::StrRef const*>(__storage + 8);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(2); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < :: web_package_rust "
    ":: ParsedIndexEntry < 'static > > , :: web_package_rust :: ParseError >")
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                         ::web_package::rust::ParseError>,
          rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
          ::web_package::rust::ParseError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                 ::web_package::rust::ParseError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                     ::web_package::rust::ParseError>,
      rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
      ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<::web_package::rust::ParsedIndexEntry>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<::web_package::rust::ParsedIndexEntry>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  rs_std::Vec<::web_package::rust::ParsedIndexEntry>* ok_ptr() noexcept {
    return reinterpret_cast<
        rs_std::Vec<::web_package::rust::ParsedIndexEntry>*>(__storage + 8);
  }
  rs_std::Vec<::web_package::rust::ParsedIndexEntry> const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        rs_std::Vec<::web_package::rust::ParsedIndexEntry> const*>(__storage +
                                                                   8);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage + 8);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage +
                                                                    8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020bool_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020bool_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < bool , :: web_package_rust :: ParseError >")
    rs_std::Result<bool, ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<bool, ::web_package::rust::ParseError>, bool,
          ::web_package::rust::ParseError> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Result(const Result&) = default;
  Result& operator=(const Result&) = default;
  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<bool, ::web_package::rust::ParseError>,
                         bool, ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, bool, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, bool, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 2; }
  bool* ok_ptr() noexcept { return reinterpret_cast<bool*>(__storage + 1); }
  bool const* ok_const_ptr() const noexcept {
    return reinterpret_cast<bool const*>(__storage + 1);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(2); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < u64 , :: web_package_rust :: ParseError >")
    rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>,
          ::std::uint64_t, ::web_package::rust::ParseError> {
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
      rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>,
      ::std::uint64_t, ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint64_t, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint64_t, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 2; }
  ::std::uint64_t* ok_ptr() noexcept {
    return reinterpret_cast<::std::uint64_t*>(__storage + 8);
  }
  ::std::uint64_t const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::std::uint64_t const*>(__storage + 8);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage);
  }
  void set_ok_tag() noexcept { set_tag(2); }
  void set_err_tag() noexcept {}
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020BundleHeaderResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020BundleHeaderResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: web_package_rust :: BundleHeaderResult , :: "
    "web_package_rust :: ParseError >")
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<::web_package::rust::BundleHeaderResult,
                         ::web_package::rust::ParseError>,
          ::web_package::rust::BundleHeaderResult,
          ::web_package::rust::ParseError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::web_package::rust::BundleHeaderResult,
                 ::web_package::rust::ParseError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<::web_package::rust::BundleHeaderResult,
                                        ::web_package::rust::ParseError>,
                         ::web_package::rust::BundleHeaderResult,
                         ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::BundleHeaderResult, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::BundleHeaderResult, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
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
  ::web_package::rust::BundleHeaderResult* ok_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::BundleHeaderResult*>(
        __storage);
  }
  ::web_package::rust::BundleHeaderResult const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::BundleHeaderResult const*>(
        __storage);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage + 8);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage +
                                                                    8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MagicAndVersionResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MagicAndVersionResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: web_package_rust :: MagicAndVersionResult , "
    ":: web_package_rust :: ParseError >")
    rs_std::Result<::web_package::rust::MagicAndVersionResult,
                   ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<::web_package::rust::MagicAndVersionResult,
                         ::web_package::rust::ParseError>,
          ::web_package::rust::MagicAndVersionResult,
          ::web_package::rust::ParseError> {
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
      rs_std::Result<::web_package::rust::MagicAndVersionResult,
                     ::web_package::rust::ParseError>,
      ::web_package::rust::MagicAndVersionResult,
      ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::MagicAndVersionResult, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::MagicAndVersionResult, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  ::web_package::rust::MagicAndVersionResult* ok_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::MagicAndVersionResult*>(
        __storage + 8);
  }
  ::web_package::rust::MagicAndVersionResult const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<::web_package::rust::MagicAndVersionResult const*>(
        __storage + 8);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage + 8);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage +
                                                                    8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ResponseParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ResponseParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: web_package_rust :: ResponseParseResult < "
    "'static > , :: web_package_rust :: ParseError >")
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<::web_package::rust::ResponseParseResult,
                         ::web_package::rust::ParseError>,
          ::web_package::rust::ResponseParseResult,
          ::web_package::rust::ParseError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::web_package::rust::ResponseParseResult,
                 ::web_package::rust::ParseError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::web_package::rust::ResponseParseResult,
                     ::web_package::rust::ParseError>,
      ::web_package::rust::ResponseParseResult,
      ::web_package::rust::ParseError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::ResponseParseResult, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::web_package::rust::ResponseParseResult, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::rust::ParseError, F>)
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
  ::web_package::rust::ResponseParseResult* ok_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ResponseParseResult*>(
        __storage);
  }
  ::web_package::rust::ResponseParseResult const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<::web_package::rust::ResponseParseResult const*>(
        __storage);
  }
  ::web_package::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<::web_package::rust::ParseError*>(__storage + 0);
  }
  ::web_package::rust::ParseError const* err_const_ptr() const noexcept {
    return reinterpret_cast<::web_package::rust::ParseError const*>(__storage +
                                                                    0);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[64];
};
#endif

namespace web_package::rust {

static_assert(
    sizeof(::web_package::rust::BundleHeaderResult) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::BundleHeaderResult) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXsl_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18BundleHeaderResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::BundleHeaderResult const&,
    ::web_package::rust::BundleHeaderResult const&);
}
inline bool(BundleHeaderResult::operator==)(
    ::web_package::rust::BundleHeaderResult const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXsl_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18BundleHeaderResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::BundleHeaderResult::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::BundleHeaderResult;
  static_assert(0 == offsetof(__crubit_assert_type, metadata_sections));
  static_assert(24 == offsetof(__crubit_assert_type, responses_offset));
  static_assert(32 == offsetof(__crubit_assert_type, responses_length));
}
}  // namespace web_package::rust

namespace web_package::rust {

static_assert(
    sizeof(::web_package::rust::HeaderEntry) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::HeaderEntry) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    ::std::is_trivially_destructible_v<::web_package::rust::HeaderEntry>);
static_assert(
    ::std::is_trivially_move_constructible_v<::web_package::rust::HeaderEntry>);
static_assert(
    ::std::is_trivially_move_assignable_v<::web_package::rust::HeaderEntry>);
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXsv_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u11HeaderEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::HeaderEntry const&,
    ::web_package::rust::HeaderEntry const&);
}
inline bool(HeaderEntry::operator==)(
    ::web_package::rust::HeaderEntry const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXsv_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u11HeaderEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::HeaderEntry::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::HeaderEntry;
  static_assert(0 == offsetof(__crubit_assert_type, name));
  static_assert(16 == offsetof(__crubit_assert_type, value));
}
}  // namespace web_package::rust

namespace web_package::rust {

static_assert(
    sizeof(::web_package::rust::MagicAndVersionResult) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::MagicAndVersionResult) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<
              ::web_package::rust::MagicAndVersionResult>);
static_assert(::std::is_trivially_move_constructible_v<
              ::web_package::rust::MagicAndVersionResult>);
static_assert(::std::is_trivially_move_assignable_v<
              ::web_package::rust::MagicAndVersionResult>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::web_package::rust::MagicAndVersionResult>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::web_package::rust::MagicAndVersionResult>);
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXs9_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u21MagicAndVersionResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::MagicAndVersionResult const&,
    ::web_package::rust::MagicAndVersionResult const&);
}
inline bool(MagicAndVersionResult::operator==)(
    ::web_package::rust::MagicAndVersionResult const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXs9_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u21MagicAndVersionResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::MagicAndVersionResult::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::MagicAndVersionResult;
  static_assert(0 == offsetof(__crubit_assert_type, section_lengths_len));
  static_assert(8 == offsetof(__crubit_assert_type, next_read_offset));
  static_assert(16 == offsetof(__crubit_assert_type, next_read_length));
}
}  // namespace web_package::rust

namespace web_package::rust {

static_assert(
    sizeof(::web_package::rust::ParseError) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::ParseError) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    ::std::is_trivially_destructible_v<::web_package::rust::ParseError>);
static_assert(
    ::std::is_trivially_move_constructible_v<::web_package::rust::ParseError>);
static_assert(
    ::std::is_trivially_move_assignable_v<::web_package::rust::ParseError>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::web_package::rust::ParseError>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::web_package::rust::ParseError>);
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXs2_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::ParseError const&,
    ::web_package::rust::ParseError const&);
}
inline bool(ParseError::operator==)(
    ::web_package::rust::ParseError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXs2_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::ParseError::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::ParseError;
  static_assert(0 == offsetof(__crubit_assert_type, is_version_error));
  static_assert(8 == offsetof(__crubit_assert_type, message));
}
static_assert(
    sizeof(::web_package::rust::ParsedIndexEntry) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::ParsedIndexEntry) == 8,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    ::std::is_trivially_destructible_v<::web_package::rust::ParsedIndexEntry>);
static_assert(::std::is_trivially_move_constructible_v<
              ::web_package::rust::ParsedIndexEntry>);
static_assert(::std::is_trivially_move_assignable_v<
              ::web_package::rust::ParsedIndexEntry>);
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXsq_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u16ParsedIndexEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::ParsedIndexEntry const&,
    ::web_package::rust::ParsedIndexEntry const&);
}
inline bool(ParsedIndexEntry::operator==)(
    ::web_package::rust::ParsedIndexEntry const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXsq_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u16ParsedIndexEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::ParsedIndexEntry::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::ParsedIndexEntry;
  static_assert(0 == offsetof(__crubit_assert_type, url));
  static_assert(16 == offsetof(__crubit_assert_type, offset));
  static_assert(24 == offsetof(__crubit_assert_type, length));
}
}  // namespace web_package::rust

namespace web_package::rust {

static_assert(
    sizeof(::web_package::rust::ResponseParseResult) == 64,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::ResponseParseResult) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXsA_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u19ResponseParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::ResponseParseResult const&,
    ::web_package::rust::ResponseParseResult const&);
}
inline bool(ResponseParseResult::operator==)(
    ::web_package::rust::ResponseParseResult const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXsA_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u19ResponseParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::ResponseParseResult::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::ResponseParseResult;
  static_assert(0 == offsetof(__crubit_assert_type, needs_more_data));
  static_assert(8 == offsetof(__crubit_assert_type, required_buffer_size));
  static_assert(16 == offsetof(__crubit_assert_type, response_code));
  static_assert(24 == offsetof(__crubit_assert_type, headers));
  static_assert(48 == offsetof(__crubit_assert_type, payload_offset));
  static_assert(56 == offsetof(__crubit_assert_type, payload_length));
}
static_assert(
    sizeof(::web_package::rust::SectionOffsetEntry) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::rust::SectionOffsetEntry) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvXsg_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18SectionOffsetEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::rust::SectionOffsetEntry const&,
    ::web_package::rust::SectionOffsetEntry const&);
}
inline bool(SectionOffsetEntry::operator==)(
    ::web_package::rust::SectionOffsetEntry const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvXsg_uNtCsamDzngsToYq_u16web_upackage_urust5typesNtB5_u18SectionOffsetEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::rust::SectionOffsetEntry::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::web_package::rust::SectionOffsetEntry;
  static_assert(0 == offsetof(__crubit_assert_type, name));
  static_assert(24 == offsetof(__crubit_assert_type, offset));
  static_assert(32 == offsetof(__crubit_assert_type, length));
}
}  // namespace web_package::rust

namespace web_package::rust::http {

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http12is_udelimiter(
    ::std::uint8_t);
}
inline bool is_delimiter(::std::uint8_t b) {
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http12is_udelimiter(
          b);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http14is_ufield_uvcharCsh9G4tFjYpDL_u8rust_uout(
    ::std::uint8_t const&);
}
inline bool is_field_vchar(::std::uint8_t const& b) {
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http14is_ufield_uvcharCsh9G4tFjYpDL_u8rust_uout(
          b);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http13is_utoken_uchar(
    ::std::uint8_t);
}
inline bool is_token_char(::std::uint8_t b) {
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http13is_utoken_uchar(
          b);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http20is_uvalid_uheader_uname(
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool is_valid_header_name(rs_std::SliceRef<const ::std::uint8_t> name) {
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http20is_uvalid_uheader_uname(
          &name);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http21is_uvalid_uheader_uvalue(
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool is_valid_header_value(rs_std::SliceRef<const ::std::uint8_t> val) {
  return __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust4http21is_uvalid_uheader_uvalue(
          &val);
}

}  // namespace web_package::rust::http

namespace web_package::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_ubundle_uheader(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint64_t, ::std::uint64_t,
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<::web_package::rust::BundleHeaderResult,
                      ::web_package::rust::ParseError>
parse_bundle_header(rs_std::SliceRef<const ::std::uint8_t> data,
                    ::std::uint64_t section_lengths_len,
                    ::std::uint64_t current_offset) {
  crubit::Slot<rs_std::Result<::web_package::rust::BundleHeaderResult,
                              ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_ubundle_uheader(
          &data, section_lengths_len, current_offset, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser22parse_ucritical_usection(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<bool, ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<bool, ::web_package::rust::ParseError>
parse_critical_section(rs_std::SliceRef<const ::std::uint8_t> data) {
  crubit::Slot<rs_std::Result<bool, ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser22parse_ucritical_usection(
          &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_uindex_usection(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint64_t, ::std::uint64_t,
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                      ::web_package::rust::ParseError>
parse_index_section(rs_std::SliceRef<const ::std::uint8_t> data,
                    ::std::uint64_t responses_offset,
                    ::std::uint64_t responses_length) {
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                     ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser19parse_uindex_usection(
          &data, responses_offset, responses_length, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser23parse_umagic_uand_uversion(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint64_t,
    rs_std::Result<::web_package::rust::MagicAndVersionResult,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<::web_package::rust::MagicAndVersionResult,
                      ::web_package::rust::ParseError>
parse_magic_and_version(rs_std::SliceRef<const ::std::uint8_t> data,
                        ::std::uint64_t current_offset) {
  crubit::Slot<rs_std::Result<::web_package::rust::MagicAndVersionResult,
                              ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser23parse_umagic_uand_uversion(
          &data, current_offset, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_uprimary_usection(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>
parse_primary_section(
    rs_std::SliceRef<const ::std::uint8_t> data CRUBIT_LIFETIME_BOUND) {
  crubit::Slot<rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_uprimary_usection(
          &data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser14parse_uresponse(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint64_t, ::std::uint64_t,
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
inline rs_std::Result<::web_package::rust::ResponseParseResult,
                      ::web_package::rust::ParseError>
parse_response(rs_std::SliceRef<const ::std::uint8_t> data,
               ::std::uint64_t response_offset,
               ::std::uint64_t response_length) {
  crubit::Slot<rs_std::Result<::web_package::rust::ResponseParseResult,
                              ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser14parse_uresponse(
          &data, response_offset, response_length, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_utrailing_ulengthCsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint64_t,
    rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>*
        __ret_ptr);
}
inline rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>
parse_trailing_length(rs_std::SliceRef<const ::std::uint8_t> data,
                      ::std::uint64_t file_length) {
  crubit::Slot<rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvNtCsamDzngsToYq_u16web_upackage_urust6parser21parse_utrailing_ulengthCsh9G4tFjYpDL_u8rust_uout(
          &data, file_length, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace web_package::rust

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020HeaderEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020HeaderEntry_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::HeaderEntry> const&,
    rs_std::Vec<::web_package::rust::HeaderEntry>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::HeaderEntry>&,
    rs_std::Vec<::web_package::rust::HeaderEntry> const&);
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>& rs_std::Vec<
    ::web_package::rust::HeaderEntry>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types11HeaderEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>&
rs_std::Vec<::web_package::rust::HeaderEntry>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::web_package::rust::HeaderEntry>::Vec() noexcept
    : storage_{} {
  init_empty();
}
inline rs_std::Vec<::web_package::rust::HeaderEntry>::~Vec() noexcept {
  destroy();
}
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::ParsedIndexEntry> const&,
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>&,
    rs_std::Vec<::web_package::rust::ParsedIndexEntry> const&);
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>&
rs_std::Vec<::web_package::rust::ParsedIndexEntry>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>::Vec(
    Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>& rs_std::Vec<
    ::web_package::rust::ParsedIndexEntry>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>::Vec() noexcept
    : storage_{} {
  init_empty();
}
inline rs_std::Vec<::web_package::rust::ParsedIndexEntry>::~Vec() noexcept {
  destroy();
}
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SectionOffsetEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SectionOffsetEntry_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::SectionOffsetEntry> const&,
    rs_std::Vec<::web_package::rust::SectionOffsetEntry>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::rust::SectionOffsetEntry>&,
    rs_std::Vec<::web_package::rust::SectionOffsetEntry> const&);
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>&
rs_std::Vec<::web_package::rust::SectionOffsetEntry>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types18SectionOffsetEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>::Vec(
    Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>& rs_std::Vec<
    ::web_package::rust::SectionOffsetEntry>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>::Vec() noexcept
    : storage_{} {
  init_empty();
}
inline rs_std::Vec<::web_package::rust::SectionOffsetEntry>::~Vec() noexcept {
  destroy();
}
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>);
inline rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>>);
inline constexpr ::std::uint8_t rs_std::Result<
    rs_std::StrRef, ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>,
           rs_std::StrRef, U>)
inline constexpr rs_std::Result<
    rs_std::StrRef, ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>,
           rs_std::StrRef, U>)
inline constexpr rs_std::Result<rs_std::StrRef,
                                ::web_package::rust::ParseError>&
rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::
    Result<rs_std::StrRef, ::web_package::rust::ParseError>::Result(
        rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<rs_std::StrRef,
                                ::web_package::rust::ParseError>&
rs_std::Result<rs_std::StrRef, ::web_package::rust::ParseError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::StrRef, ::web_package::rust::ParseError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::StrRef, ::web_package::rust::ParseError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParsedIndexEntry_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError> const&,
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError>&,
    rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                   ::web_package::rust::ParseError> const&);
}
inline rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                      ::web_package::rust::ParseError>&
rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
               ::web_package::rust::ParseError>::operator=(const Result&
                                                               other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsamDzngsToYq_u16web_upackage_urust5types16ParsedIndexEntryENtB1c_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(::crubit::UnsafeRelocateTag,
                                             Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                      ::web_package::rust::ParseError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
               ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                          ::web_package::rust::ParseError>,
           rs_std::Vec<::web_package::rust::ParsedIndexEntry>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
                          ::web_package::rust::ParseError>,
           rs_std::Vec<::web_package::rust::ParsedIndexEntry>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>&
rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
               ::web_package::rust::ParseError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(rs_std::unexpected<F>&&
                                                 err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>&
rs_std::Result<rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
               ::web_package::rust::ParseError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(::std::in_place_t ip,
                                             Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<::web_package::rust::ParsedIndexEntry>,
    ::web_package::rust::ParseError>::Result(rs_std::unexpect_t u,
                                             Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020bool_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020bool_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<bool, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<bool, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<bool, ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<bool, ::web_package::rust::ParseError>>);
inline rs_std::Result<bool, ::web_package::rust::ParseError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<bool, ::web_package::rust::ParseError>>);
inline constexpr ::std::uint8_t
rs_std::Result<bool, ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<bool, ::web_package::rust::ParseError>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<bool, ::web_package::rust::ParseError>, bool, U>)
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>::Result(
    U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<bool, ::web_package::rust::ParseError>, bool, U>)
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>&
rs_std::Result<bool, ::web_package::rust::ParseError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>::Result(
    rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>&
rs_std::Result<bool, ::web_package::rust::ParseError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>::Result(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<bool, ::web_package::rust::ParseError>::Result(
    rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint64_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<
        rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<
        rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>);
static_assert(
    ::std::is_trivially_move_constructible_v<
        rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>);
static_assert(
    ::std::is_trivially_move_assignable_v<
        rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>);
inline rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<
        rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>>);
inline constexpr ::std::uint8_t rs_std::Result<
    ::std::uint64_t, ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>,
           ::std::uint64_t, U>)
inline constexpr rs_std::Result<
    ::std::uint64_t, ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>,
           ::std::uint64_t, U>)
inline constexpr rs_std::Result<::std::uint64_t,
                                ::web_package::rust::ParseError>&
rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::
    Result<::std::uint64_t, ::web_package::rust::ParseError>::Result(
        rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::std::uint64_t,
                                ::web_package::rust::ParseError>&
rs_std::Result<::std::uint64_t, ::web_package::rust::ParseError>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<::std::uint64_t, ::web_package::rust::ParseError>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<::std::uint64_t, ::web_package::rust::ParseError>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020BundleHeaderResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020BundleHeaderResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError> const&,
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError>&,
    rs_std::Result<::web_package::rust::BundleHeaderResult,
                   ::web_package::rust::ParseError> const&);
}
inline rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::web_package::rust::BundleHeaderResult,
                      ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::BundleHeaderResult,
               ::web_package::rust::ParseError>::operator=(const Result&
                                                               other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types18BundleHeaderResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::Result(::crubit::UnsafeRelocateTag,
                                             Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::web_package::rust::BundleHeaderResult,
                      ::web_package::rust::ParseError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::web_package::rust::BundleHeaderResult,
               ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::BundleHeaderResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::BundleHeaderResult, U>)
inline constexpr rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::BundleHeaderResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::BundleHeaderResult, U>)
inline constexpr rs_std::Result<::web_package::rust::BundleHeaderResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::BundleHeaderResult,
               ::web_package::rust::ParseError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::BundleHeaderResult,
                                ::web_package::rust::ParseError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::BundleHeaderResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::BundleHeaderResult,
               ::web_package::rust::ParseError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::Result(::std::in_place_t ip,
                                             Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::BundleHeaderResult,
    ::web_package::rust::ParseError>::Result(rs_std::unexpect_t u,
                                             Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MagicAndVersionResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MagicAndVersionResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Result<::web_package::rust::MagicAndVersionResult,
                             ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Result<::web_package::rust::MagicAndVersionResult,
                             ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<::web_package::rust::MagicAndVersionResult,
                             ::web_package::rust::ParseError>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<::web_package::rust::MagicAndVersionResult,
                             ::web_package::rust::ParseError>>);
inline rs_std::Result<
    ::web_package::rust::MagicAndVersionResult,
    ::web_package::rust::ParseError>::Result(::crubit::UnsafeRelocateTag,
                                             Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<::web_package::rust::MagicAndVersionResult,
                             ::web_package::rust::ParseError>>);
inline constexpr ::std::uint64_t
rs_std::Result<::web_package::rust::MagicAndVersionResult,
               ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::web_package::rust::MagicAndVersionResult,
    ::web_package::rust::ParseError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::MagicAndVersionResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::MagicAndVersionResult, U>)
inline constexpr rs_std::Result<
    ::web_package::rust::MagicAndVersionResult,
    ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::MagicAndVersionResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::MagicAndVersionResult, U>)
inline constexpr rs_std::Result<::web_package::rust::MagicAndVersionResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::MagicAndVersionResult,
               ::web_package::rust::ParseError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::MagicAndVersionResult,
                                ::web_package::rust::ParseError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::MagicAndVersionResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::MagicAndVersionResult,
               ::web_package::rust::ParseError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::MagicAndVersionResult,
    ::web_package::rust::ParseError>::Result(::std::in_place_t ip,
                                             Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::MagicAndVersionResult,
    ::web_package::rust::ParseError>::Result(rs_std::unexpect_t u,
                                             Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ResponseParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ResponseParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError> const&,
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError>&,
    rs_std::Result<::web_package::rust::ResponseParseResult,
                   ::web_package::rust::ParseError> const&);
}
inline rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::web_package::rust::ResponseParseResult,
                      ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::ResponseParseResult,
               ::web_package::rust::ParseError>::operator=(const Result&
                                                               other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_78baa7245bd2714c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsamDzngsToYq_u16web_upackage_urust5types19ResponseParseResultNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::Result(::crubit::UnsafeRelocateTag,
                                             Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::web_package::rust::ResponseParseResult,
                      ::web_package::rust::ParseError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::web_package::rust::ResponseParseResult,
               ::web_package::rust::ParseError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[24 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[24 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::ResponseParseResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::ResponseParseResult, U>)
inline constexpr rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::web_package::rust::ResponseParseResult,
                          ::web_package::rust::ParseError>,
           ::web_package::rust::ResponseParseResult, U>)
inline constexpr rs_std::Result<::web_package::rust::ResponseParseResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::ResponseParseResult,
               ::web_package::rust::ParseError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::ResponseParseResult,
                                ::web_package::rust::ParseError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::web_package::rust::ParseError, F>)
inline constexpr rs_std::Result<::web_package::rust::ResponseParseResult,
                                ::web_package::rust::ParseError>&
rs_std::Result<::web_package::rust::ResponseParseResult,
               ::web_package::rust::ParseError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::Result(::std::in_place_t ip,
                                             Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::rust::ResponseParseResult,
    ::web_package::rust::ParseError>::Result(rs_std::unexpect_t u,
                                             Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#pragma clang diagnostic pop
