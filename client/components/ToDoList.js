import React from 'react';

import { ListItem } from './ListItem';

export const ToDoList = ({ todos, removeItem }) => {
  return (
    <div className="todo-list">
      {todos.map((item, i) => {
        return (
          <ListItem text={item} removeItem={() => removeItem(i)} key={i} />
        );
      })}
    </div>
  );
};
