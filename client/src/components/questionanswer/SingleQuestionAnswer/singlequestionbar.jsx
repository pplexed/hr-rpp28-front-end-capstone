import React from 'react';
import axios from 'axios';

class SingleQuestionBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
    }

  }

  handleHelpful = event => {
    axios.put(`http://localhost:3000/qa/questions/${this.state.question.question_id}/helpful`)
    .then((response) => {
      // console.log('helpful question clicked, sent to server, returned with', response);
    })
    .catch((err) => {
      // console.log('error in the return of reporting question helpful', err);
    })
  }

  addAnswerHandler = event => {
    // console.log('add answer handler clicked!');
  }

  render () {
    return (
      <tr>

          <span>Q: {this.state.question.question_body}</span>

            <span>    Helpful?    </span>
            <span onClick={this.handleHelpful.bind(this)}>Yes({this.state.question.question_helpfulness}) </span>
            <span onClick={this.props.AModalHandler}>| add answer </span>

      </tr>
    )
  }
}

export default SingleQuestionBar;