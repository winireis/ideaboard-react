import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";
import { login } from "../../services/auth";

class LogIn extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/login", { username, password });
        login(response.data.token);
        this.props.history.push("/ideas");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <div class="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Username</label>
          <input type="text" onChange={e => this.setState({ username: e.target.value })} />
          <label>Password</label>
          <input type="password" onChange={e => this.setState({ password: e.target.value })} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(LogIn);
