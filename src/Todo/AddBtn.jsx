import React from "react";

const AddBtn = ({ onClick }) => {
  return (
    <button className="addBtn" onClick={onClick}>
      추가
    </button>
  );
};

export default AddBtn;
