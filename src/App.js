import React, { Component } from "react";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import "./App.css";
import NavBar from "./components/common/navbar";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/" exact element={<Movies />} />
          <Route path="*" element={<NotFound to="/not-found" replace />} />
        </Routes>
      </main>
    );
  }
}

export default App;
