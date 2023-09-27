import "./App";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import * as React from "react";
import "../../my-app/src/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
