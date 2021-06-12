import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      numberOfReviews: 2
    }
    //this.bind goes here
    // this.moreReviews = this.moreReviews.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  //functions go here

  // moreReviews() {
  //   //will need to reset number of reviews when a new product is introduced
  //   let more = this.state.numberOfReviews += 2;
  //   this.setState =({
  //     numberOfReviews: more
  //   });
  //   axios.get('/reviews/review-product', {
  //     params: {
  //       count: more
  //     }
  //   })
  //     .then((response) => {
  //       console.log('thsis the repsonse: ', this.state.numberOfReviews);
  //       this.setState( current => {
  //         return { reviewList: response.data.results};
  //       });
  //       // this.breakdown();
  //     })

  // }
  onClickHandler() {
    let more = this.state.numberOfReviews += 2;
    this.setState =({
      numberOfReviews: more
    });
    axios.get('/reviews/review-product', {
      params: {
        count: more
      }
    })
      .then((response) => {
        this.setState = ({
          reviewList: response.data.results
        });
        this.props.more(this.state.reviewList);
      });
  }

  render() {

    return (
      <div>
        <div><button type="button" onClick={this.onClickHandler}>MORE REVIEWS</button></div>
      </div>
    );
  }
}



export default MoreReviews;