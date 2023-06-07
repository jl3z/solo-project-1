import { ListItem } from './ListItem';

export const ToDoList = ({ todos, removeItem }) => {
  return (
    <div className="todo-list">
      {todos.map((item, id) => {
        return (
          <ListItem text={item} removeItem={() => removeItem(id)} key={id} />
        );
      })}
    </div>
  );
};
