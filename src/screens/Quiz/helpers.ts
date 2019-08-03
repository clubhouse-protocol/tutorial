const babel = require('@babel/standalone');
const compiler = require('@nx-js/compiler-util');

export const runCode = async (code: string, createContext: () => Promise<{[name: string]: any}>) => {
  const context = await createContext()
  const output: any = babel.transform(code, {});
  const compled = compiler.compileCode(output.code);
  const module = {
    exports: {}
  };
  await compled({
    ...context,
    module,
    exports: module.exports,
    console,
    _internals: undefined,
  });

  return {
    context,
    result: await module.exports,
  };
}