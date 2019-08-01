import React, { 
  useState,
  FunctionComponent,
} from 'react';
import MonacoEditor from './InlineEditor';

const babel = require('@babel/standalone');
const compiler = require('@nx-js/compiler-util')

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
    const exec = async () => {
      const context = await createContext()
      const output: any = babel.transform(code, {});
      const compled = compiler.compileCode(output.code);
      const module = {
        exports: {}
      }
      await compled({
        ...context,
        module,
        exports: module.exports,
        console,
        _internals: undefined,
      });
      if (await test(context, await module.exports)) {
        onComplete();
      }
      setRunning(false);
    };
    exec()
      .catch(err => {
        setRunning(false);
        setError(err);
        console.log(err);
      });
  };
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: description || '' }} />
      <MonacoEditor
        language="javascript"
        theme="vs-light"
        value={code}
        options={{
          selectOnLineNumbers: true,
          lineNumbers: 'off',
          minimap: false,
          automaticLayout: true,
        }}
        onChange={setCode}
      />
      <button disabled={running} onClick={run}>Run</button>
      <button disabled={running} onClick={() => setCode(solution)}>Show solution</button>
      {error && (
        <div>{error.message}</div>
      )}
    </div>
  );
}

export default CodeEditor;