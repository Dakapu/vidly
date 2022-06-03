import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();
  password = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
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
                ref={this.username}
                id="username"
                type="text"
                className="form-control"
              />
              Username
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <input
                ref={this.password}
                id="password"
                type="text"
                className="form-control"
              />
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
