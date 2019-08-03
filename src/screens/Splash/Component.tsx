import React, { FunctionComponent } from 'react';
import { Props } from './types';
import {
  ButtonWrapper,
  Wrapper,
} from './elements';

const Splash: FunctionComponent<Props> = ({
  description,
  onComplete,
  next,
}) => (
  <Wrapper>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <ButtonWrapper>
      {next !== false && (
        <button onClick={onComplete}>Continue</button>
      )}
    </ButtonWrapper>
  </Wrapper>
);

export default Splash;