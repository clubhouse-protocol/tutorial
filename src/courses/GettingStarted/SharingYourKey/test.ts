import { Test } from "screens/Quiz/types";
import Context from "./ContextType";

const test: Test<Context> = async (context, result) => {
  if (result !== context.identity.publicKey.armor()) {
    throw Error('result isn\'t a public key')
  }
};

export default test;