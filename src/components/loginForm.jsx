import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username: ", username);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <input
                name="username"
                autoFocus
                id="username"
                type="text"
                className="form-control"
                value={account.username}
                onChange={this.handleChange}
              />
              Username
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <input
                name="password"
                autoFocus
                id="password"
                type="text"
                className="form-control"
                value={account.password}
                onChange={this.handleChange}
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
