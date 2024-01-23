import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/main.js";
import Error from "./components/erorr404.js";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <Main />
      <Error />
    </>
  );
}

export default App;