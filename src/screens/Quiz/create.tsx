import React from 'react';
import Quiz from './Component';
import { Options, OuterProps, Props } from './types';

type QuizType = <ContextType = {[name: string]: any}>(options: Options<ContextType>) => (props: OuterProps) => React.FunctionComponentElement<Props<any>>;

const createQuiz:QuizType = (options) => (props) => {
  return (
    <Quiz
      {...props}
      {...options}
    />
  );
};

export default createQuiz;