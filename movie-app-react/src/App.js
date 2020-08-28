import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: this.state.count + 1 }));
    // setState를 호출할 때마다 react는 새 state 호출과 render()를 다시 실행.
  };
  minus = () => {
    this.setState((current) => ({ count: this.state.count - 1 }));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I've just updated");
  }

  componentWillUnmount() {
    // 다른 페이지로 이동 등의 행동할 때
    console.log("Goodbye");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
