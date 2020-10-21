import React, { useState } from 'react';
import { Button } from '@wantable/kitter';
import './App.css';
import { Dashboard } from './reddit/Dashboard';

function App() {

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <Dashboard />
        <Button label="hey" />
      </main>
    </div>
  );
}

export default App;
