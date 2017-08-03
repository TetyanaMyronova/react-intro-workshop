import React from 'react';

class GitHubSearchForm extends React.Component {

    _handleSubmit(event) {

        event.preventDefault();

        var searchFunction = this.props.onSearch;
        searchFunction(this.refs.userInput.value);

    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <p>Enter a GitHub username:</p>
                <input type="text" ref="userInput" />
                <button>Search!</button>
            </form>
        );
    }
};

export default GitHubSearchForm;