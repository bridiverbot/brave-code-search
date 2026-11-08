#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
#include <iterator>
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

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#ifdef __clang__
#pragma clang diagnostic ignored "-Wdollar-in-identifier-extension"
#endif // __clang__
#endif // __GNUC__

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

namespace detail {
template <typename T, typename = void *>
struct operator_new {
  void *operator()(::std::size_t sz) { return ::operator new(sz); }
};

template <typename T>
struct operator_new<T, decltype(T::operator new(sizeof(T)))> {
  void *operator()(::std::size_t sz) { return T::operator new(sz); }
};
} // namespace detail

template <typename T>
union MaybeUninit {
  T value;
  void *operator new(::std::size_t sz) { return detail::operator_new<T>{}(sz); }
  MaybeUninit() {}
  ~MaybeUninit() {}
};
} // namespace cxxbridge1
} // namespace rust

namespace cbr_cxx {
  struct Error;
  enum class TokenError : ::std::uint8_t;
  struct TokenPreimage;
  struct Token;
  struct BlindedToken;
  struct SignedToken;
  struct UnblindedToken;
  struct SigningKey;
  struct PublicKey;
  struct VerificationKey;
  struct VerificationSignature;
  struct BatchDLEQProof;
  struct Tokens;
  struct BlindedTokens;
  struct SignedTokens;
  struct UnblindedTokens;
  struct TokenPreimageResult;
  struct TokenResult;
  struct BlindedTokenResult;
  struct SignedTokenResult;
  struct UnblindedTokenResult;
  struct SigningKeyResult;
  struct PublicKeyResult;
  struct VerificationSignatureResult;
  struct BatchDLEQProofResult;
  struct TokensResult;
  struct BlindedTokensResult;
  struct SignedTokensResult;
  struct UnblindedTokensResult;
}

namespace cbr_cxx {
#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$Error
#define CXXBRIDGE1_STRUCT_cbr_cxx$Error
struct Error final {
  ::cbr_cxx::TokenError code;
  ::rust::String msg;

