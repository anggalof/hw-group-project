import React from "react";

export const StarRating = (props) => {
  const { rating } = props;
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <span className="rating-number">({rating})</span>
    </div>
  );
};
