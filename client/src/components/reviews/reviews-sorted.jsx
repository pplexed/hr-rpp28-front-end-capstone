import React from 'react';
import ReactDOM from 'react-dom';


class Sorted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.bind here
  }

  //functions here

  render() {
    return (
      <div>{this.props.totalRatings} reviews, sorted by </div>
    )
  }
}

export default Sorted;