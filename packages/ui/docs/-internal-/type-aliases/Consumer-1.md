**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Consumer

# Type alias: Consumer\<T\>

> **Consumer**\<`T`\>: [`ExoticComponent`](../interfaces/ExoticComponent-1.md)\<[`ConsumerProps`](../interfaces/ConsumerProps-1.md)\<`T`\>\>

The old way to read context, before useContext existed.

## See

[React Docs](https://react.dev/reference/react/createContext#consumer)

## Example

```tsx
import { UserContext } from './user-context';

function Avatar() {
  return (
    <UserContext.Consumer>
      {user => <img src={user.profileImage} alt={user.name} />}
    </UserContext.Consumer>
  );
}
```

## Type parameters

• **T**

## Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:709
