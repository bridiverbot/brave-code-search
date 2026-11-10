"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _http = require("../core/http");
var _pacemaker = _interopRequireWildcard(require("../core/services/pacemaker"));
var _config = _interopRequireDefault(require("../core/config"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
class Manager {
  constructor(webDiscoveryProject) {
    this.webDiscoveryProject = webDiscoveryProject;
    this.timeout = null;
    this.nextFetch = _pacemaker.ONE_MINUTE;
  }
  async _doFetch() {
    const getJobResponse = await (0, _http.fetch)(`${_config.default.settings.FETCHER_GATEWAY}/v1/get_job`);
    if (getJobResponse.status !== 200) {
      console.error("Abort!", getJobResponse.status);
      this._scheduleNextFetch();
      return;
    }

    // Example of valid job:
    // {
    //   url,
    //   headers,
    //   job_id,
    //   status: "ok",
    //   next_attempt_seconds,
    // }
    //
    // Example of response with no available job:
    // {
    //   status: "no job",
    //   next_attempt_seconds,
    // }
    const {
      status,
      next_attempt_seconds,
      url,
      headers,
      job_id
    } = await getJobResponse.json();
    this.nextFetch = next_attempt_seconds * _pacemaker.ONE_SECOND;

    // Could not fetch job
    if (status !== "ok") {
      console.error("Could not fetch job:", status);
      this._scheduleNextFetch();
      return;
    }
    const t0 = Date.now();
    const fetchResponse = await this.webDiscoveryProject.action("anonymousHttpGet", url, headers);
    const t1 = Date.now();
    console.error("RESPONSE", fetchResponse);
    const pushJobResponse = await (0, _http.fetch)(`${_config.default.settings.FETCHER_GATEWAY}/v1/push_job`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job_id,
        url,
        resource_url: fetchResponse.url,
        html: fetchResponse.body,
        request_headers: headers,
        response_headers: fetchResponse.headers,
        status_code: fetchResponse.status,
        fetch_timestamp: Date.now(),
        fetch_duration_ms: t1 - t0
      })
    });
    console.error("Response from gateway", await pushJobResponse.json());
    this._scheduleNextFetch();
  }
  _scheduleNextFetch() {
    console.error("Scheduling next fetch in", this.nextFetch, "ms");
    this.timeout = _pacemaker.default.setTimeout(async () => {
      try {
        await this._doFetch();
      } catch (ex) {
        console.error("Error while trying to fetch", ex);
        this._scheduleNextFetch();
      }
    }, this.nextFetch);
  }
  init() {
    this._scheduleNextFetch();
  }
  unload() {
    if (this.timeout) {
      _pacemaker.default.clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}
exports.default = Manager;