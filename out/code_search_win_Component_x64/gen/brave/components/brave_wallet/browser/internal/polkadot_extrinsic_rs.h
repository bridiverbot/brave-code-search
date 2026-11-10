// Automatically @generated C++ bindings for the following Rust crate:
// polkadot_extrinsic
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
#include <optional>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/check_no_mutable_aliasing.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/rs_std/option.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace brave_wallet {

//  Signed extension identifiers, zero-padded. A separate type because
//  `Default` can't be derived for `[u8; 64]`, and every field needs `Default`
//  for Crubit to emit `CxxPolkadotChainMetadata` as a C++ aggregate.
//
// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=37
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: polkadot_extrinsic :: SignedExtensions") alignas(1)
    [[clang::trivial_abi]] SignedExtensions final {
 public:
  // Type is not a C++ aggregate: Type has a manual `Default` implementation

  // Default::default
  SignedExtensions();

  // No custom `Drop` impl and no custom "drop glue" required
  ~SignedExtensions() = default;
  SignedExtensions(SignedExtensions&&) = default;
  SignedExtensions& operator=(SignedExtensions&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  SignedExtensions(const SignedExtensions&) = default;
  SignedExtensions& operator=(const SignedExtensions&) = default;
  SignedExtensions(::crubit::UnsafeRelocateTag, SignedExtensions&& value);

  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=36
  bool operator==(::brave_wallet::SignedExtensions const& other) const;

  union {
    // Generated from:
    // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=38
    ::std::array<::std::uint8_t, 64> bytes;
  };

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=51
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: polkadot_extrinsic :: CxxPolkadotChainMetadata") alignas(4)
    [[clang::trivial_abi]] CxxPolkadotChainMetadata final {
 public:
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=50
  bool operator==(::brave_wallet::CxxPolkadotChainMetadata const& other) const;

  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=52
  ::std::uint8_t system_pallet_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=53
  ::std::uint8_t balances_pallet_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=54
  ::std::uint8_t transaction_payment_pallet_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=55
  ::std::uint8_t transfer_allow_death_call_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=56
  ::std::uint8_t transfer_keep_alive_call_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=57
  ::std::uint8_t transfer_all_call_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=58
  ::std::uint8_t assets_pallet_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=59
  ::std::uint8_t assets_transfer_all_call_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=60
  ::std::uint8_t assets_transfer_keep_alive_call_index{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=61
  bool has_assets_pallet{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=62
  ::std::uint16_t ss58_prefix{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=63
  ::std::uint32_t spec_version{};
  // Generated from:
  // ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=64
  ::brave_wallet::SignedExtensions signed_extensions{};

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=579
rs_std::Vec<::std::uint8_t> compact_scale_encode_u32(::std::uint32_t x);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=392
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
generate_assets_extrinsic_signature_payload(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::uint32_t sender_nonce,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 32> const& recipient,
    ::std::uint32_t asset_id, ::std::uint32_t spec_version,
    ::std::uint32_t transaction_version, ::std::uint32_t block_number,
    ::std::array<::std::uint8_t, 32> const& genesis_hash,
    ::std::array<::std::uint8_t, 32> const& block_hash);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=364
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
generate_extrinsic_signature_payload(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::uint32_t sender_nonce,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 32> const& recipient,
    ::std::uint32_t spec_version, ::std::uint32_t transaction_version,
    ::std::uint32_t block_number,
    ::std::array<::std::uint8_t, 32> const& genesis_hash,
    ::std::array<::std::uint8_t, 32> const& block_hash);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=515
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
make_signed_asset_transfer_extrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 32> const& sender_pubkey,
    ::std::array<::std::uint8_t, 32> const& recipient_pubkey,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 64> const& signature,
    ::std::uint32_t block_number, ::std::uint32_t sender_nonce,
    ::std::uint32_t asset_id);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=491
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
make_signed_extrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 32> const& sender_pubkey,
    ::std::array<::std::uint8_t, 32> const& recipient_pubkey,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 64> const& signature,
    ::std::uint32_t block_number, ::std::uint32_t sender_nonce);

}  // namespace brave_wallet

namespace brave_wallet {

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_chain_metadata.rs;l=571
rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
               ::rs::alloc::string::String>
parse_chain_metadata_from_scale(
    rs_std::SliceRef<const ::std::uint8_t> metadata_bytes);

}  // namespace brave_wallet

namespace brave_wallet {

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=548
rs_std::Option<::std::array<::std::uint8_t, 16>> parse_fee_info(
    rs_std::SliceRef<const ::std::uint8_t> input);

//  Mortality tells the blockchain what range of blocks an extrinsic is valid
//  for. Validators use the period and phase to find the block hash included in
//  the payload, which they use to determine signature validity (and thus
//  transaction validity).
//
//  We use a period of 64, as send thransactions should be of "high priority"
//  and thus subject to smaller mortality windows, i.e. we don't want an
//  extrinsic sitting in the memory pool while the world outside it continues to
//  change.
//
//  For information on how mortality is encoded, see the documentation at:
//  https://spec.polkadot.network/id-extrinsics#id-mortality
//
//  Reference implementation:
//  https://github.com/polkadot-js/api/blob/9f6a9c53e6822d20e8556649c9b68d31cffc465d/packages/types/src/extrinsic/ExtrinsicEra.ts#L179-L204
//
// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=118
::std::array<::std::uint8_t, 2> scale_encode_mortality(::std::uint32_t number,
                                                       ::std::uint32_t period);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=583
rs_std::Vec<::std::uint8_t> scale_encode_string(
    rs_std::SliceRef<const ::std::uint8_t> value);

// Generated from:
// ../../brave/components/brave_wallet/browser/internal/polkadot_extrinsic.rs;l=587
bool was_extrinsic_successful(
    rs_std::SliceRef<const ::std::uint8_t> events,
    ::std::uint32_t extrinsic_idx,
    ::std::array<::std::uint8_t, 32> const& sender,
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 16>& actual_fee);

}  // namespace brave_wallet

// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020array_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x0000002016_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020array_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x0000002016_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(1)
    CRUBIT_INTERNAL_RUST_TYPE("core :: option :: Option < [u8 ; 16] >")
        rs_std::Option<::std::array<::std::uint8_t, 16>>
    : public rs_std::OptionBase<
          rs_std::Option<::std::array<::std::uint8_t, 16>>,
          ::std::array<::std::uint8_t, 16>> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<::std::array<::std::uint8_t, 16>>,
                         ::std::array<::std::uint8_t, 16>>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::std::array<::std::uint8_t, 16>, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::std::array<::std::uint8_t, 16>, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(
        rs_std::OptionFromStdOptional<::std::array<::std::uint8_t, 16>, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(
        rs_std::OptionFromStdOptional<::std::array<::std::uint8_t, 16>, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint8_t;
  static constexpr tag_type kNoneVal = 0;
  ::std::array<::std::uint8_t, 16>* some_ptr() noexcept {
    return reinterpret_cast<::std::array<::std::uint8_t, 16>*>(storage_ + 1);
  }
  ::std::array<::std::uint8_t, 16> const* some_const_ptr() const noexcept {
    return reinterpret_cast<::std::array<::std::uint8_t, 16> const*>(storage_ +
                                                                     1);
  }
  void set_some_tag() noexcept { set_tag(1); }
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char storage_[17];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020brave_uwallet_x00000020_x0000003a_x0000003a_x00000020CxxPolkadotChainMetadata_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020brave_uwallet_x00000020_x0000003a_x0000003a_x00000020CxxPolkadotChainMetadata_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: polkadot_extrinsic :: "
    "CxxPolkadotChainMetadata , :: alloc :: string :: String >")
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String>
    : public rs_std::ResultBase<
          rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                         ::rs::alloc::string::String>,
          ::brave_wallet::CxxPolkadotChainMetadata,
          ::rs::alloc::string::String> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                 ::rs::alloc::string::String>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                     ::rs::alloc::string::String>,
      ::brave_wallet::CxxPolkadotChainMetadata, ::rs::alloc::string::String>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::brave_wallet::CxxPolkadotChainMetadata, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, ::brave_wallet::CxxPolkadotChainMetadata, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != 2; }
  ::brave_wallet::CxxPolkadotChainMetadata* ok_ptr() noexcept {
    return reinterpret_cast<::brave_wallet::CxxPolkadotChainMetadata*>(
        __storage);
  }
  ::brave_wallet::CxxPolkadotChainMetadata const* ok_const_ptr()
      const noexcept {
    return reinterpret_cast<::brave_wallet::CxxPolkadotChainMetadata const*>(
        __storage);
  }
  ::rs::alloc::string::String* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::String*>(__storage + 16);
  }
  ::rs::alloc::string::String const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::String const*>(__storage + 16);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(2); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[80];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: alloc :: vec :: Vec < u8 > , :: alloc :: "
    "string :: String >")
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
    : public rs_std::ResultBase<rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                               ::rs::alloc::string::String>,
                                rs_std::Vec<::std::uint8_t>,
                                ::rs::alloc::string::String> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>&
  operator=(const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>,
      rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>;
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
        rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(
        rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
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
  ::rs::alloc::string::String* err_ptr() noexcept {
    return reinterpret_cast<::rs::alloc::string::String*>(__storage + 8);
  }
  ::rs::alloc::string::String const* err_const_ptr() const noexcept {
    return reinterpret_cast<::rs::alloc::string::String const*>(__storage + 8);
  }
  void set_ok_tag() noexcept { set_tag(0); }
  void set_err_tag() noexcept { set_tag(1); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[32];
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

namespace brave_wallet {

static_assert(
    sizeof(::brave_wallet::CxxPolkadotChainMetadata) == 80,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::brave_wallet::CxxPolkadotChainMetadata) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<
              ::brave_wallet::CxxPolkadotChainMetadata>);
static_assert(::std::is_trivially_move_constructible_v<
              ::brave_wallet::CxxPolkadotChainMetadata>);
static_assert(::std::is_trivially_move_assignable_v<
              ::brave_wallet::CxxPolkadotChainMetadata>);
static_assert(::std::is_trivially_copy_constructible_v<
              ::brave_wallet::CxxPolkadotChainMetadata>);
static_assert(::std::is_trivially_copy_assignable_v<
              ::brave_wallet::CxxPolkadotChainMetadata>);
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_be78ea0f89e74025__uRNvXs9_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u24CxxPolkadotChainMetadataNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::brave_wallet::CxxPolkadotChainMetadata const&,
    ::brave_wallet::CxxPolkadotChainMetadata const&);
}
inline bool(CxxPolkadotChainMetadata::operator==)(
    ::brave_wallet::CxxPolkadotChainMetadata const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvXs9_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u24CxxPolkadotChainMetadataNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::brave_wallet::CxxPolkadotChainMetadata::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::brave_wallet::CxxPolkadotChainMetadata;
  static_assert(0 == offsetof(__crubit_assert_type, system_pallet_index));
  static_assert(1 == offsetof(__crubit_assert_type, balances_pallet_index));
  static_assert(
      2 == offsetof(__crubit_assert_type, transaction_payment_pallet_index));
  static_assert(
      3 == offsetof(__crubit_assert_type, transfer_allow_death_call_index));
  static_assert(4 ==
                offsetof(__crubit_assert_type, transfer_keep_alive_call_index));
  static_assert(5 == offsetof(__crubit_assert_type, transfer_all_call_index));
  static_assert(6 == offsetof(__crubit_assert_type, assets_pallet_index));
  static_assert(7 ==
                offsetof(__crubit_assert_type, assets_transfer_all_call_index));
  static_assert(8 == offsetof(__crubit_assert_type,
                              assets_transfer_keep_alive_call_index));
  static_assert(9 == offsetof(__crubit_assert_type, has_assets_pallet));
  static_assert(10 == offsetof(__crubit_assert_type, ss58_prefix));
  static_assert(12 == offsetof(__crubit_assert_type, spec_version));
  static_assert(16 == offsetof(__crubit_assert_type, signed_extensions));
}
static_assert(
    sizeof(::brave_wallet::SignedExtensions) == 64,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::brave_wallet::SignedExtensions) == 1,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYNtCsglSxyCxUa9Z_u18polkadot_uextrinsic16SignedExtensionsNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::brave_wallet::SignedExtensions* __ret_ptr);
}
inline ::brave_wallet::SignedExtensions::SignedExtensions() {
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvYNtCsglSxyCxUa9Z_u18polkadot_uextrinsic16SignedExtensionsNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
static_assert(
    ::std::is_trivially_destructible_v<::brave_wallet::SignedExtensions>);
static_assert(
    ::std::is_trivially_move_constructible_v<::brave_wallet::SignedExtensions>);
static_assert(
    ::std::is_trivially_move_assignable_v<::brave_wallet::SignedExtensions>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::brave_wallet::SignedExtensions>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::brave_wallet::SignedExtensions>);
inline ::brave_wallet::SignedExtensions::SignedExtensions(
    ::crubit::UnsafeRelocateTag, SignedExtensions&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_be78ea0f89e74025__uRNvXs4_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u16SignedExtensionsNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::brave_wallet::SignedExtensions const&,
    ::brave_wallet::SignedExtensions const&);
}
inline bool(SignedExtensions::operator==)(
    ::brave_wallet::SignedExtensions const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvXs4_uCsglSxyCxUa9Z_u18polkadot_uextrinsicNtB5_u16SignedExtensionsNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::brave_wallet::SignedExtensions::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::brave_wallet::SignedExtensions;
  static_assert(0 == offsetof(__crubit_assert_type, bytes));
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24compact_uscale_uencode_uu32(
    ::std::uint32_t, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> compact_scale_encode_u32(::std::uint32_t x) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24compact_uscale_uencode_uu32(
          x, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic43generate_uassets_uextrinsic_usignature_upayload(
    ::brave_wallet::CxxPolkadotChainMetadata const&, ::std::uint32_t,
    ::std::array<::std::uint8_t, 16> const&, bool,
    ::std::array<::std::uint8_t, 32> const&, ::std::uint32_t, ::std::uint32_t,
    ::std::uint32_t, ::std::uint32_t, ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 32> const&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
generate_assets_extrinsic_signature_payload(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::uint32_t sender_nonce,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 32> const& recipient,
    ::std::uint32_t asset_id, ::std::uint32_t spec_version,
    ::std::uint32_t transaction_version, ::std::uint32_t block_number,
    ::std::array<::std::uint8_t, 32> const& genesis_hash,
    ::std::array<::std::uint8_t, 32> const& block_hash) {
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic43generate_uassets_uextrinsic_usignature_upayload(
          chain_metadata, sender_nonce, send_amount_bytes, transfer_all,
          recipient, asset_id, spec_version, transaction_version, block_number,
          genesis_hash, block_hash, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36generate_uextrinsic_usignature_upayload(
    ::brave_wallet::CxxPolkadotChainMetadata const&, ::std::uint32_t,
    ::std::array<::std::uint8_t, 16> const&, bool,
    ::std::array<::std::uint8_t, 32> const&, ::std::uint32_t, ::std::uint32_t,
    ::std::uint32_t, ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 32> const&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
generate_extrinsic_signature_payload(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::uint32_t sender_nonce,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 32> const& recipient,
    ::std::uint32_t spec_version, ::std::uint32_t transaction_version,
    ::std::uint32_t block_number,
    ::std::array<::std::uint8_t, 32> const& genesis_hash,
    ::std::array<::std::uint8_t, 32> const& block_hash) {
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36generate_uextrinsic_usignature_upayload(
          chain_metadata, sender_nonce, send_amount_bytes, transfer_all,
          recipient, spec_version, transaction_version, block_number,
          genesis_hash, block_hash, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36make_usigned_uasset_utransfer_uextrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const&,
    ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 16> const&, bool,
    ::std::array<::std::uint8_t, 64> const&, ::std::uint32_t, ::std::uint32_t,
    ::std::uint32_t,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
make_signed_asset_transfer_extrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 32> const& sender_pubkey,
    ::std::array<::std::uint8_t, 32> const& recipient_pubkey,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 64> const& signature,
    ::std::uint32_t block_number, ::std::uint32_t sender_nonce,
    ::std::uint32_t asset_id) {
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic36make_usigned_uasset_utransfer_uextrinsic(
          chain_metadata, sender_pubkey, recipient_pubkey, send_amount_bytes,
          transfer_all, signature, block_number, sender_nonce, asset_id,
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic21make_usigned_uextrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const&,
    ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 32> const&,
    ::std::array<::std::uint8_t, 16> const&, bool,
    ::std::array<::std::uint8_t, 64> const&, ::std::uint32_t, ::std::uint32_t,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>
make_signed_extrinsic(
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 32> const& sender_pubkey,
    ::std::array<::std::uint8_t, 32> const& recipient_pubkey,
    ::std::array<::std::uint8_t, 16> const& send_amount_bytes,
    bool transfer_all, ::std::array<::std::uint8_t, 64> const& signature,
    ::std::uint32_t block_number, ::std::uint32_t sender_nonce) {
  crubit::Slot<
      rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic21make_usigned_uextrinsic(
          chain_metadata, sender_pubkey, recipient_pubkey, send_amount_bytes,
          transfer_all, signature, block_number, sender_nonce,
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace brave_wallet

namespace brave_wallet {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvNtCsglSxyCxUa9Z_u18polkadot_uextrinsic23polkadot_uchain_umetadata31parse_uchain_umetadata_ufrom_uscale(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String>* __ret_ptr);
}
inline rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                      ::rs::alloc::string::String>
parse_chain_metadata_from_scale(
    rs_std::SliceRef<const ::std::uint8_t> metadata_bytes) {
  crubit::Slot<rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                              ::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvNtCsglSxyCxUa9Z_u18polkadot_uextrinsic23polkadot_uchain_umetadata31parse_uchain_umetadata_ufrom_uscale(
          &metadata_bytes, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace brave_wallet

namespace brave_wallet {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic14parse_ufee_uinfo(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Option<::std::array<::std::uint8_t, 16>>* __ret_ptr);
}
inline rs_std::Option<::std::array<::std::uint8_t, 16>> parse_fee_info(
    rs_std::SliceRef<const ::std::uint8_t> input) {
  crubit::Slot<rs_std::Option<::std::array<::std::uint8_t, 16>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic14parse_ufee_uinfo(
          &input, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic22scale_uencode_umortality(
    ::std::uint32_t, ::std::uint32_t, void* __ret_ptr);
}
inline ::std::array<::std::uint8_t, 2> scale_encode_mortality(
    ::std::uint32_t number, ::std::uint32_t period) {
  crubit::Slot<::std::array<::std::uint8_t, 2>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic22scale_uencode_umortality(
          number, period, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic19scale_uencode_ustring(
    rs_std::SliceRef<const ::std::uint8_t>*,
    rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> scale_encode_string(
    rs_std::SliceRef<const ::std::uint8_t> value) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic19scale_uencode_ustring(
          &value, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24was_uextrinsic_usuccessful(
    rs_std::SliceRef<const ::std::uint8_t>*, ::std::uint32_t,
    ::std::array<::std::uint8_t, 32> const&,
    ::brave_wallet::CxxPolkadotChainMetadata const&,
    ::std::array<::std::uint8_t, 16>&);
}
inline bool was_extrinsic_successful(
    rs_std::SliceRef<const ::std::uint8_t> events,
    ::std::uint32_t extrinsic_idx,
    ::std::array<::std::uint8_t, 32> const& sender,
    ::brave_wallet::CxxPolkadotChainMetadata const& chain_metadata,
    ::std::array<::std::uint8_t, 16>& actual_fee) {
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::std::array<::std::uint8_t, 16>&>(
          actual_fee),
      crubit::internal::AsPtrDatas<
          rs_std::SliceRef<const ::std::uint8_t>,
          ::std::array<::std::uint8_t, 32> const&,
          ::brave_wallet::CxxPolkadotChainMetadata const&>(events, sender,
                                                           chain_metadata));
  return __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvCsglSxyCxUa9Z_u18polkadot_uextrinsic24was_uextrinsic_usuccessful(
          &events, extrinsic_idx, sender, chain_metadata, actual_fee);
}

}  // namespace brave_wallet

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020array_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x0000002016_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020array_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000002c_x0000002016_x00000020_x0000003e_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Option<::std::array<::std::uint8_t, 16>>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Option<::std::array<::std::uint8_t, 16>>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Option<::std::array<::std::uint8_t, 16>>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Option<::std::array<::std::uint8_t, 16>>>);
inline rs_std::Option<::std::array<::std::uint8_t, 16>>::Option(
    ::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Option<::std::array<::std::uint8_t, 16>>>);
inline constexpr ::std::uint8_t
rs_std::Option<::std::array<::std::uint8_t, 16>>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Option<::std::array<::std::uint8_t, 16>>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<::std::array<::std::uint8_t, 16>>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<::std::array<::std::uint8_t, 16>>&
rs_std::Option<::std::array<::std::uint8_t, 16>>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::std::array<::std::uint8_t, 16>>,
           ::std::array<::std::uint8_t, 16>, U>)
inline rs_std::Option<::std::array<::std::uint8_t, 16>>::Option(
    U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::std::array<::std::uint8_t, 16>>,
           ::std::array<::std::uint8_t, 16>, U>)
inline rs_std::Option<::std::array<::std::uint8_t, 16>>&
rs_std::Option<::std::array<::std::uint8_t, 16>>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::array<::std::uint8_t, 16>, Opt>)
inline rs_std::Option<::std::array<::std::uint8_t, 16>>::Option(
    Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::array<::std::uint8_t, 16>, Opt>)
inline rs_std::Option<::std::array<::std::uint8_t, 16>>&
rs_std::Option<::std::array<::std::uint8_t, 16>>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<::std::array<::std::uint8_t, 16>>::Option(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020brave_uwallet_x00000020_x0000003a_x0000003a_x00000020CxxPolkadotChainMetadata_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020brave_uwallet_x00000020_x0000003a_x0000003a_x00000020CxxPolkadotChainMetadata_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String> const&,
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String>&,
    rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                   ::rs::alloc::string::String> const&);
}
inline rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                      ::rs::alloc::string::String>::Result(const Result&
                                                               other) noexcept {
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                      ::rs::alloc::string::String>&
rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
               ::rs::alloc::string::String>::operator=(const Result&
                                                           other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtCsglSxyCxUa9Z_u18polkadot_uextrinsic24CxxPolkadotChainMetadataNtNtCs4qcdXyRXuHP_u5alloc6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::Result(::crubit::UnsafeRelocateTag,
                                         Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                      ::rs::alloc::string::String>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint8_t
rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
               ::rs::alloc::string::String>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[9 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::set_tag(::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[9 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                          ::rs::alloc::string::String>,
           ::brave_wallet::CxxPolkadotChainMetadata, U>)
inline constexpr rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                          ::rs::alloc::string::String>,
           ::brave_wallet::CxxPolkadotChainMetadata, U>)
inline constexpr rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                                ::rs::alloc::string::String>&
rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
               ::rs::alloc::string::String>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
inline constexpr rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
inline constexpr rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
                                ::rs::alloc::string::String>&
rs_std::Result<::brave_wallet::CxxPolkadotChainMetadata,
               ::rs::alloc::string::String>::operator=(rs_std::unexpected<F>&&
                                                           err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::Result(::std::in_place_t ip,
                                         Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::brave_wallet::CxxPolkadotChainMetadata,
    ::rs::alloc::string::String>::Result(rs_std::unexpect_t u,
                                         Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::rs::alloc::string::String> const&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>*
        __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>&,
    rs_std::Result<rs_std::Vec<::std::uint8_t>,
                   ::rs::alloc::string::String> const&);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::rs::alloc::string::String>::Result(const Result&
                                                               other) noexcept {
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>&
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::
operator=(const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtBI_u6string6StringENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::
    Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::Result(
        ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<rs_std::Vec<::std::uint8_t>,
                      ::rs::alloc::string::String>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::tag()
    const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::rs::alloc::string::String>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::rs::alloc::string::String>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::rs::alloc::string::String>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::Vec<::std::uint8_t>,
                          ::rs::alloc::string::String>,
           rs_std::Vec<::std::uint8_t>, U>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::rs::alloc::string::String>&
rs_std::Result<rs_std::Vec<::std::uint8_t>,
               ::rs::alloc::string::String>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
inline constexpr rs_std::Result<
    rs_std::Vec<::std::uint8_t>,
    ::rs::alloc::string::String>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(
      rs_std::ResultUnexpectedConstructible<::rs::alloc::string::String, F>)
inline constexpr rs_std::Result<rs_std::Vec<::std::uint8_t>,
                                ::rs::alloc::string::String>&
rs_std::Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::Result(
        ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::
    Result<rs_std::Vec<::std::uint8_t>, ::rs::alloc::string::String>::Result(
        rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_be78ea0f89e74025__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
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
