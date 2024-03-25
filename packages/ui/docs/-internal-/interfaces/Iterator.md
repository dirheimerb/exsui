**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

## Type parameters

• **T**

• **TReturn** = `any`

• **TNext** = `undefined`

## Methods

### next()

> **next**(...`args`): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• ...**args**: [] \| [`TNext`]

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Source

node\_modules/.pnpm/typescript@5.4.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:43

***

### return()?

> **`optional`** **return**(`value`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **value?**: `TReturn`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Source

node\_modules/.pnpm/typescript@5.4.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:44

***

### throw()?

> **`optional`** **throw**(`e`?): [`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Parameters

• **e?**: `any`

#### Returns

[`IteratorResult`](../type-aliases/IteratorResult.md)\<`T`, `TReturn`\>

#### Source

node\_modules/.pnpm/typescript@5.4.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:45
