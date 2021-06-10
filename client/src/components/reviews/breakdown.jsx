import React from 'react';
import ReactDOM from 'react-dom';


class Breakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: []
    };
    //this.something = this.something.bind(this)
  }

  //functions here

  render() {
    console.log(this.props.breakdown.ratings);
    return (
      <div>Something here</div>
    );
  }
}

export default Breakdown;