import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import Login from "./components/Login";
import Redirect from "./route/Redirect";
import { setUser, getUser } from "./lib/storage";
import debounce from "lodash.debounce";

const debounceUser = debounce(setUser, 1000);

function App() {
  const [auth, setAuth] = useState(true);
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
