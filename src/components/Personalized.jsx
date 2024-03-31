const Personalized = ({ personalizedFeed, formattedDate }) => {
  return (
    <div className="main-area">
      <div className="heading">
        <h2>For You</h2>
      </div>

      <div className="news-container">
        {personalizedFeed.map((article) => (
          <div className="article" key={article.title}>
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
                <div className="article-headline">
                  <h3>{article.title}</h3>
                </div>
              </div>

              <div className="name-date">
                <div className="article-date">
                  {formattedDate(article.publishedAt)}
                </div>
                <div className="divider">•</div>
                <div className="article-writer">{article.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personalized;
