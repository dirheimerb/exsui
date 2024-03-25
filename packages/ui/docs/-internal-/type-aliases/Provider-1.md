**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Provider

# Type alias: Provider\<T\>

> **Provider**\<`T`\>: [`ProviderExoticComponent`](../interfaces/ProviderExoticComponent-1.md)\<[`ProviderProps`](../interfaces/ProviderProps-1.md)\<`T`\>\>

Wraps your components to specify the value of this context for all components inside.

## See

[React Docs](https://react.dev/reference/react/createContext#provider)

## Example

```tsx
import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

## Type parameters

• **T**

## Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:688
