import { CreateContext } from "screens/Quiz/types";
import Context from "./ContextType";
import { createIdentity, loadIdentity, createChannel, loadChannel } from "clubhouse-protocol";
import Transporter from "helpers/Transporter";

const createContext: CreateContext<Context> = async () => {
  const transporter = new Transporter();
  const bobKey = await createIdentity({
    name: 'Bob',
    email: 'bob@example.com',
  });
  const aliceKey = await createIdentity({
    name: 'Alice',
    email: 'alice@example.com',
  });
  const bob = await loadIdentity(bobKey);
  const alice = await loadIdentity(aliceKey);
  const bobChannelKey = await createChannel(bob, [
    alice.publicKey.armor(),
  ]);
  const bobChannel = await loadChannel(bob, bobChannelKey, transporter);
  const alicePublicIdentity = await loadIdentity(alice.publicKey.armor());
  const aliceChannelKey = await bobChannel.pack(alicePublicIdentity);
  const aliceChanel = await loadChannel(alice, aliceChannelKey, transporter, bob);
  await aliceChanel.send('hello!');
  return {
    channel: bobChannel,
    _internals: {
      sender: alice,
      message: 'hello!',
    },
  };
};

export default createContext;