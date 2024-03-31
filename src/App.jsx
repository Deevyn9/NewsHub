import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Personalized from "./components/Personalized";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchModal from "./modals/SearchModal";

function App() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [personalizedFeed, setPersonalizedFeed] = useState([]);
  const [originalArticles, setOriginalArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSource, setSelectedSource] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  const [undoFilters, setUndoFilters] = useState(false);

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  useEffect(() => {
    const storedPersonalizedFeed = localStorage.getItem("personalizedFeed");
    if (storedPersonalizedFeed) {
      setPersonalizedFeed(JSON.parse(storedPersonalizedFeed));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("personalizedFeed", JSON.stringify(personalizedFeed));
  }, [personalizedFeed]);

  const newsapiKey = import.meta.env.REACT_APP_NEWS_API_KEY;
  const guardianapikey = import.meta.env.REACT_APP_GUARDIAN_API_KEY;
  const newyorktimesKey = import.meta.env.REACT_APP_NEW_YORK_API_KEY;

  useEffect(() => {
    const fetchHomeArticles = async () => {
      if (originalArticles.length === 0) {
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
              publishedAt: new Date(article.publishedAt),
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
            publishedAt: new Date(article.webPublicationDate),
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
            publishedAt: new Date(article.published_date),
            source: { name: "New York Times" },
          }));

          // merge articles from all APIs
          const mergedArticles = [...articles1, ...articles2, ...articles3];

          mergedArticles.sort((a, b) => b.publishedAt - a.publishedAt);

          setOriginalArticles(mergedArticles);
          setArticles(mergedArticles);
        } catch (error) {
          console.error("Error fetching home articles: ", error);
        }
      }
    };

    fetchHomeArticles();
  }, [newsapiKey, guardianapikey, newyorktimesKey, originalArticles]);

  const addToPersonalized = (article) => {
    // Update personalized feed in state
    const updatedPersonalizedFeed = [...personalizedFeed, article];
    console.log("Updated Personalized Feed:", updatedPersonalizedFeed);
    setPersonalizedFeed(updatedPersonalizedFeed);

    // Update personalized feed in local storage
    localStorage.setItem(
      "personalizedFeed",
      JSON.stringify(updatedPersonalizedFeed)
    );
  };

  const handleOpenSearch = () => {
    setOpenSearchModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseSearch = () => {
    setOpenSearchModal(false);
    document.body.style.overflow = "scroll";
  };

  const handleSearch = () => {
    let filteredArticles = originalArticles.slice();

    if (searchQuery.trim() !== "") {
      filteredArticles = filteredArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedSource !== "all") {
      filteredArticles = filteredArticles.filter(
        (article) => article.source.name === selectedSource
      );
    }

    if (selectedCategory !== "all") {
      filteredArticles = filteredArticles.filter(
        (article) =>
          article.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedDate !== "") {
      filteredArticles = filteredArticles.filter((article) => {
        const articleDate = new Date(article.publishedAt);
        const selectedDateTime = new Date(selectedDate + "T00:00:00");
        return articleDate.toDateString() === selectedDateTime.toDateString();
      });
    }

    filteredArticles.sort((a, b) => b.publishedAt - a.publishedAt);

    setArticles(filteredArticles);
    setUndoFilters(true);
    handleCloseSearch();
  };

  const handleUndoFilters = () => {
    setSearchQuery("");
    setSelectedSource("all");
    setSelectedCategory("all");
    setSelectedDate("");
    setUndoFilters(false);

    setArticles(originalArticles);
  };

  return (
    <Router>
      <div>
        <Header handleOpenSearch={handleOpenSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                articles={articles}
                addToPersonalized={addToPersonalized}
                handleSearch={handleSearch}
                formattedDate={formattedDate}
              />
            }
          />
          <Route
            path="/foryou"
            element={
              <Personalized
                personalizedFeed={personalizedFeed}
                formattedDate={formattedDate}
              />
            }
          />
        </Routes>
        <SearchModal
          openSearchModal={openSearchModal}
          handleCloseSearch={handleCloseSearch}
          handleSearch={handleSearch}
          setSearchQuery={setSearchQuery}
          setSelectedSource={setSelectedSource}
          setSelectedCategory={setSelectedCategory}
          setSelectedDate={setSelectedDate}
          undoFilters={undoFilters}
          handleUndoFilters={handleUndoFilters}
        />
      </div>
    </Router>
  );
}

export default App;
