// Automatically @generated C++ bindings for the following Rust crate:
// cbor
// Features: always_specialize_generics_in_cpp_api_from_rust

#pragma once

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wreturn-type-c-linkage"
#pragma clang diagnostic ignored "-Wunused-private-field"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wignored-attributes"
#pragma clang diagnostic ignored "-Wshadow"
#include <array>
#include <bit>
#include <compare>
#include <cstddef>
#include <cstdint>
#include <cstring>
#include <memory>
#include <new>
#include <optional>
#include <ostream>
#include <string_view>
#include <type_traits>
#include <utility>

#include "third_party/crubit/support/annotations_internal.h"
#include "third_party/crubit/support/internal/check.h"
#include "third_party/crubit/support/internal/check_no_mutable_aliasing.h"
#include "third_party/crubit/support/internal/memswap.h"
#include "third_party/crubit/support/internal/slot.h"
#include "third_party/crubit/support/lifetime_annotations.h"
#include "third_party/crubit/support/rs_std/option.h"
#include "third_party/crubit/support/rs_std/result.h"
#include "third_party/crubit/support/rs_std/rs_alloc.h"
#include "third_party/crubit/support/rs_std/rs_core.h"
#include "third_party/crubit/support/rs_std/slice_ref.h"
#include "third_party/crubit/support/rs_std/str_ref.h"
#include "third_party/crubit/support/rs_std/traits.h"
#include "third_party/crubit/support/rs_std/vec.h"

namespace cbor::rust {
struct Error;
}

namespace cbor::rust {
struct MapEntry;
struct MapKey;
struct MapKeyKind;
struct Value;
struct ValueKind;
}  // namespace cbor::rust

