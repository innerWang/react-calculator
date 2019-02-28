import React from 'react';
import { connect } from 'react-redux';
import {normalKeyboard} from './constants.js';
import { handleClick }from '../Tools.js'
import './style.css';

class Normal extends React.Component {

  generateKeyboard = ()=>{
    let idx = 1;
    return normalKeyboard.map((item) => {
      return (
        <li key={idx++} className={item.type}>
          {item.value}
        </li>
      );
    })
  }

  render(){
    return (
      <div>
        <ul className="normalKeyLists" onClick={this.props.onclick}>
          {this.generateKeyboard()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onclick: (e)=>{
      let target = e.target;
      if(target.tagName.toLowerCase()==='li'){
        handleClick(target);
        //dispatch(handleClick(target));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Normal);