import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Prompt } from "react-router-dom";
import './App.css';

function Header() {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/addBook">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  )
};
function Home() {
  return (
    <p>Home</p>
  )
};

function Company() {
  return (
    <p>Company</p>
  )
};

class Product extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>List of Prodcuts</h2>
        <ul>
          {this.props.bookStore.books.map(book => <li>{book.title} - {book.info}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

function NoMatch() {
  return (
    <h1>404 - Page not found</h1>
  );
}

class AddBook extends Component {
  state = { title: "", info: "", isBlocking: false };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      isBlocking: this.state.info.length > 0 || this.state.info.length > 0 ? false : true
    });
  }

  handleSubmit = (event) => {
    const book = { title: this.state.title, info: this.state.info };
    this.props.bookStore.addBook(book);
    event.preventDefault();
    event.target.reset();
    this.setState({
      isBlocking: false
    });
  }

  render() {
    let { isBlocking } = this.state;
    return (
      <React.Fragment>
        <h2>Add a new Book</h2>
        <form onSubmit={this.handleSubmit}>
          <Prompt when={isBlocking} message={location => `Are you sure you want to go to ${location.pathname}`} />
          <p>Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}</p>
          <input name="title" value={this.state.firstName} onChange={this.handleChange} placeholder="Title" /><br />
          <input name="info" value={this.state.firstName} onChange={this.handleChange} placeholder="Info" /><br />
          <p><button>Add Book</button></p>
        </form>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/products" render={() => <Product bookStore={this.props.bookStore} />} />
            <Route path="/addBook" render={() => <AddBook bookStore={this.props.bookStore} />} />
            <Route path="/company" render={() => <Company />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
