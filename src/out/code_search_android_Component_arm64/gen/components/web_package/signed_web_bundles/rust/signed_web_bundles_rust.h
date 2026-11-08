// Automatically @generated C++ bindings for the following Rust crate:
// signed_web_bundles_rust
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
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <memory>
#include <new>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/check_no_mutable_aliasing.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/str_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace web_package::signed_web_bundles::rust {
struct IntegrityBlock;
struct SignatureStackEntry;
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {
static constexpr rs_std::StrRef ECDSA_P256_PUBLIC_KEY_ATTRIBUTE_NAME =
    rs_std::StrRef("ecdsaP256SHA256PublicKey");
static constexpr ::std::uintptr_t ECDSA_P256_PUBLIC_KEY_LEN = 33;
static constexpr ::std::uintptr_t ECDSA_P256_SIGNATURE_MAX_LEN = 72;
static constexpr ::std::uintptr_t ECDSA_P256_SIGNATURE_MIN_LEN = 64;
static constexpr rs_std::StrRef ED25519_PUBLIC_KEY_ATTRIBUTE_NAME =
    rs_std::StrRef("ed25519PublicKey");

// Error generating bindings for constant `signed_web_bundles_rust::MAGIC_BYTES`
// defined at
// ../../components/web_package/signed_web_bundles/rust/constants.rs;l=5: const
// of type `&'static [u8]` cannot be generated as only scalars, string
// references, and simple aggregate types are supported.

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

// Generated from:
// ../../components/web_package/signed_web_bundles/rust/types.rs;l=36
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: signed_web_bundles_rust :: ParseError") alignas(8)
    [[clang::trivial_abi]] ParseError final {
 public:
  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=35
  bool operator==(
      ::web_package::signed_web_bundles::rust::ParseError const& other) const;

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=37
  bool is_version_error{};
  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=38
  ::rs::alloc::string::String message{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

//  Streaming SHA-512 hasher using BoringSSL.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=98
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: signed_web_bundles_rust :: Sha512Hasher") alignas(8)
    [[clang::trivial_abi]] Sha512Hasher final {
 public:
  // Default::default
  Sha512Hasher();

  // No custom `Drop` impl and no custom "drop glue" required
  ~Sha512Hasher() = default;
  Sha512Hasher(Sha512Hasher&&) = default;
  Sha512Hasher& operator=(Sha512Hasher&&) = default;

  // `signed_web_bundles_rust::Sha512Hasher` doesn't implement the `Clone` trait
  Sha512Hasher(const Sha512Hasher&) = delete;
  Sha512Hasher& operator=(const Sha512Hasher&) = delete;
  Sha512Hasher(::crubit::UnsafeRelocateTag, Sha512Hasher&& value);

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=109
  static ::web_package::signed_web_bundles::rust::Sha512Hasher new_();

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=113
  void update(rs_std::SliceRef<const ::std::uint8_t> chunk);

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=117
  ::std::array<::std::uint8_t, 64> finish() &&;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 208> inner;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

// Generated from:
// ../../components/web_package/signed_web_bundles/rust/types.rs;l=10
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: signed_web_bundles_rust :: SignatureType") alignas(4)
    [[clang::trivial_abi]] SignatureType final {
 public:
  // `signed_web_bundles_rust::SignatureType` doesn't implement the `Default`
  // trait
  SignatureType() = delete;

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=11
  static constexpr SignatureType MakeEd25519();

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=12
  static constexpr SignatureType MakeEcdsaP256SHA256();

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=13
  static constexpr SignatureType MakeUnknown();

  // No custom `Drop` impl and no custom "drop glue" required
  ~SignatureType() = default;
  SignatureType(SignatureType&&) = default;
  SignatureType& operator=(SignatureType&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  SignatureType(const SignatureType&) = default;
  SignatureType& operator=(const SignatureType&) = default;
  SignatureType(::crubit::UnsafeRelocateTag, SignatureType&& value);

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=9
  bool operator==(::web_package::signed_web_bundles::rust::SignatureType const&
                      other) const;

  // Variant Ed25519 has no size, so no struct is generated.

  // Variant EcdsaP256SHA256 has no size, so no struct is generated.

  // Variant Unknown has no size, so no struct is generated.

  enum class Tag : ::std::uint32_t {
    Ed25519 = 0,
    EcdsaP256SHA256 = 1,
    Unknown = 2,
  };

 public:
  Tag tag;

 private:
  struct PrivateTagCtorTag {};
  constexpr SignatureType(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {
static constexpr ::std::uintptr_t TOP_LEVEL_ARRAY_LENGTH = 4;

// Error generating bindings for constant
// `signed_web_bundles_rust::V2_VERSION_BYTES` defined at
// ../../components/web_package/signed_web_bundles/rust/constants.rs;l=6: const
// of type `&'static [u8]` cannot be generated as only scalars, string
// references, and simple aggregate types are supported.

static constexpr rs_std::StrRef WEB_BUNDLE_ID_ATTRIBUTE_NAME =
    rs_std::StrRef("webBundleId");
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

//  Constructs the CBOR representation of an integrity block with an empty
//  signature array by parsing the pre-encoded attributes and serializing
//  the top-level CBOR structure using the memory-safe CBOR writer.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=13
rs_std::Vec<::std::uint8_t> create_empty_integrity_block_cbor(
    rs_std::SliceRef<const ::std::uint8_t> attributes_cbor);

//  Constructs the signature payload by concatenating 8-byte big-endian
//  length-prefixed chunks: unsigned_web_bundle_hash, integrity_block_cbor, and
//  attributes_cbor.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=37
rs_std::Vec<::std::uint8_t> create_signature_payload(
    rs_std::SliceRef<const ::std::uint8_t> unsigned_web_bundle_hash,
    rs_std::SliceRef<const ::std::uint8_t> integrity_block_cbor,
    rs_std::SliceRef<const ::std::uint8_t> attributes_cbor);

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

// Generated from:
// ../../components/web_package/signed_web_bundles/rust/integrity_block.rs;l=114
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>
parse_integrity_block(rs_std::SliceRef<const ::std::uint8_t> input);

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

//  Verifies an ECDSA P-256 signature (ASN.1 DER format) over `message` using
//  BoringSSL.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=71
[[nodiscard]] bool verify_ecdsa_p256_signature(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message);

//  Verifies an Ed25519 signature over `message` using BoringSSL.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=57
[[nodiscard]] bool verify_ed25519_signature(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message);

//  Dispatches signature verification based on `signature_type`.
//
// Generated from:
// ../../components/web_package/signed_web_bundles/rust/signature_verifier.rs;l=82
[[nodiscard]] bool verify_signature(
    ::web_package::signed_web_bundles::rust::SignatureType signature_type,
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message);

}  // namespace web_package::signed_web_bundles::rust

template <>
struct rs_std::impl<::web_package::signed_web_bundles::rust::IntegrityBlock,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<signed_web_bundles_rust::IntegrityBlock<'a> as core::fmt::Debug>::fmt`
  // defined at
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=26: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::signed_web_bundles::rust::ParseError,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::signed_web_bundles::rust::ParseError,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<signed_web_bundles_rust::ParseError as core::fmt::Debug>::fmt` defined at
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=35: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<
    ::web_package::signed_web_bundles::rust::SignatureStackEntry,
    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<signed_web_bundles_rust::SignatureStackEntry<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=17: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::web_package::signed_web_bundles::rust::SignatureType,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::web_package::signed_web_bundles::rust::SignatureType,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<signed_web_bundles_rust::SignatureType as core::fmt::Debug>::fmt` defined
  // at ../../components/web_package/signed_web_bundles/rust/types.rs;l=9: Error
  // formatting function return type `core::result::Result<(),
  // core::fmt::Error>`: Failed to format type for the definition of
  // `core::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SignatureStackEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SignatureStackEntry_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: signed_web_bundles_rust :: "
    "SignatureStackEntry < 'static > >")
    rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>
    : public rs_std::VecBase<
          ::web_package::signed_web_bundles::rust::SignatureStackEntry> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>&
  operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>&
  operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<
      ::web_package::signed_web_bundles::rust::SignatureStackEntry>;
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

namespace web_package::signed_web_bundles::rust {

// Generated from:
// ../../components/web_package/signed_web_bundles/rust/types.rs;l=27
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: signed_web_bundles_rust :: IntegrityBlock") alignas(8)
    [[clang::trivial_abi]] IntegrityBlock final {
 public:
  // Type is not a C++ aggregate: Multiple fields require drop glue (annotate
  // with `#[crubit_annotate::field_drop_order_does_not_matter]` if field drop
  // order does not matter)

  // `signed_web_bundles_rust::IntegrityBlock` doesn't implement the `Default`
  // trait
  IntegrityBlock() = delete;

  // Drop::drop
  ~IntegrityBlock();

  // Clone::clone
  IntegrityBlock(const IntegrityBlock&) noexcept;

  // Clone::clone_from
  ::web_package::signed_web_bundles::rust::IntegrityBlock& operator=(
      const IntegrityBlock&) noexcept;

  IntegrityBlock(::crubit::UnsafeRelocateTag, IntegrityBlock&& value);

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=26
  bool operator==(::web_package::signed_web_bundles::rust::IntegrityBlock const&
                      other) const;

  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=28
    ::std::uintptr_t size;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=29
    rs_std::StrRef web_bundle_id;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=30
    rs_std::Vec<::std::uint8_t> attributes_cbor;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=31
    rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>
        signature_stack;
  };

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../components/web_package/signed_web_bundles/rust/types.rs;l=18
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: signed_web_bundles_rust :: SignatureStackEntry") alignas(8)
    [[clang::trivial_abi]] SignatureStackEntry final {
 public:
  // Type is not a C++ aggregate: Field `signature_type` is not
  // default-constructible in C++

  // `signed_web_bundles_rust::SignatureStackEntry` doesn't implement the
  // `Default` trait
  SignatureStackEntry() = delete;

  // Drop::drop
  ~SignatureStackEntry();

  // Clone::clone
  SignatureStackEntry(const SignatureStackEntry&) noexcept;

  // Clone::clone_from
  ::web_package::signed_web_bundles::rust::SignatureStackEntry& operator=(
      const SignatureStackEntry&) noexcept;

  SignatureStackEntry(::crubit::UnsafeRelocateTag, SignatureStackEntry&& value);

  // Generated from:
  // ../../components/web_package/signed_web_bundles/rust/types.rs;l=17
  bool operator==(
      ::web_package::signed_web_bundles::rust::SignatureStackEntry const& other)
      const;

  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=19
    rs_std::Vec<::std::uint8_t> attributes_cbor;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=20
    ::web_package::signed_web_bundles::rust::SignatureType signature_type;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=21
    rs_std::SliceRef<const ::std::uint8_t> public_key;
  };
  union {
    // Generated from:
    // ../../components/web_package/signed_web_bundles/rust/types.rs;l=22
    rs_std::SliceRef<const ::std::uint8_t> signature;
  };

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace web_package::signed_web_bundles::rust

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020IntegrityBlock_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020IntegrityBlock_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: signed_web_bundles_rust :: IntegrityBlock < "
    "'static > , :: signed_web_bundles_rust :: ParseError >")
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError>
    : public rs_std::ResultBase<
          rs_std::Result<
              ::web_package::signed_web_bundles::rust::IntegrityBlock,
              ::web_package::signed_web_bundles::rust::ParseError>,
          ::web_package::signed_web_bundles::rust::IntegrityBlock,
          ::web_package::signed_web_bundles::rust::ParseError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                 ::web_package::signed_web_bundles::rust::ParseError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                     ::web_package::signed_web_bundles::rust::ParseError>,
      ::web_package::signed_web_bundles::rust::IntegrityBlock,
      ::web_package::signed_web_bundles::rust::ParseError>;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<
            Result, ::web_package::signed_web_bundles::rust::IntegrityBlock, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<
            Result, ::web_package::signed_web_bundles::rust::IntegrityBlock, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::signed_web_bundles::rust::ParseError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::web_package::signed_web_bundles::rust::ParseError, F>)
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
  ::web_package::signed_web_bundles::rust::IntegrityBlock* ok_ptr() noexcept {
    return reinterpret_cast<
        ::web_package::signed_web_bundles::rust::IntegrityBlock*>(__storage);
  }
  ::web_package::signed_web_bundles::rust::IntegrityBlock const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::web_package::signed_web_bundles::rust::IntegrityBlock const*>(
        __storage);
  }
  ::web_package::signed_web_bundles::rust::ParseError* err_ptr() noexcept {
    return reinterpret_cast<
        ::web_package::signed_web_bundles::rust::ParseError*>(__storage + 0);
  }
  ::web_package::signed_web_bundles::rust::ParseError const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::web_package::signed_web_bundles::rust::ParseError const*>(__storage +
                                                                    0);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[72];
};
#endif

namespace web_package::signed_web_bundles::rust {

static_assert(
    sizeof(::web_package::signed_web_bundles::rust::IntegrityBlock) == 72,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::signed_web_bundles::rust::IntegrityBlock) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::IntegrityBlock&);
}
inline ::web_package::signed_web_bundles::rust::IntegrityBlock::
    ~IntegrityBlock() {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::IntegrityBlock const&,
    ::web_package::signed_web_bundles::rust::IntegrityBlock* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::IntegrityBlock&,
    ::web_package::signed_web_bundles::rust::IntegrityBlock const&);
}
inline ::web_package::signed_web_bundles::rust::IntegrityBlock::IntegrityBlock(
    const IntegrityBlock& other) noexcept {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::web_package::signed_web_bundles::rust::IntegrityBlock& ::web_package::
    signed_web_bundles::rust::IntegrityBlock::operator=(
        const IntegrityBlock& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::web_package::signed_web_bundles::rust::IntegrityBlock::IntegrityBlock(
    ::crubit::UnsafeRelocateTag, IntegrityBlock&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvXsc_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u14IntegrityBlockNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::IntegrityBlock const&,
    ::web_package::signed_web_bundles::rust::IntegrityBlock const&);
}
inline bool(IntegrityBlock::operator==)(
    ::web_package::signed_web_bundles::rust::IntegrityBlock const& other)
    const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvXsc_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u14IntegrityBlockNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::signed_web_bundles::rust::IntegrityBlock::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::web_package::signed_web_bundles::rust::IntegrityBlock;
  static_assert(0 == offsetof(__crubit_assert_type, size));
  static_assert(8 == offsetof(__crubit_assert_type, web_bundle_id));
  static_assert(24 == offsetof(__crubit_assert_type, attributes_cbor));
  static_assert(48 == offsetof(__crubit_assert_type, signature_stack));
}
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

static_assert(
    sizeof(::web_package::signed_web_bundles::rust::ParseError) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::signed_web_bundles::rust::ParseError) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvXsg_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::ParseError const&,
    ::web_package::signed_web_bundles::rust::ParseError const&);
}
inline bool(ParseError::operator==)(
    ::web_package::signed_web_bundles::rust::ParseError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvXsg_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u10ParseErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::signed_web_bundles::rust::ParseError::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::web_package::signed_web_bundles::rust::ParseError;
  static_assert(0 == offsetof(__crubit_assert_type, is_version_error));
  static_assert(8 == offsetof(__crubit_assert_type, message));
}
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

