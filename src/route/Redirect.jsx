import React from "react";
import { Navigate } from "react-router-dom";
import Main from "../components/Main";

const Redirect = ({ auth }) => {
  return auth ? <Main /> : <Navigate to="/" />;
};

export default Redirect;
