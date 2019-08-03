import { Test } from "screens/Quiz/types";
import Context from "./ContextType";

const test: Test<Context> = async (context, result) => {
  const messages = await context._internals.receiverChannel.update();
  if (messages.length === 0) {
    throw new Error('No messages received');
  }
  if (messages.length > 1) {
    throw new Error('Got to many messages');
  }
  const [message] = messages;
  if (message instanceof Error) {
    throw new Error(`message was error ${message}`);
  }
  if (message.data !== 'hello!') {
    throw new Error('message content was wrong');
  }
  if (!Array.isArray(result) || result.length !== 1) {
    throw Error('result isn\'t a message list');
  }
  if (result[0].data !== 'hello!' || result[0].sender.fingerprint !== context._internals.sender.fingerprint) {
    throw Error('the message in the response is not correct');
  }
};

export default test;