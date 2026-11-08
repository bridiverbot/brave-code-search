// This is generated file. Do not modify directly.

#include "ui/gtk/gtk_stubs.h"

#include <dlfcn.h>   // For dlsym, dlopen, RTLD_LAZY.

#include <cstdarg>

#include "base/compiler_specific.h"
#include "ui/gtk/log_noop.h"

#include "ui/gtk/gtk_compat.h"

namespace  {

void LogDlerror(const char* symbol) {
  LogNoop() << "Couldn't load " << symbol << ", dlerror() says:\n" << dlerror();
}

}  // namespace 

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static GdkPixbuf* (*gdk_pixbuf_new_ptr)(GdkColorspace colorspace, gboolean has_alpha, int bits_per_sample, int width, int height) = nullptr;
static guchar* (*gdk_pixbuf_get_pixels_ptr)(const GdkPixbuf* pixbuf) = nullptr;
static int (*gdk_pixbuf_get_rowstride_ptr)(const GdkPixbuf* pixbuf) = nullptr;
static int (*gdk_pixbuf_get_width_ptr)(const GdkPixbuf* pixbuf) = nullptr;
static int (*gdk_pixbuf_get_height_ptr)(const GdkPixbuf* pixbuf) = nullptr;

// Stubs that dispatch to the real implementations.
extern GdkPixbuf* gdk_pixbuf_new(GdkColorspace colorspace, gboolean has_alpha, int bits_per_sample, int width, int height) __attribute__((weak));
DISABLE_CFI_ICALL
GdkPixbuf*  gdk_pixbuf_new(GdkColorspace colorspace, gboolean has_alpha, int bits_per_sample, int width, int height) {
  return gdk_pixbuf_new_ptr(colorspace, has_alpha, bits_per_sample, width, height);
}
extern guchar* gdk_pixbuf_get_pixels(const GdkPixbuf* pixbuf) __attribute__((weak));
DISABLE_CFI_ICALL
guchar*  gdk_pixbuf_get_pixels(const GdkPixbuf* pixbuf) {
  return gdk_pixbuf_get_pixels_ptr(pixbuf);
}
extern int gdk_pixbuf_get_rowstride(const GdkPixbuf* pixbuf) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_pixbuf_get_rowstride(const GdkPixbuf* pixbuf) {
  return gdk_pixbuf_get_rowstride_ptr(pixbuf);
}
extern int gdk_pixbuf_get_width(const GdkPixbuf* pixbuf) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_pixbuf_get_width(const GdkPixbuf* pixbuf) {
  return gdk_pixbuf_get_width_ptr(pixbuf);
}
extern int gdk_pixbuf_get_height(const GdkPixbuf* pixbuf) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_pixbuf_get_height(const GdkPixbuf* pixbuf) {
  return gdk_pixbuf_get_height_ptr(pixbuf);
}

}  // extern "C"


