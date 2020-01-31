import React from 'react';
import GameCell from './GameCell';

export default class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.cellClicked = this.cellClicked.bind(this);
        this.state = {
            clicked: '?',
        };

    }

    cellClicked(){
        this.setState({
            clicked: 'X',
        });
    }

    render(){
        return <div id="gameBoard">
            <GameCell value={this.cellClicked()}/>
        </div>
    };
}