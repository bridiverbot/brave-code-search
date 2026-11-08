#pragma once
#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace base {
namespace test {
__declspec(dllexport) void log_info_from_rust() noexcept;

__declspec(dllexport) void log_warning_from_rust() noexcept;

__declspec(dllexport) void log_error_from_rust() noexcept;

__declspec(dllexport) void log_debug_from_rust() noexcept;

__declspec(dllexport) void log_trace_from_rust() noexcept;

__declspec(dllexport) void log_error_with_placeholder_from_rust(::std::int32_t i) noexcept;

__declspec(dllexport) void panic_with_placeholder_from_rust(::std::int32_t i) noexcept;

__declspec(dllexport) bool is_info_enabled_from_rust() noexcept;

__declspec(dllexport) bool is_debug_enabled_from_rust() noexcept;
} // namespace test
} // namespace base

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
