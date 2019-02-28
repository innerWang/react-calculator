import * as actionTypes from './actionTypes.js';

const reducer = (state,action)=>{
  if(!state) return {str:'',result:''}
  switch(action.type){
    case actionTypes.CLICK_ADD:{
      return 
    }
    default:return state;
  }
}


export default reducer;