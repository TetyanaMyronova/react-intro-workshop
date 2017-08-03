import React from 'react';

class GitHubProfile extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        //var that = this;
        fetch("https://api.github.com/users/" + this.props.username)
            .then(r => r.json())
            .then( ( function (responseJSON) {
                this.setState({
                    user : responseJSON
                });
            } ).bind(this) );
    }

    componentDidUpdate(prevProps){
        if (prevProps.username !== this.props.username){
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.user ?
                        <div className="github-user">
                            <img className="github-user__avatar" src={"https://avatars.githubusercontent.com/u/" + this.state.user.id + "?v=3"} alt="githubPic" />
                            <div className="github-user__info">
                                <p>User login: {this.state.user.login}</p>
                                <p>User name: {this.state.user.name}</p>
                                <p>User bio: {this.state.user.bio}</p>
                                {/*{this.props.username}*/}
                            </div>
                        </div>
                        :
                        <p>Loading...</p>
                    
                }
            </div>
        );
    }
}

export default GitHubProfile;