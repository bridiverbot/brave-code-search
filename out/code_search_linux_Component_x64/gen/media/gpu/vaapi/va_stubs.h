// This is generated file. Do not modify directly.

#ifndef GEN_MEDIA_GPU_VAAPI_VA_STUBS_H_
#define GEN_MEDIA_GPU_VAAPI_VA_STUBS_H_

#include <map>
#include <string>
#include <vector>

namespace media_gpu_vaapi {
// Individual module initializer functions.
bool IsVaInitialized();
void InitializeVa(void* module);
void UninitializeVa();

bool IsVa_drmInitialized();
void InitializeVa_drm(void* module);
void UninitializeVa_drm();

// Enum and typedef for umbrella initializer.
enum StubModules {
  kModuleVa = 0,
  kModuleVa_drm,
  kNumStubModules
};

typedef std::map<StubModules, std::vector<std::string>> StubPathMap;

// Umbrella initializer for all the modules in this stub file.
bool InitializeStubs(const StubPathMap& path_map);
}  // namespace media_gpu_vaapi

#endif  // GEN_MEDIA_GPU_VAAPI_VA_STUBS_H_
