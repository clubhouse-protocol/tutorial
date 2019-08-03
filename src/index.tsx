import React from 'react';
import ReactDom from 'react-dom';
import Router from 'routes/Router';
import App from 'screens/App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faHome, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft, faHome, faCheck);

const root = document.createElement('div');
root.style.height = '100%';
document.body.appendChild(root);

const boot = async () => {
  ReactDom.render(
    <App>
      <Router />
    </App>,
    root,
  );
};

boot().catch(err => console.error(err));