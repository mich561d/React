import React, { Component } from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import person from "./file2";

const { firstName, email } = person;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <p>{upper("please uppercase me")}</p>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>{firstName}: {email}</p>
        </header>
      </div>
    );
  }
}

export default App;
