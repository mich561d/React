import React from "react"

export default function AllPersons(props) {
  const { persons } = props;

  return persons.map(person => {
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          <tr><td>{person.age}</td><td>{person.name}</td><td>{person.gender}</td><td>{person.email}</td></tr>
        </tbody>
      </table>

      <p>Please make me show all persons in the table above</p>
      <p>Also, update me when new items are added/edited </p>

    </div>
  });
}
