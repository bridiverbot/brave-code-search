#include "base/files/file.h"
#include "base/files/file_rust_shim.h"
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
  using File = ::base::File;
}

namespace base {
namespace rust {
namespace file {
extern "C" {
__declspec(dllexport) ::base::File *base$rust$file$cxxbridge1$202$CreateFileFromRawHandle(::std::size_t handle) noexcept {
  ::std::unique_ptr<::base::File> (*CreateFileFromRawHandle$)(::std::size_t) = ::base::rust::file::CreateFileFromRawHandle;
  return CreateFileFromRawHandle$(handle).release();
}

__declspec(dllexport) ::std::size_t base$rust$file$cxxbridge1$202$TakeRawHandle(::base::File &file) noexcept {
  ::std::size_t (*TakeRawHandle$)(::base::File &) = ::base::rust::file::TakeRawHandle;
  return TakeRawHandle$(file);
}

__declspec(dllexport) bool base$rust$file$cxxbridge1$202$File$is_valid(::base::File const &self) noexcept {
  bool (::base::File::*is_valid$)() const = &::base::File::IsValid;
  return (self.*is_valid$)();
}

__declspec(dllexport) bool base$rust$file$cxxbridge1$202$File$is_async(::base::File const &self) noexcept {
  bool (::base::File::*is_async$)() const = &::base::File::async;
  return (self.*is_async$)();
}

__declspec(dllexport) void base$rust$file$cxxbridge1$202$File$close(::base::File &self) noexcept {
  void (::base::File::*close$)() = &::base::File::Close;
  (self.*close$)();
}
} // extern "C"
} // namespace file
} // namespace rust
} // namespace base

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::base::File>::type>::value, "definition of `::base::File` is required");
static_assert(sizeof(::std::unique_ptr<::base::File>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::base::File>) == alignof(void *), "");
__declspec(dllexport) void cxxbridge1$unique_ptr$base$File$null(::std::unique_ptr<::base::File> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::File>();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$base$File$raw(::std::unique_ptr<::base::File> *ptr, ::std::unique_ptr<::base::File>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::base::File>(raw);
}
__declspec(dllexport) ::std::unique_ptr<::base::File>::element_type const *cxxbridge1$unique_ptr$base$File$get(::std::unique_ptr<::base::File> const &ptr) noexcept {
  return ptr.get();
}
__declspec(dllexport) ::std::unique_ptr<::base::File>::pointer cxxbridge1$unique_ptr$base$File$release(::std::unique_ptr<::base::File> &ptr) noexcept {
  return ptr.release();
}
__declspec(dllexport) void cxxbridge1$unique_ptr$base$File$drop(::std::unique_ptr<::base::File> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::base::File>::value>{}(ptr);
}
} // extern "C"
