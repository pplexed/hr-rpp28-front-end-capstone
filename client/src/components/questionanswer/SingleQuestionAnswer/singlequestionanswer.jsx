import React from 'react';
import SingleAnswerBar from './singleanswer.jsx';
import SingleQuestionBar from './singlequestion.jsx';
import listAnswers from "../listanswersexample.js";


class SingleQuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: listAnswers.results,
      answerBars : this.props.question.answers,
      defaultlength: 0,
    };
  }

  loadMoreAnswers() {
    this.setState({ defaultlength: (this.state.defaultlength + 2) });
    console.log('load more answers event handler triggered!', this.state.defaultlength);
  }

  render() {
    let answerBars = Object.keys(this.props.question.answers).map(key =>  
      <SingleAnswerBar answer = { this.props.question.answers[key] }/>);

    let moreAnswers = this.state.answers.slice(0, this.state.defaultlength).map(key => 
      <SingleAnswerBar answer={key} />);

    return (
      <table className='question'>
        <tr>
        <div className= 'scrollable'>
          <div>
            <SingleQuestionBar question={this.props.question} AModalHandler={this.props.AModalHandler}/>
          </div>
          <div>
            {answerBars}
          </div>
          <div>
            {moreAnswers}
          </div>
          <div onClick={this.loadMoreAnswers.bind(this)}>
            load more answers
          </div>

        </div>
        </tr>
      </table>
    )
  }
}

export default SingleQuestionAnswer;