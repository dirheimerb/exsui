**@exsui/ui** • [Readme](../../README.md) \| [API](../../globals.md)

***

[@exsui/ui](../../README.md) / [\<internal\>](../README.md) / ComponentLifecycle

# Interface: ComponentLifecycle\<P, S, SS\>

## Extends

- [`NewLifecycle`](NewLifecycle-1.md)\<`P`, `S`, `SS`\>.[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md)\<`P`, `S`\>

## Type parameters

• **P**

• **S**

• **SS** = `any`

## Methods

### ~~UNSAFE\_componentWillMount()?~~

> **`optional`** **UNSAFE\_componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](../classes/Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`UNSAFE_componentWillMount`](DeprecatedLifecycle-1.md#unsafe_componentwillmount)

#### Deprecated

16.3, use [componentDidMount](ComponentLifecycle-1.md#componentdidmount) or the constructor instead

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

Calling [Component.setState](../classes/Component.md#setstate) generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`UNSAFE_componentWillReceiveProps`](DeprecatedLifecycle-1.md#unsafe_componentwillreceiveprops)

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

Note: You cannot call [Component.setState](../classes/Component.md#setstate) here.

This method will not stop working in React 17.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`UNSAFE_componentWillUpdate`](DeprecatedLifecycle-1.md#unsafe_componentwillupdate)

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

• **errorInfo**: [`ErrorInfo`](ErrorInfo-1.md)

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1341

***

### componentDidMount()?

> **`optional`** **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1320

***

### componentDidUpdate()?

> **`optional`** **componentDidUpdate**(`prevProps`, `prevState`, `snapshot`?): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate) is present and returns non-null.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **snapshot?**: `SS`

#### Returns

`void`

#### Inherited from

[`NewLifecycle`](NewLifecycle-1.md).[`componentDidUpdate`](NewLifecycle-1.md#componentdidupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1383

***

### ~~componentWillMount()?~~

> **`optional`** **componentWillMount**(): `void`

Called immediately before mounting occurs, and before [Component.render](../classes/Component.md#render).
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`componentWillMount`](DeprecatedLifecycle-1.md#componentwillmount)

#### Deprecated

16.3, use [componentDidMount](ComponentLifecycle-1.md#componentdidmount) or the constructor instead; will stop working in React 17

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

Calling [Component.setState](../classes/Component.md#setstate) generally does not trigger this method.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`componentWillReceiveProps`](DeprecatedLifecycle-1.md#componentwillreceiveprops)

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

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1336

***

### ~~componentWillUpdate()?~~

> **`optional`** **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call [Component.setState](../classes/Component.md#setstate) here.

Note: the presence of [getSnapshotBeforeUpdate](NewLifecycle-1.md#getsnapshotbeforeupdate)
or StaticLifecycle.getDerivedStateFromProps getDerivedStateFromProps prevents
this from being invoked.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`void`

#### Inherited from

[`DeprecatedLifecycle`](DeprecatedLifecycle-1.md).[`componentWillUpdate`](DeprecatedLifecycle-1.md#componentwillupdate)

#### Deprecated

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

#### See

 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update)
 - [https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path](https://legacy.reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1462

***

### getSnapshotBeforeUpdate()?

> **`optional`** **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `null` \| `SS`

Runs before React applies the result of [render](../classes/Component.md#render) to the document, and
returns an object to be given to [componentDidUpdate](NewLifecycle-1.md#componentdidupdate). Useful for saving
things such as scroll position before [render](../classes/Component.md#render) causes changes to it.

Note: the presence of this method prevents any of the deprecated
lifecycle events from running.

#### Parameters

• **prevProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **prevState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

#### Returns

`null` \| `SS`

#### Inherited from

[`NewLifecycle`](NewLifecycle-1.md).[`getSnapshotBeforeUpdate`](NewLifecycle-1.md#getsnapshotbeforeupdate)

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1377

***

### shouldComponentUpdate()?

> **`optional`** **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, [Component.render](../classes/Component.md#render), `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

• **nextProps**: [`Readonly`](../type-aliases/Readonly.md)\<`P`\>

• **nextState**: [`Readonly`](../type-aliases/Readonly.md)\<`S`\>

• **nextContext**: `any`

#### Returns

`boolean`

#### Source

node\_modules/.pnpm/@types+react@18.2.66/node\_modules/@types/react/index.d.ts:1331
