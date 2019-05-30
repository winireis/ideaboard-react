// Importando o React
import React, { Component } from "react";
import { Row} from 'react-materialize';
import { Link } from 'react-router-dom';

class TopNavigation extends Component{
  render (){
      return (
        <Row>
          <nav>
            <div class="nav-wrapper container">
              <Link to="/ideas" class="brand-logo">Ideaboard</Link>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/">Login</Link></li>
              </ul>
            </div>
          </nav>
        </Row>
      );
  }
}

export default TopNavigation;
