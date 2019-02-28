import React from 'react';
import {connect} from 'react-redux';
import './style.css'

class Panel extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      e_right: '0px'
    }
  }

  componentDidMount(){
    this.node_str = document.querySelector('.expression');
    this.node_wrap = document.querySelector('.text-wrap');
    this.node_right =  document.querySelector('.arrow.right');
    this.node_left =  document.querySelector('.arrow.left');
  }

  componentWillUpdate(){
    if(this.node_str.offsetLeft > 0){
      if(this.node_left.classList.contains('active')){
        this.node_left.classList.remove('active');
      }
    }
    if(this.node_wrap.offsetWidth - this.node_str.offsetLeft > this.node_str.offsetWidth ){
      if(this.node_right.classList.contains('active')){
        this.node_right.classList.remove('active');
      }
    }
  }

  componentDidUpdate(){
    if(this.props.expression !== ''){
      //offsetWidth 包括边框，clientWidth不包括边框
      if(this.node_str.offsetWidth > this.node_wrap.offsetWidth){
        if(this.node_wrap.offsetWidth - this.node_str.offsetLeft +10 >this.node_str.offsetWidth ){
          if(!this.node_left.classList.contains('active')){
            this.node_left.classList.add('active');
          }
        }else{
          if(!this.node_right.classList.contains('active')){
            this.node_right.classList.add('active');
          }
        }
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.expression !== this.props.expression) ||
           (nextProps.result !== this.props.result) ||
           (nextState.e_right !== this.state.e_right);
  }

  clickLeft = () => {
    this.setState({
      e_right: (parseInt(this.state.e_right)- 10)+'px'
    })
  }

  clickRight = ()=> {
    this.setState({
      e_right: (parseInt(this.state.e_right)+ 10)+'px'
    })
  }

  render(){
    return (
      <div className="panel">
        <div className="container">
          <span className="left arrow" onClick={this.clickLeft}></span>
          <span className="right arrow" onClick={this.clickRight}></span> 
          <div className="text-wrap">   
            <div className="child expression" style={{right: `${this.state.e_right}`}}>{this.props.expression}</div>
          </div>
        </div>
        <div className="text-wrap"> 
          <div className="child inputValue">{this.props.result}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return ({
    expression: state.str.join(''),
    result: state.result
  })
}


export default connect(mapStateToProps)(Panel);
