import React from 'react';
import {connect} from 'react-redux';
import './style.css'

class Panel extends React.Component{

  render(){
    return (
      <div className="panel">
        <div className="wrap">  
          <div className="expression">1+2+########1234567gfvdsthtd####inhgfcvbgff####jgg##########</div>
        </div>
        <div className="inputValue">3</div>
      </div>
    );
  }
}

const mapStateToProps = ()=>{
  return ({
    
  })
}


export default connect(mapStateToProps)(Panel);
