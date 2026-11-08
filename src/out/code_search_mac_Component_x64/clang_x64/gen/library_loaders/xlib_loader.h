// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#ifndef LIBRARY_LOADER_XLIB_LOADER_H
#define LIBRARY_LOADER_XLIB_LOADER_H

#include "ui/gfx/x/xlib.h"
#define LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN


#include <string>

class XlibLoader {
 public:
  XlibLoader();
  ~XlibLoader();

  bool Load(const std::string& library_name)
      __attribute__((warn_unused_result));

  bool loaded() const { return loaded_; }

  decltype(&::XInitThreads) XInitThreads;
  decltype(&::XOpenDisplay) XOpenDisplay;
  decltype(&::XCloseDisplay) XCloseDisplay;
  decltype(&::XFlush) XFlush;
  decltype(&::XSynchronize) XSynchronize;
  decltype(&::XSetErrorHandler) XSetErrorHandler;
  decltype(&::XFree) XFree;
  decltype(&::XPending) XPending;


 private:
  void CleanUp(bool unload);

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  void* library_;
#endif

  bool loaded_;

  // Disallow copy constructor and assignment operator.
  XlibLoader(const XlibLoader&);
  void operator=(const XlibLoader&);
};

#endif  // LIBRARY_LOADER_XLIB_LOADER_H
