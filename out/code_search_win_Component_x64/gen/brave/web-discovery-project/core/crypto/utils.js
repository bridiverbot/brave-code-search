"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptAES = decryptAES;
exports.encryptAES = encryptAES;
Object.defineProperty(exports, "exportPublicKey", {
  enumerable: true,
  get: function () {
    return _pkcsConversion.exportPublicKey;
  }
});
exports.generateRSAKeypair = generateRSAKeypair;
exports.hash = hash;
exports.importRSAKey = importRSAKey;
exports.sha1 = sha1;
exports.sha256 = sha256;
exports.signRSA = signRSA;
exports.toByteArray = toByteArray;
var _crypto = _interopRequireDefault(require("../../platform/crypto"));
var _encoding = require("../encoding");
var _pkcsConversion = require("./pkcs-conversion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function fromByteArray(data, format) {
  if (format === "hex") {
    return (0, _encoding.toHex)(data);
  }
  if (format === "b64") {
    return (0, _encoding.toBase64)(data);
  }
  return data;
}
function toByteArray(data, format) {
  if (format === "hex") {
    return (0, _encoding.fromHex)(data);
  }
  if (format === "b64") {
    return (0, _encoding.fromBase64)(data);
  }
  return data;
}
function fromArrayBuffer(data, format) {
  return fromByteArray(new Uint8Array(data), format);
}
function toArrayBuffer(data, format) {
  return toByteArray(data, format).buffer;
}
async function hash(algo, str, format = "hex") {
  return _crypto.default.subtle.digest(algo, typeof str === "string" ? (0, _encoding.toUTF8)(str) : str).then(h => fromArrayBuffer(h, format));
}
async function sha256(str, format = "hex") {
  return hash("SHA-256", str, format);
}
async function importAESKey(key) {
  return _crypto.default.subtle.importKey("raw", toArrayBuffer(key, "hex"), {
    name: "AES-GCM",
    length: 256
  }, true, ["encrypt", "decrypt"]);
}
async function encryptAES(data, key, iv) {
  return Promise.all([iv || _crypto.default.getRandomValues(new Uint8Array(12)), typeof key === "string" ? importAESKey(key) : key]).then(([_iv, _key]) => _crypto.default.subtle.encrypt({
    name: "AES-GCM",
    iv: _iv
  }, _key, data).then(encrypted => [fromArrayBuffer(_iv, "b64"), fromArrayBuffer(encrypted, "b64")]));
}
async function decryptAES(encrypted, key) {
  let iv = encrypted[0];
  let encryptedMsg = encrypted[1];
  iv = new Uint8Array(toArrayBuffer(iv, "b64"));
  encryptedMsg = toArrayBuffer(encryptedMsg, "b64");
  return Promise.resolve().then(() => typeof key === "string" ? importAESKey(key) : key).then(importedKey => _crypto.default.subtle.decrypt({
    name: "AES-GCM",
    iv
  }, importedKey, encryptedMsg));
}
async function importRSAKey(pk, pub = true, h = "SHA-256", algorithm = "RSA-OAEP") {
  let uses;
  if (pub) {
    if (algorithm === "RSA-OAEP") {
      uses = ["wrapKey", "encrypt"];
    } else {
      uses = ["verify"];
    }
  } else if (algorithm === "RSA-OAEP") {
    uses = ["unwrapKey", "decrypt"];
  } else {
    uses = ["sign"];
  }
  return _crypto.default.subtle.importKey(pub ? "spki" : "pkcs8", (0, _encoding.fromBase64)(pk), {
    name: algorithm,
    hash: {
      name: h
    }
  }, true, uses);
}
async function sha1(s) {
  return hash("SHA-1", s);
}
async function generateRSAKeypair(bits = 2048, hashName = "SHA-256") {
  return _crypto.default.subtle.generateKey({
    name: "RSASSA-PKCS1-v1_5",
    modulusLength: bits,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: {
      name: hashName
    }
  }, true, ["sign", "verify"]).then(key => Promise.all([_crypto.default.subtle.exportKey("spki", key.publicKey).then(_encoding.toBase64), _crypto.default.subtle.exportKey("pkcs8", key.privateKey).then(_encoding.toBase64)]));
}
async function signRSA(privateKey, data) {
  const _data = typeof data === "string" ? (0, _encoding.toUTF8)(data) : data;
  return (0, _encoding.toHex)(await _crypto.default.subtle.sign({
    name: "RSASSA-PKCS1-v1_5",
    hash: {
      name: "SHA-256"
    }
  }, privateKey, _data));
}