import React, { useState, useEffect } from "react";
import api from "../../services/api";
import M from "materialize-css";

function CreateIdea(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (async () => {
    await api.post("/ideas", { title, description });
    setTitle('')
    setDescription('')
    props.loadIdeas();
  });

  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div>
      <button data-target="modalCreate" class="btn modal-trigger">New Idea</button>
      <div id="modalCreate" class="modal">
        <div class="modal-content">
          <h4>New Idea</h4>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" onChange={e => setTitle(e.target.value)} />
            <label>Description</label>
            <input type="text" onChange={e => setDescription(e.target.value)} />
            <button type="submit">Create</button>
          </form>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  );
}

export default CreateIdea;
