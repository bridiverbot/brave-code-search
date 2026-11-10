// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef IOS_WEB_WEBUI_MOJO_FACADE_H_
#define IOS_WEB_WEBUI_MOJO_FACADE_H_

#import <Foundation/Foundation.h>

#include <limits>
#include <map>
#include <memory>
#include <string>
#include <unordered_map>

#include "base/functional/callback.h"
#include "base/memory/raw_ptr.h"
#include "base/memory/weak_ptr.h"
#include "base/values.h"
#include "ios/web/public/js_messaging/web_frame.h"
#include "ios/web/public/js_messaging/web_frames_manager.h"
#include "ios/web/public/web_state_observer.h"
#include "mojo/public/cpp/system/message_pipe.h"
#include "mojo/public/cpp/system/simple_watcher.h"

namespace web {

class WebState;

// Facade class for Mojo. All inputs and outputs are optimized for communication
// with WebUI pages and hence use JSON format. Must be created used and
// destroyed on UI thread.
class MojoFacade : public web::WebStateObserver,
                   public web::WebFramesManager::Observer {
 public:
  // Constructs MojoFacade. The calling code must retain ownership of
  // `web_state`, which cannot be null.
  explicit MojoFacade(WebState* web_state,
                      const std::string& webui_host = std::string());
  ~MojoFacade() override;

  // A listener that polls for messages from a content page to be processed by
  // Mojo.
  void AwaitNextMessage();

  // Handles Mojo message received from WebUI page. Returns a valid JSON string
  // on success or empty string if supplied JSON does not have required
  // structure. Every message must have "name" and "args" keys, where "name" is
  // a string representing the name of Mojo message and "args" is a dictionary
  // with arguments specific for each message name.
  // Supported message names with their handler methods in parenthesis:
  //   Mojo.bindInterface (HandleMojoBindInterface)
  //   MojoHandle.close (HandleMojoHandleClose)
  //   Mojo.createMessagePipe (HandleMojoCreateMessagePipe)
  //   MojoHandle.writeMessage (HandleMojoHandleWriteMessage)
  //   MojoHandle.watch (HandleMojoHandleWatch)
  //   MojoWatcher.cancel (HandleMojoWatcherCancel)
  void HandleMojoMessage(int message_id,
                         const base::DictValue* message,
                         base::OnceCallback<void(int, std::string)> completion);

 protected:
  // Whether `frame` is the frame this facade serves, which is the one
  // whose security origin host matches served_host_. An empty
  // served_host_ means the main frame, as upstream assumes.
  bool ServesFrame(WebFrame* frame) const;
  // Gates Mojo.bindInterface from a chrome-untrusted:// frame against
  // InterfaceBinder::IsAllowedForOrigin. See
  // brave/chromium_src/ios/web/public/web_state.h for the allowlist.
  bool IsBindInterfaceAllowedForFrame(const base::DictValue& args);
  // Records what this facade knew when a message named a pipe id it
  // doesn't hold.
  void ReportUnknownPipe(const char* operation,
                         std::optional<int> pipe_id);
  // Whether a poll that came back empty is worth repeating. Counts the
  // consecutive failures, so a frame that can no longer run scripts
  // stops being asked.
  bool ShouldRetryPoll();

  // Host of the WebUI this facade serves, empty for the main frame.
  std::string served_host_;
  // Polls in a row that carried no message.
  int consecutive_poll_failures_ = 0;

 private:
  // Callback for AwaitNextMessage completion.
  void OnAwaitNextMessageCompleted(const std::string& web_frame_id,
                                   const base::Value* value,
                                   NSError* error);

  // Connects to specified Mojo interface. Returns MojoResult as a number
  // (MOJO_RESULT_OK on success, MOJO_RESULT_INVALID_ARGUMENT on failure).
  // `args` is a dictionary with the following keys:
  //   - "interfaceName" (a string representing an interface name);
  //   - "requestHandle" (a number representing MojoHandle of the interface
  //     request).
  base::Value HandleMojoBindInterface(const base::DictValue& args);

  // Closes the given handle. `args` is a dictionary which may contain "handle"
  // key, which is a number representing a MojoHandle.
  void HandleMojoHandleClose(const base::DictValue& args);

  // Creates a Mojo message pipe. `args` is unused.
  // Returns a dictionary with the following keys:
  //   - "result" (a number representing MojoResult);
  //   - "handle0" and "handle1" (the numbers representing two endpoints of the
  //     message pipe).
  base::Value HandleMojoCreateMessagePipe(const base::DictValue& args);

  // Writes a message to the message pipe endpoint given by handle. `args` is a
  // dictionary which must contain the following keys:
  //   - "handle" (a number representing MojoHandle, the endpoint to write to);
  //   - "buffer" (a base-64 string representing the message data; may be
  //   empty);
  //   - "handles" (an array representing any handles to attach; handles are
  //     transferred and will no longer be valid; may be empty);
  // Returns MojoResult as a number.
  base::Value HandleMojoHandleWriteMessage(const base::DictValue& args);

  // Reads a message from the given pipe. Used by
  // OnWatcherCallback for pre-reading messages.
  base::Value ReadMessageFromPipe(int pipe_id);

  // Begins watching a handle for signals to be satisfied or unsatisfiable.
  // `args` is a dictionary which must contain the following keys:
  //   - "handle" (a number representing a MojoHandle);
  //   - "signals" (a number representing MojoHandleSignals to watch);
  //   - "callbackId" (a number representing the id which should be passed to
  //     Mojo.internal.signalWatch call).
  // Returns watch id as a positive number (note: 0 indicates failure to create
  // the watcher, distinct from MOJO_RESULT_OK).
  base::Value HandleMojoHandleWatch(const base::DictValue& args);

  // Cancels a handle watch initiated by "MojoHandle.watch". `args` is a
  // dictionary which must contain "watchId" key (a number representing id
  // returned from "MojoHandle.watch").
  void HandleMojoWatcherCancel(const base::DictValue& args);

  // Assigns an integer ID to the given message pipe handle and returns it.
  // Uses `custom_id` if provided, or generates a new unique ID otherwise.
  int AllocatePipeId(mojo::ScopedMessagePipeHandle pipe,
                     std::optional<int> custom_id = std::nullopt);

  // SimpleWatcher callback which notifies us when a handle's watched signals
  // are raised. `callback_id` identifies the JS-side callback registered for
  // this watcher, and `watch_id` identifies the JS-side MojoWatcher responsible
  // for the event. This ultimately invokes the JS-side callback and then
  // re-arms the watcher once the JS has run.
  void OnWatcherCallback(int callback_id,
                         int watch_id,
                         int pipe_id,
                         MojoResult result);

  // Calls ArmOrNotify() for matching watcher.
  void ArmOnNotifyWatcher(int watch_id);

  // Returns the pipe handle associated with `id` in JS, or an invalid handle if
  // no such association exists.
  mojo::MessagePipeHandle GetPipeFromId(int id);

  // Returns the pipe handle associated with `id` in JS, and removes that
  // association, effectively invalidating `id` and taking ownership of the
  // pipe. Returns an invalid pipe if `id` had no associated pipe.
  mojo::ScopedMessagePipeHandle TakePipeFromId(int id);

  // WebStateObserver:
  void DidFinishNavigation(WebState* web_state,
                           NavigationContext* navigation_context) override;
  void PageLoaded(WebState* web_state,
                  PageLoadCompletionStatus load_completion_status) override;
  void WebStateDestroyed(WebState* web_state) override;

  // WebFramesManager::Observer:
  void WebFrameBecameAvailable(WebFramesManager* web_frames_manager,
                               WebFrame* web_frame) override;
  void WebFrameBecameUnavailable(WebFramesManager* web_frames_manager,
                                 const std::string& frame_id) override;

  // Returns the main WebFrame for `web_state_`, or nullptr if none.
  web::WebFrame* GetMainWebFrame() const;

  // Returns the ID of the main WebFrame, or an empty string if none.
  std::string GetMainFrameId() const;

  // WebState backing this facade.
  raw_ptr<WebState> web_state_ = nullptr;

  // Weak pointer to the current main WebFrame.
  base::WeakPtr<WebFrame> main_frame_;

  // A mapping of integer handles used by JS, to actual pipe handles used with
  // Mojo APIs.
  std::unordered_map<int, mojo::ScopedMessagePipeHandle> pipes_;

  // Counter for generating unique pipe IDs for native-allocated handles,
  // starting at max int and decrementing to avoid collision with JS handle IDs.
  int next_pipe_id_ = std::numeric_limits<int>::max();

  // Id of the last created watch.
  int last_watch_id_ = 0;

  // Currently active watches created through this facade.
  std::map<int, std::unique_ptr<mojo::SimpleWatcher>> watchers_;

  // Indicates whether a message polling request is currently in-flight.
  bool is_awaiting_message_ = false;

  base::WeakPtrFactory<MojoFacade> weak_ptr_factory_{this};
};

}  // namespace web

#endif  // IOS_WEB_WEBUI_MOJO_FACADE_H_
