**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / SyntheticEvent

# Interface: SyntheticEvent\<T, E\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`BaseSyntheticEvent`](BaseSyntheticEvent.md)\<`E`, [`EventTarget`]( https://developer.mozilla.org/docs/Web/API/EventTarget ) & `T`, [`EventTarget`]( https://developer.mozilla.org/docs/Web/API/EventTarget )\>

## Type parameters

• **T** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

• **E** = [`Event`]( https://developer.mozilla.org/docs/Web/API/Event )

## Properties

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`bubbles`](BaseSyntheticEvent.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2124

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`cancelable`](BaseSyntheticEvent.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2125

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `T`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`currentTarget`](BaseSyntheticEvent.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2122

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`defaultPrevented`](BaseSyntheticEvent.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2126

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`eventPhase`](BaseSyntheticEvent.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2127

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`isTrusted`](BaseSyntheticEvent.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2128

***

### nativeEvent

> **nativeEvent**: `E`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`nativeEvent`](BaseSyntheticEvent.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2121

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget)

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`target`](BaseSyntheticEvent.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2123

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`timeStamp`](BaseSyntheticEvent.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2134

***

### type

> **type**: `string`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`type`](BaseSyntheticEvent.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2135

## Methods

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`isDefaultPrevented`](BaseSyntheticEvent.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2130

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`isPropagationStopped`](BaseSyntheticEvent.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2132

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`persist`](BaseSyntheticEvent.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2133

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`preventDefault`](BaseSyntheticEvent.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2129

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`BaseSyntheticEvent`](BaseSyntheticEvent.md).[`stopPropagation`](BaseSyntheticEvent.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2131
