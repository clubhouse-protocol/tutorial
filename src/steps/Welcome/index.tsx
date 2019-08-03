import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const description = require('./description.md');

interface Props {
  onComplete: () => any;
}

const Wrapper = styled.div`
  margin: auto;
  max-width: 700px;
  padding: 0 50px;

  h1 code, p code {
    color: #fabd2f;
  }

  a {
    color: #9b59b6;
  }
`;

const ButtonWrapper = styled.div`
  text-align: right;
`;

const Welcome: FunctionComponent<Props> = ({
  onComplete,
}) => (
  <Wrapper>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <ButtonWrapper>
      <button onClick={onComplete}>Continue</button>
    </ButtonWrapper>
  </Wrapper>
);

export default Welcome;