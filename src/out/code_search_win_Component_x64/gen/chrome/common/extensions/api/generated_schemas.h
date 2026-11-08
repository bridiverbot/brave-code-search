// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITIONS IN
//   chrome/common/extensions/api
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --bundle-name=Chrome --generator=cpp-bundle-schema --include-rules=extensions/common/api:extensions::api::%(namespace)s ../../chrome/common/extensions/api/activity_log_private.json ../../chrome/common/extensions/api/bookmarks.json ../../chrome/common/extensions/api/content_settings.json ../../chrome/common/extensions/api/context_menus.json ../../chrome/common/extensions/api/debugger.json ../../chrome/common/extensions/api/desktop_capture.json ../../chrome/common/extensions/api/developer_private.webidl ../../chrome/common/extensions/api/downloads_internal.webidl ../../chrome/common/extensions/api/downloads.webidl ../../chrome/common/extensions/api/enterprise_hardware_platform.webidl ../../chrome/common/extensions/api/enterprise_webrtc.webidl ../../chrome/common/extensions/api/font_settings.json ../../chrome/common/extensions/api/gcm.json ../../chrome/common/extensions/api/glic_private.webidl ../../chrome/common/extensions/api/history.json ../../chrome/common/extensions/api/identity.webidl ../../chrome/common/extensions/api/instance_id.json ../../chrome/common/extensions/api/notifications.webidl ../../chrome/common/extensions/api/omnibox.json ../../chrome/common/extensions/api/page_capture.json ../../chrome/common/extensions/api/processes.idl ../../chrome/common/extensions/api/reading_list.webidl ../../chrome/common/extensions/api/search.idl ../../chrome/common/extensions/api/sessions.json ../../chrome/common/extensions/api/side_panel.idl ../../chrome/common/extensions/api/tab_capture.idl ../../chrome/common/extensions/api/tab_groups.json ../../chrome/common/extensions/api/tabs.json ../../chrome/common/extensions/api/web_navigation.json ../../chrome/common/extensions/api/webrtc_logging_private.idl ../../chrome/common/extensions/api/windows.json ../../chrome/common/extensions/api/mdns.idl ../../chrome/common/extensions/api/chrome_web_view_internal.json ../../chrome/common/extensions/api/autofill_private.idl ../../chrome/common/extensions/api/autotest_private.webidl ../../chrome/common/extensions/api/bookmark_manager_private.json ../../chrome/common/extensions/api/braille_display_private.webidl ../../chrome/common/extensions/api/command_line_private.json ../../chrome/common/extensions/api/crash_report_private.webidl ../../chrome/common/extensions/api/dictation_private.webidl ../../chrome/common/extensions/api/enterprise_reporting_private.webidl ../../chrome/common/extensions/api/experimental_actor.webidl ../../chrome/common/extensions/api/experimental_ai_data.webidl ../../chrome/common/extensions/api/image_writer_private.webidl ../../chrome/common/extensions/api/indigo_private.webidl ../../chrome/common/extensions/api/language_settings_private.webidl ../../chrome/common/extensions/api/passwords_private.webidl ../../chrome/common/extensions/api/resources_private.idl ../../chrome/common/extensions/api/safe_browsing_private.idl ../../chrome/common/extensions/api/settings_private.idl ../../chrome/common/extensions/api/system_private.json ../../chrome/common/extensions/api/webrtc_desktop_capture_private.idl ../../chrome/common/extensions/api/web_authentication_proxy.webidl ../../chrome/common/extensions/api/contextual_tasks_private.webidl ../../chrome/common/extensions/api/input_ime.json ../../chrome/common/extensions/api/pdf_viewer_private.idl ../../chrome/common/extensions/api/accessibility_features.json ../../chrome/common/extensions/api/proxy_override_rules_private.json ../../chrome/common/extensions/api/action.json ../../chrome/common/extensions/api/browsing_data.json ../../chrome/common/extensions/api/commands.json ../../chrome/common/extensions/api/extension.json ../../chrome/common/extensions/api/top_sites.json ../../chrome/common/extensions/api/browser_action.json ../../chrome/common/extensions/api/page_action.json ../../chrome/common/extensions/api/app.json ../../chrome/common/extensions/api/declarative_content.json ../../chrome/common/extensions/api/privacy.json ../../chrome/common/extensions/api/tts.json ../../chrome/common/extensions/api/tts_engine.json

#ifndef CHROME_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__
#define CHROME_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__

#include <string_view>

namespace extensions {
namespace api {

class ChromeGeneratedSchemas {
 public:
  // Determines if schema named |name| is generated.
  static bool IsGenerated(std::string_view name);

  // Gets the API schema named |name|.
  static std::string_view Get(std::string_view name);
};

}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_GENERATED_SCHEMAS_H__
