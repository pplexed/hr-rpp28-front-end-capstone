import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewBreakdown: {},
      recommendations: 0
    }
    //this.bind goes here
  }

  //functions go here

  componentDidMount() {
  }

  render() {

    return (
      <div>
      ratings will go here
      </div>
    );
  }
}



export default Ratings;