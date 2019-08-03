import React, { FunctionComponent } from "react";
import courses from "courses";
import { match } from 'react-router-dom';

interface Params {
  id: string;
}

interface Props {
  match: match<Params>;
};

const CourseRoute: FunctionComponent<Props> = ({
  match,
}) => {
  const course = courses.find(course => course.id === match.params.id);
  if (!course) {
    return null;
  }
  const Screen = course.screen;

  return (
    <Screen
      id={course.id}
      name={course.name}
    />
  );
}

export default CourseRoute;