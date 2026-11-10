export const __webpack_esm_id__ = "brave_components_brave_welcome_ui_components_setup-complete_index_tsx";
export const __webpack_esm_ids__ = ["brave_components_brave_welcome_ui_components_setup-complete_index_tsx"];
export const __webpack_esm_modules__ = {

/***/ "../../../brave/components/brave_welcome_ui/components/setup-complete/index.tsx"
/*!*************************************************************************************!*\
  !*** ./components/brave_welcome_ui/components/setup-complete/index.tsx + 2 modules ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setup_complete)
});
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external ["//resources/brave/react.bundle.js","React"]
var react_bundle_js_React_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js + 7 modules
var styled_components_esm = __webpack_require__("../../../brave/node_modules/.pnpm/styled-components@6.4.3_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/styled-components/dist/styled-components.esm.js");
;// ./components/brave_welcome_ui/components/setup-complete/style.ts
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.

const MainBox = styled_components_esm["default"].div.withConfig({ displayName: "MainBox", componentId: "sc-1a2fqsl" }) `
  background: transparent;
  border-radius: 30px;
  max-width: 800px;
  color: white;
  font-family: ${(p) => p.theme.fontFamily.heading};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .view-title {
    font-weight: 400;
    font-size: 40px;
  }

  .icon-box {
    width: 300px;
  }
`;

;// ./components/common/lottiePlayer.tsx
// Copyright (c) 2021 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LottiePlayerState_props_accessor_storage;

let workerLoaderPolicy = null;
function getLottieWorkerURL() {
    if (workerLoaderPolicy === null) {
        workerLoaderPolicy =
            window.trustedTypes.createPolicy('lottie-worker-script-loader', {
                createScriptURL: (_ignore) => {
                    const script = `import 'chrome://resources/lottie/lottie_worker.min.js';`;
                    // CORS blocks loading worker script from a different origin, even
                    // if chrome://resources/ is added in the 'worker-src' CSP header.
                    // (see https://crbug.com/1385477). Loading scripts as blob and then
                    // instantiating it as web worker is possible.
                    const blob = new Blob([script], { type: 'text/javascript' });
                    return URL.createObjectURL(blob);
                },
                createHTML: () => { throw new Error('Should not be called'); },
                createScript: () => { throw new Error('Should not be called'); },
            });
    }
    return workerLoaderPolicy.createScriptURL('');
}
function loadAnimation(maybeValidUrl) {
    const url = new URL(maybeValidUrl, document.location.href);
    if (url.protocol !== 'chrome:' &&
        (url.protocol !== 'data:' || !url.pathname.startsWith('application/json;'))) {
        throw new Error(`Invalid scheme or data url used. ${maybeValidUrl}`);
    }
    const { promise, resolve } = Promise.withResolvers();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(xhr.response);
        }
    };
    return promise;
}
class LottiePlayerState {
    // The last props passed to the component. These are required for notifying listeners via the onXXX methods.
    get props() { return __classPrivateFieldGet(this, _LottiePlayerState_props_accessor_storage, "f"); }
    set props(value) { __classPrivateFieldSet(this, _LottiePlayerState_props_accessor_storage, value, "f"); }
    get play() {
        return this.isPlaying;
    }
    set play(value) {
        var _a;
        if (this.isPlaying === value)
            return;
        this.isPlaying = value;
        (_a = this.initPromise) === null || _a === void 0 ? void 0 : _a.then(() => {
            this.worker.postMessage({ control: { play: this.isPlaying } });
        });
    }
    get animationUrl() {
        return this.url;
    }
    set animationUrl(value) {
        if (this.url === value)
            return;
        // When we change the animation URL we need to wait for the animation to be initialized
        // before we can send the play control information to the worker.
        const resolvable = Promise.withResolvers();
        this.initPromise = resolvable.promise;
        // Note: This is resolved by the worker when the animation is initialized.
        this.resolveInit = resolvable.resolve;
        this.url = value;
        loadAnimation(value).then(data => {
            const message = {
                animationData: data,
                drawSize: this.getCanvasSize(),
                params: { loop: !!this.props.loop, autoplay: this.play },
            };
            if (!this.canvas.dataset.transferred) {
                message.canvas = this.canvas.transferControlToOffscreen();
                this.canvas.dataset.transferred = 'true';
                this.worker.postMessage(message, [message.canvas]);
            }
            else {
                this.worker.postMessage(message);
            }
        });
    }
    constructor(canvas, autoplay) {
        this.canvas = canvas;
        this.initPromise = new Promise((resolve) => this.resolveInit = resolve);
        _LottiePlayerState_props_accessor_storage.set(this, void 0);
        this.isPlaying = false;
        this.isPlaying = autoplay;
        this.worker = new Worker(getLottieWorkerURL(), { type: 'module' });
        this.worker.onmessage = (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!this.props) {
                return;
            }
            if (event.data.name === 'initialized' && event.data.success) {
                (_b = (_a = this.props).onInitialized) === null || _b === void 0 ? void 0 : _b.call(_a);
                this.resolveInit();
            }
            else if (event.data.name === 'playing') {
                (_d = (_c = this.props).onPlaying) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
            else if (event.data.name === 'paused') {
                (_f = (_e = this.props).onPaused) === null || _f === void 0 ? void 0 : _f.call(_e);
            }
            else if (event.data.name === 'stopped') {
                (_h = (_g = this.props).onStopped) === null || _h === void 0 ? void 0 : _h.call(_g);
            }
            else if (event.data.name === 'completed') {
                (_k = (_j = this.props).onComplete) === null || _k === void 0 ? void 0 : _k.call(_j);
            }
            else if (event.data.name === 'resized') {
                (_m = (_l = this.props).onResized) === null || _m === void 0 ? void 0 : _m.call(_l, event.data.size);
            }
        };
        this.resizeObserver = new ResizeObserver(e => {
            var _a;
            (_a = this.initPromise) === null || _a === void 0 ? void 0 : _a.then(() => {
                this.worker.postMessage({ drawSize: this.getCanvasSize() });
            });
        });
        this.resizeObserver.observe(this.canvas);
    }
    getCanvasSize() {
        const canvasElement = this.canvas;
        const devicePixelRatio = window.devicePixelRatio;
        const clientRect = canvasElement.getBoundingClientRect();
        const drawSize = {
            width: clientRect.width * devicePixelRatio,
            height: clientRect.height * devicePixelRatio,
        };
        return drawSize;
    }
    destroy() {
        this.worker.terminate();
        this.resizeObserver.disconnect();
        this.resolveInit = () => { };
    }
}
_LottiePlayerState_props_accessor_storage = new WeakMap();
const canvasStyle = {
    width: '100%',
    height: '100%'
};
function LottiePlayer(props) {
    const [state, setState] = react_bundle_js_React_.useState(null);
    const ref = react_bundle_js_React_.useRef(null);
    // Make sure the state has an up to date set of props for notifying listeners via the onXXX methods.
    if (state) {
        state.props = props;
        state.animationUrl = props.animationUrl;
        state.play = props.play;
    }
    // Handle creating the worker and cleaning up when the component unmounts
    react_bundle_js_React_.useEffect(() => {
        if (!ref.current)
            throw new Error("Canvas element not found");
        const state = new LottiePlayerState(ref.current, props.play);
        setState(state);
        return () => {
            state.destroy();
        };
    }, []);
    return react_bundle_js_React_.createElement("canvas", { ref: ref, style: canvasStyle });
}
/* harmony default export */ const lottiePlayer = (LottiePlayer);

// EXTERNAL MODULE: ./components/common/locale.ts + 1 modules
var locale = __webpack_require__("../../../brave/components/common/locale.ts");
// EXTERNAL MODULE: ./components/brave_welcome_ui/state/context.ts
var context = __webpack_require__("../../../brave/components/brave_welcome_ui/state/context.ts");
// EXTERNAL MODULE: ./components/brave_welcome_ui/state/hooks.ts
var hooks = __webpack_require__("../../../brave/components/brave_welcome_ui/state/hooks.ts");
;// ./components/brave_welcome_ui/components/setup-complete/index.tsx
// Copyright (c) 2022 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at https://mozilla.org/MPL/2.0/.






const LOTTIE_CHECK_MARK_ICON = 'data:application/json;base64,eyJ2IjoiNS43LjQiLCJmciI6MjcsImlwIjozNS4wMDAwMDYzMjgzOTk4LCJvcCI6OTIsInciOjI0MCwiaCI6MjQwLCJubSI6IkNvbXAgMiIsImRkZCI6MCwiYXNzZXRzIjpbXSwibGF5ZXJzIjpbeyJkZGQiOjAsImluZCI6MSwidHkiOjQsIm5tIjoiU2hhcGUgTGF5ZXIgMiIsInNyIjoxLCJrcyI6eyJvIjp7ImEiOjAsImsiOjEwMCwiaXgiOjExfSwiciI6eyJhIjowLCJrIjowLCJpeCI6MTB9LCJwIjp7ImEiOjAsImsiOlsxMjAsMTIwLDBdLCJpeCI6MiwibCI6Mn0sImEiOnsiYSI6MCwiayI6WzAsMCwwXSwiaXgiOjEsImwiOjJ9LCJzIjp7ImEiOjAsImsiOlsyMi4yMjIyMjIyMjIyMjIyMTgsMjIuMjIyMjIyMjIyMjIyMjE4LDEwMF0sIml4Ijo2LCJsIjoyfX0sImFvIjowLCJzaGFwZXMiOlt7InR5IjoiZ3IiLCJpdCI6W3siaW5kIjowLCJ0eSI6InNoIiwiaXgiOjEsImtzIjp7ImEiOjAsImsiOnsiaSI6W1swLDBdLFswLDBdLFswLDBdXSwibyI6W1swLDBdLFswLDBdLFswLDBdXSwidiI6W1stMjkwLC04N10sWy00OSwxNTNdLFsxOTcsLTk0XV0sImMiOmZhbHNlfSwiaXgiOjJ9LCJubSI6IlBhdGggMSIsIm1uIjoiQURCRSBWZWN0b3IgU2hhcGUgLSBHcm91cCIsImhkIjpmYWxzZX0seyJ0eSI6InRtIiwicyI6eyJhIjoxLCJrIjpbeyJpIjp7IngiOlswLjY2N10sInkiOlsxXX0sIm8iOnsieCI6WzAuMTY3XSwieSI6WzAuMTY3XX0sInQiOjUzLjY2NiwicyI6WzBdfSx7InQiOjU5LjMzMzc2MDcyODIxOTgsInMiOlszMV19XSwiaXgiOjF9LCJlIjp7ImEiOjEsImsiOlt7ImkiOnsieCI6WzAuNjY3XSwieSI6WzFdfSwibyI6eyJ4IjpbMC4xNjddLCJ5IjpbMC4xNjddfSwidCI6NTMuNjY2LCJzIjpbMF19LHsidCI6NjAuMDAwMDEwODQ4Njg1NCwicyI6WzEwMF19XSwiaXgiOjJ9LCJvIjp7ImEiOjAsImsiOjAsIml4IjozfSwibSI6MSwiaXgiOjIsIm5tIjoiVHJpbSBQYXRocyAxIiwibW4iOiJBREJFIFZlY3RvciBGaWx0ZXIgLSBUcmltIiwiaGQiOmZhbHNlfSx7InR5Ijoic3QiLCJjIjp7ImEiOjAsImsiOlsxLDEsMSwxXSwiaXgiOjN9LCJvIjp7ImEiOjAsImsiOjEwMCwiaXgiOjR9LCJ3Ijp7ImEiOjAsImsiOjY1LCJpeCI6NX0sImxjIjoyLCJsaiI6MiwiYm0iOjAsIm5tIjoiU3Ryb2tlIDEiLCJtbiI6IkFEQkUgVmVjdG9yIEdyYXBoaWMgLSBTdHJva2UiLCJoZCI6ZmFsc2V9LHsidHkiOiJ0ciIsInAiOnsiYSI6MCwiayI6WzAsMF0sIml4IjoyfSwiYSI6eyJhIjowLCJrIjpbMCwwXSwiaXgiOjF9LCJzIjp7ImEiOjAsImsiOlsxMDAsMTAwXSwiaXgiOjN9LCJyIjp7ImEiOjAsImsiOjAsIml4Ijo2fSwibyI6eyJhIjowLCJrIjoxMDAsIml4Ijo3fSwic2siOnsiYSI6MCwiayI6MCwiaXgiOjR9LCJzYSI6eyJhIjowLCJrIjowLCJpeCI6NX0sIm5tIjoiVHJhbnNmb3JtIn1dLCJubSI6IlNoYXBlIDEiLCJucCI6NCwiY2l4IjoyLCJibSI6MCwiaXgiOjEsIm1uIjoiQURCRSBWZWN0b3IgR3JvdXAiLCJoZCI6ZmFsc2V9XSwiaXAiOjAsIm9wIjoyNzAuMDAwMDQ4ODE5MDg0LCJzdCI6MCwiYm0iOjB9LHsiZGRkIjowLCJpbmQiOjIsInR5Ijo0LCJubSI6IlNoYXBlIExheWVyIDEiLCJzciI6MSwia3MiOnsibyI6eyJhIjowLCJrIjoxMDAsIml4IjoxMX0sInIiOnsiYSI6MCwiayI6MCwiaXgiOjEwfSwicCI6eyJhIjowLCJrIjpbMTIwLDEyMCwwXSwiaXgiOjIsImwiOjJ9LCJhIjp7ImEiOjAsImsiOlswLDAsMF0sIml4IjoxLCJsIjoyfSwicyI6eyJhIjowLCJrIjpbMjIuMjIyMjIyMjIyMjIyMjE4LDIyLjIyMjIyMjIyMjIyMjIxOCwxMDBdLCJpeCI6NiwibCI6Mn19LCJhbyI6MCwic2hhcGVzIjpbeyJ0eSI6ImdyIiwiaXQiOlt7ImQiOjEsInR5IjoiZWwiLCJzIjp7ImEiOjAsImsiOls3MTAuODEyLDcxMC44MTJdLCJpeCI6Mn0sInAiOnsiYSI6MCwiayI6WzAsMF0sIml4IjozfSwibm0iOiJFbGxpcHNlIFBhdGggMSIsIm1uIjoiQURCRSBWZWN0b3IgU2hhcGUgLSBFbGxpcHNlIiwiaGQiOmZhbHNlfSx7InR5Ijoic3QiLCJjIjp7ImEiOjAsImsiOlsxLDEsMSwxXSwiaXgiOjN9LCJvIjp7ImEiOjAsImsiOjEwMCwiaXgiOjR9LCJ3Ijp7ImEiOjAsImsiOjY1LCJpeCI6NX0sImxjIjoyLCJsaiI6MiwiYm0iOjAsIm5tIjoiU3Ryb2tlIDEiLCJtbiI6IkFEQkUgVmVjdG9yIEdyYXBoaWMgLSBTdHJva2UiLCJoZCI6ZmFsc2V9LHsidHkiOiJ0ciIsInAiOnsiYSI6MCwiayI6WzI2LjAwOCwyOS45M10sIml4IjoyfSwiYSI6eyJhIjowLCJrIjpbMCwwXSwiaXgiOjF9LCJzIjp7ImEiOjAsImsiOlsxMDAsMTAwXSwiaXgiOjN9LCJyIjp7ImEiOjAsImsiOjAsIml4Ijo2fSwibyI6eyJhIjowLCJrIjoxMDAsIml4Ijo3fSwic2siOnsiYSI6MCwiayI6MCwiaXgiOjR9LCJzYSI6eyJhIjowLCJrIjowLCJpeCI6NX0sIm5tIjoiVHJhbnNmb3JtIn1dLCJubSI6IkVsbGlwc2UgMSIsIm5wIjozLCJjaXgiOjIsImJtIjowLCJpeCI6MSwibW4iOiJBREJFIFZlY3RvciBHcm91cCIsImhkIjpmYWxzZX0seyJ0eSI6InRtIiwicyI6eyJhIjoxLCJrIjpbeyJpIjp7IngiOlswLjgzM10sInkiOlswLjgzM119LCJvIjp7IngiOlswLjMzM10sInkiOlswXX0sInQiOjM5LCJzIjpbMTAwXX0seyJ0Ijo1My42NjYyNTk3MDM0NzExLCJzIjpbMF19XSwiaXgiOjF9LCJlIjp7ImEiOjAsImsiOjEwMCwiaXgiOjJ9LCJvIjp7ImEiOjAsImsiOi03NywiaXgiOjN9LCJtIjoxLCJpeCI6Miwibm0iOiJUcmltIFBhdGhzIDEiLCJtbiI6IkFEQkUgVmVjdG9yIEZpbHRlciAtIFRyaW0iLCJoZCI6ZmFsc2V9XSwiaXAiOjAsIm9wIjoyNzAuMDAwMDQ4ODE5MDg0LCJzdCI6MCwiYm0iOjB9XSwibWFya2VycyI6W119';
function SetupComplete() {
    const { viewType, setViewType } = react_bundle_js_React_.useContext(context["default"]);
    const { forward } = (0,hooks.useViewTypeTransition)(viewType);
    const handleComplete = () => setViewType(forward);
    return (react_bundle_js_React_.createElement(MainBox, null,
        react_bundle_js_React_.createElement("div", { className: 'icon-box' },
            react_bundle_js_React_.createElement(lottiePlayer, { animationUrl: LOTTIE_CHECK_MARK_ICON, play: true, loop: false, onComplete: handleComplete })),
        react_bundle_js_React_.createElement("div", { className: "view-title" }, (0,locale.getLocale)('braveWelcomeSetupCompleteLabel'))));
}
/* harmony default export */ const setup_complete = (SetupComplete);


/***/ }

};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJhdmVfY29tcG9uZW50c19icmF2ZV93ZWxjb21lX3VpX2NvbXBvbmVudHNfc2V0dXAtY29tcGxldGVfaW5kZXhfdHN4LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTZEO0FBQzdELHNFQUFzRTtBQUN0RSw0RUFBNEU7QUFDNUUsc0RBQXNEO0FBRWhCO0FBRS9CLE1BQU0sT0FBTyxHQUFHLGdDQUFNLENBQUMsR0FBRzs7Ozs7aUJBS2hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7OztDQWNqRDs7O0FDMUJELDZEQUE2RDtBQUM3RCxzRUFBc0U7QUFDdEUsNEVBQTRFO0FBQzVFLHNEQUFzRDs7Ozs7Ozs7Ozs7OztBQUV4QjtBQUU5QixJQUFJLGtCQUFrQixHQUFlLElBQUksQ0FBQztBQUUxQyxTQUFTLGtCQUFrQjtJQUN6QixJQUFJLGtCQUFrQixLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2hDLGtCQUFrQjtZQUNmLE1BQWMsQ0FBQyxZQUFhLENBQUMsWUFBWSxDQUFDLDZCQUE2QixFQUFFO2dCQUN4RSxlQUFlLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRTtvQkFDbkMsTUFBTSxNQUFNLEdBQ1YsMERBQTBELENBQUM7b0JBQzdELGtFQUFrRTtvQkFDbEUsa0VBQWtFO29CQUNsRSxvRUFBb0U7b0JBQ3BFLDhDQUE4QztvQkFDOUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBQzdELE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxFQUFDLENBQUM7Z0JBQzdE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YXZlX3dlbGNvbWVfdWkvY29tcG9uZW50cy9zZXR1cC1jb21wbGV0ZS9zdHlsZS50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9jb21tb24vbG90dGllUGxheWVyLnRzeCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9icmF2ZV93ZWxjb21lX3VpL2NvbXBvbmVudHMvc2V0dXAtY29tcGxldGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIHlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTWFpbkJveCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAkeyhwKSA9PiBwLnRoZW1lLmZvbnRGYW1pbHkuaGVhZGluZ307XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC52aWV3LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gIC5pY29uLWJveCB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5gXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmxldCB3b3JrZXJMb2FkZXJQb2xpY3k6IGFueSB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRMb3R0aWVXb3JrZXJVUkwoKSB7XG4gIGlmICh3b3JrZXJMb2FkZXJQb2xpY3kgPT09IG51bGwpIHtcbiAgICB3b3JrZXJMb2FkZXJQb2xpY3kgPVxuICAgICAgKHdpbmRvdyBhcyBhbnkpLnRydXN0ZWRUeXBlcyEuY3JlYXRlUG9saWN5KCdsb3R0aWUtd29ya2VyLXNjcmlwdC1sb2FkZXInLCB7XG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogKF9pZ25vcmU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9XG4gICAgICAgICAgICBgaW1wb3J0ICdjaHJvbWU6Ly9yZXNvdXJjZXMvbG90dGllL2xvdHRpZV93b3JrZXIubWluLmpzJztgO1xuICAgICAgICAgIC8vIENPUlMgYmxvY2tzIGxvYWRpbmcgd29ya2VyIHNjcmlwdCBmcm9tIGEgZGlmZmVyZW50IG9yaWdpbiwgZXZlblxuICAgICAgICAgIC8vIGlmIGNocm9tZTovL3Jlc291cmNlcy8gaXMgYWRkZWQgaW4gdGhlICd3b3JrZXItc3JjJyBDU1AgaGVhZGVyLlxuICAgICAgICAgIC8vIChzZWUgaHR0cHM6Ly9jcmJ1Zy5jb20vMTM4NTQ3NykuIExvYWRpbmcgc2NyaXB0cyBhcyBibG9iIGFuZCB0aGVuXG4gICAgICAgICAgLy8gaW5zdGFudGlhdGluZyBpdCBhcyB3ZWIgd29ya2VyIGlzIHBvc3NpYmxlLlxuICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc2NyaXB0XSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KTtcbiAgICAgICAgICByZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlSFRNTDogKCkgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ1Nob3VsZCBub3QgYmUgY2FsbGVkJykgfSxcbiAgICAgICAgY3JlYXRlU2NyaXB0OiAoKSA9PiB7IHRocm93IG5ldyBFcnJvcignU2hvdWxkIG5vdCBiZSBjYWxsZWQnKSB9LFxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gd29ya2VyTG9hZGVyUG9saWN5LmNyZWF0ZVNjcmlwdFVSTCgnJyk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBbmltYXRpb24obWF5YmVWYWxpZFVybDogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwobWF5YmVWYWxpZFVybCwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gIGlmICh1cmwucHJvdG9jb2wgIT09ICdjaHJvbWU6JyAmJlxuICAgICh1cmwucHJvdG9jb2wgIT09ICdkYXRhOicgfHwgIXVybC5wYXRobmFtZS5zdGFydHNXaXRoKCdhcHBsaWNhdGlvbi9qc29uOycpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWUgb3IgZGF0YSB1cmwgdXNlZC4gJHttYXliZVZhbGlkVXJsfWApXG4gIH1cblxuICBjb25zdCB7IHByb21pc2UsIHJlc29sdmUgfSA9IFByb21pc2Uud2l0aFJlc29sdmVyczxvYmplY3QgfCBudWxsIHwgc3RyaW5nPigpXG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpXG4gIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbidcbiAgeGhyLnNlbmQoKVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvbWlzZVxufVxuXG5pbnRlcmZhY2UgTWVzc2FnZURhdGEge1xuICBhbmltYXRpb25EYXRhOiBvYmplY3QgfCBudWxsIHwgc3RyaW5nO1xuICBkcmF3U2l6ZTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuICBwYXJhbXM6IHsgbG9vcDogYm9vbGVhbiwgYXV0b3BsYXk6IGJvb2xlYW4gfTtcbiAgY2FudmFzPzogT2Zmc2NyZWVuQ2FudmFzO1xufVxuXG5pbnRlcmZhY2UgTG90dGllUGxheWVyUHJvcHMge1xuICBhbmltYXRpb25Vcmw6IHN0cmluZ1xuICBwbGF5OiBib29sZWFuXG4gIGxvb3A/OiBib29sZWFuXG4gIG9uSW5pdGlhbGl6ZWQ/OiAoKSA9PiB2b2lkXG4gIG9uUGxheWluZz86ICgpID0+IHZvaWRcbiAgb25QYXVzZWQ/OiAoKSA9PiB2b2lkXG4gIG9uU3RvcHBlZD86ICgpID0+IHZvaWRcbiAgb25Db21wbGV0ZT86ICgpID0+IHZvaWRcbiAgb25SZXNpemVkPzogKHNpemU6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSkgPT4gdm9pZFxufVxuXG5jbGFzcyBMb3R0aWVQbGF5ZXJTdGF0ZSB7XG4gIHByaXZhdGUgd29ya2VyOiBXb3JrZXJcbiAgcHJpdmF0ZSByZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXJcblxuICAvLyBQcm9taXNlcyBmb3Igd2FpdGluZyBmb3IgdGhlIHdvcmtlciB0byBiZSBpbml0aWFsaXplZCB3aXRoIHRoZSBhbmltYXRpb24gZGF0YS5cbiAgcHJpdmF0ZSByZXNvbHZlSW5pdDogKCkgPT4gdm9pZFxuICBwcml2YXRlIGluaXRQcm9taXNlOiBQcm9taXNlPHZvaWQ+ID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHRoaXMucmVzb2x2ZUluaXQgPSByZXNvbHZlKVxuXG4gIC8vIFRoZSBsYXN0IHByb3BzIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LiBUaGVzZSBhcmUgcmVxdWlyZWQgZm9yIG5vdGlmeWluZyBsaXN0ZW5lcnMgdmlhIHRoZSBvblhYWCBtZXRob2RzLlxuICBhY2Nlc3NvciBwcm9wczogTG90dGllUGxheWVyUHJvcHNcblxuICBwcml2YXRlIGlzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgcGxheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1BsYXlpbmdcbiAgfVxuXG4gIHNldCBwbGF5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nID09PSB2YWx1ZSkgcmV0dXJuXG5cbiAgICB0aGlzLmlzUGxheWluZyA9IHZhbHVlXG4gICAgdGhpcy5pbml0UHJvbWlzZT8udGhlbigoKSA9PiB7XG4gICAgICB0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7IGNvbnRyb2w6IHsgcGxheTogdGhpcy5pc1BsYXlpbmcgfSB9KVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHVybDogc3RyaW5nXG4gIGdldCBhbmltYXRpb25VcmwoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsXG4gIH1cblxuICBzZXQgYW5pbWF0aW9uVXJsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy51cmwgPT09IHZhbHVlKSByZXR1cm5cblxuICAgIC8vIFdoZW4gd2UgY2hhbmdlIHRoZSBhbmltYXRpb24gVVJMIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGFuaW1hdGlvbiB0byBiZSBpbml0aWFsaXplZFxuICAgIC8vIGJlZm9yZSB3ZSBjYW4gc2VuZCB0aGUgcGxheSBjb250cm9sIGluZm9ybWF0aW9uIHRvIHRoZSB3b3JrZXIuXG4gICAgY29uc3QgcmVzb2x2YWJsZSA9IFByb21pc2Uud2l0aFJlc29sdmVyczx2b2lkPigpXG4gICAgdGhpcy5pbml0UHJvbWlzZSA9IHJlc29sdmFibGUucHJvbWlzZVxuXG4gICAgLy8gTm90ZTogVGhpcyBpcyByZXNvbHZlZCBieSB0aGUgd29ya2VyIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBpbml0aWFsaXplZC5cbiAgICB0aGlzLnJlc29sdmVJbml0ID0gcmVzb2x2YWJsZS5yZXNvbHZlXG4gICAgdGhpcy51cmwgPSB2YWx1ZVxuXG4gICAgbG9hZEFuaW1hdGlvbih2YWx1ZSkudGhlbihkYXRhID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IE1lc3NhZ2VEYXRhID0ge1xuICAgICAgICBhbmltYXRpb25EYXRhOiBkYXRhLFxuICAgICAgICBkcmF3U2l6ZTogdGhpcy5nZXRDYW52YXNTaXplKCksXG4gICAgICAgIHBhcmFtczogeyBsb29wOiAhIXRoaXMucHJvcHMubG9vcCwgYXV0b3BsYXk6IHRoaXMucGxheSB9LFxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuY2FudmFzLmRhdGFzZXQudHJhbnNmZXJyZWQpIHtcbiAgICAgICAgbWVzc2FnZS5jYW52YXMgPSB0aGlzLmNhbnZhcy50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpXG4gICAgICAgIHRoaXMuY2FudmFzLmRhdGFzZXQudHJhbnNmZXJyZWQgPSAndHJ1ZSdcbiAgICAgICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UobWVzc2FnZSwgW21lc3NhZ2UuY2FudmFzXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgYXV0b3BsYXk6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzUGxheWluZyA9IGF1dG9wbGF5XG4gICAgdGhpcy53b3JrZXIgPSBuZXcgV29ya2VyKGdldExvdHRpZVdvcmtlclVSTCgpIGFzIHVua25vd24gYXMgVVJMLCB7IHR5cGU6ICdtb2R1bGUnIH0pXG4gICAgdGhpcy53b3JrZXIub25tZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcm9wcykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LmRhdGEubmFtZSA9PT0gJ2luaXRpYWxpemVkJyAmJiBldmVudC5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkluaXRpYWxpemVkPy4oKVxuICAgICAgICB0aGlzLnJlc29sdmVJbml0KClcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5uYW1lID09PSAncGxheWluZycpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBsYXlpbmc/LigpXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEubmFtZSA9PT0gJ3BhdXNlZCcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBhdXNlZD8uKClcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YS5uYW1lID09PSAnc3RvcHBlZCcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN0b3BwZWQ/LigpXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmRhdGEubmFtZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlPy4oKVxuICAgICAgfSBlbHNlIGlmIChldmVudC5kYXRhLm5hbWUgPT09ICdyZXNpemVkJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzaXplZD8uKGV2ZW50LmRhdGEuc2l6ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGUgPT4ge1xuICAgICAgdGhpcy5pbml0UHJvbWlzZT8udGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKHsgZHJhd1NpemU6IHRoaXMuZ2V0Q2FudmFzU2l6ZSgpIH0pXG4gICAgICB9KVxuICAgIH0pXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuY2FudmFzKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYW52YXNTaXplKCk6IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgY2FudmFzRWxlbWVudCA9IHRoaXMuY2FudmFzO1xuICAgIGNvbnN0IGRldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICBjb25zdCBjbGllbnRSZWN0ID0gY2FudmFzRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkcmF3U2l6ZSA9IHtcbiAgICAgIHdpZHRoOiBjbGllbnRSZWN0LndpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyxcbiAgICAgIGhlaWdodDogY2xpZW50UmVjdC5oZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvLFxuICAgIH07XG4gICAgcmV0dXJuIGRyYXdTaXplO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLndvcmtlci50ZXJtaW5hdGUoKVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgdGhpcy5yZXNvbHZlSW5pdCA9ICgpID0+IHsgfVxuICB9XG59XG5cbmNvbnN0IGNhbnZhc1N0eWxlID0ge1xuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufSBhcyBjb25zdFxuXG5mdW5jdGlvbiBMb3R0aWVQbGF5ZXIocHJvcHM6IExvdHRpZVBsYXllclByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGU8TG90dGllUGxheWVyU3RhdGUgfCBudWxsPihudWxsKVxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG5cbiAgLy8gTWFrZSBzdXJlIHRoZSBzdGF0ZSBoYXMgYW4gdXAgdG8gZGF0ZSBzZXQgb2YgcHJvcHMgZm9yIG5vdGlmeWluZyBsaXN0ZW5lcnMgdmlhIHRoZSBvblhYWCBtZXRob2RzLlxuICBpZiAoc3RhdGUpIHtcbiAgICBzdGF0ZS5wcm9wcyA9IHByb3BzXG4gICAgc3RhdGUuYW5pbWF0aW9uVXJsID0gcHJvcHMuYW5pbWF0aW9uVXJsXG4gICAgc3RhdGUucGxheSA9IHByb3BzLnBsYXlcbiAgfVxuXG4gIC8vIEhhbmRsZSBjcmVhdGluZyB0aGUgd29ya2VyIGFuZCBjbGVhbmluZyB1cCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlZi5jdXJyZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgZWxlbWVudCBub3QgZm91bmRcIilcblxuICAgIGNvbnN0IHN0YXRlID0gbmV3IExvdHRpZVBsYXllclN0YXRlKHJlZi5jdXJyZW50LCBwcm9wcy5wbGF5KVxuICAgIHNldFN0YXRlKHN0YXRlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHN0YXRlLmRlc3Ryb3koKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIDxjYW52YXMgcmVmPXtyZWZ9IHN0eWxlPXtjYW52YXNTdHlsZX0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG90dGllUGxheWVyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyB5b3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZSdcbmltcG9ydCBMb3R0aWVQbGF5ZXIgZnJvbSAnJHdlYi1jb21tb24vbG90dGllUGxheWVyJ1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnJHdlYi1jb21tb24vbG9jYWxlJ1xuaW1wb3J0IERhdGFDb250ZXh0IGZyb20gJy4uLy4uL3N0YXRlL2NvbnRleHQnXG5pbXBvcnQgeyB1c2VWaWV3VHlwZVRyYW5zaXRpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9ob29rcydcblxuY29uc3QgTE9UVElFX0NIRUNLX01BUktfSUNPTiA9ICdkYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJJam9pTlM0M0xqUWlMQ0ptY2lJNk1qY3NJbWx3SWpvek5TNHdNREF3TURZek1qZ3pPVGs0TENKdmNDSTZPVElzSW5jaU9qSTBNQ3dpYUNJNk1qUXdMQ0p1YlNJNklrTnZiWEFnTWlJc0ltUmtaQ0k2TUN3aVlYTnpaWFJ6SWpwYlhTd2liR0Y1WlhKeklqcGJleUprWkdRaU9qQXNJbWx1WkNJNk1Td2lkSGtpT2pRc0ltNXRJam9pVTJoaGNHVWdUR0Y1WlhJZ01pSXNJbk55SWpveExDSnJjeUk2ZXlKdklqcDdJbUVpT2pBc0ltc2lPakV3TUN3aWFYZ2lPakV4ZlN3aWNpSTZleUpoSWpvd0xDSnJJam93TENKcGVDSTZNVEI5TENKd0lqcDdJbUVpT2pBc0ltc2lPbHN4TWpBc01USXdMREJkTENKcGVDSTZNaXdpYkNJNk1uMHNJbUVpT25zaVlTSTZNQ3dpYXlJNld6QXNNQ3d3WFN3aWFYZ2lPakVzSW13aU9qSjlMQ0p6SWpwN0ltRWlPakFzSW1zaU9sc3lNaTR5TWpJeU1qSXlNakl5TWpJeU1UZ3NNakl1TWpJeU1qSXlNakl5TWpJeU1qRTRMREV3TUYwc0ltbDRJam8yTENKc0lqb3lmWDBzSW1Gdklqb3dMQ0p6YUdGd1pYTWlPbHQ3SW5SNUlqb2laM0lpTENKcGRDSTZXM3NpYVc1a0lqb3dMQ0owZVNJNkluTm9JaXdpYVhnaU9qRXNJbXR6SWpwN0ltRWlPakFzSW1zaU9uc2lhU0k2VzFzd0xEQmRMRnN3TERCZExGc3dMREJkWFN3aWJ5STZXMXN3TERCZExGc3dMREJkTEZzd0xEQmRYU3dpZGlJNlcxc3RNamt3TEMwNE4xMHNXeTAwT1N3eE5UTmRMRnN4T1Rjc0xUazBYVjBzSW1NaU9tWmhiSE5sZlN3aWFYZ2lPako5TENKdWJTSTZJbEJoZEdnZ01TSXNJbTF1SWpvaVFVUkNSU0JXWldOMGIzSWdVMmhoY0dVZ0xTQkhjbTkxY0NJc0ltaGtJanBtWVd4elpYMHNleUowZVNJNkluUnRJaXdpY3lJNmV5SmhJam94TENKcklqcGJleUpwSWpwN0luZ2lPbHN3TGpZMk4xMHNJbmtpT2xzeFhYMHNJbThpT25zaWVDSTZXekF1TVRZM1hTd2llU0k2V3pBdU1UWTNYWDBzSW5RaU9qVXpMalkyTml3aWN5STZXekJkZlN4N0luUWlPalU1TGpNek16YzJNRGN5T0RJeE9UZ3NJbk1pT2xzek1WMTlYU3dpYVhnaU9qRjlMQ0psSWpwN0ltRWlPakVzSW1zaU9sdDdJbWtpT25zaWVDSTZXekF1TmpZM1hTd2llU0k2V3pGZGZTd2lieUk2ZXlKNElqcGJNQzR4TmpkZExDSjVJanBiTUM0eE5qZGRmU3dpZENJNk5UTXVOalkyTENKeklqcGJNRjE5TEhzaWRDSTZOakF1TURBd01ERXdPRFE0TmpnMU5Dd2ljeUk2V3pFd01GMTlYU3dpYVhnaU9qSjlMQ0p2SWpwN0ltRWlPakFzSW1zaU9qQXNJbWw0SWpvemZTd2liU0k2TVN3aWFYZ2lPaklzSW01dElqb2lWSEpwYlNCUVlYUm9jeUF4SWl3aWJXNGlPaUpCUkVKRklGWmxZM1J2Y2lCR2FXeDBaWElnTFNCVWNtbHRJaXdpYUdRaU9tWmhiSE5sZlN4N0luUjVJam9pYzNRaUxDSmpJanA3SW1FaU9qQXNJbXNpT2xzeExERXNNU3d4WFN3aWFYZ2lPak45TENKdklqcDdJbUVpT2pBc0ltc2lPakV3TUN3aWFYZ2lPalI5TENKM0lqcDdJbUVpT2pBc0ltc2lPalkxTENKcGVDSTZOWDBzSW14aklqb3lMQ0pzYWlJNk1pd2lZbTBpT2pBc0ltNXRJam9pVTNSeWIydGxJREVpTENKdGJpSTZJa0ZFUWtVZ1ZtVmpkRzl5SUVkeVlYQm9hV01nTFNCVGRISnZhMlVpTENKb1pDSTZabUZzYzJWOUxIc2lkSGtpT2lKMGNpSXNJbkFpT25zaVlTSTZNQ3dpYXlJNld6QXNNRjBzSW1sNElqb3lmU3dpWVNJNmV5SmhJam93TENKcklqcGJNQ3d3WFN3aWFYZ2lPakY5TENKeklqcDdJbUVpT2pBc0ltc2lPbHN4TURBc01UQXdYU3dpYVhnaU9qTjlMQ0p5SWpwN0ltRWlPakFzSW1zaU9qQXNJbWw0SWpvMmZTd2lieUk2ZXlKaElqb3dMQ0pySWpveE1EQXNJbWw0SWpvM2ZTd2ljMnNpT25zaVlTSTZNQ3dpYXlJNk1Dd2lhWGdpT2pSOUxDSnpZU0k2ZXlKaElqb3dMQ0pySWpvd0xDSnBlQ0k2Tlgwc0ltNXRJam9pVkhKaGJuTm1iM0p0SW4xZExDSnViU0k2SWxOb1lYQmxJREVpTENKdWNDSTZOQ3dpWTJsNElqb3lMQ0ppYlNJNk1Dd2lhWGdpT2pFc0ltMXVJam9pUVVSQ1JTQldaV04wYjNJZ1IzSnZkWEFpTENKb1pDSTZabUZzYzJWOVhTd2lhWEFpT2pBc0ltOXdJam95TnpBdU1EQXdNRFE0T0RFNU1EZzBMQ0p6ZENJNk1Dd2lZbTBpT2pCOUxIc2laR1JrSWpvd0xDSnBibVFpT2pJc0luUjVJam8wTENKdWJTSTZJbE5vWVhCbElFeGhlV1Z5SURFaUxDSnpjaUk2TVN3aWEzTWlPbnNpYnlJNmV5SmhJam93TENKcklqb3hNREFzSW1sNElqb3hNWDBzSW5JaU9uc2lZU0k2TUN3aWF5STZNQ3dpYVhnaU9qRXdmU3dpY0NJNmV5SmhJam93TENKcklqcGJNVEl3TERFeU1Dd3dYU3dpYVhnaU9qSXNJbXdpT2pKOUxDSmhJanA3SW1FaU9qQXNJbXNpT2xzd0xEQXNNRjBzSW1sNElqb3hMQ0pzSWpveWZTd2ljeUk2ZXlKaElqb3dMQ0pySWpwYk1qSXVNakl5TWpJeU1qSXlNakl5TWpFNExESXlMakl5TWpJeU1qSXlNakl5TWpJeE9Dd3hNREJkTENKcGVDSTZOaXdpYkNJNk1uMTlMQ0poYnlJNk1Dd2ljMmhoY0dWeklqcGJleUowZVNJNkltZHlJaXdpYVhRaU9sdDdJbVFpT2pFc0luUjVJam9pWld3aUxDSnpJanA3SW1FaU9qQXNJbXNpT2xzM01UQXVPREV5TERjeE1DNDRNVEpkTENKcGVDSTZNbjBzSW5BaU9uc2lZU0k2TUN3aWF5STZXekFzTUYwc0ltbDRJam96ZlN3aWJtMGlPaUpGYkd4cGNITmxJRkJoZEdnZ01TSXNJbTF1SWpvaVFVUkNSU0JXWldOMGIzSWdVMmhoY0dVZ0xTQkZiR3hwY0hObElpd2lhR1FpT21aaGJITmxmU3g3SW5SNUlqb2ljM1FpTENKaklqcDdJbUVpT2pBc0ltc2lPbHN4TERFc01Td3hYU3dpYVhnaU9qTjlMQ0p2SWpwN0ltRWlPakFzSW1zaU9qRXdNQ3dpYVhnaU9qUjlMQ0ozSWpwN0ltRWlPakFzSW1zaU9qWTFMQ0pwZUNJNk5YMHNJbXhqSWpveUxDSnNhaUk2TWl3aVltMGlPakFzSW01dElqb2lVM1J5YjJ0bElERWlMQ0p0YmlJNklrRkVRa1VnVm1WamRHOXlJRWR5WVhCb2FXTWdMU0JUZEhKdmEyVWlMQ0pvWkNJNlptRnNjMlY5TEhzaWRIa2lPaUowY2lJc0luQWlPbnNpWVNJNk1Dd2lheUk2V3pJMkxqQXdPQ3d5T1M0NU0xMHNJbWw0SWpveWZTd2lZU0k2ZXlKaElqb3dMQ0pySWpwYk1Dd3dYU3dpYVhnaU9qRjlMQ0p6SWpwN0ltRWlPakFzSW1zaU9sc3hNREFzTVRBd1hTd2lhWGdpT2pOOUxDSnlJanA3SW1FaU9qQXNJbXNpT2pBc0ltbDRJam8yZlN3aWJ5STZleUpoSWpvd0xDSnJJam94TURBc0ltbDRJam8zZlN3aWMyc2lPbnNpWVNJNk1Dd2lheUk2TUN3aWFYZ2lPalI5TENKellTSTZleUpoSWpvd0xDSnJJam93TENKcGVDSTZOWDBzSW01dElqb2lWSEpoYm5ObWIzSnRJbjFkTENKdWJTSTZJa1ZzYkdsd2MyVWdNU0lzSW01d0lqb3pMQ0pqYVhnaU9qSXNJbUp0SWpvd0xDSnBlQ0k2TVN3aWJXNGlPaUpCUkVKRklGWmxZM1J2Y2lCSGNtOTFjQ0lzSW1oa0lqcG1ZV3h6Wlgwc2V5SjBlU0k2SW5SdElpd2ljeUk2ZXlKaElqb3hMQ0pySWpwYmV5SnBJanA3SW5naU9sc3dMamd6TTEwc0lua2lPbHN3TGpnek0xMTlMQ0p2SWpwN0luZ2lPbHN3TGpNek0xMHNJbmtpT2xzd1hYMHNJblFpT2pNNUxDSnpJanBiTVRBd1hYMHNleUowSWpvMU15NDJOall5TlRrM01ETTBOekV4TENKeklqcGJNRjE5WFN3aWFYZ2lPakY5TENKbElqcDdJbUVpT2pBc0ltc2lPakV3TUN3aWFYZ2lPako5TENKdklqcDdJbUVpT2pBc0ltc2lPaTAzTnl3aWFYZ2lPak45TENKdElqb3hMQ0pwZUNJNk1pd2libTBpT2lKVWNtbHRJRkJoZEdoeklERWlMQ0p0YmlJNklrRkVRa1VnVm1WamRHOXlJRVpwYkhSbGNpQXRJRlJ5YVcwaUxDSm9aQ0k2Wm1Gc2MyVjlYU3dpYVhBaU9qQXNJbTl3SWpveU56QXVNREF3TURRNE9ERTVNRGcwTENKemRDSTZNQ3dpWW0waU9qQjlYU3dpYldGeWEyVnljeUk2VzExOSdcblxuZnVuY3Rpb24gU2V0dXBDb21wbGV0ZSAoKSB7XG4gIGNvbnN0IHsgdmlld1R5cGUsIHNldFZpZXdUeXBlIH0gPSBSZWFjdC51c2VDb250ZXh0KERhdGFDb250ZXh0KVxuICBjb25zdCB7IGZvcndhcmQgfSA9IHVzZVZpZXdUeXBlVHJhbnNpdGlvbih2aWV3VHlwZSlcblxuICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9ICgpID0+IHNldFZpZXdUeXBlKGZvcndhcmQpXG5cbiAgcmV0dXJuIChcbiAgICA8Uy5NYWluQm94PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24tYm94Jz5cbiAgICAgICAgPExvdHRpZVBsYXllclxuICAgICAgICAgIGFuaW1hdGlvblVybD17TE9UVElFX0NIRUNLX01BUktfSUNPTn1cbiAgICAgICAgICBwbGF5XG4gICAgICAgICAgbG9vcD17ZmFsc2V9XG4gICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlQ29tcGxldGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy10aXRsZVwiPntnZXRMb2NhbGUoJ2JyYXZlV2VsY29tZVNldHVwQ29tcGxldGVMYWJlbCcpfTwvZGl2PlxuICAgIDwvUy5NYWluQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHVwQ29tcGxldGVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==