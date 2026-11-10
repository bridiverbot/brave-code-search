#include "components/user_data_importer/utility/history_callback_from_rust.h"
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <iterator>
#include <memory>
#include <new>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>
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

namespace {
template <typename T>
void destroy(T *ptr) {
  ptr->~T();
}

template <bool> struct deleter_if {
  template <typename T> void operator()(T *) {}
};
template <> struct deleter_if<true> {
  template <typename T> void operator()(T *ptr) { ptr->~T(); }
};

template <typename T, bool = ::std::is_move_constructible<T>::value>
struct if_move_constructible {
  static bool reserve(::std::vector<T> &, ::std::size_t) noexcept {
    return false;
  }
};
template <typename T>
struct if_move_constructible<T, true> {
  static bool reserve(::std::vector<T> &vec, ::std::size_t new_cap) {
    vec.reserve(new_cap);
    return true;
  }
};
} // namespace
} // namespace cxxbridge1
} // namespace rust

#if __cplusplus >= 201402L
#define CXX_DEFAULT_VALUE(value) = value
#else
#define CXX_DEFAULT_VALUE(value)
#endif

namespace user_data_importer {
  enum class FileType : ::std::uint8_t;
  struct SafariHistoryEntry;
  struct StablePortabilityHistoryEntry;
  struct PaymentCardEntry;
  using SafariHistoryCallbackFromRust = ::user_data_importer::SafariHistoryCallbackFromRust;
  using StablePortabilityHistoryCallbackFromRust = ::user_data_importer::StablePortabilityHistoryCallbackFromRust;
  struct ResultOfZipFileArchive;
  struct ZipFileArchive;
}

