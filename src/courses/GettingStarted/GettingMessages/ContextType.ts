import { Channel, Identity } from "clubhouse-protocol";

interface Context {
  channel: Channel;
  _internals: {
    message: string;
    sender: Identity;
  }
}

export default Context;