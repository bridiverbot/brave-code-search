// This is generated file. Do not modify directly.

#include "media/audio/pulse/pulse_stubs.h"

#include <dlfcn.h>   // For dlsym, dlopen, RTLD_LAZY.

#include <cstdarg>

#include "base/compiler_specific.h"
#include "base/logging.h"

// The extra include header needed in the generated stub file for defining
// various Pulse types.

extern "C" {

#include <pulse/pulseaudio.h>

#if PA_MAJOR > 12
typedef const pa_context* const_pa_context_ptr;
typedef const pa_operation* const_pa_operation_ptr;
typedef const pa_proplist* const_pa_proplist_ptr;
typedef const pa_stream* const_pa_stream_ptr;
#else
typedef pa_context* const_pa_context_ptr;
typedef pa_operation* const_pa_operation_ptr;
typedef pa_proplist* const_pa_proplist_ptr;
typedef pa_stream* const_pa_stream_ptr;
#endif
}

namespace  {

void LogDlerror(const char* symbol) {
  VLOG(1) << "Couldn't load " << symbol << ", dlerror() says:\n" << dlerror();
}

}  // namespace 

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static pa_mainloop_api* (*pa_threaded_mainloop_get_api_ptr)(pa_threaded_mainloop* m) = nullptr;
static void (*pa_threaded_mainloop_free_ptr)(pa_threaded_mainloop* m) = nullptr;
static pa_threaded_mainloop* (*pa_threaded_mainloop_new_ptr)() = nullptr;
static void (*pa_threaded_mainloop_lock_ptr)(pa_threaded_mainloop* m) = nullptr;
static int (*pa_threaded_mainloop_in_thread_ptr)(pa_threaded_mainloop* m) = nullptr;
static void (*pa_threaded_mainloop_signal_ptr)(pa_threaded_mainloop* m, int wait_for_accept) = nullptr;
static int (*pa_threaded_mainloop_start_ptr)(pa_threaded_mainloop* m) = nullptr;
static void (*pa_threaded_mainloop_stop_ptr)(pa_threaded_mainloop* m) = nullptr;
static void (*pa_threaded_mainloop_unlock_ptr)(pa_threaded_mainloop* m) = nullptr;
static void (*pa_threaded_mainloop_wait_ptr)(pa_threaded_mainloop* m) = nullptr;
static pa_channel_map* (*pa_channel_map_init_ptr)(pa_channel_map* m) = nullptr;
static pa_channel_map* (*pa_channel_map_init_mono_ptr)(pa_channel_map* m) = nullptr;
static int (*pa_context_connect_ptr)(pa_context* c, const char* server, pa_context_flags_t flags, const pa_spawn_api* api) = nullptr;
static void (*pa_context_disconnect_ptr)(pa_context* c) = nullptr;
static pa_operation* (*pa_context_get_server_info_ptr)(pa_context* c, pa_server_info_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_get_source_info_by_index_ptr)(pa_context* c, uint32_t idx, pa_source_info_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_get_source_info_by_name_ptr)(pa_context* c, const char* name, pa_source_info_cb_t cb, void *userdata) = nullptr;
static pa_operation* (*pa_context_get_source_info_list_ptr)(pa_context* c, pa_source_info_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_get_sink_info_list_ptr)(pa_context* c, pa_sink_info_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_get_sink_info_by_name_ptr)(pa_context* c, const char* name, pa_sink_info_cb_t cb, void *userdata) = nullptr;
static pa_context_state_t (*pa_context_get_state_ptr)(const_pa_context_ptr c) = nullptr;
static pa_context* (*pa_context_new_ptr)(pa_mainloop_api* mainloop, const char* name) = nullptr;
static pa_operation* (*pa_context_set_source_volume_by_index_ptr)(pa_context* c, uint32_t idx, const pa_cvolume* volume, pa_context_success_cb_t cb, void* userdata) = nullptr;
static void (*pa_context_set_state_callback_ptr)(pa_context* c, pa_context_notify_cb_t cb, void* userdata) = nullptr;
static pa_operation_state_t (*pa_operation_get_state_ptr)(const_pa_operation_ptr o) = nullptr;
static void (*pa_context_unref_ptr)(pa_context* c) = nullptr;
static void (*pa_operation_cancel_ptr)(pa_operation* o) = nullptr;
static void (*pa_operation_unref_ptr)(pa_operation* o) = nullptr;
static int (*pa_stream_begin_write_ptr)(pa_stream* p, void** data, size_t* nbytes) = nullptr;
static int (*pa_stream_connect_playback_ptr)(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags, const pa_cvolume* volume, pa_stream* sync_stream) = nullptr;
static int (*pa_stream_connect_record_ptr)(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags) = nullptr;
static pa_operation* (*pa_stream_cork_ptr)(pa_stream* s, int b, pa_stream_success_cb_t cb, void* userdata) = nullptr;
static int (*pa_stream_disconnect_ptr)(pa_stream* s) = nullptr;
static int (*pa_stream_drop_ptr)(pa_stream *p) = nullptr;
static pa_operation* (*pa_stream_flush_ptr)(pa_stream* s, pa_stream_success_cb_t cb, void* userdata) = nullptr;
static uint32_t (*pa_stream_get_device_index_ptr)(const_pa_stream_ptr s) = nullptr;
static int (*pa_stream_get_latency_ptr)(pa_stream* s, pa_usec_t* r_usec, int* negative) = nullptr;
static pa_stream_state_t (*pa_stream_get_state_ptr)(const_pa_stream_ptr p) = nullptr;
static pa_stream* (*pa_stream_new_ptr)(pa_context*  c, const char*  name, const pa_sample_spec*  ss, const pa_channel_map *  map) = nullptr;
static pa_stream* (*pa_stream_new_with_proplist_ptr)(pa_context* c, const char* name, const pa_sample_spec* ss, const pa_channel_map* map, pa_proplist* p) = nullptr;
static pa_proplist* (*pa_proplist_new_ptr)(void) = nullptr;
static int (*pa_proplist_contains_ptr)(const_pa_proplist_ptr p, const char* key) = nullptr;
static void (*pa_proplist_free_ptr)(pa_proplist* p) = nullptr;
static const char* (*pa_proplist_gets_ptr)(const_pa_proplist_ptr p, const char* key) = nullptr;
static int (*pa_proplist_sets_ptr)(pa_proplist* p, const char* key, const char* value) = nullptr;
static size_t (*pa_stream_readable_size_ptr)(const_pa_stream_ptr p) = nullptr;
static int (*pa_stream_peek_ptr)(pa_stream* p, const void** data, size_t* nbytes) = nullptr;
static void (*pa_stream_set_read_callback_ptr)(pa_stream* p, pa_stream_request_cb_t cb, void* userdata) = nullptr;
static void (*pa_stream_set_state_callback_ptr)(pa_stream* s, pa_stream_notify_cb_t cb, void* userdata) = nullptr;
static int (*pa_stream_write_ptr)(pa_stream* p, const void* data, size_t nbytes, pa_free_cb_t free_cb, int64_t offset, pa_seek_mode_t seek) = nullptr;
static void (*pa_stream_set_write_callback_ptr)(pa_stream *p, pa_stream_request_cb_t cb, void *userdata) = nullptr;
static void (*pa_stream_unref_ptr)(pa_stream* s) = nullptr;
static int (*pa_context_errno_ptr)(const_pa_context_ptr c) = nullptr;
static const char* (*pa_strerror_ptr)(int error) = nullptr;
static pa_cvolume* (*pa_cvolume_set_ptr)(pa_cvolume* a, unsigned  channels, pa_volume_t v) = nullptr;
static void (*pa_context_set_subscribe_callback_ptr)(pa_context* c, pa_context_subscribe_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_subscribe_ptr)(pa_context* c, pa_subscription_mask_t m, pa_context_success_cb_t cb, void* userdata) = nullptr;
static pa_operation* (*pa_context_set_sink_mute_by_index_ptr)(pa_context * c, uint32_t idx, int mute, pa_context_success_cb_t cb, void * userdata) = nullptr;

