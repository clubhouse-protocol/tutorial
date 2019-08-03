import React, { FunctionComponentElement } from 'react';
import Course from './Component';
import { InnerProps, OuterProps } from './types';

type CourseType = (options: InnerProps) => (props: OuterProps) => FunctionComponentElement<{}>;

const createCourse:CourseType = (options) => (props) => (
  <Course
    {...options}
    {...props}
  />
);

export default createCourse;