// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/omnibox.json
// by tools/json_schema_compiler.
// DO NOT EDIT.
//
// Generator run command:
//   python3 ../../tools/json_schema_compiler/compiler.py ../../chrome/common/extensions/api/omnibox.json --root=../../ --destdir=gen --namespace=extensions::api::%(namespace)s --generator=cpp --include-rules=extensions/common/api:extensions::api::%(namespace)s

#ifndef CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__
#define CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include <string_view>


namespace extensions {
namespace api {
namespace omnibox {

//
// Types
//

// The style type.
enum class DescriptionStyleType {
  kNone = 0,
  kUrl,
  kMatch,
  kDim,
  kMaxValue = kDim,
};


const char* ToString(DescriptionStyleType as_enum);
DescriptionStyleType ParseDescriptionStyleType(std::string_view as_string);
std::u16string GetDescriptionStyleTypeParseError(std::string_view as_string);

// The window disposition for the omnibox query. This is the recommended context
// to display results. For example, if the omnibox command is to navigate to a
// certain URL, a disposition of 'newForegroundTab' means the navigation should
// take place in a new selected tab.
enum class OnInputEnteredDisposition {
  kNone = 0,
  kCurrentTab,
  kNewForegroundTab,
  kNewBackgroundTab,
  kMaxValue = kNewBackgroundTab,
};


const char* ToString(OnInputEnteredDisposition as_enum);
OnInputEnteredDisposition ParseOnInputEnteredDisposition(std::string_view as_string);
std::u16string GetOnInputEnteredDispositionParseError(std::string_view as_string);

// The style ranges for the description, as provided by the extension.
struct MatchClassification {
  MatchClassification();
  ~MatchClassification();
  MatchClassification(const MatchClassification&) = delete;
  MatchClassification& operator=(const MatchClassification&) = delete;
  MatchClassification(MatchClassification&& rhs) noexcept;
  MatchClassification& operator=(MatchClassification&& rhs) noexcept;

  // Populates a MatchClassification object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchClassification& out);

  // Populates a MatchClassification object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, MatchClassification& out);

  // Creates a deep copy of MatchClassification.
  MatchClassification Clone() const;

  // Creates a MatchClassification object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<MatchClassification> FromValue(const base::DictValue& value);

  // Creates a MatchClassification object from a base::Value, or nullopt on
  // failure.
  static std::optional<MatchClassification> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisMatchClassification object.
  base::DictValue ToValue() const;

  int offset;

  // The style type
  DescriptionStyleType type;

  std::optional<int> length;

};

// An action button attached to a suggest result.
struct Action {
  Action();
  ~Action();
  Action(const Action&) = delete;
  Action& operator=(const Action&) = delete;
  Action(Action&& rhs) noexcept;
  Action& operator=(Action&& rhs) noexcept;

  // Populates a Action object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Action& out);

  // Populates a Action object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::DictValue& value, Action& out);

  // Creates a deep copy of Action.
  Action Clone() const;

  // Creates a Action object from a base::DictValue, or nullopt on failure.
  static std::optional<Action> FromValue(const base::DictValue& value);

  // Creates a Action object from a base::Value, or nullopt on failure.
  static std::optional<Action> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisAction object.
  base::DictValue ToValue() const;

  // The icon shown in the action button on the leading side of the  action label.
  // The icon must be specified as an imageData object. The size should not be
  // more than 160 px wide and tall.
  struct Icon {
    Icon();
    ~Icon();
    Icon(const Icon&) = delete;
    Icon& operator=(const Icon&) = delete;
    Icon(Icon&& rhs) noexcept;
    Icon& operator=(Icon&& rhs) noexcept;

    // Populates a Icon object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Icon& out);

    // Populates a Icon object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::DictValue& value, Icon& out);

    // Creates a deep copy of Icon.
    Icon Clone() const;

    // Creates a Icon object from a base::DictValue, or nullopt on failure.
    static std::optional<Icon> FromValue(const base::DictValue& value);

    // Creates a Icon object from a base::Value, or nullopt on failure.
    static std::optional<Icon> FromValue(const base::Value& value);

