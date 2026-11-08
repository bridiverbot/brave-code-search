#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace base {
namespace test {
extern "C" {
void base$test$cxxbridge1$202$log_info_from_rust() noexcept;

void base$test$cxxbridge1$202$log_warning_from_rust() noexcept;

void base$test$cxxbridge1$202$log_error_from_rust() noexcept;

void base$test$cxxbridge1$202$log_debug_from_rust() noexcept;

void base$test$cxxbridge1$202$log_trace_from_rust() noexcept;

void base$test$cxxbridge1$202$log_error_with_placeholder_from_rust(::std::int32_t i) noexcept;

void base$test$cxxbridge1$202$panic_with_placeholder_from_rust(::std::int32_t i) noexcept;

bool base$test$cxxbridge1$202$is_info_enabled_from_rust() noexcept;

bool base$test$cxxbridge1$202$is_debug_enabled_from_rust() noexcept;
} // extern "C"

__declspec(dllexport) void log_info_from_rust() noexcept {
  base$test$cxxbridge1$202$log_info_from_rust();
}

__declspec(dllexport) void log_warning_from_rust() noexcept {
  base$test$cxxbridge1$202$log_warning_from_rust();
}

__declspec(dllexport) void log_error_from_rust() noexcept {
  base$test$cxxbridge1$202$log_error_from_rust();
}

__declspec(dllexport) void log_debug_from_rust() noexcept {
  base$test$cxxbridge1$202$log_debug_from_rust();
}

__declspec(dllexport) void log_trace_from_rust() noexcept {
  base$test$cxxbridge1$202$log_trace_from_rust();
}

__declspec(dllexport) void log_error_with_placeholder_from_rust(::std::int32_t i) noexcept {
  base$test$cxxbridge1$202$log_error_with_placeholder_from_rust(i);
}

__declspec(dllexport) void panic_with_placeholder_from_rust(::std::int32_t i) noexcept {
  base$test$cxxbridge1$202$panic_with_placeholder_from_rust(i);
}

__declspec(dllexport) bool is_info_enabled_from_rust() noexcept {
  return base$test$cxxbridge1$202$is_info_enabled_from_rust();
}

__declspec(dllexport) bool is_debug_enabled_from_rust() noexcept {
  return base$test$cxxbridge1$202$is_debug_enabled_from_rust();
}
} // namespace test
} // namespace base
