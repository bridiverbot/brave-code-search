#include "src/objects/literal-objects.h"

namespace v8 {
namespace internal {

// Definition https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=5&c=1
class TorqueGeneratedObjectBoilerplateDescriptionAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 8;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=7&c=3
  static constexpr int kBackingStoreSizeOffset = 8;
  static constexpr int kBackingStoreSizeOffsetEnd = kBackingStoreSizeOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=8&c=3
  static constexpr int kFlagsOffset = kBackingStoreSizeOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=9&c=3
  static constexpr int kObjectsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kObjectsOffsetEnd = kObjectsOffset + 0 - 1;
  static constexpr int kEndOfStrongFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kObjectsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kObjectsOffsetEnd + 1;

  static_assert(kBackingStoreSizeOffset == offsetof(ObjectBoilerplateDescription, backing_store_size_),
                "Value of ObjectBoilerplateDescription::kBackingStoreSizeOffset defined in Torque and offset of field ObjectBoilerplateDescription::backing_store_size in C++ do not match");
  static_assert(kFlagsOffset == offsetof(ObjectBoilerplateDescription, flags_),
                "Value of ObjectBoilerplateDescription::kFlagsOffset defined in Torque and offset of field ObjectBoilerplateDescription::flags in C++ do not match");
  static_assert(kObjectsOffset == OFFSET_OF_DATA_START(ObjectBoilerplateDescription),
                "Value of ObjectBoilerplateDescription::kObjectsOffset defined in Torque and offset of field ObjectBoilerplateDescription::objects in C++ do not match");
};

// Definition https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=12&c=1
class TorqueGeneratedArrayBoilerplateDescriptionAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=14&c=3
  static constexpr int kFlagsOffset = 4;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=15&c=3
  static constexpr int kConstantElementsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kConstantElementsOffsetEnd = kConstantElementsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kConstantElementsOffsetEnd + 1;
  static constexpr int kHeaderSize = kConstantElementsOffsetEnd + 1;
  static constexpr int kSize = kConstantElementsOffsetEnd + 1;

  static_assert(kFlagsOffset == offsetof(ArrayBoilerplateDescription, flags_),
                "Value of ArrayBoilerplateDescription::kFlagsOffset defined in Torque and offset of field ArrayBoilerplateDescription::flags in C++ do not match");
  static_assert(kConstantElementsOffset == offsetof(ArrayBoilerplateDescription, constant_elements_),
                "Value of ArrayBoilerplateDescription::kConstantElementsOffset defined in Torque and offset of field ArrayBoilerplateDescription::constant_elements in C++ do not match");
  static_assert(kSize <= sizeof(ArrayBoilerplateDescription) && sizeof(ArrayBoilerplateDescription) < kSize + alignof(ArrayBoilerplateDescription));
};

// Definition https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=18&c=1
class TorqueGeneratedRegExpBoilerplateDescriptionAsserts {
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=20&c=3
  static constexpr int kDataOffset = 4;
  static constexpr int kDataOffsetEnd = kDataOffset + kTrustedPointerSize - 1;
  static constexpr int kStartOfStrongFieldsOffset = kDataOffsetEnd + 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=21&c=3
  static constexpr int kFlagsOffset = kDataOffsetEnd + 1;
  static constexpr int kFlagsOffsetEnd = kFlagsOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kFlagsOffsetEnd + 1;
  static constexpr int kHeaderSize = kFlagsOffsetEnd + 1;
  static constexpr int kSize = kFlagsOffsetEnd + 1;

  static_assert(kDataOffset == offsetof(RegExpBoilerplateDescription, data_),
                "Value of RegExpBoilerplateDescription::kDataOffset defined in Torque and offset of field RegExpBoilerplateDescription::data in C++ do not match");
  static_assert(kFlagsOffset == offsetof(RegExpBoilerplateDescription, flags_),
                "Value of RegExpBoilerplateDescription::kFlagsOffset defined in Torque and offset of field RegExpBoilerplateDescription::flags in C++ do not match");
  static_assert(kSize <= sizeof(RegExpBoilerplateDescription) && sizeof(RegExpBoilerplateDescription) < kSize + alignof(RegExpBoilerplateDescription));
};

