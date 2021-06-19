import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


const Ratings = (props) => {
  let ratings = props.ratings;
  let totalRatings = props.totalRatings;
  let ratingArray = [];
  //need to get each number and add them all together - people who posted a review
  //get all of the ratings
  for (let key in ratings) {
    ratingArray[key] = (Number(ratings[key]));
  }
  let max = `${totalRatings}`;

  return (
    <div>
        <div>
        <label htmlFor="5star" onClick={() => {console.log('click')}}>5 Star</label>
        <progress id="5star" className=".input-rating" max={max} value={ratingArray[5] || 0}></progress>
        </div>
        <div>
        <label htmlFor="4star">4 Star</label>
        <progress id="4star"max={max} value={ratingArray[4] || 0}></progress>
        </div>
        <div>
        <label htmlFor="3star">3 Star</label>
        <progress id="3star"max={max}value={ratingArray[3] || 0}></progress>
        </div>
        <div>
        <label htmlFor="2star">2 Star</label>
        <progress id="2star"max={max} value={ratingArray[2] || 0}></progress>
        </div>
        <div>
        <label htmlFor="1star">1 Star</label>
        <progress id="1star"max={max} value={ratingArray[1] || 0}></progress>
        </div>
    </div>
  )
};

export default Ratings;