namespace cbor::rust {

// Generated from: ../../components/cbor/rust/reader.rs;l=144
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: CborEvent") alignas(8)
    [[clang::trivial_abi]] CborEvent final {
 public:
  // `cbor::CborEvent` doesn't implement the `Default` trait
  CborEvent() = delete;

  //  Integer value (major types 0 and 1) representable as an `i64`.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=146
  static ::cbor::rust::CborEvent MakeInt(::std::int64_t __param_0);

  //  Validated UTF-8 text string slice (major type 3).
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=151
  static ::cbor::rust::CborEvent MakeString(rs_std::StrRef __param_0);

  //  Text string slice with invalid UTF-8 (when `allow_invalid_utf8` is
  //  enabled in `Config`).
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=154
  static ::cbor::rust::CborEvent MakeInvalidUtf8(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  //  Start of a byte string (major type 2). The payload is the total byte
  //  length.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=157
  static ::cbor::rust::CborEvent MakeBytesStart(::std::uint64_t __param_0);

  //  Chunk of byte string data yielded while streaming.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=159
  static ::cbor::rust::CborEvent MakeBytesChunk(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  //  End of the current byte string.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=161
  static constexpr CborEvent MakeBytesEnd();

  //  Start of an array (major type 4). The payload is the number of elements
  //  in the array.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=164
  static ::cbor::rust::CborEvent MakeArrayStart(::std::uint64_t __param_0);

  //  Start of a map (major type 5). The payload is the number of key-value
  //  pairs in the map.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=167
  static ::cbor::rust::CborEvent MakeMapStart(::std::uint64_t __param_0);

  //  Boolean simple value (`true` or `false`).
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=169
  static ::cbor::rust::CborEvent MakeBoolean(bool __param_0);

  //  Null simple value (0x16).
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=171
  static constexpr CborEvent MakeNull();

  //  Undefined simple value (0x17).
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=173
  static constexpr CborEvent MakeUndefined();

  //  Parser has successfully completed parsing the root element.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=175
  static constexpr CborEvent MakeDone();

  //  The reader requires more data to yield the next event. The payload is
  //  the minimal amount of total bytes (from the start of the current event)
  //  required to proceed.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=179
  static ::cbor::rust::CborEvent MakeNeedsMoreData(::std::uintptr_t __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~CborEvent() = default;
  CborEvent(CborEvent&&) = default;
  CborEvent& operator=(CborEvent&&) = default;

  // Clone::clone
  CborEvent(const CborEvent&) noexcept;

  // Clone::clone_from
  ::cbor::rust::CborEvent& operator=(const CborEvent&) noexcept;

  CborEvent(::crubit::UnsafeRelocateTag, CborEvent&& value);

  // Generated from: ../../components/cbor/rust/reader.rs;l=143
  bool operator==(::cbor::rust::CborEvent const& other) const;

  struct alignas(8) __crubit_Int_struct {
   public:
    ::std::int64_t __field0;
  };
  struct alignas(8) __crubit_String_struct {
    rs_std::StrRef __field0;
  };
  struct alignas(8) __crubit_InvalidUtf8_struct {
    rs_std::SliceRef<const ::std::uint8_t> __field0;
  };
  struct alignas(8) __crubit_BytesStart_struct {
    ::std::uint64_t __field0;
  };
  struct alignas(8) __crubit_BytesChunk_struct {
    rs_std::SliceRef<const ::std::uint8_t> __field0;
  };
  // Variant BytesEnd has no size, so no struct is generated.

  struct alignas(8) __crubit_ArrayStart_struct {
    ::std::uint64_t __field0;
  };
  struct alignas(8) __crubit_MapStart_struct {
    ::std::uint64_t __field0;
  };
  struct alignas(8) __crubit_Boolean_struct {
    bool __field0;
  };
  // Variant Null has no size, so no struct is generated.

  // Variant Undefined has no size, so no struct is generated.

  // Variant Done has no size, so no struct is generated.

  struct alignas(8) __crubit_NeedsMoreData_struct {
    ::std::uintptr_t __field0;
  };

  enum class Tag : ::std::uint32_t {
    Int = 0,
    String = 1,
    InvalidUtf8 = 2,
    BytesStart = 3,
    BytesChunk = 4,
    BytesEnd = 5,
    ArrayStart = 6,
    MapStart = 7,
    Boolean = 8,
    Null = 9,
    Undefined = 10,
    Done = 11,
    NeedsMoreData = 12,
  };

 public:
  Tag tag;

 public:
  union {
    __crubit_Int_struct Int;
    __crubit_String_struct String;
    __crubit_InvalidUtf8_struct InvalidUtf8;
    __crubit_BytesStart_struct BytesStart;
    __crubit_BytesChunk_struct BytesChunk;
    __crubit_ArrayStart_struct ArrayStart;
    __crubit_MapStart_struct MapStart;
    __crubit_Boolean_struct Boolean;
    __crubit_NeedsMoreData_struct NeedsMoreData;
  };

 private:
  struct PrivateTagCtorTag {};
  constexpr CborEvent(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from: ../../components/cbor/rust/reader.rs;l=79
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: Config") alignas(8)
    [[clang::trivial_abi]] Config final {
 public:
  // Type is not a C++ aggregate: Type has a manual `Default` implementation

  // Default::default
  Config();

  // No custom `Drop` impl and no custom "drop glue" required
  ~Config() = default;
  Config(Config&&) = default;
  Config& operator=(Config&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Config(const Config&) = default;
  Config& operator=(const Config&) = default;
  Config(::crubit::UnsafeRelocateTag, Config&& value);

  union {
    // Generated from: ../../components/cbor/rust/reader.rs;l=80
    bool allow_invalid_utf8;
  };
  union {
    // Generated from: ../../components/cbor/rust/reader.rs;l=81
    ::std::uintptr_t max_nesting_level;
  };

 private:
  static void __crubit_field_offset_assertions();
};

//  Incremental, zero-copy CBOR decoder state machine providing the C++
//  `Decoder` interface.
//
//  Returned events (e.g. `String`, `BytesChunk`) borrow directly from the input
//  slice passed to `next_event`. Callers must copy extracted data if the
//  input buffer does not outlive its use. If `next_event` returns
//  `Error::IncompleteCborData`, the input slice is unconsumed; callers
//  must retain the remaining bytes and prepend/concatenate them with the next
//  chunk.
//
// Generated from: ../../components/cbor/rust/reader.rs;l=297
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: Decoder") alignas(8)
    [[clang::trivial_abi]] Decoder final {
 public:
  // Default::default
  Decoder();

  // Drop::drop
  ~Decoder();

  Decoder(Decoder&&) noexcept;
  ::cbor::rust::Decoder& operator=(Decoder&&) noexcept;

  // `cbor::Decoder` doesn't implement the `Clone` trait
  Decoder(const Decoder&) = delete;
  Decoder& operator=(const Decoder&) = delete;
  Decoder(::crubit::UnsafeRelocateTag, Decoder&& value);

  // Generated from: ../../components/cbor/rust/reader.rs;l=417
  rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error> read_complete_value(
      rs_std::SliceRef<const ::std::uint8_t>& data);

  // Generated from: ../../components/cbor/rust/reader.rs;l=437
  rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>
  read_complete_bytestring(rs_std::SliceRef<const ::std::uint8_t>& data);

  // Generated from: ../../components/cbor/rust/reader.rs;l=463
  rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error> next_event(
      rs_std::SliceRef<const ::std::uint8_t>& data);

  // Generated from: ../../components/cbor/rust/reader.rs;l=615
  static ::cbor::rust::Decoder new_();

  // Generated from: ../../components/cbor/rust/reader.rs;l=619
  static ::cbor::rust::Decoder with_config(::cbor::rust::Config config);

  //  Returns true if the parser has exactly and structurally completed
  //  parsing the top-level CBOR element and its children without
  //  trailing/missing data.
  //
  // Generated from: ../../components/cbor/rust/reader.rs;l=626
  bool is_complete() const;

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> state;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> nesting_stack;
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 16> config;

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from: ../../components/cbor/rust/reader.rs;l=13
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: Error") alignas(4)
    [[clang::trivial_abi]] Error final {
 public:
  // `cbor::Error` doesn't implement the `Default` trait
  Error() = delete;

  // Generated from: ../../components/cbor/rust/reader.rs;l=14
  static constexpr Error MakeUnsupportedMajorType();

  // Generated from: ../../components/cbor/rust/reader.rs;l=15
  static constexpr Error MakeUnknownAdditionalInfo();

  // Generated from: ../../components/cbor/rust/reader.rs;l=16
  static constexpr Error MakeIncompleteCborData();

  // Generated from: ../../components/cbor/rust/reader.rs;l=17
  static constexpr Error MakeIncorrectMapKeyType();

  // Generated from: ../../components/cbor/rust/reader.rs;l=18
  static constexpr Error MakeTooMuchNesting();

  // Generated from: ../../components/cbor/rust/reader.rs;l=19
  static constexpr Error MakeInvalidUtf8();

  // Generated from: ../../components/cbor/rust/reader.rs;l=20
  static constexpr Error MakeExtraneousData();

  // Generated from: ../../components/cbor/rust/reader.rs;l=22
  static constexpr Error MakeNonMinimalCborEncoding();

  // Generated from: ../../components/cbor/rust/reader.rs;l=23
  static constexpr Error MakeUnsupportedSimpleValue();

  // Generated from: ../../components/cbor/rust/reader.rs;l=24
  static constexpr Error MakeUnsupportedFloatingPointValue();

  // Generated from: ../../components/cbor/rust/reader.rs;l=25
  static constexpr Error MakeOutOfRangeIntegerValue();

  // Generated from: ../../components/cbor/rust/reader.rs;l=27
  static constexpr Error MakeUnknownError();

  // Generated from: ../../components/cbor/rust/reader.rs;l=28
  static constexpr Error MakeOutOfOrderOrDuplicateKey();

  // No custom `Drop` impl and no custom "drop glue" required
  ~Error() = default;
  Error(Error&&) = default;
  Error& operator=(Error&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Error(const Error&) = default;
  Error& operator=(const Error&) = default;
  Error(::crubit::UnsafeRelocateTag, Error&& value);

  // Generated from: ../../components/cbor/rust/reader.rs;l=34
  rs_std::StrRef to_str() const;

  // Generated from: ../../components/cbor/rust/reader.rs;l=12
  bool operator==(::cbor::rust::Error const& other) const;

  // AbslStringify and std::ostream support via std::fmt::Display
  template <typename Sink, typename Str = rs::alloc::string::String>
  friend void AbslStringify(Sink& sink, const Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader5ErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    AbslStringify(sink, ::std::move(s).AssumeInitAndTakeValue().as_str());
  }
  template <typename Str = rs::alloc::string::String>
  friend ::std::ostream& operator<<(::std::ostream& os, const Error& self) {
    crubit::Slot<Str> s;
    __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader5ErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
        self, s.Get());
    return os << ::std::string_view(
               ::std::move(s).AssumeInitAndTakeValue().as_str());
  }

  // Variant UnsupportedMajorType has no size, so no struct is generated.

  // Variant UnknownAdditionalInfo has no size, so no struct is generated.

  // Variant IncompleteCborData has no size, so no struct is generated.

  // Variant IncorrectMapKeyType has no size, so no struct is generated.

  // Variant TooMuchNesting has no size, so no struct is generated.

  // Variant InvalidUtf8 has no size, so no struct is generated.

  // Variant ExtraneousData has no size, so no struct is generated.

  // Variant NonMinimalCborEncoding has no size, so no struct is generated.

  // Variant UnsupportedSimpleValue has no size, so no struct is generated.

  // Variant UnsupportedFloatingPointValue has no size, so no struct is
  // generated.

  // Variant OutOfRangeIntegerValue has no size, so no struct is generated.

  // Variant UnknownError has no size, so no struct is generated.

  // Variant OutOfOrderOrDuplicateKey has no size, so no struct is generated.

  enum class Tag : ::std::uint32_t {
    UnsupportedMajorType = 1,
    UnknownAdditionalInfo = 2,
    IncompleteCborData = 3,
    IncorrectMapKeyType = 4,
    TooMuchNesting = 5,
    InvalidUtf8 = 6,
    ExtraneousData = 7,
    NonMinimalCborEncoding = 9,
    UnsupportedSimpleValue = 10,
    UnsupportedFloatingPointValue = 11,
    OutOfRangeIntegerValue = 12,
    UnknownError = 14,
    OutOfOrderOrDuplicateKey = 15,
  };

 public:
  Tag tag;

 private:
  struct PrivateTagCtorTag {};
  constexpr Error(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace cbor::rust

namespace cbor::rust {
static constexpr ::std::uintptr_t MAX_DEPTH = 16;
}

namespace cbor::rust {

//  A wrapper around `Vec<MapEntry<'a>>` that represents a collection whose
//  elements are guaranteed to be sorted by key and unique.
//
// Generated from: ../../components/cbor/rust/values.rs;l=176
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: Map") alignas(8)
    [[clang::trivial_abi]] Map final {
 public:
  // Default::default
  Map();

  // Drop::drop
  ~Map();

  Map(Map&&) noexcept;
  ::cbor::rust::Map& operator=(Map&&) noexcept;

  // Clone::clone
  Map(const Map&) noexcept;

  // Clone::clone_from
  ::cbor::rust::Map& operator=(const Map&) noexcept;

  Map(::crubit::UnsafeRelocateTag, Map&& value);

  // Generated from: ../../components/cbor/rust/values.rs;l=179
  static ::cbor::rust::Map new_();

  //  Creates a new `Map` from a `Vec` without checking if the elements
  //  are sorted or unique in release builds.
  //
  //  Caller must ensure that `vec` is sorted by key and unique.
  //
  // Generated from: ../../components/cbor/rust/values.rs;l=187
  static ::cbor::rust::Map from_sorted_vec_unchecked(
      rs_std::Vec<::cbor::rust::MapEntry> vec);

  //  Looks up a value by its `MapKey` using binary search.
  //
  // Generated from: ../../components/cbor/rust/values.rs;l=196
  rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull> get(
      ::cbor::rust::MapKey const* $(__anon2) crubit_nonnull key
          CRUBIT_LIFETIME_BOUND) const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Generated from: ../../components/cbor/rust/values.rs;l=175
  bool operator==(::cbor::rust::Map const& other) const;

  // Generated from: ../../components/cbor/rust/values.rs;l=202
  explicit Map(rs_std::Vec<::cbor::rust::MapEntry> value);

  // Error generating bindings for struct `cbor::Map` defined at
  // ../../components/cbor/rust/values.rs;l=176: Failed to format
  // IntoIterator::IntoIter: Generic types are not supported yet (b/259749095)

  // Error generating bindings for struct `cbor::Map` defined at
  // ../../components/cbor/rust/values.rs;l=176: Failed to format
  // IntoIterator::IntoIter: Generic types are not supported yet (b/259749095)

 private:
  // Field type has been replaced with a blob of bytes: Field is private
  ::std::array<unsigned char, 24> __field0;

 private:
  static void __crubit_field_offset_assertions();
};

//  A MapKey is the type of values that can key a CBOR map.
//
// Generated from: ../../components/cbor/rust/values.rs;l=246
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: MapKey") alignas(8)
    [[clang::trivial_abi]] MapKey final {
 public:
  // Default::default
  MapKey();

  // Generated from: ../../components/cbor/rust/values.rs;l=256
  static ::cbor::rust::MapKey MakeInt(::std::int64_t __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=257
  static ::cbor::rust::MapKey MakeBytestring(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=258
  static ::cbor::rust::MapKey MakeString(rs_std::StrRef __param_0);

  //  Test-only `Value::Type::INVALID_UTF8` key from C++; encoded as a text
  //  string.
  //
  // Generated from: ../../components/cbor/rust/values.rs;l=261
  static ::cbor::rust::MapKey MakeInvalidUtf8(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  // No custom `Drop` impl and no custom "drop glue" required
  ~MapKey() = default;
  MapKey(MapKey&&) = default;
  MapKey& operator=(MapKey&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  MapKey(const MapKey&) = default;
  MapKey& operator=(const MapKey&) = default;
  MapKey(::crubit::UnsafeRelocateTag, MapKey&& value);

  // Generated from: ../../components/cbor/rust/values.rs;l=282
  ::cbor::rust::MapKeyKind kind() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=291
  rs_std::Option<::std::int64_t> as_int() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=298
  rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>> as_bytestring() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=305
  rs_std::Option<rs_std::StrRef> as_string() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=312
  rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>> as_invalid_utf8()
      const;

  // Generated from: ../../components/cbor/rust/values.rs;l=128
  explicit operator ::cbor::rust::Value() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=321
  bool operator==(::cbor::rust::MapKey const& other) const;

  ::std::strong_ordering operator<=>(const MapKey& other) const;

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 24> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr MapKey(PrivateBytesTag, ::std::array<unsigned char, 24> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from: ../../components/cbor/rust/values.rs;l=237
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: MapKeyKind") alignas(4)
    [[clang::trivial_abi]] MapKeyKind final {
 public:
  // `cbor::MapKeyKind` doesn't implement the `Default` trait
  MapKeyKind() = delete;

  // Generated from: ../../components/cbor/rust/values.rs;l=238
  static constexpr MapKeyKind MakeInt();

  // Generated from: ../../components/cbor/rust/values.rs;l=239
  static constexpr MapKeyKind MakeBytestring();

  // Generated from: ../../components/cbor/rust/values.rs;l=240
  static constexpr MapKeyKind MakeString();

  // Generated from: ../../components/cbor/rust/values.rs;l=241
  static constexpr MapKeyKind MakeInvalidUtf8();

  // No custom `Drop` impl and no custom "drop glue" required
  ~MapKeyKind() = default;
  MapKeyKind(MapKeyKind&&) = default;
  MapKeyKind& operator=(MapKeyKind&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  MapKeyKind(const MapKeyKind&) = default;
  MapKeyKind& operator=(const MapKeyKind&) = default;
  MapKeyKind(::crubit::UnsafeRelocateTag, MapKeyKind&& value);

  // Generated from: ../../components/cbor/rust/values.rs;l=236
  bool operator==(::cbor::rust::MapKeyKind const& other) const;

  ::std::strong_ordering operator<=>(const MapKeyKind& other) const;

  // Variant Int has no size, so no struct is generated.

  // Variant Bytestring has no size, so no struct is generated.

  // Variant String has no size, so no struct is generated.

  // Variant InvalidUtf8 has no size, so no struct is generated.

  enum class Tag : ::std::uint32_t {
    Int = 0,
    Bytestring = 1,
    String = 2,
    InvalidUtf8 = 3,
  };

 public:
  Tag tag;

 private:
  struct PrivateTagCtorTag {};
  constexpr MapKeyKind(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

//  Value represents a CBOR structure.
//
//  Integers are mapped to `i64` despite CBOR having 65-bit integers. CBOR
//  integers outside the range of an `i64` result in an error during parsing.
//  Byte strings are returned as `Bytes`s in order to avoid copies.
//
//  `Default` is derived because Crubit requires it to generate a C++ move
//  constructor; `Null` is the natural empty value.
//
// Generated from: ../../components/cbor/rust/values.rs;l=40
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: Value") alignas(8)
    [[clang::trivial_abi]] Value final {
 public:
  // Default::default
  Value();

  // Generated from: ../../components/cbor/rust/values.rs;l=41
  static ::cbor::rust::Value MakeInt(::std::int64_t __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=42
  static ::cbor::rust::Value MakeBytestring(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=43
  static ::cbor::rust::Value MakeString(rs_std::StrRef __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=44
  static ::cbor::rust::Value MakeArray(
      rs_std::Vec<::cbor::rust::Value> __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=45
  static ::cbor::rust::Value MakeMap(::cbor::rust::Map __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=46
  static ::cbor::rust::Value MakeBoolean(bool __param_0);

  // Generated from: ../../components/cbor/rust/values.rs;l=48
  static Value MakeNull();

  // Generated from: ../../components/cbor/rust/values.rs;l=49
  static Value MakeUndefined();

  // Generated from: ../../components/cbor/rust/values.rs;l=50
  static ::cbor::rust::Value MakeInvalidUtf8(
      rs_std::SliceRef<const ::std::uint8_t> __param_0);

  // Drop::drop
  ~Value();

  Value(Value&&) noexcept;
  ::cbor::rust::Value& operator=(Value&&) noexcept;

  // Clone::clone
  Value(const Value&) noexcept;

  // Clone::clone_from
  ::cbor::rust::Value& operator=(const Value&) noexcept;

  Value(::crubit::UnsafeRelocateTag, Value&& value);

  // Generated from: ../../components/cbor/rust/values.rs;l=55
  rs_std::Vec<::std::uint8_t> to_bytes() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=60
  void append_bytes(rs_std::Vec<::std::uint8_t>& out) const;

  // Generated from: ../../components/cbor/rust/values.rs;l=64
  ::cbor::rust::ValueKind kind() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=78
  rs_std::Option<::std::int64_t> as_int() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=85
  rs_std::Option<bool> as_bool() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=92
  rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>> as_bytestring() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=99
  rs_std::Option<rs_std::StrRef> as_string() const;

  // Generated from: ../../components/cbor/rust/values.rs;l=106
  rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>> as_invalid_utf8()
      const;

  // Generated from: ../../components/cbor/rust/values.rs;l=113
  rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>> as_array()
      const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Generated from: ../../components/cbor/rust/values.rs;l=120
  rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>> map_entries()
      const& $(__anon1) CRUBIT_LIFETIME_BOUND;

  // Generated from: ../../components/cbor/rust/values.rs;l=39
  bool operator==(::cbor::rust::Value const& other) const;

  // Generated from: ../../components/cbor/rust/values.rs;l=128
  explicit Value(::cbor::rust::MapKey value);

 private:
  // Field type has been replaced with a blob of bytes: No support for bindings
  // of individual non-repr(C) `enum`s
  ::std::array<unsigned char, 32> __opaque_blob_of_bytes;

 private:
  struct PrivateBytesTag {};
  constexpr Value(PrivateBytesTag, ::std::array<unsigned char, 32> bytes)
      : __opaque_blob_of_bytes(bytes) {}

 private:
  static void __crubit_field_offset_assertions();
};

// Generated from: ../../components/cbor/rust/values.rs;l=141
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: MapEntry") alignas(8)
    [[clang::trivial_abi]] MapEntry final {
 public:
  // Generated from: ../../components/cbor/rust/values.rs;l=140
  bool operator==(::cbor::rust::MapEntry const& other) const;

  // Constructor from `<cbor::MapEntry<'a> as
  // core::convert::From<(cbor::MapKey<'a>, cbor::Value<'a>)>>` is suppressed
  // because `MapEntry` is a C++ aggregate.

  // Generated from: ../../components/cbor/rust/values.rs;l=142
  ::cbor::rust::MapKey key{};
  // Generated from: ../../components/cbor/rust/values.rs;l=143
  ::cbor::rust::Value value{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace cbor::rust

namespace cbor::rust {

// Generated from: ../../components/cbor/rust/reader.rs;l=92
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: ParseResult") alignas(8)
    [[clang::trivial_abi]] ParseResult final {
 public:
  // Generated from: ../../components/cbor/rust/reader.rs;l=91
  bool operator==(::cbor::rust::ParseResult const& other) const;

  // Generated from: ../../components/cbor/rust/reader.rs;l=93
  ::cbor::rust::Value value{};
  // Generated from: ../../components/cbor/rust/reader.rs;l=94
  ::std::uintptr_t bytes_consumed{};

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace cbor::rust

namespace cbor::rust {

// Generated from: ../../components/cbor/rust/values.rs;l=18
struct CRUBIT_INTERNAL_RUST_TYPE(":: cbor :: ValueKind") alignas(4)
    [[clang::trivial_abi]] ValueKind final {
 public:
  // `cbor::ValueKind` doesn't implement the `Default` trait
  ValueKind() = delete;

  // Generated from: ../../components/cbor/rust/values.rs;l=19
  static constexpr ValueKind MakeInt();

  // Generated from: ../../components/cbor/rust/values.rs;l=20
  static constexpr ValueKind MakeBytestring();

  // Generated from: ../../components/cbor/rust/values.rs;l=21
  static constexpr ValueKind MakeString();

  // Generated from: ../../components/cbor/rust/values.rs;l=22
  static constexpr ValueKind MakeArray();

  // Generated from: ../../components/cbor/rust/values.rs;l=23
  static constexpr ValueKind MakeMap();

  // Generated from: ../../components/cbor/rust/values.rs;l=24
  static constexpr ValueKind MakeBoolean();

  // Generated from: ../../components/cbor/rust/values.rs;l=26
  static constexpr ValueKind MakeNull();

  // Generated from: ../../components/cbor/rust/values.rs;l=27
  static constexpr ValueKind MakeUndefined();

  // Generated from: ../../components/cbor/rust/values.rs;l=28
  static constexpr ValueKind MakeInvalidUtf8();

  // No custom `Drop` impl and no custom "drop glue" required
  ~ValueKind() = default;
  ValueKind(ValueKind&&) = default;
  ValueKind& operator=(ValueKind&&) = default;

  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  ValueKind(const ValueKind&) = default;
  ValueKind& operator=(const ValueKind&) = default;
  ValueKind(::crubit::UnsafeRelocateTag, ValueKind&& value);

  // Generated from: ../../components/cbor/rust/values.rs;l=17
  bool operator==(::cbor::rust::ValueKind const& other) const;

  // Variant Int has no size, so no struct is generated.

  // Variant Bytestring has no size, so no struct is generated.

  // Variant String has no size, so no struct is generated.

  // Variant Array has no size, so no struct is generated.

  // Variant Map has no size, so no struct is generated.

  // Variant Boolean has no size, so no struct is generated.

  // Variant Null has no size, so no struct is generated.

  // Variant Undefined has no size, so no struct is generated.

  // Variant InvalidUtf8 has no size, so no struct is generated.

  enum class Tag : ::std::uint32_t {
    Int = 0,
    Bytestring = 1,
    String = 2,
    Array = 3,
    Map = 4,
    Boolean = 5,
    Null = 7,
    Undefined = 8,
    InvalidUtf8 = 9,
  };

 public:
  Tag tag;

 private:
  struct PrivateTagCtorTag {};
  constexpr ValueKind(PrivateTagCtorTag, Tag tag) : tag(tag) {}

 private:
  static void __crubit_field_offset_assertions();
};

}  // namespace cbor::rust

namespace cbor::rust {

//  Parses CBOR bytes into a `Value`.
//
//  Returns the parsed value and the number of bytes consumed.
//
// Generated from: ../../components/cbor/rust/reader.rs;l=100
rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>
parse_with_config(rs_std::SliceRef<const ::std::uint8_t> input,
                  ::cbor::rust::Config config);

}  // namespace cbor::rust

namespace cbor::rust {

// Generated from: ../../components/cbor/rust/values.rs;l=169
void vec_push_entry(rs_std::Vec<::cbor::rust::MapEntry>& vec,
                    ::cbor::rust::MapEntry entry);

// Generated from: ../../components/cbor/rust/values.rs;l=161
void vec_push_value(rs_std::Vec<::cbor::rust::Value>& vec,
                    ::cbor::rust::Value value);

// Generated from: ../../components/cbor/rust/values.rs;l=165
rs_std::Vec<::cbor::rust::MapEntry> vec_with_capacity_entries(
    ::std::uintptr_t capacity);

// Generated from: ../../components/cbor/rust/values.rs;l=157
rs_std::Vec<::cbor::rust::Value> vec_with_capacity_values(
    ::std::uintptr_t capacity);

}  // namespace cbor::rust

namespace cbor::rust {

//  write serialises a Value to a new CBOR byte vector.
//
// Generated from: ../../components/cbor/rust/writer.rs;l=38
rs_std::Vec<::std::uint8_t> write(::cbor::rust::Value const& val);

}  // namespace cbor::rust

template <>
struct rs_std::impl<::cbor::rust::CborEvent, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::CborEvent<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/reader.rs;l=143: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::Error, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::cbor::rust::Error, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::Error as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/reader.rs;l=12: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::Error, ::rs::core::fmt::Display> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::Error as
  // core::fmt::Display>::fmt` defined at
  // ../../components/cbor/rust/reader.rs;l=72: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::Map, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::Map<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=175: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::Map, ::rs::core::iter::IntoIterator> {
  static constexpr bool kIsImplemented = true;
  // Generated from: ../../components/cbor/rust/values.rs;l=218
  using Item CRUBIT_INTERNAL_RUST_TYPE(
      "<cbor::Map<'a> as :: core :: iter :: IntoIterator>::Item") =
      ::cbor::rust::MapEntry;

  // Error generating bindings for associated type `<cbor::Map<'a> as
  // core::iter::IntoIterator>::IntoIter` defined at
  // ../../components/cbor/rust/values.rs;l=219: Generic types are not supported
  // yet (b/259749095)

  // Error generating bindings for associated function `<cbor::Map<'a> as
  // core::iter::IntoIterator>::into_iter` defined at
  // ../../components/cbor/rust/values.rs;l=221: Error formatting function
  // return type `alloc::vec::into_iter::IntoIter<cbor::MapEntry<'a>>`: Generic
  // types are not supported yet (b/259749095)
};

template <>
struct rs_std::impl<::cbor::rust::MapEntry, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::MapEntry<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=140: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::MapKey, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::cbor::rust::MapKey, ::rs::core::cmp::Ord> {
  static constexpr bool kIsImplemented = true;

  // Generated from: ../../components/cbor/rust/values.rs;l=335
  static ::rs::core::cmp::Ordering cmp(::cbor::rust::MapKey const& self,
                                       ::cbor::rust::MapKey const& other);
};

template <>
struct rs_std::impl<::cbor::rust::MapKey, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::MapKey<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=245: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::MapKeyKind, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::cbor::rust::MapKeyKind, ::rs::core::cmp::Ord> {
  static constexpr bool kIsImplemented = true;

  // Generated from: ../../components/cbor/rust/values.rs;l=236
  static ::rs::core::cmp::Ordering cmp(::cbor::rust::MapKeyKind const& self,
                                       ::cbor::rust::MapKeyKind const& other);
};

template <>
struct rs_std::impl<::cbor::rust::MapKeyKind, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::MapKeyKind as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=236: Error formatting function
  // return type `core::result::Result<(), core::fmt::Error>`: Failed to format
  // type for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are
  // not supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::ParseResult, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::ParseResult<'a>
  // as core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/reader.rs;l=91: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::Value, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::Value<'a> as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=39: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};

template <>
struct rs_std::impl<::cbor::rust::ValueKind, ::rs::core::cmp::Eq> {
  static constexpr bool kIsImplemented = true;
};

template <>
struct rs_std::impl<::cbor::rust::ValueKind, ::rs::core::fmt::Debug> {
  static constexpr bool kIsImplemented = true;

  // Error generating bindings for associated function `<cbor::ValueKind as
  // core::fmt::Debug>::fmt` defined at
  // ../../components/cbor/rust/values.rs;l=17: Error formatting function return
  // type `core::result::Result<(), core::fmt::Error>`: Failed to format type
  // for the definition of `core::fmt::Error`: Zero-sized types (ZSTs) are not
  // supported (b/258259459)
};
// clang-format off
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: cbor :: MapEntry < 'static > >")
    rs_std::Vec<::cbor::rust::MapEntry>
    : public rs_std::VecBase<::cbor::rust::MapEntry> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::cbor::rust::MapEntry>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::cbor::rust::MapEntry>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::cbor::rust::MapEntry>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    ":: alloc :: vec :: Vec < :: cbor :: Value < 'static > >")
    rs_std::Vec<::cbor::rust::Value>
    : public rs_std::VecBase<::cbor::rust::Value> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::cbor::rust::Value>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::cbor::rust::Value>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::cbor::rust::Value>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(":: alloc :: vec :: Vec < u8 >")
    rs_std::Vec<::std::uint8_t> : public rs_std::VecBase<::std::uint8_t> {
 public:
  // Default::default
  Vec() noexcept;

  // Clone::clone
  Vec(const Vec&) noexcept;

  // Clone::clone_from
  rs_std::Vec<::std::uint8_t>& operator=(const Vec&) noexcept;

  Vec(Vec&&) noexcept;
  rs_std::Vec<::std::uint8_t>& operator=(Vec&&) noexcept;
  Vec(::crubit::UnsafeRelocateTag, Vec&& value);

  ~Vec() noexcept;

 private:
  friend class rs_std::VecBase<::std::uint8_t>;
  static constexpr std::size_t kPtrOffset = 8;
  static constexpr std::size_t kCapOffset = 0;
  static constexpr std::size_t kLenOffset = 16;
  unsigned char storage_[24];
};
#endif

template <>
struct rs_std::impl<::cbor::rust::Value,
                    ::rs::core::convert::TryFrom<::cbor::rust::CborEvent>> {
  static constexpr bool kIsImplemented = true;
  // Generated from: ../../components/cbor/rust/reader.rs;l=183
  using Error CRUBIT_INTERNAL_RUST_TYPE(
      "<cbor::Value<'a> as :: core :: convert :: TryFrom>::Error") =
      ::cbor::rust::CborEvent;

  // Generated from: ../../components/cbor/rust/reader.rs;l=185
  static rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent> try_from(
      ::cbor::rust::CborEvent event);
};
#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < & 'static [:: cbor :: MapEntry < 'static >] >")
    rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>
    : public rs_std::OptionBase<
          rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>,
          rs_std::SliceRef<const ::cbor::rust::MapEntry>> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type = rs_std::OptionBase<
      rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>,
      rs_std::SliceRef<const ::cbor::rust::MapEntry>>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::cbor::rust::MapEntry>, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::cbor::rust::MapEntry>, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::cbor::rust::MapEntry>, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::cbor::rust::MapEntry>, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  rs_std::SliceRef<const ::cbor::rust::MapEntry>* some_ptr() noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::cbor::rust::MapEntry>*>(
        storage_);
  }
  rs_std::SliceRef<const ::cbor::rust::MapEntry> const* some_const_ptr()
      const noexcept {
    return reinterpret_cast<
        rs_std::SliceRef<const ::cbor::rust::MapEntry> const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < & 'static [:: cbor :: Value < 'static >] >")
    rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>
    : public rs_std::OptionBase<
          rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>,
          rs_std::SliceRef<const ::cbor::rust::Value>> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type = rs_std::OptionBase<
      rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>,
      rs_std::SliceRef<const ::cbor::rust::Value>>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::cbor::rust::Value>, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::cbor::rust::Value>, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::cbor::rust::Value>, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::cbor::rust::Value>, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  rs_std::SliceRef<const ::cbor::rust::Value>* some_ptr() noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::cbor::rust::Value>*>(
        storage_);
  }
  rs_std::SliceRef<const ::cbor::rust::Value> const* some_const_ptr()
      const noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::cbor::rust::Value> const*>(
        storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
template <>
struct alignas(8)
    CRUBIT_INTERNAL_RUST_TYPE("core :: option :: Option < & 'static [u8] >")
        rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>
    : public rs_std::OptionBase<
          rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>,
          rs_std::SliceRef<const ::std::uint8_t>> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>,
                         rs_std::SliceRef<const ::std::uint8_t>>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::std::uint8_t>, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, rs_std::SliceRef<const ::std::uint8_t>, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::std::uint8_t>, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             rs_std::SliceRef<const ::std::uint8_t>, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  rs_std::SliceRef<const ::std::uint8_t>* some_ptr() noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::std::uint8_t>*>(storage_);
  }
  rs_std::SliceRef<const ::std::uint8_t> const* some_const_ptr()
      const noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::std::uint8_t> const*>(
        storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020const_x00000020_x0000002a_x00000020crubit_unonnull_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020const_x00000020_x0000002a_x00000020crubit_unonnull_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < & 'static :: cbor :: Value < 'static > >")
    rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>
    : public rs_std::OptionBase<
          rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>,
          ::cbor::rust::Value const * $static crubit_nonnull> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type = rs_std::OptionBase<
      rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>,
      ::cbor::rust::Value const * $static crubit_nonnull>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::cbor::rust::Value const * $static crubit_nonnull, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<
             Option, ::cbor::rust::Value const * $static crubit_nonnull, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             ::cbor::rust::Value const * $static crubit_nonnull, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<
             ::cbor::rust::Value const * $static crubit_nonnull, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  ::cbor::rust::Value const* $static crubit_nonnull* some_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Value const *
                            $static crubit_nonnull*>(storage_);
  }
  ::cbor::rust::Value const* $static crubit_nonnull const* some_const_ptr()
      const noexcept {
    return reinterpret_cast<::cbor::rust::Value const *
                            $static crubit_nonnull const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[8];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < & 'static str >") rs_std::Option<rs_std::StrRef>
    : public rs_std::OptionBase<rs_std::Option<rs_std::StrRef>,
                                rs_std::StrRef> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<rs_std::StrRef>, rs_std::StrRef>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, rs_std::StrRef, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, rs_std::StrRef, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<rs_std::StrRef, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<rs_std::StrRef, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  rs_std::StrRef* some_ptr() noexcept {
    return reinterpret_cast<rs_std::StrRef*>(storage_);
  }
  rs_std::StrRef const* some_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::StrRef const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
template <>
struct alignas(1) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < bool >") rs_std::Option<bool>
    : public rs_std::OptionBase<rs_std::Option<bool>, bool> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type = rs_std::OptionBase<rs_std::Option<bool>, bool>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, bool, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, bool, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<bool, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<bool, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint8_t;
  static constexpr tag_type kNoneVal = 2;
  bool* some_ptr() noexcept { return reinterpret_cast<bool*>(storage_); }
  bool const* some_const_ptr() const noexcept {
    return reinterpret_cast<bool const*>(storage_);
  }
  void set_some_tag() noexcept {}
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char storage_[1];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020int64_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020int64_ut_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: option :: Option < i64 >") rs_std::Option<::std::int64_t>
    : public rs_std::OptionBase<rs_std::Option<::std::int64_t>,
                                ::std::int64_t> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Option(const Option&) = default;
  Option& operator=(const Option&) = default;
  Option(Option&&) = default;
  Option& operator=(Option&&) = default;

  Option(::crubit::UnsafeRelocateTag, Option&& value);
  using base_type =
      rs_std::OptionBase<rs_std::Option<::std::int64_t>, ::std::int64_t>;
  constexpr Option() = default;
  constexpr Option(::std::nullopt_t) noexcept;
  constexpr Option& operator=(::std::nullopt_t) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, ::std::int64_t, U>)
  Option(U&& value) noexcept;
  template <typename U>
    requires(rs_std::OptionForwardConstructible<Option, ::std::int64_t, U>)
  Option& operator=(U&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::std::int64_t, Opt>)
  Option(Opt&& value) noexcept;
  template <typename Opt>
    requires(rs_std::OptionFromStdOptional<::std::int64_t, Opt>)
  Option& operator=(Opt&& value) noexcept;
  template <typename... Args>
  explicit Option(::std::in_place_t ip, Args&&... args) noexcept;
  ~Option() noexcept = default;

 private:
  friend base_type;
  using tag_type = ::std::uint64_t;
  static constexpr tag_type kNoneVal = 0;
  ::std::int64_t* some_ptr() noexcept {
    return reinterpret_cast<::std::int64_t*>(storage_ + 8);
  }
  ::std::int64_t const* some_const_ptr() const noexcept {
    return reinterpret_cast<::std::int64_t const*>(storage_ + 8);
  }
  void set_some_tag() noexcept { set_tag(1); }
  constexpr void set_none_tag() noexcept { set_tag(kNoneVal); }
  constexpr bool is_none() const noexcept { return tag() == kNoneVal; }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char storage_[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < & 'static [u8] , :: cbor :: Error >")
    rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>
    : public rs_std::ResultBase<
          rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                         ::cbor::rust::Error>,
          rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error> {
 public:
  // Rust types that are `Copy` get trivial, `default` C++ copy constructor and
  // assignment operator.
  Result(const Result&) = default;
  Result& operator=(const Result&) = default;
  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type =
      rs_std::ResultBase<rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                                        ::cbor::rust::Error>,
                         rs_std::SliceRef<const ::std::uint8_t>,
                         ::cbor::rust::Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::SliceRef<const ::std::uint8_t>, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<
             Result, rs_std::SliceRef<const ::std::uint8_t>, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != 0; }
  rs_std::SliceRef<const ::std::uint8_t>* ok_ptr() noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::std::uint8_t>*>(__storage);
  }
  rs_std::SliceRef<const ::std::uint8_t> const* ok_const_ptr() const noexcept {
    return reinterpret_cast<rs_std::SliceRef<const ::std::uint8_t> const*>(
        __storage);
  }
  ::cbor::rust::Error* err_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Error*>(__storage + 8);
  }
  ::cbor::rust::Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Error const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(0); }
  constexpr ::std::uint64_t tag() const& noexcept;
  constexpr void set_tag(::std::uint64_t tag) noexcept;

 private:
  unsigned char __storage[16];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: cbor :: CborEvent < 'static > , :: cbor :: "
    "Error >") rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>
    : public rs_std::ResultBase<
          rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>,
          ::cbor::rust::CborEvent, ::cbor::rust::Error> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>& operator=(
      const Result&) noexcept;

  Result(Result&&) = default;
  Result& operator=(Result&&) = default;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>,
      ::cbor::rust::CborEvent, ::cbor::rust::Error>;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<Result, ::cbor::rust::CborEvent, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(
        rs_std::ResultForwardConstructible<Result, ::cbor::rust::CborEvent, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept = default;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != UINT32_C(4294967295); }
  ::cbor::rust::CborEvent* ok_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::CborEvent*>(__storage);
  }
  ::cbor::rust::CborEvent const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::CborEvent const*>(__storage);
  }
  ::cbor::rust::Error* err_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Error*>(__storage + 4);
  }
  ::cbor::rust::Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Error const*>(__storage + 4);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(UINT32_C(4294967295)); }
  constexpr ::std::uint32_t tag() const& noexcept;
  constexpr void set_tag(::std::uint32_t tag) noexcept;

 private:
  unsigned char __storage[24];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: cbor :: ParseResult < 'static > , :: cbor "
    ":: Error >") rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>
    : public rs_std::ResultBase<
          rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>,
          ::cbor::rust::ParseResult, ::cbor::rust::Error> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>& operator=(
      const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>,
      ::cbor::rust::ParseResult, ::cbor::rust::Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::cbor::rust::ParseResult, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result,
                                                ::cbor::rust::ParseResult, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != 255; }
  ::cbor::rust::ParseResult* ok_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::ParseResult*>(__storage);
  }
  ::cbor::rust::ParseResult const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::ParseResult const*>(__storage);
  }
  ::cbor::rust::Error* err_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Error*>(__storage + 4);
  }
  ::cbor::rust::Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Error const*>(__storage + 4);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(255); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[40];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: cbor :: Value < 'static > , :: cbor :: "
    "CborEvent < 'static > >")
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>
    : public rs_std::ResultBase<
          rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>,
          ::cbor::rust::Value, ::cbor::rust::CborEvent> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>& operator=(
      const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>,
      ::cbor::rust::Value, ::cbor::rust::CborEvent>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::cbor::rust::Value, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::cbor::rust::Value, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::CborEvent, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::CborEvent, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != 255; }
  ::cbor::rust::Value* ok_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Value*>(__storage);
  }
  ::cbor::rust::Value const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Value const*>(__storage);
  }
  ::cbor::rust::CborEvent* err_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::CborEvent*>(__storage + 8);
  }
  ::cbor::rust::CborEvent const* err_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::CborEvent const*>(__storage + 8);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(255); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

#ifndef _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
template <>
struct alignas(8) CRUBIT_INTERNAL_RUST_TYPE(
    "core :: result :: Result < :: cbor :: Value < 'static > , :: cbor :: "
    "Error >") rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>
    : public rs_std::ResultBase<
          rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>,
          ::cbor::rust::Value, ::cbor::rust::Error> {
 public:
  // Clone::clone
  Result(const Result&) noexcept;

  // Clone::clone_from
  rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>& operator=(
      const Result&) noexcept;

  Result(::crubit::UnsafeRelocateTag, Result&& value);

 public:
  using base_type = rs_std::ResultBase<
      rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>,
      ::cbor::rust::Value, ::cbor::rust::Error>;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::cbor::rust::Value, U>)
  explicit constexpr Result(U&& ok) noexcept;
  template <typename U>
    requires(rs_std::ResultForwardConstructible<Result, ::cbor::rust::Value, U>)
  constexpr Result& operator=(U&& ok) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  explicit constexpr Result(rs_std::unexpected<F>&& err) noexcept;
  template <typename F>
    requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
  constexpr Result& operator=(rs_std::unexpected<F>&& err) noexcept;
  template <typename... Args>
  explicit constexpr Result(::std::in_place_t ip, Args&&... args) noexcept;
  template <typename... Args>
  explicit constexpr Result(rs_std::unexpect_t u, Args&&... args) noexcept;
  ~Result() noexcept;

 private:
  friend base_type;
  bool has_value_impl() const noexcept { return tag() != 255; }
  ::cbor::rust::Value* ok_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Value*>(__storage);
  }
  ::cbor::rust::Value const* ok_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Value const*>(__storage);
  }
  ::cbor::rust::Error* err_ptr() noexcept {
    return reinterpret_cast<::cbor::rust::Error*>(__storage + 4);
  }
  ::cbor::rust::Error const* err_const_ptr() const noexcept {
    return reinterpret_cast<::cbor::rust::Error const*>(__storage + 4);
  }
  void set_ok_tag() noexcept {}
  void set_err_tag() noexcept { set_tag(255); }
  constexpr ::std::uint8_t tag() const& noexcept;
  constexpr void set_tag(::std::uint8_t tag) noexcept;

 private:
  unsigned char __storage[32];
};
#endif

namespace cbor::rust {

static_assert(
    sizeof(::cbor::rust::CborEvent) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::CborEvent) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent3Int0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int64_t, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeInt)(::std::int64_t __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent3Int0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent6String0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::StrRef*, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeString)(
    rs_std::StrRef __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent6String0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeInvalidUtf8)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesStart0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uint64_t, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeBytesStart)(
    ::std::uint64_t __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesStart0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesChunk0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*,
    ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeBytesChunk)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10BytesChunk0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

// `static` constructor
inline constexpr ::cbor::rust::CborEvent(
    ::cbor::rust::CborEvent::MakeBytesEnd)() {
  return CborEvent(PrivateTagCtorTag{}, Tag{INT64_C(5)});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10ArrayStart0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uint64_t, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeArrayStart)(
    ::std::uint64_t __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent10ArrayStart0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent8MapStart0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uint64_t, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeMapStart)(
    ::std::uint64_t __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent8MapStart0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent7Boolean0Csh9G4tFjYpDL_u8rust_uout(
    bool, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeBoolean)(bool __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent7Boolean0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

// `static` constructor
inline constexpr ::cbor::rust::CborEvent(::cbor::rust::CborEvent::MakeNull)() {
  return CborEvent(PrivateTagCtorTag{}, Tag{INT64_C(9)});
}

// `static` constructor
inline constexpr ::cbor::rust::CborEvent(
    ::cbor::rust::CborEvent::MakeUndefined)() {
  return CborEvent(PrivateTagCtorTag{}, Tag{INT64_C(10)});
}

// `static` constructor
inline constexpr ::cbor::rust::CborEvent(::cbor::rust::CborEvent::MakeDone)() {
  return CborEvent(PrivateTagCtorTag{}, Tag{INT64_C(11)});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent13NeedsMoreData0Csh9G4tFjYpDL_u8rust_uout(
    ::std::uintptr_t, ::cbor::rust::CborEvent* __ret_ptr);
}
inline ::cbor::rust::CborEvent(CborEvent::MakeNeedsMoreData)(
    ::std::uintptr_t __param_0) {
  crubit::Slot<::cbor::rust::CborEvent> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6reader9CborEvent13NeedsMoreData0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::CborEvent>);
static_assert(
    ::std::is_trivially_move_constructible_v<::cbor::rust::CborEvent>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::CborEvent>);
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::CborEvent const&, ::cbor::rust::CborEvent* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::CborEvent&, ::cbor::rust::CborEvent const&);
}
inline ::cbor::rust::CborEvent::CborEvent(const CborEvent& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::cbor::rust::CborEvent& ::cbor::rust::CborEvent::operator=(
    const CborEvent& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::cbor::rust::CborEvent::CborEvent(::crubit::UnsafeRelocateTag,
                                          CborEvent&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u9CborEventNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::CborEvent const&, ::cbor::rust::CborEvent const&);
}
inline bool(CborEvent::operator==)(::cbor::rust::CborEvent const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u9CborEventNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::cbor::rust::CborEvent::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, Int));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, String));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, InvalidUtf8));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, BytesStart));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, BytesChunk));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, ArrayStart));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, MapStart));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, Boolean));
  }
  {
    using __crubit_assert_type = ::cbor::rust::CborEvent;
    static_assert(8 == offsetof(__crubit_assert_type, NeedsMoreData));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_Int_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_String_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_InvalidUtf8_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_BytesStart_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_BytesChunk_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_ArrayStart_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_MapStart_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_Boolean_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
  {
    using __crubit_assert_variant_type =
        ::cbor::rust::CborEvent::__crubit_NeedsMoreData_struct;
    static_assert(0 == offsetof(__crubit_assert_variant_type, __field0));
  }
}
static_assert(
    sizeof(::cbor::rust::Config) == 16,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::Config) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader6ConfigNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Config* __ret_ptr);
}
inline ::cbor::rust::Config::Config() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader6ConfigNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::Config>);
static_assert(::std::is_trivially_move_constructible_v<::cbor::rust::Config>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::Config>);
static_assert(::std::is_trivially_copy_constructible_v<::cbor::rust::Config>);
static_assert(::std::is_trivially_copy_assignable_v<::cbor::rust::Config>);
inline ::cbor::rust::Config::Config(::crubit::UnsafeRelocateTag,
                                    Config&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline void ::cbor::rust::Config::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::cbor::rust::Config;
  static_assert(0 == offsetof(__crubit_assert_type, allow_invalid_utf8));
  static_assert(8 == offsetof(__crubit_assert_type, max_nesting_level));
}
static_assert(
    sizeof(::cbor::rust::Decoder) == 56,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::Decoder) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Decoder* __ret_ptr);
}
inline ::cbor::rust::Decoder::Decoder() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Decoder&);
}
inline ::cbor::rust::Decoder::~Decoder() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader7DecoderNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::cbor::rust::Decoder::Decoder(Decoder&& other) noexcept : Decoder() {
  *this = ::std::move(other);
}
inline ::cbor::rust::Decoder& ::cbor::rust::Decoder::operator=(
    Decoder&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
inline ::cbor::rust::Decoder::Decoder(::crubit::UnsafeRelocateTag,
                                      Decoder&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder19read_ucomplete_uvalue(
    ::cbor::rust::Decoder&, rs_std::SliceRef<const ::std::uint8_t>&,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>* __ret_ptr);
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>(
    Decoder::read_complete_value)(
    rs_std::SliceRef<const ::std::uint8_t>& data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::cbor::rust::Decoder&,
                                      rs_std::SliceRef<const ::std::uint8_t>&>(
          self, data),
      crubit::internal::AsPtrDatas<>());
  crubit::Slot<rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder19read_ucomplete_uvalue(
          self, data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder24read_ucomplete_ubytestring(
    ::cbor::rust::Decoder&, rs_std::SliceRef<const ::std::uint8_t>&,
    rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>*
        __ret_ptr);
}
inline rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                      ::cbor::rust::Error>(Decoder::read_complete_bytestring)(
    rs_std::SliceRef<const ::std::uint8_t>& data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::cbor::rust::Decoder&,
                                      rs_std::SliceRef<const ::std::uint8_t>&>(
          self, data),
      crubit::internal::AsPtrDatas<>());
  crubit::Slot<rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                              ::cbor::rust::Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder24read_ucomplete_ubytestring(
          self, data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder10next_uevent(
    ::cbor::rust::Decoder&, rs_std::SliceRef<const ::std::uint8_t>&,
    rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>* __ret_ptr);
}
inline rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>(
    Decoder::next_event)(rs_std::SliceRef<const ::std::uint8_t>& data) {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<::cbor::rust::Decoder&,
                                      rs_std::SliceRef<const ::std::uint8_t>&>(
          self, data),
      crubit::internal::AsPtrDatas<>());
  crubit::Slot<rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder10next_uevent(
          self, data, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder3newCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Decoder* __ret_ptr);
}
inline ::cbor::rust::Decoder(Decoder::new_)() {
  crubit::Slot<::cbor::rust::Decoder> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder3newCsh9G4tFjYpDL_u8rust_uout(
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11with_uconfigCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Config*, ::cbor::rust::Decoder* __ret_ptr);
}
inline ::cbor::rust::Decoder(Decoder::with_config)(
    ::cbor::rust::Config config) {
  crubit::Slot<::cbor::rust::Decoder> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11with_uconfigCsh9G4tFjYpDL_u8rust_uout(
          &config, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11is_ucompleteCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Decoder const&);
}
inline bool(Decoder::is_complete)() const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs9_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u7Decoder11is_ucompleteCsh9G4tFjYpDL_u8rust_uout(
          self);
}
inline void ::cbor::rust::Decoder::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::cbor::rust::Decoder;
  static_assert(0 == offsetof(__crubit_assert_type, state));
  static_assert(16 == offsetof(__crubit_assert_type, nesting_stack));
  static_assert(40 == offsetof(__crubit_assert_type, config));
}
static_assert(
    sizeof(::cbor::rust::Error) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::Error) == 4,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeUnsupportedMajorType)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(1)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeUnknownAdditionalInfo)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(2)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeIncompleteCborData)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(3)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeIncorrectMapKeyType)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(4)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeTooMuchNesting)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(5)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(::cbor::rust::Error::MakeInvalidUtf8)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(6)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeExtraneousData)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(7)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeNonMinimalCborEncoding)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(9)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeUnsupportedSimpleValue)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(10)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeUnsupportedFloatingPointValue)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(11)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeOutOfRangeIntegerValue)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(12)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(::cbor::rust::Error::MakeUnknownError)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(14)});
}

