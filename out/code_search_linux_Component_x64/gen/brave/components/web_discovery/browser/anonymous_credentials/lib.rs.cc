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

namespace web_discovery {
  struct JoinInitialization;
  struct AnonymousCredentialsManager;
  struct GroupPublicKey;
  struct CredentialBIG;
  struct JoinResponse;
  struct UserCredentials;
  struct VecU8Result;
  struct GroupPublicKeyResult;
  struct CredentialBIGResult;
  struct JoinResponseResult;
  struct UserCredentialsResult;
}

namespace web_discovery {
#ifndef CXXBRIDGE1_STRUCT_web_discovery$JoinInitialization
#define CXXBRIDGE1_STRUCT_web_discovery$JoinInitialization
struct JoinInitialization final {
  ::rust::Vec<::std::uint8_t> gsk;
  ::rust::Vec<::std::uint8_t> join_request;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$JoinInitialization

#ifndef CXXBRIDGE1_STRUCT_web_discovery$AnonymousCredentialsManager
#define CXXBRIDGE1_STRUCT_web_discovery$AnonymousCredentialsManager
struct AnonymousCredentialsManager final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::web_discovery::JoinInitialization start_join(::rust::Slice<::std::uint8_t const> challenge) noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::VecU8Result> finish_join(::web_discovery::GroupPublicKey const &public_key, ::web_discovery::CredentialBIG const &gsk, ::rust::Box<::web_discovery::JoinResponse> join_resp) noexcept;
  __attribute__((visibility("default"))) void set_gsk_and_credentials(::rust::Box<::web_discovery::CredentialBIG> gsk, ::rust::Box<::web_discovery::UserCredentials> credentials) noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::VecU8Result> sign(::rust::Slice<::std::uint8_t const> msg, ::rust::Slice<::std::uint8_t const> basename) noexcept;
  ~AnonymousCredentialsManager() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$AnonymousCredentialsManager

#ifndef CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKey
#define CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKey
struct GroupPublicKey final : public ::rust::Opaque {
  ~GroupPublicKey() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKey

#ifndef CXXBRIDGE1_STRUCT_web_discovery$CredentialBIG
#define CXXBRIDGE1_STRUCT_web_discovery$CredentialBIG
struct CredentialBIG final : public ::rust::Opaque {
  ~CredentialBIG() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$CredentialBIG

#ifndef CXXBRIDGE1_STRUCT_web_discovery$JoinResponse
#define CXXBRIDGE1_STRUCT_web_discovery$JoinResponse
struct JoinResponse final : public ::rust::Opaque {
  ~JoinResponse() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$JoinResponse

#ifndef CXXBRIDGE1_STRUCT_web_discovery$UserCredentials
#define CXXBRIDGE1_STRUCT_web_discovery$UserCredentials
struct UserCredentials final : public ::rust::Opaque {
  ~UserCredentials() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$UserCredentials

#ifndef CXXBRIDGE1_STRUCT_web_discovery$VecU8Result
#define CXXBRIDGE1_STRUCT_web_discovery$VecU8Result
struct VecU8Result final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust::String error_message() const noexcept;
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> unwrap() noexcept;
  ~VecU8Result() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$VecU8Result

#ifndef CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKeyResult
#define CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKeyResult
struct GroupPublicKeyResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust::String error_message() const noexcept;
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::GroupPublicKey> unwrap() noexcept;
  ~GroupPublicKeyResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$GroupPublicKeyResult

#ifndef CXXBRIDGE1_STRUCT_web_discovery$CredentialBIGResult
#define CXXBRIDGE1_STRUCT_web_discovery$CredentialBIGResult
struct CredentialBIGResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust::String error_message() const noexcept;
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::CredentialBIG> unwrap() noexcept;
  ~CredentialBIGResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$CredentialBIGResult

#ifndef CXXBRIDGE1_STRUCT_web_discovery$JoinResponseResult
#define CXXBRIDGE1_STRUCT_web_discovery$JoinResponseResult
struct JoinResponseResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust::String error_message() const noexcept;
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::JoinResponse> unwrap() noexcept;
  ~JoinResponseResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$JoinResponseResult

#ifndef CXXBRIDGE1_STRUCT_web_discovery$UserCredentialsResult
#define CXXBRIDGE1_STRUCT_web_discovery$UserCredentialsResult
struct UserCredentialsResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust::String error_message() const noexcept;
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::web_discovery::UserCredentials> unwrap() noexcept;
  ~UserCredentialsResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_web_discovery$UserCredentialsResult

extern "C" {
::std::size_t web_discovery$cxxbridge1$202$AnonymousCredentialsManager$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$AnonymousCredentialsManager$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$GroupPublicKey$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$GroupPublicKey$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$CredentialBIG$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$CredentialBIG$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$JoinResponse$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$JoinResponse$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$UserCredentials$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$UserCredentials$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$VecU8Result$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$VecU8Result$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$GroupPublicKeyResult$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$GroupPublicKeyResult$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$CredentialBIGResult$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$CredentialBIGResult$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$JoinResponseResult$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$JoinResponseResult$operator$alignof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$UserCredentialsResult$operator$sizeof() noexcept;
::std::size_t web_discovery$cxxbridge1$202$UserCredentialsResult$operator$alignof() noexcept;

void web_discovery$cxxbridge1$202$VecU8Result$error_message(::web_discovery::VecU8Result const &self, ::rust::String *return$) noexcept;

bool web_discovery$cxxbridge1$202$VecU8Result$is_ok(::web_discovery::VecU8Result const &self) noexcept;

void web_discovery$cxxbridge1$202$VecU8Result$unwrap(::web_discovery::VecU8Result &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

void web_discovery$cxxbridge1$202$GroupPublicKeyResult$error_message(::web_discovery::GroupPublicKeyResult const &self, ::rust::String *return$) noexcept;

bool web_discovery$cxxbridge1$202$GroupPublicKeyResult$is_ok(::web_discovery::GroupPublicKeyResult const &self) noexcept;

::web_discovery::GroupPublicKey *web_discovery$cxxbridge1$202$GroupPublicKeyResult$unwrap(::web_discovery::GroupPublicKeyResult &self) noexcept;

void web_discovery$cxxbridge1$202$CredentialBIGResult$error_message(::web_discovery::CredentialBIGResult const &self, ::rust::String *return$) noexcept;

bool web_discovery$cxxbridge1$202$CredentialBIGResult$is_ok(::web_discovery::CredentialBIGResult const &self) noexcept;

::web_discovery::CredentialBIG *web_discovery$cxxbridge1$202$CredentialBIGResult$unwrap(::web_discovery::CredentialBIGResult &self) noexcept;

void web_discovery$cxxbridge1$202$JoinResponseResult$error_message(::web_discovery::JoinResponseResult const &self, ::rust::String *return$) noexcept;

bool web_discovery$cxxbridge1$202$JoinResponseResult$is_ok(::web_discovery::JoinResponseResult const &self) noexcept;

::web_discovery::JoinResponse *web_discovery$cxxbridge1$202$JoinResponseResult$unwrap(::web_discovery::JoinResponseResult &self) noexcept;

void web_discovery$cxxbridge1$202$UserCredentialsResult$error_message(::web_discovery::UserCredentialsResult const &self, ::rust::String *return$) noexcept;

bool web_discovery$cxxbridge1$202$UserCredentialsResult$is_ok(::web_discovery::UserCredentialsResult const &self) noexcept;

::web_discovery::UserCredentials *web_discovery$cxxbridge1$202$UserCredentialsResult$unwrap(::web_discovery::UserCredentialsResult &self) noexcept;

::web_discovery::GroupPublicKeyResult *web_discovery$cxxbridge1$202$load_group_public_key(::rust::Slice<::std::uint8_t const> data) noexcept;

::web_discovery::CredentialBIGResult *web_discovery$cxxbridge1$202$load_credential_big(::rust::Slice<::std::uint8_t const> data) noexcept;

::web_discovery::JoinResponseResult *web_discovery$cxxbridge1$202$load_join_response(::rust::Slice<::std::uint8_t const> data) noexcept;

::web_discovery::UserCredentialsResult *web_discovery$cxxbridge1$202$load_user_credentials(::rust::Slice<::std::uint8_t const> data) noexcept;

::web_discovery::AnonymousCredentialsManager *web_discovery$cxxbridge1$202$new_anonymous_credentials_manager() noexcept;

::web_discovery::AnonymousCredentialsManager *web_discovery$cxxbridge1$202$new_anonymous_credentials_with_fixed_seed() noexcept;

void web_discovery$cxxbridge1$202$AnonymousCredentialsManager$start_join(::web_discovery::AnonymousCredentialsManager &self, ::rust::Slice<::std::uint8_t const> challenge, ::web_discovery::JoinInitialization *return$) noexcept;

::web_discovery::VecU8Result *web_discovery$cxxbridge1$202$AnonymousCredentialsManager$finish_join(::web_discovery::AnonymousCredentialsManager &self, ::web_discovery::GroupPublicKey const &public_key, ::web_discovery::CredentialBIG const &gsk, ::web_discovery::JoinResponse *join_resp) noexcept;

void web_discovery$cxxbridge1$202$AnonymousCredentialsManager$set_gsk_and_credentials(::web_discovery::AnonymousCredentialsManager &self, ::web_discovery::CredentialBIG *gsk, ::web_discovery::UserCredentials *credentials) noexcept;

::web_discovery::VecU8Result *web_discovery$cxxbridge1$202$AnonymousCredentialsManager$sign(::web_discovery::AnonymousCredentialsManager &self, ::rust::Slice<::std::uint8_t const> msg, ::rust::Slice<::std::uint8_t const> basename) noexcept;
} // extern "C"

::std::size_t AnonymousCredentialsManager::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$AnonymousCredentialsManager$operator$sizeof();
}

::std::size_t AnonymousCredentialsManager::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$AnonymousCredentialsManager$operator$alignof();
}

::std::size_t GroupPublicKey::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$GroupPublicKey$operator$sizeof();
}

::std::size_t GroupPublicKey::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$GroupPublicKey$operator$alignof();
}

::std::size_t CredentialBIG::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$CredentialBIG$operator$sizeof();
}

::std::size_t CredentialBIG::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$CredentialBIG$operator$alignof();
}

::std::size_t JoinResponse::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$JoinResponse$operator$sizeof();
}