// Stubs that dispatch to the real implementations.
extern pa_mainloop_api* pa_threaded_mainloop_get_api(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
pa_mainloop_api*  pa_threaded_mainloop_get_api(pa_threaded_mainloop* m) {
  return pa_threaded_mainloop_get_api_ptr(m);
}
extern void pa_threaded_mainloop_free(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_free(pa_threaded_mainloop* m) {
  pa_threaded_mainloop_free_ptr(m);
}
extern pa_threaded_mainloop* pa_threaded_mainloop_new() __attribute__((weak));
DISABLE_CFI_ICALL
pa_threaded_mainloop*  pa_threaded_mainloop_new() {
  return pa_threaded_mainloop_new_ptr();
}
extern void pa_threaded_mainloop_lock(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_lock(pa_threaded_mainloop* m) {
  pa_threaded_mainloop_lock_ptr(m);
}
extern int pa_threaded_mainloop_in_thread(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_threaded_mainloop_in_thread(pa_threaded_mainloop* m) {
  return pa_threaded_mainloop_in_thread_ptr(m);
}
extern void pa_threaded_mainloop_signal(pa_threaded_mainloop* m, int wait_for_accept) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_signal(pa_threaded_mainloop* m, int wait_for_accept) {
  pa_threaded_mainloop_signal_ptr(m, wait_for_accept);
}
extern int pa_threaded_mainloop_start(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_threaded_mainloop_start(pa_threaded_mainloop* m) {
  return pa_threaded_mainloop_start_ptr(m);
}
extern void pa_threaded_mainloop_stop(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_stop(pa_threaded_mainloop* m) {
  pa_threaded_mainloop_stop_ptr(m);
}
extern void pa_threaded_mainloop_unlock(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_unlock(pa_threaded_mainloop* m) {
  pa_threaded_mainloop_unlock_ptr(m);
}
extern void pa_threaded_mainloop_wait(pa_threaded_mainloop* m) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_threaded_mainloop_wait(pa_threaded_mainloop* m) {
  pa_threaded_mainloop_wait_ptr(m);
}
extern pa_channel_map* pa_channel_map_init(pa_channel_map* m) __attribute__((weak));
DISABLE_CFI_ICALL
pa_channel_map*  pa_channel_map_init(pa_channel_map* m) {
  return pa_channel_map_init_ptr(m);
}
extern pa_channel_map* pa_channel_map_init_mono(pa_channel_map* m) __attribute__((weak));
DISABLE_CFI_ICALL
pa_channel_map*  pa_channel_map_init_mono(pa_channel_map* m) {
  return pa_channel_map_init_mono_ptr(m);
}
extern int pa_context_connect(pa_context* c, const char* server, pa_context_flags_t flags, const pa_spawn_api* api) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_context_connect(pa_context* c, const char* server, pa_context_flags_t flags, const pa_spawn_api* api) {
  return pa_context_connect_ptr(c, server, flags, api);
}
extern void pa_context_disconnect(pa_context* c) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_context_disconnect(pa_context* c) {
  pa_context_disconnect_ptr(c);
}
extern pa_operation* pa_context_get_server_info(pa_context* c, pa_server_info_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_server_info(pa_context* c, pa_server_info_cb_t cb, void* userdata) {
  return pa_context_get_server_info_ptr(c, cb, userdata);
}
extern pa_operation* pa_context_get_source_info_by_index(pa_context* c, uint32_t idx, pa_source_info_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_source_info_by_index(pa_context* c, uint32_t idx, pa_source_info_cb_t cb, void* userdata) {
  return pa_context_get_source_info_by_index_ptr(c, idx, cb, userdata);
}
extern pa_operation* pa_context_get_source_info_by_name(pa_context* c, const char* name, pa_source_info_cb_t cb, void *userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_source_info_by_name(pa_context* c, const char* name, pa_source_info_cb_t cb, void *userdata) {
  return pa_context_get_source_info_by_name_ptr(c, name, cb, userdata);
}
extern pa_operation* pa_context_get_source_info_list(pa_context* c, pa_source_info_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_source_info_list(pa_context* c, pa_source_info_cb_t cb, void* userdata) {
  return pa_context_get_source_info_list_ptr(c, cb, userdata);
}
extern pa_operation* pa_context_get_sink_info_list(pa_context* c, pa_sink_info_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_sink_info_list(pa_context* c, pa_sink_info_cb_t cb, void* userdata) {
  return pa_context_get_sink_info_list_ptr(c, cb, userdata);
}
extern pa_operation* pa_context_get_sink_info_by_name(pa_context* c, const char* name, pa_sink_info_cb_t cb, void *userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_get_sink_info_by_name(pa_context* c, const char* name, pa_sink_info_cb_t cb, void *userdata) {
  return pa_context_get_sink_info_by_name_ptr(c, name, cb, userdata);
}
extern pa_context_state_t pa_context_get_state(const_pa_context_ptr c) __attribute__((weak));
DISABLE_CFI_ICALL
pa_context_state_t  pa_context_get_state(const_pa_context_ptr c) {
  return pa_context_get_state_ptr(c);
}
extern pa_context* pa_context_new(pa_mainloop_api* mainloop, const char* name) __attribute__((weak));
DISABLE_CFI_ICALL
pa_context*  pa_context_new(pa_mainloop_api* mainloop, const char* name) {
  return pa_context_new_ptr(mainloop, name);
}
extern pa_operation* pa_context_set_source_volume_by_index(pa_context* c, uint32_t idx, const pa_cvolume* volume, pa_context_success_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_set_source_volume_by_index(pa_context* c, uint32_t idx, const pa_cvolume* volume, pa_context_success_cb_t cb, void* userdata) {
  return pa_context_set_source_volume_by_index_ptr(c, idx, volume, cb, userdata);
}
extern void pa_context_set_state_callback(pa_context* c, pa_context_notify_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_context_set_state_callback(pa_context* c, pa_context_notify_cb_t cb, void* userdata) {
  pa_context_set_state_callback_ptr(c, cb, userdata);
}
extern pa_operation_state_t pa_operation_get_state(const_pa_operation_ptr o) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation_state_t  pa_operation_get_state(const_pa_operation_ptr o) {
  return pa_operation_get_state_ptr(o);
}
extern void pa_context_unref(pa_context* c) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_context_unref(pa_context* c) {
  pa_context_unref_ptr(c);
}
extern void pa_operation_cancel(pa_operation* o) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_operation_cancel(pa_operation* o) {
  pa_operation_cancel_ptr(o);
}
extern void pa_operation_unref(pa_operation* o) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_operation_unref(pa_operation* o) {
  pa_operation_unref_ptr(o);
}
extern int pa_stream_begin_write(pa_stream* p, void** data, size_t* nbytes) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_begin_write(pa_stream* p, void** data, size_t* nbytes) {
  return pa_stream_begin_write_ptr(p, data, nbytes);
}
extern int pa_stream_connect_playback(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags, const pa_cvolume* volume, pa_stream* sync_stream) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_connect_playback(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags, const pa_cvolume* volume, pa_stream* sync_stream) {
  return pa_stream_connect_playback_ptr(s, dev, attr, flags, volume, sync_stream);
}
extern int pa_stream_connect_record(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_connect_record(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags) {
  return pa_stream_connect_record_ptr(s, dev, attr, flags);
}
extern pa_operation* pa_stream_cork(pa_stream* s, int b, pa_stream_success_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_stream_cork(pa_stream* s, int b, pa_stream_success_cb_t cb, void* userdata) {
  return pa_stream_cork_ptr(s, b, cb, userdata);
}
extern int pa_stream_disconnect(pa_stream* s) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_disconnect(pa_stream* s) {
  return pa_stream_disconnect_ptr(s);
}
extern int pa_stream_drop(pa_stream *p) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_drop(pa_stream *p) {
  return pa_stream_drop_ptr(p);
}
extern pa_operation* pa_stream_flush(pa_stream* s, pa_stream_success_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_stream_flush(pa_stream* s, pa_stream_success_cb_t cb, void* userdata) {
  return pa_stream_flush_ptr(s, cb, userdata);
}
extern uint32_t pa_stream_get_device_index(const_pa_stream_ptr s) __attribute__((weak));
DISABLE_CFI_ICALL
uint32_t  pa_stream_get_device_index(const_pa_stream_ptr s) {
  return pa_stream_get_device_index_ptr(s);
}
extern int pa_stream_get_latency(pa_stream* s, pa_usec_t* r_usec, int* negative) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_get_latency(pa_stream* s, pa_usec_t* r_usec, int* negative) {
  return pa_stream_get_latency_ptr(s, r_usec, negative);
}
extern pa_stream_state_t pa_stream_get_state(const_pa_stream_ptr p) __attribute__((weak));
DISABLE_CFI_ICALL
pa_stream_state_t  pa_stream_get_state(const_pa_stream_ptr p) {
  return pa_stream_get_state_ptr(p);
}
extern pa_stream* pa_stream_new(pa_context*  c, const char*  name, const pa_sample_spec*  ss, const pa_channel_map *  map) __attribute__((weak));
DISABLE_CFI_ICALL
pa_stream*  pa_stream_new(pa_context*  c, const char*  name, const pa_sample_spec*  ss, const pa_channel_map *  map) {
  return pa_stream_new_ptr(c, name, ss, map);
}
extern pa_stream* pa_stream_new_with_proplist(pa_context* c, const char* name, const pa_sample_spec* ss, const pa_channel_map* map, pa_proplist* p) __attribute__((weak));
DISABLE_CFI_ICALL
pa_stream*  pa_stream_new_with_proplist(pa_context* c, const char* name, const pa_sample_spec* ss, const pa_channel_map* map, pa_proplist* p) {
  return pa_stream_new_with_proplist_ptr(c, name, ss, map, p);
}
extern pa_proplist* pa_proplist_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
pa_proplist*  pa_proplist_new(void) {
  return pa_proplist_new_ptr();
}
extern int pa_proplist_contains(const_pa_proplist_ptr p, const char* key) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_proplist_contains(const_pa_proplist_ptr p, const char* key) {
  return pa_proplist_contains_ptr(p, key);
}
extern void pa_proplist_free(pa_proplist* p) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_proplist_free(pa_proplist* p) {
  pa_proplist_free_ptr(p);
}
extern const char* pa_proplist_gets(const_pa_proplist_ptr p, const char* key) __attribute__((weak));
DISABLE_CFI_ICALL
const char*  pa_proplist_gets(const_pa_proplist_ptr p, const char* key) {
  return pa_proplist_gets_ptr(p, key);
}
extern int pa_proplist_sets(pa_proplist* p, const char* key, const char* value) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_proplist_sets(pa_proplist* p, const char* key, const char* value) {
  return pa_proplist_sets_ptr(p, key, value);
}
extern size_t pa_stream_readable_size(const_pa_stream_ptr p) __attribute__((weak));
DISABLE_CFI_ICALL
size_t  pa_stream_readable_size(const_pa_stream_ptr p) {
  return pa_stream_readable_size_ptr(p);
}
extern int pa_stream_peek(pa_stream* p, const void** data, size_t* nbytes) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_peek(pa_stream* p, const void** data, size_t* nbytes) {
  return pa_stream_peek_ptr(p, data, nbytes);
}
extern void pa_stream_set_read_callback(pa_stream* p, pa_stream_request_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_stream_set_read_callback(pa_stream* p, pa_stream_request_cb_t cb, void* userdata) {
  pa_stream_set_read_callback_ptr(p, cb, userdata);
}
extern void pa_stream_set_state_callback(pa_stream* s, pa_stream_notify_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_stream_set_state_callback(pa_stream* s, pa_stream_notify_cb_t cb, void* userdata) {
  pa_stream_set_state_callback_ptr(s, cb, userdata);
}
extern int pa_stream_write(pa_stream* p, const void* data, size_t nbytes, pa_free_cb_t free_cb, int64_t offset, pa_seek_mode_t seek) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_stream_write(pa_stream* p, const void* data, size_t nbytes, pa_free_cb_t free_cb, int64_t offset, pa_seek_mode_t seek) {
  return pa_stream_write_ptr(p, data, nbytes, free_cb, offset, seek);
}
extern void pa_stream_set_write_callback(pa_stream *p, pa_stream_request_cb_t cb, void *userdata) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_stream_set_write_callback(pa_stream *p, pa_stream_request_cb_t cb, void *userdata) {
  pa_stream_set_write_callback_ptr(p, cb, userdata);
}
extern void pa_stream_unref(pa_stream* s) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_stream_unref(pa_stream* s) {
  pa_stream_unref_ptr(s);
}
extern int pa_context_errno(const_pa_context_ptr c) __attribute__((weak));
DISABLE_CFI_ICALL
int  pa_context_errno(const_pa_context_ptr c) {
  return pa_context_errno_ptr(c);
}
extern const char* pa_strerror(int error) __attribute__((weak));
DISABLE_CFI_ICALL
const char*  pa_strerror(int error) {
  return pa_strerror_ptr(error);
}
extern pa_cvolume* pa_cvolume_set(pa_cvolume* a, unsigned  channels, pa_volume_t v) __attribute__((weak));
DISABLE_CFI_ICALL
pa_cvolume*  pa_cvolume_set(pa_cvolume* a, unsigned  channels, pa_volume_t v) {
  return pa_cvolume_set_ptr(a, channels, v);
}
extern void pa_context_set_subscribe_callback(pa_context* c, pa_context_subscribe_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
void  pa_context_set_subscribe_callback(pa_context* c, pa_context_subscribe_cb_t cb, void* userdata) {
  pa_context_set_subscribe_callback_ptr(c, cb, userdata);
}
extern pa_operation* pa_context_subscribe(pa_context* c, pa_subscription_mask_t m, pa_context_success_cb_t cb, void* userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_subscribe(pa_context* c, pa_subscription_mask_t m, pa_context_success_cb_t cb, void* userdata) {
  return pa_context_subscribe_ptr(c, m, cb, userdata);
}
extern pa_operation* pa_context_set_sink_mute_by_index(pa_context * c, uint32_t idx, int mute, pa_context_success_cb_t cb, void * userdata) __attribute__((weak));
DISABLE_CFI_ICALL
pa_operation*  pa_context_set_sink_mute_by_index(pa_context * c, uint32_t idx, int mute, pa_context_success_cb_t cb, void * userdata) {
  return pa_context_set_sink_mute_by_index_ptr(c, idx, mute, cb, userdata);
}

}  // extern "C"


namespace media_audio_pulse {

// Returns true if all stubs have been properly initialized.
bool IsPulseInitialized() {
  return pa_threaded_mainloop_get_api_ptr &&
         pa_threaded_mainloop_free_ptr &&
         pa_threaded_mainloop_new_ptr &&
         pa_threaded_mainloop_lock_ptr &&
         pa_threaded_mainloop_in_thread_ptr &&
         pa_threaded_mainloop_signal_ptr &&
         pa_threaded_mainloop_start_ptr &&
         pa_threaded_mainloop_stop_ptr &&
         pa_threaded_mainloop_unlock_ptr &&
         pa_threaded_mainloop_wait_ptr &&
         pa_channel_map_init_ptr &&
         pa_channel_map_init_mono_ptr &&
         pa_context_connect_ptr &&
         pa_context_disconnect_ptr &&
         pa_context_get_server_info_ptr &&
         pa_context_get_source_info_by_index_ptr &&
         pa_context_get_source_info_by_name_ptr &&
         pa_context_get_source_info_list_ptr &&
         pa_context_get_sink_info_list_ptr &&
         pa_context_get_sink_info_by_name_ptr &&
         pa_context_get_state_ptr &&
         pa_context_new_ptr &&
         pa_context_set_source_volume_by_index_ptr &&
         pa_context_set_state_callback_ptr &&
         pa_operation_get_state_ptr &&
         pa_context_unref_ptr &&
         pa_operation_cancel_ptr &&
         pa_operation_unref_ptr &&
         pa_stream_begin_write_ptr &&
         pa_stream_connect_playback_ptr &&
         pa_stream_connect_record_ptr &&
         pa_stream_cork_ptr &&
         pa_stream_disconnect_ptr &&
         pa_stream_drop_ptr &&
         pa_stream_flush_ptr &&
         pa_stream_get_device_index_ptr &&
         pa_stream_get_latency_ptr &&
         pa_stream_get_state_ptr &&
         pa_stream_new_ptr &&
         pa_stream_new_with_proplist_ptr &&
         pa_proplist_new_ptr &&
         pa_proplist_contains_ptr &&
         pa_proplist_free_ptr &&
         pa_proplist_gets_ptr &&
         pa_proplist_sets_ptr &&
         pa_stream_readable_size_ptr &&
         pa_stream_peek_ptr &&
         pa_stream_set_read_callback_ptr &&
         pa_stream_set_state_callback_ptr &&
         pa_stream_write_ptr &&
         pa_stream_set_write_callback_ptr &&
         pa_stream_unref_ptr &&
         pa_context_errno_ptr &&
         pa_strerror_ptr &&
         pa_cvolume_set_ptr &&
         pa_context_set_subscribe_callback_ptr &&
         pa_context_subscribe_ptr &&
         pa_context_set_sink_mute_by_index_ptr;
}

// Initializes the module stubs.
void InitializePulse(void* module) {
  const char pa_threaded_mainloop_get_api_name[] = "pa_threaded_mainloop_get_api";
  pa_threaded_mainloop_get_api_ptr =
    reinterpret_cast<pa_mainloop_api* (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_get_api_name));
  if (!pa_threaded_mainloop_get_api_ptr)
    LogDlerror(pa_threaded_mainloop_get_api_name);
  const char pa_threaded_mainloop_free_name[] = "pa_threaded_mainloop_free";
  pa_threaded_mainloop_free_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_free_name));
  if (!pa_threaded_mainloop_free_ptr)
    LogDlerror(pa_threaded_mainloop_free_name);
  const char pa_threaded_mainloop_new_name[] = "pa_threaded_mainloop_new";
  pa_threaded_mainloop_new_ptr =
    reinterpret_cast<pa_threaded_mainloop* (*)()>(
      dlsym(module, pa_threaded_mainloop_new_name));
  if (!pa_threaded_mainloop_new_ptr)
    LogDlerror(pa_threaded_mainloop_new_name);
  const char pa_threaded_mainloop_lock_name[] = "pa_threaded_mainloop_lock";
  pa_threaded_mainloop_lock_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_lock_name));
  if (!pa_threaded_mainloop_lock_ptr)
    LogDlerror(pa_threaded_mainloop_lock_name);
  const char pa_threaded_mainloop_in_thread_name[] = "pa_threaded_mainloop_in_thread";
  pa_threaded_mainloop_in_thread_ptr =
    reinterpret_cast<int (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_in_thread_name));
  if (!pa_threaded_mainloop_in_thread_ptr)
    LogDlerror(pa_threaded_mainloop_in_thread_name);
  const char pa_threaded_mainloop_signal_name[] = "pa_threaded_mainloop_signal";
  pa_threaded_mainloop_signal_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m, int wait_for_accept)>(
      dlsym(module, pa_threaded_mainloop_signal_name));
  if (!pa_threaded_mainloop_signal_ptr)
    LogDlerror(pa_threaded_mainloop_signal_name);
  const char pa_threaded_mainloop_start_name[] = "pa_threaded_mainloop_start";
  pa_threaded_mainloop_start_ptr =
    reinterpret_cast<int (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_start_name));
  if (!pa_threaded_mainloop_start_ptr)
    LogDlerror(pa_threaded_mainloop_start_name);
  const char pa_threaded_mainloop_stop_name[] = "pa_threaded_mainloop_stop";
  pa_threaded_mainloop_stop_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_stop_name));
  if (!pa_threaded_mainloop_stop_ptr)
    LogDlerror(pa_threaded_mainloop_stop_name);
  const char pa_threaded_mainloop_unlock_name[] = "pa_threaded_mainloop_unlock";
  pa_threaded_mainloop_unlock_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_unlock_name));
  if (!pa_threaded_mainloop_unlock_ptr)
    LogDlerror(pa_threaded_mainloop_unlock_name);
  const char pa_threaded_mainloop_wait_name[] = "pa_threaded_mainloop_wait";
  pa_threaded_mainloop_wait_ptr =
    reinterpret_cast<void (*)(pa_threaded_mainloop* m)>(
      dlsym(module, pa_threaded_mainloop_wait_name));
  if (!pa_threaded_mainloop_wait_ptr)
    LogDlerror(pa_threaded_mainloop_wait_name);
  const char pa_channel_map_init_name[] = "pa_channel_map_init";
  pa_channel_map_init_ptr =
    reinterpret_cast<pa_channel_map* (*)(pa_channel_map* m)>(
      dlsym(module, pa_channel_map_init_name));
  if (!pa_channel_map_init_ptr)
    LogDlerror(pa_channel_map_init_name);
  const char pa_channel_map_init_mono_name[] = "pa_channel_map_init_mono";
  pa_channel_map_init_mono_ptr =
    reinterpret_cast<pa_channel_map* (*)(pa_channel_map* m)>(
      dlsym(module, pa_channel_map_init_mono_name));
  if (!pa_channel_map_init_mono_ptr)
    LogDlerror(pa_channel_map_init_mono_name);
  const char pa_context_connect_name[] = "pa_context_connect";
  pa_context_connect_ptr =
    reinterpret_cast<int (*)(pa_context* c, const char* server, pa_context_flags_t flags, const pa_spawn_api* api)>(
      dlsym(module, pa_context_connect_name));
  if (!pa_context_connect_ptr)
    LogDlerror(pa_context_connect_name);
  const char pa_context_disconnect_name[] = "pa_context_disconnect";
  pa_context_disconnect_ptr =
    reinterpret_cast<void (*)(pa_context* c)>(
      dlsym(module, pa_context_disconnect_name));
  if (!pa_context_disconnect_ptr)
    LogDlerror(pa_context_disconnect_name);
  const char pa_context_get_server_info_name[] = "pa_context_get_server_info";
  pa_context_get_server_info_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, pa_server_info_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_get_server_info_name));
  if (!pa_context_get_server_info_ptr)
    LogDlerror(pa_context_get_server_info_name);
  const char pa_context_get_source_info_by_index_name[] = "pa_context_get_source_info_by_index";
  pa_context_get_source_info_by_index_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, uint32_t idx, pa_source_info_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_get_source_info_by_index_name));
  if (!pa_context_get_source_info_by_index_ptr)
    LogDlerror(pa_context_get_source_info_by_index_name);
  const char pa_context_get_source_info_by_name_name[] = "pa_context_get_source_info_by_name";
  pa_context_get_source_info_by_name_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, const char* name, pa_source_info_cb_t cb, void *userdata)>(
      dlsym(module, pa_context_get_source_info_by_name_name));
  if (!pa_context_get_source_info_by_name_ptr)
    LogDlerror(pa_context_get_source_info_by_name_name);
  const char pa_context_get_source_info_list_name[] = "pa_context_get_source_info_list";
  pa_context_get_source_info_list_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, pa_source_info_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_get_source_info_list_name));
  if (!pa_context_get_source_info_list_ptr)
    LogDlerror(pa_context_get_source_info_list_name);
  const char pa_context_get_sink_info_list_name[] = "pa_context_get_sink_info_list";
  pa_context_get_sink_info_list_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, pa_sink_info_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_get_sink_info_list_name));
  if (!pa_context_get_sink_info_list_ptr)
    LogDlerror(pa_context_get_sink_info_list_name);
  const char pa_context_get_sink_info_by_name_name[] = "pa_context_get_sink_info_by_name";
  pa_context_get_sink_info_by_name_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, const char* name, pa_sink_info_cb_t cb, void *userdata)>(
      dlsym(module, pa_context_get_sink_info_by_name_name));
  if (!pa_context_get_sink_info_by_name_ptr)
    LogDlerror(pa_context_get_sink_info_by_name_name);
  const char pa_context_get_state_name[] = "pa_context_get_state";
  pa_context_get_state_ptr =
    reinterpret_cast<pa_context_state_t (*)(const_pa_context_ptr c)>(
      dlsym(module, pa_context_get_state_name));
  if (!pa_context_get_state_ptr)
    LogDlerror(pa_context_get_state_name);
  const char pa_context_new_name[] = "pa_context_new";
  pa_context_new_ptr =
    reinterpret_cast<pa_context* (*)(pa_mainloop_api* mainloop, const char* name)>(
      dlsym(module, pa_context_new_name));
  if (!pa_context_new_ptr)
    LogDlerror(pa_context_new_name);
  const char pa_context_set_source_volume_by_index_name[] = "pa_context_set_source_volume_by_index";
  pa_context_set_source_volume_by_index_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, uint32_t idx, const pa_cvolume* volume, pa_context_success_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_set_source_volume_by_index_name));
  if (!pa_context_set_source_volume_by_index_ptr)
    LogDlerror(pa_context_set_source_volume_by_index_name);
  const char pa_context_set_state_callback_name[] = "pa_context_set_state_callback";
  pa_context_set_state_callback_ptr =
    reinterpret_cast<void (*)(pa_context* c, pa_context_notify_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_set_state_callback_name));
  if (!pa_context_set_state_callback_ptr)
    LogDlerror(pa_context_set_state_callback_name);
  const char pa_operation_get_state_name[] = "pa_operation_get_state";
  pa_operation_get_state_ptr =
    reinterpret_cast<pa_operation_state_t (*)(const_pa_operation_ptr o)>(
      dlsym(module, pa_operation_get_state_name));
  if (!pa_operation_get_state_ptr)
    LogDlerror(pa_operation_get_state_name);
  const char pa_context_unref_name[] = "pa_context_unref";
  pa_context_unref_ptr =
    reinterpret_cast<void (*)(pa_context* c)>(
      dlsym(module, pa_context_unref_name));
  if (!pa_context_unref_ptr)
    LogDlerror(pa_context_unref_name);
  const char pa_operation_cancel_name[] = "pa_operation_cancel";
  pa_operation_cancel_ptr =
    reinterpret_cast<void (*)(pa_operation* o)>(
      dlsym(module, pa_operation_cancel_name));
  if (!pa_operation_cancel_ptr)
    LogDlerror(pa_operation_cancel_name);
  const char pa_operation_unref_name[] = "pa_operation_unref";
  pa_operation_unref_ptr =
    reinterpret_cast<void (*)(pa_operation* o)>(
      dlsym(module, pa_operation_unref_name));
  if (!pa_operation_unref_ptr)
    LogDlerror(pa_operation_unref_name);
  const char pa_stream_begin_write_name[] = "pa_stream_begin_write";
  pa_stream_begin_write_ptr =
    reinterpret_cast<int (*)(pa_stream* p, void** data, size_t* nbytes)>(
      dlsym(module, pa_stream_begin_write_name));
  if (!pa_stream_begin_write_ptr)
    LogDlerror(pa_stream_begin_write_name);
  const char pa_stream_connect_playback_name[] = "pa_stream_connect_playback";
  pa_stream_connect_playback_ptr =
    reinterpret_cast<int (*)(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags, const pa_cvolume* volume, pa_stream* sync_stream)>(
      dlsym(module, pa_stream_connect_playback_name));
  if (!pa_stream_connect_playback_ptr)
    LogDlerror(pa_stream_connect_playback_name);
  const char pa_stream_connect_record_name[] = "pa_stream_connect_record";
  pa_stream_connect_record_ptr =
    reinterpret_cast<int (*)(pa_stream* s, const char* dev, const pa_buffer_attr* attr, pa_stream_flags_t flags)>(
      dlsym(module, pa_stream_connect_record_name));
  if (!pa_stream_connect_record_ptr)
    LogDlerror(pa_stream_connect_record_name);
  const char pa_stream_cork_name[] = "pa_stream_cork";
  pa_stream_cork_ptr =
    reinterpret_cast<pa_operation* (*)(pa_stream* s, int b, pa_stream_success_cb_t cb, void* userdata)>(
      dlsym(module, pa_stream_cork_name));
  if (!pa_stream_cork_ptr)
    LogDlerror(pa_stream_cork_name);
  const char pa_stream_disconnect_name[] = "pa_stream_disconnect";
  pa_stream_disconnect_ptr =
    reinterpret_cast<int (*)(pa_stream* s)>(
      dlsym(module, pa_stream_disconnect_name));
  if (!pa_stream_disconnect_ptr)
    LogDlerror(pa_stream_disconnect_name);
  const char pa_stream_drop_name[] = "pa_stream_drop";
  pa_stream_drop_ptr =
    reinterpret_cast<int (*)(pa_stream *p)>(
      dlsym(module, pa_stream_drop_name));
  if (!pa_stream_drop_ptr)
    LogDlerror(pa_stream_drop_name);
  const char pa_stream_flush_name[] = "pa_stream_flush";
  pa_stream_flush_ptr =
    reinterpret_cast<pa_operation* (*)(pa_stream* s, pa_stream_success_cb_t cb, void* userdata)>(
      dlsym(module, pa_stream_flush_name));
  if (!pa_stream_flush_ptr)
    LogDlerror(pa_stream_flush_name);
  const char pa_stream_get_device_index_name[] = "pa_stream_get_device_index";
  pa_stream_get_device_index_ptr =
    reinterpret_cast<uint32_t (*)(const_pa_stream_ptr s)>(
      dlsym(module, pa_stream_get_device_index_name));
  if (!pa_stream_get_device_index_ptr)
    LogDlerror(pa_stream_get_device_index_name);
  const char pa_stream_get_latency_name[] = "pa_stream_get_latency";
  pa_stream_get_latency_ptr =
    reinterpret_cast<int (*)(pa_stream* s, pa_usec_t* r_usec, int* negative)>(
      dlsym(module, pa_stream_get_latency_name));
  if (!pa_stream_get_latency_ptr)
    LogDlerror(pa_stream_get_latency_name);
  const char pa_stream_get_state_name[] = "pa_stream_get_state";
  pa_stream_get_state_ptr =
    reinterpret_cast<pa_stream_state_t (*)(const_pa_stream_ptr p)>(
      dlsym(module, pa_stream_get_state_name));
  if (!pa_stream_get_state_ptr)
    LogDlerror(pa_stream_get_state_name);
  const char pa_stream_new_name[] = "pa_stream_new";
  pa_stream_new_ptr =
    reinterpret_cast<pa_stream* (*)(pa_context*  c, const char*  name, const pa_sample_spec*  ss, const pa_channel_map *  map)>(
      dlsym(module, pa_stream_new_name));
  if (!pa_stream_new_ptr)
    LogDlerror(pa_stream_new_name);
  const char pa_stream_new_with_proplist_name[] = "pa_stream_new_with_proplist";
  pa_stream_new_with_proplist_ptr =
    reinterpret_cast<pa_stream* (*)(pa_context* c, const char* name, const pa_sample_spec* ss, const pa_channel_map* map, pa_proplist* p)>(
      dlsym(module, pa_stream_new_with_proplist_name));
  if (!pa_stream_new_with_proplist_ptr)
    LogDlerror(pa_stream_new_with_proplist_name);
  const char pa_proplist_new_name[] = "pa_proplist_new";
  pa_proplist_new_ptr =
    reinterpret_cast<pa_proplist* (*)(void)>(
      dlsym(module, pa_proplist_new_name));
  if (!pa_proplist_new_ptr)
    LogDlerror(pa_proplist_new_name);
  const char pa_proplist_contains_name[] = "pa_proplist_contains";
  pa_proplist_contains_ptr =
    reinterpret_cast<int (*)(const_pa_proplist_ptr p, const char* key)>(
      dlsym(module, pa_proplist_contains_name));
  if (!pa_proplist_contains_ptr)
    LogDlerror(pa_proplist_contains_name);
  const char pa_proplist_free_name[] = "pa_proplist_free";
  pa_proplist_free_ptr =
    reinterpret_cast<void (*)(pa_proplist* p)>(
      dlsym(module, pa_proplist_free_name));
  if (!pa_proplist_free_ptr)
    LogDlerror(pa_proplist_free_name);
  const char pa_proplist_gets_name[] = "pa_proplist_gets";
  pa_proplist_gets_ptr =
    reinterpret_cast<const char* (*)(const_pa_proplist_ptr p, const char* key)>(
      dlsym(module, pa_proplist_gets_name));
  if (!pa_proplist_gets_ptr)
    LogDlerror(pa_proplist_gets_name);
  const char pa_proplist_sets_name[] = "pa_proplist_sets";
  pa_proplist_sets_ptr =
    reinterpret_cast<int (*)(pa_proplist* p, const char* key, const char* value)>(
      dlsym(module, pa_proplist_sets_name));
  if (!pa_proplist_sets_ptr)
    LogDlerror(pa_proplist_sets_name);
  const char pa_stream_readable_size_name[] = "pa_stream_readable_size";
  pa_stream_readable_size_ptr =
    reinterpret_cast<size_t (*)(const_pa_stream_ptr p)>(
      dlsym(module, pa_stream_readable_size_name));
  if (!pa_stream_readable_size_ptr)
    LogDlerror(pa_stream_readable_size_name);
  const char pa_stream_peek_name[] = "pa_stream_peek";
  pa_stream_peek_ptr =
    reinterpret_cast<int (*)(pa_stream* p, const void** data, size_t* nbytes)>(
      dlsym(module, pa_stream_peek_name));
  if (!pa_stream_peek_ptr)
    LogDlerror(pa_stream_peek_name);
  const char pa_stream_set_read_callback_name[] = "pa_stream_set_read_callback";
  pa_stream_set_read_callback_ptr =
    reinterpret_cast<void (*)(pa_stream* p, pa_stream_request_cb_t cb, void* userdata)>(
      dlsym(module, pa_stream_set_read_callback_name));
  if (!pa_stream_set_read_callback_ptr)
    LogDlerror(pa_stream_set_read_callback_name);
  const char pa_stream_set_state_callback_name[] = "pa_stream_set_state_callback";
  pa_stream_set_state_callback_ptr =
    reinterpret_cast<void (*)(pa_stream* s, pa_stream_notify_cb_t cb, void* userdata)>(
      dlsym(module, pa_stream_set_state_callback_name));
  if (!pa_stream_set_state_callback_ptr)
    LogDlerror(pa_stream_set_state_callback_name);
  const char pa_stream_write_name[] = "pa_stream_write";
  pa_stream_write_ptr =
    reinterpret_cast<int (*)(pa_stream* p, const void* data, size_t nbytes, pa_free_cb_t free_cb, int64_t offset, pa_seek_mode_t seek)>(
      dlsym(module, pa_stream_write_name));
  if (!pa_stream_write_ptr)
    LogDlerror(pa_stream_write_name);
  const char pa_stream_set_write_callback_name[] = "pa_stream_set_write_callback";
  pa_stream_set_write_callback_ptr =
    reinterpret_cast<void (*)(pa_stream *p, pa_stream_request_cb_t cb, void *userdata)>(
      dlsym(module, pa_stream_set_write_callback_name));
  if (!pa_stream_set_write_callback_ptr)
    LogDlerror(pa_stream_set_write_callback_name);
  const char pa_stream_unref_name[] = "pa_stream_unref";
  pa_stream_unref_ptr =
    reinterpret_cast<void (*)(pa_stream* s)>(
      dlsym(module, pa_stream_unref_name));
  if (!pa_stream_unref_ptr)
    LogDlerror(pa_stream_unref_name);
  const char pa_context_errno_name[] = "pa_context_errno";
  pa_context_errno_ptr =
    reinterpret_cast<int (*)(const_pa_context_ptr c)>(
      dlsym(module, pa_context_errno_name));
  if (!pa_context_errno_ptr)
    LogDlerror(pa_context_errno_name);
  const char pa_strerror_name[] = "pa_strerror";
  pa_strerror_ptr =
    reinterpret_cast<const char* (*)(int error)>(
      dlsym(module, pa_strerror_name));
  if (!pa_strerror_ptr)
    LogDlerror(pa_strerror_name);
  const char pa_cvolume_set_name[] = "pa_cvolume_set";
  pa_cvolume_set_ptr =
    reinterpret_cast<pa_cvolume* (*)(pa_cvolume* a, unsigned  channels, pa_volume_t v)>(
      dlsym(module, pa_cvolume_set_name));
  if (!pa_cvolume_set_ptr)
    LogDlerror(pa_cvolume_set_name);
  const char pa_context_set_subscribe_callback_name[] = "pa_context_set_subscribe_callback";
  pa_context_set_subscribe_callback_ptr =
    reinterpret_cast<void (*)(pa_context* c, pa_context_subscribe_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_set_subscribe_callback_name));
  if (!pa_context_set_subscribe_callback_ptr)
    LogDlerror(pa_context_set_subscribe_callback_name);
  const char pa_context_subscribe_name[] = "pa_context_subscribe";
  pa_context_subscribe_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context* c, pa_subscription_mask_t m, pa_context_success_cb_t cb, void* userdata)>(
      dlsym(module, pa_context_subscribe_name));
  if (!pa_context_subscribe_ptr)
    LogDlerror(pa_context_subscribe_name);
  const char pa_context_set_sink_mute_by_index_name[] = "pa_context_set_sink_mute_by_index";
  pa_context_set_sink_mute_by_index_ptr =
    reinterpret_cast<pa_operation* (*)(pa_context * c, uint32_t idx, int mute, pa_context_success_cb_t cb, void * userdata)>(
      dlsym(module, pa_context_set_sink_mute_by_index_name));
  if (!pa_context_set_sink_mute_by_index_ptr)
    LogDlerror(pa_context_set_sink_mute_by_index_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializePulse() {
  pa_threaded_mainloop_get_api_ptr = nullptr;
  pa_threaded_mainloop_free_ptr = nullptr;
  pa_threaded_mainloop_new_ptr = nullptr;
  pa_threaded_mainloop_lock_ptr = nullptr;
  pa_threaded_mainloop_in_thread_ptr = nullptr;
  pa_threaded_mainloop_signal_ptr = nullptr;
  pa_threaded_mainloop_start_ptr = nullptr;
  pa_threaded_mainloop_stop_ptr = nullptr;
  pa_threaded_mainloop_unlock_ptr = nullptr;
  pa_threaded_mainloop_wait_ptr = nullptr;
  pa_channel_map_init_ptr = nullptr;
  pa_channel_map_init_mono_ptr = nullptr;
  pa_context_connect_ptr = nullptr;
  pa_context_disconnect_ptr = nullptr;
  pa_context_get_server_info_ptr = nullptr;
  pa_context_get_source_info_by_index_ptr = nullptr;
  pa_context_get_source_info_by_name_ptr = nullptr;
  pa_context_get_source_info_list_ptr = nullptr;
  pa_context_get_sink_info_list_ptr = nullptr;
  pa_context_get_sink_info_by_name_ptr = nullptr;
  pa_context_get_state_ptr = nullptr;
  pa_context_new_ptr = nullptr;
  pa_context_set_source_volume_by_index_ptr = nullptr;
  pa_context_set_state_callback_ptr = nullptr;
  pa_operation_get_state_ptr = nullptr;
  pa_context_unref_ptr = nullptr;
  pa_operation_cancel_ptr = nullptr;
  pa_operation_unref_ptr = nullptr;
  pa_stream_begin_write_ptr = nullptr;
  pa_stream_connect_playback_ptr = nullptr;
  pa_stream_connect_record_ptr = nullptr;
  pa_stream_cork_ptr = nullptr;
  pa_stream_disconnect_ptr = nullptr;
  pa_stream_drop_ptr = nullptr;
  pa_stream_flush_ptr = nullptr;
  pa_stream_get_device_index_ptr = nullptr;
  pa_stream_get_latency_ptr = nullptr;
  pa_stream_get_state_ptr = nullptr;
  pa_stream_new_ptr = nullptr;
  pa_stream_new_with_proplist_ptr = nullptr;
  pa_proplist_new_ptr = nullptr;
  pa_proplist_contains_ptr = nullptr;
  pa_proplist_free_ptr = nullptr;
  pa_proplist_gets_ptr = nullptr;
  pa_proplist_sets_ptr = nullptr;
  pa_stream_readable_size_ptr = nullptr;
  pa_stream_peek_ptr = nullptr;
  pa_stream_set_read_callback_ptr = nullptr;
  pa_stream_set_state_callback_ptr = nullptr;
  pa_stream_write_ptr = nullptr;
  pa_stream_set_write_callback_ptr = nullptr;
  pa_stream_unref_ptr = nullptr;
  pa_context_errno_ptr = nullptr;
  pa_strerror_ptr = nullptr;
  pa_cvolume_set_ptr = nullptr;
  pa_context_set_subscribe_callback_ptr = nullptr;
  pa_context_subscribe_ptr = nullptr;
  pa_context_set_sink_mute_by_index_ptr = nullptr;
}

}  // namespace media_audio_pulse

namespace media_audio_pulse {
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
  InitializePulse(opened_libraries[kModulePulse]);

  // Check that each module is initialized correctly.
  // Close all previously opened libraries on failure.
  if (!IsPulseInitialized()) {
    UninitializePulse();
    CloseLibraries(&opened_libraries);
    return false;
  }

  return true;
}

}  // namespace media_audio_pulse