    // Returns a new base::DictValue representing the serialized form of thisIcon
    // object.
    base::DictValue ToValue() const;

    base::DictValue additional_properties;
  };


  // The string sent to the extension in the event corresponding to the user
  // clicking on the action.
  std::string name;

  // The action button label.
  std::string label;

  // The action button hover tooltip text.
  std::string tooltip_text;

  // The icon shown in the action button on the leading side of the  action label.
  // The icon must be specified as an imageData object. The size should not be
  // more than 160 px wide and tall.
  std::optional<Icon> icon;

};

// A suggest result.
struct SuggestResult {
  SuggestResult();
  ~SuggestResult();
  SuggestResult(const SuggestResult&) = delete;
  SuggestResult& operator=(const SuggestResult&) = delete;
  SuggestResult(SuggestResult&& rhs) noexcept;
  SuggestResult& operator=(SuggestResult&& rhs) noexcept;

  // Populates a SuggestResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SuggestResult& out);

  // Populates a SuggestResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, SuggestResult& out);

  // Creates a deep copy of SuggestResult.
  SuggestResult Clone() const;

  // Creates a SuggestResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<SuggestResult> FromValue(const base::DictValue& value);

  // Creates a SuggestResult object from a base::Value, or nullopt on failure.
  static std::optional<SuggestResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisSuggestResult object.
  base::DictValue ToValue() const;

  // The text that is put into the URL bar, and that is sent to the extension when
  // the user chooses this entry.
  std::string content;

  // The text that is displayed in the URL dropdown. Can contain XML-style markup
  // for styling. The supported tags are 'url' (for a literal URL), 'match' (for
  // highlighting text that matched what the user's query), and 'dim' (for dim
  // helper text). The styles can be nested, eg. <dim><match>dimmed
  // match</match></dim>. You must escape the five predefined entities to display
  // them as text: stackoverflow.com/a/1091953/89484
  std::string description;

  // Whether the suggest result can be deleted by the user.
  std::optional<bool> deletable;

  // An array of style ranges for the description, as provided by the extension.
  std::optional<std::vector<MatchClassification>> description_styles;

  // An array of actions attached to the suggestion. Only supported for
  // suggestions added in unscoped mode.
  std::optional<std::vector<Action>> actions;

  // An icon shown on the leading edge of the suggestion in the omnibox dropdown.
  // Only supported for suggestions added in unscoped mode.
  std::optional<std::string> icon_url;

};

// A suggest result.
struct DefaultSuggestResult {
  DefaultSuggestResult();
  ~DefaultSuggestResult();
  DefaultSuggestResult(const DefaultSuggestResult&) = delete;
  DefaultSuggestResult& operator=(const DefaultSuggestResult&) = delete;
  DefaultSuggestResult(DefaultSuggestResult&& rhs) noexcept;
  DefaultSuggestResult& operator=(DefaultSuggestResult&& rhs) noexcept;

  // Populates a DefaultSuggestResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DefaultSuggestResult& out);

  // Populates a DefaultSuggestResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::DictValue& value, DefaultSuggestResult& out);

  // Creates a deep copy of DefaultSuggestResult.
  DefaultSuggestResult Clone() const;

  // Creates a DefaultSuggestResult object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<DefaultSuggestResult> FromValue(const base::DictValue& value);

  // Creates a DefaultSuggestResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<DefaultSuggestResult> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisDefaultSuggestResult object.
  base::DictValue ToValue() const;

  // The text that is displayed in the URL dropdown. Can contain XML-style markup
  // for styling. The supported tags are 'url' (for a literal URL), 'match' (for
  // highlighting text that matched what the user's query), and 'dim' (for dim
  // helper text). The styles can be nested, eg. <dim><match>dimmed
  // match</match></dim>.
  std::string description;

