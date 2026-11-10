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

const std::array<GpuControlList::Entry, 28>& GetGpuDriverBugListEntries() {

#include "gpu/config/gpu_driver_bug_list_arrays_and_structs_autogen.h"
#include "gpu/config/gpu_driver_bug_list_exceptions_autogen.h"

static const std::array<GpuControlList::Entry, 28> kGpuDriverBugListEntries = {{
{
68,  // id
"Disable partial swaps on Mesa drivers (detected with GL_RENDERER)",
base::span(kFeatureListForWorkaroundsEntry68),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry68),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry68,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry68_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
108,  // id
"Mali-4xx on Linux does not support GL_RGB format",
base::span(kFeatureListForWorkaroundsEntry108),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry108),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry108,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
111,  // id
"Discard Framebuffer breaks WebGL on Mali-4xx Linux",
base::span(kFeatureListForWorkaroundsEntry111),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry111),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry111,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
131,  // id
"Linux Mesa drivers crash on glTexSubImage2D() to texture storage bound to FBO",
base::span(kFeatureListForWorkaroundsEntry131),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry131),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry131,  // driver info
nullptr,  // GL strings
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
139,  // id
"Mesa drivers wrongly report supporting GL_EXT_texture_rg with GLES 2.0 prior version 11.1",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry139),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry139),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry139,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry139_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
153,  // id
"Vivante GC1000 with EXT_multisampled_render_to_texture fails glReadPixels",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry153),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry153),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry153,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
159,  // id
"Framebuffer discarding can hurt performance on non-tilers",
base::span(kFeatureListForWorkaroundsEntry159),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry159),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry159,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry159_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
160,  // id
"Framebuffer discarding not useful on NVIDIA Kepler architecture and later",
base::span(kFeatureListForWorkaroundsEntry160),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry160),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x10de,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry160,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry160_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
168,  // id
"VirtualBox driver doesn't correctly support partial swaps.",
base::span(kFeatureListForWorkaroundsEntry168),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry168),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x80ee,  // vendor_id
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
190,  // id
"Disable partial swaps on Mesa drivers (detected with GL_VERSION)",
base::span(kFeatureListForWorkaroundsEntry190),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry190),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry190,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
&kMoreForEntry190_619971032,  // more data
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
222,  // id
"Software to Accelerated canvas update breaks Linux AMD",
base::span(kFeatureListForWorkaroundsEntry222),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry222),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
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
265,  // id
"Crash in glQueryCounter() and glBeginQuery() with VMware driver ",
base::span(kFeatureListForWorkaroundsEntry265),  // features
base::span(kDisabledExtensionsForEntry265),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry265),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry265,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
283,  // id
"Some drivers can't recover after OUT_OF_MEM and context lost",
base::span(kFeatureListForWorkaroundsEntry283),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry283),  // CrBugs
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
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
301,  // id
"Mesa hangs the system when allocating large textures",
base::span(kFeatureListForWorkaroundsEntry301),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry301),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "5.0", nullptr},  // os_version
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
315,  // id
"Disable GL_MESA_framebuffer_flip_y for desktop GL",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry315),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry315),  // CrBugs
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
&kMoreForEntry315_619971032,  // more data
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
331,  // id
"GL and Vulkan interop doesn't work with AMD GPU properly",
base::span<const int>(),  // features
base::span(kDisabledExtensionsForEntry331),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry331),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry331,  // driver info
nullptr,  // GL strings
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
473,  // id
"The AMD Radeon 610M Integrated Graphics chip seems to reliably crash when attempting to initialize VAAPI",
base::span(kFeatureListForWorkaroundsEntry473),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry473),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
base::span(kDevicesForWorkaroundsEntry473),  // Devices
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
474,  // id
"Disable RGB to YUV hardware conversion on NVIDIA Linux",
base::span(kFeatureListForWorkaroundsEntry474),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry474),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry474,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
475,  // id
"Disable accelerated video decoding on AMD Strix Halo to prevent kernel hanging",
base::span(kFeatureListForWorkaroundsEntry475),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry475),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x1002,  // vendor_id
base::span(kDevicesForWorkaroundsEntry475),  // Devices
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
478,  // id
"Program binaries don't contain transform feedback varyings on Mali GPUs",
base::span(kFeatureListForWorkaroundsEntry478),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry478),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x00,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
nullptr,  // driver info
&kGLStringsForWorkaroundsEntry478,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
500,  // id
"Older intel iHD drivers allocate too few tiles for AV1 decode, leading to potential memory corruption.",
base::span(kFeatureListForWorkaroundsEntry500),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span(kCrBugsForWorkaroundsEntry500),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry500,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
{
504,  // id
"Mesa drivers on Intel GPUs on Linux require prior GL work to be finished before Dawn accesses a Vulkan-backed shared image that was last written by GL",
base::span(kFeatureListForWorkaroundsEntry504),  // features
base::span<const char* const>(),  // DisabledExtensions
base::span<const char* const>(),  // DisabledWebGLExtensions
base::span<const uint32_t>(),  // CrBugs
{
GpuControlList::kOsLinux,  // os_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // os_version
0x8086,  // vendor_id
base::span<const GpuControlList::Device>(),  // Devices
GpuControlList::kMultiGpuCategoryNone,  // multi_gpu_category
GpuControlList::kMultiGpuStyleNone,  // multi_gpu_style
&kDriverInfoForWorkaroundsEntry504,  // driver info
nullptr,  // GL strings
nullptr,  // machine model info
nullptr,  // Intel conditions
nullptr,  // more conditions
},
base::span<const GpuControlList::Conditions>(),  // exceptions
},
}};
return kGpuDriverBugListEntries;
}
}  // namespace gpu
