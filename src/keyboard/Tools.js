import * as actions from './actions.js';

export const handleClick = (node)=>{
  if(node.classList.contains('number')){

    let text= node.innerText;
    return actions.num(text);

  }else if(node.classList.contains('math-operator')){

    let operator = node.classList.value.replace(/math-operator/,'').replace(/^\s+|\s+$/g,'');
    return actions.math(operator);

  }else if(node.classList.contains('operator')){

    let operator = node.classList.value.replace(/operator/,'').replace(/^\s+|\s+$/g,'');
    return actions.func(operator);
    
  }
}

const toPostFixArr = (inFixArr) =>{
  let operatorArr = [];
  let postFixArr = [];
  let temp = '';



  return postFixArr;

}


const calPostFixArr = (postFixArr)=>{

}

export const calInFixExpression = (inFixArr)=>{
  let postFixArr = toPostFixArr();
  return  calPostFixArr(postFixArr);
}




