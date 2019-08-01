import React, { useState } from 'react';

import SetupIdentity from './SetupIdentity';
import InviteAlice from './InviteAlice';

const steps = [
  SetupIdentity,
  InviteAlice,
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);

  const Step = steps[current];

  return (
    <div>
      Quiz {current + 1} out of {steps.length}
      <Step
        onComplete={() => {
          if (current + 1 < steps.length) {
            setCurrent(current + 1);
          } else {
            alert('done');
          }
        }}
      />
    </div>
  )
};

export default Quiz;