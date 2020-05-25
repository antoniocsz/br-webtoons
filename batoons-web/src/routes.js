import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Notice from "./pages/notice";
import NoticeNew from "./pages/new";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/notices/:id" component={Notice} />
      <Route exact spath="/new" component={NoticeNew} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
