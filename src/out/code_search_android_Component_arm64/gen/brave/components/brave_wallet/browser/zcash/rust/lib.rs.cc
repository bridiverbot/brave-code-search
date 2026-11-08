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

#ifdef __GNUC__
#pragma GCC diagnostic ignored "-Wmissing-declarations"
#pragma GCC diagnostic ignored "-Wshadow"
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
union ManuallyDrop {
  T value;
  ManuallyDrop(T &&value) : value(::std::move(value)) {}
  ~ManuallyDrop() {}
};

template <typename T>
union MaybeUninit {
  T value;
  void *operator new(::std::size_t sz) { return detail::operator_new<T>{}(sz); }
  MaybeUninit() {}
  ~MaybeUninit() {}
};

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

extern "C" {
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxBoolResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxBoolResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeCapResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeCapResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointIdResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointIdResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointBundleResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointBundleResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointCountResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointCountResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointsResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxCheckpointsResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxShardRootsResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxShardRootsResultWrapper$operator$alignof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxRetainedCheckpointsResultWrapper$operator$sizeof() noexcept;
::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxRetainedCheckpointsResultWrapper$operator$alignof() noexcept;

::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *brave_wallet$orchard$cxxbridge1$202$create_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *outputs, bool ironwood, bool is_v6_transaction) noexcept;

::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *brave_wallet$orchard$cxxbridge1$202$create_testing_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *outputs, ::std::uint64_t rng_seed, bool ironwood, bool is_v6_transaction) noexcept;

