// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   ../../third_party/search_engines_data/regional_settings_schema.json
//   ../../third_party/search_engines_data/resources/definitions/regional_settings.json
// using json_to_struct.py. DO NOT EDIT.

#ifndef REGIONAL_SETTINGS_H_
#define REGIONAL_SETTINGS_H_

#include <cstddef>

#include "base/containers/fixed_flat_map.h"
#include "base/containers/span.h"
#include "base/memory/raw_ptr.h"
#include "components/country_codes/country_codes.h"
#include "third_party/search_engines_data/resources/definitions/prepopulated_engines.h"

namespace TemplateURLPrepopulateData {

struct RegionalSettings {
  const base::span<const raw_ptr<const PrepopulatedEngine>> search_engines;
};


extern const base::fixed_flat_map<country_codes::CountryId, raw_ptr<const RegionalSettings>, 253> kRegionalSettings;

}  // namespace TemplateURLPrepopulateData

#endif  // REGIONAL_SETTINGS_H_
