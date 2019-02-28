import * as actionTypes from './actionTypes.js';

const reducer = (state,action)=>{
  if(!state) return {str:[],result:''};
  switch(action.type){
    case actionTypes.CLICK_NUM:{
      return {
        ...state,
        result : state.result + action.data
      };
    }
    case  actionTypes.CLICK_MATH_OPERATOR:{
      let arr = state.str;
      arr.push(state.result)
      switch(action.math_type){
        case 'add':{
          arr.push('+');
          return {
            ...state,
            str: arr ,
            result:''
          };
        }
        case 'minus':{
          arr.push('-');
          return {
            ...state,
            str: arr ,
            result:''
          };
        }
        case 'divide':{
          arr.push('/');
          return {
            ...state,
            str: arr ,
            result:''
          };
        }
        case 'multiply':{
          arr.push('*');
          return {
            ...state,
            str: arr ,
            result:''
          };
        }
        case 'equal':{
          let temp = '0'
          // 将 str 转为 后缀表达式
          // 计算后缀表达式的值
          // 赋值temp
          return {
            ...state,
            str:'',
            result:temp
          }; 
        }
        default:return state;
      }
    }
    case actionTypes.CLICK_FUNC_OPERATOR:{
      switch(action.func_type){
        case 'clear':{
          return {
            ...state,
            str:'',
            result:''
          };
        }
        case 'percent':{
          if(state.result === '') return state;
          let arr = state.str;
          arr.push(parseFloat(state.result) * 0.01);
          return {
            ...state,
            str: arr,
            result: ''
          };
        }
        case 'delete':{
          if(state.result === '') return state;
          let temp = state.result.split('');
          temp.pop();
          return {
            ...state,
            result:temp.join('')
          }
        }
        case 'toggle':{
          if(state.result === '') return state;
          let temp = (0-parseFloat(state.result))+'';
          return {
            ...state,
            result:temp
          };
        }
        default:return state;
      }
    }
    default:return state;
  }
}


export default reducer;