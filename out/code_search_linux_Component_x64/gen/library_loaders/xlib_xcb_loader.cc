// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#include "xlib_xcb_loader.h"

#include <dlfcn.h>

// Put these sanity checks here so that they fire at most once
// (to avoid cluttering the build output).
#if !defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN) && !defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DT_NEEDED)
#error neither LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN nor LIBRARY_LOADER_XLIB_XCB_LOADER_H_DT_NEEDED defined
#endif
#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN) && defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DT_NEEDED)
#error both LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN and LIBRARY_LOADER_XLIB_XCB_LOADER_H_DT_NEEDED defined
#endif

XlibXcbLoader::XlibXcbLoader() : loaded_(false) {
}

XlibXcbLoader::~XlibXcbLoader() {
  CleanUp(loaded_);
}

bool XlibXcbLoader::Load(const std::string& library_name) {
  if (loaded_)
    return false;

#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN)
  library_ = dlopen(library_name.c_str(), RTLD_LAZY);
  if (!library_)
    return false;
#endif


#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN)
  XGetXCBConnection =
      reinterpret_cast<decltype(this->XGetXCBConnection)>(
          dlsym(library_, "XGetXCBConnection"));
#endif
#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DT_NEEDED)
  XGetXCBConnection = &::XGetXCBConnection;
#endif
  if (!XGetXCBConnection) {
    CleanUp(true);
    return false;
  }


  loaded_ = true;
  return true;
}

void XlibXcbLoader::CleanUp(bool unload) {
#if defined(LIBRARY_LOADER_XLIB_XCB_LOADER_H_DLOPEN)
  if (unload) {
    dlclose(library_);
    library_ = NULL;
  }
#endif
  loaded_ = false;
  XGetXCBConnection = NULL;

}