// Definition https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=24&c=1
class TorqueGeneratedClassBoilerplateAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=26&c=3
  static constexpr int kArgumentsCountOffset = 4;
  static constexpr int kArgumentsCountOffsetEnd = kArgumentsCountOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=27&c=3
  static constexpr int kStaticPropertiesTemplateOffset = kArgumentsCountOffsetEnd + 1;
  static constexpr int kStaticPropertiesTemplateOffsetEnd = kStaticPropertiesTemplateOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=28&c=3
  static constexpr int kStaticElementsTemplateOffset = kStaticPropertiesTemplateOffsetEnd + 1;
  static constexpr int kStaticElementsTemplateOffsetEnd = kStaticElementsTemplateOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=29&c=3
  static constexpr int kStaticComputedPropertiesOffset = kStaticElementsTemplateOffsetEnd + 1;
  static constexpr int kStaticComputedPropertiesOffsetEnd = kStaticComputedPropertiesOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=30&c=3
  static constexpr int kInstancePropertiesTemplateOffset = kStaticComputedPropertiesOffsetEnd + 1;
  static constexpr int kInstancePropertiesTemplateOffsetEnd = kInstancePropertiesTemplateOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=31&c=3
  static constexpr int kInstanceElementsTemplateOffset = kInstancePropertiesTemplateOffsetEnd + 1;
  static constexpr int kInstanceElementsTemplateOffsetEnd = kInstanceElementsTemplateOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=32&c=3
  static constexpr int kInstanceComputedPropertiesOffset = kInstanceElementsTemplateOffsetEnd + 1;
  static constexpr int kInstanceComputedPropertiesOffsetEnd = kInstanceComputedPropertiesOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kHeaderSize = kInstanceComputedPropertiesOffsetEnd + 1;
  static constexpr int kSize = kInstanceComputedPropertiesOffsetEnd + 1;

  static_assert(kArgumentsCountOffset == offsetof(ClassBoilerplate, arguments_count_),
                "Value of ClassBoilerplate::kArgumentsCountOffset defined in Torque and offset of field ClassBoilerplate::arguments_count in C++ do not match");
  static_assert(kStaticPropertiesTemplateOffset == offsetof(ClassBoilerplate, static_properties_template_),
                "Value of ClassBoilerplate::kStaticPropertiesTemplateOffset defined in Torque and offset of field ClassBoilerplate::static_properties_template in C++ do not match");
  static_assert(kStaticElementsTemplateOffset == offsetof(ClassBoilerplate, static_elements_template_),
                "Value of ClassBoilerplate::kStaticElementsTemplateOffset defined in Torque and offset of field ClassBoilerplate::static_elements_template in C++ do not match");
  static_assert(kStaticComputedPropertiesOffset == offsetof(ClassBoilerplate, static_computed_properties_),
                "Value of ClassBoilerplate::kStaticComputedPropertiesOffset defined in Torque and offset of field ClassBoilerplate::static_computed_properties in C++ do not match");
  static_assert(kInstancePropertiesTemplateOffset == offsetof(ClassBoilerplate, instance_properties_template_),
                "Value of ClassBoilerplate::kInstancePropertiesTemplateOffset defined in Torque and offset of field ClassBoilerplate::instance_properties_template in C++ do not match");
  static_assert(kInstanceElementsTemplateOffset == offsetof(ClassBoilerplate, instance_elements_template_),
                "Value of ClassBoilerplate::kInstanceElementsTemplateOffset defined in Torque and offset of field ClassBoilerplate::instance_elements_template in C++ do not match");
  static_assert(kInstanceComputedPropertiesOffset == offsetof(ClassBoilerplate, instance_computed_properties_),
                "Value of ClassBoilerplate::kInstanceComputedPropertiesOffset defined in Torque and offset of field ClassBoilerplate::instance_computed_properties in C++ do not match");
  static_assert(kSize <= sizeof(ClassBoilerplate) && sizeof(ClassBoilerplate) < kSize + alignof(ClassBoilerplate));
};

// Definition https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=35&c=1
class TorqueGeneratedPrototypeSharedClosureInfoAsserts {
  static constexpr int kStartOfStrongFieldsOffset = 4;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=37&c=3
  static constexpr int kBoilerplateDescriptionOffset = 4;
  static constexpr int kBoilerplateDescriptionOffsetEnd = kBoilerplateDescriptionOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=38&c=3
  static constexpr int kClosureFeedbackCellArrayOffset = kBoilerplateDescriptionOffsetEnd + 1;
  static constexpr int kClosureFeedbackCellArrayOffsetEnd = kClosureFeedbackCellArrayOffset + kTaggedSize - 1;
  // https://crsrc.org/c/v8/src/objects/literal-objects.tq?l=39&c=3
  static constexpr int kContextOffset = kClosureFeedbackCellArrayOffsetEnd + 1;
  static constexpr int kContextOffsetEnd = kContextOffset + kTaggedSize - 1;
  static constexpr int kEndOfStrongFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kStartOfWeakFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kEndOfWeakFieldsOffset = kContextOffsetEnd + 1;
  static constexpr int kHeaderSize = kContextOffsetEnd + 1;
  static constexpr int kSize = kContextOffsetEnd + 1;

  static_assert(kBoilerplateDescriptionOffset == offsetof(PrototypeSharedClosureInfo, boilerplate_description_),
                "Value of PrototypeSharedClosureInfo::kBoilerplateDescriptionOffset defined in Torque and offset of field PrototypeSharedClosureInfo::boilerplate_description in C++ do not match");
  static_assert(kClosureFeedbackCellArrayOffset == offsetof(PrototypeSharedClosureInfo, closure_feedback_cell_array_),
                "Value of PrototypeSharedClosureInfo::kClosureFeedbackCellArrayOffset defined in Torque and offset of field PrototypeSharedClosureInfo::closure_feedback_cell_array in C++ do not match");
  static_assert(kContextOffset == offsetof(PrototypeSharedClosureInfo, context_),
                "Value of PrototypeSharedClosureInfo::kContextOffset defined in Torque and offset of field PrototypeSharedClosureInfo::context in C++ do not match");
  static_assert(kSize <= sizeof(PrototypeSharedClosureInfo) && sizeof(PrototypeSharedClosureInfo) < kSize + alignof(PrototypeSharedClosureInfo));
};

} // namespace internal
} // namespace v8
