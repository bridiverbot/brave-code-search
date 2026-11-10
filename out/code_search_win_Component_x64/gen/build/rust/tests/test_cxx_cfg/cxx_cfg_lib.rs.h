#pragma once
#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace rust_test {
__declspec(dllexport) ::std::uint32_t double_non_unix_value(::std::uint32_t x) noexcept;

__declspec(dllexport) ::std::uint32_t double_my_test_config(::std::uint32_t x) noexcept;
} // namespace rust_test

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
