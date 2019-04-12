import React, { Component } from 'react';
import './App.css';

class Clock extends React.Component {
    constructor(props) {
        console.log("In constructor");
        super(props);
        this.state = { date: new Date() };
    }
    componentDidCatch() { console.log("In componentDidCatch"); }
    componentWillMount() { console.log("In componentWillMount"); }
    componentDidUpdate() { console.log("In componentDidUpdate"); }
    componentWillReceiveProps() { console.log("In componentWillReceiveProps"); }
    componentWillUpdate() { console.log("In componentWillUpdate"); }

    componentDidMount() {
        console.log("In componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("In componentWillUnmount");
        clearInterval(this.timerID);
    }

    tick() {
        console.log("In tick");
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("In render");
        return (
            <div>
                <h1>{this.props.msg}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default Clock
