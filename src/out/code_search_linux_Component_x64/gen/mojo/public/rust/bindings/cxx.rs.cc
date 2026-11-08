#include "base/trace_event/trace_id_helper.h"
#include "mojo/public/rust/bindings/cxx_shim.h"
#include <cstdint>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace base {
namespace trace_event {
extern "C" {
__attribute__((visibility("default"))) ::std::uint64_t base$trace_event$cxxbridge1$202$GetNextGlobalTraceId() noexcept {
  ::std::uint64_t (*GetNextGlobalTraceId$)() = ::base::trace_event::GetNextGlobalTraceId;
  return GetNextGlobalTraceId$();
}
} // extern "C"
} // namespace trace_event
} // namespace base

namespace rust_mojo_bindings_api_bridge {
extern "C" {
__attribute__((visibility("default"))) ::std::int64_t rust_mojo_bindings_api_bridge$cxxbridge1$202$CurrentTimeTicksInMicroseconds() noexcept {
  ::std::int64_t (*CurrentTimeTicksInMicroseconds$)() = ::rust_mojo_bindings_api_bridge::CurrentTimeTicksInMicroseconds;
  return CurrentTimeTicksInMicroseconds$();
}
} // extern "C"
} // namespace rust_mojo_bindings_api_bridge
