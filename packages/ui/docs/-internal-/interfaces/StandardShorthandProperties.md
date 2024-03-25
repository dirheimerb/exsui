**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / StandardShorthandProperties

# Interface: StandardShorthandProperties\<TLength, TTime\>

## Extended by

- [`StandardProperties`](StandardProperties.md)

## Type parameters

• **TLength** = `string` & `Object` \| `0`

• **TTime** = `string` & `Object`

## Properties

### all?

> **`optional`** **all**: [`Globals`](../type-aliases/Globals.md)

The **`all`** shorthand CSS property resets all of an element's properties except `unicode-bidi`, `direction`, and CSS Custom Properties. It can set properties to their initial or inherited values, or to the values specified in another cascade layer or stylesheet origin.

**Syntax**: `initial | inherit | unset | revert | revert-layer`

**Initial value**: There is no practical initial value for it.

| Chrome | Firefox | Safari  | Edge | IE  |
| :----: | :-----: | :-----: | :--: | :-: |
| **37** | **27**  | **9.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/all

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5299

***

### animation?

> **`optional`** **animation**: [`Animation`](../type-aliases/Animation.md)\<`TTime`\>

The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

**Syntax**: `<single-animation>#`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **43**  | **16**  |  **9**  | **12** | **10** |
| 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/animation

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5312

***

### animationRange?

> **`optional`** **animationRange**: [`AnimationRange`](../type-aliases/AnimationRange.md)\<`TLength`\>

The **`animation-range`** CSS shorthand property is used to set the start and end of an animation's attachment range along its timeline, i.e. where along the timeline an animation will start and end.

**Syntax**: `[ <'animation-range-start'> <'animation-range-end'>? ]#`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **115** |   No    |   No   | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/animation-range

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5324

***

### background?

> **`optional`** **background**: [`Background`](../type-aliases/Background.md)\<`TLength`\>

The **`background`** shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.

**Syntax**: `[ <bg-layer> , ]* <final-bg-layer>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/background

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5336

***

### backgroundPosition?

> **`optional`** **backgroundPosition**: [`BackgroundPosition`](../type-aliases/BackgroundPosition.md)\<`TLength`\>

The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.

**Syntax**: `<bg-position>#`

**Initial value**: `0% 0%`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/background-position

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5350

***

### border?

> **`optional`** **border**: [`Border`](../type-aliases/Border.md)\<`TLength`\>

The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5362

***

### borderBlock?

> **`optional`** **borderBlock**: [`BorderBlock`](../type-aliases/BorderBlock.md)\<`TLength`\>

The **`border-block`** CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5374

***

### borderBlockEnd?

> **`optional`** **borderBlockEnd**: [`BorderBlockEnd`](../type-aliases/BorderBlockEnd.md)\<`TLength`\>

The **`border-block-end`** CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-block-end

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5386

***

### borderBlockStart?

> **`optional`** **borderBlockStart**: [`BorderBlockStart`](../type-aliases/BorderBlockStart.md)\<`TLength`\>

The **`border-block-start`** CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-block-start

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5398

***

### borderBottom?

> **`optional`** **borderBottom**: [`BorderBottom`](../type-aliases/BorderBottom.md)\<`TLength`\>

The **`border-bottom`** shorthand CSS property sets an element's bottom border. It sets the values of `border-bottom-width`, `border-bottom-style` and `border-bottom-color`.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-bottom

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5410

***

### borderColor?

> **`optional`** **borderColor**: [`BorderColor`](../type-aliases/BorderColor.md)

The **`border-color`** shorthand CSS property sets the color of an element's border.

**Syntax**: `<color>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-color

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5422

***

### borderImage?

> **`optional`** **borderImage**: [`BorderImage`](../type-aliases/BorderImage.md)

The **`border-image`** CSS property draws an image around a given element. It replaces the element's regular border.

**Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`

| Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
| :-----: | :-------: | :-----: | :----: | :----: |
| **16**  |  **15**   |  **6**  | **12** | **11** |
| 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-image

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5435

