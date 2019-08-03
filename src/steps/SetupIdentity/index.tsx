import createQuiz from "components/Quiz/create";
import createContext from "./createContext";
import test from './test';

const description = require('./description.md');
const initialCode = require('!!raw-loader!./initialCode.js').default;
const solution = require('!!raw-loader!./solution.js').default;

export default createQuiz({
  createContext,
  test,
  description,
  initialCode,
  solution,
});