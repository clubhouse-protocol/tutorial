import React, { FunctionComponent } from 'react';
import Quiz from 'components/Quiz';
import {
  createIdentity,
  loadIdentity,
  createChannel,
  loadChannel,
  Channel,
} from 'clubhouse-protocol/build/babel';
import Transporter from 'helpers/Transporter';

const description = require('./description.md');

interface Props {
  onComplete: () => any;
}

const createContext = async () => {
  const key = await createIdentity({
    name: 'Bob',
    email: 'bob@example.com',
  });
  const identity = await loadIdentity(key);
  return {
    identity,
    createChannel,
    loadChannel,
    transporter: new Transporter(),
  };
};

const initialCode = `
module.exports = (async () => {
  const channelKey = await createChannel(/* channel params */);

  const channel = 'Bob\\'s channel'
  return channel;
})();
`.trim();

const solution = `
module.exports = (async () => {
  const channelKey = await createChannel(identity, []);

  const channel = await loadChannel(identity, channelKey, transporter);
  return channel;
})();
`.trim();

const test = async (context: any, result: any) => {
  return result instanceof Channel;
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