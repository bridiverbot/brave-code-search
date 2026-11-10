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

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace rust_jpeg {
  enum class DecodingResult : ::std::uint8_t;
  enum class OutputStatus : ::std::uint8_t;
  enum class PackedOutputFormat : ::std::uint8_t;
  struct RawPlaneInfo;
  struct RawOutputResult;
  struct ScanlineOutputResult;
  enum class JpegColor : ::std::int32_t;
  enum class JpegAlpha : ::std::int32_t;
  struct DecodedRowsInfo;
  struct JpegSegmentInfo;
  struct MpfImageEntry;
  enum class EncodingResult : ::std::uint8_t;
  enum class JpegEncodeColor : ::std::uint8_t;
  enum class JpegEncodeAlpha : ::std::uint8_t;
  struct Reader;
  struct EmbeddedJpegScanner;
}

namespace rust_jpeg {
#ifndef CXXBRIDGE1_ENUM_rust_jpeg$DecodingResult
#define CXXBRIDGE1_ENUM_rust_jpeg$DecodingResult
enum class DecodingResult : ::std::uint8_t {
  Success = 0,
  FormatError = 1,
  ParameterError = 2,
  UnsupportedFeature = 3,
  IncompleteInput = 4,
  MemoryError = 5,
  OtherError = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$DecodingResult

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$OutputStatus
#define CXXBRIDGE1_ENUM_rust_jpeg$OutputStatus
enum class OutputStatus : ::std::uint8_t {
  Ready = 0,
  NeedMoreInput = 1,
  Complete = 2,
  Error = 3,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$OutputStatus

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$PackedOutputFormat
#define CXXBRIDGE1_ENUM_rust_jpeg$PackedOutputFormat
enum class PackedOutputFormat : ::std::uint8_t {
  Source = 0,
  RGBA = 1,
  BGRA = 2,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$PackedOutputFormat

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$RawPlaneInfo
#define CXXBRIDGE1_STRUCT_rust_jpeg$RawPlaneInfo
struct RawPlaneInfo final {
  ::std::uint8_t component_id CXX_DEFAULT_VALUE(0);
  ::std::uint32_t horizontal_sampling_factor CXX_DEFAULT_VALUE(0);
  ::std::uint32_t vertical_sampling_factor CXX_DEFAULT_VALUE(0);
  ::std::uint32_t width CXX_DEFAULT_VALUE(0);
  ::std::uint32_t height CXX_DEFAULT_VALUE(0);
  ::std::uint32_t row_bytes CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$RawPlaneInfo

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$RawOutputResult
#define CXXBRIDGE1_STRUCT_rust_jpeg$RawOutputResult
struct RawOutputResult final {
  ::rust_jpeg::OutputStatus status;
  ::rust_jpeg::DecodingResult result;
  ::std::uint32_t y_rows CXX_DEFAULT_VALUE(0);
  ::std::uint32_t u_rows CXX_DEFAULT_VALUE(0);
  ::std::uint32_t v_rows CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$RawOutputResult

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$ScanlineOutputResult
#define CXXBRIDGE1_STRUCT_rust_jpeg$ScanlineOutputResult
struct ScanlineOutputResult final {
  ::rust_jpeg::OutputStatus status;
  ::rust_jpeg::DecodingResult result;
  ::std::uint32_t rows CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$ScanlineOutputResult

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$JpegColor
#define CXXBRIDGE1_ENUM_rust_jpeg$JpegColor
// JPEG color type matching SkEncodedInfo::Color values.
// Static assertions in C++ validate these match at compile time.
enum class JpegColor : ::std::int32_t {
  Grayscale = 0,
  RGB = 5,
  InvertedCMYK = 12,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$JpegColor

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$JpegAlpha
#define CXXBRIDGE1_ENUM_rust_jpeg$JpegAlpha
// JPEG alpha type matching SkEncodedInfo::Alpha values.
// Static assertions in C++ validate these match at compile time.
enum class JpegAlpha : ::std::int32_t {
  Opaque = 0,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$JpegAlpha

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$DecodedRowsInfo
#define CXXBRIDGE1_STRUCT_rust_jpeg$DecodedRowsInfo
// Information about decoded rows.
struct DecodedRowsInfo final {
  // The destination row index where the buffer should start being copied.
  ::std::uint32_t dst_row_start CXX_DEFAULT_VALUE(0);
  ::std::uint32_t row_count CXX_DEFAULT_VALUE(0);
  // Whether these rows replace a previous progressive preview rather than
  // extending the stable final-output prefix.
  bool is_preview CXX_DEFAULT_VALUE(false);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$DecodedRowsInfo

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$JpegSegmentInfo
#define CXXBRIDGE1_STRUCT_rust_jpeg$JpegSegmentInfo
// A scanned JPEG segment's header information.
struct JpegSegmentInfo final {
  // The second byte of the marker code (e.g. 0xE1 for APP1).
  ::std::uint8_t marker CXX_DEFAULT_VALUE(0);
  // Offset in bytes from start of JPEG data to the marker's 0xFF byte.
  ::std::uint32_t offset CXX_DEFAULT_VALUE(0);
  // Length of the segment parameters (including the 2-byte length field).
  ::std::uint16_t parameter_length CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$JpegSegmentInfo

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$MpfImageEntry
#define CXXBRIDGE1_STRUCT_rust_jpeg$MpfImageEntry
// An image entry from Multi-Picture Format (MPF) metadata.
struct MpfImageEntry final {
  // Offset of the image data relative to the MP Endian field
  // in the MPF segment.  For the first (primary) image this is 0.
  ::std::uint32_t data_offset CXX_DEFAULT_VALUE(0);
  // Size of the image in bytes.
  ::std::uint32_t size CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$MpfImageEntry

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$EncodingResult
#define CXXBRIDGE1_ENUM_rust_jpeg$EncodingResult
enum class EncodingResult : ::std::uint8_t {
  Success = 0,
  ParameterError = 1,
  OtherError = 2,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$EncodingResult

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeColor
#define CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeColor
enum class JpegEncodeColor : ::std::uint8_t {
  RGB = 0,
  RGBA = 1,
  BGRA = 2,
  Grayscale = 3,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeColor

#ifndef CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeAlpha
#define CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeAlpha
// Alpha handling for JPEG encoding (JPEG is always opaque).
enum class JpegEncodeAlpha : ::std::uint8_t {
  // Ignore alpha channel entirely.
  Ignore = 0,
  // Blend onto black background before encoding.
  BlendOnBlack = 1,
};
#endif // CXXBRIDGE1_ENUM_rust_jpeg$JpegEncodeAlpha

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$Reader
#define CXXBRIDGE1_STRUCT_rust_jpeg$Reader
struct Reader final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_jpeg::DecodingResult initialization_result() const noexcept;
  __declspec(dllexport) ::std::uint32_t width() const noexcept;
  __declspec(dllexport) ::std::uint32_t height() const noexcept;
  __declspec(dllexport) ::rust_jpeg::JpegColor color() const noexcept;
  __declspec(dllexport) ::rust_jpeg::JpegAlpha alpha() const noexcept;
  __declspec(dllexport) bool metadata_loaded() const noexcept;
  __declspec(dllexport) ::rust_jpeg::DecodingResult read_metadata() noexcept;
  __declspec(dllexport) ::rust_jpeg::DecodingResult read_image_data() noexcept;
  __declspec(dllexport) ::rust_jpeg::DecodingResult read_incremental_image_data() noexcept;
  __declspec(dllexport) bool image_data_loaded() const noexcept;

