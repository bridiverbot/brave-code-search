#include "rust/common/SkStreamAdapter.h"
#include <array>
#include <cassert>
#include <cstddef>
#include <cstdint>
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

namespace rust_ico {
  enum class DecodingResult : ::std::uint8_t;
  enum class DirectoryParseResult : ::std::uint8_t;
  enum class EmbeddedFormat : ::std::uint8_t;
  enum class IcoColor : ::std::int32_t;
  enum class IcoAlpha : ::std::int32_t;
  enum class IcoFileType : ::std::uint8_t;
  struct IcoEntry;
  struct DirectoryResult;
  struct ResultOfReader;
  struct Reader;
}

namespace rust_ico {
#ifndef CXXBRIDGE1_ENUM_rust_ico$DecodingResult
#define CXXBRIDGE1_ENUM_rust_ico$DecodingResult
enum class DecodingResult : ::std::uint8_t {
  Success = 0,
  FormatError = 1,
  ParameterError = 2,
  UnsupportedFeature = 3,
  IncompleteInput = 4,
  MemoryError = 5,
  OtherError = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$DecodingResult

#ifndef CXXBRIDGE1_ENUM_rust_ico$DirectoryParseResult
#define CXXBRIDGE1_ENUM_rust_ico$DirectoryParseResult
enum class DirectoryParseResult : ::std::uint8_t {
  Success = 0,
  InsufficientData = 1,
  InvalidSignature = 2,
  NoImages = 3,
  TruncatedDirectory = 4,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$DirectoryParseResult

#ifndef CXXBRIDGE1_ENUM_rust_ico$EmbeddedFormat
#define CXXBRIDGE1_ENUM_rust_ico$EmbeddedFormat
enum class EmbeddedFormat : ::std::uint8_t {
  Png = 0,
  Bmp = 1,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$EmbeddedFormat

#ifndef CXXBRIDGE1_ENUM_rust_ico$IcoColor
#define CXXBRIDGE1_ENUM_rust_ico$IcoColor
// ICO color type matching SkEncodedInfo::Color values.
enum class IcoColor : ::std::int32_t {
  RGBA = 6,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$IcoColor

#ifndef CXXBRIDGE1_ENUM_rust_ico$IcoAlpha
#define CXXBRIDGE1_ENUM_rust_ico$IcoAlpha
// ICO alpha type matching SkEncodedInfo::Alpha values.
enum class IcoAlpha : ::std::int32_t {
  Opaque = 0,
  Unpremul = 1,
  Binary = 2,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$IcoAlpha

#ifndef CXXBRIDGE1_ENUM_rust_ico$IcoFileType
#define CXXBRIDGE1_ENUM_rust_ico$IcoFileType
// ICO file type - either icon or cursor.
enum class IcoFileType : ::std::uint8_t {
  Icon = 0,
  Cursor = 1,
};
#endif // CXXBRIDGE1_ENUM_rust_ico$IcoFileType

#ifndef CXXBRIDGE1_STRUCT_rust_ico$IcoEntry
#define CXXBRIDGE1_STRUCT_rust_ico$IcoEntry
// Information about a single image entry in the ICO directory.
struct IcoEntry final {
  // Offset from start of file to the embedded image data.
  ::std::uint32_t offset CXX_DEFAULT_VALUE(0);
  // Size of the embedded image data in bytes.
  ::std::uint32_t size CXX_DEFAULT_VALUE(0);
  // Whether this entry contains PNG or BMP data.
  ::rust_ico::EmbeddedFormat format;
  // Hotspot X coordinate (only valid for CUR files).
  ::std::uint16_t hotspot_x CXX_DEFAULT_VALUE(0);
  // Hotspot Y coordinate (only valid for CUR files).
  ::std::uint16_t hotspot_y CXX_DEFAULT_VALUE(0);
  // Width of the image (0 means 256).
  ::std::uint8_t width CXX_DEFAULT_VALUE(0);
  // Height of the image (0 means 256).
  ::std::uint8_t height CXX_DEFAULT_VALUE(0);
  // Bits per pixel (may be 0 meaning unspecified).
  ::std::uint16_t bit_count CXX_DEFAULT_VALUE(0);

  using IsRelocatable = ::std::true_type;
};
#endif // CXXBRIDGE1_STRUCT_rust_ico$IcoEntry

#ifndef CXXBRIDGE1_STRUCT_rust_ico$DirectoryResult
#define CXXBRIDGE1_STRUCT_rust_ico$DirectoryResult
struct DirectoryResult final : public ::rust::Opaque {
  // Returns the parse result status.
  __declspec(dllexport) ::rust_ico::DirectoryParseResult status() const noexcept;

