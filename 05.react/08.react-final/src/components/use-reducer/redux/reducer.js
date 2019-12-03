import {
  INCREMENT,
  DECREMENT
} from './action-types';

// 之前我们在prevState = initValue
// redux推荐我们在组件内去初始化 initValue
function number(prevState, action) {
  switch (action.type) {
    case INCREMENT:
      return prevState + 1;
    case DECREMENT:
      return prevState - 1;
    default:
      return prevState;
  }
}

export default number;