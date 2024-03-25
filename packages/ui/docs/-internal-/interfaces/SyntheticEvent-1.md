**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / SyntheticEvent

# Interface: SyntheticEvent\<T, E\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`BaseSyntheticEvent`](BaseSyntheticEvent-1.md)\<`E`, [`EventTarget`]( https://developer.mozilla.org/docs/Web/API/EventTarget ) & `T`, [`EventTarget`]( https://developer.mozilla.org/docs/Web/API/EventTarget )\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

• **E** = [`Event`]( https://developer.mozilla.org/docs/Web/API/Event )

## Properties

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`bubbles`](BaseSyntheticEvent-1.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2114

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`cancelable`](BaseSyntheticEvent-1.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2115

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`currentTarget`](BaseSyntheticEvent-1.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2112

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`defaultPrevented`](BaseSyntheticEvent-1.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2116

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`eventPhase`](BaseSyntheticEvent-1.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2117

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`isTrusted`](BaseSyntheticEvent-1.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2118

***

### nativeEvent

> **nativeEvent**: `E`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`nativeEvent`](BaseSyntheticEvent-1.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2111

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`target`](BaseSyntheticEvent-1.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2113

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`timeStamp`](BaseSyntheticEvent-1.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2124

***

### type

> **type**: `string`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`type`](BaseSyntheticEvent-1.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2125

## Methods

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`isDefaultPrevented`](BaseSyntheticEvent-1.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2120

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`isPropagationStopped`](BaseSyntheticEvent-1.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2122

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`persist`](BaseSyntheticEvent-1.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2123

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`preventDefault`](BaseSyntheticEvent-1.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2119

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent-1.md).[`stopPropagation`](BaseSyntheticEvent-1.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:2121
