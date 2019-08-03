import React, { FunctionComponent } from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import Course from './Coure';
import Courses from "./Courses";

const Router: FunctionComponent = () => (
  <HashRouter>
    <Route exact path="/" component={Courses} />
    <Route path="/course/:id" component={Course} />
  </HashRouter>
);

export default Router;