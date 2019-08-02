import React, { FunctionComponent } from 'react';
import Quiz from 'components/Quiz';
import { createIdentity, loadIdentity, Identity, createChannel, loadChannel } from 'clubhouse-protocol/build/babel';
import Transporter from 'helpers/Transporter';

const description = require('./description.md');

interface Props {
  onComplete: () => any;
}

const createContext = async () => {
  const transporter = new Transporter();
  const aliceKey = await createIdentity({
    name: 'Alice',
    email: 'alice@example.com',
  });
  const bobKey = await createIdentity({
    name: 'Bob',
    email: 'bob@example.com',
  });
  const alice = await loadIdentity(aliceKey);
  const bob = await loadIdentity(bobKey);
  const key = alice.publicKey.armor();
  const channelKey = await createChannel(bob, []);
  const channel = await loadChannel(bob, channelKey, transporter);
  return {
    channel,
    key,
    loadIdentity,
    addMember: (key: string) => ({ type: 'ADD_MEMBER', key }),
    _internals: {
      alice,
      bob,
      transporter,
    }
  }
};

const initialCode = `
module.exports = (async () => {
  const alice = await loadIdentity(key);
  await channel

  return 'invitation for alice';
})();
`.trim();

const solution = `
module.exports = (async () => {
  const alice = await loadIdentity(key);
  await channel.send(addMember(key));

  return channel.pack(alice);
})();
`.trim();

const test = async (context: any, result: any) => {
  const { channel } = context;
  const { alice, transporter, bob } = context._internals;
  const aliceChannel = await loadChannel(alice, result, transporter, bob);
  await aliceChannel.send('hello');
  const [message] = await channel.update();

  return message.data === 'hello' && message.sender.fingerprint === alice.fingerprint;
}

const QuizContainer: FunctionComponent<Props> = ({
  onComplete,
}) => (
  <Quiz
    description={description}
    test={test}
    initialCode={initialCode}
    createContext={createContext}
    onComplete={onComplete}
    solution={solution}
  />
);

export default QuizContainer;