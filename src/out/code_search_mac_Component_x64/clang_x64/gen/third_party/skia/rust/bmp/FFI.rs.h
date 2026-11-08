#pragma once
#include "rust/common/SkStreamAdapter.h"
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

namespace {
template <typename T>
class impl;
} // namespace

template <typename T>
::std::size_t size_of();
template <typename T>
::std::size_t align_of();

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

namespace rust_bmp {
  enum class DecodingResult : ::std::uint8_t;
  enum class BmpColor : ::std::int32_t;
  enum class BmpAlpha : ::std::int32_t;
  struct DecodedRowsInfo;
  struct ResultOfReader;
  struct Reader;
}

namespace rust_bmp {
#ifndef CXXBRIDGE1_ENUM_rust_bmp$DecodingResult
#define CXXBRIDGE1_ENUM_rust_bmp$DecodingResult
enum class DecodingResult : ::std::uint8_t {
  Success = 0,
  FormatError = 1,
  ParameterError = 2,
  UnsupportedFeature = 3,
  IncompleteInput = 4,
  MemoryError = 5,
  OtherError = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_bmp$DecodingResult

#ifndef CXXBRIDGE1_ENUM_rust_bmp$BmpColor
#define CXXBRIDGE1_ENUM_rust_bmp$BmpColor
// BMP color type matching SkEncodedInfo::Color values.
// Static assertions in C++ validate these match at compile time.
enum class BmpColor : ::std::int32_t {
  RGB = 5,
  RGBA = 6,
  BGR = 7,
  BGRA = 9,
};
#endif // CXXBRIDGE1_ENUM_rust_bmp$BmpColor

#ifndef CXXBRIDGE1_ENUM_rust_bmp$BmpAlpha
#define CXXBRIDGE1_ENUM_rust_bmp$BmpAlpha
// BMP alpha type matching SkEncodedInfo::Alpha values.
// Static assertions in C++ validate these match at compile time.
enum class BmpAlpha : ::std::int32_t {
  Opaque = 0,
  Unpremul = 1,
};
#endif // CXXBRIDGE1_ENUM_rust_bmp$BmpAlpha

#ifndef CXXBRIDGE1_STRUCT_rust_bmp$DecodedRowsInfo
#define CXXBRIDGE1_STRUCT_rust_bmp$DecodedRowsInfo
// Information about decoded rows.
// Returned by get_next_rows() to tell C++ where to place the decoded data.
struct DecodedRowsInfo final {
  // The destination row index where the buffer should start being copied.
  // Copy src row i to dst row (dst_row_start + i).
  ::std::uint32_t dst_row_start CXX_DEFAULT_VALUE(0);
  // The number of valid rows in the buffer.
  ::std::uint32_t row_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_bmp$DecodedRowsInfo

#ifndef CXXBRIDGE1_STRUCT_rust_bmp$ResultOfReader
#define CXXBRIDGE1_STRUCT_rust_bmp$ResultOfReader
struct ResultOfReader final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::rust_bmp::DecodingResult err() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::rust_bmp::Reader> unwrap() noexcept;
  ~ResultOfReader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_bmp$ResultOfReader

#ifndef CXXBRIDGE1_STRUCT_rust_bmp$Reader
#define CXXBRIDGE1_STRUCT_rust_bmp$Reader
struct Reader final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::std::uint32_t width() const noexcept;
  __attribute__((visibility("default"))) ::std::uint32_t height() const noexcept;
  __attribute__((visibility("default"))) ::rust_bmp::BmpColor color() const noexcept;
  __attribute__((visibility("default"))) ::rust_bmp::BmpAlpha alpha() const noexcept;
  __attribute__((visibility("default"))) bool metadata_loaded() const noexcept;

  // Attempt to read and parse BMP header metadata from the stream.
  // Returns Success if metadata was loaded, IncompleteInput if more data is needed.
  __attribute__((visibility("default"))) ::rust_bmp::DecodingResult read_metadata() noexcept;

  // Read metadata for a BMP embedded in an ICO file.
  // Handles ICO-specific differences: no file header, doubled height, alpha channel.
  // Uses image crate's `read_metadata_in_ico_format()` internally.
  __attribute__((visibility("default"))) ::rust_bmp::DecodingResult read_metadata_for_ico() noexcept;

  // Attempt to read all image pixel data from the stream into internal buffer.
  // Returns Success if all data was read, IncompleteInput if more data is needed.
  // After success, use get_image_data() to access the decoded pixels.
  __attribute__((visibility("default"))) ::rust_bmp::DecodingResult read_image_data() noexcept;

  // Check if all image data has been loaded into the internal buffer.
  __attribute__((visibility("default"))) bool image_data_loaded() const noexcept;

  // Get info about NEW rows since last call.
  // Returns DecodedRowsInfo with row placement info and populates the buffer
  // output parameter with the pixel data for the new rows.
  //
  // # Safety
  // CXX requires `unsafe` for functions with explicit lifetimes. The caller
  // must ensure the returned buffer is not used after `self` is mutated or dropped.
  __attribute__((visibility("default"))) ::rust_bmp::DecodedRowsInfo get_next_rows(::rust::Slice<::std::uint8_t const> &buffer) noexcept;

  // Get the number of bytes per row.
  __attribute__((visibility("default"))) ::std::uint32_t row_bytes() const noexcept;

  // Reset internal state for re-decoding (clears buffered image data).
  __attribute__((visibility("default"))) void reset_decode_state() noexcept;

  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> icc_profile() noexcept;
  ~Reader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_bmp$Reader

__attribute__((visibility("default"))) bool is_bmp_data(::rust::Slice<::std::uint8_t const> data) noexcept;

__attribute__((visibility("default"))) ::rust::Box<::rust_bmp::ResultOfReader> new_reader(::std::unique_ptr<::rust::stream::SkStreamAdapter> input) noexcept;

// Create a Reader from in-memory data, bypassing SkStreamAdapter and
// BufReader. Use when stream data is fully available in memory.
__attribute__((visibility("default"))) ::rust::Box<::rust_bmp::ResultOfReader> new_reader_from_data(::rust::Slice<::std::uint8_t const> data) noexcept;
} // namespace rust_bmp

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
