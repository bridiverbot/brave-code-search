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

const std::array<GpuControlList::Entry, 12>& GetSoftwareRenderingListEntries() {

#include "gpu/config/software_rendering_list_arrays_and_structs_autogen.h"
#include "gpu/config/software_rendering_list_exceptions_autogen.h"

static const std::array<GpuControlList::Entry, 12> kSoftwareRenderingListEntries = {{
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
111,  // id
"Apple Software Renderer used under VMWare experiences synchronization issues with GPU Raster",
base::span(kFeatureListForSoftwareEntry111),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry111),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x15ad,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
112,  // id
"Intel HD 3000 driver crashes frequently on Mac",
base::span(kFeatureListForSoftwareEntry112),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry112),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span(kDevicesForSoftwareEntry112),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
113,  // id
"Some GPUs on Mac can perform poorly with GPU rasterization. Disable all known Intel GPUs other than Intel 6th and 7th Generation cards, which have been tested.",
base::span(kFeatureListForSoftwareEntry113),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry113),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span(kDevicesForSoftwareEntry113),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
114,  // id
"Some GPUs on Mac can perform poorly with GPU rasterization. Disable all known NVidia GPUs other than the Geforce 6xx and 7xx series, which have been tested.",
base::span(kFeatureListForSoftwareEntry114),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry114),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span(kDevicesForSoftwareEntry114),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
115,  // id
"Some GPUs on Mac can perform poorly with GPU rasterization. Disable all known AMD GPUs other than the R200, R300, and D series, which have been tested.",
base::span(kFeatureListForSoftwareEntry115),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry115),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
base::span(kDevicesForSoftwareEntry115),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
116,  // id
"Some GPUs on Mac can perform poorly with GPU rasterization. Disable untested Virtualbox GPU.",
base::span(kFeatureListForSoftwareEntry116),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry116),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x80ee,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
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
177,  // id
"Apple Software Renderer used under VMWare experiences synchronization issues with GPU Raster",
base::span(kFeatureListForSoftwareEntry177),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry177),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryAny,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry177,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
183,  // id
"Don't use the OOPR Canvas feature on Macs with NVIDIA GPUs",
base::span(kFeatureListForSoftwareEntry183),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry183),  // CrBugs
{
GpuControlList::kOsMacosx,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
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
}};
return kSoftwareRenderingListEntries;
}
}  // namespace gpu
