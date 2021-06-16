import React from 'react';
import ReactDOM from 'react-dom';
import IRT from  './reviews-irt.jsx';
import axios from 'axios';


class ReviewsList extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      numberOfReviews: 0,
      count: 2
    }
    //this.bind here
    // this.initialReviews = this.initialReviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
  }

  moreReviews(count) {
    axios.get('/reviews/review-product')
      .then((response) => {
        this.setState({
          allReviews: this.props.reviews,
          count: this.state.count += 2
        });
      })
  }

  componentDidMount() {
    console.log('these are the reviews: ', this.props.reviews);
  }
  render() {
    let allReviews = (this.state.allReviews.length >=1) ? this.state.allReviews : this.props.reviews
    let reviewList = allReviews.slice(0, this.state.count).map((item, index) => {
      return (
        <div key={index}>
        <IRT review={item} />
        </div>
      )
    });
    return (
      <div>
      <div>there are {this.props.totalRatings}sort will go here</div>
      <div className={(this.state.count >= 6) ? "reviews-scroll" : null  }>
            {reviewList}
      </div>
      <div><button type="button" onClick={() => {this.moreReviews(this.props.totalRatings)}}>MORE REVIEWS </button></div>
      </div>
    );
  }
}



export default ReviewsList;


  // moreReviews() {
  //   //will need to reset number of reviews when a new product is introduced
  //   let more = this.state.numberOfReviews += 2;
  //   this.setState({
  //     numberOfReviews: more
  //   });
  //   axios.get('/reviews/review-product', {
  //     params: {
  //       count: more
  //     }
  //   })
  //     .then((response) => {
  //       // console.log('these is the reponse: ', response.data.results);
  //       this.setState({
  //         reviewList: response.data.results
  //       });
  //       // console.log('thsis the after: ', this.state.reviewList);
  //       // this.breakdown();
  //     })