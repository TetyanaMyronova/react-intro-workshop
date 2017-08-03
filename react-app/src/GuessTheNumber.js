import React from 'react';

class GuessTheNumber extends React.Component {

    constructor() {
        super();
        this.state = {
            numberToGuess: 42
        };
    }

    _handleButtonClick() {
        var number = +this.refs.userGuess.value;
        if (number > +this.state.numberToGuess) {
            alert('You number is too high!');
        } else if (number < +this.state.numberToGuess) {
            alert('You number is too low');
        } else if (number === +this.state.numberToGuess)
            alert('You guessed the number! Congratulations!');
    }


    render(){
        return (
            <div>
                <input ref="userGuess" type = "text"/>
                <button onClick={this._handleButtonClick.bind(this)}>Check the number</button>
            </div>
        )
    };

}

export default GuessTheNumber;