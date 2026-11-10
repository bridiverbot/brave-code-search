#pragma once
#include "brave/components/brave_shields/core/common/adblock/resolver/adblock_domain_resolver.h"
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
#include <vector>
#if __cplusplus >= 201703L
#include <string_view>
#endif
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

#ifndef CXXBRIDGE1_RUST_STR
#define CXXBRIDGE1_RUST_STR
class Str final {
public:
  Str() noexcept;
  Str(const String &) noexcept;
  Str(const std::string &);
  Str(const char *);
  Str(const char *, std::size_t);

  Str &operator=(const Str &) & noexcept = default;

  explicit operator std::string() const;
#if __cplusplus >= 201703L
  explicit operator std::string_view() const;
#endif

  const char *data() const noexcept;
  std::size_t size() const noexcept;
  std::size_t length() const noexcept;
  bool empty() const noexcept;

  Str(const Str &) noexcept = default;
  ~Str() noexcept = default;

  using iterator = const char *;
  using const_iterator = const char *;
  const_iterator begin() const noexcept;
  const_iterator end() const noexcept;
  const_iterator cbegin() const noexcept;
  const_iterator cend() const noexcept;

  bool operator==(const Str &) const noexcept;
  bool operator!=(const Str &) const noexcept;
  bool operator<(const Str &) const noexcept;
  bool operator<=(const Str &) const noexcept;
  bool operator>(const Str &) const noexcept;
  bool operator>=(const Str &) const noexcept;

  void swap(Str &) noexcept;

private:
  class uninit;
  Str(uninit) noexcept;
  friend impl<Str>;

  std::array<std::uintptr_t, 2> repr;
};
#endif // CXXBRIDGE1_RUST_STR

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

namespace adblock {
  struct FilterSet;
  struct BraveCoreResourceStorage;
  struct Engine;
  struct DomainPosition;
  struct BlockerResult;
  struct FilterRuleInfo;
  struct RegexDebugEntry;
  struct SourceInfo;
  struct DebugInfo;
  struct RegexManagerDiscardPolicy;
  struct FilterListMetadata;
  struct AddedFiltersRecord;
  struct ContentBlockingRules;
  enum class ResultKind : ::std::uint8_t;
  struct ContentBlockingRulesResult;
  struct VecStringResult;
  struct BoxEngineResult;
  struct AddFilterListResult;
  struct OptionalString;
  struct OptionalU16;
}

namespace adblock {
#ifndef CXXBRIDGE1_STRUCT_adblock$FilterSet
#define CXXBRIDGE1_STRUCT_adblock$FilterSet
struct FilterSet final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::adblock::AddFilterListResult add_filter_list(::std::vector<::std::uint8_t> const &rules) noexcept;
  __attribute__((visibility("default"))) ::adblock::AddFilterListResult add_filter_list_with_permissions(::std::vector<::std::uint8_t> const &rules, ::std::uint8_t permission_mask) noexcept;
  ~FilterSet() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_adblock$FilterSet

#ifndef CXXBRIDGE1_STRUCT_adblock$BraveCoreResourceStorage
#define CXXBRIDGE1_STRUCT_adblock$BraveCoreResourceStorage
struct BraveCoreResourceStorage final : public ::rust::Opaque {
  ~BraveCoreResourceStorage() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_adblock$BraveCoreResourceStorage

#ifndef CXXBRIDGE1_STRUCT_adblock$Engine
#define CXXBRIDGE1_STRUCT_adblock$Engine
struct Engine final : public ::rust::Opaque {
  // Checks if a given request should be blocked and returns an
  // evaluation result struct with information on a matching rule
  // and actions.
  __attribute__((visibility("default"))) ::adblock::BlockerResult matches(::std::string const &url, ::std::string const &hostname, ::std::string const &initiator_hostname, ::std::string const &request_type, bool third_party_request, ::std::string const &method, bool previously_matched_rule, bool force_check_exceptions) const noexcept;

  // Returns additional CSP directives to be added to a web response,
  // if applicable to the request.
  __attribute__((visibility("default"))) ::rust::String get_csp_directives(::std::string const &url, ::std::string const &hostname, ::std::string const &source_hostname, ::std::string const &request_type, bool third_party_request, ::std::string const &method) const noexcept;

  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> serialize() const noexcept;

  // Deserializes and loads a binary-serialized Engine.
  __attribute__((visibility("default"))) bool deserialize(::std::vector<::std::uint8_t> const &serialized) noexcept;

  // Loads resources from a ResourceStorage instance into the engine.
  __attribute__((visibility("default"))) void use_resource_storage(::adblock::BraveCoreResourceStorage const &storage) noexcept;

  // Returns JSON-serialized cosmetic filter resources for a given url.
  __attribute__((visibility("default"))) ::rust::String url_cosmetic_resources(::std::string const &url) const noexcept;

