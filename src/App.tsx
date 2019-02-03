import React, { Component, FunctionComponent } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Redirect, Route, RouteComponentProps, RouteProps, Switch } from "react-router-dom"
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AuthUser from './auth';

// const PrivateRoute = ({ component, token, ...rest }: any) => {
//   const routeComponent = (props: any) => (
//     token
//       ? React.createElement(component, props)
//       : <Redirect to={{ pathname: '/login' }} />
//   );
//   return <Route {...rest} render={routeComponent} />;
// };

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          {/* when none of the above match, <NoMatch> will be rendered */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
