import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption';
import RedBox from './RedBox';
import Layout from './Layout';
import GuessTheNumber from './GuessTheNumber';
import YouClicked from './YouClicked';
import CharacterCounter from './CharacterCounter';
import NumberGuessingGame from './NumberGuessingGame';
import GitHubProfile from './GitHubProfile';
import GitHubSearch from './GitHubSearch';

var imageList = [
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
    //return ImageCaption for one element
    renderImage(item) {
        return <ImageCaption source={item.source} text={item.text} key={item.id}/>
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <hr/>

                <h2> Exercise #1: Testing ImageCaption</h2>
                <figure>
                    <ImageCaption source=" http://i.imgur.com/D8JWn.jpg" text="This is a kittenz!"/>
                </figure>
                <hr/>

                <h2> Exercise #2: Testing ImageCaption [List of items]</h2>
                <div>
                    {imageList.map(this.renderImage)}
                </div>
                <hr/>

                <h2>Exercise #3: RedBox</h2>
                <RedBox>
                    <p>This will be in the red box</p>
                    <img alt="This too!" src="http://placekitten.com/g/200/200"/>
                </RedBox>
                <hr/>

                <h2>Exercise #4: Testing Layout</h2>
                <Layout/>
                <hr/>

                <h2>Exercise #5.0: Guess The Numbert</h2>
                <GuessTheNumber/>
                <hr/>

                <h2>Exercise #5.1: Components that receive user input</h2>
                <YouClicked></YouClicked>
                <hr/>

                <h2> Exercise #6: Character counter</h2>
                <CharacterCounter limit={10}/>
                <hr/>

                <h2> Exercise #7: NumberGuessing</h2>
                <NumberGuessingGame/>
                <hr/>

                <h2> Exercise #8: GitHub API</h2>
                <GitHubProfile username="TetyanaMyronova"/>
                <hr/>

                <h2> Exercise #9: GitHub Search</h2>
                <GitHubSearch/>
                <hr/>

            </div>
        );
    }
}

export default App;