  // Returns list of CSS selectors that require a generic CSS hide rule,
  // from a given set of classes, ids and exceptions.
  __attribute__((visibility("default"))) ::adblock::VecStringResult hidden_class_id_selectors(::std::vector<::std::string> const &classes, ::std::vector<::std::string> const &ids, ::std::vector<::std::string> const &exceptions) const noexcept;

  // Returns the blocker debug info containing regex info.
  __attribute__((visibility("default"))) ::adblock::DebugInfo get_debug_info() const noexcept;

  // Removes a regex entry by the id.
  __attribute__((visibility("default"))) void discard_regex(::std::uint64_t regex_id) noexcept;

  // Sets a discard policy for the regex manager.
  __attribute__((visibility("default"))) void set_regex_discard_policy(::adblock::RegexManagerDiscardPolicy const &new_discard_policy) noexcept;

  ~Engine() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_adblock$Engine

#ifndef CXXBRIDGE1_STRUCT_adblock$DomainPosition
#define CXXBRIDGE1_STRUCT_adblock$DomainPosition
struct DomainPosition final {
  ::std::uint32_t start CXX_DEFAULT_VALUE(0);
  ::std::uint32_t end CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$DomainPosition

#ifndef CXXBRIDGE1_STRUCT_adblock$OptionalString
#define CXXBRIDGE1_STRUCT_adblock$OptionalString
struct OptionalString final {
  bool has_value CXX_DEFAULT_VALUE(false);
  ::rust::String value;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$OptionalString

#ifndef CXXBRIDGE1_STRUCT_adblock$BlockerResult
#define CXXBRIDGE1_STRUCT_adblock$BlockerResult
struct BlockerResult final {
  bool matched CXX_DEFAULT_VALUE(false);
  bool important CXX_DEFAULT_VALUE(false);
  bool has_exception CXX_DEFAULT_VALUE(false);
  ::adblock::OptionalString redirect;
  ::adblock::OptionalString rewritten_url;
  ::std::unique_ptr<::adblock::FilterRuleInfo> filter;
  ::std::unique_ptr<::adblock::FilterRuleInfo> exception;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$BlockerResult

#ifndef CXXBRIDGE1_STRUCT_adblock$FilterRuleInfo
#define CXXBRIDGE1_STRUCT_adblock$FilterRuleInfo
struct FilterRuleInfo final {
  ::rust::String raw_line;
  ::std::int32_t source_index CXX_DEFAULT_VALUE(0);
  ::std::int32_t line_number CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$FilterRuleInfo

#ifndef CXXBRIDGE1_STRUCT_adblock$RegexDebugEntry
#define CXXBRIDGE1_STRUCT_adblock$RegexDebugEntry
struct RegexDebugEntry final {
  ::std::uint64_t id CXX_DEFAULT_VALUE(0);
  ::adblock::OptionalString regex;
  ::std::uint64_t unused_secs CXX_DEFAULT_VALUE(0);
  ::std::size_t usage_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$RegexDebugEntry

#ifndef CXXBRIDGE1_STRUCT_adblock$SourceInfo
#define CXXBRIDGE1_STRUCT_adblock$SourceInfo
struct SourceInfo final {
  ::adblock::OptionalString title;
  ::adblock::OptionalString homepage;
  ::std::size_t network_filter_count CXX_DEFAULT_VALUE(0);
  ::std::size_t cosmetic_filter_count CXX_DEFAULT_VALUE(0);
  ::std::size_t parse_error CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::rust::String> invalid_lines;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$SourceInfo

#ifndef CXXBRIDGE1_STRUCT_adblock$DebugInfo
#define CXXBRIDGE1_STRUCT_adblock$DebugInfo
struct DebugInfo final {
  ::rust::Vec<::adblock::RegexDebugEntry> regex_data;
  ::std::size_t compiled_regex_count CXX_DEFAULT_VALUE(0);
  ::std::size_t flatbuffer_size CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::adblock::SourceInfo> source_info;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$DebugInfo

#ifndef CXXBRIDGE1_STRUCT_adblock$RegexManagerDiscardPolicy
#define CXXBRIDGE1_STRUCT_adblock$RegexManagerDiscardPolicy
struct RegexManagerDiscardPolicy final {
  ::std::uint64_t cleanup_interval_secs CXX_DEFAULT_VALUE(0);
  ::std::uint64_t discard_unused_secs CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$RegexManagerDiscardPolicy

#ifndef CXXBRIDGE1_STRUCT_adblock$OptionalU16
#define CXXBRIDGE1_STRUCT_adblock$OptionalU16
struct OptionalU16 final {
  bool has_value CXX_DEFAULT_VALUE(false);
  ::std::uint16_t value CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$OptionalU16

#ifndef CXXBRIDGE1_STRUCT_adblock$FilterListMetadata
#define CXXBRIDGE1_STRUCT_adblock$FilterListMetadata
struct FilterListMetadata final {
  ::adblock::OptionalString homepage;
  ::adblock::OptionalString title;
  ::adblock::OptionalU16 expires_hours;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$FilterListMetadata

#ifndef CXXBRIDGE1_STRUCT_adblock$AddedFiltersRecord
#define CXXBRIDGE1_STRUCT_adblock$AddedFiltersRecord
struct AddedFiltersRecord final {
  ::std::size_t source_index CXX_DEFAULT_VALUE(0);
  ::adblock::FilterListMetadata metadata;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$AddedFiltersRecord

#ifndef CXXBRIDGE1_STRUCT_adblock$ContentBlockingRules
#define CXXBRIDGE1_STRUCT_adblock$ContentBlockingRules
struct ContentBlockingRules final {
  ::rust::String rules_json;
  bool truncated CXX_DEFAULT_VALUE(false);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$ContentBlockingRules

#ifndef CXXBRIDGE1_ENUM_adblock$ResultKind
#define CXXBRIDGE1_ENUM_adblock$ResultKind
enum class ResultKind : ::std::uint8_t {
  Success = 0,
  JsonError = 1,
  Utf8Error = 2,
  AdblockError = 3,
};
#endif // CXXBRIDGE1_ENUM_adblock$ResultKind

#ifndef CXXBRIDGE1_STRUCT_adblock$ContentBlockingRulesResult
#define CXXBRIDGE1_STRUCT_adblock$ContentBlockingRulesResult
struct ContentBlockingRulesResult final {
  ::adblock::ContentBlockingRules value;
  ::adblock::ResultKind result_kind;
  ::rust::String error_message;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$ContentBlockingRulesResult

#ifndef CXXBRIDGE1_STRUCT_adblock$VecStringResult
#define CXXBRIDGE1_STRUCT_adblock$VecStringResult
struct VecStringResult final {
  ::rust::Vec<::rust::String> value;
  ::adblock::ResultKind result_kind;
  ::rust::String error_message;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$VecStringResult

#ifndef CXXBRIDGE1_STRUCT_adblock$BoxEngineResult
#define CXXBRIDGE1_STRUCT_adblock$BoxEngineResult
struct BoxEngineResult final {
  ::rust::Box<::adblock::Engine> value;
  ::adblock::ResultKind result_kind;
  ::rust::String error_message;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$BoxEngineResult

#ifndef CXXBRIDGE1_STRUCT_adblock$AddFilterListResult
#define CXXBRIDGE1_STRUCT_adblock$AddFilterListResult
struct AddFilterListResult final {
  ::adblock::AddedFiltersRecord value;
  ::adblock::ResultKind result_kind;
  ::rust::String error_message;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_adblock$AddFilterListResult

__attribute__((visibility("default"))) ::rust::Box<::adblock::FilterSet> new_filter_set(bool debug) noexcept;

__attribute__((visibility("default"))) ::rust::Box<::adblock::BraveCoreResourceStorage> new_resource_storage(::std::string const &resources_json) noexcept;

__attribute__((visibility("default"))) ::rust::Box<::adblock::BraveCoreResourceStorage> new_empty_resource_storage() noexcept;

__attribute__((visibility("default"))) ::rust::Box<::adblock::BraveCoreResourceStorage> clone_resource_storage(::adblock::BraveCoreResourceStorage const &storage) noexcept;

__attribute__((visibility("default"))) ::rust::Box<::adblock::BraveCoreResourceStorage> extend_resource_storage(::adblock::BraveCoreResourceStorage const &storage, ::rust::Str additional_resources_json) noexcept;

__attribute__((visibility("default"))) bool has_resource_for_testing(::adblock::BraveCoreResourceStorage const &storage, ::std::string const &name) noexcept;

// Creates a new engine with no rules.
__attribute__((visibility("default"))) ::rust::Box<::adblock::Engine> new_engine() noexcept;

// Creates a new engine with rules from a given filter list.
// Deprecated: Use engine_from_filter_set instead.
__attribute__((visibility("default"))) ::adblock::BoxEngineResult engine_with_rules(::std::vector<::std::uint8_t> const &rules) noexcept;

// Creates a new engine with rules from a given filter set.
__attribute__((visibility("default"))) ::adblock::BoxEngineResult engine_from_filter_set(::rust::Box<::adblock::FilterSet> filter_set) noexcept;

// Configures the adblock domain resolver to the call
// `resolve_domain_position` implemented in adblock_domain_resolver.cc.
__attribute__((visibility("default"))) bool set_domain_resolver() noexcept;

// Extracts the homepage and title from the metadata contained in a
// filter list.
__attribute__((visibility("default"))) ::adblock::FilterListMetadata read_list_metadata(::std::vector<::std::uint8_t> const &list) noexcept;

// Converts a list in adblock syntax to its corresponding iOS
// content-blocking syntax. `truncated` will be set to indicate
// whether or not some rules had to be removed to avoid iOS's
// maximum rule count limit.
__attribute__((visibility("default"))) ::adblock::ContentBlockingRulesResult convert_rules_to_content_blocking(::std::string const &rules) noexcept;
} // namespace adblock

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
