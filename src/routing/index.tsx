import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "@pages/Auth";
import Register from "@pages/Register";
import Index from "@pages/Index";
import * as R from "./routes";

const Routes: FC = () => (
  <BrowserRouter>
    <Route exact path={R.index} component={Index} />
    <Route exact path={R.auth} component={Auth} />
    <Route exact path={R.register} component={Register} />
  </BrowserRouter>
);

export default Routes;
