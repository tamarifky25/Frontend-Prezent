import { Switch, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {publicRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                component={route.component}
                key={idx}
                isAuthProtected={false}
              />
            ))}

            {authProtectedRoutes.map((route, idx) => (
              <AppRoute
                path={route.path}
                component={route.component}
                key={idx}
                isAuthProtected={true}
              />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
