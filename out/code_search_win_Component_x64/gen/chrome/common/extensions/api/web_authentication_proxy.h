// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/web_authentication_proxy.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/web_authentication_proxy.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__
#define CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace web_authentication_proxy {

//
// Types
//

struct IsUvpaaRequest {
  IsUvpaaRequest();
  ~IsUvpaaRequest();
  IsUvpaaRequest(const IsUvpaaRequest&) = delete;
  IsUvpaaRequest& operator=(const IsUvpaaRequest&) = delete;
  IsUvpaaRequest(IsUvpaaRequest&& rhs) noexcept;
  IsUvpaaRequest& operator=(IsUvpaaRequest&& rhs) noexcept;

  // Populates a IsUvpaaRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsUvpaaRequest& out);

  // Populates a IsUvpaaRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, IsUvpaaRequest& out);

  // Creates a deep copy of IsUvpaaRequest.
  IsUvpaaRequest Clone() const;

  // Creates a IsUvpaaRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<IsUvpaaRequest> FromValue(const base::DictValue& value);

  // Creates a IsUvpaaRequest object from a base::Value, or nullopt on failure.
  static std::optional<IsUvpaaRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIsUvpaaRequest object.
  base::DictValue ToValue() const;

  // An opaque identifier for the request.
  int request_id;

};

struct CreateRequest {
  CreateRequest();
  ~CreateRequest();
  CreateRequest(const CreateRequest&) = delete;
  CreateRequest& operator=(const CreateRequest&) = delete;
  CreateRequest(CreateRequest&& rhs) noexcept;
  CreateRequest& operator=(CreateRequest&& rhs) noexcept;

  // Populates a CreateRequest object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateRequest& out);

  // Populates a CreateRequest object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CreateRequest& out);

  // Creates a deep copy of CreateRequest.
  CreateRequest Clone() const;

  // Creates a CreateRequest object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<CreateRequest> FromValue(const base::DictValue& value);

  // Creates a CreateRequest object from a base::Value, or nullopt on failure.
  static std::optional<CreateRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCreateRequest object.
  base::DictValue ToValue() const;

  // An opaque identifier for the request.
  int request_id;

  // The <code>PublicKeyCredentialCreationOptions</code> passed to
  // <code>navigator.credentials.create()</code>, serialized as a JSON string. The
  // serialization format is compatible with <a
  // href="https://w3c.github.io/webauthn/#sctn-parseCreationOptionsFromJSON">
  // <code>PublicKeyCredential.parseCreationOptionsFromJSON()</code></a>.
  std::string request_details_json;

};

struct GetRequest {
  GetRequest();
  ~GetRequest();
  GetRequest(const GetRequest&) = delete;
  GetRequest& operator=(const GetRequest&) = delete;
  GetRequest(GetRequest&& rhs) noexcept;
  GetRequest& operator=(GetRequest&& rhs) noexcept;

  // Populates a GetRequest object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, GetRequest& out);

  // Populates a GetRequest object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::DictValue& value, GetRequest& out);

  // Creates a deep copy of GetRequest.
  GetRequest Clone() const;

  // Creates a GetRequest object from a base::DictValue, or nullopt on failure.
  static std::optional<GetRequest> FromValue(const base::DictValue& value);

  // Creates a GetRequest object from a base::Value, or nullopt on failure.
  static std::optional<GetRequest> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetRequest object.
  base::DictValue ToValue() const;

  // An opaque identifier for the request.
  int request_id;

  // The <code>PublicKeyCredentialRequestOptions</code> passed to
  // <code>navigator.credentials.get()</code>, serialized as a JSON string. The
  // serialization format is compatible with <a
  // href="https://w3c.github.io/webauthn/#sctn-parseRequestOptionsFromJSON">
  // <code>PublicKeyCredential.parseRequestOptionsFromJSON()</code></a>.
  std::string request_details_json;

};

struct DOMExceptionDetails {
  DOMExceptionDetails();
  ~DOMExceptionDetails();
  DOMExceptionDetails(const DOMExceptionDetails&) = delete;
  DOMExceptionDetails& operator=(const DOMExceptionDetails&) = delete;
  DOMExceptionDetails(DOMExceptionDetails&& rhs) noexcept;
  DOMExceptionDetails& operator=(DOMExceptionDetails&& rhs) noexcept;

  // Populates a DOMExceptionDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DOMExceptionDetails& out);

  // Populates a DOMExceptionDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, DOMExceptionDetails& out);

  // Creates a deep copy of DOMExceptionDetails.
  DOMExceptionDetails Clone() const;

  // Creates a DOMExceptionDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<DOMExceptionDetails> FromValue(const base::DictValue& value);

  // Creates a DOMExceptionDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<DOMExceptionDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDOMExceptionDetails object.
  base::DictValue ToValue() const;

  std::string name;

  std::string message;

};

struct CreateResponseDetails {
  CreateResponseDetails();
  ~CreateResponseDetails();
  CreateResponseDetails(const CreateResponseDetails&) = delete;
  CreateResponseDetails& operator=(const CreateResponseDetails&) = delete;
  CreateResponseDetails(CreateResponseDetails&& rhs) noexcept;
  CreateResponseDetails& operator=(CreateResponseDetails&& rhs) noexcept;

