#include "build/rust/tests/test_rust_calling_cpp/cpp_library.h"
#include <cstdint>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

extern "C" {
void cxxbridge1$202$rust_calling_cpp() noexcept;

__attribute__((visibility("default"))) ::std::int32_t cxxbridge1$202$mul_by_2_in_cpp_library(::std::int32_t a) noexcept {
  ::std::int32_t (*mul_by_2_in_cpp_library$)(::std::int32_t) = ::mul_by_2_in_cpp_library;
  return mul_by_2_in_cpp_library$(a);
}
} // extern "C"

__attribute__((visibility("default"))) void rust_calling_cpp() noexcept {
  cxxbridge1$202$rust_calling_cpp();
}
