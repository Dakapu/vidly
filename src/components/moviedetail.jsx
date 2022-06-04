import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

class MovieDetails extends Form {
  state = {
    data: { title: "", genres: [...getGenres()], inStock: "", rate: "" },
    errors: {},
  };

  componentDidMount() {
    console.log("genres: ", this.state.data.genres);
  }

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    inStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
    rate: Joi.number().required().min(0).max(10).label("Daily rental rate"),
  };

  doSubmit = () => {
    console.log("Movie Saved!");
  };

  handleSave() {
    //useful for logins, so users cannot go back to the login-page after they've already logged in
    //  history("/movies", { replace: true });
  }

  render() {
    return (
      <div className="heading">
        <h1>Movie Form </h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderDropDown("name", "Genre", this.state.data.genres)}
          {this.renderInput("inStock", "Number in Stock", "number")}
          {this.renderInput("rate", "Daily Rental Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieDetails;