  // An array of style ranges for the description, as provided by the extension.
  std::optional<std::vector<MatchClassification>> description_styles;

};

// Details about an action executed by the user sent in the listener of
// `onActionExecuted`.
struct ActionExecution {
  ActionExecution();
  ~ActionExecution();
  ActionExecution(const ActionExecution&) = delete;
  ActionExecution& operator=(const ActionExecution&) = delete;
  ActionExecution(ActionExecution&& rhs) noexcept;
  ActionExecution& operator=(ActionExecution&& rhs) noexcept;

  // Populates a ActionExecution object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ActionExecution& out);

  // Populates a ActionExecution object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::DictValue& value, ActionExecution& out);

  // Creates a deep copy of ActionExecution.
  ActionExecution Clone() const;

  // Creates a ActionExecution object from a base::DictValue, or nullopt on
  // failure.
  static std::optional<ActionExecution> FromValue(const base::DictValue& value);

  // Creates a ActionExecution object from a base::Value, or nullopt on failure.
  static std::optional<ActionExecution> FromValue(const base::Value& value);

  // Returns a new base::DictValue representing the serialized form of
  // thisActionExecution object.
  base::DictValue ToValue() const;

  // The name of the action the user selected, as defined by the `action` field in
  // `Action`.
  std::string action_name;

  // The text of the suggestion corresponding to the action, as shown in the
  // Omnibox. The same as the `SuggestResult.content`.
  std::string content;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kOmnibox[] = "omnibox";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::DictValue& root_dict, ManifestKeys& out, std::u16string& error);


  struct Omnibox {
    Omnibox();
    ~Omnibox();
    Omnibox(const Omnibox&) = delete;
    Omnibox& operator=(const Omnibox&) = delete;
    Omnibox(Omnibox&& rhs) noexcept;
    Omnibox& operator=(Omnibox&& rhs) noexcept;

    // Manifest key constants.
    static constexpr char kKeyword[] = "keyword";

    // Parses the given |key| from |root_dict|. Any keys not available to the
    // manifest will be ignored. On a parsing error, false is returned and |error|
    // and |error_path_reversed| are populated.
    static bool ParseFromDictionary(const base::DictValue& root_dict, std::string_view key, Omnibox& out, std::u16string& error, std::vector<std::string_view>& error_path_reversed);


    // The keyword to register with the omnibox. Must be non-empty.
    std::string keyword;

  };


  std::optional<Omnibox> omnibox;

};

//
// Functions
//

namespace SendSuggestions {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  // An array of suggest results
  std::vector<SuggestResult> suggest_results;


 private:
  Params();
};

}  // namespace SendSuggestions

namespace SetDefaultSuggestion {

struct Params {
  static std::optional<Params> Create(const base::ListValue& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A partial SuggestResult object, without the 'content' parameter.
  DefaultSuggestResult suggestion;


 private:
  Params();
};

namespace Results {

base::ListValue Create();
}  // namespace Results

}  // namespace SetDefaultSuggestion

//
// Events
//

namespace OnInputStarted {

extern const char kEventName[];  // "omnibox.onInputStarted"

base::ListValue Create();
}  // namespace OnInputStarted

namespace OnInputChanged {

extern const char kEventName[];  // "omnibox.onInputChanged"

// A callback passed to the onInputChanged event used for sending suggestions
// back to the browser.
base::ListValue Create(const std::string& text, base::DictValue suggest);
}  // namespace OnInputChanged

namespace OnInputEntered {

extern const char kEventName[];  // "omnibox.onInputEntered"

base::ListValue Create(const std::string& text, const OnInputEnteredDisposition& disposition);
}  // namespace OnInputEntered

namespace OnInputCancelled {

extern const char kEventName[];  // "omnibox.onInputCancelled"

base::ListValue Create();
}  // namespace OnInputCancelled

namespace OnDeleteSuggestion {

extern const char kEventName[];  // "omnibox.onDeleteSuggestion"

// Text of the deleted suggestion.
base::ListValue Create(const std::string& text);
}  // namespace OnDeleteSuggestion

namespace OnActionExecuted {

extern const char kEventName[];  // "omnibox.onActionExecuted"

base::ListValue Create(const ActionExecution& action_execution);
}  // namespace OnActionExecuted

}  // namespace omnibox
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_OMNIBOX_H__
