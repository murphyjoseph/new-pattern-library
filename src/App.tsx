import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextLink } from './foundation/text/text-link';
import { TextAction } from './foundation/text/text-action';

function App() {

  const myClickEvent = () => {
    console.log("you clicked.")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextLink traits={({
          text: "Learn React",
          target: "_blank",
          href: "https://reactjs.org",
          variant: "primary"
        })} />
        <TextAction traits={({
          text: "Learn React",
          onClick: myClickEvent,
          variant: "primary"
        })} />
      </header>
    </div>
  );
}

export default App;
