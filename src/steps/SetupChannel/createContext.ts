import { CreateContext } from "components/Quiz/types";
import Context from "./ContextType";
import { createIdentity, loadIdentity, createChannel, loadChannel } from "clubhouse-protocol";
import Transporter from "helpers/Transporter";

const createContext: CreateContext<Context> = async () => {
  const key = await createIdentity({
    name: 'Bob',
    email: 'bob@example.com',
  });
  const identity = await loadIdentity(key);
  return {
    identity,
    createChannel,
    loadChannel,
    transporter: new Transporter(),
  };
};

export default createContext;