static_assert(
    sizeof(::web_package::signed_web_bundles::rust::Sha512Hasher) == 208,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::signed_web_bundles::rust::Sha512Hasher) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier12Sha512HasherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::Sha512Hasher* __ret_ptr);
}
inline ::web_package::signed_web_bundles::rust::Sha512Hasher::Sha512Hasher() {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier12Sha512HasherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
static_assert(::std::is_trivially_destructible_v<
              ::web_package::signed_web_bundles::rust::Sha512Hasher>);
static_assert(::std::is_trivially_move_constructible_v<
              ::web_package::signed_web_bundles::rust::Sha512Hasher>);
static_assert(::std::is_trivially_move_assignable_v<
              ::web_package::signed_web_bundles::rust::Sha512Hasher>);
inline ::web_package::signed_web_bundles::rust::Sha512Hasher::Sha512Hasher(
    ::crubit::UnsafeRelocateTag, Sha512Hasher&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher3new(
    ::web_package::signed_web_bundles::rust::Sha512Hasher* __ret_ptr);
}
inline ::web_package::signed_web_bundles::rust::Sha512Hasher(
    Sha512Hasher::new_)() {
  crubit::Slot<::web_package::signed_web_bundles::rust::Sha512Hasher>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher3new(
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6update(
    ::web_package::signed_web_bundles::rust::Sha512Hasher&,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline void(Sha512Hasher::update)(
    rs_std::SliceRef<const ::std::uint8_t> chunk) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<
          ::web_package::signed_web_bundles::rust::Sha512Hasher&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          chunk));
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6update(
          self, &chunk);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6finish(
    ::web_package::signed_web_bundles::rust::Sha512Hasher*, void* __ret_ptr);
}
inline ::std::array<::std::uint8_t, 64>(Sha512Hasher::finish)() && {
  auto&& self = *this;
  crubit::Slot<::std::array<::std::uint8_t, 64>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvMs_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifierNtB4_u12Sha512Hasher6finish(
          &self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::web_package::signed_web_bundles::rust::Sha512Hasher::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::web_package::signed_web_bundles::rust::Sha512Hasher;
  static_assert(0 == offsetof(__crubit_assert_type, inner));
}
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

static_assert(
    sizeof(::web_package::signed_web_bundles::rust::SignatureStackEntry) == 64,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::signed_web_bundles::rust::SignatureStackEntry) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::SignatureStackEntry&);
}
inline ::web_package::signed_web_bundles::rust::SignatureStackEntry::
    ~SignatureStackEntry() {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::SignatureStackEntry const&,
    ::web_package::signed_web_bundles::rust::SignatureStackEntry* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::SignatureStackEntry&,
    ::web_package::signed_web_bundles::rust::SignatureStackEntry const&);
}
inline ::web_package::signed_web_bundles::rust::SignatureStackEntry::
    SignatureStackEntry(const SignatureStackEntry& other) noexcept {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::web_package::signed_web_bundles::rust::SignatureStackEntry& ::
web_package::signed_web_bundles::rust::SignatureStackEntry::operator=(
    const SignatureStackEntry& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_8aa5e0994030d24a__uRNvYNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::web_package::signed_web_bundles::rust::SignatureStackEntry::
    SignatureStackEntry(::crubit::UnsafeRelocateTag,
                        SignatureStackEntry&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvXs8_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u19SignatureStackEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::SignatureStackEntry const&,
    ::web_package::signed_web_bundles::rust::SignatureStackEntry const&);
}
inline bool(SignatureStackEntry::operator==)(
    ::web_package::signed_web_bundles::rust::SignatureStackEntry const& other)
    const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvXs8_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u19SignatureStackEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::signed_web_bundles::rust::SignatureStackEntry::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::web_package::signed_web_bundles::rust::SignatureStackEntry;
  static_assert(0 == offsetof(__crubit_assert_type, attributes_cbor));
  static_assert(24 == offsetof(__crubit_assert_type, signature_type));
  static_assert(32 == offsetof(__crubit_assert_type, public_key));
  static_assert(48 == offsetof(__crubit_assert_type, signature));
}
static_assert(
    sizeof(::web_package::signed_web_bundles::rust::SignatureType) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::web_package::signed_web_bundles::rust::SignatureType) == 4,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::web_package::signed_web_bundles::rust::SignatureType(
    ::web_package::signed_web_bundles::rust::SignatureType::MakeEd25519)() {
  return SignatureType(PrivateTagCtorTag{}, Tag{INT64_C(0)});
}

