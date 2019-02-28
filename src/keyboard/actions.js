import * as actionTypes from './actionTypes.js';


export const math = (math_type)=>({
  type: actionTypes.CLICK_MATH_OPERATOR,
  math_type
})

export const num = (data)=> ({
  type: actionTypes.CLICK_NUM,
  data
})

export const func = (func_type)=> ({
  type: actionTypes.CLICK_FUNC_OPERATOR,
  func_type
})
