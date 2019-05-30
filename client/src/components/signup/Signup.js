import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  render() {

    return (
        <div>
          <h2>Signup</h2>
          <form>
            <label>Username</label>
            <input type="text" name="username"/>
            <label>Password</label>
            <input type="password" name="password" />
            <label>Password Confirmation</label>
            <input type="password" name="password_confirmation"  />
            <button class="btn waves-effect waves-light" type="submit" name="action">Signup</button>
          </form>
        </div>
    );
  }
}

export default Signup;
