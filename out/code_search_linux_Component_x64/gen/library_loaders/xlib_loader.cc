// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#include "xlib_loader.h"

#include <dlfcn.h>

// Put these sanity checks here so that they fire at most once
// (to avoid cluttering the build output).
#if !defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN) && !defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
#error neither LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN nor LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED defined
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN) && defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
#error both LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN and LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED defined
#endif

XlibLoader::XlibLoader() : loaded_(false) {
}

XlibLoader::~XlibLoader() {
  CleanUp(loaded_);
}

bool XlibLoader::Load(const std::string& library_name) {
  if (loaded_)
    return false;

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  library_ = dlopen(library_name.c_str(), RTLD_LAZY);
  if (!library_)
    return false;
#endif


#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XInitThreads =
      reinterpret_cast<decltype(this->XInitThreads)>(
          dlsym(library_, "XInitThreads"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XInitThreads = &::XInitThreads;
#endif
  if (!XInitThreads) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XOpenDisplay =
      reinterpret_cast<decltype(this->XOpenDisplay)>(
          dlsym(library_, "XOpenDisplay"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XOpenDisplay = &::XOpenDisplay;
#endif
  if (!XOpenDisplay) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XCloseDisplay =
      reinterpret_cast<decltype(this->XCloseDisplay)>(
          dlsym(library_, "XCloseDisplay"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XCloseDisplay = &::XCloseDisplay;
#endif
  if (!XCloseDisplay) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XFlush =
      reinterpret_cast<decltype(this->XFlush)>(
          dlsym(library_, "XFlush"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XFlush = &::XFlush;
#endif
  if (!XFlush) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XSynchronize =
      reinterpret_cast<decltype(this->XSynchronize)>(
          dlsym(library_, "XSynchronize"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XSynchronize = &::XSynchronize;
#endif
  if (!XSynchronize) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XSetErrorHandler =
      reinterpret_cast<decltype(this->XSetErrorHandler)>(
          dlsym(library_, "XSetErrorHandler"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XSetErrorHandler = &::XSetErrorHandler;
#endif
  if (!XSetErrorHandler) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XFree =
      reinterpret_cast<decltype(this->XFree)>(
          dlsym(library_, "XFree"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XFree = &::XFree;
#endif
  if (!XFree) {
    CleanUp(true);
    return false;
  }

#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  XPending =
      reinterpret_cast<decltype(this->XPending)>(
          dlsym(library_, "XPending"));
#endif
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DT_NEEDED)
  XPending = &::XPending;
#endif
  if (!XPending) {
    CleanUp(true);
    return false;
  }


  loaded_ = true;
  return true;
}

void XlibLoader::CleanUp(bool unload) {
#if defined(LIBRARY_LOADER_XLIB_LOADER_H_DLOPEN)
  if (unload) {
    dlclose(library_);
    library_ = NULL;
  }
#endif
  loaded_ = false;
  XInitThreads = NULL;
  XOpenDisplay = NULL;
  XCloseDisplay = NULL;
  XFlush = NULL;
  XSynchronize = NULL;
  XSetErrorHandler = NULL;
  XFree = NULL;
  XPending = NULL;

}
