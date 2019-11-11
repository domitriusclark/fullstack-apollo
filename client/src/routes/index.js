import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../components/Main";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={Main}
          />
        </Switch>
      </Router>
    </Fragment>
  )
};

export default Routes;