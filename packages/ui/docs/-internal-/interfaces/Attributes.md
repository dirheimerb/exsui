**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Attributes

# Interface: Attributes

The props any component can receive.
You don't have to add this type. All components automatically accept these props.
```tsx
const Component = () => <div />;
<Component key="one" />
```

WARNING: The implementation of a component will never have access to these attributes.
The following example would be incorrect usage because [Component](../classes/Component-1.md) would never have access to `key`:
```tsx
const Component = (props: React.Attributes) => props.key;
```

## Extended by

- [`RefAttributes`](RefAttributes.md)

## Properties

### key?

> **`optional`** **key**: `null` \| [`Key`](../type-aliases/Key.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:252
