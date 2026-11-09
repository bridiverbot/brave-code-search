// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE SCHEMA DEFINITION AND DESCRIPTION IN
//   ../../third_party/search_engines_data/prepopulated_engines_schema.json
//   ../../third_party/search_engines_data/resources/definitions/prepopulated_engines.json
// using json_to_struct.py. DO NOT EDIT.

#ifndef PREPOPULATED_ENGINES_H_
#define PREPOPULATED_ENGINES_H_

#include <array>
#include <cstddef>

#include "base/containers/span.h"
#include "base/memory/raw_ptr.h"
#include "components/search_engines/regulatory_extension_type.h"
#include "components/search_engines/search_engine_type.h"

namespace TemplateURLPrepopulateData {

struct RegulatoryExtension {
  const RegulatoryExtensionType variant;
  const char* const search_params;
  const char* const suggest_params;
};

struct PrepopulatedEngine {
  const char16_t* const name;
  const char16_t* const keyword;
  const char* const favicon_url;
  const char* const base_builtin_resource_id;
  const char* const search_url;
  const char* const encoding;
  const char* const suggest_url;
  const char* const image_url;
  const char* const image_translate_url;
  const char* const new_tab_url;
  const char* const contextual_search_url;
  const char* const logo_url;
  const char* const doodle_url;
  const char* const search_url_post_params;
  const char* const suggest_url_post_params;
  const char* const image_url_post_params;
  const char* const image_translate_source_language_param_key;
  const char* const image_translate_target_language_param_key;
  const char16_t* const image_search_branding_label;
  const base::span<const char* const> search_intent_params;
  const base::span<const char* const> alternate_urls;
  const SearchEngineType type;
  const char* const preconnect_to_search_url;
  const char* const prefetch_likely_navigations;
  const int id;
  const int migrate_to_id;
  const bool send_x_geo_header;
  const base::span<const RegulatoryExtension> regulatory_extensions;
};

extern const int kMaxPrepopulatedEngineID;
extern const int kCurrentDataVersion;

extern const PrepopulatedEngine baidu;
extern const PrepopulatedEngine bing;
extern const PrepopulatedEngine brave;
extern const PrepopulatedEngine coccoc;
extern const PrepopulatedEngine daum;
extern const PrepopulatedEngine ecosia;
extern const PrepopulatedEngine freespoke;
extern const PrepopulatedEngine google;
extern const PrepopulatedEngine info_com;
extern const PrepopulatedEngine kagi;
extern const PrepopulatedEngine karma;
extern const PrepopulatedEngine lilo;
extern const PrepopulatedEngine mail_ru;
extern const PrepopulatedEngine mojeek;
extern const PrepopulatedEngine naver;
extern const PrepopulatedEngine nona;
extern const PrepopulatedEngine oceanhero;
extern const PrepopulatedEngine panda;
extern const PrepopulatedEngine perplexity;
extern const PrepopulatedEngine privacywall;
extern const PrepopulatedEngine quendu;
extern const PrepopulatedEngine seznam;
extern const PrepopulatedEngine so_360;
extern const PrepopulatedEngine sogou;
extern const PrepopulatedEngine startpage;
extern const PrepopulatedEngine yahoo;
extern const PrepopulatedEngine yahoo_ar;
extern const PrepopulatedEngine yahoo_at;
extern const PrepopulatedEngine yahoo_au;
extern const PrepopulatedEngine yahoo_br;
extern const PrepopulatedEngine yahoo_ca;
extern const PrepopulatedEngine yahoo_ch;
extern const PrepopulatedEngine yahoo_cl;
extern const PrepopulatedEngine yahoo_co;
extern const PrepopulatedEngine yahoo_de;
extern const PrepopulatedEngine yahoo_dk;
extern const PrepopulatedEngine yahoo_emea;
extern const PrepopulatedEngine yahoo_es;
extern const PrepopulatedEngine yahoo_fi;
extern const PrepopulatedEngine yahoo_fr;
extern const PrepopulatedEngine yahoo_hk;
extern const PrepopulatedEngine yahoo_id;
extern const PrepopulatedEngine yahoo_in;
extern const PrepopulatedEngine yahoo_it;
extern const PrepopulatedEngine yahoo_jp;
extern const PrepopulatedEngine yahoo_jp_next;
extern const PrepopulatedEngine yahoo_mx;
extern const PrepopulatedEngine yahoo_my;
extern const PrepopulatedEngine yahoo_nl;
extern const PrepopulatedEngine yahoo_nz;
extern const PrepopulatedEngine yahoo_pe;
extern const PrepopulatedEngine yahoo_ph;
extern const PrepopulatedEngine yahoo_se;
extern const PrepopulatedEngine yahoo_sg;
extern const PrepopulatedEngine yahoo_th;
extern const PrepopulatedEngine yahoo_tr;
extern const PrepopulatedEngine yahoo_tw;
extern const PrepopulatedEngine yahoo_uk;
extern const PrepopulatedEngine yandex_com;
extern const PrepopulatedEngine yandex_by;
extern const PrepopulatedEngine yandex_kz;
extern const PrepopulatedEngine yandex_ru;
extern const PrepopulatedEngine yandex_tr;
extern const PrepopulatedEngine yep;
extern const PrepopulatedEngine you;

extern const std::array<raw_ptr<const PrepopulatedEngine>, 65> kAllEngines;

}  // namespace TemplateURLPrepopulateData

#endif  // PREPOPULATED_ENGINES_H_
