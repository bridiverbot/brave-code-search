// Automatically @generated C++ bindings for the following Rust crate:
// athm_ffi_2b5bb122
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
#include "third_party/crubit/support/lifetime_annotations.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace private_verification_tokens {
struct PrivacyPassAthmIssuer;
struct TokenRequestInboundBatch;
}  // namespace private_verification_tokens

namespace private_verification_tokens {
struct TokenState;
struct UnframeError;
static constexpr ::std::array<::std::uint8_t, 2> ATHM_TOKEN_TYPE =
    ::std::array<::std::uint8_t, 2>{192, 126};
//  Error outcome of a bridge operation.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=105
struct CRUBIT_INTERNAL_RUST_TYPE(":: athm_ffi_2b5bb122 :: AthmStatus") alignas(
    1) [[clang::trivial_abi]] AthmStatus final {
 public:
  // `athm_ffi_2b5bb122::AthmStatus` doesn't implement the `Default` trait
  AthmStatus() = delete;

  //  One of the serialized inputs failed to decode.
  //
  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=107
  static constexpr AthmStatus MakeInvalidInput();

  //  Inputs decoded, but the cryptographic operation failed (e.g. invalid
  //  proof, out-of-range metadata, or a token that did not verify).
  //
  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=110
  static constexpr AthmStatus MakeOperationFailed();

  // No custom `Drop` impl and no custom "drop glue" required
  ~AthmStatus() = default;
  AthmStatus(AthmStatus&&) = default;
  AthmStatus& operator=(AthmStatus&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  AthmStatus(const AthmStatus&) = default;
  AthmStatus& operator=(const AthmStatus&) = default;
  AthmStatus(::crubit::UnsafeRelocateTag, AthmStatus&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=104
  bool operator==(::private_verification_tokens::AthmStatus const& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr AthmStatus(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  Set of operations for framing and unframing ATHM messages. `K` is the type
//  of the key_id metadata associated with each framed message.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=32
template <typename T0>
struct CRUBIT_INTERNAL_RUST_TYPE(":: athm_ffi_2b5bb122 :: Frame") Frame {
  template <typename T>
  using impl = rs_std::impl<T, Frame<T0>>;
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {

//  Client key material and cryptographic parameters.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=17
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassAthmClient") alignas(8)
    [[clang::trivial_abi]] PrivacyPassAthmClient final {
 public:
  // `athm_ffi_2b5bb122::PrivacyPassAthmClient` doesn't implement the `Default`
  // trait
  PrivacyPassAthmClient() = delete;

  // Drop::drop
  ~PrivacyPassAthmClient();

  // Clone::clone
  PrivacyPassAthmClient(const PrivacyPassAthmClient&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::PrivacyPassAthmClient& operator=(
      const PrivacyPassAthmClient&) noexcept;

  PrivacyPassAthmClient(::crubit::UnsafeRelocateTag,
                        PrivacyPassAthmClient&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=24
  static rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                        ::private_verification_tokens::AthmStatus>
  try_new(rs_std::SliceRef<const ::std::uint8_t> public_key,
          rs_std::SliceRef<const ::std::uint8_t> public_key_proof,
          ::std::uint8_t num_buckets,
          rs_std::SliceRef<const ::std::uint8_t> deployment_id);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=38
  static ::private_verification_tokens::PrivacyPassAthmClient new_(
      ::private_verification_tokens::PrivacyPassAthmIssuer const& issuer);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=46
  rs_std::Result<::private_verification_tokens::TokenState,
                 ::private_verification_tokens::AthmStatus>
  new_token_state() const;

  // Error generating bindings for associated function
  // `athm_ffi_2b5bb122::PrivacyPassAthmClient::finalize_request` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=52:
  // Error formatting function return type
  // `std::result::Result<athm::GenericToken<athm::backend::boringssl::BoringSslBackend>,
  // athm_ffi_2b5bb122::AthmStatus>`: Generic types are not supported yet
  // (b/259749095)

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 96> params;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 64> public_key_proof;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 104> public_key;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=49
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassAthmIssuer") alignas(8)
    [[clang::trivial_abi]] PrivacyPassAthmIssuer final {
 public:
  // Type is not a C++ aggregate: Field `private_key` is not public

  // `athm_ffi_2b5bb122::PrivacyPassAthmIssuer` doesn't implement the `Default`
  // trait
  PrivacyPassAthmIssuer() = delete;

  // Drop::drop
  ~PrivacyPassAthmIssuer();

  // Clone::clone
  PrivacyPassAthmIssuer(const PrivacyPassAthmIssuer&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::PrivacyPassAthmIssuer& operator=(
      const PrivacyPassAthmIssuer&) noexcept;

  PrivacyPassAthmIssuer(::crubit::UnsafeRelocateTag,
                        PrivacyPassAthmIssuer&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=57
  static rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                        ::private_verification_tokens::AthmStatus>
  try_new(::std::uint8_t num_buckets,
          rs_std::SliceRef<const ::std::uint8_t> deployment_id);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=64
  rs_std::Vec<::std::uint8_t> public_key_bytes() const;

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=70
  rs_std::Vec<::std::uint8_t> public_key_proof_bytes() const;

  // Error generating bindings for associated function
  // `athm_ffi_2b5bb122::PrivacyPassAthmIssuer::issue` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=76:
  // Error formatting function return type
  // `std::result::Result<athm::GenericTokenResponse<athm::backend::boringssl::BoringSslBackend>,
  // athm_ffi_2b5bb122::AthmStatus>`: Generic types are not supported yet
  // (b/259749095)

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=91
  rs_std::Result<rs_std::Vec<::std::uint8_t>,
                 ::private_verification_tokens::AthmStatus>
  issue_batch(::private_verification_tokens::TokenRequestInboundBatch batch,
              ::std::uint8_t hidden_metadata) const;

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=108
  rs_std::Result<rs_std::Vec<::std::uint8_t>,
                 ::private_verification_tokens::AthmStatus>
  issue_batch_from_bytes(rs_std::SliceRef<const ::std::uint8_t> request_body,
                         ::std::uint8_t hidden_metadata) const;

  // Error generating bindings for associated function
  // `athm_ffi_2b5bb122::PrivacyPassAthmIssuer::verify` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=118:
  // Error handling parameter #1 of type
  // `athm::GenericToken<athm::backend::boringssl::BoringSslBackend>`: Generic
  // types are not supported yet (b/259749095)

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=123
  rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>
  verify_wire_token(rs_std::SliceRef<const ::std::uint8_t> wire_token) const;

 private:
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 96> params;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 160> private_key;
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 64> public_key_proof;
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 104> public_key;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=113
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassBatchClient") alignas(8)
    [[clang::trivial_abi]] PrivacyPassBatchClient final {
 public:
  // `athm_ffi_2b5bb122::PrivacyPassBatchClient` doesn't implement the `Default`
  // trait
  PrivacyPassBatchClient() = delete;

  // Drop::drop
  ~PrivacyPassBatchClient();

  // Clone::clone
  PrivacyPassBatchClient(const PrivacyPassBatchClient&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::PrivacyPassBatchClient& operator=(
      const PrivacyPassBatchClient&) noexcept;

  PrivacyPassBatchClient(::crubit::UnsafeRelocateTag,
                         PrivacyPassBatchClient&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=120
  static rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                        ::private_verification_tokens::AthmStatus>
  try_new(rs_std::SliceRef<const ::std::uint8_t> public_key,
          rs_std::SliceRef<const ::std::uint8_t> public_key_proof,
          ::std::uint8_t num_buckets,
          rs_std::SliceRef<const ::std::uint8_t> deployment_id,
          ::std::uint32_t version, ::std::uintptr_t batch_size);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=148
  rs_std::SliceRef<const ::std::uint8_t> request_body() const& $(__anon1)
      CRUBIT_LIFETIME_BOUND;

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=152
  rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                 ::private_verification_tokens::AthmStatus>
  finalize(rs_std::SliceRef<const ::std::uint8_t> response_body);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 264> client;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> states;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> request_body_;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {
static constexpr ::std::uintptr_t TOKEN_FRAMED_SIZE = 132;
static constexpr ::std::uintptr_t TOKEN_REQUEST_FRAMED_SIZE = 36;
}  // namespace private_verification_tokens

namespace private_verification_tokens {

//  Parsed results from a token issuance request as seen by the server.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=17
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: TokenRequestInboundBatch") alignas(8)
    [[clang::trivial_abi]] TokenRequestInboundBatch final {
 public:
  // Type is not a C++ aggregate: Field `requests` has a type unsupported in C++

  // `athm_ffi_2b5bb122::TokenRequestInboundBatch` doesn't implement the
  // `Default` trait
  TokenRequestInboundBatch() = delete;

  // Drop::drop
  ~TokenRequestInboundBatch();

  // Clone::clone
  TokenRequestInboundBatch(const TokenRequestInboundBatch&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::TokenRequestInboundBatch& operator=(
      const TokenRequestInboundBatch&) noexcept;

  TokenRequestInboundBatch(::crubit::UnsafeRelocateTag,
                           TokenRequestInboundBatch&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=24
  static rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                        ::private_verification_tokens::UnframeError>
  from_bytes(rs_std::SliceRef<const ::std::uint8_t> input);

 private:
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 24> requests;

 public:
  union {
    // Generated from:
    // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=18
    ::std::uint32_t version;
  };
  union {
    // Generated from:
    // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=19
    ::std::uint8_t truncated_key_id;
  };

 private:
  unsigned char __padding1[3];

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {

//  Parsed token responses as seen by the client.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=70
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: TokenResponseInboundBatch") alignas(8)
    [[clang::trivial_abi]] TokenResponseInboundBatch final {
 public:
  // Type is not a C++ aggregate: Field `responses` has a type unsupported in
  // C++

  // `athm_ffi_2b5bb122::TokenResponseInboundBatch` doesn't implement the
  // `Default` trait
  TokenResponseInboundBatch() = delete;

  // Drop::drop
  ~TokenResponseInboundBatch();

  // Clone::clone
  TokenResponseInboundBatch(const TokenResponseInboundBatch&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::TokenResponseInboundBatch& operator=(
      const TokenResponseInboundBatch&) noexcept;

  TokenResponseInboundBatch(::crubit::UnsafeRelocateTag,
                            TokenResponseInboundBatch&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=75
  static rs_std::Result<
      ::private_verification_tokens::TokenResponseInboundBatch,
      ::private_verification_tokens::UnframeError>
  from_bytes(
      rs_std::SliceRef<const ::std::uint8_t> input,
      ::private_verification_tokens::PrivacyPassAthmClient const& client);

  // Error generating bindings for associated function
  // `athm_ffi_2b5bb122::TokenResponseInboundBatch::finalize_batch` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=96:
  // Error formatting function return type
  // `std::result::Result<std::vec::Vec<athm::GenericToken<athm::backend::boringssl::BoringSslBackend>>,
  // athm_ffi_2b5bb122::AthmStatus>`: Generic types are not supported yet
  // (b/259749095)

 private:
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 24> responses;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

namespace private_verification_tokens {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=114
struct CRUBIT_INTERNAL_RUST_TYPE(":: athm_ffi_2b5bb122 :: TokenState") alignas(
    1) [[clang::trivial_abi]] TokenState final {
 public:
  // Type is not a C++ aggregate: Field `context` is not public

  // `athm_ffi_2b5bb122::TokenState` doesn't implement the `Default` trait
  TokenState() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~TokenState() = default;
  TokenState(TokenState&&) = default;
  TokenState& operator=(TokenState&&) = default;

  // Clone::clone
  TokenState(const TokenState&) noexcept;

  // Clone::clone_from
  ::private_verification_tokens::TokenState& operator=(
      const TokenState&) noexcept;

  TokenState(::crubit::UnsafeRelocateTag, TokenState&& value);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 64> context;
  // Field type has been replaced with a blob of bytes: Generic types are not
  // supported yet (b/259749095)
  ::std::array<unsigned char, 33> request;

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=11
struct CRUBIT_INTERNAL_RUST_TYPE(":: athm_ffi_2b5bb122 :: TruncatedKeyId")
    TruncatedKeyId {
  template <typename T>
  using impl = rs_std::impl<T, TruncatedKeyId>;
};

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=23
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: UnframeError") alignas(1) [[clang::trivial_abi]]
UnframeError final {
 public:
  // `athm_ffi_2b5bb122::UnframeError` doesn't implement the `Default` trait
  UnframeError() = delete;

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=24
  static constexpr UnframeError MakeUnexpectedLength();

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=25
  static constexpr UnframeError MakeUnexpectedType();

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=26
  static constexpr UnframeError MakeMultipleKeyIds();

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=27
  static constexpr UnframeError MakeDecodeFailure();

  // No custom `Drop` impl and no custom "drop glue" required
  ~UnframeError() = default;
  UnframeError(UnframeError&&) = default;
  UnframeError& operator=(UnframeError&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  UnframeError(const UnframeError&) = default;
  UnframeError& operator=(const UnframeError&) = default;
  UnframeError(::crubit::UnsafeRelocateTag, UnframeError&& value);

  // Generated from:
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=22
  bool operator==(
      ::private_verification_tokens::UnframeError const& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 1> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr UnframeError(PrivateBytesTag, ::std::array<unsigned char, 1> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace private_verification_tokens

template <>
struct rs_std::impl<::private_verification_tokens::AthmStatus,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::private_verification_tokens::AthmStatus,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<athm_ffi_2b5bb122::AthmStatus as std::fmt::Debug>::fmt` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=104:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};

template <>
struct rs_std::impl<::private_verification_tokens::UnframeError,
                    ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::private_verification_tokens::UnframeError,
                    ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<athm_ffi_2b5bb122::UnframeError as std::fmt::Debug>::fmt` defined at
  // ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=22:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: PrivacyPassAthmClient "
    ", :: athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                         ::private_verification_tokens::AthmStatus>,
          ::private_verification_tokens::PrivacyPassAthmClient,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                     ::private_verification_tokens::AthmStatus>,
      ::private_verification_tokens::PrivacyPassAthmClient,
      ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassAthmClient, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassAthmClient, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
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
  ::private_verification_tokens::PrivacyPassAthmClient* ok_ptr() noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassAthmClient*>(__storage);
  }
  ::private_verification_tokens::PrivacyPassAthmClient const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassAthmClient const*>(__storage);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 8);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[264];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmIssuer_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmIssuer_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: PrivacyPassAthmIssuer "
    ", :: athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                         ::private_verification_tokens::AthmStatus>,
          ::private_verification_tokens::PrivacyPassAthmIssuer,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                     ::private_verification_tokens::AthmStatus>,
      ::private_verification_tokens::PrivacyPassAthmIssuer,
      ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassAthmIssuer, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassAthmIssuer, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
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
  ::private_verification_tokens::PrivacyPassAthmIssuer* ok_ptr() noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassAthmIssuer*>(__storage);
  }
  ::private_verification_tokens::PrivacyPassAthmIssuer const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassAthmIssuer const*>(__storage);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 8);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[424];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassBatchClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassBatchClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: PrivacyPassBatchClient "
    ", :: athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                         ::private_verification_tokens::AthmStatus>,
          ::private_verification_tokens::PrivacyPassBatchClient,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                     ::private_verification_tokens::AthmStatus>,
      ::private_verification_tokens::PrivacyPassBatchClient,
      ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassBatchClient, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::PrivacyPassBatchClient, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
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
  ::private_verification_tokens::PrivacyPassBatchClient* ok_ptr() noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassBatchClient*>(__storage);
  }
  ::private_verification_tokens::PrivacyPassBatchClient const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::PrivacyPassBatchClient const*>(
        __storage);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 8);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[312];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenRequestInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenRequestInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: "
    "TokenRequestInboundBatch , :: athm_ffi_2b5bb122 :: UnframeError >")
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError>
    : public rs_std::ResultBase<
          rs_std::Result<
              ::private_verification_tokens::TokenRequestInboundBatch,
              ::private_verification_tokens::UnframeError>,
          ::private_verification_tokens::TokenRequestInboundBatch,
          ::private_verification_tokens::UnframeError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                 ::private_verification_tokens::UnframeError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                     ::private_verification_tokens::UnframeError>,
      ::private_verification_tokens::TokenRequestInboundBatch,
      ::private_verification_tokens::UnframeError>;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<
            Result, ::private_verification_tokens::TokenRequestInboundBatch, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<
            Result, ::private_verification_tokens::TokenRequestInboundBatch, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::UnframeError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::UnframeError, F>)
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
  ::private_verification_tokens::TokenRequestInboundBatch* ok_ptr() noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::TokenRequestInboundBatch*>(__storage);
  }
  ::private_verification_tokens::TokenRequestInboundBatch const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::TokenRequestInboundBatch const*>(
        __storage);
  }
  ::private_verification_tokens::UnframeError* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::UnframeError*>(
        __storage + 8);
  }
  ::private_verification_tokens::UnframeError const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::UnframeError const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenResponseInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenResponseInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: "
    "TokenResponseInboundBatch , :: athm_ffi_2b5bb122 :: UnframeError >")
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError>
    : public rs_std::ResultBase<
          rs_std::Result<
              ::private_verification_tokens::TokenResponseInboundBatch,
              ::private_verification_tokens::UnframeError>,
          ::private_verification_tokens::TokenResponseInboundBatch,
          ::private_verification_tokens::UnframeError> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                 ::private_verification_tokens::UnframeError>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                     ::private_verification_tokens::UnframeError>,
      ::private_verification_tokens::TokenResponseInboundBatch,
      ::private_verification_tokens::UnframeError>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::TokenResponseInboundBatch,
             U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::TokenResponseInboundBatch,
             U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::UnframeError, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::UnframeError, F>)
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
  ::private_verification_tokens::TokenResponseInboundBatch* ok_ptr() noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::TokenResponseInboundBatch*>(__storage);
  }
  ::private_verification_tokens::TokenResponseInboundBatch const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<
        ::private_verification_tokens::TokenResponseInboundBatch const*>(
        __storage);
  }
  ::private_verification_tokens::UnframeError* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::UnframeError*>(
        __storage + 8);
  }
  ::private_verification_tokens::UnframeError const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::UnframeError const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenState_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenState_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(1) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: athm_ffi_2b5bb122 :: TokenState , :: "
    "athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<::private_verification_tokens::TokenState,
                         ::private_verification_tokens::AthmStatus>,
          ::private_verification_tokens::TokenState,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::private_verification_tokens::TokenState,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::private_verification_tokens::TokenState,
                     ::private_verification_tokens::AthmStatus>,
      ::private_verification_tokens::TokenState,
      ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::TokenState, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::private_verification_tokens::TokenState, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  ::private_verification_tokens::TokenState* ok_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::TokenState*>(
        __storage + 1);
  }
  ::private_verification_tokens::TokenState const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::TokenState const*>(
        __storage + 1);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 1);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 1);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[98];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < :: alloc :: vec :: "
    "Vec < u8 > > , :: athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                         ::private_verification_tokens::AthmStatus>,
          rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                     ::private_verification_tokens::AthmStatus>,
      rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
      ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<rs_std::Vec<::std::uint8_t>>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::Vec<rs_std::Vec<::std::uint8_t>>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
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
  rs_std::Vec<rs_std::Vec<::std::uint8_t>>* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::Vec<rs_std::Vec<::std::uint8_t>>*>(
        __storage);
  }
  rs_std::Vec<rs_std::Vec<::std::uint8_t>> const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<rs_std::Vec<rs_std::Vec<::std::uint8_t>> const*>(
        __storage);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 8);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < u8 > , :: "
    "athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::Vec<::std::uint8_t>,
                         ::private_verification_tokens::AthmStatus>,
          rs_std::Vec<::std::uint8_t>,
          ::private_verification_tokens::AthmStatus> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<::std::uint8_t>,
                 ::private_verification_tokens::AthmStatus>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<::std::uint8_t>,
                     ::private_verification_tokens::AthmStatus>,
      rs_std::Vec<::std::uint8_t>, ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                rs_std::Vec<::std::uint8_t>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                rs_std::Vec<::std::uint8_t>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
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
  rs_std::Vec<::std::uint8_t>* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::Vec<::std::uint8_t>*>(__storage);
  }
  rs_std::Vec<::std::uint8_t> const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::Vec<::std::uint8_t> const*>(__storage);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 8);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT64_C(18446744073709551615)); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
template <>
struct alignas(1) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < u8 , :: athm_ffi_2b5bb122 :: AthmStatus >")
    rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>
    : public rs_std::ResultBase<
          rs_std::Result<::std::uint8_t,
                         ::private_verification_tokens::AthmStatus>,
          ::std::uint8_t, ::private_verification_tokens::AthmStatus> {
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
      rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>,
      ::std::uint8_t, ::private_verification_tokens::AthmStatus>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint8_t, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::std::uint8_t, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<
             ::private_verification_tokens::AthmStatus, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() == 0; }
  ::std::uint8_t* ok_ptr() noexcept {
    return reinterpret_cast<::std::uint8_t*>(__storage + 1);
  }
  ::std::uint8_t const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::std::uint8_t const*>(__storage + 1);
  }
  ::private_verification_tokens::AthmStatus* err_ptr() noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus*>(
        __storage + 1);
  }
  ::private_verification_tokens::AthmStatus const* err_const_ptr()
      const noexcept {
    return reinterpret_cast<::private_verification_tokens::AthmStatus const*>(
        __storage + 1);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[2];
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

namespace private_verification_tokens::privacy_pass_common {

// Error generating bindings for constant `athm_ffi_2b5bb122::ATHM_TOKEN_TYPE`
// defined at
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=9:
// Unsupported use statement that refers to this type of the entity:
// athm_ffi_2b5bb122::ATHM_TOKEN_TYPE of kind Const

}

namespace private_verification_tokens::privacy_pass_common {

//  Error outcome of a bridge operation.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=105
using AthmStatus CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: AthmStatus") =
    ::private_verification_tokens::AthmStatus;
}  // namespace private_verification_tokens::privacy_pass_common

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::AthmStatus) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::AthmStatus) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::private_verification_tokens::AthmStatus(
    ::private_verification_tokens::AthmStatus::MakeInvalidInput)() {
  return AthmStatus(PrivateBytesTag{}, {1});
}

// `static` constructor
inline constexpr ::private_verification_tokens::AthmStatus(
    ::private_verification_tokens::AthmStatus::MakeOperationFailed)() {
  return AthmStatus(PrivateBytesTag{}, {2});
}
static_assert(::std::is_trivially_destructible_v<
              ::private_verification_tokens::AthmStatus>);
static_assert(::std::is_trivially_move_constructible_v<
              ::private_verification_tokens::AthmStatus>);
static_assert(::std::is_trivially_move_assignable_v<
              ::private_verification_tokens::AthmStatus>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::private_verification_tokens::AthmStatus>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::private_verification_tokens::AthmStatus>);
inline ::private_verification_tokens::AthmStatus::AthmStatus(
    ::crubit::UnsafeRelocateTag, AthmStatus&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_6c184f3aa94e8a6c__uRNvXsd_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u10AthmStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::AthmStatus const&,
    ::private_verification_tokens::AthmStatus const&);
}
inline bool(AthmStatus::operator==)(
    ::private_verification_tokens::AthmStatus const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvXsd_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u10AthmStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::private_verification_tokens::AthmStatus::
    __crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::private_verification_tokens::AthmStatus;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_common {

// Error generating bindings for trait `athm_ffi_2b5bb122::Frame` defined at
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=32:
// Aliases to generic trait `athm_ffi_2b5bb122::Frame` are not supported.

}

namespace private_verification_tokens::privacy_pass_client {

//  Client key material and cryptographic parameters.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=17
using PrivacyPassAthmClient CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassAthmClient") =
    ::private_verification_tokens::PrivacyPassAthmClient;
}  // namespace private_verification_tokens::privacy_pass_client

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::PrivacyPassAthmClient) == 264,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::PrivacyPassAthmClient) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmClient&);
}
inline ::private_verification_tokens::PrivacyPassAthmClient::
    ~PrivacyPassAthmClient() {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmClient const&,
    ::private_verification_tokens::PrivacyPassAthmClient* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmClient&,
    ::private_verification_tokens::PrivacyPassAthmClient const&);
}
inline ::private_verification_tokens::PrivacyPassAthmClient::
    PrivacyPassAthmClient(const PrivacyPassAthmClient& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::PrivacyPassAthmClient& ::
private_verification_tokens::PrivacyPassAthmClient::operator=(
    const PrivacyPassAthmClient& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::PrivacyPassAthmClient::
    PrivacyPassAthmClient(::crubit::UnsafeRelocateTag,
                          PrivacyPassAthmClient&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient7try_unew(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint8_t,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmClient::try_new)(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> public_key_proof,
    ::std::uint8_t num_buckets,
    rs_std::SliceRef<const ::std::uint8_t> deployment_id) {
  crubit::Slot<
      rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                     ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient7try_unew(
          &public_key, &public_key_proof, num_buckets, &deployment_id,
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient3new(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    ::private_verification_tokens::PrivacyPassAthmClient* __ret_ptr);
}
inline ::private_verification_tokens::PrivacyPassAthmClient(
    PrivacyPassAthmClient::new_)(
    ::private_verification_tokens::PrivacyPassAthmIssuer const& issuer) {
  crubit::Slot<::private_verification_tokens::PrivacyPassAthmClient>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient3new(
          issuer, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient15new_utoken_ustate(
    ::private_verification_tokens::PrivacyPassAthmClient const&,
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::TokenState,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmClient::new_token_state)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<::private_verification_tokens::TokenState,
                              ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB2_u21PrivacyPassAthmClient15new_utoken_ustate(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::private_verification_tokens::PrivacyPassAthmClient::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::private_verification_tokens::PrivacyPassAthmClient;
  static_assert(0 == offsetof(__crubit_assert_type, params));
  static_assert(96 == offsetof(__crubit_assert_type, public_key_proof));
  static_assert(160 == offsetof(__crubit_assert_type, public_key));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_issuer {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=49
using PrivacyPassAthmIssuer CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassAthmIssuer") =
    ::private_verification_tokens::PrivacyPassAthmIssuer;
}  // namespace private_verification_tokens::privacy_pass_issuer

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::PrivacyPassAthmIssuer) == 424,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::PrivacyPassAthmIssuer) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmIssuer&);
}
inline ::private_verification_tokens::PrivacyPassAthmIssuer::
    ~PrivacyPassAthmIssuer() {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    ::private_verification_tokens::PrivacyPassAthmIssuer* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassAthmIssuer&,
    ::private_verification_tokens::PrivacyPassAthmIssuer const&);
}
inline ::private_verification_tokens::PrivacyPassAthmIssuer::
    PrivacyPassAthmIssuer(const PrivacyPassAthmIssuer& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::PrivacyPassAthmIssuer& ::
private_verification_tokens::PrivacyPassAthmIssuer::operator=(
    const PrivacyPassAthmIssuer& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::PrivacyPassAthmIssuer::
    PrivacyPassAthmIssuer(::crubit::UnsafeRelocateTag,
                          PrivacyPassAthmIssuer&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer7try_unew(
    ::std::uint8_t, rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmIssuer::try_new)(
    ::std::uint8_t num_buckets,
    rs_std::SliceRef<const ::std::uint8_t> deployment_id) {
  crubit::Slot<
      rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                     ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer7try_unew(
          num_buckets, &deployment_id, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer16public_ukey_ubytes(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(
    PrivacyPassAthmIssuer::public_key_bytes)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer16public_ukey_ubytes(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22public_ukey_uproof_ubytes(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(
    PrivacyPassAthmIssuer::public_key_proof_bytes)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22public_ukey_uproof_ubytes(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer11issue_ubatch(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    ::private_verification_tokens::TokenRequestInboundBatch*, ::std::uint8_t,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmIssuer::issue_batch)(
    ::private_verification_tokens::TokenRequestInboundBatch batch,
    ::std::uint8_t hidden_metadata) const {
  auto&& self = *this;
  crubit::Slot batch_slot((::std::move(batch)));
  crubit::Slot<rs_std::Result<rs_std::Vec<::std::uint8_t>,
                              ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer11issue_ubatch(
          self, batch_slot.Get(), hidden_metadata, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22issue_ubatch_ufrom_ubytes(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint8_t,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmIssuer::issue_batch_from_bytes)(
    rs_std::SliceRef<const ::std::uint8_t> request_body,
    ::std::uint8_t hidden_metadata) const {
  auto&& self = *this;
  crubit::Slot<rs_std::Result<rs_std::Vec<::std::uint8_t>,
                              ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer22issue_ubatch_ufrom_ubytes(
          self, &request_body, hidden_metadata, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer17verify_uwire_utoken(
    ::private_verification_tokens::PrivacyPassAthmIssuer const&,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>*
        __ret_ptr);
}
inline rs_std::Result<::std::uint8_t,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassAthmIssuer::verify_wire_token)(
    rs_std::SliceRef<const ::std::uint8_t> wire_token) const {
  auto&& self = *this;
  crubit::Slot<
      rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB4_u21PrivacyPassAthmIssuer17verify_uwire_utoken(
          self, &wire_token, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::private_verification_tokens::PrivacyPassAthmIssuer::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::private_verification_tokens::PrivacyPassAthmIssuer;
  static_assert(0 == offsetof(__crubit_assert_type, params));
  static_assert(96 == offsetof(__crubit_assert_type, private_key));
  static_assert(256 == offsetof(__crubit_assert_type, public_key_proof));
  static_assert(320 == offsetof(__crubit_assert_type, public_key));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_client {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=113
using PrivacyPassBatchClient CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: PrivacyPassBatchClient") =
    ::private_verification_tokens::PrivacyPassBatchClient;
}  // namespace private_verification_tokens::privacy_pass_client

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::PrivacyPassBatchClient) == 312,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::PrivacyPassBatchClient) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassBatchClient&);
}
inline ::private_verification_tokens::PrivacyPassBatchClient::
    ~PrivacyPassBatchClient() {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassBatchClient const&,
    ::private_verification_tokens::PrivacyPassBatchClient* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassBatchClient&,
    ::private_verification_tokens::PrivacyPassBatchClient const&);
}
inline ::private_verification_tokens::PrivacyPassBatchClient::
    PrivacyPassBatchClient(const PrivacyPassBatchClient& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::PrivacyPassBatchClient& ::
private_verification_tokens::PrivacyPassBatchClient::operator=(
    const PrivacyPassBatchClient& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::PrivacyPassBatchClient::
    PrivacyPassBatchClient(::crubit::UnsafeRelocateTag,
                           PrivacyPassBatchClient&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient7try_unew(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint8_t,
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint32_t, ::std::uintptr_t,
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassBatchClient::try_new)(
    rs_std::SliceRef<const ::std::uint8_t> public_key,
    rs_std::SliceRef<const ::std::uint8_t> public_key_proof,
    ::std::uint8_t num_buckets,
    rs_std::SliceRef<const ::std::uint8_t> deployment_id,
    ::std::uint32_t version, ::std::uintptr_t batch_size) {
  crubit::Slot<
      rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                     ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient7try_unew(
          &public_key, &public_key_proof, num_buckets, &deployment_id, version,
          batch_size, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient12request_ubodyCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::PrivacyPassBatchClient const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(
    PrivacyPassBatchClient::request_body)() const& $(__anon1)
    CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient12request_ubodyCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient8finalize(
    ::private_verification_tokens::PrivacyPassBatchClient&,
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                      ::private_verification_tokens::AthmStatus>(
    PrivacyPassBatchClient::finalize)(
    rs_std::SliceRef<const ::std::uint8_t> response_body) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<
          ::private_verification_tokens::PrivacyPassBatchClient&>(self),
      crubit::internal::AsPtrDatas<rs_std::SliceRef<const ::std::uint8_t>>(
          response_body));
  crubit::Slot<rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                              ::private_verification_tokens::AthmStatus>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs0_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB5_u22PrivacyPassBatchClient8finalize(
          self, &response_body, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::private_verification_tokens::PrivacyPassBatchClient::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::private_verification_tokens::PrivacyPassBatchClient;
  static_assert(0 == offsetof(__crubit_assert_type, client));
  static_assert(264 == offsetof(__crubit_assert_type, states));
  static_assert(288 == offsetof(__crubit_assert_type, request_body_));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_common {

// Error generating bindings for constant `athm_ffi_2b5bb122::TOKEN_FRAMED_SIZE`
// defined at
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=73:
// Unsupported use statement that refers to this type of the entity:
// athm_ffi_2b5bb122::TOKEN_FRAMED_SIZE of kind Const

}

namespace private_verification_tokens::privacy_pass_common {

// Error generating bindings for constant
// `athm_ffi_2b5bb122::TOKEN_REQUEST_FRAMED_SIZE` defined at
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=41:
// Unsupported use statement that refers to this type of the entity:
// athm_ffi_2b5bb122::TOKEN_REQUEST_FRAMED_SIZE of kind Const

}

namespace private_verification_tokens::privacy_pass_issuer {

//  Parsed results from a token issuance request as seen by the server.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_issuer.rs;l=17
using TokenRequestInboundBatch CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: TokenRequestInboundBatch") =
    ::private_verification_tokens::TokenRequestInboundBatch;
}  // namespace private_verification_tokens::privacy_pass_issuer

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::TokenRequestInboundBatch) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::TokenRequestInboundBatch) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenRequestInboundBatch&);
}
inline ::private_verification_tokens::TokenRequestInboundBatch::
    ~TokenRequestInboundBatch() {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenRequestInboundBatch const&,
    ::private_verification_tokens::TokenRequestInboundBatch* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenRequestInboundBatch&,
    ::private_verification_tokens::TokenRequestInboundBatch const&);
}
inline ::private_verification_tokens::TokenRequestInboundBatch::
    TokenRequestInboundBatch(const TokenRequestInboundBatch& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::TokenRequestInboundBatch& ::
private_verification_tokens::TokenRequestInboundBatch::operator=(
    const TokenRequestInboundBatch& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::TokenRequestInboundBatch::
    TokenRequestInboundBatch(::crubit::UnsafeRelocateTag,
                             TokenRequestInboundBatch&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB2_u24TokenRequestInboundBatch10from_ubytes(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                      ::private_verification_tokens::UnframeError>(
    TokenRequestInboundBatch::from_bytes)(
    rs_std::SliceRef<const ::std::uint8_t> input) {
  crubit::Slot<
      rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                     ::private_verification_tokens::UnframeError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuerNtB2_u24TokenRequestInboundBatch10from_ubytes(
          &input, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::private_verification_tokens::TokenRequestInboundBatch::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::private_verification_tokens::TokenRequestInboundBatch;
  static_assert(0 == offsetof(__crubit_assert_type, requests));
  static_assert(24 == offsetof(__crubit_assert_type, version));
  static_assert(28 == offsetof(__crubit_assert_type, truncated_key_id));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_client {

//  Parsed token responses as seen by the client.
//
// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_client.rs;l=70
using TokenResponseInboundBatch CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: TokenResponseInboundBatch") =
    ::private_verification_tokens::TokenResponseInboundBatch;
}  // namespace private_verification_tokens::privacy_pass_client

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::TokenResponseInboundBatch) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::TokenResponseInboundBatch) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenResponseInboundBatch&);
}
inline ::private_verification_tokens::TokenResponseInboundBatch::
    ~TokenResponseInboundBatch() {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenResponseInboundBatch const&,
    ::private_verification_tokens::TokenResponseInboundBatch* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenResponseInboundBatch&,
    ::private_verification_tokens::TokenResponseInboundBatch const&);
}
inline ::private_verification_tokens::TokenResponseInboundBatch::
    TokenResponseInboundBatch(const TokenResponseInboundBatch& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::TokenResponseInboundBatch& ::
private_verification_tokens::TokenResponseInboundBatch::operator=(
    const TokenResponseInboundBatch& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::TokenResponseInboundBatch::
    TokenResponseInboundBatch(::crubit::UnsafeRelocateTag,
                              TokenResponseInboundBatch&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB4_u25TokenResponseInboundBatch10from_ubytes(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::private_verification_tokens::PrivacyPassAthmClient const&,
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError>* __ret_ptr);
}
inline rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                      ::private_verification_tokens::UnframeError>(
    TokenResponseInboundBatch::from_bytes)(
    rs_std::SliceRef<const ::std::uint8_t> input,
    ::private_verification_tokens::PrivacyPassAthmClient const& client) {
  crubit::Slot<
      rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                     ::private_verification_tokens::UnframeError>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvMs_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclientNtB4_u25TokenResponseInboundBatch10from_ubytes(
          &input, client, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
inline void ::private_verification_tokens::TokenResponseInboundBatch::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type =
      ::private_verification_tokens::TokenResponseInboundBatch;
  static_assert(0 == offsetof(__crubit_assert_type, responses));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_common {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=114
using TokenState CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: TokenState") =
    ::private_verification_tokens::TokenState;
}  // namespace private_verification_tokens::privacy_pass_common

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::TokenState) == 97,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::TokenState) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<
              ::private_verification_tokens::TokenState>);
static_assert(::std::is_trivially_move_constructible_v<
              ::private_verification_tokens::TokenState>);
static_assert(::std::is_trivially_move_assignable_v<
              ::private_verification_tokens::TokenState>);
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenState const&,
    ::private_verification_tokens::TokenState* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::TokenState&,
    ::private_verification_tokens::TokenState const&);
}
inline ::private_verification_tokens::TokenState::TokenState(
    const TokenState& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::private_verification_tokens::TokenState& ::
private_verification_tokens::TokenState::operator=(
    const TokenState& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::private_verification_tokens::TokenState::TokenState(
    ::crubit::UnsafeRelocateTag, TokenState&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::private_verification_tokens::TokenState::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::private_verification_tokens::TokenState;
  static_assert(0 == offsetof(__crubit_assert_type, context));
  static_assert(64 == offsetof(__crubit_assert_type, request));
}
}  // namespace private_verification_tokens

namespace private_verification_tokens::privacy_pass_common {
using ::private_verification_tokens::TruncatedKeyId;
}

namespace private_verification_tokens::privacy_pass_common {

// Generated from:
// ../../components/private_verification_tokens/common/athm_ffi/privacy_pass_common.rs;l=23
using UnframeError CRUBIT_INTERNAL_RUST_TYPE(
    ":: athm_ffi_2b5bb122 :: UnframeError") =
    ::private_verification_tokens::UnframeError;
}  // namespace private_verification_tokens::privacy_pass_common

namespace private_verification_tokens {

static_assert(
    sizeof(::private_verification_tokens::UnframeError) == 1,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::private_verification_tokens::UnframeError) == 1,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::private_verification_tokens::UnframeError(
    ::private_verification_tokens::UnframeError::MakeUnexpectedLength)() {
  return UnframeError(PrivateBytesTag{}, {0});
}

// `static` constructor
inline constexpr ::private_verification_tokens::UnframeError(
    ::private_verification_tokens::UnframeError::MakeUnexpectedType)() {
  return UnframeError(PrivateBytesTag{}, {1});
}

// `static` constructor
inline constexpr ::private_verification_tokens::UnframeError(
    ::private_verification_tokens::UnframeError::MakeMultipleKeyIds)() {
  return UnframeError(PrivateBytesTag{}, {2});
}

// `static` constructor
inline constexpr ::private_verification_tokens::UnframeError(
    ::private_verification_tokens::UnframeError::MakeDecodeFailure)() {
  return UnframeError(PrivateBytesTag{}, {3});
}
static_assert(::std::is_trivially_destructible_v<
              ::private_verification_tokens::UnframeError>);
static_assert(::std::is_trivially_move_constructible_v<
              ::private_verification_tokens::UnframeError>);
static_assert(::std::is_trivially_move_assignable_v<
              ::private_verification_tokens::UnframeError>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::private_verification_tokens::UnframeError>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::private_verification_tokens::UnframeError>);
inline ::private_verification_tokens::UnframeError::UnframeError(
    ::crubit::UnsafeRelocateTag, UnframeError&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_6c184f3aa94e8a6c__uRNvXs6_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u12UnframeErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::private_verification_tokens::UnframeError const&,
    ::private_verification_tokens::UnframeError const&);
}
inline bool(UnframeError::operator==)(
    ::private_verification_tokens::UnframeError const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvXs6_uNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommonNtB5_u12UnframeErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::private_verification_tokens::UnframeError::
    __crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::private_verification_tokens::UnframeError;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
}  // namespace private_verification_tokens

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient21PrivacyPassAthmClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint64_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassAthmClient, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassAthmClient, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpected<F>&&
                                                           err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassAthmClient,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmClient,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmIssuer_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassAthmIssuer_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer21PrivacyPassAthmIssuerNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint64_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassAthmIssuer, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassAthmIssuer, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpected<F>&&
                                                           err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassAthmIssuer,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassAthmIssuer,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassBatchClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020PrivacyPassBatchClient_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient22PrivacyPassBatchClientNtNtBH_u19privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint64_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassBatchClient, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::PrivacyPassBatchClient, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpected<F>&&
                                                           err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::PrivacyPassBatchClient,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::PrivacyPassBatchClient,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenRequestInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenRequestInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError> const&,
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError>&,
    rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                   ::private_verification_tokens::UnframeError> const&);
}
inline rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                      ::private_verification_tokens::UnframeError>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                      ::private_verification_tokens::UnframeError>&
rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
               ::private_verification_tokens::UnframeError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uissuer24TokenRequestInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
                      ::private_verification_tokens::UnframeError>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::set_tag(::std::uint64_t
                                                              tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::private_verification_tokens::TokenRequestInboundBatch,
               ::private_verification_tokens::UnframeError>,
           ::private_verification_tokens::TokenRequestInboundBatch, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::private_verification_tokens::TokenRequestInboundBatch,
               ::private_verification_tokens::UnframeError>,
           ::private_verification_tokens::TokenRequestInboundBatch, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>&
rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::UnframeError, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::Result(rs_std::unexpected<F>&&
                                                             err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::UnframeError, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>&
rs_std::Result<::private_verification_tokens::TokenRequestInboundBatch,
               ::private_verification_tokens::UnframeError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenRequestInboundBatch,
    ::private_verification_tokens::UnframeError>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenResponseInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenResponseInboundBatch_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020UnframeError_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError> const&,
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError>&,
    rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                   ::private_verification_tokens::UnframeError> const&);
}
inline rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                      ::private_verification_tokens::UnframeError>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                      ::private_verification_tokens::UnframeError>&
rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
               ::private_verification_tokens::UnframeError>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_uclient25TokenResponseInboundBatchNtNtBH_u19privacy_upass_ucommon12UnframeErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
                      ::private_verification_tokens::UnframeError>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::set_tag(::std::uint64_t
                                                              tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::private_verification_tokens::TokenResponseInboundBatch,
               ::private_verification_tokens::UnframeError>,
           ::private_verification_tokens::TokenResponseInboundBatch, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<
               ::private_verification_tokens::TokenResponseInboundBatch,
               ::private_verification_tokens::UnframeError>,
           ::private_verification_tokens::TokenResponseInboundBatch, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>&
rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::UnframeError, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::Result(rs_std::unexpected<F>&&
                                                             err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::UnframeError, F>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>&
rs_std::Result<::private_verification_tokens::TokenResponseInboundBatch,
               ::private_verification_tokens::UnframeError>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenResponseInboundBatch,
    ::private_verification_tokens::UnframeError>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenState_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020TokenState_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<::private_verification_tokens::TokenState,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<::private_verification_tokens::TokenState,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::private_verification_tokens::TokenState,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::TokenState,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10TokenStateNtBF_u10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<::private_verification_tokens::TokenState,
                             ::private_verification_tokens::AthmStatus>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<::private_verification_tokens::TokenState,
                             ::private_verification_tokens::AthmStatus>>);
inline rs_std::Result<::private_verification_tokens::TokenState,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<::private_verification_tokens::TokenState,
                             ::private_verification_tokens::AthmStatus>>);
inline constexpr ::std::uint8_t rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint8_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::TokenState,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::TokenState, U>)
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::private_verification_tokens::TokenState,
                          ::private_verification_tokens::AthmStatus>,
           ::private_verification_tokens::TokenState, U>)
inline constexpr rs_std::Result<::private_verification_tokens::TokenState,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<::private_verification_tokens::TokenState,
                                ::private_verification_tokens::AthmStatus>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<::private_verification_tokens::TokenState,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<::private_verification_tokens::TokenState,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::private_verification_tokens::TokenState,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIBE_uhEENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint64_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                          ::private_verification_tokens::AthmStatus>,
           rs_std::Vec<rs_std::Vec<::std::uint8_t>>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                          ::private_verification_tokens::AthmStatus>,
           rs_std::Vec<rs_std::Vec<::std::uint8_t>>, U>)
inline constexpr rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                                ::private_verification_tokens::AthmStatus>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus> const&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus>&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::private_verification_tokens::AthmStatus> const&);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::private_verification_tokens::AthmStatus>::
    Result(const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::private_verification_tokens::AthmStatus>&
rs_std::Result<rs_std::Vec<::std::uint8_t>,
               ::private_verification_tokens::AthmStatus>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCs9hnZmfAikOK_u17athm_uffi_u2b5bb12219privacy_upass_ucommon10AthmStatusENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::private_verification_tokens::AthmStatus>::
    Result(::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::set_tag(::std::uint64_t
                                                            tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::private_verification_tokens::AthmStatus>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::private_verification_tokens::AthmStatus>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::private_verification_tokens::AthmStatus>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<rs_std::Vec<::std::uint8_t>,
               ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::Result(::std::in_place_t ip,
                                                       Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::private_verification_tokens::AthmStatus>::Result(rs_std::unexpect_t u,
                                                       Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020private_uverification_utokens_x00000020_x0000003a_x0000003a_x00000020AthmStatus_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<rs_std::Result<
                  ::std::uint8_t, ::private_verification_tokens::AthmStatus>>);
static_assert(::std::is_trivially_copy_assignable_v<rs_std::Result<
                  ::std::uint8_t, ::private_verification_tokens::AthmStatus>>);
static_assert(::std::is_trivially_move_constructible_v<rs_std::Result<
                  ::std::uint8_t, ::private_verification_tokens::AthmStatus>>);
static_assert(::std::is_trivially_move_assignable_v<rs_std::Result<
                  ::std::uint8_t, ::private_verification_tokens::AthmStatus>>);
inline rs_std::
    Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::Result(
        ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<rs_std::Result<
                  ::std::uint8_t, ::private_verification_tokens::AthmStatus>>);
inline constexpr ::std::uint8_t
rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::
    Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::set_tag(
        ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint8_t,
                          ::private_verification_tokens::AthmStatus>,
           ::std::uint8_t, U>)
inline constexpr rs_std::Result<
    ::std::uint8_t,
    ::private_verification_tokens::AthmStatus>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::std::uint8_t,
                          ::private_verification_tokens::AthmStatus>,
           ::std::uint8_t, U>)
inline constexpr rs_std::Result<::std::uint8_t,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::
operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::
    Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::Result(
        rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<
           ::private_verification_tokens::AthmStatus, F>)
inline constexpr rs_std::Result<::std::uint8_t,
                                ::private_verification_tokens::AthmStatus>&
rs_std::Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<::std::uint8_t, ::private_verification_tokens::AthmStatus>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<rs_std::Vec<::std::uint8_t>> const&,
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<rs_std::Vec<::std::uint8_t>>&,
    rs_std::Vec<rs_std::Vec<::std::uint8_t>> const&);
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<rs_std::Vec<::std::uint8_t>>&
rs_std::Vec<rs_std::Vec<::std::uint8_t>>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecIB3_uhEENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_6c184f3aa94e8a6c__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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

#pragma clang diagnostic pop
