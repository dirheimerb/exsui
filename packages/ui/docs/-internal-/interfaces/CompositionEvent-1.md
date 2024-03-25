**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / CompositionEvent

# Interface: CompositionEvent\<T\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`SyntheticEvent`](SyntheticEvent-1.md)\<`T`, [`NativeCompositionEvent`](../type-aliases/NativeCompositionEvent-1.md)\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

## Properties

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`bubbles`](SyntheticEvent-1.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2114

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`cancelable`](SyntheticEvent-1.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2115

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`currentTarget`](SyntheticEvent-1.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2112

***

### data

> **data**: `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2142

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`defaultPrevented`](SyntheticEvent-1.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2116

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`eventPhase`](SyntheticEvent-1.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2117

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`isTrusted`](SyntheticEvent-1.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2118

***

### nativeEvent

> **nativeEvent**: [`CompositionEvent`](https://developer.mozilla.org/docs/Web/API/CompositionEvent)

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`nativeEvent`](SyntheticEvent-1.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2111

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`target`](SyntheticEvent-1.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2113

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`timeStamp`](SyntheticEvent-1.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2124

***

### type

> **type**: `string`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`type`](SyntheticEvent-1.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2125

## Methods

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`isDefaultPrevented`](SyntheticEvent-1.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2120

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`isPropagationStopped`](SyntheticEvent-1.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2122

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`persist`](SyntheticEvent-1.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2123

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`preventDefault`](SyntheticEvent-1.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2119

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent-1.md).[`stopPropagation`](SyntheticEvent-1.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2121
