import React, { 
  useState,
  FunctionComponent,
} from 'react';
import MonacoEditor from './InlineEditor';
import { runCode } from './helpers';
import {
  ButtonWrapper,
  DescriptionWrapper,
  EditorWrapper,
  ErrorWrapper,
  RightWrapper,
  Wrapper,
} from './elements';
import { Props } from './types';

require('./highlight.css');

const CodeEditor: FunctionComponent<Props<any>> = ({
  createContext = async () => ({}),
  initialCode = '',
  test,
  onComplete,
  description,
  solution,
}: Props<any>) => {
  const [running, setRunning] = useState(false);
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState<Error | undefined>();
  const run = () => {
    setError(undefined);
    setRunning(true);
    runCode(code, createContext)
      .then(async ({ context, result }) => {
        await test(context, result);
        onComplete();
        setRunning(false);
      })
      .catch(err => {
        setRunning(false);
        setError(err);
      });
  };
  return (
    <Wrapper>
      <DescriptionWrapper>
        <div dangerouslySetInnerHTML={{__html: description || '' }} />
      </DescriptionWrapper>
      <RightWrapper>
        <ErrorWrapper>{error && error.message}</ErrorWrapper>
        <EditorWrapper>
          <div>
          <MonacoEditor
            language="javascript"
            theme="vs-dark"
            value={code}
            options={{
              selectOnLineNumbers: true,
            }}
            onChange={(value) => {
              console.log('val', value);
              setCode(value);
              setError(undefined);
            }}
          />
          </div>
        </EditorWrapper>
        <ButtonWrapper>
          <button
            className="hidden"
            disabled={running}
            onClick={() => {
             setCode(solution);
             setError(undefined);
            }}
          >
            Show solution
          </button>
          <button disabled={running} onClick={run}>Test</button>
        </ButtonWrapper>
      </RightWrapper>
    </Wrapper>
  );
}

export default CodeEditor;