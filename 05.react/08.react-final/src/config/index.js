import State from "../components/state";
import useState from "../components/use-state";
import useEffect from "../components/use-effect";
import useContext from "../components/use-context";
import useReducer from "../components/use-reducer";
import useCallback from "../components/use-callback";
import useMemo from "../components/use-memo";
import useRef from "../components/use-ref";
import useImperativeHandle from "../components/use-imperative-handle";
import useLayoutEffect from "../components/use-layout-effect";
import useDebugValue from "../components/use-debug-value";

export default [{
    title: 'state',
    path: '/state',
    component: State
  },
  {
    title: 'useState',
    path: '/useState',
    component: useState
  },
  {
    title: 'useEffect',
    path: '/useEffect',
    component: useEffect
  },
  {
    title: 'useContext',
    path: '/useContext',
    component: useContext
  },
  {
    title: 'useReducer',
    path: '/useReducer',
    component: useReducer
  },
  {
    title: 'useCallback',
    path: '/useCallback',
    component: useCallback
  },
  {
    title: 'useMemo',
    path: '/useMemo',
    component: useMemo
  },
  {
    title: 'useRef',
    path: '/useRef',
    component: useRef
  },
  {
    title: 'useImperativeHandle',
    path: '/useImperativeHandle',
    component: useImperativeHandle
  },
  {
    title: 'useLayoutEffect',
    path: '/useLayoutEffect',
    component: useLayoutEffect
  },
  {
    title: 'useDebugValue',
    path: '/useDebugValue',
    component: useDebugValue
  }
]