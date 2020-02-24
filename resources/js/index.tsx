import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactGA from 'react-ga';
import {App} from './App';

ReactGA.initialize(
  window.location.host === 'laratips.dev'
    ? 'UA-139577890-3'
    : ''
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
