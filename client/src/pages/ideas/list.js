import React, { Component } from 'react';
import { Row} from 'react-materialize';
import api from "../../services/api";


class List extends Component {
  async deleteIdea(idea) {
    if (window.confirm(`Are you sure you want to delete: "${idea.title}"`)) {
      await api.delete("/ideas?id=" + idea.id);
        this.props.loadIdeas();
    }
  }

  render () {
    return (
      <Row>
        <table class="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            </thead>
          <tbody>
            {this.props.ideas.map((idea, index) => {
              return <tr key={idea.id}>
                <td>{idea.title}</td>
                <td>{idea.description}</td>
                <td>
                  <button class="btn red" onClick={() => this.deleteIdea(idea)}>Delete</button>
                </td>
               </tr>;
             })}
          </tbody>
        </table>
      </Row>
    );
  }
}

export default List;
