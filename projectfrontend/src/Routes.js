import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./auth/helper/privateroute";
import Home from "./core/home";
import Signin from "./user/signin";
import Signup from "./user/signup";
import UserDashboard from "./user/userdashboard";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
        {<PrivateRoutes path ="/user/dashboard" exact component={UserDashboard}/>}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
