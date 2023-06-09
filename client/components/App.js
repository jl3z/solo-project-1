import React from 'react';
import { useState, useEffect } from 'react';

import { Form } from './Form';
import { ToDoList } from './ToDoList';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoError, setTodoError] = useState(null);

  const addItem = (newItem) => {
    if (newItem === '') setTodoError('Field required!');
    else setTodos([...todos, newItem]);
  };

  // useEffect to clear nameError when `todo` is changed
  useEffect(() => {
    setTodoError(null);
  }, [todos]);

  const removeItem = (todoIndex) => {
    const todoCopy = [...todos];
    todoCopy.splice(todoIndex, 1);
    /*Attempt at making the strikethrough*/
    todoCopy.map((item, i) => {
      if (i === Number(todoIndex)) {
      }
    });

    // console.log(todoCopy);
    setTodos(todoCopy);
  };

  return (
    <div className="app">
      <h1 className="mainH1">To-Do List</h1>
      <Form addItem={addItem} />
      {todoError ? <span className="errorMsg">{todoError}</span> : null}
      <ToDoList todos={todos} removeItem={removeItem} />
    </div>
  );
}
