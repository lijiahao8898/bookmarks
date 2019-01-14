import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './view/home/index';

class App extends Component {
    render () {
        return (
            <div className="App" style={{
                minWidth: '1200px',
                margin: '0 auto'
            }}>
                <Home/>
            </div>
        );
    }
}

export default App;
