// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   ../../components/search_engines/ai_mode_button_config_schema.json
//   ../../components/search_engines/ai_mode_button_config.json
// using json_to_struct.py. DO NOT EDIT.

#ifndef AI_MODE_BUTTON_CONFIG_H_
#define AI_MODE_BUTTON_CONFIG_H_

#include <array>
#include <cstddef>

#include "base/memory/raw_ptr.h"
#include "components/search_engines/search_engine_type.h"

namespace ai_mode_button_config {

struct AiModeButtonConfig {
  const SearchEngineType id;
  const char16_t* const name;
  const char* const favicon_url;
  const char* const navigation_url;
  const char* const navigation_url_empty;
};



extern const std::array<raw_ptr<const AiModeButtonConfig>, 0> kAiModeButtonConfigs;

}  // namespace ai_mode_button_config

#endif  // AI_MODE_BUTTON_CONFIG_H_
