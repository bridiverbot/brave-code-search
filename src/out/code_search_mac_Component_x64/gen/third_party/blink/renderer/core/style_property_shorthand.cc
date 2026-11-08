/*
 * (C) 1999-2003 Lars Knoll (knoll@kde.org)
 * Copyright (C) 2004, 2005, 2006, 2007, 2008 Apple Inc. All rights reserved.
 * Copyright (C) 2013 Intel Corporation. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public License
 * along with this library; see the file COPYING.LIB.  If not, write to
 * the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301, USA.
 */

// Generated from template:
//   core/css/templates/style_property_shorthand.cc.tmpl
// and input files:
//   ../../third_party/blink/renderer/core/css/computed_style_field_aliases.json5
//   ../../third_party/blink/renderer/core/css/css_properties.json5
//   ../../third_party/blink/renderer/platform/runtime_enabled_features.json5


#include "third_party/blink/renderer/core/style_property_shorthand.h"

#include <iterator>

#include "third_party/blink/renderer/core/css/properties/longhands.h"
#include "third_party/blink/renderer/platform/runtime_enabled_features.h"


namespace blink {

static const StylePropertyShorthand* alternativeLineClampShorthandShorthand1() {
  if (!RuntimeEnabledFeatures::CSSLineClampAsShorthandEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMaxLines(),
    &GetCSSPropertyBlockEllipsis(),
    &GetCSSPropertyContinue(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kAlternativeLineClampShorthand, longhands);
  return &shorthand;
}

const StylePropertyShorthand& alternativeLineClampShorthandShorthand() {
  if (const auto* s = alternativeLineClampShorthandShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::CSSLineClampAsShorthandEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static StylePropertyShorthand empty_shorthand;
  return empty_shorthand;
}

static const StylePropertyShorthand* alternativeWebkitLineClampShorthandShorthand1() {
  if (!RuntimeEnabledFeatures::CSSLineClampAsShorthandEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMaxLines(),
    &GetCSSPropertyBlockEllipsis(),
    &GetCSSPropertyContinue(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kAlternativeWebkitLineClampShorthand, longhands);
  return &shorthand;
}

const StylePropertyShorthand& alternativeWebkitLineClampShorthandShorthand() {
  if (const auto* s = alternativeWebkitLineClampShorthandShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::CSSLineClampAsShorthandEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static StylePropertyShorthand empty_shorthand;
  return empty_shorthand;
}

const StylePropertyShorthand& animationShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyAnimationDuration(),
    &GetCSSPropertyAnimationTimingFunction(),
    &GetCSSPropertyAnimationDelay(),
    &GetCSSPropertyAnimationIterationCount(),
    &GetCSSPropertyAnimationDirection(),
    &GetCSSPropertyAnimationFillMode(),
    &GetCSSPropertyAnimationPlayState(),
    &GetCSSPropertyAnimationName(),
    &GetCSSPropertyAnimationTimeline(),
    &GetCSSPropertyAnimationRangeStart(),
    &GetCSSPropertyAnimationRangeEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kAnimation, longhands);
  return shorthand;
}

const StylePropertyShorthand& animationRangeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyAnimationRangeStart(),
    &GetCSSPropertyAnimationRangeEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kAnimationRange, longhands);
  return shorthand;
}

const StylePropertyShorthand& backgroundShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBackgroundImage(),
    &GetCSSPropertyBackgroundPositionX(),
    &GetCSSPropertyBackgroundPositionY(),
    &GetCSSPropertyBackgroundSize(),
    &GetCSSPropertyBackgroundRepeat(),
    &GetCSSPropertyBackgroundAttachment(),
    &GetCSSPropertyBackgroundOrigin(),
    &GetCSSPropertyBackgroundClip(),
    &GetCSSPropertyBackgroundColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBackground, longhands);
  return shorthand;
}

