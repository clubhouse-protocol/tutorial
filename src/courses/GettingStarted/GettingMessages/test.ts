import { Test } from "screens/Quiz/types";
import Context from "./ContextType";

const test: Test<Context> = async (context, result) => {

  if (!Array.isArray(result) || result.length !== 1) {
    throw Error('result isn\'t a message list');
  }
  if (result[0].data !== context._internals.message || result[0].sender.fingerprint !== context._internals.sender.fingerprint) {
    throw Error('the message in the response is not correct');
  }
};

export default test;