import { loadChannel } from "clubhouse-protocol";

const test = async (context: any, result: any) => {
  const { channel } = context;
  const { alice, transporter, bob } = context._internals;
  if (typeof result !== 'string') {
    throw new Error('result doesn\'t look like an invite');
  }
  const aliceChannel = await loadChannel(alice, result, transporter, bob);
  await aliceChannel.send('hello');
  const [message] = await channel.update();

  if (message.data !== 'hello' || message.sender.fingerprint !== alice.fingerprint) {
    throw new Error('Alice could not use the invitation');
  }
}

export default test;