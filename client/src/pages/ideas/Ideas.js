import React, { Component } from 'react';
import axios from 'axios';

class Ideas extends Component {
  constructor(props) {
       super(props);
       this.state = {
         ideas: []
       };
       this.loadIdeas = this.loadIdeas.bind(this);
     }

     async loadIdeas() {
       let response = await fetch(`http://localhost:3001/api/ideas`);
       const ideas = await response.json();
       this.setState({ ideas: ideas });
     }

     componentDidMount() {
       this.loadIdeas();
     }
  render() {
    return (
        <div>
          <h2>Ideas</h2>
        </div>
    );
  }
}

export default Ideas;
