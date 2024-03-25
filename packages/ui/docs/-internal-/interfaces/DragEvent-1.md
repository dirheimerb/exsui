**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / DragEvent

# Interface: DragEvent\<T\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`MouseEvent`](MouseEvent-1.md)\<`T`, [`NativeDragEvent`](../type-aliases/NativeDragEvent-1.md)\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

## Properties

### altKey

> **altKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`altKey`](MouseEvent-1.md#altkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2220

***

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`bubbles`](MouseEvent-1.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2114

***

### button

> **button**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`button`](MouseEvent-1.md#button)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2221

***

### buttons

> **buttons**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`buttons`](MouseEvent-1.md#buttons)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2222

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`cancelable`](MouseEvent-1.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2115

***

### clientX

> **clientX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`clientX`](MouseEvent-1.md#clientx)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2223

***

### clientY

> **clientY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`clientY`](MouseEvent-1.md#clienty)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2224

***

### ctrlKey

> **ctrlKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`ctrlKey`](MouseEvent-1.md#ctrlkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2225

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`currentTarget`](MouseEvent-1.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2112

***

### dataTransfer

> **dataTransfer**: [`DataTransfer`]( https://developer.mozilla.org/docs/Web/API/DataTransfer )

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2146

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`defaultPrevented`](MouseEvent-1.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2116

***

### detail

> **detail**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`detail`](MouseEvent-1.md#detail)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2256

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`eventPhase`](MouseEvent-1.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2117

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`isTrusted`](MouseEvent-1.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2118

***

### metaKey

> **metaKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`metaKey`](MouseEvent-1.md#metakey)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2230

***

### movementX

> **movementX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`movementX`](MouseEvent-1.md#movementx)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2231

***

### movementY

> **movementY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`movementY`](MouseEvent-1.md#movementy)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2232

***

### nativeEvent

> **nativeEvent**: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`nativeEvent`](MouseEvent-1.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2111

***

### pageX

> **pageX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`pageX`](MouseEvent-1.md#pagex)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2233

***

### pageY

> **pageY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`pageY`](MouseEvent-1.md#pagey)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2234

***

### relatedTarget

> **relatedTarget**: `null` \| [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`relatedTarget`](MouseEvent-1.md#relatedtarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2235

***

### screenX

> **screenX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`screenX`](MouseEvent-1.md#screenx)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2236

***

### screenY

> **screenY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`screenY`](MouseEvent-1.md#screeny)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2237

***

### shiftKey

> **shiftKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`shiftKey`](MouseEvent-1.md#shiftkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2238

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`target`](MouseEvent-1.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2113

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`timeStamp`](MouseEvent-1.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2124

***

### type

> **type**: `string`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`type`](MouseEvent-1.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2125

***

### view

> **view**: [`AbstractView`](AbstractView-1.md)

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`view`](MouseEvent-1.md#view)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2257

## Methods

### getModifierState()

> **getModifierState**(`key`): `boolean`

See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.

#### Parameters

• **key**: [`ModifierKey`](../type-aliases/ModifierKey-1.md)

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`getModifierState`](MouseEvent-1.md#getmodifierstate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2229

***

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`isDefaultPrevented`](MouseEvent-1.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2120

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`isPropagationStopped`](MouseEvent-1.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2122

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`persist`](MouseEvent-1.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2123

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`preventDefault`](MouseEvent-1.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2119

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent-1.md).[`stopPropagation`](MouseEvent-1.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2121
