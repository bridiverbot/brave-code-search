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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry68 = {
DISABLE_POST_SUB_BUFFERS_FOR_ONSCREEN_SURFACES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry68 = {
339493,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry68 = {
nullptr,
".*Mesa.*",
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry68_619971032 = {
GpuControlList::kGLTypeANGLE_GL,  // gl_type
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry108 = {
DISABLE_GL_RGB_FORMAT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry108 = {
449150,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry108 = {
"ARM.*",
".*Mali-4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry111 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry111 = {
485814,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry111 = {
"ARM.*",
".*Mali-4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry131 = {
DISABLE_TEXTURE_STORAGE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry131 = {
521904,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry131 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.6", nullptr},  // driver_version
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry132 = {
MSAA_IS_SLOW,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry132 = {
527565,
1298585,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry139 = {
"GL_EXT_texture_rg",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry139 = {
545904,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry139 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "11.1", nullptr},  // driver_version
};

static const GpuControlList::More kMoreForEntry139_619971032 = {
GpuControlList::kGLTypeANGLE_GLES,  // gl_type
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

static const std::array<const char* const, 1> kDisabledExtensionsForEntry153 = {
"GL_EXT_multisampled_render_to_texture",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry153 = {
594016,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry153 = {
"Vivante Corporation",
"Vivante GC1000",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry159 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry159 = {
570897,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry159 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry159_619971032 = {
GpuControlList::kGLTypeANGLE_GL,  // gl_type
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry160 = {
DISABLE_DISCARD_FRAMEBUFFER,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry160 = {
601753,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry160 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry160_619971032 = {
GpuControlList::kGLTypeANGLE_GLES,  // gl_type
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry168 = {
DISABLE_POST_SUB_BUFFERS_FOR_ONSCREEN_SURFACES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry168 = {
613722,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry190 = {
DISABLE_POST_SUB_BUFFERS_FOR_ONSCREEN_SURFACES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry190 = {
339493,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry190 = {
nullptr,
nullptr,
nullptr,
".*Mesa.*",
};

static const GpuControlList::More kMoreForEntry190_619971032 = {
GpuControlList::kGLTypeANGLE_GL,  // gl_type
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

static const std::array<const char* const, 2> kDisabledExtensionsForEntry206 = {
"GL_KHR_blend_equation_advanced",
"GL_KHR_blend_equation_advanced_coherent",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry206 = {
661715,
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry222 = {
DISABLE_SOFTWARE_TO_ACCELERATED_CANVAS_UPGRADE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry222 = {
710029,
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry265 = {
DISABLE_TIMESTAMP_QUERIES,
};

static const std::array<const char* const, 4> kDisabledExtensionsForEntry265 = {
"GL_ARB_timer_query",
"GL_EXT_timer_query",
"GL_EXT_disjoint_timer_query",
"GL_EXT_disjoint_timer_query_webgl2",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry265 = {
811661,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry265 = {
"VMware.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry283 = {
EXIT_ON_CONTEXT_LOST,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry283 = {
893177,
};

static const std::array<int, 2> kFeatureListForWorkaroundsEntry301 = {
MAX_3D_ARRAY_TEXTURE_SIZE_1024,
WEBGL_OR_CAPS_MAX_TEXTURE_SIZE_LIMIT_4096,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry301 = {
927470,
};

static const std::array<const char* const, 1> kDisabledExtensionsForEntry315 = {
"GL_MESA_framebuffer_flip_y",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry315 = {
964010,
};

static const GpuControlList::More kMoreForEntry315_619971032 = {
GpuControlList::kGLTypeANGLE_GL,  // gl_type
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

static const std::array<const char* const, 2> kDisabledExtensionsForEntry331 = {
"GL_EXT_memory_object_fd",
"GL_EXT_semaphore_fd",
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry331 = {
1046462,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry331 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "19.3.5", nullptr},  // driver_version
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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry473 = {
DISABLE_VAAPI,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry473 = {
330694403,
};

static const std::array<GpuControlList::Device, 1> kDevicesForWorkaroundsEntry473 = {{
{0x1506, 0x0},
}};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry474 = {
DISABLE_RGB_TO_YUV_CONVERSION,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry474 = {
447709687,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry474 = {
"NVIDIA.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry475 = {
DISABLE_VAAPI,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry475 = {
447709687,
};

static const std::array<GpuControlList::Device, 1> kDevicesForWorkaroundsEntry475 = {{
{0x1586, 0x0},
}};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry478 = {
DISABLE_PROGRAM_CACHING_FOR_TRANSFORM_FEEDBACK,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry478 = {
510589906,
};

static const GpuControlList::GLStrings kGLStringsForWorkaroundsEntry478 = {
"ARM.*",
"Mali.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry500 = {
DISABLE_ACCELERATED_AV1_DECODE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry500 = {
556576976,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry500 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "23.2.4", nullptr},  // driver_version
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry504 = {
FINISH_GL_BEFORE_DAWN_VULKAN_IMAGE_ACCESS,
};

static const GpuControlList::DriverInfo kDriverInfoForWorkaroundsEntry504 = {
"Mesa",  // driver_vendor
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // driver_version
};


#endif  // GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
