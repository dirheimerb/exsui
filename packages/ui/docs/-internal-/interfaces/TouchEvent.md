**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / TouchEvent

# Interface: TouchEvent\<T\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`UIEvent`](UIEvent.md)\<`T`, [`NativeTouchEvent`](../type-aliases/NativeTouchEvent.md)\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

## Properties

### altKey

> **altKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2252

***

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`bubbles`](UIEvent.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2124

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`cancelable`](UIEvent.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2125

***

### changedTouches

> **changedTouches**: [`TouchList`](TouchList.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2253

***

### ctrlKey

> **ctrlKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2254

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`UIEvent`](UIEvent.md).[`currentTarget`](UIEvent.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2122

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`defaultPrevented`](UIEvent.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2126

***

### detail

> **detail**: `number`

#### Inherited from

[`UIEvent`](UIEvent.md).[`detail`](UIEvent.md#detail)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2266

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`UIEvent`](UIEvent.md).[`eventPhase`](UIEvent.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2127

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`isTrusted`](UIEvent.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2128

***

### metaKey

> **metaKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2259

***

### nativeEvent

> **nativeEvent**: [`TouchEvent`](https://developer.mozilla.org/docs/Web/API/TouchEvent)

#### Inherited from

[`UIEvent`](UIEvent.md).[`nativeEvent`](UIEvent.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2121

***

### shiftKey

> **shiftKey**: `boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2260

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`UIEvent`](UIEvent.md).[`target`](UIEvent.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2123

***

### targetTouches

> **targetTouches**: [`TouchList`](TouchList.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2261

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`UIEvent`](UIEvent.md).[`timeStamp`](UIEvent.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2134

***

### touches

> **touches**: [`TouchList`](TouchList.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2262

***

### type

> **type**: `string`

#### Inherited from

[`UIEvent`](UIEvent.md).[`type`](UIEvent.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2135

***

### view

> **view**: [`AbstractView`](AbstractView.md)

#### Inherited from

[`UIEvent`](UIEvent.md).[`view`](UIEvent.md#view)

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

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2258

***

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`isDefaultPrevented`](UIEvent.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2130

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`UIEvent`](UIEvent.md).[`isPropagationStopped`](UIEvent.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2132

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`persist`](UIEvent.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2133

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`preventDefault`](UIEvent.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2129

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`UIEvent`](UIEvent.md).[`stopPropagation`](UIEvent.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2131
