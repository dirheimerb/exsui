**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Context

# Interface: Context\<T\>

Context lets components pass information deep down without explicitly
passing props.

Created from createContext

## See

 - [React Docs](https://react.dev/learn/passing-data-deeply-with-context)
 - [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/)

## Example

```tsx
import { createContext } from 'react';

const ThemeContext = createContext('light');
```

## Type parameters

• **T**

## Properties

### Consumer

> **Consumer**: [`Consumer`](../type-aliases/Consumer-1.md)\<`T`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:730

***

### Provider

> **Provider**: [`Provider`](../type-aliases/Provider-1.md)\<`T`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:729

***

### displayName?

> **`optional`** **displayName**: `string`

Used in debugging messages. You might want to set it
explicitly if you want to display a different name for
debugging purposes.

#### See

[Legacy React Docs](https://legacy.reactjs.org/docs/react-component.html#displayname)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:738
