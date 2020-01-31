import React from 'react';

// Import the child classes
import GameBoard from './GameBoard';
import GameTitle from './GameTitle';

//
function Game() {
    return (
        <div id="game">
            // Load game components needed for the presentation and functionality of the game.
            <GameTitle/>
            <GameBoard/>
        </div>
    );
}

export default Game;

