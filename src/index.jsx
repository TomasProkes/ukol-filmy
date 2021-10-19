import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';

const App = () => (
  <>
    <Header />

  </>
);

render(<App />, document.querySelector('#app'));
