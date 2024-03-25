**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / WeakValidationMap

# Type alias: WeakValidationMap\<T\>

> **WeakValidationMap**\<`T`\>: `{ [K in keyof T]?: null extends T[K] ? Validator<T[K] | null | undefined> : undefined extends T[K] ? Validator<T[K] | null | undefined> : Validator<T[K]> }`

## Type parameters

• **T**

## Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:4078
