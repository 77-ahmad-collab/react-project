import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Birthday from "../Birthday/Birthday";
import Tour from "../Tours/Home";
const Navbar = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact path="/birthday">
          <Birthday />
        </Route>
        <Route exact path="/tour">
          <Tour />
        </Route>
        <Redirect to="/birthday" />
      </Switch>
    </div>
  );
};

export default Navbar;
