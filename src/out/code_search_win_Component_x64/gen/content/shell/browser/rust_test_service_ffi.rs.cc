#include "mojo/public/rust/system/scoped_handle_interop.h"
#include <memory>

#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace content {
namespace rust_test {
extern "C" {
void content$rust_test$cxxbridge1$202$BindRustTestService(::mojo::rust::ScopedMessagePipeHandleWrapper *handle) noexcept;
} // extern "C"

__declspec(dllexport) void BindRustTestService(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> handle) noexcept {
  content$rust_test$cxxbridge1$202$BindRustTestService(handle.release());
}
} // namespace rust_test
} // namespace content
