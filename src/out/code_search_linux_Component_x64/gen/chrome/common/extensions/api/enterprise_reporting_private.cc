// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/enterprise_reporting_private.webidl
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/enterprise_reporting_private.webidl --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#include "chrome/common/extensions/api/enterprise_reporting_private.h"

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
#include <string_view>


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace enterprise_reporting_private {
//
// Types
//

const char* ToString(SettingValue enum_param) {
  switch (enum_param) {
    case SettingValue::kUnknown:
      return "UNKNOWN";
    case SettingValue::kDisabled:
      return "DISABLED";
    case SettingValue::kEnabled:
      return "ENABLED";
    case SettingValue::kNone:
      return "";
  }
  NOTREACHED();
}

SettingValue ParseSettingValue(std::string_view enum_string) {
  if (enum_string == "UNKNOWN")
    return SettingValue::kUnknown;
  if (enum_string == "DISABLED")
    return SettingValue::kDisabled;
  if (enum_string == "ENABLED")
    return SettingValue::kEnabled;
  return SettingValue::kNone;
}

std::u16string GetSettingValueParseError(std::string_view enum_string) {
  return u"expected \"UNKNOWN\" or \"DISABLED\" or \"ENABLED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


DeviceInfo::DeviceInfo()
: screen_lock_secured(),
disk_encrypted(),
secure_boot_enabled() {}

DeviceInfo::~DeviceInfo() = default;
DeviceInfo::DeviceInfo(DeviceInfo&& rhs) noexcept = default;
DeviceInfo& DeviceInfo::operator=(DeviceInfo&& rhs) noexcept = default;
DeviceInfo DeviceInfo::Clone() const {
  DeviceInfo out;
  out.os_name = os_name;
  out.os_version = os_version;
  out.device_host_name = device_host_name;
  out.device_model = device_model;
  out.serial_number = serial_number;
  out.screen_lock_secured = screen_lock_secured;
  out.disk_encrypted = disk_encrypted;
  out.mac_addresses = mac_addresses;
  out.windows_machine_domain = windows_machine_domain;
  out.windows_user_domain = windows_user_domain;
  out.security_patch_level = security_patch_level;
  out.secure_boot_enabled = secure_boot_enabled;
  return out;
}

// static
bool DeviceInfo::Populate(
    const base::DictValue& dict, DeviceInfo& out) {
  out.secure_boot_enabled = SettingValue();
  const base::Value* os_name_value = dict.Find("osName");
  if (!os_name_value) {
    return false;
  }
  {
    auto* temp = (*os_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.os_name = *temp;
  }

  const base::Value* os_version_value = dict.Find("osVersion");
  if (!os_version_value) {
    return false;
  }
  {
    auto* temp = (*os_version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.os_version = *temp;
  }

  const base::Value* device_host_name_value = dict.Find("deviceHostName");
  if (!device_host_name_value) {
    return false;
  }
  {
    auto* temp = (*device_host_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_host_name = *temp;
  }

  const base::Value* device_model_value = dict.Find("deviceModel");
  if (!device_model_value) {
    return false;
  }
  {
    auto* temp = (*device_model_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.device_model = *temp;
  }

  const base::Value* serial_number_value = dict.Find("serialNumber");
  if (!serial_number_value) {
    return false;
  }
  {
    auto* temp = (*serial_number_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.serial_number = *temp;
  }

  const base::Value* screen_lock_secured_value = dict.Find("screenLockSecured");
  if (!screen_lock_secured_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*screen_lock_secured_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.screen_lock_secured = ParseSettingValue(*setting_value_as_string);
    if (out.screen_lock_secured == SettingValue()) {
      return false;
    }
  }

  const base::Value* disk_encrypted_value = dict.Find("diskEncrypted");
  if (!disk_encrypted_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*disk_encrypted_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.disk_encrypted = ParseSettingValue(*setting_value_as_string);
    if (out.disk_encrypted == SettingValue()) {
      return false;
    }
  }

  const base::Value* mac_addresses_value = dict.Find("macAddresses");
  if (!mac_addresses_value) {
    return false;
  }
  {
    if (!(*mac_addresses_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*mac_addresses_value).GetList(), out.mac_addresses)) {
        return false;
      }
    }
  }

  const base::Value* windows_machine_domain_value = dict.Find("windowsMachineDomain");
  if (windows_machine_domain_value) {
    {
      auto* temp = (*windows_machine_domain_value).GetIfString();
      if (!temp) {
        out.windows_machine_domain = std::nullopt;
        return false;
      }
      out.windows_machine_domain = *temp;
    }
  }

  const base::Value* windows_user_domain_value = dict.Find("windowsUserDomain");
  if (windows_user_domain_value) {
    {
      auto* temp = (*windows_user_domain_value).GetIfString();
      if (!temp) {
        out.windows_user_domain = std::nullopt;
        return false;
      }
      out.windows_user_domain = *temp;
    }
  }

  const base::Value* security_patch_level_value = dict.Find("securityPatchLevel");
  if (!security_patch_level_value) {
    return false;
  }
  {
    auto* temp = (*security_patch_level_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.security_patch_level = *temp;
  }

  const base::Value* secure_boot_enabled_value = dict.Find("secureBootEnabled");
  if (secure_boot_enabled_value) {
    {
      const std::string* setting_value_as_string = (*secure_boot_enabled_value).GetIfString();
      if (!setting_value_as_string) {
        return false;
      }
      out.secure_boot_enabled = ParseSettingValue(*setting_value_as_string);
      if (out.secure_boot_enabled == SettingValue()) {
        return false;
      }
    }
    } else {
    out.secure_boot_enabled = SettingValue();
  }

  return true;
}

// static
bool DeviceInfo::Populate(
    const base::Value& value, DeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeviceInfo> DeviceInfo::FromValue(const base::DictValue& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeviceInfo> DeviceInfo::FromValue(const base::Value& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DeviceInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("osName", this->os_name);

  to_value_result.Set("osVersion", this->os_version);

  to_value_result.Set("deviceHostName", this->device_host_name);

  to_value_result.Set("deviceModel", this->device_model);

  to_value_result.Set("serialNumber", this->serial_number);

  to_value_result.Set("screenLockSecured", enterprise_reporting_private::ToString(this->screen_lock_secured));

  to_value_result.Set("diskEncrypted", enterprise_reporting_private::ToString(this->disk_encrypted));

  to_value_result.Set("macAddresses", json_schema_compiler::util::CreateValueFromArray(this->mac_addresses));

  if (this->windows_machine_domain) {
    to_value_result.Set("windowsMachineDomain", *this->windows_machine_domain);

  }
  if (this->windows_user_domain) {
    to_value_result.Set("windowsUserDomain", *this->windows_user_domain);

  }
  to_value_result.Set("securityPatchLevel", this->security_patch_level);

  if (this->secure_boot_enabled != SettingValue()) {
    to_value_result.Set("secureBootEnabled", enterprise_reporting_private::ToString(this->secure_boot_enabled));

  }

  return to_value_result;
}


const char* ToString(RealtimeUrlCheckMode enum_param) {
  switch (enum_param) {
    case RealtimeUrlCheckMode::kDisabled:
      return "DISABLED";
    case RealtimeUrlCheckMode::kEnabledMainFrame:
      return "ENABLED_MAIN_FRAME";
    case RealtimeUrlCheckMode::kNone:
      return "";
  }
  NOTREACHED();
}

RealtimeUrlCheckMode ParseRealtimeUrlCheckMode(std::string_view enum_string) {
  if (enum_string == "DISABLED")
    return RealtimeUrlCheckMode::kDisabled;
  if (enum_string == "ENABLED_MAIN_FRAME")
    return RealtimeUrlCheckMode::kEnabledMainFrame;
  return RealtimeUrlCheckMode::kNone;
}

std::u16string GetRealtimeUrlCheckModeParseError(std::string_view enum_string) {
  return u"expected \"DISABLED\" or \"ENABLED_MAIN_FRAME\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SafeBrowsingLevel enum_param) {
  switch (enum_param) {
    case SafeBrowsingLevel::kDisabled:
      return "DISABLED";
    case SafeBrowsingLevel::kStandard:
      return "STANDARD";
    case SafeBrowsingLevel::kEnhanced:
      return "ENHANCED";
    case SafeBrowsingLevel::kNone:
      return "";
  }
  NOTREACHED();
}

SafeBrowsingLevel ParseSafeBrowsingLevel(std::string_view enum_string) {
  if (enum_string == "DISABLED")
    return SafeBrowsingLevel::kDisabled;
  if (enum_string == "STANDARD")
    return SafeBrowsingLevel::kStandard;
  if (enum_string == "ENHANCED")
    return SafeBrowsingLevel::kEnhanced;
  return SafeBrowsingLevel::kNone;
}

std::u16string GetSafeBrowsingLevelParseError(std::string_view enum_string) {
  return u"expected \"DISABLED\" or \"STANDARD\" or \"ENHANCED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PasswordProtectionTrigger enum_param) {
  switch (enum_param) {
    case PasswordProtectionTrigger::kPasswordProtectionOff:
      return "PASSWORD_PROTECTION_OFF";
    case PasswordProtectionTrigger::kPasswordReuse:
      return "PASSWORD_REUSE";
    case PasswordProtectionTrigger::kPhishingReuse:
      return "PHISHING_REUSE";
    case PasswordProtectionTrigger::kPolicyUnset:
      return "POLICY_UNSET";
    case PasswordProtectionTrigger::kNone:
      return "";
  }
  NOTREACHED();
}

PasswordProtectionTrigger ParsePasswordProtectionTrigger(std::string_view enum_string) {
  if (enum_string == "PASSWORD_PROTECTION_OFF")
    return PasswordProtectionTrigger::kPasswordProtectionOff;
  if (enum_string == "PASSWORD_REUSE")
    return PasswordProtectionTrigger::kPasswordReuse;
  if (enum_string == "PHISHING_REUSE")
    return PasswordProtectionTrigger::kPhishingReuse;
  if (enum_string == "POLICY_UNSET")
    return PasswordProtectionTrigger::kPolicyUnset;
  return PasswordProtectionTrigger::kNone;
}

std::u16string GetPasswordProtectionTriggerParseError(std::string_view enum_string) {
  return u"expected \"PASSWORD_PROTECTION_OFF\" or \"PASSWORD_REUSE\" or \"PHISHING_REUSE\" or \"POLICY_UNSET\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ContextInfo::ContextInfo()
: realtime_url_check_mode(),
safe_browsing_protection_level(),
site_isolation_enabled(false),
built_in_dns_client_enabled(false),
password_protection_warning_trigger(),
chrome_remote_desktop_app_blocked(false),
os_firewall() {}

ContextInfo::~ContextInfo() = default;
ContextInfo::ContextInfo(ContextInfo&& rhs) noexcept = default;
ContextInfo& ContextInfo::operator=(ContextInfo&& rhs) noexcept = default;
ContextInfo ContextInfo::Clone() const {
  ContextInfo out;
  out.browser_affiliation_ids = browser_affiliation_ids;
  out.profile_affiliation_ids = profile_affiliation_ids;
  out.on_file_attached_providers = on_file_attached_providers;
  out.on_file_downloaded_providers = on_file_downloaded_providers;
  out.on_bulk_data_entry_providers = on_bulk_data_entry_providers;
  out.on_print_providers = on_print_providers;
  out.realtime_url_check_mode = realtime_url_check_mode;
  out.on_security_event_providers = on_security_event_providers;
  out.browser_version = browser_version;
  out.safe_browsing_protection_level = safe_browsing_protection_level;
  out.site_isolation_enabled = site_isolation_enabled;
  out.built_in_dns_client_enabled = built_in_dns_client_enabled;
  out.password_protection_warning_trigger = password_protection_warning_trigger;
  out.chrome_remote_desktop_app_blocked = chrome_remote_desktop_app_blocked;
  out.os_firewall = os_firewall;
  out.system_dns_servers = system_dns_servers;
  out.enterprise_profile_id = enterprise_profile_id;
  return out;
}

// static
bool ContextInfo::Populate(
    const base::DictValue& dict, ContextInfo& out) {
  const base::Value* browser_affiliation_ids_value = dict.Find("browserAffiliationIds");
  if (!browser_affiliation_ids_value) {
    return false;
  }
  {
    if (!(*browser_affiliation_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*browser_affiliation_ids_value).GetList(), out.browser_affiliation_ids)) {
        return false;
      }
    }
  }

  const base::Value* profile_affiliation_ids_value = dict.Find("profileAffiliationIds");
  if (!profile_affiliation_ids_value) {
    return false;
  }
  {
    if (!(*profile_affiliation_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*profile_affiliation_ids_value).GetList(), out.profile_affiliation_ids)) {
        return false;
      }
    }
  }

  const base::Value* on_file_attached_providers_value = dict.Find("onFileAttachedProviders");
  if (!on_file_attached_providers_value) {
    return false;
  }
  {
    if (!(*on_file_attached_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_file_attached_providers_value).GetList(), out.on_file_attached_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_file_downloaded_providers_value = dict.Find("onFileDownloadedProviders");
  if (!on_file_downloaded_providers_value) {
    return false;
  }
  {
    if (!(*on_file_downloaded_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_file_downloaded_providers_value).GetList(), out.on_file_downloaded_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_bulk_data_entry_providers_value = dict.Find("onBulkDataEntryProviders");
  if (!on_bulk_data_entry_providers_value) {
    return false;
  }
  {
    if (!(*on_bulk_data_entry_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_bulk_data_entry_providers_value).GetList(), out.on_bulk_data_entry_providers)) {
        return false;
      }
    }
  }

  const base::Value* on_print_providers_value = dict.Find("onPrintProviders");
  if (!on_print_providers_value) {
    return false;
  }
  {
    if (!(*on_print_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_print_providers_value).GetList(), out.on_print_providers)) {
        return false;
      }
    }
  }

  const base::Value* realtime_url_check_mode_value = dict.Find("realtimeUrlCheckMode");
  if (!realtime_url_check_mode_value) {
    return false;
  }
  {
    const std::string* realtime_url_check_mode_as_string = (*realtime_url_check_mode_value).GetIfString();
    if (!realtime_url_check_mode_as_string) {
      return false;
    }
    out.realtime_url_check_mode = ParseRealtimeUrlCheckMode(*realtime_url_check_mode_as_string);
    if (out.realtime_url_check_mode == RealtimeUrlCheckMode()) {
      return false;
    }
  }

  const base::Value* on_security_event_providers_value = dict.Find("onSecurityEventProviders");
  if (!on_security_event_providers_value) {
    return false;
  }
  {
    if (!(*on_security_event_providers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*on_security_event_providers_value).GetList(), out.on_security_event_providers)) {
        return false;
      }
    }
  }

  const base::Value* browser_version_value = dict.Find("browserVersion");
  if (!browser_version_value) {
    return false;
  }
  {
    auto* temp = (*browser_version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.browser_version = *temp;
  }

  const base::Value* safe_browsing_protection_level_value = dict.Find("safeBrowsingProtectionLevel");
  if (!safe_browsing_protection_level_value) {
    return false;
  }
  {
    const std::string* safe_browsing_level_as_string = (*safe_browsing_protection_level_value).GetIfString();
    if (!safe_browsing_level_as_string) {
      return false;
    }
    out.safe_browsing_protection_level = ParseSafeBrowsingLevel(*safe_browsing_level_as_string);
    if (out.safe_browsing_protection_level == SafeBrowsingLevel()) {
      return false;
    }
  }

  const base::Value* site_isolation_enabled_value = dict.Find("siteIsolationEnabled");
  if (!site_isolation_enabled_value) {
    return false;
  }
  {
    auto temp = (*site_isolation_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.site_isolation_enabled = *temp;
  }

  const base::Value* built_in_dns_client_enabled_value = dict.Find("builtInDnsClientEnabled");
  if (!built_in_dns_client_enabled_value) {
    return false;
  }
  {
    auto temp = (*built_in_dns_client_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.built_in_dns_client_enabled = *temp;
  }

  const base::Value* password_protection_warning_trigger_value = dict.Find("passwordProtectionWarningTrigger");
  if (!password_protection_warning_trigger_value) {
    return false;
  }
  {
    const std::string* password_protection_trigger_as_string = (*password_protection_warning_trigger_value).GetIfString();
    if (!password_protection_trigger_as_string) {
      return false;
    }
    out.password_protection_warning_trigger = ParsePasswordProtectionTrigger(*password_protection_trigger_as_string);
    if (out.password_protection_warning_trigger == PasswordProtectionTrigger()) {
      return false;
    }
  }

  const base::Value* chrome_remote_desktop_app_blocked_value = dict.Find("chromeRemoteDesktopAppBlocked");
  if (!chrome_remote_desktop_app_blocked_value) {
    return false;
  }
  {
    auto temp = (*chrome_remote_desktop_app_blocked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.chrome_remote_desktop_app_blocked = *temp;
  }

  const base::Value* os_firewall_value = dict.Find("osFirewall");
  if (!os_firewall_value) {
    return false;
  }
  {
    const std::string* setting_value_as_string = (*os_firewall_value).GetIfString();
    if (!setting_value_as_string) {
      return false;
    }
    out.os_firewall = ParseSettingValue(*setting_value_as_string);
    if (out.os_firewall == SettingValue()) {
      return false;
    }
  }

  const base::Value* system_dns_servers_value = dict.Find("systemDnsServers");
  if (!system_dns_servers_value) {
    return false;
  }
  {
    if (!(*system_dns_servers_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*system_dns_servers_value).GetList(), out.system_dns_servers)) {
        return false;
      }
    }
  }

  const base::Value* enterprise_profile_id_value = dict.Find("enterpriseProfileId");
  if (enterprise_profile_id_value) {
    {
      auto* temp = (*enterprise_profile_id_value).GetIfString();
      if (!temp) {
        out.enterprise_profile_id = std::nullopt;
        return false;
      }
      out.enterprise_profile_id = *temp;
    }
  }

  return true;
}

// static
bool ContextInfo::Populate(
    const base::Value& value, ContextInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ContextInfo> ContextInfo::FromValue(const base::DictValue& value) {
  ContextInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ContextInfo> ContextInfo::FromValue(const base::Value& value) {
  ContextInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ContextInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("browserAffiliationIds", json_schema_compiler::util::CreateValueFromArray(this->browser_affiliation_ids));

  to_value_result.Set("profileAffiliationIds", json_schema_compiler::util::CreateValueFromArray(this->profile_affiliation_ids));

  to_value_result.Set("onFileAttachedProviders", json_schema_compiler::util::CreateValueFromArray(this->on_file_attached_providers));

  to_value_result.Set("onFileDownloadedProviders", json_schema_compiler::util::CreateValueFromArray(this->on_file_downloaded_providers));

  to_value_result.Set("onBulkDataEntryProviders", json_schema_compiler::util::CreateValueFromArray(this->on_bulk_data_entry_providers));

  to_value_result.Set("onPrintProviders", json_schema_compiler::util::CreateValueFromArray(this->on_print_providers));

  to_value_result.Set("realtimeUrlCheckMode", enterprise_reporting_private::ToString(this->realtime_url_check_mode));

  to_value_result.Set("onSecurityEventProviders", json_schema_compiler::util::CreateValueFromArray(this->on_security_event_providers));

  to_value_result.Set("browserVersion", this->browser_version);

  to_value_result.Set("safeBrowsingProtectionLevel", enterprise_reporting_private::ToString(this->safe_browsing_protection_level));

  to_value_result.Set("siteIsolationEnabled", this->site_isolation_enabled);

  to_value_result.Set("builtInDnsClientEnabled", this->built_in_dns_client_enabled);

  to_value_result.Set("passwordProtectionWarningTrigger", enterprise_reporting_private::ToString(this->password_protection_warning_trigger));

  to_value_result.Set("chromeRemoteDesktopAppBlocked", this->chrome_remote_desktop_app_blocked);

  to_value_result.Set("osFirewall", enterprise_reporting_private::ToString(this->os_firewall));

  to_value_result.Set("systemDnsServers", json_schema_compiler::util::CreateValueFromArray(this->system_dns_servers));

  if (this->enterprise_profile_id) {
    to_value_result.Set("enterpriseProfileId", *this->enterprise_profile_id);

  }

  return to_value_result;
}


const char* ToString(CertificateStatus enum_param) {
  switch (enum_param) {
    case CertificateStatus::kOk:
      return "OK";
    case CertificateStatus::kPolicyUnset:
      return "POLICY_UNSET";
    case CertificateStatus::kNone:
      return "";
  }
  NOTREACHED();
}

CertificateStatus ParseCertificateStatus(std::string_view enum_string) {
  if (enum_string == "OK")
    return CertificateStatus::kOk;
  if (enum_string == "POLICY_UNSET")
    return CertificateStatus::kPolicyUnset;
  return CertificateStatus::kNone;
}

std::u16string GetCertificateStatusParseError(std::string_view enum_string) {
  return u"expected \"OK\" or \"POLICY_UNSET\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Certificate::Certificate()
: status() {}

Certificate::~Certificate() = default;
Certificate::Certificate(Certificate&& rhs) noexcept = default;
Certificate& Certificate::operator=(Certificate&& rhs) noexcept = default;
Certificate Certificate::Clone() const {
  Certificate out;
  out.status = status;
  out.encoded_certificate = encoded_certificate;
  return out;
}

// static
bool Certificate::Populate(
    const base::DictValue& dict, Certificate& out) {
  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* certificate_status_as_string = (*status_value).GetIfString();
    if (!certificate_status_as_string) {
      return false;
    }
    out.status = ParseCertificateStatus(*certificate_status_as_string);
    if (out.status == CertificateStatus()) {
      return false;
    }
  }

  const base::Value* encoded_certificate_value = dict.Find("encodedCertificate");
  if (encoded_certificate_value) {
    {
      if (!(*encoded_certificate_value).is_blob()) {
        return false;
      }
      else {
        out.encoded_certificate = (*encoded_certificate_value).GetBlob();
      }
    }
  }

  return true;
}

// static
bool Certificate::Populate(
    const base::Value& value, Certificate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Certificate> Certificate::FromValue(const base::DictValue& value) {
  Certificate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Certificate> Certificate::FromValue(const base::Value& value) {
  Certificate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue Certificate::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("status", enterprise_reporting_private::ToString(this->status));

  if (this->encoded_certificate) {
    to_value_result.Set("encodedCertificate", base::Value(*this->encoded_certificate));

  }

  return to_value_result;
}


UserContext::UserContext()
 {}

UserContext::~UserContext() = default;
UserContext::UserContext(UserContext&& rhs) noexcept = default;
UserContext& UserContext::operator=(UserContext&& rhs) noexcept = default;
UserContext UserContext::Clone() const {
  UserContext out;
  out.user_id = user_id;
  return out;
}

// static
bool UserContext::Populate(
    const base::DictValue& dict, UserContext& out) {
  const base::Value* user_id_value = dict.Find("userId");
  if (!user_id_value) {
    return false;
  }
  {
    auto* temp = (*user_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_id = *temp;
  }

  return true;
}

// static
bool UserContext::Populate(
    const base::Value& value, UserContext& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserContext> UserContext::FromValue(const base::DictValue& value) {
  UserContext out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserContext> UserContext::FromValue(const base::Value& value) {
  UserContext out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue UserContext::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("userId", this->user_id);


  return to_value_result;
}


const char* ToString(AntiVirusProductState enum_param) {
  switch (enum_param) {
    case AntiVirusProductState::kOn:
      return "ON";
    case AntiVirusProductState::kOff:
      return "OFF";
    case AntiVirusProductState::kSnoozed:
      return "SNOOZED";
    case AntiVirusProductState::kExpired:
      return "EXPIRED";
    case AntiVirusProductState::kNone:
      return "";
  }
  NOTREACHED();
}

AntiVirusProductState ParseAntiVirusProductState(std::string_view enum_string) {
  if (enum_string == "ON")
    return AntiVirusProductState::kOn;
  if (enum_string == "OFF")
    return AntiVirusProductState::kOff;
  if (enum_string == "SNOOZED")
    return AntiVirusProductState::kSnoozed;
  if (enum_string == "EXPIRED")
    return AntiVirusProductState::kExpired;
  return AntiVirusProductState::kNone;
}

std::u16string GetAntiVirusProductStateParseError(std::string_view enum_string) {
  return u"expected \"ON\" or \"OFF\" or \"SNOOZED\" or \"EXPIRED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AntiVirusSignal::AntiVirusSignal()
: state() {}

AntiVirusSignal::~AntiVirusSignal() = default;
AntiVirusSignal::AntiVirusSignal(AntiVirusSignal&& rhs) noexcept = default;
AntiVirusSignal& AntiVirusSignal::operator=(AntiVirusSignal&& rhs) noexcept = default;
AntiVirusSignal AntiVirusSignal::Clone() const {
  AntiVirusSignal out;
  out.display_name = display_name;
  out.product_id = product_id;
  out.state = state;
  return out;
}

// static
bool AntiVirusSignal::Populate(
    const base::DictValue& dict, AntiVirusSignal& out) {
  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (!product_id_value) {
    return false;
  }
  {
    auto* temp = (*product_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.product_id = *temp;
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* anti_virus_product_state_as_string = (*state_value).GetIfString();
    if (!anti_virus_product_state_as_string) {
      return false;
    }
    out.state = ParseAntiVirusProductState(*anti_virus_product_state_as_string);
    if (out.state == AntiVirusProductState()) {
      return false;
    }
  }

  return true;
}

// static
bool AntiVirusSignal::Populate(
    const base::Value& value, AntiVirusSignal& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AntiVirusSignal> AntiVirusSignal::FromValue(const base::DictValue& value) {
  AntiVirusSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AntiVirusSignal> AntiVirusSignal::FromValue(const base::Value& value) {
  AntiVirusSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue AntiVirusSignal::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("displayName", this->display_name);

  to_value_result.Set("productId", this->product_id);

  to_value_result.Set("state", enterprise_reporting_private::ToString(this->state));


  return to_value_result;
}


HotfixSignal::HotfixSignal()
 {}

HotfixSignal::~HotfixSignal() = default;
HotfixSignal::HotfixSignal(HotfixSignal&& rhs) noexcept = default;
HotfixSignal& HotfixSignal::operator=(HotfixSignal&& rhs) noexcept = default;
HotfixSignal HotfixSignal::Clone() const {
  HotfixSignal out;
  out.hotfix_id = hotfix_id;
  return out;
}

// static
bool HotfixSignal::Populate(
    const base::DictValue& dict, HotfixSignal& out) {
  const base::Value* hotfix_id_value = dict.Find("hotfixId");
  if (!hotfix_id_value) {
    return false;
  }
  {
    auto* temp = (*hotfix_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.hotfix_id = *temp;
  }

  return true;
}

// static
bool HotfixSignal::Populate(
    const base::Value& value, HotfixSignal& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HotfixSignal> HotfixSignal::FromValue(const base::DictValue& value) {
  HotfixSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HotfixSignal> HotfixSignal::FromValue(const base::Value& value) {
  HotfixSignal out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue HotfixSignal::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("hotfixId", this->hotfix_id);


  return to_value_result;
}


const char* ToString(PresenceValue enum_param) {
  switch (enum_param) {
    case PresenceValue::kUnspecified:
      return "UNSPECIFIED";
    case PresenceValue::kAccessDenied:
      return "ACCESS_DENIED";
    case PresenceValue::kNotFound:
      return "NOT_FOUND";
    case PresenceValue::kFound:
      return "FOUND";
    case PresenceValue::kNone:
      return "";
  }
  NOTREACHED();
}

PresenceValue ParsePresenceValue(std::string_view enum_string) {
  if (enum_string == "UNSPECIFIED")
    return PresenceValue::kUnspecified;
  if (enum_string == "ACCESS_DENIED")
    return PresenceValue::kAccessDenied;
  if (enum_string == "NOT_FOUND")
    return PresenceValue::kNotFound;
  if (enum_string == "FOUND")
    return PresenceValue::kFound;
  return PresenceValue::kNone;
}

std::u16string GetPresenceValueParseError(std::string_view enum_string) {
  return u"expected \"UNSPECIFIED\" or \"ACCESS_DENIED\" or \"NOT_FOUND\" or \"FOUND\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetFileSystemInfoOptions::GetFileSystemInfoOptions()
: compute_sha256(false),
compute_executable_metadata(false) {}

GetFileSystemInfoOptions::~GetFileSystemInfoOptions() = default;
GetFileSystemInfoOptions::GetFileSystemInfoOptions(GetFileSystemInfoOptions&& rhs) noexcept = default;
GetFileSystemInfoOptions& GetFileSystemInfoOptions::operator=(GetFileSystemInfoOptions&& rhs) noexcept = default;
GetFileSystemInfoOptions GetFileSystemInfoOptions::Clone() const {
  GetFileSystemInfoOptions out;
  out.path = path;
  out.compute_sha256 = compute_sha256;
  out.compute_executable_metadata = compute_executable_metadata;
  return out;
}

// static
bool GetFileSystemInfoOptions::Populate(
    const base::DictValue& dict, GetFileSystemInfoOptions& out) {
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* compute_sha256_value = dict.Find("computeSha256");
  if (!compute_sha256_value) {
    return false;
  }
  {
    auto temp = (*compute_sha256_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.compute_sha256 = *temp;
  }

  const base::Value* compute_executable_metadata_value = dict.Find("computeExecutableMetadata");
  if (!compute_executable_metadata_value) {
    return false;
  }
  {
    auto temp = (*compute_executable_metadata_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.compute_executable_metadata = *temp;
  }

  return true;
}

// static
bool GetFileSystemInfoOptions::Populate(
    const base::Value& value, GetFileSystemInfoOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetFileSystemInfoOptions> GetFileSystemInfoOptions::FromValue(const base::DictValue& value) {
  GetFileSystemInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetFileSystemInfoOptions> GetFileSystemInfoOptions::FromValue(const base::Value& value) {
  GetFileSystemInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetFileSystemInfoOptions::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("computeSha256", this->compute_sha256);

  to_value_result.Set("computeExecutableMetadata", this->compute_executable_metadata);


  return to_value_result;
}


GetFileSystemInfoRequest::GetFileSystemInfoRequest()
 {}

GetFileSystemInfoRequest::~GetFileSystemInfoRequest() = default;
GetFileSystemInfoRequest::GetFileSystemInfoRequest(GetFileSystemInfoRequest&& rhs) noexcept = default;
GetFileSystemInfoRequest& GetFileSystemInfoRequest::operator=(GetFileSystemInfoRequest&& rhs) noexcept = default;
GetFileSystemInfoRequest GetFileSystemInfoRequest::Clone() const {
  GetFileSystemInfoRequest out;
  out.user_context = user_context.Clone();
  out.options.reserve(options.size());
  for (const auto& element : options) {
    json_schema_compiler::util::AppendToContainer(out.options, element.Clone());
  }
  return out;
}

// static
bool GetFileSystemInfoRequest::Populate(
    const base::DictValue& dict, GetFileSystemInfoRequest& out) {
  const base::Value* user_context_value = dict.Find("userContext");
  if (!user_context_value) {
    return false;
  }
  {
    if (!(*user_context_value).is_dict()) {
      return false;
    }
    if (!UserContext::Populate((*user_context_value).GetDict(), out.user_context)) {
      return false;
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (!options_value) {
    return false;
  }
  {
    if (!(*options_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*options_value).GetList(), out.options)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetFileSystemInfoRequest::Populate(
    const base::Value& value, GetFileSystemInfoRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetFileSystemInfoRequest> GetFileSystemInfoRequest::FromValue(const base::DictValue& value) {
  GetFileSystemInfoRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetFileSystemInfoRequest> GetFileSystemInfoRequest::FromValue(const base::Value& value) {
  GetFileSystemInfoRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetFileSystemInfoRequest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("userContext", (this->user_context).ToValue());

  to_value_result.Set("options", json_schema_compiler::util::CreateValueFromArray(this->options));


  return to_value_result;
}


GetFileSystemInfoResponse::GetFileSystemInfoResponse()
: presence() {}

GetFileSystemInfoResponse::~GetFileSystemInfoResponse() = default;
GetFileSystemInfoResponse::GetFileSystemInfoResponse(GetFileSystemInfoResponse&& rhs) noexcept = default;
GetFileSystemInfoResponse& GetFileSystemInfoResponse::operator=(GetFileSystemInfoResponse&& rhs) noexcept = default;
GetFileSystemInfoResponse GetFileSystemInfoResponse::Clone() const {
  GetFileSystemInfoResponse out;
  out.path = path;
  out.presence = presence;
  out.sha256_hash = sha256_hash;
  out.is_running = is_running;
  out.public_keys_hashes = public_keys_hashes;
  out.product_name = product_name;
  out.version = version;
  return out;
}

// static
bool GetFileSystemInfoResponse::Populate(
    const base::DictValue& dict, GetFileSystemInfoResponse& out) {
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* presence_value = dict.Find("presence");
  if (!presence_value) {
    return false;
  }
  {
    const std::string* presence_value_as_string = (*presence_value).GetIfString();
    if (!presence_value_as_string) {
      return false;
    }
    out.presence = ParsePresenceValue(*presence_value_as_string);
    if (out.presence == PresenceValue()) {
      return false;
    }
  }

  const base::Value* sha256_hash_value = dict.Find("sha256Hash");
  if (sha256_hash_value) {
    {
      auto* temp = (*sha256_hash_value).GetIfString();
      if (!temp) {
        out.sha256_hash = std::nullopt;
        return false;
      }
      out.sha256_hash = *temp;
    }
  }

  const base::Value* is_running_value = dict.Find("isRunning");
  if (is_running_value) {
    {
      auto temp = (*is_running_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_running = std::nullopt;
        return false;
      }
      out.is_running = *temp;
    }
  }

  const base::Value* public_keys_hashes_value = dict.Find("publicKeysHashes");
  if (public_keys_hashes_value) {
    {
      if (!(*public_keys_hashes_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*public_keys_hashes_value).GetList(), out.public_keys_hashes)) {
          return false;
        }
      }
    }
  }

  const base::Value* product_name_value = dict.Find("productName");
  if (product_name_value) {
    {
      auto* temp = (*product_name_value).GetIfString();
      if (!temp) {
        out.product_name = std::nullopt;
        return false;
      }
      out.product_name = *temp;
    }
  }

  const base::Value* version_value = dict.Find("version");
  if (version_value) {
    {
      auto* temp = (*version_value).GetIfString();
      if (!temp) {
        out.version = std::nullopt;
        return false;
      }
      out.version = *temp;
    }
  }

  return true;
}

// static
bool GetFileSystemInfoResponse::Populate(
    const base::Value& value, GetFileSystemInfoResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetFileSystemInfoResponse> GetFileSystemInfoResponse::FromValue(const base::DictValue& value) {
  GetFileSystemInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetFileSystemInfoResponse> GetFileSystemInfoResponse::FromValue(const base::Value& value) {
  GetFileSystemInfoResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetFileSystemInfoResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("presence", enterprise_reporting_private::ToString(this->presence));

  if (this->sha256_hash) {
    to_value_result.Set("sha256Hash", *this->sha256_hash);

  }
  if (this->is_running) {
    to_value_result.Set("isRunning", *this->is_running);

  }
  if (this->public_keys_hashes) {
    to_value_result.Set("publicKeysHashes", json_schema_compiler::util::CreateValueFromArray(*this->public_keys_hashes));

  }
  if (this->product_name) {
    to_value_result.Set("productName", *this->product_name);

  }
  if (this->version) {
    to_value_result.Set("version", *this->version);

  }

  return to_value_result;
}


const char* ToString(RegistryHive enum_param) {
  switch (enum_param) {
    case RegistryHive::kHkeyClassesRoot:
      return "HKEY_CLASSES_ROOT";
    case RegistryHive::kHkeyLocalMachine:
      return "HKEY_LOCAL_MACHINE";
    case RegistryHive::kHkeyCurrentUser:
      return "HKEY_CURRENT_USER";
    case RegistryHive::kNone:
      return "";
  }
  NOTREACHED();
}

RegistryHive ParseRegistryHive(std::string_view enum_string) {
  if (enum_string == "HKEY_CLASSES_ROOT")
    return RegistryHive::kHkeyClassesRoot;
  if (enum_string == "HKEY_LOCAL_MACHINE")
    return RegistryHive::kHkeyLocalMachine;
  if (enum_string == "HKEY_CURRENT_USER")
    return RegistryHive::kHkeyCurrentUser;
  return RegistryHive::kNone;
}

std::u16string GetRegistryHiveParseError(std::string_view enum_string) {
  return u"expected \"HKEY_CLASSES_ROOT\" or \"HKEY_LOCAL_MACHINE\" or \"HKEY_CURRENT_USER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


GetSettingsOptions::GetSettingsOptions()
: get_value(false),
hive() {}

GetSettingsOptions::~GetSettingsOptions() = default;
GetSettingsOptions::GetSettingsOptions(GetSettingsOptions&& rhs) noexcept = default;
GetSettingsOptions& GetSettingsOptions::operator=(GetSettingsOptions&& rhs) noexcept = default;
GetSettingsOptions GetSettingsOptions::Clone() const {
  GetSettingsOptions out;
  out.path = path;
  out.key = key;
  out.get_value = get_value;
  out.hive = hive;
  return out;
}

// static
bool GetSettingsOptions::Populate(
    const base::DictValue& dict, GetSettingsOptions& out) {
  out.hive = RegistryHive();
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* get_value_value = dict.Find("getValue");
  if (!get_value_value) {
    return false;
  }
  {
    auto temp = (*get_value_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.get_value = *temp;
  }

  const base::Value* hive_value = dict.Find("hive");
  if (hive_value) {
    {
      const std::string* registry_hive_as_string = (*hive_value).GetIfString();
      if (!registry_hive_as_string) {
        return false;
      }
      out.hive = ParseRegistryHive(*registry_hive_as_string);
      if (out.hive == RegistryHive()) {
        return false;
      }
    }
    } else {
    out.hive = RegistryHive();
  }

  return true;
}

// static
bool GetSettingsOptions::Populate(
    const base::Value& value, GetSettingsOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetSettingsOptions> GetSettingsOptions::FromValue(const base::DictValue& value) {
  GetSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetSettingsOptions> GetSettingsOptions::FromValue(const base::Value& value) {
  GetSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetSettingsOptions::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("key", this->key);

  to_value_result.Set("getValue", this->get_value);

  if (this->hive != RegistryHive()) {
    to_value_result.Set("hive", enterprise_reporting_private::ToString(this->hive));

  }

  return to_value_result;
}


GetSettingsRequest::GetSettingsRequest()
 {}

GetSettingsRequest::~GetSettingsRequest() = default;
GetSettingsRequest::GetSettingsRequest(GetSettingsRequest&& rhs) noexcept = default;
GetSettingsRequest& GetSettingsRequest::operator=(GetSettingsRequest&& rhs) noexcept = default;
GetSettingsRequest GetSettingsRequest::Clone() const {
  GetSettingsRequest out;
  out.user_context = user_context.Clone();
  out.options.reserve(options.size());
  for (const auto& element : options) {
    json_schema_compiler::util::AppendToContainer(out.options, element.Clone());
  }
  return out;
}

// static
bool GetSettingsRequest::Populate(
    const base::DictValue& dict, GetSettingsRequest& out) {
  const base::Value* user_context_value = dict.Find("userContext");
  if (!user_context_value) {
    return false;
  }
  {
    if (!(*user_context_value).is_dict()) {
      return false;
    }
    if (!UserContext::Populate((*user_context_value).GetDict(), out.user_context)) {
      return false;
    }
  }

  const base::Value* options_value = dict.Find("options");
  if (!options_value) {
    return false;
  }
  {
    if (!(*options_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*options_value).GetList(), out.options)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool GetSettingsRequest::Populate(
    const base::Value& value, GetSettingsRequest& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetSettingsRequest> GetSettingsRequest::FromValue(const base::DictValue& value) {
  GetSettingsRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetSettingsRequest> GetSettingsRequest::FromValue(const base::Value& value) {
  GetSettingsRequest out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetSettingsRequest::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("userContext", (this->user_context).ToValue());

  to_value_result.Set("options", json_schema_compiler::util::CreateValueFromArray(this->options));


  return to_value_result;
}


GetSettingsResponse::GetSettingsResponse()
: hive(),
presence() {}

GetSettingsResponse::~GetSettingsResponse() = default;
GetSettingsResponse::GetSettingsResponse(GetSettingsResponse&& rhs) noexcept = default;
GetSettingsResponse& GetSettingsResponse::operator=(GetSettingsResponse&& rhs) noexcept = default;
GetSettingsResponse GetSettingsResponse::Clone() const {
  GetSettingsResponse out;
  out.path = path;
  out.key = key;
  out.hive = hive;
  out.presence = presence;
  out.value = value;
  return out;
}

// static
bool GetSettingsResponse::Populate(
    const base::DictValue& dict, GetSettingsResponse& out) {
  out.hive = RegistryHive();
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.key = *temp;
  }

  const base::Value* hive_value = dict.Find("hive");
  if (hive_value) {
    {
      const std::string* registry_hive_as_string = (*hive_value).GetIfString();
      if (!registry_hive_as_string) {
        return false;
      }
      out.hive = ParseRegistryHive(*registry_hive_as_string);
      if (out.hive == RegistryHive()) {
        return false;
      }
    }
    } else {
    out.hive = RegistryHive();
  }

  const base::Value* presence_value = dict.Find("presence");
  if (!presence_value) {
    return false;
  }
  {
    const std::string* presence_value_as_string = (*presence_value).GetIfString();
    if (!presence_value_as_string) {
      return false;
    }
    out.presence = ParsePresenceValue(*presence_value_as_string);
    if (out.presence == PresenceValue()) {
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = std::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  return true;
}

// static
bool GetSettingsResponse::Populate(
    const base::Value& value, GetSettingsResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetSettingsResponse> GetSettingsResponse::FromValue(const base::DictValue& value) {
  GetSettingsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetSettingsResponse> GetSettingsResponse::FromValue(const base::Value& value) {
  GetSettingsResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue GetSettingsResponse::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("key", this->key);

  if (this->hive != RegistryHive()) {
    to_value_result.Set("hive", enterprise_reporting_private::ToString(this->hive));

  }
  to_value_result.Set("presence", enterprise_reporting_private::ToString(this->presence));

  if (this->value) {
    to_value_result.Set("value", *this->value);

  }

  return to_value_result;
}


const char* ToString(EventResult enum_param) {
  switch (enum_param) {
    case EventResult::kEventResultDataMasked:
      return "EVENT_RESULT_DATA_MASKED";
    case EventResult::kEventResultDataUnmasked:
      return "EVENT_RESULT_DATA_UNMASKED";
    case EventResult::kNone:
      return "";
  }
  NOTREACHED();
}

EventResult ParseEventResult(std::string_view enum_string) {
  if (enum_string == "EVENT_RESULT_DATA_MASKED")
    return EventResult::kEventResultDataMasked;
  if (enum_string == "EVENT_RESULT_DATA_UNMASKED")
    return EventResult::kEventResultDataUnmasked;
  return EventResult::kNone;
}

std::u16string GetEventResultParseError(std::string_view enum_string) {
  return u"expected \"EVENT_RESULT_DATA_MASKED\" or \"EVENT_RESULT_DATA_UNMASKED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DetectorType enum_param) {
  switch (enum_param) {
    case DetectorType::kPredefinedDlp:
      return "PREDEFINED_DLP";
    case DetectorType::kUserDefined:
      return "USER_DEFINED";
    case DetectorType::kNone:
      return "";
  }
  NOTREACHED();
}

DetectorType ParseDetectorType(std::string_view enum_string) {
  if (enum_string == "PREDEFINED_DLP")
    return DetectorType::kPredefinedDlp;
  if (enum_string == "USER_DEFINED")
    return DetectorType::kUserDefined;
  return DetectorType::kNone;
}

std::u16string GetDetectorTypeParseError(std::string_view enum_string) {
  return u"expected \"PREDEFINED_DLP\" or \"USER_DEFINED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


MatchedDetector::MatchedDetector()
: detector_type() {}

MatchedDetector::~MatchedDetector() = default;
MatchedDetector::MatchedDetector(MatchedDetector&& rhs) noexcept = default;
MatchedDetector& MatchedDetector::operator=(MatchedDetector&& rhs) noexcept = default;
MatchedDetector MatchedDetector::Clone() const {
  MatchedDetector out;
  out.detector_id = detector_id;
  out.display_name = display_name;
  out.mask_type = mask_type;
  out.pattern = pattern;
  out.detector_type = detector_type;
  out.mask_text = mask_text;
  return out;
}

// static
bool MatchedDetector::Populate(
    const base::DictValue& dict, MatchedDetector& out) {
  out.detector_type = DetectorType();
  const base::Value* detector_id_value = dict.Find("detectorId");
  if (!detector_id_value) {
    return false;
  }
  {
    auto* temp = (*detector_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.detector_id = *temp;
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (!display_name_value) {
    return false;
  }
  {
    auto* temp = (*display_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.display_name = *temp;
  }

  const base::Value* mask_type_value = dict.Find("maskType");
  if (mask_type_value) {
    {
      auto* temp = (*mask_type_value).GetIfString();
      if (!temp) {
        out.mask_type = std::nullopt;
        return false;
      }
      out.mask_type = *temp;
    }
  }

  const base::Value* pattern_value = dict.Find("pattern");
  if (pattern_value) {
    {
      auto* temp = (*pattern_value).GetIfString();
      if (!temp) {
        out.pattern = std::nullopt;
        return false;
      }
      out.pattern = *temp;
    }
  }

  const base::Value* detector_type_value = dict.Find("detectorType");
  if (detector_type_value) {
    {
      const std::string* detector_type_as_string = (*detector_type_value).GetIfString();
      if (!detector_type_as_string) {
        return false;
      }
      out.detector_type = ParseDetectorType(*detector_type_as_string);
      if (out.detector_type == DetectorType()) {
        return false;
      }
    }
    } else {
    out.detector_type = DetectorType();
  }

  const base::Value* mask_text_value = dict.Find("maskText");
  if (mask_text_value) {
    {
      auto* temp = (*mask_text_value).GetIfString();
      if (!temp) {
        out.mask_text = std::nullopt;
        return false;
      }
      out.mask_text = *temp;
    }
  }

  return true;
}

// static
bool MatchedDetector::Populate(
    const base::Value& value, MatchedDetector& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MatchedDetector> MatchedDetector::FromValue(const base::DictValue& value) {
  MatchedDetector out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MatchedDetector> MatchedDetector::FromValue(const base::Value& value) {
  MatchedDetector out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue MatchedDetector::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("detectorId", this->detector_id);

  to_value_result.Set("displayName", this->display_name);

  if (this->mask_type) {
    to_value_result.Set("maskType", *this->mask_type);

  }
  if (this->pattern) {
    to_value_result.Set("pattern", *this->pattern);

  }
  if (this->detector_type != DetectorType()) {
    to_value_result.Set("detectorType", enterprise_reporting_private::ToString(this->detector_type));

  }
  if (this->mask_text) {
    to_value_result.Set("maskText", *this->mask_text);

  }

  return to_value_result;
}


TriggeredRuleInfo::TriggeredRuleInfo()
 {}

TriggeredRuleInfo::~TriggeredRuleInfo() = default;
TriggeredRuleInfo::TriggeredRuleInfo(TriggeredRuleInfo&& rhs) noexcept = default;
TriggeredRuleInfo& TriggeredRuleInfo::operator=(TriggeredRuleInfo&& rhs) noexcept = default;
TriggeredRuleInfo TriggeredRuleInfo::Clone() const {
  TriggeredRuleInfo out;
  out.rule_id = rule_id;
  out.rule_name = rule_name;
  out.matched_detectors.reserve(matched_detectors.size());
  for (const auto& element : matched_detectors) {
    json_schema_compiler::util::AppendToContainer(out.matched_detectors, element.Clone());
  }
  return out;
}

// static
bool TriggeredRuleInfo::Populate(
    const base::DictValue& dict, TriggeredRuleInfo& out) {
  const base::Value* rule_id_value = dict.Find("ruleId");
  if (!rule_id_value) {
    return false;
  }
  {
    auto* temp = (*rule_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.rule_id = *temp;
  }

  const base::Value* rule_name_value = dict.Find("ruleName");
  if (!rule_name_value) {
    return false;
  }
  {
    auto* temp = (*rule_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.rule_name = *temp;
  }

  const base::Value* matched_detectors_value = dict.Find("matchedDetectors");
  if (!matched_detectors_value) {
    return false;
  }
  {
    if (!(*matched_detectors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*matched_detectors_value).GetList(), out.matched_detectors)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool TriggeredRuleInfo::Populate(
    const base::Value& value, TriggeredRuleInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TriggeredRuleInfo> TriggeredRuleInfo::FromValue(const base::DictValue& value) {
  TriggeredRuleInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TriggeredRuleInfo> TriggeredRuleInfo::FromValue(const base::Value& value) {
  TriggeredRuleInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue TriggeredRuleInfo::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("ruleId", this->rule_id);

  to_value_result.Set("ruleName", this->rule_name);

  to_value_result.Set("matchedDetectors", json_schema_compiler::util::CreateValueFromArray(this->matched_detectors));


  return to_value_result;
}


DataMaskingEvent::DataMaskingEvent()
: event_result() {}

DataMaskingEvent::~DataMaskingEvent() = default;
DataMaskingEvent::DataMaskingEvent(DataMaskingEvent&& rhs) noexcept = default;
DataMaskingEvent& DataMaskingEvent::operator=(DataMaskingEvent&& rhs) noexcept = default;
DataMaskingEvent DataMaskingEvent::Clone() const {
  DataMaskingEvent out;
  out.url = url;
  out.event_result = event_result;
  out.triggered_rule_info.reserve(triggered_rule_info.size());
  for (const auto& element : triggered_rule_info) {
    json_schema_compiler::util::AppendToContainer(out.triggered_rule_info, element.Clone());
  }
  return out;
}

// static
bool DataMaskingEvent::Populate(
    const base::DictValue& dict, DataMaskingEvent& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* event_result_value = dict.Find("eventResult");
  if (!event_result_value) {
    return false;
  }
  {
    const std::string* event_result_as_string = (*event_result_value).GetIfString();
    if (!event_result_as_string) {
      return false;
    }
    out.event_result = ParseEventResult(*event_result_as_string);
    if (out.event_result == EventResult()) {
      return false;
    }
  }

  const base::Value* triggered_rule_info_value = dict.Find("triggeredRuleInfo");
  if (!triggered_rule_info_value) {
    return false;
  }
  {
    if (!(*triggered_rule_info_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*triggered_rule_info_value).GetList(), out.triggered_rule_info)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool DataMaskingEvent::Populate(
    const base::Value& value, DataMaskingEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DataMaskingEvent> DataMaskingEvent::FromValue(const base::DictValue& value) {
  DataMaskingEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DataMaskingEvent> DataMaskingEvent::FromValue(const base::Value& value) {
  DataMaskingEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DataMaskingEvent::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("eventResult", enterprise_reporting_private::ToString(this->event_result));

  to_value_result.Set("triggeredRuleInfo", json_schema_compiler::util::CreateValueFromArray(this->triggered_rule_info));


  return to_value_result;
}


const char* ToString(ForceSaveToCloudEventType enum_param) {
  switch (enum_param) {
    case ForceSaveToCloudEventType::kSavedToCloud:
      return "savedToCloud";
    case ForceSaveToCloudEventType::kNone:
      return "";
  }
  NOTREACHED();
}

ForceSaveToCloudEventType ParseForceSaveToCloudEventType(std::string_view enum_string) {
  if (enum_string == "savedToCloud")
    return ForceSaveToCloudEventType::kSavedToCloud;
  return ForceSaveToCloudEventType::kNone;
}

std::u16string GetForceSaveToCloudEventTypeParseError(std::string_view enum_string) {
  return u"expected \"savedToCloud\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ForceSaveToCloudEvent::ForceSaveToCloudEvent()
: event() {}

ForceSaveToCloudEvent::~ForceSaveToCloudEvent() = default;
ForceSaveToCloudEvent::ForceSaveToCloudEvent(ForceSaveToCloudEvent&& rhs) noexcept = default;
ForceSaveToCloudEvent& ForceSaveToCloudEvent::operator=(ForceSaveToCloudEvent&& rhs) noexcept = default;
ForceSaveToCloudEvent ForceSaveToCloudEvent::Clone() const {
  ForceSaveToCloudEvent out;
  out.download_id = download_id;
  out.event = event;
  return out;
}

// static
bool ForceSaveToCloudEvent::Populate(
    const base::DictValue& dict, ForceSaveToCloudEvent& out) {
  const base::Value* download_id_value = dict.Find("downloadId");
  if (!download_id_value) {
    return false;
  }
  {
    auto* temp = (*download_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.download_id = *temp;
  }

  const base::Value* event_value = dict.Find("event");
  if (!event_value) {
    return false;
  }
  {
    const std::string* force_save_to_cloud_event_type_as_string = (*event_value).GetIfString();
    if (!force_save_to_cloud_event_type_as_string) {
      return false;
    }
    out.event = ParseForceSaveToCloudEventType(*force_save_to_cloud_event_type_as_string);
    if (out.event == ForceSaveToCloudEventType()) {
      return false;
    }
  }

  return true;
}

// static
bool ForceSaveToCloudEvent::Populate(
    const base::Value& value, ForceSaveToCloudEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ForceSaveToCloudEvent> ForceSaveToCloudEvent::FromValue(const base::DictValue& value) {
  ForceSaveToCloudEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ForceSaveToCloudEvent> ForceSaveToCloudEvent::FromValue(const base::Value& value) {
  ForceSaveToCloudEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue ForceSaveToCloudEvent::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("downloadId", this->download_id);

  to_value_result.Set("event", enterprise_reporting_private::ToString(this->event));


  return to_value_result;
}


DataMaskingRules::DataMaskingRules()
 {}

DataMaskingRules::~DataMaskingRules() = default;
DataMaskingRules::DataMaskingRules(DataMaskingRules&& rhs) noexcept = default;
DataMaskingRules& DataMaskingRules::operator=(DataMaskingRules&& rhs) noexcept = default;
DataMaskingRules DataMaskingRules::Clone() const {
  DataMaskingRules out;
  out.url = url;
  out.triggered_rule_info.reserve(triggered_rule_info.size());
  for (const auto& element : triggered_rule_info) {
    json_schema_compiler::util::AppendToContainer(out.triggered_rule_info, element.Clone());
  }
  return out;
}

// static
bool DataMaskingRules::Populate(
    const base::DictValue& dict, DataMaskingRules& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* triggered_rule_info_value = dict.Find("triggeredRuleInfo");
  if (!triggered_rule_info_value) {
    return false;
  }
  {
    if (!(*triggered_rule_info_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*triggered_rule_info_value).GetList(), out.triggered_rule_info)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool DataMaskingRules::Populate(
    const base::Value& value, DataMaskingRules& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DataMaskingRules> DataMaskingRules::FromValue(const base::DictValue& value) {
  DataMaskingRules out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DataMaskingRules> DataMaskingRules::FromValue(const base::Value& value) {
  DataMaskingRules out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::DictValue DataMaskingRules::ToValue() const {
  base::DictValue to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("triggeredRuleInfo", json_schema_compiler::util::CreateValueFromArray(this->triggered_rule_info));


  return to_value_result;
}



//
// Functions
//

namespace GetDeviceId {

base::ListValue Results::Create(const std::string& id) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}
}  // namespace GetDeviceId

namespace GetPersistentSecret {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::ListValue& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& reset_secret_value = args[0];
    {
      auto temp = reset_secret_value.GetIfBool();
      if (!temp.has_value()) {
        params.reset_secret = std::nullopt;
        return std::nullopt;
      }
      params.reset_secret = *temp;
    }
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& secret) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(secret));

  return create_results;
}
}  // namespace GetPersistentSecret

namespace GetDeviceData {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<uint8_t>& data) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(data));

  return create_results;
}
}  // namespace GetDeviceData

namespace SetDeviceData {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }

  return params;
}


base::ListValue Results::Create() {
  base::ListValue create_results;

  return create_results;
}
}  // namespace SetDeviceData

namespace GetDeviceInfo {

base::ListValue Results::Create(const DeviceInfo& device_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((device_info).ToValue());

  return create_results;
}
}  // namespace GetDeviceInfo

namespace GetContextInfo {

base::ListValue Results::Create(const ContextInfo& context_info) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((context_info).ToValue());

  return create_results;
}
}  // namespace GetContextInfo

namespace GetCertificate {

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
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const Certificate& certificate) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((certificate).ToValue());

  return create_results;
}
}  // namespace GetCertificate

namespace GetFileSystemInfo {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!GetFileSystemInfoRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<GetFileSystemInfoResponse>& file_system_signals) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(file_system_signals));

  return create_results;
}
}  // namespace GetFileSystemInfo

namespace GetSettings {

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
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!GetSettingsRequest::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<GetSettingsResponse>& settings) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(settings));

  return create_results;
}
}  // namespace GetSettings

namespace GetAvInfo {

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
    const base::Value& user_context_value = args[0];
    {
      if (!user_context_value.is_dict()) {
        return std::nullopt;
      }
      if (!UserContext::Populate(user_context_value.GetDict(), params.user_context)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<AntiVirusSignal>& av_signals) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(av_signals));

  return create_results;
}
}  // namespace GetAvInfo

namespace GetHotfixes {

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
    const base::Value& user_context_value = args[0];
    {
      if (!user_context_value.is_dict()) {
        return std::nullopt;
      }
      if (!UserContext::Populate(user_context_value.GetDict(), params.user_context)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::ListValue Results::Create(const std::vector<HotfixSignal>& hotfix_signals) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(hotfix_signals));

  return create_results;
}
}  // namespace GetHotfixes

namespace ReportDataMaskingEvent {

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
    const base::Value& event_value = args[0];
    {
      if (!event_value.is_dict()) {
        return std::nullopt;
      }
      if (!DataMaskingEvent::Populate(event_value.GetDict(), params.event)) {
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
}  // namespace ReportDataMaskingEvent

namespace ReportForceSaveToCloudEventHandled {

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
    const base::Value& event_value = args[0];
    {
      if (!event_value.is_dict()) {
        return std::nullopt;
      }
      if (!ForceSaveToCloudEvent::Populate(event_value.GetDict(), params.event)) {
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
}  // namespace ReportForceSaveToCloudEventHandled

//
// Events
//

namespace OnDataMaskingRulesTriggered {

const char kEventName[] = "enterprise.reportingPrivate.onDataMaskingRulesTriggered";

base::ListValue Create(const DataMaskingRules& rules) {
  base::ListValue create_results;
  create_results.reserve(1);
  create_results.Append((rules).ToValue());

  return create_results;
}

}  // namespace OnDataMaskingRulesTriggered

}  // namespace enterprise_reporting_private
}  // namespace api
}  // namespace extensions

