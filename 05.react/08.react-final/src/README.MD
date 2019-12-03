# React Hooks

## 1、简介

- 是什么？
  - Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
- 什么是钩子（Hook）
  - 本质就是函数，能让你使用 React 组件的状态和生命周期函数...
- 作用
  - 干死 class，让 function 一统江湖
  - 让代码更加可复用，不用在定义繁杂的 HOC
  - 彻底消除 this (妈妈再也不用担心我 this 指向的问题了)
- 注意
  - 只能在顶层调用钩子。不要在循环，控制流和嵌套的函数中调用钩子。
  - 只能从 React 的函数式组件中调用钩子。不要在常规的 JavaScript 函数中调用钩子。
    （此外，你也可以在你的自定义钩子中调用钩子。）
  - https://react.docschina.org/docs/hooks-rules.html

## 2、api 介绍

1. 基础 hook

- useState 用来定义和更新 state
- useEffect 用来定义 生命周期函数
- useContext 用来使用 context

2. 额外 hook

- useReducer 相当于 redux 用法
- useMemo 用来缓存组件
- useCallback 用来缓存函数
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## 3、useState

1. 作用

- 用来定义和更新 state

2. 使用

- const [ state, setState ] = React.useState(initValue);
  - initValue 状态初始化值
  - state 状态数据
  - setState(newState) 更新状态数据方法

## 4、useEffect

1. 作用

- 副作用函数（发请求获取数据、订阅事件、修改 DOM 等）- 相当于生命周期函数的用法： componentDidMount \ componentDidUpdate \ shouldComponentUpdate

2. 使用

```
// useEffect第一个参数：相当于componentDidMount 和 componentDidUpdate
// 也就是说初始化渲染完毕和更新完毕触发的函数
useEffect(() => {
  // 第一次初始化渲染 只会触发 111
  console.log("useEffect触发了111~");

  return () => {
    // 第二次更新时 会先触发 222 再触发 111
    // 在这里清除上一次的请求、解绑事件等
    console.log("useEffect触发了222~");
  };

  // useEffect第二个参数：相当于shouldComponentUpdate
  // 如果num值没变，页面就不会重新渲染
}, [num]);
```

## 5、useContext

1. 作用

- 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>
- 用来获取上层组件传递过来的 context

2. 使用

- const value = useContext(Context);
  - Context 上层组件的 Context
  - value Context 管理的状态数据

## 6、useReducer

1. 作用

- 一种类似于 redux 状态管理方案，不需要借助 redux，以 redux 类似的方案集中性管理状态数据

2. 使用

- const [state, dispatch] = useReducer(reducer, initValue, init);
  - state 管理的状态数据
  - dispatch 更新状态数据的方法
  - reducer reducer 函数
  - initValue reducer 管理的状态数据初始化值
  - init 调用 init 函数，返回值作为 reducer 管理的状态数据初始化值
    - 同时设置 initValue / init, 以 init 返回值为准

## 7、useMemo

1. 作用

- 缓存函数执行结果

2. 使用

- useMemo(() => fn(x, y), [x, y]);
  - 一旦 x, y 发生变化就会重新计算结果返回，没有变化就不会重新计算结果

## 8、useCallback

1. 作用

- 缓存函数

2. 使用

- useCallback(() => fn(x, y), [x, y]);
  - 一旦 x, y 发生变化就会返回新函数，没有变化就使用缓存之前的函数

## 9、useRef

1. 作用

- ref 用法，在纯函数组件获取 DOM 元素
- 前后更新获取的 ref 是同一个，而不像 createRef 发生变化

2. 使用

- const ref = useRef(defaultValue);
  - defaultValue 当没有设置 ref 时生效

## 10、useImperativeHandle

1. 作用

- 让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛
  - 正常 ref 只能获取到一个 DOM 元素，使用这个可以获取 N 个 DOM 元素和一些方法
- 一般与 forwardRef 一起使用

2. 使用

```
React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const btnRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      // 这里指定向外暴露的内容
      return {
        inputRef,
        btnRef
      };
    },
    []
  );

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={btnRef}>按钮</button>
    </div>
  );
});
```

## 11、useLayoutEffect

1. 作用

- 在 layout（布局/重排）之后，在 paint（重绘）之前触发

2. 使用

- 与 useEffect 类似

## 12、useDebugValue

1. 作用

- 在 react-devtool-extension 中显示信息

2. 使用

- useDebugValue("xxx");
