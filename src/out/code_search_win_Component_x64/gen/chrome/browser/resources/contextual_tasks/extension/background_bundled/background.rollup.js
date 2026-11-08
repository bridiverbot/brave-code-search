const mojo={internal:{interfaceSupport:{}},interfaceControl:{},pipeControl:{}};mojo.internal.kArrayHeaderSize=8,mojo.internal.kStructHeaderSize=8,mojo.internal.kStructHeaderSizeOffset=0,mojo.internal.kStructHeaderVersionOffset=4,mojo.internal.kUnionHeaderSize=8,mojo.internal.kUnionDataSize=16,mojo.internal.kMessageV0HeaderSize=24,mojo.internal.kMessageV1HeaderSize=32,mojo.internal.kMessageV2HeaderSize=48,mojo.internal.kMapDataSize=24,mojo.internal.kEncodedInvalidHandleValue=4294967295,mojo.internal.kMessageFlagExpectsResponse=1,mojo.internal.kMessageFlagIsResponse=2,mojo.internal.kInterfaceNamespaceBit=2147483648,mojo.internal.kHostLittleEndian=!!new Uint8Array(new Uint16Array([1]).buffer)[0],mojo.internal.DataViewWrapper=class{constructor(e,n=0){if(this.dataView_,this.byteOffset,e instanceof mojo.internal.DataViewWrapper)this.dataView_=e.dataView_,this.byteOffset=e.byteOffset+n;else if(e instanceof DataView)this.dataView_=0===e.byteOffset&&e.byteLength===e.buffer.byteLength?e:new DataView(e.buffer),this.byteOffset=e.byteOffset+n;else {if(!(e instanceof ArrayBuffer))throw new Error("DataViewWrapper constructor requires a DataViewWrapper, DataView, or ArrayBuffer instance");this.dataView_=new DataView(e),this.byteOffset=n;}}get buffer(){return this.dataView_.buffer}getUint8(e){return this.dataView_.getUint8(this.byteOffset+e)}getInt8(e){return this.dataView_.getInt8(this.byteOffset+e)}getUint16(e,n){return this.dataView_.getUint16(this.byteOffset+e,n)}getInt16(e,n){return this.dataView_.getInt16(this.byteOffset+e,n)}getUint32(e,n){return this.dataView_.getUint32(this.byteOffset+e,n)}getInt32(e,n){return this.dataView_.getInt32(this.byteOffset+e,n)}getFloat32(e,n){return this.dataView_.getFloat32(this.byteOffset+e,n)}getFloat64(e,n){return this.dataView_.getFloat64(this.byteOffset+e,n)}setUint8(e,n){this.dataView_.setUint8(this.byteOffset+e,n);}setInt8(e,n){this.dataView_.setInt8(this.byteOffset+e,n);}setUint16(e,n,t){this.dataView_.setUint16(this.byteOffset+e,n,t);}setInt16(e,n,t){this.dataView_.setInt16(this.byteOffset+e,n,t);}setUint32(e,n,t){this.dataView_.setUint32(this.byteOffset+e,n,t);}setInt32(e,n,t){this.dataView_.setInt32(this.byteOffset+e,n,t);}setFloat32(e,n,t){this.dataView_.setFloat32(this.byteOffset+e,n,t);}setFloat64(e,n,t){this.dataView_.setFloat64(this.byteOffset+e,n,t);}},mojo.internal.isNullOrUndefined=function(e){return null==e},mojo.internal.isNullableValueKindField=function(e){return void 0!==e.nullableValueKindProperties},mojo.internal.align=function(e,n){return e+(n-e%n)%n},mojo.internal.setInt64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setInt32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setInt32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian));},mojo.internal.setUint64=function(e,n,t){mojo.internal.kHostLittleEndian?(e.setUint32(n,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian)):(e.setUint32(n,Number(BigInt(t)>>BigInt(32)&BigInt(4294967295)),mojo.internal.kHostLittleEndian),e.setUint32(n+4,Number(BigInt(t)&BigInt(4294967295)),mojo.internal.kHostLittleEndian));},mojo.internal.getInt64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getInt32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getInt32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.getUint64=function(e,n){let t,o;return mojo.internal.kHostLittleEndian?(t=e.getUint32(n,mojo.internal.kHostLittleEndian),o=e.getUint32(n+4,mojo.internal.kHostLittleEndian)):(t=e.getUint32(n+4,mojo.internal.kHostLittleEndian),o=e.getUint32(n,mojo.internal.kHostLittleEndian)),BigInt(o)<<BigInt(32)|BigInt(t)},mojo.internal.MessageDimensions,mojo.internal.getMojoFieldValue=function(e,n){if(n.fieldGetter)return n.fieldGetter(e);if(e&&mojo.internal.isNullableValueKindField(n)){const t=n.nullableValueKindProperties,o=!mojo.internal.isNullOrUndefined(e[t.originalFieldName]);return t.isPrimary?o:o?e[t.originalFieldName]:n.defaultValue}return e[n.name]},mojo.internal.computeStructDimensions=function(e,n){let t=e.packedSize,o=0;for(const i of e.fields){let e=mojo.internal.getMojoFieldValue(n,i);if(mojo.internal.isNullOrUndefined(e)&&(e=i.defaultValue),null!==e)if(i.type.$.computeDimensions){const n=i.type.$.computeDimensions(e,i.nullable);t+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(o+=n.numInterfaceIds);}else i.type.$.hasInterfaceId&&o++;}return {size:t,numInterfaceIds:o}},mojo.internal.computeUnionDimensions=function(e,n,t){let o=n?mojo.internal.kUnionDataSize:0,i=0;const r=Object.keys(t);if(1!==r.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const s=r[0],a=e.fields[s],l=t[s];if(!mojo.internal.isNullOrUndefined(l))if(a.type.$.computeDimensions){const e=!!a.type.$.unionSpec||a.nullable,n=a.type.$.computeDimensions(l,e);o+=mojo.internal.align(n.size,8),n.numInterfaceIds&&(i+=n.numInterfaceIds);}else a.type.$.hasInterfaceId&&i++;return {size:o,numInterfaceIds:i}},mojo.internal.computeInlineArraySize=function(e,n){return e.elementType===mojo.internal.Bool?mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+(n.length+7>>3):mojo.internal.kArrayHeaderSize+mojo.internal.computeHasValueBitfieldSize(e,n.length)+n.length*e.elementType.$.arrayElementSize(!!e.elementNullable)},mojo.internal.computeHasValueBitfieldSize=function(e,n){if(!(!!e.elementNullable&&!!e.elementType.$.isValueType))return 0;const t=e.elementType.$.arrayElementSize(!0),o=8*t;return ((n+o-1)/o|0)*t},mojo.internal.computeTotalArraySize=function(e,n){const t=mojo.internal.computeInlineArraySize(e,n);if(!e.elementType.$.computeDimensions)return t;let o=t;for(let t of n)mojo.internal.isNullOrUndefined(t)||(o+=mojo.internal.align(e.elementType.$.computeDimensions(t,!!e.elementNullable).size,8));return o},mojo.internal.Message=class{constructor(e,n,t,o,i,r,s){const a=mojo.internal.computeStructDimensions(r,s);let l,c;a.numInterfaceIds>0?(l=mojo.internal.kMessageV2HeaderSize,c=2):t&(mojo.internal.kMessageFlagExpectsResponse|mojo.internal.kMessageFlagIsResponse)?(l=mojo.internal.kMessageV1HeaderSize,c=1):(l=mojo.internal.kMessageV0HeaderSize,c=0);const d=l+a.size,u=a.numInterfaceIds>0?mojo.internal.kArrayHeaderSize+4*a.numInterfaceIds:0,p=d+mojo.internal.align(u,8);this.buffer=new ArrayBuffer(p),this.handles=[];const m=new DataView(this.buffer);m.setUint32(0,l,mojo.internal.kHostLittleEndian),m.setUint32(4,c,mojo.internal.kHostLittleEndian),m.setUint32(8,n,mojo.internal.kHostLittleEndian),m.setUint32(12,o,mojo.internal.kHostLittleEndian),m.setUint32(16,t,mojo.internal.kHostLittleEndian),m.setUint32(20,0),c>=1&&(mojo.internal.setUint64(m,24,i),c>=2&&(mojo.internal.setUint64(m,32,BigInt(16)),mojo.internal.setUint64(m,40,BigInt(d-40)),m.setUint32(d,u,mojo.internal.kHostLittleEndian),m.setUint32(d+4,a.numInterfaceIds||0,mojo.internal.kHostLittleEndian))),this.nextInterfaceIdIndex_=0,this.interfaceIds_=null,a.numInterfaceIds&&(this.interfaceIds_=new Uint32Array(this.buffer,d+mojo.internal.kArrayHeaderSize,a.numInterfaceIds)),this.nextAllocationOffset_=l;const f=this.allocate(r.packedSize);new mojo.internal.Encoder(this,f,{endpoint:e}).encodeStructInline(r,s);}allocate(e){const n=mojo.internal.align(e,8),t=new DataView(this.buffer,this.nextAllocationOffset_,n);return this.nextAllocationOffset_+=n,t}},mojo.internal.MessageContext,mojo.internal.Encoder=class{constructor(e,n,t=null){this.context_=t,this.message_=e,this.data_=n;}encodeBool(e,n,t){const o=this.data_.getUint8(e);t?this.data_.setUint8(e,o|1<<n):this.data_.setUint8(e,o&~(1<<n));}encodeInt8(e,n){this.data_.setInt8(e,n);}encodeUint8(e,n){this.data_.setUint8(e,n);}encodeInt16(e,n){this.data_.setInt16(e,n,mojo.internal.kHostLittleEndian);}encodeUint16(e,n){this.data_.setUint16(e,n,mojo.internal.kHostLittleEndian);}encodeInt32(e,n){this.data_.setInt32(e,n,mojo.internal.kHostLittleEndian);}encodeUint32(e,n){this.data_.setUint32(e,n,mojo.internal.kHostLittleEndian);}encodeInt64(e,n){mojo.internal.setInt64(this.data_,e,n);}encodeUint64(e,n){mojo.internal.setUint64(this.data_,e,n);}encodeFloat(e,n){this.data_.setFloat32(e,n,mojo.internal.kHostLittleEndian);}encodeDouble(e,n){this.data_.setFloat64(e,n,mojo.internal.kHostLittleEndian);}encodeHandle(e,n){this.encodeUint32(e,this.message_.handles.length),this.message_.handles.push(n);}encodeAssociatedEndpoint(e,n){console.assert(n.isPendingAssociation,"expected unbound associated endpoint");const t=this.context_.endpoint.associatePeerOfOutgoingEndpoint(n),o=this.message_.nextInterfaceIdIndex_++;this.encodeUint32(e,o),this.message_.interfaceIds_[o]=t;}encodeString(e,n){if("string"!=typeof n)throw new Error("Unxpected non-string value for string field.");this.encodeArray({elementType:mojo.internal.Uint8},e,mojo.internal.Encoder.stringToUtf8Bytes(n));}encodeOffset(e,n){this.encodeUint64(e,n-this.data_.byteOffset-e);}encodeArray(e,n,t){const o=mojo.internal.computeInlineArraySize(e,t),i=this.message_.allocate(o),r=new mojo.internal.Encoder(this.message_,i,this.context_);this.encodeOffset(n,i.byteOffset),r.encodeUint32(0,o),r.encodeUint32(4,t.length),this.maybeEncodeHasValueBitfield(e,r,8,t);let s=8+mojo.internal.computeHasValueBitfieldSize(e,t.length);if(e.elementType===mojo.internal.Bool){let e=0;for(const n of t)r.encodeBool(s,e,n),e++,8==e&&(e=0,s++);}else for(const n of t){if(null===n){if(!e.elementNullable)throw new Error("Trying to send a null element in an array of non-nullable elements");e.elementType.$.encodeNull(r,s);}else e.elementType.$.encode(n,r,s,0,!!e.elementNullable);s+=e.elementType.$.arrayElementSize(!!e.elementNullable);}}maybeEncodeHasValueBitfield(e,n,t,o){if(!e.elementNullable||!e.elementType.$.isValueType)return;let i=0,r=t;for(const e of o)null==e?n.encodeBool(r,i,!1):n.encodeBool(r,i,!0),i++,8==i&&(i=0,r++);}encodeMap(e,n,t){let o,i;"Map"==t.constructor.name?(o=Array.from(t.keys()),i=Array.from(t.values())):(o=Object.keys(t),i=o.map((e=>t[e])));const r=this.message_.allocate(mojo.internal.kMapDataSize),s=new mojo.internal.Encoder(this.message_,r,this.context_);this.encodeOffset(n,r.byteOffset),s.encodeUint32(0,mojo.internal.kMapDataSize),s.encodeUint32(4,0),s.encodeArray({elementType:e.keyType},8,o),s.encodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16,i);}encodeStruct(e,n,t){const o=this.message_.allocate(e.packedSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeStructInline(e,t);}encodeStructInline(e,n){const t=e.versions;this.encodeUint32(0,e.packedSize),this.encodeUint32(4,t[t.length-1].version);for(const t of e.fields){const o=mojo.internal.kStructHeaderSize+t.packedOffset,i=e=>{t.type.$.encode(e,this,o,t.packedBitOffset,t.nullable);},r=mojo.internal.isNullOrUndefined(n)?void 0:mojo.internal.getMojoFieldValue(n,t);if(mojo.internal.isNullOrUndefined(n)||mojo.internal.isNullOrUndefined(r))if(null===t.defaultValue){if(!t.nullable)throw new Error(e.name+' missing value for non-nullable field "'+t.name+`", got: "${r}"...`);t.type.$.encodeNull(this,o);}else i(t.defaultValue);else i(r);}}encodeUnionAsPointer(e,n,t){const o=this.message_.allocate(mojo.internal.kUnionDataSize),i=new mojo.internal.Encoder(this.message_,o,this.context_);this.encodeOffset(n,o.byteOffset),i.encodeUnion(e,0,t);}encodeUnion(e,n,t){const o=Object.keys(t);if(1!==o.length)throw new Error(`Value for ${e.name} must be an Object with a single property named one of: `+Object.keys(e.fields).join(","));const i=o[0],r=e.fields[i];this.encodeUint32(n,mojo.internal.kUnionDataSize),this.encodeUint32(n+4,r.ordinal);const s=n+mojo.internal.kUnionHeaderSize;void 0===r.type.$.unionSpec?r.type.$.encode(t[i],this,s,0,r.nullable):this.encodeUnionAsPointer(r.type.$.unionSpec,s,t[i]);}static stringToUtf8Bytes(e){return mojo.internal.Encoder.textEncoder||(mojo.internal.Encoder.textEncoder=new TextEncoder("utf-8")),mojo.internal.Encoder.textEncoder.encode(e)}},mojo.internal.Encoder.textEncoder=null,mojo.internal.Decoder=class{constructor(e,n,t=null){this.context_=t,this.data_=e instanceof mojo.internal.DataViewWrapper?e:new mojo.internal.DataViewWrapper(e),this.handles_=n;}decodeBool(e,n){return !!(this.data_.getUint8(e)&1<<n)}decodeInt8(e){return this.data_.getInt8(e)}decodeUint8(e){return this.data_.getUint8(e)}decodeInt16(e){return this.data_.getInt16(e,mojo.internal.kHostLittleEndian)}decodeUint16(e){return this.data_.getUint16(e,mojo.internal.kHostLittleEndian)}decodeInt32(e){return this.data_.getInt32(e,mojo.internal.kHostLittleEndian)}decodeUint32(e){return this.data_.getUint32(e,mojo.internal.kHostLittleEndian)}decodeInt64(e){return mojo.internal.getInt64(this.data_,e)}decodeUint64(e){return mojo.internal.getUint64(this.data_,e)}decodeFloat(e){return this.data_.getFloat32(e,mojo.internal.kHostLittleEndian)}decodeDouble(e){return this.data_.getFloat64(e,mojo.internal.kHostLittleEndian)}decodeHandle(e){const n=this.data_.getUint32(e,mojo.internal.kHostLittleEndian);if(4294967295==n)return null;if(n>=this.handles_.length)throw new Error("Decoded invalid handle index");return this.handles_[n]}decodeString(e){const n=this.decodeOffset(e);if(!n)return null;mojo.internal.Decoder.textDecoder||(mojo.internal.Decoder.textDecoder=new TextDecoder("utf-8"));const t=this.decodeUint32(n-this.data_.byteOffset+4);if(0===t)return "";const o=n+8;return mojo.internal.Decoder.textDecoder.decode(new Uint8Array(this.data_.buffer,o,t))}decodeOffset(e){const n=this.decodeUint64(e);if(0==n)return 0;if(n>BigInt(Number.MAX_SAFE_INTEGER))throw new Error("Mesage offset too large");return this.data_.byteOffset+e+Number(n)}decodeArray(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(4);if(!i)return [];const r=!!e.elementNullable&&e.elementType.$.isValueType,s=r?new Array(i):null;if(r){let e=8,n=0;for(let t=0;t<i;++t)s[t]=o.decodeBool(e,n),n++,8===n&&(n=0,e++);}let a=8+mojo.internal.computeHasValueBitfieldSize(e,i);const l=new Array(i);if(e.elementType===mojo.internal.Bool)for(let e=0;e<i;++e)r&&!s[e]?l[e]=null:l[e]=o.decodeBool(a+(e>>3),e%8);else for(let n=0;n<i;++n){if(r&&!s[n])l[n]=null;else {const t=e.elementType.$.decode(o,a,0,!!e.elementNullable);if(null===t&&!e.elementNullable)throw new Error("Received unexpected array element");l[n]=t;}a+=e.elementType.$.arrayElementSize(!!e.elementNullable);}return l}decodeMap(e,n){const t=this.decodeOffset(n);if(!t)return null;const o=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_),i=o.decodeUint32(0),r=o.decodeUint32(4);if(i!=mojo.internal.kMapDataSize||0!=r)throw new Error("Received invalid map data");const s=o.decodeArray({elementType:e.keyType},8),a=o.decodeArray({elementType:e.valueType,elementNullable:e.valueNullable},16);if(s.length!=a.length)throw new Error("Received invalid map data");if(!e.keyType.$.isValidObjectKeyType){const e=new Map;for(let n=0;n<s.length;++n)e.set(s[n],a[n]);return e}const l={};for(let e=0;e<s.length;++e)l[s[e]]=a[e];return l}decodeStruct(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeStructInline(e)}isStructHeaderValid(e,n,t){const o=e.versions;for(let e=o.length-1;e>=0;--e){const i=o[e];if(t>i.version)return n>=i.packedSize;if(t==i.version)return n==i.packedSize}throw new Error(`Impossible version ${t} for struct ${e.name}`)}wrapStructInDataView(e,n,t){const o=this.decodeOffset(n);if(!o)return null;const i=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,o-this.data_.byteOffset),this.handles_,this.context_),r=i.decodeUint32(mojo.internal.kStructHeaderSizeOffset),s=i.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!i.isStructHeaderValid(e,r,s))throw new Error(`Received ${e.name} of invalid size (${r}) and/or version (${s})`);return new t(i,s,e.fields)}decodeStructInline(e){const n=this.decodeUint32(mojo.internal.kStructHeaderSizeOffset),t=this.decodeUint32(mojo.internal.kStructHeaderVersionOffset);if(!this.isStructHeaderValid(e,n,t))throw new Error(`Received ${e.name} of invalid size (${n}) and/or version (${t})`);const o={};for(let n=0;n<e.fields.length;++n){const i=e.fields[n];if(mojo.internal.isNullableValueKindField(i)){const n=i.nullableValueKindProperties;if(!n.isPrimary)continue;{const r=i;o[n.originalFieldName]=this.decodeStructNullableValueField(r,e.fields,t);}}else o[i.name]=this.decodeStructField(i,t);}return o}decodeStructField(e,n){if(e.minVersion>n)return e.defaultValue;const t=mojo.internal.kStructHeaderSize+e.packedOffset,o=e.type.$.decode(this,t,e.packedBitOffset,!!e.nullable);if(null===o&&!e.nullable)throw new Error(`Received ${e.name} with invalid null field "${e.name}"`);return o}decodeStructNullableValueField(e,n,t){if(e.minVersion>t)return null;if(!this.decodeStructField(e,t))return null;const o=e.nullableValueKindProperties,i=n.find((e=>e.name===o.linkedValueFieldName));if(!i)throw new Error("could not find the expected value field spec: "+o.linkedValueFieldName);return this.decodeStructField(i,t)}decodeUnionFromPointer(e,n){const t=this.decodeOffset(n);if(!t)return null;return new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(this.data_,t-this.data_.byteOffset),this.handles_,this.context_).decodeUnion(e,0)}decodeUnion(e,n){if(0===this.decodeUint32(n))return null;const t=this.decodeUint32(n+4);for(const o in e.fields){const i=e.fields[o];if(i.ordinal===t){const t=(()=>{const e=n+mojo.internal.kUnionHeaderSize;return void 0!==i.type.$.unionSpec?this.decodeUnionFromPointer(i.type.$.unionSpec,e):i.type.$.decode(this,e,0,i.nullable)})();if(null===t&&!i.nullable)throw new Error(`Received ${e.name} with invalid null field: ${i.name}`);const r={};return r[o]=t,r}}}decodeInterfaceProxy(e,n){const t=this.decodeHandle(n);return t?new e(t):null}decodeInterfaceRequest(e,n){const t=this.decodeHandle(n);return t?new e(mojo.internal.interfaceSupport.createEndpoint(t)):null}decodeAssociatedEndpoint(e){if(!this.context_||!this.context_.endpoint)throw new Error("cannot deserialize associated endpoint without context");const n=this.context_.endpoint,t=new DataView(this.data_.buffer),o=Number(mojo.internal.getUint64(t,40)),i=t.getUint32(o+44,mojo.internal.kHostLittleEndian),r=new Uint32Array(t.buffer,o+mojo.internal.kArrayHeaderSize+40,i)[this.decodeUint32(e)],s=new mojo.internal.interfaceSupport.Endpoint(n.router,r);return n.router.addEndpoint(s,r),s}},mojo.internal.Decoder.textDecoder=null,mojo.internal.MessageHeader,mojo.internal.deserializeMessageHeader=function(e){const n=e.getUint32(0,mojo.internal.kHostLittleEndian),t=e.getUint32(4,mojo.internal.kHostLittleEndian);if(0==t&&n!=mojo.internal.kMessageV0HeaderSize||1==t&&n!=mojo.internal.kMessageV1HeaderSize||t>=2&&n<mojo.internal.kMessageV2HeaderSize)throw new Error("Received invalid message header");return {headerSize:n,headerVersion:t,interfaceId:e.getUint32(8,mojo.internal.kHostLittleEndian),ordinal:e.getUint32(12,mojo.internal.kHostLittleEndian),flags:e.getUint32(16,mojo.internal.kHostLittleEndian),requestId:t<1?0:e.getUint32(24,mojo.internal.kHostLittleEndian)}},mojo.internal.MojomTypeInfo,mojo.internal.MojomType,mojo.internal.ArraySpec,mojo.internal.MapSpec,mojo.internal.NullableValueKindProperties=class{constructor(){this.isPrimary,this.linkedValueFieldName,this.originalFieldName;}},mojo.internal.StructFieldSpec,mojo.internal.StructVersionInfo,mojo.internal.StructSpec,mojo.internal.UnionFieldSpec,mojo.internal.UnionSpec,mojo.internal.Bool={$:{encode:function(e,n,t,o,i){n.encodeBool(t,o,e);},encodeNull:function(e,n){throw new Error("encoding bool null from type is not implemented")},decode:function(e,n,t,o){return e.decodeBool(n,t)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int8={$:{encode:function(e,n,t,o,i){n.encodeInt8(t,e);},encodeNull:function(e,n){e.encodeInt8(n,0);},decode:function(e,n,t,o){return e.decodeInt8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint8={$:{encode:function(e,n,t,o,i){n.encodeUint8(t,e);},encodeNull:function(e,n){e.encodeUint8(n,0);},decode:function(e,n,t,o){return e.decodeUint8(n)},arrayElementSize:e=>1,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int16={$:{encode:function(e,n,t,o,i){n.encodeInt16(t,e);},encodeNull:function(e,n){e.encodeInt16(n,0);},decode:function(e,n,t,o){return e.decodeInt16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint16={$:{encode:function(e,n,t,o,i){n.encodeUint16(t,e);},encodeNull:function(e,n){e.encodeUint16(n,0);},decode:function(e,n,t,o){return e.decodeUint16(n)},arrayElementSize:e=>2,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int32={$:{encode:function(e,n,t,o,i){n.encodeInt32(t,e);},encodeNull:function(e,n){e.encodeInt32(n,0);},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Uint32={$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e);},encodeNull:function(e,n){e.encodeUint32(n,0);},decode:function(e,n,t,o){return e.decodeUint32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Int64={$:{encode:function(e,n,t,o,i){n.encodeInt64(t,e);},encodeNull:function(e,n){e.encodeInt64(n,0);},decode:function(e,n,t,o){return e.decodeInt64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Uint64={$:{encode:function(e,n,t,o,i){n.encodeUint64(t,e);},encodeNull:function(e,n){e.encodeUint64(n,0);},decode:function(e,n,t,o){return e.decodeUint64(n)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!0}},mojo.internal.Float={$:{encode:function(e,n,t,o,i){n.encodeFloat(t,e);},encodeNull:function(e,n){e.encodeFloat(n,0);},decode:function(e,n,t,o){return e.decodeFloat(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Double={$:{encode:function(e,n,t,o,i){n.encodeDouble(t,e);},encodeNull:function(e,n){e.encodeDouble(n,0);},decode:function(e,n,t,o){return e.decodeDouble(n)},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!0}},mojo.internal.Handle={$:{encode:function(e,n,t,o,i){n.encodeHandle(t,e);},encodeNull:function(e,n){e.encodeUint32(n,4294967295);},decode:function(e,n,t,o){return e.decodeHandle(n)},arrayElementSize:e=>4,isValidObjectKeyType:!1,isValueType:!1}},mojo.internal.String={$:{encode:function(e,n,t,o,i){n.encodeString(t,e);},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeString(n)},computeDimensions:function(e,n){return {size:mojo.internal.computeTotalArraySize({elementType:mojo.internal.Uint8},mojo.internal.Encoder.stringToUtf8Bytes(e))}},arrayElementSize:e=>8,isValidObjectKeyType:!0,isValueType:!1}},mojo.internal.Array=function(e,n){const t={elementType:e,elementNullable:n};return {$:{arraySpec:t,encode:function(e,n,o,i,r){n.encodeArray(t,o,e);},encodeNull:function(e,n){},decode:function(e,n,o,i){return e.decodeArray(t,n)},computeDimensions:function(e,n){return {size:mojo.internal.computeTotalArraySize(t,e)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Map=function(e,n,t){const o={keyType:e,valueType:n,valueNullable:t};return {$:{mapSpec:o,encode:function(e,n,t,i,r){n.encodeMap(o,t,e);},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeMap(o,n)},computeDimensions:function(o,i){const r="Map"==o.constructor.name?Array.from(o.keys()):Object.keys(o),s="Map"==o.constructor.name?Array.from(o.values()):r.map((e=>o[e]));return {size:mojo.internal.kMapDataSize+mojo.internal.align(mojo.internal.computeTotalArraySize({elementType:e},r),8)+mojo.internal.computeTotalArraySize({elementType:n,elementNullable:t},s)}},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.Enum=function(){return {$:{encode:function(e,n,t,o,i){n.encodeUint32(t,e);},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeInt32(n)},arrayElementSize:e=>4,isValidObjectKeyType:!0,isValueType:!0}}},mojo.internal.StructField=function(e,n,t,o,i,r,s=0,a=void 0,l=void 0){return {name:e,packedOffset:n,packedBitOffset:t,type:o,defaultValue:i,nullable:r,minVersion:s,nullableValueKindProperties:a,fieldGetter:l}},mojo.internal.Struct=function(e,n,t,o){const i=o.map((e=>({version:e[0],packedSize:e[1]}))),r={name:n,packedSize:i[i.length-1].packedSize,fields:t,versions:i};e.$={structSpec:r,encode:function(e,n,t,o,i){n.encodeStruct(r,t,e);},encodeNull:function(e,n){},decode:function(e,n,t,o){return e.decodeStruct(r,n)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(r,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1};},mojo.internal.TypemappedStruct=function(e,n,t,o,i,r){const s=r.map((e=>({version:e[0],packedSize:e[1]}))),a={name:n,packedSize:s[s.length-1].packedSize,fields:i,versions:s};e.$={structSpec:a,encode:function(e,n,t,o,i){n.encodeStruct(a,t,e);},encodeNull:function(e,n){},decode:function(e,n,i,r){const s=e.wrapStructInDataView(a,n,t);return mojo.internal.isNullOrUndefined(s)?null:o.convert(s)},computeDimensions:function(e,n){return mojo.internal.computeStructDimensions(a,e)},arrayElementSize:e=>8,isValidObjectKeyType:!1};},mojo.internal.createStructDeserializer=function(e){return function(n){if(null==e.$||null==e.$.structSpec)throw new Error("Invalid struct mojom type!");return new mojo.internal.Decoder(n,[]).decodeStructInline(e.$.structSpec)}},mojo.internal.Union=function(e,n,t){const o={name:n,fields:t};e.$={unionSpec:o,encode:function(e,n,t,i,r){n.encodeUnion(o,t,e);},encodeNull:function(e,n){},decode:function(e,n,t,i){return e.decodeUnion(o,n)},computeDimensions:function(e,n){return mojo.internal.computeUnionDimensions(o,n,e)},arrayElementSize:e=>e?8:16,isValidObjectKeyType:!1};},mojo.internal.InterfaceProxy=function(e){return {$:{encode:function(n,t,o,i,r){const s=n.proxy.unbind();console.assert(s,`unexpected null ${e.name}`);const a=s.releasePipe();t.encodeHandle(o,a),t.encodeUint32(o+4,0);},encodeNull:function(e,n){e.encodeUint32(n,4294967295);},decode:function(n,t,o,i){return n.decodeInterfaceProxy(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.InterfaceRequest=function(e){return {$:{encode:function(n,t,o,i,r){if(!n.handle)throw new Error("Unexpected null "+e.name);t.encodeHandle(o,n.handle.releasePipe());},encodeNull:function(e,n){e.encodeUint32(n,4294967295);},decode:function(n,t,o,i){return n.decodeInterfaceRequest(e,t)},arrayElementSize:e=>8,isValidObjectKeyType:!1,isValueType:!1}}},mojo.internal.AssociatedInterfaceProxy=function(e){return {$:{type:e,encode:function(n,t,o,i,r){console.assert(n.proxy.endpoint&&n.proxy.endpoint.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.proxy.endpoint),t.encodeUint32(o+4,0);},encodeNull:function(e,n){e.encodeUint32(n,4294967295),e.encodeUint32(n+4,0);},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.AssociatedInterfaceRequest=function(e){return {$:{type:e,encode:function(n,t,o,i,r){console.assert(n.handle&&n.handle.isPendingAssociation,`expected ${e.name} to be associated and unbound`),t.encodeAssociatedEndpoint(o,n.handle);},encodeNull:function(e,n){e.encodeUint32(n,4294967295);},decode:function(n,t,o,i){return new e(n.decodeAssociatedEndpoint(t))},arrayElementSize:e=>{throw new Error("Arrays of associated endpoints are not yet supported")},isValidObjectKeyType:!1,hasInterfaceId:!0,isValueType:!1}}},mojo.internal.decodeStructField=function(e,n,t){return e.decodeStructField(n,t)},mojo.internal.decodeStructNullableValueField=function(e,n,t,o){n.nullableValueKindProperties.linkedValueFieldName;return e.decodeStructNullableValueField(n,t,o)},mojo.interfaceControl.RUN_MESSAGE_ID=4294967295,mojo.interfaceControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.interfaceControl.RunMessageParamsSpec={$:{}},mojo.interfaceControl.RunResponseMessageParamsSpec={$:{}},mojo.interfaceControl.QueryVersionSpec={$:{}},mojo.interfaceControl.QueryVersionResultSpec={$:{}},mojo.interfaceControl.FlushForTestingSpec={$:{}},mojo.interfaceControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.interfaceControl.RequireVersionSpec={$:{}},mojo.interfaceControl.EnableIdleTrackingSpec={$:{}},mojo.interfaceControl.MessageAckSpec={$:{}},mojo.interfaceControl.NotifyIdleSpec={$:{}},mojo.interfaceControl.RunInputSpec={$:{}},mojo.interfaceControl.RunOutputSpec={$:{}},mojo.interfaceControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.interfaceControl.RunMessageParamsSpec.$,"RunMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunMessageParams=class{constructor(){this.input;}},mojo.internal.Struct(mojo.interfaceControl.RunResponseMessageParamsSpec.$,"RunResponseMessageParams",[mojo.internal.StructField("output",0,0,mojo.interfaceControl.RunOutputSpec.$,null,!0,0)],[[0,24]]),mojo.interfaceControl.RunResponseMessageParams=class{constructor(){this.output;}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionSpec.$,"QueryVersion",[],[[0,8]]),mojo.interfaceControl.QueryVersion=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.QueryVersionResultSpec.$,"QueryVersionResult",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.QueryVersionResult=class{constructor(){this.version;}},mojo.internal.Struct(mojo.interfaceControl.FlushForTestingSpec.$,"FlushForTesting",[],[[0,8]]),mojo.interfaceControl.FlushForTesting=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.interfaceControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.interfaceControl.RunOrClosePipeMessageParams=class{constructor(){this.input;}},mojo.internal.Struct(mojo.interfaceControl.RequireVersionSpec.$,"RequireVersion",[mojo.internal.StructField("version",0,0,mojo.internal.Uint32,0,!1,0)],[[0,16]]),mojo.interfaceControl.RequireVersion=class{constructor(){this.version;}},mojo.internal.Struct(mojo.interfaceControl.EnableIdleTrackingSpec.$,"EnableIdleTracking",[mojo.internal.StructField("timeoutInMicroseconds",0,0,mojo.internal.Int64,BigInt(0),!1,0)],[[0,16]]),mojo.interfaceControl.EnableIdleTracking=class{constructor(){this.timeoutInMicroseconds;}},mojo.internal.Struct(mojo.interfaceControl.MessageAckSpec.$,"MessageAck",[],[[0,8]]),mojo.interfaceControl.MessageAck=class{constructor(){}},mojo.internal.Struct(mojo.interfaceControl.NotifyIdleSpec.$,"NotifyIdle",[],[[0,8]]),mojo.interfaceControl.NotifyIdle=class{constructor(){}},mojo.internal.Union(mojo.interfaceControl.RunInputSpec.$,"RunInput",{queryVersion:{ordinal:0,type:mojo.interfaceControl.QueryVersionSpec.$},flushForTesting:{ordinal:1,type:mojo.interfaceControl.FlushForTestingSpec.$}}),mojo.internal.Union(mojo.interfaceControl.RunOutputSpec.$,"RunOutput",{queryVersionResult:{ordinal:0,type:mojo.interfaceControl.QueryVersionResultSpec.$}}),mojo.internal.Union(mojo.interfaceControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{requireVersion:{ordinal:0,type:mojo.interfaceControl.RequireVersionSpec.$},enableIdleTracking:{ordinal:1,type:mojo.interfaceControl.EnableIdleTrackingSpec.$},messageAck:{ordinal:2,type:mojo.interfaceControl.MessageAckSpec.$},notifyIdle:{ordinal:3,type:mojo.interfaceControl.NotifyIdleSpec.$}}),mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID=4294967294,mojo.pipeControl.RunOrClosePipeMessageParamsSpec={$:{}},mojo.pipeControl.DisconnectReasonSpec={$:{}},mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec={$:{}},mojo.pipeControl.PauseUntilFlushCompletesSpec={$:{}},mojo.pipeControl.FlushAsyncSpec={$:{}},mojo.pipeControl.RunOrClosePipeInputSpec={$:{}},mojo.internal.Struct(mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$,"RunOrClosePipeMessageParams",[mojo.internal.StructField("input",0,0,mojo.pipeControl.RunOrClosePipeInputSpec.$,null,!1,0)],[[0,24]]),mojo.pipeControl.RunOrClosePipeMessageParams=class{constructor(){this.input;}},mojo.internal.Struct(mojo.pipeControl.DisconnectReasonSpec.$,"DisconnectReason",[mojo.internal.StructField("customReason",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("description",8,0,mojo.internal.String,null,!1,0)],[[0,24]]),mojo.pipeControl.DisconnectReason=class{constructor(){this.customReason,this.description;}},mojo.internal.Struct(mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$,"PeerAssociatedEndpointClosedEvent",[mojo.internal.StructField("id",0,0,mojo.internal.Uint32,0,!1,0),mojo.internal.StructField("disconnectReason",8,0,mojo.pipeControl.DisconnectReasonSpec.$,null,!0,0)],[[0,24]]),mojo.pipeControl.PeerAssociatedEndpointClosedEvent=class{constructor(){this.id,this.disconnectReason;}},mojo.internal.Struct(mojo.pipeControl.PauseUntilFlushCompletesSpec.$,"PauseUntilFlushCompletes",[mojo.internal.StructField("flushPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.PauseUntilFlushCompletes=class{constructor(){this.flushPipe;}},mojo.internal.Struct(mojo.pipeControl.FlushAsyncSpec.$,"FlushAsync",[mojo.internal.StructField("flusherPipe",0,0,mojo.internal.Handle,null,!1,0)],[[0,16]]),mojo.pipeControl.FlushAsync=class{constructor(){this.flusherPipe;}},mojo.internal.Union(mojo.pipeControl.RunOrClosePipeInputSpec.$,"RunOrClosePipeInput",{peerAssociatedEndpointClosedEvent:{ordinal:0,type:mojo.pipeControl.PeerAssociatedEndpointClosedEventSpec.$},pauseUntilFlushCompletes:{ordinal:1,type:mojo.pipeControl.PauseUntilFlushCompletesSpec.$},flushAsync:{ordinal:2,type:mojo.pipeControl.FlushAsyncSpec.$}}),mojo.internal.interfaceSupport.RouterMessage,mojo.internal.interfaceSupport.Router=class{constructor(e,n){this.pipe_=e,this.messages_=[],this.dispatchInProgress_=!1,this.reader_=new mojo.internal.interfaceSupport.HandleReader(e),this.reader_.onRead=this.onMessageReceived_.bind(this),this.reader_.onError=this.onError_.bind(this),this.endpoints_=new Map,this.nextInterfaceId_=1,this.interfaceIdNamespace_=n?mojo.internal.kInterfaceNamespaceBit:0,this.pipeControlHandler_=new mojo.internal.interfaceSupport.PipeControlMessageHandler(this,this.onPeerEndpointClosed_.bind(this));}get pipe(){return this.pipe_}generateInterfaceId(){return (this.nextInterfaceId_++|this.interfaceIdNamespace_)>>>0}addEndpoint(e,n){0===n&&this.reader_.start(),console.assert(this.isReading(),"adding a secondary endpoint with no primary"),this.endpoints_.set(n,e),this.dispatchMessages_();}removeEndpoint(e){this.endpoints_.delete(e),0===e&&this.reader_.stop();}close(){console.assert(0===this.endpoints_.size,"closing primary endpoint with secondary endpoints still bound"),this.reader_.stopAndCloseHandle();}closeEndpoint(e){this.removeEndpoint(e),0===e?this.close():this.pipeControlHandler_.notifyEndpointClosed(e);}isReading(){return !this.reader_.isStopped()}send(e){this.pipe_.writeMessage(e.buffer,e.handles);}onMessageReceived_(e,n){if(!this.checkSize_(e))return;const t=mojo.internal.deserializeMessageHeader(new mojo.internal.DataViewWrapper(e));this.pipeControlHandler_.maybeHandleMessage(t,e)||(this.messages_.push({header:t,buffer:e,handles:n}),this.dispatchMessages_());}checkSize_(e){return !(e.byteLength<mojo.internal.kMessageV0HeaderSize)||(console.error("Rejecting undersized message"),this.onError_(),!1)}dispatchMessages_(){if(!this.dispatchInProgress_){for(this.dispatchInProgress_=!0;this.messages_.length>0;){const e=this.messages_[0];if(!this.dispatch_(e))break;this.messages_.shift();}this.dispatchInProgress_=!1;}}dispatch_(e){const n=this.endpoints_.get(e.header.interfaceId);return n?!!n.isStarted&&(n.onMessageReceived(e.header,e.buffer,e.handles),!0):(console.error(`Received message for unknown endpoint ${e.header.interfaceId}`),!1)}onError_(){for(const e of this.endpoints_.values())e.onError();this.endpoints_.clear();}onPeerEndpointClosed_(e){const n=this.endpoints_.get(e);n&&n.onError();}},mojo.internal.interfaceSupport.EndpointClient=class{onMessageReceived(e,n,t,o){}onError(e,n=void 0){}},mojo.internal.interfaceSupport.Endpoint=class{constructor(e=null,n=0){this.router_=e,this.interfaceId_=n,this.controlMessageHandler_=new mojo.internal.interfaceSupport.ControlMessageHandler(this),this.client_=null,this.nextRequestId_=0,this.localPeer_=null;}static createAssociatedPair(){const e=new mojo.internal.interfaceSupport.Endpoint,n=new mojo.internal.interfaceSupport.Endpoint;return n.localPeer_=e,e.localPeer_=n,{endpoint0:e,endpoint1:n}}get router(){return this.router_}isPrimary(){return null!==this.router_&&0===this.interfaceId_}releasePipe(){return console.assert(this.isPrimary(),"secondary endpoint cannot release pipe"),this.router_.pipe}get isPendingAssociation(){return null!==this.localPeer_}bindInBrowser(e,n){console.assert(this.isPrimary()&&!this.router_.isReading(),"endpoint is either associated or already bound"),Mojo.bindInterface(e,this.router_.pipe,n);}associatePeerOfOutgoingEndpoint(e){console.assert(this.router_,"cannot associate with unbound endpoint");const n=e.localPeer_;e.localPeer_=n.localPeer_=null;const t=this.router_.generateInterfaceId();return n.router_=this.router_,n.interfaceId_=t,n.client_&&this.router_.addEndpoint(n,t),t}generateRequestId(){const e=this.nextRequestId_++;return this.nextRequestId_>4294967295&&(this.nextRequestId_=0),e}send(e,n,t,o,i){const r=new mojo.internal.Message(this,this.interfaceId_,t,e,n,o.$.structSpec,i);console.assert(this.router_,"cannot send message on unassociated unbound endpoint"),this.router_.send(r);}start(e){console.assert(!this.client_,"endpoint already started"),this.client_=e,this.router_&&this.router_.addEndpoint(this,this.interfaceId_);}get isStarted(){return null!==this.client_}stop(){this.router_&&this.router_.removeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null;}close(){this.router_&&this.router.closeEndpoint(this.interfaceId_),this.client_=null,this.controlMessageHandler_=null;}async flushForTesting(){return this.controlMessageHandler_.sendRunMessage({flushForTesting:{}})}onMessageReceived(e,n,t){console.assert(this.client_,"endpoint has no client");this.controlMessageHandler_.maybeHandleControlMessage(e,n)||this.client_.onMessageReceived(this,e,n,t);}onError(){this.client_&&this.client_.onError(this);}},mojo.internal.interfaceSupport.acceptBufferForTesting=function(e,n){e.router_.onMessageReceived_(n,[]);},mojo.internal.interfaceSupport.createEndpoint=function(e,n=!1){return void 0===e.watch?e:new mojo.internal.interfaceSupport.Endpoint(new mojo.internal.interfaceSupport.Router(e,n),0)},mojo.internal.interfaceSupport.getEndpointForReceiver=function(e){return mojo.internal.interfaceSupport.createEndpoint(e)},mojo.internal.interfaceSupport.bind=function(e,n,t){e.bindInBrowser(n,t);},mojo.internal.interfaceSupport.PipeControlMessageHandler=class{constructor(e,n){this.router_=e,this.onDisconnect_=n;}send(e){const n=new mojo.internal.Message(null,4294967295,0,mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID,0,mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,{input:e});this.router_.send(n);}maybeHandleMessage(e,n){if(e.ordinal!==mojo.pipeControl.RUN_OR_CLOSE_PIPE_MESSAGE_ID)return !1;const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]),i=mojo.pipeControl.RunOrClosePipeMessageParamsSpec.$.$.structSpec,r=o.decodeStructInline(i).input;return !r.hasOwnProperty("peerAssociatedEndpointClosedEvent")||(this.onDisconnect_(r.peerAssociatedEndpointClosedEvent.id),!0)}notifyEndpointClosed(e){this.send({peerAssociatedEndpointClosedEvent:{id:e}});}},mojo.internal.interfaceSupport.ControlMessageHandler=class{constructor(e){this.endpoint_=e,this.pendingFlushResolvers_=new Map;}sendRunMessage(e){const n=this.endpoint_.generateRequestId();return new Promise((t=>{this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,n,mojo.internal.kMessageFlagExpectsResponse,mojo.interfaceControl.RunMessageParamsSpec.$,{input:e}),this.pendingFlushResolvers_.set(n,t);}))}maybeHandleControlMessage(e,n){if(e.ordinal===mojo.interfaceControl.RUN_MESSAGE_ID){const t=new mojo.internal.DataViewWrapper(n,e.headerSize),o=new mojo.internal.Decoder(t,[]);return e.flags&mojo.internal.kMessageFlagExpectsResponse?this.handleRunRequest_(e.requestId,o):this.handleRunResponse_(e.requestId,o)}return !1}handleRunRequest_(e,n){return !!n.decodeStructInline(mojo.interfaceControl.RunMessageParamsSpec.$.$.structSpec).input.hasOwnProperty("flushForTesting")&&(this.endpoint_.send(mojo.interfaceControl.RUN_MESSAGE_ID,e,mojo.internal.kMessageFlagIsResponse,mojo.interfaceControl.RunResponseMessageParamsSpec.$,{output:null}),!0)}handleRunResponse_(e,n){const t=this.pendingFlushResolvers_.get(e);return !!t&&(t(),!0)}},mojo.internal.interfaceSupport.PendingResponse,mojo.internal.interfaceSupport.ConnectionErrorEventRouter=class{constructor(){this.listeners=new Map,this.nextListenerId_=0;}addListener(e){const n=++this.nextListenerId_;return this.listeners.set(n,e),n}removeListener(e){return this.listeners.delete(e)}dispatchErrorEvent(){for(const e of this.listeners.values())e();}},mojo.internal.interfaceSupport.PendingReceiver=class{get handle(){}},mojo.internal.interfaceSupport.InterfaceRemoteBase=class{constructor(e,n=void 0){this.endpoint_=null,this.requestType_=e,this.pendingResponses_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter,n&&this.bindHandle(n);}get endpoint(){return this.endpoint_}bindNewPipeAndPassReceiver(){let{handle0:e,handle1:n}=Mojo.createMessagePipe();return this.bindHandle(e),new this.requestType_(mojo.internal.interfaceSupport.createEndpoint(n))}bindHandle(e){console.assert(!this.endpoint_,"already bound"),e=mojo.internal.interfaceSupport.createEndpoint(e,!0),this.endpoint_=e,this.endpoint_.start(this),this.pendingResponses_=new Map;}associateAndPassReceiver(){console.assert(!this.endpoint_,"cannot associate when already bound");const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.requestType_(n)}unbind(){if(!this.endpoint_)return null;const e=this.endpoint_;return this.endpoint_=null,e.stop(),e}close(){this.cleanupAndFlushPendingResponses_("Message pipe closed."),this.endpoint_&&this.endpoint_.close(),this.endpoint_=null;}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}sendMessage(e,n,t,o,i){if(t&&(!this.endpoint_||!this.endpoint_.isStarted))return Promise.reject(new Error("The pipe has already been closed."));const r={};let s=0;n.$.structSpec.fields.forEach(((e,n)=>{const t=n-s;if(!mojo.internal.isNullableValueKindField(e))return void(r[e.name]=o[t]);const i=e.nullableValueKindProperties;i.isPrimary&&(s++,r[i.originalFieldName]=o[t]);}));const a=this.endpoint_.generateRequestId();if(this.endpoint_.send(e,a,t?mojo.internal.kMessageFlagExpectsResponse:0,n,r),!t)return Promise.resolve();const l=t;return new Promise(((n,t)=>{this.pendingResponses_.set(a,{requestId:a,ordinal:e,responseStruct:l,resolve:n,reject:t,useResultResponse:i});}))}flushForTesting(){return this.endpoint_.flushForTesting()}onMessageReceived(e,n,t,o){if(!(n.flags&mojo.internal.kMessageFlagIsResponse)||n.flags&mojo.internal.kMessageFlagExpectsResponse)return this.onError(e,"Received unexpected request message");const i=this.pendingResponses_.get(n.requestId);if(this.pendingResponses_.delete(n.requestId),!i)return this.onError(e,"Received unexpected response message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.responseStruct.$.structSpec);if(!r)return this.onError(e,"Received malformed response message");if(n.ordinal!==i.ordinal)return this.onError(e,"Received malformed response message");if(i.useResultResponse){const e=r.result;void 0!==e.success?i.resolve(e.success):i.reject(e.failure);}else i.resolve(r);}onError(e,n=void 0){this.cleanupAndFlushPendingResponses_(n),this.connectionErrorEventRouter_.dispatchErrorEvent();}cleanupAndFlushPendingResponses_(e=void 0){this.endpoint_&&this.endpoint_.stop();for(const n of this.pendingResponses_.keys())this.pendingResponses_.get(n).reject(new Error(e));this.pendingResponses_=new Map;}},mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper=class{constructor(e){this.remote_=e;}bindNewPipeAndPassReceiver(){return this.remote_.bindNewPipeAndPassReceiver()}associateAndPassReceiver(){return this.remote_.associateAndPassReceiver()}isBound(){return null!==this.remote_.endpoint_}close(){this.remote_.close();}flushForTesting(){return this.remote_.flushForTesting()}},mojo.internal.interfaceSupport.CallbackRouter=class{constructor(){this.removeCallbacks=new Map,this.nextListenerId_=0;}getNextId(){return ++this.nextListenerId_}removeListener(e){return this.removeCallbacks.get(e)(),this.removeCallbacks.delete(e)}},mojo.internal.interfaceSupport.InterfaceCallbackReceiver=class{constructor(e){this.listeners_=new Map,this.callbackRouter_=e;}addListener(e){const n=this.callbackRouter_.getNextId();return this.listeners_.set(n,e),this.callbackRouter_.removeCallbacks.set(n,(()=>this.listeners_.delete(n))),n}createReceiverHandler(e){return e?this.dispatchWithResponse_.bind(this):this.dispatch_.bind(this)}dispatch_(e){const n=Array.from(arguments);this.listeners_.forEach((e=>e.apply(null,n)));}dispatchWithResponse_(e){const n=Array.from(arguments),t=Array.from(this.listeners_.values()).map((e=>e.apply(null,n)));let o;for(const e of t)if(void 0!==e){if(void 0!==o)throw new Error("Multiple listeners attempted to reply to a message");o=e;}return o}},mojo.internal.interfaceSupport.MessageHandler,mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal=class{constructor(e){this.endpoints_=new Set,this.remoteType_=e,this.messageHandlers_=new Map,this.connectionErrorEventRouter_=new mojo.internal.interfaceSupport.ConnectionErrorEventRouter;}registerHandler(e,n,t,o,i){this.messageHandlers_.set(e,{paramStruct:n,responseStruct:t,handler:o,useResultResponse:i});}bindHandle(e){e=mojo.internal.interfaceSupport.createEndpoint(e),this.endpoints_.add(e),e.start(this);}bindNewPipeAndPassRemote(){let e=new this.remoteType_;return this.bindHandle(e.$.bindNewPipeAndPassReceiver().handle),e}associateAndPassRemote(){const{endpoint0:e,endpoint1:n}=mojo.internal.interfaceSupport.Endpoint.createAssociatedPair();return this.bindHandle(e),new this.remoteType_(n)}closeBindings(){for(const e of this.endpoints_)e.close();this.endpoints_.clear();}getConnectionErrorEventRouter(){return this.connectionErrorEventRouter_}async flush(){for(let e of this.endpoints_)await e.flushForTesting();}onMessageReceived(e,n,t,o){if(n.flags&mojo.internal.kMessageFlagIsResponse)throw new Error("Received unexpected response on interface receiver");const i=this.messageHandlers_.get(n.ordinal);if(!i)throw new Error("Received unknown message");const r=new mojo.internal.Decoder(new mojo.internal.DataViewWrapper(t,n.headerSize),o,{endpoint:e}).decodeStructInline(i.paramStruct.$.structSpec);if(!r)throw new Error("Received malformed message");const s=[];for(const e of i.paramStruct.$.structSpec.fields){if(!mojo.internal.isNullableValueKindField(e)){s.push(r[e.name]);continue}const n=e.nullableValueKindProperties;n.isPrimary&&s.push(r[n.originalFieldName]);}i.useResultResponse?this.handleResultResponseMessage_(e,n,i,s):this.handleResponseMessage_(e,n,i,s);}handleResultResponseMessage_(e,n,t,o){try{let i=t.handler.apply(null,o);"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{success:o}});})).catch((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}});}));}catch(o){e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,{result:{failure:o}});}}handleResponseMessage_(e,n,t,o){let i=t.handler.apply(null,o);if(t.responseStruct){if(void 0===i)throw this.onError(e),new Error("Message expects a reply but its handler did not provide one.");"object"==typeof i&&"Promise"==i.constructor.name||(i=Promise.resolve(i)),i.then((o=>{e.send(n.ordinal,n.requestId,mojo.internal.kMessageFlagIsResponse,t.responseStruct,o);})).catch((()=>{this.onError(e);}));}}onError(e,n=void 0){this.endpoints_.delete(e),e.close(),this.connectionErrorEventRouter_.dispatchErrorEvent();}},mojo.internal.interfaceSupport.InterfaceReceiverHelper=class{constructor(e){this.helper_internal_=e;}bindHandle(e){this.helper_internal_.bindHandle(e);}bindNewPipeAndPassRemote(){return this.helper_internal_.bindNewPipeAndPassRemote()}associateAndPassRemote(){return this.helper_internal_.associateAndPassRemote()}close(){this.helper_internal_.closeBindings();}flush(){return this.helper_internal_.flush()}},mojo.internal.interfaceSupport.HandleReader=class{constructor(e){this.handle_=e,this.onRead=null,this.onError=()=>{},this.watcher_=null;}isStopped(){return null===this.watcher_}start(){this.watcher_=this.handle_.watch({readable:!0},this.read_.bind(this));}stop(){this.watcher_&&(this.watcher_.cancel(),this.watcher_=null);}stopAndCloseHandle(){this.watcher_&&this.stop(),this.handle_.close();}read_(e){for(;;){if(!this.watcher_)return;const e=this.handle_.readMessage();if(e.result==Mojo.RESULT_SHOULD_WAIT)return;if(e.result==Mojo.RESULT_FAILED_PRECONDITION)return void this.onError();if(e.result!=Mojo.RESULT_OK)throw new Error("Unexpected error on HandleReader: "+e.result);this.onRead(e.buffer,e.handles);}}};

// mojo/public/mojom/base/big_buffer.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BigBufferSharedMemoryRegionSpec = { $: {} };
const BigBufferSpec = { $: {} };
mojo.internal.Struct(BigBufferSharedMemoryRegionSpec.$, 'BigBufferSharedMemoryRegion', [
    mojo.internal.StructField('bufferHandle', 0, 0, mojo.internal.Handle, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('size', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Union(BigBufferSpec.$, 'BigBuffer', {
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
var BigBufferFieldTags;
(function (BigBufferFieldTags) {
    BigBufferFieldTags[BigBufferFieldTags["BYTES"] = 0] = "BYTES";
    BigBufferFieldTags[BigBufferFieldTags["SHARED_MEMORY"] = 1] = "SHARED_MEMORY";
    BigBufferFieldTags[BigBufferFieldTags["INVALID_BUFFER"] = 2] = "INVALID_BUFFER";
})(BigBufferFieldTags || (BigBufferFieldTags = {}));

// mojo/public/mojom/base/string16.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class String16DataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get data() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

class String16Converter {
    data(str) {
        const arr = [];
        for (let i = 0; i < str.length; ++i) {
            arr.push(str.charCodeAt(i));
        }
        return arr;
    }
    convert(view) {
        const data = view.data;
        return this.convertImpl(data);
    }
    // Exported for testing.
    // TODO(crbug.com/448737199): we should not have to expose a separate method
    // just to facilitate testing.
    convertImpl(data) {
        // Taken from chunk size used in goog.crypt.byteArrayToBinaryString in
        // Closure Library. The value is equal to 2^13.
        const CHUNK_SIZE = 8192;
        if (data.length < CHUNK_SIZE) {
            return String.fromCharCode(...data);
        }
        // Convert the array to a string in chunks, to avoid passing too many
        // arguments to String.fromCharCode() at once, which can exceed the max call
        // stack size (c.f. crbug.com/1509792).
        let str = '';
        for (let i = 0; i < data.length; i += CHUNK_SIZE) {
            const chunk = data.slice(i, i + CHUNK_SIZE);
            str += String.fromCharCode(...chunk);
        }
        return str;
    }
}

// mojo/public/mojom/base/string16.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const String16Spec = { $: {} };
const BigString16Spec = { $: {} };
const converterForString16 = new String16Converter();
mojo.internal.TypemappedStruct(String16Spec.$, 'String16', String16DataView, converterForString16, [
    mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false /* nullable */, 0, undefined, ((value) => converterForString16.data(value))),
], [[0, 16],]);
mojo.internal.Struct(BigString16Spec.$, 'BigString16', [
    mojo.internal.StructField('data', 0, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// mojo/public/mojom/base/time.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class JSTimeDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get msec() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

class JsTimeConverter {
    // Encoding
    msec(date) {
        return date.valueOf();
    }
    // Decoding
    convert(view) {
        return new Date(view.msec);
    }
}

// mojo/public/mojom/base/time.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TimeSpec = { $: {} };
const JSTimeSpec = { $: {} };
const TimeDeltaSpec = { $: {} };
const TimeTicksSpec = { $: {} };
mojo.internal.Struct(TimeSpec.$, 'Time', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
const converterForJSTime = new JsTimeConverter();
mojo.internal.TypemappedStruct(JSTimeSpec.$, 'JSTime', JSTimeDataView, converterForJSTime, [
    mojo.internal.StructField('msec', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, ((value) => converterForJSTime.msec(value))),
], [[0, 16],]);
mojo.internal.Struct(TimeDeltaSpec.$, 'TimeDelta', [
    mojo.internal.StructField('microseconds', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(TimeTicksSpec.$, 'TimeTicks', [
    mojo.internal.StructField('internalValue', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// mojo/public/mojom/base/unguessable_token.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UnguessableTokenDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get high() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
    get low() {
        const field = this.fieldSpecs_[1];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

const HEX_BASE = 16;
// Token component is 64 bits, hex is 4 bits. This gives us a necessary
// string length.
const TOKEN_COMPONENT_STR_LENGTH = 64 / 4;
class UnguessableTokenConverter {
    // Field accessors for encoding a typemap to a mojo type.
    validate(token) {
        if (token.length !== (2 * TOKEN_COMPONENT_STR_LENGTH)) {
            throw new Error('token is malformed: ' + token);
        }
        if (token !== token.toUpperCase()) {
            throw new Error('token is not uppercase: ' + token);
        }
    }
    high(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(0, TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    low(token) {
        this.validate(token);
        return BigInt(`0x${token.slice(TOKEN_COMPONENT_STR_LENGTH)}`);
    }
    // Converts a mojo type to the typemap.
    convert(view) {
        return (view.high.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0') +
            view.low.toString(HEX_BASE).padStart(TOKEN_COMPONENT_STR_LENGTH, '0'))
            .toUpperCase();
    }
}

// mojo/public/mojom/base/unguessable_token.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UnguessableTokenSpec = { $: {} };
const converterForUnguessableToken = new UnguessableTokenConverter();
mojo.internal.TypemappedStruct(UnguessableTokenSpec.$, 'UnguessableToken', UnguessableTokenDataView, converterForUnguessableToken, [
    mojo.internal.StructField('high', 0, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, ((value) => converterForUnguessableToken.high(value))),
    mojo.internal.StructField('low', 8, 0, mojo.internal.Uint64, BigInt(0), false /* nullable */, 0, undefined, ((value) => converterForUnguessableToken.low(value))),
], [[0, 24],]);

// ui/base/mojom/window_open_disposition.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WindowOpenDispositionSpec = { $: mojo.internal.Enum() };
var WindowOpenDisposition;
(function (WindowOpenDisposition) {
    WindowOpenDisposition[WindowOpenDisposition["MIN_VALUE"] = 0] = "MIN_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["MAX_VALUE"] = 12] = "MAX_VALUE";
    WindowOpenDisposition[WindowOpenDisposition["kUnknown"] = 0] = "kUnknown";
    WindowOpenDisposition[WindowOpenDisposition["kCurrentTab"] = 1] = "kCurrentTab";
    WindowOpenDisposition[WindowOpenDisposition["kSingletonTab"] = 2] = "kSingletonTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewForegroundTab"] = 3] = "kNewForegroundTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewBackgroundTab"] = 4] = "kNewBackgroundTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewPopup"] = 5] = "kNewPopup";
    WindowOpenDisposition[WindowOpenDisposition["kNewWindow"] = 6] = "kNewWindow";
    WindowOpenDisposition[WindowOpenDisposition["kSaveToDisk"] = 7] = "kSaveToDisk";
    WindowOpenDisposition[WindowOpenDisposition["kOffTheRecord"] = 8] = "kOffTheRecord";
    WindowOpenDisposition[WindowOpenDisposition["kIgnoreAction"] = 9] = "kIgnoreAction";
    WindowOpenDisposition[WindowOpenDisposition["kSwitchToTab"] = 10] = "kSwitchToTab";
    WindowOpenDisposition[WindowOpenDisposition["kNewPictureInPicture"] = 11] = "kNewPictureInPicture";
    WindowOpenDisposition[WindowOpenDisposition["kNewSplitView"] = 12] = "kNewSplitView";
})(WindowOpenDisposition || (WindowOpenDisposition = {}));
const ClickModifiersSpec = { $: {} };
mojo.internal.Struct(ClickModifiersSpec.$, 'ClickModifiers', [
    mojo.internal.StructField('middleButton', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// ui/gfx/geometry/mojom/geometry.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec = { $: {} };
const PointFSpec = { $: {} };
const Point3FSpec = { $: {} };
const SizeSpec = { $: {} };
const SizeFSpec = { $: {} };
const RectSpec = { $: {} };
const RectFSpec = { $: {} };
const InsetsSpec = { $: {} };
const InsetsFSpec = { $: {} };
const Vector2dSpec = { $: {} };
const Vector2dFSpec = { $: {} };
const Vector3dFSpec = { $: {} };
const QuaternionSpec = { $: {} };
const QuadFSpec = { $: {} };
const AxisTransform2dSpec = { $: {} };
mojo.internal.Struct(PointSpec.$, 'Point', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PointFSpec.$, 'PointF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Point3FSpec.$, 'Point3F', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SizeSpec.$, 'Size', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(SizeFSpec.$, 'SizeF', [
    mojo.internal.StructField('width', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(RectSpec.$, 'Rect', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(RectFSpec.$, 'RectF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('width', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('height', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InsetsSpec.$, 'Insets', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InsetsFSpec.$, 'InsetsF', [
    mojo.internal.StructField('top', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('left', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('bottom', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('right', 12, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Vector2dSpec.$, 'Vector2d', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Vector2dFSpec.$, 'Vector2dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Vector3dFSpec.$, 'Vector3dF', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 8, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(QuaternionSpec.$, 'Quaternion', [
    mojo.internal.StructField('x', 0, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('y', 8, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('z', 16, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('w', 24, 0, mojo.internal.Double, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(QuadFSpec.$, 'QuadF', [
    mojo.internal.StructField('p1', 0, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p2', 8, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p3', 16, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('p4', 24, 0, PointFSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(AxisTransform2dSpec.$, 'AxisTransform2d', [
    mojo.internal.StructField('scale', 0, 0, Vector2dFSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('translation', 8, 0, Vector2dFSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// ui/gfx/range/mojom/range.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const RangeSpec = { $: {} };
const RangeFSpec = { $: {} };
mojo.internal.Struct(RangeSpec.$, 'Range', [
    mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(RangeFSpec.$, 'RangeF', [
    mojo.internal.StructField('start', 0, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('end', 4, 0, mojo.internal.Float, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// url/mojom/url.mojom-converters.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UrlDataView {
    decoder_;
    version_;
    fieldSpecs_;
    constructor(decoder, version, fieldSpecs) {
        this.decoder_ = decoder;
        this.version_ = version;
        this.fieldSpecs_ = fieldSpecs;
    }
    get url() {
        const field = this.fieldSpecs_[0];
        return mojo.internal.decodeStructField(this.decoder_, field, this.version_);
    }
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class UrlConverter {
    url(url) {
        return url;
    }
    convert(view) {
        return view.url;
    }
}

// url/mojom/url.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UrlSpec = { $: {} };
const converterForUrl = new UrlConverter();
mojo.internal.TypemappedStruct(UrlSpec.$, 'Url', UrlDataView, converterForUrl, [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, ((value) => converterForUrl.url(value))),
], [[0, 16],]);

// components/omnibox/composebox/composebox_query.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ContextUploadStatusSpec = { $: mojo.internal.Enum() };
var ContextUploadStatus;
(function (ContextUploadStatus) {
    ContextUploadStatus[ContextUploadStatus["MIN_VALUE"] = 0] = "MIN_VALUE";
    ContextUploadStatus[ContextUploadStatus["MAX_VALUE"] = 8] = "MAX_VALUE";
    ContextUploadStatus[ContextUploadStatus["kNotUploaded"] = 0] = "kNotUploaded";
    ContextUploadStatus[ContextUploadStatus["kProcessing"] = 1] = "kProcessing";
    ContextUploadStatus[ContextUploadStatus["kValidationFailed"] = 2] = "kValidationFailed";
    ContextUploadStatus[ContextUploadStatus["kUploadStarted"] = 3] = "kUploadStarted";
    ContextUploadStatus[ContextUploadStatus["kUploadSuccessful"] = 4] = "kUploadSuccessful";
    ContextUploadStatus[ContextUploadStatus["kUploadFailed"] = 5] = "kUploadFailed";
    ContextUploadStatus[ContextUploadStatus["kUploadExpired"] = 6] = "kUploadExpired";
    ContextUploadStatus[ContextUploadStatus["kProcessingSuggestSignalsReady"] = 7] = "kProcessingSuggestSignalsReady";
    ContextUploadStatus[ContextUploadStatus["kUploadReplaced"] = 8] = "kUploadReplaced";
})(ContextUploadStatus || (ContextUploadStatus = {}));
const ContextUploadErrorTypeSpec = { $: mojo.internal.Enum() };
var ContextUploadErrorType;
(function (ContextUploadErrorType) {
    ContextUploadErrorType[ContextUploadErrorType["MIN_VALUE"] = 0] = "MIN_VALUE";
    ContextUploadErrorType[ContextUploadErrorType["MAX_VALUE"] = 13] = "MAX_VALUE";
    ContextUploadErrorType[ContextUploadErrorType["kUnknown"] = 0] = "kUnknown";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingError"] = 1] = "kBrowserProcessingError";
    ContextUploadErrorType[ContextUploadErrorType["kNetworkError"] = 2] = "kNetworkError";
    ContextUploadErrorType[ContextUploadErrorType["kServerError"] = 3] = "kServerError";
    ContextUploadErrorType[ContextUploadErrorType["kServerSizeLimitExceeded"] = 4] = "kServerSizeLimitExceeded";
    ContextUploadErrorType[ContextUploadErrorType["kAborted"] = 5] = "kAborted";
    ContextUploadErrorType[ContextUploadErrorType["kImageProcessingError"] = 6] = "kImageProcessingError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileTooLargeError"] = 7] = "kBrowserProcessingFileTooLargeError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileEmptyError"] = 8] = "kBrowserProcessingFileEmptyError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxFilesExceededError"] = 9] = "kBrowserProcessingMaxFilesExceededError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingUnsupportedFileTypeError"] = 10] = "kBrowserProcessingUnsupportedFileTypeError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingFileUploadNotAllowedError"] = 11] = "kBrowserProcessingFileUploadNotAllowedError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxImagesExceededError"] = 12] = "kBrowserProcessingMaxImagesExceededError";
    ContextUploadErrorType[ContextUploadErrorType["kBrowserProcessingMaxPdfsExceededError"] = 13] = "kBrowserProcessingMaxPdfsExceededError";
})(ContextUploadErrorType || (ContextUploadErrorType = {}));
const ModelModeSpec = { $: mojo.internal.Enum() };
var ModelMode;
(function (ModelMode) {
    ModelMode[ModelMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    ModelMode[ModelMode["MAX_VALUE"] = 7] = "MAX_VALUE";
    ModelMode[ModelMode["kUnspecified"] = 0] = "kUnspecified";
    ModelMode[ModelMode["kGeminiRegular"] = 1] = "kGeminiRegular";
    ModelMode[ModelMode["kGeminiPro"] = 2] = "kGeminiPro";
    ModelMode[ModelMode["kGeminiProAutoroute"] = 3] = "kGeminiProAutoroute";
    ModelMode[ModelMode["kGeminiProNoGenUi"] = 4] = "kGeminiProNoGenUi";
    ModelMode[ModelMode["kGeminiFlashLatest"] = 5] = "kGeminiFlashLatest";
    ModelMode[ModelMode["kGeminiProLatest"] = 6] = "kGeminiProLatest";
    ModelMode[ModelMode["kGeminiPreview"] = 7] = "kGeminiPreview";
})(ModelMode || (ModelMode = {}));
const ToolModeSpec = { $: mojo.internal.Enum() };
var ToolMode;
(function (ToolMode) {
    ToolMode[ToolMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    ToolMode[ToolMode["MAX_VALUE"] = 12] = "MAX_VALUE";
    ToolMode[ToolMode["kUnspecified"] = 0] = "kUnspecified";
    ToolMode[ToolMode["kDeepSearch"] = 1] = "kDeepSearch";
    ToolMode[ToolMode["kCanvas"] = 2] = "kCanvas";
    ToolMode[ToolMode["kGeminiPro"] = 3] = "kGeminiPro";
    ToolMode[ToolMode["kImageGen"] = 4] = "kImageGen";
    ToolMode[ToolMode["kDeepBrowse"] = 5] = "kDeepBrowse";
    ToolMode[ToolMode["kImageGenSelfie"] = 6] = "kImageGenSelfie";
    ToolMode[ToolMode["kImageGenUpload"] = 7] = "kImageGenUpload";
    ToolMode[ToolMode["kDisableSuggest"] = 8] = "kDisableSuggest";
    ToolMode[ToolMode["kAim"] = 9] = "kAim";
    ToolMode[ToolMode["kAimGenPrompt"] = 10] = "kAimGenPrompt";
    ToolMode[ToolMode["kAgentTask"] = 11] = "kAgentTask";
    ToolMode[ToolMode["kSearchMore"] = 12] = "kSearchMore";
})(ToolMode || (ToolMode = {}));
const InputTypeSpec = { $: mojo.internal.Enum() };
var InputType;
(function (InputType) {
    InputType[InputType["MIN_VALUE"] = 0] = "MIN_VALUE";
    InputType[InputType["MAX_VALUE"] = 4] = "MAX_VALUE";
    InputType[InputType["kUnspecified"] = 0] = "kUnspecified";
    InputType[InputType["kLensImage"] = 1] = "kLensImage";
    InputType[InputType["kLensFile"] = 2] = "kLensFile";
    InputType[InputType["kBrowserTab"] = 3] = "kBrowserTab";
    InputType[InputType["kDrive"] = 4] = "kDrive";
})(InputType || (InputType = {}));
const AimUrlParamSpec = { $: {} };
const InputTypeConfigSpec = { $: {} };
const ToolConfigSpec = { $: {} };
const ModelConfigSpec = { $: {} };
const SectionConfigSpec = { $: {} };
const InputStateSpec = { $: {} };
mojo.internal.Struct(AimUrlParamSpec.$, 'AimUrlParam', [
    mojo.internal.StructField('paramKey', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('paramValue', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(InputTypeConfigSpec.$, 'InputTypeConfig', [
    mojo.internal.StructField('inputType', 0, 0, InputTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ToolConfigSpec.$, 'ToolConfig', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disableActiveModelSelection', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipLabel', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('aimUrlParams', 32, 0, mojo.internal.Array(AimUrlParamSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuTooltip', 40, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('icon', 48, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 64],]);
mojo.internal.Struct(ModelConfigSpec.$, 'ModelConfig', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuLabel', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('aimUrlParams', 24, 0, mojo.internal.Array(AimUrlParamSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('menuTooltip', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('icon', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(SectionConfigSpec.$, 'SectionConfig', [
    mojo.internal.StructField('header', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(InputStateSpec.$, 'InputState', [
    mojo.internal.StructField('allowedModels', 0, 0, mojo.internal.Array(ModelModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedTools', 8, 0, mojo.internal.Array(ToolModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedInputTypes', 16, 0, mojo.internal.Array(InputTypeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activeModel', 24, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activeTool', 28, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledModels', 32, 0, mojo.internal.Array(ModelModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledTools', 40, 0, mojo.internal.Array(ToolModeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disabledInputTypes', 48, 0, mojo.internal.Array(InputTypeSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolConfigs', 56, 0, mojo.internal.Array(ToolConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelConfigs', 64, 0, mojo.internal.Array(ModelConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inputTypeConfigs', 72, 0, mojo.internal.Array(InputTypeConfigSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolsSectionConfig', 80, 0, SectionConfigSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelSectionConfig', 88, 0, SectionConfigSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hintText', 96, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maxInputsByType', 104, 0, mojo.internal.Map(InputTypeSpec.$, mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maxTotalInputs', 112, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isCanvasQuerySubmitted', 116, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('willFulfillInAim', 116, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 128],]);

// components/omnibox/browser/fusebox_action.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SuggestInventorySpec = { $: mojo.internal.Enum() };
var SuggestInventory;
(function (SuggestInventory) {
    SuggestInventory[SuggestInventory["MIN_VALUE"] = 0] = "MIN_VALUE";
    SuggestInventory[SuggestInventory["MAX_VALUE"] = 15] = "MAX_VALUE";
    SuggestInventory[SuggestInventory["kDefault"] = 0] = "kDefault";
    SuggestInventory[SuggestInventory["kTravel"] = 1] = "kTravel";
    SuggestInventory[SuggestInventory["kAimTakeover"] = 2] = "kAimTakeover";
    SuggestInventory[SuggestInventory["kImageGenTakeover"] = 3] = "kImageGenTakeover";
    SuggestInventory[SuggestInventory["kConversationStarters"] = 4] = "kConversationStarters";
    SuggestInventory[SuggestInventory["kAiHpCreateChip"] = 5] = "kAiHpCreateChip";
    SuggestInventory[SuggestInventory["kAiHpGetItDoneChip"] = 6] = "kAiHpGetItDoneChip";
    SuggestInventory[SuggestInventory["kAiHpSimplifyChip"] = 7] = "kAiHpSimplifyChip";
    SuggestInventory[SuggestInventory["kAiHpIfl"] = 8] = "kAiHpIfl";
    SuggestInventory[SuggestInventory["kAiHpReservations"] = 9] = "kAiHpReservations";
    SuggestInventory[SuggestInventory["kBrainstorm"] = 10] = "kBrainstorm";
    SuggestInventory[SuggestInventory["kHelpMeLearn"] = 11] = "kHelpMeLearn";
    SuggestInventory[SuggestInventory["kWriteOrEdit"] = 12] = "kWriteOrEdit";
    SuggestInventory[SuggestInventory["kAddFile"] = 13] = "kAddFile";
    SuggestInventory[SuggestInventory["kAddTab"] = 14] = "kAddTab";
    SuggestInventory[SuggestInventory["kAimImages"] = 15] = "kAimImages";
})(SuggestInventory || (SuggestInventory = {}));
const QueryActionOverrideSpec = { $: mojo.internal.Enum() };
var QueryActionOverride;
(function (QueryActionOverride) {
    QueryActionOverride[QueryActionOverride["MIN_VALUE"] = 0] = "MIN_VALUE";
    QueryActionOverride[QueryActionOverride["MAX_VALUE"] = 2] = "MAX_VALUE";
    QueryActionOverride[QueryActionOverride["kDefault"] = 0] = "kDefault";
    QueryActionOverride[QueryActionOverride["kPaste"] = 1] = "kPaste";
    QueryActionOverride[QueryActionOverride["kHint"] = 2] = "kHint";
})(QueryActionOverride || (QueryActionOverride = {}));
const InputSourceSpec = { $: mojo.internal.Enum() };
var InputSource;
(function (InputSource) {
    InputSource[InputSource["MIN_VALUE"] = 0] = "MIN_VALUE";
    InputSource[InputSource["MAX_VALUE"] = 6] = "MAX_VALUE";
    InputSource[InputSource["kInputSourceUnspecified"] = 0] = "kInputSourceUnspecified";
    InputSource[InputSource["kInputSourceGallery"] = 1] = "kInputSourceGallery";
    InputSource[InputSource["kInputSourceCamera"] = 2] = "kInputSourceCamera";
    InputSource[InputSource["kInputSourceFilePicker"] = 3] = "kInputSourceFilePicker";
    InputSource[InputSource["kInputSourceDrive"] = 4] = "kInputSourceDrive";
    InputSource[InputSource["kInputSourceTabPicker"] = 5] = "kInputSourceTabPicker";
    InputSource[InputSource["kInputSourceVoice"] = 6] = "kInputSourceVoice";
})(InputSource || (InputSource = {}));
const SearchboxOverrideSpec = { $: mojo.internal.Enum() };
var SearchboxOverride;
(function (SearchboxOverride) {
    SearchboxOverride[SearchboxOverride["MIN_VALUE"] = 0] = "MIN_VALUE";
    SearchboxOverride[SearchboxOverride["MAX_VALUE"] = 2] = "MAX_VALUE";
    SearchboxOverride[SearchboxOverride["kUnspecified"] = 0] = "kUnspecified";
    SearchboxOverride[SearchboxOverride["kRealbox"] = 1] = "kRealbox";
    SearchboxOverride[SearchboxOverride["kComposebox"] = 2] = "kComposebox";
})(SearchboxOverride || (SearchboxOverride = {}));
const SearchboxTutorialSpec = { $: mojo.internal.Enum() };
var SearchboxTutorial;
(function (SearchboxTutorial) {
    SearchboxTutorial[SearchboxTutorial["MIN_VALUE"] = 0] = "MIN_VALUE";
    SearchboxTutorial[SearchboxTutorial["MAX_VALUE"] = 1] = "MAX_VALUE";
    SearchboxTutorial[SearchboxTutorial["kUnspecified"] = 0] = "kUnspecified";
    SearchboxTutorial[SearchboxTutorial["kGlowPlusButton"] = 1] = "kGlowPlusButton";
})(SearchboxTutorial || (SearchboxTutorial = {}));
const FuseboxActionSpec = { $: {} };
mojo.internal.Struct(FuseboxActionSpec.$, 'FuseboxAction', [
    mojo.internal.StructField('preselected_tool_$flag', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_tool_$value",
        originalFieldName: "preselectedTool",
    }, undefined),
    mojo.internal.StructField('preselected_tool_$value', 4, 0, ToolModeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedTool",
    }, undefined),
    mojo.internal.StructField('preferred_inventory_$flag', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preferred_inventory_$value",
        originalFieldName: "preferredInventory",
    }, undefined),
    mojo.internal.StructField('preferred_inventory_$value', 8, 0, SuggestInventorySpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preferredInventory",
    }, undefined),
    mojo.internal.StructField('preselected_model_$flag', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_model_$value",
        originalFieldName: "preselectedModel",
    }, undefined),
    mojo.internal.StructField('preselected_model_$value', 12, 0, ModelModeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedModel",
    }, undefined),
    mojo.internal.StructField('query_action_override_$flag', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "query_action_override_$value",
        originalFieldName: "queryActionOverride",
    }, undefined),
    mojo.internal.StructField('query_action_override_$value', 16, 0, QueryActionOverrideSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "queryActionOverride",
    }, undefined),
    mojo.internal.StructField('preselected_input_source_$flag', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "preselected_input_source_$value",
        originalFieldName: "preselectedInputSource",
    }, undefined),
    mojo.internal.StructField('preselected_input_source_$value', 20, 0, InputSourceSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "preselectedInputSource",
    }, undefined),
    mojo.internal.StructField('searchbox_override_$flag', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "searchbox_override_$value",
        originalFieldName: "searchboxOverride",
    }, undefined),
    mojo.internal.StructField('searchbox_override_$value', 24, 0, SearchboxOverrideSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "searchboxOverride",
    }, undefined),
    mojo.internal.StructField('searchbox_tutorial_$flag', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "searchbox_tutorial_$value",
        originalFieldName: "searchboxTutorial",
    }, undefined),
    mojo.internal.StructField('searchbox_tutorial_$value', 28, 0, SearchboxTutorialSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "searchboxTutorial",
    }, undefined),
], [[0, 40],]);

// components/omnibox/browser/omnibox.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NavigationPredictorSpec = { $: mojo.internal.Enum() };
var NavigationPredictor;
(function (NavigationPredictor) {
    NavigationPredictor[NavigationPredictor["MIN_VALUE"] = 1] = "MIN_VALUE";
    NavigationPredictor[NavigationPredictor["MAX_VALUE"] = 3] = "MAX_VALUE";
    NavigationPredictor[NavigationPredictor["kMouseDown"] = 1] = "kMouseDown";
    NavigationPredictor[NavigationPredictor["kUpOrDownArrowButton"] = 2] = "kUpOrDownArrowButton";
    NavigationPredictor[NavigationPredictor["kTouchDown"] = 3] = "kTouchDown";
})(NavigationPredictor || (NavigationPredictor = {}));
({ $: mojo.internal.Enum() });
var PageClassification;
(function (PageClassification) {
    PageClassification[PageClassification["MIN_VALUE"] = 0] = "MIN_VALUE";
    PageClassification[PageClassification["MAX_VALUE"] = 41] = "MAX_VALUE";
    PageClassification[PageClassification["INVALID_SPEC"] = 0] = "INVALID_SPEC";
    PageClassification[PageClassification["NTP"] = 1] = "NTP";
    PageClassification[PageClassification["BLANK"] = 2] = "BLANK";
    PageClassification[PageClassification["HOME_PAGE"] = 3] = "HOME_PAGE";
    PageClassification[PageClassification["OTHER"] = 4] = "OTHER";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT"] = 6] = "SEARCH_RESULT_PAGE_DOING_SEARCH_TERM_REPLACEMENT";
    PageClassification[PageClassification["INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS"] = 7] = "INSTANT_NTP_WITH_OMNIBOX_AS_STARTING_FOCUS";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT"] = 9] = "SEARCH_RESULT_PAGE_NO_SEARCH_TERM_REPLACEMENT";
    PageClassification[PageClassification["APP_HOME"] = 10] = "APP_HOME";
    PageClassification[PageClassification["APP_SEARCH"] = 11] = "APP_SEARCH";
    PageClassification[PageClassification["APP_MAPS"] = 12] = "APP_MAPS";
    PageClassification[PageClassification["SEARCH_BUTTON_AS_STARTING_FOCUS"] = 13] = "SEARCH_BUTTON_AS_STARTING_FOCUS";
    PageClassification[PageClassification["CHROMEOS_APP_LIST"] = 14] = "CHROMEOS_APP_LIST";
    PageClassification[PageClassification["NTP_REALBOX"] = 15] = "NTP_REALBOX";
    PageClassification[PageClassification["ANDROID_SEARCH_WIDGET"] = 16] = "ANDROID_SEARCH_WIDGET";
    PageClassification[PageClassification["ANDROID_SHORTCUTS_WIDGET"] = 19] = "ANDROID_SHORTCUTS_WIDGET";
    PageClassification[PageClassification["NTP_ZPS_PREFETCH"] = 20] = "NTP_ZPS_PREFETCH";
    PageClassification[PageClassification["JOURNEYS"] = 21] = "JOURNEYS";
    PageClassification[PageClassification["SRP_ZPS_PREFETCH"] = 22] = "SRP_ZPS_PREFETCH";
    PageClassification[PageClassification["OTHER_ZPS_PREFETCH"] = 23] = "OTHER_ZPS_PREFETCH";
    PageClassification[PageClassification["CONTEXTUAL_SEARCHBOX"] = 24] = "CONTEXTUAL_SEARCHBOX";
    PageClassification[PageClassification["SEARCH_SIDE_PANEL_SEARCHBOX"] = 25] = "SEARCH_SIDE_PANEL_SEARCHBOX";
    PageClassification[PageClassification["LENS_SIDE_PANEL_SEARCHBOX"] = 26] = "LENS_SIDE_PANEL_SEARCHBOX";
    PageClassification[PageClassification["SEARCH_RESULT_PAGE_ON_CCT"] = 27] = "SEARCH_RESULT_PAGE_ON_CCT";
    PageClassification[PageClassification["OTHER_ON_CCT"] = 28] = "OTHER_ON_CCT";
    PageClassification[PageClassification["ANDROID_HUB"] = 29] = "ANDROID_HUB";
    PageClassification[PageClassification["JUMP_START"] = 30] = "JUMP_START";
    PageClassification[PageClassification["NTP_COMPOSEBOX"] = 31] = "NTP_COMPOSEBOX";
    PageClassification[PageClassification["LENS_SIDE_PANEL_COMPOSEBOX"] = 32] = "LENS_SIDE_PANEL_COMPOSEBOX";
    PageClassification[PageClassification["NTP_OMNIBOX_COMPOSEBOX"] = 33] = "NTP_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["SRP_OMNIBOX_COMPOSEBOX"] = 34] = "SRP_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["OTHER_OMNIBOX_COMPOSEBOX"] = 35] = "OTHER_OMNIBOX_COMPOSEBOX";
    PageClassification[PageClassification["CO_BROWSING_COMPOSEBOX"] = 36] = "CO_BROWSING_COMPOSEBOX";
    PageClassification[PageClassification["NTP_COMPOSEBOX_PREFETCH"] = 37] = "NTP_COMPOSEBOX_PREFETCH";
    PageClassification[PageClassification["OMNIBOX_EVERYWHERE"] = 38] = "OMNIBOX_EVERYWHERE";
    PageClassification[PageClassification["COMPOSEBOX_EVERYWHERE"] = 39] = "COMPOSEBOX_EVERYWHERE";
    PageClassification[PageClassification["ANDROID_TAB_SEARCH_OVERLAY"] = 40] = "ANDROID_TAB_SEARCH_OVERLAY";
    PageClassification[PageClassification["NTP_ACTION_CHIPS"] = 41] = "NTP_ACTION_CHIPS";
})(PageClassification || (PageClassification = {}));

// components/omnibox/browser/suggest_template_info.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ColorTypeSpec = { $: mojo.internal.Enum() };
var ColorType;
(function (ColorType) {
    ColorType[ColorType["MIN_VALUE"] = 0] = "MIN_VALUE";
    ColorType[ColorType["MAX_VALUE"] = 16] = "MAX_VALUE";
    ColorType[ColorType["kUnknown"] = 0] = "kUnknown";
    ColorType[ColorType["kCanvas"] = 1] = "kCanvas";
    ColorType[ColorType["kSurface"] = 2] = "kSurface";
    ColorType[ColorType["kPrimary"] = 3] = "kPrimary";
    ColorType[ColorType["kTertiary"] = 4] = "kTertiary";
    ColorType[ColorType["kOnTertiary"] = 5] = "kOnTertiary";
    ColorType[ColorType["kOnSurfaceLinkVisited"] = 6] = "kOnSurfaceLinkVisited";
    ColorType[ColorType["kOnSurfaceDefault"] = 7] = "kOnSurfaceDefault";
    ColorType[ColorType["kOnSurfacePositive"] = 8] = "kOnSurfacePositive";
    ColorType[ColorType["kOnSurfaceNegative"] = 9] = "kOnSurfaceNegative";
    ColorType[ColorType["kOnSurfaceEmphasis"] = 10] = "kOnSurfaceEmphasis";
    ColorType[ColorType["kOnSurfaceDeemphasis"] = 11] = "kOnSurfaceDeemphasis";
    ColorType[ColorType["kOutlineDefault"] = 12] = "kOutlineDefault";
    ColorType[ColorType["kSubtitleText"] = 13] = "kSubtitleText";
    ColorType[ColorType["kSuggestQueryText"] = 14] = "kSuggestQueryText";
    ColorType[ColorType["kSuggestHintText"] = 15] = "kSuggestHintText";
    ColorType[ColorType["kSuggestActionHigh"] = 16] = "kSuggestActionHigh";
})(ColorType || (ColorType = {}));
const SuggestStyleSpec = { $: mojo.internal.Enum() };
var SuggestStyle;
(function (SuggestStyle) {
    SuggestStyle[SuggestStyle["MIN_VALUE"] = 0] = "MIN_VALUE";
    SuggestStyle[SuggestStyle["MAX_VALUE"] = 4] = "MAX_VALUE";
    SuggestStyle[SuggestStyle["kUnspecified"] = 0] = "kUnspecified";
    SuggestStyle[SuggestStyle["kDefault"] = 1] = "kDefault";
    SuggestStyle[SuggestStyle["kEnriched"] = 2] = "kEnriched";
    SuggestStyle[SuggestStyle["kAnnotated"] = 3] = "kAnnotated";
    SuggestStyle[SuggestStyle["kRichImage"] = 4] = "kRichImage";
})(SuggestStyle || (SuggestStyle = {}));
const IconTypeSpec$1 = { $: mojo.internal.Enum() };
var IconType$1;
(function (IconType) {
    IconType[IconType["MIN_VALUE"] = 0] = "MIN_VALUE";
    IconType[IconType["MAX_VALUE"] = 18] = "MAX_VALUE";
    IconType[IconType["kIconTypeUnspecified"] = 0] = "kIconTypeUnspecified";
    IconType[IconType["kHistory"] = 1] = "kHistory";
    IconType[IconType["kSearchLoop"] = 2] = "kSearchLoop";
    IconType[IconType["kSearchLoopWithSparkle"] = 3] = "kSearchLoopWithSparkle";
    IconType[IconType["kTrending"] = 4] = "kTrending";
    IconType[IconType["kSubArrowRight"] = 5] = "kSubArrowRight";
    IconType[IconType["kGlobeWithSearchLoop"] = 6] = "kGlobeWithSearchLoop";
    IconType[IconType["kBanana"] = 7] = "kBanana";
    IconType[IconType["kFavicon"] = 8] = "kFavicon";
    IconType[IconType["kNotesSpark"] = 9] = "kNotesSpark";
    IconType[IconType["kDraftSpark"] = 10] = "kDraftSpark";
    IconType[IconType["kLightbulb"] = 11] = "kLightbulb";
    IconType[IconType["kAttachFile"] = 12] = "kAttachFile";
    IconType[IconType["kSchool"] = 13] = "kSchool";
    IconType[IconType["kInkPen"] = 14] = "kInkPen";
    IconType[IconType["kTab"] = 15] = "kTab";
    IconType[IconType["kPhotoSpark"] = 16] = "kPhotoSpark";
    IconType[IconType["kBolt"] = 17] = "kBolt";
    IconType[IconType["kImageCreate"] = 18] = "kImageCreate";
})(IconType$1 || (IconType$1 = {}));
const SecondaryTextPlacementSpec = { $: mojo.internal.Enum() };
var SecondaryTextPlacement;
(function (SecondaryTextPlacement) {
    SecondaryTextPlacement[SecondaryTextPlacement["MIN_VALUE"] = 0] = "MIN_VALUE";
    SecondaryTextPlacement[SecondaryTextPlacement["MAX_VALUE"] = 2] = "MAX_VALUE";
    SecondaryTextPlacement[SecondaryTextPlacement["kUnspecified"] = 0] = "kUnspecified";
    SecondaryTextPlacement[SecondaryTextPlacement["kInFrontOfPrimaryText"] = 1] = "kInFrontOfPrimaryText";
    SecondaryTextPlacement[SecondaryTextPlacement["kBelowPrimaryText"] = 2] = "kBelowPrimaryText";
})(SecondaryTextPlacement || (SecondaryTextPlacement = {}));
const FormattedStringFragmentSpec = { $: {} };
const FormattedStringSpec = { $: {} };
const ImageSpec = { $: {} };
const SuggestTemplateInfoSpec = { $: {} };
mojo.internal.Struct(FormattedStringFragmentSpec.$, 'FormattedStringFragment', [
    mojo.internal.StructField('startIndex', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('color', 4, 0, ColorTypeSpec.$, ColorType.kUnknown, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isBolded', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(FormattedStringSpec.$, 'FormattedString', [
    mojo.internal.StructField('text', 0, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fragments', 8, 0, mojo.internal.Array(FormattedStringFragmentSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yText', 16, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(ImageSpec.$, 'Image', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('dominantColor', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SuggestTemplateInfoSpec.$, 'SuggestTemplateInfo', [
    mojo.internal.StructField('primaryText', 0, 0, FormattedStringSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryText', 8, 0, FormattedStringSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryTextPlacement', 16, 0, SecondaryTextPlacementSpec.$, SecondaryTextPlacement.kUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('image', 24, 0, ImageSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('style', 20, 0, SuggestStyleSpec.$, SuggestStyle.kUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('typeIcon', 32, 0, IconTypeSpec$1.$, IconType$1.kIconTypeUnspecified, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fuseboxAction', 40, 0, FuseboxActionSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 56],]);

// components/omnibox/browser/searchbox.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UrlDeemphasisModeSpec = { $: mojo.internal.Enum() };
var UrlDeemphasisMode;
(function (UrlDeemphasisMode) {
    UrlDeemphasisMode[UrlDeemphasisMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    UrlDeemphasisMode[UrlDeemphasisMode["MAX_VALUE"] = 3] = "MAX_VALUE";
    UrlDeemphasisMode[UrlDeemphasisMode["kEverything"] = 0] = "kEverything";
    UrlDeemphasisMode[UrlDeemphasisMode["kAllButScheme"] = 1] = "kAllButScheme";
    UrlDeemphasisMode[UrlDeemphasisMode["kAllButHost"] = 2] = "kAllButHost";
    UrlDeemphasisMode[UrlDeemphasisMode["kNothing"] = 3] = "kNothing";
})(UrlDeemphasisMode || (UrlDeemphasisMode = {}));
const KeywordTypeSpec = { $: mojo.internal.Enum() };
var KeywordType;
(function (KeywordType) {
    KeywordType[KeywordType["MIN_VALUE"] = 0] = "MIN_VALUE";
    KeywordType[KeywordType["MAX_VALUE"] = 2] = "MAX_VALUE";
    KeywordType[KeywordType["kChip"] = 0] = "kChip";
    KeywordType[KeywordType["kInKeyword"] = 1] = "kInKeyword";
    KeywordType[KeywordType["kInstant"] = 2] = "kInstant";
})(KeywordType || (KeywordType = {}));
const KeywordActivationMethodSpec = { $: mojo.internal.Enum() };
var KeywordActivationMethod;
(function (KeywordActivationMethod) {
    KeywordActivationMethod[KeywordActivationMethod["MIN_VALUE"] = 0] = "MIN_VALUE";
    KeywordActivationMethod[KeywordActivationMethod["MAX_VALUE"] = 2] = "MAX_VALUE";
    KeywordActivationMethod[KeywordActivationMethod["kClick"] = 0] = "kClick";
    KeywordActivationMethod[KeywordActivationMethod["kTap"] = 1] = "kTap";
    KeywordActivationMethod[KeywordActivationMethod["kKeyboard"] = 2] = "kKeyboard";
})(KeywordActivationMethod || (KeywordActivationMethod = {}));
const TabAttachmentSourceSpec = { $: mojo.internal.Enum() };
var TabAttachmentSource;
(function (TabAttachmentSource) {
    TabAttachmentSource[TabAttachmentSource["MIN_VALUE"] = 0] = "MIN_VALUE";
    TabAttachmentSource[TabAttachmentSource["MAX_VALUE"] = 5] = "MAX_VALUE";
    TabAttachmentSource[TabAttachmentSource["kOther"] = 0] = "kOther";
    TabAttachmentSource[TabAttachmentSource["kContextMenu"] = 1] = "kContextMenu";
    TabAttachmentSource[TabAttachmentSource["kCurrentTabChip"] = 2] = "kCurrentTabChip";
    TabAttachmentSource[TabAttachmentSource["kActionChip"] = 3] = "kActionChip";
    TabAttachmentSource[TabAttachmentSource["kAutoActive"] = 4] = "kAutoActive";
    TabAttachmentSource[TabAttachmentSource["kAutoAdded"] = 5] = "kAutoAdded";
})(TabAttachmentSource || (TabAttachmentSource = {}));
const FreStageSpec = { $: mojo.internal.Enum() };
var FreStage;
(function (FreStage) {
    FreStage[FreStage["MIN_VALUE"] = 0] = "MIN_VALUE";
    FreStage[FreStage["MAX_VALUE"] = 3] = "MAX_VALUE";
    FreStage[FreStage["kNone"] = 0] = "kNone";
    FreStage[FreStage["kIntroModal"] = 1] = "kIntroModal";
    FreStage[FreStage["kShortcutSetupChin"] = 2] = "kShortcutSetupChin";
    FreStage[FreStage["kShortcutReminderChin"] = 3] = "kShortcutReminderChin";
})(FreStage || (FreStage = {}));
const SideTypeSpec = { $: mojo.internal.Enum() };
var SideType;
(function (SideType) {
    SideType[SideType["MIN_VALUE"] = 0] = "MIN_VALUE";
    SideType[SideType["MAX_VALUE"] = 1] = "MAX_VALUE";
    SideType[SideType["kDefaultPrimary"] = 0] = "kDefaultPrimary";
    SideType[SideType["kSecondary"] = 1] = "kSecondary";
})(SideType || (SideType = {}));
const RenderTypeSpec = { $: mojo.internal.Enum() };
var RenderType;
(function (RenderType) {
    RenderType[RenderType["MIN_VALUE"] = 0] = "MIN_VALUE";
    RenderType[RenderType["MAX_VALUE"] = 2] = "MAX_VALUE";
    RenderType[RenderType["kDefaultVertical"] = 0] = "kDefaultVertical";
    RenderType[RenderType["kHorizontal"] = 1] = "kHorizontal";
    RenderType[RenderType["kGrid"] = 2] = "kGrid";
})(RenderType || (RenderType = {}));
const SelectionLineStateSpec = { $: mojo.internal.Enum() };
var SelectionLineState;
(function (SelectionLineState) {
    SelectionLineState[SelectionLineState["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionLineState[SelectionLineState["MAX_VALUE"] = 10] = "MAX_VALUE";
    SelectionLineState[SelectionLineState["kNormal"] = 1] = "kNormal";
    SelectionLineState[SelectionLineState["kKeywordMode"] = 2] = "kKeywordMode";
    SelectionLineState[SelectionLineState["kFocusedButtonAction"] = 3] = "kFocusedButtonAction";
    SelectionLineState[SelectionLineState["kFocusedButtonRemoveSuggestion"] = 4] = "kFocusedButtonRemoveSuggestion";
    SelectionLineState[SelectionLineState["kFocusedButtonAim"] = 5] = "kFocusedButtonAim";
    SelectionLineState[SelectionLineState["kFocusedButtonContextEntrypoint"] = 6] = "kFocusedButtonContextEntrypoint";
    SelectionLineState[SelectionLineState["kCtrlEnter"] = 7] = "kCtrlEnter";
    SelectionLineState[SelectionLineState["kFocusedButtonVoiceSearch"] = 8] = "kFocusedButtonVoiceSearch";
    SelectionLineState[SelectionLineState["kFocusedButtonLensSearch"] = 9] = "kFocusedButtonLensSearch";
    SelectionLineState[SelectionLineState["kFocusedButtonContextualChip"] = 10] = "kFocusedButtonContextualChip";
})(SelectionLineState || (SelectionLineState = {}));
const SelectionDirectionSpec = { $: mojo.internal.Enum() };
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionDirection[SelectionDirection["MAX_VALUE"] = 2] = "MAX_VALUE";
    SelectionDirection[SelectionDirection["kForward"] = 1] = "kForward";
    SelectionDirection[SelectionDirection["kBackward"] = 2] = "kBackward";
})(SelectionDirection || (SelectionDirection = {}));
const SelectionStepSpec = { $: mojo.internal.Enum() };
var SelectionStep;
(function (SelectionStep) {
    SelectionStep[SelectionStep["MIN_VALUE"] = 1] = "MIN_VALUE";
    SelectionStep[SelectionStep["MAX_VALUE"] = 3] = "MAX_VALUE";
    SelectionStep[SelectionStep["kWholeLine"] = 1] = "kWholeLine";
    SelectionStep[SelectionStep["kStateOrLine"] = 2] = "kStateOrLine";
    SelectionStep[SelectionStep["kAllLines"] = 3] = "kAllLines";
})(SelectionStep || (SelectionStep = {}));
const DriveUploadErrorSpec = { $: mojo.internal.Enum() };
var DriveUploadError;
(function (DriveUploadError) {
    DriveUploadError[DriveUploadError["MIN_VALUE"] = 0] = "MIN_VALUE";
    DriveUploadError[DriveUploadError["MAX_VALUE"] = 1] = "MAX_VALUE";
    DriveUploadError[DriveUploadError["kSizeLimitExceeded"] = 0] = "kSizeLimitExceeded";
    DriveUploadError[DriveUploadError["kMaxFilesExceeded"] = 1] = "kMaxFilesExceeded";
})(DriveUploadError || (DriveUploadError = {}));
const DriveDisclaimerStatusSpec = { $: mojo.internal.Enum() };
var DriveDisclaimerStatus;
(function (DriveDisclaimerStatus) {
    DriveDisclaimerStatus[DriveDisclaimerStatus["MIN_VALUE"] = 0] = "MIN_VALUE";
    DriveDisclaimerStatus[DriveDisclaimerStatus["MAX_VALUE"] = 2] = "MAX_VALUE";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kNotAccepted"] = 0] = "kNotAccepted";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kAccepted"] = 1] = "kAccepted";
    DriveDisclaimerStatus[DriveDisclaimerStatus["kRestricted"] = 2] = "kRestricted";
})(DriveDisclaimerStatus || (DriveDisclaimerStatus = {}));
const InputMethodSpec = { $: mojo.internal.Enum() };
var InputMethod;
(function (InputMethod) {
    InputMethod[InputMethod["MIN_VALUE"] = 1] = "MIN_VALUE";
    InputMethod[InputMethod["MAX_VALUE"] = 11] = "MAX_VALUE";
    InputMethod[InputMethod["kKeyboard"] = 1] = "kKeyboard";
    InputMethod[InputMethod["kPaste"] = 2] = "kPaste";
    InputMethod[InputMethod["kSpeech"] = 6] = "kSpeech";
    InputMethod[InputMethod["kTab"] = 8] = "kTab";
    InputMethod[InputMethod["kLensCamera"] = 10] = "kLensCamera";
    InputMethod[InputMethod["kSmartCompose"] = 11] = "kSmartCompose";
})(InputMethod || (InputMethod = {}));
let PageHandlerPendingReceiver$1 = class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'searchbox.mojom.PageHandler', scope);
    }
};
let PagePendingReceiver$1 = class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'searchbox.mojom.Page', scope);
    }
};
let PageRemote$1 = class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver$1, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setFreState(state) {
        this.proxy.sendMessage(0, Page_SetFreState_ParamsSpec.$, null, [
            state
        ], false);
    }
    autocompleteResultChanged(result) {
        this.proxy.sendMessage(1, Page_AutocompleteResultChanged_ParamsSpec.$, null, [
            result
        ], false);
    }
    updateSelection(oldSelection, selection) {
        this.proxy.sendMessage(2, Page_UpdateSelection_ParamsSpec.$, null, [
            oldSelection,
            selection
        ], false);
    }
    stepSelection(direction, step) {
        this.proxy.sendMessage(3, Page_StepSelection_ParamsSpec.$, null, [
            direction,
            step
        ], false);
    }
    openCurrentSelection(disposition) {
        this.proxy.sendMessage(4, Page_OpenCurrentSelection_ParamsSpec.$, null, [
            disposition
        ], false);
    }
    setAimButtonVisible(visible) {
        this.proxy.sendMessage(5, Page_SetAimButtonVisible_ParamsSpec.$, null, [
            visible
        ], false);
    }
    setAimButtonConfig(text, tooltip, a11yLabel, iconUrl) {
        this.proxy.sendMessage(6, Page_SetAimButtonConfig_ParamsSpec.$, null, [
            text,
            tooltip,
            a11yLabel,
            iconUrl
        ], false);
    }
    setInputText(input) {
        this.proxy.sendMessage(7, Page_SetInputText_ParamsSpec.$, null, [
            input
        ], false);
    }
    setKeywordSpaceTriggeringEnabled(enabled) {
        this.proxy.sendMessage(8, Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec.$, null, [
            enabled
        ], false);
    }
    setAvailableKeywordModels(models, defaultSearchProviderKeyword) {
        this.proxy.sendMessage(9, Page_SetAvailableKeywordModels_ParamsSpec.$, null, [
            models,
            defaultSearchProviderKeyword
        ], false);
    }
    setThumbnail(thumbnailUrl, isDeletable) {
        this.proxy.sendMessage(10, Page_SetThumbnail_ParamsSpec.$, null, [
            thumbnailUrl,
            isDeletable
        ], false);
    }
    onContextualInputStatusChanged(token, status, errorType) {
        this.proxy.sendMessage(11, Page_OnContextualInputStatusChanged_ParamsSpec.$, null, [
            token,
            status,
            errorType
        ], false);
    }
    onTabStripChanged() {
        this.proxy.sendMessage(12, Page_OnTabStripChanged_ParamsSpec.$, null, [], false);
    }
    onInputStateChanged(inputState) {
        this.proxy.sendMessage(13, Page_OnInputStateChanged_ParamsSpec.$, null, [
            inputState
        ], false);
    }
    addFileContext(token, fileInfo) {
        this.proxy.sendMessage(14, Page_AddFileContext_ParamsSpec.$, null, [
            token,
            fileInfo
        ], false);
    }
    updateAutoSuggestedTabContext(tab, invocationSource) {
        this.proxy.sendMessage(15, Page_UpdateAutoSuggestedTabContext_ParamsSpec.$, null, [
            tab,
            invocationSource
        ], false);
    }
    updateLensSearchEligibility(eligible) {
        this.proxy.sendMessage(16, Page_UpdateLensSearchEligibility_ParamsSpec.$, null, [
            eligible
        ], false);
    }
    updateContentSharingPolicy(enabled) {
        this.proxy.sendMessage(17, Page_UpdateContentSharingPolicy_ParamsSpec.$, null, [
            enabled
        ], false);
    }
    updateAimPopupEligibility(eligible) {
        this.proxy.sendMessage(18, Page_UpdateAimPopupEligibility_ParamsSpec.$, null, [
            eligible
        ], false);
    }
    updateSmartTabSharingActive(active) {
        this.proxy.sendMessage(19, Page_UpdateSmartTabSharingActive_ParamsSpec.$, null, [
            active
        ], false);
    }
    onPermissionPromptChanged(isShowing, promptSize) {
        this.proxy.sendMessage(20, Page_OnPermissionPromptChanged_ParamsSpec.$, null, [
            isShowing,
            promptSize
        ], false);
    }
    setRestoredTabIds(ids) {
        this.proxy.sendMessage(21, Page_SetRestoredTabIds_ParamsSpec.$, null, [
            ids
        ], false);
    }
    setAimThreadRestoredTabs(tabs) {
        this.proxy.sendMessage(22, Page_SetAimThreadRestoredTabs_ParamsSpec.$, null, [
            tabs
        ], false);
    }
    onScreenshotMenuClosed() {
        this.proxy.sendMessage(23, Page_OnScreenshotMenuClosed_ParamsSpec.$, null, [], false);
    }
    updateProfileInfo(avatarUrl, name, email) {
        this.proxy.sendMessage(24, Page_UpdateProfileInfo_ParamsSpec.$, null, [
            avatarUrl,
            name,
            email
        ], false);
    }
};
const UrlEmphasisSpec = { $: {} };
const ACMatchClassificationSpec = { $: {} };
const ActionSpec = { $: {} };
const InputKeywordModelSpec = { $: {} };
const MatchKeywordModelSpec = { $: {} };
const AutocompleteMatchSpec = { $: {} };
const TabInfoSpec = { $: {} };
const FileAttachmentSpec = { $: {} };
const TabAttachmentSpec = { $: {} };
const SearchContextSpec = { $: {} };
const FreStateSpec = { $: {} };
const SelectedFileInfoSpec = { $: {} };
const SuggestionGroupSpec = { $: {} };
const SmartComposeStatsSpec = { $: {} };
const AutocompleteResultSpec = { $: {} };
const OmniboxPopupSelectionSpec = { $: {} };
const ActionModifiersSpec = { $: {} };
const PlaceholderConfigSpec = { $: {} };
const DriveFileSpec = { $: {} };
const DriveUploadResponseSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec$1 = { $: {} };
const PageHandler_OnFocusChanged_ParamsSpec = { $: {} };
const PageHandler_QueryAutocomplete_ParamsSpec = { $: {} };
const PageHandler_StopAutocomplete_ParamsSpec = { $: {} };
const PageHandler_OpenAutocompleteMatch_ParamsSpec = { $: {} };
const PageHandler_SetSmartComposeStats_ParamsSpec = { $: {} };
const PageHandler_SetPopupSelection_ParamsSpec = { $: {} };
const PageHandler_OpenPopupSelection_ParamsSpec = { $: {} };
const PageHandler_OnNavigationLikely_ParamsSpec = { $: {} };
const PageHandler_DeleteAutocompleteMatch_ParamsSpec = { $: {} };
const PageHandler_ActivateKeyword_ParamsSpec = { $: {} };
const PageHandler_ExecuteAction_ParamsSpec = { $: {} };
const PageHandler_OnThumbnailRemoved_ParamsSpec = { $: {} };
const PageHandler_GetCyclingPlaceholderConfig_ParamsSpec = { $: {} };
const PageHandler_GetCyclingPlaceholderConfig_ResponseParamsSpec = { $: {} };
const PageHandler_GetRecentTabs_ParamsSpec = { $: {} };
const PageHandler_GetRecentTabs_ResponseParamsSpec = { $: {} };
const PageHandler_GetTabPreview_ParamsSpec = { $: {} };
const PageHandler_GetTabPreview_ResponseParamsSpec = { $: {} };
const PageHandler_WaitForTabFaviconLoad_ParamsSpec = { $: {} };
const PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec = { $: {} };
const PageHandler_GetInputState_ParamsSpec = { $: {} };
const PageHandler_GetInputState_ResponseParamsSpec = { $: {} };
const PageHandler_NotifySessionStarted_ParamsSpec = { $: {} };
const PageHandler_NotifySessionAbandoned_ParamsSpec = { $: {} };
const PageHandler_AddFileContext_ParamsSpec = { $: {} };
const PageHandler_AddFileContext_ResponseParamsSpec = { $: {} };
const PageHandler_AddTabContext_ParamsSpec = { $: {} };
const PageHandler_AddTabContext_ResponseParamsSpec = { $: {} };
const PageHandler_DeleteContext_ParamsSpec = { $: {} };
const PageHandler_DeleteTabContext_ParamsSpec = { $: {} };
const PageHandler_ClearFiles_ParamsSpec = { $: {} };
const PageHandler_SubmitQuery_ParamsSpec = { $: {} };
const PageHandler_OpenLensSearch_ParamsSpec = { $: {} };
const PageHandler_SetActiveToolMode_ParamsSpec = { $: {} };
const PageHandler_SetActiveModelMode_ParamsSpec = { $: {} };
const PageHandler_ActivateMetricsFunnel_ParamsSpec = { $: {} };
const PageHandler_RecordToolSelectionAction_ParamsSpec = { $: {} };
const PageHandler_RecordModelSelectionAction_ParamsSpec = { $: {} };
const PageHandler_GetDriveDisclaimerStatus_ParamsSpec = { $: {} };
const PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec = { $: {} };
const PageHandler_OnDriveDisclaimerAccepted_ParamsSpec = { $: {} };
const PageHandler_OnDriveUploadClicked_ParamsSpec = { $: {} };
const PageHandler_OnDriveUploadClicked_ResponseParamsSpec = { $: {} };
const PageHandler_OpenProfilePicker_ParamsSpec = { $: {} };
const PageHandler_ShowScreenshotMenu_ParamsSpec = { $: {} };
const PageHandler_StartScreenshare_ParamsSpec = { $: {} };
const PageHandler_StartScreenshare_ResponseParamsSpec = { $: {} };
const PageHandler_CaptureRegionScreenshot_ParamsSpec = { $: {} };
const PageHandler_CaptureRegionScreenshot_ResponseParamsSpec = { $: {} };
const PageHandler_GetPageClassification_ParamsSpec = { $: {} };
const PageHandler_GetPageClassification_ResponseParamsSpec = { $: {} };
const PageHandler_SetSmartTabSharingActive_ParamsSpec = { $: {} };
const PageHandler_GetSmartTabSharingActive_ParamsSpec = { $: {} };
const PageHandler_GetSmartTabSharingActive_ResponseParamsSpec = { $: {} };
const PageHandler_ResetSmartTabSharing_ParamsSpec = { $: {} };
const PageHandler_ResetSmartTabSharing_ResponseParamsSpec = { $: {} };
const PageHandler_DismissFre_ParamsSpec = { $: {} };
const PageHandler_ShowHotkeyDropdown_ParamsSpec = { $: {} };
const PageHandler_ShowHotkeyDropdown_ResponseParamsSpec = { $: {} };
const PageHandler_OpenHotkeySettings_ParamsSpec = { $: {} };
const PageHandler_OnEscapePressed_ParamsSpec = { $: {} };
const Page_SetFreState_ParamsSpec = { $: {} };
const Page_AutocompleteResultChanged_ParamsSpec = { $: {} };
const Page_UpdateSelection_ParamsSpec = { $: {} };
const Page_StepSelection_ParamsSpec = { $: {} };
const Page_OpenCurrentSelection_ParamsSpec = { $: {} };
const Page_SetAimButtonVisible_ParamsSpec = { $: {} };
const Page_SetAimButtonConfig_ParamsSpec = { $: {} };
const Page_SetInputText_ParamsSpec = { $: {} };
const Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec = { $: {} };
const Page_SetAvailableKeywordModels_ParamsSpec = { $: {} };
const Page_SetThumbnail_ParamsSpec = { $: {} };
const Page_OnContextualInputStatusChanged_ParamsSpec = { $: {} };
const Page_OnTabStripChanged_ParamsSpec = { $: {} };
const Page_OnInputStateChanged_ParamsSpec = { $: {} };
const Page_AddFileContext_ParamsSpec = { $: {} };
const Page_UpdateAutoSuggestedTabContext_ParamsSpec = { $: {} };
const Page_UpdateLensSearchEligibility_ParamsSpec = { $: {} };
const Page_UpdateContentSharingPolicy_ParamsSpec = { $: {} };
const Page_UpdateAimPopupEligibility_ParamsSpec = { $: {} };
const Page_UpdateSmartTabSharingActive_ParamsSpec = { $: {} };
const Page_OnPermissionPromptChanged_ParamsSpec = { $: {} };
const Page_SetRestoredTabIds_ParamsSpec = { $: {} };
const Page_SetAimThreadRestoredTabs_ParamsSpec = { $: {} };
const Page_OnScreenshotMenuClosed_ParamsSpec = { $: {} };
const Page_UpdateProfileInfo_ParamsSpec = { $: {} };
const SearchContextAttachmentSpec = { $: {} };
const PageHandler_AddFileContext_ResponseParam_ResultSpec = { $: {} };
const PageHandler_AddTabContext_ResponseParam_ResultSpec = { $: {} };
mojo.internal.Struct(UrlEmphasisSpec.$, 'UrlEmphasis', [
    mojo.internal.StructField('textIsUrl', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('deemphasisMode', 4, 0, UrlDeemphasisModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeRange', 8, 0, RangeSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('hostRange', 16, 0, RangeSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeStrikeThrough', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('schemeDangerous', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(ACMatchClassificationSpec.$, 'ACMatchClassification', [
    mojo.internal.StructField('offset', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('style', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ActionSpec.$, 'Action', [
    mojo.internal.StructField('hint', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionContents', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(InputKeywordModelSpec.$, 'InputKeywordModel', [
    mojo.internal.StructField('type', 0, 0, KeywordTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('displayText', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('placeholder', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(MatchKeywordModelSpec.$, 'MatchKeywordModel', [
    mojo.internal.StructField('type', 0, 0, KeywordTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipHint', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('chipA11y', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('placeholder', 24, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(AutocompleteMatchSpec.$, 'AutocompleteMatch', [
    mojo.internal.StructField('isHidden', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 8, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('allowedToBeDefaultMatch', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actions', 16, 0, mojo.internal.Array(ActionSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('destinationUrl', 24, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inlineAutocompletion', 32, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fillIntoEdit', 40, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconPath', 48, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 56, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestTemplate', 64, 0, SuggestTemplateInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('secondaryTextIsUrl', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSearchType', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isEnterpriseSearchAggregatorPeopleType', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('type', 72, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('removeButtonA11yLabel', 80, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('descriptionIconPath', 88, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showSecondaryTextOnlyOnSelection', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionGroupId', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('supportsDeletion', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tailSuggestCommonPrefix', 96, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keywordModel', 104, 0, MatchKeywordModelSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('urlEmphasis', 112, 0, UrlEmphasisSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 128],]);
mojo.internal.Struct(TabInfoSpec.$, 'TabInfo', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 16, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showInCurrentTabChip', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showInPreviousTabChip', 4, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('lastActive', 24, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isLoading', 4, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(FileAttachmentSpec.$, 'FileAttachment', [
    mojo.internal.StructField('uuid', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageDataUrl', 24, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_type_$flag', 32, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_type_$value",
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('error_type_$value', 36, 0, ContextUploadErrorTypeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('iconUrl', 40, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 48, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 64],]);
mojo.internal.Struct(TabAttachmentSpec.$, 'TabAttachment', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 16, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('source', 4, 0, TabAttachmentSourceSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fromSingleTabMenuItem', 24, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isActiveTab', 24, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(SearchContextSpec.$, 'SearchContext', [
    mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('attachments', 8, 0, mojo.internal.Array(SearchContextAttachmentSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('toolMode', 16, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modelMode', 20, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(FreStateSpec.$, 'FreState', [
    mojo.internal.StructField('stage', 0, 0, FreStageSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('currentHotkeyTokens', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SelectedFileInfoSpec.$, 'SelectedFileInfo', [
    mojo.internal.StructField('fileName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('imageDataUrl', 16, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDeletable', 24, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selectionTime', 32, 0, JSTimeSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 40, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(SuggestionGroupSpec.$, 'SuggestionGroup', [
    mojo.internal.StructField('header', 0, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('renderType', 8, 0, RenderTypeSpec.$, RenderType.kDefaultVertical, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('sideType', 12, 0, SideTypeSpec.$, SideType.kDefaultPrimary, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(SmartComposeStatsSpec.$, 'SmartComposeStats', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shownCount', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('acceptedCount', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('charactersAccepted', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shownLength', 16, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(AutocompleteResultSpec.$, 'AutocompleteResult', [
    mojo.internal.StructField('queryId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('sequenceId', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('input', 8, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestionGroupsMap', 16, 0, mojo.internal.Map(mojo.internal.Int32, SuggestionGroupSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matches', 24, 0, mojo.internal.Array(AutocompleteMatchSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('smartComposeInlineHint', 32, 0, String16Spec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('showAimActivityLink', 40, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 56],]);
mojo.internal.Struct(OmniboxPopupSelectionSpec.$, 'OmniboxPopupSelection', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('state', 4, 0, SelectionLineStateSpec.$, 1, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actionIndex', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ActionModifiersSpec.$, 'ActionModifiers', [
    mojo.internal.StructField('altKey', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PlaceholderConfigSpec.$, 'PlaceholderConfig', [
    mojo.internal.StructField('texts', 0, 0, mojo.internal.Array(String16Spec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('changeTextAnimationInterval', 8, 0, TimeDeltaSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fadeTextAnimationDuration', 16, 0, TimeDeltaSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(DriveFileSpec.$, 'DriveFile', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mimeType', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileName', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnailUrl', 24, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 32, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(DriveUploadResponseSpec.$, 'DriveUploadResponse', [
    mojo.internal.StructField('files', 0, 0, mojo.internal.Array(DriveFileSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_$flag', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_$value",
        originalFieldName: "error",
    }, undefined),
    mojo.internal.StructField('error_$value', 12, 0, DriveUploadErrorSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "error",
    }, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec$1.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote$1), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver$1), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OnFocusChanged_ParamsSpec.$, 'PageHandler_OnFocusChanged_Params', [
    mojo.internal.StructField('focused', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_QueryAutocomplete_ParamsSpec.$, 'PageHandler_QueryAutocomplete_Params', [
    mojo.internal.StructField('queryId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tab_id_$flag', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "tab_id_$value",
        originalFieldName: "tabId",
    }, undefined),
    mojo.internal.StructField('tab_id_$value', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "tabId",
    }, undefined),
    mojo.internal.StructField('input', 16, 0, String16Spec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('preventInlineAutocomplete', 4, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('cursorPosition', 12, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('suggestInventory', 24, 0, SuggestInventorySpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isOnFocus', 4, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('keyword', 32, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('inputMethod', 28, 0, InputMethodSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(PageHandler_StopAutocomplete_ParamsSpec.$, 'PageHandler_StopAutocomplete_Params', [
    mojo.internal.StructField('clearResult', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenAutocompleteMatch_ParamsSpec.$, 'PageHandler_OpenAutocompleteMatch_Params', [
    mojo.internal.StructField('resultSequenceId', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('line', 4, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('areMatchesShowing', 5, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 6, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('modifiers', 16, 0, ActionModifiersSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('viaKeyboard', 5, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_SetSmartComposeStats_ParamsSpec.$, 'PageHandler_SetSmartComposeStats_Params', [
    mojo.internal.StructField('smartComposeStats', 0, 0, SmartComposeStatsSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetPopupSelection_ParamsSpec.$, 'PageHandler_SetPopupSelection_Params', [
    mojo.internal.StructField('selection', 0, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenPopupSelection_ParamsSpec.$, 'PageHandler_OpenPopupSelection_Params', [
    mojo.internal.StructField('resultSequenceId', 0, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selection', 8, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('disposition', 4, 0, WindowOpenDispositionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OnNavigationLikely_ParamsSpec.$, 'PageHandler_OnNavigationLikely_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('navigationPredictor', 4, 0, NavigationPredictorSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteAutocompleteMatch_ParamsSpec.$, 'PageHandler_DeleteAutocompleteMatch_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_ActivateKeyword_ParamsSpec.$, 'PageHandler_ActivateKeyword_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matchSelectionTimestamp', 16, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('activationMethod', 4, 0, KeywordActivationMethodSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_ExecuteAction_ParamsSpec.$, 'PageHandler_ExecuteAction_Params', [
    mojo.internal.StructField('line', 0, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('actionIndex', 1, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('matchSelectionTimestamp', 16, 0, TimeTicksSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 2, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 3, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 3, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 3, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 3, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_OnThumbnailRemoved_ParamsSpec.$, 'PageHandler_OnThumbnailRemoved_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetCyclingPlaceholderConfig_ParamsSpec.$, 'PageHandler_GetCyclingPlaceholderConfig_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetCyclingPlaceholderConfig_ResponseParamsSpec.$, 'PageHandler_GetCyclingPlaceholderConfig_ResponseParams', [
    mojo.internal.StructField('config', 0, 0, PlaceholderConfigSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetRecentTabs_ParamsSpec.$, 'PageHandler_GetRecentTabs_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetRecentTabs_ResponseParamsSpec.$, 'PageHandler_GetRecentTabs_ResponseParams', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetTabPreview_ParamsSpec.$, 'PageHandler_GetTabPreview_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetTabPreview_ResponseParamsSpec.$, 'PageHandler_GetTabPreview_ResponseParams', [
    mojo.internal.StructField('previewDataUrl', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_WaitForTabFaviconLoad_ParamsSpec.$, 'PageHandler_WaitForTabFaviconLoad_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_WaitForTabFaviconLoad_ResponseParamsSpec.$, 'PageHandler_WaitForTabFaviconLoad_ResponseParams', [
    mojo.internal.StructField('faviconDataUrl', 0, 0, UrlSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetInputState_ParamsSpec.$, 'PageHandler_GetInputState_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetInputState_ResponseParamsSpec.$, 'PageHandler_GetInputState_ResponseParams', [
    mojo.internal.StructField('state', 0, 0, InputStateSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_NotifySessionStarted_ParamsSpec.$, 'PageHandler_NotifySessionStarted_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_NotifySessionAbandoned_ParamsSpec.$, 'PageHandler_NotifySessionAbandoned_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_AddFileContext_ParamsSpec.$, 'PageHandler_AddFileContext_Params', [
    mojo.internal.StructField('fileInfo', 0, 0, SelectedFileInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileBytes', 8, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_AddFileContext_ResponseParamsSpec.$, 'PageHandler_AddFileContext_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, PageHandler_AddFileContext_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_AddTabContext_ParamsSpec.$, 'PageHandler_AddTabContext_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('delayUpload', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('source', 8, 0, TabAttachmentSourceSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_AddTabContext_ResponseParamsSpec.$, 'PageHandler_AddTabContext_ResponseParams', [
    mojo.internal.StructField('result', 0, 0, PageHandler_AddTabContext_ResponseParam_ResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteContext_ParamsSpec.$, 'PageHandler_DeleteContext_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fromAutomaticChip', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DeleteTabContext_ParamsSpec.$, 'PageHandler_DeleteTabContext_Params', [
    mojo.internal.StructField('tabId', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ClearFiles_ParamsSpec.$, 'PageHandler_ClearFiles_Params', [
    mojo.internal.StructField('shouldBlockAutoSuggestedTabs', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SubmitQuery_ParamsSpec.$, 'PageHandler_SubmitQuery_Params', [
    mojo.internal.StructField('queryText', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('mouseButton', 8, 0, mojo.internal.Uint8, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('altKey', 9, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('ctrlKey', 9, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('metaKey', 9, 2, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('shiftKey', 9, 3, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isVoiceSearch', 9, 4, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_OpenLensSearch_ParamsSpec.$, 'PageHandler_OpenLensSearch_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_SetActiveToolMode_ParamsSpec.$, 'PageHandler_SetActiveToolMode_Params', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSetByAim', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetActiveModelMode_ParamsSpec.$, 'PageHandler_SetActiveModelMode_Params', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSetByAim', 4, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ActivateMetricsFunnel_ParamsSpec.$, 'PageHandler_ActivateMetricsFunnel_Params', [
    mojo.internal.StructField('funnelName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordToolSelectionAction_ParamsSpec.$, 'PageHandler_RecordToolSelectionAction_Params', [
    mojo.internal.StructField('tool', 0, 0, ToolModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordModelSelectionAction_ParamsSpec.$, 'PageHandler_RecordModelSelectionAction_Params', [
    mojo.internal.StructField('model', 0, 0, ModelModeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetDriveDisclaimerStatus_ParamsSpec.$, 'PageHandler_GetDriveDisclaimerStatus_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetDriveDisclaimerStatus_ResponseParamsSpec.$, 'PageHandler_GetDriveDisclaimerStatus_ResponseParams', [
    mojo.internal.StructField('status', 0, 0, DriveDisclaimerStatusSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OnDriveDisclaimerAccepted_ParamsSpec.$, 'PageHandler_OnDriveDisclaimerAccepted_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnDriveUploadClicked_ParamsSpec.$, 'PageHandler_OnDriveUploadClicked_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnDriveUploadClicked_ResponseParamsSpec.$, 'PageHandler_OnDriveUploadClicked_ResponseParams', [
    mojo.internal.StructField('response', 0, 0, DriveUploadResponseSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenProfilePicker_ParamsSpec.$, 'PageHandler_OpenProfilePicker_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ShowScreenshotMenu_ParamsSpec.$, 'PageHandler_ShowScreenshotMenu_Params', [
    mojo.internal.StructField('anchorRect', 0, 0, RectSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartScreenshare_ParamsSpec.$, 'PageHandler_StartScreenshare_Params', [
    mojo.internal.StructField('preferEntireScreen', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_StartScreenshare_ResponseParamsSpec.$, 'PageHandler_StartScreenshare_ResponseParams', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_CaptureRegionScreenshot_ParamsSpec.$, 'PageHandler_CaptureRegionScreenshot_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_CaptureRegionScreenshot_ResponseParamsSpec.$, 'PageHandler_CaptureRegionScreenshot_ResponseParams', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetPageClassification_ParamsSpec.$, 'PageHandler_GetPageClassification_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetPageClassification_ResponseParamsSpec.$, 'PageHandler_GetPageClassification_ResponseParams', [
    mojo.internal.StructField('metricSource', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetSmartTabSharingActive_ParamsSpec.$, 'PageHandler_SetSmartTabSharingActive_Params', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetSmartTabSharingActive_ParamsSpec.$, 'PageHandler_GetSmartTabSharingActive_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetSmartTabSharingActive_ResponseParamsSpec.$, 'PageHandler_GetSmartTabSharingActive_ResponseParams', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ResetSmartTabSharing_ParamsSpec.$, 'PageHandler_ResetSmartTabSharing_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_ResetSmartTabSharing_ResponseParamsSpec.$, 'PageHandler_ResetSmartTabSharing_ResponseParams', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_DismissFre_ParamsSpec.$, 'PageHandler_DismissFre_Params', [
    mojo.internal.StructField('stage', 0, 0, FreStageSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowHotkeyDropdown_ParamsSpec.$, 'PageHandler_ShowHotkeyDropdown_Params', [
    mojo.internal.StructField('anchorBounds', 0, 0, RectSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowHotkeyDropdown_ResponseParamsSpec.$, 'PageHandler_ShowHotkeyDropdown_ResponseParams', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenHotkeySettings_ParamsSpec.$, 'PageHandler_OpenHotkeySettings_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnEscapePressed_ParamsSpec.$, 'PageHandler_OnEscapePressed_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_SetFreState_ParamsSpec.$, 'Page_SetFreState_Params', [
    mojo.internal.StructField('state', 0, 0, FreStateSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_AutocompleteResultChanged_ParamsSpec.$, 'Page_AutocompleteResultChanged_Params', [
    mojo.internal.StructField('result', 0, 0, AutocompleteResultSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateSelection_ParamsSpec.$, 'Page_UpdateSelection_Params', [
    mojo.internal.StructField('oldSelection', 0, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('selection', 8, 0, OmniboxPopupSelectionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_StepSelection_ParamsSpec.$, 'Page_StepSelection_Params', [
    mojo.internal.StructField('direction', 0, 0, SelectionDirectionSpec.$, 1, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('step', 4, 0, SelectionStepSpec.$, 1, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OpenCurrentSelection_ParamsSpec.$, 'Page_OpenCurrentSelection_Params', [
    mojo.internal.StructField('disposition', 0, 0, WindowOpenDispositionSpec.$, 0, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimButtonVisible_ParamsSpec.$, 'Page_SetAimButtonVisible_Params', [
    mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimButtonConfig_ParamsSpec.$, 'Page_SetAimButtonConfig_Params', [
    mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('tooltip', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('a11yLabel', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconUrl', 24, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 40],]);
mojo.internal.Struct(Page_SetInputText_ParamsSpec.$, 'Page_SetInputText_Params', [
    mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetKeywordSpaceTriggeringEnabled_ParamsSpec.$, 'Page_SetKeywordSpaceTriggeringEnabled_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAvailableKeywordModels_ParamsSpec.$, 'Page_SetAvailableKeywordModels_Params', [
    mojo.internal.StructField('models', 0, 0, mojo.internal.Array(InputKeywordModelSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('defaultSearchProviderKeyword', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_SetThumbnail_ParamsSpec.$, 'Page_SetThumbnail_Params', [
    mojo.internal.StructField('thumbnailUrl', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isDeletable', 8, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_OnContextualInputStatusChanged_ParamsSpec.$, 'Page_OnContextualInputStatusChanged_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('status', 8, 0, ContextUploadStatusSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('error_type_$flag', 12, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "error_type_$value",
        originalFieldName: "errorType",
    }, undefined),
    mojo.internal.StructField('error_type_$value', 16, 0, ContextUploadErrorTypeSpec.$, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "errorType",
    }, undefined),
], [[0, 32],]);
mojo.internal.Struct(Page_OnTabStripChanged_ParamsSpec.$, 'Page_OnTabStripChanged_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnInputStateChanged_ParamsSpec.$, 'Page_OnInputStateChanged_Params', [
    mojo.internal.StructField('inputState', 0, 0, InputStateSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_AddFileContext_ParamsSpec.$, 'Page_AddFileContext_Params', [
    mojo.internal.StructField('token', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileInfo', 8, 0, SelectedFileInfoSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_UpdateAutoSuggestedTabContext_ParamsSpec.$, 'Page_UpdateAutoSuggestedTabContext_Params', [
    mojo.internal.StructField('tab', 0, 0, TabInfoSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('invocationSource', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_UpdateLensSearchEligibility_ParamsSpec.$, 'Page_UpdateLensSearchEligibility_Params', [
    mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateContentSharingPolicy_ParamsSpec.$, 'Page_UpdateContentSharingPolicy_Params', [
    mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateAimPopupEligibility_ParamsSpec.$, 'Page_UpdateAimPopupEligibility_Params', [
    mojo.internal.StructField('eligible', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateSmartTabSharingActive_ParamsSpec.$, 'Page_UpdateSmartTabSharingActive_Params', [
    mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnPermissionPromptChanged_ParamsSpec.$, 'Page_OnPermissionPromptChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('promptSize', 8, 0, SizeSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(Page_SetRestoredTabIds_ParamsSpec.$, 'Page_SetRestoredTabIds_Params', [
    mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetAimThreadRestoredTabs_ParamsSpec.$, 'Page_SetAimThreadRestoredTabs_Params', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnScreenshotMenuClosed_ParamsSpec.$, 'Page_OnScreenshotMenuClosed_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UpdateProfileInfo_ParamsSpec.$, 'Page_UpdateProfileInfo_Params', [
    mojo.internal.StructField('avatarUrl', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Union(SearchContextAttachmentSpec.$, 'SearchContextAttachment', {
    'fileAttachment': {
        'ordinal': 0,
        'type': FileAttachmentSpec.$,
    },
    'tabAttachment': {
        'ordinal': 1,
        'type': TabAttachmentSpec.$,
    },
});
var SearchContextAttachmentFieldTags;
(function (SearchContextAttachmentFieldTags) {
    SearchContextAttachmentFieldTags[SearchContextAttachmentFieldTags["FILE_ATTACHMENT"] = 0] = "FILE_ATTACHMENT";
    SearchContextAttachmentFieldTags[SearchContextAttachmentFieldTags["TAB_ATTACHMENT"] = 1] = "TAB_ATTACHMENT";
})(SearchContextAttachmentFieldTags || (SearchContextAttachmentFieldTags = {}));
mojo.internal.Union(PageHandler_AddFileContext_ResponseParam_ResultSpec.$, 'PageHandler_AddFileContext_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': UnguessableTokenSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ContextUploadErrorTypeSpec.$,
    },
});
var PageHandler_AddFileContext_ResponseParam_ResultFieldTags;
(function (PageHandler_AddFileContext_ResponseParam_ResultFieldTags) {
    PageHandler_AddFileContext_ResponseParam_ResultFieldTags[PageHandler_AddFileContext_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    PageHandler_AddFileContext_ResponseParam_ResultFieldTags[PageHandler_AddFileContext_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(PageHandler_AddFileContext_ResponseParam_ResultFieldTags || (PageHandler_AddFileContext_ResponseParam_ResultFieldTags = {}));
mojo.internal.Union(PageHandler_AddTabContext_ResponseParam_ResultSpec.$, 'PageHandler_AddTabContext_ResponseParam_Result', {
    'success': {
        'ordinal': 0,
        'type': UnguessableTokenSpec.$,
    },
    'failure': {
        'ordinal': 1,
        'type': ContextUploadErrorTypeSpec.$,
    },
});
var PageHandler_AddTabContext_ResponseParam_ResultFieldTags;
(function (PageHandler_AddTabContext_ResponseParam_ResultFieldTags) {
    PageHandler_AddTabContext_ResponseParam_ResultFieldTags[PageHandler_AddTabContext_ResponseParam_ResultFieldTags["SUCCESS"] = 0] = "SUCCESS";
    PageHandler_AddTabContext_ResponseParam_ResultFieldTags[PageHandler_AddTabContext_ResponseParam_ResultFieldTags["FAILURE"] = 1] = "FAILURE";
})(PageHandler_AddTabContext_ResponseParam_ResultFieldTags || (PageHandler_AddTabContext_ResponseParam_ResultFieldTags = {}));

// mojo/public/mojom/base/proto_wrapper.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProtoWrapperSpec = { $: {} };
mojo.internal.Struct(ProtoWrapperSpec.$, 'ProtoWrapper', [
    mojo.internal.StructField('protoName', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('smuggled', 8, 0, BigBufferSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);

// mojo/public/mojom/base/uuid.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UuidSpec = { $: {} };
mojo.internal.Struct(UuidSpec.$, 'Uuid', [
    mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);

// chrome/browser/contextual_tasks/contextual_tasks.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const IconTypeSpec = { $: mojo.internal.Enum() };
var IconType;
(function (IconType) {
    IconType[IconType["MIN_VALUE"] = 0] = "MIN_VALUE";
    IconType[IconType["MAX_VALUE"] = 186] = "MAX_VALUE";
    IconType[IconType["kUnspecified"] = 0] = "kUnspecified";
    IconType[IconType["kAdd"] = 9] = "kAdd";
    IconType[IconType["kCheck"] = 30] = "kCheck";
    IconType[IconType["kFormatQuoteFilled"] = 79] = "kFormatQuoteFilled";
    IconType[IconType["kImage"] = 84] = "kImage";
    IconType[IconType["kFollowUp"] = 100] = "kFollowUp";
    IconType[IconType["kDrivePdf"] = 101] = "kDrivePdf";
    IconType[IconType["kInvertedFormatQuoteFilled"] = 186] = "kInvertedFormatQuoteFilled";
})(IconType || (IconType = {}));
class PageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.PageHandler', scope);
    }
}
class PagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.Page', scope);
    }
}
class PageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setThreadTitle(title) {
        this.proxy.sendMessage(0, Page_SetThreadTitle_ParamsSpec.$, null, [
            title
        ], false);
    }
    setTaskDetails(uuid, url, replaceNavigationEntry) {
        this.proxy.sendMessage(1, Page_SetTaskDetails_ParamsSpec.$, null, [
            uuid,
            url,
            replaceNavigationEntry
        ], false);
    }
    onSidePanelStateChanged() {
        this.proxy.sendMessage(2, Page_OnSidePanelStateChanged_ParamsSpec.$, null, [], false);
    }
    focusComposebox() {
        this.proxy.sendMessage(3, Page_FocusComposebox_ParamsSpec.$, null, [], false);
    }
    postAimMessage(message) {
        this.proxy.sendMessage(4, Page_PostAimMessage_ParamsSpec.$, null, [
            message
        ], false);
    }
    onHandshakeComplete() {
        this.proxy.sendMessage(5, Page_OnHandshakeComplete_ParamsSpec.$, null, [], false);
    }
    setOAuthToken(oauthToken) {
        this.proxy.sendMessage(6, Page_SetOAuthToken_ParamsSpec.$, null, [
            oauthToken
        ], false);
    }
    onCookieSyncCompleted() {
        this.proxy.sendMessage(7, Page_OnCookieSyncCompleted_ParamsSpec.$, null, [], false);
    }
    hideInput() {
        this.proxy.sendMessage(8, Page_HideInput_ParamsSpec.$, null, [], false);
    }
    restoreInput() {
        this.proxy.sendMessage(9, Page_RestoreInput_ParamsSpec.$, null, [], false);
    }
    enterBasicMode() {
        this.proxy.sendMessage(10, Page_EnterBasicMode_ParamsSpec.$, null, [], false);
    }
    exitBasicMode() {
        this.proxy.sendMessage(11, Page_ExitBasicMode_ParamsSpec.$, null, [], false);
    }
    injectInput(input) {
        this.proxy.sendMessage(12, Page_InjectInput_ParamsSpec.$, null, [
            input
        ], false);
    }
    removeInjectedInput(fileToken) {
        this.proxy.sendMessage(13, Page_RemoveInjectedInput_ParamsSpec.$, null, [
            fileToken
        ], false);
    }
    onZeroStateChange(isZeroState) {
        this.proxy.sendMessage(14, Page_OnZeroStateChange_ParamsSpec.$, null, [
            isZeroState
        ], false);
    }
    setInNlm(inNlm) {
        this.proxy.sendMessage(15, Page_SetInNlm_ParamsSpec.$, null, [
            inNlm
        ], false);
    }
    onLensOverlayStateChanged(isShowing, maybeShowOverlayHintText) {
        this.proxy.sendMessage(16, Page_OnLensOverlayStateChanged_ParamsSpec.$, null, [
            isShowing,
            maybeShowOverlayHintText
        ], false);
    }
    showErrorPage() {
        this.proxy.sendMessage(17, Page_ShowErrorPage_ParamsSpec.$, null, [], false);
    }
    hideErrorPage() {
        this.proxy.sendMessage(18, Page_HideErrorPage_ParamsSpec.$, null, [], false);
    }
    showOauthErrorDialog() {
        this.proxy.sendMessage(19, Page_ShowOauthErrorDialog_ParamsSpec.$, null, [], false);
    }
    updateComposeboxPosition(position) {
        this.proxy.sendMessage(20, Page_UpdateComposeboxPosition_ParamsSpec.$, null, [
            position
        ], false);
    }
    lockInput() {
        this.proxy.sendMessage(21, Page_LockInput_ParamsSpec.$, null, [], false);
    }
    unlockInput() {
        this.proxy.sendMessage(22, Page_UnlockInput_ParamsSpec.$, null, [], false);
    }
    turnOnSmartTabSharing() {
        this.proxy.sendMessage(23, Page_TurnOnSmartTabSharing_ParamsSpec.$, null, [], false);
    }
    showSmartTabSharingTryItIph() {
        this.proxy.sendMessage(24, Page_ShowSmartTabSharingTryItIph_ParamsSpec.$, null, [], false);
    }
    showSmartTabSharingDefaultOnIph() {
        this.proxy.sendMessage(25, Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec.$, null, [], false);
    }
    onWindowClosed(windowId) {
        this.proxy.sendMessage(26, Page_OnWindowClosed_ParamsSpec.$, null, [
            windowId
        ], false);
    }
    resetForNewThread(taskId, threadUrl) {
        this.proxy.sendMessage(27, Page_ResetForNewThread_ParamsSpec.$, null, [
            taskId,
            threadUrl
        ], false);
    }
}
class ExtensionPageHandlerFactoryPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPageHandlerFactory', scope);
    }
}
class ExtensionPageHandlerFactoryRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPageHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createExtensionPageHandler(page, receiver) {
        this.proxy.sendMessage(0, ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec.$, null, [
            page,
            receiver
        ], false);
    }
}
class ExtensionPageHandlerFactory {
    static get $interfaceName() {
        return "contextual_tasks.mojom.ExtensionPageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new ExtensionPageHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class ExtensionPageHandlerPendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPageHandler', scope);
    }
}
class ExtensionPageHandlerRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getHandshakeMessage(documentId) {
        return this.proxy.sendMessage(0, ExtensionPageHandler_GetHandshakeMessage_ParamsSpec.$, ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec.$, [
            documentId
        ], false);
    }
    onWebviewMessage(message, documentId) {
        this.proxy.sendMessage(1, ExtensionPageHandler_OnWebviewMessage_ParamsSpec.$, null, [
            message,
            documentId
        ], false);
    }
    setTaskId(uuid) {
        this.proxy.sendMessage(2, ExtensionPageHandler_SetTaskId_ParamsSpec.$, null, [
            uuid
        ], false);
    }
    getLensCropPreview() {
        return this.proxy.sendMessage(3, ExtensionPageHandler_GetLensCropPreview_ParamsSpec.$, ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec.$, [], false);
    }
    removeLensCrop() {
        this.proxy.sendMessage(4, ExtensionPageHandler_RemoveLensCrop_ParamsSpec.$, null, [], false);
    }
}
class ExtensionPagePendingReceiver {
    handle;
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'contextual_tasks.mojom.ExtensionPage', scope);
    }
}
class ExtensionPageRemote {
    proxy;
    $;
    onConnectionError;
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(ExtensionPagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    postAimMessage(message) {
        this.proxy.sendMessage(0, ExtensionPage_PostAimMessage_ParamsSpec.$, null, [
            message
        ], false);
    }
    postSearchMessage(message, documentId) {
        this.proxy.sendMessage(1, ExtensionPage_PostSearchMessage_ParamsSpec.$, null, [
            message,
            documentId
        ], false);
    }
    onHandshakeComplete() {
        this.proxy.sendMessage(2, ExtensionPage_OnHandshakeComplete_ParamsSpec.$, null, [], false);
    }
    onLensOverlayStateChanged(isShowing) {
        this.proxy.sendMessage(3, ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, null, [
            isShowing
        ], false);
    }
    onLensCropUpdated(dataUri) {
        this.proxy.sendMessage(4, ExtensionPage_OnLensCropUpdated_ParamsSpec.$, null, [
            dataUri
        ], false);
    }
    onTabContextUpdated(tabs, submittedTabIds) {
        this.proxy.sendMessage(5, ExtensionPage_OnTabContextUpdated_ParamsSpec.$, null, [
            tabs,
            submittedTabIds
        ], false);
    }
}
/**
 * An object which receives request messages for the ExtensionPage
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class ExtensionPageCallbackRouter {
    helper_internal_;
    $;
    router_;
    postAimMessage;
    postSearchMessage;
    onHandshakeComplete;
    onLensOverlayStateChanged;
    onLensCropUpdated;
    onTabContextUpdated;
    onConnectionError;
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(ExtensionPageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.postAimMessage =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, ExtensionPage_PostAimMessage_ParamsSpec.$, null, this.postAimMessage.createReceiverHandler(false /* expectsResponse */), false);
        this.postSearchMessage =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, ExtensionPage_PostSearchMessage_ParamsSpec.$, null, this.postSearchMessage.createReceiverHandler(false /* expectsResponse */), false);
        this.onHandshakeComplete =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, ExtensionPage_OnHandshakeComplete_ParamsSpec.$, null, this.onHandshakeComplete.createReceiverHandler(false /* expectsResponse */), false);
        this.onLensOverlayStateChanged =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, null, this.onLensOverlayStateChanged.createReceiverHandler(false /* expectsResponse */), false);
        this.onLensCropUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(4, ExtensionPage_OnLensCropUpdated_ParamsSpec.$, null, this.onLensCropUpdated.createReceiverHandler(false /* expectsResponse */), false);
        this.onTabContextUpdated =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(5, ExtensionPage_OnTabContextUpdated_ParamsSpec.$, null, this.onTabContextUpdated.createReceiverHandler(false /* expectsResponse */), false);
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const InjectedInputSpec = { $: {} };
const ContextualTaskIdSpec = { $: {} };
const ContextualWindowIdSpec = { $: {} };
const ComposeboxPositionSpec = { $: {} };
const PageHandler_GetThreadUrl_ParamsSpec = { $: {} };
const PageHandler_GetThreadUrl_ResponseParamsSpec = { $: {} };
const PageHandler_MoveActiveTabToNewThreadIfShared_ParamsSpec = { $: {} };
const PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsSpec = { $: {} };
const PageHandler_GetUrlForTask_ParamsSpec = { $: {} };
const PageHandler_GetUrlForTask_ResponseParamsSpec = { $: {} };
const PageHandler_SetTaskId_ParamsSpec = { $: {} };
const PageHandler_IsZeroState_ParamsSpec = { $: {} };
const PageHandler_IsZeroState_ResponseParamsSpec = { $: {} };
const PageHandler_IsAiPage_ParamsSpec = { $: {} };
const PageHandler_IsAiPage_ResponseParamsSpec = { $: {} };
const PageHandler_IsPendingErrorPage_ParamsSpec = { $: {} };
const PageHandler_IsPendingErrorPage_ResponseParamsSpec = { $: {} };
const PageHandler_IsEmbeddedPageErrorDocument_ParamsSpec = { $: {} };
const PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsSpec = { $: {} };
const PageHandler_SetThreadTitle_ParamsSpec = { $: {} };
const PageHandler_IsShownInTab_ParamsSpec = { $: {} };
const PageHandler_IsShownInTab_ResponseParamsSpec = { $: {} };
const PageHandler_OpenOnboardingHelpUi_ParamsSpec = { $: {} };
const PageHandler_OpenAskGHelpUi_ParamsSpec = { $: {} };
const PageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
const PageHandler_GetCommonSearchParams_ParamsSpec = { $: {} };
const PageHandler_GetCommonSearchParams_ResponseParamsSpec = { $: {} };
const PageHandler_OnboardingTooltipDismissed_ParamsSpec = { $: {} };
const PageHandler_AskGTooltipDismissed_ParamsSpec = { $: {} };
const PageHandler_OnContextMenuOpened_ParamsSpec = { $: {} };
const PageHandler_NotifySmartTabSharingTryItIphResult_ParamsSpec = { $: {} };
const PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsSpec = { $: {} };
const PageHandler_RegisterWindow_ParamsSpec = { $: {} };
const PageHandler_CloseWindow_ParamsSpec = { $: {} };
const Page_SetThreadTitle_ParamsSpec = { $: {} };
const Page_SetTaskDetails_ParamsSpec = { $: {} };
const Page_OnSidePanelStateChanged_ParamsSpec = { $: {} };
const Page_FocusComposebox_ParamsSpec = { $: {} };
const Page_PostAimMessage_ParamsSpec = { $: {} };
const Page_OnHandshakeComplete_ParamsSpec = { $: {} };
const Page_SetOAuthToken_ParamsSpec = { $: {} };
const Page_OnCookieSyncCompleted_ParamsSpec = { $: {} };
const Page_HideInput_ParamsSpec = { $: {} };
const Page_RestoreInput_ParamsSpec = { $: {} };
const Page_EnterBasicMode_ParamsSpec = { $: {} };
const Page_ExitBasicMode_ParamsSpec = { $: {} };
const Page_InjectInput_ParamsSpec = { $: {} };
const Page_RemoveInjectedInput_ParamsSpec = { $: {} };
const Page_OnZeroStateChange_ParamsSpec = { $: {} };
const Page_SetInNlm_ParamsSpec = { $: {} };
const Page_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
const Page_ShowErrorPage_ParamsSpec = { $: {} };
const Page_HideErrorPage_ParamsSpec = { $: {} };
const Page_ShowOauthErrorDialog_ParamsSpec = { $: {} };
const Page_UpdateComposeboxPosition_ParamsSpec = { $: {} };
const Page_LockInput_ParamsSpec = { $: {} };
const Page_UnlockInput_ParamsSpec = { $: {} };
const Page_TurnOnSmartTabSharing_ParamsSpec = { $: {} };
const Page_ShowSmartTabSharingTryItIph_ParamsSpec = { $: {} };
const Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec = { $: {} };
const Page_OnWindowClosed_ParamsSpec = { $: {} };
const Page_ResetForNewThread_ParamsSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetHandshakeMessage_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec = { $: {} };
const ExtensionPageHandler_OnWebviewMessage_ParamsSpec = { $: {} };
const ExtensionPageHandler_SetTaskId_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetLensCropPreview_ParamsSpec = { $: {} };
const ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec = { $: {} };
const ExtensionPageHandler_RemoveLensCrop_ParamsSpec = { $: {} };
const ExtensionPage_PostAimMessage_ParamsSpec = { $: {} };
const ExtensionPage_PostSearchMessage_ParamsSpec = { $: {} };
const ExtensionPage_OnHandshakeComplete_ParamsSpec = { $: {} };
const ExtensionPage_OnLensOverlayStateChanged_ParamsSpec = { $: {} };
const ExtensionPage_OnLensCropUpdated_ParamsSpec = { $: {} };
const ExtensionPage_OnTabContextUpdated_ParamsSpec = { $: {} };
mojo.internal.Struct(InjectedInputSpec.$, 'InjectedInput', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('thumbnail', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('iconId', 16, 0, IconTypeSpec.$, 0, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('fileToken', 24, 0, UnguessableTokenSpec.$, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('supportsUnimodal', 20, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('queryText', 32, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('submitAfterInjection', 20, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 48],]);
mojo.internal.Struct(ContextualTaskIdSpec.$, 'ContextualTaskId', [
    mojo.internal.StructField('value', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ContextualWindowIdSpec.$, 'ContextualWindowId', [
    mojo.internal.StructField('value', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ComposeboxPositionSpec.$, 'ComposeboxPosition', [
    mojo.internal.StructField('max_width_$flag', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "max_width_$value",
        originalFieldName: "maxWidth",
    }, undefined),
    mojo.internal.StructField('max_width_$value', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "maxWidth",
    }, undefined),
    mojo.internal.StructField('max_height_$flag', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "max_height_$value",
        originalFieldName: "maxHeight",
    }, undefined),
    mojo.internal.StructField('max_height_$value', 8, 0, mojo.internal.Uint32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "maxHeight",
    }, undefined),
    mojo.internal.StructField('margin_bottom_$flag', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "margin_bottom_$value",
        originalFieldName: "marginBottom",
    }, undefined),
    mojo.internal.StructField('margin_bottom_$value', 12, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "marginBottom",
    }, undefined),
    mojo.internal.StructField('margin_left_$flag', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0, {
        isPrimary: true,
        linkedValueFieldName: "margin_left_$value",
        originalFieldName: "marginLeft",
    }, undefined),
    mojo.internal.StructField('margin_left_$value', 16, 0, mojo.internal.Int32, 0, false /* nullable */, 0, {
        isPrimary: false,
        originalFieldName: "marginLeft",
    }, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_GetThreadUrl_ParamsSpec.$, 'PageHandler_GetThreadUrl_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetThreadUrl_ResponseParamsSpec.$, 'PageHandler_GetThreadUrl_ResponseParams', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_MoveActiveTabToNewThreadIfShared_ParamsSpec.$, 'PageHandler_MoveActiveTabToNewThreadIfShared_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParamsSpec.$, 'PageHandler_MoveActiveTabToNewThreadIfShared_ResponseParams', [
    mojo.internal.StructField('moved', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetUrlForTask_ParamsSpec.$, 'PageHandler_GetUrlForTask_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetUrlForTask_ResponseParamsSpec.$, 'PageHandler_GetUrlForTask_ResponseParams', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetTaskId_ParamsSpec.$, 'PageHandler_SetTaskId_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsZeroState_ParamsSpec.$, 'PageHandler_IsZeroState_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsZeroState_ResponseParamsSpec.$, 'PageHandler_IsZeroState_ResponseParams', [
    mojo.internal.StructField('isZeroState', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsAiPage_ParamsSpec.$, 'PageHandler_IsAiPage_Params', [
    mojo.internal.StructField('url', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsAiPage_ResponseParamsSpec.$, 'PageHandler_IsAiPage_ResponseParams', [
    mojo.internal.StructField('isAiPage', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsPendingErrorPage_ParamsSpec.$, 'PageHandler_IsPendingErrorPage_Params', [
    mojo.internal.StructField('taskId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsPendingErrorPage_ResponseParamsSpec.$, 'PageHandler_IsPendingErrorPage_ResponseParams', [
    mojo.internal.StructField('isPendingErrorPage', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsEmbeddedPageErrorDocument_ParamsSpec.$, 'PageHandler_IsEmbeddedPageErrorDocument_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_IsEmbeddedPageErrorDocument_ResponseParamsSpec.$, 'PageHandler_IsEmbeddedPageErrorDocument_ResponseParams', [
    mojo.internal.StructField('isErrorDocument', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SetThreadTitle_ParamsSpec.$, 'PageHandler_SetThreadTitle_Params', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_IsShownInTab_ParamsSpec.$, 'PageHandler_IsShownInTab_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_IsShownInTab_ResponseParamsSpec.$, 'PageHandler_IsShownInTab_ResponseParams', [
    mojo.internal.StructField('isInTab', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenOnboardingHelpUi_ParamsSpec.$, 'PageHandler_OpenOnboardingHelpUi_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenAskGHelpUi_ParamsSpec.$, 'PageHandler_OpenAskGHelpUi_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnWebviewMessage_ParamsSpec.$, 'PageHandler_OnWebviewMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCommonSearchParams_ParamsSpec.$, 'PageHandler_GetCommonSearchParams_Params', [
    mojo.internal.StructField('isDarkMode', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('isSidePanel', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCommonSearchParams_ResponseParamsSpec.$, 'PageHandler_GetCommonSearchParams_ResponseParams', [
    mojo.internal.StructField('params', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OnboardingTooltipDismissed_ParamsSpec.$, 'PageHandler_OnboardingTooltipDismissed_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_AskGTooltipDismissed_ParamsSpec.$, 'PageHandler_AskGTooltipDismissed_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OnContextMenuOpened_ParamsSpec.$, 'PageHandler_OnContextMenuOpened_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_NotifySmartTabSharingTryItIphResult_ParamsSpec.$, 'PageHandler_NotifySmartTabSharingTryItIphResult_Params', [
    mojo.internal.StructField('accepted', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_NotifySmartTabSharingDefaultOnIphResult_ParamsSpec.$, 'PageHandler_NotifySmartTabSharingDefaultOnIphResult_Params', [
    mojo.internal.StructField('accepted', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RegisterWindow_ParamsSpec.$, 'PageHandler_RegisterWindow_Params', [
    mojo.internal.StructField('taskId', 0, 0, ContextualTaskIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('windowId', 16, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(PageHandler_CloseWindow_ParamsSpec.$, 'PageHandler_CloseWindow_Params', [
    mojo.internal.StructField('windowId', 0, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetThreadTitle_ParamsSpec.$, 'Page_SetThreadTitle_Params', [
    mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetTaskDetails_ParamsSpec.$, 'Page_SetTaskDetails_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('url', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('replaceNavigationEntry', 16, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 32],]);
mojo.internal.Struct(Page_OnSidePanelStateChanged_ParamsSpec.$, 'Page_OnSidePanelStateChanged_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_FocusComposebox_ParamsSpec.$, 'Page_FocusComposebox_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_PostAimMessage_ParamsSpec.$, 'Page_PostAimMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnHandshakeComplete_ParamsSpec.$, 'Page_OnHandshakeComplete_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_SetOAuthToken_ParamsSpec.$, 'Page_SetOAuthToken_Params', [
    mojo.internal.StructField('oauthToken', 0, 0, mojo.internal.String, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnCookieSyncCompleted_ParamsSpec.$, 'Page_OnCookieSyncCompleted_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_HideInput_ParamsSpec.$, 'Page_HideInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_RestoreInput_ParamsSpec.$, 'Page_RestoreInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_EnterBasicMode_ParamsSpec.$, 'Page_EnterBasicMode_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ExitBasicMode_ParamsSpec.$, 'Page_ExitBasicMode_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_InjectInput_ParamsSpec.$, 'Page_InjectInput_Params', [
    mojo.internal.StructField('input', 0, 0, InjectedInputSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_RemoveInjectedInput_ParamsSpec.$, 'Page_RemoveInjectedInput_Params', [
    mojo.internal.StructField('fileToken', 0, 0, UnguessableTokenSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnZeroStateChange_ParamsSpec.$, 'Page_OnZeroStateChange_Params', [
    mojo.internal.StructField('isZeroState', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_SetInNlm_ParamsSpec.$, 'Page_SetInNlm_Params', [
    mojo.internal.StructField('inNlm', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_OnLensOverlayStateChanged_ParamsSpec.$, 'Page_OnLensOverlayStateChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('maybeShowOverlayHintText', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_ShowErrorPage_ParamsSpec.$, 'Page_ShowErrorPage_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_HideErrorPage_ParamsSpec.$, 'Page_HideErrorPage_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowOauthErrorDialog_ParamsSpec.$, 'Page_ShowOauthErrorDialog_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UpdateComposeboxPosition_ParamsSpec.$, 'Page_UpdateComposeboxPosition_Params', [
    mojo.internal.StructField('position', 0, 0, ComposeboxPositionSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_LockInput_ParamsSpec.$, 'Page_LockInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_UnlockInput_ParamsSpec.$, 'Page_UnlockInput_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_TurnOnSmartTabSharing_ParamsSpec.$, 'Page_TurnOnSmartTabSharing_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowSmartTabSharingTryItIph_ParamsSpec.$, 'Page_ShowSmartTabSharingTryItIph_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_ShowSmartTabSharingDefaultOnIph_ParamsSpec.$, 'Page_ShowSmartTabSharingDefaultOnIph_Params', [], [[0, 8],]);
mojo.internal.Struct(Page_OnWindowClosed_ParamsSpec.$, 'Page_OnWindowClosed_Params', [
    mojo.internal.StructField('windowId', 0, 0, ContextualWindowIdSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(Page_ResetForNewThread_ParamsSpec.$, 'Page_ResetForNewThread_Params', [
    mojo.internal.StructField('taskId', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('threadUrl', 8, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('pageHandler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandlerFactory_CreateExtensionPageHandler_ParamsSpec.$, 'ExtensionPageHandlerFactory_CreateExtensionPageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(ExtensionPageRemote), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(ExtensionPageHandlerPendingReceiver), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandler_GetHandshakeMessage_ParamsSpec.$, 'ExtensionPageHandler_GetHandshakeMessage_Params', [
    mojo.internal.StructField('documentId', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_GetHandshakeMessage_ResponseParamsSpec.$, 'ExtensionPageHandler_GetHandshakeMessage_ResponseParams', [
    mojo.internal.StructField('message', 0, 0, ProtoWrapperSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_OnWebviewMessage_ParamsSpec.$, 'ExtensionPageHandler_OnWebviewMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('documentId', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPageHandler_SetTaskId_ParamsSpec.$, 'ExtensionPageHandler_SetTaskId_Params', [
    mojo.internal.StructField('uuid', 0, 0, UuidSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_GetLensCropPreview_ParamsSpec.$, 'ExtensionPageHandler_GetLensCropPreview_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPageHandler_GetLensCropPreview_ResponseParamsSpec.$, 'ExtensionPageHandler_GetLensCropPreview_ResponseParams', [
    mojo.internal.StructField('dataUri', 0, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPageHandler_RemoveLensCrop_ParamsSpec.$, 'ExtensionPageHandler_RemoveLensCrop_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPage_PostAimMessage_ParamsSpec.$, 'ExtensionPage_PostAimMessage_Params', [
    mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_PostSearchMessage_ParamsSpec.$, 'ExtensionPage_PostSearchMessage_Params', [
    mojo.internal.StructField('message', 0, 0, ProtoWrapperSpec.$, null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('documentId', 8, 0, mojo.internal.String, null, true /* nullable */, 0, undefined, undefined),
], [[0, 24],]);
mojo.internal.Struct(ExtensionPage_OnHandshakeComplete_ParamsSpec.$, 'ExtensionPage_OnHandshakeComplete_Params', [], [[0, 8],]);
mojo.internal.Struct(ExtensionPage_OnLensOverlayStateChanged_ParamsSpec.$, 'ExtensionPage_OnLensOverlayStateChanged_Params', [
    mojo.internal.StructField('isShowing', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_OnLensCropUpdated_ParamsSpec.$, 'ExtensionPage_OnLensCropUpdated_Params', [
    mojo.internal.StructField('dataUri', 0, 0, UrlSpec.$, null, false /* nullable */, 0, undefined, undefined),
], [[0, 16],]);
mojo.internal.Struct(ExtensionPage_OnTabContextUpdated_ParamsSpec.$, 'ExtensionPage_OnTabContextUpdated_Params', [
    mojo.internal.StructField('tabs', 0, 0, mojo.internal.Array(TabInfoSpec.$, false), null, false /* nullable */, 0, undefined, undefined),
    mojo.internal.StructField('submittedTabIds', 8, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false /* nullable */, 0, undefined, undefined),
], [[0, 24],]);

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getArrayBufferFromBigBuffer(bigBuffer) {
    if (bigBuffer.bytes !== undefined) {
        return new Uint8Array(bigBuffer.bytes).buffer;
    }
    if (bigBuffer.sharedMemory !== undefined) {
        return bigBuffer.sharedMemory.bufferHandle
            .mapBuffer(0, bigBuffer.sharedMemory.size)
            .buffer;
    }
    throw new Error('Invalid BigBuffer');
}

// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// LINT.IfChange(ContextualTasksExtensionHandshakeStatus)
var HandshakeStatus;
(function (HandshakeStatus) {
    HandshakeStatus[HandshakeStatus["SUCCESS"] = 0] = "SUCCESS";
    HandshakeStatus[HandshakeStatus["HOST_ORIGIN_REJECTED"] = 1] = "HOST_ORIGIN_REJECTED";
    HandshakeStatus[HandshakeStatus["FRAME_DETACHED"] = 2] = "FRAME_DETACHED";
    HandshakeStatus[HandshakeStatus["MOJO_REQUEST_FAILED"] = 3] = "MOJO_REQUEST_FAILED";
    HandshakeStatus[HandshakeStatus["INVALID_DOCUMENT_ID"] = 4] = "INVALID_DOCUMENT_ID";
})(HandshakeStatus || (HandshakeStatus = {}));
const HANDSHAKE_STATUS_ENUM_SIZE = 5;
// LINT.ThenChange(
//   //chrome/browser/contextual_tasks/contextual_tasks_utils.h:ContextualTasksExtensionHandshakeStatus,
//   //tools/metrics/histograms/metadata/contextual_tasks/enums.xml:ContextualTasksExtensionHandshakeStatus
// )
// LINT.IfChange(ContextualTasksExtensionPostMessageError)
var PostMessageError;
(function (PostMessageError) {
    PostMessageError[PostMessageError["UNTRUSTED_ORIGIN"] = 0] = "UNTRUSTED_ORIGIN";
    PostMessageError[PostMessageError["UNEXPECTED_DATA_TYPE"] = 1] = "UNEXPECTED_DATA_TYPE";
    PostMessageError[PostMessageError["MESSAGE_TOO_LARGE"] = 2] = "MESSAGE_TOO_LARGE";
    PostMessageError[PostMessageError["INVALID_DOCUMENT_ID"] = 3] = "INVALID_DOCUMENT_ID";
    PostMessageError[PostMessageError["PROTO_PARSE_FAILED"] = 4] = "PROTO_PARSE_FAILED";
    PostMessageError[PostMessageError["MOJO_PIPE_CLOSED"] = 5] = "MOJO_PIPE_CLOSED";
})(PostMessageError || (PostMessageError = {}));
const POST_MESSAGE_ERROR_ENUM_SIZE = 6;
// LINT.ThenChange(
//   //chrome/browser/contextual_tasks/contextual_tasks_utils.h:ContextualTasksExtensionPostMessageError,
//   //tools/metrics/histograms/metadata/contextual_tasks/enums.xml:ContextualTasksExtensionPostMessageError
// )
function recordExtensionHandshakeStatus(status) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordEnumerationValue('ContextualTasks.ExtensionHandshake.Status', status, HANDSHAKE_STATUS_ENUM_SIZE);
    }
}
function recordExtensionPostMessageError(error) {
    const metricsService = chrome.histograms || chrome.metricsPrivate;
    if (metricsService) {
        metricsService.recordEnumerationValue('ContextualTasks.ExtensionPostMessage.Error', error, POST_MESSAGE_ERROR_ENUM_SIZE);
    }
}
const CHROME_SEARCH_CHANNEL_NAME = 'chrome-search-channel';
const MAX_MESSAGE_BYTES = 1024 * 1024;
const portsByDocumentId = new Map();
let extensionPageHandler = null;
let extensionPageRouter = null;
function postProtoMessageToPort(documentId, port, message) {
    try {
        const buffer = getArrayBufferFromBigBuffer(message.smuggled);
        if (buffer.byteLength === 0) {
            return false;
        }
        port.postMessage({
            type: CHROME_SEARCH_CHANNEL_NAME,
            payload: Array.from(new Uint8Array(buffer)),
        });
        return true;
    }
    catch {
        handleSearchPortDisconnect(documentId, port);
        return false;
    }
}
function resetExtensionPageHandler() {
    if (extensionPageHandler) {
        extensionPageHandler.$.close();
        extensionPageHandler = null;
    }
    if (extensionPageRouter) {
        extensionPageRouter.$.close();
        extensionPageRouter = null;
    }
}
function getExtensionPageHandler() {
    if (!extensionPageHandler) {
        extensionPageRouter = new ExtensionPageCallbackRouter();
        extensionPageRouter.postSearchMessage.addListener((message, documentId) => {
            if (!documentId) {
                recordExtensionPostMessageError(PostMessageError.INVALID_DOCUMENT_ID);
                return;
            }
            const port = portsByDocumentId.get(documentId);
            if (!port || !postProtoMessageToPort(documentId, port, message)) {
                return;
            }
        });
        extensionPageHandler = new ExtensionPageHandlerRemote();
        const factory = ExtensionPageHandlerFactory.getRemote();
        factory.createExtensionPageHandler(extensionPageRouter.$.bindNewPipeAndPassRemote(), extensionPageHandler.$.bindNewPipeAndPassReceiver());
        extensionPageHandler.onConnectionError.addListener(() => {
            resetExtensionPageHandler();
        });
    }
    return extensionPageHandler;
}
function handleSearchPortMessage(documentId, port, message) {
    if (portsByDocumentId.get(documentId) !== port) {
        return;
    }
    if (!message || typeof message !== 'object') {
        recordExtensionPostMessageError(PostMessageError.UNEXPECTED_DATA_TYPE);
        return;
    }
    const searchMsg = message;
    if (searchMsg.type !== CHROME_SEARCH_CHANNEL_NAME ||
        !Array.isArray(searchMsg.payload) || searchMsg.payload.length === 0) {
        recordExtensionPostMessageError(PostMessageError.UNEXPECTED_DATA_TYPE);
        return;
    }
    if (searchMsg.payload.length > MAX_MESSAGE_BYTES) {
        recordExtensionPostMessageError(PostMessageError.MESSAGE_TOO_LARGE);
        return;
    }
    getExtensionPageHandler().onWebviewMessage(searchMsg.payload, documentId);
}
function handleSearchPortDisconnect(documentId, port) {
    if (portsByDocumentId.get(documentId) === port) {
        portsByDocumentId.delete(documentId);
    }
    port.disconnect();
    if (portsByDocumentId.size === 0) {
        resetExtensionPageHandler();
    }
}
async function sendSearchPortHandshake(documentId, port) {
    try {
        const { message } = await getExtensionPageHandler().getHandshakeMessage(documentId);
        if (portsByDocumentId.get(documentId) !== port) {
            return;
        }
        if (!postProtoMessageToPort(documentId, port, message)) {
            handleSearchPortDisconnect(documentId, port);
        }
    }
    catch {
        recordExtensionHandshakeStatus(HandshakeStatus.MOJO_REQUEST_FAILED);
        handleSearchPortDisconnect(documentId, port);
    }
}
// LINT.IfChange(AllowedOrigins)
function urlMatchesAllowList(origin) {
    try {
        const url = new URL(origin);
        // 
        if (url.protocol === 'file:' ||
            (url.protocol === 'http:' && url.hostname === 'localhost')) {
            return true;
        }
        // 
        if (url.protocol !== 'https:') {
            return false;
        }
        const host = url.hostname;
        return host === 'google.com' || host.endsWith('.google.com') ||
            host.endsWith('.corp.google.com') ||
            host.endsWith('.prod.google.com') || host === 'googlers.com' ||
            host.endsWith('.googlers.com');
    }
    catch {
        return false;
    }
}
// LINT.ThenChange(
//   manifest.json:AllowedOrigins,
//   manifest.json:WebAccessibleMatches
// )
chrome.runtime.onConnectExternal.addListener((port) => {
    // Only accept connections on the dedicated search channel.
    if (port.name !== CHROME_SEARCH_CHANNEL_NAME) {
        port.disconnect();
        return;
    }
    // Verify the connecting frame belongs to an allowlisted Google origin.
    if (!port.sender?.origin || !urlMatchesAllowList(port.sender.origin)) {
        recordExtensionPostMessageError(PostMessageError.UNTRUSTED_ORIGIN);
        recordExtensionHandshakeStatus(HandshakeStatus.HOST_ORIGIN_REJECTED);
        port.disconnect();
        return;
    }
    // Require a valid extension documentId to route messages to the right tab
    // or side panel WebContents in the browser process.
    const documentId = port.sender.documentId;
    if (typeof documentId !== 'string' || documentId.length === 0) {
        recordExtensionHandshakeStatus(HandshakeStatus.INVALID_DOCUMENT_ID);
        port.disconnect();
        return;
    }
    // If this document already has an open port, replace and disconnect the old
    // port so stale onDisconnect events cannot drop the new connection.
    const existingPort = portsByDocumentId.get(documentId);
    portsByDocumentId.set(documentId, port);
    if (existingPort && existingPort !== port) {
        existingPort.disconnect();
    }
    // Forward incoming search messages and clean up on port disconnect.
    port.onMessage.addListener((message) => {
        handleSearchPortMessage(documentId, port, message);
    });
    port.onDisconnect.addListener(() => {
        handleSearchPortDisconnect(documentId, port);
    });
    // Kick off the initial search handshake with the browser process.
    sendSearchPortHandshake(documentId, port);
});
chrome.runtime.onMessageExternal.addListener(async (message, sender) => {
    if (!sender.origin || !URL.parse(sender.origin) ||
        !urlMatchesAllowList(sender.origin)) {
        return { error: 'Unauthorized sender origin' };
    }
    if (!sender.documentId) {
        return { error: 'Missing documentId' };
    }
    if (message.type === 'contextualTasksPrivate.getState') {
        try {
            const state = await chrome.contextualTasksPrivate.getState(sender.documentId);
            return { state };
        }
        catch (err) {
            return { error: err.message || 'Unknown error' };
        }
    }
    if (message.type === 'contextualTasksPrivate.launchPanelInNewTab' &&
        message.args) {
        const details = message.args;
        if (!details.targetUrl || !URL.parse(details.targetUrl)) {
            return { error: 'Invalid targetUrl' };
        }
        const aimParams = details.aimParams || {};
        try {
            // LINT.IfChange(AimParamsCall)
            const result = await chrome.contextualTasksPrivate.launchPanelInNewTab({
                aimParams: {
                    ntc: aimParams.ntc ?? '',
                    mstk: aimParams.mstk ?? '',
                    aioh: aimParams.aioh ?? '',
                    csuir: aimParams.csuir ?? '',
                    ved: aimParams.ved ?? '',
                    cs: aimParams.cs ?? '',
                    sxsrf: aimParams.sxsrf ?? '',
                    ei: aimParams.ei ?? '',
                    q: aimParams.q ?? '',
                },
                targetUrl: details.targetUrl,
                documentId: sender.documentId,
            });
            // LINT.ThenChange(//chrome/common/extensions/api/contextual_tasks_private.webidl:AimParams)
            return result;
        }
        catch (err) {
            return { error: err.message || 'Unknown error' };
        }
    }
    return { error: `Unhandled message: ${JSON.stringify(message)}` };
});

export { HandshakeStatus, PostMessageError };
//# sourceMappingURL=background.rollup.js.map
