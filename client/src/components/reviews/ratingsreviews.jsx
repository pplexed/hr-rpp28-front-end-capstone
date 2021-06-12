import React from 'react';
import ReactDOM from 'react-dom';
import IRT from  './irt.jsx';
import axios from 'axios';


class RatingsReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      numberOfReviews: 2
    }
    //this.bind goes here
    this.reviews = this.reviews.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
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

  moreReviews() {
    //will need to reset number of reviews when a new product is introduced
    let more = this.state.numberOfReviews += 2;
    this.setState({
      numberOfReviews: more
    });
    axios.get('/reviews/review-product', {
      params: {
        count: more
      }
    })
      .then((response) => {
        console.log('these is the reponse: ', response.data.results);
        this.setState({
          reviewList: response.data.results
        });
        console.log('thsis the after: ', this.state.reviewList);
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
    this.reviews(); //I will need to pass a product number in to here at some point
  }

  render() {
    let allReviews = this.state.reviewList || [];
    let reviewList = this.state.reviewList.map((item, index) => {
      {console.log(this.state.reviewList)}
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
        <div><button type="button" onClick={this.moreReviews}>MORE REVIEWS {this.state.numberOfReviews}</button></div>
      </div>
    );
  }
}



export default RatingsReviews;