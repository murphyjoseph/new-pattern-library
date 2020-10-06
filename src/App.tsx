/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, {useState} from 'react';
import './App.css';
import { Dashboard } from './reddit/Dashboard';
import { TestingGround } from './TestingGround';

function App() {

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Dashboard />
        {/* <TestingGround />  */}
      </main>
    </div>
  );
}

export default App;
