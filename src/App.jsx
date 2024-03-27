// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Personalized from "./components/Personalized";

function App() {
  return (
    <>
      <Header />

      {/* inside router-ish */}
      <Home />
      <Personalized />
      {/* inside router-ish */}
    </>
  );
}

export default App;
