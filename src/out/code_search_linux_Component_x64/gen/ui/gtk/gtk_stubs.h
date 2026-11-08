// This is generated file. Do not modify directly.

#ifndef GEN_UI_GTK_GTK_STUBS_H_
#define GEN_UI_GTK_GTK_STUBS_H_

#include <map>
#include <string>
#include <vector>

namespace ui_gtk {
// Individual module initializer functions.
bool IsGdk_pixbufInitialized();
void InitializeGdk_pixbuf(void* module);
void UninitializeGdk_pixbuf();

bool IsGdkInitialized();
void InitializeGdk(void* module);
void UninitializeGdk();

bool IsGskInitialized();
void InitializeGsk(void* module);
void UninitializeGsk();

bool IsGtkInitialized();
void InitializeGtk(void* module);
void UninitializeGtk();

bool IsGioInitialized();
void InitializeGio(void* module);
void UninitializeGio();

// Enum and typedef for umbrella initializer.
enum StubModules {
  kModuleGdk_pixbuf = 0,
  kModuleGdk,
  kModuleGsk,
  kModuleGtk,
  kModuleGio,
  kNumStubModules
};

typedef std::map<StubModules, std::vector<std::string>> StubPathMap;

// Umbrella initializer for all the modules in this stub file.
bool InitializeStubs(const StubPathMap& path_map);
}  // namespace ui_gtk

#endif  // GEN_UI_GTK_GTK_STUBS_H_
