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


const prior = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
  "(": 20,
  ")": 20
};
const toPostFix = inFixArr => {
  let arr = inFixArr;
  let operatorArr = [];
  let postFixArr = [];
  let stackTopPrior = 0;
  arr.forEach(item => {
    if (!isNaN(item)) {
      postFixArr.push(item);
    } else if (item.match(/^[+\-*/]$/)) {
      while (prior[item] <= stackTopPrior) {
        if (operatorArr[operatorArr.length - 1] === "(") break;

        postFixArr.push(operatorArr.pop());
        if (operatorArr.length > 0) {
          stackTopPrior = prior[operatorArr[operatorArr.length - 1]];
        } else {
          stackTopPrior = 0;
        }
      }

      operatorArr.push(item);
      stackTopPrior = prior[item];
    } else if (item === "(") {
      operatorArr.push(item);
      stackTopPrior = prior[item];
    } else if (item === ")") {
      while (
        operatorArr[operatorArr.length - 1] !== "(" &&
        operatorArr.length > 0
      ) {
        postFixArr.push(operatorArr.pop());
      }
      if (operatorArr.length === 0) {
        stackTopPrior = 0;
        console.log("未找到匹配的左括号");
        return "未找到匹配的左括号";
      } else {
        operatorArr.pop();
        stackTopPrior = prior[operatorArr[operatorArr.length - 1]];
      }
    }
  });
  //判断读完中缀表达式后，操作符数组里面是否还有内容
  while (operatorArr.length > 0) {
    if (operatorArr[operatorArr.length - 1] === "(") {
      console.log(operatorArr);
      return "剩余左括号";
    } else {
      postFixArr.push(operatorArr.pop());
    }
  }

  console.log(postFixArr);
  return postFixArr;
};

const calPostFix = postFix => {
  let result = [];
  let temp1 = 0;
  let temp2 = 0;
  if (Array.isArray(postFix)) {
    //是数组
    postFix.forEach(item => {
      if (!isNaN(item)) {
        result.push(parseFloat(item));
      } else if (item.match(/^[+\-*/]$/)) {
        if (result.length < 2) return "没有足够的操作数";
        temp2 = result.pop();
        temp1 = result.pop();
        switch (item) {
          case "+":
            result.push(temp1 + temp2);
            break;
          case "-":
            result.push(temp1 - temp2);
            break;
          case "*":
            result.push(temp1 * temp2);
            break;
          case "/":
            result.push(temp1 / temp2);
            break;
          default:
            break;
        }
      }
    });
    return sciNotation(result[0]);
  } else {
    //不是数组
    return postFix;
  }
};

//将一个正数小数的小数位数进行截取
const setWidth = (digit,n=5)=>{
  return Math.round(digit * Math.pow(10,n))/Math.pow(10,n);
} 

//对数据进行科学转换
export const sciNotation = (digit) => {
  let ret = 0;
  // > 10^5 记为 1.234567e5
  if(Math.abs(digit) > Math.pow(10,5)){
    let power = Math.floor(Math.log(Math.abs(digit))/Math.log(10));
    let base = Math.abs(digit)/Math.pow(10,power);
    base = setWidth(base,7);
    ret = digit>0 ? `${base}e${power}`:`-${base}e${power}`;
  }else if(Math.abs(digit) < 1){
    if((Math.abs(digit)+'').length > 10){
      let base = setWidth(Math.abs(digit),8);
      ret = digit>0 ? `${base}`:`-${base}`;
    }else{
      ret = digit +'';
    } 
  }else{
    //9999.9999999
    if((Math.abs(digit)+'').length > 12){
     let base = setWidth(Math.abs(digit),5);
     ret = digit>0 ? `${base}`:`-${base}`;
    }else{
      ret = digit+'';
    }
  }


  return ret;
}


export const calInFixExpression = (inFixArr=[])=>{
  if(inFixArr.length ===0) return '';
  if(inFixArr.length ===1) return inFixArr[0];
  let postFixArr = toPostFix(inFixArr);
  return  calPostFix(postFixArr);
}


