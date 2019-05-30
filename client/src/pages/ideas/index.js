import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import List from "./list";
import CreateIdea from './create';
import api from "../../services/api";

class Ideas extends Component{
  constructor(props){
    super(props);
    this.state={
      ideas: [],
      error: ""
    };
    this.loadIdeas = this.loadIdeas.bind(this);
  }

  async loadIdeas()  {
    try {
      const response = await api.get("/ideas", {});
      this.setState({ideas: response.data.ideas});
    } catch (err) {
      this.setState({
        error:
          "Houston, we have a problem!"
      });
    }
  }

  componentDidMount() {
    this.loadIdeas();
  }

  render() {
    return (
      <div>
        <h2>Ideas</h2>
        <List loadIdeas={this.loadIdeas} ideas={this.state.ideas}/>
        <CreateIdea loadIdeas={this.loadIdeas}/>
      </div>
    );
  }
}

export default withRouter(Ideas);
