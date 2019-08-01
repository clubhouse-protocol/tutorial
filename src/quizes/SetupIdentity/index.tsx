import React, { FunctionComponent } from 'react';
import Editor from 'components/CodeEditor';
import { createIdentity, loadIdentity, Identity } from 'clubhouse-protocol/build/babel';

interface Props {
  onComplete: () => any;
}

const createContext = async () => ({
  createIdentity,
});

const initialCode = `
module.exports = createIdentity({
  name: 'Your Name',
  email: 'Your Email',
});
`.trim();

const solution = `
module.exports = createIdentity({
  name: 'Bob',
  email: 'bob@example.com',
});
`.trim();

const test = async (context: any, result: any) => {
  const identity = await loadIdentity(result);
  return identity.fingerprint;
}

const Quiz: FunctionComponent<Props> = ({
  onComplete,
}) => (
  <Editor
    test={test}
    initialCode={initialCode}
    createContext={createContext}
    onComplete={onComplete}
    solution={solution}
  />
);

export default Quiz;