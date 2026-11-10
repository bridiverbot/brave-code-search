// Copyright 2026 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dedupingMixin } from 'chrome://resources/lit/v3_0/lit.rollup.js';
export const TooltipMixinLit = dedupingMixin((superClass) => {
    class TooltipMixinLit extends superClass {
        showTooltipAtTarget(tooltip, target) {
            if (!tooltip.for) {
                // In the case that the tooltip and target are not associated with
                // the for property, manually set the target of the tooltip and
                // update its position.
                tooltip.target = target;
                tooltip.updatePosition();
            }
            const hide = () => {
                tooltip.hide();
                target.removeEventListener('mouseleave', hide);
                target.removeEventListener('blur', hide);
                target.removeEventListener('click', hide);
                tooltip.removeEventListener('mouseenter', hide);
            };
            target.addEventListener('mouseleave', hide);
            target.addEventListener('blur', hide);
            target.addEventListener('click', hide);
            tooltip.addEventListener('mouseenter', hide);
            tooltip.show();
        }
    }
    return TooltipMixinLit;
});
