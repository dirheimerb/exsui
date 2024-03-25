**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / VendorShorthandProperties

# Interface: VendorShorthandProperties\<TLength, TTime\>

## Extended by

- [`VendorProperties`](VendorProperties.md)

## Type parameters

• **TLength** = `string` & `Object` \| `0`

• **TTime** = `string` & `Object`

## Properties

### MozAnimation?

> **`optional`** **MozAnimation**: [`Animation`](../type-aliases/Animation.md)\<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7876

***

### MozBorderImage?

> **`optional`** **MozBorderImage**: [`BorderImage`](../type-aliases/BorderImage.md)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7882

***

### MozColumnRule?

> **`optional`** **MozColumnRule**: [`ColumnRule`](../type-aliases/ColumnRule.md)\<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7888

***

### MozColumns?

> **`optional`** **MozColumns**: [`Columns`](../type-aliases/Columns.md)\<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7894

***

### MozOutlineRadius?

> **`optional`** **MozOutlineRadius**: [`MozOutlineRadius`](../type-aliases/MozOutlineRadius.md)\<`TLength`\>

In Mozilla applications like Firefox, the **`-moz-outline-radius`** CSS shorthand property can be used to give an element's `outline` rounded corners.

**Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7900

***

### WebkitAnimation?

> **`optional`** **WebkitAnimation**: [`Animation`](../type-aliases/Animation.md)\<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7948

***

### WebkitBorderBefore?

> **`optional`** **WebkitBorderBefore**: [`WebkitBorderBefore`](../type-aliases/WebkitBorderBefore.md)\<`TLength`\>

The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.

**Syntax**: `<'border-width'> || <'border-style'> || <color>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7954

***

### WebkitBorderImage?

> **`optional`** **WebkitBorderImage**: [`BorderImage`](../type-aliases/BorderImage.md)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7960

***

### WebkitBorderRadius?

> **`optional`** **WebkitBorderRadius**: [`BorderRadius`](../type-aliases/BorderRadius.md)\<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7966

***

### WebkitColumnRule?

> **`optional`** **WebkitColumnRule**: [`ColumnRule`](../type-aliases/ColumnRule.md)\<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7972

***

### WebkitColumns?

> **`optional`** **WebkitColumns**: [`Columns`](../type-aliases/Columns.md)\<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7978

***

### WebkitFlex?

> **`optional`** **WebkitFlex**: [`Flex`](../type-aliases/Flex.md)\<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7984

***

### WebkitFlexFlow?

> **`optional`** **WebkitFlexFlow**: [`FlexFlow`](../type-aliases/FlexFlow.md)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7990

***

### WebkitMask?

> **`optional`** **WebkitMask**: [`WebkitMask`](../type-aliases/WebkitMask.md)\<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7996

***

### WebkitMaskBoxImage?

> **`optional`** **WebkitMaskBoxImage**: [`MaskBorder`](../type-aliases/MaskBorder.md)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:8002

***

### WebkitTextEmphasis?

> **`optional`** **WebkitTextEmphasis**: [`TextEmphasis`](../type-aliases/TextEmphasis.md)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:8008

***

### WebkitTextStroke?

> **`optional`** **WebkitTextStroke**: [`WebkitTextStroke`](../type-aliases/WebkitTextStroke.md)\<`TLength`\>

The **`-webkit-text-stroke`** CSS property specifies the width and color of strokes for text characters. This is a shorthand property for the longhand properties `-webkit-text-stroke-width` and `-webkit-text-stroke-color`.

**Syntax**: `<length> || <color>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:8014

***

### WebkitTransition?

> **`optional`** **WebkitTransition**: [`Transition`](../type-aliases/Transition.md)\<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:8020

***

### msContentZoomLimit?

> **`optional`** **msContentZoomLimit**: [`MsContentZoomLimit`](../type-aliases/MsContentZoomLimit.md)

The **`-ms-content-zoom-limit`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-limit-min` and `-ms-content-zoom-limit-max` properties.

**Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7906

***

### msContentZoomSnap?

> **`optional`** **msContentZoomSnap**: [`MsContentZoomSnap`](../type-aliases/MsContentZoomSnap.md)

The **`-ms-content-zoom-snap`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-content-zoom-snap-type` and `-ms-content-zoom-snap-points` properties.

**Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7912

***

### msFlex?

> **`optional`** **msFlex**: [`Flex`](../type-aliases/Flex.md)\<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7918

***

### msScrollLimit?

> **`optional`** **msScrollLimit**: [`MsScrollLimit`](../type-aliases/MsScrollLimit.md)

The **\-ms-scroll-limit** CSS property is a Microsoft extension that specifies values for the `-ms-scroll-limit-x-min`, `-ms-scroll-limit-y-min`, `-ms-scroll-limit-x-max`, and `-ms-scroll-limit-y-max` properties.

**Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7924

***

### msScrollSnapX?

> **`optional`** **msScrollSnapX**: [`MsScrollSnapX`](../type-aliases/MsScrollSnapX.md)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-x` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7930

***

### msScrollSnapY?

> **`optional`** **msScrollSnapY**: [`MsScrollSnapY`](../type-aliases/MsScrollSnapY.md)

The **`-ms-scroll-snap-x`** CSS shorthand property is a Microsoft extension that specifies values for the `-ms-scroll-snap-type` and `-ms-scroll-snap-points-y` properties.

**Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7936

***

### msTransition?

> **`optional`** **msTransition**: [`Transition`](../type-aliases/Transition.md)\<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:7942
