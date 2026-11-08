// This is generated file. Do not modify directly.

#include "media/gpu/vaapi/va_stubs.h"

#include <dlfcn.h>   // For dlsym, dlopen, RTLD_LAZY.

#include <cstdarg>

#include "base/compiler_specific.h"
#include "base/logging.h"

// The extra include header needed in the generated stub file for defining
// various libva types.

#include "media/gpu/buildflags.h"

extern "C" {

#include <va/va_drm.h>
#include <va/va.h>

}

namespace  {

void LogDlerror(const char* symbol) {
  VLOG(1) << "Couldn't load " << symbol << ", dlerror() says:\n" << dlerror();
}

}  // namespace 

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static VAStatus (*vaBeginPicture_ptr)(VADisplay dpy, VAContextID context, VASurfaceID render_target) = nullptr;
static const char * (*vaConfigAttribTypeStr_ptr)(VAConfigAttribType configAttribType) = nullptr;
static VAStatus (*vaCreateBuffer_ptr)(VADisplay dpy, VAContextID context, VABufferType type, unsigned int size, unsigned int num_elements, void *data, VABufferID *buf_id) = nullptr;
static VAStatus (*vaCreateConfig_ptr)(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs, VAConfigID *config_id) = nullptr;
static VAStatus (*vaCreateContext_ptr)(VADisplay dpy, VAConfigID config_id, int picture_width, int picture_height, int flag, VASurfaceID *render_targets, int num_render_targets, VAContextID *context) = nullptr;
static VAStatus (*vaCreateImage_ptr)(VADisplay dpy, VAImageFormat *format, int width, int height, VAImage *image) = nullptr;
static VAStatus (*vaCreateSurfaces_ptr)(VADisplay dpy, unsigned int format, unsigned int width, unsigned int height, VASurfaceID *surfaces, unsigned int num_surfaces, VASurfaceAttrib *attrib_list, unsigned int num_attribs) = nullptr;
static VAStatus (*vaDeriveImage_ptr)(VADisplay dpy, VASurfaceID surface, VAImage *image) = nullptr;
static VAStatus (*vaDestroyBuffer_ptr)(VADisplay dpy, VABufferID buffer_id) = nullptr;
static VAStatus (*vaDestroyConfig_ptr)(VADisplay dpy, VAConfigID config_id) = nullptr;
static VAStatus (*vaDestroyContext_ptr)(VADisplay dpy, VAContextID context) = nullptr;
static VAStatus (*vaDestroyImage_ptr)(VADisplay dpy, VAImageID image) = nullptr;
static VAStatus (*vaDestroySurfaces_ptr)(VADisplay dpy, VASurfaceID *surfaces, int num_surfaces) = nullptr;
static int (*vaDisplayIsValid_ptr)(VADisplay dpy) = nullptr;
static VAStatus (*vaEndPicture_ptr)(VADisplay dpy, VAContextID context) = nullptr;
static const char * (*vaEntrypointStr_ptr)(VAEntrypoint entrypoint) = nullptr;
static const char * (*vaErrorStr_ptr)(VAStatus error_status) = nullptr;
static VAStatus (*vaExportSurfaceHandle_ptr)(VADisplay dpy, VASurfaceID surface_id, uint32_t mem_type, uint32_t flags, void *descriptor) = nullptr;
static VAStatus (*vaGetConfigAttributes_ptr)(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs) = nullptr;
static VAStatus (*vaGetImage_ptr)(VADisplay dpy, VASurfaceID surface, int x, int y, unsigned int width, unsigned int height, VAImageID image) = nullptr;
static VAStatus (*vaInitialize_ptr)(VADisplay dpy, int *major_version, int *minor_version) = nullptr;
static VAStatus (*vaMapBuffer_ptr)(VADisplay dpy, VABufferID buf_id, void **pbuf) = nullptr;
static int (*vaMaxNumConfigAttributes_ptr)(VADisplay dpy) = nullptr;
static int (*vaMaxNumEntrypoints_ptr)(VADisplay dpy) = nullptr;
static int (*vaMaxNumImageFormats_ptr)(VADisplay dpy) = nullptr;
static int (*vaMaxNumProfiles_ptr)(VADisplay dpy) = nullptr;
static const char * (*vaProfileStr_ptr)(VAProfile profile) = nullptr;
static VAStatus (*vaPutImage_ptr)(VADisplay dpy, VASurfaceID surface, VAImageID image, int src_x, int src_y, unsigned int src_width, unsigned int src_height, int dest_x, int dest_y, unsigned int dest_width, unsigned int dest_height) = nullptr;
static VAStatus (*vaQueryConfigAttributes_ptr)(VADisplay dpy, VAConfigID config_id, VAProfile *profile, VAEntrypoint *entrypoint, VAConfigAttrib *attrib_list, int *num_attribs) = nullptr;
static VAStatus (*vaQueryConfigEntrypoints_ptr)(VADisplay dpy, VAProfile profile, VAEntrypoint *entrypoint_list, int *num_entrypoints) = nullptr;
static VAStatus (*vaQueryConfigProfiles_ptr)(VADisplay dpy, VAProfile *profile_list, int *num_profiles) = nullptr;
static VAStatus (*vaQueryImageFormats_ptr)(VADisplay dpy, VAImageFormat *format_list, int *num_formats) = nullptr;
static VAStatus (*vaQuerySurfaceAttributes_ptr)(VADisplay dpy, VAConfigID config, VASurfaceAttrib *attrib_list, unsigned int *num_attribs) = nullptr;
static const char* (*vaQueryVendorString_ptr)(VADisplay dpy) = nullptr;
static VAStatus (*vaRenderPicture_ptr)(VADisplay dpy, VAContextID context, VABufferID *buffers, int num_buffers) = nullptr;
static VAStatus (*vaSyncSurface_ptr)(VADisplay dpy, VASurfaceID render_target) = nullptr;
static VAStatus (*vaTerminate_ptr)(VADisplay dpy) = nullptr;
static VAStatus (*vaUnmapBuffer_ptr)(VADisplay dpy, VABufferID buf_id) = nullptr;

