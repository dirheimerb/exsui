**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / RefAttributes

# Interface: RefAttributes\<T\>

The props any component accepting refs can receive.
Class components, built-in browser components (e.g. `div`) and forwardRef components can receive refs and automatically accept these props.
```tsx
const Component = forwardRef(() => <div />);
<Component ref={(current) => console.log(current)} />
```

You only need this type if you manually author the types of props that need to be compatible with legacy refs.
```tsx
interface Props extends React.RefAttributes<HTMLDivElement> {}
declare const Component: React.FunctionComponent<Props>;
```

Otherwise it's simpler to directly use [Ref](../type-aliases/Ref.md) since you can safely use the
props type to describe to props that a consumer can pass to the component
as well as describing the props the implementation of a component "sees".
[RefAttributes](RefAttributes.md) is generally not safe to describe both consumer and seen props.

```tsx
interface Props extends {
  ref?: React.Ref<HTMLDivElement> | undefined;
}
declare const Component: React.FunctionComponent<Props>;
```

WARNING: The implementation of a component will not have access to the same type in versions of React supporting string refs.
The following example would be incorrect usage because [Component](../classes/Component-1.md) would never have access to a `ref` with type `string`
```tsx
const Component = (props: React.RefAttributes) => props.ref;
```

## Extends

- [`Attributes`](Attributes.md)

## Type parameters

• **T**

## Properties

### key?

> **`optional`** **key**: `null` \| [`Key`](../type-aliases/Key.md)

#### Inherited from

[`Attributes`](Attributes.md).[`key`](Attributes.md#key)

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

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:294
