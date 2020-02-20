import React, { useState, useEffect } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [welcome, setWelcome] = useState("...");

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios("/welcome");
        console.log(result.data);
        setWelcome(result.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="App">
      <h1>"Hello server!" says client</h1>
      <h1>"{welcome}" says the server</h1>
    </div>
  );
}

export default App;
