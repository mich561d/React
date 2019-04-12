import React, { Component } from 'react';
import './App.css';

function ListItem({ numbers }) {
    return (numbers.map((n, index) => <li key={index}>{n}</li>));
}
function NumberList({ numbers }) {
    return (<ul><ListItem numbers={numbers} /></ul>);
}

function TableItem({ numbers }) {
    return (numbers.map((n, index) => <tr key={index}><td>{n}</td></tr>));
}
function NumberTable({ numbers }) {
    return (<table><thead><tr key={0}><th>Value</th></tr></thead><tbody><TableItem numbers={numbers} /></tbody></table>);
}

function ListDemo(props) {
    return (
        <div>
            <h2>All numbers passed in via props</h2>
            <NumberList numbers={props.numbers} />
            <NumberTable numbers={props.numbers} />
        </div>
    );
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 2, 3] };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const newArray = [...this.state.numbers, this.state.numbers.length + 1];
        this.setState({
            numbers: newArray
        });
    }

    render() {
        return <ListDemo numbers={this.state.numbers} />;
    }
}
