import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Redirect from "./route/Redirect";

function App() {
  const [auth, setAuth] = useState(false);
  /* useEffect(() => {
    console.log("로그인값", auth);
  }, [auth]); */
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setAuth={setAuth} />} />
          <Route path="/todo" element={<Redirect auth={auth} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
