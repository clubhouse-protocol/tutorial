import Transporter from "clubhouse-protocol/build/babel/Transporter";
import { loadChannel, createChannel, Identity, loadIdentity } from "clubhouse-protocol";

interface Context {
  identity: Identity,
  invitation: string,
  key: string,
  loadChannel: typeof loadChannel,
  loadIdentity: typeof loadIdentity,
  transporter: Transporter,
}

export default Context;