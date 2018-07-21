import React, { Component } from "react";
import { container } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./modules/Button";
import P from "./modules/P";
// import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/sources/NewsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" />
        <NewsList />
      </div>
    );
  }
}

export default App;
