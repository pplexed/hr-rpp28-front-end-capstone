import React from 'react';
import ReactDOM from 'react-dom';
import AverageNum from './breakdown-number.jsx';
import StarRating from './starsrating.jsx';
import Ratings from './breakdown-rating.jsx';
import Product from './breakdown-product.jsx';
import axios from 'axios';


class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewBreakdown: {},
      recommendations: 0,
    }
    //this.bind goes here
  }

  //functions go here


  componentDidMount() {

  }

  render() {

    return (
      <div>
        {/* average number will go here && along with the star rating */}
        <AverageNum ratings={this.props.ratings} recommendations={this.props.recommendations}/>
        <Ratings ratings={this.props.ratings} totalRatings={this.props.totalRatings}/>
        <Product characteristics={this.props.characteristics}/>
        {/* the charractics will fgo here */}
      </div>
    );
  }
}



export default Breakdown;