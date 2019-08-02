import React, { 
  useState,
  FunctionComponent,
} from 'react';
import MonacoEditor from './InlineEditor';
import styled from 'styled-components';
import { runCode } from './helpers';

require('./highlight.css');

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  padding: 0 50px;

  p code {
    color: #fabd2f;
  }

  a {
    color: #9b59b6;
  }
`;

const ErrorWrapper = styled.div`
  color: #e74c3c;
  text-align: center;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const EditorWrapper = styled.div`
  flex: 1 0 0;
  overflow-y: auto;
  padding-top: 50px
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

interface Props {
  description?: string;
  createContext: () => Promise<{[name: string]: any}>;
  initialCode?: string;
  test: (state:any, result: any) => Promise<boolean>;
  onComplete: () => any;
  solution: string;
}

const CodeEditor: FunctionComponent<Props> = ({
  createContext = async () => ({}),
  initialCode = '',
  test,
  onComplete,
  description,
  solution,
}: Props) => {
  const [running, setRunning] = useState(false);
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState<Error | undefined>();
  const run = () => {
    setError(undefined);
    setRunning(true);
    runCode(code, createContext)
      .then(async ({ context, result }) => {
        if (await test(context, result)) {
          onComplete();
        }
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