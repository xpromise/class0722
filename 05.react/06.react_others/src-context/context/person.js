/*
  用来创建context
*/

import {
  createContext
} from 'react'

// createContext(默认值): 如果外面没有包裹Provider组件，就会使用默认值
const personContext = createContext({
  name: 'laofu',
  age: 40
})

// 暴露出去
export default personContext;