const StylePropertyShorthand& backgroundPositionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBackgroundPositionX(),
    &GetCSSPropertyBackgroundPositionY(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBackgroundPosition, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopColor(),
    &GetCSSPropertyBorderTopStyle(),
    &GetCSSPropertyBorderTopWidth(),
    &GetCSSPropertyBorderRightColor(),
    &GetCSSPropertyBorderRightStyle(),
    &GetCSSPropertyBorderRightWidth(),
    &GetCSSPropertyBorderBottomColor(),
    &GetCSSPropertyBorderBottomStyle(),
    &GetCSSPropertyBorderBottomWidth(),
    &GetCSSPropertyBorderLeftColor(),
    &GetCSSPropertyBorderLeftStyle(),
    &GetCSSPropertyBorderLeftWidth(),
    &GetCSSPropertyBorderImageSource(),
    &GetCSSPropertyBorderImageSlice(),
    &GetCSSPropertyBorderImageWidth(),
    &GetCSSPropertyBorderImageOutset(),
    &GetCSSPropertyBorderImageRepeat(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorder, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockStartColor(),
    &GetCSSPropertyBorderBlockStartStyle(),
    &GetCSSPropertyBorderBlockStartWidth(),
    &GetCSSPropertyBorderBlockEndColor(),
    &GetCSSPropertyBorderBlockEndStyle(),
    &GetCSSPropertyBorderBlockEndWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockColorShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockStartColor(),
    &GetCSSPropertyBorderBlockEndColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockColor, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockEndWidth(),
    &GetCSSPropertyBorderBlockEndStyle(),
    &GetCSSPropertyBorderBlockEndColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockEndRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderEndStartRadius(),
    &GetCSSPropertyBorderEndEndRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockEndRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockStartWidth(),
    &GetCSSPropertyBorderBlockStartStyle(),
    &GetCSSPropertyBorderBlockStartColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockStartRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartStartRadius(),
    &GetCSSPropertyBorderStartEndRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockStartRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockStyleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockStartStyle(),
    &GetCSSPropertyBorderBlockEndStyle(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockStyle, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBlockWidthShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBlockStartWidth(),
    &GetCSSPropertyBorderBlockEndWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBlockWidth, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBottomShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBottomWidth(),
    &GetCSSPropertyBorderBottomStyle(),
    &GetCSSPropertyBorderBottomColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBottom, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderBottomRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBottomLeftRadius(),
    &GetCSSPropertyBorderBottomRightRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderBottomRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderColorShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopColor(),
    &GetCSSPropertyBorderRightColor(),
    &GetCSSPropertyBorderBottomColor(),
    &GetCSSPropertyBorderLeftColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderColor, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderImageShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderImageSource(),
    &GetCSSPropertyBorderImageSlice(),
    &GetCSSPropertyBorderImageWidth(),
    &GetCSSPropertyBorderImageOutset(),
    &GetCSSPropertyBorderImageRepeat(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderImage, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineStartColor(),
    &GetCSSPropertyBorderInlineStartStyle(),
    &GetCSSPropertyBorderInlineStartWidth(),
    &GetCSSPropertyBorderInlineEndColor(),
    &GetCSSPropertyBorderInlineEndStyle(),
    &GetCSSPropertyBorderInlineEndWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineColorShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineStartColor(),
    &GetCSSPropertyBorderInlineEndColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineColor, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineEndWidth(),
    &GetCSSPropertyBorderInlineEndStyle(),
    &GetCSSPropertyBorderInlineEndColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineEndRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartEndRadius(),
    &GetCSSPropertyBorderEndEndRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineEndRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineStartWidth(),
    &GetCSSPropertyBorderInlineStartStyle(),
    &GetCSSPropertyBorderInlineStartColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineStartRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartStartRadius(),
    &GetCSSPropertyBorderEndStartRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineStartRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineStyleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineStartStyle(),
    &GetCSSPropertyBorderInlineEndStyle(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineStyle, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderInlineWidthShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderInlineStartWidth(),
    &GetCSSPropertyBorderInlineEndWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderInlineWidth, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderLeftShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderLeftWidth(),
    &GetCSSPropertyBorderLeftStyle(),
    &GetCSSPropertyBorderLeftColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderLeft, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderLeftRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyBorderBottomLeftRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderLeftRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyBorderBottomRightRadius(),
    &GetCSSPropertyBorderBottomLeftRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderRightShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderRightWidth(),
    &GetCSSPropertyBorderRightStyle(),
    &GetCSSPropertyBorderRightColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderRight, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderRightRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyBorderBottomRightRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderRightRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderSpacingShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyWebkitBorderHorizontalSpacing(),
    &GetCSSPropertyWebkitBorderVerticalSpacing(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderSpacing, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderStyleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopStyle(),
    &GetCSSPropertyBorderRightStyle(),
    &GetCSSPropertyBorderBottomStyle(),
    &GetCSSPropertyBorderLeftStyle(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderStyle, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderTopShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopWidth(),
    &GetCSSPropertyBorderTopStyle(),
    &GetCSSPropertyBorderTopColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderTop, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderTopRadiusShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyBorderTopRightRadius(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderTopRadius, longhands);
  return shorthand;
}

const StylePropertyShorthand& borderWidthShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopWidth(),
    &GetCSSPropertyBorderRightWidth(),
    &GetCSSPropertyBorderBottomWidth(),
    &GetCSSPropertyBorderLeftWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kBorderWidth, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleWidth(),
    &GetCSSPropertyColumnRuleStyle(),
    &GetCSSPropertyColumnRuleColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRule, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleInsetShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetCapEnd(),
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRuleInset, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleInsetCapShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetCapEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRuleInsetCap, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleInsetEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapEnd(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRuleInsetEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleInsetJunctionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRuleInsetJunction, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnRuleInsetStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumnRuleInsetStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& columnsShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnWidth(),
    &GetCSSPropertyColumnCount(),
    &GetCSSPropertyColumnHeight(),
    &GetCSSPropertyColumnWrap(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kColumns, longhands);
  return shorthand;
}

const StylePropertyShorthand& containIntrinsicSizeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyContainIntrinsicWidth(),
    &GetCSSPropertyContainIntrinsicHeight(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kContainIntrinsicSize, longhands);
  return shorthand;
}

const StylePropertyShorthand& containerShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyContainerName(),
    &GetCSSPropertyContainerType(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kContainer, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyCornerTopRightShape(),
    &GetCSSPropertyBorderBottomRightRadius(),
    &GetCSSPropertyCornerBottomRightShape(),
    &GetCSSPropertyBorderBottomLeftRadius(),
    &GetCSSPropertyCornerBottomLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCorner, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBlockEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderEndStartRadius(),
    &GetCSSPropertyCornerEndStartShape(),
    &GetCSSPropertyBorderEndEndRadius(),
    &GetCSSPropertyCornerEndEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBlockEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBlockEndShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerEndStartShape(),
    &GetCSSPropertyCornerEndEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBlockEndShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBlockStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartStartRadius(),
    &GetCSSPropertyCornerStartStartShape(),
    &GetCSSPropertyBorderStartEndRadius(),
    &GetCSSPropertyCornerStartEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBlockStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBlockStartShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerStartStartShape(),
    &GetCSSPropertyCornerStartEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBlockStartShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBottomShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBottomLeftRadius(),
    &GetCSSPropertyCornerBottomLeftShape(),
    &GetCSSPropertyBorderBottomRightRadius(),
    &GetCSSPropertyCornerBottomRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBottom, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBottomLeftShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBottomLeftRadius(),
    &GetCSSPropertyCornerBottomLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBottomLeft, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBottomRightShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderBottomRightRadius(),
    &GetCSSPropertyCornerBottomRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBottomRight, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerBottomShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerBottomLeftShape(),
    &GetCSSPropertyCornerBottomRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerBottomShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerEndEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderEndEndRadius(),
    &GetCSSPropertyCornerEndEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerEndEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerEndStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderEndStartRadius(),
    &GetCSSPropertyCornerEndStartShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerEndStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerInlineEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartEndRadius(),
    &GetCSSPropertyCornerStartEndShape(),
    &GetCSSPropertyBorderEndEndRadius(),
    &GetCSSPropertyCornerEndEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerInlineEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerInlineEndShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerStartEndShape(),
    &GetCSSPropertyCornerEndEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerInlineEndShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerInlineStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartStartRadius(),
    &GetCSSPropertyCornerStartStartShape(),
    &GetCSSPropertyBorderEndStartRadius(),
    &GetCSSPropertyCornerEndStartShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerInlineStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerInlineStartShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerStartStartShape(),
    &GetCSSPropertyCornerEndStartShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerInlineStartShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerLeftShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyBorderBottomLeftRadius(),
    &GetCSSPropertyCornerBottomLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerLeft, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerLeftShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyCornerBottomLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerLeftShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerRightShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyCornerTopRightShape(),
    &GetCSSPropertyBorderBottomRightRadius(),
    &GetCSSPropertyCornerBottomRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerRight, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerRightShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerTopRightShape(),
    &GetCSSPropertyCornerBottomRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerRightShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyCornerTopRightShape(),
    &GetCSSPropertyCornerBottomRightShape(),
    &GetCSSPropertyCornerBottomLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerStartEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartEndRadius(),
    &GetCSSPropertyCornerStartEndShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerStartEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerStartStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderStartStartRadius(),
    &GetCSSPropertyCornerStartStartShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerStartStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerTopShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyCornerTopRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerTop, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerTopLeftShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopLeftRadius(),
    &GetCSSPropertyCornerTopLeftShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerTopLeft, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerTopRightShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBorderTopRightRadius(),
    &GetCSSPropertyCornerTopRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerTopRight, longhands);
  return shorthand;
}

const StylePropertyShorthand& cornerTopShapeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyCornerTopLeftShape(),
    &GetCSSPropertyCornerTopRightShape(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kCornerTopShape, longhands);
  return shorthand;
}

const StylePropertyShorthand& flexShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFlexGrow(),
    &GetCSSPropertyFlexShrink(),
    &GetCSSPropertyFlexBasis(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFlex, longhands);
  return shorthand;
}

const StylePropertyShorthand& flexFlowShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFlexDirection(),
    &GetCSSPropertyFlexWrap(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFlexFlow, longhands);
  return shorthand;
}

static const StylePropertyShorthand* fontShorthand1() {
  if (!RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;
  if (RuntimeEnabledFeatures::FontLanguageOverrideEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontStyle(),
    &GetCSSPropertyFontVariantLigatures(),
    &GetCSSPropertyFontVariantCaps(),
    &GetCSSPropertyFontVariantNumeric(),
    &GetCSSPropertyFontVariantEastAsian(),
    &GetCSSPropertyFontVariantAlternates(),
    &GetCSSPropertyFontVariantPosition(),
    &GetCSSPropertyFontVariantEmoji(),
    &GetCSSPropertyFontWeight(),
    &GetCSSPropertyFontStretch(),
    &GetCSSPropertyFontSize(),
    &GetCSSPropertyLineHeight(),
    &GetCSSPropertyFontFamily(),
    &GetCSSPropertyFontOpticalSizing(),
    &GetCSSPropertyFontSizeAdjust(),
    &GetCSSPropertyFontKerning(),
    &GetCSSPropertyFontFeatureSettings(),
    &GetCSSPropertyFontVariationSettings(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFont, longhands);
  return &shorthand;
}

static const StylePropertyShorthand* fontShorthand2() {
  if (RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;
  if (!RuntimeEnabledFeatures::FontLanguageOverrideEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontStyle(),
    &GetCSSPropertyFontVariantLigatures(),
    &GetCSSPropertyFontVariantCaps(),
    &GetCSSPropertyFontVariantNumeric(),
    &GetCSSPropertyFontVariantEastAsian(),
    &GetCSSPropertyFontVariantAlternates(),
    &GetCSSPropertyFontVariantPosition(),
    &GetCSSPropertyFontVariantEmoji(),
    &GetCSSPropertyFontWeight(),
    &GetCSSPropertyFontStretch(),
    &GetCSSPropertyFontSize(),
    &GetCSSPropertyLineHeight(),
    &GetCSSPropertyFontFamily(),
    &GetCSSPropertyFontOpticalSizing(),
    &GetCSSPropertyFontKerning(),
    &GetCSSPropertyFontFeatureSettings(),
    &GetCSSPropertyFontVariationSettings(),
    &GetCSSPropertyFontLanguageOverride(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFont, longhands);
  return &shorthand;
}

static const StylePropertyShorthand* fontShorthand3() {
  if (!RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;
  if (!RuntimeEnabledFeatures::FontLanguageOverrideEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontStyle(),
    &GetCSSPropertyFontVariantLigatures(),
    &GetCSSPropertyFontVariantCaps(),
    &GetCSSPropertyFontVariantNumeric(),
    &GetCSSPropertyFontVariantEastAsian(),
    &GetCSSPropertyFontVariantAlternates(),
    &GetCSSPropertyFontVariantPosition(),
    &GetCSSPropertyFontVariantEmoji(),
    &GetCSSPropertyFontWeight(),
    &GetCSSPropertyFontStretch(),
    &GetCSSPropertyFontSize(),
    &GetCSSPropertyLineHeight(),
    &GetCSSPropertyFontFamily(),
    &GetCSSPropertyFontOpticalSizing(),
    &GetCSSPropertyFontSizeAdjust(),
    &GetCSSPropertyFontKerning(),
    &GetCSSPropertyFontFeatureSettings(),
    &GetCSSPropertyFontVariationSettings(),
    &GetCSSPropertyFontLanguageOverride(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFont, longhands);
  return &shorthand;
}

const StylePropertyShorthand& fontShorthand() {
  if (const auto* s = fontShorthand1())
    return *s;
  if (const auto* s = fontShorthand2())
    return *s;
  if (const auto* s = fontShorthand3())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::CSSFontSizeAdjustEnabled(/*No way to get the ExecutionContext here*/nullptr));
  DCHECK(!RuntimeEnabledFeatures::FontLanguageOverrideEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontStyle(),
    &GetCSSPropertyFontVariantLigatures(),
    &GetCSSPropertyFontVariantCaps(),
    &GetCSSPropertyFontVariantNumeric(),
    &GetCSSPropertyFontVariantEastAsian(),
    &GetCSSPropertyFontVariantAlternates(),
    &GetCSSPropertyFontVariantPosition(),
    &GetCSSPropertyFontVariantEmoji(),
    &GetCSSPropertyFontWeight(),
    &GetCSSPropertyFontStretch(),
    &GetCSSPropertyFontSize(),
    &GetCSSPropertyLineHeight(),
    &GetCSSPropertyFontFamily(),
    &GetCSSPropertyFontOpticalSizing(),
    &GetCSSPropertyFontKerning(),
    &GetCSSPropertyFontFeatureSettings(),
    &GetCSSPropertyFontVariationSettings(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFont, longhands);
  return shorthand;
}

const StylePropertyShorthand& fontSynthesisShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontSynthesisWeight(),
    &GetCSSPropertyFontSynthesisStyle(),
    &GetCSSPropertyFontSynthesisSmallCaps(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFontSynthesis, longhands);
  return shorthand;
}

const StylePropertyShorthand& fontVariantShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyFontVariantLigatures(),
    &GetCSSPropertyFontVariantCaps(),
    &GetCSSPropertyFontVariantAlternates(),
    &GetCSSPropertyFontVariantNumeric(),
    &GetCSSPropertyFontVariantEastAsian(),
    &GetCSSPropertyFontVariantPosition(),
    &GetCSSPropertyFontVariantEmoji(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kFontVariant, longhands);
  return shorthand;
}

const StylePropertyShorthand& gapShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowGap(),
    &GetCSSPropertyColumnGap(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGap, longhands);
  return shorthand;
}

const StylePropertyShorthand& gridShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridTemplateRows(),
    &GetCSSPropertyGridTemplateColumns(),
    &GetCSSPropertyGridTemplateAreas(),
    &GetCSSPropertyGridAutoFlow(),
    &GetCSSPropertyGridAutoRows(),
    &GetCSSPropertyGridAutoColumns(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGrid, longhands);
  return shorthand;
}

const StylePropertyShorthand& gridAreaShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridRowStart(),
    &GetCSSPropertyGridColumnStart(),
    &GetCSSPropertyGridRowEnd(),
    &GetCSSPropertyGridColumnEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridArea, longhands);
  return shorthand;
}

const StylePropertyShorthand& gridColumnShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridColumnStart(),
    &GetCSSPropertyGridColumnEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridColumn, longhands);
  return shorthand;
}

static const StylePropertyShorthand* gridLanesShorthand1() {
  if (!RuntimeEnabledFeatures::CSSGridLanesLayoutEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridTemplateAreas(),
    &GetCSSPropertyGridTemplateColumns(),
    &GetCSSPropertyGridTemplateRows(),
    &GetCSSPropertyGridLanesDirection(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridLanes, longhands);
  return &shorthand;
}

const StylePropertyShorthand& gridLanesShorthand() {
  if (const auto* s = gridLanesShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::CSSGridLanesLayoutEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridTemplateAreas(),
    &GetCSSPropertyGridTemplateColumns(),
    &GetCSSPropertyGridTemplateRows(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridLanes, longhands);
  return shorthand;
}

const StylePropertyShorthand& gridRowShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridRowStart(),
    &GetCSSPropertyGridRowEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridRow, longhands);
  return shorthand;
}

const StylePropertyShorthand& gridTemplateShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyGridTemplateRows(),
    &GetCSSPropertyGridTemplateColumns(),
    &GetCSSPropertyGridTemplateAreas(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kGridTemplate, longhands);
  return shorthand;
}

const StylePropertyShorthand& insetShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTop(),
    &GetCSSPropertyRight(),
    &GetCSSPropertyBottom(),
    &GetCSSPropertyLeft(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kInset, longhands);
  return shorthand;
}

const StylePropertyShorthand& insetBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyInsetBlockStart(),
    &GetCSSPropertyInsetBlockEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kInsetBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& insetInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyInsetInlineStart(),
    &GetCSSPropertyInsetInlineEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kInsetInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& interestDelayShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyInterestDelayStart(),
    &GetCSSPropertyInterestDelayEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kInterestDelay, longhands);
  return shorthand;
}

const StylePropertyShorthand& listStyleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyListStylePosition(),
    &GetCSSPropertyListStyleImage(),
    &GetCSSPropertyListStyleType(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kListStyle, longhands);
  return shorthand;
}

const StylePropertyShorthand& marginShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMarginTop(),
    &GetCSSPropertyMarginRight(),
    &GetCSSPropertyMarginBottom(),
    &GetCSSPropertyMarginLeft(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMargin, longhands);
  return shorthand;
}

const StylePropertyShorthand& marginBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMarginBlockStart(),
    &GetCSSPropertyMarginBlockEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMarginBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& marginInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMarginInlineStart(),
    &GetCSSPropertyMarginInlineEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMarginInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& markerShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMarkerStart(),
    &GetCSSPropertyMarkerMid(),
    &GetCSSPropertyMarkerEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMarker, longhands);
  return shorthand;
}

