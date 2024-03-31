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
  // const [toggleCategoriesModal, setToggleCategoriesModal] = useState(false);
  // const [toggleSourcesModal, setToggleSourcesModal] = useState(false);
  // const [toggleDateModal, setToggleDateModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [personalizedFeed, setPersonalizedFeed] = useState([]);

  const newsapiKey = import.meta.env.REACT_APP_NEWS_API_KEY;
  const guardianapikey = import.meta.env.REACT_APP_GUARDIAN_API_KEY;
  const newyorktimesKey = import.meta.env.REACT_APP_NEW_YORK_API_KEY;

  useEffect(() => {
    const fetchHomeArticles = async () => {
      try {
        // Fetch data from API 1 (NewsApi)
        const response1 = await fetch(
          `https://newsapi.org/v2/everything?q=everything&apiKey=${newsapiKey}`
        );
        const data1 = await response1.json();

        const articles1 = data1.articles
          .map((article) => ({
            title: article.title,
            author: article.title,
            url: article.url,
            publishedAt: article.publishedAt,
            source: { name: "News API" },
          }))
          .filter(
            (article) => !article.title.toLowerCase().includes("removed")
          );

        // Fetch data from API 2 ()
        const response2 = await fetch(
          `https://content.guardianapis.com/search?page=2&q=everything&api-key=${guardianapikey}`
        );
        const data2 = await response2.json();

        const articles2 = data2.response.results.map((article) => ({
          title: article.webTitle,
          author: "",
          url: article.webUrl,
          publishedAt: article.webPublicationDate,
          source: { name: "The Guardian" },
        }));

        // Fetch data from API 3
        const response3 = await fetch(
          `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${newyorktimesKey}`
        );
        const data3 = await response3.json();

        // Map API 3 for data
        const articles3 = data3.results.map((article) => ({
          title: article.title,
          author: article.byline,
          url: article.url,
          publishedAt: article.published_date,
          source: { name: article.source },
        }));

        // merge articles from all APIs
        const mergedArticles = [...articles1, ...articles2, ...articles3];

        // Set the merged articles in state
        setArticles(mergedArticles);
      } catch (error) {
        console.error("Error fetching home articles: ", error);
      }
    };

    fetchHomeArticles();
  }, [newsapiKey, guardianapikey, newyorktimesKey]);

  const addToPersonalized = (article) => {
    setPersonalizedFeed([...personalizedFeed, article]);
  };

  const handleOpenSearch = () => {
    setOpenSearchModal(true);
  };

  const handleCloseSearch = () => {
    setOpenSearchModal(false);
  };

  // const handleToggleCategoriesModal = () => {
  //   setToggleCategoriesModal(!toggleCategoriesModal);
  // };

  // const handleToggleSourcesModal = () => {
  //   setToggleSourcesModal(!toggleSourcesModal);
  // };

  // const handleToggleDateModal = () => {
  //   setToggleDateModal(!toggleDateModal);
  // };

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
          // handleToggleCategoriesModal={handleToggleCategoriesModal}
          // handleToggleSourcesModal={handleToggleSourcesModal}
          // handleToggleDateModal={handleToggleDateModal}
          // toggleCategoriesModal={toggleCategoriesModal}
          // toggleSourcesModal={toggleSourcesModal}
          // toggleDateModal={toggleDateModal}
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
