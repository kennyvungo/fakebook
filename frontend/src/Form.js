import { useState } from 'react';

function Form ({ setNewPost }) {
  const [title, setTitle] = useState ("");

  const handleInput = e => {
    setTitle(e.currentTarget.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    // TODO
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="post-title">Title of Post</label>
      <input type="text"
        id="post-title"
        value={title}
        onChange={handleInput}
        required />
      <button>Make a new Post!</button>
    </form>
  );
}

export default Form;