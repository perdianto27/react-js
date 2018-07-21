import React from "react";
import "./Button.css";
import "./P.css";

class P extends React.Component {
  render() {
    return <p>{this.props.children}</p>;
  }
}
export default P;
