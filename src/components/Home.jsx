import React from "react";

const Home = () => {
  return (
    <div className="main-area">
      <div className="heading">
        <h2>Your Briefing</h2>
        <p>Tuesday, 26 March</p>
      </div>

      <div className="news-container">
        <div className="article">
          <div className="article-image">
            <img
              src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"
              alt="article image"
            />
          </div>
          <div className="article-details">
            <div className="article-source">
              <div className="source-headline">
                <div className="source-image">
                  <img
                    src="https://st2.depositphotos.com/1561359/12101/v/950/depositphotos_121012076-stock-illustration-blank-photo-icon.jpg"
                    alt="source image"
                  />
                  <p>Vanguard</p>
                </div>
              </div>
              <div className="article-headline">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur pariatur quis laboriosam, aperiam ab a!
                </h3>
              </div>
            </div>

            <div className="name-date">
              <div className="article-date">3 days ago </div>
              <div className="divider">•</div>
              <div className="article-writer"> Samm Abdu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
