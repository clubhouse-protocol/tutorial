type CreateContext<ContextType> =  () => Promise<ContextType>;
type Test<ContextType> = (context: ContextType, result: any) => Promise<void>;

interface Options<ContextType> {
  description: string;
  createContext: CreateContext<ContextType>;
  initialCode: string;
  test: Test<ContextType>;
  solution: string;
}

interface OuterProps {
  onComplete: () => any;
  courseId: string;
  id: string;
}

type Props<ContextType> = Options<ContextType> & OuterProps;


export {
  CreateContext,
  Test,
  Options,
  OuterProps,
  Props,
}
