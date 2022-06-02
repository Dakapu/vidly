import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import SideBar from "./components/common/sidebar";

class App extends Component {
  render() {
    return (
      <main className="container">
        <SideBar />
        <Movies />
      </main>
    );
  }
}

export default App;
