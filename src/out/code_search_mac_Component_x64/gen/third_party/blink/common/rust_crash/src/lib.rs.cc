#include "third_party/blink/common/rust_crash/rust_crash.h"

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace blink {
extern "C" {
void blink$cxxbridge1$202$crash_in_rust() noexcept;

void blink$cxxbridge1$202$reenter_rust() noexcept;

__attribute__((visibility("default"))) void blink$cxxbridge1$202$EnterCppForRustCrash() noexcept {
  void (*EnterCppForRustCrash$)() = ::blink::EnterCppForRustCrash;
  EnterCppForRustCrash$();
}
} // extern "C"

__attribute__((visibility("default"))) void crash_in_rust() noexcept {
  blink$cxxbridge1$202$crash_in_rust();
}

__attribute__((visibility("default"))) void reenter_rust() noexcept {
  blink$cxxbridge1$202$reenter_rust();
}
} // namespace blink
