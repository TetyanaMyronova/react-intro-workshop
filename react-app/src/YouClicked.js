import React from 'react';

class YouClicked extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: +props.startValue || 0,
            counterReset: +props.startResetValue || 0
        };
    }

    _OnClick() {
        this.setState({
            counter: +this.state.counter + 1,
        });
    }

    _OnReset() {
        this.setState({
            counterReset: + this.state.counterReset + 1,
            counter: 0
        });
    }

    render(){

        var color = this.props.color || 'darkblue';
        var neverClicked = '';
        if (this.state.counter === 0) {
            neverClicked = 'You never clicked me';
        } else {
            neverClicked = 'You clicked me ' + this.state.counter + ' times'
        }

        return (
            <div>
                <button type="button" onClick={this._OnClick.bind(this)}>Click Me!</button>
                <button type="button" onClick={this._OnReset.bind(this)}>Reset!</button>
                <h1 style={{color: color}}> {neverClicked}</h1>
                <h1 style={{color: color}}> You reset {this.state.counterReset} times</h1>
            </div>
        )
    };
}

export default YouClicked;