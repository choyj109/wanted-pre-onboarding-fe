import React from "react";

const Item = ({ children, onClickItem, isSelected, onClickDelete }) => {
  return (
    <div className={isSelected ? "item active" : "item"} onClick={onClickItem}>
      {children}
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default Item;
