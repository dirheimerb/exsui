**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / DragEvent

# Interface: DragEvent\<T\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`MouseEvent`](MouseEvent.md)\<`T`, [`NativeDragEvent`](../type-aliases/NativeDragEvent.md)\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

## Properties

### altKey

> **altKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`altKey`](MouseEvent.md#altkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2230

***

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`bubbles`](MouseEvent.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2124

***

### button

> **button**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`button`](MouseEvent.md#button)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2231

***

### buttons

> **buttons**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`buttons`](MouseEvent.md#buttons)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2232

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`cancelable`](MouseEvent.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2125

***

### clientX

> **clientX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`clientX`](MouseEvent.md#clientx)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2233

***

### clientY

> **clientY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`clientY`](MouseEvent.md#clienty)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2234

***

### ctrlKey

> **ctrlKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`ctrlKey`](MouseEvent.md#ctrlkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2235

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`currentTarget`](MouseEvent.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2122

***

### dataTransfer

> **dataTransfer**: [`DataTransfer`]( https://developer.mozilla.org/docs/Web/API/DataTransfer )

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2156

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`defaultPrevented`](MouseEvent.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2126

***

### detail

> **detail**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`detail`](MouseEvent.md#detail)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2266

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`eventPhase`](MouseEvent.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2127

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`isTrusted`](MouseEvent.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2128

***

### metaKey

> **metaKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`metaKey`](MouseEvent.md#metakey)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2240

***

### movementX

> **movementX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`movementX`](MouseEvent.md#movementx)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2241

***

### movementY

> **movementY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`movementY`](MouseEvent.md#movementy)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2242

***

### nativeEvent

> **nativeEvent**: [`DragEvent`](https://developer.mozilla.org/docs/Web/API/DragEvent)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`nativeEvent`](MouseEvent.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2121

***

### pageX

> **pageX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`pageX`](MouseEvent.md#pagex)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2243

***

### pageY

> **pageY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`pageY`](MouseEvent.md#pagey)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2244

***

### relatedTarget

> **relatedTarget**: `null` \| [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`relatedTarget`](MouseEvent.md#relatedtarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2245

***

### screenX

> **screenX**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`screenX`](MouseEvent.md#screenx)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2246

***

### screenY

> **screenY**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`screenY`](MouseEvent.md#screeny)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2247

***

### shiftKey

> **shiftKey**: `boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`shiftKey`](MouseEvent.md#shiftkey)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2248

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`target`](MouseEvent.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2123

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`timeStamp`](MouseEvent.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2134

***

### type

> **type**: `string`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`type`](MouseEvent.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2135

***

### view

> **view**: [`AbstractView`](AbstractView.md)

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`view`](MouseEvent.md#view)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2267

## Methods

### getModifierState()

> **getModifierState**(`key`): `boolean`

See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.

#### Parameters

• **key**: [`ModifierKey`](../type-aliases/ModifierKey.md)

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`getModifierState`](MouseEvent.md#getmodifierstate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2239

***

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`isDefaultPrevented`](MouseEvent.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2130

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`isPropagationStopped`](MouseEvent.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2132

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`persist`](MouseEvent.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2133

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`preventDefault`](MouseEvent.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2129

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`MouseEvent`](MouseEvent.md).[`stopPropagation`](MouseEvent.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2131
