**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / ReactElement

# Interface: ReactElement\<P, T\>

Represents a JSX element.

Where [ReactNode](../type-aliases/ReactNode-1.md) represents everything that can be rendered, `ReactElement`
only represents JSX.

## Example

```tsx
const element: ReactElement = <div />;
```

## Extended by

- [`ReactPortal`](ReactPortal-1.md)

## Type parameters

• **P** = `any`

The type of the props object

• **T** extends `string` \| [`JSXElementConstructor`](../type-aliases/JSXElementConstructor-1.md)\<`any`\> = `string` \| [`JSXElementConstructor`](../type-aliases/JSXElementConstructor-1.md)\<`any`\>

The type of the component or tag

## Properties

### key

> **key**: `null` \| `string`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:324

***

### props

> **props**: `P`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:323

***

### type

> **type**: `T`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:322
