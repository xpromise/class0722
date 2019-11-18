/*
  redux向外暴露是一个对象
    createStore(reducer, middleware)  创建store对象
    combineReducers({ reducer1, reducer2, ... })  整合多个reducer函数成一个
    applyMiddleware()
*/

export function createStore(reducer) {

  // 初始化一个存储状态的数据容器
  let currentState = undefined;
  // 初始化一个subscribe方法的回调函数容器
  const listenerCallbacks = [];

  /**
   * 获取store里面状态数据
   * 返回值就是状态数据
   */
  function getState() {
    return currentState;
  }

  /**
   * 触发更新（调用reducer函数） 
   * @param {*} action 
   */
  function dispatch(action) {
    // 调用reducer函数得到新状态
    // const newState = reducer(currentState, action);
    // 更新store对象管理的状态数据
    // currentState = newState;
    currentState = reducer(currentState, action);
    // 触发页面更新（本身redux做不到，需要调用listener）
    listenerCallbacks.forEach(listener => listener());
  }

  function subscribe(listener) {
    listenerCallbacks.push(listener);
  }

  // 一上来要状态初始化（一上来默认调用reducer函数做状态的初始化）
  currentState = reducer(currentState, {
    type: '@@INIT/redux-' + Math.random().toString().substring(2, 7)
  })

  /* 
    返回值是store对象
      store.getState() 获取store里面状态数据
      store.dispatch(action) 触发更新（调用reducer函数） 
      store.subscribe(listener) 一旦store管理的状态数据发生变化，就会触发listener（函数内部触发更新）
  */
  return {
    getState,
    dispatch,
    subscribe
  }
}

// 整合多个reducer函数成一个
export function combineReducers(reducersObj) {
  /*
    reducersObj --> { number: function () {}, user: function () {} }
  */
  // 返回一个整合后reducer函数
  return function (prevState = {}, action) {
    // 返回是newState： { number: 0, user: {} }

    // 提取所有属性名（reducer的函数名称）
    /* const keys = Object.keys(reducersObj);
    const newState = {};
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      newState[key] = reducersObj[key](prevState[key], action);
    }
    return newState; */

    return Object.keys(reducersObj).reduce((prev, key) => {
      prev[key] = reducersObj[key](prevState[key], action);
      return prev;
    }, {})

    /* return {
      [key]: reducersObj[key](prevState[key], action),
      user: reducersObj.user(prevState.user, action)
    } */
  }
}