#include "src/objects/js-collection.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=5&c=1
class TorqueGeneratedJSCollectionAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-collection.tq?l=11&c=3
  static constexpr int kTableOffset = 12;
  static constexpr int kTableOffsetEnd = kTableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kHeaderSize = kTableOffsetEnd + 1;

  static_assert(kTableOffset == offsetof(JSCollection, table_),
                "Value of JSCollection::kTableOffset defined in Torque and offset of field JSCollection::table in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=13&c=1
class TorqueGeneratedJSSetAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 16;
  static constexpr int kEndOfWeakFieldsOffset = 16;
  static constexpr int kStartOfStrongFieldsOffset = 16;
  static constexpr int kEndOfStrongFieldsOffset = 16;
  static constexpr int kHeaderSize = 16;

};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=15&c=1
class TorqueGeneratedJSMapAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 16;
  static constexpr int kEndOfWeakFieldsOffset = 16;
  static constexpr int kStartOfStrongFieldsOffset = 16;
  static constexpr int kEndOfStrongFieldsOffset = 16;
  static constexpr int kHeaderSize = 16;

};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=18&c=1
class TorqueGeneratedJSWeakCollectionAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 12;
  // https://crsrc.org/c/v8/src/objects/js-collection.tq?l=22&c=3
  static constexpr int kTableOffset = 12;
  static constexpr int kTableOffsetEnd = kTableOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kTableOffsetEnd + 1;
  static constexpr int kHeaderSize = kTableOffsetEnd + 1;

  static_assert(kTableOffset == offsetof(JSWeakCollection, table_),
                "Value of JSWeakCollection::kTableOffset defined in Torque and offset of field JSWeakCollection::table in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=24&c=1
class TorqueGeneratedJSWeakSetAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 16;
  static constexpr int kEndOfWeakFieldsOffset = 16;
  static constexpr int kStartOfStrongFieldsOffset = 16;
  static constexpr int kEndOfStrongFieldsOffset = 16;
  static constexpr int kHeaderSize = 16;

};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=26&c=1
class TorqueGeneratedJSWeakMapAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 16;
  static constexpr int kEndOfWeakFieldsOffset = 16;
  static constexpr int kStartOfStrongFieldsOffset = 16;
  static constexpr int kEndOfStrongFieldsOffset = 16;
  static constexpr int kHeaderSize = 16;

};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=29&c=1
class TorqueGeneratedJSMapIteratorAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 20;
  static constexpr int kEndOfWeakFieldsOffset = 20;
  static constexpr int kStartOfStrongFieldsOffset = 20;
  static constexpr int kEndOfStrongFieldsOffset = 20;
  static constexpr int kHeaderSize = 20;

};

// Definition https://crsrc.org/c/v8/src/objects/js-collection.tq?l=39&c=1
class TorqueGeneratedJSSetIteratorAsserts {
  static constexpr int kStartOfWeakFieldsOffset = 20;
  static constexpr int kEndOfWeakFieldsOffset = 20;
  static constexpr int kStartOfStrongFieldsOffset = 20;
  static constexpr int kEndOfStrongFieldsOffset = 20;
  static constexpr int kHeaderSize = 20;

};

} // namespace internal
} // namespace v8