// `static` constructor
inline constexpr ::cbor::rust::Error(
    ::cbor::rust::Error::MakeOutOfOrderOrDuplicateKey)() {
  return Error(PrivateTagCtorTag{}, Tag{INT64_C(15)});
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::Error>);
static_assert(::std::is_trivially_move_constructible_v<::cbor::rust::Error>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::Error>);
static_assert(::std::is_trivially_copy_constructible_v<::cbor::rust::Error>);
static_assert(::std::is_trivially_copy_assignable_v<::cbor::rust::Error>);
inline ::cbor::rust::Error::Error(::crubit::UnsafeRelocateTag, Error&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6readerNtB2_u5Error6to_ustrCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Error*, rs_std::StrRef* __ret_ptr);
}
inline rs_std::StrRef(Error::to_str)() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<rs_std::StrRef> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6readerNtB2_u5Error6to_ustrCsh9G4tFjYpDL_u8rust_uout(
          &self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsf_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u5ErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Error const&, ::cbor::rust::Error const&);
}
inline bool(Error::operator==)(::cbor::rust::Error const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsf_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u5ErrorNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6reader5ErrorNtNtCs4qcdXyRXuHP_u5alloc6string8ToString9to_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Error const&, ::rs::alloc::string::String* __ret_ptr);
inline void ::cbor::rust::Error::__crubit_field_offset_assertions() {}
}  // namespace cbor::rust

