import React from 'react';
import ReactDom from 'react-dom';
import Steps from 'screens/Steps';
import App from 'components/App';

const root = document.createElement('div');
root.style.height = '100%';
document.body.appendChild(root);

const boot = async () => {
  ReactDom.render(
    <App>
      <Steps />
    </App>,
    root,
  );
};

boot().catch(err => console.error(err));