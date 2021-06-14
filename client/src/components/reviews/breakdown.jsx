import React from 'react';
import ReactDOM from 'react-dom';
import AverageNum from './breakdown-number.jsx';
import StarRating from './starsrating.jsx';
import Ratings from './breakdown-rating.jsx';
import axios from 'axios';


class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewBreakdown: {},
      recommendations: 0
    }
    //this.bind goes here
    this.metaData = this.metaData.bind(this);
  }

  //functions go here


  //Ratings and Reviews Sections
  metaData() {
    axios.get('/reviews/breakdown')
      .then((response) => {
        this.setState({
          reviewBreakdown: response.data,
          recommendations: response.data.recommended['true']
        });
      });
  }

  componentDidMount() {
    this.metaData(); //I will need to pass a product number in to here at some point
  }

  render() {

    return (
      <div>
        {/* average number will go here && along with the star rating */}
        <AverageNum ratings={this.state.reviewBreakdown.ratings} recommendations={this.state.recommendations}/>
        <Ratings />
        {/* the charractics will fgo here */}
      </div>
    );
  }
}



export default Breakdown;