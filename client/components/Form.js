import { useState } from 'react';

export const Form = ({ addItem }) => {
  const [text, setText] = useState('');

  const submitItem = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  };

  return (
    <form className="form" onSubmit={submitItem}>
      <input
        type="text"
        className="inputField"
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add" className="submit-btn" />
    </form>
  );
};
