import { ComponentClass, FunctionComponent } from 'react';
import { OuterProps as StepProps } from 'screens/Quiz/types';

interface StepDescription {
  id: string;
  screen: Step;
}

type Step = ComponentClass<StepProps, any> | FunctionComponent<StepProps>;

interface InnerProps {
  steps: StepDescription[];
};

interface OuterProps {
  id: string;
  name: string;
}

type Props = InnerProps & OuterProps;

export {
  InnerProps,
  OuterProps,
  Props,
  Step,
  StepDescription,
};
