import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import MovieForm from "./components/movieForm";
import NavBar from "./components/common/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/movies">
            <Route path=":id" element={<MovieForm />} />
            <Route path=":new" element={<MovieForm />} />
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
