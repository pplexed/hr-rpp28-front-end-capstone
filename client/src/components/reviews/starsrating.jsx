import React from 'react';
import ReactDOM from 'react-dom';

const StarRating = (props) => {
  const starArray = [0,0,0,0,0];
  let rating = props.rating;
  for (let i = 0; i < rating; i++) {
    starArray[i] = 1;
  }
  let star;
  const stars = starArray.map((item, index) => {
    if (item === 1) {
      star = '★';
    } else {
      star = '☆';
    }
    return (
      <span key={index}>{star}</span>
    );
  });

  return (
    <span>
      {stars}
    </span>

  )
};

export default StarRating;

