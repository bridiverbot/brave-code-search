// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#ifndef LIBRARY_LOADER_XLIB_XCB_LOADER_H
#define LIBRARY_LOADER_XLIB_XCB_LOADER_H

#include "ui/gfx/x/xlib_xcb.h"
#define LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN


#include <string>

class XlibXcbLoader {
 public:
  XlibXcbLoader();
  ~XlibXcbLoader();

  bool Load(const std::string& library_name)
      __attribute__((warn_unused_result));

  bool loaded() const { return loaded_; }

  decltype(&::XGetXCBConnection) XGetXCBConnection;


 private:
  void CleanUp(bool unload);

#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN)
  void* library_;
#endif

  bool loaded_;

  // Disallow copy constructor and assignment operator.
  XlibXcbLoader(const XlibXcbLoader&);
  void operator=(const XlibXcbLoader&);
};

#endif  // LIBRARY_LOADER_XLIB_XCB_LOADER_H
