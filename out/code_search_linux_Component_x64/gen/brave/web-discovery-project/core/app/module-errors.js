"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleMissingError = exports.ModuleDisabledError = exports.ActionMissingError = void 0;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

class ModuleMissingError extends Error {
  constructor(moduleName) {
    super(`module '${moduleName}' is missing`);
    this.name = "ModuleMissingError";
  }
}
exports.ModuleMissingError = ModuleMissingError;
class ModuleDisabledError extends Error {
  constructor(moduleName) {
    super(`module '${moduleName}' is disabled`);
    this.name = "ModuleDisabledError";
  }
}
exports.ModuleDisabledError = ModuleDisabledError;
class ActionMissingError extends Error {
  constructor(moduleName, actionName) {
    super(`action '${actionName}' is not defined on module '${moduleName}'`);
    this.name = "ActionMissingError";
  }
}
exports.ActionMissingError = ActionMissingError;