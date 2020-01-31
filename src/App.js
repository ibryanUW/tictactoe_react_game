import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the child class.
import Game from "./Game";

// this function 'App' is the parent of class 'Game'.
// Will initiate a call to the 'Game' class which loads the game's
// title, board with cells, message, and restart/reset button.
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     <div id="App">
       <Game/>
     </div>
  );
}

export default App;
