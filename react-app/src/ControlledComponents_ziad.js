import React, {Component} from 'react';

class MyInput extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        };
    }
    handleInput(event) {
        if (event.target.value.length <= 15) {
            this.setState({
                inputValue: event.target.value
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Type a tweet</h1>
                {/* CONTROLLED COMPONENT */}
                <input value={this.state.inputValue} type="text" onInput={this.handleInput.bind(this)} />
                {this.state.inputValue.length}
            </div>
        )
    }
}

export default MyInput;