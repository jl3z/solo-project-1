import React from 'react';
import { useState } from 'react';

import { Form } from './Form.js';
import { ToDoList } from './ToDoList.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

  const removeItem = (todoIndex) => {
    const todoCopy = [...todos];

    todoCopy.splice(todoIndex, 1);
    setTodos(todoCopy);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Form addItem={addItem} />
      <ToDoList todos={todos} removeItem={removeItem} />
    </div>
  );
}
