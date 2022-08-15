import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = ({ setAuth }) => {
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate("/todo");
  };
  const join = (e) => {
    e.preventDefault();
    if (password !== pwCheck) {
      return setPwError(true);
    } else {
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
          <input type="email" id="userId" placeholder="이메일" required />
        </div>
        <div>
          <label htmlFor="userPw">비밀번호</label>
          <input type="password" id="userPw" placeholder="비밀번호" required />
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
          />
          {pwError && <div>비밀번호가 일치하지 않습니다</div>}
        </div>
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default Login;
