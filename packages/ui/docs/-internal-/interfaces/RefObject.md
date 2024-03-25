**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / RefObject

# Interface: RefObject\<T\>

A readonly ref container where [current](RefObject.md#current) cannot be mutated.

Created by createRef, or useRef when passed `null`.

## Example

```tsx
const ref = createRef<HTMLDivElement>();

ref.current = document.createElement('div'); // Error
```

## Type parameters

• **T**

The type of the ref's value.

## Properties

### current

> **`readonly`** **current**: `null` \| `T`

The current value of the ref.

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:155
