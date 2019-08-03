import { Channel, Identity } from "clubhouse-protocol";

interface Context {
  channel: Channel;
  _internals: {
    receiverChannel: Channel;
    sender: Identity;
  }
}

export default Context;