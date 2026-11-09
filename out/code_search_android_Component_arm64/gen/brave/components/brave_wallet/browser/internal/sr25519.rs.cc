#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
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

namespace brave_wallet {
  struct CxxSchnorrkelKeyPair;
  struct CxxSchnorrkelKeyPairResult;
}

namespace brave_wallet {
#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPair
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPair
struct CxxSchnorrkelKeyPair final : public ::rust::Opaque {
  ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> clone() const noexcept;
  ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> derive_hard(::rust::Slice<::std::uint8_t const> junction) const noexcept;
  ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> derive_hard_from_account_index(::std::uint32_t index) const noexcept;
  ::std::array<::std::uint8_t, 32> get_public_key() const noexcept;
  void set_mock_rnd_seed_for_testing(::std::uint64_t seed) noexcept;
  ::std::array<::std::uint8_t, 64> get_secret_key() const noexcept;
  ::std::array<::std::uint8_t, 117> get_export_key_pkcs8() const noexcept;
  ::std::array<::std::uint8_t, 64> sign_message(::rust::Slice<::std::uint8_t const> msg) const noexcept;
  bool verify_message(::rust::Slice<::std::uint8_t const> sig_bytes, ::rust::Slice<::std::uint8_t const> msg) const noexcept;
  ~CxxSchnorrkelKeyPair() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPair

#ifndef CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPairResult
#define CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPairResult
struct CxxSchnorrkelKeyPairResult final : public ::rust::Opaque {
  bool is_ok() const noexcept;
  ::rust::String error_message() const noexcept;
  ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> unwrap() noexcept;
  ~CxxSchnorrkelKeyPairResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_brave_wallet$CxxSchnorrkelKeyPairResult

extern "C" {
::std::size_t brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$operator$alignof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$operator$sizeof() noexcept;
::std::size_t brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$operator$alignof() noexcept;

bool brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$is_ok(::brave_wallet::CxxSchnorrkelKeyPairResult const &self) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$error_message(::brave_wallet::CxxSchnorrkelKeyPairResult const &self, ::rust::String *return$) noexcept;

::brave_wallet::CxxSchnorrkelKeyPair *brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$unwrap(::brave_wallet::CxxSchnorrkelKeyPairResult &self) noexcept;

::brave_wallet::CxxSchnorrkelKeyPair *brave_wallet$cxxbridge1$202$generate_sr25519_keypair_from_seed(::rust::Slice<::std::uint8_t const> bytes) noexcept;

::brave_wallet::CxxSchnorrkelKeyPairResult *brave_wallet$cxxbridge1$202$create_sr25519_keypair_from_pkcs8(::std::array<::std::uint8_t, 117> const &pkcs8) noexcept;

::brave_wallet::CxxSchnorrkelKeyPair *brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$clone(::brave_wallet::CxxSchnorrkelKeyPair const &self) noexcept;

::brave_wallet::CxxSchnorrkelKeyPair *brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$derive_hard(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::rust::Slice<::std::uint8_t const> junction) noexcept;

::brave_wallet::CxxSchnorrkelKeyPair *brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$derive_hard_from_account_index(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::std::uint32_t index) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_public_key(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::std::array<::std::uint8_t, 32> *return$) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$set_mock_rnd_seed_for_testing(::brave_wallet::CxxSchnorrkelKeyPair &self, ::std::uint64_t seed) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_secret_key(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::std::array<::std::uint8_t, 64> *return$) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_export_key_pkcs8(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::std::array<::std::uint8_t, 117> *return$) noexcept;

void brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$sign_message(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::rust::Slice<::std::uint8_t const> msg, ::std::array<::std::uint8_t, 64> *return$) noexcept;

bool brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$verify_message(::brave_wallet::CxxSchnorrkelKeyPair const &self, ::rust::Slice<::std::uint8_t const> sig_bytes, ::rust::Slice<::std::uint8_t const> msg) noexcept;
} // extern "C"

::std::size_t CxxSchnorrkelKeyPair::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$operator$sizeof();
}

::std::size_t CxxSchnorrkelKeyPair::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$operator$alignof();
}

::std::size_t CxxSchnorrkelKeyPairResult::layout::size() noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$operator$sizeof();
}

::std::size_t CxxSchnorrkelKeyPairResult::layout::align() noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$operator$alignof();
}

bool CxxSchnorrkelKeyPairResult::is_ok() const noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$is_ok(*this);
}

