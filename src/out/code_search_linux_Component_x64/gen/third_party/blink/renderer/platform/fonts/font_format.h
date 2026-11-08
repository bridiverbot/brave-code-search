// Automatically @generated C++ bindings for the following Rust crate:
// font_format_1bef5ad5
// Features: always_specialize_generics_in_cpp_api_from_rust

// clang-format off
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
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"

namespace font_format {

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=15
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: font_format_1bef5ad5 :: FontFormatFlags") alignas(8)
    [[clang::trivial_abi]] FontFormatFlags final {
 public:
  // `font_format_1bef5ad5::FontFormatFlags` doesn't implement the `Default`
  // trait
  FontFormatFlags() = delete;

  // Drop::drop
  ~FontFormatFlags();

  // C++ move operations are unavailable for this type. See
  // http://crubit.rs/rust/movable_types for an explanation of Rust types that
  // are C++ movable.
  FontFormatFlags(FontFormatFlags&&) = delete;
  ::font_format::FontFormatFlags& operator=(FontFormatFlags&&) = delete;
  // `font_format_1bef5ad5::FontFormatFlags` doesn't implement the `Clone` trait
  FontFormatFlags(const FontFormatFlags&) = delete;
  FontFormatFlags& operator=(const FontFormatFlags&) = delete;
  FontFormatFlags(::crubit::UnsafeRelocateTag, FontFormatFlags&& value);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> table_tags;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 4> color_version;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 12> avar_version;

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=22
struct CRUBIT_INTERNAL_RUST_TYPE(
    ":: font_format_1bef5ad5 :: FontFormatInfo") alignas(8)
    [[clang::trivial_abi]] FontFormatInfo final {
 public:
  // Default::default
  FontFormatInfo();

  // Drop::drop
  ~FontFormatInfo();

  FontFormatInfo(FontFormatInfo&&) noexcept;
  ::font_format::FontFormatInfo& operator=(FontFormatInfo&&) noexcept;

  // `font_format_1bef5ad5::FontFormatInfo` doesn't implement the `Clone` trait
  FontFormatInfo(const FontFormatInfo&) = delete;
  FontFormatInfo& operator=(const FontFormatInfo&) = delete;
  FontFormatInfo(::crubit::UnsafeRelocateTag, FontFormatInfo&& value);

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 40> format_flags;

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=26
::font_format::FontFormatInfo get_font_format_info(
    rs_std::SliceRef<const ::std::uint8_t> font_bytes);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=61
bool is_avar2(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=88
bool is_cbdt_cblc(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=96
bool is_cff2(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=50
bool is_colrv0(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=47
bool is_colrv1(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=92
bool is_ebdt_eblc(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=84
bool is_sbix(::font_format::FontFormatInfo const& format_info);

// Generated from:
// ../../third_party/blink/renderer/platform/fonts/opentype/format_check.rs;l=80
bool is_variable(::font_format::FontFormatInfo const& format_info);

static_assert(
    sizeof(::font_format::FontFormatFlags) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::font_format::FontFormatFlags) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad515FontFormatFlagsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatFlags&);
}
inline ::font_format::FontFormatFlags::~FontFormatFlags() {
  __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad515FontFormatFlagsNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::font_format::FontFormatFlags::FontFormatFlags(
    ::crubit::UnsafeRelocateTag, FontFormatFlags&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::font_format::FontFormatFlags::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::font_format::FontFormatFlags;
  static_assert(0 == offsetof(__crubit_assert_type, table_tags));
  static_assert(24 == offsetof(__crubit_assert_type, color_version));
  static_assert(28 == offsetof(__crubit_assert_type, avar_version));
}
static_assert(
    sizeof(::font_format::FontFormatInfo) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::font_format::FontFormatInfo) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatInfo* __ret_ptr);
}
inline ::font_format::FontFormatInfo::FontFormatInfo() {
  __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatInfo&);
}
inline ::font_format::FontFormatInfo::~FontFormatInfo() {
  __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvYNtCsj3Cke4j6dYz_u20font_uformat_u1bef5ad514FontFormatInfoNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::font_format::FontFormatInfo::FontFormatInfo(
    FontFormatInfo&& other) noexcept
    : FontFormatInfo() {
  *this = ::std::move(other);
}
inline ::font_format::FontFormatInfo& ::font_format::FontFormatInfo::operator=(
    FontFormatInfo&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
inline ::font_format::FontFormatInfo::FontFormatInfo(
    ::crubit::UnsafeRelocateTag, FontFormatInfo&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::font_format::FontFormatInfo::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::font_format::FontFormatInfo;
  static_assert(0 == offsetof(__crubit_assert_type, format_flags));
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad520get_ufont_uformat_uinfo(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::font_format::FontFormatInfo* __ret_ptr);
}
inline ::font_format::FontFormatInfo get_font_format_info(
    rs_std::SliceRef<const ::std::uint8_t> font_bytes) {
  crubit::Slot<::font_format::FontFormatInfo> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad520get_ufont_uformat_uinfo(
          &font_bytes, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad58is_uavar2Csh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatInfo const&);
}
inline bool is_avar2(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad58is_uavar2Csh9G4tFjYpDL_u8rust_uout(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_ucbdt_ucblc(
    ::font_format::FontFormatInfo const&);
}
inline bool is_cbdt_cblc(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_ucbdt_ucblc(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_ucff2(
    ::font_format::FontFormatInfo const&);
}
inline bool is_cff2(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_ucff2(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv0Csh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatInfo const&);
}
inline bool is_colrv0(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv0Csh9G4tFjYpDL_u8rust_uout(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv1Csh9G4tFjYpDL_u8rust_uout(
    ::font_format::FontFormatInfo const&);
}
inline bool is_colrv1(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad59is_ucolrv1Csh9G4tFjYpDL_u8rust_uout(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_uebdt_ueblc(
    ::font_format::FontFormatInfo const&);
}
inline bool is_ebdt_eblc(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad512is_uebdt_ueblc(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_usbix(
    ::font_format::FontFormatInfo const&);
}
inline bool is_sbix(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad57is_usbix(
          format_info);
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad511is_uvariable(
    ::font_format::FontFormatInfo const&);
}
inline bool is_variable(::font_format::FontFormatInfo const& format_info) {
  return __crubit_internal::
      __crubit_thunk_ddfc06b8a30121e1__uRNvCsj3Cke4j6dYz_u20font_uformat_u1bef5ad511is_uvariable(
          format_info);
}

}  // namespace font_format

#pragma clang diagnostic pop
