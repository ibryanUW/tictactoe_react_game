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
        <div className="App">
            <Game/>
        </div>
    );
}

export default App;
