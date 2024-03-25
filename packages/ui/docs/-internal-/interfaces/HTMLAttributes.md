**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / HTMLAttributes

# Interface: HTMLAttributes\<T\>

## Extends

- [`AriaAttributes`](AriaAttributes.md).[`DOMAttributes`](DOMAttributes.md)\<`T`\>

## Type parameters

• **T**

## Properties

### about?

> **`optional`** **about**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2869

***

### accessKey?

> **`optional`** **accessKey**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2844

***

### aria-activedescendant?

> **`optional`** **aria-activedescendant**: `string`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-activedescendant`](AriaAttributes.md#aria-activedescendant)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2542

***

### aria-atomic?

> **`optional`** **aria-atomic**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-atomic`](AriaAttributes.md#aria-atomic)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2544

***

### aria-autocomplete?

> **`optional`** **aria-autocomplete**: `"none"` \| `"list"` \| `"inline"` \| `"both"`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-autocomplete`](AriaAttributes.md#aria-autocomplete)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2549

***

### aria-braillelabel?

> **`optional`** **aria-braillelabel**: `string`

Defines a string value that labels the current element, which is intended to be converted into Braille.

#### See

aria-label.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-braillelabel`](AriaAttributes.md#aria-braillelabel)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2555

***

### aria-brailleroledescription?

> **`optional`** **aria-brailleroledescription**: `string`

Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.

#### See

aria-roledescription.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-brailleroledescription`](AriaAttributes.md#aria-brailleroledescription)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2560

***

### aria-busy?

> **`optional`** **aria-busy**: [`Booleanish`](../type-aliases/Booleanish.md)

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-busy`](AriaAttributes.md#aria-busy)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2561

***

### aria-checked?

> **`optional`** **aria-checked**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.

#### See

 - aria-pressed
 - aria-selected.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-checked`](AriaAttributes.md#aria-checked)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2566

***

### aria-colcount?

> **`optional`** **aria-colcount**: `number`

Defines the total number of columns in a table, grid, or treegrid.

#### See

aria-colindex.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-colcount`](AriaAttributes.md#aria-colcount)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2571

***

### aria-colindex?

> **`optional`** **aria-colindex**: `number`

Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

#### See

 - aria-colcount
 - aria-colspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-colindex`](AriaAttributes.md#aria-colindex)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2576

***

### aria-colindextext?

> **`optional`** **aria-colindextext**: `string`

Defines a human readable text alternative of aria-colindex.

#### See

aria-rowindextext.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-colindextext`](AriaAttributes.md#aria-colindextext)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2581

***

### aria-colspan?

> **`optional`** **aria-colspan**: `number`

Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-colindex
 - aria-rowspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-colspan`](AriaAttributes.md#aria-colspan)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2586

***

### aria-controls?

> **`optional`** **aria-controls**: `string`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

#### See

aria-owns.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-controls`](AriaAttributes.md#aria-controls)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2591

***

### aria-current?

> **`optional`** **aria-current**: `boolean` \| `"step"` \| `"true"` \| `"false"` \| `"time"` \| `"page"` \| `"location"` \| `"date"`

Indicates the element that represents the current item within a container or set of related elements.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-current`](AriaAttributes.md#aria-current)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2593

***

### aria-describedby?

> **`optional`** **aria-describedby**: `string`

Identifies the element (or elements) that describes the object.

#### See

aria-labelledby

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-describedby`](AriaAttributes.md#aria-describedby)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2598

***

### aria-description?

> **`optional`** **aria-description**: `string`

Defines a string value that describes or annotates the current element.

#### See

related aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-description`](AriaAttributes.md#aria-description)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2603

***

### aria-details?

> **`optional`** **aria-details**: `string`

Identifies the element that provides a detailed, extended description for the object.

#### See

aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-details`](AriaAttributes.md#aria-details)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2608

***

### aria-disabled?

> **`optional`** **aria-disabled**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

#### See

 - aria-hidden
 - aria-readonly.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-disabled`](AriaAttributes.md#aria-disabled)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2613

***

### ~~aria-dropeffect?~~

> **`optional`** **aria-dropeffect**: `"none"` \| `"link"` \| `"copy"` \| `"execute"` \| `"move"` \| `"popup"`

Indicates what functions can be performed when a dragged object is released on the drop target.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-dropeffect`](AriaAttributes.md#aria-dropeffect)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2618

***

### aria-errormessage?

> **`optional`** **aria-errormessage**: `string`

Identifies the element that provides an error message for the object.

#### See

 - aria-invalid
 - aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-errormessage`](AriaAttributes.md#aria-errormessage)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2623

***

### aria-expanded?

> **`optional`** **aria-expanded**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-expanded`](AriaAttributes.md#aria-expanded)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2625

***

### aria-flowto?

> **`optional`** **aria-flowto**: `string`

Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-flowto`](AriaAttributes.md#aria-flowto)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2630

***

### ~~aria-grabbed?~~

> **`optional`** **aria-grabbed**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates an element's "grabbed" state in a drag-and-drop operation.

#### Deprecated

in ARIA 1.1

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-grabbed`](AriaAttributes.md#aria-grabbed)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2635

***

### aria-haspopup?

> **`optional`** **aria-haspopup**: `boolean` \| `"true"` \| `"false"` \| `"dialog"` \| `"grid"` \| `"listbox"` \| `"menu"` \| `"tree"`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-haspopup`](AriaAttributes.md#aria-haspopup)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2637

***

### aria-hidden?

> **`optional`** **aria-hidden**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates whether the element is exposed to an accessibility API.

#### See

aria-disabled.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-hidden`](AriaAttributes.md#aria-hidden)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2642

***

### aria-invalid?

> **`optional`** **aria-invalid**: `boolean` \| `"true"` \| `"false"` \| `"grammar"` \| `"spelling"`

Indicates the entered value does not conform to the format expected by the application.

#### See

aria-errormessage.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-invalid`](AriaAttributes.md#aria-invalid)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2647

***

### aria-keyshortcuts?

> **`optional`** **aria-keyshortcuts**: `string`

Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-keyshortcuts`](AriaAttributes.md#aria-keyshortcuts)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2649

***

### aria-label?

> **`optional`** **aria-label**: `string`

Defines a string value that labels the current element.

#### See

aria-labelledby.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-label`](AriaAttributes.md#aria-label)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2654

***

### aria-labelledby?

> **`optional`** **aria-labelledby**: `string`

Identifies the element (or elements) that labels the current element.

#### See

aria-describedby.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-labelledby`](AriaAttributes.md#aria-labelledby)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2659

***

### aria-level?

> **`optional`** **aria-level**: `number`

Defines the hierarchical level of an element within a structure.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-level`](AriaAttributes.md#aria-level)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2661

***

### aria-live?

> **`optional`** **aria-live**: `"off"` \| `"assertive"` \| `"polite"`

Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-live`](AriaAttributes.md#aria-live)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2663

***

### aria-modal?

> **`optional`** **aria-modal**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates whether an element is modal when displayed.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-modal`](AriaAttributes.md#aria-modal)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2665

***

### aria-multiline?

> **`optional`** **aria-multiline**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates whether a text box accepts multiple lines of input or only a single line.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-multiline`](AriaAttributes.md#aria-multiline)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2667

***

### aria-multiselectable?

> **`optional`** **aria-multiselectable**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates that the user may select more than one item from the current selectable descendants.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-multiselectable`](AriaAttributes.md#aria-multiselectable)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2669

***

### aria-orientation?

> **`optional`** **aria-orientation**: `"horizontal"` \| `"vertical"`

Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-orientation`](AriaAttributes.md#aria-orientation)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2671

***

### aria-owns?

> **`optional`** **aria-owns**: `string`

Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.

#### See

aria-controls.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-owns`](AriaAttributes.md#aria-owns)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2677

***

### aria-placeholder?

> **`optional`** **aria-placeholder**: `string`

Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-placeholder`](AriaAttributes.md#aria-placeholder)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2682

***

### aria-posinset?

> **`optional`** **aria-posinset**: `number`

Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-setsize.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-posinset`](AriaAttributes.md#aria-posinset)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2687

***

### aria-pressed?

> **`optional`** **aria-pressed**: `boolean` \| `"true"` \| `"false"` \| `"mixed"`

Indicates the current "pressed" state of toggle buttons.

#### See

 - aria-checked
 - aria-selected.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-pressed`](AriaAttributes.md#aria-pressed)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2692

***

### aria-readonly?

> **`optional`** **aria-readonly**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates that the element is not editable, but is otherwise operable.

#### See

aria-disabled.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-readonly`](AriaAttributes.md#aria-readonly)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2697

***

### aria-relevant?

> **`optional`** **aria-relevant**: `"text"` \| `"additions"` \| `"additions removals"` \| `"additions text"` \| `"all"` \| `"removals"` \| `"removals additions"` \| `"removals text"` \| `"text additions"` \| `"text removals"`

Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.

#### See

aria-atomic.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-relevant`](AriaAttributes.md#aria-relevant)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2702

***

### aria-required?

> **`optional`** **aria-required**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates that user input is required on the element before a form may be submitted.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-required`](AriaAttributes.md#aria-required)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2715

***

### aria-roledescription?

> **`optional`** **aria-roledescription**: `string`

Defines a human-readable, author-localized description for the role of an element.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-roledescription`](AriaAttributes.md#aria-roledescription)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2717

***

### aria-rowcount?

> **`optional`** **aria-rowcount**: `number`

Defines the total number of rows in a table, grid, or treegrid.

#### See

aria-rowindex.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-rowcount`](AriaAttributes.md#aria-rowcount)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2722

***

### aria-rowindex?

> **`optional`** **aria-rowindex**: `number`

Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

#### See

 - aria-rowcount
 - aria-rowspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-rowindex`](AriaAttributes.md#aria-rowindex)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2727

***

### aria-rowindextext?

> **`optional`** **aria-rowindextext**: `string`

Defines a human readable text alternative of aria-rowindex.

#### See

aria-colindextext.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-rowindextext`](AriaAttributes.md#aria-rowindextext)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2732

***

### aria-rowspan?

> **`optional`** **aria-rowspan**: `number`

Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.

#### See

 - aria-rowindex
 - aria-colspan.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-rowspan`](AriaAttributes.md#aria-rowspan)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2737

***

### aria-selected?

> **`optional`** **aria-selected**: [`Booleanish`](../type-aliases/Booleanish.md)

Indicates the current "selected" state of various widgets.

#### See

 - aria-checked
 - aria-pressed.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-selected`](AriaAttributes.md#aria-selected)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2742

***

### aria-setsize?

> **`optional`** **aria-setsize**: `number`

Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.

#### See

aria-posinset.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-setsize`](AriaAttributes.md#aria-setsize)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2747

***

### aria-sort?

> **`optional`** **aria-sort**: `"none"` \| `"ascending"` \| `"descending"` \| `"other"`

Indicates if items in a table or grid are sorted in ascending or descending order.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-sort`](AriaAttributes.md#aria-sort)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2749

***

### aria-valuemax?

> **`optional`** **aria-valuemax**: `number`

Defines the maximum allowed value for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-valuemax`](AriaAttributes.md#aria-valuemax)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2751

***

### aria-valuemin?

> **`optional`** **aria-valuemin**: `number`

Defines the minimum allowed value for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-valuemin`](AriaAttributes.md#aria-valuemin)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2753

***

### aria-valuenow?

> **`optional`** **aria-valuenow**: `number`

Defines the current value for a range widget.

#### See

aria-valuetext.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-valuenow`](AriaAttributes.md#aria-valuenow)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2758

***

### aria-valuetext?

> **`optional`** **aria-valuetext**: `string`

Defines the human readable text alternative of aria-valuenow for a range widget.

#### Inherited from

[`AriaAttributes`](AriaAttributes.md).[`aria-valuetext`](AriaAttributes.md#aria-valuetext)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2760

***

### autoCapitalize?

> **`optional`** **autoCapitalize**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2882

***

### autoCorrect?

> **`optional`** **autoCorrect**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2883

***

### autoFocus?

> **`optional`** **autoFocus**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2845

***

### autoSave?

> **`optional`** **autoSave**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2884

***

### children?

> **`optional`** **children**: [`ReactNode`](../type-aliases/ReactNode.md)

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`children`](DOMAttributes.md#children)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2328

***

### className?

> **`optional`** **className**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2846

***

### color?

> **`optional`** **color**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2885

***

### content?

> **`optional`** **content**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2870

***

### contentEditable?

> **`optional`** **contentEditable**: `"inherit"` \| [`Booleanish`](../type-aliases/Booleanish.md) \| `"plaintext-only"`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2847

***

### contextMenu?

> **`optional`** **contextMenu**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2848

***

### dangerouslySetInnerHTML?

> **`optional`** **dangerouslySetInnerHTML**: `Object`

#### \_\_html

> **\_\_html**: `string` \| `TrustedHTML`

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`dangerouslySetInnerHTML`](DOMAttributes.md#dangerouslysetinnerhtml)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2329

***

### datatype?

> **`optional`** **datatype**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2871

***

### defaultChecked?

> **`optional`** **defaultChecked**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2838

***

### defaultValue?

> **`optional`** **defaultValue**: `string` \| `number` \| readonly `string`[]

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2839

***

### dir?

> **`optional`** **dir**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2849

***

### draggable?

> **`optional`** **draggable**: [`Booleanish`](../type-aliases/Booleanish.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2850

***

### hidden?

> **`optional`** **hidden**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2851

***

### id?

> **`optional`** **id**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2852

***

### inlist?

> **`optional`** **inlist**: `any`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2872

***

### inputMode?

> **`optional`** **inputMode**: `"none"` \| `"text"` \| `"search"` \| `"tel"` \| `"url"` \| `"email"` \| `"numeric"` \| `"decimal"`

Hints at the type of data that might be entered by the user while editing the element or its contents

#### See

[https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2900

***

### is?

> **`optional`** **is**: `string`

Specify that a standard HTML element should behave like a defined custom built-in element

#### See

[https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is](https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2905

***

### itemID?

> **`optional`** **itemID**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2889

***

### itemProp?

> **`optional`** **itemProp**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2886

***

### itemRef?

> **`optional`** **itemRef**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2890

***

### itemScope?

> **`optional`** **itemScope**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2887

***

### itemType?

> **`optional`** **itemType**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2888

***

### lang?

> **`optional`** **lang**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2853

***

### nonce?

> **`optional`** **nonce**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2854

***

### onAbort?

> **`optional`** **onAbort**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAbort`](DOMAttributes.md#onabort)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2388

***

### onAbortCapture?

> **`optional`** **onAbortCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAbortCapture`](DOMAttributes.md#onabortcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2389

***

### onAnimationEnd?

> **`optional`** **onAnimationEnd**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationEnd`](DOMAttributes.md#onanimationend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2518

***

### onAnimationEndCapture?

> **`optional`** **onAnimationEndCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationEndCapture`](DOMAttributes.md#onanimationendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2519

***

### onAnimationIteration?

> **`optional`** **onAnimationIteration**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationIteration`](DOMAttributes.md#onanimationiteration)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2520

***

### onAnimationIterationCapture?

> **`optional`** **onAnimationIterationCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationIterationCapture`](DOMAttributes.md#onanimationiterationcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2521

***

### onAnimationStart?

> **`optional`** **onAnimationStart**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationStart`](DOMAttributes.md#onanimationstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2516

***

### onAnimationStartCapture?

> **`optional`** **onAnimationStartCapture**: [`AnimationEventHandler`](../type-aliases/AnimationEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAnimationStartCapture`](DOMAttributes.md#onanimationstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2517

***

### onAuxClick?

> **`optional`** **onAuxClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAuxClick`](DOMAttributes.md#onauxclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2436

***

### onAuxClickCapture?

> **`optional`** **onAuxClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onAuxClickCapture`](DOMAttributes.md#onauxclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2437

***

### onBeforeInput?

> **`optional`** **onBeforeInput**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onBeforeInput`](DOMAttributes.md#onbeforeinput)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2360

***

### onBeforeInputCapture?

> **`optional`** **onBeforeInputCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onBeforeInputCapture`](DOMAttributes.md#onbeforeinputcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2361

***

### onBlur?

> **`optional`** **onBlur**: [`FocusEventHandler`](../type-aliases/FocusEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onBlur`](DOMAttributes.md#onblur)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2354

***

### onBlurCapture?

> **`optional`** **onBlurCapture**: [`FocusEventHandler`](../type-aliases/FocusEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onBlurCapture`](DOMAttributes.md#onblurcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2355

***

### onCanPlay?

> **`optional`** **onCanPlay**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCanPlay`](DOMAttributes.md#oncanplay)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2390

***

### onCanPlayCapture?

> **`optional`** **onCanPlayCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCanPlayCapture`](DOMAttributes.md#oncanplaycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2391

***

### onCanPlayThrough?

> **`optional`** **onCanPlayThrough**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCanPlayThrough`](DOMAttributes.md#oncanplaythrough)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2392

***

### onCanPlayThroughCapture?

> **`optional`** **onCanPlayThroughCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCanPlayThroughCapture`](DOMAttributes.md#oncanplaythroughcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2393

***

### onChange?

> **`optional`** **onChange**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onChange`](DOMAttributes.md#onchange)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2358

***

### onChangeCapture?

> **`optional`** **onChangeCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onChangeCapture`](DOMAttributes.md#onchangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2359

***

### onClick?

> **`optional`** **onClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onClick`](DOMAttributes.md#onclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2438

***

### onClickCapture?

> **`optional`** **onClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onClickCapture`](DOMAttributes.md#onclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2439

***

### onCompositionEnd?

> **`optional`** **onCompositionEnd**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionEnd`](DOMAttributes.md#oncompositionend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2344

***

### onCompositionEndCapture?

> **`optional`** **onCompositionEndCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionEndCapture`](DOMAttributes.md#oncompositionendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2345

***

### onCompositionStart?

> **`optional`** **onCompositionStart**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionStart`](DOMAttributes.md#oncompositionstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2346

***

### onCompositionStartCapture?

> **`optional`** **onCompositionStartCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionStartCapture`](DOMAttributes.md#oncompositionstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2347

***

### onCompositionUpdate?

> **`optional`** **onCompositionUpdate**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionUpdate`](DOMAttributes.md#oncompositionupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2348

***

### onCompositionUpdateCapture?

> **`optional`** **onCompositionUpdateCapture**: [`CompositionEventHandler`](../type-aliases/CompositionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCompositionUpdateCapture`](DOMAttributes.md#oncompositionupdatecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2349

***

### onContextMenu?

> **`optional`** **onContextMenu**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onContextMenu`](DOMAttributes.md#oncontextmenu)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2440

***

### onContextMenuCapture?

> **`optional`** **onContextMenuCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onContextMenuCapture`](DOMAttributes.md#oncontextmenucapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2441

***

### onCopy?

> **`optional`** **onCopy**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCopy`](DOMAttributes.md#oncopy)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2336

***

### onCopyCapture?

> **`optional`** **onCopyCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCopyCapture`](DOMAttributes.md#oncopycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2337

***

### onCut?

> **`optional`** **onCut**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCut`](DOMAttributes.md#oncut)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2338

***

### onCutCapture?

> **`optional`** **onCutCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onCutCapture`](DOMAttributes.md#oncutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2339

***

### onDoubleClick?

> **`optional`** **onDoubleClick**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDoubleClick`](DOMAttributes.md#ondoubleclick)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2442

***

### onDoubleClickCapture?

> **`optional`** **onDoubleClickCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDoubleClickCapture`](DOMAttributes.md#ondoubleclickcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2443

***

### onDrag?

> **`optional`** **onDrag**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDrag`](DOMAttributes.md#ondrag)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2444

***

### onDragCapture?

> **`optional`** **onDragCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragCapture`](DOMAttributes.md#ondragcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2445

***

### onDragEnd?

> **`optional`** **onDragEnd**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragEnd`](DOMAttributes.md#ondragend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2446

***

### onDragEndCapture?

> **`optional`** **onDragEndCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragEndCapture`](DOMAttributes.md#ondragendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2447

***

### onDragEnter?

> **`optional`** **onDragEnter**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragEnter`](DOMAttributes.md#ondragenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2448

***

### onDragEnterCapture?

> **`optional`** **onDragEnterCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragEnterCapture`](DOMAttributes.md#ondragentercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2449

***

### onDragExit?

> **`optional`** **onDragExit**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragExit`](DOMAttributes.md#ondragexit)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2450

***

### onDragExitCapture?

> **`optional`** **onDragExitCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragExitCapture`](DOMAttributes.md#ondragexitcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2451

***

### onDragLeave?

> **`optional`** **onDragLeave**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragLeave`](DOMAttributes.md#ondragleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2452

***

### onDragLeaveCapture?

> **`optional`** **onDragLeaveCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragLeaveCapture`](DOMAttributes.md#ondragleavecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2453

***

### onDragOver?

> **`optional`** **onDragOver**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragOver`](DOMAttributes.md#ondragover)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2454

***

### onDragOverCapture?

> **`optional`** **onDragOverCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragOverCapture`](DOMAttributes.md#ondragovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2455

***

### onDragStart?

> **`optional`** **onDragStart**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragStart`](DOMAttributes.md#ondragstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2456

***

### onDragStartCapture?

> **`optional`** **onDragStartCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDragStartCapture`](DOMAttributes.md#ondragstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2457

***

### onDrop?

> **`optional`** **onDrop**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDrop`](DOMAttributes.md#ondrop)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2458

***

### onDropCapture?

> **`optional`** **onDropCapture**: [`DragEventHandler`](../type-aliases/DragEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDropCapture`](DOMAttributes.md#ondropcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2459

***

### onDurationChange?

> **`optional`** **onDurationChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDurationChange`](DOMAttributes.md#ondurationchange)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2394

***

### onDurationChangeCapture?

> **`optional`** **onDurationChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onDurationChangeCapture`](DOMAttributes.md#ondurationchangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2395

***

### onEmptied?

> **`optional`** **onEmptied**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEmptied`](DOMAttributes.md#onemptied)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2396

***

### onEmptiedCapture?

> **`optional`** **onEmptiedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEmptiedCapture`](DOMAttributes.md#onemptiedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2397

***

### onEncrypted?

> **`optional`** **onEncrypted**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEncrypted`](DOMAttributes.md#onencrypted)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2398

***

### onEncryptedCapture?

> **`optional`** **onEncryptedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEncryptedCapture`](DOMAttributes.md#onencryptedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2399

***

### onEnded?

> **`optional`** **onEnded**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEnded`](DOMAttributes.md#onended)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2400

***

### onEndedCapture?

> **`optional`** **onEndedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onEndedCapture`](DOMAttributes.md#onendedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2401

***

### onError?

> **`optional`** **onError**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onError`](DOMAttributes.md#onerror)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2374

***

### onErrorCapture?

> **`optional`** **onErrorCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onErrorCapture`](DOMAttributes.md#onerrorcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2375

***

### onFocus?

> **`optional`** **onFocus**: [`FocusEventHandler`](../type-aliases/FocusEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onFocus`](DOMAttributes.md#onfocus)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2352

***

### onFocusCapture?

> **`optional`** **onFocusCapture**: [`FocusEventHandler`](../type-aliases/FocusEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onFocusCapture`](DOMAttributes.md#onfocuscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2353

***

### onGotPointerCapture?

> **`optional`** **onGotPointerCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onGotPointerCapture`](DOMAttributes.md#ongotpointercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2502

***

### onGotPointerCaptureCapture?

> **`optional`** **onGotPointerCaptureCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onGotPointerCaptureCapture`](DOMAttributes.md#ongotpointercapturecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2503

***

### onInput?

> **`optional`** **onInput**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onInput`](DOMAttributes.md#oninput)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2362

***

### onInputCapture?

> **`optional`** **onInputCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onInputCapture`](DOMAttributes.md#oninputcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2363

***

### onInvalid?

> **`optional`** **onInvalid**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onInvalid`](DOMAttributes.md#oninvalid)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2368

***

### onInvalidCapture?

> **`optional`** **onInvalidCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onInvalidCapture`](DOMAttributes.md#oninvalidcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2369

***

### onKeyDown?

> **`optional`** **onKeyDown**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyDown`](DOMAttributes.md#onkeydown)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2378

***

### onKeyDownCapture?

> **`optional`** **onKeyDownCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyDownCapture`](DOMAttributes.md#onkeydowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2379

***

### ~~onKeyPress?~~

> **`optional`** **onKeyPress**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Deprecated

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyPress`](DOMAttributes.md#onkeypress)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2381

***

### ~~onKeyPressCapture?~~

> **`optional`** **onKeyPressCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Deprecated

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyPressCapture`](DOMAttributes.md#onkeypresscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2383

***

### onKeyUp?

> **`optional`** **onKeyUp**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyUp`](DOMAttributes.md#onkeyup)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2384

***

### onKeyUpCapture?

> **`optional`** **onKeyUpCapture**: [`KeyboardEventHandler`](../type-aliases/KeyboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onKeyUpCapture`](DOMAttributes.md#onkeyupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2385

***

### onLoad?

> **`optional`** **onLoad**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoad`](DOMAttributes.md#onload)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2372

***

### onLoadCapture?

> **`optional`** **onLoadCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadCapture`](DOMAttributes.md#onloadcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2373

***

### onLoadStart?

> **`optional`** **onLoadStart**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadStart`](DOMAttributes.md#onloadstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2406

***

### onLoadStartCapture?

> **`optional`** **onLoadStartCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadStartCapture`](DOMAttributes.md#onloadstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2407

***

### onLoadedData?

> **`optional`** **onLoadedData**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadedData`](DOMAttributes.md#onloadeddata)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2402

***

### onLoadedDataCapture?

> **`optional`** **onLoadedDataCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadedDataCapture`](DOMAttributes.md#onloadeddatacapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2403

***

### onLoadedMetadata?

> **`optional`** **onLoadedMetadata**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadedMetadata`](DOMAttributes.md#onloadedmetadata)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2404

***

### onLoadedMetadataCapture?

> **`optional`** **onLoadedMetadataCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLoadedMetadataCapture`](DOMAttributes.md#onloadedmetadatacapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2405

***

### onLostPointerCapture?

> **`optional`** **onLostPointerCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLostPointerCapture`](DOMAttributes.md#onlostpointercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2504

***

### onLostPointerCaptureCapture?

> **`optional`** **onLostPointerCaptureCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onLostPointerCaptureCapture`](DOMAttributes.md#onlostpointercapturecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2505

***

### onMouseDown?

> **`optional`** **onMouseDown**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseDown`](DOMAttributes.md#onmousedown)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2460

***

### onMouseDownCapture?

> **`optional`** **onMouseDownCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseDownCapture`](DOMAttributes.md#onmousedowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2461

***

### onMouseEnter?

> **`optional`** **onMouseEnter**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseEnter`](DOMAttributes.md#onmouseenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2462

***

### onMouseLeave?

> **`optional`** **onMouseLeave**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseLeave`](DOMAttributes.md#onmouseleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2463

***

### onMouseMove?

> **`optional`** **onMouseMove**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseMove`](DOMAttributes.md#onmousemove)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2464

***

### onMouseMoveCapture?

> **`optional`** **onMouseMoveCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseMoveCapture`](DOMAttributes.md#onmousemovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2465

***

### onMouseOut?

> **`optional`** **onMouseOut**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseOut`](DOMAttributes.md#onmouseout)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2466

***

### onMouseOutCapture?

> **`optional`** **onMouseOutCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseOutCapture`](DOMAttributes.md#onmouseoutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2467

***

### onMouseOver?

> **`optional`** **onMouseOver**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseOver`](DOMAttributes.md#onmouseover)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2468

***

### onMouseOverCapture?

> **`optional`** **onMouseOverCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseOverCapture`](DOMAttributes.md#onmouseovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2469

***

### onMouseUp?

> **`optional`** **onMouseUp**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseUp`](DOMAttributes.md#onmouseup)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2470

***

### onMouseUpCapture?

> **`optional`** **onMouseUpCapture**: [`MouseEventHandler`](../type-aliases/MouseEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onMouseUpCapture`](DOMAttributes.md#onmouseupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2471

***

### onPaste?

> **`optional`** **onPaste**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPaste`](DOMAttributes.md#onpaste)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2340

***

### onPasteCapture?

> **`optional`** **onPasteCapture**: [`ClipboardEventHandler`](../type-aliases/ClipboardEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPasteCapture`](DOMAttributes.md#onpastecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2341

***

### onPause?

> **`optional`** **onPause**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPause`](DOMAttributes.md#onpause)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2408

***

### onPauseCapture?

> **`optional`** **onPauseCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPauseCapture`](DOMAttributes.md#onpausecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2409

***

### onPlay?

> **`optional`** **onPlay**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPlay`](DOMAttributes.md#onplay)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2410

***

### onPlayCapture?

> **`optional`** **onPlayCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPlayCapture`](DOMAttributes.md#onplaycapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2411

***

### onPlaying?

> **`optional`** **onPlaying**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPlaying`](DOMAttributes.md#onplaying)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2412

***

### onPlayingCapture?

> **`optional`** **onPlayingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPlayingCapture`](DOMAttributes.md#onplayingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2413

***

### onPointerCancel?

> **`optional`** **onPointerCancel**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerCancel`](DOMAttributes.md#onpointercancel)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2494

***

### onPointerCancelCapture?

> **`optional`** **onPointerCancelCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerCancelCapture`](DOMAttributes.md#onpointercancelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2495

***

### onPointerDown?

> **`optional`** **onPointerDown**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerDown`](DOMAttributes.md#onpointerdown)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2488

***

### onPointerDownCapture?

> **`optional`** **onPointerDownCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerDownCapture`](DOMAttributes.md#onpointerdowncapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2489

***

### onPointerEnter?

> **`optional`** **onPointerEnter**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerEnter`](DOMAttributes.md#onpointerenter)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2496

***

### onPointerLeave?

> **`optional`** **onPointerLeave**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerLeave`](DOMAttributes.md#onpointerleave)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2497

***

### onPointerMove?

> **`optional`** **onPointerMove**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerMove`](DOMAttributes.md#onpointermove)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2490

***

### onPointerMoveCapture?

> **`optional`** **onPointerMoveCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerMoveCapture`](DOMAttributes.md#onpointermovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2491

***

### onPointerOut?

> **`optional`** **onPointerOut**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerOut`](DOMAttributes.md#onpointerout)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2500

***

### onPointerOutCapture?

> **`optional`** **onPointerOutCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerOutCapture`](DOMAttributes.md#onpointeroutcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2501

***

### onPointerOver?

> **`optional`** **onPointerOver**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerOver`](DOMAttributes.md#onpointerover)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2498

***

### onPointerOverCapture?

> **`optional`** **onPointerOverCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerOverCapture`](DOMAttributes.md#onpointerovercapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2499

***

### onPointerUp?

> **`optional`** **onPointerUp**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerUp`](DOMAttributes.md#onpointerup)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2492

***

### onPointerUpCapture?

> **`optional`** **onPointerUpCapture**: [`PointerEventHandler`](../type-aliases/PointerEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onPointerUpCapture`](DOMAttributes.md#onpointerupcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2493

***

### onProgress?

> **`optional`** **onProgress**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onProgress`](DOMAttributes.md#onprogress)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2414

***

### onProgressCapture?

> **`optional`** **onProgressCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onProgressCapture`](DOMAttributes.md#onprogresscapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2415

***

### onRateChange?

> **`optional`** **onRateChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onRateChange`](DOMAttributes.md#onratechange)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2416

***

### onRateChangeCapture?

> **`optional`** **onRateChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onRateChangeCapture`](DOMAttributes.md#onratechangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2417

***

### onReset?

> **`optional`** **onReset**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onReset`](DOMAttributes.md#onreset)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2364

***

### onResetCapture?

> **`optional`** **onResetCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onResetCapture`](DOMAttributes.md#onresetcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2365

***

### onResize?

> **`optional`** **onResize**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onResize`](DOMAttributes.md#onresize)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2418

***

### onResizeCapture?

> **`optional`** **onResizeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onResizeCapture`](DOMAttributes.md#onresizecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2419

***

### onScroll?

> **`optional`** **onScroll**: [`UIEventHandler`](../type-aliases/UIEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onScroll`](DOMAttributes.md#onscroll)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2508

***

### onScrollCapture?

> **`optional`** **onScrollCapture**: [`UIEventHandler`](../type-aliases/UIEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onScrollCapture`](DOMAttributes.md#onscrollcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2509

***

### onSeeked?

> **`optional`** **onSeeked**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSeeked`](DOMAttributes.md#onseeked)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2420

***

### onSeekedCapture?

> **`optional`** **onSeekedCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSeekedCapture`](DOMAttributes.md#onseekedcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2421

***

### onSeeking?

> **`optional`** **onSeeking**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSeeking`](DOMAttributes.md#onseeking)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2422

***

### onSeekingCapture?

> **`optional`** **onSeekingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSeekingCapture`](DOMAttributes.md#onseekingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2423

***

### onSelect?

> **`optional`** **onSelect**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSelect`](DOMAttributes.md#onselect)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2474

***

### onSelectCapture?

> **`optional`** **onSelectCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSelectCapture`](DOMAttributes.md#onselectcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2475

***

### onStalled?

> **`optional`** **onStalled**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onStalled`](DOMAttributes.md#onstalled)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2424

***

### onStalledCapture?

> **`optional`** **onStalledCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onStalledCapture`](DOMAttributes.md#onstalledcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2425

***

### onSubmit?

> **`optional`** **onSubmit**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSubmit`](DOMAttributes.md#onsubmit)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2366

***

### onSubmitCapture?

> **`optional`** **onSubmitCapture**: [`FormEventHandler`](../type-aliases/FormEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSubmitCapture`](DOMAttributes.md#onsubmitcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2367

***

### onSuspend?

> **`optional`** **onSuspend**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSuspend`](DOMAttributes.md#onsuspend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2426

***

### onSuspendCapture?

> **`optional`** **onSuspendCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onSuspendCapture`](DOMAttributes.md#onsuspendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2427

***

### onTimeUpdate?

> **`optional`** **onTimeUpdate**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTimeUpdate`](DOMAttributes.md#ontimeupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2428

***

### onTimeUpdateCapture?

> **`optional`** **onTimeUpdateCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTimeUpdateCapture`](DOMAttributes.md#ontimeupdatecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2429

***

### onTouchCancel?

> **`optional`** **onTouchCancel**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchCancel`](DOMAttributes.md#ontouchcancel)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2478

***

### onTouchCancelCapture?

> **`optional`** **onTouchCancelCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchCancelCapture`](DOMAttributes.md#ontouchcancelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2479

***

### onTouchEnd?

> **`optional`** **onTouchEnd**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchEnd`](DOMAttributes.md#ontouchend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2480

***

### onTouchEndCapture?

> **`optional`** **onTouchEndCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchEndCapture`](DOMAttributes.md#ontouchendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2481

***

### onTouchMove?

> **`optional`** **onTouchMove**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchMove`](DOMAttributes.md#ontouchmove)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2482

***

### onTouchMoveCapture?

> **`optional`** **onTouchMoveCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchMoveCapture`](DOMAttributes.md#ontouchmovecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2483

***

### onTouchStart?

> **`optional`** **onTouchStart**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchStart`](DOMAttributes.md#ontouchstart)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2484

***

### onTouchStartCapture?

> **`optional`** **onTouchStartCapture**: [`TouchEventHandler`](../type-aliases/TouchEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTouchStartCapture`](DOMAttributes.md#ontouchstartcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2485

***

### onTransitionEnd?

> **`optional`** **onTransitionEnd**: [`TransitionEventHandler`](../type-aliases/TransitionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTransitionEnd`](DOMAttributes.md#ontransitionend)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2524

***

### onTransitionEndCapture?

> **`optional`** **onTransitionEndCapture**: [`TransitionEventHandler`](../type-aliases/TransitionEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onTransitionEndCapture`](DOMAttributes.md#ontransitionendcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2525

***

### onVolumeChange?

> **`optional`** **onVolumeChange**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onVolumeChange`](DOMAttributes.md#onvolumechange)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2430

***

### onVolumeChangeCapture?

> **`optional`** **onVolumeChangeCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onVolumeChangeCapture`](DOMAttributes.md#onvolumechangecapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2431

***

### onWaiting?

> **`optional`** **onWaiting**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onWaiting`](DOMAttributes.md#onwaiting)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2432

***

### onWaitingCapture?

> **`optional`** **onWaitingCapture**: [`ReactEventHandler`](../type-aliases/ReactEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onWaitingCapture`](DOMAttributes.md#onwaitingcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2433

***

### onWheel?

> **`optional`** **onWheel**: [`WheelEventHandler`](../type-aliases/WheelEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onWheel`](DOMAttributes.md#onwheel)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2512

***

### onWheelCapture?

> **`optional`** **onWheelCapture**: [`WheelEventHandler`](../type-aliases/WheelEventHandler.md)\<`T`\>

#### Inherited from

[`DOMAttributes`](DOMAttributes.md).[`onWheelCapture`](DOMAttributes.md#onwheelcapture)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2513

***

### prefix?

> **`optional`** **prefix**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2873

***

### property?

> **`optional`** **property**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2874

***

### radioGroup?

> **`optional`** **radioGroup**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2863

***

### rel?

> **`optional`** **rel**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2875

***

### resource?

> **`optional`** **resource**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2876

***

### results?

> **`optional`** **results**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2891

***

### rev?

> **`optional`** **rev**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2877

***

### role?

> **`optional`** **role**: [`AriaRole`](../type-aliases/AriaRole.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2866

***

### security?

> **`optional`** **security**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2892

***

### slot?

> **`optional`** **slot**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2855

***

### spellCheck?

> **`optional`** **spellCheck**: [`Booleanish`](../type-aliases/Booleanish.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2856

***

### style?

> **`optional`** **style**: [`CSSProperties`](CSSProperties.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2857

***

### suppressContentEditableWarning?

> **`optional`** **suppressContentEditableWarning**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2840

***

### suppressHydrationWarning?

> **`optional`** **suppressHydrationWarning**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2841

***

### tabIndex?

> **`optional`** **tabIndex**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2858

***

### title?

> **`optional`** **title**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2859

***

### translate?

> **`optional`** **translate**: `"yes"` \| `"no"`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2860

***

### typeof?

> **`optional`** **typeof**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2878

***

### unselectable?

> **`optional`** **unselectable**: `"on"` \| `"off"`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2893

***

### vocab?

> **`optional`** **vocab**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2879
