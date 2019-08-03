import React from 'react';
import { Route, Link, HashRouter } from "react-router-dom";
import { FunctionComponent } from "react";
import courses from 'courses';
import createWelcome from 'screens/Welcome/create';


export default createWelcome({
  courses,
});