  __declspec(dllexport) bool is_ok() const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$Error

#ifndef CXXBRIDGE1_ENUM_cbr_cxx$TokenError
#define CXXBRIDGE1_ENUM_cbr_cxx$TokenError
enum class TokenError : ::std::uint8_t {
  None = 0,
  PointDecompressionError = 1,
  ScalarFormatError = 2,
  BytesLengthError = 3,
  VerifyError = 4,
  LengthMismatchError = 5,
  DecodingError = 6,
  InvalidInput = 7,
};
#endif // CXXBRIDGE1_ENUM_cbr_cxx$TokenError

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimage
#define CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimage
struct TokenPreimage final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  ~TokenPreimage() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimage

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$Token
#define CXXBRIDGE1_STRUCT_cbr_cxx$Token
struct Token final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokenResult> blind() const noexcept;
  ~Token() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$Token

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BlindedToken
#define CXXBRIDGE1_STRUCT_cbr_cxx$BlindedToken
struct BlindedToken final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  ~BlindedToken() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BlindedToken

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SignedToken
#define CXXBRIDGE1_STRUCT_cbr_cxx$SignedToken
struct SignedToken final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  ~SignedToken() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SignedToken

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedToken
#define CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedToken
struct UnblindedToken final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationKey> derive_verification_key() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationKey> derive_verification_key_rfc() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::TokenPreimage> preimage() const noexcept;
  ~UnblindedToken() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedToken

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SigningKey
#define CXXBRIDGE1_STRUCT_cbr_cxx$SigningKey
struct SigningKey final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::PublicKey> public_key() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokenResult> sign(::cbr_cxx::BlindedToken const &token) const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedToken> rederive_unblinded_token(::cbr_cxx::TokenPreimage const &t) const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokenResult> rederive_unblinded_token_rfc(::cbr_cxx::TokenPreimage const &t) const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::BatchDLEQProofResult> new_batch_dleq_proof(::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens) const noexcept;
  ~SigningKey() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SigningKey

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$PublicKey
#define CXXBRIDGE1_STRUCT_cbr_cxx$PublicKey
struct PublicKey final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  ~PublicKey() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$PublicKey

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$VerificationKey
#define CXXBRIDGE1_STRUCT_cbr_cxx$VerificationKey
struct VerificationKey final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationSignature> sign(::std::string const &msg) const noexcept;
  __declspec(dllexport) bool verify(::cbr_cxx::VerificationSignature const &sig, ::std::string const &msg) const noexcept;
  ~VerificationKey() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$VerificationKey

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignature
#define CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignature
struct VerificationSignature final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  ~VerificationSignature() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignature

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProof
#define CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProof
struct BatchDLEQProof final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::String encode_base64() const noexcept;
  __declspec(dllexport) ::cbr_cxx::Error verify(::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key) const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokensResult> verify_and_unblind(::cbr_cxx::Tokens const &tokens, ::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key) const noexcept;
  ~BatchDLEQProof() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProof

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$Tokens
#define CXXBRIDGE1_STRUCT_cbr_cxx$Tokens
struct Tokens final : public ::rust::Opaque {
  ~Tokens() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$Tokens

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokens
#define CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokens
struct BlindedTokens final : public ::rust::Opaque {
  ~BlindedTokens() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokens

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokens
#define CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokens
struct SignedTokens final : public ::rust::Opaque {
  ~SignedTokens() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokens

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokens
#define CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokens
struct UnblindedTokens final : public ::rust::Opaque {
  __declspec(dllexport) ::rust::Vec<::cbr_cxx::UnblindedToken> const &as_vec() const noexcept;
  ~UnblindedTokens() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokens

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimageResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimageResult
struct TokenPreimageResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::TokenPreimage> unwrap() const noexcept;
  ~TokenPreimageResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$TokenPreimageResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$TokenResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$TokenResult
struct TokenResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::Token> unwrap() const noexcept;
  ~TokenResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$TokenResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokenResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokenResult
struct BlindedTokenResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedToken> unwrap() const noexcept;
  ~BlindedTokenResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokenResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokenResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokenResult
struct SignedTokenResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::SignedToken> unwrap() const noexcept;
  ~SignedTokenResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokenResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokenResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokenResult
struct UnblindedTokenResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedToken> unwrap() const noexcept;
  ~UnblindedTokenResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokenResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SigningKeyResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$SigningKeyResult
struct SigningKeyResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::SigningKey> unwrap() const noexcept;
  ~SigningKeyResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SigningKeyResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$PublicKeyResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$PublicKeyResult
struct PublicKeyResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::PublicKey> unwrap() const noexcept;
  ~PublicKeyResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$PublicKeyResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignatureResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignatureResult
struct VerificationSignatureResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationSignature> unwrap() const noexcept;
  ~VerificationSignatureResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$VerificationSignatureResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProofResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProofResult
struct BatchDLEQProofResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::BatchDLEQProof> unwrap() const noexcept;
  ~BatchDLEQProofResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BatchDLEQProofResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$TokensResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$TokensResult
struct TokensResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::Tokens> unwrap() const noexcept;
  ~TokensResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$TokensResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokensResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokensResult
struct BlindedTokensResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokens> unwrap() const noexcept;
  ~BlindedTokensResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$BlindedTokensResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokensResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokensResult
struct SignedTokensResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokens> unwrap() const noexcept;
  ~SignedTokensResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$SignedTokensResult

#ifndef CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokensResult
#define CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokensResult
struct UnblindedTokensResult final : public ::rust::Opaque {
  __declspec(dllexport) ::cbr_cxx::Error const &error() const noexcept;
  __declspec(dllexport) bool is_ok() const noexcept;
  __declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokens> unwrap() const noexcept;
  ~UnblindedTokensResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_cbr_cxx$UnblindedTokensResult

extern "C" {
::std::size_t cbr_cxx$cxxbridge1$202$TokenPreimage$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokenPreimage$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$Token$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$Token$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedToken$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedToken$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedToken$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedToken$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedToken$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedToken$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SigningKey$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SigningKey$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$PublicKey$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$PublicKey$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationKey$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationKey$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationSignature$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationSignature$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BatchDLEQProof$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BatchDLEQProof$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$Tokens$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$Tokens$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokens$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokens$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokens$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokens$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokens$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokens$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokenPreimageResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokenPreimageResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokenResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokenResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokenResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokenResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokenResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokenResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokenResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokenResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SigningKeyResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SigningKeyResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$PublicKeyResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$PublicKeyResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationSignatureResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$VerificationSignatureResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokensResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$TokensResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokensResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$BlindedTokensResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokensResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$SignedTokensResult$operator$alignof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokensResult$operator$sizeof() noexcept;
::std::size_t cbr_cxx$cxxbridge1$202$UnblindedTokensResult$operator$alignof() noexcept;

bool cbr_cxx$cxxbridge1$202$Error$is_ok(::cbr_cxx::Error const &self) noexcept;

void cbr_cxx$cxxbridge1$202$TokenPreimage$encode_base64(::cbr_cxx::TokenPreimage const &self, ::rust::String *return$) noexcept;

::cbr_cxx::TokenPreimageResult *cbr_cxx$cxxbridge1$202$decode_base64_token_preimage(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$TokenPreimageResult$error(::cbr_cxx::TokenPreimageResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$TokenPreimageResult$is_ok(::cbr_cxx::TokenPreimageResult const &self) noexcept;

::cbr_cxx::TokenPreimage *cbr_cxx$cxxbridge1$202$TokenPreimageResult$unwrap(::cbr_cxx::TokenPreimageResult const &self) noexcept;

::cbr_cxx::Token *cbr_cxx$cxxbridge1$202$generate_token() noexcept;

void cbr_cxx$cxxbridge1$202$Token$encode_base64(::cbr_cxx::Token const &self, ::rust::String *return$) noexcept;

::cbr_cxx::BlindedTokenResult *cbr_cxx$cxxbridge1$202$Token$blind(::cbr_cxx::Token const &self) noexcept;

::cbr_cxx::TokenResult *cbr_cxx$cxxbridge1$202$decode_base64_token(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$TokenResult$error(::cbr_cxx::TokenResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$TokenResult$is_ok(::cbr_cxx::TokenResult const &self) noexcept;

::cbr_cxx::Token *cbr_cxx$cxxbridge1$202$TokenResult$unwrap(::cbr_cxx::TokenResult const &self) noexcept;

void cbr_cxx$cxxbridge1$202$BlindedToken$encode_base64(::cbr_cxx::BlindedToken const &self, ::rust::String *return$) noexcept;

::cbr_cxx::BlindedTokenResult *cbr_cxx$cxxbridge1$202$decode_base64_blinded_token(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$BlindedTokenResult$error(::cbr_cxx::BlindedTokenResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$BlindedTokenResult$is_ok(::cbr_cxx::BlindedTokenResult const &self) noexcept;

::cbr_cxx::BlindedToken *cbr_cxx$cxxbridge1$202$BlindedTokenResult$unwrap(::cbr_cxx::BlindedTokenResult const &self) noexcept;

void cbr_cxx$cxxbridge1$202$SignedToken$encode_base64(::cbr_cxx::SignedToken const &self, ::rust::String *return$) noexcept;

::cbr_cxx::SignedTokenResult *cbr_cxx$cxxbridge1$202$decode_base64_signed_token(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$SignedTokenResult$error(::cbr_cxx::SignedTokenResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$SignedTokenResult$is_ok(::cbr_cxx::SignedTokenResult const &self) noexcept;

::cbr_cxx::SignedToken *cbr_cxx$cxxbridge1$202$SignedTokenResult$unwrap(::cbr_cxx::SignedTokenResult const &self) noexcept;

void cbr_cxx$cxxbridge1$202$UnblindedToken$encode_base64(::cbr_cxx::UnblindedToken const &self, ::rust::String *return$) noexcept;

::cbr_cxx::VerificationKey *cbr_cxx$cxxbridge1$202$UnblindedToken$derive_verification_key(::cbr_cxx::UnblindedToken const &self) noexcept;

::cbr_cxx::VerificationKey *cbr_cxx$cxxbridge1$202$UnblindedToken$derive_verification_key_rfc(::cbr_cxx::UnblindedToken const &self) noexcept;

::cbr_cxx::TokenPreimage *cbr_cxx$cxxbridge1$202$UnblindedToken$preimage(::cbr_cxx::UnblindedToken const &self) noexcept;

::cbr_cxx::UnblindedTokenResult *cbr_cxx$cxxbridge1$202$decode_base64_unblinded_token(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$UnblindedTokenResult$error(::cbr_cxx::UnblindedTokenResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$UnblindedTokenResult$is_ok(::cbr_cxx::UnblindedTokenResult const &self) noexcept;

::cbr_cxx::UnblindedToken *cbr_cxx$cxxbridge1$202$UnblindedTokenResult$unwrap(::cbr_cxx::UnblindedTokenResult const &self) noexcept;

::cbr_cxx::SigningKey *cbr_cxx$cxxbridge1$202$generate_signing_key() noexcept;

void cbr_cxx$cxxbridge1$202$SigningKey$encode_base64(::cbr_cxx::SigningKey const &self, ::rust::String *return$) noexcept;

::cbr_cxx::PublicKey *cbr_cxx$cxxbridge1$202$SigningKey$public_key(::cbr_cxx::SigningKey const &self) noexcept;

::cbr_cxx::SignedTokenResult *cbr_cxx$cxxbridge1$202$SigningKey$sign(::cbr_cxx::SigningKey const &self, ::cbr_cxx::BlindedToken const &token) noexcept;

::cbr_cxx::UnblindedToken *cbr_cxx$cxxbridge1$202$SigningKey$rederive_unblinded_token(::cbr_cxx::SigningKey const &self, ::cbr_cxx::TokenPreimage const &t) noexcept;

::cbr_cxx::UnblindedTokenResult *cbr_cxx$cxxbridge1$202$SigningKey$rederive_unblinded_token_rfc(::cbr_cxx::SigningKey const &self, ::cbr_cxx::TokenPreimage const &t) noexcept;

::cbr_cxx::SigningKeyResult *cbr_cxx$cxxbridge1$202$decode_base64_signing_key(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$SigningKeyResult$error(::cbr_cxx::SigningKeyResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$SigningKeyResult$is_ok(::cbr_cxx::SigningKeyResult const &self) noexcept;

::cbr_cxx::SigningKey *cbr_cxx$cxxbridge1$202$SigningKeyResult$unwrap(::cbr_cxx::SigningKeyResult const &self) noexcept;

void cbr_cxx$cxxbridge1$202$PublicKey$encode_base64(::cbr_cxx::PublicKey const &self, ::rust::String *return$) noexcept;

::cbr_cxx::PublicKeyResult *cbr_cxx$cxxbridge1$202$decode_base64_public_key(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$PublicKeyResult$error(::cbr_cxx::PublicKeyResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$PublicKeyResult$is_ok(::cbr_cxx::PublicKeyResult const &self) noexcept;

::cbr_cxx::PublicKey *cbr_cxx$cxxbridge1$202$PublicKeyResult$unwrap(::cbr_cxx::PublicKeyResult const &self) noexcept;

::cbr_cxx::VerificationSignature *cbr_cxx$cxxbridge1$202$VerificationKey$sign(::cbr_cxx::VerificationKey const &self, ::std::string const &msg) noexcept;

bool cbr_cxx$cxxbridge1$202$VerificationKey$verify(::cbr_cxx::VerificationKey const &self, ::cbr_cxx::VerificationSignature const &sig, ::std::string const &msg) noexcept;

void cbr_cxx$cxxbridge1$202$VerificationSignature$encode_base64(::cbr_cxx::VerificationSignature const &self, ::rust::String *return$) noexcept;

::cbr_cxx::VerificationSignatureResult *cbr_cxx$cxxbridge1$202$decode_base64_verification_signature(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$VerificationSignatureResult$error(::cbr_cxx::VerificationSignatureResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$VerificationSignatureResult$is_ok(::cbr_cxx::VerificationSignatureResult const &self) noexcept;

::cbr_cxx::VerificationSignature *cbr_cxx$cxxbridge1$202$VerificationSignatureResult$unwrap(::cbr_cxx::VerificationSignatureResult const &self) noexcept;

::cbr_cxx::BatchDLEQProofResult *cbr_cxx$cxxbridge1$202$SigningKey$new_batch_dleq_proof(::cbr_cxx::SigningKey const &self, ::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens) noexcept;

void cbr_cxx$cxxbridge1$202$BatchDLEQProof$encode_base64(::cbr_cxx::BatchDLEQProof const &self, ::rust::String *return$) noexcept;

void cbr_cxx$cxxbridge1$202$BatchDLEQProof$verify(::cbr_cxx::BatchDLEQProof const &self, ::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key, ::cbr_cxx::Error *return$) noexcept;

::cbr_cxx::UnblindedTokensResult *cbr_cxx$cxxbridge1$202$BatchDLEQProof$verify_and_unblind(::cbr_cxx::BatchDLEQProof const &self, ::cbr_cxx::Tokens const &tokens, ::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key) noexcept;

::cbr_cxx::BatchDLEQProofResult *cbr_cxx$cxxbridge1$202$decode_base64_batch_dleq_proof(::rust::Str s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$error(::cbr_cxx::BatchDLEQProofResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$is_ok(::cbr_cxx::BatchDLEQProofResult const &self) noexcept;

::cbr_cxx::BatchDLEQProof *cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$unwrap(::cbr_cxx::BatchDLEQProofResult const &self) noexcept;

::cbr_cxx::TokensResult *cbr_cxx$cxxbridge1$202$decode_base64_tokens(::std::vector<::std::string> const &s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$TokensResult$error(::cbr_cxx::TokensResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$TokensResult$is_ok(::cbr_cxx::TokensResult const &self) noexcept;

::cbr_cxx::Tokens *cbr_cxx$cxxbridge1$202$TokensResult$unwrap(::cbr_cxx::TokensResult const &self) noexcept;

::cbr_cxx::BlindedTokensResult *cbr_cxx$cxxbridge1$202$decode_base64_blinded_tokens(::std::vector<::std::string> const &s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$BlindedTokensResult$error(::cbr_cxx::BlindedTokensResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$BlindedTokensResult$is_ok(::cbr_cxx::BlindedTokensResult const &self) noexcept;

::cbr_cxx::BlindedTokens *cbr_cxx$cxxbridge1$202$BlindedTokensResult$unwrap(::cbr_cxx::BlindedTokensResult const &self) noexcept;

::cbr_cxx::SignedTokensResult *cbr_cxx$cxxbridge1$202$decode_base64_signed_tokens(::std::vector<::std::string> const &s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$SignedTokensResult$error(::cbr_cxx::SignedTokensResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$SignedTokensResult$is_ok(::cbr_cxx::SignedTokensResult const &self) noexcept;

::cbr_cxx::SignedTokens *cbr_cxx$cxxbridge1$202$SignedTokensResult$unwrap(::cbr_cxx::SignedTokensResult const &self) noexcept;

::cbr_cxx::UnblindedTokensResult *cbr_cxx$cxxbridge1$202$decode_base64_unblinded_tokens(::std::vector<::std::string> const &s) noexcept;

::cbr_cxx::Error const *cbr_cxx$cxxbridge1$202$UnblindedTokensResult$error(::cbr_cxx::UnblindedTokensResult const &self) noexcept;

bool cbr_cxx$cxxbridge1$202$UnblindedTokensResult$is_ok(::cbr_cxx::UnblindedTokensResult const &self) noexcept;

::cbr_cxx::UnblindedTokens *cbr_cxx$cxxbridge1$202$UnblindedTokensResult$unwrap(::cbr_cxx::UnblindedTokensResult const &self) noexcept;

::rust::Vec<::cbr_cxx::UnblindedToken> const *cbr_cxx$cxxbridge1$202$UnblindedTokens$as_vec(::cbr_cxx::UnblindedTokens const &self) noexcept;
} // extern "C"

::std::size_t TokenPreimage::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenPreimage$operator$sizeof();
}

::std::size_t TokenPreimage::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenPreimage$operator$alignof();
}

::std::size_t Token::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$Token$operator$sizeof();
}

::std::size_t Token::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$Token$operator$alignof();
}

::std::size_t BlindedToken::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedToken$operator$sizeof();
}

::std::size_t BlindedToken::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedToken$operator$alignof();
}

::std::size_t SignedToken::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedToken$operator$sizeof();
}

::std::size_t SignedToken::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedToken$operator$alignof();
}

::std::size_t UnblindedToken::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedToken$operator$sizeof();
}

::std::size_t UnblindedToken::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedToken$operator$alignof();
}

::std::size_t SigningKey::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SigningKey$operator$sizeof();
}

::std::size_t SigningKey::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SigningKey$operator$alignof();
}

::std::size_t PublicKey::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$PublicKey$operator$sizeof();
}

::std::size_t PublicKey::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$PublicKey$operator$alignof();
}

::std::size_t VerificationKey::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationKey$operator$sizeof();
}

::std::size_t VerificationKey::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationKey$operator$alignof();
}

::std::size_t VerificationSignature::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationSignature$operator$sizeof();
}

::std::size_t VerificationSignature::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationSignature$operator$alignof();
}

::std::size_t BatchDLEQProof::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BatchDLEQProof$operator$sizeof();
}

::std::size_t BatchDLEQProof::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BatchDLEQProof$operator$alignof();
}

::std::size_t Tokens::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$Tokens$operator$sizeof();
}

::std::size_t Tokens::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$Tokens$operator$alignof();
}

::std::size_t BlindedTokens::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokens$operator$sizeof();
}

::std::size_t BlindedTokens::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokens$operator$alignof();
}

::std::size_t SignedTokens::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokens$operator$sizeof();
}

::std::size_t SignedTokens::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokens$operator$alignof();
}

::std::size_t UnblindedTokens::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokens$operator$sizeof();
}

::std::size_t UnblindedTokens::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokens$operator$alignof();
}

::std::size_t TokenPreimageResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenPreimageResult$operator$sizeof();
}

::std::size_t TokenPreimageResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenPreimageResult$operator$alignof();
}

::std::size_t TokenResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenResult$operator$sizeof();
}

