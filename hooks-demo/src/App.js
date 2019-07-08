import React from 'react';
import logo from './logo.svg';
import './App.css';

function OneTimeButton({ onClick }) {
    return (
        <button className="simple-button" onClick={onClick}>Click Me!</button>
    );
}

function sayHello() {
    alert("Hello");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's learn React Hooks!
        </p>
        <OneTimeButton onClick={sayHello} />
      </header>
    </div>
  );
}

export default App;