const StylePropertyShorthand& maskShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyMaskImage(),
    &GetCSSPropertyWebkitMaskPositionX(),
    &GetCSSPropertyWebkitMaskPositionY(),
    &GetCSSPropertyMaskSize(),
    &GetCSSPropertyMaskRepeat(),
    &GetCSSPropertyMaskOrigin(),
    &GetCSSPropertyMaskClip(),
    &GetCSSPropertyMaskComposite(),
    &GetCSSPropertyMaskMode(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMask, longhands);
  return shorthand;
}

const StylePropertyShorthand& maskPositionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyWebkitMaskPositionX(),
    &GetCSSPropertyWebkitMaskPositionY(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kMaskPosition, longhands);
  return shorthand;
}

const StylePropertyShorthand& offsetShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyOffsetPosition(),
    &GetCSSPropertyOffsetPath(),
    &GetCSSPropertyOffsetDistance(),
    &GetCSSPropertyOffsetRotate(),
    &GetCSSPropertyOffsetAnchor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kOffset, longhands);
  return shorthand;
}

const StylePropertyShorthand& outlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyOutlineColor(),
    &GetCSSPropertyOutlineStyle(),
    &GetCSSPropertyOutlineWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kOutline, longhands);
  return shorthand;
}

const StylePropertyShorthand& overflowShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyOverflowX(),
    &GetCSSPropertyOverflowY(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kOverflow, longhands);
  return shorthand;
}

const StylePropertyShorthand& overscrollBehaviorShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyOverscrollBehaviorX(),
    &GetCSSPropertyOverscrollBehaviorY(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kOverscrollBehavior, longhands);
  return shorthand;
}

const StylePropertyShorthand& paddingShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyPaddingTop(),
    &GetCSSPropertyPaddingRight(),
    &GetCSSPropertyPaddingBottom(),
    &GetCSSPropertyPaddingLeft(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPadding, longhands);
  return shorthand;
}

const StylePropertyShorthand& paddingBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyPaddingBlockStart(),
    &GetCSSPropertyPaddingBlockEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPaddingBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& paddingInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyPaddingInlineStart(),
    &GetCSSPropertyPaddingInlineEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPaddingInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& pageBreakAfterShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakAfter(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPageBreakAfter, longhands);
  return shorthand;
}

const StylePropertyShorthand& pageBreakBeforeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakBefore(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPageBreakBefore, longhands);
  return shorthand;
}

const StylePropertyShorthand& pageBreakInsideShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakInside(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPageBreakInside, longhands);
  return shorthand;
}

const StylePropertyShorthand& placeContentShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyAlignContent(),
    &GetCSSPropertyJustifyContent(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPlaceContent, longhands);
  return shorthand;
}

const StylePropertyShorthand& placeItemsShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyAlignItems(),
    &GetCSSPropertyJustifyItems(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPlaceItems, longhands);
  return shorthand;
}

const StylePropertyShorthand& placeSelfShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyAlignSelf(),
    &GetCSSPropertyJustifySelf(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPlaceSelf, longhands);
  return shorthand;
}

const StylePropertyShorthand& positionTryShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyPositionTryOrder(),
    &GetCSSPropertyPositionTryFallbacks(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kPositionTry, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleWidth(),
    &GetCSSPropertyRowRuleStyle(),
    &GetCSSPropertyRowRuleColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRule, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleInsetShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetCapEnd(),
    &GetCSSPropertyRowRuleInsetJunctionStart(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRuleInset, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleInsetCapShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetCapEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRuleInsetCap, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleInsetEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapEnd(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRuleInsetEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleInsetJunctionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetJunctionStart(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRuleInsetJunction, longhands);
  return shorthand;
}

const StylePropertyShorthand& rowRuleInsetStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetJunctionStart(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRowRuleInsetStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleWidth(),
    &GetCSSPropertyColumnRuleStyle(),
    &GetCSSPropertyColumnRuleColor(),
    &GetCSSPropertyRowRuleWidth(),
    &GetCSSPropertyRowRuleStyle(),
    &GetCSSPropertyRowRuleColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRule, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleBreakShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleBreak(),
    &GetCSSPropertyColumnRuleBreak(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleBreak, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleColorShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleColor(),
    &GetCSSPropertyRowRuleColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleColor, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleInsetShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetCapEnd(),
    &GetCSSPropertyRowRuleInsetJunctionStart(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetCapEnd(),
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleInset, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleInsetCapShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetCapEnd(),
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetCapEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleInsetCap, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleInsetEndShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapEnd(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
    &GetCSSPropertyRowRuleInsetCapEnd(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleInsetEnd, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleInsetJunctionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyRowRuleInsetJunctionStart(),
    &GetCSSPropertyRowRuleInsetJunctionEnd(),
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
    &GetCSSPropertyColumnRuleInsetJunctionEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleInsetJunction, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleInsetStartShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleInsetCapStart(),
    &GetCSSPropertyColumnRuleInsetJunctionStart(),
    &GetCSSPropertyRowRuleInsetCapStart(),
    &GetCSSPropertyRowRuleInsetJunctionStart(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleInsetStart, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleStyleShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleStyle(),
    &GetCSSPropertyRowRuleStyle(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleStyle, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleVisibilityItemsShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleVisibilityItems(),
    &GetCSSPropertyRowRuleVisibilityItems(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleVisibilityItems, longhands);
  return shorthand;
}

const StylePropertyShorthand& ruleWidthShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyColumnRuleWidth(),
    &GetCSSPropertyRowRuleWidth(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kRuleWidth, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollMarginShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollMarginTop(),
    &GetCSSPropertyScrollMarginRight(),
    &GetCSSPropertyScrollMarginBottom(),
    &GetCSSPropertyScrollMarginLeft(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollMargin, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollMarginBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollMarginBlockStart(),
    &GetCSSPropertyScrollMarginBlockEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollMarginBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollMarginInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollMarginInlineStart(),
    &GetCSSPropertyScrollMarginInlineEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollMarginInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollPaddingShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollPaddingTop(),
    &GetCSSPropertyScrollPaddingRight(),
    &GetCSSPropertyScrollPaddingBottom(),
    &GetCSSPropertyScrollPaddingLeft(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollPadding, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollPaddingBlockShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollPaddingBlockStart(),
    &GetCSSPropertyScrollPaddingBlockEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollPaddingBlock, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollPaddingInlineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollPaddingInlineStart(),
    &GetCSSPropertyScrollPaddingInlineEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollPaddingInline, longhands);
  return shorthand;
}

const StylePropertyShorthand& scrollTimelineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyScrollTimelineName(),
    &GetCSSPropertyScrollTimelineAxis(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kScrollTimeline, longhands);
  return shorthand;
}

const StylePropertyShorthand& textBoxShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTextBoxTrim(),
    &GetCSSPropertyTextBoxEdge(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTextBox, longhands);
  return shorthand;
}

const StylePropertyShorthand& textDecorationShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTextDecorationLine(),
    &GetCSSPropertyTextDecorationThickness(),
    &GetCSSPropertyTextDecorationStyle(),
    &GetCSSPropertyTextDecorationColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTextDecoration, longhands);
  return shorthand;
}

const StylePropertyShorthand& textEmphasisShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTextEmphasisStyle(),
    &GetCSSPropertyTextEmphasisColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTextEmphasis, longhands);
  return shorthand;
}

const StylePropertyShorthand& textSpacingShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTextAutospace(),
    &GetCSSPropertyTextSpacingTrim(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTextSpacing, longhands);
  return shorthand;
}

const StylePropertyShorthand& textWrapShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTextWrapMode(),
    &GetCSSPropertyTextWrapStyle(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTextWrap, longhands);
  return shorthand;
}

static const StylePropertyShorthand* timelineTriggerShorthand1() {
  if (!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTimelineTriggerName(),
    &GetCSSPropertyTimelineTriggerSource(),
    &GetCSSPropertyTimelineTriggerActivationRangeStart(),
    &GetCSSPropertyTimelineTriggerActivationRangeEnd(),
    &GetCSSPropertyTimelineTriggerActiveRangeStart(),
    &GetCSSPropertyTimelineTriggerActiveRangeEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTimelineTrigger, longhands);
  return &shorthand;
}

const StylePropertyShorthand& timelineTriggerShorthand() {
  if (const auto* s = timelineTriggerShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static StylePropertyShorthand empty_shorthand;
  return empty_shorthand;
}

static const StylePropertyShorthand* timelineTriggerActivationRangeShorthand1() {
  if (!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTimelineTriggerActivationRangeStart(),
    &GetCSSPropertyTimelineTriggerActivationRangeEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTimelineTriggerActivationRange, longhands);
  return &shorthand;
}

const StylePropertyShorthand& timelineTriggerActivationRangeShorthand() {
  if (const auto* s = timelineTriggerActivationRangeShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static StylePropertyShorthand empty_shorthand;
  return empty_shorthand;
}

static const StylePropertyShorthand* timelineTriggerActiveRangeShorthand1() {
  if (!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr))
    return nullptr;

  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTimelineTriggerActiveRangeStart(),
    &GetCSSPropertyTimelineTriggerActiveRangeEnd(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTimelineTriggerActiveRange, longhands);
  return &shorthand;
}

const StylePropertyShorthand& timelineTriggerActiveRangeShorthand() {
  if (const auto* s = timelineTriggerActiveRangeShorthand1())
    return *s;

  DCHECK(!RuntimeEnabledFeatures::TimelineTriggerEnabled(/*No way to get the ExecutionContext here*/nullptr));

  static StylePropertyShorthand empty_shorthand;
  return empty_shorthand;
}

const StylePropertyShorthand& transitionShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyTransitionProperty(),
    &GetCSSPropertyTransitionDuration(),
    &GetCSSPropertyTransitionTimingFunction(),
    &GetCSSPropertyTransitionDelay(),
    &GetCSSPropertyTransitionBehavior(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kTransition, longhands);
  return shorthand;
}

const StylePropertyShorthand& viewTimelineShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyViewTimelineName(),
    &GetCSSPropertyViewTimelineAxis(),
    &GetCSSPropertyViewTimelineInset(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kViewTimeline, longhands);
  return shorthand;
}

const StylePropertyShorthand& webkitColumnBreakAfterShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakAfter(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWebkitColumnBreakAfter, longhands);
  return shorthand;
}

const StylePropertyShorthand& webkitColumnBreakBeforeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakBefore(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWebkitColumnBreakBefore, longhands);
  return shorthand;
}

const StylePropertyShorthand& webkitColumnBreakInsideShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyBreakInside(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWebkitColumnBreakInside, longhands);
  return shorthand;
}

const StylePropertyShorthand& webkitMaskBoxImageShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyWebkitMaskBoxImageSource(),
    &GetCSSPropertyWebkitMaskBoxImageSlice(),
    &GetCSSPropertyWebkitMaskBoxImageWidth(),
    &GetCSSPropertyWebkitMaskBoxImageOutset(),
    &GetCSSPropertyWebkitMaskBoxImageRepeat(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWebkitMaskBoxImage, longhands);
  return shorthand;
}

const StylePropertyShorthand& webkitTextStrokeShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyWebkitTextStrokeWidth(),
    &GetCSSPropertyWebkitTextStrokeColor(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWebkitTextStroke, longhands);
  return shorthand;
}

