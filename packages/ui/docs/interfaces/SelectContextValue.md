**@exsui/ui** • [Readme](../README.md) \| [API](../globals.md)

***

[@exsui/ui](../README.md) / SelectContextValue

# Interface: SelectContextValue

## Properties

### activeIndex

> **activeIndex**: `null` \| `number`

#### Source

[packages/ui/src/Select/types.ts:5](https://github.com/dirheimerb/exsui/blob/c97dab6/packages/ui/src/Select/types.ts#L5)

***

### getItemProps()

> **getItemProps**: (`userProps`?) => [`Record`](../-internal-/type-aliases/Record.md)\<`string`, `unknown`\>

#### Parameters

• **userProps?**: [`Omit`](../-internal-/type-aliases/Omit.md)\<[`HTMLProps`](../-internal-/interfaces/HTMLProps.md)\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>, `"selected"` \| `"active"`\> & [`ExtendedUserProps`](../-internal-/type-aliases/ExtendedUserProps.md)

#### Returns

[`Record`](../-internal-/type-aliases/Record.md)\<`string`, `unknown`\>

#### Source

[packages/ui/src/Select/types.ts:7](https://github.com/dirheimerb/exsui/blob/c97dab6/packages/ui/src/Select/types.ts#L7)

***

### handleSelect()

> **handleSelect**: (`index`) => `void`

#### Parameters

• **index**: `null` \| `number`

#### Returns

`void`

#### Source

[packages/ui/src/Select/types.ts:8](https://github.com/dirheimerb/exsui/blob/c97dab6/packages/ui/src/Select/types.ts#L8)

***

### selectedIndex

> **selectedIndex**: `null` \| `number`

#### Source

[packages/ui/src/Select/types.ts:6](https://github.com/dirheimerb/exsui/blob/c97dab6/packages/ui/src/Select/types.ts#L6)
