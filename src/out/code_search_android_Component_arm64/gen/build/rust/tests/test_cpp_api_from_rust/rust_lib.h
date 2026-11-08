// Automatically @generated C++ bindings for the following Rust crate:
// rust_lib_1dc874e1
// Features: always_specialize_generics_in_cpp_api_from_rust

// clang-format off
#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <cstdint>
#include <utility>

#include "build/rust/tests/test_cpp_api_from_rust/other_lib.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/rs_std/char.h"
#include "third_party/crubit/support/rs_std/rs_core.h"

namespace rust_lib {

//  Public function which returns an `std::time::Duration` object.
//
//  Used to test bindings which depend on types defined in Rust standard
//  library.
//
// Generated from: ../../build/rust/tests/test_cpp_api_from_rust/lib.rs;l=40
::rs::core::time::Duration create_duration_from_seconds(
    ::std::uint64_t seconds);

//  Public function which returns a `Multiplier` object.
//
//  Used to test bindings which depend on types defined in other crates.
//  (It also showcases Crubit's ability to pass Rust objects **by value**
//  over the FFI boundary.)
//
// Generated from: ../../build/rust/tests/test_cpp_api_from_rust/lib.rs;l=32
::other_lib::Multiplier create_multiplier(::std::int32_t x);

//  Public function that returns a Rust `char`.
//
//  Used to test `crubit/support/...` libraries.  In particular, support for
//  `char` depends on `crubit/support/rs_std/char.h`.
//
// Generated from: ../../build/rust/tests/test_cpp_api_from_rust/lib.rs;l=21
rs_std::char_ get_ascii_char_or_panic(::std::uint8_t code);

//  Public function which multiplies two integers.
//
//  Used as as smoke test of the infrastructure for generating C++ bindings to
//  public Rust APIs.
//
// Generated from: ../../build/rust/tests/test_cpp_api_from_rust/lib.rs;l=13
::std::int32_t mul_two_ints_via_rust(::std::int32_t x, ::std::int32_t y);

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e128create_uduration_ufrom_usecondsCsh9G4tFjYpDL_u8rust_uout(
    ::std::uint64_t, ::rs::core::time::Duration* __ret_ptr);
}
inline ::rs::core::time::Duration create_duration_from_seconds(
    ::std::uint64_t seconds) {
  crubit::Slot<::rs::core::time::Duration> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e128create_uduration_ufrom_usecondsCsh9G4tFjYpDL_u8rust_uout(
          seconds, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e117create_umultiplierCsh9G4tFjYpDL_u8rust_uout(
    ::std::int32_t, ::other_lib::Multiplier* __ret_ptr);
}
inline ::other_lib::Multiplier create_multiplier(::std::int32_t x) {
  crubit::Slot<::other_lib::Multiplier> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e117create_umultiplierCsh9G4tFjYpDL_u8rust_uout(
          x, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e123get_uascii_uchar_uor_upanic(
    ::std::uint8_t, rs_std::char_* __ret_ptr);
}
inline rs_std::char_ get_ascii_char_or_panic(::std::uint8_t code) {
  crubit::Slot<rs_std::char_> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e123get_uascii_uchar_uor_upanic(
          code, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" ::std::int32_t
__crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e121mul_utwo_uints_uvia_urustCsh9G4tFjYpDL_u8rust_uout(
    ::std::int32_t, ::std::int32_t);
}
inline ::std::int32_t mul_two_ints_via_rust(::std::int32_t x,
                                            ::std::int32_t y) {
  return __crubit_internal::
      __crubit_thunk_7262677bfa134d56__uRNvCs9OREIIqbyoQ_u17rust_ulib_u1dc874e121mul_utwo_uints_uvia_urustCsh9G4tFjYpDL_u8rust_uout(
          x, y);
}

}  // namespace rust_lib

#pragma clang diagnostic pop