// Stubs that dispatch to the real implementations.
extern VAStatus vaBeginPicture(VADisplay dpy, VAContextID context, VASurfaceID render_target) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaBeginPicture(VADisplay dpy, VAContextID context, VASurfaceID render_target) {
  return vaBeginPicture_ptr(dpy, context, render_target);
}
extern const char * vaConfigAttribTypeStr(VAConfigAttribType configAttribType) __attribute__((weak));
DISABLE_CFI_ICALL
const char *  vaConfigAttribTypeStr(VAConfigAttribType configAttribType) {
  return vaConfigAttribTypeStr_ptr(configAttribType);
}
extern VAStatus vaCreateBuffer(VADisplay dpy, VAContextID context, VABufferType type, unsigned int size, unsigned int num_elements, void *data, VABufferID *buf_id) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaCreateBuffer(VADisplay dpy, VAContextID context, VABufferType type, unsigned int size, unsigned int num_elements, void *data, VABufferID *buf_id) {
  return vaCreateBuffer_ptr(dpy, context, type, size, num_elements, data, buf_id);
}
extern VAStatus vaCreateConfig(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs, VAConfigID *config_id) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaCreateConfig(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs, VAConfigID *config_id) {
  return vaCreateConfig_ptr(dpy, profile, entrypoint, attrib_list, num_attribs, config_id);
}
extern VAStatus vaCreateContext(VADisplay dpy, VAConfigID config_id, int picture_width, int picture_height, int flag, VASurfaceID *render_targets, int num_render_targets, VAContextID *context) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaCreateContext(VADisplay dpy, VAConfigID config_id, int picture_width, int picture_height, int flag, VASurfaceID *render_targets, int num_render_targets, VAContextID *context) {
  return vaCreateContext_ptr(dpy, config_id, picture_width, picture_height, flag, render_targets, num_render_targets, context);
}
extern VAStatus vaCreateImage(VADisplay dpy, VAImageFormat *format, int width, int height, VAImage *image) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaCreateImage(VADisplay dpy, VAImageFormat *format, int width, int height, VAImage *image) {
  return vaCreateImage_ptr(dpy, format, width, height, image);
}
extern VAStatus vaCreateSurfaces(VADisplay dpy, unsigned int format, unsigned int width, unsigned int height, VASurfaceID *surfaces, unsigned int num_surfaces, VASurfaceAttrib *attrib_list, unsigned int num_attribs) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaCreateSurfaces(VADisplay dpy, unsigned int format, unsigned int width, unsigned int height, VASurfaceID *surfaces, unsigned int num_surfaces, VASurfaceAttrib *attrib_list, unsigned int num_attribs) {
  return vaCreateSurfaces_ptr(dpy, format, width, height, surfaces, num_surfaces, attrib_list, num_attribs);
}
extern VAStatus vaDeriveImage(VADisplay dpy, VASurfaceID surface, VAImage *image) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDeriveImage(VADisplay dpy, VASurfaceID surface, VAImage *image) {
  return vaDeriveImage_ptr(dpy, surface, image);
}
extern VAStatus vaDestroyBuffer(VADisplay dpy, VABufferID buffer_id) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDestroyBuffer(VADisplay dpy, VABufferID buffer_id) {
  return vaDestroyBuffer_ptr(dpy, buffer_id);
}
extern VAStatus vaDestroyConfig(VADisplay dpy, VAConfigID config_id) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDestroyConfig(VADisplay dpy, VAConfigID config_id) {
  return vaDestroyConfig_ptr(dpy, config_id);
}
extern VAStatus vaDestroyContext(VADisplay dpy, VAContextID context) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDestroyContext(VADisplay dpy, VAContextID context) {
  return vaDestroyContext_ptr(dpy, context);
}
extern VAStatus vaDestroyImage(VADisplay dpy, VAImageID image) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDestroyImage(VADisplay dpy, VAImageID image) {
  return vaDestroyImage_ptr(dpy, image);
}
extern VAStatus vaDestroySurfaces(VADisplay dpy, VASurfaceID *surfaces, int num_surfaces) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaDestroySurfaces(VADisplay dpy, VASurfaceID *surfaces, int num_surfaces) {
  return vaDestroySurfaces_ptr(dpy, surfaces, num_surfaces);
}
extern int vaDisplayIsValid(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
int  vaDisplayIsValid(VADisplay dpy) {
  return vaDisplayIsValid_ptr(dpy);
}
extern VAStatus vaEndPicture(VADisplay dpy, VAContextID context) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaEndPicture(VADisplay dpy, VAContextID context) {
  return vaEndPicture_ptr(dpy, context);
}
extern const char * vaEntrypointStr(VAEntrypoint entrypoint) __attribute__((weak));
DISABLE_CFI_ICALL
const char *  vaEntrypointStr(VAEntrypoint entrypoint) {
  return vaEntrypointStr_ptr(entrypoint);
}
extern const char * vaErrorStr(VAStatus error_status) __attribute__((weak));
DISABLE_CFI_ICALL
const char *  vaErrorStr(VAStatus error_status) {
  return vaErrorStr_ptr(error_status);
}
extern VAStatus vaExportSurfaceHandle(VADisplay dpy, VASurfaceID surface_id, uint32_t mem_type, uint32_t flags, void *descriptor) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaExportSurfaceHandle(VADisplay dpy, VASurfaceID surface_id, uint32_t mem_type, uint32_t flags, void *descriptor) {
  return vaExportSurfaceHandle_ptr(dpy, surface_id, mem_type, flags, descriptor);
}
extern VAStatus vaGetConfigAttributes(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaGetConfigAttributes(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs) {
  return vaGetConfigAttributes_ptr(dpy, profile, entrypoint, attrib_list, num_attribs);
}
extern VAStatus vaGetImage(VADisplay dpy, VASurfaceID surface, int x, int y, unsigned int width, unsigned int height, VAImageID image) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaGetImage(VADisplay dpy, VASurfaceID surface, int x, int y, unsigned int width, unsigned int height, VAImageID image) {
  return vaGetImage_ptr(dpy, surface, x, y, width, height, image);
}
extern VAStatus vaInitialize(VADisplay dpy, int *major_version, int *minor_version) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaInitialize(VADisplay dpy, int *major_version, int *minor_version) {
  return vaInitialize_ptr(dpy, major_version, minor_version);
}
extern VAStatus vaMapBuffer(VADisplay dpy, VABufferID buf_id, void **pbuf) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaMapBuffer(VADisplay dpy, VABufferID buf_id, void **pbuf) {
  return vaMapBuffer_ptr(dpy, buf_id, pbuf);
}
extern int vaMaxNumConfigAttributes(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
int  vaMaxNumConfigAttributes(VADisplay dpy) {
  return vaMaxNumConfigAttributes_ptr(dpy);
}
extern int vaMaxNumEntrypoints(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
int  vaMaxNumEntrypoints(VADisplay dpy) {
  return vaMaxNumEntrypoints_ptr(dpy);
}
extern int vaMaxNumImageFormats(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
int  vaMaxNumImageFormats(VADisplay dpy) {
  return vaMaxNumImageFormats_ptr(dpy);
}
extern int vaMaxNumProfiles(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
int  vaMaxNumProfiles(VADisplay dpy) {
  return vaMaxNumProfiles_ptr(dpy);
}
extern const char * vaProfileStr(VAProfile profile) __attribute__((weak));
DISABLE_CFI_ICALL
const char *  vaProfileStr(VAProfile profile) {
  return vaProfileStr_ptr(profile);
}
extern VAStatus vaPutImage(VADisplay dpy, VASurfaceID surface, VAImageID image, int src_x, int src_y, unsigned int src_width, unsigned int src_height, int dest_x, int dest_y, unsigned int dest_width, unsigned int dest_height) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaPutImage(VADisplay dpy, VASurfaceID surface, VAImageID image, int src_x, int src_y, unsigned int src_width, unsigned int src_height, int dest_x, int dest_y, unsigned int dest_width, unsigned int dest_height) {
  return vaPutImage_ptr(dpy, surface, image, src_x, src_y, src_width, src_height, dest_x, dest_y, dest_width, dest_height);
}
extern VAStatus vaQueryConfigAttributes(VADisplay dpy, VAConfigID config_id, VAProfile *profile, VAEntrypoint *entrypoint, VAConfigAttrib *attrib_list, int *num_attribs) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaQueryConfigAttributes(VADisplay dpy, VAConfigID config_id, VAProfile *profile, VAEntrypoint *entrypoint, VAConfigAttrib *attrib_list, int *num_attribs) {
  return vaQueryConfigAttributes_ptr(dpy, config_id, profile, entrypoint, attrib_list, num_attribs);
}
extern VAStatus vaQueryConfigEntrypoints(VADisplay dpy, VAProfile profile, VAEntrypoint *entrypoint_list, int *num_entrypoints) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaQueryConfigEntrypoints(VADisplay dpy, VAProfile profile, VAEntrypoint *entrypoint_list, int *num_entrypoints) {
  return vaQueryConfigEntrypoints_ptr(dpy, profile, entrypoint_list, num_entrypoints);
}
extern VAStatus vaQueryConfigProfiles(VADisplay dpy, VAProfile *profile_list, int *num_profiles) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaQueryConfigProfiles(VADisplay dpy, VAProfile *profile_list, int *num_profiles) {
  return vaQueryConfigProfiles_ptr(dpy, profile_list, num_profiles);
}
extern VAStatus vaQueryImageFormats(VADisplay dpy, VAImageFormat *format_list, int *num_formats) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaQueryImageFormats(VADisplay dpy, VAImageFormat *format_list, int *num_formats) {
  return vaQueryImageFormats_ptr(dpy, format_list, num_formats);
}
extern VAStatus vaQuerySurfaceAttributes(VADisplay dpy, VAConfigID config, VASurfaceAttrib *attrib_list, unsigned int *num_attribs) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaQuerySurfaceAttributes(VADisplay dpy, VAConfigID config, VASurfaceAttrib *attrib_list, unsigned int *num_attribs) {
  return vaQuerySurfaceAttributes_ptr(dpy, config, attrib_list, num_attribs);
}
extern const char* vaQueryVendorString(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
const char*  vaQueryVendorString(VADisplay dpy) {
  return vaQueryVendorString_ptr(dpy);
}
extern VAStatus vaRenderPicture(VADisplay dpy, VAContextID context, VABufferID *buffers, int num_buffers) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaRenderPicture(VADisplay dpy, VAContextID context, VABufferID *buffers, int num_buffers) {
  return vaRenderPicture_ptr(dpy, context, buffers, num_buffers);
}
extern VAStatus vaSyncSurface(VADisplay dpy, VASurfaceID render_target) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaSyncSurface(VADisplay dpy, VASurfaceID render_target) {
  return vaSyncSurface_ptr(dpy, render_target);
}
extern VAStatus vaTerminate(VADisplay dpy) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaTerminate(VADisplay dpy) {
  return vaTerminate_ptr(dpy);
}
extern VAStatus vaUnmapBuffer(VADisplay dpy, VABufferID buf_id) __attribute__((weak));
DISABLE_CFI_ICALL
VAStatus  vaUnmapBuffer(VADisplay dpy, VABufferID buf_id) {
  return vaUnmapBuffer_ptr(dpy, buf_id);
}

}  // extern "C"


namespace media_gpu_vaapi {

// Returns true if all stubs have been properly initialized.
bool IsVaInitialized() {
  return vaBeginPicture_ptr &&
         vaConfigAttribTypeStr_ptr &&
         vaCreateBuffer_ptr &&
         vaCreateConfig_ptr &&
         vaCreateContext_ptr &&
         vaCreateImage_ptr &&
         vaCreateSurfaces_ptr &&
         vaDeriveImage_ptr &&
         vaDestroyBuffer_ptr &&
         vaDestroyConfig_ptr &&
         vaDestroyContext_ptr &&
         vaDestroyImage_ptr &&
         vaDestroySurfaces_ptr &&
         vaDisplayIsValid_ptr &&
         vaEndPicture_ptr &&
         vaEntrypointStr_ptr &&
         vaErrorStr_ptr &&
         vaExportSurfaceHandle_ptr &&
         vaGetConfigAttributes_ptr &&
         vaGetImage_ptr &&
         vaInitialize_ptr &&
         vaMapBuffer_ptr &&
         vaMaxNumConfigAttributes_ptr &&
         vaMaxNumEntrypoints_ptr &&
         vaMaxNumImageFormats_ptr &&
         vaMaxNumProfiles_ptr &&
         vaProfileStr_ptr &&
         vaPutImage_ptr &&
         vaQueryConfigAttributes_ptr &&
         vaQueryConfigEntrypoints_ptr &&
         vaQueryConfigProfiles_ptr &&
         vaQueryImageFormats_ptr &&
         vaQuerySurfaceAttributes_ptr &&
         vaQueryVendorString_ptr &&
         vaRenderPicture_ptr &&
         vaSyncSurface_ptr &&
         vaTerminate_ptr &&
         vaUnmapBuffer_ptr;
}

// Initializes the module stubs.
void InitializeVa(void* module) {
  const char vaBeginPicture_name[] = "vaBeginPicture";
  vaBeginPicture_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAContextID context, VASurfaceID render_target)>(
      dlsym(module, vaBeginPicture_name));
  if (!vaBeginPicture_ptr)
    LogDlerror(vaBeginPicture_name);
  const char vaConfigAttribTypeStr_name[] = "vaConfigAttribTypeStr";
  vaConfigAttribTypeStr_ptr =
    reinterpret_cast<const char * (*)(VAConfigAttribType configAttribType)>(
      dlsym(module, vaConfigAttribTypeStr_name));
  if (!vaConfigAttribTypeStr_ptr)
    LogDlerror(vaConfigAttribTypeStr_name);
  const char vaCreateBuffer_name[] = "vaCreateBuffer";
  vaCreateBuffer_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAContextID context, VABufferType type, unsigned int size, unsigned int num_elements, void *data, VABufferID *buf_id)>(
      dlsym(module, vaCreateBuffer_name));
  if (!vaCreateBuffer_ptr)
    LogDlerror(vaCreateBuffer_name);
  const char vaCreateConfig_name[] = "vaCreateConfig";
  vaCreateConfig_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs, VAConfigID *config_id)>(
      dlsym(module, vaCreateConfig_name));
  if (!vaCreateConfig_ptr)
    LogDlerror(vaCreateConfig_name);
  const char vaCreateContext_name[] = "vaCreateContext";
  vaCreateContext_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAConfigID config_id, int picture_width, int picture_height, int flag, VASurfaceID *render_targets, int num_render_targets, VAContextID *context)>(
      dlsym(module, vaCreateContext_name));
  if (!vaCreateContext_ptr)
    LogDlerror(vaCreateContext_name);
  const char vaCreateImage_name[] = "vaCreateImage";
  vaCreateImage_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAImageFormat *format, int width, int height, VAImage *image)>(
      dlsym(module, vaCreateImage_name));
  if (!vaCreateImage_ptr)
    LogDlerror(vaCreateImage_name);
  const char vaCreateSurfaces_name[] = "vaCreateSurfaces";
  vaCreateSurfaces_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, unsigned int format, unsigned int width, unsigned int height, VASurfaceID *surfaces, unsigned int num_surfaces, VASurfaceAttrib *attrib_list, unsigned int num_attribs)>(
      dlsym(module, vaCreateSurfaces_name));
  if (!vaCreateSurfaces_ptr)
    LogDlerror(vaCreateSurfaces_name);
  const char vaDeriveImage_name[] = "vaDeriveImage";
  vaDeriveImage_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID surface, VAImage *image)>(
      dlsym(module, vaDeriveImage_name));
  if (!vaDeriveImage_ptr)
    LogDlerror(vaDeriveImage_name);
  const char vaDestroyBuffer_name[] = "vaDestroyBuffer";
  vaDestroyBuffer_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VABufferID buffer_id)>(
      dlsym(module, vaDestroyBuffer_name));
  if (!vaDestroyBuffer_ptr)
    LogDlerror(vaDestroyBuffer_name);
  const char vaDestroyConfig_name[] = "vaDestroyConfig";
  vaDestroyConfig_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAConfigID config_id)>(
      dlsym(module, vaDestroyConfig_name));
  if (!vaDestroyConfig_ptr)
    LogDlerror(vaDestroyConfig_name);
  const char vaDestroyContext_name[] = "vaDestroyContext";
  vaDestroyContext_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAContextID context)>(
      dlsym(module, vaDestroyContext_name));
  if (!vaDestroyContext_ptr)
    LogDlerror(vaDestroyContext_name);
  const char vaDestroyImage_name[] = "vaDestroyImage";
  vaDestroyImage_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAImageID image)>(
      dlsym(module, vaDestroyImage_name));
  if (!vaDestroyImage_ptr)
    LogDlerror(vaDestroyImage_name);
  const char vaDestroySurfaces_name[] = "vaDestroySurfaces";
  vaDestroySurfaces_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID *surfaces, int num_surfaces)>(
      dlsym(module, vaDestroySurfaces_name));
  if (!vaDestroySurfaces_ptr)
    LogDlerror(vaDestroySurfaces_name);
  const char vaDisplayIsValid_name[] = "vaDisplayIsValid";
  vaDisplayIsValid_ptr =
    reinterpret_cast<int (*)(VADisplay dpy)>(
      dlsym(module, vaDisplayIsValid_name));
  if (!vaDisplayIsValid_ptr)
    LogDlerror(vaDisplayIsValid_name);
  const char vaEndPicture_name[] = "vaEndPicture";
  vaEndPicture_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAContextID context)>(
      dlsym(module, vaEndPicture_name));
  if (!vaEndPicture_ptr)
    LogDlerror(vaEndPicture_name);
  const char vaEntrypointStr_name[] = "vaEntrypointStr";
  vaEntrypointStr_ptr =
    reinterpret_cast<const char * (*)(VAEntrypoint entrypoint)>(
      dlsym(module, vaEntrypointStr_name));
  if (!vaEntrypointStr_ptr)
    LogDlerror(vaEntrypointStr_name);
  const char vaErrorStr_name[] = "vaErrorStr";
  vaErrorStr_ptr =
    reinterpret_cast<const char * (*)(VAStatus error_status)>(
      dlsym(module, vaErrorStr_name));
  if (!vaErrorStr_ptr)
    LogDlerror(vaErrorStr_name);
  const char vaExportSurfaceHandle_name[] = "vaExportSurfaceHandle";
  vaExportSurfaceHandle_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID surface_id, uint32_t mem_type, uint32_t flags, void *descriptor)>(
      dlsym(module, vaExportSurfaceHandle_name));
  if (!vaExportSurfaceHandle_ptr)
    LogDlerror(vaExportSurfaceHandle_name);
  const char vaGetConfigAttributes_name[] = "vaGetConfigAttributes";
  vaGetConfigAttributes_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAProfile profile, VAEntrypoint entrypoint, VAConfigAttrib *attrib_list, int num_attribs)>(
      dlsym(module, vaGetConfigAttributes_name));
  if (!vaGetConfigAttributes_ptr)
    LogDlerror(vaGetConfigAttributes_name);
  const char vaGetImage_name[] = "vaGetImage";
  vaGetImage_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID surface, int x, int y, unsigned int width, unsigned int height, VAImageID image)>(
      dlsym(module, vaGetImage_name));
  if (!vaGetImage_ptr)
    LogDlerror(vaGetImage_name);
  const char vaInitialize_name[] = "vaInitialize";
  vaInitialize_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, int *major_version, int *minor_version)>(
      dlsym(module, vaInitialize_name));
  if (!vaInitialize_ptr)
    LogDlerror(vaInitialize_name);
  const char vaMapBuffer_name[] = "vaMapBuffer";
  vaMapBuffer_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VABufferID buf_id, void **pbuf)>(
      dlsym(module, vaMapBuffer_name));
  if (!vaMapBuffer_ptr)
    LogDlerror(vaMapBuffer_name);
  const char vaMaxNumConfigAttributes_name[] = "vaMaxNumConfigAttributes";
  vaMaxNumConfigAttributes_ptr =
    reinterpret_cast<int (*)(VADisplay dpy)>(
      dlsym(module, vaMaxNumConfigAttributes_name));
  if (!vaMaxNumConfigAttributes_ptr)
    LogDlerror(vaMaxNumConfigAttributes_name);
  const char vaMaxNumEntrypoints_name[] = "vaMaxNumEntrypoints";
  vaMaxNumEntrypoints_ptr =
    reinterpret_cast<int (*)(VADisplay dpy)>(
      dlsym(module, vaMaxNumEntrypoints_name));
  if (!vaMaxNumEntrypoints_ptr)
    LogDlerror(vaMaxNumEntrypoints_name);
  const char vaMaxNumImageFormats_name[] = "vaMaxNumImageFormats";
  vaMaxNumImageFormats_ptr =
    reinterpret_cast<int (*)(VADisplay dpy)>(
      dlsym(module, vaMaxNumImageFormats_name));
  if (!vaMaxNumImageFormats_ptr)
    LogDlerror(vaMaxNumImageFormats_name);
  const char vaMaxNumProfiles_name[] = "vaMaxNumProfiles";
  vaMaxNumProfiles_ptr =
    reinterpret_cast<int (*)(VADisplay dpy)>(
      dlsym(module, vaMaxNumProfiles_name));
  if (!vaMaxNumProfiles_ptr)
    LogDlerror(vaMaxNumProfiles_name);
  const char vaProfileStr_name[] = "vaProfileStr";
  vaProfileStr_ptr =
    reinterpret_cast<const char * (*)(VAProfile profile)>(
      dlsym(module, vaProfileStr_name));
  if (!vaProfileStr_ptr)
    LogDlerror(vaProfileStr_name);
  const char vaPutImage_name[] = "vaPutImage";
  vaPutImage_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID surface, VAImageID image, int src_x, int src_y, unsigned int src_width, unsigned int src_height, int dest_x, int dest_y, unsigned int dest_width, unsigned int dest_height)>(
      dlsym(module, vaPutImage_name));
  if (!vaPutImage_ptr)
    LogDlerror(vaPutImage_name);
  const char vaQueryConfigAttributes_name[] = "vaQueryConfigAttributes";
  vaQueryConfigAttributes_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAConfigID config_id, VAProfile *profile, VAEntrypoint *entrypoint, VAConfigAttrib *attrib_list, int *num_attribs)>(
      dlsym(module, vaQueryConfigAttributes_name));
  if (!vaQueryConfigAttributes_ptr)
    LogDlerror(vaQueryConfigAttributes_name);
  const char vaQueryConfigEntrypoints_name[] = "vaQueryConfigEntrypoints";
  vaQueryConfigEntrypoints_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAProfile profile, VAEntrypoint *entrypoint_list, int *num_entrypoints)>(
      dlsym(module, vaQueryConfigEntrypoints_name));
  if (!vaQueryConfigEntrypoints_ptr)
    LogDlerror(vaQueryConfigEntrypoints_name);
  const char vaQueryConfigProfiles_name[] = "vaQueryConfigProfiles";
  vaQueryConfigProfiles_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAProfile *profile_list, int *num_profiles)>(
      dlsym(module, vaQueryConfigProfiles_name));
  if (!vaQueryConfigProfiles_ptr)
    LogDlerror(vaQueryConfigProfiles_name);
  const char vaQueryImageFormats_name[] = "vaQueryImageFormats";
  vaQueryImageFormats_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAImageFormat *format_list, int *num_formats)>(
      dlsym(module, vaQueryImageFormats_name));
  if (!vaQueryImageFormats_ptr)
    LogDlerror(vaQueryImageFormats_name);
  const char vaQuerySurfaceAttributes_name[] = "vaQuerySurfaceAttributes";
  vaQuerySurfaceAttributes_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAConfigID config, VASurfaceAttrib *attrib_list, unsigned int *num_attribs)>(
      dlsym(module, vaQuerySurfaceAttributes_name));
  if (!vaQuerySurfaceAttributes_ptr)
    LogDlerror(vaQuerySurfaceAttributes_name);
  const char vaQueryVendorString_name[] = "vaQueryVendorString";
  vaQueryVendorString_ptr =
    reinterpret_cast<const char* (*)(VADisplay dpy)>(
      dlsym(module, vaQueryVendorString_name));
  if (!vaQueryVendorString_ptr)
    LogDlerror(vaQueryVendorString_name);
  const char vaRenderPicture_name[] = "vaRenderPicture";
  vaRenderPicture_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VAContextID context, VABufferID *buffers, int num_buffers)>(
      dlsym(module, vaRenderPicture_name));
  if (!vaRenderPicture_ptr)
    LogDlerror(vaRenderPicture_name);
  const char vaSyncSurface_name[] = "vaSyncSurface";
  vaSyncSurface_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VASurfaceID render_target)>(
      dlsym(module, vaSyncSurface_name));
  if (!vaSyncSurface_ptr)
    LogDlerror(vaSyncSurface_name);
  const char vaTerminate_name[] = "vaTerminate";
  vaTerminate_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy)>(
      dlsym(module, vaTerminate_name));
  if (!vaTerminate_ptr)
    LogDlerror(vaTerminate_name);
  const char vaUnmapBuffer_name[] = "vaUnmapBuffer";
  vaUnmapBuffer_ptr =
    reinterpret_cast<VAStatus (*)(VADisplay dpy, VABufferID buf_id)>(
      dlsym(module, vaUnmapBuffer_name));
  if (!vaUnmapBuffer_ptr)
    LogDlerror(vaUnmapBuffer_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeVa() {
  vaBeginPicture_ptr = nullptr;
  vaConfigAttribTypeStr_ptr = nullptr;
  vaCreateBuffer_ptr = nullptr;
  vaCreateConfig_ptr = nullptr;
  vaCreateContext_ptr = nullptr;
  vaCreateImage_ptr = nullptr;
  vaCreateSurfaces_ptr = nullptr;
  vaDeriveImage_ptr = nullptr;
  vaDestroyBuffer_ptr = nullptr;
  vaDestroyConfig_ptr = nullptr;
  vaDestroyContext_ptr = nullptr;
  vaDestroyImage_ptr = nullptr;
  vaDestroySurfaces_ptr = nullptr;
  vaDisplayIsValid_ptr = nullptr;
  vaEndPicture_ptr = nullptr;
  vaEntrypointStr_ptr = nullptr;
  vaErrorStr_ptr = nullptr;
  vaExportSurfaceHandle_ptr = nullptr;
  vaGetConfigAttributes_ptr = nullptr;
  vaGetImage_ptr = nullptr;
  vaInitialize_ptr = nullptr;
  vaMapBuffer_ptr = nullptr;
  vaMaxNumConfigAttributes_ptr = nullptr;
  vaMaxNumEntrypoints_ptr = nullptr;
  vaMaxNumImageFormats_ptr = nullptr;
  vaMaxNumProfiles_ptr = nullptr;
  vaProfileStr_ptr = nullptr;
  vaPutImage_ptr = nullptr;
  vaQueryConfigAttributes_ptr = nullptr;
  vaQueryConfigEntrypoints_ptr = nullptr;
  vaQueryConfigProfiles_ptr = nullptr;
  vaQueryImageFormats_ptr = nullptr;
  vaQuerySurfaceAttributes_ptr = nullptr;
  vaQueryVendorString_ptr = nullptr;
  vaRenderPicture_ptr = nullptr;
  vaSyncSurface_ptr = nullptr;
  vaTerminate_ptr = nullptr;
  vaUnmapBuffer_ptr = nullptr;
}

}  // namespace media_gpu_vaapi

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static VADisplay (*vaGetDisplayDRM_ptr)(int fd) = nullptr;