namespace user_data_importer {
#ifndef CXXBRIDGE1_ENUM_user_data_importer$FileType
#define CXXBRIDGE1_ENUM_user_data_importer$FileType
enum class FileType : ::std::uint8_t {
  Bookmarks = 0,
  Passwords = 1,
  PaymentCards = 2,
  SafariHistory = 3,
  StablePortabilityHistory = 4,
};
#endif // CXXBRIDGE1_ENUM_user_data_importer$FileType

#ifndef CXXBRIDGE1_STRUCT_user_data_importer$SafariHistoryEntry
#define CXXBRIDGE1_STRUCT_user_data_importer$SafariHistoryEntry
struct SafariHistoryEntry final {
  ::rust::String url;
  ::rust::String title;
  ::std::uint64_t time_usec CXX_DEFAULT_VALUE(0);
  ::rust::String destination_url;
  ::rust::String source_url;
  ::std::uint64_t visit_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_user_data_importer$SafariHistoryEntry

#ifndef CXXBRIDGE1_STRUCT_user_data_importer$StablePortabilityHistoryEntry
#define CXXBRIDGE1_STRUCT_user_data_importer$StablePortabilityHistoryEntry
struct StablePortabilityHistoryEntry final {
  bool synced CXX_DEFAULT_VALUE(false);
  ::rust::String title;
  ::rust::String url;
  ::std::uint64_t visit_time_unix_epoch_usec CXX_DEFAULT_VALUE(0);
  ::std::uint64_t visit_count CXX_DEFAULT_VALUE(0);
  ::std::uint64_t typed_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_user_data_importer$StablePortabilityHistoryEntry

#ifndef CXXBRIDGE1_STRUCT_user_data_importer$PaymentCardEntry
#define CXXBRIDGE1_STRUCT_user_data_importer$PaymentCardEntry
struct PaymentCardEntry final {
  ::rust::String card_number;
  ::rust::String card_name;
  ::rust::String cardholder_name;
  ::std::uint64_t card_expiration_month CXX_DEFAULT_VALUE(0);
  ::std::uint64_t card_expiration_year CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_user_data_importer$PaymentCardEntry

#ifndef CXXBRIDGE1_STRUCT_user_data_importer$ResultOfZipFileArchive
#define CXXBRIDGE1_STRUCT_user_data_importer$ResultOfZipFileArchive
struct ResultOfZipFileArchive final : public ::rust::Opaque {
  __attribute__((visibility("default"))) bool err() const noexcept;
  __attribute__((visibility("default"))) ::rust::Box<::user_data_importer::ZipFileArchive> unwrap() noexcept;
  ~ResultOfZipFileArchive() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_user_data_importer$ResultOfZipFileArchive

#ifndef CXXBRIDGE1_STRUCT_user_data_importer$ZipFileArchive
#define CXXBRIDGE1_STRUCT_user_data_importer$ZipFileArchive
struct ZipFileArchive final : public ::rust::Opaque {
  __attribute__((visibility("default"))) ::std::uint64_t get_file_size_bytes(::user_data_importer::FileType file_type) noexcept;
  __attribute__((visibility("default"))) bool unzip(::user_data_importer::FileType file_type, ::std::string &output_bytes) noexcept;
  __attribute__((visibility("default"))) void parse_safari_history(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> history_callback, ::std::size_t history_size_threshold) noexcept;
  __attribute__((visibility("default"))) bool parse_payment_cards(::std::vector<::user_data_importer::PaymentCardEntry> &history) noexcept;
  ~ZipFileArchive() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_user_data_importer$ZipFileArchive

extern "C" {
__attribute__((visibility("default"))) void user_data_importer$cxxbridge1$202$SafariHistoryCallbackFromRust$ImportSafariHistoryEntries(::user_data_importer::SafariHistoryCallbackFromRust &self, ::std::vector<::user_data_importer::SafariHistoryEntry> *history_entries, bool completed) noexcept {
  void (::user_data_importer::SafariHistoryCallbackFromRust::*ImportSafariHistoryEntries$)(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>, bool) = &::user_data_importer::SafariHistoryCallbackFromRust::ImportHistoryEntries;
  (self.*ImportSafariHistoryEntries$)(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>(history_entries), completed);
}

__attribute__((visibility("default"))) void user_data_importer$cxxbridge1$202$SafariHistoryCallbackFromRust$Fail(::user_data_importer::SafariHistoryCallbackFromRust &self) noexcept {
  void (::user_data_importer::SafariHistoryCallbackFromRust::*Fail$)() = &::user_data_importer::SafariHistoryCallbackFromRust::Fail;
  (self.*Fail$)();
}

__attribute__((visibility("default"))) void user_data_importer$cxxbridge1$202$StablePortabilityHistoryCallbackFromRust$ImportStablePortabilityHistoryEntries(::user_data_importer::StablePortabilityHistoryCallbackFromRust &self, ::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *history_entries, bool completed) noexcept {
  void (::user_data_importer::StablePortabilityHistoryCallbackFromRust::*ImportStablePortabilityHistoryEntries$)(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>, bool) = &::user_data_importer::StablePortabilityHistoryCallbackFromRust::ImportHistoryEntries;
  (self.*ImportStablePortabilityHistoryEntries$)(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>(history_entries), completed);
}

__attribute__((visibility("default"))) void user_data_importer$cxxbridge1$202$StablePortabilityHistoryCallbackFromRust$Fail(::user_data_importer::StablePortabilityHistoryCallbackFromRust &self) noexcept {
  void (::user_data_importer::StablePortabilityHistoryCallbackFromRust::*Fail$)() = &::user_data_importer::StablePortabilityHistoryCallbackFromRust::Fail;
  (self.*Fail$)();
}
::std::size_t user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$operator$sizeof() noexcept;
::std::size_t user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$operator$alignof() noexcept;

bool user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$err(::user_data_importer::ResultOfZipFileArchive const &self) noexcept;

::user_data_importer::ZipFileArchive *user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$unwrap(::user_data_importer::ResultOfZipFileArchive &self) noexcept;
::std::size_t user_data_importer$cxxbridge1$202$ZipFileArchive$operator$sizeof() noexcept;
::std::size_t user_data_importer$cxxbridge1$202$ZipFileArchive$operator$alignof() noexcept;

::std::uint64_t user_data_importer$cxxbridge1$202$ZipFileArchive$get_file_size_bytes(::user_data_importer::ZipFileArchive &self, ::user_data_importer::FileType file_type) noexcept;

bool user_data_importer$cxxbridge1$202$ZipFileArchive$unzip(::user_data_importer::ZipFileArchive &self, ::user_data_importer::FileType file_type, ::std::string &output_bytes) noexcept;

void user_data_importer$cxxbridge1$202$ZipFileArchive$parse_safari_history(::user_data_importer::ZipFileArchive &self, ::user_data_importer::SafariHistoryCallbackFromRust *history_callback, ::std::size_t history_size_threshold) noexcept;

bool user_data_importer$cxxbridge1$202$ZipFileArchive$parse_payment_cards(::user_data_importer::ZipFileArchive &self, ::std::vector<::user_data_importer::PaymentCardEntry> &history) noexcept;

::user_data_importer::ResultOfZipFileArchive *user_data_importer$cxxbridge1$202$new_archive(::rust::Slice<::std::uint8_t const> zip_filename) noexcept;

void user_data_importer$cxxbridge1$202$parse_stable_portability_history(::std::int32_t owned_fd, ::user_data_importer::StablePortabilityHistoryCallbackFromRust *history_callback, ::std::size_t history_size_threshold) noexcept;
} // extern "C"

::std::size_t ResultOfZipFileArchive::layout::size() noexcept {
  return user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$operator$sizeof();
}

::std::size_t ResultOfZipFileArchive::layout::align() noexcept {
  return user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$operator$alignof();
}

__attribute__((visibility("default"))) bool ResultOfZipFileArchive::err() const noexcept {
  return user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$err(*this);
}

__attribute__((visibility("default"))) ::rust::Box<::user_data_importer::ZipFileArchive> ResultOfZipFileArchive::unwrap() noexcept {
  return ::rust::Box<::user_data_importer::ZipFileArchive>::from_raw(user_data_importer$cxxbridge1$202$ResultOfZipFileArchive$unwrap(*this));
}

::std::size_t ZipFileArchive::layout::size() noexcept {
  return user_data_importer$cxxbridge1$202$ZipFileArchive$operator$sizeof();
}

::std::size_t ZipFileArchive::layout::align() noexcept {
  return user_data_importer$cxxbridge1$202$ZipFileArchive$operator$alignof();
}

__attribute__((visibility("default"))) ::std::uint64_t ZipFileArchive::get_file_size_bytes(::user_data_importer::FileType file_type) noexcept {
  return user_data_importer$cxxbridge1$202$ZipFileArchive$get_file_size_bytes(*this, file_type);
}

__attribute__((visibility("default"))) bool ZipFileArchive::unzip(::user_data_importer::FileType file_type, ::std::string &output_bytes) noexcept {
  return user_data_importer$cxxbridge1$202$ZipFileArchive$unzip(*this, file_type, output_bytes);
}

__attribute__((visibility("default"))) void ZipFileArchive::parse_safari_history(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> history_callback, ::std::size_t history_size_threshold) noexcept {
  user_data_importer$cxxbridge1$202$ZipFileArchive$parse_safari_history(*this, history_callback.release(), history_size_threshold);
}

__attribute__((visibility("default"))) bool ZipFileArchive::parse_payment_cards(::std::vector<::user_data_importer::PaymentCardEntry> &history) noexcept {
  return user_data_importer$cxxbridge1$202$ZipFileArchive$parse_payment_cards(*this, history);
}

__attribute__((visibility("default"))) ::rust::Box<::user_data_importer::ResultOfZipFileArchive> new_archive(::rust::Slice<::std::uint8_t const> zip_filename) noexcept {
  return ::rust::Box<::user_data_importer::ResultOfZipFileArchive>::from_raw(user_data_importer$cxxbridge1$202$new_archive(zip_filename));
}

// # Safety
//
// Caller needs to guarantee that `owned_fd` is an owned file descriptor.
// See <https://doc.rust-lang.org/beta/std/io/index.html#io-safety> for more details.
__attribute__((visibility("default"))) void parse_stable_portability_history(::std::int32_t owned_fd, ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> history_callback, ::std::size_t history_size_threshold) noexcept {
  user_data_importer$cxxbridge1$202$parse_stable_portability_history(owned_fd, history_callback.release(), history_size_threshold);
}
} // namespace user_data_importer

extern "C" {
__attribute__((visibility("default"))) ::std::vector<::user_data_importer::SafariHistoryEntry> *cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$new() noexcept {
  return new ::std::vector<::user_data_importer::SafariHistoryEntry>();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$size(::std::vector<::user_data_importer::SafariHistoryEntry> const &s) noexcept {
  return s.size();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$capacity(::std::vector<::user_data_importer::SafariHistoryEntry> const &s) noexcept {
  return s.capacity();
}
__attribute__((visibility("default"))) ::user_data_importer::SafariHistoryEntry *cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$get_unchecked(::std::vector<::user_data_importer::SafariHistoryEntry> *s, ::std::size_t pos) noexcept {
  return &(*s)[pos];
}
__attribute__((visibility("default"))) bool cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$reserve(::std::vector<::user_data_importer::SafariHistoryEntry> *s, ::std::size_t new_cap) noexcept {
  return ::rust::if_move_constructible<::user_data_importer::SafariHistoryEntry>::reserve(*s, new_cap);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$push_back(::std::vector<::user_data_importer::SafariHistoryEntry> *v, ::user_data_importer::SafariHistoryEntry *value) noexcept {
  v->push_back(::std::move(*value));
  ::rust::destroy(value);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$SafariHistoryEntry$pop_back(::std::vector<::user_data_importer::SafariHistoryEntry> *v, ::user_data_importer::SafariHistoryEntry *out) noexcept {
  ::new (out) ::user_data_importer::SafariHistoryEntry(::std::move(v->back()));
  v->pop_back();
}
static_assert(::rust::detail::is_complete<::std::remove_extent<::std::vector<::user_data_importer::SafariHistoryEntry>>::type>::value, "definition of `::std::vector<::user_data_importer::SafariHistoryEntry>` is required");
static_assert(sizeof(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$SafariHistoryEntry$null(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$SafariHistoryEntry$raw(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>> *ptr, ::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>::element_type const *cxxbridge1$unique_ptr$std$vector$user_data_importer$SafariHistoryEntry$get(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>>::pointer cxxbridge1$unique_ptr$std$vector$user_data_importer$SafariHistoryEntry$release(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$SafariHistoryEntry$drop(::std::unique_ptr<::std::vector<::user_data_importer::SafariHistoryEntry>> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::std::vector<::user_data_importer::SafariHistoryEntry>>::value>{}(ptr);
}

__attribute__((visibility("default"))) ::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$new() noexcept {
  return new ::std::vector<::user_data_importer::StablePortabilityHistoryEntry>();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$size(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> const &s) noexcept {
  return s.size();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$capacity(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> const &s) noexcept {
  return s.capacity();
}
__attribute__((visibility("default"))) ::user_data_importer::StablePortabilityHistoryEntry *cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$get_unchecked(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *s, ::std::size_t pos) noexcept {
  return &(*s)[pos];
}
__attribute__((visibility("default"))) bool cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$reserve(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *s, ::std::size_t new_cap) noexcept {
  return ::rust::if_move_constructible<::user_data_importer::StablePortabilityHistoryEntry>::reserve(*s, new_cap);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$push_back(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *v, ::user_data_importer::StablePortabilityHistoryEntry *value) noexcept {
  v->push_back(::std::move(*value));
  ::rust::destroy(value);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$StablePortabilityHistoryEntry$pop_back(::std::vector<::user_data_importer::StablePortabilityHistoryEntry> *v, ::user_data_importer::StablePortabilityHistoryEntry *out) noexcept {
  ::new (out) ::user_data_importer::StablePortabilityHistoryEntry(::std::move(v->back()));
  v->pop_back();
}
static_assert(::rust::detail::is_complete<::std::remove_extent<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>::type>::value, "definition of `::std::vector<::user_data_importer::StablePortabilityHistoryEntry>` is required");
static_assert(sizeof(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$StablePortabilityHistoryEntry$null(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$StablePortabilityHistoryEntry$raw(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>> *ptr, ::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>::element_type const *cxxbridge1$unique_ptr$std$vector$user_data_importer$StablePortabilityHistoryEntry$get(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>::pointer cxxbridge1$unique_ptr$std$vector$user_data_importer$StablePortabilityHistoryEntry$release(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$StablePortabilityHistoryEntry$drop(::std::unique_ptr<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::std::vector<::user_data_importer::StablePortabilityHistoryEntry>>::value>{}(ptr);
}

::user_data_importer::ZipFileArchive *cxxbridge1$box$user_data_importer$ZipFileArchive$alloc() noexcept;
void cxxbridge1$box$user_data_importer$ZipFileArchive$dealloc(::user_data_importer::ZipFileArchive *) noexcept;
void cxxbridge1$box$user_data_importer$ZipFileArchive$drop(::rust::Box<::user_data_importer::ZipFileArchive> *ptr) noexcept;

static_assert(::rust::detail::is_complete<::std::remove_extent<::user_data_importer::SafariHistoryCallbackFromRust>::type>::value, "definition of `::user_data_importer::SafariHistoryCallbackFromRust` is required");
static_assert(sizeof(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$SafariHistoryCallbackFromRust$null(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$SafariHistoryCallbackFromRust$raw(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> *ptr, ::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>::element_type const *cxxbridge1$unique_ptr$user_data_importer$SafariHistoryCallbackFromRust$get(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust>::pointer cxxbridge1$unique_ptr$user_data_importer$SafariHistoryCallbackFromRust$release(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$SafariHistoryCallbackFromRust$drop(::std::unique_ptr<::user_data_importer::SafariHistoryCallbackFromRust> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::user_data_importer::SafariHistoryCallbackFromRust>::value>{}(ptr);
}

__attribute__((visibility("default"))) ::std::vector<::user_data_importer::PaymentCardEntry> *cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$new() noexcept {
  return new ::std::vector<::user_data_importer::PaymentCardEntry>();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$size(::std::vector<::user_data_importer::PaymentCardEntry> const &s) noexcept {
  return s.size();
}
__attribute__((visibility("default"))) ::std::size_t cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$capacity(::std::vector<::user_data_importer::PaymentCardEntry> const &s) noexcept {
  return s.capacity();
}
__attribute__((visibility("default"))) ::user_data_importer::PaymentCardEntry *cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$get_unchecked(::std::vector<::user_data_importer::PaymentCardEntry> *s, ::std::size_t pos) noexcept {
  return &(*s)[pos];
}
__attribute__((visibility("default"))) bool cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$reserve(::std::vector<::user_data_importer::PaymentCardEntry> *s, ::std::size_t new_cap) noexcept {
  return ::rust::if_move_constructible<::user_data_importer::PaymentCardEntry>::reserve(*s, new_cap);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$push_back(::std::vector<::user_data_importer::PaymentCardEntry> *v, ::user_data_importer::PaymentCardEntry *value) noexcept {
  v->push_back(::std::move(*value));
  ::rust::destroy(value);
}
__attribute__((visibility("default"))) void cxxbridge1$std$vector$user_data_importer$PaymentCardEntry$pop_back(::std::vector<::user_data_importer::PaymentCardEntry> *v, ::user_data_importer::PaymentCardEntry *out) noexcept {
  ::new (out) ::user_data_importer::PaymentCardEntry(::std::move(v->back()));
  v->pop_back();
}
static_assert(::rust::detail::is_complete<::std::remove_extent<::std::vector<::user_data_importer::PaymentCardEntry>>::type>::value, "definition of `::std::vector<::user_data_importer::PaymentCardEntry>` is required");
static_assert(sizeof(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$PaymentCardEntry$null(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$PaymentCardEntry$raw(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>> *ptr, ::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>::element_type const *cxxbridge1$unique_ptr$std$vector$user_data_importer$PaymentCardEntry$get(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>>::pointer cxxbridge1$unique_ptr$std$vector$user_data_importer$PaymentCardEntry$release(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$std$vector$user_data_importer$PaymentCardEntry$drop(::std::unique_ptr<::std::vector<::user_data_importer::PaymentCardEntry>> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::std::vector<::user_data_importer::PaymentCardEntry>>::value>{}(ptr);
}

::user_data_importer::ResultOfZipFileArchive *cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$alloc() noexcept;
void cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$dealloc(::user_data_importer::ResultOfZipFileArchive *) noexcept;
void cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$drop(::rust::Box<::user_data_importer::ResultOfZipFileArchive> *ptr) noexcept;

static_assert(::rust::detail::is_complete<::std::remove_extent<::user_data_importer::StablePortabilityHistoryCallbackFromRust>::type>::value, "definition of `::user_data_importer::StablePortabilityHistoryCallbackFromRust` is required");
static_assert(sizeof(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>) == sizeof(void *), "");
static_assert(alignof(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>) == alignof(void *), "");
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$StablePortabilityHistoryCallbackFromRust$null(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> *ptr) noexcept {
  ::new (ptr) ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$StablePortabilityHistoryCallbackFromRust$raw(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> *ptr, ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>::pointer raw) noexcept {
  ::new (ptr) ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>(raw);
}
__attribute__((visibility("default"))) ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>::element_type const *cxxbridge1$unique_ptr$user_data_importer$StablePortabilityHistoryCallbackFromRust$get(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> const &ptr) noexcept {
  return ptr.get();
}
__attribute__((visibility("default"))) ::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust>::pointer cxxbridge1$unique_ptr$user_data_importer$StablePortabilityHistoryCallbackFromRust$release(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> &ptr) noexcept {
  return ptr.release();
}
__attribute__((visibility("default"))) void cxxbridge1$unique_ptr$user_data_importer$StablePortabilityHistoryCallbackFromRust$drop(::std::unique_ptr<::user_data_importer::StablePortabilityHistoryCallbackFromRust> *ptr) noexcept {
  ::rust::deleter_if<::rust::detail::is_complete<::user_data_importer::StablePortabilityHistoryCallbackFromRust>::value>{}(ptr);
}
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__attribute__((visibility("default"))) ::user_data_importer::ZipFileArchive *Box<::user_data_importer::ZipFileArchive>::allocation::alloc() noexcept {
  return cxxbridge1$box$user_data_importer$ZipFileArchive$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::user_data_importer::ZipFileArchive>::allocation::dealloc(::user_data_importer::ZipFileArchive *ptr) noexcept {
  cxxbridge1$box$user_data_importer$ZipFileArchive$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::user_data_importer::ZipFileArchive>::drop() noexcept {
  cxxbridge1$box$user_data_importer$ZipFileArchive$drop(this);
}
template <>
__attribute__((visibility("default"))) ::user_data_importer::ResultOfZipFileArchive *Box<::user_data_importer::ResultOfZipFileArchive>::allocation::alloc() noexcept {
  return cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$alloc();
}
template <>
__attribute__((visibility("default"))) void Box<::user_data_importer::ResultOfZipFileArchive>::allocation::dealloc(::user_data_importer::ResultOfZipFileArchive *ptr) noexcept {
  cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$dealloc(ptr);
}
template <>
__attribute__((visibility("default"))) void Box<::user_data_importer::ResultOfZipFileArchive>::drop() noexcept {
  cxxbridge1$box$user_data_importer$ResultOfZipFileArchive$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