namespace ui_gtk {

// Returns true if all stubs have been properly initialized.
bool IsGdk_pixbufInitialized() {
  return gdk_pixbuf_new_ptr &&
         gdk_pixbuf_get_pixels_ptr &&
         gdk_pixbuf_get_rowstride_ptr &&
         gdk_pixbuf_get_width_ptr &&
         gdk_pixbuf_get_height_ptr;
}

// Initializes the module stubs.
void InitializeGdk_pixbuf(void* module) {
  const char gdk_pixbuf_new_name[] = "gdk_pixbuf_new";
  gdk_pixbuf_new_ptr =
    reinterpret_cast<GdkPixbuf* (*)(GdkColorspace colorspace, gboolean has_alpha, int bits_per_sample, int width, int height)>(
      dlsym(module, gdk_pixbuf_new_name));
  if (!gdk_pixbuf_new_ptr)
    LogDlerror(gdk_pixbuf_new_name);
  const char gdk_pixbuf_get_pixels_name[] = "gdk_pixbuf_get_pixels";
  gdk_pixbuf_get_pixels_ptr =
    reinterpret_cast<guchar* (*)(const GdkPixbuf* pixbuf)>(
      dlsym(module, gdk_pixbuf_get_pixels_name));
  if (!gdk_pixbuf_get_pixels_ptr)
    LogDlerror(gdk_pixbuf_get_pixels_name);
  const char gdk_pixbuf_get_rowstride_name[] = "gdk_pixbuf_get_rowstride";
  gdk_pixbuf_get_rowstride_ptr =
    reinterpret_cast<int (*)(const GdkPixbuf* pixbuf)>(
      dlsym(module, gdk_pixbuf_get_rowstride_name));
  if (!gdk_pixbuf_get_rowstride_ptr)
    LogDlerror(gdk_pixbuf_get_rowstride_name);
  const char gdk_pixbuf_get_width_name[] = "gdk_pixbuf_get_width";
  gdk_pixbuf_get_width_ptr =
    reinterpret_cast<int (*)(const GdkPixbuf* pixbuf)>(
      dlsym(module, gdk_pixbuf_get_width_name));
  if (!gdk_pixbuf_get_width_ptr)
    LogDlerror(gdk_pixbuf_get_width_name);
  const char gdk_pixbuf_get_height_name[] = "gdk_pixbuf_get_height";
  gdk_pixbuf_get_height_ptr =
    reinterpret_cast<int (*)(const GdkPixbuf* pixbuf)>(
      dlsym(module, gdk_pixbuf_get_height_name));
  if (!gdk_pixbuf_get_height_ptr)
    LogDlerror(gdk_pixbuf_get_height_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeGdk_pixbuf() {
  gdk_pixbuf_new_ptr = nullptr;
  gdk_pixbuf_get_pixels_ptr = nullptr;
  gdk_pixbuf_get_rowstride_ptr = nullptr;
  gdk_pixbuf_get_width_ptr = nullptr;
  gdk_pixbuf_get_height_ptr = nullptr;
}

}  // namespace ui_gtk

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static GdkDisplay* (*gdk_display_get_default_ptr)(void) = nullptr;
static gboolean (*gdk_keymap_translate_keyboard_state_ptr)(GdkKeymap* keymap, guint hardware_keycode, GdkModifierType state, gint group, guint* keyval, gint* effective_group, gint* level, GdkModifierType* consumed_modifiers) = nullptr;
static void (*gdk_keymap_add_virtual_modifiers_ptr)(GdkKeymap* keymap, GdkModifierType* state) = nullptr;
static GdkEvent* (*gdk_event_new_ptr)(GdkEventType type) = nullptr;
static void (*gdk_event_free_ptr)(GdkEvent* event) = nullptr;
static gboolean (*gdk_keymap_get_entries_for_keycode_ptr)(GdkKeymap* keymap, guint hardware_keycode, GdkKeymapKey** keys, guint** keyvals, gint* n_entries) = nullptr;
static GdkKeymap* (*gdk_keymap_get_for_display_ptr)(GdkDisplay* display) = nullptr;
static int (*gdk_texture_get_width_ptr)(GdkTexture* texture) = nullptr;
static int (*gdk_texture_get_height_ptr)(GdkTexture* texture) = nullptr;
static void (*gdk_texture_download_ptr)(GdkTexture* texture, guchar* data, gsize stride) = nullptr;
static gboolean (*gdk_display_map_keycode_ptr)(GdkDisplay* display, guint keycode, GdkKeymapKey** keys, guint** keyvals, int* n_entries) = nullptr;
static void (*gdk_paintable_snapshot_ptr)(GdkPaintable* paintable, GdkSnapshot* snapshot, double width, double height) = nullptr;
static GType (*gdk_paintable_get_type_ptr)(void) = nullptr;
static GdkSeat* (*gdk_display_get_default_seat_ptr)(GdkDisplay* display) = nullptr;
static GdkDevice* (*gdk_seat_get_keyboard_ptr)(GdkSeat* seat) = nullptr;
static GdkTexture* (*gdk_memory_texture_new_ptr)(int width, int height, GdkMemoryFormat format, GBytes* bytes, gsize stride) = nullptr;
static int (*gdk_paintable_get_intrinsic_width_ptr)(GdkPaintable* paintable) = nullptr;
static int (*gdk_paintable_get_intrinsic_height_ptr)(GdkPaintable* paintable) = nullptr;
static GdkScreen* (*gdk_screen_get_default_ptr)(void) = nullptr;
static void (*gdk_color_free_ptr)(GdkColor* color) = nullptr;
static gboolean (*gdk_wayland_window_set_transient_for_exported_ptr)(GdkWindow* window, char* parent_handle_str) = nullptr;
static gboolean (*gdk_wayland_toplevel_set_transient_for_exported_ptr)(GdkToplevel* toplevel, const char* parent_handle_str) = nullptr;
static unsigned long (*gdk_x11_surface_get_xid_ptr)(GdkSurface* surface) = nullptr;
static unsigned long (*gdk_x11_window_get_xid_ptr)(GdkWindow* window) = nullptr;
static void (*gdk_event_handler_set_ptr)(GdkEventFunc func, gpointer data, GDestroyNotify notify) = nullptr;
static GdkWindow* (*gdk_x11_window_foreign_new_for_display_ptr)(GdkDisplay* display, unsigned long window) = nullptr;
static GdkWindow* (*gdk_x11_window_lookup_for_display_ptr)(GdkDisplay* display, unsigned long window) = nullptr;
static guint (*gdk_key_event_get_keycode_ptr)(GdkEvent* event) = nullptr;
static guint (*gdk_key_event_get_keyval_ptr)(GdkEvent* event) = nullptr;
static GdkSurface* (*gdk_event_get_surface_ptr)(GdkEvent* event) = nullptr;
static GdkModifierType (*gdk_event_get_modifier_state_ptr)(GdkEvent *event) = nullptr;
static GType (*gdk_toplevel_get_type_ptr)(void) = nullptr;
static void (*gdk_set_allowed_backends_ptr)(const gchar* backends) = nullptr;
static guint32 (*gdk_keyval_to_unicode_ptr)(guint keyval) = nullptr;
static gdouble (*gdk_screen_get_resolution_ptr)(GdkScreen *screen) = nullptr;
static guint (*gdk_unicode_to_keyval_ptr)(guint32 wc) = nullptr;
static int (*gdk_display_get_n_monitors_ptr)(GdkDisplay *display) = nullptr;
static GdkMonitor* (*gdk_display_get_monitor_ptr)(GdkDisplay *display, int monitor_num) = nullptr;
static void (*gdk_monitor_get_geometry_ptr)(GdkMonitor *monitor, GdkRectangle *geometry) = nullptr;
static int (*gdk_monitor_get_scale_factor_ptr)(GdkMonitor *monitor) = nullptr;
static GdkMonitor* (*gdk_display_get_primary_monitor_ptr)(GdkDisplay *display) = nullptr;
static GListModel* (*gdk_display_get_monitors_ptr)(GdkDisplay *self) = nullptr;

// Stubs that dispatch to the real implementations.
extern GdkDisplay* gdk_display_get_default(void) __attribute__((weak));
DISABLE_CFI_ICALL
GdkDisplay*  gdk_display_get_default(void) {
  return gdk_display_get_default_ptr();
}
extern gboolean gdk_keymap_translate_keyboard_state(GdkKeymap* keymap, guint hardware_keycode, GdkModifierType state, gint group, guint* keyval, gint* effective_group, gint* level, GdkModifierType* consumed_modifiers) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gdk_keymap_translate_keyboard_state(GdkKeymap* keymap, guint hardware_keycode, GdkModifierType state, gint group, guint* keyval, gint* effective_group, gint* level, GdkModifierType* consumed_modifiers) {
  return gdk_keymap_translate_keyboard_state_ptr(keymap, hardware_keycode, state, group, keyval, effective_group, level, consumed_modifiers);
}
extern void gdk_keymap_add_virtual_modifiers(GdkKeymap* keymap, GdkModifierType* state) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_keymap_add_virtual_modifiers(GdkKeymap* keymap, GdkModifierType* state) {
  gdk_keymap_add_virtual_modifiers_ptr(keymap, state);
}
extern GdkEvent* gdk_event_new(GdkEventType type) __attribute__((weak));
DISABLE_CFI_ICALL
GdkEvent*  gdk_event_new(GdkEventType type) {
  return gdk_event_new_ptr(type);
}
extern void gdk_event_free(GdkEvent* event) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_event_free(GdkEvent* event) {
  gdk_event_free_ptr(event);
}
extern gboolean gdk_keymap_get_entries_for_keycode(GdkKeymap* keymap, guint hardware_keycode, GdkKeymapKey** keys, guint** keyvals, gint* n_entries) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gdk_keymap_get_entries_for_keycode(GdkKeymap* keymap, guint hardware_keycode, GdkKeymapKey** keys, guint** keyvals, gint* n_entries) {
  return gdk_keymap_get_entries_for_keycode_ptr(keymap, hardware_keycode, keys, keyvals, n_entries);
}
extern GdkKeymap* gdk_keymap_get_for_display(GdkDisplay* display) __attribute__((weak));
DISABLE_CFI_ICALL
GdkKeymap*  gdk_keymap_get_for_display(GdkDisplay* display) {
  return gdk_keymap_get_for_display_ptr(display);
}
extern int gdk_texture_get_width(GdkTexture* texture) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_texture_get_width(GdkTexture* texture) {
  return gdk_texture_get_width_ptr(texture);
}
extern int gdk_texture_get_height(GdkTexture* texture) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_texture_get_height(GdkTexture* texture) {
  return gdk_texture_get_height_ptr(texture);
}
extern void gdk_texture_download(GdkTexture* texture, guchar* data, gsize stride) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_texture_download(GdkTexture* texture, guchar* data, gsize stride) {
  gdk_texture_download_ptr(texture, data, stride);
}
extern gboolean gdk_display_map_keycode(GdkDisplay* display, guint keycode, GdkKeymapKey** keys, guint** keyvals, int* n_entries) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gdk_display_map_keycode(GdkDisplay* display, guint keycode, GdkKeymapKey** keys, guint** keyvals, int* n_entries) {
  return gdk_display_map_keycode_ptr(display, keycode, keys, keyvals, n_entries);
}
extern void gdk_paintable_snapshot(GdkPaintable* paintable, GdkSnapshot* snapshot, double width, double height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_paintable_snapshot(GdkPaintable* paintable, GdkSnapshot* snapshot, double width, double height) {
  gdk_paintable_snapshot_ptr(paintable, snapshot, width, height);
}
extern GType gdk_paintable_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gdk_paintable_get_type(void) {
  return gdk_paintable_get_type_ptr();
}
extern GdkSeat* gdk_display_get_default_seat(GdkDisplay* display) __attribute__((weak));
DISABLE_CFI_ICALL
GdkSeat*  gdk_display_get_default_seat(GdkDisplay* display) {
  return gdk_display_get_default_seat_ptr(display);
}
extern GdkDevice* gdk_seat_get_keyboard(GdkSeat* seat) __attribute__((weak));
DISABLE_CFI_ICALL
GdkDevice*  gdk_seat_get_keyboard(GdkSeat* seat) {
  return gdk_seat_get_keyboard_ptr(seat);
}
extern GdkTexture* gdk_memory_texture_new(int width, int height, GdkMemoryFormat format, GBytes* bytes, gsize stride) __attribute__((weak));
DISABLE_CFI_ICALL
GdkTexture*  gdk_memory_texture_new(int width, int height, GdkMemoryFormat format, GBytes* bytes, gsize stride) {
  return gdk_memory_texture_new_ptr(width, height, format, bytes, stride);
}
extern int gdk_paintable_get_intrinsic_width(GdkPaintable* paintable) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_paintable_get_intrinsic_width(GdkPaintable* paintable) {
  return gdk_paintable_get_intrinsic_width_ptr(paintable);
}
extern int gdk_paintable_get_intrinsic_height(GdkPaintable* paintable) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_paintable_get_intrinsic_height(GdkPaintable* paintable) {
  return gdk_paintable_get_intrinsic_height_ptr(paintable);
}
extern GdkScreen* gdk_screen_get_default(void) __attribute__((weak));
DISABLE_CFI_ICALL
GdkScreen*  gdk_screen_get_default(void) {
  return gdk_screen_get_default_ptr();
}
extern void gdk_color_free(GdkColor* color) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_color_free(GdkColor* color) {
  gdk_color_free_ptr(color);
}
extern gboolean gdk_wayland_window_set_transient_for_exported(GdkWindow* window, char* parent_handle_str) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gdk_wayland_window_set_transient_for_exported(GdkWindow* window, char* parent_handle_str) {
  return gdk_wayland_window_set_transient_for_exported_ptr(window, parent_handle_str);
}
extern gboolean gdk_wayland_toplevel_set_transient_for_exported(GdkToplevel* toplevel, const char* parent_handle_str) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gdk_wayland_toplevel_set_transient_for_exported(GdkToplevel* toplevel, const char* parent_handle_str) {
  return gdk_wayland_toplevel_set_transient_for_exported_ptr(toplevel, parent_handle_str);
}
extern unsigned long gdk_x11_surface_get_xid(GdkSurface* surface) __attribute__((weak));
DISABLE_CFI_ICALL
unsigned long  gdk_x11_surface_get_xid(GdkSurface* surface) {
  return gdk_x11_surface_get_xid_ptr(surface);
}
extern unsigned long gdk_x11_window_get_xid(GdkWindow* window) __attribute__((weak));
DISABLE_CFI_ICALL
unsigned long  gdk_x11_window_get_xid(GdkWindow* window) {
  return gdk_x11_window_get_xid_ptr(window);
}
extern void gdk_event_handler_set(GdkEventFunc func, gpointer data, GDestroyNotify notify) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_event_handler_set(GdkEventFunc func, gpointer data, GDestroyNotify notify) {
  gdk_event_handler_set_ptr(func, data, notify);
}
extern GdkWindow* gdk_x11_window_foreign_new_for_display(GdkDisplay* display, unsigned long window) __attribute__((weak));
DISABLE_CFI_ICALL
GdkWindow*  gdk_x11_window_foreign_new_for_display(GdkDisplay* display, unsigned long window) {
  return gdk_x11_window_foreign_new_for_display_ptr(display, window);
}
extern GdkWindow* gdk_x11_window_lookup_for_display(GdkDisplay* display, unsigned long window) __attribute__((weak));
DISABLE_CFI_ICALL
GdkWindow*  gdk_x11_window_lookup_for_display(GdkDisplay* display, unsigned long window) {
  return gdk_x11_window_lookup_for_display_ptr(display, window);
}
extern guint gdk_key_event_get_keycode(GdkEvent* event) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gdk_key_event_get_keycode(GdkEvent* event) {
  return gdk_key_event_get_keycode_ptr(event);
}
extern guint gdk_key_event_get_keyval(GdkEvent* event) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gdk_key_event_get_keyval(GdkEvent* event) {
  return gdk_key_event_get_keyval_ptr(event);
}
extern GdkSurface* gdk_event_get_surface(GdkEvent* event) __attribute__((weak));
DISABLE_CFI_ICALL
GdkSurface*  gdk_event_get_surface(GdkEvent* event) {
  return gdk_event_get_surface_ptr(event);
}
extern GdkModifierType gdk_event_get_modifier_state(GdkEvent *event) __attribute__((weak));
DISABLE_CFI_ICALL
GdkModifierType  gdk_event_get_modifier_state(GdkEvent *event) {
  return gdk_event_get_modifier_state_ptr(event);
}
extern GType gdk_toplevel_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gdk_toplevel_get_type(void) {
  return gdk_toplevel_get_type_ptr();
}
extern void gdk_set_allowed_backends(const gchar* backends) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_set_allowed_backends(const gchar* backends) {
  gdk_set_allowed_backends_ptr(backends);
}
extern guint32 gdk_keyval_to_unicode(guint keyval) __attribute__((weak));
DISABLE_CFI_ICALL
guint32  gdk_keyval_to_unicode(guint keyval) {
  return gdk_keyval_to_unicode_ptr(keyval);
}
extern gdouble gdk_screen_get_resolution(GdkScreen *screen) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gdk_screen_get_resolution(GdkScreen *screen) {
  return gdk_screen_get_resolution_ptr(screen);
}
extern guint gdk_unicode_to_keyval(guint32 wc) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gdk_unicode_to_keyval(guint32 wc) {
  return gdk_unicode_to_keyval_ptr(wc);
}
extern int gdk_display_get_n_monitors(GdkDisplay *display) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_display_get_n_monitors(GdkDisplay *display) {
  return gdk_display_get_n_monitors_ptr(display);
}
extern GdkMonitor* gdk_display_get_monitor(GdkDisplay *display, int monitor_num) __attribute__((weak));
DISABLE_CFI_ICALL
GdkMonitor*  gdk_display_get_monitor(GdkDisplay *display, int monitor_num) {
  return gdk_display_get_monitor_ptr(display, monitor_num);
}
extern void gdk_monitor_get_geometry(GdkMonitor *monitor, GdkRectangle *geometry) __attribute__((weak));
DISABLE_CFI_ICALL
void  gdk_monitor_get_geometry(GdkMonitor *monitor, GdkRectangle *geometry) {
  gdk_monitor_get_geometry_ptr(monitor, geometry);
}
extern int gdk_monitor_get_scale_factor(GdkMonitor *monitor) __attribute__((weak));
DISABLE_CFI_ICALL
int  gdk_monitor_get_scale_factor(GdkMonitor *monitor) {
  return gdk_monitor_get_scale_factor_ptr(monitor);
}
extern GdkMonitor* gdk_display_get_primary_monitor(GdkDisplay *display) __attribute__((weak));
DISABLE_CFI_ICALL
GdkMonitor*  gdk_display_get_primary_monitor(GdkDisplay *display) {
  return gdk_display_get_primary_monitor_ptr(display);
}
extern GListModel* gdk_display_get_monitors(GdkDisplay *self) __attribute__((weak));
DISABLE_CFI_ICALL
GListModel*  gdk_display_get_monitors(GdkDisplay *self) {
  return gdk_display_get_monitors_ptr(self);
}

}  // extern "C"


namespace ui_gtk {

// Returns true if all stubs have been properly initialized.
bool IsGdkInitialized() {
  return gdk_display_get_default_ptr &&
         gdk_keymap_translate_keyboard_state_ptr &&
         gdk_keymap_add_virtual_modifiers_ptr &&
         gdk_event_new_ptr &&
         gdk_event_free_ptr &&
         gdk_keymap_get_entries_for_keycode_ptr &&
         gdk_keymap_get_for_display_ptr &&
         gdk_texture_get_width_ptr &&
         gdk_texture_get_height_ptr &&
         gdk_texture_download_ptr &&
         gdk_display_map_keycode_ptr &&
         gdk_paintable_snapshot_ptr &&
         gdk_paintable_get_type_ptr &&
         gdk_display_get_default_seat_ptr &&
         gdk_seat_get_keyboard_ptr &&
         gdk_memory_texture_new_ptr &&
         gdk_paintable_get_intrinsic_width_ptr &&
         gdk_paintable_get_intrinsic_height_ptr &&
         gdk_screen_get_default_ptr &&
         gdk_color_free_ptr &&
         gdk_wayland_window_set_transient_for_exported_ptr &&
         gdk_wayland_toplevel_set_transient_for_exported_ptr &&
         gdk_x11_surface_get_xid_ptr &&
         gdk_x11_window_get_xid_ptr &&
         gdk_event_handler_set_ptr &&
         gdk_x11_window_foreign_new_for_display_ptr &&
         gdk_x11_window_lookup_for_display_ptr &&
         gdk_key_event_get_keycode_ptr &&
         gdk_key_event_get_keyval_ptr &&
         gdk_event_get_surface_ptr &&
         gdk_event_get_modifier_state_ptr &&
         gdk_toplevel_get_type_ptr &&
         gdk_set_allowed_backends_ptr &&
         gdk_keyval_to_unicode_ptr &&
         gdk_screen_get_resolution_ptr &&
         gdk_unicode_to_keyval_ptr &&
         gdk_display_get_n_monitors_ptr &&
         gdk_display_get_monitor_ptr &&
         gdk_monitor_get_geometry_ptr &&
         gdk_monitor_get_scale_factor_ptr &&
         gdk_display_get_primary_monitor_ptr &&
         gdk_display_get_monitors_ptr;
}

// Initializes the module stubs.
void InitializeGdk(void* module) {
  const char gdk_display_get_default_name[] = "gdk_display_get_default";
  gdk_display_get_default_ptr =
    reinterpret_cast<GdkDisplay* (*)(void)>(
      dlsym(module, gdk_display_get_default_name));
  if (!gdk_display_get_default_ptr)
    LogDlerror(gdk_display_get_default_name);
  const char gdk_keymap_translate_keyboard_state_name[] = "gdk_keymap_translate_keyboard_state";
  gdk_keymap_translate_keyboard_state_ptr =
    reinterpret_cast<gboolean (*)(GdkKeymap* keymap, guint hardware_keycode, GdkModifierType state, gint group, guint* keyval, gint* effective_group, gint* level, GdkModifierType* consumed_modifiers)>(
      dlsym(module, gdk_keymap_translate_keyboard_state_name));
  if (!gdk_keymap_translate_keyboard_state_ptr)
    LogDlerror(gdk_keymap_translate_keyboard_state_name);
  const char gdk_keymap_add_virtual_modifiers_name[] = "gdk_keymap_add_virtual_modifiers";
  gdk_keymap_add_virtual_modifiers_ptr =
    reinterpret_cast<void (*)(GdkKeymap* keymap, GdkModifierType* state)>(
      dlsym(module, gdk_keymap_add_virtual_modifiers_name));
  if (!gdk_keymap_add_virtual_modifiers_ptr)
    LogDlerror(gdk_keymap_add_virtual_modifiers_name);
  const char gdk_event_new_name[] = "gdk_event_new";
  gdk_event_new_ptr =
    reinterpret_cast<GdkEvent* (*)(GdkEventType type)>(
      dlsym(module, gdk_event_new_name));
  if (!gdk_event_new_ptr)
    LogDlerror(gdk_event_new_name);
  const char gdk_event_free_name[] = "gdk_event_free";
  gdk_event_free_ptr =
    reinterpret_cast<void (*)(GdkEvent* event)>(
      dlsym(module, gdk_event_free_name));
  if (!gdk_event_free_ptr)
    LogDlerror(gdk_event_free_name);
  const char gdk_keymap_get_entries_for_keycode_name[] = "gdk_keymap_get_entries_for_keycode";
  gdk_keymap_get_entries_for_keycode_ptr =
    reinterpret_cast<gboolean (*)(GdkKeymap* keymap, guint hardware_keycode, GdkKeymapKey** keys, guint** keyvals, gint* n_entries)>(
      dlsym(module, gdk_keymap_get_entries_for_keycode_name));
  if (!gdk_keymap_get_entries_for_keycode_ptr)
    LogDlerror(gdk_keymap_get_entries_for_keycode_name);
  const char gdk_keymap_get_for_display_name[] = "gdk_keymap_get_for_display";
  gdk_keymap_get_for_display_ptr =
    reinterpret_cast<GdkKeymap* (*)(GdkDisplay* display)>(
      dlsym(module, gdk_keymap_get_for_display_name));
  if (!gdk_keymap_get_for_display_ptr)
    LogDlerror(gdk_keymap_get_for_display_name);
  const char gdk_texture_get_width_name[] = "gdk_texture_get_width";
  gdk_texture_get_width_ptr =
    reinterpret_cast<int (*)(GdkTexture* texture)>(
      dlsym(module, gdk_texture_get_width_name));
  if (!gdk_texture_get_width_ptr)
    LogDlerror(gdk_texture_get_width_name);
  const char gdk_texture_get_height_name[] = "gdk_texture_get_height";
  gdk_texture_get_height_ptr =
    reinterpret_cast<int (*)(GdkTexture* texture)>(
      dlsym(module, gdk_texture_get_height_name));
  if (!gdk_texture_get_height_ptr)
    LogDlerror(gdk_texture_get_height_name);
  const char gdk_texture_download_name[] = "gdk_texture_download";
  gdk_texture_download_ptr =
    reinterpret_cast<void (*)(GdkTexture* texture, guchar* data, gsize stride)>(
      dlsym(module, gdk_texture_download_name));
  if (!gdk_texture_download_ptr)
    LogDlerror(gdk_texture_download_name);
  const char gdk_display_map_keycode_name[] = "gdk_display_map_keycode";
  gdk_display_map_keycode_ptr =
    reinterpret_cast<gboolean (*)(GdkDisplay* display, guint keycode, GdkKeymapKey** keys, guint** keyvals, int* n_entries)>(
      dlsym(module, gdk_display_map_keycode_name));
  if (!gdk_display_map_keycode_ptr)
    LogDlerror(gdk_display_map_keycode_name);
  const char gdk_paintable_snapshot_name[] = "gdk_paintable_snapshot";
  gdk_paintable_snapshot_ptr =
    reinterpret_cast<void (*)(GdkPaintable* paintable, GdkSnapshot* snapshot, double width, double height)>(
      dlsym(module, gdk_paintable_snapshot_name));
  if (!gdk_paintable_snapshot_ptr)
    LogDlerror(gdk_paintable_snapshot_name);
  const char gdk_paintable_get_type_name[] = "gdk_paintable_get_type";
  gdk_paintable_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gdk_paintable_get_type_name));
  if (!gdk_paintable_get_type_ptr)
    LogDlerror(gdk_paintable_get_type_name);
  const char gdk_display_get_default_seat_name[] = "gdk_display_get_default_seat";
  gdk_display_get_default_seat_ptr =
    reinterpret_cast<GdkSeat* (*)(GdkDisplay* display)>(
      dlsym(module, gdk_display_get_default_seat_name));
  if (!gdk_display_get_default_seat_ptr)
    LogDlerror(gdk_display_get_default_seat_name);
  const char gdk_seat_get_keyboard_name[] = "gdk_seat_get_keyboard";
  gdk_seat_get_keyboard_ptr =
    reinterpret_cast<GdkDevice* (*)(GdkSeat* seat)>(
      dlsym(module, gdk_seat_get_keyboard_name));
  if (!gdk_seat_get_keyboard_ptr)
    LogDlerror(gdk_seat_get_keyboard_name);
  const char gdk_memory_texture_new_name[] = "gdk_memory_texture_new";
  gdk_memory_texture_new_ptr =
    reinterpret_cast<GdkTexture* (*)(int width, int height, GdkMemoryFormat format, GBytes* bytes, gsize stride)>(
      dlsym(module, gdk_memory_texture_new_name));
  if (!gdk_memory_texture_new_ptr)
    LogDlerror(gdk_memory_texture_new_name);
  const char gdk_paintable_get_intrinsic_width_name[] = "gdk_paintable_get_intrinsic_width";
  gdk_paintable_get_intrinsic_width_ptr =
    reinterpret_cast<int (*)(GdkPaintable* paintable)>(
      dlsym(module, gdk_paintable_get_intrinsic_width_name));
  if (!gdk_paintable_get_intrinsic_width_ptr)
    LogDlerror(gdk_paintable_get_intrinsic_width_name);
  const char gdk_paintable_get_intrinsic_height_name[] = "gdk_paintable_get_intrinsic_height";
  gdk_paintable_get_intrinsic_height_ptr =
    reinterpret_cast<int (*)(GdkPaintable* paintable)>(
      dlsym(module, gdk_paintable_get_intrinsic_height_name));
  if (!gdk_paintable_get_intrinsic_height_ptr)
    LogDlerror(gdk_paintable_get_intrinsic_height_name);
  const char gdk_screen_get_default_name[] = "gdk_screen_get_default";
  gdk_screen_get_default_ptr =
    reinterpret_cast<GdkScreen* (*)(void)>(
      dlsym(module, gdk_screen_get_default_name));
  if (!gdk_screen_get_default_ptr)
    LogDlerror(gdk_screen_get_default_name);
  const char gdk_color_free_name[] = "gdk_color_free";
  gdk_color_free_ptr =
    reinterpret_cast<void (*)(GdkColor* color)>(
      dlsym(module, gdk_color_free_name));
  if (!gdk_color_free_ptr)
    LogDlerror(gdk_color_free_name);
  const char gdk_wayland_window_set_transient_for_exported_name[] = "gdk_wayland_window_set_transient_for_exported";
  gdk_wayland_window_set_transient_for_exported_ptr =
    reinterpret_cast<gboolean (*)(GdkWindow* window, char* parent_handle_str)>(
      dlsym(module, gdk_wayland_window_set_transient_for_exported_name));
  if (!gdk_wayland_window_set_transient_for_exported_ptr)
    LogDlerror(gdk_wayland_window_set_transient_for_exported_name);
  const char gdk_wayland_toplevel_set_transient_for_exported_name[] = "gdk_wayland_toplevel_set_transient_for_exported";
  gdk_wayland_toplevel_set_transient_for_exported_ptr =
    reinterpret_cast<gboolean (*)(GdkToplevel* toplevel, const char* parent_handle_str)>(
      dlsym(module, gdk_wayland_toplevel_set_transient_for_exported_name));
  if (!gdk_wayland_toplevel_set_transient_for_exported_ptr)
    LogDlerror(gdk_wayland_toplevel_set_transient_for_exported_name);
  const char gdk_x11_surface_get_xid_name[] = "gdk_x11_surface_get_xid";
  gdk_x11_surface_get_xid_ptr =
    reinterpret_cast<unsigned long (*)(GdkSurface* surface)>(
      dlsym(module, gdk_x11_surface_get_xid_name));
  if (!gdk_x11_surface_get_xid_ptr)
    LogDlerror(gdk_x11_surface_get_xid_name);
  const char gdk_x11_window_get_xid_name[] = "gdk_x11_window_get_xid";
  gdk_x11_window_get_xid_ptr =
    reinterpret_cast<unsigned long (*)(GdkWindow* window)>(
      dlsym(module, gdk_x11_window_get_xid_name));
  if (!gdk_x11_window_get_xid_ptr)
    LogDlerror(gdk_x11_window_get_xid_name);
  const char gdk_event_handler_set_name[] = "gdk_event_handler_set";
  gdk_event_handler_set_ptr =
    reinterpret_cast<void (*)(GdkEventFunc func, gpointer data, GDestroyNotify notify)>(
      dlsym(module, gdk_event_handler_set_name));
  if (!gdk_event_handler_set_ptr)
    LogDlerror(gdk_event_handler_set_name);
  const char gdk_x11_window_foreign_new_for_display_name[] = "gdk_x11_window_foreign_new_for_display";
  gdk_x11_window_foreign_new_for_display_ptr =
    reinterpret_cast<GdkWindow* (*)(GdkDisplay* display, unsigned long window)>(
      dlsym(module, gdk_x11_window_foreign_new_for_display_name));
  if (!gdk_x11_window_foreign_new_for_display_ptr)
    LogDlerror(gdk_x11_window_foreign_new_for_display_name);
  const char gdk_x11_window_lookup_for_display_name[] = "gdk_x11_window_lookup_for_display";
  gdk_x11_window_lookup_for_display_ptr =
    reinterpret_cast<GdkWindow* (*)(GdkDisplay* display, unsigned long window)>(
      dlsym(module, gdk_x11_window_lookup_for_display_name));
  if (!gdk_x11_window_lookup_for_display_ptr)
    LogDlerror(gdk_x11_window_lookup_for_display_name);
  const char gdk_key_event_get_keycode_name[] = "gdk_key_event_get_keycode";
  gdk_key_event_get_keycode_ptr =
    reinterpret_cast<guint (*)(GdkEvent* event)>(
      dlsym(module, gdk_key_event_get_keycode_name));
  if (!gdk_key_event_get_keycode_ptr)
    LogDlerror(gdk_key_event_get_keycode_name);
  const char gdk_key_event_get_keyval_name[] = "gdk_key_event_get_keyval";
  gdk_key_event_get_keyval_ptr =
    reinterpret_cast<guint (*)(GdkEvent* event)>(
      dlsym(module, gdk_key_event_get_keyval_name));
  if (!gdk_key_event_get_keyval_ptr)
    LogDlerror(gdk_key_event_get_keyval_name);
  const char gdk_event_get_surface_name[] = "gdk_event_get_surface";
  gdk_event_get_surface_ptr =
    reinterpret_cast<GdkSurface* (*)(GdkEvent* event)>(
      dlsym(module, gdk_event_get_surface_name));
  if (!gdk_event_get_surface_ptr)
    LogDlerror(gdk_event_get_surface_name);
  const char gdk_event_get_modifier_state_name[] = "gdk_event_get_modifier_state";
  gdk_event_get_modifier_state_ptr =
    reinterpret_cast<GdkModifierType (*)(GdkEvent *event)>(
      dlsym(module, gdk_event_get_modifier_state_name));
  if (!gdk_event_get_modifier_state_ptr)
    LogDlerror(gdk_event_get_modifier_state_name);
  const char gdk_toplevel_get_type_name[] = "gdk_toplevel_get_type";
  gdk_toplevel_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gdk_toplevel_get_type_name));
  if (!gdk_toplevel_get_type_ptr)
    LogDlerror(gdk_toplevel_get_type_name);
  const char gdk_set_allowed_backends_name[] = "gdk_set_allowed_backends";
  gdk_set_allowed_backends_ptr =
    reinterpret_cast<void (*)(const gchar* backends)>(
      dlsym(module, gdk_set_allowed_backends_name));
  if (!gdk_set_allowed_backends_ptr)
    LogDlerror(gdk_set_allowed_backends_name);
  const char gdk_keyval_to_unicode_name[] = "gdk_keyval_to_unicode";
  gdk_keyval_to_unicode_ptr =
    reinterpret_cast<guint32 (*)(guint keyval)>(
      dlsym(module, gdk_keyval_to_unicode_name));
  if (!gdk_keyval_to_unicode_ptr)
    LogDlerror(gdk_keyval_to_unicode_name);
  const char gdk_screen_get_resolution_name[] = "gdk_screen_get_resolution";
  gdk_screen_get_resolution_ptr =
    reinterpret_cast<gdouble (*)(GdkScreen *screen)>(
      dlsym(module, gdk_screen_get_resolution_name));
  if (!gdk_screen_get_resolution_ptr)
    LogDlerror(gdk_screen_get_resolution_name);
  const char gdk_unicode_to_keyval_name[] = "gdk_unicode_to_keyval";
  gdk_unicode_to_keyval_ptr =
    reinterpret_cast<guint (*)(guint32 wc)>(
      dlsym(module, gdk_unicode_to_keyval_name));
  if (!gdk_unicode_to_keyval_ptr)
    LogDlerror(gdk_unicode_to_keyval_name);
  const char gdk_display_get_n_monitors_name[] = "gdk_display_get_n_monitors";
  gdk_display_get_n_monitors_ptr =
    reinterpret_cast<int (*)(GdkDisplay *display)>(
      dlsym(module, gdk_display_get_n_monitors_name));
  if (!gdk_display_get_n_monitors_ptr)
    LogDlerror(gdk_display_get_n_monitors_name);
  const char gdk_display_get_monitor_name[] = "gdk_display_get_monitor";
  gdk_display_get_monitor_ptr =
    reinterpret_cast<GdkMonitor* (*)(GdkDisplay *display, int monitor_num)>(
      dlsym(module, gdk_display_get_monitor_name));
  if (!gdk_display_get_monitor_ptr)
    LogDlerror(gdk_display_get_monitor_name);
  const char gdk_monitor_get_geometry_name[] = "gdk_monitor_get_geometry";
  gdk_monitor_get_geometry_ptr =
    reinterpret_cast<void (*)(GdkMonitor *monitor, GdkRectangle *geometry)>(
      dlsym(module, gdk_monitor_get_geometry_name));
  if (!gdk_monitor_get_geometry_ptr)
    LogDlerror(gdk_monitor_get_geometry_name);
  const char gdk_monitor_get_scale_factor_name[] = "gdk_monitor_get_scale_factor";
  gdk_monitor_get_scale_factor_ptr =
    reinterpret_cast<int (*)(GdkMonitor *monitor)>(
      dlsym(module, gdk_monitor_get_scale_factor_name));
  if (!gdk_monitor_get_scale_factor_ptr)
    LogDlerror(gdk_monitor_get_scale_factor_name);
  const char gdk_display_get_primary_monitor_name[] = "gdk_display_get_primary_monitor";
  gdk_display_get_primary_monitor_ptr =
    reinterpret_cast<GdkMonitor* (*)(GdkDisplay *display)>(
      dlsym(module, gdk_display_get_primary_monitor_name));
  if (!gdk_display_get_primary_monitor_ptr)
    LogDlerror(gdk_display_get_primary_monitor_name);
  const char gdk_display_get_monitors_name[] = "gdk_display_get_monitors";
  gdk_display_get_monitors_ptr =
    reinterpret_cast<GListModel* (*)(GdkDisplay *self)>(
      dlsym(module, gdk_display_get_monitors_name));
  if (!gdk_display_get_monitors_ptr)
    LogDlerror(gdk_display_get_monitors_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeGdk() {
  gdk_display_get_default_ptr = nullptr;
  gdk_keymap_translate_keyboard_state_ptr = nullptr;
  gdk_keymap_add_virtual_modifiers_ptr = nullptr;
  gdk_event_new_ptr = nullptr;
  gdk_event_free_ptr = nullptr;
  gdk_keymap_get_entries_for_keycode_ptr = nullptr;
  gdk_keymap_get_for_display_ptr = nullptr;
  gdk_texture_get_width_ptr = nullptr;
  gdk_texture_get_height_ptr = nullptr;
  gdk_texture_download_ptr = nullptr;
  gdk_display_map_keycode_ptr = nullptr;
  gdk_paintable_snapshot_ptr = nullptr;
  gdk_paintable_get_type_ptr = nullptr;
  gdk_display_get_default_seat_ptr = nullptr;
  gdk_seat_get_keyboard_ptr = nullptr;
  gdk_memory_texture_new_ptr = nullptr;
  gdk_paintable_get_intrinsic_width_ptr = nullptr;
  gdk_paintable_get_intrinsic_height_ptr = nullptr;
  gdk_screen_get_default_ptr = nullptr;
  gdk_color_free_ptr = nullptr;
  gdk_wayland_window_set_transient_for_exported_ptr = nullptr;
  gdk_wayland_toplevel_set_transient_for_exported_ptr = nullptr;
  gdk_x11_surface_get_xid_ptr = nullptr;
  gdk_x11_window_get_xid_ptr = nullptr;
  gdk_event_handler_set_ptr = nullptr;
  gdk_x11_window_foreign_new_for_display_ptr = nullptr;
  gdk_x11_window_lookup_for_display_ptr = nullptr;
  gdk_key_event_get_keycode_ptr = nullptr;
  gdk_key_event_get_keyval_ptr = nullptr;
  gdk_event_get_surface_ptr = nullptr;
  gdk_event_get_modifier_state_ptr = nullptr;
  gdk_toplevel_get_type_ptr = nullptr;
  gdk_set_allowed_backends_ptr = nullptr;
  gdk_keyval_to_unicode_ptr = nullptr;
  gdk_screen_get_resolution_ptr = nullptr;
  gdk_unicode_to_keyval_ptr = nullptr;
  gdk_display_get_n_monitors_ptr = nullptr;
  gdk_display_get_monitor_ptr = nullptr;
  gdk_monitor_get_geometry_ptr = nullptr;
  gdk_monitor_get_scale_factor_ptr = nullptr;
  gdk_display_get_primary_monitor_ptr = nullptr;
  gdk_display_get_monitors_ptr = nullptr;
}

}  // namespace ui_gtk

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static GskRenderNodeType (*gsk_render_node_get_node_type_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static void (*gsk_render_node_unref_ptr)(GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_transform_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_opacity_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_color_matrix_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_repeat_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_clip_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_rounded_clip_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_shadow_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_blur_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_debug_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_container_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node, guint idx) = nullptr;
static GskRenderNode* (*gsk_gl_shader_node_get_child_ptr)(UI_GTK_CONST GskRenderNode* node, guint idx) = nullptr;
static guint (*gsk_container_node_get_n_children_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static guint (*gsk_gl_shader_node_get_n_children_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static GdkTexture* (*gsk_texture_node_get_texture_ptr)(UI_GTK_CONST GskRenderNode* node) = nullptr;
static float (*gsk_opacity_node_get_opacity_ptr)(const GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_mask_node_get_mask_ptr)(const GskRenderNode* node) = nullptr;
static GdkTexture* (*gsk_texture_scale_node_get_texture_ptr)(const GskRenderNode* node) = nullptr;
static GskRenderNode* (*gsk_subsurface_node_get_child_ptr)(const GskRenderNode* node) = nullptr;
static void (*gsk_render_node_draw_ptr)(GskRenderNode* node, cairo_t* cr) = nullptr;

// Stubs that dispatch to the real implementations.
extern GskRenderNodeType gsk_render_node_get_node_type(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNodeType  gsk_render_node_get_node_type(UI_GTK_CONST GskRenderNode* node) {
  return gsk_render_node_get_node_type_ptr(node);
}
extern void gsk_render_node_unref(GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
void  gsk_render_node_unref(GskRenderNode* node) {
  gsk_render_node_unref_ptr(node);
}
extern GskRenderNode* gsk_transform_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_transform_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_transform_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_opacity_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_opacity_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_opacity_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_color_matrix_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_color_matrix_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_color_matrix_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_repeat_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_repeat_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_repeat_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_clip_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_clip_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_clip_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_rounded_clip_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_rounded_clip_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_rounded_clip_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_shadow_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_shadow_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_shadow_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_blur_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_blur_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_blur_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_debug_node_get_child(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_debug_node_get_child(UI_GTK_CONST GskRenderNode* node) {
  return gsk_debug_node_get_child_ptr(node);
}
extern GskRenderNode* gsk_container_node_get_child(UI_GTK_CONST GskRenderNode* node, guint idx) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_container_node_get_child(UI_GTK_CONST GskRenderNode* node, guint idx) {
  return gsk_container_node_get_child_ptr(node, idx);
}
extern GskRenderNode* gsk_gl_shader_node_get_child(UI_GTK_CONST GskRenderNode* node, guint idx) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_gl_shader_node_get_child(UI_GTK_CONST GskRenderNode* node, guint idx) {
  return gsk_gl_shader_node_get_child_ptr(node, idx);
}
extern guint gsk_container_node_get_n_children(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gsk_container_node_get_n_children(UI_GTK_CONST GskRenderNode* node) {
  return gsk_container_node_get_n_children_ptr(node);
}
extern guint gsk_gl_shader_node_get_n_children(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gsk_gl_shader_node_get_n_children(UI_GTK_CONST GskRenderNode* node) {
  return gsk_gl_shader_node_get_n_children_ptr(node);
}
extern GdkTexture* gsk_texture_node_get_texture(UI_GTK_CONST GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GdkTexture*  gsk_texture_node_get_texture(UI_GTK_CONST GskRenderNode* node) {
  return gsk_texture_node_get_texture_ptr(node);
}
extern float gsk_opacity_node_get_opacity(const GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
float  gsk_opacity_node_get_opacity(const GskRenderNode* node) {
  return gsk_opacity_node_get_opacity_ptr(node);
}
extern GskRenderNode* gsk_mask_node_get_mask(const GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_mask_node_get_mask(const GskRenderNode* node) {
  return gsk_mask_node_get_mask_ptr(node);
}
extern GdkTexture* gsk_texture_scale_node_get_texture(const GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GdkTexture*  gsk_texture_scale_node_get_texture(const GskRenderNode* node) {
  return gsk_texture_scale_node_get_texture_ptr(node);
}
extern GskRenderNode* gsk_subsurface_node_get_child(const GskRenderNode* node) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gsk_subsurface_node_get_child(const GskRenderNode* node) {
  return gsk_subsurface_node_get_child_ptr(node);
}
extern void gsk_render_node_draw(GskRenderNode* node, cairo_t* cr) __attribute__((weak));
DISABLE_CFI_ICALL
void  gsk_render_node_draw(GskRenderNode* node, cairo_t* cr) {
  gsk_render_node_draw_ptr(node, cr);
}

}  // extern "C"


namespace ui_gtk {

// Returns true if all stubs have been properly initialized.
bool IsGskInitialized() {
  return gsk_render_node_get_node_type_ptr &&
         gsk_render_node_unref_ptr &&
         gsk_transform_node_get_child_ptr &&
         gsk_opacity_node_get_child_ptr &&
         gsk_color_matrix_node_get_child_ptr &&
         gsk_repeat_node_get_child_ptr &&
         gsk_clip_node_get_child_ptr &&
         gsk_rounded_clip_node_get_child_ptr &&
         gsk_shadow_node_get_child_ptr &&
         gsk_blur_node_get_child_ptr &&
         gsk_debug_node_get_child_ptr &&
         gsk_container_node_get_child_ptr &&
         gsk_gl_shader_node_get_child_ptr &&
         gsk_container_node_get_n_children_ptr &&
         gsk_gl_shader_node_get_n_children_ptr &&
         gsk_texture_node_get_texture_ptr &&
         gsk_opacity_node_get_opacity_ptr &&
         gsk_mask_node_get_mask_ptr &&
         gsk_texture_scale_node_get_texture_ptr &&
         gsk_subsurface_node_get_child_ptr &&
         gsk_render_node_draw_ptr;
}

// Initializes the module stubs.
void InitializeGsk(void* module) {
  const char gsk_render_node_get_node_type_name[] = "gsk_render_node_get_node_type";
  gsk_render_node_get_node_type_ptr =
    reinterpret_cast<GskRenderNodeType (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_render_node_get_node_type_name));
  if (!gsk_render_node_get_node_type_ptr)
    LogDlerror(gsk_render_node_get_node_type_name);
  const char gsk_render_node_unref_name[] = "gsk_render_node_unref";
  gsk_render_node_unref_ptr =
    reinterpret_cast<void (*)(GskRenderNode* node)>(
      dlsym(module, gsk_render_node_unref_name));
  if (!gsk_render_node_unref_ptr)
    LogDlerror(gsk_render_node_unref_name);
  const char gsk_transform_node_get_child_name[] = "gsk_transform_node_get_child";
  gsk_transform_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_transform_node_get_child_name));
  if (!gsk_transform_node_get_child_ptr)
    LogDlerror(gsk_transform_node_get_child_name);
  const char gsk_opacity_node_get_child_name[] = "gsk_opacity_node_get_child";
  gsk_opacity_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_opacity_node_get_child_name));
  if (!gsk_opacity_node_get_child_ptr)
    LogDlerror(gsk_opacity_node_get_child_name);
  const char gsk_color_matrix_node_get_child_name[] = "gsk_color_matrix_node_get_child";
  gsk_color_matrix_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_color_matrix_node_get_child_name));
  if (!gsk_color_matrix_node_get_child_ptr)
    LogDlerror(gsk_color_matrix_node_get_child_name);
  const char gsk_repeat_node_get_child_name[] = "gsk_repeat_node_get_child";
  gsk_repeat_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_repeat_node_get_child_name));
  if (!gsk_repeat_node_get_child_ptr)
    LogDlerror(gsk_repeat_node_get_child_name);
  const char gsk_clip_node_get_child_name[] = "gsk_clip_node_get_child";
  gsk_clip_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_clip_node_get_child_name));
  if (!gsk_clip_node_get_child_ptr)
    LogDlerror(gsk_clip_node_get_child_name);
  const char gsk_rounded_clip_node_get_child_name[] = "gsk_rounded_clip_node_get_child";
  gsk_rounded_clip_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_rounded_clip_node_get_child_name));
  if (!gsk_rounded_clip_node_get_child_ptr)
    LogDlerror(gsk_rounded_clip_node_get_child_name);
  const char gsk_shadow_node_get_child_name[] = "gsk_shadow_node_get_child";
  gsk_shadow_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_shadow_node_get_child_name));
  if (!gsk_shadow_node_get_child_ptr)
    LogDlerror(gsk_shadow_node_get_child_name);
  const char gsk_blur_node_get_child_name[] = "gsk_blur_node_get_child";
  gsk_blur_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_blur_node_get_child_name));
  if (!gsk_blur_node_get_child_ptr)
    LogDlerror(gsk_blur_node_get_child_name);
  const char gsk_debug_node_get_child_name[] = "gsk_debug_node_get_child";
  gsk_debug_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_debug_node_get_child_name));
  if (!gsk_debug_node_get_child_ptr)
    LogDlerror(gsk_debug_node_get_child_name);
  const char gsk_container_node_get_child_name[] = "gsk_container_node_get_child";
  gsk_container_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node, guint idx)>(
      dlsym(module, gsk_container_node_get_child_name));
  if (!gsk_container_node_get_child_ptr)
    LogDlerror(gsk_container_node_get_child_name);
  const char gsk_gl_shader_node_get_child_name[] = "gsk_gl_shader_node_get_child";
  gsk_gl_shader_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(UI_GTK_CONST GskRenderNode* node, guint idx)>(
      dlsym(module, gsk_gl_shader_node_get_child_name));
  if (!gsk_gl_shader_node_get_child_ptr)
    LogDlerror(gsk_gl_shader_node_get_child_name);
  const char gsk_container_node_get_n_children_name[] = "gsk_container_node_get_n_children";
  gsk_container_node_get_n_children_ptr =
    reinterpret_cast<guint (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_container_node_get_n_children_name));
  if (!gsk_container_node_get_n_children_ptr)
    LogDlerror(gsk_container_node_get_n_children_name);
  const char gsk_gl_shader_node_get_n_children_name[] = "gsk_gl_shader_node_get_n_children";
  gsk_gl_shader_node_get_n_children_ptr =
    reinterpret_cast<guint (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_gl_shader_node_get_n_children_name));
  if (!gsk_gl_shader_node_get_n_children_ptr)
    LogDlerror(gsk_gl_shader_node_get_n_children_name);
  const char gsk_texture_node_get_texture_name[] = "gsk_texture_node_get_texture";
  gsk_texture_node_get_texture_ptr =
    reinterpret_cast<GdkTexture* (*)(UI_GTK_CONST GskRenderNode* node)>(
      dlsym(module, gsk_texture_node_get_texture_name));
  if (!gsk_texture_node_get_texture_ptr)
    LogDlerror(gsk_texture_node_get_texture_name);
  const char gsk_opacity_node_get_opacity_name[] = "gsk_opacity_node_get_opacity";
  gsk_opacity_node_get_opacity_ptr =
    reinterpret_cast<float (*)(const GskRenderNode* node)>(
      dlsym(module, gsk_opacity_node_get_opacity_name));
  if (!gsk_opacity_node_get_opacity_ptr)
    LogDlerror(gsk_opacity_node_get_opacity_name);
  const char gsk_mask_node_get_mask_name[] = "gsk_mask_node_get_mask";
  gsk_mask_node_get_mask_ptr =
    reinterpret_cast<GskRenderNode* (*)(const GskRenderNode* node)>(
      dlsym(module, gsk_mask_node_get_mask_name));
  if (!gsk_mask_node_get_mask_ptr)
    LogDlerror(gsk_mask_node_get_mask_name);
  const char gsk_texture_scale_node_get_texture_name[] = "gsk_texture_scale_node_get_texture";
  gsk_texture_scale_node_get_texture_ptr =
    reinterpret_cast<GdkTexture* (*)(const GskRenderNode* node)>(
      dlsym(module, gsk_texture_scale_node_get_texture_name));
  if (!gsk_texture_scale_node_get_texture_ptr)
    LogDlerror(gsk_texture_scale_node_get_texture_name);
  const char gsk_subsurface_node_get_child_name[] = "gsk_subsurface_node_get_child";
  gsk_subsurface_node_get_child_ptr =
    reinterpret_cast<GskRenderNode* (*)(const GskRenderNode* node)>(
      dlsym(module, gsk_subsurface_node_get_child_name));
  if (!gsk_subsurface_node_get_child_ptr)
    LogDlerror(gsk_subsurface_node_get_child_name);
  const char gsk_render_node_draw_name[] = "gsk_render_node_draw";
  gsk_render_node_draw_ptr =
    reinterpret_cast<void (*)(GskRenderNode* node, cairo_t* cr)>(
      dlsym(module, gsk_render_node_draw_name));
  if (!gsk_render_node_draw_ptr)
    LogDlerror(gsk_render_node_draw_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeGsk() {
  gsk_render_node_get_node_type_ptr = nullptr;
  gsk_render_node_unref_ptr = nullptr;
  gsk_transform_node_get_child_ptr = nullptr;
  gsk_opacity_node_get_child_ptr = nullptr;
  gsk_color_matrix_node_get_child_ptr = nullptr;
  gsk_repeat_node_get_child_ptr = nullptr;
  gsk_clip_node_get_child_ptr = nullptr;
  gsk_rounded_clip_node_get_child_ptr = nullptr;
  gsk_shadow_node_get_child_ptr = nullptr;
  gsk_blur_node_get_child_ptr = nullptr;
  gsk_debug_node_get_child_ptr = nullptr;
  gsk_container_node_get_child_ptr = nullptr;
  gsk_gl_shader_node_get_child_ptr = nullptr;
  gsk_container_node_get_n_children_ptr = nullptr;
  gsk_gl_shader_node_get_n_children_ptr = nullptr;
  gsk_texture_node_get_texture_ptr = nullptr;
  gsk_opacity_node_get_opacity_ptr = nullptr;
  gsk_mask_node_get_mask_ptr = nullptr;
  gsk_texture_scale_node_get_texture_ptr = nullptr;
  gsk_subsurface_node_get_child_ptr = nullptr;
  gsk_render_node_draw_ptr = nullptr;
}

}  // namespace ui_gtk

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static GtkSettings* (*gtk_settings_get_default_ptr)(void) = nullptr;
static void (*gtk_widget_path_iter_set_object_name_ptr)(GtkWidgetPath* path, gint pos, const gchar* name) = nullptr;
static void (*gtk_widget_path_iter_add_class_ptr)(GtkWidgetPath* path, gint pos, const gchar* name) = nullptr;
static GtkWidgetPath* (*gtk_widget_path_copy_ptr)(const GtkWidgetPath* path) = nullptr;
static GtkWidgetPath* (*gtk_widget_path_new_ptr)(void) = nullptr;
static const GtkWidgetPath* (*gtk_style_context_get_path_ptr)(GtkStyleContext* context) = nullptr;
static gint (*gtk_widget_path_append_type_ptr)(GtkWidgetPath* path, GType type) = nullptr;
static void (*gtk_widget_path_iter_set_name_ptr)(GtkWidgetPath* path, gint pos, const gchar* name) = nullptr;
static void (*gtk_widget_path_iter_set_state_ptr)(GtkWidgetPath* path, gint pos, GtkStateFlags state) = nullptr;
static GtkStyleContext* (*gtk_style_context_new_ptr)(void) = nullptr;
static void (*gtk_style_context_set_path_ptr)(GtkStyleContext* context, GtkWidgetPath* path) = nullptr;
static void (*gtk_style_context_set_parent_ptr)(GtkStyleContext* context, GtkStyleContext* parent) = nullptr;
static void (*gtk_widget_path_unref_ptr)(GtkWidgetPath* path) = nullptr;
static GtkStyleContext* (*gtk_style_context_get_parent_ptr)(GtkStyleContext* context) = nullptr;
static void (*gtk_widget_set_css_classes_ptr)(GtkWidget* widget, const char** classes) = nullptr;
static void (*gtk_widget_measure_ptr)(GtkWidget* widget, GtkOrientation orientation, int for_size, int* minimum, int* natural, int* minimum_baseline, int* natural_baseline) = nullptr;
static GtkWidget* (*gtk_offscreen_window_new_ptr)(void) = nullptr;
static void (*gtk_container_add_ptr)(GtkContainer* container, GtkWidget* widget) = nullptr;
static void (*gtk_widget_destroy_ptr)(GtkWidget* widget) = nullptr;
static gboolean (*gtk_bindings_activate_event_ptr)(GObject* object, GdkEventKey* event) = nullptr;
static void (*gtk_widget_set_events_ptr)(GtkWidget* widget, gint events) = nullptr;
static GType (*gtk_container_get_type_ptr)(void) = nullptr;
static cairo_surface_t* (*gtk_icon_info_load_surface_ptr)(GtkIconInfo* icon_info, GdkWindow* for_window, GError** error) = nullptr;
static void (*gtk_style_context_get_valist_ptr)(GtkStyleContext* context, GtkStateFlags state, va_list args) = nullptr;
static void (*gtk_style_context_get_style_valist_ptr)(GtkStyleContext* context, va_list args) = nullptr;
static GtkSnapshot* (*gtk_snapshot_new_ptr)(void) = nullptr;
static GskRenderNode* (*gtk_snapshot_free_to_node_ptr)(GtkSnapshot* snapshot) = nullptr;
static void (*gtk_im_context_set_client_widget_ptr)(GtkIMContext* context, GtkWidget* widget) = nullptr;
static GtkNative* (*gtk_widget_get_native_ptr)(GtkWidget* widget) = nullptr;
static GdkSurface* (*gtk_native_get_surface_ptr)(GtkNative* native) = nullptr;
static gboolean (*gtk_im_context_filter_key_ptr)(GtkIMContext* context, gboolean press, GdkSurface* surface, GdkDevice* device, guint32 time, guint keycode, GdkModifierType state, int group) = nullptr;
static void (*gtk_im_context_set_client_window_ptr)(GtkIMContext* context, GdkWindow* window) = nullptr;
static gboolean (*gtk_file_chooser_set_filename_ptr)(GtkFileChooser* chooser, const char* filename) = nullptr;
static GSList* (*gtk_file_chooser_list_filters_ptr)(GtkFileChooser* chooser) = nullptr;
static gchar* (*gtk_file_chooser_get_filename_ptr)(GtkFileChooser* chooser) = nullptr;
static GSList* (*gtk_file_chooser_get_filenames_ptr)(GtkFileChooser* chooser) = nullptr;
static char* (*gtk_file_chooser_get_preview_filename_ptr)(GtkFileChooser* chooser) = nullptr;
static void (*gtk_file_chooser_set_preview_widget_active_ptr)(GtkFileChooser* chooser, gboolean active) = nullptr;
static void (*gtk_file_chooser_set_preview_widget_ptr)(GtkFileChooser* chooser, GtkWidget* preview_widget) = nullptr;
static gboolean (*gtk_widget_hide_on_delete_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_widget_show_all_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_file_chooser_set_do_overwrite_confirmation_ptr)(GtkFileChooser* chooser, gboolean do_overwrite_confirmation) = nullptr;
static GListModel* (*gtk_file_chooser_get_filters_ptr)(GtkFileChooser* chooser) = nullptr;
static void (*gtk_window_set_hide_on_close_ptr)(GtkWindow* window, gboolean setting) = nullptr;
static GtkIconInfo* (*gtk_icon_theme_lookup_icon_for_scale_ptr)(GtkIconTheme* icon_theme, const gchar* icon_name, gint size, gint scale, GtkIconLookupFlags flags) = nullptr;
static GdkPixbuf* (*gtk_icon_info_load_symbolic_for_context_ptr)(GtkIconInfo* icon_info, GtkStyleContext* context, gboolean* was_symbolic, GError** error) = nullptr;
static void (*gtk_snapshot_render_background_ptr)(GtkSnapshot* snapshot, GtkStyleContext* context, double x, double y, double width, double height) = nullptr;
static GType (*gtk_menu_get_type_ptr)(void) = nullptr;
static GType (*gtk_menu_bar_get_type_ptr)(void) = nullptr;
static GType (*gtk_menu_item_get_type_ptr)(void) = nullptr;
static void (*gtk_style_context_add_provider_for_screen_ptr)(GdkScreen* screen, GtkStyleProvider* provider, guint priority) = nullptr;
static void (*gtk_style_context_add_provider_for_display_ptr)(GdkDisplay* display, GtkStyleProvider* provider, guint priority) = nullptr;
static void (*gtk_style_context_remove_provider_for_screen_ptr)(GdkScreen* screen, GtkStyleProvider* provider) = nullptr;
static void (*gtk_style_context_remove_provider_for_display_ptr)(GdkDisplay* display, GtkStyleProvider* provider) = nullptr;
static void (*gtk_window_destroy_ptr)(GtkWindow* window) = nullptr;
static GtkIconTheme* (*gtk_icon_theme_get_for_display_ptr)(GdkDisplay* display) = nullptr;
static GtkIconTheme* (*gtk_icon_theme_get_default_ptr)(void) = nullptr;
static gboolean (*gtk_widget_path_iter_has_class_ptr)(const GtkWidgetPath* path, gint pos, const gchar* name) = nullptr;
static GdkWindow* (*gtk_widget_get_window_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_main_do_event_ptr)(GdkEvent *event) = nullptr;
static guint (*gtk_get_major_version_ptr)(void) = nullptr;
static guint (*gtk_get_minor_version_ptr)(void) = nullptr;
static guint (*gtk_get_micro_version_ptr)(void) = nullptr;
static void (*gtk_window_present_ptr)(GtkWindow* window) = nullptr;
static void (*gtk_window_present_with_time_ptr)(GtkWindow* window, guint32 timestamp) = nullptr;
static GType (*gtk_box_get_type_ptr)(void) = nullptr;
static GType (*gtk_button_get_type_ptr)(void) = nullptr;
static GType (*gtk_cell_view_get_type_ptr)(void) = nullptr;
static GType (*gtk_combo_box_text_get_type_ptr)(void) = nullptr;
static GType (*gtk_entry_get_type_ptr)(void) = nullptr;
static GType (*gtk_file_chooser_get_type_ptr)(void) = nullptr;
static GType (*gtk_frame_get_type_ptr)(void) = nullptr;
static GType (*gtk_header_bar_get_type_ptr)(void) = nullptr;
static GType (*gtk_image_get_type_ptr)(void) = nullptr;
static GType (*gtk_info_bar_get_type_ptr)(void) = nullptr;
static GType (*gtk_label_get_type_ptr)(void) = nullptr;
static GType (*gtk_print_unix_dialog_get_type_ptr)(void) = nullptr;
static GType (*gtk_range_get_type_ptr)(void) = nullptr;
static GType (*gtk_scale_get_type_ptr)(void) = nullptr;
static GType (*gtk_scrollbar_get_type_ptr)(void) = nullptr;
static GType (*gtk_scrolled_window_get_type_ptr)(void) = nullptr;
static GType (*gtk_separator_get_type_ptr)(void) = nullptr;
static GType (*gtk_spinner_get_type_ptr)(void) = nullptr;
static GType (*gtk_style_provider_get_type_ptr)(void) = nullptr;
static GType (*gtk_text_view_get_type_ptr)(void) = nullptr;
static GType (*gtk_toggle_button_get_type_ptr)(void) = nullptr;
static GType (*gtk_tree_model_get_type_ptr)(void) = nullptr;
static GType (*gtk_tree_view_get_type_ptr)(void) = nullptr;
static GType (*gtk_widget_get_type_ptr)(void) = nullptr;
static GType (*gtk_window_get_type_ptr)(void) = nullptr;
static GtkWidget* (*gtk_combo_box_new_with_model_ptr)(GtkTreeModel* model) = nullptr;
static GtkCssProvider* (*gtk_css_provider_new_ptr)(void) = nullptr;
static void (*gtk_disable_setlocale_ptr)(void) = nullptr;
static void (*gtk_enumerate_printers_ptr)(GtkPrinterFunc func, gpointer data, GDestroyNotify destroy, gboolean wait) = nullptr;
static GList* (*gtk_print_backend_load_modules_ptr)(void) = nullptr;
static GListModel* (*gtk_print_backend_get_printers_ptr)(GtkPrintBackend* print_backend) = nullptr;
static GList* (*gtk_print_backend_get_printer_list_ptr)(GtkPrintBackend* print_backend) = nullptr;
static void (*gtk_file_chooser_add_filter_ptr)(GtkFileChooser* chooser, GtkFileFilter* filter) = nullptr;
static GFile* (*gtk_file_chooser_get_file_ptr)(GtkFileChooser* chooser) = nullptr;
static GtkFileFilter* (*gtk_file_chooser_get_filter_ptr)(GtkFileChooser* chooser) = nullptr;
static void (*gtk_file_chooser_set_create_folders_ptr)(GtkFileChooser* chooser, gboolean create_folders) = nullptr;
static void (*gtk_file_chooser_set_current_name_ptr)(GtkFileChooser* chooser, const gchar* name) = nullptr;
static gboolean (*gtk_file_chooser_set_file_ptr)(GtkFileChooser* chooser, GFile* file, GError** error) = nullptr;
static void (*gtk_file_chooser_set_filter_ptr)(GtkFileChooser* chooser, GtkFileFilter* filter) = nullptr;
static void (*gtk_file_chooser_set_select_multiple_ptr)(GtkFileChooser* chooser, gboolean select_multiple) = nullptr;
static void (*gtk_file_filter_add_mime_type_ptr)(GtkFileFilter* filter, const gchar* mime_type) = nullptr;
static void (*gtk_file_filter_add_pattern_ptr)(GtkFileFilter* filter, const gchar* pattern) = nullptr;
static GtkFileFilter* (*gtk_file_filter_new_ptr)(void) = nullptr;
static void (*gtk_file_filter_set_name_ptr)(GtkFileFilter* filter, const gchar* name) = nullptr;
static GtkWidget* (*gtk_image_new_ptr)(void) = nullptr;
static void (*gtk_image_set_from_pixbuf_ptr)(GtkImage* image, GdkPixbuf* pixbuf) = nullptr;
static void (*gtk_im_context_focus_in_ptr)(GtkIMContext* context) = nullptr;
static void (*gtk_im_context_focus_out_ptr)(GtkIMContext* context) = nullptr;
static void (*gtk_im_context_get_preedit_string_ptr)(GtkIMContext* context, gchar** str, PangoAttrList** attrs, gint* cursor_pos) = nullptr;
static void (*gtk_im_context_reset_ptr)(GtkIMContext* context) = nullptr;
static void (*gtk_im_context_set_cursor_location_ptr)(GtkIMContext* context, const GdkRectangle* area) = nullptr;
static GtkIMContext* (*gtk_im_context_simple_new_ptr)(void) = nullptr;
static GtkIMContext* (*gtk_im_multicontext_new_ptr)(void) = nullptr;
static const char* (*gtk_im_multicontext_get_context_id_ptr)(GtkIMMulticontext* context) = nullptr;
static void (*gtk_im_multicontext_set_context_id_ptr)(GtkIMMulticontext* context, const char* context_id) = nullptr;
static GType (*gtk_im_multicontext_get_type_ptr)(void) = nullptr;
static GtkWidget* (*gtk_label_new_ptr)(const gchar* str) = nullptr;
static gdouble (*gtk_page_setup_get_left_margin_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static gdouble (*gtk_page_setup_get_page_height_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static gdouble (*gtk_page_setup_get_page_width_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static gdouble (*gtk_page_setup_get_paper_height_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static GtkPaperSize* (*gtk_page_setup_get_paper_size_ptr)(GtkPageSetup* setup) = nullptr;
static gdouble (*gtk_page_setup_get_paper_width_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static gdouble (*gtk_page_setup_get_top_margin_ptr)(GtkPageSetup* setup, GtkUnit unit) = nullptr;
static gboolean (*gtk_page_setup_load_key_file_ptr)(GtkPageSetup* setup, GKeyFile* key_file, const char* group_name, GError** error) = nullptr;
static GtkPageSetup* (*gtk_page_setup_new_ptr)(void) = nullptr;
static void (*gtk_page_setup_set_paper_size_ptr)(GtkPageSetup* setup, GtkPaperSize* size) = nullptr;
static void (*gtk_page_setup_to_key_file_ptr)(GtkPageSetup* setup, GKeyFile* key_file, const gchar* group_name) = nullptr;
static void (*gtk_paper_size_free_ptr)(GtkPaperSize* size) = nullptr;
static gdouble (*gtk_paper_size_get_height_ptr)(GtkPaperSize* size, GtkUnit unit) = nullptr;
static GList* (*gtk_paper_size_get_paper_sizes_ptr)(gboolean include_custom) = nullptr;
static const gchar* (*gtk_paper_size_get_ppd_name_ptr)(GtkPaperSize* size) = nullptr;
static gdouble (*gtk_paper_size_get_width_ptr)(GtkPaperSize* size, GtkUnit unit) = nullptr;
static GtkPaperSize* (*gtk_paper_size_new_custom_ptr)(const gchar* name, const gchar* display_name, gdouble width, gdouble height, GtkUnit unit) = nullptr;
static GtkPageSetup* (*gtk_printer_get_default_page_size_ptr)(GtkPrinter* printer) = nullptr;
static const gchar* (*gtk_printer_get_name_ptr)(GtkPrinter* printer) = nullptr;
static gboolean (*gtk_printer_is_default_ptr)(GtkPrinter* printer) = nullptr;
static GtkPrintJob* (*gtk_print_job_new_ptr)(const gchar* title, GtkPrinter* printer, GtkPrintSettings* settings, GtkPageSetup* page_setup) = nullptr;
static void (*gtk_print_job_send_ptr)(GtkPrintJob* job, GtkPrintJobCompleteFunc callback, gpointer user_data, GDestroyNotify dnotify) = nullptr;
static gboolean (*gtk_print_job_set_source_file_ptr)(GtkPrintJob* job, const gchar* filename, GError** error) = nullptr;
static GtkPrintSettings* (*gtk_print_settings_copy_ptr)(GtkPrintSettings* other) = nullptr;
static GtkPageOrientation (*gtk_print_settings_get_orientation_ptr)(GtkPrintSettings* settings) = nullptr;
static GtkPageRange* (*gtk_print_settings_get_page_ranges_ptr)(GtkPrintSettings* settings, gint *num_ranges) = nullptr;
static void (*gtk_print_settings_set_page_ranges_ptr)(GtkPrintSettings* settings, GtkPageRange* page_ranges, gint num_ranges) = nullptr;
static const gchar* (*gtk_print_settings_get_printer_ptr)(GtkPrintSettings* settings) = nullptr;
static GtkPrintPages (*gtk_print_settings_get_print_pages_ptr)(GtkPrintSettings* settings) = nullptr;
static gint (*gtk_print_settings_get_resolution_ptr)(GtkPrintSettings* settings) = nullptr;
static gboolean (*gtk_print_settings_load_key_file_ptr)(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name, GError** error) = nullptr;
static GtkPrintSettings* (*gtk_print_settings_new_ptr)(void) = nullptr;
static void (*gtk_print_settings_set_ptr)(GtkPrintSettings* settings, const gchar* key, const gchar* value) = nullptr;
static void (*gtk_print_settings_set_collate_ptr)(GtkPrintSettings* settings, gboolean collate) = nullptr;
static void (*gtk_print_settings_set_n_copies_ptr)(GtkPrintSettings* settings, gint num_copies) = nullptr;
static void (*gtk_print_settings_set_orientation_ptr)(GtkPrintSettings* settings, GtkPageOrientation orientation) = nullptr;
static void (*gtk_print_settings_set_printer_lpi_ptr)(GtkPrintSettings* settings, gdouble lpi) = nullptr;
static void (*gtk_print_settings_set_print_pages_ptr)(GtkPrintSettings* settings, GtkPrintPages pages) = nullptr;
static void (*gtk_print_settings_set_resolution_xy_ptr)(GtkPrintSettings* settings, gint resolution_x, gint resolution_y) = nullptr;
static void (*gtk_print_settings_to_key_file_ptr)(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name) = nullptr;
static GtkPageSetup* (*gtk_print_unix_dialog_get_page_setup_ptr)(GtkPrintUnixDialog* dialog) = nullptr;
static GtkPrinter* (*gtk_print_unix_dialog_get_selected_printer_ptr)(GtkPrintUnixDialog* dialog) = nullptr;
static GtkPrintSettings* (*gtk_print_unix_dialog_get_settings_ptr)(GtkPrintUnixDialog* dialog) = nullptr;
static GtkWidget* (*gtk_print_unix_dialog_new_ptr)(const char* title, GtkWindow* parent) = nullptr;
static void (*gtk_print_unix_dialog_set_embed_page_setup_ptr)(GtkPrintUnixDialog* dialog, gboolean embed) = nullptr;
static void (*gtk_print_unix_dialog_set_has_selection_ptr)(GtkPrintUnixDialog* dialog, gboolean has_selection) = nullptr;
static void (*gtk_print_unix_dialog_set_manual_capabilities_ptr)(GtkPrintUnixDialog* dialog, GtkPrintCapabilities capabilities) = nullptr;
static void (*gtk_print_unix_dialog_set_settings_ptr)(GtkPrintUnixDialog* dialog, GtkPrintSettings* settings) = nullptr;
static void (*gtk_print_unix_dialog_set_support_selection_ptr)(GtkPrintUnixDialog* dialog, gboolean support_selection) = nullptr;
static void (*gtk_render_background_ptr)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) = nullptr;
static void (*gtk_render_focus_ptr)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) = nullptr;
static void (*gtk_render_frame_ptr)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) = nullptr;
static GtkWidget* (*gtk_separator_new_ptr)(GtkOrientation orientation) = nullptr;
static void (*gtk_style_context_add_class_ptr)(GtkStyleContext* context, const gchar* class_name) = nullptr;
static void (*gtk_style_context_add_provider_ptr)(GtkStyleContext* context, GtkStyleProvider* provider, guint priority) = nullptr;
static GtkStateFlags (*gtk_style_context_get_state_ptr)(GtkStyleContext* context) = nullptr;
static gboolean (*gtk_style_context_has_class_ptr)(GtkStyleContext* context, const gchar* class_name) = nullptr;
static void (*gtk_style_context_set_scale_ptr)(GtkStyleContext* context, gint scale) = nullptr;
static void (*gtk_style_context_set_state_ptr)(GtkStyleContext* context, GtkStateFlags flags) = nullptr;
static PangoContext* (*gtk_widget_get_pango_context_ptr)(GtkWidget* widget) = nullptr;
static GtkWidget* (*gtk_widget_get_parent_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_widget_get_preferred_size_ptr)(GtkWidget* widget, GtkRequisition* minimum_size, GtkRequisition* natural_size) = nullptr;
static gint (*gtk_widget_get_scale_factor_ptr)(GtkWidget* widget) = nullptr;
static GtkStyleContext* (*gtk_widget_get_style_context_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_widget_hide_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_widget_realize_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_widget_set_can_focus_ptr)(GtkWidget* widget, gboolean can_focus) = nullptr;
static void (*gtk_widget_set_name_ptr)(GtkWidget* widget, const gchar* name) = nullptr;
static void (*gtk_widget_set_parent_ptr)(GtkWidget* widget, GtkWidget* parent) = nullptr;
static void (*gtk_widget_set_sensitive_ptr)(GtkWidget* widget, gboolean sensitive) = nullptr;
static void (*gtk_widget_set_size_request_ptr)(GtkWidget* widget, gint width, gint height) = nullptr;
static void (*gtk_widget_set_state_flags_ptr)(GtkWidget* widget, GtkStateFlags flags, gboolean clear) = nullptr;
static void (*gtk_widget_show_ptr)(GtkWidget* widget) = nullptr;
static void (*gtk_window_set_modal_ptr)(GtkWindow* window, gboolean modal) = nullptr;
static void (*gtk_print_settings_set_printer_ptr)(GtkPrintSettings* settings, const gchar* printer) = nullptr;

// Stubs that dispatch to the real implementations.
extern GtkSettings* gtk_settings_get_default(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkSettings*  gtk_settings_get_default(void) {
  return gtk_settings_get_default_ptr();
}
extern void gtk_widget_path_iter_set_object_name(GtkWidgetPath* path, gint pos, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_path_iter_set_object_name(GtkWidgetPath* path, gint pos, const gchar* name) {
  gtk_widget_path_iter_set_object_name_ptr(path, pos, name);
}
extern void gtk_widget_path_iter_add_class(GtkWidgetPath* path, gint pos, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_path_iter_add_class(GtkWidgetPath* path, gint pos, const gchar* name) {
  gtk_widget_path_iter_add_class_ptr(path, pos, name);
}
extern GtkWidgetPath* gtk_widget_path_copy(const GtkWidgetPath* path) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidgetPath*  gtk_widget_path_copy(const GtkWidgetPath* path) {
  return gtk_widget_path_copy_ptr(path);
}
extern GtkWidgetPath* gtk_widget_path_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidgetPath*  gtk_widget_path_new(void) {
  return gtk_widget_path_new_ptr();
}
extern const GtkWidgetPath* gtk_style_context_get_path(GtkStyleContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
const GtkWidgetPath*  gtk_style_context_get_path(GtkStyleContext* context) {
  return gtk_style_context_get_path_ptr(context);
}
extern gint gtk_widget_path_append_type(GtkWidgetPath* path, GType type) __attribute__((weak));
DISABLE_CFI_ICALL
gint  gtk_widget_path_append_type(GtkWidgetPath* path, GType type) {
  return gtk_widget_path_append_type_ptr(path, type);
}
extern void gtk_widget_path_iter_set_name(GtkWidgetPath* path, gint pos, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_path_iter_set_name(GtkWidgetPath* path, gint pos, const gchar* name) {
  gtk_widget_path_iter_set_name_ptr(path, pos, name);
}
extern void gtk_widget_path_iter_set_state(GtkWidgetPath* path, gint pos, GtkStateFlags state) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_path_iter_set_state(GtkWidgetPath* path, gint pos, GtkStateFlags state) {
  gtk_widget_path_iter_set_state_ptr(path, pos, state);
}
extern GtkStyleContext* gtk_style_context_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkStyleContext*  gtk_style_context_new(void) {
  return gtk_style_context_new_ptr();
}
extern void gtk_style_context_set_path(GtkStyleContext* context, GtkWidgetPath* path) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_set_path(GtkStyleContext* context, GtkWidgetPath* path) {
  gtk_style_context_set_path_ptr(context, path);
}
extern void gtk_style_context_set_parent(GtkStyleContext* context, GtkStyleContext* parent) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_set_parent(GtkStyleContext* context, GtkStyleContext* parent) {
  gtk_style_context_set_parent_ptr(context, parent);
}
extern void gtk_widget_path_unref(GtkWidgetPath* path) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_path_unref(GtkWidgetPath* path) {
  gtk_widget_path_unref_ptr(path);
}
extern GtkStyleContext* gtk_style_context_get_parent(GtkStyleContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
GtkStyleContext*  gtk_style_context_get_parent(GtkStyleContext* context) {
  return gtk_style_context_get_parent_ptr(context);
}
extern void gtk_widget_set_css_classes(GtkWidget* widget, const char** classes) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_css_classes(GtkWidget* widget, const char** classes) {
  gtk_widget_set_css_classes_ptr(widget, classes);
}
extern void gtk_widget_measure(GtkWidget* widget, GtkOrientation orientation, int for_size, int* minimum, int* natural, int* minimum_baseline, int* natural_baseline) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_measure(GtkWidget* widget, GtkOrientation orientation, int for_size, int* minimum, int* natural, int* minimum_baseline, int* natural_baseline) {
  gtk_widget_measure_ptr(widget, orientation, for_size, minimum, natural, minimum_baseline, natural_baseline);
}
extern GtkWidget* gtk_offscreen_window_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_offscreen_window_new(void) {
  return gtk_offscreen_window_new_ptr();
}
extern void gtk_container_add(GtkContainer* container, GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_container_add(GtkContainer* container, GtkWidget* widget) {
  gtk_container_add_ptr(container, widget);
}
extern void gtk_widget_destroy(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_destroy(GtkWidget* widget) {
  gtk_widget_destroy_ptr(widget);
}
extern gboolean gtk_bindings_activate_event(GObject* object, GdkEventKey* event) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_bindings_activate_event(GObject* object, GdkEventKey* event) {
  return gtk_bindings_activate_event_ptr(object, event);
}
extern void gtk_widget_set_events(GtkWidget* widget, gint events) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_events(GtkWidget* widget, gint events) {
  gtk_widget_set_events_ptr(widget, events);
}
extern GType gtk_container_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_container_get_type(void) {
  return gtk_container_get_type_ptr();
}
extern cairo_surface_t* gtk_icon_info_load_surface(GtkIconInfo* icon_info, GdkWindow* for_window, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
cairo_surface_t*  gtk_icon_info_load_surface(GtkIconInfo* icon_info, GdkWindow* for_window, GError** error) {
  return gtk_icon_info_load_surface_ptr(icon_info, for_window, error);
}
extern void gtk_style_context_get_valist(GtkStyleContext* context, GtkStateFlags state, va_list args) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_get_valist(GtkStyleContext* context, GtkStateFlags state, va_list args) {
  gtk_style_context_get_valist_ptr(context, state, args);
}
extern void gtk_style_context_get_style_valist(GtkStyleContext* context, va_list args) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_get_style_valist(GtkStyleContext* context, va_list args) {
  gtk_style_context_get_style_valist_ptr(context, args);
}
extern GtkSnapshot* gtk_snapshot_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkSnapshot*  gtk_snapshot_new(void) {
  return gtk_snapshot_new_ptr();
}
extern GskRenderNode* gtk_snapshot_free_to_node(GtkSnapshot* snapshot) __attribute__((weak));
DISABLE_CFI_ICALL
GskRenderNode*  gtk_snapshot_free_to_node(GtkSnapshot* snapshot) {
  return gtk_snapshot_free_to_node_ptr(snapshot);
}
extern void gtk_im_context_set_client_widget(GtkIMContext* context, GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_set_client_widget(GtkIMContext* context, GtkWidget* widget) {
  gtk_im_context_set_client_widget_ptr(context, widget);
}
extern GtkNative* gtk_widget_get_native(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
GtkNative*  gtk_widget_get_native(GtkWidget* widget) {
  return gtk_widget_get_native_ptr(widget);
}
extern GdkSurface* gtk_native_get_surface(GtkNative* native) __attribute__((weak));
DISABLE_CFI_ICALL
GdkSurface*  gtk_native_get_surface(GtkNative* native) {
  return gtk_native_get_surface_ptr(native);
}
extern gboolean gtk_im_context_filter_key(GtkIMContext* context, gboolean press, GdkSurface* surface, GdkDevice* device, guint32 time, guint keycode, GdkModifierType state, int group) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_im_context_filter_key(GtkIMContext* context, gboolean press, GdkSurface* surface, GdkDevice* device, guint32 time, guint keycode, GdkModifierType state, int group) {
  return gtk_im_context_filter_key_ptr(context, press, surface, device, time, keycode, state, group);
}
extern void gtk_im_context_set_client_window(GtkIMContext* context, GdkWindow* window) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_set_client_window(GtkIMContext* context, GdkWindow* window) {
  gtk_im_context_set_client_window_ptr(context, window);
}
extern gboolean gtk_file_chooser_set_filename(GtkFileChooser* chooser, const char* filename) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_file_chooser_set_filename(GtkFileChooser* chooser, const char* filename) {
  return gtk_file_chooser_set_filename_ptr(chooser, filename);
}
extern GSList* gtk_file_chooser_list_filters(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
GSList*  gtk_file_chooser_list_filters(GtkFileChooser* chooser) {
  return gtk_file_chooser_list_filters_ptr(chooser);
}
extern gchar* gtk_file_chooser_get_filename(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
gchar*  gtk_file_chooser_get_filename(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_filename_ptr(chooser);
}
extern GSList* gtk_file_chooser_get_filenames(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
GSList*  gtk_file_chooser_get_filenames(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_filenames_ptr(chooser);
}
extern char* gtk_file_chooser_get_preview_filename(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
char*  gtk_file_chooser_get_preview_filename(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_preview_filename_ptr(chooser);
}
extern void gtk_file_chooser_set_preview_widget_active(GtkFileChooser* chooser, gboolean active) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_preview_widget_active(GtkFileChooser* chooser, gboolean active) {
  gtk_file_chooser_set_preview_widget_active_ptr(chooser, active);
}
extern void gtk_file_chooser_set_preview_widget(GtkFileChooser* chooser, GtkWidget* preview_widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_preview_widget(GtkFileChooser* chooser, GtkWidget* preview_widget) {
  gtk_file_chooser_set_preview_widget_ptr(chooser, preview_widget);
}
extern gboolean gtk_widget_hide_on_delete(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_widget_hide_on_delete(GtkWidget* widget) {
  return gtk_widget_hide_on_delete_ptr(widget);
}
extern void gtk_widget_show_all(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_show_all(GtkWidget* widget) {
  gtk_widget_show_all_ptr(widget);
}
extern void gtk_file_chooser_set_do_overwrite_confirmation(GtkFileChooser* chooser, gboolean do_overwrite_confirmation) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_do_overwrite_confirmation(GtkFileChooser* chooser, gboolean do_overwrite_confirmation) {
  gtk_file_chooser_set_do_overwrite_confirmation_ptr(chooser, do_overwrite_confirmation);
}
extern GListModel* gtk_file_chooser_get_filters(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
GListModel*  gtk_file_chooser_get_filters(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_filters_ptr(chooser);
}
extern void gtk_window_set_hide_on_close(GtkWindow* window, gboolean setting) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_window_set_hide_on_close(GtkWindow* window, gboolean setting) {
  gtk_window_set_hide_on_close_ptr(window, setting);
}
extern GtkIconInfo* gtk_icon_theme_lookup_icon_for_scale(GtkIconTheme* icon_theme, const gchar* icon_name, gint size, gint scale, GtkIconLookupFlags flags) __attribute__((weak));
DISABLE_CFI_ICALL
GtkIconInfo*  gtk_icon_theme_lookup_icon_for_scale(GtkIconTheme* icon_theme, const gchar* icon_name, gint size, gint scale, GtkIconLookupFlags flags) {
  return gtk_icon_theme_lookup_icon_for_scale_ptr(icon_theme, icon_name, size, scale, flags);
}
extern GdkPixbuf* gtk_icon_info_load_symbolic_for_context(GtkIconInfo* icon_info, GtkStyleContext* context, gboolean* was_symbolic, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
GdkPixbuf*  gtk_icon_info_load_symbolic_for_context(GtkIconInfo* icon_info, GtkStyleContext* context, gboolean* was_symbolic, GError** error) {
  return gtk_icon_info_load_symbolic_for_context_ptr(icon_info, context, was_symbolic, error);
}
extern void gtk_snapshot_render_background(GtkSnapshot* snapshot, GtkStyleContext* context, double x, double y, double width, double height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_snapshot_render_background(GtkSnapshot* snapshot, GtkStyleContext* context, double x, double y, double width, double height) {
  gtk_snapshot_render_background_ptr(snapshot, context, x, y, width, height);
}
extern GType gtk_menu_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_menu_get_type(void) {
  return gtk_menu_get_type_ptr();
}
extern GType gtk_menu_bar_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_menu_bar_get_type(void) {
  return gtk_menu_bar_get_type_ptr();
}
extern GType gtk_menu_item_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_menu_item_get_type(void) {
  return gtk_menu_item_get_type_ptr();
}
extern void gtk_style_context_add_provider_for_screen(GdkScreen* screen, GtkStyleProvider* provider, guint priority) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_add_provider_for_screen(GdkScreen* screen, GtkStyleProvider* provider, guint priority) {
  gtk_style_context_add_provider_for_screen_ptr(screen, provider, priority);
}
extern void gtk_style_context_add_provider_for_display(GdkDisplay* display, GtkStyleProvider* provider, guint priority) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_add_provider_for_display(GdkDisplay* display, GtkStyleProvider* provider, guint priority) {
  gtk_style_context_add_provider_for_display_ptr(display, provider, priority);
}
extern void gtk_style_context_remove_provider_for_screen(GdkScreen* screen, GtkStyleProvider* provider) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_remove_provider_for_screen(GdkScreen* screen, GtkStyleProvider* provider) {
  gtk_style_context_remove_provider_for_screen_ptr(screen, provider);
}
extern void gtk_style_context_remove_provider_for_display(GdkDisplay* display, GtkStyleProvider* provider) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_remove_provider_for_display(GdkDisplay* display, GtkStyleProvider* provider) {
  gtk_style_context_remove_provider_for_display_ptr(display, provider);
}
extern void gtk_window_destroy(GtkWindow* window) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_window_destroy(GtkWindow* window) {
  gtk_window_destroy_ptr(window);
}
extern GtkIconTheme* gtk_icon_theme_get_for_display(GdkDisplay* display) __attribute__((weak));
DISABLE_CFI_ICALL
GtkIconTheme*  gtk_icon_theme_get_for_display(GdkDisplay* display) {
  return gtk_icon_theme_get_for_display_ptr(display);
}
extern GtkIconTheme* gtk_icon_theme_get_default(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkIconTheme*  gtk_icon_theme_get_default(void) {
  return gtk_icon_theme_get_default_ptr();
}
extern gboolean gtk_widget_path_iter_has_class(const GtkWidgetPath* path, gint pos, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_widget_path_iter_has_class(const GtkWidgetPath* path, gint pos, const gchar* name) {
  return gtk_widget_path_iter_has_class_ptr(path, pos, name);
}
extern GdkWindow* gtk_widget_get_window(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
GdkWindow*  gtk_widget_get_window(GtkWidget* widget) {
  return gtk_widget_get_window_ptr(widget);
}
extern void gtk_main_do_event(GdkEvent *event) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_main_do_event(GdkEvent *event) {
  gtk_main_do_event_ptr(event);
}
extern guint gtk_get_major_version(void) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gtk_get_major_version(void) {
  return gtk_get_major_version_ptr();
}
extern guint gtk_get_minor_version(void) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gtk_get_minor_version(void) {
  return gtk_get_minor_version_ptr();
}
extern guint gtk_get_micro_version(void) __attribute__((weak));
DISABLE_CFI_ICALL
guint  gtk_get_micro_version(void) {
  return gtk_get_micro_version_ptr();
}
extern void gtk_window_present(GtkWindow* window) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_window_present(GtkWindow* window) {
  gtk_window_present_ptr(window);
}
extern void gtk_window_present_with_time(GtkWindow* window, guint32 timestamp) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_window_present_with_time(GtkWindow* window, guint32 timestamp) {
  gtk_window_present_with_time_ptr(window, timestamp);
}
extern GType gtk_box_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_box_get_type(void) {
  return gtk_box_get_type_ptr();
}
extern GType gtk_button_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_button_get_type(void) {
  return gtk_button_get_type_ptr();
}
extern GType gtk_cell_view_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_cell_view_get_type(void) {
  return gtk_cell_view_get_type_ptr();
}
extern GType gtk_combo_box_text_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_combo_box_text_get_type(void) {
  return gtk_combo_box_text_get_type_ptr();
}
extern GType gtk_entry_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_entry_get_type(void) {
  return gtk_entry_get_type_ptr();
}
extern GType gtk_file_chooser_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_file_chooser_get_type(void) {
  return gtk_file_chooser_get_type_ptr();
}
extern GType gtk_frame_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_frame_get_type(void) {
  return gtk_frame_get_type_ptr();
}
extern GType gtk_header_bar_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_header_bar_get_type(void) {
  return gtk_header_bar_get_type_ptr();
}
extern GType gtk_image_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_image_get_type(void) {
  return gtk_image_get_type_ptr();
}
extern GType gtk_info_bar_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_info_bar_get_type(void) {
  return gtk_info_bar_get_type_ptr();
}
extern GType gtk_label_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_label_get_type(void) {
  return gtk_label_get_type_ptr();
}
extern GType gtk_print_unix_dialog_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_print_unix_dialog_get_type(void) {
  return gtk_print_unix_dialog_get_type_ptr();
}
extern GType gtk_range_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_range_get_type(void) {
  return gtk_range_get_type_ptr();
}
extern GType gtk_scale_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_scale_get_type(void) {
  return gtk_scale_get_type_ptr();
}
extern GType gtk_scrollbar_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_scrollbar_get_type(void) {
  return gtk_scrollbar_get_type_ptr();
}
extern GType gtk_scrolled_window_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_scrolled_window_get_type(void) {
  return gtk_scrolled_window_get_type_ptr();
}
extern GType gtk_separator_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_separator_get_type(void) {
  return gtk_separator_get_type_ptr();
}
extern GType gtk_spinner_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_spinner_get_type(void) {
  return gtk_spinner_get_type_ptr();
}
extern GType gtk_style_provider_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_style_provider_get_type(void) {
  return gtk_style_provider_get_type_ptr();
}
extern GType gtk_text_view_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_text_view_get_type(void) {
  return gtk_text_view_get_type_ptr();
}
extern GType gtk_toggle_button_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_toggle_button_get_type(void) {
  return gtk_toggle_button_get_type_ptr();
}
extern GType gtk_tree_model_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_tree_model_get_type(void) {
  return gtk_tree_model_get_type_ptr();
}
extern GType gtk_tree_view_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_tree_view_get_type(void) {
  return gtk_tree_view_get_type_ptr();
}
extern GType gtk_widget_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_widget_get_type(void) {
  return gtk_widget_get_type_ptr();
}
extern GType gtk_window_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_window_get_type(void) {
  return gtk_window_get_type_ptr();
}
extern GtkWidget* gtk_combo_box_new_with_model(GtkTreeModel* model) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_combo_box_new_with_model(GtkTreeModel* model) {
  return gtk_combo_box_new_with_model_ptr(model);
}
extern GtkCssProvider* gtk_css_provider_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkCssProvider*  gtk_css_provider_new(void) {
  return gtk_css_provider_new_ptr();
}
extern void gtk_disable_setlocale(void) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_disable_setlocale(void) {
  gtk_disable_setlocale_ptr();
}
extern void gtk_enumerate_printers(GtkPrinterFunc func, gpointer data, GDestroyNotify destroy, gboolean wait) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_enumerate_printers(GtkPrinterFunc func, gpointer data, GDestroyNotify destroy, gboolean wait) {
  gtk_enumerate_printers_ptr(func, data, destroy, wait);
}
extern GList* gtk_print_backend_load_modules(void) __attribute__((weak));
DISABLE_CFI_ICALL
GList*  gtk_print_backend_load_modules(void) {
  return gtk_print_backend_load_modules_ptr();
}
extern GListModel* gtk_print_backend_get_printers(GtkPrintBackend* print_backend) __attribute__((weak));
DISABLE_CFI_ICALL
GListModel*  gtk_print_backend_get_printers(GtkPrintBackend* print_backend) {
  return gtk_print_backend_get_printers_ptr(print_backend);
}
extern GList* gtk_print_backend_get_printer_list(GtkPrintBackend* print_backend) __attribute__((weak));
DISABLE_CFI_ICALL
GList*  gtk_print_backend_get_printer_list(GtkPrintBackend* print_backend) {
  return gtk_print_backend_get_printer_list_ptr(print_backend);
}
extern void gtk_file_chooser_add_filter(GtkFileChooser* chooser, GtkFileFilter* filter) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_add_filter(GtkFileChooser* chooser, GtkFileFilter* filter) {
  gtk_file_chooser_add_filter_ptr(chooser, filter);
}
extern GFile* gtk_file_chooser_get_file(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
GFile*  gtk_file_chooser_get_file(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_file_ptr(chooser);
}
extern GtkFileFilter* gtk_file_chooser_get_filter(GtkFileChooser* chooser) __attribute__((weak));
DISABLE_CFI_ICALL
GtkFileFilter*  gtk_file_chooser_get_filter(GtkFileChooser* chooser) {
  return gtk_file_chooser_get_filter_ptr(chooser);
}
extern void gtk_file_chooser_set_create_folders(GtkFileChooser* chooser, gboolean create_folders) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_create_folders(GtkFileChooser* chooser, gboolean create_folders) {
  gtk_file_chooser_set_create_folders_ptr(chooser, create_folders);
}
extern void gtk_file_chooser_set_current_name(GtkFileChooser* chooser, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_current_name(GtkFileChooser* chooser, const gchar* name) {
  gtk_file_chooser_set_current_name_ptr(chooser, name);
}
extern gboolean gtk_file_chooser_set_file(GtkFileChooser* chooser, GFile* file, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_file_chooser_set_file(GtkFileChooser* chooser, GFile* file, GError** error) {
  return gtk_file_chooser_set_file_ptr(chooser, file, error);
}
extern void gtk_file_chooser_set_filter(GtkFileChooser* chooser, GtkFileFilter* filter) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_filter(GtkFileChooser* chooser, GtkFileFilter* filter) {
  gtk_file_chooser_set_filter_ptr(chooser, filter);
}
extern void gtk_file_chooser_set_select_multiple(GtkFileChooser* chooser, gboolean select_multiple) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_chooser_set_select_multiple(GtkFileChooser* chooser, gboolean select_multiple) {
  gtk_file_chooser_set_select_multiple_ptr(chooser, select_multiple);
}
extern void gtk_file_filter_add_mime_type(GtkFileFilter* filter, const gchar* mime_type) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_filter_add_mime_type(GtkFileFilter* filter, const gchar* mime_type) {
  gtk_file_filter_add_mime_type_ptr(filter, mime_type);
}
extern void gtk_file_filter_add_pattern(GtkFileFilter* filter, const gchar* pattern) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_filter_add_pattern(GtkFileFilter* filter, const gchar* pattern) {
  gtk_file_filter_add_pattern_ptr(filter, pattern);
}
extern GtkFileFilter* gtk_file_filter_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkFileFilter*  gtk_file_filter_new(void) {
  return gtk_file_filter_new_ptr();
}
extern void gtk_file_filter_set_name(GtkFileFilter* filter, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_file_filter_set_name(GtkFileFilter* filter, const gchar* name) {
  gtk_file_filter_set_name_ptr(filter, name);
}
extern GtkWidget* gtk_image_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_image_new(void) {
  return gtk_image_new_ptr();
}
extern void gtk_image_set_from_pixbuf(GtkImage* image, GdkPixbuf* pixbuf) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_image_set_from_pixbuf(GtkImage* image, GdkPixbuf* pixbuf) {
  gtk_image_set_from_pixbuf_ptr(image, pixbuf);
}
extern void gtk_im_context_focus_in(GtkIMContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_focus_in(GtkIMContext* context) {
  gtk_im_context_focus_in_ptr(context);
}
extern void gtk_im_context_focus_out(GtkIMContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_focus_out(GtkIMContext* context) {
  gtk_im_context_focus_out_ptr(context);
}
extern void gtk_im_context_get_preedit_string(GtkIMContext* context, gchar** str, PangoAttrList** attrs, gint* cursor_pos) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_get_preedit_string(GtkIMContext* context, gchar** str, PangoAttrList** attrs, gint* cursor_pos) {
  gtk_im_context_get_preedit_string_ptr(context, str, attrs, cursor_pos);
}
extern void gtk_im_context_reset(GtkIMContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_reset(GtkIMContext* context) {
  gtk_im_context_reset_ptr(context);
}
extern void gtk_im_context_set_cursor_location(GtkIMContext* context, const GdkRectangle* area) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_context_set_cursor_location(GtkIMContext* context, const GdkRectangle* area) {
  gtk_im_context_set_cursor_location_ptr(context, area);
}
extern GtkIMContext* gtk_im_context_simple_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkIMContext*  gtk_im_context_simple_new(void) {
  return gtk_im_context_simple_new_ptr();
}
extern GtkIMContext* gtk_im_multicontext_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkIMContext*  gtk_im_multicontext_new(void) {
  return gtk_im_multicontext_new_ptr();
}
extern const char* gtk_im_multicontext_get_context_id(GtkIMMulticontext* context) __attribute__((weak));
DISABLE_CFI_ICALL
const char*  gtk_im_multicontext_get_context_id(GtkIMMulticontext* context) {
  return gtk_im_multicontext_get_context_id_ptr(context);
}
extern void gtk_im_multicontext_set_context_id(GtkIMMulticontext* context, const char* context_id) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_im_multicontext_set_context_id(GtkIMMulticontext* context, const char* context_id) {
  gtk_im_multicontext_set_context_id_ptr(context, context_id);
}
extern GType gtk_im_multicontext_get_type(void) __attribute__((weak));
DISABLE_CFI_ICALL
GType  gtk_im_multicontext_get_type(void) {
  return gtk_im_multicontext_get_type_ptr();
}
extern GtkWidget* gtk_label_new(const gchar* str) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_label_new(const gchar* str) {
  return gtk_label_new_ptr(str);
}
extern gdouble gtk_page_setup_get_left_margin(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_left_margin(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_left_margin_ptr(setup, unit);
}
extern gdouble gtk_page_setup_get_page_height(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_page_height(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_page_height_ptr(setup, unit);
}
extern gdouble gtk_page_setup_get_page_width(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_page_width(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_page_width_ptr(setup, unit);
}
extern gdouble gtk_page_setup_get_paper_height(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_paper_height(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_paper_height_ptr(setup, unit);
}
extern GtkPaperSize* gtk_page_setup_get_paper_size(GtkPageSetup* setup) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPaperSize*  gtk_page_setup_get_paper_size(GtkPageSetup* setup) {
  return gtk_page_setup_get_paper_size_ptr(setup);
}
extern gdouble gtk_page_setup_get_paper_width(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_paper_width(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_paper_width_ptr(setup, unit);
}
extern gdouble gtk_page_setup_get_top_margin(GtkPageSetup* setup, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_page_setup_get_top_margin(GtkPageSetup* setup, GtkUnit unit) {
  return gtk_page_setup_get_top_margin_ptr(setup, unit);
}
extern gboolean gtk_page_setup_load_key_file(GtkPageSetup* setup, GKeyFile* key_file, const char* group_name, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_page_setup_load_key_file(GtkPageSetup* setup, GKeyFile* key_file, const char* group_name, GError** error) {
  return gtk_page_setup_load_key_file_ptr(setup, key_file, group_name, error);
}
extern GtkPageSetup* gtk_page_setup_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPageSetup*  gtk_page_setup_new(void) {
  return gtk_page_setup_new_ptr();
}
extern void gtk_page_setup_set_paper_size(GtkPageSetup* setup, GtkPaperSize* size) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_page_setup_set_paper_size(GtkPageSetup* setup, GtkPaperSize* size) {
  gtk_page_setup_set_paper_size_ptr(setup, size);
}
extern void gtk_page_setup_to_key_file(GtkPageSetup* setup, GKeyFile* key_file, const gchar* group_name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_page_setup_to_key_file(GtkPageSetup* setup, GKeyFile* key_file, const gchar* group_name) {
  gtk_page_setup_to_key_file_ptr(setup, key_file, group_name);
}
extern void gtk_paper_size_free(GtkPaperSize* size) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_paper_size_free(GtkPaperSize* size) {
  gtk_paper_size_free_ptr(size);
}
extern gdouble gtk_paper_size_get_height(GtkPaperSize* size, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_paper_size_get_height(GtkPaperSize* size, GtkUnit unit) {
  return gtk_paper_size_get_height_ptr(size, unit);
}
extern GList* gtk_paper_size_get_paper_sizes(gboolean include_custom) __attribute__((weak));
DISABLE_CFI_ICALL
GList*  gtk_paper_size_get_paper_sizes(gboolean include_custom) {
  return gtk_paper_size_get_paper_sizes_ptr(include_custom);
}
extern const gchar* gtk_paper_size_get_ppd_name(GtkPaperSize* size) __attribute__((weak));
DISABLE_CFI_ICALL
const gchar*  gtk_paper_size_get_ppd_name(GtkPaperSize* size) {
  return gtk_paper_size_get_ppd_name_ptr(size);
}
extern gdouble gtk_paper_size_get_width(GtkPaperSize* size, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
gdouble  gtk_paper_size_get_width(GtkPaperSize* size, GtkUnit unit) {
  return gtk_paper_size_get_width_ptr(size, unit);
}
extern GtkPaperSize* gtk_paper_size_new_custom(const gchar* name, const gchar* display_name, gdouble width, gdouble height, GtkUnit unit) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPaperSize*  gtk_paper_size_new_custom(const gchar* name, const gchar* display_name, gdouble width, gdouble height, GtkUnit unit) {
  return gtk_paper_size_new_custom_ptr(name, display_name, width, height, unit);
}
extern GtkPageSetup* gtk_printer_get_default_page_size(GtkPrinter* printer) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPageSetup*  gtk_printer_get_default_page_size(GtkPrinter* printer) {
  return gtk_printer_get_default_page_size_ptr(printer);
}
extern const gchar* gtk_printer_get_name(GtkPrinter* printer) __attribute__((weak));
DISABLE_CFI_ICALL
const gchar*  gtk_printer_get_name(GtkPrinter* printer) {
  return gtk_printer_get_name_ptr(printer);
}
extern gboolean gtk_printer_is_default(GtkPrinter* printer) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_printer_is_default(GtkPrinter* printer) {
  return gtk_printer_is_default_ptr(printer);
}
extern GtkPrintJob* gtk_print_job_new(const gchar* title, GtkPrinter* printer, GtkPrintSettings* settings, GtkPageSetup* page_setup) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrintJob*  gtk_print_job_new(const gchar* title, GtkPrinter* printer, GtkPrintSettings* settings, GtkPageSetup* page_setup) {
  return gtk_print_job_new_ptr(title, printer, settings, page_setup);
}
extern void gtk_print_job_send(GtkPrintJob* job, GtkPrintJobCompleteFunc callback, gpointer user_data, GDestroyNotify dnotify) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_job_send(GtkPrintJob* job, GtkPrintJobCompleteFunc callback, gpointer user_data, GDestroyNotify dnotify) {
  gtk_print_job_send_ptr(job, callback, user_data, dnotify);
}
extern gboolean gtk_print_job_set_source_file(GtkPrintJob* job, const gchar* filename, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_print_job_set_source_file(GtkPrintJob* job, const gchar* filename, GError** error) {
  return gtk_print_job_set_source_file_ptr(job, filename, error);
}
extern GtkPrintSettings* gtk_print_settings_copy(GtkPrintSettings* other) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrintSettings*  gtk_print_settings_copy(GtkPrintSettings* other) {
  return gtk_print_settings_copy_ptr(other);
}
extern GtkPageOrientation gtk_print_settings_get_orientation(GtkPrintSettings* settings) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPageOrientation  gtk_print_settings_get_orientation(GtkPrintSettings* settings) {
  return gtk_print_settings_get_orientation_ptr(settings);
}
extern GtkPageRange* gtk_print_settings_get_page_ranges(GtkPrintSettings* settings, gint *num_ranges) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPageRange*  gtk_print_settings_get_page_ranges(GtkPrintSettings* settings, gint *num_ranges) {
  return gtk_print_settings_get_page_ranges_ptr(settings, num_ranges);
}
extern void gtk_print_settings_set_page_ranges(GtkPrintSettings* settings, GtkPageRange* page_ranges, gint num_ranges) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_page_ranges(GtkPrintSettings* settings, GtkPageRange* page_ranges, gint num_ranges) {
  gtk_print_settings_set_page_ranges_ptr(settings, page_ranges, num_ranges);
}
extern const gchar* gtk_print_settings_get_printer(GtkPrintSettings* settings) __attribute__((weak));
DISABLE_CFI_ICALL
const gchar*  gtk_print_settings_get_printer(GtkPrintSettings* settings) {
  return gtk_print_settings_get_printer_ptr(settings);
}
extern GtkPrintPages gtk_print_settings_get_print_pages(GtkPrintSettings* settings) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrintPages  gtk_print_settings_get_print_pages(GtkPrintSettings* settings) {
  return gtk_print_settings_get_print_pages_ptr(settings);
}
extern gint gtk_print_settings_get_resolution(GtkPrintSettings* settings) __attribute__((weak));
DISABLE_CFI_ICALL
gint  gtk_print_settings_get_resolution(GtkPrintSettings* settings) {
  return gtk_print_settings_get_resolution_ptr(settings);
}
extern gboolean gtk_print_settings_load_key_file(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name, GError** error) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_print_settings_load_key_file(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name, GError** error) {
  return gtk_print_settings_load_key_file_ptr(settings, key_file, group_name, error);
}
extern GtkPrintSettings* gtk_print_settings_new(void) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrintSettings*  gtk_print_settings_new(void) {
  return gtk_print_settings_new_ptr();
}
extern void gtk_print_settings_set(GtkPrintSettings* settings, const gchar* key, const gchar* value) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set(GtkPrintSettings* settings, const gchar* key, const gchar* value) {
  gtk_print_settings_set_ptr(settings, key, value);
}
extern void gtk_print_settings_set_collate(GtkPrintSettings* settings, gboolean collate) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_collate(GtkPrintSettings* settings, gboolean collate) {
  gtk_print_settings_set_collate_ptr(settings, collate);
}
extern void gtk_print_settings_set_n_copies(GtkPrintSettings* settings, gint num_copies) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_n_copies(GtkPrintSettings* settings, gint num_copies) {
  gtk_print_settings_set_n_copies_ptr(settings, num_copies);
}
extern void gtk_print_settings_set_orientation(GtkPrintSettings* settings, GtkPageOrientation orientation) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_orientation(GtkPrintSettings* settings, GtkPageOrientation orientation) {
  gtk_print_settings_set_orientation_ptr(settings, orientation);
}
extern void gtk_print_settings_set_printer_lpi(GtkPrintSettings* settings, gdouble lpi) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_printer_lpi(GtkPrintSettings* settings, gdouble lpi) {
  gtk_print_settings_set_printer_lpi_ptr(settings, lpi);
}
extern void gtk_print_settings_set_print_pages(GtkPrintSettings* settings, GtkPrintPages pages) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_print_pages(GtkPrintSettings* settings, GtkPrintPages pages) {
  gtk_print_settings_set_print_pages_ptr(settings, pages);
}
extern void gtk_print_settings_set_resolution_xy(GtkPrintSettings* settings, gint resolution_x, gint resolution_y) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_resolution_xy(GtkPrintSettings* settings, gint resolution_x, gint resolution_y) {
  gtk_print_settings_set_resolution_xy_ptr(settings, resolution_x, resolution_y);
}
extern void gtk_print_settings_to_key_file(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_to_key_file(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name) {
  gtk_print_settings_to_key_file_ptr(settings, key_file, group_name);
}
extern GtkPageSetup* gtk_print_unix_dialog_get_page_setup(GtkPrintUnixDialog* dialog) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPageSetup*  gtk_print_unix_dialog_get_page_setup(GtkPrintUnixDialog* dialog) {
  return gtk_print_unix_dialog_get_page_setup_ptr(dialog);
}
extern GtkPrinter* gtk_print_unix_dialog_get_selected_printer(GtkPrintUnixDialog* dialog) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrinter*  gtk_print_unix_dialog_get_selected_printer(GtkPrintUnixDialog* dialog) {
  return gtk_print_unix_dialog_get_selected_printer_ptr(dialog);
}
extern GtkPrintSettings* gtk_print_unix_dialog_get_settings(GtkPrintUnixDialog* dialog) __attribute__((weak));
DISABLE_CFI_ICALL
GtkPrintSettings*  gtk_print_unix_dialog_get_settings(GtkPrintUnixDialog* dialog) {
  return gtk_print_unix_dialog_get_settings_ptr(dialog);
}
extern GtkWidget* gtk_print_unix_dialog_new(const char* title, GtkWindow* parent) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_print_unix_dialog_new(const char* title, GtkWindow* parent) {
  return gtk_print_unix_dialog_new_ptr(title, parent);
}
extern void gtk_print_unix_dialog_set_embed_page_setup(GtkPrintUnixDialog* dialog, gboolean embed) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_unix_dialog_set_embed_page_setup(GtkPrintUnixDialog* dialog, gboolean embed) {
  gtk_print_unix_dialog_set_embed_page_setup_ptr(dialog, embed);
}
extern void gtk_print_unix_dialog_set_has_selection(GtkPrintUnixDialog* dialog, gboolean has_selection) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_unix_dialog_set_has_selection(GtkPrintUnixDialog* dialog, gboolean has_selection) {
  gtk_print_unix_dialog_set_has_selection_ptr(dialog, has_selection);
}
extern void gtk_print_unix_dialog_set_manual_capabilities(GtkPrintUnixDialog* dialog, GtkPrintCapabilities capabilities) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_unix_dialog_set_manual_capabilities(GtkPrintUnixDialog* dialog, GtkPrintCapabilities capabilities) {
  gtk_print_unix_dialog_set_manual_capabilities_ptr(dialog, capabilities);
}
extern void gtk_print_unix_dialog_set_settings(GtkPrintUnixDialog* dialog, GtkPrintSettings* settings) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_unix_dialog_set_settings(GtkPrintUnixDialog* dialog, GtkPrintSettings* settings) {
  gtk_print_unix_dialog_set_settings_ptr(dialog, settings);
}
extern void gtk_print_unix_dialog_set_support_selection(GtkPrintUnixDialog* dialog, gboolean support_selection) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_unix_dialog_set_support_selection(GtkPrintUnixDialog* dialog, gboolean support_selection) {
  gtk_print_unix_dialog_set_support_selection_ptr(dialog, support_selection);
}
extern void gtk_render_background(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_render_background(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) {
  gtk_render_background_ptr(context, cr, x, y, width, height);
}
extern void gtk_render_focus(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_render_focus(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) {
  gtk_render_focus_ptr(context, cr, x, y, width, height);
}
extern void gtk_render_frame(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_render_frame(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height) {
  gtk_render_frame_ptr(context, cr, x, y, width, height);
}
extern GtkWidget* gtk_separator_new(GtkOrientation orientation) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_separator_new(GtkOrientation orientation) {
  return gtk_separator_new_ptr(orientation);
}
extern void gtk_style_context_add_class(GtkStyleContext* context, const gchar* class_name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_add_class(GtkStyleContext* context, const gchar* class_name) {
  gtk_style_context_add_class_ptr(context, class_name);
}
extern void gtk_style_context_add_provider(GtkStyleContext* context, GtkStyleProvider* provider, guint priority) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_add_provider(GtkStyleContext* context, GtkStyleProvider* provider, guint priority) {
  gtk_style_context_add_provider_ptr(context, provider, priority);
}
extern GtkStateFlags gtk_style_context_get_state(GtkStyleContext* context) __attribute__((weak));
DISABLE_CFI_ICALL
GtkStateFlags  gtk_style_context_get_state(GtkStyleContext* context) {
  return gtk_style_context_get_state_ptr(context);
}
extern gboolean gtk_style_context_has_class(GtkStyleContext* context, const gchar* class_name) __attribute__((weak));
DISABLE_CFI_ICALL
gboolean  gtk_style_context_has_class(GtkStyleContext* context, const gchar* class_name) {
  return gtk_style_context_has_class_ptr(context, class_name);
}
extern void gtk_style_context_set_scale(GtkStyleContext* context, gint scale) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_set_scale(GtkStyleContext* context, gint scale) {
  gtk_style_context_set_scale_ptr(context, scale);
}
extern void gtk_style_context_set_state(GtkStyleContext* context, GtkStateFlags flags) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_style_context_set_state(GtkStyleContext* context, GtkStateFlags flags) {
  gtk_style_context_set_state_ptr(context, flags);
}
extern PangoContext* gtk_widget_get_pango_context(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
PangoContext*  gtk_widget_get_pango_context(GtkWidget* widget) {
  return gtk_widget_get_pango_context_ptr(widget);
}
extern GtkWidget* gtk_widget_get_parent(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
GtkWidget*  gtk_widget_get_parent(GtkWidget* widget) {
  return gtk_widget_get_parent_ptr(widget);
}
extern void gtk_widget_get_preferred_size(GtkWidget* widget, GtkRequisition* minimum_size, GtkRequisition* natural_size) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_get_preferred_size(GtkWidget* widget, GtkRequisition* minimum_size, GtkRequisition* natural_size) {
  gtk_widget_get_preferred_size_ptr(widget, minimum_size, natural_size);
}
extern gint gtk_widget_get_scale_factor(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
gint  gtk_widget_get_scale_factor(GtkWidget* widget) {
  return gtk_widget_get_scale_factor_ptr(widget);
}
extern GtkStyleContext* gtk_widget_get_style_context(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
GtkStyleContext*  gtk_widget_get_style_context(GtkWidget* widget) {
  return gtk_widget_get_style_context_ptr(widget);
}
extern void gtk_widget_hide(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_hide(GtkWidget* widget) {
  gtk_widget_hide_ptr(widget);
}
extern void gtk_widget_realize(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_realize(GtkWidget* widget) {
  gtk_widget_realize_ptr(widget);
}
extern void gtk_widget_set_can_focus(GtkWidget* widget, gboolean can_focus) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_can_focus(GtkWidget* widget, gboolean can_focus) {
  gtk_widget_set_can_focus_ptr(widget, can_focus);
}
extern void gtk_widget_set_name(GtkWidget* widget, const gchar* name) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_name(GtkWidget* widget, const gchar* name) {
  gtk_widget_set_name_ptr(widget, name);
}
extern void gtk_widget_set_parent(GtkWidget* widget, GtkWidget* parent) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_parent(GtkWidget* widget, GtkWidget* parent) {
  gtk_widget_set_parent_ptr(widget, parent);
}
extern void gtk_widget_set_sensitive(GtkWidget* widget, gboolean sensitive) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_sensitive(GtkWidget* widget, gboolean sensitive) {
  gtk_widget_set_sensitive_ptr(widget, sensitive);
}
extern void gtk_widget_set_size_request(GtkWidget* widget, gint width, gint height) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_size_request(GtkWidget* widget, gint width, gint height) {
  gtk_widget_set_size_request_ptr(widget, width, height);
}
extern void gtk_widget_set_state_flags(GtkWidget* widget, GtkStateFlags flags, gboolean clear) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_set_state_flags(GtkWidget* widget, GtkStateFlags flags, gboolean clear) {
  gtk_widget_set_state_flags_ptr(widget, flags, clear);
}
extern void gtk_widget_show(GtkWidget* widget) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_widget_show(GtkWidget* widget) {
  gtk_widget_show_ptr(widget);
}
extern void gtk_window_set_modal(GtkWindow* window, gboolean modal) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_window_set_modal(GtkWindow* window, gboolean modal) {
  gtk_window_set_modal_ptr(window, modal);
}
extern void gtk_print_settings_set_printer(GtkPrintSettings* settings, const gchar* printer) __attribute__((weak));
DISABLE_CFI_ICALL
void  gtk_print_settings_set_printer(GtkPrintSettings* settings, const gchar* printer) {
  gtk_print_settings_set_printer_ptr(settings, printer);
}

}  // extern "C"


namespace ui_gtk {

// Returns true if all stubs have been properly initialized.
bool IsGtkInitialized() {
  return gtk_settings_get_default_ptr &&
         gtk_widget_path_iter_set_object_name_ptr &&
         gtk_widget_path_iter_add_class_ptr &&
         gtk_widget_path_copy_ptr &&
         gtk_widget_path_new_ptr &&
         gtk_style_context_get_path_ptr &&
         gtk_widget_path_append_type_ptr &&
         gtk_widget_path_iter_set_name_ptr &&
         gtk_widget_path_iter_set_state_ptr &&
         gtk_style_context_new_ptr &&
         gtk_style_context_set_path_ptr &&
         gtk_style_context_set_parent_ptr &&
         gtk_widget_path_unref_ptr &&
         gtk_style_context_get_parent_ptr &&
         gtk_widget_set_css_classes_ptr &&
         gtk_widget_measure_ptr &&
         gtk_offscreen_window_new_ptr &&
         gtk_container_add_ptr &&
         gtk_widget_destroy_ptr &&
         gtk_bindings_activate_event_ptr &&
         gtk_widget_set_events_ptr &&
         gtk_container_get_type_ptr &&
         gtk_icon_info_load_surface_ptr &&
         gtk_style_context_get_valist_ptr &&
         gtk_style_context_get_style_valist_ptr &&
         gtk_snapshot_new_ptr &&
         gtk_snapshot_free_to_node_ptr &&
         gtk_im_context_set_client_widget_ptr &&
         gtk_widget_get_native_ptr &&
         gtk_native_get_surface_ptr &&
         gtk_im_context_filter_key_ptr &&
         gtk_im_context_set_client_window_ptr &&
         gtk_file_chooser_set_filename_ptr &&
         gtk_file_chooser_list_filters_ptr &&
         gtk_file_chooser_get_filename_ptr &&
         gtk_file_chooser_get_filenames_ptr &&
         gtk_file_chooser_get_preview_filename_ptr &&
         gtk_file_chooser_set_preview_widget_active_ptr &&
         gtk_file_chooser_set_preview_widget_ptr &&
         gtk_widget_hide_on_delete_ptr &&
         gtk_widget_show_all_ptr &&
         gtk_file_chooser_set_do_overwrite_confirmation_ptr &&
         gtk_file_chooser_get_filters_ptr &&
         gtk_window_set_hide_on_close_ptr &&
         gtk_icon_theme_lookup_icon_for_scale_ptr &&
         gtk_icon_info_load_symbolic_for_context_ptr &&
         gtk_snapshot_render_background_ptr &&
         gtk_menu_get_type_ptr &&
         gtk_menu_bar_get_type_ptr &&
         gtk_menu_item_get_type_ptr &&
         gtk_style_context_add_provider_for_screen_ptr &&
         gtk_style_context_add_provider_for_display_ptr &&
         gtk_style_context_remove_provider_for_screen_ptr &&
         gtk_style_context_remove_provider_for_display_ptr &&
         gtk_window_destroy_ptr &&
         gtk_icon_theme_get_for_display_ptr &&
         gtk_icon_theme_get_default_ptr &&
         gtk_widget_path_iter_has_class_ptr &&
         gtk_widget_get_window_ptr &&
         gtk_main_do_event_ptr &&
         gtk_get_major_version_ptr &&
         gtk_get_minor_version_ptr &&
         gtk_get_micro_version_ptr &&
         gtk_window_present_ptr &&
         gtk_window_present_with_time_ptr &&
         gtk_box_get_type_ptr &&
         gtk_button_get_type_ptr &&
         gtk_cell_view_get_type_ptr &&
         gtk_combo_box_text_get_type_ptr &&
         gtk_entry_get_type_ptr &&
         gtk_file_chooser_get_type_ptr &&
         gtk_frame_get_type_ptr &&
         gtk_header_bar_get_type_ptr &&
         gtk_image_get_type_ptr &&
         gtk_info_bar_get_type_ptr &&
         gtk_label_get_type_ptr &&
         gtk_print_unix_dialog_get_type_ptr &&
         gtk_range_get_type_ptr &&
         gtk_scale_get_type_ptr &&
         gtk_scrollbar_get_type_ptr &&
         gtk_scrolled_window_get_type_ptr &&
         gtk_separator_get_type_ptr &&
         gtk_spinner_get_type_ptr &&
         gtk_style_provider_get_type_ptr &&
         gtk_text_view_get_type_ptr &&
         gtk_toggle_button_get_type_ptr &&
         gtk_tree_model_get_type_ptr &&
         gtk_tree_view_get_type_ptr &&
         gtk_widget_get_type_ptr &&
         gtk_window_get_type_ptr &&
         gtk_combo_box_new_with_model_ptr &&
         gtk_css_provider_new_ptr &&
         gtk_disable_setlocale_ptr &&
         gtk_enumerate_printers_ptr &&
         gtk_print_backend_load_modules_ptr &&
         gtk_print_backend_get_printers_ptr &&
         gtk_print_backend_get_printer_list_ptr &&
         gtk_file_chooser_add_filter_ptr &&
         gtk_file_chooser_get_file_ptr &&
         gtk_file_chooser_get_filter_ptr &&
         gtk_file_chooser_set_create_folders_ptr &&
         gtk_file_chooser_set_current_name_ptr &&
         gtk_file_chooser_set_file_ptr &&
         gtk_file_chooser_set_filter_ptr &&
         gtk_file_chooser_set_select_multiple_ptr &&
         gtk_file_filter_add_mime_type_ptr &&
         gtk_file_filter_add_pattern_ptr &&
         gtk_file_filter_new_ptr &&
         gtk_file_filter_set_name_ptr &&
         gtk_image_new_ptr &&
         gtk_image_set_from_pixbuf_ptr &&
         gtk_im_context_focus_in_ptr &&
         gtk_im_context_focus_out_ptr &&
         gtk_im_context_get_preedit_string_ptr &&
         gtk_im_context_reset_ptr &&
         gtk_im_context_set_cursor_location_ptr &&
         gtk_im_context_simple_new_ptr &&
         gtk_im_multicontext_new_ptr &&
         gtk_im_multicontext_get_context_id_ptr &&
         gtk_im_multicontext_set_context_id_ptr &&
         gtk_im_multicontext_get_type_ptr &&
         gtk_label_new_ptr &&
         gtk_page_setup_get_left_margin_ptr &&
         gtk_page_setup_get_page_height_ptr &&
         gtk_page_setup_get_page_width_ptr &&
         gtk_page_setup_get_paper_height_ptr &&
         gtk_page_setup_get_paper_size_ptr &&
         gtk_page_setup_get_paper_width_ptr &&
         gtk_page_setup_get_top_margin_ptr &&
         gtk_page_setup_load_key_file_ptr &&
         gtk_page_setup_new_ptr &&
         gtk_page_setup_set_paper_size_ptr &&
         gtk_page_setup_to_key_file_ptr &&
         gtk_paper_size_free_ptr &&
         gtk_paper_size_get_height_ptr &&
         gtk_paper_size_get_paper_sizes_ptr &&
         gtk_paper_size_get_ppd_name_ptr &&
         gtk_paper_size_get_width_ptr &&
         gtk_paper_size_new_custom_ptr &&
         gtk_printer_get_default_page_size_ptr &&
         gtk_printer_get_name_ptr &&
         gtk_printer_is_default_ptr &&
         gtk_print_job_new_ptr &&
         gtk_print_job_send_ptr &&
         gtk_print_job_set_source_file_ptr &&
         gtk_print_settings_copy_ptr &&
         gtk_print_settings_get_orientation_ptr &&
         gtk_print_settings_get_page_ranges_ptr &&
         gtk_print_settings_set_page_ranges_ptr &&
         gtk_print_settings_get_printer_ptr &&
         gtk_print_settings_get_print_pages_ptr &&
         gtk_print_settings_get_resolution_ptr &&
         gtk_print_settings_load_key_file_ptr &&
         gtk_print_settings_new_ptr &&
         gtk_print_settings_set_ptr &&
         gtk_print_settings_set_collate_ptr &&
         gtk_print_settings_set_n_copies_ptr &&
         gtk_print_settings_set_orientation_ptr &&
         gtk_print_settings_set_printer_lpi_ptr &&
         gtk_print_settings_set_print_pages_ptr &&
         gtk_print_settings_set_resolution_xy_ptr &&
         gtk_print_settings_to_key_file_ptr &&
         gtk_print_unix_dialog_get_page_setup_ptr &&
         gtk_print_unix_dialog_get_selected_printer_ptr &&
         gtk_print_unix_dialog_get_settings_ptr &&
         gtk_print_unix_dialog_new_ptr &&
         gtk_print_unix_dialog_set_embed_page_setup_ptr &&
         gtk_print_unix_dialog_set_has_selection_ptr &&
         gtk_print_unix_dialog_set_manual_capabilities_ptr &&
         gtk_print_unix_dialog_set_settings_ptr &&
         gtk_print_unix_dialog_set_support_selection_ptr &&
         gtk_render_background_ptr &&
         gtk_render_focus_ptr &&
         gtk_render_frame_ptr &&
         gtk_separator_new_ptr &&
         gtk_style_context_add_class_ptr &&
         gtk_style_context_add_provider_ptr &&
         gtk_style_context_get_state_ptr &&
         gtk_style_context_has_class_ptr &&
         gtk_style_context_set_scale_ptr &&
         gtk_style_context_set_state_ptr &&
         gtk_widget_get_pango_context_ptr &&
         gtk_widget_get_parent_ptr &&
         gtk_widget_get_preferred_size_ptr &&
         gtk_widget_get_scale_factor_ptr &&
         gtk_widget_get_style_context_ptr &&
         gtk_widget_hide_ptr &&
         gtk_widget_realize_ptr &&
         gtk_widget_set_can_focus_ptr &&
         gtk_widget_set_name_ptr &&
         gtk_widget_set_parent_ptr &&
         gtk_widget_set_sensitive_ptr &&
         gtk_widget_set_size_request_ptr &&
         gtk_widget_set_state_flags_ptr &&
         gtk_widget_show_ptr &&
         gtk_window_set_modal_ptr &&
         gtk_print_settings_set_printer_ptr;
}

// Initializes the module stubs.
void InitializeGtk(void* module) {
  const char gtk_settings_get_default_name[] = "gtk_settings_get_default";
  gtk_settings_get_default_ptr =
    reinterpret_cast<GtkSettings* (*)(void)>(
      dlsym(module, gtk_settings_get_default_name));
  if (!gtk_settings_get_default_ptr)
    LogDlerror(gtk_settings_get_default_name);
  const char gtk_widget_path_iter_set_object_name_name[] = "gtk_widget_path_iter_set_object_name";
  gtk_widget_path_iter_set_object_name_ptr =
    reinterpret_cast<void (*)(GtkWidgetPath* path, gint pos, const gchar* name)>(
      dlsym(module, gtk_widget_path_iter_set_object_name_name));
  if (!gtk_widget_path_iter_set_object_name_ptr)
    LogDlerror(gtk_widget_path_iter_set_object_name_name);
  const char gtk_widget_path_iter_add_class_name[] = "gtk_widget_path_iter_add_class";
  gtk_widget_path_iter_add_class_ptr =
    reinterpret_cast<void (*)(GtkWidgetPath* path, gint pos, const gchar* name)>(
      dlsym(module, gtk_widget_path_iter_add_class_name));
  if (!gtk_widget_path_iter_add_class_ptr)
    LogDlerror(gtk_widget_path_iter_add_class_name);
  const char gtk_widget_path_copy_name[] = "gtk_widget_path_copy";
  gtk_widget_path_copy_ptr =
    reinterpret_cast<GtkWidgetPath* (*)(const GtkWidgetPath* path)>(
      dlsym(module, gtk_widget_path_copy_name));
  if (!gtk_widget_path_copy_ptr)
    LogDlerror(gtk_widget_path_copy_name);
  const char gtk_widget_path_new_name[] = "gtk_widget_path_new";
  gtk_widget_path_new_ptr =
    reinterpret_cast<GtkWidgetPath* (*)(void)>(
      dlsym(module, gtk_widget_path_new_name));
  if (!gtk_widget_path_new_ptr)
    LogDlerror(gtk_widget_path_new_name);
  const char gtk_style_context_get_path_name[] = "gtk_style_context_get_path";
  gtk_style_context_get_path_ptr =
    reinterpret_cast<const GtkWidgetPath* (*)(GtkStyleContext* context)>(
      dlsym(module, gtk_style_context_get_path_name));
  if (!gtk_style_context_get_path_ptr)
    LogDlerror(gtk_style_context_get_path_name);
  const char gtk_widget_path_append_type_name[] = "gtk_widget_path_append_type";
  gtk_widget_path_append_type_ptr =
    reinterpret_cast<gint (*)(GtkWidgetPath* path, GType type)>(
      dlsym(module, gtk_widget_path_append_type_name));
  if (!gtk_widget_path_append_type_ptr)
    LogDlerror(gtk_widget_path_append_type_name);
  const char gtk_widget_path_iter_set_name_name[] = "gtk_widget_path_iter_set_name";
  gtk_widget_path_iter_set_name_ptr =
    reinterpret_cast<void (*)(GtkWidgetPath* path, gint pos, const gchar* name)>(
      dlsym(module, gtk_widget_path_iter_set_name_name));
  if (!gtk_widget_path_iter_set_name_ptr)
    LogDlerror(gtk_widget_path_iter_set_name_name);
  const char gtk_widget_path_iter_set_state_name[] = "gtk_widget_path_iter_set_state";
  gtk_widget_path_iter_set_state_ptr =
    reinterpret_cast<void (*)(GtkWidgetPath* path, gint pos, GtkStateFlags state)>(
      dlsym(module, gtk_widget_path_iter_set_state_name));
  if (!gtk_widget_path_iter_set_state_ptr)
    LogDlerror(gtk_widget_path_iter_set_state_name);
  const char gtk_style_context_new_name[] = "gtk_style_context_new";
  gtk_style_context_new_ptr =
    reinterpret_cast<GtkStyleContext* (*)(void)>(
      dlsym(module, gtk_style_context_new_name));
  if (!gtk_style_context_new_ptr)
    LogDlerror(gtk_style_context_new_name);
  const char gtk_style_context_set_path_name[] = "gtk_style_context_set_path";
  gtk_style_context_set_path_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, GtkWidgetPath* path)>(
      dlsym(module, gtk_style_context_set_path_name));
  if (!gtk_style_context_set_path_ptr)
    LogDlerror(gtk_style_context_set_path_name);
  const char gtk_style_context_set_parent_name[] = "gtk_style_context_set_parent";
  gtk_style_context_set_parent_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, GtkStyleContext* parent)>(
      dlsym(module, gtk_style_context_set_parent_name));
  if (!gtk_style_context_set_parent_ptr)
    LogDlerror(gtk_style_context_set_parent_name);
  const char gtk_widget_path_unref_name[] = "gtk_widget_path_unref";
  gtk_widget_path_unref_ptr =
    reinterpret_cast<void (*)(GtkWidgetPath* path)>(
      dlsym(module, gtk_widget_path_unref_name));
  if (!gtk_widget_path_unref_ptr)
    LogDlerror(gtk_widget_path_unref_name);
  const char gtk_style_context_get_parent_name[] = "gtk_style_context_get_parent";
  gtk_style_context_get_parent_ptr =
    reinterpret_cast<GtkStyleContext* (*)(GtkStyleContext* context)>(
      dlsym(module, gtk_style_context_get_parent_name));
  if (!gtk_style_context_get_parent_ptr)
    LogDlerror(gtk_style_context_get_parent_name);
  const char gtk_widget_set_css_classes_name[] = "gtk_widget_set_css_classes";
  gtk_widget_set_css_classes_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, const char** classes)>(
      dlsym(module, gtk_widget_set_css_classes_name));
  if (!gtk_widget_set_css_classes_ptr)
    LogDlerror(gtk_widget_set_css_classes_name);
  const char gtk_widget_measure_name[] = "gtk_widget_measure";
  gtk_widget_measure_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, GtkOrientation orientation, int for_size, int* minimum, int* natural, int* minimum_baseline, int* natural_baseline)>(
      dlsym(module, gtk_widget_measure_name));
  if (!gtk_widget_measure_ptr)
    LogDlerror(gtk_widget_measure_name);
  const char gtk_offscreen_window_new_name[] = "gtk_offscreen_window_new";
  gtk_offscreen_window_new_ptr =
    reinterpret_cast<GtkWidget* (*)(void)>(
      dlsym(module, gtk_offscreen_window_new_name));
  if (!gtk_offscreen_window_new_ptr)
    LogDlerror(gtk_offscreen_window_new_name);
  const char gtk_container_add_name[] = "gtk_container_add";
  gtk_container_add_ptr =
    reinterpret_cast<void (*)(GtkContainer* container, GtkWidget* widget)>(
      dlsym(module, gtk_container_add_name));
  if (!gtk_container_add_ptr)
    LogDlerror(gtk_container_add_name);
  const char gtk_widget_destroy_name[] = "gtk_widget_destroy";
  gtk_widget_destroy_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_destroy_name));
  if (!gtk_widget_destroy_ptr)
    LogDlerror(gtk_widget_destroy_name);
  const char gtk_bindings_activate_event_name[] = "gtk_bindings_activate_event";
  gtk_bindings_activate_event_ptr =
    reinterpret_cast<gboolean (*)(GObject* object, GdkEventKey* event)>(
      dlsym(module, gtk_bindings_activate_event_name));
  if (!gtk_bindings_activate_event_ptr)
    LogDlerror(gtk_bindings_activate_event_name);
  const char gtk_widget_set_events_name[] = "gtk_widget_set_events";
  gtk_widget_set_events_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, gint events)>(
      dlsym(module, gtk_widget_set_events_name));
  if (!gtk_widget_set_events_ptr)
    LogDlerror(gtk_widget_set_events_name);
  const char gtk_container_get_type_name[] = "gtk_container_get_type";
  gtk_container_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_container_get_type_name));
  if (!gtk_container_get_type_ptr)
    LogDlerror(gtk_container_get_type_name);
  const char gtk_icon_info_load_surface_name[] = "gtk_icon_info_load_surface";
  gtk_icon_info_load_surface_ptr =
    reinterpret_cast<cairo_surface_t* (*)(GtkIconInfo* icon_info, GdkWindow* for_window, GError** error)>(
      dlsym(module, gtk_icon_info_load_surface_name));
  if (!gtk_icon_info_load_surface_ptr)
    LogDlerror(gtk_icon_info_load_surface_name);
  const char gtk_style_context_get_valist_name[] = "gtk_style_context_get_valist";
  gtk_style_context_get_valist_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, GtkStateFlags state, va_list args)>(
      dlsym(module, gtk_style_context_get_valist_name));
  if (!gtk_style_context_get_valist_ptr)
    LogDlerror(gtk_style_context_get_valist_name);
  const char gtk_style_context_get_style_valist_name[] = "gtk_style_context_get_style_valist";
  gtk_style_context_get_style_valist_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, va_list args)>(
      dlsym(module, gtk_style_context_get_style_valist_name));
  if (!gtk_style_context_get_style_valist_ptr)
    LogDlerror(gtk_style_context_get_style_valist_name);
  const char gtk_snapshot_new_name[] = "gtk_snapshot_new";
  gtk_snapshot_new_ptr =
    reinterpret_cast<GtkSnapshot* (*)(void)>(
      dlsym(module, gtk_snapshot_new_name));
  if (!gtk_snapshot_new_ptr)
    LogDlerror(gtk_snapshot_new_name);
  const char gtk_snapshot_free_to_node_name[] = "gtk_snapshot_free_to_node";
  gtk_snapshot_free_to_node_ptr =
    reinterpret_cast<GskRenderNode* (*)(GtkSnapshot* snapshot)>(
      dlsym(module, gtk_snapshot_free_to_node_name));
  if (!gtk_snapshot_free_to_node_ptr)
    LogDlerror(gtk_snapshot_free_to_node_name);
  const char gtk_im_context_set_client_widget_name[] = "gtk_im_context_set_client_widget";
  gtk_im_context_set_client_widget_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context, GtkWidget* widget)>(
      dlsym(module, gtk_im_context_set_client_widget_name));
  if (!gtk_im_context_set_client_widget_ptr)
    LogDlerror(gtk_im_context_set_client_widget_name);
  const char gtk_widget_get_native_name[] = "gtk_widget_get_native";
  gtk_widget_get_native_ptr =
    reinterpret_cast<GtkNative* (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_native_name));
  if (!gtk_widget_get_native_ptr)
    LogDlerror(gtk_widget_get_native_name);
  const char gtk_native_get_surface_name[] = "gtk_native_get_surface";
  gtk_native_get_surface_ptr =
    reinterpret_cast<GdkSurface* (*)(GtkNative* native)>(
      dlsym(module, gtk_native_get_surface_name));
  if (!gtk_native_get_surface_ptr)
    LogDlerror(gtk_native_get_surface_name);
  const char gtk_im_context_filter_key_name[] = "gtk_im_context_filter_key";
  gtk_im_context_filter_key_ptr =
    reinterpret_cast<gboolean (*)(GtkIMContext* context, gboolean press, GdkSurface* surface, GdkDevice* device, guint32 time, guint keycode, GdkModifierType state, int group)>(
      dlsym(module, gtk_im_context_filter_key_name));
  if (!gtk_im_context_filter_key_ptr)
    LogDlerror(gtk_im_context_filter_key_name);
  const char gtk_im_context_set_client_window_name[] = "gtk_im_context_set_client_window";
  gtk_im_context_set_client_window_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context, GdkWindow* window)>(
      dlsym(module, gtk_im_context_set_client_window_name));
  if (!gtk_im_context_set_client_window_ptr)
    LogDlerror(gtk_im_context_set_client_window_name);
  const char gtk_file_chooser_set_filename_name[] = "gtk_file_chooser_set_filename";
  gtk_file_chooser_set_filename_ptr =
    reinterpret_cast<gboolean (*)(GtkFileChooser* chooser, const char* filename)>(
      dlsym(module, gtk_file_chooser_set_filename_name));
  if (!gtk_file_chooser_set_filename_ptr)
    LogDlerror(gtk_file_chooser_set_filename_name);
  const char gtk_file_chooser_list_filters_name[] = "gtk_file_chooser_list_filters";
  gtk_file_chooser_list_filters_ptr =
    reinterpret_cast<GSList* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_list_filters_name));
  if (!gtk_file_chooser_list_filters_ptr)
    LogDlerror(gtk_file_chooser_list_filters_name);
  const char gtk_file_chooser_get_filename_name[] = "gtk_file_chooser_get_filename";
  gtk_file_chooser_get_filename_ptr =
    reinterpret_cast<gchar* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_filename_name));
  if (!gtk_file_chooser_get_filename_ptr)
    LogDlerror(gtk_file_chooser_get_filename_name);
  const char gtk_file_chooser_get_filenames_name[] = "gtk_file_chooser_get_filenames";
  gtk_file_chooser_get_filenames_ptr =
    reinterpret_cast<GSList* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_filenames_name));
  if (!gtk_file_chooser_get_filenames_ptr)
    LogDlerror(gtk_file_chooser_get_filenames_name);
  const char gtk_file_chooser_get_preview_filename_name[] = "gtk_file_chooser_get_preview_filename";
  gtk_file_chooser_get_preview_filename_ptr =
    reinterpret_cast<char* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_preview_filename_name));
  if (!gtk_file_chooser_get_preview_filename_ptr)
    LogDlerror(gtk_file_chooser_get_preview_filename_name);
  const char gtk_file_chooser_set_preview_widget_active_name[] = "gtk_file_chooser_set_preview_widget_active";
  gtk_file_chooser_set_preview_widget_active_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, gboolean active)>(
      dlsym(module, gtk_file_chooser_set_preview_widget_active_name));
  if (!gtk_file_chooser_set_preview_widget_active_ptr)
    LogDlerror(gtk_file_chooser_set_preview_widget_active_name);
  const char gtk_file_chooser_set_preview_widget_name[] = "gtk_file_chooser_set_preview_widget";
  gtk_file_chooser_set_preview_widget_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, GtkWidget* preview_widget)>(
      dlsym(module, gtk_file_chooser_set_preview_widget_name));
  if (!gtk_file_chooser_set_preview_widget_ptr)
    LogDlerror(gtk_file_chooser_set_preview_widget_name);
  const char gtk_widget_hide_on_delete_name[] = "gtk_widget_hide_on_delete";
  gtk_widget_hide_on_delete_ptr =
    reinterpret_cast<gboolean (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_hide_on_delete_name));
  if (!gtk_widget_hide_on_delete_ptr)
    LogDlerror(gtk_widget_hide_on_delete_name);
  const char gtk_widget_show_all_name[] = "gtk_widget_show_all";
  gtk_widget_show_all_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_show_all_name));
  if (!gtk_widget_show_all_ptr)
    LogDlerror(gtk_widget_show_all_name);
  const char gtk_file_chooser_set_do_overwrite_confirmation_name[] = "gtk_file_chooser_set_do_overwrite_confirmation";
  gtk_file_chooser_set_do_overwrite_confirmation_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, gboolean do_overwrite_confirmation)>(
      dlsym(module, gtk_file_chooser_set_do_overwrite_confirmation_name));
  if (!gtk_file_chooser_set_do_overwrite_confirmation_ptr)
    LogDlerror(gtk_file_chooser_set_do_overwrite_confirmation_name);
  const char gtk_file_chooser_get_filters_name[] = "gtk_file_chooser_get_filters";
  gtk_file_chooser_get_filters_ptr =
    reinterpret_cast<GListModel* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_filters_name));
  if (!gtk_file_chooser_get_filters_ptr)
    LogDlerror(gtk_file_chooser_get_filters_name);
  const char gtk_window_set_hide_on_close_name[] = "gtk_window_set_hide_on_close";
  gtk_window_set_hide_on_close_ptr =
    reinterpret_cast<void (*)(GtkWindow* window, gboolean setting)>(
      dlsym(module, gtk_window_set_hide_on_close_name));
  if (!gtk_window_set_hide_on_close_ptr)
    LogDlerror(gtk_window_set_hide_on_close_name);
  const char gtk_icon_theme_lookup_icon_for_scale_name[] = "gtk_icon_theme_lookup_icon_for_scale";
  gtk_icon_theme_lookup_icon_for_scale_ptr =
    reinterpret_cast<GtkIconInfo* (*)(GtkIconTheme* icon_theme, const gchar* icon_name, gint size, gint scale, GtkIconLookupFlags flags)>(
      dlsym(module, gtk_icon_theme_lookup_icon_for_scale_name));
  if (!gtk_icon_theme_lookup_icon_for_scale_ptr)
    LogDlerror(gtk_icon_theme_lookup_icon_for_scale_name);
  const char gtk_icon_info_load_symbolic_for_context_name[] = "gtk_icon_info_load_symbolic_for_context";
  gtk_icon_info_load_symbolic_for_context_ptr =
    reinterpret_cast<GdkPixbuf* (*)(GtkIconInfo* icon_info, GtkStyleContext* context, gboolean* was_symbolic, GError** error)>(
      dlsym(module, gtk_icon_info_load_symbolic_for_context_name));
  if (!gtk_icon_info_load_symbolic_for_context_ptr)
    LogDlerror(gtk_icon_info_load_symbolic_for_context_name);
  const char gtk_snapshot_render_background_name[] = "gtk_snapshot_render_background";
  gtk_snapshot_render_background_ptr =
    reinterpret_cast<void (*)(GtkSnapshot* snapshot, GtkStyleContext* context, double x, double y, double width, double height)>(
      dlsym(module, gtk_snapshot_render_background_name));
  if (!gtk_snapshot_render_background_ptr)
    LogDlerror(gtk_snapshot_render_background_name);
  const char gtk_menu_get_type_name[] = "gtk_menu_get_type";
  gtk_menu_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_menu_get_type_name));
  if (!gtk_menu_get_type_ptr)
    LogDlerror(gtk_menu_get_type_name);
  const char gtk_menu_bar_get_type_name[] = "gtk_menu_bar_get_type";
  gtk_menu_bar_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_menu_bar_get_type_name));
  if (!gtk_menu_bar_get_type_ptr)
    LogDlerror(gtk_menu_bar_get_type_name);
  const char gtk_menu_item_get_type_name[] = "gtk_menu_item_get_type";
  gtk_menu_item_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_menu_item_get_type_name));
  if (!gtk_menu_item_get_type_ptr)
    LogDlerror(gtk_menu_item_get_type_name);
  const char gtk_style_context_add_provider_for_screen_name[] = "gtk_style_context_add_provider_for_screen";
  gtk_style_context_add_provider_for_screen_ptr =
    reinterpret_cast<void (*)(GdkScreen* screen, GtkStyleProvider* provider, guint priority)>(
      dlsym(module, gtk_style_context_add_provider_for_screen_name));
  if (!gtk_style_context_add_provider_for_screen_ptr)
    LogDlerror(gtk_style_context_add_provider_for_screen_name);
  const char gtk_style_context_add_provider_for_display_name[] = "gtk_style_context_add_provider_for_display";
  gtk_style_context_add_provider_for_display_ptr =
    reinterpret_cast<void (*)(GdkDisplay* display, GtkStyleProvider* provider, guint priority)>(
      dlsym(module, gtk_style_context_add_provider_for_display_name));
  if (!gtk_style_context_add_provider_for_display_ptr)
    LogDlerror(gtk_style_context_add_provider_for_display_name);
  const char gtk_style_context_remove_provider_for_screen_name[] = "gtk_style_context_remove_provider_for_screen";
  gtk_style_context_remove_provider_for_screen_ptr =
    reinterpret_cast<void (*)(GdkScreen* screen, GtkStyleProvider* provider)>(
      dlsym(module, gtk_style_context_remove_provider_for_screen_name));
  if (!gtk_style_context_remove_provider_for_screen_ptr)
    LogDlerror(gtk_style_context_remove_provider_for_screen_name);
  const char gtk_style_context_remove_provider_for_display_name[] = "gtk_style_context_remove_provider_for_display";
  gtk_style_context_remove_provider_for_display_ptr =
    reinterpret_cast<void (*)(GdkDisplay* display, GtkStyleProvider* provider)>(
      dlsym(module, gtk_style_context_remove_provider_for_display_name));
  if (!gtk_style_context_remove_provider_for_display_ptr)
    LogDlerror(gtk_style_context_remove_provider_for_display_name);
  const char gtk_window_destroy_name[] = "gtk_window_destroy";
  gtk_window_destroy_ptr =
    reinterpret_cast<void (*)(GtkWindow* window)>(
      dlsym(module, gtk_window_destroy_name));
  if (!gtk_window_destroy_ptr)
    LogDlerror(gtk_window_destroy_name);
  const char gtk_icon_theme_get_for_display_name[] = "gtk_icon_theme_get_for_display";
  gtk_icon_theme_get_for_display_ptr =
    reinterpret_cast<GtkIconTheme* (*)(GdkDisplay* display)>(
      dlsym(module, gtk_icon_theme_get_for_display_name));
  if (!gtk_icon_theme_get_for_display_ptr)
    LogDlerror(gtk_icon_theme_get_for_display_name);
  const char gtk_icon_theme_get_default_name[] = "gtk_icon_theme_get_default";
  gtk_icon_theme_get_default_ptr =
    reinterpret_cast<GtkIconTheme* (*)(void)>(
      dlsym(module, gtk_icon_theme_get_default_name));
  if (!gtk_icon_theme_get_default_ptr)
    LogDlerror(gtk_icon_theme_get_default_name);
  const char gtk_widget_path_iter_has_class_name[] = "gtk_widget_path_iter_has_class";
  gtk_widget_path_iter_has_class_ptr =
    reinterpret_cast<gboolean (*)(const GtkWidgetPath* path, gint pos, const gchar* name)>(
      dlsym(module, gtk_widget_path_iter_has_class_name));
  if (!gtk_widget_path_iter_has_class_ptr)
    LogDlerror(gtk_widget_path_iter_has_class_name);
  const char gtk_widget_get_window_name[] = "gtk_widget_get_window";
  gtk_widget_get_window_ptr =
    reinterpret_cast<GdkWindow* (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_window_name));
  if (!gtk_widget_get_window_ptr)
    LogDlerror(gtk_widget_get_window_name);
  const char gtk_main_do_event_name[] = "gtk_main_do_event";
  gtk_main_do_event_ptr =
    reinterpret_cast<void (*)(GdkEvent *event)>(
      dlsym(module, gtk_main_do_event_name));
  if (!gtk_main_do_event_ptr)
    LogDlerror(gtk_main_do_event_name);
  const char gtk_get_major_version_name[] = "gtk_get_major_version";
  gtk_get_major_version_ptr =
    reinterpret_cast<guint (*)(void)>(
      dlsym(module, gtk_get_major_version_name));
  if (!gtk_get_major_version_ptr)
    LogDlerror(gtk_get_major_version_name);
  const char gtk_get_minor_version_name[] = "gtk_get_minor_version";
  gtk_get_minor_version_ptr =
    reinterpret_cast<guint (*)(void)>(
      dlsym(module, gtk_get_minor_version_name));
  if (!gtk_get_minor_version_ptr)
    LogDlerror(gtk_get_minor_version_name);
  const char gtk_get_micro_version_name[] = "gtk_get_micro_version";
  gtk_get_micro_version_ptr =
    reinterpret_cast<guint (*)(void)>(
      dlsym(module, gtk_get_micro_version_name));
  if (!gtk_get_micro_version_ptr)
    LogDlerror(gtk_get_micro_version_name);
  const char gtk_window_present_name[] = "gtk_window_present";
  gtk_window_present_ptr =
    reinterpret_cast<void (*)(GtkWindow* window)>(
      dlsym(module, gtk_window_present_name));
  if (!gtk_window_present_ptr)
    LogDlerror(gtk_window_present_name);
  const char gtk_window_present_with_time_name[] = "gtk_window_present_with_time";
  gtk_window_present_with_time_ptr =
    reinterpret_cast<void (*)(GtkWindow* window, guint32 timestamp)>(
      dlsym(module, gtk_window_present_with_time_name));
  if (!gtk_window_present_with_time_ptr)
    LogDlerror(gtk_window_present_with_time_name);
  const char gtk_box_get_type_name[] = "gtk_box_get_type";
  gtk_box_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_box_get_type_name));
  if (!gtk_box_get_type_ptr)
    LogDlerror(gtk_box_get_type_name);
  const char gtk_button_get_type_name[] = "gtk_button_get_type";
  gtk_button_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_button_get_type_name));
  if (!gtk_button_get_type_ptr)
    LogDlerror(gtk_button_get_type_name);
  const char gtk_cell_view_get_type_name[] = "gtk_cell_view_get_type";
  gtk_cell_view_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_cell_view_get_type_name));
  if (!gtk_cell_view_get_type_ptr)
    LogDlerror(gtk_cell_view_get_type_name);
  const char gtk_combo_box_text_get_type_name[] = "gtk_combo_box_text_get_type";
  gtk_combo_box_text_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_combo_box_text_get_type_name));
  if (!gtk_combo_box_text_get_type_ptr)
    LogDlerror(gtk_combo_box_text_get_type_name);
  const char gtk_entry_get_type_name[] = "gtk_entry_get_type";
  gtk_entry_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_entry_get_type_name));
  if (!gtk_entry_get_type_ptr)
    LogDlerror(gtk_entry_get_type_name);
  const char gtk_file_chooser_get_type_name[] = "gtk_file_chooser_get_type";
  gtk_file_chooser_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_file_chooser_get_type_name));
  if (!gtk_file_chooser_get_type_ptr)
    LogDlerror(gtk_file_chooser_get_type_name);
  const char gtk_frame_get_type_name[] = "gtk_frame_get_type";
  gtk_frame_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_frame_get_type_name));
  if (!gtk_frame_get_type_ptr)
    LogDlerror(gtk_frame_get_type_name);
  const char gtk_header_bar_get_type_name[] = "gtk_header_bar_get_type";
  gtk_header_bar_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_header_bar_get_type_name));
  if (!gtk_header_bar_get_type_ptr)
    LogDlerror(gtk_header_bar_get_type_name);
  const char gtk_image_get_type_name[] = "gtk_image_get_type";
  gtk_image_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_image_get_type_name));
  if (!gtk_image_get_type_ptr)
    LogDlerror(gtk_image_get_type_name);
  const char gtk_info_bar_get_type_name[] = "gtk_info_bar_get_type";
  gtk_info_bar_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_info_bar_get_type_name));
  if (!gtk_info_bar_get_type_ptr)
    LogDlerror(gtk_info_bar_get_type_name);
  const char gtk_label_get_type_name[] = "gtk_label_get_type";
  gtk_label_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_label_get_type_name));
  if (!gtk_label_get_type_ptr)
    LogDlerror(gtk_label_get_type_name);
  const char gtk_print_unix_dialog_get_type_name[] = "gtk_print_unix_dialog_get_type";
  gtk_print_unix_dialog_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_print_unix_dialog_get_type_name));
  if (!gtk_print_unix_dialog_get_type_ptr)
    LogDlerror(gtk_print_unix_dialog_get_type_name);
  const char gtk_range_get_type_name[] = "gtk_range_get_type";
  gtk_range_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_range_get_type_name));
  if (!gtk_range_get_type_ptr)
    LogDlerror(gtk_range_get_type_name);
  const char gtk_scale_get_type_name[] = "gtk_scale_get_type";
  gtk_scale_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_scale_get_type_name));
  if (!gtk_scale_get_type_ptr)
    LogDlerror(gtk_scale_get_type_name);
  const char gtk_scrollbar_get_type_name[] = "gtk_scrollbar_get_type";
  gtk_scrollbar_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_scrollbar_get_type_name));
  if (!gtk_scrollbar_get_type_ptr)
    LogDlerror(gtk_scrollbar_get_type_name);
  const char gtk_scrolled_window_get_type_name[] = "gtk_scrolled_window_get_type";
  gtk_scrolled_window_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_scrolled_window_get_type_name));
  if (!gtk_scrolled_window_get_type_ptr)
    LogDlerror(gtk_scrolled_window_get_type_name);
  const char gtk_separator_get_type_name[] = "gtk_separator_get_type";
  gtk_separator_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_separator_get_type_name));
  if (!gtk_separator_get_type_ptr)
    LogDlerror(gtk_separator_get_type_name);
  const char gtk_spinner_get_type_name[] = "gtk_spinner_get_type";
  gtk_spinner_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_spinner_get_type_name));
  if (!gtk_spinner_get_type_ptr)
    LogDlerror(gtk_spinner_get_type_name);
  const char gtk_style_provider_get_type_name[] = "gtk_style_provider_get_type";
  gtk_style_provider_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_style_provider_get_type_name));
  if (!gtk_style_provider_get_type_ptr)
    LogDlerror(gtk_style_provider_get_type_name);
  const char gtk_text_view_get_type_name[] = "gtk_text_view_get_type";
  gtk_text_view_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_text_view_get_type_name));
  if (!gtk_text_view_get_type_ptr)
    LogDlerror(gtk_text_view_get_type_name);
  const char gtk_toggle_button_get_type_name[] = "gtk_toggle_button_get_type";
  gtk_toggle_button_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_toggle_button_get_type_name));
  if (!gtk_toggle_button_get_type_ptr)
    LogDlerror(gtk_toggle_button_get_type_name);
  const char gtk_tree_model_get_type_name[] = "gtk_tree_model_get_type";
  gtk_tree_model_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_tree_model_get_type_name));
  if (!gtk_tree_model_get_type_ptr)
    LogDlerror(gtk_tree_model_get_type_name);
  const char gtk_tree_view_get_type_name[] = "gtk_tree_view_get_type";
  gtk_tree_view_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_tree_view_get_type_name));
  if (!gtk_tree_view_get_type_ptr)
    LogDlerror(gtk_tree_view_get_type_name);
  const char gtk_widget_get_type_name[] = "gtk_widget_get_type";
  gtk_widget_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_widget_get_type_name));
  if (!gtk_widget_get_type_ptr)
    LogDlerror(gtk_widget_get_type_name);
  const char gtk_window_get_type_name[] = "gtk_window_get_type";
  gtk_window_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_window_get_type_name));
  if (!gtk_window_get_type_ptr)
    LogDlerror(gtk_window_get_type_name);
  const char gtk_combo_box_new_with_model_name[] = "gtk_combo_box_new_with_model";
  gtk_combo_box_new_with_model_ptr =
    reinterpret_cast<GtkWidget* (*)(GtkTreeModel* model)>(
      dlsym(module, gtk_combo_box_new_with_model_name));
  if (!gtk_combo_box_new_with_model_ptr)
    LogDlerror(gtk_combo_box_new_with_model_name);
  const char gtk_css_provider_new_name[] = "gtk_css_provider_new";
  gtk_css_provider_new_ptr =
    reinterpret_cast<GtkCssProvider* (*)(void)>(
      dlsym(module, gtk_css_provider_new_name));
  if (!gtk_css_provider_new_ptr)
    LogDlerror(gtk_css_provider_new_name);
  const char gtk_disable_setlocale_name[] = "gtk_disable_setlocale";
  gtk_disable_setlocale_ptr =
    reinterpret_cast<void (*)(void)>(
      dlsym(module, gtk_disable_setlocale_name));
  if (!gtk_disable_setlocale_ptr)
    LogDlerror(gtk_disable_setlocale_name);
  const char gtk_enumerate_printers_name[] = "gtk_enumerate_printers";
  gtk_enumerate_printers_ptr =
    reinterpret_cast<void (*)(GtkPrinterFunc func, gpointer data, GDestroyNotify destroy, gboolean wait)>(
      dlsym(module, gtk_enumerate_printers_name));
  if (!gtk_enumerate_printers_ptr)
    LogDlerror(gtk_enumerate_printers_name);
  const char gtk_print_backend_load_modules_name[] = "gtk_print_backend_load_modules";
  gtk_print_backend_load_modules_ptr =
    reinterpret_cast<GList* (*)(void)>(
      dlsym(module, gtk_print_backend_load_modules_name));
  if (!gtk_print_backend_load_modules_ptr)
    LogDlerror(gtk_print_backend_load_modules_name);
  const char gtk_print_backend_get_printers_name[] = "gtk_print_backend_get_printers";
  gtk_print_backend_get_printers_ptr =
    reinterpret_cast<GListModel* (*)(GtkPrintBackend* print_backend)>(
      dlsym(module, gtk_print_backend_get_printers_name));
  if (!gtk_print_backend_get_printers_ptr)
    LogDlerror(gtk_print_backend_get_printers_name);
  const char gtk_print_backend_get_printer_list_name[] = "gtk_print_backend_get_printer_list";
  gtk_print_backend_get_printer_list_ptr =
    reinterpret_cast<GList* (*)(GtkPrintBackend* print_backend)>(
      dlsym(module, gtk_print_backend_get_printer_list_name));
  if (!gtk_print_backend_get_printer_list_ptr)
    LogDlerror(gtk_print_backend_get_printer_list_name);
  const char gtk_file_chooser_add_filter_name[] = "gtk_file_chooser_add_filter";
  gtk_file_chooser_add_filter_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, GtkFileFilter* filter)>(
      dlsym(module, gtk_file_chooser_add_filter_name));
  if (!gtk_file_chooser_add_filter_ptr)
    LogDlerror(gtk_file_chooser_add_filter_name);
  const char gtk_file_chooser_get_file_name[] = "gtk_file_chooser_get_file";
  gtk_file_chooser_get_file_ptr =
    reinterpret_cast<GFile* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_file_name));
  if (!gtk_file_chooser_get_file_ptr)
    LogDlerror(gtk_file_chooser_get_file_name);
  const char gtk_file_chooser_get_filter_name[] = "gtk_file_chooser_get_filter";
  gtk_file_chooser_get_filter_ptr =
    reinterpret_cast<GtkFileFilter* (*)(GtkFileChooser* chooser)>(
      dlsym(module, gtk_file_chooser_get_filter_name));
  if (!gtk_file_chooser_get_filter_ptr)
    LogDlerror(gtk_file_chooser_get_filter_name);
  const char gtk_file_chooser_set_create_folders_name[] = "gtk_file_chooser_set_create_folders";
  gtk_file_chooser_set_create_folders_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, gboolean create_folders)>(
      dlsym(module, gtk_file_chooser_set_create_folders_name));
  if (!gtk_file_chooser_set_create_folders_ptr)
    LogDlerror(gtk_file_chooser_set_create_folders_name);
  const char gtk_file_chooser_set_current_name_name[] = "gtk_file_chooser_set_current_name";
  gtk_file_chooser_set_current_name_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, const gchar* name)>(
      dlsym(module, gtk_file_chooser_set_current_name_name));
  if (!gtk_file_chooser_set_current_name_ptr)
    LogDlerror(gtk_file_chooser_set_current_name_name);
  const char gtk_file_chooser_set_file_name[] = "gtk_file_chooser_set_file";
  gtk_file_chooser_set_file_ptr =
    reinterpret_cast<gboolean (*)(GtkFileChooser* chooser, GFile* file, GError** error)>(
      dlsym(module, gtk_file_chooser_set_file_name));
  if (!gtk_file_chooser_set_file_ptr)
    LogDlerror(gtk_file_chooser_set_file_name);
  const char gtk_file_chooser_set_filter_name[] = "gtk_file_chooser_set_filter";
  gtk_file_chooser_set_filter_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, GtkFileFilter* filter)>(
      dlsym(module, gtk_file_chooser_set_filter_name));
  if (!gtk_file_chooser_set_filter_ptr)
    LogDlerror(gtk_file_chooser_set_filter_name);
  const char gtk_file_chooser_set_select_multiple_name[] = "gtk_file_chooser_set_select_multiple";
  gtk_file_chooser_set_select_multiple_ptr =
    reinterpret_cast<void (*)(GtkFileChooser* chooser, gboolean select_multiple)>(
      dlsym(module, gtk_file_chooser_set_select_multiple_name));
  if (!gtk_file_chooser_set_select_multiple_ptr)
    LogDlerror(gtk_file_chooser_set_select_multiple_name);
  const char gtk_file_filter_add_mime_type_name[] = "gtk_file_filter_add_mime_type";
  gtk_file_filter_add_mime_type_ptr =
    reinterpret_cast<void (*)(GtkFileFilter* filter, const gchar* mime_type)>(
      dlsym(module, gtk_file_filter_add_mime_type_name));
  if (!gtk_file_filter_add_mime_type_ptr)
    LogDlerror(gtk_file_filter_add_mime_type_name);
  const char gtk_file_filter_add_pattern_name[] = "gtk_file_filter_add_pattern";
  gtk_file_filter_add_pattern_ptr =
    reinterpret_cast<void (*)(GtkFileFilter* filter, const gchar* pattern)>(
      dlsym(module, gtk_file_filter_add_pattern_name));
  if (!gtk_file_filter_add_pattern_ptr)
    LogDlerror(gtk_file_filter_add_pattern_name);
  const char gtk_file_filter_new_name[] = "gtk_file_filter_new";
  gtk_file_filter_new_ptr =
    reinterpret_cast<GtkFileFilter* (*)(void)>(
      dlsym(module, gtk_file_filter_new_name));
  if (!gtk_file_filter_new_ptr)
    LogDlerror(gtk_file_filter_new_name);
  const char gtk_file_filter_set_name_name[] = "gtk_file_filter_set_name";
  gtk_file_filter_set_name_ptr =
    reinterpret_cast<void (*)(GtkFileFilter* filter, const gchar* name)>(
      dlsym(module, gtk_file_filter_set_name_name));
  if (!gtk_file_filter_set_name_ptr)
    LogDlerror(gtk_file_filter_set_name_name);
  const char gtk_image_new_name[] = "gtk_image_new";
  gtk_image_new_ptr =
    reinterpret_cast<GtkWidget* (*)(void)>(
      dlsym(module, gtk_image_new_name));
  if (!gtk_image_new_ptr)
    LogDlerror(gtk_image_new_name);
  const char gtk_image_set_from_pixbuf_name[] = "gtk_image_set_from_pixbuf";
  gtk_image_set_from_pixbuf_ptr =
    reinterpret_cast<void (*)(GtkImage* image, GdkPixbuf* pixbuf)>(
      dlsym(module, gtk_image_set_from_pixbuf_name));
  if (!gtk_image_set_from_pixbuf_ptr)
    LogDlerror(gtk_image_set_from_pixbuf_name);
  const char gtk_im_context_focus_in_name[] = "gtk_im_context_focus_in";
  gtk_im_context_focus_in_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context)>(
      dlsym(module, gtk_im_context_focus_in_name));
  if (!gtk_im_context_focus_in_ptr)
    LogDlerror(gtk_im_context_focus_in_name);
  const char gtk_im_context_focus_out_name[] = "gtk_im_context_focus_out";
  gtk_im_context_focus_out_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context)>(
      dlsym(module, gtk_im_context_focus_out_name));
  if (!gtk_im_context_focus_out_ptr)
    LogDlerror(gtk_im_context_focus_out_name);
  const char gtk_im_context_get_preedit_string_name[] = "gtk_im_context_get_preedit_string";
  gtk_im_context_get_preedit_string_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context, gchar** str, PangoAttrList** attrs, gint* cursor_pos)>(
      dlsym(module, gtk_im_context_get_preedit_string_name));
  if (!gtk_im_context_get_preedit_string_ptr)
    LogDlerror(gtk_im_context_get_preedit_string_name);
  const char gtk_im_context_reset_name[] = "gtk_im_context_reset";
  gtk_im_context_reset_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context)>(
      dlsym(module, gtk_im_context_reset_name));
  if (!gtk_im_context_reset_ptr)
    LogDlerror(gtk_im_context_reset_name);
  const char gtk_im_context_set_cursor_location_name[] = "gtk_im_context_set_cursor_location";
  gtk_im_context_set_cursor_location_ptr =
    reinterpret_cast<void (*)(GtkIMContext* context, const GdkRectangle* area)>(
      dlsym(module, gtk_im_context_set_cursor_location_name));
  if (!gtk_im_context_set_cursor_location_ptr)
    LogDlerror(gtk_im_context_set_cursor_location_name);
  const char gtk_im_context_simple_new_name[] = "gtk_im_context_simple_new";
  gtk_im_context_simple_new_ptr =
    reinterpret_cast<GtkIMContext* (*)(void)>(
      dlsym(module, gtk_im_context_simple_new_name));
  if (!gtk_im_context_simple_new_ptr)
    LogDlerror(gtk_im_context_simple_new_name);
  const char gtk_im_multicontext_new_name[] = "gtk_im_multicontext_new";
  gtk_im_multicontext_new_ptr =
    reinterpret_cast<GtkIMContext* (*)(void)>(
      dlsym(module, gtk_im_multicontext_new_name));
  if (!gtk_im_multicontext_new_ptr)
    LogDlerror(gtk_im_multicontext_new_name);
  const char gtk_im_multicontext_get_context_id_name[] = "gtk_im_multicontext_get_context_id";
  gtk_im_multicontext_get_context_id_ptr =
    reinterpret_cast<const char* (*)(GtkIMMulticontext* context)>(
      dlsym(module, gtk_im_multicontext_get_context_id_name));
  if (!gtk_im_multicontext_get_context_id_ptr)
    LogDlerror(gtk_im_multicontext_get_context_id_name);
  const char gtk_im_multicontext_set_context_id_name[] = "gtk_im_multicontext_set_context_id";
  gtk_im_multicontext_set_context_id_ptr =
    reinterpret_cast<void (*)(GtkIMMulticontext* context, const char* context_id)>(
      dlsym(module, gtk_im_multicontext_set_context_id_name));
  if (!gtk_im_multicontext_set_context_id_ptr)
    LogDlerror(gtk_im_multicontext_set_context_id_name);
  const char gtk_im_multicontext_get_type_name[] = "gtk_im_multicontext_get_type";
  gtk_im_multicontext_get_type_ptr =
    reinterpret_cast<GType (*)(void)>(
      dlsym(module, gtk_im_multicontext_get_type_name));
  if (!gtk_im_multicontext_get_type_ptr)
    LogDlerror(gtk_im_multicontext_get_type_name);
  const char gtk_label_new_name[] = "gtk_label_new";
  gtk_label_new_ptr =
    reinterpret_cast<GtkWidget* (*)(const gchar* str)>(
      dlsym(module, gtk_label_new_name));
  if (!gtk_label_new_ptr)
    LogDlerror(gtk_label_new_name);
  const char gtk_page_setup_get_left_margin_name[] = "gtk_page_setup_get_left_margin";
  gtk_page_setup_get_left_margin_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_left_margin_name));
  if (!gtk_page_setup_get_left_margin_ptr)
    LogDlerror(gtk_page_setup_get_left_margin_name);
  const char gtk_page_setup_get_page_height_name[] = "gtk_page_setup_get_page_height";
  gtk_page_setup_get_page_height_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_page_height_name));
  if (!gtk_page_setup_get_page_height_ptr)
    LogDlerror(gtk_page_setup_get_page_height_name);
  const char gtk_page_setup_get_page_width_name[] = "gtk_page_setup_get_page_width";
  gtk_page_setup_get_page_width_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_page_width_name));
  if (!gtk_page_setup_get_page_width_ptr)
    LogDlerror(gtk_page_setup_get_page_width_name);
  const char gtk_page_setup_get_paper_height_name[] = "gtk_page_setup_get_paper_height";
  gtk_page_setup_get_paper_height_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_paper_height_name));
  if (!gtk_page_setup_get_paper_height_ptr)
    LogDlerror(gtk_page_setup_get_paper_height_name);
  const char gtk_page_setup_get_paper_size_name[] = "gtk_page_setup_get_paper_size";
  gtk_page_setup_get_paper_size_ptr =
    reinterpret_cast<GtkPaperSize* (*)(GtkPageSetup* setup)>(
      dlsym(module, gtk_page_setup_get_paper_size_name));
  if (!gtk_page_setup_get_paper_size_ptr)
    LogDlerror(gtk_page_setup_get_paper_size_name);
  const char gtk_page_setup_get_paper_width_name[] = "gtk_page_setup_get_paper_width";
  gtk_page_setup_get_paper_width_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_paper_width_name));
  if (!gtk_page_setup_get_paper_width_ptr)
    LogDlerror(gtk_page_setup_get_paper_width_name);
  const char gtk_page_setup_get_top_margin_name[] = "gtk_page_setup_get_top_margin";
  gtk_page_setup_get_top_margin_ptr =
    reinterpret_cast<gdouble (*)(GtkPageSetup* setup, GtkUnit unit)>(
      dlsym(module, gtk_page_setup_get_top_margin_name));
  if (!gtk_page_setup_get_top_margin_ptr)
    LogDlerror(gtk_page_setup_get_top_margin_name);
  const char gtk_page_setup_load_key_file_name[] = "gtk_page_setup_load_key_file";
  gtk_page_setup_load_key_file_ptr =
    reinterpret_cast<gboolean (*)(GtkPageSetup* setup, GKeyFile* key_file, const char* group_name, GError** error)>(
      dlsym(module, gtk_page_setup_load_key_file_name));
  if (!gtk_page_setup_load_key_file_ptr)
    LogDlerror(gtk_page_setup_load_key_file_name);
  const char gtk_page_setup_new_name[] = "gtk_page_setup_new";
  gtk_page_setup_new_ptr =
    reinterpret_cast<GtkPageSetup* (*)(void)>(
      dlsym(module, gtk_page_setup_new_name));
  if (!gtk_page_setup_new_ptr)
    LogDlerror(gtk_page_setup_new_name);
  const char gtk_page_setup_set_paper_size_name[] = "gtk_page_setup_set_paper_size";
  gtk_page_setup_set_paper_size_ptr =
    reinterpret_cast<void (*)(GtkPageSetup* setup, GtkPaperSize* size)>(
      dlsym(module, gtk_page_setup_set_paper_size_name));
  if (!gtk_page_setup_set_paper_size_ptr)
    LogDlerror(gtk_page_setup_set_paper_size_name);
  const char gtk_page_setup_to_key_file_name[] = "gtk_page_setup_to_key_file";
  gtk_page_setup_to_key_file_ptr =
    reinterpret_cast<void (*)(GtkPageSetup* setup, GKeyFile* key_file, const gchar* group_name)>(
      dlsym(module, gtk_page_setup_to_key_file_name));
  if (!gtk_page_setup_to_key_file_ptr)
    LogDlerror(gtk_page_setup_to_key_file_name);
  const char gtk_paper_size_free_name[] = "gtk_paper_size_free";
  gtk_paper_size_free_ptr =
    reinterpret_cast<void (*)(GtkPaperSize* size)>(
      dlsym(module, gtk_paper_size_free_name));
  if (!gtk_paper_size_free_ptr)
    LogDlerror(gtk_paper_size_free_name);
  const char gtk_paper_size_get_height_name[] = "gtk_paper_size_get_height";
  gtk_paper_size_get_height_ptr =
    reinterpret_cast<gdouble (*)(GtkPaperSize* size, GtkUnit unit)>(
      dlsym(module, gtk_paper_size_get_height_name));
  if (!gtk_paper_size_get_height_ptr)
    LogDlerror(gtk_paper_size_get_height_name);
  const char gtk_paper_size_get_paper_sizes_name[] = "gtk_paper_size_get_paper_sizes";
  gtk_paper_size_get_paper_sizes_ptr =
    reinterpret_cast<GList* (*)(gboolean include_custom)>(
      dlsym(module, gtk_paper_size_get_paper_sizes_name));
  if (!gtk_paper_size_get_paper_sizes_ptr)
    LogDlerror(gtk_paper_size_get_paper_sizes_name);
  const char gtk_paper_size_get_ppd_name_name[] = "gtk_paper_size_get_ppd_name";
  gtk_paper_size_get_ppd_name_ptr =
    reinterpret_cast<const gchar* (*)(GtkPaperSize* size)>(
      dlsym(module, gtk_paper_size_get_ppd_name_name));
  if (!gtk_paper_size_get_ppd_name_ptr)
    LogDlerror(gtk_paper_size_get_ppd_name_name);
  const char gtk_paper_size_get_width_name[] = "gtk_paper_size_get_width";
  gtk_paper_size_get_width_ptr =
    reinterpret_cast<gdouble (*)(GtkPaperSize* size, GtkUnit unit)>(
      dlsym(module, gtk_paper_size_get_width_name));
  if (!gtk_paper_size_get_width_ptr)
    LogDlerror(gtk_paper_size_get_width_name);
  const char gtk_paper_size_new_custom_name[] = "gtk_paper_size_new_custom";
  gtk_paper_size_new_custom_ptr =
    reinterpret_cast<GtkPaperSize* (*)(const gchar* name, const gchar* display_name, gdouble width, gdouble height, GtkUnit unit)>(
      dlsym(module, gtk_paper_size_new_custom_name));
  if (!gtk_paper_size_new_custom_ptr)
    LogDlerror(gtk_paper_size_new_custom_name);
  const char gtk_printer_get_default_page_size_name[] = "gtk_printer_get_default_page_size";
  gtk_printer_get_default_page_size_ptr =
    reinterpret_cast<GtkPageSetup* (*)(GtkPrinter* printer)>(
      dlsym(module, gtk_printer_get_default_page_size_name));
  if (!gtk_printer_get_default_page_size_ptr)
    LogDlerror(gtk_printer_get_default_page_size_name);
  const char gtk_printer_get_name_name[] = "gtk_printer_get_name";
  gtk_printer_get_name_ptr =
    reinterpret_cast<const gchar* (*)(GtkPrinter* printer)>(
      dlsym(module, gtk_printer_get_name_name));
  if (!gtk_printer_get_name_ptr)
    LogDlerror(gtk_printer_get_name_name);
  const char gtk_printer_is_default_name[] = "gtk_printer_is_default";
  gtk_printer_is_default_ptr =
    reinterpret_cast<gboolean (*)(GtkPrinter* printer)>(
      dlsym(module, gtk_printer_is_default_name));
  if (!gtk_printer_is_default_ptr)
    LogDlerror(gtk_printer_is_default_name);
  const char gtk_print_job_new_name[] = "gtk_print_job_new";
  gtk_print_job_new_ptr =
    reinterpret_cast<GtkPrintJob* (*)(const gchar* title, GtkPrinter* printer, GtkPrintSettings* settings, GtkPageSetup* page_setup)>(
      dlsym(module, gtk_print_job_new_name));
  if (!gtk_print_job_new_ptr)
    LogDlerror(gtk_print_job_new_name);
  const char gtk_print_job_send_name[] = "gtk_print_job_send";
  gtk_print_job_send_ptr =
    reinterpret_cast<void (*)(GtkPrintJob* job, GtkPrintJobCompleteFunc callback, gpointer user_data, GDestroyNotify dnotify)>(
      dlsym(module, gtk_print_job_send_name));
  if (!gtk_print_job_send_ptr)
    LogDlerror(gtk_print_job_send_name);
  const char gtk_print_job_set_source_file_name[] = "gtk_print_job_set_source_file";
  gtk_print_job_set_source_file_ptr =
    reinterpret_cast<gboolean (*)(GtkPrintJob* job, const gchar* filename, GError** error)>(
      dlsym(module, gtk_print_job_set_source_file_name));
  if (!gtk_print_job_set_source_file_ptr)
    LogDlerror(gtk_print_job_set_source_file_name);
  const char gtk_print_settings_copy_name[] = "gtk_print_settings_copy";
  gtk_print_settings_copy_ptr =
    reinterpret_cast<GtkPrintSettings* (*)(GtkPrintSettings* other)>(
      dlsym(module, gtk_print_settings_copy_name));
  if (!gtk_print_settings_copy_ptr)
    LogDlerror(gtk_print_settings_copy_name);
  const char gtk_print_settings_get_orientation_name[] = "gtk_print_settings_get_orientation";
  gtk_print_settings_get_orientation_ptr =
    reinterpret_cast<GtkPageOrientation (*)(GtkPrintSettings* settings)>(
      dlsym(module, gtk_print_settings_get_orientation_name));
  if (!gtk_print_settings_get_orientation_ptr)
    LogDlerror(gtk_print_settings_get_orientation_name);
  const char gtk_print_settings_get_page_ranges_name[] = "gtk_print_settings_get_page_ranges";
  gtk_print_settings_get_page_ranges_ptr =
    reinterpret_cast<GtkPageRange* (*)(GtkPrintSettings* settings, gint *num_ranges)>(
      dlsym(module, gtk_print_settings_get_page_ranges_name));
  if (!gtk_print_settings_get_page_ranges_ptr)
    LogDlerror(gtk_print_settings_get_page_ranges_name);
  const char gtk_print_settings_set_page_ranges_name[] = "gtk_print_settings_set_page_ranges";
  gtk_print_settings_set_page_ranges_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, GtkPageRange* page_ranges, gint num_ranges)>(
      dlsym(module, gtk_print_settings_set_page_ranges_name));
  if (!gtk_print_settings_set_page_ranges_ptr)
    LogDlerror(gtk_print_settings_set_page_ranges_name);
  const char gtk_print_settings_get_printer_name[] = "gtk_print_settings_get_printer";
  gtk_print_settings_get_printer_ptr =
    reinterpret_cast<const gchar* (*)(GtkPrintSettings* settings)>(
      dlsym(module, gtk_print_settings_get_printer_name));
  if (!gtk_print_settings_get_printer_ptr)
    LogDlerror(gtk_print_settings_get_printer_name);
  const char gtk_print_settings_get_print_pages_name[] = "gtk_print_settings_get_print_pages";
  gtk_print_settings_get_print_pages_ptr =
    reinterpret_cast<GtkPrintPages (*)(GtkPrintSettings* settings)>(
      dlsym(module, gtk_print_settings_get_print_pages_name));
  if (!gtk_print_settings_get_print_pages_ptr)
    LogDlerror(gtk_print_settings_get_print_pages_name);
  const char gtk_print_settings_get_resolution_name[] = "gtk_print_settings_get_resolution";
  gtk_print_settings_get_resolution_ptr =
    reinterpret_cast<gint (*)(GtkPrintSettings* settings)>(
      dlsym(module, gtk_print_settings_get_resolution_name));
  if (!gtk_print_settings_get_resolution_ptr)
    LogDlerror(gtk_print_settings_get_resolution_name);
  const char gtk_print_settings_load_key_file_name[] = "gtk_print_settings_load_key_file";
  gtk_print_settings_load_key_file_ptr =
    reinterpret_cast<gboolean (*)(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name, GError** error)>(
      dlsym(module, gtk_print_settings_load_key_file_name));
  if (!gtk_print_settings_load_key_file_ptr)
    LogDlerror(gtk_print_settings_load_key_file_name);
  const char gtk_print_settings_new_name[] = "gtk_print_settings_new";
  gtk_print_settings_new_ptr =
    reinterpret_cast<GtkPrintSettings* (*)(void)>(
      dlsym(module, gtk_print_settings_new_name));
  if (!gtk_print_settings_new_ptr)
    LogDlerror(gtk_print_settings_new_name);
  const char gtk_print_settings_set_name[] = "gtk_print_settings_set";
  gtk_print_settings_set_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, const gchar* key, const gchar* value)>(
      dlsym(module, gtk_print_settings_set_name));
  if (!gtk_print_settings_set_ptr)
    LogDlerror(gtk_print_settings_set_name);
  const char gtk_print_settings_set_collate_name[] = "gtk_print_settings_set_collate";
  gtk_print_settings_set_collate_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, gboolean collate)>(
      dlsym(module, gtk_print_settings_set_collate_name));
  if (!gtk_print_settings_set_collate_ptr)
    LogDlerror(gtk_print_settings_set_collate_name);
  const char gtk_print_settings_set_n_copies_name[] = "gtk_print_settings_set_n_copies";
  gtk_print_settings_set_n_copies_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, gint num_copies)>(
      dlsym(module, gtk_print_settings_set_n_copies_name));
  if (!gtk_print_settings_set_n_copies_ptr)
    LogDlerror(gtk_print_settings_set_n_copies_name);
  const char gtk_print_settings_set_orientation_name[] = "gtk_print_settings_set_orientation";
  gtk_print_settings_set_orientation_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, GtkPageOrientation orientation)>(
      dlsym(module, gtk_print_settings_set_orientation_name));
  if (!gtk_print_settings_set_orientation_ptr)
    LogDlerror(gtk_print_settings_set_orientation_name);
  const char gtk_print_settings_set_printer_lpi_name[] = "gtk_print_settings_set_printer_lpi";
  gtk_print_settings_set_printer_lpi_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, gdouble lpi)>(
      dlsym(module, gtk_print_settings_set_printer_lpi_name));
  if (!gtk_print_settings_set_printer_lpi_ptr)
    LogDlerror(gtk_print_settings_set_printer_lpi_name);
  const char gtk_print_settings_set_print_pages_name[] = "gtk_print_settings_set_print_pages";
  gtk_print_settings_set_print_pages_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, GtkPrintPages pages)>(
      dlsym(module, gtk_print_settings_set_print_pages_name));
  if (!gtk_print_settings_set_print_pages_ptr)
    LogDlerror(gtk_print_settings_set_print_pages_name);
  const char gtk_print_settings_set_resolution_xy_name[] = "gtk_print_settings_set_resolution_xy";
  gtk_print_settings_set_resolution_xy_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, gint resolution_x, gint resolution_y)>(
      dlsym(module, gtk_print_settings_set_resolution_xy_name));
  if (!gtk_print_settings_set_resolution_xy_ptr)
    LogDlerror(gtk_print_settings_set_resolution_xy_name);
  const char gtk_print_settings_to_key_file_name[] = "gtk_print_settings_to_key_file";
  gtk_print_settings_to_key_file_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, GKeyFile* key_file, const gchar* group_name)>(
      dlsym(module, gtk_print_settings_to_key_file_name));
  if (!gtk_print_settings_to_key_file_ptr)
    LogDlerror(gtk_print_settings_to_key_file_name);
  const char gtk_print_unix_dialog_get_page_setup_name[] = "gtk_print_unix_dialog_get_page_setup";
  gtk_print_unix_dialog_get_page_setup_ptr =
    reinterpret_cast<GtkPageSetup* (*)(GtkPrintUnixDialog* dialog)>(
      dlsym(module, gtk_print_unix_dialog_get_page_setup_name));
  if (!gtk_print_unix_dialog_get_page_setup_ptr)
    LogDlerror(gtk_print_unix_dialog_get_page_setup_name);
  const char gtk_print_unix_dialog_get_selected_printer_name[] = "gtk_print_unix_dialog_get_selected_printer";
  gtk_print_unix_dialog_get_selected_printer_ptr =
    reinterpret_cast<GtkPrinter* (*)(GtkPrintUnixDialog* dialog)>(
      dlsym(module, gtk_print_unix_dialog_get_selected_printer_name));
  if (!gtk_print_unix_dialog_get_selected_printer_ptr)
    LogDlerror(gtk_print_unix_dialog_get_selected_printer_name);
  const char gtk_print_unix_dialog_get_settings_name[] = "gtk_print_unix_dialog_get_settings";
  gtk_print_unix_dialog_get_settings_ptr =
    reinterpret_cast<GtkPrintSettings* (*)(GtkPrintUnixDialog* dialog)>(
      dlsym(module, gtk_print_unix_dialog_get_settings_name));
  if (!gtk_print_unix_dialog_get_settings_ptr)
    LogDlerror(gtk_print_unix_dialog_get_settings_name);
  const char gtk_print_unix_dialog_new_name[] = "gtk_print_unix_dialog_new";
  gtk_print_unix_dialog_new_ptr =
    reinterpret_cast<GtkWidget* (*)(const char* title, GtkWindow* parent)>(
      dlsym(module, gtk_print_unix_dialog_new_name));
  if (!gtk_print_unix_dialog_new_ptr)
    LogDlerror(gtk_print_unix_dialog_new_name);
  const char gtk_print_unix_dialog_set_embed_page_setup_name[] = "gtk_print_unix_dialog_set_embed_page_setup";
  gtk_print_unix_dialog_set_embed_page_setup_ptr =
    reinterpret_cast<void (*)(GtkPrintUnixDialog* dialog, gboolean embed)>(
      dlsym(module, gtk_print_unix_dialog_set_embed_page_setup_name));
  if (!gtk_print_unix_dialog_set_embed_page_setup_ptr)
    LogDlerror(gtk_print_unix_dialog_set_embed_page_setup_name);
  const char gtk_print_unix_dialog_set_has_selection_name[] = "gtk_print_unix_dialog_set_has_selection";
  gtk_print_unix_dialog_set_has_selection_ptr =
    reinterpret_cast<void (*)(GtkPrintUnixDialog* dialog, gboolean has_selection)>(
      dlsym(module, gtk_print_unix_dialog_set_has_selection_name));
  if (!gtk_print_unix_dialog_set_has_selection_ptr)
    LogDlerror(gtk_print_unix_dialog_set_has_selection_name);
  const char gtk_print_unix_dialog_set_manual_capabilities_name[] = "gtk_print_unix_dialog_set_manual_capabilities";
  gtk_print_unix_dialog_set_manual_capabilities_ptr =
    reinterpret_cast<void (*)(GtkPrintUnixDialog* dialog, GtkPrintCapabilities capabilities)>(
      dlsym(module, gtk_print_unix_dialog_set_manual_capabilities_name));
  if (!gtk_print_unix_dialog_set_manual_capabilities_ptr)
    LogDlerror(gtk_print_unix_dialog_set_manual_capabilities_name);
  const char gtk_print_unix_dialog_set_settings_name[] = "gtk_print_unix_dialog_set_settings";
  gtk_print_unix_dialog_set_settings_ptr =
    reinterpret_cast<void (*)(GtkPrintUnixDialog* dialog, GtkPrintSettings* settings)>(
      dlsym(module, gtk_print_unix_dialog_set_settings_name));
  if (!gtk_print_unix_dialog_set_settings_ptr)
    LogDlerror(gtk_print_unix_dialog_set_settings_name);
  const char gtk_print_unix_dialog_set_support_selection_name[] = "gtk_print_unix_dialog_set_support_selection";
  gtk_print_unix_dialog_set_support_selection_ptr =
    reinterpret_cast<void (*)(GtkPrintUnixDialog* dialog, gboolean support_selection)>(
      dlsym(module, gtk_print_unix_dialog_set_support_selection_name));
  if (!gtk_print_unix_dialog_set_support_selection_ptr)
    LogDlerror(gtk_print_unix_dialog_set_support_selection_name);
  const char gtk_render_background_name[] = "gtk_render_background";
  gtk_render_background_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height)>(
      dlsym(module, gtk_render_background_name));
  if (!gtk_render_background_ptr)
    LogDlerror(gtk_render_background_name);
  const char gtk_render_focus_name[] = "gtk_render_focus";
  gtk_render_focus_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height)>(
      dlsym(module, gtk_render_focus_name));
  if (!gtk_render_focus_ptr)
    LogDlerror(gtk_render_focus_name);
  const char gtk_render_frame_name[] = "gtk_render_frame";
  gtk_render_frame_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, cairo_t* cr, gdouble x, gdouble y, gdouble width, gdouble height)>(
      dlsym(module, gtk_render_frame_name));
  if (!gtk_render_frame_ptr)
    LogDlerror(gtk_render_frame_name);
  const char gtk_separator_new_name[] = "gtk_separator_new";
  gtk_separator_new_ptr =
    reinterpret_cast<GtkWidget* (*)(GtkOrientation orientation)>(
      dlsym(module, gtk_separator_new_name));
  if (!gtk_separator_new_ptr)
    LogDlerror(gtk_separator_new_name);
  const char gtk_style_context_add_class_name[] = "gtk_style_context_add_class";
  gtk_style_context_add_class_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, const gchar* class_name)>(
      dlsym(module, gtk_style_context_add_class_name));
  if (!gtk_style_context_add_class_ptr)
    LogDlerror(gtk_style_context_add_class_name);
  const char gtk_style_context_add_provider_name[] = "gtk_style_context_add_provider";
  gtk_style_context_add_provider_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, GtkStyleProvider* provider, guint priority)>(
      dlsym(module, gtk_style_context_add_provider_name));
  if (!gtk_style_context_add_provider_ptr)
    LogDlerror(gtk_style_context_add_provider_name);
  const char gtk_style_context_get_state_name[] = "gtk_style_context_get_state";
  gtk_style_context_get_state_ptr =
    reinterpret_cast<GtkStateFlags (*)(GtkStyleContext* context)>(
      dlsym(module, gtk_style_context_get_state_name));
  if (!gtk_style_context_get_state_ptr)
    LogDlerror(gtk_style_context_get_state_name);
  const char gtk_style_context_has_class_name[] = "gtk_style_context_has_class";
  gtk_style_context_has_class_ptr =
    reinterpret_cast<gboolean (*)(GtkStyleContext* context, const gchar* class_name)>(
      dlsym(module, gtk_style_context_has_class_name));
  if (!gtk_style_context_has_class_ptr)
    LogDlerror(gtk_style_context_has_class_name);
  const char gtk_style_context_set_scale_name[] = "gtk_style_context_set_scale";
  gtk_style_context_set_scale_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, gint scale)>(
      dlsym(module, gtk_style_context_set_scale_name));
  if (!gtk_style_context_set_scale_ptr)
    LogDlerror(gtk_style_context_set_scale_name);
  const char gtk_style_context_set_state_name[] = "gtk_style_context_set_state";
  gtk_style_context_set_state_ptr =
    reinterpret_cast<void (*)(GtkStyleContext* context, GtkStateFlags flags)>(
      dlsym(module, gtk_style_context_set_state_name));
  if (!gtk_style_context_set_state_ptr)
    LogDlerror(gtk_style_context_set_state_name);
  const char gtk_widget_get_pango_context_name[] = "gtk_widget_get_pango_context";
  gtk_widget_get_pango_context_ptr =
    reinterpret_cast<PangoContext* (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_pango_context_name));
  if (!gtk_widget_get_pango_context_ptr)
    LogDlerror(gtk_widget_get_pango_context_name);
  const char gtk_widget_get_parent_name[] = "gtk_widget_get_parent";
  gtk_widget_get_parent_ptr =
    reinterpret_cast<GtkWidget* (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_parent_name));
  if (!gtk_widget_get_parent_ptr)
    LogDlerror(gtk_widget_get_parent_name);
  const char gtk_widget_get_preferred_size_name[] = "gtk_widget_get_preferred_size";
  gtk_widget_get_preferred_size_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, GtkRequisition* minimum_size, GtkRequisition* natural_size)>(
      dlsym(module, gtk_widget_get_preferred_size_name));
  if (!gtk_widget_get_preferred_size_ptr)
    LogDlerror(gtk_widget_get_preferred_size_name);
  const char gtk_widget_get_scale_factor_name[] = "gtk_widget_get_scale_factor";
  gtk_widget_get_scale_factor_ptr =
    reinterpret_cast<gint (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_scale_factor_name));
  if (!gtk_widget_get_scale_factor_ptr)
    LogDlerror(gtk_widget_get_scale_factor_name);
  const char gtk_widget_get_style_context_name[] = "gtk_widget_get_style_context";
  gtk_widget_get_style_context_ptr =
    reinterpret_cast<GtkStyleContext* (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_get_style_context_name));
  if (!gtk_widget_get_style_context_ptr)
    LogDlerror(gtk_widget_get_style_context_name);
  const char gtk_widget_hide_name[] = "gtk_widget_hide";
  gtk_widget_hide_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_hide_name));
  if (!gtk_widget_hide_ptr)
    LogDlerror(gtk_widget_hide_name);
  const char gtk_widget_realize_name[] = "gtk_widget_realize";
  gtk_widget_realize_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_realize_name));
  if (!gtk_widget_realize_ptr)
    LogDlerror(gtk_widget_realize_name);
  const char gtk_widget_set_can_focus_name[] = "gtk_widget_set_can_focus";
  gtk_widget_set_can_focus_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, gboolean can_focus)>(
      dlsym(module, gtk_widget_set_can_focus_name));
  if (!gtk_widget_set_can_focus_ptr)
    LogDlerror(gtk_widget_set_can_focus_name);
  const char gtk_widget_set_name_name[] = "gtk_widget_set_name";
  gtk_widget_set_name_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, const gchar* name)>(
      dlsym(module, gtk_widget_set_name_name));
  if (!gtk_widget_set_name_ptr)
    LogDlerror(gtk_widget_set_name_name);
  const char gtk_widget_set_parent_name[] = "gtk_widget_set_parent";
  gtk_widget_set_parent_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, GtkWidget* parent)>(
      dlsym(module, gtk_widget_set_parent_name));
  if (!gtk_widget_set_parent_ptr)
    LogDlerror(gtk_widget_set_parent_name);
  const char gtk_widget_set_sensitive_name[] = "gtk_widget_set_sensitive";
  gtk_widget_set_sensitive_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, gboolean sensitive)>(
      dlsym(module, gtk_widget_set_sensitive_name));
  if (!gtk_widget_set_sensitive_ptr)
    LogDlerror(gtk_widget_set_sensitive_name);
  const char gtk_widget_set_size_request_name[] = "gtk_widget_set_size_request";
  gtk_widget_set_size_request_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, gint width, gint height)>(
      dlsym(module, gtk_widget_set_size_request_name));
  if (!gtk_widget_set_size_request_ptr)
    LogDlerror(gtk_widget_set_size_request_name);
  const char gtk_widget_set_state_flags_name[] = "gtk_widget_set_state_flags";
  gtk_widget_set_state_flags_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget, GtkStateFlags flags, gboolean clear)>(
      dlsym(module, gtk_widget_set_state_flags_name));
  if (!gtk_widget_set_state_flags_ptr)
    LogDlerror(gtk_widget_set_state_flags_name);
  const char gtk_widget_show_name[] = "gtk_widget_show";
  gtk_widget_show_ptr =
    reinterpret_cast<void (*)(GtkWidget* widget)>(
      dlsym(module, gtk_widget_show_name));
  if (!gtk_widget_show_ptr)
    LogDlerror(gtk_widget_show_name);
  const char gtk_window_set_modal_name[] = "gtk_window_set_modal";
  gtk_window_set_modal_ptr =
    reinterpret_cast<void (*)(GtkWindow* window, gboolean modal)>(
      dlsym(module, gtk_window_set_modal_name));
  if (!gtk_window_set_modal_ptr)
    LogDlerror(gtk_window_set_modal_name);
  const char gtk_print_settings_set_printer_name[] = "gtk_print_settings_set_printer";
  gtk_print_settings_set_printer_ptr =
    reinterpret_cast<void (*)(GtkPrintSettings* settings, const gchar* printer)>(
      dlsym(module, gtk_print_settings_set_printer_name));
  if (!gtk_print_settings_set_printer_ptr)
    LogDlerror(gtk_print_settings_set_printer_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeGtk() {
  gtk_settings_get_default_ptr = nullptr;
  gtk_widget_path_iter_set_object_name_ptr = nullptr;
  gtk_widget_path_iter_add_class_ptr = nullptr;
  gtk_widget_path_copy_ptr = nullptr;
  gtk_widget_path_new_ptr = nullptr;
  gtk_style_context_get_path_ptr = nullptr;
  gtk_widget_path_append_type_ptr = nullptr;
  gtk_widget_path_iter_set_name_ptr = nullptr;
  gtk_widget_path_iter_set_state_ptr = nullptr;
  gtk_style_context_new_ptr = nullptr;
  gtk_style_context_set_path_ptr = nullptr;
  gtk_style_context_set_parent_ptr = nullptr;
  gtk_widget_path_unref_ptr = nullptr;
  gtk_style_context_get_parent_ptr = nullptr;
  gtk_widget_set_css_classes_ptr = nullptr;
  gtk_widget_measure_ptr = nullptr;
  gtk_offscreen_window_new_ptr = nullptr;
  gtk_container_add_ptr = nullptr;
  gtk_widget_destroy_ptr = nullptr;
  gtk_bindings_activate_event_ptr = nullptr;
  gtk_widget_set_events_ptr = nullptr;
  gtk_container_get_type_ptr = nullptr;
  gtk_icon_info_load_surface_ptr = nullptr;
  gtk_style_context_get_valist_ptr = nullptr;
  gtk_style_context_get_style_valist_ptr = nullptr;
  gtk_snapshot_new_ptr = nullptr;
  gtk_snapshot_free_to_node_ptr = nullptr;
  gtk_im_context_set_client_widget_ptr = nullptr;
  gtk_widget_get_native_ptr = nullptr;
  gtk_native_get_surface_ptr = nullptr;
  gtk_im_context_filter_key_ptr = nullptr;
  gtk_im_context_set_client_window_ptr = nullptr;
  gtk_file_chooser_set_filename_ptr = nullptr;
  gtk_file_chooser_list_filters_ptr = nullptr;
  gtk_file_chooser_get_filename_ptr = nullptr;
  gtk_file_chooser_get_filenames_ptr = nullptr;
  gtk_file_chooser_get_preview_filename_ptr = nullptr;
  gtk_file_chooser_set_preview_widget_active_ptr = nullptr;
  gtk_file_chooser_set_preview_widget_ptr = nullptr;
  gtk_widget_hide_on_delete_ptr = nullptr;
  gtk_widget_show_all_ptr = nullptr;
  gtk_file_chooser_set_do_overwrite_confirmation_ptr = nullptr;
  gtk_file_chooser_get_filters_ptr = nullptr;
  gtk_window_set_hide_on_close_ptr = nullptr;
  gtk_icon_theme_lookup_icon_for_scale_ptr = nullptr;
  gtk_icon_info_load_symbolic_for_context_ptr = nullptr;
  gtk_snapshot_render_background_ptr = nullptr;
  gtk_menu_get_type_ptr = nullptr;
  gtk_menu_bar_get_type_ptr = nullptr;
  gtk_menu_item_get_type_ptr = nullptr;
  gtk_style_context_add_provider_for_screen_ptr = nullptr;
  gtk_style_context_add_provider_for_display_ptr = nullptr;
  gtk_style_context_remove_provider_for_screen_ptr = nullptr;
  gtk_style_context_remove_provider_for_display_ptr = nullptr;
  gtk_window_destroy_ptr = nullptr;
  gtk_icon_theme_get_for_display_ptr = nullptr;
  gtk_icon_theme_get_default_ptr = nullptr;
  gtk_widget_path_iter_has_class_ptr = nullptr;
  gtk_widget_get_window_ptr = nullptr;
  gtk_main_do_event_ptr = nullptr;
  gtk_get_major_version_ptr = nullptr;
  gtk_get_minor_version_ptr = nullptr;
  gtk_get_micro_version_ptr = nullptr;
  gtk_window_present_ptr = nullptr;
  gtk_window_present_with_time_ptr = nullptr;
  gtk_box_get_type_ptr = nullptr;
  gtk_button_get_type_ptr = nullptr;
  gtk_cell_view_get_type_ptr = nullptr;
  gtk_combo_box_text_get_type_ptr = nullptr;
  gtk_entry_get_type_ptr = nullptr;
  gtk_file_chooser_get_type_ptr = nullptr;
  gtk_frame_get_type_ptr = nullptr;
  gtk_header_bar_get_type_ptr = nullptr;
  gtk_image_get_type_ptr = nullptr;
  gtk_info_bar_get_type_ptr = nullptr;
  gtk_label_get_type_ptr = nullptr;
  gtk_print_unix_dialog_get_type_ptr = nullptr;
  gtk_range_get_type_ptr = nullptr;
  gtk_scale_get_type_ptr = nullptr;
  gtk_scrollbar_get_type_ptr = nullptr;
  gtk_scrolled_window_get_type_ptr = nullptr;
  gtk_separator_get_type_ptr = nullptr;
  gtk_spinner_get_type_ptr = nullptr;
  gtk_style_provider_get_type_ptr = nullptr;
  gtk_text_view_get_type_ptr = nullptr;
  gtk_toggle_button_get_type_ptr = nullptr;
  gtk_tree_model_get_type_ptr = nullptr;
  gtk_tree_view_get_type_ptr = nullptr;
  gtk_widget_get_type_ptr = nullptr;
  gtk_window_get_type_ptr = nullptr;
  gtk_combo_box_new_with_model_ptr = nullptr;
  gtk_css_provider_new_ptr = nullptr;
  gtk_disable_setlocale_ptr = nullptr;
  gtk_enumerate_printers_ptr = nullptr;
  gtk_print_backend_load_modules_ptr = nullptr;
  gtk_print_backend_get_printers_ptr = nullptr;
  gtk_print_backend_get_printer_list_ptr = nullptr;
  gtk_file_chooser_add_filter_ptr = nullptr;
  gtk_file_chooser_get_file_ptr = nullptr;
  gtk_file_chooser_get_filter_ptr = nullptr;
  gtk_file_chooser_set_create_folders_ptr = nullptr;
  gtk_file_chooser_set_current_name_ptr = nullptr;
  gtk_file_chooser_set_file_ptr = nullptr;
  gtk_file_chooser_set_filter_ptr = nullptr;
  gtk_file_chooser_set_select_multiple_ptr = nullptr;
  gtk_file_filter_add_mime_type_ptr = nullptr;
  gtk_file_filter_add_pattern_ptr = nullptr;
  gtk_file_filter_new_ptr = nullptr;
  gtk_file_filter_set_name_ptr = nullptr;
  gtk_image_new_ptr = nullptr;
  gtk_image_set_from_pixbuf_ptr = nullptr;
  gtk_im_context_focus_in_ptr = nullptr;
  gtk_im_context_focus_out_ptr = nullptr;
  gtk_im_context_get_preedit_string_ptr = nullptr;
  gtk_im_context_reset_ptr = nullptr;
  gtk_im_context_set_cursor_location_ptr = nullptr;
  gtk_im_context_simple_new_ptr = nullptr;
  gtk_im_multicontext_new_ptr = nullptr;
  gtk_im_multicontext_get_context_id_ptr = nullptr;
  gtk_im_multicontext_set_context_id_ptr = nullptr;
  gtk_im_multicontext_get_type_ptr = nullptr;
  gtk_label_new_ptr = nullptr;
  gtk_page_setup_get_left_margin_ptr = nullptr;
  gtk_page_setup_get_page_height_ptr = nullptr;
  gtk_page_setup_get_page_width_ptr = nullptr;
  gtk_page_setup_get_paper_height_ptr = nullptr;
  gtk_page_setup_get_paper_size_ptr = nullptr;
  gtk_page_setup_get_paper_width_ptr = nullptr;
  gtk_page_setup_get_top_margin_ptr = nullptr;
  gtk_page_setup_load_key_file_ptr = nullptr;
  gtk_page_setup_new_ptr = nullptr;
  gtk_page_setup_set_paper_size_ptr = nullptr;
  gtk_page_setup_to_key_file_ptr = nullptr;
  gtk_paper_size_free_ptr = nullptr;
  gtk_paper_size_get_height_ptr = nullptr;
  gtk_paper_size_get_paper_sizes_ptr = nullptr;
  gtk_paper_size_get_ppd_name_ptr = nullptr;
  gtk_paper_size_get_width_ptr = nullptr;
  gtk_paper_size_new_custom_ptr = nullptr;
  gtk_printer_get_default_page_size_ptr = nullptr;
  gtk_printer_get_name_ptr = nullptr;
  gtk_printer_is_default_ptr = nullptr;
  gtk_print_job_new_ptr = nullptr;
  gtk_print_job_send_ptr = nullptr;
  gtk_print_job_set_source_file_ptr = nullptr;
  gtk_print_settings_copy_ptr = nullptr;
  gtk_print_settings_get_orientation_ptr = nullptr;
  gtk_print_settings_get_page_ranges_ptr = nullptr;
  gtk_print_settings_set_page_ranges_ptr = nullptr;
  gtk_print_settings_get_printer_ptr = nullptr;
  gtk_print_settings_get_print_pages_ptr = nullptr;
  gtk_print_settings_get_resolution_ptr = nullptr;
  gtk_print_settings_load_key_file_ptr = nullptr;
  gtk_print_settings_new_ptr = nullptr;
  gtk_print_settings_set_ptr = nullptr;
  gtk_print_settings_set_collate_ptr = nullptr;
  gtk_print_settings_set_n_copies_ptr = nullptr;
  gtk_print_settings_set_orientation_ptr = nullptr;
  gtk_print_settings_set_printer_lpi_ptr = nullptr;
  gtk_print_settings_set_print_pages_ptr = nullptr;
  gtk_print_settings_set_resolution_xy_ptr = nullptr;
  gtk_print_settings_to_key_file_ptr = nullptr;
  gtk_print_unix_dialog_get_page_setup_ptr = nullptr;
  gtk_print_unix_dialog_get_selected_printer_ptr = nullptr;
  gtk_print_unix_dialog_get_settings_ptr = nullptr;
  gtk_print_unix_dialog_new_ptr = nullptr;
  gtk_print_unix_dialog_set_embed_page_setup_ptr = nullptr;
  gtk_print_unix_dialog_set_has_selection_ptr = nullptr;
  gtk_print_unix_dialog_set_manual_capabilities_ptr = nullptr;
  gtk_print_unix_dialog_set_settings_ptr = nullptr;
  gtk_print_unix_dialog_set_support_selection_ptr = nullptr;
  gtk_render_background_ptr = nullptr;
  gtk_render_focus_ptr = nullptr;
  gtk_render_frame_ptr = nullptr;
  gtk_separator_new_ptr = nullptr;
  gtk_style_context_add_class_ptr = nullptr;
  gtk_style_context_add_provider_ptr = nullptr;
  gtk_style_context_get_state_ptr = nullptr;
  gtk_style_context_has_class_ptr = nullptr;
  gtk_style_context_set_scale_ptr = nullptr;
  gtk_style_context_set_state_ptr = nullptr;
  gtk_widget_get_pango_context_ptr = nullptr;
  gtk_widget_get_parent_ptr = nullptr;
  gtk_widget_get_preferred_size_ptr = nullptr;
  gtk_widget_get_scale_factor_ptr = nullptr;
  gtk_widget_get_style_context_ptr = nullptr;
  gtk_widget_hide_ptr = nullptr;
  gtk_widget_realize_ptr = nullptr;
  gtk_widget_set_can_focus_ptr = nullptr;
  gtk_widget_set_name_ptr = nullptr;
  gtk_widget_set_parent_ptr = nullptr;
  gtk_widget_set_sensitive_ptr = nullptr;
  gtk_widget_set_size_request_ptr = nullptr;
  gtk_widget_set_state_flags_ptr = nullptr;
  gtk_widget_show_ptr = nullptr;
  gtk_window_set_modal_ptr = nullptr;
  gtk_print_settings_set_printer_ptr = nullptr;
}

}  // namespace ui_gtk

