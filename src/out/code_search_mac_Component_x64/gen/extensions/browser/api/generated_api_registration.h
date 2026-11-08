// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   extensions/common/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --bundle-name= --generator=cpp-bundle-registration --impl-dir=extensions/browser/api --include-rules= ../../extensions/common/api/alarms.webidl ../../extensions/common/api/cookies.json ../../extensions/common/api/declarative_net_request.webidl ../../extensions/common/api/dns.webidl ../../extensions/common/api/events.json ../../extensions/common/api/i18n.json ../../extensions/common/api/idle.json ../../extensions/common/api/management.json ../../extensions/common/api/metrics_private.json ../../extensions/common/api/offscreen.webidl ../../extensions/common/api/permissions.json ../../extensions/common/api/power.webidl ../../extensions/common/api/proxy.json ../../extensions/common/api/runtime.json ../../extensions/common/api/scripting.webidl ../../extensions/common/api/storage.json ../../extensions/common/api/system_cpu.webidl ../../extensions/common/api/system_display.webidl ../../extensions/common/api/system_memory.webidl ../../extensions/common/api/system_network.webidl ../../extensions/common/api/test.json ../../extensions/common/api/user_scripts.webidl ../../extensions/common/api/web_request.json ../../extensions/common/api/webstore_private.json ../../extensions/common/api/guest_view_internal.json ../../extensions/common/api/web_view_internal.json ../../extensions/common/api/app_current_window_internal.webidl ../../extensions/common/api/app_runtime.webidl ../../extensions/common/api/app_window.webidl ../../extensions/common/api/automation_internal.webidl ../../extensions/common/api/cec_private.webidl ../../extensions/common/api/clipboard.webidl ../../extensions/common/api/feedback_private.webidl ../../extensions/common/api/file_system.webidl ../../extensions/common/api/hid.webidl ../../extensions/common/api/mime_handler.webidl ../../extensions/common/api/networking_private.webidl ../../extensions/common/api/printer_provider_internal.webidl ../../extensions/common/api/printer_provider.webidl ../../extensions/common/api/socket.webidl ../../extensions/common/api/sockets_tcp_server.webidl ../../extensions/common/api/sockets_tcp.webidl ../../extensions/common/api/sockets_udp.webidl ../../extensions/common/api/system_storage.webidl ../../extensions/common/api/web_request_internal.json

#ifndef EXTENSIONS_COMMON_API_GENERATED_API_H__
#define EXTENSIONS_COMMON_API_GENERATED_API_H__

#include <string>

class ExtensionFunctionRegistry;

namespace extensions {
namespace api {

class GeneratedFunctionRegistry {
 public:
  static void RegisterAll(ExtensionFunctionRegistry* registry);
};

}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_GENERATED_API_H__
