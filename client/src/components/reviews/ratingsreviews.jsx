import React from 'react';
import ReactDOM from 'react-dom';
import IRT from  './irt.jsx';
import axios from 'axios';


class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviewList: []}
    //this.bind goes here
    this.reviews = this.reviews.bind(this);
  }

  //functions go here


  //Ratings and Reviews Sections
  reviews() {
    axios.get('/reviews/review-product')
      .then((response) => {
        this.setState({
          reviewList: response.data.results
        })
        // this.breakdown();
      })
  }


  // breakdown() {
  //   axios.get('/reviews/breakdown')
  //     .then((response) => {
  //       this.setState({
  //         reviewBreakdown: response.data
  //       });
  //     })
  // }

//end of Ratings and Reviews Section

  componentDidMount() {
    this.reviews();
  }

  render() {
    let allReviews = this.state.reviewList || [];
    let reviewList = this.state.reviewList.map((item, index) => {
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
}



export default RatingsReviews;