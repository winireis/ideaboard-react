import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  render() {
    return (
        <div>
          <h2>Login</h2>
          <form>
            <label>Username</label>
            <input type="text" name="username"/>
            <label>Password</label>
            <input type="password" name="password" />
            <button class="btn waves-effect waves-light" type="submit" name="action">Signup</button>
          </form>
        </div>
    );
  }
}

export default Login;
