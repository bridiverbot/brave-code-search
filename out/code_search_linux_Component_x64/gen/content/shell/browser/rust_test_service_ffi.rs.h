#pragma once
#include "mojo/public/rust/system/scoped_handle_interop.h"
#include <memory>

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace content {
namespace rust_test {
__attribute__((visibility("default"))) void BindRustTestService(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> handle) noexcept;
} // namespace rust_test
} // namespace content

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
