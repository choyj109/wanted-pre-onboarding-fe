import React from "react";
import List from "./List";
import AddBtn from "./AddBtn";

const Title = ({
  todos,
  selectedTodo,
  setSelectedTodo,
  addTodo,
  deleteTodo,
}) => {
  return (
    <div className="title">
      <h1>Todo</h1>
      <List
        todos={todos}
        setSelectedTodo={setSelectedTodo}
        selectedTodo={selectedTodo}
        deleteTodo={deleteTodo}
      />
      <AddBtn onClick={addTodo} />
    </div>
  );
};

export default Title;
