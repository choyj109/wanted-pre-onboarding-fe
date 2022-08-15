import React from "react";

const Container = ({ todo, setTodo }) => {
  if (todo === undefined) {
    return (
      <div className="empty">
        <h1>할 일이 없습니다.</h1>
        <p>새로운 할 일을 추가해보세요.</p>
      </div>
    );
  }
  return (
    <div className="container">
      <form>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setTodo({ ...todo, title: e.target.value });
          }}
        />
      </form>
      <textarea
        value={todo.content}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setTodo({ ...todo, content: e.target.value });
        }}
      ></textarea>
    </div>
  );
};

export default Container;
