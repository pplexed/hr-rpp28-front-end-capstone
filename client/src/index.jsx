import React from "react";
import ReactDOM from "react-dom";
import Overview from './components/overview.jsx';
import QuestionAnswer from './components/questionanswer.jsx';
import RatingsReviews from './components/ratingsreviews.jsx';
import RelatedItemsModule from './components/relatedItems/relatedItemsModule.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    //default state
    this.state = {};
  }

  render () {

    return (
      <div>
        <h1>FEC React Main App</h1>
        <Overview/>
        <br></br>
        <RelatedItemsModule />
        <br></br>
        <QuestionAnswer/>
        <br></br>
        <RatingsReviews/>
      </div>
    );

  }

};

ReactDOM.render(<App/>, document.getElementById('app'));