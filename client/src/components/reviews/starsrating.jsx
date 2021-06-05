import React from 'react';
import ReactDOM from 'react-dom';

const StarRating = (props) => {
  const starArray = [...Array(5)];
  const stars = starArray.map((item) => {
    return (
      <span>&#9733;</span>
    );
  });

  return (
    <div>
      {stars}
    </div>
  )
};

export default StarRating;