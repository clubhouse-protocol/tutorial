import { CreateContext } from "screens/Quiz/types";
import Context from './ContextType';
import { createIdentity, loadIdentity } from "clubhouse-protocol";

const createContext: CreateContext<Context> = async () => ({
  createIdentity,
  loadIdentity,
});

export default createContext;