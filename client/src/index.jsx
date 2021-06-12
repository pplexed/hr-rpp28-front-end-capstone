import React from "react";
import ReactDOM from "react-dom";
import Overview from './components/overview/overview.jsx';
import QuestionAnswer from './components/questionanswer/questionanswer.jsx';
import RatingsReviews from './components/reviews/ratingsreviews.jsx';
import Breakdown from './components/reviews/breakdown.jsx';
import RelatedItemsModule from './components/relatedItems/relatedItemsModule.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    // default state
    this.state = {
      // Tim will need a property for current product id to make a GET request for related items
      // The team will need a product review rating to render on multiple components
    };
  }



// //Ratings and Reviews Sections
//   reviews() {
//     axios.get('/reviews/product')
//       .then((response) => {
//         this.setState({
//           reviewList: response.data
//         });
//         this.breakdown();
//       })
//   }

//   breakdown() {
//     axios.get('/reviews/breakdown')
//       .then((response) => {
//         this.setState({
//           reviewBreakdown: response.data
//         });
//       })
//   }

// //end of Ratings and Reviews Section


  componentDidMount() {


    // this.reviews()

  }
  render () {
    return (
      <div>
        <h1>FEC React Main App</h1>
        <Overview/>
        <br></br>
        {<RelatedItemsModule /> /* Need to pass this.state.currentProductId */}
        <br></br>
        <br></br>
        <div className="reviews-container"> Ratings and Reviews
             <div className="reviews-left"><Breakdown /></div>
            <div className="reviews-right"><RatingsReviews  /></div>
        </div>
        <QuestionAnswer/>
      </div>
    );

  }

};

ReactDOM.render(<App/>, document.getElementById('app'));