// import { useState } from 'react'
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Personalized from "./components/Personalized";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchModal from "./modals/SearchModal";
import CategoriesModal from "./modals/CategoriesModal";
import SourceModal from "./modals/SourceModal";
import DateModal from "./modals/DateModal";

function App() {
  // open search modal
  const [openSearchModal, setOpenSearchModal] = useState(false);
  // open categories modal
  const [toggleCategoriesModal, setToggleCategoriesModal] = useState(false);
  // open authors modal
  const [toggleSourcesModal, setToggleSourcesModal] = useState(false);
  // open date modal
  const [toggleDateModal, setToggleDateModal] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearchModal(true);
  };

  const handleCloseSearch = () => {
    setOpenSearchModal(false);
  };

  const handleToggleCategoriesModal = () => {
    setToggleCategoriesModal(!toggleCategoriesModal);
  };

  const handleToggleSourcesModal = () => {
    setToggleSourcesModal(!toggleSourcesModal);
  };

  const handleToggleDateModal = () => {
    setToggleDateModal(!toggleDateModal);
  };

  return (
    <Router>
      <div>
        <Header
          handleOpenSearch={handleOpenSearch}
          handleToggleCategoriesModal={handleToggleCategoriesModal}
          handleToggleSourcesModal={handleToggleSourcesModal}
          handleToggleDateModal={handleToggleDateModal}
          toggleCategoriesModal={toggleCategoriesModal}
          toggleSourcesModal={toggleSourcesModal}
          toggleDateModal={toggleDateModal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foryou" element={<Personalized />} />
        </Routes>
        <SearchModal
          openSearchModal={openSearchModal}
          handleCloseSearch={handleCloseSearch}
        />
        <CategoriesModal toggleCategoriesModal={toggleCategoriesModal} />
        <SourceModal toggleSourcesModal={toggleSourcesModal} />
        <DateModal toggleDateModal={toggleDateModal} />
      </div>
    </Router>
  );
}

export default App;
