// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#include "gpu/config/gpu_driver_bug_list_autogen.h"

#include <array>
#include <iterator>

#include "gpu/config/gpu_driver_bug_workaround_type.h"

namespace gpu {

const std::array<GpuControlList::Entry, 97>& GetGpuDriverBugListEntries() {

#include "gpu/config/gpu_driver_bug_list_arrays_and_structs_autogen.h"
#include "gpu/config/gpu_driver_bug_list_exceptions_autogen.h"

static const std::array<GpuControlList::Entry, 97> kGpuDriverBugListEntries = {{
{
1,  // id
"Imagination driver doesn't like uploading lots of buffer data constantly",
base::span(kFeatureListForWorkaroundsEntry1),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry1),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry1,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry1_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
2,  // id
"ARM driver doesn't like uploading lots of buffer data constantly",
base::span(kFeatureListForWorkaroundsEntry2),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry2),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry2,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry2_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
21,  // id
"Vivante GPUs are buggy with context switching",
base::span(kFeatureListForWorkaroundsEntry21),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry21),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry21,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
22,  // id
"Imagination drivers are buggy with context switching",
base::span(kFeatureListForWorkaroundsEntry22),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry22),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry22,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
24,  // id
"Mali-4xx drivers throw an error when a buffer object's size is set to 0",
base::span(kFeatureListForWorkaroundsEntry24),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry24),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry24,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
31,  // id
"Always use virtualized contexts on Android",
base::span(kFeatureListForWorkaroundsEntry31),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry31),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
42,  // id
"Framebuffer discarding causes flickering on older IMG drivers",
base::span(kFeatureListForWorkaroundsEntry42),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry42),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry42,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
43,  // id
"Framebuffer discarding doesn't accept trivial attachments on Vivante",
base::span(kFeatureListForWorkaroundsEntry43),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry43),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry43,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
49,  // id
"The first draw operation from an idle state is slow",
base::span(kFeatureListForWorkaroundsEntry49),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry49),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry49,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
71,  // id
"Vivante's support of OES_standard_derivatives is buggy",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry71),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry71),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry71,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
91,  // id
"ETC1 non-power-of-two sized textures crash older IMG drivers",
base::span(kFeatureListForWorkaroundsEntry91),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry91),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry91,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
93,  // id
"The GL implementation on the Android emulator has problems with PBOs.",
base::span(kFeatureListForWorkaroundsEntry93),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry93),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry93,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry93_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
95,  // id
"glClear does not always work on these drivers",
base::span(kFeatureListForWorkaroundsEntry95),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry95),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry95,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry95_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
98,  // id
"PowerVR SGX 540 drivers throw GL_OUT_OF_MEMORY error when a buffer object's size is set to 0",
base::span(kFeatureListForWorkaroundsEntry98),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry98),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry98,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
102,  // id
"Adreno 420 driver loses FBO attachment contents on bound FBO deletion",
base::span(kFeatureListForWorkaroundsEntry102),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry102),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry102,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
103,  // id
"Adreno 420 driver drops draw calls after FBO invalidation",
base::span(kFeatureListForWorkaroundsEntry103),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry103),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry103,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
105,  // id
"Framebuffer discarding causes corruption on Mali-4xx",
base::span(kFeatureListForWorkaroundsEntry105),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry105),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry105,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
106,  // id
"EXT_occlusion_query_boolean hangs on PowerVR SGX 544 (IMG) drivers",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry106),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry106,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
110,  // id
"EGL Sync server causes crashes on Adreno 2xx and 3xx drivers",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry110),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry110),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry110,  // driver info
&kGLStringsForWorkaroundsEntry110,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
112,  // id
"EXT_disjoint_timer_query fails after 2 queries on adreno 3xx in lollypop",
base::span(kFeatureListForWorkaroundsEntry112),  // features
base::span(kDisabledExtensionsForEntry112),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry112),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry112,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
113,  // id
"EXT_disjoint_timer_query fails after 256 queries on adreno 4xx",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry113),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry113),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry113,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
115,  // id
"glGetIntegerv with GL_GPU_DISJOINT_EXT causes GL_INVALID_ENUM error",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry115),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry115),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry115,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry115_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
117,  // id
"GL_KHR_blend_equation_advanced breaks blending on Adreno 4xx",
base::span(kFeatureListForWorkaroundsEntry117),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry117),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry117,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
119,  // id
"Context lost recovery often fails on Mali-400/450 on Android.",
base::span(kFeatureListForWorkaroundsEntry119),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry119),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry119,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
125,  // id
"glFinish doesn't clear caches on Android",
base::span(kFeatureListForWorkaroundsEntry125),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry125),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry125,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
126,  // id
"Program binaries contain incorrect bound attribute locations on Adreno 3xx GPUs",
base::span(kFeatureListForWorkaroundsEntry126),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry126),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry126,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
127,  // id
"Android Adreno crashes on binding incomplete cube map texture to FBO",
base::span(kFeatureListForWorkaroundsEntry127),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry127),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry127,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
132,  // id
"On Intel GPUs MSAA performance is not acceptable for GPU rasterization",
base::span(kFeatureListForWorkaroundsEntry132),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry132),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryActive,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry132),  // exceptions
},
{
137,  // id
"NVIDIA fails glReadPixels from incomplete cube map texture",
base::span(kFeatureListForWorkaroundsEntry137),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry137),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry137,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
138,  // id
"NVIDIA drivers before 346 lack features in NV_path_rendering and related extensions to implement driver level path rendering.",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry138),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry138),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry138,  // driver info
&kGLStringsForWorkaroundsEntry138,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
140,  // id
"glReadPixels fails on FBOs with SRGB_ALPHA textures, Nexus 5X",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry140),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry140),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry140,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
147,  // id
"Limit max texure size to 4096 on older Android devices.",
base::span(kFeatureListForWorkaroundsEntry147),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "14.0", nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
157,  // id
"Testing fences was broken on Mali ES2 drivers for specific phone models",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry157),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry157),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry157,  // GL strings
&kMachineModelInfoForEntry157,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry157_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
162,  // id
"Framebuffer discarding not useful on NVIDIA Kepler architecture and later",
base::span(kFeatureListForWorkaroundsEntry162),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry162),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry162,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry162_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
165,  // id
"Unpacking overlapping rows from unpack buffers is unstable on NVIDIA GL driver",
base::span(kFeatureListForWorkaroundsEntry165),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry165),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry165,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
176,  // id
"glClear does not work on Acer Predator GT-810",
base::span(kFeatureListForWorkaroundsEntry176),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry176),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry176,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
180,  // id
"eglCreateImageKHR fails for one component textures on PowerVR",
base::span(kFeatureListForWorkaroundsEntry180),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry180),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry180,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
206,  // id
"Disable KHR_blend_equation_advanced until cc shaders are updated",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry206),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry206),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
212,  // id
"Program binaries don't contain transform feedback varyings on Qualcomm GPUs",
base::span(kFeatureListForWorkaroundsEntry212),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry212),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry212,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
215,  // id
"Fake no-op GPU driver bug workaround for testing",
base::span(kFeatureListForWorkaroundsEntry215),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry215),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry215_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
216,  // id
"Pack parameters work incorrectly with pack buffer bound",
base::span(kFeatureListForWorkaroundsEntry216),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry216),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry216,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
217,  // id
"Alignment works incorrectly with unpack buffer bound",
base::span(kFeatureListForWorkaroundsEntry217),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry217),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry217,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
218,  // id
"Certain Adreno 4xx and 5xx drivers often crash in glProgramBinary.",
base::span(kFeatureListForWorkaroundsEntry218),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry218),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry218,  // driver info
&kGLStringsForWorkaroundsEntry218,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
221,  // id
"Very large instanced draw calls crash on some Adreno 3xx drivers",
base::span(kFeatureListForWorkaroundsEntry221),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry221),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry221,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
231,  // id
"Multisampled color renderbuffers can't be resized on Qualcomm 4xx/5xx",
base::span(kFeatureListForWorkaroundsEntry231),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry231),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry231,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
241,  // id
"On Intel GPUs MSAA performance is not acceptable for GPU rasterization. Duplicate of 132 for Android",
base::span(kFeatureListForWorkaroundsEntry241),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry241),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry241,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
246,  // id
"Code produced by initializing variables using loops can trigger crashes on some Adreno drivers.",
base::span(kFeatureListForWorkaroundsEntry246),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry246),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry246,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
247,  // id
"EXT_disjoint_timer_query is broken on Samsung Galaxy S6",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry247),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry247),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry247,  // GL strings
&kMachineModelInfoForEntry247,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
251,  // id
"Vivante GPUs shader cache breaks rendering",
base::span(kFeatureListForWorkaroundsEntry251),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry251),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry251,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
256,  // id
"Expose WebGL's disjoint_timer_query extensions on platforms with site isolation",
base::span(kFeatureListForWorkaroundsEntry256),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry256),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry256),  // exceptions
},
{
257,  // id
"Fake entry for testing disabling of WebGL extensions",
base::span<const int>(),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span(kDisabledWebGLExtensionsForEntry257),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry257),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry257_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
262,  // id
"Program fails in PowerVR*GX6250 drivers if gl_Position is not set",
base::span(kFeatureListForWorkaroundsEntry262),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry262),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry262,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
263,  // id
"Program fails in PowerVR SGX54x drivers if gl_Position is not set",
base::span(kFeatureListForWorkaroundsEntry263),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry263),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry263,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
264,  // id
"Program fails in PowerVR G6200 drivers if gl_Position is not set",
base::span(kFeatureListForWorkaroundsEntry264),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry264),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry264,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
266,  // id
"Crash in gl::GLApiBase::glGetQueryObjectui64vFn with NetEase devices ",
base::span(kFeatureListForWorkaroundsEntry266),  // features
base::span(kDisabledExtensionsForEntry266),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry266),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry266,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
268,  // id
"Limit MSAA to 4x on Android devices",
base::span(kFeatureListForWorkaroundsEntry268),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry268),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
272,  // id
"A deleted query id for GL_TIMESTAMP cannot be reused for other query targets",
base::span(kFeatureListForWorkaroundsEntry272),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry272),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry272,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
280,  // id
"ReadPixels is broken with EXT_multisampled_render_to_texture on recent Adreno drivers.",
base::span(kFeatureListForWorkaroundsEntry280),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry280),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry280,  // driver info
&kGLStringsForWorkaroundsEntry280,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
290,  // id
"Round down glBindBufferRange size to a multiple of 4 on Qualcomm Adreno GPUs for uniform buffers",
base::span(kFeatureListForWorkaroundsEntry290),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry290),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry290,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
292,  // id
"adjust src/dst region if blitting pixels outside framebuffer on Android NVIDIA",
base::span(kFeatureListForWorkaroundsEntry292),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry292),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry292,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
299,  // id
"Context lost recovery often fails on PowerVR Rogue GE8* GPUs on Android.",
base::span(kFeatureListForWorkaroundsEntry299),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry299),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry299,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
306,  // id
"Program binaries don't contain transform feedback varyings on Mali GPUs",
base::span(kFeatureListForWorkaroundsEntry306),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry306),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry306,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
312,  // id
"Crash on Mali-T8x when using glTexImage2D",
base::span(kFeatureListForWorkaroundsEntry312),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry312),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry312,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
314,  // id
"Crash on Adreno when using GL_EXT_shader_framebuffer_fetch",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry314),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry314),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry314,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
320,  // id
"Remove dynamic indexing for swizzled vectors on Android",
base::span(kFeatureListForWorkaroundsEntry320),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry320),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
334,  // id
"Some drivers seem to require as to use original texture whenever possible",
base::span(kFeatureListForWorkaroundsEntry334),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry334),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
358,  // id
"Always assume float formats are renderable on Android except RGB32F",
base::span(kFeatureListForWorkaroundsEntry358),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry358),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
365,  // id
"Context lost recovery often fails on Adreno with SkiaRenderer GL.",
base::span(kFeatureListForWorkaroundsEntry365),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry365),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry365,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
367,  // id
"ANGLE cannot recover from context lost",
base::span(kFeatureListForWorkaroundsEntry367),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry367),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry367,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
398,  // id
"On pre-Ice Lake Intel GPUs MSAA performance is not acceptable for GPU rasterization",
base::span(kFeatureListForWorkaroundsEntry398),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry398),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryActive,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
&kIntelConditionsForEntry398_619971032,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry398),  // exceptions
},
{
399,  // id
"On pre-Ice Lake Intel GPUs MSAA performance is not acceptable for GPU rasterization. Duplicate of 398 for Android",
base::span(kFeatureListForWorkaroundsEntry399),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry399),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry399,  // GL strings
nullptr,  // machine model info
&kIntelConditionsForEntry399_619971032,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
425,  // id
"Single component images fail on some embedded Intel GPUs",
base::span(kFeatureListForWorkaroundsEntry425),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry425),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry425,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
456,  // id
"Limit max texure size to 8192 on Android.",
base::span(kFeatureListForWorkaroundsEntry456),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
466,  // id
"Program binaries don't contain transform feedback varyings on Imagination GPUs",
base::span(kFeatureListForWorkaroundsEntry466),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry466),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry466,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
471,  // id
"IMG drivers can sometimes reference previously bound complete framebuffers.",
base::span(kFeatureListForWorkaroundsEntry471),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry471,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
472,  // id
"Validate GL_MAX_*_UNIFORM_BLOCKS at compile time instead of link time to work around compiler bugs.",
base::span(kFeatureListForWorkaroundsEntry472),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry472,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
476,  // id
"Qualcomm GPUs crash when invalidating incomplete framebuffers",
base::span(kFeatureListForWorkaroundsEntry476),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry476),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry476,  // driver info
&kGLStringsForWorkaroundsEntry476,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
480,  // id
"Reattach FBO depth/stencil attachments when they are reallocated on Qualcomm GPUs",
base::span(kFeatureListForWorkaroundsEntry480),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry480),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry480,  // driver info
&kGLStringsForWorkaroundsEntry480,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
482,  // id
"Split full-image level 0 PBO uploads via TexSubImage2D into two calls to work around driver bugs.",
base::span(kFeatureListForWorkaroundsEntry482),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry482),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry482,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
483,  // id
"Reset texture base level before calling glCompressedTexImage2D or glCompressedTexSubImage2D for ASTC textures to work around PowerVR driver bug.",
base::span(kFeatureListForWorkaroundsEntry483),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry483),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry483,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
484,  // id
"Pack large row length separately when packing into a pixel pack buffer to work around Mali driver bug.",
base::span(kFeatureListForWorkaroundsEntry484),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry484),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry484,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
485,  // id
"Limit the number of declared varying output components at compile time to work around a PowerVR driver bug.",
base::span(kFeatureListForWorkaroundsEntry485),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry485),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry485,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
486,  // id
"Changing BASE_LEVEL of NPOT immutable texture triggers driver bug on PowerVR GPUs.",
base::span(kFeatureListForWorkaroundsEntry486),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry486),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry486,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
487,  // id
"Reattach texture to FBO after layer count increase on PowerVR GPUs.",
base::span(kFeatureListForWorkaroundsEntry487),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry487),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry487,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
488,  // id
"Flush pending GPU jobs/queries before unbinding or deleting a user framebuffer object on ARM Mali Valhall/Avalon GPUs to avoid driver crash.",
base::span(kFeatureListForWorkaroundsEntry488),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry488),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry488,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
489,  // id
"Lose context when 3D texture depth increases on Qualcomm GPUs",
base::span(kFeatureListForWorkaroundsEntry489),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry489),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry489,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
490,  // id
"Reset texture base level before calling glTexStorage2D to work around PowerVR driver bug.",
base::span(kFeatureListForWorkaroundsEntry490),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry490),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry490,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
491,  // id
"Limit max texture image units to 13 on PowerVR GPUs.",
base::span(kFeatureListForWorkaroundsEntry491),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry491),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry491,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
492,  // id
"Upload oversized nonzero mip levels via unpack buffer on PowerVR GPUs",
base::span(kFeatureListForWorkaroundsEntry492),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry492),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry492,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
493,  // id
"Issue a glFinish before calling glBlitFramebuffer if the draw framebuffer has multiple color attachments or any color attachment's texture has base_level > 0.",
base::span(kFeatureListForWorkaroundsEntry493),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry493),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry493,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
494,  // id
"Upload non-power-of-two textures via TexSubImage2D instead of TexImage2D when uploading client-side data.",
base::span(kFeatureListForWorkaroundsEntry494),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry494),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry494,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
496,  // id
"Program binary cache entries can collide in Imagination's GLES driver",
base::span(kFeatureListForWorkaroundsEntry496),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry496),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry496,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry496_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
498,  // id
"Recreate mipmap levels before calling glGenerateMipmap on Mali GPUs",
base::span(kFeatureListForWorkaroundsEntry498),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry498),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry498,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
499,  // id
"adjust src/dst region if blitting pixels outside framebuffer on Android Mali",
base::span(kFeatureListForWorkaroundsEntry499),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry499),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry499,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
501,  // id
"Older PowerVR drivers mishandle large 3D NPOT sizes in texStorage3D",
base::span(kFeatureListForWorkaroundsEntry501),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry501),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry501,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
503,  // id
"Readbacks interrupted by a GPU reset can complete without error on Mali and deliver unwritten memory; check the reset status before delivering readback results and PBO/buffer-map readback delivery",
base::span(kFeatureListForWorkaroundsEntry503),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry503),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry503,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
505,  // id
"Disable GL_ANGLE_shader_pixel_local_storage on Imagination's GLES driver",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry505),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry505),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry505,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry505_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
}};
return kGpuDriverBugListEntries;
}
}  // namespace gpu
