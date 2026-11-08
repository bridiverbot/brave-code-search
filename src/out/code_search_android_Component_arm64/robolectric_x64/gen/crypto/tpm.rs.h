#pragma once
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

class Opaque;

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

namespace crypto {
  namespace tpm {
    enum class ParseResult : ::std::uint8_t;
    struct ResponseStatus;
    struct RawCreateResponse;
    struct RawCreatePrimaryResponse;
    struct RawHashResponse;
    struct RawSignResponse;
    struct RawHashSequenceStartResponse;
    enum class SignatureParseResult : ::std::uint8_t;
    enum class TpmAlgPublic : ::std::uint16_t;
    enum class TpmAlgHash : ::std::uint16_t;
    enum class TpmAlgSigScheme : ::std::uint16_t;
    enum class TpmAlgSymmetric : ::std::uint16_t;
    enum class TpmEccCurve : ::std::uint16_t;
    enum class TpmRh : ::std::uint32_t;
    enum class TpmConstant : ::std::uint32_t;
    enum class TpmCc : ::std::uint32_t;
    enum class TpmSt : ::std::uint16_t;
    struct RawSignatureComponents;
  }
}

namespace crypto {
namespace tpm {
#ifndef CXXBRIDGE1_ENUM_crypto$tpm$ParseResult
#define CXXBRIDGE1_ENUM_crypto$tpm$ParseResult
// Results that can occur during TPM response parsing.
enum class ParseResult : ::std::uint8_t {
  // Parsing completed successfully.
  Ok = 0,
  // The buffer was too small to read the required fields.
  BufferTooSmall = 1,
  // The buffer had trailing bytes after parsing.
  TrailingBytes = 2,
  // The TPM returned an error code.
  TpmErrorResponse = 3,
  // The structure type did not match the expected type.
  WrongType = 5,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$ParseResult

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$ResponseStatus
#define CXXBRIDGE1_STRUCT_crypto$tpm$ResponseStatus
// Status of a TPM parse operation. This is effectively an unrolled version
// of `Result<(), TpmParseError>` used across the CXX FFI boundary, where
// Rust enum payloads and Result types cannot easily be passed directly.
struct ResponseStatus final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ParseResult result;
  // The TPM response code, if the TPM returned an error.
  ::std::uint32_t tpm_response_code CXX_DEFAULT_VALUE(0);