***

### borderInline?

> **`optional`** **borderInline**: [`BorderInline`](../type-aliases/BorderInline.md)\<`TLength`\>

The **`border-inline`** CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5447

***

### borderInlineEnd?

> **`optional`** **borderInlineEnd**: [`BorderInlineEnd`](../type-aliases/BorderInlineEnd.md)\<`TLength`\>

The **`border-inline-end`** CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-inline-end

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5459

***

### borderInlineStart?

> **`optional`** **borderInlineStart**: [`BorderInlineStart`](../type-aliases/BorderInlineStart.md)\<`TLength`\>

The **`border-inline-start`** CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.

**Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **41**  | **12.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-inline-start

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5471

***

### borderLeft?

> **`optional`** **borderLeft**: [`BorderLeft`](../type-aliases/BorderLeft.md)\<`TLength`\>

The **`border-left`** shorthand CSS property sets all the properties of an element's left border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-left

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5483

***

### borderRadius?

> **`optional`** **borderRadius**: [`BorderRadius`](../type-aliases/BorderRadius.md)\<`TLength`\>

The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

**Syntax**: `<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?`

| Chrome  | Firefox | Safari  |  Edge  |  IE   |
| :-----: | :-----: | :-----: | :----: | :---: |
|  **4**  |  **4**  |  **5**  | **12** | **9** |
| 1 _-x-_ |         | 3 _-x-_ |        |       |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-radius

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5496

***

### borderRight?

> **`optional`** **borderRight**: [`BorderRight`](../type-aliases/BorderRight.md)\<`TLength`\>

The **`border-right`** shorthand CSS property sets all the properties of an element's right border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |   IE    |
| :----: | :-----: | :----: | :----: | :-----: |
| **1**  |  **1**  | **1**  | **12** | **5.5** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-right

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5508

***

### borderStyle?

> **`optional`** **borderStyle**: [`BorderStyle`](../type-aliases/BorderStyle.md)

The **`border-style`** shorthand CSS property sets the line style for all four sides of an element's border.

**Syntax**: `<line-style>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-style

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5520

***

### borderTop?

> **`optional`** **borderTop**: [`BorderTop`](../type-aliases/BorderTop.md)\<`TLength`\>

The **`border-top`** shorthand CSS property sets all the properties of an element's top border.

**Syntax**: `<line-width> || <line-style> || <color>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-top

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5532

***

### borderWidth?

> **`optional`** **borderWidth**: [`BorderWidth`](../type-aliases/BorderWidth.md)\<`TLength`\>

The **`border-width`** shorthand CSS property sets the width of an element's border.

**Syntax**: `<line-width>{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/border-width

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5544

***

### caret?

> **`optional`** **caret**: [`Caret`](../type-aliases/Caret.md)

**Syntax**: `<'caret-color'> || <'caret-shape'>`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5546

***

### columnRule?

> **`optional`** **columnRule**: [`ColumnRule`](../type-aliases/ColumnRule.md)\<`TLength`\>

The **`column-rule`** shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.

**Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`

| Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :-----: | :-----: | :-----: | :----: | :----: |
| **50**  | **52**  |  **9**  | **12** | **10** |
| 1 _-x-_ |         | 3 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/column-rule

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5559

***

### columns?

> **`optional`** **columns**: [`Columns`](../type-aliases/Columns.md)\<`TLength`\>

The **`columns`** CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.

**Syntax**: `<'column-width'> || <'column-count'>`

| Chrome | Firefox | Safari  |  Edge  |   IE   |
| :----: | :-----: | :-----: | :----: | :----: |
| **50** | **52**  |  **9**  | **12** | **10** |
|        |         | 3 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/columns

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5572

***

### containIntrinsicSize?

> **`optional`** **containIntrinsicSize**: [`ContainIntrinsicSize`](../type-aliases/ContainIntrinsicSize.md)\<`TLength`\>

The **`contain-intrinsic-size`** CSS shorthand property sets the size of an element that a browser will use for layout when the element is subject to size containment.

