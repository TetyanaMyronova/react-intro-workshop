import React from 'react';
import GitHubProfile from './GitHubProfile';
import GitHubSearchForm from './GitHubSearchForm';

class GitHubSearch extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    _handleSearch(searchTerm) {
        console.log(searchTerm + " being searched");
        this.setState({
            user : searchTerm
        });
    }

    render() {
        return (
            <div>
                <GitHubSearchForm onSearch={this._handleSearch.bind(this)} />
                {this.state.user ? <GitHubProfile username={this.state.user}/> : null}
            </div>
        );
    }
};

export default GitHubSearch;