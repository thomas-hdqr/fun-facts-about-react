import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
</div>
  );
}

export default App;