::std::size_t TokenResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$TokenResult$operator$alignof();
}

::std::size_t BlindedTokenResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokenResult$operator$sizeof();
}

::std::size_t BlindedTokenResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokenResult$operator$alignof();
}

::std::size_t SignedTokenResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokenResult$operator$sizeof();
}

::std::size_t SignedTokenResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokenResult$operator$alignof();
}

::std::size_t UnblindedTokenResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokenResult$operator$sizeof();
}

::std::size_t UnblindedTokenResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokenResult$operator$alignof();
}

::std::size_t SigningKeyResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SigningKeyResult$operator$sizeof();
}

::std::size_t SigningKeyResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SigningKeyResult$operator$alignof();
}

::std::size_t PublicKeyResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$PublicKeyResult$operator$sizeof();
}

::std::size_t PublicKeyResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$PublicKeyResult$operator$alignof();
}

::std::size_t VerificationSignatureResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationSignatureResult$operator$sizeof();
}

::std::size_t VerificationSignatureResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationSignatureResult$operator$alignof();
}

::std::size_t BatchDLEQProofResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$operator$sizeof();
}

::std::size_t BatchDLEQProofResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$operator$alignof();
}

::std::size_t TokensResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$TokensResult$operator$sizeof();
}