::rust::String CxxSchnorrkelKeyPairResult::error_message() const noexcept {
  ::rust::MaybeUninit<::rust::String> return$;
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$error_message(*this, &return$.value);
  return ::std::move(return$.value);
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> CxxSchnorrkelKeyPairResult::unwrap() noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair>::from_raw(brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPairResult$unwrap(*this));
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> generate_sr25519_keypair_from_seed(::rust::Slice<::std::uint8_t const> bytes) noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair>::from_raw(brave_wallet$cxxbridge1$202$generate_sr25519_keypair_from_seed(bytes));
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPairResult> create_sr25519_keypair_from_pkcs8(::std::array<::std::uint8_t, 117> const &pkcs8) noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPairResult>::from_raw(brave_wallet$cxxbridge1$202$create_sr25519_keypair_from_pkcs8(pkcs8));
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> CxxSchnorrkelKeyPair::clone() const noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair>::from_raw(brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$clone(*this));
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> CxxSchnorrkelKeyPair::derive_hard(::rust::Slice<::std::uint8_t const> junction) const noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair>::from_raw(brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$derive_hard(*this, junction));
}

::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> CxxSchnorrkelKeyPair::derive_hard_from_account_index(::std::uint32_t index) const noexcept {
  return ::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair>::from_raw(brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$derive_hard_from_account_index(*this, index));
}

::std::array<::std::uint8_t, 32> CxxSchnorrkelKeyPair::get_public_key() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 32>> return$;
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_public_key(*this, &return$.value);
  return ::std::move(return$.value);
}

void CxxSchnorrkelKeyPair::set_mock_rnd_seed_for_testing(::std::uint64_t seed) noexcept {
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$set_mock_rnd_seed_for_testing(*this, seed);
}

::std::array<::std::uint8_t, 64> CxxSchnorrkelKeyPair::get_secret_key() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 64>> return$;
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_secret_key(*this, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 117> CxxSchnorrkelKeyPair::get_export_key_pkcs8() const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 117>> return$;
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$get_export_key_pkcs8(*this, &return$.value);
  return ::std::move(return$.value);
}

::std::array<::std::uint8_t, 64> CxxSchnorrkelKeyPair::sign_message(::rust::Slice<::std::uint8_t const> msg) const noexcept {
  ::rust::MaybeUninit<::std::array<::std::uint8_t, 64>> return$;
  brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$sign_message(*this, msg, &return$.value);
  return ::std::move(return$.value);
}

bool CxxSchnorrkelKeyPair::verify_message(::rust::Slice<::std::uint8_t const> sig_bytes, ::rust::Slice<::std::uint8_t const> msg) const noexcept {
  return brave_wallet$cxxbridge1$202$CxxSchnorrkelKeyPair$verify_message(*this, sig_bytes, msg);
}
} // namespace brave_wallet

extern "C" {
::brave_wallet::CxxSchnorrkelKeyPair *cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$dealloc(::brave_wallet::CxxSchnorrkelKeyPair *) noexcept;
void cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$drop(::rust::Box<::brave_wallet::CxxSchnorrkelKeyPair> *ptr) noexcept;

::brave_wallet::CxxSchnorrkelKeyPairResult *cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$alloc() noexcept;
void cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$dealloc(::brave_wallet::CxxSchnorrkelKeyPairResult *) noexcept;
void cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$drop(::rust::Box<::brave_wallet::CxxSchnorrkelKeyPairResult> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
::brave_wallet::CxxSchnorrkelKeyPair *Box<::brave_wallet::CxxSchnorrkelKeyPair>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$alloc();
}
template <>
void Box<::brave_wallet::CxxSchnorrkelKeyPair>::allocation::dealloc(::brave_wallet::CxxSchnorrkelKeyPair *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$dealloc(ptr);
}
template <>
void Box<::brave_wallet::CxxSchnorrkelKeyPair>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPair$drop(this);
}
template <>
::brave_wallet::CxxSchnorrkelKeyPairResult *Box<::brave_wallet::CxxSchnorrkelKeyPairResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$alloc();
}
template <>
void Box<::brave_wallet::CxxSchnorrkelKeyPairResult>::allocation::dealloc(::brave_wallet::CxxSchnorrkelKeyPairResult *ptr) noexcept {
  cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$dealloc(ptr);
}
template <>
void Box<::brave_wallet::CxxSchnorrkelKeyPairResult>::drop() noexcept {
  cxxbridge1$box$brave_wallet$CxxSchnorrkelKeyPairResult$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
