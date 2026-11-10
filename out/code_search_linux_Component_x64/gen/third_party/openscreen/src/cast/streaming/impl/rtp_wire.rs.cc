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

namespace openscreen {
  namespace cast {
    enum class ApparentType : ::std::uint8_t;
    struct RoutingResult;
    struct WireRtcpCommonHeader;
    struct WireRtcpReportBlock;
    struct WireSenderReport;
    struct WireRtpPacket;
    struct WirePacketNack;
    struct WireReceiverEventLog;
    struct WireReceiverFrameLogMessage;
    struct WireCompoundRtcp;
  }
}

namespace openscreen {
namespace cast {
#ifndef CXXBRIDGE1_ENUM_openscreen$cast$ApparentType
#define CXXBRIDGE1_ENUM_openscreen$cast$ApparentType
// Apparent packet routing type.
enum class ApparentType : ::std::uint8_t {
  Unknown = 0,
  Rtp = 1,
  Rtcp = 2,
};
#endif // CXXBRIDGE1_ENUM_openscreen$cast$ApparentType

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$RoutingResult
#define CXXBRIDGE1_STRUCT_openscreen$cast$RoutingResult
struct RoutingResult final {
  ::openscreen::cast::ApparentType apparent_type;
  // Synchronization Source (SSRC) identifier per RFC 3550.
  ::std::uint32_t ssrc CXX_DEFAULT_VALUE(0);

