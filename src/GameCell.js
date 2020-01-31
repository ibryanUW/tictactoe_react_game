import React from 'react';

export default class GameCell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }


    render (){
        return (
            <div>
                <button className="gameCell" onClick={this.props.value}/>
            </div>

        );
    };
}