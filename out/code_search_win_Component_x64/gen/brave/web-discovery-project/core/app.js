"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.shouldEnableModule = shouldEnableModule;
var _webextensionPolyfill = _interopRequireDefault(require("webextension-polyfill"));
var _config = _interopRequireDefault(require("./config"));
var _events = _interopRequireWildcard(require("./events"));
var _prefs = _interopRequireDefault(require("./prefs"));
var _module = _interopRequireDefault(require("./app/module"));
var _kord = require("./kord");
var _console = _interopRequireWildcard(require("./console"));
var _logger = _interopRequireDefault(require("./logger"));
var _defer = _interopRequireDefault(require("./helpers/defer"));
var _settings = _interopRequireDefault(require("./settings"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint no-param-reassign: 'off' */

function shouldEnableModule(name) {
  const pref = `modules.${name}.enabled`;
  return _prefs.default.get(pref) !== false;
}
function setupConsole() {
  if ((0, _console.isLoggingEnabled)()) {
    (0, _console.enable)();
    _logger.default.enable();
  } else {
    (0, _console.disable)();
    _logger.default.disable();
  }
}

/**
 * @module core
 * @namespace core
 */

/**
 * @class App
 */
class App {
  /**
   * @constructor
   * @param {object} config
   */
  constructor({
    config = _config.default,
    version = _config.default.EXTENSION_VERSION,
    debug,
    browser = _webextensionPolyfill.default,
    skipModules = []
  } = {}) {
    this.settings = (0, _settings.default)(config.settings, {
      version
    });
    this.isFullyLoaded = false;

    /**
     * @property {string} version
     */
    this.version = version;
    this.debug = debug;
    /**
     * @property {object} config
     */
    this.config = config;
    /**
     * @property {object} modules
     */
    this.modules = Object.create(null);

    /**
     * @property {object} services
     */
    this.services = Object.create(null);
    this._browser = browser;
    this._startedDefer = new _defer.default();
    config.modules.forEach(moduleName => {
      if (skipModules.includes(moduleName)) return;
      const module = new _module.default(moduleName);

      // special handling for core as it is not really a module and it manages app state
      if (moduleName === "core" && module.background) {
        module.background.app = this;
      }
      this.modules[moduleName] = module;

      // Keep reference to all module services by their name
      // Currently last one wins
      Object.assign(this.services, module.providedServices);
    });
    (0, _kord.setApp)(this);
    this.isRunning = false;
  }
  injectHelpers() {
    this.events = _events.default;
    this.prefs = _prefs.default;
  }

  /**
   * should be used only for testing!
   *
   * @method extensionRestart
   * @param {function} changes - function called between stop and start
   */
  extensionRestart(changes) {
    // unload background
    this.unload();

    // apply changes
    if (changes) {
      changes();
    }

    // load background
    return this.load();
  }

  /**
   * Starts the App.
   * Loads all required services and module backgrounds.
   *
   * Modules that are marked as disabled will not be loaded. To mark a module
   * as disabled set a preference `modules.<moduleName>.enabled` to `false`.
   *
   * @method start
   * @returns {Promise}
   */
  async start() {
    this.isRunning = true;
    await this.setupPrefs();
    await this.load();
    this.injectHelpers();
  }
  stop() {
    this.isRunning = false;
    this.unload();
  }
  get moduleList() {
    const modules = this.modules;
    return Object.keys(modules).map(moduleName => modules[moduleName]);
  }
  enabledModules() {
    return this.moduleList.filter(module => module.isEnabled);
  }
  async setupPrefs() {
    const initPrefs = _prefs.default.init || Promise.resolve.bind(Promise);
    await initPrefs();
    if (this.config.environment === "development" || this.debug) {
      _prefs.default.set("developer", true);
    }
    setupConsole();
    this.prefchangeEventListener = (0, _events.subscribe)("prefchange", this.onPrefChange, this);
  }
  prepareServices(serviceNames) {
    return Promise.all(serviceNames.map(
    // service is initialized only once, so calling init multiple times is fine
    async serviceName => {
      try {
        await this.services[serviceName].init(this, this._browser);
      } catch (e) {
        _console.default.error("App", "cannot load service", serviceName, e);
        throw e;
      }
    }));
  }
  unloadServices() {
    Object.keys(this.services).forEach(serviceName => {
      try {
        this.services[serviceName].unload();
      } catch (e) {
        _console.default.log("App", "error unloading service", e);
      }
    });
  }

  /**
   * Enable module and it dependant services
   * Module will not load if dependant services fail to initialize
   *
   * @method loadModule
   * @private
   */
  async loadModule(module) {
    try {
      await this.prepareServices(module.requiredServices);
      const services = {};
      const scopedServices = await Promise.all(module.requiredServices.map(serviceName => this.services[serviceName].moduleFactory(module.name)));
      module.requiredServices.forEach((serviceName, i) => {
        services[serviceName] = scopedServices[i];
      });
      await module.enable(this.settings, this._browser, {
        services
      });
    } catch (e) {
      _console.default.error("App", "Error on loading module:", module.name, e);
    }
  }

  /**
   * Triggers module loading
   */
  load() {
    _console.default.log("App", "Loading modules started");
    const allModules = this.moduleList;
    const core = allModules.find(x => x.name === "core");
    const modules = allModules.filter(x => x.name !== "core" && shouldEnableModule(x.name));
    const disabledModules = allModules.filter(x => !shouldEnableModule(x.name));

    // all modules start in undefined state
    // they have to be marked as disabled so they wont accept kord actions
    disabledModules.forEach(m => m.disable());

    // we load core first before any other module
    return this.loadModule(core)
    // loading of modules should be paralellized as much as possible
    .then(() => {
      // do not return - we trigger module loading and let window loading to
      // start as soon as possible
      // TODO: should we return now?
      Promise.all(modules.map(x => this.loadModule(x))).then(() => {
        _console.default.log("App", "Loading modules -- all loaded");
        this.isFullyLoaded = true;
        this._startedDefer.resolve();
      }).catch(e => {
        _console.default.error("App", "Loading modules failed", e);
        this._startedDefer.reject(e);
      });
    });
  }
  unload() {
    if (this.prefchangeEventListener) {
      this.prefchangeEventListener.unsubscribe();
    }
    _console.default.log("App", "unload background modules");
    this.enabledModules().reverse().forEach(module => {
      try {
        _console.default.log("App", "unload background module: ", module.name);
        module.disable();
      } catch (e) {
        _console.default.error(`Error unloading module: ${module.name}`, e);
      }
    });
    _console.default.log("App", "unload background modules finished");
    _console.default.log("App", "unload services");
    this.unloadServices();
    _console.default.log("App", "unload services finished");
  }
  onPrefChange(pref) {
    if (pref === "showConsoleLogs") {
      setupConsole();
    }
    if (!pref.startsWith("modules.")) {
      return;
    }
    const prefParts = pref.split(".");
    if (prefParts.pop() !== "enabled") {
      return;
    }
    const moduleName = prefParts.pop();
    const shouldEnable = shouldEnableModule(moduleName);
    const shouldDisable = !shouldEnable;
    const module = this.modules[moduleName];
    if (!module) {
      // pref for non-existing module - just ignore
      return;
    }
    if (shouldEnable && module.isDisabled) {
      this.enableModule(module.name);
    } else if (shouldDisable && !module.isDisabled) {
      this.disableModule(module.name);
    } else {
      // prefchange tends to fire with no change - just ignore
    }
  }

  /**
   * Enabled module background. Returns early if module is already enabled.
   *
   * It sets the `modules.<moduleName>.enabled` pref to true.
   *
   * @method enableModule
   * @params {string} moduleName - name of the module
   * @returns {Promise}
   */
  async enableModule(moduleName) {
    const module = this.modules[moduleName];
    if (module.isEnabled || !this.isRunning) {
      return;
    }
    await (module.isEnabling ? module.isReady() : this.loadModule(module));
    const prefName = `modules.${moduleName}.enabled`;
    if (_prefs.default.has(prefName) && _prefs.default.get(prefName) !== true) {
      _prefs.default.set(prefName, true);
    }
  }

  /**
   * Disable module background. Does nothing if module is already disabled.
   *
   * It sets the `modules.<moduleName>.enabled` pref to false. So if called
   * before startup, it will prevent module start.
   *
   * It returns a Promise but side effects synchronously.
   * If module did not finish initialization it waits and then disable it.
   *
   * @method disableModule
   * @param {string} moduleName - name of a module
   * @returns {Promise}
   */
  async disableModule(moduleName) {
    const module = this.modules[moduleName];
    if (module.isNotInitialized || module.isDisabled || !this.isRunning) {
      return;
    }
    if (module.isEnabling) {
      await module.isReady();
    }
    module.disable(); // intentionally not waiting

    const prefName = `modules.${moduleName}.enabled`;
    if (!_prefs.default.has(prefName) || _prefs.default.get(prefName) !== false) {
      _prefs.default.set(prefName, false);
    }
  }
  ready() {
    return this._startedDefer.promise;
  }
  status() {
    const appModules = this.modules;
    const modules = Object.keys(appModules).reduce((hash, moduleName) => {
      const module = appModules[moduleName];
      hash[moduleName] = module.status();
      return hash;
    }, Object.create(null));
    return {
      modules
    };
  }
}
exports.default = App;