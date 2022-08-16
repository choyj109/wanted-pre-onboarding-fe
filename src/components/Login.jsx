import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setAuth }) => {
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState("");
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    if (inputId === "user@email.com" && inputPw === "password") {
      setAuth(true);
      navigate("/todo");
    } else {
      setAuth(false);
      window.alert("아이디 혹은 비밀번호가 맞지 않습니다");
      return false;
    }
  };
  const onChangeId = (e) => {
    setInputId(e.currentTarget.value);
  };
  const onChangePw = (e) => {
    setInputPw(e.target.value);
  };
  const join = (e) => {
    e.preventDefault();
    if (password !== pwCheck) {
      return setPwError(true);
    } else {
      setAuth(true);
      navigate("/todo");
    }
  };
  const checkPw = (e) => {
    setPwError(e.target.value !== password);
    setPwCheck(e.target.value);
  };
  const changePw = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          login(e);
        }}
      >
        <div>
          <label htmlFor="userId">아이디</label>
          <input
            type="email"
            id="userId"
            placeholder="이메일"
            required
            onChange={onChangeId}
            value={inputId || ""}
          />
        </div>
        <div>
          <label htmlFor="userPw">비밀번호</label>
          <input
            type="password"
            id="userPw"
            placeholder="비밀번호"
            required
            onChange={onChangePw}
            value={inputPw || ""}
          />
        </div>
        <input type="submit" value="로그인" />
      </form>
      <form
        onSubmit={(e) => {
          join(e);
        }}
      >
        <div>
          <label htmlFor="userId">아이디</label>
          <input type="email" id="userId" placeholder="이메일" required />
        </div>
        <div>
          <label htmlFor="userPw">비밀번호</label>
          <input
            type="password"
            id="userPw"
            placeholder="비밀번호"
            onChange={changePw}
            value={password}
            required
            minLength={8}
          />
        </div>
        <div>
          <label htmlFor="newPw">비밀번호 확인</label>
          <input
            type="password"
            id="newPw"
            placeholder="비밀번호 확인"
            onChange={checkPw}
            value={pwCheck}
            required
            minLength={8}
          />
          {pwError && <div>비밀번호가 일치하지 않습니다</div>}
        </div>
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default Login;
