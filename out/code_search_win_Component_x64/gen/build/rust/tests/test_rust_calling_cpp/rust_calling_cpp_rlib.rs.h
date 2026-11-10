#pragma once
#include "build/rust/tests/test_rust_calling_cpp/cpp_library.h"
#include <cstdint>

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

__declspec(dllexport) void rust_calling_cpp() noexcept;

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
