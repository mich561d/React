import React from "react";
import ReactDOM from "react-dom";
import Todo from "./TodoDemo";
import Count from "./CountDemo";
import App from "./App";

class OuterFrame extends React.Component {
  state = {whatToShow: "todo"}

  onChange = (evt)=>{
    const val = evt.target.value;
    this.setState({whatToShow: val})
  }
  render() {
    return (
      <div>
        <span style={{ textAlign: "center",fontSize: "2em",marginRight: 10 }}>Select a Demo </span>
        <label>
          <input
            type="radio"
            name="selector"
            value="todo"
            checked={this.state.whatToShow === "todo"}
            onChange={this.onChange}
          />
          Todo Demo
        </label>
        &nbsp;
        <label>
          <input
            type="radio"
            name="selector"
            value="count"
            checked={this.state.whatToShow === "count"}
            onChange={this.onChange}
          />
          Count Demo
        </label>
        &nbsp;
        <label>
          <input
            type="radio"
            name="selector"
            value="both"
            checked={this.state.whatToShow === "both"}
            onChange={this.onChange}
          />
          Both
        </label>
        <div />
        {this.state.whatToShow==="todo" && <Todo/>}
        {this.state.whatToShow==="count" && <Count/>}
        {this.state.whatToShow==="both" && <App/>}
      </div>
    );
  }
}

ReactDOM.render(<OuterFrame />, document.getElementById("root"));
