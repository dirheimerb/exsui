**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / Component

# Class: Component\<P, S, SS\>

## Extends

- [`ComponentLifecycle`](../interfaces/ComponentLifecycle.md)\<`P`, `S`, `SS`\>

## Type parameters

• **P** = `Object`

• **S** = `Object`

• **SS** = `any`

## Constructors

### new Component(props)

> **new Component**\<`P`, `S`, `SS`\>(`props`): [`Component`](Component.md)\<`P`, `S`, `SS`\>

#### Parameters

• **props**: `P` \| [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

#### Returns

[`Component`](Component.md)\<`P`, `S`, `SS`\>

#### Inherited from

`ComponentLifecycle<P, S, SS>.constructor`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:998

### new Component(props, context)

> **new Component**\<`P`, `S`, `SS`\>(`props`, `context`): [`Component`](Component.md)\<`P`, `S`, `SS`\>

#### Parameters

• **props**: `P`

• **context**: `any`

#### Returns

[`Component`](Component.md)\<`P`, `S`, `SS`\>

#### Inherited from

`ComponentLifecycle<P, S, SS>.constructor`

#### Deprecated

#### See

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1003

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

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:996

***

### props

> **`readonly`** **props**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1016

***

### ~~refs~~

> **refs**: `Object`

#### Deprecated

#### See

[Legacy React Docs](https://legacy.reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)

#### Index signature

 \[`key`: `string`\]: [`ReactInstance`](../type-aliases/ReactInstance.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1023

***

### state

> **state**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1017

***

### contextType?

> **`static`** **`optional`** **contextType**: [`Context`](../interfaces/Context.md)\<`any`\>

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

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:978

## Methods

### ~~UNSAFE\_componentWillMount()?~~

> **`optional`** **UNSAFE\_componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`UNSAFE_componentWillMount`](../interfaces/ComponentLifecycle.md#unsafe_componentwillmount)

#### Deprecated

16.3, use [componentDidMount](../interfaces/ComponentLifecycle.md#componentdidmount) or the constructor instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1424

***

### ~~UNSAFE\_componentWillReceiveProps()?~~

> **`optional`** **UNSAFE\_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling [Component.setState](Component.md#setstate) generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`UNSAFE_componentWillReceiveProps`](../interfaces/ComponentLifecycle.md#unsafe_componentwillreceiveprops)

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1458

***

### ~~UNSAFE\_componentWillUpdate()?~~

> **`optional`** **UNSAFE\_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call [Component.setState](Component.md#setstate) here.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`UNSAFE_componentWillUpdate`](../interfaces/ComponentLifecycle.md#unsafe_componentwillupdate)

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1488

***

### componentDidCatch()?

> **`optional`** **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

• **error**: [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )

• **errorInfo**: [`ErrorInfo`](../interfaces/ErrorInfo.md)

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentDidCatch`](../interfaces/ComponentLifecycle.md#componentdidcatch)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1351

***

### componentDidMount()?

> **`optional`** **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentDidMount`](../interfaces/ComponentLifecycle.md#componentdidmount)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1330

***

### componentDidUpdate()?

> **`optional`** **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **snapshot?**: `SS`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentDidUpdate`](../interfaces/ComponentLifecycle.md#componentdidupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1393

***

### ~~componentWillMount()?~~

> **`optional`** **componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentWillMount`](../interfaces/ComponentLifecycle.md#componentwillmount)

#### Deprecated

16.3, use [componentDidMount](../interfaces/ComponentLifecycle.md#componentdidmount) or the constructor instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1409

***

### ~~componentWillReceiveProps()?~~

> **`optional`** **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling [Component.setState](Component.md#setstate) generally does not trigger this method.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentWillReceiveProps`](../interfaces/ComponentLifecycle.md#componentwillreceiveprops)

#### Deprecated

16.3, use static StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1440

***

### componentWillUnmount()?

> **`optional`** **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentWillUnmount`](../interfaces/ComponentLifecycle.md#componentwillunmount)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1346

***

### ~~componentWillUpdate()?~~

> **`optional`** **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call [Component.setState](Component.md#setstate) here.

Note: the presence of [getSnapshotBeforeUpdate](../interfaces/NewLifecycle.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`componentWillUpdate`](../interfaces/ComponentLifecycle.md#componentwillupdate)

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1472

***

### forceUpdate()

> **forceUpdate**(`callback`?): `void`

#### Parameters

• **callback?**

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1013

***

### getSnapshotBeforeUpdate()?

> **`optional`** **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `null` \| `SS`

Runs before React applies the result of [render](Component.md#render) to the document, and
returns an object to be given to [componentDidUpdate](../interfaces/NewLifecycle.md#componentdidupdate). Useful for saving
things such as scroll position before [render](Component.md#render) causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Returns

`null` \| `SS`

#### Inherited from

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`getSnapshotBeforeUpdate`](../interfaces/ComponentLifecycle.md#getsnapshotbeforeupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1387

***

### render()

> **render**(): [`ReactNode`](../type-aliases/ReactNode.md)

#### Returns

[`ReactNode`](../type-aliases/ReactNode.md)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1014

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

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1008

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

[`ComponentLifecycle`](../interfaces/ComponentLifecycle.md).[`shouldComponentUpdate`](../interfaces/ComponentLifecycle.md#shouldcomponentupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.69/node\_modules/@types/react/index.d.ts:1341
