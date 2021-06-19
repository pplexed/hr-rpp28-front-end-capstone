import React from 'react';
import ReactDOM from 'react-dom';


class Sorted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevant: [],
      helpful: [],
      newest: [],
      value: "Relevant"
    };
    //this.bind here
    this.onChangehandler = this.onChangehandler.bind(this);
    this.helpful = this.helpful.bind(this);
    this.newest = this.newest.bind(this);
    this.relevant = this.relevant.bind(this);
  }

  //functions here
  onChangehandler(event) {
    let sortType = event.target.value;
    if (sortType === 'helpful') {
      this.helpful();
    }
    if (sortType === 'newest') {
      this.newest();
      let newest = this.state.newest;
      this.props.sortedReviews(this.state.newest);
    }
    if (sortType === 'relevant') {
      this.relevant();
      let relevant = this.state.relevant;
      this.props.sortedReviews(this.state.relevant);
    }
  }

  // you would select the value - like an onchange
  // send the change value up to the functions
  // the function would evaluate the value name
  // once it mactches then it would run a function (algrthym )
  // set the state and then send that state back to review

  helpful() {
    let helpful = [ ... this.props.reviews];
    helpful.sort( (a, b) => {
      return b.helpfulness - a.helpfulness;
    })
    this.setState({
      helpful: helpful
    });
  }

  newest() {
    let newest = [ ... this.props.reviews];
    newest.sort( (a, b) => {
      return new Date(b.date) - new Date(a.date);
    })
    this.setState({
      newest: newest
    });
  }

  relevant() {
    let relevant = [ ... this.props.reviews];
    this.setState({
      relevant: relevant
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="sort">{this.props.totalRatings} reviews, sorted by</label>
          <select name="sort" id="sort" onChange={this.onChangehandler}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
          <br></br>
        </form>
      </div>
    )
  }
}

export default Sorted;

{/* <div onClick={this.onChangehandler} >{this.props.totalRatings} reviews, sorted by </div> */}