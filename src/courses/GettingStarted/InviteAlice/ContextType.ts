import { Channel, loadIdentity, Identity } from "clubhouse-protocol";
import Transporter from "helpers/Transporter";

type AddMember = (key: string) => ({ type: 'ADD_MEMBER', key: string });

interface Context {
  channel: Channel,
  key: string,
  loadIdentity: typeof loadIdentity,
  addMember: AddMember,
  _internals: {
    alice: Identity,
    bob: Identity,
    transporter: Transporter,
  }
}

export default Context;