**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / ReactNode

# Type alias: ReactNode

> **ReactNode**: [`ReactElement`](../interfaces/ReactElement-1.md) \| `string` \| `number` \| [`Iterable`](../interfaces/Iterable.md)\<[`ReactNode`](ReactNode-1.md)\> \| [`ReactPortal`](../interfaces/ReactPortal-1.md) \| `boolean` \| `null` \| `undefined` \| [`DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES`](../interfaces/DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES-1.md)\[keyof [`DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES`](../interfaces/DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES-1.md)\]

Represents all of the things React can render.

Where [ReactElement](../interfaces/ReactElement-1.md) only represents JSX, `ReactNode` represents everything that can be rendered.

## See

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/)

## Example

```tsx
// Typing children
type Props = { children: ReactNode }

const Component = ({ children }: Props) => <div>{children}</div>

<Component>hello</Component>
```

## Example

```tsx
// Typing a custom element
type Props = { customElement: ReactNode }

const Component = ({ customElement }: Props) => <div>{customElement}</div>

<Component customElement={<div>hello</div>} />
```

## Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:469
