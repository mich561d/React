import React, { Component } from "react";
import "./App.css";
import infoImage from "./images/infoTodo.svg";

const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <React.Fragment>
      <h2>All Todo's</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todoText}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

/**
 * This method sets state from props, which normally is considered an anti-pattern
 * The strategy however follows this RECOMMENDED way of doing it:
 * https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key
 *
 * Please observer how nextTodo + a key is passed in as props (the last one ensures correct updates when the prop changes)
 * Use this strategy for similar exercises for the rest of this semester
 */
class NewTodo extends React.Component {
  //This is necessary since what we pass in is a reference to an object
  //The notation with the three dots uses the object spread operator to create a clone
  state = { newTodo: { ...this.props.nextTodo } };

  handleSubmit = evt => {
    if (this.state.newTodo.todoText === "") {
      return;
    }
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: { ...this.props.nextTodo } });
    evt.preventDefault();
  };
  onChange = evt => {
    const val = evt.target.value;

    const currentTodo = this.state.newTodo;
    currentTodo.todoText = val;
    this.setState({ newTodo: currentTodo });

    // The line below, does the same as the three lines above. Replace when you know what happens
    //this.setState(state => state.newTodo["todoText"] = val)
  };

  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newTodo.todoText} onChange={this.onChange} />
          <div style={{ marginTop: 5 }}>
            <button className="btn btn-info">Save</button>
          </div>
        </form>
        {this.state.newTodo.id >= 0 && (
          <p>Editing todo with id {this.state.newTodo.id}</p>
        )}
      </React.Fragment>
    );
  }
}

class App extends Component {
  state = {
    todos: [
      { id: 0, todoText: "Wake up" },
      { id: 1, todoText: "Make Coffee" },
      { id: 2, todoText: "Drink Coffee" }
    ],
    nextTodo: { id: -1, todoText: "" },
    nextId: 3, //Used for this simple in-memory list to create the id's. Would usually be created by the DB
    showInfo: false //Not really a part of the demo. Used to present the "educational" image
  };

  //You will see the benefits from the complexity below, when you add the edit functionality
  addTodo = todo => {
    let next = this.state.nextId;
    //It's not enough to add/edit items in the list. We need to update state with a new list for react to detect the change
    let newList = [...this.state.todos];
    if (todo.id === -1) {
      // id=-1 Indicates a new object
      todo.id = next++;
      newList.push(todo);
    } else {
      //if id != -1 it must be an existing todo, with an id. Find it and add changes
      let todoToEdit = newList.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    //Add the new TodoList and (only relevant when you add edit functionality) new value for nextId and nextTodo
    this.setState(state => {
      return { todos: newList, nextId: next, nextTodo: { id: -1, todo: "" } };
    });
  };

  render() {
    return (
      <div className="container outer">
        <h2 style={{ textAlign: "center" }}>
          Props and Lifting State Demo
          <span style={{ fontSize: 12 }}>
            <input
              checked={this.state.showInfo}
              onChange={e => this.setState({ showInfo: e.target.checked })}
              type="checkbox"
            />
            Show info
          </span>
        </h2>
        <div className="row" style={{ paddingTop: 25,width:800,margin:"auto" }}>
          <div className="col-5 allTodos">
            <TodoList todos={this.state.todos} />
          </div>
          <div className="col-5 new-todo">
            <NewTodo
              title="New Todo"
              addTodo={this.addTodo}
              nextTodo={this.state.nextTodo}
              key={this.state.nextTodo.id}
            />
          </div>
        </div>
        <div>
          {this.state.showInfo && (
            <img src={infoImage} className="center-img" alt="infoImage" />
          )}
        </div>
      </div>
    );
  }
}
export default App;
