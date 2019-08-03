import {
  createIdentity,
  loadIdentity,
} from "clubhouse-protocol";

interface Context {
  createIdentity: typeof createIdentity,
  loadIdentity: typeof loadIdentity,
}

export default Context;