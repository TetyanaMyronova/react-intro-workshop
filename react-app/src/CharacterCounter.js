import React from 'react';

class CharacterCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',

        };
    }
    handleInput(event) {
        if (event.target.value.length <= this.props.limit) {
            this.setState({
                inputValue: event.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Type a tweet</h1>
                 {/*CONTROLLED COMPONENT */}
                <input value={this.state.inputValue} type="text" onInput={this.handleInput.bind(this)} />
                {this.state.inputValue.length}
            </div>
        )
    }
}

export default CharacterCounter;