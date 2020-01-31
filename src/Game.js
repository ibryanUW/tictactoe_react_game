import React from 'react';

// Import the child classes
import GameBoard from './GameBoard';
import GameTitle from './GameTitle';

//
export default class Game extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
          <div id="game">
              <GameTitle/>
              <GameBoard/>
          </div>
        );
    };
}
