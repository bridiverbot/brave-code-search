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

__declspec(dllexport) void blink$cxxbridge1$202$EnterCppForRustCrash() noexcept {
  void (*EnterCppForRustCrash$)() = ::blink::EnterCppForRustCrash;
  EnterCppForRustCrash$();
}
} // extern "C"

__declspec(dllexport) void crash_in_rust() noexcept {
  blink$cxxbridge1$202$crash_in_rust();
}

__declspec(dllexport) void reenter_rust() noexcept {
  blink$cxxbridge1$202$reenter_rust();
}
} // namespace blink
