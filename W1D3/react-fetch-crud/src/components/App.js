import React, { Component } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      //Use this to pass down a new or existing (edit) person to AddEditPerson
      newPerson: { id: "", age: "", name: "", email: "" } 
    };
  }


  componentDidMount() {
    //This would be the perfect place to fetch persons from the API
  }

  render() {
    return (
      <div>
        <div className="row">
        <h3>CRUD Demo </h3>
         <div className="col-md-7">
            <h3>All Persons</h3>
            <AllPersons persons={this.state.persons} edit={this.editPerson} deletePerson={this.deletePerson} />
          </div>
          <div className="col-md-5">
            <h3 style={{ textAlign: "center" }}>Add Persons</h3>
            <AddEditPerson
              newPerson={this.state.newPerson}
              //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
              addEditPerson={this.addEditPerson}
              key={this.state.newPerson.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
