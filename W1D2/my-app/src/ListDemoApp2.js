import React, { Component } from 'react';
import './App.css';

function TableItem({ members }) {
    return (members.map((m, index) => <tr key={index}><td>{index}</td><td>{m.name}</td><td>{m.age}</td></tr>));
}

function MemberTable({ members }) {
    return (
        <table>
            <thead><tr key={0}><th>#</th><th>Name</th><th>Age</th></tr></thead>
            <tbody><TableItem members={members} /></tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members} />
        </div>
    );
}

export default class App extends React.Component {
    state = {
        members: [{ name: "Peter", age: 18 },
        { name: "Jan", age: 35 },
        { name: "Janne", age: 25 },
        { name: "Martin", age: 22 }]
    };
    render() {
        return (<MemberDemo members={this.state.members} />);
    }
}
