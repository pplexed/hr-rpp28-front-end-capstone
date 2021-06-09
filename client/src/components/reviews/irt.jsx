import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './starsrating.jsx';


function IRT(props) {
  const date = new Date(props.review.date.toString()).toLocaleString('en-us', {month: 'long', day: 'numeric', year : 'numeric'});

  return(
    <div>
      <div><StarRating rating={props.review.rating}/> {props.review.recommend} {date} </div>
      <div>{props.review.summary}</div>
      <div>{props.review.body}</div>
      <div>Helpful? Yes({props.review.helpfulness}) | Report</div>
      <div>{props.review.summary}</div>
    </div>
  );
}

export default IRT;



