import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>
        {auth ? (
          <span onClick={() => setAuth(false)}>로그아웃</span>
        ) : (
          <span onClick={() => goToLogin()}>로그인</span>
        )}
      </div>
    </nav>
  );
};

export default Nav;
