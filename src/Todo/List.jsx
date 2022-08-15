import React from "react";
import Item from "./Item";

const List = ({ todos, selectedTodo, setSelectedTodo, deleteTodo }) => {
  return (
    <div className="list">
      {todos.map((todo, index) => (
        <Item
          key={index}
          onClickItem={() => {
            setSelectedTodo(index);
          }}
          isSelected={index === selectedTodo}
          onClickDelete={(e) => {
            deleteTodo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {todo.title}
        </Item>
      ))}
    </div>
  );
};

export default List;
