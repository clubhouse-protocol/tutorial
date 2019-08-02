import React, { FunctionComponent } from 'react';
import Quiz from 'components/Quiz';
import { createIdentity, loadIdentity } from 'clubhouse-protocol/build/babel';

const description = require('./description.md');

interface Props {
  onComplete: () => any;
}

const createContext = async () => ({
  createIdentity,
  loadIdentity,
});

const initialCode = `
module.exports = (async () => {
  const key = await createIdentity(/* identity params */);

  const identity = 'Bob\\'s identity'
  return identity;
})();
`.trim();

const solution = `
module.exports = (async () => {
  const key = await createIdentity({
    name: 'Bob Bobson',
    email: 'bob.bobson@example.com',
    passphrase: 'Bob1',
  });

  const identity = await loadIdentity(key, 'Bob1');
  return identity;
})();
`.trim();

const test = async (context: any, result: any) => {
  return !!result.fingerprint;
}

const QuizContainer: FunctionComponent<Props> = ({
  onComplete,
}) => (
  <Quiz
    test={test}
    description={description}
    initialCode={initialCode}
    createContext={createContext}
    onComplete={onComplete}
    solution={solution}
  />
);

export default QuizContainer;