namespace cbor::rust {

static_assert(
    sizeof(::cbor::rust::Map) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::Map) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map* __ret_ptr);
}
inline ::cbor::rust::Map::Map() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map&);
}
inline ::cbor::rust::Map::~Map() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::cbor::rust::Map::Map(Map&& other) noexcept : Map() {
  *this = ::std::move(other);
}
inline ::cbor::rust::Map& ::cbor::rust::Map::operator=(Map&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map const&, ::cbor::rust::Map* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map&, ::cbor::rust::Map const&);
}
inline ::cbor::rust::Map::Map(const Map& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::cbor::rust::Map& ::cbor::rust::Map::operator=(
    const Map& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::cbor::rust::Map::Map(::crubit::UnsafeRelocateTag, Map&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3newCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map* __ret_ptr);
}
inline ::cbor::rust::Map(Map::new_)() {
  crubit::Slot<::cbor::rust::Map> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3newCsh9G4tFjYpDL_u8rust_uout(
          __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map25from_usorted_uvec_uunchecked(
    rs_std::Vec<::cbor::rust::MapEntry>*, ::cbor::rust::Map* __ret_ptr);
}
inline ::cbor::rust::Map(Map::from_sorted_vec_unchecked)(
    rs_std::Vec<::cbor::rust::MapEntry> vec) {
  crubit::Slot vec_slot((::std::move(vec)));
  crubit::Slot<::cbor::rust::Map> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map25from_usorted_uvec_uunchecked(
          vec_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3get(
    ::cbor::rust::Map const&,
    ::cbor::rust::MapKey const* $(__anon2) crubit_nonnull,
    rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>*
        __ret_ptr);
}
inline rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>(
    Map::get)(::cbor::rust::MapKey const* $(__anon2)
                  crubit_nonnull key CRUBIT_LIFETIME_BOUND) const& $(__anon1)
    CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<
      rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs1_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3Map3get(
          self, key, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsv_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3MapNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map const&, ::cbor::rust::Map const&);
}
inline bool(Map::operator==)(::cbor::rust::Map const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsv_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u3MapNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapINtNtCsduaz3xaeU7_u4core7convert4FromINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtB4_u8MapEntryEE4fromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::MapEntry>*, ::cbor::rust::Map* __ret_ptr);
}
inline ::cbor::rust::Map::Map(rs_std::Vec<::cbor::rust::MapEntry> value) {
  crubit::Slot value_slot((::std::move(value)));
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values3MapINtNtCsduaz3xaeU7_u4core7convert4FromINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtB4_u8MapEntryEE4fromCsh9G4tFjYpDL_u8rust_uout(
          value_slot.Get(), this);
}
inline void ::cbor::rust::Map::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::cbor::rust::Map;
  static_assert(0 == offsetof(__crubit_assert_type, __field0));
}
static_assert(
    sizeof(::cbor::rust::MapEntry) == 56,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::MapEntry) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u8MapEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapEntry const&, ::cbor::rust::MapEntry const&);
}
inline bool(MapEntry::operator==)(::cbor::rust::MapEntry const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsq_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u8MapEntryNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::cbor::rust::MapEntry::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::cbor::rust::MapEntry;
  static_assert(0 == offsetof(__crubit_assert_type, key));
  static_assert(24 == offsetof(__crubit_assert_type, value));
}
static_assert(
    sizeof(::cbor::rust::MapKey) == 24,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::MapKey) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey* __ret_ptr);
}
inline ::cbor::rust::MapKey::MapKey() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey3Int0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int64_t, ::cbor::rust::MapKey* __ret_ptr);
}
inline ::cbor::rust::MapKey(MapKey::MakeInt)(::std::int64_t __param_0) {
  crubit::Slot<::cbor::rust::MapKey> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey3Int0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::cbor::rust::MapKey* __ret_ptr);
}
inline ::cbor::rust::MapKey(MapKey::MakeBytestring)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::MapKey> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey6String0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::StrRef*, ::cbor::rust::MapKey* __ret_ptr);
}
inline ::cbor::rust::MapKey(MapKey::MakeString)(rs_std::StrRef __param_0) {
  crubit::Slot<::cbor::rust::MapKey> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey6String0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::cbor::rust::MapKey* __ret_ptr);
}
inline ::cbor::rust::MapKey(MapKey::MakeInvalidUtf8)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::MapKey> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values6MapKey11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::MapKey>);
static_assert(::std::is_trivially_move_constructible_v<::cbor::rust::MapKey>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::MapKey>);
static_assert(::std::is_trivially_copy_constructible_v<::cbor::rust::MapKey>);
static_assert(::std::is_trivially_copy_assignable_v<::cbor::rust::MapKey>);
inline ::cbor::rust::MapKey::MapKey(::crubit::UnsafeRelocateTag,
                                    MapKey&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey4kindCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&, ::cbor::rust::MapKeyKind* __ret_ptr);
}
inline ::cbor::rust::MapKeyKind(MapKey::kind)() const {
  auto&& self = *this;
  crubit::Slot<::cbor::rust::MapKeyKind> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey4kindCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey6as_uintCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&, rs_std::Option<::std::int64_t>* __ret_ptr);
}
inline rs_std::Option<::std::int64_t>(MapKey::as_int)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<::std::int64_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey6as_uintCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&,
    rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>(
    MapKey::as_bytestring)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey9as_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&, rs_std::Option<rs_std::StrRef>* __ret_ptr);
}
inline rs_std::Option<rs_std::StrRef>(MapKey::as_string)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::StrRef>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey9as_ustringCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&,
    rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>(
    MapKey::as_invalid_utf8)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMs7_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKey15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyINtNtCsduaz3xaeU7_u4core7convert4IntoNtB4_u5ValueE4intoCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::MapKey::operator ::cbor::rust::Value() const {
  auto& self = const_cast<::std::remove_cvref_t<decltype(*this)>&>(*this);
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyINtNtCsduaz3xaeU7_u4core7convert4IntoNtB4_u5ValueE4intoCsh9G4tFjYpDL_u8rust_uout(
          &self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXs8_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eq(
    ::cbor::rust::MapKey const&, ::cbor::rust::MapKey const&);
}
inline bool(MapKey::operator==)(::cbor::rust::MapKey const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXs8_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eq(
          self, other);
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey const&, ::cbor::rust::MapKey const&);
}
inline ::std::strong_ordering(::cbor::rust::MapKey::operator<=>)(
    const MapKey& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::strong_ordering::less;
    case 0:
      return ::std::strong_ordering::equal;
    case 1:
      return ::std::strong_ordering::greater;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::cbor::rust::MapKey::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::cbor::rust::MapKey;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
static_assert(
    sizeof(::cbor::rust::MapKeyKind) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::MapKeyKind) == 4,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::cbor::rust::MapKeyKind(::cbor::rust::MapKeyKind::MakeInt)() {
  return MapKeyKind(PrivateTagCtorTag{}, Tag{INT64_C(0)});
}

// `static` constructor
inline constexpr ::cbor::rust::MapKeyKind(
    ::cbor::rust::MapKeyKind::MakeBytestring)() {
  return MapKeyKind(PrivateTagCtorTag{}, Tag{INT64_C(1)});
}

// `static` constructor
inline constexpr ::cbor::rust::MapKeyKind(
    ::cbor::rust::MapKeyKind::MakeString)() {
  return MapKeyKind(PrivateTagCtorTag{}, Tag{INT64_C(2)});
}

// `static` constructor
inline constexpr ::cbor::rust::MapKeyKind(
    ::cbor::rust::MapKeyKind::MakeInvalidUtf8)() {
  return MapKeyKind(PrivateTagCtorTag{}, Tag{INT64_C(3)});
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::MapKeyKind>);
static_assert(
    ::std::is_trivially_move_constructible_v<::cbor::rust::MapKeyKind>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::MapKeyKind>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::cbor::rust::MapKeyKind>);
static_assert(::std::is_trivially_copy_assignable_v<::cbor::rust::MapKeyKind>);
inline ::cbor::rust::MapKeyKind::MapKeyKind(::crubit::UnsafeRelocateTag,
                                            MapKeyKind&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsD_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKeyKind const&, ::cbor::rust::MapKeyKind const&);
}
inline bool(MapKeyKind::operator==)(
    ::cbor::rust::MapKeyKind const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsD_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" ::std::int8_t
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKeyKind const&, ::cbor::rust::MapKeyKind const&);
}
inline ::std::strong_ordering(::cbor::rust::MapKeyKind::operator<=>)(
    const MapKeyKind& other) const {
  auto val = __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          *this, other);
  switch (val) {
    case -1:
      return ::std::strong_ordering::less;
    case 0:
      return ::std::strong_ordering::equal;
    case 1:
      return ::std::strong_ordering::greater;
    default:
      CRUBIT_UNREACHABLE();
  }
}
inline void ::cbor::rust::MapKeyKind::__crubit_field_offset_assertions() {}
}  // namespace cbor::rust

