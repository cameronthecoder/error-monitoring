import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Projects />
    </Router>
  );
}

export default App;