extern "C" {

// Static pointers that will hold the location of the real function
// implementations after the module has been loaded.
static const char* (*g_file_peek_path_ptr)(GFile* file) = nullptr;
static gpointer (*g_list_model_get_item_ptr)(GListModel* list, guint position) = nullptr;
static guint (*g_list_model_get_n_items_ptr)(GListModel* list) = nullptr;
static GObject* (*g_list_model_get_object_ptr)(GListModel* list, guint position) = nullptr;

// Stubs that dispatch to the real implementations.
extern const char* g_file_peek_path(GFile* file) __attribute__((weak));
DISABLE_CFI_ICALL
const char*  g_file_peek_path(GFile* file) {
  return g_file_peek_path_ptr(file);
}
extern gpointer g_list_model_get_item(GListModel* list, guint position) __attribute__((weak));
DISABLE_CFI_ICALL
gpointer  g_list_model_get_item(GListModel* list, guint position) {
  return g_list_model_get_item_ptr(list, position);
}
extern guint g_list_model_get_n_items(GListModel* list) __attribute__((weak));
DISABLE_CFI_ICALL
guint  g_list_model_get_n_items(GListModel* list) {
  return g_list_model_get_n_items_ptr(list);
}
extern GObject* g_list_model_get_object(GListModel* list, guint position) __attribute__((weak));
DISABLE_CFI_ICALL
GObject*  g_list_model_get_object(GListModel* list, guint position) {
  return g_list_model_get_object_ptr(list, position);
}

}  // extern "C"