  // Populates a CreateResponseDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateResponseDetails& out);

  // Populates a CreateResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, CreateResponseDetails& out);

  // Creates a deep copy of CreateResponseDetails.
  CreateResponseDetails Clone() const;

  // Creates a CreateResponseDetails object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<CreateResponseDetails> FromValue(const base::DictValue& value);

  // Creates a CreateResponseDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<CreateResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisCreateResponseDetails object.
  base::DictValue ToValue() const;

  // The <code>requestId</code> of the <code>CreateRequest</code>.
  int request_id;

  // The <code>DOMException</code> yielded by the remote request, if any.
  std::optional<DOMExceptionDetails> error;

  // The <code>PublicKeyCredential</code>, yielded by the remote request, if any,
  // serialized as a JSON string by calling
  // href="https://w3c.github.io/webauthn/#dom-publickeycredential-tojson">
  // <code>PublicKeyCredential.toJSON()</code></a>.
  std::optional<std::string> response_json;

};

struct GetResponseDetails {
  GetResponseDetails();
  ~GetResponseDetails();
  GetResponseDetails(const GetResponseDetails&) = delete;
  GetResponseDetails& operator=(const GetResponseDetails&) = delete;
  GetResponseDetails(GetResponseDetails&& rhs) noexcept;
  GetResponseDetails& operator=(GetResponseDetails&& rhs) noexcept;

  // Populates a GetResponseDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetResponseDetails& out);

  // Populates a GetResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, GetResponseDetails& out);

  // Creates a deep copy of GetResponseDetails.
  GetResponseDetails Clone() const;

  // Creates a GetResponseDetails object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<GetResponseDetails> FromValue(const base::DictValue& value);

  // Creates a GetResponseDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisGetResponseDetails object.
  base::DictValue ToValue() const;

  // The <code>requestId</code> of the <code>CreateRequest</code>.
  int request_id;

  // The <code>DOMException</code> yielded by the remote request, if any.
  std::optional<DOMExceptionDetails> error;

  // The <code>PublicKeyCredential</code>, yielded by the remote request, if any,
  // serialized as a JSON string by calling
  // href="https://w3c.github.io/webauthn/#dom-publickeycredential-tojson">
  // <code>PublicKeyCredential.toJSON()</code></a>.
  std::optional<std::string> response_json;

};

struct IsUvpaaResponseDetails {
  IsUvpaaResponseDetails();
  ~IsUvpaaResponseDetails();
  IsUvpaaResponseDetails(const IsUvpaaResponseDetails&) = delete;
  IsUvpaaResponseDetails& operator=(const IsUvpaaResponseDetails&) = delete;
  IsUvpaaResponseDetails(IsUvpaaResponseDetails&& rhs) noexcept;
  IsUvpaaResponseDetails& operator=(IsUvpaaResponseDetails&& rhs) noexcept;

  // Populates a IsUvpaaResponseDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsUvpaaResponseDetails& out);

  // Populates a IsUvpaaResponseDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, IsUvpaaResponseDetails& out);

  // Creates a deep copy of IsUvpaaResponseDetails.
  IsUvpaaResponseDetails Clone() const;

  // Creates a IsUvpaaResponseDetails object from a base::DictValue, or nullopt
  // on failure.
  static std::optional<IsUvpaaResponseDetails> FromValue(const base::DictValue& value);

  // Creates a IsUvpaaResponseDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<IsUvpaaResponseDetails> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisIsUvpaaResponseDetails object.
  base::DictValue ToValue() const;

  int request_id;

  bool is_uvpaa;

};


//
// Functions
//

namespace CompleteCreateRequest {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  CreateResponseDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace CompleteCreateRequest

namespace CompleteGetRequest {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  GetResponseDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace CompleteGetRequest

namespace CompleteIsUvpaaRequest {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  IsUvpaaResponseDetails details;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace CompleteIsUvpaaRequest

namespace Attach {

namespace Results {

base::ListValue Create(const std::string& error);
}  // namespace Results

}  // namespace Attach

namespace Detach {

namespace Results {

base::ListValue Create(const std::string& error);
}  // namespace Results

}  // namespace Detach

//
// Events
//

namespace OnRemoteSessionStateChange {

extern const char kEventName[];  // "webAuthenticationProxy.onRemoteSessionStateChange"

base::ListValue Create();
}  // namespace OnRemoteSessionStateChange

namespace OnCreateRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onCreateRequest"

base::ListValue Create(const CreateRequest& request_info);
}  // namespace OnCreateRequest

namespace OnGetRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onGetRequest"

base::ListValue Create(const GetRequest& request_info);
}  // namespace OnGetRequest

namespace OnIsUvpaaRequest {

extern const char kEventName[];  // "webAuthenticationProxy.onIsUvpaaRequest"

base::ListValue Create(const IsUvpaaRequest& request_info);
}  // namespace OnIsUvpaaRequest

namespace OnRequestCanceled {

extern const char kEventName[];  // "webAuthenticationProxy.onRequestCanceled"

base::ListValue Create(int request_id);
}  // namespace OnRequestCanceled

}  // namespace web_authentication_proxy
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEB_AUTHENTICATION_PROXY_H__
