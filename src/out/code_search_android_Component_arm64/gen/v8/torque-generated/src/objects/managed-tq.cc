#include "src/objects/managed.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/managed.tq?l=5&c=1
class TorqueGeneratedCppGCManagedBaseAsserts {
  // https://crsrc.org/c/v8/src/objects/managed.tq?l=7&c=3
  static constexpr int kCppGcWrapperOffset = 4;
  static constexpr int kCppGcWrapperOffsetEnd = kCppGcWrapperOffset + kCppHeapPointerSlotSize - 1;
  static constexpr int kStartOfWeakFieldsOffset = kCppGcWrapperOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kCppGcWrapperOffsetEnd + 1;
  static constexpr int kStartOfStrongFieldsOffset = kCppGcWrapperOffsetEnd + 1;
  static constexpr int kEndOfStrongFieldsOffset = kCppGcWrapperOffsetEnd + 1;
  static constexpr int kHeaderSize = kCppGcWrapperOffsetEnd + 1;
  static constexpr int kSize = kCppGcWrapperOffsetEnd + 1;

  static_assert(kCppGcWrapperOffset == offsetof(CppGCManagedBase, cpp_gc_wrapper_),
                "Value of CppGCManagedBase::kCppGcWrapperOffset defined in Torque and offset of field CppGCManagedBase::cpp_gc_wrapper in C++ do not match");
  static_assert(kSize <= sizeof(CppGCManagedBase) && sizeof(CppGCManagedBase) < kSize + alignof(CppGCManagedBase));
};

} // namespace internal
} // namespace v8
