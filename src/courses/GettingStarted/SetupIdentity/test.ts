import { Test } from "screens/Quiz/types";
import Context from "./ContextType";
import { Identity } from "clubhouse-protocol";


const test: Test<Context> = async (context, result) => {
  if (!(result instanceof Identity)) {
    throw Error('The returned object is not an identity');
  }
}

export default test;