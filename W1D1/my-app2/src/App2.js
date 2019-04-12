import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Hello></Hello>
                </header>
            </div>
        );
    }
}

// class Hello extends React.Component {
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }

function Hello() {
    return <h1>Hello World!</h1>;
}

export default App;
