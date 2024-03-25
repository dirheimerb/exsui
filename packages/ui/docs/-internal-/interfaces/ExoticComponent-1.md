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

- [`ProviderExoticComponent`](ProviderExoticComponent-1.md)

## Type parameters

• **P** = `Object`

The props the component accepts.

> **ExoticComponent**(`props`): [`ReactNode`](../type-aliases/ReactNode-1.md)

## Parameters

• **props**: `P`

## Returns

[`ReactNode`](../type-aliases/ReactNode-1.md)

## Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:620

## Properties

### $$typeof

> **`readonly`** **$$typeof**: `symbol`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:621