namespace ui_gtk {

// Returns true if all stubs have been properly initialized.
bool IsGioInitialized() {
  return g_file_peek_path_ptr &&
         g_list_model_get_item_ptr &&
         g_list_model_get_n_items_ptr &&
         g_list_model_get_object_ptr;
}

// Initializes the module stubs.
void InitializeGio(void* module) {
  const char g_file_peek_path_name[] = "g_file_peek_path";
  g_file_peek_path_ptr =
    reinterpret_cast<const char* (*)(GFile* file)>(
      dlsym(module, g_file_peek_path_name));
  if (!g_file_peek_path_ptr)
    LogDlerror(g_file_peek_path_name);
  const char g_list_model_get_item_name[] = "g_list_model_get_item";
  g_list_model_get_item_ptr =
    reinterpret_cast<gpointer (*)(GListModel* list, guint position)>(
      dlsym(module, g_list_model_get_item_name));
  if (!g_list_model_get_item_ptr)
    LogDlerror(g_list_model_get_item_name);
  const char g_list_model_get_n_items_name[] = "g_list_model_get_n_items";
  g_list_model_get_n_items_ptr =
    reinterpret_cast<guint (*)(GListModel* list)>(
      dlsym(module, g_list_model_get_n_items_name));
  if (!g_list_model_get_n_items_ptr)
    LogDlerror(g_list_model_get_n_items_name);
  const char g_list_model_get_object_name[] = "g_list_model_get_object";
  g_list_model_get_object_ptr =
    reinterpret_cast<GObject* (*)(GListModel* list, guint position)>(
      dlsym(module, g_list_model_get_object_name));
  if (!g_list_model_get_object_ptr)
    LogDlerror(g_list_model_get_object_name);
}

// Uninitialize the module stubs.  Reset pointers to nullptr.
void UninitializeGio() {
  g_file_peek_path_ptr = nullptr;
  g_list_model_get_item_ptr = nullptr;
  g_list_model_get_n_items_ptr = nullptr;
  g_list_model_get_object_ptr = nullptr;
}

}  // namespace ui_gtk

