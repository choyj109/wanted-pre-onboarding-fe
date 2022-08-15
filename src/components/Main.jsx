import React, { useCallback, useState } from "react";
import Title from "../Todo/Title";
import Container from "../Todo/Container";
import { getItem, setItem } from "../lib/storage";
import debounce from "lodash.debounce";

const debounceSetItem = debounce(setItem, 1000);

const Main = () => {
  const [todos, setTodos] = useState(getItem("todo") || []);
  const [selectedTodo, setSelectedTodo] = useState(0);
  const setTodo = useCallback(
    (newTodo) => {
      const newTodos = [...todos];
      newTodos[selectedTodo] = newTodo;
      setTodos(newTodos);
      debounceSetItem("todo", newTodos);
    },
    [selectedTodo, todos]
  );
  const addTodo = useCallback(() => {
    const newTodos = [...todos, { title: "untitled", content: "" }];
    setTodos(newTodos);
    setSelectedTodo(todos.length);
    debounceSetItem("todo", newTodos);
  }, [todos]);
  const deleteTodo = useCallback(
    (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      if (index === selectedTodo) {
        setSelectedTodo(0);
      }
      debounceSetItem("todo", newTodos);
    },
    [selectedTodo, todos]
  );
  return (
    <div className="todo">
      <Title
        todos={todos}
        setSelectedTodo={setSelectedTodo}
        selectedTodo={selectedTodo}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
      />
      <Container todo={todos[selectedTodo]} setTodo={setTodo} />
    </div>
  );
};

export default Main;
