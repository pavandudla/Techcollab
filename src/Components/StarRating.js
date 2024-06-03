import React from 'react';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const starStyle = {
    color: '#FFD700',
    fontSize: '15px',
    marginRight: '4px',
  };

  const fullStar = <i className="fas fa-star" style={starStyle}></i>;
  const halfStar = <i className="fas fa-star-half-alt" style={starStyle}></i>;
  const emptyStar = <i className="far fa-star" style={starStyle}></i>;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(fullStar);
  }

  for (let i = 0; i < halfStars; i++) {
    stars.push(halfStar);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(emptyStar);
  }

  return <div>{stars}</div>;
}

export default StarRating;