  // # Safety
  // CXX requires `unsafe` for functions with explicit lifetimes.
  __declspec(dllexport) ::rust_jpeg::DecodedRowsInfo get_next_rows(::rust::Slice<::std::uint8_t const> &buffer) noexcept;

  __declspec(dllexport) ::std::uint32_t row_bytes() const noexcept;
  __declspec(dllexport) bool supports_streaming_full_decode() const noexcept;
  __declspec(dllexport) bool supports_direct_packed_output() const noexcept;
  __declspec(dllexport) ::std::uint64_t full_image_buffer_capacity_for_testing() const noexcept;
  __declspec(dllexport) void reset_decode_state() noexcept;
  __declspec(dllexport) ::std::uint32_t raw_component_count() const noexcept;
  __declspec(dllexport) ::rust_jpeg::RawPlaneInfo raw_plane_info(::std::uint32_t index) const noexcept;
  __declspec(dllexport) bool raw_input_complete() const noexcept;
  __declspec(dllexport) ::rust_jpeg::RawOutputResult read_raw_imcu_row(::rust::Slice<::std::uint8_t > y, ::std::uint32_t y_row_bytes, ::rust::Slice<::std::uint8_t > u, ::std::uint32_t u_row_bytes, ::rust::Slice<::std::uint8_t > v, ::std::uint32_t v_row_bytes) noexcept;
  __declspec(dllexport) ::rust_jpeg::ScanlineOutputResult start_scanline_output(::rust_jpeg::PackedOutputFormat format) noexcept;
  __declspec(dllexport) ::rust_jpeg::ScanlineOutputResult finish_scanline_output() noexcept;
  __declspec(dllexport) ::rust_jpeg::ScanlineOutputResult read_scanlines(::rust::Slice<::std::uint8_t > output, ::std::uint32_t row_bytes) noexcept;
  __declspec(dllexport) ::rust_jpeg::ScanlineOutputResult skip_scanlines(::std::uint32_t rows) noexcept;
  __declspec(dllexport) ::rust::Vec<::std::uint8_t> icc_profile() const noexcept;
  __declspec(dllexport) ::rust::Vec<::std::uint8_t> exif_data() const noexcept;
  __declspec(dllexport) ::std::uint32_t segment_count() const noexcept;
  __declspec(dllexport) ::rust_jpeg::JpegSegmentInfo segment_info(::std::uint32_t index) const noexcept;

