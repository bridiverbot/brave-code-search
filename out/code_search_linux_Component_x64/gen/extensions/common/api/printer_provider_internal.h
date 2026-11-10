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

#ifndef EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__
#define EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "extensions/common/api/printer_provider.h"


namespace extensions {
namespace api {
namespace printer_provider_internal {

//
// Functions
//

namespace ReportPrinters {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  // List of printers reported by the extension.
  std::optional<std::vector<extensions::api::printer_provider::PrinterInfo>> printers;


 private:
  Params();
};

}  // namespace ReportPrinters

namespace ReportUsbPrinterInfo {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  // Printer information reported by the extension.
  std::optional<extensions::api::printer_provider::PrinterInfo> printer_info;


 private:
  Params();
};

}  // namespace ReportUsbPrinterInfo

namespace ReportPrinterCapability {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Capability {
    Capability();
    ~Capability();
    Capability(const Capability&) = delete;
    Capability& operator=(const Capability&) = delete;
    Capability(Capability&& rhs) noexcept;
    Capability& operator=(Capability&& rhs) noexcept;

    // Populates a Capability object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Capability& out);

    // Populates a Capability object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::DictValue& value, Capability& out);

    // Creates a deep copy of Capability.
    Capability Clone() const;

    // Creates a Capability object from a base::DictValue, or nullopt on failure.
    static std::optional<Capability> FromValue(const base::DictValue& value);

    // Creates a Capability object from a base::Value, or nullopt on failure.
    static std::optional<Capability> FromValue(const base::Value& value);

    base::DictValue additional_properties;
  };


  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  std::optional<Capability> capability;


 private:
  Params();
};

}  // namespace ReportPrinterCapability

namespace ReportPrintResult {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Parameter identifying the event instance for which the     callback is run.
  int request_id;

  // The requested print job result.
  extensions::api::printer_provider::PrintError error;


 private:
  Params();
};

}  // namespace ReportPrintResult

namespace GetPrintData {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The request id for the print request for which data is     needed.
  int request_id;


 private:
  Params();
};

namespace Results {

struct Blob {
  Blob();
  ~Blob();
  Blob(const Blob&) = delete;
  Blob& operator=(const Blob&) = delete;
  Blob(Blob&& rhs) noexcept;
  Blob& operator=(Blob&& rhs) noexcept;

  // Returns a new base::DictValue representing the serialized form of thisBlob
  // object.
  base::DictValue ToValue() const;

  base::DictValue additional_properties;
};


base::ListValue Create(const Blob& blob);
}  // namespace Results

}  // namespace GetPrintData

}  // namespace printer_provider_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_PRINTER_PROVIDER_INTERNAL_H__
