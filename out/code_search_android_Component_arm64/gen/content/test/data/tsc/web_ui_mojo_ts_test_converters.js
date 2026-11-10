// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestNode } from './web_ui_mojo_ts_test_mapped_types.js';
export class NestedTypeConverter {
    nested(mappedType) {
        return mappedType.next;
    }
    convert(dataView) {
        return new TestNode(dataView.nested);
    }
}
// This should be trivial to implement because StringDict is synonymous
// with mapped type. If typemapping is working correctly, we should be
// able to switch back and forth between MappedDictType and StringDictType
// freely.
export class StringDictConverter {
    data(dict) {
        return dict;
    }
    convert(view) {
        return view.data;
    }
}
export class OptionalTypemapConverter {
    optionalInt(mapped) {
        return mapped.optionalInt;
    }
    bools(mapped) {
        return mapped.bools;
    }
    optionalMap(mapped) {
        return mapped.optionalMap;
    }
    convert(view) {
        return {
            optionalInt: view.optionalInt,
            bools: view.bools,
            optionalMap: view.optionalMap,
        };
    }
}
export class TypeWithNestedEnumTypemap {
    isNativeType = true;
    value;
    constructor(value) {
        this.value = value;
    }
}
export class TypeWithNestedEnumConverter {
    someField(typemap) {
        return typemap.value;
    }
    convert(view) {
        return new TypeWithNestedEnumTypemap(view.someField);
    }
}
export var NativeEnum;
(function (NativeEnum) {
    NativeEnum[NativeEnum["kNothing"] = 0] = "kNothing";
    NativeEnum[NativeEnum["kSomething"] = 1] = "kSomething";
})(NativeEnum || (NativeEnum = {}));
