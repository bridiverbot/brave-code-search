// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#ifndef GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
#define GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_

static const std::array<int, 1> kFeatureListForWorkaroundsEntry1 = {
USE_CLIENT_SIDE_ARRAYS_FOR_STREAM_BUFFERS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry1 = {
178093,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry1 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry1_619971032 = {
GpuControlList::kGLTypeGLES,  // gl_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry2 = {
USE_CLIENT_SIDE_ARRAYS_FOR_STREAM_BUFFERS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry2 = {
178093,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry2 = {
"ARM.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry2_619971032 = {
GpuControlList::kGLTypeGLES,  // gl_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry21 = {
UNBIND_FBO_ON_CONTEXT_SWITCH,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry21 = {
179250,
235935,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry21 = {
nullptr,
nullptr,
".*GL_VIV_shader_binary.*",
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry22 = {
UNBIND_FBO_ON_CONTEXT_SWITCH,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry22 = {
230896,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry22 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry24 = {
USE_NON_ZERO_SIZE_FOR_CLIENT_SIDE_STREAM_BUFFERS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry24 = {
231082,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry24 = {
"ARM.*",
".*Mali-4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry31 = {
USE_VIRTUALIZED_GL_CONTEXTS,
};

static const std::array<uint32_t, 15> kCrBugsForWorkaroundsEntry31 = {
154715,
10068,
269829,
294779,
285292,
1018528,
179815,
179250,
229643,
230896,
163464,
233612,
289461,
369316,
678508,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry42 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry42 = {
290876,
488463,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry42 = {
"Imagination.*",
"PowerVR SGX 5.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry43 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry43 = {
299494,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry43 = {
nullptr,
nullptr,
".*GL_VIV_shader_binary.*",
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry49 = {
WAKE_UP_GPU_BEFORE_DRAWING,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry49 = {
309734,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry49 = {
"Qualcomm.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry71 = {
"GL_OES_standard_derivatives",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry71 = {
368005,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry71 = {
nullptr,
nullptr,
".*GL_VIV_shader_binary.*",
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry91 = {
ETC1_POWER_OF_TWO_ONLY,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry91 = {
150500,
414816,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry91 = {
".*Imagination.*",
".*PowerVR SGX 5.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry93 = {
DISABLE_ASYNC_READPIXELS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry93 = {
340882,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry93 = {
"VMware.*",
"Gallium.*",
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry93_619971032 = {
GpuControlList::kGLTypeGLES,  // gl_type
{GpuControlList::kEQ, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry95 = {
GL_CLEAR_BROKEN,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry95 = {
421271,
471017396,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry95 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry95_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kLE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry98 = {
USE_NON_ZERO_SIZE_FOR_CLIENT_SIDE_STREAM_BUFFERS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry98 = {
451501,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry98 = {
"Imagination.*",
"PowerVR SGX 540",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry102 = {
UNBIND_ATTACHMENTS_ON_BOUND_RENDER_FBO_DELETE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry102 = {
457027,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry102 = {
nullptr,
"Adreno \\(TM\\) 4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry103 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry103 = {
443060,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry103 = {
nullptr,
"Adreno \\(TM\\) 4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry105 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry105 = {
449488,
451230,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry105 = {
nullptr,
"Mali-4.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry106 = {
"GL_EXT_occlusion_query_boolean",
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry106 = {
"Imagination.*",
"PowerVR SGX 544",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry110 = {
"EGL_KHR_wait_sync",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry110 = {
482298,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry110 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "95", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry110 = {
"Qualcomm.*",
"Adreno \\(TM\\) [23].*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry112 = {
DISABLE_TIMESTAMP_QUERIES,
};

static const std::array<const char* const, 2> kDisabledExtensionsForEntry112 = {
"GL_EXT_disjoint_timer_query",
"GL_EXT_disjoint_timer_query_webgl2",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry112 = {
477514,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry112 = {
"Qualcomm.*",
"Adreno \\(TM\\) 3.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 2> kDisabledExtensionsForEntry113 = {
"GL_EXT_disjoint_timer_query",
"GL_EXT_disjoint_timer_query_webgl2",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry113 = {
477514,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry113 = {
nullptr,
"Adreno \\(TM\\) 4.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry115 = {
"GL_EXT_disjoint_timer_query",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry115 = {
462553,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry115 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry115_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry117 = {
DISABLE_BLEND_EQUATION_ADVANCED,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry117 = {
488485,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry117 = {
"Qualcomm.*",
".*4\\d\\d",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry119 = {
EXIT_ON_CONTEXT_LOST,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry119 = {
496438,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry119 = {
"ARM.*",
".*Mali-4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry125 = {
UNBIND_EGL_CONTEXT_TO_FLUSH_DRIVER_CACHES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry125 = {
509727,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry125 = {
nullptr,
"Adreno.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry126 = {
DISABLE_PROGRAM_CACHE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry126 = {
510637,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry126 = {
nullptr,
".*Adreno \\(TM\\) 3.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry127 = {
FORCE_CUBE_MAP_POSITIVE_X_ALLOCATION,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry127 = {
518889,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry127 = {
nullptr,
"Adreno.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry132 = {
MSAA_IS_SLOW,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry132 = {
527565,
1298585,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry137 = {
FORCE_CUBE_COMPLETE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry137 = {
518889,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry137 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry138 = {
"GL_NV_path_rendering",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry138 = {
344330,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry138 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "346", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry138 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry140 = {
"GL_EXT_sRGB",
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry140 = {
550292,
565179,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry140 = {
"Qualcomm",
"Adreno \\(TM\\) 4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry147 = {
WEBGL_OR_CAPS_MAX_TEXTURE_SIZE_LIMIT_4096,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry157 = {
"EGL_KHR_fence_sync",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry157 = {
589814,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry157 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 2> kMachineModelNameForEntry157 = {{
"SM-G361H",
"SM-G531H",
}};

static const GpuControlList::MachineModelInfo kMachineModelInfoForEntry157 = {
base::span(kMachineModelNameForEntry157),  // machine model names
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // machine model version
};

static const GpuControlList::More kMoreForEntry157_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry162 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry162 = {
601753,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry162 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry162_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "3.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry165 = {
UNPACK_OVERLAPPING_ROWS_SEPARATELY_UNPACK_BUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry165 = {
596774,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry165 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry176 = {
GL_CLEAR_BROKEN,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry176 = {
633634,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry176 = {
"Intel.*",
".*Atom.*x5/x7.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry180 = {
AVOID_ONE_COMPONENT_EGL_IMAGES,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry180 = {
579060,
632461,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry180 = {
"Imagination.*",
"PowerVR .*",
nullptr,
nullptr,
};

static const std::array<const char* const, 2> kDisabledExtensionsForEntry206 = {
"GL_KHR_blend_equation_advanced",
"GL_KHR_blend_equation_advanced_coherent",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry206 = {
661715,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry212 = {
DISABLE_PROGRAM_CACHING_FOR_TRANSFORM_FEEDBACK,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry212 = {
658074,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry212 = {
nullptr,
"Adreno.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry215 = {
USE_GPU_DRIVER_WORKAROUND_FOR_TESTING,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry215 = {
682912,
};

static const GpuControlList::More kMoreForEntry215_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
1,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry216 = {
PACK_PARAMETERS_WORKAROUND_WITH_PACK_BUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry216 = {
698926,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry216 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry217 = {
UNPACK_ALIGNMENT_WORKAROUND_WITH_UNPACK_BUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry217 = {
698926,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry217 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry218 = {
DISABLE_PROGRAM_DISK_CACHE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry218 = {
699122,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry218 = {
nullptr,  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "103.0", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry218 = {
nullptr,
"Adreno \\(TM\\) [45].*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry221 = {
DISALLOW_LARGE_INSTANCED_DRAW,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry221 = {
701682,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry221 = {
nullptr,
"Adreno \\(TM\\) 3.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry231 = {
MULTISAMPLE_RENDERBUFFER_RESIZE_EMULATION,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry231 = {
696126,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry231 = {
nullptr,
"Adreno \\(TM\\) [45].*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry241 = {
MSAA_IS_SLOW,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry241 = {
759471,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry241 = {
".*Intel.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry246 = {
DONT_USE_LOOPS_TO_INITIALIZE_VARIABLES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry246 = {
784817,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry246 = {
nullptr,
"Adreno \\(TM\\) *",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry247 = {
"GL_EXT_disjoint_timer_query",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry247 = {
702980,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry247 = {
"ARM.*",
"Mali-T880",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kMachineModelNameForEntry247 = {{
"SM-G930F",
}};

static const GpuControlList::MachineModelInfo kMachineModelInfoForEntry247 = {
base::span(kMachineModelNameForEntry247),  // machine model names
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // machine model version
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry251 = {
DISABLE_PROGRAM_CACHE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry251 = {
780498,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry251 = {
nullptr,
nullptr,
".*GL_VIV_shader_binary.*",
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry256 = {
ENABLE_WEBGL_TIMER_QUERY_EXTENSIONS,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry256 = {
808744,
870491,
};

static const std::array<const char* const, 1> kDisabledWebGLExtensionsForEntry257 = {
"WEBGL_lose_context",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry257 = {
808744,
};

static const GpuControlList::More kMoreForEntry257_619971032 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
2,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry262 = {
INIT_GL_POSITION_IN_VERTEX_SHADER,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry262 = {
286468,
416670,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry262 = {
"Imagination.*",
"PowerVR.*GX6250",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry263 = {
INIT_GL_POSITION_IN_VERTEX_SHADER,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry263 = {
286468,
416670,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry263 = {
"Imagination.*",
"PowerVR SGX 54.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry264 = {
INIT_GL_POSITION_IN_VERTEX_SHADER,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry264 = {
286468,
416670,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry264 = {
"Imagination.*",
"PowerVR.*G6200.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry266 = {
DISABLE_TIMESTAMP_QUERIES,
};

static const std::array<const char* const, 2> kDisabledExtensionsForEntry266 = {
"GL_EXT_disjoint_timer_query",
"GL_EXT_disjoint_timer_query_webgl2",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry266 = {
828721,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry266 = {
"NetEase",
"MuMu GL.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry268 = {
MAX_MSAA_SAMPLE_COUNT_4,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry268 = {
797243,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry272 = {
DISABLE_TIMESTAMP_QUERIES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry272 = {
858879,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry272 = {
"Qualcomm.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry280 = {
USE_COPYTEXIMAGE2D_INSTEAD_OF_READPIXELS_ON_MULTISAMPLED_TEXTURES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry280 = {
890002,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry280 = {
nullptr,  // driver_vendor
{GpuControlList::kGT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "237.0", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry280 = {
nullptr,
"Adreno \\(TM\\) .*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry290 = {
ROUND_DOWN_UNIFORM_BIND_BUFFER_RANGE_SIZE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry290 = {
906743,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry290 = {
nullptr,
"Adreno \\(TM\\) .*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry292 = {
ADJUST_SRC_DST_REGION_FOR_BLITFRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry292 = {
830046,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry292 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry299 = {
EXIT_ON_CONTEXT_LOST,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry299 = {
942106,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry299 = {
"Imagination.*",
"PowerVR Rogue GE8.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry306 = {
DISABLE_PROGRAM_CACHING_FOR_TRANSFORM_FEEDBACK,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry306 = {
961950,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry306 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry312 = {
PREFER_DRAW_TO_COPY,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry312 = {
991869,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry312 = {
nullptr,
".*Mali-T8.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry314 = {
"GL_EXT_shader_framebuffer_fetch",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry314 = {
1010338,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry314 = {
nullptr,
".*Adreno.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry320 = {
REMOVE_DYNAMIC_INDEXING_OF_SWIZZLED_VECTOR,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry320 = {
709351,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry334 = {
DONT_DELETE_SOURCE_TEXTURE_FOR_EGL_IMAGE,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry334 = {
1052114,
1117370,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry358 = {
FORCE_ENABLE_COLOR_BUFFER_FLOAT_EXCEPT_RGB32F,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry358 = {
1127387,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry365 = {
EXIT_ON_CONTEXT_LOST,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry365 = {
1079161,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry365 = {
nullptr,
"Adreno.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry367 = {
EXIT_ON_CONTEXT_LOST,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry367 = {
1180962,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry367 = {
nullptr,
"ANGLE.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry398 = {
MSAA_IS_SLOW_2,
};

static const std::array<uint32_t, 3> kCrBugsForWorkaroundsEntry398 = {
527565,
1298585,
1341830,
};

static const GpuControlList::IntelConditions kIntelConditionsForEntry398_619971032 = {
base::span<const IntelGpuSeriesType>(),  // intel_gpu_series_list
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "11", nullptr},  // intel_gpu_generation
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry399 = {
MSAA_IS_SLOW_2,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry399 = {
759471,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry399 = {
".*Intel.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::IntelConditions kIntelConditionsForEntry399_619971032 = {
base::span<const IntelGpuSeriesType>(),  // intel_gpu_series_list
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "11", nullptr},  // intel_gpu_generation
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry425 = {
AVOID_ONE_COMPONENT_EGL_IMAGES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry425 = {
1512211,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry425 = {
nullptr,
".*HD Graphics 500.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry456 = {
WEBGL_OR_CAPS_MAX_TEXTURE_SIZE_LIMIT_8192,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry466 = {
DISABLE_PROGRAM_CACHING_FOR_TRANSFORM_FEEDBACK,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry466 = {
442879525,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry466 = {
"Imagination.*",
"PowerVR.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry471 = {
ENSURE_PREVIOUS_FRAMEBUFFER_NOT_DELETED,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry471 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry472 = {
VALIDATE_MAX_PER_STAGE_UNIFORM_BLOCKS_AT_COMPILE_TIME,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry472 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry476 = {
DONT_INVALIDATE_INCOMPLETE_FBOS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry476 = {
507508103,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry476 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "881", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry476 = {
"Qualcomm.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry480 = {
REATTACH_FBO_DEPTH_STENCIL_ON_REALLOCATION,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry480 = {
520656244,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry480 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "878", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry480 = {
"Qualcomm.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry482 = {
SPLIT_LEVEL_0_PBO_FULL_SUB_IMAGE_2D,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry482 = {
496807874,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry482 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry483 = {
RESET_BASE_LEVEL_FOR_ASTC_IMAGE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry483 = {
551708184,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry483 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry484 = {
PACK_LARGE_ROW_LENGTH_SEPARATELY_PACK_BUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry484 = {
529867799,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry484 = {
"ARM.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry485 = {
LIMIT_OUTPUT_VARYINGS_AT_COMPILE_TIME,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry485 = {
529991907,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry485 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry486 = {
DONT_CHANGE_BASE_LEVEL_FOR_NPOT_IMMUTABLE_TEXTURES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry486 = {
534903095,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry486 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry487 = {
REATTACH_TEXTURE_TO_FBO_AFTER_LAYER_INCREASE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry487 = {
499602793,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry487 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry488 = {
FLUSH_QUERIES_BEFORE_DELETING_OR_UNBINDING_FBO,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry488 = {
534468209,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry488 = {
"ARM.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry489 = {
LOSE_GL_CONTEXT_WHEN_INCREASE_TEXTURE_3D_DEPTH,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry489 = {
530045332,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry489 = {
"Qualcomm.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry490 = {
RESET_TEX_STORAGE_BASE_LEVEL,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry490 = {
551573368,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry490 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry491 = {
MAX_TEXTURE_IMAGE_UNITS_13,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry491 = {
548085797,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry491 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry492 = {
UPLOAD_OVERSIZED_MIP_LEVELS_VIA_UNPACK_BUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry492 = {
548127218,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry492 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry493 = {
FINISH_BEFORE_BLIT_FRAMEBUFFER_MULTI_ATTACHMENT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry493 = {
546252753,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry493 = {
"ARM.*",
"Mali-G.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry494 = {
USE_TEX_SUB_IMAGE_FOR_CLIENT_DATA_NPOT_UPLOADS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry494 = {
553172761,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry494 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry496 = {
DISABLE_PROGRAM_CACHE,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry496 = {
555781989,
556870863,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry496 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry496_619971032 = {
GpuControlList::kGLTypeANGLE_GLES,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry498 = {
RECREATE_MIPMAP_LEVELS_BEFORE_GENERATE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry498 = {
551065272,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry498 = {
"ARM.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry499 = {
ADJUST_SRC_DST_REGION_FOR_BLITFRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry499 = {
546630009,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry499 = {
"ARM.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry501 = {
ROUND_UP_3D_TEXTURE_SIZE_TO_POT_FOR_LIMIT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry501 = {
551673541,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry501 = {
"Imagination.*",
"PowerVR.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry503 = {
CHECK_GRAPHICS_RESET_STATUS_AFTER_READBACK,
};

static const std::array<uint32_t, 6> kCrBugsForWorkaroundsEntry503 = {
550525698,
550996500,
552550589,
555394151,
558109451,
558111285,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry503 = {
"ARM.*",
"Mali-G.*",
nullptr,
nullptr,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry505 = {
"GL_ANGLE_shader_pixel_local_storage",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry505 = {
40259276,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry505 = {
"Imagination.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry505_619971032 = {
GpuControlList::kGLTypeANGLE_GLES,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};


#endif  // GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
