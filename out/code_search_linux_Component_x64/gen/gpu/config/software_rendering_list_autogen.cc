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

const std::array<GpuControlList::Entry, 25>& GetSoftwareRenderingListEntries() {

#include "gpu/config/software_rendering_list_arrays_and_structs_autogen.h"
#include "gpu/config/software_rendering_list_exceptions_autogen.h"

static const std::array<GpuControlList::Entry, 25> kSoftwareRenderingListEntries = {{
{
3,  // id
"GL driver is software rendered. GPU acceleration is disabled",
base::span(kFeatureListForSoftwareEntry3),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry3),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry3,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
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
17,  // id
"Older Intel mesa drivers are crash-prone",
base::span(kFeatureListForSoftwareEntry17),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry17),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry17,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry17),  // exceptions
},
{
18,  // id
"NVIDIA Quadro FX 1500 is buggy",
base::span(kFeatureListForSoftwareEntry18),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry18),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span(kDevicesForSoftwareEntry18),  // Devices
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
27,  // id
"ATI/AMD cards with older drivers in Linux are crash-prone",
base::span(kFeatureListForSoftwareEntry27),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry27),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry27,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry27),  // exceptions
},
{
28,  // id
"ATI/AMD cards with third-party drivers in Linux are crash-prone",
base::span(kFeatureListForSoftwareEntry28),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry28),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry28,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry28),  // exceptions
},
{
29,  // id
"ATI/AMD cards with third-party drivers in Linux are crash-prone",
base::span(kFeatureListForSoftwareEntry29),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry29),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry29,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry29),  // exceptions
},
{
30,  // id
"NVIDIA cards with nouveau drivers in Linux are unstable",
base::span(kFeatureListForSoftwareEntry30),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry30),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry30,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
37,  // id
"Older drivers are unreliable for Optimus on Linux",
base::span(kFeatureListForSoftwareEntry37),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry37),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleOptimus,  // multi_gpu_style
&kDriverInfoForSoftwareEntry37,  // driver info
&kGLStringsForSoftwareEntry37,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
47,  // id
"NVIDIA linux drivers older than 295.* are assumed to be buggy",
base::span(kFeatureListForSoftwareEntry47),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry47),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry47,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
50,  // id
"Disable VMware virtualized renderer on older Mesa",
base::span(kFeatureListForSoftwareEntry50),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry50),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForSoftwareEntry50,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry50),  // exceptions
},
{
56,  // id
"NVIDIA linux drivers are unstable when using multiple Open GL contexts and with low memory",
base::span(kFeatureListForSoftwareEntry56),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry56),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry56,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
93,  // id
"GLX indirect rendering (X remoting) is not supported",
base::span(kFeatureListForSoftwareEntry93),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry93),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry93_1043157500,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
95,  // id
"AMD driver version 13.101 is unstable on linux.",
base::span(kFeatureListForSoftwareEntry95),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry95),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry95,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
107,  // id
"Haswell GT1 Intel drivers are buggy on kernels < 3.19.1",
base::span(kFeatureListForSoftwareEntry107),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry107),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.19.1", nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
&kIntelConditionsForEntry107_1043157500,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
125,  // id
"VirtualBox driver is unstable on linux.",
base::span(kFeatureListForSoftwareEntry125),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry125),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x80ee,  // vendor_id
base::span(kDevicesForSoftwareEntry125),  // Devices
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
129,  // id
"Intel drivers are buggy on Linux 2.x",
base::span(kFeatureListForSoftwareEntry129),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry129),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // os_version
0x8086,  // vendor_id
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
131,  // id
"Mesa drivers older than 10.4.3 is crash prone on Linux Intel i965gm",
base::span(kFeatureListForSoftwareEntry131),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry131),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span(kDevicesForSoftwareEntry131),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry131,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
134,  // id
"Mesa driver 10.1.3 renders incorrectly and crashes on multiple vendors",
base::span(kFeatureListForSoftwareEntry134),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry134),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry134,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span(kExceptionsForEntry134),  // exceptions
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
161,  // id
"Newer Mesa drivers experience visual corruption on very old hardware",
base::span(kFeatureListForSoftwareEntry161),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry161),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span(kDevicesForSoftwareEntry161),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForSoftwareEntry161,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
176,  // id
"VMware is buggy on Linux",
base::span(kFeatureListForSoftwareEntry176),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry176),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x15ad,  // vendor_id
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
186,  // id
"Disable webgpu on vk via gl interop",
base::span(kFeatureListForSoftwareEntry186),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForSoftwareEntry186),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
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
base::span(kExceptionsForEntry186),  // exceptions
},
}};
return kSoftwareRenderingListEntries;
}
}  // namespace gpu
