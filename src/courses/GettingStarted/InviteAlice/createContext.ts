import { CreateContext } from "screens/Quiz/types";
import Context from "./ContextType";
import Transporter from "helpers/Transporter";
import { createIdentity, loadIdentity, createChannel, loadChannel } from "clubhouse-protocol";

const createContext: CreateContext<Context> = async () => {
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

export default createContext;