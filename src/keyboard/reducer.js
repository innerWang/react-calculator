import * as actionTypes from './actionTypes.js';
import {calInFixExpression} from './Tools.js';

const reducer = (state,action)=>{
  if(!state) return {str:[],result:'',lastOperatorIsEqual:false};
  switch(action.type){
    case actionTypes.CLICK_NUM:{
      if((action.data === '.') && (state.result.indexOf('.') !== -1)) return state;
      if(!state.lastOperatorIsEqual){
        return {
          ...state,
          result : state.result === '' && action.data === '.'?'0.':(state.result+action.data),
        };
      }else{
        return {
          ...state,
          result: action.data==='.'?'0.':action.data,
          lastOperatorIsEqual:false
        }
      }
      
    }
    case  actionTypes.CLICK_MATH_OPERATOR:{
      let arr = state.str;
      if((arr.length === 0)&&(state.result ==='')){
        arr.push('0')
      }else if(state.result === ''){
        arr.pop();
      }else{
        arr.push(parseFloat(state.result)+'')
      }
      switch(action.math_type){
        case 'add':{
          arr.push('+');
          return {
            ...state,
            str: arr ,
            result:'',
            lastOperatorIsEqual:false
          };
        }
        case 'minus':{
          arr.push('-');
          return {
            ...state,
            str: arr ,
            result:'',
            lastOperatorIsEqual:false
          };
        }
        case 'divide':{
          arr.push('/');
          return {
            ...state,
            str: arr ,
            result:'',
            lastOperatorIsEqual:false
          };
        }
        case 'multiply':{
          arr.push('*');
          return {
            ...state,
            str: arr ,
            result:'',
            lastOperatorIsEqual:false
          };
        }
        case 'equal':{
          let temp = calInFixExpression(state.str)
          return {
            ...state,
            str:[],
            result:temp,
            lastOperatorIsEqual:true
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
            str:[],
            result:'',
            lastOperatorIsEqual:false
          };
        }
        case 'percent':{
          if(state.result === '') return state;
          return {
            ...state,
            result: parseFloat(state.result) * 0.01+'',
            lastOperatorIsEqual:false
          };
        }
        case 'delete':{
          if(state.result === '') return state;
          let temp = state.result.split('');
          temp.pop();
          return {
            ...state,
            result:temp.join(''),
            lastOperatorIsEqual:false
          }
        }
        case 'toggle':{
          if(state.result === '') return state;
          let temp = (0-parseFloat(state.result))+'';
          return {
            ...state,
            result:temp,
            lastOperatorIsEqual:false
          };
        }
        default:return state;
      }
    }
    default:return state;
  }
}


export default reducer;