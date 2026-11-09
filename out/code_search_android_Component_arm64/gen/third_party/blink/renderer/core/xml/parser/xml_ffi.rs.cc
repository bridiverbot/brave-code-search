#include "third_party/blink/renderer/core/xml/parser/xml_ffi_callbacks.h"
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

namespace xml_ffi {
  enum class StandaloneInfo : ::std::int8_t;
  struct AttributeNameValue;
  using XmlCallbacks = ::xml_ffi::XmlCallbacks;
  using AttributeView = ::xml_ffi::AttributeView;
  struct XmlReadState;
  struct AttributesIterator;
  struct NamespacesIterator;
}

namespace xml_ffi {
#ifndef CXXBRIDGE1_ENUM_xml_ffi$StandaloneInfo
#define CXXBRIDGE1_ENUM_xml_ffi$StandaloneInfo
enum class StandaloneInfo : ::std::int8_t {
  kStandaloneUnspecified = -2,
  kNoXmlDeclaration = -1,
  kStandaloneNo = 0,
  kStandaloneYes = 1,
};
#endif // CXXBRIDGE1_ENUM_xml_ffi$StandaloneInfo

#ifndef CXXBRIDGE1_STRUCT_xml_ffi$AttributeNameValue
#define CXXBRIDGE1_STRUCT_xml_ffi$AttributeNameValue
struct AttributeNameValue final {
  ::rust::String q_name;
  ::rust::String value;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_xml_ffi$AttributeNameValue

#ifndef CXXBRIDGE1_STRUCT_xml_ffi$XmlReadState
#define CXXBRIDGE1_STRUCT_xml_ffi$XmlReadState
struct XmlReadState final : public ::rust::Opaque {
  ~XmlReadState() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_xml_ffi$XmlReadState

#ifndef CXXBRIDGE1_STRUCT_xml_ffi$AttributesIterator
#define CXXBRIDGE1_STRUCT_xml_ffi$AttributesIterator
struct AttributesIterator final : public ::rust::Opaque {
  ~AttributesIterator() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_xml_ffi$AttributesIterator

#ifndef CXXBRIDGE1_STRUCT_xml_ffi$NamespacesIterator
#define CXXBRIDGE1_STRUCT_xml_ffi$NamespacesIterator
struct NamespacesIterator final : public ::rust::Opaque {
  ~NamespacesIterator() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_xml_ffi$NamespacesIterator

extern "C" {
void xml_ffi$cxxbridge1$202$XmlCallbacks$StartDocument(::xml_ffi::XmlCallbacks &self, ::rust::Str version, ::rust::Str encoding, ::xml_ffi::StandaloneInfo standalone) noexcept {
  void (::xml_ffi::XmlCallbacks::*StartDocument$)(::rust::Str, ::rust::Str, ::xml_ffi::StandaloneInfo) = &::xml_ffi::XmlCallbacks::StartDocument;
  (self.*StartDocument$)(version, encoding, standalone);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$ProcessingInstruction(::xml_ffi::XmlCallbacks &self, ::rust::Str name, ::rust::Str data) noexcept {
  void (::xml_ffi::XmlCallbacks::*ProcessingInstruction$)(::rust::Str, ::rust::Str) = &::xml_ffi::XmlCallbacks::ProcessingInstruction;
  (self.*ProcessingInstruction$)(name, data);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$StartElementNs(::xml_ffi::XmlCallbacks &self, ::rust::Str local_name, bool has_prefix, ::rust::Str prefix, bool has_ns, ::rust::Str ns, ::xml_ffi::AttributesIterator &attributes, ::xml_ffi::NamespacesIterator &namespaces) noexcept {
  void (::xml_ffi::XmlCallbacks::*StartElementNs$)(::rust::Str, bool, ::rust::Str, bool, ::rust::Str, ::xml_ffi::AttributesIterator &, ::xml_ffi::NamespacesIterator &) = &::xml_ffi::XmlCallbacks::StartElementNs;
  (self.*StartElementNs$)(local_name, has_prefix, prefix, has_ns, ns, attributes, namespaces);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$EndElementNs(::xml_ffi::XmlCallbacks &self, ::rust::Str local_name, ::rust::Str prefix, ::rust::Str ns) noexcept {
  void (::xml_ffi::XmlCallbacks::*EndElementNs$)(::rust::Str, ::rust::Str, ::rust::Str) = &::xml_ffi::XmlCallbacks::EndElementNs;
  (self.*EndElementNs$)(local_name, prefix, ns);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$Characters(::xml_ffi::XmlCallbacks &self, ::rust::Str characters) noexcept {
  void (::xml_ffi::XmlCallbacks::*Characters$)(::rust::Str) = &::xml_ffi::XmlCallbacks::Characters;
  (self.*Characters$)(characters);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$CData(::xml_ffi::XmlCallbacks &self, ::rust::Str data) noexcept {
  void (::xml_ffi::XmlCallbacks::*CData$)(::rust::Str) = &::xml_ffi::XmlCallbacks::CData;
  (self.*CData$)(data);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$Comment(::xml_ffi::XmlCallbacks &self, ::rust::Str comment) noexcept {
  void (::xml_ffi::XmlCallbacks::*Comment$)(::rust::Str) = &::xml_ffi::XmlCallbacks::Comment;
  (self.*Comment$)(comment);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$DocType(::xml_ffi::XmlCallbacks &self, ::rust::Str name, ::rust::Str public_id, ::rust::Str system_id) noexcept {
  void (::xml_ffi::XmlCallbacks::*DocType$)(::rust::Str, ::rust::Str, ::rust::Str) = &::xml_ffi::XmlCallbacks::DocType;
  (self.*DocType$)(name, public_id, system_id);
}

void xml_ffi$cxxbridge1$202$XmlCallbacks$EndDocument(::xml_ffi::XmlCallbacks &self) noexcept {
  void (::xml_ffi::XmlCallbacks::*EndDocument$)() = &::xml_ffi::XmlCallbacks::EndDocument;
  (self.*EndDocument$)();
}

void xml_ffi$cxxbridge1$202$AttributeView$Populate(::xml_ffi::AttributeView &self, ::rust::Str q_name, ::rust::Str attr_ns, ::rust::Str value) noexcept {
  void (::xml_ffi::AttributeView::*Populate$)(::rust::Str, ::rust::Str, ::rust::Str) = &::xml_ffi::AttributeView::Populate;
  (self.*Populate$)(q_name, attr_ns, value);
}
::std::size_t xml_ffi$cxxbridge1$202$XmlReadState$operator$sizeof() noexcept;
::std::size_t xml_ffi$cxxbridge1$202$XmlReadState$operator$alignof() noexcept;
::std::size_t xml_ffi$cxxbridge1$202$AttributesIterator$operator$sizeof() noexcept;
::std::size_t xml_ffi$cxxbridge1$202$AttributesIterator$operator$alignof() noexcept;
::std::size_t xml_ffi$cxxbridge1$202$NamespacesIterator$operator$sizeof() noexcept;
::std::size_t xml_ffi$cxxbridge1$202$NamespacesIterator$operator$alignof() noexcept;

::xml_ffi::XmlReadState *xml_ffi$cxxbridge1$202$create_read_state(::xml_ffi::XmlCallbacks &callbacks) noexcept;

void xml_ffi$cxxbridge1$202$append_to_source(::xml_ffi::XmlReadState &read_state, ::rust::Slice<::std::uint8_t const> content) noexcept;

void xml_ffi$cxxbridge1$202$process_next_event(::xml_ffi::XmlReadState &read_state) noexcept;

bool xml_ffi$cxxbridge1$202$try_get_last_event_position(::xml_ffi::XmlReadState const &read_state, ::std::uint64_t &row, ::std::uint64_t &col) noexcept;

void xml_ffi$cxxbridge1$202$add_xhtml_entities(::xml_ffi::XmlReadState &read_state) noexcept;

bool xml_ffi$cxxbridge1$202$try_get_error_details(::xml_ffi::XmlReadState const &read_state, ::rust::String &msg, ::std::uint64_t &row, ::std::uint64_t &col) noexcept;

bool xml_ffi$cxxbridge1$202$saw_error(::xml_ffi::XmlReadState const &read_state) noexcept;

bool xml_ffi$cxxbridge1$202$is_error_resumable(::xml_ffi::XmlReadState const &read_state) noexcept;

void xml_ffi$cxxbridge1$202$reset_error(::xml_ffi::XmlReadState &read_state) noexcept;

void xml_ffi$cxxbridge1$202$parse_attributes(::rust::Slice<::std::uint8_t const> attributes_string, bool &success, ::rust::Vec<::xml_ffi::AttributeNameValue> *return$) noexcept;

bool xml_ffi$cxxbridge1$202$attributes_next(::xml_ffi::AttributesIterator &attributes, ::xml_ffi::AttributeView &attribute_view) noexcept;

bool xml_ffi$cxxbridge1$202$namespaces_next(::xml_ffi::NamespacesIterator &namespaces_iterator, ::rust::String &prefix, ::rust::String &uri) noexcept;
} // extern "C"

::std::size_t XmlReadState::layout::size() noexcept {
  return xml_ffi$cxxbridge1$202$XmlReadState$operator$sizeof();
}

::std::size_t XmlReadState::layout::align() noexcept {
  return xml_ffi$cxxbridge1$202$XmlReadState$operator$alignof();
}

::std::size_t AttributesIterator::layout::size() noexcept {
  return xml_ffi$cxxbridge1$202$AttributesIterator$operator$sizeof();
}

::std::size_t AttributesIterator::layout::align() noexcept {
  return xml_ffi$cxxbridge1$202$AttributesIterator$operator$alignof();
}

::std::size_t NamespacesIterator::layout::size() noexcept {
  return xml_ffi$cxxbridge1$202$NamespacesIterator$operator$sizeof();
}

::std::size_t NamespacesIterator::layout::align() noexcept {
  return xml_ffi$cxxbridge1$202$NamespacesIterator$operator$alignof();
}

// # Safety
//
// Marked unsafe because functions with explicit lifetimes in a cxx
// bridge require unsafe qualification.
::rust::Box<::xml_ffi::XmlReadState> create_read_state(::xml_ffi::XmlCallbacks &callbacks) noexcept {
  return ::rust::Box<::xml_ffi::XmlReadState>::from_raw(xml_ffi$cxxbridge1$202$create_read_state(callbacks));
}

void append_to_source(::xml_ffi::XmlReadState &read_state, ::rust::Slice<::std::uint8_t const> content) noexcept {
  xml_ffi$cxxbridge1$202$append_to_source(read_state, content);
}

void process_next_event(::xml_ffi::XmlReadState &read_state) noexcept {
  xml_ffi$cxxbridge1$202$process_next_event(read_state);
}

bool try_get_last_event_position(::xml_ffi::XmlReadState const &read_state, ::std::uint64_t &row, ::std::uint64_t &col) noexcept {
  return xml_ffi$cxxbridge1$202$try_get_last_event_position(read_state, row, col);
}

void add_xhtml_entities(::xml_ffi::XmlReadState &read_state) noexcept {
  xml_ffi$cxxbridge1$202$add_xhtml_entities(read_state);
}

bool try_get_error_details(::xml_ffi::XmlReadState const &read_state, ::rust::String &msg, ::std::uint64_t &row, ::std::uint64_t &col) noexcept {
  return xml_ffi$cxxbridge1$202$try_get_error_details(read_state, msg, row, col);
}

bool saw_error(::xml_ffi::XmlReadState const &read_state) noexcept {
  return xml_ffi$cxxbridge1$202$saw_error(read_state);
}

bool is_error_resumable(::xml_ffi::XmlReadState const &read_state) noexcept {
  return xml_ffi$cxxbridge1$202$is_error_resumable(read_state);
}

void reset_error(::xml_ffi::XmlReadState &read_state) noexcept {
  xml_ffi$cxxbridge1$202$reset_error(read_state);
}

::rust::Vec<::xml_ffi::AttributeNameValue> parse_attributes(::rust::Slice<::std::uint8_t const> attributes_string, bool &success) noexcept {
  ::rust::MaybeUninit<::rust::Vec<::xml_ffi::AttributeNameValue>> return$;
  xml_ffi$cxxbridge1$202$parse_attributes(attributes_string, success, &return$.value);
  return ::std::move(return$.value);
}

// # Safety
//
// Marked unsafe because functions with explicit lifetimes in a cxx
// bridge require unsafe qualification.
bool attributes_next(::xml_ffi::AttributesIterator &attributes, ::xml_ffi::AttributeView &attribute_view) noexcept {
  return xml_ffi$cxxbridge1$202$attributes_next(attributes, attribute_view);
}

// # Safety
//
// Marked unsafe because functions with explicit lifetimes in a cxx
// bridge require unsafe qualification.
bool namespaces_next(::xml_ffi::NamespacesIterator &namespaces_iterator, ::rust::String &prefix, ::rust::String &uri) noexcept {
  return xml_ffi$cxxbridge1$202$namespaces_next(namespaces_iterator, prefix, uri);
}
} // namespace xml_ffi

extern "C" {
::xml_ffi::XmlReadState *cxxbridge1$box$xml_ffi$XmlReadState$alloc() noexcept;
void cxxbridge1$box$xml_ffi$XmlReadState$dealloc(::xml_ffi::XmlReadState *) noexcept;
void cxxbridge1$box$xml_ffi$XmlReadState$drop(::rust::Box<::xml_ffi::XmlReadState> *ptr) noexcept;

void cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$new(::rust::Vec<::xml_ffi::AttributeNameValue> const *ptr) noexcept;
void cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$drop(::rust::Vec<::xml_ffi::AttributeNameValue> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$len(::rust::Vec<::xml_ffi::AttributeNameValue> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$capacity(::rust::Vec<::xml_ffi::AttributeNameValue> const *ptr) noexcept;
::xml_ffi::AttributeNameValue const *cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$data(::rust::Vec<::xml_ffi::AttributeNameValue> const *ptr) noexcept;
void cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$reserve_total(::rust::Vec<::xml_ffi::AttributeNameValue> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$set_len(::rust::Vec<::xml_ffi::AttributeNameValue> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$truncate(::rust::Vec<::xml_ffi::AttributeNameValue> *ptr, ::std::size_t len) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
::xml_ffi::XmlReadState *Box<::xml_ffi::XmlReadState>::allocation::alloc() noexcept {
  return cxxbridge1$box$xml_ffi$XmlReadState$alloc();
}
template <>
void Box<::xml_ffi::XmlReadState>::allocation::dealloc(::xml_ffi::XmlReadState *ptr) noexcept {
  cxxbridge1$box$xml_ffi$XmlReadState$dealloc(ptr);
}
template <>
void Box<::xml_ffi::XmlReadState>::drop() noexcept {
  cxxbridge1$box$xml_ffi$XmlReadState$drop(this);
}
template <>
Vec<::xml_ffi::AttributeNameValue>::Vec() noexcept {
  cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$new(this);
}
template <>
void Vec<::xml_ffi::AttributeNameValue>::drop() noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$drop(this);
}
template <>
::std::size_t Vec<::xml_ffi::AttributeNameValue>::size() const noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$len(this);
}
template <>
::std::size_t Vec<::xml_ffi::AttributeNameValue>::capacity() const noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$capacity(this);
}
template <>
::xml_ffi::AttributeNameValue const *Vec<::xml_ffi::AttributeNameValue>::data() const noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$data(this);
}
template <>
void Vec<::xml_ffi::AttributeNameValue>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$reserve_total(this, new_cap);
}
template <>
void Vec<::xml_ffi::AttributeNameValue>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$set_len(this, len);
}
template <>
void Vec<::xml_ffi::AttributeNameValue>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$xml_ffi$AttributeNameValue$truncate(this, len);
}
} // namespace cxxbridge1
} // namespace rust
