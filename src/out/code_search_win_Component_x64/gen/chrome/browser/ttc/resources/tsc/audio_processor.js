// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class AudioProcessor extends AudioWorkletProcessor {
    bufferSize;
    buffer;
    bufferIndex;
    constructor() {
        super();
        // Buffer size of 2048 samples at 16kHz is approx 128ms.
        // This reduces WebSocket message frequency from ~125Hz (every 8ms) to ~8Hz,
        // reducing CPU overhead and network congestion while maintaining acceptable
        // latency.
        // TODO(bokan): Consider making this parameterizable.
        this.bufferSize = 2048;
        this.buffer = new Float32Array(this.bufferSize);
        this.bufferIndex = 0;
    }
    process(inputs, _outputs, _parameters) {
        const input = inputs[0];
        if (input && input.length > 0) {
            const inputChannel = input[0]; // First channel (mono)
            if (inputChannel) {
                // Accumulate samples into buffer
                for (let i = 0; i < inputChannel.length; i++) {
                    this.buffer[this.bufferIndex++] = inputChannel[i];
                    // When buffer is full, send to main thread
                    if (this.bufferIndex >= this.bufferSize) {
                        this.flush();
                    }
                }
            }
        }
        // Return true to keep the processor alive
        return true;
    }
    flush() {
        // Send a copy of the buffer to the main thread
        const bufferToSend = this.buffer.slice(0, this.bufferSize);
        this.port.postMessage({ type: 'audio', data: bufferToSend });
        // Reset for next batch
        this.bufferIndex = 0;
    }
}
registerProcessor('audio-processor', AudioProcessor);
export {};
