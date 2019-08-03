import React from 'react';
import { Route, Link, HashRouter } from "react-router-dom";
import { FunctionComponent } from "react";

const Courses: FunctionComponent = () => (
  <div>
    <Link to="/course/getting-started">Getting started</Link>
  </div>
);

export default Courses;