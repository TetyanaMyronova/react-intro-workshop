import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div classID= "layout">
                <nav classID="main-nav">
                    <h2>About us: </h2>
                        <p>We are <a href="https://github.com/reactjs" target="_blank" rel="noopener noreferrer">React</a> developers!</p>
                </nav>
                <main>

                </main>
                <footer>
                    Cohort-9 2017
                </footer>
            </div>
        );
    }
}

export default Layout;