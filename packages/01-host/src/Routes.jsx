import { Route, Switch } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import React from "react";

const Routes = () => (
  <Switch>
    <Route path="/page1">
      <Page1 />
    </Route>
    <Route path="/page2">
      <Page2 />
    </Route>
    <Route path="/page3">
      <Page3 />
    </Route>
  </Switch>
);

export default Routes;
