// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/contextual_tasks_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/contextual_tasks_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/contextual_tasks_private.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace contextual_tasks_private {
//
// Types
//

ProfileState::ProfileState()
: is_eligible(false) {}

ProfileState::~ProfileState() = default;
ProfileState::ProfileState(ProfileState&& rhs) noexcept = default;
ProfileState& ProfileState::operator=(ProfileState&& rhs) noexcept = default;
ProfileState ProfileState::Clone() const {
  ProfileState out;
  out.is_eligible = is_eligible;
  return out;
}

// static
bool ProfileState::Populate(
    const base::DictValue& dict, ProfileState& out) {
  const base::Value* is_eligible_value = dict.Find("isEligible");
  if (!is_eligible_value) {
    return false;
  }
  {
    auto temp = (*is_eligible_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_eligible = *temp;
  }

  return true;
}

// static
bool ProfileState::Populate(
    const base::Value& value, ProfileState& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfileState> ProfileState::FromValue(const base::DictValue& value) {
  ProfileState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfileState> ProfileState::FromValue(const base::Value& value) {
  ProfileState out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ProfileState::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("isEligible", this->is_eligible);


  return to_value_result;
}


AimParams::AimParams()
 {}

AimParams::~AimParams() = default;
AimParams::AimParams(AimParams&& rhs) noexcept = default;
AimParams& AimParams::operator=(AimParams&& rhs) noexcept = default;
AimParams AimParams::Clone() const {
  AimParams out;
  out.ntc = ntc;
  out.mstk = mstk;
  out.aioh = aioh;
  out.csuir = csuir;
  out.ved = ved;
  out.cs = cs;
  out.sxsrf = sxsrf;
  out.ei = ei;
  out.q = q;
  return out;
}

// static
bool AimParams::Populate(
    const base::DictValue& dict, AimParams& out) {
  const base::Value* ntc_value = dict.Find("ntc");
  if (ntc_value) {
    {
      auto* temp = (*ntc_value).GetIfString();
      if (!temp) {
        out.ntc = std::nullopt;
        return false;
      }
      out.ntc = *temp;
    }
  }

  const base::Value* mstk_value = dict.Find("mstk");
  if (mstk_value) {
    {
      auto* temp = (*mstk_value).GetIfString();
      if (!temp) {
        out.mstk = std::nullopt;
        return false;
      }
      out.mstk = *temp;
    }
  }

  const base::Value* aioh_value = dict.Find("aioh");
  if (aioh_value) {
    {
      auto* temp = (*aioh_value).GetIfString();
      if (!temp) {
        out.aioh = std::nullopt;
        return false;
      }
      out.aioh = *temp;
    }
  }

  const base::Value* csuir_value = dict.Find("csuir");
  if (csuir_value) {
    {
      auto* temp = (*csuir_value).GetIfString();
      if (!temp) {
        out.csuir = std::nullopt;
        return false;
      }
      out.csuir = *temp;
    }
  }

  const base::Value* ved_value = dict.Find("ved");
  if (ved_value) {
    {
      auto* temp = (*ved_value).GetIfString();
      if (!temp) {
        out.ved = std::nullopt;
        return false;
      }
      out.ved = *temp;
    }
  }

  const base::Value* cs_value = dict.Find("cs");
  if (cs_value) {
    {
      auto* temp = (*cs_value).GetIfString();
      if (!temp) {
        out.cs = std::nullopt;
        return false;
      }
      out.cs = *temp;
    }
  }

  const base::Value* sxsrf_value = dict.Find("sxsrf");
  if (sxsrf_value) {
    {
      auto* temp = (*sxsrf_value).GetIfString();
      if (!temp) {
        out.sxsrf = std::nullopt;
        return false;
      }
      out.sxsrf = *temp;
    }
  }

  const base::Value* ei_value = dict.Find("ei");
  if (ei_value) {
    {
      auto* temp = (*ei_value).GetIfString();
      if (!temp) {
        out.ei = std::nullopt;
        return false;
      }
      out.ei = *temp;
    }
  }

  const base::Value* q_value = dict.Find("q");
  if (q_value) {
    {
      auto* temp = (*q_value).GetIfString();
      if (!temp) {
        out.q = std::nullopt;
        return false;
      }
      out.q = *temp;
    }
  }

  return true;
}

// static
bool AimParams::Populate(
    const base::Value& value, AimParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AimParams> AimParams::FromValue(const base::DictValue& value) {
  AimParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AimParams> AimParams::FromValue(const base::Value& value) {
  AimParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AimParams::ToValue() const {
  base::DictValue to_value_result;

  if (this->ntc) {
    to_value_result.Set("ntc", *this->ntc);

  }
  if (this->mstk) {
    to_value_result.Set("mstk", *this->mstk);

  }
  if (this->aioh) {
    to_value_result.Set("aioh", *this->aioh);

  }
  if (this->csuir) {
    to_value_result.Set("csuir", *this->csuir);

  }
  if (this->ved) {
    to_value_result.Set("ved", *this->ved);

  }
  if (this->cs) {
    to_value_result.Set("cs", *this->cs);

  }
  if (this->sxsrf) {
    to_value_result.Set("sxsrf", *this->sxsrf);

  }
  if (this->ei) {
    to_value_result.Set("ei", *this->ei);

  }
  if (this->q) {
    to_value_result.Set("q", *this->q);

  }

  return to_value_result;
}


LaunchPanelInNewTabDetails::LaunchPanelInNewTabDetails()
 {}

LaunchPanelInNewTabDetails::~LaunchPanelInNewTabDetails() = default;
LaunchPanelInNewTabDetails::LaunchPanelInNewTabDetails(LaunchPanelInNewTabDetails&& rhs) noexcept = default;
LaunchPanelInNewTabDetails& LaunchPanelInNewTabDetails::operator=(LaunchPanelInNewTabDetails&& rhs) noexcept = default;
LaunchPanelInNewTabDetails LaunchPanelInNewTabDetails::Clone() const {
  LaunchPanelInNewTabDetails out;
  out.aim_params = aim_params.Clone();
  out.target_url = target_url;
  out.document_id = document_id;
  return out;
}

// static
bool LaunchPanelInNewTabDetails::Populate(
    const base::DictValue& dict, LaunchPanelInNewTabDetails& out) {
  const base::Value* aim_params_value = dict.Find("aimParams");
  if (!aim_params_value) {
    return false;
  }
  {
    if (!(*aim_params_value).is_dict()) {
      return false;
    }
    if (!AimParams::Populate((*aim_params_value).GetDict(), out.aim_params)) {
      return false;
    }
  }

  const base::Value* target_url_value = dict.Find("targetUrl");
  if (!target_url_value) {
    return false;
  }
  {
    auto* temp = (*target_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.target_url = *temp;
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (!document_id_value) {
    return false;
  }
  {
    auto* temp = (*document_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.document_id = *temp;
  }

  return true;
}

// static
bool LaunchPanelInNewTabDetails::Populate(
    const base::Value& value, LaunchPanelInNewTabDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LaunchPanelInNewTabDetails> LaunchPanelInNewTabDetails::FromValue(const base::DictValue& value) {
  LaunchPanelInNewTabDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LaunchPanelInNewTabDetails> LaunchPanelInNewTabDetails::FromValue(const base::Value& value) {
  LaunchPanelInNewTabDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue LaunchPanelInNewTabDetails::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("aimParams", (this->aim_params).ToValue());

  to_value_result.Set("targetUrl", this->target_url);

  to_value_result.Set("documentId", this->document_id);


  return to_value_result;
}



//
// Functions
//

namespace GetState {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& document_id_value = args[0];
    {
      auto* temp = document_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.document_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const ProfileState& state) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((state).ToValue());

  return create_results;
}
}  // namespace GetState

namespace LaunchPanelInNewTab {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!LaunchPanelInNewTabDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace LaunchPanelInNewTab

}  // namespace contextual_tasks_private
}  // namespace api
}  // namespace extensions

