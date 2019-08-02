import React, { Fragment, FunctionComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ReactNodeLike } from 'prop-types';

interface Props {
  children: ReactNodeLike;
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

  * {
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
  }

  body {
    margin: 0;
    background: #1e1e1e;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
  }

  button {
    background: #9b59b6;
    border: none;
    color: #fff;
    padding: 10px 20px;
    outline: none;

    &.hidden {
      background: transparent;
      text-decoration: underline;
    }
  }
`;

const App: FunctionComponent<Props> = ({
  children,
}) => (
  <Fragment>
    <GlobalStyle />
    {children}
  </Fragment>
);

export default App;