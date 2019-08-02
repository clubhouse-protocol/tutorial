import React, { useState } from 'react';
import styled from 'styled-components';
import Welcome from './Welcome';
import SetupIdentity from './SetupIdentity';
import SetupChannel from './SetupChannel';
import InviteAlice from './InviteAlice';
import Done from './Done';

const steps = [
  Welcome,
  SetupIdentity,
  SetupChannel,
  InviteAlice,
  Done,
];

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: #34495e;
  padding: 15px;
  display: flex;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Quiz = () => {
  const initalStep = localStorage.getItem('currentStep');
  const [current, setCurrent] = useState(initalStep 
    ? Math.min(parseInt(initalStep), steps.length - 1)
    : 0
  );

  const Step = steps[current];
  const back = current > 0 ? () => {
    setCurrent(current - 1);
    localStorage.setItem('currentStep', (current - 1).toString());
  } : undefined;

  return (
    <Wrapper>
      <Header>
        {back && <div onClick={back}>back</div>}
        <Spacer />
        <div>Step {current + 1} of {steps.length}</div>
      </Header>
      <Step
        onComplete={() => {
          if (current + 1 < steps.length) {
            setCurrent(current + 1);
            localStorage.setItem('currentStep', (current + 1).toString());
          } else {
            alert('done');
          }
        }}
      />
    </Wrapper>
  )
};

export default Quiz;