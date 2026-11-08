// This is generated file. Do not modify directly.

#ifndef GEN_MEDIA_AUDIO_PULSE_PULSE_STUBS_H_
#define GEN_MEDIA_AUDIO_PULSE_PULSE_STUBS_H_

#include <map>
#include <string>
#include <vector>

namespace media_audio_pulse {
// Individual module initializer functions.
bool IsPulseInitialized();
void InitializePulse(void* module);
void UninitializePulse();

// Enum and typedef for umbrella initializer.
enum StubModules {
  kModulePulse = 0,
  kNumStubModules
};

typedef std::map<StubModules, std::vector<std::string>> StubPathMap;

// Umbrella initializer for all the modules in this stub file.
bool InitializeStubs(const StubPathMap& path_map);
}  // namespace media_audio_pulse

#endif  // GEN_MEDIA_AUDIO_PULSE_PULSE_STUBS_H_
