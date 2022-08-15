import React from "react";
import { useState, useRef } from "react";
import "./todo.css";

const Item = ({ onEdit, content, id, onRemove }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const [finish, setFinish] = useState(true);
  const localContentInput = useRef();
  const handleRemove = () => {
    onRemove(id);
  };
  const handleEdit = () => {
    onEdit(id, localContent);
    toggleEdit();
  };
  const handleFinish = () => {
    setFinish(false);
  };
  return (
    <div>
      <div>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <div className={finish ? "finish" : "finish active"}>{content}</div>
        )}
      </div>
      <div>
        {isEdit ? (
          <>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={handleRemove}>삭제하기</button>
            <button onClick={toggleEdit}>수정하기</button>
            <button onClick={handleFinish}>완료하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
