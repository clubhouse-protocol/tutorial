import { CreateContext } from "screens/Quiz/types";
import Context from "./ContextType";
import { createIdentity, loadIdentity } from "clubhouse-protocol";

const createContext: CreateContext<Context> = async () => {
  const key = await createIdentity({
    name: 'Bob',
    email: 'bob@example.com',
  });
  const identity = await loadIdentity(key);
  return {
    identity,
  };
};

export default createContext;