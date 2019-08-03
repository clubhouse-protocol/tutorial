import React from 'react';
import { FunctionComponent } from "react";
import Course from './Course';
import {
  Wrapper,
  Title,
} from './elements';
import { Props } from './types';

const create = ({
  courses,
}: Props): FunctionComponent<any> => ({
}) => (
  <Wrapper>
    <Title>Courses</Title>
    {courses.map(course => <Course key={course.id} {...course} />)}
  </Wrapper>
);

export default create;