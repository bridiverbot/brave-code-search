// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/printer_provider_internal.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../extensions/common/api/printer_provider_internal.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=

#include "extensions/common/api/printer_provider_internal.h"

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
#include "extensions/common/api/printer_provider.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace printer_provider_internal {
//
// Functions
//

namespace ReportPrinters {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& printers_value = args[1];
    {
      if (!printers_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(printers_value.GetList(), params.printers)) {
          return std::nullopt;
        }
      }
    }
  }

  return params;
}


}  // namespace ReportPrinters

namespace ReportUsbPrinterInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& printer_info_value = args[1];
    {
      if (!printer_info_value.is_dict()) {
        return std::nullopt;
      }
      else {
        extensions::api::printer_provider::PrinterInfo temp;
        if (!extensions::api::printer_provider::PrinterInfo::Populate(printer_info_value.GetDict(), temp))
          return std::nullopt;
        params.printer_info = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace ReportUsbPrinterInfo

namespace ReportPrinterCapability {

Params::Capability::Capability()
 {}

Params::Capability::~Capability() = default;
Params::Capability::Capability(Capability&& rhs) noexcept = default;
Params::Capability& Params::Capability::operator=(Capability&& rhs) noexcept = default;
Params::Capability Params::Capability::Clone() const {
  Capability out;
  out.additional_properties = additional_properties.Clone();
  return out;
}

// static
bool Params::Capability::Populate(
    const base::DictValue& dict, Capability& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Capability::Populate(
    const base::Value& value, Capability& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Capability> Params::Capability::FromValue(const base::DictValue& value) {
  Capability out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Capability> Params::Capability::FromValue(const base::Value& value) {
  Capability out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& capability_value = args[1];
    {
      if (!capability_value.is_dict()) {
        return std::nullopt;
      }
      else {
        Capability temp;
        if (!Capability::Populate(capability_value.GetDict(), temp))
          return std::nullopt;
        params.capability = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace ReportPrinterCapability

namespace ReportPrintResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;
  params.error = extensions::api::printer_provider::PrintError();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& error_value = args[1];
    {
      const std::string* print_error_as_string = error_value.GetIfString();
      if (!print_error_as_string) {
        return std::nullopt;
      }
      params.error = extensions::api::printer_provider::ParsePrintError(*print_error_as_string);
      if (params.error == extensions::api::printer_provider::PrintError()) {
        return std::nullopt;
      }
    }
  }

  return params;
}


}  // namespace ReportPrintResult

namespace GetPrintData {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Blob::Blob()
 {}

Results::Blob::~Blob() = default;
Results::Blob::Blob(Blob&& rhs) noexcept = default;
Results::Blob& Results::Blob::operator=(Blob&& rhs) noexcept = default;
base::DictValue Results::Blob::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::ListValue Results::Create(const Blob& blob) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((blob).ToValue());

  return create_results;
}
}  // namespace GetPrintData

}  // namespace printer_provider_internal
}  // namespace api
}  // namespace extensions

