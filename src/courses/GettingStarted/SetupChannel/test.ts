import { Test } from "screens/Quiz/types";
import Context from "./ContextType";
import { Channel } from "clubhouse-protocol";

const test: Test<Context> = async (context, result) => {
  if (!(result instanceof Channel)) {
    throw Error('result is not a channel')
  }
};

export default test;