const StylePropertyShorthand& whiteSpaceShorthand() {
  static const CSSProperty* longhands[] = {
    &GetCSSPropertyWhiteSpaceCollapse(),
    &GetCSSPropertyTextWrapMode(),
  };

  static const StylePropertyShorthand shorthand(
      CSSPropertyID::kWhiteSpace, longhands);
  return shorthand;
}

// Returns an empty list if the property is not a shorthand
const StylePropertyShorthand& shorthandForProperty(CSSPropertyID propertyID) {
  // FIXME: We shouldn't switch between shorthand/not shorthand based on a runtime flag
  static StylePropertyShorthand empty_shorthand;

  switch (propertyID) {
    case CSSPropertyID::kAlternativeLineClampShorthand:
      return alternativeLineClampShorthandShorthand();
    case CSSPropertyID::kAlternativeWebkitLineClampShorthand:
      return alternativeWebkitLineClampShorthandShorthand();
    case CSSPropertyID::kAnimation:
      return animationShorthand();
    case CSSPropertyID::kAnimationRange:
      return animationRangeShorthand();
    case CSSPropertyID::kBackground:
      return backgroundShorthand();
    case CSSPropertyID::kBackgroundPosition:
      return backgroundPositionShorthand();
    case CSSPropertyID::kBorder:
      return borderShorthand();
    case CSSPropertyID::kBorderBlock:
      return borderBlockShorthand();
    case CSSPropertyID::kBorderBlockColor:
      return borderBlockColorShorthand();
    case CSSPropertyID::kBorderBlockEnd:
      return borderBlockEndShorthand();
    case CSSPropertyID::kBorderBlockEndRadius:
      return borderBlockEndRadiusShorthand();
    case CSSPropertyID::kBorderBlockStart:
      return borderBlockStartShorthand();
    case CSSPropertyID::kBorderBlockStartRadius:
      return borderBlockStartRadiusShorthand();
    case CSSPropertyID::kBorderBlockStyle:
      return borderBlockStyleShorthand();
    case CSSPropertyID::kBorderBlockWidth:
      return borderBlockWidthShorthand();
    case CSSPropertyID::kBorderBottom:
      return borderBottomShorthand();
    case CSSPropertyID::kBorderBottomRadius:
      return borderBottomRadiusShorthand();
    case CSSPropertyID::kBorderColor:
      return borderColorShorthand();
    case CSSPropertyID::kBorderImage:
      return borderImageShorthand();
    case CSSPropertyID::kBorderInline:
      return borderInlineShorthand();
    case CSSPropertyID::kBorderInlineColor:
      return borderInlineColorShorthand();
    case CSSPropertyID::kBorderInlineEnd:
      return borderInlineEndShorthand();
    case CSSPropertyID::kBorderInlineEndRadius:
      return borderInlineEndRadiusShorthand();
    case CSSPropertyID::kBorderInlineStart:
      return borderInlineStartShorthand();
    case CSSPropertyID::kBorderInlineStartRadius:
      return borderInlineStartRadiusShorthand();
    case CSSPropertyID::kBorderInlineStyle:
      return borderInlineStyleShorthand();
    case CSSPropertyID::kBorderInlineWidth:
      return borderInlineWidthShorthand();
    case CSSPropertyID::kBorderLeft:
      return borderLeftShorthand();
    case CSSPropertyID::kBorderLeftRadius:
      return borderLeftRadiusShorthand();
    case CSSPropertyID::kBorderRadius:
      return borderRadiusShorthand();
    case CSSPropertyID::kBorderRight:
      return borderRightShorthand();
    case CSSPropertyID::kBorderRightRadius:
      return borderRightRadiusShorthand();
    case CSSPropertyID::kBorderSpacing:
      return borderSpacingShorthand();
    case CSSPropertyID::kBorderStyle:
      return borderStyleShorthand();
    case CSSPropertyID::kBorderTop:
      return borderTopShorthand();
    case CSSPropertyID::kBorderTopRadius:
      return borderTopRadiusShorthand();
    case CSSPropertyID::kBorderWidth:
      return borderWidthShorthand();
    case CSSPropertyID::kColumnRule:
      return columnRuleShorthand();
    case CSSPropertyID::kColumnRuleInset:
      return columnRuleInsetShorthand();
    case CSSPropertyID::kColumnRuleInsetCap:
      return columnRuleInsetCapShorthand();
    case CSSPropertyID::kColumnRuleInsetEnd:
      return columnRuleInsetEndShorthand();
    case CSSPropertyID::kColumnRuleInsetJunction:
      return columnRuleInsetJunctionShorthand();
    case CSSPropertyID::kColumnRuleInsetStart:
      return columnRuleInsetStartShorthand();
    case CSSPropertyID::kColumns:
      return columnsShorthand();
    case CSSPropertyID::kContainIntrinsicSize:
      return containIntrinsicSizeShorthand();
    case CSSPropertyID::kContainer:
      return containerShorthand();
    case CSSPropertyID::kCorner:
      return cornerShorthand();
    case CSSPropertyID::kCornerBlockEnd:
      return cornerBlockEndShorthand();
    case CSSPropertyID::kCornerBlockEndShape:
      return cornerBlockEndShapeShorthand();
    case CSSPropertyID::kCornerBlockStart:
      return cornerBlockStartShorthand();
    case CSSPropertyID::kCornerBlockStartShape:
      return cornerBlockStartShapeShorthand();
    case CSSPropertyID::kCornerBottom:
      return cornerBottomShorthand();
    case CSSPropertyID::kCornerBottomLeft:
      return cornerBottomLeftShorthand();
    case CSSPropertyID::kCornerBottomRight:
      return cornerBottomRightShorthand();
    case CSSPropertyID::kCornerBottomShape:
      return cornerBottomShapeShorthand();
    case CSSPropertyID::kCornerEndEnd:
      return cornerEndEndShorthand();
    case CSSPropertyID::kCornerEndStart:
      return cornerEndStartShorthand();
    case CSSPropertyID::kCornerInlineEnd:
      return cornerInlineEndShorthand();
    case CSSPropertyID::kCornerInlineEndShape:
      return cornerInlineEndShapeShorthand();
    case CSSPropertyID::kCornerInlineStart:
      return cornerInlineStartShorthand();
    case CSSPropertyID::kCornerInlineStartShape:
      return cornerInlineStartShapeShorthand();
    case CSSPropertyID::kCornerLeft:
      return cornerLeftShorthand();
    case CSSPropertyID::kCornerLeftShape:
      return cornerLeftShapeShorthand();
    case CSSPropertyID::kCornerRight:
      return cornerRightShorthand();
    case CSSPropertyID::kCornerRightShape:
      return cornerRightShapeShorthand();
    case CSSPropertyID::kCornerShape:
      return cornerShapeShorthand();
    case CSSPropertyID::kCornerStartEnd:
      return cornerStartEndShorthand();
    case CSSPropertyID::kCornerStartStart:
      return cornerStartStartShorthand();
    case CSSPropertyID::kCornerTop:
      return cornerTopShorthand();
    case CSSPropertyID::kCornerTopLeft:
      return cornerTopLeftShorthand();
    case CSSPropertyID::kCornerTopRight:
      return cornerTopRightShorthand();
    case CSSPropertyID::kCornerTopShape:
      return cornerTopShapeShorthand();
    case CSSPropertyID::kFlex:
      return flexShorthand();
    case CSSPropertyID::kFlexFlow:
      return flexFlowShorthand();
    case CSSPropertyID::kFont:
      return fontShorthand();
    case CSSPropertyID::kFontSynthesis:
      return fontSynthesisShorthand();
    case CSSPropertyID::kFontVariant:
      return fontVariantShorthand();
    case CSSPropertyID::kGap:
      return gapShorthand();
    case CSSPropertyID::kGrid:
      return gridShorthand();
    case CSSPropertyID::kGridArea:
      return gridAreaShorthand();
    case CSSPropertyID::kGridColumn:
      return gridColumnShorthand();
    case CSSPropertyID::kGridLanes:
      return gridLanesShorthand();
    case CSSPropertyID::kGridRow:
      return gridRowShorthand();
    case CSSPropertyID::kGridTemplate:
      return gridTemplateShorthand();
    case CSSPropertyID::kInset:
      return insetShorthand();
    case CSSPropertyID::kInsetBlock:
      return insetBlockShorthand();
    case CSSPropertyID::kInsetInline:
      return insetInlineShorthand();
    case CSSPropertyID::kInterestDelay:
      return interestDelayShorthand();
    case CSSPropertyID::kListStyle:
      return listStyleShorthand();
    case CSSPropertyID::kMargin:
      return marginShorthand();
    case CSSPropertyID::kMarginBlock:
      return marginBlockShorthand();
    case CSSPropertyID::kMarginInline:
      return marginInlineShorthand();
    case CSSPropertyID::kMarker:
      return markerShorthand();
    case CSSPropertyID::kMask:
      return maskShorthand();
    case CSSPropertyID::kMaskPosition:
      return maskPositionShorthand();
    case CSSPropertyID::kOffset:
      return offsetShorthand();
    case CSSPropertyID::kOutline:
      return outlineShorthand();
    case CSSPropertyID::kOverflow:
      return overflowShorthand();
    case CSSPropertyID::kOverscrollBehavior:
      return overscrollBehaviorShorthand();
    case CSSPropertyID::kPadding:
      return paddingShorthand();
    case CSSPropertyID::kPaddingBlock:
      return paddingBlockShorthand();
    case CSSPropertyID::kPaddingInline:
      return paddingInlineShorthand();
    case CSSPropertyID::kPageBreakAfter:
      return pageBreakAfterShorthand();
    case CSSPropertyID::kPageBreakBefore:
      return pageBreakBeforeShorthand();
    case CSSPropertyID::kPageBreakInside:
      return pageBreakInsideShorthand();
    case CSSPropertyID::kPlaceContent:
      return placeContentShorthand();
    case CSSPropertyID::kPlaceItems:
      return placeItemsShorthand();
    case CSSPropertyID::kPlaceSelf:
      return placeSelfShorthand();
    case CSSPropertyID::kPositionTry:
      return positionTryShorthand();
    case CSSPropertyID::kRowRule:
      return rowRuleShorthand();
    case CSSPropertyID::kRowRuleInset:
      return rowRuleInsetShorthand();
    case CSSPropertyID::kRowRuleInsetCap:
      return rowRuleInsetCapShorthand();
    case CSSPropertyID::kRowRuleInsetEnd:
      return rowRuleInsetEndShorthand();
    case CSSPropertyID::kRowRuleInsetJunction:
      return rowRuleInsetJunctionShorthand();
    case CSSPropertyID::kRowRuleInsetStart:
      return rowRuleInsetStartShorthand();
    case CSSPropertyID::kRule:
      return ruleShorthand();
    case CSSPropertyID::kRuleBreak:
      return ruleBreakShorthand();
    case CSSPropertyID::kRuleColor:
      return ruleColorShorthand();
    case CSSPropertyID::kRuleInset:
      return ruleInsetShorthand();
    case CSSPropertyID::kRuleInsetCap:
      return ruleInsetCapShorthand();
    case CSSPropertyID::kRuleInsetEnd:
      return ruleInsetEndShorthand();
    case CSSPropertyID::kRuleInsetJunction:
      return ruleInsetJunctionShorthand();
    case CSSPropertyID::kRuleInsetStart:
      return ruleInsetStartShorthand();
    case CSSPropertyID::kRuleStyle:
      return ruleStyleShorthand();
    case CSSPropertyID::kRuleVisibilityItems:
      return ruleVisibilityItemsShorthand();
    case CSSPropertyID::kRuleWidth:
      return ruleWidthShorthand();
    case CSSPropertyID::kScrollMargin:
      return scrollMarginShorthand();
    case CSSPropertyID::kScrollMarginBlock:
      return scrollMarginBlockShorthand();
    case CSSPropertyID::kScrollMarginInline:
      return scrollMarginInlineShorthand();
    case CSSPropertyID::kScrollPadding:
      return scrollPaddingShorthand();
    case CSSPropertyID::kScrollPaddingBlock:
      return scrollPaddingBlockShorthand();
    case CSSPropertyID::kScrollPaddingInline:
      return scrollPaddingInlineShorthand();
    case CSSPropertyID::kScrollTimeline:
      return scrollTimelineShorthand();
    case CSSPropertyID::kTextBox:
      return textBoxShorthand();
    case CSSPropertyID::kTextDecoration:
      return textDecorationShorthand();
    case CSSPropertyID::kTextEmphasis:
      return textEmphasisShorthand();
    case CSSPropertyID::kTextSpacing:
      return textSpacingShorthand();
    case CSSPropertyID::kTextWrap:
      return textWrapShorthand();
    case CSSPropertyID::kTimelineTrigger:
      return timelineTriggerShorthand();
    case CSSPropertyID::kTimelineTriggerActivationRange:
      return timelineTriggerActivationRangeShorthand();
    case CSSPropertyID::kTimelineTriggerActiveRange:
      return timelineTriggerActiveRangeShorthand();
    case CSSPropertyID::kTransition:
      return transitionShorthand();
    case CSSPropertyID::kViewTimeline:
      return viewTimelineShorthand();
    case CSSPropertyID::kWebkitColumnBreakAfter:
      return webkitColumnBreakAfterShorthand();
    case CSSPropertyID::kWebkitColumnBreakBefore:
      return webkitColumnBreakBeforeShorthand();
    case CSSPropertyID::kWebkitColumnBreakInside:
      return webkitColumnBreakInsideShorthand();
    case CSSPropertyID::kWebkitMaskBoxImage:
      return webkitMaskBoxImageShorthand();
    case CSSPropertyID::kWebkitTextStroke:
      return webkitTextStrokeShorthand();
    case CSSPropertyID::kWhiteSpace:
      return whiteSpaceShorthand();
    default: {
      return empty_shorthand;
    }
  }
}