// Stubs that dispatch to the real implementations.
extern VADisplay vaGetDisplayDRM(int fd) __attribute__((weak));
DISABLE_CFI_ICALL
VADisplay  vaGetDisplayDRM(int fd) {
  return vaGetDisplayDRM_ptr(fd);
}

}  // extern "C"


namespace media_gpu_vaapi {

// Returns true if all stubs have been properly initialized.
bool IsVa_drmInitialized() {
  return vaGetDisplayDRM_ptr;
}

// Initializes the module stubs.
void InitializeVa_drm(void* module) {
  const char vaGetDisplayDRM_name[] = "vaGetDisplayDRM";
  vaGetDisplayDRM_ptr =
    reinterpret_cast<VADisplay (*)(int fd)>(
      dlsym(module, vaGetDisplayDRM_name));
  if (!vaGetDisplayDRM_ptr)
    LogDlerror(vaGetDisplayDRM_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeVa_drm() {
  vaGetDisplayDRM_ptr = nullptr;
}

}  // namespace media_gpu_vaapi

namespace media_gpu_vaapi {
typedef std::map<StubModules, void*> StubHandleMap;
static void CloseLibraries(StubHandleMap* stub_handles) {
  for (StubHandleMap::const_iterator it = stub_handles->begin();
       it != stub_handles->end();
       ++it) {
    dlclose(it->second);
  }

  stub_handles->clear();
}
bool InitializeStubs(const StubPathMap& path_map) {
  StubHandleMap opened_libraries;
  for (int i = 0; i < kNumStubModules; ++i) {
    StubModules cur_module = static_cast<StubModules>(i);
    // If a module is missing, we fail.
    StubPathMap::const_iterator it = path_map.find(cur_module);
    if (it == path_map.end()) {
      CloseLibraries(&opened_libraries);
      return false;
    }

    // Otherwise, attempt to dlopen the library.
    const std::vector<std::string>& paths = it->second;
    bool module_opened = false;
    for (std::vector<std::string>::const_iterator dso_path = paths.begin();
         !module_opened && dso_path != paths.end();
         ++dso_path) {
      void* handle = dlopen(dso_path->c_str(), RTLD_LAZY);
      if (handle) {
        module_opened = true;
        opened_libraries[cur_module] = handle;
      } else {
        VLOG(1) << "dlopen(" << dso_path->c_str() << ") failed.";
        if (char *errstr = dlerror()) {
          VLOG(1) << "dlerror() says:\n" << errstr;
        } else {
          VLOG(1) << "dlerror() is nullptr";
        }

      }
    }

    if (!module_opened) {
      CloseLibraries(&opened_libraries);
      return false;
    }
  }

  // Initialize each module if we have not already failed.
  InitializeVa(opened_libraries[kModuleVa]);
  InitializeVa_drm(opened_libraries[kModuleVa_drm]);

  // Check that each module is initialized correctly.
  // Close all previously opened libraries on failure.
  if (!IsVaInitialized() ||
      !IsVa_drmInitialized()) {
    UninitializeVa();
    UninitializeVa_drm();
    CloseLibraries(&opened_libraries);
    return false;
  }

  return true;
}

}  // namespace media_gpu_vaapi
