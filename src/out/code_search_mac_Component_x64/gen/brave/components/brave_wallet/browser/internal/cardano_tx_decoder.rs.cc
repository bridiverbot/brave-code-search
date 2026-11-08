#include <algorithm>
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <initializer_list>
#include <iterator>
#include <new>
#include <stdexcept>
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
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace brave_wallet {
  struct CxxSerializableTxInput;
  struct CxxSerializableTxOutputToken;
  struct CxxSerializableCoinValue;
  struct CxxSerializableTxOutput;
  struct CxxSerializableWithdrawal;
  struct CxxSerializableMintToken;
  struct CxxSerializableTxBody;
  struct CxxSerializableVkeyWitness;
  struct CxxSerializableTxWitness;
  struct CxxSerializableTx;
  struct CxxEncodedCardanoTransactionResult;
  struct CxxEncodedCardanoTransactionOutputResult;
  struct CxxEncodedCardanoUtxoResult;
  struct CxxEncodedCardanoCoinValueResult;
  struct CxxDecodedCardanoCoinValueResult;
  struct CxxDecodedCardanoTransactionResult;
  struct CxxEncodedWitnessResult;
}

namespace brave_wallet {
#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxInput
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxInput
struct CxxSerializableTxInput final {
  ::std::array<::std::uint8_t, 32> tx_hash;
  ::std::uint32_t index CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxInput

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutputToken
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutputToken
struct CxxSerializableTxOutputToken final {
  ::rust::Vec<::std::uint8_t> token_id;
  ::std::uint64_t amount CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutputToken

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableCoinValue
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableCoinValue
struct CxxSerializableCoinValue final {
  ::std::uint64_t lovelace_amount CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> tokens;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableCoinValue

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutput
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutput
struct CxxSerializableTxOutput final {
  ::rust::Vec<::std::uint8_t> addr;
  ::brave_wallet::CxxSerializableCoinValue coin_value;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxOutput

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableWithdrawal
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableWithdrawal
struct CxxSerializableWithdrawal final {
  ::rust::Vec<::std::uint8_t> reward_account;
  ::std::uint64_t coin CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableWithdrawal

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableMintToken
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableMintToken
struct CxxSerializableMintToken final {
  ::rust::Vec<::std::uint8_t> token_id;
  ::std::int64_t amount CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableMintToken

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxBody
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxBody
struct CxxSerializableTxBody final {
  ::rust::Vec<::brave_wallet::CxxSerializableTxInput> inputs;
  ::rust::Vec<::brave_wallet::CxxSerializableTxOutput> outputs;
  ::std::uint64_t fee CXX_DEFAULT_VALUE(0);
  bool has_ttl CXX_DEFAULT_VALUE(false);
  ::std::uint64_t ttl CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> withdrawals;
  bool has_script_data_hash CXX_DEFAULT_VALUE(false);
  ::std::array<::std::uint8_t, 32> script_data_hash;
  ::rust::Vec<::brave_wallet::CxxSerializableMintToken> mint;
  ::rust::Vec<::brave_wallet::CxxSerializableTxInput> collateral;
  bool has_collateral_return CXX_DEFAULT_VALUE(false);
  ::brave_wallet::CxxSerializableTxOutput collateral_return;
  bool has_total_collateral CXX_DEFAULT_VALUE(false);
  ::std::uint64_t total_collateral CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxBody

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableVkeyWitness
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableVkeyWitness
struct CxxSerializableVkeyWitness final {
  ::std::array<::std::uint8_t, 32> pubkey;
  ::std::array<::std::uint8_t, 64> signature;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableVkeyWitness

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxWitness
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxWitness
struct CxxSerializableTxWitness final {
  ::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> vkey_witness_set;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTxWitness

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTx
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTx
struct CxxSerializableTx final {
  ::brave_wallet::CxxSerializableTxBody body;
  ::brave_wallet::CxxSerializableTxWitness witness;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSerializableTx

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionResult
struct CxxEncodedCardanoTransactionResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> bytes() const noexcept;
  ~CxxEncodedCardanoTransactionResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionOutputResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionOutputResult
struct CxxEncodedCardanoTransactionOutputResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> bytes() const noexcept;
  ~CxxEncodedCardanoTransactionOutputResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoTransactionOutputResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoUtxoResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoUtxoResult
struct CxxEncodedCardanoUtxoResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> bytes() const noexcept;
  ~CxxEncodedCardanoUtxoResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoUtxoResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoCoinValueResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoCoinValueResult
struct CxxEncodedCardanoCoinValueResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> bytes() const noexcept;
  ~CxxEncodedCardanoCoinValueResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedCardanoCoinValueResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoCoinValueResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoCoinValueResult
struct CxxDecodedCardanoCoinValueResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::brave_wallet::CxxSerializableCoinValue value() const noexcept;
  ~CxxDecodedCardanoCoinValueResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoCoinValueResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoTransactionResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoTransactionResult
struct CxxDecodedCardanoTransactionResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::brave_wallet::CxxSerializableTx tx() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> raw_body() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> raw_tx() const noexcept;
  ~CxxDecodedCardanoTransactionResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxDecodedCardanoTransactionResult

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedWitnessResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedWitnessResult
struct CxxEncodedWitnessResult final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool is_ok() const noexcept;
  __attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> bytes() const noexcept;
  ~CxxEncodedWitnessResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxEncodedWitnessResult

extern "C" {
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$operator$alignof() noexcept;

void brave_wallet$cxxbridge1$202$use_set_tag_for_testing(bool enable) noexcept;

::brave_wallet::CxxEncodedCardanoTransactionResult *brave_wallet$cxxbridge1$202$encode_cardano_transaction(::brave_wallet::CxxSerializableTx const &tx) noexcept;

::brave_wallet::CxxEncodedCardanoCoinValueResult *brave_wallet$cxxbridge1$202$encode_cardano_coin_value(::brave_wallet::CxxSerializableCoinValue const &value) noexcept;

::brave_wallet::CxxDecodedCardanoCoinValueResult *brave_wallet$cxxbridge1$202$decode_cardano_coin_value(::rust::Slice<::std::uint8_t const> value_bytes) noexcept;

::brave_wallet::CxxEncodedCardanoTransactionOutputResult *brave_wallet$cxxbridge1$202$encode_cardano_transaction_output(::brave_wallet::CxxSerializableTxOutput const &output) noexcept;

::brave_wallet::CxxEncodedCardanoUtxoResult *brave_wallet$cxxbridge1$202$encode_cardano_utxo(::brave_wallet::CxxSerializableTxInput const &input, ::brave_wallet::CxxSerializableTxOutput const &output) noexcept;

void brave_wallet$cxxbridge1$202$get_cardano_transaction_hash(::brave_wallet::CxxSerializableTx const &tx, ::std::array<::std::uint8_t, 32> *return$) noexcept;

::brave_wallet::CxxDecodedCardanoTransactionResult *brave_wallet$cxxbridge1$202$decode_cardano_transaction(::rust::Slice<::std::uint8_t const> bytes) noexcept;

::brave_wallet::CxxEncodedWitnessResult *brave_wallet$cxxbridge1$202$encode_cardano_witness(::brave_wallet::CxxSerializableTxWitness *witnesses) noexcept;

bool brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$is_ok(::brave_wallet::CxxEncodedCardanoTransactionResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$bytes(::brave_wallet::CxxEncodedCardanoTransactionResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$is_ok(::brave_wallet::CxxEncodedCardanoCoinValueResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$bytes(::brave_wallet::CxxEncodedCardanoCoinValueResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$is_ok(::brave_wallet::CxxDecodedCardanoCoinValueResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$value(::brave_wallet::CxxDecodedCardanoCoinValueResult const &self, ::brave_wallet::CxxSerializableCoinValue *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$is_ok(::brave_wallet::CxxEncodedCardanoTransactionOutputResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$bytes(::brave_wallet::CxxEncodedCardanoTransactionOutputResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$is_ok(::brave_wallet::CxxEncodedCardanoUtxoResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$bytes(::brave_wallet::CxxEncodedCardanoUtxoResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$is_ok(::brave_wallet::CxxDecodedCardanoTransactionResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$tx(::brave_wallet::CxxDecodedCardanoTransactionResult const &self, ::brave_wallet::CxxSerializableTx *return$) noexcept;

void brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$raw_body(::brave_wallet::CxxDecodedCardanoTransactionResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

void brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$raw_tx(::brave_wallet::CxxDecodedCardanoTransactionResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$is_ok(::brave_wallet::CxxEncodedWitnessResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$bytes(::brave_wallet::CxxEncodedWitnessResult const &self, ::rust::Vec<::std::uint8_t> *return$) noexcept;
} // extern "C"

::std::size_t CxxEncodedCardanoTransactionResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$operator$sizeof();
}

::std::size_t CxxEncodedCardanoTransactionResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$operator$alignof();
}

::std::size_t CxxEncodedCardanoTransactionOutputResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$operator$sizeof();
}

::std::size_t CxxEncodedCardanoTransactionOutputResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$operator$alignof();
}

::std::size_t CxxEncodedCardanoUtxoResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$operator$sizeof();
}

::std::size_t CxxEncodedCardanoUtxoResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$operator$alignof();
}

::std::size_t CxxEncodedCardanoCoinValueResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$operator$sizeof();
}

::std::size_t CxxEncodedCardanoCoinValueResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$operator$alignof();
}

::std::size_t CxxDecodedCardanoCoinValueResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$operator$sizeof();
}

::std::size_t CxxDecodedCardanoCoinValueResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$operator$alignof();
}

::std::size_t CxxDecodedCardanoTransactionResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$operator$sizeof();
}

::std::size_t CxxDecodedCardanoTransactionResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$operator$alignof();
}

::std::size_t CxxEncodedWitnessResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$operator$sizeof();
}

::std::size_t CxxEncodedWitnessResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$operator$alignof();
}

__attribute__((visibility("default"))) void use_set_tag_for_testing(bool enable) noexcept {
  brave_wallet$cxxbridge1$202$use_set_tag_for_testing(enable);
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionResult> encode_cardano_transaction(::brave_wallet::CxxSerializableTx const &tx) noexcept {
  return ::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionResult>::from_raw(brave_wallet$cxxbridge1$202$encode_cardano_transaction(tx));
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxEncodedCardanoCoinValueResult> encode_cardano_coin_value(::brave_wallet::CxxSerializableCoinValue const &value) noexcept {
  return ::rust::Box<::brave_wallet::CxxEncodedCardanoCoinValueResult>::from_raw(brave_wallet$cxxbridge1$202$encode_cardano_coin_value(value));
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxDecodedCardanoCoinValueResult> decode_cardano_coin_value(::rust::Slice<::std::uint8_t const> value_bytes) noexcept {
  return ::rust::Box<::brave_wallet::CxxDecodedCardanoCoinValueResult>::from_raw(brave_wallet$cxxbridge1$202$decode_cardano_coin_value(value_bytes));
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult> encode_cardano_transaction_output(::brave_wallet::CxxSerializableTxOutput const &output) noexcept {
  return ::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult>::from_raw(brave_wallet$cxxbridge1$202$encode_cardano_transaction_output(output));
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxEncodedCardanoUtxoResult> encode_cardano_utxo(::brave_wallet::CxxSerializableTxInput const &input, ::brave_wallet::CxxSerializableTxOutput const &output) noexcept {
  return ::rust::Box<::brave_wallet::CxxEncodedCardanoUtxoResult>::from_raw(brave_wallet$cxxbridge1$202$encode_cardano_utxo(input, output));
}

__attribute__((visibility("default"))) ::std::array<::std::uint8_t, 32> get_cardano_transaction_hash(::brave_wallet::CxxSerializableTx const &tx) noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$cxxbridge1$202$get_cardano_transaction_hash(tx, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxDecodedCardanoTransactionResult> decode_cardano_transaction(::rust::Slice<::std::uint8_t const> bytes) noexcept {
  return ::rust::Box<::brave_wallet::CxxDecodedCardanoTransactionResult>::from_raw(brave_wallet$cxxbridge1$202$decode_cardano_transaction(bytes));
}

__attribute__((visibility("default"))) ::rust::Box<::brave_wallet::CxxEncodedWitnessResult> encode_cardano_witness(::brave_wallet::CxxSerializableTxWitness witnesses) noexcept {
  ::rust::ManuallyDrop<::brave_wallet::CxxSerializableTxWitness> witnesses$(::std::move(witnesses));
  return ::rust::Box<::brave_wallet::CxxEncodedWitnessResult>::from_raw(brave_wallet$cxxbridge1$202$encode_cardano_witness(&witnesses$.value));
}

__attribute__((visibility("default"))) bool CxxEncodedCardanoTransactionResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxEncodedCardanoTransactionResult::bytes() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionResult$bytes(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxEncodedCardanoCoinValueResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxEncodedCardanoCoinValueResult::bytes() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxEncodedCardanoCoinValueResult$bytes(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxDecodedCardanoCoinValueResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableCoinValue CxxDecodedCardanoCoinValueResult::value() const noexcept {
  ::rust::MaybeUninit<::brave_wallet::CxxSerializableCoinValue> return$;
  brave_wallet$cxxbridge1$202$CxxDecodedCardanoCoinValueResult$value(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxEncodedCardanoTransactionOutputResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxEncodedCardanoTransactionOutputResult::bytes() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxEncodedCardanoTransactionOutputResult$bytes(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxEncodedCardanoUtxoResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxEncodedCardanoUtxoResult::bytes() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxEncodedCardanoUtxoResult$bytes(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxDecodedCardanoTransactionResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableTx CxxDecodedCardanoTransactionResult::tx() const noexcept {
  ::rust::MaybeUninit<::brave_wallet::CxxSerializableTx> return$;
  brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$tx(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxDecodedCardanoTransactionResult::raw_body() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$raw_body(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxDecodedCardanoTransactionResult::raw_tx() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxDecodedCardanoTransactionResult$raw_tx(*this, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool CxxEncodedWitnessResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$is_ok(*this);
}

__attribute__((visibility("default"))) ::rust::Vec<::std::uint8_t> CxxEncodedWitnessResult::bytes() const noexcept {
  ::rust::MaybeUninit<::rust::Vec<::std::uint8_t>> return$;
  brave_wallet$cxxbridge1$202$CxxEncodedWitnessResult$bytes(*this, &return$.value);
  return ::std::move(return$.value);
}
} // namespace brave_wallet

extern "C" {
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$new(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$drop(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$len(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$capacity(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> const *ptr) noexcept;
::brave_wallet::CxxSerializableTxOutputToken const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$data(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$set_len(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$truncate(::rust::Vec<::brave_wallet::CxxSerializableTxOutputToken> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$new(::rust::Vec<::brave_wallet::CxxSerializableTxInput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$drop(::rust::Vec<::brave_wallet::CxxSerializableTxInput> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$len(::rust::Vec<::brave_wallet::CxxSerializableTxInput> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$capacity(::rust::Vec<::brave_wallet::CxxSerializableTxInput> const *ptr) noexcept;
::brave_wallet::CxxSerializableTxInput const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$data(::rust::Vec<::brave_wallet::CxxSerializableTxInput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableTxInput> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$set_len(::rust::Vec<::brave_wallet::CxxSerializableTxInput> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$truncate(::rust::Vec<::brave_wallet::CxxSerializableTxInput> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$new(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$drop(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$len(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$capacity(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> const *ptr) noexcept;
::brave_wallet::CxxSerializableTxOutput const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$data(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$set_len(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$truncate(::rust::Vec<::brave_wallet::CxxSerializableTxOutput> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$new(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$drop(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$len(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$capacity(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> const *ptr) noexcept;
::brave_wallet::CxxSerializableWithdrawal const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$data(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$set_len(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$truncate(::rust::Vec<::brave_wallet::CxxSerializableWithdrawal> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$new(::rust::Vec<::brave_wallet::CxxSerializableMintToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$drop(::rust::Vec<::brave_wallet::CxxSerializableMintToken> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$len(::rust::Vec<::brave_wallet::CxxSerializableMintToken> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$capacity(::rust::Vec<::brave_wallet::CxxSerializableMintToken> const *ptr) noexcept;
::brave_wallet::CxxSerializableMintToken const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$data(::rust::Vec<::brave_wallet::CxxSerializableMintToken> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableMintToken> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$set_len(::rust::Vec<::brave_wallet::CxxSerializableMintToken> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$truncate(::rust::Vec<::brave_wallet::CxxSerializableMintToken> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$new(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$drop(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$len(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$capacity(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> const *ptr) noexcept;
::brave_wallet::CxxSerializableVkeyWitness const *cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$data(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> const *ptr) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$reserve_total(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$set_len(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$truncate(::rust::Vec<::brave_wallet::CxxSerializableVkeyWitness> *ptr, ::std::size_t len) noexcept;

::brave_wallet::CxxEncodedCardanoTransactionResult *cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$dealloc(::brave_wallet::CxxEncodedCardanoTransactionResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$drop(::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionResult> *ptr) noexcept;

::brave_wallet::CxxEncodedCardanoCoinValueResult *cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$dealloc(::brave_wallet::CxxEncodedCardanoCoinValueResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$drop(::rust::Box<::brave_wallet::CxxEncodedCardanoCoinValueResult> *ptr) noexcept;

::brave_wallet::CxxDecodedCardanoCoinValueResult *cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$dealloc(::brave_wallet::CxxDecodedCardanoCoinValueResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$drop(::rust::Box<::brave_wallet::CxxDecodedCardanoCoinValueResult> *ptr) noexcept;

::brave_wallet::CxxEncodedCardanoTransactionOutputResult *cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$dealloc(::brave_wallet::CxxEncodedCardanoTransactionOutputResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$drop(::rust::Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult> *ptr) noexcept;

::brave_wallet::CxxEncodedCardanoUtxoResult *cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$dealloc(::brave_wallet::CxxEncodedCardanoUtxoResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$drop(::rust::Box<::brave_wallet::CxxEncodedCardanoUtxoResult> *ptr) noexcept;

::brave_wallet::CxxDecodedCardanoTransactionResult *cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$dealloc(::brave_wallet::CxxDecodedCardanoTransactionResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$drop(::rust::Box<::brave_wallet::CxxDecodedCardanoTransactionResult> *ptr) noexcept;

::brave_wallet::CxxEncodedWitnessResult *cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$dealloc(::brave_wallet::CxxEncodedWitnessResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$drop(::rust::Box<::brave_wallet::CxxEncodedWitnessResult> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableTxOutputToken>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutputToken>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxOutputToken>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxOutputToken>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableTxOutputToken const *Vec<::brave_wallet::CxxSerializableTxOutputToken>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutputToken>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutputToken>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutputToken>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutputToken$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableTxInput>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxInput>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxInput>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxInput>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableTxInput const *Vec<::brave_wallet::CxxSerializableTxInput>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxInput>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxInput>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxInput>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxInput$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableTxOutput>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutput>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxOutput>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableTxOutput>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableTxOutput const *Vec<::brave_wallet::CxxSerializableTxOutput>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutput>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutput>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableTxOutput>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableTxOutput$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableWithdrawal>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableWithdrawal>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableWithdrawal>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableWithdrawal>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableWithdrawal const *Vec<::brave_wallet::CxxSerializableWithdrawal>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableWithdrawal>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableWithdrawal>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableWithdrawal>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableWithdrawal$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableMintToken>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableMintToken>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableMintToken>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableMintToken>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableMintToken const *Vec<::brave_wallet::CxxSerializableMintToken>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableMintToken>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableMintToken>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableMintToken>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableMintToken$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::brave_wallet::CxxSerializableVkeyWitness>::Vec() noexcept {
  cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableVkeyWitness>::drop() noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableVkeyWitness>::size() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::brave_wallet::CxxSerializableVkeyWitness>::capacity() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxSerializableVkeyWitness const *Vec<::brave_wallet::CxxSerializableVkeyWitness>::data() const noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableVkeyWitness>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableVkeyWitness>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::brave_wallet::CxxSerializableVkeyWitness>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$brave_wallet$CxxSerializableVkeyWitness$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxEncodedCardanoTransactionResult *Box<::brave_wallet::CxxEncodedCardanoTransactionResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoTransactionResult>::allocation::dealloc(::brave_wallet::CxxEncodedCardanoTransactionResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoTransactionResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxEncodedCardanoCoinValueResult *Box<::brave_wallet::CxxEncodedCardanoCoinValueResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoCoinValueResult>::allocation::dealloc(::brave_wallet::CxxEncodedCardanoCoinValueResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoCoinValueResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoCoinValueResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxDecodedCardanoCoinValueResult *Box<::brave_wallet::CxxDecodedCardanoCoinValueResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxDecodedCardanoCoinValueResult>::allocation::dealloc(::brave_wallet::CxxDecodedCardanoCoinValueResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxDecodedCardanoCoinValueResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxDecodedCardanoCoinValueResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxEncodedCardanoTransactionOutputResult *Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult>::allocation::dealloc(::brave_wallet::CxxEncodedCardanoTransactionOutputResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoTransactionOutputResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoTransactionOutputResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxEncodedCardanoUtxoResult *Box<::brave_wallet::CxxEncodedCardanoUtxoResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoUtxoResult>::allocation::dealloc(::brave_wallet::CxxEncodedCardanoUtxoResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedCardanoUtxoResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedCardanoUtxoResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxDecodedCardanoTransactionResult *Box<::brave_wallet::CxxDecodedCardanoTransactionResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxDecodedCardanoTransactionResult>::allocation::dealloc(::brave_wallet::CxxDecodedCardanoTransactionResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxDecodedCardanoTransactionResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxDecodedCardanoTransactionResult$drop(this);
}
template <>
__attribute__((visibility("default"))) ::brave_wallet::CxxEncodedWitnessResult *Box<::brave_wallet::CxxEncodedWitnessResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedWitnessResult>::allocation::dealloc(::brave_wallet::CxxEncodedWitnessResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::brave_wallet::CxxEncodedWitnessResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxEncodedWitnessResult$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
