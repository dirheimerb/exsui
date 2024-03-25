**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / NewLifecycle

# Interface: NewLifecycle\<P, S, SS\>

## Extended by

- [`ComponentLifecycle`](ComponentLifecycle-1.md)

## Type parameters

• **P**

• **S**

• **SS**

## Methods

### componentDidUpdate()?

> **`optional`** **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **snapshot?**: `SS`

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1383

***

### getSnapshotBeforeUpdate()?

> **`optional`** **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `null` \| `SS`

Runs before React applies the result of [render](../classes/Component.md#render) to the document, and
returns an object to be given to [componentDidUpdate](NewLifecycle-1.md#componentdidupdate). Useful for saving
things such as scroll position before [render](../classes/Component.md#render) causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Returns

`null` \| `SS`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1377
