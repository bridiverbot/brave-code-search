#pragma once
#include "brave/components/brave_wallet/browser/zcash/rust/cxx_orchard_shard_tree_delegate.h"
#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
#include <iterator>
#include <memory>
#include <new>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <utility>
#if __cplusplus >= 202002L
#include <ranges>
#endif

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__

namespace rust {
inline namespace cxxbridge1 {
// #include "rust/cxx.h"

#ifndef CXXBRIDGE1_PANIC
#define CXXBRIDGE1_PANIC
template <typename Exception>
void panic [[noreturn]] (const char *msg);
#endif // CXXBRIDGE1_PANIC

struct unsafe_bitcopy_t;

namespace {
template <typename T>
class impl;
} // namespace

template <typename T>
::std::size_t size_of();
template <typename T>
::std::size_t align_of();

#ifndef CXXBRIDGE1_RUST_STRING
#define CXXBRIDGE1_RUST_STRING
class String final {
public:
  String() noexcept;
  String(const String &) noexcept;
  String(String &&) noexcept;
  ~String() noexcept;

  String(const std::string &);
  String(const char *);
  String(const char *, std::size_t);
  String(const char16_t *);
  String(const char16_t *, std::size_t);
#ifdef __cpp_char8_t
  String(const char8_t *s);
  String(const char8_t *s, std::size_t len);
#endif

  static String lossy(const std::string &) noexcept;
  static String lossy(const char *) noexcept;
  static String lossy(const char *, std::size_t) noexcept;
  static String lossy(const char16_t *) noexcept;
  static String lossy(const char16_t *, std::size_t) noexcept;

  String &operator=(const String &) & noexcept;
  String &operator=(String &&) & noexcept;

  explicit operator std::string() const;

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  const char *c_str() noexcept;

  std::size_t capacity() const noexcept;
  void reserve(size_t new_cap) noexcept;

  using iterator = char *;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const String &) const noexcept;
  bool operator!=(const String &) const noexcept;
  bool operator<(const String &) const noexcept;
  bool operator<=(const String &) const noexcept;
  bool operator>(const String &) const noexcept;
  bool operator>=(const String &) const noexcept;

  void swap(String &) noexcept;

  String(unsafe_bitcopy_t, const String &) noexcept;

private:
  struct lossy_t;
  String(lossy_t, const char *, std::size_t) noexcept;
  String(lossy_t, const char16_t *, std::size_t) noexcept;
  friend void swap(String &lhs, String &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};
#endif // CXXBRIDGE1_RUST_STRING

#ifndef CXXBRIDGE1_RUST_SLICE
#define CXXBRIDGE1_RUST_SLICE
namespace detail {
template <bool>
struct copy_assignable_if {};

template <>
struct copy_assignable_if<false> {
  copy_assignable_if() noexcept = default;
  copy_assignable_if(const copy_assignable_if &) noexcept = default;
  copy_assignable_if &operator=(const copy_assignable_if &) & noexcept = delete;
  copy_assignable_if &operator=(copy_assignable_if &&) & noexcept = default;
};
} // namespace detail

template <typename T>
class Slice final
    : private detail::copy_assignable_if<std::is_const<T>::value> {
public:
  using value_type = T;

  Slice() noexcept;
  Slice(T *, std::size_t count) noexcept;

  template <typename C>
  explicit Slice(C &c) : Slice(c.data(), c.size()) {}

  Slice &operator=(const Slice<T> &) & noexcept = default;
  Slice &operator=(Slice<T> &&) & noexcept = default;

  T *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  T &operator[](std::size_t n) const noexcept;
  T &at(std::size_t n) const;
  T &front() const noexcept;
  T &back() const noexcept;

  Slice(const Slice<T> &) noexcept = default;
  ~Slice() noexcept = default;

  class iterator;
  iterator begin() const noexcept;
  iterator end() const noexcept;

  void swap(Slice &) noexcept;

private:
  class uninit;
  Slice(uninit) noexcept;
  friend impl<Slice>;
  friend void sliceInit(void *, const void *, std::size_t) noexcept;
  friend void *slicePtr(const void *) noexcept;
  friend std::size_t sliceLen(const void *) noexcept;

  std::array<std::uintptr_t, 2> repr;
};

#ifdef __cpp_deduction_guides
template <typename C>
explicit Slice(C &c)
    -> Slice<std::remove_reference_t<decltype(*std::declval<C>().data())>>;
#endif // __cpp_deduction_guides

template <typename T>
class Slice<T>::iterator final {
public:
#if __cplusplus >= 202002L
  using iterator_category = std::contiguous_iterator_tag;
#else
  using iterator_category = std::random_access_iterator_tag;
#endif
  using value_type = T;
  using difference_type = std::ptrdiff_t;
  using pointer = typename std::add_pointer<T>::type;
  using reference = typename std::add_lvalue_reference<T>::type;

  reference operator*() const noexcept;
  pointer operator->() const noexcept;
  reference operator[](difference_type) const noexcept;

  iterator &operator++() noexcept;
  iterator operator++(int) noexcept;
  iterator &operator--() noexcept;
  iterator operator--(int) noexcept;

  iterator &operator+=(difference_type) noexcept;
  iterator &operator-=(difference_type) noexcept;
  iterator operator+(difference_type) const noexcept;
  friend inline iterator operator+(difference_type lhs, iterator rhs) noexcept {
    return rhs + lhs;
  }
  iterator operator-(difference_type) const noexcept;
  difference_type operator-(const iterator &) const noexcept;

  bool operator==(const iterator &) const noexcept;
  bool operator!=(const iterator &) const noexcept;
  bool operator<(const iterator &) const noexcept;
  bool operator<=(const iterator &) const noexcept;
  bool operator>(const iterator &) const noexcept;
  bool operator>=(const iterator &) const noexcept;

private:
  friend class Slice;
  void *pos;
  std::size_t stride;
};

template <typename T>
Slice<T>::Slice() noexcept {
  sliceInit(this, reinterpret_cast<void *>(align_of<T>()), 0);
}

template <typename T>
Slice<T>::Slice(T *s, std::size_t count) noexcept {
  assert(s != nullptr || count == 0);
  sliceInit(this,
            s == nullptr && count == 0
                ? reinterpret_cast<void *>(align_of<T>())
                : const_cast<typename std::remove_const<T>::type *>(s),
            count);
}

template <typename T>
T *Slice<T>::data() const noexcept {
  return reinterpret_cast<T *>(slicePtr(this));
}

template <typename T>
std::size_t Slice<T>::size() const noexcept {
  return sliceLen(this);
}

template <typename T>
std::size_t Slice<T>::length() const noexcept {
  return this->size();
}

template <typename T>
bool Slice<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T &Slice<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto ptr = static_cast<char *>(slicePtr(this)) + size_of<T>() * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
T &Slice<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Slice index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Slice<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Slice<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
typename Slice<T>::iterator::reference
Slice<T>::iterator::operator*() const noexcept {
  return *static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::pointer
Slice<T>::iterator::operator->() const noexcept {
  return static_cast<T *>(this->pos);
}

template <typename T>
typename Slice<T>::iterator::reference Slice<T>::iterator::operator[](
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ptr = static_cast<char *>(this->pos) + this->stride * n;
  return *reinterpret_cast<T *>(ptr);
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator++() noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator++(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) + this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator--() noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator--(int) noexcept {
  auto ret = iterator(*this);
  this->pos = static_cast<char *>(this->pos) - this->stride;
  return ret;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator+=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) + this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator &Slice<T>::iterator::operator-=(
    typename Slice<T>::iterator::difference_type n) noexcept {
  this->pos = static_cast<char *>(this->pos) - this->stride * n;
  return *this;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator+(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) + this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::iterator::operator-(
    typename Slice<T>::iterator::difference_type n) const noexcept {
  auto ret = iterator(*this);
  ret.pos = static_cast<char *>(this->pos) - this->stride * n;
  return ret;
}

template <typename T>
typename Slice<T>::iterator::difference_type
Slice<T>::iterator::operator-(const iterator &other) const noexcept {
  auto diff = std::distance(static_cast<char *>(other.pos),
                            static_cast<char *>(this->pos));
  return diff / static_cast<typename Slice<T>::iterator::difference_type>(
                    this->stride);
}

template <typename T>
bool Slice<T>::iterator::operator==(const iterator &other) const noexcept {
  return this->pos == other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator!=(const iterator &other) const noexcept {
  return this->pos != other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<(const iterator &other) const noexcept {
  return this->pos < other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator<=(const iterator &other) const noexcept {
  return this->pos <= other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>(const iterator &other) const noexcept {
  return this->pos > other.pos;
}

template <typename T>
bool Slice<T>::iterator::operator>=(const iterator &other) const noexcept {
  return this->pos >= other.pos;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::begin() const noexcept {
  iterator it;
  it.pos = slicePtr(this);
  it.stride = size_of<T>();
  return it;
}

template <typename T>
typename Slice<T>::iterator Slice<T>::end() const noexcept {
  iterator it = this->begin();
  it.pos = static_cast<char *>(it.pos) + it.stride * this->size();
  return it;
}

template <typename T>
void Slice<T>::swap(Slice &rhs) noexcept {
  std::swap(*this, rhs);
}
#endif // CXXBRIDGE1_RUST_SLICE

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

#ifndef CXXBRIDGE1_RUST_BITCOPY_T
#define CXXBRIDGE1_RUST_BITCOPY_T
struct unsafe_bitcopy_t final {
  explicit unsafe_bitcopy_t() = default;
};
#endif // CXXBRIDGE1_RUST_BITCOPY_T

#ifndef CXXBRIDGE1_RUST_VEC
#define CXXBRIDGE1_RUST_VEC
template <typename T>
class Vec final {
public:
  using value_type = T;

  Vec() noexcept;
  Vec(std::initializer_list<T>);
  Vec(const Vec &);
  Vec(Vec &&) noexcept;
  ~Vec() noexcept;

  Vec &operator=(Vec &&) & noexcept;
  Vec &operator=(const Vec &) &;

  std::size_t size() const noexcept;
  bool empty() const noexcept;
  const T *data() const noexcept;
  T *data() noexcept;
  std::size_t capacity() const noexcept;

  const T &operator[](std::size_t n) const noexcept;
  const T &at(std::size_t n) const;
  const T &front() const noexcept;
  const T &back() const noexcept;

  T &operator[](std::size_t n) noexcept;
  T &at(std::size_t n);
  T &front() noexcept;
  T &back() noexcept;

  void reserve(std::size_t new_cap);
  void push_back(const T &value);
  void push_back(T &&value);
  template <typename... Args>
  void emplace_back(Args &&...args);
  void truncate(std::size_t len);
  void clear();

  using iterator = typename Slice<T>::iterator;
  iterator begin() noexcept;
  iterator end() noexcept;

  using const_iterator = typename Slice<const T>::iterator;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  void swap(Vec &) noexcept;

  Vec(unsafe_bitcopy_t, const Vec &) noexcept;

private:
  void reserve_total(std::size_t new_cap) noexcept;
  void set_len(std::size_t len) noexcept;
  void drop() noexcept;

  friend void swap(Vec &lhs, Vec &rhs) noexcept { lhs.swap(rhs); }

  std::array<std::uintptr_t, 3> repr;
};

template <typename T>
Vec<T>::Vec(std::initializer_list<T> init) : Vec{} {
  this->reserve_total(init.size());
  std::move(init.begin(), init.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(const Vec &other) : Vec() {
  this->reserve_total(other.size());
  std::copy(other.begin(), other.end(), std::back_inserter(*this));
}

template <typename T>
Vec<T>::Vec(Vec &&other) noexcept : repr(other.repr) {
  new (&other) Vec();
}

template <typename T>
Vec<T>::~Vec() noexcept {
  this->drop();
}

template <typename T>
Vec<T> &Vec<T>::operator=(Vec &&other) & noexcept {
  this->drop();
  this->repr = other.repr;
  new (&other) Vec();
  return *this;
}

template <typename T>
Vec<T> &Vec<T>::operator=(const Vec &other) & {
  if (this != &other) {
    this->drop();
    new (this) Vec(other);
  }
  return *this;
}

template <typename T>
bool Vec<T>::empty() const noexcept {
  return this->size() == 0;
}

template <typename T>
T *Vec<T>::data() noexcept {
  return const_cast<T *>(const_cast<const Vec<T> *>(this)->data());
}

template <typename T>
const T &Vec<T>::operator[](std::size_t n) const noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<const char *>(this->data());
  return *reinterpret_cast<const T *>(data + n * size_of<T>());
}

template <typename T>
const T &Vec<T>::at(std::size_t n) const {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
const T &Vec<T>::front() const noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
const T &Vec<T>::back() const noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
T &Vec<T>::operator[](std::size_t n) noexcept {
  assert(n < this->size());
  auto data = reinterpret_cast<char *>(this->data());
  return *reinterpret_cast<T *>(data + n * size_of<T>());
}

template <typename T>
T &Vec<T>::at(std::size_t n) {
  if (n >= this->size()) {
    panic<std::out_of_range>("rust::Vec index out of range");
  }
  return (*this)[n];
}

template <typename T>
T &Vec<T>::front() noexcept {
  assert(!this->empty());
  return (*this)[0];
}

template <typename T>
T &Vec<T>::back() noexcept {
  assert(!this->empty());
  return (*this)[this->size() - 1];
}

template <typename T>
void Vec<T>::reserve(std::size_t new_cap) {
  this->reserve_total(new_cap);
}

template <typename T>
void Vec<T>::push_back(const T &value) {
  this->emplace_back(value);
}

template <typename T>
void Vec<T>::push_back(T &&value) {
  this->emplace_back(std::move(value));
}

template <typename T>
template <typename... Args>
void Vec<T>::emplace_back(Args &&...args) {
  auto size = this->size();
  this->reserve_total(size + 1);
  ::new (reinterpret_cast<T *>(reinterpret_cast<char *>(this->data()) +
                               size * size_of<T>()))
      T(std::forward<Args>(args)...);
  this->set_len(size + 1);
}

template <typename T>
void Vec<T>::clear() {
  this->truncate(0);
}

template <typename T>
typename Vec<T>::iterator Vec<T>::begin() noexcept {
  return Slice<T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::iterator Vec<T>::end() noexcept {
  return Slice<T>(this->data(), this->size()).end();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::begin() const noexcept {
  return this->cbegin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::end() const noexcept {
  return this->cend();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cbegin() const noexcept {
  return Slice<const T>(this->data(), this->size()).begin();
}

template <typename T>
typename Vec<T>::const_iterator Vec<T>::cend() const noexcept {
  return Slice<const T>(this->data(), this->size()).end();
}

template <typename T>
void Vec<T>::swap(Vec &rhs) noexcept {
  using std::swap;
  swap(this->repr, rhs.repr);
}

template <typename T>
Vec<T>::Vec(unsafe_bitcopy_t, const Vec &bits) noexcept : repr(bits.repr) {}
#endif // CXXBRIDGE1_RUST_VEC

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

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace brave_wallet {
  namespace orchard {
    struct CxxOrchardOutput;
    struct CxxMerkleHash;
    struct CxxMerklePath;
    struct CxxOrchardSpend;
    struct CxxOrchardCompactAction;
    struct CxxOrchardShardTreeState;
    struct CxxOrchardCheckpointRetention;
    struct CxxOrchardShardTreeLeaf;
    struct CxxOrchardShardTreeLeafs;
    struct CxxOrchardShardAddress;
    struct CxxOrchardShardTreeCap;
    struct CxxOrchardShard;
    struct CxxOrchardCheckpoint;
    struct CxxOrchardCheckpointBundle;
    struct CxxOrchardExtendedSpendingKey;
    struct CxxOrchardUnauthorizedBundle;
    struct CxxOrchardAuthorizedBundle;
    struct CxxOrchardDecodedBlocksBundle;
    struct CxxOrchardShardTree;
    struct CxxOrchardTestingShardTree;
    struct CxxOrchardWitness;
    struct CxxOrchardExtendedSpendingKeyResult;
    struct CxxOrchardUnauthorizedBundleResult;
    struct CxxOrchardAuthorizedBundleResult;
    struct CxxOrchardWitnessResult;
    struct CxxOrchardDecodedBlocksBundleResult;
    struct CxxOrchardTestingShardTreeResult;
    struct CxxOrchardShardTreeResult;
    struct CxxOrchardShardResultWrapper;
    struct CxxBoolResultWrapper;
    struct CxxOrchardShardTreeCapResultWrapper;
    struct CxxCheckpointIdResultWrapper;
    struct CxxCheckpointBundleResultWrapper;
    struct CxxCheckpointCountResultWrapper;
    struct CxxCheckpointsResultWrapper;
    struct CxxShardRootsResultWrapper;
    struct CxxRetainedCheckpointsResultWrapper;
    using CxxOrchardShardTreeDelegate = ::brave_wallet::orchard::CxxOrchardShardTreeDelegate;
  }
}

namespace brave_wallet {
namespace orchard {
#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardOutput
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardOutput
struct CxxOrchardOutput final {
  ::std::uint64_t value CXX_DEFAULT_VALUE(0);
  ::std::array<::std::uint8_t, 43> addr;
  ::std::array<::std::uint8_t, 512> memo;
  bool use_memo CXX_DEFAULT_VALUE(false);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardOutput

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerkleHash
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerkleHash
struct CxxMerkleHash final {
  ::std::array<::std::uint8_t, 32> hash;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerkleHash

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerklePath
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerklePath
struct CxxMerklePath final {
  ::std::uint32_t position CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> auth_path;
  ::brave_wallet::orchard::CxxMerkleHash root;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxMerklePath

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardSpend
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardSpend
struct CxxOrchardSpend final {
  ::std::array<::std::uint8_t, 96> fvk;
  ::std::array<::std::uint8_t, 32> sk;
  ::std::uint64_t value CXX_DEFAULT_VALUE(0);
  ::std::array<::std::uint8_t, 43> addr;
  ::std::array<::std::uint8_t, 32> rho;
  ::std::array<::std::uint8_t, 32> r;
  ::brave_wallet::orchard::CxxMerklePath merkle_path;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardSpend

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCompactAction
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCompactAction
struct CxxOrchardCompactAction final {
  ::std::array<::std::uint8_t, 32> nullifier;
  ::std::array<::std::uint8_t, 32> ephemeral_key;
  ::std::array<::std::uint8_t, 32> cmx;
  ::std::array<::std::uint8_t, 52> enc_cipher_text;
  ::std::uint32_t block_id CXX_DEFAULT_VALUE(0);
  bool is_block_last_action CXX_DEFAULT_VALUE(false);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCompactAction

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeState
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeState
struct CxxOrchardShardTreeState final {
  ::rust::Vec<::std::uint8_t> frontier;
  ::std::uint32_t block_height CXX_DEFAULT_VALUE(0);
  ::std::uint32_t tree_size CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeState

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointRetention
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointRetention
struct CxxOrchardCheckpointRetention final {
  bool checkpoint CXX_DEFAULT_VALUE(false);
  bool marked CXX_DEFAULT_VALUE(false);
  ::std::uint32_t checkpoint_id CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointRetention

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeaf
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeaf
struct CxxOrchardShardTreeLeaf final {
  ::std::array<::std::uint8_t, 32> hash;
  ::brave_wallet::orchard::CxxOrchardCheckpointRetention retention;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeaf

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeafs
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeafs
struct CxxOrchardShardTreeLeafs final {
  ::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> commitments;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeLeafs

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardAddress
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardAddress
struct CxxOrchardShardAddress final {
  ::std::uint8_t level CXX_DEFAULT_VALUE(0);
  ::std::uint32_t index CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardAddress

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCap
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCap
struct CxxOrchardShardTreeCap final {
  ::rust::Vec<::std::uint8_t> data;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCap

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShard
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShard
struct CxxOrchardShard final {
  ::brave_wallet::orchard::CxxOrchardShardAddress address;
  ::rust::Vec<::std::uint8_t> hash;
  ::rust::Vec<::std::uint8_t> data;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShard

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpoint
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpoint
struct CxxOrchardCheckpoint final {
  bool empty CXX_DEFAULT_VALUE(false);
  ::std::uint32_t position CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::std::uint32_t> mark_removed;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpoint

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointBundle
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointBundle
struct CxxOrchardCheckpointBundle final {
  ::std::uint32_t checkpoint_id CXX_DEFAULT_VALUE(0);
  ::brave_wallet::orchard::CxxOrchardCheckpoint checkpoint;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardCheckpointBundle

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKey
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKey
struct CxxOrchardExtendedSpendingKey final : public ::rust::Opaque {
  ::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult> derive(::std::uint32_t index) const noexcept;
  ::std::array<::std::uint8_t, 43> external_address(::std::uint32_t diversifier_index) const noexcept;
  ::std::array<::std::uint8_t, 43> internal_address(::std::uint32_t diversifier_index) const noexcept;
  ::std::array<::std::uint8_t, 96> full_view_key() const noexcept;
  ::std::array<::std::uint8_t, 32> spending_key() const noexcept;
  ~CxxOrchardExtendedSpendingKey() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKey

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundle
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundle
struct CxxOrchardUnauthorizedBundle final : public ::rust::Opaque {
  ::std::array<::std::uint8_t, 32> orchard_digest() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult> complete(::std::array<::std::uint8_t, 32> sighash) const noexcept;
  ~CxxOrchardUnauthorizedBundle() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundle

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundle
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundle
struct CxxOrchardAuthorizedBundle final : public ::rust::Opaque {
  ::rust::Vec<::std::uint8_t> raw_tx() const noexcept;
  ~CxxOrchardAuthorizedBundle() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundle

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundle
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundle
struct CxxOrchardDecodedBlocksBundle final : public ::rust::Opaque {
  ::std::size_t size() const noexcept;
  ::std::uint64_t note_value(::std::size_t index) const noexcept;
  ::std::array<::std::uint8_t, 32> note_nullifier(::std::size_t index) const noexcept;
  ::std::array<::std::uint8_t, 32> note_rho(::std::size_t index) const noexcept;
  ::std::array<::std::uint8_t, 32> note_rseed(::std::size_t index) const noexcept;
  ::std::array<::std::uint8_t, 43> note_addr(::std::size_t index) const noexcept;
  ::std::uint32_t note_block_height(::std::size_t index) const noexcept;
  ::std::uint32_t note_commitment_tree_position(::std::size_t index) const noexcept;
  ~CxxOrchardDecodedBlocksBundle() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundle

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTree
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTree
struct CxxOrchardShardTree final : public ::rust::Opaque {
  bool insert_commitments(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult> calculate_witness(::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept;
  bool truncate(::std::uint32_t checkpoint_id) noexcept;
  ~CxxOrchardShardTree() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTree

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTree
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTree
struct CxxOrchardTestingShardTree final : public ::rust::Opaque {
  bool insert_commitments(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult> calculate_witness(::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept;
  bool truncate(::std::uint32_t checkpoint_id) noexcept;
  ~CxxOrchardTestingShardTree() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTree

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitness
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitness
struct CxxOrchardWitness final : public ::rust::Opaque {
  ::std::size_t size() const noexcept;
  ::std::array<::std::uint8_t, 32> item(::std::size_t index) const noexcept;
  ~CxxOrchardWitness() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitness

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult
struct CxxOrchardExtendedSpendingKeyResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey> unwrap() noexcept;
  ~CxxOrchardExtendedSpendingKeyResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult
struct CxxOrchardUnauthorizedBundleResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle> unwrap() noexcept;
  ~CxxOrchardUnauthorizedBundleResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundleResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundleResult
struct CxxOrchardAuthorizedBundleResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle> unwrap() noexcept;
  ~CxxOrchardAuthorizedBundleResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardAuthorizedBundleResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitnessResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitnessResult
struct CxxOrchardWitnessResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardWitness> unwrap() noexcept;
  ~CxxOrchardWitnessResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardWitnessResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult
struct CxxOrchardDecodedBlocksBundleResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle> unwrap() noexcept;
  ~CxxOrchardDecodedBlocksBundleResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTreeResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTreeResult
struct CxxOrchardTestingShardTreeResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTree> unwrap() noexcept;
  ~CxxOrchardTestingShardTreeResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardTestingShardTreeResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeResult
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeResult
struct CxxOrchardShardTreeResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTree> unwrap() noexcept;
  ~CxxOrchardShardTreeResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardResultWrapper
struct CxxOrchardShardResultWrapper final : public ::rust::Opaque {
  ~CxxOrchardShardResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxBoolResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxBoolResultWrapper
struct CxxBoolResultWrapper final : public ::rust::Opaque {
  ~CxxBoolResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxBoolResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper
struct CxxOrchardShardTreeCapResultWrapper final : public ::rust::Opaque {
  ~CxxOrchardShardTreeCapResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointIdResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointIdResultWrapper
struct CxxCheckpointIdResultWrapper final : public ::rust::Opaque {
  ~CxxCheckpointIdResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointIdResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointBundleResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointBundleResultWrapper
struct CxxCheckpointBundleResultWrapper final : public ::rust::Opaque {
  ~CxxCheckpointBundleResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointBundleResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointCountResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointCountResultWrapper
struct CxxCheckpointCountResultWrapper final : public ::rust::Opaque {
  ~CxxCheckpointCountResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointCountResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointsResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointsResultWrapper
struct CxxCheckpointsResultWrapper final : public ::rust::Opaque {
  ~CxxCheckpointsResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxCheckpointsResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxShardRootsResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxShardRootsResultWrapper
struct CxxShardRootsResultWrapper final : public ::rust::Opaque {
  ~CxxShardRootsResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxShardRootsResultWrapper

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper
#define CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper
struct CxxRetainedCheckpointsResultWrapper final : public ::rust::Opaque {
  ~CxxRetainedCheckpointsResultWrapper() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper

::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult> create_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> outputs, bool ironwood, bool is_v6_transaction) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult> create_testing_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> outputs, ::std::uint64_t rng_seed, bool ironwood, bool is_v6_transaction) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult> generate_orchard_extended_spending_key_from_seed(::rust::Slice<::std::uint8_t const> bytes) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> batch_decode(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> actions) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> batch_decode_ironwood(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> actions) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeResult> create_orchard_shard_tree(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> delegate) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult> create_orchard_testing_shard_tree(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> delegate) noexcept;

::std::array<::std::uint8_t, 32> create_mock_commitment(::std::uint32_t position, ::std::uint32_t seed) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> create_mock_decode_result(::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::brave_wallet::orchard::CxxOrchardShardTreeLeafs commitments) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard(::brave_wallet::orchard::CxxOrchardShard item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard_none() noexcept;

::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> wrap_bool(bool item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> wrap_bool_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap(::brave_wallet::orchard::CxxOrchardShardTreeCap item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap_none() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id(::std::uint32_t item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id_none() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle(::brave_wallet::orchard::CxxOrchardCheckpointBundle item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle_none() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> wrap_checkpoint_count(::std::size_t item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> wrap_checkpoint_count_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> wrap_checkpoints(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> wrap_checkpoints_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> wrap_shard_tree_roots(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> wrap_shard_tree_roots_error() noexcept;

::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> wrap_retained_checkpoints(::rust::Vec<::std::uint32_t> item) noexcept;

::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> wrap_retained_checkpoints_error() noexcept;
} // namespace orchard
} // namespace brave_wallet

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
