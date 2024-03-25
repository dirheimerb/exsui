**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / ClassAttributes

# Interface: ClassAttributes\<T\>

Represents the built-in attributes available to class components.

## Extends

- [`RefAttributes`](RefAttributes.md)\<`T`\>

## Type parameters

• **T**

## Properties

### key?

> **`optional`** **key**: `null` \| [`Key`](../type-aliases/Key.md)

#### Inherited from

[`RefAttributes`](RefAttributes.md).[`key`](RefAttributes.md#key)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:252

***

### ref?

> **`optional`** **ref**: [`LegacyRef`](../type-aliases/LegacyRef.md)\<`T`\>

Allows getting a ref to the component instance.
Once the component unmounts, React will set `ref.current` to `null`
(or call the ref with `null` if you passed a callback ref).

#### See

[React Docs](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom)

#### Inherited from

[`RefAttributes`](RefAttributes.md).[`ref`](RefAttributes.md#ref)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:294