  bool operator==(ResponseStatus const &) const noexcept;
  bool operator!=(ResponseStatus const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$ResponseStatus

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawCreateResponse
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawCreateResponse
// Response from parsing a TPM2_Create command.
struct RawCreateResponse final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ResponseStatus status;
  // The serialized `TPM2B_PRIVATE` structure returned by the TPM.
  ::rust::Vec<::std::uint8_t> out_private;
  // The serialized `TPM2B_PUBLIC` structure returned by the TPM.
  ::rust::Vec<::std::uint8_t> out_public;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawCreateResponse

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawCreatePrimaryResponse
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawCreatePrimaryResponse
// Response from parsing a TPM2_CreatePrimary command.
struct RawCreatePrimaryResponse final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ResponseStatus status;
  // Handle of the transient primary object created by the TPM. The
  // caller owns it and must release it with TPM2_FlushContext.
  ::std::uint32_t object_handle CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawCreatePrimaryResponse

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawHashResponse
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawHashResponse
// Response from parsing a TPM2_Hash command.
struct RawHashResponse final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ResponseStatus status;
  // The hash digest returned by the TPM.
  ::rust::Vec<::std::uint8_t> digest;
  // The validation ticket (`TPMT_TK_HASHCHECK`) returned by the TPM.
  ::rust::Vec<::std::uint8_t> validation_ticket;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawHashResponse

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawSignResponse
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawSignResponse
// Response from parsing a TPM2_Sign command.
struct RawSignResponse final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ResponseStatus status;
  // The serialized `TPMT_SIGNATURE` returned by the TPM.
  ::rust::Vec<::std::uint8_t> signature;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawSignResponse

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawHashSequenceStartResponse
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawHashSequenceStartResponse
// Response from parsing a TPM2_HashSequenceStart command.
struct RawHashSequenceStartResponse final {
  // The outcome of the parsing operation.
  ::crypto::tpm::ResponseStatus status;
  // The sequence handle created by the TPM.
  ::std::uint32_t sequence_handle CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawHashSequenceStartResponse

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$SignatureParseResult
#define CXXBRIDGE1_ENUM_crypto$tpm$SignatureParseResult
// Results that can occur during TPM signature parsing.
enum class SignatureParseResult : ::std::uint8_t {
  // Parsing completed successfully.
  Ok = 0,
  // The signature buffer was too small to read the required fields.
  BufferTooSmall = 1,
  // The signature buffer had trailing bytes after parsing.
  TrailingBytes = 2,
  // The signature algorithm is not supported.
  UnsupportedSignatureAlgorithm = 3,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$SignatureParseResult

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgPublic
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgPublic
// TPM Public / Key Types. See Table 9 & 14 in
// https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf#page=41.
enum class TpmAlgPublic : ::std::uint16_t {
  // TPM_ALG_RSA is the RSA algorithm.
  TPM_ALG_RSA = 1,
  // TPM_ALG_ECC is the ECC algorithm.
  TPM_ALG_ECC = 35,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgPublic

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgHash
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgHash
// TPM Cryptographic Hash Algorithms. See Table 10 in
// https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf#page=42.
enum class TpmAlgHash : ::std::uint16_t {
  // TPM_ALG_SHA1 is the SHA-1 hash algorithm.
  TPM_ALG_SHA1 = 4,
  // TPM_ALG_SHA256 is the SHA-256 hash algorithm.
  TPM_ALG_SHA256 = 11,
  // TPM_ALG_SHA384 is the SHA-384 hash algorithm.
  TPM_ALG_SHA384 = 12,
  // TPM_ALG_SHA512 is the SHA-512 hash algorithm.
  TPM_ALG_SHA512 = 13,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgHash

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSigScheme
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSigScheme
// TPM Signature Schemes. See Table 13 in
// https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf#page=44.
enum class TpmAlgSigScheme : ::std::uint16_t {
  // TPM_ALG_NULL is the null algorithm. In TPM 2.0, TPM_ALG_NULL is a
  // valid signature scheme indicating no scheme, or instructing
  // the TPM to use the scheme configured in a restricted key's
  // public template.
  TPM_ALG_NULL = 16,
  // TPM_ALG_RSASSA is the RSASSA signature algorithm.
  TPM_ALG_RSASSA = 20,
  // TPM_ALG_RSAPSS is the RSAPSS signature algorithm.
  TPM_ALG_RSAPSS = 22,
  // TPM_ALG_ECDSA is the ECDSA signature algorithm.
  TPM_ALG_ECDSA = 24,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSigScheme

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSymmetric
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSymmetric
// TPM Symmetric Algorithms and Modes, as used in a TPMT_SYM_DEF_OBJECT.
// The two fields are drawn from the same TPM_ALG_ID space but are
// separately constrained: the algorithm is a TPMI_ALG_SYM_OBJECT and the
// mode a TPMI_ALG_SYM_MODE. See
// https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf.
enum class TpmAlgSymmetric : ::std::uint16_t {
  // TPM_ALG_AES is the AES block cipher.
  TPM_ALG_AES = 6,
  // TPM_ALG_CFB is the cipher feedback mode of operation.
  TPM_ALG_CFB = 67,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmAlgSymmetric

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmEccCurve
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmEccCurve
// TPM ECC Curves. See https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf#page=46 for details.
enum class TpmEccCurve : ::std::uint16_t {
  // TPM_ECC_NONE is no curve.
  TPM_ECC_NONE = 0,
  // TPM_ECC_NIST_P256 is the NIST P-256 curve.
  TPM_ECC_NIST_P256 = 3,
  // TPM_ECC_NIST_P384 is the NIST P-384 curve.
  TPM_ECC_NIST_P384 = 4,
  // TPM_ECC_NIST_P521 is the NIST P-521 curve.
  TPM_ECC_NIST_P521 = 5,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmEccCurve

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmRh
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmRh
// TPM Reserved Handles. See https://trustedcomputinggroup.org/wp-content/uploads/Trusted-Platform-Module-2.0-Library-Part-2-Structures_Version-185_pub.pdf#page=88 for details.
enum class TpmRh : ::std::uint32_t {
  // TPM_RH_OWNER is the handle for the storage hierarchy. This is
  // used for standard keys and as the hierarchy for validation tickets
  // in unit tests.
  TPM_RH_OWNER = 1073741825,
  // TPM_RS_PW is the handle for a password session.
  TPM_RS_PW = 1073741833,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmRh

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmConstant
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmConstant
// TPM Constants.
enum class TpmConstant : ::std::uint32_t {
  // TPM_GENERATED_VALUE is the magic number in TPM generated structures.
  TPM_GENERATED_VALUE = 4283712327,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmConstant

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmCc
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmCc
// TPM Command Codes.
enum class TpmCc : ::std::uint32_t {
  // TPM_CC_CREATE_PRIMARY is the command code for TPM2_CreatePrimary.
  TPM_CC_CREATE_PRIMARY = 305,
  // TPM_CC_SEQUENCE_COMPLETE is the command code for
  // TPM2_SequenceComplete.
  TPM_CC_SEQUENCE_COMPLETE = 318,
  // TPM_CC_CREATE is the command code for TPM2_Create.
  TPM_CC_CREATE = 339,
  // TPM_CC_SEQUENCE_UPDATE is the command code for TPM2_SequenceUpdate.
  TPM_CC_SEQUENCE_UPDATE = 348,
  // TPM_CC_SIGN is the command code for TPM2_Sign.
  TPM_CC_SIGN = 349,
  // TPM_CC_FLUSH_CONTEXT is the command code for TPM2_FlushContext.
  TPM_CC_FLUSH_CONTEXT = 357,
  // TPM_CC_HASH is the command code for TPM2_Hash.
  TPM_CC_HASH = 381,
  // TPM_CC_HASH_SEQUENCE_START is the command code for
  // TPM2_HashSequenceStart.
  TPM_CC_HASH_SEQUENCE_START = 390,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmCc

#ifndef CXXBRIDGE1_ENUM_crypto$tpm$TpmSt
#define CXXBRIDGE1_ENUM_crypto$tpm$TpmSt
// TPM Structure Tags.
enum class TpmSt : ::std::uint16_t {
  // TPM_ST_NO_SESSIONS indicates that the command has no sessions.
  TPM_ST_NO_SESSIONS = 32769,
  // TPM_ST_SESSIONS indicates that the command has sessions.
  TPM_ST_SESSIONS = 32770,
  // TPM_ST_ATTEST_CERTIFY is the tag for a certify attestation
  // statement.
  TPM_ST_ATTEST_CERTIFY = 32791,
  // TPM_ST_CREATION is the tag for a creation ticket.
  TPM_ST_CREATION = 32801,
  // TPM_ST_HASHCHECK is the tag for a hashcheck validation ticket.
  TPM_ST_HASHCHECK = 32804,
};
#endif // CXXBRIDGE1_ENUM_crypto$tpm$TpmSt

#ifndef CXXBRIDGE1_STRUCT_crypto$tpm$RawSignatureComponents
#define CXXBRIDGE1_STRUCT_crypto$tpm$RawSignatureComponents
// Struct containing the parsed raw components of a TPM signature.
struct RawSignatureComponents final {
  // The outcome of the parsing operation.
  ::crypto::tpm::SignatureParseResult status;
  // The signature algorithm ID (e.g., TPM_ALG_RSASSA or TPM_ALG_ECDSA).
  ::crypto::tpm::TpmAlgSigScheme sig_alg;
  // The hash algorithm ID (e.g., TPM_ALG_SHA256).
  ::crypto::tpm::TpmAlgHash hash_alg;
  // The raw RSA signature bytes, if sig_alg is TPM_ALG_RSASSA.
  ::rust::Vec<::std::uint8_t> rsa_sig;
  // The raw ECDSA r coordinate, if sig_alg is TPM_ALG_ECDSA.
  ::rust::Vec<::std::uint8_t> ecdsa_r;
  // The raw ECDSA s coordinate, if sig_alg is TPM_ALG_ECDSA.
  ::rust::Vec<::std::uint8_t> ecdsa_s;

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_crypto$tpm$RawSignatureComponents

// Builds a TPM2_Create command buffer for an ECDSA Attestation
// Identity Key (AIK).
//
// This function constructs the raw byte representation of a
// TPM2_Create command.
//
// # Arguments
//
// * `parent_handle` - Handle of the parent key (e.g., Storage Root
//   Key).
// * `hash_alg` - Hash algorithm (TPM_ALG_SHA256, TPM_ALG_SHA384, or
//   TPM_ALG_SHA512). The ECC curve is inferred from `hash_alg`: P-256
//   for SHA-256, P-384 for SHA-384 and P-521 for SHA-512.
//
// # Returns
//
// A `Vec<u8>` containing the serialized command buffer.
//
// # Panics
//
// Panics if `hash_alg` is unsupported.
::rust::Vec<::std::uint8_t> build_create_ecdsa_aik_command(::std::uint32_t parent_handle, ::crypto::tpm::TpmAlgHash hash_alg) noexcept;

// Parses a TPM2_Create response.
//
// This function reads the response buffer from a TPM2_Create command,
// validates the response headers and creation ticket, and extracts the
// private and public key areas.
//
// # Arguments
//
// * `resp` - The raw byte response from the TPM2_Create command.
//
// # Returns
//
// A `CreateResponse` containing the parsing result, any TPM error
// code, the serialized `TPM2B_PRIVATE` structure, and the serialized
// `TPM2B_PUBLIC` structure.
::crypto::tpm::RawCreateResponse parse_create_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_CreatePrimary command buffer for the ECC Storage Root
// Key, under the owner hierarchy.
//
// The template is fixed to ECC P-256 with SHA-256 and AES-128-CFB
// storage parameters: it has to reproduce the key that the Platform
// Crypto Provider persists at 0x81000009, so it takes no parameters.
//
// # Returns
//
// A `Vec<u8>` containing the serialized command buffer.
::rust::Vec<::std::uint8_t> build_create_primary_ecc_srk_command() noexcept;

// Parses a TPM2_CreatePrimary response.
//
// # Arguments
//
// * `resp` - The raw byte response from the TPM2_CreatePrimary
//   command.
//
// # Returns
//
// A `CreatePrimaryResponse` containing the parsing result, any TPM
// error code, and the handle of the created transient object.
::crypto::tpm::RawCreatePrimaryResponse parse_create_primary_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_FlushContext command buffer.
::rust::Vec<::std::uint8_t> build_flush_context_command(::std::uint32_t handle) noexcept;

// Parses a TPM2_FlushContext response.
::crypto::tpm::ResponseStatus parse_flush_context_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_Hash command buffer.
::rust::Vec<::std::uint8_t> build_hash_command(::rust::Slice<::std::uint8_t const> data, ::crypto::tpm::TpmAlgHash hash_alg) noexcept;

// Parses a TPM2_Hash response.
//
// Note that if the TPM returns an error code, the `digest` and
// `validation_ticket` fields will be empty.
::crypto::tpm::RawHashResponse parse_hash_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_HashSequenceStart command buffer.
::rust::Vec<::std::uint8_t> build_hash_sequence_start_command(::crypto::tpm::TpmAlgHash hash_alg) noexcept;

// Parses a TPM2_HashSequenceStart response.
::crypto::tpm::RawHashSequenceStartResponse parse_hash_sequence_start_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_SequenceUpdate command buffer.
::rust::Vec<::std::uint8_t> build_sequence_update_command(::std::uint32_t sequence_handle, ::rust::Slice<::std::uint8_t const> data) noexcept;

// Parses a TPM2_SequenceUpdate response.
::crypto::tpm::ResponseStatus parse_sequence_update_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_SequenceComplete command buffer.
::rust::Vec<::std::uint8_t> build_sequence_complete_command(::std::uint32_t sequence_handle, ::rust::Slice<::std::uint8_t const> data) noexcept;

// Parses a TPM2_SequenceComplete response.
::crypto::tpm::RawHashResponse parse_sequence_complete_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Builds a TPM2_Sign command buffer.
::rust::Vec<::std::uint8_t> build_sign_command(::std::uint32_t key_handle, ::rust::Slice<::std::uint8_t const> digest, ::rust::Slice<::std::uint8_t const> validation_ticket) noexcept;

// Parses a TPM2_Sign response.
::crypto::tpm::RawSignResponse parse_sign_response(::rust::Slice<::std::uint8_t const> resp) noexcept;

// Parses a serialized `TPMT_SIGNATURE` and returns its raw components.
::crypto::tpm::RawSignatureComponents parse_tpm_signature(::rust::Slice<::std::uint8_t const> signature) noexcept;
} // namespace tpm
} // namespace crypto

#ifdef __clang__
#pragma clang diagnostic pop
#endif // __clang__
