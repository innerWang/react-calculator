(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(23),c=a.n(s),l=a(9),i=a(10),o=a(13),u=a(11),p=a(14),m=a(46),h=a(44),d=a(48),f=a(47),v=a(45),y=a(12),b=[{value:"CE",type:"operator clear"},{value:"%",type:"operator percent"},{value:"DEL",type:"operator delete"},{value:"\xf7",type:"math-operator divide"},{value:"7",type:"number"},{value:"8",type:"number"},{value:"9",type:"number"},{value:"\xd7",type:"math-operator multiply"},{value:"4",type:"number"},{value:"5",type:"number"},{value:"6",type:"number"},{value:"-",type:"math-operator minus"},{value:"1",type:"number"},{value:"2",type:"number"},{value:"3",type:"number"},{value:"+",type:"math-operator add"},{value:"\xb1",type:"operator toggle"},{value:"0",type:"number"},{value:".",type:"number dot"},{value:"=",type:"math-operator equal"}],E=(a(34),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).generateKeyboard=function(){var e=1;return b.map(function(t){return n.a.createElement("li",{key:e++,className:t.type},t.value)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("ul",{className:"normalKeyLists",onClick:this.props.onclick},this.generateKeyboard()))}}]),t}(n.a.Component)),O=Object(y.b)(null,function(e){return{onclick:function(t){var a=t.target;"li"===a.tagName.toLowerCase()&&e(function(e){if(e.classList.contains("number")){var t=e.innerText;return{type:"CLICK/NUM",data:t}}if(e.classList.contains("math-operator")){var a=e.classList.value.replace(/math-operator/,"").replace(/^\s+|\s+$/g,"");return{type:"CLICK/MATH-OPERATOR",math_type:a}}if(e.classList.contains("operator")){var r=e.classList.value.replace(/operator/,"").replace(/^\s+|\s+$/g,"");return{type:"CLICK/FUNC-OPERATOR",func_type:r}}}(a))}}})(E),_=a(6),g=function(e,t){if(!e)return{str:[],result:""};switch(t.type){case"CLICK/NUM":return Object(_.a)({},e,{result:e.result+t.data});case"CLICK/MATH-OPERATOR":var a=e.str;switch(a.push(e.result),t.math_type){case"add":return a.push("+"),Object(_.a)({},e,{str:a,result:""});case"minus":return a.push("-"),Object(_.a)({},e,{str:a,result:""});case"divide":return a.push("/"),Object(_.a)({},e,{str:a,result:""});case"multiply":return a.push("*"),Object(_.a)({},e,{str:a,result:""});case"equal":return Object(_.a)({},e,{str:"",result:"0"});default:return e}case"CLICK/FUNC-OPERATOR":switch(t.func_type){case"clear":return Object(_.a)({},e,{str:"",result:""});case"percent":if(""===e.result)return e;var r=e.str;return r.push(.01*parseFloat(e.result)),Object(_.a)({},e,{str:r,result:""});case"delete":if(""===e.result)return e;var n=e.result.split("");return n.pop(),Object(_.a)({},e,{result:n.join("")});case"toggle":if(""===e.result)return e;var s=0-parseFloat(e.result)+"";return Object(_.a)({},e,{result:s});default:return e}default:return e}},L=(a(35),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).clickLeft=function(){a.setState({e_right:parseInt(a.state.e_right)-10+"px"})},a.clickRight=function(){a.setState({e_right:parseInt(a.state.e_right)+10+"px"})},a.state={e_right:"0px"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.node_str=document.querySelector(".expression"),this.node_wrap=document.querySelector(".text-wrap"),this.node_right=document.querySelector(".arrow.right"),this.node_left=document.querySelector(".arrow.left")}},{key:"componentWillUpdate",value:function(){this.node_str.offsetLeft>0&&this.node_left.classList.contains("active")&&this.node_left.classList.remove("active"),this.node_wrap.offsetWidth-this.node_str.offsetLeft>this.node_str.offsetWidth&&this.node_right.classList.contains("active")&&this.node_right.classList.remove("active")}},{key:"componentDidUpdate",value:function(){""!==this.props.expression&&this.node_str.offsetWidth>this.node_wrap.offsetWidth&&(this.node_wrap.offsetWidth-this.node_str.offsetLeft+10>this.node_str.offsetWidth?this.node_left.classList.contains("active")||this.node_left.classList.add("active"):this.node_right.classList.contains("active")||this.node_right.classList.add("active"))}},{key:"shouldComponentUpdate",value:function(e,t){return e.expression!==this.props.expression||e.result!==this.props.result||t.e_right!==this.state.e_right}},{key:"render",value:function(){return n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"left arrow",onClick:this.clickLeft}),n.a.createElement("span",{className:"right arrow",onClick:this.clickRight}),n.a.createElement("div",{className:"text-wrap"},n.a.createElement("div",{className:"child expression",style:{right:"".concat(this.state.e_right)}},this.props.expression))),n.a.createElement("div",{className:"text-wrap"},n.a.createElement("div",{className:"child inputValue"},this.props.result)))}}]),t}(n.a.Component)),j=Object(y.b)(function(e){return{expression:e.str.join(""),result:e.result}})(L),k=a(15),w=Object(k.b)(g),C=(a(36),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).onclick=function(e){var t=e.target;[].forEach.call(t.parentElement.parentElement.querySelectorAll(".cmode"),function(e){e.classList.remove("active")}),t.classList.add("active")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.pathname;document.querySelectorAll(".cmode").forEach(function(t){t.classList.contains(e.replace(/^\//,""))&&t.classList.add("active")})}},{key:"render",value:function(){return n.a.createElement(y.a,{store:w},n.a.createElement("div",{className:"App"},n.a.createElement("header",null,"\u7b80\u6613\u8ba1\u7b97\u5668"),n.a.createElement(j,null),n.a.createElement(m.a,null,n.a.createElement("div",null,n.a.createElement("div",{className:"mode"},n.a.createElement(h.a,{to:"/normal"},n.a.createElement("button",{className:"normal cmode",onClick:this.onclick},"\u6807\u51c6")),n.a.createElement("span",null,"|"),n.a.createElement(h.a,{to:"/science"},n.a.createElement("button",{className:"science cmode",onClick:this.onclick},"\u79d1\u5b66"))),n.a.createElement(d.a,null,n.a.createElement(f.a,{path:"/normal",component:O}),n.a.createElement(v.a,{path:"/",exact:!0,to:"/normal"}),n.a.createElement(v.a,{path:"/science",exact:!0,to:"/normal"}))))))}}]),t}(r.Component));c.a.render(n.a.createElement(C,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.43488924.chunk.js.map