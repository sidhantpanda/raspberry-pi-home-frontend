import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* when none of the above match, <NoMatch> will be rendered */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
