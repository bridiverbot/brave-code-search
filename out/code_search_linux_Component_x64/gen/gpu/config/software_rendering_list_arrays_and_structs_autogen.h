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

static const std::array<int, 13> kFeatureListForSoftwareEntry3 = {
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

static const std::array<uint32_t, 3> kCrBugsForSoftwareEntry3 = {
59302,
315217,
1155974,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry3 = {
nullptr,
"(?i).*(software|llvmpipe|softpipe).*",
nullptr,
nullptr,
};

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

static const std::array<int, 13> kFeatureListForSoftwareEntry17 = {
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

static const std::array<uint32_t, 4> kCrBugsForSoftwareEntry17 = {
76703,
164555,
225200,
340886,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.1", nullptr},  // driver_version
};

static const std::array<GpuControlList::Device, 12> kDevicesForSoftwareEntry17Exception0 = {{
{0x0102, 0x0},
{0x0106, 0x0},
{0x0112, 0x0},
{0x0116, 0x0},
{0x0122, 0x0},
{0x0126, 0x0},
{0x010a, 0x0},
{0x0152, 0x0},
{0x0156, 0x0},
{0x015a, 0x0},
{0x0162, 0x0},
{0x0166, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17Exception0 = {
nullptr,  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "8.0", nullptr},  // driver_version
};

static const std::array<GpuControlList::Device, 16> kDevicesForSoftwareEntry17Exception1 = {{
{0xa001, 0x0},
{0xa002, 0x0},
{0xa011, 0x0},
{0xa012, 0x0},
{0x29a2, 0x0},
{0x2992, 0x0},
{0x2982, 0x0},
{0x2972, 0x0},
{0x2a12, 0x0},
{0x2a42, 0x0},
{0x2e02, 0x0},
{0x2e12, 0x0},
{0x2e22, 0x0},
{0x2e32, 0x0},
{0x2e42, 0x0},
{0x2e92, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17Exception1 = {
nullptr,  // driver_vendor
{GpuControlList::kGT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "8.0.2", nullptr},  // driver_version
};

static const std::array<GpuControlList::Device, 2> kDevicesForSoftwareEntry17Exception2 = {{
{0x0042, 0x0},
{0x0046, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17Exception2 = {
nullptr,  // driver_vendor
{GpuControlList::kGT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "8.0.4", nullptr},  // driver_version
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry17Exception3 = {{
{0x2a02, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17Exception3 = {
nullptr,  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "9.1", nullptr},  // driver_version
};

static const std::array<GpuControlList::Device, 2> kDevicesForSoftwareEntry17Exception4 = {{
{0x0a16, 0x0},
{0x0a26, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry17Exception4 = {
nullptr,  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.0.1", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry18 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry18 = {
84701,
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry18 = {{
{0x029e, 0x0},
}};

static const std::array<int, 13> kFeatureListForSoftwareEntry27 = {
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

static const std::array<uint32_t, 4> kCrBugsForSoftwareEntry27 = {
95934,
94973,
136240,
357314,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry27 = {
"ATI.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry27Exception0 = {
".*AMD.*",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleLexical, GpuControlList::kVersionSchemaCommon, "8.98", nullptr},  // driver_version
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry27Exception1 = {
"Mesa",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.0.4", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry28 = {
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

static const std::array<uint32_t, 3> kCrBugsForSoftwareEntry28 = {
95934,
94973,
357314,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry28 = {
"X\\.Org.*",
".*AMD.*",
nullptr,
nullptr,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry28Exception0 = {
"Mesa",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.0.4", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry29 = {
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

static const std::array<uint32_t, 3> kCrBugsForSoftwareEntry29 = {
95934,
94973,
357314,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry29 = {
"X\\.Org.*",
".*ATI.*",
nullptr,
nullptr,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry29Exception0 = {
"Mesa",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.0.4", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry30 = {
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

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry30 = {
94103,
876523,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry30 = {
"(?i)nouveau.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 13> kFeatureListForSoftwareEntry37 = {
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

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry37 = {
131308,
363418,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry37 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.1", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry37 = {
"Intel.*",
nullptr,
nullptr,
nullptr,
};

static const std::array<int, 13> kFeatureListForSoftwareEntry47 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry47 = {
78497,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry47 = {
"NVIDIA",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "295", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry50 = {
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

static const std::array<uint32_t, 4> kCrBugsForSoftwareEntry50 = {
145531,
332596,
571899,
629434,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry50 = {
"VMware.*",
nullptr,
nullptr,
nullptr,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry50Exception0 = {
"Mesa",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "9.2.1", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry50Exception0 = {
nullptr,
".*SVGA3D.*",
nullptr,
nullptr,
};

static const std::array<int, 1> kFeatureListForSoftwareEntry56 = {
GPU_FEATURE_TYPE_ACCELERATED_VIDEO_DECODE,
};

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry56 = {
145600,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry56 = {
"NVIDIA",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "331.38", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry93 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry93 = {
72373,
};

static const GpuControlList::More kMoreForEntry93_1043157500 = {
GpuControlList::kGLTypeNone,  // gl_type
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gl_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // pixel_shader_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // d3d11_feature_level
false,  // in_process_gpu
0,  // gl_reset_notification_strategy
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "2", nullptr},  // direct_rendering_version
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // gpu_count
0,  // test_group
GpuControlList::kDontCare,  // subpixel_font_rendering
};

static const std::array<int, 13> kFeatureListForSoftwareEntry95 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry95 = {
363378,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry95 = {
".*AMD.*",  // driver_vendor
{GpuControlList::kEQ, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "13.101", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry107 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry107 = {
463243,
};

static const std::array<IntelGpuSeriesType, 1> kIntelGpuSeriesForEntry107 = {{
IntelGpuSeriesType::kHaswell,
}};

static const GpuControlList::IntelConditions kIntelConditionsForEntry107_1043157500 = {
base::span(kIntelGpuSeriesForEntry107),  // intel_gpu_series_list
{GpuControlList::kUnknown, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, nullptr, nullptr},  // intel_gpu_generation
};

static const std::array<int, 13> kFeatureListForSoftwareEntry125 = {
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

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry125 = {
656572,
658668,
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry125 = {{
{0xbeef, 0x0},
}};

static const std::array<int, 13> kFeatureListForSoftwareEntry129 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry129 = {
662909,
};

static const std::array<int, 13> kFeatureListForSoftwareEntry131 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry131 = {
462426,
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry131 = {{
{0x2a02, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry131 = {
"Mesa",  // driver_vendor
{GpuControlList::kLT, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.4.3", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry134 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry134 = {
629434,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry134 = {
"Mesa",  // driver_vendor
{GpuControlList::kLE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "10.1.3", nullptr},  // driver_version
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry134Exception0 = {
nullptr,
".*SVGA3D.*",
nullptr,
nullptr,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry134Exception1 = {
nullptr,
".*llvmpipe.*",
nullptr,
nullptr,
};

static const GpuControlList::GLStrings kGLStringsForSoftwareEntry134Exception2 = {
nullptr,
"Mesa OffScreen",
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

static const std::array<int, 13> kFeatureListForSoftwareEntry161 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry161 = {
890688,
};

static const std::array<GpuControlList::Device, 1> kDevicesForSoftwareEntry161 = {{
{0x2a42, 0x0},
}};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry161 = {
nullptr,  // driver_vendor
{GpuControlList::kEQ, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "18.1.7", nullptr},  // driver_version
};

static const std::array<int, 13> kFeatureListForSoftwareEntry176 = {
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

static const std::array<uint32_t, 1> kCrBugsForSoftwareEntry176 = {
1327939,
};

static const std::array<int, 1> kFeatureListForSoftwareEntry186 = {
GPU_FEATURE_TYPE_WEBGPU_ON_VK_VIA_GL_INTEROP,
};

static const std::array<uint32_t, 2> kCrBugsForSoftwareEntry186 = {
442791440,
475935650,
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry186Exception0 = {
"Mesa",  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "22.0", nullptr},  // driver_version
};

static const GpuControlList::IntelConditions kIntelConditionsForEntry186_1043157500Exception0 = {
base::span<const IntelGpuSeriesType>(),  // intel_gpu_series_list
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "12", nullptr},  // intel_gpu_generation
};

static const GpuControlList::DriverInfo kDriverInfoForSoftwareEntry186Exception1 = {
nullptr,  // driver_vendor
{GpuControlList::kGE, GpuControlList::kVersionStyleNumerical, GpuControlList::kVersionSchemaCommon, "535.183.01", nullptr},  // driver_version
};


#endif  // GPU_CONFIG_SOFTWARE_RENDERING_LIST_ARRAYS_AND_STRUCTS_AUTOGEN_H_