void getMatchingShorthandsForLonghand(
    CSSPropertyID propertyID, MatchingShorthandsVector* result) {
  DCHECK(!result->size());
  switch (propertyID) {
    case CSSPropertyID::kMaxLines: {
      if (CSSProperty::Get(CSSPropertyID::kAlternativeLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeLineClampShorthandShorthand());
      if (CSSProperty::Get(CSSPropertyID::kAlternativeWebkitLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeWebkitLineClampShorthandShorthand());
      break;
    }
    case CSSPropertyID::kBlockEllipsis: {
      if (CSSProperty::Get(CSSPropertyID::kAlternativeLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeLineClampShorthandShorthand());
      if (CSSProperty::Get(CSSPropertyID::kAlternativeWebkitLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeWebkitLineClampShorthandShorthand());
      break;
    }
    case CSSPropertyID::kContinue: {
      if (CSSProperty::Get(CSSPropertyID::kAlternativeLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeLineClampShorthandShorthand());
      if (CSSProperty::Get(CSSPropertyID::kAlternativeWebkitLineClampShorthand).IsWebExposed())
        result->UncheckedAppend(alternativeWebkitLineClampShorthandShorthand());
      break;
    }
    case CSSPropertyID::kAnimationDuration: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationTimingFunction: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationDelay: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationIterationCount: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationDirection: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationFillMode: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationPlayState: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationName: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationTimeline: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      break;
    }
    case CSSPropertyID::kAnimationRangeStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimationRange).IsWebExposed());
      result->UncheckedAppend(animationRangeShorthand());
      break;
    }
    case CSSPropertyID::kAnimationRangeEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimation).IsWebExposed());
      result->UncheckedAppend(animationShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kAnimationRange).IsWebExposed());
      result->UncheckedAppend(animationRangeShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundImage: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundPositionX: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackgroundPosition).IsWebExposed());
      result->UncheckedAppend(backgroundPositionShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundPositionY: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackgroundPosition).IsWebExposed());
      result->UncheckedAppend(backgroundPositionShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundSize: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundRepeat: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundAttachment: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundOrigin: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundClip: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBackgroundColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBackground).IsWebExposed());
      result->UncheckedAppend(backgroundShorthand());
      break;
    }
    case CSSPropertyID::kBorderTopColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderColor).IsWebExposed());
      result->UncheckedAppend(borderColorShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderTop).IsWebExposed());
      result->UncheckedAppend(borderTopShorthand());
      break;
    }
    case CSSPropertyID::kBorderTopStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderStyle).IsWebExposed());
      result->UncheckedAppend(borderStyleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderTop).IsWebExposed());
      result->UncheckedAppend(borderTopShorthand());
      break;
    }
    case CSSPropertyID::kBorderTopWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderWidth).IsWebExposed());
      result->UncheckedAppend(borderWidthShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderTop).IsWebExposed());
      result->UncheckedAppend(borderTopShorthand());
      break;
    }
    case CSSPropertyID::kBorderRightColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderColor).IsWebExposed());
      result->UncheckedAppend(borderColorShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRight).IsWebExposed());
      result->UncheckedAppend(borderRightShorthand());
      break;
    }
    case CSSPropertyID::kBorderRightStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderStyle).IsWebExposed());
      result->UncheckedAppend(borderStyleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRight).IsWebExposed());
      result->UncheckedAppend(borderRightShorthand());
      break;
    }
    case CSSPropertyID::kBorderRightWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderWidth).IsWebExposed());
      result->UncheckedAppend(borderWidthShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRight).IsWebExposed());
      result->UncheckedAppend(borderRightShorthand());
      break;
    }
    case CSSPropertyID::kBorderBottomColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderColor).IsWebExposed());
      result->UncheckedAppend(borderColorShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBottom).IsWebExposed());
      result->UncheckedAppend(borderBottomShorthand());
      break;
    }
    case CSSPropertyID::kBorderBottomStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderStyle).IsWebExposed());
      result->UncheckedAppend(borderStyleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBottom).IsWebExposed());
      result->UncheckedAppend(borderBottomShorthand());
      break;
    }
    case CSSPropertyID::kBorderBottomWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderWidth).IsWebExposed());
      result->UncheckedAppend(borderWidthShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBottom).IsWebExposed());
      result->UncheckedAppend(borderBottomShorthand());
      break;
    }
    case CSSPropertyID::kBorderLeftColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderColor).IsWebExposed());
      result->UncheckedAppend(borderColorShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderLeft).IsWebExposed());
      result->UncheckedAppend(borderLeftShorthand());
      break;
    }
    case CSSPropertyID::kBorderLeftStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderStyle).IsWebExposed());
      result->UncheckedAppend(borderStyleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderLeft).IsWebExposed());
      result->UncheckedAppend(borderLeftShorthand());
      break;
    }
    case CSSPropertyID::kBorderLeftWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderWidth).IsWebExposed());
      result->UncheckedAppend(borderWidthShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderLeft).IsWebExposed());
      result->UncheckedAppend(borderLeftShorthand());
      break;
    }
    case CSSPropertyID::kBorderImageSource: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderImage).IsWebExposed());
      result->UncheckedAppend(borderImageShorthand());
      break;
    }
    case CSSPropertyID::kBorderImageSlice: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderImage).IsWebExposed());
      result->UncheckedAppend(borderImageShorthand());
      break;
    }
    case CSSPropertyID::kBorderImageWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderImage).IsWebExposed());
      result->UncheckedAppend(borderImageShorthand());
      break;
    }
    case CSSPropertyID::kBorderImageOutset: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderImage).IsWebExposed());
      result->UncheckedAppend(borderImageShorthand());
      break;
    }
    case CSSPropertyID::kBorderImageRepeat: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorder).IsWebExposed());
      result->UncheckedAppend(borderShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderImage).IsWebExposed());
      result->UncheckedAppend(borderImageShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockStartColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockStart).IsWebExposed());
      result->UncheckedAppend(borderBlockStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockColor).IsWebExposed());
      result->UncheckedAppend(borderBlockColorShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockStartStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockStart).IsWebExposed());
      result->UncheckedAppend(borderBlockStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockStyle).IsWebExposed());
      result->UncheckedAppend(borderBlockStyleShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockStartWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockStart).IsWebExposed());
      result->UncheckedAppend(borderBlockStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockWidth).IsWebExposed());
      result->UncheckedAppend(borderBlockWidthShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockEndColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockEnd).IsWebExposed());
      result->UncheckedAppend(borderBlockEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockColor).IsWebExposed());
      result->UncheckedAppend(borderBlockColorShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockEndStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockEnd).IsWebExposed());
      result->UncheckedAppend(borderBlockEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockStyle).IsWebExposed());
      result->UncheckedAppend(borderBlockStyleShorthand());
      break;
    }
    case CSSPropertyID::kBorderBlockEndWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlock).IsWebExposed());
      result->UncheckedAppend(borderBlockShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockEnd).IsWebExposed());
      result->UncheckedAppend(borderBlockEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderBlockWidth).IsWebExposed());
      result->UncheckedAppend(borderBlockWidthShorthand());
      break;
    }
    case CSSPropertyID::kBorderEndStartRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockEnd).IsWebExposed())
        result->UncheckedAppend(cornerBlockEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineStart).IsWebExposed())
        result->UncheckedAppend(cornerInlineStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBlockEndRadius).IsWebExposed())
        result->UncheckedAppend(borderBlockEndRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderInlineStartRadius).IsWebExposed())
        result->UncheckedAppend(borderInlineStartRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerEndStart).IsWebExposed())
        result->UncheckedAppend(cornerEndStartShorthand());
      break;
    }
    case CSSPropertyID::kBorderEndEndRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockEnd).IsWebExposed())
        result->UncheckedAppend(cornerBlockEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineEnd).IsWebExposed())
        result->UncheckedAppend(cornerInlineEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBlockEndRadius).IsWebExposed())
        result->UncheckedAppend(borderBlockEndRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderInlineEndRadius).IsWebExposed())
        result->UncheckedAppend(borderInlineEndRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerEndEnd).IsWebExposed())
        result->UncheckedAppend(cornerEndEndShorthand());
      break;
    }
    case CSSPropertyID::kBorderStartStartRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockStart).IsWebExposed())
        result->UncheckedAppend(cornerBlockStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineStart).IsWebExposed())
        result->UncheckedAppend(cornerInlineStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBlockStartRadius).IsWebExposed())
        result->UncheckedAppend(borderBlockStartRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderInlineStartRadius).IsWebExposed())
        result->UncheckedAppend(borderInlineStartRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerStartStart).IsWebExposed())
        result->UncheckedAppend(cornerStartStartShorthand());
      break;
    }
    case CSSPropertyID::kBorderStartEndRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockStart).IsWebExposed())
        result->UncheckedAppend(cornerBlockStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineEnd).IsWebExposed())
        result->UncheckedAppend(cornerInlineEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBlockStartRadius).IsWebExposed())
        result->UncheckedAppend(borderBlockStartRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderInlineEndRadius).IsWebExposed())
        result->UncheckedAppend(borderInlineEndRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerStartEnd).IsWebExposed())
        result->UncheckedAppend(cornerStartEndShorthand());
      break;
    }
    case CSSPropertyID::kBorderBottomLeftRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRadius).IsWebExposed());
      result->UncheckedAppend(borderRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottom).IsWebExposed())
        result->UncheckedAppend(cornerBottomShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerLeft).IsWebExposed())
        result->UncheckedAppend(cornerLeftShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBottomRadius).IsWebExposed())
        result->UncheckedAppend(borderBottomRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderLeftRadius).IsWebExposed())
        result->UncheckedAppend(borderLeftRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottomLeft).IsWebExposed())
        result->UncheckedAppend(cornerBottomLeftShorthand());
      break;
    }
    case CSSPropertyID::kBorderBottomRightRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRadius).IsWebExposed());
      result->UncheckedAppend(borderRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottom).IsWebExposed())
        result->UncheckedAppend(cornerBottomShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerRight).IsWebExposed())
        result->UncheckedAppend(cornerRightShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderBottomRadius).IsWebExposed())
        result->UncheckedAppend(borderBottomRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderRightRadius).IsWebExposed())
        result->UncheckedAppend(borderRightRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottomRight).IsWebExposed())
        result->UncheckedAppend(cornerBottomRightShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineStartColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineStart).IsWebExposed());
      result->UncheckedAppend(borderInlineStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineColor).IsWebExposed());
      result->UncheckedAppend(borderInlineColorShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineStartStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineStart).IsWebExposed());
      result->UncheckedAppend(borderInlineStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineStyle).IsWebExposed());
      result->UncheckedAppend(borderInlineStyleShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineStartWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineStart).IsWebExposed());
      result->UncheckedAppend(borderInlineStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineWidth).IsWebExposed());
      result->UncheckedAppend(borderInlineWidthShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineEndColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineEnd).IsWebExposed());
      result->UncheckedAppend(borderInlineEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineColor).IsWebExposed());
      result->UncheckedAppend(borderInlineColorShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineEndStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineEnd).IsWebExposed());
      result->UncheckedAppend(borderInlineEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineStyle).IsWebExposed());
      result->UncheckedAppend(borderInlineStyleShorthand());
      break;
    }
    case CSSPropertyID::kBorderInlineEndWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInline).IsWebExposed());
      result->UncheckedAppend(borderInlineShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineEnd).IsWebExposed());
      result->UncheckedAppend(borderInlineEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderInlineWidth).IsWebExposed());
      result->UncheckedAppend(borderInlineWidthShorthand());
      break;
    }
    case CSSPropertyID::kBorderTopLeftRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRadius).IsWebExposed());
      result->UncheckedAppend(borderRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerLeft).IsWebExposed())
        result->UncheckedAppend(cornerLeftShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTop).IsWebExposed())
        result->UncheckedAppend(cornerTopShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderLeftRadius).IsWebExposed())
        result->UncheckedAppend(borderLeftRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderTopRadius).IsWebExposed())
        result->UncheckedAppend(borderTopRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTopLeft).IsWebExposed())
        result->UncheckedAppend(cornerTopLeftShorthand());
      break;
    }
    case CSSPropertyID::kBorderTopRightRadius: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderRadius).IsWebExposed());
      result->UncheckedAppend(borderRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerRight).IsWebExposed())
        result->UncheckedAppend(cornerRightShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTop).IsWebExposed())
        result->UncheckedAppend(cornerTopShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderRightRadius).IsWebExposed())
        result->UncheckedAppend(borderRightRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kBorderTopRadius).IsWebExposed())
        result->UncheckedAppend(borderTopRadiusShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTopRight).IsWebExposed())
        result->UncheckedAppend(cornerTopRightShorthand());
      break;
    }
    case CSSPropertyID::kWebkitBorderHorizontalSpacing: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderSpacing).IsWebExposed());
      result->UncheckedAppend(borderSpacingShorthand());
      break;
    }
    case CSSPropertyID::kWebkitBorderVerticalSpacing: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kBorderSpacing).IsWebExposed());
      result->UncheckedAppend(borderSpacingShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRule).IsWebExposed());
      result->UncheckedAppend(columnRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleWidth).IsWebExposed());
      result->UncheckedAppend(ruleWidthShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRule).IsWebExposed());
      result->UncheckedAppend(columnRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleStyle).IsWebExposed());
      result->UncheckedAppend(ruleStyleShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRule).IsWebExposed());
      result->UncheckedAppend(columnRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleColor).IsWebExposed());
      result->UncheckedAppend(ruleColorShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleInsetCapStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInset).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(ruleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(ruleInsetStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetStartShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleInsetCapEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInset).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(ruleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(ruleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetEndShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleInsetJunctionStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInset).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(ruleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(ruleInsetStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetStartShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleInsetJunctionEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInset).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(ruleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(ruleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumnRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(columnRuleInsetJunctionShorthand());
      break;
    }
    case CSSPropertyID::kColumnWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumns).IsWebExposed());
      result->UncheckedAppend(columnsShorthand());
      break;
    }
    case CSSPropertyID::kColumnCount: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumns).IsWebExposed());
      result->UncheckedAppend(columnsShorthand());
      break;
    }
    case CSSPropertyID::kColumnHeight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumns).IsWebExposed());
      result->UncheckedAppend(columnsShorthand());
      break;
    }
    case CSSPropertyID::kColumnWrap: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kColumns).IsWebExposed());
      result->UncheckedAppend(columnsShorthand());
      break;
    }
    case CSSPropertyID::kContainIntrinsicWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kContainIntrinsicSize).IsWebExposed());
      result->UncheckedAppend(containIntrinsicSizeShorthand());
      break;
    }
    case CSSPropertyID::kContainIntrinsicHeight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kContainIntrinsicSize).IsWebExposed());
      result->UncheckedAppend(containIntrinsicSizeShorthand());
      break;
    }
    case CSSPropertyID::kContainerName: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kContainer).IsWebExposed());
      result->UncheckedAppend(containerShorthand());
      break;
    }
    case CSSPropertyID::kContainerType: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kContainer).IsWebExposed());
      result->UncheckedAppend(containerShorthand());
      break;
    }
    case CSSPropertyID::kCornerTopLeftShape: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerLeft).IsWebExposed())
        result->UncheckedAppend(cornerLeftShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerShape).IsWebExposed());
      result->UncheckedAppend(cornerShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTop).IsWebExposed())
        result->UncheckedAppend(cornerTopShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerLeftShape).IsWebExposed());
      result->UncheckedAppend(cornerLeftShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTopLeft).IsWebExposed())
        result->UncheckedAppend(cornerTopLeftShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerTopShape).IsWebExposed());
      result->UncheckedAppend(cornerTopShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerTopRightShape: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerRight).IsWebExposed())
        result->UncheckedAppend(cornerRightShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerShape).IsWebExposed());
      result->UncheckedAppend(cornerShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTop).IsWebExposed())
        result->UncheckedAppend(cornerTopShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerRightShape).IsWebExposed());
      result->UncheckedAppend(cornerRightShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerTopRight).IsWebExposed())
        result->UncheckedAppend(cornerTopRightShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerTopShape).IsWebExposed());
      result->UncheckedAppend(cornerTopShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerBottomRightShape: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottom).IsWebExposed())
        result->UncheckedAppend(cornerBottomShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerRight).IsWebExposed())
        result->UncheckedAppend(cornerRightShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerShape).IsWebExposed());
      result->UncheckedAppend(cornerShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottomRight).IsWebExposed())
        result->UncheckedAppend(cornerBottomRightShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBottomShape).IsWebExposed());
      result->UncheckedAppend(cornerBottomShapeShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerRightShape).IsWebExposed());
      result->UncheckedAppend(cornerRightShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerBottomLeftShape: {
      if (CSSProperty::Get(CSSPropertyID::kCorner).IsWebExposed())
        result->UncheckedAppend(cornerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottom).IsWebExposed())
        result->UncheckedAppend(cornerBottomShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerLeft).IsWebExposed())
        result->UncheckedAppend(cornerLeftShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerShape).IsWebExposed());
      result->UncheckedAppend(cornerShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerBottomLeft).IsWebExposed())
        result->UncheckedAppend(cornerBottomLeftShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBottomShape).IsWebExposed());
      result->UncheckedAppend(cornerBottomShapeShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerLeftShape).IsWebExposed());
      result->UncheckedAppend(cornerLeftShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerEndStartShape: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockEnd).IsWebExposed())
        result->UncheckedAppend(cornerBlockEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineStart).IsWebExposed())
        result->UncheckedAppend(cornerInlineStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBlockEndShape).IsWebExposed());
      result->UncheckedAppend(cornerBlockEndShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerEndStart).IsWebExposed())
        result->UncheckedAppend(cornerEndStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerInlineStartShape).IsWebExposed());
      result->UncheckedAppend(cornerInlineStartShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerEndEndShape: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockEnd).IsWebExposed())
        result->UncheckedAppend(cornerBlockEndShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineEnd).IsWebExposed())
        result->UncheckedAppend(cornerInlineEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBlockEndShape).IsWebExposed());
      result->UncheckedAppend(cornerBlockEndShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerEndEnd).IsWebExposed())
        result->UncheckedAppend(cornerEndEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerInlineEndShape).IsWebExposed());
      result->UncheckedAppend(cornerInlineEndShapeShorthand());
      break;
    }
    case CSSPropertyID::kCornerStartStartShape: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockStart).IsWebExposed())
        result->UncheckedAppend(cornerBlockStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineStart).IsWebExposed())
        result->UncheckedAppend(cornerInlineStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBlockStartShape).IsWebExposed());
      result->UncheckedAppend(cornerBlockStartShapeShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerInlineStartShape).IsWebExposed());
      result->UncheckedAppend(cornerInlineStartShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerStartStart).IsWebExposed())
        result->UncheckedAppend(cornerStartStartShorthand());
      break;
    }
    case CSSPropertyID::kCornerStartEndShape: {
      if (CSSProperty::Get(CSSPropertyID::kCornerBlockStart).IsWebExposed())
        result->UncheckedAppend(cornerBlockStartShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerInlineEnd).IsWebExposed())
        result->UncheckedAppend(cornerInlineEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerBlockStartShape).IsWebExposed());
      result->UncheckedAppend(cornerBlockStartShapeShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kCornerInlineEndShape).IsWebExposed());
      result->UncheckedAppend(cornerInlineEndShapeShorthand());
      if (CSSProperty::Get(CSSPropertyID::kCornerStartEnd).IsWebExposed())
        result->UncheckedAppend(cornerStartEndShorthand());
      break;
    }
    case CSSPropertyID::kFlexGrow: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFlex).IsWebExposed());
      result->UncheckedAppend(flexShorthand());
      break;
    }
    case CSSPropertyID::kFlexShrink: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFlex).IsWebExposed());
      result->UncheckedAppend(flexShorthand());
      break;
    }
    case CSSPropertyID::kFlexBasis: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFlex).IsWebExposed());
      result->UncheckedAppend(flexShorthand());
      break;
    }
    case CSSPropertyID::kFlexDirection: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFlexFlow).IsWebExposed());
      result->UncheckedAppend(flexFlowShorthand());
      break;
    }
    case CSSPropertyID::kFlexWrap: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFlexFlow).IsWebExposed());
      result->UncheckedAppend(flexFlowShorthand());
      break;
    }
    case CSSPropertyID::kFontStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantLigatures: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantCaps: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantNumeric: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantEastAsian: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantAlternates: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantPosition: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontVariantEmoji: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontVariant).IsWebExposed());
      result->UncheckedAppend(fontVariantShorthand());
      break;
    }
    case CSSPropertyID::kFontWeight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontStretch: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontSize: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kLineHeight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontFamily: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontOpticalSizing: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontSizeAdjust: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontKerning: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontFeatureSettings: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontVariationSettings: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontLanguageOverride: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFont).IsWebExposed());
      result->UncheckedAppend(fontShorthand());
      break;
    }
    case CSSPropertyID::kFontSynthesisWeight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontSynthesis).IsWebExposed());
      result->UncheckedAppend(fontSynthesisShorthand());
      break;
    }
    case CSSPropertyID::kFontSynthesisStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontSynthesis).IsWebExposed());
      result->UncheckedAppend(fontSynthesisShorthand());
      break;
    }
    case CSSPropertyID::kFontSynthesisSmallCaps: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kFontSynthesis).IsWebExposed());
      result->UncheckedAppend(fontSynthesisShorthand());
      break;
    }
    case CSSPropertyID::kRowGap: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGap).IsWebExposed());
      result->UncheckedAppend(gapShorthand());
      break;
    }
    case CSSPropertyID::kColumnGap: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGap).IsWebExposed());
      result->UncheckedAppend(gapShorthand());
      break;
    }
    case CSSPropertyID::kGridTemplateRows: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      if (CSSProperty::Get(CSSPropertyID::kGridLanes).IsWebExposed())
        result->UncheckedAppend(gridLanesShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridTemplate).IsWebExposed());
      result->UncheckedAppend(gridTemplateShorthand());
      break;
    }
    case CSSPropertyID::kGridTemplateColumns: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      if (CSSProperty::Get(CSSPropertyID::kGridLanes).IsWebExposed())
        result->UncheckedAppend(gridLanesShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridTemplate).IsWebExposed());
      result->UncheckedAppend(gridTemplateShorthand());
      break;
    }
    case CSSPropertyID::kGridTemplateAreas: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      if (CSSProperty::Get(CSSPropertyID::kGridLanes).IsWebExposed())
        result->UncheckedAppend(gridLanesShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridTemplate).IsWebExposed());
      result->UncheckedAppend(gridTemplateShorthand());
      break;
    }
    case CSSPropertyID::kGridAutoFlow: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      break;
    }
    case CSSPropertyID::kGridAutoRows: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      break;
    }
    case CSSPropertyID::kGridAutoColumns: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGrid).IsWebExposed());
      result->UncheckedAppend(gridShorthand());
      break;
    }
    case CSSPropertyID::kGridRowStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridArea).IsWebExposed());
      result->UncheckedAppend(gridAreaShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridRow).IsWebExposed());
      result->UncheckedAppend(gridRowShorthand());
      break;
    }
    case CSSPropertyID::kGridColumnStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridArea).IsWebExposed());
      result->UncheckedAppend(gridAreaShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridColumn).IsWebExposed());
      result->UncheckedAppend(gridColumnShorthand());
      break;
    }
    case CSSPropertyID::kGridRowEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridArea).IsWebExposed());
      result->UncheckedAppend(gridAreaShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridRow).IsWebExposed());
      result->UncheckedAppend(gridRowShorthand());
      break;
    }
    case CSSPropertyID::kGridColumnEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridArea).IsWebExposed());
      result->UncheckedAppend(gridAreaShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kGridColumn).IsWebExposed());
      result->UncheckedAppend(gridColumnShorthand());
      break;
    }
    case CSSPropertyID::kGridLanesDirection: {
      if (CSSProperty::Get(CSSPropertyID::kGridLanes).IsWebExposed())
        result->UncheckedAppend(gridLanesShorthand());
      break;
    }
    case CSSPropertyID::kTop: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInset).IsWebExposed());
      result->UncheckedAppend(insetShorthand());
      break;
    }
    case CSSPropertyID::kRight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInset).IsWebExposed());
      result->UncheckedAppend(insetShorthand());
      break;
    }
    case CSSPropertyID::kBottom: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInset).IsWebExposed());
      result->UncheckedAppend(insetShorthand());
      break;
    }
    case CSSPropertyID::kLeft: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInset).IsWebExposed());
      result->UncheckedAppend(insetShorthand());
      break;
    }
    case CSSPropertyID::kInsetBlockStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInsetBlock).IsWebExposed());
      result->UncheckedAppend(insetBlockShorthand());
      break;
    }
    case CSSPropertyID::kInsetBlockEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInsetBlock).IsWebExposed());
      result->UncheckedAppend(insetBlockShorthand());
      break;
    }
    case CSSPropertyID::kInsetInlineStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInsetInline).IsWebExposed());
      result->UncheckedAppend(insetInlineShorthand());
      break;
    }
    case CSSPropertyID::kInsetInlineEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInsetInline).IsWebExposed());
      result->UncheckedAppend(insetInlineShorthand());
      break;
    }
    case CSSPropertyID::kInterestDelayStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInterestDelay).IsWebExposed());
      result->UncheckedAppend(interestDelayShorthand());
      break;
    }
    case CSSPropertyID::kInterestDelayEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kInterestDelay).IsWebExposed());
      result->UncheckedAppend(interestDelayShorthand());
      break;
    }
    case CSSPropertyID::kListStylePosition: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kListStyle).IsWebExposed());
      result->UncheckedAppend(listStyleShorthand());
      break;
    }
    case CSSPropertyID::kListStyleImage: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kListStyle).IsWebExposed());
      result->UncheckedAppend(listStyleShorthand());
      break;
    }
    case CSSPropertyID::kListStyleType: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kListStyle).IsWebExposed());
      result->UncheckedAppend(listStyleShorthand());
      break;
    }
    case CSSPropertyID::kMarginTop: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMargin).IsWebExposed());
      result->UncheckedAppend(marginShorthand());
      break;
    }
    case CSSPropertyID::kMarginRight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMargin).IsWebExposed());
      result->UncheckedAppend(marginShorthand());
      break;
    }
    case CSSPropertyID::kMarginBottom: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMargin).IsWebExposed());
      result->UncheckedAppend(marginShorthand());
      break;
    }
    case CSSPropertyID::kMarginLeft: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMargin).IsWebExposed());
      result->UncheckedAppend(marginShorthand());
      break;
    }
    case CSSPropertyID::kMarginBlockStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarginBlock).IsWebExposed());
      result->UncheckedAppend(marginBlockShorthand());
      break;
    }
    case CSSPropertyID::kMarginBlockEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarginBlock).IsWebExposed());
      result->UncheckedAppend(marginBlockShorthand());
      break;
    }
    case CSSPropertyID::kMarginInlineStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarginInline).IsWebExposed());
      result->UncheckedAppend(marginInlineShorthand());
      break;
    }
    case CSSPropertyID::kMarginInlineEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarginInline).IsWebExposed());
      result->UncheckedAppend(marginInlineShorthand());
      break;
    }
    case CSSPropertyID::kMarkerStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarker).IsWebExposed());
      result->UncheckedAppend(markerShorthand());
      break;
    }
    case CSSPropertyID::kMarkerMid: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarker).IsWebExposed());
      result->UncheckedAppend(markerShorthand());
      break;
    }
    case CSSPropertyID::kMarkerEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMarker).IsWebExposed());
      result->UncheckedAppend(markerShorthand());
      break;
    }
    case CSSPropertyID::kMaskImage: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskPositionX: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kMaskPosition).IsWebExposed());
      result->UncheckedAppend(maskPositionShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskPositionY: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kMaskPosition).IsWebExposed());
      result->UncheckedAppend(maskPositionShorthand());
      break;
    }
    case CSSPropertyID::kMaskSize: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kMaskRepeat: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kMaskOrigin: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kMaskClip: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kMaskComposite: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kMaskMode: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kMask).IsWebExposed());
      result->UncheckedAppend(maskShorthand());
      break;
    }
    case CSSPropertyID::kOffsetPosition: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOffset).IsWebExposed());
      result->UncheckedAppend(offsetShorthand());
      break;
    }
    case CSSPropertyID::kOffsetPath: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOffset).IsWebExposed());
      result->UncheckedAppend(offsetShorthand());
      break;
    }
    case CSSPropertyID::kOffsetDistance: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOffset).IsWebExposed());
      result->UncheckedAppend(offsetShorthand());
      break;
    }
    case CSSPropertyID::kOffsetRotate: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOffset).IsWebExposed());
      result->UncheckedAppend(offsetShorthand());
      break;
    }
    case CSSPropertyID::kOffsetAnchor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOffset).IsWebExposed());
      result->UncheckedAppend(offsetShorthand());
      break;
    }
    case CSSPropertyID::kOutlineColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOutline).IsWebExposed());
      result->UncheckedAppend(outlineShorthand());
      break;
    }
    case CSSPropertyID::kOutlineStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOutline).IsWebExposed());
      result->UncheckedAppend(outlineShorthand());
      break;
    }
    case CSSPropertyID::kOutlineWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOutline).IsWebExposed());
      result->UncheckedAppend(outlineShorthand());
      break;
    }
    case CSSPropertyID::kOverflowX: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOverflow).IsWebExposed());
      result->UncheckedAppend(overflowShorthand());
      break;
    }
    case CSSPropertyID::kOverflowY: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOverflow).IsWebExposed());
      result->UncheckedAppend(overflowShorthand());
      break;
    }
    case CSSPropertyID::kOverscrollBehaviorX: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOverscrollBehavior).IsWebExposed());
      result->UncheckedAppend(overscrollBehaviorShorthand());
      break;
    }
    case CSSPropertyID::kOverscrollBehaviorY: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kOverscrollBehavior).IsWebExposed());
      result->UncheckedAppend(overscrollBehaviorShorthand());
      break;
    }
    case CSSPropertyID::kPaddingTop: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPadding).IsWebExposed());
      result->UncheckedAppend(paddingShorthand());
      break;
    }
    case CSSPropertyID::kPaddingRight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPadding).IsWebExposed());
      result->UncheckedAppend(paddingShorthand());
      break;
    }
    case CSSPropertyID::kPaddingBottom: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPadding).IsWebExposed());
      result->UncheckedAppend(paddingShorthand());
      break;
    }
    case CSSPropertyID::kPaddingLeft: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPadding).IsWebExposed());
      result->UncheckedAppend(paddingShorthand());
      break;
    }
    case CSSPropertyID::kPaddingBlockStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPaddingBlock).IsWebExposed());
      result->UncheckedAppend(paddingBlockShorthand());
      break;
    }
    case CSSPropertyID::kPaddingBlockEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPaddingBlock).IsWebExposed());
      result->UncheckedAppend(paddingBlockShorthand());
      break;
    }
    case CSSPropertyID::kPaddingInlineStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPaddingInline).IsWebExposed());
      result->UncheckedAppend(paddingInlineShorthand());
      break;
    }
    case CSSPropertyID::kPaddingInlineEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPaddingInline).IsWebExposed());
      result->UncheckedAppend(paddingInlineShorthand());
      break;
    }
    case CSSPropertyID::kBreakAfter: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPageBreakAfter).IsWebExposed());
      result->UncheckedAppend(pageBreakAfterShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitColumnBreakAfter).IsWebExposed());
      result->UncheckedAppend(webkitColumnBreakAfterShorthand());
      break;
    }
    case CSSPropertyID::kBreakBefore: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPageBreakBefore).IsWebExposed());
      result->UncheckedAppend(pageBreakBeforeShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitColumnBreakBefore).IsWebExposed());
      result->UncheckedAppend(webkitColumnBreakBeforeShorthand());
      break;
    }
    case CSSPropertyID::kBreakInside: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPageBreakInside).IsWebExposed());
      result->UncheckedAppend(pageBreakInsideShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitColumnBreakInside).IsWebExposed());
      result->UncheckedAppend(webkitColumnBreakInsideShorthand());
      break;
    }
    case CSSPropertyID::kAlignContent: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceContent).IsWebExposed());
      result->UncheckedAppend(placeContentShorthand());
      break;
    }
    case CSSPropertyID::kJustifyContent: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceContent).IsWebExposed());
      result->UncheckedAppend(placeContentShorthand());
      break;
    }
    case CSSPropertyID::kAlignItems: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceItems).IsWebExposed());
      result->UncheckedAppend(placeItemsShorthand());
      break;
    }
    case CSSPropertyID::kJustifyItems: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceItems).IsWebExposed());
      result->UncheckedAppend(placeItemsShorthand());
      break;
    }
    case CSSPropertyID::kAlignSelf: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceSelf).IsWebExposed());
      result->UncheckedAppend(placeSelfShorthand());
      break;
    }
    case CSSPropertyID::kJustifySelf: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPlaceSelf).IsWebExposed());
      result->UncheckedAppend(placeSelfShorthand());
      break;
    }
    case CSSPropertyID::kPositionTryOrder: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPositionTry).IsWebExposed());
      result->UncheckedAppend(positionTryShorthand());
      break;
    }
    case CSSPropertyID::kPositionTryFallbacks: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kPositionTry).IsWebExposed());
      result->UncheckedAppend(positionTryShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRule).IsWebExposed());
      result->UncheckedAppend(rowRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleWidth).IsWebExposed());
      result->UncheckedAppend(ruleWidthShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRule).IsWebExposed());
      result->UncheckedAppend(rowRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleStyle).IsWebExposed());
      result->UncheckedAppend(ruleStyleShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRule).IsWebExposed());
      result->UncheckedAppend(ruleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRule).IsWebExposed());
      result->UncheckedAppend(rowRuleShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleColor).IsWebExposed());
      result->UncheckedAppend(ruleColorShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleInsetCapStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInset).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(ruleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(ruleInsetStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetStartShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleInsetCapEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInset).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(ruleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(ruleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetCap).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetCapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetEndShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleInsetJunctionStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInset).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(ruleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(ruleInsetStartShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetStart).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetStartShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleInsetJunctionEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInset).IsWebExposed());
      result->UncheckedAppend(ruleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInset).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(ruleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(ruleInsetJunctionShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetEnd).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetEndShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kRowRuleInsetJunction).IsWebExposed());
      result->UncheckedAppend(rowRuleInsetJunctionShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleBreak: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleBreak).IsWebExposed());
      result->UncheckedAppend(ruleBreakShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleBreak: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleBreak).IsWebExposed());
      result->UncheckedAppend(ruleBreakShorthand());
      break;
    }
    case CSSPropertyID::kColumnRuleVisibilityItems: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleVisibilityItems).IsWebExposed());
      result->UncheckedAppend(ruleVisibilityItemsShorthand());
      break;
    }
    case CSSPropertyID::kRowRuleVisibilityItems: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kRuleVisibilityItems).IsWebExposed());
      result->UncheckedAppend(ruleVisibilityItemsShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginTop: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMargin).IsWebExposed());
      result->UncheckedAppend(scrollMarginShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginRight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMargin).IsWebExposed());
      result->UncheckedAppend(scrollMarginShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginBottom: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMargin).IsWebExposed());
      result->UncheckedAppend(scrollMarginShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginLeft: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMargin).IsWebExposed());
      result->UncheckedAppend(scrollMarginShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginBlockStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMarginBlock).IsWebExposed());
      result->UncheckedAppend(scrollMarginBlockShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginBlockEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMarginBlock).IsWebExposed());
      result->UncheckedAppend(scrollMarginBlockShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginInlineStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMarginInline).IsWebExposed());
      result->UncheckedAppend(scrollMarginInlineShorthand());
      break;
    }
    case CSSPropertyID::kScrollMarginInlineEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollMarginInline).IsWebExposed());
      result->UncheckedAppend(scrollMarginInlineShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingTop: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPadding).IsWebExposed());
      result->UncheckedAppend(scrollPaddingShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingRight: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPadding).IsWebExposed());
      result->UncheckedAppend(scrollPaddingShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingBottom: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPadding).IsWebExposed());
      result->UncheckedAppend(scrollPaddingShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingLeft: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPadding).IsWebExposed());
      result->UncheckedAppend(scrollPaddingShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingBlockStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPaddingBlock).IsWebExposed());
      result->UncheckedAppend(scrollPaddingBlockShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingBlockEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPaddingBlock).IsWebExposed());
      result->UncheckedAppend(scrollPaddingBlockShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingInlineStart: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPaddingInline).IsWebExposed());
      result->UncheckedAppend(scrollPaddingInlineShorthand());
      break;
    }
    case CSSPropertyID::kScrollPaddingInlineEnd: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollPaddingInline).IsWebExposed());
      result->UncheckedAppend(scrollPaddingInlineShorthand());
      break;
    }
    case CSSPropertyID::kScrollTimelineName: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollTimeline).IsWebExposed());
      result->UncheckedAppend(scrollTimelineShorthand());
      break;
    }
    case CSSPropertyID::kScrollTimelineAxis: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kScrollTimeline).IsWebExposed());
      result->UncheckedAppend(scrollTimelineShorthand());
      break;
    }
    case CSSPropertyID::kTextBoxTrim: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextBox).IsWebExposed());
      result->UncheckedAppend(textBoxShorthand());
      break;
    }
    case CSSPropertyID::kTextBoxEdge: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextBox).IsWebExposed());
      result->UncheckedAppend(textBoxShorthand());
      break;
    }
    case CSSPropertyID::kTextDecorationLine: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextDecoration).IsWebExposed());
      result->UncheckedAppend(textDecorationShorthand());
      break;
    }
    case CSSPropertyID::kTextDecorationThickness: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextDecoration).IsWebExposed());
      result->UncheckedAppend(textDecorationShorthand());
      break;
    }
    case CSSPropertyID::kTextDecorationStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextDecoration).IsWebExposed());
      result->UncheckedAppend(textDecorationShorthand());
      break;
    }
    case CSSPropertyID::kTextDecorationColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextDecoration).IsWebExposed());
      result->UncheckedAppend(textDecorationShorthand());
      break;
    }
    case CSSPropertyID::kTextEmphasisStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextEmphasis).IsWebExposed());
      result->UncheckedAppend(textEmphasisShorthand());
      break;
    }
    case CSSPropertyID::kTextEmphasisColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextEmphasis).IsWebExposed());
      result->UncheckedAppend(textEmphasisShorthand());
      break;
    }
    case CSSPropertyID::kTextAutospace: {
      if (CSSProperty::Get(CSSPropertyID::kTextSpacing).IsWebExposed())
        result->UncheckedAppend(textSpacingShorthand());
      break;
    }
    case CSSPropertyID::kTextSpacingTrim: {
      if (CSSProperty::Get(CSSPropertyID::kTextSpacing).IsWebExposed())
        result->UncheckedAppend(textSpacingShorthand());
      break;
    }
    case CSSPropertyID::kTextWrapMode: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextWrap).IsWebExposed());
      result->UncheckedAppend(textWrapShorthand());
      DCHECK(CSSProperty::Get(CSSPropertyID::kWhiteSpace).IsWebExposed());
      result->UncheckedAppend(whiteSpaceShorthand());
      break;
    }
    case CSSPropertyID::kTextWrapStyle: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTextWrap).IsWebExposed());
      result->UncheckedAppend(textWrapShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerName: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerSource: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerActivationRangeStart: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kTimelineTriggerActivationRange).IsWebExposed())
        result->UncheckedAppend(timelineTriggerActivationRangeShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerActivationRangeEnd: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kTimelineTriggerActivationRange).IsWebExposed())
        result->UncheckedAppend(timelineTriggerActivationRangeShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerActiveRangeStart: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kTimelineTriggerActiveRange).IsWebExposed())
        result->UncheckedAppend(timelineTriggerActiveRangeShorthand());
      break;
    }
    case CSSPropertyID::kTimelineTriggerActiveRangeEnd: {
      if (CSSProperty::Get(CSSPropertyID::kTimelineTrigger).IsWebExposed())
        result->UncheckedAppend(timelineTriggerShorthand());
      if (CSSProperty::Get(CSSPropertyID::kTimelineTriggerActiveRange).IsWebExposed())
        result->UncheckedAppend(timelineTriggerActiveRangeShorthand());
      break;
    }
    case CSSPropertyID::kTransitionProperty: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTransition).IsWebExposed());
      result->UncheckedAppend(transitionShorthand());
      break;
    }
    case CSSPropertyID::kTransitionDuration: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTransition).IsWebExposed());
      result->UncheckedAppend(transitionShorthand());
      break;
    }
    case CSSPropertyID::kTransitionTimingFunction: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTransition).IsWebExposed());
      result->UncheckedAppend(transitionShorthand());
      break;
    }
    case CSSPropertyID::kTransitionDelay: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTransition).IsWebExposed());
      result->UncheckedAppend(transitionShorthand());
      break;
    }
    case CSSPropertyID::kTransitionBehavior: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kTransition).IsWebExposed());
      result->UncheckedAppend(transitionShorthand());
      break;
    }
    case CSSPropertyID::kViewTimelineName: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kViewTimeline).IsWebExposed());
      result->UncheckedAppend(viewTimelineShorthand());
      break;
    }
    case CSSPropertyID::kViewTimelineAxis: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kViewTimeline).IsWebExposed());
      result->UncheckedAppend(viewTimelineShorthand());
      break;
    }
    case CSSPropertyID::kViewTimelineInset: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kViewTimeline).IsWebExposed());
      result->UncheckedAppend(viewTimelineShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskBoxImageSource: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitMaskBoxImage).IsWebExposed());
      result->UncheckedAppend(webkitMaskBoxImageShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskBoxImageSlice: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitMaskBoxImage).IsWebExposed());
      result->UncheckedAppend(webkitMaskBoxImageShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskBoxImageWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitMaskBoxImage).IsWebExposed());
      result->UncheckedAppend(webkitMaskBoxImageShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskBoxImageOutset: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitMaskBoxImage).IsWebExposed());
      result->UncheckedAppend(webkitMaskBoxImageShorthand());
      break;
    }
    case CSSPropertyID::kWebkitMaskBoxImageRepeat: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitMaskBoxImage).IsWebExposed());
      result->UncheckedAppend(webkitMaskBoxImageShorthand());
      break;
    }
    case CSSPropertyID::kWebkitTextStrokeWidth: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitTextStroke).IsWebExposed());
      result->UncheckedAppend(webkitTextStrokeShorthand());
      break;
    }
    case CSSPropertyID::kWebkitTextStrokeColor: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWebkitTextStroke).IsWebExposed());
      result->UncheckedAppend(webkitTextStrokeShorthand());
      break;
    }
    case CSSPropertyID::kWhiteSpaceCollapse: {
      DCHECK(CSSProperty::Get(CSSPropertyID::kWhiteSpace).IsWebExposed());
      result->UncheckedAppend(whiteSpaceShorthand());
      break;
    }
    default:
      break;
  }
}

} // namespace blink