  // Return segment parameter data (excluding marker and length bytes).
  __declspec(dllexport) ::rust::Vec<::std::uint8_t> segment_data(::std::uint32_t index) const noexcept;

  __declspec(dllexport) bool segments_scanned() const noexcept;
  __declspec(dllexport) bool has_mpf() const noexcept;
  __declspec(dllexport) ::std::uint32_t mpf_image_count() const noexcept;
  __declspec(dllexport) ::rust_jpeg::MpfImageEntry mpf_image_entry(::std::uint32_t index) const noexcept;

  // Byte offset of the MPF APP2 marker within the JPEG data.
  __declspec(dllexport) ::std::uint32_t mpf_segment_offset() const noexcept;

  ~Reader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$Reader

#ifndef CXXBRIDGE1_STRUCT_rust_jpeg$EmbeddedJpegScanner
#define CXXBRIDGE1_STRUCT_rust_jpeg$EmbeddedJpegScanner
struct EmbeddedJpegScanner final : public ::rust::Opaque {
  __declspec(dllexport) bool embedded_had_error() const noexcept;
  __declspec(dllexport) ::std::uint32_t embedded_segment_count() const noexcept;
  __declspec(dllexport) ::rust_jpeg::JpegSegmentInfo embedded_segment_info(::std::uint32_t index) const noexcept;
  __declspec(dllexport) ::rust::Vec<::std::uint8_t> embedded_segment_data(::std::uint32_t index) const noexcept;
  ~EmbeddedJpegScanner() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_jpeg$EmbeddedJpegScanner

extern "C" {
bool rust_jpeg$cxxbridge1$202$is_jpeg_data(::rust::Slice<::std::uint8_t const> data) noexcept;

::rust_jpeg::Reader *rust_jpeg$cxxbridge1$202$new_reader(::rust::stream::SkStreamAdapter *input, ::std::uint64_t stream_length, bool raw_input_complete) noexcept;
::std::size_t rust_jpeg$cxxbridge1$202$Reader$operator$sizeof() noexcept;
::std::size_t rust_jpeg$cxxbridge1$202$Reader$operator$alignof() noexcept;

::rust_jpeg::DecodingResult rust_jpeg$cxxbridge1$202$Reader$initialization_result(::rust_jpeg::Reader const &self) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$width(::rust_jpeg::Reader const &self) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$height(::rust_jpeg::Reader const &self) noexcept;

::rust_jpeg::JpegColor rust_jpeg$cxxbridge1$202$Reader$color(::rust_jpeg::Reader const &self) noexcept;

::rust_jpeg::JpegAlpha rust_jpeg$cxxbridge1$202$Reader$alpha(::rust_jpeg::Reader const &self) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$metadata_loaded(::rust_jpeg::Reader const &self) noexcept;

::rust_jpeg::DecodingResult rust_jpeg$cxxbridge1$202$Reader$read_metadata(::rust_jpeg::Reader &self) noexcept;

::rust_jpeg::DecodingResult rust_jpeg$cxxbridge1$202$Reader$read_image_data(::rust_jpeg::Reader &self) noexcept;

::rust_jpeg::DecodingResult rust_jpeg$cxxbridge1$202$Reader$read_incremental_image_data(::rust_jpeg::Reader &self) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$image_data_loaded(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$get_next_rows(::rust_jpeg::Reader &self, ::rust::Slice<::std::uint8_t const> &buffer, ::rust_jpeg::DecodedRowsInfo *return$) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$row_bytes(::rust_jpeg::Reader const &self) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$supports_streaming_full_decode(::rust_jpeg::Reader const &self) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$supports_direct_packed_output(::rust_jpeg::Reader const &self) noexcept;

::std::uint64_t rust_jpeg$cxxbridge1$202$Reader$full_image_buffer_capacity_for_testing(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$reset_decode_state(::rust_jpeg::Reader &self) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$raw_component_count(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$raw_plane_info(::rust_jpeg::Reader const &self, ::std::uint32_t index, ::rust_jpeg::RawPlaneInfo *return$) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$raw_input_complete(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$read_raw_imcu_row(::rust_jpeg::Reader &self, ::rust::Slice<::std::uint8_t > y, ::std::uint32_t y_row_bytes, ::rust::Slice<::std::uint8_t > u, ::std::uint32_t u_row_bytes, ::rust::Slice<::std::uint8_t > v, ::std::uint32_t v_row_bytes, ::rust_jpeg::RawOutputResult *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$start_scanline_output(::rust_jpeg::Reader &self, ::rust_jpeg::PackedOutputFormat format, ::rust_jpeg::ScanlineOutputResult *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$finish_scanline_output(::rust_jpeg::Reader &self, ::rust_jpeg::ScanlineOutputResult *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$read_scanlines(::rust_jpeg::Reader &self, ::rust::Slice<::std::uint8_t > output, ::std::uint32_t row_bytes, ::rust_jpeg::ScanlineOutputResult *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$skip_scanlines(::rust_jpeg::Reader &self, ::std::uint32_t rows, ::rust_jpeg::ScanlineOutputResult *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$icc_profile(::rust_jpeg::Reader const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$exif_data(::rust_jpeg::Reader const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$segment_count(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$segment_info(::rust_jpeg::Reader const &self, ::std::uint32_t index, ::rust_jpeg::JpegSegmentInfo *return$) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$segment_data(::rust_jpeg::Reader const &self, ::std::uint32_t index, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$segments_scanned(::rust_jpeg::Reader const &self) noexcept;

bool rust_jpeg$cxxbridge1$202$Reader$has_mpf(::rust_jpeg::Reader const &self) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$mpf_image_count(::rust_jpeg::Reader const &self) noexcept;

void rust_jpeg$cxxbridge1$202$Reader$mpf_image_entry(::rust_jpeg::Reader const &self, ::std::uint32_t index, ::rust_jpeg::MpfImageEntry *return$) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$Reader$mpf_segment_offset(::rust_jpeg::Reader const &self) noexcept;
::std::size_t rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$operator$sizeof() noexcept;
::std::size_t rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$operator$alignof() noexcept;

::rust_jpeg::EmbeddedJpegScanner *rust_jpeg$cxxbridge1$202$scan_embedded_jpeg(::rust::Slice<::std::uint8_t const> data) noexcept;

bool rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_had_error(::rust_jpeg::EmbeddedJpegScanner const &self) noexcept;

::std::uint32_t rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_count(::rust_jpeg::EmbeddedJpegScanner const &self) noexcept;

void rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_info(::rust_jpeg::EmbeddedJpegScanner const &self, ::std::uint32_t index, ::rust_jpeg::JpegSegmentInfo *return$) noexcept;

void rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_data(::rust_jpeg::EmbeddedJpegScanner const &self, ::std::uint32_t index, ::rust::Vec<::std::uint8_t> *return$) noexcept;

::rust_jpeg::EncodingResult rust_jpeg$cxxbridge1$202$encode_jpeg(::rust::Slice<::std::uint8_t const> pixels, ::std::uint32_t width, ::std::uint32_t height, ::std::uint32_t row_bytes, ::rust_jpeg::JpegEncodeColor color_type, ::rust_jpeg::JpegEncodeAlpha alpha_option, ::std::uint32_t quality, ::rust::Vec<::std::uint8_t> &output) noexcept;
} // extern "C"

__declspec(dllexport) bool is_jpeg_data(::rust::Slice<::std::uint8_t const> data) noexcept {
  return rust_jpeg$cxxbridge1$202$is_jpeg_data(data);
}

__declspec(dllexport) ::rust::Box<::rust_jpeg::Reader> new_reader(::std::unique_ptr<::rust::stream::SkStreamAdapter> input, ::std::uint64_t stream_length, bool raw_input_complete) noexcept {
  return ::rust::Box<::rust_jpeg::Reader>::from_raw(rust_jpeg$cxxbridge1$202$new_reader(input.release(), stream_length, raw_input_complete));
}

::std::size_t Reader::layout::size() noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$operator$sizeof();
}

::std::size_t Reader::layout::align() noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$operator$alignof();
}

__declspec(dllexport) ::rust_jpeg::DecodingResult Reader::initialization_result() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$initialization_result(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::width() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$width(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::height() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$height(*this);
}

__declspec(dllexport) ::rust_jpeg::JpegColor Reader::color() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$color(*this);
}

__declspec(dllexport) ::rust_jpeg::JpegAlpha Reader::alpha() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$alpha(*this);
}

__declspec(dllexport) bool Reader::metadata_loaded() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$metadata_loaded(*this);
}

__declspec(dllexport) ::rust_jpeg::DecodingResult Reader::read_metadata() noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$read_metadata(*this);
}

__declspec(dllexport) ::rust_jpeg::DecodingResult Reader::read_image_data() noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$read_image_data(*this);
}

__declspec(dllexport) ::rust_jpeg::DecodingResult Reader::read_incremental_image_data() noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$read_incremental_image_data(*this);
}

__declspec(dllexport) bool Reader::image_data_loaded() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$image_data_loaded(*this);
}

__declspec(dllexport) ::rust_jpeg::DecodedRowsInfo Reader::get_next_rows(::rust::Slice<::std::uint8_t const> &buffer) noexcept {
  ::rust::MaybeUninit<::rust_jpeg::DecodedRowsInfo> return$;
  rust_jpeg$cxxbridge1$202$Reader$get_next_rows(*this, buffer, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::std::uint32_t Reader::row_bytes() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$row_bytes(*this);
}

__declspec(dllexport) bool Reader::supports_streaming_full_decode() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$supports_streaming_full_decode(*this);
}

__declspec(dllexport) bool Reader::supports_direct_packed_output() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$supports_direct_packed_output(*this);
}

__declspec(dllexport) ::std::uint64_t Reader::full_image_buffer_capacity_for_testing() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$full_image_buffer_capacity_for_testing(*this);
}

__declspec(dllexport) void Reader::reset_decode_state() noexcept {
  rust_jpeg$cxxbridge1$202$Reader$reset_decode_state(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::raw_component_count() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$raw_component_count(*this);
}

__declspec(dllexport) ::rust_jpeg::RawPlaneInfo Reader::raw_plane_info(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust_jpeg::RawPlaneInfo> return$;
  rust_jpeg$cxxbridge1$202$Reader$raw_plane_info(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) bool Reader::raw_input_complete() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$raw_input_complete(*this);
}

__declspec(dllexport) ::rust_jpeg::RawOutputResult Reader::read_raw_imcu_row(::rust::Slice<::std::uint8_t > y, ::std::uint32_t y_row_bytes, ::rust::Slice<::std::uint8_t > u, ::std::uint32_t u_row_bytes, ::rust::Slice<::std::uint8_t > v, ::std::uint32_t v_row_bytes) noexcept {
  ::rust::MaybeUninit<::rust_jpeg::RawOutputResult> return$;
  rust_jpeg$cxxbridge1$202$Reader$read_raw_imcu_row(*this, y, y_row_bytes, u, u_row_bytes, v, v_row_bytes, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust_jpeg::ScanlineOutputResult Reader::start_scanline_output(::rust_jpeg::PackedOutputFormat format) noexcept {
  ::rust::MaybeUninit<::rust_jpeg::ScanlineOutputResult> return$;
  rust_jpeg$cxxbridge1$202$Reader$start_scanline_output(*this, format, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust_jpeg::ScanlineOutputResult Reader::finish_scanline_output() noexcept {
  ::rust::MaybeUninit<::rust_jpeg::ScanlineOutputResult> return$;
  rust_jpeg$cxxbridge1$202$Reader$finish_scanline_output(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust_jpeg::ScanlineOutputResult Reader::read_scanlines(::rust::Slice<::std::uint8_t > output, ::std::uint32_t row_bytes) noexcept {
  ::rust::MaybeUninit<::rust_jpeg::ScanlineOutputResult> return$;
  rust_jpeg$cxxbridge1$202$Reader$read_scanlines(*this, output, row_bytes, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust_jpeg::ScanlineOutputResult Reader::skip_scanlines(::std::uint32_t rows) noexcept {
  ::rust::MaybeUninit<::rust_jpeg::ScanlineOutputResult> return$;
  rust_jpeg$cxxbridge1$202$Reader$skip_scanlines(*this, rows, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Vec<::std::uint8_t> Reader::icc_profile() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  rust_jpeg$cxxbridge1$202$Reader$icc_profile(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Vec<::std::uint8_t> Reader::exif_data() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  rust_jpeg$cxxbridge1$202$Reader$exif_data(*this, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::std::uint32_t Reader::segment_count() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$segment_count(*this);
}

__declspec(dllexport) ::rust_jpeg::JpegSegmentInfo Reader::segment_info(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust_jpeg::JpegSegmentInfo> return$;
  rust_jpeg$cxxbridge1$202$Reader$segment_info(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Vec<::std::uint8_t> Reader::segment_data(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  rust_jpeg$cxxbridge1$202$Reader$segment_data(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) bool Reader::segments_scanned() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$segments_scanned(*this);
}

__declspec(dllexport) bool Reader::has_mpf() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$has_mpf(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::mpf_image_count() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$mpf_image_count(*this);
}

__declspec(dllexport) ::rust_jpeg::MpfImageEntry Reader::mpf_image_entry(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust_jpeg::MpfImageEntry> return$;
  rust_jpeg$cxxbridge1$202$Reader$mpf_image_entry(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::std::uint32_t Reader::mpf_segment_offset() const noexcept {
  return rust_jpeg$cxxbridge1$202$Reader$mpf_segment_offset(*this);
}

::std::size_t EmbeddedJpegScanner::layout::size() noexcept {
  return rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$operator$sizeof();
}

::std::size_t EmbeddedJpegScanner::layout::align() noexcept {
  return rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$operator$alignof();
}

__declspec(dllexport) ::rust::Box<::rust_jpeg::EmbeddedJpegScanner> scan_embedded_jpeg(::rust::Slice<::std::uint8_t const> data) noexcept {
  return ::rust::Box<::rust_jpeg::EmbeddedJpegScanner>::from_raw(rust_jpeg$cxxbridge1$202$scan_embedded_jpeg(data));
}

__declspec(dllexport) bool EmbeddedJpegScanner::embedded_had_error() const noexcept {
  return rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_had_error(*this);
}

__declspec(dllexport) ::std::uint32_t EmbeddedJpegScanner::embedded_segment_count() const noexcept {
  return rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_count(*this);
}

__declspec(dllexport) ::rust_jpeg::JpegSegmentInfo EmbeddedJpegScanner::embedded_segment_info(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust_jpeg::JpegSegmentInfo> return$;
  rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_info(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust::Vec<::std::uint8_t> EmbeddedJpegScanner::embedded_segment_data(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  rust_jpeg$cxxbridge1$202$EmbeddedJpegScanner$embedded_segment_data(*this, index, &return$.value);
  return ::std::move(return$.value);
}

__declspec(dllexport) ::rust_jpeg::EncodingResult encode_jpeg(::rust::Slice<::std::uint8_t const> pixels, ::std::uint32_t width, ::std::uint32_t height, ::std::uint32_t row_bytes, ::rust_jpeg::JpegEncodeColor color_type, ::rust_jpeg::JpegEncodeAlpha alpha_option, ::std::uint32_t quality, ::rust::Vec<::std::uint8_t> &output) noexcept {
  return rust_jpeg$cxxbridge1$202$encode_jpeg(pixels, width, height, row_bytes, color_type, alpha_option, quality, output);
}
} // namespace rust_jpeg

extern "C" {
::rust_jpeg::Reader *cxxbridge1$box$rust_jpeg$Reader$alloc() noexcept;
void cxxbridge1$box$rust_jpeg$Reader$dealloc(::rust_jpeg::Reader *) noexcept;
void cxxbridge1$box$rust_jpeg$Reader$drop(::rust::Box<::rust_jpeg::Reader> *ptr) noexcept;

::rust_jpeg::EmbeddedJpegScanner *cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$alloc() noexcept;
void cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$dealloc(::rust_jpeg::EmbeddedJpegScanner *) noexcept;
void cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$drop(::rust::Box<::rust_jpeg::EmbeddedJpegScanner> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__declspec(dllexport) ::rust_jpeg::Reader *Box<::rust_jpeg::Reader>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_jpeg$Reader$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_jpeg::Reader>::allocation::dealloc(::rust_jpeg::Reader *ptr) noexcept {
  cxxbridge1$box$rust_jpeg$Reader$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_jpeg::Reader>::drop() noexcept {
  cxxbridge1$box$rust_jpeg$Reader$drop(this);
}
template <>
__declspec(dllexport) ::rust_jpeg::EmbeddedJpegScanner *Box<::rust_jpeg::EmbeddedJpegScanner>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_jpeg::EmbeddedJpegScanner>::allocation::dealloc(::rust_jpeg::EmbeddedJpegScanner *ptr) noexcept {
  cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_jpeg::EmbeddedJpegScanner>::drop() noexcept {
  cxxbridge1$box$rust_jpeg$EmbeddedJpegScanner$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