namespace ui_gtk {
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
        LogNoop() << "dlopen(" << dso_path->c_str() << ") failed.";
        if (char *errstr = dlerror()) {
          LogNoop() << "dlerror() says:\n" << errstr;
        } else {
          LogNoop() << "dlerror() is nullptr";
        }

      }
    }

    if (!module_opened) {
      CloseLibraries(&opened_libraries);
      return false;
    }
  }

  // Initialize each module if we have not already failed.
  InitializeGdk_pixbuf(opened_libraries[kModuleGdk_pixbuf]);
  InitializeGdk(opened_libraries[kModuleGdk]);
  InitializeGsk(opened_libraries[kModuleGsk]);
  InitializeGtk(opened_libraries[kModuleGtk]);
  InitializeGio(opened_libraries[kModuleGio]);

  // Check that each module is initialized correctly.
  // Close all previously opened libraries on failure.
  if (!IsGdk_pixbufInitialized() ||
      !IsGdkInitialized() ||
      !IsGskInitialized() ||
      !IsGtkInitialized() ||
      !IsGioInitialized()) {
    UninitializeGdk_pixbuf();
    UninitializeGdk();
    UninitializeGsk();
    UninitializeGtk();
    UninitializeGio();
    CloseLibraries(&opened_libraries);
    return false;
  }

  return true;
}

}  // namespace ui_gtk
