import React, { Component } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  let params = useParams();
  let history = useNavigate();

  async function handleSave() {
    //useful for logins, so users cannot go back to the login-page after they've already logged in
    history("/movies", { replace: true });
  }

  return (
    <div className="heading">
      <h1>Movie Form {params.id}</h1>
      <button className="btn bg-primary">
        <Link style={{ color: "white" }} onClick={handleSave} to="/">
          Save
        </Link>
      </button>
    </div>
  );
}
