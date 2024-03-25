**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / ExoticComponent

# Interface: ExoticComponent()\<P\>

An object masquerading as a component. These are created by functions
like forwardRef, memo, and createContext.

In order to make TypeScript work, we pretend that they are normal
components.

But they are, in fact, not callable - instead, they are objects which
are treated specially by the renderer.

## Extended by

- [`ProviderExoticComponent`](ProviderExoticComponent.md)

## Type parameters

• **P** = `Object`

The props the component accepts.

> **ExoticComponent**(`props`): [`ReactNode`](../type-aliases/ReactNode.md)

## Parameters

• **props**: `P`

## Returns

[`ReactNode`](../type-aliases/ReactNode.md)

## Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:630

## Properties

### $$typeof

> **`readonly`** **$$typeof**: `symbol`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:631
