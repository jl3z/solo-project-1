import React, { Component } from 'react';
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
    <div>
      <Form addItem={addItem} />
      <TodoList todos={todos} removeItem={removeItem} />
    </div>
  );
}
