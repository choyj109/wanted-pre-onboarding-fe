import React from "react";
import Item from "./Item";

const List = ({ todoList, onRemove, onEdit }) => {
  return (
    <div>
      {todoList.map((it) => (
        <Item key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </div>
  );
};

List.defaultProps = {
  todoList: [],
};

export default List;
