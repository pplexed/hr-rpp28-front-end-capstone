import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';


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
    this.dateDiff = this.dateDiff.bind(this);
  }

  //functions here
  onChangehandler(event) {
    let sortType = event.target.value;
    if (sortType === 'helpful') {
      this.helpful()
        .then((array) => {
          this.setState({
            helpful: array
          });
        })
        .then( () => {
          this.props.sortedReviews(this.state.helpful);
        });
    }
    if (sortType === 'newest') {
      this.newest()
        .then( (array) => {
          this.setState({
            newest: array
          });
        })
        .then( () => {
          this.props.sortedReviews(this.state.newest);
        });
    }
    if (sortType === 'relevant') {
      this.relevant()
        .then( (array) => {
          this.setState({
            relevant: array
          });
        })
        .then( () => {
          this.props.sortedReviews(this.state.relevant);
        });
    }
  }

  // you would select the value - like an onchange
  // send the change value up to the functions
  // the function would evaluate the value name
  // once it mactches then it would run a function (algrthym )
  // set the state and then send that state back to review

  helpful() {
    return new Promise ( (resolve, reject) => {
      let helpful = [ ... this.props.reviews];
      resolve(helpful.sort( (a, b) => {
        return b.helpfulness - a.helpfulness;
      }));
    });
  }

  newest() {
    return new Promise ( (resolve, reject) => {
      let newest = [ ... this.props.reviews];
      resolve(newest.sort( (a, b) => {
        return new Date(b.date) - new Date(a.date);
      }));
    });
  }

  relevant() {
    return new Promise ( (resolve, reject) => {
      let helpful = [ ... this.props.reviews];
      resolve(helpful.sort( (a, b) => {
        return b.helpfulness - a.helpfulness;
      }));
    });
  }
    dateDiff(d1, d2) {
    let diff = Math.abs(d1.getTime() - d2.getTime());
    return diff / (1000 * 60 * 60 * 24);
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


// let helpful = [ ... this.props.reviews];
// helpful.sort( (a, b) => {
//   return b.helpfulness - a.helpfulness;
// })
// this.setState({
//   helpful: helpful
// });

// array.sort( (a, b) => {
//   if (this.dateDiff(new Date(b.date), new Date(a.date)) > 30) {
//     return -1;
//   }
//   if (this.dateDiff(new Date(b.date), new Date(a.date)) < 30) {
//    return 1;
//  }
//  if (this.dateDiff(new Date(b.date), new Date(a.date)) === 0) {
//    return 0;
//  }

//  })