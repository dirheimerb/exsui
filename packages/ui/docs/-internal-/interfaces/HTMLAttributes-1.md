**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / HTMLAttributes

# Interface: HTMLAttributes\<T\>

## Extends

- [`AriaAttributes`](AriaAttributes-1.md).[`DOMAttributes`](DOMAttributes-1.md)\<`T`\>

## Type parameters

• **T**

## Properties

### about?

> **`optional`** **about**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2859

***

### accessKey?

> **`optional`** **accessKey**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2834

***

### aria-activedescendant?

> **`optional`** **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-activedescendant`](AriaAttributes-1.md#aria-activedescendant)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2532

***

### aria-atomic?

> **`optional`** **aria-atomic**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-atomic`](AriaAttributes-1.md#aria-atomic)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2534

***

### aria-autocomplete?

> **`optional`** **aria-autocomplete**: `"none"` \| `"list"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-autocomplete`](AriaAttributes-1.md#aria-autocomplete)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2539

***

### aria-braillelabel?

> **`optional`** **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-braillelabel`](AriaAttributes-1.md#aria-braillelabel)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2545

***

### aria-brailleroledescription?

> **`optional`** **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-brailleroledescription`](AriaAttributes-1.md#aria-brailleroledescription)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2550

***

### aria-busy?

> **`optional`** **aria-busy**: [`Booleanish`](../type-aliases/Booleanish-1.md)

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-busy`](AriaAttributes-1.md#aria-busy)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2551

***

### aria-checked?

> **`optional`** **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-checked`](AriaAttributes-1.md#aria-checked)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2556

***

### aria-colcount?

> **`optional`** **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-colcount`](AriaAttributes-1.md#aria-colcount)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2561

***

### aria-colindex?

> **`optional`** **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-colindex`](AriaAttributes-1.md#aria-colindex)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2566

***

### aria-colindextext?

> **`optional`** **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-colindextext`](AriaAttributes-1.md#aria-colindextext)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2571

***

### aria-colspan?

> **`optional`** **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-colspan`](AriaAttributes-1.md#aria-colspan)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2576

***

### aria-controls?

> **`optional`** **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-controls`](AriaAttributes-1.md#aria-controls)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2581

***

### aria-current?

> **`optional`** **aria-current**: `boolean` \| `"step"` \| `"true"` \| `"false"` \| `"time"` \| `"page"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-current`](AriaAttributes-1.md#aria-current)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2583

***

### aria-describedby?

> **`optional`** **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-describedby`](AriaAttributes-1.md#aria-describedby)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2588

***

### aria-description?

> **`optional`** **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-description`](AriaAttributes-1.md#aria-description)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2593

***

### aria-details?

> **`optional`** **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-details`](AriaAttributes-1.md#aria-details)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2598

***

### aria-disabled?

> **`optional`** **aria-disabled**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-disabled`](AriaAttributes-1.md#aria-disabled)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2603

***

### ~~aria-dropeffect?~~

> **`optional`** **aria-dropeffect**: `"none"` \| `"link"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-dropeffect`](AriaAttributes-1.md#aria-dropeffect)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2608

***

### aria-errormessage?

> **`optional`** **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-errormessage`](AriaAttributes-1.md#aria-errormessage)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2613

***

### aria-expanded?

> **`optional`** **aria-expanded**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-expanded`](AriaAttributes-1.md#aria-expanded)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2615

***

### aria-flowto?

> **`optional`** **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-flowto`](AriaAttributes-1.md#aria-flowto)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2620

***

### ~~aria-grabbed?~~

> **`optional`** **aria-grabbed**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-grabbed`](AriaAttributes-1.md#aria-grabbed)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2625

***

### aria-haspopup?

> **`optional`** **aria-haspopup**: `boolean` \| `"true"` \| `"false"` \| `"dialog"` \| `"grid"` \| `"listbox"` \| `"menu"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-haspopup`](AriaAttributes-1.md#aria-haspopup)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2627

***

### aria-hidden?

> **`optional`** **aria-hidden**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-hidden`](AriaAttributes-1.md#aria-hidden)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2632

***

### aria-invalid?

> **`optional`** **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-invalid`](AriaAttributes-1.md#aria-invalid)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2637

***

### aria-keyshortcuts?

> **`optional`** **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-keyshortcuts`](AriaAttributes-1.md#aria-keyshortcuts)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2639

***

### aria-label?

> **`optional`** **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-label`](AriaAttributes-1.md#aria-label)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2644

***

### aria-labelledby?

> **`optional`** **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-labelledby`](AriaAttributes-1.md#aria-labelledby)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2649

***

### aria-level?

> **`optional`** **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-level`](AriaAttributes-1.md#aria-level)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2651

***

### aria-live?

> **`optional`** **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-live`](AriaAttributes-1.md#aria-live)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2653

***

### aria-modal?

> **`optional`** **aria-modal**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates whether an element is modal when displayed.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-modal`](AriaAttributes-1.md#aria-modal)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2655

***

### aria-multiline?

> **`optional`** **aria-multiline**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-multiline`](AriaAttributes-1.md#aria-multiline)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2657

***

### aria-multiselectable?

> **`optional`** **aria-multiselectable**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-multiselectable`](AriaAttributes-1.md#aria-multiselectable)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2659

***

### aria-orientation?

> **`optional`** **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-orientation`](AriaAttributes-1.md#aria-orientation)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2661

***

### aria-owns?

> **`optional`** **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-owns`](AriaAttributes-1.md#aria-owns)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2667

***

### aria-placeholder?

> **`optional`** **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-placeholder`](AriaAttributes-1.md#aria-placeholder)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2672

***

### aria-posinset?

> **`optional`** **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-posinset`](AriaAttributes-1.md#aria-posinset)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2677

***

### aria-pressed?

> **`optional`** **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-pressed`](AriaAttributes-1.md#aria-pressed)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2682

***

### aria-readonly?

> **`optional`** **aria-readonly**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-readonly`](AriaAttributes-1.md#aria-readonly)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2687

***

### aria-relevant?

> **`optional`** **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-relevant`](AriaAttributes-1.md#aria-relevant)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2692

***

### aria-required?

> **`optional`** **aria-required**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-required`](AriaAttributes-1.md#aria-required)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2705

***

### aria-roledescription?

> **`optional`** **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-roledescription`](AriaAttributes-1.md#aria-roledescription)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2707

***

### aria-rowcount?

> **`optional`** **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-rowcount`](AriaAttributes-1.md#aria-rowcount)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2712

***

### aria-rowindex?

> **`optional`** **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-rowindex`](AriaAttributes-1.md#aria-rowindex)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2717

***

### aria-rowindextext?

> **`optional`** **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-rowindextext`](AriaAttributes-1.md#aria-rowindextext)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2722

***

### aria-rowspan?

> **`optional`** **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-rowspan`](AriaAttributes-1.md#aria-rowspan)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2727

***

### aria-selected?

> **`optional`** **aria-selected**: [`Booleanish`](../type-aliases/Booleanish-1.md)

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-selected`](AriaAttributes-1.md#aria-selected)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2732

***

### aria-setsize?

> **`optional`** **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-setsize`](AriaAttributes-1.md#aria-setsize)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2737

***

### aria-sort?

> **`optional`** **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-sort`](AriaAttributes-1.md#aria-sort)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2739

***

### aria-valuemax?

> **`optional`** **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-valuemax`](AriaAttributes-1.md#aria-valuemax)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2741

***

### aria-valuemin?

> **`optional`** **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-valuemin`](AriaAttributes-1.md#aria-valuemin)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2743

***

### aria-valuenow?

> **`optional`** **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-valuenow`](AriaAttributes-1.md#aria-valuenow)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2748

***

### aria-valuetext?

> **`optional`** **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes-1.md).[`aria-valuetext`](AriaAttributes-1.md#aria-valuetext)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2750

***

### autoCapitalize?

> **`optional`** **autoCapitalize**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2872

***

### autoCorrect?

> **`optional`** **autoCorrect**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2873

***

### autoFocus?

> **`optional`** **autoFocus**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2835

***

### autoSave?

> **`optional`** **autoSave**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2874

***

### children?

> **`optional`** **children**: [`ReactNode`](../type-aliases/ReactNode-1.md)

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`children`](DOMAttributes-1.md#children)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2318

***

### className?

> **`optional`** **className**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2836

***

### color?

> **`optional`** **color**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2875

***

### content?

> **`optional`** **content**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2860

***

### contentEditable?

> **`optional`** **contentEditable**: `"inherit"` \| `"plaintext-only"` \| [`Booleanish`](../type-aliases/Booleanish-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2837

***

### contextMenu?

> **`optional`** **contextMenu**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2838

***

### dangerouslySetInnerHTML?

> **`optional`** **dangerouslySetInnerHTML**: `Object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`dangerouslySetInnerHTML`](DOMAttributes-1.md#dangerouslysetinnerhtml)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2319

***

### datatype?

> **`optional`** **datatype**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2861

***

### defaultChecked?

> **`optional`** **defaultChecked**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2828

***

### defaultValue?

> **`optional`** **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2829

***

### dir?

> **`optional`** **dir**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2839

***

### draggable?

> **`optional`** **draggable**: [`Booleanish`](../type-aliases/Booleanish-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2840

***

### hidden?

> **`optional`** **hidden**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2841

***

### id?

> **`optional`** **id**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2842

***

### inlist?

> **`optional`** **inlist**: `any`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2862

***

### inputMode?

> **`optional`** **inputMode**: `"none"` \| `"text"` \| `"search"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2890

***

### is?

> **`optional`** **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2895

***

### itemID?

> **`optional`** **itemID**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2879

***

### itemProp?

> **`optional`** **itemProp**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2876

***

### itemRef?

> **`optional`** **itemRef**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2880

***

### itemScope?

> **`optional`** **itemScope**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2877

***

### itemType?

> **`optional`** **itemType**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2878

***

### lang?

> **`optional`** **lang**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2843

***

### nonce?

> **`optional`** **nonce**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2844

***

### onAbort?

> **`optional`** **onAbort**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAbort`](DOMAttributes-1.md#onabort)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2378

***

### onAbortCapture?

> **`optional`** **onAbortCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAbortCapture`](DOMAttributes-1.md#onabortcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2379

***

### onAnimationEnd?

> **`optional`** **onAnimationEnd**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationEnd`](DOMAttributes-1.md#onanimationend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2508

***

### onAnimationEndCapture?

> **`optional`** **onAnimationEndCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationEndCapture`](DOMAttributes-1.md#onanimationendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2509

***

### onAnimationIteration?

> **`optional`** **onAnimationIteration**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationIteration`](DOMAttributes-1.md#onanimationiteration)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2510

***

### onAnimationIterationCapture?

> **`optional`** **onAnimationIterationCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationIterationCapture`](DOMAttributes-1.md#onanimationiterationcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2511

***

### onAnimationStart?

> **`optional`** **onAnimationStart**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationStart`](DOMAttributes-1.md#onanimationstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2506

***

### onAnimationStartCapture?

> **`optional`** **onAnimationStartCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAnimationStartCapture`](DOMAttributes-1.md#onanimationstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2507

***

### onAuxClick?

> **`optional`** **onAuxClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAuxClick`](DOMAttributes-1.md#onauxclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2426

***

### onAuxClickCapture?

> **`optional`** **onAuxClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onAuxClickCapture`](DOMAttributes-1.md#onauxclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2427

***

### onBeforeInput?

> **`optional`** **onBeforeInput**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onBeforeInput`](DOMAttributes-1.md#onbeforeinput)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2350

***

### onBeforeInputCapture?

> **`optional`** **onBeforeInputCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onBeforeInputCapture`](DOMAttributes-1.md#onbeforeinputcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2351

***

### onBlur?

> **`optional`** **onBlur**: [`FocusEventHandler`](../type-aliases/FocusEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onBlur`](DOMAttributes-1.md#onblur)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2344

***

### onBlurCapture?

> **`optional`** **onBlurCapture**: [`FocusEventHandler`](../type-aliases/FocusEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onBlurCapture`](DOMAttributes-1.md#onblurcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2345

***

### onCanPlay?

> **`optional`** **onCanPlay**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCanPlay`](DOMAttributes-1.md#oncanplay)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2380

***

### onCanPlayCapture?

> **`optional`** **onCanPlayCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCanPlayCapture`](DOMAttributes-1.md#oncanplaycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2381

***

### onCanPlayThrough?

> **`optional`** **onCanPlayThrough**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCanPlayThrough`](DOMAttributes-1.md#oncanplaythrough)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2382

***

### onCanPlayThroughCapture?

> **`optional`** **onCanPlayThroughCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCanPlayThroughCapture`](DOMAttributes-1.md#oncanplaythroughcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2383

***

### onChange?

> **`optional`** **onChange**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onChange`](DOMAttributes-1.md#onchange)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2348

***

### onChangeCapture?

> **`optional`** **onChangeCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onChangeCapture`](DOMAttributes-1.md#onchangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2349

***

### onClick?

> **`optional`** **onClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onClick`](DOMAttributes-1.md#onclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2428

***

### onClickCapture?

> **`optional`** **onClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onClickCapture`](DOMAttributes-1.md#onclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2429

***

### onCompositionEnd?

> **`optional`** **onCompositionEnd**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionEnd`](DOMAttributes-1.md#oncompositionend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2334

***

### onCompositionEndCapture?

> **`optional`** **onCompositionEndCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionEndCapture`](DOMAttributes-1.md#oncompositionendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2335

***

### onCompositionStart?

> **`optional`** **onCompositionStart**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionStart`](DOMAttributes-1.md#oncompositionstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2336

***

### onCompositionStartCapture?

> **`optional`** **onCompositionStartCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionStartCapture`](DOMAttributes-1.md#oncompositionstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2337

***

### onCompositionUpdate?

> **`optional`** **onCompositionUpdate**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionUpdate`](DOMAttributes-1.md#oncompositionupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2338

***

### onCompositionUpdateCapture?

> **`optional`** **onCompositionUpdateCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCompositionUpdateCapture`](DOMAttributes-1.md#oncompositionupdatecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2339

***

### onContextMenu?

> **`optional`** **onContextMenu**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onContextMenu`](DOMAttributes-1.md#oncontextmenu)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2430

***

### onContextMenuCapture?

> **`optional`** **onContextMenuCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onContextMenuCapture`](DOMAttributes-1.md#oncontextmenucapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2431

***

### onCopy?

> **`optional`** **onCopy**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCopy`](DOMAttributes-1.md#oncopy)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2326

***

### onCopyCapture?

> **`optional`** **onCopyCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCopyCapture`](DOMAttributes-1.md#oncopycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2327

***

### onCut?

> **`optional`** **onCut**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCut`](DOMAttributes-1.md#oncut)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2328

***

### onCutCapture?

> **`optional`** **onCutCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onCutCapture`](DOMAttributes-1.md#oncutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2329

***

### onDoubleClick?

> **`optional`** **onDoubleClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDoubleClick`](DOMAttributes-1.md#ondoubleclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2432

***

### onDoubleClickCapture?

> **`optional`** **onDoubleClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDoubleClickCapture`](DOMAttributes-1.md#ondoubleclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2433

***

### onDrag?

> **`optional`** **onDrag**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDrag`](DOMAttributes-1.md#ondrag)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2434

***

### onDragCapture?

> **`optional`** **onDragCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragCapture`](DOMAttributes-1.md#ondragcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2435

***

### onDragEnd?

> **`optional`** **onDragEnd**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragEnd`](DOMAttributes-1.md#ondragend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2436

***

### onDragEndCapture?

> **`optional`** **onDragEndCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragEndCapture`](DOMAttributes-1.md#ondragendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2437

***

### onDragEnter?

> **`optional`** **onDragEnter**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragEnter`](DOMAttributes-1.md#ondragenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2438

***

### onDragEnterCapture?

> **`optional`** **onDragEnterCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragEnterCapture`](DOMAttributes-1.md#ondragentercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2439

***

### onDragExit?

> **`optional`** **onDragExit**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragExit`](DOMAttributes-1.md#ondragexit)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2440

***

### onDragExitCapture?

> **`optional`** **onDragExitCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragExitCapture`](DOMAttributes-1.md#ondragexitcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2441

***

### onDragLeave?

> **`optional`** **onDragLeave**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragLeave`](DOMAttributes-1.md#ondragleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2442

***

### onDragLeaveCapture?

> **`optional`** **onDragLeaveCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragLeaveCapture`](DOMAttributes-1.md#ondragleavecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2443

***

### onDragOver?

> **`optional`** **onDragOver**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragOver`](DOMAttributes-1.md#ondragover)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2444

***

### onDragOverCapture?

> **`optional`** **onDragOverCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragOverCapture`](DOMAttributes-1.md#ondragovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2445

***

### onDragStart?

> **`optional`** **onDragStart**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragStart`](DOMAttributes-1.md#ondragstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2446

***

### onDragStartCapture?

> **`optional`** **onDragStartCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDragStartCapture`](DOMAttributes-1.md#ondragstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2447

***

### onDrop?

> **`optional`** **onDrop**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDrop`](DOMAttributes-1.md#ondrop)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2448

***

### onDropCapture?

> **`optional`** **onDropCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDropCapture`](DOMAttributes-1.md#ondropcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2449

***

### onDurationChange?

> **`optional`** **onDurationChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDurationChange`](DOMAttributes-1.md#ondurationchange)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2384

***

### onDurationChangeCapture?

> **`optional`** **onDurationChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onDurationChangeCapture`](DOMAttributes-1.md#ondurationchangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2385

***

### onEmptied?

> **`optional`** **onEmptied**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEmptied`](DOMAttributes-1.md#onemptied)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2386

***

### onEmptiedCapture?

> **`optional`** **onEmptiedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEmptiedCapture`](DOMAttributes-1.md#onemptiedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2387

***

### onEncrypted?

> **`optional`** **onEncrypted**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEncrypted`](DOMAttributes-1.md#onencrypted)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2388

***

### onEncryptedCapture?

> **`optional`** **onEncryptedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEncryptedCapture`](DOMAttributes-1.md#onencryptedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2389

***

### onEnded?

> **`optional`** **onEnded**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEnded`](DOMAttributes-1.md#onended)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2390

***

### onEndedCapture?

> **`optional`** **onEndedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onEndedCapture`](DOMAttributes-1.md#onendedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2391

***

### onError?

> **`optional`** **onError**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onError`](DOMAttributes-1.md#onerror)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2364

***

### onErrorCapture?

> **`optional`** **onErrorCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onErrorCapture`](DOMAttributes-1.md#onerrorcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2365

***

### onFocus?

> **`optional`** **onFocus**: [`FocusEventHandler`](../type-aliases/FocusEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onFocus`](DOMAttributes-1.md#onfocus)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2342

***

### onFocusCapture?

> **`optional`** **onFocusCapture**: [`FocusEventHandler`](../type-aliases/FocusEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onFocusCapture`](DOMAttributes-1.md#onfocuscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2343

***

### onGotPointerCapture?

> **`optional`** **onGotPointerCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onGotPointerCapture`](DOMAttributes-1.md#ongotpointercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2492

***

### onGotPointerCaptureCapture?

> **`optional`** **onGotPointerCaptureCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onGotPointerCaptureCapture`](DOMAttributes-1.md#ongotpointercapturecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2493

***

### onInput?

> **`optional`** **onInput**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onInput`](DOMAttributes-1.md#oninput)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2352

***

### onInputCapture?

> **`optional`** **onInputCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onInputCapture`](DOMAttributes-1.md#oninputcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2353

***

### onInvalid?

> **`optional`** **onInvalid**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onInvalid`](DOMAttributes-1.md#oninvalid)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2358

***

### onInvalidCapture?

> **`optional`** **onInvalidCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onInvalidCapture`](DOMAttributes-1.md#oninvalidcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2359

***

### onKeyDown?

> **`optional`** **onKeyDown**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyDown`](DOMAttributes-1.md#onkeydown)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2368

***

### onKeyDownCapture?

> **`optional`** **onKeyDownCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyDownCapture`](DOMAttributes-1.md#onkeydowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2369

***

### ~~onKeyPress?~~

> **`optional`** **onKeyPress**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Deprecated

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyPress`](DOMAttributes-1.md#onkeypress)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2371

***

### ~~onKeyPressCapture?~~

> **`optional`** **onKeyPressCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Deprecated

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyPressCapture`](DOMAttributes-1.md#onkeypresscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2373

***

### onKeyUp?

> **`optional`** **onKeyUp**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyUp`](DOMAttributes-1.md#onkeyup)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2374

***

### onKeyUpCapture?

> **`optional`** **onKeyUpCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onKeyUpCapture`](DOMAttributes-1.md#onkeyupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2375

***

### onLoad?

> **`optional`** **onLoad**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoad`](DOMAttributes-1.md#onload)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2362

***

### onLoadCapture?

> **`optional`** **onLoadCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadCapture`](DOMAttributes-1.md#onloadcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2363

***

### onLoadStart?

> **`optional`** **onLoadStart**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadStart`](DOMAttributes-1.md#onloadstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2396

***

### onLoadStartCapture?

> **`optional`** **onLoadStartCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadStartCapture`](DOMAttributes-1.md#onloadstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2397

***

### onLoadedData?

> **`optional`** **onLoadedData**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadedData`](DOMAttributes-1.md#onloadeddata)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2392

***

### onLoadedDataCapture?

> **`optional`** **onLoadedDataCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadedDataCapture`](DOMAttributes-1.md#onloadeddatacapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2393

***

### onLoadedMetadata?

> **`optional`** **onLoadedMetadata**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadedMetadata`](DOMAttributes-1.md#onloadedmetadata)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2394

***

### onLoadedMetadataCapture?

> **`optional`** **onLoadedMetadataCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLoadedMetadataCapture`](DOMAttributes-1.md#onloadedmetadatacapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2395

***

### onLostPointerCapture?

> **`optional`** **onLostPointerCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLostPointerCapture`](DOMAttributes-1.md#onlostpointercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2494

***

### onLostPointerCaptureCapture?

> **`optional`** **onLostPointerCaptureCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onLostPointerCaptureCapture`](DOMAttributes-1.md#onlostpointercapturecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2495

***

### onMouseDown?

> **`optional`** **onMouseDown**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseDown`](DOMAttributes-1.md#onmousedown)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2450

***

### onMouseDownCapture?

> **`optional`** **onMouseDownCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseDownCapture`](DOMAttributes-1.md#onmousedowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2451

***

### onMouseEnter?

> **`optional`** **onMouseEnter**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseEnter`](DOMAttributes-1.md#onmouseenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2452

***

### onMouseLeave?

> **`optional`** **onMouseLeave**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseLeave`](DOMAttributes-1.md#onmouseleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2453

***

### onMouseMove?

> **`optional`** **onMouseMove**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseMove`](DOMAttributes-1.md#onmousemove)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2454

***

### onMouseMoveCapture?

> **`optional`** **onMouseMoveCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseMoveCapture`](DOMAttributes-1.md#onmousemovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2455

***

### onMouseOut?

> **`optional`** **onMouseOut**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseOut`](DOMAttributes-1.md#onmouseout)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2456

***

### onMouseOutCapture?

> **`optional`** **onMouseOutCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseOutCapture`](DOMAttributes-1.md#onmouseoutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2457

***

### onMouseOver?

> **`optional`** **onMouseOver**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseOver`](DOMAttributes-1.md#onmouseover)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2458

***

### onMouseOverCapture?

> **`optional`** **onMouseOverCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseOverCapture`](DOMAttributes-1.md#onmouseovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2459

***

### onMouseUp?

> **`optional`** **onMouseUp**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseUp`](DOMAttributes-1.md#onmouseup)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2460

***

### onMouseUpCapture?

> **`optional`** **onMouseUpCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onMouseUpCapture`](DOMAttributes-1.md#onmouseupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2461

***

### onPaste?

> **`optional`** **onPaste**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPaste`](DOMAttributes-1.md#onpaste)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2330

***

### onPasteCapture?

> **`optional`** **onPasteCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPasteCapture`](DOMAttributes-1.md#onpastecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2331

***

### onPause?

> **`optional`** **onPause**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPause`](DOMAttributes-1.md#onpause)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2398

***

### onPauseCapture?

> **`optional`** **onPauseCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPauseCapture`](DOMAttributes-1.md#onpausecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2399

***

### onPlay?

> **`optional`** **onPlay**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPlay`](DOMAttributes-1.md#onplay)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2400

***

### onPlayCapture?

> **`optional`** **onPlayCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPlayCapture`](DOMAttributes-1.md#onplaycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2401

***

### onPlaying?

> **`optional`** **onPlaying**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPlaying`](DOMAttributes-1.md#onplaying)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2402

***

### onPlayingCapture?

> **`optional`** **onPlayingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPlayingCapture`](DOMAttributes-1.md#onplayingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2403

***

### onPointerCancel?

> **`optional`** **onPointerCancel**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerCancel`](DOMAttributes-1.md#onpointercancel)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2484

***

### onPointerCancelCapture?

> **`optional`** **onPointerCancelCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerCancelCapture`](DOMAttributes-1.md#onpointercancelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2485

***

### onPointerDown?

> **`optional`** **onPointerDown**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerDown`](DOMAttributes-1.md#onpointerdown)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2478

***

### onPointerDownCapture?

> **`optional`** **onPointerDownCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerDownCapture`](DOMAttributes-1.md#onpointerdowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2479

***

### onPointerEnter?

> **`optional`** **onPointerEnter**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerEnter`](DOMAttributes-1.md#onpointerenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2486

***

### onPointerLeave?

> **`optional`** **onPointerLeave**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerLeave`](DOMAttributes-1.md#onpointerleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2487

***

### onPointerMove?

> **`optional`** **onPointerMove**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerMove`](DOMAttributes-1.md#onpointermove)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2480

***

### onPointerMoveCapture?

> **`optional`** **onPointerMoveCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerMoveCapture`](DOMAttributes-1.md#onpointermovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2481

***

### onPointerOut?

> **`optional`** **onPointerOut**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerOut`](DOMAttributes-1.md#onpointerout)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2490

***

### onPointerOutCapture?

> **`optional`** **onPointerOutCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerOutCapture`](DOMAttributes-1.md#onpointeroutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2491

***

### onPointerOver?

> **`optional`** **onPointerOver**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerOver`](DOMAttributes-1.md#onpointerover)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2488

***

### onPointerOverCapture?

> **`optional`** **onPointerOverCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerOverCapture`](DOMAttributes-1.md#onpointerovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2489

***

### onPointerUp?

> **`optional`** **onPointerUp**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerUp`](DOMAttributes-1.md#onpointerup)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2482

***

### onPointerUpCapture?

> **`optional`** **onPointerUpCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onPointerUpCapture`](DOMAttributes-1.md#onpointerupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2483

***

### onProgress?

> **`optional`** **onProgress**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onProgress`](DOMAttributes-1.md#onprogress)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2404

***

### onProgressCapture?

> **`optional`** **onProgressCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onProgressCapture`](DOMAttributes-1.md#onprogresscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2405

***

### onRateChange?

> **`optional`** **onRateChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onRateChange`](DOMAttributes-1.md#onratechange)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2406

***

### onRateChangeCapture?

> **`optional`** **onRateChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onRateChangeCapture`](DOMAttributes-1.md#onratechangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2407

***

### onReset?

> **`optional`** **onReset**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onReset`](DOMAttributes-1.md#onreset)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2354

***

### onResetCapture?

> **`optional`** **onResetCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onResetCapture`](DOMAttributes-1.md#onresetcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2355

***

### onResize?

> **`optional`** **onResize**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onResize`](DOMAttributes-1.md#onresize)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2408

***

### onResizeCapture?

> **`optional`** **onResizeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onResizeCapture`](DOMAttributes-1.md#onresizecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2409

***

### onScroll?

> **`optional`** **onScroll**: [`UIEventHandler`](../type-aliases/UIEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onScroll`](DOMAttributes-1.md#onscroll)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2498

***

### onScrollCapture?

> **`optional`** **onScrollCapture**: [`UIEventHandler`](../type-aliases/UIEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onScrollCapture`](DOMAttributes-1.md#onscrollcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2499

***

### onSeeked?

> **`optional`** **onSeeked**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSeeked`](DOMAttributes-1.md#onseeked)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2410

***

### onSeekedCapture?

> **`optional`** **onSeekedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSeekedCapture`](DOMAttributes-1.md#onseekedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2411

***

### onSeeking?

> **`optional`** **onSeeking**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSeeking`](DOMAttributes-1.md#onseeking)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2412

***

### onSeekingCapture?

> **`optional`** **onSeekingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSeekingCapture`](DOMAttributes-1.md#onseekingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2413

***

### onSelect?

> **`optional`** **onSelect**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSelect`](DOMAttributes-1.md#onselect)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2464

***

### onSelectCapture?

> **`optional`** **onSelectCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSelectCapture`](DOMAttributes-1.md#onselectcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2465

***

### onStalled?

> **`optional`** **onStalled**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onStalled`](DOMAttributes-1.md#onstalled)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2414

***

### onStalledCapture?

> **`optional`** **onStalledCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onStalledCapture`](DOMAttributes-1.md#onstalledcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2415

***

### onSubmit?

> **`optional`** **onSubmit**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSubmit`](DOMAttributes-1.md#onsubmit)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2356

***

### onSubmitCapture?

> **`optional`** **onSubmitCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSubmitCapture`](DOMAttributes-1.md#onsubmitcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2357

***

### onSuspend?

> **`optional`** **onSuspend**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSuspend`](DOMAttributes-1.md#onsuspend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2416

***

### onSuspendCapture?

> **`optional`** **onSuspendCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onSuspendCapture`](DOMAttributes-1.md#onsuspendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2417

***

### onTimeUpdate?

> **`optional`** **onTimeUpdate**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTimeUpdate`](DOMAttributes-1.md#ontimeupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2418

***

### onTimeUpdateCapture?

> **`optional`** **onTimeUpdateCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTimeUpdateCapture`](DOMAttributes-1.md#ontimeupdatecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2419

***

### onTouchCancel?

> **`optional`** **onTouchCancel**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchCancel`](DOMAttributes-1.md#ontouchcancel)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2468

***

### onTouchCancelCapture?

> **`optional`** **onTouchCancelCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchCancelCapture`](DOMAttributes-1.md#ontouchcancelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2469

***

### onTouchEnd?

> **`optional`** **onTouchEnd**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchEnd`](DOMAttributes-1.md#ontouchend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2470

***

### onTouchEndCapture?

> **`optional`** **onTouchEndCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchEndCapture`](DOMAttributes-1.md#ontouchendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2471

***

### onTouchMove?

> **`optional`** **onTouchMove**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchMove`](DOMAttributes-1.md#ontouchmove)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2472

***

### onTouchMoveCapture?

> **`optional`** **onTouchMoveCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchMoveCapture`](DOMAttributes-1.md#ontouchmovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2473

***

### onTouchStart?

> **`optional`** **onTouchStart**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchStart`](DOMAttributes-1.md#ontouchstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2474

***

### onTouchStartCapture?

> **`optional`** **onTouchStartCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTouchStartCapture`](DOMAttributes-1.md#ontouchstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2475

***

### onTransitionEnd?

> **`optional`** **onTransitionEnd**: [`TransitionEventHandler`](../type-aliases/TransitionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTransitionEnd`](DOMAttributes-1.md#ontransitionend)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2514

***

### onTransitionEndCapture?

> **`optional`** **onTransitionEndCapture**: [`TransitionEventHandler`](../type-aliases/TransitionEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onTransitionEndCapture`](DOMAttributes-1.md#ontransitionendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2515

***

### onVolumeChange?

> **`optional`** **onVolumeChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onVolumeChange`](DOMAttributes-1.md#onvolumechange)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2420

***

### onVolumeChangeCapture?

> **`optional`** **onVolumeChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onVolumeChangeCapture`](DOMAttributes-1.md#onvolumechangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2421

***

### onWaiting?

> **`optional`** **onWaiting**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onWaiting`](DOMAttributes-1.md#onwaiting)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2422

***

### onWaitingCapture?

> **`optional`** **onWaitingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onWaitingCapture`](DOMAttributes-1.md#onwaitingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2423

***

### onWheel?

> **`optional`** **onWheel**: [`WheelEventHandler`](../type-aliases/WheelEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onWheel`](DOMAttributes-1.md#onwheel)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2502

***

### onWheelCapture?

> **`optional`** **onWheelCapture**: [`WheelEventHandler`](../type-aliases/WheelEventHandler-1.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes-1.md).[`onWheelCapture`](DOMAttributes-1.md#onwheelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2503

***

### prefix?

> **`optional`** **prefix**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2863

***

### property?

> **`optional`** **property**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2864

***

### radioGroup?

> **`optional`** **radioGroup**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2853

***

### rel?

> **`optional`** **rel**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2865

***

### resource?

> **`optional`** **resource**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2866

***

### results?

> **`optional`** **results**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2881

***

### rev?

> **`optional`** **rev**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2867

***

### role?

> **`optional`** **role**: [`AriaRole`](../type-aliases/AriaRole-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2856

***

### security?

> **`optional`** **security**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2882

***

### slot?

> **`optional`** **slot**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2845

***

### spellCheck?

> **`optional`** **spellCheck**: [`Booleanish`](../type-aliases/Booleanish-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2846

***

### style?

> **`optional`** **style**: [`CSSProperties`](CSSProperties-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2847

***

### suppressContentEditableWarning?

> **`optional`** **suppressContentEditableWarning**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2830

***

### suppressHydrationWarning?

> **`optional`** **suppressHydrationWarning**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2831

***

### tabIndex?

> **`optional`** **tabIndex**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2848

***

### title?

> **`optional`** **title**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2849

***

### translate?

> **`optional`** **translate**: `"yes"` \| `"no"`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2850

***

### typeof?

> **`optional`** **typeof**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2868

***

### unselectable?

> **`optional`** **unselectable**: `"on"` \| `"off"`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2883

***

### vocab?

> **`optional`** **vocab**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2869
