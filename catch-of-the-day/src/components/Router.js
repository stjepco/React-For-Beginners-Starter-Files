import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePiceker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePiceker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