  bool operator==(RoutingResult const &) const noexcept;
  bool operator!=(RoutingResult const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$RoutingResult

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpCommonHeader
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpCommonHeader
struct WireRtcpCommonHeader final {
  ::std::uint8_t packet_type CXX_DEFAULT_VALUE(0);
  ::std::uint8_t report_count_or_subtype CXX_DEFAULT_VALUE(0);
  ::std::size_t payload_size CXX_DEFAULT_VALUE(0);

  bool operator==(WireRtcpCommonHeader const &) const noexcept;
  bool operator!=(WireRtcpCommonHeader const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpCommonHeader

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpReportBlock
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpReportBlock
struct WireRtcpReportBlock final {
  // Synchronization Source (SSRC) identifier per RFC 3550.
  ::std::uint32_t ssrc CXX_DEFAULT_VALUE(0);
  ::std::int32_t packet_fraction_lost_numerator CXX_DEFAULT_VALUE(0);
  ::std::int32_t cumulative_packets_lost CXX_DEFAULT_VALUE(0);
  ::std::uint32_t extended_high_sequence_number CXX_DEFAULT_VALUE(0);
  ::std::uint32_t jitter_ticks CXX_DEFAULT_VALUE(0);
  ::std::uint32_t last_status_report_id CXX_DEFAULT_VALUE(0);
  ::std::uint32_t delay_since_last_report_ticks CXX_DEFAULT_VALUE(0);

  bool operator==(WireRtcpReportBlock const &) const noexcept;
  bool operator!=(WireRtcpReportBlock const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireRtcpReportBlock

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireSenderReport
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireSenderReport
struct WireSenderReport final {
  bool has_sender_report CXX_DEFAULT_VALUE(false);
  ::std::uint64_t ntp_timestamp CXX_DEFAULT_VALUE(0);
  ::std::uint32_t truncated_rtp_timestamp CXX_DEFAULT_VALUE(0);
  ::std::uint32_t send_packet_count CXX_DEFAULT_VALUE(0);
  ::std::uint32_t send_octet_count CXX_DEFAULT_VALUE(0);
  bool has_report_block CXX_DEFAULT_VALUE(false);
  ::openscreen::cast::WireRtcpReportBlock report_block;

  bool operator==(WireSenderReport const &) const noexcept;
  bool operator!=(WireSenderReport const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireSenderReport

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireRtpPacket
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireRtpPacket
struct WireRtpPacket final {
  ::std::uint8_t payload_type CXX_DEFAULT_VALUE(0);
  ::std::uint16_t sequence_number CXX_DEFAULT_VALUE(0);
  ::std::uint32_t truncated_rtp_timestamp CXX_DEFAULT_VALUE(0);
  bool is_key_frame CXX_DEFAULT_VALUE(false);
  ::std::uint8_t truncated_frame_id CXX_DEFAULT_VALUE(0);
  ::std::uint16_t packet_id CXX_DEFAULT_VALUE(0);
  ::std::uint16_t max_packet_id CXX_DEFAULT_VALUE(0);
  bool has_referenced_frame_id CXX_DEFAULT_VALUE(false);
  ::std::uint8_t truncated_referenced_frame_id CXX_DEFAULT_VALUE(0);
  bool has_new_playout_delay CXX_DEFAULT_VALUE(false);
  ::std::uint16_t new_playout_delay_ms CXX_DEFAULT_VALUE(0);
  ::std::size_t payload_offset CXX_DEFAULT_VALUE(0);
  ::std::size_t payload_len CXX_DEFAULT_VALUE(0);

  bool operator==(WireRtpPacket const &) const noexcept;
  bool operator!=(WireRtpPacket const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireRtpPacket

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WirePacketNack
#define CXXBRIDGE1_STRUCT_openscreen$cast$WirePacketNack
struct WirePacketNack final {
  ::std::int64_t frame_id CXX_DEFAULT_VALUE(0);
  ::std::uint16_t packet_id CXX_DEFAULT_VALUE(0);

  bool operator==(WirePacketNack const &) const noexcept;
  bool operator!=(WirePacketNack const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WirePacketNack

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverEventLog
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverEventLog
struct WireReceiverEventLog final {
  ::std::uint8_t wire_type CXX_DEFAULT_VALUE(0);
  ::std::uint16_t timestamp_delta_ms CXX_DEFAULT_VALUE(0);
  ::std::uint16_t delay_delta_or_packet_id CXX_DEFAULT_VALUE(0);

  bool operator==(WireReceiverEventLog const &) const noexcept;
  bool operator!=(WireReceiverEventLog const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverEventLog

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverFrameLogMessage
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverFrameLogMessage
struct WireReceiverFrameLogMessage final {
  ::std::uint32_t truncated_rtp_timestamp CXX_DEFAULT_VALUE(0);
  ::std::uint32_t raw_timestamp_ms CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::openscreen::cast::WireReceiverEventLog> events;

  bool operator==(WireReceiverFrameLogMessage const &) const noexcept;
  bool operator!=(WireReceiverFrameLogMessage const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireReceiverFrameLogMessage

#ifndef CXXBRIDGE1_STRUCT_openscreen$cast$WireCompoundRtcp
#define CXXBRIDGE1_STRUCT_openscreen$cast$WireCompoundRtcp
struct WireCompoundRtcp final {
  bool has_receiver_reference_ntp_time CXX_DEFAULT_VALUE(false);
  ::std::uint64_t receiver_reference_ntp_time CXX_DEFAULT_VALUE(0);
  bool has_receiver_report CXX_DEFAULT_VALUE(false);
  ::openscreen::cast::WireRtcpReportBlock receiver_report;
  ::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> log_messages;
  bool has_checkpoint_frame_id CXX_DEFAULT_VALUE(false);
  ::std::int64_t checkpoint_frame_id CXX_DEFAULT_VALUE(0);
  ::std::uint16_t target_playout_delay_ms CXX_DEFAULT_VALUE(0);
  ::rust::Vec<::std::int64_t> received_frames;
  ::rust::Vec<::openscreen::cast::WirePacketNack> packet_nacks;
  bool picture_loss_indicator CXX_DEFAULT_VALUE(false);

  bool operator==(WireCompoundRtcp const &) const noexcept;
  bool operator!=(WireCompoundRtcp const &) const noexcept;
  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_openscreen$cast$WireCompoundRtcp

extern "C" {
bool openscreen$cast$cxxbridge1$202$RoutingResult$operator$eq(RoutingResult const &, RoutingResult const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireRtcpCommonHeader$operator$eq(WireRtcpCommonHeader const &, WireRtcpCommonHeader const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireRtcpReportBlock$operator$eq(WireRtcpReportBlock const &, WireRtcpReportBlock const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireSenderReport$operator$eq(WireSenderReport const &, WireSenderReport const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireRtpPacket$operator$eq(WireRtpPacket const &, WireRtpPacket const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WirePacketNack$operator$eq(WirePacketNack const &, WirePacketNack const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireReceiverEventLog$operator$eq(WireReceiverEventLog const &, WireReceiverEventLog const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireReceiverFrameLogMessage$operator$eq(WireReceiverFrameLogMessage const &, WireReceiverFrameLogMessage const &) noexcept;
bool openscreen$cast$cxxbridge1$202$WireCompoundRtcp$operator$eq(WireCompoundRtcp const &, WireCompoundRtcp const &) noexcept;

void openscreen$cast$cxxbridge1$202$inspect_packet_for_routing(::rust::Slice<::std::uint8_t const> packet, ::openscreen::cast::RoutingResult *return$) noexcept;

bool openscreen$cast$cxxbridge1$202$parse_rtcp_common_header(::rust::Slice<::std::uint8_t const> buffer, ::openscreen::cast::WireRtcpCommonHeader &out) noexcept;

bool openscreen$cast$cxxbridge1$202$parse_rtcp_report_block(::rust::Slice<::std::uint8_t const> buffer, ::std::size_t report_count, ::std::uint32_t target_ssrc, ::openscreen::cast::WireRtcpReportBlock &out) noexcept;

bool openscreen$cast$cxxbridge1$202$parse_sender_report_packet(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t sender_ssrc, ::std::uint32_t receiver_ssrc, ::openscreen::cast::WireSenderReport &out) noexcept;

bool openscreen$cast$cxxbridge1$202$parse_rtp_packet(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t sender_ssrc, ::openscreen::cast::WireRtpPacket &out) noexcept;

bool openscreen$cast$cxxbridge1$202$parse_compound_rtcp(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t receiver_ssrc, ::std::uint32_t sender_ssrc, ::std::int64_t max_feedback_frame_id, ::openscreen::cast::WireCompoundRtcp &out) noexcept;
} // extern "C"

bool RoutingResult::operator==(RoutingResult const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$RoutingResult$operator$eq(*this, rhs);
}

bool RoutingResult::operator!=(RoutingResult const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireRtcpCommonHeader::operator==(WireRtcpCommonHeader const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireRtcpCommonHeader$operator$eq(*this, rhs);
}

bool WireRtcpCommonHeader::operator!=(WireRtcpCommonHeader const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireRtcpReportBlock::operator==(WireRtcpReportBlock const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireRtcpReportBlock$operator$eq(*this, rhs);
}

bool WireRtcpReportBlock::operator!=(WireRtcpReportBlock const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireSenderReport::operator==(WireSenderReport const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireSenderReport$operator$eq(*this, rhs);
}

bool WireSenderReport::operator!=(WireSenderReport const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireRtpPacket::operator==(WireRtpPacket const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireRtpPacket$operator$eq(*this, rhs);
}

bool WireRtpPacket::operator!=(WireRtpPacket const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WirePacketNack::operator==(WirePacketNack const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WirePacketNack$operator$eq(*this, rhs);
}

bool WirePacketNack::operator!=(WirePacketNack const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireReceiverEventLog::operator==(WireReceiverEventLog const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireReceiverEventLog$operator$eq(*this, rhs);
}

bool WireReceiverEventLog::operator!=(WireReceiverEventLog const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireReceiverFrameLogMessage::operator==(WireReceiverFrameLogMessage const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireReceiverFrameLogMessage$operator$eq(*this, rhs);
}

bool WireReceiverFrameLogMessage::operator!=(WireReceiverFrameLogMessage const &rhs) const noexcept {
  return !(*this == rhs);
}

bool WireCompoundRtcp::operator==(WireCompoundRtcp const &rhs) const noexcept {
  return openscreen$cast$cxxbridge1$202$WireCompoundRtcp$operator$eq(*this, rhs);
}

bool WireCompoundRtcp::operator!=(WireCompoundRtcp const &rhs) const noexcept {
  return !(*this == rhs);
}

__attribute__((visibility("default"))) ::openscreen::cast::RoutingResult inspect_packet_for_routing(::rust::Slice<::std::uint8_t const> packet) noexcept {
  ::rust::MaybeUninit<::openscreen::cast::RoutingResult> return$;
  openscreen$cast$cxxbridge1$202$inspect_packet_for_routing(packet, &return$.value);
  return ::std::move(return$.value);
}

__attribute__((visibility("default"))) bool parse_rtcp_common_header(::rust::Slice<::std::uint8_t const> buffer, ::openscreen::cast::WireRtcpCommonHeader &out) noexcept {
  return openscreen$cast$cxxbridge1$202$parse_rtcp_common_header(buffer, out);
}

__attribute__((visibility("default"))) bool parse_rtcp_report_block(::rust::Slice<::std::uint8_t const> buffer, ::std::size_t report_count, ::std::uint32_t target_ssrc, ::openscreen::cast::WireRtcpReportBlock &out) noexcept {
  return openscreen$cast$cxxbridge1$202$parse_rtcp_report_block(buffer, report_count, target_ssrc, out);
}

__attribute__((visibility("default"))) bool parse_sender_report_packet(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t sender_ssrc, ::std::uint32_t receiver_ssrc, ::openscreen::cast::WireSenderReport &out) noexcept {
  return openscreen$cast$cxxbridge1$202$parse_sender_report_packet(buffer, sender_ssrc, receiver_ssrc, out);
}

__attribute__((visibility("default"))) bool parse_rtp_packet(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t sender_ssrc, ::openscreen::cast::WireRtpPacket &out) noexcept {
  return openscreen$cast$cxxbridge1$202$parse_rtp_packet(buffer, sender_ssrc, out);
}

__attribute__((visibility("default"))) bool parse_compound_rtcp(::rust::Slice<::std::uint8_t const> buffer, ::std::uint32_t receiver_ssrc, ::std::uint32_t sender_ssrc, ::std::int64_t max_feedback_frame_id, ::openscreen::cast::WireCompoundRtcp &out) noexcept {
  return openscreen$cast$cxxbridge1$202$parse_compound_rtcp(buffer, receiver_ssrc, sender_ssrc, max_feedback_frame_id, out);
}
} // namespace cast
} // namespace openscreen

extern "C" {
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$new(::rust::Vec<::openscreen::cast::WireReceiverEventLog> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$drop(::rust::Vec<::openscreen::cast::WireReceiverEventLog> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$len(::rust::Vec<::openscreen::cast::WireReceiverEventLog> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$capacity(::rust::Vec<::openscreen::cast::WireReceiverEventLog> const *ptr) noexcept;
::openscreen::cast::WireReceiverEventLog const *cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$data(::rust::Vec<::openscreen::cast::WireReceiverEventLog> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$reserve_total(::rust::Vec<::openscreen::cast::WireReceiverEventLog> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$set_len(::rust::Vec<::openscreen::cast::WireReceiverEventLog> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$truncate(::rust::Vec<::openscreen::cast::WireReceiverEventLog> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$new(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$drop(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$len(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$capacity(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> const *ptr) noexcept;
::openscreen::cast::WireReceiverFrameLogMessage const *cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$data(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$reserve_total(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$set_len(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$truncate(::rust::Vec<::openscreen::cast::WireReceiverFrameLogMessage> *ptr, ::std::size_t len) noexcept;

void cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$new(::rust::Vec<::openscreen::cast::WirePacketNack> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$drop(::rust::Vec<::openscreen::cast::WirePacketNack> *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$len(::rust::Vec<::openscreen::cast::WirePacketNack> const *ptr) noexcept;
::std::size_t cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$capacity(::rust::Vec<::openscreen::cast::WirePacketNack> const *ptr) noexcept;
::openscreen::cast::WirePacketNack const *cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$data(::rust::Vec<::openscreen::cast::WirePacketNack> const *ptr) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$reserve_total(::rust::Vec<::openscreen::cast::WirePacketNack> *ptr, ::std::size_t new_cap) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$set_len(::rust::Vec<::openscreen::cast::WirePacketNack> *ptr, ::std::size_t len) noexcept;
void cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$truncate(::rust::Vec<::openscreen::cast::WirePacketNack> *ptr, ::std::size_t len) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__attribute__((visibility("default"))) Vec<::openscreen::cast::WireReceiverEventLog>::Vec() noexcept {
  cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverEventLog>::drop() noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WireReceiverEventLog>::size() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WireReceiverEventLog>::capacity() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::openscreen::cast::WireReceiverEventLog const *Vec<::openscreen::cast::WireReceiverEventLog>::data() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverEventLog>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverEventLog>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverEventLog>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverEventLog$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::openscreen::cast::WireReceiverFrameLogMessage>::Vec() noexcept {
  cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverFrameLogMessage>::drop() noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WireReceiverFrameLogMessage>::size() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WireReceiverFrameLogMessage>::capacity() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::openscreen::cast::WireReceiverFrameLogMessage const *Vec<::openscreen::cast::WireReceiverFrameLogMessage>::data() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverFrameLogMessage>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverFrameLogMessage>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WireReceiverFrameLogMessage>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$openscreen$cast$WireReceiverFrameLogMessage$truncate(this, len);
}
template <>
__attribute__((visibility("default"))) Vec<::openscreen::cast::WirePacketNack>::Vec() noexcept {
  cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$new(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WirePacketNack>::drop() noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$drop(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WirePacketNack>::size() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$len(this);
}
template <>
__attribute__((visibility("default"))) ::std::size_t Vec<::openscreen::cast::WirePacketNack>::capacity() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$capacity(this);
}
template <>
__attribute__((visibility("default"))) ::openscreen::cast::WirePacketNack const *Vec<::openscreen::cast::WirePacketNack>::data() const noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$data(this);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WirePacketNack>::reserve_total(::std::size_t new_cap) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$reserve_total(this, new_cap);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WirePacketNack>::set_len(::std::size_t len) noexcept {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$set_len(this, len);
}
template <>
__attribute__((visibility("default"))) void Vec<::openscreen::cast::WirePacketNack>::truncate(::std::size_t len) {
  return cxxbridge1$rust_vec$openscreen$cast$WirePacketNack$truncate(this, len);
}
} // namespace cxxbridge1
} // namespace rust
