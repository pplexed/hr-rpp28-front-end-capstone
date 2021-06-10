import React from 'react';
import ReactDOM from 'react-dom';
import IRT from  './irt.jsx';


function RatingsReviews(props) {
  const allReviews = props.reviewInfo.results || [];

  //we pull all the reviews into the array
  //we just want the first two
  //thinking I need rewrite as a class
  // add a function that has a reviewsCounter that starts at 2
  // the counter increases by two with each more reviews click
  // the counter would be the number to slice from the array of reviews
  // if the counter equals the length or the total reviews then we can hide the more reviews button
  // need to account for if there are no reviews as well
  const reviewList = allReviews.map((item, index) => {
    return (
    <div key={index}>
    <IRT review={item} />
    </div>
    )
  })


    return (
      <div>
        <div>sort will go here</div>
          {reviewList}
        <div><button type="button">MORE REVIEWS</button></div>
      </div>
    );
}



export default RatingsReviews;