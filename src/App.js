import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
import {Provider}  from 'react-redux';
import * as Keyboards from './keyboard/';
import {Panel} from './panel/';
import store from './Store.js';

import './App.css';

class App extends Component {

  onclick = (e)=>{
    let target = e.target;
    [].forEach.call(target.parentElement.parentElement.querySelectorAll('.cmode'),node=>{
      node.classList.remove('active');
    });
    target.classList.add('active');
  }

  componentDidMount(){
    const activeLink = window.location.pathname;
    document.querySelectorAll('.cmode').forEach((node)=>{
      if(node.classList.contains(activeLink.replace(/^\//,''))){
        node.classList.add('active');
      }
    })
  }

  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header>简易计算器</header>
          <Panel/>
          <Router>
            <div>
              <div className="mode">
                <Link to={`${process.env.PUBLIC_URL}/normal`}><button className="normal cmode" onClick={this.onclick}>标准</button></Link>
                <span>|</span>
                <Link to={`${process.env.PUBLIC_URL}/science`}><button className="science cmode" onClick={this.onclick}>科学</button></Link>
              </div>
              <Switch>
                <Route path={`${process.env.PUBLIC_URL}/normal`}   component={Keyboards.Normal} />            
                <Redirect path={`${process.env.PUBLIC_URL}/`} exact={true} to={`${process.env.PUBLIC_URL}/normal`} />
                <Redirect path={`${process.env.PUBLIC_URL}/science`} exact={true} to={`${process.env.PUBLIC_URL}/normal`} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
