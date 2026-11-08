#include "mojo/public/rust/system/scoped_handle_interop.h"
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

namespace mojo {
  namespace rust {
    using ScopedHandleWrapper = ::mojo::rust::ScopedHandleWrapper;
    using ScopedMessagePipeHandleWrapper = ::mojo::rust::ScopedMessagePipeHandleWrapper;
    using ScopedMessageHandleWrapper = ::mojo::rust::ScopedMessageHandleWrapper;
  }
}

namespace mojo {
namespace rust {
extern "C" {
__attribute__((visibility("default"))) ::std::size_t mojo$rust$cxxbridge1$202$ScopedHandleWrapper$Release(::mojo::rust::ScopedHandleWrapper *wrapper) noexcept {
  ::std::size_t (*Release$)(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>) = &::mojo::rust::ScopedHandleWrapper::Release;
  return Release$(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>(wrapper));
}

__attribute__((visibility("default"))) ::mojo::rust::ScopedHandleWrapper *mojo$rust$cxxbridge1$202$ScopedHandleWrapper$Create(::std::size_t handle) noexcept {
  ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> (*Create$)(::std::size_t) = &::mojo::rust::ScopedHandleWrapper::Create;
  return Create$(handle).release();
}

__attribute__((visibility("default"))) ::std::size_t mojo$rust$cxxbridge1$202$ScopedMessagePipeHandleWrapper$Release(::mojo::rust::ScopedMessagePipeHandleWrapper *wrapper) noexcept {
  ::std::size_t (*Release$)(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>) = &::mojo::rust::ScopedMessagePipeHandleWrapper::Release;
  return Release$(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>(wrapper));
}

__attribute__((visibility("default"))) ::mojo::rust::ScopedMessagePipeHandleWrapper *mojo$rust$cxxbridge1$202$ScopedMessagePipeHandleWrapper$Create(::std::size_t handle) noexcept {
  ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> (*Create$)(::std::size_t) = &::mojo::rust::ScopedMessagePipeHandleWrapper::Create;
  return Create$(handle).release();
}

__attribute__((visibility("default"))) ::std::size_t mojo$rust$cxxbridge1$202$ScopedMessageHandleWrapper$Release(::mojo::rust::ScopedMessageHandleWrapper *wrapper) noexcept {
  ::std::size_t (*Release$)(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>) = &::mojo::rust::ScopedMessageHandleWrapper::Release;
  return Release$(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>(wrapper));
}

__attribute__((visibility("default"))) ::mojo::rust::ScopedMessageHandleWrapper *mojo$rust$cxxbridge1$202$ScopedMessageHandleWrapper$Create(::std::size_t handle) noexcept {
  ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> (*Create$)(::std::size_t) = &::mojo::rust::ScopedMessageHandleWrapper::Create;
  return Create$(handle).release();
}
} // extern "C"
} // namespace rust
} // namespace mojo

extern "C" {
static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::ScopedHandleWrapper>::type>::value, "definition of `::mojo::rust::ScopedHandleWrapper` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedHandleWrapper$null(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedHandleWrapper$raw(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> *ptr, ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>::element_type const *cxxbridge1$unique_ptr$mojo$rust$ScopedHandleWrapper$get(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedHandleWrapper>::pointer cxxbridge1$unique_ptr$mojo$rust$ScopedHandleWrapper$release(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedHandleWrapper$drop(::std::unique_ptr<::mojo::rust::ScopedHandleWrapper> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::ScopedHandleWrapper>::value>{}(ptr);
}

static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::ScopedMessagePipeHandleWrapper>::type>::value, "definition of `::mojo::rust::ScopedMessagePipeHandleWrapper` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessagePipeHandleWrapper$null(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessagePipeHandleWrapper$raw(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> *ptr, ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>::element_type const *cxxbridge1$unique_ptr$mojo$rust$ScopedMessagePipeHandleWrapper$get(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper>::pointer cxxbridge1$unique_ptr$mojo$rust$ScopedMessagePipeHandleWrapper$release(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessagePipeHandleWrapper$drop(::std::unique_ptr<::mojo::rust::ScopedMessagePipeHandleWrapper> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::ScopedMessagePipeHandleWrapper>::value>{}(ptr);
}

static_assert(::rust::detail::is_complete<::std::remove_extent<::mojo::rust::ScopedMessageHandleWrapper>::type>::value, "definition of `::mojo::rust::ScopedMessageHandleWrapper` is required");
static_assert(sizeof(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessageHandleWrapper$null(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessageHandleWrapper$raw(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> *ptr, ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>::element_type const *cxxbridge1$unique_ptr$mojo$rust$ScopedMessageHandleWrapper$get(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper>::pointer cxxbridge1$unique_ptr$mojo$rust$ScopedMessageHandleWrapper$release(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$mojo$rust$ScopedMessageHandleWrapper$drop(::std::unique_ptr<::mojo::rust::ScopedMessageHandleWrapper> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::mojo::rust::ScopedMessageHandleWrapper>::value>{}(ptr);
}
} // extern "C"
