// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file is auto-generated from
//    gpu/config/process_json.py
// It's formatted by clang-format using chromium coding style:
//    clang-format -i -style=chromium filename
// DO NOT EDIT!

#ifndef GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
#define GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_

static const std::array<int, 2> kFeatureListForSoftwareEntry4 = {
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry4 = {
232035,
};

static const std::array<GpuControlList::Device, 2> kDevicesForSoftwareEntry4 = {{
{0x27AE, 0x0},
{0x27A2, 0x0},
}};

static const std::array<int, 13> kFeatureListForSoftwareEntry8 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_ENCODE,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL2,
GPU_FEATURE_TYPE_ACCELERATED_GL,
GPU_FEATURE_TYPE_VULKAN,
GPU_FEATURE_TYPE_ACCELERATED_WEBGPU,
GPU_FEATURE_TYPE_SKIA_GRAPHITE,
GPU_FEATURE_TYPE_WEBNN,
GPU_FEATURE_TYPE_DIRECT_RENDERING_DISPLAY_COMPOSITOR,
GPU_FEATURE_TYPE_WEBGPU_ON_VK_VIA_GL_INTEROP,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry8 = {
72938,
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry8 = {{
{0x0324, 0x0},
}};

static const std::array<int, 1> kFeatureListForSoftwareEntry76 = {
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
};

static const GpuControlList::More kMoreForEntry76_1043157500 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
true,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const GpuControlList::More kMoreForEntry76_1043157500Exception0 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
33362,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry76Exception1 = {
nullptr,
"Mali-4.*",
".*EXT_robustness.*",
nullptr,
};

static const std::array<int, 2> kFeatureListForSoftwareEntry96 = {
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry96 = {
362779,
424970,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry96Exception0 = {
nullptr,
"Adreno \\(TM\\) 3.*",
nullptr,
nullptr,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry96Exception1 = {
nullptr,
"Mali-4.*",
nullptr,
nullptr,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry96Exception2 = {
nullptr,
"NVIDIA.*",
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry96_1043157500Exception3 = {
GpuControlList::kGLTypeGLES,  // gl_type
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

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry96Exception4 = {
nullptr,
".*Google.*",
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry96_1043157500Exception5 = {
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

static const GpuControlList::More kMoreForEntry96_1043157500Exception6 = {
GpuControlList::kGLTypeANGLE_VULKAN,  // gl_type
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

static const std::array<int, 2> kFeatureListForSoftwareEntry100 = {
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry100 = {
407144,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry100 = {
nullptr,
".*Mali-T604.*",
nullptr,
nullptr,
};

static const std::array<int, 2> kFeatureListForSoftwareEntry102 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry102 = {
416910,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry102 = {
nullptr,
"PowerVR SGX 540",
nullptr,
nullptr,
};

static const std::array<int, 2> kFeatureListForSoftwareEntry104 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
};

static const std::array<uint32_t, 3> kCrBugsForSoftwareEntry104 = {
436331,
483574,
684586,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry104 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "1.8", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry104 = {
nullptr,
"PowerVR Rogue.*",
nullptr,
nullptr,
};

static const std::array<int, 2> kFeatureListForSoftwareEntry105 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
};

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry105 = {
461456,
1243361,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry105 = {
nullptr,
"PowerVR SGX \\d+",
nullptr,
nullptr,
};

static const std::array<int, 2> kFeatureListForSoftwareEntry106 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry106 = {
480149,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry106 = {
nullptr,
"Adreno \\(TM\\) 3.*",
nullptr,
nullptr,
};

static const GpuControlList::More kMoreForEntry106_1043157500 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kLE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "2.0", nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 2> kFeatureListForSoftwareEntry108 = {
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry108 = {
560587,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry108 = {
nullptr,
".*Vivante.*",
nullptr,
nullptr,
};

static const std::array<int, 10> kFeatureListForSoftwareEntry152 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_ENCODE,
GPU_FEATURE_TYPE_GPU_TILE_RASTERIZATION,
GPU_FEATURE_TYPE_ACCELERATED_WEBGL2,
GPU_FEATURE_TYPE_VULKAN,
GPU_FEATURE_TYPE_ACCELERATED_WEBGPU,
GPU_FEATURE_TYPE_WEBNN,
GPU_FEATURE_TYPE_DIRECT_RENDERING_DISPLAY_COMPOSITOR,
GPU_FEATURE_TYPE_WEBGPU_ON_VK_VIA_GL_INTEROP,
};

static const GpuControlList::More kMoreForEntry152_1043157500 = {
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

static const std::array<int, 1> kFeatureListForSoftwareEntry153 = {
GPU_FEATURE_TYPE_ACCELERATED_WEBGL,
};

static const GpuControlList::More kMoreForEntry153_1043157500 = {
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

static const std::array<int, 1> kFeatureListForSoftwareEntry179 = {
GPU_FEATURE_TYPE_ACCELERATED_2D_CANVAS,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry179 = {
1253962,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry179 = {
nullptr,  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "145", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry179 = {
nullptr,
".*Adreno \\(TM\\) 4.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForSoftwareEntry185 = {
GPU_FEATURE_TYPE_DIRECT_RENDERING_DISPLAY_COMPOSITOR,
};

static const std::array<uint32_t, 3> kCrBugsForSoftwareEntry185 = {
1354201,
1356906,
1362720,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry185 = {
nullptr,
".*PowerVR Rogue.*|Adreno \\(TM\\) 730|Mali-G57 MC2|Mali-G68 MC4|Mali-G77 MC9",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForSoftwareEntry189 = {
GPU_FEATURE_TYPE_SKIA_GRAPHITE,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry189 = {
496616828,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry189 = {
nullptr,
".*PowerVR.*",
nullptr,
nullptr,
};


#endif  // GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