namespace cbor::rust {

static_assert(
    sizeof(::cbor::rust::ParseResult) == 40,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::ParseResult) == 8,
    "Verify that ADT layout didn't change since this header got generated");

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsm_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u11ParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::ParseResult const&, ::cbor::rust::ParseResult const&);
}
inline bool(ParseResult::operator==)(
    ::cbor::rust::ParseResult const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsm_uNtCscLqNMIJ1276_u4cbor6readerNtB5_u11ParseResultNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::cbor::rust::ParseResult::__crubit_field_offset_assertions() {
  using __crubit_assert_type = ::cbor::rust::ParseResult;
  static_assert(0 == offsetof(__crubit_assert_type, value));
  static_assert(32 == offsetof(__crubit_assert_type, bytes_consumed));
}
}  // namespace cbor::rust

namespace cbor::rust {

static_assert(
    sizeof(::cbor::rust::Value) == 32,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::Value) == 8,
    "Verify that ADT layout didn't change since this header got generated");
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value::Value() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core7default7Default7defaultCsh9G4tFjYpDL_u8rust_uout(
          this);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Int0Csh9G4tFjYpDL_u8rust_uout(
    ::std::int64_t, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeInt)(::std::int64_t __param_0) {
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Int0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeBytestring)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value10Bytestring0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value6String0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::StrRef*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeString)(rs_std::StrRef __param_0) {
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value6String0Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value5Array0Csh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::Value>*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeArray)(
    rs_std::Vec<::cbor::rust::Value> __param_0) {
  crubit::Slot __param_0_slot((::std::move(__param_0)));
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value5Array0Csh9G4tFjYpDL_u8rust_uout(
          __param_0_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Map0Csh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Map*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeMap)(::cbor::rust::Map __param_0) {
  crubit::Slot __param_0_slot((::std::move(__param_0)));
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value3Map0Csh9G4tFjYpDL_u8rust_uout(
          __param_0_slot.Get(), __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value7Boolean0Csh9G4tFjYpDL_u8rust_uout(
    bool, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeBoolean)(bool __param_0) {
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value7Boolean0Csh9G4tFjYpDL_u8rust_uout(
          __param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

// `static` constructor
inline ::cbor::rust::Value(::cbor::rust::Value::MakeNull)() {
  return Value(PrivateBytesTag{},
               {6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

// `static` constructor
inline ::cbor::rust::Value(::cbor::rust::Value::MakeUndefined)() {
  return Value(PrivateBytesTag{},
               {7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0});
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
    rs_std::SliceRef<const ::std::uint8_t>*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value(Value::MakeInvalidUtf8)(
    rs_std::SliceRef<const ::std::uint8_t> __param_0) {
  crubit::Slot<::cbor::rust::Value> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNcNtNtNtCscLqNMIJ1276_u4cbor6values5Value11InvalidUtf80Csh9G4tFjYpDL_u8rust_uout(
          &__param_0, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value&);
}
inline ::cbor::rust::Value::~Value() {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtNtCsduaz3xaeU7_u4core3ops4drop4Drop4dropCsh9G4tFjYpDL_u8rust_uout(
          *this);
}
inline ::cbor::rust::Value::Value(Value&& other) noexcept : Value() {
  *this = ::std::move(other);
}
inline ::cbor::rust::Value& ::cbor::rust::Value::operator=(
    Value&& other) noexcept {
  crubit::MemSwap(*this, other);
  return *this;
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, ::cbor::rust::Value* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value&, ::cbor::rust::Value const&);
}
inline ::cbor::rust::Value::Value(const Value& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline ::cbor::rust::Value& ::cbor::rust::Value::operator=(
    const Value& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline ::cbor::rust::Value::Value(::crubit::UnsafeRelocateTag, Value&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8to_ubytes(
    ::cbor::rust::Value const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t>(Value::to_bytes)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8to_ubytes(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value12append_ubytes(
    ::cbor::rust::Value const&, rs_std::Vec<::std::uint8_t>&);
}
inline void(Value::append_bytes)(rs_std::Vec<::std::uint8_t>& out) const {
  auto&& self = *this;
  crubit::internal::CheckNoMutableAliasing(
      crubit::internal::AsMutPtrDatas<rs_std::Vec<::std::uint8_t>&>(out),
      crubit::internal::AsPtrDatas<::cbor::rust::Value const&>(self));
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value12append_ubytes(
          self, out);
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value4kindCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, ::cbor::rust::ValueKind* __ret_ptr);
}
inline ::cbor::rust::ValueKind(Value::kind)() const {
  auto&& self = *this;
  crubit::Slot<::cbor::rust::ValueKind> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value4kindCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value6as_uintCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, rs_std::Option<::std::int64_t>* __ret_ptr);
}
inline rs_std::Option<::std::int64_t>(Value::as_int)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<::std::int64_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value6as_uintCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value7as_uboolCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, rs_std::Option<bool>* __ret_ptr);
}
inline rs_std::Option<bool>(Value::as_bool)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<bool>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value7as_uboolCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&,
    rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>(
    Value::as_bytestring)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value13as_ubytestringCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value9as_ustringCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, rs_std::Option<rs_std::StrRef>* __ret_ptr);
}
inline rs_std::Option<rs_std::StrRef>(Value::as_string)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::StrRef>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value9as_ustringCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&,
    rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>(
    Value::as_invalid_utf8)() const {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value15as_uinvalid_uutf8Csh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8as_uarrayCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&,
    rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>(
    Value::as_array)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value8as_uarrayCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value11map_uentriesCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&,
    rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>* __ret_ptr);
}
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>(
    Value::map_entries)() const& $(__anon1) CRUBIT_LIFETIME_BOUND {
  auto&& self = *this;
  crubit::Slot<rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvMNtCscLqNMIJ1276_u4cbor6valuesNtB2_u5Value11map_uentriesCsh9G4tFjYpDL_u8rust_uout(
          self, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsl_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u5ValueNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::Value const&, ::cbor::rust::Value const&);
}
inline bool(Value::operator==)(::cbor::rust::Value const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsl_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u5ValueNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u6MapKeyE4fromCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKey*, ::cbor::rust::Value* __ret_ptr);
}
inline ::cbor::rust::Value::Value(::cbor::rust::MapKey value) {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYNtNtCscLqNMIJ1276_u4cbor6values5ValueINtNtCsduaz3xaeU7_u4core7convert4FromNtB4_u6MapKeyE4fromCsh9G4tFjYpDL_u8rust_uout(
          &value, this);
}
inline void ::cbor::rust::Value::__crubit_field_offset_assertions() {
  {
    using __crubit_assert_type = ::cbor::rust::Value;
    static_assert(0 == offsetof(__crubit_assert_type, __opaque_blob_of_bytes));
  }
}
static_assert(
    sizeof(::cbor::rust::ValueKind) == 4,
    "Verify that ADT layout didn't change since this header got generated");
static_assert(
    alignof(::cbor::rust::ValueKind) == 4,
    "Verify that ADT layout didn't change since this header got generated");

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(::cbor::rust::ValueKind::MakeInt)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(0)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(
    ::cbor::rust::ValueKind::MakeBytestring)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(1)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(
    ::cbor::rust::ValueKind::MakeString)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(2)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(::cbor::rust::ValueKind::MakeArray)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(3)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(::cbor::rust::ValueKind::MakeMap)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(4)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(
    ::cbor::rust::ValueKind::MakeBoolean)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(5)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(::cbor::rust::ValueKind::MakeNull)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(7)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(
    ::cbor::rust::ValueKind::MakeUndefined)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(8)});
}

// `static` constructor
inline constexpr ::cbor::rust::ValueKind(
    ::cbor::rust::ValueKind::MakeInvalidUtf8)() {
  return ValueKind(PrivateTagCtorTag{}, Tag{INT64_C(9)});
}
static_assert(::std::is_trivially_destructible_v<::cbor::rust::ValueKind>);
static_assert(
    ::std::is_trivially_move_constructible_v<::cbor::rust::ValueKind>);
static_assert(::std::is_trivially_move_assignable_v<::cbor::rust::ValueKind>);
static_assert(
    ::std::is_trivially_copy_constructible_v<::cbor::rust::ValueKind>);
static_assert(::std::is_trivially_copy_assignable_v<::cbor::rust::ValueKind>);
inline ::cbor::rust::ValueKind::ValueKind(::crubit::UnsafeRelocateTag,
                                          ValueKind&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

namespace __crubit_internal {
extern "C" bool
__crubit_thunk_94aeaa222e33578a__uRNvXsh_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u9ValueKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::ValueKind const&, ::cbor::rust::ValueKind const&);
}
inline bool(ValueKind::operator==)(::cbor::rust::ValueKind const& other) const {
  auto&& self = *this;
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsh_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u9ValueKindNtNtCsduaz3xaeU7_u4core3cmp9PartialEq2eqCsh9G4tFjYpDL_u8rust_uout(
          self, other);
}
inline void ::cbor::rust::ValueKind::__crubit_field_offset_assertions() {}
}  // namespace cbor::rust

