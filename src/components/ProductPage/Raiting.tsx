import "./Rating.css";

export function Raiting({ rating }: { rating: number }) {
  const ratingRound = Math.round(rating * 2) / 2;
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(ratingRound)) {
        stars.push(
          <span className="raiting__star" key={i}>
            &#9733;
          </span>
        );
      } else if (i === Math.floor(ratingRound) && ratingRound % 1 !== 0) {
        const decimalWidth = `${(ratingRound % 1) * 100}%`;
        stars.push(
          <div key={i} className="raiting__star_decimal">
            <span
              className="raiting__star_half"
              style={{
                width: decimalWidth,
              }}
            >
              &#9733;
            </span>
            <span>&#9734;</span>
          </div>
        );
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  };

  return <div className="raiting">{renderStars()}</div>;
}
