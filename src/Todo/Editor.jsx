import React from "react";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const contentInput = useRef();
  const [state, setState] = useState({
    content: "",
  });
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [submit, setSubmit] = useState(true);
  const handleSubmit = () => {
    if (!state.content) {
      contentInput.current.focus();
      return;
    } else {
      onCreate(state.content);
      setSubmit(true);
      setState({
        content: "",
      });
    }
  };
  return (
    <div>
      <textarea
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
        placeholder="내용"
        type="text"
      />
      <button onClick={handleSubmit}>작성하기</button>
    </div>
  );
};

export default Editor;
