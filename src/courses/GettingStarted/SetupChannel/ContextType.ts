import Transporter from "clubhouse-protocol/build/babel/Transporter";
import { loadChannel, createChannel, Identity } from "clubhouse-protocol";

interface Context {
  identity: Identity,
  createChannel: typeof createChannel,
  loadChannel: typeof loadChannel,
  transporter: Transporter,
}

export default Context;