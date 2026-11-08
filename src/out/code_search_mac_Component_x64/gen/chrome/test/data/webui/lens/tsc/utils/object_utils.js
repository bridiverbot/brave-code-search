// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CenterRotatedBox_CoordinateType } from 'chrome-untrusted://lens-overlay/geometry.mojom-webui.js';
import { Polygon_CoordinateType, Polygon_VertexOrdering } from 'chrome-untrusted://lens-overlay/polygon.mojom-webui.js';
import { assertEquals, assertLT, assertNotEquals } from 'chrome-untrusted://webui-test/chai_assert.js';
export function assertWithinThreshold(value1, value2, threshold = 1e-6) {
    assertLT(Math.abs(value1 - value2), threshold, `Expected ${value1} and ${value2} to be within ${threshold}`);
}
export function assertPixelsWithinThreshold(value1, value2) {
    const threshold = 1e-6;
    const pxIndex1 = value1.lastIndexOf('px');
    assertNotEquals(-1, pxIndex1);
    const pixels1 = Number(value1.substring(0, pxIndex1));
    const pxIndex2 = value2.lastIndexOf('px');
    assertNotEquals(-1, pxIndex2);
    const pixels2 = Number(value2.substring(0, pxIndex2));
    assertLT(Math.abs(pixels1 - pixels2), threshold, `Expected ${value1} and ${value2} to be within ${threshold}`);
}
export function assertBoxesWithinThreshold(box1, box2) {
    assertWithinThreshold(box1.box.x, box2.box.x);
    assertWithinThreshold(box1.box.y, box2.box.y);
    assertWithinThreshold(box1.box.height, box2.box.height);
    assertWithinThreshold(box1.box.width, box2.box.width);
    assertEquals(box1.rotation, box2.rotation);
    assertEquals(box1.coordinateType, box2.coordinateType);
}
export function createObject(id, boundingBox, includeSegmentationMask) {
    const segmentationPolygon = [];
    if (includeSegmentationMask) {
        segmentationPolygon.push({
            vertex: [
                {
                    x: boundingBox.x,
                    y: boundingBox.y,
                },
                {
                    x: boundingBox.x + boundingBox.width,
                    y: boundingBox.y,
                },
                {
                    x: boundingBox.x + boundingBox.width,
                    y: boundingBox.y + boundingBox.height,
                },
                {
                    x: boundingBox.x,
                    y: boundingBox.y + boundingBox.height,
                },
            ],
            vertexOrdering: Polygon_VertexOrdering.kClockwise,
            coordinateType: Polygon_CoordinateType.kNormalized,
        });
    }
    return {
        id,
        geometry: {
            boundingBox: {
                box: boundingBox,
                rotation: 0,
                coordinateType: CenterRotatedBox_CoordinateType.kNormalized,
            },
            segmentationPolygon: segmentationPolygon,
        },
    };
}
