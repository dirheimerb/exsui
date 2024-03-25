**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Component

# Class: Component\<P, S, SS\>

## Extends

- [`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md)\<`P`, `S`, `SS`\>

## Type parameters

• **P** = `Object`

• **S** = `Object`

• **SS** = `any`

## Constructors

### new Component(props)

> **new Component**\<`P`, `S`, `SS`\>(`props`): [`Component`](Component-1.md)\<`P`, `S`, `SS`\>

#### Parameters

• **props**: `P` \| [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

#### Returns

[`Component`](Component-1.md)\<`P`, `S`, `SS`\>

#### Inherited from

`ComponentLifecycle<P, S, SS>.constructor`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:988

### new Component(props, context)

> **new Component**\<`P`, `S`, `SS`\>(`props`, `context`): [`Component`](Component-1.md)\<`P`, `S`, `SS`\>

#### Parameters

• **props**: `P`

• **context**: `any`

#### Returns

[`Component`](Component-1.md)\<`P`, `S`, `SS`\>

#### Inherited from

`ComponentLifecycle<P, S, SS>.constructor`

#### Deprecated

#### See

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:993

## Properties

### context

> **context**: `unknown`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

#### Example

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

#### See

[React Docs](https://react.dev/reference/react/Component#context)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:986

***

### props

> **`readonly`** **props**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1006

***

### ~~refs~~

> **refs**: `Object`

#### Deprecated

#### See

[Legacy React Docs](https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)

#### Index signature

 \[`key`: `string`\]: [`ReactInstance`](../type-aliases/ReactInstance-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1013

***

### state

> **state**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1007

***

### contextType?

> **`static`** **`optional`** **contextType**: [`Context`](../interfaces/Context-1.md)\<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

#### Example

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

#### See

[https://react.dev/reference/react/Component#static-contexttype](https://react.dev/reference/react/Component#static-contexttype)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:968

## Methods

### ~~UNSAFE\_componentWillMount()?~~

> **`optional`** **UNSAFE\_componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`UNSAFE_componentWillMount`](../interfaces/ComponentLifecycle-1.md#unsafe_componentwillmount)

#### Deprecated

16.3, use [componentDidMount](../interfaces/ComponentLifecycle-1.md#componentdidmount) or the constructor instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1414

***

### ~~UNSAFE\_componentWillReceiveProps()?~~

> **`optional`** **UNSAFE\_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling [Component.setState](Component.md#setstate) generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`UNSAFE_componentWillReceiveProps`](../interfaces/ComponentLifecycle-1.md#unsafe_componentwillreceiveprops)

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1448

***

### ~~UNSAFE\_componentWillUpdate()?~~

> **`optional`** **UNSAFE\_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call [Component.setState](Component.md#setstate) here.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`UNSAFE_componentWillUpdate`](../interfaces/ComponentLifecycle-1.md#unsafe_componentwillupdate)

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1478

***

### componentDidCatch()?

> **`optional`** **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

• **error**: [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

• **errorInfo**: [`ErrorInfo`](../interfaces/ErrorInfo-1.md)

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentDidCatch`](../interfaces/ComponentLifecycle-1.md#componentdidcatch)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1341

***

### componentDidMount()?

> **`optional`** **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentDidMount`](../interfaces/ComponentLifecycle-1.md#componentdidmount)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1320

***

### componentDidUpdate()?

> **`optional`** **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **snapshot?**: `SS`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentDidUpdate`](../interfaces/ComponentLifecycle-1.md#componentdidupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1383

***

### ~~componentWillMount()?~~

> **`optional`** **componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentWillMount`](../interfaces/ComponentLifecycle-1.md#componentwillmount)

#### Deprecated

16.3, use [componentDidMount](../interfaces/ComponentLifecycle-1.md#componentdidmount) or the constructor instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1399

***

### ~~componentWillReceiveProps()?~~

> **`optional`** **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling [Component.setState](Component.md#setstate) generally does not trigger this method.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentWillReceiveProps`](../interfaces/ComponentLifecycle-1.md#componentwillreceiveprops)

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1430

***

### componentWillUnmount()?

> **`optional`** **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentWillUnmount`](../interfaces/ComponentLifecycle-1.md#componentwillunmount)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1336

***

### ~~componentWillUpdate()?~~

> **`optional`** **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call [Component.setState](Component.md#setstate) here.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`componentWillUpdate`](../interfaces/ComponentLifecycle-1.md#componentwillupdate)

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1462

***

### forceUpdate()

> **forceUpdate**(`callback`?): `void`

#### Parameters

• **callback?**

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1003

***

### getSnapshotBeforeUpdate()?

> **`optional`** **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `null` \| `SS`

Runs before React applies the result of [render](Component.md#render) to the document, and
returns an object to be given to [componentDidUpdate](../interfaces/NewLifecycle-1.md#componentdidupdate). Useful for saving
things such as scroll position before [render](Component.md#render) causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Returns

`null` \| `SS`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`getSnapshotBeforeUpdate`](../interfaces/ComponentLifecycle-1.md#getsnapshotbeforeupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1377

***

### render()

> **render**(): [`ReactNode`](../type-aliases/ReactNode-1.md)

#### Returns

[`ReactNode`](../type-aliases/ReactNode-1.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1004

***

### setState()

> **setState**\<`K`\>(`state`, `callback`?): `void`

#### Type parameters

• **K** extends `string` \| `number` \| `symbol`

#### Parameters

• **state**: `null` \| `S` \| (`prevState`, `props`) => `null` \| `S` \| [`Pick`](../type-aliases/Pick.md)\<`S`, `K`\> \| [`Pick`](../type-aliases/Pick.md)\<`S`, `K`\>

• **callback?**

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:998

***

### shouldComponentUpdate()?

> **`optional`** **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, [Component.render](Component.md#render), `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`boolean`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle-1.md).[`shouldComponentUpdate`](../interfaces/ComponentLifecycle-1.md#shouldcomponentupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1331
