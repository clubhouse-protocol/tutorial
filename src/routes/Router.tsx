import React, { FunctionComponent } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import Course from './Course';
import Courses from "./Welcome";

const Router: FunctionComponent = () => (
  <HashRouter>
    <Route exact path="/" component={Courses} />
    <Route path="/course/:id" component={Course} />
  </HashRouter>
);

export default Router;