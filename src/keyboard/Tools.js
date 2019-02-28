const handleClick = (node)=>{
  let text= node.innerText;
  if(node.classList.contains('number')){
    console.log('number:'+text);
  }else if(node.classList.contains('math-operator')){
    let operator = node.classList.value.replace(/math-operator/,'').replace(/^\s+|\s+$/g,'');
    switch(operator){
      case 'add':{
        break;
      }
      case 'minus':{
        break;
      }
      case 'divide':{
        break;
      }
      case 'multiply':{
        break;
      }
      case 'dot':{
        break;
      }
      case 'equal':{
        break;
      }
      default:break;
    }

  }else if(node.classList.contains('operator')){

  }
}


export {handleClick};