"use strict";

var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    return React.createElement(
      "div",
      {},
      React.createElement("button", { onClick: this.increment }, "+1"),
      React.createElement("button", { onClick: this.decrement }, "-1"),
      React.createElement("span", {}, "Score : " + this.state.counter)
    );
  }

  // render: function(){
  //  return (
  // <h1>{this.state.counter}</h1>
  //<button onClick={this.increment}>Increment</button>
  //<button onClick={this.decrement}>Decrement</button>
  //      );
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById("app"));