::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *brave_wallet$orchard$cxxbridge1$202$generate_orchard_extended_spending_key_from_seed(::rust::Slice<::std::uint8_t const> bytes) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$is_ok(::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$error_message(::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardExtendedSpendingKey *brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$unwrap(::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult &self) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *brave_wallet$orchard$cxxbridge1$202$batch_decode(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState *prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *actions) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *brave_wallet$orchard$cxxbridge1$202$batch_decode_ironwood(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState *prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *actions) noexcept;

::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$derive(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey const &self, ::std::uint32_t index) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$external_address(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey const &self, ::std::uint32_t diversifier_index, ::std::array<::std::uint8_t, 43> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$internal_address(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey const &self, ::std::uint32_t diversifier_index, ::std::array<::std::uint8_t, 43> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$full_view_key(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey const &self, ::std::array<::std::uint8_t, 96> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$spending_key(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey const &self, ::std::array<::std::uint8_t, 32> *return$) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$is_ok(::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$error_message(::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardAuthorizedBundle *brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$unwrap(::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult &self) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$is_ok(::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$error_message(::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardUnauthorizedBundle *brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$unwrap(::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult &self) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$is_ok(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$error_message(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle *brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$unwrap(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult &self) noexcept;

::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$size(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self) noexcept;

::std::uint64_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_value(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_nullifier(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index, ::std::array<::std::uint8_t, 32> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_rho(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index, ::std::array<::std::uint8_t, 32> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_rseed(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index, ::std::array<::std::uint8_t, 32> *return$) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_addr(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index, ::std::array<::std::uint8_t, 43> *return$) noexcept;

::std::uint32_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_block_height(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index) noexcept;

::std::uint32_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_commitment_tree_position(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle const &self, ::std::size_t index) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$is_ok(::brave_wallet::orchard::CxxOrchardShardTreeResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$error_message(::brave_wallet::orchard::CxxOrchardShardTreeResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardShardTree *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$unwrap(::brave_wallet::orchard::CxxOrchardShardTreeResult &self) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$is_ok(::brave_wallet::orchard::CxxOrchardTestingShardTreeResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$error_message(::brave_wallet::orchard::CxxOrchardTestingShardTreeResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardTestingShardTree *brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$unwrap(::brave_wallet::orchard::CxxOrchardTestingShardTreeResult &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$orchard_digest(::brave_wallet::orchard::CxxOrchardUnauthorizedBundle const &self, ::std::array<::std::uint8_t, 32> *return$) noexcept;

::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult *brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$complete(::brave_wallet::orchard::CxxOrchardUnauthorizedBundle const &self, ::std::array<::std::uint8_t, 32> *sighash) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$raw_tx(::brave_wallet::orchard::CxxOrchardAuthorizedBundle const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$is_ok(::brave_wallet::orchard::CxxOrchardWitnessResult const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$error_message(::brave_wallet::orchard::CxxOrchardWitnessResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::orchard::CxxOrchardWitness *brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$unwrap(::brave_wallet::orchard::CxxOrchardWitnessResult &self) noexcept;

::std::size_t brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$size(::brave_wallet::orchard::CxxOrchardWitness const &self) noexcept;

void brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$item(::brave_wallet::orchard::CxxOrchardWitness const &self, ::std::size_t index, ::std::array<::std::uint8_t, 32> *return$) noexcept;

::brave_wallet::orchard::CxxOrchardShardTreeResult *brave_wallet$orchard$cxxbridge1$202$create_orchard_shard_tree(::brave_wallet::orchard::CxxOrchardShardTreeDelegate *delegate) noexcept;

::brave_wallet::orchard::CxxOrchardTestingShardTreeResult *brave_wallet$orchard$cxxbridge1$202$create_orchard_testing_shard_tree(::brave_wallet::orchard::CxxOrchardShardTreeDelegate *delegate) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$insert_commitments(::brave_wallet::orchard::CxxOrchardShardTree &self, ::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept;

::brave_wallet::orchard::CxxOrchardWitnessResult *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$calculate_witness(::brave_wallet::orchard::CxxOrchardShardTree &self, ::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$truncate(::brave_wallet::orchard::CxxOrchardShardTree &self, ::std::uint32_t checkpoint_id) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$insert_commitments(::brave_wallet::orchard::CxxOrchardTestingShardTree &self, ::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept;

::brave_wallet::orchard::CxxOrchardWitnessResult *brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$calculate_witness(::brave_wallet::orchard::CxxOrchardTestingShardTree &self, ::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept;

bool brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$truncate(::brave_wallet::orchard::CxxOrchardTestingShardTree &self, ::std::uint32_t checkpoint_id) noexcept;

void brave_wallet$orchard$cxxbridge1$202$create_mock_commitment(::std::uint32_t position, ::std::uint32_t seed, ::std::array<::std::uint8_t, 32> *return$) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *brave_wallet$orchard$cxxbridge1$202$create_mock_decode_result(::brave_wallet::orchard::CxxOrchardShardTreeState *prior_tree_state, ::brave_wallet::orchard::CxxOrchardShardTreeLeafs *commitments) noexcept;

::brave_wallet::orchard::CxxOrchardShardResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard(::brave_wallet::orchard::CxxOrchardShard *item) noexcept;

::brave_wallet::orchard::CxxOrchardShardResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard_error() noexcept;

::brave_wallet::orchard::CxxOrchardShardResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard_none() noexcept;

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_bool(bool item) noexcept;

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_bool_error() noexcept;

::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap(::brave_wallet::orchard::CxxOrchardShardTreeCap *item) noexcept;

::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap_error() noexcept;

::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap_none() noexcept;

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id(::std::uint32_t item) noexcept;

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id_error() noexcept;

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id_none() noexcept;

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle(::brave_wallet::orchard::CxxOrchardCheckpointBundle *item) noexcept;

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle_error() noexcept;

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle_none() noexcept;

::brave_wallet::orchard::CxxCheckpointCountResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_count(::std::size_t item) noexcept;

::brave_wallet::orchard::CxxCheckpointCountResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_count_error() noexcept;

::brave_wallet::orchard::CxxCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoints(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> *item) noexcept;

::brave_wallet::orchard::CxxCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_checkpoints_error() noexcept;

::brave_wallet::orchard::CxxShardRootsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_roots(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> *item) noexcept;

::brave_wallet::orchard::CxxShardRootsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_roots_error() noexcept;

::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_retained_checkpoints(::rust::Vec<::std::uint32_t> *item) noexcept;

::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$wrap_retained_checkpoints_error() noexcept;

::brave_wallet::orchard::CxxOrchardShardResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$LastShard(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint8_t shard_level) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*LastShard$)(::std::uint8_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::LastShard;
  return (self.*LastShard$)(shard_level).into_raw();
}

::brave_wallet::orchard::CxxOrchardShardResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetShard(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::brave_wallet::orchard::CxxOrchardShardAddress const &addr) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetShard$)(::brave_wallet::orchard::CxxOrchardShardAddress const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetShard;
  return (self.*GetShard$)(addr).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$PutShard(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::brave_wallet::orchard::CxxOrchardShard const &tree) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*PutShard$)(::brave_wallet::orchard::CxxOrchardShard const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::PutShard;
  return (self.*PutShard$)(tree).into_raw();
}

::brave_wallet::orchard::CxxShardRootsResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetShardRoots(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint8_t shard_level) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetShardRoots$)(::std::uint8_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetShardRoots;
  return (self.*GetShardRoots$)(shard_level).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$Truncate(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::brave_wallet::orchard::CxxOrchardShardAddress const &address) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*Truncate$)(::brave_wallet::orchard::CxxOrchardShardAddress const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::Truncate;
  return (self.*Truncate$)(address).into_raw();
}

::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetCap(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetCap$)() const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetCap;
  return (self.*GetCap$)().into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$PutCap(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::brave_wallet::orchard::CxxOrchardShardTreeCap const &tree) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*PutCap$)(::brave_wallet::orchard::CxxOrchardShardTreeCap const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::PutCap;
  return (self.*PutCap$)(tree).into_raw();
}

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$MinCheckpointId(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*MinCheckpointId$)() const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::MinCheckpointId;
  return (self.*MinCheckpointId$)().into_raw();
}

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$MaxCheckpointId(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*MaxCheckpointId$)() const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::MaxCheckpointId;
  return (self.*MaxCheckpointId$)().into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$AddCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id, ::brave_wallet::orchard::CxxOrchardCheckpoint const &checkpoint) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*AddCheckpoint$)(::std::uint32_t, ::brave_wallet::orchard::CxxOrchardCheckpoint const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::AddCheckpoint;
  return (self.*AddCheckpoint$)(checkpoint_id, checkpoint).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$UpdateCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id, ::brave_wallet::orchard::CxxOrchardCheckpoint const &checkpoint) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*UpdateCheckpoint$)(::std::uint32_t, ::brave_wallet::orchard::CxxOrchardCheckpoint const &) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::UpdateCheckpoint;
  return (self.*UpdateCheckpoint$)(checkpoint_id, checkpoint).into_raw();
}

::brave_wallet::orchard::CxxCheckpointCountResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$CheckpointCount(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*CheckpointCount$)() const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::CheckpointCount;
  return (self.*CheckpointCount$)().into_raw();
}

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$CheckpointAtDepth(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::size_t depth) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*CheckpointAtDepth$)(::std::size_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::CheckpointAtDepth;
  return (self.*CheckpointAtDepth$)(depth).into_raw();
}

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetCheckpoint$)(::std::uint32_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetCheckpoint;
  return (self.*GetCheckpoint$)(checkpoint_id).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$RemoveCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*RemoveCheckpoint$)(::std::uint32_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::RemoveCheckpoint;
  return (self.*RemoveCheckpoint$)(checkpoint_id).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$TruncateCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*TruncateCheckpoint$)(::std::uint32_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::TruncateCheckpoint;
  return (self.*TruncateCheckpoint$)(checkpoint_id).into_raw();
}

::brave_wallet::orchard::CxxCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetCheckpoints(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::size_t limit) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetCheckpoints$)(::std::size_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetCheckpoints;
  return (self.*GetCheckpoints$)(limit).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$AddRetainedCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*AddRetainedCheckpoint$)(::std::uint32_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::AddRetainedCheckpoint;
  return (self.*AddRetainedCheckpoint$)(checkpoint_id).into_raw();
}

::brave_wallet::orchard::CxxBoolResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$RemoveRetainedCheckpoint(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self, ::std::uint32_t checkpoint_id) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*RemoveRetainedCheckpoint$)(::std::uint32_t) const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::RemoveRetainedCheckpoint;
  return (self.*RemoveRetainedCheckpoint$)(checkpoint_id).into_raw();
}

::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeDelegate$GetRetainedCheckpoints(::brave_wallet::orchard::CxxOrchardShardTreeDelegate const &self) noexcept {
  ::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> (::brave_wallet::orchard::CxxOrchardShardTreeDelegate::*GetRetainedCheckpoints$)() const = &::brave_wallet::orchard::CxxOrchardShardTreeDelegate::GetRetainedCheckpoints;
  return (self.*GetRetainedCheckpoints$)().into_raw();
}
} // extern "C"

::std::size_t CxxOrchardExtendedSpendingKey::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$operator$sizeof();
}

::std::size_t CxxOrchardExtendedSpendingKey::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$operator$alignof();
}

::std::size_t CxxOrchardUnauthorizedBundle::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$operator$sizeof();
}

::std::size_t CxxOrchardUnauthorizedBundle::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$operator$alignof();
}

::std::size_t CxxOrchardAuthorizedBundle::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$operator$sizeof();
}

::std::size_t CxxOrchardAuthorizedBundle::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$operator$alignof();
}

::std::size_t CxxOrchardDecodedBlocksBundle::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$operator$sizeof();
}

::std::size_t CxxOrchardDecodedBlocksBundle::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$operator$alignof();
}

::std::size_t CxxOrchardShardTree::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$operator$sizeof();
}

::std::size_t CxxOrchardShardTree::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$operator$alignof();
}

