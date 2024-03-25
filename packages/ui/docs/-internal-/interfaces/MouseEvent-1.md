**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / MouseEvent

# Interface: MouseEvent\<T, E\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`UIEvent`](UIEvent-1.md)\<`T`, `E`\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

• **E** = [`NativeMouseEvent`](../type-aliases/NativeMouseEvent-1.md)

## Properties

### altKey

> **altKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2220

***

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`bubbles`](UIEvent-1.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2114

***

### button

> **button**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2221

***

### buttons

> **buttons**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2222

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`cancelable`](UIEvent-1.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2115

***

### clientX

> **clientX**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2223

***

### clientY

> **clientY**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2224

***

### ctrlKey

> **ctrlKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2225

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`currentTarget`](UIEvent-1.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2112

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`defaultPrevented`](UIEvent-1.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2116

***

### detail

> **detail**: `number`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`detail`](UIEvent-1.md#detail)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2256

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`eventPhase`](UIEvent-1.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2117

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`isTrusted`](UIEvent-1.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2118

***

### metaKey

> **metaKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2230

***

### movementX

> **movementX**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2231

***

### movementY

> **movementY**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2232

***

### nativeEvent

> **nativeEvent**: `E`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`nativeEvent`](UIEvent-1.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2111

***

### pageX

> **pageX**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2233

***

### pageY

> **pageY**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2234

***

### relatedTarget

> **relatedTarget**: `null` \| [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2235

***

### screenX

> **screenX**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2236

***

### screenY

> **screenY**: `number`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2237

***

### shiftKey

> **shiftKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2238

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`target`](UIEvent-1.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2113

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`timeStamp`](UIEvent-1.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2124

***

### type

> **type**: `string`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`type`](UIEvent-1.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2125

***

### view

> **view**: [`AbstractView`](AbstractView-1.md)

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`view`](UIEvent-1.md#view)

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

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2229

***

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`isDefaultPrevented`](UIEvent-1.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2120

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`isPropagationStopped`](UIEvent-1.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2122

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`persist`](UIEvent-1.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2123

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`preventDefault`](UIEvent-1.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2119

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent-1.md).[`stopPropagation`](UIEvent-1.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2121
