**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / FocusEvent

# Interface: FocusEvent\<Target, RelatedTarget\>

currentTarget - a reference to the element on which the event listener is registered.

target - a reference to the element from which the event was originally dispatched.
This might be a child element to the element on which the event listener is registered.
If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682

## Extends

- [`SyntheticEvent`](SyntheticEvent.md)\<`Target`, [`NativeFocusEvent`](../type-aliases/NativeFocusEvent.md)\>

## Type parameters

• **Target** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

• **RelatedTarget** = [`Element`]( https://developer.mozilla.org/docs/Web/API/Element )

## Properties

### bubbles

> **bubbles**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`bubbles`](SyntheticEvent.md#bubbles)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2124

***

### cancelable

> **cancelable**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`cancelable`](SyntheticEvent.md#cancelable)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2125

***

### currentTarget

> **currentTarget**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `Target`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`currentTarget`](SyntheticEvent.md#currenttarget)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2122

***

### defaultPrevented

> **defaultPrevented**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`defaultPrevented`](SyntheticEvent.md#defaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2126

***

### eventPhase

> **eventPhase**: `number`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`eventPhase`](SyntheticEvent.md#eventphase)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2127

***

### isTrusted

> **isTrusted**: `boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`isTrusted`](SyntheticEvent.md#istrusted)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2128

***

### nativeEvent

> **nativeEvent**: [`FocusEvent`](https://developer.mozilla.org/docs/Web/API/FocusEvent)

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`nativeEvent`](SyntheticEvent.md#nativeevent)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2121

***

### relatedTarget

> **relatedTarget**: `null` \| [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `RelatedTarget`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2173

***

### target

> **target**: [`EventTarget`](https://developer.mozilla.org/docs/Web/API/EventTarget) & `Target`

#### Overrides

[`SyntheticEvent`](SyntheticEvent.md).[`target`](SyntheticEvent.md#target)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2174

***

### timeStamp

> **timeStamp**: `number`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`timeStamp`](SyntheticEvent.md#timestamp)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2134

***

### type

> **type**: `string`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`type`](SyntheticEvent.md#type)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2135

## Methods

### isDefaultPrevented()

> **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`isDefaultPrevented`](SyntheticEvent.md#isdefaultprevented)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2130

***

### isPropagationStopped()

> **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`isPropagationStopped`](SyntheticEvent.md#ispropagationstopped)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2132

***

### persist()

> **persist**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`persist`](SyntheticEvent.md#persist)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2133

***

### preventDefault()

> **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`preventDefault`](SyntheticEvent.md#preventdefault)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2129

***

### stopPropagation()

> **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[`SyntheticEvent`](SyntheticEvent.md).[`stopPropagation`](SyntheticEvent.md#stoppropagation)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:2131