::std::size_t JoinResponse::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$JoinResponse$operator$alignof();
}

::std::size_t UserCredentials::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$UserCredentials$operator$sizeof();
}

::std::size_t UserCredentials::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$UserCredentials$operator$alignof();
}

::std::size_t VecU8Result::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$VecU8Result$operator$sizeof();
}

::std::size_t VecU8Result::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$VecU8Result$operator$alignof();
}

::std::size_t GroupPublicKeyResult::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$GroupPublicKeyResult$operator$sizeof();
}

::std::size_t GroupPublicKeyResult::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$GroupPublicKeyResult$operator$alignof();
}

::std::size_t CredentialBIGResult::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$CredentialBIGResult$operator$sizeof();
}

::std::size_t CredentialBIGResult::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$CredentialBIGResult$operator$alignof();
}

::std::size_t JoinResponseResult::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$JoinResponseResult$operator$sizeof();
}

::std::size_t JoinResponseResult::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$JoinResponseResult$operator$alignof();
}

::std::size_t UserCredentialsResult::layout::size() noexcept {
  return web_discovery$cxxbridge1$202$UserCredentialsResult$operator$sizeof();
}

::std::size_t UserCredentialsResult::layout::align() noexcept {
  return web_discovery$cxxbridge1$202$UserCredentialsResult$operator$alignof();
}

