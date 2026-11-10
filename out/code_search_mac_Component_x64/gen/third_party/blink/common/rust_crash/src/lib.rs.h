#pragma once
#include "third_party/blink/common/rust_crash/rust_crash.h"

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace blink {
__attribute__((visibility("default"))) void crash_in_rust() noexcept;

__attribute__((visibility("default"))) void reenter_rust() noexcept;
} // namespace blink

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
