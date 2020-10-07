/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, {useState} from 'react';
import './App.css';

import './styles-css/display.css';
import './styles-css/alignment.css';
import './styles-css/color.css';
import './styles-css/margin.css';
import './styles-css/padding.css';

import { Dashboard } from './reddit/Dashboard';
import { TestingGround } from './TestingGround';

function App() {
  // let root = document.documentElement;
  // root.style.setProperty('--color-primary', "red");

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Dashboard />
        {/* <TestingGround /> */}
      </main>
    </div>
  );
}

export default App;