namespace cbor::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6reader17parse_uwith_uconfig(
    rs_std::SliceRef<const ::std::uint8_t>*, ::cbor::rust::Config*,
    rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>* __ret_ptr);
}
inline rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>
parse_with_config(rs_std::SliceRef<const ::std::uint8_t> input,
                  ::cbor::rust::Config config) {
  crubit::Slot<rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6reader17parse_uwith_uconfig(
          &input, &config, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace cbor::rust

namespace cbor::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uentry(
    rs_std::Vec<::cbor::rust::MapEntry>&, ::cbor::rust::MapEntry*);
}
inline void vec_push_entry(rs_std::Vec<::cbor::rust::MapEntry>& vec,
                           ::cbor::rust::MapEntry entry) {
  crubit::Slot entry_slot((::std::move(entry)));
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uentry(
          vec, entry_slot.Get());
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uvalue(
    rs_std::Vec<::cbor::rust::Value>&, ::cbor::rust::Value*);
}
inline void vec_push_value(rs_std::Vec<::cbor::rust::Value>& vec,
                           ::cbor::rust::Value value) {
  crubit::Slot value_slot((::std::move(value)));
  return __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values14vec_upush_uvalue(
          vec, value_slot.Get());
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values25vec_uwith_ucapacity_uentries(
    ::std::uintptr_t, rs_std::Vec<::cbor::rust::MapEntry>* __ret_ptr);
}
inline rs_std::Vec<::cbor::rust::MapEntry> vec_with_capacity_entries(
    ::std::uintptr_t capacity) {
  crubit::Slot<rs_std::Vec<::cbor::rust::MapEntry>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values25vec_uwith_ucapacity_uentries(
          capacity, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values24vec_uwith_ucapacity_uvalues(
    ::std::uintptr_t, rs_std::Vec<::cbor::rust::Value>* __ret_ptr);
}
inline rs_std::Vec<::cbor::rust::Value> vec_with_capacity_values(
    ::std::uintptr_t capacity) {
  crubit::Slot<rs_std::Vec<::cbor::rust::Value>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6values24vec_uwith_ucapacity_uvalues(
          capacity, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace cbor::rust

namespace cbor::rust {

namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6writer5write(
    ::cbor::rust::Value const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
inline rs_std::Vec<::std::uint8_t> write(::cbor::rust::Value const& val) {
  crubit::Slot<rs_std::Vec<::std::uint8_t>> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvNtCscLqNMIJ1276_u4cbor6writer5write(
          val, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

}  // namespace cbor::rust

namespace cbor::rust {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvXsb_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmp(
    ::cbor::rust::MapKey const&, ::cbor::rust::MapKey const&,
    ::rs::core::cmp::Ordering* __ret_ptr);
}
}  // namespace cbor::rust
inline ::rs::core::cmp::Ordering
rs_std::impl<::cbor::rust::MapKey, ::rs::core::cmp::Ord>::cmp(
    ::cbor::rust::MapKey const& self, ::cbor::rust::MapKey const& other) {
  crubit::Slot<::rs::core::cmp::Ordering> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  cbor::rust::__crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsb_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u6MapKeyNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmp(
          self, other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

namespace cbor::rust {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvXsG_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::MapKeyKind const&, ::cbor::rust::MapKeyKind const&,
    ::rs::core::cmp::Ordering* __ret_ptr);
}
}  // namespace cbor::rust
inline ::rs::core::cmp::Ordering
rs_std::impl<::cbor::rust::MapKeyKind, ::rs::core::cmp::Ord>::cmp(
    ::cbor::rust::MapKeyKind const& self,
    ::cbor::rust::MapKeyKind const& other) {
  crubit::Slot<::rs::core::cmp::Ordering> __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  cbor::rust::__crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXsG_uNtCscLqNMIJ1276_u4cbor6valuesNtB5_u10MapKeyKindNtNtCsduaz3xaeU7_u4core3cmp3Ord3cmpCsh9G4tFjYpDL_u8rust_uout(
          self, other, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::MapEntry> const&,
    rs_std::Vec<::cbor::rust::MapEntry>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::MapEntry>&,
    rs_std::Vec<::cbor::rust::MapEntry> const&);
}
inline rs_std::Vec<::cbor::rust::MapEntry>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::cbor::rust::MapEntry>&
rs_std::Vec<::cbor::rust::MapEntry>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values8MapEntryENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::cbor::rust::MapEntry>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::cbor::rust::MapEntry>&
rs_std::Vec<::cbor::rust::MapEntry>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::cbor::rust::MapEntry>::Vec(::crubit::UnsafeRelocateTag,
                                                Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::cbor::rust::MapEntry>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::cbor::rust::MapEntry>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::Value> const&,
    rs_std::Vec<::cbor::rust::Value>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::cbor::rust::Value>&, rs_std::Vec<::cbor::rust::Value> const&);
}
inline rs_std::Vec<::cbor::rust::Value>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::cbor::rust::Value>&
rs_std::Vec<::cbor::rust::Value>::operator=(const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VecNtNtCscLqNMIJ1276_u4cbor6values5ValueENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::cbor::rust::Value>::Vec(Vec&& other) noexcept
    : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::cbor::rust::Value>&
rs_std::Vec<::cbor::rust::Value>::operator=(Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::cbor::rust::Value>::Vec(::crubit::UnsafeRelocateTag,
                                             Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::cbor::rust::Value>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::cbor::rust::Value>::~Vec() noexcept { destroy(); }
#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Vec_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t> const&, rs_std::Vec<::std::uint8_t>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Vec<::std::uint8_t>&, rs_std::Vec<::std::uint8_t> const&);
}
inline rs_std::Vec<::std::uint8_t>::Vec(const Vec& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    const Vec& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCs4qcdXyRXuHP_u5alloc3vec3VechENtNtCsduaz3xaeU7_u4core5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(Vec&& other) noexcept : storage_{} {
  ::std::memcpy(storage_, other.storage_, sizeof(storage_));
  other.init_empty();
}
inline rs_std::Vec<::std::uint8_t>& rs_std::Vec<::std::uint8_t>::operator=(
    Vec&& other) noexcept {
  if (this != &other) {
    destroy();
    crubit::MemSwap(*this, other);
  }
  return *this;
}
inline rs_std::Vec<::std::uint8_t>::Vec(::crubit::UnsafeRelocateTag,
                                        Vec&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}

inline rs_std::Vec<::std::uint8_t>::Vec() noexcept : storage_{} {
  init_empty();
}
inline rs_std::Vec<::std::uint8_t>::~Vec() noexcept { destroy(); }
#endif

namespace cbor::rust {
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvXs5_uNtCscLqNMIJ1276_u4cbor6readerNtNtB7_u6values5ValueINtNtCsduaz3xaeU7_u4core7convert7TryFromNtB5_u9CborEventE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
    ::cbor::rust::CborEvent*,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>* __ret_ptr);
}
}  // namespace cbor::rust
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>
rs_std::impl<::cbor::rust::Value,
             ::rs::core::convert::TryFrom<::cbor::rust::CborEvent>>::
    try_from(::cbor::rust::CborEvent event) {
  crubit::Slot<rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>>
      __return_value_ret_val_holder;
  auto* __return_value_storage = __return_value_ret_val_holder.Get();
  cbor::rust::__crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvXs5_uNtCscLqNMIJ1276_u4cbor6readerNtNtB7_u6values5ValueINtNtCsduaz3xaeU7_u4core7convert7TryFromNtB5_u9CborEventE8try_ufromCsh9G4tFjYpDL_u8rust_uout(
          &event, __return_value_storage);
  return ::std::move(__return_value_ret_val_holder).AssumeInitAndTakeValue();
}

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020MapEntry_x00000020_x0000003e_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>);
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::Option(
    ::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>>);
inline constexpr ::std::uint64_t rs_std::Option<
    rs_std::SliceRef<const ::cbor::rust::MapEntry>>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<rs_std::SliceRef<
    const ::cbor::rust::MapEntry>>::Option(::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>,
           rs_std::SliceRef<const ::cbor::rust::MapEntry>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::Option(
    U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>,
           rs_std::SliceRef<const ::cbor::rust::MapEntry>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           rs_std::SliceRef<const ::cbor::rust::MapEntry>, Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::Option(
    Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           rs_std::SliceRef<const ::cbor::rust::MapEntry>, Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::MapEntry>>::Option(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000003e_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>);
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::Option(
    ::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>>);
inline constexpr ::std::uint64_t rs_std::Option<
    rs_std::SliceRef<const ::cbor::rust::Value>>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::
    Option(::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>,
           rs_std::SliceRef<const ::cbor::rust::Value>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::Option(
    U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>,
           rs_std::SliceRef<const ::cbor::rust::Value>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           rs_std::SliceRef<const ::cbor::rust::Value>, Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::Option(
    Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           rs_std::SliceRef<const ::cbor::rust::Value>, Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>&
rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<rs_std::SliceRef<const ::cbor::rust::Value>>::Option(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>);
static_assert(::std::is_trivially_copy_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>);
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>);
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::Option(
    ::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>>);
inline constexpr ::std::uint64_t
rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>&
rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>,
           rs_std::SliceRef<const ::std::uint8_t>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::Option(
    U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>,
           rs_std::SliceRef<const ::std::uint8_t>, U>)
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>&
rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::SliceRef<const ::std::uint8_t>,
                                         Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::Option(
    Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::SliceRef<const ::std::uint8_t>,
                                         Opt>)
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>&
rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<rs_std::SliceRef<const ::std::uint8_t>>::Option(
    ::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020const_x00000020_x0000002a_x00000020crubit_unonnull_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020const_x00000020_x0000002a_x00000020crubit_unonnull_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<
        rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<
        rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>);
static_assert(
    ::std::is_trivially_move_constructible_v<
        rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>);
static_assert(
    ::std::is_trivially_move_assignable_v<
        rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>);
inline rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>::
    Option(::crubit::UnsafeRelocateTag, Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<
        rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>>);
inline constexpr ::std::uint64_t rs_std::Option<
    ::cbor::rust::Value const * $static crubit_nonnull>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<
    ::cbor::rust::Value const *
    $static crubit_nonnull>::Option(::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<::cbor::rust::Value const *
                                $static crubit_nonnull>&
rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>,
           ::cbor::rust::Value const * $static crubit_nonnull, U>)
inline rs_std::Option<::cbor::rust::Value const *
                      $static crubit_nonnull>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<
           rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>,
           ::cbor::rust::Value const * $static crubit_nonnull, U>)
inline rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>&
rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           ::cbor::rust::Value const * $static crubit_nonnull, Opt>)
inline rs_std::Option<::cbor::rust::Value const *
                      $static crubit_nonnull>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<
           ::cbor::rust::Value const * $static crubit_nonnull, Opt>)
inline rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>&
rs_std::Option<::cbor::rust::Value const * $static crubit_nonnull>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<::cbor::rust::Value const *
                      $static crubit_nonnull>::Option(::std::in_place_t ip,
                                                      Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020StrRef_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<rs_std::Option<rs_std::StrRef>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<rs_std::Option<rs_std::StrRef>>);
static_assert(
    ::std::is_trivially_move_constructible_v<rs_std::Option<rs_std::StrRef>>);
static_assert(
    ::std::is_trivially_move_assignable_v<rs_std::Option<rs_std::StrRef>>);
inline rs_std::Option<rs_std::StrRef>::Option(::crubit::UnsafeRelocateTag,
                                              Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<rs_std::Option<rs_std::StrRef>>);
inline constexpr ::std::uint64_t rs_std::Option<rs_std::StrRef>::tag()
    const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Option<rs_std::StrRef>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<rs_std::StrRef>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<rs_std::StrRef>&
rs_std::Option<rs_std::StrRef>::operator=(::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<rs_std::StrRef>,
                                              rs_std::StrRef, U>)
inline rs_std::Option<rs_std::StrRef>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<rs_std::StrRef>,
                                              rs_std::StrRef, U>)
inline rs_std::Option<rs_std::StrRef>&
rs_std::Option<rs_std::StrRef>::operator=(U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::StrRef, Opt>)
inline rs_std::Option<rs_std::StrRef>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<rs_std::StrRef, Opt>)
inline rs_std::Option<rs_std::StrRef>&
rs_std::Option<rs_std::StrRef>::operator=(Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<rs_std::StrRef>::Option(::std::in_place_t ip,
                                              Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020bool_x00000020_x0000003e
static_assert(::std::is_trivially_copy_constructible_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_copy_assignable_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_move_constructible_v<rs_std::Option<bool>>);
static_assert(::std::is_trivially_move_assignable_v<rs_std::Option<bool>>);
inline rs_std::Option<bool>::Option(::crubit::UnsafeRelocateTag,
                                    Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<rs_std::Option<bool>>);
inline constexpr ::std::uint8_t rs_std::Option<bool>::tag() const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void rs_std::Option<bool>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<bool>::Option(::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    ::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<bool>, bool, U>)
inline rs_std::Option<bool>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<bool>, bool, U>)
inline rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<bool, Opt>)
inline rs_std::Option<bool>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<bool, Opt>)
inline rs_std::Option<bool>& rs_std::Option<bool>::operator=(
    Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<bool>::Option(::std::in_place_t ip,
                                    Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020int64_ut_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Option_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020int64_ut_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<rs_std::Option<::std::int64_t>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<rs_std::Option<::std::int64_t>>);
static_assert(
    ::std::is_trivially_move_constructible_v<rs_std::Option<::std::int64_t>>);
static_assert(
    ::std::is_trivially_move_assignable_v<rs_std::Option<::std::int64_t>>);
inline rs_std::Option<::std::int64_t>::Option(::crubit::UnsafeRelocateTag,
                                              Option&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<rs_std::Option<::std::int64_t>>);
inline constexpr ::std::uint64_t rs_std::Option<::std::int64_t>::tag()
    const& noexcept {
  ::std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = storage_[0 + i];
  }
  return ::std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void rs_std::Option<::std::int64_t>::set_tag(
    ::std::uint64_t tag) noexcept {
  auto __bytes =
      ::std::bit_cast<::std::array<unsigned char, sizeof(::std::uint64_t)>>(
          tag);
  for (::std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    storage_[0 + i] = __bytes[i];
  }
}

inline constexpr rs_std::Option<::std::int64_t>::Option(
    ::std::nullopt_t) noexcept
    : base_type(::std::nullopt) {}
inline constexpr rs_std::Option<::std::int64_t>&
rs_std::Option<::std::int64_t>::operator=(::std::nullopt_t) noexcept {
  base_type::operator=(::std::nullopt);
  return *this;
}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<::std::int64_t>,
                                              ::std::int64_t, U>)
inline rs_std::Option<::std::int64_t>::Option(U&& value) noexcept
    : base_type(::std::forward<U>(value)) {}
template <typename U>
  requires(rs_std::OptionForwardConstructible<rs_std::Option<::std::int64_t>,
                                              ::std::int64_t, U>)
inline rs_std::Option<::std::int64_t>&
rs_std::Option<::std::int64_t>::operator=(U&& value) noexcept {
  base_type::operator=(::std::forward<U>(value));
  return *this;
}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::int64_t, Opt>)
inline rs_std::Option<::std::int64_t>::Option(Opt&& value) noexcept
    : base_type(::std::forward<Opt>(value)) {}
template <typename Opt>
  requires(rs_std::OptionFromStdOptional<::std::int64_t, Opt>)
inline rs_std::Option<::std::int64_t>&
rs_std::Option<::std::int64_t>::operator=(Opt&& value) noexcept {
  base_type::operator=(::std::forward<Opt>(value));
  return *this;
}
template <typename... Args>
inline rs_std::Option<::std::int64_t>::Option(::std::in_place_t ip,
                                              Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020rs_ustd_x00000020_x0000003a_x0000003a_x00000020SliceRef_x00000020_x0000003c_x00000020const_x00000020_x0000003a_x0000003a_x00000020std_x00000020_x0000003a_x0000003a_x00000020uint8_ut_x00000020_x0000003e_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
static_assert(
    ::std::is_trivially_copy_constructible_v<rs_std::Result<
        rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>>);
static_assert(
    ::std::is_trivially_copy_assignable_v<rs_std::Result<
        rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>>);
static_assert(
    ::std::is_trivially_move_constructible_v<rs_std::Result<
        rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>>);
static_assert(
    ::std::is_trivially_move_assignable_v<rs_std::Result<
        rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>>);
inline rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                      ::cbor::rust::Error>::Result(::crubit::UnsafeRelocateTag,
                                                   Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(
    ::std::is_trivially_destructible_v<rs_std::Result<
        rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>>);
inline constexpr ::std::uint64_t
rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
               ::cbor::rust::Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint64_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint64_t>(__bytes);
}
inline constexpr void
rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
               ::cbor::rust::Error>::set_tag(::std::uint64_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint64_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint64_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                          ::cbor::rust::Error>,
           rs_std::SliceRef<const ::std::uint8_t>, U>)
inline constexpr rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                                ::cbor::rust::Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                          ::cbor::rust::Error>,
           rs_std::SliceRef<const ::std::uint8_t>, U>)
inline constexpr rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                                ::cbor::rust::Error>&
rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
               ::cbor::rust::Error>::operator=(U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<
    rs_std::SliceRef<const ::std::uint8_t>,
    ::cbor::rust::Error>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>,
                                ::cbor::rust::Error>&
rs_std::Result<rs_std::SliceRef<const ::std::uint8_t>, ::cbor::rust::Error>::
operator=(rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::SliceRef<const ::std::uint8_t>,
    ::cbor::rust::Error>::Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    rs_std::SliceRef<const ::std::uint8_t>,
    ::cbor::rust::Error>::Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error> const&,
    rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>&,
    rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error> const&);
}
inline rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader9CborEventNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
static_assert(::std::is_trivially_move_constructible_v<
              rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>>);
static_assert(::std::is_trivially_move_assignable_v<
              rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>>);
inline rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
static_assert(::std::is_trivially_destructible_v<
              rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>>);
inline constexpr ::std::uint32_t rs_std::Result<
    ::cbor::rust::CborEvent, ::cbor::rust::Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint32_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint32_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint32_t>(__bytes);
}
inline constexpr void
rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::set_tag(
    ::std::uint32_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint32_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint32_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>,
           ::cbor::rust::CborEvent, U>)
inline constexpr rs_std::Result<::cbor::rust::CborEvent,
                                ::cbor::rust::Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>,
           ::cbor::rust::CborEvent, U>)
inline constexpr rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<::cbor::rust::CborEvent, ::cbor::rust::Error>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020ParseResult_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error> const&,
    rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>&,
    rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error> const&);
}
inline rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6reader11ParseResultNtBF_u5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::cbor::rust::ParseResult,
                      ::cbor::rust::Error>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint8_t rs_std::Result<
    ::cbor::rust::ParseResult, ::cbor::rust::Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>,
           ::cbor::rust::ParseResult, U>)
