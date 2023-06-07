export const ListItem = ({ text, removeItem }) => {
  return (
    <div className="list-item">
      <p>{text}</p>
      <button className="checkbox" onClick={removeItem}></button>
    </div>
  );
};