**Syntax**: `[ auto? [ none | <length> ] ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **83** | **107** | **17** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/contain-intrinsic-size

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5584

***

### container?

> **`optional`** **container**: [`Container`](../type-aliases/Container.md)

The **container** shorthand CSS property establishes the element as a query container and specifies the name or name for the containment context used in a container query.

**Syntax**: `<'container-name'> [ / <'container-type'> ]?`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **105** | **110** | **16** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/container

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5596

***

### flex?

> **`optional`** **flex**: [`Flex`](../type-aliases/Flex.md)\<`TLength`\>

The **`flex`** CSS shorthand property sets how a flex _item_ will grow or shrink to fit the space available in its flex container.

**Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`

|  Chrome  | Firefox | Safari  |  Edge  |    IE    |
| :------: | :-----: | :-----: | :----: | :------: |
|  **29**  | **20**  |  **9**  | **12** |  **11**  |
| 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |

#### See

https://developer.mozilla.org/docs/Web/CSS/flex

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5609

***

### flexFlow?

> **`optional`** **flexFlow**: [`FlexFlow`](../type-aliases/FlexFlow.md)

The **`flex-flow`** CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

**Syntax**: `<'flex-direction'> || <'flex-wrap'>`

|  Chrome  | Firefox | Safari  |  Edge  |   IE   |
| :------: | :-----: | :-----: | :----: | :----: |
|  **29**  | **28**  |  **9**  | **12** | **11** |
| 21 _-x-_ |         | 7 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/flex-flow

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5622

***

### font?

> **`optional`** **font**: [`Font`](../type-aliases/Font.md)

The **`font`** CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.

**Syntax**: `[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

#### See

https://developer.mozilla.org/docs/Web/CSS/font

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5634

***

### gap?

> **`optional`** **gap**: [`Gap`](../type-aliases/Gap.md)\<`TLength`\>

The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

**Syntax**: `<'row-gap'> <'column-gap'>?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/gap

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5646

***

### grid?

> **`optional`** **grid**: [`Grid`](../type-aliases/Grid.md)

The **`grid`** CSS property is a shorthand property that sets all of the explicit and implicit grid properties in a single declaration.

**Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/grid

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5658

***

### gridArea?

> **`optional`** **gridArea**: [`GridArea`](../type-aliases/GridArea.md)

The **`grid-area`** CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/grid-area

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5670

***

### gridColumn?

> **`optional`** **gridColumn**: [`GridColumn`](../type-aliases/GridColumn.md)

The **`grid-column`** CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/grid-column

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5682

***

### gridRow?

> **`optional`** **gridRow**: [`GridRow`](../type-aliases/GridRow.md)

The **`grid-row`** CSS shorthand property specifies a grid item's size and location within a grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.

**Syntax**: `<grid-line> [ / <grid-line> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/grid-row

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5694

***

### gridTemplate?

> **`optional`** **gridTemplate**: [`GridTemplate`](../type-aliases/GridTemplate.md)

The **`grid-template`** CSS property is a shorthand property for defining grid columns, grid rows, and grid areas.

**Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

| Chrome | Firefox |  Safari  |  Edge  | IE  |
| :----: | :-----: | :------: | :----: | :-: |
| **57** | **52**  | **10.1** | **16** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/grid-template

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5706

***

### inset?

> **`optional`** **inset**: [`Inset`](../type-aliases/Inset.md)\<`TLength`\>

The **`inset`** CSS property is a shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties. It has the same multi-value syntax of the `margin` shorthand.

**Syntax**: `<'top'>{1,4}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/inset

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5718

***

### insetBlock?

> **`optional`** **insetBlock**: [`InsetBlock`](../type-aliases/InsetBlock.md)\<`TLength`\>

The **`inset-block`** CSS property defines the logical block start and end offsets of an element, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/inset-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5730

***

### insetInline?

> **`optional`** **insetInline**: [`InsetInline`](../type-aliases/InsetInline.md)\<`TLength`\>

