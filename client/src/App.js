import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/header'
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Ideas from './components/ideas/Ideas';
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <div class="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/ideas' component={Ideas} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
