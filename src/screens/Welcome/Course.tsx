import React, { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { CourseDefinition } from 'courses';
import {
  getRemaining,
} from 'screens/Course/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled(Link)`
  color: inherit;
  text-decoration: none;
  background: #34495e;
  display: block;
  padding: 20px 30px;
  border-radius: 7px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1;
`

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  margin-right: 15px;
`

const Icon = styled.div<{
  completed: boolean;
}>`
  font-size: 18px;
  margin-right: 15px;
  color: #fff;
  background: ${props =>  props.completed ? '#27ae60' : '#fff'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Course: FunctionComponent<CourseDefinition> = ({
  id,
  name,
  steps,
}) => {
  const quizCount = steps.length - 1;
  const remaning = getRemaining(id, steps) - 1;
  const completedCount = quizCount - remaning;
  const completed = remaning === 0;
  return (
    <Wrapper to={`/course/${id}`}>
      <Icon
        completed={completed}
      >
        {completed && <FontAwesomeIcon icon="check" />}
      </Icon>
      <Title>{name}</Title>
      <Spacer />
      <div>({completedCount}/{quizCount})</div>
    </Wrapper>
  )
};

export default Course;