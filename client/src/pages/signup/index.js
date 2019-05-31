import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";


class SignUp extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, password, password_confirmation } = this.state;
    if (!username || !password || !password_confirmation) {
      this.setState({ error: "You need to fill all camps" });
    } else {
      try {
        await api.post("/signup", { username, password, password_confirmation });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Sorry, an error ocurried when creating your account." });
      }
    }
  };

  render() {
    return (
      <div class="container">
        <h1>Signup</h1>
        <form onSubmit={this.handleSignUp}>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Username</label>
          <input type="text" onChange={e => this.setState({ username: e.target.value })} />
          <label>Password</label>
          <input type="password" onChange={e => this.setState({ password: e.target.value })} />
          <label>Password Confirmation</label>
          <input type="password" onChange={e => this.setState({ password_confirmation: e.target.value })}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