::std::size_t CxxOrchardTestingShardTree::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$operator$sizeof();
}

::std::size_t CxxOrchardTestingShardTree::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$operator$alignof();
}

::std::size_t CxxOrchardWitness::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$operator$sizeof();
}

::std::size_t CxxOrchardWitness::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$operator$alignof();
}

::std::size_t CxxOrchardExtendedSpendingKeyResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$operator$sizeof();
}

::std::size_t CxxOrchardExtendedSpendingKeyResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$operator$alignof();
}

::std::size_t CxxOrchardUnauthorizedBundleResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$operator$sizeof();
}

::std::size_t CxxOrchardUnauthorizedBundleResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$operator$alignof();
}

::std::size_t CxxOrchardAuthorizedBundleResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$operator$sizeof();
}

::std::size_t CxxOrchardAuthorizedBundleResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$operator$alignof();
}

::std::size_t CxxOrchardWitnessResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$operator$sizeof();
}

::std::size_t CxxOrchardWitnessResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$operator$alignof();
}

::std::size_t CxxOrchardDecodedBlocksBundleResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$operator$sizeof();
}

::std::size_t CxxOrchardDecodedBlocksBundleResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$operator$alignof();
}

::std::size_t CxxOrchardTestingShardTreeResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$operator$sizeof();
}

