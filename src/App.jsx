import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Personalized from "./components/Personalized";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchModal from "./modals/SearchModal";
// import CategoriesModal from "./modals/CategoriesModal";
// import SourceModal from "./modals/SourceModal";
// import DateModal from "./modals/DateModal";

function App() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [toggleCategoriesModal, setToggleCategoriesModal] = useState(false);
  const [toggleSourcesModal, setToggleSourcesModal] = useState(false);
  const [toggleDateModal, setToggleDateModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [personalizedFeed, setPersonalizedFeed] = useState([]);

  const newsapiKey = import.meta.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchHomeArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/everything?q=everything&apiKey=${newsapiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching home articles: ", error);
      }
    };

    fetchHomeArticles();
  }, [newsapiKey]);

  const addToPersonalized = (article) => {
    setPersonalizedFeed([...personalizedFeed, article]);
  };

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

  const handleSearch = (query) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setArticles(filteredArticles);
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
          <Route
            path="/"
            element={
              <Home
                articles={articles}
                addToPersonalized={addToPersonalized}
                handleSearch={handleSearch}
              />
            }
          />
          <Route
            path="/foryou"
            element={<Personalized personalizedFeed={personalizedFeed} />}
          />
        </Routes>
        <SearchModal
          openSearchModal={openSearchModal}
          handleCloseSearch={handleCloseSearch}
          handleSearch={handleSearch}
        />
        {/* <CategoriesModal toggleCategoriesModal={toggleCategoriesModal} />
        <SourceModal toggleSourcesModal={toggleSourcesModal} />
        <DateModal toggleDateModal={toggleDateModal} /> */}
      </div>
    </Router>
  );
}

export default App;
