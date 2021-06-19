import React from 'react';
import ReactDOM from 'react-dom';


class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }
    // this.bind here
    this.showMore = this.showMore.bind(this);
    this.showLess = this.showLess.bind(this);
  }
    showMore() {
      this.setState({
        showMore: true
      });
    }

    showLess() {
      this.setState({
        showMore: false
      });
    }
  //functions here

  render() {
    let message = this.props.body;
    let limit = 250;
    let showMore = this.state.showMore;
    if (message.length <= limit) {
      return <div>{message}</div>
    }

    if (showMore) {
      return (
        <div>
          <div>
            {message}
          </div>
          <div>
            <a onClick={this.showLess}>Show Less</a>
          </div>
        </div>
      )
    }

    let showAll = message.slice(0, limit) + ' ' + '...';
    return (
      <div>
        {showAll}
        <div onClick={this.showMore}>Show More</div>
      </div>
    )
  }
};

export default ReviewBody;


