import React, { Component } from 'react';
import './App.css';

const NamesList = ({ names, deleteName, editName }) => {
  return (
    <React.Fragment>
      <h2>All Names</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.nameText} (
            <a href="#/" onClick={() => deleteName(name.id)}>delete</a>,
            <a href="#/" onClick={() => editName(name)}> edit</a>)
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const NamesTable = ({ names, deleteName, editName }) => {
  return (
    <React.Fragment>
      <h2>All Names</h2>
      <table><thead><tr key={-1}><th>ID</th><th>Name</th><th>Delete</th><th>Edit</th></tr></thead><tbody>
        {names.map((name) => (
          <tr key={name.id}><td>{name.id}</td><td>{name.nameText}</td>
            <td><a href="#/" onClick={() => deleteName(name.id)}>delete</a></td>
            <td><a href="#/" onClick={() => editName(name)}> edit</a></td>
          </tr>
        ))}
      </tbody></table>
    </React.Fragment>
  );
};

class NewName extends React.Component {
  state = { newName: { ...this.props.nextName } };

  handleSubmit = evt => {
    if (this.state.newName.nameText === "") {
      return;
    }
    this.props.addName(this.state.newName);
    this.setState({ newName: { ...this.props.nextName } })
    evt.preventDefault();
  };

  onChange = evt => {
    const val = evt.target.value;
    this.setState(state => state.newName["nameText"] = val)
  };

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newName.nameText} onChange={this.onChange} />
          <div style={{ marginTop: 5 }}>
            <button className="btn btn-info">Save</button>
          </div>
        </form>
        {this.state.newName.id >= 0 && <p>Editing name with id {this.state.newName.id}</p>}
      </React.Fragment>
    );
  }
}

class App extends Component {
  state = {
    names: [
      { id: 0, nameText: "James" },
      { id: 1, nameText: "Earl" },
      { id: 2, nameText: "Dingo" }
    ],
    nextName: { id: -1, nameText: "" },
    nextId: 3
  };

  addName = name => {
    let next = this.state.nextId;
    let newList = [...this.state.names];
    if (name.id === -1) {
      name.id = next++;
      newList.push(name);
    } else {
      let nameToEdit = newList.find(t => t.id === name.id);
      nameToEdit.nameText = name.nameText;
    }
    this.setState(() => {
      return { names: newList, nextId: next, nextName: { id: -1, name: "" } };
    });
  };

  deleteName = (index) => {
    let newArray = [...this.state.names];
    newArray.splice(index, 1);
    this.setState(() => {
      return { names: newArray };
    });
  };

  editName = (name) => {
    const newName = this.state.nextName;
    newName.id = name.id;
    newName.nameText = name.nameText;
    this.setState({ nextName: newName });
  }

  render() {
    return (
      <div className="container outer">
        <h2 style={{ textAlign: "center" }}>Lifting State Up 2</h2>
        <div className="row" style={{ paddingTop: 25 }}>
          <div className="col-6 allNames" style={{ border: "1px solid black" }}>
            {/* <NamesList names={this.state.names} deleteName={this.deleteName} editName={this.editName} /> */}
            <NamesTable names={this.state.names} deleteName={this.deleteName} editName={this.editName} />
          </div>
          <div className="col-6 newName" style={{ border: "1px solid black" }}>
            <NewName title="Add a new name" addName={this.addName}
              nextName={this.state.nextName}
              key={this.state.nextName.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
