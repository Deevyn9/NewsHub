import React from "react";

const Home = ({ articles, addToPersonalized }) => {
  return (
    <div className="main-area">
      <div className="heading">
        <h2>Your Briefing</h2>
        <p>Tuesday, 26 March</p>
      </div>

      <div className="news-container">
        {articles.map((article) => (
          <div className="article" key={article.url + 1}>
            <div className="article-details">
              <div className="article-source">
                <div className="source-headline">
                  <div className="source-image">
                    <img
                      src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"
                      alt="source image"
                    />
                    <p>{article.source.name}</p>
                  </div>
                </div>
                <a href={article.url} target="_blank">
                  <div className="article-headline">
                    <h3>{article.title}</h3>
                  </div>
                </a>
              </div>

              <div className="article-card__bottom">
                <div className="name-date">
                  <div className="article-date">{article.publishedAt}</div>
                  <div className="divider">•</div>
                  <div className="article-writer">{article.author}</div>
                </div>
                <div className="preference-button">
                  <button onClick={() => addToPersonalized(article)}>
                    Add to Preference
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
