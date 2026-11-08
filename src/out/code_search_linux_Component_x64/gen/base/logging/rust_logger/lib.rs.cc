#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace logging {
namespace internal {
extern "C" {
void logging$internal$cxxbridge1$202$init_rust_logging() noexcept;

void logging$internal$cxxbridge1$202$update_rust_log_level(::std::int32_t min_log_level) noexcept;
} // extern "C"

__attribute__((visibility("default"))) void init_rust_logging() noexcept {
  logging$internal$cxxbridge1$202$init_rust_logging();
}

__attribute__((visibility("default"))) void update_rust_log_level(::std::int32_t min_log_level) noexcept {
  logging$internal$cxxbridge1$202$update_rust_log_level(min_log_level);
}
} // namespace internal
} // namespace logging
