import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Normal,Science} from './keyboard/'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header><span className="title">计算器</span><span className="icon-close">x</span></header>
          <div className="mode">
            <Link to="/normal"><button className="normal cmode active">标准</button></Link>
            <span>|</span>
            <Link to="/science"><button className="science cmode">科学</button></Link>
          </div>
          <Route path="/normal" component={Normal} />            
          <Route path="/science" component={Science} />
        </div>
      </Router>
    );
  }
}

export default App;
