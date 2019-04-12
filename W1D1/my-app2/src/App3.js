import React, { Component } from 'react';
import './App.css';
import { names } from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
    const { firstName, lastName, email } = props.person;
    return <h1>Hello, {firstName} {lastName}: {email}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            {names.map(p => <WelcomePerson person={p} />)}
        </div>
    );
}

export default App;
