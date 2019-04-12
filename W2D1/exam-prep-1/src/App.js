import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import data from "./data/data.json";


function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/all" component={AllUsers} />
        <Route path="/details/:index" render={(props) =>
          <UserDetails {...props} user={data.users[props.match.params.index]} />
        } />
      </Switch>
    </Router>

  );
}

function Welcome() {
  return (
    <div>
      <h2>Welcome to our friends site</h2>
      <Link exact="true" to="/all">See all users</Link>
    </div>
  );
}

function AllUsers() {
  return (
    <div>
      <h2>All Users</h2>
      {UsersToTable(data.users)}
      <Link exact="true" to="/">Back</Link>
    </div>
  );
}

const UserDetails = ({ match, user }) => {
  return (
    <div>
      <h2>Details about {user.title}. {user.last}</h2>
      <p>Title: {user.title}<br />Firstname: {user.first}<br />Lastname: {user.last}<br />Gender: {user.gender}<br />Date of Birth: {user.dob}</p>
      <p>Street: {user.street}<br />City: {user.city}<br />State: {user.state}<br />Zip: {user.zip}</p>
      <p>Email: {user.email}<br />Phone: {user.phone}<br />Cell: {user.cell}</p>
      <img src={user.picture.large} alt="large" /><br />
      <Link exact="true" to="/all">Back</Link>
    </div>
  );
}

function UsersToTable(data) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => UserToTableRow(user, index))}
      </tbody>
    </table>
  );
}

function UserToTableRow(user, index) {
  return (
    <tr key={"userTableRow" + index}>
      <td><img src={user.picture.thumbnail} alt="thumbnail" /></td>
      <td>{user.first} {user.last}</td>
      <td><Link exact="true" to={("/details/" + index)} >Details</Link></td>
    </tr >
  );
}

export default BasicExample;