The **`inset-inline`** CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the `top` and `bottom`, or `right` and `left` properties depending on the values defined for `writing-mode`, `direction`, and `text-orientation`.

**Syntax**: `<'top'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **63**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/inset-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5742

***

### lineClamp?

> **`optional`** **lineClamp**: [`LineClamp`](../type-aliases/LineClamp.md)

**Syntax**: `none | <integer>`

**Initial value**: `none`

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5748

***

### listStyle?

> **`optional`** **listStyle**: [`ListStyle`](../type-aliases/ListStyle.md)

The **`list-style`** CSS shorthand property allows you to set all the list style properties at once.

**Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/list-style

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5760

***

### margin?

> **`optional`** **margin**: [`Margin`](../type-aliases/Margin.md)\<`TLength`\>

The **`margin`** CSS shorthand property sets the margin area on all four sides of an element.

**Syntax**: `[ <length> | <percentage> | auto ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

#### See

https://developer.mozilla.org/docs/Web/CSS/margin

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5772

***

### marginBlock?

> **`optional`** **marginBlock**: [`MarginBlock`](../type-aliases/MarginBlock.md)\<`TLength`\>

The **`margin-block`** CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/margin-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5784

***

### marginInline?

> **`optional`** **marginInline**: [`MarginInline`](../type-aliases/MarginInline.md)\<`TLength`\>

The **`margin-inline`** CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'margin-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/margin-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5796

***

### mask?

> **`optional`** **mask**: [`Mask`](../type-aliases/Mask.md)\<`TLength`\>

The **`mask`** CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.

**Syntax**: `<mask-layer>#`

| Chrome | Firefox |  Safari   | Edge  | IE  |
| :----: | :-----: | :-------: | :---: | :-: |
| **1**  | **53**  | **15.4**  | 12-79 | No  |
|        |         | 3.1 _-x-_ |       |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/mask

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5809

***

### maskBorder?

> **`optional`** **maskBorder**: [`MaskBorder`](../type-aliases/MaskBorder.md)

The **`mask-border`** CSS shorthand property lets you create a mask along the edge of an element's border.

**Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`

|              Chrome              | Firefox |             Safari             | Edge | IE  |
| :------------------------------: | :-----: | :----------------------------: | :--: | :-: |
| **1** _(-webkit-mask-box-image)_ |   No    |            **17.2**            | n/a  | No  |
|                                  |         | 3.1 _(-webkit-mask-box-image)_ |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/mask-border

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5822

***

### motion?

> **`optional`** **motion**: [`Offset`](../type-aliases/Offset.md)\<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/offset

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5835

***

### offset?

> **`optional`** **offset**: [`Offset`](../type-aliases/Offset.md)\<`TLength`\>

The **`offset`** CSS shorthand property sets all the properties required for animating an element along a defined path.

**Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`

|    Chrome     | Firefox | Safari | Edge | IE  |
| :-----------: | :-----: | :----: | :--: | :-: |
|    **55**     | **72**  | **16** | n/a  | No  |
| 46 _(motion)_ |         |        |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/offset

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5848

***

### outline?

> **`optional`** **outline**: [`Outline`](../type-aliases/Outline.md)\<`TLength`\>

The **`outline`** CSS shorthand property sets most of the outline properties in a single declaration.

**Syntax**: `[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]`

| Chrome | Firefox |  Safari  |  Edge  |  IE   |
| :----: | :-----: | :------: | :----: | :---: |
| **94** | **88**  | **16.4** | **94** | **8** |

#### See

https://developer.mozilla.org/docs/Web/CSS/outline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5860

***

### overflow?

> **`optional`** **overflow**: [`Overflow`](../type-aliases/Overflow.md)

The **`overflow`** CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.

**Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`

**Initial value**: `visible`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/overflow

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5874

***

### overscrollBehavior?

> **`optional`** **overscrollBehavior**: [`OverscrollBehavior`](../type-aliases/OverscrollBehavior.md)

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.

**Syntax**: `[ contain | none | auto ]{1,2}`

**Initial value**: `auto`

| Chrome | Firefox | Safari |  Edge  | IE  |
| :----: | :-----: | :----: | :----: | :-: |
| **63** | **59**  | **16** | **18** | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5888

***

### padding?

> **`optional`** **padding**: [`Padding`](../type-aliases/Padding.md)\<`TLength`\>

The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once.

**Syntax**: `[ <length> | <percentage> ]{1,4}`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **4** |

#### See

https://developer.mozilla.org/docs/Web/CSS/padding

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5900

***

### paddingBlock?

> **`optional`** **paddingBlock**: [`PaddingBlock`](../type-aliases/PaddingBlock.md)\<`TLength`\>

The **`padding-block`** CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/padding-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5912

***

### paddingInline?

> **`optional`** **paddingInline**: [`PaddingInline`](../type-aliases/PaddingInline.md)\<`TLength`\>

The **`padding-inline`** CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.

**Syntax**: `<'padding-left'>{1,2}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **87** | **66**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/padding-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5924

***

### placeContent?

> **`optional`** **placeContent**: [`PlaceContent`](../type-aliases/PlaceContent.md)

The **`place-content`** CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the `align-content` and `justify-content` properties) in a relevant layout system such as Grid or Flexbox.

