import React, { FunctionComponentElement } from 'react';
import { OuterProps, InnerProps } from './types';
import Splash from './Component';

type SplashType = (options: InnerProps) => (props: OuterProps) => FunctionComponentElement<{}>;

const create: SplashType = (options: InnerProps) => (props: OuterProps) => (
  <Splash
    {...options}
    {...props}
  />
);

export default create;