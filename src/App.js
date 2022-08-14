import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Todo from "./components/Todo";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log("로그인값", auth);
  }, [auth]);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
