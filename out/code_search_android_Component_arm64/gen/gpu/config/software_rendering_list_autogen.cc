// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#include "gpu/config/software_rendering_list_autogen.h"

#include <array>
#include <iterator>

#include "gpu/config/gpu_feature_type.h"

namespace gpu {

const std::array<GpuControlList::Entry, 15>& GetSoftwareRenderingListEntries() {

#include "gpu/config/software_rendering_list_arrays_and_structs_autogen.h"
#include "gpu/config/software_rendering_list_exceptions_autogen.h"

static const std::array<GpuControlList::Entry, 15> kSoftwareRenderingListEntries = {{
{
4,  // id
"The Intel Mobile 945 Express family of chipsets is not compatible with WebGL",
base::span(kFeatureListForSoftwareEntry4),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry4),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span(kDevicesForSoftwareEntry4),  // Devices
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
8,  // id
"NVIDIA GeForce FX Go5200 is assumed to be buggy",
base::span(kFeatureListForSoftwareEntry8),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry8),  // CrBugs
{
GpuControlList::kOsAny,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span(kDevicesForSoftwareEntry8),  // Devices
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
76,  // id
"WebGL is disabled on Android unless the GPU runs in a separate process or reset notification is supported",
base::span(kFeatureListForSoftwareEntry76),  // features
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
&kMoreForEntry76_1043157500,  // more data
},
base::span(kExceptionsForEntry76),  // exceptions
},
{
96,  // id
"Blocklist GPU raster/canvas on all except known good GPUs and newer Android releases",
base::span(kFeatureListForSoftwareEntry96),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry96),  // CrBugs
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
base::span(kExceptionsForEntry96),  // exceptions
},
{
100,  // id
"GPU rasterization and canvas is blocklisted on Nexus 10",
base::span(kFeatureListForSoftwareEntry100),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry100),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry100,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
102,  // id
"Accelerated 2D canvas and Ganesh broken on Galaxy Tab 2",
base::span(kFeatureListForSoftwareEntry102),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry102),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry102,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
104,  // id
"GPU raster broken on PowerVR Rogue",
base::span(kFeatureListForSoftwareEntry104),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry104),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry104,  // driver info
&kGLStringsForSoftwareEntry104,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
105,  // id
"GPU raster broken on PowerVR SGX even on Lollipop",
base::span(kFeatureListForSoftwareEntry105),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry105),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry105,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
106,  // id
"GPU raster broken on ES2-only Adreno 3xx drivers",
base::span(kFeatureListForSoftwareEntry106),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry106),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry106,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry106_1043157500,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
108,  // id
"GPU rasterization image color broken on Vivante",
base::span(kFeatureListForSoftwareEntry108),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry108),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry108,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
152,  // id
"Test entry where all features except WebGL blocklisted",
base::span(kFeatureListForSoftwareEntry152),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
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
&kMoreForEntry152_1043157500,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
153,  // id
"Test entry where WebGL is blocklisted",
base::span(kFeatureListForSoftwareEntry153),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
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
&kMoreForEntry153_1043157500,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
179,  // id
"Older Adreno 4xx drivers drop draws sometimes with oop-c",
base::span(kFeatureListForSoftwareEntry179),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry179),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry179,  // driver info
&kGLStringsForSoftwareEntry179,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
185,  // id
"Disable DrDc on multiple gpus.",
base::span(kFeatureListForSoftwareEntry185),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry185),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry185,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
189,  // id
"Disable Graphite on PowerVR due to rendering glitches",
base::span(kFeatureListForSoftwareEntry189),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry189),  // CrBugs
{
GpuControlList::kOsAndroid,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry189,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
}};
return kSoftwareRenderingListEntries;
}
}  // namespace gpu