  // Returns the file type (Icon or Cursor).
  __declspec(dllexport) ::rust_ico::IcoFileType file_type() const noexcept;

  // Returns the number of images in the directory (0 if parse failed).
  __declspec(dllexport) ::std::uint32_t image_count() const noexcept;

  // Returns the entry at the given index. Panics if index >= image_count().
  __declspec(dllexport) ::rust_ico::IcoEntry get_entry(::std::uint32_t index) const noexcept;

  ~DirectoryResult() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_ico$DirectoryResult

#ifndef CXXBRIDGE1_STRUCT_rust_ico$ResultOfReader
#define CXXBRIDGE1_STRUCT_rust_ico$ResultOfReader
struct ResultOfReader final : public ::rust::Opaque {
  __declspec(dllexport) ::rust_ico::DecodingResult err() const noexcept;
  __declspec(dllexport) ::rust::Box<::rust_ico::Reader> unwrap() noexcept;
  ~ResultOfReader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_ico$ResultOfReader

#ifndef CXXBRIDGE1_STRUCT_rust_ico$Reader
#define CXXBRIDGE1_STRUCT_rust_ico$Reader
struct Reader final : public ::rust::Opaque {
  __declspec(dllexport) ::std::uint32_t width() const noexcept;
  __declspec(dllexport) ::std::uint32_t height() const noexcept;
  __declspec(dllexport) ::rust_ico::IcoColor color() const noexcept;
  __declspec(dllexport) ::rust_ico::IcoAlpha alpha() const noexcept;
  __declspec(dllexport) ::rust_ico::DecodingResult next_row(::rust::Slice<::std::uint8_t > buffer) noexcept;
  __declspec(dllexport) void reset_decode_state() noexcept;
  ~Reader() = delete;

private:
  friend ::rust::layout;
  struct layout {
    static ::std::size_t size() noexcept;
    static ::std::size_t align() noexcept;
  };
};
#endif // CXXBRIDGE1_STRUCT_rust_ico$Reader

extern "C" {
bool rust_ico$cxxbridge1$202$is_ico(::rust::stream::SkStreamAdapter &input) noexcept;

::rust_ico::DirectoryResult *rust_ico$cxxbridge1$202$parse_directory(::rust::stream::SkStreamAdapter &input) noexcept;
::std::size_t rust_ico$cxxbridge1$202$DirectoryResult$operator$sizeof() noexcept;
::std::size_t rust_ico$cxxbridge1$202$DirectoryResult$operator$alignof() noexcept;

::rust_ico::DirectoryParseResult rust_ico$cxxbridge1$202$DirectoryResult$status(::rust_ico::DirectoryResult const &self) noexcept;

::rust_ico::IcoFileType rust_ico$cxxbridge1$202$DirectoryResult$file_type(::rust_ico::DirectoryResult const &self) noexcept;

::std::uint32_t rust_ico$cxxbridge1$202$DirectoryResult$image_count(::rust_ico::DirectoryResult const &self) noexcept;

void rust_ico$cxxbridge1$202$DirectoryResult$get_entry(::rust_ico::DirectoryResult const &self, ::std::uint32_t index, ::rust_ico::IcoEntry *return$) noexcept;

::rust_ico::ResultOfReader *rust_ico$cxxbridge1$202$new_reader(::rust::stream::SkStreamAdapter &input, ::rust_ico::EmbeddedFormat format, ::std::uint32_t entry_size) noexcept;
::std::size_t rust_ico$cxxbridge1$202$ResultOfReader$operator$sizeof() noexcept;
::std::size_t rust_ico$cxxbridge1$202$ResultOfReader$operator$alignof() noexcept;

::rust_ico::DecodingResult rust_ico$cxxbridge1$202$ResultOfReader$err(::rust_ico::ResultOfReader const &self) noexcept;

::rust_ico::Reader *rust_ico$cxxbridge1$202$ResultOfReader$unwrap(::rust_ico::ResultOfReader &self) noexcept;
::std::size_t rust_ico$cxxbridge1$202$Reader$operator$sizeof() noexcept;
::std::size_t rust_ico$cxxbridge1$202$Reader$operator$alignof() noexcept;

::std::uint32_t rust_ico$cxxbridge1$202$Reader$width(::rust_ico::Reader const &self) noexcept;

::std::uint32_t rust_ico$cxxbridge1$202$Reader$height(::rust_ico::Reader const &self) noexcept;

::rust_ico::IcoColor rust_ico$cxxbridge1$202$Reader$color(::rust_ico::Reader const &self) noexcept;

::rust_ico::IcoAlpha rust_ico$cxxbridge1$202$Reader$alpha(::rust_ico::Reader const &self) noexcept;

::rust_ico::DecodingResult rust_ico$cxxbridge1$202$Reader$next_row(::rust_ico::Reader &self, ::rust::Slice<::std::uint8_t > buffer) noexcept;

void rust_ico$cxxbridge1$202$Reader$reset_decode_state(::rust_ico::Reader &self) noexcept;

void rust_ico$cxxbridge1$202$apply_and_mask(::rust::Slice<::std::uint8_t > pixels, ::rust::Slice<::std::uint8_t const> entry_data, ::std::uint32_t width, ::std::uint32_t height, ::std::uint32_t bytes_per_pixel, ::std::size_t row_bytes) noexcept;
} // extern "C"

// Returns true if the stream starts with an ICO or CUR signature.
// Reads up to 4 bytes from the stream.
__declspec(dllexport) bool is_ico(::rust::stream::SkStreamAdapter &input) noexcept {
  return rust_ico$cxxbridge1$202$is_ico(input);
}

// Parse the ICO directory from a stream.
__declspec(dllexport) ::rust::Box<::rust_ico::DirectoryResult> parse_directory(::rust::stream::SkStreamAdapter &input) noexcept {
  return ::rust::Box<::rust_ico::DirectoryResult>::from_raw(rust_ico$cxxbridge1$202$parse_directory(input));
}

::std::size_t DirectoryResult::layout::size() noexcept {
  return rust_ico$cxxbridge1$202$DirectoryResult$operator$sizeof();
}

::std::size_t DirectoryResult::layout::align() noexcept {
  return rust_ico$cxxbridge1$202$DirectoryResult$operator$alignof();
}

__declspec(dllexport) ::rust_ico::DirectoryParseResult DirectoryResult::status() const noexcept {
  return rust_ico$cxxbridge1$202$DirectoryResult$status(*this);
}

__declspec(dllexport) ::rust_ico::IcoFileType DirectoryResult::file_type() const noexcept {
  return rust_ico$cxxbridge1$202$DirectoryResult$file_type(*this);
}

__declspec(dllexport) ::std::uint32_t DirectoryResult::image_count() const noexcept {
  return rust_ico$cxxbridge1$202$DirectoryResult$image_count(*this);
}

__declspec(dllexport) ::rust_ico::IcoEntry DirectoryResult::get_entry(::std::uint32_t index) const noexcept {
  ::rust::MaybeUninit<::rust_ico::IcoEntry> return$;
  rust_ico$cxxbridge1$202$DirectoryResult$get_entry(*this, index, &return$.value);
  return ::std::move(return$.value);
}

// Create a new ICO image reader for a specific entry.
// `input` is the stream positioned at the embedded image data.
// `format` specifies whether it's PNG or BMP.
// `entry_size` is the total size from directory (used for AND mask calculation).
__declspec(dllexport) ::rust::Box<::rust_ico::ResultOfReader> new_reader(::rust::stream::SkStreamAdapter &input, ::rust_ico::EmbeddedFormat format, ::std::uint32_t entry_size) noexcept {
  return ::rust::Box<::rust_ico::ResultOfReader>::from_raw(rust_ico$cxxbridge1$202$new_reader(input, format, entry_size));
}

::std::size_t ResultOfReader::layout::size() noexcept {
  return rust_ico$cxxbridge1$202$ResultOfReader$operator$sizeof();
}

::std::size_t ResultOfReader::layout::align() noexcept {
  return rust_ico$cxxbridge1$202$ResultOfReader$operator$alignof();
}

__declspec(dllexport) ::rust_ico::DecodingResult ResultOfReader::err() const noexcept {
  return rust_ico$cxxbridge1$202$ResultOfReader$err(*this);
}

__declspec(dllexport) ::rust::Box<::rust_ico::Reader> ResultOfReader::unwrap() noexcept {
  return ::rust::Box<::rust_ico::Reader>::from_raw(rust_ico$cxxbridge1$202$ResultOfReader$unwrap(*this));
}

::std::size_t Reader::layout::size() noexcept {
  return rust_ico$cxxbridge1$202$Reader$operator$sizeof();
}

::std::size_t Reader::layout::align() noexcept {
  return rust_ico$cxxbridge1$202$Reader$operator$alignof();
}

__declspec(dllexport) ::std::uint32_t Reader::width() const noexcept {
  return rust_ico$cxxbridge1$202$Reader$width(*this);
}

__declspec(dllexport) ::std::uint32_t Reader::height() const noexcept {
  return rust_ico$cxxbridge1$202$Reader$height(*this);
}

__declspec(dllexport) ::rust_ico::IcoColor Reader::color() const noexcept {
  return rust_ico$cxxbridge1$202$Reader$color(*this);
}

__declspec(dllexport) ::rust_ico::IcoAlpha Reader::alpha() const noexcept {
  return rust_ico$cxxbridge1$202$Reader$alpha(*this);
}

__declspec(dllexport) ::rust_ico::DecodingResult Reader::next_row(::rust::Slice<::std::uint8_t > buffer) noexcept {
  return rust_ico$cxxbridge1$202$Reader$next_row(*this, buffer);
}

__declspec(dllexport) void Reader::reset_decode_state() noexcept {
  rust_ico$cxxbridge1$202$Reader$reset_decode_state(*this);
}

// Apply the AND mask from BMP-in-ICO entry data to decoded RGBA pixels.
// For non-32-bit BMPs, the AND mask follows pixel data in the ICO entry
// and defines which pixels are transparent.
// `pixels` is the decoded output buffer (4 bytes per pixel).
// `entry_data` is the raw BMP entry data from the ICO file.
// `row_bytes` is the destination byte stride.
// Transparent pixels have all 4 bytes set to 0.
__declspec(dllexport) void apply_and_mask(::rust::Slice<::std::uint8_t > pixels, ::rust::Slice<::std::uint8_t const> entry_data, ::std::uint32_t width, ::std::uint32_t height, ::std::uint32_t bytes_per_pixel, ::std::size_t row_bytes) noexcept {
  rust_ico$cxxbridge1$202$apply_and_mask(pixels, entry_data, width, height, bytes_per_pixel, row_bytes);
}
} // namespace rust_ico

extern "C" {
::rust_ico::DirectoryResult *cxxbridge1$box$rust_ico$DirectoryResult$alloc() noexcept;
void cxxbridge1$box$rust_ico$DirectoryResult$dealloc(::rust_ico::DirectoryResult *) noexcept;
void cxxbridge1$box$rust_ico$DirectoryResult$drop(::rust::Box<::rust_ico::DirectoryResult> *ptr) noexcept;

::rust_ico::ResultOfReader *cxxbridge1$box$rust_ico$ResultOfReader$alloc() noexcept;
void cxxbridge1$box$rust_ico$ResultOfReader$dealloc(::rust_ico::ResultOfReader *) noexcept;
void cxxbridge1$box$rust_ico$ResultOfReader$drop(::rust::Box<::rust_ico::ResultOfReader> *ptr) noexcept;

::rust_ico::Reader *cxxbridge1$box$rust_ico$Reader$alloc() noexcept;
void cxxbridge1$box$rust_ico$Reader$dealloc(::rust_ico::Reader *) noexcept;
void cxxbridge1$box$rust_ico$Reader$drop(::rust::Box<::rust_ico::Reader> *ptr) noexcept;
} // extern "C"

namespace rust {
inline namespace cxxbridge1 {
template <>
__declspec(dllexport) ::rust_ico::DirectoryResult *Box<::rust_ico::DirectoryResult>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_ico$DirectoryResult$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_ico::DirectoryResult>::allocation::dealloc(::rust_ico::DirectoryResult *ptr) noexcept {
  cxxbridge1$box$rust_ico$DirectoryResult$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_ico::DirectoryResult>::drop() noexcept {
  cxxbridge1$box$rust_ico$DirectoryResult$drop(this);
}
template <>
__declspec(dllexport) ::rust_ico::ResultOfReader *Box<::rust_ico::ResultOfReader>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_ico$ResultOfReader$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_ico::ResultOfReader>::allocation::dealloc(::rust_ico::ResultOfReader *ptr) noexcept {
  cxxbridge1$box$rust_ico$ResultOfReader$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_ico::ResultOfReader>::drop() noexcept {
  cxxbridge1$box$rust_ico$ResultOfReader$drop(this);
}
template <>
__declspec(dllexport) ::rust_ico::Reader *Box<::rust_ico::Reader>::allocation::alloc() noexcept {
  return cxxbridge1$box$rust_ico$Reader$alloc();
}
template <>
__declspec(dllexport) void Box<::rust_ico::Reader>::allocation::dealloc(::rust_ico::Reader *ptr) noexcept {
  cxxbridge1$box$rust_ico$Reader$dealloc(ptr);
}
template <>
__declspec(dllexport) void Box<::rust_ico::Reader>::drop() noexcept {
  cxxbridge1$box$rust_ico$Reader$drop(this);
}
} // namespace cxxbridge1
} // namespace rust
