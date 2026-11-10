/******/ var __webpack_modules__ = ({

/***/ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm"
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm ***!
  \*****************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ort-wasm-simd-threaded.b7ac9f9144b51de0eeaf.wasm";

/***/ },

/***/ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs ***!
  \*************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ort.wasm.bundle.min.26db595e6094d636d0f1.js";

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Check if module exists (development only)
/******/ 	if (__webpack_modules__[moduleId] === undefined) {
/******/ 		var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 		e.code = 'MODULE_NOT_FOUND';
/******/ 		throw e;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "/";
/******/ })();
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = new URL("./", import.meta.url);
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"speech_worker": 0
/******/ 	};
/******/ 	
/******/ 	// no install chunk
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no external install chunk
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ })();
/******/ 
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************************************************!*\
  !*** ./components/local_ai/resources/speech_worker/speech_worker.ts + 16 modules ***!
  \***********************************************************************************/

// NAMESPACE OBJECT: ./node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs
var ort_wasm_bundle_min_namespaceObject = {};
__webpack_require__.r(ort_wasm_bundle_min_namespaceObject);
__webpack_require__.d(ort_wasm_bundle_min_namespaceObject, {
  InferenceSession: () => (ts),
  TRACE: () => (xr),
  TRACE_EVENT_BEGIN: () => (De),
  TRACE_EVENT_END: () => (Ue),
  TRACE_FUNC_BEGIN: () => (_e),
  TRACE_FUNC_END: () => (Pe),
  Tensor: () => (de),
  "default": () => (au),
  env: () => (Y),
  registerBackend: () => (qe)
});

;// ../out/code_search_mac_Component_x64/gen/mojo/public/js/bindings.js
const mojo={internal:{interfaceSupport:{}},interfaceControl:{},pipeControl:{}};mojo.internal.kArrayHeaderSize=8,mojo.internal.kStructHeaderSize=8,mojo.internal.kStructHeaderSizeOffset=0,mojo.internal.kStructHeaderVersionOffset=4,mojo.internal.kUnionHeaderSize=8,mojo.internal.kUnionDataSize=16,mojo.internal.kMessageV0HeaderSize=24,mojo.internal.kMessageV1HeaderSize=32,mojo.internal.kMessageV2HeaderSize=48,mojo.internal.kMapDataSize=24,mojo.internal.kEncodedInvalidHandleValue=4294967295,mojo.internal.kMessageFlagExpectsResponse=1,mojo.internal.kMessageFlagIsResponse=2,mojo.internal.kInterfaceNamespaceBit=2147483648,mojo.internal.kHostLittleEndian=!!new Uint8Array(new Uint16Array([1]).buffer)[0],mojo.internal.DataViewWrapper=class{constructor(e,n=0){if(this.dataView_,this.byteOffset,e instanceof mojo.internal.DataViewWrapper)this.dataView_=e.dataView_,this.byteOffset=e.byteOffset+n;else if(e instanceof DataView)this.dataView_=0===e.byteOffset&&e.byteLength===e.buffer.byteLength?e:new DataView(e.buffer),this.byteOffset=e.byteOffset+n;else{if(!(e instanceof ArrayBuffer))throw new Error("DataViewWrapper constructor requires a DataViewWrapper, DataView, or ArrayBuffer instance");this.dataView_=new DataView(e),this.byteOffset=n}}get buffer(){return this.dataView_.buffer}getUint8(e){return this.dataView_.getUint8(this.byteOffset+e)}getInt8(e){return this.dataView_.getInt8(this.byteOffset+e)}getUint16(e,n){return this.dataView_.getUint16(this.byteOffset+e,n)}getInt16(e,n){return this.dataView_.getInt16(this.byteOffset+e,n)}getUint32(e,n){return this.dataView_.getUint32(this.byteOffset+e,n)}getInt32(e,n){return this.dataView_.getInt32(this.byteOffset+e,n)}getFloat32(e,n){return this.dataView_.getFloat32(this.byteOffset+e,n)}getFloat64(e,n){return this.dataView_.getFloat64(this.byteOffset+e,n)}setUint8(e,n){this.dataView_.setUint8(this.byteOffset+e,n)}setInt8(e,n){this.dataView_.setInt8(this.byteOffset+e,n)}setUint16(e,n,t){this.dataView_.setUint16(this.byteOffset+e,n,t)}setInt16(e,n,t){this.dataView_.setInt16(this.byteOffset+e,n,t)}setUint32(e,n,t){this.dataView_.setUint32(this.byteOffset+e,n,t)}setInt32(e,n,t){this.dataView_.setInt32(this.byteOffset+e,n,t)}setFloat32(e,n,t){this.dataView_.setFloat32(this.byteOffset+e,n,t)}setFloat64(e,n,t){this.dataView_.setFloat64(this.byteOffset+e,n,t)}},mojo.internal.isNullOrUndefined=function(e){return null==e},mojo.internal.isNullableValueKindField=function(e){return void 0!==e.nullableValueKindProperties},mojo.internal.align=function(e,n){return e+(n-e%n)%n},mojo.internal.setInt64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setInt32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setInt32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian))},mojo.internal.setUint64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setUint32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian))},mojo.internal.getInt64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getInt32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getInt32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.getUint64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getUint32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getUint32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.MessageDimensions,mojo.internal.getMojoFieldValue=function(e,n){if(n.fieldGetter)return n.fieldGetter(e);if(e&&mojo.internal.isNullableValueKindField(n)){const t=n.nullableValueKindProperties,o=!mojo.internal.isNullOrUndefined(e[t.originalFieldName]);return t.isPrimary?o:o?e[t.originalFieldName]:n.defaultValue}return e[n.name]},mojo.internal.computeStructDimensions=function(e,n){let t=e.packedSize,o=0;for(const i of e.fields){let e=mojo.internal.getMojoFieldValue(n,i);if(mojo.internal.isNullOrUndefined(e)&&(e=i.defaultValue),null!==e)if(i.type.$.computeDimensions){const n=i.type.$.computeDimensions(e,i.nullable);t+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(o+=n.numInterfaceIds)}else i.type.$.hasInterfaceId&&o++}return{size:t,numInterfaceIds:o}},mojo.internal.computeUnionDimensions=function(e,n,t){let o=n?mojo.internal.kUnionDataSize:0,i=0;const r=Object.keys(t);if(1!==r.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const s=r[0],a=e.fields[s],l=t[s];if(!mojo.internal.isNullOrUndefined(l))if(a.type.$.computeDimensions){const e=!!a.type.$.unionSpec||a.nullable,n=a.type.$.computeDimensions(l,e);o+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(i+=n.numInterfaceIds)}else a.type.$.hasInterfaceId&&i++;return{size:o,numInterfaceIds:i}},mojo.internal.computeInlineArraySize=function(e,n){return e.elementType===mojo.internal.Bool?mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+(n.length+7>>3):mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+n.length*e.elementType.$.arrayElementSize(!!e.elementNullable)},mojo.internal.computeHasValueBitfieldSize=function(e,n){if(!(!!e.elementNullable&&!!e.elementType.$.isValueType))return 0;const t=e.elementType.$.arrayElementSize(!0),o=8*t;return((n+o-1)/o|0)*t},mojo.internal.computeTotalArraySize=function(e,n){const t=mojo.internal.computeInlineArraySize(e,n);if(!e.elementType.$.computeDimensions)return t;let o=t;for(let t of n)mojo.internal.isNullOrUndefined(t)||(o+=mojo.internal.align(e.elementType.$.computeDimensions(t,!!e.elementNullable).size,8));return o},mojo.internal.Message=class{constructor(e,n,t,o,i,r,s){const a=mojo.internal.computeStructDimensions(r,s);let l,c;a.numInterfaceIds>0?(l=mojo.internal.kMessageV2HeaderSize,c=2):t&(mojo.internal.kMessageFlagExpectsResponse|mojo.internal.kMessageFlagIsResponse)?(l=mojo.internal.kMessageV1HeaderSize,c=1):(l=mojo.internal.kMessageV0HeaderSize,c=0);const d=l+a.size,u=a.numInterfaceIds>0?mojo.internal.kArrayHeaderSize+4*a.numInterfaceIds:0,p=d+mojo.internal.align(u,8);this.buffer=new ArrayBuffer(p),this.handles=[];const m=new DataView(this.buffer);m.setUint32(0,l,mojo.internal.kHostLittleEndian),m.setUint32(4,c,mojo.internal.kHostLittleEndian),m.setUint32(8,n,mojo.internal.kHostLittleEndian),m.setUint32(12,o,mojo.internal.kHostLittleEndian),m.setUint32(16,t,mojo.internal.kHostLittleEndian),m.setUint32(20,0),c>=1&&(mojo.internal.setUint64(m,24,i),c>=2&&(mojo.internal.setUint64(m,32,BigInt(16)),mojo.internal.setUint64(m,40,BigInt(d-40)),m.setUint32(d,u,mojo.internal.kHostLittleEndian),m.setUint32(d+4,a.numInterfaceIds||0,mojo.internal.kHostLittleEndian))),this.nextInterfaceIdIndex_=0,this.interfaceIds_=null,a.numInterfaceIds&&(this.interfaceIds_=new Uint32Array(this.buffer,d+mojo.internal.kArrayHeaderSize,a.numInterfaceIds)),this.nextAllocationOffset_=l;const f=this.allocate(r.packedSize);new mojo.internal.Encoder(this,f,{endpoint:e}).encodeStructInline(r,s)}allocate(e){const n=mojo.internal.align(e,8),t=new DataView(this.buffer,this.nextAllocationOffset_,n);return this.nextAllocationOffset_+=n,t}},mojo.internal.MessageContext,mojo.internal.Encoder=class{constructor(e,n,t=null){this.context_=t,this.message_=e,this.data_=n}encodeBool(e,n,t){const o=this.data_.getUint8(e);t?this.data_.setUint8(e,o|1<<n):this.data_.setUint8(e,o&~(1<<n))}encodeInt8(e,n){this.data_.setInt8(e,n)}encodeUint8(e,n){this.data_.setUint8(e,n)}encodeInt16(e,n){this.data_.setInt16(e,n,mojo.internal.kHostLittleEndian)}encodeUint16(e,n){this.data_.setUint16(e,n,mojo.internal.kHostLittleEndian)}encodeInt32(e,n){this.data_.setInt32(e,n,mojo.internal.kHostLittleEndian)}encodeUint32(e,n){this.data_.setUint32(e,n,mojo.internal.kHostLittleEndian)}encodeInt64(e,n){mojo.internal.setInt64(this.data_,e,n)}encodeUint64(e,n){mojo.internal.setUint64(this.data_,e,n)}encodeFloat(e,n){this.data_.setFloat32(e,n,mojo.internal.kHostLittleEndian)}encodeDouble(e,n){this.data_.setFloat64(e,n,mojo.internal.kHostLittleEndian)}encodeHandle(e,n){this.encodeUint32(e,this.message_.handles.length),this.message_.handles.push(n)}encodeAssociatedEndpoint(e,n){console.assert(n.isPendingAssociation,"expected unbound associated endpoint");const t=this.context_.endpoint.associatePeerOfOutgoingEndpoint(n),o=this.message_.nextInterfaceIdIndex_++;this.encodeUint32(e,o),this.message_.interfaceIds_[o]=t}encodeString(e,n){if("string"!=typeof n)throw new Error("Unxpected non-string value for string field.");this.encodeArray({elementType:mojo.internal.Uint8},e,mojo.internal.Encoder.stringToUtf8Bytes(n))}encodeOffset(e,n){this.encodeUint64(e,n-this.data_.byteOffset-e)}encodeArray(e,n,t){const o=mojo.internal.computeInlineArraySize(e,t),i=this.message_.allocate(o),r=new mojo.internal.Encoder(this.message_,i,this.context_);this.encodeOffset(n,i.byteOffset),r.encodeUint32(0,o),r.encodeUint32(4,t.length),this.maybeEncodeHasValueBitfield(e,r,8,t);let s=8+mojo.internal.computeHasValueBitfieldSize(e,t.length);if(e.elementType===mojo.internal.Bool){let e=0;for(const n of t)r.encodeBool(s,e,n),e++,8==e&&(e=0,s++)}else for(const n of t){if(null===n){if(!e.elementNullable)throw new Error("Trying to send a null element in an array of non-nullable elements");e.elementType.$.encodeNull(r,s)}else e.elementType.$.encode(n,r,s,0,!!e.elementNullable);s+=e.elementType.$.arrayElementSize(!!e.elementNullable)}}maybeEncodeHasValueBitfield(e,n,t,o){if(!e.elementNullable||!e.elementType.$.isValueType)return;let i=0,r=t;for(const e of o)null==e?n.encodeBool(r,i,!1):n.encodeBool(r,i,!0),i++,8==i&&(i=0,r++)}encodeMap(e,n,t){let o,i;"Map"==t.constructor.name?(o=Array.from(t.keys()),i=Array.from(t.values())):(o=Object.keys(t),i=o.map((e=>t[e])));const r=this.message_.allocate(mojo.internal.kMapDataSize),s=new mojo.internal.Encoder(this.message_,r,this.context_);this.encodeOffset(n,r.byteOffset),s.encodeUint32(0,mojo.internal.kMapDataSize),s.encodeUint32(4,0),s.encodeArray({elementType:e.keyType},8,o),s.encodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16,i)}encodeStruct(e,n,t){const o=this.message_.allocate(e.packedSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeStructInline(e,t)}encodeStructInline(e,n){const t=e.versions;this.encodeUint32(0,e.packedSize),this.encodeUint32(4,t[t.length-1].version);for(const t of e.fields){const o=mojo.internal.kStructHeaderSize+t.packedOffset,i=e=>{t.type.$.encode(e,this,o,t.packedBitOffset,t.nullable)},r=mojo.internal.isNullOrUndefined(n)?void 0:mojo.internal.getMojoFieldValue(n,t);if(mojo.internal.isNullOrUndefined(n)||mojo.internal.isNullOrUndefined(r))if(null===t.defaultValue){if(!t.nullable)throw new Error(e.name+' missing value for non-nullable field "'+t.name+`", got: "${r}"...`);t.type.$.encodeNull(this,o)}else i(t.defaultValue);else i(r)}}encodeUnionAsPointer(e,n,t){const o=this.message_.allocate(mojo.internal.kUnionDataSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeUnion(e,0,t)}encodeUnion(e,n,t){const o=Object.keys(t);if(1!==o.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const i=o[0],r=e.fields[i];this.encodeUint32(n,mojo.internal.kUnionDataSize),this.encodeUint32(n+4,r.ordinal);const s=n+mojo.internal.kUnionHeaderSize;void 0===r.type.$.unionSpec?r.type.$.encode(t[i],this,s,0,r.nullable):this.encodeUnionAsPointer(r.type.$.unionSpec,s,t[i])}static stringToUtf8Bytes(e){return mojo.internal.Encoder.textEncoder||(mojo.internal.Encoder.textEncoder=new TextEncoder("utf-8")),mojo.internal.Encoder.textEncoder.encode(e)}},mojo.internal.Encoder.textEncoder=null,mojo.internal.Decoder=class{constructor(e,n,t=null){this.context_=t,this.data_=e instanceof mojo.internal.DataViewWrapper?e:new mojo.internal.DataViewWrapper(e),this.handles_=n}decodeBool(e,n){return!!(this.data_.getUint8(e)&1<<n)}decodeInt8(e){return this.data_.getInt8(e)}decodeUint8(e){return this.data_.getUint8(e)}decodeInt16(e){return this.data_.getInt16(e,mojo.internal.kHostLittleEndian)}decodeUint16(e){return this.data_.getUint16(e,mojo.internal.kHostLittleEndian)}decodeInt32(e){return this.data_.getInt32(e,mojo.internal.kHostLittleEndian)}decodeUint32(e){return this.data_.getUint32(e,mojo.internal.kHostLittleEndian)}decodeInt64(e){return mojo.internal.getInt64(this.data_,e)}decodeUint64(e){return mojo.internal.getUint64(this.data_,e)}decodeFloat(e){return this.data_.getFloat32(e,mojo.internal.kHostLittleEndian)}decodeDouble(e){return this.data_.getFloat64(e,mojo.internal.kHostLittleEndian)}decodeHandle(e){const n=this.data_.getUint32(e,mojo.internal.kHostLittleEndian);if(4294967295==n)return null;if(n>=this.handles_.length)throw new Error("Decoded invalid handle index");return this.handles_[n]}decodeString(e){const n=this.decodeOffset(e);if(!n)return null;mojo.internal.Decoder.textDecoder||(mojo.internal.Decoder.textDecoder=new TextDecoder("utf-8"));const t=this.decodeUint32(n-this.data_.byteOffset+4);if(0===t)return"";const o=n+8;return mojo.internal.Decoder.textDecoder.decode(new Uint8Array(this.data_.buffer,o,t))}decodeOffset(e){const n=this.decodeUint64(e);if(0==n)return 0;if(n>BigInt(Number.MAX_SAFE_INTEGER))throw new Error("Mesage offset too large");return this.data_.byteOffset+e+Number(n)}decodeArray(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(4);if(!i)return[];const r=!!e.elementNullable&&e.elementType.$.isValueType,s=r?new Array(i):null;if(r){let e=8,n=0;for(let t=0;t<i;++t)s[t]=o.decodeBool(e,n),n++,8===n&&(n=0,e++)}let a=8+mojo.internal.computeHasValueBitfieldSize(e,i);const l=new Array(i);if(e.elementType===mojo.internal.Bool)for(let e=0;e<i;++e)r&&!s[e]?l[e]=null:l[e]=o.decodeBool(a+(e>>3),e%8);else for(let n=0;n<i;++n){if(r&&!s[n])l[n]=null;else{const t=e.elementType.$.decode(o,a,0,!!e.elementNullable);if(null===t&&!e.elementNullable)throw new Error("Received unexpected array element");l[n]=t}a+=e.elementType.$.arrayElementSize(!!e.elementNullable)}return l}decodeMap(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(0),r=o.decodeUint32(4);if(i!=mojo.internal.kMapDataSize||0!=r)throw new Error("Received invalid map data");const s=o.decodeArray({elementType:e.keyType},8),a=o.decodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16);if(s.length!=a.length)throw new Error("Received invalid map data");if(!e.keyType.$.isValidObjectKeyType){const e=new Map;for(let n=0;n<s.length;++n)e.set(s[n],a[n]);return e}const l={};for(let e=0;e<s.length;++e)l[s[e]]=a[e];return l}decodeStruct(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeStructInline(e)}isStructHeaderValid(e,n,t){const o=e.versions;for(let e=o.length-1;e>=0;--e){const i=o[e];if(t>i.version)return n>=i.packedSize;if(t==i.version)return n==i.packedSize}throw new Error(`Impossible version ${t} for struct ${e.name}`)}wrapStructInDataView(e,n,t){const o=this.decodeOffset(n);if(!o)return null;const i=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,o-this.data_.byteOffset),this.handles_,this.context_),r=i.decodeUint32(mojo.internal.kStructHeaderSizeOffset),s=i.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!i.isStructHeaderValid(e,r,s))throw new Error(`Received ${e.name} of invalid size (${r}) and/or version (${s})`);return new t(i,s,e.fields)}decodeStructInline(e){const n=this.decodeUint32(mojo.internal.kStructHeaderSizeOffset),t=this.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!this.isStructHeaderValid(e,n,t))throw new Error(`Received ${e.name} of invalid size (${n}) and/or version (${t})`);const o={};for(let n=0;n<e.fields.length;++n){const i=e.fields[n];if(mojo.internal.isNullableValueKindField(i)){const n=i.nullableValueKindProperties;if(!n.isPrimary)continue;{const r=i;o[n.originalFieldName]=this.decodeStructNullableValueField(r,e.fields,t)}}else o[i.name]=this.decodeStructField(i,t)}return o}decodeStructField(e,n){if(e.minVersion>n)return e.defaultValue;const t=mojo.internal.kStructHeaderSize+e.packedOffset,o=e.type.$.decode(this,t,e.packedBitOffset,!!e.nullable);if(null===o&&!e.nullable)throw new Error(`Received ${e.name} with invalid null field "${e.name}"`);return o}decodeStructNullableValueField(e,n,t){if(e.minVersion>t)return null;if(!this.decodeStructField(e,t))return null;const o=e.nullableValueKindProperties,i=n.find((e=>e.name===o.linkedValueFieldName));if(!i)throw new Error("could not find the expected value field spec: "+o.linkedValueFieldName);return this.decodeStructField(i,t)}decodeUnionFromPointer(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeUnion(e,0)}decodeUnion(e,n){if(0===this.decodeUint32(n))return null;const t=this.decodeUint32(n+4);for(const o in e.fields){const i=e.fields[o];if(i.ordinal===t){const t=(()=>{const e=n+mojo.internal.kUnionHeaderSize;return void 0!==i.type.$.unionSpec?this.decodeUnionFromPointer(i.type.$.unionSpec,e):i.type.$.decode(this,e,0,i.nullable)})();if(null===t&&!i.nullable)throw new Error(`Received ${e.name} with invalid null field: ${i.name}`);const r={};return r[o]=t,r}}}decodeInterfaceProxy(e,n){const t=this.decodeHandle(n);return t?new e(t):null}decodeInterfaceRequest(e,n){const t=this.decodeHandle(n);return t?new e(mojo.internal.interfaceSupport.createEndpoint(t)):null}decodeAssociatedEndpoint(e){if(!this.context_||!this.context_.endpoint)throw new Error("cannot deserialize associated endpoint without context");const n=this.context_.endpoint,t=new DataView(this.data_.buffer),o=Number(mojo.internal.getUint64(t,40)),i=t.getUint32(o+44,mojo.internal.kHostLittleEndian),r=new Uint32Array(t.buffer,o+mojo.internal.kArrayHeaderSize+40,i)[this.decodeUint32(e)],s=new mojo.internal.interfaceSupport.Endpoint(n.router,r);return n.router.addEndpoint(s,r),s}},mojo.internal.Decoder.textDecoder=null,mojo.internal.MessageHeader,mojo.internal.deserializeMessageHeader=function(e){const n=e.getUint32(0,mojo.internal.kHostLittleEndian),t=e.getUint32(4,mojo.internal.kHostLittleEndian);if(0==t&&n!=mojo.internal.kMessageV0HeaderSize||1==t&&n!=mojo.internal.kMessageV1HeaderSize||t>=2&&n<mojo.internal.kMessageV2HeaderSize)throw new Error("Received invalid message header");return{headerSize:n,headerVersion:t,interfaceId:e.getUint32(8,mojo.internal.kHostLittleEndian),ordinal:e.getUint32(12,mojo.internal.kHostLittleEndian),flags:e.getUint32(16,mojo.internal.kHostLittleEndian),requestId:t<1?0:e.getUint32(24,mojo.internal.kHostLittleEndian)}},mojo.internal.MojomTypeInfo,mojo.internal.MojomType,mojo.internal.ArraySpec,mojo.internal.MapSpec,mojo.internal.NullableValueKindProperties=class{constructor(){this.isPrimary,this.linkedValueFieldName,this.originalFieldName}},mojo.internal.StructFieldSpec,mojo.internal.StructVersionInfo,mojo.internal.StructSpec,mojo.internal.UnionFieldSpec,mojo.internal.UnionSpec,mojo.internal.Bool={$:{encode:function(e,n,t,o,i){n.encodeBool(t,o,e)},encodeNull:function(e,n){throw new Error("encoding bool null from type is not implemented")},decode:function(e,n,t,o){return e.decodeBool(n,t)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int8={$:{encode:function(e,n,t,o,i){n.encodeInt8(t,e)},encodeNull:function(e,n){e.encodeInt8(n,0)},decode:function(e,n,t,o){return e.decodeInt8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint8={$:{encode:function(e,n,t,o,i){n.encodeUint8(t,e)},encodeNull:function(e,n){e.encodeUint8(n,0)},decode:function(e,n,t,o){return e.decodeUint8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int16={$:{encode:function(e,n,t,o,i){n.encodeInt16(t,e)},encodeNull:function(e,n){e.encodeInt16(n,0)},decode:function(e,n,t,o){return e.decodeInt16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint16={$:{encode:function(e,n,t,o,i){n.encodeUint16(t,e)},encodeNull:function(e,n){e.encodeUint16(n,0)},decode:function(e,n,t,o){return e.decodeUint16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int32={$:{encode:function(e,n,t,o,i){n.encodeInt32(t,e)},encodeNull:function(e,n){e.encodeInt32(n,0)},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint32={$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e)},encodeNull:function(e,n){e.encodeUint32(n,0)},decode:function(e,n,t,o){return e.decodeUint32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int64={$:{encode:function(e,n,t,o,i){n.encodeInt64(t,e)},encodeNull:function(e,n){e.encodeInt64(n,0)},decode:function(e,n,t,o){return e.decodeInt64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Uint64={$:{encode:function(e,n,t,o,i){n.encodeUint64(t,e)},encodeNull:function(e,n){e.encodeUint64(n,0)},decode:function(e,n,t,o){return e.decodeUint64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Float={$:{encode:function(e,n,t,o,i){n.encodeFloat(t,e)},encodeNull:function(e,n){e.encodeFloat(n,0)},decode:function(e,n,t,o){return e.decodeFloat(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Double={$:{encode:function(e,n,t,o,i){n.encodeDouble(t,e)},encodeNull:function(e,n){e.encodeDouble(n,0)},decode:function(e,n,t,o){return e.decodeDouble(n)},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Handle={$:{encode:function(e,n,t,o,i){n.encodeHandle(t,e)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(e,n,t,o){return e.decodeHandle(n)},arrayElementSize:e=>4,isValidObjectKeyType:!1,isValueType:!1}},mojo.internal.String={$:{encode:function(e,n,t,o,i){n.encodeString(t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeString(n)},computeDimensions:function(e,n){return{size:mojo.internal.computeTotalArraySize({elementType:mojo.internal.Uint8},mojo.internal.Encoder.stringToUtf8Bytes(e))}},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!1}},mojo.internal.Array=function(e,n){const t={elementType:e,elementNullable:n};return{$:{arraySpec:t,encode:function(e,n,o,i,r){n.encodeArray(t,o,e)},encodeNull:function(e,n){},decode:function(e,n,o,i){return e.decodeArray(t,n)},computeDimensions:function(e,n){return{size:mojo.internal.computeTotalArraySize(t,e)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Map=function(e,n,t){const o={keyType:e,valueType:n,valueNullable:t};return{$:{mapSpec:o,encode:function(e,n,t,i,r){n.encodeMap(o,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeMap(o,n)},computeDimensions:function(o,i){const r="Map"==o.constructor.name?Array.from(o.keys()):Object.keys(o),s="Map"==o.constructor.name?Array.from(o.values()):r.map((e=>o[e]));return{size:mojo.internal.kMapDataSize+mojo.internal.align(mojo.internal.computeTotalArraySize({elementType:e},r),8)+mojo.internal.computeTotalArraySize({elementType:n,elementNullable:t},s)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Enum=function(){return{$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}}},mojo.internal.StructField=function(e,n,t,o,i,r,s=0,a=void 0,l=void 0){return{name:e,packedOffset:n,packedBitOffset:t,type:o,defaultValue:i,nullable:r,minVersion:s,nullableValueKindProperties:a,fieldGetter:l}},mojo.internal.Struct=function(e,n,t,o){const i=o.map((e=>({version:e[0],packedSize:e[1]}))),r={name:n,packedSize:i[i.length-1].packedSize,fields:t,versions:i};e.$={structSpec:r,encode:function(e,n,t,o,i){n.encodeStruct(r,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeStruct(r,n)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(r,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1}},mojo.internal.TypemappedStruct=function(e,n,t,o,i,r){const s=r.map((e=>({version:e[0],packedSize:e[1]}))),a={name:n,packedSize:s[s.length-1].packedSize,fields:i,versions:s};e.$={structSpec:a,encode:function(e,n,t,o,i){n.encodeStruct(a,t,e)},encodeNull:function(e,n){},decode:function(e,n,i,r){const s=e.wrapStructInDataView(a,n,t);return mojo.internal.isNullOrUndefined(s)?null:o.convert(s)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(a,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1}},mojo.internal.createStructDeserializer=function(e){return function(n){if(null==e.$||null==e.$.structSpec)throw new Error("Invalid struct mojom type!");return new mojo.internal.Decoder(n,[]).decodeStructInline(e.$.structSpec)}},mojo.internal.Union=function(e,n,t){const o={name:n,fields:t};e.$={unionSpec:o,encode:function(e,n,t,i,r){n.encodeUnion(o,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeUnion(o,n)},computeDimensions:function(e,n){return mojo.internal.computeUnionDimensions(o,n,e)},arrayElementSize:e=>e?8:16,isValidObjectKeyType:!1}},mojo.internal.InterfaceProxy=function(e){return{$:{encode:function(n,t,o,i,r){const s=n.proxy.unbind();console.assert(s,`unexpected null ${e.name}`);const a=s.releasePipe();t.encodeHandle(o,a),t.encodeUint32(o+4,0)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return n.decodeInterfaceProxy(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.InterfaceRequest=function(e){return{$:{encode:function(n,t,o,i,r){if(!n.handle)throw new Error("Unexpected null "+e.name);t.encodeHandle(o,n.handle.releasePipe())},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return n.decodeInterfaceRequest(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.AssociatedInterfaceProxy=function(e){return{$:{type:e,encode:function(n,t,o,i,r){console.assert(n.proxy.endpoint&&n.proxy.endpoint.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.proxy.endpoint),t.encodeUint32(o+4,0)},encodeNull:function(e,n){e.encodeUint32(n,4294967295),e.encodeUint32(n+4,0)},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.AssociatedInterfaceRequest=function(e){return{$:{type:e,encode:function(n,t,o,i,r){console.assert(n.handle&&n.handle.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.handle)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.decodeStructField=function(e,n,t){return e.decodeStructField(n,t)},mojo.internal.decodeStructNullableValueField=function(e,n,t,o){n.nullableValueKindProperties.linkedValueFieldName;return e.decodeStructNullableValueField(n,t,o)},mojo.interfaceControl.RUN_MESSAGE_ID=4294967295,mojo.interfaceControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.interfaceControl.RunMessageParamsSpec={$:{}},mojo.interfaceControl.RunResponseMessageParamsSpec={$:{}},mojo.interfaceControl.QueryVersionSpec={$:{}},mojo.interfaceControl.QueryVersionResultSpec={$:{}},mojo.interfaceControl.FlushForTestingSpec={$:{}},mojo.interfaceControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.interfaceControl.RequireVersionSpec={$:{}},mojo.interfaceControl.EnableIdleTrackingSpec={$:{}},mojo.interfaceControl.MessageAckSpec={$:{}},mojo.interfaceControl.NotifyIdleSpec={$:{}},mojo.interfaceControl.RunInputSpec={$:{}},mojo.interfaceControl.RunOutputSpec={$:{}},mojo.interfaceControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.interfaceControl.RunMessageParamsSpec.$,"RunMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.interfaceControl.RunResponseMessageParamsSpec.$,"RunResponseMessageParams",[mojo.internal.StructField("output",0,0,mojo.interfaceControl.RunOutputSpec.$,null,!0,0)],[[0,24]]),mojo.interfaceControl.RunResponseMessageParams=class{constructor(){this.output}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionSpec.$,"QueryVersion",[],[[0,8]]),mojo.interfaceControl.QueryVersion=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionResultSpec.$,"QueryVersionResult",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.QueryVersionResult=class{constructor(){this.version}},mojo.internal.Struct(mojo.interfaceControl.FlushForTestingSpec.$,"FlushForTesting",[],[[0,8]]),mojo.interfaceControl.FlushForTesting=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunOrClosePipeMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.interfaceControl.RequireVersionSpec.$,"RequireVersion",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.RequireVersion=class{constructor(){this.version}},mojo.internal.Struct(mojo.interfaceControl.EnableIdleTrackingSpec.$,"EnableIdleTracking",[mojo.internal.StructField("timeoutInMicroseconds",0,0,mojo.internal.Int64,BigInt(0),!1,0)],[[0,16]]),mojo.interfaceControl.EnableIdleTracking=class{constructor(){this.timeoutInMicroseconds}},mojo.internal.Struct(mojo.interfaceControl.MessageAckSpec.$,"MessageAck",[],[[0,8]]),mojo.interfaceControl.MessageAck=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.NotifyIdleSpec.$,"NotifyIdle",[],[[0,8]]),mojo.interfaceControl.NotifyIdle=class{constructor(){}},mojo.internal.Union(mojo.interfaceControl.RunInputSpec.$,"RunInput",{queryVersion:{ordinal:0,type:mojo.interfaceControl.QueryVersionSpec.$},flushForTesting:{ordinal:1,type:mojo.interfaceControl.FlushForTestingSpec.$}}),mojo.interfaceControl.RunInput,mojo.internal.Union(mojo.interfaceControl.RunOutputSpec.$,"RunOutput",{queryVersionResult:{ordinal:0,type:mojo.interfaceControl.QueryVersionResultSpec.$}}),mojo.interfaceControl.RunOutput,mojo.internal.Union(mojo.interfaceControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{requireVersion:{ordinal:0,type:mojo.interfaceControl.RequireVersionSpec.$},enableIdleTracking:{ordinal:1,type:mojo.interfaceControl.EnableIdleTrackingSpec.$},messageAck:{ordinal:2,type:mojo.interfaceControl.MessageAckSpec.$},notifyIdle:{ordinal:3,type:mojo.interfaceControl.NotifyIdleSpec.$}}),mojo.interfaceControl.RunOrClosePipeInput,mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.pipeControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.pipeControl.DisconnectReasonSpec={$:{}},mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec={$:{}},mojo.pipeControl.PauseUntilFlushCompletesSpec={$:{}},mojo.pipeControl.FlushAsyncSpec={$:{}},mojo.pipeControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.pipeControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.pipeControl.RunOrClosePipeMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.pipeControl.DisconnectReasonSpec.$,"DisconnectReason",[mojo.internal.StructField("customReason",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("description",8,0,mojo.internal.String,null,!1,0)],[[0,24]]),mojo.pipeControl.DisconnectReason=class{constructor(){this.customReason,this.description}},mojo.internal.Struct(mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$,"PeerAssociatedEndpointClosedEvent",[mojo.internal.StructField("id",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("disconnectReason",8,0,mojo.pipeControl.DisconnectReasonSpec.$,null,!0,0)],[[0,24]]),mojo.pipeControl.PeerAssociatedEndpointClosedEvent=class{constructor(){this.id,this.disconnectReason}},mojo.internal.Struct(mojo.pipeControl.PauseUntilFlushCompletesSpec.$,"PauseUntilFlushCompletes",[mojo.internal.StructField("flushPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.PauseUntilFlushCompletes=class{constructor(){this.flushPipe}},mojo.internal.Struct(mojo.pipeControl.FlushAsyncSpec.$,"FlushAsync",[mojo.internal.StructField("flusherPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.FlushAsync=class{constructor(){this.flusherPipe}},mojo.internal.Union(mojo.pipeControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{peerAssociatedEndpointClosedEvent:{ordinal:0,type:mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$},pauseUntilFlushCompletes:{ordinal:1,type:mojo.pipeControl.PauseUntilFlushCompletesSpec.$},flushAsync:{ordinal:2,type:mojo.pipeControl.FlushAsyncSpec.$}}),mojo.pipeControl.RunOrClosePipeInput,mojo.internal.interfaceSupport.RouterMessage,mojo.internal.interfaceSupport.Router=class{constructor(e,n){this.pipe_=e,this.messages_=[],this.dispatchInProgress_=!1,this.reader_=new mojo.internal.interfaceSupport.HandleReader(e),this.reader_.onRead=this.onMessageReceived_.bind(this),this.reader_.onError=this.onError_.bind(this),this.endpoints_=new Map,this.nextInterfaceId_=1,this.interfaceIdNamespace_=n?mojo.internal.kInterfaceNamespaceBit:0,this.pipeControlHandler_=new mojo.internal.interfaceSupport.PipeControlMessageHandler(this,this.onPeerEndpointClosed_.bind(this))}get pipe(){return this.pipe_}generateInterfaceId(){return(this.nextInterfaceId_++|this.interfaceIdNamespace_)>>>0}addEndpoint(e,n){0===n&&this.reader_.start(),console.assert(this.isReading(),"adding a secondary endpoint with no primary"),this.endpoints_.set(n,e),this.dispatchMessages_()}removeEndpoint(e){this.endpoints_.delete(e),0===e&&this.reader_.stop()}close(){console.assert(0===this.endpoints_.size,"closing primary endpoint with secondary endpoints still bound"),this.reader_.stopAndCloseHandle()}closeEndpoint(e){this.removeEndpoint(e),0===e?this.close():this.pipeControlHandler_.notifyEndpointClosed(e)}isReading(){return!this.reader_.isStopped()}send(e){this.pipe_.writeMessage(e.buffer,e.handles)}onMessageReceived_(e,n){if(!this.checkSize_(e))return;const t=mojo.internal.deserializeMessageHeader(new mojo.internal.DataViewWrapper(e));this.pipeControlHandler_.maybeHandleMessage(t,e)||(this.messages_.push({header:t,buffer:e,handles:n}),this.dispatchMessages_())}checkSize_(e){return!(e.byteLength<mojo.internal.kMessageV0HeaderSize)||(console.error("Rejecting undersized message"),this.onError_(),!1)}dispatchMessages_(){if(!this.dispatchInProgress_){for(this.dispatchInProgress_=!0;this.messages_.length>0;){const e=this.messages_[0];if(!this.dispatch_(e))break;this.messages_.shift()}this.dispatchInProgress_=!1}}dispatch_(e){const n=this.endpoints_.get(e.header.interfaceId);return n?!!n.isStarted&&(n.onMessageReceived(e.header,e.buffer,e.handles),!0):(console.error(`Received message for unknown endpoint ${e.header.interfaceId}`),!1)}onError_(){for(const e of this.endpoints_.values())e.onError();this.endpoints_.clear()}onPeerEndpointClosed_(e){const n=this.endpoints_.get(e);n&&n.onError()}},mojo.internal.interfaceSupport.EndpointClient=class{onMessageReceived(e,n,t,o){}onError(e,n=void 0){}},mojo.internal.interfaceSupport.Endpoint=class{constructor(e=null,n=0){this.router_=e,this.interfaceId_=n,this.controlMessageHandler_=new mojo.internal.interfaceSupport.ControlMessageHandler(this),this.client_=null,this.nextRequestId_=0,this.localPeer_=null}static createAssociatedPair(){const e=new mojo.internal.interfaceSupport.Endpoint,n=new mojo.internal.interfaceSupport.Endpoint;return n.localPeer_=e,e.localPeer_=n,{endpoint0:e,endpoint1:n}}get router(){return this.router_}isPrimary(){return null!==this.router_&&0===this.interfaceId_}releasePipe(){return console.assert(this.isPrimary(),"secondary endpoint cannot release pipe"),this.router_.pipe}get isPendingAssociation(){return null!==this.localPeer_}bindInBrowser(e,n){console.assert(this.isPrimary()&&!this.router_.isReading(),"endpoint is either associated or already bound"),Mojo.bindInterface(e,this.router_.pipe,n)}associatePeerOfOutgoingEndpoint(e){console.assert(this.router_,"cannot associate with unbound endpoint");const n=e.localPeer_;e.localPeer_=n.localPeer_=null;const t=this.router_.generateInterfaceId();return n.router_=this.router_,n.interfaceId_=t,n.client_&&this.router_.addEndpoint(n,t),t}generateRequestId(){const e=this.nextRequestId_++;return this.nextRequestId_>4294967295&&(this.nextRequestId_=0),e}send(e,n,t,o,i){const r=new mojo.internal.Message(this,this.interfaceId_,t,e,n,o.$.structSpec,i);console.assert(this.router_,"cannot send message on unassociated unbound endpoint"),this.router_.send(r)}start(e){console.assert(!this.client_,"endpoint already started"),this.client_=e,this.router_&&this.router_.addEndpoint(this,this.interfaceId_)}get isStarted(){return null!==this.client_}stop(){this.router_&&this.router_.removeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null}close(){this.router_&&this.router.closeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null}async flushForTesting(){return this.controlMessageHandler_.sendRunMessage({flushForTesting:{}})}onMessageReceived(e,n,t){console.assert(this.client_,"endpoint has no client");this.controlMessageHandler_.maybeHandleControlMessage(e,n)||this.client_.onMessageReceived(this,e,n,t)}onError(){this.client_&&this.client_.onError(this)}},mojo.internal.interfaceSupport.acceptBufferForTesting=function(e,n){e.router_.onMessageReceived_(n,[])},mojo.internal.interfaceSupport.createEndpoint=function(e,n=!1){return void 0===e.watch?e:new mojo.internal.interfaceSupport.Endpoint(new mojo.internal.interfaceSupport.Router(e,n),0)},mojo.internal.interfaceSupport.getEndpointForReceiver=function(e){return mojo.internal.interfaceSupport.createEndpoint(e)},mojo.internal.interfaceSupport.bind=function(e,n,t){e.bindInBrowser(n,t)},mojo.internal.interfaceSupport.PipeControlMessageHandler=class{constructor(e,n){this.router_=e,this.onDisconnect_=n}send(e){const n=new mojo.internal.Message(null,4294967295,0,mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID,0,mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,{input:e});this.router_.send(n)}maybeHandleMessage(e,n){if(e.ordinal!==mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID)return!1;const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]),i=mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,r=o.decodeStructInline(i).input;return!r.hasOwnProperty("peerAssociatedEndpointClosedEvent")||(this.onDisconnect_(r.peerAssociatedEndpointClosedEvent.id),!0)}notifyEndpointClosed(e){this.send({peerAssociatedEndpointClosedEvent:{id:e}})}},mojo.internal.interfaceSupport.ControlMessageHandler=class{constructor(e){this.endpoint_=e,this.pendingFlushResolvers_=new Map}sendRunMessage(e){const n=this.endpoint_.generateRequestId();return new Promise((t=>{this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,n,mojo.internal.kMessageFlagExpectsResponse,mojo.interfaceControl.RunMessageParamsSpec.$,{input:e}),this.pendingFlushResolvers_.set(n,t)}))}maybeHandleControlMessage(e,n){if(e.ordinal===mojo.interfaceControl.RUN_MESSAGE_ID){const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]);return e.flags&mojo.internal.kMessageFlagExpectsResponse?this.handleRunRequest_(e.requestId,o):this.handleRunResponse_(e.requestId,o)}return!1}handleRunRequest_(e,n){return!!n.decodeStructInline(mojo.interfaceControl.RunMessageParamsSpec.$.$.structSpec).input.hasOwnProperty("flushForTesting")&&(this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,e,mojo.internal.kMessageFlagIsResponse,mojo.interfaceControl.RunResponseMessageParamsSpec.$,{output:null}),!0)}handleRunResponse_(e,n){const t=this.pendingFlushResolvers_.get(e);return!!t&&(t(),!0)}},mojo.internal.interfaceSupport.PendingResponse,mojo.internal.interfaceSupport.ConnectionErrorEventRouter=class{constructor(){this.listeners=new Map,this.nextListenerId_=0}addListener(e){const n=++this.nextListenerId_;return this.listeners.set(n,e),n}removeListener(e){return this.listeners.delete(e)}dispatchErrorEvent(){for(const e of this.listeners.values())e()}},mojo.internal.interfaceSupport.PendingReceiver=class{get handle(){}},mojo.internal.interfaceSupport.InterfaceRemoteBase=class{constructor(e,n=void 0){this.endpoint_=null,this.requestType_=e,this.pendingResponses_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter,n&&this.bindHandle(n)}get endpoint(){return this.endpoint_}bindNewPipeAndPassReceiver(){let{handle0:e,handle1:n}=Mojo.createMessagePipe();return this.bindHandle(e),new this.requestType_(mojo.internal.interfaceSupport.createEndpoint(n))}bindHandle(e){console.assert(!this.endpoint_,"already bound"),e=mojo.internal.interfaceSupport.createEndpoint(e,!0),this.endpoint_=e,this.endpoint_.start(this),this.pendingResponses_=new Map}associateAndPassReceiver(){console.assert(!this.endpoint_,"cannot associate when already bound");const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.requestType_(n)}unbind(){if(!this.endpoint_)return null;const e=this.endpoint_;return this.endpoint_=null,e.stop(),e}close(){this.cleanupAndFlushPendingResponses_("Message pipe closed."),this.endpoint_&&this.endpoint_.close(),this.endpoint_=null}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}sendMessage(e,n,t,o,i){if(t&&(!this.endpoint_||!this.endpoint_.isStarted))return Promise.reject(new Error("The pipe has already been closed."));const r={};let s=0;n.$.structSpec.fields.forEach(((e,n)=>{const t=n-s;if(!mojo.internal.isNullableValueKindField(e))return void(r[e.name]=o[t]);const i=e.nullableValueKindProperties;i.isPrimary&&(s++,r[i.originalFieldName]=o[t])}));const a=this.endpoint_.generateRequestId();if(this.endpoint_.send(e,a,t?mojo.internal.kMessageFlagExpectsResponse:0,n,r),!t)return Promise.resolve();const l=t;return new Promise(((n,t)=>{this.pendingResponses_.set(a,{requestId:a,ordinal:e,responseStruct:l,resolve:n,reject:t,useResultResponse:i})}))}flushForTesting(){return this.endpoint_.flushForTesting()}onMessageReceived(e,n,t,o){if(!(n.flags&mojo.internal.kMessageFlagIsResponse)||n.flags&mojo.internal.kMessageFlagExpectsResponse)return this.onError(e,"Received unexpected request message");const i=this.pendingResponses_.get(n.requestId);if(this.pendingResponses_.delete(n.requestId),!i)return this.onError(e,"Received unexpected response message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.responseStruct.$.structSpec);if(!r)return this.onError(e,"Received malformed response message");if(n.ordinal!==i.ordinal)return this.onError(e,"Received malformed response message");if(i.useResultResponse){const e=r.result;void 0!==e.success?i.resolve(e.success):i.reject(e.failure)}else i.resolve(r)}onError(e,n=void 0){this.cleanupAndFlushPendingResponses_(n),this.connectionErrorEventRouter_.dispatchErrorEvent()}cleanupAndFlushPendingResponses_(e=void 0){this.endpoint_&&this.endpoint_.stop();for(const n of this.pendingResponses_.keys())this.pendingResponses_.get(n).reject(new Error(e));this.pendingResponses_=new Map}},mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper=class{constructor(e){this.remote_=e}bindNewPipeAndPassReceiver(){return this.remote_.bindNewPipeAndPassReceiver()}associateAndPassReceiver(){return this.remote_.associateAndPassReceiver()}isBound(){return null!==this.remote_.endpoint_}close(){this.remote_.close()}flushForTesting(){return this.remote_.flushForTesting()}},mojo.internal.interfaceSupport.CallbackRouter=class{constructor(){this.removeCallbacks=new Map,this.nextListenerId_=0}getNextId(){return++this.nextListenerId_}removeListener(e){return this.removeCallbacks.get(e)(),this.removeCallbacks.delete(e)}},mojo.internal.interfaceSupport.InterfaceCallbackReceiver=class{constructor(e){this.listeners_=new Map,this.callbackRouter_=e}addListener(e){const n=this.callbackRouter_.getNextId();return this.listeners_.set(n,e),this.callbackRouter_.removeCallbacks.set(n,(()=>this.listeners_.delete(n))),n}createReceiverHandler(e){return e?this.dispatchWithResponse_.bind(this):this.dispatch_.bind(this)}dispatch_(e){const n=Array.from(arguments);this.listeners_.forEach((e=>e.apply(null,n)))}dispatchWithResponse_(e){const n=Array.from(arguments),t=Array.from(this.listeners_.values()).map((e=>e.apply(null,n)));let o;for(const e of t)if(void 0!==e){if(void 0!==o)throw new Error("Multiple listeners attempted to reply to a message");o=e}return o}},mojo.internal.interfaceSupport.MessageHandler,mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal=class{constructor(e){this.endpoints_=new Set,this.remoteType_=e,this.messageHandlers_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter}registerHandler(e,n,t,o,i){this.messageHandlers_.set(e,{paramStruct:n,responseStruct:t,handler:o,useResultResponse:i})}bindHandle(e){e=mojo.internal.interfaceSupport.createEndpoint(e),this.endpoints_.add(e),e.start(this)}bindNewPipeAndPassRemote(){let e=new this.remoteType_;return this.bindHandle(e.$.bindNewPipeAndPassReceiver().handle),e}associateAndPassRemote(){const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.remoteType_(n)}closeBindings(){for(const e of this.endpoints_)e.close();this.endpoints_.clear()}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}async flush(){for(let e of this.endpoints_)await e.flushForTesting()}onMessageReceived(e,n,t,o){if(n.flags&mojo.internal.kMessageFlagIsResponse)throw new Error("Received unexpected response on interface receiver");const i=this.messageHandlers_.get(n.ordinal);if(!i)throw new Error("Received unknown message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.paramStruct.$.structSpec);if(!r)throw new Error("Received malformed message");const s=[];for(const e of i.paramStruct.$.structSpec.fields){if(!mojo.internal.isNullableValueKindField(e)){s.push(r[e.name]);continue}const n=e.nullableValueKindProperties;n.isPrimary&&s.push(r[n.originalFieldName])}i.useResultResponse?this.handleResultResponseMessage_(e,n,i,s):this.handleResponseMessage_(e,n,i,s)}handleResultResponseMessage_(e,n,t,o){try{let i=t.handler.apply(null,o);"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{success:o}})})).catch((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}})}))}catch(o){e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}})}}handleResponseMessage_(e,n,t,o){let i=t.handler.apply(null,o);if(t.responseStruct){if(void 0===i)throw this.onError(e),new Error("Message expects a reply but its handler did not provide one.");"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,o)})).catch((()=>{this.onError(e)}))}}onError(e,n=void 0){this.endpoints_.delete(e),e.close(),this.connectionErrorEventRouter_.dispatchErrorEvent()}},mojo.internal.interfaceSupport.InterfaceReceiverHelper=class{constructor(e){this.helper_internal_=e}bindHandle(e){this.helper_internal_.bindHandle(e)}bindNewPipeAndPassRemote(){return this.helper_internal_.bindNewPipeAndPassRemote()}associateAndPassRemote(){return this.helper_internal_.associateAndPassRemote()}close(){this.helper_internal_.closeBindings()}flush(){return this.helper_internal_.flush()}},mojo.internal.interfaceSupport.HandleReader=class{constructor(e){this.handle_=e,this.onRead=null,this.onError=()=>{},this.watcher_=null}isStopped(){return null===this.watcher_}start(){this.watcher_=this.handle_.watch({readable:!0},this.read_.bind(this))}stop(){this.watcher_&&(this.watcher_.cancel(),this.watcher_=null)}stopAndCloseHandle(){this.watcher_&&this.stop(),this.handle_.close()}read_(e){for(;;){if(!this.watcher_)return;const e=this.handle_.readMessage();if(e.result==Mojo.RESULT_SHOULD_WAIT)return;if(e.result==Mojo.RESULT_FAILED_PRECONDITION)return void this.onError();if(e.result!=Mojo.RESULT_OK)throw new Error("Unexpected error on HandleReader: "+e.result);this.onRead(e.buffer,e.handles)}}};
;// ../out/code_search_mac_Component_x64/gen/mojo/public/mojom/base/big_buffer.mojom.m.js
// mojo/public/mojom/base/big_buffer.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BigBufferSharedMemoryRegionSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType} }
 */
const BigBufferSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    BigBufferSharedMemoryRegionSpec.$,
    'BigBufferSharedMemoryRegion',
    [
      mojo.internal.StructField(
        'bufferHandle', 0,
        0,
        mojo.internal.Handle,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'size', 4,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class BigBufferSharedMemoryRegion {
  constructor() {
    /** @type { !MojoHandle } */
    this.bufferHandle;
    /** @type { !number } */
    this.size;
  }
}

mojo.internal.Union(
    BigBufferSpec.$, 'BigBuffer',
    {
      'bytes': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      },
      'sharedMemory': {
        'ordinal': 1,
        'type': BigBufferSharedMemoryRegionSpec.$,
      },
      'invalidBuffer': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
      },
    });

/**
 * @typedef { {
 *   bytes: (!Array<!number>|undefined),
 *   sharedMemory: (!BigBufferSharedMemoryRegion|undefined),
 *   invalidBuffer: (!boolean|undefined),
 * } }
 */
const BigBuffer = {};

;// ../out/code_search_mac_Component_x64/gen/mojo/public/mojom/base/file.mojom.m.js
// mojo/public/mojom/base/file.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const FileSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ReadOnlyFileSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    FileSpec.$,
    'File',
    [
      mojo.internal.StructField(
        'fd', 0,
        0,
        mojo.internal.Handle,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'async', 4,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class File {
  constructor() {
    /** @type { !MojoHandle } */
    this.fd;
    /** @type { !boolean } */
    this.async;
  }
}



mojo.internal.Struct(
    ReadOnlyFileSpec.$,
    'ReadOnlyFile',
    [
      mojo.internal.StructField(
        'fd', 0,
        0,
        mojo.internal.Handle,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'async', 4,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class ReadOnlyFile {
  constructor() {
    /** @type { !MojoHandle } */
    this.fd;
    /** @type { !boolean } */
    this.async;
  }
}


;// ../out/code_search_mac_Component_x64/gen/mojo/public/mojom/base/file_path.mojom.m.js
// mojo/public/mojom/base/file_path.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const FilePathSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const RelativeFilePathSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    FilePathSpec.$,
    'FilePath',
    [
      mojo.internal.StructField(
        'path', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class FilePath {
  constructor() {
    /** @type { !string } */
    this.path;
  }
}



mojo.internal.Struct(
    RelativeFilePathSpec.$,
    'RelativeFilePath',
    [
      mojo.internal.StructField(
        'path', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class RelativeFilePath {
  constructor() {
    /** @type { !string } */
    this.path;
  }
}


;// ../out/code_search_mac_Component_x64/gen/mojo/public/mojom/base/time.mojom.m.js
// mojo/public/mojom/base/time.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const JSTimeSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeDeltaSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TimeTicksSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    TimeSpec.$,
    'Time',
    [
      mojo.internal.StructField(
        'internalValue', 0,
        0,
        mojo.internal.Int64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Time {
  constructor() {
    /** @type { !bigint } */
    this.internalValue;
  }
}



mojo.internal.Struct(
    JSTimeSpec.$,
    'JSTime',
    [
      mojo.internal.StructField(
        'msec', 0,
        0,
        mojo.internal.Double,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class JSTime {
  constructor() {
    /** @type { !number } */
    this.msec;
  }
}



mojo.internal.Struct(
    TimeDeltaSpec.$,
    'TimeDelta',
    [
      mojo.internal.StructField(
        'microseconds', 0,
        0,
        mojo.internal.Int64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TimeDelta {
  constructor() {
    /** @type { !bigint } */
    this.microseconds;
  }
}



mojo.internal.Struct(
    TimeTicksSpec.$,
    'TimeTicks',
    [
      mojo.internal.StructField(
        'internalValue', 0,
        0,
        mojo.internal.Int64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TimeTicks {
  constructor() {
    /** @type { !bigint } */
    this.internalValue;
  }
}


;// ../out/code_search_mac_Component_x64/gen/mojo/public/mojom/base/values.mojom.m.js
// mojo/public/mojom/base/values.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DictionaryValueSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ListValueSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType} }
 */
const ValueSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    DictionaryValueSpec.$,
    'DictionaryValue',
    [
      mojo.internal.StructField(
        'storage', 0,
        0,
        mojo.internal.Map(mojo.internal.String, ValueSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class DictionaryValue {
  constructor() {
    /** @type { !Object<!string, !Value> } */
    this.storage;
  }
}



mojo.internal.Struct(
    ListValueSpec.$,
    'ListValue',
    [
      mojo.internal.StructField(
        'storage', 0,
        0,
        mojo.internal.Array(ValueSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class ListValue {
  constructor() {
    /** @type { !Array<!Value> } */
    this.storage;
  }
}

mojo.internal.Union(
    ValueSpec.$, 'Value',
    {
      'nullValue': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      },
      'boolValue': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      },
      'intValue': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
      },
      'doubleValue': {
        'ordinal': 3,
        'type': mojo.internal.Double,
      },
      'stringValue': {
        'ordinal': 4,
        'type': mojo.internal.String,
      },
      'binaryValue': {
        'ordinal': 5,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      },
      'dictionaryValue': {
        'ordinal': 6,
        'type': DictionaryValueSpec.$,
      },
      'listValue': {
        'ordinal': 7,
        'type': ListValueSpec.$,
      },
    });

/**
 * @typedef { {
 *   nullValue: (!number|undefined),
 *   boolValue: (!boolean|undefined),
 *   intValue: (!number|undefined),
 *   doubleValue: (!number|undefined),
 *   stringValue: (!string|undefined),
 *   binaryValue: (!Array<!number>|undefined),
 *   dictionaryValue: (!DictionaryValue|undefined),
 *   listValue: (!ListValue|undefined),
 * } }
 */
const Value = {};

;// ../out/code_search_mac_Component_x64/gen/skia/public/mojom/image_info.mojom.m.js
// skia/public/mojom/image_info.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const ColorTypeSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const ColorType = {
  
  UNKNOWN: 0,
  ALPHA_8: 1,
  RGB_565: 2,
  ARGB_4444: 3,
  RGBA_8888: 4,
  BGRA_8888: 5,
  DEPRECATED_INDEX_8: 6,
  GRAY_8: 7,
  MIN_VALUE: 0,
  MAX_VALUE: 7,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const AlphaTypeSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const AlphaType = {
  
  UNKNOWN: 0,
  ALPHA_TYPE_OPAQUE: 1,
  PREMUL: 2,
  UNPREMUL: 3,
  MIN_VALUE: 0,
  MAX_VALUE: 3,
};


/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ImageInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BitmapN32ImageInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    ImageInfoSpec.$,
    'ImageInfo',
    [
      mojo.internal.StructField(
        'colorType', 0,
        0,
        ColorTypeSpec.$,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'alphaType', 4,
        0,
        AlphaTypeSpec.$,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'width', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'height', 12,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'colorTransferFunction', 16,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'colorToXyzMatrix', 24,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 40],]);



/**
 * @record
 */
class ImageInfo {
  constructor() {
    /** @type { !ColorType } */
    this.colorType;
    /** @type { !AlphaType } */
    this.alphaType;
    /** @type { !number } */
    this.width;
    /** @type { !number } */
    this.height;
    /** @type { (Array<!number>|undefined) } */
    this.colorTransferFunction;
    /** @type { (Array<!number>|undefined) } */
    this.colorToXyzMatrix;
  }
}



mojo.internal.Struct(
    BitmapN32ImageInfoSpec.$,
    'BitmapN32ImageInfo',
    [
      mojo.internal.StructField(
        'alphaType', 0,
        0,
        AlphaTypeSpec.$,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'width', 4,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'height', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'colorTransferFunction', 16,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'colorToXyzMatrix', 24,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 40],]);



/**
 * @record
 */
class BitmapN32ImageInfo {
  constructor() {
    /** @type { !AlphaType } */
    this.alphaType;
    /** @type { !number } */
    this.width;
    /** @type { !number } */
    this.height;
    /** @type { (Array<!number>|undefined) } */
    this.colorTransferFunction;
    /** @type { (Array<!number>|undefined) } */
    this.colorToXyzMatrix;
  }
}


;// ../out/code_search_mac_Component_x64/gen/skia/public/mojom/bitmap.mojom.m.js
// skia/public/mojom/bitmap.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BitmapN32Spec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BitmapWithArbitraryBppSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BitmapMappedFromTrustedProcessSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const InlineBitmapSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    BitmapN32Spec.$,
    'BitmapN32',
    [
      mojo.internal.StructField(
        'imageInfo', 0,
        0,
        BitmapN32ImageInfoSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'pixelData', 8,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class BitmapN32 {
  constructor() {
    /** @type { !skia_mojom_BitmapN32ImageInfo } */
    this.imageInfo;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.pixelData;
  }
}



mojo.internal.Struct(
    BitmapWithArbitraryBppSpec.$,
    'BitmapWithArbitraryBpp',
    [
      mojo.internal.StructField(
        'imageInfo', 0,
        0,
        ImageInfoSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'uNUSEDRowBytes', 8,
        0,
        mojo.internal.Uint64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'pixelData', 16,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 40],]);



/**
 * @record
 */
class BitmapWithArbitraryBpp {
  constructor() {
    /** @type { !skia_mojom_ImageInfo } */
    this.imageInfo;
    /** @type { !bigint } */
    this.uNUSEDRowBytes;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.pixelData;
  }
}



mojo.internal.Struct(
    BitmapMappedFromTrustedProcessSpec.$,
    'BitmapMappedFromTrustedProcess',
    [
      mojo.internal.StructField(
        'imageInfo', 0,
        0,
        ImageInfoSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'uNUSEDRowBytes', 8,
        0,
        mojo.internal.Uint64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'pixelData', 16,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 40],]);



/**
 * @record
 */
class BitmapMappedFromTrustedProcess {
  constructor() {
    /** @type { !skia_mojom_ImageInfo } */
    this.imageInfo;
    /** @type { !bigint } */
    this.uNUSEDRowBytes;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.pixelData;
  }
}



mojo.internal.Struct(
    InlineBitmapSpec.$,
    'InlineBitmap',
    [
      mojo.internal.StructField(
        'imageInfo', 0,
        0,
        BitmapN32ImageInfoSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'pixelData', 8,
        0,
        mojo.internal.Array(mojo.internal.Uint8, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class InlineBitmap {
  constructor() {
    /** @type { !skia_mojom_BitmapN32ImageInfo } */
    this.imageInfo;
    /** @type { !Array<!number> } */
    this.pixelData;
  }
}


;// ../out/code_search_mac_Component_x64/gen/services/on_device_model/public/mojom/on_device_model.mojom.m.js
// services/on_device_model/public/mojom/on_device_model.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const GenerateErrorSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const GenerateError = {
  
  kUnknown: 0,
  kInvalidConstraint: 1,
  MIN_VALUE: 0,
  MAX_VALUE: 1,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const TokenSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const Token = {
  
  kSystem: 0,
  kModel: 1,
  kUser: 2,
  kEnd: 3,
  kToolCall: 4,
  kToolResponse: 5,
  kThought: 6,
  MIN_VALUE: 0,
  MAX_VALUE: 6,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const InputSourceSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const InputSource = {
  
  kUnknown: 0,
  kUserInput: 1,
  kModelOutputFeedback: 2,
  MIN_VALUE: 0,
  MAX_VALUE: 2,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const PrioritySpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const Priority = {
  
  kForeground: 0,
  kBackground: 1,
  MIN_VALUE: 0,
  MAX_VALUE: 1,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const DecisionQuestionTypeSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const DecisionQuestionType = {
  
  kBoolean: 0,
  kChoice: 1,
  kScore: 2,
  MIN_VALUE: 0,
  MAX_VALUE: 2,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const PerformanceClassSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const PerformanceClass = {
  
  kError: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  kVeryLow: 3,
  kLow: 4,
  kMedium: 5,
  kHigh: 6,
  kVeryHigh: 7,
  MIN_VALUE: 0,
  MAX_VALUE: 7,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const LoadModelResultSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const LoadModelResult = {
  
  kSuccess: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  MIN_VALUE: 0,
  MAX_VALUE: 2,
};

/**
 * @const { {$: !mojo.internal.MojomType} }
 */
const AsrErrorSpec = { $: mojo.internal.Enum() };

/**
 * @enum {number}
 */
const AsrError = {
  
  kUnknown: 0,
  kInitializationFailed: 1,
  MIN_VALUE: 0,
  MAX_VALUE: 1,
};



/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class StreamingResponderPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.StreamingResponder', scope);
  }
}

/** @interface */
class StreamingResponderInterface {
  
  /**
   * @param { !ResponseChunk } chunk
   */

  onResponse(chunk) {}
  
  /**
   * @param { !ResponseSummary } summary
   */

  onComplete(summary) {}
  
  /**
   * @param { !Array<!ToolCall> } toolCalls
   */

  onToolCalls(toolCalls) {}
}

/**
 * @implements { StreamingResponderInterface }
 */
class StreamingResponderRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!StreamingResponderPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          StreamingResponderPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!StreamingResponderPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !ResponseChunk } chunk
   */

  onResponse(
      chunk) {
    this.proxy.sendMessage(
        0,
        StreamingResponder_OnResponse_ParamsSpec.$,
        null,
        [
          chunk
        ],
        false);
  }

  
  /**
   * @param { !ResponseSummary } summary
   */

  onComplete(
      summary) {
    this.proxy.sendMessage(
        1,
        StreamingResponder_OnComplete_ParamsSpec.$,
        null,
        [
          summary
        ],
        false);
  }

  
  /**
   * @param { !Array<!ToolCall> } toolCalls
   */

  onToolCalls(
      toolCalls) {
    this.proxy.sendMessage(
        2,
        StreamingResponder_OnToolCalls_ParamsSpec.$,
        null,
        [
          toolCalls
        ],
        false);
  }
}

/**
 * An object which receives request messages for the StreamingResponder
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class StreamingResponderReceiver {
  /**
   * @param {!StreamingResponderInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!StreamingResponderRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        StreamingResponderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!StreamingResponderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        StreamingResponder_OnResponse_ParamsSpec.$,
        null,
        impl.onResponse.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        1,
        StreamingResponder_OnComplete_ParamsSpec.$,
        null,
        impl.onComplete.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        2,
        StreamingResponder_OnToolCalls_ParamsSpec.$,
        null,
        impl.onToolCalls.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class StreamingResponder {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.StreamingResponder";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!StreamingResponderRemote}
   */
  static getRemote() {
    let remote = new StreamingResponderRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the StreamingResponder
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class StreamingResponderCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      StreamingResponderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!StreamingResponderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.onResponse =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        StreamingResponder_OnResponse_ParamsSpec.$,
        null,
        this.onResponse.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.onComplete =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        1,
        StreamingResponder_OnComplete_ParamsSpec.$,
        null,
        this.onComplete.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.onToolCalls =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        2,
        StreamingResponder_OnToolCalls_ParamsSpec.$,
        null,
        this.onToolCalls.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class ContextClientPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.ContextClient', scope);
  }
}

/** @interface */
class ContextClientInterface {
  
  /**
   * @param { !number } tokensProcessed
   */

  onComplete(tokensProcessed) {}
}

/**
 * @implements { ContextClientInterface }
 */
class ContextClientRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!ContextClientPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          ContextClientPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!ContextClientPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !number } tokensProcessed
   */

  onComplete(
      tokensProcessed) {
    this.proxy.sendMessage(
        0,
        ContextClient_OnComplete_ParamsSpec.$,
        null,
        [
          tokensProcessed
        ],
        false);
  }
}

/**
 * An object which receives request messages for the ContextClient
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class ContextClientReceiver {
  /**
   * @param {!ContextClientInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!ContextClientRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        ContextClientRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!ContextClientRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        ContextClient_OnComplete_ParamsSpec.$,
        null,
        impl.onComplete.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class ContextClient {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.ContextClient";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!ContextClientRemote}
   */
  static getRemote() {
    let remote = new ContextClientRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the ContextClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class ContextClientCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      ContextClientRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!ContextClientRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.onComplete =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        ContextClient_OnComplete_ParamsSpec.$,
        null,
        this.onComplete.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class SessionPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.Session', scope);
  }
}

/** @interface */
class SessionInterface {
  
  /**
   * @param { !AppendOptions } options
   * @param { ?ContextClientRemote } client
   */

  append(options, client) {}
  
  /**
   * @param { !GenerateOptions } options
   * @param { !StreamingResponderRemote } responder
   */

  generate(options, responder) {}
  
  /**
   * @param { !Input } input
   * @return {!Promise<{
        size: !number,
   *  }>}
   */

  getSizeInTokens(input) {}
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        probability: !number,
   *  }>}
   */

  score(text) {}
  
  /**
   * @param { !SessionPendingReceiver } session
   */

  clone(session) {}
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        probabilities: !Array<!number>,
   *  }>}
   */

  getProbabilitiesBlocking(text) {}
  
  /**
   * @param { !Priority } priority
   */

  setPriority(priority) {}
  
  /**
   * @param { !AsrStreamOptions } options
   * @param { !AsrStreamInputPendingReceiver } stream
   * @param { !AsrStreamResponderRemote } responder
   */

  asrStream(options, stream, responder) {}
  
  /**
   * @param { !HintOptions } options
   */

  hint(options) {}
}

/**
 * @implements { SessionInterface }
 */
class SessionRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!SessionPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          SessionPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!SessionPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !AppendOptions } options
   * @param { ?ContextClientRemote } client
   */

  append(
      options,
      client) {
    this.proxy.sendMessage(
        6,
        Session_Append_ParamsSpec.$,
        null,
        [
          options,
          client
        ],
        false);
  }

  
  /**
   * @param { !GenerateOptions } options
   * @param { !StreamingResponderRemote } responder
   */

  generate(
      options,
      responder) {
    this.proxy.sendMessage(
        7,
        Session_Generate_ParamsSpec.$,
        null,
        [
          options,
          responder
        ],
        false);
  }

  
  /**
   * @param { !Input } input
   * @return {!Promise<{
        size: !number,
   *  }>}
   */

  getSizeInTokens(
      input) {
    return this.proxy.sendMessage(
        5,
        Session_GetSizeInTokens_ParamsSpec.$,
        Session_GetSizeInTokens_ResponseParamsSpec.$,
        [
          input
        ],
        false);
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        probability: !number,
   *  }>}
   */

  score(
      text) {
    return this.proxy.sendMessage(
        3,
        Session_Score_ParamsSpec.$,
        Session_Score_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !SessionPendingReceiver } session
   */

  clone(
      session) {
    this.proxy.sendMessage(
        4,
        Session_Clone_ParamsSpec.$,
        null,
        [
          session
        ],
        false);
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        probabilities: !Array<!number>,
   *  }>}
   */

  getProbabilitiesBlocking(
      text) {
    return this.proxy.sendMessage(
        8,
        Session_GetProbabilitiesBlocking_ParamsSpec.$,
        Session_GetProbabilitiesBlocking_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !Priority } priority
   */

  setPriority(
      priority) {
    this.proxy.sendMessage(
        9,
        Session_SetPriority_ParamsSpec.$,
        null,
        [
          priority
        ],
        false);
  }

  
  /**
   * @param { !AsrStreamOptions } options
   * @param { !AsrStreamInputPendingReceiver } stream
   * @param { !AsrStreamResponderRemote } responder
   */

  asrStream(
      options,
      stream,
      responder) {
    this.proxy.sendMessage(
        10,
        Session_AsrStream_ParamsSpec.$,
        null,
        [
          options,
          stream,
          responder
        ],
        false);
  }

  
  /**
   * @param { !HintOptions } options
   */

  hint(
      options) {
    this.proxy.sendMessage(
        11,
        Session_Hint_ParamsSpec.$,
        null,
        [
          options
        ],
        false);
  }
}

/**
 * An object which receives request messages for the Session
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class SessionReceiver {
  /**
   * @param {!SessionInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!SessionRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        SessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        6,
        Session_Append_ParamsSpec.$,
        null,
        impl.append.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        7,
        Session_Generate_ParamsSpec.$,
        null,
        impl.generate.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        5,
        Session_GetSizeInTokens_ParamsSpec.$,
        Session_GetSizeInTokens_ResponseParamsSpec.$,
        impl.getSizeInTokens.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        3,
        Session_Score_ParamsSpec.$,
        Session_Score_ResponseParamsSpec.$,
        impl.score.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        4,
        Session_Clone_ParamsSpec.$,
        null,
        impl.clone.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        8,
        Session_GetProbabilitiesBlocking_ParamsSpec.$,
        Session_GetProbabilitiesBlocking_ResponseParamsSpec.$,
        impl.getProbabilitiesBlocking.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        9,
        Session_SetPriority_ParamsSpec.$,
        null,
        impl.setPriority.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        10,
        Session_AsrStream_ParamsSpec.$,
        null,
        impl.asrStream.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        11,
        Session_Hint_ParamsSpec.$,
        null,
        impl.hint.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class Session {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.Session";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!SessionRemote}
   */
  static getRemote() {
    let remote = new SessionRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the Session
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class SessionCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      SessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.append =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        6,
        Session_Append_ParamsSpec.$,
        null,
        this.append.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.generate =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        7,
        Session_Generate_ParamsSpec.$,
        null,
        this.generate.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.getSizeInTokens =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        5,
        Session_GetSizeInTokens_ParamsSpec.$,
        Session_GetSizeInTokens_ResponseParamsSpec.$,
        this.getSizeInTokens.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.score =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        3,
        Session_Score_ParamsSpec.$,
        Session_Score_ResponseParamsSpec.$,
        this.score.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.clone =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        4,
        Session_Clone_ParamsSpec.$,
        null,
        this.clone.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.getProbabilitiesBlocking =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        8,
        Session_GetProbabilitiesBlocking_ParamsSpec.$,
        Session_GetProbabilitiesBlocking_ResponseParamsSpec.$,
        this.getProbabilitiesBlocking.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.setPriority =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        9,
        Session_SetPriority_ParamsSpec.$,
        null,
        this.setPriority.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.asrStream =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        10,
        Session_AsrStream_ParamsSpec.$,
        null,
        this.asrStream.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.hint =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        11,
        Session_Hint_ParamsSpec.$,
        null,
        this.hint.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class OnDeviceModelPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.OnDeviceModel', scope);
  }
}

/** @interface */
class OnDeviceModelInterface {
  
  /**
   * @param { !SessionPendingReceiver } session
   * @param { ?SessionParams } params
   */

  startSession(session, params) {}
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        safetyInfo: ?SafetyInfo,
   *  }>}
   */

  classifyTextSafety(text) {}
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        result: ?LanguageDetectionResult,
   *  }>}
   */

  detectLanguage(text) {}
  
  /**
   * @param { !LoadAdaptationParams } params
   * @param { !OnDeviceModelPendingReceiver } model
   * @return {!Promise<{
        result: !LoadModelResult,
   *  }>}
   */

  loadAdaptation(params, model) {}
  
  /**
   * @param { !LoadPostProcessorParams } params
   * @param { !OnDeviceModelPendingReceiver } model
   * @return {!Promise<{
        result: !LoadModelResult,
   *  }>}
   */

  loadPostProcessor(params, model) {}
}

/**
 * @implements { OnDeviceModelInterface }
 */
class OnDeviceModelRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!OnDeviceModelPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          OnDeviceModelPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!OnDeviceModelPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !SessionPendingReceiver } session
   * @param { ?SessionParams } params
   */

  startSession(
      session,
      params) {
    this.proxy.sendMessage(
        0,
        OnDeviceModel_StartSession_ParamsSpec.$,
        null,
        [
          session,
          params
        ],
        false);
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        safetyInfo: ?SafetyInfo,
   *  }>}
   */

  classifyTextSafety(
      text) {
    return this.proxy.sendMessage(
        1,
        OnDeviceModel_ClassifyTextSafety_ParamsSpec.$,
        OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        result: ?LanguageDetectionResult,
   *  }>}
   */

  detectLanguage(
      text) {
    return this.proxy.sendMessage(
        2,
        OnDeviceModel_DetectLanguage_ParamsSpec.$,
        OnDeviceModel_DetectLanguage_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !LoadAdaptationParams } params
   * @param { !OnDeviceModelPendingReceiver } model
   * @return {!Promise<{
        result: !LoadModelResult,
   *  }>}
   */

  loadAdaptation(
      params,
      model) {
    return this.proxy.sendMessage(
        3,
        OnDeviceModel_LoadAdaptation_ParamsSpec.$,
        OnDeviceModel_LoadAdaptation_ResponseParamsSpec.$,
        [
          params,
          model
        ],
        false);
  }

  
  /**
   * @param { !LoadPostProcessorParams } params
   * @param { !OnDeviceModelPendingReceiver } model
   * @return {!Promise<{
        result: !LoadModelResult,
   *  }>}
   */

  loadPostProcessor(
      params,
      model) {
    return this.proxy.sendMessage(
        4,
        OnDeviceModel_LoadPostProcessor_ParamsSpec.$,
        OnDeviceModel_LoadPostProcessor_ResponseParamsSpec.$,
        [
          params,
          model
        ],
        false);
  }
}

/**
 * An object which receives request messages for the OnDeviceModel
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class OnDeviceModelReceiver {
  /**
   * @param {!OnDeviceModelInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!OnDeviceModelRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        OnDeviceModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!OnDeviceModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        OnDeviceModel_StartSession_ParamsSpec.$,
        null,
        impl.startSession.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        1,
        OnDeviceModel_ClassifyTextSafety_ParamsSpec.$,
        OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec.$,
        impl.classifyTextSafety.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        2,
        OnDeviceModel_DetectLanguage_ParamsSpec.$,
        OnDeviceModel_DetectLanguage_ResponseParamsSpec.$,
        impl.detectLanguage.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        3,
        OnDeviceModel_LoadAdaptation_ParamsSpec.$,
        OnDeviceModel_LoadAdaptation_ResponseParamsSpec.$,
        impl.loadAdaptation.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        4,
        OnDeviceModel_LoadPostProcessor_ParamsSpec.$,
        OnDeviceModel_LoadPostProcessor_ResponseParamsSpec.$,
        impl.loadPostProcessor.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class OnDeviceModel {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.OnDeviceModel";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!OnDeviceModelRemote}
   */
  static getRemote() {
    let remote = new OnDeviceModelRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the OnDeviceModel
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class OnDeviceModelCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      OnDeviceModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!OnDeviceModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.startSession =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        OnDeviceModel_StartSession_ParamsSpec.$,
        null,
        this.startSession.createReceiverHandler(false /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.classifyTextSafety =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        1,
        OnDeviceModel_ClassifyTextSafety_ParamsSpec.$,
        OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec.$,
        this.classifyTextSafety.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.detectLanguage =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        2,
        OnDeviceModel_DetectLanguage_ParamsSpec.$,
        OnDeviceModel_DetectLanguage_ResponseParamsSpec.$,
        this.detectLanguage.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.loadAdaptation =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        3,
        OnDeviceModel_LoadAdaptation_ParamsSpec.$,
        OnDeviceModel_LoadAdaptation_ResponseParamsSpec.$,
        this.loadAdaptation.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.loadPostProcessor =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        4,
        OnDeviceModel_LoadPostProcessor_ParamsSpec.$,
        OnDeviceModel_LoadPostProcessor_ResponseParamsSpec.$,
        this.loadPostProcessor.createReceiverHandler(true /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class TextSafetySessionPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.TextSafetySession', scope);
  }
}

/** @interface */
class TextSafetySessionInterface {
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        safetyInfo: ?SafetyInfo,
   *  }>}
   */

  classifyTextSafety(text) {}
  
  /**
   * @param { !string } text
   * @return {!Promise<{
        result: ?LanguageDetectionResult,
   *  }>}
   */

  detectLanguage(text) {}
  
  /**
   * @param { !TextSafetySessionPendingReceiver } session
   */

  clone(session) {}
}

/**
 * @implements { TextSafetySessionInterface }
 */
class TextSafetySessionRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!TextSafetySessionPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          TextSafetySessionPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!TextSafetySessionPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        safetyInfo: ?SafetyInfo,
   *  }>}
   */

  classifyTextSafety(
      text) {
    return this.proxy.sendMessage(
        1,
        TextSafetySession_ClassifyTextSafety_ParamsSpec.$,
        TextSafetySession_ClassifyTextSafety_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !string } text
   * @return {!Promise<{
        result: ?LanguageDetectionResult,
   *  }>}
   */

  detectLanguage(
      text) {
    return this.proxy.sendMessage(
        2,
        TextSafetySession_DetectLanguage_ParamsSpec.$,
        TextSafetySession_DetectLanguage_ResponseParamsSpec.$,
        [
          text
        ],
        false);
  }

  
  /**
   * @param { !TextSafetySessionPendingReceiver } session
   */

  clone(
      session) {
    this.proxy.sendMessage(
        3,
        TextSafetySession_Clone_ParamsSpec.$,
        null,
        [
          session
        ],
        false);
  }
}

/**
 * An object which receives request messages for the TextSafetySession
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class TextSafetySessionReceiver {
  /**
   * @param {!TextSafetySessionInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!TextSafetySessionRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        TextSafetySessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!TextSafetySessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        1,
        TextSafetySession_ClassifyTextSafety_ParamsSpec.$,
        TextSafetySession_ClassifyTextSafety_ResponseParamsSpec.$,
        impl.classifyTextSafety.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        2,
        TextSafetySession_DetectLanguage_ParamsSpec.$,
        TextSafetySession_DetectLanguage_ResponseParamsSpec.$,
        impl.detectLanguage.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        3,
        TextSafetySession_Clone_ParamsSpec.$,
        null,
        impl.clone.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class TextSafetySession {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.TextSafetySession";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!TextSafetySessionRemote}
   */
  static getRemote() {
    let remote = new TextSafetySessionRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the TextSafetySession
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class TextSafetySessionCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      TextSafetySessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!TextSafetySessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.classifyTextSafety =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        1,
        TextSafetySession_ClassifyTextSafety_ParamsSpec.$,
        TextSafetySession_ClassifyTextSafety_ResponseParamsSpec.$,
        this.classifyTextSafety.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.detectLanguage =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        2,
        TextSafetySession_DetectLanguage_ParamsSpec.$,
        TextSafetySession_DetectLanguage_ResponseParamsSpec.$,
        this.detectLanguage.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.clone =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        3,
        TextSafetySession_Clone_ParamsSpec.$,
        null,
        this.clone.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class TextSafetyModelPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.TextSafetyModel', scope);
  }
}

/** @interface */
class TextSafetyModelInterface {
  
  /**
   * @param { !TextSafetySessionPendingReceiver } session
   */

  startSession(session) {}
}

/**
 * @implements { TextSafetyModelInterface }
 */
class TextSafetyModelRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!TextSafetyModelPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          TextSafetyModelPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!TextSafetyModelPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !TextSafetySessionPendingReceiver } session
   */

  startSession(
      session) {
    this.proxy.sendMessage(
        0,
        TextSafetyModel_StartSession_ParamsSpec.$,
        null,
        [
          session
        ],
        false);
  }
}

/**
 * An object which receives request messages for the TextSafetyModel
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class TextSafetyModelReceiver {
  /**
   * @param {!TextSafetyModelInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!TextSafetyModelRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        TextSafetyModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!TextSafetyModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        TextSafetyModel_StartSession_ParamsSpec.$,
        null,
        impl.startSession.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class TextSafetyModel {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.TextSafetyModel";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!TextSafetyModelRemote}
   */
  static getRemote() {
    let remote = new TextSafetyModelRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the TextSafetyModel
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class TextSafetyModelCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      TextSafetyModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!TextSafetyModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.startSession =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        TextSafetyModel_StartSession_ParamsSpec.$,
        null,
        this.startSession.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class DecisionSessionPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.DecisionSession', scope);
  }
}

/** @interface */
class DecisionSessionInterface {
  
  /**
   * @param { !string } input
   * @return {!Promise<{
        results: ?Array<!DecisionQuestionResult>,
   *  }>}
   */

  decide(input) {}
}

/**
 * @implements { DecisionSessionInterface }
 */
class DecisionSessionRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!DecisionSessionPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          DecisionSessionPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!DecisionSessionPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !string } input
   * @return {!Promise<{
        results: ?Array<!DecisionQuestionResult>,
   *  }>}
   */

  decide(
      input) {
    return this.proxy.sendMessage(
        0,
        DecisionSession_Decide_ParamsSpec.$,
        DecisionSession_Decide_ResponseParamsSpec.$,
        [
          input
        ],
        false);
  }
}

/**
 * An object which receives request messages for the DecisionSession
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class DecisionSessionReceiver {
  /**
   * @param {!DecisionSessionInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!DecisionSessionRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        DecisionSessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!DecisionSessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        DecisionSession_Decide_ParamsSpec.$,
        DecisionSession_Decide_ResponseParamsSpec.$,
        impl.decide.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class DecisionSession {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.DecisionSession";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!DecisionSessionRemote}
   */
  static getRemote() {
    let remote = new DecisionSessionRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the DecisionSession
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class DecisionSessionCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      DecisionSessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!DecisionSessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.decide =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        DecisionSession_Decide_ParamsSpec.$,
        DecisionSession_Decide_ResponseParamsSpec.$,
        this.decide.createReceiverHandler(true /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class DecisionModelPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.DecisionModel', scope);
  }
}

/** @interface */
class DecisionModelInterface {
  
  /**
   * @param { !DecisionQuery } query
   * @param { !DecisionSessionPendingReceiver } session
   */

  startSession(query, session) {}
}

/**
 * @implements { DecisionModelInterface }
 */
class DecisionModelRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!DecisionModelPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          DecisionModelPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!DecisionModelPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !DecisionQuery } query
   * @param { !DecisionSessionPendingReceiver } session
   */

  startSession(
      query,
      session) {
    this.proxy.sendMessage(
        0,
        DecisionModel_StartSession_ParamsSpec.$,
        null,
        [
          query,
          session
        ],
        false);
  }
}

/**
 * An object which receives request messages for the DecisionModel
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class DecisionModelReceiver {
  /**
   * @param {!DecisionModelInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!DecisionModelRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        DecisionModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!DecisionModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        DecisionModel_StartSession_ParamsSpec.$,
        null,
        impl.startSession.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class DecisionModel {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.DecisionModel";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!DecisionModelRemote}
   */
  static getRemote() {
    let remote = new DecisionModelRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the DecisionModel
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class DecisionModelCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      DecisionModelRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!DecisionModelRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.startSession =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        DecisionModel_StartSession_ParamsSpec.$,
        null,
        this.startSession.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class AsrStreamResponderPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.AsrStreamResponder', scope);
  }
}

/** @interface */
class AsrStreamResponderInterface {
  
  /**
   * @param { !Array<!SpeechRecognitionResult> } result
   */

  onResponse(result) {}
}

/**
 * @implements { AsrStreamResponderInterface }
 */
class AsrStreamResponderRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!AsrStreamResponderPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          AsrStreamResponderPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!AsrStreamResponderPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !Array<!SpeechRecognitionResult> } result
   */

  onResponse(
      result) {
    this.proxy.sendMessage(
        0,
        AsrStreamResponder_OnResponse_ParamsSpec.$,
        null,
        [
          result
        ],
        false);
  }
}

/**
 * An object which receives request messages for the AsrStreamResponder
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class AsrStreamResponderReceiver {
  /**
   * @param {!AsrStreamResponderInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!AsrStreamResponderRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        AsrStreamResponderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrStreamResponderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        AsrStreamResponder_OnResponse_ParamsSpec.$,
        null,
        impl.onResponse.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class AsrStreamResponder {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.AsrStreamResponder";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!AsrStreamResponderRemote}
   */
  static getRemote() {
    let remote = new AsrStreamResponderRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the AsrStreamResponder
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class AsrStreamResponderCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      AsrStreamResponderRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrStreamResponderRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.onResponse =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        AsrStreamResponder_OnResponse_ParamsSpec.$,
        null,
        this.onResponse.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class AsrStreamInputPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'on_device_model.mojom.AsrStreamInput', scope);
  }
}

/** @interface */
class AsrStreamInputInterface {
  
  /**
   * @param { !AudioData } data
   */

  addAudioChunk(data) {}
}

/**
 * @implements { AsrStreamInputInterface }
 */
class AsrStreamInputRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!AsrStreamInputPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          AsrStreamInputPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!AsrStreamInputPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !AudioData } data
   */

  addAudioChunk(
      data) {
    this.proxy.sendMessage(
        0,
        AsrStreamInput_AddAudioChunk_ParamsSpec.$,
        null,
        [
          data
        ],
        false);
  }
}

/**
 * An object which receives request messages for the AsrStreamInput
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class AsrStreamInputReceiver {
  /**
   * @param {!AsrStreamInputInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!AsrStreamInputRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        AsrStreamInputRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrStreamInputRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        AsrStreamInput_AddAudioChunk_ParamsSpec.$,
        null,
        impl.addAudioChunk.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class AsrStreamInput {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "on_device_model.mojom.AsrStreamInput";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!AsrStreamInputRemote}
   */
  static getRemote() {
    let remote = new AsrStreamInputRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the AsrStreamInput
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class AsrStreamInputCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      AsrStreamInputRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrStreamInputRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.addAudioChunk =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        AsrStreamInput_AddAudioChunk_ParamsSpec.$,
        null,
        this.addAudioChunk.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AdaptationAssetsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const LanguageDetectionResultSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SafetyInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ResponseChunkSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ResponseSummarySpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const LoadAdaptationParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const LoadPostProcessorParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const CapabilitiesSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SessionParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const InputSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AppendOptionsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const HintOptionsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const GenerateOptionsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionOptionSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionQuestionSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionQuerySpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionQuestionResultSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ToolDeclarationSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ToolCallSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ToolResponseSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AudioDataSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SpeechRecognitionResultSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AsrStreamOptionsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DevicePerformanceInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DeviceInfoSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const StreamingResponder_OnResponse_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const StreamingResponder_OnComplete_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const StreamingResponder_OnToolCalls_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const ContextClient_OnComplete_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Append_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Generate_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_GetSizeInTokens_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_GetSizeInTokens_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Score_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Score_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Clone_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_GetProbabilitiesBlocking_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_GetProbabilitiesBlocking_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_SetPriority_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_AsrStream_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const Session_Hint_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_StartSession_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_ClassifyTextSafety_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_DetectLanguage_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_DetectLanguage_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_LoadAdaptation_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_LoadAdaptation_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_LoadPostProcessor_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OnDeviceModel_LoadPostProcessor_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetySession_ClassifyTextSafety_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetySession_ClassifyTextSafety_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetySession_DetectLanguage_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetySession_DetectLanguage_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetySession_Clone_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const TextSafetyModel_StartSession_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionSession_Decide_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionSession_Decide_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const DecisionModel_StartSession_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AsrStreamResponder_OnResponse_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AsrStreamInput_AddAudioChunk_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType} }
 */
const InputPieceSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType} }
 */
const ResponseConstraintSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    AdaptationAssetsSpec.$,
    'AdaptationAssets',
    [
      mojo.internal.StructField(
        'weights', 0,
        0,
        FileSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'weightsPath', 8,
        0,
        FilePathSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class AdaptationAssets {
  constructor() {
    /** @type { (mojoBase_mojom_File|undefined) } */
    this.weights;
    /** @type { (mojoBase_mojom_FilePath|undefined) } */
    this.weightsPath;
  }
}



mojo.internal.Struct(
    LanguageDetectionResultSpec.$,
    'LanguageDetectionResult',
    [
      mojo.internal.StructField(
        'code', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'reliability', 8,
        0,
        mojo.internal.Float,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class LanguageDetectionResult {
  constructor() {
    /** @type { !string } */
    this.code;
    /** @type { !number } */
    this.reliability;
  }
}



mojo.internal.Struct(
    SafetyInfoSpec.$,
    'SafetyInfo',
    [
      mojo.internal.StructField(
        'classScores', 0,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'language', 8,
        0,
        LanguageDetectionResultSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class SafetyInfo {
  constructor() {
    /** @type { !Array<!number> } */
    this.classScores;
    /** @type { (LanguageDetectionResult|undefined) } */
    this.language;
  }
}



mojo.internal.Struct(
    ResponseChunkSpec.$,
    'ResponseChunk',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'safetyInfo', 8,
        0,
        SafetyInfoSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'thought', 16,
        0,
        mojo.internal.String,
        null,
        true /* nullable */,
        9,
      ),
    ],
    [[0, 24],[9, 32],]);



/**
 * @record
 */
class ResponseChunk {
  constructor() {
    /** @type { !string } */
    this.text;
    /** @type { (SafetyInfo|undefined) } */
    this.safetyInfo;
    /** @type { (string|undefined) } */
    this.thought;
  }
}



mojo.internal.Struct(
    ResponseSummarySpec.$,
    'ResponseSummary',
    [
      mojo.internal.StructField(
        'safetyInfo', 0,
        0,
        SafetyInfoSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'outputTokenCount', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class ResponseSummary {
  constructor() {
    /** @type { (SafetyInfo|undefined) } */
    this.safetyInfo;
    /** @type { !number } */
    this.outputTokenCount;
  }
}



mojo.internal.Struct(
    LoadAdaptationParamsSpec.$,
    'LoadAdaptationParams',
    [
      mojo.internal.StructField(
        'assets', 0,
        0,
        AdaptationAssetsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class LoadAdaptationParams {
  constructor() {
    /** @type { !AdaptationAssets } */
    this.assets;
  }
}



mojo.internal.Struct(
    LoadPostProcessorParamsSpec.$,
    'LoadPostProcessorParams',
    [
      mojo.internal.StructField(
        'weights', 0,
        0,
        FileSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'cache', 8,
        0,
        FileSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'maxTokens', 16,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class LoadPostProcessorParams {
  constructor() {
    /** @type { (mojoBase_mojom_File|undefined) } */
    this.weights;
    /** @type { (mojoBase_mojom_File|undefined) } */
    this.cache;
    /** @type { !number } */
    this.maxTokens;
  }
}



mojo.internal.Struct(
    CapabilitiesSpec.$,
    'Capabilities',
    [
      mojo.internal.StructField(
        'imageInput', 0,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'audioInput', 0,
        1,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Capabilities {
  constructor() {
    /** @type { !boolean } */
    this.imageInput;
    /** @type { !boolean } */
    this.audioInput;
  }
}



mojo.internal.Struct(
    SessionParamsSpec.$,
    'SessionParams',
    [
      mojo.internal.StructField(
        'maxTokens', 0,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'capabilities', 8,
        0,
        CapabilitiesSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'topK', 4,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        1,
      ),
      mojo.internal.StructField(
        'temperature', 16,
        0,
        mojo.internal.Float,
        0,
        false /* nullable */,
        1,
      ),
    ],
    [[0, 24],[1, 32],]);



/**
 * @record
 */
class SessionParams {
  constructor() {
    /** @type { !number } */
    this.maxTokens;
    /** @type { !Capabilities } */
    this.capabilities;
    /** @type { !number } */
    this.topK;
    /** @type { !number } */
    this.temperature;
  }
}



mojo.internal.Struct(
    InputSpec.$,
    'Input',
    [
      mojo.internal.StructField(
        'pieces', 0,
        0,
        mojo.internal.Array(InputPieceSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Input {
  constructor() {
    /** @type { !Array<!InputPiece> } */
    this.pieces;
  }
}



mojo.internal.Struct(
    AppendOptionsSpec.$,
    'AppendOptions',
    [
      mojo.internal.StructField(
        'input', 0,
        0,
        InputSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'maxTokens', 8,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'inputSource', 12,
        0,
        InputSourceSpec.$,
        0,
        false /* nullable */,
        1,
      ),
    ],
    [[0, 24],[1, 24],]);



/**
 * @record
 */
class AppendOptions {
  constructor() {
    /** @type { !Input } */
    this.input;
    /** @type { !number } */
    this.maxTokens;
    /** @type { !InputSource } */
    this.inputSource;
  }
}



mojo.internal.Struct(
    HintOptionsSpec.$,
    'HintOptions',
    [
      mojo.internal.StructField(
        'constrainedDecodingHint', 0,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class HintOptions {
  constructor() {
    /** @type { !boolean } */
    this.constrainedDecodingHint;
  }
}



mojo.internal.Struct(
    GenerateOptionsSpec.$,
    'GenerateOptions',
    [
      mojo.internal.StructField(
        'maxOutputTokens', 0,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'constraint', 8,
        0,
        ResponseConstraintSpec.$,
        null,
        true /* nullable */,
        2,
      ),
      mojo.internal.StructField(
        'addOutputTokensToContext', 4,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        3,
      ),
      mojo.internal.StructField(
        'enableThinking', 4,
        1,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        9,
      ),
      mojo.internal.StructField(
        'thinkingTokenBudget', 24,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        9,
      ),
    ],
    [[0, 16],[2, 32],[3, 32],[9, 40],]);



/**
 * @record
 */
class GenerateOptions {
  constructor() {
    /** @type { !number } */
    this.maxOutputTokens;
    /** @type { (ResponseConstraint|undefined) } */
    this.constraint;
    /** @type { !boolean } */
    this.addOutputTokensToContext;
    /** @type { !boolean } */
    this.enableThinking;
    /** @type { !number } */
    this.thinkingTokenBudget;
  }
}



mojo.internal.Struct(
    DecisionOptionSpec.$,
    'DecisionOption',
    [
      mojo.internal.StructField(
        'label', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'description', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class DecisionOption {
  constructor() {
    /** @type { !string } */
    this.label;
    /** @type { !string } */
    this.description;
  }
}



mojo.internal.Struct(
    DecisionQuestionSpec.$,
    'DecisionQuestion',
    [
      mojo.internal.StructField(
        'id', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'prompt', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'type', 16,
        0,
        DecisionQuestionTypeSpec.$,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'options', 24,
        0,
        mojo.internal.Array(DecisionOptionSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 40],]);



/**
 * @record
 */
class DecisionQuestion {
  constructor() {
    /** @type { !string } */
    this.id;
    /** @type { !string } */
    this.prompt;
    /** @type { !DecisionQuestionType } */
    this.type;
    /** @type { !Array<!DecisionOption> } */
    this.options;
  }
}



mojo.internal.Struct(
    DecisionQuerySpec.$,
    'DecisionQuery',
    [
      mojo.internal.StructField(
        'sharedContext', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'questions', 8,
        0,
        mojo.internal.Array(DecisionQuestionSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class DecisionQuery {
  constructor() {
    /** @type { !string } */
    this.sharedContext;
    /** @type { !Array<!DecisionQuestion> } */
    this.questions;
  }
}



mojo.internal.Struct(
    DecisionQuestionResultSpec.$,
    'DecisionQuestionResult',
    [
      mojo.internal.StructField(
        'probabilities', 0,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class DecisionQuestionResult {
  constructor() {
    /** @type { !Array<!number> } */
    this.probabilities;
  }
}



mojo.internal.Struct(
    ToolDeclarationSpec.$,
    'ToolDeclaration',
    [
      mojo.internal.StructField(
        'name', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'description', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'inputSchema', 16,
        0,
        DictionaryValueSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class ToolDeclaration {
  constructor() {
    /** @type { !string } */
    this.name;
    /** @type { !string } */
    this.description;
    /** @type { !mojoBase_mojom_DictionaryValue } */
    this.inputSchema;
  }
}



mojo.internal.Struct(
    ToolCallSpec.$,
    'ToolCall',
    [
      mojo.internal.StructField(
        'callId', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'name', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'arguments', 16,
        0,
        DictionaryValueSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class ToolCall {
  constructor() {
    /** @type { !string } */
    this.callId;
    /** @type { !string } */
    this.name;
    /** @type { !mojoBase_mojom_DictionaryValue } */
    this.arguments;
  }
}



mojo.internal.Struct(
    ToolResponseSpec.$,
    'ToolResponse',
    [
      mojo.internal.StructField(
        'callId', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'name', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'result', 16,
        0,
        ValueSpec.$,
        null,
        true /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'errorMessage', 32,
        0,
        mojo.internal.String,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 48],]);



/**
 * @record
 */
class ToolResponse {
  constructor() {
    /** @type { !string } */
    this.callId;
    /** @type { !string } */
    this.name;
    /** @type { (mojoBase_mojom_Value|undefined) } */
    this.result;
    /** @type { (string|undefined) } */
    this.errorMessage;
  }
}



mojo.internal.Struct(
    AudioDataSpec.$,
    'AudioData',
    [
      mojo.internal.StructField(
        'channelCount', 0,
        0,
        mojo.internal.Int32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'sampleRate', 4,
        0,
        mojo.internal.Int32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'frameCount', 8,
        0,
        mojo.internal.Int32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'data', 16,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class AudioData {
  constructor() {
    /** @type { !number } */
    this.channelCount;
    /** @type { !number } */
    this.sampleRate;
    /** @type { !number } */
    this.frameCount;
    /** @type { !Array<!number> } */
    this.data;
  }
}



mojo.internal.Struct(
    SpeechRecognitionResultSpec.$,
    'SpeechRecognitionResult',
    [
      mojo.internal.StructField(
        'transcript', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'isFinal', 8,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'audioStartTime', 16,
        0,
        TimeDeltaSpec.$,
        null,
        true /* nullable */,
        8,
      ),
      mojo.internal.StructField(
        'audioEndTime', 24,
        0,
        TimeDeltaSpec.$,
        null,
        true /* nullable */,
        8,
      ),
    ],
    [[0, 24],[8, 40],]);



/**
 * @record
 */
class SpeechRecognitionResult {
  constructor() {
    /** @type { !string } */
    this.transcript;
    /** @type { !boolean } */
    this.isFinal;
    /** @type { (mojoBase_mojom_TimeDelta|undefined) } */
    this.audioStartTime;
    /** @type { (mojoBase_mojom_TimeDelta|undefined) } */
    this.audioEndTime;
  }
}



mojo.internal.Struct(
    AsrStreamOptionsSpec.$,
    'AsrStreamOptions',
    [
      mojo.internal.StructField(
        'sampleRateHz', 0,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'language', 8,
        0,
        mojo.internal.String,
        null,
        true /* nullable */,
        7,
      ),
    ],
    [[0, 16],[7, 24],]);



/**
 * @record
 */
class AsrStreamOptions {
  constructor() {
    /** @type { !number } */
    this.sampleRateHz;
    /** @type { (string|undefined) } */
    this.language;
  }
}



mojo.internal.Struct(
    DevicePerformanceInfoSpec.$,
    'DevicePerformanceInfo',
    [
      mojo.internal.StructField(
        'performanceClass', 0,
        0,
        PerformanceClassSpec.$,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'vramMb', 8,
        0,
        mojo.internal.Uint64,
        BigInt(0),
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class DevicePerformanceInfo {
  constructor() {
    /** @type { !PerformanceClass } */
    this.performanceClass;
    /** @type { !bigint } */
    this.vramMb;
  }
}



mojo.internal.Struct(
    DeviceInfoSpec.$,
    'DeviceInfo',
    [
      mojo.internal.StructField(
        'vendorId', 0,
        0,
        mojo.internal.Int32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'deviceId', 4,
        0,
        mojo.internal.Int32,
        0,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'driverVersion', 8,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'supportsFp16', 16,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class DeviceInfo {
  constructor() {
    /** @type { !number } */
    this.vendorId;
    /** @type { !number } */
    this.deviceId;
    /** @type { !string } */
    this.driverVersion;
    /** @type { !boolean } */
    this.supportsFp16;
  }
}



mojo.internal.Struct(
    StreamingResponder_OnResponse_ParamsSpec.$,
    'StreamingResponder_OnResponse_Params',
    [
      mojo.internal.StructField(
        'chunk', 0,
        0,
        ResponseChunkSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class StreamingResponder_OnResponse_Params {
  constructor() {
    /** @type { !ResponseChunk } */
    this.chunk;
  }
}



mojo.internal.Struct(
    StreamingResponder_OnComplete_ParamsSpec.$,
    'StreamingResponder_OnComplete_Params',
    [
      mojo.internal.StructField(
        'summary', 0,
        0,
        ResponseSummarySpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class StreamingResponder_OnComplete_Params {
  constructor() {
    /** @type { !ResponseSummary } */
    this.summary;
  }
}



mojo.internal.Struct(
    StreamingResponder_OnToolCalls_ParamsSpec.$,
    'StreamingResponder_OnToolCalls_Params',
    [
      mojo.internal.StructField(
        'toolCalls', 0,
        0,
        mojo.internal.Array(ToolCallSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class StreamingResponder_OnToolCalls_Params {
  constructor() {
    /** @type { !Array<!ToolCall> } */
    this.toolCalls;
  }
}



mojo.internal.Struct(
    ContextClient_OnComplete_ParamsSpec.$,
    'ContextClient_OnComplete_Params',
    [
      mojo.internal.StructField(
        'tokensProcessed', 0,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class ContextClient_OnComplete_Params {
  constructor() {
    /** @type { !number } */
    this.tokensProcessed;
  }
}



mojo.internal.Struct(
    Session_Append_ParamsSpec.$,
    'Session_Append_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        AppendOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'client', 8,
        0,
        mojo.internal.InterfaceProxy(ContextClientRemote),
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class Session_Append_Params {
  constructor() {
    /** @type { !AppendOptions } */
    this.options;
    /** @type { (ContextClientRemote|undefined) } */
    this.client;
  }
}



mojo.internal.Struct(
    Session_Generate_ParamsSpec.$,
    'Session_Generate_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        GenerateOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'responder', 8,
        0,
        mojo.internal.InterfaceProxy(StreamingResponderRemote),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class Session_Generate_Params {
  constructor() {
    /** @type { !GenerateOptions } */
    this.options;
    /** @type { !StreamingResponderRemote } */
    this.responder;
  }
}



mojo.internal.Struct(
    Session_GetSizeInTokens_ParamsSpec.$,
    'Session_GetSizeInTokens_Params',
    [
      mojo.internal.StructField(
        'input', 0,
        0,
        InputSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_GetSizeInTokens_Params {
  constructor() {
    /** @type { !Input } */
    this.input;
  }
}



mojo.internal.Struct(
    Session_GetSizeInTokens_ResponseParamsSpec.$,
    'Session_GetSizeInTokens_ResponseParams',
    [
      mojo.internal.StructField(
        'size', 0,
        0,
        mojo.internal.Uint32,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_GetSizeInTokens_ResponseParams {
  constructor() {
    /** @type { !number } */
    this.size;
  }
}



mojo.internal.Struct(
    Session_Score_ParamsSpec.$,
    'Session_Score_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_Score_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    Session_Score_ResponseParamsSpec.$,
    'Session_Score_ResponseParams',
    [
      mojo.internal.StructField(
        'probability', 0,
        0,
        mojo.internal.Float,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_Score_ResponseParams {
  constructor() {
    /** @type { !number } */
    this.probability;
  }
}



mojo.internal.Struct(
    Session_Clone_ParamsSpec.$,
    'Session_Clone_Params',
    [
      mojo.internal.StructField(
        'session', 0,
        0,
        mojo.internal.InterfaceRequest(SessionPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_Clone_Params {
  constructor() {
    /** @type { !SessionPendingReceiver } */
    this.session;
  }
}



mojo.internal.Struct(
    Session_GetProbabilitiesBlocking_ParamsSpec.$,
    'Session_GetProbabilitiesBlocking_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_GetProbabilitiesBlocking_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    Session_GetProbabilitiesBlocking_ResponseParamsSpec.$,
    'Session_GetProbabilitiesBlocking_ResponseParams',
    [
      mojo.internal.StructField(
        'probabilities', 0,
        0,
        mojo.internal.Array(mojo.internal.Float, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_GetProbabilitiesBlocking_ResponseParams {
  constructor() {
    /** @type { !Array<!number> } */
    this.probabilities;
  }
}



mojo.internal.Struct(
    Session_SetPriority_ParamsSpec.$,
    'Session_SetPriority_Params',
    [
      mojo.internal.StructField(
        'priority', 0,
        0,
        PrioritySpec.$,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_SetPriority_Params {
  constructor() {
    /** @type { !Priority } */
    this.priority;
  }
}



mojo.internal.Struct(
    Session_AsrStream_ParamsSpec.$,
    'Session_AsrStream_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        AsrStreamOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'stream', 8,
        0,
        mojo.internal.InterfaceRequest(AsrStreamInputPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'responder', 12,
        0,
        mojo.internal.InterfaceProxy(AsrStreamResponderRemote),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class Session_AsrStream_Params {
  constructor() {
    /** @type { !AsrStreamOptions } */
    this.options;
    /** @type { !AsrStreamInputPendingReceiver } */
    this.stream;
    /** @type { !AsrStreamResponderRemote } */
    this.responder;
  }
}



mojo.internal.Struct(
    Session_Hint_ParamsSpec.$,
    'Session_Hint_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        HintOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class Session_Hint_Params {
  constructor() {
    /** @type { !HintOptions } */
    this.options;
  }
}



mojo.internal.Struct(
    OnDeviceModel_StartSession_ParamsSpec.$,
    'OnDeviceModel_StartSession_Params',
    [
      mojo.internal.StructField(
        'session', 0,
        0,
        mojo.internal.InterfaceRequest(SessionPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'params', 8,
        0,
        SessionParamsSpec.$,
        null,
        true /* nullable */,
        1,
      ),
    ],
    [[0, 16],[1, 24],]);



/**
 * @record
 */
class OnDeviceModel_StartSession_Params {
  constructor() {
    /** @type { !SessionPendingReceiver } */
    this.session;
    /** @type { (SessionParams|undefined) } */
    this.params;
  }
}



mojo.internal.Struct(
    OnDeviceModel_ClassifyTextSafety_ParamsSpec.$,
    'OnDeviceModel_ClassifyTextSafety_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_ClassifyTextSafety_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    OnDeviceModel_ClassifyTextSafety_ResponseParamsSpec.$,
    'OnDeviceModel_ClassifyTextSafety_ResponseParams',
    [
      mojo.internal.StructField(
        'safetyInfo', 0,
        0,
        SafetyInfoSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_ClassifyTextSafety_ResponseParams {
  constructor() {
    /** @type { (SafetyInfo|undefined) } */
    this.safetyInfo;
  }
}



mojo.internal.Struct(
    OnDeviceModel_DetectLanguage_ParamsSpec.$,
    'OnDeviceModel_DetectLanguage_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_DetectLanguage_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    OnDeviceModel_DetectLanguage_ResponseParamsSpec.$,
    'OnDeviceModel_DetectLanguage_ResponseParams',
    [
      mojo.internal.StructField(
        'result', 0,
        0,
        LanguageDetectionResultSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_DetectLanguage_ResponseParams {
  constructor() {
    /** @type { (LanguageDetectionResult|undefined) } */
    this.result;
  }
}



mojo.internal.Struct(
    OnDeviceModel_LoadAdaptation_ParamsSpec.$,
    'OnDeviceModel_LoadAdaptation_Params',
    [
      mojo.internal.StructField(
        'params', 0,
        0,
        LoadAdaptationParamsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'model', 8,
        0,
        mojo.internal.InterfaceRequest(OnDeviceModelPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class OnDeviceModel_LoadAdaptation_Params {
  constructor() {
    /** @type { !LoadAdaptationParams } */
    this.params;
    /** @type { !OnDeviceModelPendingReceiver } */
    this.model;
  }
}



mojo.internal.Struct(
    OnDeviceModel_LoadAdaptation_ResponseParamsSpec.$,
    'OnDeviceModel_LoadAdaptation_ResponseParams',
    [
      mojo.internal.StructField(
        'result', 0,
        0,
        LoadModelResultSpec.$,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_LoadAdaptation_ResponseParams {
  constructor() {
    /** @type { !LoadModelResult } */
    this.result;
  }
}



mojo.internal.Struct(
    OnDeviceModel_LoadPostProcessor_ParamsSpec.$,
    'OnDeviceModel_LoadPostProcessor_Params',
    [
      mojo.internal.StructField(
        'params', 0,
        0,
        LoadPostProcessorParamsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'model', 8,
        0,
        mojo.internal.InterfaceRequest(OnDeviceModelPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class OnDeviceModel_LoadPostProcessor_Params {
  constructor() {
    /** @type { !LoadPostProcessorParams } */
    this.params;
    /** @type { !OnDeviceModelPendingReceiver } */
    this.model;
  }
}



mojo.internal.Struct(
    OnDeviceModel_LoadPostProcessor_ResponseParamsSpec.$,
    'OnDeviceModel_LoadPostProcessor_ResponseParams',
    [
      mojo.internal.StructField(
        'result', 0,
        0,
        LoadModelResultSpec.$,
        0,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class OnDeviceModel_LoadPostProcessor_ResponseParams {
  constructor() {
    /** @type { !LoadModelResult } */
    this.result;
  }
}



mojo.internal.Struct(
    TextSafetySession_ClassifyTextSafety_ParamsSpec.$,
    'TextSafetySession_ClassifyTextSafety_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetySession_ClassifyTextSafety_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    TextSafetySession_ClassifyTextSafety_ResponseParamsSpec.$,
    'TextSafetySession_ClassifyTextSafety_ResponseParams',
    [
      mojo.internal.StructField(
        'safetyInfo', 0,
        0,
        SafetyInfoSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetySession_ClassifyTextSafety_ResponseParams {
  constructor() {
    /** @type { (SafetyInfo|undefined) } */
    this.safetyInfo;
  }
}



mojo.internal.Struct(
    TextSafetySession_DetectLanguage_ParamsSpec.$,
    'TextSafetySession_DetectLanguage_Params',
    [
      mojo.internal.StructField(
        'text', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetySession_DetectLanguage_Params {
  constructor() {
    /** @type { !string } */
    this.text;
  }
}



mojo.internal.Struct(
    TextSafetySession_DetectLanguage_ResponseParamsSpec.$,
    'TextSafetySession_DetectLanguage_ResponseParams',
    [
      mojo.internal.StructField(
        'result', 0,
        0,
        LanguageDetectionResultSpec.$,
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetySession_DetectLanguage_ResponseParams {
  constructor() {
    /** @type { (LanguageDetectionResult|undefined) } */
    this.result;
  }
}



mojo.internal.Struct(
    TextSafetySession_Clone_ParamsSpec.$,
    'TextSafetySession_Clone_Params',
    [
      mojo.internal.StructField(
        'session', 0,
        0,
        mojo.internal.InterfaceRequest(TextSafetySessionPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetySession_Clone_Params {
  constructor() {
    /** @type { !TextSafetySessionPendingReceiver } */
    this.session;
  }
}



mojo.internal.Struct(
    TextSafetyModel_StartSession_ParamsSpec.$,
    'TextSafetyModel_StartSession_Params',
    [
      mojo.internal.StructField(
        'session', 0,
        0,
        mojo.internal.InterfaceRequest(TextSafetySessionPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class TextSafetyModel_StartSession_Params {
  constructor() {
    /** @type { !TextSafetySessionPendingReceiver } */
    this.session;
  }
}



mojo.internal.Struct(
    DecisionSession_Decide_ParamsSpec.$,
    'DecisionSession_Decide_Params',
    [
      mojo.internal.StructField(
        'input', 0,
        0,
        mojo.internal.String,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class DecisionSession_Decide_Params {
  constructor() {
    /** @type { !string } */
    this.input;
  }
}



mojo.internal.Struct(
    DecisionSession_Decide_ResponseParamsSpec.$,
    'DecisionSession_Decide_ResponseParams',
    [
      mojo.internal.StructField(
        'results', 0,
        0,
        mojo.internal.Array(DecisionQuestionResultSpec.$, false),
        null,
        true /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class DecisionSession_Decide_ResponseParams {
  constructor() {
    /** @type { (Array<!DecisionQuestionResult>|undefined) } */
    this.results;
  }
}



mojo.internal.Struct(
    DecisionModel_StartSession_ParamsSpec.$,
    'DecisionModel_StartSession_Params',
    [
      mojo.internal.StructField(
        'query', 0,
        0,
        DecisionQuerySpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'session', 8,
        0,
        mojo.internal.InterfaceRequest(DecisionSessionPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 24],]);



/**
 * @record
 */
class DecisionModel_StartSession_Params {
  constructor() {
    /** @type { !DecisionQuery } */
    this.query;
    /** @type { !DecisionSessionPendingReceiver } */
    this.session;
  }
}



mojo.internal.Struct(
    AsrStreamResponder_OnResponse_ParamsSpec.$,
    'AsrStreamResponder_OnResponse_Params',
    [
      mojo.internal.StructField(
        'result', 0,
        0,
        mojo.internal.Array(SpeechRecognitionResultSpec.$, false),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class AsrStreamResponder_OnResponse_Params {
  constructor() {
    /** @type { !Array<!SpeechRecognitionResult> } */
    this.result;
  }
}



mojo.internal.Struct(
    AsrStreamInput_AddAudioChunk_ParamsSpec.$,
    'AsrStreamInput_AddAudioChunk_Params',
    [
      mojo.internal.StructField(
        'data', 0,
        0,
        AudioDataSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class AsrStreamInput_AddAudioChunk_Params {
  constructor() {
    /** @type { !AudioData } */
    this.data;
  }
}

mojo.internal.Union(
    InputPieceSpec.$, 'InputPiece',
    {
      'token': {
        'ordinal': 0,
        'type': TokenSpec.$,
      },
      'text': {
        'ordinal': 1,
        'type': mojo.internal.String,
      },
      'bitmap': {
        'ordinal': 2,
        'type': BitmapWithArbitraryBppSpec.$,
      },
      'unknownType': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
      },
      'audio': {
        'ordinal': 4,
        'type': AudioDataSpec.$,
      },
      'toolDeclaration': {
        'ordinal': 5,
        'type': ToolDeclarationSpec.$,
      },
      'toolResponse': {
        'ordinal': 6,
        'type': ToolResponseSpec.$,
      },
      'toolCall': {
        'ordinal': 7,
        'type': ToolCallSpec.$,
      },
    });

/**
 * @typedef { {
 *   token: (!Token|undefined),
 *   text: (!string|undefined),
 *   bitmap: (!skia_mojom_BitmapWithArbitraryBpp|undefined),
 *   unknownType: (!boolean|undefined),
 *   audio: (!AudioData|undefined),
 *   toolDeclaration: (!ToolDeclaration|undefined),
 *   toolResponse: (!ToolResponse|undefined),
 *   toolCall: (!ToolCall|undefined),
 * } }
 */
const InputPiece = {};
mojo.internal.Union(
    ResponseConstraintSpec.$, 'ResponseConstraint',
    {
      'jsonSchema': {
        'ordinal': 0,
        'type': mojo.internal.String,
      },
      'regex': {
        'ordinal': 1,
        'type': mojo.internal.String,
      },
      'unknownType': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
      },
    });

/**
 * @typedef { {
 *   jsonSchema: (!string|undefined),
 *   regex: (!string|undefined),
 *   unknownType: (!boolean|undefined),
 * } }
 */
const ResponseConstraint = {};

;// ../out/code_search_mac_Component_x64/gen/brave/components/local_ai/core/on_device_speech_recognition.mojom.m.js
// brave/components/local_ai/core/on_device_speech_recognition.mojom.m.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class SpeechRecognitionFactoryPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'local_ai.mojom.SpeechRecognitionFactory', scope);
  }
}

/** @interface */
class SpeechRecognitionFactoryInterface {
  
  /**
   * @param { !OrtModelFiles } files
   * @return {!Promise<{
        success: !boolean,
   *  }>}
   */

  init(files) {}
  
  /**
   * @param { !onDeviceModel_mojom_AsrStreamOptions } options
   * @param { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } stream
   * @param { !onDeviceModel_mojom_AsrStreamResponderRemote } responder
   */

  createAsrStream(options, stream, responder) {}
}

/**
 * @implements { SpeechRecognitionFactoryInterface }
 */
class SpeechRecognitionFactoryRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!SpeechRecognitionFactoryPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          SpeechRecognitionFactoryPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!SpeechRecognitionFactoryPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !OrtModelFiles } files
   * @return {!Promise<{
        success: !boolean,
   *  }>}
   */

  init(
      files) {
    return this.proxy.sendMessage(
        0,
        SpeechRecognitionFactory_Init_ParamsSpec.$,
        SpeechRecognitionFactory_Init_ResponseParamsSpec.$,
        [
          files
        ],
        false);
  }

  
  /**
   * @param { !onDeviceModel_mojom_AsrStreamOptions } options
   * @param { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } stream
   * @param { !onDeviceModel_mojom_AsrStreamResponderRemote } responder
   */

  createAsrStream(
      options,
      stream,
      responder) {
    this.proxy.sendMessage(
        1,
        SpeechRecognitionFactory_CreateAsrStream_ParamsSpec.$,
        null,
        [
          options,
          stream,
          responder
        ],
        false);
  }
}

/**
 * An object which receives request messages for the SpeechRecognitionFactory
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class SpeechRecognitionFactoryReceiver {
  /**
   * @param {!SpeechRecognitionFactoryInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!SpeechRecognitionFactoryRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        SpeechRecognitionFactoryRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SpeechRecognitionFactoryRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        SpeechRecognitionFactory_Init_ParamsSpec.$,
        SpeechRecognitionFactory_Init_ResponseParamsSpec.$,
        impl.init.bind(impl),
        false);
    this.helper_internal_.registerHandler(
        1,
        SpeechRecognitionFactory_CreateAsrStream_ParamsSpec.$,
        null,
        impl.createAsrStream.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class SpeechRecognitionFactory {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "local_ai.mojom.SpeechRecognitionFactory";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!SpeechRecognitionFactoryRemote}
   */
  static getRemote() {
    let remote = new SpeechRecognitionFactoryRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the SpeechRecognitionFactory
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class SpeechRecognitionFactoryCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      SpeechRecognitionFactoryRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SpeechRecognitionFactoryRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.init =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        SpeechRecognitionFactory_Init_ParamsSpec.$,
        SpeechRecognitionFactory_Init_ResponseParamsSpec.$,
        this.init.createReceiverHandler(true /* expectsResponse */),
        false);
    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.createAsrStream =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        1,
        SpeechRecognitionFactory_CreateAsrStream_ParamsSpec.$,
        null,
        this.createAsrStream.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class SpeechRecognitionFactoryHostPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'local_ai.mojom.SpeechRecognitionFactoryHost', scope);
  }
}

/** @interface */
class SpeechRecognitionFactoryHostInterface {
  
  /**
   * @param { !SpeechRecognitionFactoryRemote } factory
   */

  registerFactory(factory) {}
}

/**
 * @implements { SpeechRecognitionFactoryHostInterface }
 */
class SpeechRecognitionFactoryHostRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!SpeechRecognitionFactoryHostPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          SpeechRecognitionFactoryHostPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!SpeechRecognitionFactoryHostPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !SpeechRecognitionFactoryRemote } factory
   */

  registerFactory(
      factory) {
    this.proxy.sendMessage(
        0,
        SpeechRecognitionFactoryHost_RegisterFactory_ParamsSpec.$,
        null,
        [
          factory
        ],
        false);
  }
}

/**
 * An object which receives request messages for the SpeechRecognitionFactoryHost
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class SpeechRecognitionFactoryHostReceiver {
  /**
   * @param {!SpeechRecognitionFactoryHostInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!SpeechRecognitionFactoryHostRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        SpeechRecognitionFactoryHostRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SpeechRecognitionFactoryHostRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        SpeechRecognitionFactoryHost_RegisterFactory_ParamsSpec.$,
        null,
        impl.registerFactory.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class SpeechRecognitionFactoryHost {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "local_ai.mojom.SpeechRecognitionFactoryHost";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!SpeechRecognitionFactoryHostRemote}
   */
  static getRemote() {
    let remote = new SpeechRecognitionFactoryHostRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the SpeechRecognitionFactoryHost
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class SpeechRecognitionFactoryHostCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      SpeechRecognitionFactoryHostRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!SpeechRecognitionFactoryHostRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.registerFactory =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        SpeechRecognitionFactoryHost_RegisterFactory_ParamsSpec.$,
        null,
        this.registerFactory.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}


/**
 * @implements {mojo.internal.interfaceSupport.PendingReceiver}
 */
class AsrSessionPendingReceiver {
  /**
   * @param {!MojoHandle|!mojo.internal.interfaceSupport.Endpoint} handle
   */
  constructor(handle) {
    /** @public {!mojo.internal.interfaceSupport.Endpoint} */
    this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
  }

  /** @param {string=} scope */
  bindInBrowser(scope = 'context') {
    mojo.internal.interfaceSupport.bind(
        this.handle, 'local_ai.mojom.AsrSession', scope);
  }
}

/** @interface */
class AsrSessionInterface {
  
  /**
   * @param { !onDeviceModel_mojom_AsrStreamOptions } options
   * @param { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } stream
   * @param { !onDeviceModel_mojom_AsrStreamResponderRemote } responder
   */

  start(options, stream, responder) {}
}

/**
 * @implements { AsrSessionInterface }
 */
class AsrSessionRemote {
  /** @param {MojoHandle|mojo.internal.interfaceSupport.Endpoint=} handle */
  constructor(handle = undefined) {
    /**
     * @private {!mojo.internal.interfaceSupport.InterfaceRemoteBase<!AsrSessionPendingReceiver>}
     */
    this.proxy =
        new mojo.internal.interfaceSupport.InterfaceRemoteBase(
          AsrSessionPendingReceiver,
          handle);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper<!AsrSessionPendingReceiver>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);

    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
  }

  
  /**
   * @param { !onDeviceModel_mojom_AsrStreamOptions } options
   * @param { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } stream
   * @param { !onDeviceModel_mojom_AsrStreamResponderRemote } responder
   */

  start(
      options,
      stream,
      responder) {
    this.proxy.sendMessage(
        0,
        AsrSession_Start_ParamsSpec.$,
        null,
        [
          options,
          stream,
          responder
        ],
        false);
  }
}

/**
 * An object which receives request messages for the AsrSession
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
class AsrSessionReceiver {
  /**
   * @param {!AsrSessionInterface } impl
   */
  constructor(impl) {
    /** @private {!mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal<!AsrSessionRemote>} */
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
        AsrSessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrSessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);


    this.helper_internal_.registerHandler(
        0,
        AsrSession_Start_ParamsSpec.$,
        null,
        impl.start.bind(impl),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }
}

class AsrSession {
  /**
   * @return {!string}
   */
  static get $interfaceName() {
    return "local_ai.mojom.AsrSession";
  }

  /**
   * Returns a remote for this interface which sends messages to the browser.
   * The browser must have an interface request binder registered for this
   * interface and accessible to the calling document's frame.
   *
   * @return {!AsrSessionRemote}
   */
  static getRemote() {
    let remote = new AsrSessionRemote;
    remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
    return remote;
  }
}


/**
 * An object which receives request messages for the AsrSession
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class AsrSessionCallbackRouter {
  constructor() {
    this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(
      AsrSessionRemote);

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceReceiverHelper<!AsrSessionRemote>}
     */
    this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);

    this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;

    /**
     * @public {!mojo.internal.interfaceSupport.InterfaceCallbackReceiver}
     */
    this.start =
        new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(
            this.router_);

    this.helper_internal_.registerHandler(
        0,
        AsrSession_Start_ParamsSpec.$,
        null,
        this.start.createReceiverHandler(false /* expectsResponse */),
        false);
    /** @public {!mojo.internal.interfaceSupport.ConnectionErrorEventRouter} */
    this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
  }

  /**
   * @param {number} id An ID returned by a prior call to addListener.
   * @return {boolean} True iff the identified listener was found and removed.
   */
  removeListener(id) {
    return this.router_.removeListener(id);
  }
}

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const OrtModelFilesSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SpeechRecognitionFactory_Init_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SpeechRecognitionFactory_Init_ResponseParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SpeechRecognitionFactory_CreateAsrStream_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const SpeechRecognitionFactoryHost_RegisterFactory_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };

/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const AsrSession_Start_ParamsSpec =
    { $: /** @type {!mojo.internal.MojomType} */ ({}) };




mojo.internal.Struct(
    OrtModelFilesSpec.$,
    'OrtModelFiles',
    [
      mojo.internal.StructField(
        'encoder', 0,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'encoderData', 16,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'decoder', 32,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'decoderData', 48,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'tokens', 64,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'melFilters', 80,
        0,
        BigBufferSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 104],]);



/**
 * @record
 */
class OrtModelFiles {
  constructor() {
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.encoder;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.encoderData;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.decoder;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.decoderData;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.tokens;
    /** @type { !mojoBase_mojom_BigBuffer } */
    this.melFilters;
  }
}



mojo.internal.Struct(
    SpeechRecognitionFactory_Init_ParamsSpec.$,
    'SpeechRecognitionFactory_Init_Params',
    [
      mojo.internal.StructField(
        'files', 0,
        0,
        OrtModelFilesSpec.$,
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class SpeechRecognitionFactory_Init_Params {
  constructor() {
    /** @type { !OrtModelFiles } */
    this.files;
  }
}



mojo.internal.Struct(
    SpeechRecognitionFactory_Init_ResponseParamsSpec.$,
    'SpeechRecognitionFactory_Init_ResponseParams',
    [
      mojo.internal.StructField(
        'success', 0,
        0,
        mojo.internal.Bool,
        false,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class SpeechRecognitionFactory_Init_ResponseParams {
  constructor() {
    /** @type { !boolean } */
    this.success;
  }
}



mojo.internal.Struct(
    SpeechRecognitionFactory_CreateAsrStream_ParamsSpec.$,
    'SpeechRecognitionFactory_CreateAsrStream_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        AsrStreamOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'stream', 8,
        0,
        mojo.internal.InterfaceRequest(AsrStreamInputPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'responder', 12,
        0,
        mojo.internal.InterfaceProxy(AsrStreamResponderRemote),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class SpeechRecognitionFactory_CreateAsrStream_Params {
  constructor() {
    /** @type { !onDeviceModel_mojom_AsrStreamOptions } */
    this.options;
    /** @type { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } */
    this.stream;
    /** @type { !onDeviceModel_mojom_AsrStreamResponderRemote } */
    this.responder;
  }
}



mojo.internal.Struct(
    SpeechRecognitionFactoryHost_RegisterFactory_ParamsSpec.$,
    'SpeechRecognitionFactoryHost_RegisterFactory_Params',
    [
      mojo.internal.StructField(
        'factory', 0,
        0,
        mojo.internal.InterfaceProxy(SpeechRecognitionFactoryRemote),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 16],]);



/**
 * @record
 */
class SpeechRecognitionFactoryHost_RegisterFactory_Params {
  constructor() {
    /** @type { !SpeechRecognitionFactoryRemote } */
    this.factory;
  }
}



mojo.internal.Struct(
    AsrSession_Start_ParamsSpec.$,
    'AsrSession_Start_Params',
    [
      mojo.internal.StructField(
        'options', 0,
        0,
        AsrStreamOptionsSpec.$,
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'stream', 8,
        0,
        mojo.internal.InterfaceRequest(AsrStreamInputPendingReceiver),
        null,
        false /* nullable */,
        0,
      ),
      mojo.internal.StructField(
        'responder', 12,
        0,
        mojo.internal.InterfaceProxy(AsrStreamResponderRemote),
        null,
        false /* nullable */,
        0,
      ),
    ],
    [[0, 32],]);



/**
 * @record
 */
class AsrSession_Start_Params {
  constructor() {
    /** @type { !onDeviceModel_mojom_AsrStreamOptions } */
    this.options;
    /** @type { !onDeviceModel_mojom_AsrStreamInputPendingReceiver } */
    this.stream;
    /** @type { !onDeviceModel_mojom_AsrStreamResponderRemote } */
    this.responder;
  }
}


;// ./node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs
/*!
 * ONNX Runtime Web v1.26.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Jt=Object.defineProperty;var Xa=Object.getOwnPropertyDescriptor;var Qa=Object.getOwnPropertyNames;var Za=Object.prototype.hasOwnProperty;var qt=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var N=(n,t)=>()=>(n&&(t=n(n=0)),t);var ut=(n,t)=>{for(var a in t)Jt(n,a,{get:t[a],enumerable:!0})},Ka=(n,t,a,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Qa(t))!Za.call(n,o)&&o!==a&&Jt(n,o,{get:()=>t[o],enumerable:!(u=Xa(t,o))||u.enumerable});return n};var Xt=n=>Ka(Jt({},"__esModule",{value:!0}),n);var ft,Be,qe,es,dr,Qt=N(()=>{"use strict";ft=new Map,Be=[],qe=(n,t,a)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let u=ft.get(n);if(u===void 0)ft.set(n,{backend:t,priority:a});else{if(u.priority>a)return;if(u.priority===a&&u.backend!==t)throw new Error(`cannot register backend "${n}" using priority ${a}`)}if(a>=0){let o=Be.indexOf(n);o!==-1&&Be.splice(o,1);for(let d=0;d<Be.length;d++)if(ft.get(Be[d]).priority<=a){Be.splice(d,0,n);return}Be.push(n)}return}throw new TypeError("not a valid backend")},es=async n=>{let t=ft.get(n);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let a=!!t.initPromise;try{return a||(t.initPromise=t.backend.init(n)),await t.initPromise,t.initialized=!0,t.backend}catch(u){return a||(t.error=`${u}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},dr=async n=>{let t=n.executionProviders||[],a=t.map(m=>typeof m=="string"?m:m.name),u=a.length===0?Be:a,o,d=[],c=new Set;for(let m of u){let h=await es(m);typeof h=="string"?d.push({name:m,err:h}):(o||(o=h),o===h&&c.add(m))}if(!o)throw new Error(`no available backend found. ERR: ${d.map(m=>`[${m.name}] ${m.err}`).join(", ")}`);for(let{name:m,err:h}of d)a.includes(m)&&console.warn(`removing requested execution provider "${m}" from session options because it is not available: ${h}`);let l=t.filter(m=>c.has(typeof m=="string"?m:m.name));return[o,new Proxy(n,{get:(m,h)=>h==="executionProviders"?l:Reflect.get(m,h)})]}});var pr=N(()=>{"use strict";Qt()});var mr,hr=N(()=>{"use strict";mr="1.26.0"});var wr,J,Zt=N(()=>{"use strict";hr();wr="warning",J={wasm:{},webgl:{},webgpu:{},versions:{common:mr},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);wr=n}},get logLevel(){return wr}};Object.defineProperty(J,"logLevel",{enumerable:!0})});var Y,br=N(()=>{"use strict";Zt();Y=J});var yr,gr,Er=N(()=>{"use strict";yr=(n,t)=>{let a=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);a.width=n.dims[3],a.height=n.dims[2];let u=a.getContext("2d");if(u!=null){let o,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(o=n.dims[2],d=n.dims[3]):(o=n.dims[3],d=n.dims[2]);let c=t?.format!==void 0?t.format:"RGB",l=t?.norm,m,h;l===void 0||l.mean===void 0?m=[255,255,255,255]:typeof l.mean=="number"?m=[l.mean,l.mean,l.mean,l.mean]:(m=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(m[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let g=d*o,b=0,y=g,T=g*2,I=-1;c==="RGBA"?(b=0,y=g,T=g*2,I=g*3):c==="RGB"?(b=0,y=g,T=g*2):c==="RBG"&&(b=0,T=g,y=g*2);for(let D=0;D<d;D++)for(let z=0;z<o;z++){let v=(n.data[b++]-h[0])*m[0],O=(n.data[y++]-h[1])*m[1],F=(n.data[T++]-h[2])*m[2],_=I===-1?255:(n.data[I++]-h[3])*m[3];u.fillStyle="rgba("+v+","+O+","+F+","+_+")",u.fillRect(z,D,1,1)}if("toDataURL"in a)return a.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},gr=(n,t)=>{let a=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),u;if(a!=null){let o,d,c;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(o=n.dims[2],d=n.dims[1],c=n.dims[3]):(o=n.dims[3],d=n.dims[2],c=n.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",m=t?.norm,h,g;m===void 0||m.mean===void 0?h=[255,255,255,255]:typeof m.mean=="number"?h=[m.mean,m.mean,m.mean,m.mean]:(h=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(h[3]=m.mean[3])),m===void 0||m.bias===void 0?g=[0,0,0,0]:typeof m.bias=="number"?g=[m.bias,m.bias,m.bias,m.bias]:(g=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(g[3]=m.bias[3]));let b=d*o;if(t!==void 0&&(t.format!==void 0&&c===4&&t.format!=="RGBA"||c===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,T=0,I=1,D=2,z=3,v=0,O=b,F=b*2,_=-1;l==="RGBA"?(v=0,O=b,F=b*2,_=b*3):l==="RGB"?(v=0,O=b,F=b*2):l==="RBG"&&(v=0,F=b,O=b*2),u=a.createImageData(o,d);for(let k=0;k<d*o;T+=y,I+=y,D+=y,z+=y,k++)u.data[T]=(n.data[v++]-g[0])*h[0],u.data[I]=(n.data[O++]-g[1])*h[1],u.data[D]=(n.data[F++]-g[2])*h[2],u.data[z]=_===-1?255:(n.data[_++]-g[3])*h[3]}else throw new Error("Can not access image data");return u}});var Kt,Tr,Sr,vr,Or,Ar,Ir=N(()=>{"use strict";ct();Kt=(n,t)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:a,width:u}=t,o=t.norm??{mean:255,bias:0},d,c;typeof o.mean=="number"?d=[o.mean,o.mean,o.mean,o.mean]:d=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?c=[o.bias,o.bias,o.bias,o.bias]:c=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",m=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",h=a*u,g=m==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),b=4,y=0,T=1,I=2,D=3,z=0,v=h,O=h*2,F=-1;l==="RGB"&&(b=3,y=0,T=1,I=2,D=-1),m==="RGBA"?F=h*3:m==="RBG"?(z=0,O=h,v=h*2):m==="BGR"&&(O=0,v=h,z=h*2);for(let k=0;k<h;k++,y+=b,I+=b,T+=b,D+=b)g[z++]=(n[y]+c[0])/d[0],g[v++]=(n[T]+c[1])/d[1],g[O++]=(n[I]+c[2])/d[2],F!==-1&&D!==-1&&(g[F++]=(n[D]+c[3])/d[3]);return m==="RGBA"?new Q("float32",g,[1,4,a,u]):new Q("float32",g,[1,3,a,u])},Tr=async(n,t)=>{let a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,u=typeof ImageData<"u"&&n instanceof ImageData,o=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,d=typeof n=="string",c,l=t??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=g=>typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||g instanceof OffscreenCanvas?g.getContext("2d"):null;if(a){let g=m();g.width=n.width,g.height=n.height;let b=h(g);if(b!=null){let y=n.height,T=n.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,T=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=T}else l.tensorFormat="RGBA",l.height=y,l.width=T;b.drawImage(n,0,0),c=b.getImageData(0,0,T,y).data}else throw new Error("Can not access image data")}else if(u){let g,b;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(g=t.resizedHeight,b=t.resizedWidth):(g=n.height,b=n.width),t!==void 0&&(l=t),l.format="RGBA",l.height=g,l.width=b,t!==void 0){let y=m();y.width=b,y.height=g;let T=h(y);if(T!=null)T.putImageData(n,0,0),c=T.getImageData(0,0,b,g).data;else throw new Error("Can not access image data")}else c=n.data}else if(o){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let g=m();g.width=n.width,g.height=n.height;let b=h(g);if(b!=null){let y=n.height,T=n.width;return b.drawImage(n,0,0,T,y),c=b.getImageData(0,0,T,y).data,l.height=y,l.width=T,Kt(c,l)}else throw new Error("Can not access image data")}else{if(d)return new Promise((g,b)=>{let y=m(),T=h(y);if(!n||!T)return b();let I=new Image;I.crossOrigin="Anonymous",I.src=n,I.onload=()=>{y.width=I.width,y.height=I.height,T.drawImage(I,0,0,y.width,y.height);let D=T.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,g(Kt(D.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(c!==void 0)return Kt(c,l);throw new Error("Input data provided is not supported - aborted tensor creation")},Sr=(n,t)=>{let{width:a,height:u,download:o,dispose:d}=t,c=[1,u,a,4];return new Q({location:"texture",type:"float32",texture:n,dims:c,download:o,dispose:d})},vr=(n,t)=>{let{dataType:a,dims:u,download:o,dispose:d}=t;return new Q({location:"gpu-buffer",type:a??"float32",gpuBuffer:n,dims:u,download:o,dispose:d})},Or=(n,t)=>{let{dataType:a,dims:u,download:o,dispose:d}=t;return new Q({location:"ml-tensor",type:a??"float32",mlTensor:n,dims:u,download:o,dispose:d})},Ar=(n,t,a)=>new Q({location:"cpu-pinned",type:n,data:t,dims:a??[t.length]})});var Le,Xe,Br,Lr,_r=N(()=>{"use strict";Le=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Xe=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Br=!1,Lr=()=>{if(!Br){Br=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,a=globalThis.Float16Array,u=typeof a<"u"&&a.from;n&&(Le.set("int64",BigInt64Array),Xe.set(BigInt64Array,"int64")),t&&(Le.set("uint64",BigUint64Array),Xe.set(BigUint64Array,"uint64")),u?(Le.set("float16",a),Xe.set(a,"float16")):Le.set("float16",Uint16Array)}}});var Pr,Dr,Ur=N(()=>{"use strict";ct();Pr=n=>{let t=1;for(let a=0;a<n.length;a++){let u=n[a];if(typeof u!="number"||!Number.isSafeInteger(u))throw new TypeError(`dims[${a}] must be an integer, got: ${u}`);if(u<0)throw new RangeError(`dims[${a}] must be a non-negative integer, got: ${u}`);t*=u}return t},Dr=(n,t)=>{switch(n.location){case"cpu":return new Q(n.type,n.data,t);case"cpu-pinned":return new Q({location:"cpu-pinned",data:n.data,type:n.type,dims:t});case"texture":return new Q({location:"texture",texture:n.texture,type:n.type,dims:t});case"gpu-buffer":return new Q({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:t});case"ml-tensor":return new Q({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}});var Q,ct=N(()=>{"use strict";Er();Ir();_r();Ur();Q=class{constructor(t,a,u){Lr();let o,d;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,o=t.type,d=t.dims,t.location){case"cpu-pinned":{let l=Le.get(o);if(!l)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(t.data instanceof l))throw new TypeError(`buffer should be of type ${l.name}`);this.cpuData=t.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let l,m;if(typeof t=="string")if(o=t,m=u,t==="string"){if(!Array.isArray(a))throw new TypeError("A string tensor's data must be a string array.");l=a}else{let h=Le.get(t);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(a)){if(t==="float16"&&h===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${h.name} as data.`);t==="uint64"||t==="int64"?l=h.from(a,BigInt):l=h.from(a)}else if(a instanceof h)l=a;else if(a instanceof Uint8ClampedArray)if(t==="uint8")l=Uint8Array.from(a);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&a instanceof Uint16Array&&h!==Uint16Array)l=new globalThis.Float16Array(a.buffer,a.byteOffset,a.length);else throw new TypeError(`A ${o} tensor's data must be type of ${h}`)}else if(m=a,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof t[0];if(h==="string")o="string",l=t;else if(h==="boolean")o="bool",l=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(t instanceof Uint8ClampedArray)o="uint8",l=Uint8Array.from(t);else{let h=Xe.get(t.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);o=h,l=t}if(m===void 0)m=[l.length];else if(!Array.isArray(m))throw new TypeError("A tensor's dims must be a number array");d=m,this.cpuData=l,this.dataLocation="cpu"}let c=Pr(d);if(this.cpuData&&c!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(c/2)===this.cpuData.length))throw new Error(`Tensor's size(${c}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=d,this.size=c}static async fromImage(t,a){return Tr(t,a)}static fromTexture(t,a){return Sr(t,a)}static fromGpuBuffer(t,a){return vr(t,a)}static fromMLTensor(t,a){return Or(t,a)}static fromPinnedBuffer(t,a,u){return Ar(t,a,u)}toDataURL(t){return yr(this,t)}toImageData(t){return gr(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let a=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=a,t&&this.disposer&&(this.disposer(),this.disposer=void 0),a}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Dr(this,t)}}});var de,en=N(()=>{"use strict";ct();de=Q});var xr,Mr,_e,Pe,De,Ue,tn=N(()=>{"use strict";Zt();xr=(n,t)=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeStamp(`${n}::ORT::${t}`)},Mr=(n,t)=>{let a=new Error().stack?.split(/\r\n|\r|\n/g)||[],u=!1;for(let o=0;o<a.length;o++){if(u&&!a[o].includes("TRACE_FUNC")){let d=`FUNC_${n}::${a[o].trim().split(" ")[1]}`;t&&(d+=`::${t}`),xr("CPU",d);return}a[o].includes("TRACE_FUNC")&&(u=!0)}},_e=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Mr("BEGIN",n)},Pe=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||Mr("END",n)},De=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.time(`ORT::${n}`)},Ue=n=>{(typeof J.trace>"u"?!J.wasm.trace:!J.trace)||console.timeEnd(`ORT::${n}`)}});var lt,Cr=N(()=>{"use strict";Qt();en();tn();lt=class n{constructor(t){this.handler=t}async run(t,a,u){_e(),De("InferenceSession.run");let o={},d={};if(typeof t!="object"||t===null||t instanceof de||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let c=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof de)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");c=!1;for(let h of a){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(`'fetches' contains invalid output name: ${h}.`);o[h]=null}if(typeof u=="object"&&u!==null)d=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,g=Object.getOwnPropertyNames(a);for(let b of this.outputNames)if(g.indexOf(b)!==-1){let y=a[b];(y===null||y instanceof de)&&(h=!0,c=!1,o[b]=y)}if(h){if(typeof u=="object"&&u!==null)d=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else d=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof t[h]>"u")throw new Error(`input '${h}' is missing in 'feeds'.`);if(c)for(let h of this.outputNames)o[h]=null;let l=await this.handler.run(t,o,d),m={};for(let h in l)if(Object.hasOwnProperty.call(l,h)){let g=l[h];g instanceof de?m[h]=g:m[h]=new de(g.type,g.data,g.dims)}return Ue("InferenceSession.run"),Pe(),m}async release(){return this.handler.dispose()}static async create(t,a,u,o){_e(),De("InferenceSession.create");let d,c={};if(typeof t=="string"){if(d=t,typeof a=="object"&&a!==null)c=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof a=="object"&&a!==null)c=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let g=t,b=0,y=t.byteLength;if(typeof a=="object"&&a!==null)c=a;else if(typeof a=="number"){if(b=a,!Number.isSafeInteger(b))throw new RangeError("'byteOffset' must be an integer.");if(b<0||b>=g.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${g.byteLength}).`);if(y=t.byteLength-b,typeof u=="number"){if(y=u,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||b+y>g.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${g.byteLength-b}].`);if(typeof o=="object"&&o!==null)c=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof u<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof a<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(g,b,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,m]=await dr(c),h=await l.createInferenceSessionHandler(d,m);return Ue("InferenceSession.create"),Pe(),new n(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}});var ts,Rr=N(()=>{"use strict";Cr();ts=lt});var Fr=N(()=>{"use strict"});var Nr=N(()=>{"use strict"});var kr=N(()=>{"use strict"});var Wr=N(()=>{"use strict"});var nn={};ut(nn,{InferenceSession:()=>ts,TRACE:()=>xr,TRACE_EVENT_BEGIN:()=>De,TRACE_EVENT_END:()=>Ue,TRACE_FUNC_BEGIN:()=>_e,TRACE_FUNC_END:()=>Pe,Tensor:()=>de,env:()=>Y,registerBackend:()=>qe});var Te=N(()=>{"use strict";pr();br();Rr();en();Fr();Nr();tn();kr();Wr()});var dt=N(()=>{"use strict"});var Hr={};ut(Hr,{default:()=>ns});var $r,zr,ns,jr=N(()=>{"use strict";rn();xe();pt();$r="ort-wasm-proxy-worker",zr=globalThis.self?.name===$r;zr&&(self.onmessage=n=>{let{type:t,in:a}=n.data;try{switch(t){case"init-wasm":mt(a.wasm).then(()=>{ht(a).then(()=>{postMessage({type:t})},u=>{postMessage({type:t,err:u})})},u=>{postMessage({type:t,err:u})});break;case"init-ep":{let{epName:u,env:o}=a;wt(o,u).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:u}=a,o=Qe(u);postMessage({type:t,out:o});break}case"create":{let{model:u,options:o}=a;bt(u,o).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":yt(a),postMessage({type:t});break;case"run":{let{sessionId:u,inputIndices:o,inputs:d,outputIndices:c,options:l}=a;gt(u,o,d,c,new Array(c.length).fill(null),l).then(m=>{m.some(h=>h[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:m},Tt([...d,...m]))},m=>{postMessage({type:t,err:m})});break}case"end-profiling":Et(a),postMessage({type:t});break;default:}}catch(u){postMessage({type:t,err:u})}});ns=zr?null:n=>new Worker(n??oe,{type:"module",name:$r})});var Yr={};ut(Yr,{default:()=>rs});async function Vr(n={}){var t=n,a=!!globalThis.window,u=!!globalThis.WorkerGlobalScope,o=u&&self.name?.startsWith("em-pthread");t.mountExternalData=(e,r)=>{e.startsWith("./")&&(e=e.substring(2)),(t.Rb||(t.Rb=new Map)).set(e,r)},t.unmountExternalData=()=>{delete t.Rb},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;var d,c,l=(e,r)=>{throw r},m="file:///workspace/src/brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs",h="";if(a||u){try{h=new URL(".",m).href}catch{}u&&(c=e=>{var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),d=async e=>{if(k(e))return new Promise((i,s)=>{var f=new XMLHttpRequest;f.open("GET",e,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?i(f.response):s(f.status)},f.onerror=s,f.send(null)});var r=await fetch(e,{credentials:"same-origin"});if(r.ok)return r.arrayBuffer();throw Error(r.status+" : "+r.url)}}var g,b,y,T,I,D,z=console.log.bind(console),v=console.error.bind(console),O=z,F=v,_=!1,k=e=>e.startsWith("file://");function w(){ge.buffer!=j.buffer&&ee()}if(o){let e=function(r){try{var i=r.data,s=i.Pb;if(s==="load"){let f=[];self.onmessage=p=>f.push(p),D=()=>{postMessage({Pb:"loaded"});for(let p of f)e(p);self.onmessage=e};for(let p of i.Zb)t[p]&&!t[p].proxy||(t[p]=(...E)=>{postMessage({Pb:"callHandler",Yb:p,args:E})},p=="print"&&(O=t[p]),p=="printErr"&&(F=t[p]));ge=i.dc,ee(),b=i.ec,Ut(),it()}else if(s==="run"){(function(f){var p=(w(),W)[f+52>>>2>>>0];f=(w(),W)[f+56>>>2>>>0],sr(p,p-f),P(p)})(i.Ob),zt(i.Ob,0,0,1,0,0),wn(),Ft(i.Ob),Z||=!0;try{Ao(i.bc,i.Tb)}catch(f){if(f!="unwind")throw f}}else i.target!=="setimmediate"&&(s==="checkMailbox"?Z&&rt():s&&(F(`worker: received unknown command ${s}`),F(i)))}catch(f){throw tr(),f}};var Ss=e,Z=!1;self.onunhandledrejection=r=>{throw r.reason||r},self.onmessage=e}var j,ne,pe,B,W,re,me,A,K,je=!1;function ee(){var e=ge.buffer;t.HEAP8=j=new Int8Array(e),pe=new Int16Array(e),t.HEAPU8=ne=new Uint8Array(e),new Uint16Array(e),t.HEAP32=B=new Int32Array(e),t.HEAPU32=W=new Uint32Array(e),re=new Float32Array(e),me=new Float64Array(e),A=new BigInt64Array(e),new BigUint64Array(e)}function he(){je=!0,o?D():Ee.Ta()}function H(e){throw F(e="Aborted("+e+")"),_=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),I?.(e),e}function q(){return{a:{R:fa,f:Io,w:Bo,e:Lo,k:_o,g:Po,S:Do,b:Uo,G:xo,ta:vn,j:Mo,L:In,Ja:Bn,pa:Ln,ra:_n,Ka:Pn,Ha:Dn,Aa:Un,Ga:xn,Y:Mn,qa:Cn,na:Rn,Ia:Fn,oa:Nn,Pa:Co,Da:Ro,la:No,ua:ko,ia:Wo,T:Go,Ca:Ft,Ma:$o,xa:zo,ya:Ho,za:jo,va:$n,wa:zn,ja:Hn,Ra:Yo,Oa:Xo,V:Qo,U:Zo,Na:Jo,F:Ko,La:ea,ma:ta,u:Vo,H:na,Q:at,ka:oa,aa:ra,Sa:aa,Ea:Yn,Fa:Jn,sa:ye,I:qn,X:Xn,Ba:Qn,W:Zn,_:ja,M:Wa,$:Ha,N:ka,v:Pa,c:pa,m:la,n:ca,q:va,ba:Ra,x:Ba,o:wa,O:Fa,D:Ga,J:Ca,ca:Ma,da:xa,A:Oa,P:Ua,ea:Da,z:La,E:Na,d:da,r:ha,i:ma,Z:Va,l:ya,p:ga,s:ba,t:Ea,y:Aa,fa:_a,B:$a,K:Ia,C:za,ga:Sa,ha:Ta,h:ia,a:ge,Qa:V}}}async function Ut(){function e(s,f){return Ee=s.exports,Ee=function(){var p=Ee,E=x=>()=>x()>>>0,S=x=>R=>x(R)>>>0;return(p=Object.assign({},p)).sb=E(p.sb),p.ub=S(p.ub),p.Ib=S(p.Ib),p.Jb=E(p.Jb),p.Nb=S(p.Nb),p}(),mn.push(Ee.vb),s=Ee,t._OrtInit=s.Ua,t._OrtGetLastError=s.Va,t._OrtCreateSessionOptions=s.Wa,t._OrtAppendExecutionProvider=s.Xa,t._OrtAddFreeDimensionOverride=s.Ya,t._OrtAddSessionConfigEntry=s.Za,t._OrtReleaseSessionOptions=s._a,t._OrtCreateSession=s.$a,t._OrtReleaseSession=s.ab,t._OrtGetInputOutputCount=s.bb,t._OrtGetInputOutputMetadata=s.cb,t._OrtFree=s.db,t._OrtCreateTensor=s.eb,t._OrtGetTensorData=s.fb,t._OrtReleaseTensor=s.gb,t._OrtCreateRunOptions=s.hb,t._OrtAddRunConfigEntry=s.ib,t._OrtReleaseRunOptions=s.jb,t._OrtCreateBinding=s.kb,t._OrtBindInput=s.lb,t._OrtBindOutput=s.mb,t._OrtClearBoundOutputs=s.nb,t._OrtReleaseBinding=s.ob,t._OrtRunWithBinding=s.pb,t._OrtRun=s.qb,t._OrtEndProfiling=s.rb,st=s.sb,Kn=t._free=s.tb,er=t._malloc=s.ub,zt=s.xb,tr=s.yb,nr=s.zb,rr=s.Ab,Ht=s.Bb,or=s.Cb,ar=s.Db,M=s.Eb,Je=s.Fb,sr=s.Gb,P=s.Hb,jt=s.Ib,U=s.Jb,ir=s.Kb,Vt=s.Lb,ur=s.Mb,fr=s.Nb,cr=s.wb,b=f,Ee}var r,i=q();return t.instantiateWasm?new Promise(s=>{t.instantiateWasm(i,(f,p)=>{s(e(f,p))})}):o?e(new WebAssembly.Instance(b,q()),b):(K??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.wasm",h):h+"ort-wasm-simd-threaded.wasm":new URL(/* asset import */ __webpack_require__(/*! ort-wasm-simd-threaded.wasm */ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm"), __webpack_require__.b).href,r=await async function(s){var f=K;if(!g&&!k(f))try{var p=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,s)}catch(E){F(`wasm streaming compile failed: ${E}`),F("falling back to ArrayBuffer instantiation")}return async function(E,S){try{var x=await async function(R){if(!g)try{var X=await d(R);return new Uint8Array(X)}catch{}if(R==K&&g)R=new Uint8Array(g);else{if(!c)throw"both async and sync fetching of the wasm failed";R=c(R)}return R}(E);return await WebAssembly.instantiate(x,S)}catch(R){F(`failed to asynchronously prepare wasm: ${R}`),H(R)}}(f,s)}(i),e(r.instance,r.module))}class Se{name="ExitStatus";constructor(r){this.message=`Program terminated with exit(${r})`,this.status=r}}var ve=e=>{e.terminate(),e.onmessage=()=>{}},Ve=[],Re=0,te=null,ue=e=>{ce.length==0&&(yn(),bn(ce[0]));var r=ce.pop();if(!r)return 6;Fe.push(r),Oe[e.Ob]=r,r.Ob=e.Ob;var i={Pb:"run",bc:e.ac,Tb:e.Tb,Ob:e.Ob};return r.postMessage(i,e.Xb),0},se=0,L=(e,r,...i)=>{var s,f=16*i.length,p=U(),E=jt(f),S=E>>>3;for(s of i)typeof s=="bigint"?((w(),A)[S++>>>0]=1n,(w(),A)[S++>>>0]=s):((w(),A)[S++>>>0]=0n,(w(),me)[S++>>>0]=s);return e=nr(e,0,f,E,r),P(p),e};function V(e){if(o)return L(0,1,e);if(y=e,!(0<se)){for(var r of Fe)ve(r);for(r of ce)ve(r);ce=[],Fe=[],Oe={},_=!0}l(0,new Se(e))}function fe(e){if(o)return L(1,0,e);ye(e)}var ye=e=>{if(y=e,o)throw fe(e),"unwind";V(e)},ce=[],Fe=[],mn=[],Oe={},hn=e=>{var r=e.Ob;delete Oe[r],ce.push(e),Fe.splice(Fe.indexOf(e),1),e.Ob=0,rr(r)};function wn(){mn.forEach(e=>e())}var bn=e=>new Promise(r=>{e.onmessage=f=>{var p=f.data;if(f=p.Pb,p.Sb&&p.Sb!=st()){var E=Oe[p.Sb];E?E.postMessage(p,p.Xb):F(`Internal error! Worker sent a message "${f}" to target pthread ${p.Sb}, but that thread no longer exists!`)}else f==="checkMailbox"?rt():f==="spawnThread"?ue(p):f==="cleanupThread"?Rt(()=>{hn(Oe[p.cc])}):f==="loaded"?(e.loaded=!0,r(e)):p.target==="setimmediate"?e.postMessage(p):f==="uncaughtException"?e.onerror(p.error):f==="callHandler"?t[p.Yb](...p.args):f&&F(`worker sent an unknown command ${f}`)},e.onerror=f=>{throw F(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var i,s=[];for(i of[])t.propertyIsEnumerable(i)&&s.push(i);e.postMessage({Pb:"load",Zb:s,dc:ge,ec:b})});function yn(){var e=new Worker((()=>{let r=URL;return  true?new r(/* asset import */ __webpack_require__(/*! ort.wasm.bundle.min.mjs */ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"), __webpack_require__.b):0})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ce.push(e)}var ge,gn=[],C=e=>{var r=gn[e];return r||(gn[e]=r=cr.get(e)),r},Ao=(e,r)=>{se=0,e=C(e)(r),0<se?y=e:Ht(e)},tt=[],nt=0;function Io(e){var r=new xt(e>>>=0);return(w(),j)[r.Qb+12>>>0]==0&&(En(r,!0),nt--),Tn(r,!1),tt.push(r),fr(e)}var Ne=0,Bo=()=>{M(0,0);var e=tt.pop();ir(e.Ub),Ne=0};function En(e,r){r=r?1:0,(w(),j)[e.Qb+12>>>0]=r}function Tn(e,r){r=r?1:0,(w(),j)[e.Qb+13>>>0]=r}class xt{constructor(r){this.Ub=r,this.Qb=r-24}}var Mt=e=>{var r=Ne;if(!r)return Je(0),0;var i=new xt(r);(w(),W)[i.Qb+16>>>2>>>0]=r;var s=(w(),W)[i.Qb+4>>>2>>>0];if(!s)return Je(0),r;for(var f of e){if(f===0||f===s)break;if(ur(f,s,i.Qb+16))return Je(f),r}return Je(s),r};function Lo(){return Mt([])}function _o(e){return Mt([e>>>0])}function Po(e,r,i,s){return Mt([e>>>0,r>>>0,i>>>0,s>>>0])}var Do=()=>{var e=tt.pop();e||H("no exception to throw");var r=e.Ub;throw(w(),j)[e.Qb+13>>>0]==0&&(tt.push(e),Tn(e,!0),En(e,!1),nt++),Vt(r),Ne=r};function Uo(e,r,i){var s=new xt(e>>>=0);throw r>>>=0,i>>>=0,(w(),W)[s.Qb+16>>>2>>>0]=0,(w(),W)[s.Qb+4>>>2>>>0]=r,(w(),W)[s.Qb+8>>>2>>>0]=i,Vt(e),nt++,Ne=e}var xo=()=>nt;function Sn(e,r,i,s){return o?L(2,1,e,r,i,s):vn(e,r,i,s)}function vn(e,r,i,s){if(e>>>=0,r>>>=0,i>>>=0,s>>>=0,!globalThis.SharedArrayBuffer)return 6;var f=[];return o&&f.length===0?Sn(e,r,i,s):(e={ac:i,Ob:e,Tb:s,Xb:f},o?(e.Pb="spawnThread",postMessage(e,f),0):ue(e))}function Mo(e){throw Ne||=e>>>0,Ne}var On=globalThis.TextDecoder&&new TextDecoder,An=(e,r=0,i,s)=>{var f=r>>>=0;if(i=f+i,s)s=i;else{for(;e[f]&&!(f>=i);)++f;s=f}if(16<s-r&&e.buffer&&On)return On.decode(e.buffer instanceof ArrayBuffer?e.subarray(r,s):e.slice(r,s));for(f="";r<s;)if(128&(i=e[r++])){var p=63&e[r++];if((224&i)==192)f+=String.fromCharCode((31&i)<<6|p);else{var E=63&e[r++];65536>(i=(240&i)==224?(15&i)<<12|p<<6|E:(7&i)<<18|p<<12|E<<6|63&e[r++])?f+=String.fromCharCode(i):(i-=65536,f+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else f+=String.fromCharCode(i);return f},Ct=(e,r,i)=>(e>>>=0)?An((w(),ne),e,r,i):"";function In(e,r,i){return o?L(3,1,e,r,i):0}function Bn(e,r){if(o)return L(4,1,e,r)}function Ln(e,r){if(o)return L(5,1,e,r)}function _n(e,r,i){if(o)return L(6,1,e,r,i)}function Pn(e,r,i){return o?L(7,1,e,r,i):0}function Dn(e,r){if(o)return L(8,1,e,r)}function Un(e,r,i){if(o)return L(9,1,e,r,i)}function xn(e,r,i,s){if(o)return L(10,1,e,r,i,s)}function Mn(e,r,i,s){if(o)return L(11,1,e,r,i,s)}function Cn(e,r,i,s){if(o)return L(12,1,e,r,i,s)}function Rn(e){if(o)return L(13,1,e)}function Fn(e,r){if(o)return L(14,1,e,r)}function Nn(e,r,i){if(o)return L(15,1,e,r,i)}var Co=()=>H("");function Ro(e){zt(e>>>0,!u,1,!a,131072,!1),wn()}var Rt=e=>{if(!_)try{if(e(),!(0<se))try{o?st()&&Ht(y):ye(y)}catch(r){r instanceof Se||r=="unwind"||l(0,r)}}catch(r){r instanceof Se||r=="unwind"||l(0,r)}},Fo=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ft(e){e>>>=0,Fo||(Atomics.waitAsync((w(),B),e>>>2,e).value.then(rt),e+=128,Atomics.store((w(),B),e>>>2,1))}var rt=()=>Rt(()=>{var e=st();e&&(Ft(e),ar())});function No(e,r){(e>>>=0)==r>>>0?setTimeout(rt):o?postMessage({Sb:e,Pb:"checkMailbox"}):(e=Oe[e])&&e.postMessage({Pb:"checkMailbox"})}var Nt=[];function ko(e,r,i,s,f){for(r>>>=0,f>>>=0,Nt.length=0,i=f>>>3,s=f+s>>>3;i<s;){var p;p=(w(),A)[i++>>>0]?(w(),A)[i++>>>0]:(w(),me)[i++>>>0],Nt.push(p)}return(r?lr[r]:ua[e])(...Nt)}var Wo=()=>{se=0};function Go(e){e>>>=0,o?postMessage({Pb:"cleanupThread",cc:e}):hn(Oe[e])}function $o(e){}function zo(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),r>>>=0,e=new Date(1e3*e),(w(),B)[r>>>2>>>0]=e.getUTCSeconds(),(w(),B)[r+4>>>2>>>0]=e.getUTCMinutes(),(w(),B)[r+8>>>2>>>0]=e.getUTCHours(),(w(),B)[r+12>>>2>>>0]=e.getUTCDate(),(w(),B)[r+16>>>2>>>0]=e.getUTCMonth(),(w(),B)[r+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),B)[r+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),B)[r+28>>>2>>>0]=e}var kn=e=>e%4==0&&(e%100!=0||e%400==0),Wn=[0,31,60,91,121,152,182,213,244,274,305,335],Gn=[0,31,59,90,120,151,181,212,243,273,304,334];function Ho(e,r){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),r>>>=0,e=new Date(1e3*e),(w(),B)[r>>>2>>>0]=e.getSeconds(),(w(),B)[r+4>>>2>>>0]=e.getMinutes(),(w(),B)[r+8>>>2>>>0]=e.getHours(),(w(),B)[r+12>>>2>>>0]=e.getDate(),(w(),B)[r+16>>>2>>>0]=e.getMonth(),(w(),B)[r+20>>>2>>>0]=e.getFullYear()-1900,(w(),B)[r+24>>>2>>>0]=e.getDay();var i=(kn(e.getFullYear())?Wn:Gn)[e.getMonth()]+e.getDate()-1|0;(w(),B)[r+28>>>2>>>0]=i,(w(),B)[r+36>>>2>>>0]=-60*e.getTimezoneOffset(),i=new Date(e.getFullYear(),6,1).getTimezoneOffset();var s=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(i!=s&&e.getTimezoneOffset()==Math.min(s,i)),(w(),B)[r+32>>>2>>>0]=e}function jo(e){e>>>=0;var r=new Date((w(),B)[e+20>>>2>>>0]+1900,(w(),B)[e+16>>>2>>>0],(w(),B)[e+12>>>2>>>0],(w(),B)[e+8>>>2>>>0],(w(),B)[e+4>>>2>>>0],(w(),B)[e>>>2>>>0],0),i=(w(),B)[e+32>>>2>>>0],s=r.getTimezoneOffset(),f=new Date(r.getFullYear(),6,1).getTimezoneOffset(),p=new Date(r.getFullYear(),0,1).getTimezoneOffset(),E=Math.min(p,f);return 0>i?(w(),B)[e+32>>>2>>>0]=+(f!=p&&E==s):0<i!=(E==s)&&(f=Math.max(p,f),r.setTime(r.getTime()+6e4*((0<i?E:f)-s))),(w(),B)[e+24>>>2>>>0]=r.getDay(),i=(kn(r.getFullYear())?Wn:Gn)[r.getMonth()]+r.getDate()-1|0,(w(),B)[e+28>>>2>>>0]=i,(w(),B)[e>>>2>>>0]=r.getSeconds(),(w(),B)[e+4>>>2>>>0]=r.getMinutes(),(w(),B)[e+8>>>2>>>0]=r.getHours(),(w(),B)[e+12>>>2>>>0]=r.getDate(),(w(),B)[e+16>>>2>>>0]=r.getMonth(),(w(),B)[e+20>>>2>>>0]=r.getYear(),e=r.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function $n(e,r,i,s,f,p,E){return o?L(16,1,e,r,i,s,f,p,E):-52}function zn(e,r,i,s,f,p){if(o)return L(17,1,e,r,i,s,f,p)}var Ye={},Vo=()=>performance.timeOrigin+performance.now();function Hn(e,r){if(o)return L(18,1,e,r);if(Ye[e]&&(clearTimeout(Ye[e].id),delete Ye[e]),!r)return 0;var i=setTimeout(()=>{delete Ye[e],Rt(()=>or(e,performance.timeOrigin+performance.now()))},r);return Ye[e]={id:i,jc:r},0}var Ae=(e,r,i)=>{var s=(w(),ne);if(r>>>=0,0<i){var f=r;i=r+i-1;for(var p=0;p<e.length;++p){var E=e.codePointAt(p);if(127>=E){if(r>=i)break;s[r++>>>0]=E}else if(2047>=E){if(r+1>=i)break;s[r++>>>0]=192|E>>6,s[r++>>>0]=128|63&E}else if(65535>=E){if(r+2>=i)break;s[r++>>>0]=224|E>>12,s[r++>>>0]=128|E>>6&63,s[r++>>>0]=128|63&E}else{if(r+3>=i)break;s[r++>>>0]=240|E>>18,s[r++>>>0]=128|E>>12&63,s[r++>>>0]=128|E>>6&63,s[r++>>>0]=128|63&E,p++}}s[r>>>0]=0,e=r-f}else e=0;return e};function Yo(e,r,i,s){e>>>=0,r>>>=0,i>>>=0,s>>>=0;var f=new Date().getFullYear(),p=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var E=Math.max(p,f);(w(),W)[e>>>2>>>0]=60*E,(w(),B)[r>>>2>>>0]=+(p!=f),e=(r=S=>{var x=Math.abs(S);return`UTC${0<=S?"-":"+"}${String(Math.floor(x/60)).padStart(2,"0")}${String(x%60).padStart(2,"0")}`})(p),r=r(f),f<p?(Ae(e,i,17),Ae(r,s,17)):(Ae(e,s,17),Ae(r,i,17))}var Jo=()=>Date.now(),qo=1;function Xo(e,r,i){if(i>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!qo)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),A)[i>>>3>>>0]=BigInt(e),0}var kt=[];function Qo(e,r,i){e>>>=0,r>>>=0,i>>>=0,kt.length=0;for(var s;s=(w(),ne)[r++>>>0];){var f=s!=105;i+=(f&=s!=112)&&i%8?4:0,kt.push(s==112?(w(),W)[i>>>2>>>0]:s==106?(w(),A)[i>>>3>>>0]:s==105?(w(),B)[i>>>2>>>0]:(w(),me)[i>>>3>>>0]),i+=f?8:4}return lr[e](...kt)}var Zo=()=>{};function Ko(e,r){return F(Ct(e>>>0,r>>>0))}var ea=()=>{throw se+=1,"unwind"};function ta(){return 4294901760}var na=()=>navigator.hardwareConcurrency,Ie={},Wt=e=>{for(var r=0,i=0;i<e.length;++i){var s=e.charCodeAt(i);127>=s?r++:2047>=s?r+=2:55296<=s&&57343>=s?(r+=4,++i):r+=3}return r},ot=e=>{var r;return(r=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+r[1]:(r=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|+r[1]:0},jn=e=>{for(var r of e)(e=ot(r))&&(Ie[e]=r)};function ra(){var e=Error().stack.toString().split(`
`);return e[0]=="Error"&&e.shift(),jn(e),Ie.Vb=ot(e[3]),Ie.$b=e,Ie.Vb}function at(e){if(!(e=Ie[e>>>0]))return 0;var r;if(r=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=r[1];else if(r=/^\s+at (.*) \(.*\)$/.exec(e))e=r[1];else{if(!(r=/^(.+?)@/.exec(e)))return 0;e=r[1]}Kn(at.Wb??0),r=Wt(e)+1;var i=er(r);return i&&Ae(e,i,r),at.Wb=i,at.Wb}function oa(e){e>>>=0;var r=(w(),ne).length;if(e<=r||4294901760<e)return!1;for(var i=1;4>=i;i*=2){var s=r*(1+.2/i);s=Math.min(s,e+100663296);e:{s=(Math.min(4294901760,65536*Math.ceil(Math.max(e,s)/65536))-ge.buffer.byteLength+65535)/65536|0;try{ge.grow(s),ee();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}function aa(e,r,i){if(e>>>=0,r>>>=0,Ie.Vb==e)var s=Ie.$b;else(s=Error().stack.toString().split(`
`))[0]=="Error"&&s.shift(),jn(s);for(var f=3;s[f]&&ot(s[f])!=e;)++f;for(e=0;e<i&&s[e+f];++e)(w(),B)[r+4*e>>>2>>>0]=ot(s[e+f]);return e}var Gt,$t={},Vn=()=>{if(!Gt){var e,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(e in $t)$t[e]===void 0?delete r[e]:r[e]=$t[e];var i=[];for(e in r)i.push(`${e}=${r[e]}`);Gt=i}return Gt};function Yn(e,r){if(o)return L(19,1,e,r);e>>>=0,r>>>=0;var i,s=0,f=0;for(i of Vn()){var p=r+s;(w(),W)[e+f>>>2>>>0]=p,s+=Ae(i,p,1/0)+1,f+=4}return 0}function Jn(e,r){if(o)return L(20,1,e,r);e>>>=0,r>>>=0;var i=Vn();for(var s of((w(),W)[e>>>2>>>0]=i.length,e=0,i))e+=Wt(s)+1;return(w(),W)[r>>>2>>>0]=e,0}function qn(e){return o?L(21,1,e):52}function Xn(e,r,i,s){return o?L(22,1,e,r,i,s):52}function Qn(e,r,i,s){return o?L(23,1,e,r,i,s):70}var sa=[null,[],[]];function Zn(e,r,i,s){if(o)return L(24,1,e,r,i,s);r>>>=0,i>>>=0,s>>>=0;for(var f=0,p=0;p<i;p++){var E=(w(),W)[r>>>2>>>0],S=(w(),W)[r+4>>>2>>>0];r+=8;for(var x=0;x<S;x++){var R=e,X=(w(),ne)[E+x>>>0],le=sa[R];X===0||X===10?((R===1?O:F)(An(le)),le.length=0):le.push(X)}f+=S}return(w(),W)[s>>>2>>>0]=f,0}function ia(e){return e>>>0}o||function(){for(var e=t.numThreads-1;e--;)yn();Ve.push(async()=>{var r=async function(){if(!o)return Promise.all(ce.map(bn))}();Re++,await r,--Re==0&&te&&(r=te,te=null,r())})}(),o||(ge=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ee()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>U(),t.stackRestore=e=>P(e),t.stackAlloc=e=>jt(e),t.setValue=function(e,r,i="i8"){switch(i.endsWith("*")&&(i="*"),i){case"i1":case"i8":(w(),j)[e>>>0]=r;break;case"i16":(w(),pe)[e>>>1>>>0]=r;break;case"i32":(w(),B)[e>>>2>>>0]=r;break;case"i64":(w(),A)[e>>>3>>>0]=BigInt(r);break;case"float":(w(),re)[e>>>2>>>0]=r;break;case"double":(w(),me)[e>>>3>>>0]=r;break;case"*":(w(),W)[e>>>2>>>0]=r;break;default:H(`invalid type for setValue: ${i}`)}},t.getValue=function(e,r="i8"){switch(r.endsWith("*")&&(r="*"),r){case"i1":case"i8":return(w(),j)[e>>>0];case"i16":return(w(),pe)[e>>>1>>>0];case"i32":return(w(),B)[e>>>2>>>0];case"i64":return(w(),A)[e>>>3>>>0];case"float":return(w(),re)[e>>>2>>>0];case"double":return(w(),me)[e>>>3>>>0];case"*":return(w(),W)[e>>>2>>>0];default:H(`invalid type for getValue: ${r}`)}},t.UTF8ToString=Ct,t.stringToUTF8=Ae,t.lengthBytesUTF8=Wt;var st,Kn,er,zt,tr,nr,rr,Ht,or,ar,M,Je,sr,P,jt,U,ir,Vt,ur,fr,cr,Ee,ua=[V,fe,Sn,In,Bn,Ln,_n,Pn,Dn,Un,xn,Mn,Cn,Rn,Fn,Nn,$n,zn,Hn,Yn,Jn,qn,Xn,Qn,Zn],lr={930988:(e,r,i,s,f)=>{if(t===void 0||!t.Rb)return 1;if((e=Ct(Number(e>>>0))).startsWith("./")&&(e=e.substring(2)),!(e=t.Rb.get(e)))return 2;if(r=Number(r>>>0),i=Number(i>>>0),s=Number(s>>>0),r+i>e.byteLength)return 3;try{let p=e.subarray(r,r+i);switch(f){case 0:(w(),ne).set(p,s>>>0);break;case 1:t.fc?t.fc(s,p):t.ic(s,p);break;default:return 4}return 0}catch{return 4}},931812:()=>typeof wasmOffsetConverter<"u"};function fa(){return typeof wasmOffsetConverter<"u"}function ca(e,r,i,s){var f=U();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function la(e,r,i){var s=U();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;M(1,0)}}function da(e){var r=U();try{C(e)()}catch(i){if(P(r),i!==i+0)throw i;M(1,0)}}function pa(e,r){var i=U();try{return C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;M(1,0)}}function ma(e,r,i){var s=U();try{C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;M(1,0)}}function ha(e,r){var i=U();try{C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;M(1,0)}}function wa(e,r,i,s,f,p,E){var S=U();try{return C(e)(r,i,s,f,p,E)}catch(x){if(P(S),x!==x+0)throw x;M(1,0)}}function ba(e,r,i,s,f,p){var E=U();try{C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;M(1,0)}}function ya(e,r,i,s){var f=U();try{C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function ga(e,r,i,s,f){var p=U();try{C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;M(1,0)}}function Ea(e,r,i,s,f,p,E){var S=U();try{C(e)(r,i,s,f,p,E)}catch(x){if(P(S),x!==x+0)throw x;M(1,0)}}function Ta(e,r,i,s,f,p,E){var S=U();try{C(e)(r,i,s,f,p,E)}catch(x){if(P(S),x!==x+0)throw x;M(1,0)}}function Sa(e,r,i,s,f,p,E,S){var x=U();try{C(e)(r,i,s,f,p,E,S)}catch(R){if(P(x),R!==R+0)throw R;M(1,0)}}function va(e,r,i,s,f){var p=U();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;M(1,0)}}function Oa(e,r,i){var s=U();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;M(1,0)}}function Aa(e,r,i,s,f,p,E,S){var x=U();try{C(e)(r,i,s,f,p,E,S)}catch(R){if(P(x),R!==R+0)throw R;M(1,0)}}function Ia(e,r,i,s,f,p,E,S,x,R,X,le){var we=U();try{C(e)(r,i,s,f,p,E,S,x,R,X,le)}catch(be){if(P(we),be!==be+0)throw be;M(1,0)}}function Ba(e,r,i,s,f,p){var E=U();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;M(1,0)}}function La(e,r,i){var s=U();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;return M(1,0),0n}}function _a(e,r,i,s,f,p,E,S,x){var R=U();try{C(e)(r,i,s,f,p,E,S,x)}catch(X){if(P(R),X!==X+0)throw X;M(1,0)}}function Pa(e){var r=U();try{return C(e)()}catch(i){if(P(r),i!==i+0)throw i;M(1,0)}}function Da(e,r){var i=U();try{return C(e)(r)}catch(s){if(P(i),s!==s+0)throw s;return M(1,0),0n}}function Ua(e){var r=U();try{return C(e)()}catch(i){if(P(r),i!==i+0)throw i;return M(1,0),0n}}function xa(e,r,i,s){var f=U();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function Ma(e,r,i,s,f){var p=U();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;M(1,0)}}function Ca(e,r,i,s,f,p){var E=U();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;M(1,0)}}function Ra(e,r,i,s,f,p){var E=U();try{return C(e)(r,i,s,f,p)}catch(S){if(P(E),S!==S+0)throw S;M(1,0)}}function Fa(e,r,i,s,f,p,E,S){var x=U();try{return C(e)(r,i,s,f,p,E,S)}catch(R){if(P(x),R!==R+0)throw R;M(1,0)}}function Na(e,r,i,s,f){var p=U();try{return C(e)(r,i,s,f)}catch(E){if(P(p),E!==E+0)throw E;return M(1,0),0n}}function ka(e,r,i,s){var f=U();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function Wa(e,r,i,s){var f=U();try{return C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function Ga(e,r,i,s,f,p,E,S,x,R,X,le){var we=U();try{return C(e)(r,i,s,f,p,E,S,x,R,X,le)}catch(be){if(P(we),be!==be+0)throw be;M(1,0)}}function $a(e,r,i,s,f,p,E,S,x,R,X){var le=U();try{C(e)(r,i,s,f,p,E,S,x,R,X)}catch(we){if(P(le),we!==we+0)throw we;M(1,0)}}function za(e,r,i,s,f,p,E,S,x,R,X,le,we,be,Ya,Ja){var qa=U();try{C(e)(r,i,s,f,p,E,S,x,R,X,le,we,be,Ya,Ja)}catch(Yt){if(P(qa),Yt!==Yt+0)throw Yt;M(1,0)}}function Ha(e,r,i){var s=U();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;M(1,0)}}function ja(e,r,i){var s=U();try{return C(e)(r,i)}catch(f){if(P(s),f!==f+0)throw f;M(1,0)}}function Va(e,r,i,s){var f=U();try{C(e)(r,i,s)}catch(p){if(P(f),p!==p+0)throw p;M(1,0)}}function it(){if(0<Re)te=it;else if(o)T?.(t),he();else{for(var e=Ve;0<e.length;)e.shift()(t);0<Re?te=it:(t.calledRun=!0,_||(he(),T?.(t)))}}return o||(Ee=await Ut(),it()),t.PTR_SIZE=4,je?t:new Promise((e,r)=>{T=e,I=r})}var rs,os,Jr=N(()=>{"use strict";rs=Vr,os=globalThis.self?.name?.startsWith("em-pthread");os&&Vr()});var Qr,an,as,oe,Zr,on,ss,is,Kr,us,qr,eo,Xr,to,pt=N(()=>{"use strict";dt();Qr=typeof location>"u"?void 0:location.origin,an= true&&"file:///workspace/src/brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"<"file;",as=()=>{if(true){if(an){let n=URL;return new URL(new n(/* asset import */ __webpack_require__(/*! ort.wasm.bundle.min.mjs */ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"), __webpack_require__.b).href,Qr).href}return "file:///workspace/src/brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort.wasm.bundle.min.mjs"}},oe=as(),Zr=()=>{if(oe&&!oe.startsWith("blob:"))return oe.substring(0,oe.lastIndexOf("/")+1)},on=(n,t)=>{try{let a=t??oe;return(a?new URL(n,a):new URL(n)).origin===Qr}catch{return!1}},ss=(n,t)=>{let a=t??oe;try{return(a?new URL(n,a):new URL(n)).href}catch{return}},is=(n,t)=>`${t??"./"}${n}`,Kr=async n=>{let a=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(a)},us=async n=>(await import(/*webpackIgnore:true*/ /*@vite-ignore*/n)).default,qr=(jr(),Xt(Hr)).default,eo=async()=>{if(!oe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(on(oe))return[void 0,qr()];let n=await Kr(oe);return[n,qr(n)]},Xr=(Jr(),Xt(Yr)).default,to=async(n,t,a,u)=>{let o=Xr&&!(n||t);if(o)if(oe)o=on(oe)||u&&!a;else if(u&&!a)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,Xr];{let d="ort-wasm-simd-threaded.mjs",c=n??ss(d,t),l= true&&a&&c&&!on(c,t),m=l?await Kr(c):c??is(d,t);return[l?m:void 0,await us(m)]}}});var sn,un,St,no,fs,cs,ls,mt,$,xe=N(()=>{"use strict";pt();un=!1,St=!1,no=!1,fs=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},cs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ls=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},mt=async n=>{if(un)return Promise.resolve();if(St)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(no)throw new Error("previous call to 'initializeWebAssembly()' failed.");St=!0;let t=n.initTimeout,a=n.numThreads;if(n.simd!==!1){if(n.simd==="relaxed"){if(!ls())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!cs())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let u=fs();a>1&&!u&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+a+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=a=1);let o=n.wasmPaths,d=typeof o=="string"?o:void 0,c=o?.mjs,l=c?.href??c,m=o?.wasm,h=m?.href??m,g=n.wasmBinary,[b,y]=await to(l,d,a>1,!!g||!!h),T=!1,I=[];if(t>0&&I.push(new Promise(D=>{setTimeout(()=>{T=!0,D()},t)})),I.push(new Promise((D,z)=>{let v={numThreads:a};if(g)v.wasmBinary=g,v.locateFile=O=>O;else if(h||d)v.locateFile=O=>h??d+O;else if(l&&l.indexOf("blob:")!==0)v.locateFile=O=>new URL(O,l).href;else if(b){let O=Zr();O&&(v.locateFile=F=>O+F)}y(v).then(O=>{St=!1,un=!0,sn=O,D(),b&&URL.revokeObjectURL(b)},O=>{St=!1,no=!0,z(O)})})),await Promise.race(I),T)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},$=()=>{if(un&&sn)return sn;throw new Error("WebAssembly is not initialized yet.")}});var ae,Ze,G,vt=N(()=>{"use strict";xe();ae=(n,t)=>{let a=$(),u=a.lengthBytesUTF8(n)+1,o=a._malloc(u);return a.stringToUTF8(n,o,u),t.push(o),o},Ze=(n,t,a,u)=>{if(typeof n=="object"&&n!==null){if(a.has(n))throw new Error("Circular reference in options");a.add(n)}Object.entries(n).forEach(([o,d])=>{let c=t?t+o:o;if(typeof d=="object")Ze(d,c+".",a,u);else if(typeof d=="string"||typeof d=="number")u(c,d.toString());else if(typeof d=="boolean")u(c,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},G=n=>{let t=$(),a=t.stackSave();try{let u=t.PTR_SIZE,o=t.stackAlloc(2*u);t._OrtGetLastError(o,o+u);let d=Number(t.getValue(o,u===4?"i32":"i64")),c=t.getValue(o+u,"*"),l=c?t.UTF8ToString(c):"";throw new Error(`${n} ERROR_CODE: ${d}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(a)}}});var ro,oo=N(()=>{"use strict";xe();vt();ro=n=>{let t=$(),a=0,u=[],o=n||{};try{if(n?.logSeverityLevel===void 0)o.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)o.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(o.terminate=!1);let d=0;return n?.tag!==void 0&&(d=ae(n.tag,u)),a=t._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,d),a===0&&G("Can't create run options."),n?.extra!==void 0&&Ze(n.extra,"",new WeakSet,(c,l)=>{let m=ae(c,u),h=ae(l,u);t._OrtAddRunConfigEntry(a,m,h)!==0&&G(`Can't set a run config entry: ${c} - ${l}.`)}),[a,u]}catch(d){throw a!==0&&t._OrtReleaseRunOptions(a),u.forEach(c=>t._free(c)),d}}});var ds,ps,ms,ke,hs,ao,so=N(()=>{"use strict";xe();vt();ds=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},ps=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},ms=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let t=n.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(a=>(typeof a=="string"?a:a.name)==="webgpu")&&(n.enableMemPattern=!1)},ke=(n,t,a,u)=>{let o=ae(t,u),d=ae(a,u);$()._OrtAddSessionConfigEntry(n,o,d)!==0&&G(`Can't set a session config entry: ${t} - ${a}.`)},hs=async(n,t,a)=>{let u=t.executionProviders;for(let o of u){let d=typeof o=="string"?o:o.name,c=[];switch(d){case"webnn":if(d="WEBNN",ke(n,"session.disable_quant_qdq","1",a),ke(n,"session.disable_qdq_constant_folding","1",a),typeof o!="string"){let y=o?.deviceType;y&&ke(n,"deviceType",y,a)}break;case"webgpu":if(d="JS",typeof o!="string"){let b=o;if(b?.preferredLayout){if(b.preferredLayout!=="NCHW"&&b.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${b.preferredLayout}`);ke(n,"preferredLayout",b.preferredLayout,a)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${d}`)}let l=ae(d,a),m=c.length,h=0,g=0;if(m>0){h=$()._malloc(m*$().PTR_SIZE),a.push(h),g=$()._malloc(m*$().PTR_SIZE),a.push(g);for(let b=0;b<m;b++)$().setValue(h+b*$().PTR_SIZE,c[b][0],"*"),$().setValue(g+b*$().PTR_SIZE,c[b][1],"*")}await $()._OrtAppendExecutionProvider(n,l,h,g,m)!==0&&G(`Can't append execution provider: ${d}.`)}},ao=async n=>{let t=$(),a=0,u=[],o=n||{};ms(o);try{let d=ds(o.graphOptimizationLevel??"all"),c=ps(o.executionMode??"sequential"),l=typeof o.logId=="string"?ae(o.logId,u):0,m=o.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log severity level is not valid: ${m}`);let h=o.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log verbosity level is not valid: ${h}`);let g=typeof o.optimizedModelFilePath=="string"?ae(o.optimizedModelFilePath,u):0;if(a=t._OrtCreateSessionOptions(d,!!o.enableCpuMemArena,!!o.enableMemPattern,c,!!o.enableProfiling,0,l,m,h,g),a===0&&G("Can't create session options."),o.executionProviders&&await hs(a,o,u),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);ke(a,"enableGraphCapture",o.enableGraphCapture.toString(),u)}if(o.freeDimensionOverrides)for(let[b,y]of Object.entries(o.freeDimensionOverrides)){if(typeof b!="string")throw new Error(`free dimension override name must be a string: ${b}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let T=ae(b,u);t._OrtAddFreeDimensionOverride(a,T,y)!==0&&G(`Can't set a free dimension override: ${b} - ${y}.`)}return o.extra!==void 0&&Ze(o.extra,"",new WeakSet,(b,y)=>{ke(a,b,y,u)}),[a,u]}catch(d){throw a!==0&&t._OrtReleaseSessionOptions(a)!==0&&G("Can't release session options."),u.forEach(c=>t._free(c)),d}}});var We,Ot,Ge,io,uo,At,It,fo,fn=N(()=>{"use strict";We=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},Ot=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},Ge=(n,t)=>{let a=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],u=typeof t=="number"?t:t.reduce((o,d)=>o*d,1);return a>0?Math.ceil(u*a):void 0},io=n=>{switch(n){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},uo=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},At=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",It=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",fo=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}});var Ke,cn=N(()=>{"use strict";dt();Ke=async n=>{if(typeof n=="string")if(false)// removed by dead control flow
{}else{let t=await fetch(n);if(!t.ok)throw new Error(`failed to load external data file: ${n}`);let a=t.headers.get("Content-Length"),u=a?parseInt(a,10):0;if(u<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let o=t.body.getReader(),d;try{d=new ArrayBuffer(u)}catch(l){if(l instanceof RangeError){let m=Math.ceil(u/65536);d=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw l}let c=0;for(;;){let{done:l,value:m}=await o.read();if(l)break;let h=m.byteLength;new Uint8Array(d,c,h).set(m),c+=h}return new Uint8Array(d,0,u)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}});var ws,ht,wt,$e,bs,co,Qe,bt,yt,lo,gt,Et,Tt,rn=N(()=>{"use strict";Te();oo();so();fn();xe();vt();cn();ws=(n,t)=>{$()._OrtInit(n,t)!==0&&G("Can't initialize onnxruntime.")},ht=async n=>{ws(n.wasm.numThreads,uo(n.logLevel))},wt=async(n,t)=>{$().asyncInit?.();let a=n.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=n.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let o=n.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:o}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},$e=new Map,bs=n=>{let t=$(),a=t.stackSave();try{let u=t.PTR_SIZE,o=t.stackAlloc(2*u);t._OrtGetInputOutputCount(n,o,o+u)!==0&&G("Can't get session input/output count.");let c=u===4?"i32":"i64";return[Number(t.getValue(o,c)),Number(t.getValue(o+u,c))]}finally{t.stackRestore(a)}},co=(n,t)=>{let a=$(),u=a.stackSave(),o=0;try{let d=a.PTR_SIZE,c=a.stackAlloc(2*d);a._OrtGetInputOutputMetadata(n,t,c,c+d)!==0&&G("Can't get session input/output metadata.");let m=Number(a.getValue(c,"*"));o=Number(a.getValue(c+d,"*"));let h=a.HEAP32[o/4];if(h===0)return[m,0];let g=a.HEAPU32[o/4+1],b=[];for(let y=0;y<g;y++){let T=Number(a.getValue(o+8+y*d,"*"));b.push(T!==0?a.UTF8ToString(T):Number(a.getValue(o+8+(y+g)*d,"*")))}return[m,h,b]}finally{a.stackRestore(u),o!==0&&a._OrtFree(o)}},Qe=n=>{let t=$(),a=t._malloc(n.byteLength);if(a===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return t.HEAPU8.set(n,a),[a,n.byteLength]},bt=async(n,t)=>{let a,u,o=$();Array.isArray(n)?[a,u]=n:n.buffer===o.HEAPU8.buffer?[a,u]=[n.byteOffset,n.byteLength]:[a,u]=Qe(n);let d=0,c=0,l=0,m=[],h=[],g=[];try{if([c,m]=await ao(t),t?.externalData&&o.mountExternalData){let _=[];for(let k of t.externalData){let w=typeof k=="string"?k:k.path;_.push(Ke(typeof k=="string"?k:k.data).then(Z=>{o.mountExternalData(w,Z)}))}await Promise.all(_)}for(let _ of t?.executionProviders??[])if((typeof _=="string"?_:_.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof _!="string"){let w=_,Z=w?.context,j=w?.gpuDevice,ne=w?.deviceType,pe=w?.powerPreference;Z?o.currentContext=Z:j?o.currentContext=await o.webnnCreateMLContext(j):o.currentContext=await o.webnnCreateMLContext({deviceType:ne,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}d=await o._OrtCreateSession(a,u,c),o.webgpuOnCreateSession?.(d),d===0&&G("Can't create a session."),o.jsepOnCreateSession?.(),o.currentContext&&(o.webnnRegisterMLContext(d,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[b,y]=bs(d),T=!!t?.enableGraphCapture,I=[],D=[],z=[],v=[],O=[];for(let _=0;_<b;_++){let[k,w,Z]=co(d,_);k===0&&G("Can't get an input name."),h.push(k);let j=o.UTF8ToString(k);I.push(j),z.push(w===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Ot(w),shape:Z})}for(let _=0;_<y;_++){let[k,w,Z]=co(d,_+b);k===0&&G("Can't get an output name."),g.push(k);let j=o.UTF8ToString(k);D.push(j),v.push(w===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Ot(w),shape:Z})}return $e.set(d,[d,h,g,null,T,!1]),[d,I,D,z,v]}catch(b){throw h.forEach(y=>o._OrtFree(y)),g.forEach(y=>o._OrtFree(y)),l!==0&&o._OrtReleaseBinding(l)!==0&&G("Can't release IO binding."),d!==0&&o._OrtReleaseSession(d)!==0&&G("Can't release session."),b}finally{o._free(a),c!==0&&o._OrtReleaseSessionOptions(c)!==0&&G("Can't release session options."),m.forEach(b=>o._free(b)),o.unmountExternalData?.()}},yt=n=>{let t=$(),a=$e.get(n);if(!a)throw new Error(`cannot release session. invalid session id: ${n}`);let[u,o,d,c,l]=a;c&&(l&&t._OrtClearBoundOutputs(c.handle)!==0&&G("Can't clear bound outputs."),t._OrtReleaseBinding(c.handle)!==0&&G("Can't release IO binding.")),t.jsepOnReleaseSession?.(n),t.webnnOnReleaseSession?.(n),t.webgpuOnReleaseSession?.(n),o.forEach(m=>t._OrtFree(m)),d.forEach(m=>t._OrtFree(m)),t._OrtReleaseSession(u)!==0&&G("Can't release session."),$e.delete(n)},lo=async(n,t,a,u,o,d,c=!1)=>{if(!n){t.push(0);return}let l=$(),m=l.PTR_SIZE,h=n[0],g=n[1],b=n[3],y=b,T,I;if(h==="string"&&(b==="gpu-buffer"||b==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(c&&b!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${d} when enableGraphCapture is true.`);if(b==="gpu-buffer"){let v=n[2].gpuBuffer;I=Ge(We(h),g);{let O=l.jsepRegisterBuffer;if(!O)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');T=O(u,d,v,I)}}else if(b==="ml-tensor"){let v=n[2].mlTensor;I=Ge(We(h),g);let O=l.webnnRegisterMLTensor;if(!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');T=O(u,v,We(h),g)}else{let v=n[2];if(Array.isArray(v)){I=m*v.length,T=l._malloc(I),a.push(T);for(let O=0;O<v.length;O++){if(typeof v[O]!="string")throw new TypeError(`tensor data at index ${O} is not a string`);l.setValue(T+O*m,ae(v[O],a),"*")}}else{let O=l.webnnIsGraphInput,F=l.webnnIsGraphOutput;if(h!=="string"&&O&&F){let _=l.UTF8ToString(o);if(O(u,_)||F(u,_)){let k=We(h);I=Ge(k,g),y="ml-tensor";let w=l.webnnCreateTemporaryTensor,Z=l.webnnUploadTensor;if(!w||!Z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let j=await w(u,k,g);Z(j,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),T=j}else I=v.byteLength,T=l._malloc(I),a.push(T),l.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,I),T)}else I=v.byteLength,T=l._malloc(I),a.push(T),l.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,I),T)}}let D=l.stackSave(),z=l.stackAlloc(4*g.length);try{g.forEach((O,F)=>l.setValue(z+F*m,O,m===4?"i32":"i64"));let v=l._OrtCreateTensor(We(h),T,I,z,g.length,fo(y));v===0&&G(`Can't create tensor for input/output. session=${u}, index=${d}.`),t.push(v)}finally{l.stackRestore(D)}},gt=async(n,t,a,u,o,d)=>{let c=$(),l=c.PTR_SIZE,m=$e.get(n);if(!m)throw new Error(`cannot run inference. invalid session id: ${n}`);let h=m[0],g=m[1],b=m[2],y=m[3],T=m[4],I=m[5],D=t.length,z=u.length,v=0,O=[],F=[],_=[],k=[],w=[],Z=c.stackSave(),j=c.stackAlloc(D*l),ne=c.stackAlloc(D*l),pe=c.stackAlloc(z*l),B=c.stackAlloc(z*l);try{[v,O]=ro(d),De("wasm prepareInputOutputTensor");for(let A=0;A<D;A++)await lo(a[A],F,k,n,g[t[A]],t[A],T);for(let A=0;A<z;A++)await lo(o[A],_,k,n,b[u[A]],D+u[A],T);Ue("wasm prepareInputOutputTensor");for(let A=0;A<D;A++)c.setValue(j+A*l,F[A],"*"),c.setValue(ne+A*l,g[t[A]],"*");for(let A=0;A<z;A++)c.setValue(pe+A*l,_[A],"*"),c.setValue(B+A*l,b[u[A]],"*");c.jsepOnRunStart?.(h),c.webnnOnRunStart?.(h);let W;W=await c._OrtRun(h,ne,j,D,B,z,pe,v),W!==0&&G("failed to call OrtRun().");let re=[],me=[];De("wasm ProcessOutputTensor");for(let A=0;A<z;A++){let K=Number(c.getValue(pe+A*l,"*"));if(K===_[A]||w.includes(_[A])){re.push(o[A]),K!==_[A]&&c._OrtReleaseTensor(K)!==0&&G("Can't release tensor.");continue}let je=c.stackSave(),ee=c.stackAlloc(4*l),he=!1,H,q=0;try{c._OrtGetTensorData(K,ee,ee+l,ee+2*l,ee+3*l)!==0&&G(`Can't access output tensor data on index ${A}.`);let Se=l===4?"i32":"i64",ve=Number(c.getValue(ee,Se));q=c.getValue(ee+l,"*");let Ve=c.getValue(ee+l*2,"*"),Re=Number(c.getValue(ee+l*3,Se)),te=[];for(let L=0;L<Re;L++)te.push(Number(c.getValue(Ve+L*l,Se)));c._OrtFree(Ve)!==0&&G("Can't free memory for tensor dims.");let ue=te.reduce((L,V)=>L*V,1);H=Ot(ve);let se=y?.outputPreferredLocations[u[A]];if(H==="string"){if(se==="gpu-buffer"||se==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let L=[];for(let V=0;V<ue;V++){let fe=c.getValue(q+V*l,"*"),ye=c.getValue(q+(V+1)*l,"*"),ce=V===ue-1?void 0:ye-fe;L.push(c.UTF8ToString(fe,ce))}re.push([H,te,L,"cpu"])}else if(se==="gpu-buffer"&&ue>0){let L=c.jsepGetBuffer;if(!L)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let V=L(q),fe=Ge(ve,ue);if(fe===void 0||!At(H))throw new Error(`Unsupported data type: ${H}`);he=!0,re.push([H,te,{gpuBuffer:V,download:c.jsepCreateDownloader(V,fe,H),dispose:()=>{c._OrtReleaseTensor(K)!==0&&G("Can't release tensor.")}},"gpu-buffer"])}else if(se==="ml-tensor"&&ue>0){let L=c.webnnEnsureTensor,V=c.webnnIsGraphInputOutputTypeSupported;if(!L||!V)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ge(ve,ue)===void 0||!It(H))throw new Error(`Unsupported data type: ${H}`);if(!V(n,H,!1))throw new Error(`preferredLocation "ml-tensor" for ${H} output is not supported by current WebNN Context.`);let ye=await L(n,q,ve,te,!1);he=!0,re.push([H,te,{mlTensor:ye,download:c.webnnCreateMLTensorDownloader(q,H),dispose:()=>{c.webnnReleaseTensorId(q),c._OrtReleaseTensor(K)}},"ml-tensor"])}else if(se==="ml-tensor-cpu-output"&&ue>0){let L=c.webnnCreateMLTensorDownloader(q,H)(),V=re.length;he=!0,me.push((async()=>{let fe=[V,await L];return c.webnnReleaseTensorId(q),c._OrtReleaseTensor(K),fe})()),re.push([H,te,[],"cpu"])}else{let L=io(H),V=new L(ue);new Uint8Array(V.buffer,V.byteOffset,V.byteLength).set(c.HEAPU8.subarray(q,q+V.byteLength)),re.push([H,te,V,"cpu"])}}finally{c.stackRestore(je),H==="string"&&q&&c._free(q),he||c._OrtReleaseTensor(K)}}y&&!T&&(c._OrtClearBoundOutputs(y.handle)!==0&&G("Can't clear bound outputs."),$e.set(n,[h,g,b,y,T,!1]));for(let[A,K]of await Promise.all(me))re[A][2]=K;return Ue("wasm ProcessOutputTensor"),re}finally{c.webnnOnRunEnd?.(h),c.stackRestore(Z),F.forEach(W=>c._OrtReleaseTensor(W)),_.forEach(W=>c._OrtReleaseTensor(W)),k.forEach(W=>c._free(W)),v!==0&&c._OrtReleaseRunOptions(v),O.forEach(W=>c._free(W))}},Et=n=>{let t=$(),a=$e.get(n);if(!a)throw new Error("invalid session id");let u=a[0],o=t._OrtEndProfiling(u);o===0&&G("Can't get an profile file name."),t._OrtFree(o)},Tt=n=>{let t=[];for(let a of n){let u=a[2];!Array.isArray(u)&&"buffer"in u&&t.push(u.buffer)}return t}});var Ce,ie,et,Lt,_t,Bt,ln,dn,ze,He,gs,po,mo,ho,wo,bo,yo,go,pn=N(()=>{"use strict";Te();rn();xe();pt();Ce=()=>!!Y.wasm.proxy&&typeof document<"u",et=!1,Lt=!1,_t=!1,dn=new Map,ze=(n,t)=>{let a=dn.get(n);a?a.push(t):dn.set(n,[t])},He=()=>{if(et||!Lt||_t||!ie)throw new Error("worker not ready")},gs=n=>{switch(n.data.type){case"init-wasm":et=!1,n.data.err?(_t=!0,ln[1](n.data.err)):(Lt=!0,ln[0]()),Bt&&(URL.revokeObjectURL(Bt),Bt=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=dn.get(n.data.type);n.data.err?t.shift()[1](n.data.err):t.shift()[0](n.data.out);break}default:}},po=async()=>{if(!Lt){if(et)throw new Error("multiple calls to 'initWasm()' detected.");if(_t)throw new Error("previous call to 'initWasm()' failed.");if(et=!0,Ce())return new Promise((n,t)=>{ie?.terminate(),eo().then(([a,u])=>{try{ie=u,ie.onerror=d=>t(d),ie.onmessage=gs,ln=[n,t];let o={type:"init-wasm",in:Y};!o.in.wasm.wasmPaths&&(a||an)&&(o.in.wasm.wasmPaths={wasm:new URL(/* asset import */ __webpack_require__(/*! ort-wasm-simd-threaded.wasm */ "../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm"), __webpack_require__.b).href}),ie.postMessage(o),Bt=a}catch(o){t(o)}},t)});try{await mt(Y.wasm),await ht(Y),Lt=!0}catch(n){throw _t=!0,n}finally{et=!1}}},mo=async n=>{if(Ce())return He(),new Promise((t,a)=>{ze("init-ep",[t,a]);let u={type:"init-ep",in:{epName:n,env:Y}};ie.postMessage(u)});await wt(Y,n)},ho=async n=>Ce()?(He(),new Promise((t,a)=>{ze("copy-from",[t,a]);let u={type:"copy-from",in:{buffer:n}};ie.postMessage(u,[n.buffer])})):Qe(n),wo=async(n,t)=>{if(Ce()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return He(),new Promise((a,u)=>{ze("create",[a,u]);let o={type:"create",in:{model:n,options:{...t}}},d=[];n instanceof Uint8Array&&d.push(n.buffer),ie.postMessage(o,d)})}else return bt(n,t)},bo=async n=>{if(Ce())return He(),new Promise((t,a)=>{ze("release",[t,a]);let u={type:"release",in:n};ie.postMessage(u)});yt(n)},yo=async(n,t,a,u,o,d)=>{if(Ce()){if(a.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return He(),new Promise((c,l)=>{ze("run",[c,l]);let m=a,h={type:"run",in:{sessionId:n,inputIndices:t,inputs:m,outputIndices:u,options:d}};ie.postMessage(h,Tt(m))})}else return gt(n,t,a,u,o,d)},go=async n=>{if(Ce())return He(),new Promise((t,a)=>{ze("end-profiling",[t,a]);let u={type:"end-profiling",in:n};ie.postMessage(u)});Et(n)}});var Eo,Es,Pt,To=N(()=>{"use strict";Te();pn();fn();dt();cn();Eo=(n,t)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${t()}`)}},Es=n=>{switch(n[3]){case"cpu":return new de(n[0],n[2],n[1]);case"gpu-buffer":{let t=n[0];if(!At(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:a,download:u,dispose:o}=n[2];return de.fromGpuBuffer(a,{dataType:t,dims:n[1],download:u,dispose:o})}case"ml-tensor":{let t=n[0];if(!It(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:a,download:u,dispose:o}=n[2];return de.fromMLTensor(a,{dataType:t,dims:n[1],download:u,dispose:o})}default:throw new Error(`invalid data location: ${n[3]}`)}},Pt=class{async fetchModelAndCopyToWasmMemory(t){return ho(await Ke(t))}async loadModel(t,a){_e();let u;typeof t=="string"?u=await this.fetchModelAndCopyToWasmMemory(t):u=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await wo(u,a),Pe()}async dispose(){return bo(this.sessionId)}async run(t,a,u){_e();let o=[],d=[];Object.entries(t).forEach(y=>{let T=y[0],I=y[1],D=this.inputNames.indexOf(T);if(D===-1)throw new Error(`invalid input '${T}'`);o.push(I),d.push(D)});let c=[],l=[];Object.entries(a).forEach(y=>{let T=y[0],I=y[1],D=this.outputNames.indexOf(T);if(D===-1)throw new Error(`invalid output '${T}'`);c.push(I),l.push(D)});let m=o.map((y,T)=>Eo(y,()=>`input "${this.inputNames[d[T]]}"`)),h=c.map((y,T)=>y?Eo(y,()=>`output "${this.outputNames[l[T]]}"`):null),g=await yo(this.sessionId,d,m,l,h,u),b={};for(let y=0;y<g.length;y++)b[this.outputNames[l[y]]]=c[y]??Es(g[y]);return Pe(),b}startProfiling(){}endProfiling(){go(this.sessionId)}}});var vo={};ut(vo,{OnnxruntimeWebAssemblyBackend:()=>Dt,initializeFlags:()=>So,wasmBackend:()=>Ts});var So,Dt,Ts,Oo=N(()=>{"use strict";Te();pn();To();So=()=>{(typeof Y.wasm.initTimeout!="number"||Y.wasm.initTimeout<0)&&(Y.wasm.initTimeout=0);let n=Y.wasm.simd;if(typeof n!="boolean"&&n!==void 0&&n!=="fixed"&&n!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${n}". Reset it to \`false\` and ignore SIMD feature checking.`),Y.wasm.simd=!1),typeof Y.wasm.proxy!="boolean"&&(Y.wasm.proxy=!1),typeof Y.wasm.trace!="boolean"&&(Y.wasm.trace=!1),typeof Y.wasm.numThreads!="number"||!Number.isInteger(Y.wasm.numThreads)||Y.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Y.wasm.numThreads=1;else{let t=typeof navigator>"u"?qt("node:os").cpus().length:navigator.hardwareConcurrency;Y.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Dt=class{async init(t){So(),await po(),await mo(t)}async createInferenceSessionHandler(t,a){let u=new Pt;return await u.loadModel(t,a),u}},Ts=new Dt});Te();Te();Te();var Gr="1.26.0";var au=nn;{let n=(Oo(),Xt(vo)).wasmBackend;qe("cpu",n,10),qe("wasm",n,10)}Object.defineProperty(Y.versions,"web",{value:Gr,enumerable:!0});
//# sourceMappingURL=ort.wasm.bundle.min.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm
var ort_wasm_simd_threaded = __webpack_require__("../../../brave/node_modules/.pnpm/onnxruntime-web@1.26.0/node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm");
;// ./components/local_ai/resources/speech_worker/ort_env.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Owns loading and configuring the onnxruntime-web environment for this
// worker. The loader is bundled into this worker's script by webpack, and its
// pthread worker glue and threaded .wasm are emitted as webpack assets served
// from this origin.

// The threaded .wasm is located by ORT only through ort.env.wasm.wasmPaths at
// runtime, a string webpack cannot trace, so it is not emitted on its own.
// Import it explicitly so webpack emits it and returns its URL for wasmPaths.

let ortConfigured = false;
// The webpack-emitted worker glue ORT starts as a pthread Worker, named
// ort.wasm.bundle.min.<contenthash>.js. It is the only URL that should reach
// the Trusted Types createScriptURL hook, pinned by prefix and suffix since
// the content hash varies per build.
const ORT_WORKER_SCRIPT_PREFIX = '/ort.wasm.bundle.min.';
const ORT_WORKER_SCRIPT_SUFFIX = '.js';
const NUM_THREADS = Math.min(4, self.navigator.hardwareConcurrency || 4);
// Trusted Types default policy: onnxruntime-web creates its thread-pool
// workers via `new Worker(<url string>)`, which Trusted Types routes
// through the default policy. Allow ONLY our own same-origin worker glue and
// reject everything else.
function installTrustedTypesPolicy() {
    const tt = self.trustedTypes;
    if (!tt) {
        return;
    }
    tt.createPolicy('default', {
        createScriptURL: (url) => {
            const u = new URL(url, location.href);
            // Pin to the same-origin webpack-emitted worker glue
            // (ort.wasm.bundle.min.<contenthash>.js). search and hash are ignored so
            // a cache-busting query cannot change the decision. Everything else
            // (other files, cross-origin, blob: URLs) is rejected.
            if (u.origin === location.origin
                && u.pathname.startsWith(ORT_WORKER_SCRIPT_PREFIX)
                && u.pathname.endsWith(ORT_WORKER_SCRIPT_SUFFIX)) {
                return url;
            }
            throw new TypeError('Trusted Types: blocked script URL ' + url);
        },
    });
}
// Configure the threaded WASM backend once and return the bundled ORT
// namespace. wasmPaths.wasm points ORT at the webpack-emitted .wasm asset.
async function ensureOrt() {
    if (!ortConfigured) {
        Y.wasm.numThreads = NUM_THREADS;
        Y.wasm.simd = true;
        Y.wasm.wasmPaths = { wasm: ort_wasm_simd_threaded };
        ortConfigured = true;
    }
    return ort_wasm_bundle_min_namespaceObject;
}
// ORT-Web tensors back their data with WASM memory that is NOT freed by
// JS GC alone — dispose inputs and outputs after each inference or they
// accumulate in the WASM heap.
function disposeOrt(inputs, out) {
    for (const t of inputs) {
        try {
            t.dispose();
        }
        catch {
            /* ignore */
        }
    }
    if (out) {
        for (const k in out) {
            try {
                out[k].dispose();
            }
            catch {
                /* ignore */
            }
        }
    }
}

;// ./components/local_ai/resources/speech_worker/configs.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
const TARGET_SAMPLE_RATE = 16000;
const WIN_LENGTH = 400;
const N_FFT = 512;
const HOP_LENGTH = 160; // mel hop in samples (10 ms @ 16 kHz)
const N_MELS = 128;
const PREEMPH = 0.97;
const LOG_ZERO_GUARD = 5.9604645e-8;
////////// PAD BEGIN ////////////
// Zero padding applied to the raw audio before framing for FFT caculations.
// PAD num of left-padding is applied once per audio stream, at the beginning.
// This is for doing 'centered framing' for the first FFT frame. Otherwise the first few raw audio samples
// would lie near the left edge of the Hann window,mwhere the window coefficients are close to zero,
// strongly attenuating their contribution to the resulting spectrum.
const PAD = N_FFT >> 1; // 256
////////// PAD END ////////////
////////// OFFSET BEGIN ////////////
// We take WIN_LENGTH real audio samples, multiply them by a WIN_LENGTH point Hann window
// and place the result in the middle of an FFT buffer of N_FFT num. of elements.
// OFF tells us where the real WIN_LENGTH-sample window begins inside the FFT buffer.
const OFF = (N_FFT - WIN_LENGTH) >> 1; // 56
// So, a 512-point FFT buffer would be:
// | 56 zeros | 400 windowed audio samples | 56 zeros |
// 0         OFF                 (WIN_LENGTH + OFF)  N_FFT
////////// OFFSET END ////////////
// A streaming mel frame is stable once the right edge of the real Hann window
// is available. Currently the WIN_LENGTH window at OFF
// inside the N_FFT frame, so raw window is:
// [f * HOP_LENGTH - PAD + OFF, f * HOP_LENGTH - PAD + OFF + WIN_LENGTH)
const STREAMING_RIGHT_CONTEXT = OFF + WIN_LENGTH - PAD;
// model specific constants
const NEMO_CHUNK = 56; // new mel frames per step (560 ms @ 10 ms hop)
const NEMO_PRECACHE = 9; // pre-encode mel cache frames prepended
const NEMO_BLANK = 1024;
const NEMO_VOCAB = 1025; // 1024 + blank
const NEMO_MAX_SYM = 10;
const NEMO_FRAMES = NEMO_PRECACHE + NEMO_CHUNK; // 65: fixed encoder input length
const NEMO_NUM_ENCODER_LAYERS = 24;
const NEMO_HIDDEN_DIM = 1024;
// note that this is different from left context at mel level;
// its num of frames in the left context of encoder's attention blocks'
const NEMO_LEFT_CONTEXT = 70;
// its num of frames in the left context of encoder's conv blocks'
const NEMO_CONV_CONTEXT = 8;
const NEMO_DECODER_LSTM_DIM = 640;
// On finish, append this many chunks of silence so the cache-aware encoder
// and RNN-T decoder flush the final partial chunk — without it the trailing
// word(s) can be dropped to right-context / emission lag. The silence frames
// decode to RNN-T blanks, so the transcript is unaffected.
const SILENCE_FLUSH_CHUNKS = 3;
// Silence fed before the first real sample. The exported ONNX encoder graph
// drops the first 2 time frames of its pre-encode output. This happens inside
// the graph, not in our streaming code. It shifts the output grid off the
// start of the audio, so a short word that begins within the first ~80 ms of
// the stream can be lost, whatever the audio source. NVIDIA's Nemotron
// streaming release notes recommend this same lead-in.
const LEADING_SILENCE_MS = 80;

;// ./components/local_ai/resources/speech_worker/audio_features.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.

// standard symmetric Hann window; following NeMo's implementation
function hannWindow() {
    return Float32Array.from({ length: WIN_LENGTH }, (_, i) => 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (WIN_LENGTH - 1)));
}
// Initializes reusable state and working buffers for a radix-2
// Cooley–Tukey FFT, including a bit-reversal lookup table.
function initFftPower(n) {
    if ((n & (n - 1)) !== 0) {
        throw new Error(`N_FFT must be a power of two, got ${n}`);
    }
    const bits = Math.log2(n);
    const bitRev = new Uint16Array(n);
    for (let i = 0; i < n; i++) {
        let x = i;
        let y = 0;
        for (let b = 0; b < bits; b++) {
            y = (y << 1) | (x & 1);
            x >>= 1;
        }
        bitRev[i] = y;
    }
    return {
        n,
        bitRev,
        real: new Float32Array(n),
        imag: new Float32Array(n),
        power: new Float32Array(n / 2 + 1),
        frame: new Float32Array(n),
    };
}
// Compute power spectrum from a real-valued N_FFT frame.
function fftPower(fft) {
    const { n, real, imag, bitRev, frame } = fft;
    // Bit-reversed copy of real input.
    // frame is expected to have length N_FFT.
    for (let i = 0; i < n; i++) {
        real[i] = frame[bitRev[i]];
        imag[i] = 0.0;
    }
    // Iterative radix-2 Cooley-Tukey FFT.
    // This matches the forward transform:
    // X[k] = sum_n x[n] * exp(-j * 2πkn/N)
    for (let len = 2; len <= n; len <<= 1) {
        const halfLen = len >> 1;
        const angle = (-2.0 * Math.PI) / len;
        const wLenReal = Math.cos(angle);
        const wLenImag = Math.sin(angle);
        for (let i = 0; i < n; i += len) {
            let wReal = 1.0;
            let wImag = 0.0;
            for (let j = 0; j < halfLen; j++) {
                const evenIndex = i + j;
                const oddIndex = evenIndex + halfLen;
                const oddReal = real[oddIndex];
                const oddImag = imag[oddIndex];
                const vReal = oddReal * wReal - oddImag * wImag;
                const vImag = oddReal * wImag + oddImag * wReal;
                const uReal = real[evenIndex];
                const uImag = imag[evenIndex];
                real[evenIndex] = uReal + vReal;
                imag[evenIndex] = uImag + vImag;
                real[oddIndex] = uReal - vReal;
                imag[oddIndex] = uImag - vImag;
                const nextWReal = wReal * wLenReal - wImag * wLenImag;
                const nextWImag = wReal * wLenImag + wImag * wLenReal;
                wReal = nextWReal;
                wImag = nextWImag;
            }
        }
    }
    const power = fft.power;
    const bins = n / 2 + 1;
    for (let k = 0; k < bins; k++) {
        power[k] = real[k] * real[k] + imag[k] * imag[k];
    }
    return power;
}
class StreamingMelFrontend {
    acquireMelFrame() {
        var _a;
        return (_a = this.freeMelFrames.pop()) !== null && _a !== void 0 ? _a : new Float32Array(N_MELS);
    }
    releaseMelFrame(frame) {
        frame.fill(0);
        this.freeMelFrames.push(frame);
    }
    constructor(fbank, hann, fftPre) {
        this.fbank = fbank;
        this.hann = hann;
        this.fftPre = fftPre;
        this.rawAudio = [];
        this.rawBaseSample = 0;
        this.rawSamplesReceived = 0;
        this.melFrames = [];
        this.freeMelFrames = [];
        this.melFrameBase = 0;
        this.nextMelFrame = 0;
        this.nextChunkFrame = 0;
    }
    appendAudioSamples(samples) {
        for (let i = 0; i < samples.length; i++) {
            this.rawAudio.push(samples[i]);
        }
        this.rawSamplesReceived += samples.length;
        this.appendStableMelFrames();
        this.trimOldBuffers();
    }
    hasFullChunk() {
        return this.nextMelFrame - this.nextChunkFrame >= NEMO_CHUNK;
    }
    makeNextEncoderInput() {
        if (!this.hasFullChunk()) {
            throw new Error('Not enough stable mel frames for another encoder chunk');
        }
        const chunk = new Float32Array(N_MELS * NEMO_FRAMES);
        const mainStart = this.nextChunkFrame;
        // Left pre-encode mel cache. For the first chunk, this leaves the first
        // NEMO_PRECACHE columns as zeros.
        const cacheStart = Math.max(0, mainStart - NEMO_PRECACHE);
        const cacheFrames = mainStart - cacheStart;
        const cacheOffset = NEMO_PRECACHE - cacheFrames;
        for (let f = 0; f < cacheFrames; f++) {
            this.copyMelFrameToEncoderChunk(chunk, cacheOffset + f, this.getMelFrame(cacheStart + f));
        }
        for (let f = 0; f < NEMO_CHUNK; f++) {
            this.copyMelFrameToEncoderChunk(chunk, NEMO_PRECACHE + f, this.getMelFrame(mainStart + f));
        }
        return chunk;
    }
    consumeChunk() {
        if (!this.hasFullChunk()) {
            throw new Error('Cannot consume an incomplete mel chunk');
        }
        this.nextChunkFrame += NEMO_CHUNK;
        this.trimOldBuffers();
    }
    // Zero every buffer holding audio or acoustic features and reset the
    // frontend to empty. Called at session end so the utterance does not
    // persist in the JS heap until garbage collection.
    wipe() {
        this.rawAudio.fill(0);
        this.rawAudio.length = 0;
        for (const frame of this.melFrames) {
            frame.fill(0);
        }
        this.melFrames.length = 0;
        this.rawBaseSample = 0;
        this.rawSamplesReceived = 0;
        this.melFrameBase = 0;
        this.nextMelFrame = 0;
        this.nextChunkFrame = 0;
        this.fftPre.frame.fill(0);
        this.fftPre.real.fill(0);
        this.fftPre.imag.fill(0);
        this.fftPre.power.fill(0);
    }
    debugState() {
        const stableBacklogFrames = this.nextMelFrame - this.nextChunkFrame;
        return {
            rawSamplesReceived: this.rawSamplesReceived,
            rawBaseSample: this.rawBaseSample,
            rawBufferedSamples: this.rawAudio.length,
            melFrameBase: this.melFrameBase,
            melBufferedFrames: this.melFrames.length,
            nextMelFrame: this.nextMelFrame,
            nextChunkFrame: this.nextChunkFrame,
            stableBacklogFrames,
            chunksReady: Math.floor(stableBacklogFrames / NEMO_CHUNK),
            estimatedStableBacklogMs: (stableBacklogFrames * HOP_LENGTH * 1000)
                / TARGET_SAMPLE_RATE,
        };
    }
    appendStableMelFrames() {
        // By 'stable' mel frame, we mean a mel frame whose required raw audio
        // samples are already available, including its right-side context.
        const stableFrames = this.stableMelFrameCountForSamples(this.rawSamplesReceived);
        while (this.nextMelFrame < stableFrames) {
            this.melFrames.push(this.computeStreamingMelFrame(this.nextMelFrame));
            this.nextMelFrame += 1;
        }
    }
    stableMelFrameCountForSamples(sampleCount) {
        const count = Math.floor((sampleCount - STREAMING_RIGHT_CONTEXT) / HOP_LENGTH) + 1;
        return Math.max(0, count);
    }
    computeStreamingMelFrame(frameIndex) {
        const frame = this.fftPre.frame;
        frame.fill(0);
        // Match the full-buffer NeMo layout:
        // window is placed at OFF inside an N_FFT-sized frame, and the raw
        // window starts at frameIndex * HOP_LENGTH - PAD + OFF.
        const rawStart = frameIndex * HOP_LENGTH - PAD + OFF;
        for (let i = 0; i < WIN_LENGTH; i++) {
            frame[OFF + i] =
                this.preemphasizedSampleAt(rawStart + i) * this.hann[i];
        }
        const power = fftPower(this.fftPre);
        const nfFreq = N_FFT / 2 + 1;
        const melFrame = this.acquireMelFrame();
        for (let m = 0; m < N_MELS; m++) {
            let acc = 0;
            const fb = m * nfFreq;
            for (let k = 0; k < nfFreq; k++) {
                acc += this.fbank[fb + k] * power[k];
            }
            melFrame[m] = Math.log(acc + LOG_ZERO_GUARD);
        }
        return melFrame;
    }
    rawSampleAt(absSampleIndex) {
        if (absSampleIndex < 0) {
            throw new Error(`rawSampleAt called with negative index ${absSampleIndex}`);
        }
        // Should only happen if the caller intentionally requests samples beyond
        // the real stream. During normal streaming, stable-frame gating prevents it.
        if (absSampleIndex >= this.rawSamplesReceived) {
            return 0.0;
        }
        const rel = absSampleIndex - this.rawBaseSample;
        if (rel < 0 || rel >= this.rawAudio.length) {
            throw new Error(`Streaming frontend lost raw sample ${absSampleIndex}; `
                + `base=${this.rawBaseSample}, len=${this.rawAudio.length}`);
        }
        return this.rawAudio[rel];
    }
    preemphasizedOriginalSampleAt(absSampleIndex) {
        const x = this.rawSampleAt(absSampleIndex);
        if (absSampleIndex === 0) {
            return x;
        }
        return x - PREEMPH * this.rawSampleAt(absSampleIndex - 1);
    }
    preemphasizedSampleAt(absSampleIndex) {
        // Match reflect-padding semantics at the start of the stream after
        // pre-emphasis. For example, -1 maps to preemphasized sample 1.
        if (absSampleIndex < 0) {
            return this.preemphasizedOriginalSampleAt(-absSampleIndex);
        }
        return this.preemphasizedOriginalSampleAt(absSampleIndex);
    }
    getMelFrame(absFrameIndex) {
        const rel = absFrameIndex - this.melFrameBase;
        if (rel < 0 || rel >= this.melFrames.length) {
            throw new Error(`Streaming frontend lost mel frame ${absFrameIndex}; `
                + `base=${this.melFrameBase}, len=${this.melFrames.length}`);
        }
        return this.melFrames[rel];
    }
    copyMelFrameToEncoderChunk(chunk, chunkFrameOffset, melFrame) {
        for (let m = 0; m < N_MELS; m++) {
            chunk[m * NEMO_FRAMES + chunkFrameOffset] = melFrame[m];
        }
    }
    trimOldBuffers() {
        // Keep only mel frames needed for the next encoder input's 9-frame
        // pre-encode cache.
        const keepFromFrame = Math.max(0, this.nextChunkFrame - NEMO_PRECACHE);
        const dropFrames = keepFromFrame - this.melFrameBase;
        if (dropFrames > 0) {
            // Zero each dropped mel frame before releasing it. Mel features are a
            // near complete acoustic representation, so wiping them here bounds the
            // resident acoustics to the live window rather than leaving dropped
            // frames in the JS heap until garbage collection.
            for (let i = 0; i < dropFrames; i++) {
                this.releaseMelFrame(this.melFrames[i]);
            }
            this.melFrames.splice(0, dropFrames);
            this.melFrameBase = keepFromFrame;
        }
        // Keep enough raw audio to compute the next mel frame, including one
        // previous sample for pre-emphasis continuity.
        const firstRawNeeded = Math.max(0, this.nextMelFrame * HOP_LENGTH - PAD + OFF - 1);
        const dropSamples = firstRawNeeded - this.rawBaseSample;
        if (dropSamples > 0) {
            this.rawAudio.fill(0, 0, dropSamples);
            this.rawAudio.splice(0, dropSamples);
            this.rawBaseSample += dropSamples;
        }
    }
}

;// ./components/local_ai/resources/speech_worker/utils.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Parse a tokens.txt ("<token> <id>" per line, id-ordered, ▁ == space) into
// an id-indexed vocab array.
function parseTokens(buf) {
    const vocab = [];
    for (const line of new TextDecoder().decode(buf).split('\n')) {
        if (!line) {
            continue;
        }
        const sp = line.lastIndexOf(' ');
        vocab[parseInt(line.slice(sp + 1), 10)] = line.slice(0, sp);
    }
    return vocab;
}
// Free the model graph's JS backing store once ORT has copied it into its
// WASM heap. (ORT-Web references its own WASM copy, so the source is no
// longer needed.) transfer(0) detaches it immediately instead of waiting on
// GC of the mojo-mapped shared-memory region.
function releaseBytes(bytes) {
    var _a;
    try {
        const buffer = bytes.buffer;
        (_a = buffer.transfer) === null || _a === void 0 ? void 0 : _a.call(buffer, 0);
    }
    catch {
        // Backing store isn't transferable; GC will reclaim it eventually.
    }
}
// BigBuffer is a mojo union: either inlined bytes or a shared-memory
// handle the renderer maps in.
function readBigBuffer(buffer, name) {
    if (buffer.bytes) {
        return new Uint8Array(buffer.bytes);
    }
    if (buffer.sharedMemory) {
        const { buffer: mapped, result } = buffer.sharedMemory.bufferHandle.mapBuffer(0, buffer.sharedMemory.size);
        if (result !== Mojo.RESULT_OK) {
            throw new Error(`Failed to map ${name} shared buffer`);
        }
        return new Uint8Array(mapped);
    }
    throw new Error(`Invalid ${name} BigBuffer`);
}
// Argmax over a flat array; returns the index of max value
function argmax(a) {
    let best = 0;
    for (let i = 1; i < a.length; i++) {
        if (a[i] > a[best]) {
            best = i;
        }
    }
    return best;
}

;// ./components/local_ai/resources/speech_worker/nemotron_recognizer.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// Nemotron 0.6B streaming RNN-T over onnxruntime-web. Mojo-free: model
// loading from raw bytes plus a per-utterance streaming session that emits
// transcripts through a callback. The mojo transport glue that drives this
// lives in speech_worker.ts.




// Encoder outputs we consume. `encoded_lengths` is the count of valid encoder
// frames; the input length is fixed every call so it normally equals the
// full time, but we clamp the decode to it defensively.
const ENC_FETCHES = [
    'outputs',
    'encoded_lengths',
    'cache_last_channel_next',
    'cache_last_time_next',
    'cache_last_channel_next_len',
];
// Shared, loaded-once Nemotron model: the external-data encoder + RNN-T
// decoder sessions plus tokens and the 128-mel filterbank.
class OrtNemotronModel {
    constructor(ort, enc, dec, tokens, fbank) {
        // Every run goes through this one queue so runs from different streams never
        // overlap on the shared sessions. onnxruntime-web keeps a single WASM stack
        // per module and does not lock run(), so overlapping runs corrupt that stack.
        this.queue = Promise.resolve();
        this.ort = ort;
        this.enc = enc;
        this.dec = dec;
        this.tokens = tokens;
        this.fbank = fbank;
        this.hann = hannWindow();
    }
    // Serialized encoder/decoder runs. These are the only way to reach the
    // shared sessions, so no two streams' runs ever overlap. A failed run is
    // isolated on the chain so it cannot stall later runs for other streams,
    // while its rejection still propagates to the caller.
    runEncoder(feeds, fetches) {
        return this.serialized(() => this.enc.run(feeds, fetches));
    }
    runDecoder(feeds) {
        return this.serialized(() => this.dec.run(feeds));
    }
    serialized(run) {
        const result = this.queue.then(run);
        this.queue = result.catch(() => { });
        return result;
    }
    // Build the encoder + decoder sessions from mojo BigBuffers. Only the
    // .onnx + .onnx.data external-data export is supported for memory
    // optimization.
    static async buildFromBytes(encoderGraph, encData, decoderGraph, decData, tokens, fbank) {
        const ort = await ensureOrt();
        const sessionOptions = (data, dataPath) => ({
            executionProviders: ['wasm'],
            // int4 prepacking gives no speedup on the external-data path, so disable
            // it to avoid the extra prepacked-weight copy in WASM memory.
            extra: {
                session: {
                    disable_prepacking: '1',
                },
            },
            externalData: [{ path: dataPath, data }],
        });
        const enc = await ort.InferenceSession.create(encoderGraph, sessionOptions(encData, 'encoder.onnx.data'));
        releaseBytes(encoderGraph);
        releaseBytes(encData);
        const dec = await ort.InferenceSession.create(decoderGraph, sessionOptions(decData, 'decoder_joint.onnx.data'));
        releaseBytes(decoderGraph);
        releaseBytes(decData);
        return new OrtNemotronModel(ort, enc, dec, tokens, fbank);
    }
}
// One Nemotron ASR session. Uses an incremental streaming mel frontend:
// raw samples are appended, only newly stable mel frames are computed, and
// fixed 65-frame encoder chunks are packed from cached mel frames. Mojo-free:
// transcripts are delivered through the onResult callback and failures
// through onError.
class NemotronStreamSession {
    constructor(model, sampleRateHz, onResult, onError) {
        // Attention cache.
        this.cacheCh = new Float32Array(NEMO_NUM_ENCODER_LAYERS
            * NEMO_LEFT_CONTEXT
            * NEMO_HIDDEN_DIM);
        // Convolution cache.
        this.cacheTime = new Float32Array(NEMO_NUM_ENCODER_LAYERS
            * NEMO_HIDDEN_DIM
            * NEMO_CONV_CONTEXT);
        // Indicates how much of left context at encoder-output level is valid.
        // This is different from left context at mel-frame level.
        this.cacheLen = BigInt64Array.from([BigInt(0)]);
        // Decoder LSTM state cache; 2 LSTM layers.
        this.st1 = new Float32Array(2 * NEMO_DECODER_LSTM_DIM);
        this.st2 = new Float32Array(2 * NEMO_DECODER_LSTM_DIM);
        // RNN-T predictor seed. NeMo uses BLANK as the initial previous token.
        this.prevToken = NEMO_BLANK;
        // Hypothesis token IDs.
        this.hyp = [];
        // Audio is accepted only while streaming. The final flush runs in finishing
        // and can still fail. ended is terminal and fires onResult or onError once.
        this.state = 'streaming';
        // Prevents overlapping async inference calls within the same stream.
        this.inflight = Promise.resolve();
        // Debug chunk counter.
        this.chunkIdx = 0;
        this.model = model;
        if (sampleRateHz !== TARGET_SAMPLE_RATE) {
            throw new Error(`Unsupported sample rate for Nemotron: ${sampleRateHz} Hz`);
        }
        this.onResult = onResult;
        this.onError = onError;
        this.frontend = new StreamingMelFrontend(model.fbank, model.hann, initFftPower(N_FFT));
        this.frontend.appendAudioSamples(new Float32Array((TARGET_SAMPLE_RATE * LEADING_SILENCE_MS) / 1000));
    }
    addAudio(samples) {
        if (this.state !== 'streaming') {
            return;
        }
        try {
            this.frontend.appendAudioSamples(samples);
        }
        catch (error) {
            this.fail(error);
            return;
        }
        this.debug('audio appended', {
            samples: samples.length,
            ms: this.samplesToMs(samples.length),
            frontend: this.frontend.debugState(),
        });
        this.inflight = this.inflight
            .then(() => this.processAvailable(false))
            .catch((error) => this.fail(error));
    }
    // Flush the trailing words and emit the final transcript. Appends silence
    // so the streaming encoder/RNN-T drains the last partial chunk into full
    // 65-frame chunks. Idempotent: after the first call addAudio() no-ops, so
    // the final flush runs exactly once.
    finish() {
        if (this.state !== 'streaming') {
            return;
        }
        this.state = 'finishing';
        const flush = SILENCE_FLUSH_CHUNKS * NEMO_CHUNK * HOP_LENGTH;
        try {
            this.frontend.appendAudioSamples(new Float32Array(flush));
        }
        catch (error) {
            this.fail(error);
            return;
        }
        this.debug('finish requested, appended silence', {
            flushSamples: flush,
            flushMs: this.samplesToMs(flush),
            frontend: this.frontend.debugState(),
        });
        this.inflight = this.inflight
            .then(() => this.processAvailable(true))
            .then(() => {
            this.state = 'ended';
            this.wipe();
        })
            .catch((error) => this.fail(error));
    }
    // Single terminal path for a failure. Every error ends the recognition,
    // since the browser cannot be told more than that no result is coming.
    fail(error) {
        if (this.state === 'ended') {
            return;
        }
        this.state = 'ended';
        console.error('[speech-worker] inference failed:', error);
        this.wipe();
        this.onError();
    }
    // Zero every per-session buffer holding audio, acoustic features, or
    // transcript once the recognition has ended, whether it emitted a final
    // result or failed, so the utterance does not linger in the JS heap until
    // garbage collection. The shared model weights are untouched.
    wipe() {
        this.frontend.wipe();
        this.hyp.fill(0);
        this.hyp.length = 0;
        this.cacheCh.fill(0);
        this.cacheTime.fill(0);
        this.cacheLen.fill(BigInt(0));
        this.st1.fill(0);
        this.st2.fill(0);
        this.prevToken = NEMO_BLANK;
    }
    async processAvailable(final) {
        const { ort, tokens } = this.model;
        let atLeastOneChunkProcessed = false;
        while (this.frontend.hasFullChunk()) {
            const chunkIdx = this.chunkIdx++;
            const frontendBefore = this.frontend.debugState();
            const chunkStarted = performance.now();
            const packStarted = performance.now();
            const sig = this.frontend.makeNextEncoderInput();
            const packMs = performance.now() - packStarted;
            const encoderStarted = performance.now();
            // Fresh input tensors every step. Do not reuse/carry ORT tensors.
            const eo = await this.model.runEncoder({
                audio_signal: new ort.Tensor('float32', sig, [
                    1,
                    N_MELS,
                    NEMO_FRAMES,
                ]),
                length: new ort.Tensor('int64', BigInt64Array.from([BigInt(NEMO_FRAMES)]), [1]),
                cache_last_channel: new ort.Tensor('float32', this.cacheCh, [
                    1,
                    NEMO_NUM_ENCODER_LAYERS,
                    NEMO_LEFT_CONTEXT,
                    NEMO_HIDDEN_DIM,
                ]),
                cache_last_time: new ort.Tensor('float32', this.cacheTime, [
                    1,
                    NEMO_NUM_ENCODER_LAYERS,
                    NEMO_HIDDEN_DIM,
                    NEMO_CONV_CONTEXT,
                ]),
                cache_last_channel_len: new ort.Tensor('int64', this.cacheLen, [1]),
            }, ENC_FETCHES);
            const encoderMs = performance.now() - encoderStarted;
            // Copy data out before disposing ORT tensors.
            // Encoder output is laid out as [batch, hidden_dim, time].
            const encOut = eo.outputs.data.slice();
            // Number of time frames at output of encoder.
            const nTime = Number(eo.outputs.dims[2]);
            // Number of valid encoder frames to actually decode.
            const nEnc = Math.min(Number(eo.encoded_lengths.data[0]), nTime);
            // Update encoder caches.
            this.cacheCh = eo.cache_last_channel_next.data.slice();
            this.cacheTime = eo.cache_last_time_next.data.slice();
            // Grows until NEMO_LEFT_CONTEXT and then stays there.
            this.cacheLen = eo.cache_last_channel_next_len.data.slice();
            disposeOrt([], eo);
            // RNN-T greedy decode over this chunk's encoder frames.
            const decodeStarted = performance.now();
            let decoderCalls = 0;
            let emittedTokensThisChunk = 0;
            let maxSymHits = 0;
            // Outer loop over encoder time index.
            for (let fi = 0; fi < nEnc; fi++) {
                const frame = new Float32Array(NEMO_HIDDEN_DIM);
                // Inner loop over channel/hidden-dim index.
                for (let c = 0; c < NEMO_HIDDEN_DIM; c++) {
                    frame[c] = encOut[c * nTime + fi];
                }
                let sym = 0;
                // Decoder processes each time frame, aggregated across all channels.
                while (sym < NEMO_MAX_SYM) {
                    const dout = await this.model.runDecoder({
                        encoder_outputs: new ort.Tensor('float32', frame, [
                            1,
                            NEMO_HIDDEN_DIM,
                            1,
                        ]),
                        targets: new ort.Tensor('int32', Int32Array.from([this.prevToken]), [1, 1]),
                        target_length: new ort.Tensor('int32', Int32Array.from([1]), [1]),
                        input_states_1: new ort.Tensor('float32', this.st1, [
                            2,
                            1,
                            NEMO_DECODER_LSTM_DIM,
                        ]),
                        input_states_2: new ort.Tensor('float32', this.st2, [
                            2,
                            1,
                            NEMO_DECODER_LSTM_DIM,
                        ]),
                    });
                    decoderCalls++;
                    const tok = argmax(dout.outputs.data);
                    if (tok !== NEMO_BLANK) {
                        this.hyp.push(tok);
                        this.prevToken = tok;
                        this.st1 = dout.output_states_1.data.slice();
                        this.st2 = dout.output_states_2.data.slice();
                        emittedTokensThisChunk++;
                    }
                    disposeOrt([], dout);
                    if (tok === NEMO_BLANK) {
                        break;
                    }
                    sym++;
                }
                if (sym === NEMO_MAX_SYM) {
                    maxSymHits++;
                }
            }
            const decodeMs = performance.now() - decodeStarted;
            this.frontend.consumeChunk();
            const modelMs = encoderMs + decodeMs;
            const totalMs = performance.now() - chunkStarted;
            const chunkAudioMs = this.samplesToMs(NEMO_CHUNK * HOP_LENGTH);
            this.debug('chunk processed', {
                chunkIdx,
                packMs,
                encoderMs,
                decodeMs,
                modelMs,
                totalMs,
                chunkAudioMs,
                modelRtf: modelMs / chunkAudioMs,
                totalRtf: totalMs / chunkAudioMs,
                nTime,
                nEnc,
                decoderCalls,
                emittedTokensThisChunk,
                hypTokensTotal: this.hyp.length,
                maxSymHits,
                cacheLen: Number(this.cacheLen[0]),
                frontendBefore,
                frontendAfter: this.frontend.debugState(),
            });
            atLeastOneChunkProcessed = true;
        }
        if (atLeastOneChunkProcessed || final) {
            const text = this.hyp
                .map((id) => { var _a; return (_a = tokens[id]) !== null && _a !== void 0 ? _a : ''; })
                .join('')
                .replace(/▁/g, ' ')
                .trim();
            if (text || final) {
                this.onResult(text, final);
            }
        }
    }
    samplesToMs(samples) {
        return (samples * 1000) / TARGET_SAMPLE_RATE;
    }
    debug(message, details) {
        const json = JSON.stringify(details !== null && details !== void 0 ? details : {}, (_key, value) => typeof value === 'bigint' ? value.toString() : value);
        console.error(`[NEMO_DEBUG] ${message} ${json}`);
    }
}

;// ./components/local_ai/resources/speech_worker/speech_worker.ts
// Copyright (c) 2026 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// You can obtain one at https://mozilla.org/MPL/2.0/.
// ORT-Web speech worker. A cross-origin-isolated renderer that runs the
// Nemotron 0.6B int4 ONNX encoder + RNN-T decoder through onnxruntime-web
// (multi-threaded WASM) and exposes a browser-driven mojo contract: a
// factory that loads the model whole and mints per-utterance ASR streams.
// This file is the mojo transport layer; the ORT environment lives in
// ort_env.ts and the model/inference in nemotron_recognizer.ts.





// Thin mojo endpoint for one ASR stream: owns the receiver and responder
// and bridges AsrStreamInput calls to a mojo-free NemotronStreamSession.
// Engine disconnect (~end of utterance) triggers the final flush.
class AsrStreamInputAdapter {
    constructor(model, sampleRateHz, pending, responder, onClose) {
        const onResult = (text, isFinal) => {
            // Empty transcript means nothing was recognized. Send an empty
            // vector rather than a bogus [FINAL] "" (still ends the session).
            responder.onResponse(text
                ? [
                    {
                        transcript: text,
                        isFinal,
                        audioStartTime: undefined,
                        audioEndTime: undefined,
                    },
                ]
                : []);
        };
        // AsrStreamResponder carries results only, so a closed pipe is how the
        // engine learns inference was aborted and ends the recognition in error.
        const onError = () => responder.$.close();
        this.session = new NemotronStreamSession(model, sampleRateHz, onResult, onError);
        this.receiver = new AsrStreamInputReceiver(this);
        this.receiver.$.bindHandle(pending.handle);
        this.receiver.onConnectionError.addListener(() => {
            this.session.finish();
            onClose();
        });
    }
    addAudioChunk(data) {
        this.session.addAudio(new Float32Array(data.data));
    }
}
class SpeechRecognitionFactoryImpl {
    constructor() {
        this.streams = new Set();
        this.model = null;
        this.receiver = new SpeechRecognitionFactoryReceiver(this);
    }
    getPendingRemote() {
        return this.receiver.$.bindNewPipeAndPassRemote();
    }
    async init(files) {
        try {
            this.model = await OrtNemotronModel.buildFromBytes(readBigBuffer(files.encoder, 'Encoder'), readBigBuffer(files.encoderData, 'EncoderData'), readBigBuffer(files.decoder, 'Decoder'), readBigBuffer(files.decoderData, 'DecoderData'), parseTokens(readBigBuffer(files.tokens, 'Tokens')), new Float32Array(readBigBuffer(files.melFilters, 'Filterbank').slice().buffer));
            return { success: true };
        }
        catch (err) {
            console.error('[speech-worker] init failed:', err);
            return { success: false };
        }
    }
    createAsrStream(options, stream, responder) {
        if (!this.model) {
            console.error('[speech-worker] createAsrStream before init');
            responder.$.close();
            return;
        }
        let adapter;
        try {
            adapter = new AsrStreamInputAdapter(this.model, options.sampleRateHz, stream, responder, () => this.streams.delete(adapter));
        }
        catch (error) {
            console.error('[speech-worker] createAsrStream failed:', error);
            responder.$.close();
            return;
        }
        this.streams.add(adapter);
    }
}
installTrustedTypesPolicy();
const factoryHost = SpeechRecognitionFactoryHost.getRemote();
const factory = new SpeechRecognitionFactoryImpl();
factoryHost.registerFactory(factory.getPendingRemote());

})();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoX3dvcmtlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBQUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOzs7OztVQy9CQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBLEU7Ozs7O1VDUEEsd0Y7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdELEU7Ozs7O1VDTkEsNEI7Ozs7O1VDQUE7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBOztVQUVBOztVQUVBOztVQUVBOztVQUVBOztVQUVBO1VBQ0E7O1VBRUEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxZQUFZLFVBQVUsb0JBQW9CLG9CQUFvQixpQkFBaUIsbXBCQUFtcEIsbUJBQW1CLHVJQUF1SSwwSkFBMEosS0FBSyw0SUFBNEksa0RBQWtELGFBQWEsNkJBQTZCLFlBQVksa0RBQWtELFdBQVcsaURBQWlELGVBQWUscURBQXFELGNBQWMsb0RBQW9ELGVBQWUscURBQXFELGNBQWMsb0RBQW9ELGdCQUFnQixzREFBc0QsZ0JBQWdCLHNEQUFzRCxjQUFjLDZDQUE2QyxhQUFhLDRDQUE0QyxpQkFBaUIsZ0RBQWdELGdCQUFnQiwrQ0FBK0MsaUJBQWlCLGdEQUFnRCxnQkFBZ0IsK0NBQStDLGtCQUFrQixpREFBaUQsa0JBQWtCLGtEQUFrRCw2Q0FBNkMsZUFBZSxvREFBb0QsOENBQThDLG1DQUFtQyxtQkFBbUIsd0NBQXdDLDhZQUE4WSx5Q0FBeUMsZ1pBQWdaLHNDQUFzQyxRQUFRLGlSQUFpUix1Q0FBdUMsUUFBUSxtUkFBbVIsK0VBQStFLHlDQUF5QyxpREFBaUQsaUdBQWlHLDZEQUE2RCxpQkFBaUIscURBQXFELHVCQUF1Qix5QkFBeUIsMkNBQTJDLGtHQUFrRyxpREFBaUQsMkVBQTJFLGtDQUFrQyxPQUFPLDBCQUEwQixzREFBc0QsMkNBQTJDLHVCQUF1Qiw2Q0FBNkMsUUFBUSwwRkFBMEYsa0NBQWtDLHNFQUFzRSwyRUFBMkUsMkVBQTJFLGtDQUFrQyxPQUFPLDBCQUEwQixvREFBb0QsbVNBQW1TLHlEQUF5RCxrRUFBa0UsbURBQW1ELHNCQUFzQixtREFBbUQsa0RBQWtELCtDQUErQyxRQUFRLDZJQUE2SSxTQUFTLDZCQUE2QiwyQkFBMkIsbURBQW1ELFFBQVEsd09BQXdPLHlIQUF5SCwrQ0FBK0Msa0NBQWtDLDhzQkFBOHNCLG9DQUFvQyxrQ0FBa0MsV0FBVywwQkFBMEIsWUFBWSwwRkFBMEYsd0NBQXdDLDBEQUEwRCx3QkFBd0IsNkNBQTZDLGtCQUFrQiwrQkFBK0IsaUVBQWlFLGdCQUFnQix3QkFBd0IsaUJBQWlCLHlCQUF5QixpQkFBaUIseURBQXlELGtCQUFrQiwwREFBMEQsaUJBQWlCLHlEQUF5RCxrQkFBa0IsMERBQTBELGlCQUFpQix1Q0FBdUMsa0JBQWtCLHdDQUF3QyxpQkFBaUIsMkRBQTJELGtCQUFrQiwyREFBMkQsa0JBQWtCLGdGQUFnRiw4QkFBOEIsOEVBQThFLDBHQUEwRyx3REFBd0Qsa0JBQWtCLHNGQUFzRixrQkFBa0IsZ0NBQWdDLCtDQUErQyxrQkFBa0IsK0NBQStDLG1CQUFtQix5SUFBeUksMkhBQTJILDhEQUE4RCx1Q0FBdUMsUUFBUSx5REFBeUQsdUJBQXVCLGFBQWEsNEdBQTRHLGdDQUFnQyx5REFBeUQsMERBQTBELHFDQUFxQywyREFBMkQsWUFBWSx1RkFBdUYsaUJBQWlCLFFBQVEsa0hBQWtILHNIQUFzSCxrSEFBa0gsc0JBQXNCLHFCQUFxQix3REFBd0QsT0FBTyxvQkFBb0Isd0dBQXdHLDREQUE0RCx3QkFBd0IsbUJBQW1CLDZFQUE2RSx5QkFBeUIsNkRBQTZELHVEQUF1RCxrRkFBa0Ysb0dBQW9HLG1HQUFtRyxFQUFFLE9BQU8sNEJBQTRCLHVCQUF1QixXQUFXLDRCQUE0Qix3SEFBd0gsdURBQXVELG1CQUFtQix1QkFBdUIsNkNBQTZDLFFBQVEsMEZBQTBGLDJCQUEyQixtRkFBbUYseUNBQXlDLDJIQUEySCw0QkFBNEIsb0pBQW9KLG9FQUFvRSx3QkFBd0IsNkhBQTZILGdCQUFnQixzQ0FBc0MsY0FBYyw2QkFBNkIsZUFBZSw4QkFBOEIsZUFBZSw4REFBOEQsZ0JBQWdCLCtEQUErRCxlQUFlLDhEQUE4RCxnQkFBZ0IsK0RBQStELGVBQWUsNENBQTRDLGdCQUFnQiw2Q0FBNkMsZUFBZSxnRUFBZ0UsZ0JBQWdCLGdFQUFnRSxnQkFBZ0IsZ0VBQWdFLDZCQUE2QiwyRUFBMkUsd0JBQXdCLGdCQUFnQiw2QkFBNkIsa0JBQWtCLGdHQUFnRyxxREFBcUQsa0JBQWtCLFlBQVksdUZBQXVGLGdCQUFnQiw2QkFBNkIsaUJBQWlCLGdGQUFnRix5Q0FBeUMsaUJBQWlCLDZCQUE2QixrQkFBa0IseUpBQXlKLGVBQWUsK0VBQStFLE1BQU0sWUFBWSxZQUFZLElBQUksZ0RBQWdELHVEQUF1RCxxQkFBcUIsa0RBQWtELElBQUksdURBQXVELGlCQUFpQixJQUFJLEtBQUssc0JBQXNCLEtBQUssMERBQTBELHFGQUFxRixPQUFPLHlEQUF5RCxTQUFTLGVBQWUsNkJBQTZCLGtCQUFrQiw2S0FBNkssb0ZBQW9GLHVCQUF1QixzQkFBc0IscUJBQXFCLHdEQUF3RCxLQUFLLG1FQUFtRSxzQ0FBc0MsZ0JBQWdCLFlBQVksV0FBVyxxQkFBcUIsU0FBUyxXQUFXLFlBQVksV0FBVyxpQkFBaUIsU0FBUyxrQkFBa0IsNkJBQTZCLGtCQUFrQiwwSkFBMEosMkJBQTJCLG1CQUFtQixxQkFBcUIsS0FBSyxLQUFLLGFBQWEsc0NBQXNDLHVDQUF1QyxzQ0FBc0MsR0FBRyxhQUFhLE9BQU8sR0FBRyw0QkFBNEIsNkJBQTZCLGtCQUFrQix3UEFBd1AsNkRBQTZELFFBQVEsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSwyQkFBMkIsc0JBQXNCLCtIQUErSCxnRUFBZ0UsUUFBUSxtQkFBbUIsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLFdBQVcsWUFBWSxrQkFBa0IsS0FBSyxvQkFBb0IsOENBQThDLHNDQUFzQywwQkFBMEIsVUFBVSwwRUFBMEUsMkNBQTJDLFNBQVMsdUJBQXVCLHdDQUF3QyxnSEFBZ0gscURBQXFELFFBQVEsMkJBQTJCLE9BQU8sSUFBSSxTQUFTLHNDQUFzQyw4QkFBOEIsNENBQTRDLHFGQUFxRiwrRkFBK0YsbUNBQW1DLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLHFKQUFxSixpQkFBaUIsd0NBQXdDLCtCQUErQix5QkFBeUIsb0JBQW9CLGtCQUFrQixjQUFjLHlDQUF5QywwSEFBMEgsSUFBSSxxREFBcUQsUUFBUSwyQkFBMkIsT0FBTyxHQUFHLFdBQVcsa0JBQWtCLDBCQUEwQiw2QkFBNkIsdUJBQXVCLDRCQUE0Qiw2QkFBNkIsc0VBQXNFLDRCQUE0QixxSEFBcUgsK1NBQStTLG9DQUFvQyx1SEFBdUgsd0dBQXdHLDJMQUEyTCxPQUFPLHVRQUF1USxtSkFBbUosY0FBYyxpRUFBaUUsaUtBQWlLLEdBQUcsMkJBQTJCLG9CQUFvQiwwQkFBMEIsbUVBQW1FLDBCQUEwQix5QkFBeUIsK0RBQStELHFCQUFxQixHQUFHLDJCQUEyQixrQkFBa0IsMEJBQTBCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLCtEQUErRCxzQkFBc0IsR0FBRywyQkFBMkIsbUJBQW1CLDBCQUEwQixtQkFBbUIsMEJBQTBCLHdCQUF3QiwrREFBK0Qsc0JBQXNCLEdBQUcsMkJBQTJCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLDBCQUEwQix3QkFBd0IsK0RBQStELHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IsMEJBQTBCLG9CQUFvQiwwQkFBMEIseUJBQXlCLCtEQUErRCxzQkFBc0IsR0FBRywyQkFBMkIsbUJBQW1CLDBCQUEwQixtQkFBbUIsMEJBQTBCLHdCQUF3QiwrREFBK0QsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQiwwQkFBMEIsb0JBQW9CLDBCQUEwQix5QkFBeUIsK0RBQStELHNCQUFzQixHQUFHLDJCQUEyQixtQkFBbUIsMEJBQTBCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLCtEQUErRCx1QkFBdUIsR0FBRywyQkFBMkIsb0JBQW9CLDBCQUEwQixvQkFBb0IsMEJBQTBCLHlCQUF5QiwrREFBK0Qsc0JBQXNCLEdBQUcsMkJBQTJCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLDBCQUEwQix3QkFBd0IsK0RBQStELHVCQUF1QixHQUFHLDJCQUEyQixvQkFBb0IsMEJBQTBCLG9CQUFvQiwwQkFBMEIseUJBQXlCLCtEQUErRCx1QkFBdUIsR0FBRywyQkFBMkIsb0JBQW9CLDBCQUEwQiw2QkFBNkIsMEJBQTBCLHlCQUF5QiwrREFBK0QsdUJBQXVCLEdBQUcsMkJBQTJCLG9CQUFvQiwyQkFBMkIsMEJBQTBCLHlCQUF5QixpQ0FBaUMsT0FBTywwQ0FBMEMsZ0NBQWdDLDhDQUE4QywrREFBK0QsbUNBQW1DLFNBQVMsaUNBQWlDLE9BQU8sR0FBRyx1Q0FBdUMscUJBQXFCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLGlDQUFpQyxPQUFPLCtDQUErQyxnRUFBZ0UsbUNBQW1DLFNBQVMsdUNBQXVDLE9BQU8sR0FBRyxxQ0FBcUMsbUJBQW1CLDJCQUEyQiwwQkFBMEIsd0JBQXdCLGlDQUFpQywwSUFBMEksT0FBTyx5RkFBeUYsY0FBYyw0Q0FBNEMsZ0NBQWdDLEtBQUssZ0VBQWdFLCtCQUErQixPQUFPLEdBQUcsMkJBQTJCLG9CQUFvQiwyQkFBMkIsMEJBQTBCLHdCQUF3QixnRUFBZ0UsdUVBQXVFLE9BQU8sbUlBQW1JLHdDQUF3QyxvQkFBb0IsNkJBQTZCLE9BQU8sZ0VBQWdFLEtBQUssd0NBQXdDLHNCQUFzQiwyQkFBMkIsMEJBQTBCLDJCQUEyQixpQ0FBaUMsa0RBQWtELGdEQUFnRCxzREFBc0Qsb0JBQW9CLDZCQUE2QixPQUFPLGdFQUFnRSxLQUFLLHdDQUF3QyxzQkFBc0IsMkJBQTJCLDBCQUEwQixzQ0FBc0MsNERBQTRELGlDQUFpQyxrREFBa0QsZ0RBQWdELG9EQUFvRCxtQkFBbUIsaUZBQWlGLDJFQUEyRSxxQ0FBcUMsU0FBUyxpQkFBaUIsS0FBSyx1Q0FBdUMscUJBQXFCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLGlDQUFpQyxtREFBbUQscURBQXFELDBDQUEwQyxPQUFPLEdBQUcsMkJBQTJCLHlCQUF5QixvQ0FBb0MsT0FBTyxHQUFHLHdCQUF3QiwwQ0FBMEMsMEJBQTBCLDZCQUE2QiwwQkFBMEIsbUNBQW1DLGdFQUFnRSw0Q0FBNEMsT0FBTyxHQUFHLDJCQUEyQix3REFBd0QseUNBQXlDLDBCQUEwQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyxnRUFBZ0Usb0RBQW9ELE9BQU8sR0FBRyxrQ0FBa0MsbUZBQW1GLFFBQVEsb0dBQW9HLDBCQUEwQixtREFBbUQsMEJBQTBCLDRDQUE0QyxzQkFBc0Isd0VBQXdFLDREQUE0RCxzREFBc0QsT0FBTyxHQUFHLGtDQUFrQyxtRUFBbUUsUUFBUSxzRUFBc0UsMEJBQTBCLDZCQUE2QiwwQkFBMEIsNENBQTRDLHNCQUFzQix3RUFBd0UsNERBQTRELGlEQUFpRCxnQ0FBZ0MsZ0VBQWdFLG1EQUFtRCwrQ0FBK0MsMkpBQTJKLEtBQUsscURBQXFELEtBQUsseUNBQXlDLEtBQUssK0NBQStDLEtBQUssNENBQTRDLEtBQUssd0RBQXdELEtBQUssMkNBQTJDLEtBQUssK0NBQStDLEtBQUssdUNBQXVDLEtBQUssdUNBQXVDLEtBQUsscUNBQXFDLEtBQUssc0NBQXNDLEtBQUssZ0RBQWdELEtBQUsscU9BQXFPLGNBQWMsWUFBWSwrUEFBK1AsY0FBYyxhQUFhLG1JQUFtSSxnQkFBZ0IsME5BQTBOLGNBQWMsY0FBYyw0SUFBNEksZ0JBQWdCLGlSQUFpUixjQUFjLFlBQVksOE1BQThNLGNBQWMsY0FBYywrT0FBK08sY0FBYyw0QkFBNEIsNkhBQTZILGdCQUFnQiw2SEFBNkgsZ0JBQWdCLHNFQUFzRSxjQUFjLHdEQUF3RCxrQkFBa0IsNERBQTRELHdHQUF3RyxvQkFBb0IsK0RBQStELDZIQUE2SCxnQkFBZ0IsMERBQTBELHFCQUFxQiw4REFBOEQsYUFBYSxzREFBc0QsYUFBYSx1REFBdUQsdUpBQXVKLEtBQUssd0NBQXdDLEtBQUsseURBQXlELEtBQUssZ0RBQWdELEtBQUssa0NBQWtDLEtBQUssMkNBQTJDLEtBQUssa1FBQWtRLGNBQWMsWUFBWSwyUkFBMlIsY0FBYyxvQ0FBb0MsNFZBQTRWLGNBQWMsK0JBQStCLHVPQUF1TyxjQUFjLGdCQUFnQiwrTEFBK0wsY0FBYyxrQkFBa0IsdUZBQXVGLG1DQUFtQyx3RUFBd0UsMkJBQTJCLCtEQUErRCxhQUFhLGtEQUFrRCxnSUFBZ0ksaUJBQWlCLHNkQUFzZCxXQUFXLGtCQUFrQixzQkFBc0IsK0RBQStELGlCQUFpQiw2SkFBNkosa0JBQWtCLHFEQUFxRCxRQUFRLDJJQUEySSxpQkFBaUIsMkZBQTJGLFlBQVksZ0NBQWdDLFFBQVEsNENBQTRDLHdCQUF3Qiw4QkFBOEIscUZBQXFGLHdFQUF3RSw0QkFBNEIsNEJBQTRCLGNBQWMsNkhBQTZILG9CQUFvQiw4QkFBOEIsZ0NBQWdDLHdCQUF3QixFQUFFLDBCQUEwQiw0QkFBNEIsdUJBQXVCLDZCQUE2QixhQUFhLGtEQUFrRCxzSUFBc0kscUJBQXFCLE9BQU8sV0FBVyxvREFBb0Qsd0JBQXdCLHlCQUF5QiwrQkFBK0IsZ0JBQWdCLHFEQUFxRCw0QkFBNEIsc0JBQXNCLCtDQUErQyx3QkFBd0IsMkxBQTJMLDhCQUE4QixrR0FBa0csc0NBQXNDLHlCQUF5QixhQUFhLG9CQUFvQixZQUFZLGtEQUFrRCxjQUFjLG1HQUFtRywyQkFBMkIsOEJBQThCLG1CQUFtQix1SkFBdUosbUNBQW1DLHNFQUFzRSxxQkFBcUIsK0JBQStCLDJDQUEyQywwRkFBMEYsb0JBQW9CLDhCQUE4QixpRUFBaUUsZ0JBQWdCLGlGQUFpRix5R0FBeUcsU0FBUyx1SUFBdUksZ0JBQWdCLDJCQUEyQixPQUFPLGdIQUFnSCxRQUFRLDhHQUE4Ryx3QkFBd0IsbURBQW1ELG1CQUFtQixFQUFFLHlCQUF5QixzREFBc0QsdUdBQXVHLFVBQVUsMENBQTBDLHFFQUFxRSxtQ0FBbUMsZ0VBQWdFLHdIQUF3SCxtRUFBbUUsd0RBQXdELHFEQUFxRCxxQkFBcUIsZ0VBQWdFLGlCQUFpQixvQ0FBb0MsUUFBUSxxS0FBcUssUUFBUSxFQUFFLHFCQUFxQix3QkFBd0Isc0VBQXNFLDhMQUE4TCw4SEFBOEgsd0JBQXdCLFdBQVcsbUNBQW1DLE1BQU0sR0FBRyw0REFBNEQsZUFBZSxxREFBcUQsa0JBQWtCLDJDQUEyQyx3QkFBd0IsbUpBQW1KLFFBQVEsdUNBQXVDLEdBQUcsK0JBQStCLHFEQUFxRCw0RkFBNEYsc0lBQXNJLFNBQVMsdUJBQXVCLHdSQUF3UixZQUFZLE1BQU0sd0JBQXdCLDJDQUEyQyxxQkFBcUIsZ0hBQWdILGNBQWMsOENBQThDLGVBQWUsK0JBQStCLGlDQUFpQyxrQkFBa0IsZ0NBQWdDLHFCQUFxQiw0Q0FBNEMsc0RBQXNELGVBQWUsMERBQTBELHdCQUF3Qiw0TEFBNEwsZUFBZSxzQkFBc0IsNkJBQTZCLElBQUksb0JBQW9CLDBCQUEwQixrR0FBa0csY0FBYyxpTEFBaUwsMkJBQTJCLHNFQUFzRSxNQUFNLHdCQUF3QixnRUFBZ0UsbURBQW1ELFNBQVMsK0JBQStCLHVCQUF1QixzQ0FBc0MsUUFBUSx5SEFBeUgsZ0NBQWdDLHdDQUF3Qyx1QkFBdUIseUhBQXlILFdBQVcsUUFBUSx1Q0FBdUMsWUFBWSwwRUFBMEUsc0NBQXNDLCtDQUErQyxHQUFHLDJDQUEyQywwR0FBMEcsVUFBVSw0QkFBNEIsOEJBQThCLDhFQUE4RSxFQUFFLEdBQUcsa0JBQWtCLHdDQUF3QywyQkFBMkIsbUtBQW1LLGdEQUFnRCwrR0FBK0csdUZBQXVGLFdBQVcsb0RBQW9ELG1FQUFtRSxzRkFBc0Ysd0JBQXdCLGlCQUFpQiw0REFBNEQsa0JBQWtCLG9CQUFvQiwrRkFBK0YsMkNBQTJDLHNDQUFzQyxnR0FBZ0csZ0NBQWdDLGlFQUFpRSxlQUFlLGVBQWUsNkJBQTZCLGlEQUFpRCwyQkFBMkIsK0NBQStDLFVBQVUscUNBQXFDLFFBQVEscUJBQXFCLGtCQUFrQix1Q0FBdUMscURBQXFELGNBQWMsb0RBQW9ELFlBQVksNkJBQTZCLGtCQUFrQixxRUFBcUUsZ0VBQWdFLGVBQWUsK0NBQStDLGVBQWUseUNBQXlDLDhHQUE4Ryx5QkFBeUIseUVBQXlFLGFBQWEsOEJBQThCLDhDQUE4Qyx5QkFBeUIsK0ZBQStGLE1BQU0sZ0NBQWdDLG9GQUFvRixJQUFJLFVBQVUsb0hBQW9ILGVBQWUsd0tBQXdLLDJCQUEyQiw2QkFBNkIsNkRBQTZELEVBQUUsY0FBYyx3RkFBd0YsMkJBQTJCLDJCQUEyQixrRUFBa0UseUJBQXlCLE1BQU0sd0JBQXdCLGdFQUFnRSxrREFBa0QsZ0JBQWdCLHlDQUF5Qyx3QkFBd0IsZ0NBQWdDLHdDQUF3QyxjQUFjLHVEQUF1RCwyQkFBMkIsc0hBQXNILDZDQUE2QyxrREFBa0QsdUZBQXVGLFdBQVcsaURBQWlELG9EQUFvRCxXQUFXLGtEQUFrRCwrQ0FBK0Msa0JBQWtCLFNBQVMsc0NBQXNDLDRDQUE0QyxvR0FBb0csc0NBQXNDLElBQUksOEJBQThCLHNGQUFzRixvRkFBb0YsUUFBUSxXQUFXLEVBQUUsY0FBYyxvRkFBb0YsUUFBUSxXQUFXLEVBQUUsR0FBRyxTQUFTLG9GQUFvRixRQUFRLFdBQVcsR0FBRyxnQ0FBZ0MsOEJBQThCLHFCQUFxQiw4R0FBOEcsc0ZBQXNGLHNGQUFzRixlQUFlLGdCQUFnQixJQUFJLG9CQUFvQiwyRkFBMkYsOERBQThELGVBQWUsd0JBQXdCLGNBQWMsb0NBQW9DLDJCQUEyQix3REFBd0QseUJBQXlCLHNEQUFzRCxRQUFRLHNDQUFzQyxRQUFRLHNDQUFzQyxtREFBbUQsZUFBZSxtREFBbUQsb0JBQW9CLFlBQVksNEJBQTRCLFFBQVEsa0NBQWtDLFlBQVksd0JBQXdCLE9BQU8sMkRBQTJELHFCQUFxQixnREFBZ0QsU0FBUyxNQUFNLEVBQUUseUJBQXlCLG1DQUFtQyw0Q0FBNEMsd0VBQXdFLDJGQUEyRixtQzs7QUNBdGhpRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRTBDOzs7O0FBSTFDO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07Ozs7O0FBS3BELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0EsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixJQUFJLGdCQUFnQixJQUFJO0FBQ3hDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQixJQUFJO0FBQ3BCLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087OztBQ3RGUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRTBDOzs7O0FBSTFDO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07Ozs7O0FBS3BELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVjtBQUNBO0FBQ0EsUUFBUSxJQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdCQUFnQixjQUFjO0FBQzlCO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBOzs7O0FBSUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSTtBQUNWO0FBQ0E7QUFDQSxRQUFRLElBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZ0JBQWdCLGNBQWM7QUFDOUI7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7Ozs7QUNuR0E7O0FBRUE7QUFDQTtBQUNBOztBQUUwQzs7OztBQUkxQztBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOzs7OztBQUtwRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUMvRUE7O0FBRUE7QUFDQTtBQUNBOztBQUUwQzs7OztBQUkxQztBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOzs7OztBQUtwRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUNySkE7O0FBRUE7QUFDQTtBQUNBOztBQUUwQzs7OztBQUkxQztBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOzs7OztBQUtwRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFB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YUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0Es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T0FBTyxHQUFHLElBQUksNEJBQTRCLEVBQUU7QUFDbEQsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL2ltcG9ydCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX21hY19Db21wb25lbnRfeDY0L2dlbi9tb2pvL3B1YmxpYy9qcy9iaW5kaW5ncy5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9tYWNfQ29tcG9uZW50X3g2NC9nZW4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS9iaWdfYnVmZmVyLm1vam9tLm0uanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uLi9vdXQvY29kZV9zZWFyY2hfbWFjX0NvbXBvbmVudF94NjQvZ2VuL21vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZS5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX21hY19Db21wb25lbnRfeDY0L2dlbi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2ZpbGVfcGF0aC5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX21hY19Db21wb25lbnRfeDY0L2dlbi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL3RpbWUubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9tYWNfQ29tcG9uZW50X3g2NC9nZW4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS92YWx1ZXMubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9tYWNfQ29tcG9uZW50X3g2NC9nZW4vc2tpYS9wdWJsaWMvbW9qb20vaW1hZ2VfaW5mby5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX21hY19Db21wb25lbnRfeDY0L2dlbi9za2lhL3B1YmxpYy9tb2pvbS9iaXRtYXAubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9tYWNfQ29tcG9uZW50X3g2NC9nZW4vc2VydmljZXMvb25fZGV2aWNlX21vZGVsL3B1YmxpYy9tb2pvbS9vbl9kZXZpY2VfbW9kZWwubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9tYWNfQ29tcG9uZW50X3g2NC9nZW4vYnJhdmUvY29tcG9uZW50cy9sb2NhbF9haS9jb3JlL29uX2RldmljZV9zcGVlY2hfcmVjb2duaXRpb24ubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL29ubnhydW50aW1lLXdlYkAxLjI2LjAvbm9kZV9tb2R1bGVzL29ubnhydW50aW1lLXdlYi9kaXN0L29ydC53YXNtLmJ1bmRsZS5taW4ubWpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2xvY2FsX2FpL3Jlc291cmNlcy9zcGVlY2hfd29ya2VyL29ydF9lbnYudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvbG9jYWxfYWkvcmVzb3VyY2VzL3NwZWVjaF93b3JrZXIvY29uZmlncy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9sb2NhbF9haS9yZXNvdXJjZXMvc3BlZWNoX3dvcmtlci9hdWRpb19mZWF0dXJlcy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9sb2NhbF9haS9yZXNvdXJjZXMvc3BlZWNoX3dvcmtlci91dGlscy50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9sb2NhbF9haS9yZXNvdXJjZXMvc3BlZWNoX3dvcmtlci9uZW1vdHJvbl9yZWNvZ25pemVyLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2xvY2FsX2FpL3Jlc291cmNlcy9zcGVlY2hfd29ya2VyL3NwZWVjaF93b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBuZXcgVVJMKFwiLi9cIiwgaW1wb3J0Lm1ldGEudXJsKTtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJzcGVlY2hfd29ya2VyXCI6IDBcbn07XG5cbi8vIG5vIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsImNvbnN0IG1vam89e2ludGVybmFsOntpbnRlcmZhY2VTdXBwb3J0Ont9fSxpbnRlcmZhY2VDb250cm9sOnt9LHBpcGVDb250cm9sOnt9fTttb2pvLmludGVybmFsLmtBcnJheUhlYWRlclNpemU9OCxtb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplPTgsbW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyU2l6ZU9mZnNldD0wLG1vam8uaW50ZXJuYWwua1N0cnVjdEhlYWRlclZlcnNpb25PZmZzZXQ9NCxtb2pvLmludGVybmFsLmtVbmlvbkhlYWRlclNpemU9OCxtb2pvLmludGVybmFsLmtVbmlvbkRhdGFTaXplPTE2LG1vam8uaW50ZXJuYWwua01lc3NhZ2VWMEhlYWRlclNpemU9MjQsbW9qby5pbnRlcm5hbC5rTWVzc2FnZVYxSGVhZGVyU2l6ZT0zMixtb2pvLmludGVybmFsLmtNZXNzYWdlVjJIZWFkZXJTaXplPTQ4LG1vam8uaW50ZXJuYWwua01hcERhdGFTaXplPTI0LG1vam8uaW50ZXJuYWwua0VuY29kZWRJbnZhbGlkSGFuZGxlVmFsdWU9NDI5NDk2NzI5NSxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0V4cGVjdHNSZXNwb25zZT0xLG1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnSXNSZXNwb25zZT0yLG1vam8uaW50ZXJuYWwua0ludGVyZmFjZU5hbWVzcGFjZUJpdD0yMTQ3NDgzNjQ4LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW49ISFuZXcgVWludDhBcnJheShuZXcgVWludDE2QXJyYXkoWzFdKS5idWZmZXIpWzBdLG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyPWNsYXNze2NvbnN0cnVjdG9yKGUsbj0wKXtpZih0aGlzLmRhdGFWaWV3Xyx0aGlzLmJ5dGVPZmZzZXQsZSBpbnN0YW5jZW9mIG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKXRoaXMuZGF0YVZpZXdfPWUuZGF0YVZpZXdfLHRoaXMuYnl0ZU9mZnNldD1lLmJ5dGVPZmZzZXQrbjtlbHNlIGlmKGUgaW5zdGFuY2VvZiBEYXRhVmlldyl0aGlzLmRhdGFWaWV3Xz0wPT09ZS5ieXRlT2Zmc2V0JiZlLmJ5dGVMZW5ndGg9PT1lLmJ1ZmZlci5ieXRlTGVuZ3RoP2U6bmV3IERhdGFWaWV3KGUuYnVmZmVyKSx0aGlzLmJ5dGVPZmZzZXQ9ZS5ieXRlT2Zmc2V0K247ZWxzZXtpZighKGUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpdGhyb3cgbmV3IEVycm9yKFwiRGF0YVZpZXdXcmFwcGVyIGNvbnN0cnVjdG9yIHJlcXVpcmVzIGEgRGF0YVZpZXdXcmFwcGVyLCBEYXRhVmlldywgb3IgQXJyYXlCdWZmZXIgaW5zdGFuY2VcIik7dGhpcy5kYXRhVmlld189bmV3IERhdGFWaWV3KGUpLHRoaXMuYnl0ZU9mZnNldD1ufX1nZXQgYnVmZmVyKCl7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmJ1ZmZlcn1nZXRVaW50OChlKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uZ2V0VWludDgodGhpcy5ieXRlT2Zmc2V0K2UpfWdldEludDgoZSl7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldEludDgodGhpcy5ieXRlT2Zmc2V0K2UpfWdldFVpbnQxNihlLG4pe3JldHVybiB0aGlzLmRhdGFWaWV3Xy5nZXRVaW50MTYodGhpcy5ieXRlT2Zmc2V0K2Usbil9Z2V0SW50MTYoZSxuKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uZ2V0SW50MTYodGhpcy5ieXRlT2Zmc2V0K2Usbil9Z2V0VWludDMyKGUsbil7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldFVpbnQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuKX1nZXRJbnQzMihlLG4pe3JldHVybiB0aGlzLmRhdGFWaWV3Xy5nZXRJbnQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuKX1nZXRGbG9hdDMyKGUsbil7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldEZsb2F0MzIodGhpcy5ieXRlT2Zmc2V0K2Usbil9Z2V0RmxvYXQ2NChlLG4pe3JldHVybiB0aGlzLmRhdGFWaWV3Xy5nZXRGbG9hdDY0KHRoaXMuYnl0ZU9mZnNldCtlLG4pfXNldFVpbnQ4KGUsbil7dGhpcy5kYXRhVmlld18uc2V0VWludDgodGhpcy5ieXRlT2Zmc2V0K2Usbil9c2V0SW50OChlLG4pe3RoaXMuZGF0YVZpZXdfLnNldEludDgodGhpcy5ieXRlT2Zmc2V0K2Usbil9c2V0VWludDE2KGUsbix0KXt0aGlzLmRhdGFWaWV3Xy5zZXRVaW50MTYodGhpcy5ieXRlT2Zmc2V0K2Usbix0KX1zZXRJbnQxNihlLG4sdCl7dGhpcy5kYXRhVmlld18uc2V0SW50MTYodGhpcy5ieXRlT2Zmc2V0K2Usbix0KX1zZXRVaW50MzIoZSxuLHQpe3RoaXMuZGF0YVZpZXdfLnNldFVpbnQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuLHQpfXNldEludDMyKGUsbix0KXt0aGlzLmRhdGFWaWV3Xy5zZXRJbnQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuLHQpfXNldEZsb2F0MzIoZSxuLHQpe3RoaXMuZGF0YVZpZXdfLnNldEZsb2F0MzIodGhpcy5ieXRlT2Zmc2V0K2Usbix0KX1zZXRGbG9hdDY0KGUsbix0KXt0aGlzLmRhdGFWaWV3Xy5zZXRGbG9hdDY0KHRoaXMuYnl0ZU9mZnNldCtlLG4sdCl9fSxtb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfSxtb2pvLmludGVybmFsLmlzTnVsbGFibGVWYWx1ZUtpbmRGaWVsZD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09ZS5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXN9LG1vam8uaW50ZXJuYWwuYWxpZ249ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZSsobi1lJW4pJW59LG1vam8uaW50ZXJuYWwuc2V0SW50NjQ9ZnVuY3Rpb24oZSxuLHQpe21vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4/KGUuc2V0VWludDMyKG4sTnVtYmVyKEJpZ0ludCh0KSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLGUuc2V0SW50MzIobis0LE51bWJlcihCaWdJbnQodCk+PkJpZ0ludCgzMikmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSk6KGUuc2V0SW50MzIobixOdW1iZXIoQmlnSW50KHQpPj5CaWdJbnQoMzIpJkJpZ0ludCg0Mjk0OTY3Mjk1KSksbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksZS5zZXRVaW50MzIobis0LE51bWJlcihCaWdJbnQodCkmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSl9LG1vam8uaW50ZXJuYWwuc2V0VWludDY0PWZ1bmN0aW9uKGUsbix0KXttb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuPyhlLnNldFVpbnQzMihuLE51bWJlcihCaWdJbnQodCkmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxlLnNldFVpbnQzMihuKzQsTnVtYmVyKEJpZ0ludCh0KT4+QmlnSW50KDMyKSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKTooZS5zZXRVaW50MzIobixOdW1iZXIoQmlnSW50KHQpPj5CaWdJbnQoMzIpJkJpZ0ludCg0Mjk0OTY3Mjk1KSksbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksZS5zZXRVaW50MzIobis0LE51bWJlcihCaWdJbnQodCkmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSl9LG1vam8uaW50ZXJuYWwuZ2V0SW50NjQ9ZnVuY3Rpb24oZSxuKXtsZXQgdCxvO3JldHVybiBtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuPyh0PWUuZ2V0VWludDMyKG4sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbz1lLmdldEludDMyKG4rNCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSk6KHQ9ZS5nZXRVaW50MzIobis0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG89ZS5nZXRJbnQzMihuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKSxCaWdJbnQobyk8PEJpZ0ludCgzMil8QmlnSW50KHQpfSxtb2pvLmludGVybmFsLmdldFVpbnQ2ND1mdW5jdGlvbihlLG4pe2xldCB0LG87cmV0dXJuIG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4/KHQ9ZS5nZXRVaW50MzIobixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxvPWUuZ2V0VWludDMyKG4rNCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSk6KHQ9ZS5nZXRVaW50MzIobis0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG89ZS5nZXRVaW50MzIobixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSksQmlnSW50KG8pPDxCaWdJbnQoMzIpfEJpZ0ludCh0KX0sbW9qby5pbnRlcm5hbC5NZXNzYWdlRGltZW5zaW9ucyxtb2pvLmludGVybmFsLmdldE1vam9GaWVsZFZhbHVlPWZ1bmN0aW9uKGUsbil7aWYobi5maWVsZEdldHRlcilyZXR1cm4gbi5maWVsZEdldHRlcihlKTtpZihlJiZtb2pvLmludGVybmFsLmlzTnVsbGFibGVWYWx1ZUtpbmRGaWVsZChuKSl7Y29uc3QgdD1uLm51bGxhYmxlVmFsdWVLaW5kUHJvcGVydGllcyxvPSFtb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkKGVbdC5vcmlnaW5hbEZpZWxkTmFtZV0pO3JldHVybiB0LmlzUHJpbWFyeT9vOm8/ZVt0Lm9yaWdpbmFsRmllbGROYW1lXTpuLmRlZmF1bHRWYWx1ZX1yZXR1cm4gZVtuLm5hbWVdfSxtb2pvLmludGVybmFsLmNvbXB1dGVTdHJ1Y3REaW1lbnNpb25zPWZ1bmN0aW9uKGUsbil7bGV0IHQ9ZS5wYWNrZWRTaXplLG89MDtmb3IoY29uc3QgaSBvZiBlLmZpZWxkcyl7bGV0IGU9bW9qby5pbnRlcm5hbC5nZXRNb2pvRmllbGRWYWx1ZShuLGkpO2lmKG1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQoZSkmJihlPWkuZGVmYXVsdFZhbHVlKSxudWxsIT09ZSlpZihpLnR5cGUuJC5jb21wdXRlRGltZW5zaW9ucyl7Y29uc3Qgbj1pLnR5cGUuJC5jb21wdXRlRGltZW5zaW9ucyhlLGkubnVsbGFibGUpO3QrPW1vam8uaW50ZXJuYWwuYWxpZ24obi5zaXplLDgpLG4ubnVtSW50ZXJmYWNlSWRzJiYobys9bi5udW1JbnRlcmZhY2VJZHMpfWVsc2UgaS50eXBlLiQuaGFzSW50ZXJmYWNlSWQmJm8rK31yZXR1cm57c2l6ZTp0LG51bUludGVyZmFjZUlkczpvfX0sbW9qby5pbnRlcm5hbC5jb21wdXRlVW5pb25EaW1lbnNpb25zPWZ1bmN0aW9uKGUsbix0KXtsZXQgbz1uP21vam8uaW50ZXJuYWwua1VuaW9uRGF0YVNpemU6MCxpPTA7Y29uc3Qgcj1PYmplY3Qua2V5cyh0KTtpZigxIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBmb3IgJHtlLm5hbWV9IG11c3QgYmUgYW4gT2JqZWN0IHdpdGggYSBzaW5nbGUgcHJvcGVydHkgbmFtZWQgb25lIG9mOiBgK09iamVjdC5rZXlzKGUuZmllbGRzKS5qb2luKFwiLFwiKSk7Y29uc3Qgcz1yWzBdLGE9ZS5maWVsZHNbc10sbD10W3NdO2lmKCFtb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkKGwpKWlmKGEudHlwZS4kLmNvbXB1dGVEaW1lbnNpb25zKXtjb25zdCBlPSEhYS50eXBlLiQudW5pb25TcGVjfHxhLm51bGxhYmxlLG49YS50eXBlLiQuY29tcHV0ZURpbWVuc2lvbnMobCxlKTtvKz1tb2pvLmludGVybmFsLmFsaWduKG4uc2l6ZSw4KSxuLm51bUludGVyZmFjZUlkcyYmKGkrPW4ubnVtSW50ZXJmYWNlSWRzKX1lbHNlIGEudHlwZS4kLmhhc0ludGVyZmFjZUlkJiZpKys7cmV0dXJue3NpemU6byxudW1JbnRlcmZhY2VJZHM6aX19LG1vam8uaW50ZXJuYWwuY29tcHV0ZUlubGluZUFycmF5U2l6ZT1mdW5jdGlvbihlLG4pe3JldHVybiBlLmVsZW1lbnRUeXBlPT09bW9qby5pbnRlcm5hbC5Cb29sP21vam8uaW50ZXJuYWwua0FycmF5SGVhZGVyU2l6ZSttb2pvLmludGVybmFsLmNvbXB1dGVIYXNWYWx1ZUJpdGZpZWxkU2l6ZShlLG4ubGVuZ3RoKSsobi5sZW5ndGgrNz4+Myk6bW9qby5pbnRlcm5hbC5rQXJyYXlIZWFkZXJTaXplK21vam8uaW50ZXJuYWwuY29tcHV0ZUhhc1ZhbHVlQml0ZmllbGRTaXplKGUsbi5sZW5ndGgpK24ubGVuZ3RoKmUuZWxlbWVudFR5cGUuJC5hcnJheUVsZW1lbnRTaXplKCEhZS5lbGVtZW50TnVsbGFibGUpfSxtb2pvLmludGVybmFsLmNvbXB1dGVIYXNWYWx1ZUJpdGZpZWxkU2l6ZT1mdW5jdGlvbihlLG4pe2lmKCEoISFlLmVsZW1lbnROdWxsYWJsZSYmISFlLmVsZW1lbnRUeXBlLiQuaXNWYWx1ZVR5cGUpKXJldHVybiAwO2NvbnN0IHQ9ZS5lbGVtZW50VHlwZS4kLmFycmF5RWxlbWVudFNpemUoITApLG89OCp0O3JldHVybigobitvLTEpL298MCkqdH0sbW9qby5pbnRlcm5hbC5jb21wdXRlVG90YWxBcnJheVNpemU9ZnVuY3Rpb24oZSxuKXtjb25zdCB0PW1vam8uaW50ZXJuYWwuY29tcHV0ZUlubGluZUFycmF5U2l6ZShlLG4pO2lmKCFlLmVsZW1lbnRUeXBlLiQuY29tcHV0ZURpbWVuc2lvbnMpcmV0dXJuIHQ7bGV0IG89dDtmb3IobGV0IHQgb2Ygbiltb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkKHQpfHwobys9bW9qby5pbnRlcm5hbC5hbGlnbihlLmVsZW1lbnRUeXBlLiQuY29tcHV0ZURpbWVuc2lvbnModCwhIWUuZWxlbWVudE51bGxhYmxlKS5zaXplLDgpKTtyZXR1cm4gb30sbW9qby5pbnRlcm5hbC5NZXNzYWdlPWNsYXNze2NvbnN0cnVjdG9yKGUsbix0LG8saSxyLHMpe2NvbnN0IGE9bW9qby5pbnRlcm5hbC5jb21wdXRlU3RydWN0RGltZW5zaW9ucyhyLHMpO2xldCBsLGM7YS5udW1JbnRlcmZhY2VJZHM+MD8obD1tb2pvLmludGVybmFsLmtNZXNzYWdlVjJIZWFkZXJTaXplLGM9Mik6dCYobW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdFeHBlY3RzUmVzcG9uc2V8bW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlKT8obD1tb2pvLmludGVybmFsLmtNZXNzYWdlVjFIZWFkZXJTaXplLGM9MSk6KGw9bW9qby5pbnRlcm5hbC5rTWVzc2FnZVYwSGVhZGVyU2l6ZSxjPTApO2NvbnN0IGQ9bCthLnNpemUsdT1hLm51bUludGVyZmFjZUlkcz4wP21vam8uaW50ZXJuYWwua0FycmF5SGVhZGVyU2l6ZSs0KmEubnVtSW50ZXJmYWNlSWRzOjAscD1kK21vam8uaW50ZXJuYWwuYWxpZ24odSw4KTt0aGlzLmJ1ZmZlcj1uZXcgQXJyYXlCdWZmZXIocCksdGhpcy5oYW5kbGVzPVtdO2NvbnN0IG09bmV3IERhdGFWaWV3KHRoaXMuYnVmZmVyKTttLnNldFVpbnQzMigwLGwsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbS5zZXRVaW50MzIoNCxjLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG0uc2V0VWludDMyKDgsbixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxtLnNldFVpbnQzMigxMixvLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG0uc2V0VWludDMyKDE2LHQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbS5zZXRVaW50MzIoMjAsMCksYz49MSYmKG1vam8uaW50ZXJuYWwuc2V0VWludDY0KG0sMjQsaSksYz49MiYmKG1vam8uaW50ZXJuYWwuc2V0VWludDY0KG0sMzIsQmlnSW50KDE2KSksbW9qby5pbnRlcm5hbC5zZXRVaW50NjQobSw0MCxCaWdJbnQoZC00MCkpLG0uc2V0VWludDMyKGQsdSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxtLnNldFVpbnQzMihkKzQsYS5udW1JbnRlcmZhY2VJZHN8fDAsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbikpKSx0aGlzLm5leHRJbnRlcmZhY2VJZEluZGV4Xz0wLHRoaXMuaW50ZXJmYWNlSWRzXz1udWxsLGEubnVtSW50ZXJmYWNlSWRzJiYodGhpcy5pbnRlcmZhY2VJZHNfPW5ldyBVaW50MzJBcnJheSh0aGlzLmJ1ZmZlcixkK21vam8uaW50ZXJuYWwua0FycmF5SGVhZGVyU2l6ZSxhLm51bUludGVyZmFjZUlkcykpLHRoaXMubmV4dEFsbG9jYXRpb25PZmZzZXRfPWw7Y29uc3QgZj10aGlzLmFsbG9jYXRlKHIucGFja2VkU2l6ZSk7bmV3IG1vam8uaW50ZXJuYWwuRW5jb2Rlcih0aGlzLGYse2VuZHBvaW50OmV9KS5lbmNvZGVTdHJ1Y3RJbmxpbmUocixzKX1hbGxvY2F0ZShlKXtjb25zdCBuPW1vam8uaW50ZXJuYWwuYWxpZ24oZSw4KSx0PW5ldyBEYXRhVmlldyh0aGlzLmJ1ZmZlcix0aGlzLm5leHRBbGxvY2F0aW9uT2Zmc2V0XyxuKTtyZXR1cm4gdGhpcy5uZXh0QWxsb2NhdGlvbk9mZnNldF8rPW4sdH19LG1vam8uaW50ZXJuYWwuTWVzc2FnZUNvbnRleHQsbW9qby5pbnRlcm5hbC5FbmNvZGVyPWNsYXNze2NvbnN0cnVjdG9yKGUsbix0PW51bGwpe3RoaXMuY29udGV4dF89dCx0aGlzLm1lc3NhZ2VfPWUsdGhpcy5kYXRhXz1ufWVuY29kZUJvb2woZSxuLHQpe2NvbnN0IG89dGhpcy5kYXRhXy5nZXRVaW50OChlKTt0P3RoaXMuZGF0YV8uc2V0VWludDgoZSxvfDE8PG4pOnRoaXMuZGF0YV8uc2V0VWludDgoZSxvJn4oMTw8bikpfWVuY29kZUludDgoZSxuKXt0aGlzLmRhdGFfLnNldEludDgoZSxuKX1lbmNvZGVVaW50OChlLG4pe3RoaXMuZGF0YV8uc2V0VWludDgoZSxuKX1lbmNvZGVJbnQxNihlLG4pe3RoaXMuZGF0YV8uc2V0SW50MTYoZSxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWVuY29kZVVpbnQxNihlLG4pe3RoaXMuZGF0YV8uc2V0VWludDE2KGUsbixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1lbmNvZGVJbnQzMihlLG4pe3RoaXMuZGF0YV8uc2V0SW50MzIoZSxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWVuY29kZVVpbnQzMihlLG4pe3RoaXMuZGF0YV8uc2V0VWludDMyKGUsbixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1lbmNvZGVJbnQ2NChlLG4pe21vam8uaW50ZXJuYWwuc2V0SW50NjQodGhpcy5kYXRhXyxlLG4pfWVuY29kZVVpbnQ2NChlLG4pe21vam8uaW50ZXJuYWwuc2V0VWludDY0KHRoaXMuZGF0YV8sZSxuKX1lbmNvZGVGbG9hdChlLG4pe3RoaXMuZGF0YV8uc2V0RmxvYXQzMihlLG4sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZW5jb2RlRG91YmxlKGUsbil7dGhpcy5kYXRhXy5zZXRGbG9hdDY0KGUsbixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1lbmNvZGVIYW5kbGUoZSxuKXt0aGlzLmVuY29kZVVpbnQzMihlLHRoaXMubWVzc2FnZV8uaGFuZGxlcy5sZW5ndGgpLHRoaXMubWVzc2FnZV8uaGFuZGxlcy5wdXNoKG4pfWVuY29kZUFzc29jaWF0ZWRFbmRwb2ludChlLG4pe2NvbnNvbGUuYXNzZXJ0KG4uaXNQZW5kaW5nQXNzb2NpYXRpb24sXCJleHBlY3RlZCB1bmJvdW5kIGFzc29jaWF0ZWQgZW5kcG9pbnRcIik7Y29uc3QgdD10aGlzLmNvbnRleHRfLmVuZHBvaW50LmFzc29jaWF0ZVBlZXJPZk91dGdvaW5nRW5kcG9pbnQobiksbz10aGlzLm1lc3NhZ2VfLm5leHRJbnRlcmZhY2VJZEluZGV4XysrO3RoaXMuZW5jb2RlVWludDMyKGUsbyksdGhpcy5tZXNzYWdlXy5pbnRlcmZhY2VJZHNfW29dPXR9ZW5jb2RlU3RyaW5nKGUsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwiVW54cGVjdGVkIG5vbi1zdHJpbmcgdmFsdWUgZm9yIHN0cmluZyBmaWVsZC5cIik7dGhpcy5lbmNvZGVBcnJheSh7ZWxlbWVudFR5cGU6bW9qby5pbnRlcm5hbC5VaW50OH0sZSxtb2pvLmludGVybmFsLkVuY29kZXIuc3RyaW5nVG9VdGY4Qnl0ZXMobikpfWVuY29kZU9mZnNldChlLG4pe3RoaXMuZW5jb2RlVWludDY0KGUsbi10aGlzLmRhdGFfLmJ5dGVPZmZzZXQtZSl9ZW5jb2RlQXJyYXkoZSxuLHQpe2NvbnN0IG89bW9qby5pbnRlcm5hbC5jb21wdXRlSW5saW5lQXJyYXlTaXplKGUsdCksaT10aGlzLm1lc3NhZ2VfLmFsbG9jYXRlKG8pLHI9bmV3IG1vam8uaW50ZXJuYWwuRW5jb2Rlcih0aGlzLm1lc3NhZ2VfLGksdGhpcy5jb250ZXh0Xyk7dGhpcy5lbmNvZGVPZmZzZXQobixpLmJ5dGVPZmZzZXQpLHIuZW5jb2RlVWludDMyKDAsbyksci5lbmNvZGVVaW50MzIoNCx0Lmxlbmd0aCksdGhpcy5tYXliZUVuY29kZUhhc1ZhbHVlQml0ZmllbGQoZSxyLDgsdCk7bGV0IHM9OCttb2pvLmludGVybmFsLmNvbXB1dGVIYXNWYWx1ZUJpdGZpZWxkU2l6ZShlLHQubGVuZ3RoKTtpZihlLmVsZW1lbnRUeXBlPT09bW9qby5pbnRlcm5hbC5Cb29sKXtsZXQgZT0wO2Zvcihjb25zdCBuIG9mIHQpci5lbmNvZGVCb29sKHMsZSxuKSxlKyssOD09ZSYmKGU9MCxzKyspfWVsc2UgZm9yKGNvbnN0IG4gb2YgdCl7aWYobnVsbD09PW4pe2lmKCFlLmVsZW1lbnROdWxsYWJsZSl0aHJvdyBuZXcgRXJyb3IoXCJUcnlpbmcgdG8gc2VuZCBhIG51bGwgZWxlbWVudCBpbiBhbiBhcnJheSBvZiBub24tbnVsbGFibGUgZWxlbWVudHNcIik7ZS5lbGVtZW50VHlwZS4kLmVuY29kZU51bGwocixzKX1lbHNlIGUuZWxlbWVudFR5cGUuJC5lbmNvZGUobixyLHMsMCwhIWUuZWxlbWVudE51bGxhYmxlKTtzKz1lLmVsZW1lbnRUeXBlLiQuYXJyYXlFbGVtZW50U2l6ZSghIWUuZWxlbWVudE51bGxhYmxlKX19bWF5YmVFbmNvZGVIYXNWYWx1ZUJpdGZpZWxkKGUsbix0LG8pe2lmKCFlLmVsZW1lbnROdWxsYWJsZXx8IWUuZWxlbWVudFR5cGUuJC5pc1ZhbHVlVHlwZSlyZXR1cm47bGV0IGk9MCxyPXQ7Zm9yKGNvbnN0IGUgb2YgbyludWxsPT1lP24uZW5jb2RlQm9vbChyLGksITEpOm4uZW5jb2RlQm9vbChyLGksITApLGkrKyw4PT1pJiYoaT0wLHIrKyl9ZW5jb2RlTWFwKGUsbix0KXtsZXQgbyxpO1wiTWFwXCI9PXQuY29uc3RydWN0b3IubmFtZT8obz1BcnJheS5mcm9tKHQua2V5cygpKSxpPUFycmF5LmZyb20odC52YWx1ZXMoKSkpOihvPU9iamVjdC5rZXlzKHQpLGk9by5tYXAoKGU9PnRbZV0pKSk7Y29uc3Qgcj10aGlzLm1lc3NhZ2VfLmFsbG9jYXRlKG1vam8uaW50ZXJuYWwua01hcERhdGFTaXplKSxzPW5ldyBtb2pvLmludGVybmFsLkVuY29kZXIodGhpcy5tZXNzYWdlXyxyLHRoaXMuY29udGV4dF8pO3RoaXMuZW5jb2RlT2Zmc2V0KG4sci5ieXRlT2Zmc2V0KSxzLmVuY29kZVVpbnQzMigwLG1vam8uaW50ZXJuYWwua01hcERhdGFTaXplKSxzLmVuY29kZVVpbnQzMig0LDApLHMuZW5jb2RlQXJyYXkoe2VsZW1lbnRUeXBlOmUua2V5VHlwZX0sOCxvKSxzLmVuY29kZUFycmF5KHtlbGVtZW50VHlwZTplLnZhbHVlVHlwZSxlbGVtZW50TnVsbGFibGU6ZS52YWx1ZU51bGxhYmxlfSwxNixpKX1lbmNvZGVTdHJ1Y3QoZSxuLHQpe2NvbnN0IG89dGhpcy5tZXNzYWdlXy5hbGxvY2F0ZShlLnBhY2tlZFNpemUpLGk9bmV3IG1vam8uaW50ZXJuYWwuRW5jb2Rlcih0aGlzLm1lc3NhZ2VfLG8sdGhpcy5jb250ZXh0Xyk7dGhpcy5lbmNvZGVPZmZzZXQobixvLmJ5dGVPZmZzZXQpLGkuZW5jb2RlU3RydWN0SW5saW5lKGUsdCl9ZW5jb2RlU3RydWN0SW5saW5lKGUsbil7Y29uc3QgdD1lLnZlcnNpb25zO3RoaXMuZW5jb2RlVWludDMyKDAsZS5wYWNrZWRTaXplKSx0aGlzLmVuY29kZVVpbnQzMig0LHRbdC5sZW5ndGgtMV0udmVyc2lvbik7Zm9yKGNvbnN0IHQgb2YgZS5maWVsZHMpe2NvbnN0IG89bW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyU2l6ZSt0LnBhY2tlZE9mZnNldCxpPWU9Pnt0LnR5cGUuJC5lbmNvZGUoZSx0aGlzLG8sdC5wYWNrZWRCaXRPZmZzZXQsdC5udWxsYWJsZSl9LHI9bW9qby5pbnRlcm5hbC5pc051bGxPclVuZGVmaW5lZChuKT92b2lkIDA6bW9qby5pbnRlcm5hbC5nZXRNb2pvRmllbGRWYWx1ZShuLHQpO2lmKG1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQobil8fG1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQocikpaWYobnVsbD09PXQuZGVmYXVsdFZhbHVlKXtpZighdC5udWxsYWJsZSl0aHJvdyBuZXcgRXJyb3IoZS5uYW1lKycgbWlzc2luZyB2YWx1ZSBmb3Igbm9uLW51bGxhYmxlIGZpZWxkIFwiJyt0Lm5hbWUrYFwiLCBnb3Q6IFwiJHtyfVwiLi4uYCk7dC50eXBlLiQuZW5jb2RlTnVsbCh0aGlzLG8pfWVsc2UgaSh0LmRlZmF1bHRWYWx1ZSk7ZWxzZSBpKHIpfX1lbmNvZGVVbmlvbkFzUG9pbnRlcihlLG4sdCl7Y29uc3Qgbz10aGlzLm1lc3NhZ2VfLmFsbG9jYXRlKG1vam8uaW50ZXJuYWwua1VuaW9uRGF0YVNpemUpLGk9bmV3IG1vam8uaW50ZXJuYWwuRW5jb2Rlcih0aGlzLm1lc3NhZ2VfLG8sdGhpcy5jb250ZXh0Xyk7dGhpcy5lbmNvZGVPZmZzZXQobixvLmJ5dGVPZmZzZXQpLGkuZW5jb2RlVW5pb24oZSwwLHQpfWVuY29kZVVuaW9uKGUsbix0KXtjb25zdCBvPU9iamVjdC5rZXlzKHQpO2lmKDEhPT1vLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGZvciAke2UubmFtZX0gbXVzdCBiZSBhbiBPYmplY3Qgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSBuYW1lZCBvbmUgb2Y6IGArT2JqZWN0LmtleXMoZS5maWVsZHMpLmpvaW4oXCIsXCIpKTtjb25zdCBpPW9bMF0scj1lLmZpZWxkc1tpXTt0aGlzLmVuY29kZVVpbnQzMihuLG1vam8uaW50ZXJuYWwua1VuaW9uRGF0YVNpemUpLHRoaXMuZW5jb2RlVWludDMyKG4rNCxyLm9yZGluYWwpO2NvbnN0IHM9bittb2pvLmludGVybmFsLmtVbmlvbkhlYWRlclNpemU7dm9pZCAwPT09ci50eXBlLiQudW5pb25TcGVjP3IudHlwZS4kLmVuY29kZSh0W2ldLHRoaXMscywwLHIubnVsbGFibGUpOnRoaXMuZW5jb2RlVW5pb25Bc1BvaW50ZXIoci50eXBlLiQudW5pb25TcGVjLHMsdFtpXSl9c3RhdGljIHN0cmluZ1RvVXRmOEJ5dGVzKGUpe3JldHVybiBtb2pvLmludGVybmFsLkVuY29kZXIudGV4dEVuY29kZXJ8fChtb2pvLmludGVybmFsLkVuY29kZXIudGV4dEVuY29kZXI9bmV3IFRleHRFbmNvZGVyKFwidXRmLThcIikpLG1vam8uaW50ZXJuYWwuRW5jb2Rlci50ZXh0RW5jb2Rlci5lbmNvZGUoZSl9fSxtb2pvLmludGVybmFsLkVuY29kZXIudGV4dEVuY29kZXI9bnVsbCxtb2pvLmludGVybmFsLkRlY29kZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSxuLHQ9bnVsbCl7dGhpcy5jb250ZXh0Xz10LHRoaXMuZGF0YV89ZSBpbnN0YW5jZW9mIG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyP2U6bmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKGUpLHRoaXMuaGFuZGxlc189bn1kZWNvZGVCb29sKGUsbil7cmV0dXJuISEodGhpcy5kYXRhXy5nZXRVaW50OChlKSYxPDxuKX1kZWNvZGVJbnQ4KGUpe3JldHVybiB0aGlzLmRhdGFfLmdldEludDgoZSl9ZGVjb2RlVWludDgoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0VWludDgoZSl9ZGVjb2RlSW50MTYoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0SW50MTYoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1kZWNvZGVVaW50MTYoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0VWludDE2KGUsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZGVjb2RlSW50MzIoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0SW50MzIoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1kZWNvZGVVaW50MzIoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0VWludDMyKGUsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZGVjb2RlSW50NjQoZSl7cmV0dXJuIG1vam8uaW50ZXJuYWwuZ2V0SW50NjQodGhpcy5kYXRhXyxlKX1kZWNvZGVVaW50NjQoZSl7cmV0dXJuIG1vam8uaW50ZXJuYWwuZ2V0VWludDY0KHRoaXMuZGF0YV8sZSl9ZGVjb2RlRmxvYXQoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0RmxvYXQzMihlLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWRlY29kZURvdWJsZShlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRGbG9hdDY0KGUsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZGVjb2RlSGFuZGxlKGUpe2NvbnN0IG49dGhpcy5kYXRhXy5nZXRVaW50MzIoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKTtpZig0Mjk0OTY3Mjk1PT1uKXJldHVybiBudWxsO2lmKG4+PXRoaXMuaGFuZGxlc18ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkRlY29kZWQgaW52YWxpZCBoYW5kbGUgaW5kZXhcIik7cmV0dXJuIHRoaXMuaGFuZGxlc19bbl19ZGVjb2RlU3RyaW5nKGUpe2NvbnN0IG49dGhpcy5kZWNvZGVPZmZzZXQoZSk7aWYoIW4pcmV0dXJuIG51bGw7bW9qby5pbnRlcm5hbC5EZWNvZGVyLnRleHREZWNvZGVyfHwobW9qby5pbnRlcm5hbC5EZWNvZGVyLnRleHREZWNvZGVyPW5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpKTtjb25zdCB0PXRoaXMuZGVjb2RlVWludDMyKG4tdGhpcy5kYXRhXy5ieXRlT2Zmc2V0KzQpO2lmKDA9PT10KXJldHVyblwiXCI7Y29uc3Qgbz1uKzg7cmV0dXJuIG1vam8uaW50ZXJuYWwuRGVjb2Rlci50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkodGhpcy5kYXRhXy5idWZmZXIsbyx0KSl9ZGVjb2RlT2Zmc2V0KGUpe2NvbnN0IG49dGhpcy5kZWNvZGVVaW50NjQoZSk7aWYoMD09bilyZXR1cm4gMDtpZihuPkJpZ0ludChOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikpdGhyb3cgbmV3IEVycm9yKFwiTWVzYWdlIG9mZnNldCB0b28gbGFyZ2VcIik7cmV0dXJuIHRoaXMuZGF0YV8uYnl0ZU9mZnNldCtlK051bWJlcihuKX1kZWNvZGVBcnJheShlLG4pe2NvbnN0IHQ9dGhpcy5kZWNvZGVPZmZzZXQobik7aWYoIXQpcmV0dXJuIG51bGw7Y29uc3Qgbz1uZXcgbW9qby5pbnRlcm5hbC5EZWNvZGVyKG5ldyBtb2pvLmludGVybmFsLkRhdGFWaWV3V3JhcHBlcih0aGlzLmRhdGFfLHQtdGhpcy5kYXRhXy5ieXRlT2Zmc2V0KSx0aGlzLmhhbmRsZXNfLHRoaXMuY29udGV4dF8pLGk9by5kZWNvZGVVaW50MzIoNCk7aWYoIWkpcmV0dXJuW107Y29uc3Qgcj0hIWUuZWxlbWVudE51bGxhYmxlJiZlLmVsZW1lbnRUeXBlLiQuaXNWYWx1ZVR5cGUscz1yP25ldyBBcnJheShpKTpudWxsO2lmKHIpe2xldCBlPTgsbj0wO2ZvcihsZXQgdD0wO3Q8aTsrK3Qpc1t0XT1vLmRlY29kZUJvb2woZSxuKSxuKyssOD09PW4mJihuPTAsZSsrKX1sZXQgYT04K21vam8uaW50ZXJuYWwuY29tcHV0ZUhhc1ZhbHVlQml0ZmllbGRTaXplKGUsaSk7Y29uc3QgbD1uZXcgQXJyYXkoaSk7aWYoZS5lbGVtZW50VHlwZT09PW1vam8uaW50ZXJuYWwuQm9vbClmb3IobGV0IGU9MDtlPGk7KytlKXImJiFzW2VdP2xbZV09bnVsbDpsW2VdPW8uZGVjb2RlQm9vbChhKyhlPj4zKSxlJTgpO2Vsc2UgZm9yKGxldCBuPTA7bjxpOysrbil7aWYociYmIXNbbl0pbFtuXT1udWxsO2Vsc2V7Y29uc3QgdD1lLmVsZW1lbnRUeXBlLiQuZGVjb2RlKG8sYSwwLCEhZS5lbGVtZW50TnVsbGFibGUpO2lmKG51bGw9PT10JiYhZS5lbGVtZW50TnVsbGFibGUpdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZWQgdW5leHBlY3RlZCBhcnJheSBlbGVtZW50XCIpO2xbbl09dH1hKz1lLmVsZW1lbnRUeXBlLiQuYXJyYXlFbGVtZW50U2l6ZSghIWUuZWxlbWVudE51bGxhYmxlKX1yZXR1cm4gbH1kZWNvZGVNYXAoZSxuKXtjb25zdCB0PXRoaXMuZGVjb2RlT2Zmc2V0KG4pO2lmKCF0KXJldHVybiBudWxsO2NvbnN0IG89bmV3IG1vam8uaW50ZXJuYWwuRGVjb2RlcihuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIodGhpcy5kYXRhXyx0LXRoaXMuZGF0YV8uYnl0ZU9mZnNldCksdGhpcy5oYW5kbGVzXyx0aGlzLmNvbnRleHRfKSxpPW8uZGVjb2RlVWludDMyKDApLHI9by5kZWNvZGVVaW50MzIoNCk7aWYoaSE9bW9qby5pbnRlcm5hbC5rTWFwRGF0YVNpemV8fDAhPXIpdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZWQgaW52YWxpZCBtYXAgZGF0YVwiKTtjb25zdCBzPW8uZGVjb2RlQXJyYXkoe2VsZW1lbnRUeXBlOmUua2V5VHlwZX0sOCksYT1vLmRlY29kZUFycmF5KHtlbGVtZW50VHlwZTplLnZhbHVlVHlwZSxlbGVtZW50TnVsbGFibGU6ZS52YWx1ZU51bGxhYmxlfSwxNik7aWYocy5sZW5ndGghPWEubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIlJlY2VpdmVkIGludmFsaWQgbWFwIGRhdGFcIik7aWYoIWUua2V5VHlwZS4kLmlzVmFsaWRPYmplY3RLZXlUeXBlKXtjb25zdCBlPW5ldyBNYXA7Zm9yKGxldCBuPTA7bjxzLmxlbmd0aDsrK24pZS5zZXQoc1tuXSxhW25dKTtyZXR1cm4gZX1jb25zdCBsPXt9O2ZvcihsZXQgZT0wO2U8cy5sZW5ndGg7KytlKWxbc1tlXV09YVtlXTtyZXR1cm4gbH1kZWNvZGVTdHJ1Y3QoZSxuKXtjb25zdCB0PXRoaXMuZGVjb2RlT2Zmc2V0KG4pO2lmKCF0KXJldHVybiBudWxsO3JldHVybiBuZXcgbW9qby5pbnRlcm5hbC5EZWNvZGVyKG5ldyBtb2pvLmludGVybmFsLkRhdGFWaWV3V3JhcHBlcih0aGlzLmRhdGFfLHQtdGhpcy5kYXRhXy5ieXRlT2Zmc2V0KSx0aGlzLmhhbmRsZXNfLHRoaXMuY29udGV4dF8pLmRlY29kZVN0cnVjdElubGluZShlKX1pc1N0cnVjdEhlYWRlclZhbGlkKGUsbix0KXtjb25zdCBvPWUudmVyc2lvbnM7Zm9yKGxldCBlPW8ubGVuZ3RoLTE7ZT49MDstLWUpe2NvbnN0IGk9b1tlXTtpZih0PmkudmVyc2lvbilyZXR1cm4gbj49aS5wYWNrZWRTaXplO2lmKHQ9PWkudmVyc2lvbilyZXR1cm4gbj09aS5wYWNrZWRTaXplfXRocm93IG5ldyBFcnJvcihgSW1wb3NzaWJsZSB2ZXJzaW9uICR7dH0gZm9yIHN0cnVjdCAke2UubmFtZX1gKX13cmFwU3RydWN0SW5EYXRhVmlldyhlLG4sdCl7Y29uc3Qgbz10aGlzLmRlY29kZU9mZnNldChuKTtpZighbylyZXR1cm4gbnVsbDtjb25zdCBpPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHRoaXMuZGF0YV8sby10aGlzLmRhdGFfLmJ5dGVPZmZzZXQpLHRoaXMuaGFuZGxlc18sdGhpcy5jb250ZXh0Xykscj1pLmRlY29kZVVpbnQzMihtb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplT2Zmc2V0KSxzPWkuZGVjb2RlVWludDMyKG1vam8uaW50ZXJuYWwua1N0cnVjdEhlYWRlclZlcnNpb25PZmZzZXQpO2lmKCFpLmlzU3RydWN0SGVhZGVyVmFsaWQoZSxyLHMpKXRocm93IG5ldyBFcnJvcihgUmVjZWl2ZWQgJHtlLm5hbWV9IG9mIGludmFsaWQgc2l6ZSAoJHtyfSkgYW5kL29yIHZlcnNpb24gKCR7c30pYCk7cmV0dXJuIG5ldyB0KGkscyxlLmZpZWxkcyl9ZGVjb2RlU3RydWN0SW5saW5lKGUpe2NvbnN0IG49dGhpcy5kZWNvZGVVaW50MzIobW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyU2l6ZU9mZnNldCksdD10aGlzLmRlY29kZVVpbnQzMihtb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJWZXJzaW9uT2Zmc2V0KTtpZighdGhpcy5pc1N0cnVjdEhlYWRlclZhbGlkKGUsbix0KSl0aHJvdyBuZXcgRXJyb3IoYFJlY2VpdmVkICR7ZS5uYW1lfSBvZiBpbnZhbGlkIHNpemUgKCR7bn0pIGFuZC9vciB2ZXJzaW9uICgke3R9KWApO2NvbnN0IG89e307Zm9yKGxldCBuPTA7bjxlLmZpZWxkcy5sZW5ndGg7KytuKXtjb25zdCBpPWUuZmllbGRzW25dO2lmKG1vam8uaW50ZXJuYWwuaXNOdWxsYWJsZVZhbHVlS2luZEZpZWxkKGkpKXtjb25zdCBuPWkubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzO2lmKCFuLmlzUHJpbWFyeSljb250aW51ZTt7Y29uc3Qgcj1pO29bbi5vcmlnaW5hbEZpZWxkTmFtZV09dGhpcy5kZWNvZGVTdHJ1Y3ROdWxsYWJsZVZhbHVlRmllbGQocixlLmZpZWxkcyx0KX19ZWxzZSBvW2kubmFtZV09dGhpcy5kZWNvZGVTdHJ1Y3RGaWVsZChpLHQpfXJldHVybiBvfWRlY29kZVN0cnVjdEZpZWxkKGUsbil7aWYoZS5taW5WZXJzaW9uPm4pcmV0dXJuIGUuZGVmYXVsdFZhbHVlO2NvbnN0IHQ9bW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyU2l6ZStlLnBhY2tlZE9mZnNldCxvPWUudHlwZS4kLmRlY29kZSh0aGlzLHQsZS5wYWNrZWRCaXRPZmZzZXQsISFlLm51bGxhYmxlKTtpZihudWxsPT09byYmIWUubnVsbGFibGUpdGhyb3cgbmV3IEVycm9yKGBSZWNlaXZlZCAke2UubmFtZX0gd2l0aCBpbnZhbGlkIG51bGwgZmllbGQgXCIke2UubmFtZX1cImApO3JldHVybiBvfWRlY29kZVN0cnVjdE51bGxhYmxlVmFsdWVGaWVsZChlLG4sdCl7aWYoZS5taW5WZXJzaW9uPnQpcmV0dXJuIG51bGw7aWYoIXRoaXMuZGVjb2RlU3RydWN0RmllbGQoZSx0KSlyZXR1cm4gbnVsbDtjb25zdCBvPWUubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzLGk9bi5maW5kKChlPT5lLm5hbWU9PT1vLmxpbmtlZFZhbHVlRmllbGROYW1lKSk7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZpbmQgdGhlIGV4cGVjdGVkIHZhbHVlIGZpZWxkIHNwZWM6IFwiK28ubGlua2VkVmFsdWVGaWVsZE5hbWUpO3JldHVybiB0aGlzLmRlY29kZVN0cnVjdEZpZWxkKGksdCl9ZGVjb2RlVW5pb25Gcm9tUG9pbnRlcihlLG4pe2NvbnN0IHQ9dGhpcy5kZWNvZGVPZmZzZXQobik7aWYoIXQpcmV0dXJuIG51bGw7cmV0dXJuIG5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHRoaXMuZGF0YV8sdC10aGlzLmRhdGFfLmJ5dGVPZmZzZXQpLHRoaXMuaGFuZGxlc18sdGhpcy5jb250ZXh0XykuZGVjb2RlVW5pb24oZSwwKX1kZWNvZGVVbmlvbihlLG4pe2lmKDA9PT10aGlzLmRlY29kZVVpbnQzMihuKSlyZXR1cm4gbnVsbDtjb25zdCB0PXRoaXMuZGVjb2RlVWludDMyKG4rNCk7Zm9yKGNvbnN0IG8gaW4gZS5maWVsZHMpe2NvbnN0IGk9ZS5maWVsZHNbb107aWYoaS5vcmRpbmFsPT09dCl7Y29uc3QgdD0oKCk9Pntjb25zdCBlPW4rbW9qby5pbnRlcm5hbC5rVW5pb25IZWFkZXJTaXplO3JldHVybiB2b2lkIDAhPT1pLnR5cGUuJC51bmlvblNwZWM/dGhpcy5kZWNvZGVVbmlvbkZyb21Qb2ludGVyKGkudHlwZS4kLnVuaW9uU3BlYyxlKTppLnR5cGUuJC5kZWNvZGUodGhpcyxlLDAsaS5udWxsYWJsZSl9KSgpO2lmKG51bGw9PT10JiYhaS5udWxsYWJsZSl0aHJvdyBuZXcgRXJyb3IoYFJlY2VpdmVkICR7ZS5uYW1lfSB3aXRoIGludmFsaWQgbnVsbCBmaWVsZDogJHtpLm5hbWV9YCk7Y29uc3Qgcj17fTtyZXR1cm4gcltvXT10LHJ9fX1kZWNvZGVJbnRlcmZhY2VQcm94eShlLG4pe2NvbnN0IHQ9dGhpcy5kZWNvZGVIYW5kbGUobik7cmV0dXJuIHQ/bmV3IGUodCk6bnVsbH1kZWNvZGVJbnRlcmZhY2VSZXF1ZXN0KGUsbil7Y29uc3QgdD10aGlzLmRlY29kZUhhbmRsZShuKTtyZXR1cm4gdD9uZXcgZShtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuY3JlYXRlRW5kcG9pbnQodCkpOm51bGx9ZGVjb2RlQXNzb2NpYXRlZEVuZHBvaW50KGUpe2lmKCF0aGlzLmNvbnRleHRffHwhdGhpcy5jb250ZXh0Xy5lbmRwb2ludCl0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgZGVzZXJpYWxpemUgYXNzb2NpYXRlZCBlbmRwb2ludCB3aXRob3V0IGNvbnRleHRcIik7Y29uc3Qgbj10aGlzLmNvbnRleHRfLmVuZHBvaW50LHQ9bmV3IERhdGFWaWV3KHRoaXMuZGF0YV8uYnVmZmVyKSxvPU51bWJlcihtb2pvLmludGVybmFsLmdldFVpbnQ2NCh0LDQwKSksaT10LmdldFVpbnQzMihvKzQ0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLHI9bmV3IFVpbnQzMkFycmF5KHQuYnVmZmVyLG8rbW9qby5pbnRlcm5hbC5rQXJyYXlIZWFkZXJTaXplKzQwLGkpW3RoaXMuZGVjb2RlVWludDMyKGUpXSxzPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQobi5yb3V0ZXIscik7cmV0dXJuIG4ucm91dGVyLmFkZEVuZHBvaW50KHMsciksc319LG1vam8uaW50ZXJuYWwuRGVjb2Rlci50ZXh0RGVjb2Rlcj1udWxsLG1vam8uaW50ZXJuYWwuTWVzc2FnZUhlYWRlcixtb2pvLmludGVybmFsLmRlc2VyaWFsaXplTWVzc2FnZUhlYWRlcj1mdW5jdGlvbihlKXtjb25zdCBuPWUuZ2V0VWludDMyKDAsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksdD1lLmdldFVpbnQzMig0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pO2lmKDA9PXQmJm4hPW1vam8uaW50ZXJuYWwua01lc3NhZ2VWMEhlYWRlclNpemV8fDE9PXQmJm4hPW1vam8uaW50ZXJuYWwua01lc3NhZ2VWMUhlYWRlclNpemV8fHQ+PTImJm48bW9qby5pbnRlcm5hbC5rTWVzc2FnZVYySGVhZGVyU2l6ZSl0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCBpbnZhbGlkIG1lc3NhZ2UgaGVhZGVyXCIpO3JldHVybntoZWFkZXJTaXplOm4saGVhZGVyVmVyc2lvbjp0LGludGVyZmFjZUlkOmUuZ2V0VWludDMyKDgsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksb3JkaW5hbDplLmdldFVpbnQzMigxMixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxmbGFnczplLmdldFVpbnQzMigxNixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxyZXF1ZXN0SWQ6dDwxPzA6ZS5nZXRVaW50MzIoMjQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9fSxtb2pvLmludGVybmFsLk1vam9tVHlwZUluZm8sbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGUsbW9qby5pbnRlcm5hbC5BcnJheVNwZWMsbW9qby5pbnRlcm5hbC5NYXBTcGVjLG1vam8uaW50ZXJuYWwuTnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5pc1ByaW1hcnksdGhpcy5saW5rZWRWYWx1ZUZpZWxkTmFtZSx0aGlzLm9yaWdpbmFsRmllbGROYW1lfX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZFNwZWMsbW9qby5pbnRlcm5hbC5TdHJ1Y3RWZXJzaW9uSW5mbyxtb2pvLmludGVybmFsLlN0cnVjdFNwZWMsbW9qby5pbnRlcm5hbC5VbmlvbkZpZWxkU3BlYyxtb2pvLmludGVybmFsLlVuaW9uU3BlYyxtb2pvLmludGVybmFsLkJvb2w9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlQm9vbCh0LG8sZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt0aHJvdyBuZXcgRXJyb3IoXCJlbmNvZGluZyBib29sIG51bGwgZnJvbSB0eXBlIGlzIG5vdCBpbXBsZW1lbnRlZFwiKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUJvb2wobix0KX0sYXJyYXlFbGVtZW50U2l6ZTplPT4xLGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5JbnQ4PXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZUludDgodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlSW50OChuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlSW50OChuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT4xLGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5VaW50OD17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVVaW50OCh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50OChuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlVWludDgobil9LGFycmF5RWxlbWVudFNpemU6ZT0+MSxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuSW50MTY9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlSW50MTYodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlSW50MTYobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUludDE2KG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjIsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLlVpbnQxNj17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVVaW50MTYodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlVWludDE2KG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVVaW50MTYobil9LGFycmF5RWxlbWVudFNpemU6ZT0+Mixpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuSW50MzI9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlSW50MzIodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlSW50MzIobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUludDMyKG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjQsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLlVpbnQzMj17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVVaW50MzIodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlVWludDMyKG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVVaW50MzIobil9LGFycmF5RWxlbWVudFNpemU6ZT0+NCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuSW50NjQ9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlSW50NjQodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlSW50NjQobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUludDY0KG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLlVpbnQ2ND17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVVaW50NjQodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlVWludDY0KG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVVaW50NjQobil9LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMSxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuRmxvYXQ9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlRmxvYXQodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlRmxvYXQobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUZsb2F0KG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjQsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLkRvdWJsZT17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVEb3VibGUodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlRG91YmxlKG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVEb3VibGUobil9LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuSGFuZGxlPXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZUhhbmRsZSh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50MzIobiw0Mjk0OTY3Mjk1KX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUhhbmRsZShuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT40LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGlzVmFsdWVUeXBlOiExfX0sbW9qby5pbnRlcm5hbC5TdHJpbmc9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlU3RyaW5nKHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVTdHJpbmcobil9LGNvbXB1dGVEaW1lbnNpb25zOmZ1bmN0aW9uKGUsbil7cmV0dXJue3NpemU6bW9qby5pbnRlcm5hbC5jb21wdXRlVG90YWxBcnJheVNpemUoe2VsZW1lbnRUeXBlOm1vam8uaW50ZXJuYWwuVWludDh9LG1vam8uaW50ZXJuYWwuRW5jb2Rlci5zdHJpbmdUb1V0ZjhCeXRlcyhlKSl9fSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITF9fSxtb2pvLmludGVybmFsLkFycmF5PWZ1bmN0aW9uKGUsbil7Y29uc3QgdD17ZWxlbWVudFR5cGU6ZSxlbGVtZW50TnVsbGFibGU6bn07cmV0dXJueyQ6e2FycmF5U3BlYzp0LGVuY29kZTpmdW5jdGlvbihlLG4sbyxpLHIpe24uZW5jb2RlQXJyYXkodCxvLGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7fSxkZWNvZGU6ZnVuY3Rpb24oZSxuLG8saSl7cmV0dXJuIGUuZGVjb2RlQXJyYXkodCxuKX0sY29tcHV0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oZSxuKXtyZXR1cm57c2l6ZTptb2pvLmludGVybmFsLmNvbXB1dGVUb3RhbEFycmF5U2l6ZSh0LGUpfX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGlzVmFsdWVUeXBlOiExfX19LG1vam8uaW50ZXJuYWwuTWFwPWZ1bmN0aW9uKGUsbix0KXtjb25zdCBvPXtrZXlUeXBlOmUsdmFsdWVUeXBlOm4sdmFsdWVOdWxsYWJsZTp0fTtyZXR1cm57JDp7bWFwU3BlYzpvLGVuY29kZTpmdW5jdGlvbihlLG4sdCxpLHIpe24uZW5jb2RlTWFwKG8sdCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe30sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LGkpe3JldHVybiBlLmRlY29kZU1hcChvLG4pfSxjb21wdXRlRGltZW5zaW9uczpmdW5jdGlvbihvLGkpe2NvbnN0IHI9XCJNYXBcIj09by5jb25zdHJ1Y3Rvci5uYW1lP0FycmF5LmZyb20oby5rZXlzKCkpOk9iamVjdC5rZXlzKG8pLHM9XCJNYXBcIj09by5jb25zdHJ1Y3Rvci5uYW1lP0FycmF5LmZyb20oby52YWx1ZXMoKSk6ci5tYXAoKGU9Pm9bZV0pKTtyZXR1cm57c2l6ZTptb2pvLmludGVybmFsLmtNYXBEYXRhU2l6ZSttb2pvLmludGVybmFsLmFsaWduKG1vam8uaW50ZXJuYWwuY29tcHV0ZVRvdGFsQXJyYXlTaXplKHtlbGVtZW50VHlwZTplfSxyKSw4KSttb2pvLmludGVybmFsLmNvbXB1dGVUb3RhbEFycmF5U2l6ZSh7ZWxlbWVudFR5cGU6bixlbGVtZW50TnVsbGFibGU6dH0scyl9fSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITF9fX0sbW9qby5pbnRlcm5hbC5FbnVtPWZ1bmN0aW9uKCl7cmV0dXJueyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlVWludDMyKHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVJbnQzMihuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT40LGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX19LG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQ9ZnVuY3Rpb24oZSxuLHQsbyxpLHIscz0wLGE9dm9pZCAwLGw9dm9pZCAwKXtyZXR1cm57bmFtZTplLHBhY2tlZE9mZnNldDpuLHBhY2tlZEJpdE9mZnNldDp0LHR5cGU6byxkZWZhdWx0VmFsdWU6aSxudWxsYWJsZTpyLG1pblZlcnNpb246cyxudWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXM6YSxmaWVsZEdldHRlcjpsfX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3Q9ZnVuY3Rpb24oZSxuLHQsbyl7Y29uc3QgaT1vLm1hcCgoZT0+KHt2ZXJzaW9uOmVbMF0scGFja2VkU2l6ZTplWzFdfSkpKSxyPXtuYW1lOm4scGFja2VkU2l6ZTppW2kubGVuZ3RoLTFdLnBhY2tlZFNpemUsZmllbGRzOnQsdmVyc2lvbnM6aX07ZS4kPXtzdHJ1Y3RTcGVjOnIsZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVTdHJ1Y3Qocix0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7fSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlU3RydWN0KHIsbil9LGNvbXB1dGVEaW1lbnNpb25zOmZ1bmN0aW9uKGUsbil7cmV0dXJuIG1vam8uaW50ZXJuYWwuY29tcHV0ZVN0cnVjdERpbWVuc2lvbnMocixlKX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExfX0sbW9qby5pbnRlcm5hbC5UeXBlbWFwcGVkU3RydWN0PWZ1bmN0aW9uKGUsbix0LG8saSxyKXtjb25zdCBzPXIubWFwKChlPT4oe3ZlcnNpb246ZVswXSxwYWNrZWRTaXplOmVbMV19KSkpLGE9e25hbWU6bixwYWNrZWRTaXplOnNbcy5sZW5ndGgtMV0ucGFja2VkU2l6ZSxmaWVsZHM6aSx2ZXJzaW9uczpzfTtlLiQ9e3N0cnVjdFNwZWM6YSxlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVN0cnVjdChhLHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4saSxyKXtjb25zdCBzPWUud3JhcFN0cnVjdEluRGF0YVZpZXcoYSxuLHQpO3JldHVybiBtb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkKHMpP251bGw6by5jb252ZXJ0KHMpfSxjb21wdXRlRGltZW5zaW9uczpmdW5jdGlvbihlLG4pe3JldHVybiBtb2pvLmludGVybmFsLmNvbXB1dGVTdHJ1Y3REaW1lbnNpb25zKGEsZSl9LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMX19LG1vam8uaW50ZXJuYWwuY3JlYXRlU3RydWN0RGVzZXJpYWxpemVyPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihuKXtpZihudWxsPT1lLiR8fG51bGw9PWUuJC5zdHJ1Y3RTcGVjKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RydWN0IG1vam9tIHR5cGUhXCIpO3JldHVybiBuZXcgbW9qby5pbnRlcm5hbC5EZWNvZGVyKG4sW10pLmRlY29kZVN0cnVjdElubGluZShlLiQuc3RydWN0U3BlYyl9fSxtb2pvLmludGVybmFsLlVuaW9uPWZ1bmN0aW9uKGUsbix0KXtjb25zdCBvPXtuYW1lOm4sZmllbGRzOnR9O2UuJD17dW5pb25TcGVjOm8sZW5jb2RlOmZ1bmN0aW9uKGUsbix0LGkscil7bi5lbmNvZGVVbmlvbihvLHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxpKXtyZXR1cm4gZS5kZWNvZGVVbmlvbihvLG4pfSxjb21wdXRlRGltZW5zaW9uczpmdW5jdGlvbihlLG4pe3JldHVybiBtb2pvLmludGVybmFsLmNvbXB1dGVVbmlvbkRpbWVuc2lvbnMobyxuLGUpfSxhcnJheUVsZW1lbnRTaXplOmU9PmU/ODoxNixpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMX19LG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUHJveHk9ZnVuY3Rpb24oZSl7cmV0dXJueyQ6e2VuY29kZTpmdW5jdGlvbihuLHQsbyxpLHIpe2NvbnN0IHM9bi5wcm94eS51bmJpbmQoKTtjb25zb2xlLmFzc2VydChzLGB1bmV4cGVjdGVkIG51bGwgJHtlLm5hbWV9YCk7Y29uc3QgYT1zLnJlbGVhc2VQaXBlKCk7dC5lbmNvZGVIYW5kbGUobyxhKSx0LmVuY29kZVVpbnQzMihvKzQsMCl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQzMihuLDQyOTQ5NjcyOTUpfSxkZWNvZGU6ZnVuY3Rpb24obix0LG8saSl7cmV0dXJuIG4uZGVjb2RlSW50ZXJmYWNlUHJveHkoZSx0KX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGlzVmFsdWVUeXBlOiExfX19LG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdD1mdW5jdGlvbihlKXtyZXR1cm57JDp7ZW5jb2RlOmZ1bmN0aW9uKG4sdCxvLGkscil7aWYoIW4uaGFuZGxlKXRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgbnVsbCBcIitlLm5hbWUpO3QuZW5jb2RlSGFuZGxlKG8sbi5oYW5kbGUucmVsZWFzZVBpcGUoKSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQzMihuLDQyOTQ5NjcyOTUpfSxkZWNvZGU6ZnVuY3Rpb24obix0LG8saSl7cmV0dXJuIG4uZGVjb2RlSW50ZXJmYWNlUmVxdWVzdChlLHQpfSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITF9fX0sbW9qby5pbnRlcm5hbC5Bc3NvY2lhdGVkSW50ZXJmYWNlUHJveHk9ZnVuY3Rpb24oZSl7cmV0dXJueyQ6e3R5cGU6ZSxlbmNvZGU6ZnVuY3Rpb24obix0LG8saSxyKXtjb25zb2xlLmFzc2VydChuLnByb3h5LmVuZHBvaW50JiZuLnByb3h5LmVuZHBvaW50LmlzUGVuZGluZ0Fzc29jaWF0aW9uLGBleHBlY3RlZCAke2UubmFtZX0gdG8gYmUgYXNzb2NpYXRlZCBhbmQgdW5ib3VuZGApLHQuZW5jb2RlQXNzb2NpYXRlZEVuZHBvaW50KG8sbi5wcm94eS5lbmRwb2ludCksdC5lbmNvZGVVaW50MzIobys0LDApfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50MzIobiw0Mjk0OTY3Mjk1KSxlLmVuY29kZVVpbnQzMihuKzQsMCl9LGRlY29kZTpmdW5jdGlvbihuLHQsbyxpKXtyZXR1cm4gbmV3IGUobi5kZWNvZGVBc3NvY2lhdGVkRW5kcG9pbnQodCkpfSxhcnJheUVsZW1lbnRTaXplOmU9Pnt0aHJvdyBuZXcgRXJyb3IoXCJBcnJheXMgb2YgYXNzb2NpYXRlZCBlbmRwb2ludHMgYXJlIG5vdCB5ZXQgc3VwcG9ydGVkXCIpfSxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMSxoYXNJbnRlcmZhY2VJZDohMCxpc1ZhbHVlVHlwZTohMX19fSxtb2pvLmludGVybmFsLkFzc29jaWF0ZWRJbnRlcmZhY2VSZXF1ZXN0PWZ1bmN0aW9uKGUpe3JldHVybnskOnt0eXBlOmUsZW5jb2RlOmZ1bmN0aW9uKG4sdCxvLGkscil7Y29uc29sZS5hc3NlcnQobi5oYW5kbGUmJm4uaGFuZGxlLmlzUGVuZGluZ0Fzc29jaWF0aW9uLGBleHBlY3RlZCAke2UubmFtZX0gdG8gYmUgYXNzb2NpYXRlZCBhbmQgdW5ib3VuZGApLHQuZW5jb2RlQXNzb2NpYXRlZEVuZHBvaW50KG8sbi5oYW5kbGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50MzIobiw0Mjk0OTY3Mjk1KX0sZGVjb2RlOmZ1bmN0aW9uKG4sdCxvLGkpe3JldHVybiBuZXcgZShuLmRlY29kZUFzc29jaWF0ZWRFbmRwb2ludCh0KSl9LGFycmF5RWxlbWVudFNpemU6ZT0+e3Rocm93IG5ldyBFcnJvcihcIkFycmF5cyBvZiBhc3NvY2lhdGVkIGVuZHBvaW50cyBhcmUgbm90IHlldCBzdXBwb3J0ZWRcIil9LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGhhc0ludGVyZmFjZUlkOiEwLGlzVmFsdWVUeXBlOiExfX19LG1vam8uaW50ZXJuYWwuZGVjb2RlU3RydWN0RmllbGQ9ZnVuY3Rpb24oZSxuLHQpe3JldHVybiBlLmRlY29kZVN0cnVjdEZpZWxkKG4sdCl9LG1vam8uaW50ZXJuYWwuZGVjb2RlU3RydWN0TnVsbGFibGVWYWx1ZUZpZWxkPWZ1bmN0aW9uKGUsbix0LG8pe24ubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzLmxpbmtlZFZhbHVlRmllbGROYW1lO3JldHVybiBlLmRlY29kZVN0cnVjdE51bGxhYmxlVmFsdWVGaWVsZChuLHQsbyl9LG1vam8uaW50ZXJmYWNlQ29udHJvbC5SVU5fTUVTU0FHRV9JRD00Mjk0OTY3Mjk1LG1vam8uaW50ZXJmYWNlQ29udHJvbC5SVU5fT1JfQ0xPU0VfUElQRV9NRVNTQUdFX0lEPTQyOTQ5NjcyOTQsbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk1lc3NhZ2VQYXJhbXNTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuUmVzcG9uc2VNZXNzYWdlUGFyYW1zU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblNwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5RdWVyeVZlcnNpb25SZXN1bHRTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuRmx1c2hGb3JUZXN0aW5nU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlTWVzc2FnZVBhcmFtc1NwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5SZXF1aXJlVmVyc2lvblNwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5FbmFibGVJZGxlVHJhY2tpbmdTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuTWVzc2FnZUFja1NwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5Ob3RpZnlJZGxlU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bklucHV0U3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk91dHB1dFNwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0U3BlYz17JDp7fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk1lc3NhZ2VQYXJhbXNTcGVjLiQsXCJSdW5NZXNzYWdlUGFyYW1zXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJpbnB1dFwiLDAsMCxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuSW5wdXRTcGVjLiQsbnVsbCwhMSwwKV0sW1swLDI0XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5NZXNzYWdlUGFyYW1zPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5pbnB1dH19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5SZXNwb25zZU1lc3NhZ2VQYXJhbXNTcGVjLiQsXCJSdW5SZXNwb25zZU1lc3NhZ2VQYXJhbXNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcIm91dHB1dFwiLDAsMCxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3V0cHV0U3BlYy4kLG51bGwsITAsMCldLFtbMCwyNF1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuUmVzcG9uc2VNZXNzYWdlUGFyYW1zPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5vdXRwdXR9fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLmludGVyZmFjZUNvbnRyb2wuUXVlcnlWZXJzaW9uU3BlYy4kLFwiUXVlcnlWZXJzaW9uXCIsW10sW1swLDhdXSksbW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvbj1jbGFzc3tjb25zdHJ1Y3Rvcigpe319LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5RdWVyeVZlcnNpb25SZXN1bHRTcGVjLiQsXCJRdWVyeVZlcnNpb25SZXN1bHRcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcInZlcnNpb25cIiwwLDAsbW9qby5pbnRlcm5hbC5VaW50MzIsMCwhMSwwKV0sW1swLDE2XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5RdWVyeVZlcnNpb25SZXN1bHQ9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnZlcnNpb259fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLmludGVyZmFjZUNvbnRyb2wuRmx1c2hGb3JUZXN0aW5nU3BlYy4kLFwiRmx1c2hGb3JUZXN0aW5nXCIsW10sW1swLDhdXSksbW9qby5pbnRlcmZhY2VDb250cm9sLkZsdXNoRm9yVGVzdGluZz1jbGFzc3tjb25zdHJ1Y3Rvcigpe319LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNTcGVjLiQsXCJSdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImlucHV0XCIsMCwwLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0U3BlYy4kLG51bGwsITEsMCldLFtbMCwyNF1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5pbnB1dH19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5SZXF1aXJlVmVyc2lvblNwZWMuJCxcIlJlcXVpcmVWZXJzaW9uXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJ2ZXJzaW9uXCIsMCwwLG1vam8uaW50ZXJuYWwuVWludDMyLDAsITEsMCldLFtbMCwxNl1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUmVxdWlyZVZlcnNpb249Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnZlcnNpb259fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLmludGVyZmFjZUNvbnRyb2wuRW5hYmxlSWRsZVRyYWNraW5nU3BlYy4kLFwiRW5hYmxlSWRsZVRyYWNraW5nXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJ0aW1lb3V0SW5NaWNyb3NlY29uZHNcIiwwLDAsbW9qby5pbnRlcm5hbC5JbnQ2NCxCaWdJbnQoMCksITEsMCldLFtbMCwxNl1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuRW5hYmxlSWRsZVRyYWNraW5nPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy50aW1lb3V0SW5NaWNyb3NlY29uZHN9fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLmludGVyZmFjZUNvbnRyb2wuTWVzc2FnZUFja1NwZWMuJCxcIk1lc3NhZ2VBY2tcIixbXSxbWzAsOF1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuTWVzc2FnZUFjaz1jbGFzc3tjb25zdHJ1Y3Rvcigpe319LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5Ob3RpZnlJZGxlU3BlYy4kLFwiTm90aWZ5SWRsZVwiLFtdLFtbMCw4XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5Ob3RpZnlJZGxlPWNsYXNze2NvbnN0cnVjdG9yKCl7fX0sbW9qby5pbnRlcm5hbC5Vbmlvbihtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuSW5wdXRTcGVjLiQsXCJSdW5JbnB1dFwiLHtxdWVyeVZlcnNpb246e29yZGluYWw6MCx0eXBlOm1vam8uaW50ZXJmYWNlQ29udHJvbC5RdWVyeVZlcnNpb25TcGVjLiR9LGZsdXNoRm9yVGVzdGluZzp7b3JkaW5hbDoxLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLkZsdXNoRm9yVGVzdGluZ1NwZWMuJH19KSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuSW5wdXQsbW9qby5pbnRlcm5hbC5Vbmlvbihtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3V0cHV0U3BlYy4kLFwiUnVuT3V0cHV0XCIse3F1ZXJ5VmVyc2lvblJlc3VsdDp7b3JkaW5hbDowLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblJlc3VsdFNwZWMuJH19KSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3V0cHV0LG1vam8uaW50ZXJuYWwuVW5pb24obW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXRTcGVjLiQsXCJSdW5PckNsb3NlUGlwZUlucHV0XCIse3JlcXVpcmVWZXJzaW9uOntvcmRpbmFsOjAsdHlwZTptb2pvLmludGVyZmFjZUNvbnRyb2wuUmVxdWlyZVZlcnNpb25TcGVjLiR9LGVuYWJsZUlkbGVUcmFja2luZzp7b3JkaW5hbDoxLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLkVuYWJsZUlkbGVUcmFja2luZ1NwZWMuJH0sbWVzc2FnZUFjazp7b3JkaW5hbDoyLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLk1lc3NhZ2VBY2tTcGVjLiR9LG5vdGlmeUlkbGU6e29yZGluYWw6Myx0eXBlOm1vam8uaW50ZXJmYWNlQ29udHJvbC5Ob3RpZnlJZGxlU3BlYy4kfX0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0LG1vam8ucGlwZUNvbnRyb2wuUlVOX09SX0NMT1NFX1BJUEVfTUVTU0FHRV9JRD00Mjk0OTY3Mjk0LG1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zU3BlYz17JDp7fX0sbW9qby5waXBlQ29udHJvbC5EaXNjb25uZWN0UmVhc29uU3BlYz17JDp7fX0sbW9qby5waXBlQ29udHJvbC5QZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnRTcGVjPXskOnt9fSxtb2pvLnBpcGVDb250cm9sLlBhdXNlVW50aWxGbHVzaENvbXBsZXRlc1NwZWM9eyQ6e319LG1vam8ucGlwZUNvbnRyb2wuRmx1c2hBc3luY1NwZWM9eyQ6e319LG1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVJbnB1dFNwZWM9eyQ6e319LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zU3BlYy4kLFwiUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJpbnB1dFwiLDAsMCxtb2pvLnBpcGVDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXRTcGVjLiQsbnVsbCwhMSwwKV0sW1swLDI0XV0pLG1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5pbnB1dH19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8ucGlwZUNvbnRyb2wuRGlzY29ubmVjdFJlYXNvblNwZWMuJCxcIkRpc2Nvbm5lY3RSZWFzb25cIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImN1c3RvbVJlYXNvblwiLDAsMCxtb2pvLmludGVybmFsLlVpbnQzMiwwLCExLDApLG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJkZXNjcmlwdGlvblwiLDgsMCxtb2pvLmludGVybmFsLlN0cmluZyxudWxsLCExLDApXSxbWzAsMjRdXSksbW9qby5waXBlQ29udHJvbC5EaXNjb25uZWN0UmVhc29uPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jdXN0b21SZWFzb24sdGhpcy5kZXNjcmlwdGlvbn19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8ucGlwZUNvbnRyb2wuUGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50U3BlYy4kLFwiUGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50XCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJpZFwiLDAsMCxtb2pvLmludGVybmFsLlVpbnQzMiwwLCExLDApLG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJkaXNjb25uZWN0UmVhc29uXCIsOCwwLG1vam8ucGlwZUNvbnRyb2wuRGlzY29ubmVjdFJlYXNvblNwZWMuJCxudWxsLCEwLDApXSxbWzAsMjRdXSksbW9qby5waXBlQ29udHJvbC5QZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnQ9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmlkLHRoaXMuZGlzY29ubmVjdFJlYXNvbn19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8ucGlwZUNvbnRyb2wuUGF1c2VVbnRpbEZsdXNoQ29tcGxldGVzU3BlYy4kLFwiUGF1c2VVbnRpbEZsdXNoQ29tcGxldGVzXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJmbHVzaFBpcGVcIiwwLDAsbW9qby5pbnRlcm5hbC5IYW5kbGUsbnVsbCwhMSwwKV0sW1swLDE2XV0pLG1vam8ucGlwZUNvbnRyb2wuUGF1c2VVbnRpbEZsdXNoQ29tcGxldGVzPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5mbHVzaFBpcGV9fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLnBpcGVDb250cm9sLkZsdXNoQXN5bmNTcGVjLiQsXCJGbHVzaEFzeW5jXCIsW21vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXCJmbHVzaGVyUGlwZVwiLDAsMCxtb2pvLmludGVybmFsLkhhbmRsZSxudWxsLCExLDApXSxbWzAsMTZdXSksbW9qby5waXBlQ29udHJvbC5GbHVzaEFzeW5jPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5mbHVzaGVyUGlwZX19LG1vam8uaW50ZXJuYWwuVW5pb24obW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0U3BlYy4kLFwiUnVuT3JDbG9zZVBpcGVJbnB1dFwiLHtwZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnQ6e29yZGluYWw6MCx0eXBlOm1vam8ucGlwZUNvbnRyb2wuUGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50U3BlYy4kfSxwYXVzZVVudGlsRmx1c2hDb21wbGV0ZXM6e29yZGluYWw6MSx0eXBlOm1vam8ucGlwZUNvbnRyb2wuUGF1c2VVbnRpbEZsdXNoQ29tcGxldGVzU3BlYy4kfSxmbHVzaEFzeW5jOntvcmRpbmFsOjIsdHlwZTptb2pvLnBpcGVDb250cm9sLkZsdXNoQXN5bmNTcGVjLiR9fSksbW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Sb3V0ZXJNZXNzYWdlLG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Sb3V0ZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSxuKXt0aGlzLnBpcGVfPWUsdGhpcy5tZXNzYWdlc189W10sdGhpcy5kaXNwYXRjaEluUHJvZ3Jlc3NfPSExLHRoaXMucmVhZGVyXz1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkhhbmRsZVJlYWRlcihlKSx0aGlzLnJlYWRlcl8ub25SZWFkPXRoaXMub25NZXNzYWdlUmVjZWl2ZWRfLmJpbmQodGhpcyksdGhpcy5yZWFkZXJfLm9uRXJyb3I9dGhpcy5vbkVycm9yXy5iaW5kKHRoaXMpLHRoaXMuZW5kcG9pbnRzXz1uZXcgTWFwLHRoaXMubmV4dEludGVyZmFjZUlkXz0xLHRoaXMuaW50ZXJmYWNlSWROYW1lc3BhY2VfPW4/bW9qby5pbnRlcm5hbC5rSW50ZXJmYWNlTmFtZXNwYWNlQml0OjAsdGhpcy5waXBlQ29udHJvbEhhbmRsZXJfPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGlwZUNvbnRyb2xNZXNzYWdlSGFuZGxlcih0aGlzLHRoaXMub25QZWVyRW5kcG9pbnRDbG9zZWRfLmJpbmQodGhpcykpfWdldCBwaXBlKCl7cmV0dXJuIHRoaXMucGlwZV99Z2VuZXJhdGVJbnRlcmZhY2VJZCgpe3JldHVybih0aGlzLm5leHRJbnRlcmZhY2VJZF8rK3x0aGlzLmludGVyZmFjZUlkTmFtZXNwYWNlXyk+Pj4wfWFkZEVuZHBvaW50KGUsbil7MD09PW4mJnRoaXMucmVhZGVyXy5zdGFydCgpLGNvbnNvbGUuYXNzZXJ0KHRoaXMuaXNSZWFkaW5nKCksXCJhZGRpbmcgYSBzZWNvbmRhcnkgZW5kcG9pbnQgd2l0aCBubyBwcmltYXJ5XCIpLHRoaXMuZW5kcG9pbnRzXy5zZXQobixlKSx0aGlzLmRpc3BhdGNoTWVzc2FnZXNfKCl9cmVtb3ZlRW5kcG9pbnQoZSl7dGhpcy5lbmRwb2ludHNfLmRlbGV0ZShlKSwwPT09ZSYmdGhpcy5yZWFkZXJfLnN0b3AoKX1jbG9zZSgpe2NvbnNvbGUuYXNzZXJ0KDA9PT10aGlzLmVuZHBvaW50c18uc2l6ZSxcImNsb3NpbmcgcHJpbWFyeSBlbmRwb2ludCB3aXRoIHNlY29uZGFyeSBlbmRwb2ludHMgc3RpbGwgYm91bmRcIiksdGhpcy5yZWFkZXJfLnN0b3BBbmRDbG9zZUhhbmRsZSgpfWNsb3NlRW5kcG9pbnQoZSl7dGhpcy5yZW1vdmVFbmRwb2ludChlKSwwPT09ZT90aGlzLmNsb3NlKCk6dGhpcy5waXBlQ29udHJvbEhhbmRsZXJfLm5vdGlmeUVuZHBvaW50Q2xvc2VkKGUpfWlzUmVhZGluZygpe3JldHVybiF0aGlzLnJlYWRlcl8uaXNTdG9wcGVkKCl9c2VuZChlKXt0aGlzLnBpcGVfLndyaXRlTWVzc2FnZShlLmJ1ZmZlcixlLmhhbmRsZXMpfW9uTWVzc2FnZVJlY2VpdmVkXyhlLG4pe2lmKCF0aGlzLmNoZWNrU2l6ZV8oZSkpcmV0dXJuO2NvbnN0IHQ9bW9qby5pbnRlcm5hbC5kZXNlcmlhbGl6ZU1lc3NhZ2VIZWFkZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKGUpKTt0aGlzLnBpcGVDb250cm9sSGFuZGxlcl8ubWF5YmVIYW5kbGVNZXNzYWdlKHQsZSl8fCh0aGlzLm1lc3NhZ2VzXy5wdXNoKHtoZWFkZXI6dCxidWZmZXI6ZSxoYW5kbGVzOm59KSx0aGlzLmRpc3BhdGNoTWVzc2FnZXNfKCkpfWNoZWNrU2l6ZV8oZSl7cmV0dXJuIShlLmJ5dGVMZW5ndGg8bW9qby5pbnRlcm5hbC5rTWVzc2FnZVYwSGVhZGVyU2l6ZSl8fChjb25zb2xlLmVycm9yKFwiUmVqZWN0aW5nIHVuZGVyc2l6ZWQgbWVzc2FnZVwiKSx0aGlzLm9uRXJyb3JfKCksITEpfWRpc3BhdGNoTWVzc2FnZXNfKCl7aWYoIXRoaXMuZGlzcGF0Y2hJblByb2dyZXNzXyl7Zm9yKHRoaXMuZGlzcGF0Y2hJblByb2dyZXNzXz0hMDt0aGlzLm1lc3NhZ2VzXy5sZW5ndGg+MDspe2NvbnN0IGU9dGhpcy5tZXNzYWdlc19bMF07aWYoIXRoaXMuZGlzcGF0Y2hfKGUpKWJyZWFrO3RoaXMubWVzc2FnZXNfLnNoaWZ0KCl9dGhpcy5kaXNwYXRjaEluUHJvZ3Jlc3NfPSExfX1kaXNwYXRjaF8oZSl7Y29uc3Qgbj10aGlzLmVuZHBvaW50c18uZ2V0KGUuaGVhZGVyLmludGVyZmFjZUlkKTtyZXR1cm4gbj8hIW4uaXNTdGFydGVkJiYobi5vbk1lc3NhZ2VSZWNlaXZlZChlLmhlYWRlcixlLmJ1ZmZlcixlLmhhbmRsZXMpLCEwKTooY29uc29sZS5lcnJvcihgUmVjZWl2ZWQgbWVzc2FnZSBmb3IgdW5rbm93biBlbmRwb2ludCAke2UuaGVhZGVyLmludGVyZmFjZUlkfWApLCExKX1vbkVycm9yXygpe2Zvcihjb25zdCBlIG9mIHRoaXMuZW5kcG9pbnRzXy52YWx1ZXMoKSllLm9uRXJyb3IoKTt0aGlzLmVuZHBvaW50c18uY2xlYXIoKX1vblBlZXJFbmRwb2ludENsb3NlZF8oZSl7Y29uc3Qgbj10aGlzLmVuZHBvaW50c18uZ2V0KGUpO24mJm4ub25FcnJvcigpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50Q2xpZW50PWNsYXNze29uTWVzc2FnZVJlY2VpdmVkKGUsbix0LG8pe31vbkVycm9yKGUsbj12b2lkIDApe319LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD1jbGFzc3tjb25zdHJ1Y3RvcihlPW51bGwsbj0wKXt0aGlzLnJvdXRlcl89ZSx0aGlzLmludGVyZmFjZUlkXz1uLHRoaXMuY29udHJvbE1lc3NhZ2VIYW5kbGVyXz1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbnRyb2xNZXNzYWdlSGFuZGxlcih0aGlzKSx0aGlzLmNsaWVudF89bnVsbCx0aGlzLm5leHRSZXF1ZXN0SWRfPTAsdGhpcy5sb2NhbFBlZXJfPW51bGx9c3RhdGljIGNyZWF0ZUFzc29jaWF0ZWRQYWlyKCl7Y29uc3QgZT1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50LG49bmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludDtyZXR1cm4gbi5sb2NhbFBlZXJfPWUsZS5sb2NhbFBlZXJfPW4se2VuZHBvaW50MDplLGVuZHBvaW50MTpufX1nZXQgcm91dGVyKCl7cmV0dXJuIHRoaXMucm91dGVyX31pc1ByaW1hcnkoKXtyZXR1cm4gbnVsbCE9PXRoaXMucm91dGVyXyYmMD09PXRoaXMuaW50ZXJmYWNlSWRffXJlbGVhc2VQaXBlKCl7cmV0dXJuIGNvbnNvbGUuYXNzZXJ0KHRoaXMuaXNQcmltYXJ5KCksXCJzZWNvbmRhcnkgZW5kcG9pbnQgY2Fubm90IHJlbGVhc2UgcGlwZVwiKSx0aGlzLnJvdXRlcl8ucGlwZX1nZXQgaXNQZW5kaW5nQXNzb2NpYXRpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMubG9jYWxQZWVyX31iaW5kSW5Ccm93c2VyKGUsbil7Y29uc29sZS5hc3NlcnQodGhpcy5pc1ByaW1hcnkoKSYmIXRoaXMucm91dGVyXy5pc1JlYWRpbmcoKSxcImVuZHBvaW50IGlzIGVpdGhlciBhc3NvY2lhdGVkIG9yIGFscmVhZHkgYm91bmRcIiksTW9qby5iaW5kSW50ZXJmYWNlKGUsdGhpcy5yb3V0ZXJfLnBpcGUsbil9YXNzb2NpYXRlUGVlck9mT3V0Z29pbmdFbmRwb2ludChlKXtjb25zb2xlLmFzc2VydCh0aGlzLnJvdXRlcl8sXCJjYW5ub3QgYXNzb2NpYXRlIHdpdGggdW5ib3VuZCBlbmRwb2ludFwiKTtjb25zdCBuPWUubG9jYWxQZWVyXztlLmxvY2FsUGVlcl89bi5sb2NhbFBlZXJfPW51bGw7Y29uc3QgdD10aGlzLnJvdXRlcl8uZ2VuZXJhdGVJbnRlcmZhY2VJZCgpO3JldHVybiBuLnJvdXRlcl89dGhpcy5yb3V0ZXJfLG4uaW50ZXJmYWNlSWRfPXQsbi5jbGllbnRfJiZ0aGlzLnJvdXRlcl8uYWRkRW5kcG9pbnQobix0KSx0fWdlbmVyYXRlUmVxdWVzdElkKCl7Y29uc3QgZT10aGlzLm5leHRSZXF1ZXN0SWRfKys7cmV0dXJuIHRoaXMubmV4dFJlcXVlc3RJZF8+NDI5NDk2NzI5NSYmKHRoaXMubmV4dFJlcXVlc3RJZF89MCksZX1zZW5kKGUsbix0LG8saSl7Y29uc3Qgcj1uZXcgbW9qby5pbnRlcm5hbC5NZXNzYWdlKHRoaXMsdGhpcy5pbnRlcmZhY2VJZF8sdCxlLG4sby4kLnN0cnVjdFNwZWMsaSk7Y29uc29sZS5hc3NlcnQodGhpcy5yb3V0ZXJfLFwiY2Fubm90IHNlbmQgbWVzc2FnZSBvbiB1bmFzc29jaWF0ZWQgdW5ib3VuZCBlbmRwb2ludFwiKSx0aGlzLnJvdXRlcl8uc2VuZChyKX1zdGFydChlKXtjb25zb2xlLmFzc2VydCghdGhpcy5jbGllbnRfLFwiZW5kcG9pbnQgYWxyZWFkeSBzdGFydGVkXCIpLHRoaXMuY2xpZW50Xz1lLHRoaXMucm91dGVyXyYmdGhpcy5yb3V0ZXJfLmFkZEVuZHBvaW50KHRoaXMsdGhpcy5pbnRlcmZhY2VJZF8pfWdldCBpc1N0YXJ0ZWQoKXtyZXR1cm4gbnVsbCE9PXRoaXMuY2xpZW50X31zdG9wKCl7dGhpcy5yb3V0ZXJfJiZ0aGlzLnJvdXRlcl8ucmVtb3ZlRW5kcG9pbnQodGhpcy5pbnRlcmZhY2VJZF8pLHRoaXMuY2xpZW50Xz1udWxsLHRoaXMuY29udHJvbE1lc3NhZ2VIYW5kbGVyXz1udWxsfWNsb3NlKCl7dGhpcy5yb3V0ZXJfJiZ0aGlzLnJvdXRlci5jbG9zZUVuZHBvaW50KHRoaXMuaW50ZXJmYWNlSWRfKSx0aGlzLmNsaWVudF89bnVsbCx0aGlzLmNvbnRyb2xNZXNzYWdlSGFuZGxlcl89bnVsbH1hc3luYyBmbHVzaEZvclRlc3RpbmcoKXtyZXR1cm4gdGhpcy5jb250cm9sTWVzc2FnZUhhbmRsZXJfLnNlbmRSdW5NZXNzYWdlKHtmbHVzaEZvclRlc3Rpbmc6e319KX1vbk1lc3NhZ2VSZWNlaXZlZChlLG4sdCl7Y29uc29sZS5hc3NlcnQodGhpcy5jbGllbnRfLFwiZW5kcG9pbnQgaGFzIG5vIGNsaWVudFwiKTt0aGlzLmNvbnRyb2xNZXNzYWdlSGFuZGxlcl8ubWF5YmVIYW5kbGVDb250cm9sTWVzc2FnZShlLG4pfHx0aGlzLmNsaWVudF8ub25NZXNzYWdlUmVjZWl2ZWQodGhpcyxlLG4sdCl9b25FcnJvcigpe3RoaXMuY2xpZW50XyYmdGhpcy5jbGllbnRfLm9uRXJyb3IodGhpcyl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYWNjZXB0QnVmZmVyRm9yVGVzdGluZz1mdW5jdGlvbihlLG4pe2Uucm91dGVyXy5vbk1lc3NhZ2VSZWNlaXZlZF8obixbXSl9LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5jcmVhdGVFbmRwb2ludD1mdW5jdGlvbihlLG49ITEpe3JldHVybiB2b2lkIDA9PT1lLndhdGNoP2U6bmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludChuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlJvdXRlcihlLG4pLDApfSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcj1mdW5jdGlvbihlKXtyZXR1cm4gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmNyZWF0ZUVuZHBvaW50KGUpfSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZD1mdW5jdGlvbihlLG4sdCl7ZS5iaW5kSW5Ccm93c2VyKG4sdCl9LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QaXBlQ29udHJvbE1lc3NhZ2VIYW5kbGVyPWNsYXNze2NvbnN0cnVjdG9yKGUsbil7dGhpcy5yb3V0ZXJfPWUsdGhpcy5vbkRpc2Nvbm5lY3RfPW59c2VuZChlKXtjb25zdCBuPW5ldyBtb2pvLmludGVybmFsLk1lc3NhZ2UobnVsbCw0Mjk0OTY3Mjk1LDAsbW9qby5waXBlQ29udHJvbC5SVU5fT1JfQ0xPU0VfUElQRV9NRVNTQUdFX0lELDAsbW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNTcGVjLiQuJC5zdHJ1Y3RTcGVjLHtpbnB1dDplfSk7dGhpcy5yb3V0ZXJfLnNlbmQobil9bWF5YmVIYW5kbGVNZXNzYWdlKGUsbil7aWYoZS5vcmRpbmFsIT09bW9qby5waXBlQ29udHJvbC5SVU5fT1JfQ0xPU0VfUElQRV9NRVNTQUdFX0lEKXJldHVybiExO2NvbnN0IHQ9bmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKG4sZS5oZWFkZXJTaXplKSxvPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIodCxbXSksaT1tb2pvLnBpcGVDb250cm9sLlJ1bk9yQ2xvc2VQaXBlTWVzc2FnZVBhcmFtc1NwZWMuJC4kLnN0cnVjdFNwZWMscj1vLmRlY29kZVN0cnVjdElubGluZShpKS5pbnB1dDtyZXR1cm4hci5oYXNPd25Qcm9wZXJ0eShcInBlZXJBc3NvY2lhdGVkRW5kcG9pbnRDbG9zZWRFdmVudFwiKXx8KHRoaXMub25EaXNjb25uZWN0XyhyLnBlZXJBc3NvY2lhdGVkRW5kcG9pbnRDbG9zZWRFdmVudC5pZCksITApfW5vdGlmeUVuZHBvaW50Q2xvc2VkKGUpe3RoaXMuc2VuZCh7cGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50OntpZDplfX0pfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbnRyb2xNZXNzYWdlSGFuZGxlcj1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLmVuZHBvaW50Xz1lLHRoaXMucGVuZGluZ0ZsdXNoUmVzb2x2ZXJzXz1uZXcgTWFwfXNlbmRSdW5NZXNzYWdlKGUpe2NvbnN0IG49dGhpcy5lbmRwb2ludF8uZ2VuZXJhdGVSZXF1ZXN0SWQoKTtyZXR1cm4gbmV3IFByb21pc2UoKHQ9Pnt0aGlzLmVuZHBvaW50Xy5zZW5kKG1vam8uaW50ZXJmYWNlQ29udHJvbC5SVU5fTUVTU0FHRV9JRCxuLG1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnRXhwZWN0c1Jlc3BvbnNlLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5NZXNzYWdlUGFyYW1zU3BlYy4kLHtpbnB1dDplfSksdGhpcy5wZW5kaW5nRmx1c2hSZXNvbHZlcnNfLnNldChuLHQpfSkpfW1heWJlSGFuZGxlQ29udHJvbE1lc3NhZ2UoZSxuKXtpZihlLm9yZGluYWw9PT1tb2pvLmludGVyZmFjZUNvbnRyb2wuUlVOX01FU1NBR0VfSUQpe2NvbnN0IHQ9bmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKG4sZS5oZWFkZXJTaXplKSxvPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIodCxbXSk7cmV0dXJuIGUuZmxhZ3MmbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdFeHBlY3RzUmVzcG9uc2U/dGhpcy5oYW5kbGVSdW5SZXF1ZXN0XyhlLnJlcXVlc3RJZCxvKTp0aGlzLmhhbmRsZVJ1blJlc3BvbnNlXyhlLnJlcXVlc3RJZCxvKX1yZXR1cm4hMX1oYW5kbGVSdW5SZXF1ZXN0XyhlLG4pe3JldHVybiEhbi5kZWNvZGVTdHJ1Y3RJbmxpbmUobW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk1lc3NhZ2VQYXJhbXNTcGVjLiQuJC5zdHJ1Y3RTcGVjKS5pbnB1dC5oYXNPd25Qcm9wZXJ0eShcImZsdXNoRm9yVGVzdGluZ1wiKSYmKHRoaXMuZW5kcG9pbnRfLnNlbmQobW9qby5pbnRlcmZhY2VDb250cm9sLlJVTl9NRVNTQUdFX0lELGUsbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5SZXNwb25zZU1lc3NhZ2VQYXJhbXNTcGVjLiQse291dHB1dDpudWxsfSksITApfWhhbmRsZVJ1blJlc3BvbnNlXyhlLG4pe2NvbnN0IHQ9dGhpcy5wZW5kaW5nRmx1c2hSZXNvbHZlcnNfLmdldChlKTtyZXR1cm4hIXQmJih0KCksITApfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZXNwb25zZSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXI9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmxpc3RlbmVycz1uZXcgTWFwLHRoaXMubmV4dExpc3RlbmVySWRfPTB9YWRkTGlzdGVuZXIoZSl7Y29uc3Qgbj0rK3RoaXMubmV4dExpc3RlbmVySWRfO3JldHVybiB0aGlzLmxpc3RlbmVycy5zZXQobixlKSxufXJlbW92ZUxpc3RlbmVyKGUpe3JldHVybiB0aGlzLmxpc3RlbmVycy5kZWxldGUoZSl9ZGlzcGF0Y2hFcnJvckV2ZW50KCl7Zm9yKGNvbnN0IGUgb2YgdGhpcy5saXN0ZW5lcnMudmFsdWVzKCkpZSgpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcj1jbGFzc3tnZXQgaGFuZGxlKCl7fX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U9Y2xhc3N7Y29uc3RydWN0b3IoZSxuPXZvaWQgMCl7dGhpcy5lbmRwb2ludF89bnVsbCx0aGlzLnJlcXVlc3RUeXBlXz1lLHRoaXMucGVuZGluZ1Jlc3BvbnNlc189bmV3IE1hcCx0aGlzLmNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyXz1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyLG4mJnRoaXMuYmluZEhhbmRsZShuKX1nZXQgZW5kcG9pbnQoKXtyZXR1cm4gdGhpcy5lbmRwb2ludF99YmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKXtsZXR7aGFuZGxlMDplLGhhbmRsZTE6bn09TW9qby5jcmVhdGVNZXNzYWdlUGlwZSgpO3JldHVybiB0aGlzLmJpbmRIYW5kbGUoZSksbmV3IHRoaXMucmVxdWVzdFR5cGVfKG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5jcmVhdGVFbmRwb2ludChuKSl9YmluZEhhbmRsZShlKXtjb25zb2xlLmFzc2VydCghdGhpcy5lbmRwb2ludF8sXCJhbHJlYWR5IGJvdW5kXCIpLGU9bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmNyZWF0ZUVuZHBvaW50KGUsITApLHRoaXMuZW5kcG9pbnRfPWUsdGhpcy5lbmRwb2ludF8uc3RhcnQodGhpcyksdGhpcy5wZW5kaW5nUmVzcG9uc2VzXz1uZXcgTWFwfWFzc29jaWF0ZUFuZFBhc3NSZWNlaXZlcigpe2NvbnNvbGUuYXNzZXJ0KCF0aGlzLmVuZHBvaW50XyxcImNhbm5vdCBhc3NvY2lhdGUgd2hlbiBhbHJlYWR5IGJvdW5kXCIpO2NvbnN0e2VuZHBvaW50MDplLGVuZHBvaW50MTpufT1tb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQuY3JlYXRlQXNzb2NpYXRlZFBhaXIoKTtyZXR1cm4gdGhpcy5iaW5kSGFuZGxlKGUpLG5ldyB0aGlzLnJlcXVlc3RUeXBlXyhuKX11bmJpbmQoKXtpZighdGhpcy5lbmRwb2ludF8pcmV0dXJuIG51bGw7Y29uc3QgZT10aGlzLmVuZHBvaW50XztyZXR1cm4gdGhpcy5lbmRwb2ludF89bnVsbCxlLnN0b3AoKSxlfWNsb3NlKCl7dGhpcy5jbGVhbnVwQW5kRmx1c2hQZW5kaW5nUmVzcG9uc2VzXyhcIk1lc3NhZ2UgcGlwZSBjbG9zZWQuXCIpLHRoaXMuZW5kcG9pbnRfJiZ0aGlzLmVuZHBvaW50Xy5jbG9zZSgpLHRoaXMuZW5kcG9pbnRfPW51bGx9Z2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKXtyZXR1cm4gdGhpcy5jb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcl99c2VuZE1lc3NhZ2UoZSxuLHQsbyxpKXtpZih0JiYoIXRoaXMuZW5kcG9pbnRffHwhdGhpcy5lbmRwb2ludF8uaXNTdGFydGVkKSlyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVGhlIHBpcGUgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQuXCIpKTtjb25zdCByPXt9O2xldCBzPTA7bi4kLnN0cnVjdFNwZWMuZmllbGRzLmZvckVhY2goKChlLG4pPT57Y29uc3QgdD1uLXM7aWYoIW1vam8uaW50ZXJuYWwuaXNOdWxsYWJsZVZhbHVlS2luZEZpZWxkKGUpKXJldHVybiB2b2lkKHJbZS5uYW1lXT1vW3RdKTtjb25zdCBpPWUubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzO2kuaXNQcmltYXJ5JiYocysrLHJbaS5vcmlnaW5hbEZpZWxkTmFtZV09b1t0XSl9KSk7Y29uc3QgYT10aGlzLmVuZHBvaW50Xy5nZW5lcmF0ZVJlcXVlc3RJZCgpO2lmKHRoaXMuZW5kcG9pbnRfLnNlbmQoZSxhLHQ/bW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdFeHBlY3RzUmVzcG9uc2U6MCxuLHIpLCF0KXJldHVybiBQcm9taXNlLnJlc29sdmUoKTtjb25zdCBsPXQ7cmV0dXJuIG5ldyBQcm9taXNlKCgobix0KT0+e3RoaXMucGVuZGluZ1Jlc3BvbnNlc18uc2V0KGEse3JlcXVlc3RJZDphLG9yZGluYWw6ZSxyZXNwb25zZVN0cnVjdDpsLHJlc29sdmU6bixyZWplY3Q6dCx1c2VSZXN1bHRSZXNwb25zZTppfSl9KSl9Zmx1c2hGb3JUZXN0aW5nKCl7cmV0dXJuIHRoaXMuZW5kcG9pbnRfLmZsdXNoRm9yVGVzdGluZygpfW9uTWVzc2FnZVJlY2VpdmVkKGUsbix0LG8pe2lmKCEobi5mbGFncyZtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UpfHxuLmZsYWdzJm1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnRXhwZWN0c1Jlc3BvbnNlKXJldHVybiB0aGlzLm9uRXJyb3IoZSxcIlJlY2VpdmVkIHVuZXhwZWN0ZWQgcmVxdWVzdCBtZXNzYWdlXCIpO2NvbnN0IGk9dGhpcy5wZW5kaW5nUmVzcG9uc2VzXy5nZXQobi5yZXF1ZXN0SWQpO2lmKHRoaXMucGVuZGluZ1Jlc3BvbnNlc18uZGVsZXRlKG4ucmVxdWVzdElkKSwhaSlyZXR1cm4gdGhpcy5vbkVycm9yKGUsXCJSZWNlaXZlZCB1bmV4cGVjdGVkIHJlc3BvbnNlIG1lc3NhZ2VcIik7Y29uc3Qgcj1uZXcgbW9qby5pbnRlcm5hbC5EZWNvZGVyKG5ldyBtb2pvLmludGVybmFsLkRhdGFWaWV3V3JhcHBlcih0LG4uaGVhZGVyU2l6ZSksbyx7ZW5kcG9pbnQ6ZX0pLmRlY29kZVN0cnVjdElubGluZShpLnJlc3BvbnNlU3RydWN0LiQuc3RydWN0U3BlYyk7aWYoIXIpcmV0dXJuIHRoaXMub25FcnJvcihlLFwiUmVjZWl2ZWQgbWFsZm9ybWVkIHJlc3BvbnNlIG1lc3NhZ2VcIik7aWYobi5vcmRpbmFsIT09aS5vcmRpbmFsKXJldHVybiB0aGlzLm9uRXJyb3IoZSxcIlJlY2VpdmVkIG1hbGZvcm1lZCByZXNwb25zZSBtZXNzYWdlXCIpO2lmKGkudXNlUmVzdWx0UmVzcG9uc2Upe2NvbnN0IGU9ci5yZXN1bHQ7dm9pZCAwIT09ZS5zdWNjZXNzP2kucmVzb2x2ZShlLnN1Y2Nlc3MpOmkucmVqZWN0KGUuZmFpbHVyZSl9ZWxzZSBpLnJlc29sdmUocil9b25FcnJvcihlLG49dm9pZCAwKXt0aGlzLmNsZWFudXBBbmRGbHVzaFBlbmRpbmdSZXNwb25zZXNfKG4pLHRoaXMuY29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJfLmRpc3BhdGNoRXJyb3JFdmVudCgpfWNsZWFudXBBbmRGbHVzaFBlbmRpbmdSZXNwb25zZXNfKGU9dm9pZCAwKXt0aGlzLmVuZHBvaW50XyYmdGhpcy5lbmRwb2ludF8uc3RvcCgpO2Zvcihjb25zdCBuIG9mIHRoaXMucGVuZGluZ1Jlc3BvbnNlc18ua2V5cygpKXRoaXMucGVuZGluZ1Jlc3BvbnNlc18uZ2V0KG4pLnJlamVjdChuZXcgRXJyb3IoZSkpO3RoaXMucGVuZGluZ1Jlc3BvbnNlc189bmV3IE1hcH19LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcj1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLnJlbW90ZV89ZX1iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpe3JldHVybiB0aGlzLnJlbW90ZV8uYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKX1hc3NvY2lhdGVBbmRQYXNzUmVjZWl2ZXIoKXtyZXR1cm4gdGhpcy5yZW1vdGVfLmFzc29jaWF0ZUFuZFBhc3NSZWNlaXZlcigpfWlzQm91bmQoKXtyZXR1cm4gbnVsbCE9PXRoaXMucmVtb3RlXy5lbmRwb2ludF99Y2xvc2UoKXt0aGlzLnJlbW90ZV8uY2xvc2UoKX1mbHVzaEZvclRlc3RpbmcoKXtyZXR1cm4gdGhpcy5yZW1vdGVfLmZsdXNoRm9yVGVzdGluZygpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5yZW1vdmVDYWxsYmFja3M9bmV3IE1hcCx0aGlzLm5leHRMaXN0ZW5lcklkXz0wfWdldE5leHRJZCgpe3JldHVybisrdGhpcy5uZXh0TGlzdGVuZXJJZF99cmVtb3ZlTGlzdGVuZXIoZSl7cmV0dXJuIHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmdldChlKSgpLHRoaXMucmVtb3ZlQ2FsbGJhY2tzLmRlbGV0ZShlKX19LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMubGlzdGVuZXJzXz1uZXcgTWFwLHRoaXMuY2FsbGJhY2tSb3V0ZXJfPWV9YWRkTGlzdGVuZXIoZSl7Y29uc3Qgbj10aGlzLmNhbGxiYWNrUm91dGVyXy5nZXROZXh0SWQoKTtyZXR1cm4gdGhpcy5saXN0ZW5lcnNfLnNldChuLGUpLHRoaXMuY2FsbGJhY2tSb3V0ZXJfLnJlbW92ZUNhbGxiYWNrcy5zZXQobiwoKCk9PnRoaXMubGlzdGVuZXJzXy5kZWxldGUobikpKSxufWNyZWF0ZVJlY2VpdmVySGFuZGxlcihlKXtyZXR1cm4gZT90aGlzLmRpc3BhdGNoV2l0aFJlc3BvbnNlXy5iaW5kKHRoaXMpOnRoaXMuZGlzcGF0Y2hfLmJpbmQodGhpcyl9ZGlzcGF0Y2hfKGUpe2NvbnN0IG49QXJyYXkuZnJvbShhcmd1bWVudHMpO3RoaXMubGlzdGVuZXJzXy5mb3JFYWNoKChlPT5lLmFwcGx5KG51bGwsbikpKX1kaXNwYXRjaFdpdGhSZXNwb25zZV8oZSl7Y29uc3Qgbj1BcnJheS5mcm9tKGFyZ3VtZW50cyksdD1BcnJheS5mcm9tKHRoaXMubGlzdGVuZXJzXy52YWx1ZXMoKSkubWFwKChlPT5lLmFwcGx5KG51bGwsbikpKTtsZXQgbztmb3IoY29uc3QgZSBvZiB0KWlmKHZvaWQgMCE9PWUpe2lmKHZvaWQgMCE9PW8pdGhyb3cgbmV3IEVycm9yKFwiTXVsdGlwbGUgbGlzdGVuZXJzIGF0dGVtcHRlZCB0byByZXBseSB0byBhIG1lc3NhZ2VcIik7bz1lfXJldHVybiBvfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0Lk1lc3NhZ2VIYW5kbGVyLG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMuZW5kcG9pbnRzXz1uZXcgU2V0LHRoaXMucmVtb3RlVHlwZV89ZSx0aGlzLm1lc3NhZ2VIYW5kbGVyc189bmV3IE1hcCx0aGlzLmNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyXz1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfXJlZ2lzdGVySGFuZGxlcihlLG4sdCxvLGkpe3RoaXMubWVzc2FnZUhhbmRsZXJzXy5zZXQoZSx7cGFyYW1TdHJ1Y3Q6bixyZXNwb25zZVN0cnVjdDp0LGhhbmRsZXI6byx1c2VSZXN1bHRSZXNwb25zZTppfSl9YmluZEhhbmRsZShlKXtlPW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5jcmVhdGVFbmRwb2ludChlKSx0aGlzLmVuZHBvaW50c18uYWRkKGUpLGUuc3RhcnQodGhpcyl9YmluZE5ld1BpcGVBbmRQYXNzUmVtb3RlKCl7bGV0IGU9bmV3IHRoaXMucmVtb3RlVHlwZV87cmV0dXJuIHRoaXMuYmluZEhhbmRsZShlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5oYW5kbGUpLGV9YXNzb2NpYXRlQW5kUGFzc1JlbW90ZSgpe2NvbnN0e2VuZHBvaW50MDplLGVuZHBvaW50MTpufT1tb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQuY3JlYXRlQXNzb2NpYXRlZFBhaXIoKTtyZXR1cm4gdGhpcy5iaW5kSGFuZGxlKGUpLG5ldyB0aGlzLnJlbW90ZVR5cGVfKG4pfWNsb3NlQmluZGluZ3MoKXtmb3IoY29uc3QgZSBvZiB0aGlzLmVuZHBvaW50c18pZS5jbG9zZSgpO3RoaXMuZW5kcG9pbnRzXy5jbGVhcigpfWdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCl7cmV0dXJuIHRoaXMuY29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJffWFzeW5jIGZsdXNoKCl7Zm9yKGxldCBlIG9mIHRoaXMuZW5kcG9pbnRzXylhd2FpdCBlLmZsdXNoRm9yVGVzdGluZygpfW9uTWVzc2FnZVJlY2VpdmVkKGUsbix0LG8pe2lmKG4uZmxhZ3MmbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlKXRocm93IG5ldyBFcnJvcihcIlJlY2VpdmVkIHVuZXhwZWN0ZWQgcmVzcG9uc2Ugb24gaW50ZXJmYWNlIHJlY2VpdmVyXCIpO2NvbnN0IGk9dGhpcy5tZXNzYWdlSGFuZGxlcnNfLmdldChuLm9yZGluYWwpO2lmKCFpKXRocm93IG5ldyBFcnJvcihcIlJlY2VpdmVkIHVua25vd24gbWVzc2FnZVwiKTtjb25zdCByPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHQsbi5oZWFkZXJTaXplKSxvLHtlbmRwb2ludDplfSkuZGVjb2RlU3RydWN0SW5saW5lKGkucGFyYW1TdHJ1Y3QuJC5zdHJ1Y3RTcGVjKTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCBtYWxmb3JtZWQgbWVzc2FnZVwiKTtjb25zdCBzPVtdO2Zvcihjb25zdCBlIG9mIGkucGFyYW1TdHJ1Y3QuJC5zdHJ1Y3RTcGVjLmZpZWxkcyl7aWYoIW1vam8uaW50ZXJuYWwuaXNOdWxsYWJsZVZhbHVlS2luZEZpZWxkKGUpKXtzLnB1c2gocltlLm5hbWVdKTtjb250aW51ZX1jb25zdCBuPWUubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzO24uaXNQcmltYXJ5JiZzLnB1c2gocltuLm9yaWdpbmFsRmllbGROYW1lXSl9aS51c2VSZXN1bHRSZXNwb25zZT90aGlzLmhhbmRsZVJlc3VsdFJlc3BvbnNlTWVzc2FnZV8oZSxuLGkscyk6dGhpcy5oYW5kbGVSZXNwb25zZU1lc3NhZ2VfKGUsbixpLHMpfWhhbmRsZVJlc3VsdFJlc3BvbnNlTWVzc2FnZV8oZSxuLHQsbyl7dHJ5e2xldCBpPXQuaGFuZGxlci5hcHBseShudWxsLG8pO1wib2JqZWN0XCI9PXR5cGVvZiBpJiZcIlByb21pc2VcIj09aS5jb25zdHJ1Y3Rvci5uYW1lfHwoaT1Qcm9taXNlLnJlc29sdmUoaSkpLGkudGhlbigobz0+e2Uuc2VuZChuLm9yZGluYWwsbi5yZXF1ZXN0SWQsbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlLHQucmVzcG9uc2VTdHJ1Y3Qse3Jlc3VsdDp7c3VjY2VzczpvfX0pfSkpLmNhdGNoKChvPT57ZS5zZW5kKG4ub3JkaW5hbCxuLnJlcXVlc3RJZCxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UsdC5yZXNwb25zZVN0cnVjdCx7cmVzdWx0OntmYWlsdXJlOm99fSl9KSl9Y2F0Y2gobyl7ZS5zZW5kKG4ub3JkaW5hbCxuLnJlcXVlc3RJZCxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UsdC5yZXNwb25zZVN0cnVjdCx7cmVzdWx0OntmYWlsdXJlOm99fSl9fWhhbmRsZVJlc3BvbnNlTWVzc2FnZV8oZSxuLHQsbyl7bGV0IGk9dC5oYW5kbGVyLmFwcGx5KG51bGwsbyk7aWYodC5yZXNwb25zZVN0cnVjdCl7aWYodm9pZCAwPT09aSl0aHJvdyB0aGlzLm9uRXJyb3IoZSksbmV3IEVycm9yKFwiTWVzc2FnZSBleHBlY3RzIGEgcmVwbHkgYnV0IGl0cyBoYW5kbGVyIGRpZCBub3QgcHJvdmlkZSBvbmUuXCIpO1wib2JqZWN0XCI9PXR5cGVvZiBpJiZcIlByb21pc2VcIj09aS5jb25zdHJ1Y3Rvci5uYW1lfHwoaT1Qcm9taXNlLnJlc29sdmUoaSkpLGkudGhlbigobz0+e2Uuc2VuZChuLm9yZGluYWwsbi5yZXF1ZXN0SWQsbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlLHQucmVzcG9uc2VTdHJ1Y3Qsbyl9KSkuY2F0Y2goKCgpPT57dGhpcy5vbkVycm9yKGUpfSkpfX1vbkVycm9yKGUsbj12b2lkIDApe3RoaXMuZW5kcG9pbnRzXy5kZWxldGUoZSksZS5jbG9zZSgpLHRoaXMuY29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJfLmRpc3BhdGNoRXJyb3JFdmVudCgpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMuaGVscGVyX2ludGVybmFsXz1lfWJpbmRIYW5kbGUoZSl7dGhpcy5oZWxwZXJfaW50ZXJuYWxfLmJpbmRIYW5kbGUoZSl9YmluZE5ld1BpcGVBbmRQYXNzUmVtb3RlKCl7cmV0dXJuIHRoaXMuaGVscGVyX2ludGVybmFsXy5iaW5kTmV3UGlwZUFuZFBhc3NSZW1vdGUoKX1hc3NvY2lhdGVBbmRQYXNzUmVtb3RlKCl7cmV0dXJuIHRoaXMuaGVscGVyX2ludGVybmFsXy5hc3NvY2lhdGVBbmRQYXNzUmVtb3RlKCl9Y2xvc2UoKXt0aGlzLmhlbHBlcl9pbnRlcm5hbF8uY2xvc2VCaW5kaW5ncygpfWZsdXNoKCl7cmV0dXJuIHRoaXMuaGVscGVyX2ludGVybmFsXy5mbHVzaCgpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkhhbmRsZVJlYWRlcj1jbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLmhhbmRsZV89ZSx0aGlzLm9uUmVhZD1udWxsLHRoaXMub25FcnJvcj0oKT0+e30sdGhpcy53YXRjaGVyXz1udWxsfWlzU3RvcHBlZCgpe3JldHVybiBudWxsPT09dGhpcy53YXRjaGVyX31zdGFydCgpe3RoaXMud2F0Y2hlcl89dGhpcy5oYW5kbGVfLndhdGNoKHtyZWFkYWJsZTohMH0sdGhpcy5yZWFkXy5iaW5kKHRoaXMpKX1zdG9wKCl7dGhpcy53YXRjaGVyXyYmKHRoaXMud2F0Y2hlcl8uY2FuY2VsKCksdGhpcy53YXRjaGVyXz1udWxsKX1zdG9wQW5kQ2xvc2VIYW5kbGUoKXt0aGlzLndhdGNoZXJfJiZ0aGlzLnN0b3AoKSx0aGlzLmhhbmRsZV8uY2xvc2UoKX1yZWFkXyhlKXtmb3IoOzspe2lmKCF0aGlzLndhdGNoZXJfKXJldHVybjtjb25zdCBlPXRoaXMuaGFuZGxlXy5yZWFkTWVzc2FnZSgpO2lmKGUucmVzdWx0PT1Nb2pvLlJFU1VMVF9TSE9VTERfV0FJVClyZXR1cm47aWYoZS5yZXN1bHQ9PU1vam8uUkVTVUxUX0ZBSUxFRF9QUkVDT05ESVRJT04pcmV0dXJuIHZvaWQgdGhpcy5vbkVycm9yKCk7aWYoZS5yZXN1bHQhPU1vam8uUkVTVUxUX09LKXRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgZXJyb3Igb24gSGFuZGxlUmVhZGVyOiBcIitlLnJlc3VsdCk7dGhpcy5vblJlYWQoZS5idWZmZXIsZS5oYW5kbGVzKX19fTtleHBvcnR7bW9qb307IiwiLy8gbW9qby9wdWJsaWMvbW9qb20vYmFzZS9iaWdfYnVmZmVyLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi9qcy9iaW5kaW5ncy5qcyc7XG5cblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBCaWdCdWZmZXJTaGFyZWRNZW1vcnlSZWdpb25TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBCaWdCdWZmZXJTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEJpZ0J1ZmZlclNoYXJlZE1lbW9yeVJlZ2lvblNwZWMuJCxcbiAgICAnQmlnQnVmZmVyU2hhcmVkTWVtb3J5UmVnaW9uJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYnVmZmVySGFuZGxlJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5IYW5kbGUsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzaXplJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBCaWdCdWZmZXJTaGFyZWRNZW1vcnlSZWdpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhTW9qb0hhbmRsZSB9ICovXG4gICAgdGhpcy5idWZmZXJIYW5kbGU7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5zaXplO1xuICB9XG59XG5cbm1vam8uaW50ZXJuYWwuVW5pb24oXG4gICAgQmlnQnVmZmVyU3BlYy4kLCAnQmlnQnVmZmVyJyxcbiAgICB7XG4gICAgICAnYnl0ZXMnOiB7XG4gICAgICAgICdvcmRpbmFsJzogMCxcbiAgICAgICAgJ3R5cGUnOiBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuVWludDgsIGZhbHNlKSxcbiAgICAgIH0sXG4gICAgICAnc2hhcmVkTWVtb3J5Jzoge1xuICAgICAgICAnb3JkaW5hbCc6IDEsXG4gICAgICAgICd0eXBlJzogQmlnQnVmZmVyU2hhcmVkTWVtb3J5UmVnaW9uU3BlYy4kLFxuICAgICAgfSxcbiAgICAgICdpbnZhbGlkQnVmZmVyJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDIsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgfSxcbiAgICB9KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7IHtcbiAqICAgYnl0ZXM6ICghQXJyYXk8IW51bWJlcj58dW5kZWZpbmVkKSxcbiAqICAgc2hhcmVkTWVtb3J5OiAoIUJpZ0J1ZmZlclNoYXJlZE1lbW9yeVJlZ2lvbnx1bmRlZmluZWQpLFxuICogICBpbnZhbGlkQnVmZmVyOiAoIWJvb2xlYW58dW5kZWZpbmVkKSxcbiAqIH0gfVxuICovXG5leHBvcnQgY29uc3QgQmlnQnVmZmVyID0ge307XG4iLCIvLyBtb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2ZpbGUubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uL2pzL2JpbmRpbmdzLmpzJztcblxuXG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFJlYWRPbmx5RmlsZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRmlsZVNwZWMuJCxcbiAgICAnRmlsZScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ZkJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5IYW5kbGUsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhc3luYycsIDQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIU1vam9IYW5kbGUgfSAqL1xuICAgIHRoaXMuZmQ7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuYXN5bmM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFJlYWRPbmx5RmlsZVNwZWMuJCxcbiAgICAnUmVhZE9ubHlGaWxlJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZmQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkhhbmRsZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2FzeW5jJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWRPbmx5RmlsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFNb2pvSGFuZGxlIH0gKi9cbiAgICB0aGlzLmZkO1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmFzeW5jO1xuICB9XG59XG5cbiIsIi8vIG1vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZV9wYXRoLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi9qcy9iaW5kaW5ncy5qcyc7XG5cblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBGaWxlUGF0aFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgUmVsYXRpdmVGaWxlUGF0aFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRmlsZVBhdGhTcGVjLiQsXG4gICAgJ0ZpbGVQYXRoJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGF0aCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRmlsZVBhdGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnBhdGg7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFJlbGF0aXZlRmlsZVBhdGhTcGVjLiQsXG4gICAgJ1JlbGF0aXZlRmlsZVBhdGgnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwYXRoJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWxhdGl2ZUZpbGVQYXRoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5wYXRoO1xuICB9XG59XG5cbiIsIi8vIG1vam8vcHVibGljL21vam9tL2Jhc2UvdGltZS5tb2pvbS5tLmpzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IG1vam9tX2JpbmRpbmdzX2dlbmVyYXRvci5weSwgZG8gbm90IGVkaXRcblxuLy8gQ29weXJpZ2h0IDIwMjAgVGhlIENocm9taXVtIEF1dGhvcnNcbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbmltcG9ydCB7bW9qb30gZnJvbSAnLi4vLi4vanMvYmluZGluZ3MuanMnO1xuXG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGltZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgSlNUaW1lU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lRGVsdGFTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVUaWNrc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGltZVNwZWMuJCxcbiAgICAnVGltZScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ludGVybmFsVmFsdWUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDY0LFxuICAgICAgICBCaWdJbnQoMCksXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIWJpZ2ludCB9ICovXG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBKU1RpbWVTcGVjLiQsXG4gICAgJ0pTVGltZScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21zZWMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkRvdWJsZSxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEpTVGltZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMubXNlYztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGltZURlbHRhU3BlYy4kLFxuICAgICdUaW1lRGVsdGEnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtaWNyb3NlY29uZHMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDY0LFxuICAgICAgICBCaWdJbnQoMCksXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lRGVsdGEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhYmlnaW50IH0gKi9cbiAgICB0aGlzLm1pY3Jvc2Vjb25kcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGltZVRpY2tzU3BlYy4kLFxuICAgICdUaW1lVGlja3MnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnRlcm5hbFZhbHVlJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnQ2NCxcbiAgICAgICAgQmlnSW50KDApLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVGltZVRpY2tzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIWJpZ2ludCB9ICovXG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlO1xuICB9XG59XG5cbiIsIi8vIG1vam8vcHVibGljL21vam9tL2Jhc2UvdmFsdWVzLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi9qcy9iaW5kaW5ncy5qcyc7XG5cblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEaWN0aW9uYXJ5VmFsdWVTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IExpc3RWYWx1ZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IFZhbHVlU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEaWN0aW9uYXJ5VmFsdWVTcGVjLiQsXG4gICAgJ0RpY3Rpb25hcnlWYWx1ZScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3N0b3JhZ2UnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLk1hcChtb2pvLmludGVybmFsLlN0cmluZywgVmFsdWVTcGVjLiQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnlWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFPYmplY3Q8IXN0cmluZywgIVZhbHVlPiB9ICovXG4gICAgdGhpcy5zdG9yYWdlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBMaXN0VmFsdWVTcGVjLiQsXG4gICAgJ0xpc3RWYWx1ZScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3N0b3JhZ2UnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KFZhbHVlU3BlYy4kLCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXN0VmFsdWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IVZhbHVlPiB9ICovXG4gICAgdGhpcy5zdG9yYWdlO1xuICB9XG59XG5cbm1vam8uaW50ZXJuYWwuVW5pb24oXG4gICAgVmFsdWVTcGVjLiQsICdWYWx1ZScsXG4gICAge1xuICAgICAgJ251bGxWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAwLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuVWludDgsXG4gICAgICB9LFxuICAgICAgJ2Jvb2xWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAxLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgIH0sXG4gICAgICAnaW50VmFsdWUnOiB7XG4gICAgICAgICdvcmRpbmFsJzogMixcbiAgICAgICAgJ3R5cGUnOiBtb2pvLmludGVybmFsLkludDMyLFxuICAgICAgfSxcbiAgICAgICdkb3VibGVWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAzLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuRG91YmxlLFxuICAgICAgfSxcbiAgICAgICdzdHJpbmdWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA0LFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgfSxcbiAgICAgICdiaW5hcnlWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA1LFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5VaW50OCwgZmFsc2UpLFxuICAgICAgfSxcbiAgICAgICdkaWN0aW9uYXJ5VmFsdWUnOiB7XG4gICAgICAgICdvcmRpbmFsJzogNixcbiAgICAgICAgJ3R5cGUnOiBEaWN0aW9uYXJ5VmFsdWVTcGVjLiQsXG4gICAgICB9LFxuICAgICAgJ2xpc3RWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA3LFxuICAgICAgICAndHlwZSc6IExpc3RWYWx1ZVNwZWMuJCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbi8qKlxuICogQHR5cGVkZWYgeyB7XG4gKiAgIG51bGxWYWx1ZTogKCFudW1iZXJ8dW5kZWZpbmVkKSxcbiAqICAgYm9vbFZhbHVlOiAoIWJvb2xlYW58dW5kZWZpbmVkKSxcbiAqICAgaW50VmFsdWU6ICghbnVtYmVyfHVuZGVmaW5lZCksXG4gKiAgIGRvdWJsZVZhbHVlOiAoIW51bWJlcnx1bmRlZmluZWQpLFxuICogICBzdHJpbmdWYWx1ZTogKCFzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYmluYXJ5VmFsdWU6ICghQXJyYXk8IW51bWJlcj58dW5kZWZpbmVkKSxcbiAqICAgZGljdGlvbmFyeVZhbHVlOiAoIURpY3Rpb25hcnlWYWx1ZXx1bmRlZmluZWQpLFxuICogICBsaXN0VmFsdWU6ICghTGlzdFZhbHVlfHVuZGVmaW5lZCksXG4gKiB9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IFZhbHVlID0ge307XG4iLCIvLyBza2lhL3B1YmxpYy9tb2pvbS9pbWFnZV9pbmZvLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi8uLi9tb2pvL3B1YmxpYy9qcy9iaW5kaW5ncy5qcyc7XG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBDb2xvclR5cGVTcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBDb2xvclR5cGUgPSB7XG4gIFxuICBVTktOT1dOOiAwLFxuICBBTFBIQV84OiAxLFxuICBSR0JfNTY1OiAyLFxuICBBUkdCXzQ0NDQ6IDMsXG4gIFJHQkFfODg4ODogNCxcbiAgQkdSQV84ODg4OiA1LFxuICBERVBSRUNBVEVEX0lOREVYXzg6IDYsXG4gIEdSQVlfODogNyxcbiAgTUlOX1ZBTFVFOiAwLFxuICBNQVhfVkFMVUU6IDcsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiAhbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IEFscGhhVHlwZVNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEFscGhhVHlwZSA9IHtcbiAgXG4gIFVOS05PV046IDAsXG4gIEFMUEhBX1RZUEVfT1BBUVVFOiAxLFxuICBQUkVNVUw6IDIsXG4gIFVOUFJFTVVMOiAzLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMyxcbn07XG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgSW1hZ2VJbmZvU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBCaXRtYXBOMzJJbWFnZUluZm9TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEltYWdlSW5mb1NwZWMuJCxcbiAgICAnSW1hZ2VJbmZvJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY29sb3JUeXBlJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgQ29sb3JUeXBlU3BlYy4kLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYWxwaGFUeXBlJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgQWxwaGFUeXBlU3BlYy4kLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnd2lkdGgnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2hlaWdodCcsIDEyLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NvbG9yVHJhbnNmZXJGdW5jdGlvbicsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY29sb3JUb1h5ek1hdHJpeCcsIDI0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDQwXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VJbmZvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUNvbG9yVHlwZSB9ICovXG4gICAgdGhpcy5jb2xvclR5cGU7XG4gICAgLyoqIEB0eXBlIHsgIUFscGhhVHlwZSB9ICovXG4gICAgdGhpcy5hbHBoYVR5cGU7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy53aWR0aDtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLmhlaWdodDtcbiAgICAvKiogQHR5cGUgeyAoQXJyYXk8IW51bWJlcj58dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5jb2xvclRyYW5zZmVyRnVuY3Rpb247XG4gICAgLyoqIEB0eXBlIHsgKEFycmF5PCFudW1iZXI+fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuY29sb3JUb1h5ek1hdHJpeDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQml0bWFwTjMySW1hZ2VJbmZvU3BlYy4kLFxuICAgICdCaXRtYXBOMzJJbWFnZUluZm8nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhbHBoYVR5cGUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBBbHBoYVR5cGVTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd3aWR0aCcsIDQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaGVpZ2h0JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb2xvclRyYW5zZmVyRnVuY3Rpb24nLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShtb2pvLmludGVybmFsLkZsb2F0LCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NvbG9yVG9YeXpNYXRyaXgnLCAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShtb2pvLmludGVybmFsLkZsb2F0LCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCA0MF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpdG1hcE4zMkltYWdlSW5mbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBbHBoYVR5cGUgfSAqL1xuICAgIHRoaXMuYWxwaGFUeXBlO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMud2lkdGg7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5oZWlnaHQ7XG4gICAgLyoqIEB0eXBlIHsgKEFycmF5PCFudW1iZXI+fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuY29sb3JUcmFuc2ZlckZ1bmN0aW9uO1xuICAgIC8qKiBAdHlwZSB7IChBcnJheTwhbnVtYmVyPnx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmNvbG9yVG9YeXpNYXRyaXg7XG4gIH1cbn1cblxuIiwiLy8gc2tpYS9wdWJsaWMvbW9qb20vYml0bWFwLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi8uLi9tb2pvL3B1YmxpYy9qcy9iaW5kaW5ncy5qcyc7XG5cbmltcG9ydCB7XG4gIEJpZ0J1ZmZlciBhcyBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIsXG4gIEJpZ0J1ZmZlclNwZWMgYXMgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlY1xufSBmcm9tICcuLi8uLi8uLi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2JpZ19idWZmZXIubW9qb20ubS5qcyc7XG5cbmltcG9ydCB7XG4gIEJpdG1hcE4zMkltYWdlSW5mbyBhcyBza2lhX21vam9tX0JpdG1hcE4zMkltYWdlSW5mbyxcbiAgQml0bWFwTjMySW1hZ2VJbmZvU3BlYyBhcyBza2lhX21vam9tX0JpdG1hcE4zMkltYWdlSW5mb1NwZWMsXG4gIEltYWdlSW5mbyBhcyBza2lhX21vam9tX0ltYWdlSW5mbyxcbiAgSW1hZ2VJbmZvU3BlYyBhcyBza2lhX21vam9tX0ltYWdlSW5mb1NwZWNcbn0gZnJvbSAnLi9pbWFnZV9pbmZvLm1vam9tLm0uanMnO1xuXG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgQml0bWFwTjMyU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBCaXRtYXBXaXRoQXJiaXRyYXJ5QnBwU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBCaXRtYXBNYXBwZWRGcm9tVHJ1c3RlZFByb2Nlc3NTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IElubGluZUJpdG1hcFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQml0bWFwTjMyU3BlYy4kLFxuICAgICdCaXRtYXBOMzInLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbWFnZUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBza2lhX21vam9tX0JpdG1hcE4zMkltYWdlSW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BpeGVsRGF0YScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpdG1hcE4zMiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFza2lhX21vam9tX0JpdG1hcE4zMkltYWdlSW5mbyB9ICovXG4gICAgdGhpcy5pbWFnZUluZm87XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy5waXhlbERhdGE7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEJpdG1hcFdpdGhBcmJpdHJhcnlCcHBTcGVjLiQsXG4gICAgJ0JpdG1hcFdpdGhBcmJpdHJhcnlCcHAnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbWFnZUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBza2lhX21vam9tX0ltYWdlSW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3VOVVNFRFJvd0J5dGVzJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50NjQsXG4gICAgICAgIEJpZ0ludCgwKSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BpeGVsRGF0YScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgNDBdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBCaXRtYXBXaXRoQXJiaXRyYXJ5QnBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXNraWFfbW9qb21fSW1hZ2VJbmZvIH0gKi9cbiAgICB0aGlzLmltYWdlSW5mbztcbiAgICAvKiogQHR5cGUgeyAhYmlnaW50IH0gKi9cbiAgICB0aGlzLnVOVVNFRFJvd0J5dGVzO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMucGl4ZWxEYXRhO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBCaXRtYXBNYXBwZWRGcm9tVHJ1c3RlZFByb2Nlc3NTcGVjLiQsXG4gICAgJ0JpdG1hcE1hcHBlZEZyb21UcnVzdGVkUHJvY2VzcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ltYWdlSW5mbycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNraWFfbW9qb21fSW1hZ2VJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndU5VU0VEUm93Qnl0ZXMnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQ2NCxcbiAgICAgICAgQmlnSW50KDApLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGl4ZWxEYXRhJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCA0MF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpdG1hcE1hcHBlZEZyb21UcnVzdGVkUHJvY2VzcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFza2lhX21vam9tX0ltYWdlSW5mbyB9ICovXG4gICAgdGhpcy5pbWFnZUluZm87XG4gICAgLyoqIEB0eXBlIHsgIWJpZ2ludCB9ICovXG4gICAgdGhpcy51TlVTRURSb3dCeXRlcztcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyIH0gKi9cbiAgICB0aGlzLnBpeGVsRGF0YTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgSW5saW5lQml0bWFwU3BlYy4kLFxuICAgICdJbmxpbmVCaXRtYXAnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbWFnZUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBza2lhX21vam9tX0JpdG1hcE4zMkltYWdlSW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BpeGVsRGF0YScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5VaW50OCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgSW5saW5lQml0bWFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvIH0gKi9cbiAgICB0aGlzLmltYWdlSW5mbztcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IW51bWJlcj4gfSAqL1xuICAgIHRoaXMucGl4ZWxEYXRhO1xuICB9XG59XG5cbiIsIi8vIHNlcnZpY2VzL29uX2RldmljZV9tb2RlbC9wdWJsaWMvbW9qb20vb25fZGV2aWNlX21vZGVsLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi8uLi8uLi9tb2pvL3B1YmxpYy9qcy9iaW5kaW5ncy5qcyc7XG5cbmltcG9ydCB7XG4gIEZpbGUgYXMgbW9qb0Jhc2VfbW9qb21fRmlsZSxcbiAgRmlsZVNwZWMgYXMgbW9qb0Jhc2VfbW9qb21fRmlsZVNwZWNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS9maWxlLm1vam9tLm0uanMnO1xuXG5pbXBvcnQge1xuICBGaWxlUGF0aCBhcyBtb2pvQmFzZV9tb2pvbV9GaWxlUGF0aCxcbiAgRmlsZVBhdGhTcGVjIGFzIG1vam9CYXNlX21vam9tX0ZpbGVQYXRoU3BlY1xufSBmcm9tICcuLi8uLi8uLi8uLi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2ZpbGVfcGF0aC5tb2pvbS5tLmpzJztcblxuaW1wb3J0IHtcbiAgVGltZURlbHRhIGFzIG1vam9CYXNlX21vam9tX1RpbWVEZWx0YSxcbiAgVGltZURlbHRhU3BlYyBhcyBtb2pvQmFzZV9tb2pvbV9UaW1lRGVsdGFTcGVjXG59IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL21vam9tL2Jhc2UvdGltZS5tb2pvbS5tLmpzJztcblxuaW1wb3J0IHtcbiAgRGljdGlvbmFyeVZhbHVlIGFzIG1vam9CYXNlX21vam9tX0RpY3Rpb25hcnlWYWx1ZSxcbiAgRGljdGlvbmFyeVZhbHVlU3BlYyBhcyBtb2pvQmFzZV9tb2pvbV9EaWN0aW9uYXJ5VmFsdWVTcGVjLFxuICBWYWx1ZSBhcyBtb2pvQmFzZV9tb2pvbV9WYWx1ZSxcbiAgVmFsdWVTcGVjIGFzIG1vam9CYXNlX21vam9tX1ZhbHVlU3BlY1xufSBmcm9tICcuLi8uLi8uLi8uLi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL3ZhbHVlcy5tb2pvbS5tLmpzJztcblxuaW1wb3J0IHtcbiAgQml0bWFwV2l0aEFyYml0cmFyeUJwcCBhcyBza2lhX21vam9tX0JpdG1hcFdpdGhBcmJpdHJhcnlCcHAsXG4gIEJpdG1hcFdpdGhBcmJpdHJhcnlCcHBTcGVjIGFzIHNraWFfbW9qb21fQml0bWFwV2l0aEFyYml0cmFyeUJwcFNwZWNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2tpYS9wdWJsaWMvbW9qb20vYml0bWFwLm1vam9tLm0uanMnO1xuXG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgR2VuZXJhdGVFcnJvclNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEdlbmVyYXRlRXJyb3IgPSB7XG4gIFxuICBrVW5rbm93bjogMCxcbiAga0ludmFsaWRDb25zdHJhaW50OiAxLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMSxcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgVG9rZW5TcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2tlbiA9IHtcbiAgXG4gIGtTeXN0ZW06IDAsXG4gIGtNb2RlbDogMSxcbiAga1VzZXI6IDIsXG4gIGtFbmQ6IDMsXG4gIGtUb29sQ2FsbDogNCxcbiAga1Rvb2xSZXNwb25zZTogNSxcbiAga1Rob3VnaHQ6IDYsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiA2LFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dFNvdXJjZVNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0U291cmNlID0ge1xuICBcbiAga1Vua25vd246IDAsXG4gIGtVc2VySW5wdXQ6IDEsXG4gIGtNb2RlbE91dHB1dEZlZWRiYWNrOiAyLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMixcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgUHJpb3JpdHlTcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBQcmlvcml0eSA9IHtcbiAgXG4gIGtGb3JlZ3JvdW5kOiAwLFxuICBrQmFja2dyb3VuZDogMSxcbiAgTUlOX1ZBTFVFOiAwLFxuICBNQVhfVkFMVUU6IDEsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiAhbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IERlY2lzaW9uUXVlc3Rpb25UeXBlU3BlYyA9IHsgJDogbW9qby5pbnRlcm5hbC5FbnVtKCkgfTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25RdWVzdGlvblR5cGUgPSB7XG4gIFxuICBrQm9vbGVhbjogMCxcbiAga0Nob2ljZTogMSxcbiAga1Njb3JlOiAyLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMixcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgUGVyZm9ybWFuY2VDbGFzc1NwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IFBlcmZvcm1hbmNlQ2xhc3MgPSB7XG4gIFxuICBrRXJyb3I6IDAsXG4gIGtHcHVCbG9ja2VkOiAxLFxuICBrRmFpbGVkVG9Mb2FkTGlicmFyeTogMixcbiAga1ZlcnlMb3c6IDMsXG4gIGtMb3c6IDQsXG4gIGtNZWRpdW06IDUsXG4gIGtIaWdoOiA2LFxuICBrVmVyeUhpZ2g6IDcsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiA3LFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkTW9kZWxSZXN1bHRTcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkTW9kZWxSZXN1bHQgPSB7XG4gIFxuICBrU3VjY2VzczogMCxcbiAga0dwdUJsb2NrZWQ6IDEsXG4gIGtGYWlsZWRUb0xvYWRMaWJyYXJ5OiAyLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMixcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgQXNyRXJyb3JTcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBBc3JFcnJvciA9IHtcbiAgXG4gIGtVbmtub3duOiAwLFxuICBrSW5pdGlhbGl6YXRpb25GYWlsZWQ6IDEsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAxLFxufTtcblxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uU3RyZWFtaW5nUmVzcG9uZGVyJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nUmVzcG9uZGVySW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhUmVzcG9uc2VDaHVuayB9IGNodW5rXG4gICAqL1xuXG4gIG9uUmVzcG9uc2UoY2h1bmspIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVJlc3BvbnNlU3VtbWFyeSB9IHN1bW1hcnlcbiAgICovXG5cbiAgb25Db21wbGV0ZShzdW1tYXJ5KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBcnJheTwhVG9vbENhbGw+IH0gdG9vbENhbGxzXG4gICAqL1xuXG4gIG9uVG9vbENhbGxzKHRvb2xDYWxscykge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IFN0cmVhbWluZ1Jlc3BvbmRlckludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFTdHJlYW1pbmdSZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFTdHJlYW1pbmdSZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhUmVzcG9uc2VDaHVuayB9IGNodW5rXG4gICAqL1xuXG4gIG9uUmVzcG9uc2UoXG4gICAgICBjaHVuaykge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIGNodW5rXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVJlc3BvbnNlU3VtbWFyeSB9IHN1bW1hcnlcbiAgICovXG5cbiAgb25Db21wbGV0ZShcbiAgICAgIHN1bW1hcnkpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBzdW1tYXJ5XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFycmF5PCFUb29sQ2FsbD4gfSB0b29sQ2FsbHNcbiAgICovXG5cbiAgb25Ub29sQ2FsbHMoXG4gICAgICB0b29sQ2FsbHMpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Ub29sQ2FsbHNfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgdG9vbENhbGxzXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU3RyZWFtaW5nUmVzcG9uZGVyXG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFTdHJlYW1pbmdSZXNwb25kZXJJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IVN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5vblJlc3BvbnNlLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwub25Db21wbGV0ZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMixcbiAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uVG9vbENhbGxzX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5vblRvb2xDYWxscy5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXIge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwib25fZGV2aWNlX21vZGVsLm1vam9tLlN0cmVhbWluZ1Jlc3BvbmRlclwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU3RyZWFtaW5nUmVzcG9uZGVyXG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5vblJlc3BvbnNlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMub25Db21wbGV0ZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVG9vbENhbGxzID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDIsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblRvb2xDYWxsc19QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMub25Ub29sQ2FsbHMuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2xpZW50UGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnb25fZGV2aWNlX21vZGVsLm1vam9tLkNvbnRleHRDbGllbnQnLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2xpZW50SW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhbnVtYmVyIH0gdG9rZW5zUHJvY2Vzc2VkXG4gICAqL1xuXG4gIG9uQ29tcGxldGUodG9rZW5zUHJvY2Vzc2VkKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgQ29udGV4dENsaWVudEludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2xpZW50UmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhQ29udGV4dENsaWVudFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBDb250ZXh0Q2xpZW50UGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFDb250ZXh0Q2xpZW50UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIW51bWJlciB9IHRva2Vuc1Byb2Nlc3NlZFxuICAgKi9cblxuICBvbkNvbXBsZXRlKFxuICAgICAgdG9rZW5zUHJvY2Vzc2VkKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgQ29udGV4dENsaWVudF9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHRva2Vuc1Byb2Nlc3NlZFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIENvbnRleHRDbGllbnRcbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFDb250ZXh0Q2xpZW50SW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFDb250ZXh0Q2xpZW50UmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIENvbnRleHRDbGllbnRSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQ29udGV4dENsaWVudFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBDb250ZXh0Q2xpZW50X09uQ29tcGxldGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLm9uQ29tcGxldGUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dENsaWVudCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uQ29udGV4dENsaWVudFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFDb250ZXh0Q2xpZW50UmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IENvbnRleHRDbGllbnRSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBDb250ZXh0Q2xpZW50XG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2xpZW50Q2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBDb250ZXh0Q2xpZW50UmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IUNvbnRleHRDbGllbnRSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5vbkNvbXBsZXRlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIENvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMub25Db21wbGV0ZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25QZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uU2Vzc2lvbicsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25JbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBcHBlbmRPcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyA/Q29udGV4dENsaWVudFJlbW90ZSB9IGNsaWVudFxuICAgKi9cblxuICBhcHBlbmQob3B0aW9ucywgY2xpZW50KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFHZW5lcmF0ZU9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ICFTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgZ2VuZXJhdGUob3B0aW9ucywgcmVzcG9uZGVyKSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFJbnB1dCB9IGlucHV0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc2l6ZTogIW51bWJlcixcbiAgICogIH0+fVxuICAgKi9cblxuICBnZXRTaXplSW5Ub2tlbnMoaW5wdXQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBwcm9iYWJpbGl0eTogIW51bWJlcixcbiAgICogIH0+fVxuICAgKi9cblxuICBzY29yZSh0ZXh0KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKi9cblxuICBjbG9uZShzZXNzaW9uKSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcHJvYmFiaWxpdGllczogIUFycmF5PCFudW1iZXI+LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGdldFByb2JhYmlsaXRpZXNCbG9ja2luZyh0ZXh0KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFQcmlvcml0eSB9IHByaW9yaXR5XG4gICAqL1xuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgfSBzdHJlYW1cbiAgICogQHBhcmFtIHsgIUFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBhc3JTdHJlYW0ob3B0aW9ucywgc3RyZWFtLCByZXNwb25kZXIpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUhpbnRPcHRpb25zIH0gb3B0aW9uc1xuICAgKi9cblxuICBoaW50KG9wdGlvbnMpIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBTZXNzaW9uSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25SZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIFNlc3Npb25QZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IVNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhQXBwZW5kT3B0aW9ucyB9IG9wdGlvbnNcbiAgICogQHBhcmFtIHsgP0NvbnRleHRDbGllbnRSZW1vdGUgfSBjbGllbnRcbiAgICovXG5cbiAgYXBwZW5kKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGNsaWVudCkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDYsXG4gICAgICAgIFNlc3Npb25fQXBwZW5kX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgY2xpZW50XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUdlbmVyYXRlT3B0aW9ucyB9IG9wdGlvbnNcbiAgICogQHBhcmFtIHsgIVN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBnZW5lcmF0ZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICByZXNwb25kZXIpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICA3LFxuICAgICAgICBTZXNzaW9uX0dlbmVyYXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgcmVzcG9uZGVyXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUlucHV0IH0gaW5wdXRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzaXplOiAhbnVtYmVyLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGdldFNpemVJblRva2VucyhcbiAgICAgIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDUsXG4gICAgICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICBpbnB1dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcHJvYmFiaWxpdHk6ICFudW1iZXIsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgc2NvcmUoXG4gICAgICB0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIFNlc3Npb25fU2NvcmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTZXNzaW9uX1Njb3JlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgdGV4dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKi9cblxuICBjbG9uZShcbiAgICAgIHNlc3Npb24pIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHNlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHByb2JhYmlsaXRpZXM6ICFBcnJheTwhbnVtYmVyPixcbiAgICogIH0+fVxuICAgKi9cblxuICBnZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmcoXG4gICAgICB0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDgsXG4gICAgICAgIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVByaW9yaXR5IH0gcHJpb3JpdHlcbiAgICovXG5cbiAgc2V0UHJpb3JpdHkoXG4gICAgICBwcmlvcml0eSkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDksXG4gICAgICAgIFNlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhQXNyU3RyZWFtT3B0aW9ucyB9IG9wdGlvbnNcbiAgICogQHBhcmFtIHsgIUFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIH0gc3RyZWFtXG4gICAqIEBwYXJhbSB7ICFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgYXNyU3RyZWFtKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHN0cmVhbSxcbiAgICAgIHJlc3BvbmRlcikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDEwLFxuICAgICAgICBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHN0cmVhbSxcbiAgICAgICAgICByZXNwb25kZXJcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhSGludE9wdGlvbnMgfSBvcHRpb25zXG4gICAqL1xuXG4gIGhpbnQoXG4gICAgICBvcHRpb25zKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMTEsXG4gICAgICAgIFNlc3Npb25fSGludF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IVNlc3Npb25JbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IVNlc3Npb25SZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgU2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTZXNzaW9uUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDYsXG4gICAgICAgIFNlc3Npb25fQXBwZW5kX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5hcHBlbmQuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDcsXG4gICAgICAgIFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmdlbmVyYXRlLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA1LFxuICAgICAgICBTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmdldFNpemVJblRva2Vucy5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgU2Vzc2lvbl9TY29yZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuc2NvcmUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDQsXG4gICAgICAgIFNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmNsb25lLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA4LFxuICAgICAgICBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmdldFByb2JhYmlsaXRpZXNCbG9ja2luZy5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgOSxcbiAgICAgICAgU2Vzc2lvbl9TZXRQcmlvcml0eV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuc2V0UHJpb3JpdHkuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEwLFxuICAgICAgICBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuYXNyU3RyZWFtLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxMSxcbiAgICAgICAgU2Vzc2lvbl9IaW50X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5oaW50LmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlc3Npb24ge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwib25fZGV2aWNlX21vZGVsLm1vam9tLlNlc3Npb25cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshU2Vzc2lvblJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBTZXNzaW9uUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgU2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTZXNzaW9uUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuYXBwZW5kID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDYsXG4gICAgICAgIFNlc3Npb25fQXBwZW5kX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5hcHBlbmQuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5nZW5lcmF0ZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA3LFxuICAgICAgICBTZXNzaW9uX0dlbmVyYXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5nZW5lcmF0ZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFNpemVJblRva2VucyA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA1LFxuICAgICAgICBTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmdldFNpemVJblRva2Vucy5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuc2NvcmUgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgU2Vzc2lvbl9TY29yZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMuc2NvcmUuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNsb25lID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDQsXG4gICAgICAgIFNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmNsb25lLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDgsXG4gICAgICAgIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMuZ2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nLmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zZXRQcmlvcml0eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA5LFxuICAgICAgICBTZXNzaW9uX1NldFByaW9yaXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5zZXRQcmlvcml0eS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFzclN0cmVhbSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxMCxcbiAgICAgICAgU2Vzc2lvbl9Bc3JTdHJlYW1fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmFzclN0cmVhbS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmhpbnQgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMTEsXG4gICAgICAgIFNlc3Npb25fSGludF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuaGludC5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uT25EZXZpY2VNb2RlbCcsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKiBAcGFyYW0geyA/U2Vzc2lvblBhcmFtcyB9IHBhcmFtc1xuICAgKi9cblxuICBzdGFydFNlc3Npb24oc2Vzc2lvbiwgcGFyYW1zKSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc2FmZXR5SW5mbzogP1NhZmV0eUluZm8sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgY2xhc3NpZnlUZXh0U2FmZXR5KHRleHQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ID9MYW5ndWFnZURldGVjdGlvblJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBkZXRlY3RMYW5ndWFnZSh0ZXh0KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFMb2FkQWRhcHRhdGlvblBhcmFtcyB9IHBhcmFtc1xuICAgKiBAcGFyYW0geyAhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciB9IG1vZGVsXG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcmVzdWx0OiAhTG9hZE1vZGVsUmVzdWx0LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGxvYWRBZGFwdGF0aW9uKHBhcmFtcywgbW9kZWwpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUxvYWRQb3N0UHJvY2Vzc29yUGFyYW1zIH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7ICFPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyIH0gbW9kZWxcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ICFMb2FkTW9kZWxSZXN1bHQsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgbG9hZFBvc3RQcm9jZXNzb3IocGFyYW1zLCBtb2RlbCkge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IE9uRGV2aWNlTW9kZWxJbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbFJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKiBAcGFyYW0geyA/U2Vzc2lvblBhcmFtcyB9IHBhcmFtc1xuICAgKi9cblxuICBzdGFydFNlc3Npb24oXG4gICAgICBzZXNzaW9uLFxuICAgICAgcGFyYW1zKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHNhZmV0eUluZm86ID9TYWZldHlJbmZvLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGNsYXNzaWZ5VGV4dFNhZmV0eShcbiAgICAgIHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMSxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogP0xhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGRldGVjdExhbmd1YWdlKFxuICAgICAgdGV4dCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhTG9hZEFkYXB0YXRpb25QYXJhbXMgfSBwYXJhbXNcbiAgICogQHBhcmFtIHsgIU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIgfSBtb2RlbFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogIUxvYWRNb2RlbFJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBsb2FkQWRhcHRhdGlvbihcbiAgICAgIHBhcmFtcyxcbiAgICAgIG1vZGVsKSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIG1vZGVsXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUxvYWRQb3N0UHJvY2Vzc29yUGFyYW1zIH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7ICFPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyIH0gbW9kZWxcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ICFMb2FkTW9kZWxSZXN1bHQsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgbG9hZFBvc3RQcm9jZXNzb3IoXG4gICAgICBwYXJhbXMsXG4gICAgICBtb2RlbCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICA0LFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBtb2RlbFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIE9uRGV2aWNlTW9kZWxcbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFPbkRldmljZU1vZGVsSW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFPbkRldmljZU1vZGVsUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIE9uRGV2aWNlTW9kZWxSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhT25EZXZpY2VNb2RlbFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBPbkRldmljZU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuc3RhcnRTZXNzaW9uLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmNsYXNzaWZ5VGV4dFNhZmV0eS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMixcbiAgICAgICAgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuZGV0ZWN0TGFuZ3VhZ2UuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDMsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmxvYWRBZGFwdGF0aW9uLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA0LFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgaW1wbC5sb2FkUG9zdFByb2Nlc3Nvci5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5PbkRldmljZU1vZGVsXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IU9uRGV2aWNlTW9kZWxSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgT25EZXZpY2VNb2RlbFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIE9uRGV2aWNlTW9kZWxcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIE9uRGV2aWNlTW9kZWxSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhT25EZXZpY2VNb2RlbFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0U2Vzc2lvbiA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBPbkRldmljZU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuc3RhcnRTZXNzaW9uLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuY2xhc3NpZnlUZXh0U2FmZXR5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMuY2xhc3NpZnlUZXh0U2FmZXR5LmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5kZXRlY3RMYW5ndWFnZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAyLFxuICAgICAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5kZXRlY3RMYW5ndWFnZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMubG9hZEFkYXB0YXRpb24gPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMubG9hZEFkYXB0YXRpb24uY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmxvYWRQb3N0UHJvY2Vzc29yID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmxvYWRQb3N0UHJvY2Vzc29yLmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5UZXh0U2FmZXR5U2Vzc2lvbicsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uSW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHNhZmV0eUluZm86ID9TYWZldHlJbmZvLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGNsYXNzaWZ5VGV4dFNhZmV0eSh0ZXh0KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcmVzdWx0OiA/TGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHQsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZGV0ZWN0TGFuZ3VhZ2UodGV4dCkge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIGNsb25lKHNlc3Npb24pIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBUZXh0U2FmZXR5U2Vzc2lvbkludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIFRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc2FmZXR5SW5mbzogP1NhZmV0eUluZm8sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgY2xhc3NpZnlUZXh0U2FmZXR5KFxuICAgICAgdGV4dCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ID9MYW5ndWFnZURldGVjdGlvblJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBkZXRlY3RMYW5ndWFnZShcbiAgICAgIHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMixcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIGNsb25lKFxuICAgICAgc2Vzc2lvbikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDMsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHNlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBUZXh0U2FmZXR5U2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eVNlc3Npb25SZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFUZXh0U2FmZXR5U2Vzc2lvbkludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhVGV4dFNhZmV0eVNlc3Npb25SZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25SZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhVGV4dFNhZmV0eVNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMSxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmNsYXNzaWZ5VGV4dFNhZmV0eS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMixcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgaW1wbC5kZXRlY3RMYW5ndWFnZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmNsb25lLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5UZXh0U2FmZXR5U2Vzc2lvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFRleHRTYWZldHlTZXNzaW9uXG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbkNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgVGV4dFNhZmV0eVNlc3Npb25SZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhVGV4dFNhZmV0eVNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5jbGFzc2lmeVRleHRTYWZldHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMSxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmNsYXNzaWZ5VGV4dFNhZmV0eS5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuZGV0ZWN0TGFuZ3VhZ2UgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMixcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5kZXRlY3RMYW5ndWFnZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuY2xvbmUgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmNsb25lLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eU1vZGVsUGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnb25fZGV2aWNlX21vZGVsLm1vam9tLlRleHRTYWZldHlNb2RlbCcsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbEludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKi9cblxuICBzdGFydFNlc3Npb24oc2Vzc2lvbikge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IFRleHRTYWZldHlNb2RlbEludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5TW9kZWxSZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFUZXh0U2FmZXR5TW9kZWxQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgVGV4dFNhZmV0eU1vZGVsUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFUZXh0U2FmZXR5TW9kZWxQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIHN0YXJ0U2Vzc2lvbihcbiAgICAgIHNlc3Npb24pIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBUZXh0U2FmZXR5TW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHNlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBUZXh0U2FmZXR5TW9kZWxcbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IVRleHRTYWZldHlNb2RlbEludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhVGV4dFNhZmV0eU1vZGVsUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIFRleHRTYWZldHlNb2RlbFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFUZXh0U2FmZXR5TW9kZWxSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgVGV4dFNhZmV0eU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuc3RhcnRTZXNzaW9uLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uVGV4dFNhZmV0eU1vZGVsXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IVRleHRTYWZldHlNb2RlbFJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBUZXh0U2FmZXR5TW9kZWxSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBUZXh0U2FmZXR5TW9kZWxcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbENhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgVGV4dFNhZmV0eU1vZGVsUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVRleHRTYWZldHlNb2RlbFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0U2Vzc2lvbiA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBUZXh0U2FmZXR5TW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5zdGFydFNlc3Npb24uY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uRGVjaXNpb25TZXNzaW9uJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25TZXNzaW9uSW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gaW5wdXRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHRzOiA/QXJyYXk8IURlY2lzaW9uUXVlc3Rpb25SZXN1bHQ+LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGRlY2lkZShpbnB1dCkge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IERlY2lzaW9uU2Vzc2lvbkludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblNlc3Npb25SZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgRGVjaXNpb25TZXNzaW9uUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gaW5wdXRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHRzOiA/QXJyYXk8IURlY2lzaW9uUXVlc3Rpb25SZXN1bHQ+LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGRlY2lkZShcbiAgICAgIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgaW5wdXRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBEZWNpc2lvblNlc3Npb25cbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvblJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IURlY2lzaW9uU2Vzc2lvbkludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhRGVjaXNpb25TZXNzaW9uUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIERlY2lzaW9uU2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFEZWNpc2lvblNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuZGVjaWRlLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uRGVjaXNpb25TZXNzaW9uXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IURlY2lzaW9uU2Vzc2lvblJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBEZWNpc2lvblNlc3Npb25SZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBEZWNpc2lvblNlc3Npb25cbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvbkNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgRGVjaXNpb25TZXNzaW9uUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IURlY2lzaW9uU2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmRlY2lkZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5kZWNpZGUuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uTW9kZWxQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uRGVjaXNpb25Nb2RlbCcsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uTW9kZWxJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFEZWNpc2lvblF1ZXJ5IH0gcXVlcnlcbiAgICogQHBhcmFtIHsgIURlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9IHNlc3Npb25cbiAgICovXG5cbiAgc3RhcnRTZXNzaW9uKHF1ZXJ5LCBzZXNzaW9uKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgRGVjaXNpb25Nb2RlbEludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvbk1vZGVsUmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhRGVjaXNpb25Nb2RlbFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBEZWNpc2lvbk1vZGVsUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFEZWNpc2lvbk1vZGVsUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIURlY2lzaW9uUXVlcnkgfSBxdWVyeVxuICAgKiBAcGFyYW0geyAhRGVjaXNpb25TZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKi9cblxuICBzdGFydFNlc3Npb24oXG4gICAgICBxdWVyeSxcbiAgICAgIHNlc3Npb24pIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvbk1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBzZXNzaW9uXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgRGVjaXNpb25Nb2RlbFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25Nb2RlbFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IURlY2lzaW9uTW9kZWxJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IURlY2lzaW9uTW9kZWxSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgRGVjaXNpb25Nb2RlbFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFEZWNpc2lvbk1vZGVsUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5zdGFydFNlc3Npb24uYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVjaXNpb25Nb2RlbCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uRGVjaXNpb25Nb2RlbFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFEZWNpc2lvbk1vZGVsUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IERlY2lzaW9uTW9kZWxSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBEZWNpc2lvbk1vZGVsXG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvbk1vZGVsQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBEZWNpc2lvbk1vZGVsUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IURlY2lzaW9uTW9kZWxSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zdGFydFNlc3Npb24gPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnN0YXJ0U2Vzc2lvbi5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5Bc3JTdHJlYW1SZXNwb25kZXInLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1SZXNwb25kZXJJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBcnJheTwhU3BlZWNoUmVjb2duaXRpb25SZXN1bHQ+IH0gcmVzdWx0XG4gICAqL1xuXG4gIG9uUmVzcG9uc2UocmVzdWx0KSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgQXNyU3RyZWFtUmVzcG9uZGVySW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IUFzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBBc3JTdHJlYW1SZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IUFzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBcnJheTwhU3BlZWNoUmVjb2duaXRpb25SZXN1bHQ+IH0gcmVzdWx0XG4gICAqL1xuXG4gIG9uUmVzcG9uc2UoXG4gICAgICByZXN1bHQpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1SZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICByZXN1bHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBBc3JTdHJlYW1SZXNwb25kZXJcbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbVJlc3BvbmRlclJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFzclN0cmVhbVJlc3BvbmRlckludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU3RyZWFtUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLm9uUmVzcG9uc2UuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5Bc3JTdHJlYW1SZXNwb25kZXJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclN0cmVhbVJlc3BvbmRlclxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMub25SZXNwb25zZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1SZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMub25SZXNwb25zZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnb25fZGV2aWNlX21vZGVsLm1vam9tLkFzclN0cmVhbUlucHV0Jywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBdWRpb0RhdGEgfSBkYXRhXG4gICAqL1xuXG4gIGFkZEF1ZGlvQ2h1bmsoZGF0YSkge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IEFzclN0cmVhbUlucHV0SW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbUlucHV0UmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IUFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUF1ZGlvRGF0YSB9IGRhdGFcbiAgICovXG5cbiAgYWRkQXVkaW9DaHVuayhcbiAgICAgIGRhdGEpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1JbnB1dF9BZGRBdWRpb0NodW5rX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIGRhdGFcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBBc3JTdHJlYW1JbnB1dFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFBc3JTdHJlYW1JbnB1dEludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhQXNyU3RyZWFtSW5wdXRSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgQXNyU3RyZWFtSW5wdXRSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQXNyU3RyZWFtSW5wdXRSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU3RyZWFtSW5wdXRfQWRkQXVkaW9DaHVua19QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuYWRkQXVkaW9DaHVuay5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1JbnB1dCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uQXNyU3RyZWFtSW5wdXRcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshQXNyU3RyZWFtSW5wdXRSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgQXNyU3RyZWFtSW5wdXRSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBBc3JTdHJlYW1JbnB1dFxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIEFzclN0cmVhbUlucHV0UmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IUFzclN0cmVhbUlucHV0UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuYWRkQXVkaW9DaHVuayA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1JbnB1dF9BZGRBdWRpb0NodW5rX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5hZGRBdWRpb0NodW5rLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgQWRhcHRhdGlvbkFzc2V0c1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHRTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNhZmV0eUluZm9TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlQ2h1bmtTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlU3VtbWFyeVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgTG9hZEFkYXB0YXRpb25QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRQb3N0UHJvY2Vzc29yUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBDYXBhYmlsaXRpZXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBcHBlbmRPcHRpb25zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBIaW50T3B0aW9uc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgR2VuZXJhdGVPcHRpb25zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvbk9wdGlvblNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25RdWVzdGlvblNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25RdWVyeVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25RdWVzdGlvblJlc3VsdFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVG9vbERlY2xhcmF0aW9uU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUb29sQ2FsbFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVG9vbFJlc3BvbnNlU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBdWRpb0RhdGFTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNwZWVjaFJlY29nbml0aW9uUmVzdWx0U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBc3JTdHJlYW1PcHRpb25zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZXZpY2VQZXJmb3JtYW5jZUluZm9TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IERldmljZUluZm9TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFN0cmVhbWluZ1Jlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3RyZWFtaW5nUmVzcG9uZGVyX09uQ29tcGxldGVfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTdHJlYW1pbmdSZXNwb25kZXJfT25Ub29sQ2FsbHNfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBDb250ZXh0Q2xpZW50X09uQ29tcGxldGVfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX0FwcGVuZF9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX1Njb3JlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9TY29yZV9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fSGludF9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U2FmZXR5U2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRTYWZldHlNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBc3JTdHJlYW1SZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEFzclN0cmVhbUlucHV0X0FkZEF1ZGlvQ2h1bmtfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgSW5wdXRQaWVjZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlQ29uc3RyYWludFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQWRhcHRhdGlvbkFzc2V0c1NwZWMuJCxcbiAgICAnQWRhcHRhdGlvbkFzc2V0cycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3dlaWdodHMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9GaWxlU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd3ZWlnaHRzUGF0aCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0ZpbGVQYXRoU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBBZGFwdGF0aW9uQXNzZXRzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX0ZpbGV8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy53ZWlnaHRzO1xuICAgIC8qKiBAdHlwZSB7IChtb2pvQmFzZV9tb2pvbV9GaWxlUGF0aHx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLndlaWdodHNQYXRoO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBMYW5ndWFnZURldGVjdGlvblJlc3VsdFNwZWMuJCxcbiAgICAnTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHQnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb2RlJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZWxpYWJpbGl0eScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuRmxvYXQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBMYW5ndWFnZURldGVjdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuY29kZTtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnJlbGlhYmlsaXR5O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTYWZldHlJbmZvU3BlYy4kLFxuICAgICdTYWZldHlJbmZvJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2xhc3NTY29yZXMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2xhbmd1YWdlJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHRTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNhZmV0eUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IW51bWJlcj4gfSAqL1xuICAgIHRoaXMuY2xhc3NTY29yZXM7XG4gICAgLyoqIEB0eXBlIHsgKExhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMubGFuZ3VhZ2U7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFJlc3BvbnNlQ2h1bmtTcGVjLiQsXG4gICAgJ1Jlc3BvbnNlQ2h1bmsnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzYWZldHlJbmZvJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgU2FmZXR5SW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGhvdWdodCcsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgOSxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxbOSwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZUNodW5rIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50ZXh0O1xuICAgIC8qKiBAdHlwZSB7IChTYWZldHlJbmZvfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuc2FmZXR5SW5mbztcbiAgICAvKiogQHR5cGUgeyAoc3RyaW5nfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMudGhvdWdodDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgUmVzcG9uc2VTdW1tYXJ5U3BlYy4kLFxuICAgICdSZXNwb25zZVN1bW1hcnknLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzYWZldHlJbmZvJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgU2FmZXR5SW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnb3V0cHV0VG9rZW5Db3VudCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VTdW1tYXJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgKFNhZmV0eUluZm98dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5zYWZldHlJbmZvO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMub3V0cHV0VG9rZW5Db3VudDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgTG9hZEFkYXB0YXRpb25QYXJhbXNTcGVjLiQsXG4gICAgJ0xvYWRBZGFwdGF0aW9uUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYXNzZXRzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgQWRhcHRhdGlvbkFzc2V0c1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRBZGFwdGF0aW9uUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFkYXB0YXRpb25Bc3NldHMgfSAqL1xuICAgIHRoaXMuYXNzZXRzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBMb2FkUG9zdFByb2Nlc3NvclBhcmFtc1NwZWMuJCxcbiAgICAnTG9hZFBvc3RQcm9jZXNzb3JQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd3ZWlnaHRzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fRmlsZVNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2FjaGUnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9GaWxlU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtYXhUb2tlbnMnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2FkUG9zdFByb2Nlc3NvclBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IChtb2pvQmFzZV9tb2pvbV9GaWxlfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMud2VpZ2h0cztcbiAgICAvKiogQHR5cGUgeyAobW9qb0Jhc2VfbW9qb21fRmlsZXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmNhY2hlO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMubWF4VG9rZW5zO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBDYXBhYmlsaXRpZXNTcGVjLiQsXG4gICAgJ0NhcGFiaWxpdGllcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ltYWdlSW5wdXQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYXVkaW9JbnB1dCcsIDAsXG4gICAgICAgIDEsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBhYmlsaXRpZXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhYm9vbGVhbiB9ICovXG4gICAgdGhpcy5pbWFnZUlucHV0O1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmF1ZGlvSW5wdXQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtYXhUb2tlbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NhcGFiaWxpdGllcycsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIENhcGFiaWxpdGllc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RvcEsnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDEsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RlbXBlcmF0dXJlJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuRmxvYXQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAxLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLFsxLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLm1heFRva2VucztcbiAgICAvKiogQHR5cGUgeyAhQ2FwYWJpbGl0aWVzIH0gKi9cbiAgICB0aGlzLmNhcGFiaWxpdGllcztcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnRvcEs7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy50ZW1wZXJhdHVyZTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgSW5wdXRTcGVjLiQsXG4gICAgJ0lucHV0JyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGllY2VzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShJbnB1dFBpZWNlU3BlYy4kLCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhSW5wdXRQaWVjZT4gfSAqL1xuICAgIHRoaXMucGllY2VzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBcHBlbmRPcHRpb25zU3BlYy4kLFxuICAgICdBcHBlbmRPcHRpb25zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW5wdXQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBJbnB1dFNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21heFRva2VucycsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW5wdXRTb3VyY2UnLCAxMixcbiAgICAgICAgMCxcbiAgICAgICAgSW5wdXRTb3VyY2VTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAxLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLFsxLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcGVuZE9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhSW5wdXQgfSAqL1xuICAgIHRoaXMuaW5wdXQ7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5tYXhUb2tlbnM7XG4gICAgLyoqIEB0eXBlIHsgIUlucHV0U291cmNlIH0gKi9cbiAgICB0aGlzLmlucHV0U291cmNlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBIaW50T3B0aW9uc1NwZWMuJCxcbiAgICAnSGludE9wdGlvbnMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb25zdHJhaW5lZERlY29kaW5nSGludCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBIaW50T3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmNvbnN0cmFpbmVkRGVjb2RpbmdIaW50O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBHZW5lcmF0ZU9wdGlvbnNTcGVjLiQsXG4gICAgJ0dlbmVyYXRlT3B0aW9ucycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21heE91dHB1dFRva2VucycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY29uc3RyYWludCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIFJlc3BvbnNlQ29uc3RyYWludFNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMixcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYWRkT3V0cHV0VG9rZW5zVG9Db250ZXh0JywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDMsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2VuYWJsZVRoaW5raW5nJywgNCxcbiAgICAgICAgMSxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDksXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RoaW5raW5nVG9rZW5CdWRnZXQnLCAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICA5LFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLFsyLCAzMl0sWzMsIDMyXSxbOSwgNDBdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZU9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLm1heE91dHB1dFRva2VucztcbiAgICAvKiogQHR5cGUgeyAoUmVzcG9uc2VDb25zdHJhaW50fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuY29uc3RyYWludDtcbiAgICAvKiogQHR5cGUgeyAhYm9vbGVhbiB9ICovXG4gICAgdGhpcy5hZGRPdXRwdXRUb2tlbnNUb0NvbnRleHQ7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuZW5hYmxlVGhpbmtpbmc7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy50aGlua2luZ1Rva2VuQnVkZ2V0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvbk9wdGlvblNwZWMuJCxcbiAgICAnRGVjaXNpb25PcHRpb24nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdsYWJlbCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZGVzY3JpcHRpb24nLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uT3B0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5sYWJlbDtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvblF1ZXN0aW9uU3BlYy4kLFxuICAgICdEZWNpc2lvblF1ZXN0aW9uJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaWQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Byb21wdCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndHlwZScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvblF1ZXN0aW9uVHlwZVNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShEZWNpc2lvbk9wdGlvblNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDQwXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25RdWVzdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuaWQ7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5wcm9tcHQ7XG4gICAgLyoqIEB0eXBlIHsgIURlY2lzaW9uUXVlc3Rpb25UeXBlIH0gKi9cbiAgICB0aGlzLnR5cGU7XG4gICAgLyoqIEB0eXBlIHsgIUFycmF5PCFEZWNpc2lvbk9wdGlvbj4gfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRGVjaXNpb25RdWVyeVNwZWMuJCxcbiAgICAnRGVjaXNpb25RdWVyeScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NoYXJlZENvbnRleHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3F1ZXN0aW9ucycsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkoRGVjaXNpb25RdWVzdGlvblNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25RdWVyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuc2hhcmVkQ29udGV4dDtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IURlY2lzaW9uUXVlc3Rpb24+IH0gKi9cbiAgICB0aGlzLnF1ZXN0aW9ucztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRGVjaXNpb25RdWVzdGlvblJlc3VsdFNwZWMuJCxcbiAgICAnRGVjaXNpb25RdWVzdGlvblJlc3VsdCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Byb2JhYmlsaXRpZXMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uUXVlc3Rpb25SZXN1bHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IW51bWJlcj4gfSAqL1xuICAgIHRoaXMucHJvYmFiaWxpdGllcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVG9vbERlY2xhcmF0aW9uU3BlYy4kLFxuICAgICdUb29sRGVjbGFyYXRpb24nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICduYW1lJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkZXNjcmlwdGlvbicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW5wdXRTY2hlbWEnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fRGljdGlvbmFyeVZhbHVlU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVG9vbERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5uYW1lO1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0RpY3Rpb25hcnlWYWx1ZSB9ICovXG4gICAgdGhpcy5pbnB1dFNjaGVtYTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVG9vbENhbGxTcGVjLiQsXG4gICAgJ1Rvb2xDYWxsJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2FsbElkJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICduYW1lJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhcmd1bWVudHMnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fRGljdGlvbmFyeVZhbHVlU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVG9vbENhbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLmNhbGxJZDtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLm5hbWU7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0RpY3Rpb25hcnlWYWx1ZSB9ICovXG4gICAgdGhpcy5hcmd1bWVudHM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRvb2xSZXNwb25zZVNwZWMuJCxcbiAgICAnVG9vbFJlc3BvbnNlJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2FsbElkJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICduYW1lJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHQnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fVmFsdWVTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2Vycm9yTWVzc2FnZScsIDMyLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDQ4XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVG9vbFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5jYWxsSWQ7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5uYW1lO1xuICAgIC8qKiBAdHlwZSB7IChtb2pvQmFzZV9tb2pvbV9WYWx1ZXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgICAvKiogQHR5cGUgeyAoc3RyaW5nfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBdWRpb0RhdGFTcGVjLiQsXG4gICAgJ0F1ZGlvRGF0YScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NoYW5uZWxDb3VudCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzYW1wbGVSYXRlJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ZyYW1lQ291bnQnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZGF0YScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvRGF0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuY2hhbm5lbENvdW50O1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuc2FtcGxlUmF0ZTtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLmZyYW1lQ291bnQ7XG4gICAgLyoqIEB0eXBlIHsgIUFycmF5PCFudW1iZXI+IH0gKi9cbiAgICB0aGlzLmRhdGE7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNwZWVjaFJlY29nbml0aW9uUmVzdWx0U3BlYy4kLFxuICAgICdTcGVlY2hSZWNvZ25pdGlvblJlc3VsdCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RyYW5zY3JpcHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2lzRmluYWwnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYXVkaW9TdGFydFRpbWUnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fVGltZURlbHRhU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICA4LFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhdWRpb0VuZFRpbWUnLCAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fVGltZURlbHRhU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICA4LFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLFs4LCA0MF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50cmFuc2NyaXB0O1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmlzRmluYWw7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX1RpbWVEZWx0YXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmF1ZGlvU3RhcnRUaW1lO1xuICAgIC8qKiBAdHlwZSB7IChtb2pvQmFzZV9tb2pvbV9UaW1lRGVsdGF8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5hdWRpb0VuZFRpbWU7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEFzclN0cmVhbU9wdGlvbnNTcGVjLiQsXG4gICAgJ0FzclN0cmVhbU9wdGlvbnMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzYW1wbGVSYXRlSHonLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2xhbmd1YWdlJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDcsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sWzcsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtT3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuc2FtcGxlUmF0ZUh6O1xuICAgIC8qKiBAdHlwZSB7IChzdHJpbmd8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5sYW5ndWFnZTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRGV2aWNlUGVyZm9ybWFuY2VJbmZvU3BlYy4kLFxuICAgICdEZXZpY2VQZXJmb3JtYW5jZUluZm8nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwZXJmb3JtYW5jZUNsYXNzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgUGVyZm9ybWFuY2VDbGFzc1NwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3ZyYW1NYicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDY0LFxuICAgICAgICBCaWdJbnQoMCksXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZpY2VQZXJmb3JtYW5jZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhUGVyZm9ybWFuY2VDbGFzcyB9ICovXG4gICAgdGhpcy5wZXJmb3JtYW5jZUNsYXNzO1xuICAgIC8qKiBAdHlwZSB7ICFiaWdpbnQgfSAqL1xuICAgIHRoaXMudnJhbU1iO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZXZpY2VJbmZvU3BlYy4kLFxuICAgICdEZXZpY2VJbmZvJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndmVuZG9ySWQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZGV2aWNlSWQnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZHJpdmVyVmVyc2lvbicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3VwcG9ydHNGcDE2JywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZpY2VJbmZvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy52ZW5kb3JJZDtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLmRldmljZUlkO1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuZHJpdmVyVmVyc2lvbjtcbiAgICAvKiogQHR5cGUgeyAhYm9vbGVhbiB9ICovXG4gICAgdGhpcy5zdXBwb3J0c0ZwMTY7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAnU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2h1bmsnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBSZXNwb25zZUNodW5rU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVJlc3BvbnNlQ2h1bmsgfSAqL1xuICAgIHRoaXMuY2h1bms7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAnU3RyZWFtaW5nUmVzcG9uZGVyX09uQ29tcGxldGVfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3VtbWFyeScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIFJlc3BvbnNlU3VtbWFyeVNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlcl9PbkNvbXBsZXRlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFSZXNwb25zZVN1bW1hcnkgfSAqL1xuICAgIHRoaXMuc3VtbWFyeTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uVG9vbENhbGxzX1BhcmFtc1NwZWMuJCxcbiAgICAnU3RyZWFtaW5nUmVzcG9uZGVyX09uVG9vbENhbGxzX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Rvb2xDYWxscycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkoVG9vbENhbGxTcGVjLiQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblRvb2xDYWxsc19QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IVRvb2xDYWxsPiB9ICovXG4gICAgdGhpcy50b29sQ2FsbHM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIENvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgJ0NvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0b2tlbnNQcm9jZXNzZWQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnRva2Vuc1Byb2Nlc3NlZDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9BcHBlbmRfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0FwcGVuZF9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdvcHRpb25zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgQXBwZW5kT3B0aW9uc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NsaWVudCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUHJveHkoQ29udGV4dENsaWVudFJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fQXBwZW5kX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcHBlbmRPcHRpb25zIH0gKi9cbiAgICB0aGlzLm9wdGlvbnM7XG4gICAgLyoqIEB0eXBlIHsgKENvbnRleHRDbGllbnRSZW1vdGV8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5jbGllbnQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0dlbmVyYXRlX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBHZW5lcmF0ZU9wdGlvbnNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXNwb25kZXInLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVByb3h5KFN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0dlbmVyYXRlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFHZW5lcmF0ZU9wdGlvbnMgfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgICAvKiogQHR5cGUgeyAhU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlIH0gKi9cbiAgICB0aGlzLnJlc3BvbmRlcjtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnB1dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIElucHV0U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUlucHV0IH0gKi9cbiAgICB0aGlzLmlucHV0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0dldFNpemVJblRva2Vuc19SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzaXplJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0dldFNpemVJblRva2Vuc19SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuc2l6ZTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9TY29yZV9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fU2NvcmVfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGV4dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9TY29yZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwcm9iYWJpbGl0eScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuRmxvYXQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX1Njb3JlX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5wcm9iYWJpbGl0eTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fQ2xvbmVfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2Vzc2lvbicsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChTZXNzaW9uUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fQ2xvbmVfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMuc2Vzc2lvbjtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Byb2JhYmlsaXRpZXMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFycmF5PCFudW1iZXI+IH0gKi9cbiAgICB0aGlzLnByb2JhYmlsaXRpZXM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX1NldFByaW9yaXR5X1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3ByaW9yaXR5JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgUHJpb3JpdHlTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX1NldFByaW9yaXR5X1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFQcmlvcml0eSB9ICovXG4gICAgdGhpcy5wcmlvcml0eTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9Bc3JTdHJlYW1fUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdvcHRpb25zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU3RyZWFtT3B0aW9uc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3N0cmVhbScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXNwb25kZXInLCAxMixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eShBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9Bc3JTdHJlYW1fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFzclN0cmVhbU9wdGlvbnMgfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgICAvKiogQHR5cGUgeyAhQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMuc3RyZWFtO1xuICAgIC8qKiBAdHlwZSB7ICFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSAqL1xuICAgIHRoaXMucmVzcG9uZGVyO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0hpbnRfUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0hpbnRfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnb3B0aW9ucycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIEhpbnRPcHRpb25zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9IaW50X1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFIaW50T3B0aW9ucyB9ICovXG4gICAgdGhpcy5vcHRpb25zO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBPbkRldmljZU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Nlc3Npb24nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVJlcXVlc3QoU2Vzc2lvblBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwYXJhbXMnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBTZXNzaW9uUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAxLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLFsxLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gKi9cbiAgICB0aGlzLnNlc3Npb247XG4gICAgLyoqIEB0eXBlIHsgKFNlc3Npb25QYXJhbXN8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5wYXJhbXM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAnT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGV4dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50ZXh0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzYWZldHlJbmZvJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgU2FmZXR5SW5mb1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoU2FmZXR5SW5mb3x1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnNhZmV0eUluZm87XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RleHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50ZXh0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncmVzdWx0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHRTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHR8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5yZXN1bHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BhcmFtcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIExvYWRBZGFwdGF0aW9uUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbW9kZWwnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVJlcXVlc3QoT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFMb2FkQWRhcHRhdGlvblBhcmFtcyB9ICovXG4gICAgdGhpcy5wYXJhbXM7XG4gICAgLyoqIEB0eXBlIHsgIU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMubW9kZWw7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBMb2FkTW9kZWxSZXN1bHRTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUxvYWRNb2RlbFJlc3VsdCB9ICovXG4gICAgdGhpcy5yZXN1bHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BhcmFtcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIExvYWRQb3N0UHJvY2Vzc29yUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbW9kZWwnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVJlcXVlc3QoT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFMb2FkUG9zdFByb2Nlc3NvclBhcmFtcyB9ICovXG4gICAgdGhpcy5wYXJhbXM7XG4gICAgLyoqIEB0eXBlIHsgIU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMubW9kZWw7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBMb2FkTW9kZWxSZXN1bHRTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUxvYWRNb2RlbFJlc3VsdCB9ICovXG4gICAgdGhpcy5yZXN1bHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXNTcGVjLiQsXG4gICAgJ1RleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50ZXh0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ1RleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhZmV0eUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBTYWZldHlJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoU2FmZXR5SW5mb3x1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnNhZmV0eUluZm87XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGV4dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy50ZXh0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBMYW5ndWFnZURldGVjdGlvblJlc3VsdFNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHR8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5yZXN1bHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRleHRTYWZldHlTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eVNlc3Npb25fQ2xvbmVfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2Vzc2lvbicsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbl9DbG9uZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMuc2Vzc2lvbjtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGV4dFNhZmV0eU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgJ1RleHRTYWZldHlNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2Vzc2lvbicsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5TW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zZXNzaW9uO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtc1NwZWMuJCxcbiAgICAnRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnB1dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLmlucHV0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncmVzdWx0cycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkoRGVjaXNpb25RdWVzdGlvblJlc3VsdFNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgKEFycmF5PCFEZWNpc2lvblF1ZXN0aW9uUmVzdWx0Pnx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnJlc3VsdHM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERlY2lzaW9uTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAnRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncXVlcnknLCAwLFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvblF1ZXJ5U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2Vzc2lvbicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXIpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIURlY2lzaW9uUXVlcnkgfSAqL1xuICAgIHRoaXMucXVlcnk7XG4gICAgLyoqIEB0eXBlIHsgIURlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zZXNzaW9uO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBc3JTdHJlYW1SZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXNTcGVjLiQsXG4gICAgJ0FzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3VsdCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkoU3BlZWNoUmVjb2duaXRpb25SZXN1bHRTcGVjLiQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhU3BlZWNoUmVjb2duaXRpb25SZXN1bHQ+IH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQXNyU3RyZWFtSW5wdXRfQWRkQXVkaW9DaHVua19QYXJhbXNTcGVjLiQsXG4gICAgJ0FzclN0cmVhbUlucHV0X0FkZEF1ZGlvQ2h1bmtfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZGF0YScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIEF1ZGlvRGF0YVNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbUlucHV0X0FkZEF1ZGlvQ2h1bmtfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUF1ZGlvRGF0YSB9ICovXG4gICAgdGhpcy5kYXRhO1xuICB9XG59XG5cbm1vam8uaW50ZXJuYWwuVW5pb24oXG4gICAgSW5wdXRQaWVjZVNwZWMuJCwgJ0lucHV0UGllY2UnLFxuICAgIHtcbiAgICAgICd0b2tlbic6IHtcbiAgICAgICAgJ29yZGluYWwnOiAwLFxuICAgICAgICAndHlwZSc6IFRva2VuU3BlYy4kLFxuICAgICAgfSxcbiAgICAgICd0ZXh0Jzoge1xuICAgICAgICAnb3JkaW5hbCc6IDEsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICB9LFxuICAgICAgJ2JpdG1hcCc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAyLFxuICAgICAgICAndHlwZSc6IHNraWFfbW9qb21fQml0bWFwV2l0aEFyYml0cmFyeUJwcFNwZWMuJCxcbiAgICAgIH0sXG4gICAgICAndW5rbm93blR5cGUnOiB7XG4gICAgICAgICdvcmRpbmFsJzogMyxcbiAgICAgICAgJ3R5cGUnOiBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICB9LFxuICAgICAgJ2F1ZGlvJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDQsXG4gICAgICAgICd0eXBlJzogQXVkaW9EYXRhU3BlYy4kLFxuICAgICAgfSxcbiAgICAgICd0b29sRGVjbGFyYXRpb24nOiB7XG4gICAgICAgICdvcmRpbmFsJzogNSxcbiAgICAgICAgJ3R5cGUnOiBUb29sRGVjbGFyYXRpb25TcGVjLiQsXG4gICAgICB9LFxuICAgICAgJ3Rvb2xSZXNwb25zZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA2LFxuICAgICAgICAndHlwZSc6IFRvb2xSZXNwb25zZVNwZWMuJCxcbiAgICAgIH0sXG4gICAgICAndG9vbENhbGwnOiB7XG4gICAgICAgICdvcmRpbmFsJzogNyxcbiAgICAgICAgJ3R5cGUnOiBUb29sQ2FsbFNwZWMuJCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbi8qKlxuICogQHR5cGVkZWYgeyB7XG4gKiAgIHRva2VuOiAoIVRva2VufHVuZGVmaW5lZCksXG4gKiAgIHRleHQ6ICghc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIGJpdG1hcDogKCFza2lhX21vam9tX0JpdG1hcFdpdGhBcmJpdHJhcnlCcHB8dW5kZWZpbmVkKSxcbiAqICAgdW5rbm93blR5cGU6ICghYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBhdWRpbzogKCFBdWRpb0RhdGF8dW5kZWZpbmVkKSxcbiAqICAgdG9vbERlY2xhcmF0aW9uOiAoIVRvb2xEZWNsYXJhdGlvbnx1bmRlZmluZWQpLFxuICogICB0b29sUmVzcG9uc2U6ICghVG9vbFJlc3BvbnNlfHVuZGVmaW5lZCksXG4gKiAgIHRvb2xDYWxsOiAoIVRvb2xDYWxsfHVuZGVmaW5lZCksXG4gKiB9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0UGllY2UgPSB7fTtcbm1vam8uaW50ZXJuYWwuVW5pb24oXG4gICAgUmVzcG9uc2VDb25zdHJhaW50U3BlYy4kLCAnUmVzcG9uc2VDb25zdHJhaW50JyxcbiAgICB7XG4gICAgICAnanNvblNjaGVtYSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAwLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgfSxcbiAgICAgICdyZWdleCc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAxLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgfSxcbiAgICAgICd1bmtub3duVHlwZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAyLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbi8qKlxuICogQHR5cGVkZWYgeyB7XG4gKiAgIGpzb25TY2hlbWE6ICghc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIHJlZ2V4OiAoIXN0cmluZ3x1bmRlZmluZWQpLFxuICogICB1bmtub3duVHlwZTogKCFib29sZWFufHVuZGVmaW5lZCksXG4gKiB9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IFJlc3BvbnNlQ29uc3RyYWludCA9IHt9O1xuIiwiLy8gYnJhdmUvY29tcG9uZW50cy9sb2NhbF9haS9jb3JlL29uX2RldmljZV9zcGVlY2hfcmVjb2duaXRpb24ubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL2pzL2JpbmRpbmdzLmpzJztcblxuaW1wb3J0IHtcbiAgQmlnQnVmZmVyIGFzIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlcixcbiAgQmlnQnVmZmVyU3BlYyBhcyBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjXG59IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL21vam9tL2Jhc2UvYmlnX2J1ZmZlci5tb2pvbS5tLmpzJztcblxuaW1wb3J0IHtcbiAgQXNyU3RyZWFtSW5wdXRSZW1vdGUgYXMgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFJlbW90ZSxcbiAgQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgYXMgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlcixcbiAgQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIGFzIG9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlLFxuICBBc3JTdHJlYW1SZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXIgYXMgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXIsXG4gIEFzclN0cmVhbU9wdGlvbnMgYXMgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zLFxuICBBc3JTdHJlYW1PcHRpb25zU3BlYyBhcyBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnNTcGVjXG59IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL29uX2RldmljZV9tb2RlbC9wdWJsaWMvbW9qb20vb25fZGV2aWNlX21vZGVsLm1vam9tLm0uanMnO1xuXG5cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnbG9jYWxfYWkubW9qb20uU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5Jywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhT3J0TW9kZWxGaWxlcyB9IGZpbGVzXG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc3VjY2VzczogIWJvb2xlYW4sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgaW5pdChmaWxlcykge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9IHN0cmVhbVxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgY3JlYXRlQXNyU3RyZWFtKG9wdGlvbnMsIHN0cmVhbSwgcmVzcG9uZGVyKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFPcnRNb2RlbEZpbGVzIH0gZmlsZXNcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzdWNjZXNzOiAhYm9vbGVhbixcbiAgICogIH0+fVxuICAgKi9cblxuICBpbml0KFxuICAgICAgZmlsZXMpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIGZpbGVzXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtT3B0aW9ucyB9IG9wdGlvbnNcbiAgICogQHBhcmFtIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgfSBzdHJlYW1cbiAgICogQHBhcmFtIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIH0gcmVzcG9uZGVyXG4gICAqL1xuXG4gIGNyZWF0ZUFzclN0cmVhbShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzdHJlYW0sXG4gICAgICByZXNwb25kZXIpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfQ3JlYXRlQXNyU3RyZWFtX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgc3RyZWFtLFxuICAgICAgICAgIHJlc3BvbmRlclxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmluaXQuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9DcmVhdGVBc3JTdHJlYW1fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmNyZWF0ZUFzclN0cmVhbS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3Rvcnkge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwibG9jYWxfYWkubW9qb20uU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5XCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmluaXQgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5pbml0LmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5jcmVhdGVBc3JTdHJlYW0gPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMSxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0NyZWF0ZUFzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuY3JlYXRlQXNyU3RyZWFtLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ2xvY2FsX2FpLm1vam9tLlNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3QnLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0SW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlIH0gZmFjdG9yeVxuICAgKi9cblxuICByZWdpc3RlckZhY3RvcnkoZmFjdG9yeSkge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RJbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGUgfSBmYWN0b3J5XG4gICAqL1xuXG4gIHJlZ2lzdGVyRmFjdG9yeShcbiAgICAgIGZhY3RvcnkpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0X1JlZ2lzdGVyRmFjdG9yeV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBmYWN0b3J5XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RfUmVnaXN0ZXJGYWN0b3J5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5yZWdpc3RlckZhY3RvcnkuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdCB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJsb2NhbF9haS5tb2pvbS5TcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0XCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZ2lzdGVyRmFjdG9yeSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0X1JlZ2lzdGVyRmFjdG9yeV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMucmVnaXN0ZXJGYWN0b3J5LmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ2xvY2FsX2FpLm1vam9tLkFzclNlc3Npb24nLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBBc3JTZXNzaW9uSW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9IHN0cmVhbVxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgc3RhcnQob3B0aW9ucywgc3RyZWFtLCByZXNwb25kZXIpIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBBc3JTZXNzaW9uSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclNlc3Npb25SZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFBc3JTZXNzaW9uUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIEFzclNlc3Npb25QZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IUFzclNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9IHN0cmVhbVxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgc3RhcnQoXG4gICAgICBvcHRpb25zLFxuICAgICAgc3RyZWFtLFxuICAgICAgcmVzcG9uZGVyKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHN0cmVhbSxcbiAgICAgICAgICByZXNwb25kZXJcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBBc3JTZXNzaW9uXG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTZXNzaW9uUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshQXNyU2Vzc2lvbkludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhQXNyU2Vzc2lvblJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBBc3JTZXNzaW9uUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IUFzclNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuc3RhcnQuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXNyU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJsb2NhbF9haS5tb2pvbS5Bc3JTZXNzaW9uXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IUFzclNlc3Npb25SZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgQXNyU2Vzc2lvblJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclNlc3Npb25cbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclNlc3Npb25DYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIEFzclNlc3Npb25SZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQXNyU2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIEFzclNlc3Npb25fU3RhcnRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnN0YXJ0LmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT3J0TW9kZWxGaWxlc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0NyZWF0ZUFzclN0cmVhbV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RfUmVnaXN0ZXJGYWN0b3J5X1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9ydE1vZGVsRmlsZXNTcGVjLiQsXG4gICAgJ09ydE1vZGVsRmlsZXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdlbmNvZGVyJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZW5jb2RlckRhdGEnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZGVjb2RlcicsIDMyLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkZWNvZGVyRGF0YScsIDQ4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0b2tlbnMnLCA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbWVsRmlsdGVycycsIDgwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTA0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT3J0TW9kZWxGaWxlcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMuZW5jb2RlcjtcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyIH0gKi9cbiAgICB0aGlzLmVuY29kZXJEYXRhO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMuZGVjb2RlcjtcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyIH0gKi9cbiAgICB0aGlzLmRlY29kZXJEYXRhO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMudG9rZW5zO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMubWVsRmlsdGVycztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUGFyYW1zU3BlYy4kLFxuICAgICdTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdmaWxlcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIE9ydE1vZGVsRmlsZXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhT3J0TW9kZWxGaWxlcyB9ICovXG4gICAgdGhpcy5maWxlcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ1NwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3VjY2VzcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLnN1Y2Nlc3M7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9DcmVhdGVBc3JTdHJlYW1fUGFyYW1zU3BlYy4kLFxuICAgICdTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfQ3JlYXRlQXNyU3RyZWFtX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzdHJlYW0nLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVJlcXVlc3Qob25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXNwb25kZXInLCAxMixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eShvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfQ3JlYXRlQXNyU3RyZWFtX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMgfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgICAvKiogQHR5cGUgeyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zdHJlYW07XG4gICAgLyoqIEB0eXBlIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIH0gKi9cbiAgICB0aGlzLnJlc3BvbmRlcjtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdF9SZWdpc3RlckZhY3RvcnlfUGFyYW1zU3BlYy4kLFxuICAgICdTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0X1JlZ2lzdGVyRmFjdG9yeV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdmYWN0b3J5JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eShTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGUpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdF9SZWdpc3RlckZhY3RvcnlfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZSB9ICovXG4gICAgdGhpcy5mYWN0b3J5O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtc1NwZWMuJCxcbiAgICAnQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdvcHRpb25zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3RyZWFtJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KG9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncmVzcG9uZGVyJywgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUHJveHkob25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zIH0gKi9cbiAgICB0aGlzLm9wdGlvbnM7XG4gICAgLyoqIEB0eXBlIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMuc3RyZWFtO1xuICAgIC8qKiBAdHlwZSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9ICovXG4gICAgdGhpcy5yZXNwb25kZXI7XG4gIH1cbn1cblxuIiwiLyohXG4gKiBPTk5YIFJ1bnRpbWUgV2ViIHYxLjI2LjBcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG52YXIgSnQ9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBYYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBRYT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgWmE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgcXQ9KG49PnR5cGVvZiByZXF1aXJlPFwidVwiP3JlcXVpcmU6dHlwZW9mIFByb3h5PFwidVwiP25ldyBQcm94eShuLHtnZXQ6KHQsYSk9Pih0eXBlb2YgcmVxdWlyZTxcInVcIj9yZXF1aXJlOnQpW2FdfSk6bikoZnVuY3Rpb24obil7aWYodHlwZW9mIHJlcXVpcmU8XCJ1XCIpcmV0dXJuIHJlcXVpcmUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3Rocm93IEVycm9yKCdEeW5hbWljIHJlcXVpcmUgb2YgXCInK24rJ1wiIGlzIG5vdCBzdXBwb3J0ZWQnKX0pO3ZhciBOPShuLHQpPT4oKT0+KG4mJih0PW4obj0wKSksdCk7dmFyIHV0PShuLHQpPT57Zm9yKHZhciBhIGluIHQpSnQobixhLHtnZXQ6dFthXSxlbnVtZXJhYmxlOiEwfSl9LEthPShuLHQsYSx1KT0+e2lmKHQmJnR5cGVvZiB0PT1cIm9iamVjdFwifHx0eXBlb2YgdD09XCJmdW5jdGlvblwiKWZvcihsZXQgbyBvZiBRYSh0KSkhWmEuY2FsbChuLG8pJiZvIT09YSYmSnQobixvLHtnZXQ6KCk9PnRbb10sZW51bWVyYWJsZTohKHU9WGEodCxvKSl8fHUuZW51bWVyYWJsZX0pO3JldHVybiBufTt2YXIgWHQ9bj0+S2EoSnQoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksbik7dmFyIGZ0LEJlLHFlLGVzLGRyLFF0PU4oKCk9PntcInVzZSBzdHJpY3RcIjtmdD1uZXcgTWFwLEJlPVtdLHFlPShuLHQsYSk9PntpZih0JiZ0eXBlb2YgdC5pbml0PT1cImZ1bmN0aW9uXCImJnR5cGVvZiB0LmNyZWF0ZUluZmVyZW5jZVNlc3Npb25IYW5kbGVyPT1cImZ1bmN0aW9uXCIpe2xldCB1PWZ0LmdldChuKTtpZih1PT09dm9pZCAwKWZ0LnNldChuLHtiYWNrZW5kOnQscHJpb3JpdHk6YX0pO2Vsc2V7aWYodS5wcmlvcml0eT5hKXJldHVybjtpZih1LnByaW9yaXR5PT09YSYmdS5iYWNrZW5kIT09dCl0aHJvdyBuZXcgRXJyb3IoYGNhbm5vdCByZWdpc3RlciBiYWNrZW5kIFwiJHtufVwiIHVzaW5nIHByaW9yaXR5ICR7YX1gKX1pZihhPj0wKXtsZXQgbz1CZS5pbmRleE9mKG4pO28hPT0tMSYmQmUuc3BsaWNlKG8sMSk7Zm9yKGxldCBkPTA7ZDxCZS5sZW5ndGg7ZCsrKWlmKGZ0LmdldChCZVtkXSkucHJpb3JpdHk8PWEpe0JlLnNwbGljZShkLDAsbik7cmV0dXJufUJlLnB1c2gobil9cmV0dXJufXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSB2YWxpZCBiYWNrZW5kXCIpfSxlcz1hc3luYyBuPT57bGV0IHQ9ZnQuZ2V0KG4pO2lmKCF0KXJldHVyblwiYmFja2VuZCBub3QgZm91bmQuXCI7aWYodC5pbml0aWFsaXplZClyZXR1cm4gdC5iYWNrZW5kO2lmKHQuYWJvcnRlZClyZXR1cm4gdC5lcnJvcjt7bGV0IGE9ISF0LmluaXRQcm9taXNlO3RyeXtyZXR1cm4gYXx8KHQuaW5pdFByb21pc2U9dC5iYWNrZW5kLmluaXQobikpLGF3YWl0IHQuaW5pdFByb21pc2UsdC5pbml0aWFsaXplZD0hMCx0LmJhY2tlbmR9Y2F0Y2godSl7cmV0dXJuIGF8fCh0LmVycm9yPWAke3V9YCx0LmFib3J0ZWQ9ITApLHQuZXJyb3J9ZmluYWxseXtkZWxldGUgdC5pbml0UHJvbWlzZX19fSxkcj1hc3luYyBuPT57bGV0IHQ9bi5leGVjdXRpb25Qcm92aWRlcnN8fFtdLGE9dC5tYXAobT0+dHlwZW9mIG09PVwic3RyaW5nXCI/bTptLm5hbWUpLHU9YS5sZW5ndGg9PT0wP0JlOmEsbyxkPVtdLGM9bmV3IFNldDtmb3IobGV0IG0gb2YgdSl7bGV0IGg9YXdhaXQgZXMobSk7dHlwZW9mIGg9PVwic3RyaW5nXCI/ZC5wdXNoKHtuYW1lOm0sZXJyOmh9KToob3x8KG89aCksbz09PWgmJmMuYWRkKG0pKX1pZighbyl0aHJvdyBuZXcgRXJyb3IoYG5vIGF2YWlsYWJsZSBiYWNrZW5kIGZvdW5kLiBFUlI6ICR7ZC5tYXAobT0+YFske20ubmFtZX1dICR7bS5lcnJ9YCkuam9pbihcIiwgXCIpfWApO2ZvcihsZXR7bmFtZTptLGVycjpofW9mIGQpYS5pbmNsdWRlcyhtKSYmY29uc29sZS53YXJuKGByZW1vdmluZyByZXF1ZXN0ZWQgZXhlY3V0aW9uIHByb3ZpZGVyIFwiJHttfVwiIGZyb20gc2Vzc2lvbiBvcHRpb25zIGJlY2F1c2UgaXQgaXMgbm90IGF2YWlsYWJsZTogJHtofWApO2xldCBsPXQuZmlsdGVyKG09PmMuaGFzKHR5cGVvZiBtPT1cInN0cmluZ1wiP206bS5uYW1lKSk7cmV0dXJuW28sbmV3IFByb3h5KG4se2dldDoobSxoKT0+aD09PVwiZXhlY3V0aW9uUHJvdmlkZXJzXCI/bDpSZWZsZWN0LmdldChtLGgpfSldfX0pO3ZhciBwcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7UXQoKX0pO3ZhciBtcixocj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7bXI9XCIxLjI2LjBcIn0pO3ZhciB3cixKLFp0PU4oKCk9PntcInVzZSBzdHJpY3RcIjtocigpO3dyPVwid2FybmluZ1wiLEo9e3dhc206e30sd2ViZ2w6e30sd2ViZ3B1Ont9LHZlcnNpb25zOntjb21tb246bXJ9LHNldCBsb2dMZXZlbChuKXtpZihuIT09dm9pZCAwKXtpZih0eXBlb2YgbiE9XCJzdHJpbmdcInx8W1widmVyYm9zZVwiLFwiaW5mb1wiLFwid2FybmluZ1wiLFwiZXJyb3JcIixcImZhdGFsXCJdLmluZGV4T2Yobik9PT0tMSl0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGxvZ2dpbmcgbGV2ZWw6ICR7bn1gKTt3cj1ufX0sZ2V0IGxvZ0xldmVsKCl7cmV0dXJuIHdyfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KEosXCJsb2dMZXZlbFwiLHtlbnVtZXJhYmxlOiEwfSl9KTt2YXIgWSxicj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7WnQoKTtZPUp9KTt2YXIgeXIsZ3IsRXI9TigoKT0+e1widXNlIHN0cmljdFwiO3lyPShuLHQpPT57bGV0IGE9dHlwZW9mIGRvY3VtZW50PFwidVwiP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik6bmV3IE9mZnNjcmVlbkNhbnZhcygxLDEpO2Eud2lkdGg9bi5kaW1zWzNdLGEuaGVpZ2h0PW4uZGltc1syXTtsZXQgdT1hLmdldENvbnRleHQoXCIyZFwiKTtpZih1IT1udWxsKXtsZXQgbyxkO3Q/LnRlbnNvckxheW91dCE9PXZvaWQgMCYmdC50ZW5zb3JMYXlvdXQ9PT1cIk5IV0NcIj8obz1uLmRpbXNbMl0sZD1uLmRpbXNbM10pOihvPW4uZGltc1szXSxkPW4uZGltc1syXSk7bGV0IGM9dD8uZm9ybWF0IT09dm9pZCAwP3QuZm9ybWF0OlwiUkdCXCIsbD10Py5ub3JtLG0saDtsPT09dm9pZCAwfHxsLm1lYW49PT12b2lkIDA/bT1bMjU1LDI1NSwyNTUsMjU1XTp0eXBlb2YgbC5tZWFuPT1cIm51bWJlclwiP209W2wubWVhbixsLm1lYW4sbC5tZWFuLGwubWVhbl06KG09W2wubWVhblswXSxsLm1lYW5bMV0sbC5tZWFuWzJdLDBdLGwubWVhblszXSE9PXZvaWQgMCYmKG1bM109bC5tZWFuWzNdKSksbD09PXZvaWQgMHx8bC5iaWFzPT09dm9pZCAwP2g9WzAsMCwwLDBdOnR5cGVvZiBsLmJpYXM9PVwibnVtYmVyXCI/aD1bbC5iaWFzLGwuYmlhcyxsLmJpYXMsbC5iaWFzXTooaD1bbC5iaWFzWzBdLGwuYmlhc1sxXSxsLmJpYXNbMl0sMF0sbC5iaWFzWzNdIT09dm9pZCAwJiYoaFszXT1sLmJpYXNbM10pKTtsZXQgZz1kKm8sYj0wLHk9ZyxUPWcqMixJPS0xO2M9PT1cIlJHQkFcIj8oYj0wLHk9ZyxUPWcqMixJPWcqMyk6Yz09PVwiUkdCXCI/KGI9MCx5PWcsVD1nKjIpOmM9PT1cIlJCR1wiJiYoYj0wLFQ9Zyx5PWcqMik7Zm9yKGxldCBEPTA7RDxkO0QrKylmb3IobGV0IHo9MDt6PG87eisrKXtsZXQgdj0obi5kYXRhW2IrK10taFswXSkqbVswXSxPPShuLmRhdGFbeSsrXS1oWzFdKSptWzFdLEY9KG4uZGF0YVtUKytdLWhbMl0pKm1bMl0sXz1JPT09LTE/MjU1OihuLmRhdGFbSSsrXS1oWzNdKSptWzNdO3UuZmlsbFN0eWxlPVwicmdiYShcIit2K1wiLFwiK08rXCIsXCIrRitcIixcIitfK1wiKVwiLHUuZmlsbFJlY3QoeixELDEsMSl9aWYoXCJ0b0RhdGFVUkxcImluIGEpcmV0dXJuIGEudG9EYXRhVVJMKCk7dGhyb3cgbmV3IEVycm9yKFwidG9EYXRhVVJMIGlzIG5vdCBzdXBwb3J0ZWRcIil9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGFjY2VzcyBpbWFnZSBkYXRhXCIpfSxncj0obix0KT0+e2xldCBhPXR5cGVvZiBkb2N1bWVudDxcInVcIj9kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLmdldENvbnRleHQoXCIyZFwiKTpuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsMSkuZ2V0Q29udGV4dChcIjJkXCIpLHU7aWYoYSE9bnVsbCl7bGV0IG8sZCxjO3Q/LnRlbnNvckxheW91dCE9PXZvaWQgMCYmdC50ZW5zb3JMYXlvdXQ9PT1cIk5IV0NcIj8obz1uLmRpbXNbMl0sZD1uLmRpbXNbMV0sYz1uLmRpbXNbM10pOihvPW4uZGltc1szXSxkPW4uZGltc1syXSxjPW4uZGltc1sxXSk7bGV0IGw9dCE9PXZvaWQgMCYmdC5mb3JtYXQhPT12b2lkIDA/dC5mb3JtYXQ6XCJSR0JcIixtPXQ/Lm5vcm0saCxnO209PT12b2lkIDB8fG0ubWVhbj09PXZvaWQgMD9oPVsyNTUsMjU1LDI1NSwyNTVdOnR5cGVvZiBtLm1lYW49PVwibnVtYmVyXCI/aD1bbS5tZWFuLG0ubWVhbixtLm1lYW4sbS5tZWFuXTooaD1bbS5tZWFuWzBdLG0ubWVhblsxXSxtLm1lYW5bMl0sMjU1XSxtLm1lYW5bM10hPT12b2lkIDAmJihoWzNdPW0ubWVhblszXSkpLG09PT12b2lkIDB8fG0uYmlhcz09PXZvaWQgMD9nPVswLDAsMCwwXTp0eXBlb2YgbS5iaWFzPT1cIm51bWJlclwiP2c9W20uYmlhcyxtLmJpYXMsbS5iaWFzLG0uYmlhc106KGc9W20uYmlhc1swXSxtLmJpYXNbMV0sbS5iaWFzWzJdLDBdLG0uYmlhc1szXSE9PXZvaWQgMCYmKGdbM109bS5iaWFzWzNdKSk7bGV0IGI9ZCpvO2lmKHQhPT12b2lkIDAmJih0LmZvcm1hdCE9PXZvaWQgMCYmYz09PTQmJnQuZm9ybWF0IT09XCJSR0JBXCJ8fGM9PT0zJiZ0LmZvcm1hdCE9PVwiUkdCXCImJnQuZm9ybWF0IT09XCJCR1JcIikpdGhyb3cgbmV3IEVycm9yKFwiVGVuc29yIGZvcm1hdCBkb2Vzbid0IG1hdGNoIGlucHV0IHRlbnNvciBkaW1zXCIpO2xldCB5PTQsVD0wLEk9MSxEPTIsej0zLHY9MCxPPWIsRj1iKjIsXz0tMTtsPT09XCJSR0JBXCI/KHY9MCxPPWIsRj1iKjIsXz1iKjMpOmw9PT1cIlJHQlwiPyh2PTAsTz1iLEY9YioyKTpsPT09XCJSQkdcIiYmKHY9MCxGPWIsTz1iKjIpLHU9YS5jcmVhdGVJbWFnZURhdGEobyxkKTtmb3IobGV0IGs9MDtrPGQqbztUKz15LEkrPXksRCs9eSx6Kz15LGsrKyl1LmRhdGFbVF09KG4uZGF0YVt2KytdLWdbMF0pKmhbMF0sdS5kYXRhW0ldPShuLmRhdGFbTysrXS1nWzFdKSpoWzFdLHUuZGF0YVtEXT0obi5kYXRhW0YrK10tZ1syXSkqaFsyXSx1LmRhdGFbel09Xz09PS0xPzI1NToobi5kYXRhW18rK10tZ1szXSkqaFszXX1lbHNlIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgYWNjZXNzIGltYWdlIGRhdGFcIik7cmV0dXJuIHV9fSk7dmFyIEt0LFRyLFNyLHZyLE9yLEFyLElyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtjdCgpO0t0PShuLHQpPT57aWYobj09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBidWZmZXIgbXVzdCBiZSBkZWZpbmVkXCIpO2lmKHQuaGVpZ2h0PT09dm9pZCAwfHx0LndpZHRoPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkltYWdlIGhlaWdodCBhbmQgd2lkdGggbXVzdCBiZSBkZWZpbmVkXCIpO2lmKHQudGVuc29yTGF5b3V0PT09XCJOSFdDXCIpdGhyb3cgbmV3IEVycm9yKFwiTkhXQyBUZW5zb3IgbGF5b3V0IGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO2xldHtoZWlnaHQ6YSx3aWR0aDp1fT10LG89dC5ub3JtPz97bWVhbjoyNTUsYmlhczowfSxkLGM7dHlwZW9mIG8ubWVhbj09XCJudW1iZXJcIj9kPVtvLm1lYW4sby5tZWFuLG8ubWVhbixvLm1lYW5dOmQ9W28ubWVhblswXSxvLm1lYW5bMV0sby5tZWFuWzJdLG8ubWVhblszXT8/MjU1XSx0eXBlb2Ygby5iaWFzPT1cIm51bWJlclwiP2M9W28uYmlhcyxvLmJpYXMsby5iaWFzLG8uYmlhc106Yz1bby5iaWFzWzBdLG8uYmlhc1sxXSxvLmJpYXNbMl0sby5iaWFzWzNdPz8wXTtsZXQgbD10LmZvcm1hdCE9PXZvaWQgMD90LmZvcm1hdDpcIlJHQkFcIixtPXQudGVuc29yRm9ybWF0IT09dm9pZCAwJiZ0LnRlbnNvckZvcm1hdCE9PXZvaWQgMD90LnRlbnNvckZvcm1hdDpcIlJHQlwiLGg9YSp1LGc9bT09PVwiUkdCQVwiP25ldyBGbG9hdDMyQXJyYXkoaCo0KTpuZXcgRmxvYXQzMkFycmF5KGgqMyksYj00LHk9MCxUPTEsST0yLEQ9Myx6PTAsdj1oLE89aCoyLEY9LTE7bD09PVwiUkdCXCImJihiPTMseT0wLFQ9MSxJPTIsRD0tMSksbT09PVwiUkdCQVwiP0Y9aCozOm09PT1cIlJCR1wiPyh6PTAsTz1oLHY9aCoyKTptPT09XCJCR1JcIiYmKE89MCx2PWgsej1oKjIpO2ZvcihsZXQgaz0wO2s8aDtrKysseSs9YixJKz1iLFQrPWIsRCs9YilnW3orK109KG5beV0rY1swXSkvZFswXSxnW3YrK109KG5bVF0rY1sxXSkvZFsxXSxnW08rK109KG5bSV0rY1syXSkvZFsyXSxGIT09LTEmJkQhPT0tMSYmKGdbRisrXT0obltEXStjWzNdKS9kWzNdKTtyZXR1cm4gbT09PVwiUkdCQVwiP25ldyBRKFwiZmxvYXQzMlwiLGcsWzEsNCxhLHVdKTpuZXcgUShcImZsb2F0MzJcIixnLFsxLDMsYSx1XSl9LFRyPWFzeW5jKG4sdCk9PntsZXQgYT10eXBlb2YgSFRNTEltYWdlRWxlbWVudDxcInVcIiYmbiBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQsdT10eXBlb2YgSW1hZ2VEYXRhPFwidVwiJiZuIGluc3RhbmNlb2YgSW1hZ2VEYXRhLG89dHlwZW9mIEltYWdlQml0bWFwPFwidVwiJiZuIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXAsZD10eXBlb2Ygbj09XCJzdHJpbmdcIixjLGw9dD8/e30sbT0oKT0+e2lmKHR5cGVvZiBkb2N1bWVudDxcInVcIilyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZih0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzPFwidVwiKXJldHVybiBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsMSk7dGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGg9Zz0+dHlwZW9mIEhUTUxDYW52YXNFbGVtZW50PFwidVwiJiZnIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnR8fGcgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXM/Zy5nZXRDb250ZXh0KFwiMmRcIik6bnVsbDtpZihhKXtsZXQgZz1tKCk7Zy53aWR0aD1uLndpZHRoLGcuaGVpZ2h0PW4uaGVpZ2h0O2xldCBiPWgoZyk7aWYoYiE9bnVsbCl7bGV0IHk9bi5oZWlnaHQsVD1uLndpZHRoO2lmKHQhPT12b2lkIDAmJnQucmVzaXplZEhlaWdodCE9PXZvaWQgMCYmdC5yZXNpemVkV2lkdGghPT12b2lkIDAmJih5PXQucmVzaXplZEhlaWdodCxUPXQucmVzaXplZFdpZHRoKSx0IT09dm9pZCAwKXtpZihsPXQsdC50ZW5zb3JGb3JtYXQhPT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgaW5wdXQgY29uZmlnIGZvcm1hdCBtdXN0IGJlIFJHQkEgZm9yIEhUTUxJbWFnZUVsZW1lbnRcIik7bC50ZW5zb3JGb3JtYXQ9XCJSR0JBXCIsbC5oZWlnaHQ9eSxsLndpZHRoPVR9ZWxzZSBsLnRlbnNvckZvcm1hdD1cIlJHQkFcIixsLmhlaWdodD15LGwud2lkdGg9VDtiLmRyYXdJbWFnZShuLDAsMCksYz1iLmdldEltYWdlRGF0YSgwLDAsVCx5KS5kYXRhfWVsc2UgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBhY2Nlc3MgaW1hZ2UgZGF0YVwiKX1lbHNlIGlmKHUpe2xldCBnLGI7aWYodCE9PXZvaWQgMCYmdC5yZXNpemVkV2lkdGghPT12b2lkIDAmJnQucmVzaXplZEhlaWdodCE9PXZvaWQgMD8oZz10LnJlc2l6ZWRIZWlnaHQsYj10LnJlc2l6ZWRXaWR0aCk6KGc9bi5oZWlnaHQsYj1uLndpZHRoKSx0IT09dm9pZCAwJiYobD10KSxsLmZvcm1hdD1cIlJHQkFcIixsLmhlaWdodD1nLGwud2lkdGg9Yix0IT09dm9pZCAwKXtsZXQgeT1tKCk7eS53aWR0aD1iLHkuaGVpZ2h0PWc7bGV0IFQ9aCh5KTtpZihUIT1udWxsKVQucHV0SW1hZ2VEYXRhKG4sMCwwKSxjPVQuZ2V0SW1hZ2VEYXRhKDAsMCxiLGcpLmRhdGE7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGFjY2VzcyBpbWFnZSBkYXRhXCIpfWVsc2UgYz1uLmRhdGF9ZWxzZSBpZihvKXtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGltYWdlIGNvbmZpZyB3aXRoIGZvcm1hdCBmb3IgSW1hZ2ViaXRtYXBcIik7bGV0IGc9bSgpO2cud2lkdGg9bi53aWR0aCxnLmhlaWdodD1uLmhlaWdodDtsZXQgYj1oKGcpO2lmKGIhPW51bGwpe2xldCB5PW4uaGVpZ2h0LFQ9bi53aWR0aDtyZXR1cm4gYi5kcmF3SW1hZ2UobiwwLDAsVCx5KSxjPWIuZ2V0SW1hZ2VEYXRhKDAsMCxULHkpLmRhdGEsbC5oZWlnaHQ9eSxsLndpZHRoPVQsS3QoYyxsKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgYWNjZXNzIGltYWdlIGRhdGFcIil9ZWxzZXtpZihkKXJldHVybiBuZXcgUHJvbWlzZSgoZyxiKT0+e2xldCB5PW0oKSxUPWgoeSk7aWYoIW58fCFUKXJldHVybiBiKCk7bGV0IEk9bmV3IEltYWdlO0kuY3Jvc3NPcmlnaW49XCJBbm9ueW1vdXNcIixJLnNyYz1uLEkub25sb2FkPSgpPT57eS53aWR0aD1JLndpZHRoLHkuaGVpZ2h0PUkuaGVpZ2h0LFQuZHJhd0ltYWdlKEksMCwwLHkud2lkdGgseS5oZWlnaHQpO2xldCBEPVQuZ2V0SW1hZ2VEYXRhKDAsMCx5LndpZHRoLHkuaGVpZ2h0KTtsLmhlaWdodD15LmhlaWdodCxsLndpZHRoPXkud2lkdGgsZyhLdChELmRhdGEsbCkpfX0pO3Rocm93IG5ldyBFcnJvcihcIklucHV0IGRhdGEgcHJvdmlkZWQgaXMgbm90IHN1cHBvcnRlZCAtIGFib3J0ZWQgdGVuc29yIGNyZWF0aW9uXCIpfWlmKGMhPT12b2lkIDApcmV0dXJuIEt0KGMsbCk7dGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgZGF0YSBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkIC0gYWJvcnRlZCB0ZW5zb3IgY3JlYXRpb25cIil9LFNyPShuLHQpPT57bGV0e3dpZHRoOmEsaGVpZ2h0OnUsZG93bmxvYWQ6byxkaXNwb3NlOmR9PXQsYz1bMSx1LGEsNF07cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcInRleHR1cmVcIix0eXBlOlwiZmxvYXQzMlwiLHRleHR1cmU6bixkaW1zOmMsZG93bmxvYWQ6byxkaXNwb3NlOmR9KX0sdnI9KG4sdCk9PntsZXR7ZGF0YVR5cGU6YSxkaW1zOnUsZG93bmxvYWQ6byxkaXNwb3NlOmR9PXQ7cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcImdwdS1idWZmZXJcIix0eXBlOmE/P1wiZmxvYXQzMlwiLGdwdUJ1ZmZlcjpuLGRpbXM6dSxkb3dubG9hZDpvLGRpc3Bvc2U6ZH0pfSxPcj0obix0KT0+e2xldHtkYXRhVHlwZTphLGRpbXM6dSxkb3dubG9hZDpvLGRpc3Bvc2U6ZH09dDtyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwibWwtdGVuc29yXCIsdHlwZTphPz9cImZsb2F0MzJcIixtbFRlbnNvcjpuLGRpbXM6dSxkb3dubG9hZDpvLGRpc3Bvc2U6ZH0pfSxBcj0obix0LGEpPT5uZXcgUSh7bG9jYXRpb246XCJjcHUtcGlubmVkXCIsdHlwZTpuLGRhdGE6dCxkaW1zOmE/P1t0Lmxlbmd0aF19KX0pO3ZhciBMZSxYZSxCcixMcixfcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7TGU9bmV3IE1hcChbW1wiZmxvYXQzMlwiLEZsb2F0MzJBcnJheV0sW1widWludDhcIixVaW50OEFycmF5XSxbXCJpbnQ4XCIsSW50OEFycmF5XSxbXCJ1aW50MTZcIixVaW50MTZBcnJheV0sW1wiaW50MTZcIixJbnQxNkFycmF5XSxbXCJpbnQzMlwiLEludDMyQXJyYXldLFtcImJvb2xcIixVaW50OEFycmF5XSxbXCJmbG9hdDY0XCIsRmxvYXQ2NEFycmF5XSxbXCJ1aW50MzJcIixVaW50MzJBcnJheV0sW1wiaW50NFwiLFVpbnQ4QXJyYXldLFtcInVpbnQ0XCIsVWludDhBcnJheV1dKSxYZT1uZXcgTWFwKFtbRmxvYXQzMkFycmF5LFwiZmxvYXQzMlwiXSxbVWludDhBcnJheSxcInVpbnQ4XCJdLFtJbnQ4QXJyYXksXCJpbnQ4XCJdLFtVaW50MTZBcnJheSxcInVpbnQxNlwiXSxbSW50MTZBcnJheSxcImludDE2XCJdLFtJbnQzMkFycmF5LFwiaW50MzJcIl0sW0Zsb2F0NjRBcnJheSxcImZsb2F0NjRcIl0sW1VpbnQzMkFycmF5LFwidWludDMyXCJdXSksQnI9ITEsTHI9KCk9PntpZighQnIpe0JyPSEwO2xldCBuPXR5cGVvZiBCaWdJbnQ2NEFycmF5PFwidVwiJiZCaWdJbnQ2NEFycmF5LmZyb20sdD10eXBlb2YgQmlnVWludDY0QXJyYXk8XCJ1XCImJkJpZ1VpbnQ2NEFycmF5LmZyb20sYT1nbG9iYWxUaGlzLkZsb2F0MTZBcnJheSx1PXR5cGVvZiBhPFwidVwiJiZhLmZyb207biYmKExlLnNldChcImludDY0XCIsQmlnSW50NjRBcnJheSksWGUuc2V0KEJpZ0ludDY0QXJyYXksXCJpbnQ2NFwiKSksdCYmKExlLnNldChcInVpbnQ2NFwiLEJpZ1VpbnQ2NEFycmF5KSxYZS5zZXQoQmlnVWludDY0QXJyYXksXCJ1aW50NjRcIikpLHU/KExlLnNldChcImZsb2F0MTZcIixhKSxYZS5zZXQoYSxcImZsb2F0MTZcIikpOkxlLnNldChcImZsb2F0MTZcIixVaW50MTZBcnJheSl9fX0pO3ZhciBQcixEcixVcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7Y3QoKTtQcj1uPT57bGV0IHQ9MTtmb3IobGV0IGE9MDthPG4ubGVuZ3RoO2ErKyl7bGV0IHU9blthXTtpZih0eXBlb2YgdSE9XCJudW1iZXJcInx8IU51bWJlci5pc1NhZmVJbnRlZ2VyKHUpKXRocm93IG5ldyBUeXBlRXJyb3IoYGRpbXNbJHthfV0gbXVzdCBiZSBhbiBpbnRlZ2VyLCBnb3Q6ICR7dX1gKTtpZih1PDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoYGRpbXNbJHthfV0gbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyLCBnb3Q6ICR7dX1gKTt0Kj11fXJldHVybiB0fSxEcj0obix0KT0+e3N3aXRjaChuLmxvY2F0aW9uKXtjYXNlXCJjcHVcIjpyZXR1cm4gbmV3IFEobi50eXBlLG4uZGF0YSx0KTtjYXNlXCJjcHUtcGlubmVkXCI6cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcImNwdS1waW5uZWRcIixkYXRhOm4uZGF0YSx0eXBlOm4udHlwZSxkaW1zOnR9KTtjYXNlXCJ0ZXh0dXJlXCI6cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcInRleHR1cmVcIix0ZXh0dXJlOm4udGV4dHVyZSx0eXBlOm4udHlwZSxkaW1zOnR9KTtjYXNlXCJncHUtYnVmZmVyXCI6cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcImdwdS1idWZmZXJcIixncHVCdWZmZXI6bi5ncHVCdWZmZXIsdHlwZTpuLnR5cGUsZGltczp0fSk7Y2FzZVwibWwtdGVuc29yXCI6cmV0dXJuIG5ldyBRKHtsb2NhdGlvbjpcIm1sLXRlbnNvclwiLG1sVGVuc29yOm4ubWxUZW5zb3IsdHlwZTpuLnR5cGUsZGltczp0fSk7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHRlbnNvclJlc2hhcGU6IHRlbnNvciBsb2NhdGlvbiAke24ubG9jYXRpb259IGlzIG5vdCBzdXBwb3J0ZWRgKX19fSk7dmFyIFEsY3Q9TigoKT0+e1widXNlIHN0cmljdFwiO0VyKCk7SXIoKTtfcigpO1VyKCk7UT1jbGFzc3tjb25zdHJ1Y3Rvcih0LGEsdSl7THIoKTtsZXQgbyxkO2lmKHR5cGVvZiB0PT1cIm9iamVjdFwiJiZcImxvY2F0aW9uXCJpbiB0KXN3aXRjaCh0aGlzLmRhdGFMb2NhdGlvbj10LmxvY2F0aW9uLG89dC50eXBlLGQ9dC5kaW1zLHQubG9jYXRpb24pe2Nhc2VcImNwdS1waW5uZWRcIjp7bGV0IGw9TGUuZ2V0KG8pO2lmKCFsKXRocm93IG5ldyBUeXBlRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGUgXCIke299XCIgdG8gY3JlYXRlIHRlbnNvciBmcm9tIHBpbm5lZCBidWZmZXJgKTtpZighKHQuZGF0YSBpbnN0YW5jZW9mIGwpKXRocm93IG5ldyBUeXBlRXJyb3IoYGJ1ZmZlciBzaG91bGQgYmUgb2YgdHlwZSAke2wubmFtZX1gKTt0aGlzLmNwdURhdGE9dC5kYXRhO2JyZWFrfWNhc2VcInRleHR1cmVcIjp7aWYobyE9PVwiZmxvYXQzMlwiKXRocm93IG5ldyBUeXBlRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGUgXCIke299XCIgdG8gY3JlYXRlIHRlbnNvciBmcm9tIHRleHR1cmVgKTt0aGlzLmdwdVRleHR1cmVEYXRhPXQudGV4dHVyZSx0aGlzLmRvd25sb2FkZXI9dC5kb3dubG9hZCx0aGlzLmRpc3Bvc2VyPXQuZGlzcG9zZTticmVha31jYXNlXCJncHUtYnVmZmVyXCI6e2lmKG8hPT1cImZsb2F0MzJcIiYmbyE9PVwiZmxvYXQxNlwiJiZvIT09XCJpbnQzMlwiJiZvIT09XCJpbnQ2NFwiJiZvIT09XCJ1aW50MzJcIiYmbyE9PVwidWludDhcIiYmbyE9PVwiYm9vbFwiJiZvIT09XCJ1aW50NFwiJiZvIT09XCJpbnQ0XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihgdW5zdXBwb3J0ZWQgdHlwZSBcIiR7b31cIiB0byBjcmVhdGUgdGVuc29yIGZyb20gZ3B1IGJ1ZmZlcmApO3RoaXMuZ3B1QnVmZmVyRGF0YT10LmdwdUJ1ZmZlcix0aGlzLmRvd25sb2FkZXI9dC5kb3dubG9hZCx0aGlzLmRpc3Bvc2VyPXQuZGlzcG9zZTticmVha31jYXNlXCJtbC10ZW5zb3JcIjp7aWYobyE9PVwiZmxvYXQzMlwiJiZvIT09XCJmbG9hdDE2XCImJm8hPT1cImludDMyXCImJm8hPT1cImludDY0XCImJm8hPT1cInVpbnQzMlwiJiZvIT09XCJ1aW50NjRcIiYmbyE9PVwiaW50OFwiJiZvIT09XCJ1aW50OFwiJiZvIT09XCJib29sXCImJm8hPT1cInVpbnQ0XCImJm8hPT1cImludDRcIil0aHJvdyBuZXcgVHlwZUVycm9yKGB1bnN1cHBvcnRlZCB0eXBlIFwiJHtvfVwiIHRvIGNyZWF0ZSB0ZW5zb3IgZnJvbSBNTFRlbnNvcmApO3RoaXMubWxUZW5zb3JEYXRhPXQubWxUZW5zb3IsdGhpcy5kb3dubG9hZGVyPXQuZG93bmxvYWQsdGhpcy5kaXNwb3Nlcj10LmRpc3Bvc2U7YnJlYWt9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYFRlbnNvciBjb25zdHJ1Y3RvcjogdW5zdXBwb3J0ZWQgbG9jYXRpb24gJyR7dGhpcy5kYXRhTG9jYXRpb259J2ApfWVsc2V7bGV0IGwsbTtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilpZihvPXQsbT11LHQ9PT1cInN0cmluZ1wiKXtpZighQXJyYXkuaXNBcnJheShhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBzdHJpbmcgdGVuc29yJ3MgZGF0YSBtdXN0IGJlIGEgc3RyaW5nIGFycmF5LlwiKTtsPWF9ZWxzZXtsZXQgaD1MZS5nZXQodCk7aWYoaD09PXZvaWQgMCl0aHJvdyBuZXcgVHlwZUVycm9yKGBVbnN1cHBvcnRlZCB0ZW5zb3IgdHlwZTogJHt0fS5gKTtpZihBcnJheS5pc0FycmF5KGEpKXtpZih0PT09XCJmbG9hdDE2XCImJmg9PT1VaW50MTZBcnJheXx8dD09PVwidWludDRcInx8dD09PVwiaW50NFwiKXRocm93IG5ldyBUeXBlRXJyb3IoYENyZWF0aW5nIGEgJHt0fSB0ZW5zb3IgZnJvbSBudW1iZXIgYXJyYXkgaXMgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSAke2gubmFtZX0gYXMgZGF0YS5gKTt0PT09XCJ1aW50NjRcInx8dD09PVwiaW50NjRcIj9sPWguZnJvbShhLEJpZ0ludCk6bD1oLmZyb20oYSl9ZWxzZSBpZihhIGluc3RhbmNlb2YgaClsPWE7ZWxzZSBpZihhIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpaWYodD09PVwidWludDhcIilsPVVpbnQ4QXJyYXkuZnJvbShhKTtlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBIFVpbnQ4Q2xhbXBlZEFycmF5IHRlbnNvcidzIGRhdGEgbXVzdCBiZSB0eXBlIG9mIHVpbnQ4XCIpO2Vsc2UgaWYodD09PVwiZmxvYXQxNlwiJiZhIGluc3RhbmNlb2YgVWludDE2QXJyYXkmJmghPT1VaW50MTZBcnJheSlsPW5ldyBnbG9iYWxUaGlzLkZsb2F0MTZBcnJheShhLmJ1ZmZlcixhLmJ5dGVPZmZzZXQsYS5sZW5ndGgpO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihgQSAke299IHRlbnNvcidzIGRhdGEgbXVzdCBiZSB0eXBlIG9mICR7aH1gKX1lbHNlIGlmKG09YSxBcnJheS5pc0FycmF5KHQpKXtpZih0Lmxlbmd0aD09PTApdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRlbnNvciB0eXBlIGNhbm5vdCBiZSBpbmZlcnJlZCBmcm9tIGFuIGVtcHR5IGFycmF5LlwiKTtsZXQgaD10eXBlb2YgdFswXTtpZihoPT09XCJzdHJpbmdcIilvPVwic3RyaW5nXCIsbD10O2Vsc2UgaWYoaD09PVwiYm9vbGVhblwiKW89XCJib29sXCIsbD1VaW50OEFycmF5LmZyb20odCk7ZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGVsZW1lbnQgdHlwZSBvZiBkYXRhIGFycmF5OiAke2h9LmApfWVsc2UgaWYodCBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KW89XCJ1aW50OFwiLGw9VWludDhBcnJheS5mcm9tKHQpO2Vsc2V7bGV0IGg9WGUuZ2V0KHQuY29uc3RydWN0b3IpO2lmKGg9PT12b2lkIDApdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5zdXBwb3J0ZWQgdHlwZSBmb3IgdGVuc29yIGRhdGE6ICR7dC5jb25zdHJ1Y3Rvcn0uYCk7bz1oLGw9dH1pZihtPT09dm9pZCAwKW09W2wubGVuZ3RoXTtlbHNlIGlmKCFBcnJheS5pc0FycmF5KG0pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHRlbnNvcidzIGRpbXMgbXVzdCBiZSBhIG51bWJlciBhcnJheVwiKTtkPW0sdGhpcy5jcHVEYXRhPWwsdGhpcy5kYXRhTG9jYXRpb249XCJjcHVcIn1sZXQgYz1QcihkKTtpZih0aGlzLmNwdURhdGEmJmMhPT10aGlzLmNwdURhdGEubGVuZ3RoJiYhKChvPT09XCJ1aW50NFwifHxvPT09XCJpbnQ0XCIpJiZNYXRoLmNlaWwoYy8yKT09PXRoaXMuY3B1RGF0YS5sZW5ndGgpKXRocm93IG5ldyBFcnJvcihgVGVuc29yJ3Mgc2l6ZSgke2N9KSBkb2VzIG5vdCBtYXRjaCBkYXRhIGxlbmd0aCgke3RoaXMuY3B1RGF0YS5sZW5ndGh9KS5gKTt0aGlzLnR5cGU9byx0aGlzLmRpbXM9ZCx0aGlzLnNpemU9Y31zdGF0aWMgYXN5bmMgZnJvbUltYWdlKHQsYSl7cmV0dXJuIFRyKHQsYSl9c3RhdGljIGZyb21UZXh0dXJlKHQsYSl7cmV0dXJuIFNyKHQsYSl9c3RhdGljIGZyb21HcHVCdWZmZXIodCxhKXtyZXR1cm4gdnIodCxhKX1zdGF0aWMgZnJvbU1MVGVuc29yKHQsYSl7cmV0dXJuIE9yKHQsYSl9c3RhdGljIGZyb21QaW5uZWRCdWZmZXIodCxhLHUpe3JldHVybiBBcih0LGEsdSl9dG9EYXRhVVJMKHQpe3JldHVybiB5cih0aGlzLHQpfXRvSW1hZ2VEYXRhKHQpe3JldHVybiBncih0aGlzLHQpfWdldCBkYXRhKCl7aWYodGhpcy5lbnN1cmVWYWxpZCgpLCF0aGlzLmNwdURhdGEpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRhdGEgaXMgbm90IG9uIENQVS4gVXNlIGBnZXREYXRhKClgIHRvIGRvd25sb2FkIEdQVSBkYXRhIHRvIENQVSwgb3IgdXNlIGB0ZXh0dXJlYCBvciBgZ3B1QnVmZmVyYCBwcm9wZXJ0eSB0byBhY2Nlc3MgdGhlIEdQVSBkYXRhIGRpcmVjdGx5LlwiKTtyZXR1cm4gdGhpcy5jcHVEYXRhfWdldCBsb2NhdGlvbigpe3JldHVybiB0aGlzLmRhdGFMb2NhdGlvbn1nZXQgdGV4dHVyZSgpe2lmKHRoaXMuZW5zdXJlVmFsaWQoKSwhdGhpcy5ncHVUZXh0dXJlRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YSBpcyBub3Qgc3RvcmVkIGFzIGEgV2ViR0wgdGV4dHVyZS5cIik7cmV0dXJuIHRoaXMuZ3B1VGV4dHVyZURhdGF9Z2V0IGdwdUJ1ZmZlcigpe2lmKHRoaXMuZW5zdXJlVmFsaWQoKSwhdGhpcy5ncHVCdWZmZXJEYXRhKXRocm93IG5ldyBFcnJvcihcIlRoZSBkYXRhIGlzIG5vdCBzdG9yZWQgYXMgYSBXZWJHUFUgYnVmZmVyLlwiKTtyZXR1cm4gdGhpcy5ncHVCdWZmZXJEYXRhfWdldCBtbFRlbnNvcigpe2lmKHRoaXMuZW5zdXJlVmFsaWQoKSwhdGhpcy5tbFRlbnNvckRhdGEpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRhdGEgaXMgbm90IHN0b3JlZCBhcyBhIFdlYk5OIE1MVGVuc29yLlwiKTtyZXR1cm4gdGhpcy5tbFRlbnNvckRhdGF9YXN5bmMgZ2V0RGF0YSh0KXtzd2l0Y2godGhpcy5lbnN1cmVWYWxpZCgpLHRoaXMuZGF0YUxvY2F0aW9uKXtjYXNlXCJjcHVcIjpjYXNlXCJjcHUtcGlubmVkXCI6cmV0dXJuIHRoaXMuZGF0YTtjYXNlXCJ0ZXh0dXJlXCI6Y2FzZVwiZ3B1LWJ1ZmZlclwiOmNhc2VcIm1sLXRlbnNvclwiOntpZighdGhpcy5kb3dubG9hZGVyKXRocm93IG5ldyBFcnJvcihcIlRoZSBjdXJyZW50IHRlbnNvciBpcyBub3QgY3JlYXRlZCB3aXRoIGEgc3BlY2lmaWVkIGRhdGEgZG93bmxvYWRlci5cIik7aWYodGhpcy5pc0Rvd25sb2FkaW5nKXRocm93IG5ldyBFcnJvcihcIlRoZSBjdXJyZW50IHRlbnNvciBpcyBiZWluZyBkb3dubG9hZGVkLlwiKTt0cnl7dGhpcy5pc0Rvd25sb2FkaW5nPSEwO2xldCBhPWF3YWl0IHRoaXMuZG93bmxvYWRlcigpO3JldHVybiB0aGlzLmRvd25sb2FkZXI9dm9pZCAwLHRoaXMuZGF0YUxvY2F0aW9uPVwiY3B1XCIsdGhpcy5jcHVEYXRhPWEsdCYmdGhpcy5kaXNwb3NlciYmKHRoaXMuZGlzcG9zZXIoKSx0aGlzLmRpc3Bvc2VyPXZvaWQgMCksYX1maW5hbGx5e3RoaXMuaXNEb3dubG9hZGluZz0hMX19ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYGNhbm5vdCBnZXQgZGF0YSBmcm9tIGxvY2F0aW9uOiAke3RoaXMuZGF0YUxvY2F0aW9ufWApfX1kaXNwb3NlKCl7aWYodGhpcy5pc0Rvd25sb2FkaW5nKXRocm93IG5ldyBFcnJvcihcIlRoZSBjdXJyZW50IHRlbnNvciBpcyBiZWluZyBkb3dubG9hZGVkLlwiKTt0aGlzLmRpc3Bvc2VyJiYodGhpcy5kaXNwb3NlcigpLHRoaXMuZGlzcG9zZXI9dm9pZCAwKSx0aGlzLmNwdURhdGE9dm9pZCAwLHRoaXMuZ3B1VGV4dHVyZURhdGE9dm9pZCAwLHRoaXMuZ3B1QnVmZmVyRGF0YT12b2lkIDAsdGhpcy5tbFRlbnNvckRhdGE9dm9pZCAwLHRoaXMuZG93bmxvYWRlcj12b2lkIDAsdGhpcy5pc0Rvd25sb2FkaW5nPXZvaWQgMCx0aGlzLmRhdGFMb2NhdGlvbj1cIm5vbmVcIn1lbnN1cmVWYWxpZCgpe2lmKHRoaXMuZGF0YUxvY2F0aW9uPT09XCJub25lXCIpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHRlbnNvciBpcyBkaXNwb3NlZC5cIil9cmVzaGFwZSh0KXtpZih0aGlzLmVuc3VyZVZhbGlkKCksdGhpcy5kb3dubG9hZGVyfHx0aGlzLmRpc3Bvc2VyKXRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXNoYXBlIGEgdGVuc29yIHRoYXQgb3ducyBHUFUgcmVzb3VyY2UuXCIpO3JldHVybiBEcih0aGlzLHQpfX19KTt2YXIgZGUsZW49TigoKT0+e1widXNlIHN0cmljdFwiO2N0KCk7ZGU9UX0pO3ZhciB4cixNcixfZSxQZSxEZSxVZSx0bj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7WnQoKTt4cj0obix0KT0+eyh0eXBlb2YgSi50cmFjZT5cInVcIj8hSi53YXNtLnRyYWNlOiFKLnRyYWNlKXx8Y29uc29sZS50aW1lU3RhbXAoYCR7bn06Ok9SVDo6JHt0fWApfSxNcj0obix0KT0+e2xldCBhPW5ldyBFcnJvcigpLnN0YWNrPy5zcGxpdCgvXFxyXFxufFxccnxcXG4vZyl8fFtdLHU9ITE7Zm9yKGxldCBvPTA7bzxhLmxlbmd0aDtvKyspe2lmKHUmJiFhW29dLmluY2x1ZGVzKFwiVFJBQ0VfRlVOQ1wiKSl7bGV0IGQ9YEZVTkNfJHtufTo6JHthW29dLnRyaW0oKS5zcGxpdChcIiBcIilbMV19YDt0JiYoZCs9YDo6JHt0fWApLHhyKFwiQ1BVXCIsZCk7cmV0dXJufWFbb10uaW5jbHVkZXMoXCJUUkFDRV9GVU5DXCIpJiYodT0hMCl9fSxfZT1uPT57KHR5cGVvZiBKLnRyYWNlPlwidVwiPyFKLndhc20udHJhY2U6IUoudHJhY2UpfHxNcihcIkJFR0lOXCIsbil9LFBlPW49PnsodHlwZW9mIEoudHJhY2U+XCJ1XCI/IUoud2FzbS50cmFjZTohSi50cmFjZSl8fE1yKFwiRU5EXCIsbil9LERlPW49PnsodHlwZW9mIEoudHJhY2U+XCJ1XCI/IUoud2FzbS50cmFjZTohSi50cmFjZSl8fGNvbnNvbGUudGltZShgT1JUOjoke259YCl9LFVlPW49PnsodHlwZW9mIEoudHJhY2U+XCJ1XCI/IUoud2FzbS50cmFjZTohSi50cmFjZSl8fGNvbnNvbGUudGltZUVuZChgT1JUOjoke259YCl9fSk7dmFyIGx0LENyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtRdCgpO2VuKCk7dG4oKTtsdD1jbGFzcyBue2NvbnN0cnVjdG9yKHQpe3RoaXMuaGFuZGxlcj10fWFzeW5jIHJ1bih0LGEsdSl7X2UoKSxEZShcIkluZmVyZW5jZVNlc3Npb24ucnVuXCIpO2xldCBvPXt9LGQ9e307aWYodHlwZW9mIHQhPVwib2JqZWN0XCJ8fHQ9PT1udWxsfHx0IGluc3RhbmNlb2YgZGV8fEFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidmZWVkcycgbXVzdCBiZSBhbiBvYmplY3QgdGhhdCB1c2UgaW5wdXQgbmFtZXMgYXMga2V5cyBhbmQgT25ueFZhbHVlIGFzIGNvcnJlc3BvbmRpbmcgdmFsdWVzLlwiKTtsZXQgYz0hMDtpZih0eXBlb2YgYT09XCJvYmplY3RcIil7aWYoYT09PW51bGwpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgYXJndW1lbnRbMV06IGNhbm5vdCBiZSBudWxsLlwiKTtpZihhIGluc3RhbmNlb2YgZGUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidmZXRjaGVzJyBjYW5ub3QgYmUgYSBUZW5zb3JcIik7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoYS5sZW5ndGg9PT0wKXRocm93IG5ldyBUeXBlRXJyb3IoXCInZmV0Y2hlcycgY2Fubm90IGJlIGFuIGVtcHR5IGFycmF5LlwiKTtjPSExO2ZvcihsZXQgaCBvZiBhKXtpZih0eXBlb2YgaCE9XCJzdHJpbmdcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2ZldGNoZXMnIG11c3QgYmUgYSBzdHJpbmcgYXJyYXkgb3IgYW4gb2JqZWN0LlwiKTtpZih0aGlzLm91dHB1dE5hbWVzLmluZGV4T2YoaCk9PT0tMSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihgJ2ZldGNoZXMnIGNvbnRhaW5zIGludmFsaWQgb3V0cHV0IG5hbWU6ICR7aH0uYCk7b1toXT1udWxsfWlmKHR5cGVvZiB1PT1cIm9iamVjdFwiJiZ1IT09bnVsbClkPXU7ZWxzZSBpZih0eXBlb2YgdTxcInVcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ29wdGlvbnMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKX1lbHNle2xldCBoPSExLGc9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7Zm9yKGxldCBiIG9mIHRoaXMub3V0cHV0TmFtZXMpaWYoZy5pbmRleE9mKGIpIT09LTEpe2xldCB5PWFbYl07KHk9PT1udWxsfHx5IGluc3RhbmNlb2YgZGUpJiYoaD0hMCxjPSExLG9bYl09eSl9aWYoaCl7aWYodHlwZW9mIHU9PVwib2JqZWN0XCImJnUhPT1udWxsKWQ9dTtlbHNlIGlmKHR5cGVvZiB1PFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInb3B0aW9ucycgbXVzdCBiZSBhbiBvYmplY3QuXCIpfWVsc2UgZD1hfX1lbHNlIGlmKHR5cGVvZiBhPFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIGFyZ3VtZW50WzFdOiBtdXN0IGJlICdmZXRjaGVzJyBvciAnb3B0aW9ucycuXCIpO2ZvcihsZXQgaCBvZiB0aGlzLmlucHV0TmFtZXMpaWYodHlwZW9mIHRbaF0+XCJ1XCIpdGhyb3cgbmV3IEVycm9yKGBpbnB1dCAnJHtofScgaXMgbWlzc2luZyBpbiAnZmVlZHMnLmApO2lmKGMpZm9yKGxldCBoIG9mIHRoaXMub3V0cHV0TmFtZXMpb1toXT1udWxsO2xldCBsPWF3YWl0IHRoaXMuaGFuZGxlci5ydW4odCxvLGQpLG09e307Zm9yKGxldCBoIGluIGwpaWYoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobCxoKSl7bGV0IGc9bFtoXTtnIGluc3RhbmNlb2YgZGU/bVtoXT1nOm1baF09bmV3IGRlKGcudHlwZSxnLmRhdGEsZy5kaW1zKX1yZXR1cm4gVWUoXCJJbmZlcmVuY2VTZXNzaW9uLnJ1blwiKSxQZSgpLG19YXN5bmMgcmVsZWFzZSgpe3JldHVybiB0aGlzLmhhbmRsZXIuZGlzcG9zZSgpfXN0YXRpYyBhc3luYyBjcmVhdGUodCxhLHUsbyl7X2UoKSxEZShcIkluZmVyZW5jZVNlc3Npb24uY3JlYXRlXCIpO2xldCBkLGM9e307aWYodHlwZW9mIHQ9PVwic3RyaW5nXCIpe2lmKGQ9dCx0eXBlb2YgYT09XCJvYmplY3RcIiYmYSE9PW51bGwpYz1hO2Vsc2UgaWYodHlwZW9mIGE8XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidvcHRpb25zJyBtdXN0IGJlIGFuIG9iamVjdC5cIil9ZWxzZSBpZih0IGluc3RhbmNlb2YgVWludDhBcnJheSl7aWYoZD10LHR5cGVvZiBhPT1cIm9iamVjdFwiJiZhIT09bnVsbCljPWE7ZWxzZSBpZih0eXBlb2YgYTxcInVcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ29wdGlvbnMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKX1lbHNlIGlmKHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcnx8dHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyPFwidVwiJiZ0IGluc3RhbmNlb2YgU2hhcmVkQXJyYXlCdWZmZXIpe2xldCBnPXQsYj0wLHk9dC5ieXRlTGVuZ3RoO2lmKHR5cGVvZiBhPT1cIm9iamVjdFwiJiZhIT09bnVsbCljPWE7ZWxzZSBpZih0eXBlb2YgYT09XCJudW1iZXJcIil7aWYoYj1hLCFOdW1iZXIuaXNTYWZlSW50ZWdlcihiKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidieXRlT2Zmc2V0JyBtdXN0IGJlIGFuIGludGVnZXIuXCIpO2lmKGI8MHx8Yj49Zy5ieXRlTGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKGAnYnl0ZU9mZnNldCcgaXMgb3V0IG9mIHJhbmdlIFswLCAke2cuYnl0ZUxlbmd0aH0pLmApO2lmKHk9dC5ieXRlTGVuZ3RoLWIsdHlwZW9mIHU9PVwibnVtYmVyXCIpe2lmKHk9dSwhTnVtYmVyLmlzU2FmZUludGVnZXIoeSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInYnl0ZUxlbmd0aCcgbXVzdCBiZSBhbiBpbnRlZ2VyLlwiKTtpZih5PD0wfHxiK3k+Zy5ieXRlTGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKGAnYnl0ZUxlbmd0aCcgaXMgb3V0IG9mIHJhbmdlICgwLCAke2cuYnl0ZUxlbmd0aC1ifV0uYCk7aWYodHlwZW9mIG89PVwib2JqZWN0XCImJm8hPT1udWxsKWM9bztlbHNlIGlmKHR5cGVvZiBvPFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInb3B0aW9ucycgbXVzdCBiZSBhbiBvYmplY3QuXCIpfWVsc2UgaWYodHlwZW9mIHU8XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidieXRlTGVuZ3RoJyBtdXN0IGJlIGEgbnVtYmVyLlwiKX1lbHNlIGlmKHR5cGVvZiBhPFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInb3B0aW9ucycgbXVzdCBiZSBhbiBvYmplY3QuXCIpO2Q9bmV3IFVpbnQ4QXJyYXkoZyxiLHkpfWVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgYXJndW1lbnRbMF06IG11c3QgYmUgJ3BhdGgnIG9yICdidWZmZXInLlwiKTtsZXRbbCxtXT1hd2FpdCBkcihjKSxoPWF3YWl0IGwuY3JlYXRlSW5mZXJlbmNlU2Vzc2lvbkhhbmRsZXIoZCxtKTtyZXR1cm4gVWUoXCJJbmZlcmVuY2VTZXNzaW9uLmNyZWF0ZVwiKSxQZSgpLG5ldyBuKGgpfXN0YXJ0UHJvZmlsaW5nKCl7dGhpcy5oYW5kbGVyLnN0YXJ0UHJvZmlsaW5nKCl9ZW5kUHJvZmlsaW5nKCl7dGhpcy5oYW5kbGVyLmVuZFByb2ZpbGluZygpfWdldCBpbnB1dE5hbWVzKCl7cmV0dXJuIHRoaXMuaGFuZGxlci5pbnB1dE5hbWVzfWdldCBvdXRwdXROYW1lcygpe3JldHVybiB0aGlzLmhhbmRsZXIub3V0cHV0TmFtZXN9Z2V0IGlucHV0TWV0YWRhdGEoKXtyZXR1cm4gdGhpcy5oYW5kbGVyLmlucHV0TWV0YWRhdGF9Z2V0IG91dHB1dE1ldGFkYXRhKCl7cmV0dXJuIHRoaXMuaGFuZGxlci5vdXRwdXRNZXRhZGF0YX19fSk7dmFyIHRzLFJyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtDcigpO3RzPWx0fSk7dmFyIEZyPU4oKCk9PntcInVzZSBzdHJpY3RcIn0pO3ZhciBOcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCJ9KTt2YXIga3I9TigoKT0+e1widXNlIHN0cmljdFwifSk7dmFyIFdyPU4oKCk9PntcInVzZSBzdHJpY3RcIn0pO3ZhciBubj17fTt1dChubix7SW5mZXJlbmNlU2Vzc2lvbjooKT0+dHMsVFJBQ0U6KCk9PnhyLFRSQUNFX0VWRU5UX0JFR0lOOigpPT5EZSxUUkFDRV9FVkVOVF9FTkQ6KCk9PlVlLFRSQUNFX0ZVTkNfQkVHSU46KCk9Pl9lLFRSQUNFX0ZVTkNfRU5EOigpPT5QZSxUZW5zb3I6KCk9PmRlLGVudjooKT0+WSxyZWdpc3RlckJhY2tlbmQ6KCk9PnFlfSk7dmFyIFRlPU4oKCk9PntcInVzZSBzdHJpY3RcIjtwcigpO2JyKCk7UnIoKTtlbigpO0ZyKCk7TnIoKTt0bigpO2tyKCk7V3IoKX0pO3ZhciBkdD1OKCgpPT57XCJ1c2Ugc3RyaWN0XCJ9KTt2YXIgSHI9e307dXQoSHIse2RlZmF1bHQ6KCk9Pm5zfSk7dmFyICRyLHpyLG5zLGpyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtybigpO3hlKCk7cHQoKTskcj1cIm9ydC13YXNtLXByb3h5LXdvcmtlclwiLHpyPWdsb2JhbFRoaXMuc2VsZj8ubmFtZT09PSRyO3pyJiYoc2VsZi5vbm1lc3NhZ2U9bj0+e2xldHt0eXBlOnQsaW46YX09bi5kYXRhO3RyeXtzd2l0Y2godCl7Y2FzZVwiaW5pdC13YXNtXCI6bXQoYS53YXNtKS50aGVuKCgpPT57aHQoYSkudGhlbigoKT0+e3Bvc3RNZXNzYWdlKHt0eXBlOnR9KX0sdT0+e3Bvc3RNZXNzYWdlKHt0eXBlOnQsZXJyOnV9KX0pfSx1PT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6dX0pfSk7YnJlYWs7Y2FzZVwiaW5pdC1lcFwiOntsZXR7ZXBOYW1lOnUsZW52Om99PWE7d3Qobyx1KS50aGVuKCgpPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dH0pfSxkPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6ZH0pfSk7YnJlYWt9Y2FzZVwiY29weS1mcm9tXCI6e2xldHtidWZmZXI6dX09YSxvPVFlKHUpO3Bvc3RNZXNzYWdlKHt0eXBlOnQsb3V0Om99KTticmVha31jYXNlXCJjcmVhdGVcIjp7bGV0e21vZGVsOnUsb3B0aW9uczpvfT1hO2J0KHUsbykudGhlbihkPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxvdXQ6ZH0pfSxkPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6ZH0pfSk7YnJlYWt9Y2FzZVwicmVsZWFzZVwiOnl0KGEpLHBvc3RNZXNzYWdlKHt0eXBlOnR9KTticmVhaztjYXNlXCJydW5cIjp7bGV0e3Nlc3Npb25JZDp1LGlucHV0SW5kaWNlczpvLGlucHV0czpkLG91dHB1dEluZGljZXM6YyxvcHRpb25zOmx9PWE7Z3QodSxvLGQsYyxuZXcgQXJyYXkoYy5sZW5ndGgpLmZpbGwobnVsbCksbCkudGhlbihtPT57bS5zb21lKGg9PmhbM10hPT1cImNwdVwiKT9wb3N0TWVzc2FnZSh7dHlwZTp0LGVycjpcIlByb3h5IGRvZXMgbm90IHN1cHBvcnQgbm9uLWNwdSB0ZW5zb3IgbG9jYXRpb24uXCJ9KTpwb3N0TWVzc2FnZSh7dHlwZTp0LG91dDptfSxUdChbLi4uZCwuLi5tXSkpfSxtPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6bX0pfSk7YnJlYWt9Y2FzZVwiZW5kLXByb2ZpbGluZ1wiOkV0KGEpLHBvc3RNZXNzYWdlKHt0eXBlOnR9KTticmVhaztkZWZhdWx0On19Y2F0Y2godSl7cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6dX0pfX0pO25zPXpyP251bGw6bj0+bmV3IFdvcmtlcihuPz9vZSx7dHlwZTpcIm1vZHVsZVwiLG5hbWU6JHJ9KX0pO3ZhciBZcj17fTt1dChZcix7ZGVmYXVsdDooKT0+cnN9KTthc3luYyBmdW5jdGlvbiBWcihuPXt9KXt2YXIgdD1uLGE9ISFnbG9iYWxUaGlzLndpbmRvdyx1PSEhZ2xvYmFsVGhpcy5Xb3JrZXJHbG9iYWxTY29wZSxvPXUmJnNlbGYubmFtZT8uc3RhcnRzV2l0aChcImVtLXB0aHJlYWRcIik7dC5tb3VudEV4dGVybmFsRGF0YT0oZSxyKT0+e2Uuc3RhcnRzV2l0aChcIi4vXCIpJiYoZT1lLnN1YnN0cmluZygyKSksKHQuUmJ8fCh0LlJiPW5ldyBNYXApKS5zZXQoZSxyKX0sdC51bm1vdW50RXh0ZXJuYWxEYXRhPSgpPT57ZGVsZXRlIHQuUmJ9LGdsb2JhbFRoaXMuU2hhcmVkQXJyYXlCdWZmZXI/P25ldyBXZWJBc3NlbWJseS5NZW1vcnkoe2luaXRpYWw6MCxtYXhpbXVtOjAsc2hhcmVkOiEwfSkuYnVmZmVyLmNvbnN0cnVjdG9yO3ZhciBkLGMsbD0oZSxyKT0+e3Rocm93IHJ9LG09aW1wb3J0Lm1ldGEudXJsLGg9XCJcIjtpZihhfHx1KXt0cnl7aD1uZXcgVVJMKFwiLlwiLG0pLmhyZWZ9Y2F0Y2h7fXUmJihjPWU9Pnt2YXIgcj1uZXcgWE1MSHR0cFJlcXVlc3Q7cmV0dXJuIHIub3BlbihcIkdFVFwiLGUsITEpLHIucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIixyLnNlbmQobnVsbCksbmV3IFVpbnQ4QXJyYXkoci5yZXNwb25zZSl9KSxkPWFzeW5jIGU9PntpZihrKGUpKXJldHVybiBuZXcgUHJvbWlzZSgoaSxzKT0+e3ZhciBmPW5ldyBYTUxIdHRwUmVxdWVzdDtmLm9wZW4oXCJHRVRcIixlLCEwKSxmLnJlc3BvbnNlVHlwZT1cImFycmF5YnVmZmVyXCIsZi5vbmxvYWQ9KCk9PntmLnN0YXR1cz09MjAwfHxmLnN0YXR1cz09MCYmZi5yZXNwb25zZT9pKGYucmVzcG9uc2UpOnMoZi5zdGF0dXMpfSxmLm9uZXJyb3I9cyxmLnNlbmQobnVsbCl9KTt2YXIgcj1hd2FpdCBmZXRjaChlLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KTtpZihyLm9rKXJldHVybiByLmFycmF5QnVmZmVyKCk7dGhyb3cgRXJyb3Ioci5zdGF0dXMrXCIgOiBcIityLnVybCl9fXZhciBnLGIseSxULEksRCx6PWNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksdj1jb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSksTz16LEY9dixfPSExLGs9ZT0+ZS5zdGFydHNXaXRoKFwiZmlsZTovL1wiKTtmdW5jdGlvbiB3KCl7Z2UuYnVmZmVyIT1qLmJ1ZmZlciYmZWUoKX1pZihvKXtsZXQgZT1mdW5jdGlvbihyKXt0cnl7dmFyIGk9ci5kYXRhLHM9aS5QYjtpZihzPT09XCJsb2FkXCIpe2xldCBmPVtdO3NlbGYub25tZXNzYWdlPXA9PmYucHVzaChwKSxEPSgpPT57cG9zdE1lc3NhZ2Uoe1BiOlwibG9hZGVkXCJ9KTtmb3IobGV0IHAgb2YgZillKHApO3NlbGYub25tZXNzYWdlPWV9O2ZvcihsZXQgcCBvZiBpLlpiKXRbcF0mJiF0W3BdLnByb3h5fHwodFtwXT0oLi4uRSk9Pntwb3N0TWVzc2FnZSh7UGI6XCJjYWxsSGFuZGxlclwiLFliOnAsYXJnczpFfSl9LHA9PVwicHJpbnRcIiYmKE89dFtwXSkscD09XCJwcmludEVyclwiJiYoRj10W3BdKSk7Z2U9aS5kYyxlZSgpLGI9aS5lYyxVdCgpLGl0KCl9ZWxzZSBpZihzPT09XCJydW5cIil7KGZ1bmN0aW9uKGYpe3ZhciBwPSh3KCksVylbZis1Mj4+PjI+Pj4wXTtmPSh3KCksVylbZis1Nj4+PjI+Pj4wXSxzcihwLHAtZiksUChwKX0pKGkuT2IpLHp0KGkuT2IsMCwwLDEsMCwwKSx3bigpLEZ0KGkuT2IpLFp8fD0hMDt0cnl7QW8oaS5iYyxpLlRiKX1jYXRjaChmKXtpZihmIT1cInVud2luZFwiKXRocm93IGZ9fWVsc2UgaS50YXJnZXQhPT1cInNldGltbWVkaWF0ZVwiJiYocz09PVwiY2hlY2tNYWlsYm94XCI/WiYmcnQoKTpzJiYoRihgd29ya2VyOiByZWNlaXZlZCB1bmtub3duIGNvbW1hbmQgJHtzfWApLEYoaSkpKX1jYXRjaChmKXt0aHJvdyB0cigpLGZ9fTt2YXIgU3M9ZSxaPSExO3NlbGYub251bmhhbmRsZWRyZWplY3Rpb249cj0+e3Rocm93IHIucmVhc29ufHxyfSxzZWxmLm9ubWVzc2FnZT1lfXZhciBqLG5lLHBlLEIsVyxyZSxtZSxBLEssamU9ITE7ZnVuY3Rpb24gZWUoKXt2YXIgZT1nZS5idWZmZXI7dC5IRUFQOD1qPW5ldyBJbnQ4QXJyYXkoZSkscGU9bmV3IEludDE2QXJyYXkoZSksdC5IRUFQVTg9bmU9bmV3IFVpbnQ4QXJyYXkoZSksbmV3IFVpbnQxNkFycmF5KGUpLHQuSEVBUDMyPUI9bmV3IEludDMyQXJyYXkoZSksdC5IRUFQVTMyPVc9bmV3IFVpbnQzMkFycmF5KGUpLHJlPW5ldyBGbG9hdDMyQXJyYXkoZSksbWU9bmV3IEZsb2F0NjRBcnJheShlKSxBPW5ldyBCaWdJbnQ2NEFycmF5KGUpLG5ldyBCaWdVaW50NjRBcnJheShlKX1mdW5jdGlvbiBoZSgpe2plPSEwLG8/RCgpOkVlLlRhKCl9ZnVuY3Rpb24gSChlKXt0aHJvdyBGKGU9XCJBYm9ydGVkKFwiK2UrXCIpXCIpLF89ITAsZT1uZXcgV2ViQXNzZW1ibHkuUnVudGltZUVycm9yKGUrXCIuIEJ1aWxkIHdpdGggLXNBU1NFUlRJT05TIGZvciBtb3JlIGluZm8uXCIpLEk/LihlKSxlfWZ1bmN0aW9uIHEoKXtyZXR1cm57YTp7UjpmYSxmOklvLHc6Qm8sZTpMbyxrOl9vLGc6UG8sUzpEbyxiOlVvLEc6eG8sdGE6dm4sajpNbyxMOkluLEphOkJuLHBhOkxuLHJhOl9uLEthOlBuLEhhOkRuLEFhOlVuLEdhOnhuLFk6TW4scWE6Q24sbmE6Um4sSWE6Rm4sb2E6Tm4sUGE6Q28sRGE6Um8sbGE6Tm8sdWE6a28saWE6V28sVDpHbyxDYTpGdCxNYTokbyx4YTp6byx5YTpIbyx6YTpqbyx2YTokbix3YTp6bixqYTpIbixSYTpZbyxPYTpYbyxWOlFvLFU6Wm8sTmE6Sm8sRjpLbyxMYTplYSxtYTp0YSx1OlZvLEg6bmEsUTphdCxrYTpvYSxhYTpyYSxTYTphYSxFYTpZbixGYTpKbixzYTp5ZSxJOnFuLFg6WG4sQmE6UW4sVzpabixfOmphLE06V2EsJDpIYSxOOmthLHY6UGEsYzpwYSxtOmxhLG46Y2EscTp2YSxiYTpSYSx4OkJhLG86d2EsTzpGYSxEOkdhLEo6Q2EsY2E6TWEsZGE6eGEsQTpPYSxQOlVhLGVhOkRhLHo6TGEsRTpOYSxkOmRhLHI6aGEsaTptYSxaOlZhLGw6eWEscDpnYSxzOmJhLHQ6RWEseTpBYSxmYTpfYSxCOiRhLEs6SWEsQzp6YSxnYTpTYSxoYTpUYSxoOmlhLGE6Z2UsUWE6Vn19fWFzeW5jIGZ1bmN0aW9uIFV0KCl7ZnVuY3Rpb24gZShzLGYpe3JldHVybiBFZT1zLmV4cG9ydHMsRWU9ZnVuY3Rpb24oKXt2YXIgcD1FZSxFPXg9PigpPT54KCk+Pj4wLFM9eD0+Uj0+eChSKT4+PjA7cmV0dXJuKHA9T2JqZWN0LmFzc2lnbih7fSxwKSkuc2I9RShwLnNiKSxwLnViPVMocC51YikscC5JYj1TKHAuSWIpLHAuSmI9RShwLkpiKSxwLk5iPVMocC5OYikscH0oKSxtbi5wdXNoKEVlLnZiKSxzPUVlLHQuX09ydEluaXQ9cy5VYSx0Ll9PcnRHZXRMYXN0RXJyb3I9cy5WYSx0Ll9PcnRDcmVhdGVTZXNzaW9uT3B0aW9ucz1zLldhLHQuX09ydEFwcGVuZEV4ZWN1dGlvblByb3ZpZGVyPXMuWGEsdC5fT3J0QWRkRnJlZURpbWVuc2lvbk92ZXJyaWRlPXMuWWEsdC5fT3J0QWRkU2Vzc2lvbkNvbmZpZ0VudHJ5PXMuWmEsdC5fT3J0UmVsZWFzZVNlc3Npb25PcHRpb25zPXMuX2EsdC5fT3J0Q3JlYXRlU2Vzc2lvbj1zLiRhLHQuX09ydFJlbGVhc2VTZXNzaW9uPXMuYWIsdC5fT3J0R2V0SW5wdXRPdXRwdXRDb3VudD1zLmJiLHQuX09ydEdldElucHV0T3V0cHV0TWV0YWRhdGE9cy5jYix0Ll9PcnRGcmVlPXMuZGIsdC5fT3J0Q3JlYXRlVGVuc29yPXMuZWIsdC5fT3J0R2V0VGVuc29yRGF0YT1zLmZiLHQuX09ydFJlbGVhc2VUZW5zb3I9cy5nYix0Ll9PcnRDcmVhdGVSdW5PcHRpb25zPXMuaGIsdC5fT3J0QWRkUnVuQ29uZmlnRW50cnk9cy5pYix0Ll9PcnRSZWxlYXNlUnVuT3B0aW9ucz1zLmpiLHQuX09ydENyZWF0ZUJpbmRpbmc9cy5rYix0Ll9PcnRCaW5kSW5wdXQ9cy5sYix0Ll9PcnRCaW5kT3V0cHV0PXMubWIsdC5fT3J0Q2xlYXJCb3VuZE91dHB1dHM9cy5uYix0Ll9PcnRSZWxlYXNlQmluZGluZz1zLm9iLHQuX09ydFJ1bldpdGhCaW5kaW5nPXMucGIsdC5fT3J0UnVuPXMucWIsdC5fT3J0RW5kUHJvZmlsaW5nPXMucmIsc3Q9cy5zYixLbj10Ll9mcmVlPXMudGIsZXI9dC5fbWFsbG9jPXMudWIsenQ9cy54Yix0cj1zLnliLG5yPXMuemIscnI9cy5BYixIdD1zLkJiLG9yPXMuQ2IsYXI9cy5EYixNPXMuRWIsSmU9cy5GYixzcj1zLkdiLFA9cy5IYixqdD1zLkliLFU9cy5KYixpcj1zLktiLFZ0PXMuTGIsdXI9cy5NYixmcj1zLk5iLGNyPXMud2IsYj1mLEVlfXZhciByLGk9cSgpO3JldHVybiB0Lmluc3RhbnRpYXRlV2FzbT9uZXcgUHJvbWlzZShzPT57dC5pbnN0YW50aWF0ZVdhc20oaSwoZixwKT0+e3MoZShmLHApKX0pfSk6bz9lKG5ldyBXZWJBc3NlbWJseS5JbnN0YW5jZShiLHEoKSksYik6KEs/Pz10LmxvY2F0ZUZpbGU/dC5sb2NhdGVGaWxlP3QubG9jYXRlRmlsZShcIm9ydC13YXNtLXNpbWQtdGhyZWFkZWQud2FzbVwiLGgpOmgrXCJvcnQtd2FzbS1zaW1kLXRocmVhZGVkLndhc21cIjpuZXcgVVJMKFwib3J0LXdhc20tc2ltZC10aHJlYWRlZC53YXNtXCIsaW1wb3J0Lm1ldGEudXJsKS5ocmVmLHI9YXdhaXQgYXN5bmMgZnVuY3Rpb24ocyl7dmFyIGY9SztpZighZyYmIWsoZikpdHJ5e3ZhciBwPWZldGNoKGYse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pO3JldHVybiBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhwLHMpfWNhdGNoKEUpe0YoYHdhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAke0V9YCksRihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpfXJldHVybiBhc3luYyBmdW5jdGlvbihFLFMpe3RyeXt2YXIgeD1hd2FpdCBhc3luYyBmdW5jdGlvbihSKXtpZighZyl0cnl7dmFyIFg9YXdhaXQgZChSKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWCl9Y2F0Y2h7fWlmKFI9PUsmJmcpUj1uZXcgVWludDhBcnJheShnKTtlbHNle2lmKCFjKXRocm93XCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwiO1I9YyhSKX1yZXR1cm4gUn0oRSk7cmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKHgsUyl9Y2F0Y2goUil7RihgZmFpbGVkIHRvIGFzeW5jaHJvbm91c2x5IHByZXBhcmUgd2FzbTogJHtSfWApLEgoUil9fShmLHMpfShpKSxlKHIuaW5zdGFuY2Usci5tb2R1bGUpKX1jbGFzcyBTZXtuYW1lPVwiRXhpdFN0YXR1c1wiO2NvbnN0cnVjdG9yKHIpe3RoaXMubWVzc2FnZT1gUHJvZ3JhbSB0ZXJtaW5hdGVkIHdpdGggZXhpdCgke3J9KWAsdGhpcy5zdGF0dXM9cn19dmFyIHZlPWU9PntlLnRlcm1pbmF0ZSgpLGUub25tZXNzYWdlPSgpPT57fX0sVmU9W10sUmU9MCx0ZT1udWxsLHVlPWU9PntjZS5sZW5ndGg9PTAmJih5bigpLGJuKGNlWzBdKSk7dmFyIHI9Y2UucG9wKCk7aWYoIXIpcmV0dXJuIDY7RmUucHVzaChyKSxPZVtlLk9iXT1yLHIuT2I9ZS5PYjt2YXIgaT17UGI6XCJydW5cIixiYzplLmFjLFRiOmUuVGIsT2I6ZS5PYn07cmV0dXJuIHIucG9zdE1lc3NhZ2UoaSxlLlhiKSwwfSxzZT0wLEw9KGUsciwuLi5pKT0+e3ZhciBzLGY9MTYqaS5sZW5ndGgscD1VKCksRT1qdChmKSxTPUU+Pj4zO2ZvcihzIG9mIGkpdHlwZW9mIHM9PVwiYmlnaW50XCI/KCh3KCksQSlbUysrPj4+MF09MW4sKHcoKSxBKVtTKys+Pj4wXT1zKTooKHcoKSxBKVtTKys+Pj4wXT0wbiwodygpLG1lKVtTKys+Pj4wXT1zKTtyZXR1cm4gZT1ucihlLDAsZixFLHIpLFAocCksZX07ZnVuY3Rpb24gVihlKXtpZihvKXJldHVybiBMKDAsMSxlKTtpZih5PWUsISgwPHNlKSl7Zm9yKHZhciByIG9mIEZlKXZlKHIpO2ZvcihyIG9mIGNlKXZlKHIpO2NlPVtdLEZlPVtdLE9lPXt9LF89ITB9bCgwLG5ldyBTZShlKSl9ZnVuY3Rpb24gZmUoZSl7aWYobylyZXR1cm4gTCgxLDAsZSk7eWUoZSl9dmFyIHllPWU9PntpZih5PWUsbyl0aHJvdyBmZShlKSxcInVud2luZFwiO1YoZSl9LGNlPVtdLEZlPVtdLG1uPVtdLE9lPXt9LGhuPWU9Pnt2YXIgcj1lLk9iO2RlbGV0ZSBPZVtyXSxjZS5wdXNoKGUpLEZlLnNwbGljZShGZS5pbmRleE9mKGUpLDEpLGUuT2I9MCxycihyKX07ZnVuY3Rpb24gd24oKXttbi5mb3JFYWNoKGU9PmUoKSl9dmFyIGJuPWU9Pm5ldyBQcm9taXNlKHI9PntlLm9ubWVzc2FnZT1mPT57dmFyIHA9Zi5kYXRhO2lmKGY9cC5QYixwLlNiJiZwLlNiIT1zdCgpKXt2YXIgRT1PZVtwLlNiXTtFP0UucG9zdE1lc3NhZ2UocCxwLlhiKTpGKGBJbnRlcm5hbCBlcnJvciEgV29ya2VyIHNlbnQgYSBtZXNzYWdlIFwiJHtmfVwiIHRvIHRhcmdldCBwdGhyZWFkICR7cC5TYn0sIGJ1dCB0aGF0IHRocmVhZCBubyBsb25nZXIgZXhpc3RzIWApfWVsc2UgZj09PVwiY2hlY2tNYWlsYm94XCI/cnQoKTpmPT09XCJzcGF3blRocmVhZFwiP3VlKHApOmY9PT1cImNsZWFudXBUaHJlYWRcIj9SdCgoKT0+e2huKE9lW3AuY2NdKX0pOmY9PT1cImxvYWRlZFwiPyhlLmxvYWRlZD0hMCxyKGUpKTpwLnRhcmdldD09PVwic2V0aW1tZWRpYXRlXCI/ZS5wb3N0TWVzc2FnZShwKTpmPT09XCJ1bmNhdWdodEV4Y2VwdGlvblwiP2Uub25lcnJvcihwLmVycm9yKTpmPT09XCJjYWxsSGFuZGxlclwiP3RbcC5ZYl0oLi4ucC5hcmdzKTpmJiZGKGB3b3JrZXIgc2VudCBhbiB1bmtub3duIGNvbW1hbmQgJHtmfWApfSxlLm9uZXJyb3I9Zj0+e3Rocm93IEYoYHdvcmtlciBzZW50IGFuIGVycm9yISAke2YuZmlsZW5hbWV9OiR7Zi5saW5lbm99OiAke2YubWVzc2FnZX1gKSxmfTt2YXIgaSxzPVtdO2ZvcihpIG9mW10pdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShpKSYmcy5wdXNoKGkpO2UucG9zdE1lc3NhZ2Uoe1BiOlwibG9hZFwiLFpiOnMsZGM6Z2UsZWM6Yn0pfSk7ZnVuY3Rpb24geW4oKXt2YXIgZT1uZXcgV29ya2VyKCgoKT0+e2xldCByPVVSTDtyZXR1cm4gaW1wb3J0Lm1ldGEudXJsPlwiZmlsZTpcIiYmaW1wb3J0Lm1ldGEudXJsPFwiZmlsZTtcIj9uZXcgcihcIm9ydC53YXNtLmJ1bmRsZS5taW4ubWpzXCIsaW1wb3J0Lm1ldGEudXJsKTpuZXcgVVJMKGltcG9ydC5tZXRhLnVybCl9KSgpLHt0eXBlOlwibW9kdWxlXCIsd29ya2VyRGF0YTpcImVtLXB0aHJlYWRcIixuYW1lOlwiZW0tcHRocmVhZFwifSk7Y2UucHVzaChlKX12YXIgZ2UsZ249W10sQz1lPT57dmFyIHI9Z25bZV07cmV0dXJuIHJ8fChnbltlXT1yPWNyLmdldChlKSkscn0sQW89KGUscik9PntzZT0wLGU9QyhlKShyKSwwPHNlP3k9ZTpIdChlKX0sdHQ9W10sbnQ9MDtmdW5jdGlvbiBJbyhlKXt2YXIgcj1uZXcgeHQoZT4+Pj0wKTtyZXR1cm4odygpLGopW3IuUWIrMTI+Pj4wXT09MCYmKEVuKHIsITApLG50LS0pLFRuKHIsITEpLHR0LnB1c2gociksZnIoZSl9dmFyIE5lPTAsQm89KCk9PntNKDAsMCk7dmFyIGU9dHQucG9wKCk7aXIoZS5VYiksTmU9MH07ZnVuY3Rpb24gRW4oZSxyKXtyPXI/MTowLCh3KCksailbZS5RYisxMj4+PjBdPXJ9ZnVuY3Rpb24gVG4oZSxyKXtyPXI/MTowLCh3KCksailbZS5RYisxMz4+PjBdPXJ9Y2xhc3MgeHR7Y29uc3RydWN0b3Iocil7dGhpcy5VYj1yLHRoaXMuUWI9ci0yNH19dmFyIE10PWU9Pnt2YXIgcj1OZTtpZighcilyZXR1cm4gSmUoMCksMDt2YXIgaT1uZXcgeHQocik7KHcoKSxXKVtpLlFiKzE2Pj4+Mj4+PjBdPXI7dmFyIHM9KHcoKSxXKVtpLlFiKzQ+Pj4yPj4+MF07aWYoIXMpcmV0dXJuIEplKDApLHI7Zm9yKHZhciBmIG9mIGUpe2lmKGY9PT0wfHxmPT09cylicmVhaztpZih1cihmLHMsaS5RYisxNikpcmV0dXJuIEplKGYpLHJ9cmV0dXJuIEplKHMpLHJ9O2Z1bmN0aW9uIExvKCl7cmV0dXJuIE10KFtdKX1mdW5jdGlvbiBfbyhlKXtyZXR1cm4gTXQoW2U+Pj4wXSl9ZnVuY3Rpb24gUG8oZSxyLGkscyl7cmV0dXJuIE10KFtlPj4+MCxyPj4+MCxpPj4+MCxzPj4+MF0pfXZhciBEbz0oKT0+e3ZhciBlPXR0LnBvcCgpO2V8fEgoXCJubyBleGNlcHRpb24gdG8gdGhyb3dcIik7dmFyIHI9ZS5VYjt0aHJvdyh3KCksailbZS5RYisxMz4+PjBdPT0wJiYodHQucHVzaChlKSxUbihlLCEwKSxFbihlLCExKSxudCsrKSxWdChyKSxOZT1yfTtmdW5jdGlvbiBVbyhlLHIsaSl7dmFyIHM9bmV3IHh0KGU+Pj49MCk7dGhyb3cgcj4+Pj0wLGk+Pj49MCwodygpLFcpW3MuUWIrMTY+Pj4yPj4+MF09MCwodygpLFcpW3MuUWIrND4+PjI+Pj4wXT1yLCh3KCksVylbcy5RYis4Pj4+Mj4+PjBdPWksVnQoZSksbnQrKyxOZT1lfXZhciB4bz0oKT0+bnQ7ZnVuY3Rpb24gU24oZSxyLGkscyl7cmV0dXJuIG8/TCgyLDEsZSxyLGkscyk6dm4oZSxyLGkscyl9ZnVuY3Rpb24gdm4oZSxyLGkscyl7aWYoZT4+Pj0wLHI+Pj49MCxpPj4+PTAscz4+Pj0wLCFnbG9iYWxUaGlzLlNoYXJlZEFycmF5QnVmZmVyKXJldHVybiA2O3ZhciBmPVtdO3JldHVybiBvJiZmLmxlbmd0aD09PTA/U24oZSxyLGkscyk6KGU9e2FjOmksT2I6ZSxUYjpzLFhiOmZ9LG8/KGUuUGI9XCJzcGF3blRocmVhZFwiLHBvc3RNZXNzYWdlKGUsZiksMCk6dWUoZSkpfWZ1bmN0aW9uIE1vKGUpe3Rocm93IE5lfHw9ZT4+PjAsTmV9dmFyIE9uPWdsb2JhbFRoaXMuVGV4dERlY29kZXImJm5ldyBUZXh0RGVjb2RlcixBbj0oZSxyPTAsaSxzKT0+e3ZhciBmPXI+Pj49MDtpZihpPWYraSxzKXM9aTtlbHNle2Zvcig7ZVtmXSYmIShmPj1pKTspKytmO3M9Zn1pZigxNjxzLXImJmUuYnVmZmVyJiZPbilyZXR1cm4gT24uZGVjb2RlKGUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/ZS5zdWJhcnJheShyLHMpOmUuc2xpY2UocixzKSk7Zm9yKGY9XCJcIjtyPHM7KWlmKDEyOCYoaT1lW3IrK10pKXt2YXIgcD02MyZlW3IrK107aWYoKDIyNCZpKT09MTkyKWYrPVN0cmluZy5mcm9tQ2hhckNvZGUoKDMxJmkpPDw2fHApO2Vsc2V7dmFyIEU9NjMmZVtyKytdOzY1NTM2PihpPSgyNDAmaSk9PTIyND8oMTUmaSk8PDEyfHA8PDZ8RTooNyZpKTw8MTh8cDw8MTJ8RTw8Nnw2MyZlW3IrK10pP2YrPVN0cmluZy5mcm9tQ2hhckNvZGUoaSk6KGktPTY1NTM2LGYrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8aT4+MTAsNTYzMjB8MTAyMyZpKSl9fWVsc2UgZis9U3RyaW5nLmZyb21DaGFyQ29kZShpKTtyZXR1cm4gZn0sQ3Q9KGUscixpKT0+KGU+Pj49MCk/QW4oKHcoKSxuZSksZSxyLGkpOlwiXCI7ZnVuY3Rpb24gSW4oZSxyLGkpe3JldHVybiBvP0woMywxLGUscixpKTowfWZ1bmN0aW9uIEJuKGUscil7aWYobylyZXR1cm4gTCg0LDEsZSxyKX1mdW5jdGlvbiBMbihlLHIpe2lmKG8pcmV0dXJuIEwoNSwxLGUscil9ZnVuY3Rpb24gX24oZSxyLGkpe2lmKG8pcmV0dXJuIEwoNiwxLGUscixpKX1mdW5jdGlvbiBQbihlLHIsaSl7cmV0dXJuIG8/TCg3LDEsZSxyLGkpOjB9ZnVuY3Rpb24gRG4oZSxyKXtpZihvKXJldHVybiBMKDgsMSxlLHIpfWZ1bmN0aW9uIFVuKGUscixpKXtpZihvKXJldHVybiBMKDksMSxlLHIsaSl9ZnVuY3Rpb24geG4oZSxyLGkscyl7aWYobylyZXR1cm4gTCgxMCwxLGUscixpLHMpfWZ1bmN0aW9uIE1uKGUscixpLHMpe2lmKG8pcmV0dXJuIEwoMTEsMSxlLHIsaSxzKX1mdW5jdGlvbiBDbihlLHIsaSxzKXtpZihvKXJldHVybiBMKDEyLDEsZSxyLGkscyl9ZnVuY3Rpb24gUm4oZSl7aWYobylyZXR1cm4gTCgxMywxLGUpfWZ1bmN0aW9uIEZuKGUscil7aWYobylyZXR1cm4gTCgxNCwxLGUscil9ZnVuY3Rpb24gTm4oZSxyLGkpe2lmKG8pcmV0dXJuIEwoMTUsMSxlLHIsaSl9dmFyIENvPSgpPT5IKFwiXCIpO2Z1bmN0aW9uIFJvKGUpe3p0KGU+Pj4wLCF1LDEsIWEsMTMxMDcyLCExKSx3bigpfXZhciBSdD1lPT57aWYoIV8pdHJ5e2lmKGUoKSwhKDA8c2UpKXRyeXtvP3N0KCkmJkh0KHkpOnllKHkpfWNhdGNoKHIpe3IgaW5zdGFuY2VvZiBTZXx8cj09XCJ1bndpbmRcInx8bCgwLHIpfX1jYXRjaChyKXtyIGluc3RhbmNlb2YgU2V8fHI9PVwidW53aW5kXCJ8fGwoMCxyKX19LEZvPSFBdG9taWNzLndhaXRBc3luY3x8Z2xvYmFsVGhpcy5uYXZpZ2F0b3I/LnVzZXJBZ2VudCYmOTE+TnVtYmVyKChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pfHxbXSlbMl0pO2Z1bmN0aW9uIEZ0KGUpe2U+Pj49MCxGb3x8KEF0b21pY3Mud2FpdEFzeW5jKCh3KCksQiksZT4+PjIsZSkudmFsdWUudGhlbihydCksZSs9MTI4LEF0b21pY3Muc3RvcmUoKHcoKSxCKSxlPj4+MiwxKSl9dmFyIHJ0PSgpPT5SdCgoKT0+e3ZhciBlPXN0KCk7ZSYmKEZ0KGUpLGFyKCkpfSk7ZnVuY3Rpb24gTm8oZSxyKXsoZT4+Pj0wKT09cj4+PjA/c2V0VGltZW91dChydCk6bz9wb3N0TWVzc2FnZSh7U2I6ZSxQYjpcImNoZWNrTWFpbGJveFwifSk6KGU9T2VbZV0pJiZlLnBvc3RNZXNzYWdlKHtQYjpcImNoZWNrTWFpbGJveFwifSl9dmFyIE50PVtdO2Z1bmN0aW9uIGtvKGUscixpLHMsZil7Zm9yKHI+Pj49MCxmPj4+PTAsTnQubGVuZ3RoPTAsaT1mPj4+MyxzPWYrcz4+PjM7aTxzOyl7dmFyIHA7cD0odygpLEEpW2krKz4+PjBdPyh3KCksQSlbaSsrPj4+MF06KHcoKSxtZSlbaSsrPj4+MF0sTnQucHVzaChwKX1yZXR1cm4ocj9scltyXTp1YVtlXSkoLi4uTnQpfXZhciBXbz0oKT0+e3NlPTB9O2Z1bmN0aW9uIEdvKGUpe2U+Pj49MCxvP3Bvc3RNZXNzYWdlKHtQYjpcImNsZWFudXBUaHJlYWRcIixjYzplfSk6aG4oT2VbZV0pfWZ1bmN0aW9uICRvKGUpe31mdW5jdGlvbiB6byhlLHIpe2U9LTkwMDcxOTkyNTQ3NDA5OTI+ZXx8OTAwNzE5OTI1NDc0MDk5MjxlP05hTjpOdW1iZXIoZSkscj4+Pj0wLGU9bmV3IERhdGUoMWUzKmUpLCh3KCksQilbcj4+PjI+Pj4wXT1lLmdldFVUQ1NlY29uZHMoKSwodygpLEIpW3IrND4+PjI+Pj4wXT1lLmdldFVUQ01pbnV0ZXMoKSwodygpLEIpW3IrOD4+PjI+Pj4wXT1lLmdldFVUQ0hvdXJzKCksKHcoKSxCKVtyKzEyPj4+Mj4+PjBdPWUuZ2V0VVRDRGF0ZSgpLCh3KCksQilbcisxNj4+PjI+Pj4wXT1lLmdldFVUQ01vbnRoKCksKHcoKSxCKVtyKzIwPj4+Mj4+PjBdPWUuZ2V0VVRDRnVsbFllYXIoKS0xOTAwLCh3KCksQilbcisyND4+PjI+Pj4wXT1lLmdldFVUQ0RheSgpLGU9KGUuZ2V0VGltZSgpLURhdGUuVVRDKGUuZ2V0VVRDRnVsbFllYXIoKSwwLDEsMCwwLDAsMCkpLzg2NGU1fDAsKHcoKSxCKVtyKzI4Pj4+Mj4+PjBdPWV9dmFyIGtuPWU9PmUlND09MCYmKGUlMTAwIT0wfHxlJTQwMD09MCksV249WzAsMzEsNjAsOTEsMTIxLDE1MiwxODIsMjEzLDI0NCwyNzQsMzA1LDMzNV0sR249WzAsMzEsNTksOTAsMTIwLDE1MSwxODEsMjEyLDI0MywyNzMsMzA0LDMzNF07ZnVuY3Rpb24gSG8oZSxyKXtlPS05MDA3MTk5MjU0NzQwOTkyPmV8fDkwMDcxOTkyNTQ3NDA5OTI8ZT9OYU46TnVtYmVyKGUpLHI+Pj49MCxlPW5ldyBEYXRlKDFlMyplKSwodygpLEIpW3I+Pj4yPj4+MF09ZS5nZXRTZWNvbmRzKCksKHcoKSxCKVtyKzQ+Pj4yPj4+MF09ZS5nZXRNaW51dGVzKCksKHcoKSxCKVtyKzg+Pj4yPj4+MF09ZS5nZXRIb3VycygpLCh3KCksQilbcisxMj4+PjI+Pj4wXT1lLmdldERhdGUoKSwodygpLEIpW3IrMTY+Pj4yPj4+MF09ZS5nZXRNb250aCgpLCh3KCksQilbcisyMD4+PjI+Pj4wXT1lLmdldEZ1bGxZZWFyKCktMTkwMCwodygpLEIpW3IrMjQ+Pj4yPj4+MF09ZS5nZXREYXkoKTt2YXIgaT0oa24oZS5nZXRGdWxsWWVhcigpKT9XbjpHbilbZS5nZXRNb250aCgpXStlLmdldERhdGUoKS0xfDA7KHcoKSxCKVtyKzI4Pj4+Mj4+PjBdPWksKHcoKSxCKVtyKzM2Pj4+Mj4+PjBdPS02MCplLmdldFRpbWV6b25lT2Zmc2V0KCksaT1uZXcgRGF0ZShlLmdldEZ1bGxZZWFyKCksNiwxKS5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBzPW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSwwLDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7ZT0wfChpIT1zJiZlLmdldFRpbWV6b25lT2Zmc2V0KCk9PU1hdGgubWluKHMsaSkpLCh3KCksQilbciszMj4+PjI+Pj4wXT1lfWZ1bmN0aW9uIGpvKGUpe2U+Pj49MDt2YXIgcj1uZXcgRGF0ZSgodygpLEIpW2UrMjA+Pj4yPj4+MF0rMTkwMCwodygpLEIpW2UrMTY+Pj4yPj4+MF0sKHcoKSxCKVtlKzEyPj4+Mj4+PjBdLCh3KCksQilbZSs4Pj4+Mj4+PjBdLCh3KCksQilbZSs0Pj4+Mj4+PjBdLCh3KCksQilbZT4+PjI+Pj4wXSwwKSxpPSh3KCksQilbZSszMj4+PjI+Pj4wXSxzPXIuZ2V0VGltZXpvbmVPZmZzZXQoKSxmPW5ldyBEYXRlKHIuZ2V0RnVsbFllYXIoKSw2LDEpLmdldFRpbWV6b25lT2Zmc2V0KCkscD1uZXcgRGF0ZShyLmdldEZ1bGxZZWFyKCksMCwxKS5nZXRUaW1lem9uZU9mZnNldCgpLEU9TWF0aC5taW4ocCxmKTtyZXR1cm4gMD5pPyh3KCksQilbZSszMj4+PjI+Pj4wXT0rKGYhPXAmJkU9PXMpOjA8aSE9KEU9PXMpJiYoZj1NYXRoLm1heChwLGYpLHIuc2V0VGltZShyLmdldFRpbWUoKSs2ZTQqKCgwPGk/RTpmKS1zKSkpLCh3KCksQilbZSsyND4+PjI+Pj4wXT1yLmdldERheSgpLGk9KGtuKHIuZ2V0RnVsbFllYXIoKSk/V246R24pW3IuZ2V0TW9udGgoKV0rci5nZXREYXRlKCktMXwwLCh3KCksQilbZSsyOD4+PjI+Pj4wXT1pLCh3KCksQilbZT4+PjI+Pj4wXT1yLmdldFNlY29uZHMoKSwodygpLEIpW2UrND4+PjI+Pj4wXT1yLmdldE1pbnV0ZXMoKSwodygpLEIpW2UrOD4+PjI+Pj4wXT1yLmdldEhvdXJzKCksKHcoKSxCKVtlKzEyPj4+Mj4+PjBdPXIuZ2V0RGF0ZSgpLCh3KCksQilbZSsxNj4+PjI+Pj4wXT1yLmdldE1vbnRoKCksKHcoKSxCKVtlKzIwPj4+Mj4+PjBdPXIuZ2V0WWVhcigpLGU9ci5nZXRUaW1lKCksQmlnSW50KGlzTmFOKGUpPy0xOmUvMWUzKX1mdW5jdGlvbiAkbihlLHIsaSxzLGYscCxFKXtyZXR1cm4gbz9MKDE2LDEsZSxyLGkscyxmLHAsRSk6LTUyfWZ1bmN0aW9uIHpuKGUscixpLHMsZixwKXtpZihvKXJldHVybiBMKDE3LDEsZSxyLGkscyxmLHApfXZhciBZZT17fSxWbz0oKT0+cGVyZm9ybWFuY2UudGltZU9yaWdpbitwZXJmb3JtYW5jZS5ub3coKTtmdW5jdGlvbiBIbihlLHIpe2lmKG8pcmV0dXJuIEwoMTgsMSxlLHIpO2lmKFllW2VdJiYoY2xlYXJUaW1lb3V0KFllW2VdLmlkKSxkZWxldGUgWWVbZV0pLCFyKXJldHVybiAwO3ZhciBpPXNldFRpbWVvdXQoKCk9PntkZWxldGUgWWVbZV0sUnQoKCk9Pm9yKGUscGVyZm9ybWFuY2UudGltZU9yaWdpbitwZXJmb3JtYW5jZS5ub3coKSkpfSxyKTtyZXR1cm4gWWVbZV09e2lkOmksamM6cn0sMH12YXIgQWU9KGUscixpKT0+e3ZhciBzPSh3KCksbmUpO2lmKHI+Pj49MCwwPGkpe3ZhciBmPXI7aT1yK2ktMTtmb3IodmFyIHA9MDtwPGUubGVuZ3RoOysrcCl7dmFyIEU9ZS5jb2RlUG9pbnRBdChwKTtpZigxMjc+PUUpe2lmKHI+PWkpYnJlYWs7c1tyKys+Pj4wXT1FfWVsc2UgaWYoMjA0Nz49RSl7aWYocisxPj1pKWJyZWFrO3NbcisrPj4+MF09MTkyfEU+PjYsc1tyKys+Pj4wXT0xMjh8NjMmRX1lbHNlIGlmKDY1NTM1Pj1FKXtpZihyKzI+PWkpYnJlYWs7c1tyKys+Pj4wXT0yMjR8RT4+MTIsc1tyKys+Pj4wXT0xMjh8RT4+NiY2MyxzW3IrKz4+PjBdPTEyOHw2MyZFfWVsc2V7aWYociszPj1pKWJyZWFrO3NbcisrPj4+MF09MjQwfEU+PjE4LHNbcisrPj4+MF09MTI4fEU+PjEyJjYzLHNbcisrPj4+MF09MTI4fEU+PjYmNjMsc1tyKys+Pj4wXT0xMjh8NjMmRSxwKyt9fXNbcj4+PjBdPTAsZT1yLWZ9ZWxzZSBlPTA7cmV0dXJuIGV9O2Z1bmN0aW9uIFlvKGUscixpLHMpe2U+Pj49MCxyPj4+PTAsaT4+Pj0wLHM+Pj49MDt2YXIgZj1uZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkscD1uZXcgRGF0ZShmLDAsMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtmPW5ldyBEYXRlKGYsNiwxKS5nZXRUaW1lem9uZU9mZnNldCgpO3ZhciBFPU1hdGgubWF4KHAsZik7KHcoKSxXKVtlPj4+Mj4+PjBdPTYwKkUsKHcoKSxCKVtyPj4+Mj4+PjBdPSsocCE9ZiksZT0ocj1TPT57dmFyIHg9TWF0aC5hYnMoUyk7cmV0dXJuYFVUQyR7MDw9Uz9cIi1cIjpcIitcIn0ke1N0cmluZyhNYXRoLmZsb29yKHgvNjApKS5wYWRTdGFydCgyLFwiMFwiKX0ke1N0cmluZyh4JTYwKS5wYWRTdGFydCgyLFwiMFwiKX1gfSkocCkscj1yKGYpLGY8cD8oQWUoZSxpLDE3KSxBZShyLHMsMTcpKTooQWUoZSxzLDE3KSxBZShyLGksMTcpKX12YXIgSm89KCk9PkRhdGUubm93KCkscW89MTtmdW5jdGlvbiBYbyhlLHIsaSl7aWYoaT4+Pj0wLCEoMDw9ZSYmMz49ZSkpcmV0dXJuIDI4O2lmKGU9PT0wKWU9RGF0ZS5ub3coKTtlbHNle2lmKCFxbylyZXR1cm4gNTI7ZT1wZXJmb3JtYW5jZS50aW1lT3JpZ2luK3BlcmZvcm1hbmNlLm5vdygpfXJldHVybiBlPU1hdGgucm91bmQoMWU2KmUpLCh3KCksQSlbaT4+PjM+Pj4wXT1CaWdJbnQoZSksMH12YXIga3Q9W107ZnVuY3Rpb24gUW8oZSxyLGkpe2U+Pj49MCxyPj4+PTAsaT4+Pj0wLGt0Lmxlbmd0aD0wO2Zvcih2YXIgcztzPSh3KCksbmUpW3IrKz4+PjBdOyl7dmFyIGY9cyE9MTA1O2krPShmJj1zIT0xMTIpJiZpJTg/NDowLGt0LnB1c2gocz09MTEyPyh3KCksVylbaT4+PjI+Pj4wXTpzPT0xMDY/KHcoKSxBKVtpPj4+Mz4+PjBdOnM9PTEwNT8odygpLEIpW2k+Pj4yPj4+MF06KHcoKSxtZSlbaT4+PjM+Pj4wXSksaSs9Zj84OjR9cmV0dXJuIGxyW2VdKC4uLmt0KX12YXIgWm89KCk9Pnt9O2Z1bmN0aW9uIEtvKGUscil7cmV0dXJuIEYoQ3QoZT4+PjAscj4+PjApKX12YXIgZWE9KCk9Pnt0aHJvdyBzZSs9MSxcInVud2luZFwifTtmdW5jdGlvbiB0YSgpe3JldHVybiA0Mjk0OTAxNzYwfXZhciBuYT0oKT0+bmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3ksSWU9e30sV3Q9ZT0+e2Zvcih2YXIgcj0wLGk9MDtpPGUubGVuZ3RoOysraSl7dmFyIHM9ZS5jaGFyQ29kZUF0KGkpOzEyNz49cz9yKys6MjA0Nz49cz9yKz0yOjU1Mjk2PD1zJiY1NzM0Mz49cz8ocis9NCwrK2kpOnIrPTN9cmV0dXJuIHJ9LG90PWU9Pnt2YXIgcjtyZXR1cm4ocj0vXFxid2FzbS1mdW5jdGlvblxcW1xcZCtcXF06KDB4WzAtOWEtZl0rKS8uZXhlYyhlKSk/K3JbMV06KHI9LzooXFxkKyk6XFxkKyg/OlxcKXwkKS8uZXhlYyhlKSk/MjE0NzQ4MzY0OHwrclsxXTowfSxqbj1lPT57Zm9yKHZhciByIG9mIGUpKGU9b3QocikpJiYoSWVbZV09cil9O2Z1bmN0aW9uIHJhKCl7dmFyIGU9RXJyb3IoKS5zdGFjay50b1N0cmluZygpLnNwbGl0KGBcbmApO3JldHVybiBlWzBdPT1cIkVycm9yXCImJmUuc2hpZnQoKSxqbihlKSxJZS5WYj1vdChlWzNdKSxJZS4kYj1lLEllLlZifWZ1bmN0aW9uIGF0KGUpe2lmKCEoZT1JZVtlPj4+MF0pKXJldHVybiAwO3ZhciByO2lmKHI9L15cXHMrYXQgLipcXC53YXNtXFwuKC4qKSBcXCguKlxcKSQvLmV4ZWMoZSkpZT1yWzFdO2Vsc2UgaWYocj0vXlxccythdCAoLiopIFxcKC4qXFwpJC8uZXhlYyhlKSllPXJbMV07ZWxzZXtpZighKHI9L14oLis/KUAvLmV4ZWMoZSkpKXJldHVybiAwO2U9clsxXX1LbihhdC5XYj8/MCkscj1XdChlKSsxO3ZhciBpPWVyKHIpO3JldHVybiBpJiZBZShlLGksciksYXQuV2I9aSxhdC5XYn1mdW5jdGlvbiBvYShlKXtlPj4+PTA7dmFyIHI9KHcoKSxuZSkubGVuZ3RoO2lmKGU8PXJ8fDQyOTQ5MDE3NjA8ZSlyZXR1cm4hMTtmb3IodmFyIGk9MTs0Pj1pO2kqPTIpe3ZhciBzPXIqKDErLjIvaSk7cz1NYXRoLm1pbihzLGUrMTAwNjYzMjk2KTtlOntzPShNYXRoLm1pbig0Mjk0OTAxNzYwLDY1NTM2Kk1hdGguY2VpbChNYXRoLm1heChlLHMpLzY1NTM2KSktZ2UuYnVmZmVyLmJ5dGVMZW5ndGgrNjU1MzUpLzY1NTM2fDA7dHJ5e2dlLmdyb3cocyksZWUoKTt2YXIgZj0xO2JyZWFrIGV9Y2F0Y2h7fWY9dm9pZCAwfWlmKGYpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gYWEoZSxyLGkpe2lmKGU+Pj49MCxyPj4+PTAsSWUuVmI9PWUpdmFyIHM9SWUuJGI7ZWxzZShzPUVycm9yKCkuc3RhY2sudG9TdHJpbmcoKS5zcGxpdChgXG5gKSlbMF09PVwiRXJyb3JcIiYmcy5zaGlmdCgpLGpuKHMpO2Zvcih2YXIgZj0zO3NbZl0mJm90KHNbZl0pIT1lOykrK2Y7Zm9yKGU9MDtlPGkmJnNbZStmXTsrK2UpKHcoKSxCKVtyKzQqZT4+PjI+Pj4wXT1vdChzW2UrZl0pO3JldHVybiBlfXZhciBHdCwkdD17fSxWbj0oKT0+e2lmKCFHdCl7dmFyIGUscj17VVNFUjpcIndlYl91c2VyXCIsTE9HTkFNRTpcIndlYl91c2VyXCIsUEFUSDpcIi9cIixQV0Q6XCIvXCIsSE9NRTpcIi9ob21lL3dlYl91c2VyXCIsTEFORzooZ2xvYmFsVGhpcy5uYXZpZ2F0b3I/Lmxhbmd1YWdlPz9cIkNcIikucmVwbGFjZShcIi1cIixcIl9cIikrXCIuVVRGLThcIixfOlwiLi90aGlzLnByb2dyYW1cIn07Zm9yKGUgaW4gJHQpJHRbZV09PT12b2lkIDA/ZGVsZXRlIHJbZV06cltlXT0kdFtlXTt2YXIgaT1bXTtmb3IoZSBpbiByKWkucHVzaChgJHtlfT0ke3JbZV19YCk7R3Q9aX1yZXR1cm4gR3R9O2Z1bmN0aW9uIFluKGUscil7aWYobylyZXR1cm4gTCgxOSwxLGUscik7ZT4+Pj0wLHI+Pj49MDt2YXIgaSxzPTAsZj0wO2ZvcihpIG9mIFZuKCkpe3ZhciBwPXIrczsodygpLFcpW2UrZj4+PjI+Pj4wXT1wLHMrPUFlKGkscCwxLzApKzEsZis9NH1yZXR1cm4gMH1mdW5jdGlvbiBKbihlLHIpe2lmKG8pcmV0dXJuIEwoMjAsMSxlLHIpO2U+Pj49MCxyPj4+PTA7dmFyIGk9Vm4oKTtmb3IodmFyIHMgb2YoKHcoKSxXKVtlPj4+Mj4+PjBdPWkubGVuZ3RoLGU9MCxpKSllKz1XdChzKSsxO3JldHVybih3KCksVylbcj4+PjI+Pj4wXT1lLDB9ZnVuY3Rpb24gcW4oZSl7cmV0dXJuIG8/TCgyMSwxLGUpOjUyfWZ1bmN0aW9uIFhuKGUscixpLHMpe3JldHVybiBvP0woMjIsMSxlLHIsaSxzKTo1Mn1mdW5jdGlvbiBRbihlLHIsaSxzKXtyZXR1cm4gbz9MKDIzLDEsZSxyLGkscyk6NzB9dmFyIHNhPVtudWxsLFtdLFtdXTtmdW5jdGlvbiBabihlLHIsaSxzKXtpZihvKXJldHVybiBMKDI0LDEsZSxyLGkscyk7cj4+Pj0wLGk+Pj49MCxzPj4+PTA7Zm9yKHZhciBmPTAscD0wO3A8aTtwKyspe3ZhciBFPSh3KCksVylbcj4+PjI+Pj4wXSxTPSh3KCksVylbcis0Pj4+Mj4+PjBdO3IrPTg7Zm9yKHZhciB4PTA7eDxTO3grKyl7dmFyIFI9ZSxYPSh3KCksbmUpW0UreD4+PjBdLGxlPXNhW1JdO1g9PT0wfHxYPT09MTA/KChSPT09MT9POkYpKEFuKGxlKSksbGUubGVuZ3RoPTApOmxlLnB1c2goWCl9Zis9U31yZXR1cm4odygpLFcpW3M+Pj4yPj4+MF09ZiwwfWZ1bmN0aW9uIGlhKGUpe3JldHVybiBlPj4+MH1vfHxmdW5jdGlvbigpe2Zvcih2YXIgZT10Lm51bVRocmVhZHMtMTtlLS07KXluKCk7VmUucHVzaChhc3luYygpPT57dmFyIHI9YXN5bmMgZnVuY3Rpb24oKXtpZighbylyZXR1cm4gUHJvbWlzZS5hbGwoY2UubWFwKGJuKSl9KCk7UmUrKyxhd2FpdCByLC0tUmU9PTAmJnRlJiYocj10ZSx0ZT1udWxsLHIoKSl9KX0oKSxvfHwoZ2U9bmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7aW5pdGlhbDoyNTYsbWF4aW11bTo2NTUzNixzaGFyZWQ6ITB9KSxlZSgpKSx0Lndhc21CaW5hcnkmJihnPXQud2FzbUJpbmFyeSksdC5zdGFja1NhdmU9KCk9PlUoKSx0LnN0YWNrUmVzdG9yZT1lPT5QKGUpLHQuc3RhY2tBbGxvYz1lPT5qdChlKSx0LnNldFZhbHVlPWZ1bmN0aW9uKGUscixpPVwiaThcIil7c3dpdGNoKGkuZW5kc1dpdGgoXCIqXCIpJiYoaT1cIipcIiksaSl7Y2FzZVwiaTFcIjpjYXNlXCJpOFwiOih3KCksailbZT4+PjBdPXI7YnJlYWs7Y2FzZVwiaTE2XCI6KHcoKSxwZSlbZT4+PjE+Pj4wXT1yO2JyZWFrO2Nhc2VcImkzMlwiOih3KCksQilbZT4+PjI+Pj4wXT1yO2JyZWFrO2Nhc2VcImk2NFwiOih3KCksQSlbZT4+PjM+Pj4wXT1CaWdJbnQocik7YnJlYWs7Y2FzZVwiZmxvYXRcIjoodygpLHJlKVtlPj4+Mj4+PjBdPXI7YnJlYWs7Y2FzZVwiZG91YmxlXCI6KHcoKSxtZSlbZT4+PjM+Pj4wXT1yO2JyZWFrO2Nhc2VcIipcIjoodygpLFcpW2U+Pj4yPj4+MF09cjticmVhaztkZWZhdWx0OkgoYGludmFsaWQgdHlwZSBmb3Igc2V0VmFsdWU6ICR7aX1gKX19LHQuZ2V0VmFsdWU9ZnVuY3Rpb24oZSxyPVwiaThcIil7c3dpdGNoKHIuZW5kc1dpdGgoXCIqXCIpJiYocj1cIipcIikscil7Y2FzZVwiaTFcIjpjYXNlXCJpOFwiOnJldHVybih3KCksailbZT4+PjBdO2Nhc2VcImkxNlwiOnJldHVybih3KCkscGUpW2U+Pj4xPj4+MF07Y2FzZVwiaTMyXCI6cmV0dXJuKHcoKSxCKVtlPj4+Mj4+PjBdO2Nhc2VcImk2NFwiOnJldHVybih3KCksQSlbZT4+PjM+Pj4wXTtjYXNlXCJmbG9hdFwiOnJldHVybih3KCkscmUpW2U+Pj4yPj4+MF07Y2FzZVwiZG91YmxlXCI6cmV0dXJuKHcoKSxtZSlbZT4+PjM+Pj4wXTtjYXNlXCIqXCI6cmV0dXJuKHcoKSxXKVtlPj4+Mj4+PjBdO2RlZmF1bHQ6SChgaW52YWxpZCB0eXBlIGZvciBnZXRWYWx1ZTogJHtyfWApfX0sdC5VVEY4VG9TdHJpbmc9Q3QsdC5zdHJpbmdUb1VURjg9QWUsdC5sZW5ndGhCeXRlc1VURjg9V3Q7dmFyIHN0LEtuLGVyLHp0LHRyLG5yLHJyLEh0LG9yLGFyLE0sSmUsc3IsUCxqdCxVLGlyLFZ0LHVyLGZyLGNyLEVlLHVhPVtWLGZlLFNuLEluLEJuLExuLF9uLFBuLERuLFVuLHhuLE1uLENuLFJuLEZuLE5uLCRuLHpuLEhuLFluLEpuLHFuLFhuLFFuLFpuXSxscj17OTMwOTg4OihlLHIsaSxzLGYpPT57aWYodD09PXZvaWQgMHx8IXQuUmIpcmV0dXJuIDE7aWYoKGU9Q3QoTnVtYmVyKGU+Pj4wKSkpLnN0YXJ0c1dpdGgoXCIuL1wiKSYmKGU9ZS5zdWJzdHJpbmcoMikpLCEoZT10LlJiLmdldChlKSkpcmV0dXJuIDI7aWYocj1OdW1iZXIocj4+PjApLGk9TnVtYmVyKGk+Pj4wKSxzPU51bWJlcihzPj4+MCkscitpPmUuYnl0ZUxlbmd0aClyZXR1cm4gMzt0cnl7bGV0IHA9ZS5zdWJhcnJheShyLHIraSk7c3dpdGNoKGYpe2Nhc2UgMDoodygpLG5lKS5zZXQocCxzPj4+MCk7YnJlYWs7Y2FzZSAxOnQuZmM/dC5mYyhzLHApOnQuaWMocyxwKTticmVhaztkZWZhdWx0OnJldHVybiA0fXJldHVybiAwfWNhdGNoe3JldHVybiA0fX0sOTMxODEyOigpPT50eXBlb2Ygd2FzbU9mZnNldENvbnZlcnRlcjxcInVcIn07ZnVuY3Rpb24gZmEoKXtyZXR1cm4gdHlwZW9mIHdhc21PZmZzZXRDb252ZXJ0ZXI8XCJ1XCJ9ZnVuY3Rpb24gY2EoZSxyLGkscyl7dmFyIGY9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyl9Y2F0Y2gocCl7aWYoUChmKSxwIT09cCswKXRocm93IHA7TSgxLDApfX1mdW5jdGlvbiBsYShlLHIsaSl7dmFyIHM9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkpfWNhdGNoKGYpe2lmKFAocyksZiE9PWYrMCl0aHJvdyBmO00oMSwwKX19ZnVuY3Rpb24gZGEoZSl7dmFyIHI9VSgpO3RyeXtDKGUpKCl9Y2F0Y2goaSl7aWYoUChyKSxpIT09aSswKXRocm93IGk7TSgxLDApfX1mdW5jdGlvbiBwYShlLHIpe3ZhciBpPVUoKTt0cnl7cmV0dXJuIEMoZSkocil9Y2F0Y2gocyl7aWYoUChpKSxzIT09cyswKXRocm93IHM7TSgxLDApfX1mdW5jdGlvbiBtYShlLHIsaSl7dmFyIHM9VSgpO3RyeXtDKGUpKHIsaSl9Y2F0Y2goZil7aWYoUChzKSxmIT09ZiswKXRocm93IGY7TSgxLDApfX1mdW5jdGlvbiBoYShlLHIpe3ZhciBpPVUoKTt0cnl7QyhlKShyKX1jYXRjaChzKXtpZihQKGkpLHMhPT1zKzApdGhyb3cgcztNKDEsMCl9fWZ1bmN0aW9uIHdhKGUscixpLHMsZixwLEUpe3ZhciBTPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZixwLEUpfWNhdGNoKHgpe2lmKFAoUykseCE9PXgrMCl0aHJvdyB4O00oMSwwKX19ZnVuY3Rpb24gYmEoZSxyLGkscyxmLHApe3ZhciBFPVUoKTt0cnl7QyhlKShyLGkscyxmLHApfWNhdGNoKFMpe2lmKFAoRSksUyE9PVMrMCl0aHJvdyBTO00oMSwwKX19ZnVuY3Rpb24geWEoZSxyLGkscyl7dmFyIGY9VSgpO3RyeXtDKGUpKHIsaSxzKX1jYXRjaChwKXtpZihQKGYpLHAhPT1wKzApdGhyb3cgcDtNKDEsMCl9fWZ1bmN0aW9uIGdhKGUscixpLHMsZil7dmFyIHA9VSgpO3RyeXtDKGUpKHIsaSxzLGYpfWNhdGNoKEUpe2lmKFAocCksRSE9PUUrMCl0aHJvdyBFO00oMSwwKX19ZnVuY3Rpb24gRWEoZSxyLGkscyxmLHAsRSl7dmFyIFM9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFKX1jYXRjaCh4KXtpZihQKFMpLHghPT14KzApdGhyb3cgeDtNKDEsMCl9fWZ1bmN0aW9uIFRhKGUscixpLHMsZixwLEUpe3ZhciBTPVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSl9Y2F0Y2goeCl7aWYoUChTKSx4IT09eCswKXRocm93IHg7TSgxLDApfX1mdW5jdGlvbiBTYShlLHIsaSxzLGYscCxFLFMpe3ZhciB4PVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTKX1jYXRjaChSKXtpZihQKHgpLFIhPT1SKzApdGhyb3cgUjtNKDEsMCl9fWZ1bmN0aW9uIHZhKGUscixpLHMsZil7dmFyIHA9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyxmKX1jYXRjaChFKXtpZihQKHApLEUhPT1FKzApdGhyb3cgRTtNKDEsMCl9fWZ1bmN0aW9uIE9hKGUscixpKXt2YXIgcz1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSl9Y2F0Y2goZil7aWYoUChzKSxmIT09ZiswKXRocm93IGY7TSgxLDApfX1mdW5jdGlvbiBBYShlLHIsaSxzLGYscCxFLFMpe3ZhciB4PVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTKX1jYXRjaChSKXtpZihQKHgpLFIhPT1SKzApdGhyb3cgUjtNKDEsMCl9fWZ1bmN0aW9uIElhKGUscixpLHMsZixwLEUsUyx4LFIsWCxsZSl7dmFyIHdlPVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTLHgsUixYLGxlKX1jYXRjaChiZSl7aWYoUCh3ZSksYmUhPT1iZSswKXRocm93IGJlO00oMSwwKX19ZnVuY3Rpb24gQmEoZSxyLGkscyxmLHApe3ZhciBFPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZixwKX1jYXRjaChTKXtpZihQKEUpLFMhPT1TKzApdGhyb3cgUztNKDEsMCl9fWZ1bmN0aW9uIExhKGUscixpKXt2YXIgcz1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSl9Y2F0Y2goZil7aWYoUChzKSxmIT09ZiswKXRocm93IGY7cmV0dXJuIE0oMSwwKSwwbn19ZnVuY3Rpb24gX2EoZSxyLGkscyxmLHAsRSxTLHgpe3ZhciBSPVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTLHgpfWNhdGNoKFgpe2lmKFAoUiksWCE9PVgrMCl0aHJvdyBYO00oMSwwKX19ZnVuY3Rpb24gUGEoZSl7dmFyIHI9VSgpO3RyeXtyZXR1cm4gQyhlKSgpfWNhdGNoKGkpe2lmKFAociksaSE9PWkrMCl0aHJvdyBpO00oMSwwKX19ZnVuY3Rpb24gRGEoZSxyKXt2YXIgaT1VKCk7dHJ5e3JldHVybiBDKGUpKHIpfWNhdGNoKHMpe2lmKFAoaSkscyE9PXMrMCl0aHJvdyBzO3JldHVybiBNKDEsMCksMG59fWZ1bmN0aW9uIFVhKGUpe3ZhciByPVUoKTt0cnl7cmV0dXJuIEMoZSkoKX1jYXRjaChpKXtpZihQKHIpLGkhPT1pKzApdGhyb3cgaTtyZXR1cm4gTSgxLDApLDBufX1mdW5jdGlvbiB4YShlLHIsaSxzKXt2YXIgZj1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzKX1jYXRjaChwKXtpZihQKGYpLHAhPT1wKzApdGhyb3cgcDtNKDEsMCl9fWZ1bmN0aW9uIE1hKGUscixpLHMsZil7dmFyIHA9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyxmKX1jYXRjaChFKXtpZihQKHApLEUhPT1FKzApdGhyb3cgRTtNKDEsMCl9fWZ1bmN0aW9uIENhKGUscixpLHMsZixwKXt2YXIgRT1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYscCl9Y2F0Y2goUyl7aWYoUChFKSxTIT09UyswKXRocm93IFM7TSgxLDApfX1mdW5jdGlvbiBSYShlLHIsaSxzLGYscCl7dmFyIEU9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyxmLHApfWNhdGNoKFMpe2lmKFAoRSksUyE9PVMrMCl0aHJvdyBTO00oMSwwKX19ZnVuY3Rpb24gRmEoZSxyLGkscyxmLHAsRSxTKXt2YXIgeD1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYscCxFLFMpfWNhdGNoKFIpe2lmKFAoeCksUiE9PVIrMCl0aHJvdyBSO00oMSwwKX19ZnVuY3Rpb24gTmEoZSxyLGkscyxmKXt2YXIgcD1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYpfWNhdGNoKEUpe2lmKFAocCksRSE9PUUrMCl0aHJvdyBFO3JldHVybiBNKDEsMCksMG59fWZ1bmN0aW9uIGthKGUscixpLHMpe3ZhciBmPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMpfWNhdGNoKHApe2lmKFAoZikscCE9PXArMCl0aHJvdyBwO00oMSwwKX19ZnVuY3Rpb24gV2EoZSxyLGkscyl7dmFyIGY9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyl9Y2F0Y2gocCl7aWYoUChmKSxwIT09cCswKXRocm93IHA7TSgxLDApfX1mdW5jdGlvbiBHYShlLHIsaSxzLGYscCxFLFMseCxSLFgsbGUpe3ZhciB3ZT1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYscCxFLFMseCxSLFgsbGUpfWNhdGNoKGJlKXtpZihQKHdlKSxiZSE9PWJlKzApdGhyb3cgYmU7TSgxLDApfX1mdW5jdGlvbiAkYShlLHIsaSxzLGYscCxFLFMseCxSLFgpe3ZhciBsZT1VKCk7dHJ5e0MoZSkocixpLHMsZixwLEUsUyx4LFIsWCl9Y2F0Y2god2Upe2lmKFAobGUpLHdlIT09d2UrMCl0aHJvdyB3ZTtNKDEsMCl9fWZ1bmN0aW9uIHphKGUscixpLHMsZixwLEUsUyx4LFIsWCxsZSx3ZSxiZSxZYSxKYSl7dmFyIHFhPVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTLHgsUixYLGxlLHdlLGJlLFlhLEphKX1jYXRjaChZdCl7aWYoUChxYSksWXQhPT1ZdCswKXRocm93IFl0O00oMSwwKX19ZnVuY3Rpb24gSGEoZSxyLGkpe3ZhciBzPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpKX1jYXRjaChmKXtpZihQKHMpLGYhPT1mKzApdGhyb3cgZjtNKDEsMCl9fWZ1bmN0aW9uIGphKGUscixpKXt2YXIgcz1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSl9Y2F0Y2goZil7aWYoUChzKSxmIT09ZiswKXRocm93IGY7TSgxLDApfX1mdW5jdGlvbiBWYShlLHIsaSxzKXt2YXIgZj1VKCk7dHJ5e0MoZSkocixpLHMpfWNhdGNoKHApe2lmKFAoZikscCE9PXArMCl0aHJvdyBwO00oMSwwKX19ZnVuY3Rpb24gaXQoKXtpZigwPFJlKXRlPWl0O2Vsc2UgaWYobylUPy4odCksaGUoKTtlbHNle2Zvcih2YXIgZT1WZTswPGUubGVuZ3RoOyllLnNoaWZ0KCkodCk7MDxSZT90ZT1pdDoodC5jYWxsZWRSdW49ITAsX3x8KGhlKCksVD8uKHQpKSl9fXJldHVybiBvfHwoRWU9YXdhaXQgVXQoKSxpdCgpKSx0LlBUUl9TSVpFPTQsamU/dDpuZXcgUHJvbWlzZSgoZSxyKT0+e1Q9ZSxJPXJ9KX12YXIgcnMsb3MsSnI9TigoKT0+e1widXNlIHN0cmljdFwiO3JzPVZyLG9zPWdsb2JhbFRoaXMuc2VsZj8ubmFtZT8uc3RhcnRzV2l0aChcImVtLXB0aHJlYWRcIik7b3MmJlZyKCl9KTt2YXIgUXIsYW4sYXMsb2UsWnIsb24sc3MsaXMsS3IsdXMscXIsZW8sWHIsdG8scHQ9TigoKT0+e1widXNlIHN0cmljdFwiO2R0KCk7UXI9dHlwZW9mIGxvY2F0aW9uPlwidVwiP3ZvaWQgMDpsb2NhdGlvbi5vcmlnaW4sYW49aW1wb3J0Lm1ldGEudXJsPlwiZmlsZTpcIiYmaW1wb3J0Lm1ldGEudXJsPFwiZmlsZTtcIixhcz0oKT0+e2lmKCEhMSl7aWYoYW4pe2xldCBuPVVSTDtyZXR1cm4gbmV3IFVSTChuZXcgbihcIm9ydC53YXNtLmJ1bmRsZS5taW4ubWpzXCIsaW1wb3J0Lm1ldGEudXJsKS5ocmVmLFFyKS5ocmVmfXJldHVybiBpbXBvcnQubWV0YS51cmx9fSxvZT1hcygpLFpyPSgpPT57aWYob2UmJiFvZS5zdGFydHNXaXRoKFwiYmxvYjpcIikpcmV0dXJuIG9lLnN1YnN0cmluZygwLG9lLmxhc3RJbmRleE9mKFwiL1wiKSsxKX0sb249KG4sdCk9Pnt0cnl7bGV0IGE9dD8/b2U7cmV0dXJuKGE/bmV3IFVSTChuLGEpOm5ldyBVUkwobikpLm9yaWdpbj09PVFyfWNhdGNoe3JldHVybiExfX0sc3M9KG4sdCk9PntsZXQgYT10Pz9vZTt0cnl7cmV0dXJuKGE/bmV3IFVSTChuLGEpOm5ldyBVUkwobikpLmhyZWZ9Y2F0Y2h7cmV0dXJufX0saXM9KG4sdCk9PmAke3Q/P1wiLi9cIn0ke259YCxLcj1hc3luYyBuPT57bGV0IGE9YXdhaXQoYXdhaXQgZmV0Y2gobix7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSkpLmJsb2IoKTtyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChhKX0sdXM9YXN5bmMgbj0+KGF3YWl0IGltcG9ydCgvKndlYnBhY2tJZ25vcmU6dHJ1ZSovIC8qQHZpdGUtaWdub3JlKi9uKSkuZGVmYXVsdCxxcj0oanIoKSxYdChIcikpLmRlZmF1bHQsZW89YXN5bmMoKT0+e2lmKCFvZSl0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBwcm94eSB3b3JrZXI6IGNhbm5vdCBkZXRlcm1pbmUgdGhlIHNjcmlwdCBzb3VyY2UgVVJMLlwiKTtpZihvbihvZSkpcmV0dXJuW3ZvaWQgMCxxcigpXTtsZXQgbj1hd2FpdCBLcihvZSk7cmV0dXJuW24scXIobildfSxYcj0oSnIoKSxYdChZcikpLmRlZmF1bHQsdG89YXN5bmMobix0LGEsdSk9PntsZXQgbz1YciYmIShufHx0KTtpZihvKWlmKG9lKW89b24ob2UpfHx1JiYhYTtlbHNlIGlmKHUmJiFhKW89ITA7ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3QgZGV0ZXJtaW5lIHRoZSBzY3JpcHQgc291cmNlIFVSTC5cIik7aWYobylyZXR1cm5bdm9pZCAwLFhyXTt7bGV0IGQ9XCJvcnQtd2FzbS1zaW1kLXRocmVhZGVkLm1qc1wiLGM9bj8/c3MoZCx0KSxsPSEhMSYmYSYmYyYmIW9uKGMsdCksbT1sP2F3YWl0IEtyKGMpOmM/P2lzKGQsdCk7cmV0dXJuW2w/bTp2b2lkIDAsYXdhaXQgdXMobSldfX19KTt2YXIgc24sdW4sU3Qsbm8sZnMsY3MsbHMsbXQsJCx4ZT1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7cHQoKTt1bj0hMSxTdD0hMSxubz0hMSxmcz0oKT0+e2lmKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlcj5cInVcIilyZXR1cm4hMTt0cnl7cmV0dXJuIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbDxcInVcIiYmbmV3IE1lc3NhZ2VDaGFubmVsKCkucG9ydDEucG9zdE1lc3NhZ2UobmV3IFNoYXJlZEFycmF5QnVmZmVyKDEpKSxXZWJBc3NlbWJseS52YWxpZGF0ZShuZXcgVWludDhBcnJheShbMCw5NywxMTUsMTA5LDEsMCwwLDAsMSw0LDEsOTYsMCwwLDMsMiwxLDAsNSw0LDEsMywxLDEsMTAsMTEsMSw5LDAsNjUsMCwyNTQsMTYsMiwwLDI2LDExXSkpfWNhdGNoe3JldHVybiExfX0sY3M9KCk9Pnt0cnl7cmV0dXJuIFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLDk3LDExNSwxMDksMSwwLDAsMCwxLDQsMSw5NiwwLDAsMywyLDEsMCwxMCwzMCwxLDI4LDAsNjUsMCwyNTMsMTUsMjUzLDEyLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjUzLDE4NiwxLDI2LDExXSkpfWNhdGNoe3JldHVybiExfX0sbHM9KCk9Pnt0cnl7cmV0dXJuIFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLDk3LDExNSwxMDksMSwwLDAsMCwxLDUsMSw5NiwwLDEsMTIzLDMsMiwxLDAsMTAsMTksMSwxNywwLDY1LDEsMjUzLDE1LDY1LDIsMjUzLDE1LDY1LDMsMjUzLDE1LDI1MywxNDcsMiwxMV0pKX1jYXRjaHtyZXR1cm4hMX19LG10PWFzeW5jIG49PntpZih1bilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7aWYoU3QpdGhyb3cgbmV3IEVycm9yKFwibXVsdGlwbGUgY2FsbHMgdG8gJ2luaXRpYWxpemVXZWJBc3NlbWJseSgpJyBkZXRlY3RlZC5cIik7aWYobm8pdGhyb3cgbmV3IEVycm9yKFwicHJldmlvdXMgY2FsbCB0byAnaW5pdGlhbGl6ZVdlYkFzc2VtYmx5KCknIGZhaWxlZC5cIik7U3Q9ITA7bGV0IHQ9bi5pbml0VGltZW91dCxhPW4ubnVtVGhyZWFkcztpZihuLnNpbWQhPT0hMSl7aWYobi5zaW1kPT09XCJyZWxheGVkXCIpe2lmKCFscygpKXRocm93IG5ldyBFcnJvcihcIlJlbGF4ZWQgV2ViQXNzZW1ibHkgU0lNRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlwiKX1lbHNlIGlmKCFjcygpKXRocm93IG5ldyBFcnJvcihcIldlYkFzc2VtYmx5IFNJTUQgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cIil9bGV0IHU9ZnMoKTthPjEmJiF1JiYodHlwZW9mIHNlbGY8XCJ1XCImJiFzZWxmLmNyb3NzT3JpZ2luSXNvbGF0ZWQmJmNvbnNvbGUud2FybihcImVudi53YXNtLm51bVRocmVhZHMgaXMgc2V0IHRvIFwiK2ErXCIsIGJ1dCB0aGlzIHdpbGwgbm90IHdvcmsgdW5sZXNzIHlvdSBlbmFibGUgY3Jvc3NPcmlnaW5Jc29sYXRlZCBtb2RlLiBTZWUgaHR0cHM6Ly93ZWIuZGV2L2Nyb3NzLW9yaWdpbi1pc29sYXRpb24tZ3VpZGUvIGZvciBtb3JlIGluZm8uXCIpLGNvbnNvbGUud2FybihcIldlYkFzc2VtYmx5IG11bHRpLXRocmVhZGluZyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LiBGYWxsaW5nIGJhY2sgdG8gc2luZ2xlLXRocmVhZGluZy5cIiksbi5udW1UaHJlYWRzPWE9MSk7bGV0IG89bi53YXNtUGF0aHMsZD10eXBlb2Ygbz09XCJzdHJpbmdcIj9vOnZvaWQgMCxjPW8/Lm1qcyxsPWM/LmhyZWY/P2MsbT1vPy53YXNtLGg9bT8uaHJlZj8/bSxnPW4ud2FzbUJpbmFyeSxbYix5XT1hd2FpdCB0byhsLGQsYT4xLCEhZ3x8ISFoKSxUPSExLEk9W107aWYodD4wJiZJLnB1c2gobmV3IFByb21pc2UoRD0+e3NldFRpbWVvdXQoKCk9PntUPSEwLEQoKX0sdCl9KSksSS5wdXNoKG5ldyBQcm9taXNlKChELHopPT57bGV0IHY9e251bVRocmVhZHM6YX07aWYoZyl2Lndhc21CaW5hcnk9Zyx2LmxvY2F0ZUZpbGU9Tz0+TztlbHNlIGlmKGh8fGQpdi5sb2NhdGVGaWxlPU89Pmg/P2QrTztlbHNlIGlmKGwmJmwuaW5kZXhPZihcImJsb2I6XCIpIT09MCl2LmxvY2F0ZUZpbGU9Tz0+bmV3IFVSTChPLGwpLmhyZWY7ZWxzZSBpZihiKXtsZXQgTz1acigpO08mJih2LmxvY2F0ZUZpbGU9Rj0+TytGKX15KHYpLnRoZW4oTz0+e1N0PSExLHVuPSEwLHNuPU8sRCgpLGImJlVSTC5yZXZva2VPYmplY3RVUkwoYil9LE89PntTdD0hMSxubz0hMCx6KE8pfSl9KSksYXdhaXQgUHJvbWlzZS5yYWNlKEkpLFQpdGhyb3cgbmV3IEVycm9yKGBXZWJBc3NlbWJseSBiYWNrZW5kIGluaXRpYWxpemluZyBmYWlsZWQgZHVlIHRvIHRpbWVvdXQ6ICR7dH1tc2ApfSwkPSgpPT57aWYodW4mJnNuKXJldHVybiBzbjt0aHJvdyBuZXcgRXJyb3IoXCJXZWJBc3NlbWJseSBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0LlwiKX19KTt2YXIgYWUsWmUsRyx2dD1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7eGUoKTthZT0obix0KT0+e2xldCBhPSQoKSx1PWEubGVuZ3RoQnl0ZXNVVEY4KG4pKzEsbz1hLl9tYWxsb2ModSk7cmV0dXJuIGEuc3RyaW5nVG9VVEY4KG4sbyx1KSx0LnB1c2gobyksb30sWmU9KG4sdCxhLHUpPT57aWYodHlwZW9mIG49PVwib2JqZWN0XCImJm4hPT1udWxsKXtpZihhLmhhcyhuKSl0aHJvdyBuZXcgRXJyb3IoXCJDaXJjdWxhciByZWZlcmVuY2UgaW4gb3B0aW9uc1wiKTthLmFkZChuKX1PYmplY3QuZW50cmllcyhuKS5mb3JFYWNoKChbbyxkXSk9PntsZXQgYz10P3QrbzpvO2lmKHR5cGVvZiBkPT1cIm9iamVjdFwiKVplKGQsYytcIi5cIixhLHUpO2Vsc2UgaWYodHlwZW9mIGQ9PVwic3RyaW5nXCJ8fHR5cGVvZiBkPT1cIm51bWJlclwiKXUoYyxkLnRvU3RyaW5nKCkpO2Vsc2UgaWYodHlwZW9mIGQ9PVwiYm9vbGVhblwiKXUoYyxkP1wiMVwiOlwiMFwiKTtlbHNlIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgaGFuZGxlIGV4dHJhIGNvbmZpZyB0eXBlOiAke3R5cGVvZiBkfWApfSl9LEc9bj0+e2xldCB0PSQoKSxhPXQuc3RhY2tTYXZlKCk7dHJ5e2xldCB1PXQuUFRSX1NJWkUsbz10LnN0YWNrQWxsb2MoMip1KTt0Ll9PcnRHZXRMYXN0RXJyb3IobyxvK3UpO2xldCBkPU51bWJlcih0LmdldFZhbHVlKG8sdT09PTQ/XCJpMzJcIjpcImk2NFwiKSksYz10LmdldFZhbHVlKG8rdSxcIipcIiksbD1jP3QuVVRGOFRvU3RyaW5nKGMpOlwiXCI7dGhyb3cgbmV3IEVycm9yKGAke259IEVSUk9SX0NPREU6ICR7ZH0sIEVSUk9SX01FU1NBR0U6ICR7bH1gKX1maW5hbGx5e3Quc3RhY2tSZXN0b3JlKGEpfX19KTt2YXIgcm8sb289TigoKT0+e1widXNlIHN0cmljdFwiO3hlKCk7dnQoKTtybz1uPT57bGV0IHQ9JCgpLGE9MCx1PVtdLG89bnx8e307dHJ5e2lmKG4/LmxvZ1NldmVyaXR5TGV2ZWw9PT12b2lkIDApby5sb2dTZXZlcml0eUxldmVsPTI7ZWxzZSBpZih0eXBlb2Ygbi5sb2dTZXZlcml0eUxldmVsIT1cIm51bWJlclwifHwhTnVtYmVyLmlzSW50ZWdlcihuLmxvZ1NldmVyaXR5TGV2ZWwpfHxuLmxvZ1NldmVyaXR5TGV2ZWw8MHx8bi5sb2dTZXZlcml0eUxldmVsPjQpdGhyb3cgbmV3IEVycm9yKGBsb2cgc2V2ZXJpdHkgbGV2ZWwgaXMgbm90IHZhbGlkOiAke24ubG9nU2V2ZXJpdHlMZXZlbH1gKTtpZihuPy5sb2dWZXJib3NpdHlMZXZlbD09PXZvaWQgMClvLmxvZ1ZlcmJvc2l0eUxldmVsPTA7ZWxzZSBpZih0eXBlb2Ygbi5sb2dWZXJib3NpdHlMZXZlbCE9XCJudW1iZXJcInx8IU51bWJlci5pc0ludGVnZXIobi5sb2dWZXJib3NpdHlMZXZlbCkpdGhyb3cgbmV3IEVycm9yKGBsb2cgdmVyYm9zaXR5IGxldmVsIGlzIG5vdCB2YWxpZDogJHtuLmxvZ1ZlcmJvc2l0eUxldmVsfWApO24/LnRlcm1pbmF0ZT09PXZvaWQgMCYmKG8udGVybWluYXRlPSExKTtsZXQgZD0wO3JldHVybiBuPy50YWchPT12b2lkIDAmJihkPWFlKG4udGFnLHUpKSxhPXQuX09ydENyZWF0ZVJ1bk9wdGlvbnMoby5sb2dTZXZlcml0eUxldmVsLG8ubG9nVmVyYm9zaXR5TGV2ZWwsISFvLnRlcm1pbmF0ZSxkKSxhPT09MCYmRyhcIkNhbid0IGNyZWF0ZSBydW4gb3B0aW9ucy5cIiksbj8uZXh0cmEhPT12b2lkIDAmJlplKG4uZXh0cmEsXCJcIixuZXcgV2Vha1NldCwoYyxsKT0+e2xldCBtPWFlKGMsdSksaD1hZShsLHUpO3QuX09ydEFkZFJ1bkNvbmZpZ0VudHJ5KGEsbSxoKSE9PTAmJkcoYENhbid0IHNldCBhIHJ1biBjb25maWcgZW50cnk6ICR7Y30gLSAke2x9LmApfSksW2EsdV19Y2F0Y2goZCl7dGhyb3cgYSE9PTAmJnQuX09ydFJlbGVhc2VSdW5PcHRpb25zKGEpLHUuZm9yRWFjaChjPT50Ll9mcmVlKGMpKSxkfX19KTt2YXIgZHMscHMsbXMsa2UsaHMsYW8sc289TigoKT0+e1widXNlIHN0cmljdFwiO3hlKCk7dnQoKTtkcz1uPT57c3dpdGNoKG4pe2Nhc2VcImRpc2FibGVkXCI6cmV0dXJuIDA7Y2FzZVwiYmFzaWNcIjpyZXR1cm4gMTtjYXNlXCJleHRlbmRlZFwiOnJldHVybiAyO2Nhc2VcImxheW91dFwiOnJldHVybiAzO2Nhc2VcImFsbFwiOnJldHVybiA5OTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgZ3JhcGggb3B0aW1pemF0aW9uIGxldmVsOiAke259YCl9fSxwcz1uPT57c3dpdGNoKG4pe2Nhc2VcInNlcXVlbnRpYWxcIjpyZXR1cm4gMDtjYXNlXCJwYXJhbGxlbFwiOnJldHVybiAxO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBleGVjdXRpb24gbW9kZTogJHtufWApfX0sbXM9bj0+e24uZXh0cmF8fChuLmV4dHJhPXt9KSxuLmV4dHJhLnNlc3Npb258fChuLmV4dHJhLnNlc3Npb249e30pO2xldCB0PW4uZXh0cmEuc2Vzc2lvbjt0LnVzZV9vcnRfbW9kZWxfYnl0ZXNfZGlyZWN0bHl8fCh0LnVzZV9vcnRfbW9kZWxfYnl0ZXNfZGlyZWN0bHk9XCIxXCIpLG4uZXhlY3V0aW9uUHJvdmlkZXJzJiZuLmV4ZWN1dGlvblByb3ZpZGVycy5zb21lKGE9Pih0eXBlb2YgYT09XCJzdHJpbmdcIj9hOmEubmFtZSk9PT1cIndlYmdwdVwiKSYmKG4uZW5hYmxlTWVtUGF0dGVybj0hMSl9LGtlPShuLHQsYSx1KT0+e2xldCBvPWFlKHQsdSksZD1hZShhLHUpOyQoKS5fT3J0QWRkU2Vzc2lvbkNvbmZpZ0VudHJ5KG4sbyxkKSE9PTAmJkcoYENhbid0IHNldCBhIHNlc3Npb24gY29uZmlnIGVudHJ5OiAke3R9IC0gJHthfS5gKX0saHM9YXN5bmMobix0LGEpPT57bGV0IHU9dC5leGVjdXRpb25Qcm92aWRlcnM7Zm9yKGxldCBvIG9mIHUpe2xldCBkPXR5cGVvZiBvPT1cInN0cmluZ1wiP286by5uYW1lLGM9W107c3dpdGNoKGQpe2Nhc2VcIndlYm5uXCI6aWYoZD1cIldFQk5OXCIsa2UobixcInNlc3Npb24uZGlzYWJsZV9xdWFudF9xZHFcIixcIjFcIixhKSxrZShuLFwic2Vzc2lvbi5kaXNhYmxlX3FkcV9jb25zdGFudF9mb2xkaW5nXCIsXCIxXCIsYSksdHlwZW9mIG8hPVwic3RyaW5nXCIpe2xldCB5PW8/LmRldmljZVR5cGU7eSYma2UobixcImRldmljZVR5cGVcIix5LGEpfWJyZWFrO2Nhc2VcIndlYmdwdVwiOmlmKGQ9XCJKU1wiLHR5cGVvZiBvIT1cInN0cmluZ1wiKXtsZXQgYj1vO2lmKGI/LnByZWZlcnJlZExheW91dCl7aWYoYi5wcmVmZXJyZWRMYXlvdXQhPT1cIk5DSFdcIiYmYi5wcmVmZXJyZWRMYXlvdXQhPT1cIk5IV0NcIil0aHJvdyBuZXcgRXJyb3IoYHByZWZlcnJlZExheW91dCBtdXN0IGJlIGVpdGhlciAnTkNIVycgb3IgJ05IV0MnOiAke2IucHJlZmVycmVkTGF5b3V0fWApO2tlKG4sXCJwcmVmZXJyZWRMYXlvdXRcIixiLnByZWZlcnJlZExheW91dCxhKX19YnJlYWs7Y2FzZVwid2FzbVwiOmNhc2VcImNwdVwiOmNvbnRpbnVlO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBub3Qgc3VwcG9ydGVkIGV4ZWN1dGlvbiBwcm92aWRlcjogJHtkfWApfWxldCBsPWFlKGQsYSksbT1jLmxlbmd0aCxoPTAsZz0wO2lmKG0+MCl7aD0kKCkuX21hbGxvYyhtKiQoKS5QVFJfU0laRSksYS5wdXNoKGgpLGc9JCgpLl9tYWxsb2MobSokKCkuUFRSX1NJWkUpLGEucHVzaChnKTtmb3IobGV0IGI9MDtiPG07YisrKSQoKS5zZXRWYWx1ZShoK2IqJCgpLlBUUl9TSVpFLGNbYl1bMF0sXCIqXCIpLCQoKS5zZXRWYWx1ZShnK2IqJCgpLlBUUl9TSVpFLGNbYl1bMV0sXCIqXCIpfWF3YWl0ICQoKS5fT3J0QXBwZW5kRXhlY3V0aW9uUHJvdmlkZXIobixsLGgsZyxtKSE9PTAmJkcoYENhbid0IGFwcGVuZCBleGVjdXRpb24gcHJvdmlkZXI6ICR7ZH0uYCl9fSxhbz1hc3luYyBuPT57bGV0IHQ9JCgpLGE9MCx1PVtdLG89bnx8e307bXMobyk7dHJ5e2xldCBkPWRzKG8uZ3JhcGhPcHRpbWl6YXRpb25MZXZlbD8/XCJhbGxcIiksYz1wcyhvLmV4ZWN1dGlvbk1vZGU/P1wic2VxdWVudGlhbFwiKSxsPXR5cGVvZiBvLmxvZ0lkPT1cInN0cmluZ1wiP2FlKG8ubG9nSWQsdSk6MCxtPW8ubG9nU2V2ZXJpdHlMZXZlbD8/MjtpZighTnVtYmVyLmlzSW50ZWdlcihtKXx8bTwwfHxtPjQpdGhyb3cgbmV3IEVycm9yKGBsb2cgc2V2ZXJpdHkgbGV2ZWwgaXMgbm90IHZhbGlkOiAke219YCk7bGV0IGg9by5sb2dWZXJib3NpdHlMZXZlbD8/MDtpZighTnVtYmVyLmlzSW50ZWdlcihoKXx8aDwwfHxoPjQpdGhyb3cgbmV3IEVycm9yKGBsb2cgdmVyYm9zaXR5IGxldmVsIGlzIG5vdCB2YWxpZDogJHtofWApO2xldCBnPXR5cGVvZiBvLm9wdGltaXplZE1vZGVsRmlsZVBhdGg9PVwic3RyaW5nXCI/YWUoby5vcHRpbWl6ZWRNb2RlbEZpbGVQYXRoLHUpOjA7aWYoYT10Ll9PcnRDcmVhdGVTZXNzaW9uT3B0aW9ucyhkLCEhby5lbmFibGVDcHVNZW1BcmVuYSwhIW8uZW5hYmxlTWVtUGF0dGVybixjLCEhby5lbmFibGVQcm9maWxpbmcsMCxsLG0saCxnKSxhPT09MCYmRyhcIkNhbid0IGNyZWF0ZSBzZXNzaW9uIG9wdGlvbnMuXCIpLG8uZXhlY3V0aW9uUHJvdmlkZXJzJiZhd2FpdCBocyhhLG8sdSksby5lbmFibGVHcmFwaENhcHR1cmUhPT12b2lkIDApe2lmKHR5cGVvZiBvLmVuYWJsZUdyYXBoQ2FwdHVyZSE9XCJib29sZWFuXCIpdGhyb3cgbmV3IEVycm9yKGBlbmFibGVHcmFwaENhcHR1cmUgbXVzdCBiZSBhIGJvb2xlYW4gdmFsdWU6ICR7by5lbmFibGVHcmFwaENhcHR1cmV9YCk7a2UoYSxcImVuYWJsZUdyYXBoQ2FwdHVyZVwiLG8uZW5hYmxlR3JhcGhDYXB0dXJlLnRvU3RyaW5nKCksdSl9aWYoby5mcmVlRGltZW5zaW9uT3ZlcnJpZGVzKWZvcihsZXRbYix5XW9mIE9iamVjdC5lbnRyaWVzKG8uZnJlZURpbWVuc2lvbk92ZXJyaWRlcykpe2lmKHR5cGVvZiBiIT1cInN0cmluZ1wiKXRocm93IG5ldyBFcnJvcihgZnJlZSBkaW1lbnNpb24gb3ZlcnJpZGUgbmFtZSBtdXN0IGJlIGEgc3RyaW5nOiAke2J9YCk7aWYodHlwZW9mIHkhPVwibnVtYmVyXCJ8fCFOdW1iZXIuaXNJbnRlZ2VyKHkpfHx5PDApdGhyb3cgbmV3IEVycm9yKGBmcmVlIGRpbWVuc2lvbiBvdmVycmlkZSB2YWx1ZSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXI6ICR7eX1gKTtsZXQgVD1hZShiLHUpO3QuX09ydEFkZEZyZWVEaW1lbnNpb25PdmVycmlkZShhLFQseSkhPT0wJiZHKGBDYW4ndCBzZXQgYSBmcmVlIGRpbWVuc2lvbiBvdmVycmlkZTogJHtifSAtICR7eX0uYCl9cmV0dXJuIG8uZXh0cmEhPT12b2lkIDAmJlplKG8uZXh0cmEsXCJcIixuZXcgV2Vha1NldCwoYix5KT0+e2tlKGEsYix5LHUpfSksW2EsdV19Y2F0Y2goZCl7dGhyb3cgYSE9PTAmJnQuX09ydFJlbGVhc2VTZXNzaW9uT3B0aW9ucyhhKSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIHNlc3Npb24gb3B0aW9ucy5cIiksdS5mb3JFYWNoKGM9PnQuX2ZyZWUoYykpLGR9fX0pO3ZhciBXZSxPdCxHZSxpbyx1byxBdCxJdCxmbyxmbj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7V2U9bj0+e3N3aXRjaChuKXtjYXNlXCJpbnQ4XCI6cmV0dXJuIDM7Y2FzZVwidWludDhcIjpyZXR1cm4gMjtjYXNlXCJib29sXCI6cmV0dXJuIDk7Y2FzZVwiaW50MTZcIjpyZXR1cm4gNTtjYXNlXCJ1aW50MTZcIjpyZXR1cm4gNDtjYXNlXCJpbnQzMlwiOnJldHVybiA2O2Nhc2VcInVpbnQzMlwiOnJldHVybiAxMjtjYXNlXCJmbG9hdDE2XCI6cmV0dXJuIDEwO2Nhc2VcImZsb2F0MzJcIjpyZXR1cm4gMTtjYXNlXCJmbG9hdDY0XCI6cmV0dXJuIDExO2Nhc2VcInN0cmluZ1wiOnJldHVybiA4O2Nhc2VcImludDY0XCI6cmV0dXJuIDc7Y2FzZVwidWludDY0XCI6cmV0dXJuIDEzO2Nhc2VcImludDRcIjpyZXR1cm4gMjI7Y2FzZVwidWludDRcIjpyZXR1cm4gMjE7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIGRhdGEgdHlwZTogJHtufWApfX0sT3Q9bj0+e3N3aXRjaChuKXtjYXNlIDM6cmV0dXJuXCJpbnQ4XCI7Y2FzZSAyOnJldHVyblwidWludDhcIjtjYXNlIDk6cmV0dXJuXCJib29sXCI7Y2FzZSA1OnJldHVyblwiaW50MTZcIjtjYXNlIDQ6cmV0dXJuXCJ1aW50MTZcIjtjYXNlIDY6cmV0dXJuXCJpbnQzMlwiO2Nhc2UgMTI6cmV0dXJuXCJ1aW50MzJcIjtjYXNlIDEwOnJldHVyblwiZmxvYXQxNlwiO2Nhc2UgMTpyZXR1cm5cImZsb2F0MzJcIjtjYXNlIDExOnJldHVyblwiZmxvYXQ2NFwiO2Nhc2UgODpyZXR1cm5cInN0cmluZ1wiO2Nhc2UgNzpyZXR1cm5cImludDY0XCI7Y2FzZSAxMzpyZXR1cm5cInVpbnQ2NFwiO2Nhc2UgMjI6cmV0dXJuXCJpbnQ0XCI7Y2FzZSAyMTpyZXR1cm5cInVpbnQ0XCI7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIGRhdGEgdHlwZTogJHtufWApfX0sR2U9KG4sdCk9PntsZXQgYT1bLTEsNCwxLDEsMiwyLDQsOCwtMSwxLDIsOCw0LDgsLTEsLTEsLTEsLTEsLTEsLTEsLTEsLjUsLjVdW25dLHU9dHlwZW9mIHQ9PVwibnVtYmVyXCI/dDp0LnJlZHVjZSgobyxkKT0+bypkLDEpO3JldHVybiBhPjA/TWF0aC5jZWlsKHUqYSk6dm9pZCAwfSxpbz1uPT57c3dpdGNoKG4pe2Nhc2VcImZsb2F0MTZcIjpyZXR1cm4gdHlwZW9mIEZsb2F0MTZBcnJheTxcInVcIiYmRmxvYXQxNkFycmF5LmZyb20/RmxvYXQxNkFycmF5OlVpbnQxNkFycmF5O2Nhc2VcImZsb2F0MzJcIjpyZXR1cm4gRmxvYXQzMkFycmF5O2Nhc2VcInVpbnQ4XCI6cmV0dXJuIFVpbnQ4QXJyYXk7Y2FzZVwiaW50OFwiOnJldHVybiBJbnQ4QXJyYXk7Y2FzZVwidWludDE2XCI6cmV0dXJuIFVpbnQxNkFycmF5O2Nhc2VcImludDE2XCI6cmV0dXJuIEludDE2QXJyYXk7Y2FzZVwiaW50MzJcIjpyZXR1cm4gSW50MzJBcnJheTtjYXNlXCJib29sXCI6cmV0dXJuIFVpbnQ4QXJyYXk7Y2FzZVwiZmxvYXQ2NFwiOnJldHVybiBGbG9hdDY0QXJyYXk7Y2FzZVwidWludDMyXCI6cmV0dXJuIFVpbnQzMkFycmF5O2Nhc2VcImludDY0XCI6cmV0dXJuIEJpZ0ludDY0QXJyYXk7Y2FzZVwidWludDY0XCI6cmV0dXJuIEJpZ1VpbnQ2NEFycmF5O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCB0eXBlOiAke259YCl9fSx1bz1uPT57c3dpdGNoKG4pe2Nhc2VcInZlcmJvc2VcIjpyZXR1cm4gMDtjYXNlXCJpbmZvXCI6cmV0dXJuIDE7Y2FzZVwid2FybmluZ1wiOnJldHVybiAyO2Nhc2VcImVycm9yXCI6cmV0dXJuIDM7Y2FzZVwiZmF0YWxcIjpyZXR1cm4gNDtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgbG9nZ2luZyBsZXZlbDogJHtufWApfX0sQXQ9bj0+bj09PVwiZmxvYXQzMlwifHxuPT09XCJmbG9hdDE2XCJ8fG49PT1cImludDMyXCJ8fG49PT1cImludDY0XCJ8fG49PT1cInVpbnQzMlwifHxuPT09XCJ1aW50OFwifHxuPT09XCJib29sXCJ8fG49PT1cInVpbnQ0XCJ8fG49PT1cImludDRcIixJdD1uPT5uPT09XCJmbG9hdDMyXCJ8fG49PT1cImZsb2F0MTZcInx8bj09PVwiaW50MzJcInx8bj09PVwiaW50NjRcInx8bj09PVwidWludDMyXCJ8fG49PT1cInVpbnQ2NFwifHxuPT09XCJpbnQ4XCJ8fG49PT1cInVpbnQ4XCJ8fG49PT1cImJvb2xcInx8bj09PVwidWludDRcInx8bj09PVwiaW50NFwiLGZvPW49Pntzd2l0Y2gobil7Y2FzZVwibm9uZVwiOnJldHVybiAwO2Nhc2VcImNwdVwiOnJldHVybiAxO2Nhc2VcImNwdS1waW5uZWRcIjpyZXR1cm4gMjtjYXNlXCJ0ZXh0dXJlXCI6cmV0dXJuIDM7Y2FzZVwiZ3B1LWJ1ZmZlclwiOnJldHVybiA0O2Nhc2VcIm1sLXRlbnNvclwiOnJldHVybiA1O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBkYXRhIGxvY2F0aW9uOiAke259YCl9fX0pO3ZhciBLZSxjbj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7ZHQoKTtLZT1hc3luYyBuPT57aWYodHlwZW9mIG49PVwic3RyaW5nXCIpaWYoITEpdHJ5e2xldHtyZWFkRmlsZTp0fT1xdChcIm5vZGU6ZnMvcHJvbWlzZXNcIik7cmV0dXJuIG5ldyBVaW50OEFycmF5KGF3YWl0IHQobikpfWNhdGNoKHQpe2lmKHQuY29kZT09PVwiRVJSX0ZTX0ZJTEVfVE9PX0xBUkdFXCIpe2xldHtjcmVhdGVSZWFkU3RyZWFtOmF9PXF0KFwibm9kZTpmc1wiKSx1PWEobiksbz1bXTtmb3IgYXdhaXQobGV0IGQgb2YgdSlvLnB1c2goZCk7cmV0dXJuIG5ldyBVaW50OEFycmF5KEJ1ZmZlci5jb25jYXQobykpfXRocm93IHR9ZWxzZXtsZXQgdD1hd2FpdCBmZXRjaChuKTtpZighdC5vayl0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBsb2FkIGV4dGVybmFsIGRhdGEgZmlsZTogJHtufWApO2xldCBhPXQuaGVhZGVycy5nZXQoXCJDb250ZW50LUxlbmd0aFwiKSx1PWE/cGFyc2VJbnQoYSwxMCk6MDtpZih1PDEwNzM3NDE4MjQpcmV0dXJuIG5ldyBVaW50OEFycmF5KGF3YWl0IHQuYXJyYXlCdWZmZXIoKSk7e2lmKCF0LmJvZHkpdGhyb3cgbmV3IEVycm9yKGBmYWlsZWQgdG8gbG9hZCBleHRlcm5hbCBkYXRhIGZpbGU6ICR7bn0sIG5vIHJlc3BvbnNlIGJvZHkuYCk7bGV0IG89dC5ib2R5LmdldFJlYWRlcigpLGQ7dHJ5e2Q9bmV3IEFycmF5QnVmZmVyKHUpfWNhdGNoKGwpe2lmKGwgaW5zdGFuY2VvZiBSYW5nZUVycm9yKXtsZXQgbT1NYXRoLmNlaWwodS82NTUzNik7ZD1uZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHtpbml0aWFsOm0sbWF4aW11bTptfSkuYnVmZmVyfWVsc2UgdGhyb3cgbH1sZXQgYz0wO2Zvcig7Oyl7bGV0e2RvbmU6bCx2YWx1ZTptfT1hd2FpdCBvLnJlYWQoKTtpZihsKWJyZWFrO2xldCBoPW0uYnl0ZUxlbmd0aDtuZXcgVWludDhBcnJheShkLGMsaCkuc2V0KG0pLGMrPWh9cmV0dXJuIG5ldyBVaW50OEFycmF5KGQsMCx1KX19ZWxzZSByZXR1cm4gbiBpbnN0YW5jZW9mIEJsb2I/bmV3IFVpbnQ4QXJyYXkoYXdhaXQgbi5hcnJheUJ1ZmZlcigpKTpuIGluc3RhbmNlb2YgVWludDhBcnJheT9uOm5ldyBVaW50OEFycmF5KG4pfX0pO3ZhciB3cyxodCx3dCwkZSxicyxjbyxRZSxidCx5dCxsbyxndCxFdCxUdCxybj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7VGUoKTtvbygpO3NvKCk7Zm4oKTt4ZSgpO3Z0KCk7Y24oKTt3cz0obix0KT0+eyQoKS5fT3J0SW5pdChuLHQpIT09MCYmRyhcIkNhbid0IGluaXRpYWxpemUgb25ueHJ1bnRpbWUuXCIpfSxodD1hc3luYyBuPT57d3Mobi53YXNtLm51bVRocmVhZHMsdW8obi5sb2dMZXZlbCkpfSx3dD1hc3luYyhuLHQpPT57JCgpLmFzeW5jSW5pdD8uKCk7bGV0IGE9bi53ZWJncHUuYWRhcHRlcjtpZih0PT09XCJ3ZWJncHVcIil7aWYodHlwZW9mIG5hdmlnYXRvcj5cInVcInx8IW5hdmlnYXRvci5ncHUpdGhyb3cgbmV3IEVycm9yKFwiV2ViR1BVIGlzIG5vdCBzdXBwb3J0ZWQgaW4gY3VycmVudCBlbnZpcm9ubWVudFwiKTtpZihhKXtpZih0eXBlb2YgYS5saW1pdHMhPVwib2JqZWN0XCJ8fHR5cGVvZiBhLmZlYXR1cmVzIT1cIm9iamVjdFwifHx0eXBlb2YgYS5yZXF1ZXN0RGV2aWNlIT1cImZ1bmN0aW9uXCIpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBHUFUgYWRhcHRlciBzZXQgaW4gYGVudi53ZWJncHUuYWRhcHRlcmAuIEl0IG11c3QgYmUgYSBHUFVBZGFwdGVyIG9iamVjdC5cIil9ZWxzZXtsZXQgdT1uLndlYmdwdS5wb3dlclByZWZlcmVuY2U7aWYodSE9PXZvaWQgMCYmdSE9PVwibG93LXBvd2VyXCImJnUhPT1cImhpZ2gtcGVyZm9ybWFuY2VcIil0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcG93ZXJQcmVmZXJlbmNlIHNldHRpbmc6IFwiJHt1fVwiYCk7bGV0IG89bi53ZWJncHUuZm9yY2VGYWxsYmFja0FkYXB0ZXI7aWYobyE9PXZvaWQgMCYmdHlwZW9mIG8hPVwiYm9vbGVhblwiKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBmb3JjZUZhbGxiYWNrQWRhcHRlciBzZXR0aW5nOiBcIiR7b31cImApO2lmKGE9YXdhaXQgbmF2aWdhdG9yLmdwdS5yZXF1ZXN0QWRhcHRlcih7cG93ZXJQcmVmZXJlbmNlOnUsZm9yY2VGYWxsYmFja0FkYXB0ZXI6b30pLCFhKXRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCBHUFUgYWRhcHRlci4gWW91IG1heSBuZWVkIHRvIGVuYWJsZSBmbGFnIFwiLS1lbmFibGUtdW5zYWZlLXdlYmdwdVwiIGlmIHlvdSBhcmUgdXNpbmcgQ2hyb21lLicpfX1pZih0PT09XCJ3ZWJublwiJiYodHlwZW9mIG5hdmlnYXRvcj5cInVcInx8IW5hdmlnYXRvci5tbCkpdGhyb3cgbmV3IEVycm9yKFwiV2ViTk4gaXMgbm90IHN1cHBvcnRlZCBpbiBjdXJyZW50IGVudmlyb25tZW50XCIpfSwkZT1uZXcgTWFwLGJzPW49PntsZXQgdD0kKCksYT10LnN0YWNrU2F2ZSgpO3RyeXtsZXQgdT10LlBUUl9TSVpFLG89dC5zdGFja0FsbG9jKDIqdSk7dC5fT3J0R2V0SW5wdXRPdXRwdXRDb3VudChuLG8sbyt1KSE9PTAmJkcoXCJDYW4ndCBnZXQgc2Vzc2lvbiBpbnB1dC9vdXRwdXQgY291bnQuXCIpO2xldCBjPXU9PT00P1wiaTMyXCI6XCJpNjRcIjtyZXR1cm5bTnVtYmVyKHQuZ2V0VmFsdWUobyxjKSksTnVtYmVyKHQuZ2V0VmFsdWUobyt1LGMpKV19ZmluYWxseXt0LnN0YWNrUmVzdG9yZShhKX19LGNvPShuLHQpPT57bGV0IGE9JCgpLHU9YS5zdGFja1NhdmUoKSxvPTA7dHJ5e2xldCBkPWEuUFRSX1NJWkUsYz1hLnN0YWNrQWxsb2MoMipkKTthLl9PcnRHZXRJbnB1dE91dHB1dE1ldGFkYXRhKG4sdCxjLGMrZCkhPT0wJiZHKFwiQ2FuJ3QgZ2V0IHNlc3Npb24gaW5wdXQvb3V0cHV0IG1ldGFkYXRhLlwiKTtsZXQgbT1OdW1iZXIoYS5nZXRWYWx1ZShjLFwiKlwiKSk7bz1OdW1iZXIoYS5nZXRWYWx1ZShjK2QsXCIqXCIpKTtsZXQgaD1hLkhFQVAzMltvLzRdO2lmKGg9PT0wKXJldHVyblttLDBdO2xldCBnPWEuSEVBUFUzMltvLzQrMV0sYj1bXTtmb3IobGV0IHk9MDt5PGc7eSsrKXtsZXQgVD1OdW1iZXIoYS5nZXRWYWx1ZShvKzgreSpkLFwiKlwiKSk7Yi5wdXNoKFQhPT0wP2EuVVRGOFRvU3RyaW5nKFQpOk51bWJlcihhLmdldFZhbHVlKG8rOCsoeStnKSpkLFwiKlwiKSkpfXJldHVyblttLGgsYl19ZmluYWxseXthLnN0YWNrUmVzdG9yZSh1KSxvIT09MCYmYS5fT3J0RnJlZShvKX19LFFlPW49PntsZXQgdD0kKCksYT10Ll9tYWxsb2Mobi5ieXRlTGVuZ3RoKTtpZihhPT09MCl0aHJvdyBuZXcgRXJyb3IoYENhbid0IGNyZWF0ZSBhIHNlc3Npb24uIGZhaWxlZCB0byBhbGxvY2F0ZSBhIGJ1ZmZlciBvZiBzaXplICR7bi5ieXRlTGVuZ3RofS5gKTtyZXR1cm4gdC5IRUFQVTguc2V0KG4sYSksW2Esbi5ieXRlTGVuZ3RoXX0sYnQ9YXN5bmMobix0KT0+e2xldCBhLHUsbz0kKCk7QXJyYXkuaXNBcnJheShuKT9bYSx1XT1uOm4uYnVmZmVyPT09by5IRUFQVTguYnVmZmVyP1thLHVdPVtuLmJ5dGVPZmZzZXQsbi5ieXRlTGVuZ3RoXTpbYSx1XT1RZShuKTtsZXQgZD0wLGM9MCxsPTAsbT1bXSxoPVtdLGc9W107dHJ5e2lmKFtjLG1dPWF3YWl0IGFvKHQpLHQ/LmV4dGVybmFsRGF0YSYmby5tb3VudEV4dGVybmFsRGF0YSl7bGV0IF89W107Zm9yKGxldCBrIG9mIHQuZXh0ZXJuYWxEYXRhKXtsZXQgdz10eXBlb2Ygaz09XCJzdHJpbmdcIj9rOmsucGF0aDtfLnB1c2goS2UodHlwZW9mIGs9PVwic3RyaW5nXCI/azprLmRhdGEpLnRoZW4oWj0+e28ubW91bnRFeHRlcm5hbERhdGEodyxaKX0pKX1hd2FpdCBQcm9taXNlLmFsbChfKX1mb3IobGV0IF8gb2YgdD8uZXhlY3V0aW9uUHJvdmlkZXJzPz9bXSlpZigodHlwZW9mIF89PVwic3RyaW5nXCI/XzpfLm5hbWUpPT09XCJ3ZWJublwiKXtpZihvLnNob3VsZFRyYW5zZmVyVG9NTFRlbnNvcj0hMSx0eXBlb2YgXyE9XCJzdHJpbmdcIil7bGV0IHc9XyxaPXc/LmNvbnRleHQsaj13Py5ncHVEZXZpY2UsbmU9dz8uZGV2aWNlVHlwZSxwZT13Py5wb3dlclByZWZlcmVuY2U7Wj9vLmN1cnJlbnRDb250ZXh0PVo6aj9vLmN1cnJlbnRDb250ZXh0PWF3YWl0IG8ud2Vibm5DcmVhdGVNTENvbnRleHQoaik6by5jdXJyZW50Q29udGV4dD1hd2FpdCBvLndlYm5uQ3JlYXRlTUxDb250ZXh0KHtkZXZpY2VUeXBlOm5lLHBvd2VyUHJlZmVyZW5jZTpwZX0pfWVsc2Ugby5jdXJyZW50Q29udGV4dD1hd2FpdCBvLndlYm5uQ3JlYXRlTUxDb250ZXh0KCk7YnJlYWt9ZD1hd2FpdCBvLl9PcnRDcmVhdGVTZXNzaW9uKGEsdSxjKSxvLndlYmdwdU9uQ3JlYXRlU2Vzc2lvbj8uKGQpLGQ9PT0wJiZHKFwiQ2FuJ3QgY3JlYXRlIGEgc2Vzc2lvbi5cIiksby5qc2VwT25DcmVhdGVTZXNzaW9uPy4oKSxvLmN1cnJlbnRDb250ZXh0JiYoby53ZWJublJlZ2lzdGVyTUxDb250ZXh0KGQsby5jdXJyZW50Q29udGV4dCksby5jdXJyZW50Q29udGV4dD12b2lkIDAsby5zaG91bGRUcmFuc2ZlclRvTUxUZW5zb3I9ITApO2xldFtiLHldPWJzKGQpLFQ9ISF0Py5lbmFibGVHcmFwaENhcHR1cmUsST1bXSxEPVtdLHo9W10sdj1bXSxPPVtdO2ZvcihsZXQgXz0wO188YjtfKyspe2xldFtrLHcsWl09Y28oZCxfKTtrPT09MCYmRyhcIkNhbid0IGdldCBhbiBpbnB1dCBuYW1lLlwiKSxoLnB1c2goayk7bGV0IGo9by5VVEY4VG9TdHJpbmcoayk7SS5wdXNoKGopLHoucHVzaCh3PT09MD97bmFtZTpqLGlzVGVuc29yOiExfTp7bmFtZTpqLGlzVGVuc29yOiEwLHR5cGU6T3Qodyksc2hhcGU6Wn0pfWZvcihsZXQgXz0wO188eTtfKyspe2xldFtrLHcsWl09Y28oZCxfK2IpO2s9PT0wJiZHKFwiQ2FuJ3QgZ2V0IGFuIG91dHB1dCBuYW1lLlwiKSxnLnB1c2goayk7bGV0IGo9by5VVEY4VG9TdHJpbmcoayk7RC5wdXNoKGopLHYucHVzaCh3PT09MD97bmFtZTpqLGlzVGVuc29yOiExfTp7bmFtZTpqLGlzVGVuc29yOiEwLHR5cGU6T3Qodyksc2hhcGU6Wn0pfXJldHVybiAkZS5zZXQoZCxbZCxoLGcsbnVsbCxULCExXSksW2QsSSxELHosdl19Y2F0Y2goYil7dGhyb3cgaC5mb3JFYWNoKHk9Pm8uX09ydEZyZWUoeSkpLGcuZm9yRWFjaCh5PT5vLl9PcnRGcmVlKHkpKSxsIT09MCYmby5fT3J0UmVsZWFzZUJpbmRpbmcobCkhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSBJTyBiaW5kaW5nLlwiKSxkIT09MCYmby5fT3J0UmVsZWFzZVNlc3Npb24oZCkhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSBzZXNzaW9uLlwiKSxifWZpbmFsbHl7by5fZnJlZShhKSxjIT09MCYmby5fT3J0UmVsZWFzZVNlc3Npb25PcHRpb25zKGMpIT09MCYmRyhcIkNhbid0IHJlbGVhc2Ugc2Vzc2lvbiBvcHRpb25zLlwiKSxtLmZvckVhY2goYj0+by5fZnJlZShiKSksby51bm1vdW50RXh0ZXJuYWxEYXRhPy4oKX19LHl0PW49PntsZXQgdD0kKCksYT0kZS5nZXQobik7aWYoIWEpdGhyb3cgbmV3IEVycm9yKGBjYW5ub3QgcmVsZWFzZSBzZXNzaW9uLiBpbnZhbGlkIHNlc3Npb24gaWQ6ICR7bn1gKTtsZXRbdSxvLGQsYyxsXT1hO2MmJihsJiZ0Ll9PcnRDbGVhckJvdW5kT3V0cHV0cyhjLmhhbmRsZSkhPT0wJiZHKFwiQ2FuJ3QgY2xlYXIgYm91bmQgb3V0cHV0cy5cIiksdC5fT3J0UmVsZWFzZUJpbmRpbmcoYy5oYW5kbGUpIT09MCYmRyhcIkNhbid0IHJlbGVhc2UgSU8gYmluZGluZy5cIikpLHQuanNlcE9uUmVsZWFzZVNlc3Npb24/LihuKSx0LndlYm5uT25SZWxlYXNlU2Vzc2lvbj8uKG4pLHQud2ViZ3B1T25SZWxlYXNlU2Vzc2lvbj8uKG4pLG8uZm9yRWFjaChtPT50Ll9PcnRGcmVlKG0pKSxkLmZvckVhY2gobT0+dC5fT3J0RnJlZShtKSksdC5fT3J0UmVsZWFzZVNlc3Npb24odSkhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSBzZXNzaW9uLlwiKSwkZS5kZWxldGUobil9LGxvPWFzeW5jKG4sdCxhLHUsbyxkLGM9ITEpPT57aWYoIW4pe3QucHVzaCgwKTtyZXR1cm59bGV0IGw9JCgpLG09bC5QVFJfU0laRSxoPW5bMF0sZz1uWzFdLGI9blszXSx5PWIsVCxJO2lmKGg9PT1cInN0cmluZ1wiJiYoYj09PVwiZ3B1LWJ1ZmZlclwifHxiPT09XCJtbC10ZW5zb3JcIikpdGhyb3cgbmV3IEVycm9yKFwiU3RyaW5nIHRlbnNvciBpcyBub3Qgc3VwcG9ydGVkIG9uIEdQVS5cIik7aWYoYyYmYiE9PVwiZ3B1LWJ1ZmZlclwiKXRocm93IG5ldyBFcnJvcihgRXh0ZXJuYWwgYnVmZmVyIG11c3QgYmUgcHJvdmlkZWQgZm9yIGlucHV0L291dHB1dCBpbmRleCAke2R9IHdoZW4gZW5hYmxlR3JhcGhDYXB0dXJlIGlzIHRydWUuYCk7aWYoYj09PVwiZ3B1LWJ1ZmZlclwiKXtsZXQgdj1uWzJdLmdwdUJ1ZmZlcjtJPUdlKFdlKGgpLGcpO3tsZXQgTz1sLmpzZXBSZWdpc3RlckJ1ZmZlcjtpZighTyl0aHJvdyBuZXcgRXJyb3IoJ1RlbnNvciBsb2NhdGlvbiBcImdwdS1idWZmZXJcIiBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgdXNpbmcgV2ViR1BVLicpO1Q9Tyh1LGQsdixJKX19ZWxzZSBpZihiPT09XCJtbC10ZW5zb3JcIil7bGV0IHY9blsyXS5tbFRlbnNvcjtJPUdlKFdlKGgpLGcpO2xldCBPPWwud2Vibm5SZWdpc3Rlck1MVGVuc29yO2lmKCFPKXRocm93IG5ldyBFcnJvcignVGVuc29yIGxvY2F0aW9uIFwibWwtdGVuc29yXCIgaXMgbm90IHN1cHBvcnRlZCB3aXRob3V0IHVzaW5nIFdlYk5OLicpO1Q9Tyh1LHYsV2UoaCksZyl9ZWxzZXtsZXQgdj1uWzJdO2lmKEFycmF5LmlzQXJyYXkodikpe0k9bSp2Lmxlbmd0aCxUPWwuX21hbGxvYyhJKSxhLnB1c2goVCk7Zm9yKGxldCBPPTA7Tzx2Lmxlbmd0aDtPKyspe2lmKHR5cGVvZiB2W09dIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoYHRlbnNvciBkYXRhIGF0IGluZGV4ICR7T30gaXMgbm90IGEgc3RyaW5nYCk7bC5zZXRWYWx1ZShUK08qbSxhZSh2W09dLGEpLFwiKlwiKX19ZWxzZXtsZXQgTz1sLndlYm5uSXNHcmFwaElucHV0LEY9bC53ZWJubklzR3JhcGhPdXRwdXQ7aWYoaCE9PVwic3RyaW5nXCImJk8mJkYpe2xldCBfPWwuVVRGOFRvU3RyaW5nKG8pO2lmKE8odSxfKXx8Rih1LF8pKXtsZXQgaz1XZShoKTtJPUdlKGssZykseT1cIm1sLXRlbnNvclwiO2xldCB3PWwud2Vibm5DcmVhdGVUZW1wb3JhcnlUZW5zb3IsWj1sLndlYm5uVXBsb2FkVGVuc29yO2lmKCF3fHwhWil0aHJvdyBuZXcgRXJyb3IoJ1RlbnNvciBsb2NhdGlvbiBcIm1sLXRlbnNvclwiIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aG91dCB1c2luZyBXZWJOTi4nKTtsZXQgaj1hd2FpdCB3KHUsayxnKTtaKGosbmV3IFVpbnQ4QXJyYXkodi5idWZmZXIsdi5ieXRlT2Zmc2V0LHYuYnl0ZUxlbmd0aCkpLFQ9an1lbHNlIEk9di5ieXRlTGVuZ3RoLFQ9bC5fbWFsbG9jKEkpLGEucHVzaChUKSxsLkhFQVBVOC5zZXQobmV3IFVpbnQ4QXJyYXkodi5idWZmZXIsdi5ieXRlT2Zmc2V0LEkpLFQpfWVsc2UgST12LmJ5dGVMZW5ndGgsVD1sLl9tYWxsb2MoSSksYS5wdXNoKFQpLGwuSEVBUFU4LnNldChuZXcgVWludDhBcnJheSh2LmJ1ZmZlcix2LmJ5dGVPZmZzZXQsSSksVCl9fWxldCBEPWwuc3RhY2tTYXZlKCksej1sLnN0YWNrQWxsb2MoNCpnLmxlbmd0aCk7dHJ5e2cuZm9yRWFjaCgoTyxGKT0+bC5zZXRWYWx1ZSh6K0YqbSxPLG09PT00P1wiaTMyXCI6XCJpNjRcIikpO2xldCB2PWwuX09ydENyZWF0ZVRlbnNvcihXZShoKSxULEkseixnLmxlbmd0aCxmbyh5KSk7dj09PTAmJkcoYENhbid0IGNyZWF0ZSB0ZW5zb3IgZm9yIGlucHV0L291dHB1dC4gc2Vzc2lvbj0ke3V9LCBpbmRleD0ke2R9LmApLHQucHVzaCh2KX1maW5hbGx5e2wuc3RhY2tSZXN0b3JlKEQpfX0sZ3Q9YXN5bmMobix0LGEsdSxvLGQpPT57bGV0IGM9JCgpLGw9Yy5QVFJfU0laRSxtPSRlLmdldChuKTtpZighbSl0aHJvdyBuZXcgRXJyb3IoYGNhbm5vdCBydW4gaW5mZXJlbmNlLiBpbnZhbGlkIHNlc3Npb24gaWQ6ICR7bn1gKTtsZXQgaD1tWzBdLGc9bVsxXSxiPW1bMl0seT1tWzNdLFQ9bVs0XSxJPW1bNV0sRD10Lmxlbmd0aCx6PXUubGVuZ3RoLHY9MCxPPVtdLEY9W10sXz1bXSxrPVtdLHc9W10sWj1jLnN0YWNrU2F2ZSgpLGo9Yy5zdGFja0FsbG9jKEQqbCksbmU9Yy5zdGFja0FsbG9jKEQqbCkscGU9Yy5zdGFja0FsbG9jKHoqbCksQj1jLnN0YWNrQWxsb2MoeipsKTt0cnl7W3YsT109cm8oZCksRGUoXCJ3YXNtIHByZXBhcmVJbnB1dE91dHB1dFRlbnNvclwiKTtmb3IobGV0IEE9MDtBPEQ7QSsrKWF3YWl0IGxvKGFbQV0sRixrLG4sZ1t0W0FdXSx0W0FdLFQpO2ZvcihsZXQgQT0wO0E8ejtBKyspYXdhaXQgbG8ob1tBXSxfLGssbixiW3VbQV1dLEQrdVtBXSxUKTtVZShcIndhc20gcHJlcGFyZUlucHV0T3V0cHV0VGVuc29yXCIpO2ZvcihsZXQgQT0wO0E8RDtBKyspYy5zZXRWYWx1ZShqK0EqbCxGW0FdLFwiKlwiKSxjLnNldFZhbHVlKG5lK0EqbCxnW3RbQV1dLFwiKlwiKTtmb3IobGV0IEE9MDtBPHo7QSsrKWMuc2V0VmFsdWUocGUrQSpsLF9bQV0sXCIqXCIpLGMuc2V0VmFsdWUoQitBKmwsYlt1W0FdXSxcIipcIik7Yy5qc2VwT25SdW5TdGFydD8uKGgpLGMud2Vibm5PblJ1blN0YXJ0Py4oaCk7bGV0IFc7Vz1hd2FpdCBjLl9PcnRSdW4oaCxuZSxqLEQsQix6LHBlLHYpLFchPT0wJiZHKFwiZmFpbGVkIHRvIGNhbGwgT3J0UnVuKCkuXCIpO2xldCByZT1bXSxtZT1bXTtEZShcIndhc20gUHJvY2Vzc091dHB1dFRlbnNvclwiKTtmb3IobGV0IEE9MDtBPHo7QSsrKXtsZXQgSz1OdW1iZXIoYy5nZXRWYWx1ZShwZStBKmwsXCIqXCIpKTtpZihLPT09X1tBXXx8dy5pbmNsdWRlcyhfW0FdKSl7cmUucHVzaChvW0FdKSxLIT09X1tBXSYmYy5fT3J0UmVsZWFzZVRlbnNvcihLKSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIHRlbnNvci5cIik7Y29udGludWV9bGV0IGplPWMuc3RhY2tTYXZlKCksZWU9Yy5zdGFja0FsbG9jKDQqbCksaGU9ITEsSCxxPTA7dHJ5e2MuX09ydEdldFRlbnNvckRhdGEoSyxlZSxlZStsLGVlKzIqbCxlZSszKmwpIT09MCYmRyhgQ2FuJ3QgYWNjZXNzIG91dHB1dCB0ZW5zb3IgZGF0YSBvbiBpbmRleCAke0F9LmApO2xldCBTZT1sPT09ND9cImkzMlwiOlwiaTY0XCIsdmU9TnVtYmVyKGMuZ2V0VmFsdWUoZWUsU2UpKTtxPWMuZ2V0VmFsdWUoZWUrbCxcIipcIik7bGV0IFZlPWMuZ2V0VmFsdWUoZWUrbCoyLFwiKlwiKSxSZT1OdW1iZXIoYy5nZXRWYWx1ZShlZStsKjMsU2UpKSx0ZT1bXTtmb3IobGV0IEw9MDtMPFJlO0wrKyl0ZS5wdXNoKE51bWJlcihjLmdldFZhbHVlKFZlK0wqbCxTZSkpKTtjLl9PcnRGcmVlKFZlKSE9PTAmJkcoXCJDYW4ndCBmcmVlIG1lbW9yeSBmb3IgdGVuc29yIGRpbXMuXCIpO2xldCB1ZT10ZS5yZWR1Y2UoKEwsVik9PkwqViwxKTtIPU90KHZlKTtsZXQgc2U9eT8ub3V0cHV0UHJlZmVycmVkTG9jYXRpb25zW3VbQV1dO2lmKEg9PT1cInN0cmluZ1wiKXtpZihzZT09PVwiZ3B1LWJ1ZmZlclwifHxzZT09PVwibWwtdGVuc29yXCIpdGhyb3cgbmV3IEVycm9yKFwiU3RyaW5nIHRlbnNvciBpcyBub3Qgc3VwcG9ydGVkIG9uIEdQVS5cIik7bGV0IEw9W107Zm9yKGxldCBWPTA7Vjx1ZTtWKyspe2xldCBmZT1jLmdldFZhbHVlKHErVipsLFwiKlwiKSx5ZT1jLmdldFZhbHVlKHErKFYrMSkqbCxcIipcIiksY2U9Vj09PXVlLTE/dm9pZCAwOnllLWZlO0wucHVzaChjLlVURjhUb1N0cmluZyhmZSxjZSkpfXJlLnB1c2goW0gsdGUsTCxcImNwdVwiXSl9ZWxzZSBpZihzZT09PVwiZ3B1LWJ1ZmZlclwiJiZ1ZT4wKXtsZXQgTD1jLmpzZXBHZXRCdWZmZXI7aWYoIUwpdGhyb3cgbmV3IEVycm9yKCdwcmVmZXJyZWRMb2NhdGlvbiBcImdwdS1idWZmZXJcIiBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgdXNpbmcgV2ViR1BVLicpO2xldCBWPUwocSksZmU9R2UodmUsdWUpO2lmKGZlPT09dm9pZCAwfHwhQXQoSCkpdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBkYXRhIHR5cGU6ICR7SH1gKTtoZT0hMCxyZS5wdXNoKFtILHRlLHtncHVCdWZmZXI6Vixkb3dubG9hZDpjLmpzZXBDcmVhdGVEb3dubG9hZGVyKFYsZmUsSCksZGlzcG9zZTooKT0+e2MuX09ydFJlbGVhc2VUZW5zb3IoSykhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSB0ZW5zb3IuXCIpfX0sXCJncHUtYnVmZmVyXCJdKX1lbHNlIGlmKHNlPT09XCJtbC10ZW5zb3JcIiYmdWU+MCl7bGV0IEw9Yy53ZWJubkVuc3VyZVRlbnNvcixWPWMud2Vibm5Jc0dyYXBoSW5wdXRPdXRwdXRUeXBlU3VwcG9ydGVkO2lmKCFMfHwhVil0aHJvdyBuZXcgRXJyb3IoJ3ByZWZlcnJlZExvY2F0aW9uIFwibWwtdGVuc29yXCIgaXMgbm90IHN1cHBvcnRlZCB3aXRob3V0IHVzaW5nIFdlYk5OLicpO2lmKEdlKHZlLHVlKT09PXZvaWQgMHx8IUl0KEgpKXRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgZGF0YSB0eXBlOiAke0h9YCk7aWYoIVYobixILCExKSl0aHJvdyBuZXcgRXJyb3IoYHByZWZlcnJlZExvY2F0aW9uIFwibWwtdGVuc29yXCIgZm9yICR7SH0gb3V0cHV0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgY3VycmVudCBXZWJOTiBDb250ZXh0LmApO2xldCB5ZT1hd2FpdCBMKG4scSx2ZSx0ZSwhMSk7aGU9ITAscmUucHVzaChbSCx0ZSx7bWxUZW5zb3I6eWUsZG93bmxvYWQ6Yy53ZWJubkNyZWF0ZU1MVGVuc29yRG93bmxvYWRlcihxLEgpLGRpc3Bvc2U6KCk9PntjLndlYm5uUmVsZWFzZVRlbnNvcklkKHEpLGMuX09ydFJlbGVhc2VUZW5zb3IoSyl9fSxcIm1sLXRlbnNvclwiXSl9ZWxzZSBpZihzZT09PVwibWwtdGVuc29yLWNwdS1vdXRwdXRcIiYmdWU+MCl7bGV0IEw9Yy53ZWJubkNyZWF0ZU1MVGVuc29yRG93bmxvYWRlcihxLEgpKCksVj1yZS5sZW5ndGg7aGU9ITAsbWUucHVzaCgoYXN5bmMoKT0+e2xldCBmZT1bVixhd2FpdCBMXTtyZXR1cm4gYy53ZWJublJlbGVhc2VUZW5zb3JJZChxKSxjLl9PcnRSZWxlYXNlVGVuc29yKEspLGZlfSkoKSkscmUucHVzaChbSCx0ZSxbXSxcImNwdVwiXSl9ZWxzZXtsZXQgTD1pbyhIKSxWPW5ldyBMKHVlKTtuZXcgVWludDhBcnJheShWLmJ1ZmZlcixWLmJ5dGVPZmZzZXQsVi5ieXRlTGVuZ3RoKS5zZXQoYy5IRUFQVTguc3ViYXJyYXkocSxxK1YuYnl0ZUxlbmd0aCkpLHJlLnB1c2goW0gsdGUsVixcImNwdVwiXSl9fWZpbmFsbHl7Yy5zdGFja1Jlc3RvcmUoamUpLEg9PT1cInN0cmluZ1wiJiZxJiZjLl9mcmVlKHEpLGhlfHxjLl9PcnRSZWxlYXNlVGVuc29yKEspfX15JiYhVCYmKGMuX09ydENsZWFyQm91bmRPdXRwdXRzKHkuaGFuZGxlKSE9PTAmJkcoXCJDYW4ndCBjbGVhciBib3VuZCBvdXRwdXRzLlwiKSwkZS5zZXQobixbaCxnLGIseSxULCExXSkpO2ZvcihsZXRbQSxLXW9mIGF3YWl0IFByb21pc2UuYWxsKG1lKSlyZVtBXVsyXT1LO3JldHVybiBVZShcIndhc20gUHJvY2Vzc091dHB1dFRlbnNvclwiKSxyZX1maW5hbGx5e2Mud2Vibm5PblJ1bkVuZD8uKGgpLGMuc3RhY2tSZXN0b3JlKFopLEYuZm9yRWFjaChXPT5jLl9PcnRSZWxlYXNlVGVuc29yKFcpKSxfLmZvckVhY2goVz0+Yy5fT3J0UmVsZWFzZVRlbnNvcihXKSksay5mb3JFYWNoKFc9PmMuX2ZyZWUoVykpLHYhPT0wJiZjLl9PcnRSZWxlYXNlUnVuT3B0aW9ucyh2KSxPLmZvckVhY2goVz0+Yy5fZnJlZShXKSl9fSxFdD1uPT57bGV0IHQ9JCgpLGE9JGUuZ2V0KG4pO2lmKCFhKXRocm93IG5ldyBFcnJvcihcImludmFsaWQgc2Vzc2lvbiBpZFwiKTtsZXQgdT1hWzBdLG89dC5fT3J0RW5kUHJvZmlsaW5nKHUpO289PT0wJiZHKFwiQ2FuJ3QgZ2V0IGFuIHByb2ZpbGUgZmlsZSBuYW1lLlwiKSx0Ll9PcnRGcmVlKG8pfSxUdD1uPT57bGV0IHQ9W107Zm9yKGxldCBhIG9mIG4pe2xldCB1PWFbMl07IUFycmF5LmlzQXJyYXkodSkmJlwiYnVmZmVyXCJpbiB1JiZ0LnB1c2godS5idWZmZXIpfXJldHVybiB0fX0pO3ZhciBDZSxpZSxldCxMdCxfdCxCdCxsbixkbix6ZSxIZSxncyxwbyxtbyxobyx3byxibyx5byxnbyxwbj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7VGUoKTtybigpO3hlKCk7cHQoKTtDZT0oKT0+ISFZLndhc20ucHJveHkmJnR5cGVvZiBkb2N1bWVudDxcInVcIixldD0hMSxMdD0hMSxfdD0hMSxkbj1uZXcgTWFwLHplPShuLHQpPT57bGV0IGE9ZG4uZ2V0KG4pO2E/YS5wdXNoKHQpOmRuLnNldChuLFt0XSl9LEhlPSgpPT57aWYoZXR8fCFMdHx8X3R8fCFpZSl0aHJvdyBuZXcgRXJyb3IoXCJ3b3JrZXIgbm90IHJlYWR5XCIpfSxncz1uPT57c3dpdGNoKG4uZGF0YS50eXBlKXtjYXNlXCJpbml0LXdhc21cIjpldD0hMSxuLmRhdGEuZXJyPyhfdD0hMCxsblsxXShuLmRhdGEuZXJyKSk6KEx0PSEwLGxuWzBdKCkpLEJ0JiYoVVJMLnJldm9rZU9iamVjdFVSTChCdCksQnQ9dm9pZCAwKTticmVhaztjYXNlXCJpbml0LWVwXCI6Y2FzZVwiY29weS1mcm9tXCI6Y2FzZVwiY3JlYXRlXCI6Y2FzZVwicmVsZWFzZVwiOmNhc2VcInJ1blwiOmNhc2VcImVuZC1wcm9maWxpbmdcIjp7bGV0IHQ9ZG4uZ2V0KG4uZGF0YS50eXBlKTtuLmRhdGEuZXJyP3Quc2hpZnQoKVsxXShuLmRhdGEuZXJyKTp0LnNoaWZ0KClbMF0obi5kYXRhLm91dCk7YnJlYWt9ZGVmYXVsdDp9fSxwbz1hc3luYygpPT57aWYoIUx0KXtpZihldCl0aHJvdyBuZXcgRXJyb3IoXCJtdWx0aXBsZSBjYWxscyB0byAnaW5pdFdhc20oKScgZGV0ZWN0ZWQuXCIpO2lmKF90KXRocm93IG5ldyBFcnJvcihcInByZXZpb3VzIGNhbGwgdG8gJ2luaXRXYXNtKCknIGZhaWxlZC5cIik7aWYoZXQ9ITAsQ2UoKSlyZXR1cm4gbmV3IFByb21pc2UoKG4sdCk9PntpZT8udGVybWluYXRlKCksZW8oKS50aGVuKChbYSx1XSk9Pnt0cnl7aWU9dSxpZS5vbmVycm9yPWQ9PnQoZCksaWUub25tZXNzYWdlPWdzLGxuPVtuLHRdO2xldCBvPXt0eXBlOlwiaW5pdC13YXNtXCIsaW46WX07IW8uaW4ud2FzbS53YXNtUGF0aHMmJihhfHxhbikmJihvLmluLndhc20ud2FzbVBhdGhzPXt3YXNtOm5ldyBVUkwoXCJvcnQtd2FzbS1zaW1kLXRocmVhZGVkLndhc21cIixpbXBvcnQubWV0YS51cmwpLmhyZWZ9KSxpZS5wb3N0TWVzc2FnZShvKSxCdD1hfWNhdGNoKG8pe3Qobyl9fSx0KX0pO3RyeXthd2FpdCBtdChZLndhc20pLGF3YWl0IGh0KFkpLEx0PSEwfWNhdGNoKG4pe3Rocm93IF90PSEwLG59ZmluYWxseXtldD0hMX19fSxtbz1hc3luYyBuPT57aWYoQ2UoKSlyZXR1cm4gSGUoKSxuZXcgUHJvbWlzZSgodCxhKT0+e3plKFwiaW5pdC1lcFwiLFt0LGFdKTtsZXQgdT17dHlwZTpcImluaXQtZXBcIixpbjp7ZXBOYW1lOm4sZW52Oll9fTtpZS5wb3N0TWVzc2FnZSh1KX0pO2F3YWl0IHd0KFksbil9LGhvPWFzeW5jIG49PkNlKCk/KEhlKCksbmV3IFByb21pc2UoKHQsYSk9Pnt6ZShcImNvcHktZnJvbVwiLFt0LGFdKTtsZXQgdT17dHlwZTpcImNvcHktZnJvbVwiLGluOntidWZmZXI6bn19O2llLnBvc3RNZXNzYWdlKHUsW24uYnVmZmVyXSl9KSk6UWUobiksd289YXN5bmMobix0KT0+e2lmKENlKCkpe2lmKHQ/LnByZWZlcnJlZE91dHB1dExvY2F0aW9uKXRocm93IG5ldyBFcnJvcignc2Vzc2lvbiBvcHRpb24gXCJwcmVmZXJyZWRPdXRwdXRMb2NhdGlvblwiIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHByb3h5LicpO3JldHVybiBIZSgpLG5ldyBQcm9taXNlKChhLHUpPT57emUoXCJjcmVhdGVcIixbYSx1XSk7bGV0IG89e3R5cGU6XCJjcmVhdGVcIixpbjp7bW9kZWw6bixvcHRpb25zOnsuLi50fX19LGQ9W107biBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkmJmQucHVzaChuLmJ1ZmZlciksaWUucG9zdE1lc3NhZ2UobyxkKX0pfWVsc2UgcmV0dXJuIGJ0KG4sdCl9LGJvPWFzeW5jIG49PntpZihDZSgpKXJldHVybiBIZSgpLG5ldyBQcm9taXNlKCh0LGEpPT57emUoXCJyZWxlYXNlXCIsW3QsYV0pO2xldCB1PXt0eXBlOlwicmVsZWFzZVwiLGluOm59O2llLnBvc3RNZXNzYWdlKHUpfSk7eXQobil9LHlvPWFzeW5jKG4sdCxhLHUsbyxkKT0+e2lmKENlKCkpe2lmKGEuc29tZShjPT5jWzNdIT09XCJjcHVcIikpdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgdGVuc29yIG9uIEdQVSBpcyBub3Qgc3VwcG9ydGVkIGZvciBwcm94eS5cIik7aWYoby5zb21lKGM9PmMpKXRocm93IG5ldyBFcnJvcihcInByZS1hbGxvY2F0ZWQgb3V0cHV0IHRlbnNvciBpcyBub3Qgc3VwcG9ydGVkIGZvciBwcm94eS5cIik7cmV0dXJuIEhlKCksbmV3IFByb21pc2UoKGMsbCk9Pnt6ZShcInJ1blwiLFtjLGxdKTtsZXQgbT1hLGg9e3R5cGU6XCJydW5cIixpbjp7c2Vzc2lvbklkOm4saW5wdXRJbmRpY2VzOnQsaW5wdXRzOm0sb3V0cHV0SW5kaWNlczp1LG9wdGlvbnM6ZH19O2llLnBvc3RNZXNzYWdlKGgsVHQobSkpfSl9ZWxzZSByZXR1cm4gZ3Qobix0LGEsdSxvLGQpfSxnbz1hc3luYyBuPT57aWYoQ2UoKSlyZXR1cm4gSGUoKSxuZXcgUHJvbWlzZSgodCxhKT0+e3plKFwiZW5kLXByb2ZpbGluZ1wiLFt0LGFdKTtsZXQgdT17dHlwZTpcImVuZC1wcm9maWxpbmdcIixpbjpufTtpZS5wb3N0TWVzc2FnZSh1KX0pO0V0KG4pfX0pO3ZhciBFbyxFcyxQdCxUbz1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7VGUoKTtwbigpO2ZuKCk7ZHQoKTtjbigpO0VvPShuLHQpPT57c3dpdGNoKG4ubG9jYXRpb24pe2Nhc2VcImNwdVwiOnJldHVybltuLnR5cGUsbi5kaW1zLG4uZGF0YSxcImNwdVwiXTtjYXNlXCJncHUtYnVmZmVyXCI6cmV0dXJuW24udHlwZSxuLmRpbXMse2dwdUJ1ZmZlcjpuLmdwdUJ1ZmZlcn0sXCJncHUtYnVmZmVyXCJdO2Nhc2VcIm1sLXRlbnNvclwiOnJldHVybltuLnR5cGUsbi5kaW1zLHttbFRlbnNvcjpuLm1sVGVuc29yfSxcIm1sLXRlbnNvclwiXTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIGxvY2F0aW9uOiAke24ubG9jYXRpb259IGZvciAke3QoKX1gKX19LEVzPW49Pntzd2l0Y2goblszXSl7Y2FzZVwiY3B1XCI6cmV0dXJuIG5ldyBkZShuWzBdLG5bMl0sblsxXSk7Y2FzZVwiZ3B1LWJ1ZmZlclwiOntsZXQgdD1uWzBdO2lmKCFBdCh0KSl0aHJvdyBuZXcgRXJyb3IoYG5vdCBzdXBwb3J0ZWQgZGF0YSB0eXBlOiAke3R9IGZvciBkZXNlcmlhbGl6aW5nIEdQVSB0ZW5zb3JgKTtsZXR7Z3B1QnVmZmVyOmEsZG93bmxvYWQ6dSxkaXNwb3NlOm99PW5bMl07cmV0dXJuIGRlLmZyb21HcHVCdWZmZXIoYSx7ZGF0YVR5cGU6dCxkaW1zOm5bMV0sZG93bmxvYWQ6dSxkaXNwb3NlOm99KX1jYXNlXCJtbC10ZW5zb3JcIjp7bGV0IHQ9blswXTtpZighSXQodCkpdGhyb3cgbmV3IEVycm9yKGBub3Qgc3VwcG9ydGVkIGRhdGEgdHlwZTogJHt0fSBmb3IgZGVzZXJpYWxpemluZyBNTFRlbnNvciB0ZW5zb3JgKTtsZXR7bWxUZW5zb3I6YSxkb3dubG9hZDp1LGRpc3Bvc2U6b309blsyXTtyZXR1cm4gZGUuZnJvbU1MVGVuc29yKGEse2RhdGFUeXBlOnQsZGltczpuWzFdLGRvd25sb2FkOnUsZGlzcG9zZTpvfSl9ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBsb2NhdGlvbjogJHtuWzNdfWApfX0sUHQ9Y2xhc3N7YXN5bmMgZmV0Y2hNb2RlbEFuZENvcHlUb1dhc21NZW1vcnkodCl7cmV0dXJuIGhvKGF3YWl0IEtlKHQpKX1hc3luYyBsb2FkTW9kZWwodCxhKXtfZSgpO2xldCB1O3R5cGVvZiB0PT1cInN0cmluZ1wiP3U9YXdhaXQgdGhpcy5mZXRjaE1vZGVsQW5kQ29weVRvV2FzbU1lbW9yeSh0KTp1PXQsW3RoaXMuc2Vzc2lvbklkLHRoaXMuaW5wdXROYW1lcyx0aGlzLm91dHB1dE5hbWVzLHRoaXMuaW5wdXRNZXRhZGF0YSx0aGlzLm91dHB1dE1ldGFkYXRhXT1hd2FpdCB3byh1LGEpLFBlKCl9YXN5bmMgZGlzcG9zZSgpe3JldHVybiBibyh0aGlzLnNlc3Npb25JZCl9YXN5bmMgcnVuKHQsYSx1KXtfZSgpO2xldCBvPVtdLGQ9W107T2JqZWN0LmVudHJpZXModCkuZm9yRWFjaCh5PT57bGV0IFQ9eVswXSxJPXlbMV0sRD10aGlzLmlucHV0TmFtZXMuaW5kZXhPZihUKTtpZihEPT09LTEpdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGlucHV0ICcke1R9J2ApO28ucHVzaChJKSxkLnB1c2goRCl9KTtsZXQgYz1bXSxsPVtdO09iamVjdC5lbnRyaWVzKGEpLmZvckVhY2goeT0+e2xldCBUPXlbMF0sST15WzFdLEQ9dGhpcy5vdXRwdXROYW1lcy5pbmRleE9mKFQpO2lmKEQ9PT0tMSl0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgb3V0cHV0ICcke1R9J2ApO2MucHVzaChJKSxsLnB1c2goRCl9KTtsZXQgbT1vLm1hcCgoeSxUKT0+RW8oeSwoKT0+YGlucHV0IFwiJHt0aGlzLmlucHV0TmFtZXNbZFtUXV19XCJgKSksaD1jLm1hcCgoeSxUKT0+eT9Fbyh5LCgpPT5gb3V0cHV0IFwiJHt0aGlzLm91dHB1dE5hbWVzW2xbVF1dfVwiYCk6bnVsbCksZz1hd2FpdCB5byh0aGlzLnNlc3Npb25JZCxkLG0sbCxoLHUpLGI9e307Zm9yKGxldCB5PTA7eTxnLmxlbmd0aDt5KyspYlt0aGlzLm91dHB1dE5hbWVzW2xbeV1dXT1jW3ldPz9FcyhnW3ldKTtyZXR1cm4gUGUoKSxifXN0YXJ0UHJvZmlsaW5nKCl7fWVuZFByb2ZpbGluZygpe2dvKHRoaXMuc2Vzc2lvbklkKX19fSk7dmFyIHZvPXt9O3V0KHZvLHtPbm54cnVudGltZVdlYkFzc2VtYmx5QmFja2VuZDooKT0+RHQsaW5pdGlhbGl6ZUZsYWdzOigpPT5Tbyx3YXNtQmFja2VuZDooKT0+VHN9KTt2YXIgU28sRHQsVHMsT289TigoKT0+e1widXNlIHN0cmljdFwiO1RlKCk7cG4oKTtUbygpO1NvPSgpPT57KHR5cGVvZiBZLndhc20uaW5pdFRpbWVvdXQhPVwibnVtYmVyXCJ8fFkud2FzbS5pbml0VGltZW91dDwwKSYmKFkud2FzbS5pbml0VGltZW91dD0wKTtsZXQgbj1ZLndhc20uc2ltZDtpZih0eXBlb2YgbiE9XCJib29sZWFuXCImJm4hPT12b2lkIDAmJm4hPT1cImZpeGVkXCImJm4hPT1cInJlbGF4ZWRcIiYmKGNvbnNvbGUud2FybihgUHJvcGVydHkgXCJlbnYud2FzbS5zaW1kXCIgaXMgc2V0IHRvIHVua25vd24gdmFsdWUgXCIke259XCIuIFJlc2V0IGl0IHRvIFxcYGZhbHNlXFxgIGFuZCBpZ25vcmUgU0lNRCBmZWF0dXJlIGNoZWNraW5nLmApLFkud2FzbS5zaW1kPSExKSx0eXBlb2YgWS53YXNtLnByb3h5IT1cImJvb2xlYW5cIiYmKFkud2FzbS5wcm94eT0hMSksdHlwZW9mIFkud2FzbS50cmFjZSE9XCJib29sZWFuXCImJihZLndhc20udHJhY2U9ITEpLHR5cGVvZiBZLndhc20ubnVtVGhyZWFkcyE9XCJudW1iZXJcInx8IU51bWJlci5pc0ludGVnZXIoWS53YXNtLm51bVRocmVhZHMpfHxZLndhc20ubnVtVGhyZWFkczw9MClpZih0eXBlb2Ygc2VsZjxcInVcIiYmIXNlbGYuY3Jvc3NPcmlnaW5Jc29sYXRlZClZLndhc20ubnVtVGhyZWFkcz0xO2Vsc2V7bGV0IHQ9dHlwZW9mIG5hdmlnYXRvcj5cInVcIj9xdChcIm5vZGU6b3NcIikuY3B1cygpLmxlbmd0aDpuYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeTtZLndhc20ubnVtVGhyZWFkcz1NYXRoLm1pbig0LE1hdGguY2VpbCgodHx8MSkvMikpfX0sRHQ9Y2xhc3N7YXN5bmMgaW5pdCh0KXtTbygpLGF3YWl0IHBvKCksYXdhaXQgbW8odCl9YXN5bmMgY3JlYXRlSW5mZXJlbmNlU2Vzc2lvbkhhbmRsZXIodCxhKXtsZXQgdT1uZXcgUHQ7cmV0dXJuIGF3YWl0IHUubG9hZE1vZGVsKHQsYSksdX19LFRzPW5ldyBEdH0pO1RlKCk7VGUoKTtUZSgpO3ZhciBHcj1cIjEuMjYuMFwiO3ZhciBhdT1ubjt7bGV0IG49KE9vKCksWHQodm8pKS53YXNtQmFja2VuZDtxZShcImNwdVwiLG4sMTApLHFlKFwid2FzbVwiLG4sMTApfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShZLnZlcnNpb25zLFwid2ViXCIse3ZhbHVlOkdyLGVudW1lcmFibGU6ITB9KTtleHBvcnR7dHMgYXMgSW5mZXJlbmNlU2Vzc2lvbix4ciBhcyBUUkFDRSxEZSBhcyBUUkFDRV9FVkVOVF9CRUdJTixVZSBhcyBUUkFDRV9FVkVOVF9FTkQsX2UgYXMgVFJBQ0VfRlVOQ19CRUdJTixQZSBhcyBUUkFDRV9GVU5DX0VORCxkZSBhcyBUZW5zb3IsYXUgYXMgZGVmYXVsdCxZIGFzIGVudixxZSBhcyByZWdpc3RlckJhY2tlbmR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3J0Lndhc20uYnVuZGxlLm1pbi5tanMubWFwXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gT3ducyBsb2FkaW5nIGFuZCBjb25maWd1cmluZyB0aGUgb25ueHJ1bnRpbWUtd2ViIGVudmlyb25tZW50IGZvciB0aGlzXG4vLyB3b3JrZXIuIFRoZSBsb2FkZXIgaXMgYnVuZGxlZCBpbnRvIHRoaXMgd29ya2VyJ3Mgc2NyaXB0IGJ5IHdlYnBhY2ssIGFuZCBpdHNcbi8vIHB0aHJlYWQgd29ya2VyIGdsdWUgYW5kIHRocmVhZGVkIC53YXNtIGFyZSBlbWl0dGVkIGFzIHdlYnBhY2sgYXNzZXRzIHNlcnZlZFxuLy8gZnJvbSB0aGlzIG9yaWdpbi5cbmltcG9ydCAqIGFzIG9ydCBmcm9tICdvbm54cnVudGltZS13ZWIvd2FzbSdcblxuLy8gVGhlIHRocmVhZGVkIC53YXNtIGlzIGxvY2F0ZWQgYnkgT1JUIG9ubHkgdGhyb3VnaCBvcnQuZW52Lndhc20ud2FzbVBhdGhzIGF0XG4vLyBydW50aW1lLCBhIHN0cmluZyB3ZWJwYWNrIGNhbm5vdCB0cmFjZSwgc28gaXQgaXMgbm90IGVtaXR0ZWQgb24gaXRzIG93bi5cbi8vIEltcG9ydCBpdCBleHBsaWNpdGx5IHNvIHdlYnBhY2sgZW1pdHMgaXQgYW5kIHJldHVybnMgaXRzIFVSTCBmb3Igd2FzbVBhdGhzLlxuaW1wb3J0IHdhc21VcmwgZnJvbSAnb25ueHJ1bnRpbWUtd2ViL29ydC13YXNtLXNpbWQtdGhyZWFkZWQud2FzbSdcblxubGV0IG9ydENvbmZpZ3VyZWQgPSBmYWxzZVxuXG5leHBvcnQgdHlwZSBPcnQgPSB0eXBlb2YgaW1wb3J0KCdvbm54cnVudGltZS13ZWInKVxuZXhwb3J0IHR5cGUgT3J0VGVuc29yID0gaW1wb3J0KCdvbm54cnVudGltZS13ZWInKS5UZW5zb3JcbmV4cG9ydCB0eXBlIE9ydFNlc3Npb24gPSBpbXBvcnQoJ29ubnhydW50aW1lLXdlYicpLkluZmVyZW5jZVNlc3Npb25cbmV4cG9ydCB0eXBlIE9ydFNlc3Npb25PcHRpb25zID1cbiAgaW1wb3J0KCdvbm54cnVudGltZS13ZWInKS5JbmZlcmVuY2VTZXNzaW9uLlNlc3Npb25PcHRpb25zXG5cbi8vIFRoZSB3ZWJwYWNrLWVtaXR0ZWQgd29ya2VyIGdsdWUgT1JUIHN0YXJ0cyBhcyBhIHB0aHJlYWQgV29ya2VyLCBuYW1lZFxuLy8gb3J0Lndhc20uYnVuZGxlLm1pbi48Y29udGVudGhhc2g+LmpzLiBJdCBpcyB0aGUgb25seSBVUkwgdGhhdCBzaG91bGQgcmVhY2hcbi8vIHRoZSBUcnVzdGVkIFR5cGVzIGNyZWF0ZVNjcmlwdFVSTCBob29rLCBwaW5uZWQgYnkgcHJlZml4IGFuZCBzdWZmaXggc2luY2Vcbi8vIHRoZSBjb250ZW50IGhhc2ggdmFyaWVzIHBlciBidWlsZC5cbmNvbnN0IE9SVF9XT1JLRVJfU0NSSVBUX1BSRUZJWCA9ICcvb3J0Lndhc20uYnVuZGxlLm1pbi4nXG5jb25zdCBPUlRfV09SS0VSX1NDUklQVF9TVUZGSVggPSAnLmpzJ1xuXG5jb25zdCBOVU1fVEhSRUFEUyA9IE1hdGgubWluKDQsIHNlbGYubmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgNClcblxuLy8gVHJ1c3RlZCBUeXBlcyBkZWZhdWx0IHBvbGljeTogb25ueHJ1bnRpbWUtd2ViIGNyZWF0ZXMgaXRzIHRocmVhZC1wb29sXG4vLyB3b3JrZXJzIHZpYSBgbmV3IFdvcmtlcig8dXJsIHN0cmluZz4pYCwgd2hpY2ggVHJ1c3RlZCBUeXBlcyByb3V0ZXNcbi8vIHRocm91Z2ggdGhlIGRlZmF1bHQgcG9saWN5LiBBbGxvdyBPTkxZIG91ciBvd24gc2FtZS1vcmlnaW4gd29ya2VyIGdsdWUgYW5kXG4vLyByZWplY3QgZXZlcnl0aGluZyBlbHNlLlxuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbGxUcnVzdGVkVHlwZXNQb2xpY3koKSB7XG4gIGNvbnN0IHR0ID0gKFxuICAgIHNlbGYgYXMgdW5rbm93biBhcyB7XG4gICAgICB0cnVzdGVkVHlwZXM/OiB7XG4gICAgICAgIGNyZWF0ZVBvbGljeTogKG5hbWU6IHN0cmluZywgcnVsZXM6IG9iamVjdCkgPT4gdW5rbm93blxuICAgICAgfVxuICAgIH1cbiAgKS50cnVzdGVkVHlwZXNcbiAgaWYgKCF0dCkge1xuICAgIHJldHVyblxuICB9XG4gIHR0LmNyZWF0ZVBvbGljeSgnZGVmYXVsdCcsIHtcbiAgICBjcmVhdGVTY3JpcHRVUkw6ICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgdSA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKVxuICAgICAgLy8gUGluIHRvIHRoZSBzYW1lLW9yaWdpbiB3ZWJwYWNrLWVtaXR0ZWQgd29ya2VyIGdsdWVcbiAgICAgIC8vIChvcnQud2FzbS5idW5kbGUubWluLjxjb250ZW50aGFzaD4uanMpLiBzZWFyY2ggYW5kIGhhc2ggYXJlIGlnbm9yZWQgc29cbiAgICAgIC8vIGEgY2FjaGUtYnVzdGluZyBxdWVyeSBjYW5ub3QgY2hhbmdlIHRoZSBkZWNpc2lvbi4gRXZlcnl0aGluZyBlbHNlXG4gICAgICAvLyAob3RoZXIgZmlsZXMsIGNyb3NzLW9yaWdpbiwgYmxvYjogVVJMcykgaXMgcmVqZWN0ZWQuXG4gICAgICBpZiAoXG4gICAgICAgIHUub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgJiYgdS5wYXRobmFtZS5zdGFydHNXaXRoKE9SVF9XT1JLRVJfU0NSSVBUX1BSRUZJWClcbiAgICAgICAgJiYgdS5wYXRobmFtZS5lbmRzV2l0aChPUlRfV09SS0VSX1NDUklQVF9TVUZGSVgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVHJ1c3RlZCBUeXBlczogYmxvY2tlZCBzY3JpcHQgVVJMICcgKyB1cmwpXG4gICAgfSxcbiAgfSlcbn1cblxuLy8gQ29uZmlndXJlIHRoZSB0aHJlYWRlZCBXQVNNIGJhY2tlbmQgb25jZSBhbmQgcmV0dXJuIHRoZSBidW5kbGVkIE9SVFxuLy8gbmFtZXNwYWNlLiB3YXNtUGF0aHMud2FzbSBwb2ludHMgT1JUIGF0IHRoZSB3ZWJwYWNrLWVtaXR0ZWQgLndhc20gYXNzZXQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5zdXJlT3J0KCk6IFByb21pc2U8T3J0PiB7XG4gIGlmICghb3J0Q29uZmlndXJlZCkge1xuICAgIG9ydC5lbnYud2FzbS5udW1UaHJlYWRzID0gTlVNX1RIUkVBRFNcbiAgICBvcnQuZW52Lndhc20uc2ltZCA9IHRydWVcbiAgICBvcnQuZW52Lndhc20ud2FzbVBhdGhzID0geyB3YXNtOiB3YXNtVXJsIH1cbiAgICBvcnRDb25maWd1cmVkID0gdHJ1ZVxuICB9XG4gIHJldHVybiBvcnRcbn1cblxuLy8gT1JULVdlYiB0ZW5zb3JzIGJhY2sgdGhlaXIgZGF0YSB3aXRoIFdBU00gbWVtb3J5IHRoYXQgaXMgTk9UIGZyZWVkIGJ5XG4vLyBKUyBHQyBhbG9uZSDigJQgZGlzcG9zZSBpbnB1dHMgYW5kIG91dHB1dHMgYWZ0ZXIgZWFjaCBpbmZlcmVuY2Ugb3IgdGhleVxuLy8gYWNjdW11bGF0ZSBpbiB0aGUgV0FTTSBoZWFwLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3Bvc2VPcnQoXG4gIGlucHV0czogT3J0VGVuc29yW10sXG4gIG91dD86IFJlY29yZDxzdHJpbmcsIE9ydFRlbnNvcj4sXG4pIHtcbiAgZm9yIChjb25zdCB0IG9mIGlucHV0cykge1xuICAgIHRyeSB7XG4gICAgICB0LmRpc3Bvc2UoKVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICB9XG4gIGlmIChvdXQpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gb3V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBvdXRba10uZGlzcG9zZSgpXG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlICovXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gTmVtb3Ryb24gMC42QiBJTlQ0IOKAlCBjYWNoZS1hd2FyZSBzdHJlYW1pbmcgUk5OLVQuXG4vLyBFYWNoIGVuY29kZXIgc3RlcCBhZHZhbmNlcyBieSA1NjAgbXM6IDU2IG5ldyBtZWwgZnJhbWVzIHBsdXMgOVxuLy8gcHJlLWVuY29kZSBsZWZ0LWNvbnRleHQgZnJhbWVzLiBDb25mb3JtZXIgY2FjaGVzIGFyZSBjYXJyaWVkIGJldHdlZW5cbi8vIHN0ZXBzLCBhbmQgZml4ZWQgaW5wdXQvY2FjaGUgc2hhcGVzIGtlZXAgdGhlIGVuY29kZXIgY29zdCBjb25zdGFudCBwZXIgc3RlcC5cblxuLy8gZnJvbnRlbmQgY29uc3RhbnRzXG5leHBvcnQgdHlwZSBGZnRTaXplID1cbiAgfCAzMlxuICB8IDY0XG4gIHwgMTI4XG4gIHwgMjU2XG4gIHwgNTEyXG4gIHwgMTAyNFxuICB8IDIwNDhcbiAgfCA0MDk2XG4gIHwgODE5MlxuICB8IDE2Mzg0XG4gIHwgMzI3NjggLy8gc2hvdWxkIGJlIGEgcG93ZXIgb2YgMlxuZXhwb3J0IHR5cGUgRmZ0U3RhdGUgPSB7XG4gIG46IG51bWJlclxuICBiaXRSZXY6IFVpbnQxNkFycmF5XG4gIHJlYWw6IEZsb2F0MzJBcnJheVxuICBpbWFnOiBGbG9hdDMyQXJyYXlcbiAgcG93ZXI6IEZsb2F0MzJBcnJheVxuICBmcmFtZTogRmxvYXQzMkFycmF5XG59XG5cbmV4cG9ydCBjb25zdCBUQVJHRVRfU0FNUExFX1JBVEUgPSAxNjAwMFxuZXhwb3J0IGNvbnN0IFdJTl9MRU5HVEg6IG51bWJlciA9IDQwMFxuZXhwb3J0IGNvbnN0IE5fRkZUOiBudW1iZXIgPSA1MTJcbmV4cG9ydCBjb25zdCBIT1BfTEVOR1RIOiBudW1iZXIgPSAxNjAgLy8gbWVsIGhvcCBpbiBzYW1wbGVzICgxMCBtcyBAIDE2IGtIeilcbmV4cG9ydCBjb25zdCBOX01FTFM6IG51bWJlciA9IDEyOFxuZXhwb3J0IGNvbnN0IFBSRUVNUEg6IG51bWJlciA9IDAuOTdcbmV4cG9ydCBjb25zdCBMT0dfWkVST19HVUFSRDogbnVtYmVyID0gNS45NjA0NjQ1ZS04XG5cbi8vLy8vLy8vLy8gUEFEIEJFR0lOIC8vLy8vLy8vLy8vL1xuLy8gWmVybyBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIHJhdyBhdWRpbyBiZWZvcmUgZnJhbWluZyBmb3IgRkZUIGNhY3VsYXRpb25zLlxuLy8gUEFEIG51bSBvZiBsZWZ0LXBhZGRpbmcgaXMgYXBwbGllZCBvbmNlIHBlciBhdWRpbyBzdHJlYW0sIGF0IHRoZSBiZWdpbm5pbmcuXG4vLyBUaGlzIGlzIGZvciBkb2luZyAnY2VudGVyZWQgZnJhbWluZycgZm9yIHRoZSBmaXJzdCBGRlQgZnJhbWUuIE90aGVyd2lzZSB0aGUgZmlyc3QgZmV3IHJhdyBhdWRpbyBzYW1wbGVzXG4vLyB3b3VsZCBsaWUgbmVhciB0aGUgbGVmdCBlZGdlIG9mIHRoZSBIYW5uIHdpbmRvdyxtd2hlcmUgdGhlIHdpbmRvdyBjb2VmZmljaWVudHMgYXJlIGNsb3NlIHRvIHplcm8sXG4vLyBzdHJvbmdseSBhdHRlbnVhdGluZyB0aGVpciBjb250cmlidXRpb24gdG8gdGhlIHJlc3VsdGluZyBzcGVjdHJ1bS5cblxuZXhwb3J0IGNvbnN0IFBBRCA9IE5fRkZUID4+IDEgLy8gMjU2XG5cbi8vLy8vLy8vLy8gUEFEIEVORCAvLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLyBPRkZTRVQgQkVHSU4gLy8vLy8vLy8vLy8vXG4vLyBXZSB0YWtlIFdJTl9MRU5HVEggcmVhbCBhdWRpbyBzYW1wbGVzLCBtdWx0aXBseSB0aGVtIGJ5IGEgV0lOX0xFTkdUSCBwb2ludCBIYW5uIHdpbmRvd1xuLy8gYW5kIHBsYWNlIHRoZSByZXN1bHQgaW4gdGhlIG1pZGRsZSBvZiBhbiBGRlQgYnVmZmVyIG9mIE5fRkZUIG51bS4gb2YgZWxlbWVudHMuXG4vLyBPRkYgdGVsbHMgdXMgd2hlcmUgdGhlIHJlYWwgV0lOX0xFTkdUSC1zYW1wbGUgd2luZG93IGJlZ2lucyBpbnNpZGUgdGhlIEZGVCBidWZmZXIuXG5cbmV4cG9ydCBjb25zdCBPRkYgPSAoTl9GRlQgLSBXSU5fTEVOR1RIKSA+PiAxIC8vIDU2XG5cbi8vIFNvLCBhIDUxMi1wb2ludCBGRlQgYnVmZmVyIHdvdWxkIGJlOlxuLy8gfCA1NiB6ZXJvcyB8IDQwMCB3aW5kb3dlZCBhdWRpbyBzYW1wbGVzIHwgNTYgemVyb3MgfFxuLy8gMCAgICAgICAgIE9GRiAgICAgICAgICAgICAgICAgKFdJTl9MRU5HVEggKyBPRkYpICBOX0ZGVFxuLy8vLy8vLy8vLyBPRkZTRVQgRU5EIC8vLy8vLy8vLy8vL1xuXG4vLyBBIHN0cmVhbWluZyBtZWwgZnJhbWUgaXMgc3RhYmxlIG9uY2UgdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHJlYWwgSGFubiB3aW5kb3dcbi8vIGlzIGF2YWlsYWJsZS4gQ3VycmVudGx5IHRoZSBXSU5fTEVOR1RIIHdpbmRvdyBhdCBPRkZcbi8vIGluc2lkZSB0aGUgTl9GRlQgZnJhbWUsIHNvIHJhdyB3aW5kb3cgaXM6XG4vLyBbZiAqIEhPUF9MRU5HVEggLSBQQUQgKyBPRkYsIGYgKiBIT1BfTEVOR1RIIC0gUEFEICsgT0ZGICsgV0lOX0xFTkdUSClcbmV4cG9ydCBjb25zdCBTVFJFQU1JTkdfUklHSFRfQ09OVEVYVDogbnVtYmVyID0gT0ZGICsgV0lOX0xFTkdUSCAtIFBBRFxuXG4vLyBtb2RlbCBzcGVjaWZpYyBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBORU1PX0NIVU5LOiBudW1iZXIgPSA1NiAvLyBuZXcgbWVsIGZyYW1lcyBwZXIgc3RlcCAoNTYwIG1zIEAgMTAgbXMgaG9wKVxuZXhwb3J0IGNvbnN0IE5FTU9fUFJFQ0FDSEU6IG51bWJlciA9IDkgLy8gcHJlLWVuY29kZSBtZWwgY2FjaGUgZnJhbWVzIHByZXBlbmRlZFxuZXhwb3J0IGNvbnN0IE5FTU9fQkxBTks6IG51bWJlciA9IDEwMjRcbmV4cG9ydCBjb25zdCBORU1PX1ZPQ0FCOiBudW1iZXIgPSAxMDI1IC8vIDEwMjQgKyBibGFua1xuZXhwb3J0IGNvbnN0IE5FTU9fTUFYX1NZTTogbnVtYmVyID0gMTBcbmV4cG9ydCBjb25zdCBORU1PX0ZSQU1FUzogbnVtYmVyID0gTkVNT19QUkVDQUNIRSArIE5FTU9fQ0hVTksgLy8gNjU6IGZpeGVkIGVuY29kZXIgaW5wdXQgbGVuZ3RoXG5leHBvcnQgY29uc3QgTkVNT19OVU1fRU5DT0RFUl9MQVlFUlM6IG51bWJlciA9IDI0XG5leHBvcnQgY29uc3QgTkVNT19ISURERU5fRElNOiBudW1iZXIgPSAxMDI0XG4vLyBub3RlIHRoYXQgdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBsZWZ0IGNvbnRleHQgYXQgbWVsIGxldmVsO1xuLy8gaXRzIG51bSBvZiBmcmFtZXMgaW4gdGhlIGxlZnQgY29udGV4dCBvZiBlbmNvZGVyJ3MgYXR0ZW50aW9uIGJsb2NrcydcbmV4cG9ydCBjb25zdCBORU1PX0xFRlRfQ09OVEVYVDogbnVtYmVyID0gNzBcbi8vIGl0cyBudW0gb2YgZnJhbWVzIGluIHRoZSBsZWZ0IGNvbnRleHQgb2YgZW5jb2RlcidzIGNvbnYgYmxvY2tzJ1xuZXhwb3J0IGNvbnN0IE5FTU9fQ09OVl9DT05URVhUOiBudW1iZXIgPSA4XG5leHBvcnQgY29uc3QgTkVNT19ERUNPREVSX0xTVE1fRElNOiBudW1iZXIgPSA2NDBcblxuLy8gT24gZmluaXNoLCBhcHBlbmQgdGhpcyBtYW55IGNodW5rcyBvZiBzaWxlbmNlIHNvIHRoZSBjYWNoZS1hd2FyZSBlbmNvZGVyXG4vLyBhbmQgUk5OLVQgZGVjb2RlciBmbHVzaCB0aGUgZmluYWwgcGFydGlhbCBjaHVuayDigJQgd2l0aG91dCBpdCB0aGUgdHJhaWxpbmdcbi8vIHdvcmQocykgY2FuIGJlIGRyb3BwZWQgdG8gcmlnaHQtY29udGV4dCAvIGVtaXNzaW9uIGxhZy4gVGhlIHNpbGVuY2UgZnJhbWVzXG4vLyBkZWNvZGUgdG8gUk5OLVQgYmxhbmtzLCBzbyB0aGUgdHJhbnNjcmlwdCBpcyB1bmFmZmVjdGVkLlxuZXhwb3J0IGNvbnN0IFNJTEVOQ0VfRkxVU0hfQ0hVTktTOiBudW1iZXIgPSAzXG5cbi8vIFNpbGVuY2UgZmVkIGJlZm9yZSB0aGUgZmlyc3QgcmVhbCBzYW1wbGUuIFRoZSBleHBvcnRlZCBPTk5YIGVuY29kZXIgZ3JhcGhcbi8vIGRyb3BzIHRoZSBmaXJzdCAyIHRpbWUgZnJhbWVzIG9mIGl0cyBwcmUtZW5jb2RlIG91dHB1dC4gVGhpcyBoYXBwZW5zIGluc2lkZVxuLy8gdGhlIGdyYXBoLCBub3QgaW4gb3VyIHN0cmVhbWluZyBjb2RlLiBJdCBzaGlmdHMgdGhlIG91dHB1dCBncmlkIG9mZiB0aGVcbi8vIHN0YXJ0IG9mIHRoZSBhdWRpbywgc28gYSBzaG9ydCB3b3JkIHRoYXQgYmVnaW5zIHdpdGhpbiB0aGUgZmlyc3QgfjgwIG1zIG9mXG4vLyB0aGUgc3RyZWFtIGNhbiBiZSBsb3N0LCB3aGF0ZXZlciB0aGUgYXVkaW8gc291cmNlLiBOVklESUEncyBOZW1vdHJvblxuLy8gc3RyZWFtaW5nIHJlbGVhc2Ugbm90ZXMgcmVjb21tZW5kIHRoaXMgc2FtZSBsZWFkLWluLlxuZXhwb3J0IGNvbnN0IExFQURJTkdfU0lMRU5DRV9NUzogbnVtYmVyID0gODBcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWdzJ1xuaW1wb3J0IHR5cGUgeyBGZnRTaXplLCBGZnRTdGF0ZSB9IGZyb20gJy4vY29uZmlncydcblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ01lbEZyb250ZW5kRGVidWdTdGF0ZSB7XG4gIC8vIFRvdGFsIG51bWJlciBvZiByYXcgUENNIHNhbXBsZXMgYXBwZW5kZWQgc2luY2UgdGhlIHN0cmVhbSBzdGFydGVkLlxuICByYXdTYW1wbGVzUmVjZWl2ZWQ6IG51bWJlclxuXG4gIC8vIEFic29sdXRlIHNhbXBsZSBpbmRleCByZXByZXNlbnRlZCBieSByYXdBdWRpb1swXS5cbiAgcmF3QmFzZVNhbXBsZTogbnVtYmVyXG5cbiAgLy8gTnVtYmVyIG9mIHJhdyBQQ00gc2FtcGxlcyBjdXJyZW50bHkgcmV0YWluZWQgaW4gbWVtb3J5LlxuICByYXdCdWZmZXJlZFNhbXBsZXM6IG51bWJlclxuXG4gIC8vIEFic29sdXRlIG1lbC1mcmFtZSBpbmRleCByZXByZXNlbnRlZCBieSBtZWxGcmFtZXNbMF0uXG4gIG1lbEZyYW1lQmFzZTogbnVtYmVyXG5cbiAgLy8gTnVtYmVyIG9mIGNvbXB1dGVkIG1lbCBmcmFtZXMgY3VycmVudGx5IHJldGFpbmVkIGluIG1lbW9yeSxcbiAgLy8gaW5jbHVkaW5nIGZyYW1lcyBrZXB0IGZvciBwcmUtZW5jb2RlIGNvbnRleHQuXG4gIG1lbEJ1ZmZlcmVkRnJhbWVzOiBudW1iZXJcblxuICAvLyBBYnNvbHV0ZSBpbmRleCBvZiB0aGUgbmV4dCBtZWwgZnJhbWUgdGhhdCBoYXMgbm90IHlldCBiZWVuIGNvbXB1dGVkLlxuICBuZXh0TWVsRnJhbWU6IG51bWJlclxuXG4gIC8vIEFic29sdXRlIGluZGV4IG9mIHRoZSBmaXJzdCBuZXcgbWVsIGZyYW1lIGluIHRoZSBuZXh0IGVuY29kZXIgY2h1bmsuXG4gIG5leHRDaHVua0ZyYW1lOiBudW1iZXJcblxuICAvLyBOdW1iZXIgb2YgY29tcHV0ZWQsIHN0YWJsZSBtZWwgZnJhbWVzIG5vdCB5ZXQgY29uc3VtZWQgYXMgbmV3XG4gIC8vIGVuY29kZXIgaW5wdXQgZnJhbWVzLlxuICBzdGFibGVCYWNrbG9nRnJhbWVzOiBudW1iZXJcblxuICAvLyBOdW1iZXIgb2YgY29tcGxldGUgTkVNT19DSFVOSy1zaXplZCBlbmNvZGVyIGlucHV0cyBjdXJyZW50bHkgcmVhZHkuXG4gIGNodW5rc1JlYWR5OiBudW1iZXJcblxuICAvLyBBcHByb3hpbWF0ZSBkdXJhdGlvbiBvZiBzdGFibGVCYWNrbG9nRnJhbWVzIGluIG1pbGxpc2Vjb25kcy5cbiAgZXN0aW1hdGVkU3RhYmxlQmFja2xvZ01zOiBudW1iZXJcbn1cblxuXG4vLyBzdGFuZGFyZCBzeW1tZXRyaWMgSGFubiB3aW5kb3c7IGZvbGxvd2luZyBOZU1vJ3MgaW1wbGVtZW50YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBoYW5uV2luZG93KCk6IEZsb2F0MzJBcnJheSB7XG4gIHJldHVybiBGbG9hdDMyQXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aDogY29uZmlnLldJTl9MRU5HVEggfSxcbiAgICAoXywgaSkgPT4gMC41IC0gMC41ICogTWF0aC5jb3MoKDIgKiBNYXRoLlBJICogaSkgLyAoY29uZmlnLldJTl9MRU5HVEggLSAxKSksXG4gIClcbn1cblxuLy8gSW5pdGlhbGl6ZXMgcmV1c2FibGUgc3RhdGUgYW5kIHdvcmtpbmcgYnVmZmVycyBmb3IgYSByYWRpeC0yXG4vLyBDb29sZXnigJNUdWtleSBGRlQsIGluY2x1ZGluZyBhIGJpdC1yZXZlcnNhbCBsb29rdXAgdGFibGUuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZmdFBvd2VyKG46IEZmdFNpemUpOiBGZnRTdGF0ZSB7XG4gIGlmICgobiAmIChuIC0gMSkpICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBOX0ZGVCBtdXN0IGJlIGEgcG93ZXIgb2YgdHdvLCBnb3QgJHtufWApXG4gIH1cblxuICBjb25zdCBiaXRzID0gTWF0aC5sb2cyKG4pXG4gIGNvbnN0IGJpdFJldiA9IG5ldyBVaW50MTZBcnJheShuKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgbGV0IHggPSBpXG4gICAgbGV0IHkgPSAwXG5cbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJpdHM7IGIrKykge1xuICAgICAgeSA9ICh5IDw8IDEpIHwgKHggJiAxKVxuICAgICAgeCA+Pj0gMVxuICAgIH1cblxuICAgIGJpdFJldltpXSA9IHlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbixcbiAgICBiaXRSZXYsXG4gICAgcmVhbDogbmV3IEZsb2F0MzJBcnJheShuKSxcbiAgICBpbWFnOiBuZXcgRmxvYXQzMkFycmF5KG4pLFxuICAgIHBvd2VyOiBuZXcgRmxvYXQzMkFycmF5KG4gLyAyICsgMSksXG4gICAgZnJhbWU6IG5ldyBGbG9hdDMyQXJyYXkobiksXG4gIH1cbn1cblxuLy8gQ29tcHV0ZSBwb3dlciBzcGVjdHJ1bSBmcm9tIGEgcmVhbC12YWx1ZWQgTl9GRlQgZnJhbWUuXG5leHBvcnQgZnVuY3Rpb24gZmZ0UG93ZXIoZmZ0OiBGZnRTdGF0ZSk6IEZsb2F0MzJBcnJheSB7XG4gIGNvbnN0IHsgbiwgcmVhbCwgaW1hZywgYml0UmV2LCBmcmFtZSB9ID0gZmZ0XG5cbiAgLy8gQml0LXJldmVyc2VkIGNvcHkgb2YgcmVhbCBpbnB1dC5cbiAgLy8gZnJhbWUgaXMgZXhwZWN0ZWQgdG8gaGF2ZSBsZW5ndGggTl9GRlQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgcmVhbFtpXSA9IGZyYW1lW2JpdFJldltpXV1cbiAgICBpbWFnW2ldID0gMC4wXG4gIH1cblxuICAvLyBJdGVyYXRpdmUgcmFkaXgtMiBDb29sZXktVHVrZXkgRkZULlxuICAvLyBUaGlzIG1hdGNoZXMgdGhlIGZvcndhcmQgdHJhbnNmb3JtOlxuICAvLyBYW2tdID0gc3VtX24geFtuXSAqIGV4cCgtaiAqIDLPgGtuL04pXG4gIGZvciAobGV0IGxlbiA9IDI7IGxlbiA8PSBuOyBsZW4gPDw9IDEpIHtcbiAgICBjb25zdCBoYWxmTGVuID0gbGVuID4+IDFcbiAgICBjb25zdCBhbmdsZSA9ICgtMi4wICogTWF0aC5QSSkgLyBsZW5cbiAgICBjb25zdCB3TGVuUmVhbCA9IE1hdGguY29zKGFuZ2xlKVxuICAgIGNvbnN0IHdMZW5JbWFnID0gTWF0aC5zaW4oYW5nbGUpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gbGVuKSB7XG4gICAgICBsZXQgd1JlYWwgPSAxLjBcbiAgICAgIGxldCB3SW1hZyA9IDAuMFxuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhhbGZMZW47IGorKykge1xuICAgICAgICBjb25zdCBldmVuSW5kZXggPSBpICsgalxuICAgICAgICBjb25zdCBvZGRJbmRleCA9IGV2ZW5JbmRleCArIGhhbGZMZW5cblxuICAgICAgICBjb25zdCBvZGRSZWFsID0gcmVhbFtvZGRJbmRleF1cbiAgICAgICAgY29uc3Qgb2RkSW1hZyA9IGltYWdbb2RkSW5kZXhdXG5cbiAgICAgICAgY29uc3QgdlJlYWwgPSBvZGRSZWFsICogd1JlYWwgLSBvZGRJbWFnICogd0ltYWdcbiAgICAgICAgY29uc3QgdkltYWcgPSBvZGRSZWFsICogd0ltYWcgKyBvZGRJbWFnICogd1JlYWxcblxuICAgICAgICBjb25zdCB1UmVhbCA9IHJlYWxbZXZlbkluZGV4XVxuICAgICAgICBjb25zdCB1SW1hZyA9IGltYWdbZXZlbkluZGV4XVxuXG4gICAgICAgIHJlYWxbZXZlbkluZGV4XSA9IHVSZWFsICsgdlJlYWxcbiAgICAgICAgaW1hZ1tldmVuSW5kZXhdID0gdUltYWcgKyB2SW1hZ1xuXG4gICAgICAgIHJlYWxbb2RkSW5kZXhdID0gdVJlYWwgLSB2UmVhbFxuICAgICAgICBpbWFnW29kZEluZGV4XSA9IHVJbWFnIC0gdkltYWdcblxuICAgICAgICBjb25zdCBuZXh0V1JlYWwgPSB3UmVhbCAqIHdMZW5SZWFsIC0gd0ltYWcgKiB3TGVuSW1hZ1xuICAgICAgICBjb25zdCBuZXh0V0ltYWcgPSB3UmVhbCAqIHdMZW5JbWFnICsgd0ltYWcgKiB3TGVuUmVhbFxuXG4gICAgICAgIHdSZWFsID0gbmV4dFdSZWFsXG4gICAgICAgIHdJbWFnID0gbmV4dFdJbWFnXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG93ZXIgPSBmZnQucG93ZXJcbiAgY29uc3QgYmlucyA9IG4gLyAyICsgMVxuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgYmluczsgaysrKSB7XG4gICAgcG93ZXJba10gPSByZWFsW2tdICogcmVhbFtrXSArIGltYWdba10gKiBpbWFnW2tdXG4gIH1cblxuICByZXR1cm4gcG93ZXJcbn1cblxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ01lbEZyb250ZW5kIHtcbiAgcHJpdmF0ZSByYXdBdWRpbzogbnVtYmVyW10gPSBbXVxuICBwcml2YXRlIHJhd0Jhc2VTYW1wbGUgPSAwXG4gIHByaXZhdGUgcmF3U2FtcGxlc1JlY2VpdmVkID0gMFxuXG4gIHByaXZhdGUgbWVsRnJhbWVzOiBGbG9hdDMyQXJyYXlbXSA9IFtdXG4gIHByaXZhdGUgZnJlZU1lbEZyYW1lczogRmxvYXQzMkFycmF5W10gPSBbXVxuXG4gIHByaXZhdGUgYWNxdWlyZU1lbEZyYW1lKCk6IEZsb2F0MzJBcnJheSB7XG4gICAgcmV0dXJuIHRoaXMuZnJlZU1lbEZyYW1lcy5wb3AoKSA/PyBuZXcgRmxvYXQzMkFycmF5KGNvbmZpZy5OX01FTFMpXG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VNZWxGcmFtZShmcmFtZTogRmxvYXQzMkFycmF5KSB7XG4gICAgZnJhbWUuZmlsbCgwKVxuICAgIHRoaXMuZnJlZU1lbEZyYW1lcy5wdXNoKGZyYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBtZWxGcmFtZUJhc2UgPSAwXG4gIHByaXZhdGUgbmV4dE1lbEZyYW1lID0gMFxuICBwcml2YXRlIG5leHRDaHVua0ZyYW1lID0gMFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmJhbms6IEZsb2F0MzJBcnJheSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhhbm46IEZsb2F0MzJBcnJheSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZmdFByZTogRmZ0U3RhdGUsXG4gICkge31cblxuICBhcHBlbmRBdWRpb1NhbXBsZXMoc2FtcGxlczogRmxvYXQzMkFycmF5KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnJhd0F1ZGlvLnB1c2goc2FtcGxlc1tpXSlcbiAgICB9XG5cbiAgICB0aGlzLnJhd1NhbXBsZXNSZWNlaXZlZCArPSBzYW1wbGVzLmxlbmd0aFxuICAgIHRoaXMuYXBwZW5kU3RhYmxlTWVsRnJhbWVzKClcbiAgICB0aGlzLnRyaW1PbGRCdWZmZXJzKClcbiAgfVxuXG4gIGhhc0Z1bGxDaHVuaygpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0TWVsRnJhbWUgLSB0aGlzLm5leHRDaHVua0ZyYW1lID49IGNvbmZpZy5ORU1PX0NIVU5LXG4gIH1cblxuICBtYWtlTmV4dEVuY29kZXJJbnB1dCgpOiBGbG9hdDMyQXJyYXkge1xuICAgIGlmICghdGhpcy5oYXNGdWxsQ2h1bmsoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgZW5vdWdoIHN0YWJsZSBtZWwgZnJhbWVzIGZvciBhbm90aGVyIGVuY29kZXIgY2h1bmsnKVxuICAgIH1cblxuICAgIGNvbnN0IGNodW5rID0gbmV3IEZsb2F0MzJBcnJheShjb25maWcuTl9NRUxTICogY29uZmlnLk5FTU9fRlJBTUVTKVxuICAgIGNvbnN0IG1haW5TdGFydCA9IHRoaXMubmV4dENodW5rRnJhbWVcblxuICAgIC8vIExlZnQgcHJlLWVuY29kZSBtZWwgY2FjaGUuIEZvciB0aGUgZmlyc3QgY2h1bmssIHRoaXMgbGVhdmVzIHRoZSBmaXJzdFxuICAgIC8vIE5FTU9fUFJFQ0FDSEUgY29sdW1ucyBhcyB6ZXJvcy5cbiAgICBjb25zdCBjYWNoZVN0YXJ0ID0gTWF0aC5tYXgoMCwgbWFpblN0YXJ0IC0gY29uZmlnLk5FTU9fUFJFQ0FDSEUpXG4gICAgY29uc3QgY2FjaGVGcmFtZXMgPSBtYWluU3RhcnQgLSBjYWNoZVN0YXJ0XG4gICAgY29uc3QgY2FjaGVPZmZzZXQgPSBjb25maWcuTkVNT19QUkVDQUNIRSAtIGNhY2hlRnJhbWVzXG5cbiAgICBmb3IgKGxldCBmID0gMDsgZiA8IGNhY2hlRnJhbWVzOyBmKyspIHtcbiAgICAgIHRoaXMuY29weU1lbEZyYW1lVG9FbmNvZGVyQ2h1bmsoXG4gICAgICAgIGNodW5rLFxuICAgICAgICBjYWNoZU9mZnNldCArIGYsXG4gICAgICAgIHRoaXMuZ2V0TWVsRnJhbWUoY2FjaGVTdGFydCArIGYpLFxuICAgICAgKVxuICAgIH1cblxuICAgIGZvciAobGV0IGYgPSAwOyBmIDwgY29uZmlnLk5FTU9fQ0hVTks7IGYrKykge1xuICAgICAgdGhpcy5jb3B5TWVsRnJhbWVUb0VuY29kZXJDaHVuayhcbiAgICAgICAgY2h1bmssXG4gICAgICAgIGNvbmZpZy5ORU1PX1BSRUNBQ0hFICsgZixcbiAgICAgICAgdGhpcy5nZXRNZWxGcmFtZShtYWluU3RhcnQgKyBmKSxcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtcbiAgfVxuXG4gIGNvbnN1bWVDaHVuaygpIHtcbiAgICBpZiAoIXRoaXMuaGFzRnVsbENodW5rKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNvbnN1bWUgYW4gaW5jb21wbGV0ZSBtZWwgY2h1bmsnKVxuICAgIH1cbiAgICB0aGlzLm5leHRDaHVua0ZyYW1lICs9IGNvbmZpZy5ORU1PX0NIVU5LXG4gICAgdGhpcy50cmltT2xkQnVmZmVycygpXG4gIH1cblxuICAvLyBaZXJvIGV2ZXJ5IGJ1ZmZlciBob2xkaW5nIGF1ZGlvIG9yIGFjb3VzdGljIGZlYXR1cmVzIGFuZCByZXNldCB0aGVcbiAgLy8gZnJvbnRlbmQgdG8gZW1wdHkuIENhbGxlZCBhdCBzZXNzaW9uIGVuZCBzbyB0aGUgdXR0ZXJhbmNlIGRvZXMgbm90XG4gIC8vIHBlcnNpc3QgaW4gdGhlIEpTIGhlYXAgdW50aWwgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICB3aXBlKCkge1xuICAgIHRoaXMucmF3QXVkaW8uZmlsbCgwKVxuICAgIHRoaXMucmF3QXVkaW8ubGVuZ3RoID0gMFxuICAgIGZvciAoY29uc3QgZnJhbWUgb2YgdGhpcy5tZWxGcmFtZXMpIHtcbiAgICAgIGZyYW1lLmZpbGwoMClcbiAgICB9XG4gICAgdGhpcy5tZWxGcmFtZXMubGVuZ3RoID0gMFxuICAgIHRoaXMucmF3QmFzZVNhbXBsZSA9IDBcbiAgICB0aGlzLnJhd1NhbXBsZXNSZWNlaXZlZCA9IDBcbiAgICB0aGlzLm1lbEZyYW1lQmFzZSA9IDBcbiAgICB0aGlzLm5leHRNZWxGcmFtZSA9IDBcbiAgICB0aGlzLm5leHRDaHVua0ZyYW1lID0gMFxuICAgIHRoaXMuZmZ0UHJlLmZyYW1lLmZpbGwoMClcbiAgICB0aGlzLmZmdFByZS5yZWFsLmZpbGwoMClcbiAgICB0aGlzLmZmdFByZS5pbWFnLmZpbGwoMClcbiAgICB0aGlzLmZmdFByZS5wb3dlci5maWxsKDApXG4gIH1cblxuXG4gIGRlYnVnU3RhdGUoKTogU3RyZWFtaW5nTWVsRnJvbnRlbmREZWJ1Z1N0YXRlIHtcbiAgICBjb25zdCBzdGFibGVCYWNrbG9nRnJhbWVzID0gdGhpcy5uZXh0TWVsRnJhbWUgLSB0aGlzLm5leHRDaHVua0ZyYW1lXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmF3U2FtcGxlc1JlY2VpdmVkOiB0aGlzLnJhd1NhbXBsZXNSZWNlaXZlZCxcbiAgICAgIHJhd0Jhc2VTYW1wbGU6IHRoaXMucmF3QmFzZVNhbXBsZSxcbiAgICAgIHJhd0J1ZmZlcmVkU2FtcGxlczogdGhpcy5yYXdBdWRpby5sZW5ndGgsXG5cbiAgICAgIG1lbEZyYW1lQmFzZTogdGhpcy5tZWxGcmFtZUJhc2UsXG4gICAgICBtZWxCdWZmZXJlZEZyYW1lczogdGhpcy5tZWxGcmFtZXMubGVuZ3RoLFxuICAgICAgbmV4dE1lbEZyYW1lOiB0aGlzLm5leHRNZWxGcmFtZSxcbiAgICAgIG5leHRDaHVua0ZyYW1lOiB0aGlzLm5leHRDaHVua0ZyYW1lLFxuXG4gICAgICBzdGFibGVCYWNrbG9nRnJhbWVzLFxuICAgICAgY2h1bmtzUmVhZHk6IE1hdGguZmxvb3Ioc3RhYmxlQmFja2xvZ0ZyYW1lcyAvIGNvbmZpZy5ORU1PX0NIVU5LKSxcbiAgICAgIGVzdGltYXRlZFN0YWJsZUJhY2tsb2dNczpcbiAgICAgICAgKHN0YWJsZUJhY2tsb2dGcmFtZXMgKiBjb25maWcuSE9QX0xFTkdUSCAqIDEwMDApXG4gICAgICAgIC8gY29uZmlnLlRBUkdFVF9TQU1QTEVfUkFURSxcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgYXBwZW5kU3RhYmxlTWVsRnJhbWVzKCkge1xuICAgIC8vIEJ5ICdzdGFibGUnIG1lbCBmcmFtZSwgd2UgbWVhbiBhIG1lbCBmcmFtZSB3aG9zZSByZXF1aXJlZCByYXcgYXVkaW9cbiAgICAvLyBzYW1wbGVzIGFyZSBhbHJlYWR5IGF2YWlsYWJsZSwgaW5jbHVkaW5nIGl0cyByaWdodC1zaWRlIGNvbnRleHQuXG4gICAgY29uc3Qgc3RhYmxlRnJhbWVzID0gdGhpcy5zdGFibGVNZWxGcmFtZUNvdW50Rm9yU2FtcGxlcyhcbiAgICAgIHRoaXMucmF3U2FtcGxlc1JlY2VpdmVkLFxuICAgIClcblxuICAgIHdoaWxlICh0aGlzLm5leHRNZWxGcmFtZSA8IHN0YWJsZUZyYW1lcykge1xuICAgICAgdGhpcy5tZWxGcmFtZXMucHVzaCh0aGlzLmNvbXB1dGVTdHJlYW1pbmdNZWxGcmFtZSh0aGlzLm5leHRNZWxGcmFtZSkpXG4gICAgICB0aGlzLm5leHRNZWxGcmFtZSArPSAxXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFibGVNZWxGcmFtZUNvdW50Rm9yU2FtcGxlcyhzYW1wbGVDb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb3VudCA9XG4gICAgICBNYXRoLmZsb29yKFxuICAgICAgICAoc2FtcGxlQ291bnQgLSBjb25maWcuU1RSRUFNSU5HX1JJR0hUX0NPTlRFWFQpIC8gY29uZmlnLkhPUF9MRU5HVEgsXG4gICAgICApICsgMVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIGNvdW50KVxuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlU3RyZWFtaW5nTWVsRnJhbWUoZnJhbWVJbmRleDogbnVtYmVyKTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmZ0UHJlLmZyYW1lXG4gICAgZnJhbWUuZmlsbCgwKVxuXG4gICAgLy8gTWF0Y2ggdGhlIGZ1bGwtYnVmZmVyIE5lTW8gbGF5b3V0OlxuICAgIC8vIHdpbmRvdyBpcyBwbGFjZWQgYXQgT0ZGIGluc2lkZSBhbiBOX0ZGVC1zaXplZCBmcmFtZSwgYW5kIHRoZSByYXdcbiAgICAvLyB3aW5kb3cgc3RhcnRzIGF0IGZyYW1lSW5kZXggKiBIT1BfTEVOR1RIIC0gUEFEICsgT0ZGLlxuICAgIGNvbnN0IHJhd1N0YXJ0ID0gZnJhbWVJbmRleCAqIGNvbmZpZy5IT1BfTEVOR1RIIC0gY29uZmlnLlBBRCArIGNvbmZpZy5PRkZcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLldJTl9MRU5HVEg7IGkrKykge1xuICAgICAgZnJhbWVbY29uZmlnLk9GRiArIGldID1cbiAgICAgICAgdGhpcy5wcmVlbXBoYXNpemVkU2FtcGxlQXQocmF3U3RhcnQgKyBpKSAqIHRoaXMuaGFubltpXVxuICAgIH1cblxuICAgIGNvbnN0IHBvd2VyID0gZmZ0UG93ZXIodGhpcy5mZnRQcmUpXG4gICAgY29uc3QgbmZGcmVxID0gY29uZmlnLk5fRkZUIC8gMiArIDFcbiAgICBjb25zdCBtZWxGcmFtZSA9IHRoaXMuYWNxdWlyZU1lbEZyYW1lKClcblxuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgY29uZmlnLk5fTUVMUzsgbSsrKSB7XG4gICAgICBsZXQgYWNjID0gMFxuICAgICAgY29uc3QgZmIgPSBtICogbmZGcmVxXG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbmZGcmVxOyBrKyspIHtcbiAgICAgICAgYWNjICs9IHRoaXMuZmJhbmtbZmIgKyBrXSAqIHBvd2VyW2tdXG4gICAgICB9XG5cbiAgICAgIG1lbEZyYW1lW21dID0gTWF0aC5sb2coYWNjICsgY29uZmlnLkxPR19aRVJPX0dVQVJEKVxuICAgIH1cblxuICAgIHJldHVybiBtZWxGcmFtZVxuICB9XG5cbiAgcHJpdmF0ZSByYXdTYW1wbGVBdChhYnNTYW1wbGVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYWJzU2FtcGxlSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGByYXdTYW1wbGVBdCBjYWxsZWQgd2l0aCBuZWdhdGl2ZSBpbmRleCAke2Fic1NhbXBsZUluZGV4fWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gU2hvdWxkIG9ubHkgaGFwcGVuIGlmIHRoZSBjYWxsZXIgaW50ZW50aW9uYWxseSByZXF1ZXN0cyBzYW1wbGVzIGJleW9uZFxuICAgIC8vIHRoZSByZWFsIHN0cmVhbS4gRHVyaW5nIG5vcm1hbCBzdHJlYW1pbmcsIHN0YWJsZS1mcmFtZSBnYXRpbmcgcHJldmVudHMgaXQuXG4gICAgaWYgKGFic1NhbXBsZUluZGV4ID49IHRoaXMucmF3U2FtcGxlc1JlY2VpdmVkKSB7XG4gICAgICByZXR1cm4gMC4wXG4gICAgfVxuXG4gICAgY29uc3QgcmVsID0gYWJzU2FtcGxlSW5kZXggLSB0aGlzLnJhd0Jhc2VTYW1wbGVcblxuICAgIGlmIChyZWwgPCAwIHx8IHJlbCA+PSB0aGlzLnJhd0F1ZGlvLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgU3RyZWFtaW5nIGZyb250ZW5kIGxvc3QgcmF3IHNhbXBsZSAke2Fic1NhbXBsZUluZGV4fTsgYFxuICAgICAgICAgICsgYGJhc2U9JHt0aGlzLnJhd0Jhc2VTYW1wbGV9LCBsZW49JHt0aGlzLnJhd0F1ZGlvLmxlbmd0aH1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJhd0F1ZGlvW3JlbF1cbiAgfVxuXG4gIHByaXZhdGUgcHJlZW1waGFzaXplZE9yaWdpbmFsU2FtcGxlQXQoYWJzU2FtcGxlSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgeCA9IHRoaXMucmF3U2FtcGxlQXQoYWJzU2FtcGxlSW5kZXgpXG5cbiAgICBpZiAoYWJzU2FtcGxlSW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiB4XG4gICAgfVxuXG4gICAgcmV0dXJuIHggLSBjb25maWcuUFJFRU1QSCAqIHRoaXMucmF3U2FtcGxlQXQoYWJzU2FtcGxlSW5kZXggLSAxKVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVlbXBoYXNpemVkU2FtcGxlQXQoYWJzU2FtcGxlSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gTWF0Y2ggcmVmbGVjdC1wYWRkaW5nIHNlbWFudGljcyBhdCB0aGUgc3RhcnQgb2YgdGhlIHN0cmVhbSBhZnRlclxuICAgIC8vIHByZS1lbXBoYXNpcy4gRm9yIGV4YW1wbGUsIC0xIG1hcHMgdG8gcHJlZW1waGFzaXplZCBzYW1wbGUgMS5cbiAgICBpZiAoYWJzU2FtcGxlSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmVlbXBoYXNpemVkT3JpZ2luYWxTYW1wbGVBdCgtYWJzU2FtcGxlSW5kZXgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJlZW1waGFzaXplZE9yaWdpbmFsU2FtcGxlQXQoYWJzU2FtcGxlSW5kZXgpXG4gIH1cblxuICBwcml2YXRlIGdldE1lbEZyYW1lKGFic0ZyYW1lSW5kZXg6IG51bWJlcik6IEZsb2F0MzJBcnJheSB7XG4gICAgY29uc3QgcmVsID0gYWJzRnJhbWVJbmRleCAtIHRoaXMubWVsRnJhbWVCYXNlXG5cbiAgICBpZiAocmVsIDwgMCB8fCByZWwgPj0gdGhpcy5tZWxGcmFtZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdHJlYW1pbmcgZnJvbnRlbmQgbG9zdCBtZWwgZnJhbWUgJHthYnNGcmFtZUluZGV4fTsgYFxuICAgICAgICAgICsgYGJhc2U9JHt0aGlzLm1lbEZyYW1lQmFzZX0sIGxlbj0ke3RoaXMubWVsRnJhbWVzLmxlbmd0aH1gLFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1lbEZyYW1lc1tyZWxdXG4gIH1cblxuICBwcml2YXRlIGNvcHlNZWxGcmFtZVRvRW5jb2RlckNodW5rKFxuICAgIGNodW5rOiBGbG9hdDMyQXJyYXksXG4gICAgY2h1bmtGcmFtZU9mZnNldDogbnVtYmVyLFxuICAgIG1lbEZyYW1lOiBGbG9hdDMyQXJyYXksXG4gICkge1xuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgY29uZmlnLk5fTUVMUzsgbSsrKSB7XG4gICAgICBjaHVua1ttICogY29uZmlnLk5FTU9fRlJBTUVTICsgY2h1bmtGcmFtZU9mZnNldF0gPSBtZWxGcmFtZVttXVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJpbU9sZEJ1ZmZlcnMoKSB7XG4gICAgLy8gS2VlcCBvbmx5IG1lbCBmcmFtZXMgbmVlZGVkIGZvciB0aGUgbmV4dCBlbmNvZGVyIGlucHV0J3MgOS1mcmFtZVxuICAgIC8vIHByZS1lbmNvZGUgY2FjaGUuXG4gICAgY29uc3Qga2VlcEZyb21GcmFtZSA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMubmV4dENodW5rRnJhbWUgLSBjb25maWcuTkVNT19QUkVDQUNIRSxcbiAgICApXG5cbiAgICBjb25zdCBkcm9wRnJhbWVzID0ga2VlcEZyb21GcmFtZSAtIHRoaXMubWVsRnJhbWVCYXNlXG5cbiAgICBpZiAoZHJvcEZyYW1lcyA+IDApIHtcbiAgICAgIC8vIFplcm8gZWFjaCBkcm9wcGVkIG1lbCBmcmFtZSBiZWZvcmUgcmVsZWFzaW5nIGl0LiBNZWwgZmVhdHVyZXMgYXJlIGFcbiAgICAgIC8vIG5lYXIgY29tcGxldGUgYWNvdXN0aWMgcmVwcmVzZW50YXRpb24sIHNvIHdpcGluZyB0aGVtIGhlcmUgYm91bmRzIHRoZVxuICAgICAgLy8gcmVzaWRlbnQgYWNvdXN0aWNzIHRvIHRoZSBsaXZlIHdpbmRvdyByYXRoZXIgdGhhbiBsZWF2aW5nIGRyb3BwZWRcbiAgICAgIC8vIGZyYW1lcyBpbiB0aGUgSlMgaGVhcCB1bnRpbCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3BGcmFtZXM7IGkrKykge1xuICAgICAgICB0aGlzLnJlbGVhc2VNZWxGcmFtZSh0aGlzLm1lbEZyYW1lc1tpXSlcbiAgICAgIH1cbiAgICAgIHRoaXMubWVsRnJhbWVzLnNwbGljZSgwLCBkcm9wRnJhbWVzKVxuICAgICAgdGhpcy5tZWxGcmFtZUJhc2UgPSBrZWVwRnJvbUZyYW1lXG4gICAgfVxuXG4gICAgLy8gS2VlcCBlbm91Z2ggcmF3IGF1ZGlvIHRvIGNvbXB1dGUgdGhlIG5leHQgbWVsIGZyYW1lLCBpbmNsdWRpbmcgb25lXG4gICAgLy8gcHJldmlvdXMgc2FtcGxlIGZvciBwcmUtZW1waGFzaXMgY29udGludWl0eS5cbiAgICBjb25zdCBmaXJzdFJhd05lZWRlZCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMubmV4dE1lbEZyYW1lICogY29uZmlnLkhPUF9MRU5HVEggLSBjb25maWcuUEFEICsgY29uZmlnLk9GRiAtIDEsXG4gICAgKVxuXG4gICAgY29uc3QgZHJvcFNhbXBsZXMgPSBmaXJzdFJhd05lZWRlZCAtIHRoaXMucmF3QmFzZVNhbXBsZVxuXG4gICAgaWYgKGRyb3BTYW1wbGVzID4gMCkge1xuICAgICAgdGhpcy5yYXdBdWRpby5maWxsKDAsIDAsIGRyb3BTYW1wbGVzKVxuICAgICAgdGhpcy5yYXdBdWRpby5zcGxpY2UoMCwgZHJvcFNhbXBsZXMpXG4gICAgICB0aGlzLnJhd0Jhc2VTYW1wbGUgKz0gZHJvcFNhbXBsZXNcbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG5pbXBvcnQgeyBCaWdCdWZmZXIgfSBmcm9tICdnZW4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS9iaWdfYnVmZmVyLm1vam9tLXdlYnVpLmpzJ1xuXG4vLyBQYXJzZSBhIHRva2Vucy50eHQgKFwiPHRva2VuPiA8aWQ+XCIgcGVyIGxpbmUsIGlkLW9yZGVyZWQsIOKWgSA9PSBzcGFjZSkgaW50b1xuLy8gYW4gaWQtaW5kZXhlZCB2b2NhYiBhcnJheS5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRva2VucyhidWY6IFVpbnQ4QXJyYXkpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHZvY2FiOiBzdHJpbmdbXSA9IFtdXG4gIGZvciAoY29uc3QgbGluZSBvZiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYnVmKS5zcGxpdCgnXFxuJykpIHtcbiAgICBpZiAoIWxpbmUpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGNvbnN0IHNwID0gbGluZS5sYXN0SW5kZXhPZignICcpXG4gICAgdm9jYWJbcGFyc2VJbnQobGluZS5zbGljZShzcCArIDEpLCAxMCldID0gbGluZS5zbGljZSgwLCBzcClcbiAgfVxuICByZXR1cm4gdm9jYWJcbn1cblxuLy8gRnJlZSB0aGUgbW9kZWwgZ3JhcGgncyBKUyBiYWNraW5nIHN0b3JlIG9uY2UgT1JUIGhhcyBjb3BpZWQgaXQgaW50byBpdHNcbi8vIFdBU00gaGVhcC4gKE9SVC1XZWIgcmVmZXJlbmNlcyBpdHMgb3duIFdBU00gY29weSwgc28gdGhlIHNvdXJjZSBpcyBub1xuLy8gbG9uZ2VyIG5lZWRlZC4pIHRyYW5zZmVyKDApIGRldGFjaGVzIGl0IGltbWVkaWF0ZWx5IGluc3RlYWQgb2Ygd2FpdGluZyBvblxuLy8gR0Mgb2YgdGhlIG1vam8tbWFwcGVkIHNoYXJlZC1tZW1vcnkgcmVnaW9uLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbGVhc2VCeXRlcyhieXRlczogVWludDhBcnJheSk6IHZvaWQge1xuICB0cnkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGJ5dGVzLmJ1ZmZlciBhcyBBcnJheUJ1ZmZlciAmIHtcbiAgICAgIHRyYW5zZmVyPzogKG5ld0xlbmd0aD86IG51bWJlcikgPT4gQXJyYXlCdWZmZXJcbiAgICB9XG4gICAgYnVmZmVyLnRyYW5zZmVyPy4oMClcbiAgfSBjYXRjaCB7XG4gICAgLy8gQmFja2luZyBzdG9yZSBpc24ndCB0cmFuc2ZlcmFibGU7IEdDIHdpbGwgcmVjbGFpbSBpdCBldmVudHVhbGx5LlxuICB9XG59XG5cbi8vIEJpZ0J1ZmZlciBpcyBhIG1vam8gdW5pb246IGVpdGhlciBpbmxpbmVkIGJ5dGVzIG9yIGEgc2hhcmVkLW1lbW9yeVxuLy8gaGFuZGxlIHRoZSByZW5kZXJlciBtYXBzIGluLlxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRCaWdCdWZmZXIoYnVmZmVyOiBCaWdCdWZmZXIsIG5hbWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBpZiAoYnVmZmVyLmJ5dGVzKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlci5ieXRlcylcbiAgfVxuICBpZiAoYnVmZmVyLnNoYXJlZE1lbW9yeSkge1xuICAgIGNvbnN0IHsgYnVmZmVyOiBtYXBwZWQsIHJlc3VsdCB9ID1cbiAgICAgIGJ1ZmZlci5zaGFyZWRNZW1vcnkuYnVmZmVySGFuZGxlLm1hcEJ1ZmZlcigwLCBidWZmZXIuc2hhcmVkTWVtb3J5LnNpemUpXG4gICAgaWYgKHJlc3VsdCAhPT0gTW9qby5SRVNVTFRfT0spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIG1hcCAke25hbWV9IHNoYXJlZCBidWZmZXJgKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobWFwcGVkKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCAke25hbWV9IEJpZ0J1ZmZlcmApXG59XG5cbi8vIEFyZ21heCBvdmVyIGEgZmxhdCBhcnJheTsgcmV0dXJucyB0aGUgaW5kZXggb2YgbWF4IHZhbHVlXG5leHBvcnQgZnVuY3Rpb24gYXJnbWF4KGE6IEZsb2F0MzJBcnJheSk6IG51bWJlciB7XG4gIGxldCBiZXN0ID0gMFxuICBmb3IgKGxldCBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSA+IGFbYmVzdF0pIHtcbiAgICAgIGJlc3QgPSBpXG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gTmVtb3Ryb24gMC42QiBzdHJlYW1pbmcgUk5OLVQgb3ZlciBvbm54cnVudGltZS13ZWIuIE1vam8tZnJlZTogbW9kZWxcbi8vIGxvYWRpbmcgZnJvbSByYXcgYnl0ZXMgcGx1cyBhIHBlci11dHRlcmFuY2Ugc3RyZWFtaW5nIHNlc3Npb24gdGhhdCBlbWl0c1xuLy8gdHJhbnNjcmlwdHMgdGhyb3VnaCBhIGNhbGxiYWNrLiBUaGUgbW9qbyB0cmFuc3BvcnQgZ2x1ZSB0aGF0IGRyaXZlcyB0aGlzXG4vLyBsaXZlcyBpbiBzcGVlY2hfd29ya2VyLnRzLlxuXG5pbXBvcnQge1xuICBoYW5uV2luZG93LFxuICBpbml0RmZ0UG93ZXIsXG4gIFN0cmVhbWluZ01lbEZyb250ZW5kLFxufSBmcm9tICcuL2F1ZGlvX2ZlYXR1cmVzJ1xuaW1wb3J0IHsgZGlzcG9zZU9ydCwgZW5zdXJlT3J0IH0gZnJvbSAnLi9vcnRfZW52J1xuaW1wb3J0IHR5cGUgeyBPcnQsIE9ydFNlc3Npb24sIE9ydFNlc3Npb25PcHRpb25zLCBPcnRUZW5zb3IgfSBmcm9tICcuL29ydF9lbnYnXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWdzJ1xuaW1wb3J0IHR5cGUgeyBGZnRTaXplIH0gZnJvbSAnLi9jb25maWdzJ1xuaW1wb3J0IHsgcmVsZWFzZUJ5dGVzLCBhcmdtYXggfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBFbmNvZGVyIG91dHB1dHMgd2UgY29uc3VtZS4gYGVuY29kZWRfbGVuZ3Roc2AgaXMgdGhlIGNvdW50IG9mIHZhbGlkIGVuY29kZXJcbi8vIGZyYW1lczsgdGhlIGlucHV0IGxlbmd0aCBpcyBmaXhlZCBldmVyeSBjYWxsIHNvIGl0IG5vcm1hbGx5IGVxdWFscyB0aGVcbi8vIGZ1bGwgdGltZSwgYnV0IHdlIGNsYW1wIHRoZSBkZWNvZGUgdG8gaXQgZGVmZW5zaXZlbHkuXG5jb25zdCBFTkNfRkVUQ0hFUyA9IFtcbiAgJ291dHB1dHMnLFxuICAnZW5jb2RlZF9sZW5ndGhzJyxcbiAgJ2NhY2hlX2xhc3RfY2hhbm5lbF9uZXh0JyxcbiAgJ2NhY2hlX2xhc3RfdGltZV9uZXh0JyxcbiAgJ2NhY2hlX2xhc3RfY2hhbm5lbF9uZXh0X2xlbicsXG5dXG5cbi8vIFNoYXJlZCwgbG9hZGVkLW9uY2UgTmVtb3Ryb24gbW9kZWw6IHRoZSBleHRlcm5hbC1kYXRhIGVuY29kZXIgKyBSTk4tVFxuLy8gZGVjb2RlciBzZXNzaW9ucyBwbHVzIHRva2VucyBhbmQgdGhlIDEyOC1tZWwgZmlsdGVyYmFuay5cbmV4cG9ydCBjbGFzcyBPcnROZW1vdHJvbk1vZGVsIHtcbiAgcmVhZG9ubHkgb3J0OiBPcnRcbiAgcmVhZG9ubHkgdG9rZW5zOiBzdHJpbmdbXVxuICByZWFkb25seSBmYmFuazogRmxvYXQzMkFycmF5XG4gIHJlYWRvbmx5IGhhbm46IEZsb2F0MzJBcnJheVxuXG4gIC8vIFRoZSBlbmNvZGVyIGFuZCBkZWNvZGVyIHNlc3Npb25zIGFyZSBwcml2YXRlIG9uIHB1cnBvc2U6IGV2ZXJ5IHJ1biBtdXN0IGdvXG4gIC8vIHRocm91Z2ggcnVuRW5jb2Rlci9ydW5EZWNvZGVyIHNvIGl0IGlzIHNlcmlhbGl6ZWQgYWdhaW5zdCBvdGhlciBzdHJlYW1zLlxuICBwcml2YXRlIGVuYzogT3J0U2Vzc2lvblxuICBwcml2YXRlIGRlYzogT3J0U2Vzc2lvblxuXG4gIC8vIEV2ZXJ5IHJ1biBnb2VzIHRocm91Z2ggdGhpcyBvbmUgcXVldWUgc28gcnVucyBmcm9tIGRpZmZlcmVudCBzdHJlYW1zIG5ldmVyXG4gIC8vIG92ZXJsYXAgb24gdGhlIHNoYXJlZCBzZXNzaW9ucy4gb25ueHJ1bnRpbWUtd2ViIGtlZXBzIGEgc2luZ2xlIFdBU00gc3RhY2tcbiAgLy8gcGVyIG1vZHVsZSBhbmQgZG9lcyBub3QgbG9jayBydW4oKSwgc28gb3ZlcmxhcHBpbmcgcnVucyBjb3JydXB0IHRoYXQgc3RhY2suXG4gIHByaXZhdGUgcXVldWU6IFByb21pc2U8dW5rbm93bj4gPSBQcm9taXNlLnJlc29sdmUoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9ydDogT3J0LFxuICAgIGVuYzogT3J0U2Vzc2lvbixcbiAgICBkZWM6IE9ydFNlc3Npb24sXG4gICAgdG9rZW5zOiBzdHJpbmdbXSxcbiAgICBmYmFuazogRmxvYXQzMkFycmF5LFxuICApIHtcbiAgICB0aGlzLm9ydCA9IG9ydFxuICAgIHRoaXMuZW5jID0gZW5jXG4gICAgdGhpcy5kZWMgPSBkZWNcbiAgICB0aGlzLnRva2VucyA9IHRva2Vuc1xuICAgIHRoaXMuZmJhbmsgPSBmYmFua1xuICAgIHRoaXMuaGFubiA9IGhhbm5XaW5kb3coKVxuICB9XG5cbiAgLy8gU2VyaWFsaXplZCBlbmNvZGVyL2RlY29kZXIgcnVucy4gVGhlc2UgYXJlIHRoZSBvbmx5IHdheSB0byByZWFjaCB0aGVcbiAgLy8gc2hhcmVkIHNlc3Npb25zLCBzbyBubyB0d28gc3RyZWFtcycgcnVucyBldmVyIG92ZXJsYXAuIEEgZmFpbGVkIHJ1biBpc1xuICAvLyBpc29sYXRlZCBvbiB0aGUgY2hhaW4gc28gaXQgY2Fubm90IHN0YWxsIGxhdGVyIHJ1bnMgZm9yIG90aGVyIHN0cmVhbXMsXG4gIC8vIHdoaWxlIGl0cyByZWplY3Rpb24gc3RpbGwgcHJvcGFnYXRlcyB0byB0aGUgY2FsbGVyLlxuICBydW5FbmNvZGVyKGZlZWRzOiBSZWNvcmQ8c3RyaW5nLCBPcnRUZW5zb3I+LCBmZXRjaGVzOiByZWFkb25seSBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZWQoKCkgPT4gdGhpcy5lbmMucnVuKGZlZWRzLCBmZXRjaGVzIGFzIHN0cmluZ1tdKSlcbiAgfVxuXG4gIHJ1bkRlY29kZXIoZmVlZHM6IFJlY29yZDxzdHJpbmcsIE9ydFRlbnNvcj4pIHtcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkKCgpID0+IHRoaXMuZGVjLnJ1bihmZWVkcykpXG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZWQ8VD4ocnVuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5xdWV1ZS50aGVuKHJ1bilcbiAgICB0aGlzLnF1ZXVlID0gcmVzdWx0LmNhdGNoKCgpID0+IHt9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIEJ1aWxkIHRoZSBlbmNvZGVyICsgZGVjb2RlciBzZXNzaW9ucyBmcm9tIG1vam8gQmlnQnVmZmVycy4gT25seSB0aGVcbiAgLy8gLm9ubnggKyAub25ueC5kYXRhIGV4dGVybmFsLWRhdGEgZXhwb3J0IGlzIHN1cHBvcnRlZCBmb3IgbWVtb3J5XG4gIC8vIG9wdGltaXphdGlvbi5cbiAgc3RhdGljIGFzeW5jIGJ1aWxkRnJvbUJ5dGVzKFxuICAgIGVuY29kZXJHcmFwaDogVWludDhBcnJheSxcbiAgICBlbmNEYXRhOiBVaW50OEFycmF5LFxuICAgIGRlY29kZXJHcmFwaDogVWludDhBcnJheSxcbiAgICBkZWNEYXRhOiBVaW50OEFycmF5LFxuICAgIHRva2Vuczogc3RyaW5nW10sXG4gICAgZmJhbms6IEZsb2F0MzJBcnJheSxcbiAgKTogUHJvbWlzZTxPcnROZW1vdHJvbk1vZGVsPiB7XG4gICAgY29uc3Qgb3J0ID0gYXdhaXQgZW5zdXJlT3J0KClcblxuICAgIGNvbnN0IHNlc3Npb25PcHRpb25zID0gKFxuICAgICAgZGF0YTogVWludDhBcnJheSxcbiAgICAgIGRhdGFQYXRoOiBzdHJpbmcsXG4gICAgKTogT3J0U2Vzc2lvbk9wdGlvbnMgPT4gKHtcbiAgICAgIGV4ZWN1dGlvblByb3ZpZGVyczogWyd3YXNtJ10sXG5cbiAgICAgIC8vIGludDQgcHJlcGFja2luZyBnaXZlcyBubyBzcGVlZHVwIG9uIHRoZSBleHRlcm5hbC1kYXRhIHBhdGgsIHNvIGRpc2FibGVcbiAgICAgIC8vIGl0IHRvIGF2b2lkIHRoZSBleHRyYSBwcmVwYWNrZWQtd2VpZ2h0IGNvcHkgaW4gV0FTTSBtZW1vcnkuXG4gICAgICBleHRyYToge1xuICAgICAgICBzZXNzaW9uOiB7XG4gICAgICAgICAgZGlzYWJsZV9wcmVwYWNraW5nOiAnMScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBleHRlcm5hbERhdGE6IFt7IHBhdGg6IGRhdGFQYXRoLCBkYXRhIH1dLFxuICAgIH0pXG5cbiAgICBjb25zdCBlbmMgPSBhd2FpdCBvcnQuSW5mZXJlbmNlU2Vzc2lvbi5jcmVhdGUoXG4gICAgICBlbmNvZGVyR3JhcGgsXG4gICAgICBzZXNzaW9uT3B0aW9ucyhlbmNEYXRhLCAnZW5jb2Rlci5vbm54LmRhdGEnKSxcbiAgICApXG5cbiAgICByZWxlYXNlQnl0ZXMoZW5jb2RlckdyYXBoKVxuICAgIHJlbGVhc2VCeXRlcyhlbmNEYXRhKVxuXG4gICAgY29uc3QgZGVjID0gYXdhaXQgb3J0LkluZmVyZW5jZVNlc3Npb24uY3JlYXRlKFxuICAgICAgZGVjb2RlckdyYXBoLFxuICAgICAgc2Vzc2lvbk9wdGlvbnMoZGVjRGF0YSwgJ2RlY29kZXJfam9pbnQub25ueC5kYXRhJyksXG4gICAgKVxuICAgIHJlbGVhc2VCeXRlcyhkZWNvZGVyR3JhcGgpXG4gICAgcmVsZWFzZUJ5dGVzKGRlY0RhdGEpXG5cbiAgICByZXR1cm4gbmV3IE9ydE5lbW90cm9uTW9kZWwob3J0LCBlbmMsIGRlYywgdG9rZW5zLCBmYmFuaylcbiAgfVxufVxuXG4vLyBPbmUgTmVtb3Ryb24gQVNSIHNlc3Npb24uIFVzZXMgYW4gaW5jcmVtZW50YWwgc3RyZWFtaW5nIG1lbCBmcm9udGVuZDpcbi8vIHJhdyBzYW1wbGVzIGFyZSBhcHBlbmRlZCwgb25seSBuZXdseSBzdGFibGUgbWVsIGZyYW1lcyBhcmUgY29tcHV0ZWQsIGFuZFxuLy8gZml4ZWQgNjUtZnJhbWUgZW5jb2RlciBjaHVua3MgYXJlIHBhY2tlZCBmcm9tIGNhY2hlZCBtZWwgZnJhbWVzLiBNb2pvLWZyZWU6XG4vLyB0cmFuc2NyaXB0cyBhcmUgZGVsaXZlcmVkIHRocm91Z2ggdGhlIG9uUmVzdWx0IGNhbGxiYWNrIGFuZCBmYWlsdXJlc1xuLy8gdGhyb3VnaCBvbkVycm9yLlxuZXhwb3J0IGNsYXNzIE5lbW90cm9uU3RyZWFtU2Vzc2lvbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgb25SZXN1bHQ6ICh0ZXh0OiBzdHJpbmcsIGlzRmluYWw6IGJvb2xlYW4pID0+IHZvaWRcbiAgcHJpdmF0ZSByZWFkb25seSBvbkVycm9yOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE9ydE5lbW90cm9uTW9kZWxcbiAgcHJpdmF0ZSByZWFkb25seSBmcm9udGVuZDogU3RyZWFtaW5nTWVsRnJvbnRlbmRcblxuICAvLyBBdHRlbnRpb24gY2FjaGUuXG4gIHByaXZhdGUgY2FjaGVDaCA9IG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgY29uZmlnLk5FTU9fTlVNX0VOQ09ERVJfTEFZRVJTXG4gICAgICAqIGNvbmZpZy5ORU1PX0xFRlRfQ09OVEVYVFxuICAgICAgKiBjb25maWcuTkVNT19ISURERU5fRElNLFxuICApXG5cbiAgLy8gQ29udm9sdXRpb24gY2FjaGUuXG4gIHByaXZhdGUgY2FjaGVUaW1lID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICBjb25maWcuTkVNT19OVU1fRU5DT0RFUl9MQVlFUlNcbiAgICAgICogY29uZmlnLk5FTU9fSElEREVOX0RJTVxuICAgICAgKiBjb25maWcuTkVNT19DT05WX0NPTlRFWFQsXG4gIClcblxuICAvLyBJbmRpY2F0ZXMgaG93IG11Y2ggb2YgbGVmdCBjb250ZXh0IGF0IGVuY29kZXItb3V0cHV0IGxldmVsIGlzIHZhbGlkLlxuICAvLyBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIGxlZnQgY29udGV4dCBhdCBtZWwtZnJhbWUgbGV2ZWwuXG4gIHByaXZhdGUgY2FjaGVMZW4gPSBCaWdJbnQ2NEFycmF5LmZyb20oW0JpZ0ludCgwKV0pXG5cbiAgLy8gRGVjb2RlciBMU1RNIHN0YXRlIGNhY2hlOyAyIExTVE0gbGF5ZXJzLlxuICBwcml2YXRlIHN0MSA9IG5ldyBGbG9hdDMyQXJyYXkoMiAqIGNvbmZpZy5ORU1PX0RFQ09ERVJfTFNUTV9ESU0pXG4gIHByaXZhdGUgc3QyID0gbmV3IEZsb2F0MzJBcnJheSgyICogY29uZmlnLk5FTU9fREVDT0RFUl9MU1RNX0RJTSlcblxuICAvLyBSTk4tVCBwcmVkaWN0b3Igc2VlZC4gTmVNbyB1c2VzIEJMQU5LIGFzIHRoZSBpbml0aWFsIHByZXZpb3VzIHRva2VuLlxuICBwcml2YXRlIHByZXZUb2tlbiA9IGNvbmZpZy5ORU1PX0JMQU5LXG5cbiAgLy8gSHlwb3RoZXNpcyB0b2tlbiBJRHMuXG4gIHByaXZhdGUgcmVhZG9ubHkgaHlwOiBudW1iZXJbXSA9IFtdXG5cbiAgLy8gQXVkaW8gaXMgYWNjZXB0ZWQgb25seSB3aGlsZSBzdHJlYW1pbmcuIFRoZSBmaW5hbCBmbHVzaCBydW5zIGluIGZpbmlzaGluZ1xuICAvLyBhbmQgY2FuIHN0aWxsIGZhaWwuIGVuZGVkIGlzIHRlcm1pbmFsIGFuZCBmaXJlcyBvblJlc3VsdCBvciBvbkVycm9yIG9uY2UuXG4gIHByaXZhdGUgc3RhdGU6ICdzdHJlYW1pbmcnIHwgJ2ZpbmlzaGluZycgfCAnZW5kZWQnID0gJ3N0cmVhbWluZydcblxuICAvLyBQcmV2ZW50cyBvdmVybGFwcGluZyBhc3luYyBpbmZlcmVuY2UgY2FsbHMgd2l0aGluIHRoZSBzYW1lIHN0cmVhbS5cbiAgcHJpdmF0ZSBpbmZsaWdodDogUHJvbWlzZTx2b2lkPiA9IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgLy8gRGVidWcgY2h1bmsgY291bnRlci5cblxuICBwcml2YXRlIGNodW5rSWR4ID0gMFxuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kZWw6IE9ydE5lbW90cm9uTW9kZWwsXG4gICAgc2FtcGxlUmF0ZUh6OiBudW1iZXIsXG4gICAgb25SZXN1bHQ6ICh0ZXh0OiBzdHJpbmcsIGlzRmluYWw6IGJvb2xlYW4pID0+IHZvaWQsXG4gICAgb25FcnJvcjogKCkgPT4gdm9pZCxcbiAgKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgaWYgKHNhbXBsZVJhdGVIeiAhPT0gY29uZmlnLlRBUkdFVF9TQU1QTEVfUkFURSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5zdXBwb3J0ZWQgc2FtcGxlIHJhdGUgZm9yIE5lbW90cm9uOiAke3NhbXBsZVJhdGVIen0gSHpgLFxuICAgICAgKVxuICAgIH1cbiAgICB0aGlzLm9uUmVzdWx0ID0gb25SZXN1bHRcbiAgICB0aGlzLm9uRXJyb3IgPSBvbkVycm9yXG4gICAgdGhpcy5mcm9udGVuZCA9IG5ldyBTdHJlYW1pbmdNZWxGcm9udGVuZChcbiAgICAgIG1vZGVsLmZiYW5rLFxuICAgICAgbW9kZWwuaGFubixcbiAgICAgIGluaXRGZnRQb3dlcihjb25maWcuTl9GRlQgYXMgRmZ0U2l6ZSksXG4gICAgKVxuICAgIHRoaXMuZnJvbnRlbmQuYXBwZW5kQXVkaW9TYW1wbGVzKFxuICAgICAgbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgKGNvbmZpZy5UQVJHRVRfU0FNUExFX1JBVEUgKiBjb25maWcuTEVBRElOR19TSUxFTkNFX01TKSAvIDEwMDAsXG4gICAgICApLFxuICAgIClcbiAgfVxuXG4gIGFkZEF1ZGlvKHNhbXBsZXM6IEZsb2F0MzJBcnJheSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RyZWFtaW5nJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZnJvbnRlbmQuYXBwZW5kQXVkaW9TYW1wbGVzKHNhbXBsZXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZmFpbChlcnJvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgdGhpcy5kZWJ1ZygnYXVkaW8gYXBwZW5kZWQnLCB7XG4gICAgICBzYW1wbGVzOiBzYW1wbGVzLmxlbmd0aCxcbiAgICAgIG1zOiB0aGlzLnNhbXBsZXNUb01zKHNhbXBsZXMubGVuZ3RoKSxcbiAgICAgIGZyb250ZW5kOiB0aGlzLmZyb250ZW5kLmRlYnVnU3RhdGUoKSxcbiAgICB9KVxuXG5cbiAgICB0aGlzLmluZmxpZ2h0ID0gdGhpcy5pbmZsaWdodFxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9jZXNzQXZhaWxhYmxlKGZhbHNlKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMuZmFpbChlcnJvcikpXG4gIH1cblxuICAvLyBGbHVzaCB0aGUgdHJhaWxpbmcgd29yZHMgYW5kIGVtaXQgdGhlIGZpbmFsIHRyYW5zY3JpcHQuIEFwcGVuZHMgc2lsZW5jZVxuICAvLyBzbyB0aGUgc3RyZWFtaW5nIGVuY29kZXIvUk5OLVQgZHJhaW5zIHRoZSBsYXN0IHBhcnRpYWwgY2h1bmsgaW50byBmdWxsXG4gIC8vIDY1LWZyYW1lIGNodW5rcy4gSWRlbXBvdGVudDogYWZ0ZXIgdGhlIGZpcnN0IGNhbGwgYWRkQXVkaW8oKSBuby1vcHMsIHNvXG4gIC8vIHRoZSBmaW5hbCBmbHVzaCBydW5zIGV4YWN0bHkgb25jZS5cbiAgZmluaXNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSAnc3RyZWFtaW5nJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9ICdmaW5pc2hpbmcnXG5cbiAgICBjb25zdCBmbHVzaCA9XG4gICAgICBjb25maWcuU0lMRU5DRV9GTFVTSF9DSFVOS1MgKiBjb25maWcuTkVNT19DSFVOSyAqIGNvbmZpZy5IT1BfTEVOR1RIXG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mcm9udGVuZC5hcHBlbmRBdWRpb1NhbXBsZXMobmV3IEZsb2F0MzJBcnJheShmbHVzaCkpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZmFpbChlcnJvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgdGhpcy5kZWJ1ZygnZmluaXNoIHJlcXVlc3RlZCwgYXBwZW5kZWQgc2lsZW5jZScsIHtcbiAgICAgIGZsdXNoU2FtcGxlczogZmx1c2gsXG4gICAgICBmbHVzaE1zOiB0aGlzLnNhbXBsZXNUb01zKGZsdXNoKSxcbiAgICAgIGZyb250ZW5kOiB0aGlzLmZyb250ZW5kLmRlYnVnU3RhdGUoKSxcbiAgICB9KVxuXG5cbiAgICB0aGlzLmluZmxpZ2h0ID0gdGhpcy5pbmZsaWdodFxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5wcm9jZXNzQXZhaWxhYmxlKHRydWUpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2VuZGVkJ1xuICAgICAgICB0aGlzLndpcGUoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHRoaXMuZmFpbChlcnJvcikpXG4gIH1cblxuICAvLyBTaW5nbGUgdGVybWluYWwgcGF0aCBmb3IgYSBmYWlsdXJlLiBFdmVyeSBlcnJvciBlbmRzIHRoZSByZWNvZ25pdGlvbixcbiAgLy8gc2luY2UgdGhlIGJyb3dzZXIgY2Fubm90IGJlIHRvbGQgbW9yZSB0aGFuIHRoYXQgbm8gcmVzdWx0IGlzIGNvbWluZy5cbiAgcHJpdmF0ZSBmYWlsKGVycm9yOiB1bmtub3duKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdlbmRlZCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSAnZW5kZWQnXG4gICAgY29uc29sZS5lcnJvcignW3NwZWVjaC13b3JrZXJdIGluZmVyZW5jZSBmYWlsZWQ6JywgZXJyb3IpXG4gICAgdGhpcy53aXBlKClcbiAgICB0aGlzLm9uRXJyb3IoKVxuICB9XG5cbiAgLy8gWmVybyBldmVyeSBwZXItc2Vzc2lvbiBidWZmZXIgaG9sZGluZyBhdWRpbywgYWNvdXN0aWMgZmVhdHVyZXMsIG9yXG4gIC8vIHRyYW5zY3JpcHQgb25jZSB0aGUgcmVjb2duaXRpb24gaGFzIGVuZGVkLCB3aGV0aGVyIGl0IGVtaXR0ZWQgYSBmaW5hbFxuICAvLyByZXN1bHQgb3IgZmFpbGVkLCBzbyB0aGUgdXR0ZXJhbmNlIGRvZXMgbm90IGxpbmdlciBpbiB0aGUgSlMgaGVhcCB1bnRpbFxuICAvLyBnYXJiYWdlIGNvbGxlY3Rpb24uIFRoZSBzaGFyZWQgbW9kZWwgd2VpZ2h0cyBhcmUgdW50b3VjaGVkLlxuICBwcml2YXRlIHdpcGUoKTogdm9pZCB7XG4gICAgdGhpcy5mcm9udGVuZC53aXBlKClcbiAgICB0aGlzLmh5cC5maWxsKDApXG4gICAgdGhpcy5oeXAubGVuZ3RoID0gMFxuICAgIHRoaXMuY2FjaGVDaC5maWxsKDApXG4gICAgdGhpcy5jYWNoZVRpbWUuZmlsbCgwKVxuICAgIHRoaXMuY2FjaGVMZW4uZmlsbChCaWdJbnQoMCkpXG4gICAgdGhpcy5zdDEuZmlsbCgwKVxuICAgIHRoaXMuc3QyLmZpbGwoMClcbiAgICB0aGlzLnByZXZUb2tlbiA9IGNvbmZpZy5ORU1PX0JMQU5LXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHByb2Nlc3NBdmFpbGFibGUoZmluYWw6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IG9ydCwgdG9rZW5zIH0gPSB0aGlzLm1vZGVsXG4gICAgbGV0IGF0TGVhc3RPbmVDaHVua1Byb2Nlc3NlZCA9IGZhbHNlXG5cbiAgICB3aGlsZSAodGhpcy5mcm9udGVuZC5oYXNGdWxsQ2h1bmsoKSkge1xuXG4gICAgICBjb25zdCBjaHVua0lkeCA9IHRoaXMuY2h1bmtJZHgrK1xuICAgICAgY29uc3QgZnJvbnRlbmRCZWZvcmUgPSB0aGlzLmZyb250ZW5kLmRlYnVnU3RhdGUoKVxuICAgICAgY29uc3QgY2h1bmtTdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KClcbiAgICAgIGNvbnN0IHBhY2tTdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KClcblxuXG4gICAgICBjb25zdCBzaWcgPSB0aGlzLmZyb250ZW5kLm1ha2VOZXh0RW5jb2RlcklucHV0KClcblxuXG4gICAgICBjb25zdCBwYWNrTXMgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHBhY2tTdGFydGVkXG4gICAgICBjb25zdCBlbmNvZGVyU3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpXG5cblxuICAgICAgLy8gRnJlc2ggaW5wdXQgdGVuc29ycyBldmVyeSBzdGVwLiBEbyBub3QgcmV1c2UvY2FycnkgT1JUIHRlbnNvcnMuXG4gICAgICBjb25zdCBlbyA9IGF3YWl0IHRoaXMubW9kZWwucnVuRW5jb2RlcihcbiAgICAgICAge1xuICAgICAgICAgIGF1ZGlvX3NpZ25hbDogbmV3IG9ydC5UZW5zb3IoJ2Zsb2F0MzInLCBzaWcsIFtcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBjb25maWcuTl9NRUxTLFxuICAgICAgICAgICAgY29uZmlnLk5FTU9fRlJBTUVTLFxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbGVuZ3RoOiBuZXcgb3J0LlRlbnNvcihcbiAgICAgICAgICAgICdpbnQ2NCcsXG4gICAgICAgICAgICBCaWdJbnQ2NEFycmF5LmZyb20oW0JpZ0ludChjb25maWcuTkVNT19GUkFNRVMpXSksXG4gICAgICAgICAgICBbMV0sXG4gICAgICAgICAgKSxcblxuICAgICAgICAgIGNhY2hlX2xhc3RfY2hhbm5lbDogbmV3IG9ydC5UZW5zb3IoJ2Zsb2F0MzInLCB0aGlzLmNhY2hlQ2gsIFtcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBjb25maWcuTkVNT19OVU1fRU5DT0RFUl9MQVlFUlMsXG4gICAgICAgICAgICBjb25maWcuTkVNT19MRUZUX0NPTlRFWFQsXG4gICAgICAgICAgICBjb25maWcuTkVNT19ISURERU5fRElNLFxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgY2FjaGVfbGFzdF90aW1lOiBuZXcgb3J0LlRlbnNvcignZmxvYXQzMicsIHRoaXMuY2FjaGVUaW1lLCBbXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgY29uZmlnLk5FTU9fTlVNX0VOQ09ERVJfTEFZRVJTLFxuICAgICAgICAgICAgY29uZmlnLk5FTU9fSElEREVOX0RJTSxcbiAgICAgICAgICAgIGNvbmZpZy5ORU1PX0NPTlZfQ09OVEVYVCxcbiAgICAgICAgICBdKSxcblxuICAgICAgICAgIGNhY2hlX2xhc3RfY2hhbm5lbF9sZW46IG5ldyBvcnQuVGVuc29yKCdpbnQ2NCcsIHRoaXMuY2FjaGVMZW4sIFsxXSksXG4gICAgICAgIH0sXG4gICAgICAgIEVOQ19GRVRDSEVTLFxuICAgICAgKVxuXG5cbiAgICAgIGNvbnN0IGVuY29kZXJNcyA9IHBlcmZvcm1hbmNlLm5vdygpIC0gZW5jb2RlclN0YXJ0ZWRcblxuXG4gICAgICAvLyBDb3B5IGRhdGEgb3V0IGJlZm9yZSBkaXNwb3NpbmcgT1JUIHRlbnNvcnMuXG4gICAgICAvLyBFbmNvZGVyIG91dHB1dCBpcyBsYWlkIG91dCBhcyBbYmF0Y2gsIGhpZGRlbl9kaW0sIHRpbWVdLlxuICAgICAgY29uc3QgZW5jT3V0ID0gKGVvLm91dHB1dHMuZGF0YSBhcyBGbG9hdDMyQXJyYXkpLnNsaWNlKClcblxuICAgICAgLy8gTnVtYmVyIG9mIHRpbWUgZnJhbWVzIGF0IG91dHB1dCBvZiBlbmNvZGVyLlxuICAgICAgY29uc3QgblRpbWUgPSBOdW1iZXIoZW8ub3V0cHV0cy5kaW1zWzJdKVxuXG4gICAgICAvLyBOdW1iZXIgb2YgdmFsaWQgZW5jb2RlciBmcmFtZXMgdG8gYWN0dWFsbHkgZGVjb2RlLlxuICAgICAgY29uc3QgbkVuYyA9IE1hdGgubWluKFxuICAgICAgICBOdW1iZXIoKGVvLmVuY29kZWRfbGVuZ3Rocy5kYXRhIGFzIEJpZ0ludDY0QXJyYXkpWzBdKSxcbiAgICAgICAgblRpbWUsXG4gICAgICApXG5cbiAgICAgIC8vIFVwZGF0ZSBlbmNvZGVyIGNhY2hlcy5cbiAgICAgIHRoaXMuY2FjaGVDaCA9IChlby5jYWNoZV9sYXN0X2NoYW5uZWxfbmV4dC5kYXRhIGFzIEZsb2F0MzJBcnJheSkuc2xpY2UoKVxuXG4gICAgICB0aGlzLmNhY2hlVGltZSA9IChlby5jYWNoZV9sYXN0X3RpbWVfbmV4dC5kYXRhIGFzIEZsb2F0MzJBcnJheSkuc2xpY2UoKVxuXG4gICAgICAvLyBHcm93cyB1bnRpbCBORU1PX0xFRlRfQ09OVEVYVCBhbmQgdGhlbiBzdGF5cyB0aGVyZS5cbiAgICAgIHRoaXMuY2FjaGVMZW4gPSAoXG4gICAgICAgIGVvLmNhY2hlX2xhc3RfY2hhbm5lbF9uZXh0X2xlbi5kYXRhIGFzIEJpZ0ludDY0QXJyYXlcbiAgICAgICkuc2xpY2UoKVxuXG4gICAgICBkaXNwb3NlT3J0KFtdLCBlbyBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIE9ydFRlbnNvcj4pXG5cbiAgICAgIC8vIFJOTi1UIGdyZWVkeSBkZWNvZGUgb3ZlciB0aGlzIGNodW5rJ3MgZW5jb2RlciBmcmFtZXMuXG5cbiAgICAgIGNvbnN0IGRlY29kZVN0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgbGV0IGRlY29kZXJDYWxscyA9IDBcbiAgICAgIGxldCBlbWl0dGVkVG9rZW5zVGhpc0NodW5rID0gMFxuICAgICAgbGV0IG1heFN5bUhpdHMgPSAwXG5cblxuICAgICAgLy8gT3V0ZXIgbG9vcCBvdmVyIGVuY29kZXIgdGltZSBpbmRleC5cbiAgICAgIGZvciAobGV0IGZpID0gMDsgZmkgPCBuRW5jOyBmaSsrKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gbmV3IEZsb2F0MzJBcnJheShjb25maWcuTkVNT19ISURERU5fRElNKVxuXG4gICAgICAgIC8vIElubmVyIGxvb3Agb3ZlciBjaGFubmVsL2hpZGRlbi1kaW0gaW5kZXguXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29uZmlnLk5FTU9fSElEREVOX0RJTTsgYysrKSB7XG4gICAgICAgICAgZnJhbWVbY10gPSBlbmNPdXRbYyAqIG5UaW1lICsgZmldXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3ltID0gMFxuXG4gICAgICAgIC8vIERlY29kZXIgcHJvY2Vzc2VzIGVhY2ggdGltZSBmcmFtZSwgYWdncmVnYXRlZCBhY3Jvc3MgYWxsIGNoYW5uZWxzLlxuICAgICAgICB3aGlsZSAoc3ltIDwgY29uZmlnLk5FTU9fTUFYX1NZTSkge1xuICAgICAgICAgIGNvbnN0IGRvdXQgPSBhd2FpdCB0aGlzLm1vZGVsLnJ1bkRlY29kZXIoe1xuICAgICAgICAgICAgZW5jb2Rlcl9vdXRwdXRzOiBuZXcgb3J0LlRlbnNvcignZmxvYXQzMicsIGZyYW1lLCBbXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIGNvbmZpZy5ORU1PX0hJRERFTl9ESU0sXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBdKSxcblxuICAgICAgICAgICAgdGFyZ2V0czogbmV3IG9ydC5UZW5zb3IoXG4gICAgICAgICAgICAgICdpbnQzMicsXG4gICAgICAgICAgICAgIEludDMyQXJyYXkuZnJvbShbdGhpcy5wcmV2VG9rZW5dKSxcbiAgICAgICAgICAgICAgWzEsIDFdLFxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgdGFyZ2V0X2xlbmd0aDogbmV3IG9ydC5UZW5zb3IoJ2ludDMyJywgSW50MzJBcnJheS5mcm9tKFsxXSksIFsxXSksXG5cbiAgICAgICAgICAgIGlucHV0X3N0YXRlc18xOiBuZXcgb3J0LlRlbnNvcignZmxvYXQzMicsIHRoaXMuc3QxLCBbXG4gICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIGNvbmZpZy5ORU1PX0RFQ09ERVJfTFNUTV9ESU0sXG4gICAgICAgICAgICBdKSxcblxuICAgICAgICAgICAgaW5wdXRfc3RhdGVzXzI6IG5ldyBvcnQuVGVuc29yKCdmbG9hdDMyJywgdGhpcy5zdDIsIFtcbiAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgY29uZmlnLk5FTU9fREVDT0RFUl9MU1RNX0RJTSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIH0pXG5cblxuICAgICAgICAgIGRlY29kZXJDYWxscysrXG5cblxuICAgICAgICAgIGNvbnN0IHRvayA9IGFyZ21heChkb3V0Lm91dHB1dHMuZGF0YSBhcyBGbG9hdDMyQXJyYXkpXG5cbiAgICAgICAgICBpZiAodG9rICE9PSBjb25maWcuTkVNT19CTEFOSykge1xuICAgICAgICAgICAgdGhpcy5oeXAucHVzaCh0b2spXG4gICAgICAgICAgICB0aGlzLnByZXZUb2tlbiA9IHRva1xuICAgICAgICAgICAgdGhpcy5zdDEgPSAoZG91dC5vdXRwdXRfc3RhdGVzXzEuZGF0YSBhcyBGbG9hdDMyQXJyYXkpLnNsaWNlKClcbiAgICAgICAgICAgIHRoaXMuc3QyID0gKGRvdXQub3V0cHV0X3N0YXRlc18yLmRhdGEgYXMgRmxvYXQzMkFycmF5KS5zbGljZSgpXG5cbiAgICAgICAgICAgIGVtaXR0ZWRUb2tlbnNUaGlzQ2h1bmsrK1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcG9zZU9ydChbXSwgZG91dCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIE9ydFRlbnNvcj4pXG5cbiAgICAgICAgICBpZiAodG9rID09PSBjb25maWcuTkVNT19CTEFOSykge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzeW0rK1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc3ltID09PSBjb25maWcuTkVNT19NQVhfU1lNKSB7XG4gICAgICAgICAgbWF4U3ltSGl0cysrXG4gICAgICAgIH1cblxuICAgICAgfVxuXG5cbiAgICAgIGNvbnN0IGRlY29kZU1zID0gcGVyZm9ybWFuY2Uubm93KCkgLSBkZWNvZGVTdGFydGVkXG5cblxuICAgICAgdGhpcy5mcm9udGVuZC5jb25zdW1lQ2h1bmsoKVxuXG5cbiAgICAgIGNvbnN0IG1vZGVsTXMgPSBlbmNvZGVyTXMgKyBkZWNvZGVNc1xuICAgICAgY29uc3QgdG90YWxNcyA9IHBlcmZvcm1hbmNlLm5vdygpIC0gY2h1bmtTdGFydGVkXG4gICAgICBjb25zdCBjaHVua0F1ZGlvTXMgPSB0aGlzLnNhbXBsZXNUb01zKFxuICAgICAgICBjb25maWcuTkVNT19DSFVOSyAqIGNvbmZpZy5IT1BfTEVOR1RILFxuICAgICAgKVxuXG4gICAgICB0aGlzLmRlYnVnKCdjaHVuayBwcm9jZXNzZWQnLCB7XG4gICAgICAgIGNodW5rSWR4LFxuXG4gICAgICAgIHBhY2tNcyxcbiAgICAgICAgZW5jb2Rlck1zLFxuICAgICAgICBkZWNvZGVNcyxcbiAgICAgICAgbW9kZWxNcyxcbiAgICAgICAgdG90YWxNcyxcblxuICAgICAgICBjaHVua0F1ZGlvTXMsXG4gICAgICAgIG1vZGVsUnRmOiBtb2RlbE1zIC8gY2h1bmtBdWRpb01zLFxuICAgICAgICB0b3RhbFJ0ZjogdG90YWxNcyAvIGNodW5rQXVkaW9NcyxcblxuICAgICAgICBuVGltZSxcbiAgICAgICAgbkVuYyxcbiAgICAgICAgZGVjb2RlckNhbGxzLFxuICAgICAgICBlbWl0dGVkVG9rZW5zVGhpc0NodW5rLFxuICAgICAgICBoeXBUb2tlbnNUb3RhbDogdGhpcy5oeXAubGVuZ3RoLFxuICAgICAgICBtYXhTeW1IaXRzLFxuXG4gICAgICAgIGNhY2hlTGVuOiBOdW1iZXIodGhpcy5jYWNoZUxlblswXSksXG5cbiAgICAgICAgZnJvbnRlbmRCZWZvcmUsXG4gICAgICAgIGZyb250ZW5kQWZ0ZXI6IHRoaXMuZnJvbnRlbmQuZGVidWdTdGF0ZSgpLFxuICAgICAgfSlcblxuXG4gICAgICBhdExlYXN0T25lQ2h1bmtQcm9jZXNzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKGF0TGVhc3RPbmVDaHVua1Byb2Nlc3NlZCB8fCBmaW5hbCkge1xuICAgICAgY29uc3QgdGV4dCA9IHRoaXMuaHlwXG4gICAgICAgIC5tYXAoKGlkKSA9PiB0b2tlbnNbaWRdID8/ICcnKVxuICAgICAgICAuam9pbignJylcbiAgICAgICAgLnJlcGxhY2UoL+KWgS9nLCAnICcpXG4gICAgICAgIC50cmltKClcblxuICAgICAgaWYgKHRleHQgfHwgZmluYWwpIHtcbiAgICAgICAgdGhpcy5vblJlc3VsdCh0ZXh0LCBmaW5hbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgc2FtcGxlc1RvTXMoc2FtcGxlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHNhbXBsZXMgKiAxMDAwKSAvIGNvbmZpZy5UQVJHRVRfU0FNUExFX1JBVEVcbiAgfVxuXG4gIHByaXZhdGUgZGVidWcobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiB2b2lkIHtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGV0YWlscyA/PyB7fSwgKF9rZXksIHZhbHVlOiB1bmtub3duKSA9PlxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnYmlnaW50JyA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2YWx1ZSxcbiAgICApXG5cbiAgICBjb25zb2xlLmVycm9yKGBbTkVNT19ERUJVR10gJHttZXNzYWdlfSAke2pzb259YClcbiAgfVxuXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjYgVGhlIEJyYXZlIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4vLyBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cblxuLy8gT1JULVdlYiBzcGVlY2ggd29ya2VyLiBBIGNyb3NzLW9yaWdpbi1pc29sYXRlZCByZW5kZXJlciB0aGF0IHJ1bnMgdGhlXG4vLyBOZW1vdHJvbiAwLjZCIGludDQgT05OWCBlbmNvZGVyICsgUk5OLVQgZGVjb2RlciB0aHJvdWdoIG9ubnhydW50aW1lLXdlYlxuLy8gKG11bHRpLXRocmVhZGVkIFdBU00pIGFuZCBleHBvc2VzIGEgYnJvd3Nlci1kcml2ZW4gbW9qbyBjb250cmFjdDogYVxuLy8gZmFjdG9yeSB0aGF0IGxvYWRzIHRoZSBtb2RlbCB3aG9sZSBhbmQgbWludHMgcGVyLXV0dGVyYW5jZSBBU1Igc3RyZWFtcy5cbi8vIFRoaXMgZmlsZSBpcyB0aGUgbW9qbyB0cmFuc3BvcnQgbGF5ZXI7IHRoZSBPUlQgZW52aXJvbm1lbnQgbGl2ZXMgaW5cbi8vIG9ydF9lbnYudHMgYW5kIHRoZSBtb2RlbC9pbmZlcmVuY2UgaW4gbmVtb3Ryb25fcmVjb2duaXplci50cy5cblxuaW1wb3J0IHtcbiAgT3J0TW9kZWxGaWxlcyxcbiAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdCxcbiAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW50ZXJmYWNlLFxuICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZWNlaXZlcixcbn0gZnJvbSAnZ2VuL2JyYXZlL2NvbXBvbmVudHMvbG9jYWxfYWkvY29yZS9vbl9kZXZpY2Vfc3BlZWNoX3JlY29nbml0aW9uLm1vam9tLm0uanMnXG5pbXBvcnQge1xuICBBc3JTdHJlYW1JbnB1dEludGVyZmFjZSxcbiAgQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIsXG4gIEFzclN0cmVhbUlucHV0UmVjZWl2ZXIsXG4gIEFzclN0cmVhbU9wdGlvbnMsXG4gIEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSxcbiAgQXVkaW9EYXRhLFxufSBmcm9tICdnZW4vc2VydmljZXMvb25fZGV2aWNlX21vZGVsL3B1YmxpYy9tb2pvbS9vbl9kZXZpY2VfbW9kZWwubW9qb20ubS5qcydcblxuaW1wb3J0IHsgaW5zdGFsbFRydXN0ZWRUeXBlc1BvbGljeSB9IGZyb20gJy4vb3J0X2VudidcbmltcG9ydCB7IE5lbW90cm9uU3RyZWFtU2Vzc2lvbiwgT3J0TmVtb3Ryb25Nb2RlbCB9IGZyb20gJy4vbmVtb3Ryb25fcmVjb2duaXplcidcblxuaW1wb3J0IHsgcGFyc2VUb2tlbnMsIHJlYWRCaWdCdWZmZXIgfSBmcm9tICcuL3V0aWxzJ1xuXG4vLyBUaGluIG1vam8gZW5kcG9pbnQgZm9yIG9uZSBBU1Igc3RyZWFtOiBvd25zIHRoZSByZWNlaXZlciBhbmQgcmVzcG9uZGVyXG4vLyBhbmQgYnJpZGdlcyBBc3JTdHJlYW1JbnB1dCBjYWxscyB0byBhIG1vam8tZnJlZSBOZW1vdHJvblN0cmVhbVNlc3Npb24uXG4vLyBFbmdpbmUgZGlzY29ubmVjdCAofmVuZCBvZiB1dHRlcmFuY2UpIHRyaWdnZXJzIHRoZSBmaW5hbCBmbHVzaC5cbmNsYXNzIEFzclN0cmVhbUlucHV0QWRhcHRlciBpbXBsZW1lbnRzIEFzclN0cmVhbUlucHV0SW50ZXJmYWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSByZWNlaXZlcjogQXNyU3RyZWFtSW5wdXRSZWNlaXZlclxuICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb246IE5lbW90cm9uU3RyZWFtU2Vzc2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1vZGVsOiBPcnROZW1vdHJvbk1vZGVsLFxuICAgIHNhbXBsZVJhdGVIejogbnVtYmVyLFxuICAgIHBlbmRpbmc6IEFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyLFxuICAgIHJlc3BvbmRlcjogQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlLFxuICAgIG9uQ2xvc2U6ICgpID0+IHZvaWQsXG4gICkge1xuICAgIGNvbnN0IG9uUmVzdWx0ID0gKHRleHQ6IHN0cmluZywgaXNGaW5hbDogYm9vbGVhbikgPT4ge1xuICAgICAgLy8gRW1wdHkgdHJhbnNjcmlwdCBtZWFucyBub3RoaW5nIHdhcyByZWNvZ25pemVkLiBTZW5kIGFuIGVtcHR5XG4gICAgICAvLyB2ZWN0b3IgcmF0aGVyIHRoYW4gYSBib2d1cyBbRklOQUxdIFwiXCIgKHN0aWxsIGVuZHMgdGhlIHNlc3Npb24pLlxuICAgICAgcmVzcG9uZGVyLm9uUmVzcG9uc2UoXG4gICAgICAgIHRleHRcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRyYW5zY3JpcHQ6IHRleHQsXG4gICAgICAgICAgICAgICAgaXNGaW5hbCxcbiAgICAgICAgICAgICAgICBhdWRpb1N0YXJ0VGltZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGF1ZGlvRW5kVGltZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW10sXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gQXNyU3RyZWFtUmVzcG9uZGVyIGNhcnJpZXMgcmVzdWx0cyBvbmx5LCBzbyBhIGNsb3NlZCBwaXBlIGlzIGhvdyB0aGVcbiAgICAvLyBlbmdpbmUgbGVhcm5zIGluZmVyZW5jZSB3YXMgYWJvcnRlZCBhbmQgZW5kcyB0aGUgcmVjb2duaXRpb24gaW4gZXJyb3IuXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHJlc3BvbmRlci4kLmNsb3NlKClcblxuICAgIHRoaXMuc2Vzc2lvbiA9IG5ldyBOZW1vdHJvblN0cmVhbVNlc3Npb24oXG4gICAgICBtb2RlbCxcbiAgICAgIHNhbXBsZVJhdGVIeixcbiAgICAgIG9uUmVzdWx0LFxuICAgICAgb25FcnJvcixcbiAgICApXG4gICAgdGhpcy5yZWNlaXZlciA9IG5ldyBBc3JTdHJlYW1JbnB1dFJlY2VpdmVyKHRoaXMpXG4gICAgdGhpcy5yZWNlaXZlci4kLmJpbmRIYW5kbGUocGVuZGluZy5oYW5kbGUpXG4gICAgdGhpcy5yZWNlaXZlci5vbkNvbm5lY3Rpb25FcnJvci5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICB0aGlzLnNlc3Npb24uZmluaXNoKClcbiAgICAgIG9uQ2xvc2UoKVxuICAgIH0pXG4gIH1cblxuICBhZGRBdWRpb0NodW5rKGRhdGE6IEF1ZGlvRGF0YSkge1xuICAgIHRoaXMuc2Vzc2lvbi5hZGRBdWRpbyhuZXcgRmxvYXQzMkFycmF5KGRhdGEuZGF0YSkpXG4gIH1cbn1cblxuY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW1wbFxuICBpbXBsZW1lbnRzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUludGVyZmFjZVxue1xuICBwcml2YXRlIHJlYWRvbmx5IHJlY2VpdmVyOiBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZWNlaXZlclxuICBwcml2YXRlIHJlYWRvbmx5IHN0cmVhbXMgPSBuZXcgU2V0PEFzclN0cmVhbUlucHV0QWRhcHRlcj4oKVxuICBwcml2YXRlIG1vZGVsOiBPcnROZW1vdHJvbk1vZGVsIHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlY2VpdmVyID0gbmV3IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlY2VpdmVyKHRoaXMpXG4gIH1cblxuICBnZXRQZW5kaW5nUmVtb3RlKCkge1xuICAgIHJldHVybiB0aGlzLnJlY2VpdmVyLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVtb3RlKClcbiAgfVxuXG4gIGFzeW5jIGluaXQoZmlsZXM6IE9ydE1vZGVsRmlsZXMpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5tb2RlbCA9IGF3YWl0IE9ydE5lbW90cm9uTW9kZWwuYnVpbGRGcm9tQnl0ZXMoXG4gICAgICAgIHJlYWRCaWdCdWZmZXIoZmlsZXMuZW5jb2RlciwgJ0VuY29kZXInKSxcbiAgICAgICAgcmVhZEJpZ0J1ZmZlcihmaWxlcy5lbmNvZGVyRGF0YSwgJ0VuY29kZXJEYXRhJyksXG4gICAgICAgIHJlYWRCaWdCdWZmZXIoZmlsZXMuZGVjb2RlciwgJ0RlY29kZXInKSxcbiAgICAgICAgcmVhZEJpZ0J1ZmZlcihmaWxlcy5kZWNvZGVyRGF0YSwgJ0RlY29kZXJEYXRhJyksXG4gICAgICAgIHBhcnNlVG9rZW5zKHJlYWRCaWdCdWZmZXIoZmlsZXMudG9rZW5zLCAnVG9rZW5zJykpLFxuICAgICAgICBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgIHJlYWRCaWdCdWZmZXIoZmlsZXMubWVsRmlsdGVycywgJ0ZpbHRlcmJhbmsnKS5zbGljZSgpLmJ1ZmZlcixcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW3NwZWVjaC13b3JrZXJdIGluaXQgZmFpbGVkOicsIGVycilcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVBc3JTdHJlYW0oXG4gICAgb3B0aW9uczogQXNyU3RyZWFtT3B0aW9ucyxcbiAgICBzdHJlYW06IEFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyLFxuICAgIHJlc3BvbmRlcjogQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlLFxuICApIHtcbiAgICBpZiAoIXRoaXMubW9kZWwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tzcGVlY2gtd29ya2VyXSBjcmVhdGVBc3JTdHJlYW0gYmVmb3JlIGluaXQnKVxuICAgICAgcmVzcG9uZGVyLiQuY2xvc2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFkYXB0ZXI6IEFzclN0cmVhbUlucHV0QWRhcHRlclxuICAgIHRyeSB7XG4gICAgICBhZGFwdGVyID0gbmV3IEFzclN0cmVhbUlucHV0QWRhcHRlcihcbiAgICAgICAgdGhpcy5tb2RlbCxcbiAgICAgICAgb3B0aW9ucy5zYW1wbGVSYXRlSHosXG4gICAgICAgIHN0cmVhbSxcbiAgICAgICAgcmVzcG9uZGVyLFxuICAgICAgICAoKSA9PiB0aGlzLnN0cmVhbXMuZGVsZXRlKGFkYXB0ZXIpLFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbc3BlZWNoLXdvcmtlcl0gY3JlYXRlQXNyU3RyZWFtIGZhaWxlZDonLCBlcnJvcilcbiAgICAgIHJlc3BvbmRlci4kLmNsb3NlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuc3RyZWFtcy5hZGQoYWRhcHRlcilcbiAgfVxufVxuXG5pbnN0YWxsVHJ1c3RlZFR5cGVzUG9saWN5KClcbmNvbnN0IGZhY3RvcnlIb3N0ID0gU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdC5nZXRSZW1vdGUoKVxuY29uc3QgZmFjdG9yeSA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbXBsKClcbmZhY3RvcnlIb3N0LnJlZ2lzdGVyRmFjdG9yeShmYWN0b3J5LmdldFBlbmRpbmdSZW1vdGUoKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==