inline constexpr rs_std::Result<::cbor::rust::ParseResult,
                                ::cbor::rust::Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>,
           ::cbor::rust::ParseResult, U>)
inline constexpr rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<
    ::cbor::rust::ParseResult,
    ::cbor::rust::Error>::Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::ParseResult, ::cbor::rust::Error>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::cbor::rust::ParseResult,
    ::cbor::rust::Error>::Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::cbor::rust::ParseResult,
    ::cbor::rust::Error>::Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Error_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error> const&,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>&,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error> const&);
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader5ErrorENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::cbor::rust::Value,
                      ::cbor::rust::Error>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint8_t rs_std::Result<
    ::cbor::rust::Value, ::cbor::rust::Error>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>,
           ::cbor::rust::Value, U>)
inline constexpr rs_std::Result<::cbor::rust::Value,
                                ::cbor::rust::Error>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>,
           ::cbor::rust::Value, U>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::Error, F>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::Error>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<
    ::cbor::rust::Value, ::cbor::rust::Error>::Result(::std::in_place_t ip,
                                                      Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<
    ::cbor::rust::Value, ::cbor::rust::Error>::Result(rs_std::unexpect_t u,
                                                      Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#ifndef _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000003e
#define _CRUBIT_BINDINGS_FOR_IMPL_rs_ustd_x00000020_x0000003a_x0000003a_x00000020Result_x00000020_x0000003c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020Value_x00000020_x0000002c_x00000020_x0000003a_x0000003a_x00000020cbor_x00000020_x0000003a_x0000003a_x00000020rust_x00000020_x0000003a_x0000003a_x00000020CborEvent_x00000020_x0000003e
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent> const&,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>* __ret_ptr);
}
namespace __crubit_internal {
extern "C" void
__crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>&,
    rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent> const&);
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::Result(
    const Result& other) noexcept {
  __crubit_internal::
      __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone5cloneCsh9G4tFjYpDL_u8rust_uout(
          other, this);
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::operator=(
    const Result& other) noexcept {
  if (this != &other) {
    __crubit_internal::
        __crubit_thunk_94aeaa222e33578a__uRNvYINtNtCsduaz3xaeU7_u4core6result6ResultNtNtCscLqNMIJ1276_u4cbor6values5ValueNtNtBH_u6reader9CborEventENtNtB7_u5clone5Clone10clone_ufromCsh9G4tFjYpDL_u8rust_uout(
            *this, other);
  }
  return *this;
}
inline rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::Result(
    ::crubit::UnsafeRelocateTag, Result&& value) {
  ::std::memcpy(this, &value, sizeof(value));
}
inline rs_std::Result<::cbor::rust::Value,
                      ::cbor::rust::CborEvent>::~Result() noexcept {
  this->Reset();
}
inline constexpr ::std::uint8_t rs_std::Result<
    ::cbor::rust::Value, ::cbor::rust::CborEvent>::tag() const& noexcept {
  std::array<unsigned char, sizeof(::std::uint8_t)> __bytes = {};
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __bytes[i] = __storage[0 + i];
  }
  return std::bit_cast<::std::uint8_t>(__bytes);
}
inline constexpr void
rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::set_tag(
    ::std::uint8_t tag) noexcept {
  auto __bytes =
      std::bit_cast<std::array<unsigned char, sizeof(::std::uint8_t)>>(tag);
  for (std::size_t i = 0; i < sizeof(::std::uint8_t); ++i) {
    __storage[0 + i] = __bytes[i];
  }
}

