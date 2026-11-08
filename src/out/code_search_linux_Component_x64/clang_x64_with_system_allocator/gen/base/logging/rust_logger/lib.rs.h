#pragma once
#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace logging {
namespace internal {
void init_rust_logging() noexcept;

void update_rust_log_level(::std::int32_t min_log_level) noexcept;
} // namespace internal
} // namespace logging

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