::std::size_t TokensResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$TokensResult$operator$alignof();
}

::std::size_t BlindedTokensResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokensResult$operator$sizeof();
}

::std::size_t BlindedTokensResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokensResult$operator$alignof();
}

::std::size_t SignedTokensResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokensResult$operator$sizeof();
}

::std::size_t SignedTokensResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokensResult$operator$alignof();
}

::std::size_t UnblindedTokensResult::layout::size() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokensResult$operator$sizeof();
}

::std::size_t UnblindedTokensResult::layout::align() noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokensResult$operator$alignof();
}

__declspec(dllexport) bool Error::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$Error$is_ok(*this);
}

__declspec(dllexport) ::rust::String TokenPreimage::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$TokenPreimage$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::TokenPreimageResult> decode_base64_token_preimage(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::TokenPreimageResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_token_preimage(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &TokenPreimageResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$TokenPreimageResult$error(*this);
}

__declspec(dllexport) bool TokenPreimageResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$TokenPreimageResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::TokenPreimage> TokenPreimageResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::TokenPreimage>::from_raw(cbr_cxx$cxxbridge1$202$TokenPreimageResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::Token> generate_token() noexcept {
  return ::rust::Box<::cbr_cxx::Token>::from_raw(cbr_cxx$cxxbridge1$202$generate_token());
}

__declspec(dllexport) ::rust::String Token::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$Token$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokenResult> Token::blind() const noexcept {
  return ::rust::Box<::cbr_cxx::BlindedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$Token$blind(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::TokenResult> decode_base64_token(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::TokenResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_token(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &TokenResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$TokenResult$error(*this);
}

__declspec(dllexport) bool TokenResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$TokenResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::Token> TokenResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::Token>::from_raw(cbr_cxx$cxxbridge1$202$TokenResult$unwrap(*this));
}

__declspec(dllexport) ::rust::String BlindedToken::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$BlindedToken$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokenResult> decode_base64_blinded_token(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::BlindedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_blinded_token(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &BlindedTokenResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$BlindedTokenResult$error(*this);
}

__declspec(dllexport) bool BlindedTokenResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokenResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedToken> BlindedTokenResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::BlindedToken>::from_raw(cbr_cxx$cxxbridge1$202$BlindedTokenResult$unwrap(*this));
}

__declspec(dllexport) ::rust::String SignedToken::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$SignedToken$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokenResult> decode_base64_signed_token(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::SignedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_signed_token(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &SignedTokenResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$SignedTokenResult$error(*this);
}

__declspec(dllexport) bool SignedTokenResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokenResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SignedToken> SignedTokenResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::SignedToken>::from_raw(cbr_cxx$cxxbridge1$202$SignedTokenResult$unwrap(*this));
}

__declspec(dllexport) ::rust::String UnblindedToken::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$UnblindedToken$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationKey> UnblindedToken::derive_verification_key() const noexcept {
  return ::rust::Box<::cbr_cxx::VerificationKey>::from_raw(cbr_cxx$cxxbridge1$202$UnblindedToken$derive_verification_key(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationKey> UnblindedToken::derive_verification_key_rfc() const noexcept {
  return ::rust::Box<::cbr_cxx::VerificationKey>::from_raw(cbr_cxx$cxxbridge1$202$UnblindedToken$derive_verification_key_rfc(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::TokenPreimage> UnblindedToken::preimage() const noexcept {
  return ::rust::Box<::cbr_cxx::TokenPreimage>::from_raw(cbr_cxx$cxxbridge1$202$UnblindedToken$preimage(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokenResult> decode_base64_unblinded_token(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_unblinded_token(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &UnblindedTokenResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$UnblindedTokenResult$error(*this);
}

__declspec(dllexport) bool UnblindedTokenResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokenResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedToken> UnblindedTokenResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedToken>::from_raw(cbr_cxx$cxxbridge1$202$UnblindedTokenResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SigningKey> generate_signing_key() noexcept {
  return ::rust::Box<::cbr_cxx::SigningKey>::from_raw(cbr_cxx$cxxbridge1$202$generate_signing_key());
}

__declspec(dllexport) ::rust::String SigningKey::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$SigningKey$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::PublicKey> SigningKey::public_key() const noexcept {
  return ::rust::Box<::cbr_cxx::PublicKey>::from_raw(cbr_cxx$cxxbridge1$202$SigningKey$public_key(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokenResult> SigningKey::sign(::cbr_cxx::BlindedToken const &token) const noexcept {
  return ::rust::Box<::cbr_cxx::SignedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$SigningKey$sign(*this, token));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedToken> SigningKey::rederive_unblinded_token(::cbr_cxx::TokenPreimage const &t) const noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedToken>::from_raw(cbr_cxx$cxxbridge1$202$SigningKey$rederive_unblinded_token(*this, t));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokenResult> SigningKey::rederive_unblinded_token_rfc(::cbr_cxx::TokenPreimage const &t) const noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedTokenResult>::from_raw(cbr_cxx$cxxbridge1$202$SigningKey$rederive_unblinded_token_rfc(*this, t));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SigningKeyResult> decode_base64_signing_key(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::SigningKeyResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_signing_key(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &SigningKeyResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$SigningKeyResult$error(*this);
}

__declspec(dllexport) bool SigningKeyResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$SigningKeyResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SigningKey> SigningKeyResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::SigningKey>::from_raw(cbr_cxx$cxxbridge1$202$SigningKeyResult$unwrap(*this));
}

__declspec(dllexport) ::rust::String PublicKey::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$PublicKey$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::PublicKeyResult> decode_base64_public_key(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::PublicKeyResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_public_key(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &PublicKeyResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$PublicKeyResult$error(*this);
}

__declspec(dllexport) bool PublicKeyResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$PublicKeyResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::PublicKey> PublicKeyResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::PublicKey>::from_raw(cbr_cxx$cxxbridge1$202$PublicKeyResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationSignature> VerificationKey::sign(::std::string const &msg) const noexcept {
  return ::rust::Box<::cbr_cxx::VerificationSignature>::from_raw(cbr_cxx$cxxbridge1$202$VerificationKey$sign(*this, msg));
}

__declspec(dllexport) bool VerificationKey::verify(::cbr_cxx::VerificationSignature const &sig, ::std::string const &msg) const noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationKey$verify(*this, sig, msg);
}

__declspec(dllexport) ::rust::String VerificationSignature::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$VerificationSignature$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationSignatureResult> decode_base64_verification_signature(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::VerificationSignatureResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_verification_signature(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &VerificationSignatureResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$VerificationSignatureResult$error(*this);
}

__declspec(dllexport) bool VerificationSignatureResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$VerificationSignatureResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::VerificationSignature> VerificationSignatureResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::VerificationSignature>::from_raw(cbr_cxx$cxxbridge1$202$VerificationSignatureResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BatchDLEQProofResult> SigningKey::new_batch_dleq_proof(::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens) const noexcept {
  return ::rust::Box<::cbr_cxx::BatchDLEQProofResult>::from_raw(cbr_cxx$cxxbridge1$202$SigningKey$new_batch_dleq_proof(*this, blinded_tokens, signed_tokens));
}

__declspec(dllexport) ::rust::String BatchDLEQProof::encode_base64() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  cbr_cxx$cxxbridge1$202$BatchDLEQProof$encode_base64(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::cbr_cxx::Error BatchDLEQProof::verify(::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key) const noexcept {
  ::rust::MaybeUninit<::cbr_cxx::Error> return$;
  cbr_cxx$cxxbridge1$202$BatchDLEQProof$verify(*this, blinded_tokens, signed_tokens, public_key, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokensResult> BatchDLEQProof::verify_and_unblind(::cbr_cxx::Tokens const &tokens, ::cbr_cxx::BlindedTokens const &blinded_tokens, ::cbr_cxx::SignedTokens const &signed_tokens, ::cbr_cxx::PublicKey const &public_key) const noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedTokensResult>::from_raw(cbr_cxx$cxxbridge1$202$BatchDLEQProof$verify_and_unblind(*this, tokens, blinded_tokens, signed_tokens, public_key));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BatchDLEQProofResult> decode_base64_batch_dleq_proof(::rust::Str s) noexcept {
  return ::rust::Box<::cbr_cxx::BatchDLEQProofResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_batch_dleq_proof(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &BatchDLEQProofResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$error(*this);
}

__declspec(dllexport) bool BatchDLEQProofResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BatchDLEQProof> BatchDLEQProofResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::BatchDLEQProof>::from_raw(cbr_cxx$cxxbridge1$202$BatchDLEQProofResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::TokensResult> decode_base64_tokens(::std::vector<::std::string> const &s) noexcept {
  return ::rust::Box<::cbr_cxx::TokensResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_tokens(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &TokensResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$TokensResult$error(*this);
}

__declspec(dllexport) bool TokensResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$TokensResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::Tokens> TokensResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::Tokens>::from_raw(cbr_cxx$cxxbridge1$202$TokensResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokensResult> decode_base64_blinded_tokens(::std::vector<::std::string> const &s) noexcept {
  return ::rust::Box<::cbr_cxx::BlindedTokensResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_blinded_tokens(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &BlindedTokensResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$BlindedTokensResult$error(*this);
}

__declspec(dllexport) bool BlindedTokensResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$BlindedTokensResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::BlindedTokens> BlindedTokensResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::BlindedTokens>::from_raw(cbr_cxx$cxxbridge1$202$BlindedTokensResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokensResult> decode_base64_signed_tokens(::std::vector<::std::string> const &s) noexcept {
  return ::rust::Box<::cbr_cxx::SignedTokensResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_signed_tokens(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &SignedTokensResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$SignedTokensResult$error(*this);
}

__declspec(dllexport) bool SignedTokensResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$SignedTokensResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::SignedTokens> SignedTokensResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::SignedTokens>::from_raw(cbr_cxx$cxxbridge1$202$SignedTokensResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokensResult> decode_base64_unblinded_tokens(::std::vector<::std::string> const &s) noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedTokensResult>::from_raw(cbr_cxx$cxxbridge1$202$decode_base64_unblinded_tokens(s));
}

__declspec(dllexport) ::cbr_cxx::Error const &UnblindedTokensResult::error() const noexcept {
  return *cbr_cxx$cxxbridge1$202$UnblindedTokensResult$error(*this);
}

__declspec(dllexport) bool UnblindedTokensResult::is_ok() const noexcept {
  return cbr_cxx$cxxbridge1$202$UnblindedTokensResult$is_ok(*this);
}

__declspec(dllexport) ::rust::Box<::cbr_cxx::UnblindedTokens> UnblindedTokensResult::unwrap() const noexcept {
  return ::rust::Box<::cbr_cxx::UnblindedTokens>::from_raw(cbr_cxx$cxxbridge1$202$UnblindedTokensResult$unwrap(*this));
}

__declspec(dllexport) ::rust::Vec<::cbr_cxx::UnblindedToken> const &UnblindedTokens::as_vec() const noexcept {
  return *cbr_cxx$cxxbridge1$202$UnblindedTokens$as_vec(*this);
}
} // namespace cbr_cxx

extern "C" {
::cbr_cxx::TokenPreimageResult *cxxbridge1$box$cbr_cxx$TokenPreimageResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$TokenPreimageResult$dealloc(::cbr_cxx::TokenPreimageResult *) noexcept;
void cxxbridge1$box$cbr_cxx$TokenPreimageResult$drop(::rust::Box<::cbr_cxx::TokenPreimageResult> *ptr) noexcept;

::cbr_cxx::TokenPreimage *cxxbridge1$box$cbr_cxx$TokenPreimage$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$TokenPreimage$dealloc(::cbr_cxx::TokenPreimage *) noexcept;
void cxxbridge1$box$cbr_cxx$TokenPreimage$drop(::rust::Box<::cbr_cxx::TokenPreimage> *ptr) noexcept;

::cbr_cxx::Token *cxxbridge1$box$cbr_cxx$Token$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$Token$dealloc(::cbr_cxx::Token *) noexcept;
void cxxbridge1$box$cbr_cxx$Token$drop(::rust::Box<::cbr_cxx::Token> *ptr) noexcept;

::cbr_cxx::BlindedTokenResult *cxxbridge1$box$cbr_cxx$BlindedTokenResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokenResult$dealloc(::cbr_cxx::BlindedTokenResult *) noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokenResult$drop(::rust::Box<::cbr_cxx::BlindedTokenResult> *ptr) noexcept;

::cbr_cxx::TokenResult *cxxbridge1$box$cbr_cxx$TokenResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$TokenResult$dealloc(::cbr_cxx::TokenResult *) noexcept;
void cxxbridge1$box$cbr_cxx$TokenResult$drop(::rust::Box<::cbr_cxx::TokenResult> *ptr) noexcept;

::cbr_cxx::BlindedToken *cxxbridge1$box$cbr_cxx$BlindedToken$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BlindedToken$dealloc(::cbr_cxx::BlindedToken *) noexcept;
void cxxbridge1$box$cbr_cxx$BlindedToken$drop(::rust::Box<::cbr_cxx::BlindedToken> *ptr) noexcept;

::cbr_cxx::SignedTokenResult *cxxbridge1$box$cbr_cxx$SignedTokenResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokenResult$dealloc(::cbr_cxx::SignedTokenResult *) noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokenResult$drop(::rust::Box<::cbr_cxx::SignedTokenResult> *ptr) noexcept;

::cbr_cxx::SignedToken *cxxbridge1$box$cbr_cxx$SignedToken$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SignedToken$dealloc(::cbr_cxx::SignedToken *) noexcept;
void cxxbridge1$box$cbr_cxx$SignedToken$drop(::rust::Box<::cbr_cxx::SignedToken> *ptr) noexcept;

::cbr_cxx::VerificationKey *cxxbridge1$box$cbr_cxx$VerificationKey$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$VerificationKey$dealloc(::cbr_cxx::VerificationKey *) noexcept;
void cxxbridge1$box$cbr_cxx$VerificationKey$drop(::rust::Box<::cbr_cxx::VerificationKey> *ptr) noexcept;

::cbr_cxx::UnblindedTokenResult *cxxbridge1$box$cbr_cxx$UnblindedTokenResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokenResult$dealloc(::cbr_cxx::UnblindedTokenResult *) noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokenResult$drop(::rust::Box<::cbr_cxx::UnblindedTokenResult> *ptr) noexcept;

::cbr_cxx::UnblindedToken *cxxbridge1$box$cbr_cxx$UnblindedToken$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedToken$dealloc(::cbr_cxx::UnblindedToken *) noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedToken$drop(::rust::Box<::cbr_cxx::UnblindedToken> *ptr) noexcept;

::cbr_cxx::SigningKey *cxxbridge1$box$cbr_cxx$SigningKey$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SigningKey$dealloc(::cbr_cxx::SigningKey *) noexcept;
void cxxbridge1$box$cbr_cxx$SigningKey$drop(::rust::Box<::cbr_cxx::SigningKey> *ptr) noexcept;

::cbr_cxx::PublicKey *cxxbridge1$box$cbr_cxx$PublicKey$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$PublicKey$dealloc(::cbr_cxx::PublicKey *) noexcept;
void cxxbridge1$box$cbr_cxx$PublicKey$drop(::rust::Box<::cbr_cxx::PublicKey> *ptr) noexcept;

::cbr_cxx::SigningKeyResult *cxxbridge1$box$cbr_cxx$SigningKeyResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SigningKeyResult$dealloc(::cbr_cxx::SigningKeyResult *) noexcept;
void cxxbridge1$box$cbr_cxx$SigningKeyResult$drop(::rust::Box<::cbr_cxx::SigningKeyResult> *ptr) noexcept;

::cbr_cxx::PublicKeyResult *cxxbridge1$box$cbr_cxx$PublicKeyResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$PublicKeyResult$dealloc(::cbr_cxx::PublicKeyResult *) noexcept;
void cxxbridge1$box$cbr_cxx$PublicKeyResult$drop(::rust::Box<::cbr_cxx::PublicKeyResult> *ptr) noexcept;

::cbr_cxx::VerificationSignature *cxxbridge1$box$cbr_cxx$VerificationSignature$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$VerificationSignature$dealloc(::cbr_cxx::VerificationSignature *) noexcept;
void cxxbridge1$box$cbr_cxx$VerificationSignature$drop(::rust::Box<::cbr_cxx::VerificationSignature> *ptr) noexcept;

::cbr_cxx::VerificationSignatureResult *cxxbridge1$box$cbr_cxx$VerificationSignatureResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$VerificationSignatureResult$dealloc(::cbr_cxx::VerificationSignatureResult *) noexcept;
void cxxbridge1$box$cbr_cxx$VerificationSignatureResult$drop(::rust::Box<::cbr_cxx::VerificationSignatureResult> *ptr) noexcept;

::cbr_cxx::BatchDLEQProofResult *cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$dealloc(::cbr_cxx::BatchDLEQProofResult *) noexcept;
void cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$drop(::rust::Box<::cbr_cxx::BatchDLEQProofResult> *ptr) noexcept;

::cbr_cxx::UnblindedTokensResult *cxxbridge1$box$cbr_cxx$UnblindedTokensResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokensResult$dealloc(::cbr_cxx::UnblindedTokensResult *) noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokensResult$drop(::rust::Box<::cbr_cxx::UnblindedTokensResult> *ptr) noexcept;

::cbr_cxx::BatchDLEQProof *cxxbridge1$box$cbr_cxx$BatchDLEQProof$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BatchDLEQProof$dealloc(::cbr_cxx::BatchDLEQProof *) noexcept;
void cxxbridge1$box$cbr_cxx$BatchDLEQProof$drop(::rust::Box<::cbr_cxx::BatchDLEQProof> *ptr) noexcept;

::cbr_cxx::TokensResult *cxxbridge1$box$cbr_cxx$TokensResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$TokensResult$dealloc(::cbr_cxx::TokensResult *) noexcept;
void cxxbridge1$box$cbr_cxx$TokensResult$drop(::rust::Box<::cbr_cxx::TokensResult> *ptr) noexcept;

::cbr_cxx::Tokens *cxxbridge1$box$cbr_cxx$Tokens$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$Tokens$dealloc(::cbr_cxx::Tokens *) noexcept;
void cxxbridge1$box$cbr_cxx$Tokens$drop(::rust::Box<::cbr_cxx::Tokens> *ptr) noexcept;

::cbr_cxx::BlindedTokensResult *cxxbridge1$box$cbr_cxx$BlindedTokensResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokensResult$dealloc(::cbr_cxx::BlindedTokensResult *) noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokensResult$drop(::rust::Box<::cbr_cxx::BlindedTokensResult> *ptr) noexcept;

::cbr_cxx::BlindedTokens *cxxbridge1$box$cbr_cxx$BlindedTokens$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokens$dealloc(::cbr_cxx::BlindedTokens *) noexcept;
void cxxbridge1$box$cbr_cxx$BlindedTokens$drop(::rust::Box<::cbr_cxx::BlindedTokens> *ptr) noexcept;

::cbr_cxx::SignedTokensResult *cxxbridge1$box$cbr_cxx$SignedTokensResult$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokensResult$dealloc(::cbr_cxx::SignedTokensResult *) noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokensResult$drop(::rust::Box<::cbr_cxx::SignedTokensResult> *ptr) noexcept;

::cbr_cxx::SignedTokens *cxxbridge1$box$cbr_cxx$SignedTokens$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokens$dealloc(::cbr_cxx::SignedTokens *) noexcept;
void cxxbridge1$box$cbr_cxx$SignedTokens$drop(::rust::Box<::cbr_cxx::SignedTokens> *ptr) noexcept;

::cbr_cxx::UnblindedTokens *cxxbridge1$box$cbr_cxx$UnblindedTokens$alloc() noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokens$dealloc(::cbr_cxx::UnblindedTokens *) noexcept;
void cxxbridge1$box$cbr_cxx$UnblindedTokens$drop(::rust::Box<::cbr_cxx::UnblindedTokens> *ptr) noexcept;

void cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$new(::rust::Vec<::cbr_cxx::UnblindedToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$drop(::rust::Vec<::cbr_cxx::UnblindedToken> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$len(::rust::Vec<::cbr_cxx::UnblindedToken> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$capacity(::rust::Vec<::cbr_cxx::UnblindedToken> const *ptr) noexcept;
::cbr_cxx::UnblindedToken const *cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$data(::rust::Vec<::cbr_cxx::UnblindedToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$reserve_total(::rust::Vec<::cbr_cxx::UnblindedToken> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$set_len(::rust::Vec<::cbr_cxx::UnblindedToken> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$truncate(::rust::Vec<::cbr_cxx::UnblindedToken> *ptr, ::std::size_t len) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__declspec(dllexport) ::cbr_cxx::TokenPreimageResult *Box<::cbr_cxx::TokenPreimageResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$TokenPreimageResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenPreimageResult>::allocation::dealloc(::cbr_cxx::TokenPreimageResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$TokenPreimageResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenPreimageResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$TokenPreimageResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::TokenPreimage *Box<::cbr_cxx::TokenPreimage>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$TokenPreimage$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenPreimage>::allocation::dealloc(::cbr_cxx::TokenPreimage *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$TokenPreimage$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenPreimage>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$TokenPreimage$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::Token *Box<::cbr_cxx::Token>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$Token$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::Token>::allocation::dealloc(::cbr_cxx::Token *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$Token$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::Token>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$Token$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BlindedTokenResult *Box<::cbr_cxx::BlindedTokenResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BlindedTokenResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokenResult>::allocation::dealloc(::cbr_cxx::BlindedTokenResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokenResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokenResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokenResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::TokenResult *Box<::cbr_cxx::TokenResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$TokenResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenResult>::allocation::dealloc(::cbr_cxx::TokenResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$TokenResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokenResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$TokenResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BlindedToken *Box<::cbr_cxx::BlindedToken>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BlindedToken$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedToken>::allocation::dealloc(::cbr_cxx::BlindedToken *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BlindedToken$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedToken>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BlindedToken$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SignedTokenResult *Box<::cbr_cxx::SignedTokenResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SignedTokenResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokenResult>::allocation::dealloc(::cbr_cxx::SignedTokenResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokenResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokenResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokenResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SignedToken *Box<::cbr_cxx::SignedToken>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SignedToken$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedToken>::allocation::dealloc(::cbr_cxx::SignedToken *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SignedToken$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedToken>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SignedToken$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::VerificationKey *Box<::cbr_cxx::VerificationKey>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$VerificationKey$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationKey>::allocation::dealloc(::cbr_cxx::VerificationKey *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$VerificationKey$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationKey>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$VerificationKey$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::UnblindedTokenResult *Box<::cbr_cxx::UnblindedTokenResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$UnblindedTokenResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokenResult>::allocation::dealloc(::cbr_cxx::UnblindedTokenResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokenResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokenResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokenResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::UnblindedToken *Box<::cbr_cxx::UnblindedToken>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$UnblindedToken$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedToken>::allocation::dealloc(::cbr_cxx::UnblindedToken *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedToken$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedToken>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedToken$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SigningKey *Box<::cbr_cxx::SigningKey>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SigningKey$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SigningKey>::allocation::dealloc(::cbr_cxx::SigningKey *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SigningKey$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SigningKey>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SigningKey$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::PublicKey *Box<::cbr_cxx::PublicKey>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$PublicKey$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::PublicKey>::allocation::dealloc(::cbr_cxx::PublicKey *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$PublicKey$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::PublicKey>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$PublicKey$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SigningKeyResult *Box<::cbr_cxx::SigningKeyResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SigningKeyResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SigningKeyResult>::allocation::dealloc(::cbr_cxx::SigningKeyResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SigningKeyResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SigningKeyResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SigningKeyResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::PublicKeyResult *Box<::cbr_cxx::PublicKeyResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$PublicKeyResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::PublicKeyResult>::allocation::dealloc(::cbr_cxx::PublicKeyResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$PublicKeyResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::PublicKeyResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$PublicKeyResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::VerificationSignature *Box<::cbr_cxx::VerificationSignature>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$VerificationSignature$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationSignature>::allocation::dealloc(::cbr_cxx::VerificationSignature *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$VerificationSignature$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationSignature>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$VerificationSignature$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::VerificationSignatureResult *Box<::cbr_cxx::VerificationSignatureResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$VerificationSignatureResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationSignatureResult>::allocation::dealloc(::cbr_cxx::VerificationSignatureResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$VerificationSignatureResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::VerificationSignatureResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$VerificationSignatureResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BatchDLEQProofResult *Box<::cbr_cxx::BatchDLEQProofResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BatchDLEQProofResult>::allocation::dealloc(::cbr_cxx::BatchDLEQProofResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BatchDLEQProofResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BatchDLEQProofResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::UnblindedTokensResult *Box<::cbr_cxx::UnblindedTokensResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$UnblindedTokensResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokensResult>::allocation::dealloc(::cbr_cxx::UnblindedTokensResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokensResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokensResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokensResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BatchDLEQProof *Box<::cbr_cxx::BatchDLEQProof>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BatchDLEQProof$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BatchDLEQProof>::allocation::dealloc(::cbr_cxx::BatchDLEQProof *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BatchDLEQProof$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BatchDLEQProof>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BatchDLEQProof$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::TokensResult *Box<::cbr_cxx::TokensResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$TokensResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokensResult>::allocation::dealloc(::cbr_cxx::TokensResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$TokensResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::TokensResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$TokensResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::Tokens *Box<::cbr_cxx::Tokens>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$Tokens$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::Tokens>::allocation::dealloc(::cbr_cxx::Tokens *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$Tokens$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::Tokens>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$Tokens$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BlindedTokensResult *Box<::cbr_cxx::BlindedTokensResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BlindedTokensResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokensResult>::allocation::dealloc(::cbr_cxx::BlindedTokensResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokensResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokensResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokensResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::BlindedTokens *Box<::cbr_cxx::BlindedTokens>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$BlindedTokens$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokens>::allocation::dealloc(::cbr_cxx::BlindedTokens *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokens$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::BlindedTokens>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$BlindedTokens$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SignedTokensResult *Box<::cbr_cxx::SignedTokensResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SignedTokensResult$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokensResult>::allocation::dealloc(::cbr_cxx::SignedTokensResult *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokensResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokensResult>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokensResult$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::SignedTokens *Box<::cbr_cxx::SignedTokens>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$SignedTokens$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokens>::allocation::dealloc(::cbr_cxx::SignedTokens *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokens$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::SignedTokens>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$SignedTokens$drop(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::UnblindedTokens *Box<::cbr_cxx::UnblindedTokens>::allocation::alloc() noexcept {
  return cxxbridge1$box$cbr_cxx$UnblindedTokens$alloc();
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokens>::allocation::dealloc(::cbr_cxx::UnblindedTokens *ptr) noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokens$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::cbr_cxx::UnblindedTokens>::drop() noexcept {
  cxxbridge1$box$cbr_cxx$UnblindedTokens$drop(this);
}
template <>
__declspec(dllexport) Vec<::cbr_cxx::UnblindedToken>::Vec() noexcept {
  cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$new(this);
}
template <>
__declspec(dllexport) void Vec<::cbr_cxx::UnblindedToken>::drop() noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$drop(this);
}
template <>
__declspec(dllexport) ::std::size_t Vec<::cbr_cxx::UnblindedToken>::size() const noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$len(this);
}
template <>
__declspec(dllexport) ::std::size_t Vec<::cbr_cxx::UnblindedToken>::capacity() const noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$capacity(this);
}
template <>
__declspec(dllexport) ::cbr_cxx::UnblindedToken const *Vec<::cbr_cxx::UnblindedToken>::data() const noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$data(this);
}
template <>
__declspec(dllexport) void Vec<::cbr_cxx::UnblindedToken>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$reserve_total(this, new_cap);
}
template <>
__declspec(dllexport) void Vec<::cbr_cxx::UnblindedToken>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$set_len(this, len);
}
template <>
__declspec(dllexport) void Vec<::cbr_cxx::UnblindedToken>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$cbr_cxx$UnblindedToken$truncate(this, len);
}
} // namespace cxxbridge1
} // namespace rust