::std::size_t CxxOrchardTestingShardTreeResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$operator$alignof();
}

::std::size_t CxxOrchardShardTreeResult::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$operator$sizeof();
}

::std::size_t CxxOrchardShardTreeResult::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$operator$alignof();
}

::std::size_t CxxOrchardShardResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardResultWrapper$operator$sizeof();
}

::std::size_t CxxOrchardShardResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardResultWrapper$operator$alignof();
}

::std::size_t CxxBoolResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxBoolResultWrapper$operator$sizeof();
}

::std::size_t CxxBoolResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxBoolResultWrapper$operator$alignof();
}

::std::size_t CxxOrchardShardTreeCapResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeCapResultWrapper$operator$sizeof();
}

::std::size_t CxxOrchardShardTreeCapResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeCapResultWrapper$operator$alignof();
}

::std::size_t CxxCheckpointIdResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointIdResultWrapper$operator$sizeof();
}

::std::size_t CxxCheckpointIdResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointIdResultWrapper$operator$alignof();
}

::std::size_t CxxCheckpointBundleResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointBundleResultWrapper$operator$sizeof();
}

::std::size_t CxxCheckpointBundleResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointBundleResultWrapper$operator$alignof();
}

::std::size_t CxxCheckpointCountResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointCountResultWrapper$operator$sizeof();
}

::std::size_t CxxCheckpointCountResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointCountResultWrapper$operator$alignof();
}

::std::size_t CxxCheckpointsResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointsResultWrapper$operator$sizeof();
}

::std::size_t CxxCheckpointsResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxCheckpointsResultWrapper$operator$alignof();
}

::std::size_t CxxShardRootsResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxShardRootsResultWrapper$operator$sizeof();
}

::std::size_t CxxShardRootsResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxShardRootsResultWrapper$operator$alignof();
}

::std::size_t CxxRetainedCheckpointsResultWrapper::layout::size() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxRetainedCheckpointsResultWrapper$operator$sizeof();
}

::std::size_t CxxRetainedCheckpointsResultWrapper::layout::align() noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxRetainedCheckpointsResultWrapper$operator$alignof();
}

::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult> create_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> outputs, bool ironwood, bool is_v6_transaction) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend>> spends$(::std::move(spends));
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput>> outputs$(::std::move(outputs));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$create_orchard_bundle(tree_state, fvk, &spends$.value, &outputs$.value, ironwood, is_v6_transaction));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult> create_testing_orchard_bundle(::rust::Slice<::std::uint8_t const> tree_state, ::std::array<::std::uint8_t, 96> const &fvk, ::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> spends, ::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> outputs, ::std::uint64_t rng_seed, bool ironwood, bool is_v6_transaction) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend>> spends$(::std::move(spends));
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput>> outputs$(::std::move(outputs));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$create_testing_orchard_bundle(tree_state, fvk, &spends$.value, &outputs$.value, rng_seed, ironwood, is_v6_transaction));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult> generate_orchard_extended_spending_key_from_seed(::rust::Slice<::std::uint8_t const> bytes) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$generate_orchard_extended_spending_key_from_seed(bytes));
}

bool CxxOrchardExtendedSpendingKeyResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$is_ok(*this);
}

::rust::String CxxOrchardExtendedSpendingKeyResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey> CxxOrchardExtendedSpendingKeyResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKeyResult$unwrap(*this));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> batch_decode(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> actions) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShardTreeState> prior_tree_state$(::std::move(prior_tree_state));
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction>> actions$(::std::move(actions));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$batch_decode(fvk_bytes, &prior_tree_state$.value, &actions$.value));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> batch_decode_ironwood(::std::array<::std::uint8_t, 96> const &fvk_bytes, ::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> actions) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShardTreeState> prior_tree_state$(::std::move(prior_tree_state));
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction>> actions$(::std::move(actions));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$batch_decode_ironwood(fvk_bytes, &prior_tree_state$.value, &actions$.value));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult> CxxOrchardExtendedSpendingKey::derive(::std::uint32_t index) const noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$derive(*this, index));
}

::std::array<::std::uint8_t, 43> CxxOrchardExtendedSpendingKey::external_address(::std::uint32_t diversifier_index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 43>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$external_address(*this, diversifier_index, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 43> CxxOrchardExtendedSpendingKey::internal_address(::std::uint32_t diversifier_index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 43>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$internal_address(*this, diversifier_index, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 96> CxxOrchardExtendedSpendingKey::full_view_key() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 96>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$full_view_key(*this, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 32> CxxOrchardExtendedSpendingKey::spending_key() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardExtendedSpendingKey$spending_key(*this, &return$.value);
  return ::std::move(return$.value);
}

bool CxxOrchardAuthorizedBundleResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$is_ok(*this);
}

::rust::String CxxOrchardAuthorizedBundleResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle> CxxOrchardAuthorizedBundleResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundleResult$unwrap(*this));
}

bool CxxOrchardUnauthorizedBundleResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$is_ok(*this);
}

::rust::String CxxOrchardUnauthorizedBundleResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle> CxxOrchardUnauthorizedBundleResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundleResult$unwrap(*this));
}

bool CxxOrchardDecodedBlocksBundleResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$is_ok(*this);
}

::rust::String CxxOrchardDecodedBlocksBundleResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle> CxxOrchardDecodedBlocksBundleResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundleResult$unwrap(*this));
}

::std::size_t CxxOrchardDecodedBlocksBundle::size() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$size(*this);
}

::std::uint64_t CxxOrchardDecodedBlocksBundle::note_value(::std::size_t index) const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_value(*this, index);
}

::std::array<::std::uint8_t, 32> CxxOrchardDecodedBlocksBundle::note_nullifier(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_nullifier(*this, index, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 32> CxxOrchardDecodedBlocksBundle::note_rho(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_rho(*this, index, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 32> CxxOrchardDecodedBlocksBundle::note_rseed(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_rseed(*this, index, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 43> CxxOrchardDecodedBlocksBundle::note_addr(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 43>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_addr(*this, index, &return$.value);
  return ::std::move(return$.value);
}

::std::uint32_t CxxOrchardDecodedBlocksBundle::note_block_height(::std::size_t index) const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_block_height(*this, index);
}

::std::uint32_t CxxOrchardDecodedBlocksBundle::note_commitment_tree_position(::std::size_t index) const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardDecodedBlocksBundle$note_commitment_tree_position(*this, index);
}

bool CxxOrchardShardTreeResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$is_ok(*this);
}

::rust::String CxxOrchardShardTreeResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTree> CxxOrchardShardTreeResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTree>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTreeResult$unwrap(*this));
}

bool CxxOrchardTestingShardTreeResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$is_ok(*this);
}

::rust::String CxxOrchardTestingShardTreeResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTree> CxxOrchardTestingShardTreeResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTree>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTreeResult$unwrap(*this));
}

::std::array<::std::uint8_t, 32> CxxOrchardUnauthorizedBundle::orchard_digest() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$orchard_digest(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult> CxxOrchardUnauthorizedBundle::complete(::std::array<::std::uint8_t, 32> sighash) const noexcept {
  ::rust::ManuallyDrop<::std::array<::std::uint8_t, 32>> sighash$(::std::move(sighash));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardUnauthorizedBundle$complete(*this, &sighash$.value));
}

