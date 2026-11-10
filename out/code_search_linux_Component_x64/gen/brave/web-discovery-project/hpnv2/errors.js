"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransportError = exports.TooBigMsgError = exports.SignMsgError = exports.ServerError = exports.OldVersionError = exports.NotReadyError = exports.NoCredentialsError = exports.MsgTimeoutError = exports.MsgQuotaError = exports.JoinGroupsError = exports.InvalidMsgError = exports.InitSignerError = exports.FetchConfigError = exports.ClockOutOfSyncWhileJoining = exports.BadCredentialsError = void 0;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// https://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax-babel

class ExtendableError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }
}

/**
 * If you get an error in HPN, this function will give you
 * a hint whether retrying with the same message again later
 * is a reasonable strategy.
 *
 * That avoids futile attempts, as some types of errors are permanent.
 * For example, once you exceed the rate limit, retrying with the same
 * message (with the identical timestamp) will only trigger the same error.
 *
 * But note that even for recoverable errors, retrying immediately is
 * almost never a good idea. When you get an error, it means HPN already
 * exhausted the basic options (e.g., retrying failing HTTP requests).
 */
class RecoverableError extends ExtendableError {
  constructor(message) {
    super(message);
    this.isRecoverableHpnv2Error = true;
    this.isPermanentHpnv2Error = false;
  }
}
class PermanentError extends ExtendableError {
  constructor(message) {
    super(message);
    this.isRecoverableHpnv2Error = false;
    this.isPermanentHpnv2Error = true;
  }
}
class MsgQuotaError extends PermanentError {}
exports.MsgQuotaError = MsgQuotaError;
class NotReadyError extends RecoverableError {}
exports.NotReadyError = NotReadyError;
class InvalidMsgError extends PermanentError {}
exports.InvalidMsgError = InvalidMsgError;
class NoCredentialsError extends RecoverableError {}
exports.NoCredentialsError = NoCredentialsError;
class BadCredentialsError extends RecoverableError {}
exports.BadCredentialsError = BadCredentialsError;
class SignMsgError extends PermanentError {}
exports.SignMsgError = SignMsgError;
class TooBigMsgError extends PermanentError {}
exports.TooBigMsgError = TooBigMsgError;
class TransportError extends RecoverableError {}
exports.TransportError = TransportError;
class MsgTimeoutError extends RecoverableError {}
exports.MsgTimeoutError = MsgTimeoutError;
class OldVersionError extends PermanentError {}
exports.OldVersionError = OldVersionError;
class FetchConfigError extends RecoverableError {}
exports.FetchConfigError = FetchConfigError;
class JoinGroupsError extends RecoverableError {}
exports.JoinGroupsError = JoinGroupsError;
class InitSignerError extends PermanentError {}
exports.InitSignerError = InitSignerError;
class ServerError extends RecoverableError {}
exports.ServerError = ServerError;
class ClockOutOfSyncWhileJoining extends RecoverableError {}
exports.ClockOutOfSyncWhileJoining = ClockOutOfSyncWhileJoining;