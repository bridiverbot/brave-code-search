#include "build/rust/tests/test_cxx_circular/cxx_circular_shim.h"
#include <cstddef>
#include <cstdint>
#include <type_traits>

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_RUST_OPAQUE
#define CXXBRIDGE1_RUST_OPAQUE
class Opaque {
public:
  Opaque() = delete;
  Opaque(const Opaque &) = delete;
  ~Opaque() = delete;
};
#endif // CXXBRIDGE1_RUST_OPAQUE

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

#ifndef CXXBRIDGE1_LAYOUT
#define CXXBRIDGE1_LAYOUT
class layout {
  template <typename T>
  friend std::size_t size_of();
  template <typename T>
  friend std::size_t align_of();
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return T::layout::size();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_size_of() {
    return sizeof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      size_of() {
    return do_size_of<T>();
  }
  template <typename T>
  static typename std::enable_if<std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return T::layout::align();
  }
  template <typename T>
  static typename std::enable_if<!std::is_base_of<Opaque, T>::value,
                                 std::size_t>::type
  do_align_of() {
    return alignof(T);
  }
  template <typename T>
  static
      typename std::enable_if<detail::is_complete<T>::value, std::size_t>::type
      align_of() {
    return do_align_of<T>();
  }
};

template <typename T>
std::size_t size_of() {
  return layout::size_of<T>();
}

template <typename T>
std::size_t align_of() {
  return layout::align_of<T>();
}
#endif // CXXBRIDGE1_LAYOUT
} // namespace cxxbridge1
} // namespace rust

namespace cxx_circular_test {
  struct RustI32;
}

namespace cxx_circular_test {
#ifndef CXXBRIDGE1_STRUCT_cxx_circular_test$RustI32
#define CXXBRIDGE1_STRUCT_cxx_circular_test$RustI32
struct RustI32 final : public ::rust::Opaque {
  __declspec(dllexport) ::std::int32_t get() const noexcept;
  ~RustI32() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cxx_circular_test$RustI32

extern "C" {
::std::size_t cxx_circular_test$cxxbridge1$202$RustI32$operator$sizeof() noexcept;
::std::size_t cxx_circular_test$cxxbridge1$202$RustI32$operator$alignof() noexcept;

::std::int32_t cxx_circular_test$cxxbridge1$202$RustI32$get(::cxx_circular_test::RustI32 const &self) noexcept;

__declspec(dllexport) ::std::int32_t cxx_circular_test$cxxbridge1$202$AddRustI32s(::cxx_circular_test::RustI32 const &n1, ::cxx_circular_test::RustI32 const &n2) noexcept {
  ::std::int32_t (*AddRustI32s$)(::cxx_circular_test::RustI32 const &, ::cxx_circular_test::RustI32 const &) = ::cxx_circular_test::AddRustI32s;
  return AddRustI32s$(n1, n2);
}
} // extern "C"

::std::size_t RustI32::layout::size() noexcept {
  return cxx_circular_test$cxxbridge1$202$RustI32$operator$sizeof();
}

::std::size_t RustI32::layout::align() noexcept {
  return cxx_circular_test$cxxbridge1$202$RustI32$operator$alignof();
}

__declspec(dllexport) ::std::int32_t RustI32::get() const noexcept {
  return cxx_circular_test$cxxbridge1$202$RustI32$get(*this);
}
} // namespace cxx_circular_test
