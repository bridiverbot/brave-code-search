// Automatically @generated C++ bindings for the following Rust crate:
// ift_patcher_rs_1bef5ad5
// Features: always_specialize_generics_in_cpp_api_from_rust

#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <array>
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
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/str_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace ift_patcher_rs {
struct IftSubsetDefinition;
//  Status code returned when applying patches to an Incremental Font
//  Transfer (IFT) patcher.
//
// Generated from:
// ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=21
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: ift_patcher_rs_1bef5ad5 :: IftApplyStatus") alignas(4)
    [[clang::trivial_abi]] IftApplyStatus final {
 public:
  // `ift_patcher_rs_1bef5ad5::IftApplyStatus` doesn't implement the `Default`
  // trait
  IftApplyStatus() = delete;

  //  All available patches were applied successfully.
  //
  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=23
  static constexpr IftApplyStatus MakeSuccess();

  //  The font data could not be parsed as a valid OpenType font.
  //
  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=25
  static constexpr IftApplyStatus MakeInvalidFont();

  //  Selecting the next patch group failed.
  //
  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=27
  static constexpr IftApplyStatus MakePatchGroupError();

  //  Applying the patch payload failed.
  //
  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=29
  static constexpr IftApplyStatus MakePatchError();

  //  Required patch data has not been provided.
  //
  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=31
  static constexpr IftApplyStatus MakeMissingPatches();

  // No custom `Drop` impl and no custom "drop glue" required
  ~IftApplyStatus() = default;
  IftApplyStatus(IftApplyStatus&&) = default;
  IftApplyStatus& operator=(IftApplyStatus&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  IftApplyStatus(const IftApplyStatus&) = default;
  IftApplyStatus& operator=(const IftApplyStatus&) = default;
  IftApplyStatus(::crubit::UnsafeRelocateTag, IftApplyStatus&& value);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=19
  bool operator==(::ift_patcher_rs::IftApplyStatus const& other) const;

  // Variant Success has no size, so no struct is generated.

  // Variant InvalidFont has no size, so no struct is generated.

  // Variant PatchGroupError has no size, so no struct is generated.

  // Variant PatchError has no size, so no struct is generated.

  // Variant MissingPatches has no size, so no struct is generated.

  enum class Tag : ::std::uint32_t {
    Success = 0,
    InvalidFont = 1,
    PatchGroupError = 2,
    PatchError = 3,
    MissingPatches = 4,
  };

 public:
  Tag tag;

 private:
  struct PrivateTagCtorTag {};
  constexpr IftApplyStatus(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=79
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: ift_patcher_rs_1bef5ad5 :: IftPatcher") alignas(8)
    [[clang::trivial_abi]] IftPatcher final {
 public:
  // Default::default
  IftPatcher();

  // Drop::drop
  ~IftPatcher();

  IftPatcher(IftPatcher&&) noexcept;
  ::ift_patcher_rs::IftPatcher& operator=(IftPatcher&&) noexcept;

  // `ift_patcher_rs_1bef5ad5::IftPatcher` doesn't implement the `Clone` trait
  IftPatcher(const IftPatcher&) = delete;
  IftPatcher& operator=(const IftPatcher&) = delete;
  IftPatcher(::crubit::UnsafeRelocateTag, IftPatcher&& value);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=110
  static bool is_ift(rs_std::SliceRef<const ::std::uint8_t> font_data);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=117
  rs_std::SliceRef<const ::std::uint8_t> font_data() const& $(__anon1)
      CRUBIT_LIFETIME_BOUND;

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=121
  bool rendered_font_requires_patches(
      ::ift_patcher_rs::IftSubsetDefinition const& subset) const;

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=125
  bool has_unrendered_changes() const;

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=129
  void mark_rendered();

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=136
  rs_std::Vec<::rs::alloc::string::String> request_patches(
      ::ift_patcher_rs::IftSubsetDefinition const& subset);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=159
  void add_patch_data(rs_std::StrRef patch,
                      rs_std::SliceRef<const ::std::uint8_t> data);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=165
  ::ift_patcher_rs::IftApplyStatus apply_patches(
      ::ift_patcher_rs::IftSubsetDefinition const& subset);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=192
  bool has_pending_patch_requests() const;

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=97
  explicit IftPatcher(rs_std::SliceRef<const ::std::uint8_t> value);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> font_data_;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 96> rendered_patch_map;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 48> patch_data;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 48> requested;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 8> has_unrendered_changes_;

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=35
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: ift_patcher_rs_1bef5ad5 :: IftSubsetDefinition") alignas(8)
    [[clang::trivial_abi]] IftSubsetDefinition final {
 public:
  // Default::default
  IftSubsetDefinition();

  // Drop::drop
  ~IftSubsetDefinition();

  IftSubsetDefinition(IftSubsetDefinition&&) noexcept;
  ::ift_patcher_rs::IftSubsetDefinition& operator=(
      IftSubsetDefinition&&) noexcept;

  // Clone::clone
  IftSubsetDefinition(const IftSubsetDefinition&) noexcept;

  // Clone::clone_from
  ::ift_patcher_rs::IftSubsetDefinition& operator=(
      const IftSubsetDefinition&) noexcept;

  IftSubsetDefinition(::crubit::UnsafeRelocateTag, IftSubsetDefinition&& value);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=38
  bool add_codepoint(::std::uint32_t codepoint);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=42
  bool add_feature_tag(::std::uint32_t tag);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=46
  bool add_design_space(::std::uint32_t tag, double min_val, double max_val);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=61
  void union_(::ift_patcher_rs::IftSubsetDefinition const& other);

  // Generated from:
  // ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=65
  void clear();

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 152> __field0;

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace ift_patcher_rs

template <>
struct rs_std::impl<::ift_patcher_rs::IftApplyStatus, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::ift_patcher_rs::IftApplyStatus, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function
  // `<ift_patcher_rs_1bef5ad5::IftApplyStatus as std::fmt::Debug>::fmt` defined
  // at ../../third_party/blink/renderer/platform/fonts/ift/ift_patcher.rs;l=19:
  // Error formatting function return type `std::result::Result<(),
  // std::fmt::Error>`: Failed to format type for the definition of
  // `std::fmt::Error`: Zero-sized types (ZSTs) are not supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: alloc :: string :: String >")
    rs_std::Vec<::rs::alloc::string::String>
    : public rs_std::VecBase<::rs::alloc::string::String> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::rs::alloc::string::String>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::rs::alloc::string::String>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::rs::alloc::string::String>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

namespace ift_patcher_rs {

static_assert(
    sizeof(::ift_patcher_rs::IftApplyStatus) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::ift_patcher_rs::IftApplyStatus) == 4,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::ift_patcher_rs::IftApplyStatus(
    ::ift_patcher_rs::IftApplyStatus::MakeSuccess)() {
  return IftApplyStatus(PrivateTagCtorTag{}, Tag{INT64_C(0)});
}

// `static` constructor
inline constexpr ::ift_patcher_rs::IftApplyStatus(
    ::ift_patcher_rs::IftApplyStatus::MakeInvalidFont)() {
  return IftApplyStatus(PrivateTagCtorTag{}, Tag{INT64_C(1)});
}

// `static` constructor
inline constexpr ::ift_patcher_rs::IftApplyStatus(
    ::ift_patcher_rs::IftApplyStatus::MakePatchGroupError)() {
  return IftApplyStatus(PrivateTagCtorTag{}, Tag{INT64_C(2)});
}

// `static` constructor
inline constexpr ::ift_patcher_rs::IftApplyStatus(
    ::ift_patcher_rs::IftApplyStatus::MakePatchError)() {
  return IftApplyStatus(PrivateTagCtorTag{}, Tag{INT64_C(3)});
}

// `static` constructor
inline constexpr ::ift_patcher_rs::IftApplyStatus(
    ::ift_patcher_rs::IftApplyStatus::MakeMissingPatches)() {
  return IftApplyStatus(PrivateTagCtorTag{}, Tag{INT64_C(4)});
}
static_assert(
    ::std::is_trivially_destructible_v<::ift_patcher_rs::IftApplyStatus>);
static_assert(
    ::std::is_trivially_move_constructible_v<::ift_patcher_rs::IftApplyStatus>);
static_assert(
    ::std::is_trivially_move_assignable_v<::ift_patcher_rs::IftApplyStatus>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::ift_patcher_rs::IftApplyStatus>);
static_assert(
    ::std::is_trivially_copy_assignable_v<::ift_patcher_rs::IftApplyStatus>);
inline ::ift_patcher_rs::IftApplyStatus::IftApplyStatus(
    ::crubit::UnsafeRelocateTag, IftApplyStatus&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvXs6_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u14IftApplyStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftApplyStatus const&,
    ::ift_patcher_rs::IftApplyStatus const&);
}
inline bool(IftApplyStatus::operator==)(
    ::ift_patcher_rs::IftApplyStatus const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvXs6_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u14IftApplyStatusNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::ift_patcher_rs::IftApplyStatus::
    __crubit_field_offset_assertions() {}
static_assert(
    sizeof(::ift_patcher_rs::IftPatcher) == 224,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::ift_patcher_rs::IftPatcher) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftPatcher* __ret_ptr);
}
inline ::ift_patcher_rs::IftPatcher::IftPatcher() {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftPatcher&);
}
inline ::ift_patcher_rs::IftPatcher::~IftPatcher() {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::ift_patcher_rs::IftPatcher::IftPatcher(IftPatcher&& other) noexcept
    : IftPatcher() {
  *this = ::std::move(other);
}
inline ::ift_patcher_rs::IftPatcher& ::ift_patcher_rs::IftPatcher::operator=(
    IftPatcher&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
inline ::ift_patcher_rs::IftPatcher::IftPatcher(::crubit::UnsafeRelocateTag,
                                                IftPatcher&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher6is_uift(
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline bool(IftPatcher::is_ift)(
    rs_std::SliceRef<const ::std::uint8_t> font_data) {
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher6is_uift(
          &font_data);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher9font_udataCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftPatcher const&,
    rs_std::SliceRef<const ::std::uint8_t>* __ret_ptr);
}
inline rs_std::SliceRef<const ::std::uint8_t>(IftPatcher::font_data)() const& $(
    __anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::SliceRef<const ::std::uint8_t>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher9font_udataCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher30rendered_ufont_urequires_upatches(
    ::ift_patcher_rs::IftPatcher const&,
    ::ift_patcher_rs::IftSubsetDefinition const&);
}
inline bool(IftPatcher::rendered_font_requires_patches)(
    ::ift_patcher_rs::IftSubsetDefinition const& subset) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher30rendered_ufont_urequires_upatches(
          self, subset);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher22has_uunrendered_uchangesCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftPatcher const&);
}
inline bool(IftPatcher::has_unrendered_changes)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher22has_uunrendered_uchangesCsh9G4tFjYpDL_u8rust_uout(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13mark_urendered(
    ::ift_patcher_rs::IftPatcher&);
}
inline void(IftPatcher::mark_rendered)() {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13mark_urendered(
          self);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher15request_upatches(
    ::ift_patcher_rs::IftPatcher&, ::ift_patcher_rs::IftSubsetDefinition const&,
    rs_std::Vec<::rs::alloc::string::String>* __ret_ptr);
}
inline rs_std::Vec<::rs::alloc::string::String>(IftPatcher::request_patches)(
    ::ift_patcher_rs::IftSubsetDefinition const& subset) {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<::rs::alloc::string::String>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher15request_upatches(
          self, subset, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher14add_upatch_udata(
    ::ift_patcher_rs::IftPatcher&, rs_std::StrRef*,
    rs_std::SliceRef<const ::std::uint8_t>*);
}
inline void(IftPatcher::add_patch_data)(
    rs_std::StrRef patch, rs_std::SliceRef<const ::std::uint8_t> data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::ift_patcher_rs::IftPatcher&>(self),
      crubit::internal::AsPtrDatas<rs_std::StrRef,
                                   rs_std::SliceRef<const ::std::uint8_t>>(
          patch, data));
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher14add_upatch_udata(
          self, &patch, &data);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13apply_upatches(
    ::ift_patcher_rs::IftPatcher&, ::ift_patcher_rs::IftSubsetDefinition const&,
    ::ift_patcher_rs::IftApplyStatus* __ret_ptr);
}
inline ::ift_patcher_rs::IftApplyStatus(IftPatcher::apply_patches)(
    ::ift_patcher_rs::IftSubsetDefinition const& subset) {
  auto&& self = *this;
  crubit::Slot<::ift_patcher_rs::IftApplyStatus> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher13apply_upatches(
          self, subset, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher26has_upending_upatch_urequests(
    ::ift_patcher_rs::IftPatcher const&);
}
inline bool(IftPatcher::has_pending_patch_requests)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMs0_uCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB5_u10IftPatcher26has_upending_upatch_urequests(
          self);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherINtNtCsduaz3xaeU7_u4core7convert4FromRShE4fromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::ift_patcher_rs::IftPatcher* __ret_ptr);
}
inline ::ift_patcher_rs::IftPatcher::IftPatcher(
    rs_std::SliceRef<const ::std::uint8_t> value) {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad510IftPatcherINtNtCsduaz3xaeU7_u4core7convert4FromRShE4fromCsh9G4tFjYpDL_u8rust_uout(
          &value, this);
}
inline void ::ift_patcher_rs::IftPatcher::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::ift_patcher_rs::IftPatcher;
  static_assert(0 == offsetof(__crubit_assert_type, font_data_));
  static_assert(24 == offsetof(__crubit_assert_type, rendered_patch_map));
  static_assert(120 == offsetof(__crubit_assert_type, patch_data));
  static_assert(168 == offsetof(__crubit_assert_type, requested));
  static_assert(216 == offsetof(__crubit_assert_type, has_unrendered_changes_));
}
static_assert(
    sizeof(::ift_patcher_rs::IftSubsetDefinition) == 152,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::ift_patcher_rs::IftSubsetDefinition) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftSubsetDefinition* __ret_ptr);
}
inline ::ift_patcher_rs::IftSubsetDefinition::IftSubsetDefinition() {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftSubsetDefinition&);
}
inline ::ift_patcher_rs::IftSubsetDefinition::~IftSubsetDefinition() {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::ift_patcher_rs::IftSubsetDefinition::IftSubsetDefinition(
    IftSubsetDefinition&& other) noexcept
    : IftSubsetDefinition() {
  *this = ::std::move(other);
}
inline ::ift_patcher_rs::IftSubsetDefinition& ::ift_patcher_rs::
    IftSubsetDefinition::operator=(IftSubsetDefinition&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftSubsetDefinition const&,
    ::ift_patcher_rs::IftSubsetDefinition* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::ift_patcher_rs::IftSubsetDefinition&,
    ::ift_patcher_rs::IftSubsetDefinition const&);
}
inline ::ift_patcher_rs::IftSubsetDefinition::IftSubsetDefinition(
    const IftSubsetDefinition& other) noexcept {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::ift_patcher_rs::IftSubsetDefinition& ::ift_patcher_rs::
    IftSubsetDefinition::operator=(const IftSubsetDefinition& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_f66737df0e8d7d46__uRNvYNtCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad519IftSubsetDefinitionNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::ift_patcher_rs::IftSubsetDefinition::IftSubsetDefinition(
    ::crubit::UnsafeRelocateTag, IftSubsetDefinition&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition13add_ucodepoint(
    ::ift_patcher_rs::IftSubsetDefinition&, ::std::uint32_t);
}
inline bool(IftSubsetDefinition::add_codepoint)(::std::uint32_t codepoint) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition13add_ucodepoint(
          self, codepoint);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition15add_ufeature_utag(
    ::ift_patcher_rs::IftSubsetDefinition&, ::std::uint32_t);
}
inline bool(IftSubsetDefinition::add_feature_tag)(::std::uint32_t tag) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition15add_ufeature_utag(
          self, tag);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition16add_udesign_uspace(
    ::ift_patcher_rs::IftSubsetDefinition&, ::std::uint32_t, double, double);
}
inline bool(IftSubsetDefinition::add_design_space)(::std::uint32_t tag,
                                                   double min_val,
                                                   double max_val) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition16add_udesign_uspace(
          self, tag, min_val, max_val);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5union(
    ::ift_patcher_rs::IftSubsetDefinition&,
    ::ift_patcher_rs::IftSubsetDefinition const&);
}
inline void(IftSubsetDefinition::union_)(
    ::ift_patcher_rs::IftSubsetDefinition const& other) {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5union(
          self, other);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5clear(
    ::ift_patcher_rs::IftSubsetDefinition&);
}
inline void(IftSubsetDefinition::clear)() {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvMCsl9B6n5oqDwo_u23ift_upatcher_urs_u1bef5ad5NtB2_u19IftSubsetDefinition5clear(
          self);
}
inline void ::ift_patcher_rs::IftSubsetDefinition::
    __crubit_field_offset_assertions() {
  using __crubit_assert_type = ::ift_patcher_rs::IftSubsetDefinition;
  static_assert(0 == offsetof(__crubit_assert_type, __field0));
}
}  // namespace ift_patcher_rs

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020rs_x00000020_x0000003a_x0000003a_x00000020alloc_x00000020_x0000003a_x0000003a_x00000020string_x00000020_x0000003a_x0000003a_x00000020String_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::rs::alloc::string::String> const&,
    rs_std::Vec<::rs::alloc::string::String>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::rs::alloc::string::String>&,
    rs_std::Vec<::rs::alloc::string::String> const&);
}
inline rs_std::Vec<::rs::alloc::string::String>::Vec(
    const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::rs::alloc::string::String>&
rs_std::Vec<::rs::alloc::string::String>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_f66737df0e8d7d46__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtB7_u6string6StringENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::rs::alloc::string::String>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::rs::alloc::string::String>&
rs_std::Vec<::rs::alloc::string::String>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::rs::alloc::string::String>::Vec(
    ::crubit::UnsafeRelocateTag, Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::rs::alloc::string::String>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::rs::alloc::string::String>::~Vec() noexcept { destroy(); }
#endif

#pragma clang diagnostic pop
