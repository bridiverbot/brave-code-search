// Automatically @generated C++ bindings for the following Rust crate:
// other_lib_1dc874e1
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
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/slot.h"

namespace other_lib {

// Generated from: ../../build/rust/tests/test_cpp_api_from_rust/other.rs;l=5
struct CRUBIT_INTERNAL_RUST_TYPE(":: other_lib_1dc874e1 :: Multiplier") alignas(
    4) [[clang::trivial_abi]] Multiplier final {
 public:
  // `other_lib_1dc874e1::Multiplier` doesn't implement the `Default` trait
  Multiplier() = delete;

  // No custom `Drop` impl and no custom "drop glue" required
  ~Multiplier() = default;
  Multiplier(Multiplier&&) = default;
  Multiplier& operator=(Multiplier&&) = default;

  // `other_lib_1dc874e1::Multiplier` doesn't implement the `Clone` trait
  Multiplier(const Multiplier&) = delete;
  Multiplier& operator=(const Multiplier&) = delete;
  Multiplier(::crubit::UnsafeRelocateTag, Multiplier&& value);

  // Generated from: ../../build/rust/tests/test_cpp_api_from_rust/other.rs;l=8
  static ::other_lib::Multiplier new_(::std::int32_t i);

  // Generated from: ../../build/rust/tests/test_cpp_api_from_rust/other.rs;l=12
  ::std::int32_t mul(::std::int32_t other) const;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 4> __field0;

 private:
  static void __crubit_field_offset_assertions();
};

static_assert(
    sizeof(::other_lib::Multiplier) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::other_lib::Multiplier) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(::std::is_trivially_destructible_v<::other_lib::Multiplier>);
static_assert(
    ::std::is_trivially_move_constructible_v<::other_lib::Multiplier>);
static_assert(::std::is_trivially_move_assignable_v<::other_lib::Multiplier>);
inline ::other_lib::Multiplier::Multiplier(::crubit::UnsafeRelocateTag,
                                           Multiplier&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3newCsh9G4tFjYpDL_u8rust_uout(
    ::std::int32_t, ::other_lib::Multiplier* __ret_ptr);
}
inline ::other_lib::Multiplier(Multiplier::new_)(::std::int32_t i) {
  crubit::Slot<::other_lib::Multiplier> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3newCsh9G4tFjYpDL_u8rust_uout(
          i, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::std::int32_t
__crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3mulCsh9G4tFjYpDL_u8rust_uout(
    ::other_lib::Multiplier const&, ::std::int32_t);
}
inline ::std::int32_t(Multiplier::mul)(::std::int32_t other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_67b964a55d0d5778__uRNvMCs8U7wOyY35z0_u18other_ulib_u1dc874e1NtB2_u10Multiplier3mulCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::other_lib::Multiplier::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::other_lib::Multiplier;
  static_assert(0 == offsetof(__crubit_assert_type, __field0));
}
}  // namespace other_lib

#pragma clang diagnostic pop
