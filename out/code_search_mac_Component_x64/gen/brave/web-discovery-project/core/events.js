"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribe = exports.default = void 0;
var _console = _interopRequireDefault(require("./console"));
var _decorators = require("./decorators");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Events = {
  // use a javascript object to push the message ids and the callbacks
  cache: {},
  tickCallbacks: [],
  /*
   * Publish events of interest with a specific id
   */
  queue: [],
  pub(id, ...args) {
    const listeners = Events.cache[id] || [];
    if (listeners.length === 0) {
      return;
    }
    const callbacks = [];
    const onError = e => {
      _console.default.error(`Events error: ${id}`, e);
    };
    for (let i = 0; i < listeners.length; i += 1) {
      callbacks.push((0, _decorators.nextTick)(listeners[i].bind(null, ...args)).catch(onError));
    }
    const finishedPromise = Promise.all(callbacks).then(() => {
      const index = this.queue.indexOf(finishedPromise);
      this.queue.splice(index, 1);
      if (this.queue.length === 0) {
        this.triggerNextTick();
      }
    });
    this.queue.push(finishedPromise);
  },
  triggerNextTick() {
    this.tickCallbacks.forEach(cb => {
      try {
        cb();
      } catch (e) {
        // empty
      }
    });
    this.tickCallbacks = [];
  },
  nextTick(cb = () => {}) {
    this.tickCallbacks = this.tickCallbacks || [];
    this.tickCallbacks.push(cb);
  },
  /* Subscribe to events of interest
   * with a specific id and a callback
   * to be executed when the event is observed
   */
  sub(id, fn) {
    Events.cache[id] = Events.cache[id] || [];
    Events.cache[id].push(fn);
  },
  subscribe(eventName, callback, that) {
    let cb;
    if (that) {
      cb = callback.bind(that);
    } else {
      cb = callback;
    }
    Events.sub(eventName, cb);
    return {
      unsubscribe() {
        Events.un_sub(eventName, cb);
      }
    };
  },
  un_sub(id, fn) {
    if (!Events.cache[id] || Events.cache[id].length === 0) {
      _console.default.error(id, "Trying to unsubscribe event that had no subscribers");
      return;
    }
    const index = Events.cache[id].indexOf(fn);
    if (index > -1) {
      Events.cache[id].splice(index, 1);
    } else {
      _console.default.error(id, "Trying to unsubscribe an unknown listener", id, fn);
    }
  },
  clean_channel(id) {
    if (!Events.cache[id]) {
      throw new Error(`Trying to unsubscribe an unknown channel: ${id}`);
    }
    Events.cache[id] = [];
  },
  nextId: function nextId() {
    nextId.id = nextId.id || 0;
    nextId.id += 1;
    return nextId.id;
  },
  purge() {
    this.cache = {};
    this.tickCallbacks = [];
    this.queue = [];
  }
};
var _default = exports.default = Events;
const subscribe = exports.subscribe = Events.subscribe;