template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>,
           ::cbor::rust::Value, U>)
inline constexpr rs_std::Result<
    ::cbor::rust::Value, ::cbor::rust::CborEvent>::Result(U&& ok) noexcept
    : base_type(::std::forward<U>(ok)) {}
template <typename U>
  requires(rs_std::ResultForwardConstructible<
           rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>,
           ::cbor::rust::Value, U>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::operator=(
    U&& ok) noexcept {
  base_type::operator=(::std::forward<U>(ok));
  return *this;
}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::CborEvent, F>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::
    Result(rs_std::unexpected<F>&& err) noexcept
    : base_type(::std::move(err)) {}
template <typename F>
  requires(rs_std::ResultUnexpectedConstructible<::cbor::rust::CborEvent, F>)
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>&
rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::operator=(
    rs_std::unexpected<F>&& err) noexcept {
  base_type::operator=(::std::move(err));
  return *this;
}
template <typename... Args>
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::
    Result(::std::in_place_t ip, Args&&... args) noexcept
    : base_type(ip, ::std::forward<Args>(args)...) {}
template <typename... Args>
inline constexpr rs_std::Result<::cbor::rust::Value, ::cbor::rust::CborEvent>::
    Result(rs_std::unexpect_t u, Args&&... args) noexcept
    : base_type(u, ::std::forward<Args>(args)...) {}

#endif

#pragma clang diagnostic pop
