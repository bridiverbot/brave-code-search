// This is generated file. Do not modify directly.
// Path to the code generator: tools/generate_library_loader/generate_library_loader.py .

#ifndef LIBRARY_LOADER_LIBSPEECHD_H
#define LIBRARY_LOADER_LIBSPEECHD_H

#include "third_party/speech-dispatcher/src/libspeechd.h"
#define LIBRARY_LOADER_LIBSPEECHD_H_DLOPEN


#include <string>

#if defined(__clang__)
#if !__has_attribute(cfi_unchecked_callee)
#error cfi_unchecked_callee requires a newer Clang
#endif
#define LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE [[clang::cfi_unchecked_callee]]
#else
#define LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE
#endif
class LibSpeechdLoader {
 public:
  LibSpeechdLoader();
  ~LibSpeechdLoader();

  bool Load(const std::string& library_name)
      __attribute__((warn_unused_result));

  bool loaded() const { return loaded_; }

  decltype(&::spd_open) spd_open LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_say) spd_say LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_stop) spd_stop LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_close) spd_close LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_pause) spd_pause LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_resume) spd_resume LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_notification_on) spd_set_notification_on LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_voice_rate) spd_set_voice_rate LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_voice_pitch) spd_set_voice_pitch LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_list_synthesis_voices) spd_list_synthesis_voices LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_synthesis_voice) spd_set_synthesis_voice LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_list_modules) spd_list_modules LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_output_module) spd_set_output_module LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;
  decltype(&::spd_set_language) spd_set_language LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE;


 private:
  void CleanUp(bool unload);

#if defined(LIBRARY_LOADER_LIBSPEECHD_H_DLOPEN)
  void* library_;
#endif

  bool loaded_;

  // Disallow copy constructor and assignment operator.
  LibSpeechdLoader(const LibSpeechdLoader&);
  void operator=(const LibSpeechdLoader&);
};

#undef LIBRARY_LOADER_LIBSPEECHD_H_CFI_UNCHECKED_CALLEE
#endif  // LIBRARY_LOADER_LIBSPEECHD_H
