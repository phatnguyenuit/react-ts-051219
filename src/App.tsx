import './App.css';

import Button from 'components/Button';
import React from 'react';

import logo from './logo.svg';

const App: React.FC = () => {
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
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <Button status="OK">Hello</Button>
      </main>
    </div>
  );
};

export default App;
