#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace rust_test {
extern "C" {
::std::uint32_t rust_test$cxxbridge1$202$double_non_unix_value(::std::uint32_t x) noexcept;

::std::uint32_t rust_test$cxxbridge1$202$double_my_test_config(::std::uint32_t x) noexcept;
} // extern "C"

__declspec(dllexport) ::std::uint32_t double_non_unix_value(::std::uint32_t x) noexcept {
  return rust_test$cxxbridge1$202$double_non_unix_value(x);
}

__declspec(dllexport) ::std::uint32_t double_my_test_config(::std::uint32_t x) noexcept {
  return rust_test$cxxbridge1$202$double_my_test_config(x);
}
} // namespace rust_test
