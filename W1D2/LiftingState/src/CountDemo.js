import React, { Component } from "react";
import "./App.css";
import infoImage from "./images/infoButton.svg";

const CountPresenter = props => {
  return (
    <div className="count-presenter">
      <h4>{props.title}</h4>
      <h2>{props.val}</h2>
    </div>
  );
};
const CountButtons = ({ text, inc, property }) => {
  return (
    <div className="count-btns">
      <h4>{text}</h4>
      <button className="btn btn-info" onClick={inc.bind(this, property, "+")}>
        +
      </button>
      <button className="btn btn-info" onClick={inc.bind(this, property, "-")}>
        -
      </button>
      {/** This is just another way to pass arguments to a function from within an event handler  */}
      <button className="btn btn-info" onClick={() => inc(property, "c")}>
        C
      </button>
    </div>
  );
};


class App extends Component {
  state = {   
    count1: 0, //Initial value for the first counter
    count2: 3, //Initial value for the second counter
    showInfo: false, //Not really a part of the demo. Used to present the "educational" image
  };

  incrementCounter = (counterToIncrement, whatToDo) => {
    if (whatToDo === "+") {
      this.setState(state => (state[counterToIncrement] += 1));
    } else if (whatToDo === "-") {
      this.setState(state => (state[counterToIncrement] -= 1));
    } else {
      this.setState(state => (state[counterToIncrement] = 0));
    }
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
        <div className="row" style={{ paddingTop: 25, width:500,margin:"auto" }}>
          <div className="col-5">
            <CountPresenter title="Counter-1" val={this.state.count1} />
            <CountPresenter title="Counter-2" val={this.state.count2} />
          </div>
          <div className="col-5">
              <div className="count-btn">
                <CountButtons text="Counter 1" property="count1" inc={this.incrementCounter}/>
                <br />
                <CountButtons text="Counter 2" property="count2" inc={this.incrementCounter}/>
            </div>
          </div>
        </div>
        <div>
          {this.state.showInfo && <img src={infoImage} className="center-img" alt="infoImage" />}
        </div>
      </div>
    );
  }
}
export default App;
