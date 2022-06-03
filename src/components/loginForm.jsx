import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username: ", username);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <input
                autoFocus
                id="username"
                type="text"
                className="form-control"
              />
              Username
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <input id="password" type="text" className="form-control" />
              Password
            </label>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
