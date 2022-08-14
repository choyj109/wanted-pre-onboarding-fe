import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setAuth(true);
    navigate("/");
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
          <input type="email" id="userId" placeholder="이메일" />
        </div>
        <div>
          <label htmlFor="userPw">비밀번호</label>
          <input type="password" id="userPw" placeholder="비밀번호" />
        </div>
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

export default Login;
