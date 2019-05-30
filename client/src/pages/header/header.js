// Importando o React
import React from "react";
import { Row} from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = () => (
  <Row>
    <nav>
      <div class="nav-wrapper container">
        <Link to="/" class="brand-logo">Ideaboard</Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  </Row>
);

export default Header;
