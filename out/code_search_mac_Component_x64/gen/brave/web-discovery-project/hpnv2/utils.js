"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeWithPadding = decodeWithPadding;
exports.encodeWithPadding = encodeWithPadding;
exports.formatDate = formatDate;
exports.formatError = formatError;
exports.formatHoursAsYYYYMMDD = formatHoursAsYYYYMMDD;
exports.reflectPromise = reflectPromise;
var _zlib = require("../core/zlib");
var _errors = require("./errors");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint no-bitwise: 'off' */

function formatDate(hours) {
  return new Date(hours * 3600 * 1000).toISOString().replace(/[^0-9]/g, "");
}

/**
 * Returns a string, for example: "20190122"
 */
function formatHoursAsYYYYMMDD(hoursSinceEpoch) {
  return formatDate(hoursSinceEpoch).slice(0, 8);
}
function formatError(e, original = true) {
  const name = e && e.constructor && e.constructor.name;
  const msg = e && e.message;
  const stack = e && e.stack;
  const originalError = original ? e && e.originalError && formatError(e.originalError, false) : undefined;
  return {
    name,
    msg,
    stack,
    originalError
  };
}
async function reflectPromise(promise) {
  try {
    return {
      value: await promise
    };
  } catch (error) {
    return {
      isError: true,
      error
    };
  }
}

// https://graphics.stanford.edu/~seander/bithacks.html#RoundUpPowerOf2
function nextPow2(_v) {
  let v = _v | 0;
  v -= 1;
  v |= v >> 1;
  v |= v >> 2;
  v |= v >> 4;
  v |= v >> 8;
  v |= v >> 16;
  v += 1;
  return v;
}
function encodeLength(length) {
  // We could also encode length = 32767 = (1 << 15) - 1,
  // but since the message overhead is 2 bytes, in that case
  // the final message would go to the 64KB bucket, which
  // we don't want, so enforcing length < (1 << 15) - 1.
  if (length >= (1 << 15) - 1) {
    throw new _errors.TooBigMsgError("Message is too big");
  }
  return 1 << 15 | length;
}
function decodeLength(data) {
  if (data < 1 << 15) {
    throw new Error("Wrong encoded length");
  }
  return data & (1 << 15) - 1;
}
function encodeWithPadding(message) {
  const compressed = (0, _zlib.deflate)(message);
  const paddedSize = Math.max(1 << 10, nextPow2(2 + compressed.length));
  const data = new Uint8Array(paddedSize);
  new DataView(data.buffer).setUint16(0, encodeLength(compressed.length));
  data.set(compressed, 2);
  return data;
}
function decodeWithPadding(data) {
  const compressedLength = decodeLength(new DataView(data.buffer).getUint16());
  return (0, _zlib.inflate)(data.slice(2, 2 + compressedLength));
}