import React, {Component} from 'react';

class GuessTheNumber extends Component {
    checkInput(e) {
        e.preventDefault();

        // if/else/basic logic
    }
    render() {
        return (
            <form ref="userForm">
                <input type="text" ref="userGuess" />
                <button type="submit">Check</button>
            </form>
        );
    }
}

export default GuessTheNumber;