import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#cb8c3f";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="MoviesDen" mode={mode} toggleMode={() => toggleMode()} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home mode={mode} alert={alert}></Home>}
          ></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route
            exact
            path="/textform"
            element={<TextForm showAlert={showAlert}></TextForm>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