::rust::Vec<::std::uint8_t> CxxOrchardAuthorizedBundle::raw_tx() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardAuthorizedBundle$raw_tx(*this, &return$.value);
  return ::std::move(return$.value);
}

bool CxxOrchardWitnessResult::is_ok() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$is_ok(*this);
}

::rust::String CxxOrchardWitnessResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardWitness> CxxOrchardWitnessResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardWitness>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitnessResult$unwrap(*this));
}

::std::size_t CxxOrchardWitness::size() const noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$size(*this);
}

::std::array<::std::uint8_t, 32> CxxOrchardWitness::item(::std::size_t index) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$CxxOrchardWitness$item(*this, index, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeResult> create_orchard_shard_tree(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> delegate) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$create_orchard_shard_tree(delegate.release()));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult> create_orchard_testing_shard_tree(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> delegate) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$create_orchard_testing_shard_tree(delegate.release()));
}

bool CxxOrchardShardTree::insert_commitments(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$insert_commitments(*this, scan_result);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult> CxxOrchardShardTree::calculate_witness(::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$calculate_witness(*this, commitment_tree_position, checkpoint));
}

bool CxxOrchardShardTree::truncate(::std::uint32_t checkpoint_id) noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardShardTree$truncate(*this, checkpoint_id);
}

bool CxxOrchardTestingShardTree::insert_commitments(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle &scan_result) noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$insert_commitments(*this, scan_result);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult> CxxOrchardTestingShardTree::calculate_witness(::std::uint32_t commitment_tree_position, ::std::uint32_t checkpoint) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$calculate_witness(*this, commitment_tree_position, checkpoint));
}

bool CxxOrchardTestingShardTree::truncate(::std::uint32_t checkpoint_id) noexcept {
  return brave_wallet$orchard$cxxbridge1$202$CxxOrchardTestingShardTree$truncate(*this, checkpoint_id);
}

::std::array<::std::uint8_t, 32> create_mock_commitment(::std::uint32_t position, ::std::uint32_t seed) noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$orchard$cxxbridge1$202$create_mock_commitment(position, seed, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> create_mock_decode_result(::brave_wallet::orchard::CxxOrchardShardTreeState prior_tree_state, ::brave_wallet::orchard::CxxOrchardShardTreeLeafs commitments) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShardTreeState> prior_tree_state$(::std::move(prior_tree_state));
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShardTreeLeafs> commitments$(::std::move(commitments));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::from_raw(brave_wallet$orchard$cxxbridge1$202$create_mock_decode_result(&prior_tree_state$.value, &commitments$.value));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard(::brave_wallet::orchard::CxxOrchardShard item) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShard> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard_error());
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> wrap_shard_tree_shard_none() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_shard_none());
}

::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> wrap_bool(bool item) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_bool(item));
}

::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> wrap_bool_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_bool_error());
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap(::brave_wallet::orchard::CxxOrchardShardTreeCap item) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardShardTreeCap> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap_error());
}

::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> wrap_shard_tree_cap_none() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_cap_none());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id(::std::uint32_t item) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id(item));
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id_error());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> wrap_checkpoint_id_none() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_id_none());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle(::brave_wallet::orchard::CxxOrchardCheckpointBundle item) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::orchard::CxxOrchardCheckpointBundle> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle_error());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> wrap_checkpoint_bundle_none() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_bundle_none());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> wrap_checkpoint_count(::std::size_t item) noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_count(item));
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> wrap_checkpoint_count_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoint_count_error());
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> wrap_checkpoints(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> item) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoints(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> wrap_checkpoints_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_checkpoints_error());
}

::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> wrap_shard_tree_roots(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> item) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress>> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_roots(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> wrap_shard_tree_roots_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_shard_tree_roots_error());
}

::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> wrap_retained_checkpoints(::rust::Vec<::std::uint32_t> item) noexcept {
  ::rust::ManuallyDrop<::rust::Vec<::std::uint32_t>> item$(::std::move(item));
  return ::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_retained_checkpoints(&item$.value));
}

::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> wrap_retained_checkpoints_error() noexcept {
  return ::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper>::from_raw(brave_wallet$orchard$cxxbridge1$202$wrap_retained_checkpoints_error());
}
} // namespace orchard
} // namespace brave_wallet

