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
              <th class="col s8"></th>
              <th class="col s4"></th>
            </tr>
            </thead>
          <tbody>
            {this.props.ideas.map((idea, index) => {
              return <tr key={idea.id}>
                <td class="col s8">{idea.title}</td>
                <td class="col s4">
                  <button class="btn blue">Edit</button>
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
