#include "base/run_loop_rust_shim.h"
#include <cstddef>
#include <memory>
#include <new>
#include <type_traits>
#include <utility>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_IS_COMPLETE
#define CXXBRIDGE1_IS_COMPLETE
namespace detail {
namespace {
template <typename T, typename = std::size_t>
struct is_complete : std::false_type {};
template <typename T>
struct is_complete<T, decltype(sizeof(T))> : std::true_type {};
} // namespace
} // namespace detail
#endif // CXXBRIDGE1_IS_COMPLETE

namespace {
template <bool> struct deleter_if {
  template <typename T> void operator()(T *) {}
};
template <> struct deleter_if<true> {
  template <typename T> void operator()(T *ptr) { ptr->~T(); }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

namespace base {
  using RunLoop = ::base::RunLoop;
}

namespace base {
extern "C" {
__declspec(dllexport) ::base::RunLoop *base$cxxbridge1$202$CreateRunLoop() noexcept {
  ::std::unique_ptr<::base::RunLoop> (*CreateRunLoop$)() = ::base::CreateRunLoop;
  return CreateRunLoop$().release();
}

__declspec(dllexport) void base$cxxbridge1$202$RunRunLoop(::std::unique_ptr<::base::RunLoop> const &run_loop) noexcept {
  void (*RunRunLoop$)(::std::unique_ptr<::base::RunLoop> const &) = ::base::RunRunLoop;
  RunRunLoop$(run_loop);
}

__declspec(dllexport) void base$cxxbridge1$202$QuitRunLoop(::std::unique_ptr<::base::RunLoop> const &run_loop) noexcept {
  void (*QuitRunLoop$)(::std::unique_ptr<::base::RunLoop> const &) = ::base::QuitRunLoop;
  QuitRunLoop$(run_loop);
}

__declspec(dllexport) void base$cxxbridge1$202$RunUntilIdle(::std::unique_ptr<::base::RunLoop> const &run_loop) noexcept {
  void (*RunUntilIdle$)(::std::unique_ptr<::base::RunLoop> const &) = ::base::RunUntilIdle;
  RunUntilIdle$(run_loop);
}
} // extern "C"
} // namespace base

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::base::RunLoop>::type>::value, "definition of `::base::RunLoop` is required");
static_assert(sizeof(::std::unique_ptr<::base::RunLoop>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::base::RunLoop>) == alignof(void *), "");
__declspec(dllexport) void cxxbridge1$unique_ptr$base$RunLoop$null(::std::unique_ptr<::base::RunLoop> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::RunLoop>();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$base$RunLoop$raw(::std::unique_ptr<::base::RunLoop> *ptr, ::std::unique_ptr<::base::RunLoop>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::RunLoop>(raw);
}
__declspec(dllexport) ::std::unique_ptr<::base::RunLoop>::element_type const *cxxbridge1$unique_ptr$base$RunLoop$get(::std::unique_ptr<::base::RunLoop> const &ptr) noexcept {
  return ptr.get();
}
__declspec(dllexport) ::std::unique_ptr<::base::RunLoop>::pointer cxxbridge1$unique_ptr$base$RunLoop$release(::std::unique_ptr<::base::RunLoop> &ptr) noexcept {
  return ptr.release();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$base$RunLoop$drop(::std::unique_ptr<::base::RunLoop> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::base::RunLoop>::value>{}(ptr);
}
} // extern "C"