extern "C" {
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$new(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$drop(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$len(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$capacity(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> const *ptr) noexcept;
::brave_wallet::orchard::CxxMerkleHash const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$data(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$set_len(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$truncate(::rust::Vec<::brave_wallet::orchard::CxxMerkleHash> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardShardTreeLeaf const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardSpend const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardSpend> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardOutput const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardOutput> *ptr, ::std::size_t len) noexcept;

::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$dealloc(::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$dealloc(::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardExtendedSpendingKey *cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$dealloc(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey> *ptr) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardCompactAction const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardCompactAction> *ptr, ::std::size_t len) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$dealloc(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardAuthorizedBundle *cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$dealloc(::brave_wallet::orchard::CxxOrchardAuthorizedBundle *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardUnauthorizedBundle *cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$dealloc(::brave_wallet::orchard::CxxOrchardUnauthorizedBundle *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle *cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$dealloc(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardShardTree *cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$dealloc(::brave_wallet::orchard::CxxOrchardShardTree *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardShardTree> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardTestingShardTree *cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$dealloc(::brave_wallet::orchard::CxxOrchardTestingShardTree *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTree> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$dealloc(::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardWitness *cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$dealloc(::brave_wallet::orchard::CxxOrchardWitness *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardWitness> *ptr) noexcept;

static_assert(::rust::detail::is_complete<::std::remove_extent<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>::type>::value, "definition of `::brave_wallet::orchard::CxxOrchardShardTreeDelegate` is required");
static_assert(sizeof(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>) == alignof(void *), "");
void cxxbridge1$unique_ptr$brave_wallet$orchard$CxxOrchardShardTreeDelegate$null(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>();
}
void cxxbridge1$unique_ptr$brave_wallet$orchard$CxxOrchardShardTreeDelegate$raw(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> *ptr, ::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>(raw);
}
::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>::element_type const *cxxbridge1$unique_ptr$brave_wallet$orchard$CxxOrchardShardTreeDelegate$get(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> const &ptr) noexcept {
  return ptr.get();
}
::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>::pointer cxxbridge1$unique_ptr$brave_wallet$orchard$CxxOrchardShardTreeDelegate$release(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> &ptr) noexcept {
  return ptr.release();
}
void cxxbridge1$unique_ptr$brave_wallet$orchard$CxxOrchardShardTreeDelegate$drop(::std::unique_ptr<::brave_wallet::orchard::CxxOrchardShardTreeDelegate> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::brave_wallet::orchard::CxxOrchardShardTreeDelegate>::value>{}(ptr);
}

::brave_wallet::orchard::CxxOrchardShardTreeResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$dealloc(::brave_wallet::orchard::CxxOrchardShardTreeResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardTestingShardTreeResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$dealloc(::brave_wallet::orchard::CxxOrchardTestingShardTreeResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardWitnessResult *cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$dealloc(::brave_wallet::orchard::CxxOrchardWitnessResult *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardWitnessResult> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardShardResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$dealloc(::brave_wallet::orchard::CxxOrchardShardResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxBoolResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$dealloc(::brave_wallet::orchard::CxxBoolResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxBoolResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$dealloc(::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxCheckpointIdResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$dealloc(::brave_wallet::orchard::CxxCheckpointIdResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$dealloc(::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxCheckpointCountResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$dealloc(::brave_wallet::orchard::CxxCheckpointCountResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper> *ptr) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardCheckpointBundle const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle> *ptr, ::std::size_t len) noexcept;

::brave_wallet::orchard::CxxCheckpointsResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$dealloc(::brave_wallet::orchard::CxxCheckpointsResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper> *ptr) noexcept;

void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$new(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$drop(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$len(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$capacity(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> const *ptr) noexcept;
::brave_wallet::orchard::CxxOrchardShardAddress const *cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$data(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$reserve_total(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$set_len(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$truncate(::rust::Vec<::brave_wallet::orchard::CxxOrchardShardAddress> *ptr, ::std::size_t len) noexcept;

::brave_wallet::orchard::CxxShardRootsResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$dealloc(::brave_wallet::orchard::CxxShardRootsResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxShardRootsResultWrapper> *ptr) noexcept;

::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$alloc() noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$dealloc(::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *) noexcept;
void cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$drop(::rust::Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
Vec<::brave_wallet::orchard::CxxMerkleHash>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxMerkleHash>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxMerkleHash>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxMerkleHash>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$capacity(this);
}
template <>
::brave_wallet::orchard::CxxMerkleHash const *Vec<::brave_wallet::orchard::CxxMerkleHash>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxMerkleHash>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxMerkleHash>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxMerkleHash>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxMerkleHash$truncate(this, len);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardTreeLeaf const *Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardTreeLeaf>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardTreeLeaf$truncate(this, len);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardSpend>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardSpend>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardSpend>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardSpend>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardSpend const *Vec<::brave_wallet::orchard::CxxOrchardSpend>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardSpend>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardSpend>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardSpend>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardSpend$truncate(this, len);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardOutput>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardOutput>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardOutput>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardOutput>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardOutput const *Vec<::brave_wallet::orchard::CxxOrchardOutput>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardOutput>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardOutput>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardOutput>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardOutput$truncate(this, len);
}
template <>
::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundleResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundleResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKeyResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKeyResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardExtendedSpendingKey *Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardExtendedSpendingKey *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardExtendedSpendingKey>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardExtendedSpendingKey$drop(this);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardCompactAction const *Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCompactAction>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCompactAction$truncate(this, len);
}
template <>
::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundleResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundleResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardAuthorizedBundle *Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardAuthorizedBundle *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundle>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundle$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardUnauthorizedBundle *Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardUnauthorizedBundle *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardUnauthorizedBundle>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardUnauthorizedBundle$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle *Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardDecodedBlocksBundle>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardDecodedBlocksBundle$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardTree *Box<::brave_wallet::orchard::CxxOrchardShardTree>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTree>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardShardTree *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTree>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTree$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardTestingShardTree *Box<::brave_wallet::orchard::CxxOrchardTestingShardTree>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardTestingShardTree>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardTestingShardTree *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardTestingShardTree>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTree$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult *Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardAuthorizedBundleResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardAuthorizedBundleResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardWitness *Box<::brave_wallet::orchard::CxxOrchardWitness>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardWitness>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardWitness *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardWitness>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitness$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardTreeResult *Box<::brave_wallet::orchard::CxxOrchardShardTreeResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTreeResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardShardTreeResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTreeResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardTestingShardTreeResult *Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardTestingShardTreeResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardTestingShardTreeResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardTestingShardTreeResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardWitnessResult *Box<::brave_wallet::orchard::CxxOrchardWitnessResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardWitnessResult>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardWitnessResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardWitnessResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardWitnessResult$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardResultWrapper *Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardShardResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxBoolResultWrapper *Box<::brave_wallet::orchard::CxxBoolResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxBoolResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxBoolResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxBoolResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxBoolResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxOrchardShardTreeCapResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxOrchardShardTreeCapResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxCheckpointIdResultWrapper *Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxCheckpointIdResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointIdResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointIdResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxCheckpointBundleResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointBundleResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointBundleResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxCheckpointCountResultWrapper *Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxCheckpointCountResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointCountResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointCountResultWrapper$drop(this);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardCheckpointBundle const *Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardCheckpointBundle>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardCheckpointBundle$truncate(this, len);
}
template <>
::brave_wallet::orchard::CxxCheckpointsResultWrapper *Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxCheckpointsResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxCheckpointsResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxCheckpointsResultWrapper$drop(this);
}
template <>
Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$new(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$drop(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$len(this);
}
template <>
::std::size_t Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$capacity(this);
}
template <>
::brave_wallet::orchard::CxxOrchardShardAddress const *Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$data(this);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$reserve_total(this, new_cap);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$set_len(this, len);
}
template <>
void Vec<::brave_wallet::orchard::CxxOrchardShardAddress>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$orchard$CxxOrchardShardAddress$truncate(this, len);
}
template <>
::brave_wallet::orchard::CxxShardRootsResultWrapper *Box<::brave_wallet::orchard::CxxShardRootsResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxShardRootsResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxShardRootsResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxShardRootsResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxShardRootsResultWrapper$drop(this);
}
template <>
::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$alloc();
}
template <>
void Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper>::allocation::dealloc(::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper *ptr) noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$dealloc(ptr);
}
template <>
void Box<::brave_wallet::orchard::CxxRetainedCheckpointsResultWrapper>::drop() noexcept {
  cxxbridge1$box$brave_wallet$orchard$CxxRetainedCheckpointsResultWrapper$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
