// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// THIS FILE IS GENERATED FROM tools/*.mojom. DO NOT EDIT.

#ifndef CHROME_BROWSER_UI_WEBUI_AI_OVERLAY_DIALOG_TOOLS_GENERATED_TOOL_DEFINITIONS_H_
#define CHROME_BROWSER_UI_WEBUI_AI_OVERLAY_DIALOG_TOOLS_GENERATED_TOOL_DEFINITIONS_H_

namespace ttc {
inline constexpr char kBuiltInToolDefinitionsJson[] = R"json(
[
  {
    "functionDeclarations": [
      {
        "name": "open_url",
        "description": "Opens a URL in the browser.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "url": {
              "type": "STRING",
              "description": "The complete URL to open (e.g. \"https://example.com\")."
            },
            "new_tab": {
              "type": "BOOLEAN",
              "description": "If true, opens the URL in a new tab; otherwise, navigates the current tab."
            }
          },
          "required": [
            "url",
            "new_tab"
          ]
        }
      },
      {
        "name": "follow_link",
        "description": "Follows or navigates to a link on the active webpage by its identifier.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "id": {
              "type": "STRING",
              "description": "The identifier or token of the link to follow (e.g. \"9821\" or \"101\")."
            }
          },
          "required": [
            "id"
          ]
        }
      },
      {
        "name": "perform_search",
        "description": "Search using the default search engine.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "query": {
              "type": "STRING"
            },
            "new_tab": {
              "type": "BOOLEAN"
            }
          },
          "required": [
            "query",
            "new_tab"
          ]
        }
      },
      {
        "name": "switch_tab",
        "description": "Switch to another open tab by fuzzy matching name or URL.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "query": {
              "type": "STRING",
              "description": "keyword from the tab name or URL."
            }
          },
          "required": [
            "query"
          ]
        }
      },
      {
        "name": "close_current_tab",
        "description": "Close the current browser tab."
      },
      {
        "name": "go_back",
        "description": "Go back to the previous page in history."
      },
      {
        "name": "go_forward",
        "description": "Go forward to the next page in history."
      },
      {
        "name": "reload_page",
        "description": "Refresh the current page."
      },
      {
        "name": "find_and_highlight",
        "description": "Highlight and scroll to specific text on the page.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "query": {
              "type": "STRING",
              "description": "A short phrase copied exactly as it appears in the page content."
            }
          },
          "required": [
            "query"
          ]
        }
      },
      {
        "name": "scroll",
        "description": "Scroll the viewport in a specific direction.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "granularity": {
              "type": "STRING",
              "enum": [
                "document",
                "page"
              ],
              "description": "The units of the `magnitude` param. \"document\" scrolls to the start or end of the document."
            },
            "magnitude": {
              "type": "NUMBER",
              "description": "the distance to scroll. Positive is down, negative is up."
            }
          },
          "required": [
            "granularity",
            "magnitude"
          ]
        }
      },
      {
        "name": "play_video",
        "description": "Resume video playback."
      },
      {
        "name": "pause_video",
        "description": "Pause video playback."
      },
      {
        "name": "seek_to_timestamp",
        "description": "Jump the video to a specific timecode.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "timecode": {
              "type": "STRING",
              "description": "from the video transcript. Format: \"1:45\", \"0:30\", \"1:02:15\""
            }
          },
          "required": [
            "timecode"
          ]
        }
      },
      {
        "name": "translate_page",
        "description": "Translate the current page.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "target_language": {
              "type": "STRING",
              "description": "Target language code (e.g. \"en\", \"es\", \"fr\"). If empty, translates to the user's default language."
            }
          },
          "required": [
            "target_language"
          ]
        }
      },
      {
        "name": "add_bookmark",
        "description": "Bookmark the current active tab."
      },
      {
        "name": "remove_bookmark",
        "description": "Remove bookmark for the current active tab."
      },
      {
        "name": "open_page",
        "description": "Search for and open a page matching a query across open tabs, saved bookmarks, or browsing history.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "query": {
              "type": "STRING",
              "description": "Search term, title keyword, or topic description of the page to find. Returns a JSON string with candidates categorized into open_tabs, bookmarks, and history lists. If a single unique match is found, automatically opens the page and returns an action dictionary (e.g. {\"action\": \"switched_tab\"})."
            }
          },
          "required": [
            "query"
          ]
        }
      },
      {
        "name": "set_text",
        "description": "Replaces the entire text content of an input field, textarea, search box, or editable element on the active webpage. Use this whenever the user asks to write, type, fill in, or enter text into a field or form on the page.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "dom_node_id": {
              "type": "INTEGER",
              "description": "The numeric DOM node ID of the target input field or editable element (e.g. 101)."
            },
            "text": {
              "type": "STRING",
              "description": "The complete replacement text to set into the element."
            }
          },
          "required": [
            "dom_node_id",
            "text"
          ]
        }
      },
      {
        "name": "click_element",
        "description": "Click or toggle an interactive element (such as a button, radio button, or checkbox) on the active webpage.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "dom_node_id": {
              "type": "INTEGER",
              "description": "The numeric DOM node ID of the target element (e.g. 101)."
            }
          },
          "required": [
            "dom_node_id"
          ]
        }
      },
      {
        "name": "set_fullscreen",
        "description": "Set or exit full screen mode for the active browser window.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "fullscreen": {
              "type": "BOOLEAN",
              "description": "Set to true to enter full screen, false to exit full screen."
            }
          },
          "required": [
            "fullscreen"
          ]
        }
      },
      {
        "name": "select_option",
        "description": "Selects an option from a dropdown (<select>) element on the active webpage.",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "dom_node_id": {
              "type": "INTEGER",
              "description": "The numeric DOM node ID of the target dropdown element (e.g. 101)."
            },
            "value": {
              "type": "STRING",
              "description": "The value of the <option> element to select."
            }
          },
          "required": [
            "dom_node_id",
            "value"
          ]
        }
      },
      {
        "name": "open_gemini_panel",
        "description": "Opens the Gemini side panel in Chrome. Use this for image generation or when the user explicitly asks to open Gemini or the side panel.",
        "behavior": "NON_BLOCKING",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "prompt": {
              "type": "STRING",
              "description": "The request, question, or prompt to send to the Gemini side panel."
            }
          },
          "required": [
            "prompt"
          ]
        }
      },
      {
        "name": "close_gemini_panel",
        "description": "Closes the Gemini side panel in Chrome if it is currently open.",
        "behavior": "NON_BLOCKING"
      },
      {
        "name": "analyze_and_manage_tabs",
        "description": "Analyzes or manages the user's open browser tabs, tab groups, and windows (including page topic summaries, memory usage, idle time, and unsaved state) by delegating the request to a tab sub-agent. Use this to answer questions about open tabs or to organize tabs (such as grouping tabs by topic, adding tabs to a group, ungrouping tabs, closing specific tabs, switching to a tab, reordering tabs, or undoing the last tab change).",
        "behavior": "NON_BLOCKING",
        "parameters": {
          "type": "OBJECT",
          "properties": {
            "request": {
              "type": "STRING",
              "description": "The question, search criteria, or organization instruction to evaluate across all open windows, tab groups, and tabs. Returns a dictionary value containing {\"facts\": \"...\", \"actions_taken\": [...], \"skipped\": [...]}."
            }
          },
          "required": [
            "request"
          ]
        }
      }
    ]
  }
]
)json";
}  // namespace ttc

#endif  // CHROME_BROWSER_UI_WEBUI_AI_OVERLAY_DIALOG_TOOLS_GENERATED_TOOL_DEFINITIONS_H_
