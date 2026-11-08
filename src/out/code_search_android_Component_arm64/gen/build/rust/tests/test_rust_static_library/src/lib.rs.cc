#include <cstddef>
#include <cstdint>
#include <new>
#include <type_traits>
#include <utility>

#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_RUST_BOX
#define CXXBRIDGE1_RUST_BOX
template <typename T>
class Box final {
public:
  using element_type = T;
  using const_pointer =
      typename std::add_pointer<typename std::add_const<T>::type>::type;
  using pointer = typename std::add_pointer<T>::type;

  Box() = delete;
  Box(Box &&) noexcept;
  ~Box() noexcept;

  explicit Box(const T &);
  explicit Box(T &&);

  Box &operator=(Box &&) & noexcept;

  const T *operator->() const noexcept;
  const T &operator*() const noexcept;
  T *operator->() noexcept;
  T &operator*() noexcept;

  template <typename... Fields>
  static Box in_place(Fields &&...);

  void swap(Box &) noexcept;

  static Box from_raw(T *) noexcept;

  T *into_raw() noexcept;

  /* Deprecated */ using value_type = element_type;

private:
  class uninit;
  class allocation;
  Box(uninit) noexcept;
  void drop() noexcept;

  friend void swap(Box &lhs, Box &rhs) noexcept { lhs.swap(rhs); }

  T *ptr;
};

template <typename T>
class Box<T>::uninit {};

template <typename T>
class Box<T>::allocation {
  static T *alloc() noexcept;
  static void dealloc(T *) noexcept;

public:
  allocation() noexcept : ptr(alloc()) {}
  ~allocation() noexcept {
    if (this->ptr) {
      dealloc(this->ptr);
    }
  }
  T *ptr;
};

template <typename T>
Box<T>::Box(Box &&other) noexcept : ptr(other.ptr) {
  other.ptr = nullptr;
}

template <typename T>
Box<T>::Box(const T &val) {
  allocation alloc;
  ::new (alloc.ptr) T(val);
  this->ptr = alloc.ptr;
  alloc.ptr = nullptr;
}

template <typename T>
Box<T>::Box(T &&val) {
  allocation alloc;
  ::new (alloc.ptr) T(std::move(val));
  this->ptr = alloc.ptr;
  alloc.ptr = nullptr;
}

template <typename T>
Box<T>::~Box() noexcept {
  if (this->ptr) {
    this->drop();
  }
}

template <typename T>
Box<T> &Box<T>::operator=(Box &&other) & noexcept {
  if (this->ptr) {
    this->drop();
  }
  this->ptr = other.ptr;
  other.ptr = nullptr;
  return *this;
}

template <typename T>
const T *Box<T>::operator->() const noexcept {
  return this->ptr;
}

template <typename T>
const T &Box<T>::operator*() const noexcept {
  return *this->ptr;
}

template <typename T>
T *Box<T>::operator->() noexcept {
  return this->ptr;
}

template <typename T>
T &Box<T>::operator*() noexcept {
  return *this->ptr;
}

template <typename T>
template <typename... Fields>
Box<T> Box<T>::in_place(Fields &&...fields) {
  allocation alloc;
  auto ptr = alloc.ptr;
  ::new (ptr) T{std::forward<Fields>(fields)...};
  alloc.ptr = nullptr;
  return from_raw(ptr);
}

template <typename T>
void Box<T>::swap(Box &rhs) noexcept {
  using std::swap;
  swap(this->ptr, rhs.ptr);
}

template <typename T>
Box<T> Box<T>::from_raw(T *raw) noexcept {
  Box box = uninit{};
  box.ptr = raw;
  return box;
}

template <typename T>
T *Box<T>::into_raw() noexcept {
  T *raw = this->ptr;
  this->ptr = nullptr;
  return raw;
}

template <typename T>
Box<T>::Box(uninit) noexcept {}
#endif // CXXBRIDGE1_RUST_BOX
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

struct SomeStruct;

#ifndef CXXBRIDGE1_STRUCT_SomeStruct
#define CXXBRIDGE1_STRUCT_SomeStruct
struct SomeStruct final {
  ::std::int32_t a CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_SomeStruct

extern "C" {
void cxxbridge1$202$say_hello() noexcept;

void cxxbridge1$202$alloc_aligned() noexcept;

::std::int32_t cxxbridge1$202$add_two_ints_via_rust(::std::int32_t x, ::std::int32_t y) noexcept;

::SomeStruct *cxxbridge1$202$allocate_via_rust() noexcept;

bool cxxbridge1$202$allocate_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept;

bool cxxbridge1$202$allocate_zeroed_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept;

bool cxxbridge1$202$allocate_zeroed_via_rust_returns_zeros(::std::size_t size, ::std::size_t align) noexcept;

bool cxxbridge1$202$reallocate_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept;
} // extern "C"

void say_hello() noexcept {
  cxxbridge1$202$say_hello();
}

void alloc_aligned() noexcept {
  cxxbridge1$202$alloc_aligned();
}

::std::int32_t add_two_ints_via_rust(::std::int32_t x, ::std::int32_t y) noexcept {
  return cxxbridge1$202$add_two_ints_via_rust(x, y);
}

::rust::Box<::SomeStruct> allocate_via_rust() noexcept {
  return ::rust::Box<::SomeStruct>::from_raw(cxxbridge1$202$allocate_via_rust());
}

bool allocate_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept {
  return cxxbridge1$202$allocate_huge_via_rust(size, align);
}

bool allocate_zeroed_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept {
  return cxxbridge1$202$allocate_zeroed_huge_via_rust(size, align);
}

bool allocate_zeroed_via_rust_returns_zeros(::std::size_t size, ::std::size_t align) noexcept {
  return cxxbridge1$202$allocate_zeroed_via_rust_returns_zeros(size, align);
}

bool reallocate_huge_via_rust(::std::size_t size, ::std::size_t align) noexcept {
  return cxxbridge1$202$reallocate_huge_via_rust(size, align);
}

extern "C" {
::SomeStruct *cxxbridge1$box$SomeStruct$alloc() noexcept;
void cxxbridge1$box$SomeStruct$dealloc(::SomeStruct *) noexcept;
void cxxbridge1$box$SomeStruct$drop(::rust::Box<::SomeStruct> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
::SomeStruct *Box<::SomeStruct>::allocation::alloc() noexcept {
  return cxxbridge1$box$SomeStruct$alloc();
}
template <>
void Box<::SomeStruct>::allocation::dealloc(::SomeStruct *ptr) noexcept {
  cxxbridge1$box$SomeStruct$dealloc(ptr);
}
template <>
void Box<::SomeStruct>::drop() noexcept {
  cxxbridge1$box$SomeStruct$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
