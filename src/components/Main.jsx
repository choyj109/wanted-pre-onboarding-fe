import React, { useRef, useState } from "react";
import Editor from "../Todo/Editor";
import List from "../Todo/List";

const Main = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (content) => {
    const newItem = {
      content,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    const newDataList = data.filter((it) => it.id !== targetId);
    setData(newDataList);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="todo">
      <Editor onCreate={onCreate} />
      <List
        todoList={data}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  );
};

export default Main;
