import React from "react";
import { Navigate } from "react-router-dom";
import Todo from "../components/Todo";

const Redirect = ({ auth }) => {
  return auth ? <Todo /> : <Navigate to="/" />;
};

export default Redirect;
