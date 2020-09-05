import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    //   render() 실행 후에 실행됨
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
      //   Home으로 보내기
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