__attribute__((visibility("default"))) ::rust::String VecU8Result::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  web_discovery$cxxbridge1$202$VecU8Result$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool VecU8Result::is_ok() const noexcept {
  return web_discovery$cxxbridge1$202$VecU8Result$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> VecU8Result::unwrap() noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  web_discovery$cxxbridge1$202$VecU8Result$unwrap(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) ::rust::String GroupPublicKeyResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  web_discovery$cxxbridge1$202$GroupPublicKeyResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool GroupPublicKeyResult::is_ok() const noexcept {
  return web_discovery$cxxbridge1$202$GroupPublicKeyResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::GroupPublicKey> GroupPublicKeyResult::unwrap() noexcept {
  return ::rust::Box<::web_discovery::GroupPublicKey>::from_raw(web_discovery$cxxbridge1$202$GroupPublicKeyResult$unwrap(*this));
}

__attribute__((visibility("default"))) ::rust::String CredentialBIGResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  web_discovery$cxxbridge1$202$CredentialBIGResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CredentialBIGResult::is_ok() const noexcept {
  return web_discovery$cxxbridge1$202$CredentialBIGResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::CredentialBIG> CredentialBIGResult::unwrap() noexcept {
  return ::rust::Box<::web_discovery::CredentialBIG>::from_raw(web_discovery$cxxbridge1$202$CredentialBIGResult$unwrap(*this));
}

__attribute__((visibility("default"))) ::rust::String JoinResponseResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  web_discovery$cxxbridge1$202$JoinResponseResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool JoinResponseResult::is_ok() const noexcept {
  return web_discovery$cxxbridge1$202$JoinResponseResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::JoinResponse> JoinResponseResult::unwrap() noexcept {
  return ::rust::Box<::web_discovery::JoinResponse>::from_raw(web_discovery$cxxbridge1$202$JoinResponseResult$unwrap(*this));
}

__attribute__((visibility("default"))) ::rust::String UserCredentialsResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  web_discovery$cxxbridge1$202$UserCredentialsResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool UserCredentialsResult::is_ok() const noexcept {
  return web_discovery$cxxbridge1$202$UserCredentialsResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::UserCredentials> UserCredentialsResult::unwrap() noexcept {
  return ::rust::Box<::web_discovery::UserCredentials>::from_raw(web_discovery$cxxbridge1$202$UserCredentialsResult$unwrap(*this));
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::GroupPublicKeyResult> load_group_public_key(::rust::Slice<::std::uint8_t const> data) noexcept {
  return ::rust::Box<::web_discovery::GroupPublicKeyResult>::from_raw(web_discovery$cxxbridge1$202$load_group_public_key(data));
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::CredentialBIGResult> load_credential_big(::rust::Slice<::std::uint8_t const> data) noexcept {
  return ::rust::Box<::web_discovery::CredentialBIGResult>::from_raw(web_discovery$cxxbridge1$202$load_credential_big(data));
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::JoinResponseResult> load_join_response(::rust::Slice<::std::uint8_t const> data) noexcept {
  return ::rust::Box<::web_discovery::JoinResponseResult>::from_raw(web_discovery$cxxbridge1$202$load_join_response(data));
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::UserCredentialsResult> load_user_credentials(::rust::Slice<::std::uint8_t const> data) noexcept {
  return ::rust::Box<::web_discovery::UserCredentialsResult>::from_raw(web_discovery$cxxbridge1$202$load_user_credentials(data));
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::AnonymousCredentialsManager> new_anonymous_credentials_manager() noexcept {
  return ::rust::Box<::web_discovery::AnonymousCredentialsManager>::from_raw(web_discovery$cxxbridge1$202$new_anonymous_credentials_manager());
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::AnonymousCredentialsManager> new_anonymous_credentials_with_fixed_seed() noexcept {
  return ::rust::Box<::web_discovery::AnonymousCredentialsManager>::from_raw(web_discovery$cxxbridge1$202$new_anonymous_credentials_with_fixed_seed());
}

__attribute__((visibility("default"))) ::web_discovery::JoinInitialization AnonymousCredentialsManager::start_join(::rust::Slice<::std::uint8_t const> challenge) noexcept {
  ::rust::MaybeUninit<::web_discovery::JoinInitialization> return$;
  web_discovery$cxxbridge1$202$AnonymousCredentialsManager$start_join(*this, challenge, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::VecU8Result> AnonymousCredentialsManager::finish_join(::web_discovery::GroupPublicKey const &public_key, ::web_discovery::CredentialBIG const &gsk, ::rust::Box<::web_discovery::JoinResponse> join_resp) noexcept {
  return ::rust::Box<::web_discovery::VecU8Result>::from_raw(web_discovery$cxxbridge1$202$AnonymousCredentialsManager$finish_join(*this, public_key, gsk, join_resp.into_raw()));
}

__attribute__((visibility("default"))) void AnonymousCredentialsManager::set_gsk_and_credentials(::rust::Box<::web_discovery::CredentialBIG> gsk, ::rust::Box<::web_discovery::UserCredentials> credentials) noexcept {
  web_discovery$cxxbridge1$202$AnonymousCredentialsManager$set_gsk_and_credentials(*this, gsk.into_raw(), credentials.into_raw());
}

__attribute__((visibility("default"))) ::rust::Box<::web_discovery::VecU8Result> AnonymousCredentialsManager::sign(::rust::Slice<::std::uint8_t const> msg, ::rust::Slice<::std::uint8_t const> basename) noexcept {
  return ::rust::Box<::web_discovery::VecU8Result>::from_raw(web_discovery$cxxbridge1$202$AnonymousCredentialsManager$sign(*this, msg, basename));
}
} // namespace web_discovery

extern "C" {
::web_discovery::GroupPublicKey *cxxbridge1$box$web_discovery$GroupPublicKey$alloc() noexcept;
void cxxbridge1$box$web_discovery$GroupPublicKey$dealloc(::web_discovery::GroupPublicKey *) noexcept;
void cxxbridge1$box$web_discovery$GroupPublicKey$drop(::rust::Box<::web_discovery::GroupPublicKey> *ptr) noexcept;

::web_discovery::CredentialBIG *cxxbridge1$box$web_discovery$CredentialBIG$alloc() noexcept;
void cxxbridge1$box$web_discovery$CredentialBIG$dealloc(::web_discovery::CredentialBIG *) noexcept;
void cxxbridge1$box$web_discovery$CredentialBIG$drop(::rust::Box<::web_discovery::CredentialBIG> *ptr) noexcept;

::web_discovery::JoinResponse *cxxbridge1$box$web_discovery$JoinResponse$alloc() noexcept;
void cxxbridge1$box$web_discovery$JoinResponse$dealloc(::web_discovery::JoinResponse *) noexcept;
void cxxbridge1$box$web_discovery$JoinResponse$drop(::rust::Box<::web_discovery::JoinResponse> *ptr) noexcept;

::web_discovery::UserCredentials *cxxbridge1$box$web_discovery$UserCredentials$alloc() noexcept;
void cxxbridge1$box$web_discovery$UserCredentials$dealloc(::web_discovery::UserCredentials *) noexcept;
void cxxbridge1$box$web_discovery$UserCredentials$drop(::rust::Box<::web_discovery::UserCredentials> *ptr) noexcept;

::web_discovery::GroupPublicKeyResult *cxxbridge1$box$web_discovery$GroupPublicKeyResult$alloc() noexcept;
void cxxbridge1$box$web_discovery$GroupPublicKeyResult$dealloc(::web_discovery::GroupPublicKeyResult *) noexcept;
void cxxbridge1$box$web_discovery$GroupPublicKeyResult$drop(::rust::Box<::web_discovery::GroupPublicKeyResult> *ptr) noexcept;

::web_discovery::CredentialBIGResult *cxxbridge1$box$web_discovery$CredentialBIGResult$alloc() noexcept;
void cxxbridge1$box$web_discovery$CredentialBIGResult$dealloc(::web_discovery::CredentialBIGResult *) noexcept;
void cxxbridge1$box$web_discovery$CredentialBIGResult$drop(::rust::Box<::web_discovery::CredentialBIGResult> *ptr) noexcept;

::web_discovery::JoinResponseResult *cxxbridge1$box$web_discovery$JoinResponseResult$alloc() noexcept;
void cxxbridge1$box$web_discovery$JoinResponseResult$dealloc(::web_discovery::JoinResponseResult *) noexcept;
void cxxbridge1$box$web_discovery$JoinResponseResult$drop(::rust::Box<::web_discovery::JoinResponseResult> *ptr) noexcept;

::web_discovery::UserCredentialsResult *cxxbridge1$box$web_discovery$UserCredentialsResult$alloc() noexcept;
void cxxbridge1$box$web_discovery$UserCredentialsResult$dealloc(::web_discovery::UserCredentialsResult *) noexcept;
void cxxbridge1$box$web_discovery$UserCredentialsResult$drop(::rust::Box<::web_discovery::UserCredentialsResult> *ptr) noexcept;

::web_discovery::AnonymousCredentialsManager *cxxbridge1$box$web_discovery$AnonymousCredentialsManager$alloc() noexcept;
void cxxbridge1$box$web_discovery$AnonymousCredentialsManager$dealloc(::web_discovery::AnonymousCredentialsManager *) noexcept;
void cxxbridge1$box$web_discovery$AnonymousCredentialsManager$drop(::rust::Box<::web_discovery::AnonymousCredentialsManager> *ptr) noexcept;

::web_discovery::VecU8Result *cxxbridge1$box$web_discovery$VecU8Result$alloc() noexcept;
void cxxbridge1$box$web_discovery$VecU8Result$dealloc(::web_discovery::VecU8Result *) noexcept;
void cxxbridge1$box$web_discovery$VecU8Result$drop(::rust::Box<::web_discovery::VecU8Result> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__attribute__((visibility("default"))) ::web_discovery::GroupPublicKey *Box<::web_discovery::GroupPublicKey>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$GroupPublicKey$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::GroupPublicKey>::allocation::dealloc(::web_discovery::GroupPublicKey *ptr) noexcept {
  cxxbridge1$box$web_discovery$GroupPublicKey$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::GroupPublicKey>::drop() noexcept {
  cxxbridge1$box$web_discovery$GroupPublicKey$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::CredentialBIG *Box<::web_discovery::CredentialBIG>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$CredentialBIG$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::CredentialBIG>::allocation::dealloc(::web_discovery::CredentialBIG *ptr) noexcept {
  cxxbridge1$box$web_discovery$CredentialBIG$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::CredentialBIG>::drop() noexcept {
  cxxbridge1$box$web_discovery$CredentialBIG$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::JoinResponse *Box<::web_discovery::JoinResponse>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$JoinResponse$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::JoinResponse>::allocation::dealloc(::web_discovery::JoinResponse *ptr) noexcept {
  cxxbridge1$box$web_discovery$JoinResponse$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::JoinResponse>::drop() noexcept {
  cxxbridge1$box$web_discovery$JoinResponse$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::UserCredentials *Box<::web_discovery::UserCredentials>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$UserCredentials$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::UserCredentials>::allocation::dealloc(::web_discovery::UserCredentials *ptr) noexcept {
  cxxbridge1$box$web_discovery$UserCredentials$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::UserCredentials>::drop() noexcept {
  cxxbridge1$box$web_discovery$UserCredentials$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::GroupPublicKeyResult *Box<::web_discovery::GroupPublicKeyResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$GroupPublicKeyResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::GroupPublicKeyResult>::allocation::dealloc(::web_discovery::GroupPublicKeyResult *ptr) noexcept {
  cxxbridge1$box$web_discovery$GroupPublicKeyResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::GroupPublicKeyResult>::drop() noexcept {
  cxxbridge1$box$web_discovery$GroupPublicKeyResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::CredentialBIGResult *Box<::web_discovery::CredentialBIGResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$CredentialBIGResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::CredentialBIGResult>::allocation::dealloc(::web_discovery::CredentialBIGResult *ptr) noexcept {
  cxxbridge1$box$web_discovery$CredentialBIGResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::CredentialBIGResult>::drop() noexcept {
  cxxbridge1$box$web_discovery$CredentialBIGResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::JoinResponseResult *Box<::web_discovery::JoinResponseResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$JoinResponseResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::JoinResponseResult>::allocation::dealloc(::web_discovery::JoinResponseResult *ptr) noexcept {
  cxxbridge1$box$web_discovery$JoinResponseResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::JoinResponseResult>::drop() noexcept {
  cxxbridge1$box$web_discovery$JoinResponseResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::UserCredentialsResult *Box<::web_discovery::UserCredentialsResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$UserCredentialsResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::UserCredentialsResult>::allocation::dealloc(::web_discovery::UserCredentialsResult *ptr) noexcept {
  cxxbridge1$box$web_discovery$UserCredentialsResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::UserCredentialsResult>::drop() noexcept {
  cxxbridge1$box$web_discovery$UserCredentialsResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::AnonymousCredentialsManager *Box<::web_discovery::AnonymousCredentialsManager>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$AnonymousCredentialsManager$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::AnonymousCredentialsManager>::allocation::dealloc(::web_discovery::AnonymousCredentialsManager *ptr) noexcept {
  cxxbridge1$box$web_discovery$AnonymousCredentialsManager$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::AnonymousCredentialsManager>::drop() noexcept {
  cxxbridge1$box$web_discovery$AnonymousCredentialsManager$drop(this);
}
template <>
__attribute__((visibility("default"))) ::web_discovery::VecU8Result *Box<::web_discovery::VecU8Result>::allocation::alloc() noexcept {
  return cxxbridge1$box$web_discovery$VecU8Result$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::VecU8Result>::allocation::dealloc(::web_discovery::VecU8Result *ptr) noexcept {
  cxxbridge1$box$web_discovery$VecU8Result$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::web_discovery::VecU8Result>::drop() noexcept {
  cxxbridge1$box$web_discovery$VecU8Result$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
