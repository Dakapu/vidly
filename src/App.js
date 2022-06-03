import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import MovieDetails from "./components/moviedetail";
import NavBar from "./components/common/navbar";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movies">
            <Route path=":id" element={<MovieDetails />} />
            <Route path="" element={<Movies />} />
          </Route>
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
