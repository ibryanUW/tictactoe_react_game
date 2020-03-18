import React from 'react';
import {GAME_STATES} from "./GameState";

// GameCell - Defines one square on game implemented as React class component
export default class GameCell extends React.Component {

    // constructor - initializes object
    constructor(props) {

        // Super enables proper processing of properties inherited React component
        super(props);

        // Binds function so that it can use this.state and this.props internally
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick - processes DOM onClick event
    handleClick(e) {

        // Cascades click to parent (game) component
        this.props.onChange(this.props.node);

    }

    // render - renders the game square
    render() {

        // Render used cells (already selected)
        if (this.props.value === 0)
            return <div className="game-cel">O</div>;
        else if (this.props.value === 1)
            return <div className="game-cel">X</div>;
        // Render cell that can be selected
        else if (this.props.gameState === GAME_STATES.MOVE)
            return <div class="game-cel move" onClick={this.handleClick}>?</div>;
        // Render cell that cannot be selected -- end game conditions
        else
            return <div className="game-cel">-</div>;
    }

}