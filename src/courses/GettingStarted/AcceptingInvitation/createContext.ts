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
  const aliceChannelKey = await createChannel(alice, [
    bob.publicKey.armor(),
  ]);
  const aliceChannel = await loadChannel(alice, aliceChannelKey, transporter);
  const bobPublicIdentity = await loadIdentity(bob.publicKey.armor());
  const bobChannelKey = await aliceChannel.pack(bobPublicIdentity);
  return {
    identity: bob,
    invitation: bobChannelKey,
    key: alice.publicKey.armor(),
    loadChannel,
    loadIdentity,
    transporter: new Transporter(),
  };
};

export default createContext;