**Syntax**: `<'align-content'> <'justify-content'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **9**  | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/place-content

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5936

***

### placeItems?

> **`optional`** **placeItems**: [`PlaceItems`](../type-aliases/PlaceItems.md)

The CSS **`place-items`** shorthand property allows you to align items along both the block and inline directions at once (i.e. the `align-items` and `justify-items` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

**Syntax**: `<'align-items'> <'justify-items'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/place-items

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5948

***

### placeSelf?

> **`optional`** **placeSelf**: [`PlaceSelf`](../type-aliases/PlaceSelf.md)

The **`place-self`** CSS shorthand property allows you to align an individual item in both the block and inline directions at once (i.e. the `align-self` and `justify-self` properties) in a relevant layout system such as Grid or Flexbox. If the second value is not present, the first value is also used for it.

**Syntax**: `<'align-self'> <'justify-self'>?`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **59** | **45**  | **11** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/place-self

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5960

***

### scrollMargin?

> **`optional`** **scrollMargin**: [`ScrollMargin`](../type-aliases/ScrollMargin.md)\<`TLength`\>

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

| Chrome | Firefox |          Safari           | Edge | IE  |
| :----: | :-----: | :-----------------------: | :--: | :-: |
| **69** | **90**  |         **14.1**          | n/a  | No  |
|        |         | 11 _(scroll-snap-margin)_ |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5973

***

### scrollMarginBlock?

> **`optional`** **scrollMarginBlock**: [`ScrollMarginBlock`](../type-aliases/ScrollMarginBlock.md)\<`TLength`\>

The `scroll-margin-block` shorthand property sets the scroll margins of an element in the block dimension.

