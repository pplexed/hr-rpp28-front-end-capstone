import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewsList from './reviews-list.jsx';
import Breakdown from './breakdown.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingsBreakdown: {},
      productBreakdown: {},
      recommendations: '',
      reviewList: [],
      totalRatings: 0,
      stars: [] //going to use this for sort later
    };
    //this.binds go here
    this.metaData = this.metaData.bind(this);
    this.initialReviews = this.initialReviews.bind(this);
    this.numberOfReviews = this.numberOfReviews.bind(this);
    this.sortedReviews = this.sortedReviews.bind(this);
  }
  //functions go here
  metaData() {
    axios.get('/reviews/breakdown')
      .then((response) => {
        this.setState({
          productBreakdown: response.data.characteristics,
          ratingsBreakdown: response.data.ratings,
          recommendations: response.data.recommended['true']
        });
      })
      .then(() => {
        this.numberOfReviews(this.state.ratingsBreakdown);
      });
      // .then(() => {
      //   this.initialReviews(this.state.numberOfReviews);
      //   console.log('Refactor this is the state after Meta: ', this.state);
      // })

  }

  numberOfReviews(ratings) {
    let totalRatings = 0;
    let ratingArray = [];
    for (let key in ratings) {
      totalRatings += (Number(ratings[key]));
      ratingArray[key] = (Number(ratings[key]));
    }
    this.setState({
      totalRatings: totalRatings
    });
    this.initialReviews(this.state.totalRatings);
  }

  initialReviews(count) {

    axios.get('/reviews/review-product', {
      params: {
        count: count
      }
    })
      .then((response) => {
        this.setState({
          reviewList: response.data.results
        });
      })
  }

  sortedReviews(e) {
    console.log('this was passed back!', e);
  }

  componentDidMount() {
    this.metaData();
    // this.initialReviews();
    // first will be the metaData
    // next will be the get rviuews based off of the meta data number - call that in the meta data call
  }

  render() {
    return(
      <div className="reviews-container">
            <div className="reviews-left"><Breakdown ratings={this.state.ratingsBreakdown} recommendations={this.state.recommendations} totalRatings={this.state.totalRatings} characteristics={this.state.productBreakdown}/></div>
            <div className="reviews-right"><ReviewsList reviews={this.state.reviewList} totalRatings={this.state.totalRatings} sortedReviews={this.sortedReviews}/></div>
      </div>
    )
  }

}

export default Reviews;