// `static` constructor
inline constexpr ::web_package::signed_web_bundles::rust::SignatureType(
    ::web_package::signed_web_bundles::rust::SignatureType::
        MakeEcdsaP256SHA256)() {
  return SignatureType(PrivateTagCtorTag{}, Tag{INT64_C(1)});
}

// `static` constructor
inline constexpr ::web_package::signed_web_bundles::rust::SignatureType(
    ::web_package::signed_web_bundles::rust::SignatureType::MakeUnknown)() {
  return SignatureType(PrivateTagCtorTag{}, Tag{INT64_C(2)});
}
static_assert(::std::is_trivially_destructible_v<
              ::web_package::signed_web_bundles::rust::SignatureType>);
static_assert(::std::is_trivially_move_constructible_v<
              ::web_package::signed_web_bundles::rust::SignatureType>);
static_assert(::std::is_trivially_move_assignable_v<
              ::web_package::signed_web_bundles::rust::SignatureType>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::web_package::signed_web_bundles::rust::SignatureType>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::web_package::signed_web_bundles::rust::SignatureType>);
inline ::web_package::signed_web_bundles::rust::SignatureType::SignatureType(
    ::crubit::UnsafeRelocateTag, SignatureType&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvXs4_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u13SignatureTypeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::web_package::signed_web_bundles::rust::SignatureType const&,
    ::web_package::signed_web_bundles::rust::SignatureType const&);
}
inline bool(SignatureType::operator==)(
    ::web_package::signed_web_bundles::rust::SignatureType const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvXs4_uNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5typesNtB5_u13SignatureTypeNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::web_package::signed_web_bundles::rust::SignatureType::
    __crubit_field_offset_assertions() {}
}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier33create_uempty_uintegrity_ublock_ucbor(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> create_empty_integrity_block_cbor(
    rs_std::SliceRef<const ::std::uint8_t> attributes_cbor) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier33create_uempty_uintegrity_ublock_ucbor(
          &attributes_cbor, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24create_usignature_upayload(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> create_signature_payload(
    rs_std::SliceRef<const ::std::uint8_t> unsigned_web_bundle_hash,
    rs_std::SliceRef<const ::std::uint8_t> integrity_block_cbor,
    rs_std::SliceRef<const ::std::uint8_t> attributes_cbor) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24create_usignature_upayload(
          &unsigned_web_bundle_hash, &integrity_block_cbor, &attributes_cbor,
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust15integrity_ublock21parse_uintegrity_ublock(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError>*
        __ret_ptr);
}
inline rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                      ::web_package::signed_web_bundles::rust::ParseError>
parse_integrity_block(rs_std::SliceRef<const ::std::uint8_t> input) {
  crubit::Slot<
      rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                     ::web_package::signed_web_bundles::rust::ParseError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust15integrity_ublock21parse_uintegrity_ublock(
          &input, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace web_package::signed_web_bundles::rust

namespace web_package::signed_web_bundles::rust {

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier27verify_uecdsa_up256_usignature(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool verify_ecdsa_p256_signature(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message) {
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier27verify_uecdsa_up256_usignature(
          &public_key, &signature, &message);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24verify_ued25519_usignature(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool verify_ed25519_signature(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message) {
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier24verify_ued25519_usignature(
          &public_key, &signature, &message);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier16verify_usignature(
    ::web_package::signed_web_bundles::rust::SignatureType*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool verify_signature(
    ::web_package::signed_web_bundles::rust::SignatureType signature_type,
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> signature,
    rs_std::SliceRef<const ::std::uint8_t> message) {
  return __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust18signature_uverifier16verify_usignature(
          &signature_type, &public_key, &signature, &message);
}

}  // namespace web_package::signed_web_bundles::rust

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SignatureStackEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020SignatureStackEntry_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<
        ::web_package::signed_web_bundles::rust::SignatureStackEntry> const&,
    rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>&,
    rs_std::Vec<
        ::web_package::signed_web_bundles::rust::SignatureStackEntry> const&);
}
inline rs_std::
    Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>::Vec(
        const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<
    ::web_package::signed_web_bundles::rust::SignatureStackEntry>&
rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>::
operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types19SignatureStackEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::
    Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>::Vec(
        Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<
    ::web_package::signed_web_bundles::rust::SignatureStackEntry>&
rs_std::Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>::
operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::
    Vec<::web_package::signed_web_bundles::rust::SignatureStackEntry>::Vec(
        ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::web_package::signed_web_bundles::rust::
                       SignatureStackEntry>::Vec() noexcept
    : storage_{} {
  init_empty();
}
inline rs_std::Vec<::web_package::signed_web_bundles::rust::
                       SignatureStackEntry>::~Vec() noexcept {
  destroy();
}
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020IntegrityBlock_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020IntegrityBlock_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020web_upackage_x00000020_x0000003a_x0000003a_x00000020signed_uweb_ubundles_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError> const&,
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError>&,
    rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                   ::web_package::signed_web_bundles::rust::ParseError> const&);
}
inline rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                      ::web_package::signed_web_bundles::rust::ParseError>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                      ::web_package::signed_web_bundles::rust::ParseError>&
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_8aa5e0994030d24a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCsbU1edN3Q1Dy_u23signed_uweb_ubundles_urust5types14IntegrityBlockNtBF_u10ParseErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
                      ::web_package::signed_web_bundles::rust::ParseError>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[48 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>::
    set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[48 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>,
           ::web_package::signed_web_bundles::rust::IntegrityBlock, U>)
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>::
    Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>,
           ::web_package::signed_web_bundles::rust::IntegrityBlock, U>)
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>&
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>::
operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::web_package::signed_web_bundles::rust::ParseError, F>)
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::web_package::signed_web_bundles::rust::ParseError, F>)
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>&
rs_std::Result<::web_package::signed_web_bundles::rust::IntegrityBlock,
               ::web_package::signed_web_bundles::rust::ParseError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::web_package::signed_web_bundles::rust::IntegrityBlock,
    ::web_package::signed_web_bundles::rust::ParseError>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#pragma clang diagnostic pop
