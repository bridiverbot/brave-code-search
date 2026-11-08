import {html} from '//resources/lit/v3_0/lit.rollup.js';
import type {FingerprintProgressArcElement} from './fingerprint_progress_arc.js';

export function getHtml(this: FingerprintProgressArcElement) {
  return html`<!--_html_template_start_-->    <div id="canvasDiv">
      <canvas id="canvas" height="240" width="460"></canvas>
      <cr-lottie id="scanningAnimation" aria-hidden="true"
          ?autoplay="${this.autoplay}">
      </cr-lottie>
      <cr-icon id="fingerprintScanned" hidden></cr-icon>
    </div>
<!--_html_template_end_-->`;
}