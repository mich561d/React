import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

const topics = [
  { id: "topic-1", topic: "Text for Topic-1" },
  { id: "topic-2", topic: "Another topic" },
  { id: "topic-3", topic: "Yet another Topic" }
];


function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map(topic => (<li><NavLink to={`${match.url}/` + topic.id}>{topic.topic}</NavLink></li>))}
      </ul>
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
      <Route path={`${match.path}/:topicId`} render={(props) =>
        <Topic {...props} theTopic={topics.find(t => t.id === props.match.params.topicId)} />}
      />
    </div>
  );
}
const Topic = ({ match, theTopic }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    <p>{theTopic.topic}</p>
  </div>
);

export default BasicExample;
