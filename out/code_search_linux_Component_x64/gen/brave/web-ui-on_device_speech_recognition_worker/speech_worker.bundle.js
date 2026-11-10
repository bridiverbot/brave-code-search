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

;// ../out/code_search_linux_Component_x64/gen/mojo/public/js/bindings.js
const mojo={internal:{interfaceSupport:{}},interfaceControl:{},pipeControl:{}};mojo.internal.kArrayHeaderSize=8,mojo.internal.kStructHeaderSize=8,mojo.internal.kStructHeaderSizeOffset=0,mojo.internal.kStructHeaderVersionOffset=4,mojo.internal.kUnionHeaderSize=8,mojo.internal.kUnionDataSize=16,mojo.internal.kMessageV0HeaderSize=24,mojo.internal.kMessageV1HeaderSize=32,mojo.internal.kMessageV2HeaderSize=48,mojo.internal.kMapDataSize=24,mojo.internal.kEncodedInvalidHandleValue=4294967295,mojo.internal.kMessageFlagExpectsResponse=1,mojo.internal.kMessageFlagIsResponse=2,mojo.internal.kInterfaceNamespaceBit=2147483648,mojo.internal.kHostLittleEndian=!!new Uint8Array(new Uint16Array([1]).buffer)[0],mojo.internal.DataViewWrapper=class{constructor(e,n=0){if(this.dataView_,this.byteOffset,e instanceof mojo.internal.DataViewWrapper)this.dataView_=e.dataView_,this.byteOffset=e.byteOffset+n;else if(e instanceof DataView)this.dataView_=0===e.byteOffset&&e.byteLength===e.buffer.byteLength?e:new DataView(e.buffer),this.byteOffset=e.byteOffset+n;else{if(!(e instanceof ArrayBuffer))throw new Error("DataViewWrapper constructor requires a DataViewWrapper, DataView, or ArrayBuffer instance");this.dataView_=new DataView(e),this.byteOffset=n}}get buffer(){return this.dataView_.buffer}getUint8(e){return this.dataView_.getUint8(this.byteOffset+e)}getInt8(e){return this.dataView_.getInt8(this.byteOffset+e)}getUint16(e,n){return this.dataView_.getUint16(this.byteOffset+e,n)}getInt16(e,n){return this.dataView_.getInt16(this.byteOffset+e,n)}getUint32(e,n){return this.dataView_.getUint32(this.byteOffset+e,n)}getInt32(e,n){return this.dataView_.getInt32(this.byteOffset+e,n)}getFloat32(e,n){return this.dataView_.getFloat32(this.byteOffset+e,n)}getFloat64(e,n){return this.dataView_.getFloat64(this.byteOffset+e,n)}setUint8(e,n){this.dataView_.setUint8(this.byteOffset+e,n)}setInt8(e,n){this.dataView_.setInt8(this.byteOffset+e,n)}setUint16(e,n,t){this.dataView_.setUint16(this.byteOffset+e,n,t)}setInt16(e,n,t){this.dataView_.setInt16(this.byteOffset+e,n,t)}setUint32(e,n,t){this.dataView_.setUint32(this.byteOffset+e,n,t)}setInt32(e,n,t){this.dataView_.setInt32(this.byteOffset+e,n,t)}setFloat32(e,n,t){this.dataView_.setFloat32(this.byteOffset+e,n,t)}setFloat64(e,n,t){this.dataView_.setFloat64(this.byteOffset+e,n,t)}},mojo.internal.isNullOrUndefined=function(e){return null==e},mojo.internal.isNullableValueKindField=function(e){return void 0!==e.nullableValueKindProperties},mojo.internal.align=function(e,n){return e+(n-e%n)%n},mojo.internal.setInt64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setInt32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setInt32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian))},mojo.internal.setUint64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setUint32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian))},mojo.internal.getInt64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getInt32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getInt32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.getUint64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getUint32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getUint32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.MessageDimensions,mojo.internal.getMojoFieldValue=function(e,n){if(n.fieldGetter)return n.fieldGetter(e);if(e&&mojo.internal.isNullableValueKindField(n)){const t=n.nullableValueKindProperties,o=!mojo.internal.isNullOrUndefined(e[t.originalFieldName]);return t.isPrimary?o:o?e[t.originalFieldName]:n.defaultValue}return e[n.name]},mojo.internal.computeStructDimensions=function(e,n){let t=e.packedSize,o=0;for(const i of e.fields){let e=mojo.internal.getMojoFieldValue(n,i);if(mojo.internal.isNullOrUndefined(e)&&(e=i.defaultValue),null!==e)if(i.type.$.computeDimensions){const n=i.type.$.computeDimensions(e,i.nullable);t+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(o+=n.numInterfaceIds)}else i.type.$.hasInterfaceId&&o++}return{size:t,numInterfaceIds:o}},mojo.internal.computeUnionDimensions=function(e,n,t){let o=n?mojo.internal.kUnionDataSize:0,i=0;const r=Object.keys(t);if(1!==r.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const s=r[0],a=e.fields[s],l=t[s];if(!mojo.internal.isNullOrUndefined(l))if(a.type.$.computeDimensions){const e=!!a.type.$.unionSpec||a.nullable,n=a.type.$.computeDimensions(l,e);o+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(i+=n.numInterfaceIds)}else a.type.$.hasInterfaceId&&i++;return{size:o,numInterfaceIds:i}},mojo.internal.computeInlineArraySize=function(e,n){return e.elementType===mojo.internal.Bool?mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+(n.length+7>>3):mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+n.length*e.elementType.$.arrayElementSize(!!e.elementNullable)},mojo.internal.computeHasValueBitfieldSize=function(e,n){if(!(!!e.elementNullable&&!!e.elementType.$.isValueType))return 0;const t=e.elementType.$.arrayElementSize(!0),o=8*t;return((n+o-1)/o|0)*t},mojo.internal.computeTotalArraySize=function(e,n){const t=mojo.internal.computeInlineArraySize(e,n);if(!e.elementType.$.computeDimensions)return t;let o=t;for(let t of n)mojo.internal.isNullOrUndefined(t)||(o+=mojo.internal.align(e.elementType.$.computeDimensions(t,!!e.elementNullable).size,8));return o},mojo.internal.Message=class{constructor(e,n,t,o,i,r,s){const a=mojo.internal.computeStructDimensions(r,s);let l,c;a.numInterfaceIds>0?(l=mojo.internal.kMessageV2HeaderSize,c=2):t&(mojo.internal.kMessageFlagExpectsResponse|mojo.internal.kMessageFlagIsResponse)?(l=mojo.internal.kMessageV1HeaderSize,c=1):(l=mojo.internal.kMessageV0HeaderSize,c=0);const d=l+a.size,u=a.numInterfaceIds>0?mojo.internal.kArrayHeaderSize+4*a.numInterfaceIds:0,p=d+mojo.internal.align(u,8);this.buffer=new ArrayBuffer(p),this.handles=[];const m=new DataView(this.buffer);m.setUint32(0,l,mojo.internal.kHostLittleEndian),m.setUint32(4,c,mojo.internal.kHostLittleEndian),m.setUint32(8,n,mojo.internal.kHostLittleEndian),m.setUint32(12,o,mojo.internal.kHostLittleEndian),m.setUint32(16,t,mojo.internal.kHostLittleEndian),m.setUint32(20,0),c>=1&&(mojo.internal.setUint64(m,24,i),c>=2&&(mojo.internal.setUint64(m,32,BigInt(16)),mojo.internal.setUint64(m,40,BigInt(d-40)),m.setUint32(d,u,mojo.internal.kHostLittleEndian),m.setUint32(d+4,a.numInterfaceIds||0,mojo.internal.kHostLittleEndian))),this.nextInterfaceIdIndex_=0,this.interfaceIds_=null,a.numInterfaceIds&&(this.interfaceIds_=new Uint32Array(this.buffer,d+mojo.internal.kArrayHeaderSize,a.numInterfaceIds)),this.nextAllocationOffset_=l;const f=this.allocate(r.packedSize);new mojo.internal.Encoder(this,f,{endpoint:e}).encodeStructInline(r,s)}allocate(e){const n=mojo.internal.align(e,8),t=new DataView(this.buffer,this.nextAllocationOffset_,n);return this.nextAllocationOffset_+=n,t}},mojo.internal.MessageContext,mojo.internal.Encoder=class{constructor(e,n,t=null){this.context_=t,this.message_=e,this.data_=n}encodeBool(e,n,t){const o=this.data_.getUint8(e);t?this.data_.setUint8(e,o|1<<n):this.data_.setUint8(e,o&~(1<<n))}encodeInt8(e,n){this.data_.setInt8(e,n)}encodeUint8(e,n){this.data_.setUint8(e,n)}encodeInt16(e,n){this.data_.setInt16(e,n,mojo.internal.kHostLittleEndian)}encodeUint16(e,n){this.data_.setUint16(e,n,mojo.internal.kHostLittleEndian)}encodeInt32(e,n){this.data_.setInt32(e,n,mojo.internal.kHostLittleEndian)}encodeUint32(e,n){this.data_.setUint32(e,n,mojo.internal.kHostLittleEndian)}encodeInt64(e,n){mojo.internal.setInt64(this.data_,e,n)}encodeUint64(e,n){mojo.internal.setUint64(this.data_,e,n)}encodeFloat(e,n){this.data_.setFloat32(e,n,mojo.internal.kHostLittleEndian)}encodeDouble(e,n){this.data_.setFloat64(e,n,mojo.internal.kHostLittleEndian)}encodeHandle(e,n){this.encodeUint32(e,this.message_.handles.length),this.message_.handles.push(n)}encodeAssociatedEndpoint(e,n){console.assert(n.isPendingAssociation,"expected unbound associated endpoint");const t=this.context_.endpoint.associatePeerOfOutgoingEndpoint(n),o=this.message_.nextInterfaceIdIndex_++;this.encodeUint32(e,o),this.message_.interfaceIds_[o]=t}encodeString(e,n){if("string"!=typeof n)throw new Error("Unxpected non-string value for string field.");this.encodeArray({elementType:mojo.internal.Uint8},e,mojo.internal.Encoder.stringToUtf8Bytes(n))}encodeOffset(e,n){this.encodeUint64(e,n-this.data_.byteOffset-e)}encodeArray(e,n,t){const o=mojo.internal.computeInlineArraySize(e,t),i=this.message_.allocate(o),r=new mojo.internal.Encoder(this.message_,i,this.context_);this.encodeOffset(n,i.byteOffset),r.encodeUint32(0,o),r.encodeUint32(4,t.length),this.maybeEncodeHasValueBitfield(e,r,8,t);let s=8+mojo.internal.computeHasValueBitfieldSize(e,t.length);if(e.elementType===mojo.internal.Bool){let e=0;for(const n of t)r.encodeBool(s,e,n),e++,8==e&&(e=0,s++)}else for(const n of t){if(null===n){if(!e.elementNullable)throw new Error("Trying to send a null element in an array of non-nullable elements");e.elementType.$.encodeNull(r,s)}else e.elementType.$.encode(n,r,s,0,!!e.elementNullable);s+=e.elementType.$.arrayElementSize(!!e.elementNullable)}}maybeEncodeHasValueBitfield(e,n,t,o){if(!e.elementNullable||!e.elementType.$.isValueType)return;let i=0,r=t;for(const e of o)null==e?n.encodeBool(r,i,!1):n.encodeBool(r,i,!0),i++,8==i&&(i=0,r++)}encodeMap(e,n,t){let o,i;"Map"==t.constructor.name?(o=Array.from(t.keys()),i=Array.from(t.values())):(o=Object.keys(t),i=o.map((e=>t[e])));const r=this.message_.allocate(mojo.internal.kMapDataSize),s=new mojo.internal.Encoder(this.message_,r,this.context_);this.encodeOffset(n,r.byteOffset),s.encodeUint32(0,mojo.internal.kMapDataSize),s.encodeUint32(4,0),s.encodeArray({elementType:e.keyType},8,o),s.encodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16,i)}encodeStruct(e,n,t){const o=this.message_.allocate(e.packedSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeStructInline(e,t)}encodeStructInline(e,n){const t=e.versions;this.encodeUint32(0,e.packedSize),this.encodeUint32(4,t[t.length-1].version);for(const t of e.fields){const o=mojo.internal.kStructHeaderSize+t.packedOffset,i=e=>{t.type.$.encode(e,this,o,t.packedBitOffset,t.nullable)},r=mojo.internal.isNullOrUndefined(n)?void 0:mojo.internal.getMojoFieldValue(n,t);if(mojo.internal.isNullOrUndefined(n)||mojo.internal.isNullOrUndefined(r))if(null===t.defaultValue){if(!t.nullable)throw new Error(e.name+' missing value for non-nullable field "'+t.name+`", got: "${r}"...`);t.type.$.encodeNull(this,o)}else i(t.defaultValue);else i(r)}}encodeUnionAsPointer(e,n,t){const o=this.message_.allocate(mojo.internal.kUnionDataSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeUnion(e,0,t)}encodeUnion(e,n,t){const o=Object.keys(t);if(1!==o.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const i=o[0],r=e.fields[i];this.encodeUint32(n,mojo.internal.kUnionDataSize),this.encodeUint32(n+4,r.ordinal);const s=n+mojo.internal.kUnionHeaderSize;void 0===r.type.$.unionSpec?r.type.$.encode(t[i],this,s,0,r.nullable):this.encodeUnionAsPointer(r.type.$.unionSpec,s,t[i])}static stringToUtf8Bytes(e){return mojo.internal.Encoder.textEncoder||(mojo.internal.Encoder.textEncoder=new TextEncoder("utf-8")),mojo.internal.Encoder.textEncoder.encode(e)}},mojo.internal.Encoder.textEncoder=null,mojo.internal.Decoder=class{constructor(e,n,t=null){this.context_=t,this.data_=e instanceof mojo.internal.DataViewWrapper?e:new mojo.internal.DataViewWrapper(e),this.handles_=n}decodeBool(e,n){return!!(this.data_.getUint8(e)&1<<n)}decodeInt8(e){return this.data_.getInt8(e)}decodeUint8(e){return this.data_.getUint8(e)}decodeInt16(e){return this.data_.getInt16(e,mojo.internal.kHostLittleEndian)}decodeUint16(e){return this.data_.getUint16(e,mojo.internal.kHostLittleEndian)}decodeInt32(e){return this.data_.getInt32(e,mojo.internal.kHostLittleEndian)}decodeUint32(e){return this.data_.getUint32(e,mojo.internal.kHostLittleEndian)}decodeInt64(e){return mojo.internal.getInt64(this.data_,e)}decodeUint64(e){return mojo.internal.getUint64(this.data_,e)}decodeFloat(e){return this.data_.getFloat32(e,mojo.internal.kHostLittleEndian)}decodeDouble(e){return this.data_.getFloat64(e,mojo.internal.kHostLittleEndian)}decodeHandle(e){const n=this.data_.getUint32(e,mojo.internal.kHostLittleEndian);if(4294967295==n)return null;if(n>=this.handles_.length)throw new Error("Decoded invalid handle index");return this.handles_[n]}decodeString(e){const n=this.decodeOffset(e);if(!n)return null;mojo.internal.Decoder.textDecoder||(mojo.internal.Decoder.textDecoder=new TextDecoder("utf-8"));const t=this.decodeUint32(n-this.data_.byteOffset+4);if(0===t)return"";const o=n+8;return mojo.internal.Decoder.textDecoder.decode(new Uint8Array(this.data_.buffer,o,t))}decodeOffset(e){const n=this.decodeUint64(e);if(0==n)return 0;if(n>BigInt(Number.MAX_SAFE_INTEGER))throw new Error("Mesage offset too large");return this.data_.byteOffset+e+Number(n)}decodeArray(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(4);if(!i)return[];const r=!!e.elementNullable&&e.elementType.$.isValueType,s=r?new Array(i):null;if(r){let e=8,n=0;for(let t=0;t<i;++t)s[t]=o.decodeBool(e,n),n++,8===n&&(n=0,e++)}let a=8+mojo.internal.computeHasValueBitfieldSize(e,i);const l=new Array(i);if(e.elementType===mojo.internal.Bool)for(let e=0;e<i;++e)r&&!s[e]?l[e]=null:l[e]=o.decodeBool(a+(e>>3),e%8);else for(let n=0;n<i;++n){if(r&&!s[n])l[n]=null;else{const t=e.elementType.$.decode(o,a,0,!!e.elementNullable);if(null===t&&!e.elementNullable)throw new Error("Received unexpected array element");l[n]=t}a+=e.elementType.$.arrayElementSize(!!e.elementNullable)}return l}decodeMap(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(0),r=o.decodeUint32(4);if(i!=mojo.internal.kMapDataSize||0!=r)throw new Error("Received invalid map data");const s=o.decodeArray({elementType:e.keyType},8),a=o.decodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16);if(s.length!=a.length)throw new Error("Received invalid map data");if(!e.keyType.$.isValidObjectKeyType){const e=new Map;for(let n=0;n<s.length;++n)e.set(s[n],a[n]);return e}const l={};for(let e=0;e<s.length;++e)l[s[e]]=a[e];return l}decodeStruct(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeStructInline(e)}isStructHeaderValid(e,n,t){const o=e.versions;for(let e=o.length-1;e>=0;--e){const i=o[e];if(t>i.version)return n>=i.packedSize;if(t==i.version)return n==i.packedSize}throw new Error(`Impossible version ${t} for struct ${e.name}`)}wrapStructInDataView(e,n,t){const o=this.decodeOffset(n);if(!o)return null;const i=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,o-this.data_.byteOffset),this.handles_,this.context_),r=i.decodeUint32(mojo.internal.kStructHeaderSizeOffset),s=i.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!i.isStructHeaderValid(e,r,s))throw new Error(`Received ${e.name} of invalid size (${r}) and/or version (${s})`);return new t(i,s,e.fields)}decodeStructInline(e){const n=this.decodeUint32(mojo.internal.kStructHeaderSizeOffset),t=this.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!this.isStructHeaderValid(e,n,t))throw new Error(`Received ${e.name} of invalid size (${n}) and/or version (${t})`);const o={};for(let n=0;n<e.fields.length;++n){const i=e.fields[n];if(mojo.internal.isNullableValueKindField(i)){const n=i.nullableValueKindProperties;if(!n.isPrimary)continue;{const r=i;o[n.originalFieldName]=this.decodeStructNullableValueField(r,e.fields,t)}}else o[i.name]=this.decodeStructField(i,t)}return o}decodeStructField(e,n){if(e.minVersion>n)return e.defaultValue;const t=mojo.internal.kStructHeaderSize+e.packedOffset,o=e.type.$.decode(this,t,e.packedBitOffset,!!e.nullable);if(null===o&&!e.nullable)throw new Error(`Received ${e.name} with invalid null field "${e.name}"`);return o}decodeStructNullableValueField(e,n,t){if(e.minVersion>t)return null;if(!this.decodeStructField(e,t))return null;const o=e.nullableValueKindProperties,i=n.find((e=>e.name===o.linkedValueFieldName));if(!i)throw new Error("could not find the expected value field spec: "+o.linkedValueFieldName);return this.decodeStructField(i,t)}decodeUnionFromPointer(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeUnion(e,0)}decodeUnion(e,n){if(0===this.decodeUint32(n))return null;const t=this.decodeUint32(n+4);for(const o in e.fields){const i=e.fields[o];if(i.ordinal===t){const t=(()=>{const e=n+mojo.internal.kUnionHeaderSize;return void 0!==i.type.$.unionSpec?this.decodeUnionFromPointer(i.type.$.unionSpec,e):i.type.$.decode(this,e,0,i.nullable)})();if(null===t&&!i.nullable)throw new Error(`Received ${e.name} with invalid null field: ${i.name}`);const r={};return r[o]=t,r}}}decodeInterfaceProxy(e,n){const t=this.decodeHandle(n);return t?new e(t):null}decodeInterfaceRequest(e,n){const t=this.decodeHandle(n);return t?new e(mojo.internal.interfaceSupport.createEndpoint(t)):null}decodeAssociatedEndpoint(e){if(!this.context_||!this.context_.endpoint)throw new Error("cannot deserialize associated endpoint without context");const n=this.context_.endpoint,t=new DataView(this.data_.buffer),o=Number(mojo.internal.getUint64(t,40)),i=t.getUint32(o+44,mojo.internal.kHostLittleEndian),r=new Uint32Array(t.buffer,o+mojo.internal.kArrayHeaderSize+40,i)[this.decodeUint32(e)],s=new mojo.internal.interfaceSupport.Endpoint(n.router,r);return n.router.addEndpoint(s,r),s}},mojo.internal.Decoder.textDecoder=null,mojo.internal.MessageHeader,mojo.internal.deserializeMessageHeader=function(e){const n=e.getUint32(0,mojo.internal.kHostLittleEndian),t=e.getUint32(4,mojo.internal.kHostLittleEndian);if(0==t&&n!=mojo.internal.kMessageV0HeaderSize||1==t&&n!=mojo.internal.kMessageV1HeaderSize||t>=2&&n<mojo.internal.kMessageV2HeaderSize)throw new Error("Received invalid message header");return{headerSize:n,headerVersion:t,interfaceId:e.getUint32(8,mojo.internal.kHostLittleEndian),ordinal:e.getUint32(12,mojo.internal.kHostLittleEndian),flags:e.getUint32(16,mojo.internal.kHostLittleEndian),requestId:t<1?0:e.getUint32(24,mojo.internal.kHostLittleEndian)}},mojo.internal.MojomTypeInfo,mojo.internal.MojomType,mojo.internal.ArraySpec,mojo.internal.MapSpec,mojo.internal.NullableValueKindProperties=class{constructor(){this.isPrimary,this.linkedValueFieldName,this.originalFieldName}},mojo.internal.StructFieldSpec,mojo.internal.StructVersionInfo,mojo.internal.StructSpec,mojo.internal.UnionFieldSpec,mojo.internal.UnionSpec,mojo.internal.Bool={$:{encode:function(e,n,t,o,i){n.encodeBool(t,o,e)},encodeNull:function(e,n){throw new Error("encoding bool null from type is not implemented")},decode:function(e,n,t,o){return e.decodeBool(n,t)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int8={$:{encode:function(e,n,t,o,i){n.encodeInt8(t,e)},encodeNull:function(e,n){e.encodeInt8(n,0)},decode:function(e,n,t,o){return e.decodeInt8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint8={$:{encode:function(e,n,t,o,i){n.encodeUint8(t,e)},encodeNull:function(e,n){e.encodeUint8(n,0)},decode:function(e,n,t,o){return e.decodeUint8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int16={$:{encode:function(e,n,t,o,i){n.encodeInt16(t,e)},encodeNull:function(e,n){e.encodeInt16(n,0)},decode:function(e,n,t,o){return e.decodeInt16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint16={$:{encode:function(e,n,t,o,i){n.encodeUint16(t,e)},encodeNull:function(e,n){e.encodeUint16(n,0)},decode:function(e,n,t,o){return e.decodeUint16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int32={$:{encode:function(e,n,t,o,i){n.encodeInt32(t,e)},encodeNull:function(e,n){e.encodeInt32(n,0)},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint32={$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e)},encodeNull:function(e,n){e.encodeUint32(n,0)},decode:function(e,n,t,o){return e.decodeUint32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int64={$:{encode:function(e,n,t,o,i){n.encodeInt64(t,e)},encodeNull:function(e,n){e.encodeInt64(n,0)},decode:function(e,n,t,o){return e.decodeInt64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Uint64={$:{encode:function(e,n,t,o,i){n.encodeUint64(t,e)},encodeNull:function(e,n){e.encodeUint64(n,0)},decode:function(e,n,t,o){return e.decodeUint64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Float={$:{encode:function(e,n,t,o,i){n.encodeFloat(t,e)},encodeNull:function(e,n){e.encodeFloat(n,0)},decode:function(e,n,t,o){return e.decodeFloat(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Double={$:{encode:function(e,n,t,o,i){n.encodeDouble(t,e)},encodeNull:function(e,n){e.encodeDouble(n,0)},decode:function(e,n,t,o){return e.decodeDouble(n)},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Handle={$:{encode:function(e,n,t,o,i){n.encodeHandle(t,e)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(e,n,t,o){return e.decodeHandle(n)},arrayElementSize:e=>4,isValidObjectKeyType:!1,isValueType:!1}},mojo.internal.String={$:{encode:function(e,n,t,o,i){n.encodeString(t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeString(n)},computeDimensions:function(e,n){return{size:mojo.internal.computeTotalArraySize({elementType:mojo.internal.Uint8},mojo.internal.Encoder.stringToUtf8Bytes(e))}},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!1}},mojo.internal.Array=function(e,n){const t={elementType:e,elementNullable:n};return{$:{arraySpec:t,encode:function(e,n,o,i,r){n.encodeArray(t,o,e)},encodeNull:function(e,n){},decode:function(e,n,o,i){return e.decodeArray(t,n)},computeDimensions:function(e,n){return{size:mojo.internal.computeTotalArraySize(t,e)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Map=function(e,n,t){const o={keyType:e,valueType:n,valueNullable:t};return{$:{mapSpec:o,encode:function(e,n,t,i,r){n.encodeMap(o,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeMap(o,n)},computeDimensions:function(o,i){const r="Map"==o.constructor.name?Array.from(o.keys()):Object.keys(o),s="Map"==o.constructor.name?Array.from(o.values()):r.map((e=>o[e]));return{size:mojo.internal.kMapDataSize+mojo.internal.align(mojo.internal.computeTotalArraySize({elementType:e},r),8)+mojo.internal.computeTotalArraySize({elementType:n,elementNullable:t},s)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Enum=function(){return{$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}}},mojo.internal.StructField=function(e,n,t,o,i,r,s=0,a=void 0,l=void 0){return{name:e,packedOffset:n,packedBitOffset:t,type:o,defaultValue:i,nullable:r,minVersion:s,nullableValueKindProperties:a,fieldGetter:l}},mojo.internal.Struct=function(e,n,t,o){const i=o.map((e=>({version:e[0],packedSize:e[1]}))),r={name:n,packedSize:i[i.length-1].packedSize,fields:t,versions:i};e.$={structSpec:r,encode:function(e,n,t,o,i){n.encodeStruct(r,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeStruct(r,n)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(r,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1}},mojo.internal.TypemappedStruct=function(e,n,t,o,i,r){const s=r.map((e=>({version:e[0],packedSize:e[1]}))),a={name:n,packedSize:s[s.length-1].packedSize,fields:i,versions:s};e.$={structSpec:a,encode:function(e,n,t,o,i){n.encodeStruct(a,t,e)},encodeNull:function(e,n){},decode:function(e,n,i,r){const s=e.wrapStructInDataView(a,n,t);return mojo.internal.isNullOrUndefined(s)?null:o.convert(s)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(a,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1}},mojo.internal.createStructDeserializer=function(e){return function(n){if(null==e.$||null==e.$.structSpec)throw new Error("Invalid struct mojom type!");return new mojo.internal.Decoder(n,[]).decodeStructInline(e.$.structSpec)}},mojo.internal.Union=function(e,n,t){const o={name:n,fields:t};e.$={unionSpec:o,encode:function(e,n,t,i,r){n.encodeUnion(o,t,e)},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeUnion(o,n)},computeDimensions:function(e,n){return mojo.internal.computeUnionDimensions(o,n,e)},arrayElementSize:e=>e?8:16,isValidObjectKeyType:!1}},mojo.internal.InterfaceProxy=function(e){return{$:{encode:function(n,t,o,i,r){const s=n.proxy.unbind();console.assert(s,`unexpected null ${e.name}`);const a=s.releasePipe();t.encodeHandle(o,a),t.encodeUint32(o+4,0)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return n.decodeInterfaceProxy(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.InterfaceRequest=function(e){return{$:{encode:function(n,t,o,i,r){if(!n.handle)throw new Error("Unexpected null "+e.name);t.encodeHandle(o,n.handle.releasePipe())},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return n.decodeInterfaceRequest(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.AssociatedInterfaceProxy=function(e){return{$:{type:e,encode:function(n,t,o,i,r){console.assert(n.proxy.endpoint&&n.proxy.endpoint.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.proxy.endpoint),t.encodeUint32(o+4,0)},encodeNull:function(e,n){e.encodeUint32(n,4294967295),e.encodeUint32(n+4,0)},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.AssociatedInterfaceRequest=function(e){return{$:{type:e,encode:function(n,t,o,i,r){console.assert(n.handle&&n.handle.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.handle)},encodeNull:function(e,n){e.encodeUint32(n,4294967295)},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.decodeStructField=function(e,n,t){return e.decodeStructField(n,t)},mojo.internal.decodeStructNullableValueField=function(e,n,t,o){n.nullableValueKindProperties.linkedValueFieldName;return e.decodeStructNullableValueField(n,t,o)},mojo.interfaceControl.RUN_MESSAGE_ID=4294967295,mojo.interfaceControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.interfaceControl.RunMessageParamsSpec={$:{}},mojo.interfaceControl.RunResponseMessageParamsSpec={$:{}},mojo.interfaceControl.QueryVersionSpec={$:{}},mojo.interfaceControl.QueryVersionResultSpec={$:{}},mojo.interfaceControl.FlushForTestingSpec={$:{}},mojo.interfaceControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.interfaceControl.RequireVersionSpec={$:{}},mojo.interfaceControl.EnableIdleTrackingSpec={$:{}},mojo.interfaceControl.MessageAckSpec={$:{}},mojo.interfaceControl.NotifyIdleSpec={$:{}},mojo.interfaceControl.RunInputSpec={$:{}},mojo.interfaceControl.RunOutputSpec={$:{}},mojo.interfaceControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.interfaceControl.RunMessageParamsSpec.$,"RunMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.interfaceControl.RunResponseMessageParamsSpec.$,"RunResponseMessageParams",[mojo.internal.StructField("output",0,0,mojo.interfaceControl.RunOutputSpec.$,null,!0,0)],[[0,24]]),mojo.interfaceControl.RunResponseMessageParams=class{constructor(){this.output}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionSpec.$,"QueryVersion",[],[[0,8]]),mojo.interfaceControl.QueryVersion=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionResultSpec.$,"QueryVersionResult",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.QueryVersionResult=class{constructor(){this.version}},mojo.internal.Struct(mojo.interfaceControl.FlushForTestingSpec.$,"FlushForTesting",[],[[0,8]]),mojo.interfaceControl.FlushForTesting=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunOrClosePipeMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.interfaceControl.RequireVersionSpec.$,"RequireVersion",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.RequireVersion=class{constructor(){this.version}},mojo.internal.Struct(mojo.interfaceControl.EnableIdleTrackingSpec.$,"EnableIdleTracking",[mojo.internal.StructField("timeoutInMicroseconds",0,0,mojo.internal.Int64,BigInt(0),!1,0)],[[0,16]]),mojo.interfaceControl.EnableIdleTracking=class{constructor(){this.timeoutInMicroseconds}},mojo.internal.Struct(mojo.interfaceControl.MessageAckSpec.$,"MessageAck",[],[[0,8]]),mojo.interfaceControl.MessageAck=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.NotifyIdleSpec.$,"NotifyIdle",[],[[0,8]]),mojo.interfaceControl.NotifyIdle=class{constructor(){}},mojo.internal.Union(mojo.interfaceControl.RunInputSpec.$,"RunInput",{queryVersion:{ordinal:0,type:mojo.interfaceControl.QueryVersionSpec.$},flushForTesting:{ordinal:1,type:mojo.interfaceControl.FlushForTestingSpec.$}}),mojo.interfaceControl.RunInput,mojo.internal.Union(mojo.interfaceControl.RunOutputSpec.$,"RunOutput",{queryVersionResult:{ordinal:0,type:mojo.interfaceControl.QueryVersionResultSpec.$}}),mojo.interfaceControl.RunOutput,mojo.internal.Union(mojo.interfaceControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{requireVersion:{ordinal:0,type:mojo.interfaceControl.RequireVersionSpec.$},enableIdleTracking:{ordinal:1,type:mojo.interfaceControl.EnableIdleTrackingSpec.$},messageAck:{ordinal:2,type:mojo.interfaceControl.MessageAckSpec.$},notifyIdle:{ordinal:3,type:mojo.interfaceControl.NotifyIdleSpec.$}}),mojo.interfaceControl.RunOrClosePipeInput,mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.pipeControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.pipeControl.DisconnectReasonSpec={$:{}},mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec={$:{}},mojo.pipeControl.PauseUntilFlushCompletesSpec={$:{}},mojo.pipeControl.FlushAsyncSpec={$:{}},mojo.pipeControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.pipeControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.pipeControl.RunOrClosePipeMessageParams=class{constructor(){this.input}},mojo.internal.Struct(mojo.pipeControl.DisconnectReasonSpec.$,"DisconnectReason",[mojo.internal.StructField("customReason",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("description",8,0,mojo.internal.String,null,!1,0)],[[0,24]]),mojo.pipeControl.DisconnectReason=class{constructor(){this.customReason,this.description}},mojo.internal.Struct(mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$,"PeerAssociatedEndpointClosedEvent",[mojo.internal.StructField("id",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("disconnectReason",8,0,mojo.pipeControl.DisconnectReasonSpec.$,null,!0,0)],[[0,24]]),mojo.pipeControl.PeerAssociatedEndpointClosedEvent=class{constructor(){this.id,this.disconnectReason}},mojo.internal.Struct(mojo.pipeControl.PauseUntilFlushCompletesSpec.$,"PauseUntilFlushCompletes",[mojo.internal.StructField("flushPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.PauseUntilFlushCompletes=class{constructor(){this.flushPipe}},mojo.internal.Struct(mojo.pipeControl.FlushAsyncSpec.$,"FlushAsync",[mojo.internal.StructField("flusherPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.FlushAsync=class{constructor(){this.flusherPipe}},mojo.internal.Union(mojo.pipeControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{peerAssociatedEndpointClosedEvent:{ordinal:0,type:mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$},pauseUntilFlushCompletes:{ordinal:1,type:mojo.pipeControl.PauseUntilFlushCompletesSpec.$},flushAsync:{ordinal:2,type:mojo.pipeControl.FlushAsyncSpec.$}}),mojo.pipeControl.RunOrClosePipeInput,mojo.internal.interfaceSupport.RouterMessage,mojo.internal.interfaceSupport.Router=class{constructor(e,n){this.pipe_=e,this.messages_=[],this.dispatchInProgress_=!1,this.reader_=new mojo.internal.interfaceSupport.HandleReader(e),this.reader_.onRead=this.onMessageReceived_.bind(this),this.reader_.onError=this.onError_.bind(this),this.endpoints_=new Map,this.nextInterfaceId_=1,this.interfaceIdNamespace_=n?mojo.internal.kInterfaceNamespaceBit:0,this.pipeControlHandler_=new mojo.internal.interfaceSupport.PipeControlMessageHandler(this,this.onPeerEndpointClosed_.bind(this))}get pipe(){return this.pipe_}generateInterfaceId(){return(this.nextInterfaceId_++|this.interfaceIdNamespace_)>>>0}addEndpoint(e,n){0===n&&this.reader_.start(),console.assert(this.isReading(),"adding a secondary endpoint with no primary"),this.endpoints_.set(n,e),this.dispatchMessages_()}removeEndpoint(e){this.endpoints_.delete(e),0===e&&this.reader_.stop()}close(){console.assert(0===this.endpoints_.size,"closing primary endpoint with secondary endpoints still bound"),this.reader_.stopAndCloseHandle()}closeEndpoint(e){this.removeEndpoint(e),0===e?this.close():this.pipeControlHandler_.notifyEndpointClosed(e)}isReading(){return!this.reader_.isStopped()}send(e){this.pipe_.writeMessage(e.buffer,e.handles)}onMessageReceived_(e,n){if(!this.checkSize_(e))return;const t=mojo.internal.deserializeMessageHeader(new mojo.internal.DataViewWrapper(e));this.pipeControlHandler_.maybeHandleMessage(t,e)||(this.messages_.push({header:t,buffer:e,handles:n}),this.dispatchMessages_())}checkSize_(e){return!(e.byteLength<mojo.internal.kMessageV0HeaderSize)||(console.error("Rejecting undersized message"),this.onError_(),!1)}dispatchMessages_(){if(!this.dispatchInProgress_){for(this.dispatchInProgress_=!0;this.messages_.length>0;){const e=this.messages_[0];if(!this.dispatch_(e))break;this.messages_.shift()}this.dispatchInProgress_=!1}}dispatch_(e){const n=this.endpoints_.get(e.header.interfaceId);return n?!!n.isStarted&&(n.onMessageReceived(e.header,e.buffer,e.handles),!0):(console.error(`Received message for unknown endpoint ${e.header.interfaceId}`),!1)}onError_(){for(const e of this.endpoints_.values())e.onError();this.endpoints_.clear()}onPeerEndpointClosed_(e){const n=this.endpoints_.get(e);n&&n.onError()}},mojo.internal.interfaceSupport.EndpointClient=class{onMessageReceived(e,n,t,o){}onError(e,n=void 0){}},mojo.internal.interfaceSupport.Endpoint=class{constructor(e=null,n=0){this.router_=e,this.interfaceId_=n,this.controlMessageHandler_=new mojo.internal.interfaceSupport.ControlMessageHandler(this),this.client_=null,this.nextRequestId_=0,this.localPeer_=null}static createAssociatedPair(){const e=new mojo.internal.interfaceSupport.Endpoint,n=new mojo.internal.interfaceSupport.Endpoint;return n.localPeer_=e,e.localPeer_=n,{endpoint0:e,endpoint1:n}}get router(){return this.router_}isPrimary(){return null!==this.router_&&0===this.interfaceId_}releasePipe(){return console.assert(this.isPrimary(),"secondary endpoint cannot release pipe"),this.router_.pipe}get isPendingAssociation(){return null!==this.localPeer_}bindInBrowser(e,n){console.assert(this.isPrimary()&&!this.router_.isReading(),"endpoint is either associated or already bound"),Mojo.bindInterface(e,this.router_.pipe,n)}associatePeerOfOutgoingEndpoint(e){console.assert(this.router_,"cannot associate with unbound endpoint");const n=e.localPeer_;e.localPeer_=n.localPeer_=null;const t=this.router_.generateInterfaceId();return n.router_=this.router_,n.interfaceId_=t,n.client_&&this.router_.addEndpoint(n,t),t}generateRequestId(){const e=this.nextRequestId_++;return this.nextRequestId_>4294967295&&(this.nextRequestId_=0),e}send(e,n,t,o,i){const r=new mojo.internal.Message(this,this.interfaceId_,t,e,n,o.$.structSpec,i);console.assert(this.router_,"cannot send message on unassociated unbound endpoint"),this.router_.send(r)}start(e){console.assert(!this.client_,"endpoint already started"),this.client_=e,this.router_&&this.router_.addEndpoint(this,this.interfaceId_)}get isStarted(){return null!==this.client_}stop(){this.router_&&this.router_.removeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null}close(){this.router_&&this.router.closeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null}async flushForTesting(){return this.controlMessageHandler_.sendRunMessage({flushForTesting:{}})}onMessageReceived(e,n,t){console.assert(this.client_,"endpoint has no client");this.controlMessageHandler_.maybeHandleControlMessage(e,n)||this.client_.onMessageReceived(this,e,n,t)}onError(){this.client_&&this.client_.onError(this)}},mojo.internal.interfaceSupport.acceptBufferForTesting=function(e,n){e.router_.onMessageReceived_(n,[])},mojo.internal.interfaceSupport.createEndpoint=function(e,n=!1){return void 0===e.watch?e:new mojo.internal.interfaceSupport.Endpoint(new mojo.internal.interfaceSupport.Router(e,n),0)},mojo.internal.interfaceSupport.getEndpointForReceiver=function(e){return mojo.internal.interfaceSupport.createEndpoint(e)},mojo.internal.interfaceSupport.bind=function(e,n,t){e.bindInBrowser(n,t)},mojo.internal.interfaceSupport.PipeControlMessageHandler=class{constructor(e,n){this.router_=e,this.onDisconnect_=n}send(e){const n=new mojo.internal.Message(null,4294967295,0,mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID,0,mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,{input:e});this.router_.send(n)}maybeHandleMessage(e,n){if(e.ordinal!==mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID)return!1;const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]),i=mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,r=o.decodeStructInline(i).input;return!r.hasOwnProperty("peerAssociatedEndpointClosedEvent")||(this.onDisconnect_(r.peerAssociatedEndpointClosedEvent.id),!0)}notifyEndpointClosed(e){this.send({peerAssociatedEndpointClosedEvent:{id:e}})}},mojo.internal.interfaceSupport.ControlMessageHandler=class{constructor(e){this.endpoint_=e,this.pendingFlushResolvers_=new Map}sendRunMessage(e){const n=this.endpoint_.generateRequestId();return new Promise((t=>{this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,n,mojo.internal.kMessageFlagExpectsResponse,mojo.interfaceControl.RunMessageParamsSpec.$,{input:e}),this.pendingFlushResolvers_.set(n,t)}))}maybeHandleControlMessage(e,n){if(e.ordinal===mojo.interfaceControl.RUN_MESSAGE_ID){const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]);return e.flags&mojo.internal.kMessageFlagExpectsResponse?this.handleRunRequest_(e.requestId,o):this.handleRunResponse_(e.requestId,o)}return!1}handleRunRequest_(e,n){return!!n.decodeStructInline(mojo.interfaceControl.RunMessageParamsSpec.$.$.structSpec).input.hasOwnProperty("flushForTesting")&&(this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,e,mojo.internal.kMessageFlagIsResponse,mojo.interfaceControl.RunResponseMessageParamsSpec.$,{output:null}),!0)}handleRunResponse_(e,n){const t=this.pendingFlushResolvers_.get(e);return!!t&&(t(),!0)}},mojo.internal.interfaceSupport.PendingResponse,mojo.internal.interfaceSupport.ConnectionErrorEventRouter=class{constructor(){this.listeners=new Map,this.nextListenerId_=0}addListener(e){const n=++this.nextListenerId_;return this.listeners.set(n,e),n}removeListener(e){return this.listeners.delete(e)}dispatchErrorEvent(){for(const e of this.listeners.values())e()}},mojo.internal.interfaceSupport.PendingReceiver=class{get handle(){}},mojo.internal.interfaceSupport.InterfaceRemoteBase=class{constructor(e,n=void 0){this.endpoint_=null,this.requestType_=e,this.pendingResponses_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter,n&&this.bindHandle(n)}get endpoint(){return this.endpoint_}bindNewPipeAndPassReceiver(){let{handle0:e,handle1:n}=Mojo.createMessagePipe();return this.bindHandle(e),new this.requestType_(mojo.internal.interfaceSupport.createEndpoint(n))}bindHandle(e){console.assert(!this.endpoint_,"already bound"),e=mojo.internal.interfaceSupport.createEndpoint(e,!0),this.endpoint_=e,this.endpoint_.start(this),this.pendingResponses_=new Map}associateAndPassReceiver(){console.assert(!this.endpoint_,"cannot associate when already bound");const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.requestType_(n)}unbind(){if(!this.endpoint_)return null;const e=this.endpoint_;return this.endpoint_=null,e.stop(),e}close(){this.cleanupAndFlushPendingResponses_("Message pipe closed."),this.endpoint_&&this.endpoint_.close(),this.endpoint_=null}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}sendMessage(e,n,t,o,i){if(t&&(!this.endpoint_||!this.endpoint_.isStarted))return Promise.reject(new Error("The pipe has already been closed."));const r={};let s=0;n.$.structSpec.fields.forEach(((e,n)=>{const t=n-s;if(!mojo.internal.isNullableValueKindField(e))return void(r[e.name]=o[t]);const i=e.nullableValueKindProperties;i.isPrimary&&(s++,r[i.originalFieldName]=o[t])}));const a=this.endpoint_.generateRequestId();if(this.endpoint_.send(e,a,t?mojo.internal.kMessageFlagExpectsResponse:0,n,r),!t)return Promise.resolve();const l=t;return new Promise(((n,t)=>{this.pendingResponses_.set(a,{requestId:a,ordinal:e,responseStruct:l,resolve:n,reject:t,useResultResponse:i})}))}flushForTesting(){return this.endpoint_.flushForTesting()}onMessageReceived(e,n,t,o){if(!(n.flags&mojo.internal.kMessageFlagIsResponse)||n.flags&mojo.internal.kMessageFlagExpectsResponse)return this.onError(e,"Received unexpected request message");const i=this.pendingResponses_.get(n.requestId);if(this.pendingResponses_.delete(n.requestId),!i)return this.onError(e,"Received unexpected response message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.responseStruct.$.structSpec);if(!r)return this.onError(e,"Received malformed response message");if(n.ordinal!==i.ordinal)return this.onError(e,"Received malformed response message");if(i.useResultResponse){const e=r.result;void 0!==e.success?i.resolve(e.success):i.reject(e.failure)}else i.resolve(r)}onError(e,n=void 0){this.cleanupAndFlushPendingResponses_(n),this.connectionErrorEventRouter_.dispatchErrorEvent()}cleanupAndFlushPendingResponses_(e=void 0){this.endpoint_&&this.endpoint_.stop();for(const n of this.pendingResponses_.keys())this.pendingResponses_.get(n).reject(new Error(e));this.pendingResponses_=new Map}},mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper=class{constructor(e){this.remote_=e}bindNewPipeAndPassReceiver(){return this.remote_.bindNewPipeAndPassReceiver()}associateAndPassReceiver(){return this.remote_.associateAndPassReceiver()}isBound(){return null!==this.remote_.endpoint_}close(){this.remote_.close()}flushForTesting(){return this.remote_.flushForTesting()}},mojo.internal.interfaceSupport.CallbackRouter=class{constructor(){this.removeCallbacks=new Map,this.nextListenerId_=0}getNextId(){return++this.nextListenerId_}removeListener(e){return this.removeCallbacks.get(e)(),this.removeCallbacks.delete(e)}},mojo.internal.interfaceSupport.InterfaceCallbackReceiver=class{constructor(e){this.listeners_=new Map,this.callbackRouter_=e}addListener(e){const n=this.callbackRouter_.getNextId();return this.listeners_.set(n,e),this.callbackRouter_.removeCallbacks.set(n,(()=>this.listeners_.delete(n))),n}createReceiverHandler(e){return e?this.dispatchWithResponse_.bind(this):this.dispatch_.bind(this)}dispatch_(e){const n=Array.from(arguments);this.listeners_.forEach((e=>e.apply(null,n)))}dispatchWithResponse_(e){const n=Array.from(arguments),t=Array.from(this.listeners_.values()).map((e=>e.apply(null,n)));let o;for(const e of t)if(void 0!==e){if(void 0!==o)throw new Error("Multiple listeners attempted to reply to a message");o=e}return o}},mojo.internal.interfaceSupport.MessageHandler,mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal=class{constructor(e){this.endpoints_=new Set,this.remoteType_=e,this.messageHandlers_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter}registerHandler(e,n,t,o,i){this.messageHandlers_.set(e,{paramStruct:n,responseStruct:t,handler:o,useResultResponse:i})}bindHandle(e){e=mojo.internal.interfaceSupport.createEndpoint(e),this.endpoints_.add(e),e.start(this)}bindNewPipeAndPassRemote(){let e=new this.remoteType_;return this.bindHandle(e.$.bindNewPipeAndPassReceiver().handle),e}associateAndPassRemote(){const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.remoteType_(n)}closeBindings(){for(const e of this.endpoints_)e.close();this.endpoints_.clear()}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}async flush(){for(let e of this.endpoints_)await e.flushForTesting()}onMessageReceived(e,n,t,o){if(n.flags&mojo.internal.kMessageFlagIsResponse)throw new Error("Received unexpected response on interface receiver");const i=this.messageHandlers_.get(n.ordinal);if(!i)throw new Error("Received unknown message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.paramStruct.$.structSpec);if(!r)throw new Error("Received malformed message");const s=[];for(const e of i.paramStruct.$.structSpec.fields){if(!mojo.internal.isNullableValueKindField(e)){s.push(r[e.name]);continue}const n=e.nullableValueKindProperties;n.isPrimary&&s.push(r[n.originalFieldName])}i.useResultResponse?this.handleResultResponseMessage_(e,n,i,s):this.handleResponseMessage_(e,n,i,s)}handleResultResponseMessage_(e,n,t,o){try{let i=t.handler.apply(null,o);"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{success:o}})})).catch((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}})}))}catch(o){e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}})}}handleResponseMessage_(e,n,t,o){let i=t.handler.apply(null,o);if(t.responseStruct){if(void 0===i)throw this.onError(e),new Error("Message expects a reply but its handler did not provide one.");"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,o)})).catch((()=>{this.onError(e)}))}}onError(e,n=void 0){this.endpoints_.delete(e),e.close(),this.connectionErrorEventRouter_.dispatchErrorEvent()}},mojo.internal.interfaceSupport.InterfaceReceiverHelper=class{constructor(e){this.helper_internal_=e}bindHandle(e){this.helper_internal_.bindHandle(e)}bindNewPipeAndPassRemote(){return this.helper_internal_.bindNewPipeAndPassRemote()}associateAndPassRemote(){return this.helper_internal_.associateAndPassRemote()}close(){this.helper_internal_.closeBindings()}flush(){return this.helper_internal_.flush()}},mojo.internal.interfaceSupport.HandleReader=class{constructor(e){this.handle_=e,this.onRead=null,this.onError=()=>{},this.watcher_=null}isStopped(){return null===this.watcher_}start(){this.watcher_=this.handle_.watch({readable:!0},this.read_.bind(this))}stop(){this.watcher_&&(this.watcher_.cancel(),this.watcher_=null)}stopAndCloseHandle(){this.watcher_&&this.stop(),this.handle_.close()}read_(e){for(;;){if(!this.watcher_)return;const e=this.handle_.readMessage();if(e.result==Mojo.RESULT_SHOULD_WAIT)return;if(e.result==Mojo.RESULT_FAILED_PRECONDITION)return void this.onError();if(e.result!=Mojo.RESULT_OK)throw new Error("Unexpected error on HandleReader: "+e.result);this.onRead(e.buffer,e.handles)}}};
;// ../out/code_search_linux_Component_x64/gen/mojo/public/mojom/base/big_buffer.mojom.m.js
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

;// ../out/code_search_linux_Component_x64/gen/mojo/public/mojom/base/file.mojom.m.js
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


;// ../out/code_search_linux_Component_x64/gen/mojo/public/mojom/base/file_path.mojom.m.js
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


;// ../out/code_search_linux_Component_x64/gen/mojo/public/mojom/base/time.mojom.m.js
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


;// ../out/code_search_linux_Component_x64/gen/mojo/public/mojom/base/values.mojom.m.js
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

;// ../out/code_search_linux_Component_x64/gen/skia/public/mojom/image_info.mojom.m.js
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


;// ../out/code_search_linux_Component_x64/gen/skia/public/mojom/bitmap.mojom.m.js
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


;// ../out/code_search_linux_Component_x64/gen/services/on_device_model/public/mojom/on_device_model.mojom.m.js
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

;// ../out/code_search_linux_Component_x64/gen/brave/components/local_ai/core/on_device_speech_recognition.mojom.m.js
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


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzs7OztBQUtwRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBO0FBQ0E7Ozs7QUNySkE7O0FBRUE7QUFDQTtBQUNBOztBQUUwQzs7OztBQUkxQztBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOztBQUVwRDtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsTUFBTSxjQUFjLDBCQUEwQixNQUFNOzs7OztBQUtwRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJO0FBQ1Y7QUFDQTtBQUNBLFFB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YUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxNQUFNLGNBQWMsMEJBQTBCLE1BQU07O0FBRXBEO0FBQ0Es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T0FBTyxHQUFHLElBQUksNEJBQTRCLEVBQUU7QUFDbEQsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyYXZlLWNvcmUvd2VicGFjay9ydW50aW1lL2ltcG9ydCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX2xpbnV4X0NvbXBvbmVudF94NjQvZ2VuL21vam8vcHVibGljL2pzL2JpbmRpbmdzLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX2xpbnV4X0NvbXBvbmVudF94NjQvZ2VuL21vam8vcHVibGljL21vam9tL2Jhc2UvYmlnX2J1ZmZlci5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX2xpbnV4X0NvbXBvbmVudF94NjQvZ2VuL21vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZS5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi4vb3V0L2NvZGVfc2VhcmNoX2xpbnV4X0NvbXBvbmVudF94NjQvZ2VuL21vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZV9wYXRoLm1vam9tLm0uanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uLi9vdXQvY29kZV9zZWFyY2hfbGludXhfQ29tcG9uZW50X3g2NC9nZW4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS90aW1lLm1vam9tLm0uanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uLi9vdXQvY29kZV9zZWFyY2hfbGludXhfQ29tcG9uZW50X3g2NC9nZW4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS92YWx1ZXMubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9saW51eF9Db21wb25lbnRfeDY0L2dlbi9za2lhL3B1YmxpYy9tb2pvbS9pbWFnZV9pbmZvLm1vam9tLm0uanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uLi9vdXQvY29kZV9zZWFyY2hfbGludXhfQ29tcG9uZW50X3g2NC9nZW4vc2tpYS9wdWJsaWMvbW9qb20vYml0bWFwLm1vam9tLm0uanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uLi9vdXQvY29kZV9zZWFyY2hfbGludXhfQ29tcG9uZW50X3g2NC9nZW4vc2VydmljZXMvb25fZGV2aWNlX21vZGVsL3B1YmxpYy9tb2pvbS9vbl9kZXZpY2VfbW9kZWwubW9qb20ubS5qcyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4uL291dC9jb2RlX3NlYXJjaF9saW51eF9Db21wb25lbnRfeDY0L2dlbi9icmF2ZS9jb21wb25lbnRzL2xvY2FsX2FpL2NvcmUvb25fZGV2aWNlX3NwZWVjaF9yZWNvZ25pdGlvbi5tb2pvbS5tLmpzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vb25ueHJ1bnRpbWUtd2ViQDEuMjYuMC9ub2RlX21vZHVsZXMvb25ueHJ1bnRpbWUtd2ViL2Rpc3Qvb3J0Lndhc20uYnVuZGxlLm1pbi5tanMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvbG9jYWxfYWkvcmVzb3VyY2VzL3NwZWVjaF93b3JrZXIvb3J0X2Vudi50cyIsIndlYnBhY2s6Ly9icmF2ZS1jb3JlLy4vY29tcG9uZW50cy9sb2NhbF9haS9yZXNvdXJjZXMvc3BlZWNoX3dvcmtlci9jb25maWdzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2xvY2FsX2FpL3Jlc291cmNlcy9zcGVlY2hfd29ya2VyL2F1ZGlvX2ZlYXR1cmVzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2xvY2FsX2FpL3Jlc291cmNlcy9zcGVlY2hfd29ya2VyL3V0aWxzLnRzIiwid2VicGFjazovL2JyYXZlLWNvcmUvLi9jb21wb25lbnRzL2xvY2FsX2FpL3Jlc291cmNlcy9zcGVlY2hfd29ya2VyL25lbW90cm9uX3JlY29nbml6ZXIudHMiLCJ3ZWJwYWNrOi8vYnJhdmUtY29yZS8uL2NvbXBvbmVudHMvbG9jYWxfYWkvcmVzb3VyY2VzL3NwZWVjaF93b3JrZXIvc3BlZWNoX3dvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBleGlzdHMgKGRldmVsb3BtZW50IG9ubHkpXG5cdGlmIChfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IG5ldyBVUkwoXCIuL1wiLCBpbXBvcnQubWV0YS51cmwpO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInNwZWVjaF93b3JrZXJcIjogMFxufTtcblxuLy8gbm8gaW5zdGFsbCBjaHVua1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gZXh0ZXJuYWwgaW5zdGFsbCBjaHVua1xuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0IiwiY29uc3QgbW9qbz17aW50ZXJuYWw6e2ludGVyZmFjZVN1cHBvcnQ6e319LGludGVyZmFjZUNvbnRyb2w6e30scGlwZUNvbnRyb2w6e319O21vam8uaW50ZXJuYWwua0FycmF5SGVhZGVyU2l6ZT04LG1vam8uaW50ZXJuYWwua1N0cnVjdEhlYWRlclNpemU9OCxtb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplT2Zmc2V0PTAsbW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyVmVyc2lvbk9mZnNldD00LG1vam8uaW50ZXJuYWwua1VuaW9uSGVhZGVyU2l6ZT04LG1vam8uaW50ZXJuYWwua1VuaW9uRGF0YVNpemU9MTYsbW9qby5pbnRlcm5hbC5rTWVzc2FnZVYwSGVhZGVyU2l6ZT0yNCxtb2pvLmludGVybmFsLmtNZXNzYWdlVjFIZWFkZXJTaXplPTMyLG1vam8uaW50ZXJuYWwua01lc3NhZ2VWMkhlYWRlclNpemU9NDgsbW9qby5pbnRlcm5hbC5rTWFwRGF0YVNpemU9MjQsbW9qby5pbnRlcm5hbC5rRW5jb2RlZEludmFsaWRIYW5kbGVWYWx1ZT00Mjk0OTY3Mjk1LG1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnRXhwZWN0c1Jlc3BvbnNlPTEsbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdJc1Jlc3BvbnNlPTIsbW9qby5pbnRlcm5hbC5rSW50ZXJmYWNlTmFtZXNwYWNlQml0PTIxNDc0ODM2NDgsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbj0hIW5ldyBVaW50OEFycmF5KG5ldyBVaW50MTZBcnJheShbMV0pLmJ1ZmZlcilbMF0sbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSxuPTApe2lmKHRoaXMuZGF0YVZpZXdfLHRoaXMuYnl0ZU9mZnNldCxlIGluc3RhbmNlb2YgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIpdGhpcy5kYXRhVmlld189ZS5kYXRhVmlld18sdGhpcy5ieXRlT2Zmc2V0PWUuYnl0ZU9mZnNldCtuO2Vsc2UgaWYoZSBpbnN0YW5jZW9mIERhdGFWaWV3KXRoaXMuZGF0YVZpZXdfPTA9PT1lLmJ5dGVPZmZzZXQmJmUuYnl0ZUxlbmd0aD09PWUuYnVmZmVyLmJ5dGVMZW5ndGg/ZTpuZXcgRGF0YVZpZXcoZS5idWZmZXIpLHRoaXMuYnl0ZU9mZnNldD1lLmJ5dGVPZmZzZXQrbjtlbHNle2lmKCEoZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSl0aHJvdyBuZXcgRXJyb3IoXCJEYXRhVmlld1dyYXBwZXIgY29uc3RydWN0b3IgcmVxdWlyZXMgYSBEYXRhVmlld1dyYXBwZXIsIERhdGFWaWV3LCBvciBBcnJheUJ1ZmZlciBpbnN0YW5jZVwiKTt0aGlzLmRhdGFWaWV3Xz1uZXcgRGF0YVZpZXcoZSksdGhpcy5ieXRlT2Zmc2V0PW59fWdldCBidWZmZXIoKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uYnVmZmVyfWdldFVpbnQ4KGUpe3JldHVybiB0aGlzLmRhdGFWaWV3Xy5nZXRVaW50OCh0aGlzLmJ5dGVPZmZzZXQrZSl9Z2V0SW50OChlKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uZ2V0SW50OCh0aGlzLmJ5dGVPZmZzZXQrZSl9Z2V0VWludDE2KGUsbil7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldFVpbnQxNih0aGlzLmJ5dGVPZmZzZXQrZSxuKX1nZXRJbnQxNihlLG4pe3JldHVybiB0aGlzLmRhdGFWaWV3Xy5nZXRJbnQxNih0aGlzLmJ5dGVPZmZzZXQrZSxuKX1nZXRVaW50MzIoZSxuKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uZ2V0VWludDMyKHRoaXMuYnl0ZU9mZnNldCtlLG4pfWdldEludDMyKGUsbil7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldEludDMyKHRoaXMuYnl0ZU9mZnNldCtlLG4pfWdldEZsb2F0MzIoZSxuKXtyZXR1cm4gdGhpcy5kYXRhVmlld18uZ2V0RmxvYXQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuKX1nZXRGbG9hdDY0KGUsbil7cmV0dXJuIHRoaXMuZGF0YVZpZXdfLmdldEZsb2F0NjQodGhpcy5ieXRlT2Zmc2V0K2Usbil9c2V0VWludDgoZSxuKXt0aGlzLmRhdGFWaWV3Xy5zZXRVaW50OCh0aGlzLmJ5dGVPZmZzZXQrZSxuKX1zZXRJbnQ4KGUsbil7dGhpcy5kYXRhVmlld18uc2V0SW50OCh0aGlzLmJ5dGVPZmZzZXQrZSxuKX1zZXRVaW50MTYoZSxuLHQpe3RoaXMuZGF0YVZpZXdfLnNldFVpbnQxNih0aGlzLmJ5dGVPZmZzZXQrZSxuLHQpfXNldEludDE2KGUsbix0KXt0aGlzLmRhdGFWaWV3Xy5zZXRJbnQxNih0aGlzLmJ5dGVPZmZzZXQrZSxuLHQpfXNldFVpbnQzMihlLG4sdCl7dGhpcy5kYXRhVmlld18uc2V0VWludDMyKHRoaXMuYnl0ZU9mZnNldCtlLG4sdCl9c2V0SW50MzIoZSxuLHQpe3RoaXMuZGF0YVZpZXdfLnNldEludDMyKHRoaXMuYnl0ZU9mZnNldCtlLG4sdCl9c2V0RmxvYXQzMihlLG4sdCl7dGhpcy5kYXRhVmlld18uc2V0RmxvYXQzMih0aGlzLmJ5dGVPZmZzZXQrZSxuLHQpfXNldEZsb2F0NjQoZSxuLHQpe3RoaXMuZGF0YVZpZXdfLnNldEZsb2F0NjQodGhpcy5ieXRlT2Zmc2V0K2Usbix0KX19LG1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV9LG1vam8uaW50ZXJuYWwuaXNOdWxsYWJsZVZhbHVlS2luZEZpZWxkPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT1lLm51bGxhYmxlVmFsdWVLaW5kUHJvcGVydGllc30sbW9qby5pbnRlcm5hbC5hbGlnbj1mdW5jdGlvbihlLG4pe3JldHVybiBlKyhuLWUlbiklbn0sbW9qby5pbnRlcm5hbC5zZXRJbnQ2ND1mdW5jdGlvbihlLG4sdCl7bW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbj8oZS5zZXRVaW50MzIobixOdW1iZXIoQmlnSW50KHQpJkJpZ0ludCg0Mjk0OTY3Mjk1KSksbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksZS5zZXRJbnQzMihuKzQsTnVtYmVyKEJpZ0ludCh0KT4+QmlnSW50KDMyKSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKTooZS5zZXRJbnQzMihuLE51bWJlcihCaWdJbnQodCk+PkJpZ0ludCgzMikmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxlLnNldFVpbnQzMihuKzQsTnVtYmVyKEJpZ0ludCh0KSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKX0sbW9qby5pbnRlcm5hbC5zZXRVaW50NjQ9ZnVuY3Rpb24oZSxuLHQpe21vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4/KGUuc2V0VWludDMyKG4sTnVtYmVyKEJpZ0ludCh0KSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLGUuc2V0VWludDMyKG4rNCxOdW1iZXIoQmlnSW50KHQpPj5CaWdJbnQoMzIpJkJpZ0ludCg0Mjk0OTY3Mjk1KSksbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbikpOihlLnNldFVpbnQzMihuLE51bWJlcihCaWdJbnQodCk+PkJpZ0ludCgzMikmQmlnSW50KDQyOTQ5NjcyOTUpKSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxlLnNldFVpbnQzMihuKzQsTnVtYmVyKEJpZ0ludCh0KSZCaWdJbnQoNDI5NDk2NzI5NSkpLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKX0sbW9qby5pbnRlcm5hbC5nZXRJbnQ2ND1mdW5jdGlvbihlLG4pe2xldCB0LG87cmV0dXJuIG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4/KHQ9ZS5nZXRVaW50MzIobixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxvPWUuZ2V0SW50MzIobis0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKToodD1lLmdldFVpbnQzMihuKzQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbz1lLmdldEludDMyKG4sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbikpLEJpZ0ludChvKTw8QmlnSW50KDMyKXxCaWdJbnQodCl9LG1vam8uaW50ZXJuYWwuZ2V0VWludDY0PWZ1bmN0aW9uKGUsbil7bGV0IHQsbztyZXR1cm4gbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbj8odD1lLmdldFVpbnQzMihuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG89ZS5nZXRVaW50MzIobis0LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKToodD1lLmdldFVpbnQzMihuKzQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbz1lLmdldFVpbnQzMihuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pKSxCaWdJbnQobyk8PEJpZ0ludCgzMil8QmlnSW50KHQpfSxtb2pvLmludGVybmFsLk1lc3NhZ2VEaW1lbnNpb25zLG1vam8uaW50ZXJuYWwuZ2V0TW9qb0ZpZWxkVmFsdWU9ZnVuY3Rpb24oZSxuKXtpZihuLmZpZWxkR2V0dGVyKXJldHVybiBuLmZpZWxkR2V0dGVyKGUpO2lmKGUmJm1vam8uaW50ZXJuYWwuaXNOdWxsYWJsZVZhbHVlS2luZEZpZWxkKG4pKXtjb25zdCB0PW4ubnVsbGFibGVWYWx1ZUtpbmRQcm9wZXJ0aWVzLG89IW1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQoZVt0Lm9yaWdpbmFsRmllbGROYW1lXSk7cmV0dXJuIHQuaXNQcmltYXJ5P286bz9lW3Qub3JpZ2luYWxGaWVsZE5hbWVdOm4uZGVmYXVsdFZhbHVlfXJldHVybiBlW24ubmFtZV19LG1vam8uaW50ZXJuYWwuY29tcHV0ZVN0cnVjdERpbWVuc2lvbnM9ZnVuY3Rpb24oZSxuKXtsZXQgdD1lLnBhY2tlZFNpemUsbz0wO2Zvcihjb25zdCBpIG9mIGUuZmllbGRzKXtsZXQgZT1tb2pvLmludGVybmFsLmdldE1vam9GaWVsZFZhbHVlKG4saSk7aWYobW9qby5pbnRlcm5hbC5pc051bGxPclVuZGVmaW5lZChlKSYmKGU9aS5kZWZhdWx0VmFsdWUpLG51bGwhPT1lKWlmKGkudHlwZS4kLmNvbXB1dGVEaW1lbnNpb25zKXtjb25zdCBuPWkudHlwZS4kLmNvbXB1dGVEaW1lbnNpb25zKGUsaS5udWxsYWJsZSk7dCs9bW9qby5pbnRlcm5hbC5hbGlnbihuLnNpemUsOCksbi5udW1JbnRlcmZhY2VJZHMmJihvKz1uLm51bUludGVyZmFjZUlkcyl9ZWxzZSBpLnR5cGUuJC5oYXNJbnRlcmZhY2VJZCYmbysrfXJldHVybntzaXplOnQsbnVtSW50ZXJmYWNlSWRzOm99fSxtb2pvLmludGVybmFsLmNvbXB1dGVVbmlvbkRpbWVuc2lvbnM9ZnVuY3Rpb24oZSxuLHQpe2xldCBvPW4/bW9qby5pbnRlcm5hbC5rVW5pb25EYXRhU2l6ZTowLGk9MDtjb25zdCByPU9iamVjdC5rZXlzKHQpO2lmKDEhPT1yLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoYFZhbHVlIGZvciAke2UubmFtZX0gbXVzdCBiZSBhbiBPYmplY3Qgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSBuYW1lZCBvbmUgb2Y6IGArT2JqZWN0LmtleXMoZS5maWVsZHMpLmpvaW4oXCIsXCIpKTtjb25zdCBzPXJbMF0sYT1lLmZpZWxkc1tzXSxsPXRbc107aWYoIW1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQobCkpaWYoYS50eXBlLiQuY29tcHV0ZURpbWVuc2lvbnMpe2NvbnN0IGU9ISFhLnR5cGUuJC51bmlvblNwZWN8fGEubnVsbGFibGUsbj1hLnR5cGUuJC5jb21wdXRlRGltZW5zaW9ucyhsLGUpO28rPW1vam8uaW50ZXJuYWwuYWxpZ24obi5zaXplLDgpLG4ubnVtSW50ZXJmYWNlSWRzJiYoaSs9bi5udW1JbnRlcmZhY2VJZHMpfWVsc2UgYS50eXBlLiQuaGFzSW50ZXJmYWNlSWQmJmkrKztyZXR1cm57c2l6ZTpvLG51bUludGVyZmFjZUlkczppfX0sbW9qby5pbnRlcm5hbC5jb21wdXRlSW5saW5lQXJyYXlTaXplPWZ1bmN0aW9uKGUsbil7cmV0dXJuIGUuZWxlbWVudFR5cGU9PT1tb2pvLmludGVybmFsLkJvb2w/bW9qby5pbnRlcm5hbC5rQXJyYXlIZWFkZXJTaXplK21vam8uaW50ZXJuYWwuY29tcHV0ZUhhc1ZhbHVlQml0ZmllbGRTaXplKGUsbi5sZW5ndGgpKyhuLmxlbmd0aCs3Pj4zKTptb2pvLmludGVybmFsLmtBcnJheUhlYWRlclNpemUrbW9qby5pbnRlcm5hbC5jb21wdXRlSGFzVmFsdWVCaXRmaWVsZFNpemUoZSxuLmxlbmd0aCkrbi5sZW5ndGgqZS5lbGVtZW50VHlwZS4kLmFycmF5RWxlbWVudFNpemUoISFlLmVsZW1lbnROdWxsYWJsZSl9LG1vam8uaW50ZXJuYWwuY29tcHV0ZUhhc1ZhbHVlQml0ZmllbGRTaXplPWZ1bmN0aW9uKGUsbil7aWYoISghIWUuZWxlbWVudE51bGxhYmxlJiYhIWUuZWxlbWVudFR5cGUuJC5pc1ZhbHVlVHlwZSkpcmV0dXJuIDA7Y29uc3QgdD1lLmVsZW1lbnRUeXBlLiQuYXJyYXlFbGVtZW50U2l6ZSghMCksbz04KnQ7cmV0dXJuKChuK28tMSkvb3wwKSp0fSxtb2pvLmludGVybmFsLmNvbXB1dGVUb3RhbEFycmF5U2l6ZT1mdW5jdGlvbihlLG4pe2NvbnN0IHQ9bW9qby5pbnRlcm5hbC5jb21wdXRlSW5saW5lQXJyYXlTaXplKGUsbik7aWYoIWUuZWxlbWVudFR5cGUuJC5jb21wdXRlRGltZW5zaW9ucylyZXR1cm4gdDtsZXQgbz10O2ZvcihsZXQgdCBvZiBuKW1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQodCl8fChvKz1tb2pvLmludGVybmFsLmFsaWduKGUuZWxlbWVudFR5cGUuJC5jb21wdXRlRGltZW5zaW9ucyh0LCEhZS5lbGVtZW50TnVsbGFibGUpLnNpemUsOCkpO3JldHVybiBvfSxtb2pvLmludGVybmFsLk1lc3NhZ2U9Y2xhc3N7Y29uc3RydWN0b3IoZSxuLHQsbyxpLHIscyl7Y29uc3QgYT1tb2pvLmludGVybmFsLmNvbXB1dGVTdHJ1Y3REaW1lbnNpb25zKHIscyk7bGV0IGwsYzthLm51bUludGVyZmFjZUlkcz4wPyhsPW1vam8uaW50ZXJuYWwua01lc3NhZ2VWMkhlYWRlclNpemUsYz0yKTp0Jihtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0V4cGVjdHNSZXNwb25zZXxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UpPyhsPW1vam8uaW50ZXJuYWwua01lc3NhZ2VWMUhlYWRlclNpemUsYz0xKToobD1tb2pvLmludGVybmFsLmtNZXNzYWdlVjBIZWFkZXJTaXplLGM9MCk7Y29uc3QgZD1sK2Euc2l6ZSx1PWEubnVtSW50ZXJmYWNlSWRzPjA/bW9qby5pbnRlcm5hbC5rQXJyYXlIZWFkZXJTaXplKzQqYS5udW1JbnRlcmZhY2VJZHM6MCxwPWQrbW9qby5pbnRlcm5hbC5hbGlnbih1LDgpO3RoaXMuYnVmZmVyPW5ldyBBcnJheUJ1ZmZlcihwKSx0aGlzLmhhbmRsZXM9W107Y29uc3QgbT1uZXcgRGF0YVZpZXcodGhpcy5idWZmZXIpO20uc2V0VWludDMyKDAsbCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxtLnNldFVpbnQzMig0LGMsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbS5zZXRVaW50MzIoOCxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG0uc2V0VWludDMyKDEyLG8sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbiksbS5zZXRVaW50MzIoMTYsdCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxtLnNldFVpbnQzMigyMCwwKSxjPj0xJiYobW9qby5pbnRlcm5hbC5zZXRVaW50NjQobSwyNCxpKSxjPj0yJiYobW9qby5pbnRlcm5hbC5zZXRVaW50NjQobSwzMixCaWdJbnQoMTYpKSxtb2pvLmludGVybmFsLnNldFVpbnQ2NChtLDQwLEJpZ0ludChkLTQwKSksbS5zZXRVaW50MzIoZCx1LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLG0uc2V0VWludDMyKGQrNCxhLm51bUludGVyZmFjZUlkc3x8MCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSkpLHRoaXMubmV4dEludGVyZmFjZUlkSW5kZXhfPTAsdGhpcy5pbnRlcmZhY2VJZHNfPW51bGwsYS5udW1JbnRlcmZhY2VJZHMmJih0aGlzLmludGVyZmFjZUlkc189bmV3IFVpbnQzMkFycmF5KHRoaXMuYnVmZmVyLGQrbW9qby5pbnRlcm5hbC5rQXJyYXlIZWFkZXJTaXplLGEubnVtSW50ZXJmYWNlSWRzKSksdGhpcy5uZXh0QWxsb2NhdGlvbk9mZnNldF89bDtjb25zdCBmPXRoaXMuYWxsb2NhdGUoci5wYWNrZWRTaXplKTtuZXcgbW9qby5pbnRlcm5hbC5FbmNvZGVyKHRoaXMsZix7ZW5kcG9pbnQ6ZX0pLmVuY29kZVN0cnVjdElubGluZShyLHMpfWFsbG9jYXRlKGUpe2NvbnN0IG49bW9qby5pbnRlcm5hbC5hbGlnbihlLDgpLHQ9bmV3IERhdGFWaWV3KHRoaXMuYnVmZmVyLHRoaXMubmV4dEFsbG9jYXRpb25PZmZzZXRfLG4pO3JldHVybiB0aGlzLm5leHRBbGxvY2F0aW9uT2Zmc2V0Xys9bix0fX0sbW9qby5pbnRlcm5hbC5NZXNzYWdlQ29udGV4dCxtb2pvLmludGVybmFsLkVuY29kZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSxuLHQ9bnVsbCl7dGhpcy5jb250ZXh0Xz10LHRoaXMubWVzc2FnZV89ZSx0aGlzLmRhdGFfPW59ZW5jb2RlQm9vbChlLG4sdCl7Y29uc3Qgbz10aGlzLmRhdGFfLmdldFVpbnQ4KGUpO3Q/dGhpcy5kYXRhXy5zZXRVaW50OChlLG98MTw8bik6dGhpcy5kYXRhXy5zZXRVaW50OChlLG8mfigxPDxuKSl9ZW5jb2RlSW50OChlLG4pe3RoaXMuZGF0YV8uc2V0SW50OChlLG4pfWVuY29kZVVpbnQ4KGUsbil7dGhpcy5kYXRhXy5zZXRVaW50OChlLG4pfWVuY29kZUludDE2KGUsbil7dGhpcy5kYXRhXy5zZXRJbnQxNihlLG4sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZW5jb2RlVWludDE2KGUsbil7dGhpcy5kYXRhXy5zZXRVaW50MTYoZSxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWVuY29kZUludDMyKGUsbil7dGhpcy5kYXRhXy5zZXRJbnQzMihlLG4sbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZW5jb2RlVWludDMyKGUsbil7dGhpcy5kYXRhXy5zZXRVaW50MzIoZSxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWVuY29kZUludDY0KGUsbil7bW9qby5pbnRlcm5hbC5zZXRJbnQ2NCh0aGlzLmRhdGFfLGUsbil9ZW5jb2RlVWludDY0KGUsbil7bW9qby5pbnRlcm5hbC5zZXRVaW50NjQodGhpcy5kYXRhXyxlLG4pfWVuY29kZUZsb2F0KGUsbil7dGhpcy5kYXRhXy5zZXRGbG9hdDMyKGUsbixtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1lbmNvZGVEb3VibGUoZSxuKXt0aGlzLmRhdGFfLnNldEZsb2F0NjQoZSxuLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWVuY29kZUhhbmRsZShlLG4pe3RoaXMuZW5jb2RlVWludDMyKGUsdGhpcy5tZXNzYWdlXy5oYW5kbGVzLmxlbmd0aCksdGhpcy5tZXNzYWdlXy5oYW5kbGVzLnB1c2gobil9ZW5jb2RlQXNzb2NpYXRlZEVuZHBvaW50KGUsbil7Y29uc29sZS5hc3NlcnQobi5pc1BlbmRpbmdBc3NvY2lhdGlvbixcImV4cGVjdGVkIHVuYm91bmQgYXNzb2NpYXRlZCBlbmRwb2ludFwiKTtjb25zdCB0PXRoaXMuY29udGV4dF8uZW5kcG9pbnQuYXNzb2NpYXRlUGVlck9mT3V0Z29pbmdFbmRwb2ludChuKSxvPXRoaXMubWVzc2FnZV8ubmV4dEludGVyZmFjZUlkSW5kZXhfKys7dGhpcy5lbmNvZGVVaW50MzIoZSxvKSx0aGlzLm1lc3NhZ2VfLmludGVyZmFjZUlkc19bb109dH1lbmNvZGVTdHJpbmcoZSxuKXtpZihcInN0cmluZ1wiIT10eXBlb2Ygbil0aHJvdyBuZXcgRXJyb3IoXCJVbnhwZWN0ZWQgbm9uLXN0cmluZyB2YWx1ZSBmb3Igc3RyaW5nIGZpZWxkLlwiKTt0aGlzLmVuY29kZUFycmF5KHtlbGVtZW50VHlwZTptb2pvLmludGVybmFsLlVpbnQ4fSxlLG1vam8uaW50ZXJuYWwuRW5jb2Rlci5zdHJpbmdUb1V0ZjhCeXRlcyhuKSl9ZW5jb2RlT2Zmc2V0KGUsbil7dGhpcy5lbmNvZGVVaW50NjQoZSxuLXRoaXMuZGF0YV8uYnl0ZU9mZnNldC1lKX1lbmNvZGVBcnJheShlLG4sdCl7Y29uc3Qgbz1tb2pvLmludGVybmFsLmNvbXB1dGVJbmxpbmVBcnJheVNpemUoZSx0KSxpPXRoaXMubWVzc2FnZV8uYWxsb2NhdGUobykscj1uZXcgbW9qby5pbnRlcm5hbC5FbmNvZGVyKHRoaXMubWVzc2FnZV8saSx0aGlzLmNvbnRleHRfKTt0aGlzLmVuY29kZU9mZnNldChuLGkuYnl0ZU9mZnNldCksci5lbmNvZGVVaW50MzIoMCxvKSxyLmVuY29kZVVpbnQzMig0LHQubGVuZ3RoKSx0aGlzLm1heWJlRW5jb2RlSGFzVmFsdWVCaXRmaWVsZChlLHIsOCx0KTtsZXQgcz04K21vam8uaW50ZXJuYWwuY29tcHV0ZUhhc1ZhbHVlQml0ZmllbGRTaXplKGUsdC5sZW5ndGgpO2lmKGUuZWxlbWVudFR5cGU9PT1tb2pvLmludGVybmFsLkJvb2wpe2xldCBlPTA7Zm9yKGNvbnN0IG4gb2YgdClyLmVuY29kZUJvb2wocyxlLG4pLGUrKyw4PT1lJiYoZT0wLHMrKyl9ZWxzZSBmb3IoY29uc3QgbiBvZiB0KXtpZihudWxsPT09bil7aWYoIWUuZWxlbWVudE51bGxhYmxlKXRocm93IG5ldyBFcnJvcihcIlRyeWluZyB0byBzZW5kIGEgbnVsbCBlbGVtZW50IGluIGFuIGFycmF5IG9mIG5vbi1udWxsYWJsZSBlbGVtZW50c1wiKTtlLmVsZW1lbnRUeXBlLiQuZW5jb2RlTnVsbChyLHMpfWVsc2UgZS5lbGVtZW50VHlwZS4kLmVuY29kZShuLHIscywwLCEhZS5lbGVtZW50TnVsbGFibGUpO3MrPWUuZWxlbWVudFR5cGUuJC5hcnJheUVsZW1lbnRTaXplKCEhZS5lbGVtZW50TnVsbGFibGUpfX1tYXliZUVuY29kZUhhc1ZhbHVlQml0ZmllbGQoZSxuLHQsbyl7aWYoIWUuZWxlbWVudE51bGxhYmxlfHwhZS5lbGVtZW50VHlwZS4kLmlzVmFsdWVUeXBlKXJldHVybjtsZXQgaT0wLHI9dDtmb3IoY29uc3QgZSBvZiBvKW51bGw9PWU/bi5lbmNvZGVCb29sKHIsaSwhMSk6bi5lbmNvZGVCb29sKHIsaSwhMCksaSsrLDg9PWkmJihpPTAscisrKX1lbmNvZGVNYXAoZSxuLHQpe2xldCBvLGk7XCJNYXBcIj09dC5jb25zdHJ1Y3Rvci5uYW1lPyhvPUFycmF5LmZyb20odC5rZXlzKCkpLGk9QXJyYXkuZnJvbSh0LnZhbHVlcygpKSk6KG89T2JqZWN0LmtleXModCksaT1vLm1hcCgoZT0+dFtlXSkpKTtjb25zdCByPXRoaXMubWVzc2FnZV8uYWxsb2NhdGUobW9qby5pbnRlcm5hbC5rTWFwRGF0YVNpemUpLHM9bmV3IG1vam8uaW50ZXJuYWwuRW5jb2Rlcih0aGlzLm1lc3NhZ2VfLHIsdGhpcy5jb250ZXh0Xyk7dGhpcy5lbmNvZGVPZmZzZXQobixyLmJ5dGVPZmZzZXQpLHMuZW5jb2RlVWludDMyKDAsbW9qby5pbnRlcm5hbC5rTWFwRGF0YVNpemUpLHMuZW5jb2RlVWludDMyKDQsMCkscy5lbmNvZGVBcnJheSh7ZWxlbWVudFR5cGU6ZS5rZXlUeXBlfSw4LG8pLHMuZW5jb2RlQXJyYXkoe2VsZW1lbnRUeXBlOmUudmFsdWVUeXBlLGVsZW1lbnROdWxsYWJsZTplLnZhbHVlTnVsbGFibGV9LDE2LGkpfWVuY29kZVN0cnVjdChlLG4sdCl7Y29uc3Qgbz10aGlzLm1lc3NhZ2VfLmFsbG9jYXRlKGUucGFja2VkU2l6ZSksaT1uZXcgbW9qby5pbnRlcm5hbC5FbmNvZGVyKHRoaXMubWVzc2FnZV8sbyx0aGlzLmNvbnRleHRfKTt0aGlzLmVuY29kZU9mZnNldChuLG8uYnl0ZU9mZnNldCksaS5lbmNvZGVTdHJ1Y3RJbmxpbmUoZSx0KX1lbmNvZGVTdHJ1Y3RJbmxpbmUoZSxuKXtjb25zdCB0PWUudmVyc2lvbnM7dGhpcy5lbmNvZGVVaW50MzIoMCxlLnBhY2tlZFNpemUpLHRoaXMuZW5jb2RlVWludDMyKDQsdFt0Lmxlbmd0aC0xXS52ZXJzaW9uKTtmb3IoY29uc3QgdCBvZiBlLmZpZWxkcyl7Y29uc3Qgbz1tb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplK3QucGFja2VkT2Zmc2V0LGk9ZT0+e3QudHlwZS4kLmVuY29kZShlLHRoaXMsbyx0LnBhY2tlZEJpdE9mZnNldCx0Lm51bGxhYmxlKX0scj1tb2pvLmludGVybmFsLmlzTnVsbE9yVW5kZWZpbmVkKG4pP3ZvaWQgMDptb2pvLmludGVybmFsLmdldE1vam9GaWVsZFZhbHVlKG4sdCk7aWYobW9qby5pbnRlcm5hbC5pc051bGxPclVuZGVmaW5lZChuKXx8bW9qby5pbnRlcm5hbC5pc051bGxPclVuZGVmaW5lZChyKSlpZihudWxsPT09dC5kZWZhdWx0VmFsdWUpe2lmKCF0Lm51bGxhYmxlKXRocm93IG5ldyBFcnJvcihlLm5hbWUrJyBtaXNzaW5nIHZhbHVlIGZvciBub24tbnVsbGFibGUgZmllbGQgXCInK3QubmFtZStgXCIsIGdvdDogXCIke3J9XCIuLi5gKTt0LnR5cGUuJC5lbmNvZGVOdWxsKHRoaXMsbyl9ZWxzZSBpKHQuZGVmYXVsdFZhbHVlKTtlbHNlIGkocil9fWVuY29kZVVuaW9uQXNQb2ludGVyKGUsbix0KXtjb25zdCBvPXRoaXMubWVzc2FnZV8uYWxsb2NhdGUobW9qby5pbnRlcm5hbC5rVW5pb25EYXRhU2l6ZSksaT1uZXcgbW9qby5pbnRlcm5hbC5FbmNvZGVyKHRoaXMubWVzc2FnZV8sbyx0aGlzLmNvbnRleHRfKTt0aGlzLmVuY29kZU9mZnNldChuLG8uYnl0ZU9mZnNldCksaS5lbmNvZGVVbmlvbihlLDAsdCl9ZW5jb2RlVW5pb24oZSxuLHQpe2NvbnN0IG89T2JqZWN0LmtleXModCk7aWYoMSE9PW8ubGVuZ3RoKXRocm93IG5ldyBFcnJvcihgVmFsdWUgZm9yICR7ZS5uYW1lfSBtdXN0IGJlIGFuIE9iamVjdCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5IG5hbWVkIG9uZSBvZjogYCtPYmplY3Qua2V5cyhlLmZpZWxkcykuam9pbihcIixcIikpO2NvbnN0IGk9b1swXSxyPWUuZmllbGRzW2ldO3RoaXMuZW5jb2RlVWludDMyKG4sbW9qby5pbnRlcm5hbC5rVW5pb25EYXRhU2l6ZSksdGhpcy5lbmNvZGVVaW50MzIobis0LHIub3JkaW5hbCk7Y29uc3Qgcz1uK21vam8uaW50ZXJuYWwua1VuaW9uSGVhZGVyU2l6ZTt2b2lkIDA9PT1yLnR5cGUuJC51bmlvblNwZWM/ci50eXBlLiQuZW5jb2RlKHRbaV0sdGhpcyxzLDAsci5udWxsYWJsZSk6dGhpcy5lbmNvZGVVbmlvbkFzUG9pbnRlcihyLnR5cGUuJC51bmlvblNwZWMscyx0W2ldKX1zdGF0aWMgc3RyaW5nVG9VdGY4Qnl0ZXMoZSl7cmV0dXJuIG1vam8uaW50ZXJuYWwuRW5jb2Rlci50ZXh0RW5jb2Rlcnx8KG1vam8uaW50ZXJuYWwuRW5jb2Rlci50ZXh0RW5jb2Rlcj1uZXcgVGV4dEVuY29kZXIoXCJ1dGYtOFwiKSksbW9qby5pbnRlcm5hbC5FbmNvZGVyLnRleHRFbmNvZGVyLmVuY29kZShlKX19LG1vam8uaW50ZXJuYWwuRW5jb2Rlci50ZXh0RW5jb2Rlcj1udWxsLG1vam8uaW50ZXJuYWwuRGVjb2Rlcj1jbGFzc3tjb25zdHJ1Y3RvcihlLG4sdD1udWxsKXt0aGlzLmNvbnRleHRfPXQsdGhpcy5kYXRhXz1lIGluc3RhbmNlb2YgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXI/ZTpuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIoZSksdGhpcy5oYW5kbGVzXz1ufWRlY29kZUJvb2woZSxuKXtyZXR1cm4hISh0aGlzLmRhdGFfLmdldFVpbnQ4KGUpJjE8PG4pfWRlY29kZUludDgoZSl7cmV0dXJuIHRoaXMuZGF0YV8uZ2V0SW50OChlKX1kZWNvZGVVaW50OChlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRVaW50OChlKX1kZWNvZGVJbnQxNihlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRJbnQxNihlLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWRlY29kZVVpbnQxNihlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRVaW50MTYoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1kZWNvZGVJbnQzMihlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRJbnQzMihlLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pfWRlY29kZVVpbnQzMihlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRVaW50MzIoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1kZWNvZGVJbnQ2NChlKXtyZXR1cm4gbW9qby5pbnRlcm5hbC5nZXRJbnQ2NCh0aGlzLmRhdGFfLGUpfWRlY29kZVVpbnQ2NChlKXtyZXR1cm4gbW9qby5pbnRlcm5hbC5nZXRVaW50NjQodGhpcy5kYXRhXyxlKX1kZWNvZGVGbG9hdChlKXtyZXR1cm4gdGhpcy5kYXRhXy5nZXRGbG9hdDMyKGUsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbil9ZGVjb2RlRG91YmxlKGUpe3JldHVybiB0aGlzLmRhdGFfLmdldEZsb2F0NjQoZSxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX1kZWNvZGVIYW5kbGUoZSl7Y29uc3Qgbj10aGlzLmRhdGFfLmdldFVpbnQzMihlLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pO2lmKDQyOTQ5NjcyOTU9PW4pcmV0dXJuIG51bGw7aWYobj49dGhpcy5oYW5kbGVzXy5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiRGVjb2RlZCBpbnZhbGlkIGhhbmRsZSBpbmRleFwiKTtyZXR1cm4gdGhpcy5oYW5kbGVzX1tuXX1kZWNvZGVTdHJpbmcoZSl7Y29uc3Qgbj10aGlzLmRlY29kZU9mZnNldChlKTtpZighbilyZXR1cm4gbnVsbDttb2pvLmludGVybmFsLkRlY29kZXIudGV4dERlY29kZXJ8fChtb2pvLmludGVybmFsLkRlY29kZXIudGV4dERlY29kZXI9bmV3IFRleHREZWNvZGVyKFwidXRmLThcIikpO2NvbnN0IHQ9dGhpcy5kZWNvZGVVaW50MzIobi10aGlzLmRhdGFfLmJ5dGVPZmZzZXQrNCk7aWYoMD09PXQpcmV0dXJuXCJcIjtjb25zdCBvPW4rODtyZXR1cm4gbW9qby5pbnRlcm5hbC5EZWNvZGVyLnRleHREZWNvZGVyLmRlY29kZShuZXcgVWludDhBcnJheSh0aGlzLmRhdGFfLmJ1ZmZlcixvLHQpKX1kZWNvZGVPZmZzZXQoZSl7Y29uc3Qgbj10aGlzLmRlY29kZVVpbnQ2NChlKTtpZigwPT1uKXJldHVybiAwO2lmKG4+QmlnSW50KE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSl0aHJvdyBuZXcgRXJyb3IoXCJNZXNhZ2Ugb2Zmc2V0IHRvbyBsYXJnZVwiKTtyZXR1cm4gdGhpcy5kYXRhXy5ieXRlT2Zmc2V0K2UrTnVtYmVyKG4pfWRlY29kZUFycmF5KGUsbil7Y29uc3QgdD10aGlzLmRlY29kZU9mZnNldChuKTtpZighdClyZXR1cm4gbnVsbDtjb25zdCBvPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHRoaXMuZGF0YV8sdC10aGlzLmRhdGFfLmJ5dGVPZmZzZXQpLHRoaXMuaGFuZGxlc18sdGhpcy5jb250ZXh0XyksaT1vLmRlY29kZVVpbnQzMig0KTtpZighaSlyZXR1cm5bXTtjb25zdCByPSEhZS5lbGVtZW50TnVsbGFibGUmJmUuZWxlbWVudFR5cGUuJC5pc1ZhbHVlVHlwZSxzPXI/bmV3IEFycmF5KGkpOm51bGw7aWYocil7bGV0IGU9OCxuPTA7Zm9yKGxldCB0PTA7dDxpOysrdClzW3RdPW8uZGVjb2RlQm9vbChlLG4pLG4rKyw4PT09biYmKG49MCxlKyspfWxldCBhPTgrbW9qby5pbnRlcm5hbC5jb21wdXRlSGFzVmFsdWVCaXRmaWVsZFNpemUoZSxpKTtjb25zdCBsPW5ldyBBcnJheShpKTtpZihlLmVsZW1lbnRUeXBlPT09bW9qby5pbnRlcm5hbC5Cb29sKWZvcihsZXQgZT0wO2U8aTsrK2UpciYmIXNbZV0/bFtlXT1udWxsOmxbZV09by5kZWNvZGVCb29sKGErKGU+PjMpLGUlOCk7ZWxzZSBmb3IobGV0IG49MDtuPGk7KytuKXtpZihyJiYhc1tuXSlsW25dPW51bGw7ZWxzZXtjb25zdCB0PWUuZWxlbWVudFR5cGUuJC5kZWNvZGUobyxhLDAsISFlLmVsZW1lbnROdWxsYWJsZSk7aWYobnVsbD09PXQmJiFlLmVsZW1lbnROdWxsYWJsZSl0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCB1bmV4cGVjdGVkIGFycmF5IGVsZW1lbnRcIik7bFtuXT10fWErPWUuZWxlbWVudFR5cGUuJC5hcnJheUVsZW1lbnRTaXplKCEhZS5lbGVtZW50TnVsbGFibGUpfXJldHVybiBsfWRlY29kZU1hcChlLG4pe2NvbnN0IHQ9dGhpcy5kZWNvZGVPZmZzZXQobik7aWYoIXQpcmV0dXJuIG51bGw7Y29uc3Qgbz1uZXcgbW9qby5pbnRlcm5hbC5EZWNvZGVyKG5ldyBtb2pvLmludGVybmFsLkRhdGFWaWV3V3JhcHBlcih0aGlzLmRhdGFfLHQtdGhpcy5kYXRhXy5ieXRlT2Zmc2V0KSx0aGlzLmhhbmRsZXNfLHRoaXMuY29udGV4dF8pLGk9by5kZWNvZGVVaW50MzIoMCkscj1vLmRlY29kZVVpbnQzMig0KTtpZihpIT1tb2pvLmludGVybmFsLmtNYXBEYXRhU2l6ZXx8MCE9cil0aHJvdyBuZXcgRXJyb3IoXCJSZWNlaXZlZCBpbnZhbGlkIG1hcCBkYXRhXCIpO2NvbnN0IHM9by5kZWNvZGVBcnJheSh7ZWxlbWVudFR5cGU6ZS5rZXlUeXBlfSw4KSxhPW8uZGVjb2RlQXJyYXkoe2VsZW1lbnRUeXBlOmUudmFsdWVUeXBlLGVsZW1lbnROdWxsYWJsZTplLnZhbHVlTnVsbGFibGV9LDE2KTtpZihzLmxlbmd0aCE9YS5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZWQgaW52YWxpZCBtYXAgZGF0YVwiKTtpZighZS5rZXlUeXBlLiQuaXNWYWxpZE9iamVjdEtleVR5cGUpe2NvbnN0IGU9bmV3IE1hcDtmb3IobGV0IG49MDtuPHMubGVuZ3RoOysrbillLnNldChzW25dLGFbbl0pO3JldHVybiBlfWNvbnN0IGw9e307Zm9yKGxldCBlPTA7ZTxzLmxlbmd0aDsrK2UpbFtzW2VdXT1hW2VdO3JldHVybiBsfWRlY29kZVN0cnVjdChlLG4pe2NvbnN0IHQ9dGhpcy5kZWNvZGVPZmZzZXQobik7aWYoIXQpcmV0dXJuIG51bGw7cmV0dXJuIG5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHRoaXMuZGF0YV8sdC10aGlzLmRhdGFfLmJ5dGVPZmZzZXQpLHRoaXMuaGFuZGxlc18sdGhpcy5jb250ZXh0XykuZGVjb2RlU3RydWN0SW5saW5lKGUpfWlzU3RydWN0SGVhZGVyVmFsaWQoZSxuLHQpe2NvbnN0IG89ZS52ZXJzaW9ucztmb3IobGV0IGU9by5sZW5ndGgtMTtlPj0wOy0tZSl7Y29uc3QgaT1vW2VdO2lmKHQ+aS52ZXJzaW9uKXJldHVybiBuPj1pLnBhY2tlZFNpemU7aWYodD09aS52ZXJzaW9uKXJldHVybiBuPT1pLnBhY2tlZFNpemV9dGhyb3cgbmV3IEVycm9yKGBJbXBvc3NpYmxlIHZlcnNpb24gJHt0fSBmb3Igc3RydWN0ICR7ZS5uYW1lfWApfXdyYXBTdHJ1Y3RJbkRhdGFWaWV3KGUsbix0KXtjb25zdCBvPXRoaXMuZGVjb2RlT2Zmc2V0KG4pO2lmKCFvKXJldHVybiBudWxsO2NvbnN0IGk9bmV3IG1vam8uaW50ZXJuYWwuRGVjb2RlcihuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIodGhpcy5kYXRhXyxvLXRoaXMuZGF0YV8uYnl0ZU9mZnNldCksdGhpcy5oYW5kbGVzXyx0aGlzLmNvbnRleHRfKSxyPWkuZGVjb2RlVWludDMyKG1vam8uaW50ZXJuYWwua1N0cnVjdEhlYWRlclNpemVPZmZzZXQpLHM9aS5kZWNvZGVVaW50MzIobW9qby5pbnRlcm5hbC5rU3RydWN0SGVhZGVyVmVyc2lvbk9mZnNldCk7aWYoIWkuaXNTdHJ1Y3RIZWFkZXJWYWxpZChlLHIscykpdGhyb3cgbmV3IEVycm9yKGBSZWNlaXZlZCAke2UubmFtZX0gb2YgaW52YWxpZCBzaXplICgke3J9KSBhbmQvb3IgdmVyc2lvbiAoJHtzfSlgKTtyZXR1cm4gbmV3IHQoaSxzLGUuZmllbGRzKX1kZWNvZGVTdHJ1Y3RJbmxpbmUoZSl7Y29uc3Qgbj10aGlzLmRlY29kZVVpbnQzMihtb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplT2Zmc2V0KSx0PXRoaXMuZGVjb2RlVWludDMyKG1vam8uaW50ZXJuYWwua1N0cnVjdEhlYWRlclZlcnNpb25PZmZzZXQpO2lmKCF0aGlzLmlzU3RydWN0SGVhZGVyVmFsaWQoZSxuLHQpKXRocm93IG5ldyBFcnJvcihgUmVjZWl2ZWQgJHtlLm5hbWV9IG9mIGludmFsaWQgc2l6ZSAoJHtufSkgYW5kL29yIHZlcnNpb24gKCR7dH0pYCk7Y29uc3Qgbz17fTtmb3IobGV0IG49MDtuPGUuZmllbGRzLmxlbmd0aDsrK24pe2NvbnN0IGk9ZS5maWVsZHNbbl07aWYobW9qby5pbnRlcm5hbC5pc051bGxhYmxlVmFsdWVLaW5kRmllbGQoaSkpe2NvbnN0IG49aS5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXM7aWYoIW4uaXNQcmltYXJ5KWNvbnRpbnVlO3tjb25zdCByPWk7b1tuLm9yaWdpbmFsRmllbGROYW1lXT10aGlzLmRlY29kZVN0cnVjdE51bGxhYmxlVmFsdWVGaWVsZChyLGUuZmllbGRzLHQpfX1lbHNlIG9baS5uYW1lXT10aGlzLmRlY29kZVN0cnVjdEZpZWxkKGksdCl9cmV0dXJuIG99ZGVjb2RlU3RydWN0RmllbGQoZSxuKXtpZihlLm1pblZlcnNpb24+bilyZXR1cm4gZS5kZWZhdWx0VmFsdWU7Y29uc3QgdD1tb2pvLmludGVybmFsLmtTdHJ1Y3RIZWFkZXJTaXplK2UucGFja2VkT2Zmc2V0LG89ZS50eXBlLiQuZGVjb2RlKHRoaXMsdCxlLnBhY2tlZEJpdE9mZnNldCwhIWUubnVsbGFibGUpO2lmKG51bGw9PT1vJiYhZS5udWxsYWJsZSl0aHJvdyBuZXcgRXJyb3IoYFJlY2VpdmVkICR7ZS5uYW1lfSB3aXRoIGludmFsaWQgbnVsbCBmaWVsZCBcIiR7ZS5uYW1lfVwiYCk7cmV0dXJuIG99ZGVjb2RlU3RydWN0TnVsbGFibGVWYWx1ZUZpZWxkKGUsbix0KXtpZihlLm1pblZlcnNpb24+dClyZXR1cm4gbnVsbDtpZighdGhpcy5kZWNvZGVTdHJ1Y3RGaWVsZChlLHQpKXJldHVybiBudWxsO2NvbnN0IG89ZS5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXMsaT1uLmZpbmQoKGU9PmUubmFtZT09PW8ubGlua2VkVmFsdWVGaWVsZE5hbWUpKTtpZighaSl0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmluZCB0aGUgZXhwZWN0ZWQgdmFsdWUgZmllbGQgc3BlYzogXCIrby5saW5rZWRWYWx1ZUZpZWxkTmFtZSk7cmV0dXJuIHRoaXMuZGVjb2RlU3RydWN0RmllbGQoaSx0KX1kZWNvZGVVbmlvbkZyb21Qb2ludGVyKGUsbil7Y29uc3QgdD10aGlzLmRlY29kZU9mZnNldChuKTtpZighdClyZXR1cm4gbnVsbDtyZXR1cm4gbmV3IG1vam8uaW50ZXJuYWwuRGVjb2RlcihuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIodGhpcy5kYXRhXyx0LXRoaXMuZGF0YV8uYnl0ZU9mZnNldCksdGhpcy5oYW5kbGVzXyx0aGlzLmNvbnRleHRfKS5kZWNvZGVVbmlvbihlLDApfWRlY29kZVVuaW9uKGUsbil7aWYoMD09PXRoaXMuZGVjb2RlVWludDMyKG4pKXJldHVybiBudWxsO2NvbnN0IHQ9dGhpcy5kZWNvZGVVaW50MzIobis0KTtmb3IoY29uc3QgbyBpbiBlLmZpZWxkcyl7Y29uc3QgaT1lLmZpZWxkc1tvXTtpZihpLm9yZGluYWw9PT10KXtjb25zdCB0PSgoKT0+e2NvbnN0IGU9bittb2pvLmludGVybmFsLmtVbmlvbkhlYWRlclNpemU7cmV0dXJuIHZvaWQgMCE9PWkudHlwZS4kLnVuaW9uU3BlYz90aGlzLmRlY29kZVVuaW9uRnJvbVBvaW50ZXIoaS50eXBlLiQudW5pb25TcGVjLGUpOmkudHlwZS4kLmRlY29kZSh0aGlzLGUsMCxpLm51bGxhYmxlKX0pKCk7aWYobnVsbD09PXQmJiFpLm51bGxhYmxlKXRocm93IG5ldyBFcnJvcihgUmVjZWl2ZWQgJHtlLm5hbWV9IHdpdGggaW52YWxpZCBudWxsIGZpZWxkOiAke2kubmFtZX1gKTtjb25zdCByPXt9O3JldHVybiByW29dPXQscn19fWRlY29kZUludGVyZmFjZVByb3h5KGUsbil7Y29uc3QgdD10aGlzLmRlY29kZUhhbmRsZShuKTtyZXR1cm4gdD9uZXcgZSh0KTpudWxsfWRlY29kZUludGVyZmFjZVJlcXVlc3QoZSxuKXtjb25zdCB0PXRoaXMuZGVjb2RlSGFuZGxlKG4pO3JldHVybiB0P25ldyBlKG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5jcmVhdGVFbmRwb2ludCh0KSk6bnVsbH1kZWNvZGVBc3NvY2lhdGVkRW5kcG9pbnQoZSl7aWYoIXRoaXMuY29udGV4dF98fCF0aGlzLmNvbnRleHRfLmVuZHBvaW50KXRocm93IG5ldyBFcnJvcihcImNhbm5vdCBkZXNlcmlhbGl6ZSBhc3NvY2lhdGVkIGVuZHBvaW50IHdpdGhvdXQgY29udGV4dFwiKTtjb25zdCBuPXRoaXMuY29udGV4dF8uZW5kcG9pbnQsdD1uZXcgRGF0YVZpZXcodGhpcy5kYXRhXy5idWZmZXIpLG89TnVtYmVyKG1vam8uaW50ZXJuYWwuZ2V0VWludDY0KHQsNDApKSxpPXQuZ2V0VWludDMyKG8rNDQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbikscj1uZXcgVWludDMyQXJyYXkodC5idWZmZXIsbyttb2pvLmludGVybmFsLmtBcnJheUhlYWRlclNpemUrNDAsaSlbdGhpcy5kZWNvZGVVaW50MzIoZSldLHM9bmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludChuLnJvdXRlcixyKTtyZXR1cm4gbi5yb3V0ZXIuYWRkRW5kcG9pbnQocyxyKSxzfX0sbW9qby5pbnRlcm5hbC5EZWNvZGVyLnRleHREZWNvZGVyPW51bGwsbW9qby5pbnRlcm5hbC5NZXNzYWdlSGVhZGVyLG1vam8uaW50ZXJuYWwuZGVzZXJpYWxpemVNZXNzYWdlSGVhZGVyPWZ1bmN0aW9uKGUpe2NvbnN0IG49ZS5nZXRVaW50MzIoMCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSx0PWUuZ2V0VWludDMyKDQsbW9qby5pbnRlcm5hbC5rSG9zdExpdHRsZUVuZGlhbik7aWYoMD09dCYmbiE9bW9qby5pbnRlcm5hbC5rTWVzc2FnZVYwSGVhZGVyU2l6ZXx8MT09dCYmbiE9bW9qby5pbnRlcm5hbC5rTWVzc2FnZVYxSGVhZGVyU2l6ZXx8dD49MiYmbjxtb2pvLmludGVybmFsLmtNZXNzYWdlVjJIZWFkZXJTaXplKXRocm93IG5ldyBFcnJvcihcIlJlY2VpdmVkIGludmFsaWQgbWVzc2FnZSBoZWFkZXJcIik7cmV0dXJue2hlYWRlclNpemU6bixoZWFkZXJWZXJzaW9uOnQsaW50ZXJmYWNlSWQ6ZS5nZXRVaW50MzIoOCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKSxvcmRpbmFsOmUuZ2V0VWludDMyKDEyLG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLGZsYWdzOmUuZ2V0VWludDMyKDE2LG1vam8uaW50ZXJuYWwua0hvc3RMaXR0bGVFbmRpYW4pLHJlcXVlc3RJZDp0PDE/MDplLmdldFVpbnQzMigyNCxtb2pvLmludGVybmFsLmtIb3N0TGl0dGxlRW5kaWFuKX19LG1vam8uaW50ZXJuYWwuTW9qb21UeXBlSW5mbyxtb2pvLmludGVybmFsLk1vam9tVHlwZSxtb2pvLmludGVybmFsLkFycmF5U3BlYyxtb2pvLmludGVybmFsLk1hcFNwZWMsbW9qby5pbnRlcm5hbC5OdWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmlzUHJpbWFyeSx0aGlzLmxpbmtlZFZhbHVlRmllbGROYW1lLHRoaXMub3JpZ2luYWxGaWVsZE5hbWV9fSxtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkU3BlYyxtb2pvLmludGVybmFsLlN0cnVjdFZlcnNpb25JbmZvLG1vam8uaW50ZXJuYWwuU3RydWN0U3BlYyxtb2pvLmludGVybmFsLlVuaW9uRmllbGRTcGVjLG1vam8uaW50ZXJuYWwuVW5pb25TcGVjLG1vam8uaW50ZXJuYWwuQm9vbD17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVCb29sKHQsbyxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe3Rocm93IG5ldyBFcnJvcihcImVuY29kaW5nIGJvb2wgbnVsbCBmcm9tIHR5cGUgaXMgbm90IGltcGxlbWVudGVkXCIpfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlQm9vbChuLHQpfSxhcnJheUVsZW1lbnRTaXplOmU9PjEsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLkludDg9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlSW50OCh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVJbnQ4KG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVJbnQ4KG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjEsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fSxtb2pvLmludGVybmFsLlVpbnQ4PXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVVpbnQ4KHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQ4KG4sMCl9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVVaW50OChuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT4xLGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5JbnQxNj17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVJbnQxNih0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVJbnQxNihuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlSW50MTYobil9LGFycmF5RWxlbWVudFNpemU6ZT0+Mixpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuVWludDE2PXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVVpbnQxNih0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50MTYobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZVVpbnQxNihuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT4yLGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5JbnQzMj17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVJbnQzMih0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVJbnQzMihuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlSW50MzIobil9LGFycmF5RWxlbWVudFNpemU6ZT0+NCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuVWludDMyPXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVVpbnQzMih0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50MzIobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZVVpbnQzMihuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT40LGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5JbnQ2ND17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVJbnQ2NCh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVJbnQ2NChuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlSW50NjQobil9LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMSxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuVWludDY0PXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVVpbnQ2NCh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVVaW50NjQobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZVVpbnQ2NChuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5GbG9hdD17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVGbG9hdCh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVGbG9hdChuLDApfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlRmxvYXQobil9LGFycmF5RWxlbWVudFNpemU6ZT0+NCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMH19LG1vam8uaW50ZXJuYWwuRG91YmxlPXskOntlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZURvdWJsZSh0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7ZS5lbmNvZGVEb3VibGUobiwwKX0sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZURvdWJsZShuKX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiEwLGlzVmFsdWVUeXBlOiEwfX0sbW9qby5pbnRlcm5hbC5IYW5kbGU9eyQ6e2VuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlSGFuZGxlKHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQzMihuLDQyOTQ5NjcyOTUpfSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsbyl7cmV0dXJuIGUuZGVjb2RlSGFuZGxlKG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjQsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITF9fSxtb2pvLmludGVybmFsLlN0cmluZz17JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVTdHJpbmcodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe30sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZVN0cmluZyhuKX0sY29tcHV0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oZSxuKXtyZXR1cm57c2l6ZTptb2pvLmludGVybmFsLmNvbXB1dGVUb3RhbEFycmF5U2l6ZSh7ZWxlbWVudFR5cGU6bW9qby5pbnRlcm5hbC5VaW50OH0sbW9qby5pbnRlcm5hbC5FbmNvZGVyLnN0cmluZ1RvVXRmOEJ5dGVzKGUpKX19LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMCxpc1ZhbHVlVHlwZTohMX19LG1vam8uaW50ZXJuYWwuQXJyYXk9ZnVuY3Rpb24oZSxuKXtjb25zdCB0PXtlbGVtZW50VHlwZTplLGVsZW1lbnROdWxsYWJsZTpufTtyZXR1cm57JDp7YXJyYXlTcGVjOnQsZW5jb2RlOmZ1bmN0aW9uKGUsbixvLGkscil7bi5lbmNvZGVBcnJheSh0LG8sZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4sbyxpKXtyZXR1cm4gZS5kZWNvZGVBcnJheSh0LG4pfSxjb21wdXRlRGltZW5zaW9uczpmdW5jdGlvbihlLG4pe3JldHVybntzaXplOm1vam8uaW50ZXJuYWwuY29tcHV0ZVRvdGFsQXJyYXlTaXplKHQsZSl9fSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITF9fX0sbW9qby5pbnRlcm5hbC5NYXA9ZnVuY3Rpb24oZSxuLHQpe2NvbnN0IG89e2tleVR5cGU6ZSx2YWx1ZVR5cGU6bix2YWx1ZU51bGxhYmxlOnR9O3JldHVybnskOnttYXBTcGVjOm8sZW5jb2RlOmZ1bmN0aW9uKGUsbix0LGkscil7bi5lbmNvZGVNYXAobyx0LGUpfSxlbmNvZGVOdWxsOmZ1bmN0aW9uKGUsbil7fSxkZWNvZGU6ZnVuY3Rpb24oZSxuLHQsaSl7cmV0dXJuIGUuZGVjb2RlTWFwKG8sbil9LGNvbXB1dGVEaW1lbnNpb25zOmZ1bmN0aW9uKG8saSl7Y29uc3Qgcj1cIk1hcFwiPT1vLmNvbnN0cnVjdG9yLm5hbWU/QXJyYXkuZnJvbShvLmtleXMoKSk6T2JqZWN0LmtleXMobykscz1cIk1hcFwiPT1vLmNvbnN0cnVjdG9yLm5hbWU/QXJyYXkuZnJvbShvLnZhbHVlcygpKTpyLm1hcCgoZT0+b1tlXSkpO3JldHVybntzaXplOm1vam8uaW50ZXJuYWwua01hcERhdGFTaXplK21vam8uaW50ZXJuYWwuYWxpZ24obW9qby5pbnRlcm5hbC5jb21wdXRlVG90YWxBcnJheVNpemUoe2VsZW1lbnRUeXBlOmV9LHIpLDgpK21vam8uaW50ZXJuYWwuY29tcHV0ZVRvdGFsQXJyYXlTaXplKHtlbGVtZW50VHlwZTpuLGVsZW1lbnROdWxsYWJsZTp0fSxzKX19LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMSxpc1ZhbHVlVHlwZTohMX19fSxtb2pvLmludGVybmFsLkVudW09ZnVuY3Rpb24oKXtyZXR1cm57JDp7ZW5jb2RlOmZ1bmN0aW9uKGUsbix0LG8saSl7bi5lbmNvZGVVaW50MzIodCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe30sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBlLmRlY29kZUludDMyKG4pfSxhcnJheUVsZW1lbnRTaXplOmU9PjQsaXNWYWxpZE9iamVjdEtleVR5cGU6ITAsaXNWYWx1ZVR5cGU6ITB9fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZD1mdW5jdGlvbihlLG4sdCxvLGkscixzPTAsYT12b2lkIDAsbD12b2lkIDApe3JldHVybntuYW1lOmUscGFja2VkT2Zmc2V0Om4scGFja2VkQml0T2Zmc2V0OnQsdHlwZTpvLGRlZmF1bHRWYWx1ZTppLG51bGxhYmxlOnIsbWluVmVyc2lvbjpzLG51bGxhYmxlVmFsdWVLaW5kUHJvcGVydGllczphLGZpZWxkR2V0dGVyOmx9fSxtb2pvLmludGVybmFsLlN0cnVjdD1mdW5jdGlvbihlLG4sdCxvKXtjb25zdCBpPW8ubWFwKChlPT4oe3ZlcnNpb246ZVswXSxwYWNrZWRTaXplOmVbMV19KSkpLHI9e25hbWU6bixwYWNrZWRTaXplOmlbaS5sZW5ndGgtMV0ucGFja2VkU2l6ZSxmaWVsZHM6dCx2ZXJzaW9uczppfTtlLiQ9e3N0cnVjdFNwZWM6cixlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsbyxpKXtuLmVuY29kZVN0cnVjdChyLHQsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXt9LGRlY29kZTpmdW5jdGlvbihlLG4sdCxvKXtyZXR1cm4gZS5kZWNvZGVTdHJ1Y3QocixuKX0sY29tcHV0ZURpbWVuc2lvbnM6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbW9qby5pbnRlcm5hbC5jb21wdXRlU3RydWN0RGltZW5zaW9ucyhyLGUpfSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITF9fSxtb2pvLmludGVybmFsLlR5cGVtYXBwZWRTdHJ1Y3Q9ZnVuY3Rpb24oZSxuLHQsbyxpLHIpe2NvbnN0IHM9ci5tYXAoKGU9Pih7dmVyc2lvbjplWzBdLHBhY2tlZFNpemU6ZVsxXX0pKSksYT17bmFtZTpuLHBhY2tlZFNpemU6c1tzLmxlbmd0aC0xXS5wYWNrZWRTaXplLGZpZWxkczppLHZlcnNpb25zOnN9O2UuJD17c3RydWN0U3BlYzphLGVuY29kZTpmdW5jdGlvbihlLG4sdCxvLGkpe24uZW5jb2RlU3RydWN0KGEsdCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe30sZGVjb2RlOmZ1bmN0aW9uKGUsbixpLHIpe2NvbnN0IHM9ZS53cmFwU3RydWN0SW5EYXRhVmlldyhhLG4sdCk7cmV0dXJuIG1vam8uaW50ZXJuYWwuaXNOdWxsT3JVbmRlZmluZWQocyk/bnVsbDpvLmNvbnZlcnQocyl9LGNvbXB1dGVEaW1lbnNpb25zOmZ1bmN0aW9uKGUsbil7cmV0dXJuIG1vam8uaW50ZXJuYWwuY29tcHV0ZVN0cnVjdERpbWVuc2lvbnMoYSxlKX0sYXJyYXlFbGVtZW50U2l6ZTplPT44LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExfX0sbW9qby5pbnRlcm5hbC5jcmVhdGVTdHJ1Y3REZXNlcmlhbGl6ZXI9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe2lmKG51bGw9PWUuJHx8bnVsbD09ZS4kLnN0cnVjdFNwZWMpdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdHJ1Y3QgbW9qb20gdHlwZSFcIik7cmV0dXJuIG5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobixbXSkuZGVjb2RlU3RydWN0SW5saW5lKGUuJC5zdHJ1Y3RTcGVjKX19LG1vam8uaW50ZXJuYWwuVW5pb249ZnVuY3Rpb24oZSxuLHQpe2NvbnN0IG89e25hbWU6bixmaWVsZHM6dH07ZS4kPXt1bmlvblNwZWM6byxlbmNvZGU6ZnVuY3Rpb24oZSxuLHQsaSxyKXtuLmVuY29kZVVuaW9uKG8sdCxlKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe30sZGVjb2RlOmZ1bmN0aW9uKGUsbix0LGkpe3JldHVybiBlLmRlY29kZVVuaW9uKG8sbil9LGNvbXB1dGVEaW1lbnNpb25zOmZ1bmN0aW9uKGUsbil7cmV0dXJuIG1vam8uaW50ZXJuYWwuY29tcHV0ZVVuaW9uRGltZW5zaW9ucyhvLG4sZSl9LGFycmF5RWxlbWVudFNpemU6ZT0+ZT84OjE2LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExfX0sbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eT1mdW5jdGlvbihlKXtyZXR1cm57JDp7ZW5jb2RlOmZ1bmN0aW9uKG4sdCxvLGkscil7Y29uc3Qgcz1uLnByb3h5LnVuYmluZCgpO2NvbnNvbGUuYXNzZXJ0KHMsYHVuZXhwZWN0ZWQgbnVsbCAke2UubmFtZX1gKTtjb25zdCBhPXMucmVsZWFzZVBpcGUoKTt0LmVuY29kZUhhbmRsZShvLGEpLHQuZW5jb2RlVWludDMyKG8rNCwwKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlVWludDMyKG4sNDI5NDk2NzI5NSl9LGRlY29kZTpmdW5jdGlvbihuLHQsbyxpKXtyZXR1cm4gbi5kZWNvZGVJbnRlcmZhY2VQcm94eShlLHQpfSxhcnJheUVsZW1lbnRTaXplOmU9PjgsaXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaXNWYWx1ZVR5cGU6ITF9fX0sbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0PWZ1bmN0aW9uKGUpe3JldHVybnskOntlbmNvZGU6ZnVuY3Rpb24obix0LG8saSxyKXtpZighbi5oYW5kbGUpdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBudWxsIFwiK2UubmFtZSk7dC5lbmNvZGVIYW5kbGUobyxuLmhhbmRsZS5yZWxlYXNlUGlwZSgpKX0sZW5jb2RlTnVsbDpmdW5jdGlvbihlLG4pe2UuZW5jb2RlVWludDMyKG4sNDI5NDk2NzI5NSl9LGRlY29kZTpmdW5jdGlvbihuLHQsbyxpKXtyZXR1cm4gbi5kZWNvZGVJbnRlcmZhY2VSZXF1ZXN0KGUsdCl9LGFycmF5RWxlbWVudFNpemU6ZT0+OCxpc1ZhbGlkT2JqZWN0S2V5VHlwZTohMSxpc1ZhbHVlVHlwZTohMX19fSxtb2pvLmludGVybmFsLkFzc29jaWF0ZWRJbnRlcmZhY2VQcm94eT1mdW5jdGlvbihlKXtyZXR1cm57JDp7dHlwZTplLGVuY29kZTpmdW5jdGlvbihuLHQsbyxpLHIpe2NvbnNvbGUuYXNzZXJ0KG4ucHJveHkuZW5kcG9pbnQmJm4ucHJveHkuZW5kcG9pbnQuaXNQZW5kaW5nQXNzb2NpYXRpb24sYGV4cGVjdGVkICR7ZS5uYW1lfSB0byBiZSBhc3NvY2lhdGVkIGFuZCB1bmJvdW5kYCksdC5lbmNvZGVBc3NvY2lhdGVkRW5kcG9pbnQobyxuLnByb3h5LmVuZHBvaW50KSx0LmVuY29kZVVpbnQzMihvKzQsMCl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQzMihuLDQyOTQ5NjcyOTUpLGUuZW5jb2RlVWludDMyKG4rNCwwKX0sZGVjb2RlOmZ1bmN0aW9uKG4sdCxvLGkpe3JldHVybiBuZXcgZShuLmRlY29kZUFzc29jaWF0ZWRFbmRwb2ludCh0KSl9LGFycmF5RWxlbWVudFNpemU6ZT0+e3Rocm93IG5ldyBFcnJvcihcIkFycmF5cyBvZiBhc3NvY2lhdGVkIGVuZHBvaW50cyBhcmUgbm90IHlldCBzdXBwb3J0ZWRcIil9LGlzVmFsaWRPYmplY3RLZXlUeXBlOiExLGhhc0ludGVyZmFjZUlkOiEwLGlzVmFsdWVUeXBlOiExfX19LG1vam8uaW50ZXJuYWwuQXNzb2NpYXRlZEludGVyZmFjZVJlcXVlc3Q9ZnVuY3Rpb24oZSl7cmV0dXJueyQ6e3R5cGU6ZSxlbmNvZGU6ZnVuY3Rpb24obix0LG8saSxyKXtjb25zb2xlLmFzc2VydChuLmhhbmRsZSYmbi5oYW5kbGUuaXNQZW5kaW5nQXNzb2NpYXRpb24sYGV4cGVjdGVkICR7ZS5uYW1lfSB0byBiZSBhc3NvY2lhdGVkIGFuZCB1bmJvdW5kYCksdC5lbmNvZGVBc3NvY2lhdGVkRW5kcG9pbnQobyxuLmhhbmRsZSl9LGVuY29kZU51bGw6ZnVuY3Rpb24oZSxuKXtlLmVuY29kZVVpbnQzMihuLDQyOTQ5NjcyOTUpfSxkZWNvZGU6ZnVuY3Rpb24obix0LG8saSl7cmV0dXJuIG5ldyBlKG4uZGVjb2RlQXNzb2NpYXRlZEVuZHBvaW50KHQpKX0sYXJyYXlFbGVtZW50U2l6ZTplPT57dGhyb3cgbmV3IEVycm9yKFwiQXJyYXlzIG9mIGFzc29jaWF0ZWQgZW5kcG9pbnRzIGFyZSBub3QgeWV0IHN1cHBvcnRlZFwiKX0saXNWYWxpZE9iamVjdEtleVR5cGU6ITEsaGFzSW50ZXJmYWNlSWQ6ITAsaXNWYWx1ZVR5cGU6ITF9fX0sbW9qby5pbnRlcm5hbC5kZWNvZGVTdHJ1Y3RGaWVsZD1mdW5jdGlvbihlLG4sdCl7cmV0dXJuIGUuZGVjb2RlU3RydWN0RmllbGQobix0KX0sbW9qby5pbnRlcm5hbC5kZWNvZGVTdHJ1Y3ROdWxsYWJsZVZhbHVlRmllbGQ9ZnVuY3Rpb24oZSxuLHQsbyl7bi5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXMubGlua2VkVmFsdWVGaWVsZE5hbWU7cmV0dXJuIGUuZGVjb2RlU3RydWN0TnVsbGFibGVWYWx1ZUZpZWxkKG4sdCxvKX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJVTl9NRVNTQUdFX0lEPTQyOTQ5NjcyOTUsbW9qby5pbnRlcmZhY2VDb250cm9sLlJVTl9PUl9DTE9TRV9QSVBFX01FU1NBR0VfSUQ9NDI5NDk2NzI5NCxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuTWVzc2FnZVBhcmFtc1NwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5SZXNwb25zZU1lc3NhZ2VQYXJhbXNTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUXVlcnlWZXJzaW9uU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblJlc3VsdFNwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5GbHVzaEZvclRlc3RpbmdTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJlcXVpcmVWZXJzaW9uU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLkVuYWJsZUlkbGVUcmFja2luZ1NwZWM9eyQ6e319LG1vam8uaW50ZXJmYWNlQ29udHJvbC5NZXNzYWdlQWNrU3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLk5vdGlmeUlkbGVTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuSW5wdXRTcGVjPXskOnt9fSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3V0cHV0U3BlYz17JDp7fX0sbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXRTcGVjPXskOnt9fSxtb2pvLmludGVybmFsLlN0cnVjdChtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuTWVzc2FnZVBhcmFtc1NwZWMuJCxcIlJ1bk1lc3NhZ2VQYXJhbXNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImlucHV0XCIsMCwwLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5JbnB1dFNwZWMuJCxudWxsLCExLDApXSxbWzAsMjRdXSksbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk1lc3NhZ2VQYXJhbXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmlucHV0fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLlJ1blJlc3BvbnNlTWVzc2FnZVBhcmFtc1NwZWMuJCxcIlJ1blJlc3BvbnNlTWVzc2FnZVBhcmFtc1wiLFttb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFwib3V0cHV0XCIsMCwwLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PdXRwdXRTcGVjLiQsbnVsbCwhMCwwKV0sW1swLDI0XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5SZXNwb25zZU1lc3NhZ2VQYXJhbXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLm91dHB1dH19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5RdWVyeVZlcnNpb25TcGVjLiQsXCJRdWVyeVZlcnNpb25cIixbXSxbWzAsOF1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuUXVlcnlWZXJzaW9uPWNsYXNze2NvbnN0cnVjdG9yKCl7fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblJlc3VsdFNwZWMuJCxcIlF1ZXJ5VmVyc2lvblJlc3VsdFwiLFttb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFwidmVyc2lvblwiLDAsMCxtb2pvLmludGVybmFsLlVpbnQzMiwwLCExLDApXSxbWzAsMTZdXSksbW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblJlc3VsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMudmVyc2lvbn19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5GbHVzaEZvclRlc3RpbmdTcGVjLiQsXCJGbHVzaEZvclRlc3RpbmdcIixbXSxbWzAsOF1dKSxtb2pvLmludGVyZmFjZUNvbnRyb2wuRmx1c2hGb3JUZXN0aW5nPWNsYXNze2NvbnN0cnVjdG9yKCl7fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlTWVzc2FnZVBhcmFtc1NwZWMuJCxcIlJ1bk9yQ2xvc2VQaXBlTWVzc2FnZVBhcmFtc1wiLFttb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFwiaW5wdXRcIiwwLDAsbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXRTcGVjLiQsbnVsbCwhMSwwKV0sW1swLDI0XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmlucHV0fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLlJlcXVpcmVWZXJzaW9uU3BlYy4kLFwiUmVxdWlyZVZlcnNpb25cIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcInZlcnNpb25cIiwwLDAsbW9qby5pbnRlcm5hbC5VaW50MzIsMCwhMSwwKV0sW1swLDE2XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SZXF1aXJlVmVyc2lvbj1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMudmVyc2lvbn19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5FbmFibGVJZGxlVHJhY2tpbmdTcGVjLiQsXCJFbmFibGVJZGxlVHJhY2tpbmdcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcInRpbWVvdXRJbk1pY3Jvc2Vjb25kc1wiLDAsMCxtb2pvLmludGVybmFsLkludDY0LEJpZ0ludCgwKSwhMSwwKV0sW1swLDE2XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5FbmFibGVJZGxlVHJhY2tpbmc9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnRpbWVvdXRJbk1pY3Jvc2Vjb25kc319LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8uaW50ZXJmYWNlQ29udHJvbC5NZXNzYWdlQWNrU3BlYy4kLFwiTWVzc2FnZUFja1wiLFtdLFtbMCw4XV0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5NZXNzYWdlQWNrPWNsYXNze2NvbnN0cnVjdG9yKCl7fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5pbnRlcmZhY2VDb250cm9sLk5vdGlmeUlkbGVTcGVjLiQsXCJOb3RpZnlJZGxlXCIsW10sW1swLDhdXSksbW9qby5pbnRlcmZhY2VDb250cm9sLk5vdGlmeUlkbGU9Y2xhc3N7Y29uc3RydWN0b3IoKXt9fSxtb2pvLmludGVybmFsLlVuaW9uKG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5JbnB1dFNwZWMuJCxcIlJ1bklucHV0XCIse3F1ZXJ5VmVyc2lvbjp7b3JkaW5hbDowLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLlF1ZXJ5VmVyc2lvblNwZWMuJH0sZmx1c2hGb3JUZXN0aW5nOntvcmRpbmFsOjEsdHlwZTptb2pvLmludGVyZmFjZUNvbnRyb2wuRmx1c2hGb3JUZXN0aW5nU3BlYy4kfX0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5JbnB1dCxtb2pvLmludGVybmFsLlVuaW9uKG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PdXRwdXRTcGVjLiQsXCJSdW5PdXRwdXRcIix7cXVlcnlWZXJzaW9uUmVzdWx0OntvcmRpbmFsOjAsdHlwZTptb2pvLmludGVyZmFjZUNvbnRyb2wuUXVlcnlWZXJzaW9uUmVzdWx0U3BlYy4kfX0pLG1vam8uaW50ZXJmYWNlQ29udHJvbC5SdW5PdXRwdXQsbW9qby5pbnRlcm5hbC5Vbmlvbihtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVJbnB1dFNwZWMuJCxcIlJ1bk9yQ2xvc2VQaXBlSW5wdXRcIix7cmVxdWlyZVZlcnNpb246e29yZGluYWw6MCx0eXBlOm1vam8uaW50ZXJmYWNlQ29udHJvbC5SZXF1aXJlVmVyc2lvblNwZWMuJH0sZW5hYmxlSWRsZVRyYWNraW5nOntvcmRpbmFsOjEsdHlwZTptb2pvLmludGVyZmFjZUNvbnRyb2wuRW5hYmxlSWRsZVRyYWNraW5nU3BlYy4kfSxtZXNzYWdlQWNrOntvcmRpbmFsOjIsdHlwZTptb2pvLmludGVyZmFjZUNvbnRyb2wuTWVzc2FnZUFja1NwZWMuJH0sbm90aWZ5SWRsZTp7b3JkaW5hbDozLHR5cGU6bW9qby5pbnRlcmZhY2VDb250cm9sLk5vdGlmeUlkbGVTcGVjLiR9fSksbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXQsbW9qby5waXBlQ29udHJvbC5SVU5fT1JfQ0xPU0VfUElQRV9NRVNTQUdFX0lEPTQyOTQ5NjcyOTQsbW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNTcGVjPXskOnt9fSxtb2pvLnBpcGVDb250cm9sLkRpc2Nvbm5lY3RSZWFzb25TcGVjPXskOnt9fSxtb2pvLnBpcGVDb250cm9sLlBlZXJBc3NvY2lhdGVkRW5kcG9pbnRDbG9zZWRFdmVudFNwZWM9eyQ6e319LG1vam8ucGlwZUNvbnRyb2wuUGF1c2VVbnRpbEZsdXNoQ29tcGxldGVzU3BlYz17JDp7fX0sbW9qby5waXBlQ29udHJvbC5GbHVzaEFzeW5jU3BlYz17JDp7fX0sbW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZUlucHV0U3BlYz17JDp7fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNTcGVjLiQsXCJSdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImlucHV0XCIsMCwwLG1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVJbnB1dFNwZWMuJCxudWxsLCExLDApXSxbWzAsMjRdXSksbW9qby5waXBlQ29udHJvbC5SdW5PckNsb3NlUGlwZU1lc3NhZ2VQYXJhbXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmlucHV0fX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5waXBlQ29udHJvbC5EaXNjb25uZWN0UmVhc29uU3BlYy4kLFwiRGlzY29ubmVjdFJlYXNvblwiLFttb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFwiY3VzdG9tUmVhc29uXCIsMCwwLG1vam8uaW50ZXJuYWwuVWludDMyLDAsITEsMCksbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImRlc2NyaXB0aW9uXCIsOCwwLG1vam8uaW50ZXJuYWwuU3RyaW5nLG51bGwsITEsMCldLFtbMCwyNF1dKSxtb2pvLnBpcGVDb250cm9sLkRpc2Nvbm5lY3RSZWFzb249Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmN1c3RvbVJlYXNvbix0aGlzLmRlc2NyaXB0aW9ufX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5waXBlQ29udHJvbC5QZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnRTcGVjLiQsXCJQZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnRcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImlkXCIsMCwwLG1vam8uaW50ZXJuYWwuVWludDMyLDAsITEsMCksbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImRpc2Nvbm5lY3RSZWFzb25cIiw4LDAsbW9qby5waXBlQ29udHJvbC5EaXNjb25uZWN0UmVhc29uU3BlYy4kLG51bGwsITAsMCldLFtbMCwyNF1dKSxtb2pvLnBpcGVDb250cm9sLlBlZXJBc3NvY2lhdGVkRW5kcG9pbnRDbG9zZWRFdmVudD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuaWQsdGhpcy5kaXNjb25uZWN0UmVhc29ufX0sbW9qby5pbnRlcm5hbC5TdHJ1Y3QobW9qby5waXBlQ29udHJvbC5QYXVzZVVudGlsRmx1c2hDb21wbGV0ZXNTcGVjLiQsXCJQYXVzZVVudGlsRmx1c2hDb21wbGV0ZXNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImZsdXNoUGlwZVwiLDAsMCxtb2pvLmludGVybmFsLkhhbmRsZSxudWxsLCExLDApXSxbWzAsMTZdXSksbW9qby5waXBlQ29udHJvbC5QYXVzZVVudGlsRmx1c2hDb21wbGV0ZXM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmZsdXNoUGlwZX19LG1vam8uaW50ZXJuYWwuU3RydWN0KG1vam8ucGlwZUNvbnRyb2wuRmx1c2hBc3luY1NwZWMuJCxcIkZsdXNoQXN5bmNcIixbbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcImZsdXNoZXJQaXBlXCIsMCwwLG1vam8uaW50ZXJuYWwuSGFuZGxlLG51bGwsITEsMCldLFtbMCwxNl1dKSxtb2pvLnBpcGVDb250cm9sLkZsdXNoQXN5bmM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmZsdXNoZXJQaXBlfX0sbW9qby5pbnRlcm5hbC5Vbmlvbihtb2pvLnBpcGVDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXRTcGVjLiQsXCJSdW5PckNsb3NlUGlwZUlucHV0XCIse3BlZXJBc3NvY2lhdGVkRW5kcG9pbnRDbG9zZWRFdmVudDp7b3JkaW5hbDowLHR5cGU6bW9qby5waXBlQ29udHJvbC5QZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnRTcGVjLiR9LHBhdXNlVW50aWxGbHVzaENvbXBsZXRlczp7b3JkaW5hbDoxLHR5cGU6bW9qby5waXBlQ29udHJvbC5QYXVzZVVudGlsRmx1c2hDb21wbGV0ZXNTcGVjLiR9LGZsdXNoQXN5bmM6e29yZGluYWw6Mix0eXBlOm1vam8ucGlwZUNvbnRyb2wuRmx1c2hBc3luY1NwZWMuJH19KSxtb2pvLnBpcGVDb250cm9sLlJ1bk9yQ2xvc2VQaXBlSW5wdXQsbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlJvdXRlck1lc3NhZ2UsbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlJvdXRlcj1jbGFzc3tjb25zdHJ1Y3RvcihlLG4pe3RoaXMucGlwZV89ZSx0aGlzLm1lc3NhZ2VzXz1bXSx0aGlzLmRpc3BhdGNoSW5Qcm9ncmVzc189ITEsdGhpcy5yZWFkZXJfPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSGFuZGxlUmVhZGVyKGUpLHRoaXMucmVhZGVyXy5vblJlYWQ9dGhpcy5vbk1lc3NhZ2VSZWNlaXZlZF8uYmluZCh0aGlzKSx0aGlzLnJlYWRlcl8ub25FcnJvcj10aGlzLm9uRXJyb3JfLmJpbmQodGhpcyksdGhpcy5lbmRwb2ludHNfPW5ldyBNYXAsdGhpcy5uZXh0SW50ZXJmYWNlSWRfPTEsdGhpcy5pbnRlcmZhY2VJZE5hbWVzcGFjZV89bj9tb2pvLmludGVybmFsLmtJbnRlcmZhY2VOYW1lc3BhY2VCaXQ6MCx0aGlzLnBpcGVDb250cm9sSGFuZGxlcl89bmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QaXBlQ29udHJvbE1lc3NhZ2VIYW5kbGVyKHRoaXMsdGhpcy5vblBlZXJFbmRwb2ludENsb3NlZF8uYmluZCh0aGlzKSl9Z2V0IHBpcGUoKXtyZXR1cm4gdGhpcy5waXBlX31nZW5lcmF0ZUludGVyZmFjZUlkKCl7cmV0dXJuKHRoaXMubmV4dEludGVyZmFjZUlkXysrfHRoaXMuaW50ZXJmYWNlSWROYW1lc3BhY2VfKT4+PjB9YWRkRW5kcG9pbnQoZSxuKXswPT09biYmdGhpcy5yZWFkZXJfLnN0YXJ0KCksY29uc29sZS5hc3NlcnQodGhpcy5pc1JlYWRpbmcoKSxcImFkZGluZyBhIHNlY29uZGFyeSBlbmRwb2ludCB3aXRoIG5vIHByaW1hcnlcIiksdGhpcy5lbmRwb2ludHNfLnNldChuLGUpLHRoaXMuZGlzcGF0Y2hNZXNzYWdlc18oKX1yZW1vdmVFbmRwb2ludChlKXt0aGlzLmVuZHBvaW50c18uZGVsZXRlKGUpLDA9PT1lJiZ0aGlzLnJlYWRlcl8uc3RvcCgpfWNsb3NlKCl7Y29uc29sZS5hc3NlcnQoMD09PXRoaXMuZW5kcG9pbnRzXy5zaXplLFwiY2xvc2luZyBwcmltYXJ5IGVuZHBvaW50IHdpdGggc2Vjb25kYXJ5IGVuZHBvaW50cyBzdGlsbCBib3VuZFwiKSx0aGlzLnJlYWRlcl8uc3RvcEFuZENsb3NlSGFuZGxlKCl9Y2xvc2VFbmRwb2ludChlKXt0aGlzLnJlbW92ZUVuZHBvaW50KGUpLDA9PT1lP3RoaXMuY2xvc2UoKTp0aGlzLnBpcGVDb250cm9sSGFuZGxlcl8ubm90aWZ5RW5kcG9pbnRDbG9zZWQoZSl9aXNSZWFkaW5nKCl7cmV0dXJuIXRoaXMucmVhZGVyXy5pc1N0b3BwZWQoKX1zZW5kKGUpe3RoaXMucGlwZV8ud3JpdGVNZXNzYWdlKGUuYnVmZmVyLGUuaGFuZGxlcyl9b25NZXNzYWdlUmVjZWl2ZWRfKGUsbil7aWYoIXRoaXMuY2hlY2tTaXplXyhlKSlyZXR1cm47Y29uc3QgdD1tb2pvLmludGVybmFsLmRlc2VyaWFsaXplTWVzc2FnZUhlYWRlcihuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIoZSkpO3RoaXMucGlwZUNvbnRyb2xIYW5kbGVyXy5tYXliZUhhbmRsZU1lc3NhZ2UodCxlKXx8KHRoaXMubWVzc2FnZXNfLnB1c2goe2hlYWRlcjp0LGJ1ZmZlcjplLGhhbmRsZXM6bn0pLHRoaXMuZGlzcGF0Y2hNZXNzYWdlc18oKSl9Y2hlY2tTaXplXyhlKXtyZXR1cm4hKGUuYnl0ZUxlbmd0aDxtb2pvLmludGVybmFsLmtNZXNzYWdlVjBIZWFkZXJTaXplKXx8KGNvbnNvbGUuZXJyb3IoXCJSZWplY3RpbmcgdW5kZXJzaXplZCBtZXNzYWdlXCIpLHRoaXMub25FcnJvcl8oKSwhMSl9ZGlzcGF0Y2hNZXNzYWdlc18oKXtpZighdGhpcy5kaXNwYXRjaEluUHJvZ3Jlc3NfKXtmb3IodGhpcy5kaXNwYXRjaEluUHJvZ3Jlc3NfPSEwO3RoaXMubWVzc2FnZXNfLmxlbmd0aD4wOyl7Y29uc3QgZT10aGlzLm1lc3NhZ2VzX1swXTtpZighdGhpcy5kaXNwYXRjaF8oZSkpYnJlYWs7dGhpcy5tZXNzYWdlc18uc2hpZnQoKX10aGlzLmRpc3BhdGNoSW5Qcm9ncmVzc189ITF9fWRpc3BhdGNoXyhlKXtjb25zdCBuPXRoaXMuZW5kcG9pbnRzXy5nZXQoZS5oZWFkZXIuaW50ZXJmYWNlSWQpO3JldHVybiBuPyEhbi5pc1N0YXJ0ZWQmJihuLm9uTWVzc2FnZVJlY2VpdmVkKGUuaGVhZGVyLGUuYnVmZmVyLGUuaGFuZGxlcyksITApOihjb25zb2xlLmVycm9yKGBSZWNlaXZlZCBtZXNzYWdlIGZvciB1bmtub3duIGVuZHBvaW50ICR7ZS5oZWFkZXIuaW50ZXJmYWNlSWR9YCksITEpfW9uRXJyb3JfKCl7Zm9yKGNvbnN0IGUgb2YgdGhpcy5lbmRwb2ludHNfLnZhbHVlcygpKWUub25FcnJvcigpO3RoaXMuZW5kcG9pbnRzXy5jbGVhcigpfW9uUGVlckVuZHBvaW50Q2xvc2VkXyhlKXtjb25zdCBuPXRoaXMuZW5kcG9pbnRzXy5nZXQoZSk7biYmbi5vbkVycm9yKCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnRDbGllbnQ9Y2xhc3N7b25NZXNzYWdlUmVjZWl2ZWQoZSxuLHQsbyl7fW9uRXJyb3IoZSxuPXZvaWQgMCl7fX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PWNsYXNze2NvbnN0cnVjdG9yKGU9bnVsbCxuPTApe3RoaXMucm91dGVyXz1lLHRoaXMuaW50ZXJmYWNlSWRfPW4sdGhpcy5jb250cm9sTWVzc2FnZUhhbmRsZXJfPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29udHJvbE1lc3NhZ2VIYW5kbGVyKHRoaXMpLHRoaXMuY2xpZW50Xz1udWxsLHRoaXMubmV4dFJlcXVlc3RJZF89MCx0aGlzLmxvY2FsUGVlcl89bnVsbH1zdGF0aWMgY3JlYXRlQXNzb2NpYXRlZFBhaXIoKXtjb25zdCBlPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQsbj1uZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50O3JldHVybiBuLmxvY2FsUGVlcl89ZSxlLmxvY2FsUGVlcl89bix7ZW5kcG9pbnQwOmUsZW5kcG9pbnQxOm59fWdldCByb3V0ZXIoKXtyZXR1cm4gdGhpcy5yb3V0ZXJffWlzUHJpbWFyeSgpe3JldHVybiBudWxsIT09dGhpcy5yb3V0ZXJfJiYwPT09dGhpcy5pbnRlcmZhY2VJZF99cmVsZWFzZVBpcGUoKXtyZXR1cm4gY29uc29sZS5hc3NlcnQodGhpcy5pc1ByaW1hcnkoKSxcInNlY29uZGFyeSBlbmRwb2ludCBjYW5ub3QgcmVsZWFzZSBwaXBlXCIpLHRoaXMucm91dGVyXy5waXBlfWdldCBpc1BlbmRpbmdBc3NvY2lhdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5sb2NhbFBlZXJffWJpbmRJbkJyb3dzZXIoZSxuKXtjb25zb2xlLmFzc2VydCh0aGlzLmlzUHJpbWFyeSgpJiYhdGhpcy5yb3V0ZXJfLmlzUmVhZGluZygpLFwiZW5kcG9pbnQgaXMgZWl0aGVyIGFzc29jaWF0ZWQgb3IgYWxyZWFkeSBib3VuZFwiKSxNb2pvLmJpbmRJbnRlcmZhY2UoZSx0aGlzLnJvdXRlcl8ucGlwZSxuKX1hc3NvY2lhdGVQZWVyT2ZPdXRnb2luZ0VuZHBvaW50KGUpe2NvbnNvbGUuYXNzZXJ0KHRoaXMucm91dGVyXyxcImNhbm5vdCBhc3NvY2lhdGUgd2l0aCB1bmJvdW5kIGVuZHBvaW50XCIpO2NvbnN0IG49ZS5sb2NhbFBlZXJfO2UubG9jYWxQZWVyXz1uLmxvY2FsUGVlcl89bnVsbDtjb25zdCB0PXRoaXMucm91dGVyXy5nZW5lcmF0ZUludGVyZmFjZUlkKCk7cmV0dXJuIG4ucm91dGVyXz10aGlzLnJvdXRlcl8sbi5pbnRlcmZhY2VJZF89dCxuLmNsaWVudF8mJnRoaXMucm91dGVyXy5hZGRFbmRwb2ludChuLHQpLHR9Z2VuZXJhdGVSZXF1ZXN0SWQoKXtjb25zdCBlPXRoaXMubmV4dFJlcXVlc3RJZF8rKztyZXR1cm4gdGhpcy5uZXh0UmVxdWVzdElkXz40Mjk0OTY3Mjk1JiYodGhpcy5uZXh0UmVxdWVzdElkXz0wKSxlfXNlbmQoZSxuLHQsbyxpKXtjb25zdCByPW5ldyBtb2pvLmludGVybmFsLk1lc3NhZ2UodGhpcyx0aGlzLmludGVyZmFjZUlkXyx0LGUsbixvLiQuc3RydWN0U3BlYyxpKTtjb25zb2xlLmFzc2VydCh0aGlzLnJvdXRlcl8sXCJjYW5ub3Qgc2VuZCBtZXNzYWdlIG9uIHVuYXNzb2NpYXRlZCB1bmJvdW5kIGVuZHBvaW50XCIpLHRoaXMucm91dGVyXy5zZW5kKHIpfXN0YXJ0KGUpe2NvbnNvbGUuYXNzZXJ0KCF0aGlzLmNsaWVudF8sXCJlbmRwb2ludCBhbHJlYWR5IHN0YXJ0ZWRcIiksdGhpcy5jbGllbnRfPWUsdGhpcy5yb3V0ZXJfJiZ0aGlzLnJvdXRlcl8uYWRkRW5kcG9pbnQodGhpcyx0aGlzLmludGVyZmFjZUlkXyl9Z2V0IGlzU3RhcnRlZCgpe3JldHVybiBudWxsIT09dGhpcy5jbGllbnRffXN0b3AoKXt0aGlzLnJvdXRlcl8mJnRoaXMucm91dGVyXy5yZW1vdmVFbmRwb2ludCh0aGlzLmludGVyZmFjZUlkXyksdGhpcy5jbGllbnRfPW51bGwsdGhpcy5jb250cm9sTWVzc2FnZUhhbmRsZXJfPW51bGx9Y2xvc2UoKXt0aGlzLnJvdXRlcl8mJnRoaXMucm91dGVyLmNsb3NlRW5kcG9pbnQodGhpcy5pbnRlcmZhY2VJZF8pLHRoaXMuY2xpZW50Xz1udWxsLHRoaXMuY29udHJvbE1lc3NhZ2VIYW5kbGVyXz1udWxsfWFzeW5jIGZsdXNoRm9yVGVzdGluZygpe3JldHVybiB0aGlzLmNvbnRyb2xNZXNzYWdlSGFuZGxlcl8uc2VuZFJ1bk1lc3NhZ2Uoe2ZsdXNoRm9yVGVzdGluZzp7fX0pfW9uTWVzc2FnZVJlY2VpdmVkKGUsbix0KXtjb25zb2xlLmFzc2VydCh0aGlzLmNsaWVudF8sXCJlbmRwb2ludCBoYXMgbm8gY2xpZW50XCIpO3RoaXMuY29udHJvbE1lc3NhZ2VIYW5kbGVyXy5tYXliZUhhbmRsZUNvbnRyb2xNZXNzYWdlKGUsbil8fHRoaXMuY2xpZW50Xy5vbk1lc3NhZ2VSZWNlaXZlZCh0aGlzLGUsbix0KX1vbkVycm9yKCl7dGhpcy5jbGllbnRfJiZ0aGlzLmNsaWVudF8ub25FcnJvcih0aGlzKX19LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5hY2NlcHRCdWZmZXJGb3JUZXN0aW5nPWZ1bmN0aW9uKGUsbil7ZS5yb3V0ZXJfLm9uTWVzc2FnZVJlY2VpdmVkXyhuLFtdKX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmNyZWF0ZUVuZHBvaW50PWZ1bmN0aW9uKGUsbj0hMSl7cmV0dXJuIHZvaWQgMD09PWUud2F0Y2g/ZTpuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50KG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUm91dGVyKGUsbiksMCl9LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyPWZ1bmN0aW9uKGUpe3JldHVybiBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuY3JlYXRlRW5kcG9pbnQoZSl9LG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kPWZ1bmN0aW9uKGUsbix0KXtlLmJpbmRJbkJyb3dzZXIobix0KX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBpcGVDb250cm9sTWVzc2FnZUhhbmRsZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSxuKXt0aGlzLnJvdXRlcl89ZSx0aGlzLm9uRGlzY29ubmVjdF89bn1zZW5kKGUpe2NvbnN0IG49bmV3IG1vam8uaW50ZXJuYWwuTWVzc2FnZShudWxsLDQyOTQ5NjcyOTUsMCxtb2pvLnBpcGVDb250cm9sLlJVTl9PUl9DTE9TRV9QSVBFX01FU1NBR0VfSUQsMCxtb2pvLnBpcGVDb250cm9sLlJ1bk9yQ2xvc2VQaXBlTWVzc2FnZVBhcmFtc1NwZWMuJC4kLnN0cnVjdFNwZWMse2lucHV0OmV9KTt0aGlzLnJvdXRlcl8uc2VuZChuKX1tYXliZUhhbmRsZU1lc3NhZ2UoZSxuKXtpZihlLm9yZGluYWwhPT1tb2pvLnBpcGVDb250cm9sLlJVTl9PUl9DTE9TRV9QSVBFX01FU1NBR0VfSUQpcmV0dXJuITE7Y29uc3QgdD1uZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIobixlLmhlYWRlclNpemUpLG89bmV3IG1vam8uaW50ZXJuYWwuRGVjb2Rlcih0LFtdKSxpPW1vam8ucGlwZUNvbnRyb2wuUnVuT3JDbG9zZVBpcGVNZXNzYWdlUGFyYW1zU3BlYy4kLiQuc3RydWN0U3BlYyxyPW8uZGVjb2RlU3RydWN0SW5saW5lKGkpLmlucHV0O3JldHVybiFyLmhhc093blByb3BlcnR5KFwicGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50XCIpfHwodGhpcy5vbkRpc2Nvbm5lY3RfKHIucGVlckFzc29jaWF0ZWRFbmRwb2ludENsb3NlZEV2ZW50LmlkKSwhMCl9bm90aWZ5RW5kcG9pbnRDbG9zZWQoZSl7dGhpcy5zZW5kKHtwZWVyQXNzb2NpYXRlZEVuZHBvaW50Q2xvc2VkRXZlbnQ6e2lkOmV9fSl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29udHJvbE1lc3NhZ2VIYW5kbGVyPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMuZW5kcG9pbnRfPWUsdGhpcy5wZW5kaW5nRmx1c2hSZXNvbHZlcnNfPW5ldyBNYXB9c2VuZFJ1bk1lc3NhZ2UoZSl7Y29uc3Qgbj10aGlzLmVuZHBvaW50Xy5nZW5lcmF0ZVJlcXVlc3RJZCgpO3JldHVybiBuZXcgUHJvbWlzZSgodD0+e3RoaXMuZW5kcG9pbnRfLnNlbmQobW9qby5pbnRlcmZhY2VDb250cm9sLlJVTl9NRVNTQUdFX0lELG4sbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdFeHBlY3RzUmVzcG9uc2UsbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1bk1lc3NhZ2VQYXJhbXNTcGVjLiQse2lucHV0OmV9KSx0aGlzLnBlbmRpbmdGbHVzaFJlc29sdmVyc18uc2V0KG4sdCl9KSl9bWF5YmVIYW5kbGVDb250cm9sTWVzc2FnZShlLG4pe2lmKGUub3JkaW5hbD09PW1vam8uaW50ZXJmYWNlQ29udHJvbC5SVU5fTUVTU0FHRV9JRCl7Y29uc3QgdD1uZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIobixlLmhlYWRlclNpemUpLG89bmV3IG1vam8uaW50ZXJuYWwuRGVjb2Rlcih0LFtdKTtyZXR1cm4gZS5mbGFncyZtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0V4cGVjdHNSZXNwb25zZT90aGlzLmhhbmRsZVJ1blJlcXVlc3RfKGUucmVxdWVzdElkLG8pOnRoaXMuaGFuZGxlUnVuUmVzcG9uc2VfKGUucmVxdWVzdElkLG8pfXJldHVybiExfWhhbmRsZVJ1blJlcXVlc3RfKGUsbil7cmV0dXJuISFuLmRlY29kZVN0cnVjdElubGluZShtb2pvLmludGVyZmFjZUNvbnRyb2wuUnVuTWVzc2FnZVBhcmFtc1NwZWMuJC4kLnN0cnVjdFNwZWMpLmlucHV0Lmhhc093blByb3BlcnR5KFwiZmx1c2hGb3JUZXN0aW5nXCIpJiYodGhpcy5lbmRwb2ludF8uc2VuZChtb2pvLmludGVyZmFjZUNvbnRyb2wuUlVOX01FU1NBR0VfSUQsZSxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UsbW9qby5pbnRlcmZhY2VDb250cm9sLlJ1blJlc3BvbnNlTWVzc2FnZVBhcmFtc1NwZWMuJCx7b3V0cHV0Om51bGx9KSwhMCl9aGFuZGxlUnVuUmVzcG9uc2VfKGUsbil7Y29uc3QgdD10aGlzLnBlbmRpbmdGbHVzaFJlc29sdmVyc18uZ2V0KGUpO3JldHVybiEhdCYmKHQoKSwhMCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1Jlc3BvbnNlLG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcj1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMubGlzdGVuZXJzPW5ldyBNYXAsdGhpcy5uZXh0TGlzdGVuZXJJZF89MH1hZGRMaXN0ZW5lcihlKXtjb25zdCBuPSsrdGhpcy5uZXh0TGlzdGVuZXJJZF87cmV0dXJuIHRoaXMubGlzdGVuZXJzLnNldChuLGUpLG59cmVtb3ZlTGlzdGVuZXIoZSl7cmV0dXJuIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShlKX1kaXNwYXRjaEVycm9yRXZlbnQoKXtmb3IoY29uc3QgZSBvZiB0aGlzLmxpc3RlbmVycy52YWx1ZXMoKSllKCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyPWNsYXNze2dldCBoYW5kbGUoKXt9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZT1jbGFzc3tjb25zdHJ1Y3RvcihlLG49dm9pZCAwKXt0aGlzLmVuZHBvaW50Xz1udWxsLHRoaXMucmVxdWVzdFR5cGVfPWUsdGhpcy5wZW5kaW5nUmVzcG9uc2VzXz1uZXcgTWFwLHRoaXMuY29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJfPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIsbiYmdGhpcy5iaW5kSGFuZGxlKG4pfWdldCBlbmRwb2ludCgpe3JldHVybiB0aGlzLmVuZHBvaW50X31iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpe2xldHtoYW5kbGUwOmUsaGFuZGxlMTpufT1Nb2pvLmNyZWF0ZU1lc3NhZ2VQaXBlKCk7cmV0dXJuIHRoaXMuYmluZEhhbmRsZShlKSxuZXcgdGhpcy5yZXF1ZXN0VHlwZV8obW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmNyZWF0ZUVuZHBvaW50KG4pKX1iaW5kSGFuZGxlKGUpe2NvbnNvbGUuYXNzZXJ0KCF0aGlzLmVuZHBvaW50XyxcImFscmVhZHkgYm91bmRcIiksZT1tb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuY3JlYXRlRW5kcG9pbnQoZSwhMCksdGhpcy5lbmRwb2ludF89ZSx0aGlzLmVuZHBvaW50Xy5zdGFydCh0aGlzKSx0aGlzLnBlbmRpbmdSZXNwb25zZXNfPW5ldyBNYXB9YXNzb2NpYXRlQW5kUGFzc1JlY2VpdmVyKCl7Y29uc29sZS5hc3NlcnQoIXRoaXMuZW5kcG9pbnRfLFwiY2Fubm90IGFzc29jaWF0ZSB3aGVuIGFscmVhZHkgYm91bmRcIik7Y29uc3R7ZW5kcG9pbnQwOmUsZW5kcG9pbnQxOm59PW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludC5jcmVhdGVBc3NvY2lhdGVkUGFpcigpO3JldHVybiB0aGlzLmJpbmRIYW5kbGUoZSksbmV3IHRoaXMucmVxdWVzdFR5cGVfKG4pfXVuYmluZCgpe2lmKCF0aGlzLmVuZHBvaW50XylyZXR1cm4gbnVsbDtjb25zdCBlPXRoaXMuZW5kcG9pbnRfO3JldHVybiB0aGlzLmVuZHBvaW50Xz1udWxsLGUuc3RvcCgpLGV9Y2xvc2UoKXt0aGlzLmNsZWFudXBBbmRGbHVzaFBlbmRpbmdSZXNwb25zZXNfKFwiTWVzc2FnZSBwaXBlIGNsb3NlZC5cIiksdGhpcy5lbmRwb2ludF8mJnRoaXMuZW5kcG9pbnRfLmNsb3NlKCksdGhpcy5lbmRwb2ludF89bnVsbH1nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpe3JldHVybiB0aGlzLmNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyX31zZW5kTWVzc2FnZShlLG4sdCxvLGkpe2lmKHQmJighdGhpcy5lbmRwb2ludF98fCF0aGlzLmVuZHBvaW50Xy5pc1N0YXJ0ZWQpKXJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJUaGUgcGlwZSBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZC5cIikpO2NvbnN0IHI9e307bGV0IHM9MDtuLiQuc3RydWN0U3BlYy5maWVsZHMuZm9yRWFjaCgoKGUsbik9Pntjb25zdCB0PW4tcztpZighbW9qby5pbnRlcm5hbC5pc051bGxhYmxlVmFsdWVLaW5kRmllbGQoZSkpcmV0dXJuIHZvaWQocltlLm5hbWVdPW9bdF0pO2NvbnN0IGk9ZS5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXM7aS5pc1ByaW1hcnkmJihzKysscltpLm9yaWdpbmFsRmllbGROYW1lXT1vW3RdKX0pKTtjb25zdCBhPXRoaXMuZW5kcG9pbnRfLmdlbmVyYXRlUmVxdWVzdElkKCk7aWYodGhpcy5lbmRwb2ludF8uc2VuZChlLGEsdD9tb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0V4cGVjdHNSZXNwb25zZTowLG4sciksIXQpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO2NvbnN0IGw9dDtyZXR1cm4gbmV3IFByb21pc2UoKChuLHQpPT57dGhpcy5wZW5kaW5nUmVzcG9uc2VzXy5zZXQoYSx7cmVxdWVzdElkOmEsb3JkaW5hbDplLHJlc3BvbnNlU3RydWN0OmwscmVzb2x2ZTpuLHJlamVjdDp0LHVzZVJlc3VsdFJlc3BvbnNlOml9KX0pKX1mbHVzaEZvclRlc3RpbmcoKXtyZXR1cm4gdGhpcy5lbmRwb2ludF8uZmx1c2hGb3JUZXN0aW5nKCl9b25NZXNzYWdlUmVjZWl2ZWQoZSxuLHQsbyl7aWYoIShuLmZsYWdzJm1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnSXNSZXNwb25zZSl8fG4uZmxhZ3MmbW9qby5pbnRlcm5hbC5rTWVzc2FnZUZsYWdFeHBlY3RzUmVzcG9uc2UpcmV0dXJuIHRoaXMub25FcnJvcihlLFwiUmVjZWl2ZWQgdW5leHBlY3RlZCByZXF1ZXN0IG1lc3NhZ2VcIik7Y29uc3QgaT10aGlzLnBlbmRpbmdSZXNwb25zZXNfLmdldChuLnJlcXVlc3RJZCk7aWYodGhpcy5wZW5kaW5nUmVzcG9uc2VzXy5kZWxldGUobi5yZXF1ZXN0SWQpLCFpKXJldHVybiB0aGlzLm9uRXJyb3IoZSxcIlJlY2VpdmVkIHVuZXhwZWN0ZWQgcmVzcG9uc2UgbWVzc2FnZVwiKTtjb25zdCByPW5ldyBtb2pvLmludGVybmFsLkRlY29kZXIobmV3IG1vam8uaW50ZXJuYWwuRGF0YVZpZXdXcmFwcGVyKHQsbi5oZWFkZXJTaXplKSxvLHtlbmRwb2ludDplfSkuZGVjb2RlU3RydWN0SW5saW5lKGkucmVzcG9uc2VTdHJ1Y3QuJC5zdHJ1Y3RTcGVjKTtpZighcilyZXR1cm4gdGhpcy5vbkVycm9yKGUsXCJSZWNlaXZlZCBtYWxmb3JtZWQgcmVzcG9uc2UgbWVzc2FnZVwiKTtpZihuLm9yZGluYWwhPT1pLm9yZGluYWwpcmV0dXJuIHRoaXMub25FcnJvcihlLFwiUmVjZWl2ZWQgbWFsZm9ybWVkIHJlc3BvbnNlIG1lc3NhZ2VcIik7aWYoaS51c2VSZXN1bHRSZXNwb25zZSl7Y29uc3QgZT1yLnJlc3VsdDt2b2lkIDAhPT1lLnN1Y2Nlc3M/aS5yZXNvbHZlKGUuc3VjY2Vzcyk6aS5yZWplY3QoZS5mYWlsdXJlKX1lbHNlIGkucmVzb2x2ZShyKX1vbkVycm9yKGUsbj12b2lkIDApe3RoaXMuY2xlYW51cEFuZEZsdXNoUGVuZGluZ1Jlc3BvbnNlc18obiksdGhpcy5jb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcl8uZGlzcGF0Y2hFcnJvckV2ZW50KCl9Y2xlYW51cEFuZEZsdXNoUGVuZGluZ1Jlc3BvbnNlc18oZT12b2lkIDApe3RoaXMuZW5kcG9pbnRfJiZ0aGlzLmVuZHBvaW50Xy5zdG9wKCk7Zm9yKGNvbnN0IG4gb2YgdGhpcy5wZW5kaW5nUmVzcG9uc2VzXy5rZXlzKCkpdGhpcy5wZW5kaW5nUmVzcG9uc2VzXy5nZXQobikucmVqZWN0KG5ldyBFcnJvcihlKSk7dGhpcy5wZW5kaW5nUmVzcG9uc2VzXz1uZXcgTWFwfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMucmVtb3RlXz1lfWJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCl7cmV0dXJuIHRoaXMucmVtb3RlXy5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpfWFzc29jaWF0ZUFuZFBhc3NSZWNlaXZlcigpe3JldHVybiB0aGlzLnJlbW90ZV8uYXNzb2NpYXRlQW5kUGFzc1JlY2VpdmVyKCl9aXNCb3VuZCgpe3JldHVybiBudWxsIT09dGhpcy5yZW1vdGVfLmVuZHBvaW50X31jbG9zZSgpe3RoaXMucmVtb3RlXy5jbG9zZSgpfWZsdXNoRm9yVGVzdGluZygpe3JldHVybiB0aGlzLnJlbW90ZV8uZmx1c2hGb3JUZXN0aW5nKCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnJlbW92ZUNhbGxiYWNrcz1uZXcgTWFwLHRoaXMubmV4dExpc3RlbmVySWRfPTB9Z2V0TmV4dElkKCl7cmV0dXJuKyt0aGlzLm5leHRMaXN0ZW5lcklkX31yZW1vdmVMaXN0ZW5lcihlKXtyZXR1cm4gdGhpcy5yZW1vdmVDYWxsYmFja3MuZ2V0KGUpKCksdGhpcy5yZW1vdmVDYWxsYmFja3MuZGVsZXRlKGUpfX0sbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5saXN0ZW5lcnNfPW5ldyBNYXAsdGhpcy5jYWxsYmFja1JvdXRlcl89ZX1hZGRMaXN0ZW5lcihlKXtjb25zdCBuPXRoaXMuY2FsbGJhY2tSb3V0ZXJfLmdldE5leHRJZCgpO3JldHVybiB0aGlzLmxpc3RlbmVyc18uc2V0KG4sZSksdGhpcy5jYWxsYmFja1JvdXRlcl8ucmVtb3ZlQ2FsbGJhY2tzLnNldChuLCgoKT0+dGhpcy5saXN0ZW5lcnNfLmRlbGV0ZShuKSkpLG59Y3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGUpe3JldHVybiBlP3RoaXMuZGlzcGF0Y2hXaXRoUmVzcG9uc2VfLmJpbmQodGhpcyk6dGhpcy5kaXNwYXRjaF8uYmluZCh0aGlzKX1kaXNwYXRjaF8oZSl7Y29uc3Qgbj1BcnJheS5mcm9tKGFyZ3VtZW50cyk7dGhpcy5saXN0ZW5lcnNfLmZvckVhY2goKGU9PmUuYXBwbHkobnVsbCxuKSkpfWRpc3BhdGNoV2l0aFJlc3BvbnNlXyhlKXtjb25zdCBuPUFycmF5LmZyb20oYXJndW1lbnRzKSx0PUFycmF5LmZyb20odGhpcy5saXN0ZW5lcnNfLnZhbHVlcygpKS5tYXAoKGU9PmUuYXBwbHkobnVsbCxuKSkpO2xldCBvO2Zvcihjb25zdCBlIG9mIHQpaWYodm9pZCAwIT09ZSl7aWYodm9pZCAwIT09byl0aHJvdyBuZXcgRXJyb3IoXCJNdWx0aXBsZSBsaXN0ZW5lcnMgYXR0ZW1wdGVkIHRvIHJlcGx5IHRvIGEgbWVzc2FnZVwiKTtvPWV9cmV0dXJuIG99fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuTWVzc2FnZUhhbmRsZXIsbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5lbmRwb2ludHNfPW5ldyBTZXQsdGhpcy5yZW1vdGVUeXBlXz1lLHRoaXMubWVzc2FnZUhhbmRsZXJzXz1uZXcgTWFwLHRoaXMuY29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJfPW5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9cmVnaXN0ZXJIYW5kbGVyKGUsbix0LG8saSl7dGhpcy5tZXNzYWdlSGFuZGxlcnNfLnNldChlLHtwYXJhbVN0cnVjdDpuLHJlc3BvbnNlU3RydWN0OnQsaGFuZGxlcjpvLHVzZVJlc3VsdFJlc3BvbnNlOml9KX1iaW5kSGFuZGxlKGUpe2U9bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmNyZWF0ZUVuZHBvaW50KGUpLHRoaXMuZW5kcG9pbnRzXy5hZGQoZSksZS5zdGFydCh0aGlzKX1iaW5kTmV3UGlwZUFuZFBhc3NSZW1vdGUoKXtsZXQgZT1uZXcgdGhpcy5yZW1vdGVUeXBlXztyZXR1cm4gdGhpcy5iaW5kSGFuZGxlKGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmhhbmRsZSksZX1hc3NvY2lhdGVBbmRQYXNzUmVtb3RlKCl7Y29uc3R7ZW5kcG9pbnQwOmUsZW5kcG9pbnQxOm59PW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludC5jcmVhdGVBc3NvY2lhdGVkUGFpcigpO3JldHVybiB0aGlzLmJpbmRIYW5kbGUoZSksbmV3IHRoaXMucmVtb3RlVHlwZV8obil9Y2xvc2VCaW5kaW5ncygpe2Zvcihjb25zdCBlIG9mIHRoaXMuZW5kcG9pbnRzXyllLmNsb3NlKCk7dGhpcy5lbmRwb2ludHNfLmNsZWFyKCl9Z2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKXtyZXR1cm4gdGhpcy5jb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcl99YXN5bmMgZmx1c2goKXtmb3IobGV0IGUgb2YgdGhpcy5lbmRwb2ludHNfKWF3YWl0IGUuZmx1c2hGb3JUZXN0aW5nKCl9b25NZXNzYWdlUmVjZWl2ZWQoZSxuLHQsbyl7aWYobi5mbGFncyZtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UpdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZWQgdW5leHBlY3RlZCByZXNwb25zZSBvbiBpbnRlcmZhY2UgcmVjZWl2ZXJcIik7Y29uc3QgaT10aGlzLm1lc3NhZ2VIYW5kbGVyc18uZ2V0KG4ub3JkaW5hbCk7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiUmVjZWl2ZWQgdW5rbm93biBtZXNzYWdlXCIpO2NvbnN0IHI9bmV3IG1vam8uaW50ZXJuYWwuRGVjb2RlcihuZXcgbW9qby5pbnRlcm5hbC5EYXRhVmlld1dyYXBwZXIodCxuLmhlYWRlclNpemUpLG8se2VuZHBvaW50OmV9KS5kZWNvZGVTdHJ1Y3RJbmxpbmUoaS5wYXJhbVN0cnVjdC4kLnN0cnVjdFNwZWMpO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIlJlY2VpdmVkIG1hbGZvcm1lZCBtZXNzYWdlXCIpO2NvbnN0IHM9W107Zm9yKGNvbnN0IGUgb2YgaS5wYXJhbVN0cnVjdC4kLnN0cnVjdFNwZWMuZmllbGRzKXtpZighbW9qby5pbnRlcm5hbC5pc051bGxhYmxlVmFsdWVLaW5kRmllbGQoZSkpe3MucHVzaChyW2UubmFtZV0pO2NvbnRpbnVlfWNvbnN0IG49ZS5udWxsYWJsZVZhbHVlS2luZFByb3BlcnRpZXM7bi5pc1ByaW1hcnkmJnMucHVzaChyW24ub3JpZ2luYWxGaWVsZE5hbWVdKX1pLnVzZVJlc3VsdFJlc3BvbnNlP3RoaXMuaGFuZGxlUmVzdWx0UmVzcG9uc2VNZXNzYWdlXyhlLG4saSxzKTp0aGlzLmhhbmRsZVJlc3BvbnNlTWVzc2FnZV8oZSxuLGkscyl9aGFuZGxlUmVzdWx0UmVzcG9uc2VNZXNzYWdlXyhlLG4sdCxvKXt0cnl7bGV0IGk9dC5oYW5kbGVyLmFwcGx5KG51bGwsbyk7XCJvYmplY3RcIj09dHlwZW9mIGkmJlwiUHJvbWlzZVwiPT1pLmNvbnN0cnVjdG9yLm5hbWV8fChpPVByb21pc2UucmVzb2x2ZShpKSksaS50aGVuKChvPT57ZS5zZW5kKG4ub3JkaW5hbCxuLnJlcXVlc3RJZCxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UsdC5yZXNwb25zZVN0cnVjdCx7cmVzdWx0OntzdWNjZXNzOm99fSl9KSkuY2F0Y2goKG89PntlLnNlbmQobi5vcmRpbmFsLG4ucmVxdWVzdElkLG1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnSXNSZXNwb25zZSx0LnJlc3BvbnNlU3RydWN0LHtyZXN1bHQ6e2ZhaWx1cmU6b319KX0pKX1jYXRjaChvKXtlLnNlbmQobi5vcmRpbmFsLG4ucmVxdWVzdElkLG1vam8uaW50ZXJuYWwua01lc3NhZ2VGbGFnSXNSZXNwb25zZSx0LnJlc3BvbnNlU3RydWN0LHtyZXN1bHQ6e2ZhaWx1cmU6b319KX19aGFuZGxlUmVzcG9uc2VNZXNzYWdlXyhlLG4sdCxvKXtsZXQgaT10LmhhbmRsZXIuYXBwbHkobnVsbCxvKTtpZih0LnJlc3BvbnNlU3RydWN0KXtpZih2b2lkIDA9PT1pKXRocm93IHRoaXMub25FcnJvcihlKSxuZXcgRXJyb3IoXCJNZXNzYWdlIGV4cGVjdHMgYSByZXBseSBidXQgaXRzIGhhbmRsZXIgZGlkIG5vdCBwcm92aWRlIG9uZS5cIik7XCJvYmplY3RcIj09dHlwZW9mIGkmJlwiUHJvbWlzZVwiPT1pLmNvbnN0cnVjdG9yLm5hbWV8fChpPVByb21pc2UucmVzb2x2ZShpKSksaS50aGVuKChvPT57ZS5zZW5kKG4ub3JkaW5hbCxuLnJlcXVlc3RJZCxtb2pvLmludGVybmFsLmtNZXNzYWdlRmxhZ0lzUmVzcG9uc2UsdC5yZXNwb25zZVN0cnVjdCxvKX0pKS5jYXRjaCgoKCk9Pnt0aGlzLm9uRXJyb3IoZSl9KSl9fW9uRXJyb3IoZSxuPXZvaWQgMCl7dGhpcy5lbmRwb2ludHNfLmRlbGV0ZShlKSxlLmNsb3NlKCksdGhpcy5jb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcl8uZGlzcGF0Y2hFcnJvckV2ZW50KCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI9Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy5oZWxwZXJfaW50ZXJuYWxfPWV9YmluZEhhbmRsZShlKXt0aGlzLmhlbHBlcl9pbnRlcm5hbF8uYmluZEhhbmRsZShlKX1iaW5kTmV3UGlwZUFuZFBhc3NSZW1vdGUoKXtyZXR1cm4gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmJpbmROZXdQaXBlQW5kUGFzc1JlbW90ZSgpfWFzc29jaWF0ZUFuZFBhc3NSZW1vdGUoKXtyZXR1cm4gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmFzc29jaWF0ZUFuZFBhc3NSZW1vdGUoKX1jbG9zZSgpe3RoaXMuaGVscGVyX2ludGVybmFsXy5jbG9zZUJpbmRpbmdzKCl9Zmx1c2goKXtyZXR1cm4gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmZsdXNoKCl9fSxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSGFuZGxlUmVhZGVyPWNsYXNze2NvbnN0cnVjdG9yKGUpe3RoaXMuaGFuZGxlXz1lLHRoaXMub25SZWFkPW51bGwsdGhpcy5vbkVycm9yPSgpPT57fSx0aGlzLndhdGNoZXJfPW51bGx9aXNTdG9wcGVkKCl7cmV0dXJuIG51bGw9PT10aGlzLndhdGNoZXJffXN0YXJ0KCl7dGhpcy53YXRjaGVyXz10aGlzLmhhbmRsZV8ud2F0Y2goe3JlYWRhYmxlOiEwfSx0aGlzLnJlYWRfLmJpbmQodGhpcykpfXN0b3AoKXt0aGlzLndhdGNoZXJfJiYodGhpcy53YXRjaGVyXy5jYW5jZWwoKSx0aGlzLndhdGNoZXJfPW51bGwpfXN0b3BBbmRDbG9zZUhhbmRsZSgpe3RoaXMud2F0Y2hlcl8mJnRoaXMuc3RvcCgpLHRoaXMuaGFuZGxlXy5jbG9zZSgpfXJlYWRfKGUpe2Zvcig7Oyl7aWYoIXRoaXMud2F0Y2hlcl8pcmV0dXJuO2NvbnN0IGU9dGhpcy5oYW5kbGVfLnJlYWRNZXNzYWdlKCk7aWYoZS5yZXN1bHQ9PU1vam8uUkVTVUxUX1NIT1VMRF9XQUlUKXJldHVybjtpZihlLnJlc3VsdD09TW9qby5SRVNVTFRfRkFJTEVEX1BSRUNPTkRJVElPTilyZXR1cm4gdm9pZCB0aGlzLm9uRXJyb3IoKTtpZihlLnJlc3VsdCE9TW9qby5SRVNVTFRfT0spdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBlcnJvciBvbiBIYW5kbGVSZWFkZXI6IFwiK2UucmVzdWx0KTt0aGlzLm9uUmVhZChlLmJ1ZmZlcixlLmhhbmRsZXMpfX19O2V4cG9ydHttb2pvfTsiLCIvLyBtb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2JpZ19idWZmZXIubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uL2pzL2JpbmRpbmdzLmpzJztcblxuXG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJpZ0J1ZmZlclNoYXJlZE1lbW9yeVJlZ2lvblNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IEJpZ0J1ZmZlclNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQmlnQnVmZmVyU2hhcmVkTWVtb3J5UmVnaW9uU3BlYy4kLFxuICAgICdCaWdCdWZmZXJTaGFyZWRNZW1vcnlSZWdpb24nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdidWZmZXJIYW5kbGUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkhhbmRsZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NpemUnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpZ0J1ZmZlclNoYXJlZE1lbW9yeVJlZ2lvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFNb2pvSGFuZGxlIH0gKi9cbiAgICB0aGlzLmJ1ZmZlckhhbmRsZTtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnNpemU7XG4gIH1cbn1cblxubW9qby5pbnRlcm5hbC5VbmlvbihcbiAgICBCaWdCdWZmZXJTcGVjLiQsICdCaWdCdWZmZXInLFxuICAgIHtcbiAgICAgICdieXRlcyc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAwLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5VaW50OCwgZmFsc2UpLFxuICAgICAgfSxcbiAgICAgICdzaGFyZWRNZW1vcnknOiB7XG4gICAgICAgICdvcmRpbmFsJzogMSxcbiAgICAgICAgJ3R5cGUnOiBCaWdCdWZmZXJTaGFyZWRNZW1vcnlSZWdpb25TcGVjLiQsXG4gICAgICB9LFxuICAgICAgJ2ludmFsaWRCdWZmZXInOiB7XG4gICAgICAgICdvcmRpbmFsJzogMixcbiAgICAgICAgJ3R5cGUnOiBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICB9LFxuICAgIH0pO1xuXG4vKipcbiAqIEB0eXBlZGVmIHsge1xuICogICBieXRlczogKCFBcnJheTwhbnVtYmVyPnx1bmRlZmluZWQpLFxuICogICBzaGFyZWRNZW1vcnk6ICghQmlnQnVmZmVyU2hhcmVkTWVtb3J5UmVnaW9ufHVuZGVmaW5lZCksXG4gKiAgIGludmFsaWRCdWZmZXI6ICghYm9vbGVhbnx1bmRlZmluZWQpLFxuICogfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBCaWdCdWZmZXIgPSB7fTtcbiIsIi8vIG1vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZS5tb2pvbS5tLmpzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IG1vam9tX2JpbmRpbmdzX2dlbmVyYXRvci5weSwgZG8gbm90IGVkaXRcblxuLy8gQ29weXJpZ2h0IDIwMjAgVGhlIENocm9taXVtIEF1dGhvcnNcbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbmltcG9ydCB7bW9qb30gZnJvbSAnLi4vLi4vanMvYmluZGluZ3MuanMnO1xuXG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRmlsZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgUmVhZE9ubHlGaWxlU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBGaWxlU3BlYy4kLFxuICAgICdGaWxlJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZmQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkhhbmRsZSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2FzeW5jJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhTW9qb0hhbmRsZSB9ICovXG4gICAgdGhpcy5mZDtcbiAgICAvKiogQHR5cGUgeyAhYm9vbGVhbiB9ICovXG4gICAgdGhpcy5hc3luYztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgUmVhZE9ubHlGaWxlU3BlYy4kLFxuICAgICdSZWFkT25seUZpbGUnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdmZCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSGFuZGxlLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnYXN5bmMnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgUmVhZE9ubHlGaWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIU1vam9IYW5kbGUgfSAqL1xuICAgIHRoaXMuZmQ7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuYXN5bmM7XG4gIH1cbn1cblxuIiwiLy8gbW9qby9wdWJsaWMvbW9qb20vYmFzZS9maWxlX3BhdGgubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uL2pzL2JpbmRpbmdzLmpzJztcblxuXG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVQYXRoU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBSZWxhdGl2ZUZpbGVQYXRoU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBGaWxlUGF0aFNwZWMuJCxcbiAgICAnRmlsZVBhdGgnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwYXRoJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlUGF0aCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMucGF0aDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgUmVsYXRpdmVGaWxlUGF0aFNwZWMuJCxcbiAgICAnUmVsYXRpdmVGaWxlUGF0aCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BhdGgnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbGF0aXZlRmlsZVBhdGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnBhdGg7XG4gIH1cbn1cblxuIiwiLy8gbW9qby9wdWJsaWMvbW9qb20vYmFzZS90aW1lLm1vam9tLm0uanMgaXMgYXV0byBnZW5lcmF0ZWQgYnkgbW9qb21fYmluZGluZ3NfZ2VuZXJhdG9yLnB5LCBkbyBub3QgZWRpdFxuXG4vLyBDb3B5cmlnaHQgMjAyMCBUaGUgQ2hyb21pdW0gQXV0aG9yc1xuLy8gVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuLy8gZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZS5cblxuaW1wb3J0IHttb2pvfSBmcm9tICcuLi8uLi9qcy9iaW5kaW5ncy5qcyc7XG5cblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUaW1lU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBKU1RpbWVTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRpbWVEZWx0YVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGltZVRpY2tzU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUaW1lU3BlYy4kLFxuICAgICdUaW1lJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW50ZXJuYWxWYWx1ZScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50NjQsXG4gICAgICAgIEJpZ0ludCgwKSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRpbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhYmlnaW50IH0gKi9cbiAgICB0aGlzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEpTVGltZVNwZWMuJCxcbiAgICAnSlNUaW1lJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbXNlYycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuRG91YmxlLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgSlNUaW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5tc2VjO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUaW1lRGVsdGFTcGVjLiQsXG4gICAgJ1RpbWVEZWx0YScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21pY3Jvc2Vjb25kcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50NjQsXG4gICAgICAgIEJpZ0ludCgwKSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRpbWVEZWx0YSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFiaWdpbnQgfSAqL1xuICAgIHRoaXMubWljcm9zZWNvbmRzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUaW1lVGlja3NTcGVjLiQsXG4gICAgJ1RpbWVUaWNrcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ludGVybmFsVmFsdWUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDY0LFxuICAgICAgICBCaWdJbnQoMCksXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUaW1lVGlja3Mge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhYmlnaW50IH0gKi9cbiAgICB0aGlzLmludGVybmFsVmFsdWU7XG4gIH1cbn1cblxuIiwiLy8gbW9qby9wdWJsaWMvbW9qb20vYmFzZS92YWx1ZXMubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uL2pzL2JpbmRpbmdzLmpzJztcblxuXG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IERpY3Rpb25hcnlWYWx1ZVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgTGlzdFZhbHVlU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgVmFsdWVTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERpY3Rpb25hcnlWYWx1ZVNwZWMuJCxcbiAgICAnRGljdGlvbmFyeVZhbHVlJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3RvcmFnZScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuTWFwKG1vam8uaW50ZXJuYWwuU3RyaW5nLCBWYWx1ZVNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGljdGlvbmFyeVZhbHVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIU9iamVjdDwhc3RyaW5nLCAhVmFsdWU+IH0gKi9cbiAgICB0aGlzLnN0b3JhZ2U7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIExpc3RWYWx1ZVNwZWMuJCxcbiAgICAnTGlzdFZhbHVlJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3RvcmFnZScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkoVmFsdWVTcGVjLiQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIExpc3RWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhVmFsdWU+IH0gKi9cbiAgICB0aGlzLnN0b3JhZ2U7XG4gIH1cbn1cblxubW9qby5pbnRlcm5hbC5VbmlvbihcbiAgICBWYWx1ZVNwZWMuJCwgJ1ZhbHVlJyxcbiAgICB7XG4gICAgICAnbnVsbFZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDAsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5VaW50OCxcbiAgICAgIH0sXG4gICAgICAnYm9vbFZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDEsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgfSxcbiAgICAgICdpbnRWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAyLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuSW50MzIsXG4gICAgICB9LFxuICAgICAgJ2RvdWJsZVZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDMsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5Eb3VibGUsXG4gICAgICB9LFxuICAgICAgJ3N0cmluZ1ZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDQsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICB9LFxuICAgICAgJ2JpbmFyeVZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDUsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5BcnJheShtb2pvLmludGVybmFsLlVpbnQ4LCBmYWxzZSksXG4gICAgICB9LFxuICAgICAgJ2RpY3Rpb25hcnlWYWx1ZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA2LFxuICAgICAgICAndHlwZSc6IERpY3Rpb25hcnlWYWx1ZVNwZWMuJCxcbiAgICAgIH0sXG4gICAgICAnbGlzdFZhbHVlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDcsXG4gICAgICAgICd0eXBlJzogTGlzdFZhbHVlU3BlYy4kLFxuICAgICAgfSxcbiAgICB9KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7IHtcbiAqICAgbnVsbFZhbHVlOiAoIW51bWJlcnx1bmRlZmluZWQpLFxuICogICBib29sVmFsdWU6ICghYm9vbGVhbnx1bmRlZmluZWQpLFxuICogICBpbnRWYWx1ZTogKCFudW1iZXJ8dW5kZWZpbmVkKSxcbiAqICAgZG91YmxlVmFsdWU6ICghbnVtYmVyfHVuZGVmaW5lZCksXG4gKiAgIHN0cmluZ1ZhbHVlOiAoIXN0cmluZ3x1bmRlZmluZWQpLFxuICogICBiaW5hcnlWYWx1ZTogKCFBcnJheTwhbnVtYmVyPnx1bmRlZmluZWQpLFxuICogICBkaWN0aW9uYXJ5VmFsdWU6ICghRGljdGlvbmFyeVZhbHVlfHVuZGVmaW5lZCksXG4gKiAgIGxpc3RWYWx1ZTogKCFMaXN0VmFsdWV8dW5kZWZpbmVkKSxcbiAqIH0gfVxuICovXG5leHBvcnQgY29uc3QgVmFsdWUgPSB7fTtcbiIsIi8vIHNraWEvcHVibGljL21vam9tL2ltYWdlX2luZm8ubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uLy4uL21vam8vcHVibGljL2pzL2JpbmRpbmdzLmpzJztcblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiAhbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IENvbG9yVHlwZVNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IENvbG9yVHlwZSA9IHtcbiAgXG4gIFVOS05PV046IDAsXG4gIEFMUEhBXzg6IDEsXG4gIFJHQl81NjU6IDIsXG4gIEFSR0JfNDQ0NDogMyxcbiAgUkdCQV84ODg4OiA0LFxuICBCR1JBXzg4ODg6IDUsXG4gIERFUFJFQ0FURURfSU5ERVhfODogNixcbiAgR1JBWV84OiA3LFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogNyxcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgQWxwaGFUeXBlU3BlYyA9IHsgJDogbW9qby5pbnRlcm5hbC5FbnVtKCkgfTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgQWxwaGFUeXBlID0ge1xuICBcbiAgVU5LTk9XTjogMCxcbiAgQUxQSEFfVFlQRV9PUEFRVUU6IDEsXG4gIFBSRU1VTDogMixcbiAgVU5QUkVNVUw6IDMsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAzLFxufTtcblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBJbWFnZUluZm9TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJpdG1hcE4zMkltYWdlSW5mb1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgSW1hZ2VJbmZvU3BlYy4kLFxuICAgICdJbWFnZUluZm8nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb2xvclR5cGUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBDb2xvclR5cGVTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhbHBoYVR5cGUnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBBbHBoYVR5cGVTcGVjLiQsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd3aWR0aCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaGVpZ2h0JywgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY29sb3JUcmFuc2ZlckZ1bmN0aW9uJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb2xvclRvWHl6TWF0cml4JywgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgNDBdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQ29sb3JUeXBlIH0gKi9cbiAgICB0aGlzLmNvbG9yVHlwZTtcbiAgICAvKiogQHR5cGUgeyAhQWxwaGFUeXBlIH0gKi9cbiAgICB0aGlzLmFscGhhVHlwZTtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLndpZHRoO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuaGVpZ2h0O1xuICAgIC8qKiBAdHlwZSB7IChBcnJheTwhbnVtYmVyPnx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmNvbG9yVHJhbnNmZXJGdW5jdGlvbjtcbiAgICAvKiogQHR5cGUgeyAoQXJyYXk8IW51bWJlcj58dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5jb2xvclRvWHl6TWF0cml4O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBCaXRtYXBOMzJJbWFnZUluZm9TcGVjLiQsXG4gICAgJ0JpdG1hcE4zMkltYWdlSW5mbycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2FscGhhVHlwZScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIEFscGhhVHlwZVNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3dpZHRoJywgNCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdoZWlnaHQnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NvbG9yVHJhbnNmZXJGdW5jdGlvbicsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY29sb3JUb1h5ek1hdHJpeCcsIDI0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KG1vam8uaW50ZXJuYWwuRmxvYXQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDQwXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQml0bWFwTjMySW1hZ2VJbmZvIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFscGhhVHlwZSB9ICovXG4gICAgdGhpcy5hbHBoYVR5cGU7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy53aWR0aDtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLmhlaWdodDtcbiAgICAvKiogQHR5cGUgeyAoQXJyYXk8IW51bWJlcj58dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5jb2xvclRyYW5zZmVyRnVuY3Rpb247XG4gICAgLyoqIEB0eXBlIHsgKEFycmF5PCFudW1iZXI+fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuY29sb3JUb1h5ek1hdHJpeDtcbiAgfVxufVxuXG4iLCIvLyBza2lhL3B1YmxpYy9tb2pvbS9iaXRtYXAubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uLy4uL21vam8vcHVibGljL2pzL2JpbmRpbmdzLmpzJztcblxuaW1wb3J0IHtcbiAgQmlnQnVmZmVyIGFzIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlcixcbiAgQmlnQnVmZmVyU3BlYyBhcyBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjXG59IGZyb20gJy4uLy4uLy4uL21vam8vcHVibGljL21vam9tL2Jhc2UvYmlnX2J1ZmZlci5tb2pvbS5tLmpzJztcblxuaW1wb3J0IHtcbiAgQml0bWFwTjMySW1hZ2VJbmZvIGFzIHNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvLFxuICBCaXRtYXBOMzJJbWFnZUluZm9TcGVjIGFzIHNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvU3BlYyxcbiAgSW1hZ2VJbmZvIGFzIHNraWFfbW9qb21fSW1hZ2VJbmZvLFxuICBJbWFnZUluZm9TcGVjIGFzIHNraWFfbW9qb21fSW1hZ2VJbmZvU3BlY1xufSBmcm9tICcuL2ltYWdlX2luZm8ubW9qb20ubS5qcyc7XG5cblxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBCaXRtYXBOMzJTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJpdG1hcFdpdGhBcmJpdHJhcnlCcHBTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEJpdG1hcE1hcHBlZEZyb21UcnVzdGVkUHJvY2Vzc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgSW5saW5lQml0bWFwU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBCaXRtYXBOMzJTcGVjLiQsXG4gICAgJ0JpdG1hcE4zMicsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ltYWdlSW5mbycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGl4ZWxEYXRhJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQml0bWFwTjMyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvIH0gKi9cbiAgICB0aGlzLmltYWdlSW5mbztcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyIH0gKi9cbiAgICB0aGlzLnBpeGVsRGF0YTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQml0bWFwV2l0aEFyYml0cmFyeUJwcFNwZWMuJCxcbiAgICAnQml0bWFwV2l0aEFyYml0cmFyeUJwcCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ltYWdlSW5mbycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNraWFfbW9qb21fSW1hZ2VJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndU5VU0VEUm93Qnl0ZXMnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQ2NCxcbiAgICAgICAgQmlnSW50KDApLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGl4ZWxEYXRhJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCA0MF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEJpdG1hcFdpdGhBcmJpdHJhcnlCcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc2tpYV9tb2pvbV9JbWFnZUluZm8gfSAqL1xuICAgIHRoaXMuaW1hZ2VJbmZvO1xuICAgIC8qKiBAdHlwZSB7ICFiaWdpbnQgfSAqL1xuICAgIHRoaXMudU5VU0VEUm93Qnl0ZXM7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy5waXhlbERhdGE7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEJpdG1hcE1hcHBlZEZyb21UcnVzdGVkUHJvY2Vzc1NwZWMuJCxcbiAgICAnQml0bWFwTWFwcGVkRnJvbVRydXN0ZWRQcm9jZXNzJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW1hZ2VJbmZvJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgc2tpYV9tb2pvbV9JbWFnZUluZm9TcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd1TlVTRURSb3dCeXRlcycsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDY0LFxuICAgICAgICBCaWdJbnQoMCksXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwaXhlbERhdGEnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDQwXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQml0bWFwTWFwcGVkRnJvbVRydXN0ZWRQcm9jZXNzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXNraWFfbW9qb21fSW1hZ2VJbmZvIH0gKi9cbiAgICB0aGlzLmltYWdlSW5mbztcbiAgICAvKiogQHR5cGUgeyAhYmlnaW50IH0gKi9cbiAgICB0aGlzLnVOVVNFRFJvd0J5dGVzO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMucGl4ZWxEYXRhO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBJbmxpbmVCaXRtYXBTcGVjLiQsXG4gICAgJ0lubGluZUJpdG1hcCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ltYWdlSW5mbycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIHNraWFfbW9qb21fQml0bWFwTjMySW1hZ2VJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGl4ZWxEYXRhJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShtb2pvLmludGVybmFsLlVpbnQ4LCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmxpbmVCaXRtYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc2tpYV9tb2pvbV9CaXRtYXBOMzJJbWFnZUluZm8gfSAqL1xuICAgIHRoaXMuaW1hZ2VJbmZvO1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhbnVtYmVyPiB9ICovXG4gICAgdGhpcy5waXhlbERhdGE7XG4gIH1cbn1cblxuIiwiLy8gc2VydmljZXMvb25fZGV2aWNlX21vZGVsL3B1YmxpYy9tb2pvbS9vbl9kZXZpY2VfbW9kZWwubW9qb20ubS5qcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBtb2pvbV9iaW5kaW5nc19nZW5lcmF0b3IucHksIGRvIG5vdCBlZGl0XG5cbi8vIENvcHlyaWdodCAyMDIwIFRoZSBDaHJvbWl1bSBBdXRob3JzXG4vLyBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4vLyBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlLlxuXG5pbXBvcnQge21vam99IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL2pzL2JpbmRpbmdzLmpzJztcblxuaW1wb3J0IHtcbiAgRmlsZSBhcyBtb2pvQmFzZV9tb2pvbV9GaWxlLFxuICBGaWxlU3BlYyBhcyBtb2pvQmFzZV9tb2pvbV9GaWxlU3BlY1xufSBmcm9tICcuLi8uLi8uLi8uLi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2ZpbGUubW9qb20ubS5qcyc7XG5cbmltcG9ydCB7XG4gIEZpbGVQYXRoIGFzIG1vam9CYXNlX21vam9tX0ZpbGVQYXRoLFxuICBGaWxlUGF0aFNwZWMgYXMgbW9qb0Jhc2VfbW9qb21fRmlsZVBhdGhTcGVjXG59IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL21vam9tL2Jhc2UvZmlsZV9wYXRoLm1vam9tLm0uanMnO1xuXG5pbXBvcnQge1xuICBUaW1lRGVsdGEgYXMgbW9qb0Jhc2VfbW9qb21fVGltZURlbHRhLFxuICBUaW1lRGVsdGFTcGVjIGFzIG1vam9CYXNlX21vam9tX1RpbWVEZWx0YVNwZWNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS90aW1lLm1vam9tLm0uanMnO1xuXG5pbXBvcnQge1xuICBEaWN0aW9uYXJ5VmFsdWUgYXMgbW9qb0Jhc2VfbW9qb21fRGljdGlvbmFyeVZhbHVlLFxuICBEaWN0aW9uYXJ5VmFsdWVTcGVjIGFzIG1vam9CYXNlX21vam9tX0RpY3Rpb25hcnlWYWx1ZVNwZWMsXG4gIFZhbHVlIGFzIG1vam9CYXNlX21vam9tX1ZhbHVlLFxuICBWYWx1ZVNwZWMgYXMgbW9qb0Jhc2VfbW9qb21fVmFsdWVTcGVjXG59IGZyb20gJy4uLy4uLy4uLy4uL21vam8vcHVibGljL21vam9tL2Jhc2UvdmFsdWVzLm1vam9tLm0uanMnO1xuXG5pbXBvcnQge1xuICBCaXRtYXBXaXRoQXJiaXRyYXJ5QnBwIGFzIHNraWFfbW9qb21fQml0bWFwV2l0aEFyYml0cmFyeUJwcCxcbiAgQml0bWFwV2l0aEFyYml0cmFyeUJwcFNwZWMgYXMgc2tpYV9tb2pvbV9CaXRtYXBXaXRoQXJiaXRyYXJ5QnBwU3BlY1xufSBmcm9tICcuLi8uLi8uLi8uLi9za2lhL3B1YmxpYy9tb2pvbS9iaXRtYXAubW9qb20ubS5qcyc7XG5cblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBHZW5lcmF0ZUVycm9yU3BlYyA9IHsgJDogbW9qby5pbnRlcm5hbC5FbnVtKCkgfTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgR2VuZXJhdGVFcnJvciA9IHtcbiAgXG4gIGtVbmtub3duOiAwLFxuICBrSW52YWxpZENvbnN0cmFpbnQ6IDEsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAxLFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBUb2tlblNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRva2VuID0ge1xuICBcbiAga1N5c3RlbTogMCxcbiAga01vZGVsOiAxLFxuICBrVXNlcjogMixcbiAga0VuZDogMyxcbiAga1Rvb2xDYWxsOiA0LFxuICBrVG9vbFJlc3BvbnNlOiA1LFxuICBrVGhvdWdodDogNixcbiAgTUlOX1ZBTFVFOiAwLFxuICBNQVhfVkFMVUU6IDYsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiAhbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IElucHV0U291cmNlU3BlYyA9IHsgJDogbW9qby5pbnRlcm5hbC5FbnVtKCkgfTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgSW5wdXRTb3VyY2UgPSB7XG4gIFxuICBrVW5rbm93bjogMCxcbiAga1VzZXJJbnB1dDogMSxcbiAga01vZGVsT3V0cHV0RmVlZGJhY2s6IDIsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAyLFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBQcmlvcml0eVNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IFByaW9yaXR5ID0ge1xuICBcbiAga0ZvcmVncm91bmQ6IDAsXG4gIGtCYWNrZ3JvdW5kOiAxLFxuICBNSU5fVkFMVUU6IDAsXG4gIE1BWF9WQUxVRTogMSxcbn07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6ICFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgRGVjaXNpb25RdWVzdGlvblR5cGVTcGVjID0geyAkOiBtb2pvLmludGVybmFsLkVudW0oKSB9O1xuXG4vKipcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblF1ZXN0aW9uVHlwZSA9IHtcbiAgXG4gIGtCb29sZWFuOiAwLFxuICBrQ2hvaWNlOiAxLFxuICBrU2NvcmU6IDIsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAyLFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBQZXJmb3JtYW5jZUNsYXNzU3BlYyA9IHsgJDogbW9qby5pbnRlcm5hbC5FbnVtKCkgfTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgUGVyZm9ybWFuY2VDbGFzcyA9IHtcbiAgXG4gIGtFcnJvcjogMCxcbiAga0dwdUJsb2NrZWQ6IDEsXG4gIGtGYWlsZWRUb0xvYWRMaWJyYXJ5OiAyLFxuICBrVmVyeUxvdzogMyxcbiAga0xvdzogNCxcbiAga01lZGl1bTogNSxcbiAga0hpZ2g6IDYsXG4gIGtWZXJ5SGlnaDogNyxcbiAgTUlOX1ZBTFVFOiAwLFxuICBNQVhfVkFMVUU6IDcsXG59O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiAhbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9IH1cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRNb2RlbFJlc3VsdFNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRNb2RlbFJlc3VsdCA9IHtcbiAgXG4gIGtTdWNjZXNzOiAwLFxuICBrR3B1QmxvY2tlZDogMSxcbiAga0ZhaWxlZFRvTG9hZExpYnJhcnk6IDIsXG4gIE1JTl9WQUxVRTogMCxcbiAgTUFYX1ZBTFVFOiAyLFxufTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDogIW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBBc3JFcnJvclNwZWMgPSB7ICQ6IG1vam8uaW50ZXJuYWwuRW51bSgpIH07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IEFzckVycm9yID0ge1xuICBcbiAga1Vua25vd246IDAsXG4gIGtJbml0aWFsaXphdGlvbkZhaWxlZDogMSxcbiAgTUlOX1ZBTFVFOiAwLFxuICBNQVhfVkFMVUU6IDEsXG59O1xuXG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlclBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5TdHJlYW1pbmdSZXNwb25kZXInLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFSZXNwb25zZUNodW5rIH0gY2h1bmtcbiAgICovXG5cbiAgb25SZXNwb25zZShjaHVuaykge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhUmVzcG9uc2VTdW1tYXJ5IH0gc3VtbWFyeVxuICAgKi9cblxuICBvbkNvbXBsZXRlKHN1bW1hcnkpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFycmF5PCFUb29sQ2FsbD4gfSB0b29sQ2FsbHNcbiAgICovXG5cbiAgb25Ub29sQ2FsbHModG9vbENhbGxzKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgU3RyZWFtaW5nUmVzcG9uZGVySW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVN0cmVhbWluZ1Jlc3BvbmRlclBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IVN0cmVhbWluZ1Jlc3BvbmRlclBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFSZXNwb25zZUNodW5rIH0gY2h1bmtcbiAgICovXG5cbiAgb25SZXNwb25zZShcbiAgICAgIGNodW5rKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgY2h1bmtcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhUmVzcG9uc2VTdW1tYXJ5IH0gc3VtbWFyeVxuICAgKi9cblxuICBvbkNvbXBsZXRlKFxuICAgICAgc3VtbWFyeSkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHN1bW1hcnlcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhQXJyYXk8IVRvb2xDYWxsPiB9IHRvb2xDYWxsc1xuICAgKi9cblxuICBvblRvb2xDYWxscyhcbiAgICAgIHRvb2xDYWxscykge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PblRvb2xDYWxsc19QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICB0b29sQ2FsbHNcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTdHJlYW1pbmdSZXNwb25kZXJcbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlclJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IVN0cmVhbWluZ1Jlc3BvbmRlckludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLm9uUmVzcG9uc2UuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5vbkNvbXBsZXRlLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAyLFxuICAgICAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Ub29sQ2FsbHNfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLm9uVG9vbENhbGxzLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlciB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uU3RyZWFtaW5nUmVzcG9uZGVyXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IVN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTdHJlYW1pbmdSZXNwb25kZXJcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ1Jlc3BvbmRlckNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9uUmVzcG9uc2UgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLm9uUmVzcG9uc2UuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5vbkNvbXBsZXRlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEsXG4gICAgICAgIFN0cmVhbWluZ1Jlc3BvbmRlcl9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMub25Ub29sQ2FsbHMgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMixcbiAgICAgICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uVG9vbENhbGxzX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5vblRvb2xDYWxscy5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uQ29udGV4dENsaWVudCcsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFudW1iZXIgfSB0b2tlbnNQcm9jZXNzZWRcbiAgICovXG5cbiAgb25Db21wbGV0ZSh0b2tlbnNQcm9jZXNzZWQpIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBDb250ZXh0Q2xpZW50SW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRSZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFDb250ZXh0Q2xpZW50UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIENvbnRleHRDbGllbnRQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IUNvbnRleHRDbGllbnRQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhbnVtYmVyIH0gdG9rZW5zUHJvY2Vzc2VkXG4gICAqL1xuXG4gIG9uQ29tcGxldGUoXG4gICAgICB0b2tlbnNQcm9jZXNzZWQpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBDb250ZXh0Q2xpZW50X09uQ29tcGxldGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgdG9rZW5zUHJvY2Vzc2VkXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgQ29udGV4dENsaWVudFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dENsaWVudFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUNvbnRleHRDbGllbnRJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IUNvbnRleHRDbGllbnRSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgQ29udGV4dENsaWVudFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFDb250ZXh0Q2xpZW50UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIENvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwub25Db21wbGV0ZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0Q2xpZW50IHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5Db250ZXh0Q2xpZW50XCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IUNvbnRleHRDbGllbnRSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgQ29udGV4dENsaWVudFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIENvbnRleHRDbGllbnRcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRleHRDbGllbnRDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIENvbnRleHRDbGllbnRSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQ29udGV4dENsaWVudFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ29tcGxldGUgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQ29udGV4dENsaWVudF9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5TZXNzaW9uJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFwcGVuZE9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ID9Db250ZXh0Q2xpZW50UmVtb3RlIH0gY2xpZW50XG4gICAqL1xuXG4gIGFwcGVuZChvcHRpb25zLCBjbGllbnQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUdlbmVyYXRlT3B0aW9ucyB9IG9wdGlvbnNcbiAgICogQHBhcmFtIHsgIVN0cmVhbWluZ1Jlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBnZW5lcmF0ZShvcHRpb25zLCByZXNwb25kZXIpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUlucHV0IH0gaW5wdXRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzaXplOiAhbnVtYmVyLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGdldFNpemVJblRva2VucyhpbnB1dCkge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHByb2JhYmlsaXR5OiAhbnVtYmVyLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIHNjb3JlKHRleHQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIGNsb25lKHNlc3Npb24pIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBwcm9iYWJpbGl0aWVzOiAhQXJyYXk8IW51bWJlcj4sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZ2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nKHRleHQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVByaW9yaXR5IH0gcHJpb3JpdHlcbiAgICovXG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFzclN0cmVhbU9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ICFBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9IHN0cmVhbVxuICAgKiBAcGFyYW0geyAhQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIH0gcmVzcG9uZGVyXG4gICAqL1xuXG4gIGFzclN0cmVhbShvcHRpb25zLCBzdHJlYW0sIHJlc3BvbmRlcikge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhSGludE9wdGlvbnMgfSBvcHRpb25zXG4gICAqL1xuXG4gIGhpbnQob3B0aW9ucykge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IFNlc3Npb25JbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgU2Vzc2lvblBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhU2Vzc2lvblBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBcHBlbmRPcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyA/Q29udGV4dENsaWVudFJlbW90ZSB9IGNsaWVudFxuICAgKi9cblxuICBhcHBlbmQoXG4gICAgICBvcHRpb25zLFxuICAgICAgY2xpZW50KSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgNixcbiAgICAgICAgU2Vzc2lvbl9BcHBlbmRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBjbGllbnRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhR2VuZXJhdGVPcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlIH0gcmVzcG9uZGVyXG4gICAqL1xuXG4gIGdlbmVyYXRlKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHJlc3BvbmRlcikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDcsXG4gICAgICAgIFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICByZXNwb25kZXJcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhSW5wdXQgfSBpbnB1dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHNpemU6ICFudW1iZXIsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZ2V0U2l6ZUluVG9rZW5zKFxuICAgICAgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgNSxcbiAgICAgICAgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTZXNzaW9uX0dldFNpemVJblRva2Vuc19SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIGlucHV0XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBwcm9iYWJpbGl0eTogIW51bWJlcixcbiAgICogIH0+fVxuICAgKi9cblxuICBzY29yZShcbiAgICAgIHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgU2Vzc2lvbl9TY29yZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIGNsb25lKFxuICAgICAgc2Vzc2lvbikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIFNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgc2Vzc2lvblxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcHJvYmFiaWxpdGllczogIUFycmF5PCFudW1iZXI+LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGdldFByb2JhYmlsaXRpZXNCbG9ja2luZyhcbiAgICAgIHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgOCxcbiAgICAgICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhUHJpb3JpdHkgfSBwcmlvcml0eVxuICAgKi9cblxuICBzZXRQcmlvcml0eShcbiAgICAgIHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgOSxcbiAgICAgICAgU2Vzc2lvbl9TZXRQcmlvcml0eV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFBc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIgfSBzdHJlYW1cbiAgICogQHBhcmFtIHsgIUFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBhc3JTdHJlYW0oXG4gICAgICBvcHRpb25zLFxuICAgICAgc3RyZWFtLFxuICAgICAgcmVzcG9uZGVyKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMTAsXG4gICAgICAgIFNlc3Npb25fQXNyU3RyZWFtX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgc3RyZWFtLFxuICAgICAgICAgIHJlc3BvbmRlclxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFIaW50T3B0aW9ucyB9IG9wdGlvbnNcbiAgICovXG5cbiAgaGludChcbiAgICAgIG9wdGlvbnMpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAxMSxcbiAgICAgICAgU2Vzc2lvbl9IaW50X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTZXNzaW9uXG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshU2Vzc2lvbkludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhU2Vzc2lvblJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBTZXNzaW9uUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNixcbiAgICAgICAgU2Vzc2lvbl9BcHBlbmRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmFwcGVuZC5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNyxcbiAgICAgICAgU2Vzc2lvbl9HZW5lcmF0ZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuZ2VuZXJhdGUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDUsXG4gICAgICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuZ2V0U2l6ZUluVG9rZW5zLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAzLFxuICAgICAgICBTZXNzaW9uX1Njb3JlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9TY29yZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgaW1wbC5zY29yZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNCxcbiAgICAgICAgU2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuY2xvbmUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDgsXG4gICAgICAgIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuZ2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICA5LFxuICAgICAgICBTZXNzaW9uX1NldFByaW9yaXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5zZXRQcmlvcml0eS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMTAsXG4gICAgICAgIFNlc3Npb25fQXNyU3RyZWFtX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5hc3JTdHJlYW0uYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDExLFxuICAgICAgICBTZXNzaW9uX0hpbnRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLmhpbnQuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJvbl9kZXZpY2VfbW9kZWwubW9qb20uU2Vzc2lvblwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFTZXNzaW9uUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IFNlc3Npb25SZW1vdGU7XG4gICAgcmVtb3RlLiQuYmluZE5ld1BpcGVBbmRQYXNzUmVjZWl2ZXIoKS5iaW5kSW5Ccm93c2VyKCk7XG4gICAgcmV0dXJuIHJlbW90ZTtcbiAgfVxufVxuXG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTZXNzaW9uXG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBTZXNzaW9uUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVNlc3Npb25SZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hcHBlbmQgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNixcbiAgICAgICAgU2Vzc2lvbl9BcHBlbmRfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmFwcGVuZC5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmdlbmVyYXRlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDcsXG4gICAgICAgIFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmdlbmVyYXRlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U2l6ZUluVG9rZW5zID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDUsXG4gICAgICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMuZ2V0U2l6ZUluVG9rZW5zLmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5zY29yZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAzLFxuICAgICAgICBTZXNzaW9uX1Njb3JlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU2Vzc2lvbl9TY29yZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5zY29yZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuY2xvbmUgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNCxcbiAgICAgICAgU2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuY2xvbmUuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5nZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmcgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgOCxcbiAgICAgICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUGFyYW1zU3BlYy4kLFxuICAgICAgICBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5nZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmcuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnNldFByaW9yaXR5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDksXG4gICAgICAgIFNlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnNldFByaW9yaXR5LmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuYXNyU3RyZWFtID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEwLFxuICAgICAgICBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuYXNyU3RyZWFtLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuaGludCA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxMSxcbiAgICAgICAgU2Vzc2lvbl9IaW50X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5oaW50LmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5PbkRldmljZU1vZGVsJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbEludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqIEBwYXJhbSB7ID9TZXNzaW9uUGFyYW1zIH0gcGFyYW1zXG4gICAqL1xuXG4gIHN0YXJ0U2Vzc2lvbihzZXNzaW9uLCBwYXJhbXMpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzYWZldHlJbmZvOiA/U2FmZXR5SW5mbyxcbiAgICogIH0+fVxuICAgKi9cblxuICBjbGFzc2lmeVRleHRTYWZldHkodGV4dCkge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogP0xhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGRldGVjdExhbmd1YWdlKHRleHQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUxvYWRBZGFwdGF0aW9uUGFyYW1zIH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7ICFPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyIH0gbW9kZWxcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ICFMb2FkTW9kZWxSZXN1bHQsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgbG9hZEFkYXB0YXRpb24ocGFyYW1zLCBtb2RlbCkge31cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhTG9hZFBvc3RQcm9jZXNzb3JQYXJhbXMgfSBwYXJhbXNcbiAgICogQHBhcmFtIHsgIU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIgfSBtb2RlbFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogIUxvYWRNb2RlbFJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBsb2FkUG9zdFByb2Nlc3NvcihwYXJhbXMsIG1vZGVsKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgT25EZXZpY2VNb2RlbEludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsUmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqIEBwYXJhbSB7ID9TZXNzaW9uUGFyYW1zIH0gcGFyYW1zXG4gICAqL1xuXG4gIHN0YXJ0U2Vzc2lvbihcbiAgICAgIHNlc3Npb24sXG4gICAgICBwYXJhbXMpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBPbkRldmljZU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtcbiAgICAgICAgICBzZXNzaW9uLFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc2FmZXR5SW5mbzogP1NhZmV0eUluZm8sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgY2xhc3NpZnlUZXh0U2FmZXR5KFxuICAgICAgdGV4dCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAxLFxuICAgICAgICBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgdGV4dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcmVzdWx0OiA/TGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHQsXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZGV0ZWN0TGFuZ3VhZ2UoXG4gICAgICB0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDIsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgdGV4dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFMb2FkQWRhcHRhdGlvblBhcmFtcyB9IHBhcmFtc1xuICAgKiBAcGFyYW0geyAhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciB9IG1vZGVsXG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgcmVzdWx0OiAhTG9hZE1vZGVsUmVzdWx0LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGxvYWRBZGFwdGF0aW9uKFxuICAgICAgcGFyYW1zLFxuICAgICAgbW9kZWwpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgbW9kZWxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhTG9hZFBvc3RQcm9jZXNzb3JQYXJhbXMgfSBwYXJhbXNcbiAgICogQHBhcmFtIHsgIU9uRGV2aWNlTW9kZWxQZW5kaW5nUmVjZWl2ZXIgfSBtb2RlbFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogIUxvYWRNb2RlbFJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBsb2FkUG9zdFByb2Nlc3NvcihcbiAgICAgIHBhcmFtcyxcbiAgICAgIG1vZGVsKSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIG1vZGVsXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgT25EZXZpY2VNb2RlbFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU9uRGV2aWNlTW9kZWxJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IU9uRGV2aWNlTW9kZWxSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgT25EZXZpY2VNb2RlbFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFPbkRldmljZU1vZGVsUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5zdGFydFNlc3Npb24uYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDEsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuY2xhc3NpZnlUZXh0U2FmZXR5LmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAyLFxuICAgICAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgaW1wbC5kZXRlY3RMYW5ndWFnZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMyxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwubG9hZEFkYXB0YXRpb24uYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmxvYWRQb3N0UHJvY2Vzc29yLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWwge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwib25fZGV2aWNlX21vZGVsLm1vam9tLk9uRGV2aWNlTW9kZWxcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshT25EZXZpY2VNb2RlbFJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBPbkRldmljZU1vZGVsUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgT25EZXZpY2VNb2RlbFxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbENhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgT25EZXZpY2VNb2RlbFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFPbkRldmljZU1vZGVsUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuc3RhcnRTZXNzaW9uID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5zdGFydFNlc3Npb24uY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5jbGFzc2lmeVRleHRTYWZldHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMSxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5jbGFzc2lmeVRleHRTYWZldHkuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmRldGVjdExhbmd1YWdlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDIsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICAgICBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmRldGVjdExhbmd1YWdlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5sb2FkQWRhcHRhdGlvbiA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAzLFxuICAgICAgICBPbkRldmljZU1vZGVsX0xvYWRBZGFwdGF0aW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgdGhpcy5sb2FkQWRhcHRhdGlvbi5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMubG9hZFBvc3RQcm9jZXNzb3IgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgNCxcbiAgICAgICAgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMubG9hZFBvc3RQcm9jZXNzb3IuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnb25fZGV2aWNlX21vZGVsLm1vam9tLlRleHRTYWZldHlTZXNzaW9uJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eVNlc3Npb25JbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSB0ZXh0XG4gICAqIEByZXR1cm4geyFQcm9taXNlPHtcbiAgICAgICAgc2FmZXR5SW5mbzogP1NhZmV0eUluZm8sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgY2xhc3NpZnlUZXh0U2FmZXR5KHRleHQpIHt9XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICByZXN1bHQ6ID9MYW5ndWFnZURldGVjdGlvblJlc3VsdCxcbiAgICogIH0+fVxuICAgKi9cblxuICBkZXRlY3RMYW5ndWFnZSh0ZXh0KSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9IHNlc3Npb25cbiAgICovXG5cbiAgY2xvbmUoc2Vzc2lvbikge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IFRleHRTYWZldHlTZXNzaW9uSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uUmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IVRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIXN0cmluZyB9IHRleHRcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzYWZldHlJbmZvOiA/U2FmZXR5SW5mbyxcbiAgICogIH0+fVxuICAgKi9cblxuICBjbGFzc2lmeVRleHRTYWZldHkoXG4gICAgICB0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgW1xuICAgICAgICAgIHRleHRcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhc3RyaW5nIH0gdGV4dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdDogP0xhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0LFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGRldGVjdExhbmd1YWdlKFxuICAgICAgdGV4dCkge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAyLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgdGV4dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9IHNlc3Npb25cbiAgICovXG5cbiAgY2xvbmUoXG4gICAgICBzZXNzaW9uKSB7XG4gICAgdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMyxcbiAgICAgICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgc2Vzc2lvblxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFRleHRTYWZldHlTZXNzaW9uXG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvblJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IVRleHRTYWZldHlTZXNzaW9uSW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuY2xhc3NpZnlUZXh0U2FmZXR5LmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAyLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBpbXBsLmRldGVjdExhbmd1YWdlLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAzLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuY2xvbmUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eVNlc3Npb24ge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwib25fZGV2aWNlX21vZGVsLm1vam9tLlRleHRTYWZldHlTZXNzaW9uXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IVRleHRTYWZldHlTZXNzaW9uUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IFRleHRTYWZldHlTZXNzaW9uUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgVGV4dFNhZmV0eVNlc3Npb25cbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFUZXh0U2FmZXR5U2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNsYXNzaWZ5VGV4dFNhZmV0eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIHRoaXMuY2xhc3NpZnlUZXh0U2FmZXR5LmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5kZXRlY3RMYW5ndWFnZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAyLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmRldGVjdExhbmd1YWdlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcih0cnVlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5jbG9uZSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAzLFxuICAgICAgICBUZXh0U2FmZXR5U2Vzc2lvbl9DbG9uZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuY2xvbmUuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5TW9kZWxQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uVGV4dFNhZmV0eU1vZGVsJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eU1vZGVsSW50ZXJmYWNlIHtcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhVGV4dFNhZmV0eVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIHN0YXJ0U2Vzc2lvbihzZXNzaW9uKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgVGV4dFNhZmV0eU1vZGVsSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbFJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IVRleHRTYWZldHlNb2RlbFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBUZXh0U2FmZXR5TW9kZWxQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IVRleHRTYWZldHlNb2RlbFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9IHNlc3Npb25cbiAgICovXG5cbiAgc3RhcnRTZXNzaW9uKFxuICAgICAgc2Vzc2lvbikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIFRleHRTYWZldHlNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgc2Vzc2lvblxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFRleHRTYWZldHlNb2RlbFxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eU1vZGVsUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshVGV4dFNhZmV0eU1vZGVsSW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFUZXh0U2FmZXR5TW9kZWxSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgVGV4dFNhZmV0eU1vZGVsUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVRleHRTYWZldHlNb2RlbFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBUZXh0U2FmZXR5TW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5zdGFydFNlc3Npb24uYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eU1vZGVsIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5UZXh0U2FmZXR5TW9kZWxcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshVGV4dFNhZmV0eU1vZGVsUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IFRleHRTYWZldHlNb2RlbFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFRleHRTYWZldHlNb2RlbFxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgVGV4dFNhZmV0eU1vZGVsQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBUZXh0U2FmZXR5TW9kZWxSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhVGV4dFNhZmV0eU1vZGVsUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuc3RhcnRTZXNzaW9uID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFRleHRTYWZldHlNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnN0YXJ0U2Vzc2lvbi5jcmVhdGVSZWNlaXZlckhhbmRsZXIoZmFsc2UgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgQW4gSUQgcmV0dXJuZWQgYnkgYSBwcmlvciBjYWxsIHRvIGFkZExpc3RlbmVyLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmZiB0aGUgaWRlbnRpZmllZCBsaXN0ZW5lciB3YXMgZm91bmQgYW5kIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihpZCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlcl8ucmVtb3ZlTGlzdGVuZXIoaWQpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LlBlbmRpbmdSZWNlaXZlcn1cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5EZWNpc2lvblNlc3Npb24nLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblNlc3Npb25JbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSBpbnB1dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdHM6ID9BcnJheTwhRGVjaXNpb25RdWVzdGlvblJlc3VsdD4sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZGVjaWRlKGlucHV0KSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgRGVjaXNpb25TZXNzaW9uSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvblJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IURlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IURlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFzdHJpbmcgfSBpbnB1dFxuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHJlc3VsdHM6ID9BcnJheTwhRGVjaXNpb25RdWVzdGlvblJlc3VsdD4sXG4gICAqICB9Pn1cbiAgICovXG5cbiAgZGVjaWRlKFxuICAgICAgaW5wdXQpIHtcbiAgICByZXR1cm4gdGhpcy5wcm94eS5zZW5kTWVzc2FnZShcbiAgICAgICAgMCxcbiAgICAgICAgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIFtcbiAgICAgICAgICBpbnB1dFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIERlY2lzaW9uU2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25TZXNzaW9uUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshRGVjaXNpb25TZXNzaW9uSW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFEZWNpc2lvblNlc3Npb25SZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgRGVjaXNpb25TZXNzaW9uUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IURlY2lzaW9uU2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgRGVjaXNpb25TZXNzaW9uX0RlY2lkZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAgICAgaW1wbC5kZWNpZGUuYmluZChpbXBsKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLmhlbHBlcl9pbnRlcm5hbF8uZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVjaXNpb25TZXNzaW9uIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5EZWNpc2lvblNlc3Npb25cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshRGVjaXNpb25TZXNzaW9uUmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IERlY2lzaW9uU2Vzc2lvblJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIERlY2lzaW9uU2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25TZXNzaW9uQ2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBEZWNpc2lvblNlc3Npb25SZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhRGVjaXNpb25TZXNzaW9uUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuZGVjaWRlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUGFyYW1zU3BlYy4kLFxuICAgICAgICBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmRlY2lkZS5jcmVhdGVSZWNlaXZlckhhbmRsZXIodHJ1ZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25Nb2RlbFBlbmRpbmdSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFNb2pvSGFuZGxlfCFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9IGhhbmRsZVxuICAgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlKSB7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnR9ICovXG4gICAgdGhpcy5oYW5kbGUgPSBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuZ2V0RW5kcG9pbnRGb3JSZWNlaXZlcihoYW5kbGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nPX0gc2NvcGUgKi9cbiAgYmluZEluQnJvd3NlcihzY29wZSA9ICdjb250ZXh0Jykge1xuICAgIG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5iaW5kKFxuICAgICAgICB0aGlzLmhhbmRsZSwgJ29uX2RldmljZV9tb2RlbC5tb2pvbS5EZWNpc2lvbk1vZGVsJywgc2NvcGUpO1xuICB9XG59XG5cbi8qKiBAaW50ZXJmYWNlICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25Nb2RlbEludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIURlY2lzaW9uUXVlcnkgfSBxdWVyeVxuICAgKiBAcGFyYW0geyAhRGVjaXNpb25TZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gc2Vzc2lvblxuICAgKi9cblxuICBzdGFydFNlc3Npb24ocXVlcnksIHNlc3Npb24pIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBEZWNpc2lvbk1vZGVsSW50ZXJmYWNlIH1cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uTW9kZWxSZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFEZWNpc2lvbk1vZGVsUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIERlY2lzaW9uTW9kZWxQZW5kaW5nUmVjZWl2ZXIsXG4gICAgICAgICAgaGFuZGxlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXI8IURlY2lzaW9uTW9kZWxQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhRGVjaXNpb25RdWVyeSB9IHF1ZXJ5XG4gICAqIEBwYXJhbSB7ICFEZWNpc2lvblNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSBzZXNzaW9uXG4gICAqL1xuXG4gIHN0YXJ0U2Vzc2lvbihcbiAgICAgIHF1ZXJ5LFxuICAgICAgc2Vzc2lvbikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHNlc3Npb25cbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBEZWNpc2lvbk1vZGVsXG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvbk1vZGVsUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshRGVjaXNpb25Nb2RlbEludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhRGVjaXNpb25Nb2RlbFJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBEZWNpc2lvbk1vZGVsUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IURlY2lzaW9uTW9kZWxSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLnN0YXJ0U2Vzc2lvbi5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWNpc2lvbk1vZGVsIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5EZWNpc2lvbk1vZGVsXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlbW90ZSBmb3IgdGhpcyBpbnRlcmZhY2Ugd2hpY2ggc2VuZHMgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIuXG4gICAqIFRoZSBicm93c2VyIG11c3QgaGF2ZSBhbiBpbnRlcmZhY2UgcmVxdWVzdCBiaW5kZXIgcmVnaXN0ZXJlZCBmb3IgdGhpc1xuICAgKiBpbnRlcmZhY2UgYW5kIGFjY2Vzc2libGUgdG8gdGhlIGNhbGxpbmcgZG9jdW1lbnQncyBmcmFtZS5cbiAgICpcbiAgICogQHJldHVybiB7IURlY2lzaW9uTW9kZWxSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgRGVjaXNpb25Nb2RlbFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIERlY2lzaW9uTW9kZWxcbiAqIG1vam9tIGludGVyZmFjZSBhbmQgZGlzcGF0Y2hlcyB0aGVtIGFzIGNhbGxiYWNrcy4gT25lIGNhbGxiYWNrIHJlY2VpdmVyIGV4aXN0c1xuICogb24gdGhpcyBvYmplY3QgZm9yIGVhY2ggbWVzc2FnZSBkZWZpbmVkIGluIHRoZSBtb2pvbSBpbnRlcmZhY2UsIGFuZCBlYWNoXG4gKiByZWNlaXZlciBjYW4gaGF2ZSBhbnkgbnVtYmVyIG9mIGxpc3RlbmVycyBhZGRlZCB0byBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uTW9kZWxDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIERlY2lzaW9uTW9kZWxSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhRGVjaXNpb25Nb2RlbFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG4gICAgdGhpcy5yb3V0ZXJfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5DYWxsYmFja1JvdXRlcjtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXJ0U2Vzc2lvbiA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBEZWNpc2lvbk1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuc3RhcnRTZXNzaW9uLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyUGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnb25fZGV2aWNlX21vZGVsLm1vam9tLkFzclN0cmVhbVJlc3BvbmRlcicsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIEFzclN0cmVhbVJlc3BvbmRlckludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFycmF5PCFTcGVlY2hSZWNvZ25pdGlvblJlc3VsdD4gfSByZXN1bHRcbiAgICovXG5cbiAgb25SZXNwb25zZShyZXN1bHQpIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBBc3JTdHJlYW1SZXNwb25kZXJJbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhQXNyU3RyZWFtUmVzcG9uZGVyUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIEFzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhQXNyU3RyZWFtUmVzcG9uZGVyUGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUFycmF5PCFTcGVlY2hSZWNvZ25pdGlvblJlc3VsdD4gfSByZXN1bHRcbiAgICovXG5cbiAgb25SZXNwb25zZShcbiAgICAgIHJlc3VsdCkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIEFzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIHJlc3VsdFxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclN0cmVhbVJlc3BvbmRlclxuICogbW9qb20gaW50ZXJmYWNlLiBNdXN0IGJlIGNvbnN0cnVjdGVkIG92ZXIgYW4gb2JqZWN0IHdoaWNoIGltcGxlbWVudHMgdGhhdFxuICogaW50ZXJmYWNlLlxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshQXNyU3RyZWFtUmVzcG9uZGVySW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGU+fSAqL1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgICAgQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IUFzclN0cmVhbVJlc3BvbmRlclJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1SZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwub25SZXNwb25zZS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1SZXNwb25kZXIge1xuICAvKipcbiAgICogQHJldHVybiB7IXN0cmluZ31cbiAgICovXG4gIHN0YXRpYyBnZXQgJGludGVyZmFjZU5hbWUoKSB7XG4gICAgcmV0dXJuIFwib25fZGV2aWNlX21vZGVsLm1vam9tLkFzclN0cmVhbVJlc3BvbmRlclwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGV9XG4gICAqL1xuICBzdGF0aWMgZ2V0UmVtb3RlKCkge1xuICAgIGxldCByZW1vdGUgPSBuZXcgQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgQXNyU3RyZWFtUmVzcG9uZGVyXG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1SZXNwb25kZXJDYWxsYmFja1JvdXRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbChcbiAgICAgIEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5vblJlc3BvbnNlID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIEFzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5vblJlc3BvbnNlLmNyZWF0ZVJlY2VpdmVySGFuZGxlcihmYWxzZSAvKiBleHBlY3RzUmVzcG9uc2UgKi8pLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCBBbiBJRCByZXR1cm5lZCBieSBhIHByaW9yIGNhbGwgdG8gYWRkTGlzdGVuZXIuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWZmIHRoZSBpZGVudGlmaWVkIGxpc3RlbmVyIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZUxpc3RlbmVyKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyXy5yZW1vdmVMaXN0ZW5lcihpZCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHttb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuUGVuZGluZ1JlY2VpdmVyfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdvbl9kZXZpY2VfbW9kZWwubW9qb20uQXNyU3RyZWFtSW5wdXQnLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1JbnB1dEludGVyZmFjZSB7XG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIUF1ZGlvRGF0YSB9IGRhdGFcbiAgICovXG5cbiAgYWRkQXVkaW9DaHVuayhkYXRhKSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgQXNyU3RyZWFtSW5wdXRJbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRSZW1vdGUge1xuICAvKiogQHBhcmFtIHtNb2pvSGFuZGxlfG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludD19IGhhbmRsZSAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUgPSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlPCFBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZVdyYXBwZXIodGhpcy5wcm94eSk7XG5cbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5wcm94eS5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhQXVkaW9EYXRhIH0gZGF0YVxuICAgKi9cblxuICBhZGRBdWRpb0NodW5rKFxuICAgICAgZGF0YSkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIEFzclN0cmVhbUlucHV0X0FkZEF1ZGlvQ2h1bmtfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgZGF0YVxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclN0cmVhbUlucHV0XG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1JbnB1dFJlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IUFzclN0cmVhbUlucHV0SW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFBc3JTdHJlYW1JbnB1dFJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBBc3JTdHJlYW1JbnB1dFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFBc3JTdHJlYW1JbnB1dFJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1JbnB1dF9BZGRBdWRpb0NodW5rX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5hZGRBdWRpb0NodW5rLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFzclN0cmVhbUlucHV0IHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcIm9uX2RldmljZV9tb2RlbC5tb2pvbS5Bc3JTdHJlYW1JbnB1dFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZW1vdGUgZm9yIHRoaXMgaW50ZXJmYWNlIHdoaWNoIHNlbmRzIG1lc3NhZ2VzIHRvIHRoZSBicm93c2VyLlxuICAgKiBUaGUgYnJvd3NlciBtdXN0IGhhdmUgYW4gaW50ZXJmYWNlIHJlcXVlc3QgYmluZGVyIHJlZ2lzdGVyZWQgZm9yIHRoaXNcbiAgICogaW50ZXJmYWNlIGFuZCBhY2Nlc3NpYmxlIHRvIHRoZSBjYWxsaW5nIGRvY3VtZW50J3MgZnJhbWUuXG4gICAqXG4gICAqIEByZXR1cm4geyFBc3JTdHJlYW1JbnB1dFJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBBc3JTdHJlYW1JbnB1dFJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclN0cmVhbUlucHV0XG4gKiBtb2pvbSBpbnRlcmZhY2UgYW5kIGRpc3BhdGNoZXMgdGhlbSBhcyBjYWxsYmFja3MuIE9uZSBjYWxsYmFjayByZWNlaXZlciBleGlzdHNcbiAqIG9uIHRoaXMgb2JqZWN0IGZvciBlYWNoIG1lc3NhZ2UgZGVmaW5lZCBpbiB0aGUgbW9qb20gaW50ZXJmYWNlLCBhbmQgZWFjaFxuICogcmVjZWl2ZXIgY2FuIGhhdmUgYW55IG51bWJlciBvZiBsaXN0ZW5lcnMgYWRkZWQgdG8gaXQuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1JbnB1dENhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgQXNyU3RyZWFtSW5wdXRSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQXNyU3RyZWFtSW5wdXRSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuICAgIHRoaXMucm91dGVyXyA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ2FsbGJhY2tSb3V0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hZGRBdWRpb0NodW5rID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIEFzclN0cmVhbUlucHV0X0FkZEF1ZGlvQ2h1bmtfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLmFkZEF1ZGlvQ2h1bmsuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBZGFwdGF0aW9uQXNzZXRzU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBMYW5ndWFnZURldGVjdGlvblJlc3VsdFNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2FmZXR5SW5mb1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgUmVzcG9uc2VDaHVua1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgUmVzcG9uc2VTdW1tYXJ5U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBMb2FkQWRhcHRhdGlvblBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgTG9hZFBvc3RQcm9jZXNzb3JQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IENhcGFiaWxpdGllc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvblBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgSW5wdXRTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGVuZE9wdGlvbnNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEhpbnRPcHRpb25zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBHZW5lcmF0ZU9wdGlvbnNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IERlY2lzaW9uT3B0aW9uU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblF1ZXN0aW9uU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblF1ZXJ5U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblF1ZXN0aW9uUmVzdWx0U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUb29sRGVjbGFyYXRpb25TcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRvb2xDYWxsU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUb29sUmVzcG9uc2VTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEF1ZGlvRGF0YVNwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25SZXN1bHRTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEFzclN0cmVhbU9wdGlvbnNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IERldmljZVBlcmZvcm1hbmNlSW5mb1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgRGV2aWNlSW5mb1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTdHJlYW1pbmdSZXNwb25kZXJfT25Db21wbGV0ZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFN0cmVhbWluZ1Jlc3BvbmRlcl9PblRvb2xDYWxsc19QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRleHRDbGllbnRfT25Db21wbGV0ZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fQXBwZW5kX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9HZW5lcmF0ZV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9HZXRTaXplSW5Ub2tlbnNfUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fU2NvcmVfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX1Njb3JlX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9TZXRQcmlvcml0eV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNlc3Npb25fQXNyU3RyZWFtX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU2Vzc2lvbl9IaW50X1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPbkRldmljZU1vZGVsX0xvYWRQb3N0UHJvY2Vzc29yX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U2FmZXR5U2Vzc2lvbl9DbGFzc2lmeVRleHRTYWZldHlfUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRTYWZldHlTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgVGV4dFNhZmV0eU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBEZWNpc2lvbk1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IEFzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgQXNyU3RyZWFtSW5wdXRfQWRkQXVkaW9DaHVua19QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSB9XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dFBpZWNlU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gfVxuICovXG5leHBvcnQgY29uc3QgUmVzcG9uc2VDb25zdHJhaW50U3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBZGFwdGF0aW9uQXNzZXRzU3BlYy4kLFxuICAgICdBZGFwdGF0aW9uQXNzZXRzJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnd2VpZ2h0cycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0ZpbGVTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3dlaWdodHNQYXRoJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qb0Jhc2VfbW9qb21fRmlsZVBhdGhTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEFkYXB0YXRpb25Bc3NldHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAobW9qb0Jhc2VfbW9qb21fRmlsZXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLndlaWdodHM7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX0ZpbGVQYXRofHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMud2VpZ2h0c1BhdGg7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIExhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0U3BlYy4kLFxuICAgICdMYW5ndWFnZURldGVjdGlvblJlc3VsdCcsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NvZGUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3JlbGlhYmlsaXR5JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5GbG9hdCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIExhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5jb2RlO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMucmVsaWFiaWxpdHk7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNhZmV0eUluZm9TcGVjLiQsXG4gICAgJ1NhZmV0eUluZm8nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjbGFzc1Njb3JlcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbGFuZ3VhZ2UnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBMYW5ndWFnZURldGVjdGlvblJlc3VsdFNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2FmZXR5SW5mbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhbnVtYmVyPiB9ICovXG4gICAgdGhpcy5jbGFzc1Njb3JlcztcbiAgICAvKiogQHR5cGUgeyAoTGFuZ3VhZ2VEZXRlY3Rpb25SZXN1bHR8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5sYW5ndWFnZTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgUmVzcG9uc2VDaHVua1NwZWMuJCxcbiAgICAnUmVzcG9uc2VDaHVuaycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RleHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhZmV0eUluZm8nLCA4LFxuICAgICAgICAwLFxuICAgICAgICBTYWZldHlJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0aG91Z2h0JywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICA5LFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLFs5LCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlQ2h1bmsge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gICAgLyoqIEB0eXBlIHsgKFNhZmV0eUluZm98dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5zYWZldHlJbmZvO1xuICAgIC8qKiBAdHlwZSB7IChzdHJpbmd8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy50aG91Z2h0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBSZXNwb25zZVN1bW1hcnlTcGVjLiQsXG4gICAgJ1Jlc3BvbnNlU3VtbWFyeScsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhZmV0eUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBTYWZldHlJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdvdXRwdXRUb2tlbkNvdW50JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZVN1bW1hcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoU2FmZXR5SW5mb3x1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnNhZmV0eUluZm87XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5vdXRwdXRUb2tlbkNvdW50O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBMb2FkQWRhcHRhdGlvblBhcmFtc1NwZWMuJCxcbiAgICAnTG9hZEFkYXB0YXRpb25QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhc3NldHMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBBZGFwdGF0aW9uQXNzZXRzU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgTG9hZEFkYXB0YXRpb25QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQWRhcHRhdGlvbkFzc2V0cyB9ICovXG4gICAgdGhpcy5hc3NldHM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIExvYWRQb3N0UHJvY2Vzc29yUGFyYW1zU3BlYy4kLFxuICAgICdMb2FkUG9zdFByb2Nlc3NvclBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3dlaWdodHMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9GaWxlU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjYWNoZScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0ZpbGVTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21heFRva2VucycsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRQb3N0UHJvY2Vzc29yUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX0ZpbGV8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy53ZWlnaHRzO1xuICAgIC8qKiBAdHlwZSB7IChtb2pvQmFzZV9tb2pvbV9GaWxlfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuY2FjaGU7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5tYXhUb2tlbnM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIENhcGFiaWxpdGllc1NwZWMuJCxcbiAgICAnQ2FwYWJpbGl0aWVzJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaW1hZ2VJbnB1dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhdWRpb0lucHV0JywgMCxcbiAgICAgICAgMSxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIENhcGFiaWxpdGllcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmltYWdlSW5wdXQ7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuYXVkaW9JbnB1dDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvblBhcmFtc1NwZWMuJCxcbiAgICAnU2Vzc2lvblBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ21heFRva2VucycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2FwYWJpbGl0aWVzJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgQ2FwYWJpbGl0aWVzU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndG9wSycsIDQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMSxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGVtcGVyYXR1cmUnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5GbG9hdCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDEsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sWzEsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMubWF4VG9rZW5zO1xuICAgIC8qKiBAdHlwZSB7ICFDYXBhYmlsaXRpZXMgfSAqL1xuICAgIHRoaXMuY2FwYWJpbGl0aWVzO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMudG9wSztcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnRlbXBlcmF0dXJlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBJbnB1dFNwZWMuJCxcbiAgICAnSW5wdXQnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdwaWVjZXMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KElucHV0UGllY2VTcGVjLiQsIGZhbHNlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFycmF5PCFJbnB1dFBpZWNlPiB9ICovXG4gICAgdGhpcy5waWVjZXM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEFwcGVuZE9wdGlvbnNTcGVjLiQsXG4gICAgJ0FwcGVuZE9wdGlvbnMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnB1dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIElucHV0U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbWF4VG9rZW5zJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnB1dFNvdXJjZScsIDEyLFxuICAgICAgICAwLFxuICAgICAgICBJbnB1dFNvdXJjZVNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDEsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sWzEsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXBwZW5kT3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFJbnB1dCB9ICovXG4gICAgdGhpcy5pbnB1dDtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLm1heFRva2VucztcbiAgICAvKiogQHR5cGUgeyAhSW5wdXRTb3VyY2UgfSAqL1xuICAgIHRoaXMuaW5wdXRTb3VyY2U7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEhpbnRPcHRpb25zU3BlYy4kLFxuICAgICdIaW50T3B0aW9ucycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2NvbnN0cmFpbmVkRGVjb2RpbmdIaW50JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEhpbnRPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuY29uc3RyYWluZWREZWNvZGluZ0hpbnQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEdlbmVyYXRlT3B0aW9uc1NwZWMuJCxcbiAgICAnR2VuZXJhdGVPcHRpb25zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbWF4T3V0cHV0VG9rZW5zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjb25zdHJhaW50JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgUmVzcG9uc2VDb25zdHJhaW50U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAyLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhZGRPdXRwdXRUb2tlbnNUb0NvbnRleHQnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMyxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZW5hYmxlVGhpbmtpbmcnLCA0LFxuICAgICAgICAxLFxuICAgICAgICBtb2pvLmludGVybmFsLkJvb2wsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgOSxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGhpbmtpbmdUb2tlbkJ1ZGdldCcsIDI0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDksXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sWzIsIDMyXSxbMywgMzJdLFs5LCA0MF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIEdlbmVyYXRlT3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMubWF4T3V0cHV0VG9rZW5zO1xuICAgIC8qKiBAdHlwZSB7IChSZXNwb25zZUNvbnN0cmFpbnR8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5jb25zdHJhaW50O1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLmFkZE91dHB1dFRva2Vuc1RvQ29udGV4dDtcbiAgICAvKiogQHR5cGUgeyAhYm9vbGVhbiB9ICovXG4gICAgdGhpcy5lbmFibGVUaGlua2luZztcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnRoaW5raW5nVG9rZW5CdWRnZXQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERlY2lzaW9uT3B0aW9uU3BlYy4kLFxuICAgICdEZWNpc2lvbk9wdGlvbicsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2xhYmVsJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkZXNjcmlwdGlvbicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25PcHRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLmxhYmVsO1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuZGVzY3JpcHRpb247XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERlY2lzaW9uUXVlc3Rpb25TcGVjLiQsXG4gICAgJ0RlY2lzaW9uUXVlc3Rpb24nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpZCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncHJvbXB0JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0eXBlJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uUXVlc3Rpb25UeXBlU3BlYy4kLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnb3B0aW9ucycsIDI0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkFycmF5KERlY2lzaW9uT3B0aW9uU3BlYy4kLCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgNDBdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5pZDtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnByb21wdDtcbiAgICAvKiogQHR5cGUgeyAhRGVjaXNpb25RdWVzdGlvblR5cGUgfSAqL1xuICAgIHRoaXMudHlwZTtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IURlY2lzaW9uT3B0aW9uPiB9ICovXG4gICAgdGhpcy5vcHRpb25zO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvblF1ZXJ5U3BlYy4kLFxuICAgICdEZWNpc2lvblF1ZXJ5JyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2hhcmVkQ29udGV4dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncXVlc3Rpb25zJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShEZWNpc2lvblF1ZXN0aW9uU3BlYy4kLCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5zaGFyZWRDb250ZXh0O1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhRGVjaXNpb25RdWVzdGlvbj4gfSAqL1xuICAgIHRoaXMucXVlc3Rpb25zO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZWNpc2lvblF1ZXN0aW9uUmVzdWx0U3BlYy4kLFxuICAgICdEZWNpc2lvblF1ZXN0aW9uUmVzdWx0JyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncHJvYmFiaWxpdGllcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgRGVjaXNpb25RdWVzdGlvblJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhbnVtYmVyPiB9ICovXG4gICAgdGhpcy5wcm9iYWJpbGl0aWVzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUb29sRGVjbGFyYXRpb25TcGVjLiQsXG4gICAgJ1Rvb2xEZWNsYXJhdGlvbicsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ25hbWUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdpbnB1dFNjaGVtYScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9EaWN0aW9uYXJ5VmFsdWVTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLm5hbWU7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fRGljdGlvbmFyeVZhbHVlIH0gKi9cbiAgICB0aGlzLmlucHV0U2NoZW1hO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUb29sQ2FsbFNwZWMuJCxcbiAgICAnVG9vbENhbGwnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjYWxsSWQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ25hbWUnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2FyZ3VtZW50cycsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9EaWN0aW9uYXJ5VmFsdWVTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sQ2FsbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuY2FsbElkO1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMubmFtZTtcbiAgICAvKiogQHR5cGUgeyAhbW9qb0Jhc2VfbW9qb21fRGljdGlvbmFyeVZhbHVlIH0gKi9cbiAgICB0aGlzLmFyZ3VtZW50cztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVG9vbFJlc3BvbnNlU3BlYy4kLFxuICAgICdUb29sUmVzcG9uc2UnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjYWxsSWQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ25hbWUnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3VsdCcsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9WYWx1ZVNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZXJyb3JNZXNzYWdlJywgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgNDhdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLmNhbGxJZDtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLm5hbWU7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX1ZhbHVlfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMucmVzdWx0O1xuICAgIC8qKiBAdHlwZSB7IChzdHJpbmd8dW5kZWZpbmVkKSB9ICovXG4gICAgdGhpcy5lcnJvck1lc3NhZ2U7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEF1ZGlvRGF0YVNwZWMuJCxcbiAgICAnQXVkaW9EYXRhJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2hhbm5lbENvdW50JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhbXBsZVJhdGUnLCA0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnZnJhbWVDb3VudCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkYXRhJywgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDMyXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXVkaW9EYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5jaGFubmVsQ291bnQ7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5zYW1wbGVSYXRlO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuZnJhbWVDb3VudDtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IW51bWJlcj4gfSAqL1xuICAgIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3BlZWNoUmVjb2duaXRpb25SZXN1bHRTcGVjLiQsXG4gICAgJ1NwZWVjaFJlY29nbml0aW9uUmVzdWx0JyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndHJhbnNjcmlwdCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnaXNGaW5hbCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdhdWRpb1N0YXJ0VGltZScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9UaW1lRGVsdGFTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDgsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2F1ZGlvRW5kVGltZScsIDI0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9UaW1lRGVsdGFTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDgsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sWzgsIDQwXSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25SZXN1bHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRyYW5zY3JpcHQ7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuaXNGaW5hbDtcbiAgICAvKiogQHR5cGUgeyAobW9qb0Jhc2VfbW9qb21fVGltZURlbHRhfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuYXVkaW9TdGFydFRpbWU7XG4gICAgLyoqIEB0eXBlIHsgKG1vam9CYXNlX21vam9tX1RpbWVEZWx0YXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmF1ZGlvRW5kVGltZTtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQXNyU3RyZWFtT3B0aW9uc1NwZWMuJCxcbiAgICAnQXNyU3RyZWFtT3B0aW9ucycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhbXBsZVJhdGVIeicsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnbGFuZ3VhZ2UnLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgNyxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxbNywgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTdHJlYW1PcHRpb25zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5zYW1wbGVSYXRlSHo7XG4gICAgLyoqIEB0eXBlIHsgKHN0cmluZ3x1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmxhbmd1YWdlO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBEZXZpY2VQZXJmb3JtYW5jZUluZm9TcGVjLiQsXG4gICAgJ0RldmljZVBlcmZvcm1hbmNlSW5mbycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BlcmZvcm1hbmNlQ2xhc3MnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBQZXJmb3JtYW5jZUNsYXNzU3BlYy4kLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndnJhbU1iJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5VaW50NjQsXG4gICAgICAgIEJpZ0ludCgwKSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERldmljZVBlcmZvcm1hbmNlSW5mbyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFQZXJmb3JtYW5jZUNsYXNzIH0gKi9cbiAgICB0aGlzLnBlcmZvcm1hbmNlQ2xhc3M7XG4gICAgLyoqIEB0eXBlIHsgIWJpZ2ludCB9ICovXG4gICAgdGhpcy52cmFtTWI7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERldmljZUluZm9TcGVjLiQsXG4gICAgJ0RldmljZUluZm8nLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd2ZW5kb3JJZCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkZXZpY2VJZCcsIDQsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50MzIsXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkcml2ZXJWZXJzaW9uJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzdXBwb3J0c0ZwMTYnLCAxNixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERldmljZUluZm8ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnZlbmRvcklkO1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMuZGV2aWNlSWQ7XG4gICAgLyoqIEB0eXBlIHsgIXN0cmluZyB9ICovXG4gICAgdGhpcy5kcml2ZXJWZXJzaW9uO1xuICAgIC8qKiBAdHlwZSB7ICFib29sZWFuIH0gKi9cbiAgICB0aGlzLnN1cHBvcnRzRnAxNjtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zU3BlYy4kLFxuICAgICdTdHJlYW1pbmdSZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdjaHVuaycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIFJlc3BvbnNlQ2h1bmtTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1pbmdSZXNwb25kZXJfT25SZXNwb25zZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhUmVzcG9uc2VDaHVuayB9ICovXG4gICAgdGhpcy5jaHVuaztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3RyZWFtaW5nUmVzcG9uZGVyX09uQ29tcGxldGVfUGFyYW1zU3BlYy4kLFxuICAgICdTdHJlYW1pbmdSZXNwb25kZXJfT25Db21wbGV0ZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzdW1tYXJ5JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgUmVzcG9uc2VTdW1tYXJ5U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nUmVzcG9uZGVyX09uQ29tcGxldGVfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVJlc3BvbnNlU3VtbWFyeSB9ICovXG4gICAgdGhpcy5zdW1tYXJ5O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTdHJlYW1pbmdSZXNwb25kZXJfT25Ub29sQ2FsbHNfUGFyYW1zU3BlYy4kLFxuICAgICdTdHJlYW1pbmdSZXNwb25kZXJfT25Ub29sQ2FsbHNfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndG9vbENhbGxzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShUb29sQ2FsbFNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nUmVzcG9uZGVyX09uVG9vbENhbGxzX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFBcnJheTwhVG9vbENhbGw+IH0gKi9cbiAgICB0aGlzLnRvb2xDYWxscztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgQ29udGV4dENsaWVudF9PbkNvbXBsZXRlX1BhcmFtc1NwZWMuJCxcbiAgICAnQ29udGV4dENsaWVudF9PbkNvbXBsZXRlX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Rva2Vuc1Byb2Nlc3NlZCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuVWludDMyLFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQ29udGV4dENsaWVudF9PbkNvbXBsZXRlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFudW1iZXIgfSAqL1xuICAgIHRoaXMudG9rZW5zUHJvY2Vzc2VkO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0FwcGVuZF9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fQXBwZW5kX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBBcHBlbmRPcHRpb25zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnY2xpZW50JywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eShDb250ZXh0Q2xpZW50UmVtb3RlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9BcHBlbmRfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFwcGVuZE9wdGlvbnMgfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgICAvKiogQHR5cGUgeyAoQ29udGV4dENsaWVudFJlbW90ZXx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLmNsaWVudDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9HZW5lcmF0ZV9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fR2VuZXJhdGVfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnb3B0aW9ucycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIEdlbmVyYXRlT3B0aW9uc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3BvbmRlcicsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUHJveHkoU3RyZWFtaW5nUmVzcG9uZGVyUmVtb3RlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fR2VuZXJhdGVfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUdlbmVyYXRlT3B0aW9ucyB9ICovXG4gICAgdGhpcy5vcHRpb25zO1xuICAgIC8qKiBAdHlwZSB7ICFTdHJlYW1pbmdSZXNwb25kZXJSZW1vdGUgfSAqL1xuICAgIHRoaXMucmVzcG9uZGVyO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2lucHV0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgSW5wdXRTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0dldFNpemVJblRva2Vuc19QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhSW5wdXQgfSAqL1xuICAgIHRoaXMuaW5wdXQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdTZXNzaW9uX0dldFNpemVJblRva2Vuc19SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NpemUnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlVpbnQzMixcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fR2V0U2l6ZUluVG9rZW5zX1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW51bWJlciB9ICovXG4gICAgdGhpcy5zaXplO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX1Njb3JlX1BhcmFtc1NwZWMuJCxcbiAgICAnU2Vzc2lvbl9TY29yZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX1Njb3JlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMudGV4dDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9TY29yZV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnU2Vzc2lvbl9TY29yZV9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Byb2JhYmlsaXR5JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5GbG9hdCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fU2NvcmVfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhbnVtYmVyIH0gKi9cbiAgICB0aGlzLnByb2JhYmlsaXR5O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0Nsb25lX1BhcmFtc1NwZWMuJCxcbiAgICAnU2Vzc2lvbl9DbG9uZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzZXNzaW9uJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KFNlc3Npb25QZW5kaW5nUmVjZWl2ZXIpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9DbG9uZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhU2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zZXNzaW9uO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0dldFByb2JhYmlsaXRpZXNCbG9ja2luZ19QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RleHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMudGV4dDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fR2V0UHJvYmFiaWxpdGllc0Jsb2NraW5nX1Jlc3BvbnNlUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncHJvYmFiaWxpdGllcycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuQXJyYXkobW9qby5pbnRlcm5hbC5GbG9hdCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbl9HZXRQcm9iYWJpbGl0aWVzQmxvY2tpbmdfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXJyYXk8IW51bWJlcj4gfSAqL1xuICAgIHRoaXMucHJvYmFiaWxpdGllcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU2Vzc2lvbl9TZXRQcmlvcml0eV9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncHJpb3JpdHknLCAwLFxuICAgICAgICAwLFxuICAgICAgICBQcmlvcml0eVNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25fU2V0UHJpb3JpdHlfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVByaW9yaXR5IH0gKi9cbiAgICB0aGlzLnByaW9yaXR5O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fQXNyU3RyZWFtX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBBc3JTdHJlYW1PcHRpb25zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc3RyZWFtJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KEFzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3BvbmRlcicsIDEyLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVByb3h5KEFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0FzclN0cmVhbV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXNyU3RyZWFtT3B0aW9ucyB9ICovXG4gICAgdGhpcy5vcHRpb25zO1xuICAgIC8qKiBAdHlwZSB7ICFBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zdHJlYW07XG4gICAgLyoqIEB0eXBlIHsgIUFzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9ICovXG4gICAgdGhpcy5yZXNwb25kZXI7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFNlc3Npb25fSGludF9QYXJhbXNTcGVjLiQsXG4gICAgJ1Nlc3Npb25fSGludF9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdvcHRpb25zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgSGludE9wdGlvbnNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uX0hpbnRfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUhpbnRPcHRpb25zIH0gKi9cbiAgICB0aGlzLm9wdGlvbnM7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAnT25EZXZpY2VNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2Vzc2lvbicsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChTZXNzaW9uUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3BhcmFtcycsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIFNlc3Npb25QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDEsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sWzEsIDI0XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVNlc3Npb25QZW5kaW5nUmVjZWl2ZXIgfSAqL1xuICAgIHRoaXMuc2Vzc2lvbjtcbiAgICAvKiogQHR5cGUgeyAoU2Vzc2lvblBhcmFtc3x1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnBhcmFtcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9DbGFzc2lmeVRleHRTYWZldHlfUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3NhZmV0eUluZm8nLCAwLFxuICAgICAgICAwLFxuICAgICAgICBTYWZldHlJbmZvU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPbkRldmljZU1vZGVsX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IChTYWZldHlJbmZvfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuc2FmZXR5SW5mbztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9QYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAndGV4dCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuU3RyaW5nLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIE9uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfRGV0ZWN0TGFuZ3VhZ2VfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBMYW5ndWFnZURldGVjdGlvblJlc3VsdFNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdHJ1ZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgT25EZXZpY2VNb2RlbF9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IChMYW5ndWFnZURldGVjdGlvblJlc3VsdHx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9QYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGFyYW1zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgTG9hZEFkYXB0YXRpb25QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtb2RlbCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUxvYWRBZGFwdGF0aW9uUGFyYW1zIH0gKi9cbiAgICB0aGlzLnBhcmFtcztcbiAgICAvKiogQHR5cGUgeyAhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5tb2RlbDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnT25EZXZpY2VNb2RlbF9Mb2FkQWRhcHRhdGlvbl9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3VsdCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIExvYWRNb2RlbFJlc3VsdFNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfTG9hZEFkYXB0YXRpb25fUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhTG9hZE1vZGVsUmVzdWx0IH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9QYXJhbXNTcGVjLiQsXG4gICAgJ09uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncGFyYW1zJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgTG9hZFBvc3RQcm9jZXNzb3JQYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtb2RlbCcsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChPbkRldmljZU1vZGVsUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAyNF0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUxvYWRQb3N0UHJvY2Vzc29yUGFyYW1zIH0gKi9cbiAgICB0aGlzLnBhcmFtcztcbiAgICAvKiogQHR5cGUgeyAhT25EZXZpY2VNb2RlbFBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5tb2RlbDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnT25EZXZpY2VNb2RlbF9Mb2FkUG9zdFByb2Nlc3Nvcl9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3VsdCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIExvYWRNb2RlbFJlc3VsdFNwZWMuJCxcbiAgICAgICAgMCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIE9uRGV2aWNlTW9kZWxfTG9hZFBvc3RQcm9jZXNzb3JfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhTG9hZE1vZGVsUmVzdWx0IH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3RleHQnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eVNlc3Npb25fQ2xhc3NpZnlUZXh0U2FmZXR5X1Jlc3BvbnNlUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnc2FmZXR5SW5mbycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIFNhZmV0eUluZm9TcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uX0NsYXNzaWZ5VGV4dFNhZmV0eV9SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IChTYWZldHlJbmZvfHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMuc2FmZXR5SW5mbztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGV4dFNhZmV0eVNlc3Npb25fRGV0ZWN0TGFuZ3VhZ2VfUGFyYW1zU3BlYy4kLFxuICAgICdUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICd0ZXh0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhc3RyaW5nIH0gKi9cbiAgICB0aGlzLnRleHQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIFRleHRTYWZldHlTZXNzaW9uX0RldGVjdExhbmd1YWdlX1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICdUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3VsdCcsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIExhbmd1YWdlRGV0ZWN0aW9uUmVzdWx0U3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICB0cnVlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0U2FmZXR5U2Vzc2lvbl9EZXRlY3RMYW5ndWFnZV9SZXNwb25zZVBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7IChMYW5ndWFnZURldGVjdGlvblJlc3VsdHx1bmRlZmluZWQpIH0gKi9cbiAgICB0aGlzLnJlc3VsdDtcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgVGV4dFNhZmV0eVNlc3Npb25fQ2xvbmVfUGFyYW1zU3BlYy4kLFxuICAgICdUZXh0U2FmZXR5U2Vzc2lvbl9DbG9uZV9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzZXNzaW9uJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KFRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlTZXNzaW9uX0Nsb25lX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFUZXh0U2FmZXR5U2Vzc2lvblBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zZXNzaW9uO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBUZXh0U2FmZXR5TW9kZWxfU3RhcnRTZXNzaW9uX1BhcmFtc1NwZWMuJCxcbiAgICAnVGV4dFNhZmV0eU1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzZXNzaW9uJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KFRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRTYWZldHlNb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIVRleHRTYWZldHlTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gKi9cbiAgICB0aGlzLnNlc3Npb247XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUGFyYW1zU3BlYy4kLFxuICAgICdEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2lucHV0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvblNlc3Npb25fRGVjaWRlX1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFzdHJpbmcgfSAqL1xuICAgIHRoaXMuaW5wdXQ7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgJ0RlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXN1bHRzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShEZWNpc2lvblF1ZXN0aW9uUmVzdWx0U3BlYy4kLCBmYWxzZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRydWUgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIERlY2lzaW9uU2Vzc2lvbl9EZWNpZGVfUmVzcG9uc2VQYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAoQXJyYXk8IURlY2lzaW9uUXVlc3Rpb25SZXN1bHQ+fHVuZGVmaW5lZCkgfSAqL1xuICAgIHRoaXMucmVzdWx0cztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgRGVjaXNpb25Nb2RlbF9TdGFydFNlc3Npb25fUGFyYW1zU3BlYy4kLFxuICAgICdEZWNpc2lvbk1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdxdWVyeScsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIERlY2lzaW9uUXVlcnlTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzZXNzaW9uJywgOCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VSZXF1ZXN0KERlY2lzaW9uU2Vzc2lvblBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMjRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNpc2lvbk1vZGVsX1N0YXJ0U2Vzc2lvbl9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhRGVjaXNpb25RdWVyeSB9ICovXG4gICAgdGhpcy5xdWVyeTtcbiAgICAvKiogQHR5cGUgeyAhRGVjaXNpb25TZXNzaW9uUGVuZGluZ1JlY2VpdmVyIH0gKi9cbiAgICB0aGlzLnNlc3Npb247XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEFzclN0cmVhbVJlc3BvbmRlcl9PblJlc3BvbnNlX1BhcmFtc1NwZWMuJCxcbiAgICAnQXNyU3RyZWFtUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAncmVzdWx0JywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5BcnJheShTcGVlY2hSZWNvZ25pdGlvblJlc3VsdFNwZWMuJCwgZmFsc2UpLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtUmVzcG9uZGVyX09uUmVzcG9uc2VfUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIUFycmF5PCFTcGVlY2hSZWNvZ25pdGlvblJlc3VsdD4gfSAqL1xuICAgIHRoaXMucmVzdWx0O1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBBc3JTdHJlYW1JbnB1dF9BZGRBdWRpb0NodW5rX1BhcmFtc1NwZWMuJCxcbiAgICAnQXNyU3RyZWFtSW5wdXRfQWRkQXVkaW9DaHVua19QYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkYXRhJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgQXVkaW9EYXRhU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBmYWxzZSAvKiBudWxsYWJsZSAqLyxcbiAgICAgICAgMCxcbiAgICAgICksXG4gICAgXSxcbiAgICBbWzAsIDE2XSxdKTtcblxuXG5cbi8qKlxuICogQHJlY29yZFxuICovXG5leHBvcnQgY2xhc3MgQXNyU3RyZWFtSW5wdXRfQWRkQXVkaW9DaHVua19QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhQXVkaW9EYXRhIH0gKi9cbiAgICB0aGlzLmRhdGE7XG4gIH1cbn1cblxubW9qby5pbnRlcm5hbC5VbmlvbihcbiAgICBJbnB1dFBpZWNlU3BlYy4kLCAnSW5wdXRQaWVjZScsXG4gICAge1xuICAgICAgJ3Rva2VuJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDAsXG4gICAgICAgICd0eXBlJzogVG9rZW5TcGVjLiQsXG4gICAgICB9LFxuICAgICAgJ3RleHQnOiB7XG4gICAgICAgICdvcmRpbmFsJzogMSxcbiAgICAgICAgJ3R5cGUnOiBtb2pvLmludGVybmFsLlN0cmluZyxcbiAgICAgIH0sXG4gICAgICAnYml0bWFwJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDIsXG4gICAgICAgICd0eXBlJzogc2tpYV9tb2pvbV9CaXRtYXBXaXRoQXJiaXRyYXJ5QnBwU3BlYy4kLFxuICAgICAgfSxcbiAgICAgICd1bmtub3duVHlwZSc6IHtcbiAgICAgICAgJ29yZGluYWwnOiAzLFxuICAgICAgICAndHlwZSc6IG1vam8uaW50ZXJuYWwuQm9vbCxcbiAgICAgIH0sXG4gICAgICAnYXVkaW8nOiB7XG4gICAgICAgICdvcmRpbmFsJzogNCxcbiAgICAgICAgJ3R5cGUnOiBBdWRpb0RhdGFTcGVjLiQsXG4gICAgICB9LFxuICAgICAgJ3Rvb2xEZWNsYXJhdGlvbic6IHtcbiAgICAgICAgJ29yZGluYWwnOiA1LFxuICAgICAgICAndHlwZSc6IFRvb2xEZWNsYXJhdGlvblNwZWMuJCxcbiAgICAgIH0sXG4gICAgICAndG9vbFJlc3BvbnNlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDYsXG4gICAgICAgICd0eXBlJzogVG9vbFJlc3BvbnNlU3BlYy4kLFxuICAgICAgfSxcbiAgICAgICd0b29sQ2FsbCc6IHtcbiAgICAgICAgJ29yZGluYWwnOiA3LFxuICAgICAgICAndHlwZSc6IFRvb2xDYWxsU3BlYy4kLFxuICAgICAgfSxcbiAgICB9KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7IHtcbiAqICAgdG9rZW46ICghVG9rZW58dW5kZWZpbmVkKSxcbiAqICAgdGV4dDogKCFzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgYml0bWFwOiAoIXNraWFfbW9qb21fQml0bWFwV2l0aEFyYml0cmFyeUJwcHx1bmRlZmluZWQpLFxuICogICB1bmtub3duVHlwZTogKCFib29sZWFufHVuZGVmaW5lZCksXG4gKiAgIGF1ZGlvOiAoIUF1ZGlvRGF0YXx1bmRlZmluZWQpLFxuICogICB0b29sRGVjbGFyYXRpb246ICghVG9vbERlY2xhcmF0aW9ufHVuZGVmaW5lZCksXG4gKiAgIHRvb2xSZXNwb25zZTogKCFUb29sUmVzcG9uc2V8dW5kZWZpbmVkKSxcbiAqICAgdG9vbENhbGw6ICghVG9vbENhbGx8dW5kZWZpbmVkKSxcbiAqIH0gfVxuICovXG5leHBvcnQgY29uc3QgSW5wdXRQaWVjZSA9IHt9O1xubW9qby5pbnRlcm5hbC5VbmlvbihcbiAgICBSZXNwb25zZUNvbnN0cmFpbnRTcGVjLiQsICdSZXNwb25zZUNvbnN0cmFpbnQnLFxuICAgIHtcbiAgICAgICdqc29uU2NoZW1hJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDAsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICB9LFxuICAgICAgJ3JlZ2V4Jzoge1xuICAgICAgICAnb3JkaW5hbCc6IDEsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5TdHJpbmcsXG4gICAgICB9LFxuICAgICAgJ3Vua25vd25UeXBlJzoge1xuICAgICAgICAnb3JkaW5hbCc6IDIsXG4gICAgICAgICd0eXBlJzogbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgfSxcbiAgICB9KTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7IHtcbiAqICAganNvblNjaGVtYTogKCFzdHJpbmd8dW5kZWZpbmVkKSxcbiAqICAgcmVnZXg6ICghc3RyaW5nfHVuZGVmaW5lZCksXG4gKiAgIHVua25vd25UeXBlOiAoIWJvb2xlYW58dW5kZWZpbmVkKSxcbiAqIH0gfVxuICovXG5leHBvcnQgY29uc3QgUmVzcG9uc2VDb25zdHJhaW50ID0ge307XG4iLCIvLyBicmF2ZS9jb21wb25lbnRzL2xvY2FsX2FpL2NvcmUvb25fZGV2aWNlX3NwZWVjaF9yZWNvZ25pdGlvbi5tb2pvbS5tLmpzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IG1vam9tX2JpbmRpbmdzX2dlbmVyYXRvci5weSwgZG8gbm90IGVkaXRcblxuLy8gQ29weXJpZ2h0IDIwMjAgVGhlIENocm9taXVtIEF1dGhvcnNcbi8vIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbi8vIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUuXG5cbmltcG9ydCB7bW9qb30gZnJvbSAnLi4vLi4vLi4vLi4vbW9qby9wdWJsaWMvanMvYmluZGluZ3MuanMnO1xuXG5pbXBvcnQge1xuICBCaWdCdWZmZXIgYXMgbW9qb0Jhc2VfbW9qb21fQmlnQnVmZmVyLFxuICBCaWdCdWZmZXJTcGVjIGFzIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbW9qby9wdWJsaWMvbW9qb20vYmFzZS9iaWdfYnVmZmVyLm1vam9tLm0uanMnO1xuXG5pbXBvcnQge1xuICBBc3JTdHJlYW1JbnB1dFJlbW90ZSBhcyBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UmVtb3RlLFxuICBBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciBhcyBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyLFxuICBBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgYXMgb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUsXG4gIEFzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlciBhcyBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclBlbmRpbmdSZWNlaXZlcixcbiAgQXNyU3RyZWFtT3B0aW9ucyBhcyBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMsXG4gIEFzclN0cmVhbU9wdGlvbnNTcGVjIGFzIG9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtT3B0aW9uc1NwZWNcbn0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvb25fZGV2aWNlX21vZGVsL3B1YmxpYy9tb2pvbS9vbl9kZXZpY2VfbW9kZWwubW9qb20ubS5qcyc7XG5cblxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlQZW5kaW5nUmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshTW9qb0hhbmRsZXwhbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSBoYW5kbGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSkge1xuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50fSAqL1xuICAgIHRoaXMuaGFuZGxlID0gbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmdldEVuZHBvaW50Rm9yUmVjZWl2ZXIoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZz19IHNjb3BlICovXG4gIGJpbmRJbkJyb3dzZXIoc2NvcGUgPSAnY29udGV4dCcpIHtcbiAgICBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuYmluZChcbiAgICAgICAgdGhpcy5oYW5kbGUsICdsb2NhbF9haS5tb2pvbS5TcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnknLCBzY29wZSk7XG4gIH1cbn1cblxuLyoqIEBpbnRlcmZhY2UgKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFPcnRNb2RlbEZpbGVzIH0gZmlsZXNcbiAgICogQHJldHVybiB7IVByb21pc2U8e1xuICAgICAgICBzdWNjZXNzOiAhYm9vbGVhbixcbiAgICogIH0+fVxuICAgKi9cblxuICBpbml0KGZpbGVzKSB7fVxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIH0gc3RyZWFtXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBjcmVhdGVBc3JTdHJlYW0ob3B0aW9ucywgc3RyZWFtLCByZXNwb25kZXIpIHt9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgeyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLnByb3h5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlKFxuICAgICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIU9ydE1vZGVsRmlsZXMgfSBmaWxlc1xuICAgKiBAcmV0dXJuIHshUHJvbWlzZTx7XG4gICAgICAgIHN1Y2Nlc3M6ICFib29sZWFuLFxuICAgKiAgfT59XG4gICAqL1xuXG4gIGluaXQoXG4gICAgICBmaWxlcykge1xuICAgIHJldHVybiB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICBbXG4gICAgICAgICAgZmlsZXNcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1PcHRpb25zIH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9IHN0cmVhbVxuICAgKiBAcGFyYW0geyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSByZXNwb25kZXJcbiAgICovXG5cbiAgY3JlYXRlQXNyU3RyZWFtKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHN0cmVhbSxcbiAgICAgIHJlc3BvbmRlcikge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDEsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9DcmVhdGVBc3JTdHJlYW1fUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBbXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBzdHJlYW0sXG4gICAgICAgICAgcmVzcG9uZGVyXG4gICAgICAgIF0sXG4gICAgICAgIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5XG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbnRlcmZhY2UgfSBpbXBsXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbXBsKSB7XG4gICAgLyoqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWw8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUmVzcG9uc2VQYXJhbXNTcGVjLiQsXG4gICAgICAgIGltcGwuaW5pdC5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMSxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0NyZWF0ZUFzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGltcGwuY3JlYXRlQXNyU3RyZWFtLmJpbmQoaW1wbCksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeSB7XG4gIC8qKlxuICAgKiBAcmV0dXJuIHshc3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCAkaW50ZXJmYWNlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJsb2NhbF9haS5tb2pvbS5TcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlfVxuICAgKi9cbiAgc3RhdGljIGdldFJlbW90ZSgpIHtcbiAgICBsZXQgcmVtb3RlID0gbmV3IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZTtcbiAgICByZW1vdGUuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZWNlaXZlcigpLmJpbmRJbkJyb3dzZXIoKTtcbiAgICByZXR1cm4gcmVtb3RlO1xuICB9XG59XG5cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5Q2FsbGJhY2tSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuaW5pdCA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zU3BlYy4kLFxuICAgICAgICB0aGlzLmluaXQuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKHRydWUgLyogZXhwZWN0c1Jlc3BvbnNlICovKSxcbiAgICAgICAgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNyZWF0ZUFzclN0cmVhbSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlQ2FsbGJhY2tSZWNlaXZlcihcbiAgICAgICAgICAgIHRoaXMucm91dGVyXyk7XG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAxLFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfQ3JlYXRlQXNyU3RyZWFtX1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5jcmVhdGVBc3JTdHJlYW0uY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnbG9jYWxfYWkubW9qb20uU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdCcsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RJbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlSZW1vdGUgfSBmYWN0b3J5XG4gICAqL1xuXG4gIHJlZ2lzdGVyRmFjdG9yeShmYWN0b3J5KSB7fVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHsgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdEludGVyZmFjZSB9XG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVtb3RlIHtcbiAgLyoqIEBwYXJhbSB7TW9qb0hhbmRsZXxtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuRW5kcG9pbnQ9fSBoYW5kbGUgKi9cbiAgY29uc3RydWN0b3IoaGFuZGxlID0gdW5kZWZpbmVkKSB7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZTwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy5wcm94eSA9XG4gICAgICAgIG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVtb3RlQmFzZShcbiAgICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UGVuZGluZ1JlY2VpdmVyLFxuICAgICAgICAgIGhhbmRsZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyPCFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UGVuZGluZ1JlY2VpdmVyPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2VXcmFwcGVyKHRoaXMucHJveHkpO1xuXG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMucHJveHkuZ2V0Q29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXIoKTtcbiAgfVxuXG4gIFxuICAvKipcbiAgICogQHBhcmFtIHsgIVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZSB9IGZhY3RvcnlcbiAgICovXG5cbiAgcmVnaXN0ZXJGYWN0b3J5KFxuICAgICAgZmFjdG9yeSkge1xuICAgIHRoaXMucHJveHkuc2VuZE1lc3NhZ2UoXG4gICAgICAgIDAsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RfUmVnaXN0ZXJGYWN0b3J5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIGZhY3RvcnlcbiAgICAgICAgXSxcbiAgICAgICAgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogQW4gb2JqZWN0IHdoaWNoIHJlY2VpdmVzIHJlcXVlc3QgbWVzc2FnZXMgZm9yIHRoZSBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0XG4gKiBtb2pvbSBpbnRlcmZhY2UuIE11c3QgYmUgY29uc3RydWN0ZWQgb3ZlciBhbiBvYmplY3Qgd2hpY2ggaW1wbGVtZW50cyB0aGF0XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVjZWl2ZXIge1xuICAvKipcbiAgICogQHBhcmFtIHshU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdEludGVyZmFjZSB9IGltcGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKGltcGwpIHtcbiAgICAvKiogQHByaXZhdGUgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXJJbnRlcm5hbDwhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZT59ICovXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVtb3RlKTtcblxuICAgIC8qKlxuICAgICAqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXI8IVNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RSZW1vdGU+fVxuICAgICAqL1xuICAgIHRoaXMuJCA9IG5ldyBtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuSW50ZXJmYWNlUmVjZWl2ZXJIZWxwZXIodGhpcy5oZWxwZXJfaW50ZXJuYWxfKTtcblxuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdF9SZWdpc3RlckZhY3RvcnlfUGFyYW1zU3BlYy4kLFxuICAgICAgICBudWxsLFxuICAgICAgICBpbXBsLnJlZ2lzdGVyRmFjdG9yeS5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0IHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcImxvY2FsX2FpLm1vam9tLlNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdENhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdFJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0UmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVnaXN0ZXJGYWN0b3J5ID1cbiAgICAgICAgbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyKFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJfKTtcblxuICAgIHRoaXMuaGVscGVyX2ludGVybmFsXy5yZWdpc3RlckhhbmRsZXIoXG4gICAgICAgIDAsXG4gICAgICAgIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RfUmVnaXN0ZXJGYWN0b3J5X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5yZWdpc3RlckZhY3RvcnkuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGltcGxlbWVudHMge21vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5QZW5kaW5nUmVjZWl2ZXJ9XG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTZXNzaW9uUGVuZGluZ1JlY2VpdmVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7IU1vam9IYW5kbGV8IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gaGFuZGxlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYW5kbGUpIHtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5FbmRwb2ludH0gKi9cbiAgICB0aGlzLmhhbmRsZSA9IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5nZXRFbmRwb2ludEZvclJlY2VpdmVyKGhhbmRsZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmc9fSBzY29wZSAqL1xuICBiaW5kSW5Ccm93c2VyKHNjb3BlID0gJ2NvbnRleHQnKSB7XG4gICAgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LmJpbmQoXG4gICAgICAgIHRoaXMuaGFuZGxlLCAnbG9jYWxfYWkubW9qb20uQXNyU2Vzc2lvbicsIHNjb3BlKTtcbiAgfVxufVxuXG4vKiogQGludGVyZmFjZSAqL1xuZXhwb3J0IGNsYXNzIEFzclNlc3Npb25JbnRlcmZhY2Uge1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIH0gc3RyZWFtXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBzdGFydChvcHRpb25zLCBzdHJlYW0sIHJlc3BvbmRlcikge31cbn1cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7IEFzclNlc3Npb25JbnRlcmZhY2UgfVxuICovXG5leHBvcnQgY2xhc3MgQXNyU2Vzc2lvblJlbW90ZSB7XG4gIC8qKiBAcGFyYW0ge01vam9IYW5kbGV8bW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkVuZHBvaW50PX0gaGFuZGxlICovXG4gIGNvbnN0cnVjdG9yKGhhbmRsZSA9IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2U8IUFzclNlc3Npb25QZW5kaW5nUmVjZWl2ZXI+fVxuICAgICAqL1xuICAgIHRoaXMucHJveHkgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlbW90ZUJhc2UoXG4gICAgICAgICAgQXNyU2Vzc2lvblBlbmRpbmdSZWNlaXZlcixcbiAgICAgICAgICBoYW5kbGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcjwhQXNyU2Vzc2lvblBlbmRpbmdSZWNlaXZlcj59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZW1vdGVCYXNlV3JhcHBlcih0aGlzLnByb3h5KTtcblxuICAgIC8qKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyfSAqL1xuICAgIHRoaXMub25Db25uZWN0aW9uRXJyb3IgPSB0aGlzLnByb3h5LmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICBcbiAgLyoqXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMgfSBvcHRpb25zXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIH0gc3RyZWFtXG4gICAqIEBwYXJhbSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSB9IHJlc3BvbmRlclxuICAgKi9cblxuICBzdGFydChcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzdHJlYW0sXG4gICAgICByZXNwb25kZXIpIHtcbiAgICB0aGlzLnByb3h5LnNlbmRNZXNzYWdlKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgc3RyZWFtLFxuICAgICAgICAgIHJlc3BvbmRlclxuICAgICAgICBdLFxuICAgICAgICBmYWxzZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBvYmplY3Qgd2hpY2ggcmVjZWl2ZXMgcmVxdWVzdCBtZXNzYWdlcyBmb3IgdGhlIEFzclNlc3Npb25cbiAqIG1vam9tIGludGVyZmFjZS4gTXVzdCBiZSBjb25zdHJ1Y3RlZCBvdmVyIGFuIG9iamVjdCB3aGljaCBpbXBsZW1lbnRzIHRoYXRcbiAqIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzclNlc3Npb25SZWNlaXZlciB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFBc3JTZXNzaW9uSW50ZXJmYWNlIH0gaW1wbFxuICAgKi9cbiAgY29uc3RydWN0b3IoaW1wbCkge1xuICAgIC8qKiBAcHJpdmF0ZSB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsPCFBc3JTZXNzaW9uUmVtb3RlPn0gKi9cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVySW50ZXJuYWwoXG4gICAgICAgIEFzclNlc3Npb25SZW1vdGUpO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcjwhQXNyU2Vzc2lvblJlbW90ZT59XG4gICAgICovXG4gICAgdGhpcy4kID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlcih0aGlzLmhlbHBlcl9pbnRlcm5hbF8pO1xuXG5cbiAgICB0aGlzLmhlbHBlcl9pbnRlcm5hbF8ucmVnaXN0ZXJIYW5kbGVyKFxuICAgICAgICAwLFxuICAgICAgICBBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgaW1wbC5zdGFydC5iaW5kKGltcGwpLFxuICAgICAgICBmYWxzZSk7XG4gICAgLyoqIEBwdWJsaWMgeyFtb2pvLmludGVybmFsLmludGVyZmFjZVN1cHBvcnQuQ29ubmVjdGlvbkVycm9yRXZlbnRSb3V0ZXJ9ICovXG4gICAgdGhpcy5vbkNvbm5lY3Rpb25FcnJvciA9IHRoaXMuaGVscGVyX2ludGVybmFsXy5nZXRDb25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3JTZXNzaW9uIHtcbiAgLyoqXG4gICAqIEByZXR1cm4geyFzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0ICRpbnRlcmZhY2VOYW1lKCkge1xuICAgIHJldHVybiBcImxvY2FsX2FpLm1vam9tLkFzclNlc3Npb25cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcmVtb3RlIGZvciB0aGlzIGludGVyZmFjZSB3aGljaCBzZW5kcyBtZXNzYWdlcyB0byB0aGUgYnJvd3Nlci5cbiAgICogVGhlIGJyb3dzZXIgbXVzdCBoYXZlIGFuIGludGVyZmFjZSByZXF1ZXN0IGJpbmRlciByZWdpc3RlcmVkIGZvciB0aGlzXG4gICAqIGludGVyZmFjZSBhbmQgYWNjZXNzaWJsZSB0byB0aGUgY2FsbGluZyBkb2N1bWVudCdzIGZyYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHshQXNyU2Vzc2lvblJlbW90ZX1cbiAgICovXG4gIHN0YXRpYyBnZXRSZW1vdGUoKSB7XG4gICAgbGV0IHJlbW90ZSA9IG5ldyBBc3JTZXNzaW9uUmVtb3RlO1xuICAgIHJlbW90ZS4kLmJpbmROZXdQaXBlQW5kUGFzc1JlY2VpdmVyKCkuYmluZEluQnJvd3NlcigpO1xuICAgIHJldHVybiByZW1vdGU7XG4gIH1cbn1cblxuXG4vKipcbiAqIEFuIG9iamVjdCB3aGljaCByZWNlaXZlcyByZXF1ZXN0IG1lc3NhZ2VzIGZvciB0aGUgQXNyU2Vzc2lvblxuICogbW9qb20gaW50ZXJmYWNlIGFuZCBkaXNwYXRjaGVzIHRoZW0gYXMgY2FsbGJhY2tzLiBPbmUgY2FsbGJhY2sgcmVjZWl2ZXIgZXhpc3RzXG4gKiBvbiB0aGlzIG9iamVjdCBmb3IgZWFjaCBtZXNzYWdlIGRlZmluZWQgaW4gdGhlIG1vam9tIGludGVyZmFjZSwgYW5kIGVhY2hcbiAqIHJlY2VpdmVyIGNhbiBoYXZlIGFueSBudW1iZXIgb2YgbGlzdGVuZXJzIGFkZGVkIHRvIGl0LlxuICovXG5leHBvcnQgY2xhc3MgQXNyU2Vzc2lvbkNhbGxiYWNrUm91dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfID0gbmV3IG1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VSZWNlaXZlckhlbHBlckludGVybmFsKFxuICAgICAgQXNyU2Vzc2lvblJlbW90ZSk7XG5cbiAgICAvKipcbiAgICAgKiBAcHVibGljIHshbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyPCFBc3JTZXNzaW9uUmVtb3RlPn1cbiAgICAgKi9cbiAgICB0aGlzLiQgPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZVJlY2VpdmVySGVscGVyKHRoaXMuaGVscGVyX2ludGVybmFsXyk7XG5cbiAgICB0aGlzLnJvdXRlcl8gPSBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkNhbGxiYWNrUm91dGVyO1xuXG4gICAgLyoqXG4gICAgICogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5JbnRlcmZhY2VDYWxsYmFja1JlY2VpdmVyfVxuICAgICAqL1xuICAgIHRoaXMuc3RhcnQgPVxuICAgICAgICBuZXcgbW9qby5pbnRlcm5hbC5pbnRlcmZhY2VTdXBwb3J0LkludGVyZmFjZUNhbGxiYWNrUmVjZWl2ZXIoXG4gICAgICAgICAgICB0aGlzLnJvdXRlcl8pO1xuXG4gICAgdGhpcy5oZWxwZXJfaW50ZXJuYWxfLnJlZ2lzdGVySGFuZGxlcihcbiAgICAgICAgMCxcbiAgICAgICAgQXNyU2Vzc2lvbl9TdGFydF9QYXJhbXNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHRoaXMuc3RhcnQuY3JlYXRlUmVjZWl2ZXJIYW5kbGVyKGZhbHNlIC8qIGV4cGVjdHNSZXNwb25zZSAqLyksXG4gICAgICAgIGZhbHNlKTtcbiAgICAvKiogQHB1YmxpYyB7IW1vam8uaW50ZXJuYWwuaW50ZXJmYWNlU3VwcG9ydC5Db25uZWN0aW9uRXJyb3JFdmVudFJvdXRlcn0gKi9cbiAgICB0aGlzLm9uQ29ubmVjdGlvbkVycm9yID0gdGhpcy5oZWxwZXJfaW50ZXJuYWxfLmdldENvbm5lY3Rpb25FcnJvckV2ZW50Um91dGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIEFuIElEIHJldHVybmVkIGJ5IGEgcHJpb3IgY2FsbCB0byBhZGRMaXN0ZW5lci5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZmYgdGhlIGlkZW50aWZpZWQgbGlzdGVuZXIgd2FzIGZvdW5kIGFuZCByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJfLnJlbW92ZUxpc3RlbmVyKGlkKTtcbiAgfVxufVxuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBPcnRNb2RlbEZpbGVzU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXNTcGVjID1cbiAgICB7ICQ6IC8qKiBAdHlwZSB7IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfSAqLyAoe30pIH07XG5cbi8qKlxuICogQGNvbnN0IHsgeyQ6IW1vam8uaW50ZXJuYWwuTW9qb21UeXBlfX1cbiAqL1xuZXhwb3J0IGNvbnN0IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfQ3JlYXRlQXNyU3RyZWFtX1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuLyoqXG4gKiBAY29uc3QgeyB7JDohbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9fVxuICovXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SG9zdF9SZWdpc3RlckZhY3RvcnlfUGFyYW1zU3BlYyA9XG4gICAgeyAkOiAvKiogQHR5cGUgeyFtb2pvLmludGVybmFsLk1vam9tVHlwZX0gKi8gKHt9KSB9O1xuXG4vKipcbiAqIEBjb25zdCB7IHskOiFtb2pvLmludGVybmFsLk1vam9tVHlwZX19XG4gKi9cbmV4cG9ydCBjb25zdCBBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtc1NwZWMgPVxuICAgIHsgJDogLyoqIEB0eXBlIHshbW9qby5pbnRlcm5hbC5Nb2pvbVR5cGV9ICovICh7fSkgfTtcblxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgT3J0TW9kZWxGaWxlc1NwZWMuJCxcbiAgICAnT3J0TW9kZWxGaWxlcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2VuY29kZXInLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdlbmNvZGVyRGF0YScsIDE2LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdkZWNvZGVyJywgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2RlY29kZXJEYXRhJywgNDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Rva2VucycsIDY0LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXJTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdtZWxGaWx0ZXJzJywgODAsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam9CYXNlX21vam9tX0JpZ0J1ZmZlclNwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxMDRdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBPcnRNb2RlbEZpbGVzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy5lbmNvZGVyO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMuZW5jb2RlckRhdGE7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy5kZWNvZGVyO1xuICAgIC8qKiBAdHlwZSB7ICFtb2pvQmFzZV9tb2pvbV9CaWdCdWZmZXIgfSAqL1xuICAgIHRoaXMuZGVjb2RlckRhdGE7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy50b2tlbnM7XG4gICAgLyoqIEB0eXBlIHsgIW1vam9CYXNlX21vam9tX0JpZ0J1ZmZlciB9ICovXG4gICAgdGhpcy5tZWxGaWx0ZXJzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9QYXJhbXNTcGVjLiQsXG4gICAgJ1NwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ZpbGVzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgT3J0TW9kZWxGaWxlc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFPcnRNb2RlbEZpbGVzIH0gKi9cbiAgICB0aGlzLmZpbGVzO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlfSW5pdF9SZXNwb25zZVBhcmFtc1NwZWMuJCxcbiAgICAnU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0luaXRfUmVzcG9uc2VQYXJhbXMnLFxuICAgIFtcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzdWNjZXNzJywgMCxcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5Cb29sLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAxNl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9Jbml0X1Jlc3BvbnNlUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIWJvb2xlYW4gfSAqL1xuICAgIHRoaXMuc3VjY2VzcztcbiAgfVxufVxuXG5cblxubW9qby5pbnRlcm5hbC5TdHJ1Y3QoXG4gICAgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5X0NyZWF0ZUFzclN0cmVhbV9QYXJhbXNTcGVjLiQsXG4gICAgJ1NwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9DcmVhdGVBc3JTdHJlYW1fUGFyYW1zJyxcbiAgICBbXG4gICAgICBtb2pvLmludGVybmFsLlN0cnVjdEZpZWxkKFxuICAgICAgICAnb3B0aW9ucycsIDAsXG4gICAgICAgIDAsXG4gICAgICAgIG9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtT3B0aW9uc1NwZWMuJCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3N0cmVhbScsIDgsXG4gICAgICAgIDAsXG4gICAgICAgIG1vam8uaW50ZXJuYWwuSW50ZXJmYWNlUmVxdWVzdChvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ3Jlc3BvbmRlcicsIDEyLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVByb3h5KG9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlKSxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgZmFsc2UgLyogbnVsbGFibGUgKi8sXG4gICAgICAgIDAsXG4gICAgICApLFxuICAgIF0sXG4gICAgW1swLCAzMl0sXSk7XG5cblxuXG4vKipcbiAqIEByZWNvcmRcbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeV9DcmVhdGVBc3JTdHJlYW1fUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtT3B0aW9ucyB9ICovXG4gICAgdGhpcy5vcHRpb25zO1xuICAgIC8qKiBAdHlwZSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbUlucHV0UGVuZGluZ1JlY2VpdmVyIH0gKi9cbiAgICB0aGlzLnN0cmVhbTtcbiAgICAvKiogQHR5cGUgeyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUgfSAqL1xuICAgIHRoaXMucmVzcG9uZGVyO1xuICB9XG59XG5cblxuXG5tb2pvLmludGVybmFsLlN0cnVjdChcbiAgICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0X1JlZ2lzdGVyRmFjdG9yeV9QYXJhbXNTcGVjLiQsXG4gICAgJ1NwZWVjaFJlY29nbml0aW9uRmFjdG9yeUhvc3RfUmVnaXN0ZXJGYWN0b3J5X1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ2ZhY3RvcnknLCAwLFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVByb3h5KFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMTZdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0X1JlZ2lzdGVyRmFjdG9yeV9QYXJhbXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgeyAhU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVtb3RlIH0gKi9cbiAgICB0aGlzLmZhY3Rvcnk7XG4gIH1cbn1cblxuXG5cbm1vam8uaW50ZXJuYWwuU3RydWN0KFxuICAgIEFzclNlc3Npb25fU3RhcnRfUGFyYW1zU3BlYy4kLFxuICAgICdBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtcycsXG4gICAgW1xuICAgICAgbW9qby5pbnRlcm5hbC5TdHJ1Y3RGaWVsZChcbiAgICAgICAgJ29wdGlvbnMnLCAwLFxuICAgICAgICAwLFxuICAgICAgICBvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnNTcGVjLiQsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdzdHJlYW0nLCA4LFxuICAgICAgICAwLFxuICAgICAgICBtb2pvLmludGVybmFsLkludGVyZmFjZVJlcXVlc3Qob25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICAgIG1vam8uaW50ZXJuYWwuU3RydWN0RmllbGQoXG4gICAgICAgICdyZXNwb25kZXInLCAxMixcbiAgICAgICAgMCxcbiAgICAgICAgbW9qby5pbnRlcm5hbC5JbnRlcmZhY2VQcm94eShvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbVJlc3BvbmRlclJlbW90ZSksXG4gICAgICAgIG51bGwsXG4gICAgICAgIGZhbHNlIC8qIG51bGxhYmxlICovLFxuICAgICAgICAwLFxuICAgICAgKSxcbiAgICBdLFxuICAgIFtbMCwgMzJdLF0pO1xuXG5cblxuLyoqXG4gKiBAcmVjb3JkXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3JTZXNzaW9uX1N0YXJ0X1BhcmFtcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSB7ICFvbkRldmljZU1vZGVsX21vam9tX0FzclN0cmVhbU9wdGlvbnMgfSAqL1xuICAgIHRoaXMub3B0aW9ucztcbiAgICAvKiogQHR5cGUgeyAhb25EZXZpY2VNb2RlbF9tb2pvbV9Bc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlciB9ICovXG4gICAgdGhpcy5zdHJlYW07XG4gICAgLyoqIEB0eXBlIHsgIW9uRGV2aWNlTW9kZWxfbW9qb21fQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlIH0gKi9cbiAgICB0aGlzLnJlc3BvbmRlcjtcbiAgfVxufVxuXG4iLCIvKiFcbiAqIE9OTlggUnVudGltZSBXZWIgdjEuMjYuMFxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbnZhciBKdD1PYmplY3QuZGVmaW5lUHJvcGVydHk7dmFyIFhhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7dmFyIFFhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO3ZhciBaYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O3ZhciBxdD0obj0+dHlwZW9mIHJlcXVpcmU8XCJ1XCI/cmVxdWlyZTp0eXBlb2YgUHJveHk8XCJ1XCI/bmV3IFByb3h5KG4se2dldDoodCxhKT0+KHR5cGVvZiByZXF1aXJlPFwidVwiP3JlcXVpcmU6dClbYV19KTpuKShmdW5jdGlvbihuKXtpZih0eXBlb2YgcmVxdWlyZTxcInVcIilyZXR1cm4gcmVxdWlyZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dGhyb3cgRXJyb3IoJ0R5bmFtaWMgcmVxdWlyZSBvZiBcIicrbisnXCIgaXMgbm90IHN1cHBvcnRlZCcpfSk7dmFyIE49KG4sdCk9PigpPT4obiYmKHQ9bihuPTApKSx0KTt2YXIgdXQ9KG4sdCk9Pntmb3IodmFyIGEgaW4gdClKdChuLGEse2dldDp0W2FdLGVudW1lcmFibGU6ITB9KX0sS2E9KG4sdCxhLHUpPT57aWYodCYmdHlwZW9mIHQ9PVwib2JqZWN0XCJ8fHR5cGVvZiB0PT1cImZ1bmN0aW9uXCIpZm9yKGxldCBvIG9mIFFhKHQpKSFaYS5jYWxsKG4sbykmJm8hPT1hJiZKdChuLG8se2dldDooKT0+dFtvXSxlbnVtZXJhYmxlOiEodT1YYSh0LG8pKXx8dS5lbnVtZXJhYmxlfSk7cmV0dXJuIG59O3ZhciBYdD1uPT5LYShKdCh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxuKTt2YXIgZnQsQmUscWUsZXMsZHIsUXQ9TigoKT0+e1widXNlIHN0cmljdFwiO2Z0PW5ldyBNYXAsQmU9W10scWU9KG4sdCxhKT0+e2lmKHQmJnR5cGVvZiB0LmluaXQ9PVwiZnVuY3Rpb25cIiYmdHlwZW9mIHQuY3JlYXRlSW5mZXJlbmNlU2Vzc2lvbkhhbmRsZXI9PVwiZnVuY3Rpb25cIil7bGV0IHU9ZnQuZ2V0KG4pO2lmKHU9PT12b2lkIDApZnQuc2V0KG4se2JhY2tlbmQ6dCxwcmlvcml0eTphfSk7ZWxzZXtpZih1LnByaW9yaXR5PmEpcmV0dXJuO2lmKHUucHJpb3JpdHk9PT1hJiZ1LmJhY2tlbmQhPT10KXRocm93IG5ldyBFcnJvcihgY2Fubm90IHJlZ2lzdGVyIGJhY2tlbmQgXCIke259XCIgdXNpbmcgcHJpb3JpdHkgJHthfWApfWlmKGE+PTApe2xldCBvPUJlLmluZGV4T2Yobik7byE9PS0xJiZCZS5zcGxpY2UobywxKTtmb3IobGV0IGQ9MDtkPEJlLmxlbmd0aDtkKyspaWYoZnQuZ2V0KEJlW2RdKS5wcmlvcml0eTw9YSl7QmUuc3BsaWNlKGQsMCxuKTtyZXR1cm59QmUucHVzaChuKX1yZXR1cm59dGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vdCBhIHZhbGlkIGJhY2tlbmRcIil9LGVzPWFzeW5jIG49PntsZXQgdD1mdC5nZXQobik7aWYoIXQpcmV0dXJuXCJiYWNrZW5kIG5vdCBmb3VuZC5cIjtpZih0LmluaXRpYWxpemVkKXJldHVybiB0LmJhY2tlbmQ7aWYodC5hYm9ydGVkKXJldHVybiB0LmVycm9yO3tsZXQgYT0hIXQuaW5pdFByb21pc2U7dHJ5e3JldHVybiBhfHwodC5pbml0UHJvbWlzZT10LmJhY2tlbmQuaW5pdChuKSksYXdhaXQgdC5pbml0UHJvbWlzZSx0LmluaXRpYWxpemVkPSEwLHQuYmFja2VuZH1jYXRjaCh1KXtyZXR1cm4gYXx8KHQuZXJyb3I9YCR7dX1gLHQuYWJvcnRlZD0hMCksdC5lcnJvcn1maW5hbGx5e2RlbGV0ZSB0LmluaXRQcm9taXNlfX19LGRyPWFzeW5jIG49PntsZXQgdD1uLmV4ZWN1dGlvblByb3ZpZGVyc3x8W10sYT10Lm1hcChtPT50eXBlb2YgbT09XCJzdHJpbmdcIj9tOm0ubmFtZSksdT1hLmxlbmd0aD09PTA/QmU6YSxvLGQ9W10sYz1uZXcgU2V0O2ZvcihsZXQgbSBvZiB1KXtsZXQgaD1hd2FpdCBlcyhtKTt0eXBlb2YgaD09XCJzdHJpbmdcIj9kLnB1c2goe25hbWU6bSxlcnI6aH0pOihvfHwobz1oKSxvPT09aCYmYy5hZGQobSkpfWlmKCFvKXRocm93IG5ldyBFcnJvcihgbm8gYXZhaWxhYmxlIGJhY2tlbmQgZm91bmQuIEVSUjogJHtkLm1hcChtPT5gWyR7bS5uYW1lfV0gJHttLmVycn1gKS5qb2luKFwiLCBcIil9YCk7Zm9yKGxldHtuYW1lOm0sZXJyOmh9b2YgZClhLmluY2x1ZGVzKG0pJiZjb25zb2xlLndhcm4oYHJlbW92aW5nIHJlcXVlc3RlZCBleGVjdXRpb24gcHJvdmlkZXIgXCIke219XCIgZnJvbSBzZXNzaW9uIG9wdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlOiAke2h9YCk7bGV0IGw9dC5maWx0ZXIobT0+Yy5oYXModHlwZW9mIG09PVwic3RyaW5nXCI/bTptLm5hbWUpKTtyZXR1cm5bbyxuZXcgUHJveHkobix7Z2V0OihtLGgpPT5oPT09XCJleGVjdXRpb25Qcm92aWRlcnNcIj9sOlJlZmxlY3QuZ2V0KG0saCl9KV19fSk7dmFyIHByPU4oKCk9PntcInVzZSBzdHJpY3RcIjtRdCgpfSk7dmFyIG1yLGhyPU4oKCk9PntcInVzZSBzdHJpY3RcIjttcj1cIjEuMjYuMFwifSk7dmFyIHdyLEosWnQ9TigoKT0+e1widXNlIHN0cmljdFwiO2hyKCk7d3I9XCJ3YXJuaW5nXCIsSj17d2FzbTp7fSx3ZWJnbDp7fSx3ZWJncHU6e30sdmVyc2lvbnM6e2NvbW1vbjptcn0sc2V0IGxvZ0xldmVsKG4pe2lmKG4hPT12b2lkIDApe2lmKHR5cGVvZiBuIT1cInN0cmluZ1wifHxbXCJ2ZXJib3NlXCIsXCJpbmZvXCIsXCJ3YXJuaW5nXCIsXCJlcnJvclwiLFwiZmF0YWxcIl0uaW5kZXhPZihuKT09PS0xKXRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbG9nZ2luZyBsZXZlbDogJHtufWApO3dyPW59fSxnZXQgbG9nTGV2ZWwoKXtyZXR1cm4gd3J9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoSixcImxvZ0xldmVsXCIse2VudW1lcmFibGU6ITB9KX0pO3ZhciBZLGJyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtadCgpO1k9Sn0pO3ZhciB5cixncixFcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7eXI9KG4sdCk9PntsZXQgYT10eXBlb2YgZG9jdW1lbnQ8XCJ1XCI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTpuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsMSk7YS53aWR0aD1uLmRpbXNbM10sYS5oZWlnaHQ9bi5kaW1zWzJdO2xldCB1PWEuZ2V0Q29udGV4dChcIjJkXCIpO2lmKHUhPW51bGwpe2xldCBvLGQ7dD8udGVuc29yTGF5b3V0IT09dm9pZCAwJiZ0LnRlbnNvckxheW91dD09PVwiTkhXQ1wiPyhvPW4uZGltc1syXSxkPW4uZGltc1szXSk6KG89bi5kaW1zWzNdLGQ9bi5kaW1zWzJdKTtsZXQgYz10Py5mb3JtYXQhPT12b2lkIDA/dC5mb3JtYXQ6XCJSR0JcIixsPXQ/Lm5vcm0sbSxoO2w9PT12b2lkIDB8fGwubWVhbj09PXZvaWQgMD9tPVsyNTUsMjU1LDI1NSwyNTVdOnR5cGVvZiBsLm1lYW49PVwibnVtYmVyXCI/bT1bbC5tZWFuLGwubWVhbixsLm1lYW4sbC5tZWFuXToobT1bbC5tZWFuWzBdLGwubWVhblsxXSxsLm1lYW5bMl0sMF0sbC5tZWFuWzNdIT09dm9pZCAwJiYobVszXT1sLm1lYW5bM10pKSxsPT09dm9pZCAwfHxsLmJpYXM9PT12b2lkIDA/aD1bMCwwLDAsMF06dHlwZW9mIGwuYmlhcz09XCJudW1iZXJcIj9oPVtsLmJpYXMsbC5iaWFzLGwuYmlhcyxsLmJpYXNdOihoPVtsLmJpYXNbMF0sbC5iaWFzWzFdLGwuYmlhc1syXSwwXSxsLmJpYXNbM10hPT12b2lkIDAmJihoWzNdPWwuYmlhc1szXSkpO2xldCBnPWQqbyxiPTAseT1nLFQ9ZyoyLEk9LTE7Yz09PVwiUkdCQVwiPyhiPTAseT1nLFQ9ZyoyLEk9ZyozKTpjPT09XCJSR0JcIj8oYj0wLHk9ZyxUPWcqMik6Yz09PVwiUkJHXCImJihiPTAsVD1nLHk9ZyoyKTtmb3IobGV0IEQ9MDtEPGQ7RCsrKWZvcihsZXQgej0wO3o8bzt6Kyspe2xldCB2PShuLmRhdGFbYisrXS1oWzBdKSptWzBdLE89KG4uZGF0YVt5KytdLWhbMV0pKm1bMV0sRj0obi5kYXRhW1QrK10taFsyXSkqbVsyXSxfPUk9PT0tMT8yNTU6KG4uZGF0YVtJKytdLWhbM10pKm1bM107dS5maWxsU3R5bGU9XCJyZ2JhKFwiK3YrXCIsXCIrTytcIixcIitGK1wiLFwiK18rXCIpXCIsdS5maWxsUmVjdCh6LEQsMSwxKX1pZihcInRvRGF0YVVSTFwiaW4gYSlyZXR1cm4gYS50b0RhdGFVUkwoKTt0aHJvdyBuZXcgRXJyb3IoXCJ0b0RhdGFVUkwgaXMgbm90IHN1cHBvcnRlZFwiKX1lbHNlIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgYWNjZXNzIGltYWdlIGRhdGFcIil9LGdyPShuLHQpPT57bGV0IGE9dHlwZW9mIGRvY3VtZW50PFwidVwiP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpOm5ldyBPZmZzY3JlZW5DYW52YXMoMSwxKS5nZXRDb250ZXh0KFwiMmRcIiksdTtpZihhIT1udWxsKXtsZXQgbyxkLGM7dD8udGVuc29yTGF5b3V0IT09dm9pZCAwJiZ0LnRlbnNvckxheW91dD09PVwiTkhXQ1wiPyhvPW4uZGltc1syXSxkPW4uZGltc1sxXSxjPW4uZGltc1szXSk6KG89bi5kaW1zWzNdLGQ9bi5kaW1zWzJdLGM9bi5kaW1zWzFdKTtsZXQgbD10IT09dm9pZCAwJiZ0LmZvcm1hdCE9PXZvaWQgMD90LmZvcm1hdDpcIlJHQlwiLG09dD8ubm9ybSxoLGc7bT09PXZvaWQgMHx8bS5tZWFuPT09dm9pZCAwP2g9WzI1NSwyNTUsMjU1LDI1NV06dHlwZW9mIG0ubWVhbj09XCJudW1iZXJcIj9oPVttLm1lYW4sbS5tZWFuLG0ubWVhbixtLm1lYW5dOihoPVttLm1lYW5bMF0sbS5tZWFuWzFdLG0ubWVhblsyXSwyNTVdLG0ubWVhblszXSE9PXZvaWQgMCYmKGhbM109bS5tZWFuWzNdKSksbT09PXZvaWQgMHx8bS5iaWFzPT09dm9pZCAwP2c9WzAsMCwwLDBdOnR5cGVvZiBtLmJpYXM9PVwibnVtYmVyXCI/Zz1bbS5iaWFzLG0uYmlhcyxtLmJpYXMsbS5iaWFzXTooZz1bbS5iaWFzWzBdLG0uYmlhc1sxXSxtLmJpYXNbMl0sMF0sbS5iaWFzWzNdIT09dm9pZCAwJiYoZ1szXT1tLmJpYXNbM10pKTtsZXQgYj1kKm87aWYodCE9PXZvaWQgMCYmKHQuZm9ybWF0IT09dm9pZCAwJiZjPT09NCYmdC5mb3JtYXQhPT1cIlJHQkFcInx8Yz09PTMmJnQuZm9ybWF0IT09XCJSR0JcIiYmdC5mb3JtYXQhPT1cIkJHUlwiKSl0aHJvdyBuZXcgRXJyb3IoXCJUZW5zb3IgZm9ybWF0IGRvZXNuJ3QgbWF0Y2ggaW5wdXQgdGVuc29yIGRpbXNcIik7bGV0IHk9NCxUPTAsST0xLEQ9Mix6PTMsdj0wLE89YixGPWIqMixfPS0xO2w9PT1cIlJHQkFcIj8odj0wLE89YixGPWIqMixfPWIqMyk6bD09PVwiUkdCXCI/KHY9MCxPPWIsRj1iKjIpOmw9PT1cIlJCR1wiJiYodj0wLEY9YixPPWIqMiksdT1hLmNyZWF0ZUltYWdlRGF0YShvLGQpO2ZvcihsZXQgaz0wO2s8ZCpvO1QrPXksSSs9eSxEKz15LHorPXksaysrKXUuZGF0YVtUXT0obi5kYXRhW3YrK10tZ1swXSkqaFswXSx1LmRhdGFbSV09KG4uZGF0YVtPKytdLWdbMV0pKmhbMV0sdS5kYXRhW0RdPShuLmRhdGFbRisrXS1nWzJdKSpoWzJdLHUuZGF0YVt6XT1fPT09LTE/MjU1OihuLmRhdGFbXysrXS1nWzNdKSpoWzNdfWVsc2UgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBhY2Nlc3MgaW1hZ2UgZGF0YVwiKTtyZXR1cm4gdX19KTt2YXIgS3QsVHIsU3IsdnIsT3IsQXIsSXI9TigoKT0+e1widXNlIHN0cmljdFwiO2N0KCk7S3Q9KG4sdCk9PntpZihuPT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkltYWdlIGJ1ZmZlciBtdXN0IGJlIGRlZmluZWRcIik7aWYodC5oZWlnaHQ9PT12b2lkIDB8fHQud2lkdGg9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgaGVpZ2h0IGFuZCB3aWR0aCBtdXN0IGJlIGRlZmluZWRcIik7aWYodC50ZW5zb3JMYXlvdXQ9PT1cIk5IV0NcIil0aHJvdyBuZXcgRXJyb3IoXCJOSFdDIFRlbnNvciBsYXlvdXQgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIik7bGV0e2hlaWdodDphLHdpZHRoOnV9PXQsbz10Lm5vcm0/P3ttZWFuOjI1NSxiaWFzOjB9LGQsYzt0eXBlb2Ygby5tZWFuPT1cIm51bWJlclwiP2Q9W28ubWVhbixvLm1lYW4sby5tZWFuLG8ubWVhbl06ZD1bby5tZWFuWzBdLG8ubWVhblsxXSxvLm1lYW5bMl0sby5tZWFuWzNdPz8yNTVdLHR5cGVvZiBvLmJpYXM9PVwibnVtYmVyXCI/Yz1bby5iaWFzLG8uYmlhcyxvLmJpYXMsby5iaWFzXTpjPVtvLmJpYXNbMF0sby5iaWFzWzFdLG8uYmlhc1syXSxvLmJpYXNbM10/PzBdO2xldCBsPXQuZm9ybWF0IT09dm9pZCAwP3QuZm9ybWF0OlwiUkdCQVwiLG09dC50ZW5zb3JGb3JtYXQhPT12b2lkIDAmJnQudGVuc29yRm9ybWF0IT09dm9pZCAwP3QudGVuc29yRm9ybWF0OlwiUkdCXCIsaD1hKnUsZz1tPT09XCJSR0JBXCI/bmV3IEZsb2F0MzJBcnJheShoKjQpOm5ldyBGbG9hdDMyQXJyYXkoaCozKSxiPTQseT0wLFQ9MSxJPTIsRD0zLHo9MCx2PWgsTz1oKjIsRj0tMTtsPT09XCJSR0JcIiYmKGI9Myx5PTAsVD0xLEk9MixEPS0xKSxtPT09XCJSR0JBXCI/Rj1oKjM6bT09PVwiUkJHXCI/KHo9MCxPPWgsdj1oKjIpOm09PT1cIkJHUlwiJiYoTz0wLHY9aCx6PWgqMik7Zm9yKGxldCBrPTA7azxoO2srKyx5Kz1iLEkrPWIsVCs9YixEKz1iKWdbeisrXT0oblt5XStjWzBdKS9kWzBdLGdbdisrXT0obltUXStjWzFdKS9kWzFdLGdbTysrXT0obltJXStjWzJdKS9kWzJdLEYhPT0tMSYmRCE9PS0xJiYoZ1tGKytdPShuW0RdK2NbM10pL2RbM10pO3JldHVybiBtPT09XCJSR0JBXCI/bmV3IFEoXCJmbG9hdDMyXCIsZyxbMSw0LGEsdV0pOm5ldyBRKFwiZmxvYXQzMlwiLGcsWzEsMyxhLHVdKX0sVHI9YXN5bmMobix0KT0+e2xldCBhPXR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50PFwidVwiJiZuIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCx1PXR5cGVvZiBJbWFnZURhdGE8XCJ1XCImJm4gaW5zdGFuY2VvZiBJbWFnZURhdGEsbz10eXBlb2YgSW1hZ2VCaXRtYXA8XCJ1XCImJm4gaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCxkPXR5cGVvZiBuPT1cInN0cmluZ1wiLGMsbD10Pz97fSxtPSgpPT57aWYodHlwZW9mIGRvY3VtZW50PFwidVwiKXJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2lmKHR5cGVvZiBPZmZzY3JlZW5DYW52YXM8XCJ1XCIpcmV0dXJuIG5ldyBPZmZzY3JlZW5DYW52YXMoMSwxKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgaXMgbm90IHN1cHBvcnRlZFwiKX0saD1nPT50eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQ8XCJ1XCImJmcgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudHx8ZyBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcz9nLmdldENvbnRleHQoXCIyZFwiKTpudWxsO2lmKGEpe2xldCBnPW0oKTtnLndpZHRoPW4ud2lkdGgsZy5oZWlnaHQ9bi5oZWlnaHQ7bGV0IGI9aChnKTtpZihiIT1udWxsKXtsZXQgeT1uLmhlaWdodCxUPW4ud2lkdGg7aWYodCE9PXZvaWQgMCYmdC5yZXNpemVkSGVpZ2h0IT09dm9pZCAwJiZ0LnJlc2l6ZWRXaWR0aCE9PXZvaWQgMCYmKHk9dC5yZXNpemVkSGVpZ2h0LFQ9dC5yZXNpemVkV2lkdGgpLHQhPT12b2lkIDApe2lmKGw9dCx0LnRlbnNvckZvcm1hdCE9PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBpbnB1dCBjb25maWcgZm9ybWF0IG11c3QgYmUgUkdCQSBmb3IgSFRNTEltYWdlRWxlbWVudFwiKTtsLnRlbnNvckZvcm1hdD1cIlJHQkFcIixsLmhlaWdodD15LGwud2lkdGg9VH1lbHNlIGwudGVuc29yRm9ybWF0PVwiUkdCQVwiLGwuaGVpZ2h0PXksbC53aWR0aD1UO2IuZHJhd0ltYWdlKG4sMCwwKSxjPWIuZ2V0SW1hZ2VEYXRhKDAsMCxULHkpLmRhdGF9ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGFjY2VzcyBpbWFnZSBkYXRhXCIpfWVsc2UgaWYodSl7bGV0IGcsYjtpZih0IT09dm9pZCAwJiZ0LnJlc2l6ZWRXaWR0aCE9PXZvaWQgMCYmdC5yZXNpemVkSGVpZ2h0IT09dm9pZCAwPyhnPXQucmVzaXplZEhlaWdodCxiPXQucmVzaXplZFdpZHRoKTooZz1uLmhlaWdodCxiPW4ud2lkdGgpLHQhPT12b2lkIDAmJihsPXQpLGwuZm9ybWF0PVwiUkdCQVwiLGwuaGVpZ2h0PWcsbC53aWR0aD1iLHQhPT12b2lkIDApe2xldCB5PW0oKTt5LndpZHRoPWIseS5oZWlnaHQ9ZztsZXQgVD1oKHkpO2lmKFQhPW51bGwpVC5wdXRJbWFnZURhdGEobiwwLDApLGM9VC5nZXRJbWFnZURhdGEoMCwwLGIsZykuZGF0YTtlbHNlIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgYWNjZXNzIGltYWdlIGRhdGFcIil9ZWxzZSBjPW4uZGF0YX1lbHNlIGlmKG8pe2lmKHQ9PT12b2lkIDApdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgaW1hZ2UgY29uZmlnIHdpdGggZm9ybWF0IGZvciBJbWFnZWJpdG1hcFwiKTtsZXQgZz1tKCk7Zy53aWR0aD1uLndpZHRoLGcuaGVpZ2h0PW4uaGVpZ2h0O2xldCBiPWgoZyk7aWYoYiE9bnVsbCl7bGV0IHk9bi5oZWlnaHQsVD1uLndpZHRoO3JldHVybiBiLmRyYXdJbWFnZShuLDAsMCxULHkpLGM9Yi5nZXRJbWFnZURhdGEoMCwwLFQseSkuZGF0YSxsLmhlaWdodD15LGwud2lkdGg9VCxLdChjLGwpfWVsc2UgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBhY2Nlc3MgaW1hZ2UgZGF0YVwiKX1lbHNle2lmKGQpcmV0dXJuIG5ldyBQcm9taXNlKChnLGIpPT57bGV0IHk9bSgpLFQ9aCh5KTtpZighbnx8IVQpcmV0dXJuIGIoKTtsZXQgST1uZXcgSW1hZ2U7SS5jcm9zc09yaWdpbj1cIkFub255bW91c1wiLEkuc3JjPW4sSS5vbmxvYWQ9KCk9Pnt5LndpZHRoPUkud2lkdGgseS5oZWlnaHQ9SS5oZWlnaHQsVC5kcmF3SW1hZ2UoSSwwLDAseS53aWR0aCx5LmhlaWdodCk7bGV0IEQ9VC5nZXRJbWFnZURhdGEoMCwwLHkud2lkdGgseS5oZWlnaHQpO2wuaGVpZ2h0PXkuaGVpZ2h0LGwud2lkdGg9eS53aWR0aCxnKEt0KEQuZGF0YSxsKSl9fSk7dGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgZGF0YSBwcm92aWRlZCBpcyBub3Qgc3VwcG9ydGVkIC0gYWJvcnRlZCB0ZW5zb3IgY3JlYXRpb25cIil9aWYoYyE9PXZvaWQgMClyZXR1cm4gS3QoYyxsKTt0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBkYXRhIHByb3ZpZGVkIGlzIG5vdCBzdXBwb3J0ZWQgLSBhYm9ydGVkIHRlbnNvciBjcmVhdGlvblwiKX0sU3I9KG4sdCk9PntsZXR7d2lkdGg6YSxoZWlnaHQ6dSxkb3dubG9hZDpvLGRpc3Bvc2U6ZH09dCxjPVsxLHUsYSw0XTtyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwidGV4dHVyZVwiLHR5cGU6XCJmbG9hdDMyXCIsdGV4dHVyZTpuLGRpbXM6Yyxkb3dubG9hZDpvLGRpc3Bvc2U6ZH0pfSx2cj0obix0KT0+e2xldHtkYXRhVHlwZTphLGRpbXM6dSxkb3dubG9hZDpvLGRpc3Bvc2U6ZH09dDtyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwiZ3B1LWJ1ZmZlclwiLHR5cGU6YT8/XCJmbG9hdDMyXCIsZ3B1QnVmZmVyOm4sZGltczp1LGRvd25sb2FkOm8sZGlzcG9zZTpkfSl9LE9yPShuLHQpPT57bGV0e2RhdGFUeXBlOmEsZGltczp1LGRvd25sb2FkOm8sZGlzcG9zZTpkfT10O3JldHVybiBuZXcgUSh7bG9jYXRpb246XCJtbC10ZW5zb3JcIix0eXBlOmE/P1wiZmxvYXQzMlwiLG1sVGVuc29yOm4sZGltczp1LGRvd25sb2FkOm8sZGlzcG9zZTpkfSl9LEFyPShuLHQsYSk9Pm5ldyBRKHtsb2NhdGlvbjpcImNwdS1waW5uZWRcIix0eXBlOm4sZGF0YTp0LGRpbXM6YT8/W3QubGVuZ3RoXX0pfSk7dmFyIExlLFhlLEJyLExyLF9yPU4oKCk9PntcInVzZSBzdHJpY3RcIjtMZT1uZXcgTWFwKFtbXCJmbG9hdDMyXCIsRmxvYXQzMkFycmF5XSxbXCJ1aW50OFwiLFVpbnQ4QXJyYXldLFtcImludDhcIixJbnQ4QXJyYXldLFtcInVpbnQxNlwiLFVpbnQxNkFycmF5XSxbXCJpbnQxNlwiLEludDE2QXJyYXldLFtcImludDMyXCIsSW50MzJBcnJheV0sW1wiYm9vbFwiLFVpbnQ4QXJyYXldLFtcImZsb2F0NjRcIixGbG9hdDY0QXJyYXldLFtcInVpbnQzMlwiLFVpbnQzMkFycmF5XSxbXCJpbnQ0XCIsVWludDhBcnJheV0sW1widWludDRcIixVaW50OEFycmF5XV0pLFhlPW5ldyBNYXAoW1tGbG9hdDMyQXJyYXksXCJmbG9hdDMyXCJdLFtVaW50OEFycmF5LFwidWludDhcIl0sW0ludDhBcnJheSxcImludDhcIl0sW1VpbnQxNkFycmF5LFwidWludDE2XCJdLFtJbnQxNkFycmF5LFwiaW50MTZcIl0sW0ludDMyQXJyYXksXCJpbnQzMlwiXSxbRmxvYXQ2NEFycmF5LFwiZmxvYXQ2NFwiXSxbVWludDMyQXJyYXksXCJ1aW50MzJcIl1dKSxCcj0hMSxMcj0oKT0+e2lmKCFCcil7QnI9ITA7bGV0IG49dHlwZW9mIEJpZ0ludDY0QXJyYXk8XCJ1XCImJkJpZ0ludDY0QXJyYXkuZnJvbSx0PXR5cGVvZiBCaWdVaW50NjRBcnJheTxcInVcIiYmQmlnVWludDY0QXJyYXkuZnJvbSxhPWdsb2JhbFRoaXMuRmxvYXQxNkFycmF5LHU9dHlwZW9mIGE8XCJ1XCImJmEuZnJvbTtuJiYoTGUuc2V0KFwiaW50NjRcIixCaWdJbnQ2NEFycmF5KSxYZS5zZXQoQmlnSW50NjRBcnJheSxcImludDY0XCIpKSx0JiYoTGUuc2V0KFwidWludDY0XCIsQmlnVWludDY0QXJyYXkpLFhlLnNldChCaWdVaW50NjRBcnJheSxcInVpbnQ2NFwiKSksdT8oTGUuc2V0KFwiZmxvYXQxNlwiLGEpLFhlLnNldChhLFwiZmxvYXQxNlwiKSk6TGUuc2V0KFwiZmxvYXQxNlwiLFVpbnQxNkFycmF5KX19fSk7dmFyIFByLERyLFVyPU4oKCk9PntcInVzZSBzdHJpY3RcIjtjdCgpO1ByPW49PntsZXQgdD0xO2ZvcihsZXQgYT0wO2E8bi5sZW5ndGg7YSsrKXtsZXQgdT1uW2FdO2lmKHR5cGVvZiB1IT1cIm51bWJlclwifHwhTnVtYmVyLmlzU2FmZUludGVnZXIodSkpdGhyb3cgbmV3IFR5cGVFcnJvcihgZGltc1ske2F9XSBtdXN0IGJlIGFuIGludGVnZXIsIGdvdDogJHt1fWApO2lmKHU8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihgZGltc1ske2F9XSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGdvdDogJHt1fWApO3QqPXV9cmV0dXJuIHR9LERyPShuLHQpPT57c3dpdGNoKG4ubG9jYXRpb24pe2Nhc2VcImNwdVwiOnJldHVybiBuZXcgUShuLnR5cGUsbi5kYXRhLHQpO2Nhc2VcImNwdS1waW5uZWRcIjpyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwiY3B1LXBpbm5lZFwiLGRhdGE6bi5kYXRhLHR5cGU6bi50eXBlLGRpbXM6dH0pO2Nhc2VcInRleHR1cmVcIjpyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwidGV4dHVyZVwiLHRleHR1cmU6bi50ZXh0dXJlLHR5cGU6bi50eXBlLGRpbXM6dH0pO2Nhc2VcImdwdS1idWZmZXJcIjpyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwiZ3B1LWJ1ZmZlclwiLGdwdUJ1ZmZlcjpuLmdwdUJ1ZmZlcix0eXBlOm4udHlwZSxkaW1zOnR9KTtjYXNlXCJtbC10ZW5zb3JcIjpyZXR1cm4gbmV3IFEoe2xvY2F0aW9uOlwibWwtdGVuc29yXCIsbWxUZW5zb3I6bi5tbFRlbnNvcix0eXBlOm4udHlwZSxkaW1zOnR9KTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgdGVuc29yUmVzaGFwZTogdGVuc29yIGxvY2F0aW9uICR7bi5sb2NhdGlvbn0gaXMgbm90IHN1cHBvcnRlZGApfX19KTt2YXIgUSxjdD1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7RXIoKTtJcigpO19yKCk7VXIoKTtRPWNsYXNze2NvbnN0cnVjdG9yKHQsYSx1KXtMcigpO2xldCBvLGQ7aWYodHlwZW9mIHQ9PVwib2JqZWN0XCImJlwibG9jYXRpb25cImluIHQpc3dpdGNoKHRoaXMuZGF0YUxvY2F0aW9uPXQubG9jYXRpb24sbz10LnR5cGUsZD10LmRpbXMsdC5sb2NhdGlvbil7Y2FzZVwiY3B1LXBpbm5lZFwiOntsZXQgbD1MZS5nZXQobyk7aWYoIWwpdGhyb3cgbmV3IFR5cGVFcnJvcihgdW5zdXBwb3J0ZWQgdHlwZSBcIiR7b31cIiB0byBjcmVhdGUgdGVuc29yIGZyb20gcGlubmVkIGJ1ZmZlcmApO2lmKCEodC5kYXRhIGluc3RhbmNlb2YgbCkpdGhyb3cgbmV3IFR5cGVFcnJvcihgYnVmZmVyIHNob3VsZCBiZSBvZiB0eXBlICR7bC5uYW1lfWApO3RoaXMuY3B1RGF0YT10LmRhdGE7YnJlYWt9Y2FzZVwidGV4dHVyZVwiOntpZihvIT09XCJmbG9hdDMyXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihgdW5zdXBwb3J0ZWQgdHlwZSBcIiR7b31cIiB0byBjcmVhdGUgdGVuc29yIGZyb20gdGV4dHVyZWApO3RoaXMuZ3B1VGV4dHVyZURhdGE9dC50ZXh0dXJlLHRoaXMuZG93bmxvYWRlcj10LmRvd25sb2FkLHRoaXMuZGlzcG9zZXI9dC5kaXNwb3NlO2JyZWFrfWNhc2VcImdwdS1idWZmZXJcIjp7aWYobyE9PVwiZmxvYXQzMlwiJiZvIT09XCJmbG9hdDE2XCImJm8hPT1cImludDMyXCImJm8hPT1cImludDY0XCImJm8hPT1cInVpbnQzMlwiJiZvIT09XCJ1aW50OFwiJiZvIT09XCJib29sXCImJm8hPT1cInVpbnQ0XCImJm8hPT1cImludDRcIil0aHJvdyBuZXcgVHlwZUVycm9yKGB1bnN1cHBvcnRlZCB0eXBlIFwiJHtvfVwiIHRvIGNyZWF0ZSB0ZW5zb3IgZnJvbSBncHUgYnVmZmVyYCk7dGhpcy5ncHVCdWZmZXJEYXRhPXQuZ3B1QnVmZmVyLHRoaXMuZG93bmxvYWRlcj10LmRvd25sb2FkLHRoaXMuZGlzcG9zZXI9dC5kaXNwb3NlO2JyZWFrfWNhc2VcIm1sLXRlbnNvclwiOntpZihvIT09XCJmbG9hdDMyXCImJm8hPT1cImZsb2F0MTZcIiYmbyE9PVwiaW50MzJcIiYmbyE9PVwiaW50NjRcIiYmbyE9PVwidWludDMyXCImJm8hPT1cInVpbnQ2NFwiJiZvIT09XCJpbnQ4XCImJm8hPT1cInVpbnQ4XCImJm8hPT1cImJvb2xcIiYmbyE9PVwidWludDRcIiYmbyE9PVwiaW50NFwiKXRocm93IG5ldyBUeXBlRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGUgXCIke299XCIgdG8gY3JlYXRlIHRlbnNvciBmcm9tIE1MVGVuc29yYCk7dGhpcy5tbFRlbnNvckRhdGE9dC5tbFRlbnNvcix0aGlzLmRvd25sb2FkZXI9dC5kb3dubG9hZCx0aGlzLmRpc3Bvc2VyPXQuZGlzcG9zZTticmVha31kZWZhdWx0OnRocm93IG5ldyBFcnJvcihgVGVuc29yIGNvbnN0cnVjdG9yOiB1bnN1cHBvcnRlZCBsb2NhdGlvbiAnJHt0aGlzLmRhdGFMb2NhdGlvbn0nYCl9ZWxzZXtsZXQgbCxtO2lmKHR5cGVvZiB0PT1cInN0cmluZ1wiKWlmKG89dCxtPXUsdD09PVwic3RyaW5nXCIpe2lmKCFBcnJheS5pc0FycmF5KGEpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHN0cmluZyB0ZW5zb3IncyBkYXRhIG11c3QgYmUgYSBzdHJpbmcgYXJyYXkuXCIpO2w9YX1lbHNle2xldCBoPUxlLmdldCh0KTtpZihoPT09dm9pZCAwKXRocm93IG5ldyBUeXBlRXJyb3IoYFVuc3VwcG9ydGVkIHRlbnNvciB0eXBlOiAke3R9LmApO2lmKEFycmF5LmlzQXJyYXkoYSkpe2lmKHQ9PT1cImZsb2F0MTZcIiYmaD09PVVpbnQxNkFycmF5fHx0PT09XCJ1aW50NFwifHx0PT09XCJpbnQ0XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihgQ3JlYXRpbmcgYSAke3R9IHRlbnNvciBmcm9tIG51bWJlciBhcnJheSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgdXNlICR7aC5uYW1lfSBhcyBkYXRhLmApO3Q9PT1cInVpbnQ2NFwifHx0PT09XCJpbnQ2NFwiP2w9aC5mcm9tKGEsQmlnSW50KTpsPWguZnJvbShhKX1lbHNlIGlmKGEgaW5zdGFuY2VvZiBoKWw9YTtlbHNlIGlmKGEgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSlpZih0PT09XCJ1aW50OFwiKWw9VWludDhBcnJheS5mcm9tKGEpO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgVWludDhDbGFtcGVkQXJyYXkgdGVuc29yJ3MgZGF0YSBtdXN0IGJlIHR5cGUgb2YgdWludDhcIik7ZWxzZSBpZih0PT09XCJmbG9hdDE2XCImJmEgaW5zdGFuY2VvZiBVaW50MTZBcnJheSYmaCE9PVVpbnQxNkFycmF5KWw9bmV3IGdsb2JhbFRoaXMuRmxvYXQxNkFycmF5KGEuYnVmZmVyLGEuYnl0ZU9mZnNldCxhLmxlbmd0aCk7ZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKGBBICR7b30gdGVuc29yJ3MgZGF0YSBtdXN0IGJlIHR5cGUgb2YgJHtofWApfWVsc2UgaWYobT1hLEFycmF5LmlzQXJyYXkodCkpe2lmKHQubGVuZ3RoPT09MCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGVuc29yIHR5cGUgY2Fubm90IGJlIGluZmVycmVkIGZyb20gYW4gZW1wdHkgYXJyYXkuXCIpO2xldCBoPXR5cGVvZiB0WzBdO2lmKGg9PT1cInN0cmluZ1wiKW89XCJzdHJpbmdcIixsPXQ7ZWxzZSBpZihoPT09XCJib29sZWFuXCIpbz1cImJvb2xcIixsPVVpbnQ4QXJyYXkuZnJvbSh0KTtlbHNlIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgZWxlbWVudCB0eXBlIG9mIGRhdGEgYXJyYXk6ICR7aH0uYCl9ZWxzZSBpZih0IGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpbz1cInVpbnQ4XCIsbD1VaW50OEFycmF5LmZyb20odCk7ZWxzZXtsZXQgaD1YZS5nZXQodC5jb25zdHJ1Y3Rvcik7aWYoaD09PXZvaWQgMCl0aHJvdyBuZXcgVHlwZUVycm9yKGBVbnN1cHBvcnRlZCB0eXBlIGZvciB0ZW5zb3IgZGF0YTogJHt0LmNvbnN0cnVjdG9yfS5gKTtvPWgsbD10fWlmKG09PT12b2lkIDApbT1bbC5sZW5ndGhdO2Vsc2UgaWYoIUFycmF5LmlzQXJyYXkobSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgdGVuc29yJ3MgZGltcyBtdXN0IGJlIGEgbnVtYmVyIGFycmF5XCIpO2Q9bSx0aGlzLmNwdURhdGE9bCx0aGlzLmRhdGFMb2NhdGlvbj1cImNwdVwifWxldCBjPVByKGQpO2lmKHRoaXMuY3B1RGF0YSYmYyE9PXRoaXMuY3B1RGF0YS5sZW5ndGgmJiEoKG89PT1cInVpbnQ0XCJ8fG89PT1cImludDRcIikmJk1hdGguY2VpbChjLzIpPT09dGhpcy5jcHVEYXRhLmxlbmd0aCkpdGhyb3cgbmV3IEVycm9yKGBUZW5zb3IncyBzaXplKCR7Y30pIGRvZXMgbm90IG1hdGNoIGRhdGEgbGVuZ3RoKCR7dGhpcy5jcHVEYXRhLmxlbmd0aH0pLmApO3RoaXMudHlwZT1vLHRoaXMuZGltcz1kLHRoaXMuc2l6ZT1jfXN0YXRpYyBhc3luYyBmcm9tSW1hZ2UodCxhKXtyZXR1cm4gVHIodCxhKX1zdGF0aWMgZnJvbVRleHR1cmUodCxhKXtyZXR1cm4gU3IodCxhKX1zdGF0aWMgZnJvbUdwdUJ1ZmZlcih0LGEpe3JldHVybiB2cih0LGEpfXN0YXRpYyBmcm9tTUxUZW5zb3IodCxhKXtyZXR1cm4gT3IodCxhKX1zdGF0aWMgZnJvbVBpbm5lZEJ1ZmZlcih0LGEsdSl7cmV0dXJuIEFyKHQsYSx1KX10b0RhdGFVUkwodCl7cmV0dXJuIHlyKHRoaXMsdCl9dG9JbWFnZURhdGEodCl7cmV0dXJuIGdyKHRoaXMsdCl9Z2V0IGRhdGEoKXtpZih0aGlzLmVuc3VyZVZhbGlkKCksIXRoaXMuY3B1RGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YSBpcyBub3Qgb24gQ1BVLiBVc2UgYGdldERhdGEoKWAgdG8gZG93bmxvYWQgR1BVIGRhdGEgdG8gQ1BVLCBvciB1c2UgYHRleHR1cmVgIG9yIGBncHVCdWZmZXJgIHByb3BlcnR5IHRvIGFjY2VzcyB0aGUgR1BVIGRhdGEgZGlyZWN0bHkuXCIpO3JldHVybiB0aGlzLmNwdURhdGF9Z2V0IGxvY2F0aW9uKCl7cmV0dXJuIHRoaXMuZGF0YUxvY2F0aW9ufWdldCB0ZXh0dXJlKCl7aWYodGhpcy5lbnN1cmVWYWxpZCgpLCF0aGlzLmdwdVRleHR1cmVEYXRhKXRocm93IG5ldyBFcnJvcihcIlRoZSBkYXRhIGlzIG5vdCBzdG9yZWQgYXMgYSBXZWJHTCB0ZXh0dXJlLlwiKTtyZXR1cm4gdGhpcy5ncHVUZXh0dXJlRGF0YX1nZXQgZ3B1QnVmZmVyKCl7aWYodGhpcy5lbnN1cmVWYWxpZCgpLCF0aGlzLmdwdUJ1ZmZlckRhdGEpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGRhdGEgaXMgbm90IHN0b3JlZCBhcyBhIFdlYkdQVSBidWZmZXIuXCIpO3JldHVybiB0aGlzLmdwdUJ1ZmZlckRhdGF9Z2V0IG1sVGVuc29yKCl7aWYodGhpcy5lbnN1cmVWYWxpZCgpLCF0aGlzLm1sVGVuc29yRGF0YSl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZGF0YSBpcyBub3Qgc3RvcmVkIGFzIGEgV2ViTk4gTUxUZW5zb3IuXCIpO3JldHVybiB0aGlzLm1sVGVuc29yRGF0YX1hc3luYyBnZXREYXRhKHQpe3N3aXRjaCh0aGlzLmVuc3VyZVZhbGlkKCksdGhpcy5kYXRhTG9jYXRpb24pe2Nhc2VcImNwdVwiOmNhc2VcImNwdS1waW5uZWRcIjpyZXR1cm4gdGhpcy5kYXRhO2Nhc2VcInRleHR1cmVcIjpjYXNlXCJncHUtYnVmZmVyXCI6Y2FzZVwibWwtdGVuc29yXCI6e2lmKCF0aGlzLmRvd25sb2FkZXIpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGN1cnJlbnQgdGVuc29yIGlzIG5vdCBjcmVhdGVkIHdpdGggYSBzcGVjaWZpZWQgZGF0YSBkb3dubG9hZGVyLlwiKTtpZih0aGlzLmlzRG93bmxvYWRpbmcpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGN1cnJlbnQgdGVuc29yIGlzIGJlaW5nIGRvd25sb2FkZWQuXCIpO3RyeXt0aGlzLmlzRG93bmxvYWRpbmc9ITA7bGV0IGE9YXdhaXQgdGhpcy5kb3dubG9hZGVyKCk7cmV0dXJuIHRoaXMuZG93bmxvYWRlcj12b2lkIDAsdGhpcy5kYXRhTG9jYXRpb249XCJjcHVcIix0aGlzLmNwdURhdGE9YSx0JiZ0aGlzLmRpc3Bvc2VyJiYodGhpcy5kaXNwb3NlcigpLHRoaXMuZGlzcG9zZXI9dm9pZCAwKSxhfWZpbmFsbHl7dGhpcy5pc0Rvd25sb2FkaW5nPSExfX1kZWZhdWx0OnRocm93IG5ldyBFcnJvcihgY2Fubm90IGdldCBkYXRhIGZyb20gbG9jYXRpb246ICR7dGhpcy5kYXRhTG9jYXRpb259YCl9fWRpc3Bvc2UoKXtpZih0aGlzLmlzRG93bmxvYWRpbmcpdGhyb3cgbmV3IEVycm9yKFwiVGhlIGN1cnJlbnQgdGVuc29yIGlzIGJlaW5nIGRvd25sb2FkZWQuXCIpO3RoaXMuZGlzcG9zZXImJih0aGlzLmRpc3Bvc2VyKCksdGhpcy5kaXNwb3Nlcj12b2lkIDApLHRoaXMuY3B1RGF0YT12b2lkIDAsdGhpcy5ncHVUZXh0dXJlRGF0YT12b2lkIDAsdGhpcy5ncHVCdWZmZXJEYXRhPXZvaWQgMCx0aGlzLm1sVGVuc29yRGF0YT12b2lkIDAsdGhpcy5kb3dubG9hZGVyPXZvaWQgMCx0aGlzLmlzRG93bmxvYWRpbmc9dm9pZCAwLHRoaXMuZGF0YUxvY2F0aW9uPVwibm9uZVwifWVuc3VyZVZhbGlkKCl7aWYodGhpcy5kYXRhTG9jYXRpb249PT1cIm5vbmVcIil0aHJvdyBuZXcgRXJyb3IoXCJUaGUgdGVuc29yIGlzIGRpc3Bvc2VkLlwiKX1yZXNoYXBlKHQpe2lmKHRoaXMuZW5zdXJlVmFsaWQoKSx0aGlzLmRvd25sb2FkZXJ8fHRoaXMuZGlzcG9zZXIpdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlc2hhcGUgYSB0ZW5zb3IgdGhhdCBvd25zIEdQVSByZXNvdXJjZS5cIik7cmV0dXJuIERyKHRoaXMsdCl9fX0pO3ZhciBkZSxlbj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7Y3QoKTtkZT1RfSk7dmFyIHhyLE1yLF9lLFBlLERlLFVlLHRuPU4oKCk9PntcInVzZSBzdHJpY3RcIjtadCgpO3hyPShuLHQpPT57KHR5cGVvZiBKLnRyYWNlPlwidVwiPyFKLndhc20udHJhY2U6IUoudHJhY2UpfHxjb25zb2xlLnRpbWVTdGFtcChgJHtufTo6T1JUOjoke3R9YCl9LE1yPShuLHQpPT57bGV0IGE9bmV3IEVycm9yKCkuc3RhY2s/LnNwbGl0KC9cXHJcXG58XFxyfFxcbi9nKXx8W10sdT0hMTtmb3IobGV0IG89MDtvPGEubGVuZ3RoO28rKyl7aWYodSYmIWFbb10uaW5jbHVkZXMoXCJUUkFDRV9GVU5DXCIpKXtsZXQgZD1gRlVOQ18ke259Ojoke2Fbb10udHJpbSgpLnNwbGl0KFwiIFwiKVsxXX1gO3QmJihkKz1gOjoke3R9YCkseHIoXCJDUFVcIixkKTtyZXR1cm59YVtvXS5pbmNsdWRlcyhcIlRSQUNFX0ZVTkNcIikmJih1PSEwKX19LF9lPW49PnsodHlwZW9mIEoudHJhY2U+XCJ1XCI/IUoud2FzbS50cmFjZTohSi50cmFjZSl8fE1yKFwiQkVHSU5cIixuKX0sUGU9bj0+eyh0eXBlb2YgSi50cmFjZT5cInVcIj8hSi53YXNtLnRyYWNlOiFKLnRyYWNlKXx8TXIoXCJFTkRcIixuKX0sRGU9bj0+eyh0eXBlb2YgSi50cmFjZT5cInVcIj8hSi53YXNtLnRyYWNlOiFKLnRyYWNlKXx8Y29uc29sZS50aW1lKGBPUlQ6OiR7bn1gKX0sVWU9bj0+eyh0eXBlb2YgSi50cmFjZT5cInVcIj8hSi53YXNtLnRyYWNlOiFKLnRyYWNlKXx8Y29uc29sZS50aW1lRW5kKGBPUlQ6OiR7bn1gKX19KTt2YXIgbHQsQ3I9TigoKT0+e1widXNlIHN0cmljdFwiO1F0KCk7ZW4oKTt0bigpO2x0PWNsYXNzIG57Y29uc3RydWN0b3IodCl7dGhpcy5oYW5kbGVyPXR9YXN5bmMgcnVuKHQsYSx1KXtfZSgpLERlKFwiSW5mZXJlbmNlU2Vzc2lvbi5ydW5cIik7bGV0IG89e30sZD17fTtpZih0eXBlb2YgdCE9XCJvYmplY3RcInx8dD09PW51bGx8fHQgaW5zdGFuY2VvZiBkZXx8QXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2ZlZWRzJyBtdXN0IGJlIGFuIG9iamVjdCB0aGF0IHVzZSBpbnB1dCBuYW1lcyBhcyBrZXlzIGFuZCBPbm54VmFsdWUgYXMgY29ycmVzcG9uZGluZyB2YWx1ZXMuXCIpO2xldCBjPSEwO2lmKHR5cGVvZiBhPT1cIm9iamVjdFwiKXtpZihhPT09bnVsbCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBhcmd1bWVudFsxXTogY2Fubm90IGJlIG51bGwuXCIpO2lmKGEgaW5zdGFuY2VvZiBkZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2ZldGNoZXMnIGNhbm5vdCBiZSBhIFRlbnNvclwiKTtpZihBcnJheS5pc0FycmF5KGEpKXtpZihhLmxlbmd0aD09PTApdGhyb3cgbmV3IFR5cGVFcnJvcihcIidmZXRjaGVzJyBjYW5ub3QgYmUgYW4gZW1wdHkgYXJyYXkuXCIpO2M9ITE7Zm9yKGxldCBoIG9mIGEpe2lmKHR5cGVvZiBoIT1cInN0cmluZ1wiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInZmV0Y2hlcycgbXVzdCBiZSBhIHN0cmluZyBhcnJheSBvciBhbiBvYmplY3QuXCIpO2lmKHRoaXMub3V0cHV0TmFtZXMuaW5kZXhPZihoKT09PS0xKXRocm93IG5ldyBSYW5nZUVycm9yKGAnZmV0Y2hlcycgY29udGFpbnMgaW52YWxpZCBvdXRwdXQgbmFtZTogJHtofS5gKTtvW2hdPW51bGx9aWYodHlwZW9mIHU9PVwib2JqZWN0XCImJnUhPT1udWxsKWQ9dTtlbHNlIGlmKHR5cGVvZiB1PFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInb3B0aW9ucycgbXVzdCBiZSBhbiBvYmplY3QuXCIpfWVsc2V7bGV0IGg9ITEsZz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhKTtmb3IobGV0IGIgb2YgdGhpcy5vdXRwdXROYW1lcylpZihnLmluZGV4T2YoYikhPT0tMSl7bGV0IHk9YVtiXTsoeT09PW51bGx8fHkgaW5zdGFuY2VvZiBkZSkmJihoPSEwLGM9ITEsb1tiXT15KX1pZihoKXtpZih0eXBlb2YgdT09XCJvYmplY3RcIiYmdSE9PW51bGwpZD11O2Vsc2UgaWYodHlwZW9mIHU8XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidvcHRpb25zJyBtdXN0IGJlIGFuIG9iamVjdC5cIil9ZWxzZSBkPWF9fWVsc2UgaWYodHlwZW9mIGE8XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgYXJndW1lbnRbMV06IG11c3QgYmUgJ2ZldGNoZXMnIG9yICdvcHRpb25zJy5cIik7Zm9yKGxldCBoIG9mIHRoaXMuaW5wdXROYW1lcylpZih0eXBlb2YgdFtoXT5cInVcIil0aHJvdyBuZXcgRXJyb3IoYGlucHV0ICcke2h9JyBpcyBtaXNzaW5nIGluICdmZWVkcycuYCk7aWYoYylmb3IobGV0IGggb2YgdGhpcy5vdXRwdXROYW1lcylvW2hdPW51bGw7bGV0IGw9YXdhaXQgdGhpcy5oYW5kbGVyLnJ1bih0LG8sZCksbT17fTtmb3IobGV0IGggaW4gbClpZihPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChsLGgpKXtsZXQgZz1sW2hdO2cgaW5zdGFuY2VvZiBkZT9tW2hdPWc6bVtoXT1uZXcgZGUoZy50eXBlLGcuZGF0YSxnLmRpbXMpfXJldHVybiBVZShcIkluZmVyZW5jZVNlc3Npb24ucnVuXCIpLFBlKCksbX1hc3luYyByZWxlYXNlKCl7cmV0dXJuIHRoaXMuaGFuZGxlci5kaXNwb3NlKCl9c3RhdGljIGFzeW5jIGNyZWF0ZSh0LGEsdSxvKXtfZSgpLERlKFwiSW5mZXJlbmNlU2Vzc2lvbi5jcmVhdGVcIik7bGV0IGQsYz17fTtpZih0eXBlb2YgdD09XCJzdHJpbmdcIil7aWYoZD10LHR5cGVvZiBhPT1cIm9iamVjdFwiJiZhIT09bnVsbCljPWE7ZWxzZSBpZih0eXBlb2YgYTxcInVcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ29wdGlvbnMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKX1lbHNlIGlmKHQgaW5zdGFuY2VvZiBVaW50OEFycmF5KXtpZihkPXQsdHlwZW9mIGE9PVwib2JqZWN0XCImJmEhPT1udWxsKWM9YTtlbHNlIGlmKHR5cGVvZiBhPFwidVwiKXRocm93IG5ldyBUeXBlRXJyb3IoXCInb3B0aW9ucycgbXVzdCBiZSBhbiBvYmplY3QuXCIpfWVsc2UgaWYodCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfHx0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXI8XCJ1XCImJnQgaW5zdGFuY2VvZiBTaGFyZWRBcnJheUJ1ZmZlcil7bGV0IGc9dCxiPTAseT10LmJ5dGVMZW5ndGg7aWYodHlwZW9mIGE9PVwib2JqZWN0XCImJmEhPT1udWxsKWM9YTtlbHNlIGlmKHR5cGVvZiBhPT1cIm51bWJlclwiKXtpZihiPWEsIU51bWJlci5pc1NhZmVJbnRlZ2VyKGIpKXRocm93IG5ldyBSYW5nZUVycm9yKFwiJ2J5dGVPZmZzZXQnIG11c3QgYmUgYW4gaW50ZWdlci5cIik7aWYoYjwwfHxiPj1nLmJ5dGVMZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoYCdieXRlT2Zmc2V0JyBpcyBvdXQgb2YgcmFuZ2UgWzAsICR7Zy5ieXRlTGVuZ3RofSkuYCk7aWYoeT10LmJ5dGVMZW5ndGgtYix0eXBlb2YgdT09XCJudW1iZXJcIil7aWYoeT11LCFOdW1iZXIuaXNTYWZlSW50ZWdlcih5KSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidieXRlTGVuZ3RoJyBtdXN0IGJlIGFuIGludGVnZXIuXCIpO2lmKHk8PTB8fGIreT5nLmJ5dGVMZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoYCdieXRlTGVuZ3RoJyBpcyBvdXQgb2YgcmFuZ2UgKDAsICR7Zy5ieXRlTGVuZ3RoLWJ9XS5gKTtpZih0eXBlb2Ygbz09XCJvYmplY3RcIiYmbyE9PW51bGwpYz1vO2Vsc2UgaWYodHlwZW9mIG88XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidvcHRpb25zJyBtdXN0IGJlIGFuIG9iamVjdC5cIil9ZWxzZSBpZih0eXBlb2YgdTxcInVcIil0aHJvdyBuZXcgVHlwZUVycm9yKFwiJ2J5dGVMZW5ndGgnIG11c3QgYmUgYSBudW1iZXIuXCIpfWVsc2UgaWYodHlwZW9mIGE8XCJ1XCIpdGhyb3cgbmV3IFR5cGVFcnJvcihcIidvcHRpb25zJyBtdXN0IGJlIGFuIG9iamVjdC5cIik7ZD1uZXcgVWludDhBcnJheShnLGIseSl9ZWxzZSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBhcmd1bWVudFswXTogbXVzdCBiZSAncGF0aCcgb3IgJ2J1ZmZlcicuXCIpO2xldFtsLG1dPWF3YWl0IGRyKGMpLGg9YXdhaXQgbC5jcmVhdGVJbmZlcmVuY2VTZXNzaW9uSGFuZGxlcihkLG0pO3JldHVybiBVZShcIkluZmVyZW5jZVNlc3Npb24uY3JlYXRlXCIpLFBlKCksbmV3IG4oaCl9c3RhcnRQcm9maWxpbmcoKXt0aGlzLmhhbmRsZXIuc3RhcnRQcm9maWxpbmcoKX1lbmRQcm9maWxpbmcoKXt0aGlzLmhhbmRsZXIuZW5kUHJvZmlsaW5nKCl9Z2V0IGlucHV0TmFtZXMoKXtyZXR1cm4gdGhpcy5oYW5kbGVyLmlucHV0TmFtZXN9Z2V0IG91dHB1dE5hbWVzKCl7cmV0dXJuIHRoaXMuaGFuZGxlci5vdXRwdXROYW1lc31nZXQgaW5wdXRNZXRhZGF0YSgpe3JldHVybiB0aGlzLmhhbmRsZXIuaW5wdXRNZXRhZGF0YX1nZXQgb3V0cHV0TWV0YWRhdGEoKXtyZXR1cm4gdGhpcy5oYW5kbGVyLm91dHB1dE1ldGFkYXRhfX19KTt2YXIgdHMsUnI9TigoKT0+e1widXNlIHN0cmljdFwiO0NyKCk7dHM9bHR9KTt2YXIgRnI9TigoKT0+e1widXNlIHN0cmljdFwifSk7dmFyIE5yPU4oKCk9PntcInVzZSBzdHJpY3RcIn0pO3ZhciBrcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCJ9KTt2YXIgV3I9TigoKT0+e1widXNlIHN0cmljdFwifSk7dmFyIG5uPXt9O3V0KG5uLHtJbmZlcmVuY2VTZXNzaW9uOigpPT50cyxUUkFDRTooKT0+eHIsVFJBQ0VfRVZFTlRfQkVHSU46KCk9PkRlLFRSQUNFX0VWRU5UX0VORDooKT0+VWUsVFJBQ0VfRlVOQ19CRUdJTjooKT0+X2UsVFJBQ0VfRlVOQ19FTkQ6KCk9PlBlLFRlbnNvcjooKT0+ZGUsZW52OigpPT5ZLHJlZ2lzdGVyQmFja2VuZDooKT0+cWV9KTt2YXIgVGU9TigoKT0+e1widXNlIHN0cmljdFwiO3ByKCk7YnIoKTtScigpO2VuKCk7RnIoKTtOcigpO3RuKCk7a3IoKTtXcigpfSk7dmFyIGR0PU4oKCk9PntcInVzZSBzdHJpY3RcIn0pO3ZhciBIcj17fTt1dChIcix7ZGVmYXVsdDooKT0+bnN9KTt2YXIgJHIsenIsbnMsanI9TigoKT0+e1widXNlIHN0cmljdFwiO3JuKCk7eGUoKTtwdCgpOyRyPVwib3J0LXdhc20tcHJveHktd29ya2VyXCIsenI9Z2xvYmFsVGhpcy5zZWxmPy5uYW1lPT09JHI7enImJihzZWxmLm9ubWVzc2FnZT1uPT57bGV0e3R5cGU6dCxpbjphfT1uLmRhdGE7dHJ5e3N3aXRjaCh0KXtjYXNlXCJpbml0LXdhc21cIjptdChhLndhc20pLnRoZW4oKCk9PntodChhKS50aGVuKCgpPT57cG9zdE1lc3NhZ2Uoe3R5cGU6dH0pfSx1PT57cG9zdE1lc3NhZ2Uoe3R5cGU6dCxlcnI6dX0pfSl9LHU9Pntwb3N0TWVzc2FnZSh7dHlwZTp0LGVycjp1fSl9KTticmVhaztjYXNlXCJpbml0LWVwXCI6e2xldHtlcE5hbWU6dSxlbnY6b309YTt3dChvLHUpLnRoZW4oKCk9Pntwb3N0TWVzc2FnZSh7dHlwZTp0fSl9LGQ9Pntwb3N0TWVzc2FnZSh7dHlwZTp0LGVycjpkfSl9KTticmVha31jYXNlXCJjb3B5LWZyb21cIjp7bGV0e2J1ZmZlcjp1fT1hLG89UWUodSk7cG9zdE1lc3NhZ2Uoe3R5cGU6dCxvdXQ6b30pO2JyZWFrfWNhc2VcImNyZWF0ZVwiOntsZXR7bW9kZWw6dSxvcHRpb25zOm99PWE7YnQodSxvKS50aGVuKGQ9Pntwb3N0TWVzc2FnZSh7dHlwZTp0LG91dDpkfSl9LGQ9Pntwb3N0TWVzc2FnZSh7dHlwZTp0LGVycjpkfSl9KTticmVha31jYXNlXCJyZWxlYXNlXCI6eXQoYSkscG9zdE1lc3NhZ2Uoe3R5cGU6dH0pO2JyZWFrO2Nhc2VcInJ1blwiOntsZXR7c2Vzc2lvbklkOnUsaW5wdXRJbmRpY2VzOm8saW5wdXRzOmQsb3V0cHV0SW5kaWNlczpjLG9wdGlvbnM6bH09YTtndCh1LG8sZCxjLG5ldyBBcnJheShjLmxlbmd0aCkuZmlsbChudWxsKSxsKS50aGVuKG09PnttLnNvbWUoaD0+aFszXSE9PVwiY3B1XCIpP3Bvc3RNZXNzYWdlKHt0eXBlOnQsZXJyOlwiUHJveHkgZG9lcyBub3Qgc3VwcG9ydCBub24tY3B1IHRlbnNvciBsb2NhdGlvbi5cIn0pOnBvc3RNZXNzYWdlKHt0eXBlOnQsb3V0Om19LFR0KFsuLi5kLC4uLm1dKSl9LG09Pntwb3N0TWVzc2FnZSh7dHlwZTp0LGVycjptfSl9KTticmVha31jYXNlXCJlbmQtcHJvZmlsaW5nXCI6RXQoYSkscG9zdE1lc3NhZ2Uoe3R5cGU6dH0pO2JyZWFrO2RlZmF1bHQ6fX1jYXRjaCh1KXtwb3N0TWVzc2FnZSh7dHlwZTp0LGVycjp1fSl9fSk7bnM9enI/bnVsbDpuPT5uZXcgV29ya2VyKG4/P29lLHt0eXBlOlwibW9kdWxlXCIsbmFtZTokcn0pfSk7dmFyIFlyPXt9O3V0KFlyLHtkZWZhdWx0OigpPT5yc30pO2FzeW5jIGZ1bmN0aW9uIFZyKG49e30pe3ZhciB0PW4sYT0hIWdsb2JhbFRoaXMud2luZG93LHU9ISFnbG9iYWxUaGlzLldvcmtlckdsb2JhbFNjb3BlLG89dSYmc2VsZi5uYW1lPy5zdGFydHNXaXRoKFwiZW0tcHRocmVhZFwiKTt0Lm1vdW50RXh0ZXJuYWxEYXRhPShlLHIpPT57ZS5zdGFydHNXaXRoKFwiLi9cIikmJihlPWUuc3Vic3RyaW5nKDIpKSwodC5SYnx8KHQuUmI9bmV3IE1hcCkpLnNldChlLHIpfSx0LnVubW91bnRFeHRlcm5hbERhdGE9KCk9PntkZWxldGUgdC5SYn0sZ2xvYmFsVGhpcy5TaGFyZWRBcnJheUJ1ZmZlcj8/bmV3IFdlYkFzc2VtYmx5Lk1lbW9yeSh7aW5pdGlhbDowLG1heGltdW06MCxzaGFyZWQ6ITB9KS5idWZmZXIuY29uc3RydWN0b3I7dmFyIGQsYyxsPShlLHIpPT57dGhyb3cgcn0sbT1pbXBvcnQubWV0YS51cmwsaD1cIlwiO2lmKGF8fHUpe3RyeXtoPW5ldyBVUkwoXCIuXCIsbSkuaHJlZn1jYXRjaHt9dSYmKGM9ZT0+e3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyZXR1cm4gci5vcGVuKFwiR0VUXCIsZSwhMSksci5yZXNwb25zZVR5cGU9XCJhcnJheWJ1ZmZlclwiLHIuc2VuZChudWxsKSxuZXcgVWludDhBcnJheShyLnJlc3BvbnNlKX0pLGQ9YXN5bmMgZT0+e2lmKGsoZSkpcmV0dXJuIG5ldyBQcm9taXNlKChpLHMpPT57dmFyIGY9bmV3IFhNTEh0dHBSZXF1ZXN0O2Yub3BlbihcIkdFVFwiLGUsITApLGYucmVzcG9uc2VUeXBlPVwiYXJyYXlidWZmZXJcIixmLm9ubG9hZD0oKT0+e2Yuc3RhdHVzPT0yMDB8fGYuc3RhdHVzPT0wJiZmLnJlc3BvbnNlP2koZi5yZXNwb25zZSk6cyhmLnN0YXR1cyl9LGYub25lcnJvcj1zLGYuc2VuZChudWxsKX0pO3ZhciByPWF3YWl0IGZldGNoKGUse2NyZWRlbnRpYWxzOlwic2FtZS1vcmlnaW5cIn0pO2lmKHIub2spcmV0dXJuIHIuYXJyYXlCdWZmZXIoKTt0aHJvdyBFcnJvcihyLnN0YXR1cytcIiA6IFwiK3IudXJsKX19dmFyIGcsYix5LFQsSSxELHo9Y29uc29sZS5sb2cuYmluZChjb25zb2xlKSx2PWNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKSxPPXosRj12LF89ITEsaz1lPT5lLnN0YXJ0c1dpdGgoXCJmaWxlOi8vXCIpO2Z1bmN0aW9uIHcoKXtnZS5idWZmZXIhPWouYnVmZmVyJiZlZSgpfWlmKG8pe2xldCBlPWZ1bmN0aW9uKHIpe3RyeXt2YXIgaT1yLmRhdGEscz1pLlBiO2lmKHM9PT1cImxvYWRcIil7bGV0IGY9W107c2VsZi5vbm1lc3NhZ2U9cD0+Zi5wdXNoKHApLEQ9KCk9Pntwb3N0TWVzc2FnZSh7UGI6XCJsb2FkZWRcIn0pO2ZvcihsZXQgcCBvZiBmKWUocCk7c2VsZi5vbm1lc3NhZ2U9ZX07Zm9yKGxldCBwIG9mIGkuWmIpdFtwXSYmIXRbcF0ucHJveHl8fCh0W3BdPSguLi5FKT0+e3Bvc3RNZXNzYWdlKHtQYjpcImNhbGxIYW5kbGVyXCIsWWI6cCxhcmdzOkV9KX0scD09XCJwcmludFwiJiYoTz10W3BdKSxwPT1cInByaW50RXJyXCImJihGPXRbcF0pKTtnZT1pLmRjLGVlKCksYj1pLmVjLFV0KCksaXQoKX1lbHNlIGlmKHM9PT1cInJ1blwiKXsoZnVuY3Rpb24oZil7dmFyIHA9KHcoKSxXKVtmKzUyPj4+Mj4+PjBdO2Y9KHcoKSxXKVtmKzU2Pj4+Mj4+PjBdLHNyKHAscC1mKSxQKHApfSkoaS5PYiksenQoaS5PYiwwLDAsMSwwLDApLHduKCksRnQoaS5PYiksWnx8PSEwO3RyeXtBbyhpLmJjLGkuVGIpfWNhdGNoKGYpe2lmKGYhPVwidW53aW5kXCIpdGhyb3cgZn19ZWxzZSBpLnRhcmdldCE9PVwic2V0aW1tZWRpYXRlXCImJihzPT09XCJjaGVja01haWxib3hcIj9aJiZydCgpOnMmJihGKGB3b3JrZXI6IHJlY2VpdmVkIHVua25vd24gY29tbWFuZCAke3N9YCksRihpKSkpfWNhdGNoKGYpe3Rocm93IHRyKCksZn19O3ZhciBTcz1lLFo9ITE7c2VsZi5vbnVuaGFuZGxlZHJlamVjdGlvbj1yPT57dGhyb3cgci5yZWFzb258fHJ9LHNlbGYub25tZXNzYWdlPWV9dmFyIGosbmUscGUsQixXLHJlLG1lLEEsSyxqZT0hMTtmdW5jdGlvbiBlZSgpe3ZhciBlPWdlLmJ1ZmZlcjt0LkhFQVA4PWo9bmV3IEludDhBcnJheShlKSxwZT1uZXcgSW50MTZBcnJheShlKSx0LkhFQVBVOD1uZT1uZXcgVWludDhBcnJheShlKSxuZXcgVWludDE2QXJyYXkoZSksdC5IRUFQMzI9Qj1uZXcgSW50MzJBcnJheShlKSx0LkhFQVBVMzI9Vz1uZXcgVWludDMyQXJyYXkoZSkscmU9bmV3IEZsb2F0MzJBcnJheShlKSxtZT1uZXcgRmxvYXQ2NEFycmF5KGUpLEE9bmV3IEJpZ0ludDY0QXJyYXkoZSksbmV3IEJpZ1VpbnQ2NEFycmF5KGUpfWZ1bmN0aW9uIGhlKCl7amU9ITAsbz9EKCk6RWUuVGEoKX1mdW5jdGlvbiBIKGUpe3Rocm93IEYoZT1cIkFib3J0ZWQoXCIrZStcIilcIiksXz0hMCxlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoZStcIi4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby5cIiksST8uKGUpLGV9ZnVuY3Rpb24gcSgpe3JldHVybnthOntSOmZhLGY6SW8sdzpCbyxlOkxvLGs6X28sZzpQbyxTOkRvLGI6VW8sRzp4byx0YTp2bixqOk1vLEw6SW4sSmE6Qm4scGE6TG4scmE6X24sS2E6UG4sSGE6RG4sQWE6VW4sR2E6eG4sWTpNbixxYTpDbixuYTpSbixJYTpGbixvYTpObixQYTpDbyxEYTpSbyxsYTpObyx1YTprbyxpYTpXbyxUOkdvLENhOkZ0LE1hOiRvLHhhOnpvLHlhOkhvLHphOmpvLHZhOiRuLHdhOnpuLGphOkhuLFJhOllvLE9hOlhvLFY6UW8sVTpabyxOYTpKbyxGOktvLExhOmVhLG1hOnRhLHU6Vm8sSDpuYSxROmF0LGthOm9hLGFhOnJhLFNhOmFhLEVhOlluLEZhOkpuLHNhOnllLEk6cW4sWDpYbixCYTpRbixXOlpuLF86amEsTTpXYSwkOkhhLE46a2EsdjpQYSxjOnBhLG06bGEsbjpjYSxxOnZhLGJhOlJhLHg6QmEsbzp3YSxPOkZhLEQ6R2EsSjpDYSxjYTpNYSxkYTp4YSxBOk9hLFA6VWEsZWE6RGEsejpMYSxFOk5hLGQ6ZGEscjpoYSxpOm1hLFo6VmEsbDp5YSxwOmdhLHM6YmEsdDpFYSx5OkFhLGZhOl9hLEI6JGEsSzpJYSxDOnphLGdhOlNhLGhhOlRhLGg6aWEsYTpnZSxRYTpWfX19YXN5bmMgZnVuY3Rpb24gVXQoKXtmdW5jdGlvbiBlKHMsZil7cmV0dXJuIEVlPXMuZXhwb3J0cyxFZT1mdW5jdGlvbigpe3ZhciBwPUVlLEU9eD0+KCk9PngoKT4+PjAsUz14PT5SPT54KFIpPj4+MDtyZXR1cm4ocD1PYmplY3QuYXNzaWduKHt9LHApKS5zYj1FKHAuc2IpLHAudWI9UyhwLnViKSxwLkliPVMocC5JYikscC5KYj1FKHAuSmIpLHAuTmI9UyhwLk5iKSxwfSgpLG1uLnB1c2goRWUudmIpLHM9RWUsdC5fT3J0SW5pdD1zLlVhLHQuX09ydEdldExhc3RFcnJvcj1zLlZhLHQuX09ydENyZWF0ZVNlc3Npb25PcHRpb25zPXMuV2EsdC5fT3J0QXBwZW5kRXhlY3V0aW9uUHJvdmlkZXI9cy5YYSx0Ll9PcnRBZGRGcmVlRGltZW5zaW9uT3ZlcnJpZGU9cy5ZYSx0Ll9PcnRBZGRTZXNzaW9uQ29uZmlnRW50cnk9cy5aYSx0Ll9PcnRSZWxlYXNlU2Vzc2lvbk9wdGlvbnM9cy5fYSx0Ll9PcnRDcmVhdGVTZXNzaW9uPXMuJGEsdC5fT3J0UmVsZWFzZVNlc3Npb249cy5hYix0Ll9PcnRHZXRJbnB1dE91dHB1dENvdW50PXMuYmIsdC5fT3J0R2V0SW5wdXRPdXRwdXRNZXRhZGF0YT1zLmNiLHQuX09ydEZyZWU9cy5kYix0Ll9PcnRDcmVhdGVUZW5zb3I9cy5lYix0Ll9PcnRHZXRUZW5zb3JEYXRhPXMuZmIsdC5fT3J0UmVsZWFzZVRlbnNvcj1zLmdiLHQuX09ydENyZWF0ZVJ1bk9wdGlvbnM9cy5oYix0Ll9PcnRBZGRSdW5Db25maWdFbnRyeT1zLmliLHQuX09ydFJlbGVhc2VSdW5PcHRpb25zPXMuamIsdC5fT3J0Q3JlYXRlQmluZGluZz1zLmtiLHQuX09ydEJpbmRJbnB1dD1zLmxiLHQuX09ydEJpbmRPdXRwdXQ9cy5tYix0Ll9PcnRDbGVhckJvdW5kT3V0cHV0cz1zLm5iLHQuX09ydFJlbGVhc2VCaW5kaW5nPXMub2IsdC5fT3J0UnVuV2l0aEJpbmRpbmc9cy5wYix0Ll9PcnRSdW49cy5xYix0Ll9PcnRFbmRQcm9maWxpbmc9cy5yYixzdD1zLnNiLEtuPXQuX2ZyZWU9cy50Yixlcj10Ll9tYWxsb2M9cy51Yix6dD1zLnhiLHRyPXMueWIsbnI9cy56Yixycj1zLkFiLEh0PXMuQmIsb3I9cy5DYixhcj1zLkRiLE09cy5FYixKZT1zLkZiLHNyPXMuR2IsUD1zLkhiLGp0PXMuSWIsVT1zLkpiLGlyPXMuS2IsVnQ9cy5MYix1cj1zLk1iLGZyPXMuTmIsY3I9cy53YixiPWYsRWV9dmFyIHIsaT1xKCk7cmV0dXJuIHQuaW5zdGFudGlhdGVXYXNtP25ldyBQcm9taXNlKHM9Pnt0Lmluc3RhbnRpYXRlV2FzbShpLChmLHApPT57cyhlKGYscCkpfSl9KTpvP2UobmV3IFdlYkFzc2VtYmx5Lkluc3RhbmNlKGIscSgpKSxiKTooSz8/PXQubG9jYXRlRmlsZT90LmxvY2F0ZUZpbGU/dC5sb2NhdGVGaWxlKFwib3J0LXdhc20tc2ltZC10aHJlYWRlZC53YXNtXCIsaCk6aCtcIm9ydC13YXNtLXNpbWQtdGhyZWFkZWQud2FzbVwiOm5ldyBVUkwoXCJvcnQtd2FzbS1zaW1kLXRocmVhZGVkLndhc21cIixpbXBvcnQubWV0YS51cmwpLmhyZWYscj1hd2FpdCBhc3luYyBmdW5jdGlvbihzKXt2YXIgZj1LO2lmKCFnJiYhayhmKSl0cnl7dmFyIHA9ZmV0Y2goZix7Y3JlZGVudGlhbHM6XCJzYW1lLW9yaWdpblwifSk7cmV0dXJuIGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHAscyl9Y2F0Y2goRSl7Rihgd2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICR7RX1gKSxGKFwiZmFsbGluZyBiYWNrIHRvIEFycmF5QnVmZmVyIGluc3RhbnRpYXRpb25cIil9cmV0dXJuIGFzeW5jIGZ1bmN0aW9uKEUsUyl7dHJ5e3ZhciB4PWF3YWl0IGFzeW5jIGZ1bmN0aW9uKFIpe2lmKCFnKXRyeXt2YXIgWD1hd2FpdCBkKFIpO3JldHVybiBuZXcgVWludDhBcnJheShYKX1jYXRjaHt9aWYoUj09SyYmZylSPW5ldyBVaW50OEFycmF5KGcpO2Vsc2V7aWYoIWMpdGhyb3dcImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkXCI7Uj1jKFIpfXJldHVybiBSfShFKTtyZXR1cm4gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoeCxTKX1jYXRjaChSKXtGKGBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAke1J9YCksSChSKX19KGYscyl9KGkpLGUoci5pbnN0YW5jZSxyLm1vZHVsZSkpfWNsYXNzIFNle25hbWU9XCJFeGl0U3RhdHVzXCI7Y29uc3RydWN0b3Iocil7dGhpcy5tZXNzYWdlPWBQcm9ncmFtIHRlcm1pbmF0ZWQgd2l0aCBleGl0KCR7cn0pYCx0aGlzLnN0YXR1cz1yfX12YXIgdmU9ZT0+e2UudGVybWluYXRlKCksZS5vbm1lc3NhZ2U9KCk9Pnt9fSxWZT1bXSxSZT0wLHRlPW51bGwsdWU9ZT0+e2NlLmxlbmd0aD09MCYmKHluKCksYm4oY2VbMF0pKTt2YXIgcj1jZS5wb3AoKTtpZighcilyZXR1cm4gNjtGZS5wdXNoKHIpLE9lW2UuT2JdPXIsci5PYj1lLk9iO3ZhciBpPXtQYjpcInJ1blwiLGJjOmUuYWMsVGI6ZS5UYixPYjplLk9ifTtyZXR1cm4gci5wb3N0TWVzc2FnZShpLGUuWGIpLDB9LHNlPTAsTD0oZSxyLC4uLmkpPT57dmFyIHMsZj0xNippLmxlbmd0aCxwPVUoKSxFPWp0KGYpLFM9RT4+PjM7Zm9yKHMgb2YgaSl0eXBlb2Ygcz09XCJiaWdpbnRcIj8oKHcoKSxBKVtTKys+Pj4wXT0xbiwodygpLEEpW1MrKz4+PjBdPXMpOigodygpLEEpW1MrKz4+PjBdPTBuLCh3KCksbWUpW1MrKz4+PjBdPXMpO3JldHVybiBlPW5yKGUsMCxmLEUsciksUChwKSxlfTtmdW5jdGlvbiBWKGUpe2lmKG8pcmV0dXJuIEwoMCwxLGUpO2lmKHk9ZSwhKDA8c2UpKXtmb3IodmFyIHIgb2YgRmUpdmUocik7Zm9yKHIgb2YgY2UpdmUocik7Y2U9W10sRmU9W10sT2U9e30sXz0hMH1sKDAsbmV3IFNlKGUpKX1mdW5jdGlvbiBmZShlKXtpZihvKXJldHVybiBMKDEsMCxlKTt5ZShlKX12YXIgeWU9ZT0+e2lmKHk9ZSxvKXRocm93IGZlKGUpLFwidW53aW5kXCI7VihlKX0sY2U9W10sRmU9W10sbW49W10sT2U9e30saG49ZT0+e3ZhciByPWUuT2I7ZGVsZXRlIE9lW3JdLGNlLnB1c2goZSksRmUuc3BsaWNlKEZlLmluZGV4T2YoZSksMSksZS5PYj0wLHJyKHIpfTtmdW5jdGlvbiB3bigpe21uLmZvckVhY2goZT0+ZSgpKX12YXIgYm49ZT0+bmV3IFByb21pc2Uocj0+e2Uub25tZXNzYWdlPWY9Pnt2YXIgcD1mLmRhdGE7aWYoZj1wLlBiLHAuU2ImJnAuU2IhPXN0KCkpe3ZhciBFPU9lW3AuU2JdO0U/RS5wb3N0TWVzc2FnZShwLHAuWGIpOkYoYEludGVybmFsIGVycm9yISBXb3JrZXIgc2VudCBhIG1lc3NhZ2UgXCIke2Z9XCIgdG8gdGFyZ2V0IHB0aHJlYWQgJHtwLlNifSwgYnV0IHRoYXQgdGhyZWFkIG5vIGxvbmdlciBleGlzdHMhYCl9ZWxzZSBmPT09XCJjaGVja01haWxib3hcIj9ydCgpOmY9PT1cInNwYXduVGhyZWFkXCI/dWUocCk6Zj09PVwiY2xlYW51cFRocmVhZFwiP1J0KCgpPT57aG4oT2VbcC5jY10pfSk6Zj09PVwibG9hZGVkXCI/KGUubG9hZGVkPSEwLHIoZSkpOnAudGFyZ2V0PT09XCJzZXRpbW1lZGlhdGVcIj9lLnBvc3RNZXNzYWdlKHApOmY9PT1cInVuY2F1Z2h0RXhjZXB0aW9uXCI/ZS5vbmVycm9yKHAuZXJyb3IpOmY9PT1cImNhbGxIYW5kbGVyXCI/dFtwLlliXSguLi5wLmFyZ3MpOmYmJkYoYHdvcmtlciBzZW50IGFuIHVua25vd24gY29tbWFuZCAke2Z9YCl9LGUub25lcnJvcj1mPT57dGhyb3cgRihgd29ya2VyIHNlbnQgYW4gZXJyb3IhICR7Zi5maWxlbmFtZX06JHtmLmxpbmVub306ICR7Zi5tZXNzYWdlfWApLGZ9O3ZhciBpLHM9W107Zm9yKGkgb2ZbXSl0LnByb3BlcnR5SXNFbnVtZXJhYmxlKGkpJiZzLnB1c2goaSk7ZS5wb3N0TWVzc2FnZSh7UGI6XCJsb2FkXCIsWmI6cyxkYzpnZSxlYzpifSl9KTtmdW5jdGlvbiB5bigpe3ZhciBlPW5ldyBXb3JrZXIoKCgpPT57bGV0IHI9VVJMO3JldHVybiBpbXBvcnQubWV0YS51cmw+XCJmaWxlOlwiJiZpbXBvcnQubWV0YS51cmw8XCJmaWxlO1wiP25ldyByKFwib3J0Lndhc20uYnVuZGxlLm1pbi5tanNcIixpbXBvcnQubWV0YS51cmwpOm5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKX0pKCkse3R5cGU6XCJtb2R1bGVcIix3b3JrZXJEYXRhOlwiZW0tcHRocmVhZFwiLG5hbWU6XCJlbS1wdGhyZWFkXCJ9KTtjZS5wdXNoKGUpfXZhciBnZSxnbj1bXSxDPWU9Pnt2YXIgcj1nbltlXTtyZXR1cm4gcnx8KGduW2VdPXI9Y3IuZ2V0KGUpKSxyfSxBbz0oZSxyKT0+e3NlPTAsZT1DKGUpKHIpLDA8c2U/eT1lOkh0KGUpfSx0dD1bXSxudD0wO2Z1bmN0aW9uIElvKGUpe3ZhciByPW5ldyB4dChlPj4+PTApO3JldHVybih3KCksailbci5RYisxMj4+PjBdPT0wJiYoRW4ociwhMCksbnQtLSksVG4ociwhMSksdHQucHVzaChyKSxmcihlKX12YXIgTmU9MCxCbz0oKT0+e00oMCwwKTt2YXIgZT10dC5wb3AoKTtpcihlLlViKSxOZT0wfTtmdW5jdGlvbiBFbihlLHIpe3I9cj8xOjAsKHcoKSxqKVtlLlFiKzEyPj4+MF09cn1mdW5jdGlvbiBUbihlLHIpe3I9cj8xOjAsKHcoKSxqKVtlLlFiKzEzPj4+MF09cn1jbGFzcyB4dHtjb25zdHJ1Y3RvcihyKXt0aGlzLlViPXIsdGhpcy5RYj1yLTI0fX12YXIgTXQ9ZT0+e3ZhciByPU5lO2lmKCFyKXJldHVybiBKZSgwKSwwO3ZhciBpPW5ldyB4dChyKTsodygpLFcpW2kuUWIrMTY+Pj4yPj4+MF09cjt2YXIgcz0odygpLFcpW2kuUWIrND4+PjI+Pj4wXTtpZighcylyZXR1cm4gSmUoMCkscjtmb3IodmFyIGYgb2YgZSl7aWYoZj09PTB8fGY9PT1zKWJyZWFrO2lmKHVyKGYscyxpLlFiKzE2KSlyZXR1cm4gSmUoZikscn1yZXR1cm4gSmUocykscn07ZnVuY3Rpb24gTG8oKXtyZXR1cm4gTXQoW10pfWZ1bmN0aW9uIF9vKGUpe3JldHVybiBNdChbZT4+PjBdKX1mdW5jdGlvbiBQbyhlLHIsaSxzKXtyZXR1cm4gTXQoW2U+Pj4wLHI+Pj4wLGk+Pj4wLHM+Pj4wXSl9dmFyIERvPSgpPT57dmFyIGU9dHQucG9wKCk7ZXx8SChcIm5vIGV4Y2VwdGlvbiB0byB0aHJvd1wiKTt2YXIgcj1lLlViO3Rocm93KHcoKSxqKVtlLlFiKzEzPj4+MF09PTAmJih0dC5wdXNoKGUpLFRuKGUsITApLEVuKGUsITEpLG50KyspLFZ0KHIpLE5lPXJ9O2Z1bmN0aW9uIFVvKGUscixpKXt2YXIgcz1uZXcgeHQoZT4+Pj0wKTt0aHJvdyByPj4+PTAsaT4+Pj0wLCh3KCksVylbcy5RYisxNj4+PjI+Pj4wXT0wLCh3KCksVylbcy5RYis0Pj4+Mj4+PjBdPXIsKHcoKSxXKVtzLlFiKzg+Pj4yPj4+MF09aSxWdChlKSxudCsrLE5lPWV9dmFyIHhvPSgpPT5udDtmdW5jdGlvbiBTbihlLHIsaSxzKXtyZXR1cm4gbz9MKDIsMSxlLHIsaSxzKTp2bihlLHIsaSxzKX1mdW5jdGlvbiB2bihlLHIsaSxzKXtpZihlPj4+PTAscj4+Pj0wLGk+Pj49MCxzPj4+PTAsIWdsb2JhbFRoaXMuU2hhcmVkQXJyYXlCdWZmZXIpcmV0dXJuIDY7dmFyIGY9W107cmV0dXJuIG8mJmYubGVuZ3RoPT09MD9TbihlLHIsaSxzKTooZT17YWM6aSxPYjplLFRiOnMsWGI6Zn0sbz8oZS5QYj1cInNwYXduVGhyZWFkXCIscG9zdE1lc3NhZ2UoZSxmKSwwKTp1ZShlKSl9ZnVuY3Rpb24gTW8oZSl7dGhyb3cgTmV8fD1lPj4+MCxOZX12YXIgT249Z2xvYmFsVGhpcy5UZXh0RGVjb2RlciYmbmV3IFRleHREZWNvZGVyLEFuPShlLHI9MCxpLHMpPT57dmFyIGY9cj4+Pj0wO2lmKGk9ZitpLHMpcz1pO2Vsc2V7Zm9yKDtlW2ZdJiYhKGY+PWkpOykrK2Y7cz1mfWlmKDE2PHMtciYmZS5idWZmZXImJk9uKXJldHVybiBPbi5kZWNvZGUoZS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcj9lLnN1YmFycmF5KHIscyk6ZS5zbGljZShyLHMpKTtmb3IoZj1cIlwiO3I8czspaWYoMTI4JihpPWVbcisrXSkpe3ZhciBwPTYzJmVbcisrXTtpZigoMjI0JmkpPT0xOTIpZis9U3RyaW5nLmZyb21DaGFyQ29kZSgoMzEmaSk8PDZ8cCk7ZWxzZXt2YXIgRT02MyZlW3IrK107NjU1MzY+KGk9KDI0MCZpKT09MjI0PygxNSZpKTw8MTJ8cDw8NnxFOig3JmkpPDwxOHxwPDwxMnxFPDw2fDYzJmVbcisrXSk/Zis9U3RyaW5nLmZyb21DaGFyQ29kZShpKTooaS09NjU1MzYsZis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxpPj4xMCw1NjMyMHwxMDIzJmkpKX19ZWxzZSBmKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpO3JldHVybiBmfSxDdD0oZSxyLGkpPT4oZT4+Pj0wKT9BbigodygpLG5lKSxlLHIsaSk6XCJcIjtmdW5jdGlvbiBJbihlLHIsaSl7cmV0dXJuIG8/TCgzLDEsZSxyLGkpOjB9ZnVuY3Rpb24gQm4oZSxyKXtpZihvKXJldHVybiBMKDQsMSxlLHIpfWZ1bmN0aW9uIExuKGUscil7aWYobylyZXR1cm4gTCg1LDEsZSxyKX1mdW5jdGlvbiBfbihlLHIsaSl7aWYobylyZXR1cm4gTCg2LDEsZSxyLGkpfWZ1bmN0aW9uIFBuKGUscixpKXtyZXR1cm4gbz9MKDcsMSxlLHIsaSk6MH1mdW5jdGlvbiBEbihlLHIpe2lmKG8pcmV0dXJuIEwoOCwxLGUscil9ZnVuY3Rpb24gVW4oZSxyLGkpe2lmKG8pcmV0dXJuIEwoOSwxLGUscixpKX1mdW5jdGlvbiB4bihlLHIsaSxzKXtpZihvKXJldHVybiBMKDEwLDEsZSxyLGkscyl9ZnVuY3Rpb24gTW4oZSxyLGkscyl7aWYobylyZXR1cm4gTCgxMSwxLGUscixpLHMpfWZ1bmN0aW9uIENuKGUscixpLHMpe2lmKG8pcmV0dXJuIEwoMTIsMSxlLHIsaSxzKX1mdW5jdGlvbiBSbihlKXtpZihvKXJldHVybiBMKDEzLDEsZSl9ZnVuY3Rpb24gRm4oZSxyKXtpZihvKXJldHVybiBMKDE0LDEsZSxyKX1mdW5jdGlvbiBObihlLHIsaSl7aWYobylyZXR1cm4gTCgxNSwxLGUscixpKX12YXIgQ289KCk9PkgoXCJcIik7ZnVuY3Rpb24gUm8oZSl7enQoZT4+PjAsIXUsMSwhYSwxMzEwNzIsITEpLHduKCl9dmFyIFJ0PWU9PntpZighXyl0cnl7aWYoZSgpLCEoMDxzZSkpdHJ5e28/c3QoKSYmSHQoeSk6eWUoeSl9Y2F0Y2gocil7ciBpbnN0YW5jZW9mIFNlfHxyPT1cInVud2luZFwifHxsKDAscil9fWNhdGNoKHIpe3IgaW5zdGFuY2VvZiBTZXx8cj09XCJ1bndpbmRcInx8bCgwLHIpfX0sRm89IUF0b21pY3Mud2FpdEFzeW5jfHxnbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50JiY5MT5OdW1iZXIoKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tKGV8aXVtKVxcLyhbMC05XSspXFwuLyl8fFtdKVsyXSk7ZnVuY3Rpb24gRnQoZSl7ZT4+Pj0wLEZvfHwoQXRvbWljcy53YWl0QXN5bmMoKHcoKSxCKSxlPj4+MixlKS52YWx1ZS50aGVuKHJ0KSxlKz0xMjgsQXRvbWljcy5zdG9yZSgodygpLEIpLGU+Pj4yLDEpKX12YXIgcnQ9KCk9PlJ0KCgpPT57dmFyIGU9c3QoKTtlJiYoRnQoZSksYXIoKSl9KTtmdW5jdGlvbiBObyhlLHIpeyhlPj4+PTApPT1yPj4+MD9zZXRUaW1lb3V0KHJ0KTpvP3Bvc3RNZXNzYWdlKHtTYjplLFBiOlwiY2hlY2tNYWlsYm94XCJ9KTooZT1PZVtlXSkmJmUucG9zdE1lc3NhZ2Uoe1BiOlwiY2hlY2tNYWlsYm94XCJ9KX12YXIgTnQ9W107ZnVuY3Rpb24ga28oZSxyLGkscyxmKXtmb3Iocj4+Pj0wLGY+Pj49MCxOdC5sZW5ndGg9MCxpPWY+Pj4zLHM9ZitzPj4+MztpPHM7KXt2YXIgcDtwPSh3KCksQSlbaSsrPj4+MF0/KHcoKSxBKVtpKys+Pj4wXToodygpLG1lKVtpKys+Pj4wXSxOdC5wdXNoKHApfXJldHVybihyP2xyW3JdOnVhW2VdKSguLi5OdCl9dmFyIFdvPSgpPT57c2U9MH07ZnVuY3Rpb24gR28oZSl7ZT4+Pj0wLG8/cG9zdE1lc3NhZ2Uoe1BiOlwiY2xlYW51cFRocmVhZFwiLGNjOmV9KTpobihPZVtlXSl9ZnVuY3Rpb24gJG8oZSl7fWZ1bmN0aW9uIHpvKGUscil7ZT0tOTAwNzE5OTI1NDc0MDk5Mj5lfHw5MDA3MTk5MjU0NzQwOTkyPGU/TmFOOk51bWJlcihlKSxyPj4+PTAsZT1uZXcgRGF0ZSgxZTMqZSksKHcoKSxCKVtyPj4+Mj4+PjBdPWUuZ2V0VVRDU2Vjb25kcygpLCh3KCksQilbcis0Pj4+Mj4+PjBdPWUuZ2V0VVRDTWludXRlcygpLCh3KCksQilbcis4Pj4+Mj4+PjBdPWUuZ2V0VVRDSG91cnMoKSwodygpLEIpW3IrMTI+Pj4yPj4+MF09ZS5nZXRVVENEYXRlKCksKHcoKSxCKVtyKzE2Pj4+Mj4+PjBdPWUuZ2V0VVRDTW9udGgoKSwodygpLEIpW3IrMjA+Pj4yPj4+MF09ZS5nZXRVVENGdWxsWWVhcigpLTE5MDAsKHcoKSxCKVtyKzI0Pj4+Mj4+PjBdPWUuZ2V0VVRDRGF5KCksZT0oZS5nZXRUaW1lKCktRGF0ZS5VVEMoZS5nZXRVVENGdWxsWWVhcigpLDAsMSwwLDAsMCwwKSkvODY0ZTV8MCwodygpLEIpW3IrMjg+Pj4yPj4+MF09ZX12YXIga249ZT0+ZSU0PT0wJiYoZSUxMDAhPTB8fGUlNDAwPT0wKSxXbj1bMCwzMSw2MCw5MSwxMjEsMTUyLDE4MiwyMTMsMjQ0LDI3NCwzMDUsMzM1XSxHbj1bMCwzMSw1OSw5MCwxMjAsMTUxLDE4MSwyMTIsMjQzLDI3MywzMDQsMzM0XTtmdW5jdGlvbiBIbyhlLHIpe2U9LTkwMDcxOTkyNTQ3NDA5OTI+ZXx8OTAwNzE5OTI1NDc0MDk5MjxlP05hTjpOdW1iZXIoZSkscj4+Pj0wLGU9bmV3IERhdGUoMWUzKmUpLCh3KCksQilbcj4+PjI+Pj4wXT1lLmdldFNlY29uZHMoKSwodygpLEIpW3IrND4+PjI+Pj4wXT1lLmdldE1pbnV0ZXMoKSwodygpLEIpW3IrOD4+PjI+Pj4wXT1lLmdldEhvdXJzKCksKHcoKSxCKVtyKzEyPj4+Mj4+PjBdPWUuZ2V0RGF0ZSgpLCh3KCksQilbcisxNj4+PjI+Pj4wXT1lLmdldE1vbnRoKCksKHcoKSxCKVtyKzIwPj4+Mj4+PjBdPWUuZ2V0RnVsbFllYXIoKS0xOTAwLCh3KCksQilbcisyND4+PjI+Pj4wXT1lLmdldERheSgpO3ZhciBpPShrbihlLmdldEZ1bGxZZWFyKCkpP1duOkduKVtlLmdldE1vbnRoKCldK2UuZ2V0RGF0ZSgpLTF8MDsodygpLEIpW3IrMjg+Pj4yPj4+MF09aSwodygpLEIpW3IrMzY+Pj4yPj4+MF09LTYwKmUuZ2V0VGltZXpvbmVPZmZzZXQoKSxpPW5ldyBEYXRlKGUuZ2V0RnVsbFllYXIoKSw2LDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7dmFyIHM9bmV3IERhdGUoZS5nZXRGdWxsWWVhcigpLDAsMSkuZ2V0VGltZXpvbmVPZmZzZXQoKTtlPTB8KGkhPXMmJmUuZ2V0VGltZXpvbmVPZmZzZXQoKT09TWF0aC5taW4ocyxpKSksKHcoKSxCKVtyKzMyPj4+Mj4+PjBdPWV9ZnVuY3Rpb24gam8oZSl7ZT4+Pj0wO3ZhciByPW5ldyBEYXRlKCh3KCksQilbZSsyMD4+PjI+Pj4wXSsxOTAwLCh3KCksQilbZSsxNj4+PjI+Pj4wXSwodygpLEIpW2UrMTI+Pj4yPj4+MF0sKHcoKSxCKVtlKzg+Pj4yPj4+MF0sKHcoKSxCKVtlKzQ+Pj4yPj4+MF0sKHcoKSxCKVtlPj4+Mj4+PjBdLDApLGk9KHcoKSxCKVtlKzMyPj4+Mj4+PjBdLHM9ci5nZXRUaW1lem9uZU9mZnNldCgpLGY9bmV3IERhdGUoci5nZXRGdWxsWWVhcigpLDYsMSkuZ2V0VGltZXpvbmVPZmZzZXQoKSxwPW5ldyBEYXRlKHIuZ2V0RnVsbFllYXIoKSwwLDEpLmdldFRpbWV6b25lT2Zmc2V0KCksRT1NYXRoLm1pbihwLGYpO3JldHVybiAwPmk/KHcoKSxCKVtlKzMyPj4+Mj4+PjBdPSsoZiE9cCYmRT09cyk6MDxpIT0oRT09cykmJihmPU1hdGgubWF4KHAsZiksci5zZXRUaW1lKHIuZ2V0VGltZSgpKzZlNCooKDA8aT9FOmYpLXMpKSksKHcoKSxCKVtlKzI0Pj4+Mj4+PjBdPXIuZ2V0RGF5KCksaT0oa24oci5nZXRGdWxsWWVhcigpKT9XbjpHbilbci5nZXRNb250aCgpXStyLmdldERhdGUoKS0xfDAsKHcoKSxCKVtlKzI4Pj4+Mj4+PjBdPWksKHcoKSxCKVtlPj4+Mj4+PjBdPXIuZ2V0U2Vjb25kcygpLCh3KCksQilbZSs0Pj4+Mj4+PjBdPXIuZ2V0TWludXRlcygpLCh3KCksQilbZSs4Pj4+Mj4+PjBdPXIuZ2V0SG91cnMoKSwodygpLEIpW2UrMTI+Pj4yPj4+MF09ci5nZXREYXRlKCksKHcoKSxCKVtlKzE2Pj4+Mj4+PjBdPXIuZ2V0TW9udGgoKSwodygpLEIpW2UrMjA+Pj4yPj4+MF09ci5nZXRZZWFyKCksZT1yLmdldFRpbWUoKSxCaWdJbnQoaXNOYU4oZSk/LTE6ZS8xZTMpfWZ1bmN0aW9uICRuKGUscixpLHMsZixwLEUpe3JldHVybiBvP0woMTYsMSxlLHIsaSxzLGYscCxFKTotNTJ9ZnVuY3Rpb24gem4oZSxyLGkscyxmLHApe2lmKG8pcmV0dXJuIEwoMTcsMSxlLHIsaSxzLGYscCl9dmFyIFllPXt9LFZvPSgpPT5wZXJmb3JtYW5jZS50aW1lT3JpZ2luK3BlcmZvcm1hbmNlLm5vdygpO2Z1bmN0aW9uIEhuKGUscil7aWYobylyZXR1cm4gTCgxOCwxLGUscik7aWYoWWVbZV0mJihjbGVhclRpbWVvdXQoWWVbZV0uaWQpLGRlbGV0ZSBZZVtlXSksIXIpcmV0dXJuIDA7dmFyIGk9c2V0VGltZW91dCgoKT0+e2RlbGV0ZSBZZVtlXSxSdCgoKT0+b3IoZSxwZXJmb3JtYW5jZS50aW1lT3JpZ2luK3BlcmZvcm1hbmNlLm5vdygpKSl9LHIpO3JldHVybiBZZVtlXT17aWQ6aSxqYzpyfSwwfXZhciBBZT0oZSxyLGkpPT57dmFyIHM9KHcoKSxuZSk7aWYocj4+Pj0wLDA8aSl7dmFyIGY9cjtpPXIraS0xO2Zvcih2YXIgcD0wO3A8ZS5sZW5ndGg7KytwKXt2YXIgRT1lLmNvZGVQb2ludEF0KHApO2lmKDEyNz49RSl7aWYocj49aSlicmVhaztzW3IrKz4+PjBdPUV9ZWxzZSBpZigyMDQ3Pj1FKXtpZihyKzE+PWkpYnJlYWs7c1tyKys+Pj4wXT0xOTJ8RT4+NixzW3IrKz4+PjBdPTEyOHw2MyZFfWVsc2UgaWYoNjU1MzU+PUUpe2lmKHIrMj49aSlicmVhaztzW3IrKz4+PjBdPTIyNHxFPj4xMixzW3IrKz4+PjBdPTEyOHxFPj42JjYzLHNbcisrPj4+MF09MTI4fDYzJkV9ZWxzZXtpZihyKzM+PWkpYnJlYWs7c1tyKys+Pj4wXT0yNDB8RT4+MTgsc1tyKys+Pj4wXT0xMjh8RT4+MTImNjMsc1tyKys+Pj4wXT0xMjh8RT4+NiY2MyxzW3IrKz4+PjBdPTEyOHw2MyZFLHArK319c1tyPj4+MF09MCxlPXItZn1lbHNlIGU9MDtyZXR1cm4gZX07ZnVuY3Rpb24gWW8oZSxyLGkscyl7ZT4+Pj0wLHI+Pj49MCxpPj4+PTAscz4+Pj0wO3ZhciBmPW5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxwPW5ldyBEYXRlKGYsMCwxKS5nZXRUaW1lem9uZU9mZnNldCgpO2Y9bmV3IERhdGUoZiw2LDEpLmdldFRpbWV6b25lT2Zmc2V0KCk7dmFyIEU9TWF0aC5tYXgocCxmKTsodygpLFcpW2U+Pj4yPj4+MF09NjAqRSwodygpLEIpW3I+Pj4yPj4+MF09KyhwIT1mKSxlPShyPVM9Pnt2YXIgeD1NYXRoLmFicyhTKTtyZXR1cm5gVVRDJHswPD1TP1wiLVwiOlwiK1wifSR7U3RyaW5nKE1hdGguZmxvb3IoeC82MCkpLnBhZFN0YXJ0KDIsXCIwXCIpfSR7U3RyaW5nKHglNjApLnBhZFN0YXJ0KDIsXCIwXCIpfWB9KShwKSxyPXIoZiksZjxwPyhBZShlLGksMTcpLEFlKHIscywxNykpOihBZShlLHMsMTcpLEFlKHIsaSwxNykpfXZhciBKbz0oKT0+RGF0ZS5ub3coKSxxbz0xO2Z1bmN0aW9uIFhvKGUscixpKXtpZihpPj4+PTAsISgwPD1lJiYzPj1lKSlyZXR1cm4gMjg7aWYoZT09PTApZT1EYXRlLm5vdygpO2Vsc2V7aWYoIXFvKXJldHVybiA1MjtlPXBlcmZvcm1hbmNlLnRpbWVPcmlnaW4rcGVyZm9ybWFuY2Uubm93KCl9cmV0dXJuIGU9TWF0aC5yb3VuZCgxZTYqZSksKHcoKSxBKVtpPj4+Mz4+PjBdPUJpZ0ludChlKSwwfXZhciBrdD1bXTtmdW5jdGlvbiBRbyhlLHIsaSl7ZT4+Pj0wLHI+Pj49MCxpPj4+PTAsa3QubGVuZ3RoPTA7Zm9yKHZhciBzO3M9KHcoKSxuZSlbcisrPj4+MF07KXt2YXIgZj1zIT0xMDU7aSs9KGYmPXMhPTExMikmJmklOD80OjAsa3QucHVzaChzPT0xMTI/KHcoKSxXKVtpPj4+Mj4+PjBdOnM9PTEwNj8odygpLEEpW2k+Pj4zPj4+MF06cz09MTA1Pyh3KCksQilbaT4+PjI+Pj4wXToodygpLG1lKVtpPj4+Mz4+PjBdKSxpKz1mPzg6NH1yZXR1cm4gbHJbZV0oLi4ua3QpfXZhciBabz0oKT0+e307ZnVuY3Rpb24gS28oZSxyKXtyZXR1cm4gRihDdChlPj4+MCxyPj4+MCkpfXZhciBlYT0oKT0+e3Rocm93IHNlKz0xLFwidW53aW5kXCJ9O2Z1bmN0aW9uIHRhKCl7cmV0dXJuIDQyOTQ5MDE3NjB9dmFyIG5hPSgpPT5uYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSxJZT17fSxXdD1lPT57Zm9yKHZhciByPTAsaT0wO2k8ZS5sZW5ndGg7KytpKXt2YXIgcz1lLmNoYXJDb2RlQXQoaSk7MTI3Pj1zP3IrKzoyMDQ3Pj1zP3IrPTI6NTUyOTY8PXMmJjU3MzQzPj1zPyhyKz00LCsraSk6cis9M31yZXR1cm4gcn0sb3Q9ZT0+e3ZhciByO3JldHVybihyPS9cXGJ3YXNtLWZ1bmN0aW9uXFxbXFxkK1xcXTooMHhbMC05YS1mXSspLy5leGVjKGUpKT8rclsxXToocj0vOihcXGQrKTpcXGQrKD86XFwpfCQpLy5leGVjKGUpKT8yMTQ3NDgzNjQ4fCtyWzFdOjB9LGpuPWU9Pntmb3IodmFyIHIgb2YgZSkoZT1vdChyKSkmJihJZVtlXT1yKX07ZnVuY3Rpb24gcmEoKXt2YXIgZT1FcnJvcigpLnN0YWNrLnRvU3RyaW5nKCkuc3BsaXQoYFxuYCk7cmV0dXJuIGVbMF09PVwiRXJyb3JcIiYmZS5zaGlmdCgpLGpuKGUpLEllLlZiPW90KGVbM10pLEllLiRiPWUsSWUuVmJ9ZnVuY3Rpb24gYXQoZSl7aWYoIShlPUllW2U+Pj4wXSkpcmV0dXJuIDA7dmFyIHI7aWYocj0vXlxccythdCAuKlxcLndhc21cXC4oLiopIFxcKC4qXFwpJC8uZXhlYyhlKSllPXJbMV07ZWxzZSBpZihyPS9eXFxzK2F0ICguKikgXFwoLipcXCkkLy5leGVjKGUpKWU9clsxXTtlbHNle2lmKCEocj0vXiguKz8pQC8uZXhlYyhlKSkpcmV0dXJuIDA7ZT1yWzFdfUtuKGF0LldiPz8wKSxyPVd0KGUpKzE7dmFyIGk9ZXIocik7cmV0dXJuIGkmJkFlKGUsaSxyKSxhdC5XYj1pLGF0LldifWZ1bmN0aW9uIG9hKGUpe2U+Pj49MDt2YXIgcj0odygpLG5lKS5sZW5ndGg7aWYoZTw9cnx8NDI5NDkwMTc2MDxlKXJldHVybiExO2Zvcih2YXIgaT0xOzQ+PWk7aSo9Mil7dmFyIHM9ciooMSsuMi9pKTtzPU1hdGgubWluKHMsZSsxMDA2NjMyOTYpO2U6e3M9KE1hdGgubWluKDQyOTQ5MDE3NjAsNjU1MzYqTWF0aC5jZWlsKE1hdGgubWF4KGUscykvNjU1MzYpKS1nZS5idWZmZXIuYnl0ZUxlbmd0aCs2NTUzNSkvNjU1MzZ8MDt0cnl7Z2UuZ3JvdyhzKSxlZSgpO3ZhciBmPTE7YnJlYWsgZX1jYXRjaHt9Zj12b2lkIDB9aWYoZilyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBhYShlLHIsaSl7aWYoZT4+Pj0wLHI+Pj49MCxJZS5WYj09ZSl2YXIgcz1JZS4kYjtlbHNlKHM9RXJyb3IoKS5zdGFjay50b1N0cmluZygpLnNwbGl0KGBcbmApKVswXT09XCJFcnJvclwiJiZzLnNoaWZ0KCksam4ocyk7Zm9yKHZhciBmPTM7c1tmXSYmb3Qoc1tmXSkhPWU7KSsrZjtmb3IoZT0wO2U8aSYmc1tlK2ZdOysrZSkodygpLEIpW3IrNCplPj4+Mj4+PjBdPW90KHNbZStmXSk7cmV0dXJuIGV9dmFyIEd0LCR0PXt9LFZuPSgpPT57aWYoIUd0KXt2YXIgZSxyPXtVU0VSOlwid2ViX3VzZXJcIixMT0dOQU1FOlwid2ViX3VzZXJcIixQQVRIOlwiL1wiLFBXRDpcIi9cIixIT01FOlwiL2hvbWUvd2ViX3VzZXJcIixMQU5HOihnbG9iYWxUaGlzLm5hdmlnYXRvcj8ubGFuZ3VhZ2U/P1wiQ1wiKS5yZXBsYWNlKFwiLVwiLFwiX1wiKStcIi5VVEYtOFwiLF86XCIuL3RoaXMucHJvZ3JhbVwifTtmb3IoZSBpbiAkdCkkdFtlXT09PXZvaWQgMD9kZWxldGUgcltlXTpyW2VdPSR0W2VdO3ZhciBpPVtdO2ZvcihlIGluIHIpaS5wdXNoKGAke2V9PSR7cltlXX1gKTtHdD1pfXJldHVybiBHdH07ZnVuY3Rpb24gWW4oZSxyKXtpZihvKXJldHVybiBMKDE5LDEsZSxyKTtlPj4+PTAscj4+Pj0wO3ZhciBpLHM9MCxmPTA7Zm9yKGkgb2YgVm4oKSl7dmFyIHA9citzOyh3KCksVylbZStmPj4+Mj4+PjBdPXAscys9QWUoaSxwLDEvMCkrMSxmKz00fXJldHVybiAwfWZ1bmN0aW9uIEpuKGUscil7aWYobylyZXR1cm4gTCgyMCwxLGUscik7ZT4+Pj0wLHI+Pj49MDt2YXIgaT1WbigpO2Zvcih2YXIgcyBvZigodygpLFcpW2U+Pj4yPj4+MF09aS5sZW5ndGgsZT0wLGkpKWUrPVd0KHMpKzE7cmV0dXJuKHcoKSxXKVtyPj4+Mj4+PjBdPWUsMH1mdW5jdGlvbiBxbihlKXtyZXR1cm4gbz9MKDIxLDEsZSk6NTJ9ZnVuY3Rpb24gWG4oZSxyLGkscyl7cmV0dXJuIG8/TCgyMiwxLGUscixpLHMpOjUyfWZ1bmN0aW9uIFFuKGUscixpLHMpe3JldHVybiBvP0woMjMsMSxlLHIsaSxzKTo3MH12YXIgc2E9W251bGwsW10sW11dO2Z1bmN0aW9uIFpuKGUscixpLHMpe2lmKG8pcmV0dXJuIEwoMjQsMSxlLHIsaSxzKTtyPj4+PTAsaT4+Pj0wLHM+Pj49MDtmb3IodmFyIGY9MCxwPTA7cDxpO3ArKyl7dmFyIEU9KHcoKSxXKVtyPj4+Mj4+PjBdLFM9KHcoKSxXKVtyKzQ+Pj4yPj4+MF07cis9ODtmb3IodmFyIHg9MDt4PFM7eCsrKXt2YXIgUj1lLFg9KHcoKSxuZSlbRSt4Pj4+MF0sbGU9c2FbUl07WD09PTB8fFg9PT0xMD8oKFI9PT0xP086RikoQW4obGUpKSxsZS5sZW5ndGg9MCk6bGUucHVzaChYKX1mKz1TfXJldHVybih3KCksVylbcz4+PjI+Pj4wXT1mLDB9ZnVuY3Rpb24gaWEoZSl7cmV0dXJuIGU+Pj4wfW98fGZ1bmN0aW9uKCl7Zm9yKHZhciBlPXQubnVtVGhyZWFkcy0xO2UtLTspeW4oKTtWZS5wdXNoKGFzeW5jKCk9Pnt2YXIgcj1hc3luYyBmdW5jdGlvbigpe2lmKCFvKXJldHVybiBQcm9taXNlLmFsbChjZS5tYXAoYm4pKX0oKTtSZSsrLGF3YWl0IHIsLS1SZT09MCYmdGUmJihyPXRlLHRlPW51bGwscigpKX0pfSgpLG98fChnZT1uZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHtpbml0aWFsOjI1NixtYXhpbXVtOjY1NTM2LHNoYXJlZDohMH0pLGVlKCkpLHQud2FzbUJpbmFyeSYmKGc9dC53YXNtQmluYXJ5KSx0LnN0YWNrU2F2ZT0oKT0+VSgpLHQuc3RhY2tSZXN0b3JlPWU9PlAoZSksdC5zdGFja0FsbG9jPWU9Pmp0KGUpLHQuc2V0VmFsdWU9ZnVuY3Rpb24oZSxyLGk9XCJpOFwiKXtzd2l0Y2goaS5lbmRzV2l0aChcIipcIikmJihpPVwiKlwiKSxpKXtjYXNlXCJpMVwiOmNhc2VcImk4XCI6KHcoKSxqKVtlPj4+MF09cjticmVhaztjYXNlXCJpMTZcIjoodygpLHBlKVtlPj4+MT4+PjBdPXI7YnJlYWs7Y2FzZVwiaTMyXCI6KHcoKSxCKVtlPj4+Mj4+PjBdPXI7YnJlYWs7Y2FzZVwiaTY0XCI6KHcoKSxBKVtlPj4+Mz4+PjBdPUJpZ0ludChyKTticmVhaztjYXNlXCJmbG9hdFwiOih3KCkscmUpW2U+Pj4yPj4+MF09cjticmVhaztjYXNlXCJkb3VibGVcIjoodygpLG1lKVtlPj4+Mz4+PjBdPXI7YnJlYWs7Y2FzZVwiKlwiOih3KCksVylbZT4+PjI+Pj4wXT1yO2JyZWFrO2RlZmF1bHQ6SChgaW52YWxpZCB0eXBlIGZvciBzZXRWYWx1ZTogJHtpfWApfX0sdC5nZXRWYWx1ZT1mdW5jdGlvbihlLHI9XCJpOFwiKXtzd2l0Y2goci5lbmRzV2l0aChcIipcIikmJihyPVwiKlwiKSxyKXtjYXNlXCJpMVwiOmNhc2VcImk4XCI6cmV0dXJuKHcoKSxqKVtlPj4+MF07Y2FzZVwiaTE2XCI6cmV0dXJuKHcoKSxwZSlbZT4+PjE+Pj4wXTtjYXNlXCJpMzJcIjpyZXR1cm4odygpLEIpW2U+Pj4yPj4+MF07Y2FzZVwiaTY0XCI6cmV0dXJuKHcoKSxBKVtlPj4+Mz4+PjBdO2Nhc2VcImZsb2F0XCI6cmV0dXJuKHcoKSxyZSlbZT4+PjI+Pj4wXTtjYXNlXCJkb3VibGVcIjpyZXR1cm4odygpLG1lKVtlPj4+Mz4+PjBdO2Nhc2VcIipcIjpyZXR1cm4odygpLFcpW2U+Pj4yPj4+MF07ZGVmYXVsdDpIKGBpbnZhbGlkIHR5cGUgZm9yIGdldFZhbHVlOiAke3J9YCl9fSx0LlVURjhUb1N0cmluZz1DdCx0LnN0cmluZ1RvVVRGOD1BZSx0Lmxlbmd0aEJ5dGVzVVRGOD1XdDt2YXIgc3QsS24sZXIsenQsdHIsbnIscnIsSHQsb3IsYXIsTSxKZSxzcixQLGp0LFUsaXIsVnQsdXIsZnIsY3IsRWUsdWE9W1YsZmUsU24sSW4sQm4sTG4sX24sUG4sRG4sVW4seG4sTW4sQ24sUm4sRm4sTm4sJG4sem4sSG4sWW4sSm4scW4sWG4sUW4sWm5dLGxyPXs5MzA5ODg6KGUscixpLHMsZik9PntpZih0PT09dm9pZCAwfHwhdC5SYilyZXR1cm4gMTtpZigoZT1DdChOdW1iZXIoZT4+PjApKSkuc3RhcnRzV2l0aChcIi4vXCIpJiYoZT1lLnN1YnN0cmluZygyKSksIShlPXQuUmIuZ2V0KGUpKSlyZXR1cm4gMjtpZihyPU51bWJlcihyPj4+MCksaT1OdW1iZXIoaT4+PjApLHM9TnVtYmVyKHM+Pj4wKSxyK2k+ZS5ieXRlTGVuZ3RoKXJldHVybiAzO3RyeXtsZXQgcD1lLnN1YmFycmF5KHIscitpKTtzd2l0Y2goZil7Y2FzZSAwOih3KCksbmUpLnNldChwLHM+Pj4wKTticmVhaztjYXNlIDE6dC5mYz90LmZjKHMscCk6dC5pYyhzLHApO2JyZWFrO2RlZmF1bHQ6cmV0dXJuIDR9cmV0dXJuIDB9Y2F0Y2h7cmV0dXJuIDR9fSw5MzE4MTI6KCk9PnR5cGVvZiB3YXNtT2Zmc2V0Q29udmVydGVyPFwidVwifTtmdW5jdGlvbiBmYSgpe3JldHVybiB0eXBlb2Ygd2FzbU9mZnNldENvbnZlcnRlcjxcInVcIn1mdW5jdGlvbiBjYShlLHIsaSxzKXt2YXIgZj1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzKX1jYXRjaChwKXtpZihQKGYpLHAhPT1wKzApdGhyb3cgcDtNKDEsMCl9fWZ1bmN0aW9uIGxhKGUscixpKXt2YXIgcz1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSl9Y2F0Y2goZil7aWYoUChzKSxmIT09ZiswKXRocm93IGY7TSgxLDApfX1mdW5jdGlvbiBkYShlKXt2YXIgcj1VKCk7dHJ5e0MoZSkoKX1jYXRjaChpKXtpZihQKHIpLGkhPT1pKzApdGhyb3cgaTtNKDEsMCl9fWZ1bmN0aW9uIHBhKGUscil7dmFyIGk9VSgpO3RyeXtyZXR1cm4gQyhlKShyKX1jYXRjaChzKXtpZihQKGkpLHMhPT1zKzApdGhyb3cgcztNKDEsMCl9fWZ1bmN0aW9uIG1hKGUscixpKXt2YXIgcz1VKCk7dHJ5e0MoZSkocixpKX1jYXRjaChmKXtpZihQKHMpLGYhPT1mKzApdGhyb3cgZjtNKDEsMCl9fWZ1bmN0aW9uIGhhKGUscil7dmFyIGk9VSgpO3RyeXtDKGUpKHIpfWNhdGNoKHMpe2lmKFAoaSkscyE9PXMrMCl0aHJvdyBzO00oMSwwKX19ZnVuY3Rpb24gd2EoZSxyLGkscyxmLHAsRSl7dmFyIFM9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyxmLHAsRSl9Y2F0Y2goeCl7aWYoUChTKSx4IT09eCswKXRocm93IHg7TSgxLDApfX1mdW5jdGlvbiBiYShlLHIsaSxzLGYscCl7dmFyIEU9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCl9Y2F0Y2goUyl7aWYoUChFKSxTIT09UyswKXRocm93IFM7TSgxLDApfX1mdW5jdGlvbiB5YShlLHIsaSxzKXt2YXIgZj1VKCk7dHJ5e0MoZSkocixpLHMpfWNhdGNoKHApe2lmKFAoZikscCE9PXArMCl0aHJvdyBwO00oMSwwKX19ZnVuY3Rpb24gZ2EoZSxyLGkscyxmKXt2YXIgcD1VKCk7dHJ5e0MoZSkocixpLHMsZil9Y2F0Y2goRSl7aWYoUChwKSxFIT09RSswKXRocm93IEU7TSgxLDApfX1mdW5jdGlvbiBFYShlLHIsaSxzLGYscCxFKXt2YXIgUz1VKCk7dHJ5e0MoZSkocixpLHMsZixwLEUpfWNhdGNoKHgpe2lmKFAoUykseCE9PXgrMCl0aHJvdyB4O00oMSwwKX19ZnVuY3Rpb24gVGEoZSxyLGkscyxmLHAsRSl7dmFyIFM9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFKX1jYXRjaCh4KXtpZihQKFMpLHghPT14KzApdGhyb3cgeDtNKDEsMCl9fWZ1bmN0aW9uIFNhKGUscixpLHMsZixwLEUsUyl7dmFyIHg9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFLFMpfWNhdGNoKFIpe2lmKFAoeCksUiE9PVIrMCl0aHJvdyBSO00oMSwwKX19ZnVuY3Rpb24gdmEoZSxyLGkscyxmKXt2YXIgcD1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYpfWNhdGNoKEUpe2lmKFAocCksRSE9PUUrMCl0aHJvdyBFO00oMSwwKX19ZnVuY3Rpb24gT2EoZSxyLGkpe3ZhciBzPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpKX1jYXRjaChmKXtpZihQKHMpLGYhPT1mKzApdGhyb3cgZjtNKDEsMCl9fWZ1bmN0aW9uIEFhKGUscixpLHMsZixwLEUsUyl7dmFyIHg9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFLFMpfWNhdGNoKFIpe2lmKFAoeCksUiE9PVIrMCl0aHJvdyBSO00oMSwwKX19ZnVuY3Rpb24gSWEoZSxyLGkscyxmLHAsRSxTLHgsUixYLGxlKXt2YXIgd2U9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFLFMseCxSLFgsbGUpfWNhdGNoKGJlKXtpZihQKHdlKSxiZSE9PWJlKzApdGhyb3cgYmU7TSgxLDApfX1mdW5jdGlvbiBCYShlLHIsaSxzLGYscCl7dmFyIEU9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyxmLHApfWNhdGNoKFMpe2lmKFAoRSksUyE9PVMrMCl0aHJvdyBTO00oMSwwKX19ZnVuY3Rpb24gTGEoZSxyLGkpe3ZhciBzPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpKX1jYXRjaChmKXtpZihQKHMpLGYhPT1mKzApdGhyb3cgZjtyZXR1cm4gTSgxLDApLDBufX1mdW5jdGlvbiBfYShlLHIsaSxzLGYscCxFLFMseCl7dmFyIFI9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFLFMseCl9Y2F0Y2goWCl7aWYoUChSKSxYIT09WCswKXRocm93IFg7TSgxLDApfX1mdW5jdGlvbiBQYShlKXt2YXIgcj1VKCk7dHJ5e3JldHVybiBDKGUpKCl9Y2F0Y2goaSl7aWYoUChyKSxpIT09aSswKXRocm93IGk7TSgxLDApfX1mdW5jdGlvbiBEYShlLHIpe3ZhciBpPVUoKTt0cnl7cmV0dXJuIEMoZSkocil9Y2F0Y2gocyl7aWYoUChpKSxzIT09cyswKXRocm93IHM7cmV0dXJuIE0oMSwwKSwwbn19ZnVuY3Rpb24gVWEoZSl7dmFyIHI9VSgpO3RyeXtyZXR1cm4gQyhlKSgpfWNhdGNoKGkpe2lmKFAociksaSE9PWkrMCl0aHJvdyBpO3JldHVybiBNKDEsMCksMG59fWZ1bmN0aW9uIHhhKGUscixpLHMpe3ZhciBmPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMpfWNhdGNoKHApe2lmKFAoZikscCE9PXArMCl0aHJvdyBwO00oMSwwKX19ZnVuY3Rpb24gTWEoZSxyLGkscyxmKXt2YXIgcD1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYpfWNhdGNoKEUpe2lmKFAocCksRSE9PUUrMCl0aHJvdyBFO00oMSwwKX19ZnVuY3Rpb24gQ2EoZSxyLGkscyxmLHApe3ZhciBFPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZixwKX1jYXRjaChTKXtpZihQKEUpLFMhPT1TKzApdGhyb3cgUztNKDEsMCl9fWZ1bmN0aW9uIFJhKGUscixpLHMsZixwKXt2YXIgRT1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzLGYscCl9Y2F0Y2goUyl7aWYoUChFKSxTIT09UyswKXRocm93IFM7TSgxLDApfX1mdW5jdGlvbiBGYShlLHIsaSxzLGYscCxFLFMpe3ZhciB4PVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZixwLEUsUyl9Y2F0Y2goUil7aWYoUCh4KSxSIT09UiswKXRocm93IFI7TSgxLDApfX1mdW5jdGlvbiBOYShlLHIsaSxzLGYpe3ZhciBwPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZil9Y2F0Y2goRSl7aWYoUChwKSxFIT09RSswKXRocm93IEU7cmV0dXJuIE0oMSwwKSwwbn19ZnVuY3Rpb24ga2EoZSxyLGkscyl7dmFyIGY9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkscyl9Y2F0Y2gocCl7aWYoUChmKSxwIT09cCswKXRocm93IHA7TSgxLDApfX1mdW5jdGlvbiBXYShlLHIsaSxzKXt2YXIgZj1VKCk7dHJ5e3JldHVybiBDKGUpKHIsaSxzKX1jYXRjaChwKXtpZihQKGYpLHAhPT1wKzApdGhyb3cgcDtNKDEsMCl9fWZ1bmN0aW9uIEdhKGUscixpLHMsZixwLEUsUyx4LFIsWCxsZSl7dmFyIHdlPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpLHMsZixwLEUsUyx4LFIsWCxsZSl9Y2F0Y2goYmUpe2lmKFAod2UpLGJlIT09YmUrMCl0aHJvdyBiZTtNKDEsMCl9fWZ1bmN0aW9uICRhKGUscixpLHMsZixwLEUsUyx4LFIsWCl7dmFyIGxlPVUoKTt0cnl7QyhlKShyLGkscyxmLHAsRSxTLHgsUixYKX1jYXRjaCh3ZSl7aWYoUChsZSksd2UhPT13ZSswKXRocm93IHdlO00oMSwwKX19ZnVuY3Rpb24gemEoZSxyLGkscyxmLHAsRSxTLHgsUixYLGxlLHdlLGJlLFlhLEphKXt2YXIgcWE9VSgpO3RyeXtDKGUpKHIsaSxzLGYscCxFLFMseCxSLFgsbGUsd2UsYmUsWWEsSmEpfWNhdGNoKFl0KXtpZihQKHFhKSxZdCE9PVl0KzApdGhyb3cgWXQ7TSgxLDApfX1mdW5jdGlvbiBIYShlLHIsaSl7dmFyIHM9VSgpO3RyeXtyZXR1cm4gQyhlKShyLGkpfWNhdGNoKGYpe2lmKFAocyksZiE9PWYrMCl0aHJvdyBmO00oMSwwKX19ZnVuY3Rpb24gamEoZSxyLGkpe3ZhciBzPVUoKTt0cnl7cmV0dXJuIEMoZSkocixpKX1jYXRjaChmKXtpZihQKHMpLGYhPT1mKzApdGhyb3cgZjtNKDEsMCl9fWZ1bmN0aW9uIFZhKGUscixpLHMpe3ZhciBmPVUoKTt0cnl7QyhlKShyLGkscyl9Y2F0Y2gocCl7aWYoUChmKSxwIT09cCswKXRocm93IHA7TSgxLDApfX1mdW5jdGlvbiBpdCgpe2lmKDA8UmUpdGU9aXQ7ZWxzZSBpZihvKVQ/Lih0KSxoZSgpO2Vsc2V7Zm9yKHZhciBlPVZlOzA8ZS5sZW5ndGg7KWUuc2hpZnQoKSh0KTswPFJlP3RlPWl0Oih0LmNhbGxlZFJ1bj0hMCxffHwoaGUoKSxUPy4odCkpKX19cmV0dXJuIG98fChFZT1hd2FpdCBVdCgpLGl0KCkpLHQuUFRSX1NJWkU9NCxqZT90Om5ldyBQcm9taXNlKChlLHIpPT57VD1lLEk9cn0pfXZhciBycyxvcyxKcj1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7cnM9VnIsb3M9Z2xvYmFsVGhpcy5zZWxmPy5uYW1lPy5zdGFydHNXaXRoKFwiZW0tcHRocmVhZFwiKTtvcyYmVnIoKX0pO3ZhciBRcixhbixhcyxvZSxacixvbixzcyxpcyxLcix1cyxxcixlbyxYcix0byxwdD1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7ZHQoKTtRcj10eXBlb2YgbG9jYXRpb24+XCJ1XCI/dm9pZCAwOmxvY2F0aW9uLm9yaWdpbixhbj1pbXBvcnQubWV0YS51cmw+XCJmaWxlOlwiJiZpbXBvcnQubWV0YS51cmw8XCJmaWxlO1wiLGFzPSgpPT57aWYoISExKXtpZihhbil7bGV0IG49VVJMO3JldHVybiBuZXcgVVJMKG5ldyBuKFwib3J0Lndhc20uYnVuZGxlLm1pbi5tanNcIixpbXBvcnQubWV0YS51cmwpLmhyZWYsUXIpLmhyZWZ9cmV0dXJuIGltcG9ydC5tZXRhLnVybH19LG9lPWFzKCksWnI9KCk9PntpZihvZSYmIW9lLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSlyZXR1cm4gb2Uuc3Vic3RyaW5nKDAsb2UubGFzdEluZGV4T2YoXCIvXCIpKzEpfSxvbj0obix0KT0+e3RyeXtsZXQgYT10Pz9vZTtyZXR1cm4oYT9uZXcgVVJMKG4sYSk6bmV3IFVSTChuKSkub3JpZ2luPT09UXJ9Y2F0Y2h7cmV0dXJuITF9fSxzcz0obix0KT0+e2xldCBhPXQ/P29lO3RyeXtyZXR1cm4oYT9uZXcgVVJMKG4sYSk6bmV3IFVSTChuKSkuaHJlZn1jYXRjaHtyZXR1cm59fSxpcz0obix0KT0+YCR7dD8/XCIuL1wifSR7bn1gLEtyPWFzeW5jIG49PntsZXQgYT1hd2FpdChhd2FpdCBmZXRjaChuLHtjcmVkZW50aWFsczpcInNhbWUtb3JpZ2luXCJ9KSkuYmxvYigpO3JldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGEpfSx1cz1hc3luYyBuPT4oYXdhaXQgaW1wb3J0KC8qd2VicGFja0lnbm9yZTp0cnVlKi8gLypAdml0ZS1pZ25vcmUqL24pKS5kZWZhdWx0LHFyPShqcigpLFh0KEhyKSkuZGVmYXVsdCxlbz1hc3luYygpPT57aWYoIW9lKXRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIHByb3h5IHdvcmtlcjogY2Fubm90IGRldGVybWluZSB0aGUgc2NyaXB0IHNvdXJjZSBVUkwuXCIpO2lmKG9uKG9lKSlyZXR1cm5bdm9pZCAwLHFyKCldO2xldCBuPWF3YWl0IEtyKG9lKTtyZXR1cm5bbixxcihuKV19LFhyPShKcigpLFh0KFlyKSkuZGVmYXVsdCx0bz1hc3luYyhuLHQsYSx1KT0+e2xldCBvPVhyJiYhKG58fHQpO2lmKG8paWYob2Upbz1vbihvZSl8fHUmJiFhO2Vsc2UgaWYodSYmIWEpbz0hMDtlbHNlIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBkZXRlcm1pbmUgdGhlIHNjcmlwdCBzb3VyY2UgVVJMLlwiKTtpZihvKXJldHVyblt2b2lkIDAsWHJdO3tsZXQgZD1cIm9ydC13YXNtLXNpbWQtdGhyZWFkZWQubWpzXCIsYz1uPz9zcyhkLHQpLGw9ISExJiZhJiZjJiYhb24oYyx0KSxtPWw/YXdhaXQgS3IoYyk6Yz8/aXMoZCx0KTtyZXR1cm5bbD9tOnZvaWQgMCxhd2FpdCB1cyhtKV19fX0pO3ZhciBzbix1bixTdCxubyxmcyxjcyxscyxtdCwkLHhlPU4oKCk9PntcInVzZSBzdHJpY3RcIjtwdCgpO3VuPSExLFN0PSExLG5vPSExLGZzPSgpPT57aWYodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyPlwidVwiKXJldHVybiExO3RyeXtyZXR1cm4gdHlwZW9mIE1lc3NhZ2VDaGFubmVsPFwidVwiJiZuZXcgTWVzc2FnZUNoYW5uZWwoKS5wb3J0MS5wb3N0TWVzc2FnZShuZXcgU2hhcmVkQXJyYXlCdWZmZXIoMSkpLFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLDk3LDExNSwxMDksMSwwLDAsMCwxLDQsMSw5NiwwLDAsMywyLDEsMCw1LDQsMSwzLDEsMSwxMCwxMSwxLDksMCw2NSwwLDI1NCwxNiwyLDAsMjYsMTFdKSl9Y2F0Y2h7cmV0dXJuITF9fSxjcz0oKT0+e3RyeXtyZXR1cm4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsOTcsMTE1LDEwOSwxLDAsMCwwLDEsNCwxLDk2LDAsMCwzLDIsMSwwLDEwLDMwLDEsMjgsMCw2NSwwLDI1MywxNSwyNTMsMTIsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyNTMsMTg2LDEsMjYsMTFdKSl9Y2F0Y2h7cmV0dXJuITF9fSxscz0oKT0+e3RyeXtyZXR1cm4gV2ViQXNzZW1ibHkudmFsaWRhdGUobmV3IFVpbnQ4QXJyYXkoWzAsOTcsMTE1LDEwOSwxLDAsMCwwLDEsNSwxLDk2LDAsMSwxMjMsMywyLDEsMCwxMCwxOSwxLDE3LDAsNjUsMSwyNTMsMTUsNjUsMiwyNTMsMTUsNjUsMywyNTMsMTUsMjUzLDE0NywyLDExXSkpfWNhdGNoe3JldHVybiExfX0sbXQ9YXN5bmMgbj0+e2lmKHVuKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTtpZihTdCl0aHJvdyBuZXcgRXJyb3IoXCJtdWx0aXBsZSBjYWxscyB0byAnaW5pdGlhbGl6ZVdlYkFzc2VtYmx5KCknIGRldGVjdGVkLlwiKTtpZihubyl0aHJvdyBuZXcgRXJyb3IoXCJwcmV2aW91cyBjYWxsIHRvICdpbml0aWFsaXplV2ViQXNzZW1ibHkoKScgZmFpbGVkLlwiKTtTdD0hMDtsZXQgdD1uLmluaXRUaW1lb3V0LGE9bi5udW1UaHJlYWRzO2lmKG4uc2ltZCE9PSExKXtpZihuLnNpbWQ9PT1cInJlbGF4ZWRcIil7aWYoIWxzKCkpdGhyb3cgbmV3IEVycm9yKFwiUmVsYXhlZCBXZWJBc3NlbWJseSBTSU1EIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXCIpfWVsc2UgaWYoIWNzKCkpdGhyb3cgbmV3IEVycm9yKFwiV2ViQXNzZW1ibHkgU0lNRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlwiKX1sZXQgdT1mcygpO2E+MSYmIXUmJih0eXBlb2Ygc2VsZjxcInVcIiYmIXNlbGYuY3Jvc3NPcmlnaW5Jc29sYXRlZCYmY29uc29sZS53YXJuKFwiZW52Lndhc20ubnVtVGhyZWFkcyBpcyBzZXQgdG8gXCIrYStcIiwgYnV0IHRoaXMgd2lsbCBub3Qgd29yayB1bmxlc3MgeW91IGVuYWJsZSBjcm9zc09yaWdpbklzb2xhdGVkIG1vZGUuIFNlZSBodHRwczovL3dlYi5kZXYvY3Jvc3Mtb3JpZ2luLWlzb2xhdGlvbi1ndWlkZS8gZm9yIG1vcmUgaW5mby5cIiksY29uc29sZS53YXJuKFwiV2ViQXNzZW1ibHkgbXVsdGktdGhyZWFkaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuIEZhbGxpbmcgYmFjayB0byBzaW5nbGUtdGhyZWFkaW5nLlwiKSxuLm51bVRocmVhZHM9YT0xKTtsZXQgbz1uLndhc21QYXRocyxkPXR5cGVvZiBvPT1cInN0cmluZ1wiP286dm9pZCAwLGM9bz8ubWpzLGw9Yz8uaHJlZj8/YyxtPW8/Lndhc20saD1tPy5ocmVmPz9tLGc9bi53YXNtQmluYXJ5LFtiLHldPWF3YWl0IHRvKGwsZCxhPjEsISFnfHwhIWgpLFQ9ITEsST1bXTtpZih0PjAmJkkucHVzaChuZXcgUHJvbWlzZShEPT57c2V0VGltZW91dCgoKT0+e1Q9ITAsRCgpfSx0KX0pKSxJLnB1c2gobmV3IFByb21pc2UoKEQseik9PntsZXQgdj17bnVtVGhyZWFkczphfTtpZihnKXYud2FzbUJpbmFyeT1nLHYubG9jYXRlRmlsZT1PPT5PO2Vsc2UgaWYoaHx8ZCl2LmxvY2F0ZUZpbGU9Tz0+aD8/ZCtPO2Vsc2UgaWYobCYmbC5pbmRleE9mKFwiYmxvYjpcIikhPT0wKXYubG9jYXRlRmlsZT1PPT5uZXcgVVJMKE8sbCkuaHJlZjtlbHNlIGlmKGIpe2xldCBPPVpyKCk7TyYmKHYubG9jYXRlRmlsZT1GPT5PK0YpfXkodikudGhlbihPPT57U3Q9ITEsdW49ITAsc249TyxEKCksYiYmVVJMLnJldm9rZU9iamVjdFVSTChiKX0sTz0+e1N0PSExLG5vPSEwLHooTyl9KX0pKSxhd2FpdCBQcm9taXNlLnJhY2UoSSksVCl0aHJvdyBuZXcgRXJyb3IoYFdlYkFzc2VtYmx5IGJhY2tlbmQgaW5pdGlhbGl6aW5nIGZhaWxlZCBkdWUgdG8gdGltZW91dDogJHt0fW1zYCl9LCQ9KCk9PntpZih1biYmc24pcmV0dXJuIHNuO3Rocm93IG5ldyBFcnJvcihcIldlYkFzc2VtYmx5IGlzIG5vdCBpbml0aWFsaXplZCB5ZXQuXCIpfX0pO3ZhciBhZSxaZSxHLHZ0PU4oKCk9PntcInVzZSBzdHJpY3RcIjt4ZSgpO2FlPShuLHQpPT57bGV0IGE9JCgpLHU9YS5sZW5ndGhCeXRlc1VURjgobikrMSxvPWEuX21hbGxvYyh1KTtyZXR1cm4gYS5zdHJpbmdUb1VURjgobixvLHUpLHQucHVzaChvKSxvfSxaZT0obix0LGEsdSk9PntpZih0eXBlb2Ygbj09XCJvYmplY3RcIiYmbiE9PW51bGwpe2lmKGEuaGFzKG4pKXRocm93IG5ldyBFcnJvcihcIkNpcmN1bGFyIHJlZmVyZW5jZSBpbiBvcHRpb25zXCIpO2EuYWRkKG4pfU9iamVjdC5lbnRyaWVzKG4pLmZvckVhY2goKFtvLGRdKT0+e2xldCBjPXQ/dCtvOm87aWYodHlwZW9mIGQ9PVwib2JqZWN0XCIpWmUoZCxjK1wiLlwiLGEsdSk7ZWxzZSBpZih0eXBlb2YgZD09XCJzdHJpbmdcInx8dHlwZW9mIGQ9PVwibnVtYmVyXCIpdShjLGQudG9TdHJpbmcoKSk7ZWxzZSBpZih0eXBlb2YgZD09XCJib29sZWFuXCIpdShjLGQ/XCIxXCI6XCIwXCIpO2Vsc2UgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBoYW5kbGUgZXh0cmEgY29uZmlnIHR5cGU6ICR7dHlwZW9mIGR9YCl9KX0sRz1uPT57bGV0IHQ9JCgpLGE9dC5zdGFja1NhdmUoKTt0cnl7bGV0IHU9dC5QVFJfU0laRSxvPXQuc3RhY2tBbGxvYygyKnUpO3QuX09ydEdldExhc3RFcnJvcihvLG8rdSk7bGV0IGQ9TnVtYmVyKHQuZ2V0VmFsdWUobyx1PT09ND9cImkzMlwiOlwiaTY0XCIpKSxjPXQuZ2V0VmFsdWUobyt1LFwiKlwiKSxsPWM/dC5VVEY4VG9TdHJpbmcoYyk6XCJcIjt0aHJvdyBuZXcgRXJyb3IoYCR7bn0gRVJST1JfQ09ERTogJHtkfSwgRVJST1JfTUVTU0FHRTogJHtsfWApfWZpbmFsbHl7dC5zdGFja1Jlc3RvcmUoYSl9fX0pO3ZhciBybyxvbz1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7eGUoKTt2dCgpO3JvPW49PntsZXQgdD0kKCksYT0wLHU9W10sbz1ufHx7fTt0cnl7aWYobj8ubG9nU2V2ZXJpdHlMZXZlbD09PXZvaWQgMClvLmxvZ1NldmVyaXR5TGV2ZWw9MjtlbHNlIGlmKHR5cGVvZiBuLmxvZ1NldmVyaXR5TGV2ZWwhPVwibnVtYmVyXCJ8fCFOdW1iZXIuaXNJbnRlZ2VyKG4ubG9nU2V2ZXJpdHlMZXZlbCl8fG4ubG9nU2V2ZXJpdHlMZXZlbDwwfHxuLmxvZ1NldmVyaXR5TGV2ZWw+NCl0aHJvdyBuZXcgRXJyb3IoYGxvZyBzZXZlcml0eSBsZXZlbCBpcyBub3QgdmFsaWQ6ICR7bi5sb2dTZXZlcml0eUxldmVsfWApO2lmKG4/LmxvZ1ZlcmJvc2l0eUxldmVsPT09dm9pZCAwKW8ubG9nVmVyYm9zaXR5TGV2ZWw9MDtlbHNlIGlmKHR5cGVvZiBuLmxvZ1ZlcmJvc2l0eUxldmVsIT1cIm51bWJlclwifHwhTnVtYmVyLmlzSW50ZWdlcihuLmxvZ1ZlcmJvc2l0eUxldmVsKSl0aHJvdyBuZXcgRXJyb3IoYGxvZyB2ZXJib3NpdHkgbGV2ZWwgaXMgbm90IHZhbGlkOiAke24ubG9nVmVyYm9zaXR5TGV2ZWx9YCk7bj8udGVybWluYXRlPT09dm9pZCAwJiYoby50ZXJtaW5hdGU9ITEpO2xldCBkPTA7cmV0dXJuIG4/LnRhZyE9PXZvaWQgMCYmKGQ9YWUobi50YWcsdSkpLGE9dC5fT3J0Q3JlYXRlUnVuT3B0aW9ucyhvLmxvZ1NldmVyaXR5TGV2ZWwsby5sb2dWZXJib3NpdHlMZXZlbCwhIW8udGVybWluYXRlLGQpLGE9PT0wJiZHKFwiQ2FuJ3QgY3JlYXRlIHJ1biBvcHRpb25zLlwiKSxuPy5leHRyYSE9PXZvaWQgMCYmWmUobi5leHRyYSxcIlwiLG5ldyBXZWFrU2V0LChjLGwpPT57bGV0IG09YWUoYyx1KSxoPWFlKGwsdSk7dC5fT3J0QWRkUnVuQ29uZmlnRW50cnkoYSxtLGgpIT09MCYmRyhgQ2FuJ3Qgc2V0IGEgcnVuIGNvbmZpZyBlbnRyeTogJHtjfSAtICR7bH0uYCl9KSxbYSx1XX1jYXRjaChkKXt0aHJvdyBhIT09MCYmdC5fT3J0UmVsZWFzZVJ1bk9wdGlvbnMoYSksdS5mb3JFYWNoKGM9PnQuX2ZyZWUoYykpLGR9fX0pO3ZhciBkcyxwcyxtcyxrZSxocyxhbyxzbz1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7eGUoKTt2dCgpO2RzPW49Pntzd2l0Y2gobil7Y2FzZVwiZGlzYWJsZWRcIjpyZXR1cm4gMDtjYXNlXCJiYXNpY1wiOnJldHVybiAxO2Nhc2VcImV4dGVuZGVkXCI6cmV0dXJuIDI7Y2FzZVwibGF5b3V0XCI6cmV0dXJuIDM7Y2FzZVwiYWxsXCI6cmV0dXJuIDk5O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBncmFwaCBvcHRpbWl6YXRpb24gbGV2ZWw6ICR7bn1gKX19LHBzPW49Pntzd2l0Y2gobil7Y2FzZVwic2VxdWVudGlhbFwiOnJldHVybiAwO2Nhc2VcInBhcmFsbGVsXCI6cmV0dXJuIDE7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIGV4ZWN1dGlvbiBtb2RlOiAke259YCl9fSxtcz1uPT57bi5leHRyYXx8KG4uZXh0cmE9e30pLG4uZXh0cmEuc2Vzc2lvbnx8KG4uZXh0cmEuc2Vzc2lvbj17fSk7bGV0IHQ9bi5leHRyYS5zZXNzaW9uO3QudXNlX29ydF9tb2RlbF9ieXRlc19kaXJlY3RseXx8KHQudXNlX29ydF9tb2RlbF9ieXRlc19kaXJlY3RseT1cIjFcIiksbi5leGVjdXRpb25Qcm92aWRlcnMmJm4uZXhlY3V0aW9uUHJvdmlkZXJzLnNvbWUoYT0+KHR5cGVvZiBhPT1cInN0cmluZ1wiP2E6YS5uYW1lKT09PVwid2ViZ3B1XCIpJiYobi5lbmFibGVNZW1QYXR0ZXJuPSExKX0sa2U9KG4sdCxhLHUpPT57bGV0IG89YWUodCx1KSxkPWFlKGEsdSk7JCgpLl9PcnRBZGRTZXNzaW9uQ29uZmlnRW50cnkobixvLGQpIT09MCYmRyhgQ2FuJ3Qgc2V0IGEgc2Vzc2lvbiBjb25maWcgZW50cnk6ICR7dH0gLSAke2F9LmApfSxocz1hc3luYyhuLHQsYSk9PntsZXQgdT10LmV4ZWN1dGlvblByb3ZpZGVycztmb3IobGV0IG8gb2YgdSl7bGV0IGQ9dHlwZW9mIG89PVwic3RyaW5nXCI/bzpvLm5hbWUsYz1bXTtzd2l0Y2goZCl7Y2FzZVwid2Vibm5cIjppZihkPVwiV0VCTk5cIixrZShuLFwic2Vzc2lvbi5kaXNhYmxlX3F1YW50X3FkcVwiLFwiMVwiLGEpLGtlKG4sXCJzZXNzaW9uLmRpc2FibGVfcWRxX2NvbnN0YW50X2ZvbGRpbmdcIixcIjFcIixhKSx0eXBlb2YgbyE9XCJzdHJpbmdcIil7bGV0IHk9bz8uZGV2aWNlVHlwZTt5JiZrZShuLFwiZGV2aWNlVHlwZVwiLHksYSl9YnJlYWs7Y2FzZVwid2ViZ3B1XCI6aWYoZD1cIkpTXCIsdHlwZW9mIG8hPVwic3RyaW5nXCIpe2xldCBiPW87aWYoYj8ucHJlZmVycmVkTGF5b3V0KXtpZihiLnByZWZlcnJlZExheW91dCE9PVwiTkNIV1wiJiZiLnByZWZlcnJlZExheW91dCE9PVwiTkhXQ1wiKXRocm93IG5ldyBFcnJvcihgcHJlZmVycmVkTGF5b3V0IG11c3QgYmUgZWl0aGVyICdOQ0hXJyBvciAnTkhXQyc6ICR7Yi5wcmVmZXJyZWRMYXlvdXR9YCk7a2UobixcInByZWZlcnJlZExheW91dFwiLGIucHJlZmVycmVkTGF5b3V0LGEpfX1icmVhaztjYXNlXCJ3YXNtXCI6Y2FzZVwiY3B1XCI6Y29udGludWU7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYG5vdCBzdXBwb3J0ZWQgZXhlY3V0aW9uIHByb3ZpZGVyOiAke2R9YCl9bGV0IGw9YWUoZCxhKSxtPWMubGVuZ3RoLGg9MCxnPTA7aWYobT4wKXtoPSQoKS5fbWFsbG9jKG0qJCgpLlBUUl9TSVpFKSxhLnB1c2goaCksZz0kKCkuX21hbGxvYyhtKiQoKS5QVFJfU0laRSksYS5wdXNoKGcpO2ZvcihsZXQgYj0wO2I8bTtiKyspJCgpLnNldFZhbHVlKGgrYiokKCkuUFRSX1NJWkUsY1tiXVswXSxcIipcIiksJCgpLnNldFZhbHVlKGcrYiokKCkuUFRSX1NJWkUsY1tiXVsxXSxcIipcIil9YXdhaXQgJCgpLl9PcnRBcHBlbmRFeGVjdXRpb25Qcm92aWRlcihuLGwsaCxnLG0pIT09MCYmRyhgQ2FuJ3QgYXBwZW5kIGV4ZWN1dGlvbiBwcm92aWRlcjogJHtkfS5gKX19LGFvPWFzeW5jIG49PntsZXQgdD0kKCksYT0wLHU9W10sbz1ufHx7fTttcyhvKTt0cnl7bGV0IGQ9ZHMoby5ncmFwaE9wdGltaXphdGlvbkxldmVsPz9cImFsbFwiKSxjPXBzKG8uZXhlY3V0aW9uTW9kZT8/XCJzZXF1ZW50aWFsXCIpLGw9dHlwZW9mIG8ubG9nSWQ9PVwic3RyaW5nXCI/YWUoby5sb2dJZCx1KTowLG09by5sb2dTZXZlcml0eUxldmVsPz8yO2lmKCFOdW1iZXIuaXNJbnRlZ2VyKG0pfHxtPDB8fG0+NCl0aHJvdyBuZXcgRXJyb3IoYGxvZyBzZXZlcml0eSBsZXZlbCBpcyBub3QgdmFsaWQ6ICR7bX1gKTtsZXQgaD1vLmxvZ1ZlcmJvc2l0eUxldmVsPz8wO2lmKCFOdW1iZXIuaXNJbnRlZ2VyKGgpfHxoPDB8fGg+NCl0aHJvdyBuZXcgRXJyb3IoYGxvZyB2ZXJib3NpdHkgbGV2ZWwgaXMgbm90IHZhbGlkOiAke2h9YCk7bGV0IGc9dHlwZW9mIG8ub3B0aW1pemVkTW9kZWxGaWxlUGF0aD09XCJzdHJpbmdcIj9hZShvLm9wdGltaXplZE1vZGVsRmlsZVBhdGgsdSk6MDtpZihhPXQuX09ydENyZWF0ZVNlc3Npb25PcHRpb25zKGQsISFvLmVuYWJsZUNwdU1lbUFyZW5hLCEhby5lbmFibGVNZW1QYXR0ZXJuLGMsISFvLmVuYWJsZVByb2ZpbGluZywwLGwsbSxoLGcpLGE9PT0wJiZHKFwiQ2FuJ3QgY3JlYXRlIHNlc3Npb24gb3B0aW9ucy5cIiksby5leGVjdXRpb25Qcm92aWRlcnMmJmF3YWl0IGhzKGEsbyx1KSxvLmVuYWJsZUdyYXBoQ2FwdHVyZSE9PXZvaWQgMCl7aWYodHlwZW9mIG8uZW5hYmxlR3JhcGhDYXB0dXJlIT1cImJvb2xlYW5cIil0aHJvdyBuZXcgRXJyb3IoYGVuYWJsZUdyYXBoQ2FwdHVyZSBtdXN0IGJlIGEgYm9vbGVhbiB2YWx1ZTogJHtvLmVuYWJsZUdyYXBoQ2FwdHVyZX1gKTtrZShhLFwiZW5hYmxlR3JhcGhDYXB0dXJlXCIsby5lbmFibGVHcmFwaENhcHR1cmUudG9TdHJpbmcoKSx1KX1pZihvLmZyZWVEaW1lbnNpb25PdmVycmlkZXMpZm9yKGxldFtiLHldb2YgT2JqZWN0LmVudHJpZXMoby5mcmVlRGltZW5zaW9uT3ZlcnJpZGVzKSl7aWYodHlwZW9mIGIhPVwic3RyaW5nXCIpdGhyb3cgbmV3IEVycm9yKGBmcmVlIGRpbWVuc2lvbiBvdmVycmlkZSBuYW1lIG11c3QgYmUgYSBzdHJpbmc6ICR7Yn1gKTtpZih0eXBlb2YgeSE9XCJudW1iZXJcInx8IU51bWJlci5pc0ludGVnZXIoeSl8fHk8MCl0aHJvdyBuZXcgRXJyb3IoYGZyZWUgZGltZW5zaW9uIG92ZXJyaWRlIHZhbHVlIG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlcjogJHt5fWApO2xldCBUPWFlKGIsdSk7dC5fT3J0QWRkRnJlZURpbWVuc2lvbk92ZXJyaWRlKGEsVCx5KSE9PTAmJkcoYENhbid0IHNldCBhIGZyZWUgZGltZW5zaW9uIG92ZXJyaWRlOiAke2J9IC0gJHt5fS5gKX1yZXR1cm4gby5leHRyYSE9PXZvaWQgMCYmWmUoby5leHRyYSxcIlwiLG5ldyBXZWFrU2V0LChiLHkpPT57a2UoYSxiLHksdSl9KSxbYSx1XX1jYXRjaChkKXt0aHJvdyBhIT09MCYmdC5fT3J0UmVsZWFzZVNlc3Npb25PcHRpb25zKGEpIT09MCYmRyhcIkNhbid0IHJlbGVhc2Ugc2Vzc2lvbiBvcHRpb25zLlwiKSx1LmZvckVhY2goYz0+dC5fZnJlZShjKSksZH19fSk7dmFyIFdlLE90LEdlLGlvLHVvLEF0LEl0LGZvLGZuPU4oKCk9PntcInVzZSBzdHJpY3RcIjtXZT1uPT57c3dpdGNoKG4pe2Nhc2VcImludDhcIjpyZXR1cm4gMztjYXNlXCJ1aW50OFwiOnJldHVybiAyO2Nhc2VcImJvb2xcIjpyZXR1cm4gOTtjYXNlXCJpbnQxNlwiOnJldHVybiA1O2Nhc2VcInVpbnQxNlwiOnJldHVybiA0O2Nhc2VcImludDMyXCI6cmV0dXJuIDY7Y2FzZVwidWludDMyXCI6cmV0dXJuIDEyO2Nhc2VcImZsb2F0MTZcIjpyZXR1cm4gMTA7Y2FzZVwiZmxvYXQzMlwiOnJldHVybiAxO2Nhc2VcImZsb2F0NjRcIjpyZXR1cm4gMTE7Y2FzZVwic3RyaW5nXCI6cmV0dXJuIDg7Y2FzZVwiaW50NjRcIjpyZXR1cm4gNztjYXNlXCJ1aW50NjRcIjpyZXR1cm4gMTM7Y2FzZVwiaW50NFwiOnJldHVybiAyMjtjYXNlXCJ1aW50NFwiOnJldHVybiAyMTtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgZGF0YSB0eXBlOiAke259YCl9fSxPdD1uPT57c3dpdGNoKG4pe2Nhc2UgMzpyZXR1cm5cImludDhcIjtjYXNlIDI6cmV0dXJuXCJ1aW50OFwiO2Nhc2UgOTpyZXR1cm5cImJvb2xcIjtjYXNlIDU6cmV0dXJuXCJpbnQxNlwiO2Nhc2UgNDpyZXR1cm5cInVpbnQxNlwiO2Nhc2UgNjpyZXR1cm5cImludDMyXCI7Y2FzZSAxMjpyZXR1cm5cInVpbnQzMlwiO2Nhc2UgMTA6cmV0dXJuXCJmbG9hdDE2XCI7Y2FzZSAxOnJldHVyblwiZmxvYXQzMlwiO2Nhc2UgMTE6cmV0dXJuXCJmbG9hdDY0XCI7Y2FzZSA4OnJldHVyblwic3RyaW5nXCI7Y2FzZSA3OnJldHVyblwiaW50NjRcIjtjYXNlIDEzOnJldHVyblwidWludDY0XCI7Y2FzZSAyMjpyZXR1cm5cImludDRcIjtjYXNlIDIxOnJldHVyblwidWludDRcIjtkZWZhdWx0OnRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgZGF0YSB0eXBlOiAke259YCl9fSxHZT0obix0KT0+e2xldCBhPVstMSw0LDEsMSwyLDIsNCw4LC0xLDEsMiw4LDQsOCwtMSwtMSwtMSwtMSwtMSwtMSwtMSwuNSwuNV1bbl0sdT10eXBlb2YgdD09XCJudW1iZXJcIj90OnQucmVkdWNlKChvLGQpPT5vKmQsMSk7cmV0dXJuIGE+MD9NYXRoLmNlaWwodSphKTp2b2lkIDB9LGlvPW49Pntzd2l0Y2gobil7Y2FzZVwiZmxvYXQxNlwiOnJldHVybiB0eXBlb2YgRmxvYXQxNkFycmF5PFwidVwiJiZGbG9hdDE2QXJyYXkuZnJvbT9GbG9hdDE2QXJyYXk6VWludDE2QXJyYXk7Y2FzZVwiZmxvYXQzMlwiOnJldHVybiBGbG9hdDMyQXJyYXk7Y2FzZVwidWludDhcIjpyZXR1cm4gVWludDhBcnJheTtjYXNlXCJpbnQ4XCI6cmV0dXJuIEludDhBcnJheTtjYXNlXCJ1aW50MTZcIjpyZXR1cm4gVWludDE2QXJyYXk7Y2FzZVwiaW50MTZcIjpyZXR1cm4gSW50MTZBcnJheTtjYXNlXCJpbnQzMlwiOnJldHVybiBJbnQzMkFycmF5O2Nhc2VcImJvb2xcIjpyZXR1cm4gVWludDhBcnJheTtjYXNlXCJmbG9hdDY0XCI6cmV0dXJuIEZsb2F0NjRBcnJheTtjYXNlXCJ1aW50MzJcIjpyZXR1cm4gVWludDMyQXJyYXk7Y2FzZVwiaW50NjRcIjpyZXR1cm4gQmlnSW50NjRBcnJheTtjYXNlXCJ1aW50NjRcIjpyZXR1cm4gQmlnVWludDY0QXJyYXk7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIHR5cGU6ICR7bn1gKX19LHVvPW49Pntzd2l0Y2gobil7Y2FzZVwidmVyYm9zZVwiOnJldHVybiAwO2Nhc2VcImluZm9cIjpyZXR1cm4gMTtjYXNlXCJ3YXJuaW5nXCI6cmV0dXJuIDI7Y2FzZVwiZXJyb3JcIjpyZXR1cm4gMztjYXNlXCJmYXRhbFwiOnJldHVybiA0O2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGB1bnN1cHBvcnRlZCBsb2dnaW5nIGxldmVsOiAke259YCl9fSxBdD1uPT5uPT09XCJmbG9hdDMyXCJ8fG49PT1cImZsb2F0MTZcInx8bj09PVwiaW50MzJcInx8bj09PVwiaW50NjRcInx8bj09PVwidWludDMyXCJ8fG49PT1cInVpbnQ4XCJ8fG49PT1cImJvb2xcInx8bj09PVwidWludDRcInx8bj09PVwiaW50NFwiLEl0PW49Pm49PT1cImZsb2F0MzJcInx8bj09PVwiZmxvYXQxNlwifHxuPT09XCJpbnQzMlwifHxuPT09XCJpbnQ2NFwifHxuPT09XCJ1aW50MzJcInx8bj09PVwidWludDY0XCJ8fG49PT1cImludDhcInx8bj09PVwidWludDhcInx8bj09PVwiYm9vbFwifHxuPT09XCJ1aW50NFwifHxuPT09XCJpbnQ0XCIsZm89bj0+e3N3aXRjaChuKXtjYXNlXCJub25lXCI6cmV0dXJuIDA7Y2FzZVwiY3B1XCI6cmV0dXJuIDE7Y2FzZVwiY3B1LXBpbm5lZFwiOnJldHVybiAyO2Nhc2VcInRleHR1cmVcIjpyZXR1cm4gMztjYXNlXCJncHUtYnVmZmVyXCI6cmV0dXJuIDQ7Y2FzZVwibWwtdGVuc29yXCI6cmV0dXJuIDU7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoYHVuc3VwcG9ydGVkIGRhdGEgbG9jYXRpb246ICR7bn1gKX19fSk7dmFyIEtlLGNuPU4oKCk9PntcInVzZSBzdHJpY3RcIjtkdCgpO0tlPWFzeW5jIG49PntpZih0eXBlb2Ygbj09XCJzdHJpbmdcIilpZighMSl0cnl7bGV0e3JlYWRGaWxlOnR9PXF0KFwibm9kZTpmcy9wcm9taXNlc1wiKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgdChuKSl9Y2F0Y2godCl7aWYodC5jb2RlPT09XCJFUlJfRlNfRklMRV9UT09fTEFSR0VcIil7bGV0e2NyZWF0ZVJlYWRTdHJlYW06YX09cXQoXCJub2RlOmZzXCIpLHU9YShuKSxvPVtdO2ZvciBhd2FpdChsZXQgZCBvZiB1KW8ucHVzaChkKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoQnVmZmVyLmNvbmNhdChvKSl9dGhyb3cgdH1lbHNle2xldCB0PWF3YWl0IGZldGNoKG4pO2lmKCF0Lm9rKXRocm93IG5ldyBFcnJvcihgZmFpbGVkIHRvIGxvYWQgZXh0ZXJuYWwgZGF0YSBmaWxlOiAke259YCk7bGV0IGE9dC5oZWFkZXJzLmdldChcIkNvbnRlbnQtTGVuZ3RoXCIpLHU9YT9wYXJzZUludChhLDEwKTowO2lmKHU8MTA3Mzc0MTgyNClyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgdC5hcnJheUJ1ZmZlcigpKTt7aWYoIXQuYm9keSl0aHJvdyBuZXcgRXJyb3IoYGZhaWxlZCB0byBsb2FkIGV4dGVybmFsIGRhdGEgZmlsZTogJHtufSwgbm8gcmVzcG9uc2UgYm9keS5gKTtsZXQgbz10LmJvZHkuZ2V0UmVhZGVyKCksZDt0cnl7ZD1uZXcgQXJyYXlCdWZmZXIodSl9Y2F0Y2gobCl7aWYobCBpbnN0YW5jZW9mIFJhbmdlRXJyb3Ipe2xldCBtPU1hdGguY2VpbCh1LzY1NTM2KTtkPW5ldyBXZWJBc3NlbWJseS5NZW1vcnkoe2luaXRpYWw6bSxtYXhpbXVtOm19KS5idWZmZXJ9ZWxzZSB0aHJvdyBsfWxldCBjPTA7Zm9yKDs7KXtsZXR7ZG9uZTpsLHZhbHVlOm19PWF3YWl0IG8ucmVhZCgpO2lmKGwpYnJlYWs7bGV0IGg9bS5ieXRlTGVuZ3RoO25ldyBVaW50OEFycmF5KGQsYyxoKS5zZXQobSksYys9aH1yZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZCwwLHUpfX1lbHNlIHJldHVybiBuIGluc3RhbmNlb2YgQmxvYj9uZXcgVWludDhBcnJheShhd2FpdCBuLmFycmF5QnVmZmVyKCkpOm4gaW5zdGFuY2VvZiBVaW50OEFycmF5P246bmV3IFVpbnQ4QXJyYXkobil9fSk7dmFyIHdzLGh0LHd0LCRlLGJzLGNvLFFlLGJ0LHl0LGxvLGd0LEV0LFR0LHJuPU4oKCk9PntcInVzZSBzdHJpY3RcIjtUZSgpO29vKCk7c28oKTtmbigpO3hlKCk7dnQoKTtjbigpO3dzPShuLHQpPT57JCgpLl9PcnRJbml0KG4sdCkhPT0wJiZHKFwiQ2FuJ3QgaW5pdGlhbGl6ZSBvbm54cnVudGltZS5cIil9LGh0PWFzeW5jIG49Pnt3cyhuLndhc20ubnVtVGhyZWFkcyx1byhuLmxvZ0xldmVsKSl9LHd0PWFzeW5jKG4sdCk9PnskKCkuYXN5bmNJbml0Py4oKTtsZXQgYT1uLndlYmdwdS5hZGFwdGVyO2lmKHQ9PT1cIndlYmdwdVwiKXtpZih0eXBlb2YgbmF2aWdhdG9yPlwidVwifHwhbmF2aWdhdG9yLmdwdSl0aHJvdyBuZXcgRXJyb3IoXCJXZWJHUFUgaXMgbm90IHN1cHBvcnRlZCBpbiBjdXJyZW50IGVudmlyb25tZW50XCIpO2lmKGEpe2lmKHR5cGVvZiBhLmxpbWl0cyE9XCJvYmplY3RcInx8dHlwZW9mIGEuZmVhdHVyZXMhPVwib2JqZWN0XCJ8fHR5cGVvZiBhLnJlcXVlc3REZXZpY2UhPVwiZnVuY3Rpb25cIil0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEdQVSBhZGFwdGVyIHNldCBpbiBgZW52LndlYmdwdS5hZGFwdGVyYC4gSXQgbXVzdCBiZSBhIEdQVUFkYXB0ZXIgb2JqZWN0LlwiKX1lbHNle2xldCB1PW4ud2ViZ3B1LnBvd2VyUHJlZmVyZW5jZTtpZih1IT09dm9pZCAwJiZ1IT09XCJsb3ctcG93ZXJcIiYmdSE9PVwiaGlnaC1wZXJmb3JtYW5jZVwiKXRocm93IG5ldyBFcnJvcihgSW52YWxpZCBwb3dlclByZWZlcmVuY2Ugc2V0dGluZzogXCIke3V9XCJgKTtsZXQgbz1uLndlYmdwdS5mb3JjZUZhbGxiYWNrQWRhcHRlcjtpZihvIT09dm9pZCAwJiZ0eXBlb2YgbyE9XCJib29sZWFuXCIpdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGZvcmNlRmFsbGJhY2tBZGFwdGVyIHNldHRpbmc6IFwiJHtvfVwiYCk7aWYoYT1hd2FpdCBuYXZpZ2F0b3IuZ3B1LnJlcXVlc3RBZGFwdGVyKHtwb3dlclByZWZlcmVuY2U6dSxmb3JjZUZhbGxiYWNrQWRhcHRlcjpvfSksIWEpdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IEdQVSBhZGFwdGVyLiBZb3UgbWF5IG5lZWQgdG8gZW5hYmxlIGZsYWcgXCItLWVuYWJsZS11bnNhZmUtd2ViZ3B1XCIgaWYgeW91IGFyZSB1c2luZyBDaHJvbWUuJyl9fWlmKHQ9PT1cIndlYm5uXCImJih0eXBlb2YgbmF2aWdhdG9yPlwidVwifHwhbmF2aWdhdG9yLm1sKSl0aHJvdyBuZXcgRXJyb3IoXCJXZWJOTiBpcyBub3Qgc3VwcG9ydGVkIGluIGN1cnJlbnQgZW52aXJvbm1lbnRcIil9LCRlPW5ldyBNYXAsYnM9bj0+e2xldCB0PSQoKSxhPXQuc3RhY2tTYXZlKCk7dHJ5e2xldCB1PXQuUFRSX1NJWkUsbz10LnN0YWNrQWxsb2MoMip1KTt0Ll9PcnRHZXRJbnB1dE91dHB1dENvdW50KG4sbyxvK3UpIT09MCYmRyhcIkNhbid0IGdldCBzZXNzaW9uIGlucHV0L291dHB1dCBjb3VudC5cIik7bGV0IGM9dT09PTQ/XCJpMzJcIjpcImk2NFwiO3JldHVybltOdW1iZXIodC5nZXRWYWx1ZShvLGMpKSxOdW1iZXIodC5nZXRWYWx1ZShvK3UsYykpXX1maW5hbGx5e3Quc3RhY2tSZXN0b3JlKGEpfX0sY289KG4sdCk9PntsZXQgYT0kKCksdT1hLnN0YWNrU2F2ZSgpLG89MDt0cnl7bGV0IGQ9YS5QVFJfU0laRSxjPWEuc3RhY2tBbGxvYygyKmQpO2EuX09ydEdldElucHV0T3V0cHV0TWV0YWRhdGEobix0LGMsYytkKSE9PTAmJkcoXCJDYW4ndCBnZXQgc2Vzc2lvbiBpbnB1dC9vdXRwdXQgbWV0YWRhdGEuXCIpO2xldCBtPU51bWJlcihhLmdldFZhbHVlKGMsXCIqXCIpKTtvPU51bWJlcihhLmdldFZhbHVlKGMrZCxcIipcIikpO2xldCBoPWEuSEVBUDMyW28vNF07aWYoaD09PTApcmV0dXJuW20sMF07bGV0IGc9YS5IRUFQVTMyW28vNCsxXSxiPVtdO2ZvcihsZXQgeT0wO3k8Zzt5Kyspe2xldCBUPU51bWJlcihhLmdldFZhbHVlKG8rOCt5KmQsXCIqXCIpKTtiLnB1c2goVCE9PTA/YS5VVEY4VG9TdHJpbmcoVCk6TnVtYmVyKGEuZ2V0VmFsdWUobys4Kyh5K2cpKmQsXCIqXCIpKSl9cmV0dXJuW20saCxiXX1maW5hbGx5e2Euc3RhY2tSZXN0b3JlKHUpLG8hPT0wJiZhLl9PcnRGcmVlKG8pfX0sUWU9bj0+e2xldCB0PSQoKSxhPXQuX21hbGxvYyhuLmJ5dGVMZW5ndGgpO2lmKGE9PT0wKXRocm93IG5ldyBFcnJvcihgQ2FuJ3QgY3JlYXRlIGEgc2Vzc2lvbi4gZmFpbGVkIHRvIGFsbG9jYXRlIGEgYnVmZmVyIG9mIHNpemUgJHtuLmJ5dGVMZW5ndGh9LmApO3JldHVybiB0LkhFQVBVOC5zZXQobixhKSxbYSxuLmJ5dGVMZW5ndGhdfSxidD1hc3luYyhuLHQpPT57bGV0IGEsdSxvPSQoKTtBcnJheS5pc0FycmF5KG4pP1thLHVdPW46bi5idWZmZXI9PT1vLkhFQVBVOC5idWZmZXI/W2EsdV09W24uYnl0ZU9mZnNldCxuLmJ5dGVMZW5ndGhdOlthLHVdPVFlKG4pO2xldCBkPTAsYz0wLGw9MCxtPVtdLGg9W10sZz1bXTt0cnl7aWYoW2MsbV09YXdhaXQgYW8odCksdD8uZXh0ZXJuYWxEYXRhJiZvLm1vdW50RXh0ZXJuYWxEYXRhKXtsZXQgXz1bXTtmb3IobGV0IGsgb2YgdC5leHRlcm5hbERhdGEpe2xldCB3PXR5cGVvZiBrPT1cInN0cmluZ1wiP2s6ay5wYXRoO18ucHVzaChLZSh0eXBlb2Ygaz09XCJzdHJpbmdcIj9rOmsuZGF0YSkudGhlbihaPT57by5tb3VudEV4dGVybmFsRGF0YSh3LFopfSkpfWF3YWl0IFByb21pc2UuYWxsKF8pfWZvcihsZXQgXyBvZiB0Py5leGVjdXRpb25Qcm92aWRlcnM/P1tdKWlmKCh0eXBlb2YgXz09XCJzdHJpbmdcIj9fOl8ubmFtZSk9PT1cIndlYm5uXCIpe2lmKG8uc2hvdWxkVHJhbnNmZXJUb01MVGVuc29yPSExLHR5cGVvZiBfIT1cInN0cmluZ1wiKXtsZXQgdz1fLFo9dz8uY29udGV4dCxqPXc/LmdwdURldmljZSxuZT13Py5kZXZpY2VUeXBlLHBlPXc/LnBvd2VyUHJlZmVyZW5jZTtaP28uY3VycmVudENvbnRleHQ9WjpqP28uY3VycmVudENvbnRleHQ9YXdhaXQgby53ZWJubkNyZWF0ZU1MQ29udGV4dChqKTpvLmN1cnJlbnRDb250ZXh0PWF3YWl0IG8ud2Vibm5DcmVhdGVNTENvbnRleHQoe2RldmljZVR5cGU6bmUscG93ZXJQcmVmZXJlbmNlOnBlfSl9ZWxzZSBvLmN1cnJlbnRDb250ZXh0PWF3YWl0IG8ud2Vibm5DcmVhdGVNTENvbnRleHQoKTticmVha31kPWF3YWl0IG8uX09ydENyZWF0ZVNlc3Npb24oYSx1LGMpLG8ud2ViZ3B1T25DcmVhdGVTZXNzaW9uPy4oZCksZD09PTAmJkcoXCJDYW4ndCBjcmVhdGUgYSBzZXNzaW9uLlwiKSxvLmpzZXBPbkNyZWF0ZVNlc3Npb24/LigpLG8uY3VycmVudENvbnRleHQmJihvLndlYm5uUmVnaXN0ZXJNTENvbnRleHQoZCxvLmN1cnJlbnRDb250ZXh0KSxvLmN1cnJlbnRDb250ZXh0PXZvaWQgMCxvLnNob3VsZFRyYW5zZmVyVG9NTFRlbnNvcj0hMCk7bGV0W2IseV09YnMoZCksVD0hIXQ/LmVuYWJsZUdyYXBoQ2FwdHVyZSxJPVtdLEQ9W10sej1bXSx2PVtdLE89W107Zm9yKGxldCBfPTA7XzxiO18rKyl7bGV0W2ssdyxaXT1jbyhkLF8pO2s9PT0wJiZHKFwiQ2FuJ3QgZ2V0IGFuIGlucHV0IG5hbWUuXCIpLGgucHVzaChrKTtsZXQgaj1vLlVURjhUb1N0cmluZyhrKTtJLnB1c2goaiksei5wdXNoKHc9PT0wP3tuYW1lOmosaXNUZW5zb3I6ITF9OntuYW1lOmosaXNUZW5zb3I6ITAsdHlwZTpPdCh3KSxzaGFwZTpafSl9Zm9yKGxldCBfPTA7Xzx5O18rKyl7bGV0W2ssdyxaXT1jbyhkLF8rYik7az09PTAmJkcoXCJDYW4ndCBnZXQgYW4gb3V0cHV0IG5hbWUuXCIpLGcucHVzaChrKTtsZXQgaj1vLlVURjhUb1N0cmluZyhrKTtELnB1c2goaiksdi5wdXNoKHc9PT0wP3tuYW1lOmosaXNUZW5zb3I6ITF9OntuYW1lOmosaXNUZW5zb3I6ITAsdHlwZTpPdCh3KSxzaGFwZTpafSl9cmV0dXJuICRlLnNldChkLFtkLGgsZyxudWxsLFQsITFdKSxbZCxJLEQseix2XX1jYXRjaChiKXt0aHJvdyBoLmZvckVhY2goeT0+by5fT3J0RnJlZSh5KSksZy5mb3JFYWNoKHk9Pm8uX09ydEZyZWUoeSkpLGwhPT0wJiZvLl9PcnRSZWxlYXNlQmluZGluZyhsKSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIElPIGJpbmRpbmcuXCIpLGQhPT0wJiZvLl9PcnRSZWxlYXNlU2Vzc2lvbihkKSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIHNlc3Npb24uXCIpLGJ9ZmluYWxseXtvLl9mcmVlKGEpLGMhPT0wJiZvLl9PcnRSZWxlYXNlU2Vzc2lvbk9wdGlvbnMoYykhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSBzZXNzaW9uIG9wdGlvbnMuXCIpLG0uZm9yRWFjaChiPT5vLl9mcmVlKGIpKSxvLnVubW91bnRFeHRlcm5hbERhdGE/LigpfX0seXQ9bj0+e2xldCB0PSQoKSxhPSRlLmdldChuKTtpZighYSl0aHJvdyBuZXcgRXJyb3IoYGNhbm5vdCByZWxlYXNlIHNlc3Npb24uIGludmFsaWQgc2Vzc2lvbiBpZDogJHtufWApO2xldFt1LG8sZCxjLGxdPWE7YyYmKGwmJnQuX09ydENsZWFyQm91bmRPdXRwdXRzKGMuaGFuZGxlKSE9PTAmJkcoXCJDYW4ndCBjbGVhciBib3VuZCBvdXRwdXRzLlwiKSx0Ll9PcnRSZWxlYXNlQmluZGluZyhjLmhhbmRsZSkhPT0wJiZHKFwiQ2FuJ3QgcmVsZWFzZSBJTyBiaW5kaW5nLlwiKSksdC5qc2VwT25SZWxlYXNlU2Vzc2lvbj8uKG4pLHQud2Vibm5PblJlbGVhc2VTZXNzaW9uPy4obiksdC53ZWJncHVPblJlbGVhc2VTZXNzaW9uPy4obiksby5mb3JFYWNoKG09PnQuX09ydEZyZWUobSkpLGQuZm9yRWFjaChtPT50Ll9PcnRGcmVlKG0pKSx0Ll9PcnRSZWxlYXNlU2Vzc2lvbih1KSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIHNlc3Npb24uXCIpLCRlLmRlbGV0ZShuKX0sbG89YXN5bmMobix0LGEsdSxvLGQsYz0hMSk9PntpZighbil7dC5wdXNoKDApO3JldHVybn1sZXQgbD0kKCksbT1sLlBUUl9TSVpFLGg9blswXSxnPW5bMV0sYj1uWzNdLHk9YixULEk7aWYoaD09PVwic3RyaW5nXCImJihiPT09XCJncHUtYnVmZmVyXCJ8fGI9PT1cIm1sLXRlbnNvclwiKSl0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmcgdGVuc29yIGlzIG5vdCBzdXBwb3J0ZWQgb24gR1BVLlwiKTtpZihjJiZiIT09XCJncHUtYnVmZmVyXCIpdGhyb3cgbmV3IEVycm9yKGBFeHRlcm5hbCBidWZmZXIgbXVzdCBiZSBwcm92aWRlZCBmb3IgaW5wdXQvb3V0cHV0IGluZGV4ICR7ZH0gd2hlbiBlbmFibGVHcmFwaENhcHR1cmUgaXMgdHJ1ZS5gKTtpZihiPT09XCJncHUtYnVmZmVyXCIpe2xldCB2PW5bMl0uZ3B1QnVmZmVyO0k9R2UoV2UoaCksZyk7e2xldCBPPWwuanNlcFJlZ2lzdGVyQnVmZmVyO2lmKCFPKXRocm93IG5ldyBFcnJvcignVGVuc29yIGxvY2F0aW9uIFwiZ3B1LWJ1ZmZlclwiIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aG91dCB1c2luZyBXZWJHUFUuJyk7VD1PKHUsZCx2LEkpfX1lbHNlIGlmKGI9PT1cIm1sLXRlbnNvclwiKXtsZXQgdj1uWzJdLm1sVGVuc29yO0k9R2UoV2UoaCksZyk7bGV0IE89bC53ZWJublJlZ2lzdGVyTUxUZW5zb3I7aWYoIU8pdGhyb3cgbmV3IEVycm9yKCdUZW5zb3IgbG9jYXRpb24gXCJtbC10ZW5zb3JcIiBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgdXNpbmcgV2ViTk4uJyk7VD1PKHUsdixXZShoKSxnKX1lbHNle2xldCB2PW5bMl07aWYoQXJyYXkuaXNBcnJheSh2KSl7ST1tKnYubGVuZ3RoLFQ9bC5fbWFsbG9jKEkpLGEucHVzaChUKTtmb3IobGV0IE89MDtPPHYubGVuZ3RoO08rKyl7aWYodHlwZW9mIHZbT10hPVwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihgdGVuc29yIGRhdGEgYXQgaW5kZXggJHtPfSBpcyBub3QgYSBzdHJpbmdgKTtsLnNldFZhbHVlKFQrTyptLGFlKHZbT10sYSksXCIqXCIpfX1lbHNle2xldCBPPWwud2Vibm5Jc0dyYXBoSW5wdXQsRj1sLndlYm5uSXNHcmFwaE91dHB1dDtpZihoIT09XCJzdHJpbmdcIiYmTyYmRil7bGV0IF89bC5VVEY4VG9TdHJpbmcobyk7aWYoTyh1LF8pfHxGKHUsXykpe2xldCBrPVdlKGgpO0k9R2UoayxnKSx5PVwibWwtdGVuc29yXCI7bGV0IHc9bC53ZWJubkNyZWF0ZVRlbXBvcmFyeVRlbnNvcixaPWwud2Vibm5VcGxvYWRUZW5zb3I7aWYoIXd8fCFaKXRocm93IG5ldyBFcnJvcignVGVuc29yIGxvY2F0aW9uIFwibWwtdGVuc29yXCIgaXMgbm90IHN1cHBvcnRlZCB3aXRob3V0IHVzaW5nIFdlYk5OLicpO2xldCBqPWF3YWl0IHcodSxrLGcpO1ooaixuZXcgVWludDhBcnJheSh2LmJ1ZmZlcix2LmJ5dGVPZmZzZXQsdi5ieXRlTGVuZ3RoKSksVD1qfWVsc2UgST12LmJ5dGVMZW5ndGgsVD1sLl9tYWxsb2MoSSksYS5wdXNoKFQpLGwuSEVBUFU4LnNldChuZXcgVWludDhBcnJheSh2LmJ1ZmZlcix2LmJ5dGVPZmZzZXQsSSksVCl9ZWxzZSBJPXYuYnl0ZUxlbmd0aCxUPWwuX21hbGxvYyhJKSxhLnB1c2goVCksbC5IRUFQVTguc2V0KG5ldyBVaW50OEFycmF5KHYuYnVmZmVyLHYuYnl0ZU9mZnNldCxJKSxUKX19bGV0IEQ9bC5zdGFja1NhdmUoKSx6PWwuc3RhY2tBbGxvYyg0KmcubGVuZ3RoKTt0cnl7Zy5mb3JFYWNoKChPLEYpPT5sLnNldFZhbHVlKHorRiptLE8sbT09PTQ/XCJpMzJcIjpcImk2NFwiKSk7bGV0IHY9bC5fT3J0Q3JlYXRlVGVuc29yKFdlKGgpLFQsSSx6LGcubGVuZ3RoLGZvKHkpKTt2PT09MCYmRyhgQ2FuJ3QgY3JlYXRlIHRlbnNvciBmb3IgaW5wdXQvb3V0cHV0LiBzZXNzaW9uPSR7dX0sIGluZGV4PSR7ZH0uYCksdC5wdXNoKHYpfWZpbmFsbHl7bC5zdGFja1Jlc3RvcmUoRCl9fSxndD1hc3luYyhuLHQsYSx1LG8sZCk9PntsZXQgYz0kKCksbD1jLlBUUl9TSVpFLG09JGUuZ2V0KG4pO2lmKCFtKXRocm93IG5ldyBFcnJvcihgY2Fubm90IHJ1biBpbmZlcmVuY2UuIGludmFsaWQgc2Vzc2lvbiBpZDogJHtufWApO2xldCBoPW1bMF0sZz1tWzFdLGI9bVsyXSx5PW1bM10sVD1tWzRdLEk9bVs1XSxEPXQubGVuZ3RoLHo9dS5sZW5ndGgsdj0wLE89W10sRj1bXSxfPVtdLGs9W10sdz1bXSxaPWMuc3RhY2tTYXZlKCksaj1jLnN0YWNrQWxsb2MoRCpsKSxuZT1jLnN0YWNrQWxsb2MoRCpsKSxwZT1jLnN0YWNrQWxsb2MoeipsKSxCPWMuc3RhY2tBbGxvYyh6KmwpO3RyeXtbdixPXT1ybyhkKSxEZShcIndhc20gcHJlcGFyZUlucHV0T3V0cHV0VGVuc29yXCIpO2ZvcihsZXQgQT0wO0E8RDtBKyspYXdhaXQgbG8oYVtBXSxGLGssbixnW3RbQV1dLHRbQV0sVCk7Zm9yKGxldCBBPTA7QTx6O0ErKylhd2FpdCBsbyhvW0FdLF8sayxuLGJbdVtBXV0sRCt1W0FdLFQpO1VlKFwid2FzbSBwcmVwYXJlSW5wdXRPdXRwdXRUZW5zb3JcIik7Zm9yKGxldCBBPTA7QTxEO0ErKyljLnNldFZhbHVlKGorQSpsLEZbQV0sXCIqXCIpLGMuc2V0VmFsdWUobmUrQSpsLGdbdFtBXV0sXCIqXCIpO2ZvcihsZXQgQT0wO0E8ejtBKyspYy5zZXRWYWx1ZShwZStBKmwsX1tBXSxcIipcIiksYy5zZXRWYWx1ZShCK0EqbCxiW3VbQV1dLFwiKlwiKTtjLmpzZXBPblJ1blN0YXJ0Py4oaCksYy53ZWJubk9uUnVuU3RhcnQ/LihoKTtsZXQgVztXPWF3YWl0IGMuX09ydFJ1bihoLG5lLGosRCxCLHoscGUsdiksVyE9PTAmJkcoXCJmYWlsZWQgdG8gY2FsbCBPcnRSdW4oKS5cIik7bGV0IHJlPVtdLG1lPVtdO0RlKFwid2FzbSBQcm9jZXNzT3V0cHV0VGVuc29yXCIpO2ZvcihsZXQgQT0wO0E8ejtBKyspe2xldCBLPU51bWJlcihjLmdldFZhbHVlKHBlK0EqbCxcIipcIikpO2lmKEs9PT1fW0FdfHx3LmluY2x1ZGVzKF9bQV0pKXtyZS5wdXNoKG9bQV0pLEshPT1fW0FdJiZjLl9PcnRSZWxlYXNlVGVuc29yKEspIT09MCYmRyhcIkNhbid0IHJlbGVhc2UgdGVuc29yLlwiKTtjb250aW51ZX1sZXQgamU9Yy5zdGFja1NhdmUoKSxlZT1jLnN0YWNrQWxsb2MoNCpsKSxoZT0hMSxILHE9MDt0cnl7Yy5fT3J0R2V0VGVuc29yRGF0YShLLGVlLGVlK2wsZWUrMipsLGVlKzMqbCkhPT0wJiZHKGBDYW4ndCBhY2Nlc3Mgb3V0cHV0IHRlbnNvciBkYXRhIG9uIGluZGV4ICR7QX0uYCk7bGV0IFNlPWw9PT00P1wiaTMyXCI6XCJpNjRcIix2ZT1OdW1iZXIoYy5nZXRWYWx1ZShlZSxTZSkpO3E9Yy5nZXRWYWx1ZShlZStsLFwiKlwiKTtsZXQgVmU9Yy5nZXRWYWx1ZShlZStsKjIsXCIqXCIpLFJlPU51bWJlcihjLmdldFZhbHVlKGVlK2wqMyxTZSkpLHRlPVtdO2ZvcihsZXQgTD0wO0w8UmU7TCsrKXRlLnB1c2goTnVtYmVyKGMuZ2V0VmFsdWUoVmUrTCpsLFNlKSkpO2MuX09ydEZyZWUoVmUpIT09MCYmRyhcIkNhbid0IGZyZWUgbWVtb3J5IGZvciB0ZW5zb3IgZGltcy5cIik7bGV0IHVlPXRlLnJlZHVjZSgoTCxWKT0+TCpWLDEpO0g9T3QodmUpO2xldCBzZT15Py5vdXRwdXRQcmVmZXJyZWRMb2NhdGlvbnNbdVtBXV07aWYoSD09PVwic3RyaW5nXCIpe2lmKHNlPT09XCJncHUtYnVmZmVyXCJ8fHNlPT09XCJtbC10ZW5zb3JcIil0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmcgdGVuc29yIGlzIG5vdCBzdXBwb3J0ZWQgb24gR1BVLlwiKTtsZXQgTD1bXTtmb3IobGV0IFY9MDtWPHVlO1YrKyl7bGV0IGZlPWMuZ2V0VmFsdWUocStWKmwsXCIqXCIpLHllPWMuZ2V0VmFsdWUocSsoVisxKSpsLFwiKlwiKSxjZT1WPT09dWUtMT92b2lkIDA6eWUtZmU7TC5wdXNoKGMuVVRGOFRvU3RyaW5nKGZlLGNlKSl9cmUucHVzaChbSCx0ZSxMLFwiY3B1XCJdKX1lbHNlIGlmKHNlPT09XCJncHUtYnVmZmVyXCImJnVlPjApe2xldCBMPWMuanNlcEdldEJ1ZmZlcjtpZighTCl0aHJvdyBuZXcgRXJyb3IoJ3ByZWZlcnJlZExvY2F0aW9uIFwiZ3B1LWJ1ZmZlclwiIGlzIG5vdCBzdXBwb3J0ZWQgd2l0aG91dCB1c2luZyBXZWJHUFUuJyk7bGV0IFY9TChxKSxmZT1HZSh2ZSx1ZSk7aWYoZmU9PT12b2lkIDB8fCFBdChIKSl0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIGRhdGEgdHlwZTogJHtIfWApO2hlPSEwLHJlLnB1c2goW0gsdGUse2dwdUJ1ZmZlcjpWLGRvd25sb2FkOmMuanNlcENyZWF0ZURvd25sb2FkZXIoVixmZSxIKSxkaXNwb3NlOigpPT57Yy5fT3J0UmVsZWFzZVRlbnNvcihLKSE9PTAmJkcoXCJDYW4ndCByZWxlYXNlIHRlbnNvci5cIil9fSxcImdwdS1idWZmZXJcIl0pfWVsc2UgaWYoc2U9PT1cIm1sLXRlbnNvclwiJiZ1ZT4wKXtsZXQgTD1jLndlYm5uRW5zdXJlVGVuc29yLFY9Yy53ZWJubklzR3JhcGhJbnB1dE91dHB1dFR5cGVTdXBwb3J0ZWQ7aWYoIUx8fCFWKXRocm93IG5ldyBFcnJvcigncHJlZmVycmVkTG9jYXRpb24gXCJtbC10ZW5zb3JcIiBpcyBub3Qgc3VwcG9ydGVkIHdpdGhvdXQgdXNpbmcgV2ViTk4uJyk7aWYoR2UodmUsdWUpPT09dm9pZCAwfHwhSXQoSCkpdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBkYXRhIHR5cGU6ICR7SH1gKTtpZighVihuLEgsITEpKXRocm93IG5ldyBFcnJvcihgcHJlZmVycmVkTG9jYXRpb24gXCJtbC10ZW5zb3JcIiBmb3IgJHtIfSBvdXRwdXQgaXMgbm90IHN1cHBvcnRlZCBieSBjdXJyZW50IFdlYk5OIENvbnRleHQuYCk7bGV0IHllPWF3YWl0IEwobixxLHZlLHRlLCExKTtoZT0hMCxyZS5wdXNoKFtILHRlLHttbFRlbnNvcjp5ZSxkb3dubG9hZDpjLndlYm5uQ3JlYXRlTUxUZW5zb3JEb3dubG9hZGVyKHEsSCksZGlzcG9zZTooKT0+e2Mud2Vibm5SZWxlYXNlVGVuc29ySWQocSksYy5fT3J0UmVsZWFzZVRlbnNvcihLKX19LFwibWwtdGVuc29yXCJdKX1lbHNlIGlmKHNlPT09XCJtbC10ZW5zb3ItY3B1LW91dHB1dFwiJiZ1ZT4wKXtsZXQgTD1jLndlYm5uQ3JlYXRlTUxUZW5zb3JEb3dubG9hZGVyKHEsSCkoKSxWPXJlLmxlbmd0aDtoZT0hMCxtZS5wdXNoKChhc3luYygpPT57bGV0IGZlPVtWLGF3YWl0IExdO3JldHVybiBjLndlYm5uUmVsZWFzZVRlbnNvcklkKHEpLGMuX09ydFJlbGVhc2VUZW5zb3IoSyksZmV9KSgpKSxyZS5wdXNoKFtILHRlLFtdLFwiY3B1XCJdKX1lbHNle2xldCBMPWlvKEgpLFY9bmV3IEwodWUpO25ldyBVaW50OEFycmF5KFYuYnVmZmVyLFYuYnl0ZU9mZnNldCxWLmJ5dGVMZW5ndGgpLnNldChjLkhFQVBVOC5zdWJhcnJheShxLHErVi5ieXRlTGVuZ3RoKSkscmUucHVzaChbSCx0ZSxWLFwiY3B1XCJdKX19ZmluYWxseXtjLnN0YWNrUmVzdG9yZShqZSksSD09PVwic3RyaW5nXCImJnEmJmMuX2ZyZWUocSksaGV8fGMuX09ydFJlbGVhc2VUZW5zb3IoSyl9fXkmJiFUJiYoYy5fT3J0Q2xlYXJCb3VuZE91dHB1dHMoeS5oYW5kbGUpIT09MCYmRyhcIkNhbid0IGNsZWFyIGJvdW5kIG91dHB1dHMuXCIpLCRlLnNldChuLFtoLGcsYix5LFQsITFdKSk7Zm9yKGxldFtBLEtdb2YgYXdhaXQgUHJvbWlzZS5hbGwobWUpKXJlW0FdWzJdPUs7cmV0dXJuIFVlKFwid2FzbSBQcm9jZXNzT3V0cHV0VGVuc29yXCIpLHJlfWZpbmFsbHl7Yy53ZWJubk9uUnVuRW5kPy4oaCksYy5zdGFja1Jlc3RvcmUoWiksRi5mb3JFYWNoKFc9PmMuX09ydFJlbGVhc2VUZW5zb3IoVykpLF8uZm9yRWFjaChXPT5jLl9PcnRSZWxlYXNlVGVuc29yKFcpKSxrLmZvckVhY2goVz0+Yy5fZnJlZShXKSksdiE9PTAmJmMuX09ydFJlbGVhc2VSdW5PcHRpb25zKHYpLE8uZm9yRWFjaChXPT5jLl9mcmVlKFcpKX19LEV0PW49PntsZXQgdD0kKCksYT0kZS5nZXQobik7aWYoIWEpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBzZXNzaW9uIGlkXCIpO2xldCB1PWFbMF0sbz10Ll9PcnRFbmRQcm9maWxpbmcodSk7bz09PTAmJkcoXCJDYW4ndCBnZXQgYW4gcHJvZmlsZSBmaWxlIG5hbWUuXCIpLHQuX09ydEZyZWUobyl9LFR0PW49PntsZXQgdD1bXTtmb3IobGV0IGEgb2Ygbil7bGV0IHU9YVsyXTshQXJyYXkuaXNBcnJheSh1KSYmXCJidWZmZXJcImluIHUmJnQucHVzaCh1LmJ1ZmZlcil9cmV0dXJuIHR9fSk7dmFyIENlLGllLGV0LEx0LF90LEJ0LGxuLGRuLHplLEhlLGdzLHBvLG1vLGhvLHdvLGJvLHlvLGdvLHBuPU4oKCk9PntcInVzZSBzdHJpY3RcIjtUZSgpO3JuKCk7eGUoKTtwdCgpO0NlPSgpPT4hIVkud2FzbS5wcm94eSYmdHlwZW9mIGRvY3VtZW50PFwidVwiLGV0PSExLEx0PSExLF90PSExLGRuPW5ldyBNYXAsemU9KG4sdCk9PntsZXQgYT1kbi5nZXQobik7YT9hLnB1c2godCk6ZG4uc2V0KG4sW3RdKX0sSGU9KCk9PntpZihldHx8IUx0fHxfdHx8IWllKXRocm93IG5ldyBFcnJvcihcIndvcmtlciBub3QgcmVhZHlcIil9LGdzPW49Pntzd2l0Y2gobi5kYXRhLnR5cGUpe2Nhc2VcImluaXQtd2FzbVwiOmV0PSExLG4uZGF0YS5lcnI/KF90PSEwLGxuWzFdKG4uZGF0YS5lcnIpKTooTHQ9ITAsbG5bMF0oKSksQnQmJihVUkwucmV2b2tlT2JqZWN0VVJMKEJ0KSxCdD12b2lkIDApO2JyZWFrO2Nhc2VcImluaXQtZXBcIjpjYXNlXCJjb3B5LWZyb21cIjpjYXNlXCJjcmVhdGVcIjpjYXNlXCJyZWxlYXNlXCI6Y2FzZVwicnVuXCI6Y2FzZVwiZW5kLXByb2ZpbGluZ1wiOntsZXQgdD1kbi5nZXQobi5kYXRhLnR5cGUpO24uZGF0YS5lcnI/dC5zaGlmdCgpWzFdKG4uZGF0YS5lcnIpOnQuc2hpZnQoKVswXShuLmRhdGEub3V0KTticmVha31kZWZhdWx0On19LHBvPWFzeW5jKCk9PntpZighTHQpe2lmKGV0KXRocm93IG5ldyBFcnJvcihcIm11bHRpcGxlIGNhbGxzIHRvICdpbml0V2FzbSgpJyBkZXRlY3RlZC5cIik7aWYoX3QpdGhyb3cgbmV3IEVycm9yKFwicHJldmlvdXMgY2FsbCB0byAnaW5pdFdhc20oKScgZmFpbGVkLlwiKTtpZihldD0hMCxDZSgpKXJldHVybiBuZXcgUHJvbWlzZSgobix0KT0+e2llPy50ZXJtaW5hdGUoKSxlbygpLnRoZW4oKFthLHVdKT0+e3RyeXtpZT11LGllLm9uZXJyb3I9ZD0+dChkKSxpZS5vbm1lc3NhZ2U9Z3MsbG49W24sdF07bGV0IG89e3R5cGU6XCJpbml0LXdhc21cIixpbjpZfTshby5pbi53YXNtLndhc21QYXRocyYmKGF8fGFuKSYmKG8uaW4ud2FzbS53YXNtUGF0aHM9e3dhc206bmV3IFVSTChcIm9ydC13YXNtLXNpbWQtdGhyZWFkZWQud2FzbVwiLGltcG9ydC5tZXRhLnVybCkuaHJlZn0pLGllLnBvc3RNZXNzYWdlKG8pLEJ0PWF9Y2F0Y2gobyl7dChvKX19LHQpfSk7dHJ5e2F3YWl0IG10KFkud2FzbSksYXdhaXQgaHQoWSksTHQ9ITB9Y2F0Y2gobil7dGhyb3cgX3Q9ITAsbn1maW5hbGx5e2V0PSExfX19LG1vPWFzeW5jIG49PntpZihDZSgpKXJldHVybiBIZSgpLG5ldyBQcm9taXNlKCh0LGEpPT57emUoXCJpbml0LWVwXCIsW3QsYV0pO2xldCB1PXt0eXBlOlwiaW5pdC1lcFwiLGluOntlcE5hbWU6bixlbnY6WX19O2llLnBvc3RNZXNzYWdlKHUpfSk7YXdhaXQgd3QoWSxuKX0saG89YXN5bmMgbj0+Q2UoKT8oSGUoKSxuZXcgUHJvbWlzZSgodCxhKT0+e3plKFwiY29weS1mcm9tXCIsW3QsYV0pO2xldCB1PXt0eXBlOlwiY29weS1mcm9tXCIsaW46e2J1ZmZlcjpufX07aWUucG9zdE1lc3NhZ2UodSxbbi5idWZmZXJdKX0pKTpRZShuKSx3bz1hc3luYyhuLHQpPT57aWYoQ2UoKSl7aWYodD8ucHJlZmVycmVkT3V0cHV0TG9jYXRpb24pdGhyb3cgbmV3IEVycm9yKCdzZXNzaW9uIG9wdGlvbiBcInByZWZlcnJlZE91dHB1dExvY2F0aW9uXCIgaXMgbm90IHN1cHBvcnRlZCBmb3IgcHJveHkuJyk7cmV0dXJuIEhlKCksbmV3IFByb21pc2UoKGEsdSk9Pnt6ZShcImNyZWF0ZVwiLFthLHVdKTtsZXQgbz17dHlwZTpcImNyZWF0ZVwiLGluOnttb2RlbDpuLG9wdGlvbnM6ey4uLnR9fX0sZD1bXTtuIGluc3RhbmNlb2YgVWludDhBcnJheSYmZC5wdXNoKG4uYnVmZmVyKSxpZS5wb3N0TWVzc2FnZShvLGQpfSl9ZWxzZSByZXR1cm4gYnQobix0KX0sYm89YXN5bmMgbj0+e2lmKENlKCkpcmV0dXJuIEhlKCksbmV3IFByb21pc2UoKHQsYSk9Pnt6ZShcInJlbGVhc2VcIixbdCxhXSk7bGV0IHU9e3R5cGU6XCJyZWxlYXNlXCIsaW46bn07aWUucG9zdE1lc3NhZ2UodSl9KTt5dChuKX0seW89YXN5bmMobix0LGEsdSxvLGQpPT57aWYoQ2UoKSl7aWYoYS5zb21lKGM9PmNbM10hPT1cImNwdVwiKSl0aHJvdyBuZXcgRXJyb3IoXCJpbnB1dCB0ZW5zb3Igb24gR1BVIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHByb3h5LlwiKTtpZihvLnNvbWUoYz0+YykpdGhyb3cgbmV3IEVycm9yKFwicHJlLWFsbG9jYXRlZCBvdXRwdXQgdGVuc29yIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHByb3h5LlwiKTtyZXR1cm4gSGUoKSxuZXcgUHJvbWlzZSgoYyxsKT0+e3plKFwicnVuXCIsW2MsbF0pO2xldCBtPWEsaD17dHlwZTpcInJ1blwiLGluOntzZXNzaW9uSWQ6bixpbnB1dEluZGljZXM6dCxpbnB1dHM6bSxvdXRwdXRJbmRpY2VzOnUsb3B0aW9uczpkfX07aWUucG9zdE1lc3NhZ2UoaCxUdChtKSl9KX1lbHNlIHJldHVybiBndChuLHQsYSx1LG8sZCl9LGdvPWFzeW5jIG49PntpZihDZSgpKXJldHVybiBIZSgpLG5ldyBQcm9taXNlKCh0LGEpPT57emUoXCJlbmQtcHJvZmlsaW5nXCIsW3QsYV0pO2xldCB1PXt0eXBlOlwiZW5kLXByb2ZpbGluZ1wiLGluOm59O2llLnBvc3RNZXNzYWdlKHUpfSk7RXQobil9fSk7dmFyIEVvLEVzLFB0LFRvPU4oKCk9PntcInVzZSBzdHJpY3RcIjtUZSgpO3BuKCk7Zm4oKTtkdCgpO2NuKCk7RW89KG4sdCk9Pntzd2l0Y2gobi5sb2NhdGlvbil7Y2FzZVwiY3B1XCI6cmV0dXJuW24udHlwZSxuLmRpbXMsbi5kYXRhLFwiY3B1XCJdO2Nhc2VcImdwdS1idWZmZXJcIjpyZXR1cm5bbi50eXBlLG4uZGltcyx7Z3B1QnVmZmVyOm4uZ3B1QnVmZmVyfSxcImdwdS1idWZmZXJcIl07Y2FzZVwibWwtdGVuc29yXCI6cmV0dXJuW24udHlwZSxuLmRpbXMse21sVGVuc29yOm4ubWxUZW5zb3J9LFwibWwtdGVuc29yXCJdO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGRhdGEgbG9jYXRpb246ICR7bi5sb2NhdGlvbn0gZm9yICR7dCgpfWApfX0sRXM9bj0+e3N3aXRjaChuWzNdKXtjYXNlXCJjcHVcIjpyZXR1cm4gbmV3IGRlKG5bMF0sblsyXSxuWzFdKTtjYXNlXCJncHUtYnVmZmVyXCI6e2xldCB0PW5bMF07aWYoIUF0KHQpKXRocm93IG5ldyBFcnJvcihgbm90IHN1cHBvcnRlZCBkYXRhIHR5cGU6ICR7dH0gZm9yIGRlc2VyaWFsaXppbmcgR1BVIHRlbnNvcmApO2xldHtncHVCdWZmZXI6YSxkb3dubG9hZDp1LGRpc3Bvc2U6b309blsyXTtyZXR1cm4gZGUuZnJvbUdwdUJ1ZmZlcihhLHtkYXRhVHlwZTp0LGRpbXM6blsxXSxkb3dubG9hZDp1LGRpc3Bvc2U6b30pfWNhc2VcIm1sLXRlbnNvclwiOntsZXQgdD1uWzBdO2lmKCFJdCh0KSl0aHJvdyBuZXcgRXJyb3IoYG5vdCBzdXBwb3J0ZWQgZGF0YSB0eXBlOiAke3R9IGZvciBkZXNlcmlhbGl6aW5nIE1MVGVuc29yIHRlbnNvcmApO2xldHttbFRlbnNvcjphLGRvd25sb2FkOnUsZGlzcG9zZTpvfT1uWzJdO3JldHVybiBkZS5mcm9tTUxUZW5zb3IoYSx7ZGF0YVR5cGU6dCxkaW1zOm5bMV0sZG93bmxvYWQ6dSxkaXNwb3NlOm99KX1kZWZhdWx0OnRocm93IG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIGxvY2F0aW9uOiAke25bM119YCl9fSxQdD1jbGFzc3thc3luYyBmZXRjaE1vZGVsQW5kQ29weVRvV2FzbU1lbW9yeSh0KXtyZXR1cm4gaG8oYXdhaXQgS2UodCkpfWFzeW5jIGxvYWRNb2RlbCh0LGEpe19lKCk7bGV0IHU7dHlwZW9mIHQ9PVwic3RyaW5nXCI/dT1hd2FpdCB0aGlzLmZldGNoTW9kZWxBbmRDb3B5VG9XYXNtTWVtb3J5KHQpOnU9dCxbdGhpcy5zZXNzaW9uSWQsdGhpcy5pbnB1dE5hbWVzLHRoaXMub3V0cHV0TmFtZXMsdGhpcy5pbnB1dE1ldGFkYXRhLHRoaXMub3V0cHV0TWV0YWRhdGFdPWF3YWl0IHdvKHUsYSksUGUoKX1hc3luYyBkaXNwb3NlKCl7cmV0dXJuIGJvKHRoaXMuc2Vzc2lvbklkKX1hc3luYyBydW4odCxhLHUpe19lKCk7bGV0IG89W10sZD1bXTtPYmplY3QuZW50cmllcyh0KS5mb3JFYWNoKHk9PntsZXQgVD15WzBdLEk9eVsxXSxEPXRoaXMuaW5wdXROYW1lcy5pbmRleE9mKFQpO2lmKEQ9PT0tMSl0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgaW5wdXQgJyR7VH0nYCk7by5wdXNoKEkpLGQucHVzaChEKX0pO2xldCBjPVtdLGw9W107T2JqZWN0LmVudHJpZXMoYSkuZm9yRWFjaCh5PT57bGV0IFQ9eVswXSxJPXlbMV0sRD10aGlzLm91dHB1dE5hbWVzLmluZGV4T2YoVCk7aWYoRD09PS0xKXRocm93IG5ldyBFcnJvcihgaW52YWxpZCBvdXRwdXQgJyR7VH0nYCk7Yy5wdXNoKEkpLGwucHVzaChEKX0pO2xldCBtPW8ubWFwKCh5LFQpPT5Fbyh5LCgpPT5gaW5wdXQgXCIke3RoaXMuaW5wdXROYW1lc1tkW1RdXX1cImApKSxoPWMubWFwKCh5LFQpPT55P0VvKHksKCk9PmBvdXRwdXQgXCIke3RoaXMub3V0cHV0TmFtZXNbbFtUXV19XCJgKTpudWxsKSxnPWF3YWl0IHlvKHRoaXMuc2Vzc2lvbklkLGQsbSxsLGgsdSksYj17fTtmb3IobGV0IHk9MDt5PGcubGVuZ3RoO3krKyliW3RoaXMub3V0cHV0TmFtZXNbbFt5XV1dPWNbeV0/P0VzKGdbeV0pO3JldHVybiBQZSgpLGJ9c3RhcnRQcm9maWxpbmcoKXt9ZW5kUHJvZmlsaW5nKCl7Z28odGhpcy5zZXNzaW9uSWQpfX19KTt2YXIgdm89e307dXQodm8se09ubnhydW50aW1lV2ViQXNzZW1ibHlCYWNrZW5kOigpPT5EdCxpbml0aWFsaXplRmxhZ3M6KCk9PlNvLHdhc21CYWNrZW5kOigpPT5Uc30pO3ZhciBTbyxEdCxUcyxPbz1OKCgpPT57XCJ1c2Ugc3RyaWN0XCI7VGUoKTtwbigpO1RvKCk7U289KCk9PnsodHlwZW9mIFkud2FzbS5pbml0VGltZW91dCE9XCJudW1iZXJcInx8WS53YXNtLmluaXRUaW1lb3V0PDApJiYoWS53YXNtLmluaXRUaW1lb3V0PTApO2xldCBuPVkud2FzbS5zaW1kO2lmKHR5cGVvZiBuIT1cImJvb2xlYW5cIiYmbiE9PXZvaWQgMCYmbiE9PVwiZml4ZWRcIiYmbiE9PVwicmVsYXhlZFwiJiYoY29uc29sZS53YXJuKGBQcm9wZXJ0eSBcImVudi53YXNtLnNpbWRcIiBpcyBzZXQgdG8gdW5rbm93biB2YWx1ZSBcIiR7bn1cIi4gUmVzZXQgaXQgdG8gXFxgZmFsc2VcXGAgYW5kIGlnbm9yZSBTSU1EIGZlYXR1cmUgY2hlY2tpbmcuYCksWS53YXNtLnNpbWQ9ITEpLHR5cGVvZiBZLndhc20ucHJveHkhPVwiYm9vbGVhblwiJiYoWS53YXNtLnByb3h5PSExKSx0eXBlb2YgWS53YXNtLnRyYWNlIT1cImJvb2xlYW5cIiYmKFkud2FzbS50cmFjZT0hMSksdHlwZW9mIFkud2FzbS5udW1UaHJlYWRzIT1cIm51bWJlclwifHwhTnVtYmVyLmlzSW50ZWdlcihZLndhc20ubnVtVGhyZWFkcyl8fFkud2FzbS5udW1UaHJlYWRzPD0wKWlmKHR5cGVvZiBzZWxmPFwidVwiJiYhc2VsZi5jcm9zc09yaWdpbklzb2xhdGVkKVkud2FzbS5udW1UaHJlYWRzPTE7ZWxzZXtsZXQgdD10eXBlb2YgbmF2aWdhdG9yPlwidVwiP3F0KFwibm9kZTpvc1wiKS5jcHVzKCkubGVuZ3RoOm5hdmlnYXRvci5oYXJkd2FyZUNvbmN1cnJlbmN5O1kud2FzbS5udW1UaHJlYWRzPU1hdGgubWluKDQsTWF0aC5jZWlsKCh0fHwxKS8yKSl9fSxEdD1jbGFzc3thc3luYyBpbml0KHQpe1NvKCksYXdhaXQgcG8oKSxhd2FpdCBtbyh0KX1hc3luYyBjcmVhdGVJbmZlcmVuY2VTZXNzaW9uSGFuZGxlcih0LGEpe2xldCB1PW5ldyBQdDtyZXR1cm4gYXdhaXQgdS5sb2FkTW9kZWwodCxhKSx1fX0sVHM9bmV3IER0fSk7VGUoKTtUZSgpO1RlKCk7dmFyIEdyPVwiMS4yNi4wXCI7dmFyIGF1PW5uO3tsZXQgbj0oT28oKSxYdCh2bykpLndhc21CYWNrZW5kO3FlKFwiY3B1XCIsbiwxMCkscWUoXCJ3YXNtXCIsbiwxMCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KFkudmVyc2lvbnMsXCJ3ZWJcIix7dmFsdWU6R3IsZW51bWVyYWJsZTohMH0pO2V4cG9ydHt0cyBhcyBJbmZlcmVuY2VTZXNzaW9uLHhyIGFzIFRSQUNFLERlIGFzIFRSQUNFX0VWRU5UX0JFR0lOLFVlIGFzIFRSQUNFX0VWRU5UX0VORCxfZSBhcyBUUkFDRV9GVU5DX0JFR0lOLFBlIGFzIFRSQUNFX0ZVTkNfRU5ELGRlIGFzIFRlbnNvcixhdSBhcyBkZWZhdWx0LFkgYXMgZW52LHFlIGFzIHJlZ2lzdGVyQmFja2VuZH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vcnQud2FzbS5idW5kbGUubWluLm1qcy5tYXBcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBPd25zIGxvYWRpbmcgYW5kIGNvbmZpZ3VyaW5nIHRoZSBvbm54cnVudGltZS13ZWIgZW52aXJvbm1lbnQgZm9yIHRoaXNcbi8vIHdvcmtlci4gVGhlIGxvYWRlciBpcyBidW5kbGVkIGludG8gdGhpcyB3b3JrZXIncyBzY3JpcHQgYnkgd2VicGFjaywgYW5kIGl0c1xuLy8gcHRocmVhZCB3b3JrZXIgZ2x1ZSBhbmQgdGhyZWFkZWQgLndhc20gYXJlIGVtaXR0ZWQgYXMgd2VicGFjayBhc3NldHMgc2VydmVkXG4vLyBmcm9tIHRoaXMgb3JpZ2luLlxuaW1wb3J0ICogYXMgb3J0IGZyb20gJ29ubnhydW50aW1lLXdlYi93YXNtJ1xuXG4vLyBUaGUgdGhyZWFkZWQgLndhc20gaXMgbG9jYXRlZCBieSBPUlQgb25seSB0aHJvdWdoIG9ydC5lbnYud2FzbS53YXNtUGF0aHMgYXRcbi8vIHJ1bnRpbWUsIGEgc3RyaW5nIHdlYnBhY2sgY2Fubm90IHRyYWNlLCBzbyBpdCBpcyBub3QgZW1pdHRlZCBvbiBpdHMgb3duLlxuLy8gSW1wb3J0IGl0IGV4cGxpY2l0bHkgc28gd2VicGFjayBlbWl0cyBpdCBhbmQgcmV0dXJucyBpdHMgVVJMIGZvciB3YXNtUGF0aHMuXG5pbXBvcnQgd2FzbVVybCBmcm9tICdvbm54cnVudGltZS13ZWIvb3J0LXdhc20tc2ltZC10aHJlYWRlZC53YXNtJ1xuXG5sZXQgb3J0Q29uZmlndXJlZCA9IGZhbHNlXG5cbmV4cG9ydCB0eXBlIE9ydCA9IHR5cGVvZiBpbXBvcnQoJ29ubnhydW50aW1lLXdlYicpXG5leHBvcnQgdHlwZSBPcnRUZW5zb3IgPSBpbXBvcnQoJ29ubnhydW50aW1lLXdlYicpLlRlbnNvclxuZXhwb3J0IHR5cGUgT3J0U2Vzc2lvbiA9IGltcG9ydCgnb25ueHJ1bnRpbWUtd2ViJykuSW5mZXJlbmNlU2Vzc2lvblxuZXhwb3J0IHR5cGUgT3J0U2Vzc2lvbk9wdGlvbnMgPVxuICBpbXBvcnQoJ29ubnhydW50aW1lLXdlYicpLkluZmVyZW5jZVNlc3Npb24uU2Vzc2lvbk9wdGlvbnNcblxuLy8gVGhlIHdlYnBhY2stZW1pdHRlZCB3b3JrZXIgZ2x1ZSBPUlQgc3RhcnRzIGFzIGEgcHRocmVhZCBXb3JrZXIsIG5hbWVkXG4vLyBvcnQud2FzbS5idW5kbGUubWluLjxjb250ZW50aGFzaD4uanMuIEl0IGlzIHRoZSBvbmx5IFVSTCB0aGF0IHNob3VsZCByZWFjaFxuLy8gdGhlIFRydXN0ZWQgVHlwZXMgY3JlYXRlU2NyaXB0VVJMIGhvb2ssIHBpbm5lZCBieSBwcmVmaXggYW5kIHN1ZmZpeCBzaW5jZVxuLy8gdGhlIGNvbnRlbnQgaGFzaCB2YXJpZXMgcGVyIGJ1aWxkLlxuY29uc3QgT1JUX1dPUktFUl9TQ1JJUFRfUFJFRklYID0gJy9vcnQud2FzbS5idW5kbGUubWluLidcbmNvbnN0IE9SVF9XT1JLRVJfU0NSSVBUX1NVRkZJWCA9ICcuanMnXG5cbmNvbnN0IE5VTV9USFJFQURTID0gTWF0aC5taW4oNCwgc2VsZi5uYXZpZ2F0b3IuaGFyZHdhcmVDb25jdXJyZW5jeSB8fCA0KVxuXG4vLyBUcnVzdGVkIFR5cGVzIGRlZmF1bHQgcG9saWN5OiBvbm54cnVudGltZS13ZWIgY3JlYXRlcyBpdHMgdGhyZWFkLXBvb2xcbi8vIHdvcmtlcnMgdmlhIGBuZXcgV29ya2VyKDx1cmwgc3RyaW5nPilgLCB3aGljaCBUcnVzdGVkIFR5cGVzIHJvdXRlc1xuLy8gdGhyb3VnaCB0aGUgZGVmYXVsdCBwb2xpY3kuIEFsbG93IE9OTFkgb3VyIG93biBzYW1lLW9yaWdpbiB3b3JrZXIgZ2x1ZSBhbmRcbi8vIHJlamVjdCBldmVyeXRoaW5nIGVsc2UuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFsbFRydXN0ZWRUeXBlc1BvbGljeSgpIHtcbiAgY29uc3QgdHQgPSAoXG4gICAgc2VsZiBhcyB1bmtub3duIGFzIHtcbiAgICAgIHRydXN0ZWRUeXBlcz86IHtcbiAgICAgICAgY3JlYXRlUG9saWN5OiAobmFtZTogc3RyaW5nLCBydWxlczogb2JqZWN0KSA9PiB1bmtub3duXG4gICAgICB9XG4gICAgfVxuICApLnRydXN0ZWRUeXBlc1xuICBpZiAoIXR0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHQuY3JlYXRlUG9saWN5KCdkZWZhdWx0Jywge1xuICAgIGNyZWF0ZVNjcmlwdFVSTDogKHVybDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB1ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpXG4gICAgICAvLyBQaW4gdG8gdGhlIHNhbWUtb3JpZ2luIHdlYnBhY2stZW1pdHRlZCB3b3JrZXIgZ2x1ZVxuICAgICAgLy8gKG9ydC53YXNtLmJ1bmRsZS5taW4uPGNvbnRlbnRoYXNoPi5qcykuIHNlYXJjaCBhbmQgaGFzaCBhcmUgaWdub3JlZCBzb1xuICAgICAgLy8gYSBjYWNoZS1idXN0aW5nIHF1ZXJ5IGNhbm5vdCBjaGFuZ2UgdGhlIGRlY2lzaW9uLiBFdmVyeXRoaW5nIGVsc2VcbiAgICAgIC8vIChvdGhlciBmaWxlcywgY3Jvc3Mtb3JpZ2luLCBibG9iOiBVUkxzKSBpcyByZWplY3RlZC5cbiAgICAgIGlmIChcbiAgICAgICAgdS5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpblxuICAgICAgICAmJiB1LnBhdGhuYW1lLnN0YXJ0c1dpdGgoT1JUX1dPUktFUl9TQ1JJUFRfUFJFRklYKVxuICAgICAgICAmJiB1LnBhdGhuYW1lLmVuZHNXaXRoKE9SVF9XT1JLRVJfU0NSSVBUX1NVRkZJWClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUcnVzdGVkIFR5cGVzOiBibG9ja2VkIHNjcmlwdCBVUkwgJyArIHVybClcbiAgICB9LFxuICB9KVxufVxuXG4vLyBDb25maWd1cmUgdGhlIHRocmVhZGVkIFdBU00gYmFja2VuZCBvbmNlIGFuZCByZXR1cm4gdGhlIGJ1bmRsZWQgT1JUXG4vLyBuYW1lc3BhY2UuIHdhc21QYXRocy53YXNtIHBvaW50cyBPUlQgYXQgdGhlIHdlYnBhY2stZW1pdHRlZCAud2FzbSBhc3NldC5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbnN1cmVPcnQoKTogUHJvbWlzZTxPcnQ+IHtcbiAgaWYgKCFvcnRDb25maWd1cmVkKSB7XG4gICAgb3J0LmVudi53YXNtLm51bVRocmVhZHMgPSBOVU1fVEhSRUFEU1xuICAgIG9ydC5lbnYud2FzbS5zaW1kID0gdHJ1ZVxuICAgIG9ydC5lbnYud2FzbS53YXNtUGF0aHMgPSB7IHdhc206IHdhc21VcmwgfVxuICAgIG9ydENvbmZpZ3VyZWQgPSB0cnVlXG4gIH1cbiAgcmV0dXJuIG9ydFxufVxuXG4vLyBPUlQtV2ViIHRlbnNvcnMgYmFjayB0aGVpciBkYXRhIHdpdGggV0FTTSBtZW1vcnkgdGhhdCBpcyBOT1QgZnJlZWQgYnlcbi8vIEpTIEdDIGFsb25lIOKAlCBkaXNwb3NlIGlucHV0cyBhbmQgb3V0cHV0cyBhZnRlciBlYWNoIGluZmVyZW5jZSBvciB0aGV5XG4vLyBhY2N1bXVsYXRlIGluIHRoZSBXQVNNIGhlYXAuXG5leHBvcnQgZnVuY3Rpb24gZGlzcG9zZU9ydChcbiAgaW5wdXRzOiBPcnRUZW5zb3JbXSxcbiAgb3V0PzogUmVjb3JkPHN0cmluZywgT3J0VGVuc29yPixcbikge1xuICBmb3IgKGNvbnN0IHQgb2YgaW5wdXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHQuZGlzcG9zZSgpXG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gIH1cbiAgaWYgKG91dCkge1xuICAgIGZvciAoY29uc3QgayBpbiBvdXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG91dFtrXS5kaXNwb3NlKClcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBOZW1vdHJvbiAwLjZCIElOVDQg4oCUIGNhY2hlLWF3YXJlIHN0cmVhbWluZyBSTk4tVC5cbi8vIEVhY2ggZW5jb2RlciBzdGVwIGFkdmFuY2VzIGJ5IDU2MCBtczogNTYgbmV3IG1lbCBmcmFtZXMgcGx1cyA5XG4vLyBwcmUtZW5jb2RlIGxlZnQtY29udGV4dCBmcmFtZXMuIENvbmZvcm1lciBjYWNoZXMgYXJlIGNhcnJpZWQgYmV0d2VlblxuLy8gc3RlcHMsIGFuZCBmaXhlZCBpbnB1dC9jYWNoZSBzaGFwZXMga2VlcCB0aGUgZW5jb2RlciBjb3N0IGNvbnN0YW50IHBlciBzdGVwLlxuXG4vLyBmcm9udGVuZCBjb25zdGFudHNcbmV4cG9ydCB0eXBlIEZmdFNpemUgPVxuICB8IDMyXG4gIHwgNjRcbiAgfCAxMjhcbiAgfCAyNTZcbiAgfCA1MTJcbiAgfCAxMDI0XG4gIHwgMjA0OFxuICB8IDQwOTZcbiAgfCA4MTkyXG4gIHwgMTYzODRcbiAgfCAzMjc2OCAvLyBzaG91bGQgYmUgYSBwb3dlciBvZiAyXG5leHBvcnQgdHlwZSBGZnRTdGF0ZSA9IHtcbiAgbjogbnVtYmVyXG4gIGJpdFJldjogVWludDE2QXJyYXlcbiAgcmVhbDogRmxvYXQzMkFycmF5XG4gIGltYWc6IEZsb2F0MzJBcnJheVxuICBwb3dlcjogRmxvYXQzMkFycmF5XG4gIGZyYW1lOiBGbG9hdDMyQXJyYXlcbn1cblxuZXhwb3J0IGNvbnN0IFRBUkdFVF9TQU1QTEVfUkFURSA9IDE2MDAwXG5leHBvcnQgY29uc3QgV0lOX0xFTkdUSDogbnVtYmVyID0gNDAwXG5leHBvcnQgY29uc3QgTl9GRlQ6IG51bWJlciA9IDUxMlxuZXhwb3J0IGNvbnN0IEhPUF9MRU5HVEg6IG51bWJlciA9IDE2MCAvLyBtZWwgaG9wIGluIHNhbXBsZXMgKDEwIG1zIEAgMTYga0h6KVxuZXhwb3J0IGNvbnN0IE5fTUVMUzogbnVtYmVyID0gMTI4XG5leHBvcnQgY29uc3QgUFJFRU1QSDogbnVtYmVyID0gMC45N1xuZXhwb3J0IGNvbnN0IExPR19aRVJPX0dVQVJEOiBudW1iZXIgPSA1Ljk2MDQ2NDVlLThcblxuLy8vLy8vLy8vLyBQQUQgQkVHSU4gLy8vLy8vLy8vLy8vXG4vLyBaZXJvIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgcmF3IGF1ZGlvIGJlZm9yZSBmcmFtaW5nIGZvciBGRlQgY2FjdWxhdGlvbnMuXG4vLyBQQUQgbnVtIG9mIGxlZnQtcGFkZGluZyBpcyBhcHBsaWVkIG9uY2UgcGVyIGF1ZGlvIHN0cmVhbSwgYXQgdGhlIGJlZ2lubmluZy5cbi8vIFRoaXMgaXMgZm9yIGRvaW5nICdjZW50ZXJlZCBmcmFtaW5nJyBmb3IgdGhlIGZpcnN0IEZGVCBmcmFtZS4gT3RoZXJ3aXNlIHRoZSBmaXJzdCBmZXcgcmF3IGF1ZGlvIHNhbXBsZXNcbi8vIHdvdWxkIGxpZSBuZWFyIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIEhhbm4gd2luZG93LG13aGVyZSB0aGUgd2luZG93IGNvZWZmaWNpZW50cyBhcmUgY2xvc2UgdG8gemVybyxcbi8vIHN0cm9uZ2x5IGF0dGVudWF0aW5nIHRoZWlyIGNvbnRyaWJ1dGlvbiB0byB0aGUgcmVzdWx0aW5nIHNwZWN0cnVtLlxuXG5leHBvcnQgY29uc3QgUEFEID0gTl9GRlQgPj4gMSAvLyAyNTZcblxuLy8vLy8vLy8vLyBQQUQgRU5EIC8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vIE9GRlNFVCBCRUdJTiAvLy8vLy8vLy8vLy9cbi8vIFdlIHRha2UgV0lOX0xFTkdUSCByZWFsIGF1ZGlvIHNhbXBsZXMsIG11bHRpcGx5IHRoZW0gYnkgYSBXSU5fTEVOR1RIIHBvaW50IEhhbm4gd2luZG93XG4vLyBhbmQgcGxhY2UgdGhlIHJlc3VsdCBpbiB0aGUgbWlkZGxlIG9mIGFuIEZGVCBidWZmZXIgb2YgTl9GRlQgbnVtLiBvZiBlbGVtZW50cy5cbi8vIE9GRiB0ZWxscyB1cyB3aGVyZSB0aGUgcmVhbCBXSU5fTEVOR1RILXNhbXBsZSB3aW5kb3cgYmVnaW5zIGluc2lkZSB0aGUgRkZUIGJ1ZmZlci5cblxuZXhwb3J0IGNvbnN0IE9GRiA9IChOX0ZGVCAtIFdJTl9MRU5HVEgpID4+IDEgLy8gNTZcblxuLy8gU28sIGEgNTEyLXBvaW50IEZGVCBidWZmZXIgd291bGQgYmU6XG4vLyB8IDU2IHplcm9zIHwgNDAwIHdpbmRvd2VkIGF1ZGlvIHNhbXBsZXMgfCA1NiB6ZXJvcyB8XG4vLyAwICAgICAgICAgT0ZGICAgICAgICAgICAgICAgICAoV0lOX0xFTkdUSCArIE9GRikgIE5fRkZUXG4vLy8vLy8vLy8vIE9GRlNFVCBFTkQgLy8vLy8vLy8vLy8vXG5cbi8vIEEgc3RyZWFtaW5nIG1lbCBmcmFtZSBpcyBzdGFibGUgb25jZSB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgcmVhbCBIYW5uIHdpbmRvd1xuLy8gaXMgYXZhaWxhYmxlLiBDdXJyZW50bHkgdGhlIFdJTl9MRU5HVEggd2luZG93IGF0IE9GRlxuLy8gaW5zaWRlIHRoZSBOX0ZGVCBmcmFtZSwgc28gcmF3IHdpbmRvdyBpczpcbi8vIFtmICogSE9QX0xFTkdUSCAtIFBBRCArIE9GRiwgZiAqIEhPUF9MRU5HVEggLSBQQUQgKyBPRkYgKyBXSU5fTEVOR1RIKVxuZXhwb3J0IGNvbnN0IFNUUkVBTUlOR19SSUdIVF9DT05URVhUOiBudW1iZXIgPSBPRkYgKyBXSU5fTEVOR1RIIC0gUEFEXG5cbi8vIG1vZGVsIHNwZWNpZmljIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IE5FTU9fQ0hVTks6IG51bWJlciA9IDU2IC8vIG5ldyBtZWwgZnJhbWVzIHBlciBzdGVwICg1NjAgbXMgQCAxMCBtcyBob3ApXG5leHBvcnQgY29uc3QgTkVNT19QUkVDQUNIRTogbnVtYmVyID0gOSAvLyBwcmUtZW5jb2RlIG1lbCBjYWNoZSBmcmFtZXMgcHJlcGVuZGVkXG5leHBvcnQgY29uc3QgTkVNT19CTEFOSzogbnVtYmVyID0gMTAyNFxuZXhwb3J0IGNvbnN0IE5FTU9fVk9DQUI6IG51bWJlciA9IDEwMjUgLy8gMTAyNCArIGJsYW5rXG5leHBvcnQgY29uc3QgTkVNT19NQVhfU1lNOiBudW1iZXIgPSAxMFxuZXhwb3J0IGNvbnN0IE5FTU9fRlJBTUVTOiBudW1iZXIgPSBORU1PX1BSRUNBQ0hFICsgTkVNT19DSFVOSyAvLyA2NTogZml4ZWQgZW5jb2RlciBpbnB1dCBsZW5ndGhcbmV4cG9ydCBjb25zdCBORU1PX05VTV9FTkNPREVSX0xBWUVSUzogbnVtYmVyID0gMjRcbmV4cG9ydCBjb25zdCBORU1PX0hJRERFTl9ESU06IG51bWJlciA9IDEwMjRcbi8vIG5vdGUgdGhhdCB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIGxlZnQgY29udGV4dCBhdCBtZWwgbGV2ZWw7XG4vLyBpdHMgbnVtIG9mIGZyYW1lcyBpbiB0aGUgbGVmdCBjb250ZXh0IG9mIGVuY29kZXIncyBhdHRlbnRpb24gYmxvY2tzJ1xuZXhwb3J0IGNvbnN0IE5FTU9fTEVGVF9DT05URVhUOiBudW1iZXIgPSA3MFxuLy8gaXRzIG51bSBvZiBmcmFtZXMgaW4gdGhlIGxlZnQgY29udGV4dCBvZiBlbmNvZGVyJ3MgY29udiBibG9ja3MnXG5leHBvcnQgY29uc3QgTkVNT19DT05WX0NPTlRFWFQ6IG51bWJlciA9IDhcbmV4cG9ydCBjb25zdCBORU1PX0RFQ09ERVJfTFNUTV9ESU06IG51bWJlciA9IDY0MFxuXG4vLyBPbiBmaW5pc2gsIGFwcGVuZCB0aGlzIG1hbnkgY2h1bmtzIG9mIHNpbGVuY2Ugc28gdGhlIGNhY2hlLWF3YXJlIGVuY29kZXJcbi8vIGFuZCBSTk4tVCBkZWNvZGVyIGZsdXNoIHRoZSBmaW5hbCBwYXJ0aWFsIGNodW5rIOKAlCB3aXRob3V0IGl0IHRoZSB0cmFpbGluZ1xuLy8gd29yZChzKSBjYW4gYmUgZHJvcHBlZCB0byByaWdodC1jb250ZXh0IC8gZW1pc3Npb24gbGFnLiBUaGUgc2lsZW5jZSBmcmFtZXNcbi8vIGRlY29kZSB0byBSTk4tVCBibGFua3MsIHNvIHRoZSB0cmFuc2NyaXB0IGlzIHVuYWZmZWN0ZWQuXG5leHBvcnQgY29uc3QgU0lMRU5DRV9GTFVTSF9DSFVOS1M6IG51bWJlciA9IDNcblxuLy8gU2lsZW5jZSBmZWQgYmVmb3JlIHRoZSBmaXJzdCByZWFsIHNhbXBsZS4gVGhlIGV4cG9ydGVkIE9OTlggZW5jb2RlciBncmFwaFxuLy8gZHJvcHMgdGhlIGZpcnN0IDIgdGltZSBmcmFtZXMgb2YgaXRzIHByZS1lbmNvZGUgb3V0cHV0LiBUaGlzIGhhcHBlbnMgaW5zaWRlXG4vLyB0aGUgZ3JhcGgsIG5vdCBpbiBvdXIgc3RyZWFtaW5nIGNvZGUuIEl0IHNoaWZ0cyB0aGUgb3V0cHV0IGdyaWQgb2ZmIHRoZVxuLy8gc3RhcnQgb2YgdGhlIGF1ZGlvLCBzbyBhIHNob3J0IHdvcmQgdGhhdCBiZWdpbnMgd2l0aGluIHRoZSBmaXJzdCB+ODAgbXMgb2Zcbi8vIHRoZSBzdHJlYW0gY2FuIGJlIGxvc3QsIHdoYXRldmVyIHRoZSBhdWRpbyBzb3VyY2UuIE5WSURJQSdzIE5lbW90cm9uXG4vLyBzdHJlYW1pbmcgcmVsZWFzZSBub3RlcyByZWNvbW1lbmQgdGhpcyBzYW1lIGxlYWQtaW4uXG5leHBvcnQgY29uc3QgTEVBRElOR19TSUxFTkNFX01TOiBudW1iZXIgPSA4MFxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZ3MnXG5pbXBvcnQgdHlwZSB7IEZmdFNpemUsIEZmdFN0YXRlIH0gZnJvbSAnLi9jb25maWdzJ1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWFtaW5nTWVsRnJvbnRlbmREZWJ1Z1N0YXRlIHtcbiAgLy8gVG90YWwgbnVtYmVyIG9mIHJhdyBQQ00gc2FtcGxlcyBhcHBlbmRlZCBzaW5jZSB0aGUgc3RyZWFtIHN0YXJ0ZWQuXG4gIHJhd1NhbXBsZXNSZWNlaXZlZDogbnVtYmVyXG5cbiAgLy8gQWJzb2x1dGUgc2FtcGxlIGluZGV4IHJlcHJlc2VudGVkIGJ5IHJhd0F1ZGlvWzBdLlxuICByYXdCYXNlU2FtcGxlOiBudW1iZXJcblxuICAvLyBOdW1iZXIgb2YgcmF3IFBDTSBzYW1wbGVzIGN1cnJlbnRseSByZXRhaW5lZCBpbiBtZW1vcnkuXG4gIHJhd0J1ZmZlcmVkU2FtcGxlczogbnVtYmVyXG5cbiAgLy8gQWJzb2x1dGUgbWVsLWZyYW1lIGluZGV4IHJlcHJlc2VudGVkIGJ5IG1lbEZyYW1lc1swXS5cbiAgbWVsRnJhbWVCYXNlOiBudW1iZXJcblxuICAvLyBOdW1iZXIgb2YgY29tcHV0ZWQgbWVsIGZyYW1lcyBjdXJyZW50bHkgcmV0YWluZWQgaW4gbWVtb3J5LFxuICAvLyBpbmNsdWRpbmcgZnJhbWVzIGtlcHQgZm9yIHByZS1lbmNvZGUgY29udGV4dC5cbiAgbWVsQnVmZmVyZWRGcmFtZXM6IG51bWJlclxuXG4gIC8vIEFic29sdXRlIGluZGV4IG9mIHRoZSBuZXh0IG1lbCBmcmFtZSB0aGF0IGhhcyBub3QgeWV0IGJlZW4gY29tcHV0ZWQuXG4gIG5leHRNZWxGcmFtZTogbnVtYmVyXG5cbiAgLy8gQWJzb2x1dGUgaW5kZXggb2YgdGhlIGZpcnN0IG5ldyBtZWwgZnJhbWUgaW4gdGhlIG5leHQgZW5jb2RlciBjaHVuay5cbiAgbmV4dENodW5rRnJhbWU6IG51bWJlclxuXG4gIC8vIE51bWJlciBvZiBjb21wdXRlZCwgc3RhYmxlIG1lbCBmcmFtZXMgbm90IHlldCBjb25zdW1lZCBhcyBuZXdcbiAgLy8gZW5jb2RlciBpbnB1dCBmcmFtZXMuXG4gIHN0YWJsZUJhY2tsb2dGcmFtZXM6IG51bWJlclxuXG4gIC8vIE51bWJlciBvZiBjb21wbGV0ZSBORU1PX0NIVU5LLXNpemVkIGVuY29kZXIgaW5wdXRzIGN1cnJlbnRseSByZWFkeS5cbiAgY2h1bmtzUmVhZHk6IG51bWJlclxuXG4gIC8vIEFwcHJveGltYXRlIGR1cmF0aW9uIG9mIHN0YWJsZUJhY2tsb2dGcmFtZXMgaW4gbWlsbGlzZWNvbmRzLlxuICBlc3RpbWF0ZWRTdGFibGVCYWNrbG9nTXM6IG51bWJlclxufVxuXG5cbi8vIHN0YW5kYXJkIHN5bW1ldHJpYyBIYW5uIHdpbmRvdzsgZm9sbG93aW5nIE5lTW8ncyBpbXBsZW1lbnRhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGhhbm5XaW5kb3coKTogRmxvYXQzMkFycmF5IHtcbiAgcmV0dXJuIEZsb2F0MzJBcnJheS5mcm9tKFxuICAgIHsgbGVuZ3RoOiBjb25maWcuV0lOX0xFTkdUSCB9LFxuICAgIChfLCBpKSA9PiAwLjUgLSAwLjUgKiBNYXRoLmNvcygoMiAqIE1hdGguUEkgKiBpKSAvIChjb25maWcuV0lOX0xFTkdUSCAtIDEpKSxcbiAgKVxufVxuXG4vLyBJbml0aWFsaXplcyByZXVzYWJsZSBzdGF0ZSBhbmQgd29ya2luZyBidWZmZXJzIGZvciBhIHJhZGl4LTJcbi8vIENvb2xleeKAk1R1a2V5IEZGVCwgaW5jbHVkaW5nIGEgYml0LXJldmVyc2FsIGxvb2t1cCB0YWJsZS5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RmZ0UG93ZXIobjogRmZ0U2l6ZSk6IEZmdFN0YXRlIHtcbiAgaWYgKChuICYgKG4gLSAxKSkgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5fRkZUIG11c3QgYmUgYSBwb3dlciBvZiB0d28sIGdvdCAke259YClcbiAgfVxuXG4gIGNvbnN0IGJpdHMgPSBNYXRoLmxvZzIobilcbiAgY29uc3QgYml0UmV2ID0gbmV3IFVpbnQxNkFycmF5KG4pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBsZXQgeCA9IGlcbiAgICBsZXQgeSA9IDBcblxuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYml0czsgYisrKSB7XG4gICAgICB5ID0gKHkgPDwgMSkgfCAoeCAmIDEpXG4gICAgICB4ID4+PSAxXG4gICAgfVxuXG4gICAgYml0UmV2W2ldID0geVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuLFxuICAgIGJpdFJldixcbiAgICByZWFsOiBuZXcgRmxvYXQzMkFycmF5KG4pLFxuICAgIGltYWc6IG5ldyBGbG9hdDMyQXJyYXkobiksXG4gICAgcG93ZXI6IG5ldyBGbG9hdDMyQXJyYXkobiAvIDIgKyAxKSxcbiAgICBmcmFtZTogbmV3IEZsb2F0MzJBcnJheShuKSxcbiAgfVxufVxuXG4vLyBDb21wdXRlIHBvd2VyIHNwZWN0cnVtIGZyb20gYSByZWFsLXZhbHVlZCBOX0ZGVCBmcmFtZS5cbmV4cG9ydCBmdW5jdGlvbiBmZnRQb3dlcihmZnQ6IEZmdFN0YXRlKTogRmxvYXQzMkFycmF5IHtcbiAgY29uc3QgeyBuLCByZWFsLCBpbWFnLCBiaXRSZXYsIGZyYW1lIH0gPSBmZnRcblxuICAvLyBCaXQtcmV2ZXJzZWQgY29weSBvZiByZWFsIGlucHV0LlxuICAvLyBmcmFtZSBpcyBleHBlY3RlZCB0byBoYXZlIGxlbmd0aCBOX0ZGVC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICByZWFsW2ldID0gZnJhbWVbYml0UmV2W2ldXVxuICAgIGltYWdbaV0gPSAwLjBcbiAgfVxuXG4gIC8vIEl0ZXJhdGl2ZSByYWRpeC0yIENvb2xleS1UdWtleSBGRlQuXG4gIC8vIFRoaXMgbWF0Y2hlcyB0aGUgZm9yd2FyZCB0cmFuc2Zvcm06XG4gIC8vIFhba10gPSBzdW1fbiB4W25dICogZXhwKC1qICogMs+Aa24vTilcbiAgZm9yIChsZXQgbGVuID0gMjsgbGVuIDw9IG47IGxlbiA8PD0gMSkge1xuICAgIGNvbnN0IGhhbGZMZW4gPSBsZW4gPj4gMVxuICAgIGNvbnN0IGFuZ2xlID0gKC0yLjAgKiBNYXRoLlBJKSAvIGxlblxuICAgIGNvbnN0IHdMZW5SZWFsID0gTWF0aC5jb3MoYW5nbGUpXG4gICAgY29uc3Qgd0xlbkltYWcgPSBNYXRoLnNpbihhbmdsZSlcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSBsZW4pIHtcbiAgICAgIGxldCB3UmVhbCA9IDEuMFxuICAgICAgbGV0IHdJbWFnID0gMC4wXG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGFsZkxlbjsgaisrKSB7XG4gICAgICAgIGNvbnN0IGV2ZW5JbmRleCA9IGkgKyBqXG4gICAgICAgIGNvbnN0IG9kZEluZGV4ID0gZXZlbkluZGV4ICsgaGFsZkxlblxuXG4gICAgICAgIGNvbnN0IG9kZFJlYWwgPSByZWFsW29kZEluZGV4XVxuICAgICAgICBjb25zdCBvZGRJbWFnID0gaW1hZ1tvZGRJbmRleF1cblxuICAgICAgICBjb25zdCB2UmVhbCA9IG9kZFJlYWwgKiB3UmVhbCAtIG9kZEltYWcgKiB3SW1hZ1xuICAgICAgICBjb25zdCB2SW1hZyA9IG9kZFJlYWwgKiB3SW1hZyArIG9kZEltYWcgKiB3UmVhbFxuXG4gICAgICAgIGNvbnN0IHVSZWFsID0gcmVhbFtldmVuSW5kZXhdXG4gICAgICAgIGNvbnN0IHVJbWFnID0gaW1hZ1tldmVuSW5kZXhdXG5cbiAgICAgICAgcmVhbFtldmVuSW5kZXhdID0gdVJlYWwgKyB2UmVhbFxuICAgICAgICBpbWFnW2V2ZW5JbmRleF0gPSB1SW1hZyArIHZJbWFnXG5cbiAgICAgICAgcmVhbFtvZGRJbmRleF0gPSB1UmVhbCAtIHZSZWFsXG4gICAgICAgIGltYWdbb2RkSW5kZXhdID0gdUltYWcgLSB2SW1hZ1xuXG4gICAgICAgIGNvbnN0IG5leHRXUmVhbCA9IHdSZWFsICogd0xlblJlYWwgLSB3SW1hZyAqIHdMZW5JbWFnXG4gICAgICAgIGNvbnN0IG5leHRXSW1hZyA9IHdSZWFsICogd0xlbkltYWcgKyB3SW1hZyAqIHdMZW5SZWFsXG5cbiAgICAgICAgd1JlYWwgPSBuZXh0V1JlYWxcbiAgICAgICAgd0ltYWcgPSBuZXh0V0ltYWdcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwb3dlciA9IGZmdC5wb3dlclxuICBjb25zdCBiaW5zID0gbiAvIDIgKyAxXG5cbiAgZm9yIChsZXQgayA9IDA7IGsgPCBiaW5zOyBrKyspIHtcbiAgICBwb3dlcltrXSA9IHJlYWxba10gKiByZWFsW2tdICsgaW1hZ1trXSAqIGltYWdba11cbiAgfVxuXG4gIHJldHVybiBwb3dlclxufVxuXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVsRnJvbnRlbmQge1xuICBwcml2YXRlIHJhd0F1ZGlvOiBudW1iZXJbXSA9IFtdXG4gIHByaXZhdGUgcmF3QmFzZVNhbXBsZSA9IDBcbiAgcHJpdmF0ZSByYXdTYW1wbGVzUmVjZWl2ZWQgPSAwXG5cbiAgcHJpdmF0ZSBtZWxGcmFtZXM6IEZsb2F0MzJBcnJheVtdID0gW11cbiAgcHJpdmF0ZSBmcmVlTWVsRnJhbWVzOiBGbG9hdDMyQXJyYXlbXSA9IFtdXG5cbiAgcHJpdmF0ZSBhY3F1aXJlTWVsRnJhbWUoKTogRmxvYXQzMkFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5mcmVlTWVsRnJhbWVzLnBvcCgpID8/IG5ldyBGbG9hdDMyQXJyYXkoY29uZmlnLk5fTUVMUylcbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZU1lbEZyYW1lKGZyYW1lOiBGbG9hdDMyQXJyYXkpIHtcbiAgICBmcmFtZS5maWxsKDApXG4gICAgdGhpcy5mcmVlTWVsRnJhbWVzLnB1c2goZnJhbWUpXG4gIH1cblxuICBwcml2YXRlIG1lbEZyYW1lQmFzZSA9IDBcbiAgcHJpdmF0ZSBuZXh0TWVsRnJhbWUgPSAwXG4gIHByaXZhdGUgbmV4dENodW5rRnJhbWUgPSAwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYmFuazogRmxvYXQzMkFycmF5LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgaGFubjogRmxvYXQzMkFycmF5LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmZ0UHJlOiBGZnRTdGF0ZSxcbiAgKSB7fVxuXG4gIGFwcGVuZEF1ZGlvU2FtcGxlcyhzYW1wbGVzOiBGbG9hdDMyQXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmF3QXVkaW8ucHVzaChzYW1wbGVzW2ldKVxuICAgIH1cblxuICAgIHRoaXMucmF3U2FtcGxlc1JlY2VpdmVkICs9IHNhbXBsZXMubGVuZ3RoXG4gICAgdGhpcy5hcHBlbmRTdGFibGVNZWxGcmFtZXMoKVxuICAgIHRoaXMudHJpbU9sZEJ1ZmZlcnMoKVxuICB9XG5cbiAgaGFzRnVsbENodW5rKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRNZWxGcmFtZSAtIHRoaXMubmV4dENodW5rRnJhbWUgPj0gY29uZmlnLk5FTU9fQ0hVTktcbiAgfVxuXG4gIG1ha2VOZXh0RW5jb2RlcklucHV0KCk6IEZsb2F0MzJBcnJheSB7XG4gICAgaWYgKCF0aGlzLmhhc0Z1bGxDaHVuaygpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBlbm91Z2ggc3RhYmxlIG1lbCBmcmFtZXMgZm9yIGFub3RoZXIgZW5jb2RlciBjaHVuaycpXG4gICAgfVxuXG4gICAgY29uc3QgY2h1bmsgPSBuZXcgRmxvYXQzMkFycmF5KGNvbmZpZy5OX01FTFMgKiBjb25maWcuTkVNT19GUkFNRVMpXG4gICAgY29uc3QgbWFpblN0YXJ0ID0gdGhpcy5uZXh0Q2h1bmtGcmFtZVxuXG4gICAgLy8gTGVmdCBwcmUtZW5jb2RlIG1lbCBjYWNoZS4gRm9yIHRoZSBmaXJzdCBjaHVuaywgdGhpcyBsZWF2ZXMgdGhlIGZpcnN0XG4gICAgLy8gTkVNT19QUkVDQUNIRSBjb2x1bW5zIGFzIHplcm9zLlxuICAgIGNvbnN0IGNhY2hlU3RhcnQgPSBNYXRoLm1heCgwLCBtYWluU3RhcnQgLSBjb25maWcuTkVNT19QUkVDQUNIRSlcbiAgICBjb25zdCBjYWNoZUZyYW1lcyA9IG1haW5TdGFydCAtIGNhY2hlU3RhcnRcbiAgICBjb25zdCBjYWNoZU9mZnNldCA9IGNvbmZpZy5ORU1PX1BSRUNBQ0hFIC0gY2FjaGVGcmFtZXNcblxuICAgIGZvciAobGV0IGYgPSAwOyBmIDwgY2FjaGVGcmFtZXM7IGYrKykge1xuICAgICAgdGhpcy5jb3B5TWVsRnJhbWVUb0VuY29kZXJDaHVuayhcbiAgICAgICAgY2h1bmssXG4gICAgICAgIGNhY2hlT2Zmc2V0ICsgZixcbiAgICAgICAgdGhpcy5nZXRNZWxGcmFtZShjYWNoZVN0YXJ0ICsgZiksXG4gICAgICApXG4gICAgfVxuXG4gICAgZm9yIChsZXQgZiA9IDA7IGYgPCBjb25maWcuTkVNT19DSFVOSzsgZisrKSB7XG4gICAgICB0aGlzLmNvcHlNZWxGcmFtZVRvRW5jb2RlckNodW5rKFxuICAgICAgICBjaHVuayxcbiAgICAgICAgY29uZmlnLk5FTU9fUFJFQ0FDSEUgKyBmLFxuICAgICAgICB0aGlzLmdldE1lbEZyYW1lKG1haW5TdGFydCArIGYpLFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgY29uc3VtZUNodW5rKCkge1xuICAgIGlmICghdGhpcy5oYXNGdWxsQ2h1bmsoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY29uc3VtZSBhbiBpbmNvbXBsZXRlIG1lbCBjaHVuaycpXG4gICAgfVxuICAgIHRoaXMubmV4dENodW5rRnJhbWUgKz0gY29uZmlnLk5FTU9fQ0hVTktcbiAgICB0aGlzLnRyaW1PbGRCdWZmZXJzKClcbiAgfVxuXG4gIC8vIFplcm8gZXZlcnkgYnVmZmVyIGhvbGRpbmcgYXVkaW8gb3IgYWNvdXN0aWMgZmVhdHVyZXMgYW5kIHJlc2V0IHRoZVxuICAvLyBmcm9udGVuZCB0byBlbXB0eS4gQ2FsbGVkIGF0IHNlc3Npb24gZW5kIHNvIHRoZSB1dHRlcmFuY2UgZG9lcyBub3RcbiAgLy8gcGVyc2lzdCBpbiB0aGUgSlMgaGVhcCB1bnRpbCBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gIHdpcGUoKSB7XG4gICAgdGhpcy5yYXdBdWRpby5maWxsKDApXG4gICAgdGhpcy5yYXdBdWRpby5sZW5ndGggPSAwXG4gICAgZm9yIChjb25zdCBmcmFtZSBvZiB0aGlzLm1lbEZyYW1lcykge1xuICAgICAgZnJhbWUuZmlsbCgwKVxuICAgIH1cbiAgICB0aGlzLm1lbEZyYW1lcy5sZW5ndGggPSAwXG4gICAgdGhpcy5yYXdCYXNlU2FtcGxlID0gMFxuICAgIHRoaXMucmF3U2FtcGxlc1JlY2VpdmVkID0gMFxuICAgIHRoaXMubWVsRnJhbWVCYXNlID0gMFxuICAgIHRoaXMubmV4dE1lbEZyYW1lID0gMFxuICAgIHRoaXMubmV4dENodW5rRnJhbWUgPSAwXG4gICAgdGhpcy5mZnRQcmUuZnJhbWUuZmlsbCgwKVxuICAgIHRoaXMuZmZ0UHJlLnJlYWwuZmlsbCgwKVxuICAgIHRoaXMuZmZ0UHJlLmltYWcuZmlsbCgwKVxuICAgIHRoaXMuZmZ0UHJlLnBvd2VyLmZpbGwoMClcbiAgfVxuXG5cbiAgZGVidWdTdGF0ZSgpOiBTdHJlYW1pbmdNZWxGcm9udGVuZERlYnVnU3RhdGUge1xuICAgIGNvbnN0IHN0YWJsZUJhY2tsb2dGcmFtZXMgPSB0aGlzLm5leHRNZWxGcmFtZSAtIHRoaXMubmV4dENodW5rRnJhbWVcblxuICAgIHJldHVybiB7XG4gICAgICByYXdTYW1wbGVzUmVjZWl2ZWQ6IHRoaXMucmF3U2FtcGxlc1JlY2VpdmVkLFxuICAgICAgcmF3QmFzZVNhbXBsZTogdGhpcy5yYXdCYXNlU2FtcGxlLFxuICAgICAgcmF3QnVmZmVyZWRTYW1wbGVzOiB0aGlzLnJhd0F1ZGlvLmxlbmd0aCxcblxuICAgICAgbWVsRnJhbWVCYXNlOiB0aGlzLm1lbEZyYW1lQmFzZSxcbiAgICAgIG1lbEJ1ZmZlcmVkRnJhbWVzOiB0aGlzLm1lbEZyYW1lcy5sZW5ndGgsXG4gICAgICBuZXh0TWVsRnJhbWU6IHRoaXMubmV4dE1lbEZyYW1lLFxuICAgICAgbmV4dENodW5rRnJhbWU6IHRoaXMubmV4dENodW5rRnJhbWUsXG5cbiAgICAgIHN0YWJsZUJhY2tsb2dGcmFtZXMsXG4gICAgICBjaHVua3NSZWFkeTogTWF0aC5mbG9vcihzdGFibGVCYWNrbG9nRnJhbWVzIC8gY29uZmlnLk5FTU9fQ0hVTkspLFxuICAgICAgZXN0aW1hdGVkU3RhYmxlQmFja2xvZ01zOlxuICAgICAgICAoc3RhYmxlQmFja2xvZ0ZyYW1lcyAqIGNvbmZpZy5IT1BfTEVOR1RIICogMTAwMClcbiAgICAgICAgLyBjb25maWcuVEFSR0VUX1NBTVBMRV9SQVRFLFxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBhcHBlbmRTdGFibGVNZWxGcmFtZXMoKSB7XG4gICAgLy8gQnkgJ3N0YWJsZScgbWVsIGZyYW1lLCB3ZSBtZWFuIGEgbWVsIGZyYW1lIHdob3NlIHJlcXVpcmVkIHJhdyBhdWRpb1xuICAgIC8vIHNhbXBsZXMgYXJlIGFscmVhZHkgYXZhaWxhYmxlLCBpbmNsdWRpbmcgaXRzIHJpZ2h0LXNpZGUgY29udGV4dC5cbiAgICBjb25zdCBzdGFibGVGcmFtZXMgPSB0aGlzLnN0YWJsZU1lbEZyYW1lQ291bnRGb3JTYW1wbGVzKFxuICAgICAgdGhpcy5yYXdTYW1wbGVzUmVjZWl2ZWQsXG4gICAgKVxuXG4gICAgd2hpbGUgKHRoaXMubmV4dE1lbEZyYW1lIDwgc3RhYmxlRnJhbWVzKSB7XG4gICAgICB0aGlzLm1lbEZyYW1lcy5wdXNoKHRoaXMuY29tcHV0ZVN0cmVhbWluZ01lbEZyYW1lKHRoaXMubmV4dE1lbEZyYW1lKSlcbiAgICAgIHRoaXMubmV4dE1lbEZyYW1lICs9IDFcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YWJsZU1lbEZyYW1lQ291bnRGb3JTYW1wbGVzKHNhbXBsZUNvdW50OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvdW50ID1cbiAgICAgIE1hdGguZmxvb3IoXG4gICAgICAgIChzYW1wbGVDb3VudCAtIGNvbmZpZy5TVFJFQU1JTkdfUklHSFRfQ09OVEVYVCkgLyBjb25maWcuSE9QX0xFTkdUSCxcbiAgICAgICkgKyAxXG5cbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgY291bnQpXG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVTdHJlYW1pbmdNZWxGcmFtZShmcmFtZUluZGV4OiBudW1iZXIpOiBGbG9hdDMyQXJyYXkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mZnRQcmUuZnJhbWVcbiAgICBmcmFtZS5maWxsKDApXG5cbiAgICAvLyBNYXRjaCB0aGUgZnVsbC1idWZmZXIgTmVNbyBsYXlvdXQ6XG4gICAgLy8gd2luZG93IGlzIHBsYWNlZCBhdCBPRkYgaW5zaWRlIGFuIE5fRkZULXNpemVkIGZyYW1lLCBhbmQgdGhlIHJhd1xuICAgIC8vIHdpbmRvdyBzdGFydHMgYXQgZnJhbWVJbmRleCAqIEhPUF9MRU5HVEggLSBQQUQgKyBPRkYuXG4gICAgY29uc3QgcmF3U3RhcnQgPSBmcmFtZUluZGV4ICogY29uZmlnLkhPUF9MRU5HVEggLSBjb25maWcuUEFEICsgY29uZmlnLk9GRlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcuV0lOX0xFTkdUSDsgaSsrKSB7XG4gICAgICBmcmFtZVtjb25maWcuT0ZGICsgaV0gPVxuICAgICAgICB0aGlzLnByZWVtcGhhc2l6ZWRTYW1wbGVBdChyYXdTdGFydCArIGkpICogdGhpcy5oYW5uW2ldXG4gICAgfVxuXG4gICAgY29uc3QgcG93ZXIgPSBmZnRQb3dlcih0aGlzLmZmdFByZSlcbiAgICBjb25zdCBuZkZyZXEgPSBjb25maWcuTl9GRlQgLyAyICsgMVxuICAgIGNvbnN0IG1lbEZyYW1lID0gdGhpcy5hY3F1aXJlTWVsRnJhbWUoKVxuXG4gICAgZm9yIChsZXQgbSA9IDA7IG0gPCBjb25maWcuTl9NRUxTOyBtKyspIHtcbiAgICAgIGxldCBhY2MgPSAwXG4gICAgICBjb25zdCBmYiA9IG0gKiBuZkZyZXFcblxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuZkZyZXE7IGsrKykge1xuICAgICAgICBhY2MgKz0gdGhpcy5mYmFua1tmYiArIGtdICogcG93ZXJba11cbiAgICAgIH1cblxuICAgICAgbWVsRnJhbWVbbV0gPSBNYXRoLmxvZyhhY2MgKyBjb25maWcuTE9HX1pFUk9fR1VBUkQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbEZyYW1lXG4gIH1cblxuICBwcml2YXRlIHJhd1NhbXBsZUF0KGFic1NhbXBsZUluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChhYnNTYW1wbGVJbmRleCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYHJhd1NhbXBsZUF0IGNhbGxlZCB3aXRoIG5lZ2F0aXZlIGluZGV4ICR7YWJzU2FtcGxlSW5kZXh9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBTaG91bGQgb25seSBoYXBwZW4gaWYgdGhlIGNhbGxlciBpbnRlbnRpb25hbGx5IHJlcXVlc3RzIHNhbXBsZXMgYmV5b25kXG4gICAgLy8gdGhlIHJlYWwgc3RyZWFtLiBEdXJpbmcgbm9ybWFsIHN0cmVhbWluZywgc3RhYmxlLWZyYW1lIGdhdGluZyBwcmV2ZW50cyBpdC5cbiAgICBpZiAoYWJzU2FtcGxlSW5kZXggPj0gdGhpcy5yYXdTYW1wbGVzUmVjZWl2ZWQpIHtcbiAgICAgIHJldHVybiAwLjBcbiAgICB9XG5cbiAgICBjb25zdCByZWwgPSBhYnNTYW1wbGVJbmRleCAtIHRoaXMucmF3QmFzZVNhbXBsZVxuXG4gICAgaWYgKHJlbCA8IDAgfHwgcmVsID49IHRoaXMucmF3QXVkaW8ubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBTdHJlYW1pbmcgZnJvbnRlbmQgbG9zdCByYXcgc2FtcGxlICR7YWJzU2FtcGxlSW5kZXh9OyBgXG4gICAgICAgICAgKyBgYmFzZT0ke3RoaXMucmF3QmFzZVNhbXBsZX0sIGxlbj0ke3RoaXMucmF3QXVkaW8ubGVuZ3RofWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmF3QXVkaW9bcmVsXVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVlbXBoYXNpemVkT3JpZ2luYWxTYW1wbGVBdChhYnNTYW1wbGVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB4ID0gdGhpcy5yYXdTYW1wbGVBdChhYnNTYW1wbGVJbmRleClcblxuICAgIGlmIChhYnNTYW1wbGVJbmRleCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHhcbiAgICB9XG5cbiAgICByZXR1cm4geCAtIGNvbmZpZy5QUkVFTVBIICogdGhpcy5yYXdTYW1wbGVBdChhYnNTYW1wbGVJbmRleCAtIDEpXG4gIH1cblxuICBwcml2YXRlIHByZWVtcGhhc2l6ZWRTYW1wbGVBdChhYnNTYW1wbGVJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAvLyBNYXRjaCByZWZsZWN0LXBhZGRpbmcgc2VtYW50aWNzIGF0IHRoZSBzdGFydCBvZiB0aGUgc3RyZWFtIGFmdGVyXG4gICAgLy8gcHJlLWVtcGhhc2lzLiBGb3IgZXhhbXBsZSwgLTEgbWFwcyB0byBwcmVlbXBoYXNpemVkIHNhbXBsZSAxLlxuICAgIGlmIChhYnNTYW1wbGVJbmRleCA8IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnByZWVtcGhhc2l6ZWRPcmlnaW5hbFNhbXBsZUF0KC1hYnNTYW1wbGVJbmRleClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcmVlbXBoYXNpemVkT3JpZ2luYWxTYW1wbGVBdChhYnNTYW1wbGVJbmRleClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVsRnJhbWUoYWJzRnJhbWVJbmRleDogbnVtYmVyKTogRmxvYXQzMkFycmF5IHtcbiAgICBjb25zdCByZWwgPSBhYnNGcmFtZUluZGV4IC0gdGhpcy5tZWxGcmFtZUJhc2VcblxuICAgIGlmIChyZWwgPCAwIHx8IHJlbCA+PSB0aGlzLm1lbEZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFN0cmVhbWluZyBmcm9udGVuZCBsb3N0IG1lbCBmcmFtZSAke2Fic0ZyYW1lSW5kZXh9OyBgXG4gICAgICAgICAgKyBgYmFzZT0ke3RoaXMubWVsRnJhbWVCYXNlfSwgbGVuPSR7dGhpcy5tZWxGcmFtZXMubGVuZ3RofWAsXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubWVsRnJhbWVzW3JlbF1cbiAgfVxuXG4gIHByaXZhdGUgY29weU1lbEZyYW1lVG9FbmNvZGVyQ2h1bmsoXG4gICAgY2h1bms6IEZsb2F0MzJBcnJheSxcbiAgICBjaHVua0ZyYW1lT2Zmc2V0OiBudW1iZXIsXG4gICAgbWVsRnJhbWU6IEZsb2F0MzJBcnJheSxcbiAgKSB7XG4gICAgZm9yIChsZXQgbSA9IDA7IG0gPCBjb25maWcuTl9NRUxTOyBtKyspIHtcbiAgICAgIGNodW5rW20gKiBjb25maWcuTkVNT19GUkFNRVMgKyBjaHVua0ZyYW1lT2Zmc2V0XSA9IG1lbEZyYW1lW21dXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmltT2xkQnVmZmVycygpIHtcbiAgICAvLyBLZWVwIG9ubHkgbWVsIGZyYW1lcyBuZWVkZWQgZm9yIHRoZSBuZXh0IGVuY29kZXIgaW5wdXQncyA5LWZyYW1lXG4gICAgLy8gcHJlLWVuY29kZSBjYWNoZS5cbiAgICBjb25zdCBrZWVwRnJvbUZyYW1lID0gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgdGhpcy5uZXh0Q2h1bmtGcmFtZSAtIGNvbmZpZy5ORU1PX1BSRUNBQ0hFLFxuICAgIClcblxuICAgIGNvbnN0IGRyb3BGcmFtZXMgPSBrZWVwRnJvbUZyYW1lIC0gdGhpcy5tZWxGcmFtZUJhc2VcblxuICAgIGlmIChkcm9wRnJhbWVzID4gMCkge1xuICAgICAgLy8gWmVybyBlYWNoIGRyb3BwZWQgbWVsIGZyYW1lIGJlZm9yZSByZWxlYXNpbmcgaXQuIE1lbCBmZWF0dXJlcyBhcmUgYVxuICAgICAgLy8gbmVhciBjb21wbGV0ZSBhY291c3RpYyByZXByZXNlbnRhdGlvbiwgc28gd2lwaW5nIHRoZW0gaGVyZSBib3VuZHMgdGhlXG4gICAgICAvLyByZXNpZGVudCBhY291c3RpY3MgdG8gdGhlIGxpdmUgd2luZG93IHJhdGhlciB0aGFuIGxlYXZpbmcgZHJvcHBlZFxuICAgICAgLy8gZnJhbWVzIGluIHRoZSBKUyBoZWFwIHVudGlsIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcEZyYW1lczsgaSsrKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZU1lbEZyYW1lKHRoaXMubWVsRnJhbWVzW2ldKVxuICAgICAgfVxuICAgICAgdGhpcy5tZWxGcmFtZXMuc3BsaWNlKDAsIGRyb3BGcmFtZXMpXG4gICAgICB0aGlzLm1lbEZyYW1lQmFzZSA9IGtlZXBGcm9tRnJhbWVcbiAgICB9XG5cbiAgICAvLyBLZWVwIGVub3VnaCByYXcgYXVkaW8gdG8gY29tcHV0ZSB0aGUgbmV4dCBtZWwgZnJhbWUsIGluY2x1ZGluZyBvbmVcbiAgICAvLyBwcmV2aW91cyBzYW1wbGUgZm9yIHByZS1lbXBoYXNpcyBjb250aW51aXR5LlxuICAgIGNvbnN0IGZpcnN0UmF3TmVlZGVkID0gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgdGhpcy5uZXh0TWVsRnJhbWUgKiBjb25maWcuSE9QX0xFTkdUSCAtIGNvbmZpZy5QQUQgKyBjb25maWcuT0ZGIC0gMSxcbiAgICApXG5cbiAgICBjb25zdCBkcm9wU2FtcGxlcyA9IGZpcnN0UmF3TmVlZGVkIC0gdGhpcy5yYXdCYXNlU2FtcGxlXG5cbiAgICBpZiAoZHJvcFNhbXBsZXMgPiAwKSB7XG4gICAgICB0aGlzLnJhd0F1ZGlvLmZpbGwoMCwgMCwgZHJvcFNhbXBsZXMpXG4gICAgICB0aGlzLnJhd0F1ZGlvLnNwbGljZSgwLCBkcm9wU2FtcGxlcylcbiAgICAgIHRoaXMucmF3QmFzZVNhbXBsZSArPSBkcm9wU2FtcGxlc1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDI2IFRoZSBCcmF2ZSBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuLy8gWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG5cbmltcG9ydCB7IEJpZ0J1ZmZlciB9IGZyb20gJ2dlbi9tb2pvL3B1YmxpYy9tb2pvbS9iYXNlL2JpZ19idWZmZXIubW9qb20td2VidWkuanMnXG5cbi8vIFBhcnNlIGEgdG9rZW5zLnR4dCAoXCI8dG9rZW4+IDxpZD5cIiBwZXIgbGluZSwgaWQtb3JkZXJlZCwg4paBID09IHNwYWNlKSBpbnRvXG4vLyBhbiBpZC1pbmRleGVkIHZvY2FiIGFycmF5LlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVG9rZW5zKGJ1ZjogVWludDhBcnJheSk6IHN0cmluZ1tdIHtcbiAgY29uc3Qgdm9jYWI6IHN0cmluZ1tdID0gW11cbiAgZm9yIChjb25zdCBsaW5lIG9mIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShidWYpLnNwbGl0KCdcXG4nKSkge1xuICAgIGlmICghbGluZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgY29uc3Qgc3AgPSBsaW5lLmxhc3RJbmRleE9mKCcgJylcbiAgICB2b2NhYltwYXJzZUludChsaW5lLnNsaWNlKHNwICsgMSksIDEwKV0gPSBsaW5lLnNsaWNlKDAsIHNwKVxuICB9XG4gIHJldHVybiB2b2NhYlxufVxuXG4vLyBGcmVlIHRoZSBtb2RlbCBncmFwaCdzIEpTIGJhY2tpbmcgc3RvcmUgb25jZSBPUlQgaGFzIGNvcGllZCBpdCBpbnRvIGl0c1xuLy8gV0FTTSBoZWFwLiAoT1JULVdlYiByZWZlcmVuY2VzIGl0cyBvd24gV0FTTSBjb3B5LCBzbyB0aGUgc291cmNlIGlzIG5vXG4vLyBsb25nZXIgbmVlZGVkLikgdHJhbnNmZXIoMCkgZGV0YWNoZXMgaXQgaW1tZWRpYXRlbHkgaW5zdGVhZCBvZiB3YWl0aW5nIG9uXG4vLyBHQyBvZiB0aGUgbW9qby1tYXBwZWQgc2hhcmVkLW1lbW9yeSByZWdpb24uXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUJ5dGVzKGJ5dGVzOiBVaW50OEFycmF5KTogdm9pZCB7XG4gIHRyeSB7XG4gICAgY29uc3QgYnVmZmVyID0gYnl0ZXMuYnVmZmVyIGFzIEFycmF5QnVmZmVyICYge1xuICAgICAgdHJhbnNmZXI/OiAobmV3TGVuZ3RoPzogbnVtYmVyKSA9PiBBcnJheUJ1ZmZlclxuICAgIH1cbiAgICBidWZmZXIudHJhbnNmZXI/LigwKVxuICB9IGNhdGNoIHtcbiAgICAvLyBCYWNraW5nIHN0b3JlIGlzbid0IHRyYW5zZmVyYWJsZTsgR0Mgd2lsbCByZWNsYWltIGl0IGV2ZW50dWFsbHkuXG4gIH1cbn1cblxuLy8gQmlnQnVmZmVyIGlzIGEgbW9qbyB1bmlvbjogZWl0aGVyIGlubGluZWQgYnl0ZXMgb3IgYSBzaGFyZWQtbWVtb3J5XG4vLyBoYW5kbGUgdGhlIHJlbmRlcmVyIG1hcHMgaW4uXG5leHBvcnQgZnVuY3Rpb24gcmVhZEJpZ0J1ZmZlcihidWZmZXI6IEJpZ0J1ZmZlciwgbmFtZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIGlmIChidWZmZXIuYnl0ZXMpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ5dGVzKVxuICB9XG4gIGlmIChidWZmZXIuc2hhcmVkTWVtb3J5KSB7XG4gICAgY29uc3QgeyBidWZmZXI6IG1hcHBlZCwgcmVzdWx0IH0gPVxuICAgICAgYnVmZmVyLnNoYXJlZE1lbW9yeS5idWZmZXJIYW5kbGUubWFwQnVmZmVyKDAsIGJ1ZmZlci5zaGFyZWRNZW1vcnkuc2l6ZSlcbiAgICBpZiAocmVzdWx0ICE9PSBNb2pvLlJFU1VMVF9PSykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbWFwICR7bmFtZX0gc2hhcmVkIGJ1ZmZlcmApXG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShtYXBwZWQpXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkICR7bmFtZX0gQmlnQnVmZmVyYClcbn1cblxuLy8gQXJnbWF4IG92ZXIgYSBmbGF0IGFycmF5OyByZXR1cm5zIHRoZSBpbmRleCBvZiBtYXggdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiBhcmdtYXgoYTogRmxvYXQzMkFycmF5KTogbnVtYmVyIHtcbiAgbGV0IGJlc3QgPSAwXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhW2ldID4gYVtiZXN0XSkge1xuICAgICAgYmVzdCA9IGlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3Rcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBOZW1vdHJvbiAwLjZCIHN0cmVhbWluZyBSTk4tVCBvdmVyIG9ubnhydW50aW1lLXdlYi4gTW9qby1mcmVlOiBtb2RlbFxuLy8gbG9hZGluZyBmcm9tIHJhdyBieXRlcyBwbHVzIGEgcGVyLXV0dGVyYW5jZSBzdHJlYW1pbmcgc2Vzc2lvbiB0aGF0IGVtaXRzXG4vLyB0cmFuc2NyaXB0cyB0aHJvdWdoIGEgY2FsbGJhY2suIFRoZSBtb2pvIHRyYW5zcG9ydCBnbHVlIHRoYXQgZHJpdmVzIHRoaXNcbi8vIGxpdmVzIGluIHNwZWVjaF93b3JrZXIudHMuXG5cbmltcG9ydCB7XG4gIGhhbm5XaW5kb3csXG4gIGluaXRGZnRQb3dlcixcbiAgU3RyZWFtaW5nTWVsRnJvbnRlbmQsXG59IGZyb20gJy4vYXVkaW9fZmVhdHVyZXMnXG5pbXBvcnQgeyBkaXNwb3NlT3J0LCBlbnN1cmVPcnQgfSBmcm9tICcuL29ydF9lbnYnXG5pbXBvcnQgdHlwZSB7IE9ydCwgT3J0U2Vzc2lvbiwgT3J0U2Vzc2lvbk9wdGlvbnMsIE9ydFRlbnNvciB9IGZyb20gJy4vb3J0X2VudidcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZ3MnXG5pbXBvcnQgdHlwZSB7IEZmdFNpemUgfSBmcm9tICcuL2NvbmZpZ3MnXG5pbXBvcnQgeyByZWxlYXNlQnl0ZXMsIGFyZ21heCB9IGZyb20gJy4vdXRpbHMnXG5cbi8vIEVuY29kZXIgb3V0cHV0cyB3ZSBjb25zdW1lLiBgZW5jb2RlZF9sZW5ndGhzYCBpcyB0aGUgY291bnQgb2YgdmFsaWQgZW5jb2RlclxuLy8gZnJhbWVzOyB0aGUgaW5wdXQgbGVuZ3RoIGlzIGZpeGVkIGV2ZXJ5IGNhbGwgc28gaXQgbm9ybWFsbHkgZXF1YWxzIHRoZVxuLy8gZnVsbCB0aW1lLCBidXQgd2UgY2xhbXAgdGhlIGRlY29kZSB0byBpdCBkZWZlbnNpdmVseS5cbmNvbnN0IEVOQ19GRVRDSEVTID0gW1xuICAnb3V0cHV0cycsXG4gICdlbmNvZGVkX2xlbmd0aHMnLFxuICAnY2FjaGVfbGFzdF9jaGFubmVsX25leHQnLFxuICAnY2FjaGVfbGFzdF90aW1lX25leHQnLFxuICAnY2FjaGVfbGFzdF9jaGFubmVsX25leHRfbGVuJyxcbl1cblxuLy8gU2hhcmVkLCBsb2FkZWQtb25jZSBOZW1vdHJvbiBtb2RlbDogdGhlIGV4dGVybmFsLWRhdGEgZW5jb2RlciArIFJOTi1UXG4vLyBkZWNvZGVyIHNlc3Npb25zIHBsdXMgdG9rZW5zIGFuZCB0aGUgMTI4LW1lbCBmaWx0ZXJiYW5rLlxuZXhwb3J0IGNsYXNzIE9ydE5lbW90cm9uTW9kZWwge1xuICByZWFkb25seSBvcnQ6IE9ydFxuICByZWFkb25seSB0b2tlbnM6IHN0cmluZ1tdXG4gIHJlYWRvbmx5IGZiYW5rOiBGbG9hdDMyQXJyYXlcbiAgcmVhZG9ubHkgaGFubjogRmxvYXQzMkFycmF5XG5cbiAgLy8gVGhlIGVuY29kZXIgYW5kIGRlY29kZXIgc2Vzc2lvbnMgYXJlIHByaXZhdGUgb24gcHVycG9zZTogZXZlcnkgcnVuIG11c3QgZ29cbiAgLy8gdGhyb3VnaCBydW5FbmNvZGVyL3J1bkRlY29kZXIgc28gaXQgaXMgc2VyaWFsaXplZCBhZ2FpbnN0IG90aGVyIHN0cmVhbXMuXG4gIHByaXZhdGUgZW5jOiBPcnRTZXNzaW9uXG4gIHByaXZhdGUgZGVjOiBPcnRTZXNzaW9uXG5cbiAgLy8gRXZlcnkgcnVuIGdvZXMgdGhyb3VnaCB0aGlzIG9uZSBxdWV1ZSBzbyBydW5zIGZyb20gZGlmZmVyZW50IHN0cmVhbXMgbmV2ZXJcbiAgLy8gb3ZlcmxhcCBvbiB0aGUgc2hhcmVkIHNlc3Npb25zLiBvbm54cnVudGltZS13ZWIga2VlcHMgYSBzaW5nbGUgV0FTTSBzdGFja1xuICAvLyBwZXIgbW9kdWxlIGFuZCBkb2VzIG5vdCBsb2NrIHJ1bigpLCBzbyBvdmVybGFwcGluZyBydW5zIGNvcnJ1cHQgdGhhdCBzdGFjay5cbiAgcHJpdmF0ZSBxdWV1ZTogUHJvbWlzZTx1bmtub3duPiA9IFByb21pc2UucmVzb2x2ZSgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3J0OiBPcnQsXG4gICAgZW5jOiBPcnRTZXNzaW9uLFxuICAgIGRlYzogT3J0U2Vzc2lvbixcbiAgICB0b2tlbnM6IHN0cmluZ1tdLFxuICAgIGZiYW5rOiBGbG9hdDMyQXJyYXksXG4gICkge1xuICAgIHRoaXMub3J0ID0gb3J0XG4gICAgdGhpcy5lbmMgPSBlbmNcbiAgICB0aGlzLmRlYyA9IGRlY1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zXG4gICAgdGhpcy5mYmFuayA9IGZiYW5rXG4gICAgdGhpcy5oYW5uID0gaGFubldpbmRvdygpXG4gIH1cblxuICAvLyBTZXJpYWxpemVkIGVuY29kZXIvZGVjb2RlciBydW5zLiBUaGVzZSBhcmUgdGhlIG9ubHkgd2F5IHRvIHJlYWNoIHRoZVxuICAvLyBzaGFyZWQgc2Vzc2lvbnMsIHNvIG5vIHR3byBzdHJlYW1zJyBydW5zIGV2ZXIgb3ZlcmxhcC4gQSBmYWlsZWQgcnVuIGlzXG4gIC8vIGlzb2xhdGVkIG9uIHRoZSBjaGFpbiBzbyBpdCBjYW5ub3Qgc3RhbGwgbGF0ZXIgcnVucyBmb3Igb3RoZXIgc3RyZWFtcyxcbiAgLy8gd2hpbGUgaXRzIHJlamVjdGlvbiBzdGlsbCBwcm9wYWdhdGVzIHRvIHRoZSBjYWxsZXIuXG4gIHJ1bkVuY29kZXIoZmVlZHM6IFJlY29yZDxzdHJpbmcsIE9ydFRlbnNvcj4sIGZldGNoZXM6IHJlYWRvbmx5IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZCgoKSA9PiB0aGlzLmVuYy5ydW4oZmVlZHMsIGZldGNoZXMgYXMgc3RyaW5nW10pKVxuICB9XG5cbiAgcnVuRGVjb2RlcihmZWVkczogUmVjb3JkPHN0cmluZywgT3J0VGVuc29yPikge1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZWQoKCkgPT4gdGhpcy5kZWMucnVuKGZlZWRzKSlcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplZDxUPihydW46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnF1ZXVlLnRoZW4ocnVuKVxuICAgIHRoaXMucXVldWUgPSByZXN1bHQuY2F0Y2goKCkgPT4ge30pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLy8gQnVpbGQgdGhlIGVuY29kZXIgKyBkZWNvZGVyIHNlc3Npb25zIGZyb20gbW9qbyBCaWdCdWZmZXJzLiBPbmx5IHRoZVxuICAvLyAub25ueCArIC5vbm54LmRhdGEgZXh0ZXJuYWwtZGF0YSBleHBvcnQgaXMgc3VwcG9ydGVkIGZvciBtZW1vcnlcbiAgLy8gb3B0aW1pemF0aW9uLlxuICBzdGF0aWMgYXN5bmMgYnVpbGRGcm9tQnl0ZXMoXG4gICAgZW5jb2RlckdyYXBoOiBVaW50OEFycmF5LFxuICAgIGVuY0RhdGE6IFVpbnQ4QXJyYXksXG4gICAgZGVjb2RlckdyYXBoOiBVaW50OEFycmF5LFxuICAgIGRlY0RhdGE6IFVpbnQ4QXJyYXksXG4gICAgdG9rZW5zOiBzdHJpbmdbXSxcbiAgICBmYmFuazogRmxvYXQzMkFycmF5LFxuICApOiBQcm9taXNlPE9ydE5lbW90cm9uTW9kZWw+IHtcbiAgICBjb25zdCBvcnQgPSBhd2FpdCBlbnN1cmVPcnQoKVxuXG4gICAgY29uc3Qgc2Vzc2lvbk9wdGlvbnMgPSAoXG4gICAgICBkYXRhOiBVaW50OEFycmF5LFxuICAgICAgZGF0YVBhdGg6IHN0cmluZyxcbiAgICApOiBPcnRTZXNzaW9uT3B0aW9ucyA9PiAoe1xuICAgICAgZXhlY3V0aW9uUHJvdmlkZXJzOiBbJ3dhc20nXSxcblxuICAgICAgLy8gaW50NCBwcmVwYWNraW5nIGdpdmVzIG5vIHNwZWVkdXAgb24gdGhlIGV4dGVybmFsLWRhdGEgcGF0aCwgc28gZGlzYWJsZVxuICAgICAgLy8gaXQgdG8gYXZvaWQgdGhlIGV4dHJhIHByZXBhY2tlZC13ZWlnaHQgY29weSBpbiBXQVNNIG1lbW9yeS5cbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIHNlc3Npb246IHtcbiAgICAgICAgICBkaXNhYmxlX3ByZXBhY2tpbmc6ICcxJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGV4dGVybmFsRGF0YTogW3sgcGF0aDogZGF0YVBhdGgsIGRhdGEgfV0sXG4gICAgfSlcblxuICAgIGNvbnN0IGVuYyA9IGF3YWl0IG9ydC5JbmZlcmVuY2VTZXNzaW9uLmNyZWF0ZShcbiAgICAgIGVuY29kZXJHcmFwaCxcbiAgICAgIHNlc3Npb25PcHRpb25zKGVuY0RhdGEsICdlbmNvZGVyLm9ubnguZGF0YScpLFxuICAgIClcblxuICAgIHJlbGVhc2VCeXRlcyhlbmNvZGVyR3JhcGgpXG4gICAgcmVsZWFzZUJ5dGVzKGVuY0RhdGEpXG5cbiAgICBjb25zdCBkZWMgPSBhd2FpdCBvcnQuSW5mZXJlbmNlU2Vzc2lvbi5jcmVhdGUoXG4gICAgICBkZWNvZGVyR3JhcGgsXG4gICAgICBzZXNzaW9uT3B0aW9ucyhkZWNEYXRhLCAnZGVjb2Rlcl9qb2ludC5vbm54LmRhdGEnKSxcbiAgICApXG4gICAgcmVsZWFzZUJ5dGVzKGRlY29kZXJHcmFwaClcbiAgICByZWxlYXNlQnl0ZXMoZGVjRGF0YSlcblxuICAgIHJldHVybiBuZXcgT3J0TmVtb3Ryb25Nb2RlbChvcnQsIGVuYywgZGVjLCB0b2tlbnMsIGZiYW5rKVxuICB9XG59XG5cbi8vIE9uZSBOZW1vdHJvbiBBU1Igc2Vzc2lvbi4gVXNlcyBhbiBpbmNyZW1lbnRhbCBzdHJlYW1pbmcgbWVsIGZyb250ZW5kOlxuLy8gcmF3IHNhbXBsZXMgYXJlIGFwcGVuZGVkLCBvbmx5IG5ld2x5IHN0YWJsZSBtZWwgZnJhbWVzIGFyZSBjb21wdXRlZCwgYW5kXG4vLyBmaXhlZCA2NS1mcmFtZSBlbmNvZGVyIGNodW5rcyBhcmUgcGFja2VkIGZyb20gY2FjaGVkIG1lbCBmcmFtZXMuIE1vam8tZnJlZTpcbi8vIHRyYW5zY3JpcHRzIGFyZSBkZWxpdmVyZWQgdGhyb3VnaCB0aGUgb25SZXN1bHQgY2FsbGJhY2sgYW5kIGZhaWx1cmVzXG4vLyB0aHJvdWdoIG9uRXJyb3IuXG5leHBvcnQgY2xhc3MgTmVtb3Ryb25TdHJlYW1TZXNzaW9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBvblJlc3VsdDogKHRleHQ6IHN0cmluZywgaXNGaW5hbDogYm9vbGVhbikgPT4gdm9pZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uRXJyb3I6ICgpID0+IHZvaWRcbiAgcHJpdmF0ZSByZWFkb25seSBtb2RlbDogT3J0TmVtb3Ryb25Nb2RlbFxuICBwcml2YXRlIHJlYWRvbmx5IGZyb250ZW5kOiBTdHJlYW1pbmdNZWxGcm9udGVuZFxuXG4gIC8vIEF0dGVudGlvbiBjYWNoZS5cbiAgcHJpdmF0ZSBjYWNoZUNoID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICBjb25maWcuTkVNT19OVU1fRU5DT0RFUl9MQVlFUlNcbiAgICAgICogY29uZmlnLk5FTU9fTEVGVF9DT05URVhUXG4gICAgICAqIGNvbmZpZy5ORU1PX0hJRERFTl9ESU0sXG4gIClcblxuICAvLyBDb252b2x1dGlvbiBjYWNoZS5cbiAgcHJpdmF0ZSBjYWNoZVRpbWUgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgIGNvbmZpZy5ORU1PX05VTV9FTkNPREVSX0xBWUVSU1xuICAgICAgKiBjb25maWcuTkVNT19ISURERU5fRElNXG4gICAgICAqIGNvbmZpZy5ORU1PX0NPTlZfQ09OVEVYVCxcbiAgKVxuXG4gIC8vIEluZGljYXRlcyBob3cgbXVjaCBvZiBsZWZ0IGNvbnRleHQgYXQgZW5jb2Rlci1vdXRwdXQgbGV2ZWwgaXMgdmFsaWQuXG4gIC8vIFRoaXMgaXMgZGlmZmVyZW50IGZyb20gbGVmdCBjb250ZXh0IGF0IG1lbC1mcmFtZSBsZXZlbC5cbiAgcHJpdmF0ZSBjYWNoZUxlbiA9IEJpZ0ludDY0QXJyYXkuZnJvbShbQmlnSW50KDApXSlcblxuICAvLyBEZWNvZGVyIExTVE0gc3RhdGUgY2FjaGU7IDIgTFNUTSBsYXllcnMuXG4gIHByaXZhdGUgc3QxID0gbmV3IEZsb2F0MzJBcnJheSgyICogY29uZmlnLk5FTU9fREVDT0RFUl9MU1RNX0RJTSlcbiAgcHJpdmF0ZSBzdDIgPSBuZXcgRmxvYXQzMkFycmF5KDIgKiBjb25maWcuTkVNT19ERUNPREVSX0xTVE1fRElNKVxuXG4gIC8vIFJOTi1UIHByZWRpY3RvciBzZWVkLiBOZU1vIHVzZXMgQkxBTksgYXMgdGhlIGluaXRpYWwgcHJldmlvdXMgdG9rZW4uXG4gIHByaXZhdGUgcHJldlRva2VuID0gY29uZmlnLk5FTU9fQkxBTktcblxuICAvLyBIeXBvdGhlc2lzIHRva2VuIElEcy5cbiAgcHJpdmF0ZSByZWFkb25seSBoeXA6IG51bWJlcltdID0gW11cblxuICAvLyBBdWRpbyBpcyBhY2NlcHRlZCBvbmx5IHdoaWxlIHN0cmVhbWluZy4gVGhlIGZpbmFsIGZsdXNoIHJ1bnMgaW4gZmluaXNoaW5nXG4gIC8vIGFuZCBjYW4gc3RpbGwgZmFpbC4gZW5kZWQgaXMgdGVybWluYWwgYW5kIGZpcmVzIG9uUmVzdWx0IG9yIG9uRXJyb3Igb25jZS5cbiAgcHJpdmF0ZSBzdGF0ZTogJ3N0cmVhbWluZycgfCAnZmluaXNoaW5nJyB8ICdlbmRlZCcgPSAnc3RyZWFtaW5nJ1xuXG4gIC8vIFByZXZlbnRzIG92ZXJsYXBwaW5nIGFzeW5jIGluZmVyZW5jZSBjYWxscyB3aXRoaW4gdGhlIHNhbWUgc3RyZWFtLlxuICBwcml2YXRlIGluZmxpZ2h0OiBQcm9taXNlPHZvaWQ+ID0gUHJvbWlzZS5yZXNvbHZlKClcblxuICAvLyBEZWJ1ZyBjaHVuayBjb3VudGVyLlxuXG4gIHByaXZhdGUgY2h1bmtJZHggPSAwXG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBtb2RlbDogT3J0TmVtb3Ryb25Nb2RlbCxcbiAgICBzYW1wbGVSYXRlSHo6IG51bWJlcixcbiAgICBvblJlc3VsdDogKHRleHQ6IHN0cmluZywgaXNGaW5hbDogYm9vbGVhbikgPT4gdm9pZCxcbiAgICBvbkVycm9yOiAoKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICBpZiAoc2FtcGxlUmF0ZUh6ICE9PSBjb25maWcuVEFSR0VUX1NBTVBMRV9SQVRFKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBVbnN1cHBvcnRlZCBzYW1wbGUgcmF0ZSBmb3IgTmVtb3Ryb246ICR7c2FtcGxlUmF0ZUh6fSBIemAsXG4gICAgICApXG4gICAgfVxuICAgIHRoaXMub25SZXN1bHQgPSBvblJlc3VsdFxuICAgIHRoaXMub25FcnJvciA9IG9uRXJyb3JcbiAgICB0aGlzLmZyb250ZW5kID0gbmV3IFN0cmVhbWluZ01lbEZyb250ZW5kKFxuICAgICAgbW9kZWwuZmJhbmssXG4gICAgICBtb2RlbC5oYW5uLFxuICAgICAgaW5pdEZmdFBvd2VyKGNvbmZpZy5OX0ZGVCBhcyBGZnRTaXplKSxcbiAgICApXG4gICAgdGhpcy5mcm9udGVuZC5hcHBlbmRBdWRpb1NhbXBsZXMoXG4gICAgICBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAoY29uZmlnLlRBUkdFVF9TQU1QTEVfUkFURSAqIGNvbmZpZy5MRUFESU5HX1NJTEVOQ0VfTVMpIC8gMTAwMCxcbiAgICAgICksXG4gICAgKVxuICB9XG5cbiAgYWRkQXVkaW8oc2FtcGxlczogRmxvYXQzMkFycmF5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdHJlYW1pbmcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5mcm9udGVuZC5hcHBlbmRBdWRpb1NhbXBsZXMoc2FtcGxlcylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5mYWlsKGVycm9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB0aGlzLmRlYnVnKCdhdWRpbyBhcHBlbmRlZCcsIHtcbiAgICAgIHNhbXBsZXM6IHNhbXBsZXMubGVuZ3RoLFxuICAgICAgbXM6IHRoaXMuc2FtcGxlc1RvTXMoc2FtcGxlcy5sZW5ndGgpLFxuICAgICAgZnJvbnRlbmQ6IHRoaXMuZnJvbnRlbmQuZGVidWdTdGF0ZSgpLFxuICAgIH0pXG5cblxuICAgIHRoaXMuaW5mbGlnaHQgPSB0aGlzLmluZmxpZ2h0XG4gICAgICAudGhlbigoKSA9PiB0aGlzLnByb2Nlc3NBdmFpbGFibGUoZmFsc2UpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gdGhpcy5mYWlsKGVycm9yKSlcbiAgfVxuXG4gIC8vIEZsdXNoIHRoZSB0cmFpbGluZyB3b3JkcyBhbmQgZW1pdCB0aGUgZmluYWwgdHJhbnNjcmlwdC4gQXBwZW5kcyBzaWxlbmNlXG4gIC8vIHNvIHRoZSBzdHJlYW1pbmcgZW5jb2Rlci9STk4tVCBkcmFpbnMgdGhlIGxhc3QgcGFydGlhbCBjaHVuayBpbnRvIGZ1bGxcbiAgLy8gNjUtZnJhbWUgY2h1bmtzLiBJZGVtcG90ZW50OiBhZnRlciB0aGUgZmlyc3QgY2FsbCBhZGRBdWRpbygpIG5vLW9wcywgc29cbiAgLy8gdGhlIGZpbmFsIGZsdXNoIHJ1bnMgZXhhY3RseSBvbmNlLlxuICBmaW5pc2goKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09ICdzdHJlYW1pbmcnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gJ2ZpbmlzaGluZydcblxuICAgIGNvbnN0IGZsdXNoID1cbiAgICAgIGNvbmZpZy5TSUxFTkNFX0ZMVVNIX0NIVU5LUyAqIGNvbmZpZy5ORU1PX0NIVU5LICogY29uZmlnLkhPUF9MRU5HVEhcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmZyb250ZW5kLmFwcGVuZEF1ZGlvU2FtcGxlcyhuZXcgRmxvYXQzMkFycmF5KGZsdXNoKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5mYWlsKGVycm9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICB0aGlzLmRlYnVnKCdmaW5pc2ggcmVxdWVzdGVkLCBhcHBlbmRlZCBzaWxlbmNlJywge1xuICAgICAgZmx1c2hTYW1wbGVzOiBmbHVzaCxcbiAgICAgIGZsdXNoTXM6IHRoaXMuc2FtcGxlc1RvTXMoZmx1c2gpLFxuICAgICAgZnJvbnRlbmQ6IHRoaXMuZnJvbnRlbmQuZGVidWdTdGF0ZSgpLFxuICAgIH0pXG5cblxuICAgIHRoaXMuaW5mbGlnaHQgPSB0aGlzLmluZmxpZ2h0XG4gICAgICAudGhlbigoKSA9PiB0aGlzLnByb2Nlc3NBdmFpbGFibGUodHJ1ZSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZW5kZWQnXG4gICAgICAgIHRoaXMud2lwZSgpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gdGhpcy5mYWlsKGVycm9yKSlcbiAgfVxuXG4gIC8vIFNpbmdsZSB0ZXJtaW5hbCBwYXRoIGZvciBhIGZhaWx1cmUuIEV2ZXJ5IGVycm9yIGVuZHMgdGhlIHJlY29nbml0aW9uLFxuICAvLyBzaW5jZSB0aGUgYnJvd3NlciBjYW5ub3QgYmUgdG9sZCBtb3JlIHRoYW4gdGhhdCBubyByZXN1bHQgaXMgY29taW5nLlxuICBwcml2YXRlIGZhaWwoZXJyb3I6IHVua25vd24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2VuZGVkJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9ICdlbmRlZCdcbiAgICBjb25zb2xlLmVycm9yKCdbc3BlZWNoLXdvcmtlcl0gaW5mZXJlbmNlIGZhaWxlZDonLCBlcnJvcilcbiAgICB0aGlzLndpcGUoKVxuICAgIHRoaXMub25FcnJvcigpXG4gIH1cblxuICAvLyBaZXJvIGV2ZXJ5IHBlci1zZXNzaW9uIGJ1ZmZlciBob2xkaW5nIGF1ZGlvLCBhY291c3RpYyBmZWF0dXJlcywgb3JcbiAgLy8gdHJhbnNjcmlwdCBvbmNlIHRoZSByZWNvZ25pdGlvbiBoYXMgZW5kZWQsIHdoZXRoZXIgaXQgZW1pdHRlZCBhIGZpbmFsXG4gIC8vIHJlc3VsdCBvciBmYWlsZWQsIHNvIHRoZSB1dHRlcmFuY2UgZG9lcyBub3QgbGluZ2VyIGluIHRoZSBKUyBoZWFwIHVudGlsXG4gIC8vIGdhcmJhZ2UgY29sbGVjdGlvbi4gVGhlIHNoYXJlZCBtb2RlbCB3ZWlnaHRzIGFyZSB1bnRvdWNoZWQuXG4gIHByaXZhdGUgd2lwZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZyb250ZW5kLndpcGUoKVxuICAgIHRoaXMuaHlwLmZpbGwoMClcbiAgICB0aGlzLmh5cC5sZW5ndGggPSAwXG4gICAgdGhpcy5jYWNoZUNoLmZpbGwoMClcbiAgICB0aGlzLmNhY2hlVGltZS5maWxsKDApXG4gICAgdGhpcy5jYWNoZUxlbi5maWxsKEJpZ0ludCgwKSlcbiAgICB0aGlzLnN0MS5maWxsKDApXG4gICAgdGhpcy5zdDIuZmlsbCgwKVxuICAgIHRoaXMucHJldlRva2VuID0gY29uZmlnLk5FTU9fQkxBTktcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0F2YWlsYWJsZShmaW5hbDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgb3J0LCB0b2tlbnMgfSA9IHRoaXMubW9kZWxcbiAgICBsZXQgYXRMZWFzdE9uZUNodW5rUHJvY2Vzc2VkID0gZmFsc2VcblxuICAgIHdoaWxlICh0aGlzLmZyb250ZW5kLmhhc0Z1bGxDaHVuaygpKSB7XG5cbiAgICAgIGNvbnN0IGNodW5rSWR4ID0gdGhpcy5jaHVua0lkeCsrXG4gICAgICBjb25zdCBmcm9udGVuZEJlZm9yZSA9IHRoaXMuZnJvbnRlbmQuZGVidWdTdGF0ZSgpXG4gICAgICBjb25zdCBjaHVua1N0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKVxuICAgICAgY29uc3QgcGFja1N0YXJ0ZWQgPSBwZXJmb3JtYW5jZS5ub3coKVxuXG5cbiAgICAgIGNvbnN0IHNpZyA9IHRoaXMuZnJvbnRlbmQubWFrZU5leHRFbmNvZGVySW5wdXQoKVxuXG5cbiAgICAgIGNvbnN0IHBhY2tNcyA9IHBlcmZvcm1hbmNlLm5vdygpIC0gcGFja1N0YXJ0ZWRcbiAgICAgIGNvbnN0IGVuY29kZXJTdGFydGVkID0gcGVyZm9ybWFuY2Uubm93KClcblxuXG4gICAgICAvLyBGcmVzaCBpbnB1dCB0ZW5zb3JzIGV2ZXJ5IHN0ZXAuIERvIG5vdCByZXVzZS9jYXJyeSBPUlQgdGVuc29ycy5cbiAgICAgIGNvbnN0IGVvID0gYXdhaXQgdGhpcy5tb2RlbC5ydW5FbmNvZGVyKFxuICAgICAgICB7XG4gICAgICAgICAgYXVkaW9fc2lnbmFsOiBuZXcgb3J0LlRlbnNvcignZmxvYXQzMicsIHNpZywgW1xuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGNvbmZpZy5OX01FTFMsXG4gICAgICAgICAgICBjb25maWcuTkVNT19GUkFNRVMsXG4gICAgICAgICAgXSksXG5cbiAgICAgICAgICBsZW5ndGg6IG5ldyBvcnQuVGVuc29yKFxuICAgICAgICAgICAgJ2ludDY0JyxcbiAgICAgICAgICAgIEJpZ0ludDY0QXJyYXkuZnJvbShbQmlnSW50KGNvbmZpZy5ORU1PX0ZSQU1FUyldKSxcbiAgICAgICAgICAgIFsxXSxcbiAgICAgICAgICApLFxuXG4gICAgICAgICAgY2FjaGVfbGFzdF9jaGFubmVsOiBuZXcgb3J0LlRlbnNvcignZmxvYXQzMicsIHRoaXMuY2FjaGVDaCwgW1xuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIGNvbmZpZy5ORU1PX05VTV9FTkNPREVSX0xBWUVSUyxcbiAgICAgICAgICAgIGNvbmZpZy5ORU1PX0xFRlRfQ09OVEVYVCxcbiAgICAgICAgICAgIGNvbmZpZy5ORU1PX0hJRERFTl9ESU0sXG4gICAgICAgICAgXSksXG5cbiAgICAgICAgICBjYWNoZV9sYXN0X3RpbWU6IG5ldyBvcnQuVGVuc29yKCdmbG9hdDMyJywgdGhpcy5jYWNoZVRpbWUsIFtcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICBjb25maWcuTkVNT19OVU1fRU5DT0RFUl9MQVlFUlMsXG4gICAgICAgICAgICBjb25maWcuTkVNT19ISURERU5fRElNLFxuICAgICAgICAgICAgY29uZmlnLk5FTU9fQ09OVl9DT05URVhULFxuICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgY2FjaGVfbGFzdF9jaGFubmVsX2xlbjogbmV3IG9ydC5UZW5zb3IoJ2ludDY0JywgdGhpcy5jYWNoZUxlbiwgWzFdKSxcbiAgICAgICAgfSxcbiAgICAgICAgRU5DX0ZFVENIRVMsXG4gICAgICApXG5cblxuICAgICAgY29uc3QgZW5jb2Rlck1zID0gcGVyZm9ybWFuY2Uubm93KCkgLSBlbmNvZGVyU3RhcnRlZFxuXG5cbiAgICAgIC8vIENvcHkgZGF0YSBvdXQgYmVmb3JlIGRpc3Bvc2luZyBPUlQgdGVuc29ycy5cbiAgICAgIC8vIEVuY29kZXIgb3V0cHV0IGlzIGxhaWQgb3V0IGFzIFtiYXRjaCwgaGlkZGVuX2RpbSwgdGltZV0uXG4gICAgICBjb25zdCBlbmNPdXQgPSAoZW8ub3V0cHV0cy5kYXRhIGFzIEZsb2F0MzJBcnJheSkuc2xpY2UoKVxuXG4gICAgICAvLyBOdW1iZXIgb2YgdGltZSBmcmFtZXMgYXQgb3V0cHV0IG9mIGVuY29kZXIuXG4gICAgICBjb25zdCBuVGltZSA9IE51bWJlcihlby5vdXRwdXRzLmRpbXNbMl0pXG5cbiAgICAgIC8vIE51bWJlciBvZiB2YWxpZCBlbmNvZGVyIGZyYW1lcyB0byBhY3R1YWxseSBkZWNvZGUuXG4gICAgICBjb25zdCBuRW5jID0gTWF0aC5taW4oXG4gICAgICAgIE51bWJlcigoZW8uZW5jb2RlZF9sZW5ndGhzLmRhdGEgYXMgQmlnSW50NjRBcnJheSlbMF0pLFxuICAgICAgICBuVGltZSxcbiAgICAgIClcblxuICAgICAgLy8gVXBkYXRlIGVuY29kZXIgY2FjaGVzLlxuICAgICAgdGhpcy5jYWNoZUNoID0gKGVvLmNhY2hlX2xhc3RfY2hhbm5lbF9uZXh0LmRhdGEgYXMgRmxvYXQzMkFycmF5KS5zbGljZSgpXG5cbiAgICAgIHRoaXMuY2FjaGVUaW1lID0gKGVvLmNhY2hlX2xhc3RfdGltZV9uZXh0LmRhdGEgYXMgRmxvYXQzMkFycmF5KS5zbGljZSgpXG5cbiAgICAgIC8vIEdyb3dzIHVudGlsIE5FTU9fTEVGVF9DT05URVhUIGFuZCB0aGVuIHN0YXlzIHRoZXJlLlxuICAgICAgdGhpcy5jYWNoZUxlbiA9IChcbiAgICAgICAgZW8uY2FjaGVfbGFzdF9jaGFubmVsX25leHRfbGVuLmRhdGEgYXMgQmlnSW50NjRBcnJheVxuICAgICAgKS5zbGljZSgpXG5cbiAgICAgIGRpc3Bvc2VPcnQoW10sIGVvIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgT3J0VGVuc29yPilcblxuICAgICAgLy8gUk5OLVQgZ3JlZWR5IGRlY29kZSBvdmVyIHRoaXMgY2h1bmsncyBlbmNvZGVyIGZyYW1lcy5cblxuICAgICAgY29uc3QgZGVjb2RlU3RhcnRlZCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICBsZXQgZGVjb2RlckNhbGxzID0gMFxuICAgICAgbGV0IGVtaXR0ZWRUb2tlbnNUaGlzQ2h1bmsgPSAwXG4gICAgICBsZXQgbWF4U3ltSGl0cyA9IDBcblxuXG4gICAgICAvLyBPdXRlciBsb29wIG92ZXIgZW5jb2RlciB0aW1lIGluZGV4LlxuICAgICAgZm9yIChsZXQgZmkgPSAwOyBmaSA8IG5FbmM7IGZpKyspIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBuZXcgRmxvYXQzMkFycmF5KGNvbmZpZy5ORU1PX0hJRERFTl9ESU0pXG5cbiAgICAgICAgLy8gSW5uZXIgbG9vcCBvdmVyIGNoYW5uZWwvaGlkZGVuLWRpbSBpbmRleC5cbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb25maWcuTkVNT19ISURERU5fRElNOyBjKyspIHtcbiAgICAgICAgICBmcmFtZVtjXSA9IGVuY091dFtjICogblRpbWUgKyBmaV1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzeW0gPSAwXG5cbiAgICAgICAgLy8gRGVjb2RlciBwcm9jZXNzZXMgZWFjaCB0aW1lIGZyYW1lLCBhZ2dyZWdhdGVkIGFjcm9zcyBhbGwgY2hhbm5lbHMuXG4gICAgICAgIHdoaWxlIChzeW0gPCBjb25maWcuTkVNT19NQVhfU1lNKSB7XG4gICAgICAgICAgY29uc3QgZG91dCA9IGF3YWl0IHRoaXMubW9kZWwucnVuRGVjb2Rlcih7XG4gICAgICAgICAgICBlbmNvZGVyX291dHB1dHM6IG5ldyBvcnQuVGVuc29yKCdmbG9hdDMyJywgZnJhbWUsIFtcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgY29uZmlnLk5FTU9fSElEREVOX0RJTSxcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgICB0YXJnZXRzOiBuZXcgb3J0LlRlbnNvcihcbiAgICAgICAgICAgICAgJ2ludDMyJyxcbiAgICAgICAgICAgICAgSW50MzJBcnJheS5mcm9tKFt0aGlzLnByZXZUb2tlbl0pLFxuICAgICAgICAgICAgICBbMSwgMV0sXG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICB0YXJnZXRfbGVuZ3RoOiBuZXcgb3J0LlRlbnNvcignaW50MzInLCBJbnQzMkFycmF5LmZyb20oWzFdKSwgWzFdKSxcblxuICAgICAgICAgICAgaW5wdXRfc3RhdGVzXzE6IG5ldyBvcnQuVGVuc29yKCdmbG9hdDMyJywgdGhpcy5zdDEsIFtcbiAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgY29uZmlnLk5FTU9fREVDT0RFUl9MU1RNX0RJTSxcbiAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgICBpbnB1dF9zdGF0ZXNfMjogbmV3IG9ydC5UZW5zb3IoJ2Zsb2F0MzInLCB0aGlzLnN0MiwgW1xuICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICBjb25maWcuTkVNT19ERUNPREVSX0xTVE1fRElNLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgfSlcblxuXG4gICAgICAgICAgZGVjb2RlckNhbGxzKytcblxuXG4gICAgICAgICAgY29uc3QgdG9rID0gYXJnbWF4KGRvdXQub3V0cHV0cy5kYXRhIGFzIEZsb2F0MzJBcnJheSlcblxuICAgICAgICAgIGlmICh0b2sgIT09IGNvbmZpZy5ORU1PX0JMQU5LKSB7XG4gICAgICAgICAgICB0aGlzLmh5cC5wdXNoKHRvaylcbiAgICAgICAgICAgIHRoaXMucHJldlRva2VuID0gdG9rXG4gICAgICAgICAgICB0aGlzLnN0MSA9IChkb3V0Lm91dHB1dF9zdGF0ZXNfMS5kYXRhIGFzIEZsb2F0MzJBcnJheSkuc2xpY2UoKVxuICAgICAgICAgICAgdGhpcy5zdDIgPSAoZG91dC5vdXRwdXRfc3RhdGVzXzIuZGF0YSBhcyBGbG9hdDMyQXJyYXkpLnNsaWNlKClcblxuICAgICAgICAgICAgZW1pdHRlZFRva2Vuc1RoaXNDaHVuaysrXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwb3NlT3J0KFtdLCBkb3V0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgT3J0VGVuc29yPilcblxuICAgICAgICAgIGlmICh0b2sgPT09IGNvbmZpZy5ORU1PX0JMQU5LKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN5bSsrXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChzeW0gPT09IGNvbmZpZy5ORU1PX01BWF9TWU0pIHtcbiAgICAgICAgICBtYXhTeW1IaXRzKytcbiAgICAgICAgfVxuXG4gICAgICB9XG5cblxuICAgICAgY29uc3QgZGVjb2RlTXMgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGRlY29kZVN0YXJ0ZWRcblxuXG4gICAgICB0aGlzLmZyb250ZW5kLmNvbnN1bWVDaHVuaygpXG5cblxuICAgICAgY29uc3QgbW9kZWxNcyA9IGVuY29kZXJNcyArIGRlY29kZU1zXG4gICAgICBjb25zdCB0b3RhbE1zID0gcGVyZm9ybWFuY2Uubm93KCkgLSBjaHVua1N0YXJ0ZWRcbiAgICAgIGNvbnN0IGNodW5rQXVkaW9NcyA9IHRoaXMuc2FtcGxlc1RvTXMoXG4gICAgICAgIGNvbmZpZy5ORU1PX0NIVU5LICogY29uZmlnLkhPUF9MRU5HVEgsXG4gICAgICApXG5cbiAgICAgIHRoaXMuZGVidWcoJ2NodW5rIHByb2Nlc3NlZCcsIHtcbiAgICAgICAgY2h1bmtJZHgsXG5cbiAgICAgICAgcGFja01zLFxuICAgICAgICBlbmNvZGVyTXMsXG4gICAgICAgIGRlY29kZU1zLFxuICAgICAgICBtb2RlbE1zLFxuICAgICAgICB0b3RhbE1zLFxuXG4gICAgICAgIGNodW5rQXVkaW9NcyxcbiAgICAgICAgbW9kZWxSdGY6IG1vZGVsTXMgLyBjaHVua0F1ZGlvTXMsXG4gICAgICAgIHRvdGFsUnRmOiB0b3RhbE1zIC8gY2h1bmtBdWRpb01zLFxuXG4gICAgICAgIG5UaW1lLFxuICAgICAgICBuRW5jLFxuICAgICAgICBkZWNvZGVyQ2FsbHMsXG4gICAgICAgIGVtaXR0ZWRUb2tlbnNUaGlzQ2h1bmssXG4gICAgICAgIGh5cFRva2Vuc1RvdGFsOiB0aGlzLmh5cC5sZW5ndGgsXG4gICAgICAgIG1heFN5bUhpdHMsXG5cbiAgICAgICAgY2FjaGVMZW46IE51bWJlcih0aGlzLmNhY2hlTGVuWzBdKSxcblxuICAgICAgICBmcm9udGVuZEJlZm9yZSxcbiAgICAgICAgZnJvbnRlbmRBZnRlcjogdGhpcy5mcm9udGVuZC5kZWJ1Z1N0YXRlKCksXG4gICAgICB9KVxuXG5cbiAgICAgIGF0TGVhc3RPbmVDaHVua1Byb2Nlc3NlZCA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoYXRMZWFzdE9uZUNodW5rUHJvY2Vzc2VkIHx8IGZpbmFsKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5oeXBcbiAgICAgICAgLm1hcCgoaWQpID0+IHRva2Vuc1tpZF0gPz8gJycpXG4gICAgICAgIC5qb2luKCcnKVxuICAgICAgICAucmVwbGFjZSgv4paBL2csICcgJylcbiAgICAgICAgLnRyaW0oKVxuXG4gICAgICBpZiAodGV4dCB8fCBmaW5hbCkge1xuICAgICAgICB0aGlzLm9uUmVzdWx0KHRleHQsIGZpbmFsKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBzYW1wbGVzVG9NcyhzYW1wbGVzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiAoc2FtcGxlcyAqIDEwMDApIC8gY29uZmlnLlRBUkdFVF9TQU1QTEVfUkFURVxuICB9XG5cbiAgcHJpdmF0ZSBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkZXRhaWxzID8/IHt9LCAoX2tleSwgdmFsdWU6IHVua25vd24pID0+XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdiaWdpbnQnID8gdmFsdWUudG9TdHJpbmcoKSA6IHZhbHVlLFxuICAgIClcblxuICAgIGNvbnNvbGUuZXJyb3IoYFtORU1PX0RFQlVHXSAke21lc3NhZ2V9ICR7anNvbn1gKVxuICB9XG5cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyNiBUaGUgQnJhdmUgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbi8vIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuXG4vLyBPUlQtV2ViIHNwZWVjaCB3b3JrZXIuIEEgY3Jvc3Mtb3JpZ2luLWlzb2xhdGVkIHJlbmRlcmVyIHRoYXQgcnVucyB0aGVcbi8vIE5lbW90cm9uIDAuNkIgaW50NCBPTk5YIGVuY29kZXIgKyBSTk4tVCBkZWNvZGVyIHRocm91Z2ggb25ueHJ1bnRpbWUtd2ViXG4vLyAobXVsdGktdGhyZWFkZWQgV0FTTSkgYW5kIGV4cG9zZXMgYSBicm93c2VyLWRyaXZlbiBtb2pvIGNvbnRyYWN0OiBhXG4vLyBmYWN0b3J5IHRoYXQgbG9hZHMgdGhlIG1vZGVsIHdob2xlIGFuZCBtaW50cyBwZXItdXR0ZXJhbmNlIEFTUiBzdHJlYW1zLlxuLy8gVGhpcyBmaWxlIGlzIHRoZSBtb2pvIHRyYW5zcG9ydCBsYXllcjsgdGhlIE9SVCBlbnZpcm9ubWVudCBsaXZlcyBpblxuLy8gb3J0X2Vudi50cyBhbmQgdGhlIG1vZGVsL2luZmVyZW5jZSBpbiBuZW1vdHJvbl9yZWNvZ25pemVyLnRzLlxuXG5pbXBvcnQge1xuICBPcnRNb2RlbEZpbGVzLFxuICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0LFxuICBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbnRlcmZhY2UsXG4gIFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlY2VpdmVyLFxufSBmcm9tICdnZW4vYnJhdmUvY29tcG9uZW50cy9sb2NhbF9haS9jb3JlL29uX2RldmljZV9zcGVlY2hfcmVjb2duaXRpb24ubW9qb20ubS5qcydcbmltcG9ydCB7XG4gIEFzclN0cmVhbUlucHV0SW50ZXJmYWNlLFxuICBBc3JTdHJlYW1JbnB1dFBlbmRpbmdSZWNlaXZlcixcbiAgQXNyU3RyZWFtSW5wdXRSZWNlaXZlcixcbiAgQXNyU3RyZWFtT3B0aW9ucyxcbiAgQXNyU3RyZWFtUmVzcG9uZGVyUmVtb3RlLFxuICBBdWRpb0RhdGEsXG59IGZyb20gJ2dlbi9zZXJ2aWNlcy9vbl9kZXZpY2VfbW9kZWwvcHVibGljL21vam9tL29uX2RldmljZV9tb2RlbC5tb2pvbS5tLmpzJ1xuXG5pbXBvcnQgeyBpbnN0YWxsVHJ1c3RlZFR5cGVzUG9saWN5IH0gZnJvbSAnLi9vcnRfZW52J1xuaW1wb3J0IHsgTmVtb3Ryb25TdHJlYW1TZXNzaW9uLCBPcnROZW1vdHJvbk1vZGVsIH0gZnJvbSAnLi9uZW1vdHJvbl9yZWNvZ25pemVyJ1xuXG5pbXBvcnQgeyBwYXJzZVRva2VucywgcmVhZEJpZ0J1ZmZlciB9IGZyb20gJy4vdXRpbHMnXG5cbi8vIFRoaW4gbW9qbyBlbmRwb2ludCBmb3Igb25lIEFTUiBzdHJlYW06IG93bnMgdGhlIHJlY2VpdmVyIGFuZCByZXNwb25kZXJcbi8vIGFuZCBicmlkZ2VzIEFzclN0cmVhbUlucHV0IGNhbGxzIHRvIGEgbW9qby1mcmVlIE5lbW90cm9uU3RyZWFtU2Vzc2lvbi5cbi8vIEVuZ2luZSBkaXNjb25uZWN0ICh+ZW5kIG9mIHV0dGVyYW5jZSkgdHJpZ2dlcnMgdGhlIGZpbmFsIGZsdXNoLlxuY2xhc3MgQXNyU3RyZWFtSW5wdXRBZGFwdGVyIGltcGxlbWVudHMgQXNyU3RyZWFtSW5wdXRJbnRlcmZhY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHJlY2VpdmVyOiBBc3JTdHJlYW1JbnB1dFJlY2VpdmVyXG4gIHByaXZhdGUgcmVhZG9ubHkgc2Vzc2lvbjogTmVtb3Ryb25TdHJlYW1TZXNzaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kZWw6IE9ydE5lbW90cm9uTW9kZWwsXG4gICAgc2FtcGxlUmF0ZUh6OiBudW1iZXIsXG4gICAgcGVuZGluZzogQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIsXG4gICAgcmVzcG9uZGVyOiBBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUsXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZCxcbiAgKSB7XG4gICAgY29uc3Qgb25SZXN1bHQgPSAodGV4dDogc3RyaW5nLCBpc0ZpbmFsOiBib29sZWFuKSA9PiB7XG4gICAgICAvLyBFbXB0eSB0cmFuc2NyaXB0IG1lYW5zIG5vdGhpbmcgd2FzIHJlY29nbml6ZWQuIFNlbmQgYW4gZW1wdHlcbiAgICAgIC8vIHZlY3RvciByYXRoZXIgdGhhbiBhIGJvZ3VzIFtGSU5BTF0gXCJcIiAoc3RpbGwgZW5kcyB0aGUgc2Vzc2lvbikuXG4gICAgICByZXNwb25kZXIub25SZXNwb25zZShcbiAgICAgICAgdGV4dFxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHJhbnNjcmlwdDogdGV4dCxcbiAgICAgICAgICAgICAgICBpc0ZpbmFsLFxuICAgICAgICAgICAgICAgIGF1ZGlvU3RhcnRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYXVkaW9FbmRUaW1lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXSxcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBBc3JTdHJlYW1SZXNwb25kZXIgY2FycmllcyByZXN1bHRzIG9ubHksIHNvIGEgY2xvc2VkIHBpcGUgaXMgaG93IHRoZVxuICAgIC8vIGVuZ2luZSBsZWFybnMgaW5mZXJlbmNlIHdhcyBhYm9ydGVkIGFuZCBlbmRzIHRoZSByZWNvZ25pdGlvbiBpbiBlcnJvci5cbiAgICBjb25zdCBvbkVycm9yID0gKCkgPT4gcmVzcG9uZGVyLiQuY2xvc2UoKVxuXG4gICAgdGhpcy5zZXNzaW9uID0gbmV3IE5lbW90cm9uU3RyZWFtU2Vzc2lvbihcbiAgICAgIG1vZGVsLFxuICAgICAgc2FtcGxlUmF0ZUh6LFxuICAgICAgb25SZXN1bHQsXG4gICAgICBvbkVycm9yLFxuICAgIClcbiAgICB0aGlzLnJlY2VpdmVyID0gbmV3IEFzclN0cmVhbUlucHV0UmVjZWl2ZXIodGhpcylcbiAgICB0aGlzLnJlY2VpdmVyLiQuYmluZEhhbmRsZShwZW5kaW5nLmhhbmRsZSlcbiAgICB0aGlzLnJlY2VpdmVyLm9uQ29ubmVjdGlvbkVycm9yLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIHRoaXMuc2Vzc2lvbi5maW5pc2goKVxuICAgICAgb25DbG9zZSgpXG4gICAgfSlcbiAgfVxuXG4gIGFkZEF1ZGlvQ2h1bmsoZGF0YTogQXVkaW9EYXRhKSB7XG4gICAgdGhpcy5zZXNzaW9uLmFkZEF1ZGlvKG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5kYXRhKSlcbiAgfVxufVxuXG5jbGFzcyBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlJbXBsXG4gIGltcGxlbWVudHMgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5SW50ZXJmYWNlXG57XG4gIHByaXZhdGUgcmVhZG9ubHkgcmVjZWl2ZXI6IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeVJlY2VpdmVyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtcyA9IG5ldyBTZXQ8QXNyU3RyZWFtSW5wdXRBZGFwdGVyPigpXG4gIHByaXZhdGUgbW9kZWw6IE9ydE5lbW90cm9uTW9kZWwgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVjZWl2ZXIgPSBuZXcgU3BlZWNoUmVjb2duaXRpb25GYWN0b3J5UmVjZWl2ZXIodGhpcylcbiAgfVxuXG4gIGdldFBlbmRpbmdSZW1vdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjZWl2ZXIuJC5iaW5kTmV3UGlwZUFuZFBhc3NSZW1vdGUoKVxuICB9XG5cbiAgYXN5bmMgaW5pdChmaWxlczogT3J0TW9kZWxGaWxlcykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLm1vZGVsID0gYXdhaXQgT3J0TmVtb3Ryb25Nb2RlbC5idWlsZEZyb21CeXRlcyhcbiAgICAgICAgcmVhZEJpZ0J1ZmZlcihmaWxlcy5lbmNvZGVyLCAnRW5jb2RlcicpLFxuICAgICAgICByZWFkQmlnQnVmZmVyKGZpbGVzLmVuY29kZXJEYXRhLCAnRW5jb2RlckRhdGEnKSxcbiAgICAgICAgcmVhZEJpZ0J1ZmZlcihmaWxlcy5kZWNvZGVyLCAnRGVjb2RlcicpLFxuICAgICAgICByZWFkQmlnQnVmZmVyKGZpbGVzLmRlY29kZXJEYXRhLCAnRGVjb2RlckRhdGEnKSxcbiAgICAgICAgcGFyc2VUb2tlbnMocmVhZEJpZ0J1ZmZlcihmaWxlcy50b2tlbnMsICdUb2tlbnMnKSksXG4gICAgICAgIG5ldyBGbG9hdDMyQXJyYXkoXG4gICAgICAgICAgcmVhZEJpZ0J1ZmZlcihmaWxlcy5tZWxGaWx0ZXJzLCAnRmlsdGVyYmFuaycpLnNsaWNlKCkuYnVmZmVyLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbc3BlZWNoLXdvcmtlcl0gaW5pdCBmYWlsZWQ6JywgZXJyKVxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUFzclN0cmVhbShcbiAgICBvcHRpb25zOiBBc3JTdHJlYW1PcHRpb25zLFxuICAgIHN0cmVhbTogQXNyU3RyZWFtSW5wdXRQZW5kaW5nUmVjZWl2ZXIsXG4gICAgcmVzcG9uZGVyOiBBc3JTdHJlYW1SZXNwb25kZXJSZW1vdGUsXG4gICkge1xuICAgIGlmICghdGhpcy5tb2RlbCkge1xuICAgICAgY29uc29sZS5lcnJvcignW3NwZWVjaC13b3JrZXJdIGNyZWF0ZUFzclN0cmVhbSBiZWZvcmUgaW5pdCcpXG4gICAgICByZXNwb25kZXIuJC5jbG9zZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWRhcHRlcjogQXNyU3RyZWFtSW5wdXRBZGFwdGVyXG4gICAgdHJ5IHtcbiAgICAgIGFkYXB0ZXIgPSBuZXcgQXNyU3RyZWFtSW5wdXRBZGFwdGVyKFxuICAgICAgICB0aGlzLm1vZGVsLFxuICAgICAgICBvcHRpb25zLnNhbXBsZVJhdGVIeixcbiAgICAgICAgc3RyZWFtLFxuICAgICAgICByZXNwb25kZXIsXG4gICAgICAgICgpID0+IHRoaXMuc3RyZWFtcy5kZWxldGUoYWRhcHRlciksXG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tzcGVlY2gtd29ya2VyXSBjcmVhdGVBc3JTdHJlYW0gZmFpbGVkOicsIGVycm9yKVxuICAgICAgcmVzcG9uZGVyLiQuY2xvc2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zdHJlYW1zLmFkZChhZGFwdGVyKVxuICB9XG59XG5cbmluc3RhbGxUcnVzdGVkVHlwZXNQb2xpY3koKVxuY29uc3QgZmFjdG9yeUhvc3QgPSBTcGVlY2hSZWNvZ25pdGlvbkZhY3RvcnlIb3N0LmdldFJlbW90ZSgpXG5jb25zdCBmYWN0b3J5ID0gbmV3IFNwZWVjaFJlY29nbml0aW9uRmFjdG9yeUltcGwoKVxuZmFjdG9yeUhvc3QucmVnaXN0ZXJGYWN0b3J5KGZhY3RvcnkuZ2V0UGVuZGluZ1JlbW90ZSgpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9