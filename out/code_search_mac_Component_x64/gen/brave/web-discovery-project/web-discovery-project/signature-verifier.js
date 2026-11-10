"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.parsePublicKeyPem = parsePublicKeyPem;
var _encoding = require("../core/encoding");
var _crypto = _interopRequireDefault(require("../platform/crypto"));
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
function parsePublicKeyPem(key_) {
  const START_TAG = "-----BEGIN PUBLIC KEY-----";
  const END_TAG = "-----END PUBLIC KEY-----";
  const key = key_.trim();
  if (!key.startsWith(START_TAG) || !key.endsWith(END_TAG)) {
    throw new Error(`Expected PEM format (${START_TAG} ... ${END_TAG}), but got: ${key_}`);
  }
  return key.slice(START_TAG.length, key.length - END_TAG.length).replace(/\s+/g, "");
}

// like fromBase64, but always throws on parse errors
function safeFromBase64(text) {
  const result = (0, _encoding.fromBase64)(text);
  if (!result) {
    throw new Error("Failed to decode base64 string");
  }
  return result;
}
function loadPublicKey(publicKey) {
  const key = parsePublicKeyPem(publicKey);
  return safeFromBase64(key);
}
class SignatureVerifier {
  constructor({
    resourceUrl,
    publicKeyName,
    publicKeyPem,
    algorithm = "RSA-PSS",
    insecure = false
  }) {
    _defineProperty(this, "resourceUrl", void 0);
    _defineProperty(this, "signatureUrl", void 0);
    _defineProperty(this, "algorithm", void 0);
    _defineProperty(this, "insecure", void 0);
    _defineProperty(this, "_pendingInit", void 0);
    _defineProperty(this, "publicKey", void 0);
    this.resourceUrl = resourceUrl;
    this.signatureUrl = `${resourceUrl}-signed-with-${publicKeyName}`;
    this.algorithm = algorithm;
    this.insecure = insecure;
    if (this.insecure) {
      _logger.default.warn(`Signature verification will not be enforced for URL ${resourceUrl}. ` + `However, this is not recommended, besides for development purposes.`);
    }

    // Note: the crypto API is async, but conceptually we want to
    // ensure that we get errors during initialization. For that
    // the caller has to cooperate and run "ensureKeysAreLoaded"
    // afterwards.
    const publicKeyBuffer = loadPublicKey(publicKeyPem);
    let options;
    if (this.algorithm === "RSA-PSS") {
      options = {
        name: this.algorithm,
        hash: {
          name: "SHA-256"
        }
      };
    } else if (this.algorithm === "RSASSA-PKCS1-v1_5") {
      // Legacy path: can be used as a fallback for Edge
      // (Technically, PKCS1-v1_5 padding is not broken, but its use
      // is no longer recommended.)
      options = {
        name: this.algorithm,
        hash: {
          name: "SHA-256"
        }
      };
    } else {
      throw new Error(`Unexpected verification algorithm: ${this.algorithm}`);
    }
    this._pendingInit = (async () => {
      try {
        this.publicKey = await _crypto.default.subtle.importKey("spki", publicKeyBuffer, options, false, ["verify"]);
        _logger.default.info("Successfully loaded the public key for verifying signatures signed with", publicKeyName);
      } catch (e) {
        // Typically, the error messages of crypto.subtle are useless.
        // Log them anyway, but do expect to get much out of it.
        //
        // Reasons could be browser support, misformed keys, trying to
        // accidentally import a private keys, etc.
        _logger.default.error(`crypto.subtle.importKey failed for key ${publicKeyName} (details: ${e})`);
        if (!insecure) {
          throw new Error(`Failed to import the key ${publicKeyName} (error: ${e}).`);
        }
        _logger.default.info("Failed to load the public key", publicKeyName, "but as signature checking is disabled, ignore the error");
      }
    })();
  }

  // Can be called to ensure fail-fast behavior if keys cannot
  // to loaded. Otherwise, you will get the error when you start
  // verifying signatures.
  //
  // There is no way to recover except by disabling signature
  // checking (by setting the 'insecure' flag), or switching to
  // alternative crypto algorithms.
  //
  // Hint: The following test page will give you an overview
  // of all the crypto.subtle algorithms that your browser implements:
  //
  // https://diafygi.github.io/webcrypto-examples/
  //
  async ensureKeysAreLoaded() {
    if (this._pendingInit) {
      try {
        await this._pendingInit;
      } finally {
        this._pendingInit = null;
      }
    }
  }
  async checkSignature(message, signature) {
    let goodSignature = false;
    try {
      goodSignature = await this._checkSignature(message, signature);
      if (!goodSignature) {
        _logger.default.warn("Signature did not match for url:", this.signatureUrl);
      }
    } catch (e) {
      _logger.default.warn("Fatal error while verifying signature", e);
    }
    if (!goodSignature && this.insecure) {
      _logger.default.info('"insecure" flag is set. Ignore signature verification error for URL:', this.signatureUrl);
      return true;
    }
    return goodSignature;
  }
  async _checkSignature(message, signature) {
    await this.ensureKeysAreLoaded();
    if (!this.publicKey) {
      throw new Error("Keys are not loaded. Signatures cannot be checked.");
    }
    let signature_;
    try {
      signature_ = (0, _encoding.fromBase64)(signature);
    } catch (e) {
      _logger.default.warn("Signature is not properly encoded. Expected base64 but got:", signature);
      return false;
    }
    try {
      const before = Date.now();
      let options;
      if (this.algorithm === "RSA-PSS") {
        options = {
          name: "RSA-PSS",
          saltLength: 32
        };
      } else if (this.algorithm === "RSASSA-PKCS1-v1_5") {
        options = {
          name: "RSASSA-PKCS1-v1_5",
          hash: {
            name: "SHA-256"
          }
        };
      } else {
        throw new Error(`Unexpected verification algorithm: ${this.algorithm}`);
      }
      const isValid = await _crypto.default.subtle.verify(options, this.publicKey, signature_, message);
      _logger.default.debug("verify took", Date.now() - before, "ms");
      return isValid;
    } catch (e) {
      // This path should normally not be reachable unless the platform does
      // not support the crypto operation. In that case, it is a fatal error.
      throw new Error(`Unable to verify signature (crypto operations not supported). Error message: ${e}`);
    }
  }
}
exports.default = SignatureVerifier;