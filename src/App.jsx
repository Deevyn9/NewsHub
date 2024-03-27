// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Personalized from "./components/Personalized";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // open search modal
  const [openSearchModal, setOpenSearchModal] = useState(false);
  // open categories modal
  // open authors modal
  // open date modal

  const handleOpenSearch = () => {
    alert("lfg!!");
  };

  return (
    <Router>
      <div>
        <Header handleOpenSearch={handleOpenSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foryou" element={<Personalized />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
