#include "base/test/task_environment_rust_shim.h"
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
  namespace test {
    using SingleThreadTaskEnvironment = ::base::test::SingleThreadTaskEnvironment;
  }
}

namespace base {
namespace test {
extern "C" {
__attribute__((visibility("default"))) ::base::test::SingleThreadTaskEnvironment *base$test$cxxbridge1$202$CreateTaskEnvironment() noexcept {
  ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> (*CreateTaskEnvironment$)() = ::base::test::CreateTaskEnvironment;
  return CreateTaskEnvironment$().release();
}
} // extern "C"
} // namespace test
} // namespace base

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::base::test::SingleThreadTaskEnvironment>::type>::value, "definition of `::base::test::SingleThreadTaskEnvironment` is required");
static_assert(sizeof(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$SingleThreadTaskEnvironment$null(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$SingleThreadTaskEnvironment$raw(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> *ptr, ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>::element_type const *cxxbridge1$unique_ptr$base$test$SingleThreadTaskEnvironment$get(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::base::test::SingleThreadTaskEnvironment>::pointer cxxbridge1$unique_ptr$base$test$SingleThreadTaskEnvironment$release(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$base$test$SingleThreadTaskEnvironment$drop(::std::unique_ptr<::base::test::SingleThreadTaskEnvironment> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::base::test::SingleThreadTaskEnvironment>::value>{}(ptr);
}
} // extern "C"
