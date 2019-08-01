import React from 'react';
import ReactDom from 'react-dom';
import Quiz from 'quizes/Quiz';

const root = document.createElement('div');
document.body.appendChild(root);

const boot = async () => {
  ReactDom.render(
    <Quiz />,
    root,
  );
};

boot().catch(err => console.error(err));