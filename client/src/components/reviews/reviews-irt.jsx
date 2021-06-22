import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './starsrating.jsx';
import ReviewPhotos from './reviewphotos.jsx';
import ReviewBody from './review-body.jsx';


function IRT(props) {
  const date = new Date(props.review.date.toString()).toLocaleString('en-us', {month: 'long', day: 'numeric', year : 'numeric'});
  const check = '✓';
  return(
    <div >
      <div id="textbox">
       <p className="alignleft stars-noclick"><StarRating rating={props.review.rating}/></p>
       <p className="alignright">{props.review.reviewer_name}, {date}</p>
      </div>
      <div className="reviews-summary">{props.review.summary}</div>
      <div><ReviewBody body={props.review.body}/></div>
      <div><ReviewPhotos photos={props.review.photos}/></div>
      <div className={props.review.recommend ? null : "product-hidden" }>{`${check}` + ' ' + "I recommend this product"}</div>
      <div className={props.review.response ? null: "product-hidden"}><span className="review-seller">Response from Seller: {props.review.response}</span></div>
      <div>Helpful? Yes ({props.review.helpfulness}) | Report</div>
    </div>
  );
}

export default IRT;