**Syntax**: `<length>{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5985

***

### scrollMarginInline?

> **`optional`** **scrollMarginInline**: [`ScrollMarginInline`](../type-aliases/ScrollMarginInline.md)\<`TLength`\>

The `scroll-margin-inline` shorthand property sets the scroll margins of an element in the inline dimension.

**Syntax**: `<length>{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-margin-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:5997

***

### scrollPadding?

> **`optional`** **scrollPadding**: [`ScrollPadding`](../type-aliases/ScrollPadding.md)\<`TLength`\>

The **`scroll-padding`** shorthand property sets scroll padding on all sides of an element at once, much like the `padding` property does for padding on an element.

**Syntax**: `[ auto | <length-percentage> ]{1,4}`

| Chrome | Firefox |  Safari  | Edge | IE  |
| :----: | :-----: | :------: | :--: | :-: |
| **69** | **68**  | **14.1** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-padding

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6009

***

### scrollPaddingBlock?

> **`optional`** **scrollPaddingBlock**: [`ScrollPaddingBlock`](../type-aliases/ScrollPaddingBlock.md)\<`TLength`\>

The `scroll-padding-block` shorthand property sets the scroll padding of an element in the block dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-block

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6021

***

### scrollPaddingInline?

> **`optional`** **scrollPaddingInline**: [`ScrollPaddingInline`](../type-aliases/ScrollPaddingInline.md)\<`TLength`\>

The `scroll-padding-inline` shorthand property sets the scroll padding of an element in the inline dimension.

**Syntax**: `[ auto | <length-percentage> ]{1,2}`

| Chrome | Firefox | Safari | Edge | IE  |
| :----: | :-----: | :----: | :--: | :-: |
| **69** | **68**  | **15** | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-padding-inline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6033

***

### scrollSnapMargin?

> **`optional`** **scrollSnapMargin**: [`ScrollMargin`](../type-aliases/ScrollMargin.md)\<`TLength`\>

The **`scroll-margin`** shorthand property sets all of the scroll margins of an element at once, assigning values much like the `margin` property does for margins of an element.

**Syntax**: `<length>{1,4}`

| Chrome | Firefox |          Safari           | Edge | IE  |
| :----: | :-----: | :-----------------------: | :--: | :-: |
| **69** |  68-90  |         **14.1**          | n/a  | No  |
|        |         | 11 _(scroll-snap-margin)_ |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-margin

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6046

***

### scrollTimeline?

> **`optional`** **scrollTimeline**: [`ScrollTimeline`](../type-aliases/ScrollTimeline.md)

The **`scroll-timeline`** CSS shorthand property defines a name that can be used to identify the source element of a scroll timeline, along with the scrollbar axis that should provide the timeline.

**Syntax**: `[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **115** |   n/a   |   No   | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/scroll-timeline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6058

***

### textDecoration?

> **`optional`** **textDecoration**: [`TextDecoration`](../type-aliases/TextDecoration.md)\<`TLength`\>

The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, and the newer `text-decoration-thickness` property.

**Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`

| Chrome | Firefox | Safari |  Edge  |  IE   |
| :----: | :-----: | :----: | :----: | :---: |
| **1**  |  **1**  | **1**  | **12** | **3** |

#### See

https://developer.mozilla.org/docs/Web/CSS/text-decoration

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6070

***

### textEmphasis?

> **`optional`** **textEmphasis**: [`TextEmphasis`](../type-aliases/TextEmphasis.md)

The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.

**Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`

|  Chrome  | Firefox | Safari | Edge | IE  |
| :------: | :-----: | :----: | :--: | :-: |
|  **99**  | **46**  | **7**  | n/a  | No  |
| 25 _-x-_ |         |        |      |     |

#### See

https://developer.mozilla.org/docs/Web/CSS/text-emphasis

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6083

***

### transition?

> **`optional`** **transition**: [`Transition`](../type-aliases/Transition.md)\<`TTime`\>

The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.

**Syntax**: `<single-transition>#`

| Chrome  | Firefox |  Safari   |  Edge  |   IE   |
| :-----: | :-----: | :-------: | :----: | :----: |
| **26**  | **16**  |   **9**   | **12** | **10** |
| 1 _-x-_ |         | 3.1 _-x-_ |        |        |

#### See

https://developer.mozilla.org/docs/Web/CSS/transition

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6096

***

### viewTimeline?

> **`optional`** **viewTimeline**: [`ViewTimeline`](../type-aliases/ViewTimeline.md)

The **`view-timeline`** CSS shorthand property is used to define a _named view progress timeline_, which is progressed through based on the change in visibility of an element (known as the _subject_) inside a scrollable element (_scroller_). `view-timeline` is set on the subject.

**Syntax**: `[ <'view-timeline-name'> <'view-timeline-axis'>? ]#`

| Chrome  | Firefox | Safari | Edge | IE  |
| :-----: | :-----: | :----: | :--: | :-: |
| **115** |   n/a   |   No   | n/a  | No  |

#### See

https://developer.mozilla.org/docs/Web/CSS/view-timeline

#### Source

node\_modules/.pnpm/csstype@3.1.3/node\_modules/csstype/index.d.ts:6108
