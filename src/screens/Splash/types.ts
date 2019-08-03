import { OuterProps } from 'screens/Quiz/types';

interface InnerProps {
  description: string;
  next? : boolean;
}

type Props = InnerProps & OuterProps

export {
  OuterProps,
  InnerProps,
  Props,
}