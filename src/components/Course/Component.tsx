import React, { FunctionComponent } from 'react';
import { Props } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Header,
  Spacer,
  Wrapper,
  Dot,
  DotWrapper,
  IconWrapper,
  LinkIconWrapper,
} from './elements';
import {
  useSteps,
} from './helpers';
import { range } from 'helpers/general';

const Quiz: FunctionComponent<Props> = ({
  id,
  steps,
  name,
}) => {
  const {
    current,
    complete,
    back,
    withStatus,
    hasPrevious,
  } = useSteps(id, steps);

  const Screen = current.screen;

  return (
    <Wrapper>
      <Header>
        <LinkIconWrapper to="/">
          <FontAwesomeIcon icon="home" />
        </LinkIconWrapper>
        {name}
        <Spacer />
        {hasPrevious && (
          <IconWrapper onClick={back}>
           <FontAwesomeIcon icon="arrow-left" />
          </IconWrapper>
        )}
        <DotWrapper>
          {range(steps.length).map((index) => (
            <Dot
              key={index}
              current={index === current.index}
              completed={withStatus[index].completed}
            />
          ))}
        </DotWrapper>
      </Header>
      <Screen
        onComplete={complete}
      />
    </Wrapper>
  )
};

export default Quiz;