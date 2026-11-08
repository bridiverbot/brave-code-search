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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry132 = {
MSAA_IS_SLOW,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry132 = {
527565,
1298585,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry135 = {
DISABLE_POST_SUB_BUFFERS_FOR_ONSCREEN_SURFACES,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry135 = {
543324,
};

static const std::array<GpuControlList::Device, 4> kDevicesForWorkaroundsEntry135 = {{
{0x9440, 0x0},
{0x944a, 0x0},
{0x9488, 0x0},
{0x9490, 0x0},
}};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry163 = {
DISABLE_WEBGL_RGB_MULTISAMPLING_USAGE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry163 = {
607130,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry164 = {
DISABLE_MULTISAMPLING_COLOR_MASK_USAGE,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry164 = {
595948,
};

static const std::array<GpuControlList::Device, 4> kDevicesForWorkaroundsEntry164 = {{
{0x6720, 0x0},
{0x6740, 0x0},
{0x6741, 0x0},
{0x68b8, 0x0},
}};

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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry227 = {
AVOID_STENCIL_BUFFERS,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry227 = {
713854,
};

static const std::array<GpuControlList::Device, 9> kDevicesForWorkaroundsEntry227 = {{
{0x0412, 0x0},
{0x0d26, 0x0},
{0x0a2e, 0x0},
{0x0a26, 0x0},
{0x0d22, 0x0},
{0x161e, 0x0},
{0x1626, 0x0},
{0x162b, 0x0},
{0x1622, 0x0},
}};

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

static const std::array<int, 1> kFeatureListForWorkaroundsEntry259 = {
MAX_MSAA_SAMPLE_COUNT_4,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry259 = {
812071,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry355 = {
FORCE_ENABLE_COLOR_BUFFER_FLOAT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry355 = {
1127387,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry356 = {
FORCE_ENABLE_COLOR_BUFFER_FLOAT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry356 = {
1127387,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry357 = {
FORCE_ENABLE_COLOR_BUFFER_FLOAT,
};

static const std::array<uint32_t, 1> kCrBugsForWorkaroundsEntry357 = {
1127387,
};

static const std::array<int, 1> kFeatureListForWorkaroundsEntry363 = {
DISABLE_ACCELERATED_VP9_DECODE,
};

static const std::array<uint32_t, 2> kCrBugsForWorkaroundsEntry363 = {
616318,
1163111,
};

static const std::array<IntelGpuSeriesType, 3> kIntelGpuSeriesForEntry363 = {{
IntelGpuSeriesType::kBroadwell,
IntelGpuSeriesType::kSkylake,
IntelGpuSeriesType::kCherrytrail,
}};

static const GpuControlList::IntelConditions kIntelConditionsForEntry363_619971032 = {
base::span(kIntelGpuSeriesForEntry363),  // intel_gpu_series_list
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
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


#endif  // GPU_CONFIG_GPU_DRIVER_BUG_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
