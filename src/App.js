import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,Redirect,Switch } from "react-router-dom";
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
    const activeLink = window.location.hash;
    console.log(activeLink)
    document.querySelectorAll('.cmode').forEach((node)=>{
      if(node.classList.contains(activeLink.replace(/^#\//,''))){
        node.classList.add('active');
      }
    })
    console.log(process.env)
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
                <Link to={`/normal`}><button className="normal cmode" onClick={this.onclick}>标准</button></Link>
                <span>|</span>
                <Link to={`/science`}><button className="science cmode" onClick={this.onclick}>科学</button></Link>
              </div>
              <Switch>
                <Route path={`/normal`}   component={Keyboards.Normal} />            
                <Redirect path={`/`} exact={true} to={`/normal`} />
                <Redirect path={`/science`} exact={true} to={`/normal`} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
